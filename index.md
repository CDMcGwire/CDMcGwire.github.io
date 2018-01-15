---
layout: default
title: Homepage
main_header: "Welcome!"
date: Jan 7th, 2018
---

## About
Not a fan of wordy autobiographies, so here are some bullet points!
* Bachelor in Computer Science and Software Engineering
* Interested in creating interactive systems, like games
* Currently work on messaging systems for a bank
* Taught kids to program for a year and a half
* I pretend that I'm a graphic designer
* Design and host pen and paper RPG games
* Mainly work in C# and C++ but I'm not picky
* Created most of this site from scratch

{% for page in site.pages %}
## [{{ page.title }}]({{ page.url }})
{{ page.excerpt }}
{% endfor %}