import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

import './styles.css';

class SignUp extends Component{
  constructor(){
    super();

    this.state = {
      name: '',
      course: '',
      picture: '',
      bio: '',
      email: '',
      password: ''
    }
  }
  render(){
  return (
    <div className="signup">
      <Paper zDepth={3}>
        <div className="cardContainer">
          <div className="formContainer">
            <form autoComplete="off">
                <div>
                  <div>
                    <TextField name="Email" hintText="Email" fullWidth type="email" label="Email" />
                  </div>
                  <div>
                    <TextField name="Password" hintText="Password" fullWidth type="password" label="Password" />
                  </div>
                  <div>
                    <TextField name="ConfirmPassword" hintText="Confirm Password" fullWidth type="verifypassword" label="VerifyPassword" />
                  </div>
                </div>
              <div>
              </div>
                <div>
                  <RaisedButton className="enterButton" primary fullWidth type="submit">
                    Sign Up
                  </RaisedButton>
                </div>
            </form>
          </div>
        </div>
      </Paper>
    </div>
  )
  }
};

  
export default SignUp;