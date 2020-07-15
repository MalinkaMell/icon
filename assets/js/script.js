$(document).ready(function () {
  //scroll to top
  const topbtn = $("#scroll-to-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      topbtn.addClass("show");
    } else {
      topbtn.removeClass("show");
    }
  });

  topbtn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
})