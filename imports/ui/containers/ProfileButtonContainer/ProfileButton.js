import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import Footer from '../../components/Layout/Footer';

const ProfileButton = ({ userId}) => {
    return (
        <div className="appContent">
            <div className="appIdeas">
                <Footer  userId={userId} lala="lala" />
            </div>
        </div>
    );
}

Idea.propTypes = {

};

export default ProfileButton;
