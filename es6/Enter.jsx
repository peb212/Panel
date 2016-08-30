/**
 * 模块名： 入口
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-21 16:52:51
 * @version 0.0.1
 */

import "./global/Global";
import Message        from "./engine/controls/service/Message";
import ModuleConst     from "./consts/ModuleConst";
import URLUtils        from "./engine/utils/Utils";
import Test_InternalOrder        from "./modules/test/orders/Test_InternalOrder";
console.log("enter");
if(!URLUtils.tryToModules())
	Message.sendToModules(Test_InternalOrder.OPEN,[ModuleConst.TEST_MODULE],{},1);