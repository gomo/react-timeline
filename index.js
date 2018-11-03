(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"), require("react-dnd"), require("react-dnd-touch-backend"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames", "react-dnd", "react-dnd-touch-backend"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("classnames"), require("react-dnd"), require("react-dnd-touch-backend")) : factory(root["React"], root["classNames"], root["react-dnd"], root["react-dnd-touch-backend"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_14__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeSpan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Time__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * 一度生成したオブジェクトは変更しません。
 * 変更メソッドは新しいオブジェクトを帰します。
 */

var TimeSpan =
/*#__PURE__*/
function () {
  _createClass(TimeSpan, null, [{
    key: "create",
    value: function create(start, end) {
      return new TimeSpan(new __WEBPACK_IMPORTED_MODULE_0__Time__["a" /* default */](start[0], start[1]), new __WEBPACK_IMPORTED_MODULE_0__Time__["a" /* default */](end[0], end[1]));
    }
  }]);

  function TimeSpan(startTime, endTime) {
    _classCallCheck(this, TimeSpan);

    if (startTime === undefined) {
      startTime = new __WEBPACK_IMPORTED_MODULE_0__Time__["a" /* default */]();
    }

    if (endTime === undefined) {
      endTime = new __WEBPACK_IMPORTED_MODULE_0__Time__["a" /* default */]();
    }

    while (startTime.compare(endTime) >= 0) {
      endTime = endTime.addMin(24 * 60);
    }

    this._startTime = startTime;
    this._endTime = endTime;
  }

  _createClass(TimeSpan, [{
    key: "clone",
    value: function clone() {
      return new TimeSpan(this.getStartTime().clone(), this.getEndTime().clone());
    }
  }, {
    key: "getDistance",
    value: function getDistance() {
      return this._startTime.getDistance(this._endTime);
    }
  }, {
    key: "getStartTime",
    value: function getStartTime() {
      return this._startTime;
    }
  }, {
    key: "getEndTime",
    value: function getEndTime() {
      return this._endTime;
    }
  }, {
    key: "shiftEndTime",
    value: function shiftEndTime(time) {
      return new TimeSpan(time.addMin(-this.getDistance()), time);
    }
  }, {
    key: "shiftStartHour",
    value: function shiftStartHour(hour) {
      return this.shiftStartTime(new __WEBPACK_IMPORTED_MODULE_0__Time__["a" /* default */](hour, this._startTime.getMin()));
    }
  }, {
    key: "shiftStartMin",
    value: function shiftStartMin(min) {
      return this.shiftStartTime(new __WEBPACK_IMPORTED_MODULE_0__Time__["a" /* default */](this._startTime.getHour(), min));
    }
  }, {
    key: "shiftStartTime",
    value: function shiftStartTime(time) {
      return new TimeSpan(time, time.addMin(this.getDistance()));
    }
  }, {
    key: "addMin",
    value: function addMin(minute) {
      return new TimeSpan(this.getStartTime(), this.getEndTime().addMin(minute));
    }
  }, {
    key: "equals",
    value: function equals(timeSpan) {
      return this.getStartTime().equals(timeSpan.getStartTime()) && this.getEndTime().equals(timeSpan.getEndTime());
    }
  }, {
    key: "contains",
    value: function contains(timeSpan) {
      return this.getStartTime().compare(timeSpan.getStartTime()) < 0 && this.getEndTime().compare(timeSpan.getEndTime()) > 0;
    }
  }, {
    key: "containsTime",
    value: function containsTime(time) {
      return this.getStartTime().compare(time) < 0 && this.getEndTime().compare(time) > 0;
    }
  }, {
    key: "overlaps",
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
    key: "eachHour",
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
    key: "eachTime",
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
    key: "toString",
    value: function toString() {
      return this._startTime + '~' + this._endTime;
    }
  }]);

  return TimeSpan;
}();



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ruler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_TimeSpan__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Ruler =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Ruler, _React$Component);

  function Ruler(props) {
    var _this;

    _classCallCheck(this, Ruler);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ruler).call(this, props));
    _this.state = {
      hours: []
    };

    _this.props.timeSpan.eachTime(function (key, time) {
      if (!time.equals(_this.props.timeSpan.getEndTime())) {
        var style = {
          //border1pxを足す
          height: (_this.props.minHeight + 1) * 4
        };

        _this.state.hours.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: time.getHour(),
          style: style
        }, time.getDisplayHour()));
      }
    });

    return _this;
  }

  _createClass(Ruler, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "tlRulerView",
        style: {
          width: Ruler.width + 'px'
        }
      }, this.state.hours);
    }
  }]);

  return Ruler;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component); // Ruler.propTypes = {
//   minHeight: React.PropTypes.number.isRequired,
//   timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired
// }



