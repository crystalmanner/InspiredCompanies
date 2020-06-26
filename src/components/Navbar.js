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
          <div className="navItemDiv">
            <Link
              to="/about"
              className={
                pageType === "Home"
                  ? "navAnimationItem1 " + navLinkType
                  : pageType === "About"
                  ? "navAnimationItemStatic1 " + navLinkType
                  : pageType === "Book"
                  ? "navAnimationItem3 " + navLinkType
                  : "navAnimationItem2 " + navLinkType
              }
            >
              ABOUT
            </Link>
          </div>
          <div className="navItemDiv">
            <Link
              to="/the-book"
              className={
                pageType === "Home"
                  ? "navAnimationItem1 " + navLinkType
                  : pageType === "About"
                  ? "navAnimationItem1 " + navLinkType
                  : pageType === "Book"
                  ? "navAnimationItemStatic3 " + navLinkType
                  : "navAnimationItem2 " + navLinkType
              }
            >
              THE BOOK
            </Link>
          </div>
          <div className="navItemDiv">
            <Link
              to="/contact"
              className={
                pageType === "Home"
                  ? "navAnimationItem1 " + navLinkType
                  : pageType === "About"
                  ? "navAnimationItem1 " + navLinkType
                  : pageType === "Book"
                  ? "navAnimationItem3 " + navLinkType
                  : "navAnimationItemStatic2 " + navLinkType
              }
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
