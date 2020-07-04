import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BookPage from "./pages/BookPage";
import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";
import DownloadPage from "./pages/DownloadPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route
          render={({ location }) => (
            <TransitionGroup className="transition-group">
              <CSSTransition
                key={location.pathname}
                timeout={600}
                classNames="fade"
              >
                <section className="route-section">
                  <Switch location={location}>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/the-book" component={BookPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/download" component={DownloadPage} />
                  </Switch>
                </section>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </HashRouter>
    );
  }
}

export default App;
