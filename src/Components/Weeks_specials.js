import React from 'react';
import SpecialItem from './SpecialItem';
import greek_salad from '../photos/greek_salad.png' ;
import bruchetta from '../photos/bruchetta.png' ;
import lemon_cake from '../photos/lemon_cake.jpg' ;

const Weeks_specials = () => {
    return (
        <section className="specials">
            <h2>This week's specials!</h2>
            <div className="specials-container">
                <SpecialItem 
                    image={greek_salad}
                    title="Greek Salad"
                    price="12.99"
                    description="The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons."
                />
                <SpecialItem 
                    image={bruchetta}
                    title="Bruschetta"
                    price="5.99"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                />
                <SpecialItem 
                    image={lemon_cake}
                    title="Lemon Dessert"
                    price="5.00"
                    description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                />
            </div>
            <a href="#" className="btn">Online Menu</a>
        </section>
    );
};

export default Weeks_specials;
