import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

const style = {
  margin: 12,
};

const Button = () => (
  <div>
    <Link to="/login"><RaisedButton label="Logout" style={style} /></Link>
    <Link to="/profile"><RaisedButton label="Profile" secondary={true} style={style} /></Link>
  </div>
);

export default Button;