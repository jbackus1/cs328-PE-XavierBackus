import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTask = () => {
    const trimmed = text.trim();
    if (trimmed === '') return;

    setTodos([...todos, { id: Date.now(), text: trimmed }]);
    setText('');
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="App">
      <div className="todo-card">
        <h1>To-Do List</h1>
        <div className="todo-input-row">
          <input
            type="text"
            className="todo-input"
            placeholder="What needs to be done?"
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="add-button" onClick={addTask}>
            Add Task
          </button>
        </div>
        <TodoList todos={todos} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
