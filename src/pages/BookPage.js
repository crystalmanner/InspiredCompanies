import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookLogo from "../assets/Img/book.png";
import { Row, Col, Button } from "react-bootstrap";
import bookPdf from "../assets/data/Inspired_INC_PDF_Final.pdf";

class BookPage extends Component {
  render() {
    const pageType = "Book";
    return (
      <div className="Page">
        <Navbar pageType={pageType} />
        <div className="BookSection">
          <Row style={{ marginLeft: "0px", marginRight: "0px" }}>
            <Col md={{ span: 3, offset: 3 }} sm={12} xs={12}>
              <img src={BookLogo} style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col
              md={{ span: 3 }}
              sm={12}
              xs={12}
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <div class="BookTextStyle">
                <div>
                  <h3>INSPIRED INC.</h3>
                  <h5>by LISA MacCALLUM, EMILY BREW, NICOLE HOWSON</h5>
                  Most companies are only a tweet or YouTube upload from chaos.
                  More People than ever are influencing the success of failure
                  of your business, and traditional business leaders aren't the
                  only ones in charge anymore. Meet the new C.E.Os: the
                  Customers, Employees and Outsiders who can make or break your
                  company faster than ever. Inspired INC. is an indispensable
                  roadmap to getting them onside.
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0px 5px",
                  }}
                >
                  <Button
                    style={{
                      color: "rgb(255,255,255)",
                      borderRadius: "10px",
                      border: "none",
                      backgroundColor: "rgb(40, 184, 211)",
                      fontSize: "12px",
                      padding: "10px 10px",
                      width: "170px",
                    }}
                  >
                    BOOK DEPOSITORY
                  </Button>
                  <Button
                    style={{
                      color: "rgb(255,255,255)",
                      borderRadius: "10px",
                      border: "none",
                      backgroundColor: "rgb(40, 184, 211)",
                      fontSize: "12px",
                      padding: "10px 10px",
                      width: "170px",
                    }}
                  >
                    AMAZON
                  </Button>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <a
                    class="BookTextStyle"
                    href={bookPdf}
                    target="_blank"
                    style={{ textDecoration: "underline" }}
                  >
                    Audio book supplement
                  </a>
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

export default BookPage;
