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
	
	var _RulerView = __webpack_require__(10);
	
	var _RulerView2 = _interopRequireDefault(_RulerView);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Lines = __webpack_require__(13);
	
	var _Lines2 = _interopRequireDefault(_Lines);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Timeline = function (_React$Component) {
	  _inherits(Timeline, _React$Component);
	
	  _createClass(Timeline, null, [{
	    key: 'windowSize',
	    get: function get() {
	      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	
	      return { width: width, height: height };
	    }
	  }]);
	
	  function Timeline(props) {
	    _classCallCheck(this, Timeline);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Timeline).call(this, props));
	
	    _this.state = {
	      lines: [],
	      labels: [],
	      frameHeight: _this.props.frameHeight
	    };
	
	    _this.lines = new _Lines2.default();
	
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
	
	      var line = _react2.default.createElement(_LineView2.default, {
	        label: data.label,
	        key: data.id,
	        lineId: data.id,
	        width: _this.props.lineWidth,
	        minHeight: _this.props.minHeight,
	        timeSpan: _this.props.timeSpan,
	        onClick: _this.props.onClick,
	        even: index % 2 !== 0,
	        lines: _this.lines
	      });
	
	      _this.lines[data.id] = line;
	      _this.state.lines.push(line);
	    });
	    return _this;
	  }
	
	  _createClass(Timeline, [{
	    key: 'fitToWindow',
	    value: function fitToWindow() {
	      var wrapperBounds = this.refs.linesWrapper.getBoundingClientRect();
	      var windowSize = Timeline.windowSize;
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
	
	var _EventView = __webpack_require__(12);
	
	var _EventView2 = _interopRequireDefault(_EventView);
	
	var _Lines = __webpack_require__(13);
	
	var _Lines2 = _interopRequireDefault(_Lines);
	
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
	      hourViews: [],
	      events: []
	    };
	    _this.props.timeSpan.eachTime(function (key, time) {
	      _this.state.hourViews.push(_react2.default.createElement(_HourView2.default, {
	        key: time.getHour(),
	        time: time,
	        minHeight: _this.props.minHeight,
	        onClick: _this.props.onClick
	      }));
	    });
	
	    _this.props.lines.setLine(_this.props.lineId, _this);
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
	          { className: 'tlHours' },
	          this.state.hourViews,
	          this.state.events.map(function (event) {
	            return _react2.default.createElement(_EventView2.default, {
	              color: event.color,
	              timeSpan: event.timeSpan,
	              display: event.display
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
	  lines: _react2.default.PropTypes.instanceOf(_Lines2.default).isRequired
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
/* 11 */,
/* 12 */
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EventView = function (_React$Component) {
	  _inherits(EventView, _React$Component);
	
	  function EventView(props) {
	    _classCallCheck(this, EventView);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EventView).call(this, props));
	  }
	
	  _createClass(EventView, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'tlEventView' },
	        ' '
	      );
	    }
	  }]);
	
	  return EventView;
	}(_react2.default.Component);
	
	exports.default = EventView;
	
	
	EventView.propTypes = {};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Actions = function () {
	  function Actions() {
	    _classCallCheck(this, Actions);
	
	    this.lines = {};
	  }
	
	  _createClass(Actions, [{
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
	
	  return Actions;
	}();
	
	exports.default = Actions;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2I0ZjNhYWMxNTMwYzExYWZhM2UiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5lVmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG91clZpZXcuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SdWxlclZpZXcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50Vmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvTGluZXMuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUdBLFFBQU8sTUFBUCxHQUFnQixZQUFNOztBQUVwQixPQUFNLFdBQVcsQ0FDZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBRGUsRUFFZixFQUFDLE9BQU0sUUFBUCxFQUFpQixJQUFHLEtBQXBCLEVBRmUs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LFVBQUssS0FBTCxHQUFhLEVBQWI7QUFDRDs7Ozs2QkFFTyxNLEVBQVEsSSxFQUFLO0FBQ25CLFlBQUssS0FBTCxDQUFXLE1BQVgsSUFBcUIsSUFBckI7QUFDRDs7OytCQUVTLE0sRUFBTztBQUNmLFdBQU0sYUFBYSxFQUFuQjtBQUNBLGNBQU8sT0FBUCxDQUFlLGlCQUFTO0FBQ3RCLGFBQUcsV0FBVyxNQUFNLE1BQWpCLEtBQTRCLFNBQS9CLEVBQXlDO0FBQ3ZDLHNCQUFXLE1BQU0sTUFBakIsSUFBMkIsRUFBM0I7QUFDRDs7QUFFRCxvQkFBVyxNQUFNLE1BQWpCLEVBQXlCLElBQXpCLENBQThCLEtBQTlCO0FBQ0QsUUFORDs7QUFRQSxZQUFJLElBQUksTUFBUixJQUFrQixVQUFsQixFQUE2QjtBQUMzQixjQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQW1CLFNBQW5CLENBQTZCLFdBQVcsTUFBWCxDQUE3QjtBQUNEO0FBQ0Y7Ozs7OzttQkF2QmtCLE8iLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDNiNGYzYWFjMTUzMGMxMWFmYTNlXG4gKiovIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3BhbiwgQWN0aW9uc30gZnJvbSAnLi4vaW5kZXguZXM2JztcblxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXG4gIGNvbnN0IGxpbmVEYXRhID0gW1xuICAgIHtsYWJlbDonbGFiZWwxJywgaWQ6J19fMSd9LFxuICAgIHtsYWJlbDonbGFiZWwyJywgaWQ6J19fMid9LFxuICAgIHtsYWJlbDonbGFiZWwzJywgaWQ6J19fMyd9LFxuICAgIHtsYWJlbDonbGFiZWw0JywgaWQ6J19fNCd9LFxuICAgIHtsYWJlbDonbGFiZWw1JywgaWQ6J19fNSd9LFxuICAgIHtsYWJlbDonbGFiZWw2JywgaWQ6J19fNid9LFxuICAgIHtsYWJlbDonbGFiZWw3JywgaWQ6J19fNyd9LFxuICAgIHtsYWJlbDonbGFiZWw4JywgaWQ6J19fOCd9LFxuICAgIHtsYWJlbDonbGFiZWw5JywgaWQ6J19fOSd9LFxuICAgIHtsYWJlbDonbGFiZWwxMCcsIGlkOidfXzEwJ30sXG4gICAge2xhYmVsOidsYWJlbDExJywgaWQ6J19fMTEnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTInLCBpZDonX18xMid9LFxuICAgIHtsYWJlbDonbGFiZWwxMycsIGlkOidfXzEzJ30sXG4gICAge2xhYmVsOidsYWJlbDE0JywgaWQ6J19fMTQnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTUnLCBpZDonX18xNSd9XG4gIF07XG5cbiAgY29uc3QgdGltZVNwYW4gPSBUaW1lU3Bhbi5jcmVhdGUoWzEwLCAwXSwgWzI1LCAwXSk7XG5cbiAgdmFyIHRpbWVsaW5lID0gUmVhY3RET00ucmVuZGVyKFxuICAgIDxUaW1lbGluZVxuICAgICAgbGluZURhdGE9e2xpbmVEYXRhfVxuICAgICAgdGltZVNwYW49e3RpbWVTcGFufVxuICAgICAgbGluZVdpZHRoPXs2Mn1cbiAgICAgIG1pbkhlaWdodD17MTd9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIC8vIGFjdGlvbnMuYWRkRXZlbnQoKTtcbiAgICAgIH19XG4gICAgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVsaW5lJylcbiAgKTtcblxuICB0aW1lbGluZS5saW5lcy5hZGRFdmVudHMoW1xuICAgIHtsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMSwgMF0sIFsxMiwgMF0pLCBjb2xvcjogJyNGRkI2QjYnfSxcbiAgICB7bGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTMsIDUwXSwgWzE0LCAzMF0pLCBjb2xvcjogJyNCOEYxQUMnfSxcbiAgICB7bGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9XG4gIF0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlL2FwcC5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUnO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi9zcmMvY2xhc3Nlcy9UaW1lJztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuL3NyYy9jbGFzc2VzL1RpbWVTcGFuJztcblxuZXhwb3J0IHtUaW1lbGluZSwgVGltZSwgVGltZVNwYW59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2luZGV4LmVzNlxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQgTGluZVZpZXcgZnJvbSAnLi9MaW5lVmlldyc7XG5pbXBvcnQgUnVsZXJWaWV3IGZyb20gJy4vUnVsZXJWaWV3JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExpbmVzIGZyb20gJy4uL2NsYXNzZXMvTGluZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBzdGF0aWMgZ2V0IHdpbmRvd1NpemUoKXtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblxuICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiB7d2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGluZXM6IFtdLFxuICAgICAgbGFiZWxzOiBbXSxcbiAgICAgIGZyYW1lSGVpZ2h0OiB0aGlzLnByb3BzLmZyYW1lSGVpZ2h0XG4gICAgfVxuXG4gICAgdGhpcy5saW5lcyA9IG5ldyBMaW5lcygpO1xuXG4gICAgY29uc3QgcnVsZXJJbnRlcnZhbCA9IDQ7XG5cbiAgICAvL1RPRE8g5b6M44GL44KJ6L+95Yqg44Gn44GN44KL5qeY44Gr44Oh44K944OD44OJ44Gr5oq95Ye6XG4gICAgcHJvcHMubGluZURhdGEuZm9yRWFjaCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsQ2xhc3MgPSB7dGxMYWJlbDogdHJ1ZSwgdGxIYXNSdWxlcjogZmFsc2UsIHRsUHJldlJ1bGVyOiBmYWxzZX1cbiAgICAgIGNvbnN0IGN1cnJlbnRLZXkgPSBpbmRleCAlIHJ1bGVySW50ZXJ2YWw7XG4gICAgICBpZihjdXJyZW50S2V5ID09PSAwKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5saW5lcy5wdXNoKDxSdWxlclZpZXdcbiAgICAgICAgICBrZXk9eydydWxlcl8nICsgaW5kZXh9XG4gICAgICAgICAgbWluSGVpZ2h0PXt0aGlzLnByb3BzLm1pbkhlaWdodH1cbiAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5wcm9wcy50aW1lU3Bhbn1cbiAgICAgICAgLz4pO1xuXG4gICAgICAgIGxhYmVsQ2xhc3MudGxIYXNSdWxlciA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYoY3VycmVudEtleSA9PT0gcnVsZXJJbnRlcnZhbCAtIDEpIHtcbiAgICAgICAgbGFiZWxDbGFzcy50bFByZXZSdWxlciA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUubGFiZWxzLnB1c2goXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogdGhpcy5wcm9wcy5saW5lV2lkdGh9fSBjbGFzc05hbWU9e2NsYXNzTmFtZXMobGFiZWxDbGFzcyl9IGtleT17aW5kZXh9PntkYXRhLmxhYmVsfTwvZGl2PlxuICAgICAgKTtcblxuICAgICAgdmFyIGxpbmUgPSA8TGluZVZpZXdcbiAgICAgICAgbGFiZWw9e2RhdGEubGFiZWx9XG4gICAgICAgIGtleT17ZGF0YS5pZH1cbiAgICAgICAgbGluZUlkPXtkYXRhLmlkfVxuICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy5saW5lV2lkdGh9XG4gICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9XG4gICAgICAgIGV2ZW49e2luZGV4ICUgMiAhPT0gMH1cbiAgICAgICAgbGluZXM9e3RoaXMubGluZXN9XG4gICAgICAvPjtcblxuICAgICAgdGhpcy5saW5lc1tkYXRhLmlkXSA9IGxpbmU7XG4gICAgICB0aGlzLnN0YXRlLmxpbmVzLnB1c2gobGluZSk7XG4gICAgfSlcbiAgfVxuXG4gIGZpdFRvV2luZG93KCl7XG4gICAgY29uc3Qgd3JhcHBlckJvdW5kcyA9IHRoaXMucmVmcy5saW5lc1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgd2luZG93U2l6ZSA9IFRpbWVsaW5lLndpbmRvd1NpemU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZnJhbWVIZWlnaHQ6IHdpbmRvd1NpemUuaGVpZ2h0IC0gd3JhcHBlckJvdW5kcy50b3B9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5maXRUb1dpbmRvdygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBldmVudCA9PiB7XG4gICAgICB0aGlzLmZpdFRvV2luZG93KCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bEZyYW1lVmlld1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsTGFiZWxWaWV3XCI+e3RoaXMuc3RhdGUubGFiZWxzfTwvZGl2PlxuICAgICAgICA8ZGl2IHJlZj1cImxpbmVzV3JhcHBlclwiIGNsYXNzTmFtZT1cInRsTGluZXNXcmFwcGVyXCIgc3R5bGU9e3toZWlnaHQ6IHRoaXMuc3RhdGUuZnJhbWVIZWlnaHR9fT57dGhpcy5zdGF0ZS5saW5lc308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuVGltZWxpbmUucHJvcFR5cGVzID0ge1xuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4gIGxpbmVEYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KSkuaXNSZXF1aXJlZCxcbiAgbGluZVdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFRpbWUgZnJvbSAnLi9UaW1lJ1xuLyoqXG4gKiDkuIDluqbnlJ/miJDjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga/lpInmm7TjgZfjgb7jgZvjgpPjgIJcbiAqIOWkieabtOODoeOCveODg+ODieOBr+aWsOOBl+OBhOOCquODluOCuOOCp+OCr+ODiOOCkuW4sOOBl+OBvuOBmeOAglxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU3Bhblxue1xuICBzdGF0aWMgY3JlYXRlKHN0YXJ0LCBlbmQpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3BhbihuZXcgVGltZShzdGFydFswXSwgc3RhcnRbMV0pLCBuZXcgVGltZShlbmRbMF0sIGVuZFsxXSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3Ioc3RhcnRUaW1lLCBlbmRUaW1lKXtcbiAgICB3aGlsZShzdGFydFRpbWUuY29tcGFyZShlbmRUaW1lKSA+PSAwKXtcbiAgICAgICAgZW5kVGltZSA9IGVuZFRpbWUuYWRkTWluKDI0ICogNjApO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICB0aGlzLl9lbmRUaW1lID0gZW5kVGltZTtcbiAgfVxuXG4gIGNsb25lKCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRoaXMuZ2V0U3RhcnRUaW1lKCkuY2xvbmUoKSwgdGhpcy5nZXRFbmRUaW1lKCkuY2xvbmUoKSk7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpe1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZS5nZXREaXN0YW5jZSh0aGlzLl9lbmRUaW1lKTtcbiAgfVxuXG4gIGdldFN0YXJ0VGltZSgpeyByZXR1cm4gdGhpcy5fc3RhcnRUaW1lOyB9XG4gIGdldEVuZFRpbWUoKXsgcmV0dXJuIHRoaXMuX2VuZFRpbWU7IH1cblxuICBzaGlmdEVuZFRpbWUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRpbWUuYWRkTWluKC10aGlzLmdldERpc3RhbmNlKCkpLCB0aW1lKTtcbiAgfVxuXG4gIHNoaWZ0U3RhcnRUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lLCB0aW1lLmFkZE1pbih0aGlzLmdldERpc3RhbmNlKCkpKTtcbiAgfVxuXG4gIGVxdWFscyh0aW1lU3Bhbil7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5lcXVhbHModGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpICYmIHRoaXMuZ2V0RW5kVGltZSgpLmVxdWFscyh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpO1xuICB9XG5cbiAgY29udGFpbnModGltZVNwYW4pe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuY29tcGFyZSh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgPD0gMCAmJiB0aGlzLmdldEVuZFRpbWUoKS5jb21wYXJlKHRpbWVTcGFuLmdldEVuZFRpbWUoKSkgPj0gMDtcbiAgfVxuXG4gIGNvbnRhaW5zVGltZSh0aW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUodGltZSkgPD0gMCAmJiB0aGlzLmdldEVuZFRpbWUoKS5jb21wYXJlKHRpbWUpID49IDA7XG4gIH1cblxuICBvdmVybGFwcyh0aW1lU3Bhbil7XG4gICAgICBpZih0aW1lU3Bhbi5jb250YWlucyh0aGlzKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuY29udGFpbnNUaW1lKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuY29udGFpbnNUaW1lKHRpbWVTcGFuLmdldEVuZFRpbWUoKSkpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBlYWNoSG91cihjYWxsYmFjayl7XG4gICAgICB2YXIgaG91ciA9IHRoaXMuZ2V0U3RhcnRUaW1lKCkuZ2V0SG91cigpO1xuICAgICAgdmFyIGVuZCA9IHRoaXMuZ2V0RW5kVGltZSgpLmdldEhvdXIoKTtcbiAgICAgIHZhciBrZXkgPSAwO1xuXG4gICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICBpZihob3VyID09PSBlbmQpe1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGhvdXIsIGtleSwgaG91ciwgdGhpcy5nZXRFbmRUaW1lKCkuZ2V0TWluKCkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGhvdXIsIGtleSwgaG91cik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaG91ciArPSAxO1xuICAgICAgICAgICsra2V5O1xuICAgICAgfVxuICB9XG5cbiAgZWFjaFRpbWUoY2FsbGJhY2ssIG1pbnV0ZUludGVydmFsKXtcbiAgICAgIHZhciBrZXkgPSAwO1xuICAgICAgbWludXRlSW50ZXJ2YWwgPSBtaW51dGVJbnRlcnZhbCA/IG1pbnV0ZUludGVydmFsIDogNjA7XG5cbiAgICAgIHZhciB0aW1lID0gdGhpcy5nZXRTdGFydFRpbWUoKTtcbiAgICAgIHdoaWxlKHRydWUpe1xuICAgICAgICAgIGlmKHRpbWUuY29tcGFyZSh0aGlzLmdldEVuZFRpbWUoKSkgPiAwKXtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FsbGJhY2suY2FsbCh0aW1lLCBrZXksIHRpbWUpO1xuXG4gICAgICAgICAgdGltZSA9IHRpbWUuYWRkTWluKG1pbnV0ZUludGVydmFsKTtcbiAgICAgICAgICArK2tleTtcbiAgICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCl7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lICsgJ34nICsgdGhpcy5fZW5kVGltZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3Nlcy9UaW1lU3Bhbi5lczZcbiAqKi8iLCIvKipcbiAqIOS4gOW6pueUn+aIkOOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOBr+WkieabtOOBl+OBvuOBm+OCk+OAglxuICog5aSJ5pu044Oh44K944OD44OJ44Gv5paw44GX44GE44Kq44OW44K444Kn44Kv44OI44KS5biw44GX44G+44GZ44CCXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVcbntcbiAgc3RhdGljIGVhY2hNaW4oY2FsbGJhY2ssIG1pbnV0ZUludGVydmFsKXtcbiAgICAgIHZhciBjb3VudCA9IDYwIC8gbWludXRlSW50ZXJ2YWw7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICB2YXIgbWluID0gaSAqIG1pbnV0ZUludGVydmFsO1xuICAgICAgICAgIGlmKG1pbiA8IDYwKXtcbiAgICAgICAgICAgICAgdmFyIGRpc3BsYXlNaW4gPSBtaW4gPCAxMCA/ICcwJyArIG1pbiA6IG1pbiArICcnO1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKG1pbiwgaSwgbWluLCBkaXNwbGF5TWluKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiDphY3liJfjgYvjgolUaW1l44KS55Sf5oiQXG4gICAqIEBwYXJhbSAge2FycmF5fSB0aW1lIFtob3VyLCBtaW5d44Gu6YWN5YiXXG4gICAqIEByZXR1cm4ge1RpbWV9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRpbWVbMF0sIHRpbWVbMV0pO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGhvdXIsIG1pbil7XG4gICAgdGhpcy5faG91ciA9IGhvdXIgPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChob3VyLCAxMCk7XG4gICAgdGhpcy5fbWluID0gbWluID09PSB1bmRlZmluZWQgPyAwIDogcGFyc2VJbnQobWluLCAxMCk7XG4gICAgd2hpbGUodGhpcy5fbWluIDwgMCl7XG4gICAgICAgIC0tdGhpcy5faG91cjtcbiAgICAgICAgdGhpcy5fbWluID0gNjAgKyB0aGlzLl9taW47XG4gICAgfVxuXG4gICAgd2hpbGUodGhpcy5fbWluID4gNTkpe1xuICAgICAgICArK3RoaXMuX2hvdXI7XG4gICAgICAgIHRoaXMuX21pbiA9IHRoaXMuX21pbiAtIDYwO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX2hvdXIgPCAwKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudG9TdHJpbmcoKSsnIGlzIG5vdCB2YWxpZCB0aW1lLicpO1xuICAgIH1cbiAgfVxuXG4gIGdldEhvdXIoKXsgcmV0dXJuIHRoaXMuX2hvdXI7IH07XG4gIGdldE1pbigpeyByZXR1cm4gdGhpcy5fbWluOyB9O1xuXG4gIGNsb25lKCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGhpcy5nZXRIb3VyKCksIHRoaXMuZ2V0TWluKCkpO1xuICB9O1xuXG4gIGFkZE1pbihtaW4pe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRoaXMuZ2V0SG91cigpLCB0aGlzLmdldE1pbigpICsgcGFyc2VJbnQobWluLCAxMCkpO1xuICB9O1xuXG4gIGVxdWFscyh0aW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmdldEhvdXIoKSA9PT0gdGltZS5nZXRIb3VyKCkgJiYgdGhpcy5nZXRNaW4oKSA9PT0gdGltZS5nZXRNaW4oKTtcbiAgfTtcblxuICBjb21wYXJlKHRpbWUpe1xuICAgICAgaWYodGhpcy5nZXRIb3VyKCkgPiB0aW1lLmdldEhvdXIoKSlcbiAgICAgIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodGhpcy5nZXRIb3VyKCkgPCB0aW1lLmdldEhvdXIoKSlcbiAgICAgIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgICAgaWYodGhpcy5nZXRNaW4oKSA+IHRpbWUuZ2V0TWluKCkpXG4gICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZih0aGlzLmdldE1pbigpIDwgdGltZS5nZXRNaW4oKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGdldERpc3RhbmNlKHRhcmdldFRpbWUpe1xuICAgICAgdmFyIHRhcmdldEhvdXIgPSB0YXJnZXRUaW1lLmdldEhvdXIoKTtcbiAgICAgIHZhciBob3VyRGlzdGFuY2UgPSB0YXJnZXRIb3VyIC0gdGhpcy5faG91cjtcbiAgICAgIHJldHVybiAoaG91ckRpc3RhbmNlICogNjApICsgKHRhcmdldFRpbWUuZ2V0TWluKCkgLSB0aGlzLl9taW4pO1xuICB9O1xuXG4gIHRvU3RyaW5nKCl7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXNwbGF5VGltZSgpO1xuICB9O1xuXG4gIGdldERpc3BsYXlIb3VyKCl7XG4gICAgICByZXR1cm4gdGhpcy5faG91ciA8IDI0ID8gdGhpcy5faG91ciA6IHRoaXMuX2hvdXIgLSAyNDtcbiAgfTtcblxuICBnZXREaXNwbGF5TWluKCl7XG4gICAgICByZXR1cm4gdGhpcy5fbWluIDwgMTAgPyAnMCcrdGhpcy5fbWluIDogdGhpcy5fbWluO1xuICB9O1xuXG4gIGdldERpc3BsYXlUaW1lKCl7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXNwbGF5SG91cigpICsnOicrIHRoaXMuZ2V0RGlzcGxheU1pbigpO1xuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNlxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQgSG91clZpZXcgZnJvbSAnLi9Ib3VyVmlldyc7XG5pbXBvcnQgRXZlbnRWaWV3IGZyb20gJy4vRXZlbnRWaWV3JztcbmltcG9ydCBMaW5lcyBmcm9tICcuLi9jbGFzc2VzL0xpbmVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdXJWaWV3czogW10sXG4gICAgICBldmVudHM6IFtdXG4gICAgfVxuICAgIHRoaXMucHJvcHMudGltZVNwYW4uZWFjaFRpbWUoKGtleSwgdGltZSkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5ob3VyVmlld3MucHVzaChcbiAgICAgICAgPEhvdXJWaWV3XG4gICAgICAgICAga2V5PXt0aW1lLmdldEhvdXIoKX1cbiAgICAgICAgICB0aW1lPXt0aW1lfVxuICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHRoaXMucHJvcHMubGluZXMuc2V0TGluZSh0aGlzLnByb3BzLmxpbmVJZCwgdGhpcyk7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGlmKHRoaXMucHJvcHMub25DbGljayl7XG4gICAgICBjb25zdCBlbGVtID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgbGluZUlkID0gdGhpcy5wcm9wcy5saW5lSWRcbiAgICAgIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBvZmZzZXRZID0gZS5jbGllbnRZIC0gYm91bmRzLnRvcDtcbiAgICAgIGNvbnNvbGUubG9nKGxpbmVJZCwgb2Zmc2V0WSwgYm91bmRzLmhlaWdodCk7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudHMoZXZlbnRzKXtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUuZXZlbnRzO1xuICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IGN1cnJlbnQucHVzaChldmVudCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2V2ZW50czogY3VycmVudH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qgd3JhcHBlclN0eWxlID0ge1xuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggKyAncHgnXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsTGluZVZpZXdcIiBzdHlsZT17d3JhcHBlclN0eWxlfSBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxIb3Vyc1wiPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmhvdXJWaWV3c31cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5ldmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxFdmVudFZpZXdcbiAgICAgICAgICAgICAgICBjb2xvcj17ZXZlbnQuY29sb3J9XG4gICAgICAgICAgICAgICAgdGltZVNwYW49e2V2ZW50LnRpbWVTcGFufVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9e2V2ZW50LmRpc3BsYXl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5MaW5lVmlldy5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4gIGxpbmVJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgZXZlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbGluZXM6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKExpbmVzKS5pc1JlcXVpcmVkXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xpbmVWaWV3LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZSBmcm9tICcuLi9jbGFzc2VzL1RpbWUnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91clZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWluRGl2czogW11cbiAgICB9XG5cbiAgICBjb25zdCBtaW5TdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5taW5IZWlnaHQgKyAncHgnXG4gICAgfVxuICAgIFRpbWUuZWFjaE1pbigoa2V5LCBtaW4pID0+IHtcbiAgICAgIHRoaXMuc3RhdGUubWluRGl2cy5wdXNoKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXttaW59XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0bE1pblZpZXcnLCAnXycgKyAobWluICsgMTUpKX1cbiAgICAgICAgICBzdHlsZT17bWluU3R5bGV9XG4gICAgICAgID4mbmJzcDs8L2Rpdj5cbiAgICAgICk7XG4gICAgfSwgMTUpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bEhvdXJWaWV3XCI+e3RoaXMuc3RhdGUubWluRGl2c308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkhvdXJWaWV3LnByb3BUeXBlcyA9IHtcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWUpLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSG91clZpZXcuanN4XG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZXJWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob3VyczogW11cbiAgICB9XG4gICAgdGhpcy5wcm9wcy50aW1lU3Bhbi5lYWNoVGltZSgoa2V5LCB0aW1lKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgLy9ib3JkZXIxcHjjgpLotrPjgZlcbiAgICAgICAgaGVpZ2h0OiAodGhpcy5wcm9wcy5taW5IZWlnaHQgKyAxKSAqIDRcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUuaG91cnMucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e3RpbWUuZ2V0SG91cigpfSBzdHlsZT17c3R5bGV9Pnt0aW1lLmdldERpc3BsYXlIb3VyKCl9PC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSdWxlclZpZXdcIj57dGhpcy5zdGF0ZS5ob3Vyc308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJ1bGVyVmlldy5wcm9wVHlwZXMgPSB7XG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUnVsZXJWaWV3LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxFdmVudFZpZXdcIj4mbmJzcDs8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkV2ZW50Vmlldy5wcm9wVHlwZXMgPSB7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRWaWV3LmpzeFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbnNcbntcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmxpbmVzID0ge307XG4gIH1cblxuICBzZXRMaW5lKGxpbmVJZCwgbGluZSl7XG4gICAgdGhpcy5saW5lc1tsaW5lSWRdID0gbGluZTtcbiAgfVxuXG4gIGFkZEV2ZW50cyhldmVudHMpe1xuICAgIGNvbnN0IGxpbmVFdmVudHMgPSB7fTtcbiAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICBpZihsaW5lRXZlbnRzW2V2ZW50LmxpbmVJZF0gPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgbGluZUV2ZW50c1tldmVudC5saW5lSWRdID0gW107XG4gICAgICB9XG5cbiAgICAgIGxpbmVFdmVudHNbZXZlbnQubGluZUlkXS5wdXNoKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIGZvcih2YXIgbGluZUlkIGluIGxpbmVFdmVudHMpe1xuICAgICAgdGhpcy5saW5lc1tsaW5lSWRdLmFkZEV2ZW50cyhsaW5lRXZlbnRzW2xpbmVJZF0pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3Nlcy9MaW5lcy5lczZcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9