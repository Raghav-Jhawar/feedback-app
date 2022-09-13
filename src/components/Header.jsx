import React from "react";
import propTypes from "prop-types";

const Header = ({ text, bgColor, textColor }) => {
  const customStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={customStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: propTypes.string,
  bgColor: propTypes.string,
  textColor: propTypes.string,
};

export default Header;
