import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Row, Col } from "react-bootstrap";
import ContactLogo from "../assets/Img/LOGO1.png";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = { emailAddress: "Enter your email address" };
    this.addressChange = this.addressChange.bind(this);
  }
  addressChange(event) {
    this.setState({ emailAddress: event.target.value });
  }
  onBlurEvent = () => {
    if (this.state.emailAddress === "")
      this.setState({ emailAddress: "Enter your email address" });
  };
  onFocusEvent = () => {
    if (this.state.emailAddress === "Enter your email address")
      this.setState({ emailAddress: "" });
  };
  render() {
    const pageType = "Contact";
    return (
      <div className="Page">
        <Navbar pageType={pageType} />
        <div className="ContactSection">
          <Row style={{ marginLeft: "0px", marginRight: "0px" }}>
            <Col md={{ span: 4, offset: 4 }} sm={12} xs={12}>
              <div style={{ marginBottom: "20px" }}>
                <img src={ContactLogo} alt="logo" class="Logo1Style" />
              </div>
              <div style={{ textAlign: "center", color: "rgb(255,255,255)" }}>
                <h5>We’d love to hear from you</h5>
                <h5>
                  Email:&nbsp;
                  <span style={{ textDecoration: "underline" }}>
                    hello@inspiredcompanies.global
                  </span>
                </h5>
                <h5>
                  We have a globally networked team to support your journey to
                  becoming an Inspired Company -{" "}
                  <span style={{ textDecoration: "underline" }}>Advisory</span>
                </h5>
                <p></p>
                <h5>
                  Our message has a way of cutting through. Contact us for
                  speaking engagements. Join the community / sign up to receive
                  updates and insights.
                </h5>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <div>
                  <input
                    style={{
                      border: "none",
                      color: "rgb(40, 184, 211)",
                      padding: "5px 10px",
                    }}
                    id="Email"
                    type="text"
                    value={this.state.emailAddress}
                    onBlur={this.onBlurEvent}
                    onFocus={this.onFocusEvent}
                    onChange={this.addressChange}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                  }}
                >
                  <i
                    class="fa fa-angle-right"
                    style={{ color: "rgb(255,255,255)" }}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Footer pageType={pageType} />
      </div>
    );
  }
}

export default ContactPage;
