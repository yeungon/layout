import React from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function Frameworks() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">css frameworks</h1>
          <p className="content">
            Because CSS layout is so tricky, there are CSS frameworks out there
            to help make it easier. Here are a few if you want to check them
            out. Using a framework is only a good idea if the framework really
            does what you need your site to do. They're no replacement for
            knowing how CSS works.
          </p>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n#logos {\ntext-align: center;\nmargin: 0 auto;\npadding: 0 50px;\nmax-width: 1000px;\n}\n#logos img {\nmargin: 5px;\nborder: solid white 5px;\nvertical-align: middle;\nposition: relative;\n}\n#logos img:hover {\ntop: 1px;\n}\n#logos img:active {\ntop: 2px;\n}\n#logos a:hover {\nbackground-color: transparent;\n}\n"
            }}
          />
          <div id="logos">
            <a href="http://www.blueprintcss.org/">
              <img src="/blueprint.jpg" alt="blueprint" />
            </a>
            <a href="http://www.unsemantic.com">
              <img src="/unsemantic.png" alt="unsemantic" />
            </a>
            <a href="http://bluetrip.org/">
              <img src="/bluetrip.jpg" alt="bluetrip" />
            </a>
            <a href="http://twitter.github.com/bootstrap/">
              <img src="/bootstrap.jpg" alt="bootstrap" />
            </a>
            <a href="http://susy.oddbird.net/">
              <img src="/susy.jpg" alt="susy" />
            </a>
            <a href="http://foundation.zurb.com/">
              <img src="/foundation.png" alt="foundation" />
            </a>
            <a href="http://imperavi.com/kube/">
              <img src="/kube.png" alt="kube" />
            </a>
            <a href="http://groundworkcss.github.com/">
              <img src="/groundwork.gif" alt="groundwork" />
            </a>
            <a href="http://semantic-ui.com">
              <img src="/semantic_ui.png" alt="semantic ui" />
            </a>
            <a href="http://purecss.io/">
              <img src="/logo_pure.png" alt="Purecss" />
            </a>
          </div>
          <p className="content">
            That's it! If you have any feedback on this site, please{" "}
            <a href="https://twitter.com/intent/tweet?source=webclient&text=%40_gsmith">
              let me know on Twitter
            </a>
            !
          </p>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/flexbox">
            Bài trước
          </Link>
          <Link className="nav start" to="/about">
            Bài sau
          </Link>
        </div>
        <footer>20 / 20</footer>
        <Footer />
      </div>
    </main>
  );
}

export default Frameworks;
