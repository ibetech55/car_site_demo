import React from "react";
import "./index.css";

const TermsConditions = () => {
  return (
    <>
      <div className="terms-condition__line" />
      <div className="terms-conditions__container">
        <div className="terms-conditions__category">
          <p>
            <a href="/">Terms & Conditions of Use</a>
          </p>
          <p>
            <a href="/">Privacy Notice</a>
          </p>
          <p>
            <a href="/">California Privacy Notice</a>
          </p>
          <p>
            <a href="/">My Provacy Choices</a>
          </p>
          <p>
            <a href="/">Accessibility Statement</a>
          </p>
          <p>
            <a href="/">Ad Choices</a>
          </p>
        </div>
        <div className="terms-conditions__copyright">
          <p>&copy; 2023 westcoastwhips.com. All right reserved.</p>
        </div>
      </div>
    </>
  );
};

export { TermsConditions };
