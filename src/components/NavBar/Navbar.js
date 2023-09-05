import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { NavLink,Link } from 'react-router-dom';
import Loaction from '../Pages/Location';
import Episodes from '../Pages/Episodes';
import '../../App.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
  <div className="container">
   <Link to="/" className=' ubuntu my-4 fs-5 navbar-brand'>
    Rick & Morti 
    <span className='text-primary'>WiKi</span> 
    </Link>
    <button className="navbar-toggler" 
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
     <style jsx>
{
    `
    button[aria-expanded="false"] > .close{
        display:none
    }
    button[aria-expanded="true"] > .open{
        display:none;
    }
    `
}
     </style>
      <i className="fas fa-bars open text-dark fw-bold"></i>
      <i className="fas fa-times close text-dark fw-bold"></i>
    </button>
    <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
        <div className="navbar-nav fs-5 gap-3">
          <NavLink to="/" activeClassName = "active" className="nav-link" >Charecters</NavLink>
          <NavLink to="/episodes" className="nav-link" >Episodes</NavLink>
          <NavLink to="/location" className="nav-link" >Loaction</NavLink>
          </div>

    </div>
  </div>
</nav>
  )
}

export default Navbar