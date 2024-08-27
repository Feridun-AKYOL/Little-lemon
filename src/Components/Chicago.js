import React from 'react';
import restaurant from '../photos/restaurant.jpg';
import restaurant_chef from '../photos/restaurant_chef.jpg';

const Chicago = () => {
    return (
        <section className="about">
            <div className="about-text">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Welcome to Little Lemon, a family-owned Mediterranean restaurant located in the heart of Chicago. Our passion for authentic flavors and traditional recipes is at the core of everything we do. Each dish is crafted with love, using only the freshest ingredients, to bring a modern twist to classic Mediterranean cuisine.
                </p>
                <p>
                    Whether you're here for a casual dinner with friends or a special celebration, our warm and inviting atmosphere will make you feel right at home. Come and experience the taste of the Mediterranean, right here in Chicago!
                </p>
            </div>
            <div className="about-images">
                <img src= {restaurant} alt="Little Lemon" className="about-image about-image1" />
                <img src= {restaurant_chef} alt="Little Lemon" className="about-image about-image2" />
            </div>
        </section>
    );
};

export default Chicago;
