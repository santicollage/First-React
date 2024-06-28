import React from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <button className={`CreateTodo-button ${openModal && 'CreateTodo-button-active'}`} onClick={() => {setOpenModal(state => !state)}}></button>
  );
}

export { CreateTodoButton };