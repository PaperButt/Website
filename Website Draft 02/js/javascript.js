var nav_is_shown = false;
var window_height = $(window).height();
console.log(window_height);

function onload() {
  console.log("Javascript Read");
  $("#page_title_container").css("height", window_height + "px");
}

$(function() {
  $("#nav_ball").click(function() {
    console.log(1);
    switch (nav_is_shown) {
      case false:
        $("#right_side").css("transform", "translateY(0) translateX(50px)");
        $("#darkness").css("opacity", "0.6");
        $("#darkness").css("pointer-events", "all");
        $("#nav_button1, #nav_button2, #nav_button3, #nav_button4").css("visibility", "visible");
        $("#nav_ball svg").css("transform", "rotate(-" + 90 + "deg)");
        $("#nav_bar").css("transform", "rotate(-5deg)");
        setTimeout(function() {
          $("li#nav_button1").css("top", 10 + "px");
        }, 300);
        setTimeout(function() {
          $("li#nav_button2").css("top", 50 + "px");
        }, 350);
        setTimeout(function() {
          $("li#nav_button3").css("top", 90 + "px");
        }, 400);
        setTimeout(function() {
          $("li#nav_button4").css("top", 130 + "px");
        }, 450);
        setTimeout(function() {
          console.log(2);
          $("#nav_bar").css("transform", "rotate(0deg)");
        }, 300);
        nav_is_shown = true;
        break;
      case true:
        $("#darkness").css("opacity", "0");
        $("#darkness").css("pointer-events", "none");
        setTimeout(function() {
          $("li#nav_button1").css("top", "-100%");
          $("li#nav_button2").css("top", "-100%");
          $("li#nav_button3").css("top", "-100%");
          $("li#nav_button4").css("top", "-100%");
        }, 0);
        setTimeout(function() {
          $("#nav_bar").css("transform", "rotate(-5deg)");
        }, 100);
        setTimeout(function() {
          $("#nav_button1, #nav_button2, #nav_button3, #nav_button4").css("visibility", "hidden");
          $("#nav_ball svg").css("transform", "rotate(" + 0 + "deg)");
          $("#nav_bar").css("transform", "rotate(95deg)");
          $("#right_side").css("transform", "translateY(100px) translateX(-500px)");
        }, 300);
        setTimeout(function() {
          console.log(2);
          $("#nav_bar").css("transform", "rotate(90deg)");
        }, 600);
        nav_is_shown = false;
        break;
    }
  });
});
