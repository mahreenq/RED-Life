import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {createContainer} from 'meteor/react-meteor-data';
import {Ideas} from '../../../collections/ideas';

import './styles';

const styles = {
    button: {
        backgroundColor: 'red',
    }
};

class CreateIdea extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            description: '',
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
        console.log(1);
        Meteor.call('ideas.insert', this.state)
        console.log('id', this.props.ideas);
        // redirect to ideas page after submit
        this.props.history.push('/ideas');
    }

    render(){
        return(
            <div className="outer-body">
            <div className="idea_form">
            <div className="title">Create Idea for Friday Social !</div><br />
            <form className="create_idea">
            <div>
                <TextField
                hintText="Title"
                errorText="This field is required"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                /></div>

            <div><TextField
                hintText="Description"
                errorText="This field is required."
                floatingLabelText="Enter idea description here"
                multiLine={true}
                rows={3}
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                /><br />
                <div class="add-visual">
                    <input type="file"
                        name="picture"
                        value={this.state.picture}
                        onChange={this.handleChange}
                    />
                   
                </div>
                {/* <RaisedButton label="SUBMIT IDEA" secondary={true} /> */}
                <div><RaisedButton type="submit" label="SUBMIT IDEA" secondary={true} onClick={this.handleSubmit} style={styles.button} /></div>
                </div>
            </form>
            </div>
            </div>
        )
    }
};

export default createContainer(() => {
    Meteor.subscribe('ideas');
    return {
        ideas: Ideas.find({}).fetch()
    }
}, CreateIdea);
