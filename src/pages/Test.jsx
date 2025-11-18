
import { useEffect, useState } from "react";
import "../styles/pages/test.css";
export default function Test() {
     const [count, setCount] = useState(10);
     useEffect(() => {
          if (count === 20) return;
          const id = setInterval(() => {
               setCount(prev => prev + 1)
          }, 500);
          return () => clearInterval(id);
         
    
     })
     return (
          <div
               className="test-container"
               style={{ textAlign: "center" }}
          >
               <h2>{count}</h2>
          </div>
     );
}
