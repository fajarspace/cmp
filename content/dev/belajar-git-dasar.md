+++
Description = "Git adalah salah satu sistem pengontrol versi(Version Control System) pada proyek perangkat lunak yang diciptakan Linus Torvalds"
date = 2020-10-12
featured_image = ""
tags = ["dev"]
title = "Belajar Git dasar"

+++
![git logo](https://miro.medium.com/max/1200/1*BCZkmZR1_YzDZy22Vn4uUw.png#git-img-main)

# Apa itu Git ?
* Git adalah salah satu sistem pengontrol versi(Version Control System) pada proyek perangkat lunak yang diciptakan Linus Torvalds.
* Pengontrol versi bertugas memcatat setiap perubahan pada file proyek yang dikerjakan oleh banyak orang maupun sendiri.
* Git dikenal juga dengan distributed revision control (VCS terdistribusi), artinya penyimpanan database Git tidak hanya berada dalam satu tempat saja.

# Instalasi Git
* Download **Git**, Buka website resminya Git [git-scm.com](https://git-scm.com).
* Kemudian unduh Git sesuai dengan arsitektur komputer kita. Kalau menggunakan 64bit, unduh yang 64bit. Begitu juga kalau menggunakan 32bit.
* Untuk pengguna linux ``sudo apt-get install git`` & untuk Mac ``brew install git``
* Selamat, Git sudah terinstal. Untuk mencobanya,silahkan buka **Terminal** atau **CMD**,kemudian ketik perintah
  
  ``git --version.``

  ![git --version](/img/git/1.png)

# Menambahkan Global Config
* Pada saat pertama kali menggunakan git, perlu dilakukan konfigurasi
user.name dan user.email
* konfigurasi ini bisa dilakukan untuk global repostiry atau individual
repository.
* apabila belum dilakukan konfigurasi, akan mengakibatkan terjadi
kegagalan saat menjalankan perintah ```git commit```
* Config Global Repository

  ``$ git config --global user.name "nama_user"``

  ``$ git config --global user.email "nama_user"``

# Perintah Dasar Git
* ``git init`` , perintah untuk membuat repository local
* ``git add``, perintah untuk menambahkan file baru, atau perubahan pada file
pada staging sebelum proses commit.
* ``git commit``, perintah untuk menyimpan perubahan kedalam database git.
* ``git push -u origin master``, perintah untuk mengirim perubahan pada repository local menuju server repository.
* ``git clone [url]``, perintah untuk membuat working directory yang diambil dari repositry sever.
* ``git remote add origin [url]``, perintah untuk menambahkan remote server/reopsitory server pada local repositry (working directory)
* ``git pull``, perintah untuk mengambil/mendownload perubahan terbaru dari server repository ke local repository

# Membuat Reposiory Local
* Buka direktory aktif, misal: '/Documents/GitHub/'
* Drop direktori ke terminal / CMD
* Buat direktory project praktikum pertama dengan nama LatihanVCS

  ``$ mkdir LatihanVCS``
 
  ``$ cd LatihanVCS``

  ![create folder](/img/git/3.png)
 
* Sehingga terbentuk satu direktori baru dibawahnya, selanjutnya masuk kedalam direktori tersebut dengan perintah cd (change directory)
* direktory aktif menjadi: /Documents/GitHub/LatihanVCS
* Jalankan perintah git init, untuk membuat repository local. 
``$ git init``
* Repository baru berhasil di inisialisasi, dengan terbentuknya satu direktori hidden dengan nama .git
* Pada direktori tersebut, semua perubahan pada working directory akan disimpan.

# Menambahkan File baru pada repository
* Untuk membuat file dapat menggunakan text editor, lalu menyimpan filenya pada direktori aktif (repository)
* disini kita akan coba buat satu file bernama README.md (text file)

  ``$ echo “# LatihanVCS” >> README.md``

* File README.md berhasil dibuat.

  ![readme.md created](/img/git/4.png)

# Menambahkan File baru pada repository
* Untuk menambahkan file yang baru saja dibuat tersebut gunakan perintah git add.
  
  ``$ git add README.md``
  
* File README.md berhasil ditambahkan.
  
# Commit (Menyimpan perubahan ke database)
* Untuk menyimpan perubahan yang ada kedalam database repository local, gunakan perintah 

  ``$ git commit -m 'commit pertama'``

* Perubahan berhasil disimpan.
  
   ![commit pertama](/img/git/5.png)
   
# Membuat repository server
* Server reopsitory yang akan kita gunakan adalah http://github.com, Anda harus membuat akun terlebih dahulu.
* Pada laman github, klik tombol start a project, atau
* Dari menu (icon +) klik New Repository

  ![new repo](/img/git/6.png)

# Membuat repository server
* Isi nama repository nya, 'LatihanVCS' 
* lalu klik tombol Create repository
  
  ![create repo](/img/git/7.png)
  
# Menambahkan Remote Repository
* Remote Repository merupakan repository server yang akan digunakan untuk menyimpan setiap perubahan pada local repository, sehingga dapat diakses oleh banyak user.
* Untuk menambahkan remote repository server, gunakan perintah git remote add origin [url]
  
  ``$ git remote add origin https://github.com/fajarbaiz/LatihanVCS.git``
  
# Push (Mengirim perubahan ke server)
* Untuk mengirim perubahan pada local repository ke server gunakan perintah git push.
  
  ``$ git push -u origin master``
  
* Perintah ini akan meminta memasukkan username dan password pada akun github.com

  ![push](/img/git/8.png)
  
# Lihat hasilnya pada server repository
* Buka laman github.com, arahkan pada repositori- nya.
* Maka perubahan akan terlihat pada laman tersebut.

  ![rexona percaya](/img/git/9.png)
  
# Clone Repository
* Clone repository, pada dasarnya adalah meng-copy repository server dan secara otomatis membuat satu direktory sesuai dengan nama repositorynya (working directory).
* Untuk melakukan cloning, gunakan perintah git clone [url]
  
  ``git clone https://github.com/fajarbaiz/LatihanVCS.git``

  ![clone](/img/git/10.png)

# Menambahkan gambar
* Buat folder 'img' di dalam repository local 'LatihanVCS'
* Lalu tambahkan / copy hasil screenshot ke dalam folder 'img'

    ![create folder](/img/git/11.png)

* Ketik ``git add .`` untuk menambahkan semua file baru

    ![git add](/img/git/12.png)

* Lalu commit dengan komentar 'commit kedua'

    ![commit kedua](/img/git/13.png)

* Push file gambar ke repository server

    ![push server](/img/git/14.png)

# Mengedit / merubah isi file README.md
* Buka repository local 'LatihanVCS'
* Edit file README.md dengan text editor seperti notepad, dll

    ![edit readme](/img/git/15.png)

* Pengeditan file menggunakan bahasa markup .md, silahkan lihat dokumentasi nya [disini](https://guides.github.com/features/mastering-markdown/)

* Jika sudah klik save, lalu ketik ``git add .``, ``git commit 'commit ketiga`` dan ``git push -u origin master``

    ![add,commit,push](/img/git/16.png)

* Lihat perubahannya di github!

    ![finish](/img/git/17.png)
