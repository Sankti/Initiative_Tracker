import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './draggable-list.styles.css';

import ThumbDM from "../../assets/DM.png";
import ThumbAndrei from "../../assets/Andrei.png";
import ThumbBruce from "../../assets/Bruce.png";
import ThumbGigantus from "../../assets/Gigantus.png";
import ThumbLara from "../../assets/Lara.png";
import ThumbLogic from "../../assets/Logic.png";
import ThumbTertia from "../../assets/Tertia.png";

const playerCharacters = [
  {
    id: "mistrz",
    name: "Mistrz Podziemi",
    thumb: ThumbDM
  },
  {
    id: "andrei",
    name: "Andrei Berkowić",
    thumb: ThumbAndrei
  },
  {
    id: "bruce",
    name: "Bruce O'Reilly",
    thumb: ThumbBruce
  },
  {
    id: "gigantus",
    name: "Mgr Inż. Gigantus",
    thumb: ThumbGigantus
  },
  {
    id: "lara",
    name: "Dr Lara Shachnawaz",
    thumb: ThumbLara
  },
  {
    id: "logic11",
    name: "Logic-11",
    thumb: ThumbLogic
  },
  {
    id: "tertia",
    name: "Krwawa Tertia",
    thumb: ThumbTertia
  }
]

function DraggableList() {
  const [characters, updateCharacters] = useState(playerCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
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
  );
}

export default DraggableList;