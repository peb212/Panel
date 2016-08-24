/**
 * 模块名： 计数器
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-13 15:52:33
 * @version 0.0.1
 */
 export default class StopWatch
 {
 	constructor(props) {
 	  this._startTime = 0;
 	  this.reset();
 	}

 	/**
 	 * 重置
 	 * @Author   zhengqp(strongiron@qq.com)
 	 * @DateTime 2016-08-13
 	 * @return   {[type]}                   [description]
 	 */
 	reset()
 	{
 		this.startTime = new Date().valueOf();
 	}
	
	/**
	 * 过去时间
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-13
	 * @param    {[type]}                   ){				return new           Date().valueOf()-_startTime;			}		} [description]
	 * @return   时差(毫秒)
	 */
	get timePassed()
	{
		return new Date().valueOf()-this._startTime;
	}
}
