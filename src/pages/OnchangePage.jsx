import { Link } from 'react-router'
import JsxCode from '../components/JsxCode'
import '../styles/pages/pages.css'
import { on_change_codes } from '../data/onChangeData'
export default function OnchangePage() {
  return (
    <>
            <Link
                 to="/"
                 className="back-link"
            >
                 Retour
            </Link>
            <div className='cours-container'>
                 <h4 className='cours-section'>Qu’est-ce que onChange en React ?</h4>
                 <p>onChange est un gestionnaire d’événement (event handler) utilisé pour surveiller et réagir aux changements de valeur dans un champ de formulaire (input, textarea, select…).</p>
                 <p>En HTML classique :</p>
                 <JsxCode content={on_change_codes[0]} language='html' />
                 <p>En React, c’est un peu différent :</p>
                 <ul>
                      <li>On n’écrit pas de code inline, mais on passe une fonction JavaScript entre accolades { }.</li>
                      <li>L’événement est contrôlé par React, pas directement par le DOM.</li>
                 </ul>
                 <JsxCode content={on_change_codes[1]} />
                 <h4 className='cours-section'> Exemple simple avec un champ texte</h4>
                 <p>Voici un exemple complet d’un composant React qui affiche le texte saisi par l’utilisateur :</p>
                 <JsxCode content={on_change_codes[2]} />
                 <ul>
                      <li>event est un objet spécial fourni par React.</li>
                      <li>event.target représente l’élément qui a déclenché l’événement.</li>
                      <li>event.target.value contient la valeur actuelle du champ.</li>
                      <li>setValue() met à jour l’état du composant.</li>
                 </ul>
                 <h4 className='cours-section'>onChange avec plusieurs types d’inputs</h4>
                 <p>▪️ Exemple avec un champ number :</p>
                 <JsxCode content={on_change_codes[3]} />
                 <p>▪️ Exemple avec une checkbox :</p>
                 <JsxCode content={on_change_codes[4]} />
                 <p>▪️Exemple avec un select :</p>
                 <JsxCode content={on_change_codes[5]} />
                 <h4 className='cours-section'>onChange avec un objet</h4>
                 <JsxCode content={on_change_codes[6]} />
                 <h4 className='cours-section'>onChange avec un tableau d’état </h4>
                 <JsxCode content={on_change_codes[7]} />
            </div>
    </>
  )
}
