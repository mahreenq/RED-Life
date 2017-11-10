import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';

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
  },
  {
    img: '5',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '6',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: '7',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: '8',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: '9',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: '10',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class GridListStuff extends Component{
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
    console.log(this.state)
  }

  handleSubmit(){
    console.log("hi")
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
          onSubmit={this.handleSubmit}
        />
        
      </div>
      <GridList
        cellHeight={300}
        style={styles.gridList}
      >
        <Subheader>December</Subheader>
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            style={styles}
          />
        ))}
      </GridList>
    </div>
  )}
};

export default GridListStuff;