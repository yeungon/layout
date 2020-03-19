import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function InlineBlockLayout() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">inline-block layout</h1>
          <div className="content">
            <p>
              You can also use <code>inline-block</code> for layouts. There are
              a few things to keep in mind:
            </p>
            <ul>
              <li>
                <code>inline-block</code> elements are affected by the{" "}
                <code>vertical-align</code> property, which you probably want
                set to <code>top</code>.
              </li>
              <li>You need to set the width of each column</li>
              <li>
                There will be a gap between the columns if there is any
                whitespace between them in the HTML
              </li>
            </ul>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n  nav.elem {\n    display: inline-block;\n    vertical-align: top;\n    width: 25%;\n  }\n  .column {\n    display: inline-block;\n    vertical-align: top;\n    width: 75%;\n  }\n"
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nt">nav</span> <span className="p">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="nl">display</span>
                <span className="p">:</span>{" "}
                <span className="n">inline-block</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">vertical-align</span>
                <span className="p">:</span> <span className="nb">top</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">25%</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="nc">.column</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="nl">display</span>
                <span className="p">:</span>{" "}
                <span className="n">inline-block</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">vertical-align</span>
                <span className="p">:</span> <span className="nb">top</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">75%</span>
                <span className="p">;</span>
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
                  <a href="inline-block-layout.html">Home</a>
                </li>
                <li>
                  <a href="inline-block-layout.html">Taco Menu</a>
                </li>
                <li>
                  <a href="inline-block-layout.html">Draft List</a>
                </li>
                <li>
                  <a href="inline-block-layout.html">Hours</a>
                </li>
                <li>
                  <a href="inline-block-layout.html">Directions</a>
                </li>
                <li>
                  <a href="inline-block-layout.html">Contact</a>
                </li>
              </ul>
              <span className="endlabel">&lt;/nav&gt;</span>
            </nav>
            <div className="elem elem-red column">
              <span className="label">&lt;div class="column"&gt;</span>
              <section className="elem elem-green">
                <span className="label">&lt;section&gt;</span>
                <p>Tada!</p>
                <span className="endlabel">&lt;/section&gt;</span>
              </section>
              <section className="elem elem-green ipsum">
                <span className="label">&lt;section&gt;</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                  egestas odio, vitae scelerisque enim ligula venenatis dolor.
                  Maecenas nisl est, ultrices nec congue eget, auctor vitae
                  massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
                  ligula, facilisis sed ornare eu, lobortis in odio. Praesent
                  convallis urna a lacus interdum ut hendrerit risus congue.
                  Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
                  In at libero sed nunc venenatis imperdiet sed ornare turpis.
                  Donec vitae dui eget tellus gravida venenatis. Integer
                  fringilla congue eros non fermentum. Sed dapibus pulvinar nibh
                  tempor porta. Cras ac leo purus. Mauris quis diam velit.
                </p>
                <span className="endlabel">&lt;/section&gt;</span>
              </section>
              <span className="endlabel">&lt;/div&gt;</span>
            </div>
          </div>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/inline-block">
            Bài trước
          </Link>
          <Link className="nav start" to="/column">
            Bài sau
          </Link>
        </div>
        <footer>17 / 20</footer>
        <Footer />
      </div>
    </main>
  );
}

export default InlineBlockLayout;
