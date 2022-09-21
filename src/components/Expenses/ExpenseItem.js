import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = props => {
  const { date, title, amount } = props.expense;

  console.log('Expense Item evaluated by React');

  const [mainTitle, setMainTitle] = useState(title);

  const clickHandler = () => {
    setMainTitle('Updated Title');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />

      <div className='expense-item__description'>
        <h2>{mainTitle}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>

      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
