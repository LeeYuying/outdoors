$(function () {
	/*首页——产品系列——搜索*/
	$('.two .row>div').hover(function () {
		$(this).children('a').show();
	},function () {
		$(this).children('a').hide();
	})
	
	/*首页——产品展示——阴影*/
	$('.three .row a').hover(function () {
		$(this).children('div').show(100).css('transform','rotate(0deg)');
	},function () {
		$(this).children('div').hide().css('transform','rotate(180deg)');
	})
	
	/*首页——热销产品*/
	var num = 0;
	var timer;
	function move () {
		timer = setInterval(function () {
			num++;
			if ($(window).width()>992) {
				if (num>4) {
					num = 0;
				}
				var speed = ($('.five .container ul li').width()+8)*num;
				$('.five .container ul').css({'margin-left':-speed,'transition':'all 0.5s linear'});
				if (num==4) {
					$('.five ol li').eq(1).attr('class','current').siblings().removeAttr('class');
				} else {
					$('.five ol li').eq(0).attr('class','current').siblings().removeAttr('class');
				}		
			}
			else if ($(window).width()>768) {
				if (num>5) {
					num = 0;
				}
				var speed = ($('.five .container ul li').width()+8)*num;
				$('.five .container ul').css({'margin-left':-speed,'transition':'all 0.5s linear'});
				if (num>4) {
					$('.five ol li').eq(2).attr('class','current').siblings().removeAttr('class');
				} else if (num>2) {
					$('.five ol li').eq(1).attr('class','current').siblings().removeAttr('class');
				}else {
					$('.five ol li').eq(0).attr('class','current').siblings().removeAttr('class');
				}	
			}
			else if ($(window).width()>600) {
				if (num>6) {
					num = 0;
				}
				var speed = ($('.five .container ul li').width()+8)*num;
				$('.five .container ul').css({'margin-left':-speed,'transition':'all 0.5s linear'});
				if (num>5) {
					$('.five ol li').eq(3).attr('class','current').siblings().removeAttr('class');
				} else if (num>3) {
					$('.five ol li').eq(2).attr('class','current').siblings().removeAttr('class');
				} else if (num>1) {
					$('.five ol li').eq(1).attr('class','current').siblings().removeAttr('class');
				}else {
					$('.five ol li').eq(0).attr('class','current').siblings().removeAttr('class');
				}	
			}
			else {
				if (num>7) {
					num = 0;
				}
				var speed = ($('.five .container ul li').width()+8)*num;
				$('.five .container ul').css({'margin-left':-speed,'transition':'all 0.5s linear'});
				$('.five ol li').eq(num).attr('class','current').siblings().removeAttr('class');
			}
		},3000)
	}
	move();
	
	$('.five ol li').click(function () {
		clearInterval(timer);
		if ($(window).width()>992) {
			var speed = ($('.five .container ul li').width()+8)*($(this).index()*4);
			num = $(this).index()*4;
		}
		else if ($(window).width()>768) {
			var speed = ($('.five .container ul li').width()+8)*($(this).index()*2+1);
			num = $(this).index()*2+1;
		}
		else if ($(window).width()>600) {
			var speed = ($('.five .container ul li').width()+8)*($(this).index()*2);
			num = $(this).index()*2;
		}
		else{
			var speed = ($('.five .container ul li').width()+8)*$(this).index();
			num = $(this).index();
		}	
		$('.five .container ul').css({'margin-left':-speed,'transition':'all 0.5s linear'});
		$(this).attr('class','current').siblings().removeAttr('class');	
		move();
	})
	$('.five ol li').eq(0).click(function () {
		clearInterval(timer);
		$('.five .container ul').css({'margin-left':0,'transition':'all 0.5s linear'});
		$(this).attr('class','current').siblings().removeAttr('class');	
		num = 0;
		move();
	})
	
	/*置顶*/
	$('footer span').click(function () {
		var scroll = $('.topTxt').offset().top;
		$('html,body').animate({'scrollTop':scroll},100);
	})
	
	/*产品展示*/
	$('.product>ul>li').click(function () {
		$('.productBody>div').eq($(this).index()).show().siblings().hide();
	})

	/*户外资讯*/
	$('.outdoors>ul').children('li').click(function () {
		$(this).children('a').attr('class','current');
		$(this).siblings().children('a').removeAttr('class');
		$('.position').children('a').eq(2).html($(this).children('a').html());
	})
	$('.outdoors>ul').children('li').eq(0).click(function () {
		$('.outdoorsNews').show();
		$('.outdoorsTrend').hide();
	})
	$('.outdoors>ul').children('li').eq(1).click(function () {
		$('.outdoorsNews').hide();
		$('.outdoorsTrend').show();
	})
	
	/*联系我们——地图*/
	
})