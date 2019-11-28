$(function(){
    $('.progress >ul li').mouseover(function(){
        var idx = $(this).index();
        // console.log($('.progress .inner a').eq(idx));
        $('.progress .inner a').eq(idx).fadeIn(500).siblings().fadeOut(500);
        $(this).addClass('active').siblings().removeClass('active');
    }).mouseout(function(){
        // $(this).removeClass('active');
    })
});