import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import ProfileCard from '../ProfileCard';

const ProfileCardList = ({profileData}) => {
    return (
    <div className="profileCardList">
        {profileData.map(user =>
            <ProfileCard key={user._id} user={user} />
        )}
    </div>
)};

ProfileCardList.propTypes = {

};

export default ProfileCardList;
