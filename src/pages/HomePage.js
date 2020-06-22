import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeLogo from "../assets/Img/LOGO.png";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    const pageType = "Home";
    return (
      <div className="Page">
        <Navbar pageType={pageType} />
        <div className="HomeSection">
          <div className="Logo1Div">
            <Link to="/About">
              <img src={HomeLogo} alt="logo" class="Logo1Style" />
            </Link>
          </div>
        </div>
        <Footer pageType={pageType} />
      </div>
    );
  }
}

export default HomePage;
