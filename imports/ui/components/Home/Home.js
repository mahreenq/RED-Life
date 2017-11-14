import React from 'react';
import Login from '../forms/Login';
import './styles.css';

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="homeSection">
                <h1>RED <span>Life</span></h1>
            </div>
            <div className="loginSection">
            <Login />
            </div>
        </div>
    );
}

export default Home;
