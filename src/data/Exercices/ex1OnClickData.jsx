import React from "react";
const on_clickData_exercices = [
     // index 0
     [`<div>
     <p>Valeur : 0</`, <input placeholder = "..." maxLength = { 1 }/>,
          `>
</`, <input placeholder="..." maxLength={3} />, `>`],
     // index 1
     [`<button>`, <input placeholder="..." maxLength={2} />, `<button/>
`,
          `<button>`, <input placeholder="..." maxLength={2} />, `<button/>
`,
          `<button>`, <input style={{width: "7ch"}} placeholder="..." maxLength={5}/>, `<button/>`,
     ], 
     // index 2
     [`const[`, <input style={{ width: "7ch" }} placeholder="..." maxLength={5} />, `,`, <input style={{ width: "10ch" }} placeholder="..." maxLength={8} />, `] = useState(0);`],
     // index 3
     [`<button `, <input style={{ width: "10ch" }} placeholder="..." maxLength={8} />, `{() => setCount(count+1)}>+1</button>`],
     // index 4
     [`<button onClick={() => {`, <input style={{ width: "15ch" }} placeholder="..." maxLength={13} />, `setCount(count-1)}>-1</button>`],
     // index 5
     [`<button `, <input style={{ width: "29ch" }} placeholder="..." maxLength={27} />, `>Reset</button>`],
     // index 6
     [`<p> valeur: `, <input style={{ width: "9ch" }} placeholder="..." maxLength={7} />,  `</p>`],
]
export default on_clickData_exercices;