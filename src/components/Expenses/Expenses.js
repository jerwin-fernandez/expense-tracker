import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState('');

  const changeHandler = year => {
    setFilteredYear(year);
  };

  const expenseYears = [
    ...new Set(expenses.map(expense => expense.date.getFullYear()))
  ];

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        items={expenseYears}
        onChange={changeHandler}
      />

      {expenses.map(expense => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
