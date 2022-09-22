import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesChart from './components/Expenses/ExpensesChart';

const DUMMY_EXPENSES = [
  {
    id: 1,
    date: new Date(2021, 3, 14),
    title: 'Health Insurance',
    amount: 105
  },
  {
    id: 2,
    date: new Date(2021, 6, 25),
    title: 'Car Insurance',
    amount: 352
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = newExpense => {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
