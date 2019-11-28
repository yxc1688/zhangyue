$(function(){
	//判断cookies是否存在
	if(Cookies.get('loading')) {
		document.querySelector('#loading').style.display = 'none';
	}else {
		document.querySelector('#loading').style.display = 'block';
	}
	function loadingVE(param) {
		setTimeout(function() {
			$('#loading video').trigger('load');
			$('#loading video').trigger('pause');
		}, 10);
		if(param == 'hide') {
			$('#loading').hide()
		}else {
			$('#loading').stop().fadeOut(800)
		}
	}
	$('#loading video').on('play', function() {
		$('.loading_ico').fadeOut();
	});
	$('#loading video').on('error ended', loadingVE);
	$('#loading a.close').on('click', loadingVE);
	if(Cookies.get('loading')){
		loadingVE('hide');
	} else {
		Cookies.set('loading', new Date().getTime());
	}
});