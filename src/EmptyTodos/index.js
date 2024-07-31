import './EmptyTodos.css'

function EmptyTodos({message}) {
  return (
    <p className='first-message'>{message}</p>
  );
}

export { EmptyTodos };