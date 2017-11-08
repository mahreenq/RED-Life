import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import IdeaCard from '../IdeaCard';
//updateVote={updateVote.bind(this, idea)}

const IdeaCardList = ({ideaData, updateVote}) => (
    <div className="ideaCardList">
        {ideaData.map(idea =>
            <IdeaCard
                key={idea._id}
                idea={idea}
                updateVote={updateVote.bind(this, idea)}
            />
        )}
    </div>
);

IdeaCardList.propTypes = {

};

export default IdeaCardList;
