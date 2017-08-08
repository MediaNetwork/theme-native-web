$('#media').one('load', function() {
	$(this).addClass('loaded');
}).each(function() {
	if(this.complete) {
		$(this).load();
	}
});;

setTimeout(function() {
	var id = $('meta[property="fb:app_id"]').attr('content');

	if (!id) {
		return;
	}

	window.FB_APP_ID = id;

	$.getScript('/js/social.min.js', function() {});
}, 2e3);

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
			// Registration was successful
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		}, function(err) {
			// registration failed :(
			console.log('ServiceWorker registration failed: ', err);
		});
	});
}
