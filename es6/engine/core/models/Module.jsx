/**
 * Module
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-13 12:39:48
 * @version 0.0.1
 */
// import RequireFactory from "./../../utils/RequireFactory";
export default class Module
{
	constructor()
	{
		this._orders = [];
		this._proxysource = [];
		this._proxys = [];
	}

	registerCode()
	{
		for(var i=0,len=arguments.length;i<len;i++)
		{
			var order = arguments[i];
			if(this._orders.indexOf(order)==-1)
				this._orders.push(order)
		}
	}

	registerSource()
	{
		for(var i=0,len=arguments.length;i<len;i++)
		{
			var source = arguments[i];
			if(this._proxysource.indexOf(source)==-1)
				this._proxysource.push(source)
		}		
	}

	registerProxy()
	{
		console.log("registerProxy",arguments);
		for(var i=0,len=arguments.length;i<len;i++)
		{
			var proxy = arguments[i];
			if(this._proxys.indexOf(proxy)==-1)
				this._proxys.push(proxy)
		}		
	}

	checkCode(code,message)
	{
		if(this._orders.indexOf(code)>-1)
		{
			this.subHander(message);
		}
	}

	subHander(message)
	{
		console.log(this._proxys);
		if(this._proxys.length>0)
		{
			for(var i=0,len=this._proxys.length;i<len;i++)
			{
				var proxy = this._proxys[i];
				if(proxy&&$.type(proxy)=="function")
				{
					proxy(message);
				}
			}
		}
		else
		{
			// RequireFactory.add(this._proxysource,$.proxy(function(){
			// 	for(var i=0,len=arguments.length;i<len;i++)
			// 	{
			// 		var proxy = arguments[i];
			// 		if(proxy&&$.type(proxy)=="function")
			// 		{
			// 			this._proxys.push(message);
			// 		}
			// 	}
			// 	if(this._proxys.length>0)
			// 	{
			// 		this.subHander(message);
			// 	}
			// },this));
		}
		
	}
}
