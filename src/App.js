import React from 'react';
import './App.css';

const playerCharacters = [
  {
    id: 0,
    name: "Mistrz Podziemi",
    thumb: "./assets/0.png"
  },
  {
    id: 1,
    name: "Andrej",
    thumb: "./assets/1.png"
  },
  {
    id: 2,
    name: "Büm",
    thumb: "./assets/2.png"
  },
  {
    id: 3,
    name: "Mokrun",
    thumb: "./assets/3.png"
  },
  {
    id: 4,
    name: "Logic-11",
    thumb: "./assets/4.png"
  },
  {
    id: 5,
    name: "Bafango",
    thumb: "./assets/5.png"
  },
  {
    id: 6,
    name: "Aurelia",
    thumb: "./assets/6.png"
  },
]

function App() {
  return (
    <div className="app">
      <header>
        <h1>HGSS RPG Initiative Tracker</h1>
        <ul className="characters">
          {playerCharacters.map(({ id, name, thumb }) => {
            return (
              <li key={id}>
                <div className="characters-thumb">
                  <img src={thumb} alt={`${name} Thumb`} />
                </div>
                <p>
                  { name }
                </p>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
