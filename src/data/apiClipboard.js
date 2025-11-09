const api_clipBoard = [
     `export default function CopierTexte() {
  function copyText() {
    navigator.clipboard.writeText("Hello React !");
  }

  return <button onClick={copyText}>Copier le texte</button>;
}

`,`import { useState } from "react";

export default function CopierTexte() {
  const message = "Copier le code React est simple !";
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(message).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // message temporaire
    });
  }

  return (
    <div className="clipboard-container">
      <p>{message}</p>
      <button onClick={copyToClipboard}>Copier</button>
      {copied && <span style={{ color: "green" }}>✅ Copié !</span>}
    </div>
  );
}
`,
]
export default api_clipBoard;