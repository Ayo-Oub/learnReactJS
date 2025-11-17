export const filter_codes = [
     `const newArray = array.filter((element) => {
  return condition;
});
`,
     `const numbers = [5, 12, 8, 20];
const result = numbers.filter(n => n > 10);

console.log(result); // [12, 20]
`, 
     `const words = ["apple", "banana", "avocado", "kiwi"];
const result = words.filter(w => w.startsWith("a"));

console.log(result); // ["apple", "avocado"]
`,
     `const users = [
  { id: 1, name: "Ayoub", age: 20 },
  { id: 2, name: "Sara", age: 16 },
  { id: 3, name: "Amine", age: 25 },
];

const adults = users.filter(u => u.age >= 18);

console.log(adults);
// [ {id:1,name:"Ayoub",age:20}, {id:3,name:"Amine",age:25} ]
`,
     `import { useState } from "react";

export default function App() {
  const [products] = useState([
    { id: 1, name: "Laptop", inStock: true },
    { id: 2, name: "Phone", inStock: false },
    { id: 3, name: "Tablet", inStock: true },
  ]);

  const availableProducts = products.filter(p => p.inStock);

  return (
    <div>
      <h2>Produits en stock :</h2>
      <ul>
        {availableProducts.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
`,`import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  const users = [
    "Ayoub",
    "Sara",
    "Samir",
    "Amina",
    "Karim"
  ];

  const filtered = users.filter(u =>
    u.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filtered.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
    </div>
  );
}
`,
     `import { useState } from "react";

export default function Todo() {
  const [todos] = useState([
    { id: 1, text: "Apprendre React", done: true },
    { id: 2, text: "Faire du sport", done: false },
    { id: 3, text: "Lire un livre", done: true },
  ]);

  const completed = todos.filter(t => t.done);

  return (
    <div>
      <h2>Tâches terminées :</h2>
      <ul>
        {completed.map(t => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </div>
  );
}
`
]