import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = props => {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState('');

  const changeHandler = year => {
    setFilteredYear(year);
  };

  const expenseYears = [
    ...new Set(expenses.map(expense => expense.date.getFullYear()).sort())
  ];

  const filteredExpensesByYear = expenses.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );

  const filteredExpenses = filteredYear ? filteredExpensesByYear : expenses;

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        items={expenseYears}
        onChange={changeHandler}
      />

      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
