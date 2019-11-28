$(function(){
    $('.dot').mouseover(function(){
        $(this).children('a').stop().fadeIn(500);
    }).mouseleave(function(){
        $(this).children('a').stop().fadeOut();
    })
});