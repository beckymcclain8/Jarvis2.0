import React, { Component } from "react";
import { connect } from "react-redux";
import "./Login.css";
import "../../App.css";
import "../../index.css";
// import Image from "../Image";

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
    <div className="loginHeader">
    <h3>New to Jarvis?</h3>
    <h3>Sign Up Here!</h3>
    </div>
    <div className="loginLink" > 
      <h6> {this.renderAuthContent()} </h6>
     </div>
    <p> By signing up, you agree to Jarvis's Terms of Use and Privacy Policy. </p>
    </div>
  )
}
};

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Login);
