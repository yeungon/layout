import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function Float() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">float</h1>
          <p className="content">
            Another CSS property used for layout is <code>float</code>. Float is
            intended for wrapping text around images, like this:
          </p>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.content img {\nmargin: 0 0 1em 1em;\nfloat: right;\n}\n"
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
                <span className="nl">margin</span>
                <span className="p">:</span> <span className="m">0</span>{" "}
                <span className="m">0</span> <span className="m">1em</span>{" "}
                <span className="m">1em</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <p className="content ipsum">
            <img src="/images/ilta.png" alt="An Image" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
            scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
            nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue
            ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in
            odio. Praesent convallis urna a lacus interdum ut hendrerit risus
            congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim
            ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.
            Donec vitae dui eget tellus gravida venenatis. Integer fringilla
            congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
            Cras ac leo purus. Mauris quis diam velit.
          </p>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/position-example">
            Bài trước
          </Link>
          <Link className="nav start" to="/clear">
            Bài sau
          </Link>
        </div>
        <footer>9 / 19</footer>
        <Footer />
      </div>
    </main>
  );
}

export default Float;
