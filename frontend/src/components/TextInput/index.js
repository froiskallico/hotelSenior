import React from "react";

import "./styles.css";

const TextInput = ({ name, label }) => {
  return (
    <div className="input textInput">
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} required />
    </div>
  );
};

export default TextInput;
