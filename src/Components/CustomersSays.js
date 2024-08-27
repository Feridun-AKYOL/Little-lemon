import React from 'react';
import CustomerSay from './CustomerSay';
import customer1 from '../photos/customer1.png'
import customer2 from '../photos/customer2.png'
import customer3 from '../photos/customer3.png'
import customer4 from '../photos/customer4.png'

const CustomersSays = () => {
    return (
        <section className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonials-container">
                <CustomerSay 
                    text="The best Mediterranean food I've ever had! Highly recommend the Greek Salad."
                    author="John Doe"
                    image={customer1}
                />
                <CustomerSay 
                    text="Absolutely loved the atmosphere and the dishes. The Lemon Dessert is a must-try."
                    author="Jane Smith"
                    image={customer2}
                />
                <CustomerSay 
                    text="Amazing service and delicious food. I will definitely come back!"
                    author="Emily Johnson"
                    image={customer3}
                />
                <CustomerSay 
                    text="The ambiance is incredible, and the food is even better. Definitely coming back with friends!"
                    author="Michael Brown"
                    image={customer4}
                />
            </div>
        </section>
    );
};

export default CustomersSays;
