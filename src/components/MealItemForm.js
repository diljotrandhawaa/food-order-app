
import React, { useState } from 'react';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

    const [mealInput, changeMealInput] = useState(1);

    const mealInputChangeHandler = (event) => {
        changeMealInput(event.target.value);
    }

    const inputBlurHandler = () => {
        setTimeout(() => {
            if (mealInput === '') {
                changeMealInput(1);
            }
        }, 2000)
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (mealInput !== '' && mealInput !== '0') {
            props.onAddMeal(mealInput);
        }
    }

    return (
        <div className={classes.form}>
            <form onSubmit={formSubmitHandler}>
                <div className={classes.input}>
                    <label>Amount</label>
                    <input type='number' min='0' value={mealInput} onChange={mealInputChangeHandler} onBlur={inputBlurHandler}></input>
                </div>
                <button>+Add</button>
            </form>
        </div>
    )
};

export default MealItemForm;