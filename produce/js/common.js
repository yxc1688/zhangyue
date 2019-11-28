$(function(){
    /*tab*/
    $('.banner_nav ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.detail .detail_content').eq($(this).index()).show().siblings().hide();
    });
    /*content swiper*/
    new Swiper('.hlkj_swiper', {
        // autoplay: 3000,
        loop: true,
        speed: 800,
        paginationClickable: true,
        pagination: '.hlkj_swiperP',
        prevButton: '.prev',
        nextButton: '.next'
    });
    new Swiper('.hlkj_swiper2', {
        // autoplay: 3000,
        loop: true,
        speed: 800,
        paginationClickable: true,
        pagination: '.hlkj_swiperP2',
        prevButton: '.prev2',
        nextButton: '.next2'
    });
});