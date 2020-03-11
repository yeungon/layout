import React from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function noLayout() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">Khi không có layout</h1>
          <p>
            Nếu bạn muốn trang web của mình chỉ có một cột bự chảng, việc dựng
            layout thực ra là... không cần thiết. Yeahh, nhưng thực tế không mấy
            ai làm vậy, vì rất nhiều lí do. Nếu đang đọc dòng này, bạn sẽ thấy
            khi màn hình rộng, việc đọc từng dòng dài lòng thòng thế này khá là
            củ chuối. Okey, giờ nếu bạn co màn hình lại bằng cách ấn vào cửa sổ
            đúp trên trình duyệt, bên cạnh nút đóng x, bạn sẽ thấy dựng layout
            web quan trọng như thế nào, khi nó giúp người dùng đọc nội dung dễ
            dàng hơn.
          </p>
          <p>
            Trước khi chúng ta xử lý việc này, hãy bắt đầu với thuộc tính cực kì
            quan trọng của CSS: <code>display</code>. Nắm được cách dùng display
            sẽ giúp chúng ta xử lý giao diện theo nhiều hướng khác nhau như
            flex, grid. Ở bài kế tiếp, chúng ta sẽ vọc anh chàng display này.
          </p>
          <div className="nav-wrapper">
            <Link className="nav start" to="/">
              Bài trước
            </Link>
            <Link className="nav start" to="/display">
              Bài sau
            </Link>
          </div>
          <footer>1 / 19</footer>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default noLayout;
