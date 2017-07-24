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
});

$(document).ready(function() {
	var $voteUp = $('#btn-vote-up');
	var $voteDown = $('#btn-vote-down');

	$voteUp.click(function() {
		$.post('/vote', {
			mediaId: window.GLOBAL.mediaId,
			type: 'like',
		})
		.done(function(data) {
			window.location = window.GLOBAL.next;
		})
	});

	$voteDown.click(function() {
		$.post('/vote', {
			mediaId: window.GLOBAL.mediaId,
			type: 'dislike',
		})
		.done(function(data) {
			window.location = window.GLOBAL.next;
		});
	});
});
