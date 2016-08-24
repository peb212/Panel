/**
 * 模块名： Panel
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-09 19:16:40
 * @version 0.0.1
 * */
import Loop from './../../utils/Loop';
import PanelManager from './../controls/PanelManager';
// import RequireFactory from './../../utils/RequireFactory';
import StopWatch from './../../utils/StopWatch';
import Message from './../../controls/service/Message';

export default class Panel
{

	constructor(props) {
		this._data = null;
		this._datachanged = false;
		this._container=null;
		this._width		= 600;
		this._height     = 400;
		this._zIndex 	= 1;
		this.id 			= "";
		console.log("this.type ",props);
		this.type 		= props?props.type:"full";
		this._container = document.createElement("div");
		// if(this.type == "full")
		// 	this.initialize();
	}
	
	get data()
	{
		return this._data||{};
	}
	set data(value)
	{
		if(this._data!=value)
		{
			this._data = value;
			this._datachanged = true;
			this.datachange();
		}
	}

	get size(){
		return {
			width:this.width,
			height:this.height
		};
	}
	set size(value)
	{
				console.log("================================",value)
		if(value)
		{		
			if(parseInt(value.width)!=this.width||parseInt(value.height)!=this.height)
			{
				console.log("================================")
				this.width = parseInt(value.width);
				this.height = parseInt(value.height);
				this.draw();
			}
		}
	}
	
	get width(){
		return this._width||0;
	}
	set width(value=0)
	{
		this._width = parseFloat(value);
	}	
	
	get height(){
		return this._height||0;
	}
	set height(value=0)
	{
		this._height = parseFloat(value);
	}
		
	get container(){
		return this._container;
	}
	/**@private*/
	set container(value)
	{
	}
		
	get zIndex(){
		return this._zIndex||0;
	}
	set zIndex(value=0)
	{
		this._zIndex = parseInt(value);
		this.container.style.zIndex = this._zIndex;
	}

	// get require()
	// {
	// 	return RequireFactory.add;
	// }

	get StopWatch()
	{
		return StopWatch;
	}

	get Manager()
	{
		return PanelManager;
	}


	get sendToModules()
	{
		return Message.sendToModules;
	}
	get sendToService()
	{
		return Message.sendToService;
	}

	/**
	 * 初始化
	 * @Author   zhengqp
	 * @DateTime 2016-08-12T21:44:30+0800
	 * @return
	 */
	initialize(){
		this.createChildren();
		this.draw();
	}

	/**
	 * [datachange description]
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-20
	 * @return   {[type]}                   [description]
	 */
	datachange()
	{
		this._datachanged = false;
	}
	
	/**
	 * 窗口注册
	 * @Author   zhengqp
	 * @DateTime 2016-08-12T21:45:29+0800
	 * @param 
	 */
	registLayout(key="")
	{
		if(this.container==null||this.Manager==null)
			throw new Error('PanelManager||container undefind!!!');
		if(!this.id)
		{
			this.id = key;
			this.container.setAttribute("id",this.id);
			this.Manager.regist(key,this);
			this.initialize();
		}
	}
	
	/**
	 * 显示效果
	 * @Author   zhengqp
	 * @DateTime 2016-08-12T21:46:52+0800
	 * @return 
	 */
	showEffect()
	{
		if(this.type=="full")
		{
			this.__history();
		}
	}
	
	/**
	 * 显示(不建议修改或直接引用)
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-12T21:49:16+0800
	 * @return
	 */
	show()
	{
		stageResize.add($.proxy(this.resize,this));
		layer.fullLayer.appendChild(this.container);
		this.showEffect();
	}

	/**
	 * 显示
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-12
	 * @return   {[type]}                   [description]
	 */
	 showPanel()
	 {
	 	this.show();
	 }
		
	/**
	 * 关闭效果
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-12T21:52:14+0800
	 * @return
	 */
	closeEffect()
	{

	}
	
	/**
	 * 关闭(不建议修改或直接引用)
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-12T21:53:08+0800
	 * @return
	 */
	close()
	{
		this.closeEffect();
		this.container.parentNode.removeChild(this.container);
		stageResize.remove(this.resize);
		this.closePanel();
		Loop.removeByLayoutId(this.id);
	}

	closePanel()
	{

	}
	
	/**
	 * 样式
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-12
	 * @param  
	 */
	css(props)
	{
		if(props)
		{
			for(var key in props)
			{
				if(["width","height"].indexOf(key.toLocaleLowerCase())>-1)
				{
					this[key.toLocaleLowerCase()] = props[key];
				}
				this.container.style[key] = props[key];
			}
		}
	}


	/**
	 * createChildren
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-12
	 * @return  
	 */
	createChildren()
	{

	}
	
	/**
	 * resize
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-12
	 * @return
	 */
	resize()
	{
		this.draw();
	}//.bind(this);

	/**
	 * 场景resize
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-12
	 * @return 
	 */
	stageResize()
	{

	}

	/**
	 * 添加定时器
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-12
	 * @param    function fun
	 * @return
	 */
	loopAdd()
	{
		Loop.add(fun,this.id);
	}
	
	/**
	 * 移除定时器
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-12
	 * @param    function                   fun [description]
	 * @return   
	 */
	loopRemove(fun)
	{
		Loop.remove(fun);
	}
	
	/**
	 * [draw description]
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-12
	 * @return 
	 */
	draw()
	{
		if(this.type=="full")
		{
		}
		else
		{			
			this.container.style.width = this.width+"px";
			this.container.style.height = this.height+"px";
		}
		this.stageResize();
	}
	
	/**
	 * 销毁
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-12
	 * @return 
	 */
	dispose()
	{

	}
	
	/**
	 * 历史
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-12
	 * @return 
	 */
	__history()
	{

	}	
}