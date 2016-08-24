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
    	console.log(gConfig.FrontURL);
    	require.config({
			paths: {
			    "lib"		: gConfig.FrontURL+"lib",
			    "consts"	: gConfig.FrontURL+"es5test/consts",
			    "eng"		: gConfig.FrontURL+"es5",
			    "global"	: gConfig.FrontURL+"es5test/global",
			    "test"		: gConfig.FrontURL+"es5test/modules/test"
			}
		});

    	require(["eng/common"],function(){		
			var reqs = [];
			reqs.push("eng/utils/Utils");
			reqs.push("eng/controls/service/Message");
			reqs.push("consts/ModuleConst");
			reqs.push("global/Global");
				
			require(reqs,function(URLUtils,Message){
				if(typeof(initialize)=="function")
				{
					initialize(URLUtils,Message);
				}
			});
    	});
    }
}(GlobalStaticConfing);
