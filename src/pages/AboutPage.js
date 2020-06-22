import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class AboutPage extends Component {
  render() {
    const pageType = "About";
    return (
      <div className="Page">
        <Navbar pageType={pageType} />
        <div className="AboutSection">
          <div> [Video Embeded Here]</div>
        </div>
        <Footer pageType={pageType} />
      </div>
    );
  }
}

export default AboutPage;
