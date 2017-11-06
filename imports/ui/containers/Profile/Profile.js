import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import ProfileCardList from '../../components/ProfileCardList';

const Profile = ({profileData}) => {
    return (
        <div >
            {profileData !== undefined && profileData.length > 0 ?
                <div>
                    <ProfileCardList profileData={profileData} />
                </div>
            : ''}
        </div>
    );
}

// Profile.propTypes = {

// };

export default Profile;
