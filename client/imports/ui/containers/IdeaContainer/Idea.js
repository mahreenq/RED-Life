import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import IdeaCardList from '../../components/IdeaCardList';

const Idea = ({ideaData}) => {
    return (
        <div className="appContent">
            {ideaData !== undefined && ideaData.length > 0 ?
                <div className="appIdeas">
                    <IdeaCardList ideaData={ideaData} />
                </div>
            : ''}
        </div>
    );
}

Idea.propTypes = {

};

export default Idea;
