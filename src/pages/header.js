import React, { useEffect, useState } from "react";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";

function Header() {
  return (
    <>
      <div id="logo">
        <Link className="home-link" to="/">
          <img src={"/logo.png"}/>
          <h2 className = "font-futura">Học dựng giao diện với CSS</h2>
        </Link>
      </div>
      <div id="menu">        
        <Link className="home-link" to="/">          
          Trang chính
        </Link>        
        <Link className="home-link" to="/toc">          
        Mục lục
        </Link>
      </div>
    </>
  );
}

export default Header;
