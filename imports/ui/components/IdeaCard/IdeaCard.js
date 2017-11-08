import React from 'react';
import PropTypes from 'prop-types';
import {createContainer} from 'meteor/react-meteor-data';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Ideas} from '../../../collections/ideas';

import './styles.css';

const styles = {
    header: {
        fontSize: '1rem',

   
    },
    description: {
        fontSize: '1rem',
    },
    vote: {
        backgroundColor: 'red',
    },
    unvote: {
        backgroundColor: 'black',
    }
};

const IdeaCard = ({idea, addVote, removeVote, userId}) => {
    let titleColor = "red";
    let updateVote = addVote;
    let buttonLabel = "Vote";
    let voted = false;

    if (idea.votes.find((vote) => vote === userId)) {
        updateVote = removeVote;
        buttonLabel = "UnVote";
        voted = true;
    }

    return (
        <Card className="ideaCard">
            <CardMedia className="ideaImage">
                <img src="/images/grumpy_Cat.jpg" alt="" />
            </CardMedia>
            <div className = "singleIdeaTitle">
            <CardHeader
                title={idea.title}
                titleColor={titleColor}
                titleStyle={styles.header}
            
            />
            </div>
            <CardText style={styles.description}>
                {idea.description}
            </CardText>
            <CardText className="voteCount" style={styles.description}>
                Vote Count: <span>{idea.votes.length}</span>
            </CardText>
            <CardActions>
                <div className="voteButton">
                    <RaisedButton
                        label={buttonLabel}
                        onClick={updateVote}
                        backgroundColor={voted ? '#000000' : '#e1231a'}
                        labelColor='#ffffff'
                    />
                </div>
            </CardActions>
        </Card>
    );
}

IdeaCard.propTypes = {

};

export default IdeaCard;
