
import React from 'react';
import Card from '../UI/Card';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = (props) => {
    return (
        <Card className={classes.cart}>
            { props.meals.map((meal) => {
                return <CartItem name={meal.name} price={meal.price} amount={meal.amount} />
            }) }
        </Card>
    )
};

export default Cart;