import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = props => {
  const { selected, items, onChange } = props;

  const dropdownChangeHandler = e => {
    onChange(e.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          {items.map(item => {
            return (
              <option key={item.id} value={item.value ? item.value : item.year}>
                {item.label ? item.label : item.year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
