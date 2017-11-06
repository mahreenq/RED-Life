import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import IdeaCard from '../IdeaCard';

const IdeaCardList = ({ideaData, updateVote, userId}) => (
    <div className="ideaCardList">
        {ideaData.map(idea =>
            <IdeaCard
                key={idea._id}
                idea={idea}
                updateVote={updateVote.bind(this, idea)}
                userId={userId}
            />
        )}
    </div>
);

IdeaCardList.propTypes = {

};

export default IdeaCardList;
