import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function BoxSizing() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />

        <div id="container">
          <h1 className="content">height: 100vh và hàm cacl()</h1>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.simple {\nwidth: 500px;\nmargin: 20px auto;\n-webkit-box-sizing: border-box;\n-moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.fancy {\nwidth: 500px;\nmargin: 20px auto;\npadding: 50px;\nborder: solid #6AC5AC 10px;\n-webkit-box-sizing: border-box;\n-moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n"
            }}
          />
          <p className="content">
            Tùy chọn CSS này có thể đưa vào div "tổng quản", tức div master chứa
            tất cả các thành phần con. Khi đặt <code>height: 100vh</code>, tức
            ta muốn div này chiếm toàn bộ chiều cao của không gian vh ở đây là
            viewpoint height và 100% tức chiếm toàn bộ.
            <br /> <br />
            Giả sử nếu ta thiết lập <code>height: 50vh; </code> thì khi chiều
            cao màn hình là 1000px thì chiều cao của khối div chúng ta đang
            thiết lập sẽ là 500px.
          </p>

          <p className="content">
            Hàm CALC giúp chúng ta tính toán và thiết lập chiều cao cho một
            element nào đó. Thông thường code sẽ là{" "}
            <code>height: calc(100% - 100px);</code> trong đó ta sẽ lấy hiệu số
            của 100% trừ đi 100px. Kết quả là, nếu chiều cao màn hình là 1000px,
            chiều cao của element đó sẽ là 900px.
          </p>

          <p className="content">
            Về cơ bản hàm calc() cho phép tính toán cộng trừ nhân chia. Một
            trong số những cách dùng khá phổ biến là{" "}
            <code>height: calc(100vh - 100px);</code>.
          </p>

          <p className="content">
            Chú ý rằng hàm calc() có thể áp dụng với nhiều thuộc tính CSS khác.
            Ví dụ code sau: <code>width: calc(100% - 100px);</code> sẽ tính toán
            để element hiện tại có chiều ngang giảm đi 200px so với chiều ngang
            của toàn màn hình. Lúc đó, nếu ta gán thêm{" "}
            <code>position: absolute; left: 50px </code> thì div hiện tại sẽ
            cách hai bên mỗi bên 50px.
          </p>
        </div>

        <div className="nav-wrapper">
          <Link className="nav start" to="/display">
            Bài trước
          </Link>
          <Link className="nav start" to="/margin-auto">
            Bài sau
          </Link>
        </div>
        <footer>3 / 20</footer>
        <Footer />
      </div>
    </main>
  );
}

export default BoxSizing;
