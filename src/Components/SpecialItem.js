import React from 'react';

const SpecialItem = ({ image, title, price, description }) => {
    return (
        <div className="special-item">
            <img src={image} alt={title} />
            <h3>{title} <span>${price}</span></h3>
            <p>{description}</p>
            <a href="#" className="order-btn">Order a delivery</a>
        </div>
    );
};

export default SpecialItem;
