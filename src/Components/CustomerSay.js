import React from 'react';

const CustomerSay = ({ text, author, image }) => {
    return (
        <div className="testimonial">
            <img src={image} alt={author} className="testimonial-image" />
            <p className="testimonial-text">"{text}"</p>
            <h4 className="testimonial-author">- {author}</h4>
        </div>
    );
};

export default CustomerSay;
