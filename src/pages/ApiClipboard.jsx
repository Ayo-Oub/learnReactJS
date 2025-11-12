import JsxCode from '../components/JsxCode'
import api_clipBoard from '../data/apiClipboard'
import { Link } from 'react-router'
import '../styles/pages/pages.css'

export default function ApiClipboard() {
  return (
    <>
            <Link
                 to="/"
                 className="back-link"
            >
                 Retour
            </Link>
            <div className='cours-container'>
                 <h2 className='cours-title'>Clipboard API (copier-coller en React)</h2>
                 <h4 className='cours-section'>Qu’est-ce que l’API Clipboard ?</h4>
                 <p>L’API Clipboard te permet d’interagir avec le presse-papiers du système (copier, coller, couper du texte, etc.).</p>
                 <p>Tu peux l’utiliser pour :</p>
                 <ul>
                      <li>Copier du texte (ou autre contenu) depuis ton site vers le presse-papiers.</li>
                      <li>Lire le contenu actuellement copié.</li>
                 </ul>
                 <p>C’est une API native du navigateur (pas besoin de librairie externe).</p>
                 <h4 className='cours-section'>Copier du texte en React JS</h4>
                 <p>Exemple simple :</p>
                 <JsxCode content={api_clipBoard[0]} />
                 <p>Quand tu cliques sur le bouton, "Hello React !" est copié.</p>
                 <h4 className='cours-section'>Utilisation en ReactJS</h4>
                 <JsxCode content={api_clipBoard[1]} />
                 <ul>
                      <li>navigator.clipboard.writeText(text) → copie le texte.</li>
                      <li>useState → pour gérer du message “copié”.</li>
                      <li>setTimeout → cache le message après 2 s.</li>
                      <li>L’action doit venir d’un clic utilisateur.</li>
                 </ul>
                 <h4 className='cours-section'>Exemple avec un {'<input>'} dynamique</h4>
                 <JsxCode content={api_clipBoard[2]} />
                 </div>
    </>
  )
}
