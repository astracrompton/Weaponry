---
layout: chapter-2
title: Weaponry Chapter Two
---

<ul class="pages">
{% for post in site.categories.chapter2 reversed %}
  <li>
    <a href="../{{ post.url }}">
      <img src="../thumbs/{{ post.thumb }}" title="{{ post.image_text }}"/>
    </a>
  </li>
{% endfor %}
</ul>
