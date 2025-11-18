import React from 'react'
import JsxCode from '../../components/JsxCode'
import { codes_projects } from '../../data/projects'

export default function ToDo1() {
  return (
    <>
            <div className='cours-container'>
        <h4 className='cours-section'>Todo (Très Simple)</h4>
        <p>🟣 Fonctionnalités</p>
        <ul>
          <li>Ajouter tâche</li>
          <li>Afficher tâches</li>
          <li>Marquer tâche comme terminée (done true/false)</li>
          <li>Supprimer tâche</li>
        </ul>
<JsxCode content={codes_projects[0]}/>
            </div>
    </>
  )
}
