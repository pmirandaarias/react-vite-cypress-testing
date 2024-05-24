import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="root">
      <header className="header">
        <div className="logo">MyLogo</div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>
          </ul>
        </nav>
        <button className="burger" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </header>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
