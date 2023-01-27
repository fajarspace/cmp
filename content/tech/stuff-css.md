+++
Description = "'"
date = 2023-01-25T17:00:00Z
featured_image = ""
tags = ["framework", "css", "html", "sass", "javascript"]
title = "Mengenal framework Stuff CSS"

+++

Stuff CSS adalah framework front-end yang memudahkan dalam pembuatan halaman web yang responsif tetapi minimalis (dapat ditampilkan dengan baik pada berbagai ukuran layar) dan mobile-friendly. Framework ini menyediakan komponen-komponen seperti button, navigasi, breadcrumb, dll yang telah diformat dan siap digunakan. Stuff CSS juga menyediakan grid system yang memungkinkan pengguna dengan mudah mengatur posisi elemen pada halaman web. Framework ini dibuat menggunakan Node js, SASS, dan JavaScript, dan dapat digunakan dengan berbagai bahasa pemrograman web

Stuff CSS bisa menjadi pilihan alternatif bagi para developer jika ingin mendesain webnya dengan hal yang berbeda, karena kebanyakan framework lain di desain untuk membuat web tetap dinamis dan banyak memakai class dalam tag HTML, karena itu Stuff CSS memiliki fitur-fitur yang berbeda dari framework lain. Website Stuff CSS dapat diakses di alamat [stuffcss.netlify.app](stuffcss.netlify.app)

## Memulai

Ada 3 cara menjalankan Stuff CSS

1. Menggunakan CDN (Content Delivery Network)
2. Mengunduh Stuff CSS, pada cara ini pengguna dapat custom style secara bebas
3. Menginstal lewat NPM (Node Package Manager)

   _*versi pada react.js sedang dalam pengembangan, mungkin pengguna akan menemukan banyak sekali bug_

## Berinteraksi dengan Tema

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

## Grid

