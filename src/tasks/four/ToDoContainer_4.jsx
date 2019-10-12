import React, { useState, useContext, useCallback, memo, useMemo } from 'react';
import { AppContext } from './Context_4';
import ToDoItem from './ToDoItem_4';
import ToDoInput from './ToDoInput_4';

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

const ToDoContainer = () => {
  const { setTasksTotal, tasksTotal } = useContext(AppContext);
  const [someState, setSomeState] = useState(0);

  const [tasks, setTasks] = useState(() => {
    const total = demoTaskData.reduce((a, c) => a + c.rating, 0);
    setTasksTotal(total);
    return demoTaskData.map((task, i) => {
      return { ...task, tasksTotal: total };
    });
  });

  /* //! This should only map on when adding a new task  */
  const tasksList = tasks.map(task => {
    return <ToDoItem key={task.id} {...task} tasksTotal={tasksTotal} />;
  });

  const addTask = (title, rating) => {
    const total = tasks.reduce((a, c) => a + c.rating, 0) + rating;
    const allTasks = [
      ...tasks,
      { title, rating, id: createGuid(), tasksTotal: total }
    ];
    setTasksTotal(total);
    setTasks(allTasks);
  };

  console.log(
    '%c ToDoContainer',
    'font-weight: bold',
    "- Shouldn't update with context updates"
  );
  return (
    <div className="todo-container">
      <button onClick={() => setSomeState(someState + 1)}>
        {`parent state update  clicked:${someState}`}
      </button>
      <h2>Todo:</h2>
      {tasksList}
      <ToDoInput onSubmit={addTask} />
    </div>
  );
};

export default ToDoContainer;

/*  class equivilant
class ToDoContainerClass extends React.PComponent {
  constructor(props) {
    super();
    const total = demoTaskData.reduce((a, c) => a + c.rating, 0);
    props.setTasksTotal(total);
    this.state = {
      someState: 0,
      tasks: demoTaskData.map((task, i) => {
        return { ...task, tasksTotal: total };
      })
    };
  }
  setSomeState = () => {
    this.setState({ someState: this.state.someState + 1 });
  };

  addTask = (title, rating) => {
    const total = this.state.tasks.reduce((a, c) => a + c.rating, 0) + rating;
    const allTasks = [
      ...this.state.tasks,
      { title, rating, id: createGuid(), tasksTotal: total }
    ];
    this.props.etTasksTotal(total);
    this.setState({ tasks: allTasks });
  };
  render() {
    return (
      <div className="todo-container">
        <button onClick={this.setSomeState}>{this.state.someState}</button>
        <h2>Todo:</h2>

        {this.state.tasks.map(task => {
          // console.count('mapping');
          return <ToDoItem key={task.id} {...task} />;
        })}

        <ToDoInput onSubmit={this.state.addTask} />
      </div>
    );
  }
}

 */
