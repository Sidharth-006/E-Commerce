import styles from "./Button.module.css";
import classNames from "classnames";

const Button = ({
  children,
  variant = "primary",   // primary | secondary | danger
  size = "medium",       // small | medium | large
  onClick,
  disabled = false,
  fullWidth = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles.btn,
        styles[variant],
        styles[size],
        {
          [styles.fullWidth]: fullWidth,
          [styles.disabled]: disabled,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;