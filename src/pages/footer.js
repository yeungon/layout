import React, { useEffect, useState } from "react";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";

function Footer() {
  return (
    <>
      <div id="share">
        <li>          
        </li>
        <li>
          <div className="g-plusone" data-size="medium" />
        </li>
        <li id="license">
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by/3.0/deed.en_US"
          >
            <img
              alt="Creative Commons License"
              style={{ borderWidth: 0 }}
              src="http://i.creativecommons.org/l/by/3.0/80x15.png"
            />
          </a>
        </li>
      </div>
    </>
  );
}

export default Footer;