Ruler.width = 30;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_TimeSpan__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Frame__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Ruler__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Line__ = __webpack_require__(7);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Timeline =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Timeline, _React$Component);

  function Timeline(props) {
    var _this;

    _classCallCheck(this, Timeline);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Timeline).call(this, props));
    _this.timeSpan = _this.props.timeSpan; //minViewがいくつあるかカウント。minViewは15分おき。それを元に高さを計算。border分1px足す

    _this.lineHeight = _this.timeSpan.getDistance() / 15 * (_this.props.minHeight + 1); //1分あたりの高さを算出

    _this.perMinHeight = _this.lineHeight / _this.timeSpan.getDistance();
    _this.lineWidth = props.lineWidth;
    _this.createdEventId = 0;
    _this.draggingOverLineComponent = null;
    _this.frameComponent = undefined;
    _this.eventComponents = [];
    return _this;
  }

  _createClass(Timeline, [{
    key: "draggingOver",
    value: function draggingOver(left) {
      var lineComponent = this.findLineByLeft(left);

      if (lineComponent) {
        if (this.draggingOverLineComponent !== lineComponent) {
          if (this.draggingOverLineComponent) {
            this.draggingOverLineComponent.clearDraggingOver();
          }

          this.draggingOverLineComponent = lineComponent;
          this.draggingOverLineComponent.draggingOver();
        }
      } else {
        if (this.draggingOverLineComponent) {
          this.draggingOverLineComponent.clearDraggingOver();
          this.draggingOverLineComponent = null;
        }
      }

      return lineComponent;
    }
  }, {
    key: "clearDraggingOver",
    value: function clearDraggingOver() {
      if (this.draggingOverLineComponent) {
        this.draggingOverLineComponent.clearDraggingOver();
      }
    }
  }, {
    key: "getTotalWidth",
    value: function getTotalWidth() {
      var _this2 = this;

      if (this.totalWidthCache === undefined) {
        this.totalWidthCache = this.props.lineData.reduce(function (val, data, index) {
          var hasRuler = index % _this2.props.rulerInterval === 0;
          return val + (hasRuler ? _this2.lineWidth + __WEBPACK_IMPORTED_MODULE_3__Ruler__["a" /* default */].width : _this2.lineWidth);
        }, 0);
      }

      return this.totalWidthCache;
    }
  }, {
    key: "findEventById",
    value: function findEventById(eventId) {
      return this.eventComponents.find(function (ev) {
        return ev.props.id == eventId;
      });
    }
  }, {
    key: "findLineByLeft",
    value: function findLineByLeft(left) {
      var _this3 = this;

      var width = 0;
      return this.lineComponents.find(function (line) {
        width += line.props.hasRuler ? _this3.props.lineWidth + __WEBPACK_IMPORTED_MODULE_3__Ruler__["a" /* default */].width : _this3.props.lineWidth;

        if (left < width) {
          return line;
        }
      });
    }
  }, {
    key: "getLineLeft",
    value: function getLineLeft(lineId) {
      var left = 0;

      for (var i = 0; i < this.props.lineData.length; i++) {
        var lineData = this.props.lineData[i];
        var hasRuler = i % this.props.rulerInterval === 0;

        if (hasRuler) {
          left += __WEBPACK_IMPORTED_MODULE_3__Ruler__["a" /* default */].width;
        }

        if (lineData.id == lineId) {
          break;
        }

        left += this.props.lineWidth;
      }

      left += __WEBPACK_IMPORTED_MODULE_4__Line__["a" /* default */].sidePadding;
      return left;
    }
  }, {
    key: "getTimeSpan",
    value: function getTimeSpan(top, height) {
      var startTime = this.topToTime(top);
      var endTime = startTime.addMin(height / this.perMinHeight);
      return new __WEBPACK_IMPORTED_MODULE_1__classes_TimeSpan__["a" /* default */](startTime, endTime);
    }
  }, {
    key: "minuteToHeight",
    value: function minuteToHeight(minute) {
      return minute * this.perMinHeight - 1;
    }
  }, {
    key: "timeSpanToHeight",
    value: function timeSpanToHeight(timeSpan) {
      return this.minuteToHeight(timeSpan.getDistance());
    }
  }, {
    key: "timeToTop",
    value: function timeToTop(time) {
      return this.timeSpan.getStartTime().getDistance(time) * this.perMinHeight - 1;
    }
  }, {
    key: "topToTime",
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
    key: "findPrevEvent",
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
    key: "getPrevBottom",
    value: function getPrevBottom(eventComponent) {
      var prevEvent = this.findPrevEvent(eventComponent);
      var bottomTime;

      if (prevEvent) {
        bottomTime = prevEvent.currentTimeSpan.getEndTime();
      } else {
        bottomTime = this.timeSpan.getStartTime();
      }

      return this.timeToTop(bottomTime);
    }
  }, {
    key: "findNextEvent",
    value: function findNextEvent(eventComponent) {
      return this.findNextEventByTime(eventComponent.lineId, eventComponent.currentTimeSpan.getEndTime());
    }
  }, {
    key: "findNextEventByTime",
    value: function findNextEventByTime(lineId, time) {
      return this.eventComponents.filter(function (ev) {
        return !ev.state.draggable && ev.lineId == lineId;
      }) //同じ列のものだけに絞る
      .sort(function (a, b) {
        return a.currentTimeSpan.getStartTime().compare(b.currentTimeSpan.getStartTime());
      }) //時間の昇順で並び替え
      .find(function (ev) {
        return ev.currentTimeSpan.getStartTime().compare(time) >= 0;
      }) //昇順なので対象より最初に開始時間が遅いものがnext
      ;
    }
  }, {
    key: "getEventsOnLine",
    value: function getEventsOnLine(lineId) {
      return this.eventComponents.filter(function (ev) {
        return !ev.state.draggable && ev.lineId == lineId;
      });
    }
  }, {
    key: "getNextTime",
    value: function getNextTime(lineId, time) {
      var nextEvent = this.findNextEventByTime(lineId, time);
      var nextTime;

      if (nextEvent) {
        nextTime = nextEvent.currentTimeSpan.getStartTime();
      } else {
        nextTime = this.timeSpan.getEndTime();
      }

      return nextTime;
    }
  }, {
    key: "getFreeMinute",
    value: function getFreeMinute(lineId, time) {
      var nextTime = this.getNextTime(lineId, time);
      return time.getDistance(nextTime);
    }
  }, {
    key: "getNextTop",
    value: function getNextTop(eventComponent) {
      return this.timeToTop(this.getNextTime(eventComponent.lineId, eventComponent.currentTimeSpan.getEndTime()));
    }
  }, {
    key: "addEvents",
    value: function addEvents(events) {
      return this.frameComponent.addEvents(events);
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.frameComponent.setHeight(height);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.lineData !== this.props.lineData) {
        this.totalWidthCache = undefined;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Frame__["a" /* default */], {
        ref: "frame",
        lineData: this.props.lineData,
        timeSpan: this.props.timeSpan,
        lineWidth: this.props.lineWidth,
        minHeight: this.props.minHeight,
        height: this.props.height,
        width: this.props.width,
        lineHeight: this.lineHeight,
        timeline: this,
        rulerInterval: this.props.rulerInterval,
        events: this.props.events,
        children: this.props.children,
        childWidth: this.props.childWidth
      });
    }
  }, {
    key: "lineComponents",
    get: function get() {
      var _this4 = this;

      // refsはオブジェクトなので順番の保証がないためDOMからとります。
      var lines = this.frameComponent.refs.linesWrapper.querySelectorAll('.tlLineWrapper');
      return Array.prototype.slice.call(lines).map(function (elem) {
        var id = elem.getAttribute('data-id');
        return _this4.frameComponent.refs['line@' + id];
      });
    }
  }, {
    key: "lastLine",
    get: function get() {
      var lines = this.lineComponents;
      return lines[lines.length - 1];
    }
  }]);

  return Timeline;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component); // Timeline.propTypes = {
