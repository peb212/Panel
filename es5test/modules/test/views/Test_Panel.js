"use strict";
 /**
  * 模块名： Test_Panel;
  * @authors zhengqp (strongiron@qq.com)
  * @date    2016-08-20 23:02:31
  * @version 0.0.1
  */
 
 define(["eng/core/models/Panel","eng/utils/StopWatch",'lib/bootstrap/bootstrap'],function(_Panel2,_StopWatch){


	var _Panel3 = _interopRequireDefault(_Panel2);

	var _StopWatch2 = _interopRequireDefault(_StopWatch);

	var Test_Panel = function (_Panel) {
		_inherits(Test_Panel, _Panel);

		function Test_Panel(props) {
			_classCallCheck(this, Test_Panel);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Test_Panel).call(this, props));

			_this._inited = false;
			return _this;
		}

		_createClass(Test_Panel, [{
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
					var h = hide ? 212 : 0;
					var op = hide ? 1 : 0;
					hide = !hide;
					$(this.container).find(".forgetbox").animate({
						height: h,
						opacity: op
					}, 1000);
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

	var tip = function tip($target, t) {
		_classCallCheck(this, tip);

		$target.popover("show");
		var sw;
		RequireFactory.add(["eng/utils/StopWatch"], $.proxy(function (StopWatch) {
			sw = new StopWatch();
			this.loopAdd(hide);
		}, t));

		var hide = $.proxy(function (exp) {
			if (sw && sw.timePassed > 3000 || exp) {
				this.loopRemove(hide);
				$target.popover("hide");
				sw = null;
			}
		}, t);
	};



	// exports.default = Test_Panel;

	return Test_Panel;
 });


