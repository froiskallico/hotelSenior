import React from 'react';

import './styles.css'

function DefaultButton({ title, callback }) {
  return (
  <button className="default">{title}</button>
  )
};

export default DefaultButton;
