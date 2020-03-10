import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function Margin() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">margin: auto;</h1>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n  #main {\n    width: 600px;\n    margin: 0 auto;\n  }\n"
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nf">#main</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">600px</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
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
              Setting the <code>width</code> of a block-level element will
              prevent it from stretching out to the edges of its container to
              the left and right. Then, you can set the left and right margins
              to <code>auto</code> to horizontally center that element within
              its container. The element will take up the width you specify,
              then the remaining space will be split evenly between the two
              margins.
            </p>
            <p>
              The only problem occurs when the browser window is narrower than
              the width of your element. The browser resolves this by creating a
              horizontal scrollbar on the page. Let's improve the situation...
            </p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
        </div>
        <div className="nav-wrapper">
          <Link className="nav start" to="/display">
            Bài trước
          </Link>
          <Link className="nav start" to="/max-width">
            Bài sau
          </Link>
        </div>
        <footer>3 / 19</footer>

        <Footer />
      </div>
    </main>
  );
}

export default Margin;
