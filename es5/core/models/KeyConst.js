"use strict";
/**
 * 模块名： KeyConst
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-20 21:23:22
 * @version 0.0.1
 */
define(function()
{

	
	var KeyConst = function () {
		function KeyConst() {
			_classCallCheck(this, KeyConst);
		}

		_createClass(KeyConst, [{
			key: "setParame",
			value: function setParame() {
				var key = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
				var param = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];

				this.serviceParam[key] = param;
				return key;
			}
		}, {
			key: "getParamer",
			value: function getParamer(key) {
				return this.serviceParam[key] == null ? "" : this.serviceParam[key];
			}
		}, {
			key: "serviceParam",
			get: function get() {
				var param = GlobalStaticConfig.serviceParam;
				if (!param) {
					GlobalStaticConfig.serviceParam = {};
					param = GlobalStaticConfig.serviceParam;
				}
				return param;
			}
		}]);

		return KeyConst;
	}();

	// exports.default = KeyConst;
	return KeyConst;
}
