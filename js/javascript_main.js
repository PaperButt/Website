/*
This javascript file is only used on the main page so
that we can have fancy graphics only on the front page
and not mess the other pages around
*/

// Last Edit
// 2Nov17 Pedro Pires (PaperButt) - Just added a lot of comenting

/*
The variables here are pretty simple but very important
later in the functions
*/

// All these do is get the view width and hight.
var window_height = $(window).height();
var window_width = $(window).width();

/*
This variable is atributed here because two funtions
are going to need it so it needs to be a global variable
*/
var window_scroll = $(window).scrollTop();

/*
We set these variables here because if we set them
inside their designated funtions it would just keep
setting them and so setting them here is much less
conflicting
*/
var img_is_fixed = false;
var title_is_fixed = false;

/*
This is the function that loads up when you start the page
What it does is it gets the window height
(set in the previous lines) and makes all the elements of
the page inside the content div the same height as the viewing window
That makes it look more "stylish" per say and looks a lot more fancy
*/
function on_load() {
  $("#page_title_container").css("height", window_height + "px");
  $("#content01").css("height", window_height + "px");
  $("#content02").css("height", window_height + "px");
  $("#content03").css("height", window_height + "px");
}

/*
This here is an event that triggers when the user
scrolls down the page and executes two other functions
later explaned
*/
$(window).scroll(function() {
  window_scroll = $(window).scrollTop();
  check_page_title_status();
  check_container02_status();
});

/*
  So this here might seem complicated at first glace
  but it's simple when you know what is written here
  This function checks if the user as scrolled under
  a specific height of the page. In this case the
  funtion checks if the user has scrolled over the
  content 01 which is the first bit of text in the
  page. Then if the user did it makes the position
  of the title relative and makes it stay on top of
  the page. When it isn't it forces the title of the
  page to be fixed to the window and makes it so it
  slowly fades away as the user scrolls. This would
  conflict with the content of the page besides the
  title therefore we also need to offset the content
  so it stays on the right spot on the page
*/
function check_page_title_status() {
  /*
  First we check if the user scroll from top
  is the same as the offset from the first
  content which in our case is the same as
  the window height and then if it's higher
  we make the title fixed to the window.
  */
  if (window_scroll <= window_height) {
    title_is_fixed = true;
  } else {
    title_is_fixed = false;
  }
  /*
  Now here we do all the fancy graphics. If
  the title is fixed we make it so the
  opacity decreases as you scroll down and
  creates a fancy effect. For this to happen
  we also need to offset the content because
  the title is not there anymore so all the
  content would go up in the page so we take
  the content and we offset it to compensate.
  If not fixed (fixed == false) then we make
  the title go back to the top of the page
  and set the container offset to 0 to
  compensate.
  */
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
}

/*
Basicly here is the same thing but for
the image behind the content
*/
function check_container02_status() {
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
