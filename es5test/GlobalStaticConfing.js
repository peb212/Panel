'use strict';

var GlobalStaticConfing;

(function defaultPreferencesLoaderWrapper() {
  function loaded() {
  	try {
  		GlobalStaticConfing = JSON.parse(xhr.responseText);
		} catch (e) {
		  GlobalStaticConfing = {};
		}
		var event = document.createEvent('CustomEvent');
		event.initCustomEvent('GlobalStaticConfingloaded', true, true, null);
		document.dispatchEvent(event);
  }
  var xhr = new XMLHttpRequest();

  xhr.open('GET', './GlobalStaticConfing.json');
  xhr.onload = xhr.onerror = loaded;
  xhr.send();
})();
