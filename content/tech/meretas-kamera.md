+++
Description = "Alat ini menghasilkan halaman HTTPS berbahaya menggunakan metode Serveo atau Ngrok Port Forwarding, dan kode javascript, untuk cam permintaan menggunakan MediaDevices.getUserMedia"
categories = ["hacking"]
date = 2020-04-20T00:00:00Z
featured_image = ""
tags = ["hack", "kamera"]
title = "Meretas kamera ponsel"

+++
![camera main img](https://static.wixstatic.com/media/149864_084ea01f60bc4dbcb785a02a14d70ff7~mv2.png/v1/fill/w_560,h_362,al_c,q_85,usm_0.66_1.00_0.01/camera-hack-final.webp)

 ## Gimana bisa sih?
Alat ini menghasilkan halaman HTTPS berbahaya menggunakan metode Serveo atau Ngrok Port Forwarding, dan kode javascript, untuk cam permintaan menggunakan MediaDevices.getUserMedia.

Metode MediaDevices.getUserMedia () meminta pengguna untuk izin untuk menggunakan input media yang menghasilkan MediaStream dengan trek yang berisi jenis media yang diminta. Aliran itu dapat mencakup, misalnya, trek video (diproduksi oleh perangkat keras atau sumber video virtual seperti kamera, perangkat perekaman video, layanan berbagi layar, dan sebagainya), trek audio (serupa, yang diproduksi oleh fisik atau sumber audio virtual seperti mikrofon, konverter A / D, atau sejenisnya), dan mungkin jenis trek lainnya. 

Untuk meyakinkan target untuk memberikan izin untuk mengakses cam, halaman menggunakan kode javascript yang dibuat oleh https://github.com/wybiral yang mengubah favicon menjadi aliran cam.


## Installation

*Installing (Kali Linux/Mac):*

  ``$ apt update && upgrade / $ brew update && upgrade``

  ``$ apt install git / $ brew install git``

  ``$ git clone https://github.com/fajaragngn/saycheese``

  ``$ cd saycheese``

  ``$ bash saycheese.sh``

## Picture
![readme.md created](https://fajaragungn.github.io/post/cam-prank/1.png)

*Pilih ngrok server 

![readme.md created](https://fajaragungn.github.io/post/cam-prank/2.png)

*Opsi (n) untuk memilih server secara otomatis

![readme.md created](https://fajaragungn.github.io/post/cam-prank/3.png)

*Opsi (y) untuk memilih server secara manual

![readme.md created](https://fajaragungn.github.io/post/cam-prank/4.png)

*target harus membuka url yang kita buat tadi, jika sudah file cam akan tersimpan

![readme.md created](https://fajaragungn.github.io/post/cam-prank/5.png)