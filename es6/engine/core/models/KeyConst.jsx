/**
 * 模块名： KeyConst
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-20 21:23:22
 * @version 0.0.1
 */
export default class KeyConst
{
	get serviceParam()
	{
		var param = GlobalStaticConfig.serviceParam;
		if(!param)
		{
			GlobalStaticConfig.serviceParam={};
			param = GlobalStaticConfig.serviceParam;
		}
		return param;
	}

	setParame(key="",param="")
	{
		this.serviceParam[key] = param;
		return key;
	}
	getParamer(key)
	{
		return this.serviceParam[key]==null?"":this.serviceParam[key];
	}
}
