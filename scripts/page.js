"use strict";


window.onload = function() {
  var logo = $("#owc-logo");

  var _logoSrc = logo.attr("src");
  logo.hover(function(evt) {
    logo.attr("src", "../images/assets/owc_glow.png");
  }, function(evt) {
    logo.attr("src", _logoSrc);
  });

  var next = $("#next_img");

  next.hover(function(evt) {
    next.attr("src", "../images/assets/skull_glow_next.png");
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
    last.attr("src", "../images/assets/bones_glow_last.png");
  }, function(evt) {
    last.attr("src", "../images/assets/bones_normal_last.gif");
  });

  var first = $("#first_img");

  first.hover(function(evt) {
    first.attr("src", "../images/assets/bones_glow_first.png");
  }, function(evt) {
    first.attr("src", "../images/assets/bones_normal_first.gif");
  });

  $("#content-image > a").fancybox({
    width: "100%",
    heigth: "100%",
    autoScale: false
  });

};
