import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './styles';

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
        console.log(this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return(
            <form className="create_idea idea_form">
                <TextField
                hintText="Title"
                errorText="This field is required"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                /><br />
                
                <TextField
                hintText="Description"
                errorText="This field is required."
                floatingLabelText="Enter idea description here"
                multiLine={true}
                rows={2}
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                /><br />
                <div>
                <RaisedButton
                    containerElement='label' // <-- Just add me!
                    label="Upload image" >
                    <input type="file"
                        name="picture"
                        value={this.state.picture}
                        onChange={this.handleChange}
                    />
                </RaisedButton>
                </div>
                {/* <RaisedButton label="SUBMIT IDEA" secondary={true} /> */}
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>   
        )
    }
};

export default CreateIdea;