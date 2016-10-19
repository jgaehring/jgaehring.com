$(function() {

// Toggling Main Nav

  $('.nav-toggle').on('click', function() {
    $('header, .nav-toggle, .nav-open, .nav-close').toggleClass('is-open');
  })

// Activating Modals
// TODO: Make this into a reusable function

  $('#wholesale-inquiry').on('click', function() {
    $('#wholesale-modal').addClass('is-opening');
    setTimeout(function() {
      $('#wholesale-modal').addClass('is-open');
      $('#wholesale-modal').removeClass('is-opening');
    }, 300);
  })

  $('#contact-btn').on('click', function() {
    $('#contact-modal').addClass('is-opening');
    setTimeout(function() {
      $('#contact-modal').addClass('is-open');
      $('#contact-modal').removeClass('is-opening');
    }, 300);
  })


  $('#wholesale-modal .close-modal').on('click', function() {
    $('#wholesale-modal').addClass('is-closing');
    $('#wholesale-modal').removeClass('is-open');
    setTimeout(function() {
      $('#wholesale-modal').removeClass('is-closing');
    }, 300);
  })

  $('#contact-modal .close-modal').on('click', function() {
    $('#contact-modal').addClass('is-closing');
    $('#contact-modal').removeClass('is-open');
    setTimeout(function() {
      $('#contact-modal').removeClass('is-closing');
    }, 300);
  })

  // ORIGINAL FUNCTION
  // $('.close-modal').on('click', function() {
  //   $('.modal').addClass('is-closing');
  //   $('.modal').removeClass('is-open');
  //   setTimeout(function() {
  //     $('.modal').removeClass('is-closing');
  //   }, 300);
  // })


// TODO: Allow modal to be closed by clicking outside modal-content


});
