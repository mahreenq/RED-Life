import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Button from '../Button';

import './styles.css';

const styles = {
    header: {
        backgroundColor: '#e1231a',
    },
    title: {
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        paddingLeft: '1rem',
    }
};

const Header = () => (
    <Toolbar style={styles.header}>
        <ToolbarGroup firstChild={true}>
            <a href="/idea">
                <img src="/images/red-logo.png" alt="red logo" className="logo" />
            </a>
            <ToolbarTitle text="Events" style={styles.title} />
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
