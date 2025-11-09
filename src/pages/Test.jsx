import { useState } from "react";

export default function Test() {
     const [text, setText] = useState('');
     function handleCopy() {
          navigator.clipboard.writeText(text);
   }
     return (
          <div className="test-container" style={{ textAlign: "center" }}>
               <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{
                         margin: "30px",
                         padding: "10px",
                         width: "80px"
                    }}
               />
               <button
                    onClick={handleCopy}
                    style={{
                         margin: "30px",
                         padding: "10px",
                         color: "#217263",
                         backgroundColor: "#2982",
                         fontSize: "20px", 
                         border: "none",
                         outline: "none",
                         cursor: "pointer"
                    }}
               >Copy text</button>
          </div>
     );
}
