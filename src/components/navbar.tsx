import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";
import "../components/Styles/navbar.css";
import "../components/Styles/button.css";
import Buttons from "./button";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  console.log(dropdown , "eerwerewr")

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          K-HIRER
          <i className="fab fa-firstdraft" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Buttons />
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to = "/quiz" className="nav-links" onClick={closeMobileMenu} >
              Quiz <i className="fas fa-caret-down"  />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/sign-in"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Admin Login
            </Link>
          </li>
        </ul>
      </nav>
      </>
  );
}

export default Navbar;
