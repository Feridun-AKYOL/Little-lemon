import React from 'react';
import reservation_image from "../photos/restauranfood.jpg" ;
import { Link } from 'react-router-dom';
const Reservation = () => {
    return (
        <section className="reservation">
            <div className="reservation-text">
                <h2>Little Lemon</h2>
                <p>Chicago</p>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to='booking' className="btn">Reserve a Table</Link>
            </div>
            <div className="reservation-image">
                <img src={reservation_image} alt="Little Lemon Specials" />
            </div>
        </section>
    );
};

export default Reservation;
