import React from 'react';
import './App.scss';

import NavBar from './components/NavBar';
import ToDoContainer from './components/ToDo/ToDoContainer';
import ToDoItem from './components/ToDo/ToDoItem';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section>
        <ToDoContainer />
      </section>
    </div>
  );
}

export default App;
