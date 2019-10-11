import React from 'react';

import { AppProvider } from './Context';
import NavBar from './NavBar';
import ToDoContainer from './ToDoContainer';
import './style.scss';

class TaskThree extends React.Component {
  render() {
    return (
      <AppProvider>
        <div className="App">
          <NavBar />
          <section>
            <ToDoContainer />
          </section>
        </div>
      </AppProvider>
    );
  }
}

export default TaskThree;
