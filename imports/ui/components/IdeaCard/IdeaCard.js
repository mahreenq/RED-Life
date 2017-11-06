import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

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

    return (
        <Card className="ideaCard">
            <CardMedia className="ideaImage">
                <img src={idea.avatar} alt="" />
            </CardMedia>
            <CardHeader titleStyle={styles.header} subtitleStyle={styles.header}
                title={idea.title}
                subtitle={idea.name}
            />
            <CardText style={styles.description}>
                {idea.description}
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
