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


        const background = {
            backgroundImage: 'url("/images/grumpy_dog.jpg" )', 
        }
    

        return (
        //const logged_in_user = Meteor.userId();
            <Card className="userCard">
                <CardMedia className="userImage" >
                    <div className = "userCardImage"  style={background}>
         
                    </div>
                </CardMedia>


            <div className="userNameButton">
                <div>
                <CardTitle title={user.name} subtitle={`Enrolled in ${course}`} titleColor="#e1231a" subtitleColor="#212121" />
                </div>
 
                <Link to={`/profile/${user._id}`}>
                    <CardActions>
                        <div className="viewButton">
                            <FlatButton backgroundColor= "#e1231a" hoverColor="#E53935" style={{color:"#FAFAFA"}} label="View Profile" />
                        </div>
                    </CardActions>
                </Link>
            </div>

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
