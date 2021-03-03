import React from 'react';
import './App.css';

import DraggableList from './components/draggable-list.component/draggable-list.component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HGSS RPG Initiative Tracker</h1>
        <DraggableList />
      </header>
    </div>
  );
}

export default App;