window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		scrollLock: false,
		dots: '.carousel__indicadores',		
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: '1',
				slidesToScroll: '1',
				// draggable: true,
				// scrollLock: false
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				// draggable: true,
				// scrollLock: false
			  }
			}
		]
	});
});