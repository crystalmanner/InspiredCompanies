import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookLogo from "../assets/Img/book.png";
import { Row, Col, Container } from "react-bootstrap";
import bookPdf from "../assets/data/Inspired_INC_PDF_Final.pdf";

class BookPage extends Component {
  componentDidMount() {
    document.title = "The Book | INSPIRED COMPANIES";
  }
  render() {
    const pageType = "Book";
    return (
      <div className="Page">
        <Navbar pageType={pageType} />
        <div className="BookSection">
          <Container className="BookContainerStyle">
            <Row style={{ marginLeft: "0px", marginRight: "0px" }}>
              <Col
                lg={{ span: 7, offset: 0 }}
                md={{ span: 6, offset: 0 }}
                sm={{ span: 10, offset: 1 }}
                xs={{ span: 10, offset: 1 }}
              >
                <img
                  src={BookLogo}
                  style={{ width: "100%", height: "100%" }}
                  alt="Book_Image"
                />
              </Col>
              <Col
                lg={{ span: 5 }}
                md={{ span: 6, offset: 0 }}
                sm={{ span: 10, offset: 1 }}
                xs={{ span: 10, offset: 1 }}
                className="bookParagraphDivStyle"
              >
                <div class="BookTextStyle" style={{ minWidth: "348px" }}>
                  <div>
                    <p style={{ fontSize: "25px" }}>INSPIRED INC.</p>
                    <p class="bookParagraphStyle" style={{ fontSize: "13px" }}>
                      by LISA MacCALLUM, EMILY BREW, NICOLE HOWSON
                    </p>
                    <p class="bookParagraphStyle">
                      Most companies are only a tweet or YouTube upload from
                      chaos. More People than ever are influencing the success
                      of failure of your business, and traditional business
                      leaders aren't the only ones in charge anymore. Meet the{" "}
                      <label
                        style={{
                          fontStyle: "italic",
                          marginBottom: "0px",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        new C.E.Os:
                      </label>{" "}
                      the{" "}
                      <label
                        style={{
                          marginBottom: "0px",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        C
                      </label>
                      ustomers, Employees and{" "}
                      <label
                        style={{
                          fontStyle: "italic",
                          marginBottom: "0px",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        Outsiders
                      </label>{" "}
                      who can make or break your company faster than ever.{" "}
                      <label
                        style={{
                          fontStyle: "italic",
                          marginBottom: "0px",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        Inspired INC.
                      </label>{" "}
                      is an indispensable roadmap to getting them onside.
                    </p>
                  </div>
                  <div class="bookButtonDivStyle">
                    <a
                      href="https://www.bookdepository.com/Inspired-INC-Lisa-MacCallum/9781912892136?ref=grid-view&qid=1592729000478&sr=1-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bookButtonStyle">
                        BOOK DEPOSITORY
                      </button>
                    </a>

                    <a
                      href="https://www.amazon.com/Inspired-INC-Become-Company-Behind-ebook/dp/B07S5Z6TZH/ref=sr_1_1?dchild=1&keywords=inspired+INC&qid=1592729075&sr=8-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bookButtonStyle">AMAZON</button>
                    </a>
                  </div>
                  <div style={{ marginBottom: "30px" }}>
                    <a
                      class="bookParagraphStyle bookAudioBookStyle"
                      href={bookPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Audio book supplement
                    </a>
                  </div>
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

export default BookPage;
