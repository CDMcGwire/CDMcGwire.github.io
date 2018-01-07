---
layout: default
title: Homepage
main_header: "Welcome!"
date: Jan 7th, 2018
---

## About
Not a fan of wordy autobiographies, so here's an unordered list!
* Bachelor in Computer Science and Software Engineering
* Spend most of my development effort on interactive and performance sensitive systems (mainly gameplay programming)
* Worked as a programming instructor for K-12 extracurricular classes for the last year and a half
* Disproportionate interest in graphic design given my major
* Design and host pen and paper RPG games
* Mainly work in C# and C++ but JavaScript is starting to grow on me...
* Made this website from scratch because I'm a fan of minimizing dependencies in code
* ~~Jekyll is starting to look very appealing~~
* Jekyll is pretty nifty

{% for page_i in site.pages %}
{% include page_link.html url=page_i.url header=page_i.title content=page_i.excerpt %}
{% endfor %}