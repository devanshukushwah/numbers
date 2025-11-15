import React from "react";
import "./Button.css";

function Button({ label, onClick, value, isSelected, color }) {
  return (
    <>
      <button
        className={
          "button " + (!isSelected || " selected") + (color ? " " + color : "")
        }
        onClick={() => onClick(value)}
      >
        {label}
      </button>
    </>
  );
}

export default Button;
