import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function InlineBlock() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">inline-block</h1>
          <p className="content">
            You can create a grid of boxes that fills the browser width and
            wraps nicely. This has been possible for a long time using{" "}
            <code>float</code>, but now with <code>inline-block</code> it's even
            easier. <code>inline-block</code> elements are like{" "}
            <code>inline</code> elements but they can have a width and height.
            Let's look at examples of both approaches.
          </p>
          <div className="content">
            <h2>The Hard Way (using float)</h2>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.box {\nfloat: left;\nwidth: 200px;\nheight: 100px;\nmargin: 1em;\n}\n.after-box {\nclear: left;\n}\n"
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
            <p>I'm floating!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="box elem">
            <span className="label">&lt;div class="box"&gt;</span>
            <p>I'm floating!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="box elem">
            <span className="label">&lt;div class="box"&gt;</span>
            <p>I'm floating!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="box elem">
            <span className="label">&lt;div class="box"&gt;</span>
            <p>I'm floating!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="box elem">
            <span className="label">&lt;div class="box"&gt;</span>
            <p>I'm floating!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="box elem">
            <span className="label">&lt;div class="box"&gt;</span>
            <p>I'm floating!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="box elem">
            <span className="label">&lt;div class="box"&gt;</span>
            <p>I'm floating!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="box elem">
            <span className="label">&lt;div class="box"&gt;</span>
            <p>I'm floating!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="box elem">
            <span className="label">&lt;div class="box"&gt;</span>
            <p>I'm floating!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="box elem">
            <span className="label">&lt;div class="box"&gt;</span>
            <p>I'm floating!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="box elem">
            <span className="label">&lt;div class="box"&gt;</span>
            <p>I'm floating!</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <section className="elem elem-green after-box">
            <span className="label">&lt;div class="after-box"&gt;</span>
            <p>I'm using clear so I don't float next to the above boxes.</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </section>
          <p />
          <div className="content">
            <h2>The Easy Way (using inline-block)</h2>
            <p>
              You can achieve the same effect using the{" "}
              <code>inline-block</code> value of the <code>display</code>{" "}
              property.
            </p>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n.box2 {\ndisplay: inline-block;\nwidth: 200px;\n<figure class="highlight"><pre><code class="language-css" data-lang="css"><span class="nc">.box2</span> <span class="p">{</span>\n<span class="nl">display</span><span class="p">:</span> <span class="n">inline-block</span><span class="p">;</span>\n<span class="nl">width</span><span class="p">:</span> <span class="m">200px</span><span class="p">;</span>\n<span class="nl">height</span><span class="p">:</span> <span class="m">100px</span><span class="p">;</span>\n<span class="nl">margin</span><span class="p">:</span> <span class="m">1em</span><span class="p">;</span>\n<span class="p">}</span></code></pre></figure>\n\n<p class="content">\n<!-- These are on same line because of how significant\nwhitespace works with inline-block. More info:\nhttp://learnlayout.com/inline-block-layout.html -->\n<div class="box2 elem"><span class="label">&lt;div class="box2"></span><p>I\'m an inline block!</p><span class="endlabel">&lt;/div></span></div><div class="box2 elem"><span class="label">&lt;div class="box2"></span><p>I\'m an inline block!</p><span class="endlabel">&lt;/div></span></div><div class="box2 elem"><span class="label">&lt;div class="box2"></span><p>I\'m an inline block!</p><span class="endlabel">&lt;/div></span></div><div class="box2 elem"><span class="label">&lt;div class="box2"></span><p>I\'m an inline block!</p><span class="endlabel">&lt;/div></span></div><div class="box2 elem"><span class="label">&lt;div class="box2"></span><p>I\'m an inline block!</p><span class="endlabel">&lt;/div></span></div><div class="box2 elem"><span class="label">&lt;div class="box2"></span><p>I\'m an inline block!</p><span class="endlabel">&lt;/div></span></div><div class="box2 elem"><span class="label">&lt;div class="box2"></span><p>I\'m an inline block!</p><span class="endlabel">&lt;/div></span></div><div class="box2 elem"><span class="label">&lt;div class="box2"></span><p>I\'m an inline block!</p><span class="endlabel">&lt;/div></span></div><div class="box2 elem"><span class="label">&lt;div class="box2"></span><p>I\'m an inline block!</p><span class="endlabel">&lt;/div></span></div><div class="box2 elem"><span class="label">&lt;div class="box2"></span><p>I\'m an inline block!</p><span class="endlabel">&lt;/div></span></div>\n\n<section class="elem elem-green">\n<span class="label">&lt;div></span>\n<p>\nI don\'t have to use <code>clear</code> in this case. Nice!\n</p>\n<span class="endlabel">&lt;/div></span>\n</section>\n</p>\n\n<p class="content">\nYou have to do extra work for <a href="http://blog.mozilla.org/webdev/2009/02/20/cross-browser-inline-block/">IE6 and IE7 support</a> of <code>inline-block</code>. Sometimes people talk about <code>inline-block</code> triggering something called <code>hasLayout</code>, though you only need to know about that to support old browsers. Follow the previous link about IE6 and IE7 support if you\'re curious to learn more. Otherwise, let\'s continue.\n</p>\n'
            }}
          />
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/media-queries">
            Bài trước
          </Link>
          <Link className="nav start" to="/inline-block-layout">
            Bài sau
          </Link>
        </div>
        <footer>16 / 20</footer>
        <Footer />
      </div>
    </main>
  );
}

export default InlineBlock;
