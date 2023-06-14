
import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <React.Fragment>
            <div className={classes.header}>
                <h1>ReactMeals</h1>
            </div>
            <div className={classes['main-image']}>
                <img src='https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true' ></img>
            </div>
        </React.Fragment>
    )
};

export default Header;