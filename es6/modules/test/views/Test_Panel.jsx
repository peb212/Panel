/**
 * 模块名： Test_Panel;
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-20 23:02:31
 * @version 0.0.1
 */
import Panel from "./../../../engine/core/models/Panel";
import StopWatch from "./../../../engine/utils/StopWatch";
import Test_InternalOrder from "./../orders/Test_InternalOrder";
import ModuleConst from "./../../../consts/ModuleConst";

export default class Test_Panel extends Panel
{
	constructor(props) {
		super(props);
		this._inited = false;
		this.initialize();
	}

	createChildren() 
	{
		var $def = $.Deferred();
		$(this.container).load('./../templates/test/main.html',$.proxy(function(h,type,d){
			if(type=="success")
			{		
				this._inited = true;
				this.addEventListeners();
				$def.resolve();
			}
		},this));
		this.css({width:"100%",height:"100%"});
		return $def.promise();
	}

	addEventListeners()
	{
		var hide = true;
		
		$(this.container).find("a[name=viwerforgetbox]").click($.proxy(function(){
			// var h = hide?212:0;
			// var op = hide?1:0;
			// hide =!hide;
			// $(this.container).find(".forgetbox").animate({
			//    height:h,
			//    opacity:op
			//  }, 1000);
			this.sendToModules(Test_InternalOrder.OPEN_REGISTER,[ModuleConst.TEST_MODULE]);
			
		},this));
		$(this.container).find("input").on("focusout",$.proxy(function(evt)
		{
			this._check( $(evt.currentTarget));
		},this));
		
		$(this.container).find("[name=login]").click($.proxy(function(){
			this._submit_login();
		},this));
		
		$(this.container).find("input[name=username]").on("keyup",$.proxy(function(evt){
			if(evt.keyCode==13)
			{
				this._submit_login();
			}
		},this));

		$(this.container).find("input[name=password]").on("keyup",$.proxy(function(evt){
			if(evt.keyCode==13)
			{
				this._submit_login();
			}
		},this));
	}


	_submit_login()
	{
		var $username = $(this.container).find("[name=username]"),
			$password = $(this.container).find("[name=password]");
		if(this._check($username)&&this._check($password))
		{
			Message.sendToService(Test_ServiceOrder.ORDER_100001,{username:$username.val(),password:$password.val()});
		}
	};

	_check($target)
	{
		var reg = $target.data("reg");
		if(reg)
		{
			if(!eval(reg).test($target.val()))
			{
				new tip($target,this);
				return false;
			}
		}
		return true;
	};
}

class tip 
{
	constructor($target,t) {
		$target.popover("show");
		var sw = new StopWatch();
		// RequireFactory.add(["eng/utils/StopWatch"],$.proxy(function(StopWatch){				
		// 	sw = new StopWatch();
			this.loopAdd(hide);
		// },t));
		
		var hide = $.proxy(function(exp)
		{
			if(sw&&sw.timePassed>3000||exp)
			{
				this.loopRemove(hide);
				$target.popover("hide");
				sw = null;
			}
		},t);
	}
}

