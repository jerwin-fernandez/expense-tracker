import React, { useState } from 'react';
import _ from 'underscore';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = props => {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState('');

  const changeHandler = year => {
    setFilteredYear(year);
  };

  const expenseYearsMapped = expenses.map(expense => ({
    id: expense.date.getFullYear().toString(),
    year: expense.date.getFullYear().toString()
  }));

  const expenseYears = _.uniq(expenseYearsMapped, i => i.year);

  const expenseYearsSortByYear = _.sortBy(expenseYears, 'year');

  expenseYearsSortByYear.unshift({
    id: 'x',
    value: 'default',
    label: 'All'
  });

  const filteredExpensesByYear = expenses.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );

  const filteredExpenses =
    filteredYear && filteredYear !== 'default'
      ? filteredExpensesByYear
      : expenses;

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        items={expenseYearsSortByYear}
        onChange={changeHandler}
      />

      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
