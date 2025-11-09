import "../styles/components/jsx-code.css";
export default function JsxCodeExercice({ language = "jsx", content }) {
     return (
          <div className="code-container">
               <div className="code-header">
                    <p className="code-language">{language}</p>
               </div>
               <pre className="code-content">
                    <code>
                         {content}
                    </code>
               </pre>
          </div>
     );
}
