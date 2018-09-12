import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="headerStyle">
          <ul>
          <NavLink to="/"><a>Home</a></NavLink>
          <NavLink to="/item"><a>Item</a></NavLink>
          <NavLink to="/select"><a>Select</a></NavLink>
          <NavLink to="/contact"><a>Contact</a></NavLink>
          </ul>
    </nav>
  );
}


export default Navigation;
