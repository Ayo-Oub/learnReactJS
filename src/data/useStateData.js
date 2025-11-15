export const useState_codes= [
     `import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Valeur : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
`,
     `const [name, setName] = useState("Ayoub");

<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
`,
     `function Toggle() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {visible && <p>Je suis visible 👀</p>}
      <button onClick={() => setVisible(!visible)}>Afficher / Cacher</button>
    </div>
  );
}
`,
     `const [user, setUser] = useState({
  name: "Ayoub",
  age: 20
});

<button
  onClick={() => setUser({
    ...user,        // copie de l'objet
    age: user.age + 1
  })}
>
  +1 âge
</button>
`,
     `const [items, setItems] = useState([1, 2, 3]);

<button
  onClick={() => setItems([...items, 4])}
>
  Ajouter 4
</button>
`,
     `setItems(items.filter(item => item !== 2));
`,
     `setCount(prev => prev + 1);
`,
     `setItems(prev => [...prev, prev.length + 1]);
`,
     `import { useState } from "react";

function Profil() {
  const [user, setUser] = useState({
    nom: "Ayoub",
    age: 20,
    ville: "Casablanca"
  });

  const changerVille = () => {
    setUser({ ...user, ville: "Rabat" }); // On garde le reste intact
  };

  const vieillir = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      <p>{user.nom}, {user.age} ans, habite à {user.ville}</p>
      <button onClick={changerVille}>Changer de ville</button>
      <button onClick={vieillir}>Vieillir</button>
    </div>
  );
}
`,
     `function Formulaire() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    motDePasse: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    //Déstructuration : { name, value } = e.target
    //Cette ligne: const { name, value } = e.target;
    //revient à écrire :
    //const name = e.target.name;
    //const value = e.target.value;
    //Déstructuration = juste une façon plus courte d’écrire ça.
    setForm({ ...form, [name]: value }); // Mise à jour dynamique
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="motDePasse" type="password" placeholder="Mot de passe" value={form.motDePasse} onChange={handleChange} />
      <button type="submit">Envoyer</button>
    </form>
  );
}
`,
     `function Compte() {
  const [compte, setCompte] = useState({
    utilisateur: { nom: "Ayoub", email: "ayoub@mail.com" },
    solde: 150
  });

  const changerEmail = () => {
    setCompte({
      ...compte,
      utilisateur: { ...compte.utilisateur, email: "ayoub.react@mail.com" }
    });
  };

  return (
    <div>
      <p>{compte.utilisateur.nom} — {compte.utilisateur.email}</p>
      <p>Solde : {compte.solde} €</p>
      <button onClick={changerEmail}>Changer l'email</button>
    </div>
  );
}
`,
     `function TodoList() {
  const [taches, setTaches] = useState(["Faire les courses", "Réviser React"]);

  const ajouterTache = () => {
    setTaches([...taches, "Nouvelle tâche"]);
  };

  const supprimerTache = (index) => {
    setTaches(taches.filter((_, i) => i !== index));
  };

  return (
    <div>
      <ul>
        {taches.map((tache, index) => (
          <li key={index}>
            {tache}
            <button onClick={() => supprimerTache(index)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={ajouterTache}>Ajouter</button>
    </div>
  );
}
`,
]