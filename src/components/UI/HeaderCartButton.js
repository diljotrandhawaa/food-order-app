
import React from 'react';
import CartIcon from './CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const cartClickHandler = () => {
        props.onClick();
    }

    return (
        <div className={classes.button} onClick={cartClickHandler}>
            <CartIcon />
            <h3>Your Cart</h3>
        </div>
    )
};

export default HeaderCartButton;