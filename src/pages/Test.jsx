
import { useState } from "react";
import "../styles/pages/test.css";
export default function Test() {
     const [articles, setArticles] = useState([
          { id: 1, nom: "Chaussures", prix: 50 },
          { id: 2, nom: "T-shirt", prix: 20 },
     ]);

     const ajouterArticle = () => {
          const nouvelArticle = { id: 3, nom: "Casquette", prix: 15 };
          setArticles([...articles, nouvelArticle]);
     };

     const supprimerArticle = (id) => {
          setArticles(articles.filter(article => article.id !== id));
     };
     return (
          <div
               className="test-container"
               style={{ textAlign: "center" }}
          >
               <h3>Panier</h3>
               <ul>
                    {articles.map(article => (
                         <li key={article.id}>
                              {article.nom} - {article.prix}€
                              <button onClick={() => supprimerArticle(article.id)}>❌</button>
                         </li>
                    ))}
               </ul>
               <button onClick={ajouterArticle}>Ajouter un article</button>
          </div>
     );
}
