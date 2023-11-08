import React from "react";
import "./index.css";
const SignIn = () => {
  return (
    <div className="sign-in__container">
      <div className="sign-in__image"></div>
      <div className="sign-in__form">
        <h2>Car Site</h2>
        <div className="sign-in__logo">
          <img src="/assets/logo.png" alt="logo pic" />
        </div>
        <form>
          <div className="form-input__container">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="form-input__container">
            <label htmlFor="passord">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="form-button">
            <button type="submit" className="btn btn-primary">
              Enter
            </button>
          </div>
          <div className="sign-in__links">
            <p>
              <a href="/">Forgot email or Password</a>
            </p>
            <p>
              <a href="/">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export { SignIn };
