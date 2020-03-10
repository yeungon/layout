import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function Column() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">column</h1>
          <p className="content">
            There is a new set of CSS properties that let you easily make
            multi-column text. Have a look:
          </p>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.three-column {\npadding: 1em;\n-moz-column-count: 3;\n-moz-column-gap: 1em;\n-webkit-column-count: 3;\n-webkit-column-gap: 1em;\ncolumn-count: 3;\ncolumn-gap: 1em;\n}\n"
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nc">.three-column</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">padding</span>
                <span className="p">:</span> <span className="m">1em</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">-moz-column-count</span>
                <span className="p">:</span> <span className="m">3</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">-moz-column-gap</span>
                <span className="p">:</span> <span className="m">1em</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">-webkit-column-count</span>
                <span className="p">:</span> <span className="m">3</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">-webkit-column-gap</span>
                <span className="p">:</span> <span className="m">1em</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">column-count</span>
                <span className="p">:</span> <span className="m">3</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">column-gap</span>
                <span className="p">:</span> <span className="m">1em</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <div className="content">
            <section className="elem three-column ipsum">
              <span className="label">&lt;div class="three-column"&gt;</span>
              <div>
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
              </div>
              <span className="endlabel">&lt;/div&gt;</span>
            </section>
          </div>
          <p className="content">
            CSS columns are very new, so you need to use the prefixes, and it
            won't work{" "}
            <a href="http://caniuse.com/#search=column">
              through IE9 or in Opera Mini
            </a>
            . There are some more column-related properties, so{" "}
            <a href="http://www.quirksmode.org/css/multicolumn.html">
              click here to read more
            </a>
            . Otherwise, off to the next topic.
          </p>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/inline-block-layout">
            Bài trước
          </Link>
          <Link className="nav start" to="/flexbox">
            Bài sau
          </Link>
        </div>
        <footer>17 / 19</footer>
        <Footer />
      </div>
    </main>
  );
}

export default Column;
