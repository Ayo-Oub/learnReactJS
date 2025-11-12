import { Link } from 'react-router'
import JsxCode from '../components/JsxCode'
import '../styles/pages/pages.css'
import { props_codes } from '../data/propsData'
export default function PropsPage() {
  return (
    <>
            <Link
                 to="/"
                 className="back-link"
            >
                 Retour
            </Link>
            <div className='cours-container'>
                 <h4 className='cours-section'>Qu’est-ce que les props ?</h4>
                 <p>Les props sont des valeurs transmises d’un composant parent à un composant enfant.
                      Elles permettent la communication descendante (top-down communication).</p>
                 <JsxCode content={props_codes[0]} />
                 <p>Ici, le composant App passe une prop nom au composant Bienvenue.</p>
                 <h4 className='cours-section'>Syntaxe simplifiée par déstructuration</h4>
                 <p>Pour éviter props.nom, on peut déstructurer les props :</p>
                 <JsxCode content={props_codes[1]} />
                 <p>Cela rend le code plus clair et plus concis.</p>
                 <h4 className='cours-section'>Passer différents types de données</h4>
                 <p>Tu peux passer n’importe quel type de valeur via les props :</p>
                 <JsxCode content={props_codes[2]}/>
                 <h4 className='cours-section'>Communication Enfant → Parent</h4>
                 <p>Ce n’est pas direct (les props sont à sens unique).
                      Mais on peut transmettre une fonction du parent à l’enfant via une prop,
                      et l’enfant l’appelle pour remonter des données.</p>
                 <JsxCode content={props_codes[3]} />
                 <p>Résultat : quand tu cliques, l’enfant appelle une fonction du parent.
                      C’est ainsi qu’on fait la communication enfant → parent.</p>
            </div>
    </>
  )
}
