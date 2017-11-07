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
    console.log(this.state)
  }

  handleSubmit = (event) => {
      event.preventDefault();
      Meteor.call('profiles.update', this.state)
      console.log(this.state)
  }

  render(){
      return(
        <form>
          <div>
            <TextField name="name"
            hintText="What's your name?"
            fullWidth label="Name"
            value={this.state.name}
            onChange={this.handleChange}
            />
          </div>
          <div>
            <TextField name="course"
            hintText="Course" fullWidth
            label="course"
            value={this.state.course}
            onChange={this.handleChange}
            />
          </div>
          <div>
            <TextField name="bio"
            hintText="About you"
            fullWidth label="bio"
            value={this.state.bio}
            onChange={this.handleChange}
            />
          </div>
          <div>
          <input type="file"
            name="picture"
            value={this.state.picture}
            onChange={this.handleChange}

          />
          </div>

          <div>
          <RaisedButton type="submit" label="SUBMIT IDEA" secondary={true} onClick={this.handleSubmit}/>
          </div>
        </form>
      )
  }
}

export default createContainer(() => {
  Meteor.subscribe('profiles');
  return {
      profiles: Profiles.find({}).fetch()
  }
}, SetUpProfile);