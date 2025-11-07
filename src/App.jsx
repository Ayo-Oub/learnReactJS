
import './App.css'
import ReactLatex from './pages/ReactLatex'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import ReactRouter from './pages/ReactRouter'
function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/react-latex' element={<ReactLatex />} />
        <Route path='/react_router' element={<ReactRouter />} />
      </Routes>
      
      
    </>
  )
}

export default App
