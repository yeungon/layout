import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby"
import Header from "./header";
import Footer from "./footer";

function Index() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
      <Header/>        
        <div id="container">
          <div id="about">
            <p>
              Trang web này sẽ dạy bạn sử dụng CSS cơ bản để dựng giao diện web.
            </p>
            <p>
              I assume you already know what selectors, properties, and values
              are. And you probably know a thing or two about layout, though it
              may still be a rage-provoking activity for you. If you want to
              learn HTML and CSS from the beginning, you should check out{" "}
              <a href="http://learn.shayhowe.com/html-css/">this tutorial</a>.
              Otherwise, let's see if we can save you some fury on your next
              project.
            </p>
          </div>
          <div className="nav-wrapper">            
              <Link className="nav start" to="/nolayout">Bắt đầu học</Link>            
          </div>          
        </div>
        <Footer/>
      </div>
    </main>
  );
}

export default Index;