//   timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
//   lineData: React.PropTypes.arrayOf(React.PropTypes.shape({
//     id: React.PropTypes.string.isRequired,
//     label: React.PropTypes.string.isRequired
//   })).isRequired,
//   lineWidth: React.PropTypes.number.isRequired,
//   minHeight: React.PropTypes.number.isRequired,
//   onClick: React.PropTypes.func,
//   rulerInterval: React.PropTypes.number.isRequired,
//   minInterval: React.PropTypes.number,
//   height: React.PropTypes.number.isRequired
// }



Timeline.defaultProps = {
  minInterval: 1,
  childWidth: 0
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Time; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 一度生成したオブジェクトは変更しません。
 * 変更メソッドは新しいオブジェクトを帰します。
 */
var Time =
/*#__PURE__*/
function () {
  _createClass(Time, null, [{
    key: "eachMin",
    value: function eachMin(callback, minuteInterval) {
      var count = 60 / minuteInterval;

      for (var i = 0; i < count; i++) {
        var min = i * minuteInterval;

        if (min < 60) {
          var displayMin = min < 10 ? '0' + min : min + '';
          callback.call(min, i, min, displayMin);
        }
      }

      ;
    }
  }, {
    key: "create",

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
    key: "getHour",
    value: function getHour() {
      return this._hour;
    }
  }, {
    key: "getMin",
    value: function getMin() {
      return this._min;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Time(this.getHour(), this.getMin());
    }
  }, {
    key: "addMin",
    value: function addMin(min) {
      return new Time(this.getHour(), this.getMin() + parseInt(min, 10));
    }
  }, {
    key: "equals",
    value: function equals(time) {
      return this.getHour() === time.getHour() && this.getMin() === time.getMin();
    }
  }, {
    key: "compare",
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
    key: "getDistance",
    value: function getDistance(targetTime) {
      var targetHour = targetTime.getHour();
      var hourDistance = targetHour - this._hour;
      return hourDistance * 60 + (targetTime.getMin() - this._min);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.getDisplayTime();
    }
  }, {
    key: "getDisplayHour",
    value: function getDisplayHour() {
      return this._hour < 24 ? this._hour : this._hour - 24;
    }
  }, {
    key: "getDisplayMin",
    value: function getDisplayMin() {
      return this._min < 10 ? '0' + this._min : this._min;
    }
  }, {
    key: "getDisplayTime",
    value: function getDisplayTime() {
      return this.getDisplayHour() + ':' + this.getDisplayMin();
    }
  }]);

  return Time;
}();



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Line; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_TimeSpan__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Hour__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Ruler__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LineLabel__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Timeline__ = __webpack_require__(5);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Line =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Line, _React$Component);

  function Line(props) {
    var _this;

    _classCallCheck(this, Line);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Line).call(this, props));
    _this.state = {
      hours: [],
      events: [],
      draggingOver: false
    };

    _this.props.timeSpan.eachTime(function (key, time) {
      if (!time.equals(_this.props.timeSpan.getEndTime())) {
        _this.state.hours.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Hour__["a" /* default */], {
          key: time.getHour(),
          time: time,
          minHeight: _this.props.minHeight
        }));
      }
    });

    _this.vars = _this.props.vars || {};
    return _this;
  }

  _createClass(Line, [{
    key: "getRelativeTop",
    value: function getRelativeTop(e) {
      var parentElement = this.props.frame.refs.linesWrapper;
      var parentRect = parentElement.getBoundingClientRect();
      return e.clientY - parentRect.top + parentElement.scrollTop;
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      if (this.props.timeline.props.lineDidClick) {
        var time = this.props.timeline.topToTime(this.getRelativeTop(e));
        this.props.timeline.props.lineDidClick({
          component: this,
          time: time,
          freeMinute: this.props.timeline.getFreeMinute(this.props.id, time),
          position: {
            scrollTop: this.props.timeline.frameComponent.refs.linesWrapper.scrollTop,
            scrollLeft: this.props.timeline.frameComponent.element.scrollLeft,
            top: e.clientY,
            left: e.clientX
          },
          event: e
        });
      }
    }
  }, {
    key: "onContextMenu",
    value: function onContextMenu(e) {
      if (this.props.timeline.props.lineDidRightClick) {
        this.props.timeline.props.lineDidRightClick({
          event: e,
          component: this
        });
      }
    }
  }, {
    key: "draggingOver",
    value: function draggingOver() {
      this.setState({
        draggingOver: true
      });
    }
  }, {
    key: "clearDraggingOver",
    value: function clearDraggingOver() {
      this.setState({
        draggingOver: false
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.timeline.draggingOverLineComponent == this) {
        this.props.timeline.draggingOverLineComponent = undefined;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "tlLineWrapper",
        "data-id": this.props.id,
        onContextMenu: function onContextMenu(e) {
          return _this2.onContextMenu(e);
        }
      }, function () {
        if (_this2.props.hasRuler) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Ruler__["a" /* default */], {
            key: 'ruler_' + _this2.props.id,
            minHeight: _this2.props.minHeight,
            timeSpan: _this2.props.timeSpan
          });
        }
      }(), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: function onClick(e) {
          return _this2.onClick(e);
        },
        className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()('tlLineView', {
          tlEven: this.props.even,
          tlOdd: !this.props.even
        }, {
          tlOver: this.state.draggingOver
        }),
        style: {
          width: this.props.width + 'px'
        }
      }, this.state.hours));
    }
  }]);

  return Line;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


