"use strict";
/**
* 模块名： Message
* @authors zhengqp (strongiron@qq.com)
* @date    2016-08-13 16:54:47
* @version 0.0.1
*/

define(["./../../utils/Utils",'./../../utils/RequireFactory'],function(_Utils,_RequireFactory)
{
	var _Utils2 = _interopRequireDefault(_Utils);
	var _RequireFactory2 = _interopRequireDefault(_RequireFactory);



	var _MOTHOD;





	var MOTHOD = (_MOTHOD = {
		GET: "GET",
		POST: "POST"
	}, _defineProperty(_MOTHOD, "GET", "DELETE"), _defineProperty(_MOTHOD, "PUT", "PUT"), _MOTHOD);

	var modules = [];

	var Message = function () {
		function Message(props) {
			_classCallCheck(this, Message);

			this._status = 0;
			this._keyActions = [];
			this._dics = {};
			this._current_request = null;
		}

		/**
	   * 打开模块
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {String}                   key     [模块ID]
	   * @param    {Array}                    modKeys [description]
	   * @param    {Object}                   data    [description]
	   * @param    {Boolean}                  hy      [description]
	   * @return   {[type]}                           [description]
	   */


		_createClass(Message, [{
			key: "sendToModules",
			value: function sendToModules() {
				var key = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
				var modKeys = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
				var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
				var hy = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

				if ($.isArray(modKeys)) {
					new loadModule(key, modKeys, data, hy);
				}
			}
		}, {
			key: "sendToService",


			/**
	   * 请求
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {String}                   actionkey [请求唯一标识]
	   * @param    {Object}                   param     [description]
	   * @param    {[type]}                   backfun   [description]
	   * @param    {Boolean}                  wait      [是否转圈圈]
	   * @return   {[type]}                             [description]
	   */
			value: function sendToService() {
				var actionkey = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
				var param = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
				var backfun = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
				var wait = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

				var url = GlobalStaticConfing.BaseURL;

				if (GlobalStaticConfing.testdata && GlobalStaticConfing.testdata[actionkey]) {
					url = GlobalStaticConfing.testdataURL + GlobalStaticConfing.testdata[actionkey];
				} else {
					var keyStr = this.getParamer(actionkey);

					if (keyStr) url += keyStr;
				}
				var data = param || param == "" ? param : {};
				if (typeof data != 'string') data["actionkey"] = actionkey;else data = data.toString() + "&actionkey=" + actionkey;

				var chk = this._keyActions.indexOf(actionkey);
				if (chk == -1) this._keyActions.push(actionkey);
				this._dics[actionkey] = { actionkey: actionkey, formData: data, url: url, backfun: backfun, wait: wait };
				if (this._status == 0) this.fire();
			}

			/**
	   * [fire description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @return   {[type]}                   [description]
	   */

		}, {
			key: "fire",
			value: function fire() {
				if (this._keyActions.length == 0) {
					this._status = 0;
					return;
				}

				this._status = 1;
				var key = this._keyActions.shift();
				var opt = this._dics[key];
				delete this._dics[key];

				this.send(opt);
			}

			/**
	   * [send description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {Object}                   opt [description]
	   * @return   {[type]}                       [description]
	   */

		}, {
			key: "send",
			value: function send() {
				var opt = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

				if (typeof this._current_request != 'undefined') {
					this._current_request.abort();
				}
				var url = opt.url;
				this.wait(opt.wait);
				var data;
				var ajaxType = MOTHOD.POST; //'POST';
				if (typeof opt.formData == 'string') {
					ajaxType = MOTHOD.GET; //'GET';
					data = opt.formData;
				} else {
					if (opt.formData.hasOwnProperty("method")) {
						ajaxType = opt.formData.method;
						delete opt.formData.method;
						console.log(ajaxType);
						switch (ajaxType) {
							case MOTHOD.DELETE:
								//"DELETE":
								data = "";
								var p = [];
								if (opt.formData.hasOwnProperty("__source")) url += opt.formData["__source"];
								for (var key in opt.formData) {
									if (key == "__source") continue;
									p.push("{0}={1}".substitute(key, opt.formData[key]));
								}

								url += "?" + p.join("&");
								break;
							case MOTHOD.PUT:
								//"PUT":
								data = opt.formData;
								if (opt.formData.hasOwnProperty("__source")) url += opt.formData["__source"];
								console.log(url);
								break;
							case MOTHOD.GET:
								//"GET":
								var p = ["actionkey=" + opt.actionkey];
								data = '';
								for (var key in opt.formData) {
									if (key == "__source") url += opt.formData["__source"];else p.push("{0}={1}".substitute(key, opt.formData[key]));
								}
								url += "?" + p.join("&");
								break;
						}
					} else {
						data = opt.formData;
					}
				}

				if (GlobalStaticConfing.pagecharset == 'utf-8' && decodeURI(url).indexOf('[') <= 0) {
					url = encodeURI(url);
				}
				console.log(url);
				if (opt.wait) this.wait();
				this._current_request = $.ajax({
					type: ajaxType,
					url: url,
					data: data || '',
					success: $.proxy(function (data) {
						console.log(this);
						this.success.call(null, data, opt.formData, opt.backfun);
					}, this),
					error: function error(data) {
						console.log(data);
						if (data.status == 302) window.location.href = 'login.html';
					}
				}).always($.proxy(function (data) {
					this.end();
				}, this));
			}
		}, {
			key: "success",


			/**
	   * [success description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {[type]}                   data     [description]
	   * @param    {[type]}                   formData [description]
	   * @param    {[type]}                   backfun  [description]
	   * @return   {[type]}                            [description]
	   */
			value: function success(data, formData, backfun) {
				console.log(arguments);
				if ($.type(data) == "string") data = $.parseJSON(data);
				if ($.isArray(data)) {
					for (var key in data) {
						this._parseData(data[key], formData, backfun);
					}
				} else if (data && data.hasOwnProperty("actionkey")) {
					this._parseData(data, formData, backfun);
				}
			}
		}, {
			key: "end",


			/**
	   * [end description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @return   {[type]}                   [description]
	   */
			value: function end() {
				this.wait(0);
				this.fire();
			}

			/**
	   * [wait 等待]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {[type]}                   type [description]
	   * @return   {[type]}                        [description]
	   */

		}, {
			key: "wait",
			value: function wait(type) {
				console.log("wait type", type);
			}

			/**
	   * [checkCode description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-20
	   * @param    {String}                   key     [description]
	   * @param    {Object}                   message [description]
	   * @return   {[type]}                           [description]
	   */

		}, {
			key: "checkCode",
			value: function checkCode() {
				var key = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
				var message = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

				for (var i = 0, len = modules.length; i < len; i++) {
					modules[i].checkCode(key, message);
				}
			}
		}, {
			key: "getParamer",
			value: function getParamer(key) {
				return GlobalStaticConfig.serviceParam && GlobalStaticConfig.serviceParam[key] && "";
			}

			/**
	   * [parseData description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {Object}                   data     [description]
	   * @param    {Object}                   formData [description]
	   * @param    {[type]}                   backfun  [description]
	   * @return   {[type]}                            [description]
	   */

		}, {
			key: "_parseData",
			value: function _parseData() {
				var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
				var formData = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
				var backfun = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

				console.log(arguments);
				var key = data["actionkey"];
				if (key == 999999) {
					_RequireFactory2.default.add(["eng/components/MessageAlert"], function (m) {
						window.location.href = "./login.html";
					});
					return;
				}
				var message = data;
				message._formData = formData;
				if ($.isFunction(backfun)) {
					backfun(message);
				} else {
					this.checkCode(key, message);
				}
			}
		}]);

		return Message;
	}();

	var loadModule = function loadModule(key, modKeys, data, hy) {
		_classCallCheck(this, loadModule);
		_RequireFactory2.default.add(modKeys, function () {
			var msg = {};
			msg.actionkey = key;
			msg.data = data;

			for (var i = 0, len = arguments.length; i < len; i++) {
				var mod = arguments[i];
				if (mod &&  $.type(mod.subHander) == "function") {
					if (modules.indexOf(mod) == -1) {
						modules.push(mod);
					}
					mod.subHander(msg);
				}
			}

			//url
			if (hy) {
				msg.modules = modKeys;
				_Utils2.default.historyURL(msg);
			}
		});
	};

	// exports.Message = Message;
	// exports.MOTHOD = MOTHOD;
	window.MOTHOD = MOTHOD;
	return new Message();
});
