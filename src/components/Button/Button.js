import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ label, onClick, variant }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
