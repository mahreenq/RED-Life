import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

//import { fetchItemsAndUsers, loadTagValues } from '../../redux/modules/items';
//import { graphql } from 'react-apollo';
//import gql from 'graphql-tag';

import Idea from './Idea';

class IdeaContainer extends Component {
    componentDidMount() {
        //let profileId = this.props.match.params.id;
        //this.props.dispatch(fetchItemsAndUsers(tagValues, profileId));
    }

    render() {
        //let ideaData = this.props.ideaData;

        let ideaData = [
            {
                title: 'hi',
                description: 'buy',
                author: 'h',
                imageurl: 'yiuy'
            },

            {
                title: 'hi',
                description: 'buy',
                author: 'h',
                imageurl: 'yiuy'
            }

        ]

        return (
            <Idea
                ideaData={ideaData}
            />
        );
    }
}

export default IdeaContainer;

//export const ideaQuery = gql`
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
//`;

// IdeaContainer.propTypes = {

// };

// const mapStateToProps = state => ({
//     ideaData: state.items.ideaData
// });

// export default createContainer(() => {
//   Meteor.subscribe('ideas');

//   return {
//     currentUser: Meteor.user(),
//     currentUserId: Meteor.userId(), // b/c pulling it off above breaks if logged out
//     ideas: Ideas.find({}).fetch()
//   };
// }, IdeaContainer);

// const IdeaWrap = createContainer(function() {
//     Meteor.subscribe('ideas');
//
//     return {
//         currentUser: Meteor.user(),
//         currentUserId: Meteor.userId(), // b/c pulling it off above breaks if logged out
//         ideas: Ideas.find({}).fetch()
//     };
// }, IdeaContainer);
//
// export default connect(mapStateToProps)(IdeaWrap);
