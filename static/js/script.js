// var swiper = new Swiper(".course-slider", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//         },
//         576: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         },
//     },
// });

$('button.nav-link').click(function() {
    $('button.nav-link').removeClass('active');
    $(this).addClass('active');
})
// $(".menu-icon").click(function() {
//     $(".sidebar").addClass("active");
// });

// $('body').click(function() {
//     $(".sidebar").removeClass("active");
// });
// $('.sidebar, .menu-icon').click(function(event) {
//     event.stopPropagation(); // prevents executing the above event
// });

$(".filter-btn").click(function() {
    $(".filter-dropdown").toggleClass("show");
});

$("#basic-addon2").click(function() {
    $(".filter-dropdown").removeClass("show");
});

$(".navbar-toggler").on("click", function () {
    $("header, body, .main-wrpper, .navbar-brand").toggleClass("current");
});