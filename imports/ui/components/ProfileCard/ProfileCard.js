import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


import './styles.css';



const ProfileCard = ({user}) => (
    <Card className="profileCard">
 
    <CardMedia
      overlay={<CardTitle title={user.name} subtitle={`Enrolled in ${user.course}`}  />}
    >
      <img src={user.avatar} alt="" />
    </CardMedia>
    <CardTitle  subtitle={`Bio:  ${user.bio}`} />
 
    <CardActions>
      <FlatButton label="View Profile" />

    </CardActions>
  </Card>
);

ProfileCard.propTypes = {

};

export default ProfileCard;
