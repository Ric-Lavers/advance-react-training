import React, { useContext } from 'react';

const ToDoItem = ({ id, title, rating, tasksTotal }) => {
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
