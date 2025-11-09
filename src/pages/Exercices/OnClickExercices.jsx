import JsxCodeExercice from '../../components/JsxCodeExercice.jsx'
import on_clickData_exercices from '../../data/Exercices/ex1OnClickData.jsx'
import '../../styles/pages/pages.css'
import React from 'react'
export default function OnClickExercices() {
  return (
    <>
            <h4 className='cours-section'>Exercice 1</h4>
            <ol>
            <li>Créer l'interface de base</li>
                 <ul>
                      <li>Crée un div qui contiendra tout le compteur. </li>
                      <li>Ajoute un paragraphe {'<p>'} pour afficher la valeur actuelle du compteur. </li>
                      <JsxCodeExercice content={on_clickData_exercices[0].map((element, index) => (
                           <React.Fragment key={index}>{element}</React.Fragment>
                      ))}/>
                 </ul>
            </ol>
            
    </>
  )
}
