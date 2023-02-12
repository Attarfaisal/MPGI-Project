import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import mpgilogo from "../Assets/Images/mpgilogo.webp";
import "../Assets/CSS/NavBar.css";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar className="navbar-div" expand="lg">
        <Container>
          <NavLink to='/'>
          <Navbar.Brand>
          <img src={mpgilogo} alt="mpgilogo" className="mpgiLogo"></img>
          </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className='navlink-class'>
                <p className="nav-title">Home</p>
              </NavLink>
              <NavLink to="/about" className='navlink-class'>
                <p className="nav-title">About Us</p>
              </NavLink>
              <NavLink to="/contact" className='navlink-class'>
                <p className="nav-title">Contact Us</p>
              </NavLink>
              <NavLink to="career" className='navlink-class'>
                <p className="nav-title">Career</p>
              </NavLink>
              <NavLink to="admin" className='navlink-class' end>
                <p className="nav-title">Admin</p>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet /> 
    </div>
  );
};

export default NavBar;
