export const codes_projects = [
     // 1. todo
     `import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // ➤ Ajouter une tâche
  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // ➤ Changer (toggle) le done
  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // ➤ Supprimer une tâche
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>To-Do Simple</h1>

      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Ajouter</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleDone(todo.id)}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
`
]