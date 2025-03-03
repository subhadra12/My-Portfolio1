import React from 'react'
import mywork_data from '../assets/mywork_data'
import { motion } from 'framer-motion'

function MyWork() {
  return (
    <motion.div 
      className="container mywork-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mywork" id="mywork">
        <div className="title text-center">
          <h1>My Work</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {mywork_data.map((work, index) => (
            <motion.div 
              key={index} 
              className="col"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="work">
                <img src={work.w_img} alt={`Work ${index + 1}`} className='w-100' />
                <div className="work-details">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default MyWork
