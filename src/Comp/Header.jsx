import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'


function Header() {
  const [menu, setMenu] = useState('home');
  const [nav, setNav]= useState(false);

  //scroll navbar
  const changeValueOnScroll=() =>{
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue> 50 ? setNav(true):setNav(false);
  };
  window.addEventListener("scroll", changeValueOnScroll);
  return (
    <>
      <nav  className={`navbar navbar-expand-lg ${nav === true ? "sticky" : ""}`} >
        <div className="container ">
          <Link className="navbar-brand" to="/" ><h1>Subhadra</h1></Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li onClick={() => setMenu('about')} className={menu === 'about' ? 'active' : ''}>
                <Link className="nav-link" to="/about">About Me</Link>
              </li>
              {/*<li onClick={() => setMenu('services')} className={menu === 'services' ? 'active' : ''}>
                <Link className="nav-link" to="/services">Services</Link>
              </li>*/}
              <li onClick={() => setMenu('portfolio')} className={menu === 'portfolio' ? 'active' : ''}>
                <Link className="nav-link" to="/mywork">Portfolio</Link>
              </li>
              <li onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            
          </div>


        </div>
      </nav>
     
    </>
  )
}

export default Header