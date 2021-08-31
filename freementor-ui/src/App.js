import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import signin from "./components/signin";
import about from "./components/About";
import signup from "./components/signup";
import contact from "./components/contact";
import Home from "./views/home";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
          <Route path="/contact" component={contact} />
          <Route path="/about" component={about} />
          <Route path="/signup" component={signup} />
            <Route path="/signin" component={signin} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;