import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import { fetchItemsAndUsers, loadTagValues } from '../../redux/modules/items';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Idea from './Idea';

class IdeaContainer extends Component {
    componentDidMount() {
        let profileId = this.props.match.params.id;
        //this.props.dispatch(fetchItemsAndUsers(tagValues, profileId));
    }

    render() {
        let ideaData = this.props.ideaData;

        return (
            <Idea
                ideaData={ideaData}
            />
        );
    }
}

export const ideaQuery = gql`
//     query getItems {
//         items {
//             id
//             title
//             imageurl
//             description
//             itemowner {
//                 id
//                 email
//                 fullname
//             }
//             created
//             borrower {
//                 fullname
//             }
//         }
//     }
`;

IdeaContainer.propTypes = {

};

const mapStateToProps = state => ({
    ideaData: state.items.ideaData
});

export default createContainer(() => {
  Meteor.subscribe('ideas');

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(), // b/c pulling it off above breaks if logged out
    ideas: Ideas.find({}).fetch()
  };
}, IdeaContainer);
