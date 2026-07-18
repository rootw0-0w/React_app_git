export function createTodo(text, id = Date.now()) {
  const cleanedText = text.trim();

  if (!cleanedText) {
    return null;
  }

  return {
    id,
    text: cleanedText,
    completed: false,
  };
}

export function toggleTodo(todos, id) {
  return todos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );
}

export function deleteTodo(todos, id) {
  return todos.filter((todo) => todo.id !== id);
}