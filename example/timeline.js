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
	
	  var eventMenu = _reactDom2.default.render(React.createElement(_index.Menu, {
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
	    }, {
	      name: function name(context) {
	        return '-';
	      }
	    }, {
	      name: function name(context) {
	        return 'remove';
	      },
	      onClick: function onClick(context) {
	        context.component.actions.remove();
	      },
	      enable: function enable(context) {
	        return context.component.actions.isFixed();
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
	    lineDidClick: function lineDidClick(data) {
	      timeline.actions.addEvents([{
	        lineId: data.component.props.lineId,
	        timeSpan: new _index.TimeSpan(data.time, data.time.addMin(120)),
	        color: '#FFB6B6',
	        display: [{ key: 'startTime', value: data.time.getDisplayTime() }]
	      }]);
	    },
	    lineDidRightClick: function lineDidRightClick(data) {
	      console.log('right', data);
	    },
	    eventDidClick: function eventDidClick(data) {
	      console.log('left', data);
	    },
	    eventDidRightClick: function eventDidRightClick(data) {
	      data.event.preventDefault();
	      eventMenu.show({ top: data.event.clientY, left: data.event.clientX }, data);
	    },
	    eventWillFix: function eventWillFix(data) {
	      data.state.display = data.component.state.display.map(function (row) {
	        return row.key == 'startTime' ? { key: 'startTime', value: data.timeSpan.getStartTime().getDisplayTime() } : row;
	      });
	    },
	    eventDidFix: function eventDidFix(data) {
	      console.log(data);
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
	      return this.timeSpan.getStartTime().getDistance(time) * this.perMinHeight - 1;
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
	      display: _this.props.display || [],
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
	      if (this.props.timeline.props.eventDidClick) {
	        if (this.resizing) {
	          return;
	        }
	        this.props.timeline.props.eventDidClick({
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
	      if (this.props.timeline.props.eventDidRightClick) {
	        this.props.timeline.props.eventDidRightClick({
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
	          }, className: (0, _classnames2.default)('tlEventView', { tlDraggingEvent: this.state.draggable, tlResizableEvent: this.state.resizable }), style: style, onClick: function onClick(e) {
	            return _this3.onClick(e);
	          } },
	        function () {
	          if (_this3.state.resizable) {
	            return _react2.default.createElement(
	              'div',
	              { className: 'tlResizeHandle', onTouchstart: function onTouchstart(e) {
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
	              { className: 'tlResizeHandle tlBottom', onTouchstart: function onTouchstart(e) {
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
	        { style: { height: '100%' } },
	        function () {
	          if (_this2.props.draggingDisplay) {
	            return _react2.default.createElement(
	              'div',
	              { className: 'tlDraggingDisplay', style: { top: _this2.props.draggingDisplayTop } },
	              _this2.props.draggingDisplay
	            );
	          }
	        }(),
	        _react2.default.createElement(
	          'div',
	          { className: 'tlEventDisplay' },
	          this.props.display.map(function (row) {
	            return _react2.default.createElement(
	              'div',
	              { className: (0, _classnames2.default)('tlEventDisplayRow', row.key), key: row.key },
	              row.value
	            );
	          })
	        ),
	        ' '
	      );
	    }
	  }]);
	
	  return EventBase;
	}(_react2.default.Component);
	
	exports.default = EventBase;

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
	    key: 'remove',
	    value: function remove() {
	      this.component.props.timeline.frameComponent.removeEvent(this.component);
	    }
	  }, {
	    key: 'fix',
	    value: function fix() {
	      if (this.component.draggingPosition) {
	        var state = {
	          top: this.component.props.timeline.timeToTop(this.component.draggingPosition.time),
	          left: this.component.props.timeline.getLineLeft(this.component.draggingPosition.lineId),
	          draggable: false,
	          draggingDisplay: ''
	        };
	        var newTimeSpan = this.component.timeSpan.shiftStartTime(this.component.draggingPosition.time);
	        if (this.component.props.timeline.props.eventWillFix) {
	          this.component.props.timeline.props.eventWillFix({
	            component: this.component,
	            state: state,
	            lineId: this.component.draggingPosition.lineId,
	            timeSpan: newTimeSpan
	          });
	        }
	        this.component.setState(state);
	        this.component.lineId = this.component.draggingPosition.lineId;
	        this.component.timeSpan = newTimeSpan;
	        this.component.draggingPosition = null;
	      } else if (this.component.resizingTimeSpan) {
	        var _state = {
	          resizable: false,
	          draggingDisplay: ''
	        };
	        if (this.component.props.timeline.props.eventWillFix) {
	          this.component.props.timeline.props.eventWillFix({
	            component: this.component,
	            state: _state,
	            lineId: this.component.lineId,
	            timeSpan: this.component.resizingTimeSpan
	          });
	        }
	        this.component.setState(_state);
	        this.component.timeSpan = this.component.resizingTimeSpan;
	        this.component.resizingTimeSpan = null;
	      } else {
	        this.component.setState({
	          draggable: false,
	          resizable: false,
	          draggingDisplay: ''
	        });
	      }
	
	      this.component.props.timeline.clearDraggingOver();
	      if (this.component.props.timeline.props.eventDidFix) {
	        this.component.props.timeline.props.eventDidFix({
	          component: this.component
	        });
	      }
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
	        even: lines.length % 2 === 0,
	        timeline: this.props.timeline
	      }));
	    }
	  }, {
	    key: 'removeEvent',
	    value: function removeEvent(eventComponent) {
	      var current = this.state.events;
	      var events = [];
	      current.forEach(function (ev) {
	        if (ev.id != eventComponent.props.id) {
	          events.push(ev);
	        }
	      });
	      this.setState({ events: events });
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
	      if (this.props.timeline.props.lineDidClick) {
	        var time = this.props.timeline.topToTime(this.getRelativeTop(e));
	        this.props.timeline.props.lineDidClick({
	          event: e,
	          component: this,
	          time: time
	        });
	      }
	    }
	  }, {
	    key: 'onContextMenu',
	    value: function onContextMenu(e) {
	      if (this.props.timeline.props.lineDidRightClick) {
	        this.props.timeline.props.lineDidRightClick({
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
	          { className: (0, _classnames2.default)('tlLineView', { tlEven: this.props.even, tlOdd: !this.props.even }, { tlOver: this.state.draggingOver }), style: { width: this.props.width + 'px' } },
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
	          className: (0, _classnames2.default)('tlMinView', 'tl' + (min + 15)),
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
	          className: (0, _classnames2.default)({ tlLabel: true, tlHasRuler: this.state.hasRuler, tlPrevRuler: this.state.prevRuler, tlLast: this.state.isLast })
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
	
	  _createClass(Menu, null, [{
	    key: 'getWindowSize',
	    value: function getWindowSize() {
	      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	
	      return { width: width, height: height };
	    }
	  }]);
	
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
	
	    _this.overlay = document.createElement('div');
	    _this.overlay.setAttribute('class', 'rmMenuOverlay');
	    _this.overlay.style["position"] = 'absolute';
	    _this.overlay.style["top"] = '0';
	    _this.overlay.style["left"] = '0';
	    _this.overlay.style["display"] = 'none';
	    _this.overlay.style["zIndex"] = _this.props.zIndex - 1;
	    document.body.appendChild(_this.overlay);
	    _this.overlay.addEventListener('click', function (e) {
	      return _this.close();
	    });
	    _this.overlay.addEventListener('contextmenu', function (e) {
	      e.preventDefault();
	      _this.close();
	    });
	    return _this;
	  }
	
	  _createClass(Menu, [{
	    key: 'show',
	    value: function show(pos, context) {
	      var _this2 = this;
	
	      this.setState({
	        style: (0, _objectAssign2.default)({}, this.state.style, pos, { display: 'block' }),
	        context: context
	      }, function () {
	        var windowSize = Menu.getWindowSize();
	        _this2.overlay.style["width"] = windowSize.width + 'px';
	        _this2.overlay.style["height"] = windowSize.height + 'px';
	        _this2.overlay.style['display'] = 'block';
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
	      var _this3 = this;
	
	      this.setState({ style: (0, _objectAssign2.default)({}, this.state.style, { display: 'none' }) }, function () {
	        _this3.overlay.style['display'] = 'none';
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { ref: 'menu', className: 'rmMenu', style: this.state.style },
	        _react2.default.createElement(
	          'ul',
	          { className: 'rmMenuItemList' },
	          this.state.context ? this.props.items.map(function (item, key) {
	            if (!item.show || item.show(_this4.state.context)) {
	              return _react2.default.createElement(_MenuItem2.default, {
	                key: key,
	                name: item.name(_this4.state.context),
	                onClick: item.onClick,
	                menu: _this4,
	                enable: item.enable ? item.enable(_this4.state.context) : true
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
	      if (this.props.enable) {
	        this.setState({ mouseOver: false });
	      }
	    }
	  }, {
	    key: 'onMouseOver',
	    value: function onMouseOver() {
	      if (this.props.enable) {
	        this.setState({ mouseOver: true });
	      }
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.enable) {
	        this.props.onClick(this.props.menu.state.context);
	        this.props.menu.close();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'li',
	        {
	          className: (0, _classnames2.default)("rmMenuItem", { rmMouseOver: this.state.mouseOver, rmDisabled: !this.props.enable, rmSeparator: this.props.name == '-' }),
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
	        this.props.name == '-' ? null : this.props.name
	      );
	    }
	  }]);
	
	  return MenuItem;
	}(_react2.default.Component);
	
	exports.default = MenuItem;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMThjZDE1ZTYwNDNlNjdlZjg0MjgiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lbGluZUFjdGlvbnMuZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9EcmFnRHJvcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvRHJhZ0Ryb3BNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvbGliL2NyZWF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvfi9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9+L2xvZGFzaC9faXNIb3N0T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT2Zmc2V0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL2FjdGlvbnMvZHJhZ0Ryb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvdXRpbHMvbWF0Y2hlc1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT3BlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL2FjdGlvbnMvcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC93aXRob3V0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Jhc2VEaWZmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX1NldENhY2hlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fSGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19pc0hvc3RPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fY2hlY2tHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19pbmRleE9mTmFOLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fZ2V0TGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvcmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL3RvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL3RvRmluaXRlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9yZWZDb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kaXJ0eUhhbmRsZXJJZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC94b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYmFzZVhvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL2ludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL34vbG9kYXNoL19iYXNlSW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Nhc3RBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvc3RhdGVJZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9EcmFnRHJvcE1vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvSGFuZGxlclJlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL3V0aWxzL2dldE5leHRVbmlxdWVJZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FzYXAvYnJvd3Nlci1hc2FwLmpzIiwid2VicGFjazovLy8uL34vYXNhcC9icm93c2VyLXJhdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9EcmFnU291cmNlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL0Ryb3BUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvYmFja2VuZHMvY3JlYXRlVGVzdEJhY2tlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9EcmFnTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL3NoYWxsb3dFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvdXRpbHMvc2hhbGxvd0VxdWFsU2NhbGFyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL34vbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9+L2xvZGFzaC9faXNIb3N0T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvRHJhZ1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvZGVjb3JhdGVIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvaXNEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9EaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9Db21wb3NpdGVEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9TZXJpYWxEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9yZWdpc3RlclNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlTW9uaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlQ29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi93cmFwQ29ubmVjdG9ySG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL2Nsb25lV2l0aFJlZi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvYXJlT3B0aW9uc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi91dGlscy9pc1ZhbGlkVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9Ecm9wVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9yZWdpc3RlclRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0TW9uaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0Q29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50QmFzZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvRXZlbnRBY3Rpb25zLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GcmFtZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG91ci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUnVsZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xpbmVMYWJlbC5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9kaXN0L1RvdWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50UHJldmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnVJdGVtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7OztBQUdBLFVBQVMsYUFBVCxHQUF3QjtBQUN0QixPQUFNLFFBQVEsT0FBTyxVQUFQLElBQ1gsU0FBUyxlQUFULENBQXlCLFdBRGQsSUFFWCxTQUFTLElBQVQsQ0FBYyxXQUZqQjs7QUFJQSxPQUFNLFNBQVMsT0FBTyxXQUFQLElBQ1osU0FBUyxlQUFULENBQXlCLFlBRGIsSUFFWixTQUFTLElBQVQsQ0FBYyxZQUZqQjs7QUFJQSxVQUFPLEVBQUMsT0FBTyxLQUFSLEVBQWUsUUFBUSxNQUF2QixFQUFQO0FBQ0Q7O0FBRUQsVUFBUyxVQUFULENBQW9CLGVBQXBCLEVBQW9DO0FBQ2xDLE9BQU0sZ0JBQWdCLGdCQUFnQixxQkFBaEIsRUFBdEI7QUFDQSxPQUFNLGFBQWEsZUFBbkI7QUFDQSxVQUFPLFdBQVcsTUFBWCxHQUFvQixjQUFjLEdBQXpDO0FBQ0Q7O0FBRUQsUUFBTyxNQUFQLEdBQWdCLFlBQU07O0FBRXBCLE9BQU0sWUFBWSxtQkFBUyxNQUFULENBQ2hCO0FBQ0UsWUFBTyxDQUNMO0FBQ0UsYUFBTTtBQUFBLGdCQUFXLE9BQVg7QUFBQSxRQURSO0FBRUUsZ0JBQVMsMEJBQVc7QUFDbEIsaUJBQVEsU0FBUixDQUFrQixPQUFsQixDQUEwQixLQUExQjtBQUNELFFBSkg7QUFLRSxh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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7QUMzTUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDVkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWdFLGtCQUFrQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixvQkFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNOQTs7QUFFQTs7QUFFQSxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7QUN6QkE7O0FBRUE7O0FBRUEsa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7QUN2QkE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztB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QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7Ozs7QUN0RkE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUM1RkE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFL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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtFQUE4RTs7QUFFOUU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUNGOzs7bUNBRVk7QUFDWCxXQUFHLEtBQUssS0FBTCxDQUFXLE1BQWQsRUFBcUI7QUFDbkIsY0FBSyxRQUFMLENBQWMsRUFBQyxXQUFXLElBQVosRUFBZDtBQUNEO0FBQ0Y7Ozs2QkFFTyxDLEVBQUU7QUFDUixXQUFHLEtBQUssS0FBTCxDQUFXLE1BQWQsRUFBcUI7QUFDbkIsY0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEtBQWhCLENBQXNCLE9BQXpDO0FBQ0EsY0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixLQUFoQjtBQUNEO0FBQ0Y7Ozs4QkFFTztBQUFBOztBQUNOLGNBQ0U7QUFBQTtTQUFBO0FBQ0Usc0JBQVcsMEJBQVcsWUFBWCxFQUF5QixFQUFDLGFBQWEsS0FBSyxLQUFMLENBQVcsU0FBekIsRUFBb0MsWUFBWSxDQUFDLEtBQUssS0FBTCxDQUFXLE1BQTVELEVBQW9FLGFBQWEsS0FBSyxLQUFMLENBQVcsSUFBWCxJQUFtQixHQUFwRyxFQUF6QixDQURiO0FBRUUsd0JBQWE7QUFBQSxvQkFBSyxPQUFLLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBTDtBQUFBLFlBRmY7QUFHRSx1QkFBWTtBQUFBLG9CQUFLLE9BQUssVUFBTCxDQUFnQixDQUFoQixDQUFMO0FBQUEsWUFIZDtBQUlFLG9CQUFTO0FBQUEsb0JBQUssT0FBSyxPQUFMLENBQWEsQ0FBYixDQUFMO0FBQUE7QUFKWDtTQU1HLEtBQUssS0FBTCxDQUFXLElBQVgsSUFBbUIsR0FBbkIsR0FBeUIsSUFBekIsR0FBZ0MsS0FBSyxLQUFMLENBQVc7QUFOOUMsUUFERjtBQVVEOzs7O0dBdkNtQyxnQkFBTSxTOzttQkFBdkIsUSIsImZpbGUiOiJ0aW1lbGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMThjZDE1ZTYwNDNlNjdlZjg0MjhcbiAqKi8iLCJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7VGltZWxpbmUsIFRpbWUsIFRpbWVTcGFuLCBNZW51fSBmcm9tICcuLi9pbmRleC5lczYnO1xuXG5cbmZ1bmN0aW9uIGdldFdpbmRvd1NpemUoKXtcbiAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblxuICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICByZXR1cm4ge3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9O1xufVxuXG5mdW5jdGlvbiBjYWxjSGVpZ2h0KHRpbWVsaW5lRWxlbWVudCl7XG4gIGNvbnN0IHdyYXBwZXJCb3VuZHMgPSB0aW1lbGluZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHdpbmRvd1NpemUgPSBnZXRXaW5kb3dTaXplKCk7XG4gIHJldHVybiB3aW5kb3dTaXplLmhlaWdodCAtIHdyYXBwZXJCb3VuZHMudG9wO1xufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXG4gIGNvbnN0IGV2ZW50TWVudSA9IFJlYWN0RE9NLnJlbmRlcihcbiAgICA8TWVudVxuICAgICAgaXRlbXM9e1tcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJ2Zsb2F0JyxcbiAgICAgICAgICBvbkNsaWNrOiBjb250ZXh0ID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuY29tcG9uZW50LmFjdGlvbnMuZmxvYXQoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3c6IGNvbnRleHQgPT4gY29udGV4dC5jb21wb25lbnQuYWN0aW9ucy5pc0ZpeGVkKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJ3Jlc2l6ZScsXG4gICAgICAgICAgb25DbGljazogY29udGV4dCA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbXBvbmVudC5hY3Rpb25zLnJlc2l6ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvdzogY29udGV4dCA9PiBjb250ZXh0LmNvbXBvbmVudC5hY3Rpb25zLmlzRml4ZWQoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogY29udGV4dCA9PiAnY2FuY2VsJyxcbiAgICAgICAgICBvbkNsaWNrOiBjb250ZXh0ID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuY29tcG9uZW50LmFjdGlvbnMuY2FuY2VsKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93OiBjb250ZXh0ID0+ICFjb250ZXh0LmNvbXBvbmVudC5hY3Rpb25zLmlzRml4ZWQoKSxcbiAgICAgICAgICBvbkNsaWNrOiBjb250ZXh0ID0+IHtcbiAgICAgICAgICAgIGlmKGNvbnRleHQuY29tcG9uZW50LmFjdGlvbnMuaXNDYW5jZWxhYmxlKCkpe1xuICAgICAgICAgICAgICBjb250ZXh0LmNvbXBvbmVudC5hY3Rpb25zLmNhbmNlbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWxlcnQoJ1lvdSBjYW5cXCd0IGNhbmNlbCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBjb250ZXh0ID0+ICdmaXgnLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgaWYoY29udGV4dC5jb21wb25lbnQuYWN0aW9ucy5pc0ZpeGFibGUoKSl7XG4gICAgICAgICAgICAgIGNvbnRleHQuY29tcG9uZW50LmFjdGlvbnMuZml4KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGVydCgnWW91IGNhblxcJ3QgZml4IScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvdzogY29udGV4dCA9PiAhY29udGV4dC5jb21wb25lbnQuYWN0aW9ucy5pc0ZpeGVkKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJy0nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBjb250ZXh0ID0+ICdyZW1vdmUnLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5jb21wb25lbnQuYWN0aW9ucy5yZW1vdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVuYWJsZTogY29udGV4dCA9PiBjb250ZXh0LmNvbXBvbmVudC5hY3Rpb25zLmlzRml4ZWQoKVxuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgekluZGV4PXsxMDAwfVxuICAgIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcbiAgKTtcblxuICBjb25zdCBsaW5lRGF0YSA9IFtcbiAgICB7bGFiZWw6J2xhYmVsMScsIGlkOidfXzEnfSxcbiAgICB7bGFiZWw6J2xhYmVsMicsIGlkOidfXzInfSxcbiAgICB7bGFiZWw6J2xhYmVsMycsIGlkOidfXzMnfSxcbiAgICB7bGFiZWw6J2xhYmVsNCcsIGlkOidfXzQnfSxcbiAgICB7bGFiZWw6J2xhYmVsNScsIGlkOidfXzUnfSxcbiAgICB7bGFiZWw6J2xhYmVsNicsIGlkOidfXzYnfSxcbiAgICB7bGFiZWw6J2xhYmVsNycsIGlkOidfXzcnfSxcbiAgICB7bGFiZWw6J2xhYmVsOCcsIGlkOidfXzgnfSxcbiAgICB7bGFiZWw6J2xhYmVsOScsIGlkOidfXzknfSxcbiAgICB7bGFiZWw6J2xhYmVsMTAnLCBpZDonX18xMCd9LFxuICAgIHtsYWJlbDonbGFiZWwxMScsIGlkOidfXzExJ30sXG4gICAge2xhYmVsOidsYWJlbDEyJywgaWQ6J19fMTInfSxcbiAgICB7bGFiZWw6J2xhYmVsMTMnLCBpZDonX18xMyd9LFxuICAgIHtsYWJlbDonbGFiZWwxNCcsIGlkOidfXzE0J30sXG4gICAge2xhYmVsOidsYWJlbDE1JywgaWQ6J19fMTUnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTYnLCBpZDonX18xNid9LFxuICAgIHtsYWJlbDonbGFiZWwxNycsIGlkOidfXzE3J30sXG4gICAge2xhYmVsOidsYWJlbDE4JywgaWQ6J19fMTgnfVxuICBdO1xuXG4gIGNvbnN0IHRpbWVTcGFuID0gVGltZVNwYW4uY3JlYXRlKFsxMCwgMF0sIFsyNSwgMF0pO1xuICBjb25zdCB0aW1lbGluZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZWxpbmUnKTtcbiAgY29uc3QgdGltZWxpbmUgPSBSZWFjdERPTS5yZW5kZXIoXG4gICAgPFRpbWVsaW5lXG4gICAgICBsaW5lRGF0YT17bGluZURhdGF9XG4gICAgICB0aW1lU3Bhbj17dGltZVNwYW59XG4gICAgICBsaW5lV2lkdGg9ezYyfVxuICAgICAgbWluSGVpZ2h0PXsxN31cbiAgICAgIG1pbkludGVydmFsPXs1fVxuICAgICAgcnVsZXJJbnRlcnZhbD17NH1cbiAgICAgIGhlaWdodD17Y2FsY0hlaWdodCh0aW1lbGluZUVsZW1lbnQpfVxuICAgICAgbGluZURpZENsaWNrPXtkYXRhID0+IHtcbiAgICAgICAgdGltZWxpbmUuYWN0aW9ucy5hZGRFdmVudHMoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpbmVJZDogZGF0YS5jb21wb25lbnQucHJvcHMubGluZUlkLFxuICAgICAgICAgICAgdGltZVNwYW46IG5ldyBUaW1lU3BhbihkYXRhLnRpbWUsIGRhdGEudGltZS5hZGRNaW4oMTIwKSksXG4gICAgICAgICAgICBjb2xvcjogJyNGRkI2QjYnLFxuICAgICAgICAgICAgZGlzcGxheTogW1xuICAgICAgICAgICAgICB7a2V5OiAnc3RhcnRUaW1lJywgdmFsdWU6IGRhdGEudGltZS5nZXREaXNwbGF5VGltZSgpfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgICB9fVxuICAgICAgbGluZURpZFJpZ2h0Q2xpY2s9e2RhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmlnaHQnLCBkYXRhKTtcbiAgICAgIH19XG4gICAgICBldmVudERpZENsaWNrPXtkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xlZnQnLCBkYXRhKTtcbiAgICAgIH19XG4gICAgICBldmVudERpZFJpZ2h0Q2xpY2s9e2RhdGEgPT4ge1xuICAgICAgICBkYXRhLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50TWVudS5zaG93KHt0b3A6IGRhdGEuZXZlbnQuY2xpZW50WSwgbGVmdDogZGF0YS5ldmVudC5jbGllbnRYfSwgZGF0YSk7XG4gICAgICB9fVxuICAgICAgZXZlbnRXaWxsRml4PXtkYXRhID0+IHtcbiAgICAgICAgZGF0YS5zdGF0ZS5kaXNwbGF5ID0gZGF0YS5jb21wb25lbnQuc3RhdGUuZGlzcGxheS5tYXAoXG4gICAgICAgICAgcm93ID0+IHJvdy5rZXkgPT0gJ3N0YXJ0VGltZScgPyB7a2V5OiAnc3RhcnRUaW1lJywgdmFsdWU6IGRhdGEudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuZ2V0RGlzcGxheVRpbWUoKX0gOiByb3dcbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgICBldmVudERpZEZpeD17ZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgfX1cbiAgICAvPixcbiAgICB0aW1lbGluZUVsZW1lbnRcbiAgKTtcblxuXG4gIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aW1lbGluZS5hY3Rpb25zLnNldEhlaWdodChjYWxjSGVpZ2h0KHRpbWVsaW5lRWxlbWVudCkpO1xuICB9O1xuXG4gIHRpbWVsaW5lLmFjdGlvbnMuYWRkRXZlbnRzKFtcbiAgICB7XG4gICAgICBsaW5lSWQ6ICdfXzEnLFxuICAgICAgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTEsIDBdLCBbMTIsIDBdKSxcbiAgICAgIGNvbG9yOiAnI0ZGQjZCNicsXG4gICAgICBkaXNwbGF5OiBbXG4gICAgICAgIHtrZXk6ICdzdGFydFRpbWUnLCB2YWx1ZTogJzExOjAwJ30sXG4gICAgICAgIHtrZXk6ICd0eXBlJywgdmFsdWU6ICdmb29iYXInfSxcbiAgICAgICAge2tleTogJ21lbW8nLCB2YWx1ZTogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnknfVxuICAgICAgXVxuICAgIH1cbiAgXSk7XG5cbiAgdGltZWxpbmUuYWN0aW9ucy5hZGRFdmVudHMoW1xuICAgIHtsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMSwgMF0sIFsxMiwgMF0pLCBjb2xvcjogJyNGRkI2QjYnfSxcbiAgICB7bGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTMsIDUwXSwgWzE0LCAzMF0pLCBjb2xvcjogJyNCOEYxQUMnfSxcbiAgXSk7XG5cbiAgdGltZWxpbmUuYWN0aW9ucy5hZGRFdmVudHMoW1xuICAgIHtsaW5lSWQ6ICdfXzMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMywgMF0sIFsxNCwgMF0pLCBjb2xvcjogJyNGRkI2QjYnfSxcbiAgICB7bGluZUlkOiAnX18zJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDE1XSwgWzE1LCAzMF0pLCBjb2xvcjogJyNCOEYxQUMnfVxuICBdKTtcblxuICB0aW1lbGluZS5hY3Rpb25zLmFkZEV2ZW50cyhbXG4gICAge2xpbmVJZDogJ19fNScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAwXSwgWzE0LCAwXSksIGNvbG9yOiAnI0ZGQjZCNid9XG4gIF0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlL2FwcC5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9zcmMvY29tcG9uZW50cy9NZW51JztcbmltcG9ydCBUaW1lIGZyb20gJy4vc3JjL2NsYXNzZXMvVGltZSc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi9zcmMvY2xhc3Nlcy9UaW1lU3Bhbic7XG5cbmV4cG9ydCB7VGltZWxpbmUsIFRpbWUsIFRpbWVTcGFuLCBNZW51fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5lczZcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IFRpbWVsaW5lQWN0aW9ucyBmcm9tICcuLi9jbGFzc2VzL1RpbWVsaW5lQWN0aW9ucyc7XG5pbXBvcnQgRnJhbWUgZnJvbSAnLi9GcmFtZSc7XG5pbXBvcnQgUnVsZXIgZnJvbSAnLi9SdWxlcic7XG5pbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmFjdGlvbnMgPSBuZXcgVGltZWxpbmVBY3Rpb25zKHRoaXMpO1xuXG4gICAgLy9NaW5WaWV344Gv5LiA5pmC6ZaT5LiL44Gr5L2Z5YiG44GM55Sf5oiQ44GV44KM44KL44Gu44GnNjDliIbjg5fjg6njgrlcbiAgICB0aGlzLnRpbWVTcGFuID0gdGhpcy5wcm9wcy50aW1lU3Bhbi5hZGRNaW4oNjApO1xuXG4gICAgLy9taW5WaWV344GM44GE44GP44Gk44GC44KL44GL44Kr44Km44Oz44OI44CCbWluVmlld+OBrzE15YiG44GK44GN44CC44Gd44KM44KS5YWD44Gr6auY44GV44KS6KiI566X44CCYm9yZGVy5YiGMXB46Laz44GZXG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gKHRoaXMudGltZVNwYW4uZ2V0RGlzdGFuY2UoKSAvIDE1KSAqICh0aGlzLnByb3BzLm1pbkhlaWdodCArIDEpO1xuXG4gICAgLy8x5YiG44GC44Gf44KK44Gu6auY44GV44KS566X5Ye6XG4gICAgdGhpcy5wZXJNaW5IZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHQgLyB0aGlzLnRpbWVTcGFuLmdldERpc3RhbmNlKCk7XG5cbiAgICB0aGlzLmxpbmVXaWR0aCA9IHByb3BzLmxpbmVXaWR0aDtcblxuICAgIHRoaXMuZnJhbWVDb21wb25lbnQgPSBudWxsO1xuICAgIHRoaXMuY3JlYXRlZEV2ZW50SWQgPSAwO1xuICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbnBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5saW5lQ29tcG9uZW50cyA9IFtdO1xuICAgIHRoaXMuZXZlbnRDb21wb25lbnRzID0gW107XG4gICAgdGhpcy5saW5lTGFiZWxDb21wb25lbnRzID0gW107XG4gIH1cblxuICBjcmVhdGVFdmVudElkKCl7XG4gICAgcmV0dXJuICduZXdfJyArICgrK3RoaXMuY3JlYXRlZEV2ZW50SWQpO1xuICB9XG5cbiAgZHJhZ2dpbmdPdmVyKGxlZnQpe1xuICAgIGNvbnN0IGxpbmVDb21wb25lbnQgPSB0aGlzLmZpbmRMaW5lQnlMZWZ0KGxlZnQpO1xuICAgIGlmKGxpbmVDb21wb25lbnQgJiYgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29ucG9uZW50ICE9PSBsaW5lQ29tcG9uZW50KXtcbiAgICAgIGlmKHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbnBvbmVudCl7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbnBvbmVudC5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICAgICAgfVxuICAgICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29ucG9uZW50ID0gbGluZUNvbXBvbmVudDtcbiAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbnBvbmVudC5kcmFnZ2luZ092ZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZUNvbXBvbmVudDtcbiAgfVxuXG4gIGNsZWFyRHJhZ2dpbmdPdmVyKCl7XG4gICAgaWYodGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29ucG9uZW50KXtcbiAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbnBvbmVudC5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICAgIH1cbiAgfVxuXG4gIGdldFRvdGFsV2lkdGgoKXtcbiAgICByZXR1cm4gdGhpcy5saW5lQ29tcG9uZW50cy5yZWR1Y2UoKHZhbCwgbGluZSkgPT4ge1xuICAgICAgcmV0dXJuIHZhbCArIChsaW5lLnByb3BzLmhhc1J1bGVyID8gdGhpcy5saW5lV2lkdGggKyBSdWxlci53aWR0aCA6IHRoaXMubGluZVdpZHRoKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGFkZEV2ZW50Q29tcG9uZW50KGV2ZW50KXtcbiAgICB0aGlzLmV2ZW50Q29tcG9uZW50cy5wdXNoKGV2ZW50KTtcbiAgfVxuXG4gIGZpbmRFdmVudEJ5SWQoZXZlbnRJZCl7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRDb21wb25lbnRzLmZpbmQoZXYgPT4gZXYucHJvcHMuaWQgPT0gZXZlbnRJZCk7XG4gIH1cblxuICBmaW5kTGluZUJ5TGVmdChsZWZ0KXtcbiAgICB2YXIgd2lkdGggPSAwO1xuICAgIHJldHVybiB0aGlzLmxpbmVDb21wb25lbnRzLmZpbmQobGluZSA9PiB7XG4gICAgICB3aWR0aCArPSBsaW5lLnByb3BzLmhhc1J1bGVyID8gdGhpcy5wcm9wcy5saW5lV2lkdGggKyBSdWxlci53aWR0aCA6IHRoaXMucHJvcHMubGluZVdpZHRoO1xuICAgICAgaWYobGVmdCA8IHdpZHRoKXtcbiAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRMaW5lTGVmdChsaW5lSWQpe1xuICAgIGxldCBsZWZ0ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saW5lQ29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpbmUgPSB0aGlzLmxpbmVDb21wb25lbnRzW2ldO1xuICAgICAgaWYobGluZS5wcm9wcy5oYXNSdWxlcil7XG4gICAgICAgIGxlZnQgKz0gUnVsZXIud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmKGxpbmUucHJvcHMubGluZUlkID09IGxpbmVJZCl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsZWZ0ICs9IHRoaXMucHJvcHMubGluZVdpZHRoO1xuICAgIH1cblxuICAgIGxlZnQgKz0gTGluZS5zaWRlUGFkZGluZztcblxuICAgIHJldHVybiBsZWZ0O1xuICB9XG5cbiAgYWRkTGluZUNvbXBvbmVudChsaW5lKXtcbiAgICB0aGlzLmxpbmVDb21wb25lbnRzLnB1c2gobGluZSk7XG4gIH1cblxuICBhZGRMaW5lTGFiZWxDb21wb25lbnQobGluZSl7XG4gICAgdGhpcy5saW5lTGFiZWxDb21wb25lbnRzLnB1c2gobGluZSk7XG4gIH1cblxuICBnZXRUaW1lU3Bhbih0b3AsIGhlaWdodCl7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gdGhpcy50b3BUb1RpbWUodG9wKTtcblxuICAgIGNvbnN0IGVuZFRpbWUgPSBzdGFydFRpbWUuYWRkTWluKGhlaWdodCAvIHRoaXMucGVyTWluSGVpZ2h0KTtcbiAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHN0YXJ0VGltZSwgZW5kVGltZSk7XG4gIH1cblxuICB0aW1lU3BhblRvSGVpZ2h0KHRpbWVTcGFuKXtcbiAgICByZXR1cm4gKHRpbWVTcGFuLmdldERpc3RhbmNlKCkgKiB0aGlzLnBlck1pbkhlaWdodCkgLSAxO1xuICB9XG5cbiAgdGltZVRvVG9wKHRpbWUpe1xuICAgIHJldHVybiB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmdldERpc3RhbmNlKHRpbWUpICogdGhpcy5wZXJNaW5IZWlnaHQgLSAxO1xuICB9XG5cbiAgdG9wVG9UaW1lKHRvcCl7XG4gICAgaWYodG9wIDw9IDApe1xuICAgICAgcmV0dXJuIHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCk7XG4gICAgfVxuICAgIGxldCBtaW51dGUgPSB0b3AgLyB0aGlzLnBlck1pbkhlaWdodDtcbiAgICBjb25zdCByZXN0ID0gbWludXRlICUgdGhpcy5wcm9wcy5taW5JbnRlcnZhbDtcbiAgICBpZihyZXN0ICE9PSAwKXtcbiAgICAgIGlmKHJlc3QgPiB0aGlzLnByb3BzLm1pbkludGVydmFsIC8gMil7XG4gICAgICAgIG1pbnV0ZSArPSB0aGlzLnByb3BzLm1pbkludGVydmFsIC0gcmVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pbnV0ZSAtPSByZXN0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5hZGRNaW4obWludXRlKTtcbiAgfVxuXG4gIGZpbmRQcmV2RXZlbnQoZXZlbnRDb21wb25lbnQpe1xuICAgIHJldHVybiB0aGlzLmV2ZW50Q29tcG9uZW50c1xuICAgICAgLmZpbHRlcihldiA9PiAhZXYuc3RhdGUuZHJhZ2dhYmxlICYmIGV2LmxpbmVJZCA9PSBldmVudENvbXBvbmVudC5saW5lSWQpLy/lkIzjgZjliJfjga7jgoLjga7jgaDjgZHjgavntZ7jgotcbiAgICAgIC5zb3J0KChhLCBiKSA9PiAtKGEuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUoYi5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpKSkvL+aZgumWk+OBrumZjemghuOBp+S4puOBs+abv+OBiFxuICAgICAgLmZpbmQoZXYgPT4gZXYuY3VycmVudFRpbWVTcGFuLmdldEVuZFRpbWUoKS5jb21wYXJlKGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgPD0gMCkvL+mZjemghuOBquOBruOBp+WvvuixoeOCiOOCiuacgOWIneOBq+mWi+Wni+aZgumWk+OBjOiLpeOBhOOCguOBruOBjHByZXZcbiAgICAgIDtcbiAgfVxuXG4gIGdldFByZXZCb3R0b20oZXZlbnRDb21wb25lbnQpe1xuICAgIGNvbnN0IHByZXZFdmVudCA9IHRoaXMuZmluZFByZXZFdmVudChldmVudENvbXBvbmVudCk7XG4gICAgbGV0IGJvdHRvbVRpbWU7XG4gICAgaWYocHJldkV2ZW50KXtcbiAgICAgIGJvdHRvbVRpbWUgPSBwcmV2RXZlbnQuY3VycmVudFRpbWVTcGFuLmdldEVuZFRpbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm90dG9tVGltZSA9IHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGltZVRvVG9wKGJvdHRvbVRpbWUpO1xuICB9XG5cbiAgZmluZE5leHRFdmVudChldmVudENvbXBvbmVudCl7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRDb21wb25lbnRzXG4gICAgICAuZmlsdGVyKGV2ID0+ICAhZXYuc3RhdGUuZHJhZ2dhYmxlICYmIGV2LmxpbmVJZCA9PSBldmVudENvbXBvbmVudC5saW5lSWQpLy/lkIzjgZjliJfjga7jgoLjga7jgaDjgZHjgavntZ7jgotcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5jb21wYXJlKGIuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSkvL+aZgumWk+OBruaYh+mghuOBp+S4puOBs+abv+OBiFxuICAgICAgLmZpbmQoZXYgPT4gZXYuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUoZXZlbnRDb21wb25lbnQuY3VycmVudFRpbWVTcGFuLmdldEVuZFRpbWUoKSkgPj0gMCkvL+aYh+mghuOBquOBruOBp+WvvuixoeOCiOOCiuacgOWIneOBq+mWi+Wni+aZgumWk+OBjOmBheOBhOOCguOBruOBjG5leHRcbiAgICAgIDtcbiAgfVxuXG4gIGdldE5leHRUb3AoZXZlbnRDb21wb25lbnQpe1xuICAgIGNvbnN0IG5leHRFdmVudCA9IHRoaXMuZmluZE5leHRFdmVudChldmVudENvbXBvbmVudCk7XG4gICAgbGV0IG5leHRUaW1lO1xuICAgIGlmKG5leHRFdmVudCl7XG4gICAgICBuZXh0VGltZSA9IG5leHRFdmVudC5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRUaW1lID0gdGhpcy50aW1lU3Bhbi5nZXRFbmRUaW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGltZVRvVG9wKG5leHRUaW1lKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhbWVcbiAgICAgICAgbGluZURhdGE9e3RoaXMucHJvcHMubGluZURhdGF9XG4gICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICBsaW5lV2lkdGg9e3RoaXMucHJvcHMubGluZVdpZHRofVxuICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fVxuICAgICAgICB0aW1lbGluZT17dGhpc31cbiAgICAgICAgcnVsZXJJbnRlcnZhbD17dGhpcy5wcm9wcy5ydWxlckludGVydmFsfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cblRpbWVsaW5lLnByb3BUeXBlcyA9IHtcbiAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuICBsaW5lRGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkpLmlzUmVxdWlyZWQsXG4gIGxpbmVXaWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHJ1bGVySW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbWluSW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIGhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59XG5cblRpbWVsaW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgbWluSW50ZXJ2YWw6IDFcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBUaW1lIGZyb20gJy4vVGltZSdcbi8qKlxuICog5LiA5bqm55Sf5oiQ44GX44Gf44Kq44OW44K444Kn44Kv44OI44Gv5aSJ5pu044GX44G+44Gb44KT44CCXG4gKiDlpInmm7Tjg6Hjgr3jg4Pjg4njga/mlrDjgZfjgYTjgqrjg5bjgrjjgqfjgq/jg4jjgpLluLDjgZfjgb7jgZnjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNwYW5cbntcbiAgc3RhdGljIGNyZWF0ZShzdGFydCwgZW5kKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4obmV3IFRpbWUoc3RhcnRbMF0sIHN0YXJ0WzFdKSwgbmV3IFRpbWUoZW5kWzBdLCBlbmRbMV0pKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHN0YXJ0VGltZSwgZW5kVGltZSl7XG4gICAgd2hpbGUoc3RhcnRUaW1lLmNvbXBhcmUoZW5kVGltZSkgPj0gMCl7XG4gICAgICAgIGVuZFRpbWUgPSBlbmRUaW1lLmFkZE1pbigyNCAqIDYwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgdGhpcy5fZW5kVGltZSA9IGVuZFRpbWU7XG4gIH1cblxuICBjbG9uZSgpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aGlzLmdldFN0YXJ0VGltZSgpLmNsb25lKCksIHRoaXMuZ2V0RW5kVGltZSgpLmNsb25lKCkpO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKXtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUuZ2V0RGlzdGFuY2UodGhpcy5fZW5kVGltZSk7XG4gIH1cblxuICBnZXRTdGFydFRpbWUoKXsgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZTsgfVxuICBnZXRFbmRUaW1lKCl7IHJldHVybiB0aGlzLl9lbmRUaW1lOyB9XG5cbiAgc2hpZnRFbmRUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lLmFkZE1pbigtdGhpcy5nZXREaXN0YW5jZSgpKSwgdGltZSk7XG4gIH1cblxuICBzaGlmdFN0YXJ0VGltZSh0aW1lKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4odGltZSwgdGltZS5hZGRNaW4odGhpcy5nZXREaXN0YW5jZSgpKSk7XG4gIH1cblxuICBhZGRNaW4obWludXRlKXtcbiAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRoaXMuZ2V0U3RhcnRUaW1lKCksIHRoaXMuZ2V0RW5kVGltZSgpLmFkZE1pbihtaW51dGUpKTtcbiAgfVxuXG4gIGVxdWFscyh0aW1lU3Bhbil7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5lcXVhbHModGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpICYmIHRoaXMuZ2V0RW5kVGltZSgpLmVxdWFscyh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpO1xuICB9XG5cbiAgY29udGFpbnModGltZVNwYW4pe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuY29tcGFyZSh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgPCAwICYmIHRoaXMuZ2V0RW5kVGltZSgpLmNvbXBhcmUodGltZVNwYW4uZ2V0RW5kVGltZSgpKSA+IDA7XG4gIH1cblxuICBjb250YWluc1RpbWUodGltZSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5jb21wYXJlKHRpbWUpIDwgMCAmJiB0aGlzLmdldEVuZFRpbWUoKS5jb21wYXJlKHRpbWUpID4gMDtcbiAgfVxuXG4gIG92ZXJsYXBzKHRpbWVTcGFuKXtcbiAgICAgIGlmKHRpbWVTcGFuLmNvbnRhaW5zKHRoaXMpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5jb250YWluc1RpbWUodGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5jb250YWluc1RpbWUodGltZVNwYW4uZ2V0RW5kVGltZSgpKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGVhY2hIb3VyKGNhbGxiYWNrKXtcbiAgICAgIHZhciBob3VyID0gdGhpcy5nZXRTdGFydFRpbWUoKS5nZXRIb3VyKCk7XG4gICAgICB2YXIgZW5kID0gdGhpcy5nZXRFbmRUaW1lKCkuZ2V0SG91cigpO1xuICAgICAgdmFyIGtleSA9IDA7XG5cbiAgICAgIHdoaWxlKHRydWUpe1xuICAgICAgICAgIGlmKGhvdXIgPT09IGVuZCl7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoaG91ciwga2V5LCBob3VyLCB0aGlzLmdldEVuZFRpbWUoKS5nZXRNaW4oKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoaG91ciwga2V5LCBob3VyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBob3VyICs9IDE7XG4gICAgICAgICAgKytrZXk7XG4gICAgICB9XG4gIH1cblxuICBlYWNoVGltZShjYWxsYmFjaywgbWludXRlSW50ZXJ2YWwpe1xuICAgICAgdmFyIGtleSA9IDA7XG4gICAgICBtaW51dGVJbnRlcnZhbCA9IG1pbnV0ZUludGVydmFsID8gbWludXRlSW50ZXJ2YWwgOiA2MDtcblxuICAgICAgdmFyIHRpbWUgPSB0aGlzLmdldFN0YXJ0VGltZSgpO1xuICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgaWYodGltZS5jb21wYXJlKHRoaXMuZ2V0RW5kVGltZSgpKSA+IDApe1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWxsYmFjay5jYWxsKHRpbWUsIGtleSwgdGltZSk7XG5cbiAgICAgICAgICB0aW1lID0gdGltZS5hZGRNaW4obWludXRlSW50ZXJ2YWwpO1xuICAgICAgICAgICsra2V5O1xuICAgICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKXtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUgKyAnficgKyB0aGlzLl9lbmRUaW1lO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNlxuICoqLyIsIi8qKlxuICog5LiA5bqm55Sf5oiQ44GX44Gf44Kq44OW44K444Kn44Kv44OI44Gv5aSJ5pu044GX44G+44Gb44KT44CCXG4gKiDlpInmm7Tjg6Hjgr3jg4Pjg4njga/mlrDjgZfjgYTjgqrjg5bjgrjjgqfjgq/jg4jjgpLluLDjgZfjgb7jgZnjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVxue1xuICBzdGF0aWMgZWFjaE1pbihjYWxsYmFjaywgbWludXRlSW50ZXJ2YWwpe1xuICAgICAgdmFyIGNvdW50ID0gNjAgLyBtaW51dGVJbnRlcnZhbDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgIHZhciBtaW4gPSBpICogbWludXRlSW50ZXJ2YWw7XG4gICAgICAgICAgaWYobWluIDwgNjApe1xuICAgICAgICAgICAgICB2YXIgZGlzcGxheU1pbiA9IG1pbiA8IDEwID8gJzAnICsgbWluIDogbWluICsgJyc7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwobWluLCBpLCBtaW4sIGRpc3BsYXlNaW4pO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIOmFjeWIl+OBi+OCiVRpbWXjgpLnlJ/miJBcbiAgICogQHBhcmFtICB7YXJyYXl9IHRpbWUgW2hvdXIsIG1pbl3jga7phY3liJdcbiAgICogQHJldHVybiB7VGltZX1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGltZVswXSwgdGltZVsxXSk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoaG91ciwgbWluKXtcbiAgICB0aGlzLl9ob3VyID0gaG91ciA9PT0gdW5kZWZpbmVkID8gMCA6IHBhcnNlSW50KGhvdXIsIDEwKTtcbiAgICB0aGlzLl9taW4gPSBtaW4gPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChtaW4sIDEwKTtcbiAgICB3aGlsZSh0aGlzLl9taW4gPCAwKXtcbiAgICAgICAgLS10aGlzLl9ob3VyO1xuICAgICAgICB0aGlzLl9taW4gPSA2MCArIHRoaXMuX21pbjtcbiAgICB9XG5cbiAgICB3aGlsZSh0aGlzLl9taW4gPiA1OSl7XG4gICAgICAgICsrdGhpcy5faG91cjtcbiAgICAgICAgdGhpcy5fbWluID0gdGhpcy5fbWluIC0gNjA7XG4gICAgfVxuXG4gICAgaWYodGhpcy5faG91ciA8IDApXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50b1N0cmluZygpKycgaXMgbm90IHZhbGlkIHRpbWUuJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SG91cigpeyByZXR1cm4gdGhpcy5faG91cjsgfTtcbiAgZ2V0TWluKCl7IHJldHVybiB0aGlzLl9taW47IH07XG5cbiAgY2xvbmUoKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aGlzLmdldEhvdXIoKSwgdGhpcy5nZXRNaW4oKSk7XG4gIH07XG5cbiAgYWRkTWluKG1pbil7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGhpcy5nZXRIb3VyKCksIHRoaXMuZ2V0TWluKCkgKyBwYXJzZUludChtaW4sIDEwKSk7XG4gIH07XG5cbiAgZXF1YWxzKHRpbWUpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SG91cigpID09PSB0aW1lLmdldEhvdXIoKSAmJiB0aGlzLmdldE1pbigpID09PSB0aW1lLmdldE1pbigpO1xuICB9O1xuXG4gIGNvbXBhcmUodGltZSl7XG4gICAgICBpZih0aGlzLmdldEhvdXIoKSA+IHRpbWUuZ2V0SG91cigpKVxuICAgICAge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0aGlzLmdldEhvdXIoKSA8IHRpbWUuZ2V0SG91cigpKVxuICAgICAge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgICBpZih0aGlzLmdldE1pbigpID4gdGltZS5nZXRNaW4oKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMuZ2V0TWluKCkgPCB0aW1lLmdldE1pbigpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgZ2V0RGlzdGFuY2UodGFyZ2V0VGltZSl7XG4gICAgICB2YXIgdGFyZ2V0SG91ciA9IHRhcmdldFRpbWUuZ2V0SG91cigpO1xuICAgICAgdmFyIGhvdXJEaXN0YW5jZSA9IHRhcmdldEhvdXIgLSB0aGlzLl9ob3VyO1xuICAgICAgcmV0dXJuIChob3VyRGlzdGFuY2UgKiA2MCkgKyAodGFyZ2V0VGltZS5nZXRNaW4oKSAtIHRoaXMuX21pbik7XG4gIH07XG5cbiAgdG9TdHJpbmcoKXtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlUaW1lKCk7XG4gIH07XG5cbiAgZ2V0RGlzcGxheUhvdXIoKXtcbiAgICAgIHJldHVybiB0aGlzLl9ob3VyIDwgMjQgPyB0aGlzLl9ob3VyIDogdGhpcy5faG91ciAtIDI0O1xuICB9O1xuXG4gIGdldERpc3BsYXlNaW4oKXtcbiAgICAgIHJldHVybiB0aGlzLl9taW4gPCAxMCA/ICcwJyt0aGlzLl9taW4gOiB0aGlzLl9taW47XG4gIH07XG5cbiAgZ2V0RGlzcGxheVRpbWUoKXtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlIb3VyKCkgKyc6JysgdGhpcy5nZXREaXNwbGF5TWluKCk7XG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzc2VzL1RpbWUuZXM2XG4gKiovIiwiaW1wb3J0IEV2ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvRXZlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZUFjdGlvbnNcbntcbiAgY29uc3RydWN0b3IoY29tcG9uZW50KXtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIGFkZEV2ZW50cyhldmVudHMpe1xuICAgIHRoaXMuY29tcG9uZW50LmZyYW1lQ29tcG9uZW50LmFkZEV2ZW50cyhldmVudHMpO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCl7XG4gICAgdGhpcy5jb21wb25lbnQuZnJhbWVDb21wb25lbnQuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvVGltZWxpbmVBY3Rpb25zLmVzNlxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCB7RHJhZ1NvdXJjZX0gZnJvbSAncmVhY3QtZG5kJztcbmltcG9ydCBFdmVudEJhc2UgZnJvbSAnLi9FdmVudEJhc2UnO1xuaW1wb3J0IEV2ZW50QWN0aW9ucyBmcm9tICcuLi9jbGFzc2VzL0V2ZW50QWN0aW9ucyc7XG5cbmNvbnN0IHNvdXJjZSA9IHtcbiAgYmVnaW5EcmFnOiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHM7XG4gIH0sXG4gIGNhbkRyYWc6IGZ1bmN0aW9uKHByb3BzLCBtb25pdG9yKXtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBwcm9wcy50aW1lbGluZS5maW5kRXZlbnRCeUlkKHByb3BzLmlkKS5zdGF0ZS5kcmFnZ2FibGU7XG4gICAgcmV0dXJuICEhZHJhZ2dhYmxlO1xuICB9XG59XG5cbmNvbnN0IGNvbGxlY3QgPSAoY29ubmVjdCwgbW9uaXRvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbm5lY3REcmFnU291cmNlOiBjb25uZWN0LmRyYWdTb3VyY2UoKSxcbiAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKVxuICB9O1xufVxuXG5jbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQodGhpcy5wcm9wcy50aW1lU3BhbiksXG4gICAgICB0b3A6IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKHRoaXMucHJvcHMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpLFxuICAgICAgbGVmdDogdGhpcy5wcm9wcy50aW1lbGluZS5nZXRMaW5lTGVmdCh0aGlzLnByb3BzLmxpbmVJZCksXG4gICAgICBjb2xvcjogdGhpcy5wcm9wcy5jb2xvcixcbiAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuZGlzcGxheSB8fCBbXSxcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJ1xuICAgIH1cblxuICAgIHRoaXMuYWN0aW9ucyA9IG5ldyBFdmVudEFjdGlvbnModGhpcyk7XG5cbiAgICB0aGlzLmxpbmVJZCA9IHRoaXMucHJvcHMubGluZUlkO1xuICAgIHRoaXMudGltZVNwYW4gPSB0aGlzLnByb3BzLnRpbWVTcGFuO1xuICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbiA9IG51bGw7XG4gICAgdGhpcy5yZXNpemluZ1RpbWVTcGFuID0gbnVsbDtcbiAgICB0aGlzLnJlc2l6aW5nID0gZmFsc2U7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5hZGRFdmVudENvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50VGltZVNwYW4oKXtcbiAgICByZXR1cm4gdGhpcy5yZXNpemluZ1RpbWVTcGFuIHx8IHRoaXMudGltZVNwYW47XG4gIH1cblxuICBnZXQgbmV4dFBvc2l0aW9uKCl7XG4gICAgaWYodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmVJZDogdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLmxpbmVJZCxcbiAgICAgICAgdGltZVNwYW46IHRoaXMudGltZVNwYW4uc2hpZnRTdGFydFRpbWUodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLnRpbWUpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICByZXR1cm57XG4gICAgICAgIGxpbmVJZDogdGhpcy5saW5lSWQsXG4gICAgICAgIHRpbWVTcGFuOiB0aGlzLnJlc2l6aW5nVGltZVNwYW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBwcmV2UG9zaXRpb24oKXtcbiAgICBpZighdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uICYmICF0aGlzLnJlc2l6aW5nVGltZVNwYW4pe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybntcbiAgICAgICAgbGluZUlkOiB0aGlzLmxpbmVJZCxcbiAgICAgICAgdGltZVNwYW46IHRoaXMudGltZVNwYW5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5LuW44GuRXZlbnTjgajph43jgarjgaPjgabjgYTjgarjgYTjgYvjg4Hjgqfjg4Pjgq/jgZnjgotcbiAgICogQHBhcmFtICB7b2JqZWN0fSAgcG9zaXRpb24ge2xpbmVJZDogKioqLCB0aW1lU3BhbjogKioqfVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNGcmVlUG9zaXRpb24ocG9zaXRpb24pe1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy50aW1lbGluZS5ldmVudENvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMucHJvcHMudGltZWxpbmUuZXZlbnRDb21wb25lbnRzW2ldO1xuICAgICAgaWYoZXYgPT09IHRoaXMpIGNvbnRpbnVlO1xuICAgICAgaWYoZXYubGluZUlkICE9IHBvc2l0aW9uLmxpbmVJZCkgY29udGludWU7XG4gICAgICBpZihldi5jdXJyZW50VGltZVNwYW4ub3ZlcmxhcHMocG9zaXRpb24udGltZVNwYW4pKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbW92ZVRvKHRvcCwgbGVmdCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dG9wOiB0b3AsIGxlZnQ6IGxlZnR9KTtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZENsaWNrKXtcbiAgICAgIGlmKHRoaXMucmVzaXppbmcpe1xuICAgICAgICByZXR1cm4gO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZENsaWNrKHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBldmVudDogZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhZ2dpbmcodGltZSwgbGluZUlkKXtcbiAgICB0aGlzLmRyYWdnaW5nUG9zaXRpb24gPSB7dGltZTogdGltZSwgbGluZUlkOiBsaW5lSWR9O1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nRGlzcGxheTogdGltZS5nZXREaXNwbGF5VGltZSgpfSk7XG4gIH1cblxuICByZXNpemVVcChlKXtcbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LnJlc2l6ZVVwKHRoaXMsIGUuY2xpZW50WSk7XG4gIH1cblxuICByZXNpemVEb3duKGUpe1xuICAgIHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQucmVzaXplRG93bih0aGlzLCBlLmNsaWVudFkpO1xuICB9XG5cbiAgZW5kUmVzaXppbmcoZSl7XG4gICAgaWYodGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6IG51bGwsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheVRvcDogbnVsbFxuICAgICAgfTtcblxuICAgICAgaWYodGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgICAgbmV3U3RhdGUudG9wID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5yZXNpemluZ1RpbWVTcGFuLmdldFN0YXJ0VGltZSgpKTtcbiAgICAgICAgbmV3U3RhdGUuaGVpZ2h0ID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KHRoaXMucmVzaXppbmdUaW1lU3Bhbik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICAvL29uQ2xpY2vjgojjgoplbmRSZXNpemluZ+OBruWFiOOBq+eZuueUn+OBl+OBpuOBl+OBvuOBhuOAglxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXNpemluZyA9IGZhbHNlLCAxMDApO1xuICB9XG5cbiAgb25Db250ZXh0TWVudShlKXtcbiAgICBpZih0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkUmlnaHRDbGljayl7XG4gICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkUmlnaHRDbGljayh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgZXZlbnQ6IGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCArICdweCcsXG4gICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQgKyAncHgnLFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggKyAncHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmNvbG9yLFxuICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy5pc0RyYWdnaW5nID8gJ25vbmUnIDogJ2Jsb2NrJ1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jb25uZWN0RHJhZ1NvdXJjZShcbiAgICAgIDxkaXYgb25Db250ZXh0TWVudT17ZSA9PiB0aGlzLm9uQ29udGV4dE1lbnUoZSl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxFdmVudFZpZXcnLCB7dGxEcmFnZ2luZ0V2ZW50OiB0aGlzLnN0YXRlLmRyYWdnYWJsZSwgdGxSZXNpemFibGVFdmVudDogdGhpcy5zdGF0ZS5yZXNpemFibGV9KX0gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX0+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIGlmKHRoaXMuc3RhdGUucmVzaXphYmxlKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSZXNpemVIYW5kbGVcIiBvblRvdWNoc3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVVcChlKX0gb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVVcChlKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgICA8RXZlbnRCYXNlXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5PXt0aGlzLnN0YXRlLmRyYWdnaW5nRGlzcGxheX1cbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXlUb3A9e3RoaXMuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5VG9wfVxuICAgICAgICAgIGRpc3BsYXk9e3RoaXMuc3RhdGUuZGlzcGxheX1cbiAgICAgICAgLz5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5yZXNpemFibGUpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bFJlc2l6ZUhhbmRsZSB0bEJvdHRvbVwiIG9uVG91Y2hzdGFydD17ZSA9PiB0aGlzLnJlc2l6ZURvd24oZSl9IG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplRG93bihlKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5FdmVudC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbiAgY29sb3I6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLy9UT0RPIOW+queSsOWPgueFp+OBq+OBquOCi+OBruOBp2ltcG9ydOOBp+OBjeOBmuOAguOBqOOCiuOBguOBiOOBmmFueeOBp+OBlOOBvuOBi+OBl+OBpuOBvuOBmeOAglxuICB0aW1lbGluZTogUmVhY3QuUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBsaW5lSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnU291cmNlKFwiRXZlbnRcIiwgc291cmNlLCBjb2xsZWN0KShFdmVudCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0V2ZW50LmpzeFxuICoqLyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqWydkZWZhdWx0J10gOiBvYmo7IH1cblxudmFyIF9EcmFnRHJvcENvbnRleHQgPSByZXF1aXJlKCcuL0RyYWdEcm9wQ29udGV4dCcpO1xuXG5leHBvcnRzLkRyYWdEcm9wQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZShfRHJhZ0Ryb3BDb250ZXh0KTtcblxudmFyIF9EcmFnTGF5ZXIgPSByZXF1aXJlKCcuL0RyYWdMYXllcicpO1xuXG5leHBvcnRzLkRyYWdMYXllciA9IF9pbnRlcm9wUmVxdWlyZShfRHJhZ0xheWVyKTtcblxudmFyIF9EcmFnU291cmNlID0gcmVxdWlyZSgnLi9EcmFnU291cmNlJyk7XG5cbmV4cG9ydHMuRHJhZ1NvdXJjZSA9IF9pbnRlcm9wUmVxdWlyZShfRHJhZ1NvdXJjZSk7XG5cbnZhciBfRHJvcFRhcmdldCA9IHJlcXVpcmUoJy4vRHJvcFRhcmdldCcpO1xuXG5leHBvcnRzLkRyb3BUYXJnZXQgPSBfaW50ZXJvcFJlcXVpcmUoX0Ryb3BUYXJnZXQpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3NsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEcmFnRHJvcENvbnRleHQ7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9kbmRDb3JlID0gcmVxdWlyZSgnZG5kLWNvcmUnKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzID0gcmVxdWlyZSgnLi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cycpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50cyk7XG5cbmZ1bmN0aW9uIERyYWdEcm9wQ29udGV4dChiYWNrZW5kT3JNb2R1bGUpIHtcbiAgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyWydkZWZhdWx0J10uYXBwbHkodW5kZWZpbmVkLCBbJ0RyYWdEcm9wQ29udGV4dCcsICdiYWNrZW5kJ10uY29uY2F0KF9zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcblxuICAvLyBBdXRvLWRldGVjdCBFUzYgZGVmYXVsdCBleHBvcnQgZm9yIHBlb3BsZSBzdGlsbCB1c2luZyBFUzVcbiAgdmFyIGJhY2tlbmQgPSB1bmRlZmluZWQ7XG4gIGlmICh0eXBlb2YgYmFja2VuZE9yTW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYmFja2VuZE9yTW9kdWxlWydkZWZhdWx0J10gPT09ICdmdW5jdGlvbicpIHtcbiAgICBiYWNrZW5kID0gYmFja2VuZE9yTW9kdWxlWydkZWZhdWx0J107XG4gIH0gZWxzZSB7XG4gICAgYmFja2VuZCA9IGJhY2tlbmRPck1vZHVsZTtcbiAgfVxuXG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGJhY2tlbmQgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCB0aGUgYmFja2VuZCB0byBiZSBhIGZ1bmN0aW9uIG9yIGFuIEVTNiBtb2R1bGUgZXhwb3J0aW5nIGEgZGVmYXVsdCBmdW5jdGlvbi4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLWRyb3AtY29udGV4dC5odG1sJyk7XG5cbiAgdmFyIGNoaWxkQ29udGV4dCA9IHtcbiAgICBkcmFnRHJvcE1hbmFnZXI6IG5ldyBfZG5kQ29yZS5EcmFnRHJvcE1hbmFnZXIoYmFja2VuZClcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGVDb250ZXh0KERlY29yYXRlZENvbXBvbmVudCkge1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IERlY29yYXRlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBEZWNvcmF0ZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICAgIHJldHVybiAoZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhEcmFnRHJvcENvbnRleHRDb250YWluZXIsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBEcmFnRHJvcENvbnRleHRDb250YWluZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnRHJvcENvbnRleHRDb250YWluZXIpO1xuXG4gICAgICAgIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLnByb3RvdHlwZS5nZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSA9IGZ1bmN0aW9uIGdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLmNoaWxkO1xuICAgICAgfTtcblxuICAgICAgRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLnByb3RvdHlwZS5nZXRNYW5hZ2VyID0gZnVuY3Rpb24gZ2V0TWFuYWdlcigpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkQ29udGV4dC5kcmFnRHJvcE1hbmFnZXI7XG4gICAgICB9O1xuXG4gICAgICBEcmFnRHJvcENvbnRleHRDb250YWluZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkQ29udGV4dDtcbiAgICAgIH07XG5cbiAgICAgIERyYWdEcm9wQ29udGV4dENvbnRhaW5lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoRGVjb3JhdGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIHJlZjogJ2NoaWxkJyB9KSk7XG4gICAgICB9O1xuXG4gICAgICBfY3JlYXRlQ2xhc3MoRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdEZWNvcmF0ZWRDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogRGVjb3JhdGVkQ29tcG9uZW50LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc3BsYXlOYW1lJyxcbiAgICAgICAgdmFsdWU6ICdEcmFnRHJvcENvbnRleHQoJyArIGRpc3BsYXlOYW1lICsgJyknLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NoaWxkQ29udGV4dFR5cGVzJyxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBkcmFnRHJvcE1hbmFnZXI6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyO1xuICAgIH0pKF9yZWFjdC5Db21wb25lbnQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL0RyYWdEcm9wQ29udGV4dC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZShvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9ialsnZGVmYXVsdCddIDogb2JqOyB9XG5cbnZhciBfRHJhZ0Ryb3BNYW5hZ2VyID0gcmVxdWlyZSgnLi9EcmFnRHJvcE1hbmFnZXInKTtcblxuZXhwb3J0cy5EcmFnRHJvcE1hbmFnZXIgPSBfaW50ZXJvcFJlcXVpcmUoX0RyYWdEcm9wTWFuYWdlcik7XG5cbnZhciBfRHJhZ1NvdXJjZSA9IHJlcXVpcmUoJy4vRHJhZ1NvdXJjZScpO1xuXG5leHBvcnRzLkRyYWdTb3VyY2UgPSBfaW50ZXJvcFJlcXVpcmUoX0RyYWdTb3VyY2UpO1xuXG52YXIgX0Ryb3BUYXJnZXQgPSByZXF1aXJlKCcuL0Ryb3BUYXJnZXQnKTtcblxuZXhwb3J0cy5Ecm9wVGFyZ2V0ID0gX2ludGVyb3BSZXF1aXJlKF9Ecm9wVGFyZ2V0KTtcblxudmFyIF9iYWNrZW5kc0NyZWF0ZVRlc3RCYWNrZW5kID0gcmVxdWlyZSgnLi9iYWNrZW5kcy9jcmVhdGVUZXN0QmFja2VuZCcpO1xuXG5leHBvcnRzLmNyZWF0ZVRlc3RCYWNrZW5kID0gX2ludGVyb3BSZXF1aXJlKF9iYWNrZW5kc0NyZWF0ZVRlc3RCYWNrZW5kKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX3JlZHV4TGliQ3JlYXRlU3RvcmUgPSByZXF1aXJlKCdyZWR1eC9saWIvY3JlYXRlU3RvcmUnKTtcblxudmFyIF9yZWR1eExpYkNyZWF0ZVN0b3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZHV4TGliQ3JlYXRlU3RvcmUpO1xuXG52YXIgX3JlZHVjZXJzID0gcmVxdWlyZSgnLi9yZWR1Y2VycycpO1xuXG52YXIgX3JlZHVjZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZHVjZXJzKTtcblxudmFyIF9hY3Rpb25zRHJhZ0Ryb3AgPSByZXF1aXJlKCcuL2FjdGlvbnMvZHJhZ0Ryb3AnKTtcblxudmFyIGRyYWdEcm9wQWN0aW9ucyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hY3Rpb25zRHJhZ0Ryb3ApO1xuXG52YXIgX0RyYWdEcm9wTW9uaXRvciA9IHJlcXVpcmUoJy4vRHJhZ0Ryb3BNb25pdG9yJyk7XG5cbnZhciBfRHJhZ0Ryb3BNb25pdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RyYWdEcm9wTW9uaXRvcik7XG5cbnZhciBfSGFuZGxlclJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9IYW5kbGVyUmVnaXN0cnknKTtcblxudmFyIF9IYW5kbGVyUmVnaXN0cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSGFuZGxlclJlZ2lzdHJ5KTtcblxudmFyIERyYWdEcm9wTWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERyYWdEcm9wTWFuYWdlcihjcmVhdGVCYWNrZW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdEcm9wTWFuYWdlcik7XG5cbiAgICB2YXIgc3RvcmUgPSBfcmVkdXhMaWJDcmVhdGVTdG9yZTJbJ2RlZmF1bHQnXShfcmVkdWNlcnMyWydkZWZhdWx0J10pO1xuXG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMubW9uaXRvciA9IG5ldyBfRHJhZ0Ryb3BNb25pdG9yMlsnZGVmYXVsdCddKHN0b3JlKTtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gdGhpcy5tb25pdG9yLnJlZ2lzdHJ5O1xuICAgIHRoaXMuYmFja2VuZCA9IGNyZWF0ZUJhY2tlbmQodGhpcyk7XG5cbiAgICBzdG9yZS5zdWJzY3JpYmUodGhpcy5oYW5kbGVSZWZDb3VudENoYW5nZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIERyYWdEcm9wTWFuYWdlci5wcm90b3R5cGUuaGFuZGxlUmVmQ291bnRDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVSZWZDb3VudENoYW5nZSgpIHtcbiAgICB2YXIgc2hvdWxkU2V0VXAgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCkucmVmQ291bnQgPiAwO1xuICAgIGlmIChzaG91bGRTZXRVcCAmJiAhdGhpcy5pc1NldFVwKSB7XG4gICAgICB0aGlzLmJhY2tlbmQuc2V0dXAoKTtcbiAgICAgIHRoaXMuaXNTZXRVcCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghc2hvdWxkU2V0VXAgJiYgdGhpcy5pc1NldFVwKSB7XG4gICAgICB0aGlzLmJhY2tlbmQudGVhcmRvd24oKTtcbiAgICAgIHRoaXMuaXNTZXRVcCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBEcmFnRHJvcE1hbmFnZXIucHJvdG90eXBlLmdldE1vbml0b3IgPSBmdW5jdGlvbiBnZXRNb25pdG9yKCkge1xuICAgIHJldHVybiB0aGlzLm1vbml0b3I7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNYW5hZ2VyLnByb3RvdHlwZS5nZXRCYWNrZW5kID0gZnVuY3Rpb24gZ2V0QmFja2VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrZW5kO1xuICB9O1xuXG4gIERyYWdEcm9wTWFuYWdlci5wcm90b3R5cGUuZ2V0UmVnaXN0cnkgPSBmdW5jdGlvbiBnZXRSZWdpc3RyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RyeTtcbiAgfTtcblxuICBEcmFnRHJvcE1hbmFnZXIucHJvdG90eXBlLmdldEFjdGlvbnMgPSBmdW5jdGlvbiBnZXRBY3Rpb25zKCkge1xuICAgIHZhciBtYW5hZ2VyID0gdGhpcztcbiAgICB2YXIgZGlzcGF0Y2ggPSB0aGlzLnN0b3JlLmRpc3BhdGNoO1xuXG4gICAgZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IGFjdGlvbkNyZWF0b3IuYXBwbHkobWFuYWdlciwgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZHJhZ0Ryb3BBY3Rpb25zKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBkcmFnRHJvcEFjdGlvbnNba2V5XSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGJvdW5kQWN0aW9ucywga2V5KSB7XG4gICAgICBib3VuZEFjdGlvbnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGRyYWdEcm9wQWN0aW9uc1trZXldKTtcbiAgICAgIHJldHVybiBib3VuZEFjdGlvbnM7XG4gICAgfSwge30pO1xuICB9O1xuXG4gIHJldHVybiBEcmFnRHJvcE1hbmFnZXI7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEcmFnRHJvcE1hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvRHJhZ0Ryb3BNYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQWN0aW9uVHlwZXMgPSB1bmRlZmluZWQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZVN0b3JlO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQbGFpbk9iamVjdCk7XG5cbnZhciBfc3ltYm9sT2JzZXJ2YWJsZSA9IHJlcXVpcmUoJ3N5bWJvbC1vYnNlcnZhYmxlJyk7XG5cbnZhciBfc3ltYm9sT2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2xPYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgQWN0aW9uVHlwZXMgPSBleHBvcnRzLkFjdGlvblR5cGVzID0ge1xuICBJTklUOiAnQEByZWR1eC9JTklUJ1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW2luaXRpYWxTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZW5oYW5jZXIgVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAqXG4gKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBpbml0aWFsU3RhdGU7XG4gICAgaW5pdGlhbFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBpbml0aWFsU3RhdGU7XG4gIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgdmFyIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hhbmdlIGxpc3RlbmVyLiBJdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCxcbiAgICogYW5kIHNvbWUgcGFydCBvZiB0aGUgc3RhdGUgdHJlZSBtYXkgcG90ZW50aWFsbHkgaGF2ZSBjaGFuZ2VkLiBZb3UgbWF5IHRoZW5cbiAgICogY2FsbCBgZ2V0U3RhdGUoKWAgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGluc2lkZSB0aGUgY2FsbGJhY2suXG4gICAqXG4gICAqIFlvdSBtYXkgY2FsbCBgZGlzcGF0Y2goKWAgZnJvbSBhIGNoYW5nZSBsaXN0ZW5lciwgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqIGNhdmVhdHM6XG4gICAqXG4gICAqIDEuIFRoZSBzdWJzY3JpcHRpb25zIGFyZSBzbmFwc2hvdHRlZCBqdXN0IGJlZm9yZSBldmVyeSBgZGlzcGF0Y2goKWAgY2FsbC5cbiAgICogSWYgeW91IHN1YnNjcmliZSBvciB1bnN1YnNjcmliZSB3aGlsZSB0aGUgbGlzdGVuZXJzIGFyZSBiZWluZyBpbnZva2VkLCB0aGlzXG4gICAqIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdCBvbiB0aGUgYGRpc3BhdGNoKClgIHRoYXQgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgKiBIb3dldmVyLCB0aGUgbmV4dCBgZGlzcGF0Y2goKWAgY2FsbCwgd2hldGhlciBuZXN0ZWQgb3Igbm90LCB3aWxsIHVzZSBhIG1vcmVcbiAgICogcmVjZW50IHNuYXBzaG90IG9mIHRoZSBzdWJzY3JpcHRpb24gbGlzdC5cbiAgICpcbiAgICogMi4gVGhlIGxpc3RlbmVyIHNob3VsZCBub3QgZXhwZWN0IHRvIHNlZSBhbGwgc3RhdGUgY2hhbmdlcywgYXMgdGhlIHN0YXRlXG4gICAqIG1pZ2h0IGhhdmUgYmVlbiB1cGRhdGVkIG11bHRpcGxlIHRpbWVzIGR1cmluZyBhIG5lc3RlZCBgZGlzcGF0Y2goKWAgYmVmb3JlXG4gICAqIHRoZSBsaXN0ZW5lciBpcyBjYWxsZWQuIEl0IGlzLCBob3dldmVyLCBndWFyYW50ZWVkIHRoYXQgYWxsIHN1YnNjcmliZXJzXG4gICAqIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBgZGlzcGF0Y2goKWAgc3RhcnRlZCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBsYXRlc3RcbiAgICogc3RhdGUgYnkgdGhlIHRpbWUgaXQgZXhpdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBldmVyeSBkaXNwYXRjaC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGlzIGNoYW5nZSBsaXN0ZW5lci5cbiAgICovXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcblxuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcblxuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghKDAsIF9pc1BsYWluT2JqZWN0MltcImRlZmF1bHRcIl0pKGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG4gICAqL1xuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cblxuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmW19zeW1ib2xPYnNlcnZhYmxlMltcImRlZmF1bHRcIl1dID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfVxuXG4gIC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyW19zeW1ib2xPYnNlcnZhYmxlMltcImRlZmF1bHRcIl1dID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgvbGliL2NyZWF0ZVN0b3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc0hvc3RPYmplY3QgPSByZXF1aXJlKCcuL19pc0hvc3RPYmplY3QnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHxcbiAgICAgIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpICE9IG9iamVjdFRhZyB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC9+L2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbi8qKlxuICogR2V0cyB0aGUgYFtbUHJvdG90eXBlXV1gIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge251bGx8T2JqZWN0fSBSZXR1cm5zIHRoZSBgW1tQcm90b3R5cGVdXWAuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3RvdHlwZSh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlR2V0UHJvdG90eXBlKE9iamVjdCh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4L34vbG9kYXNoL19nZXRQcm90b3R5cGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0hvc3RPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC9+L2xvZGFzaC9faXNIb3N0T2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4L34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBnbG9iYWwgd2luZG93ICovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9wb255ZmlsbCcpKGdsb2JhbCB8fCB3aW5kb3cgfHwgdGhpcyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKFN5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRTeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N5bWJvbC1vYnNlcnZhYmxlL3BvbnlmaWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2RyYWdPZmZzZXQgPSByZXF1aXJlKCcuL2RyYWdPZmZzZXQnKTtcblxudmFyIF9kcmFnT2Zmc2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RyYWdPZmZzZXQpO1xuXG52YXIgX2RyYWdPcGVyYXRpb24gPSByZXF1aXJlKCcuL2RyYWdPcGVyYXRpb24nKTtcblxudmFyIF9kcmFnT3BlcmF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RyYWdPcGVyYXRpb24pO1xuXG52YXIgX3JlZkNvdW50ID0gcmVxdWlyZSgnLi9yZWZDb3VudCcpO1xuXG52YXIgX3JlZkNvdW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZkNvdW50KTtcblxudmFyIF9kaXJ0eUhhbmRsZXJJZHMgPSByZXF1aXJlKCcuL2RpcnR5SGFuZGxlcklkcycpO1xuXG52YXIgX2RpcnR5SGFuZGxlcklkczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaXJ0eUhhbmRsZXJJZHMpO1xuXG52YXIgX3N0YXRlSWQgPSByZXF1aXJlKCcuL3N0YXRlSWQnKTtcblxudmFyIF9zdGF0ZUlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlSWQpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgc3RhdGUgPSB7fTtcblxuICByZXR1cm4ge1xuICAgIGRpcnR5SGFuZGxlcklkczogX2RpcnR5SGFuZGxlcklkczJbJ2RlZmF1bHQnXShzdGF0ZS5kaXJ0eUhhbmRsZXJJZHMsIGFjdGlvbiwgc3RhdGUuZHJhZ09wZXJhdGlvbiksXG4gICAgZHJhZ09mZnNldDogX2RyYWdPZmZzZXQyWydkZWZhdWx0J10oc3RhdGUuZHJhZ09mZnNldCwgYWN0aW9uKSxcbiAgICByZWZDb3VudDogX3JlZkNvdW50MlsnZGVmYXVsdCddKHN0YXRlLnJlZkNvdW50LCBhY3Rpb24pLFxuICAgIGRyYWdPcGVyYXRpb246IF9kcmFnT3BlcmF0aW9uMlsnZGVmYXVsdCddKHN0YXRlLmRyYWdPcGVyYXRpb24sIGFjdGlvbiksXG4gICAgc3RhdGVJZDogX3N0YXRlSWQyWydkZWZhdWx0J10oc3RhdGUuc3RhdGVJZClcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRyYWdPZmZzZXQ7XG5leHBvcnRzLmdldFNvdXJjZUNsaWVudE9mZnNldCA9IGdldFNvdXJjZUNsaWVudE9mZnNldDtcbmV4cG9ydHMuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0ID0gZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0O1xuXG52YXIgX2FjdGlvbnNEcmFnRHJvcCA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZHJhZ0Ryb3AnKTtcblxudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldDogbnVsbCxcbiAgaW5pdGlhbENsaWVudE9mZnNldDogbnVsbCxcbiAgY2xpZW50T2Zmc2V0OiBudWxsXG59O1xuXG5mdW5jdGlvbiBhcmVPZmZzZXRzRXF1YWwob2Zmc2V0QSwgb2Zmc2V0Qikge1xuICBpZiAob2Zmc2V0QSA9PT0gb2Zmc2V0Qikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBvZmZzZXRBICYmIG9mZnNldEIgJiYgb2Zmc2V0QS54ID09PSBvZmZzZXRCLnggJiYgb2Zmc2V0QS55ID09PSBvZmZzZXRCLnk7XG59XG5cbmZ1bmN0aW9uIGRyYWdPZmZzZXQoc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5CRUdJTl9EUkFHOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldDogYWN0aW9uLnNvdXJjZUNsaWVudE9mZnNldCxcbiAgICAgICAgaW5pdGlhbENsaWVudE9mZnNldDogYWN0aW9uLmNsaWVudE9mZnNldCxcbiAgICAgICAgY2xpZW50T2Zmc2V0OiBhY3Rpb24uY2xpZW50T2Zmc2V0XG4gICAgICB9O1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5IT1ZFUjpcbiAgICAgIGlmIChhcmVPZmZzZXRzRXF1YWwoc3RhdGUuY2xpZW50T2Zmc2V0LCBhY3Rpb24uY2xpZW50T2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNsaWVudE9mZnNldDogYWN0aW9uLmNsaWVudE9mZnNldFxuICAgICAgfSk7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkVORF9EUkFHOlxuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5EUk9QOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUNsaWVudE9mZnNldChzdGF0ZSkge1xuICB2YXIgY2xpZW50T2Zmc2V0ID0gc3RhdGUuY2xpZW50T2Zmc2V0O1xuICB2YXIgaW5pdGlhbENsaWVudE9mZnNldCA9IHN0YXRlLmluaXRpYWxDbGllbnRPZmZzZXQ7XG4gIHZhciBpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0ID0gc3RhdGUuaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldDtcblxuICBpZiAoIWNsaWVudE9mZnNldCB8fCAhaW5pdGlhbENsaWVudE9mZnNldCB8fCAhaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgeDogY2xpZW50T2Zmc2V0LnggKyBpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0LnggLSBpbml0aWFsQ2xpZW50T2Zmc2V0LngsXG4gICAgeTogY2xpZW50T2Zmc2V0LnkgKyBpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0LnkgLSBpbml0aWFsQ2xpZW50T2Zmc2V0LnlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KHN0YXRlKSB7XG4gIHZhciBjbGllbnRPZmZzZXQgPSBzdGF0ZS5jbGllbnRPZmZzZXQ7XG4gIHZhciBpbml0aWFsQ2xpZW50T2Zmc2V0ID0gc3RhdGUuaW5pdGlhbENsaWVudE9mZnNldDtcblxuICBpZiAoIWNsaWVudE9mZnNldCB8fCAhaW5pdGlhbENsaWVudE9mZnNldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgeDogY2xpZW50T2Zmc2V0LnggLSBpbml0aWFsQ2xpZW50T2Zmc2V0LngsXG4gICAgeTogY2xpZW50T2Zmc2V0LnkgLSBpbml0aWFsQ2xpZW50T2Zmc2V0LnlcbiAgfTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvZHJhZ09mZnNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmJlZ2luRHJhZyA9IGJlZ2luRHJhZztcbmV4cG9ydHMucHVibGlzaERyYWdTb3VyY2UgPSBwdWJsaXNoRHJhZ1NvdXJjZTtcbmV4cG9ydHMuaG92ZXIgPSBob3ZlcjtcbmV4cG9ydHMuZHJvcCA9IGRyb3A7XG5leHBvcnRzLmVuZERyYWcgPSBlbmREcmFnO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbHNNYXRjaGVzVHlwZSA9IHJlcXVpcmUoJy4uL3V0aWxzL21hdGNoZXNUeXBlJyk7XG5cbnZhciBfdXRpbHNNYXRjaGVzVHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc01hdGNoZXNUeXBlKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9sb2Rhc2hJc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKTtcblxudmFyIF9sb2Rhc2hJc0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzQXJyYXkpO1xuXG52YXIgX2xvZGFzaElzT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzT2JqZWN0Jyk7XG5cbnZhciBfbG9kYXNoSXNPYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNPYmplY3QpO1xuXG52YXIgQkVHSU5fRFJBRyA9ICdkbmQtY29yZS9CRUdJTl9EUkFHJztcbmV4cG9ydHMuQkVHSU5fRFJBRyA9IEJFR0lOX0RSQUc7XG52YXIgUFVCTElTSF9EUkFHX1NPVVJDRSA9ICdkbmQtY29yZS9QVUJMSVNIX0RSQUdfU09VUkNFJztcbmV4cG9ydHMuUFVCTElTSF9EUkFHX1NPVVJDRSA9IFBVQkxJU0hfRFJBR19TT1VSQ0U7XG52YXIgSE9WRVIgPSAnZG5kLWNvcmUvSE9WRVInO1xuZXhwb3J0cy5IT1ZFUiA9IEhPVkVSO1xudmFyIERST1AgPSAnZG5kLWNvcmUvRFJPUCc7XG5leHBvcnRzLkRST1AgPSBEUk9QO1xudmFyIEVORF9EUkFHID0gJ2RuZC1jb3JlL0VORF9EUkFHJztcblxuZXhwb3J0cy5FTkRfRFJBRyA9IEVORF9EUkFHO1xuXG5mdW5jdGlvbiBiZWdpbkRyYWcoc291cmNlSWRzKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgdmFyIF9yZWYkcHVibGlzaFNvdXJjZSA9IF9yZWYucHVibGlzaFNvdXJjZTtcbiAgdmFyIHB1Ymxpc2hTb3VyY2UgPSBfcmVmJHB1Ymxpc2hTb3VyY2UgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJHB1Ymxpc2hTb3VyY2U7XG4gIHZhciBfcmVmJGNsaWVudE9mZnNldCA9IF9yZWYuY2xpZW50T2Zmc2V0O1xuICB2YXIgY2xpZW50T2Zmc2V0ID0gX3JlZiRjbGllbnRPZmZzZXQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcmVmJGNsaWVudE9mZnNldDtcbiAgdmFyIGdldFNvdXJjZUNsaWVudE9mZnNldCA9IF9yZWYuZ2V0U291cmNlQ2xpZW50T2Zmc2V0O1xuXG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzQXJyYXkyWydkZWZhdWx0J10oc291cmNlSWRzKSwgJ0V4cGVjdGVkIHNvdXJjZUlkcyB0byBiZSBhbiBhcnJheS4nKTtcblxuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICB2YXIgcmVnaXN0cnkgPSB0aGlzLmdldFJlZ2lzdHJ5KCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oIW1vbml0b3IuaXNEcmFnZ2luZygpLCAnQ2Fubm90IGNhbGwgYmVnaW5EcmFnIHdoaWxlIGRyYWdnaW5nLicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlSWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShyZWdpc3RyeS5nZXRTb3VyY2Uoc291cmNlSWRzW2ldKSwgJ0V4cGVjdGVkIHNvdXJjZUlkcyB0byBiZSByZWdpc3RlcmVkLicpO1xuICB9XG5cbiAgdmFyIHNvdXJjZUlkID0gbnVsbDtcbiAgZm9yICh2YXIgaSA9IHNvdXJjZUlkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChtb25pdG9yLmNhbkRyYWdTb3VyY2Uoc291cmNlSWRzW2ldKSkge1xuICAgICAgc291cmNlSWQgPSBzb3VyY2VJZHNbaV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKHNvdXJjZUlkID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNvdXJjZUNsaWVudE9mZnNldCA9IG51bGw7XG4gIGlmIChjbGllbnRPZmZzZXQpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBnZXRTb3VyY2VDbGllbnRPZmZzZXQgPT09ICdmdW5jdGlvbicsICdXaGVuIGNsaWVudE9mZnNldCBpcyBwcm92aWRlZCwgZ2V0U291cmNlQ2xpZW50T2Zmc2V0IG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICBzb3VyY2VDbGllbnRPZmZzZXQgPSBnZXRTb3VyY2VDbGllbnRPZmZzZXQoc291cmNlSWQpO1xuICB9XG5cbiAgdmFyIHNvdXJjZSA9IHJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZCk7XG4gIHZhciBpdGVtID0gc291cmNlLmJlZ2luRHJhZyhtb25pdG9yLCBzb3VyY2VJZCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzT2JqZWN0MlsnZGVmYXVsdCddKGl0ZW0pLCAnSXRlbSBtdXN0IGJlIGFuIG9iamVjdC4nKTtcblxuICByZWdpc3RyeS5waW5Tb3VyY2Uoc291cmNlSWQpO1xuXG4gIHZhciBpdGVtVHlwZSA9IHJlZ2lzdHJ5LmdldFNvdXJjZVR5cGUoc291cmNlSWQpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEJFR0lOX0RSQUcsXG4gICAgaXRlbVR5cGU6IGl0ZW1UeXBlLFxuICAgIGl0ZW06IGl0ZW0sXG4gICAgc291cmNlSWQ6IHNvdXJjZUlkLFxuICAgIGNsaWVudE9mZnNldDogY2xpZW50T2Zmc2V0LFxuICAgIHNvdXJjZUNsaWVudE9mZnNldDogc291cmNlQ2xpZW50T2Zmc2V0LFxuICAgIGlzU291cmNlUHVibGljOiBwdWJsaXNoU291cmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hEcmFnU291cmNlKG1hbmFnZXIpIHtcbiAgdmFyIG1vbml0b3IgPSB0aGlzLmdldE1vbml0b3IoKTtcbiAgaWYgKCFtb25pdG9yLmlzRHJhZ2dpbmcoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogUFVCTElTSF9EUkFHX1NPVVJDRVxuICB9O1xufVxuXG5mdW5jdGlvbiBob3Zlcih0YXJnZXRJZHMpIHtcbiAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgdmFyIF9yZWYyJGNsaWVudE9mZnNldCA9IF9yZWYyLmNsaWVudE9mZnNldDtcbiAgdmFyIGNsaWVudE9mZnNldCA9IF9yZWYyJGNsaWVudE9mZnNldCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWYyJGNsaWVudE9mZnNldDtcblxuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF9sb2Rhc2hJc0FycmF5MlsnZGVmYXVsdCddKHRhcmdldElkcyksICdFeHBlY3RlZCB0YXJnZXRJZHMgdG8gYmUgYW4gYXJyYXkuJyk7XG4gIHRhcmdldElkcyA9IHRhcmdldElkcy5zbGljZSgwKTtcblxuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICB2YXIgcmVnaXN0cnkgPSB0aGlzLmdldFJlZ2lzdHJ5KCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10obW9uaXRvci5pc0RyYWdnaW5nKCksICdDYW5ub3QgY2FsbCBob3ZlciB3aGlsZSBub3QgZHJhZ2dpbmcuJyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oIW1vbml0b3IuZGlkRHJvcCgpLCAnQ2Fubm90IGNhbGwgaG92ZXIgYWZ0ZXIgZHJvcC4nKTtcblxuICAvLyBGaXJzdCBjaGVjayBpbnZhcmlhbnRzLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldElkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0YXJnZXRJZCA9IHRhcmdldElkc1tpXTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRhcmdldElkcy5sYXN0SW5kZXhPZih0YXJnZXRJZCkgPT09IGksICdFeHBlY3RlZCB0YXJnZXRJZHMgdG8gYmUgdW5pcXVlIGluIHRoZSBwYXNzZWQgYXJyYXkuJyk7XG5cbiAgICB2YXIgdGFyZ2V0ID0gcmVnaXN0cnkuZ2V0VGFyZ2V0KHRhcmdldElkKTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRhcmdldCwgJ0V4cGVjdGVkIHRhcmdldElkcyB0byBiZSByZWdpc3RlcmVkLicpO1xuICB9XG5cbiAgdmFyIGRyYWdnZWRJdGVtVHlwZSA9IG1vbml0b3IuZ2V0SXRlbVR5cGUoKTtcblxuICAvLyBSZW1vdmUgdGhvc2UgdGFyZ2V0SWRzIHRoYXQgZG9uJ3QgbWF0Y2ggdGhlIHRhcmdldFR5cGUuICBUaGlzXG4gIC8vIGZpeGVzIHNoYWxsb3cgaXNPdmVyIHdoaWNoIHdvdWxkIG9ubHkgYmUgbm9uLXNoYWxsb3cgYmVjYXVzZSBvZlxuICAvLyBub24tbWF0Y2hpbmcgdGFyZ2V0cy5cbiAgZm9yICh2YXIgaSA9IHRhcmdldElkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciB0YXJnZXRJZCA9IHRhcmdldElkc1tpXTtcbiAgICB2YXIgdGFyZ2V0VHlwZSA9IHJlZ2lzdHJ5LmdldFRhcmdldFR5cGUodGFyZ2V0SWQpO1xuICAgIGlmICghX3V0aWxzTWF0Y2hlc1R5cGUyWydkZWZhdWx0J10odGFyZ2V0VHlwZSwgZHJhZ2dlZEl0ZW1UeXBlKSkge1xuICAgICAgdGFyZ2V0SWRzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaW5hbGx5IGNhbGwgaG92ZXIgb24gYWxsIG1hdGNoaW5nIHRhcmdldHMuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0SWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRhcmdldElkID0gdGFyZ2V0SWRzW2ldO1xuICAgIHZhciB0YXJnZXQgPSByZWdpc3RyeS5nZXRUYXJnZXQodGFyZ2V0SWQpO1xuICAgIHRhcmdldC5ob3Zlcihtb25pdG9yLCB0YXJnZXRJZCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IEhPVkVSLFxuICAgIHRhcmdldElkczogdGFyZ2V0SWRzLFxuICAgIGNsaWVudE9mZnNldDogY2xpZW50T2Zmc2V0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRyb3AoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIG1vbml0b3IgPSB0aGlzLmdldE1vbml0b3IoKTtcbiAgdmFyIHJlZ2lzdHJ5ID0gdGhpcy5nZXRSZWdpc3RyeSgpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKG1vbml0b3IuaXNEcmFnZ2luZygpLCAnQ2Fubm90IGNhbGwgZHJvcCB3aGlsZSBub3QgZHJhZ2dpbmcuJyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oIW1vbml0b3IuZGlkRHJvcCgpLCAnQ2Fubm90IGNhbGwgZHJvcCB0d2ljZSBkdXJpbmcgb25lIGRyYWcgb3BlcmF0aW9uLicpO1xuXG4gIHZhciB0YXJnZXRJZHMgPSBtb25pdG9yLmdldFRhcmdldElkcygpLmZpbHRlcihtb25pdG9yLmNhbkRyb3BPblRhcmdldCwgbW9uaXRvcik7XG5cbiAgdGFyZ2V0SWRzLnJldmVyc2UoKTtcbiAgdGFyZ2V0SWRzLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldElkLCBpbmRleCkge1xuICAgIHZhciB0YXJnZXQgPSByZWdpc3RyeS5nZXRUYXJnZXQodGFyZ2V0SWQpO1xuXG4gICAgdmFyIGRyb3BSZXN1bHQgPSB0YXJnZXQuZHJvcChtb25pdG9yLCB0YXJnZXRJZCk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgZHJvcFJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcgfHwgX2xvZGFzaElzT2JqZWN0MlsnZGVmYXVsdCddKGRyb3BSZXN1bHQpLCAnRHJvcCByZXN1bHQgbXVzdCBlaXRoZXIgYmUgYW4gb2JqZWN0IG9yIHVuZGVmaW5lZC4nKTtcbiAgICBpZiAodHlwZW9mIGRyb3BSZXN1bHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkcm9wUmVzdWx0ID0gaW5kZXggPT09IDAgPyB7fSA6IG1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xuICAgIH1cblxuICAgIF90aGlzLnN0b3JlLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IERST1AsXG4gICAgICBkcm9wUmVzdWx0OiBkcm9wUmVzdWx0XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmREcmFnKCkge1xuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICB2YXIgcmVnaXN0cnkgPSB0aGlzLmdldFJlZ2lzdHJ5KCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10obW9uaXRvci5pc0RyYWdnaW5nKCksICdDYW5ub3QgY2FsbCBlbmREcmFnIHdoaWxlIG5vdCBkcmFnZ2luZy4nKTtcblxuICB2YXIgc291cmNlSWQgPSBtb25pdG9yLmdldFNvdXJjZUlkKCk7XG4gIHZhciBzb3VyY2UgPSByZWdpc3RyeS5nZXRTb3VyY2Uoc291cmNlSWQsIHRydWUpO1xuICBzb3VyY2UuZW5kRHJhZyhtb25pdG9yLCBzb3VyY2VJZCk7XG5cbiAgcmVnaXN0cnkudW5waW5Tb3VyY2UoKTtcblxuICByZXR1cm4ge1xuICAgIHR5cGU6IEVORF9EUkFHXG4gIH07XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL2FjdGlvbnMvZHJhZ0Ryb3AuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gbWF0Y2hlc1R5cGU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hJc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKTtcblxudmFyIF9sb2Rhc2hJc0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzQXJyYXkpO1xuXG5mdW5jdGlvbiBtYXRjaGVzVHlwZSh0YXJnZXRUeXBlLCBkcmFnZ2VkSXRlbVR5cGUpIHtcbiAgaWYgKF9sb2Rhc2hJc0FycmF5MlsnZGVmYXVsdCddKHRhcmdldFR5cGUpKSB7XG4gICAgcmV0dXJuIHRhcmdldFR5cGUuc29tZShmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQgPT09IGRyYWdnZWRJdGVtVHlwZTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGFyZ2V0VHlwZSA9PT0gZHJhZ2dlZEl0ZW1UeXBlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi91dGlscy9tYXRjaGVzVHlwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQHR5cGUge0Z1bmN0aW9ufVxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9pc0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbnZhcmlhbnQvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZHJhZ09wZXJhdGlvbjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2FjdGlvbnNEcmFnRHJvcCA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZHJhZ0Ryb3AnKTtcblxudmFyIF9hY3Rpb25zUmVnaXN0cnkgPSByZXF1aXJlKCcuLi9hY3Rpb25zL3JlZ2lzdHJ5Jyk7XG5cbnZhciBfbG9kYXNoV2l0aG91dCA9IHJlcXVpcmUoJ2xvZGFzaC93aXRob3V0Jyk7XG5cbnZhciBfbG9kYXNoV2l0aG91dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hXaXRob3V0KTtcblxudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgaXRlbVR5cGU6IG51bGwsXG4gIGl0ZW06IG51bGwsXG4gIHNvdXJjZUlkOiBudWxsLFxuICB0YXJnZXRJZHM6IFtdLFxuICBkcm9wUmVzdWx0OiBudWxsLFxuICBkaWREcm9wOiBmYWxzZSxcbiAgaXNTb3VyY2VQdWJsaWM6IG51bGxcbn07XG5cbmZ1bmN0aW9uIGRyYWdPcGVyYXRpb24oc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5CRUdJTl9EUkFHOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtVHlwZTogYWN0aW9uLml0ZW1UeXBlLFxuICAgICAgICBpdGVtOiBhY3Rpb24uaXRlbSxcbiAgICAgICAgc291cmNlSWQ6IGFjdGlvbi5zb3VyY2VJZCxcbiAgICAgICAgaXNTb3VyY2VQdWJsaWM6IGFjdGlvbi5pc1NvdXJjZVB1YmxpYyxcbiAgICAgICAgZHJvcFJlc3VsdDogbnVsbCxcbiAgICAgICAgZGlkRHJvcDogZmFsc2VcbiAgICAgIH0pO1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5QVUJMSVNIX0RSQUdfU09VUkNFOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1NvdXJjZVB1YmxpYzogdHJ1ZVxuICAgICAgfSk7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkhPVkVSOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICB0YXJnZXRJZHM6IGFjdGlvbi50YXJnZXRJZHNcbiAgICAgIH0pO1xuICAgIGNhc2UgX2FjdGlvbnNSZWdpc3RyeS5SRU1PVkVfVEFSR0VUOlxuICAgICAgaWYgKHN0YXRlLnRhcmdldElkcy5pbmRleE9mKGFjdGlvbi50YXJnZXRJZCkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgdGFyZ2V0SWRzOiBfbG9kYXNoV2l0aG91dDJbJ2RlZmF1bHQnXShzdGF0ZS50YXJnZXRJZHMsIGFjdGlvbi50YXJnZXRJZClcbiAgICAgIH0pO1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5EUk9QOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBkcm9wUmVzdWx0OiBhY3Rpb24uZHJvcFJlc3VsdCxcbiAgICAgICAgZGlkRHJvcDogdHJ1ZSxcbiAgICAgICAgdGFyZ2V0SWRzOiBbXVxuICAgICAgfSk7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkVORF9EUkFHOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtVHlwZTogbnVsbCxcbiAgICAgICAgaXRlbTogbnVsbCxcbiAgICAgICAgc291cmNlSWQ6IG51bGwsXG4gICAgICAgIGRyb3BSZXN1bHQ6IG51bGwsXG4gICAgICAgIGRpZERyb3A6IGZhbHNlLFxuICAgICAgICBpc1NvdXJjZVB1YmxpYzogbnVsbCxcbiAgICAgICAgdGFyZ2V0SWRzOiBbXVxuICAgICAgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvZHJhZ09wZXJhdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmFkZFNvdXJjZSA9IGFkZFNvdXJjZTtcbmV4cG9ydHMuYWRkVGFyZ2V0ID0gYWRkVGFyZ2V0O1xuZXhwb3J0cy5yZW1vdmVTb3VyY2UgPSByZW1vdmVTb3VyY2U7XG5leHBvcnRzLnJlbW92ZVRhcmdldCA9IHJlbW92ZVRhcmdldDtcbnZhciBBRERfU09VUkNFID0gJ2RuZC1jb3JlL0FERF9TT1VSQ0UnO1xuZXhwb3J0cy5BRERfU09VUkNFID0gQUREX1NPVVJDRTtcbnZhciBBRERfVEFSR0VUID0gJ2RuZC1jb3JlL0FERF9UQVJHRVQnO1xuZXhwb3J0cy5BRERfVEFSR0VUID0gQUREX1RBUkdFVDtcbnZhciBSRU1PVkVfU09VUkNFID0gJ2RuZC1jb3JlL1JFTU9WRV9TT1VSQ0UnO1xuZXhwb3J0cy5SRU1PVkVfU09VUkNFID0gUkVNT1ZFX1NPVVJDRTtcbnZhciBSRU1PVkVfVEFSR0VUID0gJ2RuZC1jb3JlL1JFTU9WRV9UQVJHRVQnO1xuXG5leHBvcnRzLlJFTU9WRV9UQVJHRVQgPSBSRU1PVkVfVEFSR0VUO1xuXG5mdW5jdGlvbiBhZGRTb3VyY2Uoc291cmNlSWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBRERfU09VUkNFLFxuICAgIHNvdXJjZUlkOiBzb3VyY2VJZFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRUYXJnZXQodGFyZ2V0SWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBRERfVEFSR0VULFxuICAgIHRhcmdldElkOiB0YXJnZXRJZFxuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVTb3VyY2Uoc291cmNlSWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRU1PVkVfU09VUkNFLFxuICAgIHNvdXJjZUlkOiBzb3VyY2VJZFxuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXJnZXQodGFyZ2V0SWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRU1PVkVfVEFSR0VULFxuICAgIHRhcmdldElkOiB0YXJnZXRJZFxuICB9O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9hY3Rpb25zL3JlZ2lzdHJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlRGlmZmVyZW5jZSA9IHJlcXVpcmUoJy4vX2Jhc2VEaWZmZXJlbmNlJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgZXhjbHVkaW5nIGFsbCBnaXZlbiB2YWx1ZXMgdXNpbmdcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Li4uKn0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBleGNsdWRlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzLlxuICogQHNlZSBfLmRpZmZlcmVuY2UsIF8ueG9yXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ud2l0aG91dChbMSwgMiwgMSwgM10sIDEsIDIpO1xuICogLy8gPT4gWzNdXG4gKi9cbnZhciB3aXRob3V0ID0gcmVzdChmdW5jdGlvbihhcnJheSwgdmFsdWVzKSB7XG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdChhcnJheSlcbiAgICA/IGJhc2VEaWZmZXJlbmNlKGFycmF5LCB2YWx1ZXMpXG4gICAgOiBbXTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhvdXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC93aXRob3V0LmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGxpa2UgYF8uZGlmZmVyZW5jZWAgd2l0aG91dCBzdXBwb3J0XG4gKiBmb3IgZXhjbHVkaW5nIG11bHRpcGxlIGFycmF5cyBvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGV4Y2x1ZGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VEaWZmZXJlbmNlKGFycmF5LCB2YWx1ZXMsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICB2YWx1ZXNMZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xuXG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoaXRlcmF0ZWUpIHtcbiAgICB2YWx1ZXMgPSBhcnJheU1hcCh2YWx1ZXMsIGJhc2VVbmFyeShpdGVyYXRlZSkpO1xuICB9XG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICB9XG4gIGVsc2UgaWYgKHZhbHVlcy5sZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB2YWx1ZXMgPSBuZXcgU2V0Q2FjaGUodmFsdWVzKTtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciB2YWx1ZXNJbmRleCA9IHZhbHVlc0xlbmd0aDtcbiAgICAgIHdoaWxlICh2YWx1ZXNJbmRleC0tKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbdmFsdWVzSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyh2YWx1ZXMsIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VEaWZmZXJlbmNlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Jhc2VEaWZmZXJlbmNlLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPyB2YWx1ZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19TZXRDYWNoZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19NYXBDYWNoZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fSGFzaC5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19oYXNoQ2xlYXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzTmF0aXZlID0gcmVxdWlyZSgnLi9pc05hdGl2ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gb2JqZWN0W2tleV07XG4gIHJldHVybiBpc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNIb3N0T2JqZWN0ID0gcmVxdWlyZSgnLi9faXNIb3N0T2JqZWN0JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOYXRpdmUoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOYXRpdmUoXyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc05hdGl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzTmF0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDggd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIHdlYWsgbWFwIGNvbnN0cnVjdG9ycyxcbiAgLy8gYW5kIFBoYW50b21KUyAxLjkgd2hpY2ggcmV0dXJucyAnZnVuY3Rpb24nIGZvciBgTm9kZUxpc3RgIGluc3RhbmNlcy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNIb3N0T2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2lzSG9zdE9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fdG9Tb3VyY2UuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9faGFzaEdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gZGF0YVtrZXldICE9PSB1bmRlZmluZWQgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19oYXNoSGFzLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19oYXNoU2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX0xpc3RDYWNoZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqIHZhciBvdGhlciA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvZXEuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19NYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNoZWNrR2xvYmFsID0gcmVxdWlyZSgnLi9fY2hlY2tHbG9iYWwnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZXJtaW5lIGlmIHZhbHVlcyBhcmUgb2YgdGhlIGxhbmd1YWdlIHR5cGUgYE9iamVjdGAuICovXG52YXIgb2JqZWN0VHlwZXMgPSB7XG4gICdmdW5jdGlvbic6IHRydWUsXG4gICdvYmplY3QnOiB0cnVlXG59O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gKG9iamVjdFR5cGVzW3R5cGVvZiBleHBvcnRzXSAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlKVxuICA/IGV4cG9ydHNcbiAgOiB1bmRlZmluZWQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gKG9iamVjdFR5cGVzW3R5cGVvZiBtb2R1bGVdICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlKVxuICA/IG1vZHVsZVxuICA6IHVuZGVmaW5lZDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gY2hlY2tHbG9iYWwoZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSAmJiB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSBjaGVja0dsb2JhbChvYmplY3RUeXBlc1t0eXBlb2Ygc2VsZl0gJiYgc2VsZik7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgd2luZG93YC4gKi9cbnZhciBmcmVlV2luZG93ID0gY2hlY2tHbG9iYWwob2JqZWN0VHlwZXNbdHlwZW9mIHdpbmRvd10gJiYgd2luZG93KTtcblxuLyoqIERldGVjdCBgdGhpc2AgYXMgdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgdGhpc0dsb2JhbCA9IGNoZWNrR2xvYmFsKG9iamVjdFR5cGVzW3R5cGVvZiB0aGlzXSAmJiB0aGlzKTtcblxuLyoqXG4gKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LlxuICpcbiAqIFRoZSBgdGhpc2AgdmFsdWUgaXMgdXNlZCBpZiBpdCdzIHRoZSBnbG9iYWwgb2JqZWN0IHRvIGF2b2lkIEdyZWFzZW1vbmtleSdzXG4gKiByZXN0cmljdGVkIGB3aW5kb3dgIG9iamVjdCwgb3RoZXJ3aXNlIHRoZSBgd2luZG93YCBvYmplY3QgaXMgdXNlZC5cbiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8XG4gICgoZnJlZVdpbmRvdyAhPT0gKHRoaXNHbG9iYWwgJiYgdGhpc0dsb2JhbC53aW5kb3cpKSAmJiBmcmVlV2luZG93KSB8fFxuICAgIGZyZWVTZWxmIHx8IHRoaXNHbG9iYWwgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX3Jvb3QuanNcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgZ2xvYmFsIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7bnVsbHxPYmplY3R9IFJldHVybnMgYHZhbHVlYCBpZiBpdCdzIGEgZ2xvYmFsIG9iamVjdCwgZWxzZSBgbnVsbGAuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrR2xvYmFsKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgJiYgdmFsdWUuT2JqZWN0ID09PSBPYmplY3QpID8gdmFsdWUgOiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrR2xvYmFsO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2NoZWNrR2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9faXNLZXlhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanNcbiAqKiBtb2R1bGUgaWQgPSA2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICBnZXRNYXBEYXRhKHRoaXMsIGtleSkuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19tYXBDYWNoZVNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHJldHVybiAhIWFycmF5Lmxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpbmRleE9mTmFOID0gcmVxdWlyZSgnLi9faW5kZXhPZk5hTicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICByZXR1cm4gaW5kZXhPZk5hTihhcnJheSwgZnJvbUluZGV4KTtcbiAgfVxuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYE5hTmAgaXMgZm91bmQgaW4gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCBgTmFOYCwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBpbmRleE9mTmFOKGFycmF5LCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMCA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIHZhciBvdGhlciA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAob3RoZXIgIT09IG90aGVyKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbmRleE9mTmFOO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2luZGV4T2ZOYU4uanNcbiAqKiBtb2R1bGUgaWQgPSA3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanNcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2FycmF5TWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyB3cmFwcGVyIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19iYXNlVW5hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2NhY2hlSGFzLmpzXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TGVuZ3RoID0gcmVxdWlyZSgnLi9fZ2V0TGVuZ3RoJyksXG4gICAgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aChnZXRMZW5ndGgodmFsdWUpKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGF2b2lkIGFcbiAqIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKSB0aGF0IGFmZmVjdHNcbiAqIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldExlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19nZXRMZW5ndGguanNcbiAqKiBtb2R1bGUgaWQgPSA3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9pc0xlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpO1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZVxuICogY3JlYXRlZCBmdW5jdGlvbiBhbmQgYXJndW1lbnRzIGZyb20gYHN0YXJ0YCBhbmQgYmV5b25kIHByb3ZpZGVkIGFzXG4gKiBhbiBhcnJheS5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgYmFzZWQgb24gdGhlXG4gKiBbcmVzdCBwYXJhbWV0ZXJdKGh0dHBzOi8vbWRuLmlvL3Jlc3RfcGFyYW1ldGVycykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBzYXkgPSBfLnJlc3QoZnVuY3Rpb24od2hhdCwgbmFtZXMpIHtcbiAqICAgcmV0dXJuIHdoYXQgKyAnICcgKyBfLmluaXRpYWwobmFtZXMpLmpvaW4oJywgJykgK1xuICogICAgIChfLnNpemUobmFtZXMpID4gMSA/ICcsICYgJyA6ICcnKSArIF8ubGFzdChuYW1lcyk7XG4gKiB9KTtcbiAqXG4gKiBzYXkoJ2hlbGxvJywgJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnKTtcbiAqIC8vID0+ICdoZWxsbyBmcmVkLCBiYXJuZXksICYgcGViYmxlcydcbiAqL1xuZnVuY3Rpb24gcmVzdChmdW5jLCBzdGFydCkge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiB0b0ludGVnZXIoc3RhcnQpLCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXJ0KSB7XG4gICAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJyYXkpO1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3NbMF0sIGFycmF5KTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmdzWzBdLCBhcmdzWzFdLCBhcnJheSk7XG4gICAgfVxuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIGluZGV4ID0gLTE7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gYXJyYXk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL3Jlc3QuanNcbiAqKiBtb2R1bGUgaWQgPSA4MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICB2YXIgbGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2FwcGx5LmpzXG4gKiogbW9kdWxlIGlkID0gODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b0Zpbml0ZSA9IHJlcXVpcmUoJy4vdG9GaW5pdGUnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIGludGVnZXIuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0ludGVnZXJgXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9pbnRlZ2VyKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBpbnRlZ2VyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvSW50ZWdlcigzLjIpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMuMicpO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRvRmluaXRlKHZhbHVlKSxcbiAgICAgIHJlbWFpbmRlciA9IHJlc3VsdCAlIDE7XG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gcmVzdWx0ID8gKHJlbWFpbmRlciA/IHJlc3VsdCAtIHJlbWFpbmRlciA6IHJlc3VsdCkgOiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvSW50ZWdlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL3RvSW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgTUFYX0lOVEVHRVIgPSAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwODtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTIuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvRmluaXRlKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvRmluaXRlKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b0Zpbml0ZShJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9GaW5pdGUoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvRmluaXRlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdmFsdWUgOiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvRmluaXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvdG9GaW5pdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA4NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IGlzRnVuY3Rpb24odmFsdWUudmFsdWVPZikgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvdG9OdW1iZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA4NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL2lzU3ltYm9sLmpzXG4gKiogbW9kdWxlIGlkID0gODZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlZkNvdW50O1xuXG52YXIgX2FjdGlvbnNSZWdpc3RyeSA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvcmVnaXN0cnknKTtcblxuZnVuY3Rpb24gcmVmQ291bnQoc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgc3RhdGUgPSAwO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuQUREX1NPVVJDRTpcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuQUREX1RBUkdFVDpcbiAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LlJFTU9WRV9TT1VSQ0U6XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LlJFTU9WRV9UQVJHRVQ6XG4gICAgICByZXR1cm4gc3RhdGUgLSAxO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL3JlZkNvdW50LmpzXG4gKiogbW9kdWxlIGlkID0gODdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRpcnR5SGFuZGxlcklkcztcbmV4cG9ydHMuYXJlRGlydHkgPSBhcmVEaXJ0eTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaFhvciA9IHJlcXVpcmUoJ2xvZGFzaC94b3InKTtcblxudmFyIF9sb2Rhc2hYb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoWG9yKTtcblxudmFyIF9sb2Rhc2hJbnRlcnNlY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaW50ZXJzZWN0aW9uJyk7XG5cbnZhciBfbG9kYXNoSW50ZXJzZWN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaEludGVyc2VjdGlvbik7XG5cbnZhciBfYWN0aW9uc0RyYWdEcm9wID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9kcmFnRHJvcCcpO1xuXG52YXIgX2FjdGlvbnNSZWdpc3RyeSA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvcmVnaXN0cnknKTtcblxudmFyIE5PTkUgPSBbXTtcbnZhciBBTEwgPSBbXTtcblxuZnVuY3Rpb24gZGlydHlIYW5kbGVySWRzKHN0YXRlLCBhY3Rpb24sIGRyYWdPcGVyYXRpb24pIHtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHN0YXRlID0gTk9ORTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkhPVkVSOlxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LkFERF9TT1VSQ0U6XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LkFERF9UQVJHRVQ6XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LlJFTU9WRV9UQVJHRVQ6XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LlJFTU9WRV9TT1VSQ0U6XG4gICAgICByZXR1cm4gTk9ORTtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuQkVHSU5fRFJBRzpcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuUFVCTElTSF9EUkFHX1NPVVJDRTpcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuRU5EX0RSQUc6XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkRST1A6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBBTEw7XG4gIH1cblxuICB2YXIgdGFyZ2V0SWRzID0gYWN0aW9uLnRhcmdldElkcztcbiAgdmFyIHByZXZUYXJnZXRJZHMgPSBkcmFnT3BlcmF0aW9uLnRhcmdldElkcztcblxuICB2YXIgZGlydHlIYW5kbGVySWRzID0gX2xvZGFzaFhvcjJbJ2RlZmF1bHQnXSh0YXJnZXRJZHMsIHByZXZUYXJnZXRJZHMpO1xuXG4gIHZhciBkaWRDaGFuZ2UgPSBmYWxzZTtcbiAgaWYgKGRpcnR5SGFuZGxlcklkcy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldElkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRhcmdldElkc1tpXSAhPT0gcHJldlRhcmdldElkc1tpXSkge1xuICAgICAgICBkaWRDaGFuZ2UgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGlkQ2hhbmdlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICghZGlkQ2hhbmdlKSB7XG4gICAgcmV0dXJuIE5PTkU7XG4gIH1cblxuICB2YXIgcHJldklubmVybW9zdFRhcmdldElkID0gcHJldlRhcmdldElkc1twcmV2VGFyZ2V0SWRzLmxlbmd0aCAtIDFdO1xuICB2YXIgaW5uZXJtb3N0VGFyZ2V0SWQgPSB0YXJnZXRJZHNbdGFyZ2V0SWRzLmxlbmd0aCAtIDFdO1xuXG4gIGlmIChwcmV2SW5uZXJtb3N0VGFyZ2V0SWQgIT09IGlubmVybW9zdFRhcmdldElkKSB7XG4gICAgaWYgKHByZXZJbm5lcm1vc3RUYXJnZXRJZCkge1xuICAgICAgZGlydHlIYW5kbGVySWRzLnB1c2gocHJldklubmVybW9zdFRhcmdldElkKTtcbiAgICB9XG4gICAgaWYgKGlubmVybW9zdFRhcmdldElkKSB7XG4gICAgICBkaXJ0eUhhbmRsZXJJZHMucHVzaChpbm5lcm1vc3RUYXJnZXRJZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcnR5SGFuZGxlcklkcztcbn1cblxuZnVuY3Rpb24gYXJlRGlydHkoc3RhdGUsIGhhbmRsZXJJZHMpIHtcbiAgaWYgKHN0YXRlID09PSBOT05FKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHN0YXRlID09PSBBTEwgfHwgdHlwZW9mIGhhbmRsZXJJZHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gX2xvZGFzaEludGVyc2VjdGlvbjJbJ2RlZmF1bHQnXShoYW5kbGVySWRzLCBzdGF0ZSkubGVuZ3RoID4gMDtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvZGlydHlIYW5kbGVySWRzLmpzXG4gKiogbW9kdWxlIGlkID0gODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgYmFzZVhvciA9IHJlcXVpcmUoJy4vX2Jhc2VYb3InKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB1bmlxdWUgdmFsdWVzIHRoYXQgaXMgdGhlXG4gKiBbc3ltbWV0cmljIGRpZmZlcmVuY2VdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1N5bW1ldHJpY19kaWZmZXJlbmNlKVxuICogb2YgdGhlIGdpdmVuIGFycmF5cy4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXMgZGV0ZXJtaW5lZCBieSB0aGUgb3JkZXJcbiAqIHRoZXkgb2NjdXIgaW4gdGhlIGFycmF5cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7Li4uQXJyYXl9IFthcnJheXNdIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGZpbHRlcmVkIHZhbHVlcy5cbiAqIEBzZWUgXy5kaWZmZXJlbmNlLCBfLndpdGhvdXRcbiAqIEBleGFtcGxlXG4gKlxuICogXy54b3IoWzIsIDFdLCBbNCwgMl0pO1xuICogLy8gPT4gWzEsIDRdXG4gKi9cbnZhciB4b3IgPSByZXN0KGZ1bmN0aW9uKGFycmF5cykge1xuICByZXR1cm4gYmFzZVhvcihhcnJheUZpbHRlcihhcnJheXMsIGlzQXJyYXlMaWtlT2JqZWN0KSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB4b3I7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC94b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA4OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA5MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGJhc2VEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi9fYmFzZURpZmZlcmVuY2UnKSxcbiAgICBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgbWV0aG9kcyBsaWtlIGBfLnhvcmAsIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMsIHRoYXQgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgdG8gaW5zcGVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlzIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gYmFzZVhvcihhcnJheXMsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXlzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciByZXN1bHQgPSByZXN1bHRcbiAgICAgID8gYXJyYXlQdXNoKFxuICAgICAgICAgIGJhc2VEaWZmZXJlbmNlKHJlc3VsdCwgYXJyYXlzW2luZGV4XSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpLFxuICAgICAgICAgIGJhc2VEaWZmZXJlbmNlKGFycmF5c1tpbmRleF0sIHJlc3VsdCwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpXG4gICAgICAgIClcbiAgICAgIDogYXJyYXlzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoKSA/IGJhc2VVbmlxKHJlc3VsdCwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVhvcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19iYXNlWG9yLmpzXG4gKiogbW9kdWxlIGlkID0gOTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzXG4gKiogbW9kdWxlIGlkID0gOTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpLFxuICAgIGNyZWF0ZVNldCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVNldCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmlxKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgc2VlbiA9IHJlc3VsdDtcblxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgfVxuICBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xuICAgIGlmIChzZXQpIHtcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XG4gICAgfVxuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKHNlZW5JbmRleC0tKSB7XG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXMoc2VlbiwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fYmFzZVVuaXEuanNcbiAqKiBtb2R1bGUgaWQgPSA5M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgYHZhbHVlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFkZCB0byB0aGUgc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IHNldC5cbiAqL1xudmFyIGNyZWF0ZVNldCA9ICEoU2V0ICYmICgxIC8gc2V0VG9BcnJheShuZXcgU2V0KFssLTBdKSlbMV0pID09IElORklOSVRZKSA/IG5vb3AgOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBTZXQodmFsdWVzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2NyZWF0ZVNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDk0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX1NldC5qc1xuICoqIG1vZHVsZSBpZCA9IDk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgbm8tb3BlcmF0aW9uIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdW5kZWZpbmVkYCByZWdhcmRsZXNzIG9mIHRoZVxuICogYXJndW1lbnRzIGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICd1c2VyJzogJ2ZyZWQnIH07XG4gKlxuICogXy5ub29wKG9iamVjdCkgPT09IHVuZGVmaW5lZDtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvbm9vcC5qc1xuICoqIG1vZHVsZSBpZCA9IDk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9+L2xvZGFzaC9fc2V0VG9BcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKCcuL19iYXNlSW50ZXJzZWN0aW9uJyksXG4gICAgY2FzdEFycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vX2Nhc3RBcnJheUxpa2VPYmplY3QnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB1bmlxdWUgdmFsdWVzIHRoYXQgYXJlIGluY2x1ZGVkIGluIGFsbCBnaXZlbiBhcnJheXNcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuIFRoZSBvcmRlciBvZiByZXN1bHQgdmFsdWVzIGlzIGRldGVybWluZWQgYnkgdGhlXG4gKiBvcmRlciB0aGV5IG9jY3VyIGluIHRoZSBmaXJzdCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7Li4uQXJyYXl9IFthcnJheXNdIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGludGVyc2VjdGluZyB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaW50ZXJzZWN0aW9uKFsyLCAxXSwgWzQsIDJdLCBbMSwgMl0pO1xuICogLy8gPT4gWzJdXG4gKi9cbnZhciBpbnRlcnNlY3Rpb24gPSByZXN0KGZ1bmN0aW9uKGFycmF5cykge1xuICB2YXIgbWFwcGVkID0gYXJyYXlNYXAoYXJyYXlzLCBjYXN0QXJyYXlMaWtlT2JqZWN0KTtcbiAgcmV0dXJuIChtYXBwZWQubGVuZ3RoICYmIG1hcHBlZFswXSA9PT0gYXJyYXlzWzBdKVxuICAgID8gYmFzZUludGVyc2VjdGlvbihtYXBwZWQpXG4gICAgOiBbXTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludGVyc2VjdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL2ludGVyc2VjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGxpa2UgYF8uaW50ZXJzZWN0aW9uYCwgd2l0aG91dCBzdXBwb3J0XG4gKiBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcywgdGhhdCBhY2NlcHRzIGFuIGFycmF5IG9mIGFycmF5cyB0byBpbnNwZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheXMgVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2Ygc2hhcmVkIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUludGVyc2VjdGlvbihhcnJheXMsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmNsdWRlcyA9IGNvbXBhcmF0b3IgPyBhcnJheUluY2x1ZGVzV2l0aCA6IGFycmF5SW5jbHVkZXMsXG4gICAgICBsZW5ndGggPSBhcnJheXNbMF0ubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gYXJyYXlzLmxlbmd0aCxcbiAgICAgIG90aEluZGV4ID0gb3RoTGVuZ3RoLFxuICAgICAgY2FjaGVzID0gQXJyYXkob3RoTGVuZ3RoKSxcbiAgICAgIG1heExlbmd0aCA9IEluZmluaXR5LFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKG90aEluZGV4LS0pIHtcbiAgICB2YXIgYXJyYXkgPSBhcnJheXNbb3RoSW5kZXhdO1xuICAgIGlmIChvdGhJbmRleCAmJiBpdGVyYXRlZSkge1xuICAgICAgYXJyYXkgPSBhcnJheU1hcChhcnJheSwgYmFzZVVuYXJ5KGl0ZXJhdGVlKSk7XG4gICAgfVxuICAgIG1heExlbmd0aCA9IG5hdGl2ZU1pbihhcnJheS5sZW5ndGgsIG1heExlbmd0aCk7XG4gICAgY2FjaGVzW290aEluZGV4XSA9ICFjb21wYXJhdG9yICYmIChpdGVyYXRlZSB8fCAobGVuZ3RoID49IDEyMCAmJiBhcnJheS5sZW5ndGggPj0gMTIwKSlcbiAgICAgID8gbmV3IFNldENhY2hlKG90aEluZGV4ICYmIGFycmF5KVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIH1cbiAgYXJyYXkgPSBhcnJheXNbMF07XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBzZWVuID0gY2FjaGVzWzBdO1xuXG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCAmJiByZXN1bHQubGVuZ3RoIDwgbWF4TGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoIShzZWVuXG4gICAgICAgICAgPyBjYWNoZUhhcyhzZWVuLCBjb21wdXRlZClcbiAgICAgICAgICA6IGluY2x1ZGVzKHJlc3VsdCwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpXG4gICAgICAgICkpIHtcbiAgICAgIG90aEluZGV4ID0gb3RoTGVuZ3RoO1xuICAgICAgd2hpbGUgKC0tb3RoSW5kZXgpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gY2FjaGVzW290aEluZGV4XTtcbiAgICAgICAgaWYgKCEoY2FjaGVcbiAgICAgICAgICAgICAgPyBjYWNoZUhhcyhjYWNoZSwgY29tcHV0ZWQpXG4gICAgICAgICAgICAgIDogaW5jbHVkZXMoYXJyYXlzW290aEluZGV4XSwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzZWVuKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUludGVyc2VjdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL34vbG9kYXNoL19iYXNlSW50ZXJzZWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGFuIGVtcHR5IGFycmF5IGlmIGl0J3Mgbm90IGFuIGFycmF5IGxpa2Ugb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fE9iamVjdH0gUmV0dXJucyB0aGUgY2FzdCBhcnJheS1saWtlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2FzdEFycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpID8gdmFsdWUgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0QXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvfi9sb2Rhc2gvX2Nhc3RBcnJheUxpa2VPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzdGF0ZUlkO1xuXG5mdW5jdGlvbiBzdGF0ZUlkKCkge1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzBdO1xuXG4gIHJldHVybiBzdGF0ZSArIDE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL3N0YXRlSWQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF91dGlsc01hdGNoZXNUeXBlID0gcmVxdWlyZSgnLi91dGlscy9tYXRjaGVzVHlwZScpO1xuXG52YXIgX3V0aWxzTWF0Y2hlc1R5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNNYXRjaGVzVHlwZSk7XG5cbnZhciBfbG9kYXNoSXNBcnJheSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0FycmF5Jyk7XG5cbnZhciBfbG9kYXNoSXNBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc0FycmF5KTtcblxudmFyIF9IYW5kbGVyUmVnaXN0cnkgPSByZXF1aXJlKCcuL0hhbmRsZXJSZWdpc3RyeScpO1xuXG52YXIgX0hhbmRsZXJSZWdpc3RyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IYW5kbGVyUmVnaXN0cnkpO1xuXG52YXIgX3JlZHVjZXJzRHJhZ09mZnNldCA9IHJlcXVpcmUoJy4vcmVkdWNlcnMvZHJhZ09mZnNldCcpO1xuXG52YXIgX3JlZHVjZXJzRGlydHlIYW5kbGVySWRzID0gcmVxdWlyZSgnLi9yZWR1Y2Vycy9kaXJ0eUhhbmRsZXJJZHMnKTtcblxudmFyIERyYWdEcm9wTW9uaXRvciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERyYWdEcm9wTW9uaXRvcihzdG9yZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnRHJvcE1vbml0b3IpO1xuXG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMucmVnaXN0cnkgPSBuZXcgX0hhbmRsZXJSZWdpc3RyeTJbJ2RlZmF1bHQnXShzdG9yZSk7XG4gIH1cblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLnN1YnNjcmliZVRvU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiBzdWJzY3JpYmVUb1N0YXRlQ2hhbmdlKGxpc3RlbmVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgaGFuZGxlcklkcyA9IF9yZWYuaGFuZGxlcklkcztcblxuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nLCAnbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGhhbmRsZXJJZHMgPT09ICd1bmRlZmluZWQnIHx8IF9sb2Rhc2hJc0FycmF5MlsnZGVmYXVsdCddKGhhbmRsZXJJZHMpLCAnaGFuZGxlcklkcywgd2hlbiBzcGVjaWZpZWQsIG11c3QgYmUgYW4gYXJyYXkgb2Ygc3RyaW5ncy4nKTtcblxuICAgIHZhciBwcmV2U3RhdGVJZCA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5zdGF0ZUlkO1xuICAgIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgdmFyIGN1cnJlbnRTdGF0ZUlkID0gc3RhdGUuc3RhdGVJZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBjYW5Ta2lwTGlzdGVuZXIgPSBjdXJyZW50U3RhdGVJZCA9PT0gcHJldlN0YXRlSWQgfHwgY3VycmVudFN0YXRlSWQgPT09IHByZXZTdGF0ZUlkICsgMSAmJiAhX3JlZHVjZXJzRGlydHlIYW5kbGVySWRzLmFyZURpcnR5KHN0YXRlLmRpcnR5SGFuZGxlcklkcywgaGFuZGxlcklkcyk7XG5cbiAgICAgICAgaWYgKCFjYW5Ta2lwTGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBwcmV2U3RhdGVJZCA9IGN1cnJlbnRTdGF0ZUlkO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zdWJzY3JpYmUoaGFuZGxlQ2hhbmdlKTtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLnN1YnNjcmliZVRvT2Zmc2V0Q2hhbmdlID0gZnVuY3Rpb24gc3Vic2NyaWJlVG9PZmZzZXRDaGFuZ2UobGlzdGVuZXIpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nLCAnbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuXG4gICAgdmFyIHByZXZpb3VzU3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldDtcbiAgICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IF90aGlzMi5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQ7XG4gICAgICBpZiAobmV4dFN0YXRlID09PSBwcmV2aW91c1N0YXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcHJldmlvdXNTdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2UpO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuY2FuRHJhZ1NvdXJjZSA9IGZ1bmN0aW9uIGNhbkRyYWdTb3VyY2Uoc291cmNlSWQpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5yZWdpc3RyeS5nZXRTb3VyY2Uoc291cmNlSWQpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oc291cmNlLCAnRXhwZWN0ZWQgdG8gZmluZCBhIHZhbGlkIHNvdXJjZS4nKTtcblxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2UuY2FuRHJhZyh0aGlzLCBzb3VyY2VJZCk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5jYW5Ecm9wT25UYXJnZXQgPSBmdW5jdGlvbiBjYW5Ecm9wT25UYXJnZXQodGFyZ2V0SWQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5yZWdpc3RyeS5nZXRUYXJnZXQodGFyZ2V0SWQpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGFyZ2V0LCAnRXhwZWN0ZWQgdG8gZmluZCBhIHZhbGlkIHRhcmdldC4nKTtcblxuICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKCkgfHwgdGhpcy5kaWREcm9wKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0VHlwZSA9IHRoaXMucmVnaXN0cnkuZ2V0VGFyZ2V0VHlwZSh0YXJnZXRJZCk7XG4gICAgdmFyIGRyYWdnZWRJdGVtVHlwZSA9IHRoaXMuZ2V0SXRlbVR5cGUoKTtcbiAgICByZXR1cm4gX3V0aWxzTWF0Y2hlc1R5cGUyWydkZWZhdWx0J10odGFyZ2V0VHlwZSwgZHJhZ2dlZEl0ZW1UeXBlKSAmJiB0YXJnZXQuY2FuRHJvcCh0aGlzLCB0YXJnZXRJZCk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldEl0ZW1UeXBlKCkpO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuaXNEcmFnZ2luZ1NvdXJjZSA9IGZ1bmN0aW9uIGlzRHJhZ2dpbmdTb3VyY2Uoc291cmNlSWQpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5yZWdpc3RyeS5nZXRTb3VyY2Uoc291cmNlSWQsIHRydWUpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oc291cmNlLCAnRXhwZWN0ZWQgdG8gZmluZCBhIHZhbGlkIHNvdXJjZS4nKTtcblxuICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKCkgfHwgIXRoaXMuaXNTb3VyY2VQdWJsaWMoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VUeXBlID0gdGhpcy5yZWdpc3RyeS5nZXRTb3VyY2VUeXBlKHNvdXJjZUlkKTtcbiAgICB2YXIgZHJhZ2dlZEl0ZW1UeXBlID0gdGhpcy5nZXRJdGVtVHlwZSgpO1xuICAgIGlmIChzb3VyY2VUeXBlICE9PSBkcmFnZ2VkSXRlbVR5cGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlLmlzRHJhZ2dpbmcodGhpcywgc291cmNlSWQpO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuaXNPdmVyVGFyZ2V0ID0gZnVuY3Rpb24gaXNPdmVyVGFyZ2V0KHRhcmdldElkKSB7XG4gICAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgX3JlZjIkc2hhbGxvdyA9IF9yZWYyLnNoYWxsb3c7XG4gICAgdmFyIHNoYWxsb3cgPSBfcmVmMiRzaGFsbG93ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYyJHNoYWxsb3c7XG5cbiAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZygpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFR5cGUgPSB0aGlzLnJlZ2lzdHJ5LmdldFRhcmdldFR5cGUodGFyZ2V0SWQpO1xuICAgIHZhciBkcmFnZ2VkSXRlbVR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKCk7XG4gICAgaWYgKCFfdXRpbHNNYXRjaGVzVHlwZTJbJ2RlZmF1bHQnXSh0YXJnZXRUeXBlLCBkcmFnZ2VkSXRlbVR5cGUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldElkcyA9IHRoaXMuZ2V0VGFyZ2V0SWRzKCk7XG4gICAgaWYgKCF0YXJnZXRJZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGFyZ2V0SWRzLmluZGV4T2YodGFyZ2V0SWQpO1xuICAgIGlmIChzaGFsbG93KSB7XG4gICAgICByZXR1cm4gaW5kZXggPT09IHRhcmdldElkcy5sZW5ndGggLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaW5kZXggPiAtMTtcbiAgICB9XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXRJdGVtVHlwZSA9IGZ1bmN0aW9uIGdldEl0ZW1UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5pdGVtVHlwZTtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbiBnZXRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5pdGVtO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0U291cmNlSWQgPSBmdW5jdGlvbiBnZXRTb3VyY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24uc291cmNlSWQ7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXRUYXJnZXRJZHMgPSBmdW5jdGlvbiBnZXRUYXJnZXRJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLnRhcmdldElkcztcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldERyb3BSZXN1bHQgPSBmdW5jdGlvbiBnZXREcm9wUmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5kcm9wUmVzdWx0O1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZGlkRHJvcCA9IGZ1bmN0aW9uIGRpZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLmRpZERyb3A7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5pc1NvdXJjZVB1YmxpYyA9IGZ1bmN0aW9uIGlzU291cmNlUHVibGljKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5pc1NvdXJjZVB1YmxpYztcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldEluaXRpYWxDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldC5pbml0aWFsQ2xpZW50T2Zmc2V0O1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0LmluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQ7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXRDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0LmNsaWVudE9mZnNldDtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldFNvdXJjZUNsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gX3JlZHVjZXJzRHJhZ09mZnNldC5nZXRTb3VyY2VDbGllbnRPZmZzZXQodGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQpO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0ID0gZnVuY3Rpb24gZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCkge1xuICAgIHJldHVybiBfcmVkdWNlcnNEcmFnT2Zmc2V0LmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCh0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldCk7XG4gIH07XG5cbiAgcmV0dXJuIERyYWdEcm9wTW9uaXRvcjtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyYWdEcm9wTW9uaXRvcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9EcmFnRHJvcE1vbml0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/ICdzeW1ib2wnIDogdHlwZW9mIG9iajsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNBcnJheSk7XG5cbnZhciBfdXRpbHNHZXROZXh0VW5pcXVlSWQgPSByZXF1aXJlKCcuL3V0aWxzL2dldE5leHRVbmlxdWVJZCcpO1xuXG52YXIgX3V0aWxzR2V0TmV4dFVuaXF1ZUlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzR2V0TmV4dFVuaXF1ZUlkKTtcblxudmFyIF9hY3Rpb25zUmVnaXN0cnkgPSByZXF1aXJlKCcuL2FjdGlvbnMvcmVnaXN0cnknKTtcblxudmFyIF9hc2FwID0gcmVxdWlyZSgnYXNhcCcpO1xuXG52YXIgX2FzYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNhcCk7XG5cbnZhciBIYW5kbGVyUm9sZXMgPSB7XG4gIFNPVVJDRTogJ1NPVVJDRScsXG4gIFRBUkdFVDogJ1RBUkdFVCdcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU291cmNlQ29udHJhY3Qoc291cmNlKSB7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHNvdXJjZS5jYW5EcmFnID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgY2FuRHJhZyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBzb3VyY2UuYmVnaW5EcmFnID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgYmVnaW5EcmFnIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHNvdXJjZS5lbmREcmFnID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgZW5kRHJhZyB0byBiZSBhIGZ1bmN0aW9uLicpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRhcmdldENvbnRyYWN0KHRhcmdldCkge1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiB0YXJnZXQuY2FuRHJvcCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGNhbkRyb3AgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgdGFyZ2V0LmhvdmVyID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgaG92ZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgdGFyZ2V0LmRyb3AgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBiZWdpbkRyYWcgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUeXBlKHR5cGUsIGFsbG93QXJyYXkpIHtcbiAgaWYgKGFsbG93QXJyYXkgJiYgX2xvZGFzaElzQXJyYXkyWydkZWZhdWx0J10odHlwZSkpIHtcbiAgICB0eXBlLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZVR5cGUodCwgZmFsc2UpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8ICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHlwZSkpID09PSAnc3ltYm9sJywgYWxsb3dBcnJheSA/ICdUeXBlIGNhbiBvbmx5IGJlIGEgc3RyaW5nLCBhIHN5bWJvbCwgb3IgYW4gYXJyYXkgb2YgZWl0aGVyLicgOiAnVHlwZSBjYW4gb25seSBiZSBhIHN0cmluZyBvciBhIHN5bWJvbC4nKTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dEhhbmRsZXJJZChyb2xlKSB7XG4gIHZhciBpZCA9IF91dGlsc0dldE5leHRVbmlxdWVJZDJbJ2RlZmF1bHQnXSgpLnRvU3RyaW5nKCk7XG4gIHN3aXRjaCAocm9sZSkge1xuICAgIGNhc2UgSGFuZGxlclJvbGVzLlNPVVJDRTpcbiAgICAgIHJldHVybiAnUycgKyBpZDtcbiAgICBjYXNlIEhhbmRsZXJSb2xlcy5UQVJHRVQ6XG4gICAgICByZXR1cm4gJ1QnICsgaWQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UsICdVbmtub3duIHJvbGU6ICcgKyByb2xlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVJvbGVGcm9tSGFuZGxlcklkKGhhbmRsZXJJZCkge1xuICBzd2l0Y2ggKGhhbmRsZXJJZFswXSkge1xuICAgIGNhc2UgJ1MnOlxuICAgICAgcmV0dXJuIEhhbmRsZXJSb2xlcy5TT1VSQ0U7XG4gICAgY2FzZSAnVCc6XG4gICAgICByZXR1cm4gSGFuZGxlclJvbGVzLlRBUkdFVDtcbiAgICBkZWZhdWx0OlxuICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0Nhbm5vdCBwYXJzZSBoYW5kbGVyIElEOiAnICsgaGFuZGxlcklkKTtcbiAgfVxufVxuXG52YXIgSGFuZGxlclJlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSGFuZGxlclJlZ2lzdHJ5KHN0b3JlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhbmRsZXJSZWdpc3RyeSk7XG5cbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG5cbiAgICB0aGlzLnR5cGVzID0ge307XG4gICAgdGhpcy5oYW5kbGVycyA9IHt9O1xuXG4gICAgdGhpcy5waW5uZWRTb3VyY2VJZCA9IG51bGw7XG4gICAgdGhpcy5waW5uZWRTb3VyY2UgPSBudWxsO1xuICB9XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5hZGRTb3VyY2UgPSBmdW5jdGlvbiBhZGRTb3VyY2UodHlwZSwgc291cmNlKSB7XG4gICAgdmFsaWRhdGVUeXBlKHR5cGUpO1xuICAgIHZhbGlkYXRlU291cmNlQ29udHJhY3Qoc291cmNlKTtcblxuICAgIHZhciBzb3VyY2VJZCA9IHRoaXMuYWRkSGFuZGxlcihIYW5kbGVyUm9sZXMuU09VUkNFLCB0eXBlLCBzb3VyY2UpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goX2FjdGlvbnNSZWdpc3RyeS5hZGRTb3VyY2Uoc291cmNlSWQpKTtcbiAgICByZXR1cm4gc291cmNlSWQ7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5hZGRUYXJnZXQgPSBmdW5jdGlvbiBhZGRUYXJnZXQodHlwZSwgdGFyZ2V0KSB7XG4gICAgdmFsaWRhdGVUeXBlKHR5cGUsIHRydWUpO1xuICAgIHZhbGlkYXRlVGFyZ2V0Q29udHJhY3QodGFyZ2V0KTtcblxuICAgIHZhciB0YXJnZXRJZCA9IHRoaXMuYWRkSGFuZGxlcihIYW5kbGVyUm9sZXMuVEFSR0VULCB0eXBlLCB0YXJnZXQpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goX2FjdGlvbnNSZWdpc3RyeS5hZGRUYXJnZXQodGFyZ2V0SWQpKTtcbiAgICByZXR1cm4gdGFyZ2V0SWQ7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5hZGRIYW5kbGVyID0gZnVuY3Rpb24gYWRkSGFuZGxlcihyb2xlLCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgdmFyIGlkID0gZ2V0TmV4dEhhbmRsZXJJZChyb2xlKTtcbiAgICB0aGlzLnR5cGVzW2lkXSA9IHR5cGU7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBoYW5kbGVyO1xuXG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUuY29udGFpbnNIYW5kbGVyID0gZnVuY3Rpb24gY29udGFpbnNIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaGFuZGxlcnMpLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZXJzW2tleV0gPT09IGhhbmRsZXI7XG4gICAgfSk7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5nZXRTb3VyY2UgPSBmdW5jdGlvbiBnZXRTb3VyY2Uoc291cmNlSWQsIGluY2x1ZGVQaW5uZWQpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRoaXMuaXNTb3VyY2VJZChzb3VyY2VJZCksICdFeHBlY3RlZCBhIHZhbGlkIHNvdXJjZSBJRC4nKTtcblxuICAgIHZhciBpc1Bpbm5lZCA9IGluY2x1ZGVQaW5uZWQgJiYgc291cmNlSWQgPT09IHRoaXMucGlubmVkU291cmNlSWQ7XG4gICAgdmFyIHNvdXJjZSA9IGlzUGlubmVkID8gdGhpcy5waW5uZWRTb3VyY2UgOiB0aGlzLmhhbmRsZXJzW3NvdXJjZUlkXTtcblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5nZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0SWQpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRoaXMuaXNUYXJnZXRJZCh0YXJnZXRJZCksICdFeHBlY3RlZCBhIHZhbGlkIHRhcmdldCBJRC4nKTtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyc1t0YXJnZXRJZF07XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5nZXRTb3VyY2VUeXBlID0gZnVuY3Rpb24gZ2V0U291cmNlVHlwZShzb3VyY2VJZCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGhpcy5pc1NvdXJjZUlkKHNvdXJjZUlkKSwgJ0V4cGVjdGVkIGEgdmFsaWQgc291cmNlIElELicpO1xuICAgIHJldHVybiB0aGlzLnR5cGVzW3NvdXJjZUlkXTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmdldFRhcmdldFR5cGUgPSBmdW5jdGlvbiBnZXRUYXJnZXRUeXBlKHRhcmdldElkKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0aGlzLmlzVGFyZ2V0SWQodGFyZ2V0SWQpLCAnRXhwZWN0ZWQgYSB2YWxpZCB0YXJnZXQgSUQuJyk7XG4gICAgcmV0dXJuIHRoaXMudHlwZXNbdGFyZ2V0SWRdO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUuaXNTb3VyY2VJZCA9IGZ1bmN0aW9uIGlzU291cmNlSWQoaGFuZGxlcklkKSB7XG4gICAgdmFyIHJvbGUgPSBwYXJzZVJvbGVGcm9tSGFuZGxlcklkKGhhbmRsZXJJZCk7XG4gICAgcmV0dXJuIHJvbGUgPT09IEhhbmRsZXJSb2xlcy5TT1VSQ0U7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5pc1RhcmdldElkID0gZnVuY3Rpb24gaXNUYXJnZXRJZChoYW5kbGVySWQpIHtcbiAgICB2YXIgcm9sZSA9IHBhcnNlUm9sZUZyb21IYW5kbGVySWQoaGFuZGxlcklkKTtcbiAgICByZXR1cm4gcm9sZSA9PT0gSGFuZGxlclJvbGVzLlRBUkdFVDtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLnJlbW92ZVNvdXJjZSA9IGZ1bmN0aW9uIHJlbW92ZVNvdXJjZShzb3VyY2VJZCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0aGlzLmdldFNvdXJjZShzb3VyY2VJZCksICdFeHBlY3RlZCBhbiBleGlzdGluZyBzb3VyY2UuJyk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChfYWN0aW9uc1JlZ2lzdHJ5LnJlbW92ZVNvdXJjZShzb3VyY2VJZCkpO1xuXG4gICAgX2FzYXAyWydkZWZhdWx0J10oZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlIF90aGlzMi5oYW5kbGVyc1tzb3VyY2VJZF07XG4gICAgICBkZWxldGUgX3RoaXMyLnR5cGVzW3NvdXJjZUlkXTtcbiAgICB9KTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLnJlbW92ZVRhcmdldCA9IGZ1bmN0aW9uIHJlbW92ZVRhcmdldCh0YXJnZXRJZCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0aGlzLmdldFRhcmdldCh0YXJnZXRJZCksICdFeHBlY3RlZCBhbiBleGlzdGluZyB0YXJnZXQuJyk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChfYWN0aW9uc1JlZ2lzdHJ5LnJlbW92ZVRhcmdldCh0YXJnZXRJZCkpO1xuXG4gICAgX2FzYXAyWydkZWZhdWx0J10oZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlIF90aGlzMy5oYW5kbGVyc1t0YXJnZXRJZF07XG4gICAgICBkZWxldGUgX3RoaXMzLnR5cGVzW3RhcmdldElkXTtcbiAgICB9KTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLnBpblNvdXJjZSA9IGZ1bmN0aW9uIHBpblNvdXJjZShzb3VyY2VJZCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLmdldFNvdXJjZShzb3VyY2VJZCk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShzb3VyY2UsICdFeHBlY3RlZCBhbiBleGlzdGluZyBzb3VyY2UuJyk7XG5cbiAgICB0aGlzLnBpbm5lZFNvdXJjZUlkID0gc291cmNlSWQ7XG4gICAgdGhpcy5waW5uZWRTb3VyY2UgPSBzb3VyY2U7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS51bnBpblNvdXJjZSA9IGZ1bmN0aW9uIHVucGluU291cmNlKCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGhpcy5waW5uZWRTb3VyY2UsICdObyBzb3VyY2UgaXMgcGlubmVkIGF0IHRoZSB0aW1lLicpO1xuXG4gICAgdGhpcy5waW5uZWRTb3VyY2VJZCA9IG51bGw7XG4gICAgdGhpcy5waW5uZWRTb3VyY2UgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiBIYW5kbGVyUmVnaXN0cnk7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBIYW5kbGVyUmVnaXN0cnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvSGFuZGxlclJlZ2lzdHJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMTAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2V0TmV4dFVuaXF1ZUlkO1xudmFyIG5leHRVbmlxdWVJZCA9IDA7XG5cbmZ1bmN0aW9uIGdldE5leHRVbmlxdWVJZCgpIHtcbiAgcmV0dXJuIG5leHRVbmlxdWVJZCsrO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi91dGlscy9nZXROZXh0VW5pcXVlSWQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyByYXdBc2FwIHByb3ZpZGVzIGV2ZXJ5dGhpbmcgd2UgbmVlZCBleGNlcHQgZXhjZXB0aW9uIG1hbmFnZW1lbnQuXG52YXIgcmF3QXNhcCA9IHJlcXVpcmUoXCIuL3Jhd1wiKTtcbi8vIFJhd1Rhc2tzIGFyZSByZWN5Y2xlZCB0byByZWR1Y2UgR0MgY2h1cm4uXG52YXIgZnJlZVRhc2tzID0gW107XG4vLyBXZSBxdWV1ZSBlcnJvcnMgdG8gZW5zdXJlIHRoZXkgYXJlIHRocm93biBpbiByaWdodCBvcmRlciAoRklGTykuXG4vLyBBcnJheS1hcy1xdWV1ZSBpcyBnb29kIGVub3VnaCBoZXJlLCBzaW5jZSB3ZSBhcmUganVzdCBkZWFsaW5nIHdpdGggZXhjZXB0aW9ucy5cbnZhciBwZW5kaW5nRXJyb3JzID0gW107XG52YXIgcmVxdWVzdEVycm9yVGhyb3cgPSByYXdBc2FwLm1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcih0aHJvd0ZpcnN0RXJyb3IpO1xuXG5mdW5jdGlvbiB0aHJvd0ZpcnN0RXJyb3IoKSB7XG4gICAgaWYgKHBlbmRpbmdFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IHBlbmRpbmdFcnJvcnMuc2hpZnQoKTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2FsbHMgYSB0YXNrIGFzIHNvb24gYXMgcG9zc2libGUgYWZ0ZXIgcmV0dXJuaW5nLCBpbiBpdHMgb3duIGV2ZW50LCB3aXRoIHByaW9yaXR5XG4gKiBvdmVyIG90aGVyIGV2ZW50cyBsaWtlIGFuaW1hdGlvbiwgcmVmbG93LCBhbmQgcmVwYWludC4gQW4gZXJyb3IgdGhyb3duIGZyb20gYW5cbiAqIGV2ZW50IHdpbGwgbm90IGludGVycnVwdCwgbm9yIGV2ZW4gc3Vic3RhbnRpYWxseSBzbG93IGRvd24gdGhlIHByb2Nlc3Npbmcgb2ZcbiAqIG90aGVyIGV2ZW50cywgYnV0IHdpbGwgYmUgcmF0aGVyIHBvc3Rwb25lZCB0byBhIGxvd2VyIHByaW9yaXR5IGV2ZW50LlxuICogQHBhcmFtIHt7Y2FsbH19IHRhc2sgQSBjYWxsYWJsZSBvYmplY3QsIHR5cGljYWxseSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm9cbiAqIGFyZ3VtZW50cy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhc2FwO1xuZnVuY3Rpb24gYXNhcCh0YXNrKSB7XG4gICAgdmFyIHJhd1Rhc2s7XG4gICAgaWYgKGZyZWVUYXNrcy5sZW5ndGgpIHtcbiAgICAgICAgcmF3VGFzayA9IGZyZWVUYXNrcy5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByYXdUYXNrID0gbmV3IFJhd1Rhc2soKTtcbiAgICB9XG4gICAgcmF3VGFzay50YXNrID0gdGFzaztcbiAgICByYXdBc2FwKHJhd1Rhc2spO1xufVxuXG4vLyBXZSB3cmFwIHRhc2tzIHdpdGggcmVjeWNsYWJsZSB0YXNrIG9iamVjdHMuICBBIHRhc2sgb2JqZWN0IGltcGxlbWVudHNcbi8vIGBjYWxsYCwganVzdCBsaWtlIGEgZnVuY3Rpb24uXG5mdW5jdGlvbiBSYXdUYXNrKCkge1xuICAgIHRoaXMudGFzayA9IG51bGw7XG59XG5cbi8vIFRoZSBzb2xlIHB1cnBvc2Ugb2Ygd3JhcHBpbmcgdGhlIHRhc2sgaXMgdG8gY2F0Y2ggdGhlIGV4Y2VwdGlvbiBhbmQgcmVjeWNsZVxuLy8gdGhlIHRhc2sgb2JqZWN0IGFmdGVyIGl0cyBzaW5nbGUgdXNlLlxuUmF3VGFzay5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICB0aGlzLnRhc2suY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChhc2FwLm9uZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaG9vayBleGlzdHMgcHVyZWx5IGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICAgICAgICAgICAgLy8gSXRzIG5hbWUgd2lsbCBiZSBwZXJpb2RpY2FsbHkgcmFuZG9taXplZCB0byBicmVhayBhbnkgY29kZSB0aGF0XG4gICAgICAgICAgICAvLyBkZXBlbmRzIG9uIGl0cyBleGlzdGVuY2UuXG4gICAgICAgICAgICBhc2FwLm9uZXJyb3IoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSW4gYSB3ZWIgYnJvd3NlciwgZXhjZXB0aW9ucyBhcmUgbm90IGZhdGFsLiBIb3dldmVyLCB0byBhdm9pZFxuICAgICAgICAgICAgLy8gc2xvd2luZyBkb3duIHRoZSBxdWV1ZSBvZiBwZW5kaW5nIHRhc2tzLCB3ZSByZXRocm93IHRoZSBlcnJvciBpbiBhXG4gICAgICAgICAgICAvLyBsb3dlciBwcmlvcml0eSB0dXJuLlxuICAgICAgICAgICAgcGVuZGluZ0Vycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICAgIHJlcXVlc3RFcnJvclRocm93KCk7XG4gICAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzLnRhc2sgPSBudWxsO1xuICAgICAgICBmcmVlVGFza3NbZnJlZVRhc2tzLmxlbmd0aF0gPSB0aGlzO1xuICAgIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hc2FwL2Jyb3dzZXItYXNhcC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFVzZSB0aGUgZmFzdGVzdCBtZWFucyBwb3NzaWJsZSB0byBleGVjdXRlIGEgdGFzayBpbiBpdHMgb3duIHR1cm4sIHdpdGhcbi8vIHByaW9yaXR5IG92ZXIgb3RoZXIgZXZlbnRzIGluY2x1ZGluZyBJTywgYW5pbWF0aW9uLCByZWZsb3csIGFuZCByZWRyYXdcbi8vIGV2ZW50cyBpbiBicm93c2Vycy5cbi8vXG4vLyBBbiBleGNlcHRpb24gdGhyb3duIGJ5IGEgdGFzayB3aWxsIHBlcm1hbmVudGx5IGludGVycnVwdCB0aGUgcHJvY2Vzc2luZyBvZlxuLy8gc3Vic2VxdWVudCB0YXNrcy4gVGhlIGhpZ2hlciBsZXZlbCBgYXNhcGAgZnVuY3Rpb24gZW5zdXJlcyB0aGF0IGlmIGFuXG4vLyBleGNlcHRpb24gaXMgdGhyb3duIGJ5IGEgdGFzaywgdGhhdCB0aGUgdGFzayBxdWV1ZSB3aWxsIGNvbnRpbnVlIGZsdXNoaW5nIGFzXG4vLyBzb29uIGFzIHBvc3NpYmxlLCBidXQgaWYgeW91IHVzZSBgcmF3QXNhcGAgZGlyZWN0bHksIHlvdSBhcmUgcmVzcG9uc2libGUgdG9cbi8vIGVpdGhlciBlbnN1cmUgdGhhdCBubyBleGNlcHRpb25zIGFyZSB0aHJvd24gZnJvbSB5b3VyIHRhc2ssIG9yIHRvIG1hbnVhbGx5XG4vLyBjYWxsIGByYXdBc2FwLnJlcXVlc3RGbHVzaGAgaWYgYW4gZXhjZXB0aW9uIGlzIHRocm93bi5cbm1vZHVsZS5leHBvcnRzID0gcmF3QXNhcDtcbmZ1bmN0aW9uIHJhd0FzYXAodGFzaykge1xuICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHJlcXVlc3RGbHVzaCgpO1xuICAgICAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgfVxuICAgIC8vIEVxdWl2YWxlbnQgdG8gcHVzaCwgYnV0IGF2b2lkcyBhIGZ1bmN0aW9uIGNhbGwuXG4gICAgcXVldWVbcXVldWUubGVuZ3RoXSA9IHRhc2s7XG59XG5cbnZhciBxdWV1ZSA9IFtdO1xuLy8gT25jZSBhIGZsdXNoIGhhcyBiZWVuIHJlcXVlc3RlZCwgbm8gZnVydGhlciBjYWxscyB0byBgcmVxdWVzdEZsdXNoYCBhcmVcbi8vIG5lY2Vzc2FyeSB1bnRpbCB0aGUgbmV4dCBgZmx1c2hgIGNvbXBsZXRlcy5cbnZhciBmbHVzaGluZyA9IGZhbHNlO1xuLy8gYHJlcXVlc3RGbHVzaGAgaXMgYW4gaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgbWV0aG9kIHRoYXQgYXR0ZW1wdHMgdG8ga2lja1xuLy8gb2ZmIGEgYGZsdXNoYCBldmVudCBhcyBxdWlja2x5IGFzIHBvc3NpYmxlLiBgZmx1c2hgIHdpbGwgYXR0ZW1wdCB0byBleGhhdXN0XG4vLyB0aGUgZXZlbnQgcXVldWUgYmVmb3JlIHlpZWxkaW5nIHRvIHRoZSBicm93c2VyJ3Mgb3duIGV2ZW50IGxvb3AuXG52YXIgcmVxdWVzdEZsdXNoO1xuLy8gVGhlIHBvc2l0aW9uIG9mIHRoZSBuZXh0IHRhc2sgdG8gZXhlY3V0ZSBpbiB0aGUgdGFzayBxdWV1ZS4gVGhpcyBpc1xuLy8gcHJlc2VydmVkIGJldHdlZW4gY2FsbHMgdG8gYGZsdXNoYCBzbyB0aGF0IGl0IGNhbiBiZSByZXN1bWVkIGlmXG4vLyBhIHRhc2sgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbnZhciBpbmRleCA9IDA7XG4vLyBJZiBhIHRhc2sgc2NoZWR1bGVzIGFkZGl0aW9uYWwgdGFza3MgcmVjdXJzaXZlbHksIHRoZSB0YXNrIHF1ZXVlIGNhbiBncm93XG4vLyB1bmJvdW5kZWQuIFRvIHByZXZlbnQgbWVtb3J5IGV4aGF1c3Rpb24sIHRoZSB0YXNrIHF1ZXVlIHdpbGwgcGVyaW9kaWNhbGx5XG4vLyB0cnVuY2F0ZSBhbHJlYWR5LWNvbXBsZXRlZCB0YXNrcy5cbnZhciBjYXBhY2l0eSA9IDEwMjQ7XG5cbi8vIFRoZSBmbHVzaCBmdW5jdGlvbiBwcm9jZXNzZXMgYWxsIHRhc2tzIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB3aXRoXG4vLyBgcmF3QXNhcGAgdW5sZXNzIGFuZCB1bnRpbCBvbmUgb2YgdGhvc2UgdGFza3MgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbi8vIElmIGEgdGFzayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBgZmx1c2hgIGVuc3VyZXMgdGhhdCBpdHMgc3RhdGUgd2lsbCByZW1haW5cbi8vIGNvbnNpc3RlbnQgYW5kIHdpbGwgcmVzdW1lIHdoZXJlIGl0IGxlZnQgb2ZmIHdoZW4gY2FsbGVkIGFnYWluLlxuLy8gSG93ZXZlciwgYGZsdXNoYCBkb2VzIG5vdCBtYWtlIGFueSBhcnJhbmdlbWVudHMgdG8gYmUgY2FsbGVkIGFnYWluIGlmIGFuXG4vLyBleGNlcHRpb24gaXMgdGhyb3duLlxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgd2hpbGUgKGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8gQWR2YW5jZSB0aGUgaW5kZXggYmVmb3JlIGNhbGxpbmcgdGhlIHRhc2suIFRoaXMgZW5zdXJlcyB0aGF0IHdlIHdpbGxcbiAgICAgICAgLy8gYmVnaW4gZmx1c2hpbmcgb24gdGhlIG5leHQgdGFzayB0aGUgdGFzayB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICAgIGluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICBxdWV1ZVtjdXJyZW50SW5kZXhdLmNhbGwoKTtcbiAgICAgICAgLy8gUHJldmVudCBsZWFraW5nIG1lbW9yeSBmb3IgbG9uZyBjaGFpbnMgb2YgcmVjdXJzaXZlIGNhbGxzIHRvIGBhc2FwYC5cbiAgICAgICAgLy8gSWYgd2UgY2FsbCBgYXNhcGAgd2l0aGluIHRhc2tzIHNjaGVkdWxlZCBieSBgYXNhcGAsIHRoZSBxdWV1ZSB3aWxsXG4gICAgICAgIC8vIGdyb3csIGJ1dCB0byBhdm9pZCBhbiBPKG4pIHdhbGsgZm9yIGV2ZXJ5IHRhc2sgd2UgZXhlY3V0ZSwgd2UgZG9uJ3RcbiAgICAgICAgLy8gc2hpZnQgdGFza3Mgb2ZmIHRoZSBxdWV1ZSBhZnRlciB0aGV5IGhhdmUgYmVlbiBleGVjdXRlZC5cbiAgICAgICAgLy8gSW5zdGVhZCwgd2UgcGVyaW9kaWNhbGx5IHNoaWZ0IDEwMjQgdGFza3Mgb2ZmIHRoZSBxdWV1ZS5cbiAgICAgICAgaWYgKGluZGV4ID4gY2FwYWNpdHkpIHtcbiAgICAgICAgICAgIC8vIE1hbnVhbGx5IHNoaWZ0IGFsbCB2YWx1ZXMgc3RhcnRpbmcgYXQgdGhlIGluZGV4IGJhY2sgdG8gdGhlXG4gICAgICAgICAgICAvLyBiZWdpbm5pbmcgb2YgdGhlIHF1ZXVlLlxuICAgICAgICAgICAgZm9yICh2YXIgc2NhbiA9IDAsIG5ld0xlbmd0aCA9IHF1ZXVlLmxlbmd0aCAtIGluZGV4OyBzY2FuIDwgbmV3TGVuZ3RoOyBzY2FuKyspIHtcbiAgICAgICAgICAgICAgICBxdWV1ZVtzY2FuXSA9IHF1ZXVlW3NjYW4gKyBpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5sZW5ndGggLT0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICBpbmRleCA9IDA7XG4gICAgZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLy8gYHJlcXVlc3RGbHVzaGAgaXMgaW1wbGVtZW50ZWQgdXNpbmcgYSBzdHJhdGVneSBiYXNlZCBvbiBkYXRhIGNvbGxlY3RlZCBmcm9tXG4vLyBldmVyeSBhdmFpbGFibGUgU2F1Y2VMYWJzIFNlbGVuaXVtIHdlYiBkcml2ZXIgd29ya2VyIGF0IHRpbWUgb2Ygd3JpdGluZy5cbi8vIGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzFtRy01VVlHdXA1cXhHZEVNV2toUDZCV0N6MDUzTlViMkUxUW9VVFUxNnVBL2VkaXQjZ2lkPTc4MzcyNDU5M1xuXG4vLyBTYWZhcmkgNiBhbmQgNi4xIGZvciBkZXNrdG9wLCBpUGFkLCBhbmQgaVBob25lIGFyZSB0aGUgb25seSBicm93c2VycyB0aGF0XG4vLyBoYXZlIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIgYnV0IG5vdCB1bi1wcmVmaXhlZCBNdXRhdGlvbk9ic2VydmVyLlxuLy8gTXVzdCB1c2UgYGdsb2JhbGAgaW5zdGVhZCBvZiBgd2luZG93YCB0byB3b3JrIGluIGJvdGggZnJhbWVzIGFuZCB3ZWJcbi8vIHdvcmtlcnMuIGBnbG9iYWxgIGlzIGEgcHJvdmlzaW9uIG9mIEJyb3dzZXJpZnksIE1yLCBNcnMsIG9yIE1vcC5cbnZhciBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuXG4vLyBNdXRhdGlvbk9ic2VydmVycyBhcmUgZGVzaXJhYmxlIGJlY2F1c2UgdGhleSBoYXZlIGhpZ2ggcHJpb3JpdHkgYW5kIHdvcmtcbi8vIHJlbGlhYmx5IGV2ZXJ5d2hlcmUgdGhleSBhcmUgaW1wbGVtZW50ZWQuXG4vLyBUaGV5IGFyZSBpbXBsZW1lbnRlZCBpbiBhbGwgbW9kZXJuIGJyb3dzZXJzLlxuLy9cbi8vIC0gQW5kcm9pZCA0LTQuM1xuLy8gLSBDaHJvbWUgMjYtMzRcbi8vIC0gRmlyZWZveCAxNC0yOVxuLy8gLSBJbnRlcm5ldCBFeHBsb3JlciAxMVxuLy8gLSBpUGFkIFNhZmFyaSA2LTcuMVxuLy8gLSBpUGhvbmUgU2FmYXJpIDctNy4xXG4vLyAtIFNhZmFyaSA2LTdcbmlmICh0eXBlb2YgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJlcXVlc3RGbHVzaCA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21NdXRhdGlvbk9ic2VydmVyKGZsdXNoKTtcblxuLy8gTWVzc2FnZUNoYW5uZWxzIGFyZSBkZXNpcmFibGUgYmVjYXVzZSB0aGV5IGdpdmUgZGlyZWN0IGFjY2VzcyB0byB0aGUgSFRNTFxuLy8gdGFzayBxdWV1ZSwgYXJlIGltcGxlbWVudGVkIGluIEludGVybmV0IEV4cGxvcmVyIDEwLCBTYWZhcmkgNS4wLTEsIGFuZCBPcGVyYVxuLy8gMTEtMTIsIGFuZCBpbiB3ZWIgd29ya2VycyBpbiBtYW55IGVuZ2luZXMuXG4vLyBBbHRob3VnaCBtZXNzYWdlIGNoYW5uZWxzIHlpZWxkIHRvIGFueSBxdWV1ZWQgcmVuZGVyaW5nIGFuZCBJTyB0YXNrcywgdGhleVxuLy8gd291bGQgYmUgYmV0dGVyIHRoYW4gaW1wb3NpbmcgdGhlIDRtcyBkZWxheSBvZiB0aW1lcnMuXG4vLyBIb3dldmVyLCB0aGV5IGRvIG5vdCB3b3JrIHJlbGlhYmx5IGluIEludGVybmV0IEV4cGxvcmVyIG9yIFNhZmFyaS5cblxuLy8gSW50ZXJuZXQgRXhwbG9yZXIgMTAgaXMgdGhlIG9ubHkgYnJvd3NlciB0aGF0IGhhcyBzZXRJbW1lZGlhdGUgYnV0IGRvZXNcbi8vIG5vdCBoYXZlIE11dGF0aW9uT2JzZXJ2ZXJzLlxuLy8gQWx0aG91Z2ggc2V0SW1tZWRpYXRlIHlpZWxkcyB0byB0aGUgYnJvd3NlcidzIHJlbmRlcmVyLCBpdCB3b3VsZCBiZVxuLy8gcHJlZmVycmFibGUgdG8gZmFsbGluZyBiYWNrIHRvIHNldFRpbWVvdXQgc2luY2UgaXQgZG9lcyBub3QgaGF2ZVxuLy8gdGhlIG1pbmltdW0gNG1zIHBlbmFsdHkuXG4vLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGFwcGVhcnMgdG8gYmUgYSBidWcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAgTW9iaWxlIChhbmRcbi8vIERlc2t0b3AgdG8gYSBsZXNzZXIgZXh0ZW50KSB0aGF0IHJlbmRlcnMgYm90aCBzZXRJbW1lZGlhdGUgYW5kXG4vLyBNZXNzYWdlQ2hhbm5lbCB1c2VsZXNzIGZvciB0aGUgcHVycG9zZXMgb2YgQVNBUC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlza293YWwvcS9pc3N1ZXMvMzk2XG5cbi8vIFRpbWVycyBhcmUgaW1wbGVtZW50ZWQgdW5pdmVyc2FsbHkuXG4vLyBXZSBmYWxsIGJhY2sgdG8gdGltZXJzIGluIHdvcmtlcnMgaW4gbW9zdCBlbmdpbmVzLCBhbmQgaW4gZm9yZWdyb3VuZFxuLy8gY29udGV4dHMgaW4gdGhlIGZvbGxvd2luZyBicm93c2Vycy5cbi8vIEhvd2V2ZXIsIG5vdGUgdGhhdCBldmVuIHRoaXMgc2ltcGxlIGNhc2UgcmVxdWlyZXMgbnVhbmNlcyB0byBvcGVyYXRlIGluIGFcbi8vIGJyb2FkIHNwZWN0cnVtIG9mIGJyb3dzZXJzLlxuLy9cbi8vIC0gRmlyZWZveCAzLTEzXG4vLyAtIEludGVybmV0IEV4cGxvcmVyIDYtOVxuLy8gLSBpUGFkIFNhZmFyaSA0LjNcbi8vIC0gTHlueCAyLjguN1xufSBlbHNlIHtcbiAgICByZXF1ZXN0Rmx1c2ggPSBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXIoZmx1c2gpO1xufVxuXG4vLyBgcmVxdWVzdEZsdXNoYCByZXF1ZXN0cyB0aGF0IHRoZSBoaWdoIHByaW9yaXR5IGV2ZW50IHF1ZXVlIGJlIGZsdXNoZWQgYXNcbi8vIHNvb24gYXMgcG9zc2libGUuXG4vLyBUaGlzIGlzIHVzZWZ1bCB0byBwcmV2ZW50IGFuIGVycm9yIHRocm93biBpbiBhIHRhc2sgZnJvbSBzdGFsbGluZyB0aGUgZXZlbnRcbi8vIHF1ZXVlIGlmIHRoZSBleGNlcHRpb24gaGFuZGxlZCBieSBOb2RlLmpz4oCZc1xuLy8gYHByb2Nlc3Mub24oXCJ1bmNhdWdodEV4Y2VwdGlvblwiKWAgb3IgYnkgYSBkb21haW4uXG5yYXdBc2FwLnJlcXVlc3RGbHVzaCA9IHJlcXVlc3RGbHVzaDtcblxuLy8gVG8gcmVxdWVzdCBhIGhpZ2ggcHJpb3JpdHkgZXZlbnQsIHdlIGluZHVjZSBhIG11dGF0aW9uIG9ic2VydmVyIGJ5IHRvZ2dsaW5nXG4vLyB0aGUgdGV4dCBvZiBhIHRleHQgbm9kZSBiZXR3ZWVuIFwiMVwiIGFuZCBcIi0xXCIuXG5mdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaykge1xuICAgIHZhciB0b2dnbGUgPSAxO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBCcm93c2VyTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuICAgICAgICB0b2dnbGUgPSAtdG9nZ2xlO1xuICAgICAgICBub2RlLmRhdGEgPSB0b2dnbGU7XG4gICAgfTtcbn1cblxuLy8gVGhlIG1lc3NhZ2UgY2hhbm5lbCB0ZWNobmlxdWUgd2FzIGRpc2NvdmVyZWQgYnkgTWFsdGUgVWJsIGFuZCB3YXMgdGhlXG4vLyBvcmlnaW5hbCBmb3VuZGF0aW9uIGZvciB0aGlzIGxpYnJhcnkuXG4vLyBodHRwOi8vd3d3Lm5vbmJsb2NraW5nLmlvLzIwMTEvMDYvd2luZG93bmV4dHRpY2suaHRtbFxuXG4vLyBTYWZhcmkgNi4wLjUgKGF0IGxlYXN0KSBpbnRlcm1pdHRlbnRseSBmYWlscyB0byBjcmVhdGUgbWVzc2FnZSBwb3J0cyBvbiBhXG4vLyBwYWdlJ3MgZmlyc3QgbG9hZC4gVGhhbmtmdWxseSwgdGhpcyB2ZXJzaW9uIG9mIFNhZmFyaSBzdXBwb3J0c1xuLy8gTXV0YXRpb25PYnNlcnZlcnMsIHNvIHdlIGRvbid0IG5lZWQgdG8gZmFsbCBiYWNrIGluIHRoYXQgY2FzZS5cblxuLy8gZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbU1lc3NhZ2VDaGFubmVsKGNhbGxiYWNrKSB7XG4vLyAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbi8vICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbi8vICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbi8vICAgICB9O1xuLy8gfVxuXG4vLyBGb3IgcmVhc29ucyBleHBsYWluZWQgYWJvdmUsIHdlIGFyZSBhbHNvIHVuYWJsZSB0byB1c2UgYHNldEltbWVkaWF0ZWBcbi8vIHVuZGVyIGFueSBjaXJjdW1zdGFuY2VzLlxuLy8gRXZlbiBpZiB3ZSB3ZXJlLCB0aGVyZSBpcyBhbm90aGVyIGJ1ZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMC5cbi8vIEl0IGlzIG5vdCBzdWZmaWNpZW50IHRvIGFzc2lnbiBgc2V0SW1tZWRpYXRlYCB0byBgcmVxdWVzdEZsdXNoYCBiZWNhdXNlXG4vLyBgc2V0SW1tZWRpYXRlYCBtdXN0IGJlIGNhbGxlZCAqYnkgbmFtZSogYW5kIHRoZXJlZm9yZSBtdXN0IGJlIHdyYXBwZWQgaW4gYVxuLy8gY2xvc3VyZS5cbi8vIE5ldmVyIGZvcmdldC5cblxuLy8gZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbVNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbi8vICAgICAgICAgc2V0SW1tZWRpYXRlKGNhbGxiYWNrKTtcbi8vICAgICB9O1xuLy8gfVxuXG4vLyBTYWZhcmkgNi4wIGhhcyBhIHByb2JsZW0gd2hlcmUgdGltZXJzIHdpbGwgZ2V0IGxvc3Qgd2hpbGUgdGhlIHVzZXIgaXNcbi8vIHNjcm9sbGluZy4gVGhpcyBwcm9ibGVtIGRvZXMgbm90IGltcGFjdCBBU0FQIGJlY2F1c2UgU2FmYXJpIDYuMCBzdXBwb3J0c1xuLy8gbXV0YXRpb24gb2JzZXJ2ZXJzLCBzbyB0aGF0IGltcGxlbWVudGF0aW9uIGlzIHVzZWQgaW5zdGVhZC5cbi8vIEhvd2V2ZXIsIGlmIHdlIGV2ZXIgZWxlY3QgdG8gdXNlIHRpbWVycyBpbiBTYWZhcmksIHRoZSBwcmV2YWxlbnQgd29yay1hcm91bmRcbi8vIGlzIHRvIGFkZCBhIHNjcm9sbCBldmVudCBsaXN0ZW5lciB0aGF0IGNhbGxzIGZvciBhIGZsdXNoLlxuXG4vLyBgc2V0VGltZW91dGAgZG9lcyBub3QgY2FsbCB0aGUgcGFzc2VkIGNhbGxiYWNrIGlmIHRoZSBkZWxheSBpcyBsZXNzIHRoYW5cbi8vIGFwcHJveGltYXRlbHkgNyBpbiB3ZWIgd29ya2VycyBpbiBGaXJlZm94IDggdGhyb3VnaCAxOCwgYW5kIHNvbWV0aW1lcyBub3Rcbi8vIGV2ZW4gdGhlbi5cblxuZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuICAgICAgICAvLyBXZSBkaXNwYXRjaCBhIHRpbWVvdXQgd2l0aCBhIHNwZWNpZmllZCBkZWxheSBvZiAwIGZvciBlbmdpbmVzIHRoYXRcbiAgICAgICAgLy8gY2FuIHJlbGlhYmx5IGFjY29tbW9kYXRlIHRoYXQgcmVxdWVzdC4gVGhpcyB3aWxsIHVzdWFsbHkgYmUgc25hcHBlZFxuICAgICAgICAvLyB0byBhIDQgbWlsaXNlY29uZCBkZWxheSwgYnV0IG9uY2Ugd2UncmUgZmx1c2hpbmcsIHRoZXJlJ3Mgbm8gZGVsYXlcbiAgICAgICAgLy8gYmV0d2VlbiBldmVudHMuXG4gICAgICAgIHZhciB0aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChoYW5kbGVUaW1lciwgMCk7XG4gICAgICAgIC8vIEhvd2V2ZXIsIHNpbmNlIHRoaXMgdGltZXIgZ2V0cyBmcmVxdWVudGx5IGRyb3BwZWQgaW4gRmlyZWZveFxuICAgICAgICAvLyB3b3JrZXJzLCB3ZSBlbmxpc3QgYW4gaW50ZXJ2YWwgaGFuZGxlIHRoYXQgd2lsbCB0cnkgdG8gZmlyZVxuICAgICAgICAvLyBhbiBldmVudCAyMCB0aW1lcyBwZXIgc2Vjb25kIHVudGlsIGl0IHN1Y2NlZWRzLlxuICAgICAgICB2YXIgaW50ZXJ2YWxIYW5kbGUgPSBzZXRJbnRlcnZhbChoYW5kbGVUaW1lciwgNTApO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVRpbWVyKCkge1xuICAgICAgICAgICAgLy8gV2hpY2hldmVyIHRpbWVyIHN1Y2NlZWRzIHdpbGwgY2FuY2VsIGJvdGggdGltZXJzIGFuZFxuICAgICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSGFuZGxlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyBUaGlzIGlzIGZvciBgYXNhcC5qc2Agb25seS5cbi8vIEl0cyBuYW1lIHdpbGwgYmUgcGVyaW9kaWNhbGx5IHJhbmRvbWl6ZWQgdG8gYnJlYWsgYW55IGNvZGUgdGhhdCBkZXBlbmRzIG9uXG4vLyBpdHMgZXhpc3RlbmNlLlxucmF3QXNhcC5tYWtlUmVxdWVzdENhbGxGcm9tVGltZXIgPSBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXI7XG5cbi8vIEFTQVAgd2FzIG9yaWdpbmFsbHkgYSBuZXh0VGljayBzaGltIGluY2x1ZGVkIGluIFEuIFRoaXMgd2FzIGZhY3RvcmVkIG91dFxuLy8gaW50byB0aGlzIEFTQVAgcGFja2FnZS4gSXQgd2FzIGxhdGVyIGFkYXB0ZWQgdG8gUlNWUCB3aGljaCBtYWRlIGZ1cnRoZXJcbi8vIGFtZW5kbWVudHMuIFRoZXNlIGRlY2lzaW9ucywgcGFydGljdWxhcmx5IHRvIG1hcmdpbmFsaXplIE1lc3NhZ2VDaGFubmVsIGFuZFxuLy8gdG8gY2FwdHVyZSB0aGUgTXV0YXRpb25PYnNlcnZlciBpbXBsZW1lbnRhdGlvbiBpbiBhIGNsb3N1cmUsIHdlcmUgaW50ZWdyYXRlZFxuLy8gYmFjayBpbnRvIEFTQVAgcHJvcGVyLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RpbGRlaW8vcnN2cC5qcy9ibG9iL2NkZGY3MjMyNTQ2YTljZjg1ODUyNGI3NWNkZTZmOWVkZjcyNjIwYTcvbGliL3JzdnAvYXNhcC5qc1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYXNhcC9icm93c2VyLXJhdy5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEcmFnU291cmNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRHJhZ1NvdXJjZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ1NvdXJjZSk7XG4gIH1cblxuICBEcmFnU291cmNlLnByb3RvdHlwZS5jYW5EcmFnID0gZnVuY3Rpb24gY2FuRHJhZygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBEcmFnU291cmNlLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24gaXNEcmFnZ2luZyhtb25pdG9yLCBoYW5kbGUpIHtcbiAgICByZXR1cm4gaGFuZGxlID09PSBtb25pdG9yLmdldFNvdXJjZUlkKCk7XG4gIH07XG5cbiAgRHJhZ1NvdXJjZS5wcm90b3R5cGUuZW5kRHJhZyA9IGZ1bmN0aW9uIGVuZERyYWcoKSB7fTtcblxuICByZXR1cm4gRHJhZ1NvdXJjZTtcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRHJhZ1NvdXJjZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL0RyYWdTb3VyY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRHJvcFRhcmdldCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERyb3BUYXJnZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3BUYXJnZXQpO1xuICB9XG5cbiAgRHJvcFRhcmdldC5wcm90b3R5cGUuY2FuRHJvcCA9IGZ1bmN0aW9uIGNhbkRyb3AoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgRHJvcFRhcmdldC5wcm90b3R5cGUuaG92ZXIgPSBmdW5jdGlvbiBob3ZlcigpIHt9O1xuXG4gIERyb3BUYXJnZXQucHJvdG90eXBlLmRyb3AgPSBmdW5jdGlvbiBkcm9wKCkge307XG5cbiAgcmV0dXJuIERyb3BUYXJnZXQ7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERyb3BUYXJnZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9Ecm9wVGFyZ2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVCYWNrZW5kO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX2xvZGFzaE5vb3AgPSByZXF1aXJlKCdsb2Rhc2gvbm9vcCcpO1xuXG52YXIgX2xvZGFzaE5vb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoTm9vcCk7XG5cbnZhciBUZXN0QmFja2VuZCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRlc3RCYWNrZW5kKG1hbmFnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVzdEJhY2tlbmQpO1xuXG4gICAgdGhpcy5hY3Rpb25zID0gbWFuYWdlci5nZXRBY3Rpb25zKCk7XG4gIH1cblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICB0aGlzLmRpZENhbGxTZXR1cCA9IHRydWU7XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gdGVhcmRvd24oKSB7XG4gICAgdGhpcy5kaWRDYWxsVGVhcmRvd24gPSB0cnVlO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5jb25uZWN0RHJhZ1NvdXJjZSA9IGZ1bmN0aW9uIGNvbm5lY3REcmFnU291cmNlKCkge1xuICAgIHJldHVybiBfbG9kYXNoTm9vcDJbJ2RlZmF1bHQnXTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuY29ubmVjdERyYWdQcmV2aWV3ID0gZnVuY3Rpb24gY29ubmVjdERyYWdQcmV2aWV3KCkge1xuICAgIHJldHVybiBfbG9kYXNoTm9vcDJbJ2RlZmF1bHQnXTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuY29ubmVjdERyb3BUYXJnZXQgPSBmdW5jdGlvbiBjb25uZWN0RHJvcFRhcmdldCgpIHtcbiAgICByZXR1cm4gX2xvZGFzaE5vb3AyWydkZWZhdWx0J107XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLnNpbXVsYXRlQmVnaW5EcmFnID0gZnVuY3Rpb24gc2ltdWxhdGVCZWdpbkRyYWcoc291cmNlSWRzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5hY3Rpb25zLmJlZ2luRHJhZyhzb3VyY2VJZHMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5zaW11bGF0ZVB1Ymxpc2hEcmFnU291cmNlID0gZnVuY3Rpb24gc2ltdWxhdGVQdWJsaXNoRHJhZ1NvdXJjZSgpIHtcbiAgICB0aGlzLmFjdGlvbnMucHVibGlzaERyYWdTb3VyY2UoKTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuc2ltdWxhdGVIb3ZlciA9IGZ1bmN0aW9uIHNpbXVsYXRlSG92ZXIodGFyZ2V0SWRzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5hY3Rpb25zLmhvdmVyKHRhcmdldElkcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLnNpbXVsYXRlRHJvcCA9IGZ1bmN0aW9uIHNpbXVsYXRlRHJvcCgpIHtcbiAgICB0aGlzLmFjdGlvbnMuZHJvcCgpO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5zaW11bGF0ZUVuZERyYWcgPSBmdW5jdGlvbiBzaW11bGF0ZUVuZERyYWcoKSB7XG4gICAgdGhpcy5hY3Rpb25zLmVuZERyYWcoKTtcbiAgfTtcblxuICByZXR1cm4gVGVzdEJhY2tlbmQ7XG59KSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVCYWNrZW5kKG1hbmFnZXIpIHtcbiAgcmV0dXJuIG5ldyBUZXN0QmFja2VuZChtYW5hZ2VyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL2JhY2tlbmRzL2NyZWF0ZVRlc3RCYWNrZW5kLmpzXG4gKiogbW9kdWxlIGlkID0gMTA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjaGVja0RlY29yYXRvckFyZ3VtZW50cztcblxuZnVuY3Rpb24gY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMoZnVuY3Rpb25OYW1lLCBzaWduYXR1cmUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGFyZyA9IGFyZ3NbaV07XG4gICAgICBpZiAoYXJnICYmIGFyZy5wcm90b3R5cGUgJiYgYXJnLnByb3RvdHlwZS5yZW5kZXIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvciggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICdZb3Ugc2VlbSB0byBiZSBhcHBseWluZyB0aGUgYXJndW1lbnRzIGluIHRoZSB3cm9uZyBvcmRlci4gJyArICgnSXQgc2hvdWxkIGJlICcgKyBmdW5jdGlvbk5hbWUgKyAnKCcgKyBzaWduYXR1cmUgKyAnKShDb21wb25lbnQpLCBub3QgdGhlIG90aGVyIHdheSBhcm91bmQuICcpICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLXRyb3VibGVzaG9vdGluZy5odG1sI3lvdS1zZWVtLXRvLWJlLWFwcGx5aW5nLXRoZS1hcmd1bWVudHMtaW4tdGhlLXdyb25nLW9yZGVyJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDExMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3NsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEcmFnTGF5ZXI7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJy4vdXRpbHMvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNTaGFsbG93RXF1YWwpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWxTY2FsYXInKTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbFNjYWxhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1NoYWxsb3dFcXVhbFNjYWxhcik7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc1BsYWluT2JqZWN0KTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzID0gcmVxdWlyZSgnLi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cycpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50cyk7XG5cbmZ1bmN0aW9uIERyYWdMYXllcihjb2xsZWN0KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyWydkZWZhdWx0J10uYXBwbHkodW5kZWZpbmVkLCBbJ0RyYWdMYXllcicsICdjb2xsZWN0Wywgb3B0aW9uc10nXS5jb25jYXQoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBjb2xsZWN0ID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgXCJjb2xsZWN0XCIgcHJvdmlkZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIERyYWdMYXllciAnICsgJ3RvIGJlIGEgZnVuY3Rpb24gdGhhdCBjb2xsZWN0cyBwcm9wcyB0byBpbmplY3QgaW50byB0aGUgY29tcG9uZW50LiAnLCAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1sYXllci5odG1sJywgY29sbGVjdCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzUGxhaW5PYmplY3QyWydkZWZhdWx0J10ob3B0aW9ucyksICdFeHBlY3RlZCBcIm9wdGlvbnNcIiBwcm92aWRlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIERyYWdMYXllciB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0IHdoZW4gc3BlY2lmaWVkLiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctbGF5ZXIuaHRtbCcsIG9wdGlvbnMpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0ZUxheWVyKERlY29yYXRlZENvbXBvbmVudCkge1xuICAgIHZhciBfb3B0aW9ucyRhcmVQcm9wc0VxdWFsID0gb3B0aW9ucy5hcmVQcm9wc0VxdWFsO1xuICAgIHZhciBhcmVQcm9wc0VxdWFsID0gX29wdGlvbnMkYXJlUHJvcHNFcXVhbCA9PT0gdW5kZWZpbmVkID8gX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyMlsnZGVmYXVsdCddIDogX29wdGlvbnMkYXJlUHJvcHNFcXVhbDtcblxuICAgIHZhciBkaXNwbGF5TmFtZSA9IERlY29yYXRlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBEZWNvcmF0ZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICAgIHJldHVybiAoZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhEcmFnTGF5ZXJDb250YWluZXIsIF9Db21wb25lbnQpO1xuXG4gICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLmdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMuY2hpbGQ7XG4gICAgICB9O1xuXG4gICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gIWFyZVByb3BzRXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fCAhX3V0aWxzU2hhbGxvd0VxdWFsMlsnZGVmYXVsdCddKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgICB9O1xuXG4gICAgICBfY3JlYXRlQ2xhc3MoRHJhZ0xheWVyQ29udGFpbmVyLCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdEZWNvcmF0ZWRDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogRGVjb3JhdGVkQ29tcG9uZW50LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc3BsYXlOYW1lJyxcbiAgICAgICAgdmFsdWU6ICdEcmFnTGF5ZXIoJyArIGRpc3BsYXlOYW1lICsgJyknLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbnRleHRUeXBlcycsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgZHJhZ0Ryb3BNYW5hZ2VyOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH1dKTtcblxuICAgICAgZnVuY3Rpb24gRHJhZ0xheWVyQ29udGFpbmVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnTGF5ZXJDb250YWluZXIpO1xuXG4gICAgICAgIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBjb250ZXh0LmRyYWdEcm9wTWFuYWdlcjtcbiAgICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgdGhpcy5tYW5hZ2VyID09PSAnb2JqZWN0JywgJ0NvdWxkIG5vdCBmaW5kIHRoZSBkcmFnIGFuZCBkcm9wIG1hbmFnZXIgaW4gdGhlIGNvbnRleHQgb2YgJXMuICcgKyAnTWFrZSBzdXJlIHRvIHdyYXAgdGhlIHRvcC1sZXZlbCBjb21wb25lbnQgb2YgeW91ciBhcHAgd2l0aCBEcmFnRHJvcENvbnRleHQuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtdHJvdWJsZXNob290aW5nLmh0bWwjY291bGQtbm90LWZpbmQtdGhlLWRyYWctYW5kLWRyb3AtbWFuYWdlci1pbi10aGUtY29udGV4dCcsIGRpc3BsYXlOYW1lLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICB9XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQgPSB0cnVlO1xuXG4gICAgICAgIHZhciBtb25pdG9yID0gdGhpcy5tYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21PZmZzZXRDaGFuZ2UgPSBtb25pdG9yLnN1YnNjcmliZVRvT2Zmc2V0Q2hhbmdlKHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21TdGF0ZUNoYW5nZSA9IG1vbml0b3Iuc3Vic2NyaWJlVG9TdGF0ZUNoYW5nZSh0aGlzLmhhbmRsZUNoYW5nZSk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbU9mZnNldENoYW5nZSgpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVN0YXRlQ2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ3VycmVudGx5TW91bnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSB0aGlzLmdldEN1cnJlbnRTdGF0ZSgpO1xuICAgICAgICBpZiAoIV91dGlsc1NoYWxsb3dFcXVhbDJbJ2RlZmF1bHQnXShuZXh0U3RhdGUsIHRoaXMuc3RhdGUpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLmdldEN1cnJlbnRTdGF0ZSA9IGZ1bmN0aW9uIGdldEN1cnJlbnRTdGF0ZSgpIHtcbiAgICAgICAgdmFyIG1vbml0b3IgPSB0aGlzLm1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgICByZXR1cm4gY29sbGVjdChtb25pdG9yKTtcbiAgICAgIH07XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoRGVjb3JhdGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSwge1xuICAgICAgICAgIHJlZjogJ2NoaWxkJyB9KSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gRHJhZ0xheWVyQ29udGFpbmVyO1xuICAgIH0pKF9yZWFjdC5Db21wb25lbnQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL0RyYWdMYXllci5qc1xuICoqIG1vZHVsZSBpZCA9IDExMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHNoYWxsb3dFcXVhbDtcblxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghaGFzT3duLmNhbGwob2JqQiwga2V5c0FbaV0pIHx8IG9iakFba2V5c0FbaV1dICE9PSBvYmpCW2tleXNBW2ldXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWxBID0gb2JqQVtrZXlzQVtpXV07XG4gICAgdmFyIHZhbEIgPSBvYmpCW2tleXNBW2ldXTtcblxuICAgIGlmICh2YWxBICE9PSB2YWxCKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi91dGlscy9zaGFsbG93RXF1YWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHNoYWxsb3dFcXVhbFNjYWxhcjtcblxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsU2NhbGFyKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghaGFzT3duLmNhbGwob2JqQiwga2V5c0FbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbEEgPSBvYmpBW2tleXNBW2ldXTtcbiAgICB2YXIgdmFsQiA9IG9iakJba2V5c0FbaV1dO1xuXG4gICAgaWYgKHZhbEEgIT09IHZhbEIgfHwgdHlwZW9mIHZhbEEgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWxCID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL3NoYWxsb3dFcXVhbFNjYWxhci5qc1xuICoqIG1vZHVsZSBpZCA9IDExM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzSG9zdE9iamVjdCA9IHJlcXVpcmUoJy4vX2lzSG9zdE9iamVjdCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fFxuICAgICAgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT0gb2JqZWN0VGFnIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmXG4gICAgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiYgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQbGFpbk9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9+L2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0UHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG4vKipcbiAqIEdldHMgdGhlIGBbW1Byb3RvdHlwZV1dYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtudWxsfE9iamVjdH0gUmV0dXJucyB0aGUgYFtbUHJvdG90eXBlXV1gLlxuICovXG5mdW5jdGlvbiBnZXRQcm90b3R5cGUodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZUdldFByb3RvdHlwZShPYmplY3QodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0hvc3RPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvfi9sb2Rhc2gvX2lzSG9zdE9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDExNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIF9zbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyYWdTb3VyY2U7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzUGxhaW5PYmplY3QpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMgPSByZXF1aXJlKCcuL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzJyk7XG5cbnZhciBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzKTtcblxudmFyIF9kZWNvcmF0ZUhhbmRsZXIgPSByZXF1aXJlKCcuL2RlY29yYXRlSGFuZGxlcicpO1xuXG52YXIgX2RlY29yYXRlSGFuZGxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWNvcmF0ZUhhbmRsZXIpO1xuXG52YXIgX3JlZ2lzdGVyU291cmNlID0gcmVxdWlyZSgnLi9yZWdpc3RlclNvdXJjZScpO1xuXG52YXIgX3JlZ2lzdGVyU291cmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZ2lzdGVyU291cmNlKTtcblxudmFyIF9jcmVhdGVTb3VyY2VGYWN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVTb3VyY2VGYWN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlU291cmNlRmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTb3VyY2VGYWN0b3J5KTtcblxudmFyIF9jcmVhdGVTb3VyY2VNb25pdG9yID0gcmVxdWlyZSgnLi9jcmVhdGVTb3VyY2VNb25pdG9yJyk7XG5cbnZhciBfY3JlYXRlU291cmNlTW9uaXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTb3VyY2VNb25pdG9yKTtcblxudmFyIF9jcmVhdGVTb3VyY2VDb25uZWN0b3IgPSByZXF1aXJlKCcuL2NyZWF0ZVNvdXJjZUNvbm5lY3RvcicpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZUNvbm5lY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTb3VyY2VDb25uZWN0b3IpO1xuXG52YXIgX3V0aWxzSXNWYWxpZFR5cGUgPSByZXF1aXJlKCcuL3V0aWxzL2lzVmFsaWRUeXBlJyk7XG5cbnZhciBfdXRpbHNJc1ZhbGlkVHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0lzVmFsaWRUeXBlKTtcblxuZnVuY3Rpb24gRHJhZ1NvdXJjZSh0eXBlLCBzcGVjLCBjb2xsZWN0KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbM107XG5cbiAgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyWydkZWZhdWx0J10uYXBwbHkodW5kZWZpbmVkLCBbJ0RyYWdTb3VyY2UnLCAndHlwZSwgc3BlYywgY29sbGVjdFssIG9wdGlvbnNdJ10uY29uY2F0KF9zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgdmFyIGdldFR5cGUgPSB0eXBlO1xuICBpZiAodHlwZW9mIHR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF91dGlsc0lzVmFsaWRUeXBlMlsnZGVmYXVsdCddKHR5cGUpLCAnRXhwZWN0ZWQgXCJ0eXBlXCIgcHJvdmlkZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIERyYWdTb3VyY2UgdG8gYmUgJyArICdhIHN0cmluZywgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzdHJpbmcgZ2l2ZW4gdGhlIGN1cnJlbnQgcHJvcHMuICcgKyAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIHR5cGUpO1xuICAgIGdldFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9O1xuICB9XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzUGxhaW5PYmplY3QyWydkZWZhdWx0J10oc3BlYyksICdFeHBlY3RlZCBcInNwZWNcIiBwcm92aWRlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIERyYWdTb3VyY2UgdG8gYmUgJyArICdhIHBsYWluIG9iamVjdC4gSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIHNwZWMpO1xuICB2YXIgY3JlYXRlU291cmNlID0gX2NyZWF0ZVNvdXJjZUZhY3RvcnkyWydkZWZhdWx0J10oc3BlYyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGNvbGxlY3QgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBcImNvbGxlY3RcIiBwcm92aWRlZCBhcyB0aGUgdGhpcmQgYXJndW1lbnQgdG8gRHJhZ1NvdXJjZSB0byBiZSAnICsgJ2EgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IG9mIHByb3BzIHRvIGluamVjdC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgY29sbGVjdCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzUGxhaW5PYmplY3QyWydkZWZhdWx0J10ob3B0aW9ucyksICdFeHBlY3RlZCBcIm9wdGlvbnNcIiBwcm92aWRlZCBhcyB0aGUgZm91cnRoIGFyZ3VtZW50IHRvIERyYWdTb3VyY2UgdG8gYmUgJyArICdhIHBsYWluIG9iamVjdCB3aGVuIHNwZWNpZmllZC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgY29sbGVjdCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRlU291cmNlKERlY29yYXRlZENvbXBvbmVudCkge1xuICAgIHJldHVybiBfZGVjb3JhdGVIYW5kbGVyMlsnZGVmYXVsdCddKHtcbiAgICAgIGNvbm5lY3RCYWNrZW5kOiBmdW5jdGlvbiBjb25uZWN0QmFja2VuZChiYWNrZW5kLCBzb3VyY2VJZCkge1xuICAgICAgICByZXR1cm4gYmFja2VuZC5jb25uZWN0RHJhZ1NvdXJjZShzb3VyY2VJZCk7XG4gICAgICB9LFxuICAgICAgY29udGFpbmVyRGlzcGxheU5hbWU6ICdEcmFnU291cmNlJyxcbiAgICAgIGNyZWF0ZUhhbmRsZXI6IGNyZWF0ZVNvdXJjZSxcbiAgICAgIHJlZ2lzdGVySGFuZGxlcjogX3JlZ2lzdGVyU291cmNlMlsnZGVmYXVsdCddLFxuICAgICAgY3JlYXRlTW9uaXRvcjogX2NyZWF0ZVNvdXJjZU1vbml0b3IyWydkZWZhdWx0J10sXG4gICAgICBjcmVhdGVDb25uZWN0b3I6IF9jcmVhdGVTb3VyY2VDb25uZWN0b3IyWydkZWZhdWx0J10sXG4gICAgICBEZWNvcmF0ZWRDb21wb25lbnQ6IERlY29yYXRlZENvbXBvbmVudCxcbiAgICAgIGdldFR5cGU6IGdldFR5cGUsXG4gICAgICBjb2xsZWN0OiBjb2xsZWN0LFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL0RyYWdTb3VyY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZGVjb3JhdGVIYW5kbGVyO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZGlzcG9zYWJsZXMgPSByZXF1aXJlKCdkaXNwb3NhYmxlcycpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1NoYWxsb3dFcXVhbCk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWxTY2FsYXIgPSByZXF1aXJlKCcuL3V0aWxzL3NoYWxsb3dFcXVhbFNjYWxhcicpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyKTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzUGxhaW5PYmplY3QpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG5mdW5jdGlvbiBkZWNvcmF0ZUhhbmRsZXIoX3JlZikge1xuICB2YXIgRGVjb3JhdGVkQ29tcG9uZW50ID0gX3JlZi5EZWNvcmF0ZWRDb21wb25lbnQ7XG4gIHZhciBjcmVhdGVIYW5kbGVyID0gX3JlZi5jcmVhdGVIYW5kbGVyO1xuICB2YXIgY3JlYXRlTW9uaXRvciA9IF9yZWYuY3JlYXRlTW9uaXRvcjtcbiAgdmFyIGNyZWF0ZUNvbm5lY3RvciA9IF9yZWYuY3JlYXRlQ29ubmVjdG9yO1xuICB2YXIgcmVnaXN0ZXJIYW5kbGVyID0gX3JlZi5yZWdpc3RlckhhbmRsZXI7XG4gIHZhciBjb250YWluZXJEaXNwbGF5TmFtZSA9IF9yZWYuY29udGFpbmVyRGlzcGxheU5hbWU7XG4gIHZhciBnZXRUeXBlID0gX3JlZi5nZXRUeXBlO1xuICB2YXIgY29sbGVjdCA9IF9yZWYuY29sbGVjdDtcbiAgdmFyIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRhcmVQcm9wc0VxdWFsID0gb3B0aW9ucy5hcmVQcm9wc0VxdWFsO1xuICB2YXIgYXJlUHJvcHNFcXVhbCA9IF9vcHRpb25zJGFyZVByb3BzRXF1YWwgPT09IHVuZGVmaW5lZCA/IF91dGlsc1NoYWxsb3dFcXVhbFNjYWxhcjJbJ2RlZmF1bHQnXSA6IF9vcHRpb25zJGFyZVByb3BzRXF1YWw7XG5cbiAgdmFyIGRpc3BsYXlOYW1lID0gRGVjb3JhdGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IERlY29yYXRlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuXG4gIHJldHVybiAoZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoRHJhZ0Ryb3BDb250YWluZXIsIF9Db21wb25lbnQpO1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmdldEhhbmRsZXJJZCA9IGZ1bmN0aW9uIGdldEhhbmRsZXJJZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJJZDtcbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZTtcbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgcmV0dXJuICFhcmVQcm9wc0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHwgIV91dGlsc1NoYWxsb3dFcXVhbDJbJ2RlZmF1bHQnXShuZXh0U3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoRHJhZ0Ryb3BDb250YWluZXIsIG51bGwsIFt7XG4gICAgICBrZXk6ICdEZWNvcmF0ZWRDb21wb25lbnQnLFxuICAgICAgdmFsdWU6IERlY29yYXRlZENvbXBvbmVudCxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9LCB7XG4gICAgICBrZXk6ICdkaXNwbGF5TmFtZScsXG4gICAgICB2YWx1ZTogY29udGFpbmVyRGlzcGxheU5hbWUgKyAnKCcgKyBkaXNwbGF5TmFtZSArICcpJyxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb250ZXh0VHlwZXMnLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgZHJhZ0Ryb3BNYW5hZ2VyOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH1dKTtcblxuICAgIGZ1bmN0aW9uIERyYWdEcm9wQ29udGFpbmVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0Ryb3BDb250YWluZXIpO1xuXG4gICAgICBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpO1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVDaGlsZFJlZiA9IHRoaXMuaGFuZGxlQ2hpbGRSZWYuYmluZCh0aGlzKTtcblxuICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgdGhpcy5jb250ZXh0LmRyYWdEcm9wTWFuYWdlciA9PT0gJ29iamVjdCcsICdDb3VsZCBub3QgZmluZCB0aGUgZHJhZyBhbmQgZHJvcCBtYW5hZ2VyIGluIHRoZSBjb250ZXh0IG9mICVzLiAnICsgJ01ha2Ugc3VyZSB0byB3cmFwIHRoZSB0b3AtbGV2ZWwgY29tcG9uZW50IG9mIHlvdXIgYXBwIHdpdGggRHJhZ0Ryb3BDb250ZXh0LiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLXRyb3VibGVzaG9vdGluZy5odG1sI2NvdWxkLW5vdC1maW5kLXRoZS1kcmFnLWFuZC1kcm9wLW1hbmFnZXItaW4tdGhlLWNvbnRleHQnLCBkaXNwbGF5TmFtZSwgZGlzcGxheU5hbWUpO1xuXG4gICAgICB0aGlzLm1hbmFnZXIgPSB0aGlzLmNvbnRleHQuZHJhZ0Ryb3BNYW5hZ2VyO1xuICAgICAgdGhpcy5oYW5kbGVyTW9uaXRvciA9IGNyZWF0ZU1vbml0b3IodGhpcy5tYW5hZ2VyKTtcbiAgICAgIHRoaXMuaGFuZGxlckNvbm5lY3RvciA9IGNyZWF0ZUNvbm5lY3Rvcih0aGlzLm1hbmFnZXIuZ2V0QmFja2VuZCgpKTtcbiAgICAgIHRoaXMuaGFuZGxlciA9IGNyZWF0ZUhhbmRsZXIodGhpcy5oYW5kbGVyTW9uaXRvcik7XG5cbiAgICAgIHRoaXMuZGlzcG9zYWJsZSA9IG5ldyBfZGlzcG9zYWJsZXMuU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgICAgdGhpcy5yZWNlaXZlUHJvcHMocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuaXNDdXJyZW50bHlNb3VudGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlzcG9zYWJsZSA9IG5ldyBfZGlzcG9zYWJsZXMuU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IG51bGw7XG4gICAgICB0aGlzLnJlY2VpdmVQcm9wcyh0aGlzLnByb3BzKTtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICghYXJlUHJvcHNFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMucmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUucmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gcmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICB0aGlzLmhhbmRsZXIucmVjZWl2ZVByb3BzKHByb3BzKTtcbiAgICAgIHRoaXMucmVjZWl2ZVR5cGUoZ2V0VHlwZShwcm9wcykpO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUucmVjZWl2ZVR5cGUgPSBmdW5jdGlvbiByZWNlaXZlVHlwZSh0eXBlKSB7XG4gICAgICBpZiAodHlwZSA9PT0gdGhpcy5jdXJyZW50VHlwZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VycmVudFR5cGUgPSB0eXBlO1xuXG4gICAgICB2YXIgX3JlZ2lzdGVySGFuZGxlciA9IHJlZ2lzdGVySGFuZGxlcih0eXBlLCB0aGlzLmhhbmRsZXIsIHRoaXMubWFuYWdlcik7XG5cbiAgICAgIHZhciBoYW5kbGVySWQgPSBfcmVnaXN0ZXJIYW5kbGVyLmhhbmRsZXJJZDtcbiAgICAgIHZhciB1bnJlZ2lzdGVyID0gX3JlZ2lzdGVySGFuZGxlci51bnJlZ2lzdGVyO1xuXG4gICAgICB0aGlzLmhhbmRsZXJJZCA9IGhhbmRsZXJJZDtcbiAgICAgIHRoaXMuaGFuZGxlck1vbml0b3IucmVjZWl2ZUhhbmRsZXJJZChoYW5kbGVySWQpO1xuICAgICAgdGhpcy5oYW5kbGVyQ29ubmVjdG9yLnJlY2VpdmVIYW5kbGVySWQoaGFuZGxlcklkKTtcblxuICAgICAgdmFyIGdsb2JhbE1vbml0b3IgPSB0aGlzLm1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgdmFyIHVuc3Vic2NyaWJlID0gZ2xvYmFsTW9uaXRvci5zdWJzY3JpYmVUb1N0YXRlQ2hhbmdlKHRoaXMuaGFuZGxlQ2hhbmdlLCB7IGhhbmRsZXJJZHM6IFtoYW5kbGVySWRdIH0pO1xuXG4gICAgICB0aGlzLmRpc3Bvc2FibGUuc2V0RGlzcG9zYWJsZShuZXcgX2Rpc3Bvc2FibGVzLkNvbXBvc2l0ZURpc3Bvc2FibGUobmV3IF9kaXNwb3NhYmxlcy5EaXNwb3NhYmxlKHVuc3Vic2NyaWJlKSwgbmV3IF9kaXNwb3NhYmxlcy5EaXNwb3NhYmxlKHVucmVnaXN0ZXIpKSk7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNDdXJyZW50bHlNb3VudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5leHRTdGF0ZSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICBpZiAoIV91dGlsc1NoYWxsb3dFcXVhbDJbJ2RlZmF1bHQnXShuZXh0U3RhdGUsIHRoaXMuc3RhdGUpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgdGhpcy5kaXNwb3NhYmxlLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuaGFuZGxlckNvbm5lY3Rvci5yZWNlaXZlSGFuZGxlcklkKG51bGwpO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuaGFuZGxlQ2hpbGRSZWYgPSBmdW5jdGlvbiBoYW5kbGVDaGlsZFJlZihjb21wb25lbnQpIHtcbiAgICAgIHRoaXMuZGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UgPSBjb21wb25lbnQ7XG4gICAgICB0aGlzLmhhbmRsZXIucmVjZWl2ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuZ2V0Q3VycmVudFN0YXRlID0gZnVuY3Rpb24gZ2V0Q3VycmVudFN0YXRlKCkge1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IGNvbGxlY3QodGhpcy5oYW5kbGVyQ29ubmVjdG9yLmhvb2tzLCB0aGlzLmhhbmRsZXJNb25pdG9yKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShuZXh0U3RhdGUpLCAnRXhwZWN0ZWQgYGNvbGxlY3RgIHNwZWNpZmllZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvICcgKyAnJXMgZm9yICVzIHRvIHJldHVybiBhIHBsYWluIG9iamVjdCBvZiBwcm9wcyB0byBpbmplY3QuICcgKyAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuJywgY29udGFpbmVyRGlzcGxheU5hbWUsIGRpc3BsYXlOYW1lLCBuZXh0U3RhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KERlY29yYXRlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUsIHtcbiAgICAgICAgcmVmOiB0aGlzLmhhbmRsZUNoaWxkUmVmIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERyYWdEcm9wQ29udGFpbmVyO1xuICB9KShfcmVhY3QuQ29tcG9uZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9kZWNvcmF0ZUhhbmRsZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzRGlzcG9zYWJsZTIgPSByZXF1aXJlKCcuL2lzRGlzcG9zYWJsZScpO1xuXG52YXIgX2lzRGlzcG9zYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaXNEaXNwb3NhYmxlMik7XG5cbmV4cG9ydHMuaXNEaXNwb3NhYmxlID0gX2lzRGlzcG9zYWJsZTNbJ2RlZmF1bHQnXTtcblxudmFyIF9EaXNwb3NhYmxlMiA9IHJlcXVpcmUoJy4vRGlzcG9zYWJsZScpO1xuXG52YXIgX0Rpc3Bvc2FibGUzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX0Rpc3Bvc2FibGUyKTtcblxuZXhwb3J0cy5EaXNwb3NhYmxlID0gX0Rpc3Bvc2FibGUzWydkZWZhdWx0J107XG5cbnZhciBfQ29tcG9zaXRlRGlzcG9zYWJsZTIgPSByZXF1aXJlKCcuL0NvbXBvc2l0ZURpc3Bvc2FibGUnKTtcblxudmFyIF9Db21wb3NpdGVEaXNwb3NhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9Db21wb3NpdGVEaXNwb3NhYmxlMik7XG5cbmV4cG9ydHMuQ29tcG9zaXRlRGlzcG9zYWJsZSA9IF9Db21wb3NpdGVEaXNwb3NhYmxlM1snZGVmYXVsdCddO1xuXG52YXIgX1NlcmlhbERpc3Bvc2FibGUyID0gcmVxdWlyZSgnLi9TZXJpYWxEaXNwb3NhYmxlJyk7XG5cbnZhciBfU2VyaWFsRGlzcG9zYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfU2VyaWFsRGlzcG9zYWJsZTIpO1xuXG5leHBvcnRzLlNlcmlhbERpc3Bvc2FibGUgPSBfU2VyaWFsRGlzcG9zYWJsZTNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kaXNwb3NhYmxlcy9tb2R1bGVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBpc0Rpc3Bvc2FibGU7XG5cbmZ1bmN0aW9uIGlzRGlzcG9zYWJsZShvYmopIHtcbiAgcmV0dXJuIEJvb2xlYW4ob2JqICYmIHR5cGVvZiBvYmouZGlzcG9zZSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvaXNEaXNwb3NhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuLyoqXG4gKiBUaGUgYmFzaWMgZGlzcG9zYWJsZS5cbiAqL1xuXG52YXIgRGlzcG9zYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERpc3Bvc2FibGUoYWN0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpc3Bvc2FibGUpO1xuXG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb24gfHwgbm9vcDtcbiAgfVxuXG4gIERpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICB0aGlzLmFjdGlvbi5jYWxsKG51bGwpO1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKERpc3Bvc2FibGUsIG51bGwsIFt7XG4gICAga2V5OiBcImVtcHR5XCIsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogeyBkaXNwb3NlOiBub29wIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEaXNwb3NhYmxlO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEaXNwb3NhYmxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kaXNwb3NhYmxlcy9tb2R1bGVzL0Rpc3Bvc2FibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9O1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzRGlzcG9zYWJsZSA9IHJlcXVpcmUoJy4vaXNEaXNwb3NhYmxlJyk7XG5cbnZhciBfaXNEaXNwb3NhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pc0Rpc3Bvc2FibGUpO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBncm91cCBvZiBkaXNwb3NhYmxlIHJlc291cmNlcyB0aGF0IGFyZSBkaXNwb3NlZCB0b2dldGhlci5cbiAqL1xuXG52YXIgQ29tcG9zaXRlRGlzcG9zYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbXBvc2l0ZURpc3Bvc2FibGUoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRpc3Bvc2FibGVzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBkaXNwb3NhYmxlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9zaXRlRGlzcG9zYWJsZSk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShkaXNwb3NhYmxlc1swXSkgJiYgZGlzcG9zYWJsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBkaXNwb3NhYmxlcyA9IGRpc3Bvc2FibGVzWzBdO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzcG9zYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghX2lzRGlzcG9zYWJsZTJbJ2RlZmF1bHQnXShkaXNwb3NhYmxlc1tpXSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhIGRpc3Bvc2FibGUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2FibGVzID0gZGlzcG9zYWJsZXM7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGRpc3Bvc2FibGUgdG8gdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUgb3IgZGlzcG9zZXMgdGhlIGRpc3Bvc2FibGUgaWYgdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUgaXMgZGlzcG9zZWQuXG4gICAqIEBwYXJhbSB7RGlzcG9zYWJsZX0gaXRlbSBEaXNwb3NhYmxlIHRvIGFkZC5cbiAgICovXG5cbiAgQ29tcG9zaXRlRGlzcG9zYWJsZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICBpdGVtLmRpc3Bvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwb3NhYmxlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbmQgZGlzcG9zZXMgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYSBkaXNwb3NhYmxlIGZyb20gdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUuXG4gICAqIEBwYXJhbSB7RGlzcG9zYWJsZX0gaXRlbSBEaXNwb3NhYmxlIHRvIHJlbW92ZS5cbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgZm91bmQ7IGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG5cbiAgQ29tcG9zaXRlRGlzcG9zYWJsZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5kaXNwb3NhYmxlcy5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2FibGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgaXRlbS5kaXNwb3NlKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3Bvc2VzIGFsbCBkaXNwb3NhYmxlcyBpbiB0aGUgZ3JvdXAgYW5kIHJlbW92ZXMgdGhlbSBmcm9tIHRoZSBncm91cC5cbiAgICovXG5cbiAgQ29tcG9zaXRlRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsZW4gPSB0aGlzLmRpc3Bvc2FibGVzLmxlbmd0aDtcbiAgICB2YXIgY3VycmVudERpc3Bvc2FibGVzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgY3VycmVudERpc3Bvc2FibGVzW2ldID0gdGhpcy5kaXNwb3NhYmxlc1tpXTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgIHRoaXMuZGlzcG9zYWJsZXMgPSBbXTtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjdXJyZW50RGlzcG9zYWJsZXNbaV0uZGlzcG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ29tcG9zaXRlRGlzcG9zYWJsZTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvbXBvc2l0ZURpc3Bvc2FibGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kaXNwb3NhYmxlcy9tb2R1bGVzL0NvbXBvc2l0ZURpc3Bvc2FibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9O1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzRGlzcG9zYWJsZSA9IHJlcXVpcmUoJy4vaXNEaXNwb3NhYmxlJyk7XG5cbnZhciBfaXNEaXNwb3NhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pc0Rpc3Bvc2FibGUpO1xuXG52YXIgU2VyaWFsRGlzcG9zYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNlcmlhbERpc3Bvc2FibGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcmlhbERpc3Bvc2FibGUpO1xuXG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB1bmRlcmx5aW5nIGRpc3Bvc2FibGUuXG4gICAqIEByZXR1cm4gVGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZS5cbiAgICovXG5cbiAgU2VyaWFsRGlzcG9zYWJsZS5wcm90b3R5cGUuZ2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uIGdldERpc3Bvc2FibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICAvKipcbiAgICogU2V0cyB0aGUgdW5kZXJseWluZyBkaXNwb3NhYmxlLlxuICAgKiBAcGFyYW0ge0Rpc3Bvc2FibGV9IHZhbHVlIFRoZSBuZXcgdW5kZXJseWluZyBkaXNwb3NhYmxlLlxuICAgKi9cblxuICBTZXJpYWxEaXNwb3NhYmxlLnByb3RvdHlwZS5zZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gc2V0RGlzcG9zYWJsZSgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMF07XG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAhX2lzRGlzcG9zYWJsZTJbJ2RlZmF1bHQnXSh2YWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZWl0aGVyIGFuIGVtcHR5IHZhbHVlIG9yIGEgdmFsaWQgZGlzcG9zYWJsZScpO1xuICAgIH1cblxuICAgIHZhciBpc0Rpc3Bvc2VkID0gdGhpcy5pc0Rpc3Bvc2VkO1xuICAgIHZhciBwcmV2aW91cyA9IHVuZGVmaW5lZDtcblxuICAgIGlmICghaXNEaXNwb3NlZCkge1xuICAgICAgcHJldmlvdXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgIHByZXZpb3VzLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwb3NlZCAmJiB2YWx1ZSkge1xuICAgICAgdmFsdWUuZGlzcG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGlzcG9zZXMgdGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZSBhcyB3ZWxsIGFzIGFsbCBmdXR1cmUgcmVwbGFjZW1lbnRzLlxuICAgKi9cblxuICBTZXJpYWxEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICB2YXIgcHJldmlvdXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgcHJldmlvdXMuZGlzcG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU2VyaWFsRGlzcG9zYWJsZTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNlcmlhbERpc3Bvc2FibGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kaXNwb3NhYmxlcy9tb2R1bGVzL1NlcmlhbERpc3Bvc2FibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSByZWdpc3RlclNvdXJjZTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJTb3VyY2UodHlwZSwgc291cmNlLCBtYW5hZ2VyKSB7XG4gIHZhciByZWdpc3RyeSA9IG1hbmFnZXIuZ2V0UmVnaXN0cnkoKTtcbiAgdmFyIHNvdXJjZUlkID0gcmVnaXN0cnkuYWRkU291cmNlKHR5cGUsIHNvdXJjZSk7XG5cbiAgZnVuY3Rpb24gdW5yZWdpc3RlclNvdXJjZSgpIHtcbiAgICByZWdpc3RyeS5yZW1vdmVTb3VyY2Uoc291cmNlSWQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVySWQ6IHNvdXJjZUlkLFxuICAgIHVucmVnaXN0ZXI6IHVucmVnaXN0ZXJTb3VyY2VcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3JlZ2lzdGVyU291cmNlLmpzXG4gKiogbW9kdWxlIGlkID0gMTI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVTb3VyY2VGYWN0b3J5O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNQbGFpbk9iamVjdCk7XG5cbnZhciBBTExPV0VEX1NQRUNfTUVUSE9EUyA9IFsnY2FuRHJhZycsICdiZWdpbkRyYWcnLCAnY2FuRHJhZycsICdpc0RyYWdnaW5nJywgJ2VuZERyYWcnXTtcbnZhciBSRVFVSVJFRF9TUEVDX01FVEhPRFMgPSBbJ2JlZ2luRHJhZyddO1xuXG5mdW5jdGlvbiBjcmVhdGVTb3VyY2VGYWN0b3J5KHNwZWMpIHtcbiAgT2JqZWN0LmtleXMoc3BlYykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShBTExPV0VEX1NQRUNfTUVUSE9EUy5pbmRleE9mKGtleSkgPiAtMSwgJ0V4cGVjdGVkIHRoZSBkcmFnIHNvdXJjZSBzcGVjaWZpY2F0aW9uIHRvIG9ubHkgaGF2ZSAnICsgJ3NvbWUgb2YgdGhlIGZvbGxvd2luZyBrZXlzOiAlcy4gJyArICdJbnN0ZWFkIHJlY2VpdmVkIGEgc3BlY2lmaWNhdGlvbiB3aXRoIGFuIHVuZXhwZWN0ZWQgXCIlc1wiIGtleS4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgQUxMT1dFRF9TUEVDX01FVEhPRFMuam9pbignLCAnKSwga2V5KTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBzcGVjW2tleV0gPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCAlcyBpbiB0aGUgZHJhZyBzb3VyY2Ugc3BlY2lmaWNhdGlvbiB0byBiZSBhIGZ1bmN0aW9uLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgYSBzcGVjaWZpY2F0aW9uIHdpdGggJXM6ICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBrZXksIGtleSwgc3BlY1trZXldKTtcbiAgfSk7XG4gIFJFUVVJUkVEX1NQRUNfTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBzcGVjW2tleV0gPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCAlcyBpbiB0aGUgZHJhZyBzb3VyY2Ugc3BlY2lmaWNhdGlvbiB0byBiZSBhIGZ1bmN0aW9uLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgYSBzcGVjaWZpY2F0aW9uIHdpdGggJXM6ICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBrZXksIGtleSwgc3BlY1trZXldKTtcbiAgfSk7XG5cbiAgdmFyIFNvdXJjZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU291cmNlKG1vbml0b3IpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb3VyY2UpO1xuXG4gICAgICB0aGlzLm1vbml0b3IgPSBtb25pdG9yO1xuICAgICAgdGhpcy5wcm9wcyA9IG51bGw7XG4gICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgU291cmNlLnByb3RvdHlwZS5yZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiByZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB9O1xuXG4gICAgU291cmNlLnByb3RvdHlwZS5yZWNlaXZlQ29tcG9uZW50ID0gZnVuY3Rpb24gcmVjZWl2ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICBTb3VyY2UucHJvdG90eXBlLmNhbkRyYWcgPSBmdW5jdGlvbiBjYW5EcmFnKCkge1xuICAgICAgaWYgKCFzcGVjLmNhbkRyYWcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzcGVjLmNhbkRyYWcodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yKTtcbiAgICB9O1xuXG4gICAgU291cmNlLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24gaXNEcmFnZ2luZyhnbG9iYWxNb25pdG9yLCBzb3VyY2VJZCkge1xuICAgICAgaWYgKCFzcGVjLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZUlkID09PSBnbG9iYWxNb25pdG9yLmdldFNvdXJjZUlkKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzcGVjLmlzRHJhZ2dpbmcodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yKTtcbiAgICB9O1xuXG4gICAgU291cmNlLnByb3RvdHlwZS5iZWdpbkRyYWcgPSBmdW5jdGlvbiBiZWdpbkRyYWcoKSB7XG4gICAgICB2YXIgaXRlbSA9IHNwZWMuYmVnaW5EcmFnKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvciwgdGhpcy5jb21wb25lbnQpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShpdGVtKSwgJ2JlZ2luRHJhZygpIG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgZHJhZ2dlZCBpdGVtLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfTtcblxuICAgIFNvdXJjZS5wcm90b3R5cGUuZW5kRHJhZyA9IGZ1bmN0aW9uIGVuZERyYWcoKSB7XG4gICAgICBpZiAoIXNwZWMuZW5kRHJhZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNwZWMuZW5kRHJhZyh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IsIHRoaXMuY29tcG9uZW50KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNvdXJjZTtcbiAgfSkoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlU291cmNlKG1vbml0b3IpIHtcbiAgICByZXR1cm4gbmV3IFNvdXJjZShtb25pdG9yKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9jcmVhdGVTb3VyY2VGYWN0b3J5LmpzXG4gKiogbW9kdWxlIGlkID0gMTI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVTb3VyY2VNb25pdG9yO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgaXNDYWxsaW5nQ2FuRHJhZyA9IGZhbHNlO1xudmFyIGlzQ2FsbGluZ0lzRHJhZ2dpbmcgPSBmYWxzZTtcblxudmFyIFNvdXJjZU1vbml0b3IgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTb3VyY2VNb25pdG9yKG1hbmFnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU291cmNlTW9uaXRvcik7XG5cbiAgICB0aGlzLmludGVybmFsTW9uaXRvciA9IG1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICB9XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUucmVjZWl2ZUhhbmRsZXJJZCA9IGZ1bmN0aW9uIHJlY2VpdmVIYW5kbGVySWQoc291cmNlSWQpIHtcbiAgICB0aGlzLnNvdXJjZUlkID0gc291cmNlSWQ7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuY2FuRHJhZyA9IGZ1bmN0aW9uIGNhbkRyYWcoKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSghaXNDYWxsaW5nQ2FuRHJhZywgJ1lvdSBtYXkgbm90IGNhbGwgbW9uaXRvci5jYW5EcmFnKCkgaW5zaWRlIHlvdXIgY2FuRHJhZygpIGltcGxlbWVudGF0aW9uLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLW1vbml0b3IuaHRtbCcpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlzQ2FsbGluZ0NhbkRyYWcgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmNhbkRyYWdTb3VyY2UodGhpcy5zb3VyY2VJZCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzQ2FsbGluZ0NhbkRyYWcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuaXNEcmFnZ2luZyA9IGZ1bmN0aW9uIGlzRHJhZ2dpbmcoKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSghaXNDYWxsaW5nSXNEcmFnZ2luZywgJ1lvdSBtYXkgbm90IGNhbGwgbW9uaXRvci5pc0RyYWdnaW5nKCkgaW5zaWRlIHlvdXIgaXNEcmFnZ2luZygpIGltcGxlbWVudGF0aW9uLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLW1vbml0b3IuaHRtbCcpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlzQ2FsbGluZ0lzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmlzRHJhZ2dpbmdTb3VyY2UodGhpcy5zb3VyY2VJZCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzQ2FsbGluZ0lzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0SXRlbVR5cGUgPSBmdW5jdGlvbiBnZXRJdGVtVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SXRlbVR5cGUoKTtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRJdGVtID0gZnVuY3Rpb24gZ2V0SXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SXRlbSgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldERyb3BSZXN1bHQgPSBmdW5jdGlvbiBnZXREcm9wUmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZGlkRHJvcCA9IGZ1bmN0aW9uIGRpZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmRpZERyb3AoKTtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0SW5pdGlhbENsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SW5pdGlhbENsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRTb3VyY2VDbGllbnRPZmZzZXQoKTtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldENsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCA9IGZ1bmN0aW9uIGdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCk7XG4gIH07XG5cbiAgcmV0dXJuIFNvdXJjZU1vbml0b3I7XG59KSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVTb3VyY2VNb25pdG9yKG1hbmFnZXIpIHtcbiAgcmV0dXJuIG5ldyBTb3VyY2VNb25pdG9yKG1hbmFnZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVNvdXJjZU1vbml0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVNvdXJjZUNvbm5lY3RvcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dyYXBDb25uZWN0b3JIb29rcyA9IHJlcXVpcmUoJy4vd3JhcENvbm5lY3Rvckhvb2tzJyk7XG5cbnZhciBfd3JhcENvbm5lY3Rvckhvb2tzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXBDb25uZWN0b3JIb29rcyk7XG5cbnZhciBfYXJlT3B0aW9uc0VxdWFsID0gcmVxdWlyZSgnLi9hcmVPcHRpb25zRXF1YWwnKTtcblxudmFyIF9hcmVPcHRpb25zRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJlT3B0aW9uc0VxdWFsKTtcblxuZnVuY3Rpb24gY3JlYXRlU291cmNlQ29ubmVjdG9yKGJhY2tlbmQpIHtcbiAgdmFyIGN1cnJlbnRIYW5kbGVySWQgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIGN1cnJlbnREcmFnU291cmNlTm9kZSA9IHVuZGVmaW5lZDtcbiAgdmFyIGN1cnJlbnREcmFnU291cmNlT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdmFyIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZSA9IHVuZGVmaW5lZDtcblxuICB2YXIgY3VycmVudERyYWdQcmV2aWV3Tm9kZSA9IHVuZGVmaW5lZDtcbiAgdmFyIGN1cnJlbnREcmFnUHJldmlld09wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHZhciBkaXNjb25uZWN0Q3VycmVudERyYWdQcmV2aWV3ID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIHJlY29ubmVjdERyYWdTb3VyY2UoKSB7XG4gICAgaWYgKGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZSkge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlKCk7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdTb3VyY2UgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50SGFuZGxlcklkICYmIGN1cnJlbnREcmFnU291cmNlTm9kZSkge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlID0gYmFja2VuZC5jb25uZWN0RHJhZ1NvdXJjZShjdXJyZW50SGFuZGxlcklkLCBjdXJyZW50RHJhZ1NvdXJjZU5vZGUsIGN1cnJlbnREcmFnU291cmNlT3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjb25uZWN0RHJhZ1ByZXZpZXcoKSB7XG4gICAgaWYgKGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcoKTtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50SGFuZGxlcklkICYmIGN1cnJlbnREcmFnUHJldmlld05vZGUpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcgPSBiYWNrZW5kLmNvbm5lY3REcmFnUHJldmlldyhjdXJyZW50SGFuZGxlcklkLCBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlLCBjdXJyZW50RHJhZ1ByZXZpZXdPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlSGFuZGxlcklkKGhhbmRsZXJJZCkge1xuICAgIGlmIChoYW5kbGVySWQgPT09IGN1cnJlbnRIYW5kbGVySWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50SGFuZGxlcklkID0gaGFuZGxlcklkO1xuICAgIHJlY29ubmVjdERyYWdTb3VyY2UoKTtcbiAgICByZWNvbm5lY3REcmFnUHJldmlldygpO1xuICB9XG5cbiAgdmFyIGhvb2tzID0gX3dyYXBDb25uZWN0b3JIb29rczJbJ2RlZmF1bHQnXSh7XG4gICAgZHJhZ1NvdXJjZTogZnVuY3Rpb24gY29ubmVjdERyYWdTb3VyY2Uobm9kZSwgb3B0aW9ucykge1xuICAgICAgaWYgKG5vZGUgPT09IGN1cnJlbnREcmFnU291cmNlTm9kZSAmJiBfYXJlT3B0aW9uc0VxdWFsMlsnZGVmYXVsdCddKG9wdGlvbnMsIGN1cnJlbnREcmFnU291cmNlT3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50RHJhZ1NvdXJjZU5vZGUgPSBub2RlO1xuICAgICAgY3VycmVudERyYWdTb3VyY2VPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgcmVjb25uZWN0RHJhZ1NvdXJjZSgpO1xuICAgIH0sXG5cbiAgICBkcmFnUHJldmlldzogZnVuY3Rpb24gY29ubmVjdERyYWdQcmV2aWV3KG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChub2RlID09PSBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlICYmIF9hcmVPcHRpb25zRXF1YWwyWydkZWZhdWx0J10ob3B0aW9ucywgY3VycmVudERyYWdQcmV2aWV3T3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlID0gbm9kZTtcbiAgICAgIGN1cnJlbnREcmFnUHJldmlld09wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICByZWNvbm5lY3REcmFnUHJldmlldygpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICByZWNlaXZlSGFuZGxlcklkOiByZWNlaXZlSGFuZGxlcklkLFxuICAgIGhvb2tzOiBob29rc1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVNvdXJjZUNvbm5lY3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gd3JhcENvbm5lY3Rvckhvb2tzO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbHNDbG9uZVdpdGhSZWYgPSByZXF1aXJlKCcuL3V0aWxzL2Nsb25lV2l0aFJlZicpO1xuXG52YXIgX3V0aWxzQ2xvbmVXaXRoUmVmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2xvbmVXaXRoUmVmKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIHRocm93SWZDb21wb3NpdGVDb21wb25lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gQ3VzdG9tIGNvbXBvbmVudHMgY2FuIG5vIGxvbmdlciBiZSB3cmFwcGVkIGRpcmVjdGx5IGluIFJlYWN0IERuRCAyLjBcbiAgLy8gc28gdGhhdCB3ZSBkb24ndCBuZWVkIHRvIGRlcGVuZCBvbiBmaW5kRE9NTm9kZSgpIGZyb20gcmVhY3QtZG9tLlxuICBpZiAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZGlzcGxheU5hbWUgPSBlbGVtZW50LnR5cGUuZGlzcGxheU5hbWUgfHwgZWxlbWVudC50eXBlLm5hbWUgfHwgJ3RoZSBjb21wb25lbnQnO1xuXG4gIHRocm93IG5ldyBFcnJvcignT25seSBuYXRpdmUgZWxlbWVudCBub2RlcyBjYW4gbm93IGJlIHBhc3NlZCB0byBSZWFjdCBEbkQgY29ubmVjdG9ycy4gJyArICgnWW91IGNhbiBlaXRoZXIgd3JhcCAnICsgZGlzcGxheU5hbWUgKyAnIGludG8gYSA8ZGl2Piwgb3IgdHVybiBpdCBpbnRvIGEgJykgKyAnZHJhZyBzb3VyY2Ugb3IgYSBkcm9wIHRhcmdldCBpdHNlbGYuJyk7XG59XG5cbmZ1bmN0aW9uIHdyYXBIb29rVG9SZWNvZ25pemVFbGVtZW50KGhvb2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudE9yTm9kZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzFdO1xuXG4gICAgLy8gV2hlbiBwYXNzZWQgYSBub2RlLCBjYWxsIHRoZSBob29rIHN0cmFpZ2h0IGF3YXkuXG4gICAgaWYgKCFfcmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudE9yTm9kZSkpIHtcbiAgICAgIHZhciBub2RlID0gZWxlbWVudE9yTm9kZTtcbiAgICAgIGhvb2sobm9kZSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgcGFzc2VkIGEgUmVhY3RFbGVtZW50LCBjbG9uZSBpdCBhbmQgYXR0YWNoIHRoaXMgZnVuY3Rpb24gYXMgYSByZWYuXG4gICAgLy8gVGhpcyBoZWxwcyB1cyBhY2hpZXZlIGEgbmVhdCBBUEkgd2hlcmUgdXNlciBkb2Vzbid0IGV2ZW4ga25vdyB0aGF0IHJlZnNcbiAgICAvLyBhcmUgYmVpbmcgdXNlZCB1bmRlciB0aGUgaG9vZC5cbiAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRPck5vZGU7XG4gICAgdGhyb3dJZkNvbXBvc2l0ZUNvbXBvbmVudEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAvLyBXaGVuIG5vIG9wdGlvbnMgYXJlIHBhc3NlZCwgdXNlIHRoZSBob29rIGRpcmVjdGx5XG4gICAgdmFyIHJlZiA9IG9wdGlvbnMgPyBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgcmV0dXJuIGhvb2sobm9kZSwgb3B0aW9ucyk7XG4gICAgfSA6IGhvb2s7XG5cbiAgICByZXR1cm4gX3V0aWxzQ2xvbmVXaXRoUmVmMlsnZGVmYXVsdCddKGVsZW1lbnQsIHJlZik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb25uZWN0b3JIb29rcyhob29rcykge1xuICB2YXIgd3JhcHBlZEhvb2tzID0ge307XG5cbiAgT2JqZWN0LmtleXMoaG9va3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBob29rID0gaG9va3Nba2V5XTtcbiAgICB2YXIgd3JhcHBlZEhvb2sgPSB3cmFwSG9va1RvUmVjb2duaXplRWxlbWVudChob29rKTtcbiAgICB3cmFwcGVkSG9va3Nba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3cmFwcGVkSG9vaztcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gd3JhcHBlZEhvb2tzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3dyYXBDb25uZWN0b3JIb29rcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY2xvbmVXaXRoUmVmO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBjbG9uZVdpdGhSZWYoZWxlbWVudCwgbmV3UmVmKSB7XG4gIHZhciBwcmV2aW91c1JlZiA9IGVsZW1lbnQucmVmO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBwcmV2aW91c1JlZiAhPT0gJ3N0cmluZycsICdDYW5ub3QgY29ubmVjdCBSZWFjdCBEbkQgdG8gYW4gZWxlbWVudCB3aXRoIGFuIGV4aXN0aW5nIHN0cmluZyByZWYuICcgKyAnUGxlYXNlIGNvbnZlcnQgaXQgdG8gdXNlIGEgY2FsbGJhY2sgcmVmIGluc3RlYWQsIG9yIHdyYXAgaXQgaW50byBhIDxzcGFuPiBvciA8ZGl2Pi4gJyArICdSZWFkIG1vcmU6IGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvbW9yZS1hYm91dC1yZWZzLmh0bWwjdGhlLXJlZi1jYWxsYmFjay1hdHRyaWJ1dGUnKTtcblxuICBpZiAoIXByZXZpb3VzUmVmKSB7XG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyByZWYgb24gdGhlIGVsZW1lbnQsIHVzZSB0aGUgbmV3IHJlZiBkaXJlY3RseVxuICAgIHJldHVybiBfcmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgIHJlZjogbmV3UmVmXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gX3JlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB7XG4gICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgbmV3UmVmKG5vZGUpO1xuXG4gICAgICBpZiAocHJldmlvdXNSZWYpIHtcbiAgICAgICAgcHJldmlvdXNSZWYobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi91dGlscy9jbG9uZVdpdGhSZWYuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGFyZU9wdGlvbnNFcXVhbDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1NoYWxsb3dFcXVhbCk7XG5cbmZ1bmN0aW9uIGFyZU9wdGlvbnNFcXVhbChuZXh0T3B0aW9ucywgY3VycmVudE9wdGlvbnMpIHtcbiAgaWYgKGN1cnJlbnRPcHRpb25zID09PSBuZXh0T3B0aW9ucykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRPcHRpb25zICE9PSBudWxsICYmIG5leHRPcHRpb25zICE9PSBudWxsICYmIF91dGlsc1NoYWxsb3dFcXVhbDJbJ2RlZmF1bHQnXShjdXJyZW50T3B0aW9ucywgbmV4dE9wdGlvbnMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2FyZU9wdGlvbnNFcXVhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gaXNWYWxpZFR5cGU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hJc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKTtcblxudmFyIF9sb2Rhc2hJc0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzQXJyYXkpO1xuXG5mdW5jdGlvbiBpc1ZhbGlkVHlwZSh0eXBlLCBhbGxvd0FycmF5KSB7XG4gICAgICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N5bWJvbCcgfHwgYWxsb3dBcnJheSAmJiBfbG9kYXNoSXNBcnJheTJbJ2RlZmF1bHQnXSh0eXBlKSAmJiB0eXBlLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkVHlwZSh0LCBmYWxzZSk7XG4gICAgICAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvdXRpbHMvaXNWYWxpZFR5cGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9+L2xvZGFzaC9pc0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMTMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgX3NsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gRHJvcFRhcmdldDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNQbGFpbk9iamVjdCk7XG5cbnZhciBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMnKTtcblxudmFyIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMpO1xuXG52YXIgX2RlY29yYXRlSGFuZGxlciA9IHJlcXVpcmUoJy4vZGVjb3JhdGVIYW5kbGVyJyk7XG5cbnZhciBfZGVjb3JhdGVIYW5kbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY29yYXRlSGFuZGxlcik7XG5cbnZhciBfcmVnaXN0ZXJUYXJnZXQgPSByZXF1aXJlKCcuL3JlZ2lzdGVyVGFyZ2V0Jyk7XG5cbnZhciBfcmVnaXN0ZXJUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVnaXN0ZXJUYXJnZXQpO1xuXG52YXIgX2NyZWF0ZVRhcmdldEZhY3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZVRhcmdldEZhY3RvcnknKTtcblxudmFyIF9jcmVhdGVUYXJnZXRGYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRhcmdldEZhY3RvcnkpO1xuXG52YXIgX2NyZWF0ZVRhcmdldE1vbml0b3IgPSByZXF1aXJlKCcuL2NyZWF0ZVRhcmdldE1vbml0b3InKTtcblxudmFyIF9jcmVhdGVUYXJnZXRNb25pdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRhcmdldE1vbml0b3IpO1xuXG52YXIgX2NyZWF0ZVRhcmdldENvbm5lY3RvciA9IHJlcXVpcmUoJy4vY3JlYXRlVGFyZ2V0Q29ubmVjdG9yJyk7XG5cbnZhciBfY3JlYXRlVGFyZ2V0Q29ubmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRhcmdldENvbm5lY3Rvcik7XG5cbnZhciBfdXRpbHNJc1ZhbGlkVHlwZSA9IHJlcXVpcmUoJy4vdXRpbHMvaXNWYWxpZFR5cGUnKTtcblxudmFyIF91dGlsc0lzVmFsaWRUeXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzSXNWYWxpZFR5cGUpO1xuXG5mdW5jdGlvbiBEcm9wVGFyZ2V0KHR5cGUsIHNwZWMsIGNvbGxlY3QpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1szXTtcblxuICBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czJbJ2RlZmF1bHQnXS5hcHBseSh1bmRlZmluZWQsIFsnRHJvcFRhcmdldCcsICd0eXBlLCBzcGVjLCBjb2xsZWN0Wywgb3B0aW9uc10nXS5jb25jYXQoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICB2YXIgZ2V0VHlwZSA9IHR5cGU7XG4gIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX3V0aWxzSXNWYWxpZFR5cGUyWydkZWZhdWx0J10odHlwZSwgdHJ1ZSksICdFeHBlY3RlZCBcInR5cGVcIiBwcm92aWRlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gRHJvcFRhcmdldCB0byBiZSAnICsgJ2Egc3RyaW5nLCBhbiBhcnJheSBvZiBzdHJpbmdzLCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIgZ2l2ZW4gJyArICd0aGUgY3VycmVudCBwcm9wcy4gSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIHR5cGUpO1xuICAgIGdldFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9O1xuICB9XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzUGxhaW5PYmplY3QyWydkZWZhdWx0J10oc3BlYyksICdFeHBlY3RlZCBcInNwZWNcIiBwcm92aWRlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIERyb3BUYXJnZXQgdG8gYmUgJyArICdhIHBsYWluIG9iamVjdC4gSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIHNwZWMpO1xuICB2YXIgY3JlYXRlVGFyZ2V0ID0gX2NyZWF0ZVRhcmdldEZhY3RvcnkyWydkZWZhdWx0J10oc3BlYyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGNvbGxlY3QgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBcImNvbGxlY3RcIiBwcm92aWRlZCBhcyB0aGUgdGhpcmQgYXJndW1lbnQgdG8gRHJvcFRhcmdldCB0byBiZSAnICsgJ2EgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IG9mIHByb3BzIHRvIGluamVjdC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgY29sbGVjdCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzUGxhaW5PYmplY3QyWydkZWZhdWx0J10ob3B0aW9ucyksICdFeHBlY3RlZCBcIm9wdGlvbnNcIiBwcm92aWRlZCBhcyB0aGUgZm91cnRoIGFyZ3VtZW50IHRvIERyb3BUYXJnZXQgdG8gYmUgJyArICdhIHBsYWluIG9iamVjdCB3aGVuIHNwZWNpZmllZC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgY29sbGVjdCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRlVGFyZ2V0KERlY29yYXRlZENvbXBvbmVudCkge1xuICAgIHJldHVybiBfZGVjb3JhdGVIYW5kbGVyMlsnZGVmYXVsdCddKHtcbiAgICAgIGNvbm5lY3RCYWNrZW5kOiBmdW5jdGlvbiBjb25uZWN0QmFja2VuZChiYWNrZW5kLCB0YXJnZXRJZCkge1xuICAgICAgICByZXR1cm4gYmFja2VuZC5jb25uZWN0RHJvcFRhcmdldCh0YXJnZXRJZCk7XG4gICAgICB9LFxuICAgICAgY29udGFpbmVyRGlzcGxheU5hbWU6ICdEcm9wVGFyZ2V0JyxcbiAgICAgIGNyZWF0ZUhhbmRsZXI6IGNyZWF0ZVRhcmdldCxcbiAgICAgIHJlZ2lzdGVySGFuZGxlcjogX3JlZ2lzdGVyVGFyZ2V0MlsnZGVmYXVsdCddLFxuICAgICAgY3JlYXRlTW9uaXRvcjogX2NyZWF0ZVRhcmdldE1vbml0b3IyWydkZWZhdWx0J10sXG4gICAgICBjcmVhdGVDb25uZWN0b3I6IF9jcmVhdGVUYXJnZXRDb25uZWN0b3IyWydkZWZhdWx0J10sXG4gICAgICBEZWNvcmF0ZWRDb21wb25lbnQ6IERlY29yYXRlZENvbXBvbmVudCxcbiAgICAgIGdldFR5cGU6IGdldFR5cGUsXG4gICAgICBjb2xsZWN0OiBjb2xsZWN0LFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL0Ryb3BUYXJnZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSByZWdpc3RlclRhcmdldDtcblxuZnVuY3Rpb24gcmVnaXN0ZXJUYXJnZXQodHlwZSwgdGFyZ2V0LCBtYW5hZ2VyKSB7XG4gIHZhciByZWdpc3RyeSA9IG1hbmFnZXIuZ2V0UmVnaXN0cnkoKTtcbiAgdmFyIHRhcmdldElkID0gcmVnaXN0cnkuYWRkVGFyZ2V0KHR5cGUsIHRhcmdldCk7XG5cbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRhcmdldCgpIHtcbiAgICByZWdpc3RyeS5yZW1vdmVUYXJnZXQodGFyZ2V0SWQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVySWQ6IHRhcmdldElkLFxuICAgIHVucmVnaXN0ZXI6IHVucmVnaXN0ZXJUYXJnZXRcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3JlZ2lzdGVyVGFyZ2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVUYXJnZXRGYWN0b3J5O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNQbGFpbk9iamVjdCk7XG5cbnZhciBBTExPV0VEX1NQRUNfTUVUSE9EUyA9IFsnY2FuRHJvcCcsICdob3ZlcicsICdkcm9wJ107XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhcmdldEZhY3Rvcnkoc3BlYykge1xuICBPYmplY3Qua2V5cyhzcGVjKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKEFMTE9XRURfU1BFQ19NRVRIT0RTLmluZGV4T2Yoa2V5KSA+IC0xLCAnRXhwZWN0ZWQgdGhlIGRyb3AgdGFyZ2V0IHNwZWNpZmljYXRpb24gdG8gb25seSBoYXZlICcgKyAnc29tZSBvZiB0aGUgZm9sbG93aW5nIGtleXM6ICVzLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgYSBzcGVjaWZpY2F0aW9uIHdpdGggYW4gdW5leHBlY3RlZCBcIiVzXCIga2V5LiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBBTExPV0VEX1NQRUNfTUVUSE9EUy5qb2luKCcsICcpLCBrZXkpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHNwZWNba2V5XSA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkICVzIGluIHRoZSBkcm9wIHRhcmdldCBzcGVjaWZpY2F0aW9uIHRvIGJlIGEgZnVuY3Rpb24uICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCAlczogJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIGtleSwga2V5LCBzcGVjW2tleV0pO1xuICB9KTtcblxuICB2YXIgVGFyZ2V0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUYXJnZXQobW9uaXRvcikge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhcmdldCk7XG5cbiAgICAgIHRoaXMubW9uaXRvciA9IG1vbml0b3I7XG4gICAgICB0aGlzLnByb3BzID0gbnVsbDtcbiAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBUYXJnZXQucHJvdG90eXBlLnJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIHJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIH07XG5cbiAgICBUYXJnZXQucHJvdG90eXBlLnJlY2VpdmVNb25pdG9yID0gZnVuY3Rpb24gcmVjZWl2ZU1vbml0b3IobW9uaXRvcikge1xuICAgICAgdGhpcy5tb25pdG9yID0gbW9uaXRvcjtcbiAgICB9O1xuXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5yZWNlaXZlQ29tcG9uZW50ID0gZnVuY3Rpb24gcmVjZWl2ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICBUYXJnZXQucHJvdG90eXBlLmNhbkRyb3AgPSBmdW5jdGlvbiBjYW5Ecm9wKCkge1xuICAgICAgaWYgKCFzcGVjLmNhbkRyb3ApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzcGVjLmNhbkRyb3AodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yKTtcbiAgICB9O1xuXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5ob3ZlciA9IGZ1bmN0aW9uIGhvdmVyKCkge1xuICAgICAgaWYgKCFzcGVjLmhvdmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3BlYy5ob3Zlcih0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IsIHRoaXMuY29tcG9uZW50KTtcbiAgICB9O1xuXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5kcm9wID0gZnVuY3Rpb24gZHJvcCgpIHtcbiAgICAgIGlmICghc3BlYy5kcm9wKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGRyb3BSZXN1bHQgPSBzcGVjLmRyb3AodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yLCB0aGlzLmNvbXBvbmVudCk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBkcm9wUmVzdWx0ID09PSAndW5kZWZpbmVkJyB8fCBfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShkcm9wUmVzdWx0KSwgJ2Ryb3AoKSBtdXN0IGVpdGhlciByZXR1cm4gdW5kZWZpbmVkLCBvciBhbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBkcm9wIHJlc3VsdC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBkcm9wUmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkcm9wUmVzdWx0O1xuICAgIH07XG5cbiAgICByZXR1cm4gVGFyZ2V0O1xuICB9KSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVUYXJnZXQobW9uaXRvcikge1xuICAgIHJldHVybiBuZXcgVGFyZ2V0KG1vbml0b3IpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldEZhY3RvcnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVRhcmdldE1vbml0b3I7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBpc0NhbGxpbmdDYW5Ecm9wID0gZmFsc2U7XG5cbnZhciBUYXJnZXRNb25pdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGFyZ2V0TW9uaXRvcihtYW5hZ2VyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhcmdldE1vbml0b3IpO1xuXG4gICAgdGhpcy5pbnRlcm5hbE1vbml0b3IgPSBtYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgfVxuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLnJlY2VpdmVIYW5kbGVySWQgPSBmdW5jdGlvbiByZWNlaXZlSGFuZGxlcklkKHRhcmdldElkKSB7XG4gICAgdGhpcy50YXJnZXRJZCA9IHRhcmdldElkO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmNhbkRyb3AgPSBmdW5jdGlvbiBjYW5Ecm9wKCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oIWlzQ2FsbGluZ0NhbkRyb3AsICdZb3UgbWF5IG5vdCBjYWxsIG1vbml0b3IuY2FuRHJvcCgpIGluc2lkZSB5b3VyIGNhbkRyb3AoKSBpbXBsZW1lbnRhdGlvbi4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC1tb25pdG9yLmh0bWwnKTtcblxuICAgIHRyeSB7XG4gICAgICBpc0NhbGxpbmdDYW5Ecm9wID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5jYW5Ecm9wT25UYXJnZXQodGhpcy50YXJnZXRJZCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzQ2FsbGluZ0NhbkRyb3AgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuaXNPdmVyID0gZnVuY3Rpb24gaXNPdmVyKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuaXNPdmVyVGFyZ2V0KHRoaXMudGFyZ2V0SWQsIG9wdGlvbnMpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldEl0ZW1UeXBlID0gZnVuY3Rpb24gZ2V0SXRlbVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEl0ZW1UeXBlKCk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uIGdldEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEl0ZW0oKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXREcm9wUmVzdWx0ID0gZnVuY3Rpb24gZ2V0RHJvcFJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmRpZERyb3AgPSBmdW5jdGlvbiBkaWREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5kaWREcm9wKCk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0SW5pdGlhbENsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldEluaXRpYWxDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEluaXRpYWxDbGllbnRPZmZzZXQoKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldFNvdXJjZUNsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0Q2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0Q2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRDbGllbnRPZmZzZXQoKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQgPSBmdW5jdGlvbiBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpO1xuICB9O1xuXG4gIHJldHVybiBUYXJnZXRNb25pdG9yO1xufSkoKTtcblxuZnVuY3Rpb24gY3JlYXRlVGFyZ2V0TW9uaXRvcihtYW5hZ2VyKSB7XG4gIHJldHVybiBuZXcgVGFyZ2V0TW9uaXRvcihtYW5hZ2VyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9jcmVhdGVUYXJnZXRNb25pdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVUYXJnZXRDb25uZWN0b3I7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93cmFwQ29ubmVjdG9ySG9va3MgPSByZXF1aXJlKCcuL3dyYXBDb25uZWN0b3JIb29rcycpO1xuXG52YXIgX3dyYXBDb25uZWN0b3JIb29rczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cmFwQ29ubmVjdG9ySG9va3MpO1xuXG52YXIgX2FyZU9wdGlvbnNFcXVhbCA9IHJlcXVpcmUoJy4vYXJlT3B0aW9uc0VxdWFsJyk7XG5cbnZhciBfYXJlT3B0aW9uc0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyZU9wdGlvbnNFcXVhbCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhcmdldENvbm5lY3RvcihiYWNrZW5kKSB7XG4gIHZhciBjdXJyZW50SGFuZGxlcklkID0gdW5kZWZpbmVkO1xuXG4gIHZhciBjdXJyZW50RHJvcFRhcmdldE5vZGUgPSB1bmRlZmluZWQ7XG4gIHZhciBjdXJyZW50RHJvcFRhcmdldE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHZhciBkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQgPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gcmVjb25uZWN0RHJvcFRhcmdldCgpIHtcbiAgICBpZiAoZGlzY29ubmVjdEN1cnJlbnREcm9wVGFyZ2V0KSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQoKTtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRIYW5kbGVySWQgJiYgY3VycmVudERyb3BUYXJnZXROb2RlKSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQgPSBiYWNrZW5kLmNvbm5lY3REcm9wVGFyZ2V0KGN1cnJlbnRIYW5kbGVySWQsIGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSwgY3VycmVudERyb3BUYXJnZXRPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlSGFuZGxlcklkKGhhbmRsZXJJZCkge1xuICAgIGlmIChoYW5kbGVySWQgPT09IGN1cnJlbnRIYW5kbGVySWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50SGFuZGxlcklkID0gaGFuZGxlcklkO1xuICAgIHJlY29ubmVjdERyb3BUYXJnZXQoKTtcbiAgfVxuXG4gIHZhciBob29rcyA9IF93cmFwQ29ubmVjdG9ySG9va3MyWydkZWZhdWx0J10oe1xuICAgIGRyb3BUYXJnZXQ6IGZ1bmN0aW9uIGNvbm5lY3REcm9wVGFyZ2V0KG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChub2RlID09PSBjdXJyZW50RHJvcFRhcmdldE5vZGUgJiYgX2FyZU9wdGlvbnNFcXVhbDJbJ2RlZmF1bHQnXShvcHRpb25zLCBjdXJyZW50RHJvcFRhcmdldE9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY3VycmVudERyb3BUYXJnZXROb2RlID0gbm9kZTtcbiAgICAgIGN1cnJlbnREcm9wVGFyZ2V0T3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIHJlY29ubmVjdERyb3BUYXJnZXQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcmVjZWl2ZUhhbmRsZXJJZDogcmVjZWl2ZUhhbmRsZXJJZCxcbiAgICBob29rczogaG9va3NcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9jcmVhdGVUYXJnZXRDb25uZWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRCYXNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fT5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5wcm9wcy5kcmFnZ2luZ0Rpc3BsYXkpe1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInRsRHJhZ2dpbmdEaXNwbGF5XCIgc3R5bGU9e3t0b3A6IHRoaXMucHJvcHMuZHJhZ2dpbmdEaXNwbGF5VG9wfX0+e3RoaXMucHJvcHMuZHJhZ2dpbmdEaXNwbGF5fTwvZGl2Pik7XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsRXZlbnREaXNwbGF5XCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuZGlzcGxheS5tYXAocm93ID0+IHtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3RsRXZlbnREaXNwbGF5Um93Jywgcm93LmtleSl9IGtleT17cm93LmtleX0+e3Jvdy52YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICZuYnNwO1xuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9FdmVudEJhc2UuanN4XG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRBY3Rpb25zXG57XG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudCl7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cblxuICByZXNpemUoKXtcbiAgICB0aGlzLmNvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICByZXNpemFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGZsb2F0KCl7XG4gICAgdGhpcy5jb21wb25lbnQuc2V0U3RhdGUoe1xuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgZHJhZ2dpbmdEaXNwbGF5OiB0aGlzLmNvbXBvbmVudC50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXNwbGF5VGltZSgpXG4gICAgfSk7XG4gIH1cblxuICBpc0ZpeGVkKCl7XG4gICAgcmV0dXJuICF0aGlzLmNvbXBvbmVudC5zdGF0ZS5kcmFnZ2FibGUgJiYgIXRoaXMuY29tcG9uZW50LnN0YXRlLnJlc2l6YWJsZTtcbiAgfVxuXG4gIGlzRml4YWJsZSgpe1xuICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMuY29tcG9uZW50Lm5leHRQb3NpdGlvbjtcbiAgICBpZighbmV3UG9zaXRpb24pe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LmlzRnJlZVBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgfVxuXG4gIGlzQ2FuY2VsYWJsZSgpe1xuICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMuY29tcG9uZW50LnByZXZQb3NpdGlvbjtcbiAgICBpZighbmV3UG9zaXRpb24pe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LmlzRnJlZVBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgfVxuXG4gIGNhbmNlbCgpe1xuICAgIGlmKHRoaXMuY29tcG9uZW50LmRyYWdnaW5nUG9zaXRpb24pe1xuICAgICAgY29uc3QgbGVmdCA9IHRoaXMuY29tcG9uZW50LnByb3BzLnRpbWVsaW5lLmdldExpbmVMZWZ0KHRoaXMuY29tcG9uZW50LmxpbmVJZCk7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5jb21wb25lbnQudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgICAgdGhpcy5jb21wb25lbnQuZHJhZ2dpbmdQb3NpdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmNvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJycsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBsZWZ0OiBsZWZ0XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYodGhpcy5jb21wb25lbnQucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5jb21wb25lbnQudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jb21wb25lbnQucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodCh0aGlzLmNvbXBvbmVudC50aW1lU3Bhbik7XG4gICAgICB0aGlzLmNvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuID0gbnVsbDtcbiAgICAgIHRoaXMuY29tcG9uZW50LnNldFN0YXRlKHtcbiAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJyxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wb25lbnQuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICB9XG5cbiAgcmVtb3ZlKCl7XG4gICAgdGhpcy5jb21wb25lbnQucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQucmVtb3ZlRXZlbnQodGhpcy5jb21wb25lbnQpO1xuICB9XG5cbiAgZml4KCl7XG4gICAgaWYodGhpcy5jb21wb25lbnQuZHJhZ2dpbmdQb3NpdGlvbil7XG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgdG9wOiB0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5jb21wb25lbnQuZHJhZ2dpbmdQb3NpdGlvbi50aW1lKSxcbiAgICAgICAgbGVmdDogdGhpcy5jb21wb25lbnQucHJvcHMudGltZWxpbmUuZ2V0TGluZUxlZnQodGhpcy5jb21wb25lbnQuZHJhZ2dpbmdQb3NpdGlvbi5saW5lSWQpLFxuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3VGltZVNwYW4gPSB0aGlzLmNvbXBvbmVudC50aW1lU3Bhbi5zaGlmdFN0YXJ0VGltZSh0aGlzLmNvbXBvbmVudC5kcmFnZ2luZ1Bvc2l0aW9uLnRpbWUpO1xuICAgICAgaWYodGhpcy5jb21wb25lbnQucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnRXaWxsRml4KXtcbiAgICAgICAgdGhpcy5jb21wb25lbnQucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnRXaWxsRml4KHtcbiAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50LFxuICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICBsaW5lSWQ6IHRoaXMuY29tcG9uZW50LmRyYWdnaW5nUG9zaXRpb24ubGluZUlkLFxuICAgICAgICAgIHRpbWVTcGFuOiBuZXdUaW1lU3BhblxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhpcy5jb21wb25lbnQuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgdGhpcy5jb21wb25lbnQubGluZUlkID0gdGhpcy5jb21wb25lbnQuZHJhZ2dpbmdQb3NpdGlvbi5saW5lSWQ7XG4gICAgICB0aGlzLmNvbXBvbmVudC50aW1lU3BhbiA9IG5ld1RpbWVTcGFuO1xuICAgICAgdGhpcy5jb21wb25lbnQuZHJhZ2dpbmdQb3NpdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIGlmKHRoaXMuY29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4pe1xuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJydcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuY29tcG9uZW50LnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50V2lsbEZpeCl7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50V2lsbEZpeCh7XG4gICAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudCxcbiAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgbGluZUlkOiB0aGlzLmNvbXBvbmVudC5saW5lSWQsXG4gICAgICAgICAgdGltZVNwYW46IHRoaXMuY29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuY29tcG9uZW50LnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIHRoaXMuY29tcG9uZW50LnRpbWVTcGFuID0gdGhpcy5jb21wb25lbnQucmVzaXppbmdUaW1lU3BhbjtcbiAgICAgIHRoaXMuY29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4gPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50LnByb3BzLnRpbWVsaW5lLmNsZWFyRHJhZ2dpbmdPdmVyKCk7XG4gICAgaWYodGhpcy5jb21wb25lbnQucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnREaWRGaXgpe1xuICAgICAgdGhpcy5jb21wb25lbnQucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnREaWRGaXgoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3Nlcy9FdmVudEFjdGlvbnMuZXM2XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgRG5kQmFja2VuZCBmcm9tICdyZWFjdC1kbmQtdG91Y2gtYmFja2VuZCc7XG5pbXBvcnQgRXZlbnRQcmV2aWV3IGZyb20gJy4vRXZlbnRQcmV2aWV3JztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBMaW5lTGFiZWwgZnJvbSAnLi9MaW5lTGFiZWwnO1xuaW1wb3J0IHsgRHJvcFRhcmdldCB9IGZyb20gJ3JlYWN0LWRuZCc7XG5cblxuY29uc3QgdGFyZ2V0ID0ge1xuICBkcm9wKHByb3BzLCBtb25pdG9yLCBjb21wb25lbnQpIHtcbiAgICBjb25zdCBpdGVtID0gbW9uaXRvci5nZXRJdGVtKCk7XG4gICAgY29uc3QgZXZlbnRDb21wb25lbnQgPSBpdGVtLnRpbWVsaW5lLmZpbmRFdmVudEJ5SWQoaXRlbS5pZCk7XG4gICAgY29uc3QgZGVsdGEgPSBtb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpO1xuICAgIGNvbnN0IHRvcCA9IE1hdGgucm91bmQoZXZlbnRDb21wb25lbnQuc3RhdGUudG9wICsgZGVsdGEueSk7XG4gICAgY29uc3QgbGVmdCA9IE1hdGgucm91bmQoZXZlbnRDb21wb25lbnQuc3RhdGUubGVmdCArIGRlbHRhLngpO1xuXG4gICAgZXZlbnRDb21wb25lbnQubW92ZVRvKHRvcCwgbGVmdCk7XG4gIH0sXG4gIGhvdmVyKHByb3BzLCBtb25pdG9yLCBjb21wb25lbnQpe1xuICAgIGNvbnN0IGNsaWVudE9mZnNldCA9IG1vbml0b3IuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gICAgaWYoY2xpZW50T2Zmc2V0KXtcbiAgICAgIGNvbnN0IGV2ZW50Q29tcG9uZW50ID0gcHJvcHMudGltZWxpbmUuZmluZEV2ZW50QnlJZChtb25pdG9yLmdldEl0ZW0oKS5pZCk7XG4gICAgICBjb25zdCBsaW5lV3JhcHBlckJvdW5kcyA9IHByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LnJlZnMubGluZXNXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgbGluZUNvbXBvbmVudCA9IHByb3BzLnRpbWVsaW5lLmRyYWdnaW5nT3ZlcihjbGllbnRPZmZzZXQueCAtIGxpbmVXcmFwcGVyQm91bmRzLmxlZnQgKyAoZXZlbnRDb21wb25lbnQucHJvcHMud2lkdGggLyAyLypldmVudOOBruecn+OCk+S4reOCkuWfuua6luOBq+OBmeOCiyovKSk7XG4gICAgICBjb25zdCB0aW1lID0gcHJvcHMudGltZWxpbmUudG9wVG9UaW1lKGNsaWVudE9mZnNldC55ICsgcHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQucmVmcy5saW5lc1dyYXBwZXIuc2Nyb2xsVG9wIC0gbGluZVdyYXBwZXJCb3VuZHMudG9wKTtcbiAgICAgIGV2ZW50Q29tcG9uZW50LmRyYWdnaW5nKHRpbWUsIGxpbmVDb21wb25lbnQucHJvcHMubGluZUlkKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNvbGxlY3QoY29ubmVjdCwgbW9uaXRvcikge1xuICByZXR1cm4ge1xuICAgIGNvbm5lY3REcm9wVGFyZ2V0OiBjb25uZWN0LmRyb3BUYXJnZXQoKVxuICB9O1xufVxuXG5jbGFzcyBGcmFtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQgPSB0aGlzO1xuXG4gICAgY29uc3QgcnVsZXJJbnRlcnZhbCA9IDQ7XG5cbiAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuICAgIHRoaXMucHJvcHMubGluZURhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlTGluZUNvbXBvbmVudChkYXRhLCBsaW5lcywgbGFiZWxzKTtcbiAgICB9KVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpbmVzOiBsaW5lcyxcbiAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHRcbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6aW5nRXZlbnQgPSBudWxsO1xuICB9XG5cbiAgcmVzaXplVXAoZXZlbnRDb21wb25lbnQsIGNsaWNrZWRUb3Ape1xuICAgIGNvbnN0IGluaXRpYWxIZWlnaHQgPSBldmVudENvbXBvbmVudC5zdGF0ZS5oZWlnaHQ7XG4gICAgY29uc3QgcHJldkJvdHRvbSA9IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0UHJldkJvdHRvbShldmVudENvbXBvbmVudCk7XG4gICAgY29uc3QgbW91c2VNb3ZlRXZlbnQgPSAobW92ZUV2ZW50KSA9PiB7XG4gICAgICBldmVudENvbXBvbmVudC5yZXNpemluZyA9IHRydWU7XG4gICAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgY2xpY2tlZFRvcCAtIG1vdmVFdmVudC5jbGllbnRZO1xuICAgICAgaWYodGFyZ2V0SGVpZ2h0ID4gMzYpe1xuICAgICAgICBsZXQgdGFyZ2V0VG9wID0gZXZlbnRDb21wb25lbnQuc3RhdGUudG9wIC0gKHRhcmdldEhlaWdodCAtIGV2ZW50Q29tcG9uZW50LnN0YXRlLmhlaWdodCk7XG4gICAgICAgIGlmKHRhcmdldFRvcCA8PSBwcmV2Qm90dG9tKXtcbiAgICAgICAgICB0YXJnZXRUb3AgPSBwcmV2Qm90dG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3BhbiA9IG5ldyBUaW1lU3Bhbih0aGlzLnByb3BzLnRpbWVsaW5lLnRvcFRvVGltZSh0YXJnZXRUb3ApLCBldmVudENvbXBvbmVudC5jdXJyZW50VGltZVNwYW4uZ2V0RW5kVGltZSgpKTtcbiAgICAgICAgZXZlbnRDb21wb25lbnQuc2V0U3RhdGUoe1xuICAgICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4pLFxuICAgICAgICAgIHRvcDogdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AoZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSksXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiBldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmdldERpc3BsYXlUaW1lKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHN0b3BNb3ZlRXZlbnQgPSAobW91c2VFdmVudCkgPT4ge1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudCk7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wTW92ZUV2ZW50KTtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHN0b3BNb3ZlRXZlbnQpO1xuICAgICAgZXZlbnRDb21wb25lbnQuZW5kUmVzaXppbmcobW91c2VFdmVudCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlRXZlbnQpO1xuICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BNb3ZlRXZlbnQpO1xuICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHN0b3BNb3ZlRXZlbnQpO1xuICB9XG5cbiAgcmVzaXplRG93bihldmVudENvbXBvbmVudCwgY2xpY2tlZFRvcCl7XG4gICAgY29uc3QgaW5pdGlhbEhlaWdodCA9IGV2ZW50Q29tcG9uZW50LnN0YXRlLmhlaWdodDtcbiAgICBjb25zdCBuZXh0VG9wID0gdGhpcy5wcm9wcy50aW1lbGluZS5nZXROZXh0VG9wKGV2ZW50Q29tcG9uZW50KTtcbiAgICBjb25zdCBtb3VzZU1vdmVFdmVudCA9IChtb3ZlRXZlbnQpID0+IHtcbiAgICAgIGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBtb3ZlRXZlbnQuY2xpZW50WSAtIGNsaWNrZWRUb3A7XG4gICAgICBpZih0YXJnZXRIZWlnaHQgPiAzNil7XG4gICAgICAgIGxldCB0YXJnZXRCb3R0b20gPSBldmVudENvbXBvbmVudC5zdGF0ZS50b3AgKyB0YXJnZXRIZWlnaHQ7XG4gICAgICAgIGlmKHRhcmdldEJvdHRvbSA+PSBuZXh0VG9wKXtcbiAgICAgICAgICB0YXJnZXRCb3R0b20gPSBuZXh0VG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3BhbiA9IG5ldyBUaW1lU3BhbihldmVudENvbXBvbmVudC5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCksIHRoaXMucHJvcHMudGltZWxpbmUudG9wVG9UaW1lKHRhcmdldEJvdHRvbSkpO1xuICAgICAgICBldmVudENvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQoZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3BhbiksXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiBldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuLmdldEVuZFRpbWUoKS5nZXREaXNwbGF5VGltZSgpLFxuICAgICAgICAgIGRyYWdnaW5nRGlzcGxheVRvcDogdGFyZ2V0SGVpZ2h0IC0gMTBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHN0b3BNb3ZlRXZlbnQgPSAobW91c2VFdmVudCkgPT4ge1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudCk7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wTW92ZUV2ZW50KTtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHN0b3BNb3ZlRXZlbnQpO1xuICAgICAgZXZlbnRDb21wb25lbnQuZW5kUmVzaXppbmcobW91c2VFdmVudCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlRXZlbnQpO1xuICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BNb3ZlRXZlbnQpO1xuICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHN0b3BNb3ZlRXZlbnQpO1xuICB9XG5cbiAgY3JlYXRlTGluZUNvbXBvbmVudChkYXRhLCBsaW5lcywgbGFiZWxzKXtcbiAgICBjb25zdCBoYXNSdWxlciA9IGxpbmVzLmxlbmd0aCAlIHRoaXMucHJvcHMucnVsZXJJbnRlcnZhbCA9PT0gMDtcbiAgICBjb25zdCBwcmV2UnVsZXIgPSAobGluZXMubGVuZ3RoICsgMSkgJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG5cbiAgICBsYWJlbHMucHVzaChcbiAgICAgIDxMaW5lTGFiZWxcbiAgICAgICAga2V5PXtkYXRhLmlkfVxuICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy5saW5lV2lkdGh9XG4gICAgICAgIGhhc1J1bGVyPXtoYXNSdWxlcn1cbiAgICAgICAgcHJldlJ1bGVyPXtwcmV2UnVsZXJ9XG4gICAgICAgIGxhYmVsPXtkYXRhLmxhYmVsfVxuICAgICAgICB0aW1lbGluZT17dGhpcy5wcm9wcy50aW1lbGluZX1cbiAgICAgIC8+XG4gICAgKTtcblxuICAgIGxpbmVzLnB1c2goXG4gICAgICA8TGluZVxuICAgICAgICBoYXNSdWxlcj17aGFzUnVsZXJ9XG4gICAgICAgIGxhYmVsPXtkYXRhLmx9XG4gICAgICAgIGtleT17ZGF0YS5pZH1cbiAgICAgICAgbGluZUlkPXtkYXRhLmlkfVxuICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy5saW5lV2lkdGh9XG4gICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICBldmVuPXtsaW5lcy5sZW5ndGggJSAyID09PSAwfVxuICAgICAgICB0aW1lbGluZT17dGhpcy5wcm9wcy50aW1lbGluZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50KGV2ZW50Q29tcG9uZW50KXtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUuZXZlbnRzO1xuICAgIHZhciBldmVudHMgPSBbXTtcbiAgICBjdXJyZW50LmZvckVhY2goZXYgPT4ge1xuICAgICAgaWYoZXYuaWQgIT0gZXZlbnRDb21wb25lbnQucHJvcHMuaWQpe1xuICAgICAgICBldmVudHMucHVzaChldik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXZlbnRzOiBldmVudHN9KTtcbiAgfVxuXG4gIGFkZEV2ZW50cyhldmVudHMpe1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5ldmVudHM7XG4gICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgaWYoIWV2ZW50LmlkKXtcbiAgICAgICAgZXZlbnQuaWQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmNyZWF0ZUV2ZW50SWQoKTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQucHVzaChldmVudClcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudHM6IGN1cnJlbnR9KTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2hlaWdodDogaGVpZ2h0fSk7XG4gIH1cblxuICBnZXRSZWxhdGl2ZVBvcyhlKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBlLmNsaWVudFkgLSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0VG9wICsgZS5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCxcbiAgICAgIGxlZnQ6IGUuY2xpZW50WCAtIGUuY3VycmVudFRhcmdldC5vZmZzZXRMZWZ0ICsgZS5jdXJyZW50VGFyZ2V0LnNjcm9sbExlZnRcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBjb25uZWN0RHJvcFRhcmdldCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gY29ubmVjdERyb3BUYXJnZXQoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsRnJhbWVWaWV3XCIgc3R5bGU9e3ttaW5XaWR0aDogdGhpcy5wcm9wcy50aW1lbGluZS5nZXRUb3RhbFdpZHRoKCkgKyAncHgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxMYWJlbFZpZXdcIiBzdHlsZT17e2hlaWdodDogTGluZUxhYmVsLmhlaWdodH19Pnt0aGlzLnN0YXRlLmxhYmVsc308L2Rpdj5cbiAgICAgICAgPGRpdiByZWY9XCJsaW5lc1dyYXBwZXJcIiBjbGFzc05hbWU9XCJ0bExpbmVzV3JhcHBlclwiIHN0eWxlPXt7aGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCAtIExpbmVMYWJlbC5oZWlnaHR9fT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5saW5lc31cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5ldmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxFdmVudFxuICAgICAgICAgICAgICAgIGtleT17ZXZlbnQuaWR9XG4gICAgICAgICAgICAgICAgaWQ9e2V2ZW50LmlkfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtldmVudC5jb2xvcn1cbiAgICAgICAgICAgICAgICB0aW1lU3Bhbj17ZXZlbnQudGltZVNwYW59XG4gICAgICAgICAgICAgICAgZGlzcGxheT17ZXZlbnQuZGlzcGxheX1cbiAgICAgICAgICAgICAgICBsaW5lSWQ9e2V2ZW50LmxpbmVJZH1cbiAgICAgICAgICAgICAgICB0aW1lbGluZT17dGhpcy5wcm9wcy50aW1lbGluZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5saW5lV2lkdGggLSAyIC0gKExpbmUuc2lkZVBhZGRpbmcgKiAyKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxFdmVudFByZXZpZXcgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRnJhbWUucHJvcFR5cGVzID0ge1xuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4gIGxpbmVEYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KSkuaXNSZXF1aXJlZCxcbiAgbGluZVdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgdGltZWxpbmU6IFJlYWN0LlByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgcnVsZXJJbnRlcnZhbDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnRHJvcENvbnRleHQoRG5kQmFja2VuZCh7IGVuYWJsZU1vdXNlRXZlbnRzOiB0cnVlIH0pKShEcm9wVGFyZ2V0KFwiRXZlbnRcIiwgdGFyZ2V0LCBjb2xsZWN0KShGcmFtZSkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9GcmFtZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IEhvdXIgZnJvbSAnLi9Ib3VyJztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBMaW5lTGFiZWwgZnJvbSAnLi9MaW5lTGFiZWwnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5hZGRMaW5lQ29tcG9uZW50KHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdXJzOiBbXSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBkcmFnZ2luZ092ZXI6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMucHJvcHMudGltZVNwYW4uZWFjaFRpbWUoKGtleSwgdGltZSkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5ob3Vycy5wdXNoKFxuICAgICAgICA8SG91clxuICAgICAgICAgIGtleT17dGltZS5nZXRIb3VyKCl9XG4gICAgICAgICAgdGltZT17dGltZX1cbiAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFJlbGF0aXZlVG9wKGUpe1xuICAgIHJldHVybiBlLmNsaWVudFkgLSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5vZmZzZXRUb3AgKyBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5zY3JvbGxUb3A7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMubGluZURpZENsaWNrKXtcbiAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRvcFRvVGltZSh0aGlzLmdldFJlbGF0aXZlVG9wKGUpKTtcbiAgICAgIHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMubGluZURpZENsaWNrKHtcbiAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgdGltZTogdGltZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Db250ZXh0TWVudShlKXtcbiAgICBpZih0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmxpbmVEaWRSaWdodENsaWNrKXtcbiAgICAgIHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMubGluZURpZFJpZ2h0Q2xpY2soe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGV2ZW50OiBlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmFnZ2luZ092ZXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZ092ZXI6IHRydWV9KTtcbiAgfVxuXG4gIGNsZWFyRHJhZ2dpbmdPdmVyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmdPdmVyOiBmYWxzZX0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9IG9uQ29udGV4dE1lbnU9e2UgPT4gdGhpcy5vbkNvbnRleHRNZW51KGUpfT5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5wcm9wcy5oYXNSdWxlcil7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UnVsZXJcbiAgICAgICAgICAgICAgICBrZXk9eydydWxlcl8nICsgdGhpcy5wcm9wcy5saW5lSWR9XG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0PXt0aGlzLnByb3BzLm1pbkhlaWdodH1cbiAgICAgICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5wcm9wcy50aW1lU3Bhbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0bExpbmVWaWV3Jywge3RsRXZlbjogdGhpcy5wcm9wcy5ldmVuLCB0bE9kZDogIXRoaXMucHJvcHMuZXZlbn0sIHt0bE92ZXI6IHRoaXMuc3RhdGUuZHJhZ2dpbmdPdmVyfSl9IHN0eWxlPXt7d2lkdGg6IHRoaXMucHJvcHMud2lkdGggKyAncHgnfX0+XG4gICAgICAgICAge3RoaXMuc3RhdGUuaG91cnN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5MaW5lLnNpZGVQYWRkaW5nID0gMTtcblxuTGluZS5wcm9wVHlwZXMgPSB7XG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4gIGxpbmVJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgZXZlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgLy9UT0RPIOW+queSsOWPgueFp+OBq+OBquOCi+OBruOBp2ltcG9ydOOBp+OBjeOBmuOAguOBqOOCiuOBguOBiOOBmmFueeOBp+OBlOOBvuOBi+OBl+OBpuOBvuOBmeOAglxuICB0aW1lbGluZTogUmVhY3QuUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBoYXNSdWxlcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9MaW5lLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZSBmcm9tICcuLi9jbGFzc2VzL1RpbWUnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91ciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtaW51dGVzOiBbXVxuICAgIH1cblxuICAgIGNvbnN0IG1pblN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLm1pbkhlaWdodCArICdweCdcbiAgICB9XG4gICAgVGltZS5lYWNoTWluKChrZXksIG1pbikgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5taW51dGVzLnB1c2goXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e21pbn1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3RsTWluVmlldycsICd0bCcgKyAobWluICsgMTUpKX1cbiAgICAgICAgICBzdHlsZT17bWluU3R5bGV9XG4gICAgICAgID4mbmJzcDs8L2Rpdj5cbiAgICAgICk7XG4gICAgfSwgMTUpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bEhvdXJWaWV3XCI+e3RoaXMuc3RhdGUubWludXRlc308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkhvdXIucHJvcFR5cGVzID0ge1xuICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGltZTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZSkuaXNSZXF1aXJlZFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9Ib3VyLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob3VyczogW11cbiAgICB9XG4gICAgdGhpcy5wcm9wcy50aW1lU3Bhbi5lYWNoVGltZSgoa2V5LCB0aW1lKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgLy9ib3JkZXIxcHjjgpLotrPjgZlcbiAgICAgICAgaGVpZ2h0OiAodGhpcy5wcm9wcy5taW5IZWlnaHQgKyAxKSAqIDRcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUuaG91cnMucHVzaChcbiAgICAgICAgPGRpdiBrZXk9e3RpbWUuZ2V0SG91cigpfSBzdHlsZT17c3R5bGV9Pnt0aW1lLmdldERpc3BsYXlIb3VyKCl9PC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSdWxlclZpZXdcIiBzdHlsZT17e3dpZHRoOiBSdWxlci53aWR0aCArICdweCd9fT57dGhpcy5zdGF0ZS5ob3Vyc308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJ1bGVyLnByb3BUeXBlcyA9IHtcbiAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZFxufVxuXG5SdWxlci53aWR0aCA9IDMwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9SdWxlci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJ1bGVyIGZyb20gJy4vUnVsZXInO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVMYWJlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNSdWxlcjogdGhpcy5wcm9wcy5oYXNSdWxlcixcbiAgICAgIHByZXZSdWxlcjogdGhpcy5wcm9wcy5wcmV2UnVsZXIsXG4gICAgICBpc0xhc3Q6IHRydWVcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICAvL+S4gOOBpOWJjeOBrmxhYmVs44Gu5Y+z6KeS44Gu5Li444G/44KS5Y+W44KLXG4gICAgY29uc3QgbGFiZWxDb21wb25lbnRzID0gdGhpcy5wcm9wcy50aW1lbGluZS5saW5lTGFiZWxDb21wb25lbnRzO1xuICAgIGlmKGxhYmVsQ29tcG9uZW50cy5sZW5ndGgpe1xuICAgICAgbGFiZWxDb21wb25lbnRzW2xhYmVsQ29tcG9uZW50cy5sZW5ndGggLSAxXS5zZXRTdGF0ZSh7aXNMYXN0OiBmYWxzZX0pO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMudGltZWxpbmUuYWRkTGluZUxhYmVsQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3t3aWR0aDogdGhpcy5wcm9wcy53aWR0aCwgbWFyZ2luTGVmdDogdGhpcy5zdGF0ZS5oYXNSdWxlciA/IFJ1bGVyLndpZHRoICsgJ3B4JyA6IDB9fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe3RsTGFiZWw6IHRydWUsIHRsSGFzUnVsZXI6IHRoaXMuc3RhdGUuaGFzUnVsZXIsIHRsUHJldlJ1bGVyOiB0aGlzLnN0YXRlLnByZXZSdWxlciwgdGxMYXN0OiB0aGlzLnN0YXRlLmlzTGFzdH0pfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGluZUxhYmVsLmhlaWdodCA9IDE2O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9MaW5lTGFiZWwuanN4XG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28gSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Ub3VjaEJhY2tlbmQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVRvdWNoQmFja2VuZDtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gZ2V0RXZlbnRDbGllbnRUb3VjaE9mZnNldChlKSB7XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGdldEV2ZW50Q2xpZW50T2Zmc2V0KGUudGFyZ2V0VG91Y2hlc1swXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRFdmVudENsaWVudE9mZnNldChlKSB7XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcykge1xuICAgICAgICByZXR1cm4gZ2V0RXZlbnRDbGllbnRUb3VjaE9mZnNldChlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgICAgICAgeTogZS5jbGllbnRZXG4gICAgICAgIH07XG4gICAgfVxufVxuXG52YXIgRUxFTUVOVF9OT0RFID0gMTtcbmZ1bmN0aW9uIGdldE5vZGVDbGllbnRPZmZzZXQobm9kZSkge1xuICAgIHZhciBlbCA9IG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSA/IG5vZGUgOiBub2RlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBfZWwkZ2V0Qm91bmRpbmdDbGllbnQgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHZhciB0b3AgPSBfZWwkZ2V0Qm91bmRpbmdDbGllbnQudG9wO1xuICAgIHZhciBsZWZ0ID0gX2VsJGdldEJvdW5kaW5nQ2xpZW50LmxlZnQ7XG5cbiAgICByZXR1cm4geyB4OiBsZWZ0LCB5OiB0b3AgfTtcbn1cblxudmFyIGV2ZW50TmFtZXMgPSB7XG4gICAgbW91c2U6IHtcbiAgICAgICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgICAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICAgICAgZW5kOiAnbW91c2V1cCdcbiAgICB9LFxuICAgIHRvdWNoOiB7XG4gICAgICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgICAgICBlbmQ6ICd0b3VjaGVuZCdcbiAgICB9XG59O1xuXG52YXIgVG91Y2hCYWNrZW5kID0gZXhwb3J0cy5Ub3VjaEJhY2tlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG91Y2hCYWNrZW5kKG1hbmFnZXIpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG91Y2hCYWNrZW5kKTtcblxuICAgICAgICBvcHRpb25zLmRlbGF5VG91Y2hTdGFydCA9IG9wdGlvbnMuZGVsYXlUb3VjaFN0YXJ0IHx8IG9wdGlvbnMuZGVsYXk7XG5cbiAgICAgICAgb3B0aW9ucyA9IF9leHRlbmRzKHtcbiAgICAgICAgICAgIGVuYWJsZVRvdWNoRXZlbnRzOiB0cnVlLFxuICAgICAgICAgICAgZW5hYmxlTW91c2VFdmVudHM6IGZhbHNlLFxuICAgICAgICAgICAgZGVsYXlUb3VjaFN0YXJ0OiAwLFxuICAgICAgICAgICAgZGVsYXlNb3VzZVN0YXJ0OiAwXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IG1hbmFnZXIuZ2V0QWN0aW9ucygpO1xuICAgICAgICB0aGlzLm1vbml0b3IgPSBtYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgICAgICAgdGhpcy5yZWdpc3RyeSA9IG1hbmFnZXIuZ2V0UmVnaXN0cnkoKTtcblxuICAgICAgICB0aGlzLmRlbGF5VG91Y2hTdGFydCA9IG9wdGlvbnMuZGVsYXlUb3VjaFN0YXJ0O1xuICAgICAgICB0aGlzLmRlbGF5TW91c2VTdGFydCA9IG9wdGlvbnMuZGVsYXlNb3VzZVN0YXJ0O1xuICAgICAgICB0aGlzLnNvdXJjZU5vZGVzID0ge307XG4gICAgICAgIHRoaXMuc291cmNlTm9kZU9wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5zb3VyY2VQcmV2aWV3Tm9kZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zb3VyY2VQcmV2aWV3Tm9kZU9wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy50YXJnZXROb2RlcyA9IHt9O1xuICAgICAgICB0aGlzLnRhcmdldE5vZGVPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXJUeXBlcyA9IFtdO1xuICAgICAgICB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCA9IHt9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmVuYWJsZU1vdXNlRXZlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMucHVzaCgnbW91c2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmVuYWJsZVRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMucHVzaCgndG91Y2gnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gdGhpcy5nZXRTb3VyY2VDbGllbnRPZmZzZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQgPSB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydERlbGF5ID0gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnREZWxheS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUgPSB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlQ2FwdHVyZSA9IHRoaXMuaGFuZGxlVG9wTW92ZUNhcHR1cmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSA9IHRoaXMuaGFuZGxlVG9wTW92ZUVuZENhcHR1cmUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVG91Y2hCYWNrZW5kLCBbe1xuICAgICAgICBrZXk6ICdzZXR1cCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCF0aGlzLmNvbnN0cnVjdG9yLmlzU2V0VXAsICdDYW5ub3QgaGF2ZSB0d28gVG91Y2ggYmFja2VuZHMgYXQgdGhlIHNhbWUgdGltZS4nKTtcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuaXNTZXRVcCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdzdGFydCcsIHRoaXMuZ2V0VG9wTW92ZVN0YXJ0SGFuZGxlcigpKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdzdGFydCcsIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0Q2FwdHVyZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnbW92ZScsIHRoaXMuaGFuZGxlVG9wTW92ZUNhcHR1cmUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2VuZCcsIHRoaXMuaGFuZGxlVG9wTW92ZUVuZENhcHR1cmUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0ZWFyZG93bicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0ZWFyZG93bigpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5pc1NldFVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCA9IHt9O1xuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnc3RhcnQnLCB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3N0YXJ0JywgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ21vdmUnLCB0aGlzLmhhbmRsZVRvcE1vdmVDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdlbmQnLCB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlLCB0cnVlKTtcblxuICAgICAgICAgICAgdGhpcy51bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEV2ZW50TGlzdGVuZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihzdWJqZWN0LCBldmVudCwgaGFuZGxlciwgY2FwdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyVHlwZSkge1xuICAgICAgICAgICAgICAgIHN1YmplY3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWVzW2xpc3RlbmVyVHlwZV1bZXZlbnRdLCBoYW5kbGVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVFdmVudExpc3RlbmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoc3ViamVjdCwgZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lclR5cGUpIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lc1tsaXN0ZW5lclR5cGVdW2V2ZW50XSwgaGFuZGxlciwgY2FwdHVyZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29ubmVjdERyYWdTb3VyY2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdERyYWdTb3VyY2Uoc291cmNlSWQsIG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBoYW5kbGVNb3ZlU3RhcnQgPSB0aGlzLmhhbmRsZU1vdmVTdGFydC5iaW5kKHRoaXMsIHNvdXJjZUlkKTtcbiAgICAgICAgICAgIHRoaXMuc291cmNlTm9kZXNbc291cmNlSWRdID0gbm9kZTtcblxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG5vZGUsICdzdGFydCcsIGhhbmRsZU1vdmVTdGFydCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzLnNvdXJjZU5vZGVzW3NvdXJjZUlkXTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsICdzdGFydCcsIGhhbmRsZU1vdmVTdGFydCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb25uZWN0RHJhZ1ByZXZpZXcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdERyYWdQcmV2aWV3KHNvdXJjZUlkLCBub2RlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5zb3VyY2VQcmV2aWV3Tm9kZU9wdGlvbnNbc291cmNlSWRdID0gb3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVzW3NvdXJjZUlkXSA9IG5vZGU7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMi5zb3VyY2VQcmV2aWV3Tm9kZXNbc291cmNlSWRdO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczIuc291cmNlUHJldmlld05vZGVPcHRpb25zW3NvdXJjZUlkXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nvbm5lY3REcm9wVGFyZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3REcm9wVGFyZ2V0KHRhcmdldElkLCBub2RlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy50YXJnZXROb2Rlc1t0YXJnZXRJZF0gPSBub2RlO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczMudGFyZ2V0Tm9kZXNbdGFyZ2V0SWRdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U291cmNlQ2xpZW50T2Zmc2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvdXJjZUNsaWVudE9mZnNldChzb3VyY2VJZCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldE5vZGVDbGllbnRPZmZzZXQodGhpcy5zb3VyY2VOb2Rlc1tzb3VyY2VJZF0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUoZSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlTW92ZVN0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdmVTdGFydChzb3VyY2VJZCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMudW5zaGlmdChzb3VyY2VJZCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFRvcE1vdmVTdGFydEhhbmRsZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VG9wTW92ZVN0YXJ0SGFuZGxlcigpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kZWxheVRvdWNoU3RhcnQgJiYgIXRoaXMuZGVsYXlNb3VzZVN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnREZWxheTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZVN0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVTdGFydChlKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBwcmVtYXR1cmVseSBwcmV2ZW50RGVmYXVsdCgpIGhlcmUgc2luY2UgaXQgbWlnaHQ6XG4gICAgICAgICAgICAvLyAxLiBNZXNzIHVwIHNjcm9sbGluZ1xuICAgICAgICAgICAgLy8gMi4gTWVzcyB1cCBsb25nIHRhcCAod2hpY2ggYnJpbmdzIHVwIGNvbnRleHQgbWVudSlcbiAgICAgICAgICAgIC8vIDMuIElmIHRoZXJlJ3MgYW4gYW5jaG9yIGxpbmsgYXMgYSBjaGlsZCwgdGFwIHdvbid0IGJlIHRyaWdnZXJlZCBvbiBsaW5rXG5cbiAgICAgICAgICAgIHZhciBjbGllbnRPZmZzZXQgPSBnZXRFdmVudENsaWVudE9mZnNldChlKTtcbiAgICAgICAgICAgIGlmIChjbGllbnRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCA9IGNsaWVudE9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXkoZSkge1xuICAgICAgICAgICAgdmFyIGRlbGF5ID0gZS50eXBlID09PSBldmVudE5hbWVzLnRvdWNoLnN0YXJ0ID8gdGhpcy5kZWxheVRvdWNoU3RhcnQgOiB0aGlzLmRlbGF5TW91c2VTdGFydDtcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQuYmluZCh0aGlzLCBlKSwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVUb3BNb3ZlQ2FwdHVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlQ2FwdHVyZShlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICAgICAgICAgIHZhciBtb3ZlU3RhcnRTb3VyY2VJZHMgPSB0aGlzLm1vdmVTdGFydFNvdXJjZUlkcztcblxuICAgICAgICAgICAgdmFyIGNsaWVudE9mZnNldCA9IGdldEV2ZW50Q2xpZW50T2Zmc2V0KGUpO1xuXG4gICAgICAgICAgICBpZiAoIWNsaWVudE9mZnNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgd2UncmUgbm90IGRyYWdnaW5nIGFuZCB3ZSd2ZSBtb3ZlZCBhIGxpdHRsZSwgdGhhdCBjb3VudHMgYXMgYSBkcmFnIHN0YXJ0XG4gICAgICAgICAgICBpZiAoIXRoaXMubW9uaXRvci5pc0RyYWdnaW5nKCkgJiYgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQuaGFzT3duUHJvcGVydHkoJ3gnKSAmJiBtb3ZlU3RhcnRTb3VyY2VJZHMgJiYgKHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0LnggIT09IGNsaWVudE9mZnNldC54IHx8IHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0LnkgIT09IGNsaWVudE9mZnNldC55KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMuYmVnaW5EcmFnKG1vdmVTdGFydFNvdXJjZUlkcywge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRPZmZzZXQ6IHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICBnZXRTb3VyY2VDbGllbnRPZmZzZXQ6IHRoaXMuZ2V0U291cmNlQ2xpZW50T2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICBwdWJsaXNoU291cmNlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMubW9uaXRvci5pc0RyYWdnaW5nKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzb3VyY2VOb2RlID0gdGhpcy5zb3VyY2VOb2Rlc1t0aGlzLm1vbml0b3IuZ2V0U291cmNlSWQoKV07XG4gICAgICAgICAgICB0aGlzLmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKHNvdXJjZU5vZGUpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLnB1Ymxpc2hEcmFnU291cmNlKCk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIG1hdGNoaW5nVGFyZ2V0SWRzID0gT2JqZWN0LmtleXModGhpcy50YXJnZXROb2RlcykuZmlsdGVyKGZ1bmN0aW9uICh0YXJnZXRJZCkge1xuICAgICAgICAgICAgICAgIHZhciBib3VuZGluZ1JlY3QgPSBfdGhpczQudGFyZ2V0Tm9kZXNbdGFyZ2V0SWRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjbGllbnRPZmZzZXQueCA+PSBib3VuZGluZ1JlY3QubGVmdCAmJiBjbGllbnRPZmZzZXQueCA8PSBib3VuZGluZ1JlY3QucmlnaHQgJiYgY2xpZW50T2Zmc2V0LnkgPj0gYm91bmRpbmdSZWN0LnRvcCAmJiBjbGllbnRPZmZzZXQueSA8PSBib3VuZGluZ1JlY3QuYm90dG9tO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5ob3ZlcihtYXRjaGluZ1RhcmdldElkcywge1xuICAgICAgICAgICAgICAgIGNsaWVudE9mZnNldDogY2xpZW50T2Zmc2V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZUVuZENhcHR1cmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG9wTW92ZUVuZENhcHR1cmUoZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1vbml0b3IuaXNEcmFnZ2luZygpIHx8IHRoaXMubW9uaXRvci5kaWREcm9wKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTdGFydFNvdXJjZUlkcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0ID0ge307XG5cbiAgICAgICAgICAgIHRoaXMudW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmRyb3AoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5lbmREcmFnKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2luc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyID0gbmV3IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczUucmVzdXJyZWN0U291cmNlTm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczUudW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlci5vYnNlcnZlKG5vZGUucGFyZW50RWxlbWVudCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jlc3VycmVjdFNvdXJjZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzdXJyZWN0U291cmNlTm9kZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXJlYWN0aWQnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kcmFnZ2VkU291cmNlTm9kZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVG91Y2hCYWNrZW5kO1xufSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVUb3VjaEJhY2tlbmQoKSB7XG4gICAgdmFyIG9wdGlvbnNPck1hbmFnZXIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgIHZhciB0b3VjaEJhY2tlbmRGYWN0b3J5ID0gZnVuY3Rpb24gdG91Y2hCYWNrZW5kRmFjdG9yeShtYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVG91Y2hCYWNrZW5kKG1hbmFnZXIsIG9wdGlvbnNPck1hbmFnZXIpO1xuICAgIH07XG5cbiAgICBpZiAob3B0aW9uc09yTWFuYWdlci5nZXRNb25pdG9yKSB7XG4gICAgICAgIHJldHVybiB0b3VjaEJhY2tlbmRGYWN0b3J5KG9wdGlvbnNPck1hbmFnZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b3VjaEJhY2tlbmRGYWN0b3J5O1xuICAgIH1cbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9kaXN0L1RvdWNoLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyYWdMYXllciBmcm9tICdyZWFjdC1kbmQvbGliL0RyYWdMYXllcic7XG5pbXBvcnQgRXZlbnRCYXNlIGZyb20gJy4vRXZlbnRCYXNlJztcblxuZnVuY3Rpb24gY29sbGVjdCAobW9uaXRvcil7XG4gIGNvbnN0IHByb3BzID0ge1xuICAgIGNsaWVudE9mZnNldDogbW9uaXRvci5nZXRTb3VyY2VDbGllbnRPZmZzZXQoKVxuICB9O1xuICBjb25zdCBpdGVtID0gbW9uaXRvci5nZXRJdGVtKCk7XG4gIGlmKGl0ZW0pe1xuICAgIHByb3BzWydldmVudCddID0gaXRlbS50aW1lbGluZS5maW5kRXZlbnRCeUlkKGl0ZW0uaWQpO1xuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuXG5jbGFzcyBFdmVudFByZXZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBnZXRJdGVtU3R5bGVzICgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuY2xpZW50T2Zmc2V0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgeCA9IHRoaXMucHJvcHMuY2xpZW50T2Zmc2V0Lng7XG4gICAgY29uc3QgeSA9IHRoaXMucHJvcHMuY2xpZW50T2Zmc2V0Lnk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weClgO1xuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5ldmVudC5zdGF0ZS5oZWlnaHQsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy5ldmVudC5wcm9wcy53aWR0aCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5ldmVudC5zdGF0ZS5jb2xvcixcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgV2Via2l0VHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJwcmV2aWV3XCIgY2xhc3NOYW1lPVwidGxFdmVudFZpZXcgdGxEcmFnZ2luZ0V2ZW50XCIgc3R5bGU9e3RoaXMuZ2V0SXRlbVN0eWxlcygpfT5cbiAgICAgICAgPEV2ZW50QmFzZVxuICAgICAgICAgIGRyYWdnaW5nRGlzcGxheT17dGhpcy5wcm9wcy5ldmVudCA/IHRoaXMucHJvcHMuZXZlbnQuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5IDogJyd9XG4gICAgICAgICAgZGlzcGxheT17dGhpcy5wcm9wcy5ldmVudCA/IHRoaXMucHJvcHMuZXZlbnQuc3RhdGUuZGlzcGxheSA6IFtdfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnTGF5ZXIoY29sbGVjdCkoRXZlbnRQcmV2aWV3KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRQcmV2aWV3LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9NZW51SXRlbSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBzdGF0aWMgZ2V0V2luZG93U2l6ZSgpe1xuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIHt3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0fTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICB6SW5kZXg6IHRoaXMucHJvcHMuekluZGV4XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMub3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JtTWVudU92ZXJsYXknKTtcbiAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJwb3NpdGlvblwiXSA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5vdmVybGF5LnN0eWxlW1widG9wXCJdID0gJzAnO1xuICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcImxlZnRcIl0gPSAnMCc7XG4gICAgdGhpcy5vdmVybGF5LnN0eWxlW1wiZGlzcGxheVwiXSA9ICdub25lJztcbiAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJ6SW5kZXhcIl0gPSB0aGlzLnByb3BzLnpJbmRleCAtIDE7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5jbG9zZSgpKTtcbiAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3cocG9zLCBjb250ZXh0KXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0eWxlOiBhc3NpZ24oe30sIHRoaXMuc3RhdGUuc3R5bGUsIHBvcywge2Rpc3BsYXk6ICdibG9jayd9KSxcbiAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICB9LCAoKSA9PiB7XG4gICAgICBsZXQgd2luZG93U2l6ZSA9IE1lbnUuZ2V0V2luZG93U2l6ZSgpO1xuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlW1wid2lkdGhcIl0gPSB3aW5kb3dTaXplLndpZHRoICsgJ3B4JztcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcImhlaWdodFwiXSA9IHdpbmRvd1NpemUuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZVsnZGlzcGxheSddID0gJ2Jsb2NrJztcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VPdXQoKXtcbiAgICBjb25zb2xlLmxvZygnb3V0Jyk7XG4gIH1cblxuICBvbk1vdXNlT3Zlcigpe1xuICAgIGNvbnNvbGUubG9nKCdvdmVyJyk7XG4gIH1cblxuICBjbG9zZSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7c3R5bGU6IGFzc2lnbih7fSwgdGhpcy5zdGF0ZS5zdHlsZSwge2Rpc3BsYXk6ICdub25lJ30pfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlWydkaXNwbGF5J10gPSAnbm9uZSc7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cIm1lbnVcIiBjbGFzc05hbWU9XCJybU1lbnVcIiBzdHlsZT17dGhpcy5zdGF0ZS5zdHlsZX0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJybU1lbnVJdGVtTGlzdFwiPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbnRleHQgPyB0aGlzLnByb3BzLml0ZW1zLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZighaXRlbS5zaG93IHx8IGl0ZW0uc2hvdyh0aGlzLnN0YXRlLmNvbnRleHQpKXtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lKHRoaXMuc3RhdGUuY29udGV4dCl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtpdGVtLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBtZW51PXt0aGlzfVxuICAgICAgICAgICAgICAgICAgZW5hYmxlPXtpdGVtLmVuYWJsZSA/IGl0ZW0uZW5hYmxlKHRoaXMuc3RhdGUuY29udGV4dCkgOiB0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSA6IG51bGx9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL01lbnUuanN4XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiBUb09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gb3duRW51bWVyYWJsZUtleXMob2JqKSB7XG5cdHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcblxuXHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaikpO1xuXHR9XG5cblx0cmV0dXJuIGtleXMuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRyZXR1cm4gcHJvcElzRW51bWVyYWJsZS5jYWxsKG9iaiwga2V5KTtcblx0fSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciBrZXlzO1xuXHR2YXIgdG8gPSBUb09iamVjdCh0YXJnZXQpO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IGFyZ3VtZW50c1tzXTtcblx0XHRrZXlzID0gb3duRW51bWVyYWJsZUtleXMoT2JqZWN0KGZyb20pKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dG9ba2V5c1tpXV0gPSBmcm9tW2tleXNbaV1dO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3VzZU92ZXI6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIG9uTW91c2VPdXQoKXtcbiAgICBpZih0aGlzLnByb3BzLmVuYWJsZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHttb3VzZU92ZXI6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU92ZXIoKXtcbiAgICBpZih0aGlzLnByb3BzLmVuYWJsZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHttb3VzZU92ZXI6IHRydWV9KTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGlmKHRoaXMucHJvcHMuZW5hYmxlKXtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLm1lbnUuc3RhdGUuY29udGV4dCk7XG4gICAgICB0aGlzLnByb3BzLm1lbnUuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcInJtTWVudUl0ZW1cIiwge3JtTW91c2VPdmVyOiB0aGlzLnN0YXRlLm1vdXNlT3Zlciwgcm1EaXNhYmxlZDogIXRoaXMucHJvcHMuZW5hYmxlLCBybVNlcGFyYXRvcjogdGhpcy5wcm9wcy5uYW1lID09ICctJ30pfVxuICAgICAgICBvbk1vdXNlT3Zlcj17ZSA9PiB0aGlzLm9uTW91c2VPdmVyKGUpfVxuICAgICAgICBvbk1vdXNlT3V0PXtlID0+IHRoaXMub25Nb3VzZU91dChlKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLm5hbWUgPT0gJy0nID8gbnVsbCA6IHRoaXMucHJvcHMubmFtZX1cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9NZW51SXRlbS5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9