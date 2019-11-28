$(function(){
    var brand8_swiper = new Swiper('.other_wrap_list .swiper-container', {
        speed: 800,
        loop: true,
    });

    $('.other_wrap_scroll_inner').on('mousedown', function (e) {
        if ($('.other_wrap_list_inner').width() < $(window).width()) return;
        var positionDiv = $(this).position();
        var distenceX = e.pageX - positionDiv.left;
        $('.other_wrap_scroll').on('mousemove', function (e) {
            var x = e.pageX - distenceX;
            if (x < 0) {
                x = 0
            } else if (x > $('.other_wrap_scroll').width() - $('.other_wrap_scroll_inner').outerWidth()) {
                x = $('.other_wrap_scroll').width() - $('.other_wrap_scroll_inner').outerWidth()
            }
            $('.other_wrap_scroll_inner').css({
                'left': x + 'px',
            });

            $('.other_wrap_list_inner').css({
                'left': -($('.other_wrap_list_inner').width() - $('.other_wrap_list').width()) * (x / ($('.other_wrap_scroll').width() - $('.other_wrap_scroll_inner').width())) + 'px',
            })
        });

        $(document).on('mouseup', function (e) {
            $('.other_wrap_scroll').off('mousemove')
        })
    });
    function auto () {
        var x_auto = 0;
        var offsetX = $('.other_wrap_scroll').width() - $('.other_wrap_scroll_inner').outerWidth()
        var time = offsetX / 100;
        var speed = 3000;
        var autoTimer = setInterval(function() {
            x_auto += time * 10;
            if (x_auto >= offsetX) {
                clearInterval(autoTimer);
                autoTimer = null;
                return
            }
            $('.other_wrap_scroll_inner').animate({
                'left': x_auto + 'px',
            }, speed, 'linear');
            $('.other_wrap_list_inner').animate({
                'left': -($('.other_wrap_list_inner').width() - $('.other_wrap_list').width()) * (x_auto / ($('.other_wrap_scroll').width() - $('.other_wrap_scroll_inner').width())) + 'px',
            }, speed, 'linear')
        }, speed);

        $('.other_wrap_scroll').on('mouseenter', function() {
            clearInterval(autoTimer)
        })
    }
    var st = $(window).scrollTop();
    var onOff = true;
    $(window).scroll(function () {
        st = $(window).scrollTop();
        if (st > $('.other_wrap').outerHeight() - 200 && onOff) {
            onOff = false;
            auto()
        }
    });

    var model_swiper = null;
    $('body').on('click', '[data-imgs]', function () {
        var imgs = $(this).attr('data-imgs').split(',') || '';
        var name = $(this).attr('data-name') || '';
        var downloadSrc = $(this).attr('data-download-src').split(',') || '';
        var downloadZip = $(this).attr('data-download-zip') || '';
        var slides = '';
        var model_imgs = '';
        for (var i = 0; i < imgs.length; i++) {
            slides += '<div class="swiper-slide">' +
                '<div class="inner">' +
                '<img src="' + "images/"+imgs[i].trim() + '" />' +
                '</div>' +
                '<p>' + name + '<span><a href="'+"images/"+downloadSrc[i] + '" download>' +
                '<img src="images/download.png" alt="">下载</a><em></em><' +
                'a href="'+"images/"+ downloadZip + '" download>' + '<img src="images/download.png" alt="">打包下载</a></span></p></div>'
            if (i == 0) {
                model_imgs += '<div class="active"><div class="inner"><img src="'+"images/" + imgs[i].trim() + '" /></div></div>'
            } else {
                model_imgs += '<div><img src="'+"images/" + imgs[i].trim() + '" /></div>'
            }
        }
        $('#img_model .swiper-wrapper').html(slides);
        $('#img_model .model_imgs_inner').html(model_imgs);
        if($(window).width()>768){
            $('html').css('overflow', 'hidden');
        }
        $('#img_model').fadeIn();

        model_swiper = new Swiper('#img_model .swiper-container', {
            speed: 800,
            effect: 'fade',
            pagination: '.img_modelP',
            paginationClickable: true,
            onSlideChangeStart: function (swiper) {
                var i = swiper.realIndex;
                $('.model_imgs_inner > div').eq(i).addClass('active').siblings().removeClass('active');
                if ($('.model_imgs_inner').height() - $('.model_imgs').height() > $('.model_imgs_inner > div.active').position().top - $('.model_imgs_inner > div.active').height()) {
                    $('.model_imgs_inner').stop().animate({
                        top: -$('.model_imgs_inner > div').eq(i).position().top
                    })
                }
            }
        });
        $('.model_inner').height($('.model_inner .swiper-slide').height())
        $('.model_imgs_outer').height($('.model_inner .swiper-slide').height())
    });

    $('body').on('click', '#img_model .mask, #img_model .close', function () {
        $('#img_model').fadeOut();
        $('.model_imgs_inner').stop().css({
            top: 0
        });
        model_swiper = null;
        $('#img_model .swiper-wrapper').html('');
        $('#img_model .model_imgs_inner').html('');
        $('html').css('overflow', '')
    });

    $('body').on('click', '.model_imgs_inner > div', function () {
        var i = $(this).index();
        model_swiper.slideTo(i)
    });

    $('body').on('click', '.model_imgs_outer .prev', function () {
        var i = $('.model_imgs_inner > div.active').index()
        i -= 1;
        if (i < 0) return;
        model_swiper.slideTo(i)
    });
    $('body').on('click', '.model_imgs_outer .next', function () {
        var i = $('.model_imgs_inner > div.active').index();
        var toggle = $('.model_imgs_inner > div').length;
        i += 1;
        if (i >= toggle) return;
        model_swiper.slideTo(i)
    });

    $('.other_wrap_list_inner img').imagesLoaded( function() {
        $('.other_wrap_list_inner').width($('.other_wrap_list_inner li').length * ($('.other_wrap_list_inner li').outerWidth(true) + 1) - 20)
    });
});