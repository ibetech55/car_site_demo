import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import "./index.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#brands">Brands</a>
    </p>
    <p>
      <a href="#specials">Specials</a>
    </p>
    <p>
      <a href="#reviews">Reviews</a>
    </p>
    <p>
      <a href="#oursite">Our Site</a>
    </p>
    <p>
      <a href="#popularsearches">Popular Searches</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nav__container">
      <div className="nav__links-container">
        <div className="nav__logo-container">
          <div className="nav__logo">
            <img src="/assets/logo.png" alt="nav-logo" />
          </div>
          <p>Car Site</p>
        </div>
      </div>

      <div className="nav__links-list">
        <Menu />
      </div>

      <div className="nav__buttons-container">
        <Link className="nav__sign-in" to="/sign-in">
          Sign in
        </Link>
        <Link className="nav__sign-up" to="/sign-up">
          Sign up
        </Link>
      </div>
      <div className="nav_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#031B34"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#031B34"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
      {toggleMenu && (
        <div className="navbar__responsive-menu scale-up-center">
          <Menu />
          <div className="navbar__responsive-butons-container">
            <Link className="nav__sign-in" to="/sign-in">
              Sign in
            </Link>
            <Link className="nav__sign-up" to="/sign-up">
              Sign up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
