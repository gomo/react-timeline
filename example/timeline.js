/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _index = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.onload = function () {
	
	  var lineData = [{ label: 'label1', id: '__1' }, { label: 'label2', id: '__2' }, { label: 'label3', id: '__3' }, { label: 'label4', id: '__4' }, { label: 'label5', id: '__5' }, { label: 'label6', id: '__6' }, { label: 'label7', id: '__7' }, { label: 'label8', id: '__8' }, { label: 'label9', id: '__9' }, { label: 'label10', id: '__10' }, { label: 'label11', id: '__11' }, { label: 'label12', id: '__12' }, { label: 'label13', id: '__13' }, { label: 'label14', id: '__14' }, { label: 'label15', id: '__15' }];
	
	  var timeSpan = _index.TimeSpan.create([10, 0], [25, 0]);
	
	  _reactDom2.default.render(React.createElement(_index.Timeline, {
	    lineData: lineData,
	    timeSpan: timeSpan,
	    lineWidth: 62,
	    minHeight: 17
	  }), document.getElementById('timeline'));
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TimeSpan = exports.Time = exports.Timeline = undefined;
	
	var _Timeline = __webpack_require__(3);
	
	var _Timeline2 = _interopRequireDefault(_Timeline);
	
	var _Time = __webpack_require__(6);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	var _TimeSpan = __webpack_require__(5);
	
	var _TimeSpan2 = _interopRequireDefault(_TimeSpan);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Timeline = _Timeline2.default;
	exports.Time = _Time2.default;
	exports.TimeSpan = _TimeSpan2.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TimeSpan = __webpack_require__(5);
	
	var _TimeSpan2 = _interopRequireDefault(_TimeSpan);
	
	var _LineView = __webpack_require__(7);
	
	var _LineView2 = _interopRequireDefault(_LineView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Timeline = function (_React$Component) {
	  _inherits(Timeline, _React$Component);
	
	  function Timeline(props) {
	    _classCallCheck(this, Timeline);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Timeline).call(this, props));
	  }
	
	  _createClass(Timeline, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'tlFrameView' },
	        this.props.lineData.map(function (data, index) {
	          return _react2.default.createElement(_LineView2.default, {
	            label: data.label,
	            key: data.id,
	            width: _this2.props.lineWidth,
	            minHeight: _this2.props.minHeight,
	            timeSpan: _this2.props.timeSpan
	          });
	        })
	      );
	    }
	  }]);
	
	  return Timeline;
	}(_react2.default.Component);
	
	exports.default = Timeline;
	
	
	Timeline.propTypes = {
	  timeSpan: _react2.default.PropTypes.instanceOf(_TimeSpan2.default).isRequired,
	  lineData: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    id: _react2.default.PropTypes.string.isRequired,
	    label: _react2.default.PropTypes.string.isRequired
	  })).isRequired,
	  lineWidth: _react2.default.PropTypes.number.isRequired,
	  minHeight: _react2.default.PropTypes.number.isRequired
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Time = __webpack_require__(6);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * 一度生成したオブジェクトは変更しません。
	 * 変更メソッドは新しいオブジェクトを帰します。
	 */
	
	var TimeSpan = function () {
	    _createClass(TimeSpan, null, [{
	        key: 'create',
	        value: function create(start, end) {
	            return new TimeSpan(new _Time2.default(start[0], start[1]), new _Time2.default(end[0], end[1]));
	        }
	    }]);
	
	    function TimeSpan(startTime, endTime) {
	        _classCallCheck(this, TimeSpan);
	
	        while (startTime.compare(endTime) >= 0) {
	            endTime = endTime.addMin(24 * 60);
	        }
	
	        this._startTime = startTime;
	        this._endTime = endTime;
	    }
	
	    _createClass(TimeSpan, [{
	        key: 'clone',
	        value: function clone() {
	            return new TimeSpan(this.getStartTime().clone(), this.getEndTime().clone());
	        }
	    }, {
	        key: 'getDistance',
	        value: function getDistance() {
	            return this._startTime.getDistance(this._endTime);
	        }
	    }, {
	        key: 'getStartTime',
	        value: function getStartTime() {
	            return this._startTime;
	        }
	    }, {
	        key: 'getEndTime',
	        value: function getEndTime() {
	            return this._endTime;
	        }
	    }, {
	        key: 'shiftEndTime',
	        value: function shiftEndTime(time) {
	            return new TimeSpan(time.addMin(-this.getDistance()), time);
	        }
	    }, {
	        key: 'shiftStartTime',
	        value: function shiftStartTime(time) {
	            return new TimeSpan(time, time.addMin(this.getDistance()));
	        }
	    }, {
	        key: 'equals',
	        value: function equals(timeSpan) {
	            return this.getStartTime().equals(timeSpan.getStartTime()) && this.getEndTime().equals(timeSpan.getEndTime());
	        }
	    }, {
	        key: 'contains',
	        value: function contains(timeSpan) {
	            return this.getStartTime().compare(timeSpan.getStartTime()) <= 0 && this.getEndTime().compare(timeSpan.getEndTime()) >= 0;
	        }
	    }, {
	        key: 'containsTime',
	        value: function containsTime(time) {
	            return this.getStartTime().compare(time) <= 0 && this.getEndTime().compare(time) >= 0;
	        }
	    }, {
	        key: 'overlaps',
	        value: function overlaps(timeSpan) {
	            if (timeSpan.contains(this)) {
	                return true;
	            }
	
	            if (this.containsTime(timeSpan.getStartTime())) {
	                return true;
	            }
	
	            if (this.containsTime(timeSpan.getEndTime())) {
	                return true;
	            }
	
	            return false;
	        }
	    }, {
	        key: 'eachHour',
	        value: function eachHour(callback) {
	            var hour = this.getStartTime().getHour();
	            var end = this.getEndTime().getHour();
	            var key = 0;
	
	            while (true) {
	                if (hour === end) {
	                    callback.call(hour, key, hour, this.getEndTime().getMin());
	                    break;
	                } else {
	                    callback.call(hour, key, hour);
	                }
	
	                hour += 1;
	                ++key;
	            }
	        }
	    }, {
	        key: 'eachTime',
	        value: function eachTime(callback, minuteInterval) {
	            var key = 0;
	            minuteInterval = minuteInterval ? minuteInterval : 60;
	
	            var time = this.getStartTime();
	            while (true) {
	                if (time.compare(this.getEndTime()) > 0) {
	                    break;
	                }
	
	                callback.call(time, key, time);
	
	                time = time.addMin(minuteInterval);
	                ++key;
	            }
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return this._startTime + '~' + this._endTime;
	        }
	    }]);
	
	    return TimeSpan;
	}();
	
	exports.default = TimeSpan;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * 一度生成したオブジェクトは変更しません。
	 * 変更メソッドは新しいオブジェクトを帰します。
	 */
	
	var Time = function () {
	    _createClass(Time, null, [{
	        key: 'eachMin',
	        value: function eachMin(callback, minuteInterval) {
	            var count = 60 / minuteInterval;
	            for (var i = 0; i < count; i++) {
	                var min = i * minuteInterval;
	                if (min < 60) {
	                    var displayMin = min < 10 ? '0' + min : min + '';
	                    callback.call(min, i, min, displayMin);
	                }
	            };
	        }
	    }, {
	        key: 'create',
	
	
	        /**
	         * 配列からTimeを生成
	         * @param  {array} time [hour, min]の配列
	         * @return {Time}
	         */
	        value: function create(time) {
	            return new Time(time[0], time[1]);
	        }
	    }]);
	
	    function Time(hour, min) {
	        _classCallCheck(this, Time);
	
	        this._hour = hour === undefined ? 0 : parseInt(hour, 10);
	        this._min = min === undefined ? 0 : parseInt(min, 10);
	        while (this._min < 0) {
	            --this._hour;
	            this._min = 60 + this._min;
	        }
	
	        while (this._min > 59) {
	            ++this._hour;
	            this._min = this._min - 60;
	        }
	
	        if (this._hour < 0) {
	            throw new Error(this.toString() + ' is not valid time.');
	        }
	    }
	
	    _createClass(Time, [{
	        key: 'getHour',
	        value: function getHour() {
	            return this._hour;
	        }
	    }, {
	        key: 'getMin',
	        value: function getMin() {
	            return this._min;
	        }
	    }, {
	        key: 'clone',
	        value: function clone() {
	            return new Time(this.getHour(), this.getMin());
	        }
	    }, {
	        key: 'addMin',
	        value: function addMin(min) {
	            return new Time(this.getHour(), this.getMin() + parseInt(min, 10));
	        }
	    }, {
	        key: 'equals',
	        value: function equals(time) {
	            return this.getHour() === time.getHour() && this.getMin() === time.getMin();
	        }
	    }, {
	        key: 'compare',
	        value: function compare(time) {
	            if (this.getHour() > time.getHour()) {
	                return 1;
	            } else if (this.getHour() < time.getHour()) {
	                return -1;
	            } else {
	                if (this.getMin() > time.getMin()) {
	                    return 1;
	                } else if (this.getMin() < time.getMin()) {
	                    return -1;
	                }
	            }
	
	            return 0;
	        }
	    }, {
	        key: 'getDistance',
	        value: function getDistance(targetTime) {
	            var targetHour = targetTime.getHour();
	            var hourDistance = targetHour - this._hour;
	            return hourDistance * 60 + (targetTime.getMin() - this._min);
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return this.getDisplayTime();
	        }
	    }, {
	        key: 'getDisplayHour',
	        value: function getDisplayHour() {
	            return this._hour < 24 ? this._hour : this._hour - 24;
	        }
	    }, {
	        key: 'getDisplayMin',
	        value: function getDisplayMin() {
	            return this._min < 10 ? '0' + this._min : this._min;
	        }
	    }, {
	        key: 'getDisplayTime',
	        value: function getDisplayTime() {
	            return this.getDisplayHour() + ':' + this.getDisplayMin();
	        }
	    }]);
	
	    return Time;
	}();
	
	exports.default = Time;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TimeSpan = __webpack_require__(5);
	
	var _TimeSpan2 = _interopRequireDefault(_TimeSpan);
	
	var _HourView = __webpack_require__(8);
	
	var _HourView2 = _interopRequireDefault(_HourView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LineView = function (_React$Component) {
	  _inherits(LineView, _React$Component);
	
	  function LineView(props) {
	    _classCallCheck(this, LineView);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LineView).call(this, props));
	
	    _this.state = {
	      hourViews: []
	    };
	    _this.props.timeSpan.eachTime(function (key, time) {
	      _this.state.hourViews.push(_react2.default.createElement(_HourView2.default, { key: time.getHour(), time: time, minHeight: _this.props.minHeight }));
	    });
	    return _this;
	  }
	
	  _createClass(LineView, [{
	    key: 'render',
	    value: function render() {
	      var wrapperStyle = {
	        width: this.props.width + 'px'
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'tlLineView', style: wrapperStyle },
	        this.state.hourViews
	      );
	    }
	  }]);
	
	  return LineView;
	}(_react2.default.Component);
	
	exports.default = LineView;
	
	
	LineView.propTypes = {
	  label: _react2.default.PropTypes.string.isRequired,
	  width: _react2.default.PropTypes.number.isRequired,
	  minHeight: _react2.default.PropTypes.number.isRequired,
	  timeSpan: _react2.default.PropTypes.instanceOf(_TimeSpan2.default).isRequired
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Time = __webpack_require__(6);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HourView = function (_React$Component) {
	  _inherits(HourView, _React$Component);
	
	  function HourView(props) {
	    _classCallCheck(this, HourView);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HourView).call(this, props));
	
	    _this.state = {
	      minDivs: []
	    };
	
	    var minStyle = {
	      height: _this.props.minHeight + 'px'
	    };
	    _Time2.default.eachMin(function (key, min) {
	      _this.state.minDivs.push(_react2.default.createElement(
	        'div',
	        {
	          key: min,
	          className: (0, _classnames2.default)('tlMinView', '_' + (min + 15)),
	          style: minStyle,
	          onClick: function onClick(e) {
	            return _this.onClick(e);
	          }
	        },
	        ' '
	      ));
	    }, 15);
	    return _this;
	  }
	
	  _createClass(HourView, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      console.log(e.clientY, e.currentTarget.getBoundingClientRect(), e.offsetParent);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'tlHourView' },
	        this.state.minDivs
	      );
	    }
	  }]);
	
	  return HourView;
	}(_react2.default.Component);
	
	exports.default = HourView;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGUxYWI1MzVjYThjNTQyMDhlYTAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5lVmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG91clZpZXcuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFFQSxRQUFPLE1BQVAsR0FBZ0IsWUFBTTs7QUFFcEIsT0FBTSxXQUFXLENBQ2YsRUFBQyxPQUFNLFFBQVAsRUFBaUIsSUFBRyxLQUFwQixFQURlLEVBRWYsRUFBQyxPQUFNLFFBQVAsRUFBaUIsSUFBRyxLQUFwQixFQUZlLEVBR2YsRUFBQyxPQUFNLFFBQVAsRUFBaUIsSUFBRyxLQUFwQixFQUhlLEVBSWYsRUFBQyxPQUFNLFFBQVAsRUFBaUIsSUFBRyxLQUFwQixFQUplLEVBS2YsRUFBQyxPQUFNLFFBQVAsRUFBaUIsSUFBRyxLQUFwQixFQUxl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QWQsRUFBdUIsRUFBRSxhQUFGLENBQWdCLHFCQUFoQixFQUF2QixFQUFnRSxFQUFFLFlBQWxFO0FBQ0Q7Ozs4QkFFTztBQUNOLGNBQ0U7QUFBQTtTQUFBLEVBQUssV0FBVSxZQUFmO1NBQTZCLEtBQUssS0FBTCxDQUFXO0FBQXhDLFFBREY7QUFHRDs7OztHQWhDbUMsZ0JBQU0sUzs7bUJBQXZCLFE7Ozs7OztBQ0pyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsa0JBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGRlMWFiNTM1Y2E4YzU0MjA4ZWEwXG4gKiovIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3Bhbn0gZnJvbSAnLi4vaW5kZXguZXM2Jztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcblxuICBjb25zdCBsaW5lRGF0YSA9IFtcbiAgICB7bGFiZWw6J2xhYmVsMScsIGlkOidfXzEnfSxcbiAgICB7bGFiZWw6J2xhYmVsMicsIGlkOidfXzInfSxcbiAgICB7bGFiZWw6J2xhYmVsMycsIGlkOidfXzMnfSxcbiAgICB7bGFiZWw6J2xhYmVsNCcsIGlkOidfXzQnfSxcbiAgICB7bGFiZWw6J2xhYmVsNScsIGlkOidfXzUnfSxcbiAgICB7bGFiZWw6J2xhYmVsNicsIGlkOidfXzYnfSxcbiAgICB7bGFiZWw6J2xhYmVsNycsIGlkOidfXzcnfSxcbiAgICB7bGFiZWw6J2xhYmVsOCcsIGlkOidfXzgnfSxcbiAgICB7bGFiZWw6J2xhYmVsOScsIGlkOidfXzknfSxcbiAgICB7bGFiZWw6J2xhYmVsMTAnLCBpZDonX18xMCd9LFxuICAgIHtsYWJlbDonbGFiZWwxMScsIGlkOidfXzExJ30sXG4gICAge2xhYmVsOidsYWJlbDEyJywgaWQ6J19fMTInfSxcbiAgICB7bGFiZWw6J2xhYmVsMTMnLCBpZDonX18xMyd9LFxuICAgIHtsYWJlbDonbGFiZWwxNCcsIGlkOidfXzE0J30sXG4gICAge2xhYmVsOidsYWJlbDE1JywgaWQ6J19fMTUnfVxuICBdO1xuXG4gIGNvbnN0IHRpbWVTcGFuID0gVGltZVNwYW4uY3JlYXRlKFsxMCwgMF0sIFsyNSwgMF0pO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8VGltZWxpbmVcbiAgICAgIGxpbmVEYXRhPXtsaW5lRGF0YX1cbiAgICAgIHRpbWVTcGFuPXt0aW1lU3Bhbn1cbiAgICAgIGxpbmVXaWR0aD17NjJ9XG4gICAgICBtaW5IZWlnaHQ9ezE3fVxuICAgIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lbGluZScpXG4gICk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGUvYXBwLmpzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZSc7XG5pbXBvcnQgVGltZSBmcm9tICcuL3NyYy9jbGFzc2VzL1RpbWUnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4vc3JjL2NsYXNzZXMvVGltZVNwYW4nO1xuXG5leHBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3Bhbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguZXM2XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBMaW5lVmlldyBmcm9tICcuL0xpbmVWaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bEZyYW1lVmlld1wiPlxuICAgICAgICB7dGhpcy5wcm9wcy5saW5lRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5lVmlld1xuICAgICAgICAgICAgICBsYWJlbD17ZGF0YS5sYWJlbH1cbiAgICAgICAgICAgICAga2V5PXtkYXRhLmlkfVxuICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy5saW5lV2lkdGh9XG4gICAgICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5UaW1lbGluZS5wcm9wVHlwZXMgPSB7XG4gIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbiAgbGluZURhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pKS5pc1JlcXVpcmVkLFxuICBsaW5lV2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBUaW1lIGZyb20gJy4vVGltZSdcbi8qKlxuICog5LiA5bqm55Sf5oiQ44GX44Gf44Kq44OW44K444Kn44Kv44OI44Gv5aSJ5pu044GX44G+44Gb44KT44CCXG4gKiDlpInmm7Tjg6Hjgr3jg4Pjg4njga/mlrDjgZfjgYTjgqrjg5bjgrjjgqfjgq/jg4jjgpLluLDjgZfjgb7jgZnjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNwYW5cbntcbiAgc3RhdGljIGNyZWF0ZShzdGFydCwgZW5kKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4obmV3IFRpbWUoc3RhcnRbMF0sIHN0YXJ0WzFdKSwgbmV3IFRpbWUoZW5kWzBdLCBlbmRbMV0pKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHN0YXJ0VGltZSwgZW5kVGltZSl7XG4gICAgd2hpbGUoc3RhcnRUaW1lLmNvbXBhcmUoZW5kVGltZSkgPj0gMCl7XG4gICAgICAgIGVuZFRpbWUgPSBlbmRUaW1lLmFkZE1pbigyNCAqIDYwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgdGhpcy5fZW5kVGltZSA9IGVuZFRpbWU7XG4gIH1cblxuICBjbG9uZSgpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aGlzLmdldFN0YXJ0VGltZSgpLmNsb25lKCksIHRoaXMuZ2V0RW5kVGltZSgpLmNsb25lKCkpO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKXtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUuZ2V0RGlzdGFuY2UodGhpcy5fZW5kVGltZSk7XG4gIH1cblxuICBnZXRTdGFydFRpbWUoKXsgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZTsgfVxuICBnZXRFbmRUaW1lKCl7IHJldHVybiB0aGlzLl9lbmRUaW1lOyB9XG5cbiAgc2hpZnRFbmRUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lLmFkZE1pbigtdGhpcy5nZXREaXN0YW5jZSgpKSwgdGltZSk7XG4gIH1cblxuICBzaGlmdFN0YXJ0VGltZSh0aW1lKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4odGltZSwgdGltZS5hZGRNaW4odGhpcy5nZXREaXN0YW5jZSgpKSk7XG4gIH1cblxuICBlcXVhbHModGltZVNwYW4pe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuZXF1YWxzKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSAmJiB0aGlzLmdldEVuZFRpbWUoKS5lcXVhbHModGltZVNwYW4uZ2V0RW5kVGltZSgpKTtcbiAgfVxuXG4gIGNvbnRhaW5zKHRpbWVTcGFuKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUodGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpIDw9IDAgJiYgdGhpcy5nZXRFbmRUaW1lKCkuY29tcGFyZSh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpID49IDA7XG4gIH1cblxuICBjb250YWluc1RpbWUodGltZSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5jb21wYXJlKHRpbWUpIDw9IDAgJiYgdGhpcy5nZXRFbmRUaW1lKCkuY29tcGFyZSh0aW1lKSA+PSAwO1xuICB9XG5cbiAgb3ZlcmxhcHModGltZVNwYW4pe1xuICAgICAgaWYodGltZVNwYW4uY29udGFpbnModGhpcykpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmNvbnRhaW5zVGltZSh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmNvbnRhaW5zVGltZSh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZWFjaEhvdXIoY2FsbGJhY2spe1xuICAgICAgdmFyIGhvdXIgPSB0aGlzLmdldFN0YXJ0VGltZSgpLmdldEhvdXIoKTtcbiAgICAgIHZhciBlbmQgPSB0aGlzLmdldEVuZFRpbWUoKS5nZXRIb3VyKCk7XG4gICAgICB2YXIga2V5ID0gMDtcblxuICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgaWYoaG91ciA9PT0gZW5kKXtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChob3VyLCBrZXksIGhvdXIsIHRoaXMuZ2V0RW5kVGltZSgpLmdldE1pbigpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChob3VyLCBrZXksIGhvdXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhvdXIgKz0gMTtcbiAgICAgICAgICArK2tleTtcbiAgICAgIH1cbiAgfVxuXG4gIGVhY2hUaW1lKGNhbGxiYWNrLCBtaW51dGVJbnRlcnZhbCl7XG4gICAgICB2YXIga2V5ID0gMDtcbiAgICAgIG1pbnV0ZUludGVydmFsID0gbWludXRlSW50ZXJ2YWwgPyBtaW51dGVJbnRlcnZhbCA6IDYwO1xuXG4gICAgICB2YXIgdGltZSA9IHRoaXMuZ2V0U3RhcnRUaW1lKCk7XG4gICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICBpZih0aW1lLmNvbXBhcmUodGhpcy5nZXRFbmRUaW1lKCkpID4gMCl7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGltZSwga2V5LCB0aW1lKTtcblxuICAgICAgICAgIHRpbWUgPSB0aW1lLmFkZE1pbihtaW51dGVJbnRlcnZhbCk7XG4gICAgICAgICAgKytrZXk7XG4gICAgICB9XG4gIH1cblxuICB0b1N0cmluZygpe1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZSArICd+JyArIHRoaXMuX2VuZFRpbWU7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvVGltZVNwYW4uZXM2XG4gKiovIiwiLyoqXG4gKiDkuIDluqbnlJ/miJDjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga/lpInmm7TjgZfjgb7jgZvjgpPjgIJcbiAqIOWkieabtOODoeOCveODg+ODieOBr+aWsOOBl+OBhOOCquODluOCuOOCp+OCr+ODiOOCkuW4sOOBl+OBvuOBmeOAglxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lXG57XG4gIHN0YXRpYyBlYWNoTWluKGNhbGxiYWNrLCBtaW51dGVJbnRlcnZhbCl7XG4gICAgICB2YXIgY291bnQgPSA2MCAvIG1pbnV0ZUludGVydmFsO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgdmFyIG1pbiA9IGkgKiBtaW51dGVJbnRlcnZhbDtcbiAgICAgICAgICBpZihtaW4gPCA2MCl7XG4gICAgICAgICAgICAgIHZhciBkaXNwbGF5TWluID0gbWluIDwgMTAgPyAnMCcgKyBtaW4gOiBtaW4gKyAnJztcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChtaW4sIGksIG1pbiwgZGlzcGxheU1pbik7XG4gICAgICAgICAgfVxuICAgICAgfTtcbiAgfTtcblxuICAvKipcbiAgICog6YWN5YiX44GL44KJVGltZeOCkueUn+aIkFxuICAgKiBAcGFyYW0gIHthcnJheX0gdGltZSBbaG91ciwgbWluXeOBrumFjeWIl1xuICAgKiBAcmV0dXJuIHtUaW1lfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZSh0aW1lKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aW1lWzBdLCB0aW1lWzFdKTtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihob3VyLCBtaW4pe1xuICAgIHRoaXMuX2hvdXIgPSBob3VyID09PSB1bmRlZmluZWQgPyAwIDogcGFyc2VJbnQoaG91ciwgMTApO1xuICAgIHRoaXMuX21pbiA9IG1pbiA9PT0gdW5kZWZpbmVkID8gMCA6IHBhcnNlSW50KG1pbiwgMTApO1xuICAgIHdoaWxlKHRoaXMuX21pbiA8IDApe1xuICAgICAgICAtLXRoaXMuX2hvdXI7XG4gICAgICAgIHRoaXMuX21pbiA9IDYwICsgdGhpcy5fbWluO1xuICAgIH1cblxuICAgIHdoaWxlKHRoaXMuX21pbiA+IDU5KXtcbiAgICAgICAgKyt0aGlzLl9ob3VyO1xuICAgICAgICB0aGlzLl9taW4gPSB0aGlzLl9taW4gLSA2MDtcbiAgICB9XG5cbiAgICBpZih0aGlzLl9ob3VyIDwgMClcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnRvU3RyaW5nKCkrJyBpcyBub3QgdmFsaWQgdGltZS4nKTtcbiAgICB9XG4gIH1cblxuICBnZXRIb3VyKCl7IHJldHVybiB0aGlzLl9ob3VyOyB9O1xuICBnZXRNaW4oKXsgcmV0dXJuIHRoaXMuX21pbjsgfTtcblxuICBjbG9uZSgpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRoaXMuZ2V0SG91cigpLCB0aGlzLmdldE1pbigpKTtcbiAgfTtcblxuICBhZGRNaW4obWluKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aGlzLmdldEhvdXIoKSwgdGhpcy5nZXRNaW4oKSArIHBhcnNlSW50KG1pbiwgMTApKTtcbiAgfTtcblxuICBlcXVhbHModGltZSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRIb3VyKCkgPT09IHRpbWUuZ2V0SG91cigpICYmIHRoaXMuZ2V0TWluKCkgPT09IHRpbWUuZ2V0TWluKCk7XG4gIH07XG5cbiAgY29tcGFyZSh0aW1lKXtcbiAgICAgIGlmKHRoaXMuZ2V0SG91cigpID4gdGltZS5nZXRIb3VyKCkpXG4gICAgICB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHRoaXMuZ2V0SG91cigpIDwgdGltZS5nZXRIb3VyKCkpXG4gICAgICB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICAgIGlmKHRoaXMuZ2V0TWluKCkgPiB0aW1lLmdldE1pbigpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYodGhpcy5nZXRNaW4oKSA8IHRpbWUuZ2V0TWluKCkpXG4gICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgfTtcblxuICBnZXREaXN0YW5jZSh0YXJnZXRUaW1lKXtcbiAgICAgIHZhciB0YXJnZXRIb3VyID0gdGFyZ2V0VGltZS5nZXRIb3VyKCk7XG4gICAgICB2YXIgaG91ckRpc3RhbmNlID0gdGFyZ2V0SG91ciAtIHRoaXMuX2hvdXI7XG4gICAgICByZXR1cm4gKGhvdXJEaXN0YW5jZSAqIDYwKSArICh0YXJnZXRUaW1lLmdldE1pbigpIC0gdGhpcy5fbWluKTtcbiAgfTtcblxuICB0b1N0cmluZygpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzcGxheVRpbWUoKTtcbiAgfTtcblxuICBnZXREaXNwbGF5SG91cigpe1xuICAgICAgcmV0dXJuIHRoaXMuX2hvdXIgPCAyNCA/IHRoaXMuX2hvdXIgOiB0aGlzLl9ob3VyIC0gMjQ7XG4gIH07XG5cbiAgZ2V0RGlzcGxheU1pbigpe1xuICAgICAgcmV0dXJuIHRoaXMuX21pbiA8IDEwID8gJzAnK3RoaXMuX21pbiA6IHRoaXMuX21pbjtcbiAgfTtcblxuICBnZXREaXNwbGF5VGltZSgpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzcGxheUhvdXIoKSArJzonKyB0aGlzLmdldERpc3BsYXlNaW4oKTtcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvVGltZS5lczZcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IEhvdXJWaWV3IGZyb20gJy4vSG91clZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG91clZpZXdzOiBbXVxuICAgIH1cbiAgICB0aGlzLnByb3BzLnRpbWVTcGFuLmVhY2hUaW1lKChrZXksIHRpbWUpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUuaG91clZpZXdzLnB1c2goPEhvdXJWaWV3IGtleT17dGltZS5nZXRIb3VyKCl9IHRpbWU9e3RpbWV9IG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9IC8+KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoICsgJ3B4J1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsTGluZVZpZXdcIiBzdHlsZT17d3JhcHBlclN0eWxlfT57dGhpcy5zdGF0ZS5ob3VyVmlld3N9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5MaW5lVmlldy5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGluZVZpZXcuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lIGZyb20gJy4uL2NsYXNzZXMvVGltZSdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3VyVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtaW5EaXZzOiBbXVxuICAgIH1cblxuICAgIGNvbnN0IG1pblN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLm1pbkhlaWdodCArICdweCdcbiAgICB9XG4gICAgVGltZS5lYWNoTWluKChrZXksIG1pbikgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5taW5EaXZzLnB1c2goXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e21pbn1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3RsTWluVmlldycsICdfJyArIChtaW4gKyAxNSkpfVxuICAgICAgICAgIHN0eWxlPXttaW5TdHlsZX1cbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX1cbiAgICAgICAgPiZuYnNwOzwvZGl2PlxuICAgICAgKTtcbiAgICB9LCAxNSlcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgY29uc29sZS5sb2coZS5jbGllbnRZLCBlLmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGUub2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsSG91clZpZXdcIj57dGhpcy5zdGF0ZS5taW5EaXZzfTwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSG91clZpZXcuanN4XG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==