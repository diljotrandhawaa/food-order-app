
import React, { useState, useEffect, useRef } from 'react';
import Card from '../UI/Card';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = (props) => {

    var cartMeals = [...props.meals];

    const [meals, changeMeals] = useState(cartMeals);

    const addMealHandler = (mealName) => {

        let dummyMeals = [...meals];
        for (var meal of dummyMeals) {
            if (meal.name === mealName) {
                meal.amount++;
                break;
            }
        }
        changeMeals(dummyMeals);
    }

    const removeMealHandler = (mealName) => {
        let dummyMeals = [...meals];
        for (var meal of dummyMeals) {
            if (meal.name === mealName && Number(meal.amount) > 1) {
                meal.amount--;
                break;
            } else if (meal.name === mealName && Number(meal.amount) <= 1) {
                dummyMeals.splice(dummyMeals.indexOf(meal), 1);
                console.log('meal will be removed this way!');
                break;
            }
        }
        console.log(dummyMeals)
        changeMeals(dummyMeals);
    }

    var totalAmount = 0;
    
    for (var meal of meals) {
        totalAmount += Number(meal.price.substring(1)) * Number(meal.amount);
    }

    return (
        <React.Fragment>
        <div className={classes.backdrop} onClick={props.onCancelBtn}></div>
        <Card className={classes.cart}>
            { meals.map((meal) => {
                return <CartItem name={meal.name} price={meal.price} amount={meal.amount} onAddMeal={addMealHandler}
                onRemoveMeal={removeMealHandler} 
                />
            }) }
            <div className={classes.total}>
                <h1>Total Amount</h1>
                <h2>${totalAmount.toFixed(2)}</h2>
            </div>
            <div className={classes.actions}>
                <button className={classes.cancelBtn} onClick={props.onCancelBtn}>Close</button>
                <button className={classes.orderBtn} onClick={props.onOrderBtn}>Order</button>
            </div>
        </Card>
        </React.Fragment>
    )
};

export default Cart;