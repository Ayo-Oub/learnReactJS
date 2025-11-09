import "../styles/components/jsx-code.css";
import copyImg from "../../public/images/copy.svg";
import { useState } from "react";
export default function JsxCode({ content, language = "jsx" }) {
  const [textCopied, setTextCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(content).then(() => {
      
      setTextCopied(true);
      setTimeout(() => setTextCopied(false), 1500);
    })
      .catch(err => {
        console.error("Erreur lors de la copie", err);
      })
  };

 
  return (
    <div className="code-container">
      <div className="code-header">
        <p className="code-language">{language}</p>
        <div className="code-copied">
          {textCopied === true && <p className="text-copied">Copié</p>}
          <img
          className="code-copy-img"
          src={copyImg}
          alt="copier le code"
          onClick={handleCopy}
        />
        </div>
          

      </div>
      <pre className="code-content">
        <code>{content}</code>
      </pre>
    </div>
  );
}
