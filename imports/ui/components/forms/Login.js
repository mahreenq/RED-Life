import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import EmailPasswordForm from './EmailPasswordForm'

class Login extends Component{
    loginWithPassword = (e) => {
      e.preventDefault();
      const email = $('#email').val(),
            password = $('#password').val().trim()
      ;

      Meteor.loginWithPassword(email, password, function(error) {
        if (error) {
          console.log("There was an error:" + error.reason);
        } else {
            const thisProps = this.props;

            Meteor.loginWithPassword(email, password, function(error) {
                if (error) {
                    errorMessage = "There was an error: " + error.reason;
                    console.log(errorMessage);
                    alert(errorMessage);
                } else {
                    thisProps.history.push('/ideas')
                }
            });

            //this.props.history.push(`/ideas`);
        }
      });
      this.props.history.push(`/ideas`);
    }

    render() {
          return (
              <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h1>Login</h1>
              <EmailPasswordForm
                submitBtnLabel="Login"
                submitAction={this.loginWithPassword}
              />
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </div>
          )
      }
};

const newLogin = withRouter(Login);

export default newLogin;
