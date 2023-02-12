import React from 'react'
import '../../Assets/CSS/Admin.css';
import { NavLink, useNavigate} from 'react-router-dom';

const SignIn = () => {
  const Navigate=useNavigate();
  const AddData=()=>{
    Navigate("dashBoard");
  }

  return (
    <div className='admin-body'>
    <div className='admin-div'>
      <form>
        <h2>Sign In </h2>
        <tr>
            <td><label>User id:</label></td>
            <td><input type='text' placeholder='enter user id' className='admin-input'/></td>
        </tr>
        <tr>
            <td><label>Password:</label></td>
           <td> <input type='password' placeholder='enter Password' className='admin-input' /></td>
        </tr>
      <NavLink to='dashBoard'><button className='admin-btn' onClick={AddData} >Sign In</button> </NavLink>
      <p className='error'>Forgot Password ?</p>
      </form>
    </div>

    </div>
  )
}

export default SignIn
