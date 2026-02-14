(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    // Scroll back to top

    var progressWrap = document.querySelector(".progress-wrap");
    var progressPath = document.querySelector(".progress-wrap path");

    // Stop script if element does not exist
    if (!progressWrap || !progressPath) {
      return;
    }

    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";

    progressPath.style.strokeDasharray = pathLength + " " + pathLength;

    progressPath.style.strokeDashoffset = pathLength;

    progressPath.getBoundingClientRect();

    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    var updateProgress = function () {
      var scroll = jQuery(window).scrollTop();
      var height = jQuery(document).height() - jQuery(window).height();

      var progress = pathLength - (scroll * pathLength) / height;

      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    jQuery(window).on("scroll", updateProgress);

    var offset = 50;
    var duration = 550;

    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(progressWrap).addClass("active-progress");
      } else {
        jQuery(progressWrap).removeClass("active-progress");
      }
    });

    jQuery(progressWrap).on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);
