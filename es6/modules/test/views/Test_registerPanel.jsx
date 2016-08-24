/**
 * 模块名： Test_Panel;
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-20 23:02:31
 * @version 0.0.1
 */
import LayoutPanel from "./../../../engine/core/models/LayoutPanel";
import StopWatch from "./../../../engine/utils/StopWatch";
import LayoutConst from "./../../../consts/LayoutConst";

export default class Test_registerPanel extends LayoutPanel
{
	constructor(props) {
		super(props);
		this.size = {width:600,height:400}
		this._inited = false;
		this.title ="注册"
		this.initialize();
	}

	createChildren() 
	{
		var $def = $.Deferred();
		$(this.container).load('./../templates/test/register.html',$.proxy(function(h,type,d){
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

