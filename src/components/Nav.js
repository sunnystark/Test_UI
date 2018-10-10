import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
   <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand" style={{color:'white'}}>Kundali Software</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" >   <NavLink to="/User" style={{color:'white'}}>One</NavLink> <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" ><NavLink to="/" style={{color:'white'}}>Two</NavLink></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" ><NavLink to="/Next" style={{color:'white'}}>Three</NavLink></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" ><NavLink to="/Next2" style={{color:'white'}}>Four</NavLink></a>
      </li>
      
    </ul>
  </div>
</nav>

   </div>


    );
}

export default Nav;