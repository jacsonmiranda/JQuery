$(document).ready(function() {
	$('#example').on('change', 'select', function(){
		var selected = $(this).find('option:selected');

		var value = selected.val();
		//var price = selected.attr('data-price');
		var price = selected.data('price');

		console.log(value);
		console.log(price);
		console.log(selected.attr('data-price'));

		if(price) {
			$('#result').html(value + ' ' + price);
		}

	});
	// $('#example').on('click', 'button', function(){
	// 	var selected = $('#place option:selected');
	//
	// 	var value = selected.val();
	// 	//var price = selected.attr('data-price');
	// 	var price = selected.data('price');
	//
	// 	console.log(value);
	// 	console.log(price);
	// 	console.log(selected.attr('data-price'));
	//
	// 	if(price) {
	// 		$('#result').html(value + ' ' + price);
	// 	}
	//
	// });
});
