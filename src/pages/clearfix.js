import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function ClearFix() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />

        <div id="container">
          <h1 className="content">the clearfix hack</h1>
          <p className="content">
            Here is a weird, bad thing that can sometimes happen when using
            floats:
          </p>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.content img {\nfloat: right;\n}\n.clear {\nclear: both;\n}\n"
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nt">img</span> <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">float</span>
                <span className="p">:</span> <span className="nb">right</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <div className="content">
            <div className="elem">
              <span className="label">&lt;div&gt;</span>
              <img src="/images/ilta.png" alt="An Image" />
              <p>
                Uh oh... this image is taller than the element containing it,
                and it's floated, so it's overflowing outside of its container!
              </p>
            </div>
          </div>
          <p className="content clear">
            Boo. There is a way to fix this, but it's ugly. It's called the{" "}
            <em>clearfix hack</em>.
          </p>
          <p className="content">Let's try adding this new CSS:</p>
          <style
            dangerouslySetInnerHTML={{
              __html: "\n.clearfix {\noverflow: auto;\n}\n"
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nc">.clearfix</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">overflow</span>
                <span className="p">:</span> <span className="nb">auto</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <p className="content">Now let's see what happens:</p>
          <div className="content">
            <div className="elem clearfix">
              <span className="label">&lt;div class="clearfix"&gt;</span>
              <img src="/images/ilta.png" alt="An Image" />
              <p>Much better!</p>
            </div>
          </div>
          <p className="content">
            This works for modern browsers. If you want to support IE6 you will
            want to add the following:
          </p>
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nc">.clearfix</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">overflow</span>
                <span className="p">:</span> <span className="nb">auto</span>
                <span className="p">;</span>
                {"\n"}
                <span className="py">zoom</span>
                <span className="p">:</span> <span className="m">1</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <p className="content">
            There are exotic browsers that may require extra attention.{" "}
            <a href="http://stackoverflow.com/questions/211383/which-method-of-clearfix-is-best">
              The world of clearfixing is pretty scary
            </a>
            , but this simple solution will work for the vast majority of
            browsers today.
          </p>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/clear">
            Bài trước
          </Link>
          <Link className="nav start" to="/float-layout">
            Bài sau
          </Link>
        </div>
        <footer>12 / 20</footer>
        <Footer />
      </div>
    </main>
  );
}

export default ClearFix;
