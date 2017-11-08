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
    }
};

const IdeaCard = ({idea, updateVote, userId}) => {
    let voted = false;

    if (idea.votes.find((vote) => vote === userId)) {
        voted = true;
    }

    let titleColor = "red";

    return (
        <Card className="ideaCard">
            <CardMedia className="ideaImage">
                <img src="/images/grumpy_Cat.jpg" alt="" />
            </CardMedia>
            <CardHeader
                title={idea.title}
                titleColor={titleColor}
                titleStyle={styles.header}
            />
            <CardText style={styles.description}>
                {idea.description}
            </CardText>
            <CardText className="voteCount" style={styles.description}>
                Vote Count: <span>{idea.votes.length}</span>
            </CardText>
            <CardActions>
                <div className="voteButton">
                    <RaisedButton
                        label="Vote"
                        secondary={true}
                        disabled={voted}
                        onClick={updateVote}
                    />
                </div>
            </CardActions>
        </Card>
    );
}

IdeaCard.propTypes = {

};

export default IdeaCard;
