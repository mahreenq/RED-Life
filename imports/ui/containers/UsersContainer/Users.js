import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import ProfileCardList from '../../components/UsersCardList';

const Profile = ({profileData}) => {
    return (
        <div className="appProfileContent">

                <div className="appProfile">
                    <ProfileCardList profileData={profileData} />
                </div>
 
        </div>
    );
}

export default Profile;
