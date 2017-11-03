import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import './styles.css';

const SignUp = () => {

  return (
    <div className="signup">
      <Paper zDepth={3}>
        <div className="cardContainer">
          <div className="formContainer">
            <form autoComplete="off">
              <div>
                <TextField name="Name" hintText="What's your name?" fullWidth label="Name" />
              </div>
              <div>
                <TextField name="Phone" hintText="Phone number" fullWidth label="Phone"/>
              </div>
                <div>
                  <div>
                    <TextField name="Email" hintText="Email" fullWidth type="email" label="Email" />
                  </div>
                  <div>
                    <TextField name="Password" hintText="Password" fullWidth type="password" label="Password" />
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
};


export default SignUp;