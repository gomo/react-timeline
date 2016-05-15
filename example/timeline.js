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
	
	  var actions = new _index.Actions(_reactDom2.default.render(React.createElement(_index.Timeline, {
	    lineData: lineData,
	    timeSpan: timeSpan,
	    lineWidth: 62,
	    minHeight: 17,
	    onClick: function onClick() {
	      actions.addEvent();
	    }
	  }), document.getElementById('timeline')));
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
	exports.Actions = exports.TimeSpan = exports.Time = exports.Timeline = undefined;
	
	var _Timeline = __webpack_require__(3);
	
	var _Timeline2 = _interopRequireDefault(_Timeline);
	
	var _Time = __webpack_require__(6);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	var _TimeSpan = __webpack_require__(5);
	
	var _TimeSpan2 = _interopRequireDefault(_TimeSpan);
	
	var _Actions = __webpack_require__(11);
	
	var _Actions2 = _interopRequireDefault(_Actions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Timeline = _Timeline2.default;
	exports.Time = _Time2.default;
	exports.TimeSpan = _TimeSpan2.default;
	exports.Actions = _Actions2.default;

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
	
	var _RulerView = __webpack_require__(10);
	
	var _RulerView2 = _interopRequireDefault(_RulerView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Timeline = function (_React$Component) {
	  _inherits(Timeline, _React$Component);
	
	  function Timeline(props) {
	    _classCallCheck(this, Timeline);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Timeline).call(this, props));
	
	    _this.state = {
	      lineData: _this.props.lineData
	    };
	    return _this;
	  }
	
	  _createClass(Timeline, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var lines = [];
	      this.state.lineData.forEach(function (data, index) {
	        return function () {
	          if (index % 4 === 0) {
	            lines.push(_react2.default.createElement(_RulerView2.default, {
	              key: 'ruler_' + index,
	              minHeight: _this2.props.minHeight,
	              timeSpan: _this2.props.timeSpan
	            }));
	          }
	
	          lines.push(_react2.default.createElement(_LineView2.default, {
	            label: data.label,
	            key: data.id,
	            lineId: data.id,
	            width: _this2.props.lineWidth,
	            minHeight: _this2.props.minHeight,
	            timeSpan: _this2.props.timeSpan,
	            onClick: _this2.props.onClick
	          }));
	        }();
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'tlFrameView' },
	        lines
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
	  minHeight: _react2.default.PropTypes.number.isRequired,
	  onClick: _react2.default.PropTypes.func
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
	      _this.state.hourViews.push(_react2.default.createElement(_HourView2.default, {
	        key: time.getHour(),
	        time: time,
	        minHeight: _this.props.minHeight,
	        onClick: _this.props.onClick
	      }));
	    });
	    return _this;
	  }
	
	  _createClass(LineView, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.onClick) {
	        var elem = e.currentTarget;
	        var lineId = this.props.lineId;
	        var bounds = elem.getBoundingClientRect();
	        var offsetY = e.clientY - bounds.top;
	        console.log(lineId, offsetY, bounds.height);
	        this.props.onClick();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var wrapperStyle = {
	        width: this.props.width + 'px'
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'tlLineView', style: wrapperStyle, onClick: function onClick(e) {
	            return _this2.onClick(e);
	          } },
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
	  timeSpan: _react2.default.PropTypes.instanceOf(_TimeSpan2.default).isRequired,
	  lineId: _react2.default.PropTypes.string.isRequired,
	  onClick: _react2.default.PropTypes.func
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
	          style: minStyle
	        },
	        ' '
	      ));
	    }, 15);
	    return _this;
	  }
	
	  _createClass(HourView, [{
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
	
	
	HourView.propTypes = {
	  minHeight: _react2.default.PropTypes.number.isRequired,
	  time: _react2.default.PropTypes.instanceOf(_Time2.default).isRequired
	};

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


/***/ },
/* 10 */
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RulerView = function (_React$Component) {
	  _inherits(RulerView, _React$Component);
	
	  function RulerView(props) {
	    _classCallCheck(this, RulerView);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RulerView).call(this, props));
	
	    _this.state = {
	      hours: []
	    };
	    _this.props.timeSpan.eachTime(function (key, time) {
	      var style = {
	        //border1pxを足す
	        height: (_this.props.minHeight + 1) * 4
	      };
	      _this.state.hours.push(_react2.default.createElement(
	        'div',
	        { key: time.getHour(), style: style },
	        time.getDisplayHour()
	      ));
	    });
	    return _this;
	  }
	
	  _createClass(RulerView, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'tlRulerView' },
	        this.state.hours
	      );
	    }
	  }]);
	
	  return RulerView;
	}(_react2.default.Component);
	
	exports.default = RulerView;
	
	
	RulerView.propTypes = {
	  minHeight: _react2.default.PropTypes.number.isRequired,
	  timeSpan: _react2.default.PropTypes.instanceOf(_TimeSpan2.default).isRequired
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Actions = function () {
	  function Actions(timeline) {
	    _classCallCheck(this, Actions);
	
	    this.timeline = timeline;
	  }
	
	  _createClass(Actions, [{
	    key: "addEvent",
	    value: function addEvent() {
	      // console.log(this.timeline.state.lineData);
	    }
	  }]);
	
	  return Actions;
	}();
	
	exports.default = Actions;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTA1MWFmNTQxZjYxZDczNjcxMTciLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5lVmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG91clZpZXcuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SdWxlclZpZXcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0FjdGlvbnMuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUVBLFFBQU8sTUFBUCxHQUFnQixZQUFNOztBQUVwQixPQUFNLFdBQVcsQ0FDZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBRGUsRUFFZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBRmUsRUFHZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBSGUs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QUdELE1BUkQ7QUFMaUI7QUFjbEI7Ozs7OEJBRU87QUFDTixjQUNFO0FBQUE7U0FBQSxFQUFLLFdBQVUsYUFBZjtTQUE4QixLQUFLLEtBQUwsQ0FBVztBQUF6QyxRQURGO0FBR0Q7Ozs7R0F0Qm9DLGdCQUFNLFM7O21CQUF4QixTOzs7QUF5QnJCLFdBQVUsU0FBVixHQUFzQjtBQUNwQixjQUFXLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFEZDtBQUVwQixhQUFVLGdCQUFNLFNBQU4sQ0FBZ0IsVUFBaEIscUJBQXFDO0FBRjNCLEVBQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7S0M1QnFCLE87QUFFbkIsb0JBQVksUUFBWixFQUFxQjtBQUFBOztBQUNuQixVQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDRDs7OztnQ0FFUzs7QUFFVDs7Ozs7O21CQVJrQixPIiwiZmlsZSI6InRpbWVsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhMDUxYWY1NDFmNjFkNzM2NzExN1xuICoqLyIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtUaW1lbGluZSwgVGltZSwgVGltZVNwYW4sIEFjdGlvbnN9IGZyb20gJy4uL2luZGV4LmVzNic7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cbiAgY29uc3QgbGluZURhdGEgPSBbXG4gICAge2xhYmVsOidsYWJlbDEnLCBpZDonX18xJ30sXG4gICAge2xhYmVsOidsYWJlbDInLCBpZDonX18yJ30sXG4gICAge2xhYmVsOidsYWJlbDMnLCBpZDonX18zJ30sXG4gICAge2xhYmVsOidsYWJlbDQnLCBpZDonX180J30sXG4gICAge2xhYmVsOidsYWJlbDUnLCBpZDonX181J30sXG4gICAge2xhYmVsOidsYWJlbDYnLCBpZDonX182J30sXG4gICAge2xhYmVsOidsYWJlbDcnLCBpZDonX183J30sXG4gICAge2xhYmVsOidsYWJlbDgnLCBpZDonX184J30sXG4gICAge2xhYmVsOidsYWJlbDknLCBpZDonX185J30sXG4gICAge2xhYmVsOidsYWJlbDEwJywgaWQ6J19fMTAnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTEnLCBpZDonX18xMSd9LFxuICAgIHtsYWJlbDonbGFiZWwxMicsIGlkOidfXzEyJ30sXG4gICAge2xhYmVsOidsYWJlbDEzJywgaWQ6J19fMTMnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTQnLCBpZDonX18xNCd9LFxuICAgIHtsYWJlbDonbGFiZWwxNScsIGlkOidfXzE1J31cbiAgXTtcblxuICBjb25zdCB0aW1lU3BhbiA9IFRpbWVTcGFuLmNyZWF0ZShbMTAsIDBdLCBbMjUsIDBdKTtcblxuICB2YXIgYWN0aW9ucyA9IG5ldyBBY3Rpb25zKFJlYWN0RE9NLnJlbmRlcihcbiAgICA8VGltZWxpbmVcbiAgICAgIGxpbmVEYXRhPXtsaW5lRGF0YX1cbiAgICAgIHRpbWVTcGFuPXt0aW1lU3Bhbn1cbiAgICAgIGxpbmVXaWR0aD17NjJ9XG4gICAgICBtaW5IZWlnaHQ9ezE3fVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBhY3Rpb25zLmFkZEV2ZW50KCk7XG4gICAgICB9fVxuICAgIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lbGluZScpXG4gICkpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlL2FwcC5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUnO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi9zcmMvY2xhc3Nlcy9UaW1lJztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuL3NyYy9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBBY3Rpb25zIGZyb20gJy4vc3JjL2NsYXNzZXMvQWN0aW9ucyc7XG5cbmV4cG9ydCB7VGltZWxpbmUsIFRpbWUsIFRpbWVTcGFuLCBBY3Rpb25zfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5lczZcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IExpbmVWaWV3IGZyb20gJy4vTGluZVZpZXcnO1xuaW1wb3J0IFJ1bGVyVmlldyBmcm9tICcuL1J1bGVyVmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaW5lRGF0YTogdGhpcy5wcm9wcy5saW5lRGF0YVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IGxpbmVzID0gW107XG4gICAgdGhpcy5zdGF0ZS5saW5lRGF0YS5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICAgIGlmKGluZGV4ICUgNCA9PT0gMCl7XG4gICAgICAgICAgbGluZXMucHVzaCg8UnVsZXJWaWV3XG4gICAgICAgICAgICBrZXk9eydydWxlcl8nICsgaW5kZXh9XG4gICAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgICAgdGltZVNwYW49e3RoaXMucHJvcHMudGltZVNwYW59XG4gICAgICAgICAgLz4pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGluZXMucHVzaCg8TGluZVZpZXdcbiAgICAgICAgICBsYWJlbD17ZGF0YS5sYWJlbH1cbiAgICAgICAgICBrZXk9e2RhdGEuaWR9XG4gICAgICAgICAgbGluZUlkPXtkYXRhLmlkfVxuICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLmxpbmVXaWR0aH1cbiAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cbiAgICAgICAgLz4pO1xuICAgICAgfSkoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bEZyYW1lVmlld1wiPlxuICAgICAgICB7bGluZXN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblRpbWVsaW5lLnByb3BUeXBlcyA9IHtcbiAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuICBsaW5lRGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkpLmlzUmVxdWlyZWQsXG4gIGxpbmVXaWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBUaW1lIGZyb20gJy4vVGltZSdcbi8qKlxuICog5LiA5bqm55Sf5oiQ44GX44Gf44Kq44OW44K444Kn44Kv44OI44Gv5aSJ5pu044GX44G+44Gb44KT44CCXG4gKiDlpInmm7Tjg6Hjgr3jg4Pjg4njga/mlrDjgZfjgYTjgqrjg5bjgrjjgqfjgq/jg4jjgpLluLDjgZfjgb7jgZnjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNwYW5cbntcbiAgc3RhdGljIGNyZWF0ZShzdGFydCwgZW5kKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4obmV3IFRpbWUoc3RhcnRbMF0sIHN0YXJ0WzFdKSwgbmV3IFRpbWUoZW5kWzBdLCBlbmRbMV0pKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHN0YXJ0VGltZSwgZW5kVGltZSl7XG4gICAgd2hpbGUoc3RhcnRUaW1lLmNvbXBhcmUoZW5kVGltZSkgPj0gMCl7XG4gICAgICAgIGVuZFRpbWUgPSBlbmRUaW1lLmFkZE1pbigyNCAqIDYwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgdGhpcy5fZW5kVGltZSA9IGVuZFRpbWU7XG4gIH1cblxuICBjbG9uZSgpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aGlzLmdldFN0YXJ0VGltZSgpLmNsb25lKCksIHRoaXMuZ2V0RW5kVGltZSgpLmNsb25lKCkpO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKXtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUuZ2V0RGlzdGFuY2UodGhpcy5fZW5kVGltZSk7XG4gIH1cblxuICBnZXRTdGFydFRpbWUoKXsgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZTsgfVxuICBnZXRFbmRUaW1lKCl7IHJldHVybiB0aGlzLl9lbmRUaW1lOyB9XG5cbiAgc2hpZnRFbmRUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lLmFkZE1pbigtdGhpcy5nZXREaXN0YW5jZSgpKSwgdGltZSk7XG4gIH1cblxuICBzaGlmdFN0YXJ0VGltZSh0aW1lKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4odGltZSwgdGltZS5hZGRNaW4odGhpcy5nZXREaXN0YW5jZSgpKSk7XG4gIH1cblxuICBlcXVhbHModGltZVNwYW4pe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuZXF1YWxzKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSAmJiB0aGlzLmdldEVuZFRpbWUoKS5lcXVhbHModGltZVNwYW4uZ2V0RW5kVGltZSgpKTtcbiAgfVxuXG4gIGNvbnRhaW5zKHRpbWVTcGFuKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUodGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpIDw9IDAgJiYgdGhpcy5nZXRFbmRUaW1lKCkuY29tcGFyZSh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpID49IDA7XG4gIH1cblxuICBjb250YWluc1RpbWUodGltZSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5jb21wYXJlKHRpbWUpIDw9IDAgJiYgdGhpcy5nZXRFbmRUaW1lKCkuY29tcGFyZSh0aW1lKSA+PSAwO1xuICB9XG5cbiAgb3ZlcmxhcHModGltZVNwYW4pe1xuICAgICAgaWYodGltZVNwYW4uY29udGFpbnModGhpcykpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmNvbnRhaW5zVGltZSh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmNvbnRhaW5zVGltZSh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZWFjaEhvdXIoY2FsbGJhY2spe1xuICAgICAgdmFyIGhvdXIgPSB0aGlzLmdldFN0YXJ0VGltZSgpLmdldEhvdXIoKTtcbiAgICAgIHZhciBlbmQgPSB0aGlzLmdldEVuZFRpbWUoKS5nZXRIb3VyKCk7XG4gICAgICB2YXIga2V5ID0gMDtcblxuICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgaWYoaG91ciA9PT0gZW5kKXtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChob3VyLCBrZXksIGhvdXIsIHRoaXMuZ2V0RW5kVGltZSgpLmdldE1pbigpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChob3VyLCBrZXksIGhvdXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhvdXIgKz0gMTtcbiAgICAgICAgICArK2tleTtcbiAgICAgIH1cbiAgfVxuXG4gIGVhY2hUaW1lKGNhbGxiYWNrLCBtaW51dGVJbnRlcnZhbCl7XG4gICAgICB2YXIga2V5ID0gMDtcbiAgICAgIG1pbnV0ZUludGVydmFsID0gbWludXRlSW50ZXJ2YWwgPyBtaW51dGVJbnRlcnZhbCA6IDYwO1xuXG4gICAgICB2YXIgdGltZSA9IHRoaXMuZ2V0U3RhcnRUaW1lKCk7XG4gICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICBpZih0aW1lLmNvbXBhcmUodGhpcy5nZXRFbmRUaW1lKCkpID4gMCl7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGltZSwga2V5LCB0aW1lKTtcblxuICAgICAgICAgIHRpbWUgPSB0aW1lLmFkZE1pbihtaW51dGVJbnRlcnZhbCk7XG4gICAgICAgICAgKytrZXk7XG4gICAgICB9XG4gIH1cblxuICB0b1N0cmluZygpe1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZSArICd+JyArIHRoaXMuX2VuZFRpbWU7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvVGltZVNwYW4uZXM2XG4gKiovIiwiLyoqXG4gKiDkuIDluqbnlJ/miJDjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga/lpInmm7TjgZfjgb7jgZvjgpPjgIJcbiAqIOWkieabtOODoeOCveODg+ODieOBr+aWsOOBl+OBhOOCquODluOCuOOCp+OCr+ODiOOCkuW4sOOBl+OBvuOBmeOAglxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lXG57XG4gIHN0YXRpYyBlYWNoTWluKGNhbGxiYWNrLCBtaW51dGVJbnRlcnZhbCl7XG4gICAgICB2YXIgY291bnQgPSA2MCAvIG1pbnV0ZUludGVydmFsO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgdmFyIG1pbiA9IGkgKiBtaW51dGVJbnRlcnZhbDtcbiAgICAgICAgICBpZihtaW4gPCA2MCl7XG4gICAgICAgICAgICAgIHZhciBkaXNwbGF5TWluID0gbWluIDwgMTAgPyAnMCcgKyBtaW4gOiBtaW4gKyAnJztcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChtaW4sIGksIG1pbiwgZGlzcGxheU1pbik7XG4gICAgICAgICAgfVxuICAgICAgfTtcbiAgfTtcblxuICAvKipcbiAgICog6YWN5YiX44GL44KJVGltZeOCkueUn+aIkFxuICAgKiBAcGFyYW0gIHthcnJheX0gdGltZSBbaG91ciwgbWluXeOBrumFjeWIl1xuICAgKiBAcmV0dXJuIHtUaW1lfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZSh0aW1lKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aW1lWzBdLCB0aW1lWzFdKTtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihob3VyLCBtaW4pe1xuICAgIHRoaXMuX2hvdXIgPSBob3VyID09PSB1bmRlZmluZWQgPyAwIDogcGFyc2VJbnQoaG91ciwgMTApO1xuICAgIHRoaXMuX21pbiA9IG1pbiA9PT0gdW5kZWZpbmVkID8gMCA6IHBhcnNlSW50KG1pbiwgMTApO1xuICAgIHdoaWxlKHRoaXMuX21pbiA8IDApe1xuICAgICAgICAtLXRoaXMuX2hvdXI7XG4gICAgICAgIHRoaXMuX21pbiA9IDYwICsgdGhpcy5fbWluO1xuICAgIH1cblxuICAgIHdoaWxlKHRoaXMuX21pbiA+IDU5KXtcbiAgICAgICAgKyt0aGlzLl9ob3VyO1xuICAgICAgICB0aGlzLl9taW4gPSB0aGlzLl9taW4gLSA2MDtcbiAgICB9XG5cbiAgICBpZih0aGlzLl9ob3VyIDwgMClcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnRvU3RyaW5nKCkrJyBpcyBub3QgdmFsaWQgdGltZS4nKTtcbiAgICB9XG4gIH1cblxuICBnZXRIb3VyKCl7IHJldHVybiB0aGlzLl9ob3VyOyB9O1xuICBnZXRNaW4oKXsgcmV0dXJuIHRoaXMuX21pbjsgfTtcblxuICBjbG9uZSgpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRoaXMuZ2V0SG91cigpLCB0aGlzLmdldE1pbigpKTtcbiAgfTtcblxuICBhZGRNaW4obWluKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aGlzLmdldEhvdXIoKSwgdGhpcy5nZXRNaW4oKSArIHBhcnNlSW50KG1pbiwgMTApKTtcbiAgfTtcblxuICBlcXVhbHModGltZSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRIb3VyKCkgPT09IHRpbWUuZ2V0SG91cigpICYmIHRoaXMuZ2V0TWluKCkgPT09IHRpbWUuZ2V0TWluKCk7XG4gIH07XG5cbiAgY29tcGFyZSh0aW1lKXtcbiAgICAgIGlmKHRoaXMuZ2V0SG91cigpID4gdGltZS5nZXRIb3VyKCkpXG4gICAgICB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHRoaXMuZ2V0SG91cigpIDwgdGltZS5nZXRIb3VyKCkpXG4gICAgICB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICAgIGlmKHRoaXMuZ2V0TWluKCkgPiB0aW1lLmdldE1pbigpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYodGhpcy5nZXRNaW4oKSA8IHRpbWUuZ2V0TWluKCkpXG4gICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgfTtcblxuICBnZXREaXN0YW5jZSh0YXJnZXRUaW1lKXtcbiAgICAgIHZhciB0YXJnZXRIb3VyID0gdGFyZ2V0VGltZS5nZXRIb3VyKCk7XG4gICAgICB2YXIgaG91ckRpc3RhbmNlID0gdGFyZ2V0SG91ciAtIHRoaXMuX2hvdXI7XG4gICAgICByZXR1cm4gKGhvdXJEaXN0YW5jZSAqIDYwKSArICh0YXJnZXRUaW1lLmdldE1pbigpIC0gdGhpcy5fbWluKTtcbiAgfTtcblxuICB0b1N0cmluZygpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzcGxheVRpbWUoKTtcbiAgfTtcblxuICBnZXREaXNwbGF5SG91cigpe1xuICAgICAgcmV0dXJuIHRoaXMuX2hvdXIgPCAyNCA/IHRoaXMuX2hvdXIgOiB0aGlzLl9ob3VyIC0gMjQ7XG4gIH07XG5cbiAgZ2V0RGlzcGxheU1pbigpe1xuICAgICAgcmV0dXJuIHRoaXMuX21pbiA8IDEwID8gJzAnK3RoaXMuX21pbiA6IHRoaXMuX21pbjtcbiAgfTtcblxuICBnZXREaXNwbGF5VGltZSgpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzcGxheUhvdXIoKSArJzonKyB0aGlzLmdldERpc3BsYXlNaW4oKTtcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvVGltZS5lczZcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IEhvdXJWaWV3IGZyb20gJy4vSG91clZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG91clZpZXdzOiBbXVxuICAgIH1cbiAgICB0aGlzLnByb3BzLnRpbWVTcGFuLmVhY2hUaW1lKChrZXksIHRpbWUpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUuaG91clZpZXdzLnB1c2goXG4gICAgICAgIDxIb3VyVmlld1xuICAgICAgICAgIGtleT17dGltZS5nZXRIb3VyKCl9XG4gICAgICAgICAgdGltZT17dGltZX1cbiAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGlmKHRoaXMucHJvcHMub25DbGljayl7XG4gICAgICBjb25zdCBlbGVtID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgbGluZUlkID0gdGhpcy5wcm9wcy5saW5lSWRcbiAgICAgIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBvZmZzZXRZID0gZS5jbGllbnRZIC0gYm91bmRzLnRvcDtcbiAgICAgIGNvbnNvbGUubG9nKGxpbmVJZCwgb2Zmc2V0WSwgYm91bmRzLmhlaWdodCk7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCArICdweCdcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bExpbmVWaWV3XCIgc3R5bGU9e3dyYXBwZXJTdHlsZX0gb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9Pnt0aGlzLnN0YXRlLmhvdXJWaWV3c308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxpbmVWaWV3LnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgd2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbiAgbGluZUlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xpbmVWaWV3LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZSBmcm9tICcuLi9jbGFzc2VzL1RpbWUnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91clZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWluRGl2czogW11cbiAgICB9XG5cbiAgICBjb25zdCBtaW5TdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5taW5IZWlnaHQgKyAncHgnXG4gICAgfVxuICAgIFRpbWUuZWFjaE1pbigoa2V5LCBtaW4pID0+IHtcbiAgICAgIHRoaXMuc3RhdGUubWluRGl2cy5wdXNoKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXttaW59XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0bE1pblZpZXcnLCAnXycgKyAobWluICsgMTUpKX1cbiAgICAgICAgICBzdHlsZT17bWluU3R5bGV9XG4gICAgICAgID4mbmJzcDs8L2Rpdj5cbiAgICAgICk7XG4gICAgfSwgMTUpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bEhvdXJWaWV3XCI+e3RoaXMuc3RhdGUubWluRGl2c308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkhvdXJWaWV3LnByb3BUeXBlcyA9IHtcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWUpLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSG91clZpZXcuanN4XG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZXJWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob3VyczogW11cbiAgICB9XG4gICAgdGhpcy5wcm9wcy50aW1lU3Bhbi5lYWNoVGltZSgoa2V5LCB0aW1lKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgLy9ib3JkZXIxcHjjgpLotrPjgZlcbiAgICAgICAgaGVpZ2h0OiAodGhpcy5wcm9wcy5taW5IZWlnaHQgKyAxKSAqIDRcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUuaG91cnMucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e3RpbWUuZ2V0SG91cigpfSBzdHlsZT17c3R5bGV9Pnt0aW1lLmdldERpc3BsYXlIb3VyKCl9PC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSdWxlclZpZXdcIj57dGhpcy5zdGF0ZS5ob3Vyc308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJ1bGVyVmlldy5wcm9wVHlwZXMgPSB7XG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUnVsZXJWaWV3LmpzeFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbnNcbntcbiAgY29uc3RydWN0b3IodGltZWxpbmUpe1xuICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcbiAgfVxuXG4gIGFkZEV2ZW50KCl7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy50aW1lbGluZS5zdGF0ZS5saW5lRGF0YSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvQWN0aW9ucy5lczZcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9