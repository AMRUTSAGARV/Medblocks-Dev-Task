import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-link">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/list">List</NavLink>
          </li>
          <li>
            <NavLink to="/tree">Tree</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
