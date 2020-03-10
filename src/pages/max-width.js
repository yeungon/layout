import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function MaxWith() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">max-width</h1>
          <style
            dangerouslySetInnerHTML={{
              __html: "\n#main {\nmax-width: 600px;\nmargin: 0 auto;\n}\n"
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nf">#main</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">max-width</span>
                <span className="p">:</span> <span className="m">600px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">margin</span>
                <span className="p">:</span> <span className="m">0</span>{" "}
                <span className="nb">auto</span>
                <span className="p">;</span> {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <div id="main" className="elem">
            <span className="label">&lt;div id="main"&gt;</span>
            <p>
              Using <code>max-width</code> instead of <code>width</code> in this
              situation will improve the browser's handling of small windows.
              This is important when making a site usable on mobile. Resize this
              page to check it out!
            </p>
            <p>
              By the way, <code>max-width</code> is{" "}
              <a href="http://caniuse.com/#search=max-width">
                supported by all major browsers
              </a>{" "}
              including IE7+ so you shouldn't be afraid of using it.
            </p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/margin-auto">
            Bài trước
          </Link>
          <Link className="nav start" to="/box-model">
            Bài sau
          </Link>
        </div>
        <footer>4 / 19</footer>
        <Footer />
      </div>
    </main>
  );
}

export default MaxWith;
