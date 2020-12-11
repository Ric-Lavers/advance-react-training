import React, { Suspense } from 'react';

import './App.scss';
import ToDoContainer from './components/ToDo/ToDoContainer';
import UseState from './examples/useState/UseState';
import SuspenseExample from './examples/Suspense/SuspenseExample';
import TaskThree from './tasks/three/TaskThree';
import TaskFour from './tasks/four/TaskFour';
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
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <TaskOne />
      </Suspense>
    );
    {
      /*  return <SuspenseExample />;
    // return <TaskOne />;
    // return <UseState />;
    // hoc
    // return <TaskTwo />;
    // To do App
 */
    }
    return <TaskFour />;
  }
}

export default App;
