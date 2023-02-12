import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../../Assets/CSS/NavBar.css';

const ThirdYear = () => {
  return (
    <div>
      <div className='Subjects-div'>
         <div>
        <h1>Fifth semester</h1>
        <ol>
        <NavLink className='navlink-class' to='heatTransfer'><li>Heat Transfer</li></NavLink>
        <NavLink className='navlink-class' to='atd1'><li>Applied Thermodynamics 1</li></NavLink>
        <NavLink className='navlink-class' to=''><li>Machine Design 1</li></NavLink>
        <NavLink className='navlink-class' to=''><li>Theory of Machine 2</li></NavLink>
        <NavLink className='navlink-class' to=''><li>Metrology and Quality Control</li></NavLink>
        </ol>
      </div>
      <div>
        <h1>Sixth semester</h1>
        <ol>
         <NavLink className='navlink-class'> <li>Manufacturing Process 2</li></NavLink>
         <NavLink className='navlink-class'> <li>Machine Design 2</li></NavLink>
         <NavLink className='navlink-class'> <li>Applied Thermodynamics 2</li></NavLink>
          <li><ul>
          <NavLink className='navlink-class'><li>Engineering Tribology</li></NavLink>
          <NavLink className='navlink-class'><li>IC Engines</li></NavLink>
          <NavLink className='navlink-class'><li>Additive Manufacturing</li></NavLink>
          <NavLink className='navlink-class'><li>Mechanical Measurement</li></NavLink></ul></li>
          <li><ul>
          <NavLink className='navlink-class'><li>Quantitative Techniques in Project</li></NavLink>
          <NavLink className='navlink-class'><li>Sustainable Development</li></NavLink>
          <NavLink className='navlink-class'><li>Renewable Energy Source</li></NavLink>
         </ul></li>
        </ol>
      </div>
      </div>
      <Outlet />
    </div>
  )
}

export default ThirdYear
