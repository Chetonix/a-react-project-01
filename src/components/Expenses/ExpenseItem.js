import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

export default function ExpenseItem(props) {

    // const expenseDate = new Date().toISOString();
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.56;
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>

    );
}