
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

  const [cartIsOpen, changeCartIsOpen] = useState(false);

  const cartBtnClickHandler = () => {
    changeCartIsOpen(true);
  }

  const mealAddHandler = (info) => {

    var infoIsUnique = true;

    var dummyCartMeals = [...cartMeals];

    for (var meal of dummyCartMeals) {
      if (meal.name === info.name) {
        meal.amount = (Number(meal.amount) + Number(info.amount)).toString();
        infoIsUnique = false;
        break;
      }
    }

    if (!infoIsUnique) {
      changeCartMeals(dummyCartMeals);
      return;
    }

    changeCartMeals((prevMeals) => {
      return [...prevMeals, info];
    });

    console.log(cartMeals)
  }

  const cartCancelBtnHandler = () => {
    changeCartIsOpen(false);
  }

  const cartOrderBtnHandler = () => {
    console.log('ordering.......')
  }

  return (
    <div className='app'>
      { cartIsOpen && <Cart meals={cartMeals} onCancelBtn={cartCancelBtnHandler} onOrderBtn={cartOrderBtnHandler} /> }
      <Header onCartBtnClicked={cartBtnClickHandler} meals={cartMeals}/>
      <SummaryModal />
      <MealsList allMeals={meals} onMealAdd={mealAddHandler} />
    </div>
  );
}

export default App;
