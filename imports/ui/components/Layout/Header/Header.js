import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import Button from '../Button';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

//import logo from 'redlogo.svg';
const logo = '';''

const styles = {
    header: {
        backgroundColor: '#e1231a',
    }
};

const Header = () => (
    <Toolbar style={styles.header}>
        <ToolbarGroup firstChild={true}>
            <a href="/">{<img className="logo" src={logo} alt="red logo" />}</a>
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
            <Button />
        </ToolbarGroup>
    </Toolbar>
);

// const Header = () => (
//   <AppBar
//     title="RED Stuff"
//     iconClassNameRight="muidocs-icon-navigation-expand-more"
//     style={styles.header}
//   >
//   <Button />
//   </AppBar>
// );

export default Header;
