import { describe, expect, test } from "vitest";
import { createTodo, deleteTodo, toggleTodo } from "./todoUtils";

describe("Todo functions", () => {
  test("creates a new todo", () => {
    const todo = createTodo("Finish project", 1);

    expect(todo).toEqual({
      id: 1,
      text: "Finish project",
      completed: false,
    });
  });

  test("does not create an empty todo", () => {
    const todo = createTodo("   ");

    expect(todo).toBeNull();
  });

  test("removes extra spaces from the task", () => {
    const todo = createTodo("  Study Jenkins  ", 2);

    expect(todo.text).toBe("Study Jenkins");
  });

  test("marks a todo as completed", () => {
    const todos = [
      {
        id: 1,
        text: "Test the app",
        completed: false,
      },
    ];

    const result = toggleTodo(todos, 1);

    expect(result[0].completed).toBe(true);
  });

  test("deletes a todo", () => {
    const todos = [
      {
        id: 1,
        text: "Delete this task",
        completed: false,
      },
    ];

    const result = deleteTodo(todos, 1);

    expect(result).toHaveLength(0);
  });
});
