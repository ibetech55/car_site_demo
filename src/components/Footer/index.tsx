import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";
import "./index.css";
import { TermsConditions } from "./components/TermsConditions";

const Footer = () => {
  return (
    <>
      <div className="footer__line" />
      <div className="footer__container">
        <ul className="footer__buying-selling">
          <li>Buying & Selling</li>
          <li>
            <a href="/">Find a Car</a>
          </li>
          <li>
            <a href="/">Find a Dealer</a>
          </li>
          <li>
            <a href="/">Listings by City</a>
          </li>
          <li>
            <a href="/">Certified Pre-Owned</a>
          </li>
          <li>
            <a href="/">Car Payment Calculators</a>
          </li>
          <li>
            <a href="/">Car Reviews & Ratings</a>
          </li>
          <li>
            <a href="/">Compare Side by Side</a>
          </li>
          <li>
            <a href="/">Fraud Awareness</a>
          </li>
          <li>
            <a href="/">Sell Your Car</a>
          </li>
        </ul>
        <ul className="footer__for-dealers">
          <li>For Dealers</li>
          <li>
            <a href="/">About Dealers</a>
          </li>
          <li>
            <a href="/">FUEL</a>
          </li>
          <li>
            <a href="/">Dealer Inspire</a>
          </li>
          <li>
            <a href="/">Dealer Rater</a>
          </li>
          <li>
            <a href="/">Accu-Trade</a>
          </li>
          <li>
            <a href="/">Dealer Login</a>
          </li>
        </ul>
        <ul className="footer__our-company">
          <li>Our Company</li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Licensing & Reprints</a>
          </li>
          <li>
            <a href="/">Site Map</a>
          </li>
          <li>
            <a href="/">Feedback</a>
          </li>
        </ul>
        <div className="footer__connect">
          <h2>Connect With Us</h2>
          <div className="footer-icons-container">
            <div className="footer__connect-icons">
              <BsFacebook size={40} color="#031B34" />
            </div>
            <div className="footer__connect-icons">
              <BsLinkedin size={40} color="#031B34" />
            </div>
            <div className="footer__connect-icons">
              <BsInstagram size={40} color="#031B34" />
            </div>
            <div className="footer__connect-icons">
              <BsYoutube size={40} color="#031B34" />
            </div>
            <div className="footer__connect-icons">
              <BsTwitter size={40} color="#031B34" />
            </div>
          </div>
        </div>
      </div>
      <TermsConditions />
    </>
  );
};

export default Footer;
