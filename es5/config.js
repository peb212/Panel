/**
 * 模块名： 配置
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-21 18:38:02
 * @version 0.0.1
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

    	require.config({
			paths: {
			    "lib"		: gConfig.FrontURL+"lib",
			    "consts"	: gConfig.FrontURL+"es5test/consts",
			    "eng"		: gConfig.FrontURL+"es5/engine",
			    "global"	: gConfig.FrontURL+"es5test/global",
			    "test"		: gConfig.FrontURL+"es5test/modules/test"
			}
		});

		var reqs = [];
		reqs.push("global/Global");
			
		require(reqs,function(cookies){
			if(typeof(initialize)=="function")
			{
				initialize();
			}
		});
    }
}(GlobalStaticConfing);
