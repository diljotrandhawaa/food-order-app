
import React from 'react';
import CartIcon from './CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    var totalMeals = props.meals.reduce((acc, curr) => {
        return acc + Number(curr.amount);
    }, 0);

    const cartClickHandler = () => {
        props.onClick();
    }

    return (
        <div className={classes.button} onClick={cartClickHandler}>
            <CartIcon />
            <h3>Your Cart</h3>
            <span className={classes.badge}>{totalMeals}</span>
        </div>
    )
};

export default HeaderCartButton;