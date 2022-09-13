import propTypes from "prop-types";

function Button({ children, type, version, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  version: "primary",
  disabled: false,
};

Button.propTypes = {
  children: propTypes.node.isRequired,
  type: propTypes.string,
  version: propTypes.string,
  disabled: propTypes.bool,
};

export default Button;
