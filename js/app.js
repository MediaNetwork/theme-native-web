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
}, 1e3);

// Mobile Safari in standalone mode
if(('standalone' in window.navigator) && window.navigator.standalone){

	// If you want to prevent remote links in standalone web apps opening Mobile Safari, change 'remotes' to true
	var noddy, remotes = false;

	document.addEventListener('click', function(event) {
		noddy = event.target;

		// Bubble up until we hit link or top HTML element. Warning: BODY element is not compulsory so better to stop on HTML
		while (noddy.nodeName !== 'A' && noddy.nodeName !== 'HTML') {
			noddy = noddy.parentNode;
		}

		if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes))
		{
			event.preventDefault();
			document.location.href = noddy.href;
		}
	}, false);
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
