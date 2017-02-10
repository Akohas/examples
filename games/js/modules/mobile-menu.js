module.exports = function(){
	$('.menu-js').click(function(){
		$('.nav-js').toggleClass('mobile-nav_active');
		if($('.search-field-js').hasClass('mobile-search_active')){
			$('.search-field-js').removeClass('mobile-search_active');
		}
	});
	$('.search-js').click(function(){
		$('.search-field-js').toggleClass('mobile-search_active');
		if($('.nav-js').hasClass('mobile-nav_active')){
			$('.nav-js').removeClass('mobile-nav_active');
		}
	});



}