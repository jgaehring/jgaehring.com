// $(function() {

  // Toggling Main Nav

  $('.nav-toggle').on('click', function() {
    $('header, .nav-toggle, .nav-open, .nav-close').toggleClass('is-open');
  })

  // MODALS

  // Opening Modals

  const openModal = function(modalOpener, modalContent) {
    modalOpener.on('click', function() {
      modalContent.addClass('is-opening');
      setTimeout(function() {
        modalContent.addClass('is-open');
        modalContent.removeClass('is-opening');
      }, 300);
    })
  }

  openModal( $('#login-link'), $('#login-modal') );
  openModal( $('#contact-btn'), $('#contact-modal') );
  openModal( $('#wholesale-inquiry'), $('#wholesale-modal') );
  openModal( $('#register-link'), $('#register-modal') );
  openModal( $('#login-from-register'), $('#login-modal') );


  // Closing Modals

  const closeModal = function(modalCloser, modalContent) {
    modalCloser.on('click', function() {
      modalContent.addClass('is-closing');
      modalContent.removeClass('is-open');
      setTimeout(function() {
        modalContent.removeClass('is-closing');
      }, 300);
    })
  }

  closeModal( $('#login-modal .close-modal'), $('#login-modal') );
  closeModal( $('#contact-modal .close-modal'), $('#contact-modal') );
  closeModal( $('#wholesale-modal .close-modal'), $('#wholesale-modal') );
  closeModal( $('#register-modal .close-modal'), $('#register-modal') );
  closeModal( $('#register-link'), $('#login-modal') );
  closeModal( $('#login-from-register'), $('#register-modal'))


  // TODO: Allow modal to be closed by clicking outside modal-content

  // Thank you after registering user

  $('#register-modal .btn').on('click', function() {
    $('#register-modal form').hide();
    $('#thank-you').show();
    setTimeout(function() {
      $('#register-modal').addClass('is-closing');
      $('#register-modal').removeClass('is-open');
      setTimeout(function() {
        $('#register-modal').removeClass('is-closing');
      }, 300);
    }, 2500)
  })


// jQueryUI

  $('#billing-state').selectmenu({
    width: false
  });

  $('#billing-state').menu()

  $('#shipping-is-billing').checkboxradio()

  $('#shipping-state').selectmenu({
    width: false
  });
  $('#shipping-state').menu();

  $('#shipping-method').selectmenu({
    width: false
  });
  $('#shipping-method').menu();

  $('#card-type').selectmenu({
    width: false
  });
  $('#card-type').menu();

  $('#expiry-month').selectmenu({
    width: false
  })
  $('#expiry-month').menu()


  $('#expiry-year').selectmenu({
    width: false
  })
  $('#expiry-year').menu()

  $('.shop-item select.option').selectmenu({
    classes: {
      'ui-selectmenu-button': 'option',
      // 'ui-selectmenu-button-closed': 'option',
    },
    width: false
  })
  $('.shop-item select.option').menu()


// Press


$('.press-carousel').slick( {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  mobileFirst: true,
});


// CLOSE JQUERY READY FUNCTION
// });
