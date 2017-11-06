import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './styles';

const CreateIdea = () => (
  <div className="create_idea idea_form">
    <TextField
      hintText="Title"
      errorText="This field is required"
    /><br />
    
    <TextField
      hintText="Description"
      errorText="This field is required."
      floatingLabelText="Enter idea description here"
      multiLine={true}
      rows={2}
    /><br />
    <div>
    <RaisedButton
        containerElement='label' // <-- Just add me!
        label="Upload image" >
        <input type="file" />
    </RaisedButton>
    </div>
    <RaisedButton label="SUBMIT IDEA" secondary={true} />
    
  </div>
);

export default CreateIdea;