import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function noLayout() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">no layout</h1>
          <p>
            Having no layout whatsover is almost ok if all you want is one big
            column of content. However, if a user makes the browser window
            really wide, it gets kind of annoying to read: after each line your
            eyes have a long distance to travel right-to-left to the next line.
            Try resizing your browser to see what I mean!
          </p>
          <p>
            Before we fix this problem, let's make sure we're clear on the very
            important <code>display</code> property.
          </p>
          <div className="nav-wrapper">
            <Link className="nav start" to="/layout">
              Bài trước
            </Link>
            <Link className="nav start" to="/layout/display">
              Bài sau
            </Link>
          </div>          
          <footer>1 / 19</footer>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default noLayout;
