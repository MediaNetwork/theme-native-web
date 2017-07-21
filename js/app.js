$(window).ready(function() {
	var placeholder = $('#media');
	var preview = $('#media-preview');

	var imgLarge = new Image();
	imgLarge.src = placeholder.data('large');
	imgLarge.onload = function () {
		$(imgLarge).addClass('loaded');
	};

	placeholder.append(imgLarge);
});
