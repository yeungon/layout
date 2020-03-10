import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function Percent() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />

        <div id="container">
          <h1 className="content">percent width</h1>
          <p className="content">
            Percent is a measurement unit relative to the containing block. It's
            great for images: here we make an image that is always 50% the width
            of its container. Try shrinking down the page to see what happens!
          </p>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n.clearfix:after {\ncontent: ".";\ndisplay: block;\nheight: 0;\nclear: both;\nvisibility: hidden;\n}\narticle img {\nfloat: right;\nwidth: 50%;\n}\n'
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nt">article</span>{" "}
                <span className="nt">img</span> <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">float</span>
                <span className="p">:</span> <span className="nb">right</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">50%</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <article className="elem elem-green content clearfix">
            <span className="label">&lt;article class="clearfix"&gt;</span>
            <img src="images/ilta.png" alt="an image" />
            <p>
              You could even use <code>min-width</code> and{" "}
              <code>max-width</code> to limit how big or small the image can
              get!
            </p>
            <span className="endlabel">&lt;/article&gt;</span>
          </article>
          <div className="content">
            <h2>percent width layout</h2>
          </div>
          <p className="content">
            You can use percent for layout, but this can require more work. In
            this example, the <code>nav</code> content starts to wrap in a
            displeasing way when the window is too narrow. It comes down to what
            works for your content.
          </p>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\nnav.elem {\nfloat: left;\nwidth: 25%;\n}\nsection {\nmargin-left: 25%;\n}\n"
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
                When this layout is too narrow, the <code>nav</code> gets
                squished. Worse, you can't use <code>min-width</code> on the nav
                to fix it, because the right column wouldn't respect it.
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
          <Link className="nav start" to="/float-layout">
            Bài trước
          </Link>
          <Link className="nav start" to="/media-queries">
            Bài sau
          </Link>
        </div>
        <footer>13 / 19</footer>
        <Footer />
      </div>
    </main>
  );
}

export default Percent;
