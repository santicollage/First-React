import React from "react";
import './TodoForm.css'
import { useNavigate } from "react-router-dom";

function TodoForm(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '');

  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/');
  }
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = (event) => {
    navigate('/');
  }

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea placeholder="To Do" value={newTodoValue} onChange={onChange}/>
      <div className="TodoForm-buttonContainer">
        <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancel</button>
        <button className="TodoForm-button TodoForm-button--add">{props.submitText}</button>
      </div>
    </form>
  )
}

export { TodoForm };