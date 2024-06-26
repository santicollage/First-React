import './CreateTodoButton.css'

function CreateTodoButton() {
  return (
    <button className='CreateTodo-button' onClick={() => {console.log('Hiciste click')}}></button>
  );
}

export { CreateTodoButton };