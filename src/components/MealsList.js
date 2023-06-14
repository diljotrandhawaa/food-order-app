
import React from 'react';
import MealItem from './MealItem';
import Card from './UI/Card';

import classes from './MealsList.module.css';

const MealsList = (props) => {
    return (
        <Card className={classes.meals}>
            { props.allMeals.map((meal) => {
                return <MealItem name={meal.name} description={meal.desc} price={meal.price} />
            }) }
        </Card>
    )
};

export default MealsList;