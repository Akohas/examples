var $ = require('./modules/jquery.js');

$(document).ready(function(){
	$('.search-js').click(function(){
		$('.search-field-js').toggleClass('mobile-search_active');
	});
});