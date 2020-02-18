import React from "react";

import "./styles.css";

const CheckInput = ({ name, id, value, label, checked }) => {
  return (
    <>
      <input type="radio" name={name} id={id} value={value}/>
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default CheckInput;
