import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function Clear() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">clear</h1>
          <p className="content">
            The <code>clear</code> property is important for controlling the
            behavior of floats. Compare these two examples:
          </p>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.box {\nfloat: left;\nwidth: 200px;\nheight: 100px;\nmargin: 1em;\n}\n"
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-html" data-lang="html">
                <span className="nt">&lt;div</span>{" "}
                <span className="na">class=</span>
                <span className="s">"box"</span>
                <span className="nt">&gt;</span>...
                <span className="nt">&lt;/div&gt;</span>
                {"\n"}
                <span className="nt">&lt;section&gt;</span>...
                <span className="nt">&lt;/section&gt;</span>
              </code>
            </pre>
          </figure>
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nc">.box</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">float</span>
                <span className="p">:</span> <span className="nb">left</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">200px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">height</span>
                <span className="p">:</span> <span className="m">100px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">margin</span>
                <span className="p">:</span> <span className="m">1em</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <p className="content"></p>
          <div className="box elem">
            <span className="label">&lt;div class="box"&gt;</span>
            <p>I feel like I'm floating!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <section className="elem elem-green">
            <span className="label">&lt;section&gt;</span>
            <p>
              In this case, the <code>section</code> element is actually after
              the <code>div</code>. However, since the <code>div</code> is
              floated to the left, this is what happens: the text in the{" "}
              <code>section</code> is floated around the <code>div</code> and
              the <code>section</code> surrounds the whole thing. What if we
              wanted the <code>section</code> to actually appear after the
              floated element?
            </p>
            <span className="endlabel">&lt;/section&gt;</span>
          </section>
          <p />
          <style
            dangerouslySetInnerHTML={{
              __html: "\n.after-box {\nclear: left;\n}\n"
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nc">.box</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">float</span>
                <span className="p">:</span> <span className="nb">left</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">200px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">height</span>
                <span className="p">:</span> <span className="m">100px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">margin</span>
                <span className="p">:</span> <span className="m">1em</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="nc">.after-box</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">clear</span>
                <span className="p">:</span> <span className="nb">left</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <p className="content"></p>
          <div className="box elem">
            <span className="label">&lt;div class="box"&gt;</span>
            <p>I feel like I'm floating!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <section className="elem elem-green after-box">
            <span className="label">&lt;section class="after-box"&gt;</span>
            <p>
              Using <code>clear</code> we have now moved this section down below
              the floated <code>div</code>. You use the value <code>left</code>{" "}
              to clear elements floated to the left. You can also clear{" "}
              <code>right</code> and <code>both</code>.
            </p>
            <span className="endlabel">&lt;/section&gt;</span>
          </section>
          <p />
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/float">
            Bài trước
          </Link>
          <Link className="nav start" to="/clearfix">
            Bài sau
          </Link>
        </div>
        <footer>11 / 20</footer>
        <Footer />
      </div>
    </main>
  );
}

export default Clear;
