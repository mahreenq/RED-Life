import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import IdeaCardList from '../../components/IdeaCardList';

const Idea = ({ideaData, addVote, removeVote, userId}) => {
    return (
        <div className="appContent">
            {ideaData !== undefined && ideaData.length > 0 ?
                <div className="appIdeas">
                    <IdeaCardList
                        ideaData={ideaData}
                        addVote={addVote}
                        removeVote={removeVote}
                        userId={userId}
                    />
                </div>
            : ''}
        </div>
    );
}

Idea.propTypes = {

};

export default Idea;
