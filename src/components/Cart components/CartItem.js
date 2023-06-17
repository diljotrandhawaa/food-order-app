
import React, { useState } from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
//   const price = `$${props.price.toFixed(2)}`;

  // const [mealNumber, changeMealNumber] = useState(props.amount);

  const onMealAddHandler = () => {
    props.onAddMeal(props.name)
  }

  const onMealRemoveHandler = () => {
    props.onRemoveMeal(props.name)
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onMealRemoveHandler}>−</button>
        <button onClick={onMealAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;