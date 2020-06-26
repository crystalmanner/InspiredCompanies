import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Row, Col, Container } from "react-bootstrap";
import ContactLogo from "../assets/Img/LOGO1.png";
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
        .post("/email", {
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
      <div className="Page">
        <Navbar pageType={pageType} />
        <div className="ContactSection">
          <Container>
            <Row style={{ marginLeft: "0px", marginRight: "0px" }}>
              <Col
                lg={{ span: 6, offset: 3 }}
                md={{ span: 8, offset: 2 }}
                sm={{ span: 10, offset: 1 }}
                xs={{ span: 10, offset: 1 }}
              >
                <div
                  style={{
                    marginBottom: "25px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={ContactLogo} alt="logo" class="Logo1Style" />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    color: "rgb(255,255,255)",
                    marginLeft: "40px",
                    marginRight: "40px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    We’d love to hear from you Email:&nbsp;
                    <a
                      class="contactUnderlineTextStyle"
                      href="mailto:hello@inspiredcompanies.global"
                      rel="noopener noreferrer"
                    >
                      hello@inspiredcompanies.global
                    </a>
                  </p>
                  <p style={{ marginBottom: "2rem", fontSize: "16px" }}>
                    We have a globally networked team to support your journey to
                    becoming an Inspired Company -{" "}
                    <a
                      class="contactUnderlineTextStyle"
                      href="mailto:donette@inspiredcompanies.global"
                      rel="noopener noreferrer"
                    >
                      Advisory
                    </a>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    Our message has a way of cutting through. Contact us for{" "}
                    <a
                      class="contactUnderlineTextStyle"
                      href="mailto:donette@inspiredcompanies.global"
                      rel="noopener noreferrer"
                    >
                      speaking engagements.
                    </a>
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    Join the community / sign up to receive updates and
                    insights.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "20px 40px 5px 40px",
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
                        fontSize: "14px",
                      }}
                      id="Email"
                      type="text"
                      value={this.state.emailAddress}
                      onBlur={this.onBlurEvent}
                      onFocus={this.onFocusEvent}
                      onChange={this.addressChange}
                    />
                  </div>
                  <div class="contantBtnStyle" onClick={this.savemaildata}>
                    <i
                      class="fa fa-angle-right"
                      style={{ color: "rgb(255,255,255)" }}
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div
                  style={{
                    margin: "0px 40px 10px 40px",
                    fontSize: "16px",
                    color: "rgb(3, 51, 76)",
                  }}
                >
                  {this.state.emailStatus}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer pageType={pageType} />
      </div>
    );
  }
}

export default ContactPage;
