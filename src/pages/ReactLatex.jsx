import { BlockMath, InlineMath } from 'react-katex';
import { Link } from "react-router";
import JsxCode from "../components/JsxCode";
import jsxCodes from '../data/reactLatexData';
import '../styles/pages/react.css';
import 'katex/dist/katex.min.css';
export default function ReactLatex() {
     return (
          <>
               <Link
                    to="/"
                    className="back-link"
               >
                    Back to Home
               </Link>
               <div className="cours-container">
                    <h2 className="cours-title">
                         L'intégration de Latex dans un projet ReactJs à l'aide de la
                         bibliothèque react-katex.
                    </h2>
                    <h4 className="cours-section">Objectif</h4>
                    <p>
                         Quand tu veux afficher des formules mathématiques (comme en LaTeX)
                         dans une application React, tu peux utiliser la bibliothèque
                         react-katex.
                    </p>
                    <h4 className="cours-section">Installation</h4>
                    <p>Dans le terminal: </p>
                    <JsxCode language='bash' content={jsxCodes[0]} />
                    <ul>
                         <li><p>react-katex : composant React qui permet d’utiliser KaTeX facilement dans JSX.</p></li>
                         <li><p>katex : la librairie principale qui gère le rendu des formules mathématiques.</p></li>
                    </ul>
                    <h4 className="cours-section">Importation dans le code React</h4>
                    <ol>
                         <li><p>Les composants de rendu (BlockMath, InlineMath)</p></li>
                         <li><p>La feuille de style CSS de KaTeX pour que les formules s'affichent correctement.</p></li>
                    </ol>

                    <JsxCode content={jsxCodes[1]} />
                    <h4 className="cours-section">Utilisation des composants</h4>
                    <p className="word-spe">InlineMath</p>
                    <p>Sert à affiche une formule dans une ligne de texte (comme $x+y=z$ dans une phrase).</p>
                    <JsxCode content={jsxCodes[2]} />
                    <div className="result-codes">
                         <p>Résultat: </p>
                         <p> Voici une fonction <InlineMath math='f(x)=x^2-3x+4' /></p>
                    </div>

                    <p className="word-spe">BlockMath</p>
                    <p>Sert à afficher une formule centrée sur une nouvelle ligne, comme les équations importantes.</p>
                    <JsxCode content={jsxCodes[3]} />
                    <div className="result-codes">
                         <p>Résultat: </p>
                         <><BlockMath math='\int_0 ^ 1 x ^ 2 \, dx = \dfrac{ 1}{3}' /></>
                    </div>

               </div>
          </>
     );
}
