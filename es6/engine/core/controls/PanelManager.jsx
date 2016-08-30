/**
* PanelManager
* Zhengqp (strongiron@qq.com)
* date:2016-08-09
*/
class PanelManagerFactory
{
	constructor() {
	 	this._panelDic = {};
	}

	/**
	 * 当前窗口顶层
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-13
	 * @param    {[type]}                   ){			var ch            [description]
	 * @return   {[type]}                             [description]
	 */
	get topZIndex()
	{
		var ch = layer.moduleLayer.childNodes.length;
		var zindex = Math.max(ch,1);
		for(var i=0;i<ch;i++)
		{
			zindex = Math.max(zindex,layer.moduleLayer.childNodes[i].style.zIndex?layer.moduleLayer.childNodes[i].style.zIndex:1);
			console.log(layer.moduleLayer.childNodes[i].style.zIndex)
		}
		return zindex;
	}
	set topZIndex(value)
	{

	}
	
	/**
	 * 注册 
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-13
	 * @param    string                  key   [description]
	 * @param    Panel                  panel [description]
	 * @return   {[type]}                         [description]
	 */
	regist(key,panel)
	{
		if(panel)
		{
			if(!this._panelDic[key])
			{
				this._panelDic[key] = panel;
			}
		}
	}
	/**
	 * 注销
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-13
	 * @param    string                   key [description]
	 * @return   {[type]}                       [description]
	 */
	unRegist(key)
	{
		if(this._panelDic[key])
		{
			delete this._panelDic[key];
		}
	}

	/**
	 * 打开窗口
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-13
	 * @param    string                   key        [description]
	 * @param    Boolen                   closeother [description]
	 * @return   {[type]}                              [description]
	 */
	openPanel(key="",closeother=false)
	{
		var panel = this._panelDic[key];
		console.log(panel,"=====================ddddddddddddddddddd==============")
		if(!panel)
			return;
		var full = panel.type=="full";
		var mLayer = full?layer.fullLayer:layer.moduleLayer;
		console.log("openPanel",full);
		if(full)
			closeother = true;
		if(closeother)
			this.closeOtherPanel(key,mLayer)
		panel.show();

		panel.zIndex = PanelManager.topZIndex;
		if(!panel.container.parentNode)
		{
			mLayer.appendChild(panel.container);
		}
	}

	/**
	 * 关闭窗口
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-13
	 * @param    {[type]}                   key   [description]
	 * @param    {[type]}                   tween [description]
	 * @return   {[type]}                         [description]
	 */
	closePanel(key="",tween=true)
	{
		var panel = this._panelDic[key];
		if(!panel)
			return;
		panel.close();
		if(panel.container.parentNode)
			panel.container.parentNode.removeChild(panel.container);
	}

	/**
	 * 获取窗口
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-13
	 * @param    {String}                   key [description]
	 * @return   {[type]}                       [description]
	 */
	getPanel(key="")
	{
		if (this._panelDic[key])
		{
			return this._panelDic[key];
		}
		return null;
	}

	/**
	 * [closeOtherPanel description]
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-13
	 * @param    {String}                   key    [description]
	 * @param    {Layer}                   mLayer [description]
	 * @return   {[type]}                          [description]
	 */
	closeOtherPanel(key="",mLayer=null)
	{
		if(mLayer)
			for(var i=0,len=mLayer.childNodes.length;i<len;i++)
			{
				if(mLayer.childNodes[i].id==key)
					continue;
				this.closePanel(mLayer.childNodes[i].id);
			}
	}

	/**
	 * 查找子类
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-13
	 * @param    {[type]}                   element [description]
	 * @param    {String}                   id      [description]
	 * @return   {[type]}                           [description]
	 */
	_checkChildById(element=null,id="")
	{
		var chk = false;
		if(element)
		{
			for (var i=0;i<element.childElementCount;i++)
			{
				if(element.children.item(i).id==id)
				{
					chk = true;
					break;
				}
			}
		}
		return chk;
	}
}

let PanelManager = new PanelManagerFactory();
export default PanelManager;