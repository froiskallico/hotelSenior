import React from "react";

import "./styles.css";

const CheckInput = ({ name, label }) => {
  return (
    <div className="input">
      <input type="checkbox" name={name} id={name} value="false" />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CheckInput;
