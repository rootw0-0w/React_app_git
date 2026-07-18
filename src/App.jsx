import { useEffect, useState } from "react";
import { createTodo, deleteTodo, toggleTodo } from "./todoUtils";
import "./App.css";

function loadTodos() {
  try {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  } catch {
    return [];
  }
}

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(loadTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(event) {
    event.preventDefault();

    const newTodo = createTodo(input);

    if (!newTodo) {
      return;
    }

    setTodos([...todos, newTodo]);
    setInput("");
  }

  function handleToggle(id) {
    setTodos(toggleTodo(todos, id));
  }

  function handleDelete(id) {
    setTodos(deleteTodo(todos, id));
  }

  return (
    <main className="todo-container">
      <h1>Todo List - Git Repository</h1>

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter a task"
          aria-label="Todo task"
        />

        <button type="submit">Add</button>
      </form>

      {todos.length === 0 ? (
        <p className="empty-message">No tasks yet.</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
                aria-label={`Complete ${todo.text}`}
              />

              <span>{todo.text}</span>

              <button
                type="button"
                className="delete-button"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
