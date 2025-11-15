import React from "react";

function SelectedNumbers({ selectedNumbers }) {
  const numberKeys = Object.keys(selectedNumbers).sort();
  return <h2>{numberKeys.join(" ")}</h2>;
}

export default SelectedNumbers;
