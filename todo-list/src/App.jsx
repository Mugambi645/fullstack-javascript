const { useState } = require("react");

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (task.trim() == "")return;
    setTodos([...todos, { id: Date.now(), text:task, completed: false}])
    setTask("");
  };
  const handleDelete = (id) => {
    setTodos(todos.filter(todo =>  todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed} : todo
      )
    );
  };



  return (
    <div style={{ padding: 20}}>
      <h1>To-O List</h1>
      
    </div>
  )
}
export default App;