Line.sidePadding = 1; // Line.propTypes = {
//   width: React.PropTypes.number.isRequired,
//   minHeight: React.PropTypes.number.isRequired,
//   timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
//   id: React.PropTypes.string.isRequired,
//   onClick: React.PropTypes.func,
//   even: React.PropTypes.bool.isRequired,
//   //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
//   timeline: React.PropTypes.any.isRequired,
//   hasRuler: React.PropTypes.bool.isRequired
// }

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ruler__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var LineLabel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LineLabel, _React$Component);

  function LineLabel(props) {
    var _this;

    _classCallCheck(this, LineLabel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LineLabel).call(this, props));
    _this.state = {
      hasRuler: _this.props.hasRuler,
      prevRuler: _this.props.prevRuler,
      isLast: _this.props.isLast
    };
    return _this;
  }

  _createClass(LineLabel, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          width: this.props.width,
          marginLeft: this.state.hasRuler ? __WEBPACK_IMPORTED_MODULE_1__Ruler__["a" /* default */].width + 'px' : 0
        },
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
          tlLabel: true,
          tlHasRuler: this.state.hasRuler,
          tlPrevRuler: this.state.prevRuler,
          tlLast: this.state.isLast
        })
      }, this.props.label);
    }
  }]);

  return LineLabel;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


LineLabel.height = 16;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(16);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var EventBase =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EventBase, _React$Component);

  function EventBase() {
    _classCallCheck(this, EventBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(EventBase).apply(this, arguments));
  }

  _createClass(EventBase, [{
    key: "renderDisplay",
    value: function renderDisplay(row) {
      if (!row.value) {
        return null;
      }

      var className = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('tlEventDisplayRow', row.key);

      if (Array.isArray(row.value)) {
        if (row.value.length === 0) {
          return null;
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: className,
          key: row.key
        }, row.value.map(function (val, key) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            key: key,
            className: "item"
          }, val);
        }));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: className,
        key: row.key
      }, row.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var displayPosition = 'left';

      if (this.props.timeline.getTotalWidth() > this.props.right + 70) {
        displayPosition = 'right';
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: "base",
        style: {
          height: '100%'
        }
      }, function () {
        if (_this.props.draggingDisplay) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('tlDraggingDisplay', displayPosition),
            style: {
              top: _this.props.draggingDisplayTop
            }
          }, _this.props.draggingDisplay);
        }
      }(), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "tlEventDisplay"
      }, this.props.display.map(function (row) {
        return _this.renderDisplay(row);
      })), "\xA0");
    }
  }]);

  return EventBase;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


