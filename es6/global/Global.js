/**
strongiron@qq.com
日期：2016-05-30
版本：0.0.1
*/
import StopWatch from "./../engine/utils/StopWatch";
import Loop from "./../engine/utils/Loop";
// define(["./../engine/utils/StopWatch","./../engine/utils/Loop"],function(StopWatch){
+function(){
	var global = window||this;
	var config = GlobalStaticConfing;
	if(!config)
	{
		GlobalStaticConfing = {};
		config = GlobalStaticConfing;
	}
	var _layer = {};
	var _stageResize = new $.Callbacks("unique memory");
	
	_layer.fullLayer = createLayer("fullLayer");
	_layer.moduleLayer = createLayer("modulelayer");
	_layer.tipLayer = createLayer("tiplayer");
	_layer.topLayer = createLayer("toplayer");
	
	global.layer = _layer;
	global.stageResize = _stageResize;
	if(!config.isDebug)
		global.console.log = function(){};
		
	$(global).ready(init);
	
	function init(){
		if(!_layer.fullLayer.parentNode)$("body").append(_layer.fullLayer);		
		if(!_layer.moduleLayer.parentNode)$("body").append(_layer.moduleLayer);
		if(!_layer.tipLayer.parentNode)$("body").append(_layer.tipLayer);
		if(!_layer.topLayer.parentNode)$("body").append(_layer.topLayer);
		
		_stageResize.fire();
		var sw = new StopWatch();
		$(global).resize(function(evt){
			Loop.add(resizefire);
		});
		
		function resizefire()
		{
			if(sw.timePassed>200)
			{
				sw.reset();
				Loop.remove(resizefire);
				_stageResize.fire();
			}			
		}
	}
	
	function createLayer(id)
	{
		var contaiter = document.getElementById(id);
		if(!contaiter)
		{
			contaiter = document.createElement("div");
			contaiter.id = id;
		}
		
		return contaiter;
	}
	
}();
