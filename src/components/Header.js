
import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './UI/HeaderCartButton';

import mealsImage from '../assets/meals.jpeg';

const Header = (props) => {

    const cartClickHandler = () => {
        props.onCartBtnClicked();
    }

    return (
        <React.Fragment>
            <div className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton className={classes['cart-btn']} onClick={cartClickHandler} meals={props.meals} />
            </div>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='meals-img' ></img>
            </div>
        </React.Fragment>
    )
};

export default Header;