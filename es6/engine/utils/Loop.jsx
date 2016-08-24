/**
* Loop
* Zhengqp (strongiron@qq.com)
* date:2016-08-10
*/
export default class LoopFactory
{	
	constructor(){
		this._loops = [];
		this._loopspeed = 200;
		this._loopStatus = false;
		this._loopTimer=null;
	}
	/**
	 * play
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-10
	 * @return   {[type]}                   [description]
	 */
	play()
	{
		clearTimeout(this._loopTimer);
		if(!this._loops||this._loops.length==0)
		{		
			this._loops = [];	
			this._loopStatus = false;
			return;
		}
		
		for(var key in this._loops)
		{
			if(this._loops[key])
				this._loops[key].fun();
		}
		this._loopTimer = setTimeout($.proxy(this.play,this),this._loopspeed);
	}

	add(fun=null,layoutId=0)
	{
		if(typeof(fun)=="function")
		{
			var unfind = true;
			if(this._loops)
			for(var i=0,len=this._loops.length;i<len;i++)
			{
				if(fun==this._loops[i].fun)
				{
					unfind = false;
					break;
				}
			}
			if(unfind)
			{
				this._loops.push({fun:fun,id:layoutId?layoutId:"0"});
				if(!this._loopStatus)
				{
					this._loopTimer = setTimeout(this.play.bind(this),this._loopspeed);
					this._loopStatus = true;
				}				
			}
		}
	}

	remove(fun)
	{
		if(typeof(fun)=="function")
		{
			for(var i=0;i<this._loops.length;i++)
			{
				if(this._loops[i].fun==fun){
					this._loops.splice(i,1);
					break;
				}
			}
		}
	}
	
	removeByLayoutId(id)
	{
		for(var i=0;i<this._loops.length;)
		{
			if(this._loops[i].id==id){
				this._loops[i].fun(1);
				this._loops.splice(i,1);
			}
			else
				i++;
		}
	}
}
var Loop = new LoopFactory();
export default Loop;