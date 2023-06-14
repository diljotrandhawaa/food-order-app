
import React from 'react';
import classes from './MealItem.module.css';

const MealItem = (props) => {
    return (
        <div className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <h3 className={classes.price}>{props.price}</h3>
            </div>
        </div>
    )
};

export default MealItem;