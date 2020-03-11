import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/style.css";
import "../styles/code.css";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";

function Display() {
  return (
    <main>
      <Helmet>
        <title>Learn CSS Layout</title>
      </Helmet>
      <div>
        <Header />
        <div id="container">
          <h1 className="content">thuộc tính "display"</h1>
          <p className="content">
            <code>display</code> là một trong số những thuộc tính quan trọng bực
            nhất của CSS'để kiểm soát giao diện (layout). Bất kì phần tử nào
            trên web cũng có một giá trị display mặc dịnh, tùy thuộc vào loại
            phần tử. Hầu hết các phần tử HTML trên web có thuộc tính display là{" "}
            <code>block</code> hoặc <code>inline</code>. Một phần tử dạng block
            (khối) thường được gọi là phần tử khối. Một phần tử cùng dòng
            (inline) thì đươc gọi là phần tử cùng dòng (inline element), tất
            nhiên rồi :-)
          </p>
          <h2 className="content">block</h2>
          <div className="elem">
            <span className="label">&lt;div&gt;</span>
            <p>
              <code>div</code> là phần tử dạng khối tiêu chuẩn. Cứ khai báo một{" "}
              <code>div</code> là anh em coder lại có một khối không gian HTML
              dạng block. Một phần tử khối sẽ bắt đầu từ dòng đầu tiên bên trái
              và kéo dài không gian đến hết bên phải, theo những thuộc tính mà
              nó được quy định theo. Nói một cách đơn giản, khi có hai phần tử
              khối, chúng sẽ luôn luôn xếp chồng lên nhau như hai viên gạch. Một
              số phần tử khối khác gồm có thẻ <code>p</code>, <code>form</code>,
              một số thẻ mới trong HTML5 như <code>header</code>,{" "}
              <code>footer</code>, <code>section</code> vân vân mây mây... Những
              thẻ trên là quan trọng nhứt rồi.
            </p>
            <span className="endlabel">&lt;/div&gt;</span>
          </div>
          <div className="content">
            <h2>inline</h2>
            <p>
              <code>span</code> là phần tử cùng dòng tiêu chuẩn. Một phần tử
              cùng dòng có thể "gói" text trong một đoạn văn{" "}
              <span className="elem elem-inline">
                <span className="label">&lt;span&gt;</span> như này
                <span className="endlabel">&lt;/span&gt;</span>
              </span>{" "}
              mà không ảnh hưởng tới đặc tính về vị trí của đọan văn đó. Thẻ{" "}
              <code>a</code> là một trong số những thẻ cùng dòng thường dùng
              nhất, khi bạn sẽ dẫn link với thẻ này. Nói một cách nôm na thì các
              phần tử (thẻ) nào mặc định là inline, khi xếp bên nhau, thay vì
              như hai viên gạch chồng lên nhau, chúng giống như hai toa tầu của
              một đoàn tầu ghép vào nhau.
            </p>
            <h2>none</h2>
            <p>
              Chú ý rằng display còn có thể thiết lập là <code>none</code>. Một
              số phần tử đặc biệt như <code>script</code> có giá trị mặc định
              này. Trên thực tế, người ta hay dùng JavaScript để ẩn hoặc hiện
              một đối tượng nào đó, bằng việc thay đổi giá trị của display, thay
              vì thực sự xóa hoặc tạo lại một phần tử HTML nào đấy.
            </p>
            <p>
              Chú ý nữa là thuộc tính display khác với thuộc tính{" "}
              <code>visibility</code>. Thiết lập <code>display</code> thành{" "}
              <code>none</code> sẽ render trang web theo kiểu element HTML không
              tồn tại. Trong khi đó, khi thiết lập{" "}
              <code>visibility: hidden;</code>, phần tử HTML đó sẽ bị ẩn, nhưng
              nó vẫn chiếm không gian của trang, như lúc nó hiển thị vậy.
            </p>
            <div style={{ display: "none" }}>You found me!</div>
            <h2>Các giá trị khác của thuộc tính display</h2>
            <p>
              Có khá nhiều các giá trị khác cho thuộc tính <code>display </code>
              , chẳng hạn như: <code>list-item</code> và <code>table</code>.{" "}
              <a href="https://developer.mozilla.org/en-US/docs/CSS/display">
                Xem thêm tại đây
              </a>
              . Chúng ta sẽ thảo luận về <code>inline-block</code> và{" "}
              <code>flex</code> sau này. Hiện nay, xu thế mới nhất là dùng{" "}
              <code>grid</code>.
            </p>
            <h2>thêm tí hành tỏi: </h2>
            <p>
              Chú ý rằng tất cả các thẻ đều có giá trị display mặc định, nhưng
              chúng ta <em>luôn luôn</em> ghi đè được. Tất nhiên, sẽ khá là dzô
              dziên nếu ép kiểu của div sang dạng inline, nhuwg trong những tình
              huống cụ thể, chúng ta có thể linh hoạt thiết lập. Mộ tình huống
              khá quen thuộc là chúng ta thiết lập thẻ <code>li</code> thành
              dạng inline cho các elements của menu dạng thẳng đứng.
            </p>
          </div>
          <div className="nav-wrapper">
            <Link className="nav start" to="/layout/nolayout">
              Bài trước
            </Link>
            <Link className="nav start" to="/layout/margin-auto">
              Bài sau
            </Link>
          </div>
          <footer>2 / 19</footer>
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default Display;
