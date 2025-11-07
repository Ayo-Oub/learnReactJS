const jsxCodes = [
  "npm install react-katex katex",
  "import { BlockMath, InlineMath } from 'react-katex'\nimport 'katex/dist/katex.min.css'",
  "<p>Voici une fonction <InlineMath math='f(x)=x^2-3x+4'/></p>",
  "<BlockMath math='\\int_0 ^ 1 x ^ 2 \\, dx = \\dfrac{ 1}{3}' />",
];
export default jsxCodes;
