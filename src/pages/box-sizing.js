import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function BoxSizing() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />

        <div id="container">
          <h1 className="content">box-sizing</h1>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.simple {\nwidth: 500px;\nmargin: 20px auto;\n-webkit-box-sizing: border-box;\n-moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.fancy {\nwidth: 500px;\nmargin: 20px auto;\npadding: 50px;\nborder: solid #6AC5AC 10px;\n-webkit-box-sizing: border-box;\n-moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n"
            }}
          />
          <p className="content">
            The original box model behavior was eventually considered
            unintuitive, so a new CSS property called <code>box-sizing</code>{" "}
            was created. When you set <code>box-sizing: border-box;</code> on an
            element, the padding and border of that element no longer increase
            its width. Here is the same example as the previous page, but with{" "}
            <code>box-sizing: border-box;</code> on both elements:
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
                <span className="nl">-webkit-box-sizing</span>
                <span className="p">:</span>{" "}
                <span className="n">border-box</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">-moz-box-sizing</span>
                <span className="p">:</span>{" "}
                <span className="n">border-box</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">box-sizing</span>
                <span className="p">:</span>{" "}
                <span className="n">border-box</span>
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
                <span className="nl">border</span>
                <span className="p">
                  :
                </span> <span className="nb">solid</span>{" "}
                <span className="no">blue</span> <span className="m">10px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">-webkit-box-sizing</span>
                <span className="p">:</span>{" "}
                <span className="n">border-box</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">-moz-box-sizing</span>
                <span className="p">:</span>{" "}
                <span className="n">border-box</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">box-sizing</span>
                <span className="p">:</span>{" "}
                <span className="n">border-box</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <div className="simple elem">
            <span className="label">&lt;div class="simple"&gt;</span>
            <p>We're the same size now!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="fancy elem">
            <span className="label">&lt;div class="fancy"&gt;</span>
            <p>Hooray!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <p className="content">
            Since this is so much better, some authors want all elements on all
            their pages to always work this way. Such authors put the following
            CSS on their pages:
          </p>
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="o">*</span> <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">-webkit-box-sizing</span>
                <span className="p">:</span>{" "}
                <span className="n">border-box</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">-moz-box-sizing</span>
                <span className="p">:</span>{" "}
                <span className="n">border-box</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">box-sizing</span>
                <span className="p">:</span>{" "}
                <span className="n">border-box</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <p className="content">
            This ensures that all elements are always sized in this more
            intuitive way.
          </p>
          <p className="content">
            Since <code>box-sizing</code> is pretty new, you should use the{" "}
            <code>-webkit-</code> and <code>-moz-</code> prefixes for now, as I
            have in these examples. This technique enables experimental features
            in specific browsers. Also, keep in mind that this one is{" "}
            <a href="http://caniuse.com/#search=box-sizing">IE8+</a>.
          </p>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/box-model">
            Bài trước
          </Link>
          <Link className="nav start" to="/position">
            Bài sau
          </Link>
        </div>
        <footer>7 / 20</footer>
        <Footer />
      </div>
    </main>
  );
}

export default BoxSizing;
