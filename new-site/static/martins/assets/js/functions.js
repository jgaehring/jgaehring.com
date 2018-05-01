// $(function() {

  // Toggling Main Nav

  $('.nav-toggle').on('click', function() {
    $('.page-header, .nav-toggle, .nav-open, .nav-close, .mobile-nav').toggleClass('is-open');
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
  openModal( $('#logout-link'), $('#logout-modal') );
  openModal( $('#contact-btn'), $('#contact-modal') );
  openModal( $('#wholesale-inquiry'), $('#wholesale-modal') );
  openModal( $('#register-link'), $('#register-modal') );
  openModal( $('#login-from-register'), $('#login-modal') );
  openModal( $('.add-to-cart'), $('#cart-modal') );

  // On clicking "Add to Cart", prevent form submission from refreshing page
  const preventRefresh = function(form, event) {
    $(form).on(event, function submitHandler(e) {
      e.preventDefault();
      actionUrl = $(this).attr('action');
      $.ajax({
        url: actionUrl,
        type: 'post',
        data: 'data',
        success: function () {
        },
        error: function (jXHR, textStatus, errorThrown) {
          console.log("Cart could not be updated. Error: ", errorThrown);
        }
      });
    });
  };

  preventRefresh('.item-form', 'submit')
  preventRefresh('#cart-modal .remove', 'click')

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
  closeModal( $('#logout-modal .close-modal, #logout-modal .keep-shopping'), $('#logout-modal') );
  closeModal( $('#contact-modal .close-modal'), $('#contact-modal') );
  closeModal( $('#wholesale-modal .close-modal'), $('#wholesale-modal') );
  closeModal( $('#register-modal .close-modal'), $('#register-modal') );
  closeModal( $('#register-link'), $('#login-modal') );
  closeModal( $('#login-from-register'), $('#register-modal') )
  closeModal( $('#cart-modal .close-modal'), $('#cart-modal') );
  closeModal( $('#cart-modal .btn.keep-shopping'), $('#cart-modal') );


  // TODO: Allow modal to be closed by clicking outside modal-content

  // Load thank you message after registering user

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

  // Load "Item Removed" message after clicking "Remove" from cart

  $('#cart-modal .remove.btn').on('click', function() {
    $('#cart-modal form').hide();
    $('#removed-msg').css('display', 'inline-block');
    setTimeout(function() {
      $('#cart-modal').addClass('is-closing');
      $('#cart-modal').removeClass('is-open');
      setTimeout(function() {
        $('#cart-modal').removeClass('is-closing');
        $('#cart-modal form').show();
        $('#removed-msg').hide();
      }, 300);
    }, 1500);
  });


// Initializaing jQueryUI widgets

  $('.select-menu').selectmenu({
    width: false,
  });
  $('.select-menu').menu();

  $('.checkbox').checkboxradio();

  $('.shop-item select.option').selectmenu({
    classes: {
      'ui-selectmenu-button': 'option',
      // 'ui-selectmenu-button-closed': 'option',
    },
    icons: {
      button: 'svg-chevron-down'
    },
    width: false
  });
  $('.shop-item select.option').menu();


// Press Quote Carousel


$('.press-carousel').slick( {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  mobileFirst: true,
});


// CLOSE JQUERY READY FUNCTION
// });
