export const codes_use_effect = [
     `useEffect(() => {
  // effet (code qui s’exécute)

  return () => {
    // cleanup (optionnel)
  };
}, [dépendances]);
`,
  `useEffect(() => {
  console.log("Rendu !");
});
`,
  `useEffect(() => {
  console.log("Montage du composant");
}, []);
`,
  `useEffect(() => {
  console.log("Le compteur a changé :", count);
}, [count]);
`,
  `useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => {
    clearInterval(id); // Nettoyage
  };
}, []);
`, `import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>Compteur : {count}</h1>;
}
`,
]