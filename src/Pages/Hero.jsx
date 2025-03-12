import React from 'react'
import profile from '../assets/profile.jpg'
import { Link } from 'react-router'


function Hero() {
    return (
        <>
            <div className="container" >
                <div className="hero " id="home">
                    <div className="row">
                        <div className="col-12 col-md-6 row justify-content-center">
                            <img src={profile} alt="Profile picture of Subhadra Dahal" />
                        </div>
                        <div className="col-12 col-md-6 py-5 text-center">
                            <h1 data-aos="zoom-in">Hi, I'm <span>Subhadra Dahal.</span></h1>
                            <p>Frontend Developer | Passionate about creating beautiful Websites</p>
                            <div className="hero-action justify-content-center">
                            <Link to="/contact" className="button">Connect with me</Link>
                            <Link to="/my-cv.pdf" target="_blank" rel="noopener noreferrer" className="hero-resume text-light">View my resume</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero