"use strict";
/**
 * 模块名： Utlis
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-13 16:15:16
 * @version 0.0.1
 */

define(function(){



	var URL = function () {
		function URL(props) {
			_classCallCheck(this, URL);

			this._init = false;
		}

		/**
	  * [init description]
	  * @Author   zhengqp(strongiron@qq.com)
	  * @DateTime 2016-08-21
	  * @return   {[type]}                   [description]
	  */


		_createClass(URL, [{
			key: "init",
			value: function init() {
				if (!this._init) {
					this._init = true;
					$(window).on("popstate", $.proxy(function () {
						this.popstate();
					}, this));
				}
			}
			/**
	   * [URL description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {String}                   href [description]
	   * @param    {[type]}                   top  [description]
	   */

		}, {
			key: "getURL",
			value: function getURL() {
				var href = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
				var top = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				if (!top) top = window;
				if (!href) return top.location;
				var a = document.createElement("a");
				a.href = href;
				return a;
			}

			/**
	   * 设置URL
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {Object}                   param [description]
	   * @param    {String}                   title [description]
	   * @return   {[type]}                         [description]
	   */

		}, {
			key: "historyURL",
			value: function historyURL() {
				var param = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
				var title = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];

				this.init();

				var url = this.getURL();
				var hparam = $.extend(true, {}, param);

				var uri = url.origin + "?" + $.param(hparam);
				if (this.charsBitLength(uri) > 2048) hparam.data = {};
				if (window.history && window.history.pushState) {
					if (url.origin) window.history.pushState(hparam, title ? title : null, url.origin + url.pathname + "?" + $.param(hparam));
				} else {
					window.location.href = url.origin + url.pathname + "#" + $.param(hparam);
				}
			}

			/**
	   * 获取参数
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {String}                   href [description]
	   * @return   {Object}                        [description]
	   */

		}, {
			key: "getParam",
			value: function getParam() {
				var href = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];

				var url = this.getURL(href);
				var search = url.search ? url.search.substr(1) : url.hash.substr(1);
				return this.param(search);
			}

			/**
	   * 获取参数
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {[type]}                   search [description]
	   * @return   {Object}                          [description]
	   */

		}, {
			key: "param",
			value: function param(search) {
				if (!search) return {};
				var params = new Object();
				var paramstr = search.split('&');
				for (var i = 0; i < paramstr.length; i++) {
					var param = paramstr[i].split('=');
					var indices = [];
					var key = decodeURIComponent(param[0]),
					    value = decodeURIComponent(param[1]);

					var name = key.replace(/\[([^\]]*)\]/g, function (key, index) {
						indices.push(index);
						return "";
					});

					indices.unshift(name);
					var o = params;

					var index = 0;
					for (var j = 0; j < indices.length - 1; j++) {
						index = indices[j];
						var nextIdx = indices[j + 1];
						if (!o[index]) {
							if (nextIdx == "" || /^[0-9]+$/.test(nextIdx)) o[index] = new Array();else o[index] = new Object();
						}
						o = o[index];
					}

					index = indices[indices.length - 1];
					if (index == "") {
						o.push(value);
					} else {
						o[index] = value;
					}
				}
				return params;
			}

			/**
	   * tryToModules
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @return   {[type]}                   [description]
	   */

		}, {
			key: "tryToModules",
			value: function tryToModules() {
				var param = this.getParam();
				if (param && param.hasOwnProperty("actionKey")) {
					this.toModules(param);
					return true;
				}
				return false;
			}

			/**
	   * [toModules description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {Object}                   param [description]
	   * @return   {[type]}                         [description]
	   */

		}, {
			key: "toModules",
			value: function toModules() {
				var param = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

				// RequireFactory.add(["eng/controls/service/Message"],
				// function(){
				if (param && param.hasOwnProperty("actionKey")) {
					Message.sendToModules(param.actionKey, param.modules, param.data);
				}
				// });
			}

			/**
	   * [popstate description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @return   {[type]}                   [description]
	   */

		}, {
			key: "popstate",
			value: function popstate() {
				this.toModules(history.state);
			}

			/**
	   * bit长度
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {[type]}                   chars [description]
	   * @return   {[type]}                         [description]
	   */

		}, {
			key: "charsBitLength",
			value: function charsBitLength(chars) {
				var bitlength = 0;
				for (var i = 0, len = chars.length; i < len; i++) {
					if ((chars.charCodeAt(i) & 0xff00) != 0) bitlength++;
					bitlength++;
				}
				return bitlength;
			}
		}]);

		return URL;
	}();

	var URLUtils = new URL();

	// exports.default = URLUtils;
	return URLUtils;
});
"use strict";
/**
* Loop
* Zhengqp (strongiron@qq.com)
* date:2016-08-10
*/

