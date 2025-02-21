function tabs(n)
{
  $('.exclusive .tabs-nav a').removeClass('active');
  $('.exclusive .tabs-nav a.t'+n).addClass('active');
  $('.exclusive .tabs-block').fadeOut(0);
  $('.exclusive .tabs-block.tab_'+n).fadeIn(222);
};

function tabsS(n)
{
  $('.selectcheckbox .tabs-nav a').removeClass('active');
  $('.selectcheckbox .tabs-nav a.t'+n).addClass('active');
  $('.selectcheckbox .tabs-block').fadeOut(0);
  $('.selectcheckbox .tabs-block.tab_'+n).fadeIn(222);
};

function tabsG(n)
{
  $('.gallery .tabs-nav a').removeClass('active');
  $('.gallery .tabs-nav a.t'+n).addClass('active');
  $('.gallery .tabs-block').fadeOut(0);
  $('.gallery .tabs-block.tab_'+n).fadeIn(222);
};

$(document).ready(function() {
  /*======Favorite=============*/
  $(".favorite").on("click", function() {
    $(this).toggleClass('active');
  });
  /*==========/favorite=========*/

  /*==========Tabs-nav (line)=========*/
  $(".tabs-nav a").on("click", function() {
      $(".tabs-nav a").removeClass('unborder');
      $(this).prev().toggleClass('unborder');
  });
  /*==========/tabs-nav (line)=========*/

  /*======Service=============*/
  $(".service__name").on("click", function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle(333);
  });
  /*==========/service=========*/

  /*======Selectcheckbox=============*/
$(".selectcheckbox__select").on("click", function(event) {
  event.preventDefault();
    $(this).next().slideToggle(333);
    $(".selectcheckbox__select").not(this).next().slideUp(333);
    $(this).toggleClass('active');
    $(".dropbox__dropdown").slideUp();
    $(".dropbox__select").removeClass('active');
});
$(".selectcheckbox__option").on("click", function(event) {
  event.preventDefault();
  $(this).parents(".selectcheckbox").find(".selectcheckbox__option").removeClass('selected');
  let prepend = $(this).parents(".selectcheckbox").find('.selectcheckbox__prepend');
  if(prepend.length) {
    $(this).parents(".selectcheckbox").find('.selectcheckbox__select-value').html($(this).find("span").html().toLowerCase());
  }
  else {
    $(this).parents(".selectcheckbox").find('.selectcheckbox__select').html($(this).find("span").html());
  }
  $(this).parents(".selectcheckbox").find('.selectcheckbox__select').removeClass('active');
  $(this).parents(".selectcheckbox__dropdown").slideUp();
  $(this).addClass('selected');
});
$(".selectcheckbox__dropdown-close").on("click", function(event) {
  event.preventDefault();
    $(".selectcheckbox__dropdown").slideUp();
    $('.selectcheckbox__select').removeClass('active');
});
/*==========/selectcheckbox=========*/

  /*======Dropbox=============*/
$(".dropbox__select").on("click", function(event) {
  event.preventDefault();
    $(this).next().slideToggle(333);
    $(".dropbox__select").not(this).next().slideUp(333);
    $(".dropbox__select").not(this).removeClass('active');
    $(this).toggleClass('active');
    $(".selectcheckbox__dropdown").slideUp();
    $(".selectcheckbox__select").removeClass('active');
});

$(".dropbox__dropdown-close").on("click", function(event) {
  event.preventDefault();
    $(".dropbox__dropdown").slideUp();
    $('.dropbox__select').removeClass('active');
});
/*==========/dropbox=========*/

/*==========Radiobox==========*/
$(".radiobox-btn").on("click", function() {
      $(".radiobox-btn").removeClass('unborder');
      $(this).prev().toggleClass('unborder');
  });
/*==========/radiobox==========*/

/*===========Range=============*/
    $( "#slider-range_square" ).slider({
      range: true,
      min: 0,
      max: 999,
      values: [ 140, 860],
      slide: function( event, ui ) {
        $('#square_min').val(ui.values[ 0 ]);
        $('#square_max').val(ui.values[ 1 ]);
       }
    });

   $( "#slider-range_max-price" ).slider({
      range:'min',
      min: 0,
      max: 15000,
      value: 9860,
      slide: function( event, ui ) {
        $('#max-price').val(ui.value);
       }
    });
  /*===========range=============*/

  /*==========Menu=============*/
$(".header__burger").on("click", function() {
  $(this).toggleClass("active");
  $(".header__menu").fadeToggle(111);
  $(".menu").slideToggle();
  $('body').toggleClass("hidden");
  $("main").toggleClass("hidden");
});

$(".menu__nav-name_drop").on("click", function (event) {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
    $(".menu__nav-name_drop").not(this).removeClass("active");
    $(".menu__nav-name_drop").not(this).next().slideUp();
  });
/*=========/menu==============*/

  /*==========Footer__menu========*/
  $(".footer__menu-name_drop").on("click", function (event) {
  if ($(window).width() < 766){
        $(this).toggleClass("active");
        $(this).next().slideToggle();
        $(".footer__menu-name_drop").not(this).removeClass("active");
        $(".footer__menu-name_drop").not(this).next().slideUp();
    };
  });
  /*==========/footer__menu========*/

/*===============Popup=================*/
$(".open-popup").on("click", function (event) {
    name_pop = $(this).attr('data-popup');
    event.preventDefault();
    $(".popup."+name_pop).fadeIn(333);
    $(".popup."+name_pop+" .popup__inner").fadeIn(333);
    $('body').addClass("hidden");
});
$(".popup__close,  .closex").on("click", function (event) {
    event.preventDefault();
    $(".popup").fadeOut(333);
    $(".popup__inner").fadeOut(333);
    $('body').removeClass("hidden");
});
$(".close-popup").on("click", function () {
    $(".popup").fadeOut(333);
    $(".popup__inner").fadeOut(333);
    $('body').removeClass("hidden");
});
/*==============/popup=================*/

/*==========infrastructure==========*/
$(".infrastructure__btn").on("click", function() {
      $(this).parents(".infrastructure__item").find(".infrastructure__description").fadeToggle();
      $(this).parents(".infrastructure__item").toggleClass('active');
  });
/*==========/infrastructure==========*/

/*==========Textbox==========*/
$(".textbox__btn-more").on("click", function(event) {
  event.preventDefault();
  $(this).next().slideToggle();
  $(this).toggleClass('active');
});
/*==========/textbox==========*/

/*==========Filters==========*/
$(".filters__btn-more").on("click", function(event) {
  event.preventDefault();
  $(".filters__more").slideToggle();
  $(this).toggleClass('active');
});

$(".filters__open").on("click", function(event) {
  event.preventDefault();
    $(".filters__content").slideDown();
});
$(".filters__close").on("click", function(event) {
  event.preventDefault();
    $(".filters__content").slideUp();
});
/*==========/filters__more==========*/

/*==========Sort==========*/
$(".result__sort-btn").on("click", function(event) {
  event.preventDefault();
  if ($(window).width() >= 766) {
    $(".result__sort-btn").not(this).removeClass('active');
    $(this).addClass('active');
  };
});

$(".result__sort-btn_row").on("click", function(event) {
  event.preventDefault();
  $(".result__inner").addClass('result__inner_row');
  $(".result__inner").show();
  $(".result__map").hide();
  $(".result__nav").show();
});

$(".result__sort-btn_box").on("click", function(event) {
  event.preventDefault();
  $(".result__inner").removeClass('result__inner_row');
  $(".result__inner").show();
  $(".result__map").hide();
  $(".result__nav").show();
});

$(".result__sort-btn_map").on("click", function(event) {
  event.preventDefault();
  if ($(window).width() >= 766){
        $(".result__inner").hide();
        $(".result__nav").hide();
        $(".result__map").show();
  }
  else {
    $(this).toggleClass("active");
    $(".result__inner").fadeToggle(111);
    $(".result__map").fadeToggle(111);
    $(".result__nav").fadeToggle(111);
  };
});
/*==========/sort==========*/

/*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;
 
    $("html, body").animate ({
      scrollTop: blockOffset - 30
    }, 1000);
  });
/*=========/smooth scroll=============*/

  /*=================Sliders===================*/
  /*========Stories__slider========*/
    new Swiper('.stories__slider', {
    slidesPerView: 5,
    spaceBetween: 6,
    loop: true,
    resizeReInit: true,
    navigation: {
      nextEl: '.stories__arrow',
    },
      breakpoints: {
        320: {
          slidesPerView: 2.7,
          spaceBetween: 4,
        },
        360: {
          slidesPerView: 3.7,
          spaceBetween: 4,
        },
        541: {
          slidesPerView: 5,
          spaceBetween: 6,
        },
      }
  });
/*=======/stories__slider========*/

/*========Popular__slider========*/
    new Swiper('.popular__slider', {
    slidesPerView: 1,
    loop: true,
    resizeReInit: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 6,
          centeredSlides: true,
        },
        761: {
          slidesPerView: 1,
          spaceBetween: 6,
        },
      }
  });
