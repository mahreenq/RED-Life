import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import ProfileCardList from '../../components/ProfileCardList';

const Profile = ({profileData}) => {
    return (
        <div className="appProfileContent">
            {profileData !== undefined && profileData.length > 0 ?
                <div className="appProfile">
                    <ProfileCardList profileData={profileData} />
                </div>
            : ''}
        </div>
    );
}

// Profile.propTypes = {

// };

export default Profile;
