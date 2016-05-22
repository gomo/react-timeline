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
	    onClick: function onClick(data) {
	      if (data.event) {
	        data.toFloat();
	      }
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
	
	var _Ruler = __webpack_require__(12);
	
	var _Ruler2 = _interopRequireDefault(_Ruler);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Lines = __webpack_require__(13);
	
	var _Lines2 = _interopRequireDefault(_Lines);
	
	var _Util = __webpack_require__(14);
	
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
	      wrapperHeight: 0
	    };
	
	    _this.lines = new _Lines2.default();
	    _this.util = new _Util2.default({
	      lineTimeSpan: _this.props.timeSpan,
	      minHeight: _this.props.minHeight
	    });
	
	    var rulerInterval = 4;
	
	    _this.frameWidth = 0;
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
	
	        _this.frameWidth += _Ruler2.default.width;
	
	        labelClass.tlHasRuler = true;
	      } else if (currentKey === rulerInterval - 1) {
	        labelClass.tlPrevRuler = true;
	      }
	
	      //一番最後はラベルの右側の角を丸める
	      if (index == props.lineData.length - 1) {
	        labelClass.tlPrevRuler = true;
	      }
	
	      _this.state.labels.push(_react2.default.createElement(
	        'div',
	        { style: { width: _this.props.lineWidth, marginLeft: labelClass.tlHasRuler ? _Ruler2.default.width + 'px' : 0 }, className: (0, _classnames2.default)(labelClass), key: index },
	        data.label
	      ));
	
	      _this.state.lines.push(_react2.default.createElement(_Line2.default, {
	        label: data.label,
	        key: data.id,
	        lineId: data.id,
	        width: _this.props.lineWidth,
	        height: _this.util.lineHeight,
	        minHeight: _this.props.minHeight,
	        timeSpan: _this.props.timeSpan,
	        onClick: _this.props.onClick,
	        even: index % 2 !== 0,
	        timeline: _this
	      }));
	
	      _this.frameWidth += _this.props.lineWidth;
	    });
	
	    return _this;
	  }
	
	  _createClass(Timeline, [{
	    key: 'fitToWindow',
	    value: function fitToWindow() {
	      var wrapperBounds = this.refs.linesWrapper.getBoundingClientRect();
	      var windowSize = _Util2.default.windowSize;
	      this.setState({ wrapperHeight: windowSize.height - wrapperBounds.top });
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
	        { className: 'tlFrameView', style: { width: this.frameWidth + 'px' } },
	        _react2.default.createElement(
	          'div',
	          { className: 'tlLabelView' },
	          this.state.labels
	        ),
	        _react2.default.createElement(
	          'div',
	          { ref: 'linesWrapper', className: 'tlLinesWrapper', style: { height: this.state.wrapperHeight } },
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
	
	var _Hour = __webpack_require__(8);
	
	var _Hour2 = _interopRequireDefault(_Hour);
	
	var _Event = __webpack_require__(10);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _Events = __webpack_require__(11);
	
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
	      events: []
	    };
	    _this.props.timeSpan.eachTime(function (key, time) {
	      _this.state.hours.push(_react2.default.createElement(_Hour2.default, {
	        key: time.getHour(),
	        time: time,
	        minHeight: _this.props.minHeight
	      }));
	    });
	
	    _this.wrapperStyle = {
	      width: _this.props.width + 'px',
	      height: _this.props.height + 'px',
	      position: 'relative'
	    };
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
	          _this2.props.onClick({
	            click: e,
	            line: _this2,
	            event: event
	          });
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
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'tlLineView', style: this.wrapperStyle, onClick: function onClick(e) {
	            return _this3.onClick(e);
	          } },
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
	
	var Event = function (_React$Component) {
	  _inherits(Event, _React$Component);
	
	  function Event(props) {
	    _classCallCheck(this, Event);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Event).call(this, props));
	
	    _this.line = _this.props.line;
	    _this.line.events.addEvent(_this);
	
	    _this.state = {
	      height: _this.line.timeline.util.timeSpanToHeight(_this.props.timeSpan),
	      top: _this.line.timeline.util.timeToTop(_this.props.timeSpan.getStartTime()),
	      color: _this.props.color
	    };
	    return _this;
	  }
	
	  _createClass(Event, [{
	    key: 'toFloat',
	    value: function toFloat() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = {
	        height: this.state.height,
	        position: 'absolute',
	        top: this.state.top + 'px',
	        width: this.line.props.width - 2 + 'px',
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
/* 11 */
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

/***/ },
/* 12 */
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
	        { className: 'tlRulerView', style: { width: Ruler.width + 'px' } },
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
	
	Ruler.width = 30;

/***/ },
/* 13 */
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
/* 14 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGNiMmQ0M2MyMDYyZTI3ZmZiYmQiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib3VyLmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0V2ZW50cy5lczYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUnVsZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0xpbmVzLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9VdGlsLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFHQSxRQUFPLE1BQVAsR0FBZ0IsWUFBTTs7QUFFcEIsT0FBTSxXQUFXLENBQ2YsRUFBQyxPQUFNLFFBQVAsRUFBaUIs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RUFBbUI7QUFBQTs7O0FBRWpCLFVBQUssWUFBTCxHQUFvQixPQUFPLFlBQVAsQ0FBb0IsTUFBcEIsQ0FBMkIsRUFBM0IsQ0FBcEI7OztBQUdBLFNBQU0sZUFBZ0IsS0FBSyxZQUFMLENBQWtCLFdBQWxCLEtBQWtDLEVBQXhEOzs7QUFHQSxVQUFLLFVBQUwsR0FBa0IsZ0JBQWdCLE9BQU8sU0FBUCxHQUFtQixDQUFuQyxDQUFsQjs7O0FBR0EsVUFBSyxZQUFMLEdBQW9CLEtBQUssVUFBTCxHQUFrQixLQUFLLFlBQUwsQ0FBa0IsV0FBbEIsRUFBdEM7QUFDRDs7OztzQ0FFZ0IsUSxFQUFTO0FBQ3hCLGNBQVEsU0FBUyxXQUFULEtBQXlCLEtBQUssWUFBL0IsR0FBK0MsQ0FBdEQ7QUFDRDs7OytCQUVTLEksRUFBSztBQUNiLGNBQU8sS0FBSyxZQUFMLENBQWtCLFlBQWxCLEdBQWlDLFdBQWpDLENBQTZDLElBQTdDLElBQXFELEtBQUssWUFBakU7QUFDRDs7OytCQUVTLEcsRUFBSTtBQUNaLGNBQU8sS0FBSyxZQUFMLENBQWtCLFlBQWxCLEdBQWlDLE1BQWpDLENBQXdDLE1BQU0sS0FBSyxZQUFuRCxDQUFQO0FBQ0Q7Ozs7OzttQkF0Q2tCLEkiLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDRjYjJkNDNjMjA2MmUyN2ZmYmJkXG4gKiovIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3BhbiwgQWN0aW9uc30gZnJvbSAnLi4vaW5kZXguZXM2JztcblxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXG4gIGNvbnN0IGxpbmVEYXRhID0gW1xuICAgIHtsYWJlbDonbGFiZWwxJywgaWQ6J19fMSd9LFxuICAgIHtsYWJlbDonbGFiZWwyJywgaWQ6J19fMid9LFxuICAgIHtsYWJlbDonbGFiZWwzJywgaWQ6J19fMyd9LFxuICAgIHtsYWJlbDonbGFiZWw0JywgaWQ6J19fNCd9LFxuICAgIHtsYWJlbDonbGFiZWw1JywgaWQ6J19fNSd9LFxuICAgIHtsYWJlbDonbGFiZWw2JywgaWQ6J19fNid9LFxuICAgIHtsYWJlbDonbGFiZWw3JywgaWQ6J19fNyd9LFxuICAgIHtsYWJlbDonbGFiZWw4JywgaWQ6J19fOCd9LFxuICAgIHtsYWJlbDonbGFiZWw5JywgaWQ6J19fOSd9LFxuICAgIHtsYWJlbDonbGFiZWwxMCcsIGlkOidfXzEwJ30sXG4gICAge2xhYmVsOidsYWJlbDExJywgaWQ6J19fMTEnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTInLCBpZDonX18xMid9LFxuICAgIHtsYWJlbDonbGFiZWwxMycsIGlkOidfXzEzJ30sXG4gICAge2xhYmVsOidsYWJlbDE0JywgaWQ6J19fMTQnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTUnLCBpZDonX18xNSd9XG4gIF07XG5cbiAgY29uc3QgdGltZVNwYW4gPSBUaW1lU3Bhbi5jcmVhdGUoWzEwLCAwXSwgWzI1LCAwXSk7XG5cbiAgdmFyIHRpbWVsaW5lID0gUmVhY3RET00ucmVuZGVyKFxuICAgIDxUaW1lbGluZVxuICAgICAgbGluZURhdGE9e2xpbmVEYXRhfVxuICAgICAgdGltZVNwYW49e3RpbWVTcGFufVxuICAgICAgbGluZVdpZHRoPXs2Mn1cbiAgICAgIG1pbkhlaWdodD17MTd9XG4gICAgICBvbkNsaWNrPXsoZGF0YSkgPT4ge1xuICAgICAgICBpZihkYXRhLmV2ZW50KXtcbiAgICAgICAgICBkYXRhLnRvRmxvYXQoKTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZWxpbmUnKVxuICApO1xuXG4gIHRpbWVsaW5lLmxpbmVzLmFkZEV2ZW50cyhbXG4gICAge2xpbmVJZDogJ19fMicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAwXSwgWzEyLCAwXSksIGNvbG9yOiAnI0ZGQjZCNid9LFxuICAgIHtsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMywgNTBdLCBbMTQsIDMwXSksIGNvbG9yOiAnI0I4RjFBQyd9LFxuICAgIHtsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J31cbiAgXSk7XG5cbiAgdGltZWxpbmUubGluZXMuYWRkRXZlbnRzKFtcbiAgICB7bGluZUlkOiAnX18zJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTMsIDBdLCBbMTQsIDBdKSwgY29sb3I6ICcjRkZCNkI2J30sXG4gICAge2xpbmVJZDogJ19fMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAxNV0sIFsxNSwgMzBdKSwgY29sb3I6ICcjQjhGMUFDJ31cbiAgXSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGUvYXBwLmpzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZSc7XG5pbXBvcnQgVGltZSBmcm9tICcuL3NyYy9jbGFzc2VzL1RpbWUnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4vc3JjL2NsYXNzZXMvVGltZVNwYW4nO1xuXG5leHBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3Bhbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguZXM2XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5pbXBvcnQgUnVsZXIgZnJvbSAnLi9SdWxlcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBMaW5lcyBmcm9tICcuLi9jbGFzc2VzL0xpbmVzJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NsYXNzZXMvVXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaW5lczogW10sXG4gICAgICBsYWJlbHM6IFtdLFxuICAgICAgd3JhcHBlckhlaWdodDogMFxuICAgIH1cblxuICAgIHRoaXMubGluZXMgPSBuZXcgTGluZXMoKTtcbiAgICB0aGlzLnV0aWwgPSBuZXcgVXRpbCh7XG4gICAgICBsaW5lVGltZVNwYW46IHRoaXMucHJvcHMudGltZVNwYW4sXG4gICAgICBtaW5IZWlnaHQ6IHRoaXMucHJvcHMubWluSGVpZ2h0XG4gICAgfSk7XG5cbiAgICBjb25zdCBydWxlckludGVydmFsID0gNDtcblxuICAgIHRoaXMuZnJhbWVXaWR0aCA9IDA7XG4gICAgLy9UT0RPIOW+jOOBi+OCiei/veWKoOOBp+OBjeOCi+anmOOBq+ODoeOCveODg+ODieOBq+aKveWHulxuICAgIHByb3BzLmxpbmVEYXRhLmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbENsYXNzID0ge3RsTGFiZWw6IHRydWUsIHRsSGFzUnVsZXI6IGZhbHNlLCB0bFByZXZSdWxlcjogZmFsc2V9XG4gICAgICBjb25zdCBjdXJyZW50S2V5ID0gaW5kZXggJSBydWxlckludGVydmFsO1xuICAgICAgaWYoY3VycmVudEtleSA9PT0gMCl7XG4gICAgICAgIHRoaXMuc3RhdGUubGluZXMucHVzaChcbiAgICAgICAgICA8UnVsZXJcbiAgICAgICAgICAgIGtleT17J3J1bGVyXycgKyBpbmRleH1cbiAgICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5wcm9wcy50aW1lU3Bhbn1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZnJhbWVXaWR0aCArPSBSdWxlci53aWR0aDtcblxuICAgICAgICBsYWJlbENsYXNzLnRsSGFzUnVsZXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmKGN1cnJlbnRLZXkgPT09IHJ1bGVySW50ZXJ2YWwgLSAxKSB7XG4gICAgICAgIGxhYmVsQ2xhc3MudGxQcmV2UnVsZXIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvL+S4gOeVquacgOW+jOOBr+ODqeODmeODq+OBruWPs+WBtOOBruinkuOCkuS4uOOCgeOCi1xuICAgICAgaWYoaW5kZXggPT0gcHJvcHMubGluZURhdGEubGVuZ3RoIC0gMSl7XG4gICAgICAgIGxhYmVsQ2xhc3MudGxQcmV2UnVsZXIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXRlLmxhYmVscy5wdXNoKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IHRoaXMucHJvcHMubGluZVdpZHRoLCBtYXJnaW5MZWZ0OiBsYWJlbENsYXNzLnRsSGFzUnVsZXIgPyBSdWxlci53aWR0aCArICdweCcgOiAwfX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGxhYmVsQ2xhc3MpfSBrZXk9e2luZGV4fT57ZGF0YS5sYWJlbH08L2Rpdj5cbiAgICAgICk7XG5cbiAgICAgIHRoaXMuc3RhdGUubGluZXMucHVzaChcbiAgICAgICAgPExpbmVcbiAgICAgICAgICBsYWJlbD17ZGF0YS5sYWJlbH1cbiAgICAgICAgICBrZXk9e2RhdGEuaWR9XG4gICAgICAgICAgbGluZUlkPXtkYXRhLmlkfVxuICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLmxpbmVXaWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e3RoaXMudXRpbC5saW5lSGVpZ2h0fVxuICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgICAgdGltZVNwYW49e3RoaXMucHJvcHMudGltZVNwYW59XG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICAgIGV2ZW49e2luZGV4ICUgMiAhPT0gMH1cbiAgICAgICAgICB0aW1lbGluZT17dGhpc31cbiAgICAgICAgLz5cbiAgICAgICk7XG5cbiAgICAgIHRoaXMuZnJhbWVXaWR0aCArPSB0aGlzLnByb3BzLmxpbmVXaWR0aDtcbiAgICB9KVxuXG5cbiAgfVxuXG4gIGZpdFRvV2luZG93KCl7XG4gICAgY29uc3Qgd3JhcHBlckJvdW5kcyA9IHRoaXMucmVmcy5saW5lc1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgd2luZG93U2l6ZSA9IFV0aWwud2luZG93U2l6ZTtcbiAgICB0aGlzLnNldFN0YXRlKHt3cmFwcGVySGVpZ2h0OiB3aW5kb3dTaXplLmhlaWdodCAtIHdyYXBwZXJCb3VuZHMudG9wfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuZml0VG9XaW5kb3coKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZXZlbnQgPT4ge1xuICAgICAgdGhpcy5maXRUb1dpbmRvdygpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxGcmFtZVZpZXdcIiBzdHlsZT17e3dpZHRoOiB0aGlzLmZyYW1lV2lkdGggKyAncHgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxMYWJlbFZpZXdcIj57dGhpcy5zdGF0ZS5sYWJlbHN9PC9kaXY+XG4gICAgICAgIDxkaXYgcmVmPVwibGluZXNXcmFwcGVyXCIgY2xhc3NOYW1lPVwidGxMaW5lc1dyYXBwZXJcIiBzdHlsZT17e2hlaWdodDogdGhpcy5zdGF0ZS53cmFwcGVySGVpZ2h0fX0+e3RoaXMuc3RhdGUubGluZXN9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblRpbWVsaW5lLnByb3BUeXBlcyA9IHtcbiAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuICBsaW5lRGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkpLmlzUmVxdWlyZWQsXG4gIGxpbmVXaWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBUaW1lIGZyb20gJy4vVGltZSdcbi8qKlxuICog5LiA5bqm55Sf5oiQ44GX44Gf44Kq44OW44K444Kn44Kv44OI44Gv5aSJ5pu044GX44G+44Gb44KT44CCXG4gKiDlpInmm7Tjg6Hjgr3jg4Pjg4njga/mlrDjgZfjgYTjgqrjg5bjgrjjgqfjgq/jg4jjgpLluLDjgZfjgb7jgZnjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNwYW5cbntcbiAgc3RhdGljIGNyZWF0ZShzdGFydCwgZW5kKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4obmV3IFRpbWUoc3RhcnRbMF0sIHN0YXJ0WzFdKSwgbmV3IFRpbWUoZW5kWzBdLCBlbmRbMV0pKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHN0YXJ0VGltZSwgZW5kVGltZSl7XG4gICAgd2hpbGUoc3RhcnRUaW1lLmNvbXBhcmUoZW5kVGltZSkgPj0gMCl7XG4gICAgICAgIGVuZFRpbWUgPSBlbmRUaW1lLmFkZE1pbigyNCAqIDYwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgdGhpcy5fZW5kVGltZSA9IGVuZFRpbWU7XG4gIH1cblxuICBjbG9uZSgpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aGlzLmdldFN0YXJ0VGltZSgpLmNsb25lKCksIHRoaXMuZ2V0RW5kVGltZSgpLmNsb25lKCkpO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKXtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUuZ2V0RGlzdGFuY2UodGhpcy5fZW5kVGltZSk7XG4gIH1cblxuICBnZXRTdGFydFRpbWUoKXsgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZTsgfVxuICBnZXRFbmRUaW1lKCl7IHJldHVybiB0aGlzLl9lbmRUaW1lOyB9XG5cbiAgc2hpZnRFbmRUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lLmFkZE1pbigtdGhpcy5nZXREaXN0YW5jZSgpKSwgdGltZSk7XG4gIH1cblxuICBzaGlmdFN0YXJ0VGltZSh0aW1lKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4odGltZSwgdGltZS5hZGRNaW4odGhpcy5nZXREaXN0YW5jZSgpKSk7XG4gIH1cblxuICBhZGRNaW4obWludXRlKXtcbiAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRoaXMuZ2V0U3RhcnRUaW1lKCksIHRoaXMuZ2V0RW5kVGltZSgpLmFkZE1pbihtaW51dGUpKTtcbiAgfVxuXG4gIGVxdWFscyh0aW1lU3Bhbil7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5lcXVhbHModGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpICYmIHRoaXMuZ2V0RW5kVGltZSgpLmVxdWFscyh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpO1xuICB9XG5cbiAgY29udGFpbnModGltZVNwYW4pe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuY29tcGFyZSh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgPD0gMCAmJiB0aGlzLmdldEVuZFRpbWUoKS5jb21wYXJlKHRpbWVTcGFuLmdldEVuZFRpbWUoKSkgPj0gMDtcbiAgfVxuXG4gIGNvbnRhaW5zVGltZSh0aW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUodGltZSkgPD0gMCAmJiB0aGlzLmdldEVuZFRpbWUoKS5jb21wYXJlKHRpbWUpID49IDA7XG4gIH1cblxuICBvdmVybGFwcyh0aW1lU3Bhbil7XG4gICAgICBpZih0aW1lU3Bhbi5jb250YWlucyh0aGlzKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuY29udGFpbnNUaW1lKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuY29udGFpbnNUaW1lKHRpbWVTcGFuLmdldEVuZFRpbWUoKSkpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBlYWNoSG91cihjYWxsYmFjayl7XG4gICAgICB2YXIgaG91ciA9IHRoaXMuZ2V0U3RhcnRUaW1lKCkuZ2V0SG91cigpO1xuICAgICAgdmFyIGVuZCA9IHRoaXMuZ2V0RW5kVGltZSgpLmdldEhvdXIoKTtcbiAgICAgIHZhciBrZXkgPSAwO1xuXG4gICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICBpZihob3VyID09PSBlbmQpe1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGhvdXIsIGtleSwgaG91ciwgdGhpcy5nZXRFbmRUaW1lKCkuZ2V0TWluKCkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGhvdXIsIGtleSwgaG91cik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaG91ciArPSAxO1xuICAgICAgICAgICsra2V5O1xuICAgICAgfVxuICB9XG5cbiAgZWFjaFRpbWUoY2FsbGJhY2ssIG1pbnV0ZUludGVydmFsKXtcbiAgICAgIHZhciBrZXkgPSAwO1xuICAgICAgbWludXRlSW50ZXJ2YWwgPSBtaW51dGVJbnRlcnZhbCA/IG1pbnV0ZUludGVydmFsIDogNjA7XG5cbiAgICAgIHZhciB0aW1lID0gdGhpcy5nZXRTdGFydFRpbWUoKTtcbiAgICAgIHdoaWxlKHRydWUpe1xuICAgICAgICAgIGlmKHRpbWUuY29tcGFyZSh0aGlzLmdldEVuZFRpbWUoKSkgPiAwKXtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FsbGJhY2suY2FsbCh0aW1lLCBrZXksIHRpbWUpO1xuXG4gICAgICAgICAgdGltZSA9IHRpbWUuYWRkTWluKG1pbnV0ZUludGVydmFsKTtcbiAgICAgICAgICArK2tleTtcbiAgICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCl7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lICsgJ34nICsgdGhpcy5fZW5kVGltZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3Nlcy9UaW1lU3Bhbi5lczZcbiAqKi8iLCIvKipcbiAqIOS4gOW6pueUn+aIkOOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOBr+WkieabtOOBl+OBvuOBm+OCk+OAglxuICog5aSJ5pu044Oh44K944OD44OJ44Gv5paw44GX44GE44Kq44OW44K444Kn44Kv44OI44KS5biw44GX44G+44GZ44CCXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVcbntcbiAgc3RhdGljIGVhY2hNaW4oY2FsbGJhY2ssIG1pbnV0ZUludGVydmFsKXtcbiAgICAgIHZhciBjb3VudCA9IDYwIC8gbWludXRlSW50ZXJ2YWw7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICB2YXIgbWluID0gaSAqIG1pbnV0ZUludGVydmFsO1xuICAgICAgICAgIGlmKG1pbiA8IDYwKXtcbiAgICAgICAgICAgICAgdmFyIGRpc3BsYXlNaW4gPSBtaW4gPCAxMCA/ICcwJyArIG1pbiA6IG1pbiArICcnO1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKG1pbiwgaSwgbWluLCBkaXNwbGF5TWluKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiDphY3liJfjgYvjgolUaW1l44KS55Sf5oiQXG4gICAqIEBwYXJhbSAge2FycmF5fSB0aW1lIFtob3VyLCBtaW5d44Gu6YWN5YiXXG4gICAqIEByZXR1cm4ge1RpbWV9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRpbWVbMF0sIHRpbWVbMV0pO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGhvdXIsIG1pbil7XG4gICAgdGhpcy5faG91ciA9IGhvdXIgPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChob3VyLCAxMCk7XG4gICAgdGhpcy5fbWluID0gbWluID09PSB1bmRlZmluZWQgPyAwIDogcGFyc2VJbnQobWluLCAxMCk7XG4gICAgd2hpbGUodGhpcy5fbWluIDwgMCl7XG4gICAgICAgIC0tdGhpcy5faG91cjtcbiAgICAgICAgdGhpcy5fbWluID0gNjAgKyB0aGlzLl9taW47XG4gICAgfVxuXG4gICAgd2hpbGUodGhpcy5fbWluID4gNTkpe1xuICAgICAgICArK3RoaXMuX2hvdXI7XG4gICAgICAgIHRoaXMuX21pbiA9IHRoaXMuX21pbiAtIDYwO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX2hvdXIgPCAwKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudG9TdHJpbmcoKSsnIGlzIG5vdCB2YWxpZCB0aW1lLicpO1xuICAgIH1cbiAgfVxuXG4gIGdldEhvdXIoKXsgcmV0dXJuIHRoaXMuX2hvdXI7IH07XG4gIGdldE1pbigpeyByZXR1cm4gdGhpcy5fbWluOyB9O1xuXG4gIGNsb25lKCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGhpcy5nZXRIb3VyKCksIHRoaXMuZ2V0TWluKCkpO1xuICB9O1xuXG4gIGFkZE1pbihtaW4pe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRoaXMuZ2V0SG91cigpLCB0aGlzLmdldE1pbigpICsgcGFyc2VJbnQobWluLCAxMCkpO1xuICB9O1xuXG4gIGVxdWFscyh0aW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmdldEhvdXIoKSA9PT0gdGltZS5nZXRIb3VyKCkgJiYgdGhpcy5nZXRNaW4oKSA9PT0gdGltZS5nZXRNaW4oKTtcbiAgfTtcblxuICBjb21wYXJlKHRpbWUpe1xuICAgICAgaWYodGhpcy5nZXRIb3VyKCkgPiB0aW1lLmdldEhvdXIoKSlcbiAgICAgIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodGhpcy5nZXRIb3VyKCkgPCB0aW1lLmdldEhvdXIoKSlcbiAgICAgIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgICAgaWYodGhpcy5nZXRNaW4oKSA+IHRpbWUuZ2V0TWluKCkpXG4gICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZih0aGlzLmdldE1pbigpIDwgdGltZS5nZXRNaW4oKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGdldERpc3RhbmNlKHRhcmdldFRpbWUpe1xuICAgICAgdmFyIHRhcmdldEhvdXIgPSB0YXJnZXRUaW1lLmdldEhvdXIoKTtcbiAgICAgIHZhciBob3VyRGlzdGFuY2UgPSB0YXJnZXRIb3VyIC0gdGhpcy5faG91cjtcbiAgICAgIHJldHVybiAoaG91ckRpc3RhbmNlICogNjApICsgKHRhcmdldFRpbWUuZ2V0TWluKCkgLSB0aGlzLl9taW4pO1xuICB9O1xuXG4gIHRvU3RyaW5nKCl7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXNwbGF5VGltZSgpO1xuICB9O1xuXG4gIGdldERpc3BsYXlIb3VyKCl7XG4gICAgICByZXR1cm4gdGhpcy5faG91ciA8IDI0ID8gdGhpcy5faG91ciA6IHRoaXMuX2hvdXIgLSAyNDtcbiAgfTtcblxuICBnZXREaXNwbGF5TWluKCl7XG4gICAgICByZXR1cm4gdGhpcy5fbWluIDwgMTAgPyAnMCcrdGhpcy5fbWluIDogdGhpcy5fbWluO1xuICB9O1xuXG4gIGdldERpc3BsYXlUaW1lKCl7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXNwbGF5SG91cigpICsnOicrIHRoaXMuZ2V0RGlzcGxheU1pbigpO1xuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNlxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQgSG91ciBmcm9tICcuL0hvdXInO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9jbGFzc2VzL0V2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50aW1lbGluZSA9IHRoaXMucHJvcHMudGltZWxpbmU7XG4gICAgdGhpcy50aW1lbGluZS5saW5lcy5zZXRMaW5lKHRoaXMucHJvcHMubGluZUlkLCB0aGlzKTtcblxuICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdXJzOiBbXSxcbiAgICAgIGV2ZW50czogW11cbiAgICB9XG4gICAgdGhpcy5wcm9wcy50aW1lU3Bhbi5lYWNoVGltZSgoa2V5LCB0aW1lKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLmhvdXJzLnB1c2goXG4gICAgICAgIDxIb3VyXG4gICAgICAgICAga2V5PXt0aW1lLmdldEhvdXIoKX1cbiAgICAgICAgICB0aW1lPXt0aW1lfVxuICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgdGhpcy53cmFwcGVyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCArICdweCcsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0ICsgJ3B4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVUb3AoZSl7XG4gICAgcmV0dXJuIGUuY2xpZW50WSAtIGUuY3VycmVudFRhcmdldC5vZmZzZXRUb3AgKyBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5zY3JvbGxUb3A7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGlmKHRoaXMucHJvcHMub25DbGljayl7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLmdldFJlbGF0aXZlVG9wKGUpO1xuICAgICAgY29uc3QgdGltZSA9IHRoaXMudGltZWxpbmUudXRpbC50b3BUb1RpbWUodG9wKTtcbiAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudHMuZmluZChldmVudCA9PiBldmVudC5wcm9wcy50aW1lU3Bhbi5jb250YWluc1RpbWUodGltZSkpO1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKHtcbiAgICAgICAgY2xpY2s6IGUsXG4gICAgICAgIGxpbmU6IHRoaXMsXG4gICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRzKGV2ZW50cyl7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLmV2ZW50cztcbiAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiBjdXJyZW50LnB1c2goZXZlbnQpKTtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudHM6IGN1cnJlbnR9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsTGluZVZpZXdcIiBzdHlsZT17dGhpcy53cmFwcGVyU3R5bGV9IG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfT5cbiAgICAgICAge3RoaXMuc3RhdGUuaG91cnN9XG4gICAgICAgIHt0aGlzLnN0YXRlLmV2ZW50cy5tYXAoZXZlbnQgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RXZlbnRcbiAgICAgICAgICAgICAga2V5PXtldmVudC50aW1lU3Bhbi50b1N0cmluZygpfVxuICAgICAgICAgICAgICBjb2xvcj17ZXZlbnQuY29sb3J9XG4gICAgICAgICAgICAgIHRpbWVTcGFuPXtldmVudC50aW1lU3Bhbn1cbiAgICAgICAgICAgICAgZGlzcGxheT17ZXZlbnQuZGlzcGxheX1cbiAgICAgICAgICAgICAgbGluZT17dGhpc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGluZS5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4gIGxpbmVJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgZXZlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgLy9UT0RPIOW+queSsOWPgueFp+OBq+OBquOCi+OBruOBp2ltcG9ydOOBp+OBjeOBmuOAguOBqOOCiuOBguOBiOOBmmFueeOBp+OBlOOBvuOBi+OBl+OBpuOBvuOBmeOAglxuICB0aW1lbGluZTogUmVhY3QuUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xpbmUuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lIGZyb20gJy4uL2NsYXNzZXMvVGltZSdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1pbnV0ZXM6IFtdXG4gICAgfVxuXG4gICAgY29uc3QgbWluU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMubWluSGVpZ2h0ICsgJ3B4J1xuICAgIH1cbiAgICBUaW1lLmVhY2hNaW4oKGtleSwgbWluKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLm1pbnV0ZXMucHVzaChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17bWlufVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxNaW5WaWV3JywgJ18nICsgKG1pbiArIDE1KSl9XG4gICAgICAgICAgc3R5bGU9e21pblN0eWxlfVxuICAgICAgICA+Jm5ic3A7PC9kaXY+XG4gICAgICApO1xuICAgIH0sIDE1KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxIb3VyVmlld1wiPnt0aGlzLnN0YXRlLm1pbnV0ZXN9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ib3VyLnByb3BUeXBlcyA9IHtcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWUpLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSG91ci5qc3hcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMubGluZSA9IHRoaXMucHJvcHMubGluZTtcbiAgICB0aGlzLmxpbmUuZXZlbnRzLmFkZEV2ZW50KHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5saW5lLnRpbWVsaW5lLnV0aWwudGltZVNwYW5Ub0hlaWdodCh0aGlzLnByb3BzLnRpbWVTcGFuKSxcbiAgICAgIHRvcDogdGhpcy5saW5lLnRpbWVsaW5lLnV0aWwudGltZVRvVG9wKHRoaXMucHJvcHMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpLFxuICAgICAgY29sb3I6IHRoaXMucHJvcHMuY29sb3JcbiAgICB9XG4gIH1cblxuICB0b0Zsb2F0KCl7XG5cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCArICdweCcsXG4gICAgICB3aWR0aDogdGhpcy5saW5lLnByb3BzLndpZHRoIC0gMiArICdweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuY29sb3JcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwiZXZlbnRFbGVtXCIgY2xhc3NOYW1lPVwidGxFdmVudFZpZXdcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgICAmbmJzcDtcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRXZlbnQucHJvcFR5cGVzID0ge1xuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4gIGNvbG9yOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIC8vVE9ETyDlvqrnkrDlj4Lnhafjgavjgarjgovjga7jgadpbXBvcnTjgafjgY3jgZrjgILjgajjgorjgYLjgYjjgZphbnnjgafjgZTjgb7jgYvjgZfjgabjgb7jgZnjgIJcbiAgbGluZTogUmVhY3QuUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0V2ZW50LmpzeFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50c1xue1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gIH1cblxuICBhZGRFdmVudChldmVudCl7XG4gICAgdGhpcy5ldmVudHMucHVzaChldmVudCk7XG4gIH1cblxuICBmaW5kKGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5ldmVudHMuZmluZChjYWxsYmFjayk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvRXZlbnRzLmVzNlxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob3VyczogW11cbiAgICB9XG4gICAgdGhpcy5wcm9wcy50aW1lU3Bhbi5lYWNoVGltZSgoa2V5LCB0aW1lKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgLy9ib3JkZXIxcHjjgpLotrPjgZlcbiAgICAgICAgaGVpZ2h0OiAodGhpcy5wcm9wcy5taW5IZWlnaHQgKyAxKSAqIDRcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUuaG91cnMucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e3RpbWUuZ2V0SG91cigpfSBzdHlsZT17c3R5bGV9Pnt0aW1lLmdldERpc3BsYXlIb3VyKCl9PC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSdWxlclZpZXdcIiBzdHlsZT17e3dpZHRoOiBSdWxlci53aWR0aCArICdweCd9fT57dGhpcy5zdGF0ZS5ob3Vyc308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJ1bGVyLnByb3BUeXBlcyA9IHtcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZFxufVxuXG5SdWxlci53aWR0aCA9IDMwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9SdWxlci5qc3hcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lc1xue1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMubGluZXMgPSB7fTtcbiAgfVxuXG4gIHNldExpbmUobGluZUlkLCBsaW5lKXtcbiAgICB0aGlzLmxpbmVzW2xpbmVJZF0gPSBsaW5lO1xuICB9XG5cbiAgYWRkRXZlbnRzKGV2ZW50cyl7XG4gICAgY29uc3QgbGluZUV2ZW50cyA9IHt9O1xuICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmKGxpbmVFdmVudHNbZXZlbnQubGluZUlkXSA9PSB1bmRlZmluZWQpe1xuICAgICAgICBsaW5lRXZlbnRzW2V2ZW50LmxpbmVJZF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgbGluZUV2ZW50c1tldmVudC5saW5lSWRdLnB1c2goZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgZm9yKHZhciBsaW5lSWQgaW4gbGluZUV2ZW50cyl7XG4gICAgICB0aGlzLmxpbmVzW2xpbmVJZF0uYWRkRXZlbnRzKGxpbmVFdmVudHNbbGluZUlkXSk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzc2VzL0xpbmVzLmVzNlxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxcbntcbiAgc3RhdGljIGdldCB3aW5kb3dTaXplKCl7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4ge3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICAvL01pblZpZXfjga/kuIDmmYLplpPkuIvjgavkvZnliIbjgYznlJ/miJDjgZXjgozjgovjga7jgac2MOWIhuODl+ODqeOCuVxuICAgIHRoaXMubGluZVRpbWVTcGFuID0gY29uZmlnLmxpbmVUaW1lU3Bhbi5hZGRNaW4oNjApO1xuXG4gICAgLy9taW5WaWV344GM44GE44GP44Gk44GC44KL44GL44Kr44Km44Oz44OI44CCbWluVmlld+OBrzE15YiG44GK44GNXG4gICAgY29uc3QgbWluVmlld0NvdW50ID0gKHRoaXMubGluZVRpbWVTcGFuLmdldERpc3RhbmNlKCkgLyAxNSk7XG5cbiAgICAvL+mrmOOBleOCkuioiOeul+OAgmJvcmRlcuWIhjFweOi2s+OBmVxuICAgIHRoaXMubGluZUhlaWdodCA9IG1pblZpZXdDb3VudCAqIChjb25maWcubWluSGVpZ2h0ICsgMSk7XG5cbiAgICAvLzHliIbjgYLjgZ/jgorjga7pq5jjgZXjgpLnrpflh7pcbiAgICB0aGlzLnBlck1pbkhlaWdodCA9IHRoaXMubGluZUhlaWdodCAvIHRoaXMubGluZVRpbWVTcGFuLmdldERpc3RhbmNlKCk7XG4gIH1cblxuICB0aW1lU3BhblRvSGVpZ2h0KHRpbWVTcGFuKXtcbiAgICByZXR1cm4gKHRpbWVTcGFuLmdldERpc3RhbmNlKCkgKiB0aGlzLnBlck1pbkhlaWdodCkgLSAxO1xuICB9XG5cbiAgdGltZVRvVG9wKHRpbWUpe1xuICAgIHJldHVybiB0aGlzLmxpbmVUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXN0YW5jZSh0aW1lKSAqIHRoaXMucGVyTWluSGVpZ2h0O1xuICB9XG5cbiAgdG9wVG9UaW1lKHRvcCl7XG4gICAgcmV0dXJuIHRoaXMubGluZVRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmFkZE1pbih0b3AgLyB0aGlzLnBlck1pbkhlaWdodCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvVXRpbC5lczZcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9