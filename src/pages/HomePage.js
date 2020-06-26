import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeLogo from "../assets/Img/LOGO.png";
import { Link } from "react-router-dom";

class HomePage extends Component {
  componentDidMount() {
    document.title = "Inspired Companies | International Advisory";
  }
  render() {
    const pageType = "Home";
    return (
      <div className="Page">
        <Navbar pageType={pageType} />
        <div className="HomeSection">
          {/* <div className="Logo1Div"> */}
          <Link to="/about" style={{ textAlign: "center" }}>
            <img src={HomeLogo} alt="logo" class="Logo1Style" />
          </Link>
        </div>
        <Footer pageType={pageType} />
      </div>
    );
  }
}

export default HomePage;
