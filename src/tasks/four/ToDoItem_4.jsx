import React, { useContext } from 'react';

import { AppContext } from './Context_4';

const ToDoItem = ({ id, title, rating }) => {
  const { tasksTotal } = useContext(AppContext);
  console.log('ToDoItem', tasksTotal);
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
