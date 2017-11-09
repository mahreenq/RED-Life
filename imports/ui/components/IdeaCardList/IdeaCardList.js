import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { BrowserRouter ,Route,Link, Switch } from 'react-router-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import IdeaCard from '../IdeaCard';

const styles = {
    header: {
        color: '#e1231a',
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
        color: 'black',
    }
};

const IdeaCardList = ({ideaData, removeIdea, addVote, removeVote, userId}) => (
    <div>
        <div className="ideasHeader">
            <Card className="ideasHeaderCard">
                <CardTitle
                    titleStyle={styles.header}
                    title="TAKE A LOOK THROUGH SOME GREAT IDEAS"
                    subtitleStyle = {styles.subtitle}
                    subtitle="Make sure to get involved and vote!"
                />
                <CardActions>
                    <Link to = '/createidea'>
                        <RaisedButton
                            backgroundColor= '#e1231a'
                            labelColor='#ffffff'
                            label="SHARE YOUR OWN IDEA HERE"
                        />
                    </Link>
                </CardActions>
            </Card>
        </div>

        {ideaData !== undefined && ideaData.length > 0 ?
            <div className="ideaCardList">
                {ideaData.map(idea =>
                    <IdeaCard
                        key={idea._id}
                        idea={idea}
                        removeIdea={removeIdea.bind(this, idea)}
                        addVote={addVote.bind(this, idea)}
                        removeVote={removeVote.bind(this, idea)}
                        userId={userId}
                    />
                )}
            </div>
        : ''}
    </div>
);

IdeaCardList.propTypes = {

};

export default IdeaCardList;
