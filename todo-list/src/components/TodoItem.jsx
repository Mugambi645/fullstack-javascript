import React from 'react'

const TodoItem = ({ todo, onDelete, onToggle}) => {
  return (
    <div>
        <li style={{ margin: '8px 0'}}>
            <span onClick={() => onToggle(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none',
                cursor:'pointer'
            }}>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)} style={{ marginLeft: 10}}>❌
             </button>
        </li>
    </div>
  );
}

export default TodoItem