import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton({openModal, setOpenModal}) {

  return (
    <button className={`CreateTodo-button ${openModal && 'CreateTodo-button-active'}`} onClick={() => {setOpenModal(state => !state)}}></button>
  );
}

export { CreateTodoButton };