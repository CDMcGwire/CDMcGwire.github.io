---
layout: page
title: "Welcome!"
date: June 11th, 2019
---

Site is under maintenance, but it already looks better than the last version, so it's up. 😁
{: class="notice"}

# About
Not a fan of wordy autobiographies, so here are some bullet points!
* Bachelor in Computer Science and Software Engineering
* Prefer C# but professionaly work in Java
* Interested in creating interactive systems, like games and user interfaces
* Experienced in release automation
* Very familiar with Bash scripting and SQL querying
* Currently work on enterprise messaging systems for a bank
* Taught kids to program for a year and a half
* Created most of this site from scratch
* Looking to get into Rust development
* I like to think of myself as an amateur graphic artist

## Proficiency Breakdown
### Languages
* C#
  * Work with multiple times a week for personal projects. Primarily game development. I consider it my go-to language and would happily take on more projects with it.
* Java
  * Work with daily for professional projects. Primarily messaging servers and data mapping. Would rather work in Kotlin, but I don't begrudge it.
* Bash
  * Work with daily for professional projects. Primarily release automation. Will continue to happily use for file system task automation.
* SQL
  * Work with daily for professional projects. I don't get any particular reason to do anything advanced most days, but I feel pretty comfortable with the majority of its functionality, vendor specific quirks excluded.
* C++ 98/11
  * Haven't done anything other than college projects in it, but it was the language I learned to program in. I'm comfortable with pointers and I familiarized myself the major updates from C++ 11.
* Python
  * Don't work with much lately, but I used to teach kids how to program various small projects with it. Like most devs, I enjoy the syntax and would consider my favorite scripting language when I need one to do more than operate a Linux file system.
* HTML/CSS
  * Knowing these is really more a matter of being proficient in the browser they run in. This website is my living example of my knowledge in the two and lack of desire to support IE 10 or under.
* Javascript
  * Occasionally work with professionally to make some asynchronous API calls on a GUI, but mostly used it to teach kids web development and build some small games with them.
* Kotlin
  * It's Java but without the verbosity and better functional programming support. I haven't used it much but it is, by design, trivial to migrate to as a Java developer. Would love to work with more.
* Rust
  * Just starting to learn, but I rather like its internal structure and most of its syntax design so I'm happy to continue with it.
{: class="feature-list"}

{% for page in site.pages %}
## [{{ page.title }}]({{ page.url }})
{{ page.summary }}
{% endfor %}