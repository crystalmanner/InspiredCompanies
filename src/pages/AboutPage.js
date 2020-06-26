import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class AboutPage extends Component {
  componentDidMount() {
    document.title = "About | INSPIRED COMPANIES";
  }
  render() {
    const pageType = "About";
    return (
      <div className="Page">
        <Navbar pageType={pageType} />
        <div className="AboutSection">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              height: "60%",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/428517508?color=ffffff&title=0&byline=0&portrait=0"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
              width="100%"
              height="100%"
            ></iframe>
            {/* <p style={{ color: "rgb(255,255,255)" }}>
              <a
                href="https://vimeo.com/428517508"
                style={{ color: "rgb(40, 184, 211)" }}
              >
                Inspired Companies (V10)
              </a>{" "}
              from{" "}
              <a
                href="https://vimeo.com/stickmanproductions"
                style={{ color: "rgb(40, 184, 211)" }}
              >
                Stickman Productions
              </a>{" "}
              on{" "}
              <a
                href="https://vimeo.com"
                style={{ color: "rgb(40, 184, 211)" }}
              >
                Vimeo
              </a>
              .
            </p> */}
          </div>
        </div>
        <Footer pageType={pageType} />
      </div>
    );
  }
}

export default AboutPage;
