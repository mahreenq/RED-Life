import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import './styles.css';

const Login = () => (
  <div className="page login">
    <div className="cardContainer">
      <Paper zDepth={3}>
        <div className="formContainer">
          <form autoComplete="off">
            <div className="textField">
              <TextField
                className="textField"
                hintText="E-mail"
                type="email"
                label="Email"
                name="email"
                errorText="error"
                onChange="handle Change"
              />
            </div>
            <div className="textField">
              <TextField
                className="textField"
                hintText="Password"
                type="password"
                label="Password"
                name="password"
                errorText="Password Erroe"
                onChange="handlePassword"
              />
            </div>
            <RaisedButton className="loginButton" primary fullWidth type="submit">
              Login
            </RaisedButton>
            <Link to={'/signup'}>
              <RaisedButton className="signUpButton" primary fullWidth>
                Sign Up
              </RaisedButton>
            </Link>
          </form>
        </div>
      </Paper>
    </div>
  </div>
);

Login.propTypes = {
  
};

export default Login;