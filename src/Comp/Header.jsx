import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'

function Header() {
  const [menu, setMenu] = useState('home');
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNav(true);
      } else {
        setNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (menuItem) => {
    setMenu(menuItem);
    // Close mobile menu after click
    const navbar = document.getElementById('navbarSupportedContent');
    if (navbar) navbar.classList.remove('show');
  };

  return (
    <nav className={`navbar navbar-expand-lg ${nav ? 'sticky' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/" ><h1>Subhadra</h1></Link>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <i class="bi bi-list fs-2"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className={menu === 'home' ? 'active' : ''} onClick={() => handleNavLinkClick('home')}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={menu === 'about' ? 'active' : ''} onClick={() => handleNavLinkClick('about')}>
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
            <li className={menu === 'portfolio' ? 'active' : ''} onClick={() => handleNavLinkClick('portfolio')}>
              <Link className="nav-link" to="/mywork">Portfolio</Link>
            </li>
            <li className={menu === 'contact' ? 'active' : ''} onClick={() => handleNavLinkClick('contact')}>
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
