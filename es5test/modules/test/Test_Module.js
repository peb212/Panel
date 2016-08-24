"use strict";
/**
* 模块名： Test_Module
* @authors zhengqp (strongiron@qq.com)
* @date    2016-08-20 20:55:52
* @version 0.0.1
*/
define(["eng/core/models/Module","./orders/Test_ServiceOrder"],function(_Module2,_Test_ServiceOrder){



	var _Module3 = _interopRequireDefault(_Module2);

	var _Test_ServiceOrder2 = _interopRequireDefault(_Test_ServiceOrder);

	var Test_Module = function (_Module) {
	_inherits(Test_Module, _Module);

	function Test_Module() {
		_classCallCheck(this, Test_Module);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Test_Module).call(this));

		_this.registerProxy("test/proxys/Test_Proxy");
		_this.registerCode(_Test_ServiceOrder2.default.ORDER_100001);
		return _this;
	}

	return Test_Module;
}(_Module3.default);

	// exports.default = Test_Module;
	return new Test_Module();
});