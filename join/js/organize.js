$(function(){
    if ($(window).width() > 768) {
        var yearList = '';
        /*遍历右面的文字*/
        (function(){
            $.getJSON('data/data1.json',function(json){
                $.each(json,function(i,item){
                   if(i===0){
                       var $txt = $("<p class='active' data-year='"+item.time+"'>" +
                           "<span>"+item.time+"</span>"+
                           item.content+
                           "<em>"+item.em+"</em>"+
                           "</p>");
                   }else{
                       var $txt = $("<p data-year='"+item.time+"'>" +
                           "<span>"+item.time+"</span>"+
                           item.content+
                           "<em>"+item.em+"</em>"+
                           "</p>");
                   }
                    $('.party_wrap_text_outer .party_wrap_text').append($txt);
                });
                /*必须放在json请求成功的回调函数中*/
                for (var i = 0; i < $('.party_wrap_text p').length; i++) {
                    var year = $('.party_wrap_text p').eq(i).attr('data-year');
                    i===0? yearList += '<li class="active"><span>' + year.slice(0,4) + '</span></li>':
                        yearList += '<li><span>' + year.slice(0,4) + '</span></li>'
                }
                $('.party_wrap_con_b').html(yearList);
            });
        }());
        var party2Swiper = new Swiper('.party_wrap_swiper .swiper-container', {
            speed: 800,
            effect: 'fade'
        });
        $('.party_wrap_con_b').on('click', 'li', function () {
            var i = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.party_wrap_text p').eq(i).addClass('active').siblings().removeClass('active');
            party2Swiper.slideTo(i);
        });
        $('.party_wrap_text').on('click', 'p', function () {
            var i = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('.party_wrap_con_b li').eq(i).addClass('active').siblings().removeClass('active')
            party2Swiper.slideTo(i);
        });
    } else {
        var party2Swiper = new Swiper('.party_wrap_swiper .swiper-container', {
            speed: 800,
            loop: true
        });

    }
    function resize() {
        $('.party_wrap_text_outer').outerHeight($('.party_wrap_swiper').height());
    }
    $(window).resize(function () {
        resize();
    });
    $(window).load(function () {
        resize();
    })
});