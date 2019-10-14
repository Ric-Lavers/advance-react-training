import React, { Suspense } from 'react';

import './App.scss';
import HOCExample from './examples/HigherOrderComponent/ExampleHOC';
import MemoVsPure from './examples/Memoisation/MemoisationDemo.jsx';
import ToDoContainer from './components/ToDo/ToDoContainer';
import UseStateExample from './examples/useState/UseState';
import SuspenseExample from './examples/Suspense/SuspenseExample';
import ContextExample from './examples/Context/ContextExample';
import TaskThree from './tasks/three/TaskThree';
import TaskTwo from './tasks/two/TaskTwo';
import TaskOne from './tasks/one/TaskOne';
// const TaskOne = React.lazy(() => {
//   return new Promise(res => {
//     setTimeout(() => {
//       res(import('./tasks/one/TaskOne'));
//     }, 4000);
//   });
// });

window['React'] = React;

class App extends React.Component {
  render() {
    // return <SuspenseExample />;
    // return <TaskOne />;
    // return <UseState />;
    // hoc
    // return <TaskTwo />;
    // To do App
    return <ContextExample />;
    // return <TaskThree />;
  }
}

export default App;
