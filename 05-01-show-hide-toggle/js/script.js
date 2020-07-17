$(document).ready(function() {
	$('.item-box').on('click', 'a.info-link', function(event){
		event.preventDefault();

		//hide(), show(), toggle()
		//$(this).closest('.item-box').find('.more-info').show('slow', function(){
		//	alert('finished');
		//});

		//fadeIn(), fadeOut(), fadeToggle()
		//$(this).closest('.item-box').find('.more-info') .fadeToggle('slow');

		//slideDown(), slideUp(), slideToggle()
		$(this).closest('.item-box').find('.more-info') .slideToggle('slow');
	});
});
