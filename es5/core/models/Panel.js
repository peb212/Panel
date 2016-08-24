'use strict';
 /**
* 模块名： Panel
* @authors zhengqp (strongiron@qq.com)
* @date    2016-08-09 19:16:40
* @version 0.0.1
* */

define(['./../../utils/Loop',
	'./../controls/PanelManager',
	'./../../utils/RequireFactory',
	'./../../utils/StopWatch'],function(_Loop,
		_PanelManager,
		_RequireFactory,
		_StopWatch){



	var _Loop2 = _interopRequireDefault(_Loop);

	var _PanelManager2 = _interopRequireDefault(_PanelManager);

	var _RequireFactory2 = _interopRequireDefault(_RequireFactory);

	var _StopWatch2 = _interopRequireDefault(_StopWatch);

	var Panel = function () {
		function Panel(props) {
			_classCallCheck(this, Panel);

			this._data = null;
			this._datachanged = false;
			this._container = null;
			this._width = 600;
			this._height = 400;
			this._zIndex = 1;
			this.id = "";
			this.type = props ? props.type : "full";
			this._container = document.createElement("div");
			if (this.type == "full") this.initialize();
		}

		_createClass(Panel, [{
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
				stageResize.add($.proxy(this.resize,this));
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
				if (value) {
					if (parseInt(value.width) != this.width || parseInt(value.height) != this.height) {
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
		}, {
			key: 'require',
			get: function get() {
				return _RequireFactory2.default.add;
			}
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
		}]);

		return Panel;
	}();

	// exports.default = Panel;
	return Panel;
});
