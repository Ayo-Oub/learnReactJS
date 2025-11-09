import { Link } from "react-router";
import JsxCode from "../components/JsxCode";
import '../styles/pages/pages.css'
import jsxCodes from "../data/reactRouterData";

export default function ReactRouter() {
     return (
          <>
               <Link
                    to="/"
                    className="back-link"
               >
                    Retour
               </Link>
               <div className='cours-container'>
                    <h2 className="cours-title">
                         React Router (Navigation entre pages dans ReactJS)
                    </h2>
                    <h4 className="cours-section">Objectif</h4>
                    <p>React Router est une bibliothèque qui permet de :
                         <br />
                         Gérer la navigation entre plusieurs pages ou composants dans une application React — sans recharger la page.
                         <br />
                         C’est ce qui transforme ton application SPA (Single Page Application) en un vrai site multi-pages avec des URL différentes (/, /page1, /page2, etc.).</p>
                    <h4 className="cours-section">Installation</h4>
                    <p>Dans le terminal de ton projet React :</p>
                    <JsxCode language='bash' content={jsxCodes[0]} />
                    <ul>
                         <li>react-router → le cœur de la bibliothèque (la logique principale du routage).</li>
                         <li>react-router-dom → les outils spécifiques au navigateur (comme <code>&lt;BrowserRouter&gt;</code>, <code>&lt;Link&gt;</code>, etc.).</li>

                    </ul>
                    <h4 className="cours-section">Configuration du routeur (dans main.jsx)</h4>
                    <p>Fichier : main.jsx</p>
                    <JsxCode content={jsxCodes[1]} />
                    <p><code>&lt;BrowserRouter&gt;</code> : c'est le contexte de navigation.
                         Il enveloppe toute ton application pour permettre à React Router de gérer les chemins (/, /page1, etc.) sans recharger la page.</p>
                    <h4 className="cours-section">Déclaration des routes (dans App.jsx)</h4>
                    <p>Fichier : App.jsx</p>
                    <JsxCode content={jsxCodes[2]} />
                    <ul>
                         <li>&lt;Routes&gt; : contient toutes les routes de ton application.</li>
                         <li>&lt;Route path="..." element={"{...}"} /&gt; : définit quelle page doit s'afficher pour chaque URL.</li>
                         <li>path="/" est la page principale (souvent appelée index).</li>
                    </ul>
                    <h4 className="cours-section">Création des pages</h4>
                    <ul>
                         <li>src/pages/HomePage.jsx</li>
                         <li>src/pages/Page1.jsx</li>
                         <li>src/pages/Page2.jsx</li>
                    </ul>
                    <p>Exemple : HomePage.jsx</p>
                    <JsxCode content={jsxCodes[3]} />
                    <ul>
                         <li>&lt;Link&gt; remplace les balises &lt;a&gt; traditionnelles du HTML.</li>
                         <li>Il permet de naviguer entre les pages sans rechargement (grâce à React Router).</li>
                    </ul>
                    <h4 className="cours-section">Styliser les liens de navigation</h4>
                    <p>Tu peux créer une classe CSS pour tes liens {'<Link>'}.</p>
                    <JsxCode content={jsxCodes[4]} language="css" />
                    <p>Ainsi, tous les liens {'<Link className="nav-link">'} auront le même style.</p>
               </div>

          </>
     )
}
