import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function PositionExample() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />

        <div>
          <div id="container">
            <h1 className="content">position example</h1>
            <p className="content">
              This position stuff might make a little more sense in a practical
              example. Below is a realistic page layout.
            </p>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n.container {\nposition: relative;\n}\nnav.elem {\nposition: absolute;\nleft: 0px;\nwidth: 200px;\n}\nsection {\n/* position is static by default */\nmargin-left: 200px;\n}\nfooter.elem {\nposition: fixed;\nbottom: 0;\nleft: 0;\nheight: 90px;\nbackground-color: white;\nwidth: 100%;\nmargin: 0;\nz-index: 1;\n}\nbody {\nmargin-bottom: 120px;\n}\n"
              }}
            />
            <figure className="highlight">
              <pre>
                <code className="language-css" data-lang="css">
                  <span className="nc">.container</span>{" "}
                  <span className="p">{"{"}</span>
                  {"\n"}
                  <span className="nl">position</span>
                  <span className="p">:</span>{" "}
                  <span className="nb">relative</span>
                  <span className="p">;</span>
                  {"\n"}
                  <span className="p">{"}"}</span>
                  {"\n"}
                  <span className="nt">nav</span>{" "}
                  <span className="p">{"{"}</span>
                  {"\n"}
                  <span className="nl">position</span>
                  <span className="p">:</span>{" "}
                  <span className="nb">absolute</span>
                  <span className="p">;</span>
                  {"\n"}
                  <span className="nl">left</span>
                  <span className="p">:</span> <span className="m">0px</span>
                  <span className="p">;</span>
                  {"\n"}
                  <span className="nl">width</span>
                  <span className="p">:</span> <span className="m">200px</span>
                  <span className="p">;</span>
                  {"\n"}
                  <span className="p">{"}"}</span>
                  {"\n"}
                  <span className="nt">section</span>{" "}
                  <span className="p">{"{"}</span>
                  {"\n"}
                  <span className="c">/* position is static by default */</span>
                  {"\n"}
                  <span className="nl">margin-left</span>
                  <span className="p">:</span> <span className="m">200px</span>
                  <span className="p">;</span>
                  {"\n"}
                  <span className="p">{"}"}</span>
                  {"\n"}
                  <span className="nt">footer</span>{" "}
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
                  <span className="nl">left</span>
                  <span className="p">:</span> <span className="m">0</span>
                  <span className="p">;</span>
                  {"\n"}
                  <span className="nl">height</span>
                  <span className="p">:</span> <span className="m">70px</span>
                  <span className="p">;</span>
                  {"\n"}
                  <span className="nl">background-color</span>
                  <span className="p">:</span> <span className="no">white</span>
                  <span className="p">;</span>
                  {"\n"}
                  <span className="nl">width</span>
                  <span className="p">:</span> <span className="m">100%</span>
                  <span className="p">;</span>
                  {"\n"}
                  <span className="p">{"}"}</span>
                  {"\n"}
                  <span className="nt">body</span>{" "}
                  <span className="p">{"{"}</span>
                  {"\n"}
                  <span className="nl">margin-bottom</span>
                  <span className="p">:</span> <span className="m">120px</span>
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
                    <a href="position-example.html">Home</a>
                  </li>
                  <li>
                    <a href="position-example.html">Taco Menu</a>
                  </li>
                  <li>
                    <a href="position-example.html">Draft List</a>
                  </li>
                  <li>
                    <a href="position-example.html">Hours</a>
                  </li>
                  <li>
                    <a href="position-example.html">Directions</a>
                  </li>
                  <li>
                    <a href="position-example.html">Contact</a>
                  </li>
                </ul>
                <span className="endlabel">&lt;/nav&gt;</span>
              </nav>
              <section className="elem elem-green">
                <span className="label">&lt;section&gt;</span>
                <p>
                  The <code>margin-left</code> style for <code>section</code>s
                  makes sure there is room for the <code>nav</code>. Otherwise
                  the absolute and static elements would overlap
                </p>
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
              <section className="elem elem-green">
                <span className="label">&lt;section&gt;</span>
                <p>
                  Notice what happens when you resize your browser. It works
                  nicely!
                </p>
                <span className="endlabel">&lt;/section&gt;</span>
              </section>
              <footer className="elem elem-orange">
                <span className="label">&lt;footer&gt;</span>
                <p>
                  If you use a fixed header or footer, make sure there is room
                  for it! I put a <code>margin-bottom</code> on the{" "}
                  <code>body</code>.
                </p>
                <span className="endlabel">&lt;/footer&gt;</span>
              </footer>
            </div>
            <p className="content">
              This example works because the container is taller than the nav.
              If it wasn't, the nav would overflow outside of its container. In
              the coming pages we'll discuss other layout techniques that have
              different pros and cons.
            </p>
            p&gt;
            <span className="endlabel">&lt;/footer&gt;</span>
          </div>
          <p className="content">
            This example works because the container is taller than the nav. If
            it wasn't, the nav would overflow outside of its container. In the
            coming pages we'll discuss other layout techniques that have
            different pros and cons.
          </p>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/position">
            Bài trước
          </Link>
          <Link className="nav start" to="/float">
            Bài sau
          </Link>
        </div>
        <footer>9 / 20</footer>
        <Footer />
      </div>
    </main>
  );
}

export default PositionExample;
