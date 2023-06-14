
import React from 'react';

const MealItemForm = () => {

    const mealInputChangeHandler = (event) => {
        console.log(event);
    }

    return (
        <div>
            <span>Amount</span>
            <input onChange={mealInputChangeHandler}></input>
            <button>+Add</button>
        </div>
    )
};

export default MealItemForm;