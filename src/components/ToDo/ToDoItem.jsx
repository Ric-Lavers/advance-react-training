import React, { useState, useContext, useEffect } from 'react';
import Select from 'react-select';

import { AppContext } from '../../context/AppContext';

const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 5, label: '5' },
  { value: 8, label: '8' },
  { value: 13, label: '13' },
  { value: 21, label: '21' }
];

const ToDoItem = ({ id, title, rating }) => {
  const { tasksTotal } = useContext(AppContext);
  // console.count('ToDoItem');
  return (
    <div className="todo-item">
      <h3>{title}</h3>
      <label>
        {rating} of {tasksTotal} ({`${((rating / tasksTotal) * 100) | 0}`}%)
      </label>
    </div>
  );
};

ToDoItem.defaultProps = {
  title: 'Title',
  rating: ''
};

export default ToDoItem;
