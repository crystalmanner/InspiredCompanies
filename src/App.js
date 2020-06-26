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
          <TransitionGroup className="transition-group">
            <CSSTransition key={location.key} timeout={600} classNames="fade">
              <section className="route-section">
                <Switch location={location}>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/home" component={HomePage} />
                  <Route exact path="/about" component={AboutPage} />
                  <Route exact path="/the-book" component={BookPage} />
                  <Route exact path="/contact" component={ContactPage} />
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
