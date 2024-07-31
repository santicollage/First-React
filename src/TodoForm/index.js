import React from "react";
import './TodoForm.css'

function TodoForm({addTodo, setOpenModal}) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = (event) => {
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea placeholder="To Do" value={newTodoValue} onChange={onChange}/>
      <div className="TodoForm-buttonContainer">
        <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancel</button>
        <button className="TodoForm-button TodoForm-button--add">Add</button>
      </div>
    </form>
  )
}

export { TodoForm };