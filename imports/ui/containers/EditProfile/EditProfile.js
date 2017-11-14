import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import {createContainer} from 'meteor/react-meteor-data';
import {Profiles} from '../../../collections/profiles';

import './styles';

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
        //console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // form field validations

        let errorMessage = "";
        let fieldLength = 0;

        fieldLength = this.refs.name.props.value.length;
        if (fieldLength === 0) {
            errorMessage += "Name cannot be blank.\n"
        } else if (fieldLength > 30) {
            errorMessage += "Name length cannot exceed 30 characters.\n"
        }

        fieldLength = this.refs.course.props.value.length;
        if (fieldLength === 0) {
            errorMessage += "Course cannot be blank.\n"
        } else if (fieldLength > 30) {
            errorMessage += "Course length cannot exceed 30 characters.\n"
        }

        fieldLength = this.refs.bio.props.value.length;
        if (fieldLength > 150) {
            errorMessage += "Bio length cannot exceed 150 characters.\n"
        }

        if (this.refs.picture.files.length > 0) {
            if (this.refs.picture.files[0].size > 2000000) {
                errorMessage += "Picture size cannot exceed 2 MB.\n"
            }
        }

        if (errorMessage.length > 0) {
            errorMessage += "\nPlease correct before submitting.\n"
            alert(errorMessage);
        } else {
            Meteor.call('profiles.update', this.state)
            // redirect to ideas page after submit
            this.props.history.push(`/profile/${Meteor.userId()}`);
        }
    }

    handleCancel = (event) => {
        event.preventDefault();

        this.props.history.push(`/profile/${Meteor.userId()}`);
    }

    componentDidMount = () => {
        setTimeout(() => {
            let dbInfo = this.props.currentUser[0] !== undefined ? this.props.currentUser[0] : "...Loading";
            this.setState({
                name: dbInfo.name,
                course: dbInfo.course,
                bio: dbInfo.bio,
            })
        },1000);
    }

    render(){
        return(
            <div className="editOuterBody">
                <div className="editContainer">
                    <div className="editCard"></div>
                    <div className="editCard">
                        <h1 className="editTitle">EDIT PROFILE</h1>
                        <form>
                            <div className="editInputContainer">
                                <TextField
                                    name="name"
                                    ref="name"
                                    hintText="What's your name?"
                                    fullWidth label="Name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="editInputContainer">
                                <TextField
                                    name="course"
                                    ref="course"
                                    hintText="eg Enrolled in Web Dev , Staff Member" fullWidth
                                    label="course"
                                    value={this.state.course}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="editInputContainer">
                                <TextField
                                    name="bio"
                                    ref="bio"
                                    hintText="About you"
                                    fullWidth label="bio"
                                    value={this.state.bio}
                                    onChange={this.handleChange}
                                />
                            </div>

                            {/* <div className="editPicture">
                                <input type="file"
                                    name="picture"
                                    ref="picture"
                                    value={this.state.picture}
                                    onChange={this.handleChange}
                                />
                            </div> */}

                            <div><input type="file"
                                name="picture"
                                ref="picture"
                                value={this.state.picture}
                                onChange={this.handleChange}
                                className="foo"
                            /></div>

                            <div className="saveEdit">
                                <RaisedButton
                                    label="Save"
                                    secondary={true}
                                    onClick={this.handleSubmit}
                                />
                                <RaisedButton
                                    label="Cancel"
                                    onClick={this.handleCancel}
                                    backgroundColor='#757575'
                                    labelColor='#ffffff'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const EProfile = withRouter(EditProfile);

export default createContainer(() => {
    Meteor.subscribe('user');
    return {
        currentUser: Profiles.find({}).fetch(),
        currentUserId: Meteor.userId()
    };
}, EProfile);
