/**
 * 模块名： MessageAlert
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-20 11:21:50
 * @version 0.0.1
 */
import LayoutPanel from './../core/models/LayoutPanel';
import PanelManager from './../core/controls/PanelManager';

export default class MessageAlert
{
	constructor() {
		this._tip = null;
		this._confirm = null;
		this._alerts = [];
	}
	/**
	 * [tip description]
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-20
	 * @param    {Number}                   type [0 loading,1 提示，2警告，3错误 ]
	 * @param    {String}                   msg  [提示内容]
	 * @return   {[type]}                        [description]
	 */
	//static 
	tip(type=0,msg="")
	{
		if(!this._tip)
		{
			this._tip = new Tip_Panel();
		}
		var index = this._alerts.indexOf(this._alerts)
		if(index>-1)
			this._alerts.splice(index,1);
		this._alerts.push(this._alerts);
		this._tip.autoClose = (type+"")!="0";
		if(this._tip.autoClose)
			this._tip.delay();
		this._tip.data = {type:type,msg:msg};
		this._tip.container.style.zIndex = PanelManager.topZIndex;
		this._tip.show();
		return this._tip;
	}

	/**
	 * [confirm 确认框]
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-20
	 * @param    {String}                   contont     [回调函数]
	 * @param    {[type]}                   backfun     [回调参数]
	 * @param    {Object}                   backparam   [提示内容]
	 * @param    {String}                   title       [description]
	 * @param    {String}                   okLabel     [如果为数组]
	 * @param    {String}                   cancelLabel [description]
	 * @return   {[type]}                               [description]
	 */
	confirm(contont="",backfun=null,backparam={},title="",okLabel="确 认",cancelLabel="取 消")
	{
		if(!this._confirm)
			this._confirm = new Confirm_Panel();
		
		var index = this._alerts.indexOf(this._confirm)
		if(index>-1)
			this._alerts.splice(index,1);
		this._alerts.push(this._confirm);
		var buttons;
		if($.isArray(backfun))
		{
			buttons = backfun;
			backfun = null;
			backparam = {};
			title = null;
		}
		else if($.isArray(okLabel))
			buttons = okLabel;
			
		if(buttons)
		{
			this._confirm.footerbuttons = buttons;
		}
		
		
		this._confirm.data = {backfun:backfun,backparam:backparam,contont:contont};
		this._confirm.title = title;
		this._confirm.container.style.zIndex = PanelManager.topZIndex;
		this._confirm.show();
		
		return this._confirm;
	}

	/**
	 * [show description]
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-20
	 * @param    {String}                   content [内容支持HTML]
	 * @return   {[type]}                           [description]
	 */
	show(content="")
	{		
		var index = this._alerts.indexOf(content)
		if(index>-1)
			this._alerts.splice(index,1);
		this._alerts.push(content);
		content.container.style.zIndex = PanelManager.topZIndex;
		content.show();
		
		return content;
	};
}

class TipPanel extends LayoutPanel
{
	constructor(props) {

		super(props);
		
		this._icon=null;
		this._label=null;
		this._sw=null;
		this._types = {
			"0":"loading-sign fa fa-spinner",//loading
			"1":"fa fa-check",//提示
			"2":"fa fa-exclamation-triangle",//警告
			"3":"fa fa-times"//错误
	    }

	}

	createChildren()
	{		
		this.size = {width:400,height:70};
		this.title = null;
		this.showfooter = false;
		this._icon = document.createElement("i");
		this.contentshape.appendChild(this._icon);
		this._label = document.createElement("span");
		this.contentshape.appendChild(this._label);
	}

	datachange()
	{
		if(this._datachanged)
		{
			super.datachange();			
			this._icon.className = _types[this._data.type+""];
			this._label.innerHTML = (this._data.msg+"");
		}
	}

	delay()
	{			
		if(!this._sw)
			this._sw = new this.StopWatch();
		this._sw.reset();
		this.loopAdd(delayclose);
	}
	
	delayclose()
	{
		if(this._sw.timePassed>3000)
		{
			this.close();
			this.loopRemove(delayclose);
		}
	}
}

class ConfirmPanel extends LayoutPanel
{
	constructor(props) {
		super(props);
		this._content = null;

	}

	initialize()
	{
		this.panelClassName = "panel alert_panel";	
		this.size = {width:486,height:191};
		super.initialize();
	}

	createChildren()
	{	
		this._content = document.createElement("div");
		this._content.className = "confirm_content";
		this.contentshape.appendChild(this._content);
	}

	panelButtonClickHandler(evt)
	{			
		var type = evt.target.getAttribute("data-type");
		if(this._data)
		{
			if(typeof(this._data.backfun)=="function")
				this._data.backfun(type,this._data.backparam);
		}
		super.panelButtonClickHandler(evt);
	}

	boxsize()
	{
		this.size = {width:this.width,height:this.contentshape.offsetHeight+(this.titleshape?this.titleshape.offsetHeight:0)+
		(this.footershape?this.footershape.offsetHeight:0)};
	}

	datachange()
	{
		if(this._datachanged)
		{
			super.datachange();
			this._content.innerHTML = this._data.contont+"";
		}
	}
}

