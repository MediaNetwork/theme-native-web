$(document).ready(function() {
	var $media = $('#media-container');

	$media.css('opacity', 1);

	$media.gridalicious({
		gutter: 5,
		width: 180,
		animate: true,
	});
});
