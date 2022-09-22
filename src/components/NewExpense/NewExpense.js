import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';
import './NewExpense.css';

const NewExpense = props => {
  const { onAddExpense } = props;

  const [isFormOpen, setIsFormOpen] = useState(false);

  const openFormHandler = () => {
    setIsFormOpen(true);
  };

  const closeFormHandler = () => {
    setIsFormOpen(false);
  };

  const saveExpenseHandler = enteredExpenseData => {
    const newExpense = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    onAddExpense(newExpense);
  };

  return (
    <Card className='new-expense'>
      {!isFormOpen && (
        <button onClick={openFormHandler}>Add New Expense</button>
      )}

      {isFormOpen && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCloseForm={closeFormHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
