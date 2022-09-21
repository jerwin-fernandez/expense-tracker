import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
  const { expenses } = props;

  if (expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
