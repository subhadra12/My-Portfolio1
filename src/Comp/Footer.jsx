import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'

function ScrollToTopButton() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-top" onClick={scrollTop} role="button" aria-label="Scroll to top">
      <i className="bi bi-arrow-up fs-4"></i>
    </div>
  );
}

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    const heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="row">
          <hr />
            <div className="col-lg-6 col-md-12">
              <div className="logo">
                <Link to="/" className="text-decoration-none">
                  <h1>Subhadra</h1>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="icons">
                <Link to="#" aria-label="Facebook">
                  <i className="bi bi-facebook text-light fs-2 me-4" />
                </Link>
                <Link to="https://github.com/subhadra12" aria-label="GitHub">
                  <i className="bi bi-github text-light fs-2 me-4" />
                </Link>
                <Link to="https://www.linkedin.com/in/subhadra-dahal-83671a333" aria-label="LinkedIn">
                  <i className="bi bi-linkedin text-light fs-2 me-4" />
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {isVisible && <ScrollToTopButton />}
    </>
  );
}

export default Footer;
