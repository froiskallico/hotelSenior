import React from "react";

import "./styles.css";

const CheckInput = ({ name, id, value, label, checked, onChange }) => {
  function handChange() {
    onChange();
  }

  return (
    <>
      <input type="radio" name={name} id={id} value={value} checked={checked} onChange={handChange} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default CheckInput;
