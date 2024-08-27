import React from 'react';
import reservation_image from "../photos/restauranfood.jpg" ;

const Reservation = () => {
    return (
        <section className="reservation">
            <div className="reservation-text">
                <h2>Little Lemon</h2>
                <p>Chicago</p>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <a href="#" className="btn">Reserve a Table</a>
            </div>
            <div className="reservation-image">
                <img src={reservation_image} alt="Little Lemon Specials" />
            </div>
        </section>
    );
};

export default Reservation;
