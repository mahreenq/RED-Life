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

const IdeaCard = (idea, updateVote) => {
    let voted = false;
    console.log(idea.idea);
    console.log(updateVote);

    // if (Ideas.idea.votes.find((vote) => vote === this.userId)) {
    //     voted = true;
    // }

    return (
        <Card className="ideaCard">
            <CardMedia className="ideaImage">
                <img src="/images/grumpy_Cat.jpg" alt="" />
            </CardMedia>
            <CardHeader
                titleStyle={styles.header}
                title={idea.idea.title}
            />
            <CardText style={styles.description}>
                {idea.idea.description}
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
