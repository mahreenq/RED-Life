import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Profiles } from '../../../collections/profiles';
import Profile from './Profile';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';



class ProfileContainer extends Component {

  render() {
    console.log('userId', this.props.profiles);
      let usersData = this.props.profiles;
      let userid = this.props.match.params.userid;

      let profileData = usersData.filter((user) => {
        return (
          userid === user._id
        );
      })

      return (
          <Profile profileData={profileData}  />
          
      );
  }
}



export default createContainer(() => {
  //setup subscription, pass in the publications name
  Meteor.subscribe('users'); //Whatever is available from the publication will be returned here
  //return an object, whatever that is returned will be available on props for this component
  return {
    profiles: Profiles.find({}).fetch()
  }; //We need to call fetch() that will invoke the cursor to actually execute the query
}, ProfileContainer);