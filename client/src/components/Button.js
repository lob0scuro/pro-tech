import styles from "./styles/Button.module.css";
import React from "react";

const Button = ({
  title,
  type = "button",
  size = "100%",
  secondary,
  ...props
}) => {
  return (
    <button
      type={type}
      className={secondary ? styles.secondaryBtn : styles.btn}
      style={{ width: size }}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
