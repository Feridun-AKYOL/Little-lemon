import React from 'react';
import logo from '../photos/Little-lemon.png';


const Navbar = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Little Lemon Logo" />
                <h1>Little Lemon</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li><a href="#">About</a></li>
                    <li><a href="#specials-section">Menu</a></li>
                    <li><a href="#reservation">Reservations</a></li>
                    <li><a href="/booking">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
