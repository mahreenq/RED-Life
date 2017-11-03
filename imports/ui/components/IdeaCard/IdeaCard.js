import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';

const IdeaCard = ({idea}) => (
    <Card className="ideaCard">
        <CardMedia className="ideaImage">
            <img src={idea.imageurl} alt="" />
        </CardMedia>
        <CardHeader
            title={idea.title}
            subtitle={idea.author}
        />
        <CardText>
            {idea.description}
        </CardText>
        <CardActions>
            {idea.available ?
                <div>
                    <RaisedButton label="Vote" secondary={true} onClick="" />
                </div>
                 : ''}
        </CardActions>
    </Card>
);

IdeaCard.propTypes = {

};

export default IdeaCard;
