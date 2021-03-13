import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function CenterText() {
  return (
    <main>
      <Helmet>
        <title>Center Text </title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">Đặt text ở giữa ngang và dọc</h1>
          <style
            dangerouslySetInnerHTML={{
              __html: "\n#main {\nmax-width: 600px;\nmargin: 0 auto;\n}\n"
            }}
          />
          <p className="content">
             Canh lề giữa là một kĩ thuật không quá phức tạp. Hiện có nhiều cách để bạn đạt được điều mình mong muốn. Chúng ta sẽ cùng review những phương pháp giúp đặt text vào giữa văn bản hoặc vào giữa một element khác.               
            </p>

          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nf">#main</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">max-width</span>
                <span className="p">:</span> <span className="m">600px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">margin</span>
                <span className="p">:</span> <span className="m">0</span>{" "}
                <span className="nb">auto</span>
                <span className="p">;</span> {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <div id="main" className="elem">
            <span className="label">&lt;div id="main"&gt;</span>
            <p>
              Using <code>max-width</code> instead of <code>width</code> in this
              situation will improve the browser's handling of small windows.
              This is important when making a site usable on mobile. Resize this
              page to check it out!

              https://dev.to/palashmon/center-text-vertically-and-horizontally-in-css-42b1?fbclid=IwAR0A7p33n74ZnvKnbSuIeDtv-5ltj9KORPO-Wm1I_TiXyoKfEnKT6-jJrnA
            </p>
            <p>
              By the way, <code>max-width</code> is{" "}
              <a href="http://caniuse.com/#search=max-width">
                supported by all major browsers
              </a>{" "}
              including IE7+ so you shouldn't be afraid of using it.
            </p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/margin-auto">
            Bài trước
          </Link>
          <Link className="nav start" to="/box-model">
            Bài sau
          </Link>
        </div>
        <footer>5 / 19</footer>
        <Footer />
      </div>
    </main>
  );
}

export default CenterText;
