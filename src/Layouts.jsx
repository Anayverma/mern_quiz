import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'
function Layouts() {
  return (
    <div>

        <Header/>
        Layouutss
        <Outlet/>
        <Footer/>
        
    </div>
  )
}

export default Layouts