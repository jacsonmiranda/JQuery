$(document).ready(function() {
	$('#add-container').on('click', 'button', function(){
		var value = $('#add-container input').val();
		console.log(value);

		var html = '<div class="item">\
                <div class="remove">X</div>' + value + '</div>';
        console.log(html);

        //$('#places-container').append(html);
        //$(html).appendTo('#places-container');
        //$(html).prependTo('#places-container');
				//$('#places-container').prepend(html);

				//add after the last element
				//$('#places-container').children().last().after(html);
				//add before the first element
				$('#places-container').children().first().before(html);
	});

	$('#places-container .remove').on('click', function(){
		$(this).parent().remove();
		console.log($(this).parent());
	});

});
