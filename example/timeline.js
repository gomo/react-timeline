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
	
	var _Line = __webpack_require__(7);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _Ruler = __webpack_require__(14);
	
	var _Ruler2 = _interopRequireDefault(_Ruler);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Lines = __webpack_require__(12);
	
	var _Lines2 = _interopRequireDefault(_Lines);
	
	var _Util = __webpack_require__(13);
	
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
	        _this.state.lines.push(_react2.default.createElement(_Ruler2.default, {
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
	
	      _this.state.lines.push(_react2.default.createElement(_Line2.default, {
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
	
	var _Hour = __webpack_require__(15);
	
	var _Hour2 = _interopRequireDefault(_Hour);
	
	var _Event = __webpack_require__(16);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _Events = __webpack_require__(17);
	
	var _Events2 = _interopRequireDefault(_Events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Line = function (_React$Component) {
	  _inherits(Line, _React$Component);
	
	  function Line(props) {
	    _classCallCheck(this, Line);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Line).call(this, props));
	
	    _this.timeline = _this.props.timeline;
	    _this.timeline.lines.setLine(_this.props.lineId, _this);
	
	    _this.events = new _Events2.default();
	
	    _this.state = {
	      hours: [],
	      events: [],
	      lineHeight: _this.timeline.util.lineHeight
	    };
	    _this.props.timeSpan.eachTime(function (key, time) {
	      _this.state.hours.push(_react2.default.createElement(_Hour2.default, {
	        key: time.getHour(),
	        time: time,
	        minHeight: _this.props.minHeight
	      }));
	    });
	    return _this;
	  }
	
	  _createClass(Line, [{
	    key: 'getRelativeTop',
	    value: function getRelativeTop(e) {
	      return e.clientY - e.currentTarget.offsetTop + e.currentTarget.parentNode.scrollTop;
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      var _this2 = this;
	
	      if (this.props.onClick) {
	        (function () {
	          var top = _this2.getRelativeTop(e);
	          var time = _this2.timeline.util.topToTime(top);
	          var event = _this2.events.find(function (event) {
	            return event.props.timeSpan.containsTime(time);
	          });
	          console.log(event);
	          _this2.props.onClick();
	        })();
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
	      var _this3 = this;
	
	      var wrapperStyle = {
	        width: this.props.width + 'px'
	      };
	      return _react2.default.createElement(
	        'div',
	        { className: 'tlLineView', style: wrapperStyle, onClick: function onClick(e) {
	            return _this3.onClick(e);
	          } },
	        _react2.default.createElement(
	          'div',
	          { className: 'tlHours', style: { height: this.state.lineHeight } },
	          this.state.hours,
	          this.state.events.map(function (event) {
	            return _react2.default.createElement(_Event2.default, {
	              key: event.timeSpan.toString(),
	              color: event.color,
	              timeSpan: event.timeSpan,
	              display: event.display,
	              line: _this3
	            });
	          })
	        )
	      );
	    }
	  }]);
	
	  return Line;
	}(_react2.default.Component);
	
	exports.default = Line;
	
	
	Line.propTypes = {
	  label: _react2.default.PropTypes.string.isRequired,
	  width: _react2.default.PropTypes.number.isRequired,
	  minHeight: _react2.default.PropTypes.number.isRequired,
	  timeSpan: _react2.default.PropTypes.instanceOf(_TimeSpan2.default).isRequired,
	  lineId: _react2.default.PropTypes.string.isRequired,
	  onClick: _react2.default.PropTypes.func,
	  even: _react2.default.PropTypes.bool.isRequired,
	  //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
	  timeline: _react2.default.PropTypes.any.isRequired
	};

/***/ },
/* 8 */,
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
/* 10 */,
/* 11 */,
/* 12 */
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
/* 13 */
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

/***/ },
/* 14 */
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
	
	var Ruler = function (_React$Component) {
	  _inherits(Ruler, _React$Component);
	
	  function Ruler(props) {
	    _classCallCheck(this, Ruler);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ruler).call(this, props));
	
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
	
	  _createClass(Ruler, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'tlRulerView' },
	        this.state.hours
	      );
	    }
	  }]);
	
	  return Ruler;
	}(_react2.default.Component);
	
	exports.default = Ruler;
	
	
	Ruler.propTypes = {
	  minHeight: _react2.default.PropTypes.number.isRequired,
	  timeSpan: _react2.default.PropTypes.instanceOf(_TimeSpan2.default).isRequired
	};

