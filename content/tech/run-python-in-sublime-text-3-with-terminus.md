+++
Description = ""
date = ""
draft = true
featured_image = ""
tags = []
title = "Run python in sublime text 3 with terminus"

+++
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

 