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
         <div className="cours-container">
           <h2 className="cours-title">
             React Router (Navigation entre pages dans ReactJS)
           </h2>
           <h4 className="cours-section">Objectif</h4>
           <p>
             React Router a introduit une nouvelle manière de définir les routes
             :
             <br />
             👉 les Data APIs
           </p>
           <ul>
             <li>createBrowserRouter()</li>
             <li>RouterProvider</li>
             <li>organisation plus propre des routes</li>
           </ul>
           <p>Cette méthode remplace la vieille combinaison :</p>
           <ul>
             <li>&lt;BrowserRouter&gt;</li>
             <li>&lt;Routes&gt;</li>
             <li>&lt;Route&gt;</li>
           </ul>
           <p>
             La méthode est plus moderne, plus propre, et plus facile à
             organiser.
           </p>
           <h4 className="cours-section">Installation</h4>
           <p>Dans le terminal de ton projet React :</p>
           <JsxCode
             language="bash"
             content={jsxCodes[0]}
           />
           <h4 className="cours-section">
             Créer les routes directement dans App.jsx
           </h4>
           <p>C'est la méthode la plus simple.</p>
           <JsxCode content={jsxCodes[1]} />
           <ul>
             <li>
               createBrowserRouter() : crée un routeur avec les routes définies
               dans un tableau.
             </li>
             <li>
               Chaque objet dans le tableau représente une route avec : path
               (l'URL) et element (le composant à afficher).
             </li>
             <li>
               RouterProvider : rend le routeur disponible dans l'application.
             </li>
           </ul>
           <h4 className="cours-section">main.jsx</h4>
           <JsxCode content={jsxCodes[2]} />

           <h4 className="cours-section">Naviguer entre les pages : Link</h4>

           <p>Permet de changer de page sans recharger.(HomePage.jsx)</p>
           <JsxCode content={jsxCodes[3]} />
           <ul>
             <li>
               &lt;Link&gt; remplace les balises &lt;a&gt; traditionnelles du
               HTML.
             </li>
             <li>
               Il permet de naviguer entre les pages sans rechargement (grâce à
               React Router).
             </li>
           </ul>
           <h4 className="cours-section">Avoir des liens actifs : NavLink</h4>
           <p>
             NavLink ajoute automatiquement une classe quand le lien est actif
             (Navbar.jsx)
           </p>
           <JsxCode
             content={jsxCodes[4]}
           />
           <p>CSS simple :</p>
           <JsxCode
             content={jsxCodes[5]}
             language="css"
           />
         </div>
       </>
     );
}
