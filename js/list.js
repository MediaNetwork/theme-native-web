$(document).ready(function() {
	var $media = $('#media-container');

	$media.css('opacity', 1);

	$media.gridalicious({
		gutter: 5,
		width: 300,
		animate: false,
		animationOptions: {
			complete: function(items) {
				var items = $('#media-container .item');

				items.each(function(index, item) {
					var preview = $(item).find('.media.preview');
					var width = $(item).outerWidth();
					var src = preview.attr('data-src');
					var optSrc = 'https://server1.mn-cdn.com/u/topgirls/media?w=' + width + '&url=' + src;

					var media = $('<img />')
						.addClass('media')
						.attr('src', optSrc);

					media.insertAfter(preview);

					media.one('load', function() {
						$(this).addClass('loaded');
					}).each(function() {
						if(this.complete) {
							$(this).load();
						}
					});
				});
			}
		}
	});
});
