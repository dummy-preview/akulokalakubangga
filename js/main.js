$(document).ready(function() {

    // Toggle menu on click
    $("#menu-toggler").click(function() {
        toggleBodyClass("menu-active");
    });
    $(".menu-item").click(function() {
        toggleBodyClass("menu-active");
    });

    $(".nav__link").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close1").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close2").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close3").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close4").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });


    function toggleBodyClass(className) {
        document.body.classList.toggle(className);
    }

    // nav fixed
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $(".header").addClass("fixshow");
            $(".nav__link").addClass("color-menu");
            $(".home-banner").addClass("spacetop");
            $(".about").addClass("spacetop");
            $(".logo-bsi1").removeClass("show-logo");
            $(".logo-bsi2").removeClass("hide-logo");

        } else {
            $(".logo-bsi1").addClass("show-logo");
            $(".logo-bsi2").addClass("hide-logo");
            $(".header").removeClass("fixshow");
            $(".home-banner").removeClass("spacetop");
            $(".about").removeClass("spacetop");
            $(".nav__link").removeClass("color-menu");
        }
    });

    $('.icon-sosmed').click(function() {
        if ($('.social').hasClass('social-show')) {
            $('.social').removeClass('social-show');
        } else {
            $('.social').addClass('social-show');
        }
    });

    // s backtotop
    var toggleHeight = $(window).outerHeight() * 0.5;

    $(window).scroll(function() {
        if ($(window).scrollTop() > toggleHeight) {
            $(".m-backtotop").addClass("active");
        } else {
            $(".m-backtotop").removeClass("active");
        }
    });

    $(".m-backtotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
});

// slider
var $swiper = $(".slide2");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide2", {
    spaceBetween: 1,
    slidesPerView: 2.5,
    centeredSlides: false,
    roundLengths: true,
    spaceBetween: 0,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var $swiper = $(".slide3");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide3", {
    slidesPerView: 2.05,
    centeredSlides: false,
    roundLengths: true,
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var $swiper = $(".slide4");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide4", {
    slidesPerView: 4.5,
    centeredSlides: false,
    roundLengths: true,
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

var $swiper = $(".slide5");
var $bottomSlide = null;
var $bottomSlideContent = null;

var mySwiper = new Swiper(".slide5", {
    slidesPerView: 2.1,
    centeredSlides: false,
    roundLengths: true,
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
// pagination
jQuery(function($) {
    var items = $("#content div.card");
    var numItems = items.length;
    var perPage = 12;
    items.slice(perPage).hide();

    $(".pagination-vip").pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "custom-theme",
        prevText: "&laquo;",
        nextText: "&raquo;",

        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
        }
    });

});
// s parallax
$.fn.moveIt = function() {
    var $window = $(window);
    var instances = [];

    $(this).each(function() {
        instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function() {
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst) {
            inst.update(scrollTop);
        });
    }, { passive: true });
}

var moveItItem = function(el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
    this.el.css('transform', 'translateY(' + (scrollTop / this.speed) + 'px)');
};

$(function() {
    $('[data-scroll-speed]').moveIt();
});


$('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
});

// cursor
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
let cursorScale = document.querySelectorAll(".cursor-scale");
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });


        gsap.set(cursor2, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });


    }
});


window.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

cursorScale.forEach(link => {
    link.addEventListener("mousemove", () => {
        cursor.classList.add("grow");
        if (link.classList.contains("small")) {
            cursor.classList.remove("grow");
            cursor.classList.add("grow-small");
        }
    });

    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
    });
});

// video modal
function videoId(button) {
    var $videoUrl = button.attr("data-video");
    if ($videoUrl !== undefined) {
        var $videoUrl = $videoUrl.toString();
        var srcVideo;

        if ($videoUrl.indexOf("") !== -1) {
            return (
                '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/embed/' +
                $videoUrl +
                '" data-video-id="' +
                $videoUrl +
                '" style="max-width: 605px;min-width: 325px;"> <section></section></iframe> <script async src="https://www.tiktok.com/embed.js"></script>'
            );

        } else {
            alert(
                "error");

            return false;
        }

    } else {
        alert("No video assigned.");
        return false;
    }
}

$(".lets-play").click(function(e) {
    e.preventDefault();
    var $theVideo = videoId($(this));
    if ($theVideo) {
        $("body").
        append(
            '<div class="active" id="video-wrap"><span class="video-overlay"></span><div class="video-container"><div class="video-mobile">' +
            $theVideo +
            '<button class="close-video">x</button></div></div></div>').

        addClass("active");
    }
});

$(document).on("click", ".close-video, .video-overlay", function() {
    $("#video-wrap").remove();
});