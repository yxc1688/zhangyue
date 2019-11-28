$(function(){
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
    /*header search */
    $('.column .header .nav li.search').click(function(){
        $('.column .search_input').css('top',0);
        $('.mask').css('z-index','22');
    });
    $('body').on('click','.mask',function(){
        $('.column .search_input').css('top','-188px');
        $('.mask').css('z-index','-1');
    });
    /*banner 点击scroll的时候到下一屏*/
    $('#scroll').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    });
    /*fullpage*/
    if($(window).width() > 768) {
        $('#dowebok').fullpage({
            navigation:true,
            navigationPosition:'left',
            navigationTooltips:["",'BUSINESS','GLOBAL',""],
            scrollBar: true,//必须设置为true，否则wow执行失效
            // scrollOverflow: true,
            /*
                在fullpage中 加入的video不会自动播放
                页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
                解决办法:在生成页面结构后立即触发此回调,初始化插件，激活文档
            */
            afterRender:function(anchorLink, index){
                $('.banner .swiper-slide video')[0].play();
                /*more animated*/
                $('#scroll').css('left',0);
                setHeight();
            },
            /*这个回调函数在窗口发生大小改变的时候被调用，就在部分调整。*/
            afterResize:function(){
                setHeight();
            },
            /*滚动到某一屏执行的函数*/
            afterLoad: function(anchorLink, index){
                var aArr = $('#fp-nav ul li a');
                if(index === 1 || index === 4 || index === 5){
                    $('#fp-nav').fadeOut(500);
                }else{
                    $('#fp-nav').fadeIn(500);
                }
                if(index ==1){
                    $('.column .header').show(0);
                }else{
                    $('.column .header').hide(0);
                }
                if(index === 2){
                    slideFp();
                    resizePublic();
                    $('#fp-nav ul li a').eq(1).css('opacity',0);
                    $('#fp-nav ul li a').eq(2).css('opacity',1);
                    $('#fp-nav ul li').eq(1).children('.fp-tooltip').css('opacity',1);
                    $('#fp-nav ul li').eq(1).siblings().children('.fp-tooltip').css('opacity',0);
                }
                if(index === 3){
                    slideFp();
                    resizePublic();
                    $('#fp-nav ul li a').eq(1).css('opacity',1);
                    $('#fp-nav ul li a').eq(2).css('opacity',0);
                    $('#fp-nav ul li').eq(2).children('.fp-tooltip').css('opacity',1);
                    $('#fp-nav ul li').eq(2).siblings().children('.fp-tooltip').css('opacity',0);
                }
                /*到第五屏的时候停止滚动*/
                if(index == 5){
                    $.fn.fullpage.setAutoScrolling(false);
                }else{
                    $.fn.fullpage.setAutoScrolling(true);
                }
                wow = new WOW({
                    animateClass: 'animated',
                    moble:false
                });
                wow.init();
            }
        });
    }
    /*给#fp-nav中的a添加href属性*/
    var arr=['#banner','#business','#global','#newSearch','#news'];
    var aArr = $('#fp-nav ul li a');
    $.each(aArr,function(index,element){
        $(element).attr('href',arr[index]);
    });
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
    /*business*/
    /*控制两边的高度相同*/
    $('#dowebok .business .container .content .right .top').height($('#dowebok .business .container .content .left .top').height());
    /*设置fullpage第四屏的高度*/
   function setHeight(){
       $('.searchSetHeight').height($('.search_wrap').height()-1);
       $('.searchSetHeight .fp-tableCell').height($('.search_wrap').height()-1);
   }
    /*ecology 鼠标移入移出效果*/
    var $ecology = $('.business .ecology');
    $.each($ecology,function(i,element){
        $(element)
            .mouseover(function(){
                // console.log(i);
                $(this).addClass('active');
                $(this).children().children().children('.bg1').hide();
                $(this).parent().siblings().children('.ecology').removeClass('active');
                $(this).parent().parent().siblings().children().children('.ecology').removeClass('active');
                $('#dowebok .business .business_bg> div').eq(i).show();
                $('#dowebok .business .business_bg> div').eq(i).siblings().hide();
            })
            .mouseout(function(){
                $(this).removeClass('active');
                $(this).children().children().children('.bg1').show();
            });
    });
    /*global video*/
    $('.global_inner > a >video')
        .mouseover(function(){
            $(this).css('opacity','1');
            $(this)[0].play();
        })
        .mouseout(function(){
            $(this).css('opacity','0');
            $(this)[0].pause();
        });
    /*global_xs video*/
    $('body').on('click', '.global_xs li img', function () {
        var videoSrc = $(this).attr('videosrc') || '';
        $('#video_model video').attr('src', videoSrc);
        $('#video_model').show();
        return false;
    });
    $('body').on('click', '#video_model .mask', function () {
        $('#video_model').hide();
        $('#video_model video').attr('src', '')
    });
    /*input[type="radio"]*/
    $('.search label').eq(3).children('span').show();
    $('.search label').click(function(){
        $(this).children('span').fadeIn(800);
        $(this).siblings('label').children('span').hide();
    });
});