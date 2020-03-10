import React from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function About() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">giới thiệu về trang</h1>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n#credits {\ntext-align: center;\n}\n#credits img {\nvertical-align: middle;\nmargin: 0 20px;\nwidth: 25%;\nmax-width: 300px;\n}\n#credits a:hover {\nbackground-color: transparent;\n}\n.content {\ntext-align: center;\n}\n"
            }}
          />
          <div id="credits">
            <a href="http://incompl.com">
              <img
                src="http://www.gravatar.com/avatar/b8d0f1cea63b396befeeb8c74533abb6?s=300"
                alt="Greg Smith"
              />
            </a>
            <a href="http://www.isaacdurazo.com/">
              <img
                src="http://gravatar.com/avatar/e44bb0d044e511cc884642650eba2475?s=300"
                alt="Isaac Durazo"
              />
            </a>
            <a href="http://bocoup.com">
              <img src="/layout/images/bob.png" alt="Bocoup" />
            </a>
            
          </div>
          <div className="content">
            Written and built by <a href="http://incompl.com">Greg Smith</a>.
            Design by <a href="http://www.isaacdurazo.com/">Isaac Durazo</a>. We
            work at <a href="http://bocoup.com">Bocoup</a>. Convert to SPA using Gatsby and translate to Vietnamese by <a href="https://vuongnguyen.net">Vuong Nguyen</a>.
          </div>
          <div className="content">
            <a href="https://github.com/incompl/csslayoutsite/issues">
              Issues / Feedback
            </a>
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  );
}

export default About;
