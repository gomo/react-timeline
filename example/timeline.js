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
	        console.log(lineId, offsetY / bounds.height);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzBkMzc5MTU3MmI5YzY3OWQ5NTEiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5lVmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG91clZpZXcuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SdWxlclZpZXcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0FjdGlvbnMuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUVBLFFBQU8sTUFBUCxHQUFnQixZQUFNOztBQUVwQixPQUFNLFdBQVcsQ0FDZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBRGUsRUFFZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBRmUsRUFHZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBSGUs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RDtBQUxpQjtBQWNsQjs7Ozs4QkFFTztBQUNOLGNBQ0U7QUFBQTtTQUFBLEVBQUssV0FBVSxhQUFmO1NBQThCLEtBQUssS0FBTCxDQUFXO0FBQXpDLFFBREY7QUFHRDs7OztHQXRCb0MsZ0JBQU0sUzs7bUJBQXhCLFM7OztBQXlCckIsV0FBVSxTQUFWLEdBQXNCO0FBQ3BCLGNBQVcsZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQURkO0FBRXBCLGFBQVUsZ0JBQU0sU0FBTixDQUFnQixVQUFoQixxQkFBcUM7QUFGM0IsRUFBdEIsQzs7Ozs7Ozs7Ozs7Ozs7OztLQzVCcUIsTztBQUVuQixvQkFBWSxRQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFVBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNEOzs7O2dDQUVTOztBQUVUOzs7Ozs7bUJBUmtCLE8iLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDcwZDM3OTE1NzJiOWM2NzlkOTUxXG4gKiovIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3BhbiwgQWN0aW9uc30gZnJvbSAnLi4vaW5kZXguZXM2Jztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcblxuICBjb25zdCBsaW5lRGF0YSA9IFtcbiAgICB7bGFiZWw6J2xhYmVsMScsIGlkOidfXzEnfSxcbiAgICB7bGFiZWw6J2xhYmVsMicsIGlkOidfXzInfSxcbiAgICB7bGFiZWw6J2xhYmVsMycsIGlkOidfXzMnfSxcbiAgICB7bGFiZWw6J2xhYmVsNCcsIGlkOidfXzQnfSxcbiAgICB7bGFiZWw6J2xhYmVsNScsIGlkOidfXzUnfSxcbiAgICB7bGFiZWw6J2xhYmVsNicsIGlkOidfXzYnfSxcbiAgICB7bGFiZWw6J2xhYmVsNycsIGlkOidfXzcnfSxcbiAgICB7bGFiZWw6J2xhYmVsOCcsIGlkOidfXzgnfSxcbiAgICB7bGFiZWw6J2xhYmVsOScsIGlkOidfXzknfSxcbiAgICB7bGFiZWw6J2xhYmVsMTAnLCBpZDonX18xMCd9LFxuICAgIHtsYWJlbDonbGFiZWwxMScsIGlkOidfXzExJ30sXG4gICAge2xhYmVsOidsYWJlbDEyJywgaWQ6J19fMTInfSxcbiAgICB7bGFiZWw6J2xhYmVsMTMnLCBpZDonX18xMyd9LFxuICAgIHtsYWJlbDonbGFiZWwxNCcsIGlkOidfXzE0J30sXG4gICAge2xhYmVsOidsYWJlbDE1JywgaWQ6J19fMTUnfVxuICBdO1xuXG4gIGNvbnN0IHRpbWVTcGFuID0gVGltZVNwYW4uY3JlYXRlKFsxMCwgMF0sIFsyNSwgMF0pO1xuXG4gIHZhciBhY3Rpb25zID0gbmV3IEFjdGlvbnMoUmVhY3RET00ucmVuZGVyKFxuICAgIDxUaW1lbGluZVxuICAgICAgbGluZURhdGE9e2xpbmVEYXRhfVxuICAgICAgdGltZVNwYW49e3RpbWVTcGFufVxuICAgICAgbGluZVdpZHRoPXs2Mn1cbiAgICAgIG1pbkhlaWdodD17MTd9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuYWRkRXZlbnQoKTtcbiAgICAgIH19XG4gICAgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVsaW5lJylcbiAgKSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGUvYXBwLmpzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZSc7XG5pbXBvcnQgVGltZSBmcm9tICcuL3NyYy9jbGFzc2VzL1RpbWUnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4vc3JjL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IEFjdGlvbnMgZnJvbSAnLi9zcmMvY2xhc3Nlcy9BY3Rpb25zJztcblxuZXhwb3J0IHtUaW1lbGluZSwgVGltZSwgVGltZVNwYW4sIEFjdGlvbnN9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2luZGV4LmVzNlxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQgTGluZVZpZXcgZnJvbSAnLi9MaW5lVmlldyc7XG5pbXBvcnQgUnVsZXJWaWV3IGZyb20gJy4vUnVsZXJWaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpbmVEYXRhOiB0aGlzLnByb3BzLmxpbmVEYXRhXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlLmxpbmVEYXRhLmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgICAgaWYoaW5kZXggJSA0ID09PSAwKXtcbiAgICAgICAgICBsaW5lcy5wdXNoKDxSdWxlclZpZXdcbiAgICAgICAgICAgIGtleT17J3J1bGVyXycgKyBpbmRleH1cbiAgICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5wcm9wcy50aW1lU3Bhbn1cbiAgICAgICAgICAvPik7XG4gICAgICAgIH1cblxuICAgICAgICBsaW5lcy5wdXNoKDxMaW5lVmlld1xuICAgICAgICAgIGxhYmVsPXtkYXRhLmxhYmVsfVxuICAgICAgICAgIGtleT17ZGF0YS5pZH1cbiAgICAgICAgICBsaW5lSWQ9e2RhdGEuaWR9XG4gICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMubGluZVdpZHRofVxuICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgICAgdGltZVNwYW49e3RoaXMucHJvcHMudGltZVNwYW59XG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICAvPik7XG4gICAgICB9KSgpXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsRnJhbWVWaWV3XCI+XG4gICAgICAgIHtsaW5lc31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuVGltZWxpbmUucHJvcFR5cGVzID0ge1xuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4gIGxpbmVEYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KSkuaXNSZXF1aXJlZCxcbiAgbGluZVdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFRpbWUgZnJvbSAnLi9UaW1lJ1xuLyoqXG4gKiDkuIDluqbnlJ/miJDjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga/lpInmm7TjgZfjgb7jgZvjgpPjgIJcbiAqIOWkieabtOODoeOCveODg+ODieOBr+aWsOOBl+OBhOOCquODluOCuOOCp+OCr+ODiOOCkuW4sOOBl+OBvuOBmeOAglxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU3Bhblxue1xuICBzdGF0aWMgY3JlYXRlKHN0YXJ0LCBlbmQpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3BhbihuZXcgVGltZShzdGFydFswXSwgc3RhcnRbMV0pLCBuZXcgVGltZShlbmRbMF0sIGVuZFsxXSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3Ioc3RhcnRUaW1lLCBlbmRUaW1lKXtcbiAgICB3aGlsZShzdGFydFRpbWUuY29tcGFyZShlbmRUaW1lKSA+PSAwKXtcbiAgICAgICAgZW5kVGltZSA9IGVuZFRpbWUuYWRkTWluKDI0ICogNjApO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICB0aGlzLl9lbmRUaW1lID0gZW5kVGltZTtcbiAgfVxuXG4gIGNsb25lKCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRoaXMuZ2V0U3RhcnRUaW1lKCkuY2xvbmUoKSwgdGhpcy5nZXRFbmRUaW1lKCkuY2xvbmUoKSk7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpe1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZS5nZXREaXN0YW5jZSh0aGlzLl9lbmRUaW1lKTtcbiAgfVxuXG4gIGdldFN0YXJ0VGltZSgpeyByZXR1cm4gdGhpcy5fc3RhcnRUaW1lOyB9XG4gIGdldEVuZFRpbWUoKXsgcmV0dXJuIHRoaXMuX2VuZFRpbWU7IH1cblxuICBzaGlmdEVuZFRpbWUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRpbWUuYWRkTWluKC10aGlzLmdldERpc3RhbmNlKCkpLCB0aW1lKTtcbiAgfVxuXG4gIHNoaWZ0U3RhcnRUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lLCB0aW1lLmFkZE1pbih0aGlzLmdldERpc3RhbmNlKCkpKTtcbiAgfVxuXG4gIGVxdWFscyh0aW1lU3Bhbil7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5lcXVhbHModGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpICYmIHRoaXMuZ2V0RW5kVGltZSgpLmVxdWFscyh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpO1xuICB9XG5cbiAgY29udGFpbnModGltZVNwYW4pe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuY29tcGFyZSh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgPD0gMCAmJiB0aGlzLmdldEVuZFRpbWUoKS5jb21wYXJlKHRpbWVTcGFuLmdldEVuZFRpbWUoKSkgPj0gMDtcbiAgfVxuXG4gIGNvbnRhaW5zVGltZSh0aW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUodGltZSkgPD0gMCAmJiB0aGlzLmdldEVuZFRpbWUoKS5jb21wYXJlKHRpbWUpID49IDA7XG4gIH1cblxuICBvdmVybGFwcyh0aW1lU3Bhbil7XG4gICAgICBpZih0aW1lU3Bhbi5jb250YWlucyh0aGlzKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuY29udGFpbnNUaW1lKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuY29udGFpbnNUaW1lKHRpbWVTcGFuLmdldEVuZFRpbWUoKSkpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBlYWNoSG91cihjYWxsYmFjayl7XG4gICAgICB2YXIgaG91ciA9IHRoaXMuZ2V0U3RhcnRUaW1lKCkuZ2V0SG91cigpO1xuICAgICAgdmFyIGVuZCA9IHRoaXMuZ2V0RW5kVGltZSgpLmdldEhvdXIoKTtcbiAgICAgIHZhciBrZXkgPSAwO1xuXG4gICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICBpZihob3VyID09PSBlbmQpe1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGhvdXIsIGtleSwgaG91ciwgdGhpcy5nZXRFbmRUaW1lKCkuZ2V0TWluKCkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGhvdXIsIGtleSwgaG91cik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaG91ciArPSAxO1xuICAgICAgICAgICsra2V5O1xuICAgICAgfVxuICB9XG5cbiAgZWFjaFRpbWUoY2FsbGJhY2ssIG1pbnV0ZUludGVydmFsKXtcbiAgICAgIHZhciBrZXkgPSAwO1xuICAgICAgbWludXRlSW50ZXJ2YWwgPSBtaW51dGVJbnRlcnZhbCA/IG1pbnV0ZUludGVydmFsIDogNjA7XG5cbiAgICAgIHZhciB0aW1lID0gdGhpcy5nZXRTdGFydFRpbWUoKTtcbiAgICAgIHdoaWxlKHRydWUpe1xuICAgICAgICAgIGlmKHRpbWUuY29tcGFyZSh0aGlzLmdldEVuZFRpbWUoKSkgPiAwKXtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FsbGJhY2suY2FsbCh0aW1lLCBrZXksIHRpbWUpO1xuXG4gICAgICAgICAgdGltZSA9IHRpbWUuYWRkTWluKG1pbnV0ZUludGVydmFsKTtcbiAgICAgICAgICArK2tleTtcbiAgICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCl7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lICsgJ34nICsgdGhpcy5fZW5kVGltZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3Nlcy9UaW1lU3Bhbi5lczZcbiAqKi8iLCIvKipcbiAqIOS4gOW6pueUn+aIkOOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOBr+WkieabtOOBl+OBvuOBm+OCk+OAglxuICog5aSJ5pu044Oh44K944OD44OJ44Gv5paw44GX44GE44Kq44OW44K444Kn44Kv44OI44KS5biw44GX44G+44GZ44CCXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVcbntcbiAgc3RhdGljIGVhY2hNaW4oY2FsbGJhY2ssIG1pbnV0ZUludGVydmFsKXtcbiAgICAgIHZhciBjb3VudCA9IDYwIC8gbWludXRlSW50ZXJ2YWw7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICB2YXIgbWluID0gaSAqIG1pbnV0ZUludGVydmFsO1xuICAgICAgICAgIGlmKG1pbiA8IDYwKXtcbiAgICAgICAgICAgICAgdmFyIGRpc3BsYXlNaW4gPSBtaW4gPCAxMCA/ICcwJyArIG1pbiA6IG1pbiArICcnO1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKG1pbiwgaSwgbWluLCBkaXNwbGF5TWluKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiDphY3liJfjgYvjgolUaW1l44KS55Sf5oiQXG4gICAqIEBwYXJhbSAge2FycmF5fSB0aW1lIFtob3VyLCBtaW5d44Gu6YWN5YiXXG4gICAqIEByZXR1cm4ge1RpbWV9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRpbWVbMF0sIHRpbWVbMV0pO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGhvdXIsIG1pbil7XG4gICAgdGhpcy5faG91ciA9IGhvdXIgPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChob3VyLCAxMCk7XG4gICAgdGhpcy5fbWluID0gbWluID09PSB1bmRlZmluZWQgPyAwIDogcGFyc2VJbnQobWluLCAxMCk7XG4gICAgd2hpbGUodGhpcy5fbWluIDwgMCl7XG4gICAgICAgIC0tdGhpcy5faG91cjtcbiAgICAgICAgdGhpcy5fbWluID0gNjAgKyB0aGlzLl9taW47XG4gICAgfVxuXG4gICAgd2hpbGUodGhpcy5fbWluID4gNTkpe1xuICAgICAgICArK3RoaXMuX2hvdXI7XG4gICAgICAgIHRoaXMuX21pbiA9IHRoaXMuX21pbiAtIDYwO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX2hvdXIgPCAwKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudG9TdHJpbmcoKSsnIGlzIG5vdCB2YWxpZCB0aW1lLicpO1xuICAgIH1cbiAgfVxuXG4gIGdldEhvdXIoKXsgcmV0dXJuIHRoaXMuX2hvdXI7IH07XG4gIGdldE1pbigpeyByZXR1cm4gdGhpcy5fbWluOyB9O1xuXG4gIGNsb25lKCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGhpcy5nZXRIb3VyKCksIHRoaXMuZ2V0TWluKCkpO1xuICB9O1xuXG4gIGFkZE1pbihtaW4pe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRoaXMuZ2V0SG91cigpLCB0aGlzLmdldE1pbigpICsgcGFyc2VJbnQobWluLCAxMCkpO1xuICB9O1xuXG4gIGVxdWFscyh0aW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmdldEhvdXIoKSA9PT0gdGltZS5nZXRIb3VyKCkgJiYgdGhpcy5nZXRNaW4oKSA9PT0gdGltZS5nZXRNaW4oKTtcbiAgfTtcblxuICBjb21wYXJlKHRpbWUpe1xuICAgICAgaWYodGhpcy5nZXRIb3VyKCkgPiB0aW1lLmdldEhvdXIoKSlcbiAgICAgIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodGhpcy5nZXRIb3VyKCkgPCB0aW1lLmdldEhvdXIoKSlcbiAgICAgIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgICAgaWYodGhpcy5nZXRNaW4oKSA+IHRpbWUuZ2V0TWluKCkpXG4gICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZih0aGlzLmdldE1pbigpIDwgdGltZS5nZXRNaW4oKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGdldERpc3RhbmNlKHRhcmdldFRpbWUpe1xuICAgICAgdmFyIHRhcmdldEhvdXIgPSB0YXJnZXRUaW1lLmdldEhvdXIoKTtcbiAgICAgIHZhciBob3VyRGlzdGFuY2UgPSB0YXJnZXRIb3VyIC0gdGhpcy5faG91cjtcbiAgICAgIHJldHVybiAoaG91ckRpc3RhbmNlICogNjApICsgKHRhcmdldFRpbWUuZ2V0TWluKCkgLSB0aGlzLl9taW4pO1xuICB9O1xuXG4gIHRvU3RyaW5nKCl7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXNwbGF5VGltZSgpO1xuICB9O1xuXG4gIGdldERpc3BsYXlIb3VyKCl7XG4gICAgICByZXR1cm4gdGhpcy5faG91ciA8IDI0ID8gdGhpcy5faG91ciA6IHRoaXMuX2hvdXIgLSAyNDtcbiAgfTtcblxuICBnZXREaXNwbGF5TWluKCl7XG4gICAgICByZXR1cm4gdGhpcy5fbWluIDwgMTAgPyAnMCcrdGhpcy5fbWluIDogdGhpcy5fbWluO1xuICB9O1xuXG4gIGdldERpc3BsYXlUaW1lKCl7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXNwbGF5SG91cigpICsnOicrIHRoaXMuZ2V0RGlzcGxheU1pbigpO1xuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNlxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQgSG91clZpZXcgZnJvbSAnLi9Ib3VyVmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob3VyVmlld3M6IFtdXG4gICAgfVxuICAgIHRoaXMucHJvcHMudGltZVNwYW4uZWFjaFRpbWUoKGtleSwgdGltZSkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5ob3VyVmlld3MucHVzaChcbiAgICAgICAgPEhvdXJWaWV3XG4gICAgICAgICAga2V5PXt0aW1lLmdldEhvdXIoKX1cbiAgICAgICAgICB0aW1lPXt0aW1lfVxuICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgaWYodGhpcy5wcm9wcy5vbkNsaWNrKXtcbiAgICAgIGNvbnN0IGVsZW0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBsaW5lSWQgPSB0aGlzLnByb3BzLmxpbmVJZFxuICAgICAgY29uc3QgYm91bmRzID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IG9mZnNldFkgPSBlLmNsaWVudFkgLSBib3VuZHMudG9wO1xuICAgICAgY29uc29sZS5sb2cobGluZUlkLCBvZmZzZXRZIC8gYm91bmRzLmhlaWdodCk7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCArICdweCdcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bExpbmVWaWV3XCIgc3R5bGU9e3dyYXBwZXJTdHlsZX0gb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9Pnt0aGlzLnN0YXRlLmhvdXJWaWV3c308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxpbmVWaWV3LnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgd2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbiAgbGluZUlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xpbmVWaWV3LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZSBmcm9tICcuLi9jbGFzc2VzL1RpbWUnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91clZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWluRGl2czogW11cbiAgICB9XG5cbiAgICBjb25zdCBtaW5TdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5taW5IZWlnaHQgKyAncHgnXG4gICAgfVxuICAgIFRpbWUuZWFjaE1pbigoa2V5LCBtaW4pID0+IHtcbiAgICAgIHRoaXMuc3RhdGUubWluRGl2cy5wdXNoKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXttaW59XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0bE1pblZpZXcnLCAnXycgKyAobWluICsgMTUpKX1cbiAgICAgICAgICBzdHlsZT17bWluU3R5bGV9XG4gICAgICAgID4mbmJzcDs8L2Rpdj5cbiAgICAgICk7XG4gICAgfSwgMTUpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bEhvdXJWaWV3XCI+e3RoaXMuc3RhdGUubWluRGl2c308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkhvdXJWaWV3LnByb3BUeXBlcyA9IHtcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWUpLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSG91clZpZXcuanN4XG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZXJWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob3VyczogW11cbiAgICB9XG4gICAgdGhpcy5wcm9wcy50aW1lU3Bhbi5lYWNoVGltZSgoa2V5LCB0aW1lKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgLy9ib3JkZXIxcHjjgpLotrPjgZlcbiAgICAgICAgaGVpZ2h0OiAodGhpcy5wcm9wcy5taW5IZWlnaHQgKyAxKSAqIDRcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUuaG91cnMucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e3RpbWUuZ2V0SG91cigpfSBzdHlsZT17c3R5bGV9Pnt0aW1lLmdldERpc3BsYXlIb3VyKCl9PC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSdWxlclZpZXdcIj57dGhpcy5zdGF0ZS5ob3Vyc308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJ1bGVyVmlldy5wcm9wVHlwZXMgPSB7XG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUnVsZXJWaWV3LmpzeFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbnNcbntcbiAgY29uc3RydWN0b3IodGltZWxpbmUpe1xuICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcbiAgfVxuXG4gIGFkZEV2ZW50KCl7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy50aW1lbGluZS5zdGF0ZS5saW5lRGF0YSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvQWN0aW9ucy5lczZcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9