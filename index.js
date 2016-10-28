(function(){
	
	// Bind close event
	$('#close_help').on('click', function(){
		$('.overlay').addClass('hidden');
	});

	// bind help event
	$('.question').on('click', function(){
		$('.overlay').removeClass('hidden');
	});
})();