import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './useTodos';
import { ChangeAlert } from '../ChangeAlert';

function App() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    setOpenModal,
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
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        )} 
      </TodoList>
      
      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      {openModal &&
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      }

      <ChangeAlert 
        sincronize={sincronizeItem}
      />

    </React.Fragment>
  );
}

export default App;
