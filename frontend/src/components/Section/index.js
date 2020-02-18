import React from 'react';

import './styles.css';

const Section = (props) => {
  return (
    <>
    <div className="section">
          <div className="sectionHeader">
            <h1>{props.title}</h1>
          </div>

          <div className="sectionBody">
            {props.children}
          </div>
        </div>
    </>
  )
};

export default Section;
