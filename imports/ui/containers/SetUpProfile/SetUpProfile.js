import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import {createContainer} from 'meteor/react-meteor-data';
import {Profiles} from '../../../collections/profiles';

import './styles.css';

class SetUpProfile extends Component{
  constructor(){
    super();

    this.state = {
      name: '',
      course: '',
      bio: '',
      picture: ''
    }
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
      event.preventDefault();
      Meteor.call('profiles.update', this.state)
  }

  render(){
      return(
        <div className="OuterBody">
        <div className="container">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">SETUP PROFILE</h1>
          <form>
            <div className="input-container">
                <TextField name="name"
                hintText="What's your name?"
                fullWidth label="Name"
                value={this.state.name}
                onChange={this.handleChange}
                />
            </div>

            <div className="input-container">
                <TextField name="course"
                hintText="Course" fullWidth
                label="course"
                value={this.state.course}
                onChange={this.handleChange}
                />
            </div>

            <div className="input-container">
                <TextField name="bio"
                hintText="About you"
                fullWidth label="bio"
                value={this.state.bio}
                onChange={this.handleChange}
                />
            </div>

            <div><input type="file"
                    name="picture"
                    value={this.state.picture}
                    onChange={this.handleChange}
                    className="foo"
                /></div>

            <div className="button-container">
              <button type="submit" label="SUBMIT Profile info" onClick={this.handleSubmit}><span>Submit</span></button>
            </div>
          </form>
        </div>
        </div>
        </div>
      )
  }
}

export default SetUpProfile;