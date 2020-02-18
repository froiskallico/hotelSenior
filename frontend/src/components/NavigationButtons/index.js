import React from "react";

import { MdArrowBack, MdArrowForward } from "react-icons/md";

import './styles.css';

const Previous = () => {
  return (
    <button className="pageNavigation">
      <MdArrowBack className="icon" />
      Previous
    </button>
  );
};

const Next = () => {
  return (
    <button className="pageNavigation">
      Next
      <MdArrowForward className="icon" />
    </button>
  );
};

export { Previous, Next };
