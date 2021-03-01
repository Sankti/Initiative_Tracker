import React, { useState } from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const playerCharacters = [
  {
    id: "mistrz",
    name: "Mistrz Podziemi",
    thumb: "./assets/0.png"
  },
  {
    id: "andrej",
    name: "Andrej",
    thumb: "./assets/1.png"
  },
  {
    id: "bum",
    name: "Büm",
    thumb: "./assets/2.png"
  },
  {
    id: "mokrun",
    name: "Mokrun",
    thumb: "./assets/3.png"
  },
  {
    id: "logic11",
    name: "Logic-11",
    thumb: "./assets/4.png"
  },
  {
    id: "bafango",
    name: "Bafango",
    thumb: "./assets/5.png"
  },
  {
    id: "aurelia",
    name: "Aurelia",
    thumb: "./assets/6.png"
  },
]

function App() {
  const [characters, updateCharacters] = useState(playerCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <header>
        <h1>HGSS RPG Initiative Tracker</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
