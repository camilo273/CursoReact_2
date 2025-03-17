import './TodoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
function TodoItem(props) {
    return (
    <li className='TodoItem'>
      <CompleteIcon />
    
      {/* <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}
      >V</span> */}
<<<<<<< HEAD
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      {/* <span className={`Icon Icon-delete`}
      onClick={props.onDelete}
      >X</span> */}
      <DeleteIcon />
=======
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}
      </p>
      <DeleteIcon />
      {/* <span className={`Icon Icon-delete`}
      onClick={props.onDelete}
      >X</span> */}
      
>>>>>>> 6b24ba0 (Lets dance)
      </li>
    );
  }
   export { TodoItem };