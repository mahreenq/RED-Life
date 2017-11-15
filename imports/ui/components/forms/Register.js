import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import EmailPasswordForm from './EmailPasswordForm';
import './styles.css';

class Register extends Component{
    getDefaultProps() {
      let loginMsg = "Already have an account?";
      return {
        loginLink: <p>{loginMsg} <a href="/login">Sign In</a></p>
      };
    }

    createUser = (e) => {
      e.preventDefault();
      const
        email = $('#email').val(),
        password = $('#password').val().trim()
      ;

      Accounts.createUser(
        {
          email: email,
          password: password
        },
        function(error) {
          if (error) {
            console.log("there was an error: " + error.reason);
          } else {
            FlowRouter.go('home');
          };
        }
      );
      this.props.history.push(`/setupprofile`);
    }

    render() {
      return (
        <div className="registerContainer row">
          <div className="registerSection col-md-6 col-md-offset-3">
            <h1>Register</h1>
              <EmailPasswordForm
                submitBtnLabel="Register"
                submitAction={this.createUser}
              />
             {this.props.loginLink}
          </div>
        </div>
      )
    }
};

const newRegister = withRouter(Register);

export default newRegister;
