///22.04.22
///Управление субтитрами, требуются Root права:
///Красная кнопка - управление размером субтитров.
///Зелёная кнопка - управление положением субтитров на экране.
///Жёлтая кнопка - управление цветом шрифта субтитров.
///Синяя кнопка - управление цветом фона субтитров.
///Кнопки 1/3 - управление скоростью воспроизведения.
///Кнопки 4/6 - управление прозрачностью шрифта субтитров.
///Кнопки 7/9 - управление прозрачностью фона субтитров.

///Значения управления субтитрами по умолчанию

	var fontSize = 3;
	var color = 3;
	var position = 1;
	var keypress = 0;
	var bgColor = "black";
	var bgColorIndex = 0;
	var bgOpacity = 0;
	var charOpacity = 255;
	var playRate = 1;
	var message = "Lampa (полная версия)";

///Список кнопок управления субтитрами.

	document.addEventListener("keydown", function(inEvent){
		if (inEvent.keyCode === 403) {
			getWebosmediaIdS(setSubtitleFontSize);
			console.log ("[Red button hit]");
			}
		else if (inEvent.keyCode === 404) {
			getWebosmediaIdS(setSubtitlePosition);
			console.log ("[Green button hit]");
			}
		else if (inEvent.keyCode === 405 ) {
			getWebosmediaIdS(setSubtitleColor);
			console.log ("[Yellow button hit]");
			}
		else if (inEvent.keyCode === 406) {
			getWebosmediaIdS(setSubtitleBackgroundColor);
			console.log ("[Blue button hit]");
			}
		else if (inEvent.keyCode === 49) {
		    playRate = playRate - 0.25;
			getWebosmediaIdS(setPlayRate);
			console.log ("[1 button hit]");
			}
		else if (inEvent.keyCode === 51) {
		    playRate = playRate + 0.25;
			getWebosmediaIdS(setPlayRate);
			console.log ("[3 button hit]");
			}
		else if (inEvent.keyCode === 52) {
		    charOpacity = charOpacity - 12;
			getWebosmediaIdS(setSubtitleCharacterOpacity);
			console.log ("[4 button hit]");
			}
		else if (inEvent.keyCode === 54) {
		    charOpacity = charOpacity + 12;
			getWebosmediaIdS(setSubtitleCharacterOpacity);
			console.log ("[6 button hit]");
			}
		else if (inEvent.keyCode === 55) {
		    bgOpacity = bgOpacity - 12;
			getWebosmediaIdS(setSubtitleBackgroundOpacity);
			console.log ("[7 button hit]");
			}
		else if (inEvent.keyCode === 57) {
		    bgOpacity = bgOpacity + 12;
			getWebosmediaIdS(setSubtitleBackgroundOpacity);
			console.log ("[9 button hit]");
			}			
	});

///Проверка ID видео контента.

	function getWebosmediaIdS(func) {
	                var mediaIdS = document.querySelector('video').mediaId;
					//setTimeout(console.log("[success] Id is " + mediaIdS),1000);
					setTimeout(func(mediaIdS),300);
	}

///Оповещение субтитров Lampa (полная версия).
    
    	function notify(message){
    	  webOS.service.request("luna://com.webos.notification", {
    	    method:"createToast",
    	    parameters: {
    	        "sourceId":"webos.lampa.full.tv",
    			"message": message
    			},
    	      onSuccess: function (result) {
    	        
    		console.log("[Notification fired] " );
    		},
    	      onFailure: function (result) {
    	        console.log( "[Notification failed] ");
    	        }
    	 });
    	}

///Красная кнопка - управление размером субтитров.

	function setSubtitleFontSize(mediaIdS){
	 if (fontSize ==5) fontSize = 0;
	 webOS.service.request("luna://com.webos.media", {
	    method:"setSubtitleFontSize",
	    parameters: {
			"fontSize": fontSize,
			"mediaId": mediaIdS
			},
	      onSuccess: function (result) {
	        
		console.log("[Subtitle font size switch][Success] "  + fontSize + " "+ JSON.stringify(result));
		setTimeout(fontSize++,100);
		},
	      onFailure: function (result) {
	        console.log( "[Subtitle font size switch][fail][" + result.errorCode + "] " + result.errorText );
	        }
	 });
	}

///Зелёная кнопка - управление положением субтитров на экране.

	function setSubtitlePosition(mediaIdS){
	 if (position ==5) {
	 	position =-3;
		} 
	 webOS.service.request("luna://com.webos.media", {
	    method:"setSubtitlePosition",
	    parameters: {
			"position": position,
			"mediaId": mediaIdS
			},
	      onSuccess: function (result) {
	        
		console.log("[Subtitle position switch][Success] "  + position + " - " + JSON.stringify(result));
		setTimeout(position++,100);
		},
	      onFailure: function (result) {
	        console.log( "[Subtitle position switch][fail][" + result.errorCode + "] " + result.errorText );
	        }
	 });
	}

