var us = navigator.userAgent.toLowerCase();
$(function () {
	// IOS下载按钮图标替换
	if(config_isOn){
		config_app_type==1&&$('#jsBtnIos').attr('src','images/ios_btn_jx.png');
		config_app_type==2&&$('#jsBtnIos').attr('src','images/ios_btn_sh.png');
		config_app_type==3&&$('#jsBtnIos').attr('src','images/ios_btn_yms.png');
	}else{
		$('#jsBtnIos').attr('src','images/ios_btn_qyb.png');
	}
	if ((us.indexOf('android') > -1 || us.indexOf('linux') > -1) || navigator.platform.toLowerCase().indexOf('linux') != -1) {
		$('.android').css('display','block');
		$('.android').click(function(){
			if (us.indexOf('micromessenger') > -1){
	    		$('.tips,.mask').show();				
			}else{			
				window.location.href = config_an_url;
	    	}
		})		
	}else if (us.indexOf('iphone') > -1 || us.indexOf('ipad') > -1) {
		$('.ios').css('display','block');
		$('.ios').click(function(){		
			if (us.indexOf('micromessenger') > -1){
				$('.ios').css('display','block');
				$('.tips').addClass('iostips1');
				$('.tips,.mask').show();
			}else{
				if(config_isOn){
					var clipboard = new Clipboard('.copyCode'),count=0;                    
					clipboard.on('success', function(e) {                    
						console.log('复制成功！')
						window.location.href = config_ios_url;
						count++;
						if(count >= 1){
							clipboard.destroy();
							clipboard = new Clipboard('.copyCode');
						};
					});
				}else{
					window.location.href = 'teach.html';
				}
	
				// $('.iostips').show();				
				// setTimeout(function(){
				// 	$('.iostips').hide();
				// },3000)
				
			}		
		})
	}

	//ios掉签弹窗
	var swiperMobile = null,isInit=false;
	$('.getHelp').click(function(){
		$('#js_pop,.mask').fadeIn();
		if(!isInit){
			swiperMobile = new Swiper('#swiperMobile', {			
				autoplay :false,
				pagination:{
					el:'.swiper-pagination-mobile',
					clickable:false
				},    			
			});	
			isInit=true;
		}		
	})
	$('.popClose').click(function(){
		$('#js_pop,.mask').fadeOut(300);
		setTimeout(() => {
			swiperMobile.slideTo(0);
		}, 300);
	})
	
	if($('#swiperPC').length){
		new Swiper('#swiperPC', {
			direction:'vertical',
			speed:100,
		    autoplay : {
				delay:3000,
				disableOnInteraction:false
			},
			pagination: {
				el: '.swiper-pagination-pc',
				clickable :true,
			},		    		    		    
			noSwiping:true,
			on:{
				init: function(){ 
					this.slides.eq(0).addClass('ani-slide');
			  	},
			  	transitionStart: function(){
					for(i=0;i<this.slides.length;i++){
						slide=this.slides.eq(i);
						slide.removeClass('ani-slide');
					}
				},
				transitionEnd: function(){
					this.slides.eq(this.activeIndex).addClass('ani-slide');				
			   	},
			}			
		});				
	}

	var downHtml = '<div class="mask"></div><div id="downBox" class="layer_fadeInDown"><div class="close"></div><div class="qcode"><img src="images/qcode.png"/></div><p>扫描二维码下载Beauty	App</p></div>';
		
	//down
	$('#downBtn').click(function(){		
		$('body').append(downHtml);
		$('.mask,#downBox').show()
	})
	
	$(document).on('click','.close',function(){
		$('.mask,#downBox').remove();
	})
	
	//qcode
	$('#weibo').hover(function(){
		$('#wbcode').show()
	},function(){
		$('#wbcode').hide()
	})
	$('#weixin').hover(function(){
		$('#wxcode').show()
	},function(){
		$('#wxcode').hide()
	})
	$('#qq').hover(function(){
		$('#qqcode').show()
	},function(){
		$('#qqcode').hide()
	})
	
})
