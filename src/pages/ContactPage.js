import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Row, Col, Container } from "react-bootstrap";
import ContactLogo from "../assets/Img/contactlogo.png";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import http from "../http-common";

class ContactPage extends Component {
  componentDidMount() {
    document.title = "Contact | INSPIRED COMPANIES";
  }
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "Enter your email address",
      emailStatus: "",
    };
    this.addressChange = this.addressChange.bind(this);
  }
  addressChange(event) {
    this.setState({ emailAddress: event.target.value });
    this.setState({ emailStatus: "" });
  }
  onBlurEvent = () => {
    if (this.state.emailAddress === "")
      this.setState({ emailAddress: "Enter your email address" });
  };
  onFocusEvent = () => {
    if (this.state.emailAddress === "Enter your email address")
      this.setState({ emailAddress: "" });
  };
  savemaildata = () => {
    var validator = require("email-validator");
    if (!validator.validate(this.state.emailAddress)) {
      this.setState({ emailStatus: "Please enter a valid email address" });
    } else {
      http
        .post("/api/emaildata", {
          emailData: this.state.emailAddress,
        })
        .then((res) => {
          if (res.data === "ok") {
            this.setState({ emailStatus: "Thanks!" });
          }
        })
        .catch((error) => {
          this.setState({ emailStatus: "Send Failed" });
          console.log(error);
        });
    }
  };
  render() {
    const pageType = "Contact";
    return (
      <div className="Page" style={{ display: "grid" }}>
        <Navbar pageType={pageType} />
        <div className="ContactSection">
          <div className="justifySectionForAbout">
            <Container className="ContactContainerStyle">
              <Row
                style={{
                  marginLeft: "0px",
                  marginRight: "0px",
                  height: "100%",
                }}
                className="ContactRowStyle"
              >
                <Col
                  lg={{ span: 6, offset: 3 }}
                  md={{ span: 8, offset: 2 }}
                  sm={{ span: 10, offset: 1 }}
                  xs={{ span: 12, offset: 0 }}
                  style={{
                    height: "100%",
                  }}
                  className="ContactColStyle"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <div>
                      <div class="ContactLogoStyle">
                        <img src={ContactLogo} alt="logo" class="Logo1Style" />
                      </div>
                      <div
                        style={{
                          color: "rgb(255,255,255)",
                          marginLeft: "20px",
                          marginRight: "20px",
                        }}
                      >
                        <p class="ContactTextFont">
                          We’d love to hear from you Email:&nbsp;
                          <a
                            class="contactUnderlineTextStyle"
                            href="mailto:hello@inspiredcompanies.global"
                            rel="noopener noreferrer"
                          >
                            hello@inspiredcompanies.global
                          </a>
                        </p>
                        <p
                          style={{ marginBottom: "1.5rem" }}
                          class="ContactTextFont"
                        >
                          We have a globally networked team to support your
                          journey to becoming an Inspired Company -{" "}
                          <a
                            class="contactUnderlineTextStyle"
                            href="mailto:donette@inspiredcompanies.global"
                            rel="noopener noreferrer"
                          >
                            Advisory
                          </a>
                        </p>
                        <p class="ContactTextFont">
                          Our message has a way of cutting through. Contact us
                          for{" "}
                          <a
                            class="contactUnderlineTextStyle"
                            href="mailto:donette@inspiredcompanies.global"
                            rel="noopener noreferrer"
                          >
                            speaking engagements.
                          </a>
                        </p>
                        <p
                          class="ContactTextFont"
                          style={{
                            marginBottom: "10px",
                            padding: "0px 30px",
                          }}
                        >
                          Join the community / sign up to receive updates and
                          insights.
                        </p>
                      </div>

                      <div
                        style={{
                          minWidth: "260px",
                          width: "80%",
                          display: "flex",
                          flexDirection: "row",
                          margin: "0px 40px 5px 40px",
                        }}
                      >
                        <div class="contactInputDivStyle">
                          <input
                            style={{
                              border: "none",
                              color: "rgb(40, 184, 211)",
                              padding: "20px 15px",
                              width: "100%",
                              height: "100%",
                              fontSize: "16px",
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
                          class="contantBtnStyle"
                          onClick={this.savemaildata}
                        >
                          <i
                            class="fa fa-angle-right"
                            style={{ color: "rgb(255,255,255)" }}
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>

                    <div class="EmailConfirmStyle">
                      {this.state.emailStatus}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer pageType={pageType} />
      </div>
    );
  }
}

export default ContactPage;
