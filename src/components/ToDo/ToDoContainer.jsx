import React, { useState, useEffect, useContext, createRef } from 'react';
import { AppContext } from '../../context/AppContext';
import ToDoItem from './ToDoItem';
import ToDoInput from './ToDoInput';

const createGuid = () =>
  `${Math.random()
    .toString()
    .substr(2, 9)}`;

const demoTaskData = [
  { title: 'one', rating: 5, id: createGuid() },
  { title: 'two', rating: 5, id: createGuid() },
  { title: 'three', rating: 5, id: createGuid() },
  { title: 'four', rating: 5, id: createGuid() }
];

const withSetTasksTotal = Component => () => {
  const { setTasksTotal } = useContext(AppContext);

  return <Component setTasksTotal={setTasksTotal} />;
};

const ToDoContainer = React.memo(({ setTasksTotal }) => {
  const [someState, setSomeState] = useState(0);
  const addRef = createRef();

  const [tasks, setTasks] = useState(() => {
    const total = demoTaskData.reduce((a, c) => a + c.rating, 0);
    setTasksTotal(total);
    return demoTaskData.map((task, i) => {
      return { ...task, tasksTotal: total };
    });
  });

  const addTask = (title, rating) => {
    const total = tasks.reduce((a, c) => a + c.rating, 0) + rating;
    const allTasks = [
      ...tasks,
      { title, rating, id: createGuid(), tasksTotal: total }
    ];
    setTasksTotal(total);
    setTasks(allTasks);
    addRef.current.focus();
  };

  return (
    <div className="todo-container">
      <button onClick={() => setSomeState(someState + 1)}>{someState}</button>
      <h2>Todo:</h2>

      {tasks.map(task => {
        // console.count('mapping');
        return <ToDoItem key={task.id} {...task} />;
      })}

      <ToDoInput
        ref={addRef}
        onSubmit={addTask}
        // onSubmit={React.useCallback(addTask, [setTasksTotal])}
      />
    </div>
  );
});

export default withSetTasksTotal(ToDoContainer);

/* 
 <ToDoItem
      id={createGuid()}
      rating={5}
      title="one"
      tasksTotal={tasksTotal}
    />,
    <ToDoItem
      id={createGuid()}
      rating={5}
      title="two"
      tasksTotal={tasksTotal}
    />,
    <ToDoItem
      id={createGuid()}
      rating={5}
      title="three"
      tasksTotal={tasksTotal}
    />,
    <ToDoItem
      id={createGuid()}
      rating={5}
      title="four"
      tasksTotal={tasksTotal}
    /> */
