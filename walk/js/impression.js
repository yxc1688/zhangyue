$(function(){
    var swiper = new Swiper('.swiper1', {
        slidesPerView: 1,
        spaceBetween:0,
        loop: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        pagination: '.pagination1',
        paginationClickable: true,
    });
    if ($(window).width() > 768) {
        var about2Swiper = new Swiper('.sec2 .swiper-container', {
            speed: 800,
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 25,
            pagination: '.sec2_point',
            paginationClickable: true,
            // loop: true,
        })
    }else {
        var about1Swiper = new Swiper('.sec2_xs .swiper-container', {
            speed: 800,
            pagination: '.sec2_xs_point',
            paginationClickable: true,
        });
        var about2Swiper = new Swiper('.sec2 .swiper-container', {
            speed: 800,
            pagination: '.sec2_point',
            paginationClickable: true,
        })
    }
});