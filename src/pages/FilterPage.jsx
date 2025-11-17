import React from 'react'
import { filter_codes } from '../data/filterData'
import { Link } from 'react-router'
import JsxCode from '../components/JsxCode'
export default function FilterPage() {
     return (
          <>
               <Link
                    to="/"
                    className="back-link"
               >
                    Retour
               </Link>
               <div className='cours-container'>
                    <h2 className='cours-title'>filter() en JavaScript</h2>
                    <h4 className='cours-section'>Définition</h4>
                    <p>filter() est une méthode des tableaux qui retourne un nouveau tableau contenant uniquement les éléments qui respectent une condition.</p>
                    <p>Syntaxe:</p>
                    <JsxCode content={filter_codes[0]} language="js" />
                    <ul>
                         <li>element : chaque élément du tableau</li>
                         <li>condition : doit retourner true ⇒ élément gardé
                              doit retourner false ⇒ élément supprimé</li>
                    </ul>
                    <h4 className='cours-section'>Exemples simples en JavaScript</h4>
                    <p>🟣 Garder uniquement les nombres {">"} 10</p>
                    <JsxCode content={filter_codes[1]} language='js' />
                    <p>🟣 Garder les mots qui commencent par "a"</p>
                    <JsxCode content={filter_codes[2]} language='js' />
                    <p>🟣 Filtrer un tableau d’objets</p>
                    <JsxCode content={filter_codes[3]} />
                    <h4 className='cours-section'>filter() en React JS — Exemples pratiques</h4>
                    <p>🟣 Exemple 1 — Filtrer une liste affichée</p>
                    <p>Ici, on affiche uniquement les produits en stock.</p>
                    <JsxCode content={filter_codes[4]} />
                    <p>🟣 Exemple 2 — Filtrer avec un input de recherche</p>
                    <JsxCode content={filter_codes[5]} />
                    <p>🟣 Exemple 3 — Filtrer un tableau d’objets selon un bouton</p>
                    <p>Ici, on affiche uniquement les tâches terminées.</p>
                    <JsxCode content={filter_codes[6]} />
               </div>
          </>
     )
}
