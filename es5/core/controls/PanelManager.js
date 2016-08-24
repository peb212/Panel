"use strict";

/**
* PanelManager
* Zhengqp (strongiron@qq.com)
* date:2016-08-09
*/
define(function(){


	var PanelManagerFactory = function () {
		function PanelManagerFactory() {
			_classCallCheck(this, PanelManagerFactory);

			this._panelDic = {};
		}

		/**
	  * 当前窗口顶层
	  * @Author   zhengqp(strongiron@qq.com)
	  * @DateTime 2016-08-13
	  * @param    {[type]}                   ){			var ch            [description]
	  * @return   {[type]}                             [description]
	  */


		_createClass(PanelManagerFactory, [{
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
	// exports.default = PanelManager;
	return PanelManager;
});
