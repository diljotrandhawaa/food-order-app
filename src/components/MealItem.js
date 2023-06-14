
import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

    const addMealHandler = (mealNum) => {
        const mealQuantity = mealNum;
        const mealInfo = {
            name: props.name,
            price: props.price,
            quantity: mealQuantity
        }
        console.log(mealInfo)
    }

    return (
        <div className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <h3 className={classes.price}>{props.price}</h3>
            </div>
            <MealItemForm onAddMeal={addMealHandler} />
        </div>
    )
};

export default MealItem;