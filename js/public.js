$(function(){
    /*fp slide menu*/
    function slideFp(){
        $('.header2_inner > ul > li').on('mouseenter', function () {
            $(this).children('ul').stop().slideDown();
        });
        $('.header2_inner > ul > li').on('mouseleave', function () {
            $(this).children('ul').stop().slideUp();
        });
    }
    /*fp slide menu location*/
    function resizePublic () {
        if ($('.header2_inner > ul').length > 0) {
            var oLeft = $('.header2_inner > ul').offset().left;
            $('.header2 .header2_inner > ul > li > ul').css({
                paddingLeft: oLeft
            })
        }
    }
    slideFp();
    resizePublic ();
    /*nav_xs显示隐藏*/
    $('.header_xs > button').click(function(){
        $('.nav_xs').animate({'left':0 ,'opacity':'1'},700);
        $('.nav_bg').fadeIn();
    });
    $('.nav_bg').click(function(){
        $('.nav_xs').animate({'left':'-50%' ,'opacity':'0'},);
        $(this).hide();
    });
    /*nav_xs 手风琴+下拉菜单*/
    var $navXsA = $('.nav_xs ul li>a.plus');
    $navXsA.click(function(){
        if($(this).hasClass("plus")){
            $(this).removeClass('plus');
            $(this).addClass('minus');
            $(this).siblings('.list').slideDown();
            $(this).parent('li').siblings('li').children('.list').slideUp();
            $(this).parent('li').siblings('li').children('a.minus').addClass('plus').removeClass('minus');
        }else{
            $(this).addClass('plus');
            $(this).removeClass('minus');
            $(this).siblings('.list').slideUp();
        }
    });
    /*wow init*/
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
   /*back top*/
    $('.backtop').click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
    /*header scroll*/
    $(window).on('scroll', function(){
        if($(window).width() > 768){
            var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            var headerHeight = $('.headerFp').height();
            if($scrollTop>=headerHeight){
                $('.headerFp,.header2').addClass('active');
            }else{
                $('.headerFp,.header2').removeClass('active');
            }
            if($scrollTop > 350){
                $('.backtop').show();
            }else{
                $('.backtop').hide();
            }
        }else{
            return false;
        }
    });
});