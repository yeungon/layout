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
          <h1 style = {{display: "inline", fontWeight: "900", color: "#1a6a62"}}className = "font-futura"> DỰNG GIAO DIỆN VỚI CSS </h1>
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
