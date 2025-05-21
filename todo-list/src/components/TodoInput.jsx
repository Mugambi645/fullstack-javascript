import React from 'react'

const TodoInput = ({ task, setTask, onAdd}) => {
  return (
    <div>
        <input type='text' placeholder='Add a task' value={task} onChange={e => setTask(e.target.value)}
        />
        <button onClick={onAdd}>Add</button>
    </div>
  )
}

export default TodoInput