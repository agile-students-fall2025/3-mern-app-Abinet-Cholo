import './Header.css'
import logo from './logo.svg'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <header className="Header-header">
      <nav className="Header-navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Our fabulous logo" />
        </Link>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/messages">Messages</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Me</Link>   {/* ✅ added */}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
