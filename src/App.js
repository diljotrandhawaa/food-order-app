
import React from 'react';
import Header from './components/Header';

import './App.css';
import SummaryModal from './components/SummaryModal';
import MealsList from './components/MealsList';

const meals = [
  {name: 'Sushi', desc: 'finest fish and veggies', price: '$22.99'},
  {name: 'Schnitzel', desc: 'a german speciality', price: '$16.50'},
  {name: 'Barbeque Burger', desc: 'American, raw, meaty', price: '$12.99'},
  {name: 'Green Bowl', desc: 'Healty...and green...', price: '$18.99'}
];


function App() {
  return (
    <div className='app'>
      <Header />
      <SummaryModal />
      <MealsList allMeals={meals} />
    </div>
  );
}

export default App;
