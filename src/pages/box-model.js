import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function BoxModel() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />

        <div id="container">
          <h1 className="content">the box model</h1>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.simple {\nwidth: 500px;\nmargin: 20px auto;\n-webkit-box-sizing: content-box;\n-moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\n\n.fancy {\nwidth: 500px;\nmargin: 20px auto;\npadding: 50px;\nborder-width: 10px;\n-webkit-box-sizing: content-box;\n-moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\n"
            }}
          />
          <p className="content">
            While we're talking about width, we should talk about width's big
            caveat: the <em>box model</em>. When you set the width of an
            element, the element can actually appear bigger than what you set:
            the element's border and padding will stretch out the element beyond
            the specified width. Look at the following example, where two
            elements with the same width value end up different sizes in the
            result.
          </p>
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nc">.simple</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">500px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">margin</span>
                <span className="p">
                  :
                </span> <span className="m">20px</span>{" "}
                <span className="nb">auto</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                {"\n"}
                <span className="nc">.fancy</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">500px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">margin</span>
                <span className="p">
                  :
                </span> <span className="m">20px</span>{" "}
                <span className="nb">auto</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">padding</span>
                <span className="p">:</span> <span className="m">50px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">border-width</span>
                <span className="p">:</span> <span className="m">10px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <div className="simple elem">
            <span className="label">&lt;div class="simple"&gt;</span>
            <p>I'm smaller...</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="fancy elem">
            <span className="label">&lt;div class="fancy"&gt;</span>
            <p>And I'm bigger!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <p className="content">
            For generations, the solution to this problem has been extra math.
            CSS authors have always just written a smaller width value than what
            they wanted, subtracting out the padding and border. Thankfully, you
            don't have to do that anymore...
          </p>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/max-width">
            Bài trước
          </Link>
          <Link className="nav start" to="/box-sizing">
            Bài sau
          </Link>
        </div>
        <footer>6 / 20</footer>
        <Footer />
      </div>
    </main>
  );
}

export default BoxModel;
