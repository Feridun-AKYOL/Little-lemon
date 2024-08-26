import React from 'react';
import logo from '../photos/Little-lemon.png';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Little Lemon Logo" />
                <h1>Little Lemon</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