/***/ },
/* 15 */
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
	
	var Hour = function (_React$Component) {
	  _inherits(Hour, _React$Component);
	
	  function Hour(props) {
	    _classCallCheck(this, Hour);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Hour).call(this, props));
	
	    _this.state = {
	      minutes: []
	    };
	
	    var minStyle = {
	      height: _this.props.minHeight + 'px'
	    };
	    _Time2.default.eachMin(function (key, min) {
	      _this.state.minutes.push(_react2.default.createElement(
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
	
	  _createClass(Hour, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'tlHourView' },
	        this.state.minutes
	      );
	    }
	  }]);
	
	  return Hour;
	}(_react2.default.Component);
	
	exports.default = Hour;
	
	
	Hour.propTypes = {
	  minHeight: _react2.default.PropTypes.number.isRequired,
	  time: _react2.default.PropTypes.instanceOf(_Time2.default).isRequired
	};

/***/ },
/* 16 */
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
	
	var Event = function (_React$Component) {
	  _inherits(Event, _React$Component);
	
	  function Event(props) {
	    _classCallCheck(this, Event);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Event).call(this, props));
	
	    _this.line = _this.props.line;
	    _this.line.events.addEvent(_this);
	
	    _this.state = {
	      height: _this.line.timeline.util.timeSpanToHeight(_this.props.timeSpan),
	      top: 0,
	      color: _this.props.color
	    };
	    return _this;
	  }
	
	  _createClass(Event, [{
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
	
	  return Event;
	}(_react2.default.Component);
	
	exports.default = Event;
	
	
	Event.propTypes = {
	  timeSpan: _react2.default.PropTypes.instanceOf(_TimeSpan2.default).isRequired,
	  color: _react2.default.PropTypes.string.isRequired,
	  //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
	  line: _react2.default.PropTypes.any.isRequired
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Events = function () {
	  function Events() {
	    _classCallCheck(this, Events);
	
	    this.events = [];
	  }
	
	  _createClass(Events, [{
	    key: "addEvent",
	    value: function addEvent(event) {
	      this.events.push(event);
	    }
	  }, {
	    key: "find",
	    value: function find(callback) {
	      return this.events.find(callback);
	    }
	  }]);
	
	  return Events;
	}();
	
	exports.default = Events;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWQ1Y2JkMjU3MmM0Njg2ZGJjZDMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5lLmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvTGluZXMuZXM2Iiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1V0aWwuZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1J1bGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib3VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvRXZlbnRzLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFHQSxRQUFPLE1BQVAsR0FBZ0IsWUFBTTs7QUFFcEIsT0FBTSxXQUFXLENBQ2YsRUFBQyxPQUFNLFFBQVAsRUFBaUIs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LENBQWdCLEdBQWhCLENBQW9CO0FBSlYsRUFBbEIsQzs7Ozs7Ozs7Ozs7Ozs7OztLQ3hDcUIsTTtBQUVuQixxQkFBYTtBQUFBOztBQUNYLFVBQUssTUFBTCxHQUFjLEVBQWQ7QUFDRDs7Ozs4QkFFUSxLLEVBQU07QUFDYixZQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLEtBQWpCO0FBQ0Q7OzswQkFFSSxRLEVBQVM7QUFDWixjQUFPLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsUUFBakIsQ0FBUDtBQUNEOzs7Ozs7bUJBWmtCLE0iLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGVkNWNiZDI1NzJjNDY4NmRiY2QzXG4gKiovIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3BhbiwgQWN0aW9uc30gZnJvbSAnLi4vaW5kZXguZXM2JztcblxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXG4gIGNvbnN0IGxpbmVEYXRhID0gW1xuICAgIHtsYWJlbDonbGFiZWwxJywgaWQ6J19fMSd9LFxuICAgIHtsYWJlbDonbGFiZWwyJywgaWQ6J19fMid9LFxuICAgIHtsYWJlbDonbGFiZWwzJywgaWQ6J19fMyd9LFxuICAgIHtsYWJlbDonbGFiZWw0JywgaWQ6J19fNCd9LFxuICAgIHtsYWJlbDonbGFiZWw1JywgaWQ6J19fNSd9LFxuICAgIHtsYWJlbDonbGFiZWw2JywgaWQ6J19fNid9LFxuICAgIHtsYWJlbDonbGFiZWw3JywgaWQ6J19fNyd9LFxuICAgIHtsYWJlbDonbGFiZWw4JywgaWQ6J19fOCd9LFxuICAgIHtsYWJlbDonbGFiZWw5JywgaWQ6J19fOSd9LFxuICAgIHtsYWJlbDonbGFiZWwxMCcsIGlkOidfXzEwJ30sXG4gICAge2xhYmVsOidsYWJlbDExJywgaWQ6J19fMTEnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTInLCBpZDonX18xMid9LFxuICAgIHtsYWJlbDonbGFiZWwxMycsIGlkOidfXzEzJ30sXG4gICAge2xhYmVsOidsYWJlbDE0JywgaWQ6J19fMTQnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTUnLCBpZDonX18xNSd9XG4gIF07XG5cbiAgY29uc3QgdGltZVNwYW4gPSBUaW1lU3Bhbi5jcmVhdGUoWzEwLCAwXSwgWzI1LCAwXSk7XG5cbiAgdmFyIHRpbWVsaW5lID0gUmVhY3RET00ucmVuZGVyKFxuICAgIDxUaW1lbGluZVxuICAgICAgbGluZURhdGE9e2xpbmVEYXRhfVxuICAgICAgdGltZVNwYW49e3RpbWVTcGFufVxuICAgICAgbGluZVdpZHRoPXs2Mn1cbiAgICAgIG1pbkhlaWdodD17MTd9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIC8vIGFjdGlvbnMuYWRkRXZlbnQoKTtcbiAgICAgIH19XG4gICAgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVsaW5lJylcbiAgKTtcblxuICB0aW1lbGluZS5saW5lcy5hZGRFdmVudHMoW1xuICAgIHtsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMSwgMF0sIFsxMiwgMF0pLCBjb2xvcjogJyNGRkI2QjYnfSxcbiAgICB7bGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTMsIDUwXSwgWzE0LCAzMF0pLCBjb2xvcjogJyNCOEYxQUMnfSxcbiAgICB7bGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9XG4gIF0pO1xuXG4gIHRpbWVsaW5lLmxpbmVzLmFkZEV2ZW50cyhbXG4gICAge2xpbmVJZDogJ19fMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEzLCAwXSwgWzE0LCAwXSksIGNvbG9yOiAnI0ZGQjZCNid9LFxuICAgIHtsaW5lSWQ6ICdfXzMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMTVdLCBbMTUsIDMwXSksIGNvbG9yOiAnI0I4RjFBQyd9XG4gIF0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlL2FwcC5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUnO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi9zcmMvY2xhc3Nlcy9UaW1lJztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuL3NyYy9jbGFzc2VzL1RpbWVTcGFuJztcblxuZXhwb3J0IHtUaW1lbGluZSwgVGltZSwgVGltZVNwYW59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2luZGV4LmVzNlxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xuaW1wb3J0IFJ1bGVyIGZyb20gJy4vUnVsZXInO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTGluZXMgZnJvbSAnLi4vY2xhc3Nlcy9MaW5lcyc7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jbGFzc2VzL1V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGluZXM6IFtdLFxuICAgICAgbGFiZWxzOiBbXSxcbiAgICAgIGZyYW1lSGVpZ2h0OiB0aGlzLnByb3BzLmZyYW1lSGVpZ2h0XG4gICAgfVxuXG4gICAgdGhpcy5saW5lcyA9IG5ldyBMaW5lcygpO1xuICAgIHRoaXMudXRpbCA9IG5ldyBVdGlsKHtcbiAgICAgIGxpbmVUaW1lU3BhbjogdGhpcy5wcm9wcy50aW1lU3BhbixcbiAgICAgIG1pbkhlaWdodDogdGhpcy5wcm9wcy5taW5IZWlnaHRcbiAgICB9KTtcblxuICAgIGNvbnN0IHJ1bGVySW50ZXJ2YWwgPSA0O1xuXG4gICAgLy9UT0RPIOW+jOOBi+OCiei/veWKoOOBp+OBjeOCi+anmOOBq+ODoeOCveODg+ODieOBq+aKveWHulxuICAgIHByb3BzLmxpbmVEYXRhLmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbENsYXNzID0ge3RsTGFiZWw6IHRydWUsIHRsSGFzUnVsZXI6IGZhbHNlLCB0bFByZXZSdWxlcjogZmFsc2V9XG4gICAgICBjb25zdCBjdXJyZW50S2V5ID0gaW5kZXggJSBydWxlckludGVydmFsO1xuICAgICAgaWYoY3VycmVudEtleSA9PT0gMCl7XG4gICAgICAgIHRoaXMuc3RhdGUubGluZXMucHVzaChcbiAgICAgICAgICA8UnVsZXJcbiAgICAgICAgICAgIGtleT17J3J1bGVyXycgKyBpbmRleH1cbiAgICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5wcm9wcy50aW1lU3Bhbn1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuXG4gICAgICAgIGxhYmVsQ2xhc3MudGxIYXNSdWxlciA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYoY3VycmVudEtleSA9PT0gcnVsZXJJbnRlcnZhbCAtIDEpIHtcbiAgICAgICAgbGFiZWxDbGFzcy50bFByZXZSdWxlciA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUubGFiZWxzLnB1c2goXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogdGhpcy5wcm9wcy5saW5lV2lkdGh9fSBjbGFzc05hbWU9e2NsYXNzTmFtZXMobGFiZWxDbGFzcyl9IGtleT17aW5kZXh9PntkYXRhLmxhYmVsfTwvZGl2PlxuICAgICAgKTtcblxuICAgICAgdGhpcy5zdGF0ZS5saW5lcy5wdXNoKFxuICAgICAgICA8TGluZVxuICAgICAgICAgIGxhYmVsPXtkYXRhLmxhYmVsfVxuICAgICAgICAgIGtleT17ZGF0YS5pZH1cbiAgICAgICAgICBsaW5lSWQ9e2RhdGEuaWR9XG4gICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMubGluZVdpZHRofVxuICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgICAgdGltZVNwYW49e3RoaXMucHJvcHMudGltZVNwYW59XG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICAgIGV2ZW49e2luZGV4ICUgMiAhPT0gMH1cbiAgICAgICAgICB0aW1lbGluZT17dGhpc31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSlcbiAgfVxuXG4gIGZpdFRvV2luZG93KCl7XG4gICAgY29uc3Qgd3JhcHBlckJvdW5kcyA9IHRoaXMucmVmcy5saW5lc1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgd2luZG93U2l6ZSA9IFV0aWwud2luZG93U2l6ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtmcmFtZUhlaWdodDogd2luZG93U2l6ZS5oZWlnaHQgLSB3cmFwcGVyQm91bmRzLnRvcH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmZpdFRvV2luZG93KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuZml0VG9XaW5kb3coKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsRnJhbWVWaWV3XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxMYWJlbFZpZXdcIj57dGhpcy5zdGF0ZS5sYWJlbHN9PC9kaXY+XG4gICAgICAgIDxkaXYgcmVmPVwibGluZXNXcmFwcGVyXCIgY2xhc3NOYW1lPVwidGxMaW5lc1dyYXBwZXJcIiBzdHlsZT17e2hlaWdodDogdGhpcy5zdGF0ZS5mcmFtZUhlaWdodH19Pnt0aGlzLnN0YXRlLmxpbmVzfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5UaW1lbGluZS5wcm9wVHlwZXMgPSB7XG4gIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbiAgbGluZURhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pKS5pc1JlcXVpcmVkLFxuICBsaW5lV2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgVGltZSBmcm9tICcuL1RpbWUnXG4vKipcbiAqIOS4gOW6pueUn+aIkOOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOBr+WkieabtOOBl+OBvuOBm+OCk+OAglxuICog5aSJ5pu044Oh44K944OD44OJ44Gv5paw44GX44GE44Kq44OW44K444Kn44Kv44OI44KS5biw44GX44G+44GZ44CCXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVTcGFuXG57XG4gIHN0YXRpYyBjcmVhdGUoc3RhcnQsIGVuZCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKG5ldyBUaW1lKHN0YXJ0WzBdLCBzdGFydFsxXSksIG5ldyBUaW1lKGVuZFswXSwgZW5kWzFdKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzdGFydFRpbWUsIGVuZFRpbWUpe1xuICAgIHdoaWxlKHN0YXJ0VGltZS5jb21wYXJlKGVuZFRpbWUpID49IDApe1xuICAgICAgICBlbmRUaW1lID0gZW5kVGltZS5hZGRNaW4oMjQgKiA2MCk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgIHRoaXMuX2VuZFRpbWUgPSBlbmRUaW1lO1xuICB9XG5cbiAgY2xvbmUoKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4odGhpcy5nZXRTdGFydFRpbWUoKS5jbG9uZSgpLCB0aGlzLmdldEVuZFRpbWUoKS5jbG9uZSgpKTtcbiAgfVxuXG4gIGdldERpc3RhbmNlKCl7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lLmdldERpc3RhbmNlKHRoaXMuX2VuZFRpbWUpO1xuICB9XG5cbiAgZ2V0U3RhcnRUaW1lKCl7IHJldHVybiB0aGlzLl9zdGFydFRpbWU7IH1cbiAgZ2V0RW5kVGltZSgpeyByZXR1cm4gdGhpcy5fZW5kVGltZTsgfVxuXG4gIHNoaWZ0RW5kVGltZSh0aW1lKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4odGltZS5hZGRNaW4oLXRoaXMuZ2V0RGlzdGFuY2UoKSksIHRpbWUpO1xuICB9XG5cbiAgc2hpZnRTdGFydFRpbWUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRpbWUsIHRpbWUuYWRkTWluKHRoaXMuZ2V0RGlzdGFuY2UoKSkpO1xuICB9XG5cbiAgYWRkTWluKG1pbnV0ZSl7XG4gICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aGlzLmdldFN0YXJ0VGltZSgpLCB0aGlzLmdldEVuZFRpbWUoKS5hZGRNaW4obWludXRlKSk7XG4gIH1cblxuICBlcXVhbHModGltZVNwYW4pe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuZXF1YWxzKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSAmJiB0aGlzLmdldEVuZFRpbWUoKS5lcXVhbHModGltZVNwYW4uZ2V0RW5kVGltZSgpKTtcbiAgfVxuXG4gIGNvbnRhaW5zKHRpbWVTcGFuKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUodGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpIDw9IDAgJiYgdGhpcy5nZXRFbmRUaW1lKCkuY29tcGFyZSh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpID49IDA7XG4gIH1cblxuICBjb250YWluc1RpbWUodGltZSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5jb21wYXJlKHRpbWUpIDw9IDAgJiYgdGhpcy5nZXRFbmRUaW1lKCkuY29tcGFyZSh0aW1lKSA+PSAwO1xuICB9XG5cbiAgb3ZlcmxhcHModGltZVNwYW4pe1xuICAgICAgaWYodGltZVNwYW4uY29udGFpbnModGhpcykpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmNvbnRhaW5zVGltZSh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmNvbnRhaW5zVGltZSh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZWFjaEhvdXIoY2FsbGJhY2spe1xuICAgICAgdmFyIGhvdXIgPSB0aGlzLmdldFN0YXJ0VGltZSgpLmdldEhvdXIoKTtcbiAgICAgIHZhciBlbmQgPSB0aGlzLmdldEVuZFRpbWUoKS5nZXRIb3VyKCk7XG4gICAgICB2YXIga2V5ID0gMDtcblxuICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgaWYoaG91ciA9PT0gZW5kKXtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChob3VyLCBrZXksIGhvdXIsIHRoaXMuZ2V0RW5kVGltZSgpLmdldE1pbigpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChob3VyLCBrZXksIGhvdXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhvdXIgKz0gMTtcbiAgICAgICAgICArK2tleTtcbiAgICAgIH1cbiAgfVxuXG4gIGVhY2hUaW1lKGNhbGxiYWNrLCBtaW51dGVJbnRlcnZhbCl7XG4gICAgICB2YXIga2V5ID0gMDtcbiAgICAgIG1pbnV0ZUludGVydmFsID0gbWludXRlSW50ZXJ2YWwgPyBtaW51dGVJbnRlcnZhbCA6IDYwO1xuXG4gICAgICB2YXIgdGltZSA9IHRoaXMuZ2V0U3RhcnRUaW1lKCk7XG4gICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICBpZih0aW1lLmNvbXBhcmUodGhpcy5nZXRFbmRUaW1lKCkpID4gMCl7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGltZSwga2V5LCB0aW1lKTtcblxuICAgICAgICAgIHRpbWUgPSB0aW1lLmFkZE1pbihtaW51dGVJbnRlcnZhbCk7XG4gICAgICAgICAgKytrZXk7XG4gICAgICB9XG4gIH1cblxuICB0b1N0cmluZygpe1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZSArICd+JyArIHRoaXMuX2VuZFRpbWU7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvVGltZVNwYW4uZXM2XG4gKiovIiwiLyoqXG4gKiDkuIDluqbnlJ/miJDjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga/lpInmm7TjgZfjgb7jgZvjgpPjgIJcbiAqIOWkieabtOODoeOCveODg+ODieOBr+aWsOOBl+OBhOOCquODluOCuOOCp+OCr+ODiOOCkuW4sOOBl+OBvuOBmeOAglxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lXG57XG4gIHN0YXRpYyBlYWNoTWluKGNhbGxiYWNrLCBtaW51dGVJbnRlcnZhbCl7XG4gICAgICB2YXIgY291bnQgPSA2MCAvIG1pbnV0ZUludGVydmFsO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgdmFyIG1pbiA9IGkgKiBtaW51dGVJbnRlcnZhbDtcbiAgICAgICAgICBpZihtaW4gPCA2MCl7XG4gICAgICAgICAgICAgIHZhciBkaXNwbGF5TWluID0gbWluIDwgMTAgPyAnMCcgKyBtaW4gOiBtaW4gKyAnJztcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChtaW4sIGksIG1pbiwgZGlzcGxheU1pbik7XG4gICAgICAgICAgfVxuICAgICAgfTtcbiAgfTtcblxuICAvKipcbiAgICog6YWN5YiX44GL44KJVGltZeOCkueUn+aIkFxuICAgKiBAcGFyYW0gIHthcnJheX0gdGltZSBbaG91ciwgbWluXeOBrumFjeWIl1xuICAgKiBAcmV0dXJuIHtUaW1lfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZSh0aW1lKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aW1lWzBdLCB0aW1lWzFdKTtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihob3VyLCBtaW4pe1xuICAgIHRoaXMuX2hvdXIgPSBob3VyID09PSB1bmRlZmluZWQgPyAwIDogcGFyc2VJbnQoaG91ciwgMTApO1xuICAgIHRoaXMuX21pbiA9IG1pbiA9PT0gdW5kZWZpbmVkID8gMCA6IHBhcnNlSW50KG1pbiwgMTApO1xuICAgIHdoaWxlKHRoaXMuX21pbiA8IDApe1xuICAgICAgICAtLXRoaXMuX2hvdXI7XG4gICAgICAgIHRoaXMuX21pbiA9IDYwICsgdGhpcy5fbWluO1xuICAgIH1cblxuICAgIHdoaWxlKHRoaXMuX21pbiA+IDU5KXtcbiAgICAgICAgKyt0aGlzLl9ob3VyO1xuICAgICAgICB0aGlzLl9taW4gPSB0aGlzLl9taW4gLSA2MDtcbiAgICB9XG5cbiAgICBpZih0aGlzLl9ob3VyIDwgMClcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnRvU3RyaW5nKCkrJyBpcyBub3QgdmFsaWQgdGltZS4nKTtcbiAgICB9XG4gIH1cblxuICBnZXRIb3VyKCl7IHJldHVybiB0aGlzLl9ob3VyOyB9O1xuICBnZXRNaW4oKXsgcmV0dXJuIHRoaXMuX21pbjsgfTtcblxuICBjbG9uZSgpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRoaXMuZ2V0SG91cigpLCB0aGlzLmdldE1pbigpKTtcbiAgfTtcblxuICBhZGRNaW4obWluKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aGlzLmdldEhvdXIoKSwgdGhpcy5nZXRNaW4oKSArIHBhcnNlSW50KG1pbiwgMTApKTtcbiAgfTtcblxuICBlcXVhbHModGltZSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRIb3VyKCkgPT09IHRpbWUuZ2V0SG91cigpICYmIHRoaXMuZ2V0TWluKCkgPT09IHRpbWUuZ2V0TWluKCk7XG4gIH07XG5cbiAgY29tcGFyZSh0aW1lKXtcbiAgICAgIGlmKHRoaXMuZ2V0SG91cigpID4gdGltZS5nZXRIb3VyKCkpXG4gICAgICB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHRoaXMuZ2V0SG91cigpIDwgdGltZS5nZXRIb3VyKCkpXG4gICAgICB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICAgIGlmKHRoaXMuZ2V0TWluKCkgPiB0aW1lLmdldE1pbigpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYodGhpcy5nZXRNaW4oKSA8IHRpbWUuZ2V0TWluKCkpXG4gICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgfTtcblxuICBnZXREaXN0YW5jZSh0YXJnZXRUaW1lKXtcbiAgICAgIHZhciB0YXJnZXRIb3VyID0gdGFyZ2V0VGltZS5nZXRIb3VyKCk7XG4gICAgICB2YXIgaG91ckRpc3RhbmNlID0gdGFyZ2V0SG91ciAtIHRoaXMuX2hvdXI7XG4gICAgICByZXR1cm4gKGhvdXJEaXN0YW5jZSAqIDYwKSArICh0YXJnZXRUaW1lLmdldE1pbigpIC0gdGhpcy5fbWluKTtcbiAgfTtcblxuICB0b1N0cmluZygpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzcGxheVRpbWUoKTtcbiAgfTtcblxuICBnZXREaXNwbGF5SG91cigpe1xuICAgICAgcmV0dXJuIHRoaXMuX2hvdXIgPCAyNCA/IHRoaXMuX2hvdXIgOiB0aGlzLl9ob3VyIC0gMjQ7XG4gIH07XG5cbiAgZ2V0RGlzcGxheU1pbigpe1xuICAgICAgcmV0dXJuIHRoaXMuX21pbiA8IDEwID8gJzAnK3RoaXMuX21pbiA6IHRoaXMuX21pbjtcbiAgfTtcblxuICBnZXREaXNwbGF5VGltZSgpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzcGxheUhvdXIoKSArJzonKyB0aGlzLmdldERpc3BsYXlNaW4oKTtcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvVGltZS5lczZcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IEhvdXIgZnJvbSAnLi9Ib3VyJztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi4vY2xhc3Nlcy9FdmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudGltZWxpbmUgPSB0aGlzLnByb3BzLnRpbWVsaW5lO1xuICAgIHRoaXMudGltZWxpbmUubGluZXMuc2V0TGluZSh0aGlzLnByb3BzLmxpbmVJZCwgdGhpcyk7XG5cbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudHMoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob3VyczogW10sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgbGluZUhlaWdodDogdGhpcy50aW1lbGluZS51dGlsLmxpbmVIZWlnaHRcbiAgICB9XG4gICAgdGhpcy5wcm9wcy50aW1lU3Bhbi5lYWNoVGltZSgoa2V5LCB0aW1lKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLmhvdXJzLnB1c2goXG4gICAgICAgIDxIb3VyXG4gICAgICAgICAga2V5PXt0aW1lLmdldEhvdXIoKX1cbiAgICAgICAgICB0aW1lPXt0aW1lfVxuICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVUb3AoZSl7XG4gICAgcmV0dXJuIGUuY2xpZW50WSAtIGUuY3VycmVudFRhcmdldC5vZmZzZXRUb3AgKyBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5zY3JvbGxUb3A7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGlmKHRoaXMucHJvcHMub25DbGljayl7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLmdldFJlbGF0aXZlVG9wKGUpO1xuICAgICAgY29uc3QgdGltZSA9IHRoaXMudGltZWxpbmUudXRpbC50b3BUb1RpbWUodG9wKTtcbiAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudHMuZmluZChldmVudCA9PiBldmVudC5wcm9wcy50aW1lU3Bhbi5jb250YWluc1RpbWUodGltZSkpO1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRzKGV2ZW50cyl7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLmV2ZW50cztcbiAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiBjdXJyZW50LnB1c2goZXZlbnQpKTtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudHM6IGN1cnJlbnR9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoICsgJ3B4J1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bExpbmVWaWV3XCIgc3R5bGU9e3dyYXBwZXJTdHlsZX0gb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsSG91cnNcIiBzdHlsZT17e2hlaWdodDogdGhpcy5zdGF0ZS5saW5lSGVpZ2h0fX0+XG4gICAgICAgICAge3RoaXMuc3RhdGUuaG91cnN9XG4gICAgICAgICAge3RoaXMuc3RhdGUuZXZlbnRzLm1hcChldmVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RXZlbnRcbiAgICAgICAgICAgICAgICBrZXk9e2V2ZW50LnRpbWVTcGFuLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgY29sb3I9e2V2ZW50LmNvbG9yfVxuICAgICAgICAgICAgICAgIHRpbWVTcGFuPXtldmVudC50aW1lU3Bhbn1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PXtldmVudC5kaXNwbGF5fVxuICAgICAgICAgICAgICAgIGxpbmU9e3RoaXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5MaW5lLnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgd2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbiAgbGluZUlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBldmVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAvL1RPRE8g5b6q55Kw5Y+C54Wn44Gr44Gq44KL44Gu44GnaW1wb3J044Gn44GN44Ga44CC44Go44KK44GC44GI44GaYW5544Gn44GU44G+44GL44GX44Gm44G+44GZ44CCXG4gIHRpbWVsaW5lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGluZS5qc3hcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lc1xue1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMubGluZXMgPSB7fTtcbiAgfVxuXG4gIHNldExpbmUobGluZUlkLCBsaW5lKXtcbiAgICB0aGlzLmxpbmVzW2xpbmVJZF0gPSBsaW5lO1xuICB9XG5cbiAgYWRkRXZlbnRzKGV2ZW50cyl7XG4gICAgY29uc3QgbGluZUV2ZW50cyA9IHt9O1xuICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmKGxpbmVFdmVudHNbZXZlbnQubGluZUlkXSA9PSB1bmRlZmluZWQpe1xuICAgICAgICBsaW5lRXZlbnRzW2V2ZW50LmxpbmVJZF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgbGluZUV2ZW50c1tldmVudC5saW5lSWRdLnB1c2goZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgZm9yKHZhciBsaW5lSWQgaW4gbGluZUV2ZW50cyl7XG4gICAgICB0aGlzLmxpbmVzW2xpbmVJZF0uYWRkRXZlbnRzKGxpbmVFdmVudHNbbGluZUlkXSk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzc2VzL0xpbmVzLmVzNlxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxcbntcbiAgc3RhdGljIGdldCB3aW5kb3dTaXplKCl7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4ge3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICAvL01pblZpZXfjga/kuIDmmYLplpPkuIvjgavkvZnliIbjgYznlJ/miJDjgZXjgozjgovjga7jgac2MOWIhuODl+ODqeOCuVxuICAgIHRoaXMubGluZVRpbWVTcGFuID0gY29uZmlnLmxpbmVUaW1lU3Bhbi5hZGRNaW4oNjApO1xuXG4gICAgLy9taW5WaWV344GM44GE44GP44Gk44GC44KL44GL44Kr44Km44Oz44OI44CCbWluVmlld+OBrzE15YiG44GK44GNXG4gICAgY29uc3QgbWluVmlld0NvdW50ID0gKHRoaXMubGluZVRpbWVTcGFuLmdldERpc3RhbmNlKCkgLyAxNSk7XG5cbiAgICAvL+mrmOOBleOCkuioiOeul+OAgmJvcmRlcuWIhjFweOi2s+OBmVxuICAgIHRoaXMubGluZUhlaWdodCA9IG1pblZpZXdDb3VudCAqIChjb25maWcubWluSGVpZ2h0ICsgMSk7XG5cbiAgICAvLzHliIbjgYLjgZ/jgorjga7pq5jjgZXjgpLnrpflh7pcbiAgICB0aGlzLnBlck1pbkhlaWdodCA9IHRoaXMubGluZUhlaWdodCAvIHRoaXMubGluZVRpbWVTcGFuLmdldERpc3RhbmNlKCk7XG4gIH1cblxuICB0aW1lU3BhblRvSGVpZ2h0KHRpbWVTcGFuKXtcbiAgICByZXR1cm4gKHRpbWVTcGFuLmdldERpc3RhbmNlKCkgKiB0aGlzLnBlck1pbkhlaWdodCkgLSAxO1xuICB9XG5cbiAgdGltZVRvVG9wKHRpbWUpe1xuICAgIHJldHVybiB0aGlzLmxpbmVUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXN0YW5jZSh0aW1lKSAqIHRoaXMucGVyTWluSGVpZ2h0O1xuICB9XG5cbiAgdG9wVG9UaW1lKHRvcCl7XG4gICAgcmV0dXJuIHRoaXMubGluZVRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmFkZE1pbih0b3AgLyB0aGlzLnBlck1pbkhlaWdodCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvVXRpbC5lczZcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG91cnM6IFtdXG4gICAgfVxuICAgIHRoaXMucHJvcHMudGltZVNwYW4uZWFjaFRpbWUoKGtleSwgdGltZSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIC8vYm9yZGVyMXB444KS6Laz44GZXG4gICAgICAgIGhlaWdodDogKHRoaXMucHJvcHMubWluSGVpZ2h0ICsgMSkgKiA0XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLmhvdXJzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXt0aW1lLmdldEhvdXIoKX0gc3R5bGU9e3N0eWxlfT57dGltZS5nZXREaXNwbGF5SG91cigpfTwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsUnVsZXJWaWV3XCI+e3RoaXMuc3RhdGUuaG91cnN9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SdWxlci5wcm9wVHlwZXMgPSB7XG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUnVsZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lIGZyb20gJy4uL2NsYXNzZXMvVGltZSdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1pbnV0ZXM6IFtdXG4gICAgfVxuXG4gICAgY29uc3QgbWluU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMubWluSGVpZ2h0ICsgJ3B4J1xuICAgIH1cbiAgICBUaW1lLmVhY2hNaW4oKGtleSwgbWluKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLm1pbnV0ZXMucHVzaChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17bWlufVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxNaW5WaWV3JywgJ18nICsgKG1pbiArIDE1KSl9XG4gICAgICAgICAgc3R5bGU9e21pblN0eWxlfVxuICAgICAgICA+Jm5ic3A7PC9kaXY+XG4gICAgICApO1xuICAgIH0sIDE1KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxIb3VyVmlld1wiPnt0aGlzLnN0YXRlLm1pbnV0ZXN9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ib3VyLnByb3BUeXBlcyA9IHtcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWUpLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSG91ci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMubGluZSA9IHRoaXMucHJvcHMubGluZTtcbiAgICB0aGlzLmxpbmUuZXZlbnRzLmFkZEV2ZW50KHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5saW5lLnRpbWVsaW5lLnV0aWwudGltZVNwYW5Ub0hlaWdodCh0aGlzLnByb3BzLnRpbWVTcGFuKSxcbiAgICAgIHRvcDogMCxcbiAgICAgIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBjb25zdCB0YXJnZXRUb3AgPSB0aGlzLmxpbmUudGltZWxpbmUudXRpbC50aW1lVG9Ub3AodGhpcy5wcm9wcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSk7XG4gICAgdGhpcy5pbml0aWFsQm91bmRzID0gdGhpcy5yZWZzLmV2ZW50RWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnNldFN0YXRlKHt0b3A6IC10aGlzLmluaXRpYWxCb3VuZHMudG9wICsgdGFyZ2V0VG9wICsgdGhpcy5yZWZzLmV2ZW50RWxlbS5wYXJlbnRFbGVtZW50Lm9mZnNldFRvcH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0b3A6IHRoaXMuc3RhdGUudG9wICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5jb2xvclxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJldmVudEVsZW1cIiBjbGFzc05hbWU9XCJ0bEV2ZW50Vmlld1wiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICZuYnNwO1xuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5FdmVudC5wcm9wVHlwZXMgPSB7XG4gIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbiAgY29sb3I6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLy9UT0RPIOW+queSsOWPgueFp+OBq+OBquOCi+OBruOBp2ltcG9ydOOBp+OBjeOBmuOAguOBqOOCiuOBguOBiOOBmmFueeOBp+OBlOOBvuOBi+OBl+OBpuOBvuOBmeOAglxuICBsaW5lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRXZlbnQuanN4XG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRzXG57XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgfVxuXG4gIGFkZEV2ZW50KGV2ZW50KXtcbiAgICB0aGlzLmV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgfVxuXG4gIGZpbmQoY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLmV2ZW50cy5maW5kKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3Nlcy9FdmVudHMuZXM2XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==