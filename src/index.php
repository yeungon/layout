<!DOCTYPE html>
<html lang="en">

<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Vuong Nguyen personal page</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">

  <!-- Thanks for the icon :-) http://konpa.github.io/devicon/ -->
  <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css">

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="images/favicon.png">

  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <!-- Library to handle time noted: Carbon for PHP -->
  <script src="https://momentjs.com/downloads/moment.js"></script>

  <script src="https://momentjs.com/downloads/moment-timezone-with-data.js"></script>
  <script src="http://momentjs.com/downloads/moment-timezone-with-data-2012-2022.js"></script>

  <style type="text/css">
    .progressbar {
      border: 1px solid grey;
    }

    .progressbarinner {}
  </style>



</head>

<body>

  <?php

  /*ép HTTPS*/
  if ($_SERVER["HTTPS"] != "on") {
    header("Location: https://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"]);
    exit();
  }

  ?>

  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="container">
    <div class="row">
      <div class="one-half column" style="margin-top: 25%">
        <h2>Kia ora! It is Vuong</h2>

        <p>In brief, Vuong is addicted to $addiction = []; $addiction["tech"] = "unlimited"; && addiction["philosophy"] = "analytic philosophy aka philosophy of language"; && $addiction ['literature'] = "short stories, currently";</p>

        <p>Fullstack developer, PHP framework creator, JAMstack lover (hint: Gatsby, GridSome): Experienced and work comfortably with, but not limited to, PHP, Laravel, WordPress, Codeigniter, (possibly Symfony || Silverstripe || any PHP framework && CMS), MySQL, JS, jQuery, Vue.js, ReactJS, Bootstrap, HTML5, CSS. <a style="text-decoration: none" href="https://coursera.org/verify/specialization/H33GAF8SU5GP">Certified elsewhere.</a></p>

        <p>I got 71/100 in a PHP test sometime a go. You might want to see the mark. <a style="text-decoration: none" href="http://vuongnguyen.net/Vuong-php-test.png">PHP test</a> </p>
        
        <p>Sometimes I write about <a style="text-decoration: none" href="https://vietphp.net">PHP</a> and <a style="text-decoration: none" href="https://js.edu.vn">JavaScript</a></p>

        <p>I am running a Youtube channel name "Học Cơ Bản" (Learning from the basic) to share my understanding about JavaScript at <a style="text-decoration: none" href="https://youtube.com/hoccoban">Youtube Học Cơ Bản</a></p>


        <img class="tooltip" style="width: 8%; padding-left:2%;" src="images/languages/php.svg">
        <img style="width: 8%; padding-left:2%;" src="images/languages/laravel.svg">
        <img style="width: 8%; padding-left:2%;" src="images/languages/wordpress-original.svg">
        <img style="width: 8%; padding-left:2%;" src="images/languages/codeigniter.svg">
        <img style="width: 8%; padding-left:2%;" src="images/languages/mysql.svg">
        <img style="width: 8%; padding-left:2%;" src="images/languages/javascript.svg">
        <img style="width: 8%; padding-left:2%;" src="images/languages/jquery.svg">
        <img style="width: 8%; padding-left:2%;" src="images/languages/react-original.svg">
        <img style="width: 8%; padding-left:2%;" src="images/languages/vuejs.svg">
        <img style="width: 8%; padding-left:2%;" src="images/languages/html5.svg">
        <img style="width: 8%; padding-left:2%;" src="images/languages/bootstrap.svg">
        <img style="width: 8%; padding-left:2%;" src="images/languages/css3.svg">

        <br>
        <br>
        <h4>Somethings I made </h4>

        <li><b><a style="text-decoration: none" href="https://tudienhanviet.com">[05/2017] Vietnamese Sino Dictionary</a></b></li>
        <li><b><a style="text-decoration: none" href="https://tracnghiem.com.vn">[07/2017] Objective Test - aka "trắc nghiệm"</a></b></li>
        <li><b><a style="text-decoration: none" href="http://vuongnguyen.net/tiengviet">[11/2017] Tool designed to automatically convert written Vietnamese to phonetic symbols</a></b></li>

        <li><b><a style="text-decoration: none" href="http://vuongnguyen.net/tiengviet.php">[11/2017] A "new" written script of Vietnamese</a></b></li>

        <li><b><a style="text-decoration: none" href="http://vuongnguyen.net/hn">[12/2017] Hacker News, my own version</a></b></li>

        <li><b><a style="text-decoration: none" href="https://tudien.net">[12/2017] English - Vietnamese - English Dictionary</a></b></li>

        <li><b><a style="text-decoration: none" href="https://englishpicture.net">[01/2018] English Picture Dictionary</a></b></li>

        <li><b><a style="text-decoration: none" href="https://newnuke.com">[05/2018] NewNuke - A tiny PHP framework</a></b></li>

        <li><b><a style="text-decoration: none" href="https://github.com/yeungon/ZCE">[05/2018 - current] Advanced PHP exercises: 137 questions</a></b></li>

        <li><b><a style="text-decoration: none" href="https://f5.nz">[06/2018] Secure, Encrypted && Private Communication System</a></b></li>

        <li><b><a style="text-decoration: none" href="https://wordpress.org/plugins/wp-security-master/">[04/2019] WP Security Master - A WordPress plugin to protect the admin dashboard</a></b></li>

        <li><b><a style="text-decoration: none" href="https://crowntheme.com">[06/2019] Crown Theme - WordPress themes (yeal, a plural noun!) in the progress of development</a></b></li>

        <li><b><a style="text-decoration: none" href="https://blog.vuongnguyen.net">[08/2019] LaraApp - A blog on top of Laravel 5.8 - </a><a href="https://github.com/yeungon/myblog">Github</a></b></li>

        <li><b><a style="text-decoration: none" href="https://github.com/yeungon/In-JavaScript-we-trust">[09/2019 - WIP] In-JavaScript-we-trust - >= 100 Github ★ </a></b></li>

        <li><b><a style="text-decoration: none" href="https://vuex.yeungon.now.sh">[09/2019] Meeting Board - Vue-based App with Firebase</a></b></li>

        <li><b><a style="text-decoration: none" href="https://vue3.yeungon.now.sh">[09/2019] Vue based Game </a></b></li>

        <li><b><a style="text-decoration: none" href="https://vuetodolist.yeungon.now.sh/">[10/2019] VueTodoList</a></b></li>

        <li><b><a style="text-decoration: none" href="https://regex.yeungon.now.sh/">[10/2019] Porting RegexOne to SPA using Vuejs</a><a style="text-decoration: none; color: blue" href="https://vuongnguyen.net/regex/#/"> - Another link</a></b></li>

        <li><b><a style="text-decoration: none" href="https://github.com/yeungon/regexreact/">[11/2019 - WIP] Porting RegexOne to SPA using React</a></b></li>


        <li><b><a style="text-decoration: none" href="https://youtube.com/hoccoban">[1/2020- WIP] Advanced JavaScript course - Youtube</a></b></li>

        <li><b><a style="text-decoration: none" href="https://vuongnguyen.net/layout">[3/2020] Convert learnlayout to SPA using Gatsby</a></b></li>


        <p>contact me: me@thissite.net->where('thissite', '=', 'vuongnguyen');</p>

        <?php
        ?>

        <br>
        <div id="vuongid">
          <b>{{message}} <span v-text="thogianhientai"></span></b>
          <p>{{thesisdeadline}} is the day expected to submit PhD thesis. Today is {{today}} then, only {{dayleft}} days left.</p>
          Progress: {{tinhphantram}}% time left (412 days as 100%)!
          <br>
          <br>
          <div class="progressbar">
            <div class="progressbarinner" style=" height: 14px;" v-bind:style="{width: tinhphantram + '%', backgroundColor:mausacselect }"></div>
          </div>

        </div>
        <br>
        Images credit: <a style="text-decoration: none;" href="http://konpa.github.io/devicon/">Devicon</a>

        <br>
        <br>

      </div>
    </div>
  </div>


  <script type="text/javascript">
    var d1 = new Date(); //"now"
    var d2 = new Date("2019/12/19") // đặt ngày nào đó cụ thể
    var diff = Math.round(d2 - d1); // difference in milliseconds
    var dayleft = Math.round(diff / 86400000);

    new Vue({
      el: '#vuongid',
      data: {
        message: 'Current time:',
        thogianhientai: null,
        thesisdeadline: "2019-12-19",
        today: new Date().toISOString().slice(0, 10),
        dayleft: dayleft, //dayleft truyền từ js vào
        phantram: null,
        /*dùng cho cả width và %*/
        mausac: null,
      },

      computed: {
        mausacselect: function() {
          if (this.dayleft < 200) {
            return this.mausac = 'red';
          } else if (this.dayleft < 300) {
            return this.mausac = 'yellow';
          } else {
            return this.mausac = 'green';
          }
        },

        tinhphantram: function() {
          return this.phantram = this.dayleft * 100 / 412;

        }

      },

      methods: {
        capnhatthoigian() {
          this.thogianhientai = moment().format('LTS');
        },

        // daytosubmit() {
        //   this.dayleft = this.dayleft - 1;
        //   this.phantram = this.dayleft*100/412;
        // },

      },

      created() {

        setInterval(() => this.capnhatthoigian(), 1 * 1000);
        /*86400: số giây 1 ngày 60 X 60 X 24
        Cứ 1 ngày chạy một lần
        */
        var dayInMilliseconds = 1000 * 60 * 60 * 24;

        //setInterval(() => this.daytosubmit(), 1 * 250);

      }
    });
  </script>
</body>

</html>