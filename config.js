/**
* Zheng strongiron@qq.com
* date:2016-04-19
*/
'use strict';
+function(gConfig){
	if(!gConfig)
    	document.addEventListener('GlobalStaticConfingloaded', loaded);
    else
    	loaded();
    function loaded() {
    	document.removeEventListener('GlobalStaticConfingloaded', loaded);
    	if(!gConfig)
    		gConfig = GlobalStaticConfing;
    	if(gConfig.isDebug)
    		gConfig.BaseURL = gConfig.testURL;
    	var min = gConfig.min = "";
    	seajs.config({
			paths: {
			    "lib"		: gConfig.FrontURL+"lib",
			    "consts"	: gConfig.FrontURL+"build/consts",
			    "eng"		: gConfig.FrontURL+"build/engine",
			    "global"	: gConfig.FrontURL+"build/global",
			    "test"		: gConfig.FrontURL+"build/modules/test"
			}
		});
		var reqs = [];
		reqs.push("lib/js-cookie/js.cookie");
		reqs.push("eng/utils/RequireFactory");
			
		require(reqs,function(cookies){	
			window.Cookies = cookies;
			
			gConfig.isadmin = cookies("isadmin");
			if(typeof(initialize)=="function")
			{

			}
		});
    }
}(GlobalStaticConfing);
