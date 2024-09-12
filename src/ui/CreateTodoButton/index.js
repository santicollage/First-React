import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(props) {

  return (
    <button className={`CreateTodo-button`} onClick={props.onClick}></button>
  );
}

export { CreateTodoButton };