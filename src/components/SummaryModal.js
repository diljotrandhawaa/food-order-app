
import React from 'react';
import classes from './SummaryModal.module.css';

const SummaryModal = () => {
    return (
        <div className={classes.summary}>
            <h1>Delicious Food, Delivered To You</h1>
            <p>Choose your favourite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>All our meals are cooked with high-quality ingredient, just-in-time and ofcourse by experienced chefs!</p>
        </div>
    )
};

export default SummaryModal;