import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import AccountsUIWrapper from '../AccountsWrapper/index.js';

import './styles.css';

const style = {
  margin: 12,
};

class Button extends Component {

  onSigninClick(event) {
    event.preventDefault();

    Meteor.call('ideas.insert', (error, ideasId) => {
      this.props.history.push(`/bins/${ideasId}`);
    });
  }

  handleClick() {
    console.log("worked")
    Meteor.logout((err) => console.log(err))
  }

  render(){MediaDeviceInfo
    return (
      <div>
        <RaisedButton label="Sign In" style={style}>
          <AccountsUIWrapper onClick={this.onSigninClick.bind(this)} />
        </RaisedButton>
        <Link to="/profile"><RaisedButton label="Profile" secondary={true} style={style} /></Link>
      </div>
    )
  }
};

export default Button;