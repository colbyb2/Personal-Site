import React from "react";
import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSmile } from "react-icons/fa";

function NavBar() {
  const [scrollValue, setScrollValue] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  window.addEventListener(
    "scroll",
    (e) => {
      const height = document.documentElement.scrollTop;
      setScrollValue(height);
    },
    { passive: true }
  );

  function toggleMenu() {
    if (showMenu) setShowMenu(false);
    else setShowMenu(true);
  }

  return (
    <div className={`nav-bar ${scrollValue > 40 ? "nav-fill" : ""}`}>
      <NavbarComponent showMenu={showMenu} toggleMenu={toggleMenu} />
      <Link to="/" className="nav-button">
        <div className="name-logo">Colby Brown</div>
      </Link>
      <div className="button-container">
        <Link to="/" className="nav-button page-btn">
          <div>Home</div>
        </Link>
        <Link to="/portfolio" className="nav-button page-btn">
          <div>Portfolio</div>
        </Link>
        <Link to="/qualifications" className="nav-button page-btn">
          <div>Qualifications</div>
        </Link>
        <Link to="/contact" className="nav-button page-btn">
          <div>Contact</div>
        </Link>
      </div>
      <FaBars
        className={`bars-icon ${showMenu ? "blue" : "green"}`}
        onClick={toggleMenu}
      />
    </div>
  );
}

const NavbarComponent = ({ showMenu, toggleMenu }) => {
  return (
    <div className={`burger-bar ${showMenu ? "open-menu" : "close-menu"}`}>
      <div className={"close-btn"} onClick={toggleMenu}>
        <FaTimes className="menu-exit" />
      </div>
      <Link to="/" className="side-menu-link">
        <div className="menu-item">Home</div>
      </Link>
      <Link to="/portfolio" className="side-menu-link">
        <div className="menu-item">Portfolio</div>
      </Link>
      <Link to="/qualifications" className="side-menu-link">
        <div className="menu-item">Qualifications</div>
      </Link>
      <Link to="/contact" className="side-menu-link">
        <div className="menu-item">Contact</div>
      </Link>
      <FaSmile className="menu-smile-item" />
    </div>
  );
};

export default NavBar;
