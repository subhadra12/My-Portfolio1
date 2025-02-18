import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="row ">
            <div className="col-lg-6 col-md-1">
              <div className="logo">
                <Link to="/" className='text-decoration-none'>
                  <h1>Subhadra</h1>
                </Link>
              </div>
              <p>I am a frontend developer with a passion for building responsive, user-friendly websites.</p>
            </div>
            <div className="col-lg-6 col-md-1 ">
              <div className=" icons ">
                <Link to=""> <i className="bi bi-facebook text-light fs-1 me-4" /></Link>
                <Link to="https://github.com/subhadra12"><i className="bi bi-github text-light fs-1 me-4" /></Link>
                <Link to="www.linkedin.com/in/subhadra-dahal-83671a333"><i className="bi bi-linkedin text-light fs-1 me-4" /></Link>
              </div>
            </div>
            <hr />
            <div className="footer-bottom text-center">
              <p>© 2025 Subhadra Dahal. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
 {/*scroll top*/}
 {isVisible && (
        <div className="scroll-top" onClick={scrollTop}>
          <i className='bi bi-arrow-up'></i>
        </div>
      )}
    </>
  )
}

export default Footer