import React from "react";
import bg from "../assets/bg.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <>
     <div className="container">
        <div className="about" id="about">
          <div className="title text-center">
            <h1>About Me</h1>
          </div>
          <div className="row align-items-center">
            {/* Image with animation */}
            <div className="col-lg-6">
              <motion.img
                src={bg}
                alt="Background"
                className="img-fluid w-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Text with animation */}
            <div className="col-lg-6">
              <motion.p
                className="para"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                Hi! I'm <strong>Subhadra Dahal</strong>, a passionate Frontend
                Developer who loves crafting seamless and interactive web
                experiences. Skilled in{" "}
                <strong>HTML, CSS, JavaScript, and React</strong>, I focus on
                building responsive, user-friendly websites with clean,
                maintainable code. I thrive in fast-paced environments, enjoy
                teamwork, and embrace challenges that push my creativity. Always
                eager to learn, I stay updated with the latest frontend trends,
                frameworks, and design patterns to enhance user experience and
                performance.
              </motion.p>
            </div>
          </div>

          <div className="skills">
            <h2>Skills</h2>
            {renderSkill("HTML", 75)}
            {renderSkill("CSS", 75)}
            {renderSkill("JavaScript", 50)}
            {renderSkill("Bootstrap", 75)}
            {renderSkill("React JS", 70)}
            {renderSkill("Tailwind CSS", 70)}
            {renderSkill("Responsive Design", 65)}
          </div>
        </div>
      </div>
    </>
  );
}

// Reusable Skill Row Component
const renderSkill = (name, value) => (
  <div className="row skill">
    <div className="col-lg-2 col-md-3 col-sm-12">
      <p>{name}</p>
    </div>
    <div className="col-lg-10 col-md-9 col-sm-12">
      <div
        className="progress"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar"
          style={{ width: `${value}%`, background: "#1197b9" }}
        />
      </div>
    </div>
  </div>
);

export default About;
