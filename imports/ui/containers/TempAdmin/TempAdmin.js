import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
    img: './images/grumpy_Cat.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: './images/grumpy_Cat.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: './images/grumpy_Cat.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: './images/grumpy_Cat.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: './images/grumpy_Cat.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: './images/grumpy_Cat.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: './images/grumpy_Cat.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: './images/grumpy_Cat.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: './images/grumpy_Cat.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: './images/grumpy_Cat.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListStuff = () => (
  <div style={styles.root}>
    <div>
      <h2>UPLOAD IMAGES FOR STUDENTS</h2>
      <input type="file"
      name="picture"
      // value={this.state.picture}
      // onChange={this.handleChange}
      //if image is not in use, allow replacement
      />
      
    </div>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListStuff;