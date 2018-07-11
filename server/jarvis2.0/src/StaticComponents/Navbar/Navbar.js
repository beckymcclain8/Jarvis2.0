import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";
import "../../App.css";
import "../../index.css";
// import rootReducer from "../../2-reducers/rootReducer";
// import authReducer from "../../2-reducers/authReducer";

class Navbar extends Component {

    renderAuthContent() {
      switch (this.props.auth) {
        case null:
            return;
        case false:
            return <li><a href="/auth/google">Login with Google</a></li>;
        default:
            return <li><a href="/api/logout">Logout</a></li>;
     }
};

  render() {
    console.log(this.props)
    return (

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
    <div>
     {/* className={
        window.location.pathname === "/logout" ? "nav-item active" : "nav-item"
      }
    >
      <Link to="/" className="nav-link">
        Log Out
      </Link> */}
      <ul>
        {this.renderAuthContent()}
        </ul>
    </div>
  </nav>
    )
  }
    };

    function mapStateToProps({ auth }) {
      return { auth }
    }

export default connect(mapStateToProps)(Navbar);
