import React from 'react';

import { AppProvider } from './Context_4';
import NavBar from './NavBar_4';
import ToDoContainer from './ToDoContainer_4';
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
