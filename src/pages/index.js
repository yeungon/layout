import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function Index() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <div id="about">
            <p>
              Trang web này sẽ giúp bạn nắm được CSS cơ bản để dựng giao diện
              web.
            </p>
            <p>
              Dựng giao diện web cần kĩ năng, khi bạn phải phối hợp nhiều kiến
              thức CSS khác nhau. Bạn cần nắm được các khái niệm CSS cơ bản
              trước khi có thể dựng được layout. Nếu muốn học được cái khái niệm HTML và CSS cơ bản, bạn có thể tham khảo thêm tại trang 
              <a href="http://learn.shayhowe.com/html-css/"> trang này</a>, hoặc <a href="https://w3schools.com">w3schools</a>. Okey, giờ ta sẽ cùng tìm hiểu cách dựng layout.              
            </p>
            <p>
            Original content <a href="http://learnlayout.com/"> Learn Layout.</a> <br/><br/>
            Convert to Gatsby and translate to Vietnamese by <a href="https://vuongnguyen.net"> Vuong Nguyen </a>.
              
            </p>

          </div>
          <div className="nav-wrapper">
            <Link className="nav start" to="/nolayout">
              Bắt đầu học
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default Index;
