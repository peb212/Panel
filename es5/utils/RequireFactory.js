"use strict";
/**
 * 模块名： RequireFactory
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-13 20:34:54
 * @version 0.0.1
 */

define(function(){



	var ReqFactory = function () {
		function ReqFactory(props) {
			_classCallCheck(this, ReqFactory);

			this._loadingObj = {};
			this._waitings = [];
			this._loading = false;
		}

		/**
	  * [add description]
	  * @Author   zhengqp(strongiron@qq.com)
	  * @DateTime 2016-08-14
	  * @param    {[type]}                   paths [description]
	  * @param    {[type]}                   fun   [description]
	  */


		_createClass(ReqFactory, [{
			key: "add",
			value: function add(paths, fun) {
				if (!Array.isArray(paths)) paths = [paths];
				this._waitings.push({ paths: paths, fun: fun });
				if (this._loading == false) this._load();
			}

			/**
	   * [_load description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-14
	   * @return   {[type]}                   [description]
	   */

		}, {
			key: "_load",
			value: function _load() {
				if (this._waitings.length == 0) {
					this._loading = false;
				} else {
					this._loading = true;
					this._loadingObj = this._waitings.shift();
					require(this._loadingObj.paths, $.proxy(this._complete,this));
				}
			}
			/**
	   * [_complete description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-16
	   * @return   {[type]}                   [description]
	   */

		}, {
			key: "_complete",
			value: function _complete() {
				if (this._loadingObj.fun) this._loadingObj.fun.apply({}, arguments);
				this._load();
			}
		}]);

		return ReqFactory;
	}();

	var RequireFactory = new ReqFactory();
	// exports.default = RequireFactory;
	return RequireFactory;
});