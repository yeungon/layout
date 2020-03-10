import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function FlexBox() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">flexbox</h1>
          <p className="content">
            The new <code>flexbox</code> layout mode is poised to redefine how
            we do layouts in CSS. Unfortunately the specification has changed a
            lot recently, so it's implemented differently in different browsers.
            Still, I'd like to share a couple examples so you know what's coming
            up. These examples currently only work{" "}
            <a href="http://caniuse.com/flexbox">some browsers</a> that use the{" "}
            <a href="http://www.w3.org/TR/css3-flexbox/">
              latest version of the standard
            </a>
            .
          </p>
          <p className="content">
            There are a lot of out-of-date flexbox resources around. If you want
            to learn more about flexbox,{" "}
            <a href="http://css-tricks.com/old-flexbox-and-new-flexbox/">
              start here
            </a>{" "}
            to learn how to identify if a resource is current or not. I have
            written a{" "}
            <a href="http://weblog.bocoup.com/dive-into-flexbox/">
              detailed article using the latest syntax
            </a>
            .
          </p>
          <p className="content">
            There is a lot more you can do with flexbox; these are just a few
            examples to give you an idea:
          </p>
          <h2 className="content">Simple Layout using Flexbox</h2>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.container {\ndisplay: -webkit-flex;\ndisplay: flex;\n}\nnav {\nwidth: 200px;\n}\n.flex-column {\n-webkit-flex: 1;\n    flex: 1;\n}\n"
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nc">.container</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">display</span>
                <span className="p">:</span>{" "}
                <span className="n">-webkit-flex</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">display</span>
                <span className="p">:</span> <span className="n">flex</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="nt">nav</span> <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">200px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="nc">.flex-column</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">-webkit-flex</span>
                <span className="p">:</span> <span className="m">1</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">flex</span>
                <span className="p">:</span> <span className="m">1</span>
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
                  <a href="flexbox.html">Home</a>
                </li>
                <li>
                  <a href="flexbox.html">Taco Menu</a>
                </li>
                <li>
                  <a href="flexbox.html">Draft List</a>
                </li>
                <li>
                  <a href="flexbox.html">Hours</a>
                </li>
                <li>
                  <a href="flexbox.html">Directions</a>
                </li>
                <li>
                  <a href="flexbox.html">Contact</a>
                </li>
              </ul>
              <span className="endlabel">&lt;/nav&gt;</span>
            </nav>
            <div className="elem elem-red flex-column">
              <span className="label">&lt;div class="flex-column"&gt;</span>
              <section className="elem elem-green">
                <span className="label">&lt;section&gt;</span>
                <p>Flexbox is so easy!</p>
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
              <span className="endlabel">&lt;/div&gt;</span>
            </div>
          </div>
          <h2 className="content">Fancy Layout using Flexbox</h2>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.initial {\n-webkit-flex: initial;\n  flex: initial;\nwidth: 200px;\nmin-width: 100px;\n}\n.none {\n-webkit-flex: none;\n  flex: none;\nwidth: 200px;\n}\n.flex1 {\n-webkit-flex: 1;\n  flex: 1;\n}\n.flex2 {\n-webkit-flex: 2;\n  flex: 2;\n}\n"
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nc">.container</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">display</span>
                <span className="p">:</span>{" "}
                <span className="n">-webkit-flex</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">display</span>
                <span className="p">:</span> <span className="n">flex</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="nc">.initial</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">-webkit-flex</span>
                <span className="p">:</span> <span className="n">initial</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">flex</span>
                <span className="p">:</span> <span className="n">initial</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">200px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">min-width</span>
                <span className="p">:</span> <span className="m">100px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="nc">.none</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">-webkit-flex</span>
                <span className="p">:</span> <span className="nb">none</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">flex</span>
                <span className="p">:</span> <span className="nb">none</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">width</span>
                <span className="p">:</span> <span className="m">200px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="nc">.flex1</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">-webkit-flex</span>
                <span className="p">:</span> <span className="m">1</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">flex</span>
                <span className="p">:</span> <span className="m">1</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
                {"\n"}
                <span className="nc">.flex2</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">-webkit-flex</span>
                <span className="p">:</span> <span className="m">2</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">flex</span>
                <span className="p">:</span> <span className="m">2</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <div className="container elem">
            <section className="elem elem-green initial">
              <span className="label">&lt;div class="initial"&gt;</span>
              <p>
                I will be 200px when there is room, and I will shrink down to
                100px if there is not room, but no smaller.
              </p>
              <span className="endlabel">&lt;/div&gt;</span>
            </section>
            <section className="elem elem-green none">
              <span className="label">&lt;div class="none"&gt;</span>
              <p>I will always be 200px, no matter what.</p>
              <span className="endlabel">&lt;/div&gt;</span>
            </section>
            <section className="elem elem-green flex1">
              <span className="label">&lt;div class="flex1"&gt;</span>
              <p>I will fill up 1/3 of the remaining width.</p>
              <span className="endlabel">&lt;/div&gt;</span>
            </section>
            <section className="elem elem-green flex2">
              <span className="label">&lt;div class="flex2"&gt;</span>
              <p>I will fill up 2/3 of the remaining width.</p>
              <span className="endlabel">&lt;/div&gt;</span>
            </section>
          </div>
          <h2 className="content">Centering using Flexbox</h2>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.vertical-container {\nheight: 300px;\ndisplay: -webkit-flex;\ndisplay:         flex;\n-webkit-align-items: center;\n  align-items: center;\n-webkit-justify-content: center;\n  justify-content: center;\n}\n"
            }}
          />
          <figure className="highlight">
            <pre>
              <code className="language-css" data-lang="css">
                <span className="nc">.vertical-container</span>{" "}
                <span className="p">{"{"}</span>
                {"\n"}
                <span className="nl">height</span>
                <span className="p">:</span> <span className="m">300px</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">display</span>
                <span className="p">:</span>{" "}
                <span className="n">-webkit-flex</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">display</span>
                <span className="p">:</span>
                {"         "}
                <span className="n">flex</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">-webkit-align-items</span>
                <span className="p">:</span> <span className="nb">center</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">align-items</span>
                <span className="p">:</span> <span className="nb">center</span>
                <span className="p">;</span>
                {"\n"}
                <span className="nl">-webkit-justify-content</span>
                <span className="p">:</span> <span className="nb">center</span>
                <span className="p">;</span>
                {"\n"}
                {"  "}
                <span className="nl">justify-content</span>
                <span className="p">:</span> <span className="nb">center</span>
                <span className="p">;</span>
                {"\n"}
                <span className="p">{"}"}</span>
              </code>
            </pre>
          </figure>
          <div className="vertical-container elem">
            <span className="label">
              &lt;div class="vertical-container"&gt;
            </span>
            <section className="elem elem-green">
              <span className="label">&lt;div&gt;</span>
              <p>Finally, it's easy to vertically center something in CSS!</p>
              <span className="endlabel">&lt;/div&gt;</span>
            </section>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/layout/column">
            Bài trước
          </Link>
          <Link className="nav start" to="/layout/frameworks">
            Bài sau
          </Link>
        </div>
        <footer>18 / 19</footer>
        <Footer />
      </div>
    </main>
  );
}

export default FlexBox;
