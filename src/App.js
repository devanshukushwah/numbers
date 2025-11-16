import "./App.css";
import Button from "./components/button/Button";
import SelectedNumbers from "./components/SelectedNumbers/SelectedNumbers";
import AppUtil from "./util/AppUtil";
import React from "react";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "./util/MyLocalStorage";
import AppConstants from "./common/AppConstants";

function App() {
  const [selectedNumbers, setSelectedNumbers] = React.useState(
    loadFromLocalStorage(AppConstants.SELECTED_NUMBERS) || {}
  );

  const handleButtonClick = (value) => {
    setSelectedNumbers((prevSelected) => {
      const newSelected = { ...prevSelected };
      if (newSelected[value]) {
        delete newSelected[value];
      } else {
        newSelected[value] = true;
      }
      saveToLocalStorage(AppConstants.SELECTED_NUMBERS, newSelected);
      return newSelected;
    });
  };

  // method to copy argument text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Text copied to clipboard");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const makeSelectedNumbersString = () => {
    return Object.keys(selectedNumbers).sort().join(" ");
  };

  const handleResetSelectedNumbers = () => {
    setSelectedNumbers({});
    saveToLocalStorage(AppConstants.SELECTED_NUMBERS, {});
  };

  return (
    <>
      <SelectedNumbers selectedNumbers={selectedNumbers} />
      <div className="spacer"></div>
      <div className="flex jcsb">
        <Button
          label="Copy"
          value={makeSelectedNumbersString()}
          onClick={copyToClipboard}
          color="info"
        />
        <Button
          label="Reset"
          color="error"
          onClick={handleResetSelectedNumbers}
        />
      </div>
      <div className="divider"></div>
      <div className="numbers-grid">
        {AppUtil.range(0, 99).map((number) => {
          const _2digitString = AppUtil.to2DigitString(number);
          return (
            <Button
              key={_2digitString}
              label={_2digitString}
              value={_2digitString}
              onClick={handleButtonClick}
              isSelected={selectedNumbers[_2digitString]}
              style={{ padding: "0.4rem" }}
            />
          );
        })}
      </div>
      <div className="bottom-button">
        <Button
          label="Copy"
          value={makeSelectedNumbersString()}
          onClick={copyToClipboard}
          color="info"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
}

export default App;
