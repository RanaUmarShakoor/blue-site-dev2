$(document).ready(function () {
  /* *** Counter JS *** */
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            // $(this).text(Math.ceil(now));
            $(this).text(
              Math.ceil(now)
                .toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            );
          },
        }
      );
  });
  /* *** End Counter JS *** */

  $(".navbar-toggler").on("click", function () {
    $("header, body, .main-wrpper, .navbar-brand").toggleClass("current");
  });

  /* *** Courses Slider *** */
  var swiper = new Swiper(".course-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 15,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      576: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });
  /* *** End Courses Slider *** */

  /* *** Full Stack Slider *** */
  var swiper = new Swiper(".full-stack-slider-wrp", {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 7,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
      },
      // when window width is >= 640px
      576: {
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
      },
      768: {
        slidesPerView: 1,
        grid: {
          rows: 7,
        },
      },
      1400: {
        slidesPerView: 1,
        grid: {
          rows: 7,
        },
      },
    },
  });
  /* *** End Full Stack Slider *** */

  /* *** Exchange Slider *** */
  var swiper = new Swiper(".exchange-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.3,
        centeredSlides: true,
        spaceBetween: 15,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.3,
        centeredSlides: true,
        spaceBetween: 15,
      },
      // when window width is >= 640px
      576: {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });
  /* *** End Exchange Slider *** */

  /* *** Program Slider *** */
  var swiper = new Swiper(".program-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.3,
        centeredSlides: true,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.3,
        centeredSlides: true,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      576: {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
  /* *** End Program Slider *** */

  /* *** Card Slider *** */
  var swiper = new Swiper(".card-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.3,
        centeredSlides: true,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      576: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
  /* *** End Card Slider *** */

  /* *** Main Slider *** */
  var swiper = new Swiper(".main-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade",
    autoplay: {
      delay: 6000,
    },
    speed: 2000,
    loop: true,
  });

  var swiper = new Swiper(".study-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade",
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
      },
      // when window width is >= 640px
      576: {
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
      },
      768: {
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
      },
      1400: {
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
      },
    },
  });
  /* *** End Main Slider *** */

  /* *** Video Js *** */
  $(".play").on("click", function () {
    $(this).parents(".video-block").toggleClass("play");
  });

  $(".play").click(function () {
    if ($(this).next().children(".video-div").get(0).paused) {
      $(this).next().children(".video-div").get(0).play();
    } else {
      $(this).next().children(".video-div").get(0).pause();
    }
  });

  const videoContainer = document.querySelector(".tab-video");
  const video = document.querySelector(".video-div");

  videoContainer.addEventListener("mouseleave", () => {
    video.removeAttribute("controls");
  });

  videoContainer.addEventListener("mouseenter", () => {
    video.setAttribute("controls", "");
  });
  /* *** End Video Js *** */

  // /* *** Back To Top *** */
  //   var btn = $('#myBtn');

  //   $(window).scroll(function() {
  //     if ($(window).scrollTop() > 300) {
  //       $('#myBtn').addClass('show');
  //     } else {
  //       $('#myBtn').removeClass('show');
  //     }
  //   });

  //   $(document).on('click','#myBtn', function(e) {
  //     e.preventDefault();
  //     $('html, body').animate({scrollTop:0}, '5000');
  //   });
});

var btn = $("#myBtn");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $("#myBtn").addClass("show");
  } else {
    $("#myBtn").removeClass("show");
  }
});

$(document).on("click", "#myBtn", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "5000");
});
/*** VIDEO JS *****/

// Jobs Page Carousel
/**
var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();
var scrollPosition = 0;

let carItems = 4, distance = 25;

$(".carousel-control-next").on("click", function () {
  if($(window).width()<768){
    carItems = 2;
    distance = 20;
  }
  if (scrollPosition < (carouselWidth - cardWidth * carItems)) { //check if you can go any further
    scrollPosition += (cardWidth + distance) *carItems;  //update scroll position
    $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
  }
});

$(".carousel-control-prev").on("click", function () {
  if($(window).width()<768){
    carItems = 2;
    distance = 20;
  }
  if (scrollPosition > 0) {
    scrollPosition -= (cardWidth + distance)*carItems;
    $(".carousel-inner").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});
 */

// Video Page 
$(".video-div").on("mouseenter", function(){
  this.play();
})

$(".video-div").on("mouseleave", function(){
  this.pause();
  this.load()
})

var modal = document.getElementById("videoModal");

$(".video-card").on("click", function(){
  let title = "";
  title = ( $.trim( $(this).children('.card-body').children('.card-title').text() ) );

  $(".video-title").text(title);
  modal.style.display = "flex";

  $("modal-video").load();
  $("modal-video").play();
})

// When the user clicks on <span> (x), close the modal
$(".close").on("click", function(){
  $(".modal-video").trigger('pause');
  modal.style.display = "none";
})


// End Video Page 

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();Z
});

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  responsiveClass: true,
  responsiveRefreshRate: 10,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    400: {
      items: 2,
    },
    991: {
      items: 4,
    },
  },

  nav: true,
  navText: [
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
  </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>`,
  ],
});

