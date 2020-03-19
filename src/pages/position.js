import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function Position() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">position</h1>
          <p className="content">
            In order to make more complex layouts, we need to discuss the{" "}
            <code>position</code> property. It has a bunch of possible values,
            and their names make no sense and are impossible to remember. Let's
            go through them one by one, but maybe you should bookmark this page
            too.
          </p>
          <h2 className="content">static</h2>
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nc">.static</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">position</span>
                <span className="p">:</span> <span className="nb">static</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <div className="elem">
            <span className="label">&lt;div class="static"&gt;</span>
            <p>
              <code>static</code> is the default value. An element with{" "}
              <code>position: static;</code> is not positioned in any special
              way. A static element is said to be <em>not positioned</em> and an
              element with its position set to anything else is said to be{" "}
              <em>positioned</em>.
            </p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <h2 className="content">relative</h2>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.relative1 {\nposition: relative;\n}\n.relative2 {\nposition: relative;\ntop: -20px;\nleft: 20px;\nbackground-color: white;\nwidth: 500px;\n}\n"
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nc">.relative1</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">position</span>
                <span className="p">:</span>{" "}
                <span className="nb">relative</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="nc">.relative2</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">position</span>
                <span className="p">:</span>{" "}
                <span className="nb">relative</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">top</span>
                <span className="p">:</span> <span className="m">-20px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">left</span>
                <span className="p">:</span> <span className="m">20px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">background-color</span>
                <span className="p">:</span> <span className="no">white</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">500px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <div className="relative1 elem">
            <span className="label">&lt;div class="relative1"&gt;</span>
            <p>
              <code>relative</code> behaves the same as <code>static</code>{" "}
              unless you add some extra properties.
            </p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="relative2 elem elem-red">
            <span className="label">&lt;div class="relative2"&gt;</span>
            <p>
              Setting the <code>top</code>, <code>right</code>,{" "}
              <code>bottom</code>, and <code>left</code> properties of a
              relatively-positioned element will cause it to be adjusted away
              from its normal position. Other content will not be adjusted to
              fit into any gap left by the element.
            </p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <h2 className="content">fixed</h2>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.fixed {\nposition: fixed;\nbottom: 0;\nright: 0;\nwidth: 200px;\nbackground-color: white;\nz-index: 9999;\n}\n"
            }}
          />
          <div className="fixed elem elem-green">
            <span className="label">&lt;div class="fixed"&gt;</span>
            <p>Hello! Don't pay attention to me yet.</p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <p className="content">
            A fixed element is positioned relative to the viewport, which means
            it always stays in the same place even if the page is scrolled. As
            with <code>relative</code>, the <code>top</code>, <code>right</code>
            , <code>bottom</code>, and <code>left</code> properties are used.
          </p>
          <p className="content">
            I'm sure you've noticed that fixed element in the lower-right hand
            corner of the page. I'm giving you permission to pay attention to it
            now. Here is the CSS that puts it there:
          </p>
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nc">.fixed</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">position</span>
                <span className="p">:</span> <span className="nb">fixed</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">bottom</span>
                <span className="p">:</span> <span className="m">0</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">right</span>
                <span className="p">:</span> <span className="m">0</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">200px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">background-color</span>
                <span className="p">:</span> <span className="no">white</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <p className="content">
            A fixed element does not leave a gap in the page where it would
            normally have been located.
          </p>
          <p className="content">
            Mobile browsers have surprisingly shaky support for fixed.{" "}
            <a href="http://bradfrostweb.com/blog/mobile/fixed-position/">
              Learn more about the situation here
            </a>
            .
          </p>
          <h2 className="content">absolute</h2>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.relative {\nposition: relative;\nwidth: 600px;\nheight: 400px;\n}\n.absolute {\nposition: absolute;\ntop: 120px;\nright: 0;\nwidth: 300px;\nheight: 200px;\n}\n"
            }}
          />
          <p className="content">
            <code>absolute</code> is the trickiest position value.{" "}
            <code>absolute</code> behaves like <code>fixed</code> except
            relative to <em>the nearest positioned ancestor</em> instead of
            relative to the viewport. If an absolutely-positioned element has no
            positioned ancestors, it uses the document body, and still moves
            along with page scrolling. Remember, a "positioned" element is one
            whose position is anything except <code>static</code>.
          </p>
          <p className="content">Here is a simple example:</p>
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nc">.relative</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">position</span>
                <span className="p">:</span>{" "}
                <span className="nb">relative</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">600px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">height</span>
                <span className="p">:</span> <span className="m">400px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="nc">.absolute</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">position</span>
                <span className="p">:</span>{" "}
                <span className="nb">absolute</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">top</span>
                <span className="p">:</span> <span className="m">120px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">right</span>
                <span className="p">:</span> <span className="m">0</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">300px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">height</span>
                <span className="p">:</span> <span className="m">200px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <div className="relative elem">
            <span className="label">&lt;div class="relative"&gt;</span>
            <p>
              This element is relatively-positioned. If this element was{" "}
              <code>position: static;</code> its absolutely-positioned child
              would escape and would be positioned relative to the document
              body.
            </p>
            <div className="absolute elem elem-red">
              <span className="label">&lt;div class="absolute"&gt;</span>
              <p>
                This element is absolutely-positioned. It's positioned relative
                to its parent.
              </p>
              <span className="endlabel">&lt;/div&gt;</span>
            </div>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <p className="content">
            This stuff is tricky, but it's essential to creating great CSS
            layouts. On the next page we'll use <code>position</code> in a more
            practical example.
          </p>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/box-sizing">
            Bài trước
          </Link>
          <Link className="nav start" to="/position-example">
            Bài sau
          </Link>
        </div>
        <footer>8 / 20</footer>
        <Footer />
      </div>
    </main>
  );
}

export default Position;
