export const props_codes = [
     `// App.js
function App() {
  return <Bienvenue nom="Ayoub" />;
}

// Bienvenue.js
function Bienvenue(props) {
  return <h1>Bonjour, {props.nom} !</h1>;
}

export default Bienvenue;
`,
     `function Bienvenue({ nom }) {
  return <h1>Bonjour, {nom} !</h1>;
}
`,
     `function App() {
  return (
    <Profil
      nom="Ayoub"
      age={25}
      estConnecte={true}
      hobbies={["Lecture", "Musique", "Code"]}
    />
  );
}

function Profil({ nom, age, estConnecte, hobbies }) {
  return (
    <div>
      <p>Nom : {nom}</p>
      <p>Âge : {age}</p>
      <p>Statut : {estConnecte ? "En ligne" : "Hors ligne"}</p>
      <p>Hobbies : {hobbies.join(", ")}</p>
    </div>
  );
}
`,
     `function Parent() {
  const handleClick = (nom) => /{
    alert(\`Bonjour \${ nom }, message reçu depuis l'enfant !\`);
  };

return <Enfant envoyerMessage={handleClick} />;
}

function Enfant({ envoyerMessage }) {
     return (
          <button onClick={() => envoyerMessage("Ayoub")}>
               Cliquer pour saluer le parent
          </button>
     );
}
`
]