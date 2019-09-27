import React, { useState, createRef } from 'react';
import ToDoItem from './ToDoItem';

const ToDoContainer = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [newTaskRating, setNewTaskRating] = useState('enter task');
  const addTaskRef = createRef();

  const addTask = (title, rating) => {
    setTasks([...tasks, { title, rating }]);
  };

  const handleMouseLeave = (value, id) => {
    const [taskTitle] = addTaskRef.current.innerText.split('\n');
    if (taskTitle !== 'enter task' && value > 0) {
      addTaskRef.current.getElementsByTagName('h3')[0].innerText = 'enter task';

      setNewTaskRating(value);
      addTask(taskTitle, value);
      setNewTaskRating(0);
    }
  };

  return (
    <div className="todo-container">
      <h2>Todo:</h2>
      {children}
      {tasks.map((task, i) => (
        <ToDoItem key={`_${i}`} {...task} />
      ))}
      <ToDoItem
        ref={addTaskRef}
        addType
        onMouseLeave={handleMouseLeave}
        rating={newTaskRating}
        title="enter task"
      />
      <button>Add task</button>
    </div>
  );
};

export default ToDoContainer;
