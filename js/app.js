// $(window).ready(function() {
// 	var placeholder = $('#media');
// 	var preview = $('#media-preview');

// 	var imgLarge = new Image();
// 	imgLarge.src = placeholder.data('large');
// 	imgLarge.onload = function () {
// 		$(imgLarge).addClass('loaded');
// 	};

// 	placeholder.append(imgLarge);
// });

$('#media').one('load', function() {
	$(this).addClass('loaded');
}).each(function() {
	if(this.complete) {
		$(this).load();
	}
});;
