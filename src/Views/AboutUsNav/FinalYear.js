import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import '../../Assets/CSS/NavBar.css';

const FinalYear = () => {
  return (
    <div>
      <div className='Subjects-div'>
      <div>
        <h1>Seventh semester</h1>
        <ol>
         <NavLink className='navlink-class' to='mp3'> <li>Manufacturing Process 3</li></NavLink>
         <NavLink className='navlink-class' to='cadcam'> <li>CAD-CAM</li></NavLink>
         <NavLink className='navlink-class' to='managment'> <li>Industrial Engineering and Managment</li></NavLink>
         <NavLink className='navlink-class' to='mechatronics'> <li>Mechatronics</li></NavLink>
        </ol>
      </div>
      <div>
        <h1>Eight semester</h1>
      </div>
      </div>
      <Outlet />
    </div>
  )
}

export default FinalYear
