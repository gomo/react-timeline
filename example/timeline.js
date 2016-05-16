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
	
	  var timeline = _reactDom2.default.render(React.createElement(_index.Timeline, {
	    lineData: lineData,
	    timeSpan: timeSpan,
	    lineWidth: 62,
	    minHeight: 17,
	    onClick: function onClick() {
	      // actions.addEvent();
	    }
	  }), document.getElementById('timeline'));
	
	  timeline.lines.addEvents([{ lineId: '__2', timeSpan: _index.TimeSpan.create([11, 0], [12, 0]), color: '#FFB6B6' }, { lineId: '__2', timeSpan: _index.TimeSpan.create([13, 50], [14, 30]), color: '#B8F1AC' }, { lineId: '__2', timeSpan: _index.TimeSpan.create([12, 0], [13, 30]), color: '#FFDCB6' }]);
	
	  timeline.lines.addEvents([{ lineId: '__3', timeSpan: _index.TimeSpan.create([13, 0], [14, 0]), color: '#FFB6B6' }, { lineId: '__3', timeSpan: _index.TimeSpan.create([14, 15], [15, 30]), color: '#B8F1AC' }]);
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
	
	var _RulerView = __webpack_require__(41);
	
	var _RulerView2 = _interopRequireDefault(_RulerView);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Lines = __webpack_require__(42);
	
	var _Lines2 = _interopRequireDefault(_Lines);
	
	var _Util = __webpack_require__(43);
	
	var _Util2 = _interopRequireDefault(_Util);
	
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
	      lines: [],
	      labels: [],
	      frameHeight: _this.props.frameHeight
	    };
	
	    _this.lines = new _Lines2.default();
	    _this.util = new _Util2.default({
	      lineTimeSpan: _this.props.timeSpan,
	      minHeight: _this.props.minHeight
	    });
	
	    var rulerInterval = 4;
	
	    //TODO 後から追加できる様にメソッドに抽出
	    props.lineData.forEach(function (data, index) {
	      var labelClass = { tlLabel: true, tlHasRuler: false, tlPrevRuler: false };
	      var currentKey = index % rulerInterval;
	      if (currentKey === 0) {
	        _this.state.lines.push(_react2.default.createElement(_RulerView2.default, {
	          key: 'ruler_' + index,
	          minHeight: _this.props.minHeight,
	          timeSpan: _this.props.timeSpan
	        }));
	
	        labelClass.tlHasRuler = true;
	      } else if (currentKey === rulerInterval - 1) {
	        labelClass.tlPrevRuler = true;
	      }
	
	      _this.state.labels.push(_react2.default.createElement(
	        'div',
	        { style: { width: _this.props.lineWidth }, className: (0, _classnames2.default)(labelClass), key: index },
	        data.label
	      ));
	
	      _this.state.lines.push(_react2.default.createElement(_LineView2.default, {
	        label: data.label,
	        key: data.id,
	        lineId: data.id,
	        width: _this.props.lineWidth,
	        minHeight: _this.props.minHeight,
	        timeSpan: _this.props.timeSpan,
	        onClick: _this.props.onClick,
	        even: index % 2 !== 0,
	        timeline: _this
	      }));
	    });
	    return _this;
	  }
	
	  _createClass(Timeline, [{
	    key: 'fitToWindow',
	    value: function fitToWindow() {
	      var wrapperBounds = this.refs.linesWrapper.getBoundingClientRect();
	      var windowSize = _Util2.default.windowSize;
	      this.setState({ frameHeight: windowSize.height - wrapperBounds.top });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      this.fitToWindow();
	      window.addEventListener('resize', function (event) {
	        _this2.fitToWindow();
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'tlFrameView' },
	        _react2.default.createElement(
	          'div',
	          { className: 'tlLabelView' },
	          this.state.labels
	        ),
	        _react2.default.createElement(
	          'div',
	          { ref: 'linesWrapper', className: 'tlLinesWrapper', style: { height: this.state.frameHeight } },
	          this.state.lines
	        )
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
	        key: 'addMin',
	        value: function addMin(minute) {
	            return new TimeSpan(this.getStartTime(), this.getEndTime().addMin(minute));
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
	
	var _EventView = __webpack_require__(10);
	
	var _EventView2 = _interopRequireDefault(_EventView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LineView = function (_React$Component) {
	  _inherits(LineView, _React$Component);
	
	  function LineView(props) {
	    _classCallCheck(this, LineView);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LineView).call(this, props));
	
	    _this.timeline = _this.props.timeline;
	    _this.timeline.lines.setLine(_this.props.lineId, _this);
	
	    _this.state = {
	      hourViews: [],
	      events: [],
	      lineHeight: _this.timeline.util.lineHeight
	    };
	    _this.props.timeSpan.eachTime(function (key, time) {
	      _this.state.hourViews.push(_react2.default.createElement(_HourView2.default, {
	        key: time.getHour(),
	        time: time,
	        minHeight: _this.props.minHeight
	      }));
	    });
	    return _this;
	  }
	
	  _createClass(LineView, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.onClick) {
	        var clickY = e.clientY - e.currentTarget.offsetTop + e.currentTarget.parentNode.scrollTop;
	        var time = this.timeline.util.topToTime(clickY);
	        this.props.onClick();
	      }
	    }
	  }, {
	    key: 'addEvents',
	    value: function addEvents(events) {
	      var current = this.state.events;
	      events.forEach(function (event) {
	        return current.push(event);
	      });
	      this.setState({ events: current });
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
	        _react2.default.createElement(
	          'div',
	          { className: 'tlHours', style: { height: this.state.lineHeight } },
	          this.state.hourViews,
	          this.state.events.map(function (event) {
	            return _react2.default.createElement(_EventView2.default, {
	              key: event.timeSpan.toString(),
	              color: event.color,
	              timeSpan: event.timeSpan,
	              display: event.display,
	              line: _this2
	            });
	          })
	        )
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
	  onClick: _react2.default.PropTypes.func,
	  even: _react2.default.PropTypes.bool.isRequired,
	  timeline: _react2.default.PropTypes.any.isRequired
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
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _TimeSpan = __webpack_require__(5);
	
	var _TimeSpan2 = _interopRequireDefault(_TimeSpan);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EventView = function (_React$Component) {
	  _inherits(EventView, _React$Component);
	
	  function EventView(props) {
	    _classCallCheck(this, EventView);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EventView).call(this, props));
	
	    _this.line = _this.props.line;
	
	    _this.state = {
	      height: _this.line.timeline.util.timeSpanToHeight(_this.props.timeSpan),
	      top: 0,
	      color: _this.props.color
	    };
	    return _this;
	  }
	
	  _createClass(EventView, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var targetTop = this.line.timeline.util.timeToTop(this.props.timeSpan.getStartTime());
	      this.initialBounds = this.refs.eventElem.getBoundingClientRect();
	      this.setState({ top: -this.initialBounds.top + targetTop + this.refs.eventElem.parentElement.offsetTop });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = {
	        height: this.state.height,
	        position: 'relative',
	        top: this.state.top + 'px',
	        backgroundColor: this.state.color
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { ref: 'eventElem', className: 'tlEventView', style: style },
	        ' '
	      );
	    }
	  }]);
	
	  return EventView;
	}(_react2.default.Component);
	
	exports.default = EventView;
	
	
	EventView.propTypes = {
	  timeSpan: _react2.default.PropTypes.instanceOf(_TimeSpan2.default).isRequired,
	  color: _react2.default.PropTypes.string.isRequired,
	  line: _react2.default.PropTypes.any.isRequired
	};

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
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
/* 42 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Lines = function () {
	  function Lines() {
	    _classCallCheck(this, Lines);
	
	    this.lines = {};
	  }
	
	  _createClass(Lines, [{
	    key: "setLine",
	    value: function setLine(lineId, line) {
	      this.lines[lineId] = line;
	    }
	  }, {
	    key: "addEvents",
	    value: function addEvents(events) {
	      var lineEvents = {};
	      events.forEach(function (event) {
	        if (lineEvents[event.lineId] == undefined) {
	          lineEvents[event.lineId] = [];
	        }
	
	        lineEvents[event.lineId].push(event);
	      });
	
	      for (var lineId in lineEvents) {
	        this.lines[lineId].addEvents(lineEvents[lineId]);
	      }
	    }
	  }]);
	
	  return Lines;
	}();
	
	exports.default = Lines;

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Util = function () {
	  _createClass(Util, null, [{
	    key: "windowSize",
	    get: function get() {
	      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	
	      return { width: width, height: height };
	    }
	  }]);
	
	  function Util(config) {
	    _classCallCheck(this, Util);
	
	    //MinViewは一時間下に余分が生成されるので60分プラス
	    this.lineTimeSpan = config.lineTimeSpan.addMin(60);
	
	    //minViewがいくつあるかカウント。minViewは15分おき
	    var minViewCount = this.lineTimeSpan.getDistance() / 15;
	
	    //高さを計算。border分1px足す
	    this.lineHeight = minViewCount * (config.minHeight + 1);
	
	    //1分あたりの高さを算出
	    this.perMinHeight = this.lineHeight / this.lineTimeSpan.getDistance();
	  }
	
	  _createClass(Util, [{
	    key: "timeSpanToHeight",
	    value: function timeSpanToHeight(timeSpan) {
	      return timeSpan.getDistance() * this.perMinHeight - 1;
	    }
	  }, {
	    key: "timeToTop",
	    value: function timeToTop(time) {
	      return this.lineTimeSpan.getStartTime().getDistance(time) * this.perMinHeight;
	    }
	  }, {
	    key: "topToTime",
	    value: function topToTime(top) {
	      return this.lineTimeSpan.getStartTime().addMin(top / this.perMinHeight);
	    }
	  }]);
	
	  return Util;
	}();
	
	exports.default = Util;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmFjNDg3ZDVkYTI1NGRjYmVjNTAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5lVmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG91clZpZXcuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudFZpZXcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1J1bGVyVmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvTGluZXMuZXM2Iiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1V0aWwuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUdBLFFBQU8sTUFBUCxHQUFnQixZQUFNOztBQUVwQixPQUFNLFdBQVcsQ0FDZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBRGUsRUFFZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBRmUsRUFHZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBSGUsRUFJZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBSmUsRUFLZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBTGUsRUFNZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBTmUsRUFPZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBUGUsRUFRZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBUmUsRUFTZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBVGUsRUFVZixFQUFDLE9BQU0sU0FBUCxFQUFrQixJQUFHLE1BQXJCLEVBVmUsRUFXZixFQUFDLE9BQU0sU0FBUCxFQUFrQixJQUFHLE1BQXJCLEVBWGUsRUFZZixFQUFDLE9BQU0sU0FBUCxFQUFrQixJQUFHLE1BQXJCLEVBWmUsRUFhZixFQUFDLE9BQU0sU0FBUCxFQUFrQixJQUFHLE1BQXJCLEVBYmUsRUFjZixFQUFDLE9BQU0sU0FBUCxFQUFrQixJQUFHLE1BQXJCLEVBZGUsRUFlZixFQUFDLE9BQU0sU0FBUCxFQUFrQixJQUFHLE1BQXJCLEVBZmUsQ0FBakI7O0FBa0JBLE9BQU0sV0FBVyxnQkFBUyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssQ0FBTCxDQUF6QixDQUFqQjs7QUFFQSxPQUFJLFdBQVcsbUJBQVMsTUFBVCxDQUNiO0FBQ0UsZUFBVSxRQURaO0FBRUUsZUFBVSxRQUZaO0FBR0UsZ0JBQVcsRUFIYjtBQUlFLGdCQUFXLEVBSmI7QUFLRSxjQUFTLG1CQUFNOztBQUVkO0FBUEgsS0FEYSxFQVViLFNBQVMsY0FBVCxDQUF3QixVQUF4QixDQVZhLENBQWY7O0FBYUEsWUFBUyxLQUFULENBQWUsU0FBZixDQUF5QixDQUN2QixFQUFDLFFBQVEsS0FBVCxFQUFnQixVQUFVLGdCQUFTLE1BQVQsQ0FBZ0IsQ0FBQyxFQUFELEVBQUssQ0FBTCxDQUFoQixFQUF5QixDQUFDLEVBQUQsRUFBSyxDQUFMLENBQXpCLENBQTFCLEVBQTZELE9BQU8sU0FBcEUsRUFEdUIsRUFFdkIsRUFBQyxRQUFRLEtBQVQsRUFBZ0IsVUFBVSxnQkFBUyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUExQixFQUErRCxPQUFPLFNBQXRFLEVBRnVCLEVBR3ZCLEVBQUMsUUFBUSxLQUFULEVBQWdCLFVBQVUsZ0JBQVMsTUFBVCxDQUFnQixDQUFDLEVBQUQsRUFBSyxDQUFMLENBQWhCLEVBQXlCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBekIsQ0FBMUIsRUFBOEQsT0FBTyxTQUFyRSxFQUh1QixDQUF6Qjs7QUFNQSxZQUFTLEtBQVQsQ0FBZSxTQUFmLENBQXlCLENBQ3ZCLEVBQUMsUUFBUSxLQUFULEVBQWdCLFVBQVUsZ0JBQVMsTUFBVCxDQUFnQixDQUFDLEVBQUQsRUFBSyxDQUFMLENBQWhCLEVBQXlCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBekIsQ0FBMUIsRUFBNkQsT0FBTyxTQUFwRSxFQUR1QixFQUV2QixFQUFDLFFBQVEsS0FBVCxFQUFnQixVQUFVLGdCQUFTLE1BQVQsQ0FBZ0IsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFoQixFQUEwQixDQUFDLEVBQUQsRUFBSyxFQUFMLENBQTFCLENBQTFCLEVBQStELE9BQU8sU0FBdEUsRUFGdUIsQ0FBekI7QUFJRCxFQTdDRCxDOzs7Ozs7QUNKQSwyQjs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1NBRVEsUTtTQUFVLEk7U0FBTSxROzs7Ozs7Ozs7Ozs7OztBQ0p4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCLFE7OztBQUVuQixxQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkZBQ1gsS0FEVzs7QUFFakIsV0FBSyxLQUFMLEdBQWE7QUFDWCxjQUFPLEVBREk7QUFFWCxlQUFRLEVBRkc7QUFHWCxvQkFBYSxNQUFLLEtBQUwsQ0FBVztBQUhiLE1BQWI7O0FBTUEsV0FBSyxLQUFMLEdBQWEscUJBQWI7QUFDQSxXQUFLLElBQUwsR0FBWSxtQkFBUztBQUNuQixxQkFBYyxNQUFLLEtBQUwsQ0FBVyxRQUROO0FBRW5CLGtCQUFXLE1BQUssS0FBTCxDQUFXO0FBRkgsTUFBVCxDQUFaOztBQUtBLFNBQU0sZ0JBQWdCLENBQXRCOzs7QUFHQSxXQUFNLFFBQU4sQ0FBZSxPQUFmLENBQXVCLFVBQUMsSUFBRCxFQUFPLEtBQVAsRUFBaUI7QUFDdEMsV0FBTSxhQUFhLEVBQUMsU0FBUyxJQUFWLEVBQWdCLFlBQVksS0FBNUIsRUFBbUMsYUFBYSxLQUFoRCxFQUFuQjtBQUNBLFdBQU0sYUFBYSxRQUFRLGFBQTNCO0FBQ0EsV0FBRyxlQUFlLENBQWxCLEVBQW9CO0FBQ2xCLGVBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsSUFBakIsQ0FBc0I7QUFDcEIsZ0JBQUssV0FBVyxLQURJO0FBRXBCLHNCQUFXLE1BQUssS0FBTCxDQUFXLFNBRkY7QUFHcEIscUJBQVUsTUFBSyxLQUFMLENBQVc7QUFIRCxXQUF0Qjs7QUFNQSxvQkFBVyxVQUFYLEdBQXdCLElBQXhCO0FBQ0QsUUFSRCxNQVFPLElBQUcsZUFBZSxnQkFBZ0IsQ0FBbEMsRUFBcUM7QUFDMUMsb0JBQVcsV0FBWCxHQUF5QixJQUF6QjtBQUNEOztBQUVELGFBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsSUFBbEIsQ0FDRTtBQUFBO1NBQUEsRUFBSyxPQUFPLEVBQUMsT0FBTyxNQUFLLEtBQUwsQ0FBVyxTQUFuQixFQUFaLEVBQTJDLFdBQVcsMEJBQVcsVUFBWCxDQUF0RCxFQUE4RSxLQUFLLEtBQW5GO1NBQTJGLEtBQUs7QUFBaEcsUUFERjs7QUFJQSxhQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLElBQWpCLENBQXNCO0FBQ3BCLGdCQUFPLEtBQUssS0FEUTtBQUVwQixjQUFLLEtBQUssRUFGVTtBQUdwQixpQkFBUSxLQUFLLEVBSE87QUFJcEIsZ0JBQU8sTUFBSyxLQUFMLENBQVcsU0FKRTtBQUtwQixvQkFBVyxNQUFLLEtBQUwsQ0FBVyxTQUxGO0FBTXBCLG1CQUFVLE1BQUssS0FBTCxDQUFXLFFBTkQ7QUFPcEIsa0JBQVMsTUFBSyxLQUFMLENBQVcsT0FQQTtBQVFwQixlQUFNLFFBQVEsQ0FBUixLQUFjLENBUkE7QUFTcEI7QUFUb0IsU0FBdEI7QUFXRCxNQTlCRDtBQWpCaUI7QUFnRGxCOzs7O21DQUVZO0FBQ1gsV0FBTSxnQkFBZ0IsS0FBSyxJQUFMLENBQVUsWUFBVixDQUF1QixxQkFBdkIsRUFBdEI7QUFDQSxXQUFNLGFBQWEsZUFBSyxVQUF4QjtBQUNBLFlBQUssUUFBTCxDQUFjLEVBQUMsYUFBYSxXQUFXLE1BQVgsR0FBb0IsY0FBYyxHQUFoRCxFQUFkO0FBQ0Q7Ozt5Q0FFa0I7QUFBQTs7QUFDakIsWUFBSyxXQUFMO0FBQ0EsY0FBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxpQkFBUztBQUN6QyxnQkFBSyxXQUFMO0FBQ0QsUUFGRDtBQUdEOzs7OEJBRU87QUFDTixjQUNFO0FBQUE7U0FBQSxFQUFLLFdBQVUsYUFBZjtTQUNFO0FBQUE7V0FBQSxFQUFLLFdBQVUsYUFBZjtXQUE4QixLQUFLLEtBQUwsQ0FBVztBQUF6QyxVQURGO1NBRUU7QUFBQTtXQUFBLEVBQUssS0FBSSxjQUFULEVBQXdCLFdBQVUsZ0JBQWxDLEVBQW1ELE9BQU8sRUFBQyxRQUFRLEtBQUssS0FBTCxDQUFXLFdBQXBCLEVBQTFEO1dBQTZGLEtBQUssS0FBTCxDQUFXO0FBQXhHO0FBRkYsUUFERjtBQU1EOzs7O0dBeEVtQyxnQkFBTSxTOzttQkFBdkIsUTs7O0FBMkVyQixVQUFTLFNBQVQsR0FBcUI7QUFDbkIsYUFBVSxnQkFBTSxTQUFOLENBQWdCLFVBQWhCLHFCQUFxQyxVQUQ1QjtBQUVuQixhQUFVLGdCQUFNLFNBQU4sQ0FBZ0IsT0FBaEIsQ0FBd0IsZ0JBQU0sU0FBTixDQUFnQixLQUFoQixDQUFzQjtBQUN0RCxTQUFJLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFEMkI7QUFFdEQsWUFBTyxnQkFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCO0FBRndCLElBQXRCLENBQXhCLEVBR04sVUFMZTtBQU1uQixjQUFXLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFOZjtBQU9uQixjQUFXLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFQZjtBQVFuQixZQUFTLGdCQUFNLFNBQU4sQ0FBZ0I7QUFSTixFQUFyQixDOzs7Ozs7QUNuRkEsd0I7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7S0FLcUIsUTs7O2dDQUVMLEssRUFBTyxHLEVBQUk7QUFDckIsb0JBQU8sSUFBSSxRQUFKLENBQWEsbUJBQVMsTUFBTSxDQUFOLENBQVQsRUFBbUIsTUFBTSxDQUFOLENBQW5CLENBQWIsRUFBMkMsbUJBQVMsSUFBSSxDQUFKLENBQVQsRUFBaUIsSUFBSSxDQUFKLENBQWpCLENBQTNDLENBQVA7QUFDSDs7O0FBRUQsdUJBQVksU0FBWixFQUF1QixPQUF2QixFQUErQjtBQUFBOztBQUM3QixnQkFBTSxVQUFVLE9BQVYsQ0FBa0IsT0FBbEIsS0FBOEIsQ0FBcEMsRUFBc0M7QUFDbEMsdUJBQVUsUUFBUSxNQUFSLENBQWUsS0FBSyxFQUFwQixDQUFWO0FBQ0g7O0FBRUQsY0FBSyxVQUFMLEdBQWtCLFNBQWxCO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLE9BQWhCO0FBQ0Q7Ozs7aUNBRU07QUFDSCxvQkFBTyxJQUFJLFFBQUosQ0FBYSxLQUFLLFlBQUwsR0FBb0IsS0FBcEIsRUFBYixFQUEwQyxLQUFLLFVBQUwsR0FBa0IsS0FBbEIsRUFBMUMsQ0FBUDtBQUNIOzs7dUNBRVk7QUFDVCxvQkFBTyxLQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsS0FBSyxRQUFqQyxDQUFQO0FBQ0g7Ozt3Q0FFYTtBQUFFLG9CQUFPLEtBQUssVUFBWjtBQUF5Qjs7O3NDQUM3QjtBQUFFLG9CQUFPLEtBQUssUUFBWjtBQUF1Qjs7O3NDQUV4QixJLEVBQUs7QUFDZCxvQkFBTyxJQUFJLFFBQUosQ0FBYSxLQUFLLE1BQUwsQ0FBWSxDQUFDLEtBQUssV0FBTCxFQUFiLENBQWIsRUFBK0MsSUFBL0MsQ0FBUDtBQUNIOzs7d0NBRWMsSSxFQUFLO0FBQ2hCLG9CQUFPLElBQUksUUFBSixDQUFhLElBQWIsRUFBbUIsS0FBSyxNQUFMLENBQVksS0FBSyxXQUFMLEVBQVosQ0FBbkIsQ0FBUDtBQUNIOzs7Z0NBRU0sTSxFQUFPO0FBQ1osb0JBQU8sSUFBSSxRQUFKLENBQWEsS0FBSyxZQUFMLEVBQWIsRUFBa0MsS0FBSyxVQUFMLEdBQWtCLE1BQWxCLENBQXlCLE1BQXpCLENBQWxDLENBQVA7QUFDRDs7O2dDQUVNLFEsRUFBUztBQUNaLG9CQUFPLEtBQUssWUFBTCxHQUFvQixNQUFwQixDQUEyQixTQUFTLFlBQVQsRUFBM0IsS0FBdUQsS0FBSyxVQUFMLEdBQWtCLE1BQWxCLENBQXlCLFNBQVMsVUFBVCxFQUF6QixDQUE5RDtBQUNIOzs7a0NBRVEsUSxFQUFTO0FBQ2Qsb0JBQU8sS0FBSyxZQUFMLEdBQW9CLE9BQXBCLENBQTRCLFNBQVMsWUFBVCxFQUE1QixLQUF3RCxDQUF4RCxJQUE2RCxLQUFLLFVBQUwsR0FBa0IsT0FBbEIsQ0FBMEIsU0FBUyxVQUFULEVBQTFCLEtBQW9ELENBQXhIO0FBQ0g7OztzQ0FFWSxJLEVBQUs7QUFDZCxvQkFBTyxLQUFLLFlBQUwsR0FBb0IsT0FBcEIsQ0FBNEIsSUFBNUIsS0FBcUMsQ0FBckMsSUFBMEMsS0FBSyxVQUFMLEdBQWtCLE9BQWxCLENBQTBCLElBQTFCLEtBQW1DLENBQXBGO0FBQ0g7OztrQ0FFUSxRLEVBQVM7QUFDZCxpQkFBRyxTQUFTLFFBQVQsQ0FBa0IsSUFBbEIsQ0FBSCxFQUEyQjtBQUN2Qix3QkFBTyxJQUFQO0FBQ0g7O0FBRUQsaUJBQUcsS0FBSyxZQUFMLENBQWtCLFNBQVMsWUFBVCxFQUFsQixDQUFILEVBQThDO0FBQzFDLHdCQUFPLElBQVA7QUFDSDs7QUFFRCxpQkFBRyxLQUFLLFlBQUwsQ0FBa0IsU0FBUyxVQUFULEVBQWxCLENBQUgsRUFBNEM7QUFDeEMsd0JBQU8sSUFBUDtBQUNIOztBQUVELG9CQUFPLEtBQVA7QUFDSDs7O2tDQUVRLFEsRUFBUztBQUNkLGlCQUFJLE9BQU8sS0FBSyxZQUFMLEdBQW9CLE9BQXBCLEVBQVg7QUFDQSxpQkFBSSxNQUFNLEtBQUssVUFBTCxHQUFrQixPQUFsQixFQUFWO0FBQ0EsaUJBQUksTUFBTSxDQUFWOztBQUVBLG9CQUFNLElBQU4sRUFBVztBQUNQLHFCQUFHLFNBQVMsR0FBWixFQUFnQjtBQUNaLDhCQUFTLElBQVQsQ0FBYyxJQUFkLEVBQW9CLEdBQXBCLEVBQXlCLElBQXpCLEVBQStCLEtBQUssVUFBTCxHQUFrQixNQUFsQixFQUEvQjtBQUNBO0FBQ0gsa0JBSEQsTUFHTztBQUNILDhCQUFTLElBQVQsQ0FBYyxJQUFkLEVBQW9CLEdBQXBCLEVBQXlCLElBQXpCO0FBQ0g7O0FBRUQseUJBQVEsQ0FBUjtBQUNBLG1CQUFFLEdBQUY7QUFDSDtBQUNKOzs7a0NBRVEsUSxFQUFVLGMsRUFBZTtBQUM5QixpQkFBSSxNQUFNLENBQVY7QUFDQSw4QkFBaUIsaUJBQWlCLGNBQWpCLEdBQWtDLEVBQW5EOztBQUVBLGlCQUFJLE9BQU8sS0FBSyxZQUFMLEVBQVg7QUFDQSxvQkFBTSxJQUFOLEVBQVc7QUFDUCxxQkFBRyxLQUFLLE9BQUwsQ0FBYSxLQUFLLFVBQUwsRUFBYixJQUFrQyxDQUFyQyxFQUF1QztBQUNuQztBQUNIOztBQUVELDBCQUFTLElBQVQsQ0FBYyxJQUFkLEVBQW9CLEdBQXBCLEVBQXlCLElBQXpCOztBQUVBLHdCQUFPLEtBQUssTUFBTCxDQUFZLGNBQVosQ0FBUDtBQUNBLG1CQUFFLEdBQUY7QUFDSDtBQUNKOzs7b0NBRVM7QUFDTixvQkFBTyxLQUFLLFVBQUwsR0FBa0IsR0FBbEIsR0FBd0IsS0FBSyxRQUFwQztBQUNIOzs7Ozs7bUJBdkdrQixROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NEQSxJOzs7aUNBRUosUSxFQUFVLGMsRUFBZTtBQUNwQyxpQkFBSSxRQUFRLEtBQUssY0FBakI7QUFDQSxrQkFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQXBCLEVBQTJCLEdBQTNCLEVBQWdDO0FBQzVCLHFCQUFJLE1BQU0sSUFBSSxjQUFkO0FBQ0EscUJBQUcsTUFBTSxFQUFULEVBQVk7QUFDUix5QkFBSSxhQUFhLE1BQU0sRUFBTixHQUFXLE1BQU0sR0FBakIsR0FBdUIsTUFBTSxFQUE5QztBQUNBLDhCQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CLENBQW5CLEVBQXNCLEdBQXRCLEVBQTJCLFVBQTNCO0FBQ0g7QUFDSjtBQUNKOzs7Ozs7Ozs7O2dDQU9hLEksRUFBSztBQUNmLG9CQUFPLElBQUksSUFBSixDQUFTLEtBQUssQ0FBTCxDQUFULEVBQWtCLEtBQUssQ0FBTCxDQUFsQixDQUFQO0FBQ0g7OztBQUVELG1CQUFZLElBQVosRUFBa0IsR0FBbEIsRUFBc0I7QUFBQTs7QUFDcEIsY0FBSyxLQUFMLEdBQWEsU0FBUyxTQUFULEdBQXFCLENBQXJCLEdBQXlCLFNBQVMsSUFBVCxFQUFlLEVBQWYsQ0FBdEM7QUFDQSxjQUFLLElBQUwsR0FBWSxRQUFRLFNBQVIsR0FBb0IsQ0FBcEIsR0FBd0IsU0FBUyxHQUFULEVBQWMsRUFBZCxDQUFwQztBQUNBLGdCQUFNLEtBQUssSUFBTCxHQUFZLENBQWxCLEVBQW9CO0FBQ2hCLGVBQUUsS0FBSyxLQUFQO0FBQ0Esa0JBQUssSUFBTCxHQUFZLEtBQUssS0FBSyxJQUF0QjtBQUNIOztBQUVELGdCQUFNLEtBQUssSUFBTCxHQUFZLEVBQWxCLEVBQXFCO0FBQ2pCLGVBQUUsS0FBSyxLQUFQO0FBQ0Esa0JBQUssSUFBTCxHQUFZLEtBQUssSUFBTCxHQUFZLEVBQXhCO0FBQ0g7O0FBRUQsYUFBRyxLQUFLLEtBQUwsR0FBYSxDQUFoQixFQUNBO0FBQ0ksbUJBQU0sSUFBSSxLQUFKLENBQVUsS0FBSyxRQUFMLEtBQWdCLHFCQUExQixDQUFOO0FBQ0g7QUFDRjs7OzttQ0FFUTtBQUFFLG9CQUFPLEtBQUssS0FBWjtBQUFvQjs7O2tDQUN2QjtBQUFFLG9CQUFPLEtBQUssSUFBWjtBQUFtQjs7O2lDQUV0QjtBQUNILG9CQUFPLElBQUksSUFBSixDQUFTLEtBQUssT0FBTCxFQUFULEVBQXlCLEtBQUssTUFBTCxFQUF6QixDQUFQO0FBQ0g7OztnQ0FFTSxHLEVBQUk7QUFDUCxvQkFBTyxJQUFJLElBQUosQ0FBUyxLQUFLLE9BQUwsRUFBVCxFQUF5QixLQUFLLE1BQUwsS0FBZ0IsU0FBUyxHQUFULEVBQWMsRUFBZCxDQUF6QyxDQUFQO0FBQ0g7OztnQ0FFTSxJLEVBQUs7QUFDUixvQkFBTyxLQUFLLE9BQUwsT0FBbUIsS0FBSyxPQUFMLEVBQW5CLElBQXFDLEtBQUssTUFBTCxPQUFrQixLQUFLLE1BQUwsRUFBOUQ7QUFDSDs7O2lDQUVPLEksRUFBSztBQUNULGlCQUFHLEtBQUssT0FBTCxLQUFpQixLQUFLLE9BQUwsRUFBcEIsRUFDQTtBQUNJLHdCQUFPLENBQVA7QUFDSCxjQUhELE1BSUssSUFBRyxLQUFLLE9BQUwsS0FBaUIsS0FBSyxPQUFMLEVBQXBCLEVBQ0w7QUFDSSx3QkFBTyxDQUFDLENBQVI7QUFDSCxjQUhJLE1BS0w7QUFDSSxxQkFBRyxLQUFLLE1BQUwsS0FBZ0IsS0FBSyxNQUFMLEVBQW5CLEVBQ0E7QUFDSSw0QkFBTyxDQUFQO0FBQ0gsa0JBSEQsTUFJSyxJQUFHLEtBQUssTUFBTCxLQUFnQixLQUFLLE1BQUwsRUFBbkIsRUFDTDtBQUNJLDRCQUFPLENBQUMsQ0FBUjtBQUNIO0FBQ0o7O0FBRUQsb0JBQU8sQ0FBUDtBQUNIOzs7cUNBRVcsVSxFQUFXO0FBQ25CLGlCQUFJLGFBQWEsV0FBVyxPQUFYLEVBQWpCO0FBQ0EsaUJBQUksZUFBZSxhQUFhLEtBQUssS0FBckM7QUFDQSxvQkFBUSxlQUFlLEVBQWhCLElBQXVCLFdBQVcsTUFBWCxLQUFzQixLQUFLLElBQWxELENBQVA7QUFDSDs7O29DQUVTO0FBQ04sb0JBQU8sS0FBSyxjQUFMLEVBQVA7QUFDSDs7OzBDQUVlO0FBQ1osb0JBQU8sS0FBSyxLQUFMLEdBQWEsRUFBYixHQUFrQixLQUFLLEtBQXZCLEdBQStCLEtBQUssS0FBTCxHQUFhLEVBQW5EO0FBQ0g7Ozt5Q0FFYztBQUNYLG9CQUFPLEtBQUssSUFBTCxHQUFZLEVBQVosR0FBaUIsTUFBSSxLQUFLLElBQTFCLEdBQWlDLEtBQUssSUFBN0M7QUFDSDs7OzBDQUVlO0FBQ1osb0JBQU8sS0FBSyxjQUFMLEtBQXVCLEdBQXZCLEdBQTRCLEtBQUssYUFBTCxFQUFuQztBQUNIOzs7Ozs7bUJBcEdrQixJOzs7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCLFE7OztBQUVuQixxQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkZBQ1gsS0FEVzs7QUFFakIsV0FBSyxRQUFMLEdBQWdCLE1BQUssS0FBTCxDQUFXLFFBQTNCO0FBQ0EsV0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixPQUFwQixDQUE0QixNQUFLLEtBQUwsQ0FBVyxNQUF2Qzs7QUFFQSxXQUFLLEtBQUwsR0FBYTtBQUNYLGtCQUFXLEVBREE7QUFFWCxlQUFRLEVBRkc7QUFHWCxtQkFBWSxNQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CO0FBSHBCLE1BQWI7QUFLQSxXQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFFBQXBCLENBQTZCLFVBQUMsR0FBRCxFQUFNLElBQU4sRUFBZTtBQUMxQyxhQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLElBQXJCLENBQ0U7QUFDRSxjQUFLLEtBQUssT0FBTCxFQURQO0FBRUUsZUFBTSxJQUZSO0FBR0Usb0JBQVcsTUFBSyxLQUFMLENBQVc7QUFIeEIsU0FERjtBQU9ELE1BUkQ7QUFWaUI7QUFtQmxCOzs7OzZCQUVPLEMsRUFBRTtBQUNSLFdBQUcsS0FBSyxLQUFMLENBQVcsT0FBZCxFQUFzQjtBQUNwQixhQUFNLFNBQVMsRUFBRSxPQUFGLEdBQVksRUFBRSxhQUFGLENBQWdCLFNBQTVCLEdBQXdDLEVBQUUsYUFBRixDQUFnQixVQUFoQixDQUEyQixTQUFsRjtBQUNBLGFBQU0sT0FBTyxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLFNBQW5CLENBQTZCLE1BQTdCLENBQWI7QUFDQSxjQUFLLEtBQUwsQ0FBVyxPQUFYO0FBQ0Q7QUFDRjs7OytCQUVTLE0sRUFBTztBQUNmLFdBQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxNQUF6QjtBQUNBLGNBQU8sT0FBUCxDQUFlO0FBQUEsZ0JBQVMsUUFBUSxJQUFSLENBQWEsS0FBYixDQUFUO0FBQUEsUUFBZjtBQUNBLFlBQUssUUFBTCxDQUFjLEVBQUMsUUFBUSxPQUFULEVBQWQ7QUFDRDs7OzhCQUVPO0FBQUE7O0FBQ04sV0FBTSxlQUFlO0FBQ25CLGdCQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUI7QUFEUCxRQUFyQjtBQUdBLGNBQ0U7QUFBQTtTQUFBLEVBQUssV0FBVSxZQUFmLEVBQTRCLE9BQU8sWUFBbkMsRUFBaUQsU0FBUztBQUFBLG9CQUFLLE9BQUssT0FBTCxDQUFhLENBQWIsQ0FBTDtBQUFBLFlBQTFEO1NBQ0U7QUFBQTtXQUFBLEVBQUssV0FBVSxTQUFmLEVBQXlCLE9BQU8sRUFBQyxRQUFRLEtBQUssS0FBTCxDQUFXLFVBQXBCLEVBQWhDO1dBQ0csS0FBSyxLQUFMLENBQVcsU0FEZDtXQUVHLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsR0FBbEIsQ0FBc0IsaUJBQVM7QUFDOUIsb0JBQ0U7QUFDRSxvQkFBSyxNQUFNLFFBQU4sQ0FBZSxRQUFmLEVBRFA7QUFFRSxzQkFBTyxNQUFNLEtBRmY7QUFHRSx5QkFBVSxNQUFNLFFBSGxCO0FBSUUsd0JBQVMsTUFBTSxPQUpqQjtBQUtFO0FBTEYsZUFERjtBQVNELFlBVkE7QUFGSDtBQURGLFFBREY7QUFrQkQ7Ozs7R0EzRG1DLGdCQUFNLFM7O21CQUF2QixROzs7QUE4RHJCLFVBQVMsU0FBVCxHQUFxQjtBQUNuQixVQUFPLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFEWDtBQUVuQixVQUFPLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFGWDtBQUduQixjQUFXLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFIZjtBQUluQixhQUFVLGdCQUFNLFNBQU4sQ0FBZ0IsVUFBaEIscUJBQXFDLFVBSjVCO0FBS25CLFdBQVEsZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQUxaO0FBTW5CLFlBQVMsZ0JBQU0sU0FBTixDQUFnQixJQU5OO0FBT25CLFNBQU0sZ0JBQU0sU0FBTixDQUFnQixJQUFoQixDQUFxQixVQVBSO0FBUW5CLGFBQVUsZ0JBQU0sU0FBTixDQUFnQixHQUFoQixDQUFvQjtBQVJYLEVBQXJCLEM7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCLFE7OztBQUVuQixxQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkZBQ1gsS0FEVzs7QUFHakIsV0FBSyxLQUFMLEdBQWE7QUFDWCxnQkFBUztBQURFLE1BQWI7O0FBSUEsU0FBTSxXQUFXO0FBQ2YsZUFBUSxNQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXVCO0FBRGhCLE1BQWpCO0FBR0Esb0JBQUssT0FBTCxDQUFhLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUN6QixhQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLElBQW5CLENBQ0U7QUFBQTtTQUFBO0FBQ0UsZ0JBQUssR0FEUDtBQUVFLHNCQUFXLDBCQUFXLFdBQVgsRUFBd0IsT0FBTyxNQUFNLEVBQWIsQ0FBeEIsQ0FGYjtBQUdFLGtCQUFPO0FBSFQ7U0FBQTtBQUFBLFFBREY7QUFPRCxNQVJELEVBUUcsRUFSSDtBQVZpQjtBQW1CbEI7Ozs7OEJBRU87QUFDTixjQUNFO0FBQUE7U0FBQSxFQUFLLFdBQVUsWUFBZjtTQUE2QixLQUFLLEtBQUwsQ0FBVztBQUF4QyxRQURGO0FBR0Q7Ozs7R0EzQm1DLGdCQUFNLFM7O21CQUF2QixROzs7QUE4QnJCLFVBQVMsU0FBVCxHQUFxQjtBQUNuQixjQUFXLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFEZjtBQUVuQixTQUFNLGdCQUFNLFNBQU4sQ0FBZ0IsVUFBaEIsaUJBQWlDO0FBRnBCLEVBQXJCLEM7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsa0JBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9DRDs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVxQixTOzs7QUFFbkIsc0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDhGQUNYLEtBRFc7O0FBRWpCLFdBQUssSUFBTCxHQUFZLE1BQUssS0FBTCxDQUFXLElBQXZCOztBQUVBLFdBQUssS0FBTCxHQUFhO0FBQ1gsZUFBUSxNQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLElBQW5CLENBQXdCLGdCQUF4QixDQUF5QyxNQUFLLEtBQUwsQ0FBVyxRQUFwRCxDQURHO0FBRVgsWUFBSyxDQUZNO0FBR1gsY0FBTyxNQUFLLEtBQUwsQ0FBVztBQUhQLE1BQWI7QUFKaUI7QUFTbEI7Ozs7eUNBRWtCO0FBQ2pCLFdBQU0sWUFBWSxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLElBQW5CLENBQXdCLFNBQXhCLENBQWtDLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsWUFBcEIsRUFBbEMsQ0FBbEI7QUFDQSxZQUFLLGFBQUwsR0FBcUIsS0FBSyxJQUFMLENBQVUsU0FBVixDQUFvQixxQkFBcEIsRUFBckI7QUFDQSxZQUFLLFFBQUwsQ0FBYyxFQUFDLEtBQUssQ0FBQyxLQUFLLGFBQUwsQ0FBbUIsR0FBcEIsR0FBMEIsU0FBMUIsR0FBc0MsS0FBSyxJQUFMLENBQVUsU0FBVixDQUFvQixhQUFwQixDQUFrQyxTQUE5RSxFQUFkO0FBQ0Q7Ozs4QkFFTztBQUNOLFdBQU0sUUFBUTtBQUNaLGlCQUFRLEtBQUssS0FBTCxDQUFXLE1BRFA7QUFFWixtQkFBVSxVQUZFO0FBR1osY0FBSyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEdBQWlCLElBSFY7QUFJWiwwQkFBaUIsS0FBSyxLQUFMLENBQVc7QUFKaEIsUUFBZDs7QUFPQSxjQUNFO0FBQUE7U0FBQSxFQUFLLEtBQUksV0FBVCxFQUFxQixXQUFVLGFBQS9CLEVBQTZDLE9BQU8sS0FBcEQ7U0FBQTtBQUFBLFFBREY7QUFLRDs7OztHQWhDb0MsZ0JBQU0sUzs7bUJBQXhCLFM7OztBQW1DckIsV0FBVSxTQUFWLEdBQXNCO0FBQ3BCLGFBQVUsZ0JBQU0sU0FBTixDQUFnQixVQUFoQixxQkFBcUMsVUFEM0I7QUFFcEIsVUFBTyxnQkFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBRlY7QUFHcEIsU0FBTSxnQkFBTSxTQUFOLENBQWdCLEdBQWhCLENBQW9CO0FBSE4sRUFBdEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCLFM7OztBQUVuQixzQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEZBQ1gsS0FEVzs7QUFFakIsV0FBSyxLQUFMLEdBQWE7QUFDWCxjQUFPO0FBREksTUFBYjtBQUdBLFdBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsUUFBcEIsQ0FBNkIsVUFBQyxHQUFELEVBQU0sSUFBTixFQUFlO0FBQzFDLFdBQU0sUUFBUTs7QUFFWixpQkFBUSxDQUFDLE1BQUssS0FBTCxDQUFXLFNBQVgsR0FBdUIsQ0FBeEIsSUFBNkI7QUFGekIsUUFBZDtBQUlBLGFBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsSUFBakIsQ0FDRTtBQUFBO1NBQUEsRUFBSyxLQUFLLEtBQUssT0FBTCxFQUFWLEVBQTBCLE9BQU8sS0FBakM7U0FBeUMsS0FBSyxjQUFMO0FBQXpDLFFBREY7QUFHRCxNQVJEO0FBTGlCO0FBY2xCOzs7OzhCQUVPO0FBQ04sY0FDRTtBQUFBO1NBQUEsRUFBSyxXQUFVLGFBQWY7U0FBOEIsS0FBSyxLQUFMLENBQVc7QUFBekMsUUFERjtBQUdEOzs7O0dBdEJvQyxnQkFBTSxTOzttQkFBeEIsUzs7O0FBeUJyQixXQUFVLFNBQVYsR0FBc0I7QUFDcEIsY0FBVyxnQkFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBRGQ7QUFFcEIsYUFBVSxnQkFBTSxTQUFOLENBQWdCLFVBQWhCLHFCQUFxQztBQUYzQixFQUF0QixDOzs7Ozs7Ozs7Ozs7Ozs7O0tDNUJxQixLO0FBRW5CLG9CQUFhO0FBQUE7O0FBQ1gsVUFBSyxLQUFMLEdBQWEsRUFBYjtBQUNEOzs7OzZCQUVPLE0sRUFBUSxJLEVBQUs7QUFDbkIsWUFBSyxLQUFMLENBQVcsTUFBWCxJQUFxQixJQUFyQjtBQUNEOzs7K0JBRVMsTSxFQUFPO0FBQ2YsV0FBTSxhQUFhLEVBQW5CO0FBQ0EsY0FBTyxPQUFQLENBQWUsaUJBQVM7QUFDdEIsYUFBRyxXQUFXLE1BQU0sTUFBakIsS0FBNEIsU0FBL0IsRUFBeUM7QUFDdkMsc0JBQVcsTUFBTSxNQUFqQixJQUEyQixFQUEzQjtBQUNEOztBQUVELG9CQUFXLE1BQU0sTUFBakIsRUFBeUIsSUFBekIsQ0FBOEIsS0FBOUI7QUFDRCxRQU5EOztBQVFBLFlBQUksSUFBSSxNQUFSLElBQWtCLFVBQWxCLEVBQTZCO0FBQzNCLGNBQUssS0FBTCxDQUFXLE1BQVgsRUFBbUIsU0FBbkIsQ0FBNkIsV0FBVyxNQUFYLENBQTdCO0FBQ0Q7QUFDRjs7Ozs7O21CQXZCa0IsSzs7Ozs7Ozs7Ozs7Ozs7OztLQ0FBLEk7Ozt5QkFFSTtBQUNyQixXQUFNLFFBQVEsT0FBTyxVQUFQLElBQ1gsU0FBUyxlQUFULENBQXlCLFdBRGQsSUFFWCxTQUFTLElBQVQsQ0FBYyxXQUZqQjs7QUFJQSxXQUFNLFNBQVMsT0FBTyxXQUFQLElBQ1osU0FBUyxlQUFULENBQXlCLFlBRGIsSUFFWixTQUFTLElBQVQsQ0FBYyxZQUZqQjs7QUFJQSxjQUFPLEVBQUMsT0FBTyxLQUFSLEVBQWUsUUFBUSxNQUF2QixFQUFQO0FBQ0Q7OztBQUVELGlCQUFZLE1BQVosRUFBbUI7QUFBQTs7O0FBRWpCLFVBQUssWUFBTCxHQUFvQixPQUFPLFlBQVAsQ0FBb0IsTUFBcEIsQ0FBMkIsRUFBM0IsQ0FBcEI7OztBQUdBLFNBQU0sZUFBZ0IsS0FBSyxZQUFMLENBQWtCLFdBQWxCLEtBQWtDLEVBQXhEOzs7QUFHQSxVQUFLLFVBQUwsR0FBa0IsZ0JBQWdCLE9BQU8sU0FBUCxHQUFtQixDQUFuQyxDQUFsQjs7O0FBR0EsVUFBSyxZQUFMLEdBQW9CLEtBQUssVUFBTCxHQUFrQixLQUFLLFlBQUwsQ0FBa0IsV0FBbEIsRUFBdEM7QUFDRDs7OztzQ0FFZ0IsUSxFQUFTO0FBQ3hCLGNBQVEsU0FBUyxXQUFULEtBQXlCLEtBQUssWUFBL0IsR0FBK0MsQ0FBdEQ7QUFDRDs7OytCQUVTLEksRUFBSztBQUNiLGNBQU8sS0FBSyxZQUFMLENBQWtCLFlBQWxCLEdBQWlDLFdBQWpDLENBQTZDLElBQTdDLElBQXFELEtBQUssWUFBakU7QUFDRDs7OytCQUVTLEcsRUFBSTtBQUNaLGNBQU8sS0FBSyxZQUFMLENBQWtCLFlBQWxCLEdBQWlDLE1BQWpDLENBQXdDLE1BQU0sS0FBSyxZQUFuRCxDQUFQO0FBQ0Q7Ozs7OzttQkF0Q2tCLEkiLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDZhYzQ4N2Q1ZGEyNTRkY2JlYzUwXG4gKiovIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3BhbiwgQWN0aW9uc30gZnJvbSAnLi4vaW5kZXguZXM2JztcblxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXG4gIGNvbnN0IGxpbmVEYXRhID0gW1xuICAgIHtsYWJlbDonbGFiZWwxJywgaWQ6J19fMSd9LFxuICAgIHtsYWJlbDonbGFiZWwyJywgaWQ6J19fMid9LFxuICAgIHtsYWJlbDonbGFiZWwzJywgaWQ6J19fMyd9LFxuICAgIHtsYWJlbDonbGFiZWw0JywgaWQ6J19fNCd9LFxuICAgIHtsYWJlbDonbGFiZWw1JywgaWQ6J19fNSd9LFxuICAgIHtsYWJlbDonbGFiZWw2JywgaWQ6J19fNid9LFxuICAgIHtsYWJlbDonbGFiZWw3JywgaWQ6J19fNyd9LFxuICAgIHtsYWJlbDonbGFiZWw4JywgaWQ6J19fOCd9LFxuICAgIHtsYWJlbDonbGFiZWw5JywgaWQ6J19fOSd9LFxuICAgIHtsYWJlbDonbGFiZWwxMCcsIGlkOidfXzEwJ30sXG4gICAge2xhYmVsOidsYWJlbDExJywgaWQ6J19fMTEnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTInLCBpZDonX18xMid9LFxuICAgIHtsYWJlbDonbGFiZWwxMycsIGlkOidfXzEzJ30sXG4gICAge2xhYmVsOidsYWJlbDE0JywgaWQ6J19fMTQnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTUnLCBpZDonX18xNSd9XG4gIF07XG5cbiAgY29uc3QgdGltZVNwYW4gPSBUaW1lU3Bhbi5jcmVhdGUoWzEwLCAwXSwgWzI1LCAwXSk7XG5cbiAgdmFyIHRpbWVsaW5lID0gUmVhY3RET00ucmVuZGVyKFxuICAgIDxUaW1lbGluZVxuICAgICAgbGluZURhdGE9e2xpbmVEYXRhfVxuICAgICAgdGltZVNwYW49e3RpbWVTcGFufVxuICAgICAgbGluZVdpZHRoPXs2Mn1cbiAgICAgIG1pbkhlaWdodD17MTd9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIC8vIGFjdGlvbnMuYWRkRXZlbnQoKTtcbiAgICAgIH19XG4gICAgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVsaW5lJylcbiAgKTtcblxuICB0aW1lbGluZS5saW5lcy5hZGRFdmVudHMoW1xuICAgIHtsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMSwgMF0sIFsxMiwgMF0pLCBjb2xvcjogJyNGRkI2QjYnfSxcbiAgICB7bGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTMsIDUwXSwgWzE0LCAzMF0pLCBjb2xvcjogJyNCOEYxQUMnfSxcbiAgICB7bGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9XG4gIF0pO1xuXG4gIHRpbWVsaW5lLmxpbmVzLmFkZEV2ZW50cyhbXG4gICAge2xpbmVJZDogJ19fMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEzLCAwXSwgWzE0LCAwXSksIGNvbG9yOiAnI0ZGQjZCNid9LFxuICAgIHtsaW5lSWQ6ICdfXzMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMTVdLCBbMTUsIDMwXSksIGNvbG9yOiAnI0I4RjFBQyd9XG4gIF0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlL2FwcC5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUnO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi9zcmMvY2xhc3Nlcy9UaW1lJztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuL3NyYy9jbGFzc2VzL1RpbWVTcGFuJztcblxuZXhwb3J0IHtUaW1lbGluZSwgVGltZSwgVGltZVNwYW59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2luZGV4LmVzNlxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQgTGluZVZpZXcgZnJvbSAnLi9MaW5lVmlldyc7XG5pbXBvcnQgUnVsZXJWaWV3IGZyb20gJy4vUnVsZXJWaWV3JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmVzIGZyb20gJy4uL2NsYXNzZXMvTGluZXMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY2xhc3Nlcy9VdGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpbmVzOiBbXSxcbiAgICAgIGxhYmVsczogW10sXG4gICAgICBmcmFtZUhlaWdodDogdGhpcy5wcm9wcy5mcmFtZUhlaWdodFxuICAgIH1cblxuICAgIHRoaXMubGluZXMgPSBuZXcgTGluZXMoKTtcbiAgICB0aGlzLnV0aWwgPSBuZXcgVXRpbCh7XG4gICAgICBsaW5lVGltZVNwYW46IHRoaXMucHJvcHMudGltZVNwYW4sXG4gICAgICBtaW5IZWlnaHQ6IHRoaXMucHJvcHMubWluSGVpZ2h0XG4gICAgfSk7XG5cbiAgICBjb25zdCBydWxlckludGVydmFsID0gNDtcblxuICAgIC8vVE9ETyDlvozjgYvjgonov73liqDjgafjgY3jgovmp5jjgavjg6Hjgr3jg4Pjg4njgavmir3lh7pcbiAgICBwcm9wcy5saW5lRGF0YS5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxDbGFzcyA9IHt0bExhYmVsOiB0cnVlLCB0bEhhc1J1bGVyOiBmYWxzZSwgdGxQcmV2UnVsZXI6IGZhbHNlfVxuICAgICAgY29uc3QgY3VycmVudEtleSA9IGluZGV4ICUgcnVsZXJJbnRlcnZhbDtcbiAgICAgIGlmKGN1cnJlbnRLZXkgPT09IDApe1xuICAgICAgICB0aGlzLnN0YXRlLmxpbmVzLnB1c2goPFJ1bGVyVmlld1xuICAgICAgICAgIGtleT17J3J1bGVyXycgKyBpbmRleH1cbiAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICAvPik7XG5cbiAgICAgICAgbGFiZWxDbGFzcy50bEhhc1J1bGVyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZihjdXJyZW50S2V5ID09PSBydWxlckludGVydmFsIC0gMSkge1xuICAgICAgICBsYWJlbENsYXNzLnRsUHJldlJ1bGVyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZS5sYWJlbHMucHVzaChcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiB0aGlzLnByb3BzLmxpbmVXaWR0aH19IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhsYWJlbENsYXNzKX0ga2V5PXtpbmRleH0+e2RhdGEubGFiZWx9PC9kaXY+XG4gICAgICApO1xuXG4gICAgICB0aGlzLnN0YXRlLmxpbmVzLnB1c2goPExpbmVWaWV3XG4gICAgICAgIGxhYmVsPXtkYXRhLmxhYmVsfVxuICAgICAgICBrZXk9e2RhdGEuaWR9XG4gICAgICAgIGxpbmVJZD17ZGF0YS5pZH1cbiAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMubGluZVdpZHRofVxuICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICB0aW1lU3Bhbj17dGhpcy5wcm9wcy50aW1lU3Bhbn1cbiAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICBldmVuPXtpbmRleCAlIDIgIT09IDB9XG4gICAgICAgIHRpbWVsaW5lPXt0aGlzfVxuICAgICAgLz4pO1xuICAgIH0pXG4gIH1cblxuICBmaXRUb1dpbmRvdygpe1xuICAgIGNvbnN0IHdyYXBwZXJCb3VuZHMgPSB0aGlzLnJlZnMubGluZXNXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHdpbmRvd1NpemUgPSBVdGlsLndpbmRvd1NpemU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZnJhbWVIZWlnaHQ6IHdpbmRvd1NpemUuaGVpZ2h0IC0gd3JhcHBlckJvdW5kcy50b3B9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5maXRUb1dpbmRvdygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBldmVudCA9PiB7XG4gICAgICB0aGlzLmZpdFRvV2luZG93KCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bEZyYW1lVmlld1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsTGFiZWxWaWV3XCI+e3RoaXMuc3RhdGUubGFiZWxzfTwvZGl2PlxuICAgICAgICA8ZGl2IHJlZj1cImxpbmVzV3JhcHBlclwiIGNsYXNzTmFtZT1cInRsTGluZXNXcmFwcGVyXCIgc3R5bGU9e3toZWlnaHQ6IHRoaXMuc3RhdGUuZnJhbWVIZWlnaHR9fT57dGhpcy5zdGF0ZS5saW5lc308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuVGltZWxpbmUucHJvcFR5cGVzID0ge1xuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4gIGxpbmVEYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KSkuaXNSZXF1aXJlZCxcbiAgbGluZVdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFRpbWUgZnJvbSAnLi9UaW1lJ1xuLyoqXG4gKiDkuIDluqbnlJ/miJDjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga/lpInmm7TjgZfjgb7jgZvjgpPjgIJcbiAqIOWkieabtOODoeOCveODg+ODieOBr+aWsOOBl+OBhOOCquODluOCuOOCp+OCr+ODiOOCkuW4sOOBl+OBvuOBmeOAglxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU3Bhblxue1xuICBzdGF0aWMgY3JlYXRlKHN0YXJ0LCBlbmQpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3BhbihuZXcgVGltZShzdGFydFswXSwgc3RhcnRbMV0pLCBuZXcgVGltZShlbmRbMF0sIGVuZFsxXSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3Ioc3RhcnRUaW1lLCBlbmRUaW1lKXtcbiAgICB3aGlsZShzdGFydFRpbWUuY29tcGFyZShlbmRUaW1lKSA+PSAwKXtcbiAgICAgICAgZW5kVGltZSA9IGVuZFRpbWUuYWRkTWluKDI0ICogNjApO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICB0aGlzLl9lbmRUaW1lID0gZW5kVGltZTtcbiAgfVxuXG4gIGNsb25lKCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRoaXMuZ2V0U3RhcnRUaW1lKCkuY2xvbmUoKSwgdGhpcy5nZXRFbmRUaW1lKCkuY2xvbmUoKSk7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpe1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZS5nZXREaXN0YW5jZSh0aGlzLl9lbmRUaW1lKTtcbiAgfVxuXG4gIGdldFN0YXJ0VGltZSgpeyByZXR1cm4gdGhpcy5fc3RhcnRUaW1lOyB9XG4gIGdldEVuZFRpbWUoKXsgcmV0dXJuIHRoaXMuX2VuZFRpbWU7IH1cblxuICBzaGlmdEVuZFRpbWUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRpbWUuYWRkTWluKC10aGlzLmdldERpc3RhbmNlKCkpLCB0aW1lKTtcbiAgfVxuXG4gIHNoaWZ0U3RhcnRUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lLCB0aW1lLmFkZE1pbih0aGlzLmdldERpc3RhbmNlKCkpKTtcbiAgfVxuXG4gIGFkZE1pbihtaW51dGUpe1xuICAgIHJldHVybiBuZXcgVGltZVNwYW4odGhpcy5nZXRTdGFydFRpbWUoKSwgdGhpcy5nZXRFbmRUaW1lKCkuYWRkTWluKG1pbnV0ZSkpO1xuICB9XG5cbiAgZXF1YWxzKHRpbWVTcGFuKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmVxdWFscyh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgJiYgdGhpcy5nZXRFbmRUaW1lKCkuZXF1YWxzKHRpbWVTcGFuLmdldEVuZFRpbWUoKSk7XG4gIH1cblxuICBjb250YWlucyh0aW1lU3Bhbil7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5jb21wYXJlKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSA8PSAwICYmIHRoaXMuZ2V0RW5kVGltZSgpLmNvbXBhcmUodGltZVNwYW4uZ2V0RW5kVGltZSgpKSA+PSAwO1xuICB9XG5cbiAgY29udGFpbnNUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuY29tcGFyZSh0aW1lKSA8PSAwICYmIHRoaXMuZ2V0RW5kVGltZSgpLmNvbXBhcmUodGltZSkgPj0gMDtcbiAgfVxuXG4gIG92ZXJsYXBzKHRpbWVTcGFuKXtcbiAgICAgIGlmKHRpbWVTcGFuLmNvbnRhaW5zKHRoaXMpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5jb250YWluc1RpbWUodGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5jb250YWluc1RpbWUodGltZVNwYW4uZ2V0RW5kVGltZSgpKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGVhY2hIb3VyKGNhbGxiYWNrKXtcbiAgICAgIHZhciBob3VyID0gdGhpcy5nZXRTdGFydFRpbWUoKS5nZXRIb3VyKCk7XG4gICAgICB2YXIgZW5kID0gdGhpcy5nZXRFbmRUaW1lKCkuZ2V0SG91cigpO1xuICAgICAgdmFyIGtleSA9IDA7XG5cbiAgICAgIHdoaWxlKHRydWUpe1xuICAgICAgICAgIGlmKGhvdXIgPT09IGVuZCl7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoaG91ciwga2V5LCBob3VyLCB0aGlzLmdldEVuZFRpbWUoKS5nZXRNaW4oKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoaG91ciwga2V5LCBob3VyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBob3VyICs9IDE7XG4gICAgICAgICAgKytrZXk7XG4gICAgICB9XG4gIH1cblxuICBlYWNoVGltZShjYWxsYmFjaywgbWludXRlSW50ZXJ2YWwpe1xuICAgICAgdmFyIGtleSA9IDA7XG4gICAgICBtaW51dGVJbnRlcnZhbCA9IG1pbnV0ZUludGVydmFsID8gbWludXRlSW50ZXJ2YWwgOiA2MDtcblxuICAgICAgdmFyIHRpbWUgPSB0aGlzLmdldFN0YXJ0VGltZSgpO1xuICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgaWYodGltZS5jb21wYXJlKHRoaXMuZ2V0RW5kVGltZSgpKSA+IDApe1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWxsYmFjay5jYWxsKHRpbWUsIGtleSwgdGltZSk7XG5cbiAgICAgICAgICB0aW1lID0gdGltZS5hZGRNaW4obWludXRlSW50ZXJ2YWwpO1xuICAgICAgICAgICsra2V5O1xuICAgICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKXtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUgKyAnficgKyB0aGlzLl9lbmRUaW1lO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNlxuICoqLyIsIi8qKlxuICog5LiA5bqm55Sf5oiQ44GX44Gf44Kq44OW44K444Kn44Kv44OI44Gv5aSJ5pu044GX44G+44Gb44KT44CCXG4gKiDlpInmm7Tjg6Hjgr3jg4Pjg4njga/mlrDjgZfjgYTjgqrjg5bjgrjjgqfjgq/jg4jjgpLluLDjgZfjgb7jgZnjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVxue1xuICBzdGF0aWMgZWFjaE1pbihjYWxsYmFjaywgbWludXRlSW50ZXJ2YWwpe1xuICAgICAgdmFyIGNvdW50ID0gNjAgLyBtaW51dGVJbnRlcnZhbDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgIHZhciBtaW4gPSBpICogbWludXRlSW50ZXJ2YWw7XG4gICAgICAgICAgaWYobWluIDwgNjApe1xuICAgICAgICAgICAgICB2YXIgZGlzcGxheU1pbiA9IG1pbiA8IDEwID8gJzAnICsgbWluIDogbWluICsgJyc7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwobWluLCBpLCBtaW4sIGRpc3BsYXlNaW4pO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIOmFjeWIl+OBi+OCiVRpbWXjgpLnlJ/miJBcbiAgICogQHBhcmFtICB7YXJyYXl9IHRpbWUgW2hvdXIsIG1pbl3jga7phY3liJdcbiAgICogQHJldHVybiB7VGltZX1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGltZVswXSwgdGltZVsxXSk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoaG91ciwgbWluKXtcbiAgICB0aGlzLl9ob3VyID0gaG91ciA9PT0gdW5kZWZpbmVkID8gMCA6IHBhcnNlSW50KGhvdXIsIDEwKTtcbiAgICB0aGlzLl9taW4gPSBtaW4gPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChtaW4sIDEwKTtcbiAgICB3aGlsZSh0aGlzLl9taW4gPCAwKXtcbiAgICAgICAgLS10aGlzLl9ob3VyO1xuICAgICAgICB0aGlzLl9taW4gPSA2MCArIHRoaXMuX21pbjtcbiAgICB9XG5cbiAgICB3aGlsZSh0aGlzLl9taW4gPiA1OSl7XG4gICAgICAgICsrdGhpcy5faG91cjtcbiAgICAgICAgdGhpcy5fbWluID0gdGhpcy5fbWluIC0gNjA7XG4gICAgfVxuXG4gICAgaWYodGhpcy5faG91ciA8IDApXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50b1N0cmluZygpKycgaXMgbm90IHZhbGlkIHRpbWUuJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SG91cigpeyByZXR1cm4gdGhpcy5faG91cjsgfTtcbiAgZ2V0TWluKCl7IHJldHVybiB0aGlzLl9taW47IH07XG5cbiAgY2xvbmUoKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aGlzLmdldEhvdXIoKSwgdGhpcy5nZXRNaW4oKSk7XG4gIH07XG5cbiAgYWRkTWluKG1pbil7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGhpcy5nZXRIb3VyKCksIHRoaXMuZ2V0TWluKCkgKyBwYXJzZUludChtaW4sIDEwKSk7XG4gIH07XG5cbiAgZXF1YWxzKHRpbWUpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SG91cigpID09PSB0aW1lLmdldEhvdXIoKSAmJiB0aGlzLmdldE1pbigpID09PSB0aW1lLmdldE1pbigpO1xuICB9O1xuXG4gIGNvbXBhcmUodGltZSl7XG4gICAgICBpZih0aGlzLmdldEhvdXIoKSA+IHRpbWUuZ2V0SG91cigpKVxuICAgICAge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0aGlzLmdldEhvdXIoKSA8IHRpbWUuZ2V0SG91cigpKVxuICAgICAge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgICBpZih0aGlzLmdldE1pbigpID4gdGltZS5nZXRNaW4oKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMuZ2V0TWluKCkgPCB0aW1lLmdldE1pbigpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgZ2V0RGlzdGFuY2UodGFyZ2V0VGltZSl7XG4gICAgICB2YXIgdGFyZ2V0SG91ciA9IHRhcmdldFRpbWUuZ2V0SG91cigpO1xuICAgICAgdmFyIGhvdXJEaXN0YW5jZSA9IHRhcmdldEhvdXIgLSB0aGlzLl9ob3VyO1xuICAgICAgcmV0dXJuIChob3VyRGlzdGFuY2UgKiA2MCkgKyAodGFyZ2V0VGltZS5nZXRNaW4oKSAtIHRoaXMuX21pbik7XG4gIH07XG5cbiAgdG9TdHJpbmcoKXtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlUaW1lKCk7XG4gIH07XG5cbiAgZ2V0RGlzcGxheUhvdXIoKXtcbiAgICAgIHJldHVybiB0aGlzLl9ob3VyIDwgMjQgPyB0aGlzLl9ob3VyIDogdGhpcy5faG91ciAtIDI0O1xuICB9O1xuXG4gIGdldERpc3BsYXlNaW4oKXtcbiAgICAgIHJldHVybiB0aGlzLl9taW4gPCAxMCA/ICcwJyt0aGlzLl9taW4gOiB0aGlzLl9taW47XG4gIH07XG5cbiAgZ2V0RGlzcGxheVRpbWUoKXtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlIb3VyKCkgKyc6JysgdGhpcy5nZXREaXNwbGF5TWluKCk7XG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzc2VzL1RpbWUuZXM2XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBIb3VyVmlldyBmcm9tICcuL0hvdXJWaWV3JztcbmltcG9ydCBFdmVudFZpZXcgZnJvbSAnLi9FdmVudFZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnRpbWVsaW5lID0gdGhpcy5wcm9wcy50aW1lbGluZTtcbiAgICB0aGlzLnRpbWVsaW5lLmxpbmVzLnNldExpbmUodGhpcy5wcm9wcy5saW5lSWQsIHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdXJWaWV3czogW10sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgbGluZUhlaWdodDogdGhpcy50aW1lbGluZS51dGlsLmxpbmVIZWlnaHRcbiAgICB9XG4gICAgdGhpcy5wcm9wcy50aW1lU3Bhbi5lYWNoVGltZSgoa2V5LCB0aW1lKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLmhvdXJWaWV3cy5wdXNoKFxuICAgICAgICA8SG91clZpZXdcbiAgICAgICAgICBrZXk9e3RpbWUuZ2V0SG91cigpfVxuICAgICAgICAgIHRpbWU9e3RpbWV9XG4gICAgICAgICAgbWluSGVpZ2h0PXt0aGlzLnByb3BzLm1pbkhlaWdodH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGlmKHRoaXMucHJvcHMub25DbGljayl7XG4gICAgICBjb25zdCBjbGlja1kgPSBlLmNsaWVudFkgLSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0VG9wICsgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuc2Nyb2xsVG9wO1xuICAgICAgY29uc3QgdGltZSA9IHRoaXMudGltZWxpbmUudXRpbC50b3BUb1RpbWUoY2xpY2tZKTtcbiAgICAgIHRoaXMucHJvcHMub25DbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50cyhldmVudHMpe1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5ldmVudHM7XG4gICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4gY3VycmVudC5wdXNoKGV2ZW50KSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXZlbnRzOiBjdXJyZW50fSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCArICdweCdcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxMaW5lVmlld1wiIHN0eWxlPXt3cmFwcGVyU3R5bGV9IG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bEhvdXJzXCIgc3R5bGU9e3toZWlnaHQ6IHRoaXMuc3RhdGUubGluZUhlaWdodH19PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmhvdXJWaWV3c31cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5ldmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxFdmVudFZpZXdcbiAgICAgICAgICAgICAgICBrZXk9e2V2ZW50LnRpbWVTcGFuLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgY29sb3I9e2V2ZW50LmNvbG9yfVxuICAgICAgICAgICAgICAgIHRpbWVTcGFuPXtldmVudC50aW1lU3Bhbn1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PXtldmVudC5kaXNwbGF5fVxuICAgICAgICAgICAgICAgIGxpbmU9e3RoaXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5MaW5lVmlldy5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4gIGxpbmVJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgZXZlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgdGltZWxpbmU6IFJlYWN0LlByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9MaW5lVmlldy5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi4vY2xhc3Nlcy9UaW1lJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdXJWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1pbkRpdnM6IFtdXG4gICAgfVxuXG4gICAgY29uc3QgbWluU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMubWluSGVpZ2h0ICsgJ3B4J1xuICAgIH1cbiAgICBUaW1lLmVhY2hNaW4oKGtleSwgbWluKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLm1pbkRpdnMucHVzaChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17bWlufVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxNaW5WaWV3JywgJ18nICsgKG1pbiArIDE1KSl9XG4gICAgICAgICAgc3R5bGU9e21pblN0eWxlfVxuICAgICAgICA+Jm5ic3A7PC9kaXY+XG4gICAgICApO1xuICAgIH0sIDE1KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxIb3VyVmlld1wiPnt0aGlzLnN0YXRlLm1pbkRpdnN9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ib3VyVmlldy5wcm9wVHlwZXMgPSB7XG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lKS5pc1JlcXVpcmVkXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0hvdXJWaWV3LmpzeFxuICoqLyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMubGluZSA9IHRoaXMucHJvcHMubGluZTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMubGluZS50aW1lbGluZS51dGlsLnRpbWVTcGFuVG9IZWlnaHQodGhpcy5wcm9wcy50aW1lU3BhbiksXG4gICAgICB0b3A6IDAsXG4gICAgICBjb2xvcjogdGhpcy5wcm9wcy5jb2xvclxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgY29uc3QgdGFyZ2V0VG9wID0gdGhpcy5saW5lLnRpbWVsaW5lLnV0aWwudGltZVRvVG9wKHRoaXMucHJvcHMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgIHRoaXMuaW5pdGlhbEJvdW5kcyA9IHRoaXMucmVmcy5ldmVudEVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dG9wOiAtdGhpcy5pbml0aWFsQm91bmRzLnRvcCArIHRhcmdldFRvcCArIHRoaXMucmVmcy5ldmVudEVsZW0ucGFyZW50RWxlbWVudC5vZmZzZXRUb3B9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCArICdweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuY29sb3JcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwiZXZlbnRFbGVtXCIgY2xhc3NOYW1lPVwidGxFdmVudFZpZXdcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgICAmbmJzcDtcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRXZlbnRWaWV3LnByb3BUeXBlcyA9IHtcbiAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuICBjb2xvcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsaW5lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRWaWV3LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVyVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG91cnM6IFtdXG4gICAgfVxuICAgIHRoaXMucHJvcHMudGltZVNwYW4uZWFjaFRpbWUoKGtleSwgdGltZSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIC8vYm9yZGVyMXB444KS6Laz44GZXG4gICAgICAgIGhlaWdodDogKHRoaXMucHJvcHMubWluSGVpZ2h0ICsgMSkgKiA0XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLmhvdXJzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXt0aW1lLmdldEhvdXIoKX0gc3R5bGU9e3N0eWxlfT57dGltZS5nZXREaXNwbGF5SG91cigpfTwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsUnVsZXJWaWV3XCI+e3RoaXMuc3RhdGUuaG91cnN9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SdWxlclZpZXcucHJvcFR5cGVzID0ge1xuICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL1J1bGVyVmlldy5qc3hcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lc1xue1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMubGluZXMgPSB7fTtcbiAgfVxuXG4gIHNldExpbmUobGluZUlkLCBsaW5lKXtcbiAgICB0aGlzLmxpbmVzW2xpbmVJZF0gPSBsaW5lO1xuICB9XG5cbiAgYWRkRXZlbnRzKGV2ZW50cyl7XG4gICAgY29uc3QgbGluZUV2ZW50cyA9IHt9O1xuICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmKGxpbmVFdmVudHNbZXZlbnQubGluZUlkXSA9PSB1bmRlZmluZWQpe1xuICAgICAgICBsaW5lRXZlbnRzW2V2ZW50LmxpbmVJZF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgbGluZUV2ZW50c1tldmVudC5saW5lSWRdLnB1c2goZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgZm9yKHZhciBsaW5lSWQgaW4gbGluZUV2ZW50cyl7XG4gICAgICB0aGlzLmxpbmVzW2xpbmVJZF0uYWRkRXZlbnRzKGxpbmVFdmVudHNbbGluZUlkXSk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzc2VzL0xpbmVzLmVzNlxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxcbntcbiAgc3RhdGljIGdldCB3aW5kb3dTaXplKCl7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4ge3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICAvL01pblZpZXfjga/kuIDmmYLplpPkuIvjgavkvZnliIbjgYznlJ/miJDjgZXjgozjgovjga7jgac2MOWIhuODl+ODqeOCuVxuICAgIHRoaXMubGluZVRpbWVTcGFuID0gY29uZmlnLmxpbmVUaW1lU3Bhbi5hZGRNaW4oNjApO1xuXG4gICAgLy9taW5WaWV344GM44GE44GP44Gk44GC44KL44GL44Kr44Km44Oz44OI44CCbWluVmlld+OBrzE15YiG44GK44GNXG4gICAgY29uc3QgbWluVmlld0NvdW50ID0gKHRoaXMubGluZVRpbWVTcGFuLmdldERpc3RhbmNlKCkgLyAxNSk7XG5cbiAgICAvL+mrmOOBleOCkuioiOeul+OAgmJvcmRlcuWIhjFweOi2s+OBmVxuICAgIHRoaXMubGluZUhlaWdodCA9IG1pblZpZXdDb3VudCAqIChjb25maWcubWluSGVpZ2h0ICsgMSk7XG5cbiAgICAvLzHliIbjgYLjgZ/jgorjga7pq5jjgZXjgpLnrpflh7pcbiAgICB0aGlzLnBlck1pbkhlaWdodCA9IHRoaXMubGluZUhlaWdodCAvIHRoaXMubGluZVRpbWVTcGFuLmdldERpc3RhbmNlKCk7XG4gIH1cblxuICB0aW1lU3BhblRvSGVpZ2h0KHRpbWVTcGFuKXtcbiAgICByZXR1cm4gKHRpbWVTcGFuLmdldERpc3RhbmNlKCkgKiB0aGlzLnBlck1pbkhlaWdodCkgLSAxO1xuICB9XG5cbiAgdGltZVRvVG9wKHRpbWUpe1xuICAgIHJldHVybiB0aGlzLmxpbmVUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXN0YW5jZSh0aW1lKSAqIHRoaXMucGVyTWluSGVpZ2h0O1xuICB9XG5cbiAgdG9wVG9UaW1lKHRvcCl7XG4gICAgcmV0dXJuIHRoaXMubGluZVRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmFkZE1pbih0b3AgLyB0aGlzLnBlck1pbkhlaWdodCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvVXRpbC5lczZcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9