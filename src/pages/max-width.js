import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function MaxWith() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">max-width</h1>
          <style
            dangerouslySetInnerHTML={{
              __html: "\n#main {\nmax-width: 600px;\nmargin: 0 auto;\n}\n"
            }}
          />
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
              Sử dụng <code>max-width</code> thay vì <code>width</code> trong tình huống này sẽ cải thiện khả năng xử lý của trình duyệt trên các màn hình kích thước nhỏ, rất hiệu quả trong việc thiết kế giao diện responsive. Bạn thử co màn hình chính trang này để thấy tác dụng của nó.
            </p>
            <p>
              Lưu ý rằng, <code>max-width</code> is{" "}
              <a href="http://caniuse.com/#search=max-width">
                được tất cả các trình duyệt hiện đại hỗ trợ,
              </a>{" "}
              bao gồm cả IE7+, do đó, bạn không cần phải lo lắng chuyện bất tương thích.
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

export default MaxWith;