EventBase.defaultProps = {
  display: []
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-unused-vars */
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (e) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Timeline__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Time__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_TimeSpan__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Timeline__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return __WEBPACK_IMPORTED_MODULE_1__classes_Time__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSpan", function() { return __WEBPACK_IMPORTED_MODULE_2__classes_TimeSpan__["a"]; });





/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_TimeSpan__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Line__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dnd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dnd_touch_backend__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dnd_touch_backend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dnd_touch_backend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__EventPreview__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Event__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Ruler__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__LineLabel__ = __webpack_require__(8);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var target = {
  drop: function drop(props, monitor, component) {
    var item = monitor.getItem();
    var delta = monitor.getDifferenceFromInitialOffset();
    var initalOffset = item.draggingComponent.getOffset();
    var top = Math.round(initalOffset.top + delta.y);
    var left = Math.round(initalOffset.left + delta.x);
    item.draggingComponent.moveTo(top, left);
  },
  hover: function hover(props, monitor, component) {
    var clientOffset = monitor.getSourceClientOffset();

    if (clientOffset) {
      var item = monitor.getItem();
      var lineWrapperBounds = component.refs.linesWrapper.getBoundingClientRect();
      var lineComponent = props.timeline.draggingOver(clientOffset.x - lineWrapperBounds.left + item.draggingComponent.props.width / 2
      /*eventの真ん中を基準にする*/
      );
      var time = props.timeline.topToTime(clientOffset.y + component.refs.linesWrapper.scrollTop - lineWrapperBounds.top);
      item.draggingComponent.dragging(time, lineComponent ? lineComponent.props.id : null);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

var Frame =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Frame, _React$Component);

  function Frame(props) {
    var _this;

    _classCallCheck(this, Frame);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Frame).call(this, props));
    var rulerInterval = 4;
    _this.state = {
      minWidth: 0
    };
    _this.resizingEvent = null;
    _this.element = null;
    _this.props.timeline.frameComponent = _assertThisInitialized(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Frame, [{
    key: "resizeUp",
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

          eventComponent.resizingTimeSpan = new __WEBPACK_IMPORTED_MODULE_1__classes_TimeSpan__["a" /* default */](_this2.props.timeline.topToTime(targetTop), eventComponent.currentTimeSpan.getEndTime());
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
    key: "resizeDown",
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

          eventComponent.resizingTimeSpan = new __WEBPACK_IMPORTED_MODULE_1__classes_TimeSpan__["a" /* default */](eventComponent.currentTimeSpan.getStartTime(), _this3.props.timeline.topToTime(targetBottom));
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
    key: "setHeight",
    value: function setHeight(height) {
      this.setState({
        height: height
      });
    }
  }, {
    key: "getRelativePos",
    value: function getRelativePos(e) {
      return {
        top: e.clientY - e.currentTarget.offsetTop + e.currentTarget.scrollTop,
        left: e.clientX - e.currentTarget.offsetLeft + e.currentTarget.scrollLeft
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var newState = {
        minWidth: this.props.timeline.getTotalWidth()
      };
      this.setState(newState, this.correctOutsideEvents);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var newState = {};

      if (nextProps.lineData !== this.props.lineData) {
        newState.minWidth = this.props.timeline.getTotalWidth();
      }

      this.setState(newState, this.correctOutsideEvents);
    }
  }, {
    key: "correctOutsideEvents",
    value: function correctOutsideEvents() {
      this.props.timeline.eventComponents.forEach(function (event) {
        return event.correctPosition();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var connectDropTarget = this.props.connectDropTarget;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: function ref(elem) {
          return _this4.element = elem;
        },
        className: "tlFrameView scrollWrapper",
        style: {
          width: this.props.width,
          overflowX: 'auto'
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          minWidth: this.state.minWidth + this.props.childWidth,
          display: "flex"
        }
      }, function () {
        return connectDropTarget(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "linesFrame",
          style: {
            width: _this4.state.minWidth,
            overflow: 'hidden'
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            width: _this4.state.minWidth + 20
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "tlLabelView",
          style: {
            height: __WEBPACK_IMPORTED_MODULE_9__LineLabel__["a" /* default */].height
          }
        }, _this4.props.lineData.map(function (data, key) {
          var hasRuler = key % _this4.props.rulerInterval === 0;
          var prevRuler = (key + 1) % _this4.props.rulerInterval === 0;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__LineLabel__["a" /* default */], {
            key: data.id + "@" + key,
            width: _this4.props.lineWidth,
            hasRuler: hasRuler,
            prevRuler: prevRuler,
            label: data.label,
            timeline: _this4.props.timeline,
            isLast: key == _this4.props.lineData.length - 1
          });
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          ref: "linesWrapper",
          className: "tlLinesWrapper scrollWrapper",
          style: {
            height: _this4.props.height - __WEBPACK_IMPORTED_MODULE_9__LineLabel__["a" /* default */].height
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: {
            height: _this4.props.lineHeight,
            overflowY: "hidden",
            position: "relative"
          }
        }, _this4.props.lineData.map(function (data, key) {
          var hasRuler = key % _this4.props.rulerInterval === 0;
          var prevRuler = (key + 1) % _this4.props.rulerInterval === 0;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Line__["a" /* default */], {
            ref: "line@" + data.id,
            hasRuler: hasRuler,
            key: data.id + "@" + key,
            id: data.id,
            width: _this4.props.lineWidth,
            minHeight: _this4.props.minHeight,
            timeSpan: _this4.props.timeSpan,
            even: key % 2 === 0,
            timeline: _this4.props.timeline,
            vars: data.vars,
            frame: _this4
          });
        }), _this4.props.events.map(function (event) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Event__["a" /* default */], {
            ref: "event@" + event.id,
            key: event.id,
            id: event.id,
            initialColor: event.color,
            initialTimeSpan: event.timeSpan,
            initialDisplay: event.display,
            initialLineId: event.lineId,
            timeline: _this4.props.timeline,
            width: _this4.props.timeline.props.lineWidth - 2 - __WEBPACK_IMPORTED_MODULE_2__Line__["a" /* default */].sidePadding * 2,
            vars: event.vars,
            float: event.float
          });
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__EventPreview__["a" /* default */], {
          timeline: _this4.props.timeline
        })))));
      }(), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, this.props.children)));
    }
  }]);

  return Frame;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component); // Frame.propTypes = {
//   timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
//   lineData: React.PropTypes.arrayOf(React.PropTypes.shape({
//     id: React.PropTypes.string.isRequired,
//     label: React.PropTypes.string.isRequired
//   })).isRequired,
//   lineWidth: React.PropTypes.number.isRequired,
//   minHeight: React.PropTypes.number.isRequired,
//   onClick: React.PropTypes.func,
//   timeline: React.PropTypes.any.isRequired,
//   rulerInterval: React.PropTypes.number.isRequired,
//   height: React.PropTypes.number.isRequired
// }


