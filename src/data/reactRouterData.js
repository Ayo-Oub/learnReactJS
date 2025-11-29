const jsxCodes = [
  "npm install react-router-dom",
  `import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
`,
  `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);

`,
  `import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Accueil</h1>

      <nav>
        <Link to="/page1">Vers Page 1</Link><br />
        <Link to="/page2">Vers Page 2</Link>
      </nav>
    </div>
  );
}

`,
  `import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink 
        to="/"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Accueil
      </NavLink>

      <NavLink 
        to="/page1"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Page 1
      </NavLink>

      <NavLink 
        to="/page2"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Page 2
      </NavLink>
    </nav>
  );
}

`,
  `.active {
  font-weight: bold;
  color: blue;
}
`,
];
export default jsxCodes;