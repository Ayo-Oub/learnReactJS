import { useState } from "react";

export default function Test() {
     const message ="I'm from morocco";
     const [copied, setCopied] = useState(false);
     function handleCopy() {
          navigator.clipboard.writeText(message).then(() => {
               setCopied(true);
               setTimeout(() => setCopied(false), 2000);
          });
     }
   
     return (
          <div className="test-container" style={{ textAlign: "center" }}>
               <p>{message}</p>
               <button onClick={handleCopy}>Copier</button>
               {copied && <span style={{color: "#03bdae"}}>Copié</span>}
          </div>
     );
}
