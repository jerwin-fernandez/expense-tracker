import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {
  const { onSaveExpense, onCloseForm } = props;

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const { enteredTitle, enteredAmount, enteredDate } = userInput;

  const changeHandler = e => {
    const { name, value } = e.target;

    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [name]: value
      };
    });
  };

  const submitHandler = e => {
    e.preventDefault();

    if (enteredTitle === '' || enteredAmount === '' || enteredDate === '') {
      alert('Please enter valid values');
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };

    onSaveExpense(expenseData);

    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    });

    onCloseForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            name='enteredTitle'
            value={enteredTitle}
            onChange={changeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            name='enteredAmount'
            value={enteredAmount}
            onChange={changeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            name='enteredDate'
            value={enteredDate}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={onCloseForm}>
          Close
        </button>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
