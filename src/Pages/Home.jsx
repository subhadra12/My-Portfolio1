import React from 'react'
import Layout from '../Comp/Layout'
import '../scss/style.scss'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import MyWork from './MyWork'
import Contact from './Contact'

function Home() {
  return (
    <>
    
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
    
    </>
  )
}

export default Home