import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const menu_items = ['Home', 'About', 'Menu', 'Reservations', 'Order online', 'Login'  ];
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Doormat Navigation</h4>
                <ul>
                    {menu_items.map((item) => (
                        <li key={item}>
                            <NavLink
                                to= {`/${item}`}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                {item}
                            </NavLink>
                        </li>
                    ))
                }
                </ul>
            </div>
            <div className="footer-section">
                <h4>Contact</h4>
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
            <div className="footer-section">
                <h4>Social Media Links</h4>
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
        </footer>
    );
};

export default Footer;
