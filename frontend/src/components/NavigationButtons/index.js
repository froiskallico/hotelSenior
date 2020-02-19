import React from "react";

import { MdArrowBack, MdArrowForward } from "react-icons/md";

import './styles.css';

const Previous = ({ onClick, currentPage }) => {
  function updatePageNumber() {
    currentPage > 0 ? onClick(currentPage - 1) : onClick(0)
  }

  return (
    <button className="pageNavigation" onClick={updatePageNumber} >
      <MdArrowBack className="icon" />
      Previous
    </button>
  );
};

const Next = ({ onClick, currentPage }) => {

  function updatePageNumber() {
    onClick(currentPage + 1)
  }

  return (
    <button className="pageNavigation" onClick={updatePageNumber}>
      Next
      <MdArrowForward className="icon" />
    </button>
  );
};

export { Previous, Next };
