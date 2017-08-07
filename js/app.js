$('#media').one('load', function() {
	$(this).addClass('loaded');
}).each(function() {
	if(this.complete) {
		$(this).load();
	}
});;
