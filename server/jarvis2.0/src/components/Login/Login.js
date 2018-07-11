import React, { Component } from "react";
import { connect } from "react-redux";
import "./Login.css";
import "../../App.css";
import "../../index.css";
import Image from "../Image";

class Login extends Component {

  renderAuthContent() {
    switch (this.props.auth) {
      case null:
          return;
      case false:
          return <a href="/auth/google">Login with Google</a>;
      default:
          return <a href="/api/logout">Logout</a>;
   }
};

render(props) {

  return (
    <div className="login">
    
    <h2> New to Jarvis?  Sign Up! </h2>
    <div className="loginLink" > 
    {/* <Image src = { props.src } /> */}
     {this.renderAuthContent()} 
     </div>
    <h5> Terms and Conditions </h5>
    </div>
  )
}
};

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Login);
