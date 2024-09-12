import React from 'react';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { TodosLoading } from '../../ui/TodosLoading';
import { TodosError } from '../../ui/TodosError';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { TodoForm } from '../../ui/TodoForm';
import { Modal } from '../../ui/Modal';
import { TodoHeader } from '../../ui/TodoHeader';
import { ChangeAlert } from '../../ui/ChangeAlert';
import { useTodos } from '../useTodos';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeItem
  } = useTodos();

  return (
    <React.Fragment>

      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <TodosError/>}
        onLoading={() => <TodosLoading/>}
        onEmpty={() => <EmptyTodos message={'Crea tu primer To Do'}/>}
        onEmptySearchResult={(searchValue) => <EmptyTodos message={'No hay resultados para ' + searchValue}/>}
      >
        {todo => (
          <TodoItem 
          key={todo.id} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
          onEdit={() => 
            navigate('/edit/' + todo.id, {
              state: {todo}
            })}
          />
        )} 
      </TodoList>
      
      <CreateTodoButton
        onClick={() => navigate('/new')}
      />

      <ChangeAlert 
        sincronize={sincronizeItem}
      />

    </React.Fragment>
  );
}

export {HomePage};
