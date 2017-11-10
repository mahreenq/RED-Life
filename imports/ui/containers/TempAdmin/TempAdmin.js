import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';

import { Meteor } from 'meteor/meteor';
import { Admin } from '../../../collections/admin';
import { createContainer } from 'meteor/react-meteor-data';

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
    img: '1',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: '2',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: '3',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '4',
    title: 'Morning',
    author: 'fancycrave1',
  }
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class AdminImages extends Component{
  constructor(){
    super()

    this.state = {
      picture: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleAdd = () => {
    event.preventDefault();
    Meteor.call('admin.insert', this.state)
  }

  handleX = (event) => {
    console.log(event.target.value);
    event.preventDefault();
    Meteor.call('admin.remove', this.state)
  }

  render(){
    const styles = {
      backgroundImage: 'url("./images/grumpy_Cat.jpg")', 
      backgroundSize: 'cover',
      backgroundPosition: '100%',
      backgroundRepeat: 'no-repeat',
    };
    return (
    <div style={styles.root}>
      <div>
        <h2>UPLOAD IMAGES FOR STUDENTS</h2>
        <input type="file"
        name="picture"
        value={this.state.picture}
        onChange={this.handleChange}
        />
        <RaisedButton
          secondary={true}
          label="ADD"
          onClick={this.handleAdd}
        />
        
      </div>
      <GridList
        cellHeight={300}
        style={styles.gridList}
      >
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            style={styles}
            children={<RaisedButton
              key={tile.img}
              label="X"
              onClick={this.handleX}
            />}
          />
        ))}
      </GridList>
    </div>
  )}
};

export default createContainer(() => {
  Meteor.subscribe('admin'); 
  return {
    images: Admin.find({}).fetch(),
  }; 
}, AdminImages);