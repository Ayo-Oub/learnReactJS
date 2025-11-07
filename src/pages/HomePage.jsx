import '../styles/pages/home-page.css'
import { Link } from 'react-router'

export default function HomePage() {
  return (
    <div className='home-container'>
            <Link to='/react-latex' className='home-link'>React & Latex</Link>
            <Link to='/react_router' className='home-link'>React & Router</Link>
    </div>
  )
}
