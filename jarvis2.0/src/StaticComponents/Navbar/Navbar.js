import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../App.css";
import "../../index.css";

const Navbar = props => (
  <nav className="navbar">
    NAVBAR
    {/* <Link className="logo" to="/">
    Jarvis
    </Link>
    <div> 
      <ul className="nav">
        <li
          className={
            window.location.pathname === "/" 
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/map"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/map" className="nav-link">
            Map
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/patient"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/patient" className="nav-link">
            Patient
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/provider"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/provider" className="nav-link">
            Provider
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/logout"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/logout" className="nav-link">
            Log Out
          </Link>
        </li>
      </ul>
    </div> */}
  </nav>
);

export default Navbar;
