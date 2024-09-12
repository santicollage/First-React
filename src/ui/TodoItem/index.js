import React from 'react';
import { ReactComponent as CheckSVG } from './Icons/check-circle-solid.svg'
import { ReactComponent as DeleteSVG } from './Icons/xmark-circle-solid.svg'
import { ReactComponent as EditSVG } from './Icons/editar.svg'
import './TodoItem.css'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete} 
      ><CheckSVG className='svg'/></span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      ><DeleteSVG className='svg'/></span>
      <span 
        className="Icon Icon-edit"
        onClick={props.onEdit}
      ><EditSVG className='svg'/></span>
    </li>
  );
}

export { TodoItem };