define(function(){



	var LoopFactory = function () {
		function LoopFactory() {
			_classCallCheck(this, LoopFactory);

			this._loops = [];
			this._loopspeed = 200;
			this._loopStatus = false;
			this._loopTimer = null;
		}
		/**
	  * play
	  * @Author   zhengqp(strongiron@qq.com)
	  * @DateTime 2016-08-10
	  * @return   {[type]}                   [description]
	  */


		_createClass(LoopFactory, [{
			key: "play",
			value: function play() {
				clearTimeout(this._loopTimer);
				if (!this._loops || this._loops.length == 0) {
					this._loops = [];
					this._loopStatus = false;
					return;
				}

				for (var key in this._loops) {
					if (this._loops[key]) this._loops[key].fun();
				}
				this._loopTimer = setTimeout(this.play.bind(this), this._loopspeed);
			}
		}, {
			key: "add",
			value: function add() {
				var fun = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
				var layoutId = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

				if (typeof fun == "function") {
					var unfind = true;
					if (this._loops) for (var i = 0, len = this._loops.length; i < len; i++) {
						if (fun == this._loops[i].fun) {
							unfind = false;
							break;
						}
					}
					if (unfind) {
						this._loops.push({ fun: fun, id: layoutId ? layoutId : "0" });
						if (!this._loopStatus) {
							this._loopTimer = setTimeout(this.play.bind(this), this._loopspeed);
							this._loopStatus = true;
						}
					}
				}
			}
		}, {
			key: "remove",
			value: function remove(fun) {
				if (typeof fun == "function") {
					for (var i = 0; i < this._loops.length; i++) {
						if (this._loops[i].fun == fun) {
							this._loops.splice(i, 1);
							break;
						}
					}
				}
			}
		}, {
			key: "removeByLayoutId",
			value: function removeByLayoutId(id) {
				for (var i = 0; i < this._loops.length;) {
					if (this._loops[i].id == id) {
						this._loops[i].fun(1);
						this._loops.splice(i, 1);
					} else i++;
				}
			}
		}]);

		return LoopFactory;
	}();

	// exports.default = LoopFactory;

	var Loop = new LoopFactory();
	// exports.default = Loop;

	return Loop;
});
"use strict";
/**
 * 模块名： 计数器
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-13 15:52:33
 * @version 0.0.1
 */

define(function(){




  var StopWatch = function () {
    function StopWatch(props) {
      _classCallCheck(this, StopWatch);

      this._startTime = 0;
      this.reset();
    }

    /**
     * 重置
     * @Author   zhengqp(strongiron@qq.com)
     * @DateTime 2016-08-13
     * @return   {[type]}                   [description]
     */


    _createClass(StopWatch, [{
      key: "reset",
      value: function reset() {
        this.startTime = new Date().valueOf();
      }

      /**
       * 过去时间
       * @Author   zhengqp(strongiron@qq.com)
       * @DateTime 2016-08-13
       * @param    {[type]}                   ){        return new           Date().valueOf()-_startTime;     }   } [description]
       * @return   时差(毫秒)
       */

    }, {
      key: "timePassed",
      get: function get() {
        return new Date().valueOf() - this._startTime;
      }
    }]);

    return StopWatch;
  }();

  // exports.default = StopWatch;
  return StopWatch;
});