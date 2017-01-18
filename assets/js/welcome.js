$(function () {

    $('.card-front img').delay(750).fadeOut(1500);

    $('.intro-card').mouseenter(function () {
      if ($('.card-front img').css('display') == 'none') {
        $('.card-back').css('display', 'inline-block');

      }
      });

    $('.intro-card').mouseleave(function () {
        $('.card-back').css('display', 'none');
      });

  });
