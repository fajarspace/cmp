+++
Description = "'"
date = 2023-01-25T17:00:00Z
draft = true
featured_image = ""
tags = ["framework", "css", "html", "sass", "javascript"]
title = "Mengenal framework Stuff CSS"

+++
# Mengenal Stuff CSS

Stuff CSS adalah framework front-end yang memudahkan dalam pembuatan halaman web yang responsif tetapi minimalis (dapat ditampilkan dengan baik pada berbagai ukuran layar) dan mobile-friendly. Framework ini menyediakan komponen-komponen seperti button, navigasi, breadcrumb, dll yang telah diformat dan siap digunakan. Stuff CSS juga menyediakan grid system yang memungkinkan pengguna dengan mudah mengatur posisi elemen pada halaman web. Framework ini dibuat menggunakan Node js, SASS, dan JavaScript, dan dapat digunakan dengan berbagai bahasa pemrograman web

Stuff CSS bisa menjadi pilihan alternatif bagi para developer jika ingin mendesain webnya dengan hal yang berbeda, karena kebanyakan framework lain di desain untuk membuat web tetap dinamis dan banyak memakai class dalam tag HTML, karena itu Stuff CSS memiliki fitur-fitur yang berbeda dari framework lain. Website Stuff CSS dapat diakses di alamat [stuffcss.netlify.app](stuffcss.netlify.app)

## Memulai

Ada 3 cara menjalankan Stuff CSS

1. Menggunakan CDN (Content delivery network)
2. Mengunduh Stuff CSS, pada cara ini pengguna dapat custom style secara bebas
3. Menginstal lewat NPM _*versi ini sedang dalam pengembangan, mungkin pengguna akan menemukan banyak bug_

### Quick start

    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://unpkg.com/stuffcss@latest/dist/css/stuff.min.css">
        <title>Hello, world!</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
        <script src="https://unpkg.com/stuffcss@latest/dist/js/stuff.min.js"></script>
      </body>
    </html>

berikut merupakan HTML standard yang sudah include dengan CDN

### Berinteraksi dengan Tema

Stuff sudah dilengkapi dengan 2 tema yang konsisten: Light, Dark, dan juga Auto

Tema Light digunakan secara default. Tema Dark diaktifkan secara otomatis jika pengguna mengaktifkan mode gelap, atau pengguna bisa juga menggunakan tema default Dark tanpa harus menggunakan Auto, yaitu dengan forced 