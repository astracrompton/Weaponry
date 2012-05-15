---
layout: chapter
title: Weaponry Chapter One
---

<ul class="pages">
{% for post in site.categories.chapter1 reversed %}
  <li>
    <a href="..{{ post.url }}">
      <img src="../thumbs/{{ post.thumb }}" title="{{ post.image_text }}"/>
    </a>
  </li>
{% endfor %}
</ul>
