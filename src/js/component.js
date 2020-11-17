$(document).ready(function () {
  $('.head-img img').click(function () {
    var destination = $(".program").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });

  $('#nav-icon').click(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })

    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('#menu').slideToggle(200);
  });

  $('#menu, .scroll').hover(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));

    })
  })

  $("#credit-summ").ionRangeSlider({
    skin: "round",
    hide_min_max: true,
    hide_from_to: true,
    prettify_enabled: true,
    grid: false,
    min: 500,
    max: 10000,
    from: 2500,
    step: 500
  });

  $("#credit-term").ionRangeSlider({
    skin: "round",
    hide_min_max: true,
    hide_from_to: true,
    prettify_enabled: true,
    grid: false,
    min: 7,
    max: 30,
    from: 12,
    step: 1
  });


  $('#credit-summ').change(function () {
    var number = $(this).val();
    $(this).parents('.credit-item').find('.current-summ').text(Number(number).toLocaleString('ru-RU') + " грн");
  })


  $('#credit-term').change(function () {
    $(this).parents('.credit-item').find('.current-summ').text($(this).val() + " дней");
  })

  $('.share-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });


  $('.share-slider ').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var elm = nextSlide + 1;
    if (elm < 10) elm = '0' + elm;
    $('#share-nav .curent').text(elm);
    $('#share-nav .all').text('0' + slick.slideCount);

  });

    $('#share-nav .arrow-right').on('click', function () {
    $('.share-slider').slick('slickNext');
  });

    $('#share-nav .arrow-left').on('click', function () {
    $('.share-slider').slick('slickPrev');
  });

  
    $('.section-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  
  
    $('.reviews-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });


  $('.reviews-slider ').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var elm = nextSlide + 1;
    if (elm < 10) elm = '0' + elm;
    $('#reviews-nav .curent').text(elm);
    $('#reviews-nav .all').text('0' + slick.slideCount);

  });

    $('#reviews-nav .arrow-right').on('click', function () {
    $('.reviews-slider').slick('slickNext');
  });

    $('#reviews-nav .arrow-left').on('click', function () {
    $('.reviews-slider').slick('slickPrev');
  });



  $('#section-slider_1').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var elm = nextSlide + 1;
    if (elm < 10) elm = '0' + elm;
    $('#slider_1-nav .curent').text(elm);
    $('#slider_1-nav .all').text('0' + slick.slideCount);

  });

    $('#slider_1-nav .arrow-right').on('click', function () {
    $('#section-slider_1').slick('slickNext');
  });

    $('#slider_1-nav .arrow-left').on('click', function () {
    $('#section-slider_1').slick('slickPrev');
  });

  



  $('#section-slider_2').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var elm = nextSlide + 1;
    if (elm < 10) elm = '0' + elm;
    $('#slider_2-nav .curent').text(elm);
    $('#slider_2-nav .all').text('0' + slick.slideCount);

  });

    $('#slider_2-nav .arrow-right').on('click', function () {
    $('#section-slider_2').slick('slickNext');
  });

    $('#slider_2-nav .arrow-left').on('click', function () {
    $('#section-slider_2').slick('slickPrev');
  });

  
$('.faq-title').click(function(){
  $(this).toggleClass('active');
  $(this).parent().find('.faq-content').slideToggle(300);
})
  
$('.title-toggle').click(function(){
  $(this).toggleClass('active');
  $(this).parent().find('.section-container').slideToggle(300);
  $('.section-slider').slick('refresh');
})
  
   $('.menu ul>li').click(function(){
//    $('.menu ul>li>ul').removeClass('active');
     $(this).toggleClass('active');
         $(this).find('ul').toggleClass('active');
   })
});
