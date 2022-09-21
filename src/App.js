import React from 'react';
import Expenses from './components/Expenses/Expenses';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
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

  return (
    <div>
      <NewExpense />

      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
