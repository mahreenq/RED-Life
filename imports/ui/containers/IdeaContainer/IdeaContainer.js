import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Ideas } from '../../../collections/ideas.js';

import Idea from './Idea';

const PER_PAGE = 20;

class IdeaContainer extends Component {
    componentDidMount() {
        //let profileId = this.props.match.params.id;
        //this.props.dispatch(fetchItemsAndUsers(tagValues, profileId));
    }

    removeIdea(idea) {
        if (confirm('Remove this idea?')) {
            Meteor.call('ideas.removeIdea', idea);
        };
    }

    addVote(idea) {
        Meteor.call('ideas.addVote', idea);
    }

    removeVote(idea) {
        Meteor.call('ideas.removeVote', idea);
    }

    render() {
        let ideaData = this.props.ideas;
        let userId = this.props.currentUserId;

        return (
            <Idea
                ideaData={ideaData}
                removeIdea={this.removeIdea}
                addVote={this.addVote}
                removeVote={this.removeVote}
                userId={userId}
            />
        );
    }
}

export default createContainer(() => {
  //setup subscription, pass in the publications name
  Meteor.subscribe('ideas', PER_PAGE); //Whatever is available from the publication will be returned here
  //return an object, whatever that is returned will be available on props for this component
  return {
      currentUser: Meteor.user(),
      currentUserId: Meteor.userId(), // b/c pulling it off above breaks if logged out
      ideas: Ideas.find({}).fetch()
  }; //We need to call fetch() that will invoke the cursor to actually execute the query
}, IdeaContainer);

IdeaContainer.propTypes = {

};

// const mapStateToProps = state => ({
//     ideaData: state.items.ideaData
// });

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
