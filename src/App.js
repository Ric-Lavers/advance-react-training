import React, { Suspense } from 'react';

import './App.scss';
import NavBar from './components/NavBar';
import ToDoContainer from './components/ToDo/ToDoContainer';
import UseState from './examples/useState/UseState';
import SuspenseExample from './examples/Suspense/SuspenseExample';
import TaskThree from './tasks/three/TaskThree';
import TaskTwo from './tasks/two/TaskTwo';
const TaskOne = React.lazy(() => {
  return new Promise(res => {
    setTimeout(() => {
      res(import('./tasks/one/TaskOne'));
    }, 4000);
  });
});

window['React'] = React;

class App extends React.Component {
  render() {
    // return <SuspenseExample />;
    // return <TaskOne />;
    // return <UseState />;
    // hoc
    // return <TaskTwo />;
    // To do App

    return <TaskThree />;
  }
}

export default App;
