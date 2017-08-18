
    var stickyHeader1 = jQuery('.bot-nav');

    jQuery(window).scroll(function(e) {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollPosition >= 90 ) {
            stickyHeader1.addClass('bot-nav-fixed')
        } else {
            stickyHeader1.removeClass('bot-nav-fixed')
        }
    });

    var stickyHeader = jQuery('.nav-brand');

    jQuery(window).scroll(function(e) {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if( scrollPosition >= 75 ) {
            stickyHeader.addClass('nav-brand-fixed')
        } else {
            stickyHeader.removeClass('nav-brand-fixed')
        }
    });

$(document).on('ready', function() {
    $(".variable").slick({
        dots: false,
        infinite: true,
        variableWidth: true,
        arrows: false
    });

    $('.left').click(function(){
    $('.variable').slick('slickPrev');
    })

    $('.right').click(function(){
    $('.variable').slick('slickNext');
    })

    $(".modals").slick({
        dots: false,
        infinite: true,
        variableWidth: true,
        arrows: false
    });
    $('.left').click(function(){
      $('.modals').slick('slickPrev');
    })

    $('.right').click(function(){
      $('.modals').slick('slickNext');
    })

   $('.carousel').slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      arrows: false
    });

    $('.left').click(function(){
    $('.carousel').slick('slickPrev');
    })

    $('.right').click(function(){
    $('.carousel').slick('slickNext');
    })

    $('.goodlist').slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      arrows: false,
      arrows: false
    });

    $('.left').click(function(){
      $('.goodlist').slick('slickPrev');
    })

    $('.right').click(function(){
      $('.goodlist').slick('slickNext');
    })

});