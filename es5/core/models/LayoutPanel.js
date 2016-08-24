"use strict";
 /**
  * 模块名： LayoutPanel
  * @authors zhengqp (strongiron@qq.com)
  * @date    2016-08-13 11:21:07
  * @version 0.0.1
  */

define(["./Panel"],function(_Panel2){

	var _Panel3 = _interopRequireDefault(_Panel2);

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
		_inherits(LayoutPanel, _Panel);

		function LayoutPanel(props) {
			_classCallCheck(this, LayoutPanel);

			var op = $.extends({ type: 'Layout' }, props);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LayoutPanel).call(this, op));

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

			_this.initialize();
			return _this;
		}

		_createClass(LayoutPanel, [{
			key: "initialize",
			value: function initialize() {
				_get(Object.getPrototypeOf(LayoutPanel.prototype), "initialize", this).call(this);
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
			key: "updateTitle",
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
			key: "updateFooter",
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
			key: "show",
			value: function show() {
				// super();

				if (this.maskshape && !this.maskshape.parentNode) this.maskshape.style.zIndex = PanelManager.topZIndex++;
				if (!this.container.parentNode) layer.moduleLayer.appendChild(this.container);

				this.boxsize();
				stageResize.add(this.resize);
				this.showEffect().done($.proxy(function () {
					//				layer.moduleLayer.appendChild(this.maskshape);
					$(this.container).before(this.maskshape);
					this.stageResize();
					this.showPanel();
				}, this));
			}
		}, {
			key: "closeEffect",
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
			key: "close",
			value: function close() {
				// super();

				if (!this._closing) {
					this._closing = true;
					this.container.style.transform = null;
					this.container.style.transition = null;

					this.closeEffect().done($.proxy(function () {
						this.container && this.container.parentNode && this.container.parentNode.removeChild(this.container);
						stageResize.remove(this.resize);
						this.closePanel();
						Loop.removeByLayoutId(this.id);
						this._closing = false;
					}, this));
				}
			}
		}, {
			key: "showEffect",
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
			key: "draw",
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
			key: "boxsize",
			value: function boxsize() {
				this.contentshape.style.height = this.height - (this.titleshape ? this.titleshape.offsetHeight : 0) - (this.footershape ? this.footershape.offsetHeight : 0) + "px";
			}
		}, {
			key: "resize",
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
			key: "createmark",
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
			key: "panelButtonClickHandler",
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
			key: "_markshapeListenter",
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
			key: "_setstyle",
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
			key: "_titlemouseevent",
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
			key: "mark",
			set: function set(value) {
				this._mark = !!value;
				this.createmark();
			},
			get: function get() {
				return this._mark;
			}
		}, {
			key: "title",
			get: function get() {
				return this._title;
			},
			set: function set(value) {
				this._title = value;
				this.updateTitle();
			}
		}, {
			key: "panelClassName",
			get: function get() {
				return this._panelClassName;
			},
			set: function set(value) {
				this._panelClassName = value + "";
				this.container.className = this._panelClassName + " " + this._className;
			}
		}, {
			key: "panelOpenClassName",
			get: function get() {
				return this._panelOpenClassName;
			},
			set: function set(value) {
				this._panelOpenClassName = value + "";
			}
		}, {
			key: "className",
			get: function get() {
				return this._className;
			},
			set: function set(value) {
				this._className = value + "";
				this.container.className = this._panelClassName + " " + this._className;
			}
		}, {
			key: "maskClassName",
			get: function get() {
				return this._maskClassName;
			},
			set: function set(value) {
				this._maskClassName = value + "";
				this.maskshape.className = this._maskClassName;
			}
		}, {
			key: "showfooter",
			get: function get() {
				return !!this._showfooter;
			},
			set: function set(value) {
				this._showfooter = value;
				this.updateFooter();
			}
		}, {
			key: "okayLabel",
			get: function get() {
				return this._okayLabel;
			},
			set: function set(value) {
				this._okayLabel = value + "";
				this._footerbuttons = [];
				this.updateFooter();
			}
		}, {
			key: "cancelLabel",
			get: function get() {
				return this._cancelLabel;
			},
			set: function set(value) {
				this._cancelLabel = value;
				this._footerbuttons = [];
				this.updateFooter();
			}
		}, {
			key: "footerbuttons",
			get: function get() {
				return this._footerbuttons;
			},
			set: function set(value) {
				if (Array.isArray(value)) this._footerbuttons = value;
				this.updateFooter();
			}
		}, {
			key: "autoClose",
			get: function get() {
				return this._autoClose;
			},
			set: function set(value) {
				this._autoClose = !!value;
			}
		}, {
			key: "OK",
			get: function get() {
				return 1;
			}
		}, {
			key: "CANCEL",
			get: function get() {
				return 0;
			}
		}]);

		return LayoutPanel;
	}(_Panel3.default);

	// exports.default = LayoutPanel;
	return LayoutPanel;
});


