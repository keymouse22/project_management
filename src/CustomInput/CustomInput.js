import React, { useState } from "react";

import { X } from "react-feather";

import styles from "./CustomInput.module.css";

function CustomInput(props) {
  const {
    text,
    onSubmit,
    displayClass,
    editClass,
    placeholder,
    defaultValue,
    buttonText,
  } = props;
  const [isCustomInput, setIsCustomInput] = useState(false);
  const [inputText, setInputText] = useState(defaultValue || "");

  const submission = (e) => {
    e.preventDefault();
    if (inputText && onSubmit) {
      setInputText("");
      onSubmit(inputText);
    }
    setIsCustomInput(false);
  };

  return (
    <div className={styles.custominput}>
      {isCustomInput ? (
        <form
          className={`custominputedit ${editClass ? editClass : ""}`}
          onSubmit={submission}
        >
          <input
            type="text"
            value={inputText}
            placeholder={placeholder || text}
            onChange={(event) => setInputText(event.target.value)}
            autoFocus
          />
          <div className={styles.custominputeditfooter}>
            <button type="submit">{buttonText || "Add"}</button>
            <X onClick={() => setIsCustomInput(false)} className={styles.closeIcon} />
          </div>
        </form>
      ) : (
        <p
          className={`custominputdisplay ${displayClass ? displayClass : ""}`}
          onClick={() => setIsCustomInput(true)}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default CustomInput;
