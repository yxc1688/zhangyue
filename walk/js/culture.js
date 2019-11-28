$(function(){
    // $('.progress >ul li').mouseover(function(){
    //     var idx = $(this).index();
    //     $('.progress .inner a').eq(idx).fadeIn(500).siblings().fadeOut(500);
    //     $(this).addClass('active').siblings().removeClass('active');
    // }).mouseout(function(){
    // });

    /*club_bottom swiper*/
    if ($(window).width() > 768) {
        var about6Swiper1 = new Swiper('.club_bottom_swiper .swiper-container', {
            speed: 800,
            loop: true,
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 14,
            prevButton: '.about_sec6_swiper_inner:nth-child(1) .prev',
            nextButton: '.about_sec6_swiper_inner:nth-child(1) .next',
        })
    } else {
        var about6Swiper1 = new Swiper('.club_bottom_swiper .swiper-container', {
            speed: 800,
            prevButton: '.about_sec6_swiper_inner:nth-child(1) .prev',
            nextButton: '.about_sec6_swiper_inner:nth-child(1) .next',
            pagination: '.club_bottom_point',
        })

    }
    /*more*/
    if($(window).width()<768){
        $('.page_wrap .more').click(function(){
            if($('.activity_wrap .container ul').eq(1).hasClass('hide') && $('.activity_wrap .container ul').eq(2).hasClass('hide')){
                $('.activity_wrap .container ul').eq(1).addClass('show').removeClass('hide');
                $('.activity_wrap .container ul').eq(1).css('margin-top','0');
            }else{
                if($('.activity_wrap .container ul').eq(2).hasClass('hide') && $('.activity_wrap .container ul').eq(1).hasClass('show')){
                    $('.activity_wrap .container ul').eq(2).addClass('show');
                }
            }
        })
    }else{
        $(".page .first,.page .one").click(function(){
            $('.page .one').addClass('current').siblings().removeClass('current');
            $(this).parent().parent().parent().children('ul').fadeOut();
            $(this).parent().parent().parent().children('ul').eq(0).fadeIn();
        });
        $('.page .two').click(function(){
            $('.page .two').addClass('current').siblings().removeClass('current');
            $(this).parent().parent().parent().children('ul').fadeOut();
            $(this).parent().parent().parent().children('ul').eq(1).fadeIn();
        });
        $(".page .last,.page .three").click(function(){
            $('.page .three').addClass('current').siblings().removeClass('current');
            $(this).parent().parent().parent().children('ul').fadeOut();
            $(this).parent().parent().parent().children('ul').eq(2).fadeIn();
        });
    }
});