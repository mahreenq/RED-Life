import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

const style = {
  margin: 12,
};

class Button extends Component {

  handleClick() {
    console.log("worked")
    Meteor.logout((err) => console.log(err))
  }

  render(){
    return (
      <div>
        <Link to="/login"><RaisedButton label="Logout" style={style} onClick={this.handleClick.bind(this)} /></Link>
        <Link to="/profile"><RaisedButton label="Profile" secondary={true} style={style} /></Link>
      </div>
    )
  }
};

export default Button;