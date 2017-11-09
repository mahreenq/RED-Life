import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import {createContainer} from 'meteor/react-meteor-data';
import {Profiles} from '../../../collections/profiles';

class EditProfile extends Component{
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

  componentDidMount = () => {
    this.setState({
        [event.target.name]: "name",
        })
  }

  render(){
      console.log('userid', this.props.currentUser);
      return(
        <form>
          <div>
            <TextField 
            name="name"
            defaultValue='Hi there'
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
          <RaisedButton type="submit" label="SAVE CHANGES" secondary={true} onClick={this.handleSubmit}/>
          </div>
        </form>
      )
  }
}


export default createContainer(() => {
    //setup subscription, pass in the publications name
    Meteor.subscribe('user'); //Whatever is available from the publication will be returned here
    //return an object, whatever that is returned will be available on props for this component
    return {
        currentUser: Profiles.find({}).fetch()
    }; //We need to call fetch() that will invoke the cursor to actually execute the query
  }, EditProfile);