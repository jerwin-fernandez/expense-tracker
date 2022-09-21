import React from 'react';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';
import './NewExpense.css';

const NewExpense = props => {
  const { onAddExpense } = props;

  const saveExpenseHandler = enteredExpenseData => {
    const newExpense = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    onAddExpense(newExpense);
  };

  return (
    <Card className='new-expense'>
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </Card>
  );
};

export default NewExpense;
