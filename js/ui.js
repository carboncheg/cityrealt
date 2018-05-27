$(function(){


	//Скроллит до нужного блока
	$('.header__menu > a').each(function(){
		
		var	$e = $(this);
		var	href = $e.attr('href');
		
		$e.click(function(){
			
			$('html, body').animate({
				scrollTop: $(href).offset().top - $('header').height()
			}, 300);
			
			$('.header__menu > a').removeClass('active');
			$e.addClass('active');
			
			return false;
			
		});
		
	});
	
	
	var myMap;

	// Дождёмся загрузки API и готовности DOM.
	ymaps.ready(init);

	function init () {
		// Создание экземпляра карты и его привязка к контейнеру с
		// заданным id ("map").
		myMap = new ymaps.Map('map', {
			// При инициализации карты обязательно нужно указать
			// её центр и коэффициент масштабирования.
			center: [58.014902, 56.231967], // Москва
			zoom: 14
		}, {
			searchControlProvider: 'yandex#search'
		});

	}
	
	
	//Открытие модального окна
	$('.start__button').click(function(){
		
		$('.modal_bg, .modal').addClass('show');
		
	});
	
	$('.modal_bg').click(function(){
		
		$('.modal_bg, .modal').removeClass('show');
		
	});
	
	$(document).keydown(function(key){
		
		if( key.keyCode == 27 )
			$('.modal_bg, .modal').removeClass('show');
		
	});
	
	
	//Показывает и скрывает меню
	$('.header__menu__trigger').click(function(){
		
		$('.header__menu').toggleClass('open');
		
	});
	
	
});










