/**
 * 模块名： Test_Module
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-20 20:55:52
 * @version 0.0.1
 */
import Module from "./../../engine/core/models/Module";
import Test_ServiceOrder from "./orders/Test_ServiceOrder";
import Test_Proxy from "./proxys/Test_Proxy";
class Test_Module extends Module
{
	constructor() {
	  super();
	
	  this.registerProxy(Test_Proxy);
	  this.registerCode(Test_ServiceOrder.ORDER_100001);
	}
}
export default new Test_Module();
