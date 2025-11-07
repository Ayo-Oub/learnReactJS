const jsxCodes = [
     "npm install react-router@latest \nnpm install react-router-dom",
     `import React from 'react''
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
     `,
     `import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />    {/* Page d'accueil */}
      <Route path="page1" element={<Page1 />} />    {/* Première page */}
      <Route path="page2" element={<Page2 />} />    {/* Deuxième page */}
    </Routes>
  )
}
`,
     `import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Bienvenue sur la page d'accueil.</p>

      <nav>
        <Link to="/page1" className="nav-link">Page 1</Link>
        <Link to="/page2" className="nav-link">Page 2</Link>
      </nav>
    </div>
  )
}
`,
     `.nav-link {
  color: #007acc;
  text-decoration: none;
  margin-right: 10px;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}
`,

];
export default jsxCodes;