import React from 'react';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';
import { useParams, useLocation } from 'react-router-dom';

function EditTodoPage() {
  const { loading, editTodo, getTodo } = useTodos();
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  }else if (loading) {
    return <p>Cargando ...</p>
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }
  
  return (
    <TodoForm
      defaultTodoText={todoText}
      label='Edita tu TODO'
      submitText='Edita'
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}

export {EditTodoPage};