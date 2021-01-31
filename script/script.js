'use strict';

//トップページボタン//
$(function(){
	$('#page-top').click(function(){
		$("html,body").animate({scrollTop:0},500);
	});
});
//トップページボタン//
//トップページボタン表示//
$(function(){
	$('#page-top').hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			$('#page-top').fadeIn(500);
		} else {
			$('#page-top').fadeOut(500);
		}
	});
});
//トップページボタン表示//
//アコーディオン//
$(function(){
	$('#question1').click(function(){
		$('#ans1').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question2').click(function(){
		$('#ans2').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question3').click(function(){
		$('#ans3').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question4').click(function(){
		$('#ans4').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question5').click(function(){
		$('#ans5').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question6').click(function(){
		$('#ans6').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question7').click(function(){
		$('#ans7').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question8').click(function(){
		$('#ans8').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question9').click(function(){
		$('#ans9').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question10').click(function(){
		$('#ans10').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question11').click(function(){
		$('#ans11').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question12').click(function(){
		$('#ans12').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question13').click(function(){
		$('#ans13').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question14').click(function(){
		$('#ans14').slideToggle(500);
		return false;
	});
});

$(function(){
	$('#question15').click(function(){
		$('#ans15').slideToggle(500);
		return false;
	});
});
//アコーディオン//
//区分14 アコーディオンレスポンシブ//
$(function(){
	$('#left-item1').click(function(){
		$('#right-item1').slideToggle(500);
	});
});

$(function(){
	$('#left-item2').click(function(){
		$('#right-item2').slideToggle(500);
	});
});

$(function(){
	$('#left-item3').click(function(){
		$('#right-item3').slideToggle(500);
	});
});

$(function(){
	$('#left-item4').click(function(){
		$('#right-item4').slideToggle(500);
	});
});

$(function(){
	$('#left-item5').click(function(){
		$('#right-item5').slideToggle(500);
	});
});
//区分14 アコーディオンレスポンシブ//