import '../styles/pages/home-page.css'
import { Link } from 'react-router'

export default function HomePage() {
  return (
    <div className='home-container'>
      <Link to='/test' className='home-link test'>Test</Link>
      <div className='links-container'>
        <h2>React</h2>
        <div className='links'>
          <Link to='/props' className='home-link'>Props 

          </Link>
          <Link to='/react-latex' className='home-link'>React & Latex</Link>
          <Link to='/react_router' className='home-link'>React & Router</Link>
        </div>

      </div>
      <div className='links-container'>
        <h2>Méthodes</h2>
        <div className='links'>
          <Link to='/map' className='home-link'>La méthode map</Link>
        </div>

      </div>
      <div className='links-container'>
        <h2>Les événements</h2>
        <div className='links'>
          <Link to='/on_click' className='home-link'>L'événement onClick</Link>
          <Link to='/on_change' className='home-link'>L'événement onChange</Link>
        </div>

      </div>
      <div className='links-container'>
        <h2>Interactions avec le navigator</h2>
        <div className='links'>
          <Link to='/api_clipboard' className='home-link'>API Clipboard (copier-coller)</Link>
        </div>

      </div>

    </div>
  )
}
