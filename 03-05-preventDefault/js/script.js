$(document).ready(function() {
	$('#example').on('click', 'a', function(e) {
		//disable links
		e.preventDefault();
		//stop parents
		e.stopPropagation();
		console.log('hello');
	});

	$('#example').on('click', function(e) {
		console.log('hello container');
	});
});
