
import React from 'react';
import MealItem from './MealItem';
import Card from './UI/Card';

import classes from './MealsList.module.css';


const MealsList = (props) => {

    const mealAdditionHandler = (mealInfo) => {
        props.onMealAdd(mealInfo);
    }
    

    return (
        <Card className={classes.meals}>
            { props.allMeals.map((meal) => {
                return <MealItem name={meal.name} description={meal.desc} price={meal.price} onMealAddition={mealAdditionHandler} />
            }) }
        </Card>
    )
};

export default MealsList;