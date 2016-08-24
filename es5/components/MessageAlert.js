'use strict';
/**
 * 模块名： MessageAlert
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-20 11:21:50
 * @version 0.0.1
 */
define(['./../core/models/LayoutPanel',
	'./../core/controls/PanelManager'],function(_LayoutPanel3,_PanelManager){

	var _LayoutPanel4 = _interopRequireDefault(_LayoutPanel3);

	var _PanelManager2 = _interopRequireDefault(_PanelManager);


	var MessageAlert = function () {
		function MessageAlert() {
			_classCallCheck(this, MessageAlert);

			this._tip = null;
			this._confirm = null;
			this._alerts = [];
		}
		/**
	  * [tip description]
	  * @Author   zhengqp(strongiron@qq.com)
	  * @DateTime 2016-08-20
	  * @param    {Number}                   type [0 loading,1 提示，2警告，3错误 ]
	  * @param    {String}                   msg  [提示内容]
	  * @return   {[type]}                        [description]
	  */
		//static 


		_createClass(MessageAlert, [{
			key: 'tip',
			value: function tip() {
				var type = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
				var msg = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];

				if (!this._tip) {
					this._tip = new Tip_Panel();
				}
				var index = this._alerts.indexOf(this._alerts);
				if (index > -1) this._alerts.splice(index, 1);
				this._alerts.push(this._alerts);
				this._tip.autoClose = type + "" != "0";
				if (this._tip.autoClose) this._tip.delay();
				this._tip.data = { type: type, msg: msg };
				this._tip.container.style.zIndex = _PanelManager2.default.topZIndex;
				this._tip.show();
				return this._tip;
			}

			/**
	   * [confirm 确认框]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-20
	   * @param    {String}                   contont     [回调函数]
	   * @param    {[type]}                   backfun     [回调参数]
	   * @param    {Object}                   backparam   [提示内容]
	   * @param    {String}                   title       [description]
	   * @param    {String}                   okLabel     [如果为数组]
	   * @param    {String}                   cancelLabel [description]
	   * @return   {[type]}                               [description]
	   */

		}, {
			key: 'confirm',
			value: function confirm() {
				var contont = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
				var backfun = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
				var backparam = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
				var title = arguments.length <= 3 || arguments[3] === undefined ? "" : arguments[3];
				var okLabel = arguments.length <= 4 || arguments[4] === undefined ? "确 认" : arguments[4];
				var cancelLabel = arguments.length <= 5 || arguments[5] === undefined ? "取 消" : arguments[5];

				if (!this._confirm) this._confirm = new Confirm_Panel();

				var index = this._alerts.indexOf(this._confirm);
				if (index > -1) this._alerts.splice(index, 1);
				this._alerts.push(this._confirm);
				var buttons;
				if ($.isArray(backfun)) {
					buttons = backfun;
					backfun = null;
					backparam = {};
					title = null;
				} else if ($.isArray(okLabel)) buttons = okLabel;

				if (buttons) {
					this._confirm.footerbuttons = buttons;
				}

				this._confirm.data = { backfun: backfun, backparam: backparam, contont: contont };
				this._confirm.title = title;
				this._confirm.container.style.zIndex = _PanelManager2.default.topZIndex;
				this._confirm.show();

				return this._confirm;
			}

			/**
	   * [show description]
	   * @Author   zhengqp(strongiron@qq.com)
	   * @DateTime 2016-08-20
	   * @param    {String}                   content [内容支持HTML]
	   * @return   {[type]}                           [description]
	   */

		}, {
			key: 'show',
			value: function show() {
				var content = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];

				var index = this._alerts.indexOf(content);
				if (index > -1) this._alerts.splice(index, 1);
				this._alerts.push(content);
				content.container.style.zIndex = _PanelManager2.default.topZIndex;
				content.show();

				return content;
			}
		}]);

		return MessageAlert;
	}();

	

	var TipPanel = function (_LayoutPanel) {
		_inherits(TipPanel, _LayoutPanel);

		function TipPanel(props) {
			_classCallCheck(this, TipPanel);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TipPanel).call(this, props));

			_this._icon = null;
			_this._label = null;
			_this._sw = null;
			_this._types = {
				"0": "loading-sign fa fa-spinner", //loading
				"1": "fa fa-check", //提示
				"2": "fa fa-exclamation-triangle", //警告
				"3": "fa fa-times" //错误
			};

			return _this;
		}

		_createClass(TipPanel, [{
			key: 'createChildren',
			value: function createChildren() {
				this.size = { width: 400, height: 70 };
				this.title = null;
				this.showfooter = false;
				this._icon = document.createElement("i");
				this.contentshape.appendChild(this._icon);
				this._label = document.createElement("span");
				this.contentshape.appendChild(this._label);
			}
		}, {
			key: 'datachange',
			value: function datachange() {
				if (this._datachanged) {
					_get(Object.getPrototypeOf(TipPanel.prototype), 'datachange', this).call(this);
					this._icon.className = _types[this._data.type + ""];
					this._label.innerHTML = this._data.msg + "";
				}
			}
		}, {
			key: 'delay',
			value: function delay() {
				if (!this._sw) this._sw = new this.StopWatch();
				this._sw.reset();
				this.loopAdd(delayclose);
			}
		}, {
			key: 'delayclose',
			value: function (_delayclose) {
				function delayclose() {
					return _delayclose.apply(this, arguments);
				}

				delayclose.toString = function () {
					return _delayclose.toString();
				};

				return delayclose;
			}(function () {
				if (this._sw.timePassed > 3000) {
					this.close();
					this.loopRemove(delayclose);
				}
			})
		}]);

		return TipPanel;
	}(_LayoutPanel4.default);

	var ConfirmPanel = function (_LayoutPanel2) {
		_inherits(ConfirmPanel, _LayoutPanel2);

		function ConfirmPanel(props) {
			_classCallCheck(this, ConfirmPanel);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ConfirmPanel).call(this, props));

			_this2._content = null;

			return _this2;
		}

		_createClass(ConfirmPanel, [{
			key: 'initialize',
			value: function initialize() {
				this.panelClassName = "panel alert_panel";
				this.size = { width: 486, height: 191 };
				_get(Object.getPrototypeOf(ConfirmPanel.prototype), 'initialize', this).call(this);
			}
		}, {
			key: 'createChildren',
			value: function createChildren() {
				this._content = document.createElement("div");
				this._content.className = "confirm_content";
				this.contentshape.appendChild(this._content);
			}
		}, {
			key: 'panelButtonClickHandler',
			value: function panelButtonClickHandler(evt) {
				var type = evt.target.getAttribute("data-type");
				if (this._data) {
					if (typeof this._data.backfun == "function") this._data.backfun(type, this._data.backparam);
				}
				_get(Object.getPrototypeOf(ConfirmPanel.prototype), 'panelButtonClickHandler', this).call(this, evt);
			}
		}, {
			key: 'boxsize',
			value: function boxsize() {
				this.size = { width: this.width, height: this.contentshape.offsetHeight + (this.titleshape ? this.titleshape.offsetHeight : 0) + (this.footershape ? this.footershape.offsetHeight : 0) };
			}
		}, {
			key: 'datachange',
			value: function datachange() {
				if (this._datachanged) {
					_get(Object.getPrototypeOf(ConfirmPanel.prototype), 'datachange', this).call(this);
					this._content.innerHTML = this._data.contont + "";
				}
			}
		}]);

		return ConfirmPanel;
	}(_LayoutPanel4.default);


	// exports.default = MessageAlert;
	return MessageAlert;
}

