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
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function getWindowSize() {
	  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	
	  return { width: width, height: height };
	}
	
	function calcHeight(timelineElement) {
	  var wrapperBounds = timelineElement.getBoundingClientRect();
	  var windowSize = getWindowSize();
	  return windowSize.height - wrapperBounds.top;
	}
	
	window.onload = function () {
	
	  var menu = _reactDom2.default.render(React.createElement(_index.Menu, {
	    items: [{
	      name: function name(context) {
	        return 'float';
	      },
	      onClick: function onClick(context) {
	        context.component.actions.float();
	      },
	      show: function show(context) {
	        return context.component.actions.isFixed();
	      }
	    }, {
	      name: function name(context) {
	        return 'resize';
	      },
	      onClick: function onClick(context) {
	        context.component.actions.resize();
	      },
	      show: function show(context) {
	        return context.component.actions.isFixed();
	      }
	    }, _defineProperty({
	      name: function name(context) {
	        return 'cancel';
	      },
	      onClick: function onClick(context) {
	        context.component.actions.cancel();
	      },
	      show: function show(context) {
	        return !context.component.actions.isFixed();
	      }
	    }, 'onClick', function onClick(context) {
	      if (context.component.actions.isCancelable()) {
	        context.component.actions.cancel();
	      } else {
	        alert('You can\'t cancel!');
	      }
	    }), {
	      name: function name(context) {
	        return 'fix';
	      },
	      onClick: function onClick(context) {
	        if (context.component.actions.isFixable()) {
	          context.component.actions.fix();
	        } else {
	          alert('You can\'t fix!');
	        }
	      },
	      show: function show(context) {
	        return !context.component.actions.isFixed();
	      }
	    }],
	    zIndex: 1000
	  }), document.getElementById('menu'));
	
	  var lineData = [{ label: 'label1', id: '__1' }, { label: 'label2', id: '__2' }, { label: 'label3', id: '__3' }, { label: 'label4', id: '__4' }, { label: 'label5', id: '__5' }, { label: 'label6', id: '__6' }, { label: 'label7', id: '__7' }, { label: 'label8', id: '__8' }, { label: 'label9', id: '__9' }, { label: 'label10', id: '__10' }, { label: 'label11', id: '__11' }, { label: 'label12', id: '__12' }, { label: 'label13', id: '__13' }, { label: 'label14', id: '__14' }, { label: 'label15', id: '__15' }, { label: 'label16', id: '__16' }, { label: 'label17', id: '__17' }, { label: 'label18', id: '__18' }];
	
	  var timeSpan = _index.TimeSpan.create([10, 0], [25, 0]);
	  var timelineElement = document.getElementById('timeline');
	  var timeline = _reactDom2.default.render(React.createElement(_index.Timeline, {
	    lineData: lineData,
	    timeSpan: timeSpan,
	    lineWidth: 62,
	    minHeight: 17,
	    minInterval: 5,
	    rulerInterval: 4,
	    height: calcHeight(timelineElement),
	    onClickLine: function onClickLine(data) {
	      console.log('left', data);
	    },
	    onRightClickLine: function onRightClickLine(data) {
	      console.log('right', data);
	    },
	    onClickEvent: function onClickEvent(data) {
	      console.log('left', data);
	    },
	    onRightClickEvent: function onRightClickEvent(data) {
	      data.event.preventDefault();
	      menu.show({ top: data.event.clientY, left: data.event.clientX }, data);
	    }
	  }), timelineElement);
	
	  window.onresize = function () {
	    timeline.actions.setHeight(calcHeight(timelineElement));
	  };
	
	  timeline.actions.addEvents([{
	    lineId: '__1',
	    timeSpan: _index.TimeSpan.create([11, 0], [12, 0]),
	    color: '#FFB6B6',
	    display: [{ key: 'startTime', value: '11:00' }, { key: 'type', value: 'foobar' }, { key: 'memo', value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' }]
	  }]);
	
	  timeline.actions.addEvents([{ lineId: '__2', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { lineId: '__2', timeSpan: _index.TimeSpan.create([11, 0], [12, 0]), color: '#FFB6B6' }, { lineId: '__2', timeSpan: _index.TimeSpan.create([13, 50], [14, 30]), color: '#B8F1AC' }]);
	
	  timeline.actions.addEvents([{ lineId: '__3', timeSpan: _index.TimeSpan.create([13, 0], [14, 0]), color: '#FFB6B6' }, { lineId: '__3', timeSpan: _index.TimeSpan.create([14, 15], [15, 30]), color: '#B8F1AC' }]);
	
	  timeline.actions.addEvents([{ lineId: '__5', timeSpan: _index.TimeSpan.create([12, 0], [14, 0]), color: '#FFB6B6' }]);
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
	exports.Menu = exports.TimeSpan = exports.Time = exports.Timeline = undefined;
	
	var _Timeline = __webpack_require__(3);
	
	var _Timeline2 = _interopRequireDefault(_Timeline);
	
	var _Menu = __webpack_require__(148);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Time = __webpack_require__(6);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	var _TimeSpan = __webpack_require__(5);
	
	var _TimeSpan2 = _interopRequireDefault(_TimeSpan);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Timeline = _Timeline2.default;
	exports.Time = _Time2.default;
	exports.TimeSpan = _TimeSpan2.default;
	exports.Menu = _Menu2.default;

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
	
	var _TimelineActions = __webpack_require__(7);
	
	var _TimelineActions2 = _interopRequireDefault(_TimelineActions);
	
	var _Frame = __webpack_require__(141);
	
	var _Frame2 = _interopRequireDefault(_Frame);
	
	var _Ruler = __webpack_require__(144);
	
	var _Ruler2 = _interopRequireDefault(_Ruler);
	
	var _Line = __webpack_require__(142);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Timeline = function (_React$Component) {
	  _inherits(Timeline, _React$Component);
	
	  function Timeline(props) {
	    _classCallCheck(this, Timeline);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Timeline).call(this, props));
	
	    _this.actions = new _TimelineActions2.default(_this);
	
	    //MinViewは一時間下に余分が生成されるので60分プラス
	    _this.timeSpan = _this.props.timeSpan.addMin(60);
	
	    //minViewがいくつあるかカウント。minViewは15分おき。それを元に高さを計算。border分1px足す
	    _this.lineHeight = _this.timeSpan.getDistance() / 15 * (_this.props.minHeight + 1);
	
	    //1分あたりの高さを算出
	    _this.perMinHeight = _this.lineHeight / _this.timeSpan.getDistance();
	
	    _this.lineWidth = props.lineWidth;
	
	    _this.frameComponent = null;
	    _this.createdEventId = 0;
	    _this.draggingOverLineConponent = null;
	    _this.lineComponents = [];
	    _this.eventComponents = [];
	    _this.lineLabelComponents = [];
	    return _this;
	  }
	
	  _createClass(Timeline, [{
	    key: 'createEventId',
	    value: function createEventId() {
	      return 'new_' + ++this.createdEventId;
	    }
	  }, {
	    key: 'draggingOver',
	    value: function draggingOver(left) {
	      var lineComponent = this.findLineByLeft(left);
	      if (lineComponent && this.draggingOverLineConponent !== lineComponent) {
	        if (this.draggingOverLineConponent) {
	          this.draggingOverLineConponent.clearDraggingOver();
	        }
	        this.draggingOverLineConponent = lineComponent;
	        this.draggingOverLineConponent.draggingOver();
	      }
	
	      return lineComponent;
	    }
	  }, {
	    key: 'clearDraggingOver',
	    value: function clearDraggingOver() {
	      if (this.draggingOverLineConponent) {
	        this.draggingOverLineConponent.clearDraggingOver();
	      }
	    }
	  }, {
	    key: 'getTotalWidth',
	    value: function getTotalWidth() {
	      var _this2 = this;
	
	      return this.lineComponents.reduce(function (val, line) {
	        return val + (line.props.hasRuler ? _this2.lineWidth + _Ruler2.default.width : _this2.lineWidth);
	      }, 0);
	    }
	  }, {
	    key: 'addEventComponent',
	    value: function addEventComponent(event) {
	      this.eventComponents.push(event);
	    }
	  }, {
	    key: 'findEventById',
	    value: function findEventById(eventId) {
	      return this.eventComponents.find(function (ev) {
	        return ev.props.id == eventId;
	      });
	    }
	  }, {
	    key: 'findLineByLeft',
	    value: function findLineByLeft(left) {
	      var _this3 = this;
	
	      var width = 0;
	      return this.lineComponents.find(function (line) {
	        width += line.props.hasRuler ? _this3.props.lineWidth + _Ruler2.default.width : _this3.props.lineWidth;
	        if (left < width) {
	          return line;
	        }
	      });
	    }
	  }, {
	    key: 'getLineLeft',
	    value: function getLineLeft(lineId) {
	      var left = 0;
	
	      for (var i = 0; i < this.lineComponents.length; i++) {
	        var line = this.lineComponents[i];
	        if (line.props.hasRuler) {
	          left += _Ruler2.default.width;
	        }
	
	        if (line.props.lineId == lineId) {
	          break;
	        }
	
	        left += this.props.lineWidth;
	      }
	
	      left += _Line2.default.sidePadding;
	
	      return left;
	    }
	  }, {
	    key: 'addLineComponent',
	    value: function addLineComponent(line) {
	      this.lineComponents.push(line);
	    }
	  }, {
	    key: 'addLineLabelComponent',
	    value: function addLineLabelComponent(line) {
	      this.lineLabelComponents.push(line);
	    }
	  }, {
	    key: 'getTimeSpan',
	    value: function getTimeSpan(top, height) {
	      var startTime = this.topToTime(top);
	
	      var endTime = startTime.addMin(height / this.perMinHeight);
	      return new _TimeSpan2.default(startTime, endTime);
	    }
	  }, {
	    key: 'timeSpanToHeight',
	    value: function timeSpanToHeight(timeSpan) {
	      return timeSpan.getDistance() * this.perMinHeight - 1;
	    }
	  }, {
	    key: 'timeToTop',
	    value: function timeToTop(time) {
	      return this.timeSpan.getStartTime().getDistance(time) * this.perMinHeight;
	    }
	  }, {
	    key: 'topToTime',
	    value: function topToTime(top) {
	      if (top <= 0) {
	        return this.timeSpan.getStartTime();
	      }
	      var minute = top / this.perMinHeight;
	      var rest = minute % this.props.minInterval;
	      if (rest !== 0) {
	        if (rest > this.props.minInterval / 2) {
	          minute += this.props.minInterval - rest;
	        } else {
	          minute -= rest;
	        }
	      }
	      return this.timeSpan.getStartTime().addMin(minute);
	    }
	  }, {
	    key: 'findPrevEvent',
	    value: function findPrevEvent(eventComponent) {
	      return this.eventComponents.filter(function (ev) {
	        return !ev.state.draggable && ev.lineId == eventComponent.lineId;
	      }) //同じ列のものだけに絞る
	      .sort(function (a, b) {
	        return -a.currentTimeSpan.getStartTime().compare(b.currentTimeSpan.getStartTime());
	      }) //時間の降順で並び替え
	      .find(function (ev) {
	        return ev.currentTimeSpan.getEndTime().compare(eventComponent.currentTimeSpan.getStartTime()) <= 0;
	      }) //降順なので対象より最初に開始時間が若いものがprev
	      ;
	    }
	  }, {
	    key: 'getPrevBottom',
	    value: function getPrevBottom(eventComponent) {
	      var prevEvent = this.findPrevEvent(eventComponent);
	      var bottomTime = void 0;
	      if (prevEvent) {
	        bottomTime = prevEvent.currentTimeSpan.getEndTime();
	      } else {
	        bottomTime = this.timeSpan.getStartTime();
	      }
	
	      return this.timeToTop(bottomTime);
	    }
	  }, {
	    key: 'findNextEvent',
	    value: function findNextEvent(eventComponent) {
	      return this.eventComponents.filter(function (ev) {
	        return !ev.state.draggable && ev.lineId == eventComponent.lineId;
	      }) //同じ列のものだけに絞る
	      .sort(function (a, b) {
	        return a.currentTimeSpan.getStartTime().compare(b.currentTimeSpan.getStartTime());
	      }) //時間の昇順で並び替え
	      .find(function (ev) {
	        return ev.currentTimeSpan.getStartTime().compare(eventComponent.currentTimeSpan.getEndTime()) >= 0;
	      }) //昇順なので対象より最初に開始時間が遅いものがnext
	      ;
	    }
	  }, {
	    key: 'getNextTop',
	    value: function getNextTop(eventComponent) {
	      var nextEvent = this.findNextEvent(eventComponent);
	      var nextTime = void 0;
	      if (nextEvent) {
	        nextTime = nextEvent.currentTimeSpan.getStartTime();
	      } else {
	        nextTime = this.timeSpan.getEndTime();
	      }
	
	      return this.timeToTop(nextTime);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Frame2.default, {
	        lineData: this.props.lineData,
	        timeSpan: this.props.timeSpan,
	        lineWidth: this.props.lineWidth,
	        minHeight: this.props.minHeight,
	        height: this.props.height,
	        timeline: this,
	        rulerInterval: this.props.rulerInterval
	      });
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
	  onClick: _react2.default.PropTypes.func,
	  rulerInterval: _react2.default.PropTypes.number.isRequired,
	  minInterval: _react2.default.PropTypes.number,
	  height: _react2.default.PropTypes.number.isRequired
	};
	
	Timeline.defaultProps = {
	  minInterval: 1
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
	            return this.getStartTime().compare(timeSpan.getStartTime()) < 0 && this.getEndTime().compare(timeSpan.getEndTime()) > 0;
	        }
	    }, {
	        key: 'containsTime',
	        value: function containsTime(time) {
	            return this.getStartTime().compare(time) < 0 && this.getEndTime().compare(time) > 0;
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
	
	var _Event = __webpack_require__(8);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TimelineActions = function () {
	  function TimelineActions(component) {
	    _classCallCheck(this, TimelineActions);
	
	    this.component = component;
	  }
	
	  _createClass(TimelineActions, [{
	    key: 'addEvents',
	    value: function addEvents(events) {
	      this.component.frameComponent.addEvents(events);
	    }
	  }, {
	    key: 'setHeight',
	    value: function setHeight(height) {
	      this.component.frameComponent.setHeight(height);
	    }
	  }]);
	
	  return TimelineActions;
	}();
	
	exports.default = TimelineActions;

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
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _TimeSpan = __webpack_require__(5);
	
	var _TimeSpan2 = _interopRequireDefault(_TimeSpan);
	
	var _reactDnd = __webpack_require__(10);
	
	var _EventBase = __webpack_require__(139);
	
	var _EventBase2 = _interopRequireDefault(_EventBase);
	
	var _EventActions = __webpack_require__(140);
	
	var _EventActions2 = _interopRequireDefault(_EventActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var source = {
	  beginDrag: function beginDrag(props) {
	    return props;
	  },
	  canDrag: function canDrag(props, monitor) {
	    var draggable = props.timeline.findEventById(props.id).state.draggable;
	    return !!draggable;
	  }
	};
	
	var collect = function collect(connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource(),
	    isDragging: monitor.isDragging()
	  };
	};
	
	var Event = function (_React$Component) {
	  _inherits(Event, _React$Component);
	
	  function Event(props) {
	    _classCallCheck(this, Event);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Event).call(this, props));
	
	    _this.state = {
	      height: _this.props.timeline.timeSpanToHeight(_this.props.timeSpan),
	      top: _this.props.timeline.timeToTop(_this.props.timeSpan.getStartTime()),
	      left: _this.props.timeline.getLineLeft(_this.props.lineId),
	      color: _this.props.color,
	      display: _this.props.display,
	      draggable: false,
	      resizable: false,
	      draggingDisplay: ''
	    };
	
	    _this.actions = new _EventActions2.default(_this);
	
	    _this.lineId = _this.props.lineId;
	    _this.timeSpan = _this.props.timeSpan;
	    _this.draggingPosition = null;
	    _this.resizingTimeSpan = null;
	    _this.resizing = false;
	    _this.props.timeline.addEventComponent(_this);
	    return _this;
	  }
	
	  _createClass(Event, [{
	    key: 'isFreePosition',
	
	
	    /**
	     * 他のEventと重なっていないかチェックする
	     * @param  {object}  position {lineId: ***, timeSpan: ***}
	     * @return {Boolean}
	     */
	    value: function isFreePosition(position) {
	      for (var i = 0; i < this.props.timeline.eventComponents.length; i++) {
	        var ev = this.props.timeline.eventComponents[i];
	        if (ev === this) continue;
	        if (ev.lineId != position.lineId) continue;
	        if (ev.currentTimeSpan.overlaps(position.timeSpan)) {
	          return false;
	        }
	      }
	
	      return true;
	    }
	  }, {
	    key: 'moveTo',
	    value: function moveTo(top, left) {
	      this.setState({ top: top, left: left });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.timeline.props.onClickEvent) {
	        if (this.resizing) {
	          return;
	        }
	        this.props.timeline.props.onClickEvent({
	          component: this,
	          event: e
	        });
	      }
	    }
	  }, {
	    key: 'dragging',
	    value: function dragging(time, lineId) {
	      this.draggingPosition = { time: time, lineId: lineId };
	      this.setState({ draggingDisplay: time.getDisplayTime() });
	    }
	  }, {
	    key: 'resizeUp',
	    value: function resizeUp(e) {
	      this.props.timeline.frameComponent.resizeUp(this, e.clientY);
	    }
	  }, {
	    key: 'resizeDown',
	    value: function resizeDown(e) {
	      this.props.timeline.frameComponent.resizeDown(this, e.clientY);
	    }
	  }, {
	    key: 'endResizing',
	    value: function endResizing(e) {
	      var _this2 = this;
	
	      if (this.resizingTimeSpan) {
	        var newState = {
	          draggingDisplay: null,
	          draggingDisplayTop: null
	        };
	
	        if (this.resizingTimeSpan) {
	          newState.top = this.props.timeline.timeToTop(this.resizingTimeSpan.getStartTime());
	          newState.height = this.props.timeline.timeSpanToHeight(this.resizingTimeSpan);
	        }
	
	        this.setState(newState);
	      } else {
	        this.onClick();
	      }
	
	      //onClickよりendResizingの先に発生してしまう。
	      setTimeout(function () {
	        return _this2.resizing = false;
	      }, 100);
	    }
	  }, {
	    key: 'onContextMenu',
	    value: function onContextMenu(e) {
	      if (this.props.timeline.props.onRightClickEvent) {
	        this.props.timeline.props.onRightClickEvent({
	          component: this,
	          event: e
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var style = {
	        height: this.state.height,
	        position: 'absolute',
	        top: this.state.top + 'px',
	        left: this.state.left + 'px',
	        width: this.props.width + 'px',
	        backgroundColor: this.state.color,
	        display: this.props.isDragging ? 'none' : 'block'
	      };
	
	      return this.props.connectDragSource(_react2.default.createElement(
	        'div',
	        { onContextMenu: function onContextMenu(e) {
	            return _this3.onContextMenu(e);
	          }, className: (0, _classnames2.default)('tlEventView', { tlDraggingEvent: this.state.draggable, tlFlexibleEvent: this.state.resizable }), style: style, onClick: function onClick(e) {
	            return _this3.onClick(e);
	          } },
	        function () {
	          if (_this3.state.resizable) {
	            return _react2.default.createElement(
	              'div',
	              { className: 'tlRisezeHandle', onTouchstart: function onTouchstart(e) {
	                  return _this3.resizeUp(e);
	                }, onMouseDown: function onMouseDown(e) {
	                  return _this3.resizeUp(e);
	                } },
	              _react2.default.createElement('i', { className: 'fa fa-bars', 'aria-hidden': 'true' })
	            );
	          }
	        }(),
	        _react2.default.createElement(_EventBase2.default, {
	          draggingDisplay: this.state.draggingDisplay,
	          draggingDisplayTop: this.state.draggingDisplayTop,
	          display: this.state.display
	        }),
	        function () {
	          if (_this3.state.resizable) {
	            return _react2.default.createElement(
	              'div',
	              { className: 'tlRisezeHandle tlBottom', onTouchstart: function onTouchstart(e) {
	                  return _this3.resizeDown(e);
	                }, onMouseDown: function onMouseDown(e) {
	                  return _this3.resizeDown(e);
	                } },
	              _react2.default.createElement('i', { className: 'fa fa-bars', 'aria-hidden': 'true' })
	            );
	          }
	        }()
	      ));
	    }
	  }, {
	    key: 'currentTimeSpan',
	    get: function get() {
	      return this.resizingTimeSpan || this.timeSpan;
	    }
	  }, {
	    key: 'nextPosition',
	    get: function get() {
	      if (this.draggingPosition) {
	        return {
	          lineId: this.draggingPosition.lineId,
	          timeSpan: this.timeSpan.shiftStartTime(this.draggingPosition.time)
	        };
	      } else if (this.resizingTimeSpan) {
	        return {
	          lineId: this.lineId,
	          timeSpan: this.resizingTimeSpan
	        };
	      }
	
	      return null;
	    }
	  }, {
	    key: 'prevPosition',
	    get: function get() {
	      if (!this.draggingPosition && !this.resizingTimeSpan) {
	        return null;
	      } else {
	        return {
	          lineId: this.lineId,
	          timeSpan: this.timeSpan
	        };
	      }
	    }
	  }]);
	
	  return Event;
	}(_react2.default.Component);
	
	Event.propTypes = {
	  id: _react2.default.PropTypes.string.isRequired,
	  timeSpan: _react2.default.PropTypes.instanceOf(_TimeSpan2.default).isRequired,
	  color: _react2.default.PropTypes.string.isRequired,
	  //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
	  timeline: _react2.default.PropTypes.any.isRequired,
	  lineId: _react2.default.PropTypes.string.isRequired
	};
	
	exports.default = (0, _reactDnd.DragSource)("Event", source, collect)(Event);

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
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _DragDropContext = __webpack_require__(11);
	
	exports.DragDropContext = _interopRequire(_DragDropContext);
	
	var _DragLayer = __webpack_require__(111);
	
	exports.DragLayer = _interopRequire(_DragLayer);
	
	var _DragSource = __webpack_require__(118);
	
	exports.DragSource = _interopRequire(_DragSource);
	
	var _DropTarget = __webpack_require__(134);
	
	exports.DropTarget = _interopRequire(_DropTarget);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slice = Array.prototype.slice;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports['default'] = DragDropContext;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _dndCore = __webpack_require__(12);
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(110);
	
	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
	
	function DragDropContext(backendOrModule) {
	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragDropContext', 'backend'].concat(_slice.call(arguments)));
	
	  // Auto-detect ES6 default export for people still using ES5
	  var backend = undefined;
	  if (typeof backendOrModule === 'object' && typeof backendOrModule['default'] === 'function') {
	    backend = backendOrModule['default'];
	  } else {
	    backend = backendOrModule;
	  }
	
	  _invariant2['default'](typeof backend === 'function', 'Expected the backend to be a function or an ES6 module exporting a default function. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-drop-context.html');
	
	  var childContext = {
	    dragDropManager: new _dndCore.DragDropManager(backend)
	  };
	
	  return function decorateContext(DecoratedComponent) {
	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
	
	    return (function (_Component) {
	      _inherits(DragDropContextContainer, _Component);
	
	      function DragDropContextContainer() {
	        _classCallCheck(this, DragDropContextContainer);
	
	        _Component.apply(this, arguments);
	      }
	
	      DragDropContextContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	        return this.refs.child;
	      };
	
	      DragDropContextContainer.prototype.getManager = function getManager() {
	        return childContext.dragDropManager;
	      };
	
	      DragDropContextContainer.prototype.getChildContext = function getChildContext() {
	        return childContext;
	      };
	
	      DragDropContextContainer.prototype.render = function render() {
	        return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, {
	          ref: 'child' }));
	      };
	
	      _createClass(DragDropContextContainer, null, [{
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }, {
	        key: 'displayName',
	        value: 'DragDropContext(' + displayName + ')',
	        enumerable: true
	      }, {
	        key: 'childContextTypes',
	        value: {
	          dragDropManager: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	      }]);
	
	      return DragDropContextContainer;
	    })(_react.Component);
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _DragDropManager = __webpack_require__(13);
	
	exports.DragDropManager = _interopRequire(_DragDropManager);
	
	var _DragSource = __webpack_require__(107);
	
	exports.DragSource = _interopRequire(_DragSource);
	
	var _DropTarget = __webpack_require__(108);
	
	exports.DropTarget = _interopRequire(_DropTarget);
	
	var _backendsCreateTestBackend = __webpack_require__(109);
	
	exports.createTestBackend = _interopRequire(_backendsCreateTestBackend);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _reduxLibCreateStore = __webpack_require__(14);
	
	var _reduxLibCreateStore2 = _interopRequireDefault(_reduxLibCreateStore);
	
	var _reducers = __webpack_require__(21);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _actionsDragDrop = __webpack_require__(23);
	
	var dragDropActions = _interopRequireWildcard(_actionsDragDrop);
	
	var _DragDropMonitor = __webpack_require__(102);
	
	var _DragDropMonitor2 = _interopRequireDefault(_DragDropMonitor);
	
	var _HandlerRegistry = __webpack_require__(103);
	
	var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);
	
	var DragDropManager = (function () {
	  function DragDropManager(createBackend) {
	    _classCallCheck(this, DragDropManager);
	
	    var store = _reduxLibCreateStore2['default'](_reducers2['default']);
	
	    this.store = store;
	    this.monitor = new _DragDropMonitor2['default'](store);
	    this.registry = this.monitor.registry;
	    this.backend = createBackend(this);
	
	    store.subscribe(this.handleRefCountChange.bind(this));
	  }
	
	  DragDropManager.prototype.handleRefCountChange = function handleRefCountChange() {
	    var shouldSetUp = this.store.getState().refCount > 0;
	    if (shouldSetUp && !this.isSetUp) {
	      this.backend.setup();
	      this.isSetUp = true;
	    } else if (!shouldSetUp && this.isSetUp) {
	      this.backend.teardown();
	      this.isSetUp = false;
	    }
	  };
	
	  DragDropManager.prototype.getMonitor = function getMonitor() {
	    return this.monitor;
	  };
	
	  DragDropManager.prototype.getBackend = function getBackend() {
	    return this.backend;
	  };
	
	  DragDropManager.prototype.getRegistry = function getRegistry() {
	    return this.registry;
	  };
	
	  DragDropManager.prototype.getActions = function getActions() {
	    var manager = this;
	    var dispatch = this.store.dispatch;
	
	    function bindActionCreator(actionCreator) {
	      return function () {
	        var action = actionCreator.apply(manager, arguments);
	        if (typeof action !== 'undefined') {
	          dispatch(action);
	        }
	      };
	    }
	
	    return Object.keys(dragDropActions).filter(function (key) {
	      return typeof dragDropActions[key] === 'function';
	    }).reduce(function (boundActions, key) {
	      boundActions[key] = bindActionCreator(dragDropActions[key]);
	      return boundActions;
	    }, {});
	  };
	
	  return DragDropManager;
	})();
	
	exports['default'] = DragDropManager;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;
	
	var _isPlainObject = __webpack_require__(15);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(19);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;
	
	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, initialState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(16),
	    isHostObject = __webpack_require__(17),
	    isObjectLike = __webpack_require__(18);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}
	
	module.exports = getPrototype;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';
	
	module.exports = __webpack_require__(20)(global || window || this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;
	
		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _dragOffset = __webpack_require__(22);
	
	var _dragOffset2 = _interopRequireDefault(_dragOffset);
	
	var _dragOperation = __webpack_require__(29);
	
	var _dragOperation2 = _interopRequireDefault(_dragOperation);
	
	var _refCount = __webpack_require__(87);
	
	var _refCount2 = _interopRequireDefault(_refCount);
	
	var _dirtyHandlerIds = __webpack_require__(88);
	
	var _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds);
	
	var _stateId = __webpack_require__(101);
	
	var _stateId2 = _interopRequireDefault(_stateId);
	
	exports['default'] = function (state, action) {
	  if (state === undefined) state = {};
	
	  return {
	    dirtyHandlerIds: _dirtyHandlerIds2['default'](state.dirtyHandlerIds, action, state.dragOperation),
	    dragOffset: _dragOffset2['default'](state.dragOffset, action),
	    refCount: _refCount2['default'](state.refCount, action),
	    dragOperation: _dragOperation2['default'](state.dragOperation, action),
	    stateId: _stateId2['default'](state.stateId)
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = dragOffset;
	exports.getSourceClientOffset = getSourceClientOffset;
	exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;
	
	var _actionsDragDrop = __webpack_require__(23);
	
	var initialState = {
	  initialSourceClientOffset: null,
	  initialClientOffset: null,
	  clientOffset: null
	};
	
	function areOffsetsEqual(offsetA, offsetB) {
	  if (offsetA === offsetB) {
	    return true;
	  }
	  return offsetA && offsetB && offsetA.x === offsetB.x && offsetA.y === offsetB.y;
	}
	
	function dragOffset(state, action) {
	  if (state === undefined) state = initialState;
	
	  switch (action.type) {
	    case _actionsDragDrop.BEGIN_DRAG:
	      return {
	        initialSourceClientOffset: action.sourceClientOffset,
	        initialClientOffset: action.clientOffset,
	        clientOffset: action.clientOffset
	      };
	    case _actionsDragDrop.HOVER:
	      if (areOffsetsEqual(state.clientOffset, action.clientOffset)) {
	        return state;
	      }
	      return _extends({}, state, {
	        clientOffset: action.clientOffset
	      });
	    case _actionsDragDrop.END_DRAG:
	    case _actionsDragDrop.DROP:
	      return initialState;
	    default:
	      return state;
	  }
	}
	
	function getSourceClientOffset(state) {
	  var clientOffset = state.clientOffset;
	  var initialClientOffset = state.initialClientOffset;
	  var initialSourceClientOffset = state.initialSourceClientOffset;
	
	  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
	    return null;
	  }
	  return {
	    x: clientOffset.x + initialSourceClientOffset.x - initialClientOffset.x,
	    y: clientOffset.y + initialSourceClientOffset.y - initialClientOffset.y
	  };
	}
	
	function getDifferenceFromInitialOffset(state) {
	  var clientOffset = state.clientOffset;
	  var initialClientOffset = state.initialClientOffset;
	
	  if (!clientOffset || !initialClientOffset) {
	    return null;
	  }
	  return {
	    x: clientOffset.x - initialClientOffset.x,
	    y: clientOffset.y - initialClientOffset.y
	  };
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.beginDrag = beginDrag;
	exports.publishDragSource = publishDragSource;
	exports.hover = hover;
	exports.drop = drop;
	exports.endDrag = endDrag;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsMatchesType = __webpack_require__(24);
	
	var _utilsMatchesType2 = _interopRequireDefault(_utilsMatchesType);
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsArray = __webpack_require__(25);
	
	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);
	
	var _lodashIsObject = __webpack_require__(28);
	
	var _lodashIsObject2 = _interopRequireDefault(_lodashIsObject);
	
	var BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
	exports.BEGIN_DRAG = BEGIN_DRAG;
	var PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
	exports.PUBLISH_DRAG_SOURCE = PUBLISH_DRAG_SOURCE;
	var HOVER = 'dnd-core/HOVER';
	exports.HOVER = HOVER;
	var DROP = 'dnd-core/DROP';
	exports.DROP = DROP;
	var END_DRAG = 'dnd-core/END_DRAG';
	
	exports.END_DRAG = END_DRAG;
	
	function beginDrag(sourceIds) {
	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var _ref$publishSource = _ref.publishSource;
	  var publishSource = _ref$publishSource === undefined ? true : _ref$publishSource;
	  var _ref$clientOffset = _ref.clientOffset;
	  var clientOffset = _ref$clientOffset === undefined ? null : _ref$clientOffset;
	  var getSourceClientOffset = _ref.getSourceClientOffset;
	
	  _invariant2['default'](_lodashIsArray2['default'](sourceIds), 'Expected sourceIds to be an array.');
	
	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
	
	  for (var i = 0; i < sourceIds.length; i++) {
	    _invariant2['default'](registry.getSource(sourceIds[i]), 'Expected sourceIds to be registered.');
	  }
	
	  var sourceId = null;
	  for (var i = sourceIds.length - 1; i >= 0; i--) {
	    if (monitor.canDragSource(sourceIds[i])) {
	      sourceId = sourceIds[i];
	      break;
	    }
	  }
	  if (sourceId === null) {
	    return;
	  }
	
	  var sourceClientOffset = null;
	  if (clientOffset) {
	    _invariant2['default'](typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
	    sourceClientOffset = getSourceClientOffset(sourceId);
	  }
	
	  var source = registry.getSource(sourceId);
	  var item = source.beginDrag(monitor, sourceId);
	  _invariant2['default'](_lodashIsObject2['default'](item), 'Item must be an object.');
	
	  registry.pinSource(sourceId);
	
	  var itemType = registry.getSourceType(sourceId);
	  return {
	    type: BEGIN_DRAG,
	    itemType: itemType,
	    item: item,
	    sourceId: sourceId,
	    clientOffset: clientOffset,
	    sourceClientOffset: sourceClientOffset,
	    isSourcePublic: publishSource
	  };
	}
	
	function publishDragSource(manager) {
	  var monitor = this.getMonitor();
	  if (!monitor.isDragging()) {
	    return;
	  }
	
	  return {
	    type: PUBLISH_DRAG_SOURCE
	  };
	}
	
	function hover(targetIds) {
	  var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var _ref2$clientOffset = _ref2.clientOffset;
	  var clientOffset = _ref2$clientOffset === undefined ? null : _ref2$clientOffset;
	
	  _invariant2['default'](_lodashIsArray2['default'](targetIds), 'Expected targetIds to be an array.');
	  targetIds = targetIds.slice(0);
	
	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](monitor.isDragging(), 'Cannot call hover while not dragging.');
	  _invariant2['default'](!monitor.didDrop(), 'Cannot call hover after drop.');
	
	  // First check invariants.
	  for (var i = 0; i < targetIds.length; i++) {
	    var targetId = targetIds[i];
	    _invariant2['default'](targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
	
	    var target = registry.getTarget(targetId);
	    _invariant2['default'](target, 'Expected targetIds to be registered.');
	  }
	
	  var draggedItemType = monitor.getItemType();
	
	  // Remove those targetIds that don't match the targetType.  This
	  // fixes shallow isOver which would only be non-shallow because of
	  // non-matching targets.
	  for (var i = targetIds.length - 1; i >= 0; i--) {
	    var targetId = targetIds[i];
	    var targetType = registry.getTargetType(targetId);
	    if (!_utilsMatchesType2['default'](targetType, draggedItemType)) {
	      targetIds.splice(i, 1);
	    }
	  }
	
	  // Finally call hover on all matching targets.
	  for (var i = 0; i < targetIds.length; i++) {
	    var targetId = targetIds[i];
	    var target = registry.getTarget(targetId);
	    target.hover(monitor, targetId);
	  }
	
	  return {
	    type: HOVER,
	    targetIds: targetIds,
	    clientOffset: clientOffset
	  };
	}
	
	function drop() {
	  var _this = this;
	
	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](monitor.isDragging(), 'Cannot call drop while not dragging.');
	  _invariant2['default'](!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
	
	  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
	
	  targetIds.reverse();
	  targetIds.forEach(function (targetId, index) {
	    var target = registry.getTarget(targetId);
	
	    var dropResult = target.drop(monitor, targetId);
	    _invariant2['default'](typeof dropResult === 'undefined' || _lodashIsObject2['default'](dropResult), 'Drop result must either be an object or undefined.');
	    if (typeof dropResult === 'undefined') {
	      dropResult = index === 0 ? {} : monitor.getDropResult();
	    }
	
	    _this.store.dispatch({
	      type: DROP,
	      dropResult: dropResult
	    });
	  });
	}
	
	function endDrag() {
	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](monitor.isDragging(), 'Cannot call endDrag while not dragging.');
	
	  var sourceId = monitor.getSourceId();
	  var source = registry.getSource(sourceId, true);
	  source.endDrag(monitor, sourceId);
	
	  registry.unpinSource();
	
	  return {
	    type: END_DRAG
	  };
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = matchesType;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashIsArray = __webpack_require__(25);
	
	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);
	
	function matchesType(targetType, draggedItemType) {
	  if (_lodashIsArray2['default'](targetType)) {
	    return targetType.some(function (t) {
	      return t === draggedItemType;
	    });
	  } else {
	    return targetType === draggedItemType;
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ },
/* 27 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = dragOperation;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _actionsDragDrop = __webpack_require__(23);
	
	var _actionsRegistry = __webpack_require__(30);
	
	var _lodashWithout = __webpack_require__(31);
	
	var _lodashWithout2 = _interopRequireDefault(_lodashWithout);
	
	var initialState = {
	  itemType: null,
	  item: null,
	  sourceId: null,
	  targetIds: [],
	  dropResult: null,
	  didDrop: false,
	  isSourcePublic: null
	};
	
	function dragOperation(state, action) {
	  if (state === undefined) state = initialState;
	
	  switch (action.type) {
	    case _actionsDragDrop.BEGIN_DRAG:
	      return _extends({}, state, {
	        itemType: action.itemType,
	        item: action.item,
	        sourceId: action.sourceId,
	        isSourcePublic: action.isSourcePublic,
	        dropResult: null,
	        didDrop: false
	      });
	    case _actionsDragDrop.PUBLISH_DRAG_SOURCE:
	      return _extends({}, state, {
	        isSourcePublic: true
	      });
	    case _actionsDragDrop.HOVER:
	      return _extends({}, state, {
	        targetIds: action.targetIds
	      });
	    case _actionsRegistry.REMOVE_TARGET:
	      if (state.targetIds.indexOf(action.targetId) === -1) {
	        return state;
	      }
	      return _extends({}, state, {
	        targetIds: _lodashWithout2['default'](state.targetIds, action.targetId)
	      });
	    case _actionsDragDrop.DROP:
	      return _extends({}, state, {
	        dropResult: action.dropResult,
	        didDrop: true,
	        targetIds: []
	      });
	    case _actionsDragDrop.END_DRAG:
	      return _extends({}, state, {
	        itemType: null,
	        item: null,
	        sourceId: null,
	        dropResult: null,
	        didDrop: false,
	        isSourcePublic: null,
	        targetIds: []
	      });
	    default:
	      return state;
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.addSource = addSource;
	exports.addTarget = addTarget;
	exports.removeSource = removeSource;
	exports.removeTarget = removeTarget;
	var ADD_SOURCE = 'dnd-core/ADD_SOURCE';
	exports.ADD_SOURCE = ADD_SOURCE;
	var ADD_TARGET = 'dnd-core/ADD_TARGET';
	exports.ADD_TARGET = ADD_TARGET;
	var REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
	exports.REMOVE_SOURCE = REMOVE_SOURCE;
	var REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
	
	exports.REMOVE_TARGET = REMOVE_TARGET;
	
	function addSource(sourceId) {
	  return {
	    type: ADD_SOURCE,
	    sourceId: sourceId
	  };
	}
	
	function addTarget(targetId) {
	  return {
	    type: ADD_TARGET,
	    targetId: targetId
	  };
	}
	
	function removeSource(sourceId) {
	  return {
	    type: REMOVE_SOURCE,
	    sourceId: sourceId
	  };
	}
	
	function removeTarget(targetId) {
	  return {
	    type: REMOVE_TARGET,
	    targetId: targetId
	  };
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(32),
	    isArrayLikeObject = __webpack_require__(75),
	    rest = __webpack_require__(81);
	
	/**
	 * Creates an array excluding all given values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...*} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.xor
	 * @example
	 *
	 * _.without([1, 2, 1, 3], 1, 2);
	 * // => [3]
	 */
	var without = rest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, values)
	    : [];
	});
	
	module.exports = without;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(33),
	    arrayIncludes = __webpack_require__(68),
	    arrayIncludesWith = __webpack_require__(71),
	    arrayMap = __webpack_require__(72),
	    baseUnary = __webpack_require__(73),
	    cacheHas = __webpack_require__(74);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;
	
	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;
	
	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(34),
	    setCacheAdd = __webpack_require__(66),
	    setCacheHas = __webpack_require__(67);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(35),
	    mapCacheDelete = __webpack_require__(60),
	    mapCacheGet = __webpack_require__(63),
	    mapCacheHas = __webpack_require__(64),
	    mapCacheSet = __webpack_require__(65);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(36),
	    ListCache = __webpack_require__(48),
	    Map = __webpack_require__(56);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(37),
	    hashDelete = __webpack_require__(44),
	    hashGet = __webpack_require__(45),
	    hashHas = __webpack_require__(46),
	    hashSet = __webpack_require__(47);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(38);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	module.exports = hashClear;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(40);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(41),
	    isHostObject = __webpack_require__(42),
	    isObject = __webpack_require__(28),
	    toSource = __webpack_require__(43);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = isNative;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 43 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	module.exports = hashDelete;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(38);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(38);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(38);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(49),
	    listCacheDelete = __webpack_require__(50),
	    listCacheGet = __webpack_require__(53),
	    listCacheHas = __webpack_require__(54),
	    listCacheSet = __webpack_require__(55);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	module.exports = listCacheClear;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(51);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(52);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(51);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(51);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(51);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39),
	    root = __webpack_require__(57);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(59);
	
	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};
	
	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;
	
	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
	
	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);
	
	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);
	
	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
	
	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();
	
	module.exports = root;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)(module), (function() { return this; }())))

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 59 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}
	
	module.exports = checkGlobal;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(61);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	module.exports = mapCacheDelete;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(62);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(61);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(61);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(61);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ },
/* 66 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(69);
	
	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  return !!array.length && baseIndexOf(array, value, 0) > -1;
	}
	
	module.exports = arrayIncludes;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(70);
	
	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 70 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },
/* 71 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arrayIncludesWith;


/***/ },
/* 72 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 73 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing wrapper metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * Checks if a cache value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(76),
	    isObjectLike = __webpack_require__(80);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(77),
	    isFunction = __webpack_require__(41),
	    isLength = __webpack_require__(79);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(78);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 79 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 80 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(82),
	    toInteger = __webpack_require__(83);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = rest;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(84);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	module.exports = toInteger;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(85);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	module.exports = toFinite;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(41),
	    isObject = __webpack_require__(28),
	    isSymbol = __webpack_require__(86);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(80);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = refCount;
	
	var _actionsRegistry = __webpack_require__(30);
	
	function refCount(state, action) {
	  if (state === undefined) state = 0;
	
	  switch (action.type) {
	    case _actionsRegistry.ADD_SOURCE:
	    case _actionsRegistry.ADD_TARGET:
	      return state + 1;
	    case _actionsRegistry.REMOVE_SOURCE:
	    case _actionsRegistry.REMOVE_TARGET:
	      return state - 1;
	    default:
	      return state;
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = dirtyHandlerIds;
	exports.areDirty = areDirty;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashXor = __webpack_require__(89);
	
	var _lodashXor2 = _interopRequireDefault(_lodashXor);
	
	var _lodashIntersection = __webpack_require__(98);
	
	var _lodashIntersection2 = _interopRequireDefault(_lodashIntersection);
	
	var _actionsDragDrop = __webpack_require__(23);
	
	var _actionsRegistry = __webpack_require__(30);
	
	var NONE = [];
	var ALL = [];
	
	function dirtyHandlerIds(state, action, dragOperation) {
	  if (state === undefined) state = NONE;
	
	  switch (action.type) {
	    case _actionsDragDrop.HOVER:
	      break;
	    case _actionsRegistry.ADD_SOURCE:
	    case _actionsRegistry.ADD_TARGET:
	    case _actionsRegistry.REMOVE_TARGET:
	    case _actionsRegistry.REMOVE_SOURCE:
	      return NONE;
	    case _actionsDragDrop.BEGIN_DRAG:
	    case _actionsDragDrop.PUBLISH_DRAG_SOURCE:
	    case _actionsDragDrop.END_DRAG:
	    case _actionsDragDrop.DROP:
	    default:
	      return ALL;
	  }
	
	  var targetIds = action.targetIds;
	  var prevTargetIds = dragOperation.targetIds;
	
	  var dirtyHandlerIds = _lodashXor2['default'](targetIds, prevTargetIds);
	
	  var didChange = false;
	  if (dirtyHandlerIds.length === 0) {
	    for (var i = 0; i < targetIds.length; i++) {
	      if (targetIds[i] !== prevTargetIds[i]) {
	        didChange = true;
	        break;
	      }
	    }
	  } else {
	    didChange = true;
	  }
	
	  if (!didChange) {
	    return NONE;
	  }
	
	  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
	  var innermostTargetId = targetIds[targetIds.length - 1];
	
	  if (prevInnermostTargetId !== innermostTargetId) {
	    if (prevInnermostTargetId) {
	      dirtyHandlerIds.push(prevInnermostTargetId);
	    }
	    if (innermostTargetId) {
	      dirtyHandlerIds.push(innermostTargetId);
	    }
	  }
	
	  return dirtyHandlerIds;
	}
	
	function areDirty(state, handlerIds) {
	  if (state === NONE) {
	    return false;
	  }
	
	  if (state === ALL || typeof handlerIds === 'undefined') {
	    return true;
	  }
	
	  return _lodashIntersection2['default'](handlerIds, state).length > 0;
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(90),
	    baseXor = __webpack_require__(91),
	    isArrayLikeObject = __webpack_require__(75),
	    rest = __webpack_require__(81);
	
	/**
	 * Creates an array of unique values that is the
	 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	 * of the given arrays. The order of result values is determined by the order
	 * they occur in the arrays.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.without
	 * @example
	 *
	 * _.xor([2, 1], [4, 2]);
	 * // => [1, 4]
	 */
	var xor = rest(function(arrays) {
	  return baseXor(arrayFilter(arrays, isArrayLikeObject));
	});
	
	module.exports = xor;


/***/ },
/* 90 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(92),
	    baseDifference = __webpack_require__(32),
	    baseUniq = __webpack_require__(93);
	
	/**
	 * The base implementation of methods like `_.xor`, without support for
	 * iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of values.
	 */
	function baseXor(arrays, iteratee, comparator) {
	  var index = -1,
	      length = arrays.length;
	
	  while (++index < length) {
	    var result = result
	      ? arrayPush(
	          baseDifference(result, arrays[index], iteratee, comparator),
	          baseDifference(arrays[index], result, iteratee, comparator)
	        )
	      : arrays[index];
	  }
	  return (result && result.length) ? baseUniq(result, iteratee, comparator) : [];
	}
	
	module.exports = baseXor;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(33),
	    arrayIncludes = __webpack_require__(68),
	    arrayIncludesWith = __webpack_require__(71),
	    cacheHas = __webpack_require__(74),
	    createSet = __webpack_require__(94),
	    setToArray = __webpack_require__(97);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;
	
	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;
	
	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseUniq;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(95),
	    noop = __webpack_require__(96),
	    setToArray = __webpack_require__(97);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Creates a set of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	  return new Set(values);
	};
	
	module.exports = createSet;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39),
	    root = __webpack_require__(57);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * A no-operation function that returns `undefined` regardless of the
	 * arguments it receives.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.noop(object) === undefined;
	 * // => true
	 */
	function noop() {
	  // No operation performed.
	}
	
	module.exports = noop;


/***/ },
/* 97 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(72),
	    baseIntersection = __webpack_require__(99),
	    castArrayLikeObject = __webpack_require__(100),
	    rest = __webpack_require__(81);
	
	/**
	 * Creates an array of unique values that are included in all given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons. The order of result values is determined by the
	 * order they occur in the first array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of intersecting values.
	 * @example
	 *
	 * _.intersection([2, 1], [4, 2], [1, 2]);
	 * // => [2]
	 */
	var intersection = rest(function(arrays) {
	  var mapped = arrayMap(arrays, castArrayLikeObject);
	  return (mapped.length && mapped[0] === arrays[0])
	    ? baseIntersection(mapped)
	    : [];
	});
	
	module.exports = intersection;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(33),
	    arrayIncludes = __webpack_require__(68),
	    arrayIncludesWith = __webpack_require__(71),
	    arrayMap = __webpack_require__(72),
	    baseUnary = __webpack_require__(73),
	    cacheHas = __webpack_require__(74);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;
	
	/**
	 * The base implementation of methods like `_.intersection`, without support
	 * for iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of shared values.
	 */
	function baseIntersection(arrays, iteratee, comparator) {
	  var includes = comparator ? arrayIncludesWith : arrayIncludes,
	      length = arrays[0].length,
	      othLength = arrays.length,
	      othIndex = othLength,
	      caches = Array(othLength),
	      maxLength = Infinity,
	      result = [];
	
	  while (othIndex--) {
	    var array = arrays[othIndex];
	    if (othIndex && iteratee) {
	      array = arrayMap(array, baseUnary(iteratee));
	    }
	    maxLength = nativeMin(array.length, maxLength);
	    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	      ? new SetCache(othIndex && array)
	      : undefined;
	  }
	  array = arrays[0];
	
	  var index = -1,
	      seen = caches[0];
	
	  outer:
	  while (++index < length && result.length < maxLength) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;
	
	    value = (comparator || value !== 0) ? value : 0;
	    if (!(seen
	          ? cacheHas(seen, computed)
	          : includes(result, computed, comparator)
	        )) {
	      othIndex = othLength;
	      while (--othIndex) {
	        var cache = caches[othIndex];
	        if (!(cache
	              ? cacheHas(cache, computed)
	              : includes(arrays[othIndex], computed, comparator))
	            ) {
	          continue outer;
	        }
	      }
	      if (seen) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseIntersection;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(75);
	
	/**
	 * Casts `value` to an empty array if it's not an array like object.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array|Object} Returns the cast array-like object.
	 */
	function castArrayLikeObject(value) {
	  return isArrayLikeObject(value) ? value : [];
	}
	
	module.exports = castArrayLikeObject;


/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stateId;
	
	function stateId() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
	  return state + 1;
	}
	
	module.exports = exports["default"];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _utilsMatchesType = __webpack_require__(24);
	
	var _utilsMatchesType2 = _interopRequireDefault(_utilsMatchesType);
	
	var _lodashIsArray = __webpack_require__(25);
	
	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);
	
	var _HandlerRegistry = __webpack_require__(103);
	
	var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);
	
	var _reducersDragOffset = __webpack_require__(22);
	
	var _reducersDirtyHandlerIds = __webpack_require__(88);
	
	var DragDropMonitor = (function () {
	  function DragDropMonitor(store) {
	    _classCallCheck(this, DragDropMonitor);
	
	    this.store = store;
	    this.registry = new _HandlerRegistry2['default'](store);
	  }
	
	  DragDropMonitor.prototype.subscribeToStateChange = function subscribeToStateChange(listener) {
	    var _this = this;
	
	    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var handlerIds = _ref.handlerIds;
	
	    _invariant2['default'](typeof listener === 'function', 'listener must be a function.');
	    _invariant2['default'](typeof handlerIds === 'undefined' || _lodashIsArray2['default'](handlerIds), 'handlerIds, when specified, must be an array of strings.');
	
	    var prevStateId = this.store.getState().stateId;
	    var handleChange = function handleChange() {
	      var state = _this.store.getState();
	      var currentStateId = state.stateId;
	      try {
	        var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !_reducersDirtyHandlerIds.areDirty(state.dirtyHandlerIds, handlerIds);
	
	        if (!canSkipListener) {
	          listener();
	        }
	      } finally {
	        prevStateId = currentStateId;
	      }
	    };
	
	    return this.store.subscribe(handleChange);
	  };
	
	  DragDropMonitor.prototype.subscribeToOffsetChange = function subscribeToOffsetChange(listener) {
	    var _this2 = this;
	
	    _invariant2['default'](typeof listener === 'function', 'listener must be a function.');
	
	    var previousState = this.store.getState().dragOffset;
	    var handleChange = function handleChange() {
	      var nextState = _this2.store.getState().dragOffset;
	      if (nextState === previousState) {
	        return;
	      }
	
	      previousState = nextState;
	      listener();
	    };
	
	    return this.store.subscribe(handleChange);
	  };
	
	  DragDropMonitor.prototype.canDragSource = function canDragSource(sourceId) {
	    var source = this.registry.getSource(sourceId);
	    _invariant2['default'](source, 'Expected to find a valid source.');
	
	    if (this.isDragging()) {
	      return false;
	    }
	
	    return source.canDrag(this, sourceId);
	  };
	
	  DragDropMonitor.prototype.canDropOnTarget = function canDropOnTarget(targetId) {
	    var target = this.registry.getTarget(targetId);
	    _invariant2['default'](target, 'Expected to find a valid target.');
	
	    if (!this.isDragging() || this.didDrop()) {
	      return false;
	    }
	
	    var targetType = this.registry.getTargetType(targetId);
	    var draggedItemType = this.getItemType();
	    return _utilsMatchesType2['default'](targetType, draggedItemType) && target.canDrop(this, targetId);
	  };
	
	  DragDropMonitor.prototype.isDragging = function isDragging() {
	    return Boolean(this.getItemType());
	  };
	
	  DragDropMonitor.prototype.isDraggingSource = function isDraggingSource(sourceId) {
	    var source = this.registry.getSource(sourceId, true);
	    _invariant2['default'](source, 'Expected to find a valid source.');
	
	    if (!this.isDragging() || !this.isSourcePublic()) {
	      return false;
	    }
	
	    var sourceType = this.registry.getSourceType(sourceId);
	    var draggedItemType = this.getItemType();
	    if (sourceType !== draggedItemType) {
	      return false;
	    }
	
	    return source.isDragging(this, sourceId);
	  };
	
	  DragDropMonitor.prototype.isOverTarget = function isOverTarget(targetId) {
	    var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var _ref2$shallow = _ref2.shallow;
	    var shallow = _ref2$shallow === undefined ? false : _ref2$shallow;
	
	    if (!this.isDragging()) {
	      return false;
	    }
	
	    var targetType = this.registry.getTargetType(targetId);
	    var draggedItemType = this.getItemType();
	    if (!_utilsMatchesType2['default'](targetType, draggedItemType)) {
	      return false;
	    }
	
	    var targetIds = this.getTargetIds();
	    if (!targetIds.length) {
	      return false;
	    }
	
	    var index = targetIds.indexOf(targetId);
	    if (shallow) {
	      return index === targetIds.length - 1;
	    } else {
	      return index > -1;
	    }
	  };
	
	  DragDropMonitor.prototype.getItemType = function getItemType() {
	    return this.store.getState().dragOperation.itemType;
	  };
	
	  DragDropMonitor.prototype.getItem = function getItem() {
	    return this.store.getState().dragOperation.item;
	  };
	
	  DragDropMonitor.prototype.getSourceId = function getSourceId() {
	    return this.store.getState().dragOperation.sourceId;
	  };
	
	  DragDropMonitor.prototype.getTargetIds = function getTargetIds() {
	    return this.store.getState().dragOperation.targetIds;
	  };
	
	  DragDropMonitor.prototype.getDropResult = function getDropResult() {
	    return this.store.getState().dragOperation.dropResult;
	  };
	
	  DragDropMonitor.prototype.didDrop = function didDrop() {
	    return this.store.getState().dragOperation.didDrop;
	  };
	
	  DragDropMonitor.prototype.isSourcePublic = function isSourcePublic() {
	    return this.store.getState().dragOperation.isSourcePublic;
	  };
	
	  DragDropMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.store.getState().dragOffset.initialClientOffset;
	  };
	
	  DragDropMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.store.getState().dragOffset.initialSourceClientOffset;
	  };
	
	  DragDropMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.store.getState().dragOffset.clientOffset;
	  };
	
	  DragDropMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return _reducersDragOffset.getSourceClientOffset(this.store.getState().dragOffset);
	  };
	
	  DragDropMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return _reducersDragOffset.getDifferenceFromInitialOffset(this.store.getState().dragOffset);
	  };
	
	  return DragDropMonitor;
	})();
	
	exports['default'] = DragDropMonitor;
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsArray = __webpack_require__(25);
	
	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);
	
	var _utilsGetNextUniqueId = __webpack_require__(104);
	
	var _utilsGetNextUniqueId2 = _interopRequireDefault(_utilsGetNextUniqueId);
	
	var _actionsRegistry = __webpack_require__(30);
	
	var _asap = __webpack_require__(105);
	
	var _asap2 = _interopRequireDefault(_asap);
	
	var HandlerRoles = {
	  SOURCE: 'SOURCE',
	  TARGET: 'TARGET'
	};
	
	function validateSourceContract(source) {
	  _invariant2['default'](typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
	  _invariant2['default'](typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
	  _invariant2['default'](typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
	}
	
	function validateTargetContract(target) {
	  _invariant2['default'](typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
	  _invariant2['default'](typeof target.hover === 'function', 'Expected hover to be a function.');
	  _invariant2['default'](typeof target.drop === 'function', 'Expected beginDrag to be a function.');
	}
	
	function validateType(type, allowArray) {
	  if (allowArray && _lodashIsArray2['default'](type)) {
	    type.forEach(function (t) {
	      return validateType(t, false);
	    });
	    return;
	  }
	
	  _invariant2['default'](typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
	}
	
	function getNextHandlerId(role) {
	  var id = _utilsGetNextUniqueId2['default']().toString();
	  switch (role) {
	    case HandlerRoles.SOURCE:
	      return 'S' + id;
	    case HandlerRoles.TARGET:
	      return 'T' + id;
	    default:
	      _invariant2['default'](false, 'Unknown role: ' + role);
	  }
	}
	
	function parseRoleFromHandlerId(handlerId) {
	  switch (handlerId[0]) {
	    case 'S':
	      return HandlerRoles.SOURCE;
	    case 'T':
	      return HandlerRoles.TARGET;
	    default:
	      _invariant2['default'](false, 'Cannot parse handler ID: ' + handlerId);
	  }
	}
	
	var HandlerRegistry = (function () {
	  function HandlerRegistry(store) {
	    _classCallCheck(this, HandlerRegistry);
	
	    this.store = store;
	
	    this.types = {};
	    this.handlers = {};
	
	    this.pinnedSourceId = null;
	    this.pinnedSource = null;
	  }
	
	  HandlerRegistry.prototype.addSource = function addSource(type, source) {
	    validateType(type);
	    validateSourceContract(source);
	
	    var sourceId = this.addHandler(HandlerRoles.SOURCE, type, source);
	    this.store.dispatch(_actionsRegistry.addSource(sourceId));
	    return sourceId;
	  };
	
	  HandlerRegistry.prototype.addTarget = function addTarget(type, target) {
	    validateType(type, true);
	    validateTargetContract(target);
	
	    var targetId = this.addHandler(HandlerRoles.TARGET, type, target);
	    this.store.dispatch(_actionsRegistry.addTarget(targetId));
	    return targetId;
	  };
	
	  HandlerRegistry.prototype.addHandler = function addHandler(role, type, handler) {
	    var id = getNextHandlerId(role);
	    this.types[id] = type;
	    this.handlers[id] = handler;
	
	    return id;
	  };
	
	  HandlerRegistry.prototype.containsHandler = function containsHandler(handler) {
	    var _this = this;
	
	    return Object.keys(this.handlers).some(function (key) {
	      return _this.handlers[key] === handler;
	    });
	  };
	
	  HandlerRegistry.prototype.getSource = function getSource(sourceId, includePinned) {
	    _invariant2['default'](this.isSourceId(sourceId), 'Expected a valid source ID.');
	
	    var isPinned = includePinned && sourceId === this.pinnedSourceId;
	    var source = isPinned ? this.pinnedSource : this.handlers[sourceId];
	
	    return source;
	  };
	
	  HandlerRegistry.prototype.getTarget = function getTarget(targetId) {
	    _invariant2['default'](this.isTargetId(targetId), 'Expected a valid target ID.');
	    return this.handlers[targetId];
	  };
	
	  HandlerRegistry.prototype.getSourceType = function getSourceType(sourceId) {
	    _invariant2['default'](this.isSourceId(sourceId), 'Expected a valid source ID.');
	    return this.types[sourceId];
	  };
	
	  HandlerRegistry.prototype.getTargetType = function getTargetType(targetId) {
	    _invariant2['default'](this.isTargetId(targetId), 'Expected a valid target ID.');
	    return this.types[targetId];
	  };
	
	  HandlerRegistry.prototype.isSourceId = function isSourceId(handlerId) {
	    var role = parseRoleFromHandlerId(handlerId);
	    return role === HandlerRoles.SOURCE;
	  };
	
	  HandlerRegistry.prototype.isTargetId = function isTargetId(handlerId) {
	    var role = parseRoleFromHandlerId(handlerId);
	    return role === HandlerRoles.TARGET;
	  };
	
	  HandlerRegistry.prototype.removeSource = function removeSource(sourceId) {
	    var _this2 = this;
	
	    _invariant2['default'](this.getSource(sourceId), 'Expected an existing source.');
	    this.store.dispatch(_actionsRegistry.removeSource(sourceId));
	
	    _asap2['default'](function () {
	      delete _this2.handlers[sourceId];
	      delete _this2.types[sourceId];
	    });
	  };
	
	  HandlerRegistry.prototype.removeTarget = function removeTarget(targetId) {
	    var _this3 = this;
	
	    _invariant2['default'](this.getTarget(targetId), 'Expected an existing target.');
	    this.store.dispatch(_actionsRegistry.removeTarget(targetId));
	
	    _asap2['default'](function () {
	      delete _this3.handlers[targetId];
	      delete _this3.types[targetId];
	    });
	  };
	
	  HandlerRegistry.prototype.pinSource = function pinSource(sourceId) {
	    var source = this.getSource(sourceId);
	    _invariant2['default'](source, 'Expected an existing source.');
	
	    this.pinnedSourceId = sourceId;
	    this.pinnedSource = source;
	  };
	
	  HandlerRegistry.prototype.unpinSource = function unpinSource() {
	    _invariant2['default'](this.pinnedSource, 'No source is pinned at the time.');
	
	    this.pinnedSourceId = null;
	    this.pinnedSource = null;
	  };
	
	  return HandlerRegistry;
	})();
	
	exports['default'] = HandlerRegistry;
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = getNextUniqueId;
	var nextUniqueId = 0;
	
	function getNextUniqueId() {
	  return nextUniqueId++;
	}
	
	module.exports = exports["default"];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(106);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);
	
	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}
	
	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}
	
	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}
	
	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ },
/* 106 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}
	
	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;
	
	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}
	
	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
	
	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	var BrowserMutationObserver = global.MutationObserver || global.WebKitMutationObserver;
	
	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);
	
	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.
	
	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396
	
	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}
	
	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;
	
	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}
	
	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html
	
	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.
	
	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }
	
	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.
	
	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }
	
	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.
	
	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.
	
	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);
	
	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}
	
	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
	
	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DragSource = (function () {
	  function DragSource() {
	    _classCallCheck(this, DragSource);
	  }
	
	  DragSource.prototype.canDrag = function canDrag() {
	    return true;
	  };
	
	  DragSource.prototype.isDragging = function isDragging(monitor, handle) {
	    return handle === monitor.getSourceId();
	  };
	
	  DragSource.prototype.endDrag = function endDrag() {};
	
	  return DragSource;
	})();
	
	exports["default"] = DragSource;
	module.exports = exports["default"];

/***/ },
/* 108 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DropTarget = (function () {
	  function DropTarget() {
	    _classCallCheck(this, DropTarget);
	  }
	
	  DropTarget.prototype.canDrop = function canDrop() {
	    return true;
	  };
	
	  DropTarget.prototype.hover = function hover() {};
	
	  DropTarget.prototype.drop = function drop() {};
	
	  return DropTarget;
	})();
	
	exports["default"] = DropTarget;
	module.exports = exports["default"];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createBackend;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _lodashNoop = __webpack_require__(96);
	
	var _lodashNoop2 = _interopRequireDefault(_lodashNoop);
	
	var TestBackend = (function () {
	  function TestBackend(manager) {
	    _classCallCheck(this, TestBackend);
	
	    this.actions = manager.getActions();
	  }
	
	  TestBackend.prototype.setup = function setup() {
	    this.didCallSetup = true;
	  };
	
	  TestBackend.prototype.teardown = function teardown() {
	    this.didCallTeardown = true;
	  };
	
	  TestBackend.prototype.connectDragSource = function connectDragSource() {
	    return _lodashNoop2['default'];
	  };
	
	  TestBackend.prototype.connectDragPreview = function connectDragPreview() {
	    return _lodashNoop2['default'];
	  };
	
	  TestBackend.prototype.connectDropTarget = function connectDropTarget() {
	    return _lodashNoop2['default'];
	  };
	
	  TestBackend.prototype.simulateBeginDrag = function simulateBeginDrag(sourceIds, options) {
	    this.actions.beginDrag(sourceIds, options);
	  };
	
	  TestBackend.prototype.simulatePublishDragSource = function simulatePublishDragSource() {
	    this.actions.publishDragSource();
	  };
	
	  TestBackend.prototype.simulateHover = function simulateHover(targetIds, options) {
	    this.actions.hover(targetIds, options);
	  };
	
	  TestBackend.prototype.simulateDrop = function simulateDrop() {
	    this.actions.drop();
	  };
	
	  TestBackend.prototype.simulateEndDrag = function simulateEndDrag() {
	    this.actions.endDrag();
	  };
	
	  return TestBackend;
	})();
	
	function createBackend(manager) {
	  return new TestBackend(manager);
	}
	
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = checkDecoratorArguments;
	
	function checkDecoratorArguments(functionName, signature) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    for (var i = 0; i < args.length; i++) {
	      var arg = args[i];
	      if (arg && arg.prototype && arg.prototype.render) {
	        console.error( // eslint-disable-line no-console
	        'You seem to be applying the arguments in the wrong order. ' + ('It should be ' + functionName + '(' + signature + ')(Component), not the other way around. ') + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
	        return;
	      }
	    }
	  }
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slice = Array.prototype.slice;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports['default'] = DragLayer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsShallowEqual = __webpack_require__(112);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	var _utilsShallowEqualScalar = __webpack_require__(113);
	
	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);
	
	var _lodashIsPlainObject = __webpack_require__(114);
	
	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(110);
	
	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
	
	function DragLayer(collect) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragLayer', 'collect[, options]'].concat(_slice.call(arguments)));
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer ' + 'to be a function that collects props to inject into the component. ', 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', collect);
	  _invariant2['default'](_lodashIsPlainObject2['default'](options), 'Expected "options" provided as the second argument to DragLayer to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', options);
	
	  return function decorateLayer(DecoratedComponent) {
	    var _options$arePropsEqual = options.arePropsEqual;
	    var arePropsEqual = _options$arePropsEqual === undefined ? _utilsShallowEqualScalar2['default'] : _options$arePropsEqual;
	
	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
	
	    return (function (_Component) {
	      _inherits(DragLayerContainer, _Component);
	
	      DragLayerContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	        return this.refs.child;
	      };
	
	      DragLayerContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        return !arePropsEqual(nextProps, this.props) || !_utilsShallowEqual2['default'](nextState, this.state);
	      };
	
	      _createClass(DragLayerContainer, null, [{
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }, {
	        key: 'displayName',
	        value: 'DragLayer(' + displayName + ')',
	        enumerable: true
	      }, {
	        key: 'contextTypes',
	        value: {
	          dragDropManager: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	      }]);
	
	      function DragLayerContainer(props, context) {
	        _classCallCheck(this, DragLayerContainer);
	
	        _Component.call(this, props);
	        this.handleChange = this.handleChange.bind(this);
	
	        this.manager = context.dragDropManager;
	        _invariant2['default'](typeof this.manager === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
	
	        this.state = this.getCurrentState();
	      }
	
	      DragLayerContainer.prototype.componentDidMount = function componentDidMount() {
	        this.isCurrentlyMounted = true;
	
	        var monitor = this.manager.getMonitor();
	        this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
	        this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);
	
	        this.handleChange();
	      };
	
	      DragLayerContainer.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.isCurrentlyMounted = false;
	
	        this.unsubscribeFromOffsetChange();
	        this.unsubscribeFromStateChange();
	      };
	
	      DragLayerContainer.prototype.handleChange = function handleChange() {
	        if (!this.isCurrentlyMounted) {
	          return;
	        }
	
	        var nextState = this.getCurrentState();
	        if (!_utilsShallowEqual2['default'](nextState, this.state)) {
	          this.setState(nextState);
	        }
	      };
	
	      DragLayerContainer.prototype.getCurrentState = function getCurrentState() {
	        var monitor = this.manager.getMonitor();
	        return collect(monitor);
	      };
	
	      DragLayerContainer.prototype.render = function render() {
	        return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	          ref: 'child' }));
	      };
	
	      return DragLayerContainer;
	    })(_react.Component);
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = shallowEqual;
	
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	
	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];
	
	    if (valA !== valB) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports["default"];

/***/ },
/* 113 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shallowEqualScalar;
	
	function shallowEqualScalar(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i])) {
	      return false;
	    }
	
	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];
	
	    if (valA !== valB || typeof valA === 'object' || typeof valB === 'object') {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(115),
	    isHostObject = __webpack_require__(116),
	    isObjectLike = __webpack_require__(117);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 115 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}
	
	module.exports = getPrototype;


/***/ },
/* 116 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 117 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DragSource;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsPlainObject = __webpack_require__(114);
	
	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(110);
	
	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
	
	var _decorateHandler = __webpack_require__(119);
	
	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);
	
	var _registerSource = __webpack_require__(125);
	
	var _registerSource2 = _interopRequireDefault(_registerSource);
	
	var _createSourceFactory = __webpack_require__(126);
	
	var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);
	
	var _createSourceMonitor = __webpack_require__(127);
	
	var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);
	
	var _createSourceConnector = __webpack_require__(128);
	
	var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);
	
	var _utilsIsValidType = __webpack_require__(132);
	
	var _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);
	
	function DragSource(type, spec, collect) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragSource', 'type, spec, collect[, options]'].concat(_slice.call(arguments)));
	  var getType = type;
	  if (typeof type !== 'function') {
	    _invariant2['default'](_utilsIsValidType2['default'](type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', type);
	    getType = function () {
	      return type;
	    };
	  }
	  _invariant2['default'](_lodashIsPlainObject2['default'](spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', spec);
	  var createSource = _createSourceFactory2['default'](spec);
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect);
	  _invariant2['default'](_lodashIsPlainObject2['default'](options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect);
	
	  return function decorateSource(DecoratedComponent) {
	    return _decorateHandler2['default']({
	      connectBackend: function connectBackend(backend, sourceId) {
	        return backend.connectDragSource(sourceId);
	      },
	      containerDisplayName: 'DragSource',
	      createHandler: createSource,
	      registerHandler: _registerSource2['default'],
	      createMonitor: _createSourceMonitor2['default'],
	      createConnector: _createSourceConnector2['default'],
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports['default'] = decorateHandler;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _disposables = __webpack_require__(120);
	
	var _utilsShallowEqual = __webpack_require__(112);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	var _utilsShallowEqualScalar = __webpack_require__(113);
	
	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);
	
	var _lodashIsPlainObject = __webpack_require__(114);
	
	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function decorateHandler(_ref) {
	  var DecoratedComponent = _ref.DecoratedComponent;
	  var createHandler = _ref.createHandler;
	  var createMonitor = _ref.createMonitor;
	  var createConnector = _ref.createConnector;
	  var registerHandler = _ref.registerHandler;
	  var containerDisplayName = _ref.containerDisplayName;
	  var getType = _ref.getType;
	  var collect = _ref.collect;
	  var options = _ref.options;
	  var _options$arePropsEqual = options.arePropsEqual;
	  var arePropsEqual = _options$arePropsEqual === undefined ? _utilsShallowEqualScalar2['default'] : _options$arePropsEqual;
	
	  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
	
	  return (function (_Component) {
	    _inherits(DragDropContainer, _Component);
	
	    DragDropContainer.prototype.getHandlerId = function getHandlerId() {
	      return this.handlerId;
	    };
	
	    DragDropContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	      return this.decoratedComponentInstance;
	    };
	
	    DragDropContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	      return !arePropsEqual(nextProps, this.props) || !_utilsShallowEqual2['default'](nextState, this.state);
	    };
	
	    _createClass(DragDropContainer, null, [{
	      key: 'DecoratedComponent',
	      value: DecoratedComponent,
	      enumerable: true
	    }, {
	      key: 'displayName',
	      value: containerDisplayName + '(' + displayName + ')',
	      enumerable: true
	    }, {
	      key: 'contextTypes',
	      value: {
	        dragDropManager: _react.PropTypes.object.isRequired
	      },
	      enumerable: true
	    }]);
	
	    function DragDropContainer(props, context) {
	      _classCallCheck(this, DragDropContainer);
	
	      _Component.call(this, props, context);
	      this.handleChange = this.handleChange.bind(this);
	      this.handleChildRef = this.handleChildRef.bind(this);
	
	      _invariant2['default'](typeof this.context.dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
	
	      this.manager = this.context.dragDropManager;
	      this.handlerMonitor = createMonitor(this.manager);
	      this.handlerConnector = createConnector(this.manager.getBackend());
	      this.handler = createHandler(this.handlerMonitor);
	
	      this.disposable = new _disposables.SerialDisposable();
	      this.receiveProps(props);
	      this.state = this.getCurrentState();
	      this.dispose();
	    }
	
	    DragDropContainer.prototype.componentDidMount = function componentDidMount() {
	      this.isCurrentlyMounted = true;
	      this.disposable = new _disposables.SerialDisposable();
	      this.currentType = null;
	      this.receiveProps(this.props);
	      this.handleChange();
	    };
	
	    DragDropContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (!arePropsEqual(nextProps, this.props)) {
	        this.receiveProps(nextProps);
	        this.handleChange();
	      }
	    };
	
	    DragDropContainer.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.dispose();
	      this.isCurrentlyMounted = false;
	    };
	
	    DragDropContainer.prototype.receiveProps = function receiveProps(props) {
	      this.handler.receiveProps(props);
	      this.receiveType(getType(props));
	    };
	
	    DragDropContainer.prototype.receiveType = function receiveType(type) {
	      if (type === this.currentType) {
	        return;
	      }
	
	      this.currentType = type;
	
	      var _registerHandler = registerHandler(type, this.handler, this.manager);
	
	      var handlerId = _registerHandler.handlerId;
	      var unregister = _registerHandler.unregister;
	
	      this.handlerId = handlerId;
	      this.handlerMonitor.receiveHandlerId(handlerId);
	      this.handlerConnector.receiveHandlerId(handlerId);
	
	      var globalMonitor = this.manager.getMonitor();
	      var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });
	
	      this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unsubscribe), new _disposables.Disposable(unregister)));
	    };
	
	    DragDropContainer.prototype.handleChange = function handleChange() {
	      if (!this.isCurrentlyMounted) {
	        return;
	      }
	
	      var nextState = this.getCurrentState();
	      if (!_utilsShallowEqual2['default'](nextState, this.state)) {
	        this.setState(nextState);
	      }
	    };
	
	    DragDropContainer.prototype.dispose = function dispose() {
	      this.disposable.dispose();
	      this.handlerConnector.receiveHandlerId(null);
	    };
	
	    DragDropContainer.prototype.handleChildRef = function handleChildRef(component) {
	      this.decoratedComponentInstance = component;
	      this.handler.receiveComponent(component);
	    };
	
	    DragDropContainer.prototype.getCurrentState = function getCurrentState() {
	      var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);
	
	      if (process.env.NODE_ENV !== 'production') {
	        _invariant2['default'](_lodashIsPlainObject2['default'](nextState), 'Expected `collect` specified as the second argument to ' + '%s for %s to return a plain object of props to inject. ' + 'Instead, received %s.', containerDisplayName, displayName, nextState);
	      }
	
	      return nextState;
	    };
	
	    DragDropContainer.prototype.render = function render() {
	      return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	        ref: this.handleChildRef }));
	    };
	
	    return DragDropContainer;
	  })(_react.Component);
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	exports.__esModule = true;
	
	var _isDisposable2 = __webpack_require__(121);
	
	var _isDisposable3 = _interopRequireWildcard(_isDisposable2);
	
	exports.isDisposable = _isDisposable3['default'];
	
	var _Disposable2 = __webpack_require__(122);
	
	var _Disposable3 = _interopRequireWildcard(_Disposable2);
	
	exports.Disposable = _Disposable3['default'];
	
	var _CompositeDisposable2 = __webpack_require__(123);
	
	var _CompositeDisposable3 = _interopRequireWildcard(_CompositeDisposable2);
	
	exports.CompositeDisposable = _CompositeDisposable3['default'];
	
	var _SerialDisposable2 = __webpack_require__(124);
	
	var _SerialDisposable3 = _interopRequireWildcard(_SerialDisposable2);
	
	exports.SerialDisposable = _SerialDisposable3['default'];

/***/ },
/* 121 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isDisposable;
	
	function isDisposable(obj) {
	  return Boolean(obj && typeof obj.dispose === 'function');
	}
	
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports) {

	"use strict";
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports.__esModule = true;
	var noop = function noop() {};
	
	/**
	 * The basic disposable.
	 */
	
	var Disposable = (function () {
	  function Disposable(action) {
	    _classCallCheck(this, Disposable);
	
	    this.isDisposed = false;
	    this.action = action || noop;
	  }
	
	  Disposable.prototype.dispose = function dispose() {
	    if (!this.isDisposed) {
	      this.action.call(null);
	      this.isDisposed = true;
	    }
	  };
	
	  _createClass(Disposable, null, [{
	    key: "empty",
	    enumerable: true,
	    value: { dispose: noop }
	  }]);
	
	  return Disposable;
	})();
	
	exports["default"] = Disposable;
	module.exports = exports["default"];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	exports.__esModule = true;
	
	var _isDisposable = __webpack_require__(121);
	
	var _isDisposable2 = _interopRequireWildcard(_isDisposable);
	
	/**
	 * Represents a group of disposable resources that are disposed together.
	 */
	
	var CompositeDisposable = (function () {
	  function CompositeDisposable() {
	    for (var _len = arguments.length, disposables = Array(_len), _key = 0; _key < _len; _key++) {
	      disposables[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, CompositeDisposable);
	
	    if (Array.isArray(disposables[0]) && disposables.length === 1) {
	      disposables = disposables[0];
	    }
	
	    for (var i = 0; i < disposables.length; i++) {
	      if (!_isDisposable2['default'](disposables[i])) {
	        throw new Error('Expected a disposable');
	      }
	    }
	
	    this.disposables = disposables;
	    this.isDisposed = false;
	  }
	
	  /**
	   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
	   * @param {Disposable} item Disposable to add.
	   */
	
	  CompositeDisposable.prototype.add = function add(item) {
	    if (this.isDisposed) {
	      item.dispose();
	    } else {
	      this.disposables.push(item);
	    }
	  };
	
	  /**
	   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
	   * @param {Disposable} item Disposable to remove.
	   * @returns {Boolean} true if found; false otherwise.
	   */
	
	  CompositeDisposable.prototype.remove = function remove(item) {
	    if (this.isDisposed) {
	      return false;
	    }
	
	    var index = this.disposables.indexOf(item);
	    if (index === -1) {
	      return false;
	    }
	
	    this.disposables.splice(index, 1);
	    item.dispose();
	    return true;
	  };
	
	  /**
	   * Disposes all disposables in the group and removes them from the group.
	   */
	
	  CompositeDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }
	
	    var len = this.disposables.length;
	    var currentDisposables = new Array(len);
	    for (var i = 0; i < len; i++) {
	      currentDisposables[i] = this.disposables[i];
	    }
	
	    this.isDisposed = true;
	    this.disposables = [];
	    this.length = 0;
	
	    for (var i = 0; i < len; i++) {
	      currentDisposables[i].dispose();
	    }
	  };
	
	  return CompositeDisposable;
	})();
	
	exports['default'] = CompositeDisposable;
	module.exports = exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	exports.__esModule = true;
	
	var _isDisposable = __webpack_require__(121);
	
	var _isDisposable2 = _interopRequireWildcard(_isDisposable);
	
	var SerialDisposable = (function () {
	  function SerialDisposable() {
	    _classCallCheck(this, SerialDisposable);
	
	    this.isDisposed = false;
	    this.current = null;
	  }
	
	  /**
	   * Gets the underlying disposable.
	   * @return The underlying disposable.
	   */
	
	  SerialDisposable.prototype.getDisposable = function getDisposable() {
	    return this.current;
	  };
	
	  /**
	   * Sets the underlying disposable.
	   * @param {Disposable} value The new underlying disposable.
	   */
	
	  SerialDisposable.prototype.setDisposable = function setDisposable() {
	    var value = arguments[0] === undefined ? null : arguments[0];
	
	    if (value != null && !_isDisposable2['default'](value)) {
	      throw new Error('Expected either an empty value or a valid disposable');
	    }
	
	    var isDisposed = this.isDisposed;
	    var previous = undefined;
	
	    if (!isDisposed) {
	      previous = this.current;
	      this.current = value;
	    }
	
	    if (previous) {
	      previous.dispose();
	    }
	
	    if (isDisposed && value) {
	      value.dispose();
	    }
	  };
	
	  /**
	   * Disposes the underlying disposable as well as all future replacements.
	   */
	
	  SerialDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }
	
	    this.isDisposed = true;
	    var previous = this.current;
	    this.current = null;
	
	    if (previous) {
	      previous.dispose();
	    }
	  };
	
	  return SerialDisposable;
	})();
	
	exports['default'] = SerialDisposable;
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = registerSource;
	
	function registerSource(type, source, manager) {
	  var registry = manager.getRegistry();
	  var sourceId = registry.addSource(type, source);
	
	  function unregisterSource() {
	    registry.removeSource(sourceId);
	  }
	
	  return {
	    handlerId: sourceId,
	    unregister: unregisterSource
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = createSourceFactory;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsPlainObject = __webpack_require__(114);
	
	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);
	
	var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'canDrag', 'isDragging', 'endDrag'];
	var REQUIRED_SPEC_METHODS = ['beginDrag'];
	
	function createSourceFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    _invariant2['default'](ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });
	  REQUIRED_SPEC_METHODS.forEach(function (key) {
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });
	
	  var Source = (function () {
	    function Source(monitor) {
	      _classCallCheck(this, Source);
	
	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }
	
	    Source.prototype.receiveProps = function receiveProps(props) {
	      this.props = props;
	    };
	
	    Source.prototype.receiveComponent = function receiveComponent(component) {
	      this.component = component;
	    };
	
	    Source.prototype.canDrag = function canDrag() {
	      if (!spec.canDrag) {
	        return true;
	      }
	
	      return spec.canDrag(this.props, this.monitor);
	    };
	
	    Source.prototype.isDragging = function isDragging(globalMonitor, sourceId) {
	      if (!spec.isDragging) {
	        return sourceId === globalMonitor.getSourceId();
	      }
	
	      return spec.isDragging(this.props, this.monitor);
	    };
	
	    Source.prototype.beginDrag = function beginDrag() {
	      var item = spec.beginDrag(this.props, this.monitor, this.component);
	      if (process.env.NODE_ENV !== 'production') {
	        _invariant2['default'](_lodashIsPlainObject2['default'](item), 'beginDrag() must return a plain object that represents the dragged item. ' + 'Instead received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', item);
	      }
	      return item;
	    };
	
	    Source.prototype.endDrag = function endDrag() {
	      if (!spec.endDrag) {
	        return;
	      }
	
	      spec.endDrag(this.props, this.monitor, this.component);
	    };
	
	    return Source;
	  })();
	
	  return function createSource(monitor) {
	    return new Source(monitor);
	  };
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createSourceMonitor;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var isCallingCanDrag = false;
	var isCallingIsDragging = false;
	
	var SourceMonitor = (function () {
	  function SourceMonitor(manager) {
	    _classCallCheck(this, SourceMonitor);
	
	    this.internalMonitor = manager.getMonitor();
	  }
	
	  SourceMonitor.prototype.receiveHandlerId = function receiveHandlerId(sourceId) {
	    this.sourceId = sourceId;
	  };
	
	  SourceMonitor.prototype.canDrag = function canDrag() {
	    _invariant2['default'](!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');
	
	    try {
	      isCallingCanDrag = true;
	      return this.internalMonitor.canDragSource(this.sourceId);
	    } finally {
	      isCallingCanDrag = false;
	    }
	  };
	
	  SourceMonitor.prototype.isDragging = function isDragging() {
	    _invariant2['default'](!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');
	
	    try {
	      isCallingIsDragging = true;
	      return this.internalMonitor.isDraggingSource(this.sourceId);
	    } finally {
	      isCallingIsDragging = false;
	    }
	  };
	
	  SourceMonitor.prototype.getItemType = function getItemType() {
	    return this.internalMonitor.getItemType();
	  };
	
	  SourceMonitor.prototype.getItem = function getItem() {
	    return this.internalMonitor.getItem();
	  };
	
	  SourceMonitor.prototype.getDropResult = function getDropResult() {
	    return this.internalMonitor.getDropResult();
	  };
	
	  SourceMonitor.prototype.didDrop = function didDrop() {
	    return this.internalMonitor.didDrop();
	  };
	
	  SourceMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.internalMonitor.getInitialClientOffset();
	  };
	
	  SourceMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.internalMonitor.getInitialSourceClientOffset();
	  };
	
	  SourceMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return this.internalMonitor.getSourceClientOffset();
	  };
	
	  SourceMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.internalMonitor.getClientOffset();
	  };
	
	  SourceMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return this.internalMonitor.getDifferenceFromInitialOffset();
	  };
	
	  return SourceMonitor;
	})();
	
	function createSourceMonitor(manager) {
	  return new SourceMonitor(manager);
	}
	
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createSourceConnector;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _wrapConnectorHooks = __webpack_require__(129);
	
	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);
	
	var _areOptionsEqual = __webpack_require__(131);
	
	var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);
	
	function createSourceConnector(backend) {
	  var currentHandlerId = undefined;
	
	  var currentDragSourceNode = undefined;
	  var currentDragSourceOptions = undefined;
	  var disconnectCurrentDragSource = undefined;
	
	  var currentDragPreviewNode = undefined;
	  var currentDragPreviewOptions = undefined;
	  var disconnectCurrentDragPreview = undefined;
	
	  function reconnectDragSource() {
	    if (disconnectCurrentDragSource) {
	      disconnectCurrentDragSource();
	      disconnectCurrentDragSource = null;
	    }
	
	    if (currentHandlerId && currentDragSourceNode) {
	      disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);
	    }
	  }
	
	  function reconnectDragPreview() {
	    if (disconnectCurrentDragPreview) {
	      disconnectCurrentDragPreview();
	      disconnectCurrentDragPreview = null;
	    }
	
	    if (currentHandlerId && currentDragPreviewNode) {
	      disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions);
	    }
	  }
	
	  function receiveHandlerId(handlerId) {
	    if (handlerId === currentHandlerId) {
	      return;
	    }
	
	    currentHandlerId = handlerId;
	    reconnectDragSource();
	    reconnectDragPreview();
	  }
	
	  var hooks = _wrapConnectorHooks2['default']({
	    dragSource: function connectDragSource(node, options) {
	      if (node === currentDragSourceNode && _areOptionsEqual2['default'](options, currentDragSourceOptions)) {
	        return;
	      }
	
	      currentDragSourceNode = node;
	      currentDragSourceOptions = options;
	
	      reconnectDragSource();
	    },
	
	    dragPreview: function connectDragPreview(node, options) {
	      if (node === currentDragPreviewNode && _areOptionsEqual2['default'](options, currentDragPreviewOptions)) {
	        return;
	      }
	
	      currentDragPreviewNode = node;
	      currentDragPreviewOptions = options;
	
	      reconnectDragPreview();
	    }
	  });
	
	  return {
	    receiveHandlerId: receiveHandlerId,
	    hooks: hooks
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = wrapConnectorHooks;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsCloneWithRef = __webpack_require__(130);
	
	var _utilsCloneWithRef2 = _interopRequireDefault(_utilsCloneWithRef);
	
	var _react = __webpack_require__(4);
	
	function throwIfCompositeComponentElement(element) {
	  // Custom components can no longer be wrapped directly in React DnD 2.0
	  // so that we don't need to depend on findDOMNode() from react-dom.
	  if (typeof element.type === 'string') {
	    return;
	  }
	
	  var displayName = element.type.displayName || element.type.name || 'the component';
	
	  throw new Error('Only native element nodes can now be passed to React DnD connectors. ' + ('You can either wrap ' + displayName + ' into a <div>, or turn it into a ') + 'drag source or a drop target itself.');
	}
	
	function wrapHookToRecognizeElement(hook) {
	  return function () {
	    var elementOrNode = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var options = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	    // When passed a node, call the hook straight away.
	    if (!_react.isValidElement(elementOrNode)) {
	      var node = elementOrNode;
	      hook(node, options);
	      return;
	    }
	
	    // If passed a ReactElement, clone it and attach this function as a ref.
	    // This helps us achieve a neat API where user doesn't even know that refs
	    // are being used under the hood.
	    var element = elementOrNode;
	    throwIfCompositeComponentElement(element);
	
	    // When no options are passed, use the hook directly
	    var ref = options ? function (node) {
	      return hook(node, options);
	    } : hook;
	
	    return _utilsCloneWithRef2['default'](element, ref);
	  };
	}
	
	function wrapConnectorHooks(hooks) {
	  var wrappedHooks = {};
	
	  Object.keys(hooks).forEach(function (key) {
	    var hook = hooks[key];
	    var wrappedHook = wrapHookToRecognizeElement(hook);
	    wrappedHooks[key] = function () {
	      return wrappedHook;
	    };
	  });
	
	  return wrappedHooks;
	}
	
	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = cloneWithRef;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(4);
	
	function cloneWithRef(element, newRef) {
	  var previousRef = element.ref;
	  _invariant2['default'](typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');
	
	  if (!previousRef) {
	    // When there is no ref on the element, use the new ref directly
	    return _react.cloneElement(element, {
	      ref: newRef
	    });
	  }
	
	  return _react.cloneElement(element, {
	    ref: function ref(node) {
	      newRef(node);
	
	      if (previousRef) {
	        previousRef(node);
	      }
	    }
	  });
	}
	
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = areOptionsEqual;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsShallowEqual = __webpack_require__(112);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	function areOptionsEqual(nextOptions, currentOptions) {
	  if (currentOptions === nextOptions) {
	    return true;
	  }
	
	  return currentOptions !== null && nextOptions !== null && _utilsShallowEqual2['default'](currentOptions, nextOptions);
	}
	
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isValidType;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashIsArray = __webpack_require__(133);
	
	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);
	
	function isValidType(type, allowArray) {
	       return typeof type === 'string' || typeof type === 'symbol' || allowArray && _lodashIsArray2['default'](type) && type.every(function (t) {
	              return isValidType(t, false);
	       });
	}
	
	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DropTarget;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsPlainObject = __webpack_require__(114);
	
	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(110);
	
	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
	
	var _decorateHandler = __webpack_require__(119);
	
	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);
	
	var _registerTarget = __webpack_require__(135);
	
	var _registerTarget2 = _interopRequireDefault(_registerTarget);
	
	var _createTargetFactory = __webpack_require__(136);
	
	var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);
	
	var _createTargetMonitor = __webpack_require__(137);
	
	var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);
	
	var _createTargetConnector = __webpack_require__(138);
	
	var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);
	
	var _utilsIsValidType = __webpack_require__(132);
	
	var _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);
	
	function DropTarget(type, spec, collect) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DropTarget', 'type, spec, collect[, options]'].concat(_slice.call(arguments)));
	  var getType = type;
	  if (typeof type !== 'function') {
	    _invariant2['default'](_utilsIsValidType2['default'](type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', type);
	    getType = function () {
	      return type;
	    };
	  }
	  _invariant2['default'](_lodashIsPlainObject2['default'](spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', spec);
	  var createTarget = _createTargetFactory2['default'](spec);
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect);
	  _invariant2['default'](_lodashIsPlainObject2['default'](options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect);
	
	  return function decorateTarget(DecoratedComponent) {
	    return _decorateHandler2['default']({
	      connectBackend: function connectBackend(backend, targetId) {
	        return backend.connectDropTarget(targetId);
	      },
	      containerDisplayName: 'DropTarget',
	      createHandler: createTarget,
	      registerHandler: _registerTarget2['default'],
	      createMonitor: _createTargetMonitor2['default'],
	      createConnector: _createTargetConnector2['default'],
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = registerTarget;
	
	function registerTarget(type, target, manager) {
	  var registry = manager.getRegistry();
	  var targetId = registry.addTarget(type, target);
	
	  function unregisterTarget() {
	    registry.removeTarget(targetId);
	  }
	
	  return {
	    handlerId: targetId,
	    unregister: unregisterTarget
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = createTargetFactory;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsPlainObject = __webpack_require__(114);
	
	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);
	
	var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];
	
	function createTargetFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    _invariant2['default'](ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
	  });
	
	  var Target = (function () {
	    function Target(monitor) {
	      _classCallCheck(this, Target);
	
	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }
	
	    Target.prototype.receiveProps = function receiveProps(props) {
	      this.props = props;
	    };
	
	    Target.prototype.receiveMonitor = function receiveMonitor(monitor) {
	      this.monitor = monitor;
	    };
	
	    Target.prototype.receiveComponent = function receiveComponent(component) {
	      this.component = component;
	    };
	
	    Target.prototype.canDrop = function canDrop() {
	      if (!spec.canDrop) {
	        return true;
	      }
	
	      return spec.canDrop(this.props, this.monitor);
	    };
	
	    Target.prototype.hover = function hover() {
	      if (!spec.hover) {
	        return;
	      }
	
	      spec.hover(this.props, this.monitor, this.component);
	    };
	
	    Target.prototype.drop = function drop() {
	      if (!spec.drop) {
	        return;
	      }
	
	      var dropResult = spec.drop(this.props, this.monitor, this.component);
	      if (process.env.NODE_ENV !== 'production') {
	        _invariant2['default'](typeof dropResult === 'undefined' || _lodashIsPlainObject2['default'](dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' + 'Instead received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', dropResult);
	      }
	      return dropResult;
	    };
	
	    return Target;
	  })();
	
	  return function createTarget(monitor) {
	    return new Target(monitor);
	  };
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createTargetMonitor;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var isCallingCanDrop = false;
	
	var TargetMonitor = (function () {
	  function TargetMonitor(manager) {
	    _classCallCheck(this, TargetMonitor);
	
	    this.internalMonitor = manager.getMonitor();
	  }
	
	  TargetMonitor.prototype.receiveHandlerId = function receiveHandlerId(targetId) {
	    this.targetId = targetId;
	  };
	
	  TargetMonitor.prototype.canDrop = function canDrop() {
	    _invariant2['default'](!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target-monitor.html');
	
	    try {
	      isCallingCanDrop = true;
	      return this.internalMonitor.canDropOnTarget(this.targetId);
	    } finally {
	      isCallingCanDrop = false;
	    }
	  };
	
	  TargetMonitor.prototype.isOver = function isOver(options) {
	    return this.internalMonitor.isOverTarget(this.targetId, options);
	  };
	
	  TargetMonitor.prototype.getItemType = function getItemType() {
	    return this.internalMonitor.getItemType();
	  };
	
	  TargetMonitor.prototype.getItem = function getItem() {
	    return this.internalMonitor.getItem();
	  };
	
	  TargetMonitor.prototype.getDropResult = function getDropResult() {
	    return this.internalMonitor.getDropResult();
	  };
	
	  TargetMonitor.prototype.didDrop = function didDrop() {
	    return this.internalMonitor.didDrop();
	  };
	
	  TargetMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.internalMonitor.getInitialClientOffset();
	  };
	
	  TargetMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.internalMonitor.getInitialSourceClientOffset();
	  };
	
	  TargetMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return this.internalMonitor.getSourceClientOffset();
	  };
	
	  TargetMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.internalMonitor.getClientOffset();
	  };
	
	  TargetMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return this.internalMonitor.getDifferenceFromInitialOffset();
	  };
	
	  return TargetMonitor;
	})();
	
	function createTargetMonitor(manager) {
	  return new TargetMonitor(manager);
	}
	
	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createTargetConnector;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _wrapConnectorHooks = __webpack_require__(129);
	
	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);
	
	var _areOptionsEqual = __webpack_require__(131);
	
	var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);
	
	function createTargetConnector(backend) {
	  var currentHandlerId = undefined;
	
	  var currentDropTargetNode = undefined;
	  var currentDropTargetOptions = undefined;
	  var disconnectCurrentDropTarget = undefined;
	
	  function reconnectDropTarget() {
	    if (disconnectCurrentDropTarget) {
	      disconnectCurrentDropTarget();
	      disconnectCurrentDropTarget = null;
	    }
	
	    if (currentHandlerId && currentDropTargetNode) {
	      disconnectCurrentDropTarget = backend.connectDropTarget(currentHandlerId, currentDropTargetNode, currentDropTargetOptions);
	    }
	  }
	
	  function receiveHandlerId(handlerId) {
	    if (handlerId === currentHandlerId) {
	      return;
	    }
	
	    currentHandlerId = handlerId;
	    reconnectDropTarget();
	  }
	
	  var hooks = _wrapConnectorHooks2['default']({
	    dropTarget: function connectDropTarget(node, options) {
	      if (node === currentDropTargetNode && _areOptionsEqual2['default'](options, currentDropTargetOptions)) {
	        return;
	      }
	
	      currentDropTargetNode = node;
	      currentDropTargetOptions = options;
	
	      reconnectDropTarget();
	    }
	  });
	
	  return {
	    receiveHandlerId: receiveHandlerId,
	    hooks: hooks
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 139 */
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
	
	var EventBase = function (_React$Component) {
	  _inherits(EventBase, _React$Component);
	
	  function EventBase() {
	    _classCallCheck(this, EventBase);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EventBase).apply(this, arguments));
	  }
	
	  _createClass(EventBase, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        function () {
	          if (_this2.props.draggingDisplay) {
	            return _react2.default.createElement(
	              'div',
	              { className: 'tlDraggingDisplay', style: { top: _this2.props.draggingDisplayTop } },
	              _this2.props.draggingDisplay
	            );
	          }
	        }(),
	        this.props.display.map(function (row) {
	          return _react2.default.createElement(
	            'div',
	            { className: (0, _classnames2.default)('tlEventDisplayRow', row.key), key: row.key },
	            row.value
	          );
	        }),
	        ' '
	      );
	    }
	  }]);
	
	  return EventBase;
	}(_react2.default.Component);
	
	exports.default = EventBase;
	
	
	EventBase.defaultProps = {
	  display: []
	};

/***/ },
/* 140 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventActions = function () {
	  function EventActions(component) {
	    _classCallCheck(this, EventActions);
	
	    this.component = component;
	  }
	
	  _createClass(EventActions, [{
	    key: 'resize',
	    value: function resize() {
	      this.component.setState({
	        resizable: true
	      });
	    }
	  }, {
	    key: 'float',
	    value: function float() {
	      this.component.setState({
	        draggable: true,
	        draggingDisplay: this.component.timeSpan.getStartTime().getDisplayTime()
	      });
	    }
	  }, {
	    key: 'isFixed',
	    value: function isFixed() {
	      return !this.component.state.draggable && !this.component.state.resizable;
	    }
	  }, {
	    key: 'isFixable',
	    value: function isFixable() {
	      var newPosition = this.component.nextPosition;
	      if (!newPosition) {
	        return true;
	      }
	
	      return this.component.isFreePosition(newPosition);
	    }
	  }, {
	    key: 'isCancelable',
	    value: function isCancelable() {
	      var newPosition = this.component.prevPosition;
	      if (!newPosition) {
	        return true;
	      }
	
	      return this.component.isFreePosition(newPosition);
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      if (this.component.draggingPosition) {
	        var left = this.component.props.timeline.getLineLeft(this.component.lineId);
	        var top = this.component.props.timeline.timeToTop(this.component.timeSpan.getStartTime());
	        this.component.draggingPosition = null;
	        this.component.setState({
	          draggable: false,
	          draggingDisplay: '',
	          top: top,
	          left: left
	        });
	      } else if (this.component.resizingTimeSpan) {
	        var _top = this.component.props.timeline.timeToTop(this.component.timeSpan.getStartTime());
	        var height = this.component.props.timeline.timeSpanToHeight(this.component.timeSpan);
	        this.component.resizingTimeSpan = null;
	        this.component.setState({
	          resizable: false,
	          draggingDisplay: '',
	          top: _top,
	          height: height
	        });
	      } else {
	        this.component.setState({
	          draggable: false,
	          resizable: false,
	          draggingDisplay: ''
	        });
	      }
	
	      this.component.props.timeline.clearDraggingOver();
	    }
	  }, {
	    key: 'fix',
	    value: function fix() {
	      if (this.component.draggingPosition) {
	        this.component.lineId = this.component.draggingPosition.lineId;
	        this.component.timeSpan = this.component.timeSpan.shiftStartTime(this.component.draggingPosition.time);
	        this.component.setState({
	          top: this.component.props.timeline.timeToTop(this.component.draggingPosition.time),
	          left: this.component.props.timeline.getLineLeft(this.component.draggingPosition.lineId),
	          draggable: false,
	          draggingDisplay: ''
	        });
	        this.component.draggingPosition = null;
	      } else if (this.component.resizingTimeSpan) {
	        this.component.timeSpan = this.component.resizingTimeSpan;
	        this.component.resizingTimeSpan = null;
	        this.component.setState({
	          resizable: false,
	          draggingDisplay: ''
	        });
	      } else {
	        this.component.setState({
	          draggable: false,
	          resizable: false,
	          draggingDisplay: ''
	        });
	      }
	
	      this.component.props.timeline.clearDraggingOver();
	    }
	  }]);
	
	  return EventActions;
	}();
	
	exports.default = EventActions;

/***/ },
/* 141 */
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
	
	var _Line = __webpack_require__(142);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactDnd = __webpack_require__(10);
	
	var _reactDndTouchBackend = __webpack_require__(146);
	
	var _reactDndTouchBackend2 = _interopRequireDefault(_reactDndTouchBackend);
	
	var _EventPreview = __webpack_require__(147);
	
	var _EventPreview2 = _interopRequireDefault(_EventPreview);
	
	var _Event = __webpack_require__(8);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _Ruler = __webpack_require__(144);
	
	var _Ruler2 = _interopRequireDefault(_Ruler);
	
	var _LineLabel = __webpack_require__(145);
	
	var _LineLabel2 = _interopRequireDefault(_LineLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var target = {
	  drop: function drop(props, monitor, component) {
	    var item = monitor.getItem();
	    var eventComponent = item.timeline.findEventById(item.id);
	    var delta = monitor.getDifferenceFromInitialOffset();
	    var top = Math.round(eventComponent.state.top + delta.y);
	    var left = Math.round(eventComponent.state.left + delta.x);
	
	    eventComponent.moveTo(top, left);
	  },
	  hover: function hover(props, monitor, component) {
	    var clientOffset = monitor.getSourceClientOffset();
	    if (clientOffset) {
	      var eventComponent = props.timeline.findEventById(monitor.getItem().id);
	      var lineWrapperBounds = props.timeline.frameComponent.refs.linesWrapper.getBoundingClientRect();
	      var lineComponent = props.timeline.draggingOver(clientOffset.x - lineWrapperBounds.left + eventComponent.props.width / 2 /*eventの真ん中を基準にする*/);
	      var time = props.timeline.topToTime(clientOffset.y + props.timeline.frameComponent.refs.linesWrapper.scrollTop - lineWrapperBounds.top);
	      eventComponent.dragging(time, lineComponent.props.lineId);
	    }
	  }
	};
	
	function collect(connect, monitor) {
	  return {
	    connectDropTarget: connect.dropTarget()
	  };
	}
	
	var Frame = function (_React$Component) {
	  _inherits(Frame, _React$Component);
	
	  function Frame(props) {
	    _classCallCheck(this, Frame);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Frame).call(this, props));
	
	    _this.props.timeline.frameComponent = _this;
	
	    var rulerInterval = 4;
	
	    var lines = [];
	    var labels = [];
	    _this.props.lineData.forEach(function (data) {
	      _this.createLineComponent(data, lines, labels);
	    });
	
	    _this.state = {
	      lines: lines,
	      labels: labels,
	      events: [],
	      height: _this.props.height
	    };
	
	    _this.resizingEvent = null;
	    return _this;
	  }
	
	  _createClass(Frame, [{
	    key: 'resizeUp',
	    value: function resizeUp(eventComponent, clickedTop) {
	      var _this2 = this;
	
	      var initialHeight = eventComponent.state.height;
	      var prevBottom = this.props.timeline.getPrevBottom(eventComponent);
	      var mouseMoveEvent = function mouseMoveEvent(moveEvent) {
	        eventComponent.resizing = true;
	        var targetHeight = initialHeight + clickedTop - moveEvent.clientY;
	        if (targetHeight > 36) {
	          var targetTop = eventComponent.state.top - (targetHeight - eventComponent.state.height);
	          if (targetTop <= prevBottom) {
	            targetTop = prevBottom;
	          }
	
	          eventComponent.resizingTimeSpan = new _TimeSpan2.default(_this2.props.timeline.topToTime(targetTop), eventComponent.currentTimeSpan.getEndTime());
	          eventComponent.setState({
	            height: _this2.props.timeline.timeSpanToHeight(eventComponent.resizingTimeSpan),
	            top: _this2.props.timeline.timeToTop(eventComponent.resizingTimeSpan.getStartTime()),
	            draggingDisplay: eventComponent.resizingTimeSpan.getStartTime().getDisplayTime()
	          });
	        }
	      };
	
	      var stopMoveEvent = function stopMoveEvent(mouseEvent) {
	        _this2.refs.linesWrapper.removeEventListener('mousemove', mouseMoveEvent);
	        _this2.refs.linesWrapper.removeEventListener('mouseup', stopMoveEvent);
	        _this2.refs.linesWrapper.removeEventListener('mouseleave', stopMoveEvent);
	        eventComponent.endResizing(mouseEvent);
	      };
	
	      this.refs.linesWrapper.addEventListener('mousemove', mouseMoveEvent);
	      this.refs.linesWrapper.addEventListener('mouseup', stopMoveEvent);
	      this.refs.linesWrapper.addEventListener('mouseleave', stopMoveEvent);
	    }
	  }, {
	    key: 'resizeDown',
	    value: function resizeDown(eventComponent, clickedTop) {
	      var _this3 = this;
	
	      var initialHeight = eventComponent.state.height;
	      var nextTop = this.props.timeline.getNextTop(eventComponent);
	      var mouseMoveEvent = function mouseMoveEvent(moveEvent) {
	        eventComponent.resizing = true;
	        var targetHeight = initialHeight + moveEvent.clientY - clickedTop;
	        if (targetHeight > 36) {
	          var targetBottom = eventComponent.state.top + targetHeight;
	          if (targetBottom >= nextTop) {
	            targetBottom = nextTop;
	          }
	
	          eventComponent.resizingTimeSpan = new _TimeSpan2.default(eventComponent.currentTimeSpan.getStartTime(), _this3.props.timeline.topToTime(targetBottom));
	          eventComponent.setState({
	            height: _this3.props.timeline.timeSpanToHeight(eventComponent.resizingTimeSpan),
	            draggingDisplay: eventComponent.resizingTimeSpan.getEndTime().getDisplayTime(),
	            draggingDisplayTop: targetHeight - 10
	          });
	        }
	      };
	
	      var stopMoveEvent = function stopMoveEvent(mouseEvent) {
	        _this3.refs.linesWrapper.removeEventListener('mousemove', mouseMoveEvent);
	        _this3.refs.linesWrapper.removeEventListener('mouseup', stopMoveEvent);
	        _this3.refs.linesWrapper.removeEventListener('mouseleave', stopMoveEvent);
	        eventComponent.endResizing(mouseEvent);
	      };
	
	      this.refs.linesWrapper.addEventListener('mousemove', mouseMoveEvent);
	      this.refs.linesWrapper.addEventListener('mouseup', stopMoveEvent);
	      this.refs.linesWrapper.addEventListener('mouseleave', stopMoveEvent);
	    }
	  }, {
	    key: 'createLineComponent',
	    value: function createLineComponent(data, lines, labels) {
	      var hasRuler = lines.length % this.props.rulerInterval === 0;
	      var prevRuler = (lines.length + 1) % this.props.rulerInterval === 0;
	
	      labels.push(_react2.default.createElement(_LineLabel2.default, {
	        key: data.id,
	        width: this.props.lineWidth,
	        hasRuler: hasRuler,
	        prevRuler: prevRuler,
	        label: data.label,
	        timeline: this.props.timeline
	      }));
	
	      lines.push(_react2.default.createElement(_Line2.default, {
	        hasRuler: hasRuler,
	        label: data.l,
	        key: data.id,
	        lineId: data.id,
	        width: this.props.lineWidth,
	        minHeight: this.props.minHeight,
	        timeSpan: this.props.timeSpan,
	        onClickLine: this.props.onClickLine,
	        even: lines.length % 2 === 0,
	        timeline: this.props.timeline
	      }));
	    }
	  }, {
	    key: 'addEvents',
	    value: function addEvents(events) {
	      var _this4 = this;
	
	      var current = this.state.events;
	      events.forEach(function (event) {
	        if (!event.id) {
	          event.id = _this4.props.timeline.createEventId();
	        }
	        current.push(event);
	      });
	      this.setState({ events: current });
	    }
	  }, {
	    key: 'setHeight',
	    value: function setHeight(height) {
	      this.setState({ height: height });
	    }
	  }, {
	    key: 'getRelativePos',
	    value: function getRelativePos(e) {
	      return {
	        top: e.clientY - e.currentTarget.offsetTop + e.currentTarget.scrollTop,
	        left: e.clientX - e.currentTarget.offsetLeft + e.currentTarget.scrollLeft
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;
	
	      var connectDropTarget = this.props.connectDropTarget;
	
	      return connectDropTarget(_react2.default.createElement(
	        'div',
	        { className: 'tlFrameView', style: { minWidth: this.props.timeline.getTotalWidth() + 'px' } },
	        _react2.default.createElement(
	          'div',
	          { className: 'tlLabelView', style: { height: _LineLabel2.default.height } },
	          this.state.labels
	        ),
	        _react2.default.createElement(
	          'div',
	          { ref: 'linesWrapper', className: 'tlLinesWrapper', style: { height: this.state.height - _LineLabel2.default.height } },
	          this.state.lines,
	          this.state.events.map(function (event) {
	            return _react2.default.createElement(_Event2.default, {
	              key: event.id,
	              id: event.id,
	              color: event.color,
	              timeSpan: event.timeSpan,
	              display: event.display,
	              lineId: event.lineId,
	              timeline: _this5.props.timeline,
	              width: _this5.props.timeline.props.lineWidth - 2 - _Line2.default.sidePadding * 2
	            });
	          })
	        ),
	        _react2.default.createElement(_EventPreview2.default, null)
	      ));
	    }
	  }]);
	
	  return Frame;
	}(_react2.default.Component);
	
	Frame.propTypes = {
	  timeSpan: _react2.default.PropTypes.instanceOf(_TimeSpan2.default).isRequired,
	  lineData: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    id: _react2.default.PropTypes.string.isRequired,
	    label: _react2.default.PropTypes.string.isRequired
	  })).isRequired,
	  lineWidth: _react2.default.PropTypes.number.isRequired,
	  minHeight: _react2.default.PropTypes.number.isRequired,
	  onClick: _react2.default.PropTypes.func,
	  timeline: _react2.default.PropTypes.any.isRequired,
	  rulerInterval: _react2.default.PropTypes.number.isRequired,
	  height: _react2.default.PropTypes.number.isRequired
	};
	
	exports.default = (0, _reactDnd.DragDropContext)((0, _reactDndTouchBackend2.default)({ enableMouseEvents: true }))((0, _reactDnd.DropTarget)("Event", target, collect)(Frame));

/***/ },
/* 142 */
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
	
	var _Hour = __webpack_require__(143);
	
	var _Hour2 = _interopRequireDefault(_Hour);
	
	var _Ruler = __webpack_require__(144);
	
	var _Ruler2 = _interopRequireDefault(_Ruler);
	
	var _LineLabel = __webpack_require__(145);
	
	var _LineLabel2 = _interopRequireDefault(_LineLabel);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Line = function (_React$Component) {
	  _inherits(Line, _React$Component);
	
	  function Line(props) {
	    _classCallCheck(this, Line);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Line).call(this, props));
	
	    _this.props.timeline.addLineComponent(_this);
	
	    _this.state = {
	      hours: [],
	      events: [],
	      draggingOver: false
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
	      return e.clientY - e.currentTarget.parentNode.offsetTop + e.currentTarget.parentNode.scrollTop;
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.timeline.props.onClickLine) {
	        var time = this.props.timeline.topToTime(this.getRelativeTop(e));
	        this.props.timeline.props.onClickLine({
	          event: e,
	          component: this,
	          time: time
	        });
	      }
	    }
	  }, {
	    key: 'onContextMenu',
	    value: function onContextMenu(e) {
	      if (this.props.timeline.props.onRightClickLine) {
	        this.props.timeline.props.onRightClickLine({
	          component: this,
	          event: e
	        });
	      }
	    }
	  }, {
	    key: 'draggingOver',
	    value: function draggingOver() {
	      this.setState({ draggingOver: true });
	    }
	  }, {
	    key: 'clearDraggingOver',
	    value: function clearDraggingOver() {
	      this.setState({ draggingOver: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { onClick: function onClick(e) {
	            return _this2.onClick(e);
	          }, onContextMenu: function onContextMenu(e) {
	            return _this2.onContextMenu(e);
	          } },
	        function () {
	          if (_this2.props.hasRuler) {
	            return _react2.default.createElement(_Ruler2.default, {
	              key: 'ruler_' + _this2.props.lineId,
	              minHeight: _this2.props.minHeight,
	              timeSpan: _this2.props.timeSpan
	            });
	          }
	        }(),
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)('tlLineView', { even: this.props.even, odd: !this.props.even }, { over: this.state.draggingOver }), style: { width: this.props.width + 'px' } },
	          this.state.hours
	        )
	      );
	    }
	  }]);
	
	  return Line;
	}(_react2.default.Component);
	
	exports.default = Line;
	
	
	Line.sidePadding = 1;
	
	Line.propTypes = {
	  width: _react2.default.PropTypes.number.isRequired,
	  minHeight: _react2.default.PropTypes.number.isRequired,
	  timeSpan: _react2.default.PropTypes.instanceOf(_TimeSpan2.default).isRequired,
	  lineId: _react2.default.PropTypes.string.isRequired,
	  onClick: _react2.default.PropTypes.func,
	  even: _react2.default.PropTypes.bool.isRequired,
	  //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
	  timeline: _react2.default.PropTypes.any.isRequired,
	  hasRuler: _react2.default.PropTypes.bool.isRequired
	};

/***/ },
/* 143 */
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
/* 144 */
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
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Ruler = __webpack_require__(144);
	
	var _Ruler2 = _interopRequireDefault(_Ruler);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LineLabel = function (_React$Component) {
	  _inherits(LineLabel, _React$Component);
	
	  function LineLabel(props) {
	    _classCallCheck(this, LineLabel);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LineLabel).call(this, props));
	
	    _this.state = {
	      hasRuler: _this.props.hasRuler,
	      prevRuler: _this.props.prevRuler,
	      isLast: true
	    };
	    return _this;
	  }
	
	  _createClass(LineLabel, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      //一つ前のlabelの右角の丸みを取る
	      var labelComponents = this.props.timeline.lineLabelComponents;
	      if (labelComponents.length) {
	        labelComponents[labelComponents.length - 1].setState({ isLast: false });
	      }
	
	      this.props.timeline.addLineLabelComponent(this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        {
	          style: { width: this.props.width, marginLeft: this.state.hasRuler ? _Ruler2.default.width + 'px' : 0 },
	          className: (0, _classnames2.default)({ tlLabel: true, tlHasRuler: this.state.hasRuler, tlPrevRuler: this.state.prevRuler || this.state.isLast })
	        },
	        this.props.label
	      );
	    }
	  }]);
	
	  return LineLabel;
	}(_react2.default.Component);
	
	exports.default = LineLabel;
	
	
	LineLabel.height = 16;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TouchBackend = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = createTouchBackend;
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function getEventClientTouchOffset(e) {
	    if (e.targetTouches.length === 1) {
	        return getEventClientOffset(e.targetTouches[0]);
	    }
	}
	
	function getEventClientOffset(e) {
	    if (e.targetTouches) {
	        return getEventClientTouchOffset(e);
	    } else {
	        return {
	            x: e.clientX,
	            y: e.clientY
	        };
	    }
	}
	
	var ELEMENT_NODE = 1;
	function getNodeClientOffset(node) {
	    var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
	
	    if (!el) {
	        return null;
	    }
	
	    var _el$getBoundingClient = el.getBoundingClientRect();
	
	    var top = _el$getBoundingClient.top;
	    var left = _el$getBoundingClient.left;
	
	    return { x: left, y: top };
	}
	
	var eventNames = {
	    mouse: {
	        start: 'mousedown',
	        move: 'mousemove',
	        end: 'mouseup'
	    },
	    touch: {
	        start: 'touchstart',
	        move: 'touchmove',
	        end: 'touchend'
	    }
	};
	
	var TouchBackend = exports.TouchBackend = function () {
	    function TouchBackend(manager) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        _classCallCheck(this, TouchBackend);
	
	        options.delayTouchStart = options.delayTouchStart || options.delay;
	
	        options = _extends({
	            enableTouchEvents: true,
	            enableMouseEvents: false,
	            delayTouchStart: 0,
	            delayMouseStart: 0
	        }, options);
	
	        this.actions = manager.getActions();
	        this.monitor = manager.getMonitor();
	        this.registry = manager.getRegistry();
	
	        this.delayTouchStart = options.delayTouchStart;
	        this.delayMouseStart = options.delayMouseStart;
	        this.sourceNodes = {};
	        this.sourceNodeOptions = {};
	        this.sourcePreviewNodes = {};
	        this.sourcePreviewNodeOptions = {};
	        this.targetNodes = {};
	        this.targetNodeOptions = {};
	        this.listenerTypes = [];
	        this._mouseClientOffset = {};
	
	        if (options.enableMouseEvents) {
	            this.listenerTypes.push('mouse');
	        }
	
	        if (options.enableTouchEvents) {
	            this.listenerTypes.push('touch');
	        }
	
	        this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
	        this.handleTopMoveStart = this.handleTopMoveStart.bind(this);
	        this.handleTopMoveStartDelay = this.handleTopMoveStartDelay.bind(this);
	        this.handleTopMoveStartCapture = this.handleTopMoveStartCapture.bind(this);
	        this.handleTopMoveCapture = this.handleTopMoveCapture.bind(this);
	        this.handleTopMoveEndCapture = this.handleTopMoveEndCapture.bind(this);
	    }
	
	    _createClass(TouchBackend, [{
	        key: 'setup',
	        value: function setup() {
	            if (typeof window === 'undefined') {
	                return;
	            }
	
	            (0, _invariant2.default)(!this.constructor.isSetUp, 'Cannot have two Touch backends at the same time.');
	            this.constructor.isSetUp = true;
	
	            this.addEventListener(window, 'start', this.getTopMoveStartHandler());
	            this.addEventListener(window, 'start', this.handleTopMoveStartCapture, true);
	            this.addEventListener(window, 'move', this.handleTopMoveCapture, true);
	            this.addEventListener(window, 'end', this.handleTopMoveEndCapture, true);
	        }
	    }, {
	        key: 'teardown',
	        value: function teardown() {
	            if (typeof window === 'undefined') {
	                return;
	            }
	
	            this.constructor.isSetUp = false;
	            this._mouseClientOffset = {};
	
	            this.removeEventListener(window, 'start', this.handleTopMoveStartCapture, true);
	            this.removeEventListener(window, 'start', this.handleTopMoveStart);
	            this.removeEventListener(window, 'move', this.handleTopMoveCapture, true);
	            this.removeEventListener(window, 'end', this.handleTopMoveEndCapture, true);
	
	            this.uninstallSourceNodeRemovalObserver();
	        }
	    }, {
	        key: 'addEventListener',
	        value: function addEventListener(subject, event, handler, capture) {
	            this.listenerTypes.forEach(function (listenerType) {
	                subject.addEventListener(eventNames[listenerType][event], handler, capture);
	            });
	        }
	    }, {
	        key: 'removeEventListener',
	        value: function removeEventListener(subject, event, handler, capture) {
	            this.listenerTypes.forEach(function (listenerType) {
	                subject.removeEventListener(eventNames[listenerType][event], handler, capture);
	            });
	        }
	    }, {
	        key: 'connectDragSource',
	        value: function connectDragSource(sourceId, node, options) {
	            var _this = this;
	
	            var handleMoveStart = this.handleMoveStart.bind(this, sourceId);
	            this.sourceNodes[sourceId] = node;
	
	            this.addEventListener(node, 'start', handleMoveStart);
	
	            return function () {
	                delete _this.sourceNodes[sourceId];
	                _this.removeEventListener(node, 'start', handleMoveStart);
	            };
	        }
	    }, {
	        key: 'connectDragPreview',
	        value: function connectDragPreview(sourceId, node, options) {
	            var _this2 = this;
	
	            this.sourcePreviewNodeOptions[sourceId] = options;
	            this.sourcePreviewNodes[sourceId] = node;
	
	            return function () {
	                delete _this2.sourcePreviewNodes[sourceId];
	                delete _this2.sourcePreviewNodeOptions[sourceId];
	            };
	        }
	    }, {
	        key: 'connectDropTarget',
	        value: function connectDropTarget(targetId, node) {
	            var _this3 = this;
	
	            this.targetNodes[targetId] = node;
	
	            return function () {
	                delete _this3.targetNodes[targetId];
	            };
	        }
	    }, {
	        key: 'getSourceClientOffset',
	        value: function getSourceClientOffset(sourceId) {
	            return getNodeClientOffset(this.sourceNodes[sourceId]);
	        }
	    }, {
	        key: 'handleTopMoveStartCapture',
	        value: function handleTopMoveStartCapture(e) {
	            this.moveStartSourceIds = [];
	        }
	    }, {
	        key: 'handleMoveStart',
	        value: function handleMoveStart(sourceId) {
	            this.moveStartSourceIds.unshift(sourceId);
	        }
	    }, {
	        key: 'getTopMoveStartHandler',
	        value: function getTopMoveStartHandler() {
	            if (!this.delayTouchStart && !this.delayMouseStart) {
	                return this.handleTopMoveStart;
	            }
	
	            return this.handleTopMoveStartDelay;
	        }
	    }, {
	        key: 'handleTopMoveStart',
	        value: function handleTopMoveStart(e) {
	            // Don't prematurely preventDefault() here since it might:
	            // 1. Mess up scrolling
	            // 2. Mess up long tap (which brings up context menu)
	            // 3. If there's an anchor link as a child, tap won't be triggered on link
	
	            var clientOffset = getEventClientOffset(e);
	            if (clientOffset) {
	                this._mouseClientOffset = clientOffset;
	            }
	        }
	    }, {
	        key: 'handleTopMoveStartDelay',
	        value: function handleTopMoveStartDelay(e) {
	            var delay = e.type === eventNames.touch.start ? this.delayTouchStart : this.delayMouseStart;
	            this.timeout = setTimeout(this.handleTopMoveStart.bind(this, e), delay);
	        }
	    }, {
	        key: 'handleTopMoveCapture',
	        value: function handleTopMoveCapture(e) {
	            var _this4 = this;
	
	            clearTimeout(this.timeout);
	
	            var moveStartSourceIds = this.moveStartSourceIds;
	
	            var clientOffset = getEventClientOffset(e);
	
	            if (!clientOffset) {
	                return;
	            }
	
	            // If we're not dragging and we've moved a little, that counts as a drag start
	            if (!this.monitor.isDragging() && this._mouseClientOffset.hasOwnProperty('x') && moveStartSourceIds && (this._mouseClientOffset.x !== clientOffset.x || this._mouseClientOffset.y !== clientOffset.y)) {
	                this.moveStartSourceIds = null;
	                this.actions.beginDrag(moveStartSourceIds, {
	                    clientOffset: this._mouseClientOffset,
	                    getSourceClientOffset: this.getSourceClientOffset,
	                    publishSource: false
	                });
	            }
	
	            if (!this.monitor.isDragging()) {
	                return;
	            }
	
	            var sourceNode = this.sourceNodes[this.monitor.getSourceId()];
	            this.installSourceNodeRemovalObserver(sourceNode);
	            this.actions.publishDragSource();
	
	            e.preventDefault();
	
	            var matchingTargetIds = Object.keys(this.targetNodes).filter(function (targetId) {
	                var boundingRect = _this4.targetNodes[targetId].getBoundingClientRect();
	                return clientOffset.x >= boundingRect.left && clientOffset.x <= boundingRect.right && clientOffset.y >= boundingRect.top && clientOffset.y <= boundingRect.bottom;
	            });
	
	            this.actions.hover(matchingTargetIds, {
	                clientOffset: clientOffset
	            });
	        }
	    }, {
	        key: 'handleTopMoveEndCapture',
	        value: function handleTopMoveEndCapture(e) {
	            if (!this.monitor.isDragging() || this.monitor.didDrop()) {
	                this.moveStartSourceIds = null;
	                return;
	            }
	
	            e.preventDefault();
	
	            this._mouseClientOffset = {};
	
	            this.uninstallSourceNodeRemovalObserver();
	            this.actions.drop();
	            this.actions.endDrag();
	        }
	    }, {
	        key: 'installSourceNodeRemovalObserver',
	        value: function installSourceNodeRemovalObserver(node) {
	            var _this5 = this;
	
	            this.uninstallSourceNodeRemovalObserver();
	
	            this.draggedSourceNode = node;
	            this.draggedSourceNodeRemovalObserver = new window.MutationObserver(function () {
	                if (!node.parentElement) {
	                    _this5.resurrectSourceNode();
	                    _this5.uninstallSourceNodeRemovalObserver();
	                }
	            });
	
	            if (!node || !node.parentElement) {
	                return;
	            }
	
	            this.draggedSourceNodeRemovalObserver.observe(node.parentElement, { childList: true });
	        }
	    }, {
	        key: 'resurrectSourceNode',
	        value: function resurrectSourceNode() {
	            this.draggedSourceNode.style.display = 'none';
	            this.draggedSourceNode.removeAttribute('data-reactid');
	            document.body.appendChild(this.draggedSourceNode);
	        }
	    }, {
	        key: 'uninstallSourceNodeRemovalObserver',
	        value: function uninstallSourceNodeRemovalObserver() {
	            if (this.draggedSourceNodeRemovalObserver) {
	                this.draggedSourceNodeRemovalObserver.disconnect();
	            }
	
	            this.draggedSourceNodeRemovalObserver = null;
	            this.draggedSourceNode = null;
	        }
	    }]);
	
	    return TouchBackend;
	}();
	
	function createTouchBackend() {
	    var optionsOrManager = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var touchBackendFactory = function touchBackendFactory(manager) {
	        return new TouchBackend(manager, optionsOrManager);
	    };
	
	    if (optionsOrManager.getMonitor) {
	        return touchBackendFactory(optionsOrManager);
	    } else {
	        return touchBackendFactory;
	    }
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DragLayer = __webpack_require__(111);
	
	var _DragLayer2 = _interopRequireDefault(_DragLayer);
	
	var _EventBase = __webpack_require__(139);
	
	var _EventBase2 = _interopRequireDefault(_EventBase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function collect(monitor) {
	  var props = {
	    clientOffset: monitor.getSourceClientOffset()
	  };
	  var item = monitor.getItem();
	  if (item) {
	    props['event'] = item.timeline.findEventById(item.id);
	  }
	
	  return props;
	}
	
	var EventPreview = function (_React$Component) {
	  _inherits(EventPreview, _React$Component);
	
	  function EventPreview() {
	    _classCallCheck(this, EventPreview);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EventPreview).apply(this, arguments));
	  }
	
	  _createClass(EventPreview, [{
	    key: 'getItemStyles',
	    value: function getItemStyles() {
	      if (!this.props.clientOffset) {
	        return {
	          display: 'none'
	        };
	      }
	
	      var x = this.props.clientOffset.x;
	      var y = this.props.clientOffset.y;
	      var transform = 'translate(' + x + 'px, ' + y + 'px)';
	      return {
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: this.props.event.state.height,
	        width: this.props.event.props.width,
	        backgroundColor: this.props.event.state.color,
	        transform: transform,
	        WebkitTransform: transform
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { ref: 'preview', className: 'tlEventView tlDraggingEvent', style: this.getItemStyles() },
	        _react2.default.createElement(_EventBase2.default, {
	          draggingDisplay: this.props.event ? this.props.event.state.draggingDisplay : '',
	          display: this.props.event ? this.props.event.state.display : []
	        })
	      );
	    }
	  }]);
	
	  return EventPreview;
	}(_react2.default.Component);
	
	exports.default = (0, _DragLayer2.default)(collect)(EventPreview);

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(149);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _MenuItem = __webpack_require__(150);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Menu = function (_React$Component) {
	  _inherits(Menu, _React$Component);
	
	  function Menu(props) {
	    _classCallCheck(this, Menu);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).call(this, props));
	
	    _this.state = {
	      style: {
	        position: 'absolute',
	        display: 'none',
	        zIndex: _this.props.zIndex
	      }
	    };
	    document.getElementsByTagName('body')[0].addEventListener('click', function () {
	      _this.close();
	    });
	    return _this;
	  }
	
	  _createClass(Menu, [{
	    key: 'show',
	    value: function show(pos, context) {
	      this.setState({
	        style: (0, _objectAssign2.default)({}, this.state.style, pos, { display: 'block' }),
	        context: context
	      });
	    }
	  }, {
	    key: 'onMouseOut',
	    value: function onMouseOut() {
	      console.log('out');
	    }
	  }, {
	    key: 'onMouseOver',
	    value: function onMouseOver() {
	      console.log('over');
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      this.setState({ style: (0, _objectAssign2.default)({}, this.state.style, { display: 'none' }) });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'rmMenu', style: this.state.style },
	        _react2.default.createElement(
	          'ul',
	          { className: 'rmMenuItemList' },
	          this.state.context ? this.props.items.map(function (item, key) {
	            if (!item.show || item.show(_this2.state.context)) {
	              return _react2.default.createElement(_MenuItem2.default, {
	                key: key,
	                name: item.name(_this2.state.context),
	                onClick: item.onClick,
	                menu: _this2
	              });
	            }
	          }) : null
	        )
	      );
	    }
	  }]);
	
	  return Menu;
	}(_react2.default.Component);
	
	exports.default = Menu;

/***/ },
/* 149 */
/***/ function(module, exports) {

	'use strict';
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function ownEnumerableKeys(obj) {
		var keys = Object.getOwnPropertyNames(obj);
	
		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(obj));
		}
	
		return keys.filter(function (key) {
			return propIsEnumerable.call(obj, key);
		});
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = ownEnumerableKeys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 150 */
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
	
	var MenuItem = function (_React$Component) {
	  _inherits(MenuItem, _React$Component);
	
	  function MenuItem(props) {
	    _classCallCheck(this, MenuItem);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MenuItem).call(this, props));
	
	    _this.state = {
	      mouseOver: false
	    };
	    return _this;
	  }
	
	  _createClass(MenuItem, [{
	    key: 'onMouseOut',
	    value: function onMouseOut() {
	      this.setState({ mouseOver: false });
	    }
	  }, {
	    key: 'onMouseOver',
	    value: function onMouseOver() {
	      this.setState({ mouseOver: true });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      this.props.onClick(this.props.menu.state.context);
	      this.props.menu.close();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'li',
	        {
	          className: (0, _classnames2.default)("rmMenuItem", { rmMouseOver: this.state.mouseOver }),
	          onMouseOver: function onMouseOver(e) {
	            return _this2.onMouseOver(e);
	          },
	          onMouseOut: function onMouseOut(e) {
	            return _this2.onMouseOut(e);
	          },
	          onClick: function onClick(e) {
	            return _this2.onClick(e);
	          }
	        },
	        this.props.name
	      );
	    }
	  }]);
	
	  return MenuItem;
	}(_react2.default.Component);
	
	exports.default = MenuItem;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2VlMmZlY2UzNDkzZmUwZjBhOWEiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lbGluZUFjdGlvbnMuZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9EcmFnRHJvcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvRHJhZ0Ryb3BNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvbGliL2NyZWF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvfi9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9+L2xvZGFzaC9faXNIb3N0T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT2Zmc2V0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL2FjdGlvbnMvZHJhZ0Ryb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvdXRpbHMvbWF0Y2hlc1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT3BlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL2FjdGlvbnMvcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC93aXRob3V0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Jhc2VEaWZmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX1NldENhY2hlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fSGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19pc0hvc3RPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fY2hlY2tHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19pbmRleE9mTmFOLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fZ2V0TGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvcmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL3RvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL3RvRmluaXRlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9yZWZDb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kaXJ0eUhhbmRsZXJJZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC94b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYmFzZVhvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL2ludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19iYXNlSW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Nhc3RBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvc3RhdGVJZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9EcmFnRHJvcE1vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvSGFuZGxlclJlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL3V0aWxzL2dldE5leHRVbmlxdWVJZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FzYXAvYnJvd3Nlci1hc2FwLmpzIiwid2VicGFjazovLy8uL34vYXNhcC9icm93c2VyLXJhdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9EcmFnU291cmNlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL0Ryb3BUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvYmFja2VuZHMvY3JlYXRlVGVzdEJhY2tlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9EcmFnTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL3NoYWxsb3dFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvdXRpbHMvc2hhbGxvd0VxdWFsU2NhbGFyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL34vbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9+L2xvZGFzaC9faXNIb3N0T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvRHJhZ1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvZGVjb3JhdGVIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvaXNEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9EaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9Db21wb3NpdGVEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9TZXJpYWxEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9yZWdpc3RlclNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlTW9uaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlQ29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi93cmFwQ29ubmVjdG9ySG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL2Nsb25lV2l0aFJlZi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvYXJlT3B0aW9uc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi91dGlscy9pc1ZhbGlkVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9Ecm9wVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9yZWdpc3RlclRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0TW9uaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0Q29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50QmFzZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvRXZlbnRBY3Rpb25zLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GcmFtZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG91ci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUnVsZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xpbmVMYWJlbC5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9kaXN0L1RvdWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50UHJldmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnVJdGVtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7OztBQUdBLFVBQVMsYUFBVCxHQUF3QjtBQUN0QixPQUFNLFFBQVEsT0FBTyxVQUFQLElBQ1gsU0FBUyxlQUFULENBQXlCLFdBRGQsSUFFWCxTQUFTLElBQVQsQ0FBYyxXQUZqQjs7QUFJQSxPQUFNLFNBQVMsT0FBTyxXQUFQLElBQ1osU0FBUyxlQUFULENBQXlCLFlBRGIsSUFFWixTQUFTLElBQVQsQ0FBYyxZQUZqQjs7QUFJQSxVQUFPLEVBQUMsT0FBTyxLQUFSLEVBQWUsUUFBUSxNQUF2QixFQUFQO0FBQ0Q7O0FBRUQsVUFBUyxVQUFULENBQW9CLGVBQXBCLEVBQW9DO0FBQ2xDLE9BQU0sZ0JBQWdCLGdCQUFnQixxQkFBaEIsRUFBdEI7QUFDQSxPQUFNLGFBQWEsZUFBbkI7QUFDQSxVQUFPLFdBQVcsTUFBWCxHQUFvQixjQUFjLEdBQXpDO0FBQ0Q7O0FBRUQsUUFBTyxNQUFQLEdBQWdCLFlBQU07O0FBRXBCLE9BQU0sT0FBTyxtQkFBUyxNQUFULENBQ1g7QUFDRSxZQUFPLENBQ0w7QUFDRSxhQUFNO0FBQUEsZ0JBQVcsT0FBWDtBQUFBLFFBRFI7QUFFRSxnQkFBUywwQkFBVztBQUNsQixpQkFBUSxTQUFSLENBQWtCLE9BQWxCLENBQTBCLEtBQTFCO0FBQ0QsUUFKSDtBQUtFLGFB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LFlBQVcsU0FBUztBQUNwQixjQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDYkE7O0FBRUE7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUM7Ozs7OztBQzNNQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUNWQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7OztBQ3RGQTs7QUFFQTtBQUNBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2Sjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQzVGQTs7QUFFQTtBQUNBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0VBQThFOztBQUU5RTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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T0FBSyxXQUFMLENBQWlCLENBQWpCLENBQUw7QUFBQSxZQUZmO0FBR0UsdUJBQVk7QUFBQSxvQkFBSyxPQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBTDtBQUFBLFlBSGQ7QUFJRSxvQkFBUztBQUFBLG9CQUFLLE9BQUssT0FBTCxDQUFhLENBQWIsQ0FBTDtBQUFBO0FBSlg7U0FNRyxLQUFLLEtBQUwsQ0FBVztBQU5kLFFBREY7QUFVRDs7OztHQWpDbUMsZ0JBQU0sUzs7bUJBQXZCLFEiLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDNlZTJmZWNlMzQ5M2ZlMGYwYTlhXG4gKiovIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3BhbiwgTWVudX0gZnJvbSAnLi4vaW5kZXguZXM2JztcblxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplKCl7XG4gIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbiAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgcmV0dXJuIHt3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0fTtcbn1cblxuZnVuY3Rpb24gY2FsY0hlaWdodCh0aW1lbGluZUVsZW1lbnQpe1xuICBjb25zdCB3cmFwcGVyQm91bmRzID0gdGltZWxpbmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB3aW5kb3dTaXplID0gZ2V0V2luZG93U2l6ZSgpO1xuICByZXR1cm4gd2luZG93U2l6ZS5oZWlnaHQgLSB3cmFwcGVyQm91bmRzLnRvcDtcbn1cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcblxuICBjb25zdCBtZW51ID0gUmVhY3RET00ucmVuZGVyKFxuICAgIDxNZW51XG4gICAgICBpdGVtcz17W1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogY29udGV4dCA9PiAnZmxvYXQnLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5jb21wb25lbnQuYWN0aW9ucy5mbG9hdCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvdzogY29udGV4dCA9PiBjb250ZXh0LmNvbXBvbmVudC5hY3Rpb25zLmlzRml4ZWQoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogY29udGV4dCA9PiAncmVzaXplJyxcbiAgICAgICAgICBvbkNsaWNrOiBjb250ZXh0ID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuY29tcG9uZW50LmFjdGlvbnMucmVzaXplKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93OiBjb250ZXh0ID0+IGNvbnRleHQuY29tcG9uZW50LmFjdGlvbnMuaXNGaXhlZCgpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBjb250ZXh0ID0+ICdjYW5jZWwnLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5jb21wb25lbnQuYWN0aW9ucy5jYW5jZWwoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3c6IGNvbnRleHQgPT4gIWNvbnRleHQuY29tcG9uZW50LmFjdGlvbnMuaXNGaXhlZCgpLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgaWYoY29udGV4dC5jb21wb25lbnQuYWN0aW9ucy5pc0NhbmNlbGFibGUoKSl7XG4gICAgICAgICAgICAgIGNvbnRleHQuY29tcG9uZW50LmFjdGlvbnMuY2FuY2VsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGVydCgnWW91IGNhblxcJ3QgY2FuY2VsIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJ2ZpeCcsXG4gICAgICAgICAgb25DbGljazogY29udGV4dCA9PiB7XG4gICAgICAgICAgICBpZihjb250ZXh0LmNvbXBvbmVudC5hY3Rpb25zLmlzRml4YWJsZSgpKXtcbiAgICAgICAgICAgICAgY29udGV4dC5jb21wb25lbnQuYWN0aW9ucy5maXgoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFsZXJ0KCdZb3UgY2FuXFwndCBmaXghJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93OiBjb250ZXh0ID0+ICFjb250ZXh0LmNvbXBvbmVudC5hY3Rpb25zLmlzRml4ZWQoKVxuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgekluZGV4PXsxMDAwfVxuICAgIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcbiAgKTtcblxuXG4gIGNvbnN0IGxpbmVEYXRhID0gW1xuICAgIHtsYWJlbDonbGFiZWwxJywgaWQ6J19fMSd9LFxuICAgIHtsYWJlbDonbGFiZWwyJywgaWQ6J19fMid9LFxuICAgIHtsYWJlbDonbGFiZWwzJywgaWQ6J19fMyd9LFxuICAgIHtsYWJlbDonbGFiZWw0JywgaWQ6J19fNCd9LFxuICAgIHtsYWJlbDonbGFiZWw1JywgaWQ6J19fNSd9LFxuICAgIHtsYWJlbDonbGFiZWw2JywgaWQ6J19fNid9LFxuICAgIHtsYWJlbDonbGFiZWw3JywgaWQ6J19fNyd9LFxuICAgIHtsYWJlbDonbGFiZWw4JywgaWQ6J19fOCd9LFxuICAgIHtsYWJlbDonbGFiZWw5JywgaWQ6J19fOSd9LFxuICAgIHtsYWJlbDonbGFiZWwxMCcsIGlkOidfXzEwJ30sXG4gICAge2xhYmVsOidsYWJlbDExJywgaWQ6J19fMTEnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTInLCBpZDonX18xMid9LFxuICAgIHtsYWJlbDonbGFiZWwxMycsIGlkOidfXzEzJ30sXG4gICAge2xhYmVsOidsYWJlbDE0JywgaWQ6J19fMTQnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTUnLCBpZDonX18xNSd9LFxuICAgIHtsYWJlbDonbGFiZWwxNicsIGlkOidfXzE2J30sXG4gICAge2xhYmVsOidsYWJlbDE3JywgaWQ6J19fMTcnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTgnLCBpZDonX18xOCd9XG4gIF07XG5cbiAgY29uc3QgdGltZVNwYW4gPSBUaW1lU3Bhbi5jcmVhdGUoWzEwLCAwXSwgWzI1LCAwXSk7XG4gIGNvbnN0IHRpbWVsaW5lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lbGluZScpO1xuICBjb25zdCB0aW1lbGluZSA9IFJlYWN0RE9NLnJlbmRlcihcbiAgICA8VGltZWxpbmVcbiAgICAgIGxpbmVEYXRhPXtsaW5lRGF0YX1cbiAgICAgIHRpbWVTcGFuPXt0aW1lU3Bhbn1cbiAgICAgIGxpbmVXaWR0aD17NjJ9XG4gICAgICBtaW5IZWlnaHQ9ezE3fVxuICAgICAgbWluSW50ZXJ2YWw9ezV9XG4gICAgICBydWxlckludGVydmFsPXs0fVxuICAgICAgaGVpZ2h0PXtjYWxjSGVpZ2h0KHRpbWVsaW5lRWxlbWVudCl9XG4gICAgICBvbkNsaWNrTGluZT17ZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0JywgZGF0YSk7XG4gICAgICB9fVxuICAgICAgb25SaWdodENsaWNrTGluZT17ZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCcsIGRhdGEpO1xuICAgICAgfX1cbiAgICAgIG9uQ2xpY2tFdmVudD17ZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0JywgZGF0YSk7XG4gICAgICB9fVxuICAgICAgb25SaWdodENsaWNrRXZlbnQ9e2RhdGEgPT4ge1xuICAgICAgICBkYXRhLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG1lbnUuc2hvdyh7dG9wOiBkYXRhLmV2ZW50LmNsaWVudFksIGxlZnQ6IGRhdGEuZXZlbnQuY2xpZW50WH0sIGRhdGEpO1xuICAgICAgfX1cbiAgICAvPixcbiAgICB0aW1lbGluZUVsZW1lbnRcbiAgKTtcblxuXG4gIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aW1lbGluZS5hY3Rpb25zLnNldEhlaWdodChjYWxjSGVpZ2h0KHRpbWVsaW5lRWxlbWVudCkpO1xuICB9O1xuXG4gIHRpbWVsaW5lLmFjdGlvbnMuYWRkRXZlbnRzKFtcbiAgICB7XG4gICAgICBsaW5lSWQ6ICdfXzEnLFxuICAgICAgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTEsIDBdLCBbMTIsIDBdKSxcbiAgICAgIGNvbG9yOiAnI0ZGQjZCNicsXG4gICAgICBkaXNwbGF5OiBbXG4gICAgICAgIHtrZXk6ICdzdGFydFRpbWUnLCB2YWx1ZTogJzExOjAwJ30sXG4gICAgICAgIHtrZXk6ICd0eXBlJywgdmFsdWU6ICdmb29iYXInfSxcbiAgICAgICAge2tleTogJ21lbW8nLCB2YWx1ZTogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnknfVxuICAgICAgXVxuICAgIH1cbiAgXSk7XG5cbiAgdGltZWxpbmUuYWN0aW9ucy5hZGRFdmVudHMoW1xuICAgIHtsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMSwgMF0sIFsxMiwgMF0pLCBjb2xvcjogJyNGRkI2QjYnfSxcbiAgICB7bGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTMsIDUwXSwgWzE0LCAzMF0pLCBjb2xvcjogJyNCOEYxQUMnfSxcbiAgXSk7XG5cbiAgdGltZWxpbmUuYWN0aW9ucy5hZGRFdmVudHMoW1xuICAgIHtsaW5lSWQ6ICdfXzMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMywgMF0sIFsxNCwgMF0pLCBjb2xvcjogJyNGRkI2QjYnfSxcbiAgICB7bGluZUlkOiAnX18zJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDE1XSwgWzE1LCAzMF0pLCBjb2xvcjogJyNCOEYxQUMnfVxuICBdKTtcblxuICB0aW1lbGluZS5hY3Rpb25zLmFkZEV2ZW50cyhbXG4gICAge2xpbmVJZDogJ19fNScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAwXSwgWzE0LCAwXSksIGNvbG9yOiAnI0ZGQjZCNid9XG4gIF0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlL2FwcC5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9zcmMvY29tcG9uZW50cy9NZW51JztcbmltcG9ydCBUaW1lIGZyb20gJy4vc3JjL2NsYXNzZXMvVGltZSc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi9zcmMvY2xhc3Nlcy9UaW1lU3Bhbic7XG5cbmV4cG9ydCB7VGltZWxpbmUsIFRpbWUsIFRpbWVTcGFuLCBNZW51fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5lczZcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IFRpbWVsaW5lQWN0aW9ucyBmcm9tICcuLi9jbGFzc2VzL1RpbWVsaW5lQWN0aW9ucyc7XG5pbXBvcnQgRnJhbWUgZnJvbSAnLi9GcmFtZSc7XG5pbXBvcnQgUnVsZXIgZnJvbSAnLi9SdWxlcic7XG5pbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmFjdGlvbnMgPSBuZXcgVGltZWxpbmVBY3Rpb25zKHRoaXMpO1xuXG4gICAgLy9NaW5WaWV344Gv5LiA5pmC6ZaT5LiL44Gr5L2Z5YiG44GM55Sf5oiQ44GV44KM44KL44Gu44GnNjDliIbjg5fjg6njgrlcbiAgICB0aGlzLnRpbWVTcGFuID0gdGhpcy5wcm9wcy50aW1lU3Bhbi5hZGRNaW4oNjApO1xuXG4gICAgLy9taW5WaWV344GM44GE44GP44Gk44GC44KL44GL44Kr44Km44Oz44OI44CCbWluVmlld+OBrzE15YiG44GK44GN44CC44Gd44KM44KS5YWD44Gr6auY44GV44KS6KiI566X44CCYm9yZGVy5YiGMXB46Laz44GZXG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gKHRoaXMudGltZVNwYW4uZ2V0RGlzdGFuY2UoKSAvIDE1KSAqICh0aGlzLnByb3BzLm1pbkhlaWdodCArIDEpO1xuXG4gICAgLy8x5YiG44GC44Gf44KK44Gu6auY44GV44KS566X5Ye6XG4gICAgdGhpcy5wZXJNaW5IZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHQgLyB0aGlzLnRpbWVTcGFuLmdldERpc3RhbmNlKCk7XG5cbiAgICB0aGlzLmxpbmVXaWR0aCA9IHByb3BzLmxpbmVXaWR0aDtcblxuICAgIHRoaXMuZnJhbWVDb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMuY3JlYXRlZEV2ZW50SWQgPSAwO1xuICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbnBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5saW5lQ29tcG9uZW50cyA9IFtdO1xuICAgIHRoaXMuZXZlbnRDb21wb25lbnRzID0gW107XG4gICAgdGhpcy5saW5lTGFiZWxDb21wb25lbnRzID0gW107XG4gIH1cblxuICBjcmVhdGVFdmVudElkKCl7XG4gICAgcmV0dXJuICduZXdfJyArICgrK3RoaXMuY3JlYXRlZEV2ZW50SWQpO1xuICB9XG5cbiAgZHJhZ2dpbmdPdmVyKGxlZnQpe1xuICAgIGNvbnN0IGxpbmVDb21wb25lbnQgPSB0aGlzLmZpbmRMaW5lQnlMZWZ0KGxlZnQpO1xuICAgIGlmKGxpbmVDb21wb25lbnQgJiYgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29ucG9uZW50ICE9PSBsaW5lQ29tcG9uZW50KXtcbiAgICAgIGlmKHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbnBvbmVudCl7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbnBvbmVudC5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICAgICAgfVxuICAgICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29ucG9uZW50ID0gbGluZUNvbXBvbmVudDtcbiAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbnBvbmVudC5kcmFnZ2luZ092ZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZUNvbXBvbmVudDtcbiAgfVxuXG4gIGNsZWFyRHJhZ2dpbmdPdmVyKCl7XG4gICAgaWYodGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29ucG9uZW50KXtcbiAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbnBvbmVudC5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICAgIH1cbiAgfVxuXG4gIGdldFRvdGFsV2lkdGgoKXtcbiAgICByZXR1cm4gdGhpcy5saW5lQ29tcG9uZW50cy5yZWR1Y2UoKHZhbCwgbGluZSkgPT4ge1xuICAgICAgcmV0dXJuIHZhbCArIChsaW5lLnByb3BzLmhhc1J1bGVyID8gdGhpcy5saW5lV2lkdGggKyBSdWxlci53aWR0aCA6IHRoaXMubGluZVdpZHRoKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGFkZEV2ZW50Q29tcG9uZW50KGV2ZW50KXtcbiAgICB0aGlzLmV2ZW50Q29tcG9uZW50cy5wdXNoKGV2ZW50KTtcbiAgfVxuXG4gIGZpbmRFdmVudEJ5SWQoZXZlbnRJZCl7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRDb21wb25lbnRzLmZpbmQoZXYgPT4gZXYucHJvcHMuaWQgPT0gZXZlbnRJZCk7XG4gIH1cblxuICBmaW5kTGluZUJ5TGVmdChsZWZ0KXtcbiAgICB2YXIgd2lkdGggPSAwO1xuICAgIHJldHVybiB0aGlzLmxpbmVDb21wb25lbnRzLmZpbmQobGluZSA9PiB7XG4gICAgICB3aWR0aCArPSBsaW5lLnByb3BzLmhhc1J1bGVyID8gdGhpcy5wcm9wcy5saW5lV2lkdGggKyBSdWxlci53aWR0aCA6IHRoaXMucHJvcHMubGluZVdpZHRoO1xuICAgICAgaWYobGVmdCA8IHdpZHRoKXtcbiAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRMaW5lTGVmdChsaW5lSWQpe1xuICAgIGxldCBsZWZ0ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saW5lQ29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpbmUgPSB0aGlzLmxpbmVDb21wb25lbnRzW2ldO1xuICAgICAgaWYobGluZS5wcm9wcy5oYXNSdWxlcil7XG4gICAgICAgIGxlZnQgKz0gUnVsZXIud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmKGxpbmUucHJvcHMubGluZUlkID09IGxpbmVJZCl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsZWZ0ICs9IHRoaXMucHJvcHMubGluZVdpZHRoO1xuICAgIH1cblxuICAgIGxlZnQgKz0gTGluZS5zaWRlUGFkZGluZztcblxuICAgIHJldHVybiBsZWZ0O1xuICB9XG5cbiAgYWRkTGluZUNvbXBvbmVudChsaW5lKXtcbiAgICB0aGlzLmxpbmVDb21wb25lbnRzLnB1c2gobGluZSk7XG4gIH1cblxuICBhZGRMaW5lTGFiZWxDb21wb25lbnQobGluZSl7XG4gICAgdGhpcy5saW5lTGFiZWxDb21wb25lbnRzLnB1c2gobGluZSk7XG4gIH1cblxuICBnZXRUaW1lU3Bhbih0b3AsIGhlaWdodCl7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gdGhpcy50b3BUb1RpbWUodG9wKTtcblxuICAgIGNvbnN0IGVuZFRpbWUgPSBzdGFydFRpbWUuYWRkTWluKGhlaWdodCAvIHRoaXMucGVyTWluSGVpZ2h0KTtcbiAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHN0YXJ0VGltZSwgZW5kVGltZSk7XG4gIH1cblxuICB0aW1lU3BhblRvSGVpZ2h0KHRpbWVTcGFuKXtcbiAgICByZXR1cm4gKHRpbWVTcGFuLmdldERpc3RhbmNlKCkgKiB0aGlzLnBlck1pbkhlaWdodCkgLSAxO1xuICB9XG5cbiAgdGltZVRvVG9wKHRpbWUpe1xuICAgIHJldHVybiB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmdldERpc3RhbmNlKHRpbWUpICogdGhpcy5wZXJNaW5IZWlnaHQ7XG4gIH1cblxuICB0b3BUb1RpbWUodG9wKXtcbiAgICBpZih0b3AgPD0gMCl7XG4gICAgICByZXR1cm4gdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKTtcbiAgICB9XG4gICAgbGV0IG1pbnV0ZSA9IHRvcCAvIHRoaXMucGVyTWluSGVpZ2h0O1xuICAgIGNvbnN0IHJlc3QgPSBtaW51dGUgJSB0aGlzLnByb3BzLm1pbkludGVydmFsO1xuICAgIGlmKHJlc3QgIT09IDApe1xuICAgICAgaWYocmVzdCA+IHRoaXMucHJvcHMubWluSW50ZXJ2YWwgLyAyKXtcbiAgICAgICAgbWludXRlICs9IHRoaXMucHJvcHMubWluSW50ZXJ2YWwgLSByZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWludXRlIC09IHJlc3Q7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmFkZE1pbihtaW51dGUpO1xuICB9XG5cbiAgZmluZFByZXZFdmVudChldmVudENvbXBvbmVudCl7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRDb21wb25lbnRzXG4gICAgICAuZmlsdGVyKGV2ID0+ICFldi5zdGF0ZS5kcmFnZ2FibGUgJiYgZXYubGluZUlkID09IGV2ZW50Q29tcG9uZW50LmxpbmVJZCkvL+WQjOOBmOWIl+OBruOCguOBruOBoOOBkeOBq+e1nuOCi1xuICAgICAgLnNvcnQoKGEsIGIpID0+IC0oYS5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuY29tcGFyZShiLmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkpKS8v5pmC6ZaT44Gu6ZmN6aCG44Gn5Lim44Gz5pu/44GIXG4gICAgICAuZmluZChldiA9PiBldi5jdXJyZW50VGltZVNwYW4uZ2V0RW5kVGltZSgpLmNvbXBhcmUoZXZlbnRDb21wb25lbnQuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSA8PSAwKS8v6ZmN6aCG44Gq44Gu44Gn5a++6LGh44KI44KK5pyA5Yid44Gr6ZaL5aeL5pmC6ZaT44GM6Iul44GE44KC44Gu44GMcHJldlxuICAgICAgO1xuICB9XG5cbiAgZ2V0UHJldkJvdHRvbShldmVudENvbXBvbmVudCl7XG4gICAgY29uc3QgcHJldkV2ZW50ID0gdGhpcy5maW5kUHJldkV2ZW50KGV2ZW50Q29tcG9uZW50KTtcbiAgICBsZXQgYm90dG9tVGltZTtcbiAgICBpZihwcmV2RXZlbnQpe1xuICAgICAgYm90dG9tVGltZSA9IHByZXZFdmVudC5jdXJyZW50VGltZVNwYW4uZ2V0RW5kVGltZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3R0b21UaW1lID0gdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50aW1lVG9Ub3AoYm90dG9tVGltZSk7XG4gIH1cblxuICBmaW5kTmV4dEV2ZW50KGV2ZW50Q29tcG9uZW50KXtcbiAgICByZXR1cm4gdGhpcy5ldmVudENvbXBvbmVudHNcbiAgICAgIC5maWx0ZXIoZXYgPT4gICFldi5zdGF0ZS5kcmFnZ2FibGUgJiYgZXYubGluZUlkID09IGV2ZW50Q29tcG9uZW50LmxpbmVJZCkvL+WQjOOBmOWIl+OBruOCguOBruOBoOOBkeOBq+e1nuOCi1xuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUoYi5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpKS8v5pmC6ZaT44Gu5piH6aCG44Gn5Lim44Gz5pu/44GIXG4gICAgICAuZmluZChldiA9PiBldi5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuY29tcGFyZShldmVudENvbXBvbmVudC5jdXJyZW50VGltZVNwYW4uZ2V0RW5kVGltZSgpKSA+PSAwKS8v5piH6aCG44Gq44Gu44Gn5a++6LGh44KI44KK5pyA5Yid44Gr6ZaL5aeL5pmC6ZaT44GM6YGF44GE44KC44Gu44GMbmV4dFxuICAgICAgO1xuICB9XG5cbiAgZ2V0TmV4dFRvcChldmVudENvbXBvbmVudCl7XG4gICAgY29uc3QgbmV4dEV2ZW50ID0gdGhpcy5maW5kTmV4dEV2ZW50KGV2ZW50Q29tcG9uZW50KTtcbiAgICBsZXQgbmV4dFRpbWU7XG4gICAgaWYobmV4dEV2ZW50KXtcbiAgICAgIG5leHRUaW1lID0gbmV4dEV2ZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dFRpbWUgPSB0aGlzLnRpbWVTcGFuLmdldEVuZFRpbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50aW1lVG9Ub3AobmV4dFRpbWUpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFtZVxuICAgICAgICBsaW5lRGF0YT17dGhpcy5wcm9wcy5saW5lRGF0YX1cbiAgICAgICAgdGltZVNwYW49e3RoaXMucHJvcHMudGltZVNwYW59XG4gICAgICAgIGxpbmVXaWR0aD17dGhpcy5wcm9wcy5saW5lV2lkdGh9XG4gICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgIGhlaWdodD17dGhpcy5wcm9wcy5oZWlnaHR9XG4gICAgICAgIHRpbWVsaW5lPXt0aGlzfVxuICAgICAgICBydWxlckludGVydmFsPXt0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWx9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuVGltZWxpbmUucHJvcFR5cGVzID0ge1xuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4gIGxpbmVEYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KSkuaXNSZXF1aXJlZCxcbiAgbGluZVdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgcnVsZXJJbnRlcnZhbDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBtaW5JbnRlcnZhbDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn1cblxuVGltZWxpbmUuZGVmYXVsdFByb3BzID0ge1xuICBtaW5JbnRlcnZhbDogMVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFRpbWUgZnJvbSAnLi9UaW1lJ1xuLyoqXG4gKiDkuIDluqbnlJ/miJDjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga/lpInmm7TjgZfjgb7jgZvjgpPjgIJcbiAqIOWkieabtOODoeOCveODg+ODieOBr+aWsOOBl+OBhOOCquODluOCuOOCp+OCr+ODiOOCkuW4sOOBl+OBvuOBmeOAglxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU3Bhblxue1xuICBzdGF0aWMgY3JlYXRlKHN0YXJ0LCBlbmQpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3BhbihuZXcgVGltZShzdGFydFswXSwgc3RhcnRbMV0pLCBuZXcgVGltZShlbmRbMF0sIGVuZFsxXSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3Ioc3RhcnRUaW1lLCBlbmRUaW1lKXtcbiAgICB3aGlsZShzdGFydFRpbWUuY29tcGFyZShlbmRUaW1lKSA+PSAwKXtcbiAgICAgICAgZW5kVGltZSA9IGVuZFRpbWUuYWRkTWluKDI0ICogNjApO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICB0aGlzLl9lbmRUaW1lID0gZW5kVGltZTtcbiAgfVxuXG4gIGNsb25lKCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRoaXMuZ2V0U3RhcnRUaW1lKCkuY2xvbmUoKSwgdGhpcy5nZXRFbmRUaW1lKCkuY2xvbmUoKSk7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpe1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZS5nZXREaXN0YW5jZSh0aGlzLl9lbmRUaW1lKTtcbiAgfVxuXG4gIGdldFN0YXJ0VGltZSgpeyByZXR1cm4gdGhpcy5fc3RhcnRUaW1lOyB9XG4gIGdldEVuZFRpbWUoKXsgcmV0dXJuIHRoaXMuX2VuZFRpbWU7IH1cblxuICBzaGlmdEVuZFRpbWUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRpbWUuYWRkTWluKC10aGlzLmdldERpc3RhbmNlKCkpLCB0aW1lKTtcbiAgfVxuXG4gIHNoaWZ0U3RhcnRUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lLCB0aW1lLmFkZE1pbih0aGlzLmdldERpc3RhbmNlKCkpKTtcbiAgfVxuXG4gIGFkZE1pbihtaW51dGUpe1xuICAgIHJldHVybiBuZXcgVGltZVNwYW4odGhpcy5nZXRTdGFydFRpbWUoKSwgdGhpcy5nZXRFbmRUaW1lKCkuYWRkTWluKG1pbnV0ZSkpO1xuICB9XG5cbiAgZXF1YWxzKHRpbWVTcGFuKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmVxdWFscyh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgJiYgdGhpcy5nZXRFbmRUaW1lKCkuZXF1YWxzKHRpbWVTcGFuLmdldEVuZFRpbWUoKSk7XG4gIH1cblxuICBjb250YWlucyh0aW1lU3Bhbil7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5jb21wYXJlKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSA8IDAgJiYgdGhpcy5nZXRFbmRUaW1lKCkuY29tcGFyZSh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpID4gMDtcbiAgfVxuXG4gIGNvbnRhaW5zVGltZSh0aW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUodGltZSkgPCAwICYmIHRoaXMuZ2V0RW5kVGltZSgpLmNvbXBhcmUodGltZSkgPiAwO1xuICB9XG5cbiAgb3ZlcmxhcHModGltZVNwYW4pe1xuICAgICAgaWYodGltZVNwYW4uY29udGFpbnModGhpcykpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmNvbnRhaW5zVGltZSh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmNvbnRhaW5zVGltZSh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZWFjaEhvdXIoY2FsbGJhY2spe1xuICAgICAgdmFyIGhvdXIgPSB0aGlzLmdldFN0YXJ0VGltZSgpLmdldEhvdXIoKTtcbiAgICAgIHZhciBlbmQgPSB0aGlzLmdldEVuZFRpbWUoKS5nZXRIb3VyKCk7XG4gICAgICB2YXIga2V5ID0gMDtcblxuICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgaWYoaG91ciA9PT0gZW5kKXtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChob3VyLCBrZXksIGhvdXIsIHRoaXMuZ2V0RW5kVGltZSgpLmdldE1pbigpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChob3VyLCBrZXksIGhvdXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhvdXIgKz0gMTtcbiAgICAgICAgICArK2tleTtcbiAgICAgIH1cbiAgfVxuXG4gIGVhY2hUaW1lKGNhbGxiYWNrLCBtaW51dGVJbnRlcnZhbCl7XG4gICAgICB2YXIga2V5ID0gMDtcbiAgICAgIG1pbnV0ZUludGVydmFsID0gbWludXRlSW50ZXJ2YWwgPyBtaW51dGVJbnRlcnZhbCA6IDYwO1xuXG4gICAgICB2YXIgdGltZSA9IHRoaXMuZ2V0U3RhcnRUaW1lKCk7XG4gICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICBpZih0aW1lLmNvbXBhcmUodGhpcy5nZXRFbmRUaW1lKCkpID4gMCl7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGltZSwga2V5LCB0aW1lKTtcblxuICAgICAgICAgIHRpbWUgPSB0aW1lLmFkZE1pbihtaW51dGVJbnRlcnZhbCk7XG4gICAgICAgICAgKytrZXk7XG4gICAgICB9XG4gIH1cblxuICB0b1N0cmluZygpe1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZSArICd+JyArIHRoaXMuX2VuZFRpbWU7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvVGltZVNwYW4uZXM2XG4gKiovIiwiLyoqXG4gKiDkuIDluqbnlJ/miJDjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga/lpInmm7TjgZfjgb7jgZvjgpPjgIJcbiAqIOWkieabtOODoeOCveODg+ODieOBr+aWsOOBl+OBhOOCquODluOCuOOCp+OCr+ODiOOCkuW4sOOBl+OBvuOBmeOAglxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lXG57XG4gIHN0YXRpYyBlYWNoTWluKGNhbGxiYWNrLCBtaW51dGVJbnRlcnZhbCl7XG4gICAgICB2YXIgY291bnQgPSA2MCAvIG1pbnV0ZUludGVydmFsO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgdmFyIG1pbiA9IGkgKiBtaW51dGVJbnRlcnZhbDtcbiAgICAgICAgICBpZihtaW4gPCA2MCl7XG4gICAgICAgICAgICAgIHZhciBkaXNwbGF5TWluID0gbWluIDwgMTAgPyAnMCcgKyBtaW4gOiBtaW4gKyAnJztcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChtaW4sIGksIG1pbiwgZGlzcGxheU1pbik7XG4gICAgICAgICAgfVxuICAgICAgfTtcbiAgfTtcblxuICAvKipcbiAgICog6YWN5YiX44GL44KJVGltZeOCkueUn+aIkFxuICAgKiBAcGFyYW0gIHthcnJheX0gdGltZSBbaG91ciwgbWluXeOBrumFjeWIl1xuICAgKiBAcmV0dXJuIHtUaW1lfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZSh0aW1lKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aW1lWzBdLCB0aW1lWzFdKTtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihob3VyLCBtaW4pe1xuICAgIHRoaXMuX2hvdXIgPSBob3VyID09PSB1bmRlZmluZWQgPyAwIDogcGFyc2VJbnQoaG91ciwgMTApO1xuICAgIHRoaXMuX21pbiA9IG1pbiA9PT0gdW5kZWZpbmVkID8gMCA6IHBhcnNlSW50KG1pbiwgMTApO1xuICAgIHdoaWxlKHRoaXMuX21pbiA8IDApe1xuICAgICAgICAtLXRoaXMuX2hvdXI7XG4gICAgICAgIHRoaXMuX21pbiA9IDYwICsgdGhpcy5fbWluO1xuICAgIH1cblxuICAgIHdoaWxlKHRoaXMuX21pbiA+IDU5KXtcbiAgICAgICAgKyt0aGlzLl9ob3VyO1xuICAgICAgICB0aGlzLl9taW4gPSB0aGlzLl9taW4gLSA2MDtcbiAgICB9XG5cbiAgICBpZih0aGlzLl9ob3VyIDwgMClcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnRvU3RyaW5nKCkrJyBpcyBub3QgdmFsaWQgdGltZS4nKTtcbiAgICB9XG4gIH1cblxuICBnZXRIb3VyKCl7IHJldHVybiB0aGlzLl9ob3VyOyB9O1xuICBnZXRNaW4oKXsgcmV0dXJuIHRoaXMuX21pbjsgfTtcblxuICBjbG9uZSgpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRoaXMuZ2V0SG91cigpLCB0aGlzLmdldE1pbigpKTtcbiAgfTtcblxuICBhZGRNaW4obWluKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aGlzLmdldEhvdXIoKSwgdGhpcy5nZXRNaW4oKSArIHBhcnNlSW50KG1pbiwgMTApKTtcbiAgfTtcblxuICBlcXVhbHModGltZSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRIb3VyKCkgPT09IHRpbWUuZ2V0SG91cigpICYmIHRoaXMuZ2V0TWluKCkgPT09IHRpbWUuZ2V0TWluKCk7XG4gIH07XG5cbiAgY29tcGFyZSh0aW1lKXtcbiAgICAgIGlmKHRoaXMuZ2V0SG91cigpID4gdGltZS5nZXRIb3VyKCkpXG4gICAgICB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHRoaXMuZ2V0SG91cigpIDwgdGltZS5nZXRIb3VyKCkpXG4gICAgICB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICAgIGlmKHRoaXMuZ2V0TWluKCkgPiB0aW1lLmdldE1pbigpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYodGhpcy5nZXRNaW4oKSA8IHRpbWUuZ2V0TWluKCkpXG4gICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgfTtcblxuICBnZXREaXN0YW5jZSh0YXJnZXRUaW1lKXtcbiAgICAgIHZhciB0YXJnZXRIb3VyID0gdGFyZ2V0VGltZS5nZXRIb3VyKCk7XG4gICAgICB2YXIgaG91ckRpc3RhbmNlID0gdGFyZ2V0SG91ciAtIHRoaXMuX2hvdXI7XG4gICAgICByZXR1cm4gKGhvdXJEaXN0YW5jZSAqIDYwKSArICh0YXJnZXRUaW1lLmdldE1pbigpIC0gdGhpcy5fbWluKTtcbiAgfTtcblxuICB0b1N0cmluZygpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzcGxheVRpbWUoKTtcbiAgfTtcblxuICBnZXREaXNwbGF5SG91cigpe1xuICAgICAgcmV0dXJuIHRoaXMuX2hvdXIgPCAyNCA/IHRoaXMuX2hvdXIgOiB0aGlzLl9ob3VyIC0gMjQ7XG4gIH07XG5cbiAgZ2V0RGlzcGxheU1pbigpe1xuICAgICAgcmV0dXJuIHRoaXMuX21pbiA8IDEwID8gJzAnK3RoaXMuX21pbiA6IHRoaXMuX21pbjtcbiAgfTtcblxuICBnZXREaXNwbGF5VGltZSgpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlzcGxheUhvdXIoKSArJzonKyB0aGlzLmdldERpc3BsYXlNaW4oKTtcbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvVGltZS5lczZcbiAqKi8iLCJpbXBvcnQgRXZlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9FdmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lQWN0aW9uc1xue1xuICBjb25zdHJ1Y3Rvcihjb21wb25lbnQpe1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgYWRkRXZlbnRzKGV2ZW50cyl7XG4gICAgdGhpcy5jb21wb25lbnQuZnJhbWVDb21wb25lbnQuYWRkRXZlbnRzKGV2ZW50cyk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KXtcbiAgICB0aGlzLmNvbXBvbmVudC5mcmFtZUNvbXBvbmVudC5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3Nlcy9UaW1lbGluZUFjdGlvbnMuZXM2XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IHtEcmFnU291cmNlfSBmcm9tICdyZWFjdC1kbmQnO1xuaW1wb3J0IEV2ZW50QmFzZSBmcm9tICcuL0V2ZW50QmFzZSc7XG5pbXBvcnQgRXZlbnRBY3Rpb25zIGZyb20gJy4uL2NsYXNzZXMvRXZlbnRBY3Rpb25zJztcblxuY29uc3Qgc291cmNlID0ge1xuICBiZWdpbkRyYWc6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBwcm9wcztcbiAgfSxcbiAgY2FuRHJhZzogZnVuY3Rpb24ocHJvcHMsIG1vbml0b3Ipe1xuICAgIGNvbnN0IGRyYWdnYWJsZSA9IHByb3BzLnRpbWVsaW5lLmZpbmRFdmVudEJ5SWQocHJvcHMuaWQpLnN0YXRlLmRyYWdnYWJsZTtcbiAgICByZXR1cm4gISFkcmFnZ2FibGU7XG4gIH1cbn1cblxuY29uc3QgY29sbGVjdCA9IChjb25uZWN0LCBtb25pdG9yKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29ubmVjdERyYWdTb3VyY2U6IGNvbm5lY3QuZHJhZ1NvdXJjZSgpLFxuICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpXG4gIH07XG59XG5cbmNsYXNzIEV2ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodCh0aGlzLnByb3BzLnRpbWVTcGFuKSxcbiAgICAgIHRvcDogdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5wcm9wcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSksXG4gICAgICBsZWZ0OiB0aGlzLnByb3BzLnRpbWVsaW5lLmdldExpbmVMZWZ0KHRoaXMucHJvcHMubGluZUlkKSxcbiAgICAgIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yLFxuICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy5kaXNwbGF5LFxuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgfVxuXG4gICAgdGhpcy5hY3Rpb25zID0gbmV3IEV2ZW50QWN0aW9ucyh0aGlzKTtcblxuICAgIHRoaXMubGluZUlkID0gdGhpcy5wcm9wcy5saW5lSWQ7XG4gICAgdGhpcy50aW1lU3BhbiA9IHRoaXMucHJvcHMudGltZVNwYW47XG4gICAgdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLnJlc2l6aW5nVGltZVNwYW4gPSBudWxsO1xuICAgIHRoaXMucmVzaXppbmcgPSBmYWxzZTtcbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmFkZEV2ZW50Q29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRUaW1lU3Bhbigpe1xuICAgIHJldHVybiB0aGlzLnJlc2l6aW5nVGltZVNwYW4gfHwgdGhpcy50aW1lU3BhbjtcbiAgfVxuXG4gIGdldCBuZXh0UG9zaXRpb24oKXtcbiAgICBpZih0aGlzLmRyYWdnaW5nUG9zaXRpb24pe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGluZUlkOiB0aGlzLmRyYWdnaW5nUG9zaXRpb24ubGluZUlkLFxuICAgICAgICB0aW1lU3BhbjogdGhpcy50aW1lU3Bhbi5zaGlmdFN0YXJ0VGltZSh0aGlzLmRyYWdnaW5nUG9zaXRpb24udGltZSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgIHJldHVybntcbiAgICAgICAgbGluZUlkOiB0aGlzLmxpbmVJZCxcbiAgICAgICAgdGltZVNwYW46IHRoaXMucmVzaXppbmdUaW1lU3BhblxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IHByZXZQb3NpdGlvbigpe1xuICAgIGlmKCF0aGlzLmRyYWdnaW5nUG9zaXRpb24gJiYgIXRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJue1xuICAgICAgICBsaW5lSWQ6IHRoaXMubGluZUlkLFxuICAgICAgICB0aW1lU3BhbjogdGhpcy50aW1lU3BhblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDku5bjga5FdmVudOOBqOmHjeOBquOBo+OBpuOBhOOBquOBhOOBi+ODgeOCp+ODg+OCr+OBmeOCi1xuICAgKiBAcGFyYW0gIHtvYmplY3R9ICBwb3NpdGlvbiB7bGluZUlkOiAqKiosIHRpbWVTcGFuOiAqKip9XG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc0ZyZWVQb3NpdGlvbihwb3NpdGlvbil7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnRpbWVsaW5lLmV2ZW50Q29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGV2ID0gdGhpcy5wcm9wcy50aW1lbGluZS5ldmVudENvbXBvbmVudHNbaV07XG4gICAgICBpZihldiA9PT0gdGhpcykgY29udGludWU7XG4gICAgICBpZihldi5saW5lSWQgIT0gcG9zaXRpb24ubGluZUlkKSBjb250aW51ZTtcbiAgICAgIGlmKGV2LmN1cnJlbnRUaW1lU3Bhbi5vdmVybGFwcyhwb3NpdGlvbi50aW1lU3Bhbikpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBtb3ZlVG8odG9wLCBsZWZ0KXtcbiAgICB0aGlzLnNldFN0YXRlKHt0b3A6IHRvcCwgbGVmdDogbGVmdH0pO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBpZih0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLm9uQ2xpY2tFdmVudCl7XG4gICAgICBpZih0aGlzLnJlc2l6aW5nKXtcbiAgICAgICAgcmV0dXJuIDtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMub25DbGlja0V2ZW50KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBldmVudDogZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhZ2dpbmcodGltZSwgbGluZUlkKXtcbiAgICB0aGlzLmRyYWdnaW5nUG9zaXRpb24gPSB7dGltZTogdGltZSwgbGluZUlkOiBsaW5lSWR9O1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nRGlzcGxheTogdGltZS5nZXREaXNwbGF5VGltZSgpfSk7XG4gIH1cblxuICByZXNpemVVcChlKXtcbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LnJlc2l6ZVVwKHRoaXMsIGUuY2xpZW50WSk7XG4gIH1cblxuICByZXNpemVEb3duKGUpe1xuICAgIHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQucmVzaXplRG93bih0aGlzLCBlLmNsaWVudFkpO1xuICB9XG5cbiAgZW5kUmVzaXppbmcoZSl7XG4gICAgaWYodGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6IG51bGwsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheVRvcDogbnVsbFxuICAgICAgfTtcblxuICAgICAgaWYodGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgICAgbmV3U3RhdGUudG9wID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5yZXNpemluZ1RpbWVTcGFuLmdldFN0YXJ0VGltZSgpKTtcbiAgICAgICAgbmV3U3RhdGUuaGVpZ2h0ID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KHRoaXMucmVzaXppbmdUaW1lU3Bhbik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICAvL29uQ2xpY2vjgojjgoplbmRSZXNpemluZ+OBruWFiOOBq+eZuueUn+OBl+OBpuOBl+OBvuOBhuOAglxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXNpemluZyA9IGZhbHNlLCAxMDApO1xuICB9XG5cbiAgb25Db250ZXh0TWVudShlKXtcbiAgICBpZih0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLm9uUmlnaHRDbGlja0V2ZW50KXtcbiAgICAgIHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMub25SaWdodENsaWNrRXZlbnQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGV2ZW50OiBlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3AgKyAncHgnLFxuICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0ICsgJ3B4JyxcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5jb2xvcixcbiAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuaXNEcmFnZ2luZyA/ICdub25lJyA6ICdibG9jaydcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY29ubmVjdERyYWdTb3VyY2UoXG4gICAgICA8ZGl2IG9uQ29udGV4dE1lbnU9e2UgPT4gdGhpcy5vbkNvbnRleHRNZW51KGUpfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3RsRXZlbnRWaWV3Jywge3RsRHJhZ2dpbmdFdmVudDogdGhpcy5zdGF0ZS5kcmFnZ2FibGUsIHRsRmxleGlibGVFdmVudDogdGhpcy5zdGF0ZS5yZXNpemFibGV9KX0gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX0+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIGlmKHRoaXMuc3RhdGUucmVzaXphYmxlKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSaXNlemVIYW5kbGVcIiBvblRvdWNoc3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVVcChlKX0gb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVVcChlKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgICA8RXZlbnRCYXNlXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5PXt0aGlzLnN0YXRlLmRyYWdnaW5nRGlzcGxheX1cbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXlUb3A9e3RoaXMuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5VG9wfVxuICAgICAgICAgIGRpc3BsYXk9e3RoaXMuc3RhdGUuZGlzcGxheX1cbiAgICAgICAgLz5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5yZXNpemFibGUpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bFJpc2V6ZUhhbmRsZSB0bEJvdHRvbVwiIG9uVG91Y2hzdGFydD17ZSA9PiB0aGlzLnJlc2l6ZURvd24oZSl9IG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplRG93bihlKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkV2ZW50LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuICBjb2xvcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAvL1RPRE8g5b6q55Kw5Y+C54Wn44Gr44Gq44KL44Gu44GnaW1wb3J044Gn44GN44Ga44CC44Go44KK44GC44GI44GaYW5544Gn44GU44G+44GL44GX44Gm44G+44GZ44CCXG4gIHRpbWVsaW5lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGxpbmVJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdTb3VyY2UoXCJFdmVudFwiLCBzb3VyY2UsIGNvbGxlY3QpKEV2ZW50KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRXZlbnQuanN4XG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmUob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmpbJ2RlZmF1bHQnXSA6IG9iajsgfVxuXG52YXIgX0RyYWdEcm9wQ29udGV4dCA9IHJlcXVpcmUoJy4vRHJhZ0Ryb3BDb250ZXh0Jyk7XG5cbmV4cG9ydHMuRHJhZ0Ryb3BDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlKF9EcmFnRHJvcENvbnRleHQpO1xuXG52YXIgX0RyYWdMYXllciA9IHJlcXVpcmUoJy4vRHJhZ0xheWVyJyk7XG5cbmV4cG9ydHMuRHJhZ0xheWVyID0gX2ludGVyb3BSZXF1aXJlKF9EcmFnTGF5ZXIpO1xuXG52YXIgX0RyYWdTb3VyY2UgPSByZXF1aXJlKCcuL0RyYWdTb3VyY2UnKTtcblxuZXhwb3J0cy5EcmFnU291cmNlID0gX2ludGVyb3BSZXF1aXJlKF9EcmFnU291cmNlKTtcblxudmFyIF9Ecm9wVGFyZ2V0ID0gcmVxdWlyZSgnLi9Ecm9wVGFyZ2V0Jyk7XG5cbmV4cG9ydHMuRHJvcFRhcmdldCA9IF9pbnRlcm9wUmVxdWlyZShfRHJvcFRhcmdldCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyYWdEcm9wQ29udGV4dDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2RuZENvcmUgPSByZXF1aXJlKCdkbmQtY29yZScpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMgPSByZXF1aXJlKCcuL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzJyk7XG5cbnZhciBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzKTtcblxuZnVuY3Rpb24gRHJhZ0Ryb3BDb250ZXh0KGJhY2tlbmRPck1vZHVsZSkge1xuICBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czJbJ2RlZmF1bHQnXS5hcHBseSh1bmRlZmluZWQsIFsnRHJhZ0Ryb3BDb250ZXh0JywgJ2JhY2tlbmQnXS5jb25jYXQoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuXG4gIC8vIEF1dG8tZGV0ZWN0IEVTNiBkZWZhdWx0IGV4cG9ydCBmb3IgcGVvcGxlIHN0aWxsIHVzaW5nIEVTNVxuICB2YXIgYmFja2VuZCA9IHVuZGVmaW5lZDtcbiAgaWYgKHR5cGVvZiBiYWNrZW5kT3JNb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBiYWNrZW5kT3JNb2R1bGVbJ2RlZmF1bHQnXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGJhY2tlbmQgPSBiYWNrZW5kT3JNb2R1bGVbJ2RlZmF1bHQnXTtcbiAgfSBlbHNlIHtcbiAgICBiYWNrZW5kID0gYmFja2VuZE9yTW9kdWxlO1xuICB9XG5cbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgYmFja2VuZCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIHRoZSBiYWNrZW5kIHRvIGJlIGEgZnVuY3Rpb24gb3IgYW4gRVM2IG1vZHVsZSBleHBvcnRpbmcgYSBkZWZhdWx0IGZ1bmN0aW9uLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctZHJvcC1jb250ZXh0Lmh0bWwnKTtcblxuICB2YXIgY2hpbGRDb250ZXh0ID0ge1xuICAgIGRyYWdEcm9wTWFuYWdlcjogbmV3IF9kbmRDb3JlLkRyYWdEcm9wTWFuYWdlcihiYWNrZW5kKVxuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0ZUNvbnRleHQoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gRGVjb3JhdGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IERlY29yYXRlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuXG4gICAgcmV0dXJuIChmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKERyYWdEcm9wQ29udGV4dENvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIERyYWdEcm9wQ29udGV4dENvbnRhaW5lcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdEcm9wQ29udGV4dENvbnRhaW5lcik7XG5cbiAgICAgICAgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBEcmFnRHJvcENvbnRleHRDb250YWluZXIucHJvdG90eXBlLmdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMuY2hpbGQ7XG4gICAgICB9O1xuXG4gICAgICBEcmFnRHJvcENvbnRleHRDb250YWluZXIucHJvdG90eXBlLmdldE1hbmFnZXIgPSBmdW5jdGlvbiBnZXRNYW5hZ2VyKCkge1xuICAgICAgICByZXR1cm4gY2hpbGRDb250ZXh0LmRyYWdEcm9wTWFuYWdlcjtcbiAgICAgIH07XG5cbiAgICAgIERyYWdEcm9wQ29udGV4dENvbnRhaW5lci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gY2hpbGRDb250ZXh0O1xuICAgICAgfTtcblxuICAgICAgRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChEZWNvcmF0ZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgcmVmOiAnY2hpbGQnIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhEcmFnRHJvcENvbnRleHRDb250YWluZXIsIG51bGwsIFt7XG4gICAgICAgIGtleTogJ0RlY29yYXRlZENvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBEZWNvcmF0ZWRDb21wb25lbnQsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzcGxheU5hbWUnLFxuICAgICAgICB2YWx1ZTogJ0RyYWdEcm9wQ29udGV4dCgnICsgZGlzcGxheU5hbWUgKyAnKScsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2hpbGRDb250ZXh0VHlwZXMnLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGRyYWdEcm9wTWFuYWdlcjogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBEcmFnRHJvcENvbnRleHRDb250YWluZXI7XG4gICAgfSkoX3JlYWN0LkNvbXBvbmVudCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvRHJhZ0Ryb3BDb250ZXh0LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqWydkZWZhdWx0J10gOiBvYmo7IH1cblxudmFyIF9EcmFnRHJvcE1hbmFnZXIgPSByZXF1aXJlKCcuL0RyYWdEcm9wTWFuYWdlcicpO1xuXG5leHBvcnRzLkRyYWdEcm9wTWFuYWdlciA9IF9pbnRlcm9wUmVxdWlyZShfRHJhZ0Ryb3BNYW5hZ2VyKTtcblxudmFyIF9EcmFnU291cmNlID0gcmVxdWlyZSgnLi9EcmFnU291cmNlJyk7XG5cbmV4cG9ydHMuRHJhZ1NvdXJjZSA9IF9pbnRlcm9wUmVxdWlyZShfRHJhZ1NvdXJjZSk7XG5cbnZhciBfRHJvcFRhcmdldCA9IHJlcXVpcmUoJy4vRHJvcFRhcmdldCcpO1xuXG5leHBvcnRzLkRyb3BUYXJnZXQgPSBfaW50ZXJvcFJlcXVpcmUoX0Ryb3BUYXJnZXQpO1xuXG52YXIgX2JhY2tlbmRzQ3JlYXRlVGVzdEJhY2tlbmQgPSByZXF1aXJlKCcuL2JhY2tlbmRzL2NyZWF0ZVRlc3RCYWNrZW5kJyk7XG5cbmV4cG9ydHMuY3JlYXRlVGVzdEJhY2tlbmQgPSBfaW50ZXJvcFJlcXVpcmUoX2JhY2tlbmRzQ3JlYXRlVGVzdEJhY2tlbmQpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbJ2RlZmF1bHQnXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfcmVkdXhMaWJDcmVhdGVTdG9yZSA9IHJlcXVpcmUoJ3JlZHV4L2xpYi9jcmVhdGVTdG9yZScpO1xuXG52YXIgX3JlZHV4TGliQ3JlYXRlU3RvcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVkdXhMaWJDcmVhdGVTdG9yZSk7XG5cbnZhciBfcmVkdWNlcnMgPSByZXF1aXJlKCcuL3JlZHVjZXJzJyk7XG5cbnZhciBfcmVkdWNlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVkdWNlcnMpO1xuXG52YXIgX2FjdGlvbnNEcmFnRHJvcCA9IHJlcXVpcmUoJy4vYWN0aW9ucy9kcmFnRHJvcCcpO1xuXG52YXIgZHJhZ0Ryb3BBY3Rpb25zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2FjdGlvbnNEcmFnRHJvcCk7XG5cbnZhciBfRHJhZ0Ryb3BNb25pdG9yID0gcmVxdWlyZSgnLi9EcmFnRHJvcE1vbml0b3InKTtcblxudmFyIF9EcmFnRHJvcE1vbml0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJhZ0Ryb3BNb25pdG9yKTtcblxudmFyIF9IYW5kbGVyUmVnaXN0cnkgPSByZXF1aXJlKCcuL0hhbmRsZXJSZWdpc3RyeScpO1xuXG52YXIgX0hhbmRsZXJSZWdpc3RyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IYW5kbGVyUmVnaXN0cnkpO1xuXG52YXIgRHJhZ0Ryb3BNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRHJhZ0Ryb3BNYW5hZ2VyKGNyZWF0ZUJhY2tlbmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0Ryb3BNYW5hZ2VyKTtcblxuICAgIHZhciBzdG9yZSA9IF9yZWR1eExpYkNyZWF0ZVN0b3JlMlsnZGVmYXVsdCddKF9yZWR1Y2VyczJbJ2RlZmF1bHQnXSk7XG5cbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5tb25pdG9yID0gbmV3IF9EcmFnRHJvcE1vbml0b3IyWydkZWZhdWx0J10oc3RvcmUpO1xuICAgIHRoaXMucmVnaXN0cnkgPSB0aGlzLm1vbml0b3IucmVnaXN0cnk7XG4gICAgdGhpcy5iYWNrZW5kID0gY3JlYXRlQmFja2VuZCh0aGlzKTtcblxuICAgIHN0b3JlLnN1YnNjcmliZSh0aGlzLmhhbmRsZVJlZkNvdW50Q2hhbmdlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgRHJhZ0Ryb3BNYW5hZ2VyLnByb3RvdHlwZS5oYW5kbGVSZWZDb3VudENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVJlZkNvdW50Q2hhbmdlKCkge1xuICAgIHZhciBzaG91bGRTZXRVcCA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5yZWZDb3VudCA+IDA7XG4gICAgaWYgKHNob3VsZFNldFVwICYmICF0aGlzLmlzU2V0VXApIHtcbiAgICAgIHRoaXMuYmFja2VuZC5zZXR1cCgpO1xuICAgICAgdGhpcy5pc1NldFVwID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFzaG91bGRTZXRVcCAmJiB0aGlzLmlzU2V0VXApIHtcbiAgICAgIHRoaXMuYmFja2VuZC50ZWFyZG93bigpO1xuICAgICAgdGhpcy5pc1NldFVwID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIERyYWdEcm9wTWFuYWdlci5wcm90b3R5cGUuZ2V0TW9uaXRvciA9IGZ1bmN0aW9uIGdldE1vbml0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9uaXRvcjtcbiAgfTtcblxuICBEcmFnRHJvcE1hbmFnZXIucHJvdG90eXBlLmdldEJhY2tlbmQgPSBmdW5jdGlvbiBnZXRCYWNrZW5kKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2tlbmQ7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNYW5hZ2VyLnByb3RvdHlwZS5nZXRSZWdpc3RyeSA9IGZ1bmN0aW9uIGdldFJlZ2lzdHJ5KCkge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5O1xuICB9O1xuXG4gIERyYWdEcm9wTWFuYWdlci5wcm90b3R5cGUuZ2V0QWN0aW9ucyA9IGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgdmFyIG1hbmFnZXIgPSB0aGlzO1xuICAgIHZhciBkaXNwYXRjaCA9IHRoaXMuc3RvcmUuZGlzcGF0Y2g7XG5cbiAgICBmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gYWN0aW9uQ3JlYXRvci5hcHBseShtYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBkaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhkcmFnRHJvcEFjdGlvbnMpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGRyYWdEcm9wQWN0aW9uc1trZXldID09PSAnZnVuY3Rpb24nO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYm91bmRBY3Rpb25zLCBrZXkpIHtcbiAgICAgIGJvdW5kQWN0aW9uc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoZHJhZ0Ryb3BBY3Rpb25zW2tleV0pO1xuICAgICAgcmV0dXJuIGJvdW5kQWN0aW9ucztcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgcmV0dXJuIERyYWdEcm9wTWFuYWdlcjtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyYWdEcm9wTWFuYWdlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9EcmFnRHJvcE1hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5BY3Rpb25UeXBlcyA9IHVuZGVmaW5lZDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlU3RvcmU7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF9zeW1ib2xPYnNlcnZhYmxlID0gcmVxdWlyZSgnc3ltYm9sLW9ic2VydmFibGUnKTtcblxudmFyIF9zeW1ib2xPYnNlcnZhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbE9ic2VydmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciBBY3Rpb25UeXBlcyA9IGV4cG9ydHMuQWN0aW9uVHlwZXMgPSB7XG4gIElOSVQ6ICdAQHJlZHV4L0lOSVQnXG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gKlxuICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICpcbiAqIEBwYXJhbSB7YW55fSBbaW5pdGlhbFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmhhbmNlciBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IGluaXRpYWxTdGF0ZTtcbiAgICBpbml0aWFsU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCEoMCwgX2lzUGxhaW5PYmplY3QyW1wiZGVmYXVsdFwiXSkoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5wYXJzaW5nL2VzLW9ic2VydmFibGVcbiAgICovXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7IHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbX3N5bWJvbE9ic2VydmFibGUyW1wiZGVmYXVsdFwiXV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9XG5cbiAgLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG4gIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbX3N5bWJvbE9ic2VydmFibGUyW1wiZGVmYXVsdFwiXV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC9saWIvY3JlYXRlU3RvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzSG9zdE9iamVjdCA9IHJlcXVpcmUoJy4vX2lzSG9zdE9iamVjdCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fFxuICAgICAgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT0gb2JqZWN0VGFnIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmXG4gICAgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiYgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQbGFpbk9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4L34vbG9kYXNoL2lzUGxhaW5PYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuLyoqXG4gKiBHZXRzIHRoZSBgW1tQcm90b3R5cGVdXWAgb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7bnVsbHxPYmplY3R9IFJldHVybnMgdGhlIGBbW1Byb3RvdHlwZV1dYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvdG90eXBlKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVHZXRQcm90b3R5cGUoT2JqZWN0KHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgvfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSG9zdE9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4L34vbG9kYXNoL19pc0hvc3RPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgvfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3BvbnlmaWxsJykoZ2xvYmFsIHx8IHdpbmRvdyB8fCB0aGlzKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdFN5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3ltYm9sLW9ic2VydmFibGUvcG9ueWZpbGwuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZHJhZ09mZnNldCA9IHJlcXVpcmUoJy4vZHJhZ09mZnNldCcpO1xuXG52YXIgX2RyYWdPZmZzZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZHJhZ09mZnNldCk7XG5cbnZhciBfZHJhZ09wZXJhdGlvbiA9IHJlcXVpcmUoJy4vZHJhZ09wZXJhdGlvbicpO1xuXG52YXIgX2RyYWdPcGVyYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZHJhZ09wZXJhdGlvbik7XG5cbnZhciBfcmVmQ291bnQgPSByZXF1aXJlKCcuL3JlZkNvdW50Jyk7XG5cbnZhciBfcmVmQ291bnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVmQ291bnQpO1xuXG52YXIgX2RpcnR5SGFuZGxlcklkcyA9IHJlcXVpcmUoJy4vZGlydHlIYW5kbGVySWRzJyk7XG5cbnZhciBfZGlydHlIYW5kbGVySWRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RpcnR5SGFuZGxlcklkcyk7XG5cbnZhciBfc3RhdGVJZCA9IHJlcXVpcmUoJy4vc3RhdGVJZCcpO1xuXG52YXIgX3N0YXRlSWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVJZCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSBzdGF0ZSA9IHt9O1xuXG4gIHJldHVybiB7XG4gICAgZGlydHlIYW5kbGVySWRzOiBfZGlydHlIYW5kbGVySWRzMlsnZGVmYXVsdCddKHN0YXRlLmRpcnR5SGFuZGxlcklkcywgYWN0aW9uLCBzdGF0ZS5kcmFnT3BlcmF0aW9uKSxcbiAgICBkcmFnT2Zmc2V0OiBfZHJhZ09mZnNldDJbJ2RlZmF1bHQnXShzdGF0ZS5kcmFnT2Zmc2V0LCBhY3Rpb24pLFxuICAgIHJlZkNvdW50OiBfcmVmQ291bnQyWydkZWZhdWx0J10oc3RhdGUucmVmQ291bnQsIGFjdGlvbiksXG4gICAgZHJhZ09wZXJhdGlvbjogX2RyYWdPcGVyYXRpb24yWydkZWZhdWx0J10oc3RhdGUuZHJhZ09wZXJhdGlvbiwgYWN0aW9uKSxcbiAgICBzdGF0ZUlkOiBfc3RhdGVJZDJbJ2RlZmF1bHQnXShzdGF0ZS5zdGF0ZUlkKVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZHJhZ09mZnNldDtcbmV4cG9ydHMuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gZ2V0U291cmNlQ2xpZW50T2Zmc2V0O1xuZXhwb3J0cy5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQgPSBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQ7XG5cbnZhciBfYWN0aW9uc0RyYWdEcm9wID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9kcmFnRHJvcCcpO1xuXG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICBpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0OiBudWxsLFxuICBpbml0aWFsQ2xpZW50T2Zmc2V0OiBudWxsLFxuICBjbGllbnRPZmZzZXQ6IG51bGxcbn07XG5cbmZ1bmN0aW9uIGFyZU9mZnNldHNFcXVhbChvZmZzZXRBLCBvZmZzZXRCKSB7XG4gIGlmIChvZmZzZXRBID09PSBvZmZzZXRCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIG9mZnNldEEgJiYgb2Zmc2V0QiAmJiBvZmZzZXRBLnggPT09IG9mZnNldEIueCAmJiBvZmZzZXRBLnkgPT09IG9mZnNldEIueTtcbn1cblxuZnVuY3Rpb24gZHJhZ09mZnNldChzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkJFR0lOX0RSQUc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0OiBhY3Rpb24uc291cmNlQ2xpZW50T2Zmc2V0LFxuICAgICAgICBpbml0aWFsQ2xpZW50T2Zmc2V0OiBhY3Rpb24uY2xpZW50T2Zmc2V0LFxuICAgICAgICBjbGllbnRPZmZzZXQ6IGFjdGlvbi5jbGllbnRPZmZzZXRcbiAgICAgIH07XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkhPVkVSOlxuICAgICAgaWYgKGFyZU9mZnNldHNFcXVhbChzdGF0ZS5jbGllbnRPZmZzZXQsIGFjdGlvbi5jbGllbnRPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY2xpZW50T2Zmc2V0OiBhY3Rpb24uY2xpZW50T2Zmc2V0XG4gICAgICB9KTtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuRU5EX0RSQUc6XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkRST1A6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KHN0YXRlKSB7XG4gIHZhciBjbGllbnRPZmZzZXQgPSBzdGF0ZS5jbGllbnRPZmZzZXQ7XG4gIHZhciBpbml0aWFsQ2xpZW50T2Zmc2V0ID0gc3RhdGUuaW5pdGlhbENsaWVudE9mZnNldDtcbiAgdmFyIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQgPSBzdGF0ZS5pbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0O1xuXG4gIGlmICghY2xpZW50T2Zmc2V0IHx8ICFpbml0aWFsQ2xpZW50T2Zmc2V0IHx8ICFpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiBjbGllbnRPZmZzZXQueCArIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQueCAtIGluaXRpYWxDbGllbnRPZmZzZXQueCxcbiAgICB5OiBjbGllbnRPZmZzZXQueSArIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQueSAtIGluaXRpYWxDbGllbnRPZmZzZXQueVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoc3RhdGUpIHtcbiAgdmFyIGNsaWVudE9mZnNldCA9IHN0YXRlLmNsaWVudE9mZnNldDtcbiAgdmFyIGluaXRpYWxDbGllbnRPZmZzZXQgPSBzdGF0ZS5pbml0aWFsQ2xpZW50T2Zmc2V0O1xuXG4gIGlmICghY2xpZW50T2Zmc2V0IHx8ICFpbml0aWFsQ2xpZW50T2Zmc2V0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiBjbGllbnRPZmZzZXQueCAtIGluaXRpYWxDbGllbnRPZmZzZXQueCxcbiAgICB5OiBjbGllbnRPZmZzZXQueSAtIGluaXRpYWxDbGllbnRPZmZzZXQueVxuICB9O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT2Zmc2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuYmVnaW5EcmFnID0gYmVnaW5EcmFnO1xuZXhwb3J0cy5wdWJsaXNoRHJhZ1NvdXJjZSA9IHB1Ymxpc2hEcmFnU291cmNlO1xuZXhwb3J0cy5ob3ZlciA9IGhvdmVyO1xuZXhwb3J0cy5kcm9wID0gZHJvcDtcbmV4cG9ydHMuZW5kRHJhZyA9IGVuZERyYWc7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlsc01hdGNoZXNUeXBlID0gcmVxdWlyZSgnLi4vdXRpbHMvbWF0Y2hlc1R5cGUnKTtcblxudmFyIF91dGlsc01hdGNoZXNUeXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzTWF0Y2hlc1R5cGUpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNBcnJheSk7XG5cbnZhciBfbG9kYXNoSXNPYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNPYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc09iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc09iamVjdCk7XG5cbnZhciBCRUdJTl9EUkFHID0gJ2RuZC1jb3JlL0JFR0lOX0RSQUcnO1xuZXhwb3J0cy5CRUdJTl9EUkFHID0gQkVHSU5fRFJBRztcbnZhciBQVUJMSVNIX0RSQUdfU09VUkNFID0gJ2RuZC1jb3JlL1BVQkxJU0hfRFJBR19TT1VSQ0UnO1xuZXhwb3J0cy5QVUJMSVNIX0RSQUdfU09VUkNFID0gUFVCTElTSF9EUkFHX1NPVVJDRTtcbnZhciBIT1ZFUiA9ICdkbmQtY29yZS9IT1ZFUic7XG5leHBvcnRzLkhPVkVSID0gSE9WRVI7XG52YXIgRFJPUCA9ICdkbmQtY29yZS9EUk9QJztcbmV4cG9ydHMuRFJPUCA9IERST1A7XG52YXIgRU5EX0RSQUcgPSAnZG5kLWNvcmUvRU5EX0RSQUcnO1xuXG5leHBvcnRzLkVORF9EUkFHID0gRU5EX0RSQUc7XG5cbmZ1bmN0aW9uIGJlZ2luRHJhZyhzb3VyY2VJZHMpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgX3JlZiRwdWJsaXNoU291cmNlID0gX3JlZi5wdWJsaXNoU291cmNlO1xuICB2YXIgcHVibGlzaFNvdXJjZSA9IF9yZWYkcHVibGlzaFNvdXJjZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkcHVibGlzaFNvdXJjZTtcbiAgdmFyIF9yZWYkY2xpZW50T2Zmc2V0ID0gX3JlZi5jbGllbnRPZmZzZXQ7XG4gIHZhciBjbGllbnRPZmZzZXQgPSBfcmVmJGNsaWVudE9mZnNldCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWYkY2xpZW50T2Zmc2V0O1xuICB2YXIgZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gX3JlZi5nZXRTb3VyY2VDbGllbnRPZmZzZXQ7XG5cbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNBcnJheTJbJ2RlZmF1bHQnXShzb3VyY2VJZHMpLCAnRXhwZWN0ZWQgc291cmNlSWRzIHRvIGJlIGFuIGFycmF5LicpO1xuXG4gIHZhciBtb25pdG9yID0gdGhpcy5nZXRNb25pdG9yKCk7XG4gIHZhciByZWdpc3RyeSA9IHRoaXMuZ2V0UmVnaXN0cnkoKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSghbW9uaXRvci5pc0RyYWdnaW5nKCksICdDYW5ub3QgY2FsbCBiZWdpbkRyYWcgd2hpbGUgZHJhZ2dpbmcuJyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VJZHMubGVuZ3RoOyBpKyspIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZHNbaV0pLCAnRXhwZWN0ZWQgc291cmNlSWRzIHRvIGJlIHJlZ2lzdGVyZWQuJyk7XG4gIH1cblxuICB2YXIgc291cmNlSWQgPSBudWxsO1xuICBmb3IgKHZhciBpID0gc291cmNlSWRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKG1vbml0b3IuY2FuRHJhZ1NvdXJjZShzb3VyY2VJZHNbaV0pKSB7XG4gICAgICBzb3VyY2VJZCA9IHNvdXJjZUlkc1tpXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAoc291cmNlSWQgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc291cmNlQ2xpZW50T2Zmc2V0ID0gbnVsbDtcbiAgaWYgKGNsaWVudE9mZnNldCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGdldFNvdXJjZUNsaWVudE9mZnNldCA9PT0gJ2Z1bmN0aW9uJywgJ1doZW4gY2xpZW50T2Zmc2V0IGlzIHByb3ZpZGVkLCBnZXRTb3VyY2VDbGllbnRPZmZzZXQgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIHNvdXJjZUNsaWVudE9mZnNldCA9IGdldFNvdXJjZUNsaWVudE9mZnNldChzb3VyY2VJZCk7XG4gIH1cblxuICB2YXIgc291cmNlID0gcmVnaXN0cnkuZ2V0U291cmNlKHNvdXJjZUlkKTtcbiAgdmFyIGl0ZW0gPSBzb3VyY2UuYmVnaW5EcmFnKG1vbml0b3IsIHNvdXJjZUlkKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNPYmplY3QyWydkZWZhdWx0J10oaXRlbSksICdJdGVtIG11c3QgYmUgYW4gb2JqZWN0LicpO1xuXG4gIHJlZ2lzdHJ5LnBpblNvdXJjZShzb3VyY2VJZCk7XG5cbiAgdmFyIGl0ZW1UeXBlID0gcmVnaXN0cnkuZ2V0U291cmNlVHlwZShzb3VyY2VJZCk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQkVHSU5fRFJBRyxcbiAgICBpdGVtVHlwZTogaXRlbVR5cGUsXG4gICAgaXRlbTogaXRlbSxcbiAgICBzb3VyY2VJZDogc291cmNlSWQsXG4gICAgY2xpZW50T2Zmc2V0OiBjbGllbnRPZmZzZXQsXG4gICAgc291cmNlQ2xpZW50T2Zmc2V0OiBzb3VyY2VDbGllbnRPZmZzZXQsXG4gICAgaXNTb3VyY2VQdWJsaWM6IHB1Ymxpc2hTb3VyY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHVibGlzaERyYWdTb3VyY2UobWFuYWdlcikge1xuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICBpZiAoIW1vbml0b3IuaXNEcmFnZ2luZygpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBQVUJMSVNIX0RSQUdfU09VUkNFXG4gIH07XG59XG5cbmZ1bmN0aW9uIGhvdmVyKHRhcmdldElkcykge1xuICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgX3JlZjIkY2xpZW50T2Zmc2V0ID0gX3JlZjIuY2xpZW50T2Zmc2V0O1xuICB2YXIgY2xpZW50T2Zmc2V0ID0gX3JlZjIkY2xpZW50T2Zmc2V0ID09PSB1bmRlZmluZWQgPyBudWxsIDogX3JlZjIkY2xpZW50T2Zmc2V0O1xuXG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzQXJyYXkyWydkZWZhdWx0J10odGFyZ2V0SWRzKSwgJ0V4cGVjdGVkIHRhcmdldElkcyB0byBiZSBhbiBhcnJheS4nKTtcbiAgdGFyZ2V0SWRzID0gdGFyZ2V0SWRzLnNsaWNlKDApO1xuXG4gIHZhciBtb25pdG9yID0gdGhpcy5nZXRNb25pdG9yKCk7XG4gIHZhciByZWdpc3RyeSA9IHRoaXMuZ2V0UmVnaXN0cnkoKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShtb25pdG9yLmlzRHJhZ2dpbmcoKSwgJ0Nhbm5vdCBjYWxsIGhvdmVyIHdoaWxlIG5vdCBkcmFnZ2luZy4nKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSghbW9uaXRvci5kaWREcm9wKCksICdDYW5ub3QgY2FsbCBob3ZlciBhZnRlciBkcm9wLicpO1xuXG4gIC8vIEZpcnN0IGNoZWNrIGludmFyaWFudHMuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0SWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRhcmdldElkID0gdGFyZ2V0SWRzW2ldO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGFyZ2V0SWRzLmxhc3RJbmRleE9mKHRhcmdldElkKSA9PT0gaSwgJ0V4cGVjdGVkIHRhcmdldElkcyB0byBiZSB1bmlxdWUgaW4gdGhlIHBhc3NlZCBhcnJheS4nKTtcblxuICAgIHZhciB0YXJnZXQgPSByZWdpc3RyeS5nZXRUYXJnZXQodGFyZ2V0SWQpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGFyZ2V0LCAnRXhwZWN0ZWQgdGFyZ2V0SWRzIHRvIGJlIHJlZ2lzdGVyZWQuJyk7XG4gIH1cblxuICB2YXIgZHJhZ2dlZEl0ZW1UeXBlID0gbW9uaXRvci5nZXRJdGVtVHlwZSgpO1xuXG4gIC8vIFJlbW92ZSB0aG9zZSB0YXJnZXRJZHMgdGhhdCBkb24ndCBtYXRjaCB0aGUgdGFyZ2V0VHlwZS4gIFRoaXNcbiAgLy8gZml4ZXMgc2hhbGxvdyBpc092ZXIgd2hpY2ggd291bGQgb25seSBiZSBub24tc2hhbGxvdyBiZWNhdXNlIG9mXG4gIC8vIG5vbi1tYXRjaGluZyB0YXJnZXRzLlxuICBmb3IgKHZhciBpID0gdGFyZ2V0SWRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHRhcmdldElkID0gdGFyZ2V0SWRzW2ldO1xuICAgIHZhciB0YXJnZXRUeXBlID0gcmVnaXN0cnkuZ2V0VGFyZ2V0VHlwZSh0YXJnZXRJZCk7XG4gICAgaWYgKCFfdXRpbHNNYXRjaGVzVHlwZTJbJ2RlZmF1bHQnXSh0YXJnZXRUeXBlLCBkcmFnZ2VkSXRlbVR5cGUpKSB7XG4gICAgICB0YXJnZXRJZHMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmFsbHkgY2FsbCBob3ZlciBvbiBhbGwgbWF0Y2hpbmcgdGFyZ2V0cy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXJnZXRJZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdGFyZ2V0SWQgPSB0YXJnZXRJZHNbaV07XG4gICAgdmFyIHRhcmdldCA9IHJlZ2lzdHJ5LmdldFRhcmdldCh0YXJnZXRJZCk7XG4gICAgdGFyZ2V0LmhvdmVyKG1vbml0b3IsIHRhcmdldElkKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogSE9WRVIsXG4gICAgdGFyZ2V0SWRzOiB0YXJnZXRJZHMsXG4gICAgY2xpZW50T2Zmc2V0OiBjbGllbnRPZmZzZXRcbiAgfTtcbn1cblxuZnVuY3Rpb24gZHJvcCgpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICB2YXIgcmVnaXN0cnkgPSB0aGlzLmdldFJlZ2lzdHJ5KCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10obW9uaXRvci5pc0RyYWdnaW5nKCksICdDYW5ub3QgY2FsbCBkcm9wIHdoaWxlIG5vdCBkcmFnZ2luZy4nKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSghbW9uaXRvci5kaWREcm9wKCksICdDYW5ub3QgY2FsbCBkcm9wIHR3aWNlIGR1cmluZyBvbmUgZHJhZyBvcGVyYXRpb24uJyk7XG5cbiAgdmFyIHRhcmdldElkcyA9IG1vbml0b3IuZ2V0VGFyZ2V0SWRzKCkuZmlsdGVyKG1vbml0b3IuY2FuRHJvcE9uVGFyZ2V0LCBtb25pdG9yKTtcblxuICB0YXJnZXRJZHMucmV2ZXJzZSgpO1xuICB0YXJnZXRJZHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0SWQsIGluZGV4KSB7XG4gICAgdmFyIHRhcmdldCA9IHJlZ2lzdHJ5LmdldFRhcmdldCh0YXJnZXRJZCk7XG5cbiAgICB2YXIgZHJvcFJlc3VsdCA9IHRhcmdldC5kcm9wKG1vbml0b3IsIHRhcmdldElkKTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBkcm9wUmVzdWx0ID09PSAndW5kZWZpbmVkJyB8fCBfbG9kYXNoSXNPYmplY3QyWydkZWZhdWx0J10oZHJvcFJlc3VsdCksICdEcm9wIHJlc3VsdCBtdXN0IGVpdGhlciBiZSBhbiBvYmplY3Qgb3IgdW5kZWZpbmVkLicpO1xuICAgIGlmICh0eXBlb2YgZHJvcFJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRyb3BSZXN1bHQgPSBpbmRleCA9PT0gMCA/IHt9IDogbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XG4gICAgfVxuXG4gICAgX3RoaXMuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRFJPUCxcbiAgICAgIGRyb3BSZXN1bHQ6IGRyb3BSZXN1bHRcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuZERyYWcoKSB7XG4gIHZhciBtb25pdG9yID0gdGhpcy5nZXRNb25pdG9yKCk7XG4gIHZhciByZWdpc3RyeSA9IHRoaXMuZ2V0UmVnaXN0cnkoKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShtb25pdG9yLmlzRHJhZ2dpbmcoKSwgJ0Nhbm5vdCBjYWxsIGVuZERyYWcgd2hpbGUgbm90IGRyYWdnaW5nLicpO1xuXG4gIHZhciBzb3VyY2VJZCA9IG1vbml0b3IuZ2V0U291cmNlSWQoKTtcbiAgdmFyIHNvdXJjZSA9IHJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZCwgdHJ1ZSk7XG4gIHNvdXJjZS5lbmREcmFnKG1vbml0b3IsIHNvdXJjZUlkKTtcblxuICByZWdpc3RyeS51bnBpblNvdXJjZSgpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogRU5EX0RSQUdcbiAgfTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvYWN0aW9ucy9kcmFnRHJvcC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBtYXRjaGVzVHlwZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaElzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNBcnJheSk7XG5cbmZ1bmN0aW9uIG1hdGNoZXNUeXBlKHRhcmdldFR5cGUsIGRyYWdnZWRJdGVtVHlwZSkge1xuICBpZiAoX2xvZGFzaElzQXJyYXkyWydkZWZhdWx0J10odGFyZ2V0VHlwZSkpIHtcbiAgICByZXR1cm4gdGFyZ2V0VHlwZS5zb21lKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdCA9PT0gZHJhZ2dlZEl0ZW1UeXBlO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0YXJnZXRUeXBlID09PSBkcmFnZ2VkSXRlbVR5cGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL3V0aWxzL21hdGNoZXNUeXBlLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ludmFyaWFudC9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvaXNPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBkcmFnT3BlcmF0aW9uO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfYWN0aW9uc0RyYWdEcm9wID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9kcmFnRHJvcCcpO1xuXG52YXIgX2FjdGlvbnNSZWdpc3RyeSA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvcmVnaXN0cnknKTtcblxudmFyIF9sb2Rhc2hXaXRob3V0ID0gcmVxdWlyZSgnbG9kYXNoL3dpdGhvdXQnKTtcblxudmFyIF9sb2Rhc2hXaXRob3V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaFdpdGhvdXQpO1xuXG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICBpdGVtVHlwZTogbnVsbCxcbiAgaXRlbTogbnVsbCxcbiAgc291cmNlSWQ6IG51bGwsXG4gIHRhcmdldElkczogW10sXG4gIGRyb3BSZXN1bHQ6IG51bGwsXG4gIGRpZERyb3A6IGZhbHNlLFxuICBpc1NvdXJjZVB1YmxpYzogbnVsbFxufTtcblxuZnVuY3Rpb24gZHJhZ09wZXJhdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkJFR0lOX0RSQUc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1UeXBlOiBhY3Rpb24uaXRlbVR5cGUsXG4gICAgICAgIGl0ZW06IGFjdGlvbi5pdGVtLFxuICAgICAgICBzb3VyY2VJZDogYWN0aW9uLnNvdXJjZUlkLFxuICAgICAgICBpc1NvdXJjZVB1YmxpYzogYWN0aW9uLmlzU291cmNlUHVibGljLFxuICAgICAgICBkcm9wUmVzdWx0OiBudWxsLFxuICAgICAgICBkaWREcm9wOiBmYWxzZVxuICAgICAgfSk7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLlBVQkxJU0hfRFJBR19TT1VSQ0U6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGlzU291cmNlUHVibGljOiB0cnVlXG4gICAgICB9KTtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuSE9WRVI6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHRhcmdldElkczogYWN0aW9uLnRhcmdldElkc1xuICAgICAgfSk7XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LlJFTU9WRV9UQVJHRVQ6XG4gICAgICBpZiAoc3RhdGUudGFyZ2V0SWRzLmluZGV4T2YoYWN0aW9uLnRhcmdldElkKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICB0YXJnZXRJZHM6IF9sb2Rhc2hXaXRob3V0MlsnZGVmYXVsdCddKHN0YXRlLnRhcmdldElkcywgYWN0aW9uLnRhcmdldElkKVxuICAgICAgfSk7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkRST1A6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGRyb3BSZXN1bHQ6IGFjdGlvbi5kcm9wUmVzdWx0LFxuICAgICAgICBkaWREcm9wOiB0cnVlLFxuICAgICAgICB0YXJnZXRJZHM6IFtdXG4gICAgICB9KTtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuRU5EX0RSQUc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1UeXBlOiBudWxsLFxuICAgICAgICBpdGVtOiBudWxsLFxuICAgICAgICBzb3VyY2VJZDogbnVsbCxcbiAgICAgICAgZHJvcFJlc3VsdDogbnVsbCxcbiAgICAgICAgZGlkRHJvcDogZmFsc2UsXG4gICAgICAgIGlzU291cmNlUHVibGljOiBudWxsLFxuICAgICAgICB0YXJnZXRJZHM6IFtdXG4gICAgICB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT3BlcmF0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuYWRkU291cmNlID0gYWRkU291cmNlO1xuZXhwb3J0cy5hZGRUYXJnZXQgPSBhZGRUYXJnZXQ7XG5leHBvcnRzLnJlbW92ZVNvdXJjZSA9IHJlbW92ZVNvdXJjZTtcbmV4cG9ydHMucmVtb3ZlVGFyZ2V0ID0gcmVtb3ZlVGFyZ2V0O1xudmFyIEFERF9TT1VSQ0UgPSAnZG5kLWNvcmUvQUREX1NPVVJDRSc7XG5leHBvcnRzLkFERF9TT1VSQ0UgPSBBRERfU09VUkNFO1xudmFyIEFERF9UQVJHRVQgPSAnZG5kLWNvcmUvQUREX1RBUkdFVCc7XG5leHBvcnRzLkFERF9UQVJHRVQgPSBBRERfVEFSR0VUO1xudmFyIFJFTU9WRV9TT1VSQ0UgPSAnZG5kLWNvcmUvUkVNT1ZFX1NPVVJDRSc7XG5leHBvcnRzLlJFTU9WRV9TT1VSQ0UgPSBSRU1PVkVfU09VUkNFO1xudmFyIFJFTU9WRV9UQVJHRVQgPSAnZG5kLWNvcmUvUkVNT1ZFX1RBUkdFVCc7XG5cbmV4cG9ydHMuUkVNT1ZFX1RBUkdFVCA9IFJFTU9WRV9UQVJHRVQ7XG5cbmZ1bmN0aW9uIGFkZFNvdXJjZShzb3VyY2VJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFERF9TT1VSQ0UsXG4gICAgc291cmNlSWQ6IHNvdXJjZUlkXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZFRhcmdldCh0YXJnZXRJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFERF9UQVJHRVQsXG4gICAgdGFyZ2V0SWQ6IHRhcmdldElkXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNvdXJjZShzb3VyY2VJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFTU9WRV9TT1VSQ0UsXG4gICAgc291cmNlSWQ6IHNvdXJjZUlkXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldCh0YXJnZXRJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFTU9WRV9UQVJHRVQsXG4gICAgdGFyZ2V0SWQ6IHRhcmdldElkXG4gIH07XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL2FjdGlvbnMvcmVnaXN0cnkuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi9fYmFzZURpZmZlcmVuY2UnKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBleGNsdWRpbmcgYWxsIGdpdmVuIHZhbHVlcyB1c2luZ1xuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsuLi4qfSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGV4Y2x1ZGUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXMuXG4gKiBAc2VlIF8uZGlmZmVyZW5jZSwgXy54b3JcbiAqIEBleGFtcGxlXG4gKlxuICogXy53aXRob3V0KFsxLCAyLCAxLCAzXSwgMSwgMik7XG4gKiAvLyA9PiBbM11cbiAqL1xudmFyIHdpdGhvdXQgPSByZXN0KGZ1bmN0aW9uKGFycmF5LCB2YWx1ZXMpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KGFycmF5KVxuICAgID8gYmFzZURpZmZlcmVuY2UoYXJyYXksIHZhbHVlcylcbiAgICA6IFtdO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2l0aG91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL3dpdGhvdXQuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIG1ldGhvZHMgbGlrZSBgXy5kaWZmZXJlbmNlYCB3aXRob3V0IHN1cHBvcnRcbiAqIGZvciBleGNsdWRpbmcgbXVsdGlwbGUgYXJyYXlzIG9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gZXhjbHVkZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGZpbHRlcmVkIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gYmFzZURpZmZlcmVuY2UoYXJyYXksIHZhbHVlcywgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHZhbHVlc0xlbmd0aCA9IHZhbHVlcy5sZW5ndGg7XG5cbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmIChpdGVyYXRlZSkge1xuICAgIHZhbHVlcyA9IGFycmF5TWFwKHZhbHVlcywgYmFzZVVuYXJ5KGl0ZXJhdGVlKSk7XG4gIH1cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gIH1cbiAgZWxzZSBpZiAodmFsdWVzLmxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIHZhbHVlcyA9IG5ldyBTZXRDYWNoZSh2YWx1ZXMpO1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHZhbHVlc0luZGV4ID0gdmFsdWVzTGVuZ3RoO1xuICAgICAgd2hpbGUgKHZhbHVlc0luZGV4LS0pIHtcbiAgICAgICAgaWYgKHZhbHVlc1t2YWx1ZXNJbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHZhbHVlcywgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZURpZmZlcmVuY2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYmFzZURpZmZlcmVuY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA/IHZhbHVlcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX1NldENhY2hlLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX01hcENhY2hlLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19IYXNoLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2hhc2hDbGVhci5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNOYXRpdmUgPSByZXF1aXJlKCcuL2lzTmF0aXZlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgcmV0dXJuIGlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19nZXROYXRpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0hvc3RPYmplY3QgPSByZXF1aXJlKCcuL19pc0hvc3RPYmplY3QnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc05hdGl2ZShBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc05hdGl2ZShfKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTmF0aXZlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvaXNOYXRpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOCB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgd2VhayBtYXAgY29uc3RydWN0b3JzLFxuICAvLyBhbmQgUGhhbnRvbUpTIDEuOSB3aGljaCByZXR1cm5zICdmdW5jdGlvbicgZm9yIGBOb2RlTGlzdGAgaW5zdGFuY2VzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzRnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0hvc3RPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9faXNIb3N0T2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL190b1NvdXJjZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2hhc2hEZWxldGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19oYXNoR2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyBkYXRhW2tleV0gIT09IHVuZGVmaW5lZCA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2hhc2hIYXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2hhc2hTZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fTGlzdENhY2hlLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICogdmFyIG90aGVyID0geyAndXNlcic6ICdmcmVkJyB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9lcS5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX01hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY2hlY2tHbG9iYWwgPSByZXF1aXJlKCcuL19jaGVja0dsb2JhbCcpO1xuXG4vKiogVXNlZCB0byBkZXRlcm1pbmUgaWYgdmFsdWVzIGFyZSBvZiB0aGUgbGFuZ3VhZ2UgdHlwZSBgT2JqZWN0YC4gKi9cbnZhciBvYmplY3RUeXBlcyA9IHtcbiAgJ2Z1bmN0aW9uJzogdHJ1ZSxcbiAgJ29iamVjdCc6IHRydWVcbn07XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSAob2JqZWN0VHlwZXNbdHlwZW9mIGV4cG9ydHNdICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUpXG4gID8gZXhwb3J0c1xuICA6IHVuZGVmaW5lZDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSAob2JqZWN0VHlwZXNbdHlwZW9mIG1vZHVsZV0gJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUpXG4gID8gbW9kdWxlXG4gIDogdW5kZWZpbmVkO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSBjaGVja0dsb2JhbChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlICYmIHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IGNoZWNrR2xvYmFsKG9iamVjdFR5cGVzW3R5cGVvZiBzZWxmXSAmJiBzZWxmKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGB3aW5kb3dgLiAqL1xudmFyIGZyZWVXaW5kb3cgPSBjaGVja0dsb2JhbChvYmplY3RUeXBlc1t0eXBlb2Ygd2luZG93XSAmJiB3aW5kb3cpO1xuXG4vKiogRGV0ZWN0IGB0aGlzYCBhcyB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciB0aGlzR2xvYmFsID0gY2hlY2tHbG9iYWwob2JqZWN0VHlwZXNbdHlwZW9mIHRoaXNdICYmIHRoaXMpO1xuXG4vKipcbiAqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuXG4gKlxuICogVGhlIGB0aGlzYCB2YWx1ZSBpcyB1c2VkIGlmIGl0J3MgdGhlIGdsb2JhbCBvYmplY3QgdG8gYXZvaWQgR3JlYXNlbW9ua2V5J3NcbiAqIHJlc3RyaWN0ZWQgYHdpbmRvd2Agb2JqZWN0LCBvdGhlcndpc2UgdGhlIGB3aW5kb3dgIG9iamVjdCBpcyB1c2VkLlxuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHxcbiAgKChmcmVlV2luZG93ICE9PSAodGhpc0dsb2JhbCAmJiB0aGlzR2xvYmFsLndpbmRvdykpICYmIGZyZWVXaW5kb3cpIHx8XG4gICAgZnJlZVNlbGYgfHwgdGhpc0dsb2JhbCB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fcm9vdC5qc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBnbG9iYWwgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtudWxsfE9iamVjdH0gUmV0dXJucyBgdmFsdWVgIGlmIGl0J3MgYSBnbG9iYWwgb2JqZWN0LCBlbHNlIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gY2hlY2tHbG9iYWwodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5PYmplY3QgPT09IE9iamVjdCkgPyB2YWx1ZSA6IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tHbG9iYWw7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fY2hlY2tHbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2dldE1hcERhdGEuanNcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19pc0tleWFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIGdldE1hcERhdGEodGhpcywga2V5KS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzXG4gKiogbW9kdWxlIGlkID0gNjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgcmV0dXJuICEhYXJyYXkubGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGluZGV4T2ZOYU4gPSByZXF1aXJlKCcuL19pbmRleE9mTmFOJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgaWYgKHZhbHVlICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBpbmRleE9mTmFOKGFycmF5LCBmcm9tSW5kZXgpO1xuICB9XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYmFzZUluZGV4T2YuanNcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBgTmFOYCBpcyBmb3VuZCBpbiBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIGBOYU5gLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGluZGV4T2ZOYU4oYXJyYXksIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAwIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgdmFyIG90aGVyID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChvdGhlciAhPT0gb3RoZXIpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluZGV4T2ZOYU47XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9faW5kZXhPZk5hTi5qc1xuICoqIG1vZHVsZSBpZCA9IDcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYXJyYXlNYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIHdyYXBwZXIgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBhIGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fY2FjaGVIYXMuanNcbiAqKiBtb2R1bGUgaWQgPSA3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZU9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRMZW5ndGggPSByZXF1aXJlKCcuL19nZXRMZW5ndGgnKSxcbiAgICBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKGdldExlbmd0aCh2YWx1ZSkpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4gKiogbW9kdWxlIGlkID0gNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHknKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBcImxlbmd0aFwiIHByb3BlcnR5IHZhbHVlIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXZvaWQgYVxuICogW0pJVCBidWddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI3OTIpIHRoYXQgYWZmZWN0c1xuICogU2FmYXJpIG9uIGF0IGxlYXN0IGlPUyA4LjEtOC4zIEFSTTY0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgXCJsZW5ndGhcIiB2YWx1ZS5cbiAqL1xudmFyIGdldExlbmd0aCA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TGVuZ3RoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2dldExlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19iYXNlUHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzTGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlXG4gKiBjcmVhdGVkIGZ1bmN0aW9uIGFuZCBhcmd1bWVudHMgZnJvbSBgc3RhcnRgIGFuZCBiZXlvbmQgcHJvdmlkZWQgYXNcbiAqIGFuIGFycmF5LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBiYXNlZCBvbiB0aGVcbiAqIFtyZXN0IHBhcmFtZXRlcl0oaHR0cHM6Ly9tZG4uaW8vcmVzdF9wYXJhbWV0ZXJzKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHNheSA9IF8ucmVzdChmdW5jdGlvbih3aGF0LCBuYW1lcykge1xuICogICByZXR1cm4gd2hhdCArICcgJyArIF8uaW5pdGlhbChuYW1lcykuam9pbignLCAnKSArXG4gKiAgICAgKF8uc2l6ZShuYW1lcykgPiAxID8gJywgJiAnIDogJycpICsgXy5sYXN0KG5hbWVzKTtcbiAqIH0pO1xuICpcbiAqIHNheSgnaGVsbG8nLCAnZnJlZCcsICdiYXJuZXknLCAncGViYmxlcycpO1xuICogLy8gPT4gJ2hlbGxvIGZyZWQsIGJhcm5leSwgJiBwZWJibGVzJ1xuICovXG5mdW5jdGlvbiByZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHRvSW50ZWdlcihzdGFydCksIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIHN3aXRjaCAoc3RhcnQpIHtcbiAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcnJheSk7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJnc1swXSwgYXJyYXkpO1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFycmF5KTtcbiAgICB9XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgaW5kZXggPSAtMTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSBhcnJheTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvcmVzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHZhciBsZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYXBwbHkuanNcbiAqKiBtb2R1bGUgaWQgPSA4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvRmluaXRlID0gcmVxdWlyZSgnLi90b0Zpbml0ZScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvSW50ZWdlcmBdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2ludGVnZXIpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIGludGVnZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9JbnRlZ2VyKDMuMik7XG4gKiAvLyA9PiAzXG4gKlxuICogXy50b0ludGVnZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiAwXG4gKlxuICogXy50b0ludGVnZXIoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvSW50ZWdlcignMy4yJyk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIHRvSW50ZWdlcih2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdG9GaW5pdGUodmFsdWUpLFxuICAgICAgcmVtYWluZGVyID0gcmVzdWx0ICUgMTtcblxuICByZXR1cm4gcmVzdWx0ID09PSByZXN1bHQgPyAocmVtYWluZGVyID8gcmVzdWx0IC0gcmVtYWluZGVyIDogcmVzdWx0KSA6IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9JbnRlZ2VyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvdG9JbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMCxcbiAgICBNQVhfSU5URUdFUiA9IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBmaW5pdGUgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9GaW5pdGUoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9GaW5pdGUoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvRmluaXRlKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0Zpbml0ZSgnMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9GaW5pdGUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogMDtcbiAgfVxuICB2YWx1ZSA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKHZhbHVlID09PSBJTkZJTklUWSB8fCB2YWx1ZSA9PT0gLUlORklOSVRZKSB7XG4gICAgdmFyIHNpZ24gPSAodmFsdWUgPCAwID8gLTEgOiAxKTtcbiAgICByZXR1cm4gc2lnbiAqIE1BWF9JTlRFR0VSO1xuICB9XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyB2YWx1ZSA6IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9GaW5pdGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC90b0Zpbml0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDg0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gaXNGdW5jdGlvbih2YWx1ZS52YWx1ZU9mKSA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC90b051bWJlci5qc1xuICoqIG1vZHVsZSBpZCA9IDg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvaXNTeW1ib2wuanNcbiAqKiBtb2R1bGUgaWQgPSA4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gcmVmQ291bnQ7XG5cbnZhciBfYWN0aW9uc1JlZ2lzdHJ5ID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9yZWdpc3RyeScpO1xuXG5mdW5jdGlvbiByZWZDb3VudChzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSBzdGF0ZSA9IDA7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgX2FjdGlvbnNSZWdpc3RyeS5BRERfU09VUkNFOlxuICAgIGNhc2UgX2FjdGlvbnNSZWdpc3RyeS5BRERfVEFSR0VUOlxuICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuUkVNT1ZFX1NPVVJDRTpcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuUkVNT1ZFX1RBUkdFVDpcbiAgICAgIHJldHVybiBzdGF0ZSAtIDE7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvcmVmQ291bnQuanNcbiAqKiBtb2R1bGUgaWQgPSA4N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZGlydHlIYW5kbGVySWRzO1xuZXhwb3J0cy5hcmVEaXJ0eSA9IGFyZURpcnR5O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfbG9kYXNoWG9yID0gcmVxdWlyZSgnbG9kYXNoL3hvcicpO1xuXG52YXIgX2xvZGFzaFhvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hYb3IpO1xuXG52YXIgX2xvZGFzaEludGVyc2VjdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pbnRlcnNlY3Rpb24nKTtcblxudmFyIF9sb2Rhc2hJbnRlcnNlY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSW50ZXJzZWN0aW9uKTtcblxudmFyIF9hY3Rpb25zRHJhZ0Ryb3AgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2RyYWdEcm9wJyk7XG5cbnZhciBfYWN0aW9uc1JlZ2lzdHJ5ID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9yZWdpc3RyeScpO1xuXG52YXIgTk9ORSA9IFtdO1xudmFyIEFMTCA9IFtdO1xuXG5mdW5jdGlvbiBkaXJ0eUhhbmRsZXJJZHMoc3RhdGUsIGFjdGlvbiwgZHJhZ09wZXJhdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgc3RhdGUgPSBOT05FO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuSE9WRVI6XG4gICAgICBicmVhaztcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuQUREX1NPVVJDRTpcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuQUREX1RBUkdFVDpcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuUkVNT1ZFX1RBUkdFVDpcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuUkVNT1ZFX1NPVVJDRTpcbiAgICAgIHJldHVybiBOT05FO1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5CRUdJTl9EUkFHOlxuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5QVUJMSVNIX0RSQUdfU09VUkNFOlxuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5FTkRfRFJBRzpcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuRFJPUDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEFMTDtcbiAgfVxuXG4gIHZhciB0YXJnZXRJZHMgPSBhY3Rpb24udGFyZ2V0SWRzO1xuICB2YXIgcHJldlRhcmdldElkcyA9IGRyYWdPcGVyYXRpb24udGFyZ2V0SWRzO1xuXG4gIHZhciBkaXJ0eUhhbmRsZXJJZHMgPSBfbG9kYXNoWG9yMlsnZGVmYXVsdCddKHRhcmdldElkcywgcHJldlRhcmdldElkcyk7XG5cbiAgdmFyIGRpZENoYW5nZSA9IGZhbHNlO1xuICBpZiAoZGlydHlIYW5kbGVySWRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0SWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGFyZ2V0SWRzW2ldICE9PSBwcmV2VGFyZ2V0SWRzW2ldKSB7XG4gICAgICAgIGRpZENoYW5nZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkaWRDaGFuZ2UgPSB0cnVlO1xuICB9XG5cbiAgaWYgKCFkaWRDaGFuZ2UpIHtcbiAgICByZXR1cm4gTk9ORTtcbiAgfVxuXG4gIHZhciBwcmV2SW5uZXJtb3N0VGFyZ2V0SWQgPSBwcmV2VGFyZ2V0SWRzW3ByZXZUYXJnZXRJZHMubGVuZ3RoIC0gMV07XG4gIHZhciBpbm5lcm1vc3RUYXJnZXRJZCA9IHRhcmdldElkc1t0YXJnZXRJZHMubGVuZ3RoIC0gMV07XG5cbiAgaWYgKHByZXZJbm5lcm1vc3RUYXJnZXRJZCAhPT0gaW5uZXJtb3N0VGFyZ2V0SWQpIHtcbiAgICBpZiAocHJldklubmVybW9zdFRhcmdldElkKSB7XG4gICAgICBkaXJ0eUhhbmRsZXJJZHMucHVzaChwcmV2SW5uZXJtb3N0VGFyZ2V0SWQpO1xuICAgIH1cbiAgICBpZiAoaW5uZXJtb3N0VGFyZ2V0SWQpIHtcbiAgICAgIGRpcnR5SGFuZGxlcklkcy5wdXNoKGlubmVybW9zdFRhcmdldElkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlydHlIYW5kbGVySWRzO1xufVxuXG5mdW5jdGlvbiBhcmVEaXJ0eShzdGF0ZSwgaGFuZGxlcklkcykge1xuICBpZiAoc3RhdGUgPT09IE5PTkUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc3RhdGUgPT09IEFMTCB8fCB0eXBlb2YgaGFuZGxlcklkcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfbG9kYXNoSW50ZXJzZWN0aW9uMlsnZGVmYXVsdCddKGhhbmRsZXJJZHMsIHN0YXRlKS5sZW5ndGggPiAwO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kaXJ0eUhhbmRsZXJJZHMuanNcbiAqKiBtb2R1bGUgaWQgPSA4OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBiYXNlWG9yID0gcmVxdWlyZSgnLi9fYmFzZVhvcicpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHVuaXF1ZSB2YWx1ZXMgdGhhdCBpcyB0aGVcbiAqIFtzeW1tZXRyaWMgZGlmZmVyZW5jZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3ltbWV0cmljX2RpZmZlcmVuY2UpXG4gKiBvZiB0aGUgZ2l2ZW4gYXJyYXlzLiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlclxuICogdGhleSBvY2N1ciBpbiB0aGUgYXJyYXlzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzLlxuICogQHNlZSBfLmRpZmZlcmVuY2UsIF8ud2l0aG91dFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnhvcihbMiwgMV0sIFs0LCAyXSk7XG4gKiAvLyA9PiBbMSwgNF1cbiAqL1xudmFyIHhvciA9IHJlc3QoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHJldHVybiBiYXNlWG9yKGFycmF5RmlsdGVyKGFycmF5cywgaXNBcnJheUxpa2VPYmplY3QpKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHhvcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL3hvci5qc1xuICoqIG1vZHVsZSBpZCA9IDg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19hcnJheUZpbHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDkwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgYmFzZURpZmZlcmVuY2UgPSByZXF1aXJlKCcuL19iYXNlRGlmZmVyZW5jZScpLFxuICAgIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGxpa2UgYF8ueG9yYCwgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcywgdGhhdCBhY2NlcHRzIGFuIGFycmF5IG9mIGFycmF5cyB0byBpbnNwZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheXMgVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBiYXNlWG9yKGFycmF5cywgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheXMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHJlc3VsdFxuICAgICAgPyBhcnJheVB1c2goXG4gICAgICAgICAgYmFzZURpZmZlcmVuY2UocmVzdWx0LCBhcnJheXNbaW5kZXhdLCBpdGVyYXRlZSwgY29tcGFyYXRvciksXG4gICAgICAgICAgYmFzZURpZmZlcmVuY2UoYXJyYXlzW2luZGV4XSwgcmVzdWx0LCBpdGVyYXRlZSwgY29tcGFyYXRvcilcbiAgICAgICAgKVxuICAgICAgOiBhcnJheXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpID8gYmFzZVVuaXEocmVzdWx0LCBpdGVyYXRlZSwgY29tcGFyYXRvcikgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlWG9yO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Jhc2VYb3IuanNcbiAqKiBtb2R1bGUgaWQgPSA5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19hcnJheVB1c2guanNcbiAqKiBtb2R1bGUgaWQgPSA5MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXG4gICAgY3JlYXRlU2V0ID0gcmVxdWlyZSgnLi9fY3JlYXRlU2V0JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBzZWVuID0gcmVzdWx0O1xuXG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICB9XG4gIGVsc2UgaWYgKGxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgdmFyIHNldCA9IGl0ZXJhdGVlID8gbnVsbCA6IGNyZWF0ZVNldChhcnJheSk7XG4gICAgaWYgKHNldCkge1xuICAgICAgcmV0dXJuIHNldFRvQXJyYXkoc2V0KTtcbiAgICB9XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIHNlZW4gPSBuZXcgU2V0Q2FjaGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcbiAgICAgICAgaWYgKHNlZW5bc2VlbkluZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyhzZWVuLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19iYXNlVW5pcS5qc1xuICoqIG1vZHVsZSBpZCA9IDkzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgbm9vcCA9IHJlcXVpcmUoJy4vbm9vcCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBgdmFsdWVzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYWRkIHRvIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgc2V0LlxuICovXG52YXIgY3JlYXRlU2V0ID0gIShTZXQgJiYgKDEgLyBzZXRUb0FycmF5KG5ldyBTZXQoWywtMF0pKVsxXSkgPT0gSU5GSU5JVFkpID8gbm9vcCA6IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFNldCh2YWx1ZXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fY3JlYXRlU2V0LmpzXG4gKiogbW9kdWxlIGlkID0gOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fU2V0LmpzXG4gKiogbW9kdWxlIGlkID0gOTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQSBuby1vcGVyYXRpb24gZnVuY3Rpb24gdGhhdCByZXR1cm5zIGB1bmRlZmluZWRgIHJlZ2FyZGxlc3Mgb2YgdGhlXG4gKiBhcmd1bWVudHMgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiBfLm5vb3Aob2JqZWN0KSA9PT0gdW5kZWZpbmVkO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vb3A7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9ub29wLmpzXG4gKiogbW9kdWxlIGlkID0gOTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19zZXRUb0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gOTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoJy4vX2Jhc2VJbnRlcnNlY3Rpb24nKSxcbiAgICBjYXN0QXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9fY2FzdEFycmF5TGlrZU9iamVjdCcpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHVuaXF1ZSB2YWx1ZXMgdGhhdCBhcmUgaW5jbHVkZWQgaW4gYWxsIGdpdmVuIGFycmF5c1xuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXMgZGV0ZXJtaW5lZCBieSB0aGVcbiAqIG9yZGVyIHRoZXkgb2NjdXIgaW4gdGhlIGZpcnN0IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgaW50ZXJzZWN0aW5nIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pbnRlcnNlY3Rpb24oWzIsIDFdLCBbNCwgMl0sIFsxLCAyXSk7XG4gKiAvLyA9PiBbMl1cbiAqL1xudmFyIGludGVyc2VjdGlvbiA9IHJlc3QoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHZhciBtYXBwZWQgPSBhcnJheU1hcChhcnJheXMsIGNhc3RBcnJheUxpa2VPYmplY3QpO1xuICByZXR1cm4gKG1hcHBlZC5sZW5ndGggJiYgbWFwcGVkWzBdID09PSBhcnJheXNbMF0pXG4gICAgPyBiYXNlSW50ZXJzZWN0aW9uKG1hcHBlZClcbiAgICA6IFtdO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gaW50ZXJzZWN0aW9uO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvaW50ZXJzZWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gOThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIG1ldGhvZHMgbGlrZSBgXy5pbnRlcnNlY3Rpb25gLCB3aXRob3V0IHN1cHBvcnRcbiAqIGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLCB0aGF0IGFjY2VwdHMgYW4gYXJyYXkgb2YgYXJyYXlzIHRvIGluc3BlY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5cyBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBzaGFyZWQgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBiYXNlSW50ZXJzZWN0aW9uKGFycmF5cywgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluY2x1ZGVzID0gY29tcGFyYXRvciA/IGFycmF5SW5jbHVkZXNXaXRoIDogYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5c1swXS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBhcnJheXMubGVuZ3RoLFxuICAgICAgb3RoSW5kZXggPSBvdGhMZW5ndGgsXG4gICAgICBjYWNoZXMgPSBBcnJheShvdGhMZW5ndGgpLFxuICAgICAgbWF4TGVuZ3RoID0gSW5maW5pdHksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAob3RoSW5kZXgtLSkge1xuICAgIHZhciBhcnJheSA9IGFycmF5c1tvdGhJbmRleF07XG4gICAgaWYgKG90aEluZGV4ICYmIGl0ZXJhdGVlKSB7XG4gICAgICBhcnJheSA9IGFycmF5TWFwKGFycmF5LCBiYXNlVW5hcnkoaXRlcmF0ZWUpKTtcbiAgICB9XG4gICAgbWF4TGVuZ3RoID0gbmF0aXZlTWluKGFycmF5Lmxlbmd0aCwgbWF4TGVuZ3RoKTtcbiAgICBjYWNoZXNbb3RoSW5kZXhdID0gIWNvbXBhcmF0b3IgJiYgKGl0ZXJhdGVlIHx8IChsZW5ndGggPj0gMTIwICYmIGFycmF5Lmxlbmd0aCA+PSAxMjApKVxuICAgICAgPyBuZXcgU2V0Q2FjaGUob3RoSW5kZXggJiYgYXJyYXkpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxuICBhcnJheSA9IGFycmF5c1swXTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHNlZW4gPSBjYWNoZXNbMF07XG5cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoICYmIHJlc3VsdC5sZW5ndGggPCBtYXhMZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmICghKHNlZW5cbiAgICAgICAgICA/IGNhY2hlSGFzKHNlZW4sIGNvbXB1dGVkKVxuICAgICAgICAgIDogaW5jbHVkZXMocmVzdWx0LCBjb21wdXRlZCwgY29tcGFyYXRvcilcbiAgICAgICAgKSkge1xuICAgICAgb3RoSW5kZXggPSBvdGhMZW5ndGg7XG4gICAgICB3aGlsZSAoLS1vdGhJbmRleCkge1xuICAgICAgICB2YXIgY2FjaGUgPSBjYWNoZXNbb3RoSW5kZXhdO1xuICAgICAgICBpZiAoIShjYWNoZVxuICAgICAgICAgICAgICA/IGNhY2hlSGFzKGNhY2hlLCBjb21wdXRlZClcbiAgICAgICAgICAgICAgOiBpbmNsdWRlcyhhcnJheXNbb3RoSW5kZXhdLCBjb21wdXRlZCwgY29tcGFyYXRvcikpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlZW4pIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW50ZXJzZWN0aW9uO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Jhc2VJbnRlcnNlY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA5OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYW4gZW1wdHkgYXJyYXkgaWYgaXQncyBub3QgYW4gYXJyYXkgbGlrZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fSBSZXR1cm5zIHRoZSBjYXN0IGFycmF5LWxpa2Ugb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjYXN0QXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fY2FzdEFycmF5TGlrZU9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHN0YXRlSWQ7XG5cbmZ1bmN0aW9uIHN0YXRlSWQoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG5cbiAgcmV0dXJuIHN0YXRlICsgMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvc3RhdGVJZC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3V0aWxzTWF0Y2hlc1R5cGUgPSByZXF1aXJlKCcuL3V0aWxzL21hdGNoZXNUeXBlJyk7XG5cbnZhciBfdXRpbHNNYXRjaGVzVHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc01hdGNoZXNUeXBlKTtcblxudmFyIF9sb2Rhc2hJc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKTtcblxudmFyIF9sb2Rhc2hJc0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzQXJyYXkpO1xuXG52YXIgX0hhbmRsZXJSZWdpc3RyeSA9IHJlcXVpcmUoJy4vSGFuZGxlclJlZ2lzdHJ5Jyk7XG5cbnZhciBfSGFuZGxlclJlZ2lzdHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hhbmRsZXJSZWdpc3RyeSk7XG5cbnZhciBfcmVkdWNlcnNEcmFnT2Zmc2V0ID0gcmVxdWlyZSgnLi9yZWR1Y2Vycy9kcmFnT2Zmc2V0Jyk7XG5cbnZhciBfcmVkdWNlcnNEaXJ0eUhhbmRsZXJJZHMgPSByZXF1aXJlKCcuL3JlZHVjZXJzL2RpcnR5SGFuZGxlcklkcycpO1xuXG52YXIgRHJhZ0Ryb3BNb25pdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRHJhZ0Ryb3BNb25pdG9yKHN0b3JlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdEcm9wTW9uaXRvcik7XG5cbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5yZWdpc3RyeSA9IG5ldyBfSGFuZGxlclJlZ2lzdHJ5MlsnZGVmYXVsdCddKHN0b3JlKTtcbiAgfVxuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuc3Vic2NyaWJlVG9TdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uIHN1YnNjcmliZVRvU3RhdGVDaGFuZ2UobGlzdGVuZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBoYW5kbGVySWRzID0gX3JlZi5oYW5kbGVySWRzO1xuXG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicsICdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgaGFuZGxlcklkcyA9PT0gJ3VuZGVmaW5lZCcgfHwgX2xvZGFzaElzQXJyYXkyWydkZWZhdWx0J10oaGFuZGxlcklkcyksICdoYW5kbGVySWRzLCB3aGVuIHNwZWNpZmllZCwgbXVzdCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzLicpO1xuXG4gICAgdmFyIHByZXZTdGF0ZUlkID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnN0YXRlSWQ7XG4gICAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICB2YXIgY3VycmVudFN0YXRlSWQgPSBzdGF0ZS5zdGF0ZUlkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGNhblNraXBMaXN0ZW5lciA9IGN1cnJlbnRTdGF0ZUlkID09PSBwcmV2U3RhdGVJZCB8fCBjdXJyZW50U3RhdGVJZCA9PT0gcHJldlN0YXRlSWQgKyAxICYmICFfcmVkdWNlcnNEaXJ0eUhhbmRsZXJJZHMuYXJlRGlydHkoc3RhdGUuZGlydHlIYW5kbGVySWRzLCBoYW5kbGVySWRzKTtcblxuICAgICAgICBpZiAoIWNhblNraXBMaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHByZXZTdGF0ZUlkID0gY3VycmVudFN0YXRlSWQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2UpO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuc3Vic2NyaWJlVG9PZmZzZXRDaGFuZ2UgPSBmdW5jdGlvbiBzdWJzY3JpYmVUb09mZnNldENoYW5nZShsaXN0ZW5lcikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicsICdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG5cbiAgICB2YXIgcHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0O1xuICAgIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICB2YXIgbmV4dFN0YXRlID0gX3RoaXMyLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldDtcbiAgICAgIGlmIChuZXh0U3RhdGUgPT09IHByZXZpb3VzU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcmV2aW91c1N0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc3Vic2NyaWJlKGhhbmRsZUNoYW5nZSk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5jYW5EcmFnU291cmNlID0gZnVuY3Rpb24gY2FuRHJhZ1NvdXJjZShzb3VyY2VJZCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZCk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShzb3VyY2UsICdFeHBlY3RlZCB0byBmaW5kIGEgdmFsaWQgc291cmNlLicpO1xuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZygpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZS5jYW5EcmFnKHRoaXMsIHNvdXJjZUlkKTtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmNhbkRyb3BPblRhcmdldCA9IGZ1bmN0aW9uIGNhbkRyb3BPblRhcmdldCh0YXJnZXRJZCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLnJlZ2lzdHJ5LmdldFRhcmdldCh0YXJnZXRJZCk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0YXJnZXQsICdFeHBlY3RlZCB0byBmaW5kIGEgdmFsaWQgdGFyZ2V0LicpO1xuXG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcoKSB8fCB0aGlzLmRpZERyb3AoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRUeXBlID0gdGhpcy5yZWdpc3RyeS5nZXRUYXJnZXRUeXBlKHRhcmdldElkKTtcbiAgICB2YXIgZHJhZ2dlZEl0ZW1UeXBlID0gdGhpcy5nZXRJdGVtVHlwZSgpO1xuICAgIHJldHVybiBfdXRpbHNNYXRjaGVzVHlwZTJbJ2RlZmF1bHQnXSh0YXJnZXRUeXBlLCBkcmFnZ2VkSXRlbVR5cGUpICYmIHRhcmdldC5jYW5Ecm9wKHRoaXMsIHRhcmdldElkKTtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbiBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0SXRlbVR5cGUoKSk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5pc0RyYWdnaW5nU291cmNlID0gZnVuY3Rpb24gaXNEcmFnZ2luZ1NvdXJjZShzb3VyY2VJZCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZCwgdHJ1ZSk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShzb3VyY2UsICdFeHBlY3RlZCB0byBmaW5kIGEgdmFsaWQgc291cmNlLicpO1xuXG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcoKSB8fCAhdGhpcy5pc1NvdXJjZVB1YmxpYygpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZVR5cGUgPSB0aGlzLnJlZ2lzdHJ5LmdldFNvdXJjZVR5cGUoc291cmNlSWQpO1xuICAgIHZhciBkcmFnZ2VkSXRlbVR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKCk7XG4gICAgaWYgKHNvdXJjZVR5cGUgIT09IGRyYWdnZWRJdGVtVHlwZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2UuaXNEcmFnZ2luZyh0aGlzLCBzb3VyY2VJZCk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5pc092ZXJUYXJnZXQgPSBmdW5jdGlvbiBpc092ZXJUYXJnZXQodGFyZ2V0SWQpIHtcbiAgICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBfcmVmMiRzaGFsbG93ID0gX3JlZjIuc2hhbGxvdztcbiAgICB2YXIgc2hhbGxvdyA9IF9yZWYyJHNoYWxsb3cgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZjIkc2hhbGxvdztcblxuICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0VHlwZSA9IHRoaXMucmVnaXN0cnkuZ2V0VGFyZ2V0VHlwZSh0YXJnZXRJZCk7XG4gICAgdmFyIGRyYWdnZWRJdGVtVHlwZSA9IHRoaXMuZ2V0SXRlbVR5cGUoKTtcbiAgICBpZiAoIV91dGlsc01hdGNoZXNUeXBlMlsnZGVmYXVsdCddKHRhcmdldFR5cGUsIGRyYWdnZWRJdGVtVHlwZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0SWRzID0gdGhpcy5nZXRUYXJnZXRJZHMoKTtcbiAgICBpZiAoIXRhcmdldElkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0YXJnZXRJZHMuaW5kZXhPZih0YXJnZXRJZCk7XG4gICAgaWYgKHNoYWxsb3cpIHtcbiAgICAgIHJldHVybiBpbmRleCA9PT0gdGFyZ2V0SWRzLmxlbmd0aCAtIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbmRleCA+IC0xO1xuICAgIH1cbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldEl0ZW1UeXBlID0gZnVuY3Rpb24gZ2V0SXRlbVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLml0ZW1UeXBlO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uIGdldEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLml0ZW07XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXRTb3VyY2VJZCA9IGZ1bmN0aW9uIGdldFNvdXJjZUlkKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5zb3VyY2VJZDtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldFRhcmdldElkcyA9IGZ1bmN0aW9uIGdldFRhcmdldElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24udGFyZ2V0SWRzO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0RHJvcFJlc3VsdCA9IGZ1bmN0aW9uIGdldERyb3BSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLmRyb3BSZXN1bHQ7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5kaWREcm9wID0gZnVuY3Rpb24gZGlkRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24uZGlkRHJvcDtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmlzU291cmNlUHVibGljID0gZnVuY3Rpb24gaXNTb3VyY2VQdWJsaWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLmlzU291cmNlUHVibGljO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0SW5pdGlhbENsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldEluaXRpYWxDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0LmluaXRpYWxDbGllbnRPZmZzZXQ7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQuaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldDtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldENsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldENsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQuY2xpZW50T2Zmc2V0O1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiBfcmVkdWNlcnNEcmFnT2Zmc2V0LmdldFNvdXJjZUNsaWVudE9mZnNldCh0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldCk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQgPSBmdW5jdGlvbiBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIF9yZWR1Y2Vyc0RyYWdPZmZzZXQuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0KTtcbiAgfTtcblxuICByZXR1cm4gRHJhZ0Ryb3BNb25pdG9yO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJhZ0Ryb3BNb25pdG9yO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL0RyYWdEcm9wTW9uaXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gJ3N5bWJvbCcgOiB0eXBlb2Ygb2JqOyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfbG9kYXNoSXNBcnJheSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0FycmF5Jyk7XG5cbnZhciBfbG9kYXNoSXNBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc0FycmF5KTtcblxudmFyIF91dGlsc0dldE5leHRVbmlxdWVJZCA9IHJlcXVpcmUoJy4vdXRpbHMvZ2V0TmV4dFVuaXF1ZUlkJyk7XG5cbnZhciBfdXRpbHNHZXROZXh0VW5pcXVlSWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNHZXROZXh0VW5pcXVlSWQpO1xuXG52YXIgX2FjdGlvbnNSZWdpc3RyeSA9IHJlcXVpcmUoJy4vYWN0aW9ucy9yZWdpc3RyeScpO1xuXG52YXIgX2FzYXAgPSByZXF1aXJlKCdhc2FwJyk7XG5cbnZhciBfYXNhcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc2FwKTtcblxudmFyIEhhbmRsZXJSb2xlcyA9IHtcbiAgU09VUkNFOiAnU09VUkNFJyxcbiAgVEFSR0VUOiAnVEFSR0VUJ1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVTb3VyY2VDb250cmFjdChzb3VyY2UpIHtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2Ygc291cmNlLmNhbkRyYWcgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBjYW5EcmFnIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHNvdXJjZS5iZWdpbkRyYWcgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBiZWdpbkRyYWcgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2Ygc291cmNlLmVuZERyYWcgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBlbmREcmFnIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGFyZ2V0Q29udHJhY3QodGFyZ2V0KSB7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHRhcmdldC5jYW5Ecm9wID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgY2FuRHJvcCB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiB0YXJnZXQuaG92ZXIgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBob3ZlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiB0YXJnZXQuZHJvcCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGJlZ2luRHJhZyB0byBiZSBhIGZ1bmN0aW9uLicpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVR5cGUodHlwZSwgYWxsb3dBcnJheSkge1xuICBpZiAoYWxsb3dBcnJheSAmJiBfbG9kYXNoSXNBcnJheTJbJ2RlZmF1bHQnXSh0eXBlKSkge1xuICAgIHR5cGUuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlVHlwZSh0LCBmYWxzZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgKHR5cGVvZiB0eXBlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0eXBlKSkgPT09ICdzeW1ib2wnLCBhbGxvd0FycmF5ID8gJ1R5cGUgY2FuIG9ubHkgYmUgYSBzdHJpbmcsIGEgc3ltYm9sLCBvciBhbiBhcnJheSBvZiBlaXRoZXIuJyA6ICdUeXBlIGNhbiBvbmx5IGJlIGEgc3RyaW5nIG9yIGEgc3ltYm9sLicpO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0SGFuZGxlcklkKHJvbGUpIHtcbiAgdmFyIGlkID0gX3V0aWxzR2V0TmV4dFVuaXF1ZUlkMlsnZGVmYXVsdCddKCkudG9TdHJpbmcoKTtcbiAgc3dpdGNoIChyb2xlKSB7XG4gICAgY2FzZSBIYW5kbGVyUm9sZXMuU09VUkNFOlxuICAgICAgcmV0dXJuICdTJyArIGlkO1xuICAgIGNhc2UgSGFuZGxlclJvbGVzLlRBUkdFVDpcbiAgICAgIHJldHVybiAnVCcgKyBpZDtcbiAgICBkZWZhdWx0OlxuICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ1Vua25vd24gcm9sZTogJyArIHJvbGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUm9sZUZyb21IYW5kbGVySWQoaGFuZGxlcklkKSB7XG4gIHN3aXRjaCAoaGFuZGxlcklkWzBdKSB7XG4gICAgY2FzZSAnUyc6XG4gICAgICByZXR1cm4gSGFuZGxlclJvbGVzLlNPVVJDRTtcbiAgICBjYXNlICdUJzpcbiAgICAgIHJldHVybiBIYW5kbGVyUm9sZXMuVEFSR0VUO1xuICAgIGRlZmF1bHQ6XG4gICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnQ2Fubm90IHBhcnNlIGhhbmRsZXIgSUQ6ICcgKyBoYW5kbGVySWQpO1xuICB9XG59XG5cbnZhciBIYW5kbGVyUmVnaXN0cnkgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIYW5kbGVyUmVnaXN0cnkoc3RvcmUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFuZGxlclJlZ2lzdHJ5KTtcblxuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcblxuICAgIHRoaXMudHlwZXMgPSB7fTtcbiAgICB0aGlzLmhhbmRsZXJzID0ge307XG5cbiAgICB0aGlzLnBpbm5lZFNvdXJjZUlkID0gbnVsbDtcbiAgICB0aGlzLnBpbm5lZFNvdXJjZSA9IG51bGw7XG4gIH1cblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmFkZFNvdXJjZSA9IGZ1bmN0aW9uIGFkZFNvdXJjZSh0eXBlLCBzb3VyY2UpIHtcbiAgICB2YWxpZGF0ZVR5cGUodHlwZSk7XG4gICAgdmFsaWRhdGVTb3VyY2VDb250cmFjdChzb3VyY2UpO1xuXG4gICAgdmFyIHNvdXJjZUlkID0gdGhpcy5hZGRIYW5kbGVyKEhhbmRsZXJSb2xlcy5TT1VSQ0UsIHR5cGUsIHNvdXJjZSk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChfYWN0aW9uc1JlZ2lzdHJ5LmFkZFNvdXJjZShzb3VyY2VJZCkpO1xuICAgIHJldHVybiBzb3VyY2VJZDtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmFkZFRhcmdldCA9IGZ1bmN0aW9uIGFkZFRhcmdldCh0eXBlLCB0YXJnZXQpIHtcbiAgICB2YWxpZGF0ZVR5cGUodHlwZSwgdHJ1ZSk7XG4gICAgdmFsaWRhdGVUYXJnZXRDb250cmFjdCh0YXJnZXQpO1xuXG4gICAgdmFyIHRhcmdldElkID0gdGhpcy5hZGRIYW5kbGVyKEhhbmRsZXJSb2xlcy5UQVJHRVQsIHR5cGUsIHRhcmdldCk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChfYWN0aW9uc1JlZ2lzdHJ5LmFkZFRhcmdldCh0YXJnZXRJZCkpO1xuICAgIHJldHVybiB0YXJnZXRJZDtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmFkZEhhbmRsZXIgPSBmdW5jdGlvbiBhZGRIYW5kbGVyKHJvbGUsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaWQgPSBnZXROZXh0SGFuZGxlcklkKHJvbGUpO1xuICAgIHRoaXMudHlwZXNbaWRdID0gdHlwZTtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IGhhbmRsZXI7XG5cbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5jb250YWluc0hhbmRsZXIgPSBmdW5jdGlvbiBjb250YWluc0hhbmRsZXIoaGFuZGxlcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5oYW5kbGVycykuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlcnNba2V5XSA9PT0gaGFuZGxlcjtcbiAgICB9KTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmdldFNvdXJjZSA9IGZ1bmN0aW9uIGdldFNvdXJjZShzb3VyY2VJZCwgaW5jbHVkZVBpbm5lZCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGhpcy5pc1NvdXJjZUlkKHNvdXJjZUlkKSwgJ0V4cGVjdGVkIGEgdmFsaWQgc291cmNlIElELicpO1xuXG4gICAgdmFyIGlzUGlubmVkID0gaW5jbHVkZVBpbm5lZCAmJiBzb3VyY2VJZCA9PT0gdGhpcy5waW5uZWRTb3VyY2VJZDtcbiAgICB2YXIgc291cmNlID0gaXNQaW5uZWQgPyB0aGlzLnBpbm5lZFNvdXJjZSA6IHRoaXMuaGFuZGxlcnNbc291cmNlSWRdO1xuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXRJZCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGhpcy5pc1RhcmdldElkKHRhcmdldElkKSwgJ0V4cGVjdGVkIGEgdmFsaWQgdGFyZ2V0IElELicpO1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzW3RhcmdldElkXTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmdldFNvdXJjZVR5cGUgPSBmdW5jdGlvbiBnZXRTb3VyY2VUeXBlKHNvdXJjZUlkKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0aGlzLmlzU291cmNlSWQoc291cmNlSWQpLCAnRXhwZWN0ZWQgYSB2YWxpZCBzb3VyY2UgSUQuJyk7XG4gICAgcmV0dXJuIHRoaXMudHlwZXNbc291cmNlSWRdO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUuZ2V0VGFyZ2V0VHlwZSA9IGZ1bmN0aW9uIGdldFRhcmdldFR5cGUodGFyZ2V0SWQpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRoaXMuaXNUYXJnZXRJZCh0YXJnZXRJZCksICdFeHBlY3RlZCBhIHZhbGlkIHRhcmdldCBJRC4nKTtcbiAgICByZXR1cm4gdGhpcy50eXBlc1t0YXJnZXRJZF07XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5pc1NvdXJjZUlkID0gZnVuY3Rpb24gaXNTb3VyY2VJZChoYW5kbGVySWQpIHtcbiAgICB2YXIgcm9sZSA9IHBhcnNlUm9sZUZyb21IYW5kbGVySWQoaGFuZGxlcklkKTtcbiAgICByZXR1cm4gcm9sZSA9PT0gSGFuZGxlclJvbGVzLlNPVVJDRTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmlzVGFyZ2V0SWQgPSBmdW5jdGlvbiBpc1RhcmdldElkKGhhbmRsZXJJZCkge1xuICAgIHZhciByb2xlID0gcGFyc2VSb2xlRnJvbUhhbmRsZXJJZChoYW5kbGVySWQpO1xuICAgIHJldHVybiByb2xlID09PSBIYW5kbGVyUm9sZXMuVEFSR0VUO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUucmVtb3ZlU291cmNlID0gZnVuY3Rpb24gcmVtb3ZlU291cmNlKHNvdXJjZUlkKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRoaXMuZ2V0U291cmNlKHNvdXJjZUlkKSwgJ0V4cGVjdGVkIGFuIGV4aXN0aW5nIHNvdXJjZS4nKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKF9hY3Rpb25zUmVnaXN0cnkucmVtb3ZlU291cmNlKHNvdXJjZUlkKSk7XG5cbiAgICBfYXNhcDJbJ2RlZmF1bHQnXShmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGUgX3RoaXMyLmhhbmRsZXJzW3NvdXJjZUlkXTtcbiAgICAgIGRlbGV0ZSBfdGhpczIudHlwZXNbc291cmNlSWRdO1xuICAgIH0pO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUucmVtb3ZlVGFyZ2V0ID0gZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0KHRhcmdldElkKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRoaXMuZ2V0VGFyZ2V0KHRhcmdldElkKSwgJ0V4cGVjdGVkIGFuIGV4aXN0aW5nIHRhcmdldC4nKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKF9hY3Rpb25zUmVnaXN0cnkucmVtb3ZlVGFyZ2V0KHRhcmdldElkKSk7XG5cbiAgICBfYXNhcDJbJ2RlZmF1bHQnXShmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGUgX3RoaXMzLmhhbmRsZXJzW3RhcmdldElkXTtcbiAgICAgIGRlbGV0ZSBfdGhpczMudHlwZXNbdGFyZ2V0SWRdO1xuICAgIH0pO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUucGluU291cmNlID0gZnVuY3Rpb24gcGluU291cmNlKHNvdXJjZUlkKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuZ2V0U291cmNlKHNvdXJjZUlkKTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHNvdXJjZSwgJ0V4cGVjdGVkIGFuIGV4aXN0aW5nIHNvdXJjZS4nKTtcblxuICAgIHRoaXMucGlubmVkU291cmNlSWQgPSBzb3VyY2VJZDtcbiAgICB0aGlzLnBpbm5lZFNvdXJjZSA9IHNvdXJjZTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLnVucGluU291cmNlID0gZnVuY3Rpb24gdW5waW5Tb3VyY2UoKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0aGlzLnBpbm5lZFNvdXJjZSwgJ05vIHNvdXJjZSBpcyBwaW5uZWQgYXQgdGhlIHRpbWUuJyk7XG5cbiAgICB0aGlzLnBpbm5lZFNvdXJjZUlkID0gbnVsbDtcbiAgICB0aGlzLnBpbm5lZFNvdXJjZSA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIEhhbmRsZXJSZWdpc3RyeTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhhbmRsZXJSZWdpc3RyeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9IYW5kbGVyUmVnaXN0cnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXROZXh0VW5pcXVlSWQ7XG52YXIgbmV4dFVuaXF1ZUlkID0gMDtcblxuZnVuY3Rpb24gZ2V0TmV4dFVuaXF1ZUlkKCkge1xuICByZXR1cm4gbmV4dFVuaXF1ZUlkKys7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL3V0aWxzL2dldE5leHRVbmlxdWVJZC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHJhd0FzYXAgcHJvdmlkZXMgZXZlcnl0aGluZyB3ZSBuZWVkIGV4Y2VwdCBleGNlcHRpb24gbWFuYWdlbWVudC5cbnZhciByYXdBc2FwID0gcmVxdWlyZShcIi4vcmF3XCIpO1xuLy8gUmF3VGFza3MgYXJlIHJlY3ljbGVkIHRvIHJlZHVjZSBHQyBjaHVybi5cbnZhciBmcmVlVGFza3MgPSBbXTtcbi8vIFdlIHF1ZXVlIGVycm9ycyB0byBlbnN1cmUgdGhleSBhcmUgdGhyb3duIGluIHJpZ2h0IG9yZGVyIChGSUZPKS5cbi8vIEFycmF5LWFzLXF1ZXVlIGlzIGdvb2QgZW5vdWdoIGhlcmUsIHNpbmNlIHdlIGFyZSBqdXN0IGRlYWxpbmcgd2l0aCBleGNlcHRpb25zLlxudmFyIHBlbmRpbmdFcnJvcnMgPSBbXTtcbnZhciByZXF1ZXN0RXJyb3JUaHJvdyA9IHJhd0FzYXAubWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKHRocm93Rmlyc3RFcnJvcik7XG5cbmZ1bmN0aW9uIHRocm93Rmlyc3RFcnJvcigpIHtcbiAgICBpZiAocGVuZGluZ0Vycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgcGVuZGluZ0Vycm9ycy5zaGlmdCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxscyBhIHRhc2sgYXMgc29vbiBhcyBwb3NzaWJsZSBhZnRlciByZXR1cm5pbmcsIGluIGl0cyBvd24gZXZlbnQsIHdpdGggcHJpb3JpdHlcbiAqIG92ZXIgb3RoZXIgZXZlbnRzIGxpa2UgYW5pbWF0aW9uLCByZWZsb3csIGFuZCByZXBhaW50LiBBbiBlcnJvciB0aHJvd24gZnJvbSBhblxuICogZXZlbnQgd2lsbCBub3QgaW50ZXJydXB0LCBub3IgZXZlbiBzdWJzdGFudGlhbGx5IHNsb3cgZG93biB0aGUgcHJvY2Vzc2luZyBvZlxuICogb3RoZXIgZXZlbnRzLCBidXQgd2lsbCBiZSByYXRoZXIgcG9zdHBvbmVkIHRvIGEgbG93ZXIgcHJpb3JpdHkgZXZlbnQuXG4gKiBAcGFyYW0ge3tjYWxsfX0gdGFzayBBIGNhbGxhYmxlIG9iamVjdCwgdHlwaWNhbGx5IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogYXJndW1lbnRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFzYXA7XG5mdW5jdGlvbiBhc2FwKHRhc2spIHtcbiAgICB2YXIgcmF3VGFzaztcbiAgICBpZiAoZnJlZVRhc2tzLmxlbmd0aCkge1xuICAgICAgICByYXdUYXNrID0gZnJlZVRhc2tzLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJhd1Rhc2sgPSBuZXcgUmF3VGFzaygpO1xuICAgIH1cbiAgICByYXdUYXNrLnRhc2sgPSB0YXNrO1xuICAgIHJhd0FzYXAocmF3VGFzayk7XG59XG5cbi8vIFdlIHdyYXAgdGFza3Mgd2l0aCByZWN5Y2xhYmxlIHRhc2sgb2JqZWN0cy4gIEEgdGFzayBvYmplY3QgaW1wbGVtZW50c1xuLy8gYGNhbGxgLCBqdXN0IGxpa2UgYSBmdW5jdGlvbi5cbmZ1bmN0aW9uIFJhd1Rhc2soKSB7XG4gICAgdGhpcy50YXNrID0gbnVsbDtcbn1cblxuLy8gVGhlIHNvbGUgcHVycG9zZSBvZiB3cmFwcGluZyB0aGUgdGFzayBpcyB0byBjYXRjaCB0aGUgZXhjZXB0aW9uIGFuZCByZWN5Y2xlXG4vLyB0aGUgdGFzayBvYmplY3QgYWZ0ZXIgaXRzIHNpbmdsZSB1c2UuXG5SYXdUYXNrLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHRoaXMudGFzay5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGFzYXAub25lcnJvcikge1xuICAgICAgICAgICAgLy8gVGhpcyBob29rIGV4aXN0cyBwdXJlbHkgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gICAgICAgICAgICAvLyBJdHMgbmFtZSB3aWxsIGJlIHBlcmlvZGljYWxseSByYW5kb21pemVkIHRvIGJyZWFrIGFueSBjb2RlIHRoYXRcbiAgICAgICAgICAgIC8vIGRlcGVuZHMgb24gaXRzIGV4aXN0ZW5jZS5cbiAgICAgICAgICAgIGFzYXAub25lcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJbiBhIHdlYiBicm93c2VyLCBleGNlcHRpb25zIGFyZSBub3QgZmF0YWwuIEhvd2V2ZXIsIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzbG93aW5nIGRvd24gdGhlIHF1ZXVlIG9mIHBlbmRpbmcgdGFza3MsIHdlIHJldGhyb3cgdGhlIGVycm9yIGluIGFcbiAgICAgICAgICAgIC8vIGxvd2VyIHByaW9yaXR5IHR1cm4uXG4gICAgICAgICAgICBwZW5kaW5nRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgcmVxdWVzdEVycm9yVGhyb3coKTtcbiAgICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMudGFzayA9IG51bGw7XG4gICAgICAgIGZyZWVUYXNrc1tmcmVlVGFza3MubGVuZ3RoXSA9IHRoaXM7XG4gICAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FzYXAvYnJvd3Nlci1hc2FwLmpzXG4gKiogbW9kdWxlIGlkID0gMTA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gVXNlIHRoZSBmYXN0ZXN0IG1lYW5zIHBvc3NpYmxlIHRvIGV4ZWN1dGUgYSB0YXNrIGluIGl0cyBvd24gdHVybiwgd2l0aFxuLy8gcHJpb3JpdHkgb3ZlciBvdGhlciBldmVudHMgaW5jbHVkaW5nIElPLCBhbmltYXRpb24sIHJlZmxvdywgYW5kIHJlZHJhd1xuLy8gZXZlbnRzIGluIGJyb3dzZXJzLlxuLy9cbi8vIEFuIGV4Y2VwdGlvbiB0aHJvd24gYnkgYSB0YXNrIHdpbGwgcGVybWFuZW50bHkgaW50ZXJydXB0IHRoZSBwcm9jZXNzaW5nIG9mXG4vLyBzdWJzZXF1ZW50IHRhc2tzLiBUaGUgaGlnaGVyIGxldmVsIGBhc2FwYCBmdW5jdGlvbiBlbnN1cmVzIHRoYXQgaWYgYW5cbi8vIGV4Y2VwdGlvbiBpcyB0aHJvd24gYnkgYSB0YXNrLCB0aGF0IHRoZSB0YXNrIHF1ZXVlIHdpbGwgY29udGludWUgZmx1c2hpbmcgYXNcbi8vIHNvb24gYXMgcG9zc2libGUsIGJ1dCBpZiB5b3UgdXNlIGByYXdBc2FwYCBkaXJlY3RseSwgeW91IGFyZSByZXNwb25zaWJsZSB0b1xuLy8gZWl0aGVyIGVuc3VyZSB0aGF0IG5vIGV4Y2VwdGlvbnMgYXJlIHRocm93biBmcm9tIHlvdXIgdGFzaywgb3IgdG8gbWFudWFsbHlcbi8vIGNhbGwgYHJhd0FzYXAucmVxdWVzdEZsdXNoYCBpZiBhbiBleGNlcHRpb24gaXMgdGhyb3duLlxubW9kdWxlLmV4cG9ydHMgPSByYXdBc2FwO1xuZnVuY3Rpb24gcmF3QXNhcCh0YXNrKSB7XG4gICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcmVxdWVzdEZsdXNoKCk7XG4gICAgICAgIGZsdXNoaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gRXF1aXZhbGVudCB0byBwdXNoLCBidXQgYXZvaWRzIGEgZnVuY3Rpb24gY2FsbC5cbiAgICBxdWV1ZVtxdWV1ZS5sZW5ndGhdID0gdGFzaztcbn1cblxudmFyIHF1ZXVlID0gW107XG4vLyBPbmNlIGEgZmx1c2ggaGFzIGJlZW4gcmVxdWVzdGVkLCBubyBmdXJ0aGVyIGNhbGxzIHRvIGByZXF1ZXN0Rmx1c2hgIGFyZVxuLy8gbmVjZXNzYXJ5IHVudGlsIHRoZSBuZXh0IGBmbHVzaGAgY29tcGxldGVzLlxudmFyIGZsdXNoaW5nID0gZmFsc2U7XG4vLyBgcmVxdWVzdEZsdXNoYCBpcyBhbiBpbXBsZW1lbnRhdGlvbi1zcGVjaWZpYyBtZXRob2QgdGhhdCBhdHRlbXB0cyB0byBraWNrXG4vLyBvZmYgYSBgZmx1c2hgIGV2ZW50IGFzIHF1aWNrbHkgYXMgcG9zc2libGUuIGBmbHVzaGAgd2lsbCBhdHRlbXB0IHRvIGV4aGF1c3Rcbi8vIHRoZSBldmVudCBxdWV1ZSBiZWZvcmUgeWllbGRpbmcgdG8gdGhlIGJyb3dzZXIncyBvd24gZXZlbnQgbG9vcC5cbnZhciByZXF1ZXN0Rmx1c2g7XG4vLyBUaGUgcG9zaXRpb24gb2YgdGhlIG5leHQgdGFzayB0byBleGVjdXRlIGluIHRoZSB0YXNrIHF1ZXVlLiBUaGlzIGlzXG4vLyBwcmVzZXJ2ZWQgYmV0d2VlbiBjYWxscyB0byBgZmx1c2hgIHNvIHRoYXQgaXQgY2FuIGJlIHJlc3VtZWQgaWZcbi8vIGEgdGFzayB0aHJvd3MgYW4gZXhjZXB0aW9uLlxudmFyIGluZGV4ID0gMDtcbi8vIElmIGEgdGFzayBzY2hlZHVsZXMgYWRkaXRpb25hbCB0YXNrcyByZWN1cnNpdmVseSwgdGhlIHRhc2sgcXVldWUgY2FuIGdyb3dcbi8vIHVuYm91bmRlZC4gVG8gcHJldmVudCBtZW1vcnkgZXhoYXVzdGlvbiwgdGhlIHRhc2sgcXVldWUgd2lsbCBwZXJpb2RpY2FsbHlcbi8vIHRydW5jYXRlIGFscmVhZHktY29tcGxldGVkIHRhc2tzLlxudmFyIGNhcGFjaXR5ID0gMTAyNDtcblxuLy8gVGhlIGZsdXNoIGZ1bmN0aW9uIHByb2Nlc3NlcyBhbGwgdGFza3MgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHdpdGhcbi8vIGByYXdBc2FwYCB1bmxlc3MgYW5kIHVudGlsIG9uZSBvZiB0aG9zZSB0YXNrcyB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuLy8gSWYgYSB0YXNrIHRocm93cyBhbiBleGNlcHRpb24sIGBmbHVzaGAgZW5zdXJlcyB0aGF0IGl0cyBzdGF0ZSB3aWxsIHJlbWFpblxuLy8gY29uc2lzdGVudCBhbmQgd2lsbCByZXN1bWUgd2hlcmUgaXQgbGVmdCBvZmYgd2hlbiBjYWxsZWQgYWdhaW4uXG4vLyBIb3dldmVyLCBgZmx1c2hgIGRvZXMgbm90IG1ha2UgYW55IGFycmFuZ2VtZW50cyB0byBiZSBjYWxsZWQgYWdhaW4gaWYgYW5cbi8vIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB3aGlsZSAoaW5kZXggPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAvLyBBZHZhbmNlIHRoZSBpbmRleCBiZWZvcmUgY2FsbGluZyB0aGUgdGFzay4gVGhpcyBlbnN1cmVzIHRoYXQgd2Ugd2lsbFxuICAgICAgICAvLyBiZWdpbiBmbHVzaGluZyBvbiB0aGUgbmV4dCB0YXNrIHRoZSB0YXNrIHRocm93cyBhbiBlcnJvci5cbiAgICAgICAgaW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgIHF1ZXVlW2N1cnJlbnRJbmRleF0uY2FsbCgpO1xuICAgICAgICAvLyBQcmV2ZW50IGxlYWtpbmcgbWVtb3J5IGZvciBsb25nIGNoYWlucyBvZiByZWN1cnNpdmUgY2FsbHMgdG8gYGFzYXBgLlxuICAgICAgICAvLyBJZiB3ZSBjYWxsIGBhc2FwYCB3aXRoaW4gdGFza3Mgc2NoZWR1bGVkIGJ5IGBhc2FwYCwgdGhlIHF1ZXVlIHdpbGxcbiAgICAgICAgLy8gZ3JvdywgYnV0IHRvIGF2b2lkIGFuIE8obikgd2FsayBmb3IgZXZlcnkgdGFzayB3ZSBleGVjdXRlLCB3ZSBkb24ndFxuICAgICAgICAvLyBzaGlmdCB0YXNrcyBvZmYgdGhlIHF1ZXVlIGFmdGVyIHRoZXkgaGF2ZSBiZWVuIGV4ZWN1dGVkLlxuICAgICAgICAvLyBJbnN0ZWFkLCB3ZSBwZXJpb2RpY2FsbHkgc2hpZnQgMTAyNCB0YXNrcyBvZmYgdGhlIHF1ZXVlLlxuICAgICAgICBpZiAoaW5kZXggPiBjYXBhY2l0eSkge1xuICAgICAgICAgICAgLy8gTWFudWFsbHkgc2hpZnQgYWxsIHZhbHVlcyBzdGFydGluZyBhdCB0aGUgaW5kZXggYmFjayB0byB0aGVcbiAgICAgICAgICAgIC8vIGJlZ2lubmluZyBvZiB0aGUgcXVldWUuXG4gICAgICAgICAgICBmb3IgKHZhciBzY2FuID0gMCwgbmV3TGVuZ3RoID0gcXVldWUubGVuZ3RoIC0gaW5kZXg7IHNjYW4gPCBuZXdMZW5ndGg7IHNjYW4rKykge1xuICAgICAgICAgICAgICAgIHF1ZXVlW3NjYW5dID0gcXVldWVbc2NhbiArIGluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXVlLmxlbmd0aCAtPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgIGluZGV4ID0gMDtcbiAgICBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBgcmVxdWVzdEZsdXNoYCBpcyBpbXBsZW1lbnRlZCB1c2luZyBhIHN0cmF0ZWd5IGJhc2VkIG9uIGRhdGEgY29sbGVjdGVkIGZyb21cbi8vIGV2ZXJ5IGF2YWlsYWJsZSBTYXVjZUxhYnMgU2VsZW5pdW0gd2ViIGRyaXZlciB3b3JrZXIgYXQgdGltZSBvZiB3cml0aW5nLlxuLy8gaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMW1HLTVVWUd1cDVxeEdkRU1Xa2hQNkJXQ3owNTNOVWIyRTFRb1VUVTE2dUEvZWRpdCNnaWQ9NzgzNzI0NTkzXG5cbi8vIFNhZmFyaSA2IGFuZCA2LjEgZm9yIGRlc2t0b3AsIGlQYWQsIGFuZCBpUGhvbmUgYXJlIHRoZSBvbmx5IGJyb3dzZXJzIHRoYXRcbi8vIGhhdmUgV2ViS2l0TXV0YXRpb25PYnNlcnZlciBidXQgbm90IHVuLXByZWZpeGVkIE11dGF0aW9uT2JzZXJ2ZXIuXG4vLyBNdXN0IHVzZSBgZ2xvYmFsYCBpbnN0ZWFkIG9mIGB3aW5kb3dgIHRvIHdvcmsgaW4gYm90aCBmcmFtZXMgYW5kIHdlYlxuLy8gd29ya2Vycy4gYGdsb2JhbGAgaXMgYSBwcm92aXNpb24gb2YgQnJvd3NlcmlmeSwgTXIsIE1ycywgb3IgTW9wLlxudmFyIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cbi8vIE11dGF0aW9uT2JzZXJ2ZXJzIGFyZSBkZXNpcmFibGUgYmVjYXVzZSB0aGV5IGhhdmUgaGlnaCBwcmlvcml0eSBhbmQgd29ya1xuLy8gcmVsaWFibHkgZXZlcnl3aGVyZSB0aGV5IGFyZSBpbXBsZW1lbnRlZC5cbi8vIFRoZXkgYXJlIGltcGxlbWVudGVkIGluIGFsbCBtb2Rlcm4gYnJvd3NlcnMuXG4vL1xuLy8gLSBBbmRyb2lkIDQtNC4zXG4vLyAtIENocm9tZSAyNi0zNFxuLy8gLSBGaXJlZm94IDE0LTI5XG4vLyAtIEludGVybmV0IEV4cGxvcmVyIDExXG4vLyAtIGlQYWQgU2FmYXJpIDYtNy4xXG4vLyAtIGlQaG9uZSBTYWZhcmkgNy03LjFcbi8vIC0gU2FmYXJpIDYtN1xuaWYgKHR5cGVvZiBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmVxdWVzdEZsdXNoID0gbWFrZVJlcXVlc3RDYWxsRnJvbU11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpO1xuXG4vLyBNZXNzYWdlQ2hhbm5lbHMgYXJlIGRlc2lyYWJsZSBiZWNhdXNlIHRoZXkgZ2l2ZSBkaXJlY3QgYWNjZXNzIHRvIHRoZSBIVE1MXG4vLyB0YXNrIHF1ZXVlLCBhcmUgaW1wbGVtZW50ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAsIFNhZmFyaSA1LjAtMSwgYW5kIE9wZXJhXG4vLyAxMS0xMiwgYW5kIGluIHdlYiB3b3JrZXJzIGluIG1hbnkgZW5naW5lcy5cbi8vIEFsdGhvdWdoIG1lc3NhZ2UgY2hhbm5lbHMgeWllbGQgdG8gYW55IHF1ZXVlZCByZW5kZXJpbmcgYW5kIElPIHRhc2tzLCB0aGV5XG4vLyB3b3VsZCBiZSBiZXR0ZXIgdGhhbiBpbXBvc2luZyB0aGUgNG1zIGRlbGF5IG9mIHRpbWVycy5cbi8vIEhvd2V2ZXIsIHRoZXkgZG8gbm90IHdvcmsgcmVsaWFibHkgaW4gSW50ZXJuZXQgRXhwbG9yZXIgb3IgU2FmYXJpLlxuXG4vLyBJbnRlcm5ldCBFeHBsb3JlciAxMCBpcyB0aGUgb25seSBicm93c2VyIHRoYXQgaGFzIHNldEltbWVkaWF0ZSBidXQgZG9lc1xuLy8gbm90IGhhdmUgTXV0YXRpb25PYnNlcnZlcnMuXG4vLyBBbHRob3VnaCBzZXRJbW1lZGlhdGUgeWllbGRzIHRvIHRoZSBicm93c2VyJ3MgcmVuZGVyZXIsIGl0IHdvdWxkIGJlXG4vLyBwcmVmZXJyYWJsZSB0byBmYWxsaW5nIGJhY2sgdG8gc2V0VGltZW91dCBzaW5jZSBpdCBkb2VzIG5vdCBoYXZlXG4vLyB0aGUgbWluaW11bSA0bXMgcGVuYWx0eS5cbi8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgYXBwZWFycyB0byBiZSBhIGJ1ZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCBNb2JpbGUgKGFuZFxuLy8gRGVza3RvcCB0byBhIGxlc3NlciBleHRlbnQpIHRoYXQgcmVuZGVycyBib3RoIHNldEltbWVkaWF0ZSBhbmRcbi8vIE1lc3NhZ2VDaGFubmVsIHVzZWxlc3MgZm9yIHRoZSBwdXJwb3NlcyBvZiBBU0FQLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaXNrb3dhbC9xL2lzc3Vlcy8zOTZcblxuLy8gVGltZXJzIGFyZSBpbXBsZW1lbnRlZCB1bml2ZXJzYWxseS5cbi8vIFdlIGZhbGwgYmFjayB0byB0aW1lcnMgaW4gd29ya2VycyBpbiBtb3N0IGVuZ2luZXMsIGFuZCBpbiBmb3JlZ3JvdW5kXG4vLyBjb250ZXh0cyBpbiB0aGUgZm9sbG93aW5nIGJyb3dzZXJzLlxuLy8gSG93ZXZlciwgbm90ZSB0aGF0IGV2ZW4gdGhpcyBzaW1wbGUgY2FzZSByZXF1aXJlcyBudWFuY2VzIHRvIG9wZXJhdGUgaW4gYVxuLy8gYnJvYWQgc3BlY3RydW0gb2YgYnJvd3NlcnMuXG4vL1xuLy8gLSBGaXJlZm94IDMtMTNcbi8vIC0gSW50ZXJuZXQgRXhwbG9yZXIgNi05XG4vLyAtIGlQYWQgU2FmYXJpIDQuM1xuLy8gLSBMeW54IDIuOC43XG59IGVsc2Uge1xuICAgIHJlcXVlc3RGbHVzaCA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcihmbHVzaCk7XG59XG5cbi8vIGByZXF1ZXN0Rmx1c2hgIHJlcXVlc3RzIHRoYXQgdGhlIGhpZ2ggcHJpb3JpdHkgZXZlbnQgcXVldWUgYmUgZmx1c2hlZCBhc1xuLy8gc29vbiBhcyBwb3NzaWJsZS5cbi8vIFRoaXMgaXMgdXNlZnVsIHRvIHByZXZlbnQgYW4gZXJyb3IgdGhyb3duIGluIGEgdGFzayBmcm9tIHN0YWxsaW5nIHRoZSBldmVudFxuLy8gcXVldWUgaWYgdGhlIGV4Y2VwdGlvbiBoYW5kbGVkIGJ5IE5vZGUuanPigJlzXG4vLyBgcHJvY2Vzcy5vbihcInVuY2F1Z2h0RXhjZXB0aW9uXCIpYCBvciBieSBhIGRvbWFpbi5cbnJhd0FzYXAucmVxdWVzdEZsdXNoID0gcmVxdWVzdEZsdXNoO1xuXG4vLyBUbyByZXF1ZXN0IGEgaGlnaCBwcmlvcml0eSBldmVudCwgd2UgaW5kdWNlIGEgbXV0YXRpb24gb2JzZXJ2ZXIgYnkgdG9nZ2xpbmdcbi8vIHRoZSB0ZXh0IG9mIGEgdGV4dCBub2RlIGJldHdlZW4gXCIxXCIgYW5kIFwiLTFcIi5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21NdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHRvZ2dsZSA9IDE7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xuICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4gICAgICAgIHRvZ2dsZSA9IC10b2dnbGU7XG4gICAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZTtcbiAgICB9O1xufVxuXG4vLyBUaGUgbWVzc2FnZSBjaGFubmVsIHRlY2huaXF1ZSB3YXMgZGlzY292ZXJlZCBieSBNYWx0ZSBVYmwgYW5kIHdhcyB0aGVcbi8vIG9yaWdpbmFsIGZvdW5kYXRpb24gZm9yIHRoaXMgbGlicmFyeS5cbi8vIGh0dHA6Ly93d3cubm9uYmxvY2tpbmcuaW8vMjAxMS8wNi93aW5kb3duZXh0dGljay5odG1sXG5cbi8vIFNhZmFyaSA2LjAuNSAoYXQgbGVhc3QpIGludGVybWl0dGVudGx5IGZhaWxzIHRvIGNyZWF0ZSBtZXNzYWdlIHBvcnRzIG9uIGFcbi8vIHBhZ2UncyBmaXJzdCBsb2FkLiBUaGFua2Z1bGx5LCB0aGlzIHZlcnNpb24gb2YgU2FmYXJpIHN1cHBvcnRzXG4vLyBNdXRhdGlvbk9ic2VydmVycywgc28gd2UgZG9uJ3QgbmVlZCB0byBmYWxsIGJhY2sgaW4gdGhhdCBjYXNlLlxuXG4vLyBmdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tTWVzc2FnZUNoYW5uZWwoY2FsbGJhY2spIHtcbi8vICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuLy8gICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuLy8gICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuLy8gICAgIH07XG4vLyB9XG5cbi8vIEZvciByZWFzb25zIGV4cGxhaW5lZCBhYm92ZSwgd2UgYXJlIGFsc28gdW5hYmxlIHRvIHVzZSBgc2V0SW1tZWRpYXRlYFxuLy8gdW5kZXIgYW55IGNpcmN1bXN0YW5jZXMuXG4vLyBFdmVuIGlmIHdlIHdlcmUsIHRoZXJlIGlzIGFub3RoZXIgYnVnIGluIEludGVybmV0IEV4cGxvcmVyIDEwLlxuLy8gSXQgaXMgbm90IHN1ZmZpY2llbnQgdG8gYXNzaWduIGBzZXRJbW1lZGlhdGVgIHRvIGByZXF1ZXN0Rmx1c2hgIGJlY2F1c2Vcbi8vIGBzZXRJbW1lZGlhdGVgIG11c3QgYmUgY2FsbGVkICpieSBuYW1lKiBhbmQgdGhlcmVmb3JlIG11c3QgYmUgd3JhcHBlZCBpbiBhXG4vLyBjbG9zdXJlLlxuLy8gTmV2ZXIgZm9yZ2V0LlxuXG4vLyBmdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tU2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuLy8gICAgICAgICBzZXRJbW1lZGlhdGUoY2FsbGJhY2spO1xuLy8gICAgIH07XG4vLyB9XG5cbi8vIFNhZmFyaSA2LjAgaGFzIGEgcHJvYmxlbSB3aGVyZSB0aW1lcnMgd2lsbCBnZXQgbG9zdCB3aGlsZSB0aGUgdXNlciBpc1xuLy8gc2Nyb2xsaW5nLiBUaGlzIHByb2JsZW0gZG9lcyBub3QgaW1wYWN0IEFTQVAgYmVjYXVzZSBTYWZhcmkgNi4wIHN1cHBvcnRzXG4vLyBtdXRhdGlvbiBvYnNlcnZlcnMsIHNvIHRoYXQgaW1wbGVtZW50YXRpb24gaXMgdXNlZCBpbnN0ZWFkLlxuLy8gSG93ZXZlciwgaWYgd2UgZXZlciBlbGVjdCB0byB1c2UgdGltZXJzIGluIFNhZmFyaSwgdGhlIHByZXZhbGVudCB3b3JrLWFyb3VuZFxuLy8gaXMgdG8gYWRkIGEgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHRoYXQgY2FsbHMgZm9yIGEgZmx1c2guXG5cbi8vIGBzZXRUaW1lb3V0YCBkb2VzIG5vdCBjYWxsIHRoZSBwYXNzZWQgY2FsbGJhY2sgaWYgdGhlIGRlbGF5IGlzIGxlc3MgdGhhblxuLy8gYXBwcm94aW1hdGVseSA3IGluIHdlYiB3b3JrZXJzIGluIEZpcmVmb3ggOCB0aHJvdWdoIDE4LCBhbmQgc29tZXRpbWVzIG5vdFxuLy8gZXZlbiB0aGVuLlxuXG5mdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXIoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4gICAgICAgIC8vIFdlIGRpc3BhdGNoIGEgdGltZW91dCB3aXRoIGEgc3BlY2lmaWVkIGRlbGF5IG9mIDAgZm9yIGVuZ2luZXMgdGhhdFxuICAgICAgICAvLyBjYW4gcmVsaWFibHkgYWNjb21tb2RhdGUgdGhhdCByZXF1ZXN0LiBUaGlzIHdpbGwgdXN1YWxseSBiZSBzbmFwcGVkXG4gICAgICAgIC8vIHRvIGEgNCBtaWxpc2Vjb25kIGRlbGF5LCBidXQgb25jZSB3ZSdyZSBmbHVzaGluZywgdGhlcmUncyBubyBkZWxheVxuICAgICAgICAvLyBiZXR3ZWVuIGV2ZW50cy5cbiAgICAgICAgdmFyIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGhhbmRsZVRpbWVyLCAwKTtcbiAgICAgICAgLy8gSG93ZXZlciwgc2luY2UgdGhpcyB0aW1lciBnZXRzIGZyZXF1ZW50bHkgZHJvcHBlZCBpbiBGaXJlZm94XG4gICAgICAgIC8vIHdvcmtlcnMsIHdlIGVubGlzdCBhbiBpbnRlcnZhbCBoYW5kbGUgdGhhdCB3aWxsIHRyeSB0byBmaXJlXG4gICAgICAgIC8vIGFuIGV2ZW50IDIwIHRpbWVzIHBlciBzZWNvbmQgdW50aWwgaXQgc3VjY2VlZHMuXG4gICAgICAgIHZhciBpbnRlcnZhbEhhbmRsZSA9IHNldEludGVydmFsKGhhbmRsZVRpbWVyLCA1MCk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVGltZXIoKSB7XG4gICAgICAgICAgICAvLyBXaGljaGV2ZXIgdGltZXIgc3VjY2VlZHMgd2lsbCBjYW5jZWwgYm90aCB0aW1lcnMgYW5kXG4gICAgICAgICAgICAvLyBleGVjdXRlIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxIYW5kbGUpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIFRoaXMgaXMgZm9yIGBhc2FwLmpzYCBvbmx5LlxuLy8gSXRzIG5hbWUgd2lsbCBiZSBwZXJpb2RpY2FsbHkgcmFuZG9taXplZCB0byBicmVhayBhbnkgY29kZSB0aGF0IGRlcGVuZHMgb25cbi8vIGl0cyBleGlzdGVuY2UuXG5yYXdBc2FwLm1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lciA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcjtcblxuLy8gQVNBUCB3YXMgb3JpZ2luYWxseSBhIG5leHRUaWNrIHNoaW0gaW5jbHVkZWQgaW4gUS4gVGhpcyB3YXMgZmFjdG9yZWQgb3V0XG4vLyBpbnRvIHRoaXMgQVNBUCBwYWNrYWdlLiBJdCB3YXMgbGF0ZXIgYWRhcHRlZCB0byBSU1ZQIHdoaWNoIG1hZGUgZnVydGhlclxuLy8gYW1lbmRtZW50cy4gVGhlc2UgZGVjaXNpb25zLCBwYXJ0aWN1bGFybHkgdG8gbWFyZ2luYWxpemUgTWVzc2FnZUNoYW5uZWwgYW5kXG4vLyB0byBjYXB0dXJlIHRoZSBNdXRhdGlvbk9ic2VydmVyIGltcGxlbWVudGF0aW9uIGluIGEgY2xvc3VyZSwgd2VyZSBpbnRlZ3JhdGVkXG4vLyBiYWNrIGludG8gQVNBUCBwcm9wZXIuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGlsZGVpby9yc3ZwLmpzL2Jsb2IvY2RkZjcyMzI1NDZhOWNmODU4NTI0Yjc1Y2RlNmY5ZWRmNzI2MjBhNy9saWIvcnN2cC9hc2FwLmpzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hc2FwL2Jyb3dzZXItcmF3LmpzXG4gKiogbW9kdWxlIGlkID0gMTA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIERyYWdTb3VyY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEcmFnU291cmNlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnU291cmNlKTtcbiAgfVxuXG4gIERyYWdTb3VyY2UucHJvdG90eXBlLmNhbkRyYWcgPSBmdW5jdGlvbiBjYW5EcmFnKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIERyYWdTb3VyY2UucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbiBpc0RyYWdnaW5nKG1vbml0b3IsIGhhbmRsZSkge1xuICAgIHJldHVybiBoYW5kbGUgPT09IG1vbml0b3IuZ2V0U291cmNlSWQoKTtcbiAgfTtcblxuICBEcmFnU291cmNlLnByb3RvdHlwZS5lbmREcmFnID0gZnVuY3Rpb24gZW5kRHJhZygpIHt9O1xuXG4gIHJldHVybiBEcmFnU291cmNlO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEcmFnU291cmNlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvRHJhZ1NvdXJjZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEcm9wVGFyZ2V0ID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRHJvcFRhcmdldCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJvcFRhcmdldCk7XG4gIH1cblxuICBEcm9wVGFyZ2V0LnByb3RvdHlwZS5jYW5Ecm9wID0gZnVuY3Rpb24gY2FuRHJvcCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBEcm9wVGFyZ2V0LnByb3RvdHlwZS5ob3ZlciA9IGZ1bmN0aW9uIGhvdmVyKCkge307XG5cbiAgRHJvcFRhcmdldC5wcm90b3R5cGUuZHJvcCA9IGZ1bmN0aW9uIGRyb3AoKSB7fTtcblxuICByZXR1cm4gRHJvcFRhcmdldDtcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRHJvcFRhcmdldDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL0Ryb3BUYXJnZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUJhY2tlbmQ7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfbG9kYXNoTm9vcCA9IHJlcXVpcmUoJ2xvZGFzaC9ub29wJyk7XG5cbnZhciBfbG9kYXNoTm9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hOb29wKTtcblxudmFyIFRlc3RCYWNrZW5kID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGVzdEJhY2tlbmQobWFuYWdlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0QmFja2VuZCk7XG5cbiAgICB0aGlzLmFjdGlvbnMgPSBtYW5hZ2VyLmdldEFjdGlvbnMoKTtcbiAgfVxuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uIHNldHVwKCkge1xuICAgIHRoaXMuZGlkQ2FsbFNldHVwID0gdHJ1ZTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiB0ZWFyZG93bigpIHtcbiAgICB0aGlzLmRpZENhbGxUZWFyZG93biA9IHRydWU7XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLmNvbm5lY3REcmFnU291cmNlID0gZnVuY3Rpb24gY29ubmVjdERyYWdTb3VyY2UoKSB7XG4gICAgcmV0dXJuIF9sb2Rhc2hOb29wMlsnZGVmYXVsdCddO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5jb25uZWN0RHJhZ1ByZXZpZXcgPSBmdW5jdGlvbiBjb25uZWN0RHJhZ1ByZXZpZXcoKSB7XG4gICAgcmV0dXJuIF9sb2Rhc2hOb29wMlsnZGVmYXVsdCddO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5jb25uZWN0RHJvcFRhcmdldCA9IGZ1bmN0aW9uIGNvbm5lY3REcm9wVGFyZ2V0KCkge1xuICAgIHJldHVybiBfbG9kYXNoTm9vcDJbJ2RlZmF1bHQnXTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuc2ltdWxhdGVCZWdpbkRyYWcgPSBmdW5jdGlvbiBzaW11bGF0ZUJlZ2luRHJhZyhzb3VyY2VJZHMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmFjdGlvbnMuYmVnaW5EcmFnKHNvdXJjZUlkcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLnNpbXVsYXRlUHVibGlzaERyYWdTb3VyY2UgPSBmdW5jdGlvbiBzaW11bGF0ZVB1Ymxpc2hEcmFnU291cmNlKCkge1xuICAgIHRoaXMuYWN0aW9ucy5wdWJsaXNoRHJhZ1NvdXJjZSgpO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5zaW11bGF0ZUhvdmVyID0gZnVuY3Rpb24gc2ltdWxhdGVIb3Zlcih0YXJnZXRJZHMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmFjdGlvbnMuaG92ZXIodGFyZ2V0SWRzLCBvcHRpb25zKTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuc2ltdWxhdGVEcm9wID0gZnVuY3Rpb24gc2ltdWxhdGVEcm9wKCkge1xuICAgIHRoaXMuYWN0aW9ucy5kcm9wKCk7XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLnNpbXVsYXRlRW5kRHJhZyA9IGZ1bmN0aW9uIHNpbXVsYXRlRW5kRHJhZygpIHtcbiAgICB0aGlzLmFjdGlvbnMuZW5kRHJhZygpO1xuICB9O1xuXG4gIHJldHVybiBUZXN0QmFja2VuZDtcbn0pKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhY2tlbmQobWFuYWdlcikge1xuICByZXR1cm4gbmV3IFRlc3RCYWNrZW5kKG1hbmFnZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvYmFja2VuZHMvY3JlYXRlVGVzdEJhY2tlbmQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNoZWNrRGVjb3JhdG9yQXJndW1lbnRzO1xuXG5mdW5jdGlvbiBjaGVja0RlY29yYXRvckFyZ3VtZW50cyhmdW5jdGlvbk5hbWUsIHNpZ25hdHVyZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYXJnID0gYXJnc1tpXTtcbiAgICAgIGlmIChhcmcgJiYgYXJnLnByb3RvdHlwZSAmJiBhcmcucHJvdG90eXBlLnJlbmRlcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgJ1lvdSBzZWVtIHRvIGJlIGFwcGx5aW5nIHRoZSBhcmd1bWVudHMgaW4gdGhlIHdyb25nIG9yZGVyLiAnICsgKCdJdCBzaG91bGQgYmUgJyArIGZ1bmN0aW9uTmFtZSArICcoJyArIHNpZ25hdHVyZSArICcpKENvbXBvbmVudCksIG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC4gJykgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtdHJvdWJsZXNob290aW5nLmh0bWwjeW91LXNlZW0tdG8tYmUtYXBwbHlpbmctdGhlLWFyZ3VtZW50cy1pbi10aGUtd3Jvbmctb3JkZXInKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMTEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyYWdMYXllcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1NoYWxsb3dFcXVhbCk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWxTY2FsYXIgPSByZXF1aXJlKCcuL3V0aWxzL3NoYWxsb3dFcXVhbFNjYWxhcicpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyKTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzUGxhaW5PYmplY3QpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMgPSByZXF1aXJlKCcuL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzJyk7XG5cbnZhciBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzKTtcblxuZnVuY3Rpb24gRHJhZ0xheWVyKGNvbGxlY3QpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czJbJ2RlZmF1bHQnXS5hcHBseSh1bmRlZmluZWQsIFsnRHJhZ0xheWVyJywgJ2NvbGxlY3RbLCBvcHRpb25zXSddLmNvbmNhdChfc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGNvbGxlY3QgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBcImNvbGxlY3RcIiBwcm92aWRlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gRHJhZ0xheWVyICcgKyAndG8gYmUgYSBmdW5jdGlvbiB0aGF0IGNvbGxlY3RzIHByb3BzIHRvIGluamVjdCBpbnRvIHRoZSBjb21wb25lbnQuICcsICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLWxheWVyLmh0bWwnLCBjb2xsZWN0KTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShvcHRpb25zKSwgJ0V4cGVjdGVkIFwib3B0aW9uc1wiIHByb3ZpZGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gRHJhZ0xheWVyIHRvIGJlICcgKyAnYSBwbGFpbiBvYmplY3Qgd2hlbiBzcGVjaWZpZWQuICcgKyAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1sYXllci5odG1sJywgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRlTGF5ZXIoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgdmFyIF9vcHRpb25zJGFyZVByb3BzRXF1YWwgPSBvcHRpb25zLmFyZVByb3BzRXF1YWw7XG4gICAgdmFyIGFyZVByb3BzRXF1YWwgPSBfb3B0aW9ucyRhcmVQcm9wc0VxdWFsID09PSB1bmRlZmluZWQgPyBfdXRpbHNTaGFsbG93RXF1YWxTY2FsYXIyWydkZWZhdWx0J10gOiBfb3B0aW9ucyRhcmVQcm9wc0VxdWFsO1xuXG4gICAgdmFyIGRpc3BsYXlOYW1lID0gRGVjb3JhdGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IERlY29yYXRlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuXG4gICAgcmV0dXJuIChmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKERyYWdMYXllckNvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5jaGlsZDtcbiAgICAgIH07XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAhYXJlUHJvcHNFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpIHx8ICFfdXRpbHNTaGFsbG93RXF1YWwyWydkZWZhdWx0J10obmV4dFN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgICAgIH07XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhEcmFnTGF5ZXJDb250YWluZXIsIG51bGwsIFt7XG4gICAgICAgIGtleTogJ0RlY29yYXRlZENvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBEZWNvcmF0ZWRDb21wb25lbnQsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzcGxheU5hbWUnLFxuICAgICAgICB2YWx1ZTogJ0RyYWdMYXllcignICsgZGlzcGxheU5hbWUgKyAnKScsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29udGV4dFR5cGVzJyxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBkcmFnRHJvcE1hbmFnZXI6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfV0pO1xuXG4gICAgICBmdW5jdGlvbiBEcmFnTGF5ZXJDb250YWluZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdMYXllckNvbnRhaW5lcik7XG5cbiAgICAgICAgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMubWFuYWdlciA9IGNvbnRleHQuZHJhZ0Ryb3BNYW5hZ2VyO1xuICAgICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiB0aGlzLm1hbmFnZXIgPT09ICdvYmplY3QnLCAnQ291bGQgbm90IGZpbmQgdGhlIGRyYWcgYW5kIGRyb3AgbWFuYWdlciBpbiB0aGUgY29udGV4dCBvZiAlcy4gJyArICdNYWtlIHN1cmUgdG8gd3JhcCB0aGUgdG9wLWxldmVsIGNvbXBvbmVudCBvZiB5b3VyIGFwcCB3aXRoIERyYWdEcm9wQ29udGV4dC4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy10cm91Ymxlc2hvb3RpbmcuaHRtbCNjb3VsZC1ub3QtZmluZC10aGUtZHJhZy1hbmQtZHJvcC1tYW5hZ2VyLWluLXRoZS1jb250ZXh0JywgZGlzcGxheU5hbWUsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgRHJhZ0xheWVyQ29udGFpbmVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IHRydWU7XG5cbiAgICAgICAgdmFyIG1vbml0b3IgPSB0aGlzLm1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbU9mZnNldENoYW5nZSA9IG1vbml0b3Iuc3Vic2NyaWJlVG9PZmZzZXRDaGFuZ2UodGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVN0YXRlQ2hhbmdlID0gbW9uaXRvci5zdWJzY3JpYmVUb1N0YXRlQ2hhbmdlKHRoaXMuaGFuZGxlQ2hhbmdlKTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgRHJhZ0xheWVyQ29udGFpbmVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tT2Zmc2V0Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tU3RhdGVDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNDdXJyZW50bHlNb3VudGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHRTdGF0ZSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICAgIGlmICghX3V0aWxzU2hhbGxvd0VxdWFsMlsnZGVmYXVsdCddKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSkpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuZ2V0Q3VycmVudFN0YXRlID0gZnVuY3Rpb24gZ2V0Q3VycmVudFN0YXRlKCkge1xuICAgICAgICB2YXIgbW9uaXRvciA9IHRoaXMubWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgICAgIHJldHVybiBjb2xsZWN0KG1vbml0b3IpO1xuICAgICAgfTtcblxuICAgICAgRHJhZ0xheWVyQ29udGFpbmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChEZWNvcmF0ZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlLCB7XG4gICAgICAgICAgcmVmOiAnY2hpbGQnIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBEcmFnTGF5ZXJDb250YWluZXI7XG4gICAgfSkoX3JlYWN0LkNvbXBvbmVudCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvRHJhZ0xheWVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gc2hhbGxvd0VxdWFsO1xuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFoYXNPd24uY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgb2JqQVtrZXlzQVtpXV0gIT09IG9iakJba2V5c0FbaV1dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbEEgPSBvYmpBW2tleXNBW2ldXTtcbiAgICB2YXIgdmFsQiA9IG9iakJba2V5c0FbaV1dO1xuXG4gICAgaWYgKHZhbEEgIT09IHZhbEIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL3NoYWxsb3dFcXVhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDExMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc2hhbGxvd0VxdWFsU2NhbGFyO1xuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWxTY2FsYXIob2JqQSwgb2JqQikge1xuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFoYXNPd24uY2FsbChvYmpCLCBrZXlzQVtpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsQSA9IG9iakFba2V5c0FbaV1dO1xuICAgIHZhciB2YWxCID0gb2JqQltrZXlzQVtpXV07XG5cbiAgICBpZiAodmFsQSAhPT0gdmFsQiB8fCB0eXBlb2YgdmFsQSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbEIgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvdXRpbHMvc2hhbGxvd0VxdWFsU2NhbGFyLmpzXG4gKiogbW9kdWxlIGlkID0gMTEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNIb3N0T2JqZWN0ID0gcmVxdWlyZSgnLi9faXNIb3N0T2JqZWN0JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8XG4gICAgICBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSAhPSBvYmplY3RUYWcgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiZcbiAgICBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJiBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL34vbG9kYXNoL2lzUGxhaW5PYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbi8qKlxuICogR2V0cyB0aGUgYFtbUHJvdG90eXBlXV1gIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge251bGx8T2JqZWN0fSBSZXR1cm5zIHRoZSBgW1tQcm90b3R5cGVdXWAuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3RvdHlwZSh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlR2V0UHJvdG90eXBlKE9iamVjdCh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzXG4gKiogbW9kdWxlIGlkID0gMTE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSG9zdE9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9+L2xvZGFzaC9faXNIb3N0T2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4gKiogbW9kdWxlIGlkID0gMTE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgX3NsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gRHJhZ1NvdXJjZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNQbGFpbk9iamVjdCk7XG5cbnZhciBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMnKTtcblxudmFyIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMpO1xuXG52YXIgX2RlY29yYXRlSGFuZGxlciA9IHJlcXVpcmUoJy4vZGVjb3JhdGVIYW5kbGVyJyk7XG5cbnZhciBfZGVjb3JhdGVIYW5kbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY29yYXRlSGFuZGxlcik7XG5cbnZhciBfcmVnaXN0ZXJTb3VyY2UgPSByZXF1aXJlKCcuL3JlZ2lzdGVyU291cmNlJyk7XG5cbnZhciBfcmVnaXN0ZXJTb3VyY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVnaXN0ZXJTb3VyY2UpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZUZhY3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZVNvdXJjZUZhY3RvcnknKTtcblxudmFyIF9jcmVhdGVTb3VyY2VGYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVNvdXJjZUZhY3RvcnkpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZU1vbml0b3IgPSByZXF1aXJlKCcuL2NyZWF0ZVNvdXJjZU1vbml0b3InKTtcblxudmFyIF9jcmVhdGVTb3VyY2VNb25pdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVNvdXJjZU1vbml0b3IpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZUNvbm5lY3RvciA9IHJlcXVpcmUoJy4vY3JlYXRlU291cmNlQ29ubmVjdG9yJyk7XG5cbnZhciBfY3JlYXRlU291cmNlQ29ubmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVNvdXJjZUNvbm5lY3Rvcik7XG5cbnZhciBfdXRpbHNJc1ZhbGlkVHlwZSA9IHJlcXVpcmUoJy4vdXRpbHMvaXNWYWxpZFR5cGUnKTtcblxudmFyIF91dGlsc0lzVmFsaWRUeXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzSXNWYWxpZFR5cGUpO1xuXG5mdW5jdGlvbiBEcmFnU291cmNlKHR5cGUsIHNwZWMsIGNvbGxlY3QpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1szXTtcblxuICBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czJbJ2RlZmF1bHQnXS5hcHBseSh1bmRlZmluZWQsIFsnRHJhZ1NvdXJjZScsICd0eXBlLCBzcGVjLCBjb2xsZWN0Wywgb3B0aW9uc10nXS5jb25jYXQoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICB2YXIgZ2V0VHlwZSA9IHR5cGU7XG4gIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX3V0aWxzSXNWYWxpZFR5cGUyWydkZWZhdWx0J10odHlwZSksICdFeHBlY3RlZCBcInR5cGVcIiBwcm92aWRlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gRHJhZ1NvdXJjZSB0byBiZSAnICsgJ2Egc3RyaW5nLCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHN0cmluZyBnaXZlbiB0aGUgY3VycmVudCBwcm9wcy4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgdHlwZSk7XG4gICAgZ2V0VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH07XG4gIH1cbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShzcGVjKSwgJ0V4cGVjdGVkIFwic3BlY1wiIHByb3ZpZGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gRHJhZ1NvdXJjZSB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgc3BlYyk7XG4gIHZhciBjcmVhdGVTb3VyY2UgPSBfY3JlYXRlU291cmNlRmFjdG9yeTJbJ2RlZmF1bHQnXShzcGVjKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgY29sbGVjdCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIFwiY29sbGVjdFwiIHByb3ZpZGVkIGFzIHRoZSB0aGlyZCBhcmd1bWVudCB0byBEcmFnU291cmNlIHRvIGJlICcgKyAnYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwbGFpbiBvYmplY3Qgb2YgcHJvcHMgdG8gaW5qZWN0LiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBjb2xsZWN0KTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShvcHRpb25zKSwgJ0V4cGVjdGVkIFwib3B0aW9uc1wiIHByb3ZpZGVkIGFzIHRoZSBmb3VydGggYXJndW1lbnQgdG8gRHJhZ1NvdXJjZSB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0IHdoZW4gc3BlY2lmaWVkLiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBjb2xsZWN0KTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGVTb3VyY2UoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIF9kZWNvcmF0ZUhhbmRsZXIyWydkZWZhdWx0J10oe1xuICAgICAgY29ubmVjdEJhY2tlbmQ6IGZ1bmN0aW9uIGNvbm5lY3RCYWNrZW5kKGJhY2tlbmQsIHNvdXJjZUlkKSB7XG4gICAgICAgIHJldHVybiBiYWNrZW5kLmNvbm5lY3REcmFnU291cmNlKHNvdXJjZUlkKTtcbiAgICAgIH0sXG4gICAgICBjb250YWluZXJEaXNwbGF5TmFtZTogJ0RyYWdTb3VyY2UnLFxuICAgICAgY3JlYXRlSGFuZGxlcjogY3JlYXRlU291cmNlLFxuICAgICAgcmVnaXN0ZXJIYW5kbGVyOiBfcmVnaXN0ZXJTb3VyY2UyWydkZWZhdWx0J10sXG4gICAgICBjcmVhdGVNb25pdG9yOiBfY3JlYXRlU291cmNlTW9uaXRvcjJbJ2RlZmF1bHQnXSxcbiAgICAgIGNyZWF0ZUNvbm5lY3RvcjogX2NyZWF0ZVNvdXJjZUNvbm5lY3RvcjJbJ2RlZmF1bHQnXSxcbiAgICAgIERlY29yYXRlZENvbXBvbmVudDogRGVjb3JhdGVkQ29tcG9uZW50LFxuICAgICAgZ2V0VHlwZTogZ2V0VHlwZSxcbiAgICAgIGNvbGxlY3Q6IGNvbGxlY3QsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvRHJhZ1NvdXJjZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBkZWNvcmF0ZUhhbmRsZXI7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9kaXNwb3NhYmxlcyA9IHJlcXVpcmUoJ2Rpc3Bvc2FibGVzJyk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWwgPSByZXF1aXJlKCcuL3V0aWxzL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzU2hhbGxvd0VxdWFsKTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbFNjYWxhciA9IHJlcXVpcmUoJy4vdXRpbHMvc2hhbGxvd0VxdWFsU2NhbGFyJyk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWxTY2FsYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNTaGFsbG93RXF1YWxTY2FsYXIpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNQbGFpbk9iamVjdCk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbmZ1bmN0aW9uIGRlY29yYXRlSGFuZGxlcihfcmVmKSB7XG4gIHZhciBEZWNvcmF0ZWRDb21wb25lbnQgPSBfcmVmLkRlY29yYXRlZENvbXBvbmVudDtcbiAgdmFyIGNyZWF0ZUhhbmRsZXIgPSBfcmVmLmNyZWF0ZUhhbmRsZXI7XG4gIHZhciBjcmVhdGVNb25pdG9yID0gX3JlZi5jcmVhdGVNb25pdG9yO1xuICB2YXIgY3JlYXRlQ29ubmVjdG9yID0gX3JlZi5jcmVhdGVDb25uZWN0b3I7XG4gIHZhciByZWdpc3RlckhhbmRsZXIgPSBfcmVmLnJlZ2lzdGVySGFuZGxlcjtcbiAgdmFyIGNvbnRhaW5lckRpc3BsYXlOYW1lID0gX3JlZi5jb250YWluZXJEaXNwbGF5TmFtZTtcbiAgdmFyIGdldFR5cGUgPSBfcmVmLmdldFR5cGU7XG4gIHZhciBjb2xsZWN0ID0gX3JlZi5jb2xsZWN0O1xuICB2YXIgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGFyZVByb3BzRXF1YWwgPSBvcHRpb25zLmFyZVByb3BzRXF1YWw7XG4gIHZhciBhcmVQcm9wc0VxdWFsID0gX29wdGlvbnMkYXJlUHJvcHNFcXVhbCA9PT0gdW5kZWZpbmVkID8gX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyMlsnZGVmYXVsdCddIDogX29wdGlvbnMkYXJlUHJvcHNFcXVhbDtcblxuICB2YXIgZGlzcGxheU5hbWUgPSBEZWNvcmF0ZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgRGVjb3JhdGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cbiAgcmV0dXJuIChmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhEcmFnRHJvcENvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuZ2V0SGFuZGxlcklkID0gZnVuY3Rpb24gZ2V0SGFuZGxlcklkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcklkO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRlZENvbXBvbmVudEluc3RhbmNlO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICByZXR1cm4gIWFyZVByb3BzRXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fCAhX3V0aWxzU2hhbGxvd0VxdWFsMlsnZGVmYXVsdCddKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhEcmFnRHJvcENvbnRhaW5lciwgbnVsbCwgW3tcbiAgICAgIGtleTogJ0RlY29yYXRlZENvbXBvbmVudCcsXG4gICAgICB2YWx1ZTogRGVjb3JhdGVkQ29tcG9uZW50LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Rpc3BsYXlOYW1lJyxcbiAgICAgIHZhbHVlOiBjb250YWluZXJEaXNwbGF5TmFtZSArICcoJyArIGRpc3BsYXlOYW1lICsgJyknLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbnRleHRUeXBlcycsXG4gICAgICB2YWx1ZToge1xuICAgICAgICBkcmFnRHJvcE1hbmFnZXI6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfV0pO1xuXG4gICAgZnVuY3Rpb24gRHJhZ0Ryb3BDb250YWluZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnRHJvcENvbnRhaW5lcik7XG5cbiAgICAgIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCk7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZUNoaWxkUmVmID0gdGhpcy5oYW5kbGVDaGlsZFJlZi5iaW5kKHRoaXMpO1xuXG4gICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiB0aGlzLmNvbnRleHQuZHJhZ0Ryb3BNYW5hZ2VyID09PSAnb2JqZWN0JywgJ0NvdWxkIG5vdCBmaW5kIHRoZSBkcmFnIGFuZCBkcm9wIG1hbmFnZXIgaW4gdGhlIGNvbnRleHQgb2YgJXMuICcgKyAnTWFrZSBzdXJlIHRvIHdyYXAgdGhlIHRvcC1sZXZlbCBjb21wb25lbnQgb2YgeW91ciBhcHAgd2l0aCBEcmFnRHJvcENvbnRleHQuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtdHJvdWJsZXNob290aW5nLmh0bWwjY291bGQtbm90LWZpbmQtdGhlLWRyYWctYW5kLWRyb3AtbWFuYWdlci1pbi10aGUtY29udGV4dCcsIGRpc3BsYXlOYW1lLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgIHRoaXMubWFuYWdlciA9IHRoaXMuY29udGV4dC5kcmFnRHJvcE1hbmFnZXI7XG4gICAgICB0aGlzLmhhbmRsZXJNb25pdG9yID0gY3JlYXRlTW9uaXRvcih0aGlzLm1hbmFnZXIpO1xuICAgICAgdGhpcy5oYW5kbGVyQ29ubmVjdG9yID0gY3JlYXRlQ29ubmVjdG9yKHRoaXMubWFuYWdlci5nZXRCYWNrZW5kKCkpO1xuICAgICAgdGhpcy5oYW5kbGVyID0gY3JlYXRlSGFuZGxlcih0aGlzLmhhbmRsZXJNb25pdG9yKTtcblxuICAgICAgdGhpcy5kaXNwb3NhYmxlID0gbmV3IF9kaXNwb3NhYmxlcy5TZXJpYWxEaXNwb3NhYmxlKCk7XG4gICAgICB0aGlzLnJlY2VpdmVQcm9wcyhwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcbiAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5kaXNwb3NhYmxlID0gbmV3IF9kaXNwb3NhYmxlcy5TZXJpYWxEaXNwb3NhYmxlKCk7XG4gICAgICB0aGlzLmN1cnJlbnRUeXBlID0gbnVsbDtcbiAgICAgIHRoaXMucmVjZWl2ZVByb3BzKHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKCFhcmVQcm9wc0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuaXNDdXJyZW50bHlNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5yZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiByZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgIHRoaXMuaGFuZGxlci5yZWNlaXZlUHJvcHMocHJvcHMpO1xuICAgICAgdGhpcy5yZWNlaXZlVHlwZShnZXRUeXBlKHByb3BzKSk7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5yZWNlaXZlVHlwZSA9IGZ1bmN0aW9uIHJlY2VpdmVUeXBlKHR5cGUpIHtcbiAgICAgIGlmICh0eXBlID09PSB0aGlzLmN1cnJlbnRUeXBlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IHR5cGU7XG5cbiAgICAgIHZhciBfcmVnaXN0ZXJIYW5kbGVyID0gcmVnaXN0ZXJIYW5kbGVyKHR5cGUsIHRoaXMuaGFuZGxlciwgdGhpcy5tYW5hZ2VyKTtcblxuICAgICAgdmFyIGhhbmRsZXJJZCA9IF9yZWdpc3RlckhhbmRsZXIuaGFuZGxlcklkO1xuICAgICAgdmFyIHVucmVnaXN0ZXIgPSBfcmVnaXN0ZXJIYW5kbGVyLnVucmVnaXN0ZXI7XG5cbiAgICAgIHRoaXMuaGFuZGxlcklkID0gaGFuZGxlcklkO1xuICAgICAgdGhpcy5oYW5kbGVyTW9uaXRvci5yZWNlaXZlSGFuZGxlcklkKGhhbmRsZXJJZCk7XG4gICAgICB0aGlzLmhhbmRsZXJDb25uZWN0b3IucmVjZWl2ZUhhbmRsZXJJZChoYW5kbGVySWQpO1xuXG4gICAgICB2YXIgZ2xvYmFsTW9uaXRvciA9IHRoaXMubWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgICB2YXIgdW5zdWJzY3JpYmUgPSBnbG9iYWxNb25pdG9yLnN1YnNjcmliZVRvU3RhdGVDaGFuZ2UodGhpcy5oYW5kbGVDaGFuZ2UsIHsgaGFuZGxlcklkczogW2hhbmRsZXJJZF0gfSk7XG5cbiAgICAgIHRoaXMuZGlzcG9zYWJsZS5zZXREaXNwb3NhYmxlKG5ldyBfZGlzcG9zYWJsZXMuQ29tcG9zaXRlRGlzcG9zYWJsZShuZXcgX2Rpc3Bvc2FibGVzLkRpc3Bvc2FibGUodW5zdWJzY3JpYmUpLCBuZXcgX2Rpc3Bvc2FibGVzLkRpc3Bvc2FibGUodW5yZWdpc3RlcikpKTtcbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgIGlmICghdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV4dFN0YXRlID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcbiAgICAgIGlmICghX3V0aWxzU2hhbGxvd0VxdWFsMlsnZGVmYXVsdCddKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICB0aGlzLmRpc3Bvc2FibGUuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5oYW5kbGVyQ29ubmVjdG9yLnJlY2VpdmVIYW5kbGVySWQobnVsbCk7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5oYW5kbGVDaGlsZFJlZiA9IGZ1bmN0aW9uIGhhbmRsZUNoaWxkUmVmKGNvbXBvbmVudCkge1xuICAgICAgdGhpcy5kZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSA9IGNvbXBvbmVudDtcbiAgICAgIHRoaXMuaGFuZGxlci5yZWNlaXZlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5nZXRDdXJyZW50U3RhdGUgPSBmdW5jdGlvbiBnZXRDdXJyZW50U3RhdGUoKSB7XG4gICAgICB2YXIgbmV4dFN0YXRlID0gY29sbGVjdCh0aGlzLmhhbmRsZXJDb25uZWN0b3IuaG9va3MsIHRoaXMuaGFuZGxlck1vbml0b3IpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF9sb2Rhc2hJc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKG5leHRTdGF0ZSksICdFeHBlY3RlZCBgY29sbGVjdGAgc3BlY2lmaWVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gJyArICclcyBmb3IgJXMgdG8gcmV0dXJuIGEgcGxhaW4gb2JqZWN0IG9mIHByb3BzIHRvIGluamVjdC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4nLCBjb250YWluZXJEaXNwbGF5TmFtZSwgZGlzcGxheU5hbWUsIG5leHRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoRGVjb3JhdGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSwge1xuICAgICAgICByZWY6IHRoaXMuaGFuZGxlQ2hpbGRSZWYgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRHJhZ0Ryb3BDb250YWluZXI7XG4gIH0pKF9yZWFjdC5Db21wb25lbnQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2RlY29yYXRlSGFuZGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDExOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNEaXNwb3NhYmxlMiA9IHJlcXVpcmUoJy4vaXNEaXNwb3NhYmxlJyk7XG5cbnZhciBfaXNEaXNwb3NhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pc0Rpc3Bvc2FibGUyKTtcblxuZXhwb3J0cy5pc0Rpc3Bvc2FibGUgPSBfaXNEaXNwb3NhYmxlM1snZGVmYXVsdCddO1xuXG52YXIgX0Rpc3Bvc2FibGUyID0gcmVxdWlyZSgnLi9EaXNwb3NhYmxlJyk7XG5cbnZhciBfRGlzcG9zYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfRGlzcG9zYWJsZTIpO1xuXG5leHBvcnRzLkRpc3Bvc2FibGUgPSBfRGlzcG9zYWJsZTNbJ2RlZmF1bHQnXTtcblxudmFyIF9Db21wb3NpdGVEaXNwb3NhYmxlMiA9IHJlcXVpcmUoJy4vQ29tcG9zaXRlRGlzcG9zYWJsZScpO1xuXG52YXIgX0NvbXBvc2l0ZURpc3Bvc2FibGUzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX0NvbXBvc2l0ZURpc3Bvc2FibGUyKTtcblxuZXhwb3J0cy5Db21wb3NpdGVEaXNwb3NhYmxlID0gX0NvbXBvc2l0ZURpc3Bvc2FibGUzWydkZWZhdWx0J107XG5cbnZhciBfU2VyaWFsRGlzcG9zYWJsZTIgPSByZXF1aXJlKCcuL1NlcmlhbERpc3Bvc2FibGUnKTtcblxudmFyIF9TZXJpYWxEaXNwb3NhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9TZXJpYWxEaXNwb3NhYmxlMik7XG5cbmV4cG9ydHMuU2VyaWFsRGlzcG9zYWJsZSA9IF9TZXJpYWxEaXNwb3NhYmxlM1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGlzRGlzcG9zYWJsZTtcblxuZnVuY3Rpb24gaXNEaXNwb3NhYmxlKG9iaikge1xuICByZXR1cm4gQm9vbGVhbihvYmogJiYgdHlwZW9mIG9iai5kaXNwb3NlID09PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9pc0Rpc3Bvc2FibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG4vKipcbiAqIFRoZSBiYXNpYyBkaXNwb3NhYmxlLlxuICovXG5cbnZhciBEaXNwb3NhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRGlzcG9zYWJsZShhY3Rpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlzcG9zYWJsZSk7XG5cbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbiB8fCBub29wO1xuICB9XG5cbiAgRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHRoaXMuYWN0aW9uLmNhbGwobnVsbCk7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoRGlzcG9zYWJsZSwgbnVsbCwgW3tcbiAgICBrZXk6IFwiZW1wdHlcIixcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB7IGRpc3Bvc2U6IG5vb3AgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERpc3Bvc2FibGU7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERpc3Bvc2FibGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvRGlzcG9zYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH07XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNEaXNwb3NhYmxlID0gcmVxdWlyZSgnLi9pc0Rpc3Bvc2FibGUnKTtcblxudmFyIF9pc0Rpc3Bvc2FibGUyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2lzRGlzcG9zYWJsZSk7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGdyb3VwIG9mIGRpc3Bvc2FibGUgcmVzb3VyY2VzIHRoYXQgYXJlIGRpc3Bvc2VkIHRvZ2V0aGVyLlxuICovXG5cbnZhciBDb21wb3NpdGVEaXNwb3NhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29tcG9zaXRlRGlzcG9zYWJsZSgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZGlzcG9zYWJsZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGRpc3Bvc2FibGVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb3NpdGVEaXNwb3NhYmxlKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRpc3Bvc2FibGVzWzBdKSAmJiBkaXNwb3NhYmxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGRpc3Bvc2FibGVzID0gZGlzcG9zYWJsZXNbMF07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXNwb3NhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFfaXNEaXNwb3NhYmxlMlsnZGVmYXVsdCddKGRpc3Bvc2FibGVzW2ldKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGEgZGlzcG9zYWJsZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZGlzcG9zYWJsZXMgPSBkaXNwb3NhYmxlcztcbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZGlzcG9zYWJsZSB0byB0aGUgQ29tcG9zaXRlRGlzcG9zYWJsZSBvciBkaXNwb3NlcyB0aGUgZGlzcG9zYWJsZSBpZiB0aGUgQ29tcG9zaXRlRGlzcG9zYWJsZSBpcyBkaXNwb3NlZC5cbiAgICogQHBhcmFtIHtEaXNwb3NhYmxlfSBpdGVtIERpc3Bvc2FibGUgdG8gYWRkLlxuICAgKi9cblxuICBDb21wb3NpdGVEaXNwb3NhYmxlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQoaXRlbSkge1xuICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIGl0ZW0uZGlzcG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3Bvc2FibGVzLnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuZCBkaXNwb3NlcyB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhIGRpc3Bvc2FibGUgZnJvbSB0aGUgQ29tcG9zaXRlRGlzcG9zYWJsZS5cbiAgICogQHBhcmFtIHtEaXNwb3NhYmxlfSBpdGVtIERpc3Bvc2FibGUgdG8gcmVtb3ZlLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBmb3VuZDsgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cblxuICBDb21wb3NpdGVEaXNwb3NhYmxlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoaXRlbSkge1xuICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLmRpc3Bvc2FibGVzLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuZGlzcG9zYWJsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpdGVtLmRpc3Bvc2UoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogRGlzcG9zZXMgYWxsIGRpc3Bvc2FibGVzIGluIHRoZSBncm91cCBhbmQgcmVtb3ZlcyB0aGVtIGZyb20gdGhlIGdyb3VwLlxuICAgKi9cblxuICBDb21wb3NpdGVEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxlbiA9IHRoaXMuZGlzcG9zYWJsZXMubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50RGlzcG9zYWJsZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjdXJyZW50RGlzcG9zYWJsZXNbaV0gPSB0aGlzLmRpc3Bvc2FibGVzW2ldO1xuICAgIH1cblxuICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgdGhpcy5kaXNwb3NhYmxlcyA9IFtdO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGN1cnJlbnREaXNwb3NhYmxlc1tpXS5kaXNwb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDb21wb3NpdGVEaXNwb3NhYmxlO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ29tcG9zaXRlRGlzcG9zYWJsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvQ29tcG9zaXRlRGlzcG9zYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH07XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNEaXNwb3NhYmxlID0gcmVxdWlyZSgnLi9pc0Rpc3Bvc2FibGUnKTtcblxudmFyIF9pc0Rpc3Bvc2FibGUyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2lzRGlzcG9zYWJsZSk7XG5cbnZhciBTZXJpYWxEaXNwb3NhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2VyaWFsRGlzcG9zYWJsZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VyaWFsRGlzcG9zYWJsZSk7XG5cbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZS5cbiAgICogQHJldHVybiBUaGUgdW5kZXJseWluZyBkaXNwb3NhYmxlLlxuICAgKi9cblxuICBTZXJpYWxEaXNwb3NhYmxlLnByb3RvdHlwZS5nZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gZ2V0RGlzcG9zYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB1bmRlcmx5aW5nIGRpc3Bvc2FibGUuXG4gICAqIEBwYXJhbSB7RGlzcG9zYWJsZX0gdmFsdWUgVGhlIG5ldyB1bmRlcmx5aW5nIGRpc3Bvc2FibGUuXG4gICAqL1xuXG4gIFNlcmlhbERpc3Bvc2FibGUucHJvdG90eXBlLnNldERpc3Bvc2FibGUgPSBmdW5jdGlvbiBzZXREaXNwb3NhYmxlKCkge1xuICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1swXTtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICFfaXNEaXNwb3NhYmxlMlsnZGVmYXVsdCddKHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBlaXRoZXIgYW4gZW1wdHkgdmFsdWUgb3IgYSB2YWxpZCBkaXNwb3NhYmxlJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzRGlzcG9zZWQgPSB0aGlzLmlzRGlzcG9zZWQ7XG4gICAgdmFyIHByZXZpb3VzID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFpc0Rpc3Bvc2VkKSB7XG4gICAgICBwcmV2aW91cyA9IHRoaXMuY3VycmVudDtcbiAgICAgIHRoaXMuY3VycmVudCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgcHJldmlvdXMuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3Bvc2VkICYmIHZhbHVlKSB7XG4gICAgICB2YWx1ZS5kaXNwb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwb3NlcyB0aGUgdW5kZXJseWluZyBkaXNwb3NhYmxlIGFzIHdlbGwgYXMgYWxsIGZ1dHVyZSByZXBsYWNlbWVudHMuXG4gICAqL1xuXG4gIFNlcmlhbERpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgIHZhciBwcmV2aW91cyA9IHRoaXMuY3VycmVudDtcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICBwcmV2aW91cy5kaXNwb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTZXJpYWxEaXNwb3NhYmxlO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2VyaWFsRGlzcG9zYWJsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvU2VyaWFsRGlzcG9zYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJlZ2lzdGVyU291cmNlO1xuXG5mdW5jdGlvbiByZWdpc3RlclNvdXJjZSh0eXBlLCBzb3VyY2UsIG1hbmFnZXIpIHtcbiAgdmFyIHJlZ2lzdHJ5ID0gbWFuYWdlci5nZXRSZWdpc3RyeSgpO1xuICB2YXIgc291cmNlSWQgPSByZWdpc3RyeS5hZGRTb3VyY2UodHlwZSwgc291cmNlKTtcblxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyU291cmNlKCkge1xuICAgIHJlZ2lzdHJ5LnJlbW92ZVNvdXJjZShzb3VyY2VJZCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhbmRsZXJJZDogc291cmNlSWQsXG4gICAgdW5yZWdpc3RlcjogdW5yZWdpc3RlclNvdXJjZVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvcmVnaXN0ZXJTb3VyY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVNvdXJjZUZhY3Rvcnk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc1BsYWluT2JqZWN0KTtcblxudmFyIEFMTE9XRURfU1BFQ19NRVRIT0RTID0gWydjYW5EcmFnJywgJ2JlZ2luRHJhZycsICdjYW5EcmFnJywgJ2lzRHJhZ2dpbmcnLCAnZW5kRHJhZyddO1xudmFyIFJFUVVJUkVEX1NQRUNfTUVUSE9EUyA9IFsnYmVnaW5EcmFnJ107XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZUZhY3Rvcnkoc3BlYykge1xuICBPYmplY3Qua2V5cyhzcGVjKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKEFMTE9XRURfU1BFQ19NRVRIT0RTLmluZGV4T2Yoa2V5KSA+IC0xLCAnRXhwZWN0ZWQgdGhlIGRyYWcgc291cmNlIHNwZWNpZmljYXRpb24gdG8gb25seSBoYXZlICcgKyAnc29tZSBvZiB0aGUgZm9sbG93aW5nIGtleXM6ICVzLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgYSBzcGVjaWZpY2F0aW9uIHdpdGggYW4gdW5leHBlY3RlZCBcIiVzXCIga2V5LiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBBTExPV0VEX1NQRUNfTUVUSE9EUy5qb2luKCcsICcpLCBrZXkpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHNwZWNba2V5XSA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkICVzIGluIHRoZSBkcmFnIHNvdXJjZSBzcGVjaWZpY2F0aW9uIHRvIGJlIGEgZnVuY3Rpb24uICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCAlczogJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGtleSwga2V5LCBzcGVjW2tleV0pO1xuICB9KTtcbiAgUkVRVUlSRURfU1BFQ19NRVRIT0RTLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHNwZWNba2V5XSA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkICVzIGluIHRoZSBkcmFnIHNvdXJjZSBzcGVjaWZpY2F0aW9uIHRvIGJlIGEgZnVuY3Rpb24uICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCAlczogJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGtleSwga2V5LCBzcGVjW2tleV0pO1xuICB9KTtcblxuICB2YXIgU291cmNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTb3VyY2UobW9uaXRvcikge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvdXJjZSk7XG5cbiAgICAgIHRoaXMubW9uaXRvciA9IG1vbml0b3I7XG4gICAgICB0aGlzLnByb3BzID0gbnVsbDtcbiAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBTb3VyY2UucHJvdG90eXBlLnJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIHJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIH07XG5cbiAgICBTb3VyY2UucHJvdG90eXBlLnJlY2VpdmVDb21wb25lbnQgPSBmdW5jdGlvbiByZWNlaXZlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIFNvdXJjZS5wcm90b3R5cGUuY2FuRHJhZyA9IGZ1bmN0aW9uIGNhbkRyYWcoKSB7XG4gICAgICBpZiAoIXNwZWMuY2FuRHJhZykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNwZWMuY2FuRHJhZyh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IpO1xuICAgIH07XG5cbiAgICBTb3VyY2UucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbiBpc0RyYWdnaW5nKGdsb2JhbE1vbml0b3IsIHNvdXJjZUlkKSB7XG4gICAgICBpZiAoIXNwZWMuaXNEcmFnZ2luZykge1xuICAgICAgICByZXR1cm4gc291cmNlSWQgPT09IGdsb2JhbE1vbml0b3IuZ2V0U291cmNlSWQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNwZWMuaXNEcmFnZ2luZyh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IpO1xuICAgIH07XG5cbiAgICBTb3VyY2UucHJvdG90eXBlLmJlZ2luRHJhZyA9IGZ1bmN0aW9uIGJlZ2luRHJhZygpIHtcbiAgICAgIHZhciBpdGVtID0gc3BlYy5iZWdpbkRyYWcodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yLCB0aGlzLmNvbXBvbmVudCk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF9sb2Rhc2hJc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKGl0ZW0pLCAnYmVnaW5EcmFnKCkgbXVzdCByZXR1cm4gYSBwbGFpbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBkcmFnZ2VkIGl0ZW0uICcgKyAnSW5zdGVhZCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgaXRlbSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuXG4gICAgU291cmNlLnByb3RvdHlwZS5lbmREcmFnID0gZnVuY3Rpb24gZW5kRHJhZygpIHtcbiAgICAgIGlmICghc3BlYy5lbmREcmFnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3BlYy5lbmREcmFnKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvciwgdGhpcy5jb21wb25lbnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU291cmNlO1xuICB9KSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVTb3VyY2UobW9uaXRvcikge1xuICAgIHJldHVybiBuZXcgU291cmNlKG1vbml0b3IpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVNvdXJjZUZhY3RvcnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVNvdXJjZU1vbml0b3I7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBpc0NhbGxpbmdDYW5EcmFnID0gZmFsc2U7XG52YXIgaXNDYWxsaW5nSXNEcmFnZ2luZyA9IGZhbHNlO1xuXG52YXIgU291cmNlTW9uaXRvciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNvdXJjZU1vbml0b3IobWFuYWdlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb3VyY2VNb25pdG9yKTtcblxuICAgIHRoaXMuaW50ZXJuYWxNb25pdG9yID0gbWFuYWdlci5nZXRNb25pdG9yKCk7XG4gIH1cblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5yZWNlaXZlSGFuZGxlcklkID0gZnVuY3Rpb24gcmVjZWl2ZUhhbmRsZXJJZChzb3VyY2VJZCkge1xuICAgIHRoaXMuc291cmNlSWQgPSBzb3VyY2VJZDtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5jYW5EcmFnID0gZnVuY3Rpb24gY2FuRHJhZygpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKCFpc0NhbGxpbmdDYW5EcmFnLCAnWW91IG1heSBub3QgY2FsbCBtb25pdG9yLmNhbkRyYWcoKSBpbnNpZGUgeW91ciBjYW5EcmFnKCkgaW1wbGVtZW50YXRpb24uICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UtbW9uaXRvci5odG1sJyk7XG5cbiAgICB0cnkge1xuICAgICAgaXNDYWxsaW5nQ2FuRHJhZyA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuY2FuRHJhZ1NvdXJjZSh0aGlzLnNvdXJjZUlkKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNDYWxsaW5nQ2FuRHJhZyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKCFpc0NhbGxpbmdJc0RyYWdnaW5nLCAnWW91IG1heSBub3QgY2FsbCBtb25pdG9yLmlzRHJhZ2dpbmcoKSBpbnNpZGUgeW91ciBpc0RyYWdnaW5nKCkgaW1wbGVtZW50YXRpb24uICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UtbW9uaXRvci5odG1sJyk7XG5cbiAgICB0cnkge1xuICAgICAgaXNDYWxsaW5nSXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuaXNEcmFnZ2luZ1NvdXJjZSh0aGlzLnNvdXJjZUlkKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNDYWxsaW5nSXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRJdGVtVHlwZSA9IGZ1bmN0aW9uIGdldEl0ZW1UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJdGVtVHlwZSgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbiBnZXRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJdGVtKCk7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0RHJvcFJlc3VsdCA9IGZ1bmN0aW9uIGdldERyb3BSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldERyb3BSZXN1bHQoKTtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5kaWREcm9wID0gZnVuY3Rpb24gZGlkRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZGlkRHJvcCgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldEluaXRpYWxDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCk7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKTtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRTb3VyY2VDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRTb3VyY2VDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldFNvdXJjZUNsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldENsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldENsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0Q2xpZW50T2Zmc2V0KCk7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0ID0gZnVuY3Rpb24gZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKTtcbiAgfTtcblxuICByZXR1cm4gU291cmNlTW9uaXRvcjtcbn0pKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZU1vbml0b3IobWFuYWdlcikge1xuICByZXR1cm4gbmV3IFNvdXJjZU1vbml0b3IobWFuYWdlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlTW9uaXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlU291cmNlQ29ubmVjdG9yO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd3JhcENvbm5lY3Rvckhvb2tzID0gcmVxdWlyZSgnLi93cmFwQ29ubmVjdG9ySG9va3MnKTtcblxudmFyIF93cmFwQ29ubmVjdG9ySG9va3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd3JhcENvbm5lY3Rvckhvb2tzKTtcblxudmFyIF9hcmVPcHRpb25zRXF1YWwgPSByZXF1aXJlKCcuL2FyZU9wdGlvbnNFcXVhbCcpO1xuXG52YXIgX2FyZU9wdGlvbnNFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcmVPcHRpb25zRXF1YWwpO1xuXG5mdW5jdGlvbiBjcmVhdGVTb3VyY2VDb25uZWN0b3IoYmFja2VuZCkge1xuICB2YXIgY3VycmVudEhhbmRsZXJJZCA9IHVuZGVmaW5lZDtcblxuICB2YXIgY3VycmVudERyYWdTb3VyY2VOb2RlID0gdW5kZWZpbmVkO1xuICB2YXIgY3VycmVudERyYWdTb3VyY2VPcHRpb25zID0gdW5kZWZpbmVkO1xuICB2YXIgZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlID0gdW5kZWZpbmVkO1xuXG4gIHZhciBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlID0gdW5kZWZpbmVkO1xuICB2YXIgY3VycmVudERyYWdQcmV2aWV3T3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdmFyIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcgPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gcmVjb25uZWN0RHJhZ1NvdXJjZSgpIHtcbiAgICBpZiAoZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlKSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdTb3VyY2UoKTtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRIYW5kbGVySWQgJiYgY3VycmVudERyYWdTb3VyY2VOb2RlKSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdTb3VyY2UgPSBiYWNrZW5kLmNvbm5lY3REcmFnU291cmNlKGN1cnJlbnRIYW5kbGVySWQsIGN1cnJlbnREcmFnU291cmNlTm9kZSwgY3VycmVudERyYWdTb3VyY2VPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNvbm5lY3REcmFnUHJldmlldygpIHtcbiAgICBpZiAoZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldykge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldygpO1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRIYW5kbGVySWQgJiYgY3VycmVudERyYWdQcmV2aWV3Tm9kZSkge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldyA9IGJhY2tlbmQuY29ubmVjdERyYWdQcmV2aWV3KGN1cnJlbnRIYW5kbGVySWQsIGN1cnJlbnREcmFnUHJldmlld05vZGUsIGN1cnJlbnREcmFnUHJldmlld09wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVIYW5kbGVySWQoaGFuZGxlcklkKSB7XG4gICAgaWYgKGhhbmRsZXJJZCA9PT0gY3VycmVudEhhbmRsZXJJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN1cnJlbnRIYW5kbGVySWQgPSBoYW5kbGVySWQ7XG4gICAgcmVjb25uZWN0RHJhZ1NvdXJjZSgpO1xuICAgIHJlY29ubmVjdERyYWdQcmV2aWV3KCk7XG4gIH1cblxuICB2YXIgaG9va3MgPSBfd3JhcENvbm5lY3Rvckhvb2tzMlsnZGVmYXVsdCddKHtcbiAgICBkcmFnU291cmNlOiBmdW5jdGlvbiBjb25uZWN0RHJhZ1NvdXJjZShub2RlLCBvcHRpb25zKSB7XG4gICAgICBpZiAobm9kZSA9PT0gY3VycmVudERyYWdTb3VyY2VOb2RlICYmIF9hcmVPcHRpb25zRXF1YWwyWydkZWZhdWx0J10ob3B0aW9ucywgY3VycmVudERyYWdTb3VyY2VPcHRpb25zKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnREcmFnU291cmNlTm9kZSA9IG5vZGU7XG4gICAgICBjdXJyZW50RHJhZ1NvdXJjZU9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICByZWNvbm5lY3REcmFnU291cmNlKCk7XG4gICAgfSxcblxuICAgIGRyYWdQcmV2aWV3OiBmdW5jdGlvbiBjb25uZWN0RHJhZ1ByZXZpZXcobm9kZSwgb3B0aW9ucykge1xuICAgICAgaWYgKG5vZGUgPT09IGN1cnJlbnREcmFnUHJldmlld05vZGUgJiYgX2FyZU9wdGlvbnNFcXVhbDJbJ2RlZmF1bHQnXShvcHRpb25zLCBjdXJyZW50RHJhZ1ByZXZpZXdPcHRpb25zKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnREcmFnUHJldmlld05vZGUgPSBub2RlO1xuICAgICAgY3VycmVudERyYWdQcmV2aWV3T3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIHJlY29ubmVjdERyYWdQcmV2aWV3KCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHJlY2VpdmVIYW5kbGVySWQ6IHJlY2VpdmVIYW5kbGVySWQsXG4gICAgaG9va3M6IGhvb2tzXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlQ29ubmVjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSB3cmFwQ29ubmVjdG9ySG9va3M7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlsc0Nsb25lV2l0aFJlZiA9IHJlcXVpcmUoJy4vdXRpbHMvY2xvbmVXaXRoUmVmJyk7XG5cbnZhciBfdXRpbHNDbG9uZVdpdGhSZWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDbG9uZVdpdGhSZWYpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gdGhyb3dJZkNvbXBvc2l0ZUNvbXBvbmVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyBDdXN0b20gY29tcG9uZW50cyBjYW4gbm8gbG9uZ2VyIGJlIHdyYXBwZWQgZGlyZWN0bHkgaW4gUmVhY3QgRG5EIDIuMFxuICAvLyBzbyB0aGF0IHdlIGRvbid0IG5lZWQgdG8gZGVwZW5kIG9uIGZpbmRET01Ob2RlKCkgZnJvbSByZWFjdC1kb20uXG4gIGlmICh0eXBlb2YgZWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBkaXNwbGF5TmFtZSA9IGVsZW1lbnQudHlwZS5kaXNwbGF5TmFtZSB8fCBlbGVtZW50LnR5cGUubmFtZSB8fCAndGhlIGNvbXBvbmVudCc7XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IG5hdGl2ZSBlbGVtZW50IG5vZGVzIGNhbiBub3cgYmUgcGFzc2VkIHRvIFJlYWN0IERuRCBjb25uZWN0b3JzLiAnICsgKCdZb3UgY2FuIGVpdGhlciB3cmFwICcgKyBkaXNwbGF5TmFtZSArICcgaW50byBhIDxkaXY+LCBvciB0dXJuIGl0IGludG8gYSAnKSArICdkcmFnIHNvdXJjZSBvciBhIGRyb3AgdGFyZ2V0IGl0c2VsZi4nKTtcbn1cblxuZnVuY3Rpb24gd3JhcEhvb2tUb1JlY29nbml6ZUVsZW1lbnQoaG9vaykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbGVtZW50T3JOb2RlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMV07XG5cbiAgICAvLyBXaGVuIHBhc3NlZCBhIG5vZGUsIGNhbGwgdGhlIGhvb2sgc3RyYWlnaHQgYXdheS5cbiAgICBpZiAoIV9yZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50T3JOb2RlKSkge1xuICAgICAgdmFyIG5vZGUgPSBlbGVtZW50T3JOb2RlO1xuICAgICAgaG9vayhub2RlLCBvcHRpb25zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBwYXNzZWQgYSBSZWFjdEVsZW1lbnQsIGNsb25lIGl0IGFuZCBhdHRhY2ggdGhpcyBmdW5jdGlvbiBhcyBhIHJlZi5cbiAgICAvLyBUaGlzIGhlbHBzIHVzIGFjaGlldmUgYSBuZWF0IEFQSSB3aGVyZSB1c2VyIGRvZXNuJ3QgZXZlbiBrbm93IHRoYXQgcmVmc1xuICAgIC8vIGFyZSBiZWluZyB1c2VkIHVuZGVyIHRoZSBob29kLlxuICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yTm9kZTtcbiAgICB0aHJvd0lmQ29tcG9zaXRlQ29tcG9uZW50RWxlbWVudChlbGVtZW50KTtcblxuICAgIC8vIFdoZW4gbm8gb3B0aW9ucyBhcmUgcGFzc2VkLCB1c2UgdGhlIGhvb2sgZGlyZWN0bHlcbiAgICB2YXIgcmVmID0gb3B0aW9ucyA/IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICByZXR1cm4gaG9vayhub2RlLCBvcHRpb25zKTtcbiAgICB9IDogaG9vaztcblxuICAgIHJldHVybiBfdXRpbHNDbG9uZVdpdGhSZWYyWydkZWZhdWx0J10oZWxlbWVudCwgcmVmKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbm5lY3Rvckhvb2tzKGhvb2tzKSB7XG4gIHZhciB3cmFwcGVkSG9va3MgPSB7fTtcblxuICBPYmplY3Qua2V5cyhob29rcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGhvb2sgPSBob29rc1trZXldO1xuICAgIHZhciB3cmFwcGVkSG9vayA9IHdyYXBIb29rVG9SZWNvZ25pemVFbGVtZW50KGhvb2spO1xuICAgIHdyYXBwZWRIb29rc1trZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdyYXBwZWRIb29rO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB3cmFwcGVkSG9va3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvd3JhcENvbm5lY3Rvckhvb2tzLmpzXG4gKiogbW9kdWxlIGlkID0gMTI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjbG9uZVdpdGhSZWY7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIGNsb25lV2l0aFJlZihlbGVtZW50LCBuZXdSZWYpIHtcbiAgdmFyIHByZXZpb3VzUmVmID0gZWxlbWVudC5yZWY7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHByZXZpb3VzUmVmICE9PSAnc3RyaW5nJywgJ0Nhbm5vdCBjb25uZWN0IFJlYWN0IERuRCB0byBhbiBlbGVtZW50IHdpdGggYW4gZXhpc3Rpbmcgc3RyaW5nIHJlZi4gJyArICdQbGVhc2UgY29udmVydCBpdCB0byB1c2UgYSBjYWxsYmFjayByZWYgaW5zdGVhZCwgb3Igd3JhcCBpdCBpbnRvIGEgPHNwYW4+IG9yIDxkaXY+LiAnICsgJ1JlYWQgbW9yZTogaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9tb3JlLWFib3V0LXJlZnMuaHRtbCN0aGUtcmVmLWNhbGxiYWNrLWF0dHJpYnV0ZScpO1xuXG4gIGlmICghcHJldmlvdXNSZWYpIHtcbiAgICAvLyBXaGVuIHRoZXJlIGlzIG5vIHJlZiBvbiB0aGUgZWxlbWVudCwgdXNlIHRoZSBuZXcgcmVmIGRpcmVjdGx5XG4gICAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQoZWxlbWVudCwge1xuICAgICAgcmVmOiBuZXdSZWZcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBfcmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICBuZXdSZWYobm9kZSk7XG5cbiAgICAgIGlmIChwcmV2aW91c1JlZikge1xuICAgICAgICBwcmV2aW91c1JlZihub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL2Nsb25lV2l0aFJlZi5qc1xuICoqIG1vZHVsZSBpZCA9IDEzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gYXJlT3B0aW9uc0VxdWFsO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWwgPSByZXF1aXJlKCcuL3V0aWxzL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzU2hhbGxvd0VxdWFsKTtcblxuZnVuY3Rpb24gYXJlT3B0aW9uc0VxdWFsKG5leHRPcHRpb25zLCBjdXJyZW50T3B0aW9ucykge1xuICBpZiAoY3VycmVudE9wdGlvbnMgPT09IG5leHRPcHRpb25zKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gY3VycmVudE9wdGlvbnMgIT09IG51bGwgJiYgbmV4dE9wdGlvbnMgIT09IG51bGwgJiYgX3V0aWxzU2hhbGxvd0VxdWFsMlsnZGVmYXVsdCddKGN1cnJlbnRPcHRpb25zLCBuZXh0T3B0aW9ucyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvYXJlT3B0aW9uc0VxdWFsLmpzXG4gKiogbW9kdWxlIGlkID0gMTMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBpc1ZhbGlkVHlwZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaElzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNBcnJheSk7XG5cbmZ1bmN0aW9uIGlzVmFsaWRUeXBlKHR5cGUsIGFsbG93QXJyYXkpIHtcbiAgICAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnc3ltYm9sJyB8fCBhbGxvd0FycmF5ICYmIF9sb2Rhc2hJc0FycmF5MlsnZGVmYXVsdCddKHR5cGUpICYmIHR5cGUuZXZlcnkoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWRUeXBlKHQsIGZhbHNlKTtcbiAgICAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi91dGlscy9pc1ZhbGlkVHlwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL34vbG9kYXNoL2lzQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBfc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5leHBvcnRzWydkZWZhdWx0J10gPSBEcm9wVGFyZ2V0O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc1BsYWluT2JqZWN0KTtcblxudmFyIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzID0gcmVxdWlyZSgnLi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cycpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50cyk7XG5cbnZhciBfZGVjb3JhdGVIYW5kbGVyID0gcmVxdWlyZSgnLi9kZWNvcmF0ZUhhbmRsZXInKTtcblxudmFyIF9kZWNvcmF0ZUhhbmRsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVjb3JhdGVIYW5kbGVyKTtcblxudmFyIF9yZWdpc3RlclRhcmdldCA9IHJlcXVpcmUoJy4vcmVnaXN0ZXJUYXJnZXQnKTtcblxudmFyIF9yZWdpc3RlclRhcmdldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWdpc3RlclRhcmdldCk7XG5cbnZhciBfY3JlYXRlVGFyZ2V0RmFjdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlVGFyZ2V0RmFjdG9yeScpO1xuXG52YXIgX2NyZWF0ZVRhcmdldEZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVGFyZ2V0RmFjdG9yeSk7XG5cbnZhciBfY3JlYXRlVGFyZ2V0TW9uaXRvciA9IHJlcXVpcmUoJy4vY3JlYXRlVGFyZ2V0TW9uaXRvcicpO1xuXG52YXIgX2NyZWF0ZVRhcmdldE1vbml0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVGFyZ2V0TW9uaXRvcik7XG5cbnZhciBfY3JlYXRlVGFyZ2V0Q29ubmVjdG9yID0gcmVxdWlyZSgnLi9jcmVhdGVUYXJnZXRDb25uZWN0b3InKTtcblxudmFyIF9jcmVhdGVUYXJnZXRDb25uZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVGFyZ2V0Q29ubmVjdG9yKTtcblxudmFyIF91dGlsc0lzVmFsaWRUeXBlID0gcmVxdWlyZSgnLi91dGlscy9pc1ZhbGlkVHlwZScpO1xuXG52YXIgX3V0aWxzSXNWYWxpZFR5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNJc1ZhbGlkVHlwZSk7XG5cbmZ1bmN0aW9uIERyb3BUYXJnZXQodHlwZSwgc3BlYywgY29sbGVjdCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzNdO1xuXG4gIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMlsnZGVmYXVsdCddLmFwcGx5KHVuZGVmaW5lZCwgWydEcm9wVGFyZ2V0JywgJ3R5cGUsIHNwZWMsIGNvbGxlY3RbLCBvcHRpb25zXSddLmNvbmNhdChfc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gIHZhciBnZXRUeXBlID0gdHlwZTtcbiAgaWYgKHR5cGVvZiB0eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfdXRpbHNJc1ZhbGlkVHlwZTJbJ2RlZmF1bHQnXSh0eXBlLCB0cnVlKSwgJ0V4cGVjdGVkIFwidHlwZVwiIHByb3ZpZGVkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBEcm9wVGFyZ2V0IHRvIGJlICcgKyAnYSBzdHJpbmcsIGFuIGFycmF5IG9mIHN0cmluZ3MsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlciBnaXZlbiAnICsgJ3RoZSBjdXJyZW50IHByb3BzLiBJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgdHlwZSk7XG4gICAgZ2V0VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH07XG4gIH1cbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShzcGVjKSwgJ0V4cGVjdGVkIFwic3BlY1wiIHByb3ZpZGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gRHJvcFRhcmdldCB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgc3BlYyk7XG4gIHZhciBjcmVhdGVUYXJnZXQgPSBfY3JlYXRlVGFyZ2V0RmFjdG9yeTJbJ2RlZmF1bHQnXShzcGVjKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgY29sbGVjdCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIFwiY29sbGVjdFwiIHByb3ZpZGVkIGFzIHRoZSB0aGlyZCBhcmd1bWVudCB0byBEcm9wVGFyZ2V0IHRvIGJlICcgKyAnYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwbGFpbiBvYmplY3Qgb2YgcHJvcHMgdG8gaW5qZWN0LiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBjb2xsZWN0KTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShvcHRpb25zKSwgJ0V4cGVjdGVkIFwib3B0aW9uc1wiIHByb3ZpZGVkIGFzIHRoZSBmb3VydGggYXJndW1lbnQgdG8gRHJvcFRhcmdldCB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0IHdoZW4gc3BlY2lmaWVkLiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBjb2xsZWN0KTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGVUYXJnZXQoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIF9kZWNvcmF0ZUhhbmRsZXIyWydkZWZhdWx0J10oe1xuICAgICAgY29ubmVjdEJhY2tlbmQ6IGZ1bmN0aW9uIGNvbm5lY3RCYWNrZW5kKGJhY2tlbmQsIHRhcmdldElkKSB7XG4gICAgICAgIHJldHVybiBiYWNrZW5kLmNvbm5lY3REcm9wVGFyZ2V0KHRhcmdldElkKTtcbiAgICAgIH0sXG4gICAgICBjb250YWluZXJEaXNwbGF5TmFtZTogJ0Ryb3BUYXJnZXQnLFxuICAgICAgY3JlYXRlSGFuZGxlcjogY3JlYXRlVGFyZ2V0LFxuICAgICAgcmVnaXN0ZXJIYW5kbGVyOiBfcmVnaXN0ZXJUYXJnZXQyWydkZWZhdWx0J10sXG4gICAgICBjcmVhdGVNb25pdG9yOiBfY3JlYXRlVGFyZ2V0TW9uaXRvcjJbJ2RlZmF1bHQnXSxcbiAgICAgIGNyZWF0ZUNvbm5lY3RvcjogX2NyZWF0ZVRhcmdldENvbm5lY3RvcjJbJ2RlZmF1bHQnXSxcbiAgICAgIERlY29yYXRlZENvbXBvbmVudDogRGVjb3JhdGVkQ29tcG9uZW50LFxuICAgICAgZ2V0VHlwZTogZ2V0VHlwZSxcbiAgICAgIGNvbGxlY3Q6IGNvbGxlY3QsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvRHJvcFRhcmdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJlZ2lzdGVyVGFyZ2V0O1xuXG5mdW5jdGlvbiByZWdpc3RlclRhcmdldCh0eXBlLCB0YXJnZXQsIG1hbmFnZXIpIHtcbiAgdmFyIHJlZ2lzdHJ5ID0gbWFuYWdlci5nZXRSZWdpc3RyeSgpO1xuICB2YXIgdGFyZ2V0SWQgPSByZWdpc3RyeS5hZGRUYXJnZXQodHlwZSwgdGFyZ2V0KTtcblxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyVGFyZ2V0KCkge1xuICAgIHJlZ2lzdHJ5LnJlbW92ZVRhcmdldCh0YXJnZXRJZCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhbmRsZXJJZDogdGFyZ2V0SWQsXG4gICAgdW5yZWdpc3RlcjogdW5yZWdpc3RlclRhcmdldFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvcmVnaXN0ZXJUYXJnZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVRhcmdldEZhY3Rvcnk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc1BsYWluT2JqZWN0KTtcblxudmFyIEFMTE9XRURfU1BFQ19NRVRIT0RTID0gWydjYW5Ecm9wJywgJ2hvdmVyJywgJ2Ryb3AnXTtcblxuZnVuY3Rpb24gY3JlYXRlVGFyZ2V0RmFjdG9yeShzcGVjKSB7XG4gIE9iamVjdC5rZXlzKHNwZWMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oQUxMT1dFRF9TUEVDX01FVEhPRFMuaW5kZXhPZihrZXkpID4gLTEsICdFeHBlY3RlZCB0aGUgZHJvcCB0YXJnZXQgc3BlY2lmaWNhdGlvbiB0byBvbmx5IGhhdmUgJyArICdzb21lIG9mIHRoZSBmb2xsb3dpbmcga2V5czogJXMuICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCBhbiB1bmV4cGVjdGVkIFwiJXNcIiBrZXkuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIEFMTE9XRURfU1BFQ19NRVRIT0RTLmpvaW4oJywgJyksIGtleSk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2Ygc3BlY1trZXldID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgJXMgaW4gdGhlIGRyb3AgdGFyZ2V0IHNwZWNpZmljYXRpb24gdG8gYmUgYSBmdW5jdGlvbi4gJyArICdJbnN0ZWFkIHJlY2VpdmVkIGEgc3BlY2lmaWNhdGlvbiB3aXRoICVzOiAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywga2V5LCBrZXksIHNwZWNba2V5XSk7XG4gIH0pO1xuXG4gIHZhciBUYXJnZXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRhcmdldChtb25pdG9yKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFyZ2V0KTtcblxuICAgICAgdGhpcy5tb25pdG9yID0gbW9uaXRvcjtcbiAgICAgIHRoaXMucHJvcHMgPSBudWxsO1xuICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIFRhcmdldC5wcm90b3R5cGUucmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gcmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfTtcblxuICAgIFRhcmdldC5wcm90b3R5cGUucmVjZWl2ZU1vbml0b3IgPSBmdW5jdGlvbiByZWNlaXZlTW9uaXRvcihtb25pdG9yKSB7XG4gICAgICB0aGlzLm1vbml0b3IgPSBtb25pdG9yO1xuICAgIH07XG5cbiAgICBUYXJnZXQucHJvdG90eXBlLnJlY2VpdmVDb21wb25lbnQgPSBmdW5jdGlvbiByZWNlaXZlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIFRhcmdldC5wcm90b3R5cGUuY2FuRHJvcCA9IGZ1bmN0aW9uIGNhbkRyb3AoKSB7XG4gICAgICBpZiAoIXNwZWMuY2FuRHJvcCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNwZWMuY2FuRHJvcCh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IpO1xuICAgIH07XG5cbiAgICBUYXJnZXQucHJvdG90eXBlLmhvdmVyID0gZnVuY3Rpb24gaG92ZXIoKSB7XG4gICAgICBpZiAoIXNwZWMuaG92ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzcGVjLmhvdmVyKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvciwgdGhpcy5jb21wb25lbnQpO1xuICAgIH07XG5cbiAgICBUYXJnZXQucHJvdG90eXBlLmRyb3AgPSBmdW5jdGlvbiBkcm9wKCkge1xuICAgICAgaWYgKCFzcGVjLmRyb3ApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZHJvcFJlc3VsdCA9IHNwZWMuZHJvcCh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IsIHRoaXMuY29tcG9uZW50KTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGRyb3BSZXN1bHQgPT09ICd1bmRlZmluZWQnIHx8IF9sb2Rhc2hJc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKGRyb3BSZXN1bHQpLCAnZHJvcCgpIG11c3QgZWl0aGVyIHJldHVybiB1bmRlZmluZWQsIG9yIGFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGRyb3AgcmVzdWx0LiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIGRyb3BSZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRyb3BSZXN1bHQ7XG4gICAgfTtcblxuICAgIHJldHVybiBUYXJnZXQ7XG4gIH0pKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVRhcmdldChtb25pdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBUYXJnZXQobW9uaXRvcik7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0RmFjdG9yeS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlVGFyZ2V0TW9uaXRvcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIGlzQ2FsbGluZ0NhbkRyb3AgPSBmYWxzZTtcblxudmFyIFRhcmdldE1vbml0b3IgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUYXJnZXRNb25pdG9yKG1hbmFnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFyZ2V0TW9uaXRvcik7XG5cbiAgICB0aGlzLmludGVybmFsTW9uaXRvciA9IG1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICB9XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUucmVjZWl2ZUhhbmRsZXJJZCA9IGZ1bmN0aW9uIHJlY2VpdmVIYW5kbGVySWQodGFyZ2V0SWQpIHtcbiAgICB0aGlzLnRhcmdldElkID0gdGFyZ2V0SWQ7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuY2FuRHJvcCA9IGZ1bmN0aW9uIGNhbkRyb3AoKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSghaXNDYWxsaW5nQ2FuRHJvcCwgJ1lvdSBtYXkgbm90IGNhbGwgbW9uaXRvci5jYW5Ecm9wKCkgaW5zaWRlIHlvdXIgY2FuRHJvcCgpIGltcGxlbWVudGF0aW9uLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0LW1vbml0b3IuaHRtbCcpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlzQ2FsbGluZ0NhbkRyb3AgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmNhbkRyb3BPblRhcmdldCh0aGlzLnRhcmdldElkKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNDYWxsaW5nQ2FuRHJvcCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5pc092ZXIgPSBmdW5jdGlvbiBpc092ZXIob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5pc092ZXJUYXJnZXQodGhpcy50YXJnZXRJZCwgb3B0aW9ucyk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0SXRlbVR5cGUgPSBmdW5jdGlvbiBnZXRJdGVtVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SXRlbVR5cGUoKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXRJdGVtID0gZnVuY3Rpb24gZ2V0SXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SXRlbSgpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldERyb3BSZXN1bHQgPSBmdW5jdGlvbiBnZXREcm9wUmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZGlkRHJvcCA9IGZ1bmN0aW9uIGRpZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmRpZERyb3AoKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0SW5pdGlhbENsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SW5pdGlhbENsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRTb3VyY2VDbGllbnRPZmZzZXQoKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXRDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldENsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCA9IGZ1bmN0aW9uIGdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCk7XG4gIH07XG5cbiAgcmV0dXJuIFRhcmdldE1vbml0b3I7XG59KSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXJnZXRNb25pdG9yKG1hbmFnZXIpIHtcbiAgcmV0dXJuIG5ldyBUYXJnZXRNb25pdG9yKG1hbmFnZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldE1vbml0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVRhcmdldENvbm5lY3RvcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dyYXBDb25uZWN0b3JIb29rcyA9IHJlcXVpcmUoJy4vd3JhcENvbm5lY3Rvckhvb2tzJyk7XG5cbnZhciBfd3JhcENvbm5lY3Rvckhvb2tzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXBDb25uZWN0b3JIb29rcyk7XG5cbnZhciBfYXJlT3B0aW9uc0VxdWFsID0gcmVxdWlyZSgnLi9hcmVPcHRpb25zRXF1YWwnKTtcblxudmFyIF9hcmVPcHRpb25zRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJlT3B0aW9uc0VxdWFsKTtcblxuZnVuY3Rpb24gY3JlYXRlVGFyZ2V0Q29ubmVjdG9yKGJhY2tlbmQpIHtcbiAgdmFyIGN1cnJlbnRIYW5kbGVySWQgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSA9IHVuZGVmaW5lZDtcbiAgdmFyIGN1cnJlbnREcm9wVGFyZ2V0T3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdmFyIGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiByZWNvbm5lY3REcm9wVGFyZ2V0KCkge1xuICAgIGlmIChkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCgpO1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcm9wVGFyZ2V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudEhhbmRsZXJJZCAmJiBjdXJyZW50RHJvcFRhcmdldE5vZGUpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCA9IGJhY2tlbmQuY29ubmVjdERyb3BUYXJnZXQoY3VycmVudEhhbmRsZXJJZCwgY3VycmVudERyb3BUYXJnZXROb2RlLCBjdXJyZW50RHJvcFRhcmdldE9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVIYW5kbGVySWQoaGFuZGxlcklkKSB7XG4gICAgaWYgKGhhbmRsZXJJZCA9PT0gY3VycmVudEhhbmRsZXJJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN1cnJlbnRIYW5kbGVySWQgPSBoYW5kbGVySWQ7XG4gICAgcmVjb25uZWN0RHJvcFRhcmdldCgpO1xuICB9XG5cbiAgdmFyIGhvb2tzID0gX3dyYXBDb25uZWN0b3JIb29rczJbJ2RlZmF1bHQnXSh7XG4gICAgZHJvcFRhcmdldDogZnVuY3Rpb24gY29ubmVjdERyb3BUYXJnZXQobm9kZSwgb3B0aW9ucykge1xuICAgICAgaWYgKG5vZGUgPT09IGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSAmJiBfYXJlT3B0aW9uc0VxdWFsMlsnZGVmYXVsdCddKG9wdGlvbnMsIGN1cnJlbnREcm9wVGFyZ2V0T3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50RHJvcFRhcmdldE5vZGUgPSBub2RlO1xuICAgICAgY3VycmVudERyb3BUYXJnZXRPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgcmVjb25uZWN0RHJvcFRhcmdldCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICByZWNlaXZlSGFuZGxlcklkOiByZWNlaXZlSGFuZGxlcklkLFxuICAgIGhvb2tzOiBob29rc1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldENvbm5lY3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJhc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIGlmKHRoaXMucHJvcHMuZHJhZ2dpbmdEaXNwbGF5KXtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0bERyYWdnaW5nRGlzcGxheVwiIHN0eWxlPXt7dG9wOiB0aGlzLnByb3BzLmRyYWdnaW5nRGlzcGxheVRvcH19Pnt0aGlzLnByb3BzLmRyYWdnaW5nRGlzcGxheX08L2Rpdj4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgICAge3RoaXMucHJvcHMuZGlzcGxheS5tYXAocm93ID0+IHtcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxFdmVudERpc3BsYXlSb3cnLCByb3cua2V5KX0ga2V5PXtyb3cua2V5fT57cm93LnZhbHVlfTwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICAgICZuYnNwO1xuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5FdmVudEJhc2UuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5OiBbXVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9FdmVudEJhc2UuanN4XG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRBY3Rpb25zXG57XG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudCl7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cblxuICByZXNpemUoKXtcbiAgICB0aGlzLmNvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICByZXNpemFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGZsb2F0KCl7XG4gICAgdGhpcy5jb21wb25lbnQuc2V0U3RhdGUoe1xuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgZHJhZ2dpbmdEaXNwbGF5OiB0aGlzLmNvbXBvbmVudC50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXNwbGF5VGltZSgpXG4gICAgfSk7XG4gIH1cblxuICBpc0ZpeGVkKCl7XG4gICAgcmV0dXJuICF0aGlzLmNvbXBvbmVudC5zdGF0ZS5kcmFnZ2FibGUgJiYgIXRoaXMuY29tcG9uZW50LnN0YXRlLnJlc2l6YWJsZTtcbiAgfVxuXG4gIGlzRml4YWJsZSgpe1xuICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMuY29tcG9uZW50Lm5leHRQb3NpdGlvbjtcbiAgICBpZighbmV3UG9zaXRpb24pe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LmlzRnJlZVBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgfVxuXG4gIGlzQ2FuY2VsYWJsZSgpe1xuICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMuY29tcG9uZW50LnByZXZQb3NpdGlvbjtcbiAgICBpZighbmV3UG9zaXRpb24pe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LmlzRnJlZVBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgfVxuXG4gIGNhbmNlbCgpe1xuICAgIGlmKHRoaXMuY29tcG9uZW50LmRyYWdnaW5nUG9zaXRpb24pe1xuICAgICAgY29uc3QgbGVmdCA9IHRoaXMuY29tcG9uZW50LnByb3BzLnRpbWVsaW5lLmdldExpbmVMZWZ0KHRoaXMuY29tcG9uZW50LmxpbmVJZCk7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5jb21wb25lbnQudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgICAgdGhpcy5jb21wb25lbnQuZHJhZ2dpbmdQb3NpdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmNvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJycsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBsZWZ0OiBsZWZ0XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYodGhpcy5jb21wb25lbnQucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5jb21wb25lbnQudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jb21wb25lbnQucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodCh0aGlzLmNvbXBvbmVudC50aW1lU3Bhbik7XG4gICAgICB0aGlzLmNvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuID0gbnVsbDtcbiAgICAgIHRoaXMuY29tcG9uZW50LnNldFN0YXRlKHtcbiAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJyxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wb25lbnQuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICB9XG5cbiAgZml4KCl7XG4gICAgaWYodGhpcy5jb21wb25lbnQuZHJhZ2dpbmdQb3NpdGlvbil7XG4gICAgICB0aGlzLmNvbXBvbmVudC5saW5lSWQgPSB0aGlzLmNvbXBvbmVudC5kcmFnZ2luZ1Bvc2l0aW9uLmxpbmVJZDtcbiAgICAgIHRoaXMuY29tcG9uZW50LnRpbWVTcGFuID0gdGhpcy5jb21wb25lbnQudGltZVNwYW4uc2hpZnRTdGFydFRpbWUodGhpcy5jb21wb25lbnQuZHJhZ2dpbmdQb3NpdGlvbi50aW1lKTtcbiAgICAgIHRoaXMuY29tcG9uZW50LnNldFN0YXRlKHtcbiAgICAgICAgdG9wOiB0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5jb21wb25lbnQuZHJhZ2dpbmdQb3NpdGlvbi50aW1lKSxcbiAgICAgICAgbGVmdDogdGhpcy5jb21wb25lbnQucHJvcHMudGltZWxpbmUuZ2V0TGluZUxlZnQodGhpcy5jb21wb25lbnQuZHJhZ2dpbmdQb3NpdGlvbi5saW5lSWQpLFxuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29tcG9uZW50LmRyYWdnaW5nUG9zaXRpb24gPSBudWxsO1xuICAgIH0gZWxzZSBpZih0aGlzLmNvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgIHRoaXMuY29tcG9uZW50LnRpbWVTcGFuID0gdGhpcy5jb21wb25lbnQucmVzaXppbmdUaW1lU3BhbjtcbiAgICAgIHRoaXMuY29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4gPSBudWxsO1xuICAgICAgdGhpcy5jb21wb25lbnQuc2V0U3RhdGUoe1xuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wb25lbnQuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzc2VzL0V2ZW50QWN0aW9ucy5lczZcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IExpbmUgZnJvbSAnLi9MaW5lJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0IH0gZnJvbSAncmVhY3QtZG5kJztcbmltcG9ydCBEbmRCYWNrZW5kIGZyb20gJ3JlYWN0LWRuZC10b3VjaC1iYWNrZW5kJztcbmltcG9ydCBFdmVudFByZXZpZXcgZnJvbSAnLi9FdmVudFByZXZpZXcnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuaW1wb3J0IFJ1bGVyIGZyb20gJy4vUnVsZXInO1xuaW1wb3J0IExpbmVMYWJlbCBmcm9tICcuL0xpbmVMYWJlbCc7XG5pbXBvcnQgeyBEcm9wVGFyZ2V0IH0gZnJvbSAncmVhY3QtZG5kJztcblxuXG5jb25zdCB0YXJnZXQgPSB7XG4gIGRyb3AocHJvcHMsIG1vbml0b3IsIGNvbXBvbmVudCkge1xuICAgIGNvbnN0IGl0ZW0gPSBtb25pdG9yLmdldEl0ZW0oKTtcbiAgICBjb25zdCBldmVudENvbXBvbmVudCA9IGl0ZW0udGltZWxpbmUuZmluZEV2ZW50QnlJZChpdGVtLmlkKTtcbiAgICBjb25zdCBkZWx0YSA9IG1vbml0b3IuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCk7XG4gICAgY29uc3QgdG9wID0gTWF0aC5yb3VuZChldmVudENvbXBvbmVudC5zdGF0ZS50b3AgKyBkZWx0YS55KTtcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5yb3VuZChldmVudENvbXBvbmVudC5zdGF0ZS5sZWZ0ICsgZGVsdGEueCk7XG5cbiAgICBldmVudENvbXBvbmVudC5tb3ZlVG8odG9wLCBsZWZ0KTtcbiAgfSxcbiAgaG92ZXIocHJvcHMsIG1vbml0b3IsIGNvbXBvbmVudCl7XG4gICAgY29uc3QgY2xpZW50T2Zmc2V0ID0gbW9uaXRvci5nZXRTb3VyY2VDbGllbnRPZmZzZXQoKTtcbiAgICBpZihjbGllbnRPZmZzZXQpe1xuICAgICAgY29uc3QgZXZlbnRDb21wb25lbnQgPSBwcm9wcy50aW1lbGluZS5maW5kRXZlbnRCeUlkKG1vbml0b3IuZ2V0SXRlbSgpLmlkKTtcbiAgICAgIGNvbnN0IGxpbmVXcmFwcGVyQm91bmRzID0gcHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQucmVmcy5saW5lc1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBsaW5lQ29tcG9uZW50ID0gcHJvcHMudGltZWxpbmUuZHJhZ2dpbmdPdmVyKGNsaWVudE9mZnNldC54IC0gbGluZVdyYXBwZXJCb3VuZHMubGVmdCArIChldmVudENvbXBvbmVudC5wcm9wcy53aWR0aCAvIDIvKmV2ZW5044Gu55yf44KT5Lit44KS5Z+65rqW44Gr44GZ44KLKi8pKTtcbiAgICAgIGNvbnN0IHRpbWUgPSBwcm9wcy50aW1lbGluZS50b3BUb1RpbWUoY2xpZW50T2Zmc2V0LnkgKyBwcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudC5yZWZzLmxpbmVzV3JhcHBlci5zY3JvbGxUb3AgLSBsaW5lV3JhcHBlckJvdW5kcy50b3ApO1xuICAgICAgZXZlbnRDb21wb25lbnQuZHJhZ2dpbmcodGltZSwgbGluZUNvbXBvbmVudC5wcm9wcy5saW5lSWQpO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gY29sbGVjdChjb25uZWN0LCBtb25pdG9yKSB7XG4gIHJldHVybiB7XG4gICAgY29ubmVjdERyb3BUYXJnZXQ6IGNvbm5lY3QuZHJvcFRhcmdldCgpXG4gIH07XG59XG5cbmNsYXNzIEZyYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICBjb25zdCBydWxlckludGVydmFsID0gNDtcblxuICAgIGNvbnN0IGxpbmVzID0gW107XG4gICAgY29uc3QgbGFiZWxzID0gW107XG4gICAgdGhpcy5wcm9wcy5saW5lRGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVMaW5lQ29tcG9uZW50KGRhdGEsIGxpbmVzLCBsYWJlbHMpO1xuICAgIH0pXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGluZXM6IGxpbmVzLFxuICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodFxuICAgIH1cblxuICAgIHRoaXMucmVzaXppbmdFdmVudCA9IG51bGw7XG4gIH1cblxuICByZXNpemVVcChldmVudENvbXBvbmVudCwgY2xpY2tlZFRvcCl7XG4gICAgY29uc3QgaW5pdGlhbEhlaWdodCA9IGV2ZW50Q29tcG9uZW50LnN0YXRlLmhlaWdodDtcbiAgICBjb25zdCBwcmV2Qm90dG9tID0gdGhpcy5wcm9wcy50aW1lbGluZS5nZXRQcmV2Qm90dG9tKGV2ZW50Q29tcG9uZW50KTtcbiAgICBjb25zdCBtb3VzZU1vdmVFdmVudCA9IChtb3ZlRXZlbnQpID0+IHtcbiAgICAgIGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBjbGlja2VkVG9wIC0gbW92ZUV2ZW50LmNsaWVudFk7XG4gICAgICBpZih0YXJnZXRIZWlnaHQgPiAzNil7XG4gICAgICAgIGxldCB0YXJnZXRUb3AgPSBldmVudENvbXBvbmVudC5zdGF0ZS50b3AgLSAodGFyZ2V0SGVpZ2h0IC0gZXZlbnRDb21wb25lbnQuc3RhdGUuaGVpZ2h0KTtcbiAgICAgICAgaWYodGFyZ2V0VG9wIDw9IHByZXZCb3R0b20pe1xuICAgICAgICAgIHRhcmdldFRvcCA9IHByZXZCb3R0b207XG4gICAgICAgIH1cblxuICAgICAgICBldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuID0gbmV3IFRpbWVTcGFuKHRoaXMucHJvcHMudGltZWxpbmUudG9wVG9UaW1lKHRhcmdldFRvcCksIGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCkpO1xuICAgICAgICBldmVudENvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQoZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3BhbiksXG4gICAgICAgICAgdG9wOiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcChldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSxcbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6IGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuZ2V0RGlzcGxheVRpbWUoKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc3RvcE1vdmVFdmVudCA9IChtb3VzZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50KTtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BNb3ZlRXZlbnQpO1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gICAgICBldmVudENvbXBvbmVudC5lbmRSZXNpemluZyhtb3VzZUV2ZW50KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcE1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gIH1cblxuICByZXNpemVEb3duKGV2ZW50Q29tcG9uZW50LCBjbGlja2VkVG9wKXtcbiAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gZXZlbnRDb21wb25lbnQuc3RhdGUuaGVpZ2h0O1xuICAgIGNvbnN0IG5leHRUb3AgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmdldE5leHRUb3AoZXZlbnRDb21wb25lbnQpO1xuICAgIGNvbnN0IG1vdXNlTW92ZUV2ZW50ID0gKG1vdmVFdmVudCkgPT4ge1xuICAgICAgZXZlbnRDb21wb25lbnQucmVzaXppbmcgPSB0cnVlO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIG1vdmVFdmVudC5jbGllbnRZIC0gY2xpY2tlZFRvcDtcbiAgICAgIGlmKHRhcmdldEhlaWdodCA+IDM2KXtcbiAgICAgICAgbGV0IHRhcmdldEJvdHRvbSA9IGV2ZW50Q29tcG9uZW50LnN0YXRlLnRvcCArIHRhcmdldEhlaWdodDtcbiAgICAgICAgaWYodGFyZ2V0Qm90dG9tID49IG5leHRUb3Ape1xuICAgICAgICAgIHRhcmdldEJvdHRvbSA9IG5leHRUb3A7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuID0gbmV3IFRpbWVTcGFuKGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSwgdGhpcy5wcm9wcy50aW1lbGluZS50b3BUb1RpbWUodGFyZ2V0Qm90dG9tKSk7XG4gICAgICAgIGV2ZW50Q29tcG9uZW50LnNldFN0YXRlKHtcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodChldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuKSxcbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6IGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4uZ2V0RW5kVGltZSgpLmdldERpc3BsYXlUaW1lKCksXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5VG9wOiB0YXJnZXRIZWlnaHQgLSAxMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc3RvcE1vdmVFdmVudCA9IChtb3VzZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50KTtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BNb3ZlRXZlbnQpO1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gICAgICBldmVudENvbXBvbmVudC5lbmRSZXNpemluZyhtb3VzZUV2ZW50KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcE1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gIH1cblxuICBjcmVhdGVMaW5lQ29tcG9uZW50KGRhdGEsIGxpbmVzLCBsYWJlbHMpe1xuICAgIGNvbnN0IGhhc1J1bGVyID0gbGluZXMubGVuZ3RoICUgdGhpcy5wcm9wcy5ydWxlckludGVydmFsID09PSAwO1xuICAgIGNvbnN0IHByZXZSdWxlciA9IChsaW5lcy5sZW5ndGggKyAxKSAlIHRoaXMucHJvcHMucnVsZXJJbnRlcnZhbCA9PT0gMDtcblxuICAgIGxhYmVscy5wdXNoKFxuICAgICAgPExpbmVMYWJlbFxuICAgICAgICBrZXk9e2RhdGEuaWR9XG4gICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLmxpbmVXaWR0aH1cbiAgICAgICAgaGFzUnVsZXI9e2hhc1J1bGVyfVxuICAgICAgICBwcmV2UnVsZXI9e3ByZXZSdWxlcn1cbiAgICAgICAgbGFiZWw9e2RhdGEubGFiZWx9XG4gICAgICAgIHRpbWVsaW5lPXt0aGlzLnByb3BzLnRpbWVsaW5lfVxuICAgICAgLz5cbiAgICApO1xuXG4gICAgbGluZXMucHVzaChcbiAgICAgIDxMaW5lXG4gICAgICAgIGhhc1J1bGVyPXtoYXNSdWxlcn1cbiAgICAgICAgbGFiZWw9e2RhdGEubH1cbiAgICAgICAga2V5PXtkYXRhLmlkfVxuICAgICAgICBsaW5lSWQ9e2RhdGEuaWR9XG4gICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLmxpbmVXaWR0aH1cbiAgICAgICAgbWluSGVpZ2h0PXt0aGlzLnByb3BzLm1pbkhlaWdodH1cbiAgICAgICAgdGltZVNwYW49e3RoaXMucHJvcHMudGltZVNwYW59XG4gICAgICAgIG9uQ2xpY2tMaW5lPXt0aGlzLnByb3BzLm9uQ2xpY2tMaW5lfVxuICAgICAgICBldmVuPXtsaW5lcy5sZW5ndGggJSAyID09PSAwfVxuICAgICAgICB0aW1lbGluZT17dGhpcy5wcm9wcy50aW1lbGluZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGFkZEV2ZW50cyhldmVudHMpe1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5ldmVudHM7XG4gICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgaWYoIWV2ZW50LmlkKXtcbiAgICAgICAgZXZlbnQuaWQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmNyZWF0ZUV2ZW50SWQoKTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQucHVzaChldmVudClcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudHM6IGN1cnJlbnR9KTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2hlaWdodDogaGVpZ2h0fSk7XG4gIH1cblxuICBnZXRSZWxhdGl2ZVBvcyhlKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBlLmNsaWVudFkgLSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0VG9wICsgZS5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCxcbiAgICAgIGxlZnQ6IGUuY2xpZW50WCAtIGUuY3VycmVudFRhcmdldC5vZmZzZXRMZWZ0ICsgZS5jdXJyZW50VGFyZ2V0LnNjcm9sbExlZnRcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBjb25uZWN0RHJvcFRhcmdldCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gY29ubmVjdERyb3BUYXJnZXQoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsRnJhbWVWaWV3XCIgc3R5bGU9e3ttaW5XaWR0aDogdGhpcy5wcm9wcy50aW1lbGluZS5nZXRUb3RhbFdpZHRoKCkgKyAncHgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxMYWJlbFZpZXdcIiBzdHlsZT17e2hlaWdodDogTGluZUxhYmVsLmhlaWdodH19Pnt0aGlzLnN0YXRlLmxhYmVsc308L2Rpdj5cbiAgICAgICAgPGRpdiByZWY9XCJsaW5lc1dyYXBwZXJcIiBjbGFzc05hbWU9XCJ0bExpbmVzV3JhcHBlclwiIHN0eWxlPXt7aGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCAtIExpbmVMYWJlbC5oZWlnaHR9fT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5saW5lc31cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5ldmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxFdmVudFxuICAgICAgICAgICAgICAgIGtleT17ZXZlbnQuaWR9XG4gICAgICAgICAgICAgICAgaWQ9e2V2ZW50LmlkfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtldmVudC5jb2xvcn1cbiAgICAgICAgICAgICAgICB0aW1lU3Bhbj17ZXZlbnQudGltZVNwYW59XG4gICAgICAgICAgICAgICAgZGlzcGxheT17ZXZlbnQuZGlzcGxheX1cbiAgICAgICAgICAgICAgICBsaW5lSWQ9e2V2ZW50LmxpbmVJZH1cbiAgICAgICAgICAgICAgICB0aW1lbGluZT17dGhpcy5wcm9wcy50aW1lbGluZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5saW5lV2lkdGggLSAyIC0gKExpbmUuc2lkZVBhZGRpbmcgKiAyKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxFdmVudFByZXZpZXcgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRnJhbWUucHJvcFR5cGVzID0ge1xuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4gIGxpbmVEYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KSkuaXNSZXF1aXJlZCxcbiAgbGluZVdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgdGltZWxpbmU6IFJlYWN0LlByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgcnVsZXJJbnRlcnZhbDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnRHJvcENvbnRleHQoRG5kQmFja2VuZCh7IGVuYWJsZU1vdXNlRXZlbnRzOiB0cnVlIH0pKShEcm9wVGFyZ2V0KFwiRXZlbnRcIiwgdGFyZ2V0LCBjb2xsZWN0KShGcmFtZSkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9GcmFtZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IEhvdXIgZnJvbSAnLi9Ib3VyJztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBMaW5lTGFiZWwgZnJvbSAnLi9MaW5lTGFiZWwnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5hZGRMaW5lQ29tcG9uZW50KHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdXJzOiBbXSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBkcmFnZ2luZ092ZXI6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMucHJvcHMudGltZVNwYW4uZWFjaFRpbWUoKGtleSwgdGltZSkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5ob3Vycy5wdXNoKFxuICAgICAgICA8SG91clxuICAgICAgICAgIGtleT17dGltZS5nZXRIb3VyKCl9XG4gICAgICAgICAgdGltZT17dGltZX1cbiAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFJlbGF0aXZlVG9wKGUpe1xuICAgIHJldHVybiBlLmNsaWVudFkgLSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5vZmZzZXRUb3AgKyBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5zY3JvbGxUb3A7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMub25DbGlja0xpbmUpe1xuICAgICAgY29uc3QgdGltZSA9IHRoaXMucHJvcHMudGltZWxpbmUudG9wVG9UaW1lKHRoaXMuZ2V0UmVsYXRpdmVUb3AoZSkpO1xuICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5vbkNsaWNrTGluZSh7XG4gICAgICAgIGV2ZW50OiBlLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIHRpbWU6IHRpbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ29udGV4dE1lbnUoZSl7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5vblJpZ2h0Q2xpY2tMaW5lKXtcbiAgICAgIHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMub25SaWdodENsaWNrTGluZSh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgZXZlbnQ6IGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdnaW5nT3Zlcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nT3ZlcjogdHJ1ZX0pO1xuICB9XG5cbiAgY2xlYXJEcmFnZ2luZ092ZXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZ092ZXI6IGZhbHNlfSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX0gb25Db250ZXh0TWVudT17ZSA9PiB0aGlzLm9uQ29udGV4dE1lbnUoZSl9PlxuICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnByb3BzLmhhc1J1bGVyKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxSdWxlclxuICAgICAgICAgICAgICAgIGtleT17J3J1bGVyXycgKyB0aGlzLnByb3BzLmxpbmVJZH1cbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3RsTGluZVZpZXcnLCB7ZXZlbjogdGhpcy5wcm9wcy5ldmVuLCBvZGQ6ICF0aGlzLnByb3BzLmV2ZW59LCB7b3ZlcjogdGhpcy5zdGF0ZS5kcmFnZ2luZ092ZXJ9KX0gc3R5bGU9e3t3aWR0aDogdGhpcy5wcm9wcy53aWR0aCArICdweCd9fT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5ob3Vyc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxpbmUuc2lkZVBhZGRpbmcgPSAxO1xuXG5MaW5lLnByb3BUeXBlcyA9IHtcbiAgd2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbiAgbGluZUlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBldmVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAvL1RPRE8g5b6q55Kw5Y+C54Wn44Gr44Gq44KL44Gu44GnaW1wb3J044Gn44GN44Ga44CC44Go44KK44GC44GI44GaYW5544Gn44GU44G+44GL44GX44Gm44G+44GZ44CCXG4gIHRpbWVsaW5lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGhhc1J1bGVyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xpbmUuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lIGZyb20gJy4uL2NsYXNzZXMvVGltZSdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1pbnV0ZXM6IFtdXG4gICAgfVxuXG4gICAgY29uc3QgbWluU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMubWluSGVpZ2h0ICsgJ3B4J1xuICAgIH1cbiAgICBUaW1lLmVhY2hNaW4oKGtleSwgbWluKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLm1pbnV0ZXMucHVzaChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17bWlufVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxNaW5WaWV3JywgJ18nICsgKG1pbiArIDE1KSl9XG4gICAgICAgICAgc3R5bGU9e21pblN0eWxlfVxuICAgICAgICA+Jm5ic3A7PC9kaXY+XG4gICAgICApO1xuICAgIH0sIDE1KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxIb3VyVmlld1wiPnt0aGlzLnN0YXRlLm1pbnV0ZXN9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ib3VyLnByb3BUeXBlcyA9IHtcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWUpLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSG91ci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG91cnM6IFtdXG4gICAgfVxuICAgIHRoaXMucHJvcHMudGltZVNwYW4uZWFjaFRpbWUoKGtleSwgdGltZSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIC8vYm9yZGVyMXB444KS6Laz44GZXG4gICAgICAgIGhlaWdodDogKHRoaXMucHJvcHMubWluSGVpZ2h0ICsgMSkgKiA0XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLmhvdXJzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXt0aW1lLmdldEhvdXIoKX0gc3R5bGU9e3N0eWxlfT57dGltZS5nZXREaXNwbGF5SG91cigpfTwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsUnVsZXJWaWV3XCIgc3R5bGU9e3t3aWR0aDogUnVsZXIud2lkdGggKyAncHgnfX0+e3RoaXMuc3RhdGUuaG91cnN9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SdWxlci5wcm9wVHlwZXMgPSB7XG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWRcbn1cblxuUnVsZXIud2lkdGggPSAzMDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUnVsZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lTGFiZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzUnVsZXI6IHRoaXMucHJvcHMuaGFzUnVsZXIsXG4gICAgICBwcmV2UnVsZXI6IHRoaXMucHJvcHMucHJldlJ1bGVyLFxuICAgICAgaXNMYXN0OiB0cnVlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgLy/kuIDjgaTliY3jga5sYWJlbOOBruWPs+inkuOBruS4uOOBv+OCkuWPluOCi1xuICAgIGNvbnN0IGxhYmVsQ29tcG9uZW50cyA9IHRoaXMucHJvcHMudGltZWxpbmUubGluZUxhYmVsQ29tcG9uZW50cztcbiAgICBpZihsYWJlbENvbXBvbmVudHMubGVuZ3RoKXtcbiAgICAgIGxhYmVsQ29tcG9uZW50c1tsYWJlbENvbXBvbmVudHMubGVuZ3RoIC0gMV0uc2V0U3RhdGUoe2lzTGFzdDogZmFsc2V9KTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmFkZExpbmVMYWJlbENvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7d2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG1hcmdpbkxlZnQ6IHRoaXMuc3RhdGUuaGFzUnVsZXIgPyBSdWxlci53aWR0aCArICdweCcgOiAwfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHt0bExhYmVsOiB0cnVlLCB0bEhhc1J1bGVyOiB0aGlzLnN0YXRlLmhhc1J1bGVyLCB0bFByZXZSdWxlcjogdGhpcy5zdGF0ZS5wcmV2UnVsZXIgfHwgdGhpcy5zdGF0ZS5pc0xhc3R9KX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMubGFiZWx9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxpbmVMYWJlbC5oZWlnaHQgPSAxNjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGluZUxhYmVsLmpzeFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVG91Y2hCYWNrZW5kID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUb3VjaEJhY2tlbmQ7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGdldEV2ZW50Q2xpZW50VG91Y2hPZmZzZXQoZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBnZXRFdmVudENsaWVudE9mZnNldChlLnRhcmdldFRvdWNoZXNbMF0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMpIHtcbiAgICAgICAgcmV0dXJuIGdldEV2ZW50Q2xpZW50VG91Y2hPZmZzZXQoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgICAgIHk6IGUuY2xpZW50WVxuICAgICAgICB9O1xuICAgIH1cbn1cblxudmFyIEVMRU1FTlRfTk9ERSA9IDE7XG5mdW5jdGlvbiBnZXROb2RlQ2xpZW50T2Zmc2V0KG5vZGUpIHtcbiAgICB2YXIgZWwgPSBub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUgPyBub2RlIDogbm9kZS5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX2VsJGdldEJvdW5kaW5nQ2xpZW50ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB2YXIgdG9wID0gX2VsJGdldEJvdW5kaW5nQ2xpZW50LnRvcDtcbiAgICB2YXIgbGVmdCA9IF9lbCRnZXRCb3VuZGluZ0NsaWVudC5sZWZ0O1xuXG4gICAgcmV0dXJuIHsgeDogbGVmdCwgeTogdG9wIH07XG59XG5cbnZhciBldmVudE5hbWVzID0ge1xuICAgIG1vdXNlOiB7XG4gICAgICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICAgICAgbW92ZTogJ21vdXNlbW92ZScsXG4gICAgICAgIGVuZDogJ21vdXNldXAnXG4gICAgfSxcbiAgICB0b3VjaDoge1xuICAgICAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgICAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICAgICAgZW5kOiAndG91Y2hlbmQnXG4gICAgfVxufTtcblxudmFyIFRvdWNoQmFja2VuZCA9IGV4cG9ydHMuVG91Y2hCYWNrZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvdWNoQmFja2VuZChtYW5hZ2VyKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvdWNoQmFja2VuZCk7XG5cbiAgICAgICAgb3B0aW9ucy5kZWxheVRvdWNoU3RhcnQgPSBvcHRpb25zLmRlbGF5VG91Y2hTdGFydCB8fCBvcHRpb25zLmRlbGF5O1xuXG4gICAgICAgIG9wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBlbmFibGVUb3VjaEV2ZW50czogdHJ1ZSxcbiAgICAgICAgICAgIGVuYWJsZU1vdXNlRXZlbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIGRlbGF5VG91Y2hTdGFydDogMCxcbiAgICAgICAgICAgIGRlbGF5TW91c2VTdGFydDogMFxuICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmFjdGlvbnMgPSBtYW5hZ2VyLmdldEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5tb25pdG9yID0gbWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgICAgIHRoaXMucmVnaXN0cnkgPSBtYW5hZ2VyLmdldFJlZ2lzdHJ5KCk7XG5cbiAgICAgICAgdGhpcy5kZWxheVRvdWNoU3RhcnQgPSBvcHRpb25zLmRlbGF5VG91Y2hTdGFydDtcbiAgICAgICAgdGhpcy5kZWxheU1vdXNlU3RhcnQgPSBvcHRpb25zLmRlbGF5TW91c2VTdGFydDtcbiAgICAgICAgdGhpcy5zb3VyY2VOb2RlcyA9IHt9O1xuICAgICAgICB0aGlzLnNvdXJjZU5vZGVPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVzID0ge307XG4gICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMudGFyZ2V0Tm9kZXMgPSB7fTtcbiAgICAgICAgdGhpcy50YXJnZXROb2RlT3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSB7fTtcblxuICAgICAgICBpZiAob3B0aW9ucy5lbmFibGVNb3VzZUV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLnB1c2goJ21vdXNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5lbmFibGVUb3VjaEV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLnB1c2goJ3RvdWNoJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldFNvdXJjZUNsaWVudE9mZnNldCA9IHRoaXMuZ2V0U291cmNlQ2xpZW50T2Zmc2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0ID0gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnREZWxheSA9IHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlID0gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZUNhcHR1cmUgPSB0aGlzLmhhbmRsZVRvcE1vdmVDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZUVuZENhcHR1cmUgPSB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRvdWNoQmFja2VuZCwgW3tcbiAgICAgICAga2V5OiAnc2V0dXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSghdGhpcy5jb25zdHJ1Y3Rvci5pc1NldFVwLCAnQ2Fubm90IGhhdmUgdHdvIFRvdWNoIGJhY2tlbmRzIGF0IHRoZSBzYW1lIHRpbWUuJyk7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmlzU2V0VXAgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnc3RhcnQnLCB0aGlzLmdldFRvcE1vdmVTdGFydEhhbmRsZXIoKSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnc3RhcnQnLCB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ21vdmUnLCB0aGlzLmhhbmRsZVRvcE1vdmVDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdlbmQnLCB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndGVhcmRvd24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdGVhcmRvd24oKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuaXNTZXRVcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSB7fTtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3N0YXJ0JywgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdzdGFydCcsIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdtb3ZlJywgdGhpcy5oYW5kbGVUb3BNb3ZlQ2FwdHVyZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnZW5kJywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMudW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRFdmVudExpc3RlbmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoc3ViamVjdCwgZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lclR5cGUpIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lc1tsaXN0ZW5lclR5cGVdW2V2ZW50XSwgaGFuZGxlciwgY2FwdHVyZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHN1YmplY3QsIGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgc3ViamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZXNbbGlzdGVuZXJUeXBlXVtldmVudF0sIGhhbmRsZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nvbm5lY3REcmFnU291cmNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3REcmFnU291cmNlKHNvdXJjZUlkLCBub2RlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgaGFuZGxlTW92ZVN0YXJ0ID0gdGhpcy5oYW5kbGVNb3ZlU3RhcnQuYmluZCh0aGlzLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZU5vZGVzW3NvdXJjZUlkXSA9IG5vZGU7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihub2RlLCAnc3RhcnQnLCBoYW5kbGVNb3ZlU3RhcnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5zb3VyY2VOb2Rlc1tzb3VyY2VJZF07XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCAnc3RhcnQnLCBoYW5kbGVNb3ZlU3RhcnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29ubmVjdERyYWdQcmV2aWV3JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3REcmFnUHJldmlldyhzb3VyY2VJZCwgbm9kZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVPcHRpb25zW3NvdXJjZUlkXSA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVByZXZpZXdOb2Rlc1tzb3VyY2VJZF0gPSBub2RlO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczIuc291cmNlUHJldmlld05vZGVzW3NvdXJjZUlkXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMyLnNvdXJjZVByZXZpZXdOb2RlT3B0aW9uc1tzb3VyY2VJZF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb25uZWN0RHJvcFRhcmdldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0RHJvcFRhcmdldCh0YXJnZXRJZCwgbm9kZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZXNbdGFyZ2V0SWRdID0gbm9kZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMzLnRhcmdldE5vZGVzW3RhcmdldElkXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFNvdXJjZUNsaWVudE9mZnNldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb3VyY2VDbGllbnRPZmZzZXQoc291cmNlSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXROb2RlQ2xpZW50T2Zmc2V0KHRoaXMuc291cmNlTm9kZXNbc291cmNlSWRdKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZVN0YXJ0Q2FwdHVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlKGUpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzID0gW107XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZU1vdmVTdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3ZlU3RhcnQoc291cmNlSWQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzLnVuc2hpZnQoc291cmNlSWQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRUb3BNb3ZlU3RhcnRIYW5kbGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRvcE1vdmVTdGFydEhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVsYXlUb3VjaFN0YXJ0ICYmICF0aGlzLmRlbGF5TW91c2VTdGFydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVTdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlU3RhcnQoZSkge1xuICAgICAgICAgICAgLy8gRG9uJ3QgcHJlbWF0dXJlbHkgcHJldmVudERlZmF1bHQoKSBoZXJlIHNpbmNlIGl0IG1pZ2h0OlxuICAgICAgICAgICAgLy8gMS4gTWVzcyB1cCBzY3JvbGxpbmdcbiAgICAgICAgICAgIC8vIDIuIE1lc3MgdXAgbG9uZyB0YXAgKHdoaWNoIGJyaW5ncyB1cCBjb250ZXh0IG1lbnUpXG4gICAgICAgICAgICAvLyAzLiBJZiB0aGVyZSdzIGFuIGFuY2hvciBsaW5rIGFzIGEgY2hpbGQsIHRhcCB3b24ndCBiZSB0cmlnZ2VyZWQgb24gbGlua1xuXG4gICAgICAgICAgICB2YXIgY2xpZW50T2Zmc2V0ID0gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZSk7XG4gICAgICAgICAgICBpZiAoY2xpZW50T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSBjbGllbnRPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVTdGFydERlbGF5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVTdGFydERlbGF5KGUpIHtcbiAgICAgICAgICAgIHZhciBkZWxheSA9IGUudHlwZSA9PT0gZXZlbnROYW1lcy50b3VjaC5zdGFydCA/IHRoaXMuZGVsYXlUb3VjaFN0YXJ0IDogdGhpcy5kZWxheU1vdXNlU3RhcnQ7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0LmJpbmQodGhpcywgZSksIGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZUNhcHR1cmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG9wTW92ZUNhcHR1cmUoZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgICAgICAgICB2YXIgbW92ZVN0YXJ0U291cmNlSWRzID0gdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHM7XG5cbiAgICAgICAgICAgIHZhciBjbGllbnRPZmZzZXQgPSBnZXRFdmVudENsaWVudE9mZnNldChlKTtcblxuICAgICAgICAgICAgaWYgKCFjbGllbnRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIG5vdCBkcmFnZ2luZyBhbmQgd2UndmUgbW92ZWQgYSBsaXR0bGUsIHRoYXQgY291bnRzIGFzIGEgZHJhZyBzdGFydFxuICAgICAgICAgICAgaWYgKCF0aGlzLm1vbml0b3IuaXNEcmFnZ2luZygpICYmIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0Lmhhc093blByb3BlcnR5KCd4JykgJiYgbW92ZVN0YXJ0U291cmNlSWRzICYmICh0aGlzLl9tb3VzZUNsaWVudE9mZnNldC54ICE9PSBjbGllbnRPZmZzZXQueCB8fCB0aGlzLl9tb3VzZUNsaWVudE9mZnNldC55ICE9PSBjbGllbnRPZmZzZXQueSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTdGFydFNvdXJjZUlkcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmJlZ2luRHJhZyhtb3ZlU3RhcnRTb3VyY2VJZHMsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50T2Zmc2V0OiB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgZ2V0U291cmNlQ2xpZW50T2Zmc2V0OiB0aGlzLmdldFNvdXJjZUNsaWVudE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgcHVibGlzaFNvdXJjZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLm1vbml0b3IuaXNEcmFnZ2luZygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc291cmNlTm9kZSA9IHRoaXMuc291cmNlTm9kZXNbdGhpcy5tb25pdG9yLmdldFNvdXJjZUlkKCldO1xuICAgICAgICAgICAgdGhpcy5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcihzb3VyY2VOb2RlKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdWJsaXNoRHJhZ1NvdXJjZSgpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBtYXRjaGluZ1RhcmdldElkcyA9IE9iamVjdC5rZXlzKHRoaXMudGFyZ2V0Tm9kZXMpLmZpbHRlcihmdW5jdGlvbiAodGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRpbmdSZWN0ID0gX3RoaXM0LnRhcmdldE5vZGVzW3RhcmdldElkXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpZW50T2Zmc2V0LnggPj0gYm91bmRpbmdSZWN0LmxlZnQgJiYgY2xpZW50T2Zmc2V0LnggPD0gYm91bmRpbmdSZWN0LnJpZ2h0ICYmIGNsaWVudE9mZnNldC55ID49IGJvdW5kaW5nUmVjdC50b3AgJiYgY2xpZW50T2Zmc2V0LnkgPD0gYm91bmRpbmdSZWN0LmJvdHRvbTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuaG92ZXIobWF0Y2hpbmdUYXJnZXRJZHMsIHtcbiAgICAgICAgICAgICAgICBjbGllbnRPZmZzZXQ6IGNsaWVudE9mZnNldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVFbmRDYXB0dXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlKGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tb25pdG9yLmlzRHJhZ2dpbmcoKSB8fCB0aGlzLm1vbml0b3IuZGlkRHJvcCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCA9IHt9O1xuXG4gICAgICAgICAgICB0aGlzLnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5kcm9wKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuZW5kRHJhZygpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcihub2RlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy51bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlciA9IG5ldyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM1LnJlc3VycmVjdFNvdXJjZU5vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM1LnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIub2JzZXJ2ZShub2RlLnBhcmVudEVsZW1lbnQsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXN1cnJlY3RTb3VyY2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3VycmVjdFNvdXJjZU5vZGUoKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1yZWFjdGlkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRvdWNoQmFja2VuZDtcbn0oKTtcblxuZnVuY3Rpb24gY3JlYXRlVG91Y2hCYWNrZW5kKCkge1xuICAgIHZhciBvcHRpb25zT3JNYW5hZ2VyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgdG91Y2hCYWNrZW5kRmFjdG9yeSA9IGZ1bmN0aW9uIHRvdWNoQmFja2VuZEZhY3RvcnkobWFuYWdlcikge1xuICAgICAgICByZXR1cm4gbmV3IFRvdWNoQmFja2VuZChtYW5hZ2VyLCBvcHRpb25zT3JNYW5hZ2VyKTtcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnNPck1hbmFnZXIuZ2V0TW9uaXRvcikge1xuICAgICAgICByZXR1cm4gdG91Y2hCYWNrZW5kRmFjdG9yeShvcHRpb25zT3JNYW5hZ2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG91Y2hCYWNrZW5kRmFjdG9yeTtcbiAgICB9XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQvZGlzdC9Ub3VjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmFnTGF5ZXIgZnJvbSAncmVhY3QtZG5kL2xpYi9EcmFnTGF5ZXInO1xuaW1wb3J0IEV2ZW50QmFzZSBmcm9tICcuL0V2ZW50QmFzZSc7XG5cbmZ1bmN0aW9uIGNvbGxlY3QgKG1vbml0b3Ipe1xuICBjb25zdCBwcm9wcyA9IHtcbiAgICBjbGllbnRPZmZzZXQ6IG1vbml0b3IuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KClcbiAgfTtcbiAgY29uc3QgaXRlbSA9IG1vbml0b3IuZ2V0SXRlbSgpO1xuICBpZihpdGVtKXtcbiAgICBwcm9wc1snZXZlbnQnXSA9IGl0ZW0udGltZWxpbmUuZmluZEV2ZW50QnlJZChpdGVtLmlkKTtcbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn1cblxuY2xhc3MgRXZlbnRQcmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZ2V0SXRlbVN0eWxlcyAoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmNsaWVudE9mZnNldCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLmNsaWVudE9mZnNldC54O1xuICAgIGNvbnN0IHkgPSB0aGlzLnByb3BzLmNsaWVudE9mZnNldC55O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246J2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuZXZlbnQuc3RhdGUuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMuZXZlbnQucHJvcHMud2lkdGgsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuZXZlbnQuc3RhdGUuY29sb3IsXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwicHJldmlld1wiIGNsYXNzTmFtZT1cInRsRXZlbnRWaWV3IHRsRHJhZ2dpbmdFdmVudFwiIHN0eWxlPXt0aGlzLmdldEl0ZW1TdHlsZXMoKX0+XG4gICAgICAgIDxFdmVudEJhc2VcbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk9e3RoaXMucHJvcHMuZXZlbnQgPyB0aGlzLnByb3BzLmV2ZW50LnN0YXRlLmRyYWdnaW5nRGlzcGxheSA6ICcnfVxuICAgICAgICAgIGRpc3BsYXk9e3RoaXMucHJvcHMuZXZlbnQgPyB0aGlzLnByb3BzLmV2ZW50LnN0YXRlLmRpc3BsYXkgOiBbXX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZ0xheWVyKGNvbGxlY3QpKEV2ZW50UHJldmlldyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0V2ZW50UHJldmlldy5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIHpJbmRleDogdGhpcy5wcm9wcy56SW5kZXhcbiAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7dGhpcy5jbG9zZSgpfSk7XG4gIH1cblxuICBzaG93KHBvcywgY29udGV4dCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdHlsZTogYXNzaWduKHt9LCB0aGlzLnN0YXRlLnN0eWxlLCBwb3MsIHtkaXNwbGF5OiAnYmxvY2snfSksXG4gICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlT3V0KCl7XG4gICAgY29uc29sZS5sb2coJ291dCcpO1xuICB9XG5cbiAgb25Nb3VzZU92ZXIoKXtcbiAgICBjb25zb2xlLmxvZygnb3ZlcicpO1xuICB9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtzdHlsZTogYXNzaWduKHt9LCB0aGlzLnN0YXRlLnN0eWxlLCB7ZGlzcGxheTogJ25vbmUnfSl9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJtTWVudVwiIHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJtTWVudUl0ZW1MaXN0XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuY29udGV4dCA/IHRoaXMucHJvcHMuaXRlbXMubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmKCFpdGVtLnNob3cgfHwgaXRlbS5zaG93KHRoaXMuc3RhdGUuY29udGV4dCkpe1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWUodGhpcy5zdGF0ZS5jb250ZXh0KX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2l0ZW0ub25DbGlja31cbiAgICAgICAgICAgICAgICAgIG1lbnU9e3RoaXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIDogbnVsbH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTWVudS5qc3hcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIFRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBvd25FbnVtZXJhYmxlS2V5cyhvYmopIHtcblx0dmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuXG5cdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0a2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKSk7XG5cdH1cblxuXHRyZXR1cm4ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuXHRcdHJldHVybiBwcm9wSXNFbnVtZXJhYmxlLmNhbGwob2JqLCBrZXkpO1xuXHR9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIGtleXM7XG5cdHZhciB0byA9IFRvT2JqZWN0KHRhcmdldCk7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gYXJndW1lbnRzW3NdO1xuXHRcdGtleXMgPSBvd25FbnVtZXJhYmxlS2V5cyhPYmplY3QoZnJvbSkpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b1trZXlzW2ldXSA9IGZyb21ba2V5c1tpXV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdXNlT3ZlcjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgb25Nb3VzZU91dCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe21vdXNlT3ZlcjogZmFsc2V9KTtcbiAgfVxuXG4gIG9uTW91c2VPdmVyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiB0cnVlfSk7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLm1lbnUuc3RhdGUuY29udGV4dCk7XG4gICAgdGhpcy5wcm9wcy5tZW51LmNsb3NlKCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcInJtTWVudUl0ZW1cIiwge3JtTW91c2VPdmVyOiB0aGlzLnN0YXRlLm1vdXNlT3Zlcn0pfVxuICAgICAgICBvbk1vdXNlT3Zlcj17ZSA9PiB0aGlzLm9uTW91c2VPdmVyKGUpfVxuICAgICAgICBvbk1vdXNlT3V0PXtlID0+IHRoaXMub25Nb3VzZU91dChlKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLm5hbWV9XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTWVudUl0ZW0uanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==