import React from 'react';

import VerticalBarChart from '../Chart/VerticalBarChart';
import Card from '../UI/Card';

import './ExpensesChart.css';

const ExpensesChart = props => {
  const { expenses } = props;

  const chartDataPoints = [
    { label: 'January', value: 0 },
    { label: 'February', value: 0 },
    { label: 'March', value: 0 },
    { label: 'April', value: 0 },
    { label: 'May', value: 0 },
    { label: 'June', value: 0 },
    { label: 'July', value: 0 },
    { label: 'August', value: 0 },
    { label: 'September', value: 0 },
    { label: 'October', value: 0 },
    { label: 'November', value: 0 },
    { label: 'December', value: 0 }
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  const labels = chartDataPoints.map(item => item.label);
  const values = chartDataPoints.map(item => item.value);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Expenses',
        data: values,
        backgroundColor: '#a892ee'
      }
    ]
  };

  return (
    <Card className='expenses-chart'>
      <VerticalBarChart
        data={data}
        height='250px'
        options={{ maintainAspectRatio: false }}
      />
    </Card>
  );
};

export default ExpensesChart;
