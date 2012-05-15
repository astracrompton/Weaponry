"use strict";


window.onload = function() {
  var next = $("#next_img");

  next.hover(function(evt) {
    next.attr("src", "../images/assets/skull_glow_next.gif");
  }, function(evt) {
    next.attr("src", "../images/assets/skull_normal_next.gif");
  });

  var prev = $("#prev_img");

  prev.hover(function(evt) {
    prev.attr("src", "../images/assets/skull_glow_previous.png");
  }, function(evt) {
    prev.attr("src", "../images/assets/skull_normal_previous.gif");
  });

  var last = $("#last_img");

  last.hover(function(evt) {
    last.attr("src", "../images/assets/bones_glow_last.gif");
  }, function(evt) {
    last.attr("src", "../images/assets/bones_normal_last.gif");
  });

  var first = $("#first_img");

  first.hover(function(evt) {
    first.attr("src", "../images/assets/bones_glow_first.gif");
  }, function(evt) {
    first.attr("src", "../images/assets/bones_normal_first.gif");
  });

};
