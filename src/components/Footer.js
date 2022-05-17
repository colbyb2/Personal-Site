import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-container">
        <div className="social-icon-container">
          <FaInstagram className="footer-logo" />
        </div>
        <div className="social-icon-container">
          <FaLinkedin className="footer-logo" />
        </div>
        <div className="social-icon-container">
          {" "}
          <FaTwitterSquare className="footer-logo" />
        </div>
      </div>
      <div className="copywrite-text">
        <div className="copywrite-name">Colby Brown</div>
        <div className="copywrite-year">©2022</div>
      </div>
    </div>
  );
}

export default Footer;