Frame.defaultProps = {
  events: [],
  childWidth: 0
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_dnd__["DragDropContext"])(__WEBPACK_IMPORTED_MODULE_5_react_dnd_touch_backend___default()({
  enableMouseEvents: true
}))(Object(__WEBPACK_IMPORTED_MODULE_4_react_dnd__["DropTarget"])("Event", target, collect)(Frame)));

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hour; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Time__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Hour =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hour, _React$Component);

  function Hour(props) {
    var _this;

    _classCallCheck(this, Hour);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Hour).call(this, props));
    _this.state = {
      minutes: []
    };
    var minStyle = {
      height: _this.props.minHeight + 'px'
    };
    __WEBPACK_IMPORTED_MODULE_1__classes_Time__["a" /* default */].eachMin(function (key, min) {
      _this.state.minutes.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        key: min,
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('tlMinView', 'tl' + min),
        style: minStyle
      }, "\xA0"));
    }, 15);
    return _this;
  }

  _createClass(Hour, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('tlHourView', 'tl' + this.props.time.getHour())
      }, this.state.minutes);
    }
  }]);

  return Hour;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component); // Hour.propTypes = {
//   minHeight: React.PropTypes.number.isRequired,
//   time: React.PropTypes.instanceOf(Time).isRequired
// }




/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dnd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EventBase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_object_assign__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






function collect(monitor) {
  var props = {
    clientOffset: monitor.getDifferenceFromInitialOffset()
  };
  var item = monitor.getItem();

  if (item && item['draggingComponent']) {
    props['draggingComponent'] = item['draggingComponent'];
  }

  return props;
}

var EventPreview =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EventPreview, _React$Component);

  function EventPreview() {
    _classCallCheck(this, EventPreview);

    return _possibleConstructorReturn(this, _getPrototypeOf(EventPreview).apply(this, arguments));
  }

  _createClass(EventPreview, [{
    key: "getItemStyles",
    value: function getItemStyles() {
      if (!this.props.clientOffset) {
        return {
          display: 'none'
        };
      }

      var x = this.props.clientOffset.x;
      var y = this.props.clientOffset.y;
      var transform = "translate(".concat(x, "px, ").concat(y, "px)");
      return __WEBPACK_IMPORTED_MODULE_3_object_assign___default()(this.props.draggingComponent.getDraggingStyle(), {
        position: 'absolute',
        transform: transform,
        WebkitTransform: transform
      });
    }
  }, {
    key: "getRight",
    value: function getRight() {
      if (!this.props.draggingComponent) return undefined;
      var width = this.props.draggingComponent.props.width;

      if (this.props.clientOffset) {
        return this.props.draggingComponent.state.left + this.props.clientOffset.x + width;
      } else {
        return this.props.draggingComponent.state.left + width;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var draggingDisplay = '';

      if (this.props.draggingComponent && this.props.draggingComponent.state.draggingDisplay) {
        draggingDisplay = this.props.draggingComponent.state.draggingDisplay;
      }

      var display = [];

      if (this.props.draggingComponent && this.props.draggingComponent.state.display) {
        display = this.props.draggingComponent.state.display;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: "preview",
        className: "tlEventView tlDraggingEvent",
        style: this.getItemStyles()
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__EventBase__["a" /* default */], {
        draggingDisplay: draggingDisplay,
        display: display,
        timeline: this.props.timeline,
        right: this.getRight()
      }));
    }
  }]);

  return EventPreview;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_dnd__["DragLayer"])(collect)(EventPreview));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export closest */
