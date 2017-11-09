import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import ProfileCard from '../../components/ProfileCard';

const Profile = ({profileData}) => {
    return (
        <div className="appProfileContent">

                <div className="profileContainer">
                {profileData.map(user =>
                    <ProfileCard key={user._id} user={user} />  )}
                </div>
 
        </div>
    );
}

export default Profile;



