export const on_change_codes = [
     `<input type="text" onchange="handleChange(event)">
`,
     `<input type="text" onChange={handleChange} />
`,
     `import { useState } from "react";

function InputExample() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value); // on récupère la valeur du champ
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>Vous avez tapé : {value}</p>
    </div>
  );
}

export default InputExample;
`, `function NumberInput() {
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <p>Âge : {age}</p>
    </div>
  );
}
`,
     `function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        J’accepte les conditions
      </label>
      <p>{isChecked ? "✅ Accepté" : "❌ Refusé"}</p>
    </div>
  );
}
`,
     `function SelectExample() {
  const [fruit, setFruit] = useState("pomme");

  return (
    <div>
      <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
        <option value="pomme">Pomme</option>
        <option value="banane">Banane</option>
        <option value="orange">Orange</option>
      </select>
      <p>Fruit choisi : {fruit}</p>
    </div>
  );
}
`, 
     `function FormObject() {
  const [form, setForm] = useState({ name: "", age: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <div>
      <input name="name" placeholder="Nom" onChange={handleChange} />
      <input name="age" placeholder="Âge" onChange={handleChange} />
      <p>Nom : {form.name}</p>
      <p>Âge : {form.age}</p>
    </div>
  );
}
`, 
     `function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setTodos([...todos, e.target.value]);
      e.target.value = "";
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Ajoute une tâche"
        onKeyDown={handleChange}
      />
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
`
]