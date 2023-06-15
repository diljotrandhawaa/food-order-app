
import React, { useState } from 'react';
import Header from './components/Header';
import Cart from './components/Cart components/Cart';

import './App.css';
import SummaryModal from './components/SummaryModal';
import MealsList from './components/MealsList';

const meals = [
  {name: 'Sushi', desc: 'finest fish and veggies', price: '$22.99'},
  {name: 'Schnitzel', desc: 'a german speciality', price: '$16.50'},
  {name: 'Barbeque Burger', desc: 'American, raw, meaty', price: '$12.99'},
  {name: 'Green Bowl', desc: 'Healty...and green...', price: '$18.99'}
];

const addedMeals = [];


function App() {

  const [cartMeals, changeCartMeals] = useState(addedMeals);

  const [cartBtnIsClicked, changeIfCartClicked] = useState(false);

  const cartBtnClickHandler = () => {
    console.log('cart btn is clickeds')
    changeIfCartClicked(true);
  }

  const mealAddHandler = (info) => {

    changeCartMeals((prevMeals) => {
      return [...prevMeals, info];
    })
  }

  return (
    <div className='app'>
      { cartBtnIsClicked && <Cart meals={cartMeals} /> }
      <Header onCartBtnClicked={cartBtnClickHandler} />
      <SummaryModal />
      <MealsList allMeals={meals} onMealAdd={mealAddHandler} />
    </div>
  );
}

export default App;
