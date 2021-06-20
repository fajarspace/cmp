+++
Description = ""
date = 2021-06-19T17:00:00Z
draft = true
featured_image = ""
tags = []
title = "Customize terminal menggunakan iTerm, ohmyzsh+powerline10k"

+++
1. Download [iterm2](https://iterm2.com/) 
2. Install [ohmyzsh](https://ohmyz.sh/) menggunakan brew atau lainnya (lihat di dokumentasi ohmyzsh)
3. Buka Go to Preferences - profile - color lalu import color preset [https://github.com/fajaragngn/zsh-itermcolors](https://github.com/fajaragngn/zsh-itermcolors "https://github.com/fajaragngn/zsh-itermcolors") 
4. Install theme [powerline10k](https://github.com/romkatv/powerlevel10k) (Lihat dokumentasi di github) 
5. Config ketik **nano \~/.zshrc** ubah **ZSH_THEME="apa ini saya lupa:V"** menjadi **ZSH_THEME="powerlevel10k/powerlevel10k"**
6. Save, lalu restart iterm
7. Ikuti configurasi yang di berikan dan selesai.