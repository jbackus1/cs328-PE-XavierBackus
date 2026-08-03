function TodoItem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button className="delete-button" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
