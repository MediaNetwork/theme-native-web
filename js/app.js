$('#media').one('load', function() {
	$(this).addClass('loaded');
}).each(function() {
	if(this.complete) {
		$(this).load();
	}
});;

$(window).one('load', function() {
	var id = $('meta[property="fb:app_id"]').attr('content');

	if (!id) {
		return;
	}

	window.FB_APP_ID = id;

	$.getScript('/js/social.min.js', function() {});
});

if (typeof LazyWrite !== 'undefined') {
	setTimeout(LazyWrite.process, 1e3);
}

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('/sw.min.js').then(function(registration) {
			// Registration was successful
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		}, function(err) {
			// registration failed :(
			console.log('ServiceWorker registration failed: ', err);
		});
	});
}
