"use strict";
/**
 * Module
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-13 12:39:48
 * @version 0.0.1
 */
define(["./../../utils/RequireFactory"],function(_RequireFactory){

	var _RequireFactory2 = _interopRequireDefault(_RequireFactory);

	var Module = function () {
		function Module() {
			_classCallCheck(this, Module);

			this._orders = [];
			this._proxysource = [];
		}

		_createClass(Module, [{
			key: "registerCode",
			value: function registerCode() {
				for (var i = 0, len = arguments.length; i < len; i++) {
					var order = arguments[i];
					if (this._orders.indexOf(order) > -1) this._orders.push(order);
				}
			}
		}, {
			key: "registerProxy",
			value: function registerProxy() {
				for (var i = 0, len = arguments.length; i < len; i++) {
					var proxy = arguments[i];
					if (this._proxysource.indexOf(proxy) == -1) this._proxysource.push(proxy);
				}
			}
		}, {
			key: "checkCode",
			value: function checkCode(code, message) {
				if (this._orders.indexOf(code) > -1) {
					this.subHander(message);
				}
			}
		}, {
			key: "subHander",
			value: function subHander(message) {
				_RequireFactory2.default.add(this._proxysource, $.proxy(function () {
					for (var i = 0, len = arguments.length; i < len; i++) {
						var proxy = arguments[i];
						if (proxy && $.type(proxy) == "function") proxy(message);
					}
				},this));
			}
		}]);

		return Module;
	}();

	// exports.default = Module;
	return Module;
});
