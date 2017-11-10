import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Users } from '../../../collections/users.js';

import Idea from './Idea';


class ProfileButtonContainer extends Component {


    render() {

        let userId = this.props.currentUserId;
        console.log(this.props.currentUserId);

        return (
            <ProfileButton  userId={userId} />
        );
    }
}




export default createContainer(() => {
    Meteor.subscribe('users'); 
    return {
      currentUserId: Meteor.userId(), 
    }; 
  }, ProfileButtoContainer);
  