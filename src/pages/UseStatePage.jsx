import JsxCode from '../components/JsxCode'
import { useState_codes } from '../data/useStateData'
import '../styles/pages/pages.css'
import { Link } from 'react-router'
export default function UseStatePage() {
  return (
    <>
            <Link
                 to="/"
                 className="back-link"
            >
                 Retour
            </Link>
            <div className="cours-container">
                 <h2 className="cours-title">useState en React</h2>
                 <h4 className='cours-section'>C’est quoi useState ?</h4>
                 <p>useState est un hook (une fonction spéciale de React) qui permet à un composant fonctionnel de gérer un état local.
                      Autrement dit, il te permet de stocker et modifier des données dynamiques dans un composant.</p>
                 <p>L’état, c'est une variable qui fait réagir le composant quand elle change :
                      si tu modifies le state, le composant se re-rend (reload).</p>
                 <JsxCode content={useState_codes[0]} />
                 <ul>
                      <li>count → la valeur du state</li>
                      <li>setCount → la fonction qui met à jour le state.</li>
                      <li>useState(0) → valeur initial = 0</li>
                 </ul>
                 <h4 className='cours-section'>Exemple avec un String</h4>
                 <JsxCode content={useState_codes[1]} />
                 <h4 className='cours-section'>Exemple avec un Boolean</h4>
                 <JsxCode content={useState_codes[2]} />
                 <h4 className='cours-section'>Exemple avec un objet</h4>
                 <p>On doit toujours copier l'objet avant de modifier.</p>
                 <JsxCode content={useState_codes[3]} />
                 <h4 className='cours-section'>Exemple avec un tableau</h4>
                 <p>Toujours copier le tableau avant d’ajouter/supprimer.</p>
                 <p>✓ Ajouter un élément</p>
                 <JsxCode content={useState_codes[4]}/>
                 <p>✓ Supprimer un élément</p>
                 <JsxCode content={useState_codes[5]} />
                 <h4 className='cours-section'>Forme avancée : mettre à jour le state avec une callback</h4>
                 <p>Utile quand la nouvelle valeur dépend de l’ancienne.</p>
                 <JsxCode content={useState_codes[6]} />
                 <p>ou tableau :</p>
                 <JsxCode content={useState_codes[7]} />
                 <h4 className='cours-section'>Exemples avancées</h4>
                 <p> 🟣 Exemple 1 : Profil utilisateur (mise à jour partielle) </p>
                 <JsxCode content={useState_codes[8]} />
                 <p>Toujours utiliser la syntaxe {'{...user, cle: valeur }'} pour copier l’ancien objet avant de modifier un champ, car useState remplace l’objet entier, il ne fusionne pas les propriétés automatiquement.</p>
                 <p> 🟣 Exemple 2 : Formulaire d’inscription </p>
                 <JsxCode content={useState_codes[9]} />
                 <p>Idée clé : [name]: value permet de modifier la bonne propriété automatiquement selon le champ du formulaire.</p>
                 <p> 🟣  Exemple 3 : Objet imbriqué</p>
                 <JsxCode content={useState_codes[10]} />
                 <p>Si tu modifies un objet imbriqué, il faut faire une copie de chaque niveau concerné (... à chaque niveau).</p>
                 <p> 🟣 Exemple 4 : Liste de tâches </p>
                 <JsxCode content={useState_codes[11]} />
                 <ul>
                      <li>...taches → copie l’ancien tableau</li>
                      <li>.filter() → permet de supprimer un élément sans le modifier directement (car React veut qu’on évite la mutation directe)</li>
                 </ul>
            </div>
       </>
  )
}
