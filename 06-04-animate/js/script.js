$(document).ready(function() {
	$('#example1').on('click', function(){
		$(this).animate({
			opacity: '-=0.3'
		}, 500, function(){
			alert('completed!');
		});
	});

	$('#example2').on('click', function(){
		$(this).animate({
			left: "+=20",
			width: 40
		}, 50);
	});

	$('#example3').on('click', function(){
		$(this).animate({
			left: '+=20',
			width: '+=50'
		}, 2200);
	});
});
