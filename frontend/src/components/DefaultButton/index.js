import React from 'react';

import './styles.css'

function DefaultButton({ title, onClick }) {
  function handClick() {
    onClick()
  }

  return (
  <button className="default" onClick={handClick}>{title}</button>
  )
};

export default DefaultButton;
