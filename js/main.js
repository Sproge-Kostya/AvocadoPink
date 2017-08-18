$(document).ready(init);

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


function init(){

    window.trigMobile = false;
    window.trigTablet = false;
    initSlider();
    initModalAction();
}

$(window).resize(function(e){
    initSlider();
});

function initSlider(){

    if(isMobile() == 'mobile' && !trigMobile){

        trigMobile = true;

        var settings = {
          dots: false,
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          focusOnSelect: true

        };

        if(trigTablet){
            $(".benefits").slick('unslick'); 
            trigTablet = false;
        }

       $(".benefits").slick(settings);

    } 
    else if(isMobile() == 'tablet' && !trigTablet){
        
        trigTablet = true;

        var settings = {
          dots: false,
          slidesToShow: 2,
          arrows: false
        };
        
        if(trigMobile){
            $(".benefits").slick('unslick'); 
            trigMobile = false;
        } 


        $(".benefits").slick(settings);

    }
    else if(isMobile() == 'desctop'){

        if(trigTablet){
 
            $(".benefits").slick('unslick'); 
            trigTablet = false;
        }
        if(trigMobile){
 
            $(".benefits").slick('unslick'); 
            trigMobile = false;
        }

    }
}

function isMobile() {

    var result = 0;

    if($('body').width() < 768){
        result = 'mobile';
    }else  if($('body').width() < 992){
        result = 'tablet';
    }else{
        result = 'desctop';
    }

    return result;
}


function initModalAction(){

    $('a[data-toggle="modal"]').click(function(e){
        $('html').css('overflow','hidden');
    });

    $('.modal').on('hidden.bs.modal', function (e) {
        if($(e.target).closest('body').length > 0)
            setTimeout(function(){ 

                if(!$('body').hasClass('modal-open')){
                     $('html').attr('style','');
                }
            },100);

    });
}

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
      arrows: false,
    });

    $('.left').click(function(){
    $('.carousel').slick('slickPrev');
    })

    $('.right').click(function(){
    $('.carousel').slick('slickNext');
    })
});

jQuery(function($){
   $(".phone").mask("+38(999) 999-99-99");
});

if ($('.ordering').length == 0) {
  
  $('.area_order').hide();
  $('.payment').hide();
  $('.address_shipping').hide();

  $('.empty_basket').show();
}else{

  $('.area_order').show();
  $('.payment').show();
  $('.address_shipping').show();

  $('.empty_basket').hide();
}