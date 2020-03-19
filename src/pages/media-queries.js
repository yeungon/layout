import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function MediaQueries() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">media queries</h1>
          <p className="content">
            "Responsive Design" is the strategy of making a site that "responds"
            to the browser and device that it is being shown on... by looking
            awesome no matter what.
          </p>
          <p className="content">
            Media queries are the most powerful tool for doing this. Let's take
            our layout that uses percent widths and have it display in one
            column when the browser is too small to fit the menu in the sidebar:
          </p>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n@media screen and (min-width:600px) {\nnav.elem {\nfloat: left;\nwidth: 25%;\n}\nsection {\nmargin-left: 25%;\n}\n}\n@media screen and (max-width:599px) {\nnav li {\ndisplay: inline;\n}\n}\n"
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="k">@media</span>{" "}
                <span className="n">screen</span> <span className="n">and</span>{" "}
                <span className="p">(</span>
                <span className="n">min-width</span>
                <span className="p">:</span>
                <span className="m">600px</span>
                <span className="p">)</span> <span className="p">{"{"}</span>
                {"\n"}
                <span className="nt">nav</span> <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">float</span>
                <span className="p">:</span> <span className="nb">left</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">25%</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="nt">section</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">margin-left</span>
                <span className="p">:</span> <span className="m">25%</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="k">@media</span>{" "}
                <span className="n">screen</span> <span className="n">and</span>{" "}
                <span className="p">(</span>
                <span className="n">max-width</span>
                <span className="p">:</span>
                <span className="m">599px</span>
                <span className="p">)</span> <span className="p">{"{"}</span>
                {"\n"}
                <span className="nt">
                  nav
                </span> <span className="nt">li</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">display</span>
                <span className="p">:</span> <span className="nb">inline</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <div className="container elem">
            <span className="label">&lt;div class="container"&gt;</span>
            <nav className="elem elem-red">
              <span className="label">&lt;nav&gt;</span>
              <ul>
                <li>
                  <a href="percent.html">Home</a>
                </li>
                <li>
                  <a href="percent.html">Taco Menu</a>
                </li>
                <li>
                  <a href="percent.html">Draft List</a>
                </li>
                <li>
                  <a href="percent.html">Hours</a>
                </li>
                <li>
                  <a href="percent.html">Directions</a>
                </li>
                <li>
                  <a href="percent.html">Contact</a>
                </li>
              </ul>
              <span className="endlabel">&lt;/nav&gt;</span>
            </nav>
            <section className="elem elem-green">
              <span className="label">&lt;section&gt;</span>
              <p>
                Now when you resize your browser it's even cooler than ever!
              </p>
              <span className="endlabel">&lt;/section&gt;</span>
            </section>
            <section className="elem elem-green ipsum">
              <span className="label">&lt;section&gt;</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
                Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula,
                facilisis sed ornare eu, lobortis in odio. Praesent convallis
                urna a lacus interdum ut hendrerit risus congue. Nunc sagittis
                dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
                sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui
                eget tellus gravida venenatis. Integer fringilla congue eros non
                fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
                purus. Mauris quis diam velit.
              </p>
              <span className="endlabel">&lt;/section&gt;</span>
            </section>
          </div>
          <p className="content">
            Tada! Now our layout looks great even on mobile browsers. Here are{" "}
            <a href="http://mediaqueri.es/">
              some popular sites that use media queries this way
            </a>
            . There is a whole lot more you can detect than{" "}
            <code>min-width</code> and <code>max-width</code>: check out{" "}
            <a href="https://developer.mozilla.org/en-US/docs/CSS/Media_queries">
              the MDN documentation
            </a>{" "}
            to learn more.
          </p>
          <div className="content">
            <h2>extra credit</h2>
            <p>
              You can make your layout look even better on mobile using{" "}
              <a href="http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/">
                meta viewport
              </a>
              .
            </p>
          </div>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/percent">
            Bài trước
          </Link>
          <Link className="nav start" to="/inline-block">
            Bài sau
          </Link>
        </div>
        <footer>15 / 20</footer>
        <Footer />
      </div>
    </main>
  );
}

export default MediaQueries;
