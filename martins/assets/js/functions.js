$(function() {

  $('.nav-toggle').on('click', function() {
    var status = $(this).hasClass('is-open');
    if(status) {
      $('header, .nav-toggle, .nav-open, .nav-close').removeClass('is-open');
    }
    else {
      $('header, .nav-toggle, .nav-open, .nav-close').addClass('is-open');
    }
  })

  // $('.nav-toggle').on('click', function() {
  //   $('header').toggleClass('is-open');
  //   return false;
  // })
  //
  // $('header').hasClass('is-open', function() {
  //   $('svg.nav-open')
  // })

});
