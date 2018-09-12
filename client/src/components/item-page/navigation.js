import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
    <nav className="headerStyle">
          <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/item">Item</NavLink>
          <NavLink to="/Upload">Upload</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          </ul>
    </nav>
   </div>
  );
}


export default Navigation;
