import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import MyWork from './Pages/MyWork'
import Contact from './Pages/Contact'
import Header from './Comp/Header'
import Footer from './Comp/Footer'


function App() {
  return (
   <>
   <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='services' element={<Services/>}/>
  <Route path='mywork' element={<MyWork/>}/>
  <Route path='contact' element={<Contact/>}/>
</Routes>
  <Footer/>
   </>
  )
}

export default App