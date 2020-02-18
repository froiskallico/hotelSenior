import React from 'react';
import { MdMenu } from "react-icons/md";

import logoSenior from "../../assets/logoSenior.svg";

import './styles.css';

function TopBar() {
  return (
    <>
      <header id="topbar">
        <img id="logoSenior" src={logoSenior} alt="Senior" />
        <MdMenu id="MenuIcon" />
      </header>
    </>
  );
}

export default TopBar;