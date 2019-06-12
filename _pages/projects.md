---
title: Projects
date: Jan 7th, 2018
summary: >-
  A collection of notable projects I have worked on.
---

{% assign projects = site.projects | sort: 'date' %}
{% for project in projects reversed %}
{% include content_header.html title=project.title start=project.start end=project.end link=project.url %}
{{ project.excerpt }}
{% endfor %}