/**
 * 模块名： Test_Proxy
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-20 21:01:58
 * @version 0.0.1
 */

import PanelManager from "./../../../engine/core/controls/PanelManager";
// import RequireFactory from "./../../../engine/utils/RequireFactory";
import LayoutConst from "./../../../consts/LayoutConst";
import Test_ServiceOrder from "./../orders/Test_ServiceOrder";
import Test_InternalOrder from  "./../orders/Test_InternalOrder";
import Test_Panel from "./../views/Test_Panel";
import Test_registerPanel from "./../views/Test_registerPanel";

/**
 * [Test_Proxy description]
 * @Author   zhengqp(strongiron@qq.com)
 * @DateTime 2016-08-20
 * @param    {Object}                   message [description]
 * @return   {[type]}                           [description]
 */
let Test_Proxy = (message) =>
{
	console.log("fdsfdsfsdf");
	var action = message&&message["actionkey"]||"";
	console.log("==========================",action);
	switch (action)
	{
		case Test_InternalOrder.OPEN:
			tryOpenMainPanel(message.data);
		break;
		case Test_InternalOrder.OPEN_REGISTER:
			tryOpenRegisterPanel(message.data);
		break;
		case Event.RESIZE:
			break;
	}


}
let _mainPanel;
let _registerPanel;
let tryOpenMainPanel = (data={}) =>
{		

	console.log("+++++++++++++++++++++");
	if(!_mainPanel)
	{
		// RequireFactory.add(["test/views/Test_Panel"],function(mainpanel){
			_mainPanel = new Test_Panel();
			_mainPanel.registLayout(LayoutConst.TEST_MAIN_PANEL);
			// tryOpenMainPanel();
		// });
	}
	// else
	// {
		PanelManager.openPanel(_mainPanel.id);
	// }
}
let tryOpenRegisterPanel = (data={}) =>
{		
	console.log("fsdfdssssf");
	if(!_registerPanel)
	{
		// RequireFactory.add(["test/views/Test_Panel"],function(mainpanel){
			_registerPanel = new Test_registerPanel();
			_registerPanel.registLayout(LayoutConst.REGISTER_MAIN_PANEL);
			// tryOpenMainPanel();
		// });
	}
	// else
	// {
		PanelManager.openPanel(_registerPanel.id);
	// }
}



export default Test_Proxy;