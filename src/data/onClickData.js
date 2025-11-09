const on_clickData = [
     `onClick={maFonction}
`,
     `export default function App() {
  function direBonjour() {
    alert("Bonjour !");
  }

  return (
    <button onClick={direBonjour}>Clique-moi</button>
  );
}
`,
     `<button onClick={() => alert("Clic détecté !")}>
  Clique ici
</button>
`,
     `import { useState } from "react";

export default function Compteur() {
  const [count, setCount] = useState(0);

  function incrementer() {
    setCount(count + 1);
  }

  return (
    <>
      <p>Compteur : {count}</p>
      <button onClick={incrementer}>+1</button>
    </>
  );
}
`,
     `function handleClick(nom) {
  alert(\`Bonjour \${ nom }!\`);
}

<button onClick={() => handleClick("Ayoub")}>Dire bonjour</button>
`,
];
export default on_clickData;