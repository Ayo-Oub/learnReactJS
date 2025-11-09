import { Link } from 'react-router'
import JsxCode from '../components/JsxCode'
import on_clickData from '../data/onClickData'
import '../styles/pages/pages.css'
import OnClickExercices from './Exercices/OnClickExercices'
export default function OnClickPage() {
  return (
    <>
      <Link
        to="/"
        className="back-link"
      >
        Retour
      </Link>
      <div className='cours-container'>
        <h2 className='cours-title'>l’événement onClick en ReactJS</h2>
        <h4 className='cours-section'>Objectif</h4>
        <p>L’événement onClick en React permet d’exécuter une fonction lorsqu’un utilisateur clique sur un élément (souvent un bouton, une image ou un lien).
          C’est l’un des événements les plus utilisés pour rendre une interface interactive.</p>
        <h4 className='cours-section'>Syntaxe</h4>
        <JsxCode content={on_clickData[0]} />
        <p>En React :</p>
        <ul>
          <li>On écrit onClick (avec un C majuscule).</li>
          <li>On lui passe une fonction JavaScript, pas une chaîne de texte.</li>
          <li>On n’ajoute pas de parenthèses (()), sinon la fonction s’exécute immédiatement.</li>
        </ul>
        <h4 className='cours-section'>Exemple simple</h4>
        <JsxCode content={on_clickData[1]} />
        <p>Quand l’utilisateur clique sur le bouton, React exécute la fonction direBonjour.</p>
        <h4 className='cours-section'>Exemple avec fonction fléchée</h4>
        <p>Tu peux écrire la fonction directement dans le JSX :</p>
        <JsxCode content={on_clickData[2]} />
        <p>Utile pour les petites actions simples.</p>
        <h4 className='cours-section'>Exemple avec useState</h4>
        <JsxCode content={on_clickData[3]} />
        <ul>
          <li>Chaque clic appelle incrementer().</li>
          <li>La fonction met à jour le state count avec setCount().</li>
        </ul>
        <h4 className='cours-section'>Exemple avec arguments</h4>
        <JsxCode content={on_clickData[4]} />
        <p>On utilise une fonction fléchée pour éviter que la fonction ne soit exécutée directement.</p>
        <h4 className='cours-section'>Bonnes pratiques</h4>
        <ol>
          <li>Utilise toujours onClick={'{maFonction}'} (pas de guillemets).</li>
          <li>Utilise des noms clairs : handleClick, handleDelete, handleSubmit...</li>
          <li>Place ta fonction à l’intérieur du composant si elle ne sert qu’à ce composant.</li>
          <li>N’écris pas onClick={'{maFonction()}'} sauf si tu veux qu’elle s’exécute dès le rendu (rarement voulu).</li>
        </ol>
        <OnClickExercices />
      </div>
    </>
  )
}
