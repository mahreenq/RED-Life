import React from 'react';
import AppBar from 'material-ui/AppBar';
import Button from '../Button';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Header = () => (
  <AppBar
    title="RED Stuff"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
  <Button />
  </AppBar>
);

export default Header;