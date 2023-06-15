
import React from 'react';
import classes from './Header.module.css';
import CartIcon from './UI/CartIcon';
import HeaderCartButton from './UI/HeaderCartButton';

const Header = (props) => {

    const cartClickHandler = () => {
        props.onCartBtnClicked();
    }

    return (
        <React.Fragment>
            <div className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton className={classes['cart-btn']} onClick={cartClickHandler} />
            </div>
            <div className={classes['main-image']}>
                <img src='https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true' ></img>
            </div>
        </React.Fragment>
    )
};

export default Header;