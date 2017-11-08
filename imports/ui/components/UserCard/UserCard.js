import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import {Profiles} from '../../../collections/profiles';
import {createContainer} from 'meteor/react-meteor-data';

import './styles.css';

const styles = {
    description: {
        fontSize: '1rem',
        padding: '1rem 0 1rem 0',
    },
};

const UserCard = ({user}) => {
        let course = '';
        let bio = '';

        if (user.course !== undefined) {
            course = user.course;
        } else {
            course = 'unknown';
        }

        if (user.bio !== undefined) {
            bio = user.bio;
        } else {
            bio = 'None';
        }

        return (
        //const logged_in_user = Meteor.userId();
            <Card className="userCard">
                <CardMedia className="userImage"
                    overlay={
                        <CardTitle
                            className="userTitle"
                            title={user.name}
                            subtitle={`Enrolled in ${course}`}
                        />
                    }
                >
                    <div>
                        <img src="/images/grumpy_dog.jpg" alt="" />
                    </div>
                </CardMedia>
                <CardText style={styles.description}>
                    {`Bio:  ${bio}`}
                </CardText>
            <Link to={user._id}>
                <CardActions>
                    <div className="viewButton">
                        <FlatButton label="View Profile" />
                    </div>
                </CardActions>
            </Link>
        </Card>
        )
};

export default UserCard;

// <CardMedia
// overlay={<CardTitle title={user.name} subtitle={`Enrolled in ${user.course}`}  />}
// >
// <img src={user.avatar} alt="" />
// </CardMedia>
//<CardTitle  subtitle={`Bio:  ${user.bio}`} />
