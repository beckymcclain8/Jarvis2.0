import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Patient from "./pages/Patient";
import Search from "./pages/Search";

// import Provider from "./pages/Provider";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/:id/patient" component={Patient} />
          <Route exact path="/search" component={Search} />

          {/* <Route exact path="/:id/provider" component={Provider} /> */}
          {/* <Route  exact path="/:id/provider" component={Provider} />
          Will need second provider page after all so that the patient
          can view the non editable one */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
