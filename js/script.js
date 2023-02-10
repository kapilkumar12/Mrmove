// JavaScript Document

$(".carousel").carousel({
  interval: 3000,
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 50 && $(window).width() >= 800) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top");
  }
});

$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,

        easing: "swing",

        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

$(".movers ul li").click(function () {
  $(".movers ul li").removeClass("on");

  $(this).addClass("on");
});

$(".mr-move li").click(function () {
  $(".mr-move li").removeClass("on");

  $(this).addClass("on");
});

$(document).ready(function () {
  var scrollTop = $(".scrollTop");

  $(window).scroll(function () {
    var topPos = $(this).scrollTop();

    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });

  $(scrollTop).click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );

    return false;
  });
});

$(".footer-sec h4 .icon").click(function () {
  $(".footer-sec h4").next().slideUp();

  $(".footer-sec h4 .icon").removeClass("icon-minus").addClass("icon-plus");

  $(this).parent().next().slideToggle();

  $(this).removeClass("icon-plus").addClass("icon-minus");
});

// Home banner select move and redirect on internal pages

$(document).ready(function () {
  $(".banner-move button").click(function () {
    if ($("#localMove").prop("checked")) {
      location.href = "local-moves.html";
    } else if ($("#interStateMove").prop("checked")) {
      location.href = "interstate-moves.html";
    } else if ($("#internationalMoves").prop("checked")) {
      location.href = "international-moves.html";
    } else if ($("#businessMove").prop("checked")) {
      location.href = "business-office-moves.html";
    } else {
      location.href = "index.html";
    }
  });

  $("#bannerMoves").click(function () {
    if ($("#localMove").prop("checked")) {
      $("#step-started").hide();

      $("#step1").show();
    } else if ($("#interStateMove").prop("checked")) {
      $("#step-started").hide();

      $("#step1").show();
    } else if ($("#internationalMoves").prop("checked")) {
      $("#step-started").hide();

      $("#step1").show();
    } else if ($("#businessMove").prop("checked")) {
      $("#step-started").hide();

      $("#step1").show();
    }

    //else{location.href = "index.html";}
  });
});

$(".faq-accordian dt").click(function () {
  $(".faq-accordian dt").removeClass("on");

  $(".faq-accordian dt")
    .find("span")
    .removeClass("glyphicon-chevron-up")
    .addClass("glyphicon-chevron-down");

  $(this)
    .find("span")
    .removeClass("glyphicon-chevron-down")
    .addClass("glyphicon-chevron-up");

  $(this).addClass("on");
});

$("#movingDate").datepicker({
  uiLibrary: "bootstrap",
});

$(document).ready(function () {
  $("#yr_frm_contact").submit(function (e) {
    //e.preventDefault();

    var response = grecaptcha.getResponse();

    if (response.length == 0) {
      alert("Please fill the captcha");
      return false;
    }
  });
});

//footer menu collaps on icon click
