import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ pageType }) => {
  var navType = "navHome";
  var navLinkType = "navHomeLink";
  if (pageType === "About") {
    navType = "navAbout";
    navLinkType = "navAboutLink";
  } else if (pageType === "Book") {
    navType = "navBook";
    navLinkType = "navBookLink";
  } else if (pageType === "Contact") {
    navType = "navContact";
    navLinkType = "navContactLink";
  }

  return (
    <nav className={navType}>
      <section>
        <div className="navBarDisplay">
          <div className={pageType === "Home" ? "navItemDiv" : ""}>
            <Link
              to="/About"
              className={navLinkType}
              style={{
                textDecoration: navType === "navAbout" ? "underline" : "none",
              }}
            >
              ABOUT
            </Link>
          </div>
          <div className={pageType === "Home" ? "navItemDiv" : ""}>
            <Link
              to="/Book"
              className={navLinkType}
              style={{
                textDecoration: navType === "navBook" ? "underline" : "none",
              }}
            >
              THE BOOK
            </Link>
          </div>
          <div className={pageType === "Home" ? "navItemDiv" : ""}>
            <Link
              to="/Contact"
              className={navLinkType}
              style={{
                textDecoration: navType === "navContact" ? "underline" : "none",
              }}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
export default Navbar;
