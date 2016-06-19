$(document).ready(() => {
		$('input#go').click( event => {
			event.preventDefault();
			$('#overlay').fadeIn(400,
			 	() => {
					$('#modal_form')
						.css('display', 'block')
						.animate({opacity: 1, top: '50%'}, 200);
});
	});

	$('#modal_close, #overlay').click( () => {
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);

          const box = document.getElementById("box");
          box.remove();
				}
			);
	});
});
