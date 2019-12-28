import React from 'react';

// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () =>  {
    return (
        <nav className = 'header'>
        <div className = 'titles'>
        <h3>Shopping Site</h3>
        <ul>
        <li><Link to = '/cart'>My Cart</Link></li>
        <li><Link to = '/home'>Home Page</Link></li>
        </ul>
        </div>
        </nav>
    )
}

export default NavBar;