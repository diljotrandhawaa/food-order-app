
import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = () => {
    return (
        <div className={classes.meal}>
            <div>
                <h3>Sushi</h3>
                <p className={classes.descriptiono}>Finest fish and veggies</p>
                <h3 className={classes.price}>$22.99</h3>
            </div>
        </div>
    )
};

export default MealItem;