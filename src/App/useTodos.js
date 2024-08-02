import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos, 
    saveItem: setTodos, 
    sincronizeItem: sincronizeItem,
    loading, 
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  const addTodo = (text) => {
    if (text !== ''){
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false
      })
      setTodos(newTodos);
    }
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);

    newTodos[todoIndex].completed ? newTodos[todoIndex].completed = false : newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);

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
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    sincronizeItem
    }
}

export { useTodos };