import React from 'react'
import profile from '../assets/profile.jpg'
import { Link } from 'react-router'

function Hero() {
    return (
        <>
            <div className="container" >
                <div className="hero " id="home">
                    <div className="row">
                        <div className="col-lg-6 row justify-content-center">
                            <img src={profile} alt="" />
                        </div>
                        <div className="col-lg-6 py-5 text-center">
                            <h1 data-aos="zoom-in">Hi, I'm <span>Subhadra Dahal.</span></h1>
                            <p>Frontend Developer | Passionate about creating beautiful Websites</p>
                            <div className="hero-action justify-content-center">
                                <button type="button" className='button' ><Link to="/contact" className='text-decoration-none text-light'>Connect with me</Link></button>
                                <div className="hero-resume">My resume</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero