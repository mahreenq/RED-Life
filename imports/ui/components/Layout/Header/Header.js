import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Button from '../Button';


import './styles.css';

const styles = {
    header: {
        backgroundColor: '#e1231a',
        zIndex: '9999 !important',
    },
    title: {
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        paddingLeft: '1rem',
    }
};


const Header = () => (
    
    <div className="Header">
        
        <Toolbar style={styles.header}>
            <ToolbarGroup firstChild={true}>
            {location.pathname !== '/login' && location.pathname !== '/setupprofile' ?
                <Link to="/ideas">
                    <img src="/images/red-logo.png" alt="red logo" className="logo" />
                </Link> : <img src="/images/red-logo.png" alt="red logo" className="logo" />}
                <ToolbarTitle text="Life" style={styles.title} />
            </ToolbarGroup>
            <ToolbarGroup lastChild={true}>
            {location.pathname !== '/login' && location.pathname !== '/setupprofile' ? <Button /> : null}
            </ToolbarGroup>
        </Toolbar>
    </div>
);

export default Header;