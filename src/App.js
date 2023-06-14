
import React from 'react';
import Header from './components/Header';

import './App.css';
import SummaryModal from './components/SummaryModal';
import MealItem from './components/MealItem';


function App() {
  return (
    <React.Fragment>
      <Header />
      <SummaryModal />
      <MealItem />
    </React.Fragment>
  );
}

export default App;
