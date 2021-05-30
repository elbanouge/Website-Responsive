/* Custom JS */

// Load Title Home
// document.getElementById("title-home1").innerHTML = "";
// document.getElementById("title-home2").innerHTML = "";
// // document.getElementById("title-home3").innerHTML = "";
// var i = 0;
// var j = 0;
// var cnt = 0;

// function LoadTitle() {

//     var title = "Commune de Mirleft";

//     if (i < title.length) {
//         document.getElementById("title-home1").innerHTML += title.charAt(i);
//         document.getElementById("title-home2").innerHTML += title.charAt(j);
//         // document.getElementById("title-home3").innerHTML += title.charAt(i);
//         i++;
//     }
//     if (j < title.length) {
//         document.getElementById("title-home1").innerHTML += title.charAt(i);
//         document.getElementById("title-home2").innerHTML += title.charAt(j);
//         // document.getElementById("title-home3").innerHTML += title.charAt(i);
//         j++;
//     }

//     if (cnt == (title.length + 25)) {
//         i = 0;
//         document.getElementById("title-home1").innerHTML = "";
//         document.getElementById("title-home2").innerHTML = "";
//         // document.getElementById("title-home3").innerHTML = "";
//         cnt = 0;
//     }

//     cnt++;
//     setTimeout(LoadTitle, 150);
// }

$(document).ready(function () {

    // Language Popup
    $('#languageButton').click(function (e) {
        $('.language > .menu').toggle();
        e.preventDefault();
    });

    // Historique Popup
    $('.about-section .about-content .about-btn .btn-more').click(function (e) {
        $('.about-section .about-content .more').toggle();

        if ($(this).text() == "Lire la suite") {
            $(this).text("Lire moins");
        } else {
            $(this).text("Lire la suite");
        };

        e.preventDefault();
    });

    // Search Popup
    $('#searchButton').magnificPopup({
        removalDelay: 500,
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true
    });

    // Sticky Nav
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('.main-navbar-area').addClass('stickyadd');
        }
        else {
            $('.main-navbar-area').removeClass('stickyadd');
        }
    });

    // Scroll menu
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 0 && scroll <= 560) {
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.hom').addClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.his').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.moun').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.plag').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.act').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.cnt').removeClass('active');
        } else if (scroll <= 1160) {
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.his').addClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.hom').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.moun').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.plag').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.act').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.cnt').removeClass('active');
        }
        else if (scroll <= 2300) {
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.act').addClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.hom').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.his').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.plag').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.moun').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.cnt').removeClass('active');
        }
        else if (scroll <= 3600) {
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.moun').addClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.hom').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.plag').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.his').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.act').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.cnt').removeClass('active');
        }
        else if (scroll <= 4500) {
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.plag').addClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.hom').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.moun').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.his').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.act').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.cnt').removeClass('active');
        }
        else {
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.cnt').addClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.hom').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.moun').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.his').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.plag').removeClass('active');
            $('.main-nav .navbar .navbar-nav .nav-item .nav-link.act').removeClass('active');
        }
    });

    // Home Slider
    $(".banner-slider").owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000
    });

    // Tour Slider
    $('.plages-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },

            768: {
                items: 2,
            },

            991: {
                items: 3,
            },
        }
    });

    // Popup Video
    $('.youtube-popup').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});