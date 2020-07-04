$(document).ready(function() {

	//CSS selectors
	var result = $('#animals .creature');
	console.log(result);

	//DOM traversing (more efficient)
	result = $('#animals').find('.creature');
	console.log(result);

	//first(), last()
	result = $('#animals').children().first().children('.creature').last();
	console.log(result);

	//prev(
	result = $('#animals').children().first().children().last().prev().prev();
	console.log(result);

	//next()
	result = $('#animals').children().first().children('.creature').first().next();
	console.log(result);

});
