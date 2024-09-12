import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos, 
    saveItem: setTodos, 
    sincronizeItem: sincronizeItem,
    loading, 
    error
  } = useLocalStorage('TODOS_V2', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  const addTodo = (text) => {
    const id = newTodoId(todos);
    if (text !== ''){
      const newTodos = [...todos];
      newTodos.push({
        id,
        text,
        completed: false
      })
      setTodos(newTodos);
    }
  }

  const getTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === id);
    return todos[todoIndex];
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === id);

    newTodos[todoIndex].completed ? newTodos[todoIndex].completed = false : newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const editTodo = (id, newText) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === id);

    newTodos[todoIndex].text = newText;
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.id === id);

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    editTodo,
    deleteTodo,
    addTodo,
    sincronizeItem,
    getTodo
    }
}

function newTodoId(todoList) {
  const idList = todoList.map(todo => todo.id);
  const idMax = Math.max(...idList);
  return (idList.length === 0 ? 1 : idMax + 1);
}

export { useTodos };