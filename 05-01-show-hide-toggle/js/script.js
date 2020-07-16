$(document).ready(function() {
	$('.item-box').on('click', 'a.info-link', function(event){
		event.preventDefault();

		//hide(), show()
		//$(this).closest('.item-box').find('.more-info').show('slow', function(){
		//	alert('finished');
		//});

		//toggle()
		//$(this).closest('.item-box').find('.more-info').toggle('slow', function(){
		//	alert('finished');
		//});


		$(this).closest('.item-box').find('.more-info') .slideToggle('slow');
	});
});
