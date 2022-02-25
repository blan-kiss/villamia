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




	// Segundo carrusel--------------

	new Glider(document.querySelector('.carousel__lista_gal1'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		scrollLock: false,
		dots: '.carousel__indicadores_gal1',		
		arrows: {
			prev: '.carousel__anterior_gal1',
			next: '.carousel__siguiente_gal1'
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
				slidesToShow: 2,
				slidesToScroll: 2,
				
				// draggable: true,
				// scrollLock: false
			  }
			}
		]
	});






	// Carrusel taquiza--------------

	new Glider(document.querySelector('.carousel__lista_taco'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		scrollLock: false,
		dots: '.carousel__indicadores_taco',		
		arrows: {
			prev: '.carousel__anterior_taco',
			next: '.carousel__siguiente_taco'
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
				slidesToShow: 1,
				slidesToScroll: 1,
				
				// draggable: true,
				// scrollLock: false
			  }
			}
		]
	});





	// Carrusel guisados --------------

	new Glider(document.querySelector('.carousel__lista_guisados'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		scrollLock: false,
		dots: '.carousel__indicadores_guisados',		
		arrows: {
			prev: '.carousel__anterior_guisados',
			next: '.carousel__siguiente_guisados'
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
				slidesToShow: 1,
				slidesToScroll: 1,
				
				// draggable: true,
				// scrollLock: false
			  }
			}
		]
	});





	// Carrusel postres --------------

	new Glider(document.querySelector('.carousel__lista_postres'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		scrollLock: false,
		dots: '.carousel__indicadores_postres',		
		arrows: {
			prev: '.carousel__anterior_postres',
			next: '.carousel__siguiente_postres'
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
				slidesToShow: 1,
				slidesToScroll: 1,
				
				// draggable: true,
				// scrollLock: false
			  }
			}
		]
	});




	// Carrusel hamburguesas y hotdogs --------------

	new Glider(document.querySelector('.carousel__lista_hamhot'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		scrollLock: false,
		dots: '.carousel__indicadores_hamhot',		
		arrows: {
			prev: '.carousel__anterior_hamhot',
			next: '.carousel__siguiente_hamhot'
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
				slidesToShow: 1,
				slidesToScroll: 1,
				
				// draggable: true,
				// scrollLock: false
			  }
			}
		]
	});





	// Carrusel tamales --------------

	new Glider(document.querySelector('.carousel__lista_tamales'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		scrollLock: false,
		dots: '.carousel__indicadores_tamales',		
		arrows: {
			prev: '.carousel__anterior_tamales',
			next: '.carousel__siguiente_tamales'
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
				slidesToShow: 1,
				slidesToScroll: 1,
				
				// draggable: true,
				// scrollLock: false
			  }
			}
		]
	});



	// Carrusel tamales --------------

	new Glider(document.querySelector('.carousel__lista_inflable'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		scrollLock: false,
		dots: '.carousel__indicadores_inflable',		
		arrows: {
			prev: '.carousel__anterior_inflable',
			next: '.carousel__siguiente_inflable'
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
				slidesToShow: 1,
				slidesToScroll: 1,
				
				// draggable: true,
				// scrollLock: false
			  }
			}
		]
	});










});




