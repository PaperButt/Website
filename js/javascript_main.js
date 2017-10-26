var window_height = $(window).height();
var window_width = $(window).width();
var content01_offset = $("#content01").offset();
var content02_offset = $("#content02").offset();
console.log(content01_offset);
console.log(content02_offset);

function on_load() {
  $("#page_title_container").css("height", window_height + "px");
  $("#content01").css("height", window_height + "px");
  $("#content02").css("height", window_height + "px");
  $("#content03").css("height", window_height + "px");
}

$(window).scroll(function() {
  check_page_title_status();
  check_container02_status();
});

function check_page_title_status() {
  var window_scroll = $(window).scrollTop();
  var title_is_fixed = false;
  if (window_scroll <= window_height) {
    title_is_fixed = true;
  } else {
    title_is_fixed = false;
  }
  if (title_is_fixed == false) {
    $("#page_title_container").css("position", "relative");
    $("#content_container").css("top", 0);
  } else {
      $("#page_title_container").css("position", "fixed");
      console.log(50 - window_scroll / window_height * 100 + "%");
    $("#page_title_container").css("top", (window_scroll / 20));
    $("#page_title_container").css("opacity", (1 - window_scroll / window_height));
    $("#content_container").css("top", window_height + "px");
  }
  console.log(Boolean(window_scroll >= 2 * window_height));
}

function check_container02_status() {
  var window_scroll = $(window).scrollTop();
  var img_is_fixed = false;
  if (window_scroll >= window_height) {
    img_is_fixed = true;
  } else {
    img_is_fixed = false;
  }
  if (img_is_fixed == false) {
    $("#content02 img").css("position", "relative");
    $("#content02").css("top", 0);
    $("#content02 img").css("top" , 0);
  } else {
    $("#content02 img").css("position", "fixed");
    if ((0.5 - Math.abs((window_scroll - (2 * window_height)) / window_height)) < 0.4) {
      $("#content02 img").css("opacity", (0.5 - Math.abs((window_scroll - (2 * window_height)) / window_height)));
    } else {
      $("#content02 img").css("opacity", 0.4);
    }
    $("#content02 img").css("top" , (window_scroll - (2 * window_height)) / 20);
    $("#content02").css("top", window_height + "px");
  }
}
