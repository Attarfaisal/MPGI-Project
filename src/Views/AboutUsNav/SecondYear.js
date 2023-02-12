import React from 'react';
import '../../Assets/CSS/NavBar.css'
import { NavLink } from 'react-router-dom'

const SecondYear = () => {
  return (
    <div>
      <div className='Subjects-div'>
         <div>
        <h1>Third semester</h1>
        <ol>
        <NavLink className='navlink-class'><li>Engineering Mathematics 3</li></NavLink>
        <NavLink className='navlink-class'><li>Material Science and Metallurgy</li></NavLink>
        <NavLink className='navlink-class'><li>Fluid Mechanics</li></NavLink>
        <NavLink className='navlink-class'><li>Machine Design and CAD</li></NavLink>
        <NavLink className='navlink-class'><li>Thermodynamics</li></NavLink>
        </ol>
      </div>
      <div>
        <h1>Fourth semester</h1>
        <ol>
          <NavLink className='navlink-class'><li>Manufacturing Process 1</li></NavLink>
          <NavLink className='navlink-class'><li>Theory of Machine 1</li></NavLink>
          <NavLink className='navlink-class'><li>Strength of Material</li></NavLink>
          <NavLink className='navlink-class'><li>Numerical Method in Mechanical Engineering</li></NavLink>
          <li><ul>
          <NavLink className='navlink-class'><li>Physics of Engineering Material</li></NavLink>
          <NavLink className='navlink-class'><li>Advance Engineering Chemistry</li></NavLink>
          <NavLink className='navlink-class'><li>Interpersonal Communication Skill & Self Development</li></NavLink></ul></li>
        </ol>
      </div>
      </div>
    </div>
  )
}

export default SecondYear
