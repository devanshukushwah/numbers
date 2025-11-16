import React from "react";
import "./Button.css";

function Button({ label, onClick, value, isSelected, color, style }) {
  return (
    <>
      <button
        className={
          "button font bold " +
          (!isSelected || " selected") +
          (color ? " " + color : "")
        }
        style={style}
        onClick={() => onClick(value)}
      >
        {label}
      </button>
    </>
  );
}

export default Button;