/*=======/popular__slider========*/

/*========Exclusive__slider========*/
    new Swiper('.exclusive__slider', {
    slidesPerView: 3,
    spaceBetween: 18,
    loop: true,
    resizeReInit: true,
    navigation: {
      nextEl: '.exclusive .slider-arrow',
    },
      breakpoints: {
        320: {
          slidesPerView: 1.15,
          spaceBetween: 7,
        },
        660: {
          slidesPerView: 2.15,
          spaceBetween: 7,
        },
        992: {
          slidesPerView: 3.15,
          spaceBetween: 7,
        },
        1401: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
      }
  });
/*=======/exclusive__slider========*/

/*========Start__slider========*/
    new Swiper('.start__slider', {
    slidesPerView: 2,
    spaceBetween: 18,
    loop: true,
    resizeReInit: true,
    navigation: {
      nextEl: '.start .slider-arrow',
    },
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 7,
        },
        541: {
          slidesPerView: 1.5,
          spaceBetween: 18,
        },
        992: {
          slidesPerView: 2.1,
          spaceBetween: 18,
        },
        1401: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
      }
  });
/*=======/start__slider========*/

/*========About__slider========*/
    new Swiper('.about__slider', {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,
    resizeReInit: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
/*=======/about__slider========*/

/*========Team__slider========*/
    new Swiper('.team__slider', {
    slidesPerView: 4,
    spaceBetween: 14,
    loop: true,
    resizeReInit: true,
    navigation: {
      nextEl: '.team .slider-arrow',
    },
      breakpoints: {
        320: {
          slidesPerView: 1.7,
          spaceBetween: 7,
        },
        600: {
          slidesPerView: 2.7,
          spaceBetween: 14,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 14,
        },
      }
  });
/*=======/team__slider========*/

/*========Reviews__slider========*/
    new Swiper('.reviews__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    resizeReInit: true,
    navigation: {
      nextEl: '.reviews .slider-arrow',
    },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 7,
        },
        660: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3.2,
          spaceBetween: 20,
        },
        1401: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }
  });
