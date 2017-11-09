import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Profiles } from '../../../collections/profiles';
import { Ideas } from '../../../collections/ideas';

import Profile from './Profile';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';




class ProfileContainer extends Component {

  render() {
     console.log(this.props.ideas);
    // console.log(this.props.profiles);

      let usersData = this.props.profiles;
      let ideasData = this.props.ideas ? this.props.ideas : null;



      
      let userid = this.props.match.params.userid;




      let dataArray = ideasData.map(idea =>{
        const newIdeaVotes = usersData.find( (user)=> idea.votes === user._id)
        idea.votes = newIdeaVotes;
  
        return idea;
      })

      console.log(dataArray);











      let profileData = usersData.filter((user) => {
        return (
          userid === user._id
        );
      })

      // let voteData = ideasData.map((user) => {
      //   return (
      //     userid === user._id
      //   );
      // })


      return (
          <Profile profileData={profileData} ideasData={ideasData}  />
          
      );
  }
}



export default createContainer(() => {
  //setup subscription, pass in the publications name
  Meteor.subscribe('usersAndIdeas'); //Whatever is available from the publication will be returned here
  //return an object, whatever that is returned will be available on props for this component
  return {
    profiles: Profiles.find({}).fetch(),
    ideas: Ideas.find({}).fetch()
  }; //We need to call fetch() that will invoke the cursor to actually execute the query
}, ProfileContainer);