///Жёлтая кнопка - управление цветом шрифта субтитров.

	function setSubtitleColor(mediaIdS){
	 if (color ==6)	color = 0;
	 webOS.service.request("luna://com.webos.media", {
	    method:"setSubtitleColor",
	    parameters: {
			"color": color,
			"mediaId": mediaIdS
			},
	      onSuccess: function (result) {
	        
		console.log("[Subtitle color switch][Success] "  + color + " "+ JSON.stringify(result));
		setTimeout(color++,100);
		},
	      onFailure: function (result) {
	        console.log( "[Subtitle color switch][fail][" + result.errorCode + "] " + result.errorText );
	        }
	 });
	}

///Синяя кнопка - управление цветом фона субтитров.

	function setSubtitleBackgroundColor(mediaIdS){
	 if (bgColorIndex ==6)	{ bgColor = "black"; bgColorIndex = 0; }
	   else if (bgColorIndex ==1) {bgColor = "white"}
	   else if (bgColorIndex ==2) {bgColor = "yellow"}
	   else if (bgColorIndex ==3) {bgColor = "red"}
	   else if (bgColorIndex ==4) {bgColor = "green"}
	   else if (bgColorIndex ==5) {bgColor = "blue"}
	 webOS.service.request("luna://com.webos.media", {
	    method:"setSubtitleBackgroundColor",
	    parameters: {
			"bgColor": bgColor,
			"mediaId": mediaIdS
			},
	      onSuccess: function (result) {
	        
		console.log("[Subtitle bgColor switch][Success] "  + bgColor + " "+ JSON.stringify(result));
		setTimeout(bgColorIndex++,100);
		},
	      onFailure: function (result) {
	        console.log( "[Subtitle bgColor switch][fail][" + result.errorCode + "] " + result.errorText );
	        }
	 });
	}

///Кнопки 1/3 - управление скоростью воспроизведения.

	function setPlayRate(mediaIdS){
	 if (playRate < 0.25 ) {playRate = 0.25}
	   else if (playRate > 2 ) {playRate = 2}
	   else {
	    webOS.service.request("luna://com.webos.media", {
	    method:"setPlayRate",
	    parameters: {
			"playRate": playRate,
			"mediaId": mediaIdS,
			"audioOutput":true
			},
	      onSuccess: function (result) {
	        message = "Скорость воспроизведения: " + playRate;	
	    	console.log("[playRate speed][Success] "  + playRate + " "+ JSON.stringify(result));
	    	notify(message);
		},
	      onFailure: function (result) {
	        console.log( "[playRate speed][fail][" + result.errorCode + "] " + result.errorText );
	        }
	 });
	   }
	}

///Кнопки 4/6 - управление прозрачностью шрифта субтитров.

	function setSubtitleCharacterOpacity(mediaIdS){
	 if (charOpacity < 0 ) {charOpacity = 0}
	   else if (charOpacity > 255 ) {charOpacity = 255}
	   else {
	    webOS.service.request("luna://com.webos.media", {
	    method:"setSubtitleCharacterOpacity",
	    parameters: {
			"charOpacity": charOpacity,
			"mediaId": mediaIdS
			},
	      onSuccess: function (result) {
	        
		console.log("[Subtitle charOpacity switch][Success] "  + charOpacity + " "+ JSON.stringify(result));
		},
	      onFailure: function (result) {
	        console.log( "[Subtitle charOpacity switch][fail][" + result.errorCode + "] " + result.errorText );
	        }
	 });
	   }
	}

///Кнопки 7/9 - управление прозрачностью фона субтитров.

	function setSubtitleBackgroundOpacity(mediaIdS){
	 if (bgOpacity < 0 ) {bgOpacity = 0}
	   else if (bgOpacity > 255 ) {bgOpacity = 255}
	   else {
	    webOS.service.request("luna://com.webos.media", {
	    method:"setSubtitleBackgroundOpacity",
	    parameters: {
			"bgOpacity": bgOpacity,
			"mediaId": mediaIdS
			},
	      onSuccess: function (result) {
	        
		console.log("[Subtitle bgOpacity switch][Success] "  + bgOpacity + " "+ JSON.stringify(result));
		},
	      onFailure: function (result) {
	        console.log( "[Subtitle bgOpacity switch][fail][" + result.errorCode + "] " + result.errorText );
	        }
	 });
	   }
	}

