import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

import './styles.css';

const styles = {
    description: {
        fontSize: '1rem',
        padding: '1rem 0 1rem 0',
    },
};

const ProfileCard = ({user}) => (
  //const logged_in_user = Meteor.userId();
    <Card className="profileCard">
        <CardMedia className="profileImage"
            overlay={
                <CardTitle
                    className="profileTitle"
                    title={user.name}
                    subtitle={`Enrolled in ${user.course}`}
                 />
             }
        >
            <div>
                <img src={user.avatar} alt="" />
            </div>
        </CardMedia>
        <CardText style={styles.description}>
            {`Bio:  ${user.bio}`}
        </CardText>
    <CardMedia
      overlay={<CardTitle title={user.name} subtitle={`Enrolled in ${user.course}`}  />}
    >
      <img src={user.avatar} alt="" />
    </CardMedia>
    <CardTitle  subtitle={`Bio:  ${user.bio}`} />
    <Link to={user._id}>
        <CardActions>
            <FlatButton label="View Profile" />
        </CardActions>
    </Link>
  </Card>
);

ProfileCard.propTypes = {

};

export default ProfileCard;
