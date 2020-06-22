import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BookPage from "./pages/BookPage";
import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/Home" component={HomePage} />
                <Route exact path="/About" component={AboutPage} />
                <Route exact path="/Book" component={BookPage} />
                <Route exact path="/Contact" component={ContactPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
