+++
Description = "menjalankan python di sublime text"
categories = ["docs"]
date = 2020-11-24T17:00:00Z
featured_image = ""
tags = ["python", "sublime"]
title = "Menjalankan python di sublime text 3 dengan terminus"

+++
sebelum itu install terlebih dahulu python di windows/pyenv di mac

Install terminus di package control

klik tools -> build system -> new build systems lalu save

copy script dibawah ini:

{

    "target": "terminus_exec",
    
        "cancel": "terminus_cancel_build",
    
        "focus": true,
    
    "shell_cmd": "/usr/bin/env python3 ${file}",
    
    "file_regex": "^\[ \]*File \\"(...*?)\\", line (\[0-9\]*)",
    
    "selector": "source.python",
    
    "env": {"PYTHONIOENCODING": "utf-8"},
    
    "variants":
    
    \[
    
    	{
    
    		"name": "Syntax Check",
    
    		"shell_cmd": "python -m py_compile \\"${file}\\"",
    
    	}
    
    \]

}

save, lalu jalankan cmd+b, untuk menutup pane jalankan cmd+w