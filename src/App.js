import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Holaaaaa', completed: true},
  {text: 'Como', completed: false},
  {text: 'Estas', completed: false},
  {text: 'Hoy', completed: false}
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={4} total={10} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => 
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        />)}
      </TodoList>
      
      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
