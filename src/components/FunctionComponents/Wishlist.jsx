import React, { useState } from "react";
import "../../css/Navbar.css";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Wishlist = ({ wishlist }) => {
  const [items, setItems] = useState(wishlist);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const updatedItems = Array.from(items);
    const [reorderedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, reorderedItem);
    setItems(updatedItems);
  };

  return (
    <div className="wish">
      <img
        src="https://thumbs.dreamstime.com/z/wishlist-icon-white-background-simple-element-illustration-fashion-commerce-concept-editable-symbol-design-can-be-use-141338735.jpg"
        alt="logo"
        style={{ height: '40vh', alignSelf: 'left', display: 'block', float: 'left', justifyContent: 'left' }}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="wishlist">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      {item}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Wishlist;
