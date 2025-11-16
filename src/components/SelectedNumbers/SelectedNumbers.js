import React from "react";
import "./SelectedNumbers.css";

function SelectedNumbers({ selectedNumbers }) {
  const numberKeys = Object.keys(selectedNumbers).sort();
  return (
    <>
      <div className="box">
        <h2 className="font font-size bold">
          {numberKeys.join(" ") || "Please select numbers"}
        </h2>
      </div>
    </>
  );
}

export default SelectedNumbers;
