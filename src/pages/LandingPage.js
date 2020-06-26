import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class LandingPage extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    document.title = "Inspired Companies | International Advisory";
    this.id = setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    } else {
      return (
        <div>
          <div class="CenterScreen fontSizeForL1">
            <Link
              to="/home"
              style={{ color: "rgb(3, 51, 76)", textDecoration: "none" }}
            >
              <label style={{ fontSize: "53px", marginBottom: "0px" }}>
                BECOME A COMPANY THE WORLD WILL GET BEHIND
              </label>
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default LandingPage;
