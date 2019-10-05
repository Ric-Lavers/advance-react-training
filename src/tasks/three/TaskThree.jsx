import React from 'react';

import NavBar from './NavBar';
import ToDoContainer from './ToDoContainer';
import './style.scss';

class TaskThree extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <section>
          <ToDoContainer />
        </section>
      </div>
    );
  }
}

export default TaskThree;