/*=======/reviews__slider========*/

/*========Awards__slider========*/
    new Swiper('.awards__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    resizeReInit: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        861: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }
  });
/*=======/awards__slider========*/

/*========Complex__slider========*/
    new Swiper('.complex__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    resizeReInit: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
/*=======/awards__slider========*/

/*========Infrastructure__slider========*/
    new Swiper('.infrastructure__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    resizeReInit: true,
    navigation: {
      nextEl: '.infrastructure .slider-arrow',
    },
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 7,
        },
        660: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3.1,
          spaceBetween: 20,
        },
        1401: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }
  });
/*=======/infrastructure__slider========*/

/*========Gallery__slider========*/
    new Swiper('.gallery__slider', {
    slidesPerView: 1,
    spaceBetween: 14,
    loop: true,
    resizeReInit: true,
    navigation: {
      nextEl: '.gallery .slider-arrow',
    },
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 14,
        },
        1401: {
          slidesPerView: 1,
          spaceBetween: 14,
        },
      }
  });
/*=======/gallery__slider========*/

/*========Object__slider========*/
    new Swiper('.object__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    resizeReInit: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 7,
        },
        991: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }
  });
/*=======/object__slider========*/

/*========Watched__slider========*/
    new Swiper('.watched__slider', {
    slidesPerView: 4,
    spaceBetween: 16,
    resizeReInit: true,
    navigation: {
      nextEl: '.watched .slider-arrow',
    },
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 14,
        },
        540: {
          slidesPerView: 2.1,
          spaceBetween: 14,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }
  });
/*=======/watched__slider========*/
/*=================/sliders===================*/

});

/*=========Tags=========*/
  window.onload = function () {
          var scr = $(".tags");
          scr.mousedown(function () {
              var startX = this.scrollLeft + event.pageX;
              var startY = this.scrollTop + event.pageY;

              scr.mousemove(function () {

                  this.scrollLeft = startX - event.pageX;

                  this.scrollTop = startY - event.pageY;

                  return false;

              });

          });

          $(window).mouseup(function () {
              scr.off("mousemove");
          });
      }
/*=========/tags=========*/

/*=================dropbox__select-qt==============*/
// Найдем div с id "counter_location" и все чекбоксы с name="area"
const counterLocation = document.getElementById('counter-area');
const checkboxes = document.querySelectorAll('input[name="area"]');

// Функция для обновления числа активных чекбоксов
function updateCounter() {
  // Считаем количество активных чекбоксов
  const activeCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

  // Если активных чекбоксов нет, оставляем поле пустым
  counterLocation.textContent = activeCount > 0 ? activeCount : '';
}

// Добавим обработчик событий для всех чекбоксов
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateCounter);
}); 
/*=================/dropbox__select-qt==============*/

/*================btn-reset===============*/
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-filters");
  const resetBtn = document.getElementById("btn-reset");

  form.addEventListener("input", () => {
    resetBtn.style.display = "block";
  });
});
/*================btn-reset===============*/