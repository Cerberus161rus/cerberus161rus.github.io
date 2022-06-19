///http://freebie.tom.ru/lite.js
///18.06.22
(function () {
    'use strict';

	var update = false
	var events = JSON.parse(localStorage.getItem('events') || '[]');
	var append = [
		{
			name: 'Filmix',
			url: 'http://freebie.tom.ru/lampa-lite/filmix'
		},
		{
			name: 'HDrezka',
			url: 'http://freebie.tom.ru/lampa-lite/rezka'
		},
		{
			name: 'VideoCDN',
			url: 'http://freebie.tom.ru/lampa-lite/vcdn'
		},
		{
			name: 'HDVB',
			url: 'http://freebie.tom.ru/lampa-lite/hdvb'
		},
		{
			name: 'Kinobase',
			url: 'http://freebie.tom.ru/lampa-lite/kinobase'
		},
		{
			name: 'Collaps',
			url: 'http://freebie.tom.ru/lampa-lite/collaps'
		},
		{
			name: 'Jackett',
			url: 'http://freebie.tom.ru/lampa-lite/jackett'
		},
		{
			name: 'Torlook',
			url: 'http://freebie.tom.ru/lampa-lite/torlook'
		}
	]

	function merge(add){
		var find = false

		for (var i = 0; i < events.length; i++) {
			if(events[i].url == add.url) find = true
		}

		if(!find){
			update = true

			events.push(add)
		}
	}

	for (var i = 0; i < append.length; i++) {
		merge(append[i])
	}

	if(update){
		localStorage.setItem('events', JSON.stringify(events))
	}

})();

