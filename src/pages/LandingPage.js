import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class LandingPage extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/Home" />;
    } else {
      return (
        <div class="CenterScreen fontSizeForL1">
          <Link
            to="/Home"
            style={{ color: "rgb(3, 51, 76)", textDecoration: "none" }}
          >
            <h1>BECOME A COMPANY THE WORLD WILL GET BEHIND</h1>
          </Link>
        </div>
      );
    }
  }
}

export default LandingPage;
