
import './App.css'
import ReactLatex from './pages/ReactLatex'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import ReactRouter from './pages/ReactRouter'
import MapPage from './pages/MapPage'
import OnClickPage from './pages/onClickPage'
import Test from './pages/Test'
import ApiClipboard from './pages/ApiClipboard'
import PropsPage from './pages/PropsPage'
import OnchangePage from './pages/OnchangePAge'
import UseStatePage from './pages/UseStatePage'
import FilterPage from './pages/FilterPage'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/test' element={<Test />} />
        <Route path='/react-latex' element={<ReactLatex />} />
        <Route path='/react_router' element={<ReactRouter />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/on_click' element={<OnClickPage />} />
        <Route path='/api_clipboard' element={<ApiClipboard />} />
        <Route path='/props' element={<PropsPage />} />
        <Route path='/on_change' element={<OnchangePage />} />
        <Route path='/use_state' element={<UseStatePage />} />
        <Route path='/filter' element={<FilterPage/>}/>
      </Routes>
      
    </>
  );
}

export default App
