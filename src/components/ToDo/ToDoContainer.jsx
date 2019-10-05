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

  return React.memo(<Component setTasksTotal={setTasksTotal} />);
};

const ToDoContainer = ({ setTasksTotal }) => {
  const [someState, setSomeState] = useState(0);
  // const addRef = createRef();

  const [tasks, setTasks] = useState(() => {
    const total = demoTaskData.reduce((a, c) => a + c.rating, 0);
    setTasksTotal(total);
    return demoTaskData.map((task, i) => {
      return { ...task, tasksTotal: total };
    });
  });

  const addTask = React.useCallback(
    (title, rating) => {
      const total = tasks.reduce((a, c) => a + c.rating, 0) + rating;
      const allTasks = [
        ...tasks,
        { title, rating, id: createGuid(), tasksTotal: total }
      ];
      setTasksTotal(total);
      setTasks(allTasks);
    },
    [setTasksTotal, tasks]
  );

  return (
    <div className="todo-container">
      <button onClick={() => setSomeState(someState + 1)}>{someState}</button>
      <h2>Todo:</h2>

      {tasks.map(task => {
        // console.count('mapping');
        return <ToDoItem key={task.id} {...task} />;
      })}

      <ToDoInput onSubmit={addTask} />
    </div>
  );
};

export default withSetTasksTotal(ToDoContainer);
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
