import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo" role="img" aria-label="globe">
          🌍
        </span>
        <span>Cities</span>
      </div>
      <nav className="navbar-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          Cities List
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          + Add City
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
