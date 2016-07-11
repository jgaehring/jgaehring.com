$(function () {

    $('.card-front > img').delay(1000).fadeOut(3000);

    $('.intro-card').mouseenter(function () {
        $('.card-back').css('display', 'inline-block');
      });

    $('.intro-card').mouseleave(function () {
        $('.card-back').css('display', 'none');
      });

  });
