
import { useState } from "react";
import "../styles/pages/test.css";
export default function Test() {
     const [tache, setTache] = useState("");
     const [taches, setTaches] = useState([]);
     const [i, setI] = useState(0);
     const addTache = () => {
          
          tache.trim() !== "" && setTaches([...taches, { id: i, nameTache: tache,}])
         setI(i+1)
          setTache('')
     }
     function deleteTache(id) {
          const newTaches = taches.filter((tache) => tache.id !== id);
          setTaches(newTaches);
     }
     return (
          <div
               className="test-container"
               style={{ textAlign: "center" }}
          >
               <input 
                    className="test-input"
                    type="text"
                    value={tache}
                    onChange={(e) => setTache(e.target.value)}
               />
               <button onClick={addTache}>Ajoute une tache</button>
               <br />
               <ul>
                    {taches.map((t, i) => <li key={i}>{t.nameTache}-{t.id} <button onClick={() => deleteTache(t.id)}>❌</button></li>)}
               </ul>
          </div>
     );
}
