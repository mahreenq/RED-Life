import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link, withRouter} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
// import AccountsUIWrapper from '../AccountsWrapper/index.js';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';


// const recentsIcon = <FontIcon className="material-icons"></FontIcon>;

import './styles.css';
import { setTimeout } from 'timers';

const style = {
  margin: 12,
};

class Button extends Component {

  onSigninClick(event) {
    event.preventDefault();

    Meteor.call('ideas.insert', (error, ideasId) => {
      this.props.history.push(`/ideas/${ideasId}`);
    });
  }

  handleClick = () => {
    console.log("worked")
    Meteor.logout((err) => console.log(err))
    this.props.history.push(`/`);
  }

  render(){
    console.log(this.props.history.location.pathname);
    let pathName = this.props.history.location.pathname;
    let currentUserId = Meteor.userId();
      return (


      <div className="headerButtons">

        <div className="accountsUIlogin">
          <RaisedButton label="Logout" style={style} onClick={this.handleClick}>
          </RaisedButton>
        </div>


      
       { pathName !== "/" && pathName !== "/setupprofile" && pathName !== "/register" ? 
        <div className="ideasUsersButtons">
          <Link to="/ideas"><RaisedButton label="Ideas" secondary={true} style={style} /></Link>
          <Link to="/users"><RaisedButton label="Users" secondary={true} style={style} /></Link>
         
        </div>
        : null }


        <div className="profileButton">
          {pathName !== "/" && pathName !== "/setupprofile" && pathName !== "/register"? 
                  <Link to={`/profile/${currentUserId}`}>
                      <Avatar
                        icon={<i class="material-icons ">person</i>}
     
                        color="#e1231a"
                        backgroundColor="white"
                        size={35}
                        style={style}
                      />
                     </Link>  : null }
        </div>
        

  
      </div>
      
    )
  }
};

const newButton = withRouter(Button);
export default newButton;