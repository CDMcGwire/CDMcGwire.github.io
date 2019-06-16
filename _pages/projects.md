---
title: Projects
date: Jan 7th, 2018
summary: >-
  A collection of notable projects I have worked on.
---

{% assign projects = site.projects | sort: 'date' %}
{% for project in projects reversed %}
# [{{ project.title }}]({{ project.url }})
{% include time.html start=project.start end=project.end %}
{{ project.excerpt }}
{% endfor %}