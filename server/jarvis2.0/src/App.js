import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Patient from "./pages/Patient";

import Search from "./pages/Search";
import Provider from "./pages/Provider";

import NoMatch from "./pages/NoMatch";
import * as actions from "./actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Switch> */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/:id/patient" component={Patient} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/:id/provider" component={Provider} />
          {/* <Route  exact path="/:id/provider" component={Provider} />
          Will need second provider page after all so that the patient
          can view the non editable one */}
          <Route component={NoMatch} />
          {/* </Switch> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
