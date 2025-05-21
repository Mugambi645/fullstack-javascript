import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDelete, onToggle}) => {
  return (
    <div>
<ul>
    {todos.map(todo => (
        <TodoItem
        key={todo.id}
        todo={todo}
        onDelete={onDelete}
        onToggle={onToggle}/>
    ))}
</ul>
    </div>
  );
}

export default TodoList