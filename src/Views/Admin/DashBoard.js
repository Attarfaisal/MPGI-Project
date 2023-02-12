import React, { useEffect, useState } from "react";
import "../../Assets/CSS/Admin.css";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { Table } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {

  const[reload,setReload] =useState(false)

  
  const [studentsDetails, setStudentsDetails] = useState(
    {
      id: uuid(),
      name: "",
      studentMobile: "",
      parentMobile: "",
      email: "",
      prn:"",
      admission: ""
    });

  const submitHandler=(e)=>{
    e.preventDefault();
     axios.post("http://localhost:8000/Students-Details",studentsDetails).then((res)=>{
      if(res.data){
        setReload(!reload);
        setStudentsDetails(
      {name: "",
        studentMobile: "",
        parentMobile: "",
        email: "",
        prn:"",
        admission: ""})
      }
    })

  }

  const [apiDetails,setApiDetails]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/Students-Details').then((res)=>{
      setApiDetails(res.data)
    })
  },[reload])

  const deleteHandler = (id) =>{
      axios.delete(`http://localhost:8000/Students-Details/${id}`).then((res)=>{if(res.data){setReload(!reload)}})
  }


  return (
    <div className="admin-body">
      <form className="admin-div">
        <table>
          <tbody>
          <tr>
            <td>
              <label className="admin-input">Full Name</label>
            </td>
            <td>
              <input
                type="text"
                className="admin-input"
                placeholder="Enter Full Name"
                value={studentsDetails.name}
                onChange={(e)=>{setStudentsDetails({...studentsDetails,name:e.target.value})}}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Students Mobile Number</label>
            </td>
            <td>
              <input
                type="tel"
                placeholder="Enter Students Mobile No."
                className="admin-input"
                onChange={(e)=>{setStudentsDetails({...studentsDetails,studentMobile:e.target.value})}}
                value={studentsDetails.studentMobile}
               
              />
            </td>
           
          </tr>
          <tr>
            <td>
              <label>Parents Mobile Number</label>
            </td>
            <td>
              <input
                type="tel"
                placeholder="Enter Parents Mobile Number"
                className="admin-input"
                value={studentsDetails.parentMobile}
                onChange={(e)=>{setStudentsDetails({...studentsDetails,parentMobile:e.target.value})}}
            
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Email Id </label>
            </td>
            <td>
              <input
                type='email'
                placeholder="Enter Email Id"
                className="admin-input"
                onChange={(e)=>{setStudentsDetails({...studentsDetails,email:e.target.value})}}
                value={studentsDetails.email}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>PRN Number</label>
            </td>
            <td>
              <input
                type="tel"
                placeholder="Enter PRN Number "
                className="admin-input"
                onChange={(e)=>{setStudentsDetails({...studentsDetails,prn:e.target.value})}}
                value={studentsDetails.prn}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Year Of Admission</label>
            </td>
            <td>
              <input
                type="tel"
                placeholder="Enter Year Of Admission"
                className="admin-input"
                onChange={(e)=>{setStudentsDetails({...studentsDetails,admission:e.target.value})}}
                value={studentsDetails.admission}
              />
            </td>
          </tr>
          </tbody>
        </table>
        <button className="admin-btn" onClick={submitHandler}>Submit</button>
      </form>
      <Table striped bordered hover className="students-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>studentMobile</th>
            <th>parentMobile</th>
            <th>email</th>
            <th>PRN</th>
            <th>admission year</th>
          </tr>
        </thead>
        <tbody>
          {apiDetails.map((details,index)=>{
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{details.name}</td>
                <td>{details.studentMobile}</td>
                <td>{details.parentMobile}</td>
                <td>{details.email}</td>
                <td>{details.prn}</td>
                <td>{details.admission}</td>
                <td>
                <NavLink to='view'><button className="map-btn">View</button></NavLink>
                <button className="map-btn" onClick={()=>{deleteHandler(details.id)}}>Delete</button>
                </td></tr>
            )
          })}
        </tbody>
      </Table>
      
    </div>
  );
};

export default DashBoard;
