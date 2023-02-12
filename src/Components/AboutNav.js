import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../Assets/CSS/AboutUs.css'

const AboutNav = () => {
  return (
    <div>
     <nav className='about-nav'>
      <NavLink to='first'><p>First Year</p></NavLink>
      <NavLink to='second'><p>Second Year</p></NavLink>
      <NavLink to='third'><p>Third Year</p></NavLink>
      <NavLink to='final'><p>Final Year</p></NavLink>
     </nav>
     <Outlet />
    </div>
  )
}

export default AboutNav
