import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { BrowserRouter ,Route,Link, Switch } from 'react-router-dom';
import IdeaCard from '../IdeaCard';

const IdeaCardList = ({ideaData, updateVote, userId}) => (
    <div>

        <div className="ideasHeader">
            <h1 className="redFont nmrgin0" > TAKE A LOOK THROUGH SOME GREAT IDEAS </h1>
            <h4 className="margin0"> Make sure to get involved and vote! </h4>
            <h2> Want to share your own idea? </h2>
            <h3 className = "submitIdea"> <Link to = '/createidea'> Submit here</Link> </h3>
        </div>


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


    </div>
);

IdeaCardList.propTypes = {

};

export default IdeaCardList;
