/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

	var _Message = __webpack_require__(24);

	var _Message2 = _interopRequireDefault(_Message);

	var _ModuleConst = __webpack_require__(27);

	var _ModuleConst2 = _interopRequireDefault(_ModuleConst);

	var _Utils = __webpack_require__(26);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 模块名： 入口
	 * @authors zhengqp (strongiron@qq.com)
	 * @date    2016-08-21 16:52:51
	 * @version 0.0.1
	 */

	console.log("enter");
	if (!_Utils2.default.tryToModules()) _Message2.default.sendToModules("open_test_mainpanel", [_ModuleConst2.default.TEST_MODULE], {}, 1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _StopWatch = __webpack_require__(2);

	var _StopWatch2 = _interopRequireDefault(_StopWatch);

	var _Loop = __webpack_require__(23);

	var _Loop2 = _interopRequireDefault(_Loop);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	// define(["./../engine/utils/StopWatch","./../engine/utils/Loop"],function(StopWatch){
	/**
	strongiron@qq.com
	日期：2016-05-30
	版本：0.0.1
	*/
	+function () {
		var global = window || this;
		var config = GlobalStaticConfing;
		if (!config) {
			GlobalStaticConfing = {};
			config = GlobalStaticConfing;
		}
		var _layer = {};
		var _stageResize = new $.Callbacks("unique memory");

		_layer.fullLayer = createLayer("fullLayer");
		_layer.moduleLayer = createLayer("modulelayer");
		_layer.tipLayer = createLayer("tiplayer");
		_layer.topLayer = createLayer("toplayer");

		global.layer = _layer;
		global.stageResize = _stageResize;
		if (!config.isDebug) global.console.log = function () {};

		$(global).ready(init);

		function init() {
			if (!_layer.fullLayer.parentNode) $("body").append(_layer.fullLayer);
			if (!_layer.moduleLayer.parentNode) $("body").append(_layer.moduleLayer);
			if (!_layer.tipLayer.parentNode) $("body").append(_layer.tipLayer);
			if (!_layer.topLayer.parentNode) $("body").append(_layer.topLayer);

			_stageResize.fire();
			var sw = new _StopWatch2.default();
			$(global).resize(function (evt) {
				_Loop2.default.add(resizefire);
			});

			function resizefire() {
				if (sw.timePassed > 200) {
					sw.reset();
					_Loop2.default.remove(resizefire);
					_stageResize.fire();
				}
			}
		}

		function createLayer(id) {
			var contaiter = document.getElementById(id);
			if (!contaiter) {
				contaiter = document.createElement("div");
				contaiter.id = id;
			}

			return contaiter;
		}
	}();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 模块名： 计数器
	 * @authors zhengqp (strongiron@qq.com)
	 * @date    2016-08-13 15:52:33
	 * @version 0.0.1
	 */
	var StopWatch = function () {
	  function StopWatch(props) {
	    (0, _classCallCheck3.default)(this, StopWatch);

	    this._startTime = 0;
	    this.reset();
	  }

	  /**
	   * 重置
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @return   {[type]}                   [description]
	   */


	  (0, _createClass3.default)(StopWatch, [{
	    key: "reset",
	    value: function reset() {
	      this.startTime = new Date().valueOf();
	    }

	    /**
	     * 过去时间
	     * @Author   zhengqp(strongiron@qq.com)
	     * @DateTime 2016-08-13
	     * @param    {[type]}                   ){				return new           Date().valueOf()-_startTime;			}		} [description]
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

	exports.default = StopWatch;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(5);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	var $Object = __webpack_require__(10).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(18), 'Object', {defineProperty: __webpack_require__(14).f});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(9)
	  , core      = __webpack_require__(10)
	  , ctx       = __webpack_require__(11)
	  , hide      = __webpack_require__(13)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(12);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(14)
	  , createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(18) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(15)
	  , IE8_DOM_DEFINE = __webpack_require__(17)
	  , toPrimitive    = __webpack_require__(21)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(18) && !__webpack_require__(19)(function(){
	  return Object.defineProperty(__webpack_require__(20)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(19)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16)
	  , document = __webpack_require__(9).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(16);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* Loop
	* Zhengqp (strongiron@qq.com)
	* date:2016-08-10
	*/
	var LoopFactory = function () {
		function LoopFactory() {
			(0, _classCallCheck3.default)(this, LoopFactory);

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


		(0, _createClass3.default)(LoopFactory, [{
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
				this._loopTimer = setTimeout($.proxy(this.play, this), this._loopspeed);
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

	exports.default = LoopFactory;

	var Loop = new LoopFactory();
	exports.default = Loop;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.MOTHOD = undefined;

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _defineProperty2 = __webpack_require__(25);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _MOTHOD; /**
	              * 模块名： Message
	              * @authors zhengqp (strongiron@qq.com)
	              * @date    2016-08-13 16:54:47
	              * @version 0.0.1
	              */


	var _Utils = __webpack_require__(26);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import RequireFactory from './../../utils/RequireFactory';
	var MOTHOD = (_MOTHOD = {
		GET: "GET",
		POST: "POST"
	}, (0, _defineProperty3.default)(_MOTHOD, "GET", "DELETE"), (0, _defineProperty3.default)(_MOTHOD, "PUT", "PUT"), _MOTHOD);

	var modules = [];

	var MessageFactory = function () {
		function MessageFactory(props) {
			(0, _classCallCheck3.default)(this, MessageFactory);

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


		(0, _createClass3.default)(MessageFactory, [{
			key: "sendToModules",
			value: function sendToModules() {
				var key = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
				var modKeys = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
				var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
				var hy = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

				if ($.isArray(modKeys)) {
					console.log("message");
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
				return GlobalStaticConfig.serviceParam ? GlobalStaticConfig.serviceParam[key] : "";
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
				// if(key==999999)
				// {
				// 	RequireFactory.add(["eng/components/MessageAlert"],function(m)
				// 	{
				// 		window.location.href = "./login.html";
				// 	});			
				// 	return;
				// }
				var message = data;
				message._formData = formData;
				if ($.isFunction(backfun)) {
					backfun(message);
				} else {
					this.checkCode(key, message);
				}
			}
		}]);
		return MessageFactory;
	}();

	var loadModule = function loadModule(key, modKeys, data, hy) {
		(0, _classCallCheck3.default)(this, loadModule);

		// RequireFactory.add(modKeys,function(){
		var msg = {};
		msg.actionkey = key;
		msg.data = data;

		for (var i = 0, len = modKeys.length; i < len; i++) {
			var mod = modKeys[i];
			// console.log(mod,mod.subHander,mod.hasOwnProperty("subHander"),mod.hasOwnProperty("checkCode"),$.type(mod.subHander)=="function");
			if (mod) {
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
		// });		
	};

	var Message = new MessageFactory();
	exports.default = Message;
	exports.MOTHOD = MOTHOD;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(5);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 模块名： Utlis
	 * @authors zhengqp (strongiron@qq.com)
	 * @date    2016-08-13 16:15:16
	 * @version 0.0.1
	 */

	var URL = function () {
		function URL(props) {
			(0, _classCallCheck3.default)(this, URL);

			this._init = false;
		}

		/**
	  * [init description]
	  * @Author   zhengqp(strongiron@qq.com)
	  * @DateTime 2016-08-21
	  * @return   {[type]}                   [description]
	  */


		(0, _createClass3.default)(URL, [{
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

	exports.default = URLUtils;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Test_Module = __webpack_require__(28);

	var _Test_Module2 = _interopRequireDefault(_Test_Module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ModuleConst = {};
	/**测试模块*/
	/**
	 * 模块名： ModuleConst
	 * @authors zhengqp (strongiron@qq.com)
	 * @date    2016-08-13 11:21:07
	 * @version 0.0.1
	 */
	ModuleConst.TEST_MODULE = _Test_Module2.default; //"test/Test_Module";

	exports.default = ModuleConst;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(29);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(40);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(87);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _Module2 = __webpack_require__(95);

	var _Module3 = _interopRequireDefault(_Module2);

	var _Test_ServiceOrder = __webpack_require__(96);

	var _Test_ServiceOrder2 = _interopRequireDefault(_Test_ServiceOrder);

	var _Test_Proxy = __webpack_require__(97);

	var _Test_Proxy2 = _interopRequireDefault(_Test_Proxy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Test_Module = function (_Module) {
		(0, _inherits3.default)(Test_Module, _Module);

		function Test_Module() {
			(0, _classCallCheck3.default)(this, Test_Module);

			var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Test_Module).call(this));

			_this.registerProxy(_Test_Proxy2.default);
			_this.registerCode(_Test_ServiceOrder2.default.ORDER_100001);
			return _this;
		}

		return Test_Module;
	}(_Module3.default); /**
	                      * 模块名： Test_Module
	                      * @authors zhengqp (strongiron@qq.com)
	                      * @date    2016-08-20 20:55:52
	                      * @version 0.0.1
	                      */


	exports.default = new Test_Module();

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	module.exports = __webpack_require__(10).Object.getPrototypeOf;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(32)
	  , $getPrototypeOf = __webpack_require__(34);

	__webpack_require__(39)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(33);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(35)
	  , toObject    = __webpack_require__(32)
	  , IE_PROTO    = __webpack_require__(36)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(37)('keys')
	  , uid    = __webpack_require__(38);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(9)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(10)
	  , fails   = __webpack_require__(19);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(41);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(42);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(71);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(44);
	__webpack_require__(66);
	module.exports = __webpack_require__(70).f('iterator');

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(45)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(47)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(46)
	  , defined   = __webpack_require__(33);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(48)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(49)
	  , hide           = __webpack_require__(13)
	  , has            = __webpack_require__(35)
	  , Iterators      = __webpack_require__(50)
	  , $iterCreate    = __webpack_require__(51)
	  , setToStringTag = __webpack_require__(64)
	  , getPrototypeOf = __webpack_require__(34)
	  , ITERATOR       = __webpack_require__(65)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(52)
	  , descriptor     = __webpack_require__(22)
	  , setToStringTag = __webpack_require__(64)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(13)(IteratorPrototype, __webpack_require__(65)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(15)
	  , dPs         = __webpack_require__(53)
	  , enumBugKeys = __webpack_require__(62)
	  , IE_PROTO    = __webpack_require__(36)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(20)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(63).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(14)
	  , anObject = __webpack_require__(15)
	  , getKeys  = __webpack_require__(54);

	module.exports = __webpack_require__(18) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(55)
	  , enumBugKeys = __webpack_require__(62);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(35)
	  , toIObject    = __webpack_require__(56)
	  , arrayIndexOf = __webpack_require__(59)(false)
	  , IE_PROTO     = __webpack_require__(36)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(57)
	  , defined = __webpack_require__(33);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(58);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(56)
	  , toLength  = __webpack_require__(60)
	  , toIndex   = __webpack_require__(61);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(46)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(46)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9).document && document.documentElement;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(14).f
	  , has = __webpack_require__(35)
	  , TAG = __webpack_require__(65)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(37)('wks')
	  , uid        = __webpack_require__(38)
	  , Symbol     = __webpack_require__(9).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	var global        = __webpack_require__(9)
	  , hide          = __webpack_require__(13)
	  , Iterators     = __webpack_require__(50)
	  , TO_STRING_TAG = __webpack_require__(65)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(68)
	  , step             = __webpack_require__(69)
	  , Iterators        = __webpack_require__(50)
	  , toIObject        = __webpack_require__(56);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(47)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(65);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(86);
	module.exports = __webpack_require__(10).Symbol;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(9)
	  , has            = __webpack_require__(35)
	  , DESCRIPTORS    = __webpack_require__(18)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(49)
	  , META           = __webpack_require__(74).KEY
	  , $fails         = __webpack_require__(19)
	  , shared         = __webpack_require__(37)
	  , setToStringTag = __webpack_require__(64)
	  , uid            = __webpack_require__(38)
	  , wks            = __webpack_require__(65)
	  , wksExt         = __webpack_require__(70)
	  , wksDefine      = __webpack_require__(75)
	  , keyOf          = __webpack_require__(76)
	  , enumKeys       = __webpack_require__(77)
	  , isArray        = __webpack_require__(80)
	  , anObject       = __webpack_require__(15)
	  , toIObject      = __webpack_require__(56)
	  , toPrimitive    = __webpack_require__(21)
	  , createDesc     = __webpack_require__(22)
	  , _create        = __webpack_require__(52)
	  , gOPNExt        = __webpack_require__(81)
	  , $GOPD          = __webpack_require__(83)
	  , $DP            = __webpack_require__(14)
	  , $keys          = __webpack_require__(54)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(82).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(79).f  = $propertyIsEnumerable;
	  __webpack_require__(78).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(48)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(13)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(38)('meta')
	  , isObject = __webpack_require__(16)
	  , has      = __webpack_require__(35)
	  , setDesc  = __webpack_require__(14).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(19)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(9)
	  , core           = __webpack_require__(10)
	  , LIBRARY        = __webpack_require__(48)
	  , wksExt         = __webpack_require__(70)
	  , defineProperty = __webpack_require__(14).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(54)
	  , toIObject = __webpack_require__(56);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(54)
	  , gOPS    = __webpack_require__(78)
	  , pIE     = __webpack_require__(79);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 79 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(58);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(56)
	  , gOPN      = __webpack_require__(82).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(55)
	  , hiddenKeys = __webpack_require__(62).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(79)
	  , createDesc     = __webpack_require__(22)
	  , toIObject      = __webpack_require__(56)
	  , toPrimitive    = __webpack_require__(21)
	  , has            = __webpack_require__(35)
	  , IE8_DOM_DEFINE = __webpack_require__(17)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(18) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75)('asyncIterator');

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75)('observable');

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(88);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(92);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(41);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	module.exports = __webpack_require__(10).Object.setPrototypeOf;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(91).set});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(16)
	  , anObject = __webpack_require__(15);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(11)(Function.call, __webpack_require__(83).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(94);
	var $Object = __webpack_require__(10).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(52)});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Module
	 * @authors zhengqp (strongiron@qq.com)
	 * @date    2016-08-13 12:39:48
	 * @version 0.0.1
	 */
	// import RequireFactory from "./../../utils/RequireFactory";
	var Module = function () {
		function Module() {
			(0, _classCallCheck3.default)(this, Module);

			this._orders = [];
			this._proxysource = [];
			this._proxys = [];
		}

		(0, _createClass3.default)(Module, [{
			key: "registerCode",
			value: function registerCode() {
				for (var i = 0, len = arguments.length; i < len; i++) {
					var order = arguments[i];
					if (this._orders.indexOf(order) == -1) this._orders.push(order);
				}
			}
		}, {
			key: "registerSource",
			value: function registerSource() {
				for (var i = 0, len = arguments.length; i < len; i++) {
					var source = arguments[i];
					if (this._proxysource.indexOf(source) == -1) this._proxysource.push(source);
				}
			}
		}, {
			key: "registerProxy",
			value: function registerProxy() {
				console.log("registerProxy", arguments);
				for (var i = 0, len = arguments.length; i < len; i++) {
					var proxy = arguments[i];
					if (this._proxys.indexOf(proxy) == -1) this._proxys.push(proxy);
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
				console.log(this._proxys);
				if (this._proxys.length > 0) {
					for (var i = 0, len = this._proxys.length; i < len; i++) {
						var proxy = this._proxys[i];
						if (proxy && $.type(proxy) == "function") {
							proxy(message);
						}
					}
				} else {
					// RequireFactory.add(this._proxysource,$.proxy(function(){
					// 	for(var i=0,len=arguments.length;i<len;i++)
					// 	{
					// 		var proxy = arguments[i];
					// 		if(proxy&&$.type(proxy)=="function")
					// 		{
					// 			this._proxys.push(message);
					// 		}
					// 	}
					// 	if(this._proxys.length>0)
					// 	{
					// 		this.subHander(message);
					// 	}
					// },this));
				}
			}
		}]);
		return Module;
	}();

	exports.default = Module;

/***/ },
/* 96 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 模块名： Test_ServiceOrder
	 * @authors zhengqp (strongiron@qq.com)
	 * @date    2016-08-20 21:37:18
	 * @version 0.0.1
	 */
	var Test_ServiceOrder = {};

	/**测试1 GET*/
	Test_ServiceOrder.ORDER_100001 = "100001";

	exports.default = Test_ServiceOrder;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _PanelManager = __webpack_require__(98);

	var _PanelManager2 = _interopRequireDefault(_PanelManager);

	var _LayoutConst = __webpack_require__(99);

	var _LayoutConst2 = _interopRequireDefault(_LayoutConst);

	var _Test_ServiceOrder = __webpack_require__(96);

	var _Test_ServiceOrder2 = _interopRequireDefault(_Test_ServiceOrder);

	var _Test_InternalOrder = __webpack_require__(100);

	var _Test_InternalOrder2 = _interopRequireDefault(_Test_InternalOrder);

	var _Test_Panel = __webpack_require__(101);

	var _Test_Panel2 = _interopRequireDefault(_Test_Panel);

	var _Test_registerPanel = __webpack_require__(103);

	var _Test_registerPanel2 = _interopRequireDefault(_Test_registerPanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * [Test_Proxy description]
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-20
	 * @param    {Object}                   message [description]
	 * @return   {[type]}                           [description]
	 */
	/**
	 * 模块名： Test_Proxy
	 * @authors zhengqp (strongiron@qq.com)
	 * @date    2016-08-20 21:01:58
	 * @version 0.0.1
	 */

	var Test_Proxy = function Test_Proxy() {
		var message = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		console.log(message);
		var action = message["actionkey"];
		console.log(action);
		switch (action) {
			case _Test_InternalOrder2.default.OPEN_PANEL:
				tryOpenMainPanel(message.data);
				break;
			case _Test_InternalOrder2.default.OPEN_REGISTER:
				tryOpenRegisterPanel(message.data);
				break;
			case Event.RESIZE:
				break;
		}
	};
	// import RequireFactory from "./../../../engine/utils/RequireFactory";

	var _mainPanel = void 0;
	var _registerPanel = void 0;
	var tryOpenMainPanel = function tryOpenMainPanel() {
		var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		if (!_mainPanel) {
			// RequireFactory.add(["test/views/Test_Panel"],function(mainpanel){
			_mainPanel = new _Test_Panel2.default();
			_mainPanel.registLayout(_LayoutConst2.default.TEST_MAIN_PANEL);
			// tryOpenMainPanel();
			// });
		}
		// else
		// {
		_PanelManager2.default.openPanel(_mainPanel.id);
		// }
	};
	var tryOpenRegisterPanel = function tryOpenRegisterPanel() {
		var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		console.log("fsdfdssssf");
		if (!_registerPanel) {
			// RequireFactory.add(["test/views/Test_Panel"],function(mainpanel){
			_registerPanel = new _Test_registerPanel2.default();
			_registerPanel.registLayout(_LayoutConst2.default.REGISTER_MAIN_PANEL);
			// tryOpenMainPanel();
			// });
		}
		// else
		// {
		_PanelManager2.default.openPanel(_registerPanel.id);
		// }
	};

	exports.default = Test_Proxy;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* PanelManager
	* Zhengqp (strongiron@qq.com)
	* date:2016-08-09
	*/
	var PanelManagerFactory = function () {
		function PanelManagerFactory() {
			(0, _classCallCheck3.default)(this, PanelManagerFactory);

			this._panelDic = {};
		}

		/**
	  * 当前窗口顶层
	  * @Author   zhengqp(strongiron@qq.com)
	  * @DateTime 2016-08-13
	  * @param    {[type]}                   ){			var ch            [description]
	  * @return   {[type]}                             [description]
	  */


		(0, _createClass3.default)(PanelManagerFactory, [{
			key: "regist",


			/**
	   * 注册 
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    string                  key   [description]
	   * @param    Panel                  panel [description]
	   * @return   {[type]}                         [description]
	   */
			value: function regist(key, panel) {
				if (panel) {
					if (!this._panelDic[key]) {
						this._panelDic[key] = panel;
					}
				}
			}
			/**
	   * 注销
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    string                   key [description]
	   * @return   {[type]}                       [description]
	   */

		}, {
			key: "unRegist",
			value: function unRegist(key) {
				if (this._panelDic[key]) {
					delete this._panelDic[key];
				}
			}

			/**
	   * 打开窗口
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    string                   key        [description]
	   * @param    Boolen                   closeother [description]
	   * @return   {[type]}                              [description]
	   */

		}, {
			key: "openPanel",
			value: function openPanel() {
				var key = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
				var closeother = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

				var panel = this._panelDic[key];
				if (!panel) return;
				var full = panel.type == "full";
				var mLayer = full ? layer.fullLayer : layer.moduleLayer;
				console.log("openPanel", full);
				if (full) closeother = true;
				if (closeother) this.closeOtherPanel(key, mLayer);
				panel.show();

				panel.zIndex = PanelManager.topZIndex;
				if (!panel.container.parentNode) {
					mLayer.appendChild(panel.container);
				}
			}

			/**
	   * 关闭窗口
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {[type]}                   key   [description]
	   * @param    {[type]}                   tween [description]
	   * @return   {[type]}                         [description]
	   */

		}, {
			key: "closePanel",
			value: function closePanel() {
				var key = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
				var tween = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

				var panel = this._panelDic[key];
				if (!panel) return;
				panel.close();
				if (panel.container.parentNode) panel.container.parentNode.removeChild(panel.container);
			}

			/**
	   * 获取窗口
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {String}                   key [description]
	   * @return   {[type]}                       [description]
	   */

		}, {
			key: "getPanel",
			value: function getPanel() {
				var key = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];

				if (this._panelDic[key]) {
					return this._panelDic[key];
				}
				return null;
			}

			/**
	   * [closeOtherPanel description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {String}                   key    [description]
	   * @param    {Layer}                   mLayer [description]
	   * @return   {[type]}                          [description]
	   */

		}, {
			key: "closeOtherPanel",
			value: function closeOtherPanel() {
				var key = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
				var mLayer = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

				if (mLayer) for (var i = 0, len = mLayer.childNodes.length; i < len; i++) {
					if (mLayer.childNodes[i].id == key) continue;
					this.closePanel(mLayer.childNodes[i].id);
				}
			}

			/**
	   * 查找子类
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {[type]}                   element [description]
	   * @param    {String}                   id      [description]
	   * @return   {[type]}                           [description]
	   */

		}, {
			key: "_checkChildById",
			value: function _checkChildById() {
				var element = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
				var id = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];

				var chk = false;
				if (element) {
					for (var i = 0; i < element.childElementCount; i++) {
						if (element.children.item(i).id == id) {
							chk = true;
							break;
						}
					}
				}
				return chk;
			}
		}, {
			key: "topZIndex",
			get: function get() {
				var ch = layer.moduleLayer.childNodes.length;
				var zindex = Math.max(ch, 1);
				for (var i = 0; i < ch; i++) {
					zindex = Math.max(zindex, layer.moduleLayer.childNodes[i].style.zIndex ? layer.moduleLayer.childNodes[i].style.zIndex : 1);
					console.log(layer.moduleLayer.childNodes[i].style.zIndex);
				}
				return zindex;
			},
			set: function set(value) {}
		}]);
		return PanelManagerFactory;
	}();

	var PanelManager = new PanelManagerFactory();
	exports.default = PanelManager;

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 模块名： LayoutConst
	 * @authors zhengqp (strongiron@qq.com)
	 * @date    2016-08-20 21:12:15
	 * @version 0.0.1
	 */
	var LayoutConst = {};
	/**测试主界面*/
	LayoutConst.TEST_MAIN_PANEL = "test_main_panel";
	/**注册主界面*/
	LayoutConst.REGISTER_MAIN_PANEL = "register_main_panel";

	exports.default = LayoutConst;

/***/ },
/* 100 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 模块名： Test_InternalOrder
	 * @authors zhengqp (strongiron@qq.com)
	 * @date    2016-08-20 21:21:01
	 * @version 0.0.1
	 */
	var Test_InternalOrder = {};
	Test_InternalOrder.OPEN = "test_pane_panel";
	Test_InternalOrder.OPEN_REGISTER = "test_regiter_panel";
	exports.default = Test_InternalOrder;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(29);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(40);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(87);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _Panel2 = __webpack_require__(102);

	var _Panel3 = _interopRequireDefault(_Panel2);

	var _StopWatch = __webpack_require__(2);

	var _StopWatch2 = _interopRequireDefault(_StopWatch);

	var _Test_InternalOrder = __webpack_require__(100);

	var _Test_InternalOrder2 = _interopRequireDefault(_Test_InternalOrder);

	var _ModuleConst = __webpack_require__(27);

	var _ModuleConst2 = _interopRequireDefault(_ModuleConst);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 模块名： Test_Panel;
	 * @authors zhengqp (strongiron@qq.com)
	 * @date    2016-08-20 23:02:31
	 * @version 0.0.1
	 */
	var Test_Panel = function (_Panel) {
		(0, _inherits3.default)(Test_Panel, _Panel);

		function Test_Panel(props) {
			(0, _classCallCheck3.default)(this, Test_Panel);

			var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Test_Panel).call(this, props));

			_this._inited = false;
			_this.initialize();
			return _this;
		}

		(0, _createClass3.default)(Test_Panel, [{
			key: "createChildren",
			value: function createChildren() {
				var $def = $.Deferred();
				$(this.container).load('./../templates/test/main.html', $.proxy(function (h, type, d) {
					if (type == "success") {
						this._inited = true;
						this.addEventListeners();
						$def.resolve();
					}
				}, this));
				this.css({ width: "100%", height: "100%" });
				return $def.promise();
			}
		}, {
			key: "addEventListeners",
			value: function addEventListeners() {
				var hide = true;

				$(this.container).find("a[name=viwerforgetbox]").click($.proxy(function () {
					// var h = hide?212:0;
					// var op = hide?1:0;
					// hide =!hide;
					// $(this.container).find(".forgetbox").animate({
					//    height:h,
					//    opacity:op
					//  }, 1000);
					this.sendToModules(_Test_InternalOrder2.default.OPEN_REGISTER, [_ModuleConst2.default.TEST_MODULE]);
				}, this));
				$(this.container).find("input").on("focusout", $.proxy(function (evt) {
					this._check($(evt.currentTarget));
				}, this));

				$(this.container).find("[name=login]").click($.proxy(function () {
					this._submit_login();
				}, this));

				$(this.container).find("input[name=username]").on("keyup", $.proxy(function (evt) {
					if (evt.keyCode == 13) {
						this._submit_login();
					}
				}, this));

				$(this.container).find("input[name=password]").on("keyup", $.proxy(function (evt) {
					if (evt.keyCode == 13) {
						this._submit_login();
					}
				}, this));
			}
		}, {
			key: "_submit_login",
			value: function _submit_login() {
				var $username = $(this.container).find("[name=username]"),
				    $password = $(this.container).find("[name=password]");
				if (this._check($username) && this._check($password)) {
					Message.sendToService(Test_ServiceOrder.ORDER_100001, { username: $username.val(), password: $password.val() });
				}
			}
		}, {
			key: "_check",
			value: function _check($target) {
				var reg = $target.data("reg");
				if (reg) {
					if (!eval(reg).test($target.val())) {
						new tip($target, this);
						return false;
					}
				}
				return true;
			}
		}]);
		return Test_Panel;
	}(_Panel3.default);

	exports.default = Test_Panel;

	var tip = function tip($target, t) {
		(0, _classCallCheck3.default)(this, tip);

		$target.popover("show");
		var sw = new _StopWatch2.default();
		// RequireFactory.add(["eng/utils/StopWatch"],$.proxy(function(StopWatch){				
		// 	sw = new StopWatch();
		this.loopAdd(hide);
		// },t));

		var hide = $.proxy(function (exp) {
			if (sw && sw.timePassed > 3000 || exp) {
				this.loopRemove(hide);
				$target.popover("hide");
				sw = null;
			}
		}, t);
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _Loop = __webpack_require__(23);

	var _Loop2 = _interopRequireDefault(_Loop);

	var _PanelManager = __webpack_require__(98);

	var _PanelManager2 = _interopRequireDefault(_PanelManager);

	var _StopWatch = __webpack_require__(2);

	var _StopWatch2 = _interopRequireDefault(_StopWatch);

	var _Message = __webpack_require__(24);

	var _Message2 = _interopRequireDefault(_Message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import RequireFactory from './../../utils/RequireFactory';
	/**
	 * 模块名： Panel
	 * @authors zhengqp (strongiron@qq.com)
	 * @date    2016-08-09 19:16:40
	 * @version 0.0.1
	 * */
	var Panel = function () {
		function Panel(props) {
			(0, _classCallCheck3.default)(this, Panel);

			this._data = null;
			this._datachanged = false;
			this._container = null;
			this._width = 600;
			this._height = 400;
			this._zIndex = 1;
			this.id = "";
			console.log("this.type ", props);
			this.type = props ? props.type : "full";
			this._container = document.createElement("div");
			// if(this.type == "full")
			// 	this.initialize();
		}

		(0, _createClass3.default)(Panel, [{
			key: 'initialize',


			/**
	   * 初始化
	   * @Author   zhengqp
	   * @DateTime 2016-08-12T21:44:30+0800
	   * @return
	   */
			value: function initialize() {
				this.createChildren();
				this.draw();
			}

			/**
	   * [datachange description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-20
	   * @return   {[type]}                   [description]
	   */

		}, {
			key: 'datachange',
			value: function datachange() {
				this._datachanged = false;
			}

			/**
	   * 窗口注册
	   * @Author   zhengqp
	   * @DateTime 2016-08-12T21:45:29+0800
	   * @param 
	   */

		}, {
			key: 'registLayout',
			value: function registLayout() {
				var key = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];

				if (this.container == null || this.Manager == null) throw new Error('PanelManager||container undefind!!!');
				if (!this.id) {
					this.id = key;
					this.container.setAttribute("id", this.id);
					this.Manager.regist(key, this);
					this.initialize();
				}
			}

			/**
	   * 显示效果
	   * @Author   zhengqp
	   * @DateTime 2016-08-12T21:46:52+0800
	   * @return 
	   */

		}, {
			key: 'showEffect',
			value: function showEffect() {
				if (this.type == "full") {
					this.__history();
				}
			}

			/**
	   * 显示(不建议修改或直接引用)
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-12T21:49:16+0800
	   * @return
	   */

		}, {
			key: 'show',
			value: function show() {
				stageResize.add($.proxy(this.resize, this));
				layer.fullLayer.appendChild(this.container);
				this.showEffect();
			}

			/**
	   * 显示
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-12
	   * @return   {[type]}                   [description]
	   */

		}, {
			key: 'showPanel',
			value: function showPanel() {
				this.show();
			}

			/**
	   * 关闭效果
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-12T21:52:14+0800
	   * @return
	   */

		}, {
			key: 'closeEffect',
			value: function closeEffect() {}

			/**
	   * 关闭(不建议修改或直接引用)
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-12T21:53:08+0800
	   * @return
	   */

		}, {
			key: 'close',
			value: function close() {
				this.closeEffect();
				this.container.parentNode.removeChild(this.container);
				stageResize.remove(this.resize);
				this.closePanel();
				_Loop2.default.removeByLayoutId(this.id);
			}
		}, {
			key: 'closePanel',
			value: function closePanel() {}

			/**
	   * 样式
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-12
	   * @param  
	   */

		}, {
			key: 'css',
			value: function css(props) {
				if (props) {
					for (var key in props) {
						if (["width", "height"].indexOf(key.toLocaleLowerCase()) > -1) {
							this[key.toLocaleLowerCase()] = props[key];
						}
						this.container.style[key] = props[key];
					}
				}
			}

			/**
	   * createChildren
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-12
	   * @return  
	   */

		}, {
			key: 'createChildren',
			value: function createChildren() {}

			/**
	   * resize
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-12
	   * @return
	   */

		}, {
			key: 'resize',
			value: function resize() {
				this.draw();
			} //.bind(this);

			/**
	   * 场景resize
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-12
	   * @return 
	   */

		}, {
			key: 'stageResize',
			value: function stageResize() {}

			/**
	   * 添加定时器
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-12
	   * @param    function fun
	   * @return
	   */

		}, {
			key: 'loopAdd',
			value: function loopAdd() {
				_Loop2.default.add(fun, this.id);
			}

			/**
	   * 移除定时器
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-12
	   * @param    function                   fun [description]
	   * @return   
	   */

		}, {
			key: 'loopRemove',
			value: function loopRemove(fun) {
				_Loop2.default.remove(fun);
			}

			/**
	   * [draw description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-12
	   * @return 
	   */

		}, {
			key: 'draw',
			value: function draw() {
				if (this.type == "full") {} else {
					this.container.style.width = this.width + "px";
					this.container.style.height = this.height + "px";
				}
				this.stageResize();
			}

			/**
	   * 销毁
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-12
	   * @return 
	   */

		}, {
			key: 'dispose',
			value: function dispose() {}

			/**
	   * 历史
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-12
	   * @return 
	   */

		}, {
			key: '__history',
			value: function __history() {}
		}, {
			key: 'data',
			get: function get() {
				return this._data || {};
			},
			set: function set(value) {
				if (this._data != value) {
					this._data = value;
					this._datachanged = true;
					this.datachange();
				}
			}
		}, {
			key: 'size',
			get: function get() {
				return {
					width: this.width,
					height: this.height
				};
			},
			set: function set(value) {
				console.log("================================", value);
				if (value) {
					if (parseInt(value.width) != this.width || parseInt(value.height) != this.height) {
						console.log("================================");
						this.width = parseInt(value.width);
						this.height = parseInt(value.height);
						this.draw();
					}
				}
			}
		}, {
			key: 'width',
			get: function get() {
				return this._width || 0;
			},
			set: function set() {
				var value = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

				this._width = parseFloat(value);
			}
		}, {
			key: 'height',
			get: function get() {
				return this._height || 0;
			},
			set: function set() {
				var value = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

				this._height = parseFloat(value);
			}
		}, {
			key: 'container',
			get: function get() {
				return this._container;
			}
			/**@private*/
			,
			set: function set(value) {}
		}, {
			key: 'zIndex',
			get: function get() {
				return this._zIndex || 0;
			},
			set: function set() {
				var value = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

				this._zIndex = parseInt(value);
				this.container.style.zIndex = this._zIndex;
			}

			// get require()
			// {
			// 	return RequireFactory.add;
			// }

		}, {
			key: 'StopWatch',
			get: function get() {
				return _StopWatch2.default;
			}
		}, {
			key: 'Manager',
			get: function get() {
				return _PanelManager2.default;
			}
		}, {
			key: 'sendToModules',
			get: function get() {
				return _Message2.default.sendToModules;
			}
		}, {
			key: 'sendToService',
			get: function get() {
				return _Message2.default.sendToService;
			}
		}]);
		return Panel;
	}();

	exports.default = Panel;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(29);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(40);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(87);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _LayoutPanel2 = __webpack_require__(104);

	var _LayoutPanel3 = _interopRequireDefault(_LayoutPanel2);

	var _StopWatch = __webpack_require__(2);

	var _StopWatch2 = _interopRequireDefault(_StopWatch);

	var _LayoutConst = __webpack_require__(99);

	var _LayoutConst2 = _interopRequireDefault(_LayoutConst);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Test_registerPanel = function (_LayoutPanel) {
		(0, _inherits3.default)(Test_registerPanel, _LayoutPanel);

		function Test_registerPanel(props) {
			(0, _classCallCheck3.default)(this, Test_registerPanel);

			var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Test_registerPanel).call(this, props));

			_this.size = { width: 600, height: 400 };
			_this._inited = false;
			_this.title = "注册";
			_this.initialize();
			return _this;
		}

		(0, _createClass3.default)(Test_registerPanel, [{
			key: "createChildren",
			value: function createChildren() {
				var $def = $.Deferred();
				$(this.container).load('./../templates/test/register.html', $.proxy(function (h, type, d) {
					if (type == "success") {
						this._inited = true;
						this.addEventListeners();
						$def.resolve();
					}
				}, this));
				this.css({ width: "100%", height: "100%" });
				return $def.promise();
			}
		}, {
			key: "addEventListeners",
			value: function addEventListeners() {
				var hide = true;

				$(this.container).find("input").on("focusout", $.proxy(function (evt) {
					this._check($(evt.currentTarget));
				}, this));

				$(this.container).find("[name=login]").click($.proxy(function () {
					this._submit_login();
				}, this));

				$(this.container).find("input[name=username]").on("keyup", $.proxy(function (evt) {
					if (evt.keyCode == 13) {
						this._submit_login();
					}
				}, this));

				$(this.container).find("input[name=password]").on("keyup", $.proxy(function (evt) {
					if (evt.keyCode == 13) {
						this._submit_login();
					}
				}, this));
			}
		}, {
			key: "_submit_login",
			value: function _submit_login() {
				var $username = $(this.container).find("[name=username]"),
				    $password = $(this.container).find("[name=password]");
				if (this._check($username) && this._check($password)) {
					Message.sendToService(Test_ServiceOrder.ORDER_100001, { username: $username.val(), password: $password.val() });
				}
			}
		}, {
			key: "_check",
			value: function _check($target) {
				var reg = $target.data("reg");
				if (reg) {
					if (!eval(reg).test($target.val())) {
						new tip($target, this);
						return false;
					}
				}
				return true;
			}
		}]);
		return Test_registerPanel;
	}(_LayoutPanel3.default); /**
	                           * 模块名： Test_Panel;
	                           * @authors zhengqp (strongiron@qq.com)
	                           * @date    2016-08-20 23:02:31
	                           * @version 0.0.1
	                           */


	exports.default = Test_registerPanel;

	var tip = function tip($target, t) {
		(0, _classCallCheck3.default)(this, tip);

		$target.popover("show");
		var sw = new _StopWatch2.default();
		// RequireFactory.add(["eng/utils/StopWatch"],$.proxy(function(StopWatch){				
		// 	sw = new StopWatch();
		this.loopAdd(hide);
		// },t));

		var hide = $.proxy(function (exp) {
			if (sw && sw.timePassed > 3000 || exp) {
				this.loopRemove(hide);
				$target.popover("hide");
				sw = null;
			}
		}, t);
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(29);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(40);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _get2 = __webpack_require__(105);

	var _get3 = _interopRequireDefault(_get2);

	var _inherits2 = __webpack_require__(87);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _Panel2 = __webpack_require__(102);

	var _Panel3 = _interopRequireDefault(_Panel2);

	var _PanelManager = __webpack_require__(98);

	var _PanelManager2 = _interopRequireDefault(_PanelManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 模块名： LayoutPanel
	 * @authors zhengqp (strongiron@qq.com)
	 * @date    2016-08-13 11:21:07
	 * @version 0.0.1
	 */
	var Panel_Const = {
		POSTION: {
			LEFT: 1,
			RIGHT: 2,
			TOP: 3,
			BOTTOM: 4,
			MIDDLE: 0
		}
	};

	var LayoutPanel = function (_Panel) {
		(0, _inherits3.default)(LayoutPanel, _Panel);

		function LayoutPanel(props) {
			(0, _classCallCheck3.default)(this, LayoutPanel);

			var op = $.extend({ type: 'Layout' }, props || {});
			console.log(op, "==============sfsdfsd=========");

			// this._data = null;
			// 		this._datachanged = false;
			// 		this._container=null;
			// 		this._width		= 600;
			// 		this._height     = 400;
			// 		this._zIndex 	= 1;
			// 		this.id 			= "";
			// 		console.log("this.type ",this.type );
			// 		this.type 		= props?props.type:"full";
			// 		this._container = document.createElement("div");

			var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LayoutPanel).call(this, op));

			_this._className = "";
			_this._panelClassName = "panel";
			_this._panelOpenClassName = "panel_open";
			_this._mark = true;
			_this._algin = Panel_Const.POSTION.MIDDLE; //0中,1左,2右,3上,4下	
			_this._title = "";
			_this._showfooter = true;
			_this._autoClose = true;
			_this._okayLabel = "确 认";
			_this._cancelLabel = "取 消";
			_this._footerbuttons = []; //{"label":"取 消","dataType":"-1",'class':"btn btn-cancel"},{"label":"确认","dataType":'1','class':"btn btn-confirm"}];
			_this._title_style = {
				"margin": "0px",
				"padding": "15px 27px",
				"cursor": "grab",
				"min-height": "16.42857143px",
				"border-bottom": "1px solid #e5e5e5"
			};
			_this._content_style = {
				"margin": "0px",
				"padding": "20px",
				"font-size": "16px",
				"min-height": "16.42857143px",
				"overflow-x": "hidden",
				"overflow-y": "auto"
			};
			_this._footer_style = {
				"margin": "0px",
				"text-align": "center",
				// "border-top": "1px solid #e5e5e5",
				"padding": "20px"
			};
			_this._maskClassName = "panel_mask";
			_this._draged = false;
			_this._dragdif = { x: 0, y: 0 };
			_this._closing = false;

			//主体
			_this.contentshape = null;
			//遮罩
			_this.maskshape = null;
			//标题
			_this.titleshape = null;
			//底部
			_this.footershape = null;

			_this.type = "normal";
			_this.container.className = _this._panelClassName;
			_this.contentshape = document.createElement("div");
			_this.contentshape.className = "panel_body";
			_this._setstyle(_this.contentshape, _this._content_style);
			_this.container.appendChild(_this.contentshape);

			// this.initialize();
			return _this;
		}

		(0, _createClass3.default)(LayoutPanel, [{
			key: 'initialize',
			value: function initialize() {
				(0, _get3.default)((0, _getPrototypeOf2.default)(LayoutPanel.prototype), 'initialize', this).call(this);
				this.updateFooter();
				this.createmark();
			}

			/**
	   * 更新title
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @return   {[type]}                   [description]
	   */

		}, {
			key: 'updateTitle',
			value: function updateTitle() {
				if (this.title == null || this.title == undefined) {
					this.titleshape && this.titleshape.parentNode && this.titleshape.parentNode.removeChild(this.titleshape);
				} else {
					if (!this.titleshape) {
						this.titleshape = document.createElement("h4");
						this.titleshape.className = "panel_title";
						this._setstyle(this.titleshape, this._title_style);
						this.titleshape.addEventListener("mousedown", this._titlemouseevent, false);
						this.titleshape.addEventListener("mouseup", this._titlemouseevent, false);
						this.titleshape.addEventListener("mousemove", this._titlemouseevent, false);
					}
					if (!this.titleshape.parentNode) {
						this.container.childNodes.length > 0 ? this.container.insertBefore(this.titleshape, this.container.childNodes[0]) : this.container.appendChild(this.titleshape);
					}

					this.titleshape.innerHTML = this.title;
				}
			}

			/**
	   * 更新底部按钮
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @return   {[type]}                   [description]
	   */

		}, {
			key: 'updateFooter',
			value: function updateFooter() {
				if (!this._showfooter) {
					this.footershape && this.footershape.parentNode && this.footershape.parentNode.removeChild(this.footershape);
				} else {
					var btns = [];
					if (this._footerbuttons.length > 0) {
						btns = this._footerbuttons;
					} else {
						btns = [{ "label": this._cancelLabel, "dataType": "-1", 'class': "btn btn-cancel" }, { "label": this._okayLabel, "dataType": '1', 'class': "btn btn-confirm" }];
					}
					if (!this.footershape) {
						this.footershape = document.createElement("div");
						this.footershape.className = "panel_footer";
						this.footershape.addEventListener("click", $.proxy(function (evt) {
							if (evt.target.localName == "button") {
								this.panelButtonClickHandler(evt);
							}
						}, this));
						this._setstyle(this.footershape, this._footer_style);
					}
					!this.footershape.parentNode && this.container.appendChild(this.footershape);

					while (this.footershape.childNodes.length) {
						this.footershape.removeChild(this.footershape.childNodes[0]);
					}var ul = document.createElement("ul");
					this.footershape.appendChild(ul);

					for (var i = 0; i < btns.length; i++) {
						var li = document.createElement("li");
						li.style.display = "inline-block";
						ul.appendChild(li);
						var btn = document.createElement("button");
						btn.setAttribute("data-type", btns[i].dataType);
						btn.setAttribute("type", "button");
						btn.innerHTML = btns[i]["label"];
						btn.className = btns[i]["class"];
						li.appendChild(btn);
					}
				}
			}
		}, {
			key: 'show',
			value: function show() {
				// super();

				if (this.maskshape && !this.maskshape.parentNode) this.maskshape.style.zIndex = _PanelManager2.default.topZIndex++;
				if (!this.container.parentNode) layer.moduleLayer.appendChild(this.container);

				this.boxsize();
				stageResize.add($.proxy(this.resize, this));
				this.showEffect().done($.proxy(function () {
					//				layer.moduleLayer.appendChild(this.maskshape);
					$(this.container).before(this.maskshape);
					this.stageResize();
					this.showPanel();
				}, this));
			}
		}, {
			key: 'closeEffect',
			value: function closeEffect() {
				// super();

				var $def = $.Deferred();
				$(this.container).removeClass(this._panelOpenClassName);
				this.maskshape && this.maskshape.parentNode && this.maskshape.parentNode.removeChild(this.maskshape);
				setTimeout(function () {
					$def.resolve();
				}, 10);
				return $def.promise();
			}
		}, {
			key: 'close',
			value: function close() {
				// super();

				if (!this._closing) {
					this._closing = true;
					this.container.style.transform = null;
					this.container.style.transition = null;

					this.closeEffect().done($.proxy(function () {
						this.container && this.container.parentNode && this.container.parentNode.removeChild(this.container);
						stageResize.remove(this.resize);
						console.log(this, "=====================");
						this.closePanel();
						Loop.removeByLayoutId(this.id);
						this._closing = false;
					}, this));
				}
			}
		}, {
			key: 'showEffect',
			value: function showEffect() {
				// super();

				var $def = $.Deferred();
				$(this.container).addClass(this._panelOpenClassName);
				setTimeout(function () {
					$def.resolve();
				}, 10);
				return $def.promise();
			}
		}, {
			key: 'draw',
			value: function draw() {
				// super();

				this.container.style.width = this.width + "px";
				this.container.style.height = this.height + "px";
				this.resize();
			}

			/**
	   * 窗口大小改变
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @return   {[type]}                   [description]
	   */

		}, {
			key: 'boxsize',
			value: function boxsize() {
				this.contentshape.style.height = this.height - (this.titleshape ? this.titleshape.offsetHeight : 0) - (this.footershape ? this.footershape.offsetHeight : 0) + "px";
			}
		}, {
			key: 'resize',
			value: function resize() {
				// super();
				this.container.style.left = (window.innerWidth - this.width >> 1) + "px";
				this.container.style.top = (window.innerHeight - this.height >> 1) + "px";
				if (this.maskshape) {
					this.maskshape.style.left = "0px";
					this.maskshape.style.right = "0px";
					this.maskshape.style.top = "0px";
					this.maskshape.style.bottom = "0px";
				}
				this.stageResize();
			}

			/**
	   * 创建mark
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @return   {[type]}                   [description]
	   */

		}, {
			key: 'createmark',
			value: function createmark() {
				if (this._mark) {
					this.maskshape = document.createElement("div");
					this.maskshape.className = "panel_mark";
					this.maskshape.addEventListener("click", this._markshapeListenter, false);
					this.maskshape.addEventListener("mousedown", this._markshapeListenter, false);
					this.maskshape.addEventListener("dblclick", this._markshapeListenter, false);
				}
			}

			/**
	   * 按钮点击事件
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {[type]}                   evt [description]
	   * @return   {[type]}                       [description]
	   */

		}, {
			key: 'panelButtonClickHandler',
			value: function panelButtonClickHandler(evt) {
				this.close();
			}

			/**
	   * mark鼠标事件
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {[type]}                   evt [description]
	   * @return   {[type]}                       [description]
	   */

		}, {
			key: '_markshapeListenter',
			value: function _markshapeListenter(evt) {
				evt.stopPropagation();
				if (this._autoClose) this.close();
				return false;
			}

			/**
	   * [setstyle description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {[type]}                   target [description]
	   * @param    {[type]}                   st     [description]
	   * @return   {[type]}                          [description]
	   */

		}, {
			key: '_setstyle',
			value: function _setstyle(target, st) {
				for (var key in st) {
					target.style[key] = st[key];
				}
			}

			/**
	   * [titlemouseevent description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-13
	   * @param    {[type]}                   evt [description]
	   * @return   {[type]}                       [description]
	   */

		}, {
			key: '_titlemouseevent',
			value: function _titlemouseevent(evt) {
				evt.preventDefault();

				this.container.style.transform = "none";
				this.container.style.transition = "none";
				switch (evt.type) {
					case "mousedown":
						this._draged = true;
						this.titleshape.style.cursor = "move";
						this._dragdif = {
							x: evt.clientX - parseFloat(this.container.style.left),
							y: evt.clientY - parseFloat(this.container.style.top)
						};
						break;
					case "mouseup":
						this._draged = false;
						this.titleshape.style.cursor = "grab";
						break;
					case "mousemove":
						if (this._draged) {
							var x = evt.clientX - this._dragdif.x;
							var y = evt.clientY - this._dragdif.y;
							if (x + this.width > window.innerWidth) x = window.innerWidth - this.width;
							if (x < 0) x = 0;
							if (y + this.height > window.innerHeight) y = window.innerHeight - this.height;
							if (y < 0) y = 0;
							this.container.style.left = x + "px";
							this.container.style.top = y + "px";
						}
						break;
				}
			}
		}, {
			key: 'mark',
			set: function set(value) {
				this._mark = !!value;
				this.createmark();
			},
			get: function get() {
				return this._mark;
			}
		}, {
			key: 'title',
			get: function get() {
				return this._title;
			},
			set: function set(value) {
				this._title = value;
				this.updateTitle();
			}
		}, {
			key: 'panelClassName',
			get: function get() {
				return this._panelClassName;
			},
			set: function set(value) {
				this._panelClassName = value + "";
				this.container.className = this._panelClassName + " " + this._className;
			}
		}, {
			key: 'panelOpenClassName',
			get: function get() {
				return this._panelOpenClassName;
			},
			set: function set(value) {
				this._panelOpenClassName = value + "";
			}
		}, {
			key: 'className',
			get: function get() {
				return this._className;
			},
			set: function set(value) {
				this._className = value + "";
				this.container.className = this._panelClassName + " " + this._className;
			}
		}, {
			key: 'maskClassName',
			get: function get() {
				return this._maskClassName;
			},
			set: function set(value) {
				this._maskClassName = value + "";
				this.maskshape.className = this._maskClassName;
			}
		}, {
			key: 'showfooter',
			get: function get() {
				return !!this._showfooter;
			},
			set: function set(value) {
				this._showfooter = value;
				this.updateFooter();
			}
		}, {
			key: 'okayLabel',
			get: function get() {
				return this._okayLabel;
			},
			set: function set(value) {
				this._okayLabel = value + "";
				this._footerbuttons = [];
				this.updateFooter();
			}
		}, {
			key: 'cancelLabel',
			get: function get() {
				return this._cancelLabel;
			},
			set: function set(value) {
				this._cancelLabel = value;
				this._footerbuttons = [];
				this.updateFooter();
			}
		}, {
			key: 'footerbuttons',
			get: function get() {
				return this._footerbuttons;
			},
			set: function set(value) {
				if (Array.isArray(value)) this._footerbuttons = value;
				this.updateFooter();
			}
		}, {
			key: 'autoClose',
			get: function get() {
				return this._autoClose;
			},
			set: function set(value) {
				this._autoClose = !!value;
			}
		}, {
			key: 'OK',
			get: function get() {
				return 1;
			}
		}, {
			key: 'CANCEL',
			get: function get() {
				return 0;
			}
		}]);
		return LayoutPanel;
	}(_Panel3.default);

	exports.default = LayoutPanel;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getPrototypeOf = __webpack_require__(29);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _getOwnPropertyDescriptor = __webpack_require__(106);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);

	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;

	    if (getter === undefined) {
	      return undefined;
	    }

	    return getter.call(receiver);
	  }
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(108);
	var $Object = __webpack_require__(10).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(56)
	  , $getOwnPropertyDescriptor = __webpack_require__(83).f;

	__webpack_require__(39)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ }
/******/ ]);