import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accounts } from 'meteor/accounts-base';
import SignUp from '../../components/SignUp/SignUp';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

class SignUpContainer extends Component {

  render() {
    return (
      <div>
        <SignUp />
      </div>
    )
  }

}


export default SignUpContainer;