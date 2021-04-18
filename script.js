$(document).ready(function () {
    let flag = false
    $('.menu-btn').click(function () {
        if (!flag) {
            $('.menu').slideDown();
            $('.menu').css('display', 'flex');
            $('.l-one').css('transform', 'rotate(45deg)');
            $('.l-two').css('margin-top', '-11px');
            $('.l-two').css('transform', 'rotate(-45deg)');
            $('.l-three').css('background-color', 'transparent');
            $('.lines').css('transition', '.25s');
            $('.menu-line').css('margin-top', '12px');
        } else {
            $('.menu').slideUp();
            $('.l-one').css('transform', 'rotate(0)');
            $('.l-two').css('margin-top', '0');
            $('.l-two').css('transform', 'rotate(0)');
            $('.l-three').css('background-color', 'white');
            $('.lines').css('transition', '.25s');
            $('.menu-line').css('margin-top', '0');
        }
        flag = !flag
    })



})
// $('.slider-nav').slick({
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//   });
// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
$('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<a class="prev"  cursor: pointer; > &#10229; </a>',
    nextArrow: '<a class="next2" cursor: pointer;> &#10230; </a>',
    // speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: false,

    // asNavFor: '.slider-for',
    dots: true,
    // centerMode: true,
    // focusOnSelect: true
    responsive: [
        {
            breakpoint: 1040,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true

            }
        }
    ]
});