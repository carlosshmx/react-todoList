import React from 'react';
import './TodoItem.css';
import {BsCheckLg} from 'react-icons/bs';
import {FiTrash2} from 'react-icons/fi';

function TodoItem(props) {
  
  return (
    <li className="TodoItem">
        
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <BsCheckLg className='reactCheck'/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}  
      >
        <FiTrash2 className='reactTrash'/>
      </span>
    </li>
  );
}

export { TodoItem };