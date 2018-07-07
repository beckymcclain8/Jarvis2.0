import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../App.css";
import "../../index.css";

const Navbar = props => (
  <nav className="navbar">
    <div
      className={
        window.location.pathname === "/" ? "nav-item active" : "nav-item"
      }
    >
      <Link to="/" className="nav-link">
        Home
      </Link>
    </div>
    <div
      className={
        window.location.pathname === "/map" ? "nav-item active" : "nav-item"
      }
    >
      <Link to="/api/map" className="nav-link">
        Map
      </Link>
    </div>
    <div
      className={
        window.location.pathname === "/search" ? "nav-item active" : "nav-item"
      }
    >
      <Link to="/search" className="nav-link">
        Search
      </Link>
    </div>
    <div
      className={
        window.location.pathname === "/patient" ? "nav-item active" : "nav-item"
      }
    >
      <Link to="/:id/patient" className="nav-link">
        Patient
      </Link>
    </div>
    <div
      className={
        window.location.pathname === "/provider"
          ? "nav-item active"
          : "nav-item"
      }
    >
      <Link to="/:id/provider" className="nav-link">
        Provider
      </Link>
    </div>
    <div
      className={
        window.location.pathname === "/logout" ? "nav-item active" : "nav-item"
      }
    >
      <Link to="/" className="nav-link">
        Log Out
      </Link>
    </div>
  </nav>
);

export default Navbar;
