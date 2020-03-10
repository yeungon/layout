import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function FloatLayout() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />

        <div id="container">
          <h1 className="content">float layout example</h1>
          <p className="content">
            It's very common to do entire layouts using <code>float</code>. Here
            is the same layout we did with <code>position</code> earlier, but
            using <code>float</code> instead.
          </p>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n.clearfix:after {\ncontent: ".";\ndisplay: block;\nheight: 0;\nclear: both;\nvisibility: hidden;\n}\nnav {\nfloat: left;\nwidth: 200px;\n}\nsection {\nmargin-left: 200px;\n}\n'
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nt">nav</span> <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">float</span>
                <span className="p">:</span> <span className="nb">left</span>
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
                <span className="nl">margin-left</span>
                <span className="p">:</span> <span className="m">200px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <div className="clearfix elem">
            <span className="label">&lt;div class="clearfix"&gt;</span>
            <nav className="elem elem-red">
              <span className="label">&lt;nav&gt;</span>
              <ul>
                <li>
                  <a href="float-layout.html">Home</a>
                </li>
                <li>
                  <a href="float-layout.html">Taco Menu</a>
                </li>
                <li>
                  <a href="float-layout.html">Draft List</a>
                </li>
                <li>
                  <a href="float-layout.html">Hours</a>
                </li>
                <li>
                  <a href="float-layout.html">Directions</a>
                </li>
                <li>
                  <a href="float-layout.html">Contact</a>
                </li>
              </ul>
              <span className="endlabel">&lt;/nav&gt;</span>
            </nav>
            <section className="elem elem-green">
              <span className="label">&lt;section&gt;</span>
              <p>
                This example works just like the last one. Notice we put a{" "}
                <code>clearfix</code> on the container. It's not needed in this
                example, but it would be if the <code>nav</code> was longer than
                the non-floated content.
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
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/layout/clearfix">
            Bài trước
          </Link>
          <Link className="nav start" to="/layout/percent">
            Bài sau
          </Link>
        </div>
        <footer>12 / 19</footer>
        <Footer />
      </div>
    </main>
  );
}

export default FloatLayout;
