+++
Description = "Stuff CSS adalah framework front-end yang memudahkan dalam pembuatan halaman web yang responsif tetapi minimalis"
date = 2023-01-25T17:00:00Z
draft = false
featured_image = "https://github.com/fajarspace/Stuff-CSS/blob/master/static/img/meta-img.jpg?raw=true"
tags = ["framework", "css", "html", "sass", "javascript"]
title = "Mengenal framework Stuff CSS"

+++

Stuff CSS adalah framework front-end yang memudahkan dalam pembuatan halaman web yang responsif tetapi minimalis (dapat ditampilkan dengan baik pada berbagai ukuran layar) dan mobile-friendly. Framework ini menyediakan komponen-komponen seperti button, navigasi, breadcrumb, dll yang telah diformat dan siap digunakan. Stuff CSS juga menyediakan grid system yang memungkinkan pengguna dengan mudah mengatur posisi elemen pada halaman web. Framework ini dibuat menggunakan Node js, SASS, dan JavaScript, dan dapat digunakan dengan berbagai bahasa pemrograman web

Stuff CSS bisa menjadi pilihan alternatif bagi para developer jika ingin mendesain webnya dengan hal yang berbeda, karena kebanyakan framework lain di desain untuk membuat web tetap dinamis dan banyak memakai class dalam element HTML, karena itu Stuff CSS memiliki fitur-fitur yang berbeda dari framework lain. Website Stuff CSS dapat diakses di alamat [stuffcss.netlify.app](https://stuffcss.netlify.app)

# Memulai

Ada 3 cara menjalankan Stuff CSS

1. Menggunakan CDN (Content Delivery Network)
2. Mengunduh Stuff CSS, pada cara ini pengguna dapat custom style secara bebas
3. Menginstal lewat NPM (Node Package Manager)

   _*versi pada react.js sedang dalam pengembangan, mungkin pengguna akan menemukan banyak sekali bug_

# Berinteraksi dengan Tema

Stuff sudah dilengkapi dengan 2 tema yang konsisten: Light, Dark, dan juga Auto

Tema Light digunakan secara default. Tema Dark diaktifkan secara otomatis jika pengguna mengaktifkan mode Dark, atau pengguna bisa juga menggunakan tema default Dark tanpa harus menggunakan Auto, yaitu dengan forced document pada html ``<html data-theme="dark">`` atau pada element html lainnya ``<main data-theme="dark">``

```
<body>
  <main data-theme="light" class="container">
    <h1 class="center">Hello, world!</h1>
  </main>
  <h2 class="center">Hello, world!</h2>
  <button class="darkmode"></button>
</body>

```
![](/tech/themes.gif)

# Grid

Stuff berfokus pada elemen HTML native, oleh karena itu layout Grid dibuat sangat minimalis dengan auto layout kolom

```
<main>
  <div class="grid">
    <div></div>
    <div></div>
    <div></div>
  </div>
</main>
```
![](/tech/grid.gif)

# Typography
![](/tech/typo.png)

Semua element typography sudah responsive di seluruh device dan viewport


Masih banyak lagi component atau layout yang tersedia, dan juga Stuff css masih dalam pengembangan, masih banyak yang harus di improve. Jika teman2 memiliki issue, request atau ide bisa repo ke github yang tercantum 😉

repo : [github.com/fajarspace/stuff-css](https://github.com/fajarspace/stuff-css)