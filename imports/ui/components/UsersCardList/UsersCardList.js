import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import UserCard from '../UserCard';

const UsersCardList = ({profileData}) => {
    return (
    <div className="profileCardList">
        {profileData.map(user =>
            <UserCard key={user._id} user={user} />
        )}
    </div>
)};

export default UsersCardList;
