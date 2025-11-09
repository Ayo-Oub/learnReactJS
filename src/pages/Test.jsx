import { useState } from "react";
import "../styles/pages/test.css";

export default function Test() {
     const [visible, setVisible] = useState(true);
     function showHide() {
          setVisible(!visible);
     }
     return (
          <div className="test-container">
               <h2
                    style={{
                         backgroundColor: "yellow",
                         fontWeight: "300"
                    }}>Le secret texte</h2>
               <button
               onClick={showHide}>
                    {visible ? "Afficher le texte" : "Cacher le texte"}
               </button>
               
                    {visible && <p
                    style={{
                         color: "var(--color-primary)",
                         fontSize: "var(--fontSize-base)"
                    }}
               >LE TEXTE SECRET</p>}
               
          </div>
     );
}
