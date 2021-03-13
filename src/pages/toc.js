import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function TOC() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />

        <div id="container">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n#toc {\nline-height: 1.5em;\npadding-left: 0;\n}\n\n#toc ul {\npadding: 0;\nwidth: 90%;\nmargin: auto;\n}\n\n#toc li {\nlist-style-type:none; \nmargin-bottom: .5em;\n}\n\n#toc li a {\ndisplay: block;\ntext-align: center;\npadding: .5em;\ncolor: #fff;\nbackground-color: #D64078;\nborder: solid #B03060 1px;\nborder-bottom: solid #B03060 4px;\ntext-shadow: 0px 2px 0 #B03060;\nborder-radius: .3em;\nposition: relative;\n-webkit-transition: all 0.1s ease-out;  /* Safari 3.2+, Chrome */\n-moz-transition: all 0.1s ease-out;  /* Firefox 4-15 */\n -o-transition: all 0.1s ease-out;  /* Opera 10.5–12.00 */\n    transition: all 0.1s ease-out;  /* Firefox 16+, Opera 12.50+ */\n}\n\n#toc li a:hover {\ntext-decoration: none;\nbackground-color: #c63b6f;\n}\n\n#toc li a:active {\nborder-bottom: solid #b03060 1px;\ntop: 4px;\n-webkit-transition: all 0 ease-out;  /* Safari 3.2+, Chrome */\n-moz-transition: all 0 ease-out;  /* Firefox 4-15 */\n -o-transition: all 0 ease-out;  /* Opera 10.5–12.00 */\n    transition: all 0 ease-out;  /* Firefox 16+, Opera 12.50+ */\n}\n\n\n@media screen and (min-width:601px) {\n#toc {\n-moz-column-count: 2;\n-moz-column-gap: 1em;\n-webkit-column-count: 2;\n-webkit-column-gap: 1em;\ncolumn-count: 2;\ncolumn-gap: 1em;\nline-height: 1.2em;\n}\n}\n"
            }}
          />
          <div className="content">
            <h1 className="content">Mục lục</h1>
            <ul id="toc">
              <li>
                <ul>
                  <li>                    
                    <Link to="/nolayout">no layout</Link>
                  </li>
                  <li>                    
                    <Link to="/display">the "display" property</Link>
                  </li>
                  <li>                    
                    <Link to="/height">height: 100vh và hàm cacl()</Link>
                  </li>
                  <li>                    
                    <Link to="/margin-auto">margin: auto;</Link>
                  </li>
                  <li>                    
                    <Link to="/max-width">max-width</Link>
                  </li>
                  <li>                    
                    <Link to="/width-maxwidth-minwidth">width max-width min-width</Link>
                  </li>
                  <li>                    
                    <Link to="/box-model">the box model</Link>
                  </li>
                  <li>                    
                    <Link to="/box-sizing">box-sizing</Link>
                  </li>
                  <li>                    
                    <Link to="/position">position</Link>
                  </li>
                  <li>                    
                    <Link to="/position-example">position example</Link>
                  </li>
                  <li>                    
                    <Link to="/float">float</Link>
                  </li>
                  <li>                    
                    <Link to="/clear">clear</Link>
                  </li>
                  <li>                    
                    <Link to="/clearfix">the clearfix hack</Link>
                  </li>
                  <li>                    
                    <Link to="/float-layout">float layout example</Link>
                  </li>
                  <li>                    
                    <Link to="/percent">percent width</Link>
                  </li>
                  <li>                    
                    <Link to="/media-queries">media queries</Link>
                  </li>
                  <li>                    
                    <Link to="/inline-block">inline-block</Link>
                  </li>
                  <li>                    
                    <Link to="/inline-block-layout">inline-block layout</Link>
                  </li>
                  <li>                    
                    <Link to="/column">column</Link>
                  </li>
                  <li>                    
                    <Link to="/flexbox">flexbox</Link>
                  </li>                  
                  <li>                    
                    <Link to="/center-text">center text</Link>
                  </li>                  
                  <li>                    
                    <Link to="/frameworks">css frameworks</Link>
                  </li>
                  <li>                    
                    <Link to="/about">future content</Link>
                  </li>
                  <li>                    
                    <Link to="/about">blank content</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default TOC;
