import { useState } from "react";
import "../styles/pages/test.css";
export default function Test() {
     const [todos, setTodos] = useState([]);
     function handleAdd(e) {
          if (e.key === "Enter" && e.target.value.trim() !== "") {
               setTodos([...todos, e.target.value]);
               e.target.value = "";
          }
     }
      return (
    <div
      className="test-container"
      style={{ textAlign: "center" }}
           >
                <input 
                     className="test-input"
                     type="text"
                     placeholder="Ajoute une tache"
                     onKeyDown={handleAdd}
                />
                <ul>
                     {todos.map((todos, index) => (
                          <li key={index}>{todos}</li>
                     ))}
                </ul>
     </div>
  );
}
