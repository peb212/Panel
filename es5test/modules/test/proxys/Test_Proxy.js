"use strict";
/**
 * [Test_Proxy description]
 * @Author   zhengqp(strongiron@qq.com)
 * @DateTime 2016-08-20
 * @param    {Object}                   message [description]
 * @return   {[type]}                           [description]
 */

define(["eng/core/controls/PanelManager",
	"consts/LayoutConst",
	"test/orders/Test_ServiceOrder",
	"test/orders/Test_InternalOrder",
	"eng/utils/RequireFactory"
	],function(_PanelManager,
		_LayoutConst,
		_Test_ServiceOrder,
		_Test_InternalOrder,
		_RequireFactory){


	
	var _PanelManager2 = _interopRequireDefault(_PanelManager);

	var _RequireFactory2 = _interopRequireDefault(_RequireFactory);

	var _LayoutConst2 = _interopRequireDefault(_LayoutConst);

	var _Test_ServiceOrder2 = _interopRequireDefault(_Test_ServiceOrder);

	var _Test_InternalOrder2 = _interopRequireDefault(_Test_InternalOrder);



	/**
	 * 模块名： Test_Proxy
	 * @authors zhengqp (strongiron@qq.com)
	 * @date    2016-08-20 21:01:58
	 * @version 0.0.1
	 */

	var Test_Proxy = function Test_Proxy() {
		var message = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		var action = message["actionKey"];
		switch (action) {
			case _Test_InternalOrder2.default.OPEN_PANEL:
				tryOpenMainPanel(message.data);
				break;
			case Event.RESIZE:
				break;
		}
	}; /**
	    * 模块名： Test_Proxy
	    * @authors zhengqp (strongiron@qq.com)
	    * @date    2016-08-20 21:01:58
	    * @version 0.0.1
	    */

	var _mainPanel = void 0;
	var tryOpenMainPanel = function tryOpenMainPanel() {
		var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		if (!_mainPanel) {
			_RequireFactory2.default.add(["test/views/Test_Panel"], function (mainpanel) {
				_mainPanel = new mainpanel();
				_mainPanel.registLayout(_LayoutConst2.default.TEST_MAIN_PANEL);
				tryOpenMainPanel();
			});
		} else {
			_PanelManager2.default.openPanel(_mainPanel.id);
		}
	};

	// exports.default = Test_Proxy;
	return new Test_Proxy();
});