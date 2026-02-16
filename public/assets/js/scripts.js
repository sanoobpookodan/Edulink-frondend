/*
Author       : Themesvila
Template Name: Edulink - Main Script
Version      : 1.0
*/

(function ($) {
  "use strict";

  /*PRELOADER JS*/
  jQuery(document).ready(function ($) {
    // $(".preloader_wrap").fadeOut();
    $(".preloader_wrap").delay(350).fadeOut("slow");
  });

  /*END PRELOADER JS*/
  jQuery(document).ready(function ($) {
    //Mobile Menu Js Start //
    $("#main-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    // Sidebar Toggle Js Start //
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });

    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    /*Counter */
    $(".counter-up").on(
      "inview",
      function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
          $(this)
            .find("span.cnumb")
            .each(function () {
              var $this = $(this);
              $({ Counter: 0 }).animate(
                { Counter: $this.text() },
                {
                  duration: 2000,
                  easing: "swing",
                  step: function () {
                    $this.text(Math.ceil(this.Counter));
                  },
                },
              );
            });
          $(this).unbind("inview");
        }
      },
    );
  });

  /*START Popup Searchbox JS*/
  $(".search_btn").on("click", function () {
    var menu = $(this).attr("data-menu");
    $(menu).toggleClass("popupsbox_active");
  });

  $(".popup_searchbox_wrapper").on("click", function (event) {
    if ($(event.target).hasClass("popup_searchbox_wrapper")) {
      $(".popupsbox_active").removeClass("popupsbox_active");
    }
  });

  $(".popup_close").on("click", function (event) {
    $(".popupsbox_active").removeClass("popupsbox_active");
  });

  /*END Popup Searchbox JS*/

  /*START Home Slider*/
  var homeSlider = new Swiper(".active-hslider", {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    effect: "fade", // 'fade', 'cube', 'coverflow', 'flip'
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".hslider-next",
      prevEl: ".hslider-prev",
    },
    pagination: {
      el: ".home-slider .swiper-pagination",
      clickable: true,
    },
  });
  /*END Home Slider*/

  /*START Course Category Slider*/
  var ccategorySlider = new Swiper(".ccategory_slider", {
    loop: false, // continuous loop
    slidesPerView: 5, // number of slides visible
    spaceBetween: 20, // space between slides
    navigation: {
      nextEl: ".ccategory-next",
      prevEl: ".ccategory-prev",
    },
    scrollbar: {
      el: ".ccategory-scrollbar",
      draggable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  /*END Course Category Slider*/

  /*Testimonials Slider*/
  var swiper = new Swiper(".testimonial_slider", {
    loop: false,
    grabCursor: true,
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  /*END Testimonials Slider*/

  /*START PARTNER LOGO*/
  $(".clients-slider").owlCarousel({
    margin: 60,
    autoPlay: 5000, //Set AutoPlay to 3 seconds
    items: 6,
    nav: false,
    dots: false,
    loop: true,
    responsive: {
      0: {
        items: 2,
      },
      575: {
        items: 3,
      },
      768: {
        items: 4,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
  /*END PARTNER LOGO*/

  /*START Testimonials 2 */
  $(".testimonial2_slider").owlCarousel({
    margin: 30,
    autoPlay: 5000, //Set AutoPlay to 3 seconds
    items: 2,
    nav: true,
    navText: [
      "<i class='ph ph-arrow-left'></i>",
      "<i class='ph ph-arrow-right'></i>",
    ],
    dots: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      575: {
        items: 1,
        nav: false,
      },
      768: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });
  /*END Testimonials 2 */

  //------------- DETAIL ADD - MINUS COUNT ORDER -------------//
  $(".btn-number").on("click", function () {
    var $button = $(this);
    var oldValue = $button
      .closest(".quantity_option")
      .find("input.quntity-input")
      .val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button.closest(".quantity_option").find("input.quntity-input").val(newVal);
  });

  /* WOW */
  new WOW().init();
})(jQuery);