function closest(elem, selector) {
  var matchesFn; // find vendor prefix

  ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
    if (typeof document.body[fn] == 'function') {
      matchesFn = fn;
      return true;
    }

    return false;
  });
  var parent; // traverse parents

  while (elem) {
    parent = elem.parentElement;

    if (parent && parent[matchesFn](selector)) {
      return parent;
    }

    elem = parent;
  }

  return null;
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_TimeSpan__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EventBase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Timeline__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_object_assign__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_object_assign__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var source = {
  beginDrag: function beginDrag(props, monitor, component) {
    return __WEBPACK_IMPORTED_MODULE_6_object_assign___default()({}, props, {
      draggingComponent: component
    });
  },
  canDrag: function canDrag(props, monitor, component) {
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

var Event =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Event, _React$Component);

  function Event(props) {
    var _this;

    _classCallCheck(this, Event);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Event).call(this, props)); // ドラッグ&ドロップのパフォーマンスを上げるため、見た目に関係のないstateはメンバー変数にしてます。

    _this.lineId = _this.props.initialLineId;
    _this.timeSpan = _this.props.initialTimeSpan;
    _this.draggingPosition = null;
    _this.resizingTimeSpan = null;
    _this.resizing = false;
    _this.vars = _this.props.vars;
    _this.element = null; // 初期フロートのイベントはlineIdを持っていません。これはキャンセルした時にフローとした状態に戻したいからです。
    // 代わりにfloatの値を保持し、そこにフロートのまま戻すようにしています。

    _this.initialFloat = _this.props.float;
    _this.state = {
      top: props.float === undefined ? _this.props.timeline.timeToTop(_this.timeSpan.getStartTime()) : props.float.top,
      left: props.float === undefined ? _this.props.timeline.getLineLeft(_this.lineId) : props.float.left,
      color: _this.props.initialColor,
      draggable: _this.props.float === undefined ? false : true,
      resizable: false,
      draggingDisplay: '',
      display: _this.props.initialDisplay
    };

    if (_this.props.float) {
      // 高さを設定
      _this.state.height = _this.props.timeline.minuteToHeight(_this.props.float.minute);

      var time = _this.props.timeline.topToTime(_this.state.top);

      _this.draggingPosition = {
        time: time,
        lineId: undefined
      };
      _this.state.draggingDisplay = time.getDisplayTime();
      _this.timeSpan = new __WEBPACK_IMPORTED_MODULE_2__classes_TimeSpan__["a" /* default */](time, time.addMin(_this.props.float.minute));
    } else {
      _this.state.height = _this.props.timeline.timeSpanToHeight(_this.timeSpan);
    }

    return _this;
  }

  _createClass(Event, [{
    key: "toJson",
    value: function toJson() {
      return {
        id: this.props.id,
        lineId: this.lineId,
        timeSpan: this.timeSpan,
        vars: JSON.parse(JSON.stringify(this.vars)),
        color: this.state.color,
        display: this.state.display,
        position: {
          top: this.state.top,
          left: this.state.left
        }
      };
    }
  }, {
    key: "update",
    value: function update(values) {
      var newState = {};

      if (values.timeSpan) {
        newState.height = this.props.timeline.timeSpanToHeight(values.timeSpan);
        newState.top = this.props.timeline.timeToTop(values.timeSpan.getStartTime());
        this.timeSpan = values.timeSpan;
      }

      if (values.color) {
        newState.color = values.color;
      }

      if (values.display) {
        newState.display = values.display;
      }

      if (values.vars) {
        this.vars = values.vars;
      }

      this.setState(newState);
    }
  }, {
    key: "isFreePosition",

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
    key: "moveTo",
    value: function moveTo(top, left) {
      this.setState({
        top: top,
        left: left
      });
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var _this2 = this;

      if (this.props.timeline.props.eventDidClick) {
        if (this.resizing) {
          return;
        }

        this.props.timeline.props.eventDidClick({
          position: {
            scrollTop: this.props.timeline.frameComponent.refs.linesWrapper.scrollTop,
            scrollLeft: this.props.timeline.frameComponent.element.scrollLeft,
            top: e.clientY,
            left: e.clientX
          },
          component: this,
          lineComponent: this.props.timeline.lineComponents.find(function (lineComponent) {
            return lineComponent.props.id == _this2.lineId;
          }),
          event: e
        });
      }
    }
  }, {
    key: "dragging",
    value: function dragging(time, lineId) {
      this.draggingPosition = {
        time: time,
        lineId: lineId
      };
      this.setState({
        draggingDisplay: time.getDisplayTime()
      });
    }
  }, {
    key: "resizeUp",
    value: function resizeUp(e) {
      this.props.timeline.frameComponent.resizeUp(this, e.clientY);
    }
  }, {
    key: "resizeDown",
    value: function resizeDown(e) {
      this.props.timeline.frameComponent.resizeDown(this, e.clientY);
    }
  }, {
    key: "endResizing",
    value: function endResizing(e) {
      var _this3 = this;

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
      } //onClickよりendResizingの先に発生してしまう。


      setTimeout(function () {
        return _this3.resizing = false;
      }, 100);
    }
  }, {
    key: "onContextMenu",
    value: function onContextMenu(e) {
      if (this.props.timeline.props.eventDidRightClick) {
        this.props.timeline.props.eventDidRightClick({
          event: e,
          component: this
        });
      }
    }
  }, {
    key: "getDraggingStyle",
    value: function getDraggingStyle() {
      return {
        height: this.state.height,
        width: this.props.width,
        top: this.state.top,
        left: this.state.left,
        backgroundColor: this.state.color
      };
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      return {
        top: this.state.top,
        left: this.state.left
      };
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.setState({
        color: color
      });
    }
  }, {
    key: "setDisplay",
    value: function setDisplay(display) {
      this.setState({
        display: display
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      this.setState({
        resizable: true
      });
    }
  }, {
    key: "float",
    value: function float() {
      this.setState({
        draggable: true,
        draggingDisplay: this.timeSpan.getStartTime().getDisplayTime()
      });
      this.draggingPosition = {
        time: this.timeSpan.getStartTime(),
        lineId: this.lineId
      };
    }
  }, {
    key: "isFixed",
    value: function isFixed() {
      return !this.state.draggable && !this.state.resizable;
    }
  }, {
    key: "isFixable",
    value: function isFixable() {
      var newPosition = this.nextPosition;

      if (!newPosition) {
        return true;
      }

      return this.isFreePosition(newPosition);
    }
  }, {
    key: "isCancelable",
    value: function isCancelable() {
      var newPosition = this.prevPosition;

      if (!newPosition) {
        return true;
      }

      return this.isFreePosition(newPosition);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.draggingPosition) {
        var newState = {};

        if (this.lineId === undefined) {
          newState.left = this.initialFloat.left;
          newState.top = this.initialFloat.top;
          newState.draggingDisplay = this.timeSpan.getStartTime().getDisplayTime();
        } else {
          this.draggingPosition = null;
          newState.left = this.props.timeline.getLineLeft(this.lineId);
          newState.top = this.props.timeline.timeToTop(this.timeSpan.getStartTime());
          newState.draggable = false;
          newState.draggingDisplay = '';
        }

        this.setState(newState);
      } else if (this.resizingTimeSpan) {
        var top = this.props.timeline.timeToTop(this.timeSpan.getStartTime());
        var height = this.props.timeline.timeSpanToHeight(this.timeSpan);
        this.resizingTimeSpan = null;
        this.setState({
          resizable: false,
          draggingDisplay: '',
          top: top,
          height: height
        });
      } else {
        this.setState({
          draggable: false,
          resizable: false,
          draggingDisplay: ''
        });
      }

      this.props.timeline.clearDraggingOver();
    }
  }, {
    key: "getMinute",
    value: function getMinute() {
      if (this.timeSpan) {
        return this.timeSpan.getDistance();
      } else if (this.props.float) {
        return parseInt(this.props.float.minute, 10);
      }
    }
  }, {
    key: "fix",
    value: function fix() {
      if (this.draggingPosition) {
        var state = {
          top: this.props.timeline.timeToTop(this.draggingPosition.time),
          left: this.props.timeline.getLineLeft(this.draggingPosition.lineId),
          draggable: false,
          draggingDisplay: ''
        };
        var newTimeSpan = this.timeSpan.shiftStartTime(this.draggingPosition.time);

        if (this.props.timeline.props.eventWillFix) {
          this.props.timeline.props.eventWillFix({
            component: this,
            state: state,
            lineId: this.draggingPosition.lineId,
            timeSpan: newTimeSpan
          });
        }

        this.setState(state);
        this.lineId = this.draggingPosition.lineId;
        this.timeSpan = newTimeSpan;
        this.draggingPosition = null;
      } else if (this.resizingTimeSpan) {
        var _state = {
          resizable: false,
          draggingDisplay: ''
        };

        if (this.props.timeline.props.eventWillFix) {
          this.props.timeline.props.eventWillFix({
            component: this,
            state: _state,
            lineId: this.lineId,
            timeSpan: this.resizingTimeSpan
          });
        }

        this.setState(_state);
        this.timeSpan = this.resizingTimeSpan;
        this.resizingTimeSpan = null;
      } else {
        this.setState({
          draggable: false,
          resizable: false,
          draggingDisplay: ''
        });
      }

      this.props.timeline.clearDraggingOver();

      if (this.props.timeline.props.eventDidFix) {
        this.props.timeline.props.eventDidFix({
          component: this
        });
      }
    }
  }, {
    key: "setVar",
    value: function setVar(key, value) {
      this.vars[key] = value;
    }
  }, {
    key: "getVar",
    value: function getVar(key) {
      return this.vars[key];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.timeline.eventComponents.push(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this4 = this;

      this.props.timeline.eventComponents = this.props.timeline.eventComponents.filter(function (ev) {
        return ev !== _this4;
      });
    }
  }, {
    key: "correctPosition",
    value: function correctPosition() {
      if (this.state.draggable) {
        var newPos = {}; // lineを特定する

        var line = this.props.timeline.findLineByLeft(this.state.left); // はみ出てたら移動

        if (!line) {
          line = this.props.timeline.lastLine;
          newPos.left = this.props.timeline.getLineLeft(line.props.id);
          this.initialFloat.left = newPos.left;
        }

        if (line) {
          this.draggingPosition.lineId = line.props.id;
        } // 高さがはみ出てないかチェック


        var bottom = this.props.timeline.timeToTop(this.props.timeline.timeSpan.getEndTime()) - this.state.height;

        if (this.state.top > bottom) {
          newPos.top = bottom;
          this.initialFloat.top = newPos.top;
          var time = this.props.timeline.topToTime(newPos.top);
          this.draggingPosition.time = time;
          newPos.draggingDisplay = time.getDisplayTime();
          this.timeSpan = new __WEBPACK_IMPORTED_MODULE_2__classes_TimeSpan__["a" /* default */](time, time.addMin(this.timeSpan.getDistance()));
        }

        if (Object.keys(newPos).length) {
          this.setState(newPos);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var style = {
        height: this.state.height,
        position: 'absolute',
        top: this.state.top + 'px',
        left: this.state.left + 'px',
        width: this.props.width + 'px',
        backgroundColor: this.state.color,
        display: this.props.isDragging ? 'none' : 'block'
      };
      return this.props.connectDragSource(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "data-id": this.props.id,
        ref: function ref(elem) {
          return _this5.element = elem;
        },
        onContextMenu: function onContextMenu(e) {
          return _this5.onContextMenu(e);
        },
        className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('tlEventView', {
          tlDraggingEvent: this.state.draggable,
          tlResizableEvent: this.state.resizable
        }),
        style: style,
        onClick: function onClick(e) {
          return _this5.onClick(e);
        }
      }, function () {
        if (_this5.state.resizable) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "tlResizeHandle",
            onTouchStart: function onTouchStart(e) {
              return _this5.resizeUp(e);
            },
            onMouseDown: function onMouseDown(e) {
              return _this5.resizeUp(e);
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
            className: "fa fa-bars",
            "aria-hidden": "true"
          }));
        }
      }(), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__EventBase__["a" /* default */], {
        draggingDisplay: this.state.draggingDisplay,
        draggingDisplayTop: this.state.draggingDisplayTop,
        display: this.state.display,
        timeline: this.props.timeline,
        right: this.state.left + this.props.width
      }), function () {
        if (_this5.state.resizable) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "tlResizeHandle tlBottom",
            onTouchStart: function onTouchStart(e) {
              return _this5.resizeDown(e);
            },
            onMouseDown: function onMouseDown(e) {
              return _this5.resizeDown(e);
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
            className: "fa fa-bars",
            "aria-hidden": "true"
          }));
        }
      }()));
    }
  }, {
    key: "currentTimeSpan",
    get: function get() {
      return this.resizingTimeSpan || this.timeSpan;
    }
  }, {
    key: "nextPosition",
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
    key: "prevPosition",
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
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Event.defaultProps = {
  initialDisplay: [],
  vars: {}
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_dnd__["DragSource"])("Event", source, collect)(Event));

/***/ })
/******/ ]);
});