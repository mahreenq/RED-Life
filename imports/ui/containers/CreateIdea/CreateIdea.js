import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {createContainer} from 'meteor/react-meteor-data';
import {Ideas} from '../../../collections/ideas';
// import Images from '../IdeaImages';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import './styles';

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 500,
      height: 450,
      overflowY: 'auto',
    },
  };

  const tilesData = [
    {
      img: './images/event.jpg',
      title: 'Event Idea',
    },
    {
      img: './images/beer.png',
      title: 'Friday Social Idea',
    },
    {
      img: './images/random.jpg',
      title: 'Random',
    },
    {
      img: './images/news.png',
      title: 'Staff Announcement',
    },
  ];

class CreateIdea extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            description: '',
            picture: ''
        }
    }

    handleClick(tile) {
        this.setState({picture: tile.img});
        document.getElementById("theme").innerHTML = tile.title;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // form field validations

        let errorMessage = "";
        let fieldLength = 0;

        fieldLength = this.refs.title.props.value.length;
        if (fieldLength === 0) {
            errorMessage += "Title cannot be blank.\n"
        } else if (fieldLength > 20) {
            errorMessage += "Title length cannot exceed 20 characters.\n"
        }

        fieldLength = this.refs.description.props.value.length;
        if (fieldLength === 0) {
            errorMessage += "Description cannot be blank.\n"
        } else if (fieldLength > 150) {
            errorMessage += "Description length cannot exceed 150 characters.\n"
        }

        fieldLength = this.state.picture.length;
        if (fieldLength === 0) {
            errorMessage += "Please select a theme.\n"
        }

        if (errorMessage.length > 0) {
            errorMessage += "\nPlease correct before submitting.\n"
            alert(errorMessage);
        } else {
            Meteor.call('ideas.insert', this.state)
            //console.log('id', this.props.ideas);
            // redirect to ideas page after submit
            this.props.history.push('/ideas');
        }
    }

    handleCancel = (event) => {
        event.preventDefault();
        this.props.history.push('/ideas');
    }

    render(){
        let loggedIn = false;
        let userId = this.props.currentUserId;

        if (userId !== null) {
            if (userId.length > 0) {
                loggedIn = true;
            }
        }

        return(
            <div className="outer-body">
                <h1>What are you posting about?</h1>
                <h2 id="theme"></h2>
                <div style={styles.root}>
                    <GridList
                        cellHeight={180}
                        style={styles.gridList}
                    >
                        {tilesData.map((tile) => (
                            <a class="imageAnchor" href="#">
                        <GridTile
                            className="images"
                            key={tile.img}
                            title={tile.title}
                            onClick={this.handleClick.bind(this, tile)}
                        ><img src={tile.img} /></GridTile></a>
                        ))}
                    </GridList>
                    </div>

                <div className="idea_form">
                    <div className="title">
                        Submit a post!
                    </div>
                    <br />
            
                    <form className="create_idea">
                        <div>
                            <TextField
                                hintText="Title"
                                type="text"
                                name="title"
                                ref="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <TextField
                                hintText="Description"
                                floatingLabelText="Enter idea description here"
                                multiLine={true}
                                rows={3}
                                name="description"
                                ref="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
                            <br />

                            <div className="submitIdea">
                                <RaisedButton
                                    label="Submit"
                                    secondary={true}
                                    onClick={this.handleSubmit}
                                    disabled={loggedIn ? false : true}
                                />
                                <RaisedButton
                                    label="Cancel"
                                    onClick={this.handleCancel}
                                    backgroundColor='#757575'
                                    labelColor='#ffffff'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default createContainer(() => {
    Meteor.subscribe('ideas');
    return {
        currentUser: Meteor.user(),
        currentUserId: Meteor.userId(), // b/c pulling it off above breaks if logged out
        ideas: Ideas.find({}).fetch()
    }
}, CreateIdea);
