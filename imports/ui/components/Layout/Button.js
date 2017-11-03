import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const Button = () => (
  <div>
    <RaisedButton label="Login" style={style} />
    <RaisedButton label="Profile" secondary={true} style={style} />

  </div>
);

export default Button;