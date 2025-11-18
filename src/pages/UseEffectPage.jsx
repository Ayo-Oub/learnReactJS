import { Link } from 'react-router'
import JsxCode from '../components/JsxCode'
import { codes_use_effect } from '../data/useEffectData'

export default function UseEffectPage() {
  return (
    <>
            <Link
                 to="/"
                 className="back-link"
            >
                 Retour
            </Link>
            <div className="cours-container">
                 <h2 className="cours-title">useEffect en React</h2>
                 <h4 className='cours-section'>Qu’est-ce que useEffect ?</h4>
                 <p>
                      useEffect est un Hook de React qui permet d’exécuter du code après le rendu du composant.

                      Il sert à :
                 </p>
                 <ul>
                      <li>récupérer des données (API)</li>
                      <li>modifier le DOM</li>
                      <li>écouter des évènements (scroll, resize…)</li>
                      <li>démarrer/arrêter des timers</li>
                      <li>synchroniser l’état avec une source externe</li>
                      <li>nettoyer des effets (cleanup)</li>
                 </ul>
                 <p>En bref : useEffect = gérer les effets secondaires.</p>
                 <h4 className='cours-section'>Structure de useEffect</h4>
                 <JsxCode content={codes_use_effect[0]} />
                 <h4 className='cours-section'>Les 3 comportements de useEffect</h4>
                 <p>🟣 Sans tableau de dépendances : s'exécute à chaque rendu</p>
                 <JsxCode content={codes_use_effect[1]}/>
                 <p>Se lance à chaque rendu
                      (au montage + à chaque mise à jour)</p>
                 <p>🟣 Avec tableau vide : s’exécute une seule fois</p>
                 <JsxCode content={codes_use_effect[2]} />
                 <p>Utilisation typique : fetch API, event listener, timer…</p>
                 <p>🟣 Avec dépendances : s’exécute quand ces valeurs changent</p>
                 <JsxCode content={codes_use_effect[3]} />
                 <p>Se lance :</p>
                 <ul>
                      <li>au premier rendu</li>
                      <li>chaque fois que count change</li>
                 </ul>
                 <p>🟣 Cleanup : nettoyage</p>
                 <JsxCode content={codes_use_effect[4]} />
                 <p>Le cleanup s’exécute :</p>
                 <ul>
                      <li>avant de relancer l’effet,</li>
                      <li>et quand le composant se démonte.</li>
                 </ul>
                 <h4 className='cours-section'>Mini-projets pratiques pour bien comprendre</h4>
                 <p>🟣 Projet 1 : Compteur automatique (timer)</p>
                 <p>Le compteur augmente tout seul toutes les secondes.</p>
                 <JsxCode content={codes_use_effect[5]} />
                 <p>Ce que tu apprends ici :</p>
                 <ul>
                      <li>useEffect avec []</li>
                      <li>cleanup avec clearInterval</li>
                 </ul>
            </div>
       </>
  )
}
