import React, { useEffect, useState } from "react";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";

function Header() {
  return (
    <>
      <div id="logo">
        <Link className="home-link" to="/layout/">
          <img src= {"images/logo.png"}/>
          
          <span>Học dựng giao diện với CSS</span>
        </Link>
      </div>
      <div id="menu">        
        <Link className="home-link" to="/layout/">          
          Home
        </Link>        
        <Link className="home-link" to="/layout/toc">          
        Table of Contents
        </Link>
      </div>
    </>
  );
}

export default Header;
