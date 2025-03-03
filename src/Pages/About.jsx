import React from 'react'
import bg from '../assets/bg.jpg'

function About() {
  return (
    <>
      <div className="container">
        <div className="about" id="about">
          <div className="title text-center">
            <h1>About Me</h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src={bg} alt="" className='w-100' />
            </div>
            <div className="col-lg-6">
              <div className="para">
                <p>Hi! I'm Subhadra Dahal, a passionate Frontend Developer who loves crafting seamless and interactive web experiences. Skilled in HTML, CSS, JavaScript, and React, I focus on building responsive, user-friendly websites with clean, maintainable code. I thrive in fast-paced environments, enjoy teamwork, and embrace challenges that push my creativity. Always eager to learn, I stay updated with the latest frontend trends, frameworks, and design patterns to enhance user experience and performance.</p>
              </div>
            </div>
          </div>
          <div className="skills">
          <h2>Skills</h2>
          {renderSkill('HTML', 75)}
          {renderSkill('CSS', 75)}
          {renderSkill('JavaScript', 50)}
          {renderSkill('Bootstrap', 75)}
          {renderSkill('React JS', 70)}
          {renderSkill('Responsive Design', 65)}
        </div>
        </div>
      </div>
    </>
  )
}

// Reusable Skill Row Component
const renderSkill = (name, value) => (
  <div className="row skill">
    <div className="col-lg-2 col-md-3 col-sm-12">
      <p>{name}</p>
    </div>
    <div className="col-lg-10 col-md-9 col-sm-12">
      <div className="progress" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar" style={{ width: `${value}%`, background: "#1197b9" }} />
      </div>
    </div>
  </div>
)

export default About