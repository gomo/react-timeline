(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("classnames"), require("prop-types")) : factory(root["React"], root["classNames"], root["PropTypes"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(20),
    getPrototype = __webpack_require__(64),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
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
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Time = __webpack_require__(19);

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

        if (startTime === undefined) {
            startTime = new _Time2.default();
        }
        if (endTime === undefined) {
            endTime = new _Time2.default();
        }
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
        key: 'shiftStartHour',
        value: function shiftStartHour(hour) {
            return this.shiftStartTime(new _Time2.default(hour, this._startTime.getMin()));
        }
    }, {
        key: 'shiftStartMin',
        value: function shiftStartMin(min) {
            return this.shiftStartTime(new _Time2.default(this._startTime.getHour(), min));
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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
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
    var timeout = runTimeout(cleanUpNextTick);
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
    runClearTimeout(timeout);
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
        runTimeout(drainQueue);
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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TimeSpan = __webpack_require__(3);

var _TimeSpan2 = _interopRequireDefault(_TimeSpan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ruler = function (_React$Component) {
  _inherits(Ruler, _React$Component);

  function Ruler(props) {
    _classCallCheck(this, Ruler);

    var _this = _possibleConstructorReturn(this, (Ruler.__proto__ || Object.getPrototypeOf(Ruler)).call(this, props));

    _this.state = {
      hours: []
    };
    _this.props.timeSpan.eachTime(function (key, time) {
      if (!time.equals(_this.props.timeSpan.getEndTime())) {
        var style = {
          //border1pxを足す
          height: (_this.props.minHeight + 1) * 4
        };
        _this.state.hours.push(_react2.default.createElement(
          'div',
          { key: time.getHour(), style: style },
          time.getDisplayHour()
        ));
      }
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

// Ruler.propTypes = {
//   minHeight: React.PropTypes.number.isRequired,
//   timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired
// }

exports.default = Ruler;
Ruler.width = 30;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(61);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

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
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.END_DRAG = exports.DROP = exports.HOVER = exports.PUBLISH_DRAG_SOURCE = exports.BEGIN_DRAG = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.beginDrag = beginDrag;
exports.publishDragSource = publishDragSource;
exports.hover = hover;
exports.drop = drop;
exports.endDrag = endDrag;

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

var _isArray = __webpack_require__(6);

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = __webpack_require__(23);

var _isObject2 = _interopRequireDefault(_isObject);

var _matchesType = __webpack_require__(39);

var _matchesType2 = _interopRequireDefault(_matchesType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BEGIN_DRAG = exports.BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
var PUBLISH_DRAG_SOURCE = exports.PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
var HOVER = exports.HOVER = 'dnd-core/HOVER';
var DROP = exports.DROP = 'dnd-core/DROP';
var END_DRAG = exports.END_DRAG = 'dnd-core/END_DRAG';

function beginDrag(sourceIds) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { publishSource: true, clientOffset: null };
  var publishSource = options.publishSource,
      clientOffset = options.clientOffset,
      getSourceClientOffset = options.getSourceClientOffset;

  (0, _invariant2.default)((0, _isArray2.default)(sourceIds), 'Expected sourceIds to be an array.');

  var monitor = this.getMonitor();
  var registry = this.getRegistry();
  (0, _invariant2.default)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');

  for (var i = 0; i < sourceIds.length; i++) {
    (0, _invariant2.default)(registry.getSource(sourceIds[i]), 'Expected sourceIds to be registered.');
  }

  var sourceId = null;
  for (var _i = sourceIds.length - 1; _i >= 0; _i--) {
    if (monitor.canDragSource(sourceIds[_i])) {
      sourceId = sourceIds[_i];
      break;
    }
  }
  if (sourceId === null) {
    return;
  }

  var sourceClientOffset = null;
  if (clientOffset) {
    (0, _invariant2.default)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
    sourceClientOffset = getSourceClientOffset(sourceId);
  }

  var source = registry.getSource(sourceId);
  var item = source.beginDrag(monitor, sourceId);
  (0, _invariant2.default)((0, _isObject2.default)(item), 'Item must be an object.');

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

function publishDragSource() {
  var monitor = this.getMonitor();
  if (!monitor.isDragging()) {
    return;
  }

  return { type: PUBLISH_DRAG_SOURCE };
}

function hover(targetIdsArg) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$clientOffset = _ref.clientOffset,
      clientOffset = _ref$clientOffset === undefined ? null : _ref$clientOffset;

  (0, _invariant2.default)((0, _isArray2.default)(targetIdsArg), 'Expected targetIds to be an array.');
  var targetIds = targetIdsArg.slice(0);

  var monitor = this.getMonitor();
  var registry = this.getRegistry();
  (0, _invariant2.default)(monitor.isDragging(), 'Cannot call hover while not dragging.');
  (0, _invariant2.default)(!monitor.didDrop(), 'Cannot call hover after drop.');

  // First check invariants.
  for (var i = 0; i < targetIds.length; i++) {
    var targetId = targetIds[i];
    (0, _invariant2.default)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');

    var target = registry.getTarget(targetId);
    (0, _invariant2.default)(target, 'Expected targetIds to be registered.');
  }

  var draggedItemType = monitor.getItemType();

  // Remove those targetIds that don't match the targetType.  This
  // fixes shallow isOver which would only be non-shallow because of
  // non-matching targets.
  for (var _i2 = targetIds.length - 1; _i2 >= 0; _i2--) {
    var _targetId = targetIds[_i2];
    var targetType = registry.getTargetType(_targetId);
    if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
      targetIds.splice(_i2, 1);
    }
  }

  // Finally call hover on all matching targets.
  for (var _i3 = 0; _i3 < targetIds.length; _i3++) {
    var _targetId2 = targetIds[_i3];
    var _target = registry.getTarget(_targetId2);
    _target.hover(monitor, _targetId2);
  }

  return {
    type: HOVER,
    targetIds: targetIds,
    clientOffset: clientOffset
  };
}

function drop() {
  var _this = this;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var monitor = this.getMonitor();
  var registry = this.getRegistry();
  (0, _invariant2.default)(monitor.isDragging(), 'Cannot call drop while not dragging.');
  (0, _invariant2.default)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');

  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);

  targetIds.reverse();
  targetIds.forEach(function (targetId, index) {
    var target = registry.getTarget(targetId);

    var dropResult = target.drop(monitor, targetId);
    (0, _invariant2.default)(typeof dropResult === 'undefined' || (0, _isObject2.default)(dropResult), 'Drop result must either be an object or undefined.');
    if (typeof dropResult === 'undefined') {
      dropResult = index === 0 ? {} : monitor.getDropResult();
    }

    _this.store.dispatch({
      type: DROP,
      dropResult: _extends({}, options, dropResult)
    });
  });
}

function endDrag() {
  var monitor = this.getMonitor();
  var registry = this.getRegistry();
  (0, _invariant2.default)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');

  var sourceId = monitor.getSourceId();
  var source = registry.getSource(sourceId, true);
  source.endDrag(monitor, sourceId);

  registry.unpinSource();

  return { type: END_DRAG };
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(13);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(77),
    getValue = __webpack_require__(81);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(89);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
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


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(95);

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


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSource = addSource;
exports.addTarget = addTarget;
exports.removeSource = removeSource;
exports.removeTarget = removeTarget;
var ADD_SOURCE = exports.ADD_SOURCE = 'dnd-core/ADD_SOURCE';
var ADD_TARGET = exports.ADD_TARGET = 'dnd-core/ADD_TARGET';
var REMOVE_SOURCE = exports.REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
var REMOVE_TARGET = exports.REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';

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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkDecoratorArguments;
function checkDecoratorArguments(functionName, signature) {
  if (process.env.NODE_ENV !== 'production') {
    for (var i = 0; i < (arguments.length <= 2 ? 0 : arguments.length - 2); i += 1) {
      var arg = arguments.length <= i + 2 ? undefined : arguments[i + 2];
      if (arg && arg.prototype && arg.prototype.render) {
        console.error( // eslint-disable-line no-console
        'You seem to be applying the arguments in the wrong order. ' + ('It should be ' + functionName + '(' + signature + ')(Component), not the other way around. ') + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
        return;
      }
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TimeSpan = __webpack_require__(3);

var _TimeSpan2 = _interopRequireDefault(_TimeSpan);

var _Frame = __webpack_require__(56);

var _Frame2 = _interopRequireDefault(_Frame);

var _Ruler = __webpack_require__(7);

var _Ruler2 = _interopRequireDefault(_Ruler);

var _Line = __webpack_require__(34);

var _Line2 = _interopRequireDefault(_Line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timeline = function (_React$Component) {
  _inherits(Timeline, _React$Component);

  function Timeline(props) {
    _classCallCheck(this, Timeline);

    var _this = _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call(this, props));

    _this.timeSpan = _this.props.timeSpan;

    //minViewがいくつあるかカウント。minViewは15分おき。それを元に高さを計算。border分1px足す
    _this.lineHeight = _this.timeSpan.getDistance() / 15 * (_this.props.minHeight + 1);

    //1分あたりの高さを算出
    _this.perMinHeight = _this.lineHeight / _this.timeSpan.getDistance();

    _this.lineWidth = props.lineWidth;

    _this.createdEventId = 0;
    _this.draggingOverLineComponent = null;

    _this.frameComponent = undefined;
    _this.eventComponents = [];
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
    key: 'clearDraggingOver',
    value: function clearDraggingOver() {
      if (this.draggingOverLineComponent) {
        this.draggingOverLineComponent.clearDraggingOver();
      }
    }
  }, {
    key: 'getTotalWidth',
    value: function getTotalWidth() {
      var _this2 = this;

      return this.props.lineData.reduce(function (val, data, index) {
        var hasRuler = index % _this2.props.rulerInterval === 0;
        return val + (hasRuler ? _this2.lineWidth + _Ruler2.default.width : _this2.lineWidth);
      }, 0);
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
      for (var i = 0; i < this.props.lineData.length; i++) {
        var lineData = this.props.lineData[i];
        var hasRuler = i % this.props.rulerInterval === 0;
        if (hasRuler) {
          left += _Ruler2.default.width;
        }

        if (lineData.id == lineId) {
          break;
        }

        left += this.props.lineWidth;
      }

      left += _Line2.default.sidePadding;

      return left;
    }
  }, {
    key: 'getTimeSpan',
    value: function getTimeSpan(top, height) {
      var startTime = this.topToTime(top);

      var endTime = startTime.addMin(height / this.perMinHeight);
      return new _TimeSpan2.default(startTime, endTime);
    }
  }, {
    key: 'minuteToHeight',
    value: function minuteToHeight(minute) {
      return minute * this.perMinHeight - 1;
    }
  }, {
    key: 'timeSpanToHeight',
    value: function timeSpanToHeight(timeSpan) {
      return this.minuteToHeight(timeSpan.getDistance());
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
      return this.findNextEventByTime(eventComponent.lineId, eventComponent.currentTimeSpan.getEndTime());
    }
  }, {
    key: 'findNextEventByTime',
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
    key: 'getEventsOnLine',
    value: function getEventsOnLine(lineId) {
      return this.eventComponents.filter(function (ev) {
        return !ev.state.draggable && ev.lineId == lineId;
      });
    }
  }, {
    key: 'getNextTime',
    value: function getNextTime(lineId, time) {
      var nextEvent = this.findNextEventByTime(lineId, time);
      var nextTime = void 0;
      if (nextEvent) {
        nextTime = nextEvent.currentTimeSpan.getStartTime();
      } else {
        nextTime = this.timeSpan.getEndTime();
      }

      return nextTime;
    }
  }, {
    key: 'getFreeMinute',
    value: function getFreeMinute(lineId, time) {
      var nextTime = this.getNextTime(lineId, time);
      return time.getDistance(nextTime);
    }
  }, {
    key: 'getNextTop',
    value: function getNextTop(eventComponent) {
      return this.timeToTop(this.getNextTime(eventComponent.lineId, eventComponent.currentTimeSpan.getEndTime()));
    }
  }, {
    key: 'addEvents',
    value: function addEvents(events) {
      return this.frameComponent.addEvents(events);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      this.frameComponent.setHeight(height);
    }
  }, {
    key: 'removeEvent',
    value: function removeEvent(eventId) {
      return this.frameComponent.removeEvent(eventId);
    }
  }, {
    key: 'updateEvents',
    value: function updateEvents(callback) {
      this.frameComponent.updateEvents(callback);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Frame2.default, {
        ref: 'frame',
        lineData: this.props.lineData,
        timeSpan: this.props.timeSpan,
        lineWidth: this.props.lineWidth,
        minHeight: this.props.minHeight,
        height: this.props.height,
        width: this.props.width,
        lineHeight: this.lineHeight,
        timeline: this,
        rulerInterval: this.props.rulerInterval,
        initialEvents: this.props.initialEvents,
        children: this.props.children,
        childWidth: this.props.childWidth
      });
    }
  }, {
    key: 'lineComponents',
    get: function get() {
      var lines = [];
      for (var key in this.frameComponent.refs) {
        if (key.indexOf("line@") === 0) {
          lines.push(this.frameComponent.refs[key]);
        }
      }

      return lines;
    }
  }]);

  return Timeline;
}(_react2.default.Component);

// Timeline.propTypes = {
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

exports.default = Timeline;
Timeline.defaultProps = {
  minInterval: 1,
  childWidth: 0
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(21),
    getRawTag = __webpack_require__(62),
    objectToString = __webpack_require__(63);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(9);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
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
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(73),
    setCacheAdd = __webpack_require__(99),
    setCacheHas = __webpack_require__(100);

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
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(101);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
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


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(43),
    overRest = __webpack_require__(105),
    setToString = __webpack_require__(107);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(112),
    isObjectLike = __webpack_require__(10);

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


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowEqual;
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
  for (var i = 0; i < keysA.length; i += 1) {
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

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = isDisposable;

function isDisposable(obj) {
  return Boolean(obj && typeof obj.dispose === 'function');
}

module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TimeSpan = __webpack_require__(3);

var _TimeSpan2 = _interopRequireDefault(_TimeSpan);

var _Hour = __webpack_require__(57);

var _Hour2 = _interopRequireDefault(_Hour);

var _Ruler = __webpack_require__(7);

var _Ruler2 = _interopRequireDefault(_Ruler);

var _LineLabel = __webpack_require__(35);

var _LineLabel2 = _interopRequireDefault(_LineLabel);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _Timeline = __webpack_require__(18);

var _Timeline2 = _interopRequireDefault(_Timeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_React$Component) {
  _inherits(Line, _React$Component);

  function Line(props) {
    _classCallCheck(this, Line);

    var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, props));

    _this.state = {
      hours: [],
      events: [],
      draggingOver: false
    };
    _this.props.timeSpan.eachTime(function (key, time) {
      if (!time.equals(_this.props.timeSpan.getEndTime())) {
        _this.state.hours.push(_react2.default.createElement(_Hour2.default, {
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
    key: 'getRelativeTop',
    value: function getRelativeTop(e) {
      var parentElement = this.props.frame.refs.linesWrapper;
      var parentRect = parentElement.getBoundingClientRect();
      return e.clientY - parentRect.top + parentElement.scrollTop;
    }
  }, {
    key: 'onClick',
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
    key: 'onContextMenu',
    value: function onContextMenu(e) {
      if (this.props.timeline.props.lineDidRightClick) {
        this.props.timeline.props.lineDidRightClick({
          event: e,
          component: this
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
        { onContextMenu: function onContextMenu(e) {
            return _this2.onContextMenu(e);
          } },
        function () {
          if (_this2.props.hasRuler) {
            return _react2.default.createElement(_Ruler2.default, {
              key: 'ruler_' + _this2.props.id,
              minHeight: _this2.props.minHeight,
              timeSpan: _this2.props.timeSpan
            });
          }
        }(),
        _react2.default.createElement(
          'div',
          { onClick: function onClick(e) {
              return _this2.onClick(e);
            }, className: (0, _classnames2.default)('tlLineView', { tlEven: this.props.even, tlOdd: !this.props.even }, { tlOver: this.state.draggingOver }), style: { width: this.props.width + 'px' } },
          this.state.hours
        )
      );
    }
  }]);

  return Line;
}(_react2.default.Component);

exports.default = Line;


Line.sidePadding = 1;

// Line.propTypes = {
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Ruler = __webpack_require__(7);

var _Ruler2 = _interopRequireDefault(_Ruler);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineLabel = function (_React$Component) {
  _inherits(LineLabel, _React$Component);

  function LineLabel(props) {
    _classCallCheck(this, LineLabel);

    var _this = _possibleConstructorReturn(this, (LineLabel.__proto__ || Object.getPrototypeOf(LineLabel)).call(this, props));

    _this.state = {
      hasRuler: _this.props.hasRuler,
      prevRuler: _this.props.prevRuler,
      isLast: true
    };
    return _this;
  }

  _createClass(LineLabel, [{
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

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DragDropContext = __webpack_require__(37);

Object.defineProperty(exports, 'DragDropContext', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragDropContext).default;
  }
});

var _DragDropContextProvider = __webpack_require__(138);

Object.defineProperty(exports, 'DragDropContextProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragDropContextProvider).default;
  }
});

var _DragLayer = __webpack_require__(47);

Object.defineProperty(exports, 'DragLayer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragLayer).default;
  }
});

var _DragSource = __webpack_require__(139);

Object.defineProperty(exports, 'DragSource', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragSource).default;
  }
});

var _DropTarget = __webpack_require__(149);

Object.defineProperty(exports, 'DropTarget', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DropTarget).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unpackBackendForEs5Users = exports.createChildContext = exports.CHILD_CONTEXT_TYPES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = DragDropContext;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dndCore = __webpack_require__(58);

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

var _hoistNonReactStatics = __webpack_require__(31);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _checkDecoratorArguments = __webpack_require__(17);

var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CHILD_CONTEXT_TYPES = exports.CHILD_CONTEXT_TYPES = {
  dragDropManager: _propTypes2.default.object.isRequired
};

var createChildContext = exports.createChildContext = function createChildContext(backend, context) {
  return {
    dragDropManager: new _dndCore.DragDropManager(backend, context)
  };
};

var unpackBackendForEs5Users = exports.unpackBackendForEs5Users = function unpackBackendForEs5Users(backendOrModule) {
  // Auto-detect ES6 default export for people still using ES5
  var backend = backendOrModule;
  if ((typeof backend === 'undefined' ? 'undefined' : _typeof(backend)) === 'object' && typeof backend.default === 'function') {
    backend = backend.default;
  }
  (0, _invariant2.default)(typeof backend === 'function', 'Expected the backend to be a function or an ES6 module exporting a default function. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-drop-context.html');
  return backend;
};

function DragDropContext(backendOrModule) {
  _checkDecoratorArguments2.default.apply(undefined, ['DragDropContext', 'backend'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params

  var backend = unpackBackendForEs5Users(backendOrModule);
  var childContext = createChildContext(backend);

  return function decorateContext(DecoratedComponent) {
    var _class, _temp;

    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

    var DragDropContextContainer = (_temp = _class = function (_Component) {
      _inherits(DragDropContextContainer, _Component);

      function DragDropContextContainer() {
        _classCallCheck(this, DragDropContextContainer);

        return _possibleConstructorReturn(this, (DragDropContextContainer.__proto__ || Object.getPrototypeOf(DragDropContextContainer)).apply(this, arguments));
      }

      _createClass(DragDropContextContainer, [{
        key: 'getDecoratedComponentInstance',
        value: function getDecoratedComponentInstance() {
          (0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can ' + 'not be a stateless component.');
          return this.child;
        }
      }, {
        key: 'getManager',
        value: function getManager() {
          return childContext.dragDropManager;
        }
      }, {
        key: 'getChildContext',
        value: function getChildContext() {
          return childContext;
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, {
            ref: function ref(child) {
              return _this2.child = child;
            }
          }));
        }
      }]);

      return DragDropContextContainer;
    }(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = 'DragDropContext(' + displayName + ')', _class.childContextTypes = CHILD_CONTEXT_TYPES, _temp);


    return (0, _hoistNonReactStatics2.default)(DragDropContextContainer, DecoratedComponent);
  };
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = dragOffset;
exports.getSourceClientOffset = getSourceClientOffset;
exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;

var _dragDrop = __webpack_require__(11);

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

function dragOffset() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _dragDrop.BEGIN_DRAG:
      return {
        initialSourceClientOffset: action.sourceClientOffset,
        initialClientOffset: action.clientOffset,
        clientOffset: action.clientOffset
      };
    case _dragDrop.HOVER:
      if (areOffsetsEqual(state.clientOffset, action.clientOffset)) {
        return state;
      }
      return _extends({}, state, {
        clientOffset: action.clientOffset
      });
    case _dragDrop.END_DRAG:
    case _dragDrop.DROP:
      return initialState;
    default:
      return state;
  }
}

function getSourceClientOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset,
      initialSourceClientOffset = state.initialSourceClientOffset;

  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }
  return {
    x: clientOffset.x + initialSourceClientOffset.x - initialClientOffset.x,
    y: clientOffset.y + initialSourceClientOffset.y - initialClientOffset.y
  };
}

function getDifferenceFromInitialOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset;

  if (!clientOffset || !initialClientOffset) {
    return null;
  }
  return {
    x: clientOffset.x - initialClientOffset.x,
    y: clientOffset.y - initialClientOffset.y
  };
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matchesType;

var _isArray = __webpack_require__(6);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matchesType(targetType, draggedItemType) {
  if ((0, _isArray2.default)(targetType)) {
    return targetType.some(function (t) {
      return t === draggedItemType;
    });
  } else {
    return targetType === draggedItemType;
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(24),
    arrayIncludes = __webpack_require__(25),
    arrayIncludesWith = __webpack_require__(26),
    arrayMap = __webpack_require__(27),
    baseUnary = __webpack_require__(42),
    cacheHas = __webpack_require__(28);

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
        computed = iteratee == null ? value : iteratee(value);

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


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(20),
    isObject = __webpack_require__(23);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
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


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dirtyHandlerIds;
exports.areDirty = areDirty;

var _xor = __webpack_require__(115);

var _xor2 = _interopRequireDefault(_xor);

var _intersection = __webpack_require__(126);

var _intersection2 = _interopRequireDefault(_intersection);

var _dragDrop = __webpack_require__(11);

var _registry = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NONE = [];
var ALL = [];

function dirtyHandlerIds() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NONE;
  var action = arguments[1];
  var dragOperation = arguments[2];

  switch (action.type) {
    case _dragDrop.HOVER:
      break;
    case _registry.ADD_SOURCE:
    case _registry.ADD_TARGET:
    case _registry.REMOVE_TARGET:
    case _registry.REMOVE_SOURCE:
      return NONE;
    case _dragDrop.BEGIN_DRAG:
    case _dragDrop.PUBLISH_DRAG_SOURCE:
    case _dragDrop.END_DRAG:
    case _dragDrop.DROP:
    default:
      return ALL;
  }

  var targetIds = action.targetIds;
  var prevTargetIds = dragOperation.targetIds;

  var result = (0, _xor2.default)(targetIds, prevTargetIds);

  var didChange = false;
  if (result.length === 0) {
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
      result.push(prevInnermostTargetId);
    }
    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }

  return result;
}

function areDirty(state, handlerIds) {
  if (state === NONE) {
    return false;
  }

  if (state === ALL || typeof handlerIds === 'undefined') {
    return true;
  }

  return (0, _intersection2.default)(handlerIds, state).length > 0;
}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

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


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = DragLayer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(31);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _isPlainObject = __webpack_require__(2);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

var _shallowEqual = __webpack_require__(32);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _shallowEqualScalar = __webpack_require__(48);

var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

var _checkDecoratorArguments = __webpack_require__(17);

var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DragLayer(collect) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _checkDecoratorArguments2.default.apply(undefined, ['DragLayer', 'collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
  (0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer ' + 'to be a function that collects props to inject into the component. ', 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', collect);
  (0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the second argument to DragLayer to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', options);

  return function decorateLayer(DecoratedComponent) {
    var _class, _temp;

    var _options$arePropsEqua = options.arePropsEqual,
        arePropsEqual = _options$arePropsEqua === undefined ? _shallowEqualScalar2.default : _options$arePropsEqua;

    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

    var DragLayerContainer = (_temp = _class = function (_Component) {
      _inherits(DragLayerContainer, _Component);

      _createClass(DragLayerContainer, [{
        key: 'getDecoratedComponentInstance',
        value: function getDecoratedComponentInstance() {
          (0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can ' + 'not be a stateless component.');
          return this.child;
        }
      }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
          return !arePropsEqual(nextProps, this.props) || !(0, _shallowEqual2.default)(nextState, this.state);
        }
      }]);

      function DragLayerContainer(props, context) {
        _classCallCheck(this, DragLayerContainer);

        var _this = _possibleConstructorReturn(this, (DragLayerContainer.__proto__ || Object.getPrototypeOf(DragLayerContainer)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);

        _this.manager = context.dragDropManager;
        (0, _invariant2.default)(_typeof(_this.manager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

        _this.state = _this.getCurrentState();
        return _this;
      }

      _createClass(DragLayerContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.isCurrentlyMounted = true;

          var monitor = this.manager.getMonitor();
          this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
          this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);

          this.handleChange();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.isCurrentlyMounted = false;

          this.unsubscribeFromOffsetChange();
          this.unsubscribeFromStateChange();
        }
      }, {
        key: 'handleChange',
        value: function handleChange() {
          if (!this.isCurrentlyMounted) {
            return;
          }

          var nextState = this.getCurrentState();
          if (!(0, _shallowEqual2.default)(nextState, this.state)) {
            this.setState(nextState);
          }
        }
      }, {
        key: 'getCurrentState',
        value: function getCurrentState() {
          var monitor = this.manager.getMonitor();
          return collect(monitor);
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, this.state, {
            ref: function ref(child) {
              return _this2.child = child;
            }
          }));
        }
      }]);

      return DragLayerContainer;
    }(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = 'DragLayer(' + displayName + ')', _class.contextTypes = {
      dragDropManager: _propTypes2.default.object.isRequired
    }, _temp);


    return (0, _hoistNonReactStatics2.default)(DragLayerContainer, DecoratedComponent);
  };
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = shallowEqualScalar;
function shallowEqualScalar(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i += 1) {
    if (!hasOwn.call(objB, keysA[i])) {
      return false;
    }

    var valA = objA[keysA[i]];
    var valB = objB[keysA[i]];

    if (valA !== valB || (typeof valA === 'undefined' ? 'undefined' : _typeof(valA)) === 'object' || (typeof valB === 'undefined' ? 'undefined' : _typeof(valB)) === 'object') {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = decorateHandler;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _disposables = __webpack_require__(140);

var _isPlainObject = __webpack_require__(2);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

var _hoistNonReactStatics = __webpack_require__(31);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _shallowEqual = __webpack_require__(32);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _shallowEqualScalar = __webpack_require__(48);

var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function decorateHandler(_ref) {
  var _class, _temp;

  var DecoratedComponent = _ref.DecoratedComponent,
      createHandler = _ref.createHandler,
      createMonitor = _ref.createMonitor,
      createConnector = _ref.createConnector,
      registerHandler = _ref.registerHandler,
      containerDisplayName = _ref.containerDisplayName,
      getType = _ref.getType,
      collect = _ref.collect,
      options = _ref.options;
  var _options$arePropsEqua = options.arePropsEqual,
      arePropsEqual = _options$arePropsEqua === undefined ? _shallowEqualScalar2.default : _options$arePropsEqua;

  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

  var DragDropContainer = (_temp = _class = function (_Component) {
    _inherits(DragDropContainer, _Component);

    _createClass(DragDropContainer, [{
      key: 'getHandlerId',
      value: function getHandlerId() {
        return this.handlerId;
      }
    }, {
      key: 'getDecoratedComponentInstance',
      value: function getDecoratedComponentInstance() {
        return this.decoratedComponentInstance;
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        return !arePropsEqual(nextProps, this.props) || !(0, _shallowEqual2.default)(nextState, this.state);
      }
    }]);

    function DragDropContainer(props, context) {
      _classCallCheck(this, DragDropContainer);

      var _this = _possibleConstructorReturn(this, (DragDropContainer.__proto__ || Object.getPrototypeOf(DragDropContainer)).call(this, props, context));

      _this.handleChange = _this.handleChange.bind(_this);
      _this.handleChildRef = _this.handleChildRef.bind(_this);

      (0, _invariant2.default)(_typeof(_this.context.dragDropManager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

      _this.manager = _this.context.dragDropManager;
      _this.handlerMonitor = createMonitor(_this.manager);
      _this.handlerConnector = createConnector(_this.manager.getBackend());
      _this.handler = createHandler(_this.handlerMonitor);

      _this.disposable = new _disposables.SerialDisposable();
      _this.receiveProps(props);
      _this.state = _this.getCurrentState();
      _this.dispose();
      return _this;
    }

    _createClass(DragDropContainer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.isCurrentlyMounted = true;
        this.disposable = new _disposables.SerialDisposable();
        this.currentType = null;
        this.receiveProps(this.props);
        this.handleChange();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (!arePropsEqual(nextProps, this.props)) {
          this.receiveProps(nextProps);
          this.handleChange();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.dispose();
        this.isCurrentlyMounted = false;
      }
    }, {
      key: 'receiveProps',
      value: function receiveProps(props) {
        this.handler.receiveProps(props);
        this.receiveType(getType(props));
      }
    }, {
      key: 'receiveType',
      value: function receiveType(type) {
        if (type === this.currentType) {
          return;
        }

        this.currentType = type;

        var _registerHandler = registerHandler(type, this.handler, this.manager),
            handlerId = _registerHandler.handlerId,
            unregister = _registerHandler.unregister;

        this.handlerId = handlerId;
        this.handlerMonitor.receiveHandlerId(handlerId);
        this.handlerConnector.receiveHandlerId(handlerId);

        var globalMonitor = this.manager.getMonitor();
        var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });

        this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unsubscribe), new _disposables.Disposable(unregister)));
      }
    }, {
      key: 'handleChange',
      value: function handleChange() {
        if (!this.isCurrentlyMounted) {
          return;
        }

        var nextState = this.getCurrentState();
        if (!(0, _shallowEqual2.default)(nextState, this.state)) {
          this.setState(nextState);
        }
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        this.disposable.dispose();
        this.handlerConnector.receiveHandlerId(null);
      }
    }, {
      key: 'handleChildRef',
      value: function handleChildRef(component) {
        this.decoratedComponentInstance = component;
        this.handler.receiveComponent(component);
      }
    }, {
      key: 'getCurrentState',
      value: function getCurrentState() {
        var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);

        if (process.env.NODE_ENV !== 'production') {
          (0, _invariant2.default)((0, _isPlainObject2.default)(nextState), 'Expected `collect` specified as the second argument to ' + '%s for %s to return a plain object of props to inject. ' + 'Instead, received %s.', containerDisplayName, displayName, nextState);
        }

        return nextState;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, this.state, {
          ref: this.handleChildRef
        }));
      }
    }]);

    return DragDropContainer;
  }(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = containerDisplayName + '(' + displayName + ')', _class.contextTypes = {
    dragDropManager: _propTypes2.default.object.isRequired
  }, _temp);


  return (0, _hoistNonReactStatics2.default)(DragDropContainer, DecoratedComponent);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapConnectorHooks;

var _react = __webpack_require__(0);

var _cloneWithRef = __webpack_require__(148);

var _cloneWithRef2 = _interopRequireDefault(_cloneWithRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function throwIfCompositeComponentElement(element) {
  // Custom components can no longer be wrapped directly in React DnD 2.0
  // so that we don't need to depend on findDOMNode() from react-dom.
  if (typeof element.type === 'string') {
    return;
  }

  var displayName = element.type.displayName || element.type.name || 'the component';

  throw new Error('Only native element nodes can now be passed to React DnD connectors.' + ('You can either wrap ' + displayName + ' into a <div>, or turn it into a ') + 'drag source or a drop target itself.');
}

function wrapHookToRecognizeElement(hook) {
  return function () {
    var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    // When passed a node, call the hook straight away.
    if (!(0, _react.isValidElement)(elementOrNode)) {
      var node = elementOrNode;
      hook(node, options);
      return undefined;
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

    return (0, _cloneWithRef2.default)(element, ref);
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

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = areOptionsEqual;

var _shallowEqual = __webpack_require__(32);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function areOptionsEqual(nextOptions, currentOptions) {
  if (currentOptions === nextOptions) {
    return true;
  }

  return currentOptions !== null && nextOptions !== null && (0, _shallowEqual2.default)(currentOptions, nextOptions);
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
       value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isValidType;

var _isArray = __webpack_require__(6);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidType(type, allowArray) {
       return typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol' || allowArray && (0, _isArray2.default)(type) && type.every(function (t) {
              return isValidType(t, false);
       });
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventBase = function (_React$Component) {
  _inherits(EventBase, _React$Component);

  function EventBase() {
    _classCallCheck(this, EventBase);

    return _possibleConstructorReturn(this, (EventBase.__proto__ || Object.getPrototypeOf(EventBase)).apply(this, arguments));
  }

  _createClass(EventBase, [{
    key: 'renderDisplay',
    value: function renderDisplay(row) {
      if (!row.value) {
        return null;
      }

      var className = (0, _classnames2.default)('tlEventDisplayRow', row.key);
      if (Array.isArray(row.value)) {
        if (row.value.length === 0) {
          return null;
        }

        return _react2.default.createElement(
          'div',
          { className: className, key: row.key },
          row.value.map(function (val, key) {
            return _react2.default.createElement(
              'div',
              { key: key, className: 'item' },
              val
            );
          })
        );
      }

      return _react2.default.createElement(
        'div',
        { className: className, key: row.key },
        row.value
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var displayPosition = 'right';

      if (this.refs.base) {
        var wrapper = (0, _utils.closest)(this.refs.base, '.linesFrame');
        var wrapperRect = wrapper.getBoundingClientRect();
        var wrapperRightSide = wrapperRect.left + wrapperRect.width;

        var previewRect = this.refs.base.getBoundingClientRect();
        var previewRightSide = previewRect.left + previewRect.width;
        if (wrapperRightSide < previewRightSide + 70) {
          displayPosition = 'left';
        }
      }
      return _react2.default.createElement(
        'div',
        { ref: 'base', style: { height: '100%' } },
        function () {
          if (_this2.props.draggingDisplay) {
            return _react2.default.createElement(
              'div',
              { className: (0, _classnames2.default)('tlDraggingDisplay', displayPosition), style: { top: _this2.props.draggingDisplayTop } },
              _this2.props.draggingDisplay
            );
          }
        }(),
        _react2.default.createElement(
          'div',
          { className: 'tlEventDisplay' },
          this.props.display.map(function (row) {
            return _this2.renderDisplay(row);
          })
        ),
        '\xA0'
      );
    }
  }]);

  return EventBase;
}(_react2.default.Component);

exports.default = EventBase;


EventBase.defaultProps = { display: [] };

/***/ }),
/* 54 */
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeSpan = exports.Time = exports.Timeline = undefined;

var _Timeline = __webpack_require__(18);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _Time = __webpack_require__(19);

var _Time2 = _interopRequireDefault(_Time);

var _TimeSpan = __webpack_require__(3);

var _TimeSpan2 = _interopRequireDefault(_TimeSpan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Timeline = _Timeline2.default;
exports.Time = _Time2.default;
exports.TimeSpan = _TimeSpan2.default;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TimeSpan = __webpack_require__(3);

var _TimeSpan2 = _interopRequireDefault(_TimeSpan);

var _Line = __webpack_require__(34);

var _Line2 = _interopRequireDefault(_Line);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDnd = __webpack_require__(36);

var _reactDndTouchBackend = __webpack_require__(154);

var _reactDndTouchBackend2 = _interopRequireDefault(_reactDndTouchBackend);

var _EventPreview = __webpack_require__(156);

var _EventPreview2 = _interopRequireDefault(_EventPreview);

var _Event = __webpack_require__(158);

var _Event2 = _interopRequireDefault(_Event);

var _Ruler = __webpack_require__(7);

var _Ruler2 = _interopRequireDefault(_Ruler);

var _LineLabel = __webpack_require__(35);

var _LineLabel2 = _interopRequireDefault(_LineLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      var lineComponent = props.timeline.draggingOver(clientOffset.x - lineWrapperBounds.left + item.draggingComponent.props.width / 2 /*eventの真ん中を基準にする*/);
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

var Frame = function (_React$Component) {
  _inherits(Frame, _React$Component);

  function Frame(props) {
    _classCallCheck(this, Frame);

    var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, props));

    var rulerInterval = 4;

    _this.state = {
      minWidth: 0,
      events: _this.props.initialEvents || []
    };

    _this.resizingEvent = null;
    _this.element = null;
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
    key: 'removeEvent',
    value: function removeEvent(eventId) {
      var _this4 = this;

      return new Promise(function (resolve) {
        _this4.setState({ events: _this4.state.events.filter(function (ev) {
            return ev.id != eventId;
          }) }, resolve);
      });
    }
  }, {
    key: 'updateEvents',
    value: function updateEvents(callback) {
      this.setState({ events: callback(this.state.events) });
    }
  }, {
    key: 'addEvents',
    value: function addEvents(events) {
      var _this5 = this;

      return new Promise(function (resolve) {
        var current = [].concat(_toConsumableArray(_this5.state.events));
        var eventIds = [];
        events.forEach(function (event) {
          if (!event.id) {
            event.id = _this5.props.timeline.createEventId();
          }
          eventIds.push(event.id);
          current.push(event);
        });
        _this5.setState({ events: current }, function () {
          var results = _this5.props.timeline.eventComponents.filter(function (eventComponent) {
            return eventIds.indexOf(eventComponent.props.id) !== -1;
          });
          resolve(results);
        });
      });
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.timeline.frameComponent = this;
      this.setState({
        minWidth: this.props.timeline.getTotalWidth()
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var newState = {};
      //イベントは数が多いので走査を最小限にするためstateにしたが、timelineを丸っと読み込み直すのに対応するためチェック。
      //イベントを変更するときは基本timelineの関数経由で行い、全て読み込み直す時だけinitialEventsを変更する。
      if (nextProps.initialEvents !== this.props.initialEvents) {
        newState.events = nextProps.initialEvents;
      }

      if (nextProps.lineData !== this.props.lineData) {
        newState.minWidth = this.props.timeline.getTotalWidth();
      }

      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var connectDropTarget = this.props.connectDropTarget;

      return _react2.default.createElement(
        'div',
        { ref: function ref(elem) {
            return _this6.element = elem;
          }, className: 'tlFrameView scrollWrapper', style: { width: this.props.width, overflowX: 'auto' } },
        _react2.default.createElement(
          'div',
          { style: { minWidth: this.state.minWidth + this.props.childWidth, display: "flex" } },
          function () {
            return connectDropTarget(_react2.default.createElement(
              'div',
              { className: 'linesFrame', style: { width: _this6.state.minWidth, overflow: 'hidden' } },
              _react2.default.createElement(
                'div',
                { style: { width: _this6.state.minWidth + 20 } },
                _react2.default.createElement(
                  'div',
                  { className: 'tlLabelView', style: { height: _LineLabel2.default.height } },
                  _this6.props.lineData.map(function (data, key) {
                    var hasRuler = key % _this6.props.rulerInterval === 0;
                    var prevRuler = (key + 1) % _this6.props.rulerInterval === 0;
                    return _react2.default.createElement(_LineLabel2.default, {
                      key: data.id + "@" + key,
                      width: _this6.props.lineWidth,
                      hasRuler: hasRuler,
                      prevRuler: prevRuler,
                      label: data.label,
                      timeline: _this6.props.timeline
                    });
                  })
                ),
                _react2.default.createElement(
                  'div',
                  { ref: 'linesWrapper', className: 'tlLinesWrapper scrollWrapper', style: { height: _this6.props.height - _LineLabel2.default.height } },
                  _react2.default.createElement(
                    'div',
                    { style: { height: _this6.props.lineHeight, overflowY: "hidden", position: "relative" } },
                    _this6.props.lineData.map(function (data, key) {
                      var hasRuler = key % _this6.props.rulerInterval === 0;
                      var prevRuler = (key + 1) % _this6.props.rulerInterval === 0;
                      return _react2.default.createElement(_Line2.default, {
                        ref: "line@" + data.id,
                        hasRuler: hasRuler,
                        key: data.id + "@" + key,
                        id: data.id,
                        width: _this6.props.lineWidth,
                        minHeight: _this6.props.minHeight,
                        timeSpan: _this6.props.timeSpan,
                        even: key % 2 === 0,
                        timeline: _this6.props.timeline,
                        vars: data.vars,
                        frame: _this6
                      });
                    }),
                    _this6.state.events.map(function (event) {
                      return _react2.default.createElement(_Event2.default, {
                        ref: "event@" + event.id,
                        key: event.key || event.id,
                        id: event.id,
                        color: event.color,
                        timeSpan: event.timeSpan,
                        display: event.display,
                        lineId: event.lineId,
                        timeline: _this6.props.timeline,
                        width: _this6.props.timeline.props.lineWidth - 2 - _Line2.default.sidePadding * 2,
                        vars: event.vars,
                        float: event.float
                      });
                    })
                  ),
                  _react2.default.createElement(_EventPreview2.default, null)
                )
              )
            ));
          }(),
          _react2.default.createElement(
            'div',
            null,
            this.props.children
          )
        )
      );
    }
  }]);

  return Frame;
}(_react2.default.Component);

// Frame.propTypes = {
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

exports.default = (0, _reactDnd.DragDropContext)((0, _reactDndTouchBackend2.default)({ enableMouseEvents: true }))((0, _reactDnd.DropTarget)("Event", target, collect)(Frame));

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Time = __webpack_require__(19);

var _Time2 = _interopRequireDefault(_Time);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hour = function (_React$Component) {
  _inherits(Hour, _React$Component);

  function Hour(props) {
    _classCallCheck(this, Hour);

    var _this = _possibleConstructorReturn(this, (Hour.__proto__ || Object.getPrototypeOf(Hour)).call(this, props));

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
        '\xA0'
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

// Hour.propTypes = {
//   minHeight: React.PropTypes.number.isRequired,
//   time: React.PropTypes.instanceOf(Time).isRequired
// }


exports.default = Hour;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DragDropManager = __webpack_require__(59);

Object.defineProperty(exports, 'DragDropManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragDropManager).default;
  }
});

var _DragSource = __webpack_require__(135);

Object.defineProperty(exports, 'DragSource', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragSource).default;
  }
});

var _DropTarget = __webpack_require__(136);

Object.defineProperty(exports, 'DropTarget', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DropTarget).default;
  }
});

var _createTestBackend = __webpack_require__(137);

Object.defineProperty(exports, 'createTestBackend', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createTestBackend).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createStore = __webpack_require__(60);

var _createStore2 = _interopRequireDefault(_createStore);

var _reducers = __webpack_require__(70);

var _reducers2 = _interopRequireDefault(_reducers);

var _dragDrop = __webpack_require__(11);

var dragDropActions = _interopRequireWildcard(_dragDrop);

var _DragDropMonitor = __webpack_require__(130);

var _DragDropMonitor2 = _interopRequireDefault(_DragDropMonitor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragDropManager = function () {
  function DragDropManager(createBackend) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, DragDropManager);

    var store = (0, _createStore2.default)(_reducers2.default);
    this.context = context;
    this.store = store;
    this.monitor = new _DragDropMonitor2.default(store);
    this.registry = this.monitor.registry;
    this.backend = createBackend(this);

    store.subscribe(this.handleRefCountChange.bind(this));
  }

  _createClass(DragDropManager, [{
    key: 'handleRefCountChange',
    value: function handleRefCountChange() {
      var shouldSetUp = this.store.getState().refCount > 0;
      if (shouldSetUp && !this.isSetUp) {
        this.backend.setup();
        this.isSetUp = true;
      } else if (!shouldSetUp && this.isSetUp) {
        this.backend.teardown();
        this.isSetUp = false;
      }
    }
  }, {
    key: 'getContext',
    value: function getContext() {
      return this.context;
    }
  }, {
    key: 'getMonitor',
    value: function getMonitor() {
      return this.monitor;
    }
  }, {
    key: 'getBackend',
    value: function getBackend() {
      return this.backend;
    }
  }, {
    key: 'getRegistry',
    value: function getRegistry() {
      return this.registry;
    }
  }, {
    key: 'getActions',
    value: function getActions() {
      var manager = this;
      var dispatch = this.store.dispatch;


      function bindActionCreator(actionCreator) {
        return function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var action = actionCreator.apply(manager, args);
          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }

      return Object.keys(dragDropActions).filter(function (key) {
        return typeof dragDropActions[key] === 'function';
      }).reduce(function (boundActions, key) {
        var action = dragDropActions[key];
        boundActions[key] = bindActionCreator(action); // eslint-disable-line no-param-reassign
        return boundActions;
      }, {});
    }
  }]);

  return DragDropManager;
}();

exports.default = DragDropManager;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ActionTypes = undefined;
exports['default'] = createStore;

var _isPlainObject = __webpack_require__(2);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(66);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'

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
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
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
    if (!(0, _isPlainObject2['default'])(action)) {
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
      var listener = listeners[i];
      listener();
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
   * https://github.com/tc39/proposal-observable
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
    }, _ref[_symbolObservable2['default']] = function () {
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
  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(21);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(65);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(69);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22), __webpack_require__(68)(module)))

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _dragOffset = __webpack_require__(38);

var _dragOffset2 = _interopRequireDefault(_dragOffset);

var _dragOperation = __webpack_require__(71);

var _dragOperation2 = _interopRequireDefault(_dragOperation);

var _refCount = __webpack_require__(114);

var _refCount2 = _interopRequireDefault(_refCount);

var _dirtyHandlerIds = __webpack_require__(44);

var _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds);

var _stateId = __webpack_require__(129);

var _stateId2 = _interopRequireDefault(_stateId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  return {
    dirtyHandlerIds: (0, _dirtyHandlerIds2.default)(state.dirtyHandlerIds, action, state.dragOperation),
    dragOffset: (0, _dragOffset2.default)(state.dragOffset, action),
    refCount: (0, _refCount2.default)(state.refCount, action),
    dragOperation: (0, _dragOperation2.default)(state.dragOperation, action),
    stateId: (0, _stateId2.default)(state.stateId)
  };
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = dragOperation;

var _without = __webpack_require__(72);

var _without2 = _interopRequireDefault(_without);

var _dragDrop = __webpack_require__(11);

var _registry = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};

function dragOperation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _dragDrop.BEGIN_DRAG:
      return _extends({}, state, {
        itemType: action.itemType,
        item: action.item,
        sourceId: action.sourceId,
        isSourcePublic: action.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case _dragDrop.PUBLISH_DRAG_SOURCE:
      return _extends({}, state, {
        isSourcePublic: true
      });
    case _dragDrop.HOVER:
      return _extends({}, state, {
        targetIds: action.targetIds
      });
    case _registry.REMOVE_TARGET:
      if (state.targetIds.indexOf(action.targetId) === -1) {
        return state;
      }
      return _extends({}, state, {
        targetIds: (0, _without2.default)(state.targetIds, action.targetId)
      });
    case _dragDrop.DROP:
      return _extends({}, state, {
        dropResult: action.dropResult,
        didDrop: true,
        targetIds: []
      });
    case _dragDrop.END_DRAG:
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

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(40),
    baseRest = __webpack_require__(29),
    isArrayLikeObject = __webpack_require__(30);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
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
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(74),
    mapCacheDelete = __webpack_require__(94),
    mapCacheGet = __webpack_require__(96),
    mapCacheHas = __webpack_require__(97),
    mapCacheSet = __webpack_require__(98);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

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


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(75),
    ListCache = __webpack_require__(86),
    Map = __webpack_require__(93);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(76),
    hashDelete = __webpack_require__(82),
    hashGet = __webpack_require__(83),
    hashHas = __webpack_require__(84),
    hashSet = __webpack_require__(85);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

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


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(41),
    isMasked = __webpack_require__(78),
    isObject = __webpack_require__(23),
    toSource = __webpack_require__(80);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(79);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(9);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
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


/***/ }),
/* 81 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

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
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

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


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

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
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

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
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(87),
    listCacheDelete = __webpack_require__(88),
    listCacheGet = __webpack_require__(90),
    listCacheHas = __webpack_require__(91),
    listCacheSet = __webpack_require__(92);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

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


/***/ }),
/* 87 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(14);

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
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
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
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
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


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(14);

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


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(14);

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


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(14);

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
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(13),
    root = __webpack_require__(9);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(15);

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
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

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


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(15);

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


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(15);

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


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(15);

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
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

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


/***/ }),
/* 100 */
/***/ (function(module, exports) {

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


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(102),
    baseIsNaN = __webpack_require__(103),
    strictIndexOf = __webpack_require__(104);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(106);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

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
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(108),
    shortOut = __webpack_require__(111);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(109),
    defineProperty = __webpack_require__(110),
    identity = __webpack_require__(43);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(13);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(41),
    isLength = __webpack_require__(113);

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
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
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


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = refCount;

var _registry = __webpack_require__(16);

function refCount() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments[1];

  switch (action.type) {
    case _registry.ADD_SOURCE:
    case _registry.ADD_TARGET:
      return state + 1;
    case _registry.REMOVE_SOURCE:
    case _registry.REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(116),
    baseRest = __webpack_require__(29),
    baseXor = __webpack_require__(117),
    isArrayLikeObject = __webpack_require__(30);

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
 * _.xor([2, 1], [2, 3]);
 * // => [1, 3]
 */
var xor = baseRest(function(arrays) {
  return baseXor(arrayFilter(arrays, isArrayLikeObject));
});

module.exports = xor;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
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


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(40),
    baseFlatten = __webpack_require__(118),
    baseUniq = __webpack_require__(123);

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
  var length = arrays.length;
  if (length < 2) {
    return length ? baseUniq(arrays[0]) : [];
  }
  var index = -1,
      result = Array(length);

  while (++index < length) {
    var array = arrays[index],
        othIndex = -1;

    while (++othIndex < length) {
      if (othIndex != index) {
        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
      }
    }
  }
  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
}

module.exports = baseXor;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(119),
    isFlattenable = __webpack_require__(120);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

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


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(21),
    isArguments = __webpack_require__(121),
    isArray = __webpack_require__(6);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(122),
    isObjectLike = __webpack_require__(10);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(20),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(24),
    arrayIncludes = __webpack_require__(25),
    arrayIncludesWith = __webpack_require__(26),
    cacheHas = __webpack_require__(28),
    createSet = __webpack_require__(124),
    setToArray = __webpack_require__(46);

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


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(125),
    noop = __webpack_require__(45),
    setToArray = __webpack_require__(46);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(13),
    root = __webpack_require__(9);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(27),
    baseIntersection = __webpack_require__(127),
    baseRest = __webpack_require__(29),
    castArrayLikeObject = __webpack_require__(128);

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

module.exports = intersection;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(24),
    arrayIncludes = __webpack_require__(25),
    arrayIncludesWith = __webpack_require__(26),
    arrayMap = __webpack_require__(27),
    baseUnary = __webpack_require__(42),
    cacheHas = __webpack_require__(28);

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


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(30);

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


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stateId;
function stateId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return state + 1;
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

var _isArray = __webpack_require__(6);

var _isArray2 = _interopRequireDefault(_isArray);

var _matchesType = __webpack_require__(39);

var _matchesType2 = _interopRequireDefault(_matchesType);

var _HandlerRegistry = __webpack_require__(131);

var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);

var _dragOffset = __webpack_require__(38);

var _dirtyHandlerIds = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragDropMonitor = function () {
  function DragDropMonitor(store) {
    _classCallCheck(this, DragDropMonitor);

    this.store = store;
    this.registry = new _HandlerRegistry2.default(store);
  }

  _createClass(DragDropMonitor, [{
    key: 'subscribeToStateChange',
    value: function subscribeToStateChange(listener) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var handlerIds = options.handlerIds;

      (0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');
      (0, _invariant2.default)(typeof handlerIds === 'undefined' || (0, _isArray2.default)(handlerIds), 'handlerIds, when specified, must be an array of strings.');

      var prevStateId = this.store.getState().stateId;
      var handleChange = function handleChange() {
        var state = _this.store.getState();
        var currentStateId = state.stateId;
        try {
          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !(0, _dirtyHandlerIds.areDirty)(state.dirtyHandlerIds, handlerIds);

          if (!canSkipListener) {
            listener();
          }
        } finally {
          prevStateId = currentStateId;
        }
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: 'subscribeToOffsetChange',
    value: function subscribeToOffsetChange(listener) {
      var _this2 = this;

      (0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');

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
    }
  }, {
    key: 'canDragSource',
    value: function canDragSource(sourceId) {
      var source = this.registry.getSource(sourceId);
      (0, _invariant2.default)(source, 'Expected to find a valid source.');

      if (this.isDragging()) {
        return false;
      }

      return source.canDrag(this, sourceId);
    }
  }, {
    key: 'canDropOnTarget',
    value: function canDropOnTarget(targetId) {
      var target = this.registry.getTarget(targetId);
      (0, _invariant2.default)(target, 'Expected to find a valid target.');

      if (!this.isDragging() || this.didDrop()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      return (0, _matchesType2.default)(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      return Boolean(this.getItemType());
    }
  }, {
    key: 'isDraggingSource',
    value: function isDraggingSource(sourceId) {
      var source = this.registry.getSource(sourceId, true);
      (0, _invariant2.default)(source, 'Expected to find a valid source.');

      if (!this.isDragging() || !this.isSourcePublic()) {
        return false;
      }

      var sourceType = this.registry.getSourceType(sourceId);
      var draggedItemType = this.getItemType();
      if (sourceType !== draggedItemType) {
        return false;
      }

      return source.isDragging(this, sourceId);
    }
  }, {
    key: 'isOverTarget',
    value: function isOverTarget(targetId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { shallow: false };
      var shallow = options.shallow;

      if (!this.isDragging()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
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
    }
  }, {
    key: 'getItemType',
    value: function getItemType() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: 'getItem',
    value: function getItem() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: 'getSourceId',
    value: function getSourceId() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: 'getTargetIds',
    value: function getTargetIds() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: 'getDropResult',
    value: function getDropResult() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: 'didDrop',
    value: function didDrop() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: 'isSourcePublic',
    value: function isSourcePublic() {
      return this.store.getState().dragOperation.isSourcePublic;
    }
  }, {
    key: 'getInitialClientOffset',
    value: function getInitialClientOffset() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: 'getInitialSourceClientOffset',
    value: function getInitialSourceClientOffset() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: 'getClientOffset',
    value: function getClientOffset() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: 'getSourceClientOffset',
    value: function getSourceClientOffset() {
      return (0, _dragOffset.getSourceClientOffset)(this.store.getState().dragOffset);
    }
  }, {
    key: 'getDifferenceFromInitialOffset',
    value: function getDifferenceFromInitialOffset() {
      return (0, _dragOffset.getDifferenceFromInitialOffset)(this.store.getState().dragOffset);
    }
  }]);

  return DragDropMonitor;
}();

exports.default = DragDropMonitor;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

var _isArray = __webpack_require__(6);

var _isArray2 = _interopRequireDefault(_isArray);

var _asap = __webpack_require__(132);

var _asap2 = _interopRequireDefault(_asap);

var _registry = __webpack_require__(16);

var _getNextUniqueId = __webpack_require__(134);

var _getNextUniqueId2 = _interopRequireDefault(_getNextUniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HandlerRoles = {
  SOURCE: 'SOURCE',
  TARGET: 'TARGET'
};

function validateSourceContract(source) {
  (0, _invariant2.default)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
  (0, _invariant2.default)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
  (0, _invariant2.default)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}

function validateTargetContract(target) {
  (0, _invariant2.default)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
  (0, _invariant2.default)(typeof target.hover === 'function', 'Expected hover to be a function.');
  (0, _invariant2.default)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}

function validateType(type, allowArray) {
  if (allowArray && (0, _isArray2.default)(type)) {
    type.forEach(function (t) {
      return validateType(t, false);
    });
    return;
  }

  (0, _invariant2.default)(typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

function getNextHandlerId(role) {
  var id = (0, _getNextUniqueId2.default)().toString();
  switch (role) {
    case HandlerRoles.SOURCE:
      return 'S' + id;
    case HandlerRoles.TARGET:
      return 'T' + id;
    default:
      (0, _invariant2.default)(false, 'Unknown role: ' + role);
  }
}

function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case 'S':
      return HandlerRoles.SOURCE;
    case 'T':
      return HandlerRoles.TARGET;
    default:
      (0, _invariant2.default)(false, 'Cannot parse handler ID: ' + handlerId);
  }
}

var HandlerRegistry = function () {
  function HandlerRegistry(store) {
    _classCallCheck(this, HandlerRegistry);

    this.store = store;

    this.types = {};
    this.handlers = {};

    this.pinnedSourceId = null;
    this.pinnedSource = null;
  }

  _createClass(HandlerRegistry, [{
    key: 'addSource',
    value: function addSource(type, source) {
      validateType(type);
      validateSourceContract(source);

      var sourceId = this.addHandler(HandlerRoles.SOURCE, type, source);
      this.store.dispatch((0, _registry.addSource)(sourceId));
      return sourceId;
    }
  }, {
    key: 'addTarget',
    value: function addTarget(type, target) {
      validateType(type, true);
      validateTargetContract(target);

      var targetId = this.addHandler(HandlerRoles.TARGET, type, target);
      this.store.dispatch((0, _registry.addTarget)(targetId));
      return targetId;
    }
  }, {
    key: 'addHandler',
    value: function addHandler(role, type, handler) {
      var id = getNextHandlerId(role);
      this.types[id] = type;
      this.handlers[id] = handler;

      return id;
    }
  }, {
    key: 'containsHandler',
    value: function containsHandler(handler) {
      var _this = this;

      return Object.keys(this.handlers).some(function (key) {
        return _this.handlers[key] === handler;
      });
    }
  }, {
    key: 'getSource',
    value: function getSource(sourceId, includePinned) {
      (0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');

      var isPinned = includePinned && sourceId === this.pinnedSourceId;
      var source = isPinned ? this.pinnedSource : this.handlers[sourceId];

      return source;
    }
  }, {
    key: 'getTarget',
    value: function getTarget(targetId) {
      (0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.handlers[targetId];
    }
  }, {
    key: 'getSourceType',
    value: function getSourceType(sourceId) {
      (0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');
      return this.types[sourceId];
    }
  }, {
    key: 'getTargetType',
    value: function getTargetType(targetId) {
      (0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.types[targetId];
    }
  }, {
    key: 'isSourceId',
    value: function isSourceId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRoles.SOURCE;
    }
  }, {
    key: 'isTargetId',
    value: function isTargetId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRoles.TARGET;
    }
  }, {
    key: 'removeSource',
    value: function removeSource(sourceId) {
      var _this2 = this;

      (0, _invariant2.default)(this.getSource(sourceId), 'Expected an existing source.');
      this.store.dispatch((0, _registry.removeSource)(sourceId));

      (0, _asap2.default)(function () {
        delete _this2.handlers[sourceId];
        delete _this2.types[sourceId];
      });
    }
  }, {
    key: 'removeTarget',
    value: function removeTarget(targetId) {
      var _this3 = this;

      (0, _invariant2.default)(this.getTarget(targetId), 'Expected an existing target.');
      this.store.dispatch((0, _registry.removeTarget)(targetId));

      (0, _asap2.default)(function () {
        delete _this3.handlers[targetId];
        delete _this3.types[targetId];
      });
    }
  }, {
    key: 'pinSource',
    value: function pinSource(sourceId) {
      var source = this.getSource(sourceId);
      (0, _invariant2.default)(source, 'Expected an existing source.');

      this.pinnedSourceId = sourceId;
      this.pinnedSource = source;
    }
  }, {
    key: 'unpinSource',
    value: function unpinSource() {
      (0, _invariant2.default)(this.pinnedSource, 'No source is pinned at the time.');

      this.pinnedSourceId = null;
      this.pinnedSource = null;
    }
  }]);

  return HandlerRegistry;
}();

exports.default = HandlerRegistry;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(133);
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


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

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
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNextUniqueId;
var nextUniqueId = 0;

function getNextUniqueId() {
  return nextUniqueId++;
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragSource = function () {
  function DragSource() {
    _classCallCheck(this, DragSource);
  }

  _createClass(DragSource, [{
    key: "canDrag",
    value: function canDrag() {
      return true;
    }
  }, {
    key: "isDragging",
    value: function isDragging(monitor, handle) {
      return handle === monitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {}
  }]);

  return DragSource;
}();

exports.default = DragSource;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DropTarget = function () {
  function DropTarget() {
    _classCallCheck(this, DropTarget);
  }

  _createClass(DropTarget, [{
    key: "canDrop",
    value: function canDrop() {
      return true;
    }
  }, {
    key: "hover",
    value: function hover() {}
  }, {
    key: "drop",
    value: function drop() {}
  }]);

  return DropTarget;
}();

exports.default = DropTarget;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createBackend;

var _noop = __webpack_require__(45);

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestBackend = function () {
  function TestBackend(manager) {
    _classCallCheck(this, TestBackend);

    this.actions = manager.getActions();
  }

  _createClass(TestBackend, [{
    key: 'setup',
    value: function setup() {
      this.didCallSetup = true;
    }
  }, {
    key: 'teardown',
    value: function teardown() {
      this.didCallTeardown = true;
    }
  }, {
    key: 'connectDragSource',
    value: function connectDragSource() {
      return _noop2.default;
    }
  }, {
    key: 'connectDragPreview',
    value: function connectDragPreview() {
      return _noop2.default;
    }
  }, {
    key: 'connectDropTarget',
    value: function connectDropTarget() {
      return _noop2.default;
    }
  }, {
    key: 'simulateBeginDrag',
    value: function simulateBeginDrag(sourceIds, options) {
      this.actions.beginDrag(sourceIds, options);
    }
  }, {
    key: 'simulatePublishDragSource',
    value: function simulatePublishDragSource() {
      this.actions.publishDragSource();
    }
  }, {
    key: 'simulateHover',
    value: function simulateHover(targetIds, options) {
      this.actions.hover(targetIds, options);
    }
  }, {
    key: 'simulateDrop',
    value: function simulateDrop() {
      this.actions.drop();
    }
  }, {
    key: 'simulateEndDrag',
    value: function simulateEndDrag() {
      this.actions.endDrag();
    }
  }]);

  return TestBackend;
}();

function createBackend(manager) {
  return new TestBackend(manager);
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DragDropContext = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class is a React-Component based version of the DragDropContext.
 * This is an alternative to decorating an application component with an ES7 decorator.
 */
var DragDropContextProvider = (_temp = _class = function (_Component) {
  _inherits(DragDropContextProvider, _Component);

  function DragDropContextProvider(props, context) {
    _classCallCheck(this, DragDropContextProvider);

    var _this = _possibleConstructorReturn(this, (DragDropContextProvider.__proto__ || Object.getPrototypeOf(DragDropContextProvider)).call(this, props, context));

    _this.backend = (0, _DragDropContext.unpackBackendForEs5Users)(props.backend);
    return _this;
  }

  _createClass(DragDropContextProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      /**
       * This property determines which window global to use for creating the DragDropManager.
       * If a window has been injected explicitly via props, that is used first. If it is available
       * as a context value, then use that, otherwise use the browser global.
       */
      var getWindow = function getWindow() {
        if (_this2.props && _this2.props.window) {
          return _this2.props.window;
        } else if (_this2.context && _this2.context.window) {
          return _this2.context.window;
        } else if (typeof window !== 'undefined') {
          return window;
        }
        return undefined;
      };

      return (0, _DragDropContext.createChildContext)(this.backend, { window: getWindow() });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return DragDropContextProvider;
}(_react.Component), _class.propTypes = {
  backend: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired,
  children: _propTypes2.default.element.isRequired,
  window: _propTypes2.default.object }, _class.defaultProps = {
  window: undefined
}, _class.childContextTypes = _DragDropContext.CHILD_CONTEXT_TYPES, _class.displayName = 'DragDropContextProvider', _class.contextTypes = {
  window: _propTypes2.default.object
}, _temp);
exports.default = DragDropContextProvider;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DragSource;

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

var _isPlainObject = __webpack_require__(2);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _checkDecoratorArguments = __webpack_require__(17);

var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

var _decorateHandler = __webpack_require__(49);

var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

var _registerSource = __webpack_require__(144);

var _registerSource2 = _interopRequireDefault(_registerSource);

var _createSourceFactory = __webpack_require__(145);

var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);

var _createSourceMonitor = __webpack_require__(146);

var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);

var _createSourceConnector = __webpack_require__(147);

var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);

var _isValidType = __webpack_require__(52);

var _isValidType2 = _interopRequireDefault(_isValidType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DragSource(type, spec, collect) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  _checkDecoratorArguments2.default.apply(undefined, ['DragSource', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
  var getType = type;
  if (typeof type !== 'function') {
    (0, _invariant2.default)((0, _isValidType2.default)(type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', type);
    getType = function getType() {
      return type;
    };
  }
  (0, _invariant2.default)((0, _isPlainObject2.default)(spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', spec);
  var createSource = (0, _createSourceFactory2.default)(spec);
  (0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);
  (0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);

  return function decorateSource(DecoratedComponent) {
    return (0, _decorateHandler2.default)({
      connectBackend: function connectBackend(backend, sourceId) {
        return backend.connectDragSource(sourceId);
      },
      containerDisplayName: 'DragSource',
      createHandler: createSource,
      registerHandler: _registerSource2.default,
      createMonitor: _createSourceMonitor2.default,
      createConnector: _createSourceConnector2.default,
      DecoratedComponent: DecoratedComponent,
      getType: getType,
      collect: collect,
      options: options
    });
  };
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.__esModule = true;

var _isDisposable2 = __webpack_require__(33);

var _isDisposable3 = _interopRequireWildcard(_isDisposable2);

exports.isDisposable = _isDisposable3['default'];

var _Disposable2 = __webpack_require__(141);

var _Disposable3 = _interopRequireWildcard(_Disposable2);

exports.Disposable = _Disposable3['default'];

var _CompositeDisposable2 = __webpack_require__(142);

var _CompositeDisposable3 = _interopRequireWildcard(_CompositeDisposable2);

exports.CompositeDisposable = _CompositeDisposable3['default'];

var _SerialDisposable2 = __webpack_require__(143);

var _SerialDisposable3 = _interopRequireWildcard(_SerialDisposable2);

exports.SerialDisposable = _SerialDisposable3['default'];

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

exports.__esModule = true;

var _isDisposable = __webpack_require__(33);

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

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

exports.__esModule = true;

var _isDisposable = __webpack_require__(33);

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

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerSource;
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

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createSourceFactory;

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

var _isPlainObject = __webpack_require__(2);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
var REQUIRED_SPEC_METHODS = ['beginDrag'];

function createSourceFactory(spec) {
  Object.keys(spec).forEach(function (key) {
    (0, _invariant2.default)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
    (0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
  });
  REQUIRED_SPEC_METHODS.forEach(function (key) {
    (0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
  });

  var Source = function () {
    function Source(monitor) {
      _classCallCheck(this, Source);

      this.monitor = monitor;
      this.props = null;
      this.component = null;
    }

    _createClass(Source, [{
      key: 'receiveProps',
      value: function receiveProps(props) {
        this.props = props;
      }
    }, {
      key: 'receiveComponent',
      value: function receiveComponent(component) {
        this.component = component;
      }
    }, {
      key: 'canDrag',
      value: function canDrag() {
        if (!spec.canDrag) {
          return true;
        }

        return spec.canDrag(this.props, this.monitor);
      }
    }, {
      key: 'isDragging',
      value: function isDragging(globalMonitor, sourceId) {
        if (!spec.isDragging) {
          return sourceId === globalMonitor.getSourceId();
        }

        return spec.isDragging(this.props, this.monitor);
      }
    }, {
      key: 'beginDrag',
      value: function beginDrag() {
        var item = spec.beginDrag(this.props, this.monitor, this.component);
        if (process.env.NODE_ENV !== 'production') {
          (0, _invariant2.default)((0, _isPlainObject2.default)(item), 'beginDrag() must return a plain object that represents the dragged item. ' + 'Instead received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', item);
        }
        return item;
      }
    }, {
      key: 'endDrag',
      value: function endDrag() {
        if (!spec.endDrag) {
          return;
        }

        spec.endDrag(this.props, this.monitor, this.component);
      }
    }]);

    return Source;
  }();

  return function createSource(monitor) {
    return new Source(monitor);
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createSourceMonitor;

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isCallingCanDrag = false;
var isCallingIsDragging = false;

var SourceMonitor = function () {
  function SourceMonitor(manager) {
    _classCallCheck(this, SourceMonitor);

    this.internalMonitor = manager.getMonitor();
  }

  _createClass(SourceMonitor, [{
    key: 'receiveHandlerId',
    value: function receiveHandlerId(sourceId) {
      this.sourceId = sourceId;
    }
  }, {
    key: 'canDrag',
    value: function canDrag() {
      (0, _invariant2.default)(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');

      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      (0, _invariant2.default)(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');

      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    }
  }, {
    key: 'getItemType',
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: 'getItem',
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: 'getDropResult',
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: 'didDrop',
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: 'getInitialClientOffset',
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: 'getInitialSourceClientOffset',
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: 'getSourceClientOffset',
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: 'getClientOffset',
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: 'getDifferenceFromInitialOffset',
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return SourceMonitor;
}();

function createSourceMonitor(manager) {
  return new SourceMonitor(manager);
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSourceConnector;

var _wrapConnectorHooks = __webpack_require__(50);

var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

var _areOptionsEqual = __webpack_require__(51);

var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSourceConnector(backend) {
  var currentHandlerId = void 0;

  var currentDragSourceNode = void 0;
  var currentDragSourceOptions = void 0;
  var disconnectCurrentDragSource = void 0;

  var currentDragPreviewNode = void 0;
  var currentDragPreviewOptions = void 0;
  var disconnectCurrentDragPreview = void 0;

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

  var hooks = (0, _wrapConnectorHooks2.default)({
    dragSource: function connectDragSource(node, options) {
      if (node === currentDragSourceNode && (0, _areOptionsEqual2.default)(options, currentDragSourceOptions)) {
        return;
      }

      currentDragSourceNode = node;
      currentDragSourceOptions = options;

      reconnectDragSource();
    },

    dragPreview: function connectDragPreview(node, options) {
      if (node === currentDragPreviewNode && (0, _areOptionsEqual2.default)(options, currentDragPreviewOptions)) {
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

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneWithRef;

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  (0, _invariant2.default)(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

  if (!previousRef) {
    // When there is no ref on the element, use the new ref directly
    return (0, _react.cloneElement)(element, {
      ref: newRef
    });
  }

  return (0, _react.cloneElement)(element, {
    ref: function ref(node) {
      newRef(node);

      if (previousRef) {
        previousRef(node);
      }
    }
  });
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropTarget;

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

var _isPlainObject = __webpack_require__(2);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _checkDecoratorArguments = __webpack_require__(17);

var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

var _decorateHandler = __webpack_require__(49);

var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

var _registerTarget = __webpack_require__(150);

var _registerTarget2 = _interopRequireDefault(_registerTarget);

var _createTargetFactory = __webpack_require__(151);

var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);

var _createTargetMonitor = __webpack_require__(152);

var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);

var _createTargetConnector = __webpack_require__(153);

var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);

var _isValidType = __webpack_require__(52);

var _isValidType2 = _interopRequireDefault(_isValidType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DropTarget(type, spec, collect) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  _checkDecoratorArguments2.default.apply(undefined, ['DropTarget', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
  var getType = type;
  if (typeof type !== 'function') {
    (0, _invariant2.default)((0, _isValidType2.default)(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', type);
    getType = function getType() {
      return type;
    };
  }
  (0, _invariant2.default)((0, _isPlainObject2.default)(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', spec);
  var createTarget = (0, _createTargetFactory2.default)(spec);
  (0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);
  (0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);

  return function decorateTarget(DecoratedComponent) {
    return (0, _decorateHandler2.default)({
      connectBackend: function connectBackend(backend, targetId) {
        return backend.connectDropTarget(targetId);
      },
      containerDisplayName: 'DropTarget',
      createHandler: createTarget,
      registerHandler: _registerTarget2.default,
      createMonitor: _createTargetMonitor2.default,
      createConnector: _createTargetConnector2.default,
      DecoratedComponent: DecoratedComponent,
      getType: getType,
      collect: collect,
      options: options
    });
  };
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerTarget;
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

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createTargetFactory;

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

var _isPlainObject = __webpack_require__(2);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];

function createTargetFactory(spec) {
  Object.keys(spec).forEach(function (key) {
    (0, _invariant2.default)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
    (0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
  });

  var Target = function () {
    function Target(monitor) {
      _classCallCheck(this, Target);

      this.monitor = monitor;
      this.props = null;
      this.component = null;
    }

    _createClass(Target, [{
      key: 'receiveProps',
      value: function receiveProps(props) {
        this.props = props;
      }
    }, {
      key: 'receiveMonitor',
      value: function receiveMonitor(monitor) {
        this.monitor = monitor;
      }
    }, {
      key: 'receiveComponent',
      value: function receiveComponent(component) {
        this.component = component;
      }
    }, {
      key: 'canDrop',
      value: function canDrop() {
        if (!spec.canDrop) {
          return true;
        }

        return spec.canDrop(this.props, this.monitor);
      }
    }, {
      key: 'hover',
      value: function hover() {
        if (!spec.hover) {
          return;
        }

        spec.hover(this.props, this.monitor, this.component);
      }
    }, {
      key: 'drop',
      value: function drop() {
        if (!spec.drop) {
          return undefined;
        }

        var dropResult = spec.drop(this.props, this.monitor, this.component);
        if (process.env.NODE_ENV !== 'production') {
          (0, _invariant2.default)(typeof dropResult === 'undefined' || (0, _isPlainObject2.default)(dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' + 'Instead received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', dropResult);
        }
        return dropResult;
      }
    }]);

    return Target;
  }();

  return function createTarget(monitor) {
    return new Target(monitor);
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createTargetMonitor;

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isCallingCanDrop = false;

var TargetMonitor = function () {
  function TargetMonitor(manager) {
    _classCallCheck(this, TargetMonitor);

    this.internalMonitor = manager.getMonitor();
  }

  _createClass(TargetMonitor, [{
    key: 'receiveHandlerId',
    value: function receiveHandlerId(targetId) {
      this.targetId = targetId;
    }
  }, {
    key: 'canDrop',
    value: function canDrop() {
      (0, _invariant2.default)(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html');

      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    }
  }, {
    key: 'isOver',
    value: function isOver(options) {
      return this.internalMonitor.isOverTarget(this.targetId, options);
    }
  }, {
    key: 'getItemType',
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: 'getItem',
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: 'getDropResult',
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: 'didDrop',
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: 'getInitialClientOffset',
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: 'getInitialSourceClientOffset',
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: 'getSourceClientOffset',
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: 'getClientOffset',
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: 'getDifferenceFromInitialOffset',
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return TargetMonitor;
}();

function createTargetMonitor(manager) {
  return new TargetMonitor(manager);
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTargetConnector;

var _wrapConnectorHooks = __webpack_require__(50);

var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

var _areOptionsEqual = __webpack_require__(51);

var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTargetConnector(backend) {
  var currentHandlerId = void 0;

  var currentDropTargetNode = void 0;
  var currentDropTargetOptions = void 0;
  var disconnectCurrentDropTarget = void 0;

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

  var hooks = (0, _wrapConnectorHooks2.default)({
    dropTarget: function connectDropTarget(node, options) {
      if (node === currentDropTargetNode && (0, _areOptionsEqual2.default)(options, currentDropTargetOptions)) {
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

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
 */


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TouchBackend = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createTouchBackend;

var _invariant = __webpack_require__(155);

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

// Polyfill for document.elementsFromPoint
var elementsFromPoint = (typeof document !== 'undefined' && document.elementsFromPoint || function (x, y) {

    if (document.msElementsFromPoint) {
        // msElementsFromPoint is much faster but returns a node-list, so convert it to an array
        return Array.prototype.slice.call(document.msElementsFromPoint(x, y), 0);
    }

    var elements = [],
        previousPointerEvents = [],
        current,
        i,
        d;

    // get all elements via elementFromPoint, and remove them from hit-testing in order
    while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current !== null) {

        // push the element and its current style
        elements.push(current);
        previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
        });

        // add "pointer-events: none", to get to the underlying element
        current.style.setProperty('pointer-events', 'none', 'important');
    }

    // restore the previous pointer-events values
    for (i = previousPointerEvents.length; d = previousPointerEvents[--i];) {
        elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
    }

    // return our results
    return elements;
}).bind(typeof document !== 'undefined' ? document : null);

var supportsPassive = function () {
    // simular to jQuery's test
    var supported = false;
    try {
        addEventListener('test', null, Object.defineProperty({}, 'passive', {
            get: function get() {
                supported = true;
            }
        }));
    } catch (e) {}
    return supported;
}();

var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
    var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

    if (!el) {
        return null;
    }

    var _el$getBoundingClient = el.getBoundingClientRect(),
        top = _el$getBoundingClient.top,
        left = _el$getBoundingClient.left;

    return { x: left, y: top };
}

var eventNames = {
    mouse: {
        start: 'mousedown',
        move: 'mousemove',
        end: 'mouseup',
        contextmenu: 'contextmenu'
    },
    touch: {
        start: 'touchstart',
        move: 'touchmove',
        end: 'touchend'
    },
    keyboard: {
        keydown: 'keydown'
    }
};

var TouchBackend = exports.TouchBackend = function () {
    function TouchBackend(manager) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, TouchBackend);

        options.delayTouchStart = options.delayTouchStart || options.delay;

        options = _extends({
            enableTouchEvents: true,
            enableMouseEvents: false,
            enableKeyboardEvents: false,
            delayTouchStart: 0,
            delayMouseStart: 0
        }, options);

        this.actions = manager.getActions();
        this.monitor = manager.getMonitor();
        this.registry = manager.getRegistry();

        this.enableKeyboardEvents = options.enableKeyboardEvents;
        this.enableMouseEvents = options.enableMouseEvents;
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

        if (options.enableKeyboardEvents) {
            this.listenerTypes.push('keyboard');
        }

        this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
        this.handleTopMoveStart = this.handleTopMoveStart.bind(this);
        this.handleTopMoveStartDelay = this.handleTopMoveStartDelay.bind(this);
        this.handleTopMoveStartCapture = this.handleTopMoveStartCapture.bind(this);
        this.handleTopMoveCapture = this.handleTopMoveCapture.bind(this);
        this.handleTopMove = this.handleTopMove.bind(this);
        this.handleTopMoveEndCapture = this.handleTopMoveEndCapture.bind(this);
        this.handleCancelOnEscape = this.handleCancelOnEscape.bind(this);
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
            this.addEventListener(window, 'move', this.handleTopMove);
            this.addEventListener(window, 'move', this.handleTopMoveCapture, true);
            this.addEventListener(window, 'end', this.handleTopMoveEndCapture, true);

            if (this.enableMouseEvents) {
                this.addEventListener(window, 'contextmenu', this.handleTopMoveEndCapture);
            }

            if (this.enableKeyboardEvents) {
                this.addEventListener(window, 'keydown', this.handleCancelOnEscape, true);
            }
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
            this.removeEventListener(window, 'move', this.handleTopMove);
            this.removeEventListener(window, 'end', this.handleTopMoveEndCapture, true);

            if (this.enableMouseEvents) {
                this.removeEventListener(window, 'contextmenu', this.handleTopMoveEndCapture);
            }

            if (this.enableKeyboardEvents) {
                this.removeEventListener(window, 'keydown', this.handleCancelOnEscape, true);
            }

            this.uninstallSourceNodeRemovalObserver();
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener(subject, event, handler, capture) {
            var options = supportsPassive ? { capture: capture, passive: false } : capture;

            this.listenerTypes.forEach(function (listenerType) {
                subject.addEventListener(eventNames[listenerType][event], handler, options);
            });
        }
    }, {
        key: 'removeEventListener',
        value: function removeEventListener(subject, event, handler, capture) {
            var options = supportsPassive ? { capture: capture, passive: false } : capture;

            this.listenerTypes.forEach(function (listenerType) {
                subject.removeEventListener(eventNames[listenerType][event], handler, options);
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

            var handleMove = function handleMove(e) {
                var coords = void 0;

                /**
                 * Grab the coordinates for the current mouse/touch position
                 */
                switch (e.type) {
                    case eventNames.mouse.move:
                        coords = { x: e.clientX, y: e.clientY };
                        break;

                    case eventNames.touch.move:
                        coords = { x: e.touches[0].clientX, y: e.touches[0].clientY };
                        break;
                }

                /**
                 * Use the coordinates to grab the element the drag ended on.
                 * If the element is the same as the target node (or any of it's children) then we have hit a drop target and can handle the move.
                 */
                var droppedOn = document.elementFromPoint(coords.x, coords.y);
                var childMatch = node.contains(droppedOn);

                if (droppedOn === node || childMatch) {
                    return _this3.handleMove(e, targetId);
                }
            };

            /**
             * Attaching the event listener to the body so that touchmove will work while dragging over multiple target elements.
             */
            this.addEventListener(document.querySelector('body'), 'move', handleMove);
            this.targetNodes[targetId] = node;

            return function () {
                delete _this3.targetNodes[targetId];
                _this3.removeEventListener(document.querySelector('body'), 'move', handleMove);
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
            this.dragOverTargetIds = [];
        }
    }, {
        key: 'handleMove',
        value: function handleMove(e, targetId) {
            this.dragOverTargetIds.unshift(targetId);
        }
    }, {
        key: 'handleTopMove',
        value: function handleTopMove(e) {
            var _this4 = this;

            clearTimeout(this.timeout);

            var moveStartSourceIds = this.moveStartSourceIds,
                dragOverTargetIds = this.dragOverTargetIds;

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

            // Get the node elements of the hovered DropTargets
            var dragOverTargetNodes = dragOverTargetIds.map(function (key) {
                return _this4.targetNodes[key];
            });
            // Get the a ordered list of nodes that are touched by
            var elementsAtPoint = elementsFromPoint(clientOffset.x, clientOffset.y);
            var orderedDragOverTargetIds = elementsAtPoint
            // Filter off nodes that arent a hovered DropTargets nodes
            .filter(function (node) {
                return dragOverTargetNodes.indexOf(node) > -1;
            })
            // Map back the nodes elements to targetIds
            .map(function (node) {
                for (var targetId in _this4.targetNodes) {
                    if (node === _this4.targetNodes[targetId]) return targetId;
                }
                return null;
            })
            // Filter off possible null rows
            .filter(function (node) {
                return !!node;
            });

            // Reverse order because dnd-core reverse it before calling the DropTarget drop methods
            orderedDragOverTargetIds.reverse();

            this.actions.hover(orderedDragOverTargetIds, {
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
        key: 'handleCancelOnEscape',
        value: function handleCancelOnEscape(e) {
            if (e.key === 'Escape') {
                this._mouseClientOffset = {};

                this.uninstallSourceNodeRemovalObserver();
                this.actions.endDrag();
            }
        }
    }, {
        key: 'handleOnContextMenu',
        value: function handleOnContextMenu() {
            this.moveStartSourceIds = null;
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
    var optionsOrManager = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var touchBackendFactory = function touchBackendFactory(manager) {
        return new TouchBackend(manager, optionsOrManager);
    };

    if (optionsOrManager.getMonitor) {
        return touchBackendFactory(optionsOrManager);
    } else {
        return touchBackendFactory;
    }
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DragLayer = __webpack_require__(47);

var _DragLayer2 = _interopRequireDefault(_DragLayer);

var _EventBase = __webpack_require__(53);

var _EventBase2 = _interopRequireDefault(_EventBase);

var _objectAssign = __webpack_require__(54);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var EventPreview = function (_React$Component) {
  _inherits(EventPreview, _React$Component);

  function EventPreview() {
    _classCallCheck(this, EventPreview);

    return _possibleConstructorReturn(this, (EventPreview.__proto__ || Object.getPrototypeOf(EventPreview)).apply(this, arguments));
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

      return (0, _objectAssign2.default)(this.props.draggingComponent.getDraggingStyle(), {
        position: 'absolute',
        transform: transform,
        WebkitTransform: transform
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var draggingDisplay = '';
      if (this.props.draggingComponent && this.props.draggingComponent.state.draggingDisplay) {
        draggingDisplay = this.props.draggingComponent.state.draggingDisplay;
      }

      var display = [];
      if (this.props.draggingComponent && this.props.draggingComponent.state.display) {
        display = this.props.draggingComponent.state.display;
      }
      return _react2.default.createElement(
        'div',
        { ref: 'preview', className: 'tlEventView tlDraggingEvent', style: this.getItemStyles() },
        _react2.default.createElement(_EventBase2.default, {
          draggingDisplay: draggingDisplay,
          display: display
        })
      );
    }
  }]);

  return EventPreview;
}(_react2.default.Component);

exports.default = (0, _DragLayer2.default)(collect)(EventPreview);

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closest = closest;
function closest(elem, selector) {
    var matchesFn;

    // find vendor prefix
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    });

    var parent;

    // traverse parents
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
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _TimeSpan = __webpack_require__(3);

var _TimeSpan2 = _interopRequireDefault(_TimeSpan);

var _reactDnd = __webpack_require__(36);

var _EventBase = __webpack_require__(53);

var _EventBase2 = _interopRequireDefault(_EventBase);

var _Timeline = __webpack_require__(18);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _objectAssign = __webpack_require__(54);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var source = {
  beginDrag: function beginDrag(props, monitor, component) {
    return (0, _objectAssign2.default)({}, props, { draggingComponent: component });
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

var Event = function (_React$Component) {
  _inherits(Event, _React$Component);

  function Event(props) {
    _classCallCheck(this, Event);

    var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));

    _this.state = {
      top: props.float === undefined ? _this.props.timeline.timeToTop(_this.props.timeSpan.getStartTime()) : props.float.top,
      left: props.float === undefined ? _this.props.timeline.getLineLeft(_this.props.lineId) : props.float.left,
      color: _this.props.color,
      draggable: props.float === undefined ? false : true,
      resizable: false,
      draggingDisplay: '',
      display: props.display
    };

    _this.lineId = _this.props.lineId;
    _this.timeSpan = _this.props.timeSpan;
    _this.draggingPosition = null;
    _this.resizingTimeSpan = null;
    _this.resizing = false;
    _this.vars = _this.props.vars ? _this.props.vars : {};
    _this.element = null;

    if (_this.props.float) {
      var lineId = _this.props.timeline.findLineByLeft(_this.state.left).props.id;
      var time = _this.props.timeline.topToTime(_this.state.top);
      _this.draggingPosition = { time: time, lineId: lineId };
      _this.state.draggingDisplay = time.getDisplayTime();
      _this.state.height = _this.props.timeline.minuteToHeight(_this.props.float.minute);
      _this.timeSpan = new _TimeSpan2.default(time, time.addMin(_this.props.float.minute));
    } else {
      _this.state.height = _this.props.timeline.timeSpanToHeight(_this.timeSpan);
    }
    return _this;
  }

  _createClass(Event, [{
    key: 'toJson',
    value: function toJson() {
      return {
        id: this.props.id,
        lineId: this.lineId,
        timeSpan: this.timeSpan,
        vars: JSON.parse(JSON.stringify(this.vars)),
        color: this.state.color,
        display: this.props.display,
        position: {
          top: this.state.top,
          left: this.state.left
        }
      };
    }
  }, {
    key: 'update',
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
      }

      //onClickよりendResizingの先に発生してしまう。
      setTimeout(function () {
        return _this3.resizing = false;
      }, 100);
    }
  }, {
    key: 'onContextMenu',
    value: function onContextMenu(e) {
      if (this.props.timeline.props.eventDidRightClick) {
        this.props.timeline.props.eventDidRightClick({
          event: e,
          component: this
        });
      }
    }
  }, {
    key: 'getDraggingStyle',
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
    key: 'getOffset',
    value: function getOffset() {
      return {
        top: this.state.top,
        left: this.state.left
      };
    }
  }, {
    key: 'setColor',
    value: function setColor(color) {
      this.setState({ color: color });
    }
  }, {
    key: 'setDisplay',
    value: function setDisplay(display) {
      this.setState({ display: display });
    }
  }, {
    key: 'resize',
    value: function resize() {
      this.setState({
        resizable: true
      });
    }
  }, {
    key: 'float',
    value: function float() {
      this.setState({
        draggable: true,
        draggingDisplay: this.timeSpan.getStartTime().getDisplayTime()
      });

      this.draggingPosition = { time: this.timeSpan.getStartTime(), lineId: this.lineId };
    }
  }, {
    key: 'isFixed',
    value: function isFixed() {
      return !this.state.draggable && !this.state.resizable;
    }
  }, {
    key: 'isFixable',
    value: function isFixable() {
      var newPosition = this.nextPosition;
      if (!newPosition) {
        return true;
      }

      return this.isFreePosition(newPosition);
    }
  }, {
    key: 'isCancelable',
    value: function isCancelable() {
      var newPosition = this.prevPosition;
      if (!newPosition) {
        return true;
      }

      return this.isFreePosition(newPosition);
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      if (this.draggingPosition) {
        var left = this.props.timeline.getLineLeft(this.lineId);
        var top = this.props.timeline.timeToTop(this.timeSpan.getStartTime());
        this.draggingPosition = null;
        this.setState({
          draggable: false,
          draggingDisplay: '',
          top: top,
          left: left
        });
      } else if (this.resizingTimeSpan) {
        var _top = this.props.timeline.timeToTop(this.timeSpan.getStartTime());
        var height = this.props.timeline.timeSpanToHeight(this.timeSpan);
        this.resizingTimeSpan = null;
        this.setState({
          resizable: false,
          draggingDisplay: '',
          top: _top,
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
    key: 'remove',
    value: function remove() {
      this.props.timeline.clearDraggingOver();
      return this.props.timeline.removeEvent(this.props.id);
    }
  }, {
    key: 'getMinute',
    value: function getMinute() {
      if (this.timeSpan) {
        return this.timeSpan.getDistance();
      } else if (this.props.float) {
        return parseInt(this.props.float.minute, 10);
      }
    }
  }, {
    key: 'fix',
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
    key: 'setVar',
    value: function setVar(key, value) {
      this.vars[key] = value;
    }
  }, {
    key: 'getVar',
    value: function getVar(key) {
      return this.vars[key];
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.timeline.eventComponents.push(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this4 = this;

      this.props.timeline.eventComponents = this.props.timeline.eventComponents.filter(function (ev) {
        return ev !== _this4;
      });
    }
  }, {
    key: 'render',
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

      return this.props.connectDragSource(_react2.default.createElement(
        'div',
        { ref: function ref(elem) {
            return _this5.element = elem;
          }, onContextMenu: function onContextMenu(e) {
            return _this5.onContextMenu(e);
          }, className: (0, _classnames2.default)('tlEventView', { tlDraggingEvent: this.state.draggable, tlResizableEvent: this.state.resizable }), style: style, onClick: function onClick(e) {
            return _this5.onClick(e);
          } },
        function () {
          if (_this5.state.resizable) {
            return _react2.default.createElement(
              'div',
              { className: 'tlResizeHandle', onTouchStart: function onTouchStart(e) {
                  return _this5.resizeUp(e);
                }, onMouseDown: function onMouseDown(e) {
                  return _this5.resizeUp(e);
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
          if (_this5.state.resizable) {
            return _react2.default.createElement(
              'div',
              { className: 'tlResizeHandle tlBottom', onTouchStart: function onTouchStart(e) {
                  return _this5.resizeDown(e);
                }, onMouseDown: function onMouseDown(e) {
                  return _this5.resizeDown(e);
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

Event.defaultProps = {
  display: []
};

exports.default = (0, _reactDnd.DragSource)("Event", source, collect)(Event);

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwZWQyNTczYWU0NjA4ZjBhMGQwMSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzc25hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3NuYW1lc1wiLFwiYW1kXCI6XCJjbGFzc25hbWVzXCJ9Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1J1bGVyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn0iLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2FjdGlvbnMvZHJhZ0Ryb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2FjdGlvbnMvcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvdXRpbHMvY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWUuZXM2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3V0aWxzL3NoYWxsb3dFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlzcG9zYWJsZXMvbW9kdWxlcy9pc0Rpc3Bvc2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGluZUxhYmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9EcmFnRHJvcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT2Zmc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvdXRpbHMvbWF0Y2hlc1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZURpZmZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvZGlydHlIYW5kbGVySWRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm9vcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0RyYWdMYXllci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi91dGlscy9zaGFsbG93RXF1YWxTY2FsYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvZGVjb3JhdGVIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3dyYXBDb25uZWN0b3JIb29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9hcmVPcHRpb25zRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvdXRpbHMvaXNWYWxpZFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRCYXNlLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZyYW1lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib3VyLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvRHJhZ0Ryb3BNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvY3JlYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL3BvbnlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT3BlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvd2l0aG91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zaG9ydE91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9yZWZDb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3hvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlWG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGbGF0dGVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0QXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvc3RhdGVJZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL0RyYWdEcm9wTW9uaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL0hhbmRsZXJSZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXNhcC9icm93c2VyLWFzYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FzYXAvYnJvd3Nlci1yYXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi91dGlscy9nZXROZXh0VW5pcXVlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9EcmFnU291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvRHJvcFRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2JhY2tlbmRzL2NyZWF0ZVRlc3RCYWNrZW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0RyYWdEcm9wQ29udGV4dFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0RyYWdTb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Rpc3Bvc2FibGVzL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Rpc3Bvc2FibGVzL21vZHVsZXMvRGlzcG9zYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlzcG9zYWJsZXMvbW9kdWxlcy9Db21wb3NpdGVEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kaXNwb3NhYmxlcy9tb2R1bGVzL1NlcmlhbERpc3Bvc2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvcmVnaXN0ZXJTb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9jcmVhdGVTb3VyY2VNb25pdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVNvdXJjZUNvbm5lY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi91dGlscy9jbG9uZVdpdGhSZWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvRHJvcFRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9yZWdpc3RlclRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9jcmVhdGVUYXJnZXRGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldE1vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0Q29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9kaXN0L1RvdWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRQcmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50LmpzeCJdLCJuYW1lcyI6WyJUaW1lU3BhbiIsInN0YXJ0IiwiZW5kIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInVuZGVmaW5lZCIsImNvbXBhcmUiLCJhZGRNaW4iLCJfc3RhcnRUaW1lIiwiX2VuZFRpbWUiLCJnZXRTdGFydFRpbWUiLCJjbG9uZSIsImdldEVuZFRpbWUiLCJnZXREaXN0YW5jZSIsInRpbWUiLCJob3VyIiwic2hpZnRTdGFydFRpbWUiLCJnZXRNaW4iLCJtaW4iLCJnZXRIb3VyIiwibWludXRlIiwidGltZVNwYW4iLCJlcXVhbHMiLCJjb250YWlucyIsImNvbnRhaW5zVGltZSIsImNhbGxiYWNrIiwia2V5IiwiY2FsbCIsIm1pbnV0ZUludGVydmFsIiwiUnVsZXIiLCJwcm9wcyIsInN0YXRlIiwiaG91cnMiLCJlYWNoVGltZSIsInN0eWxlIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwicHVzaCIsImdldERpc3BsYXlIb3VyIiwid2lkdGgiLCJDb21wb25lbnQiLCJUaW1lbGluZSIsImxpbmVIZWlnaHQiLCJwZXJNaW5IZWlnaHQiLCJsaW5lV2lkdGgiLCJjcmVhdGVkRXZlbnRJZCIsImRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQiLCJmcmFtZUNvbXBvbmVudCIsImV2ZW50Q29tcG9uZW50cyIsImxlZnQiLCJsaW5lQ29tcG9uZW50IiwiZmluZExpbmVCeUxlZnQiLCJjbGVhckRyYWdnaW5nT3ZlciIsImRyYWdnaW5nT3ZlciIsImxpbmVEYXRhIiwicmVkdWNlIiwidmFsIiwiZGF0YSIsImluZGV4IiwiaGFzUnVsZXIiLCJydWxlckludGVydmFsIiwiZXZlbnRJZCIsImZpbmQiLCJldiIsImlkIiwibGluZUNvbXBvbmVudHMiLCJsaW5lIiwibGluZUlkIiwiaSIsImxlbmd0aCIsInNpZGVQYWRkaW5nIiwidG9wIiwidG9wVG9UaW1lIiwibWludXRlVG9IZWlnaHQiLCJyZXN0IiwibWluSW50ZXJ2YWwiLCJldmVudENvbXBvbmVudCIsImZpbHRlciIsImRyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImN1cnJlbnRUaW1lU3BhbiIsInByZXZFdmVudCIsImZpbmRQcmV2RXZlbnQiLCJib3R0b21UaW1lIiwidGltZVRvVG9wIiwiZmluZE5leHRFdmVudEJ5VGltZSIsIm5leHRFdmVudCIsIm5leHRUaW1lIiwiZ2V0TmV4dFRpbWUiLCJldmVudHMiLCJhZGRFdmVudHMiLCJzZXRIZWlnaHQiLCJyZW1vdmVFdmVudCIsInVwZGF0ZUV2ZW50cyIsImluaXRpYWxFdmVudHMiLCJjaGlsZHJlbiIsImNoaWxkV2lkdGgiLCJsaW5lcyIsInJlZnMiLCJpbmRleE9mIiwiZGVmYXVsdFByb3BzIiwiVGltZSIsImNvdW50IiwiZGlzcGxheU1pbiIsIl9ob3VyIiwicGFyc2VJbnQiLCJfbWluIiwiRXJyb3IiLCJ0b1N0cmluZyIsInRhcmdldFRpbWUiLCJ0YXJnZXRIb3VyIiwiaG91ckRpc3RhbmNlIiwiZ2V0RGlzcGxheVRpbWUiLCJnZXREaXNwbGF5TWluIiwiTGluZSIsInZhcnMiLCJlIiwicGFyZW50RWxlbWVudCIsImZyYW1lIiwibGluZXNXcmFwcGVyIiwicGFyZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFkiLCJzY3JvbGxUb3AiLCJ0aW1lbGluZSIsImxpbmVEaWRDbGljayIsImdldFJlbGF0aXZlVG9wIiwiY29tcG9uZW50IiwiZnJlZU1pbnV0ZSIsImdldEZyZWVNaW51dGUiLCJwb3NpdGlvbiIsInNjcm9sbExlZnQiLCJlbGVtZW50IiwiY2xpZW50WCIsImV2ZW50IiwibGluZURpZFJpZ2h0Q2xpY2siLCJzZXRTdGF0ZSIsIm9uQ29udGV4dE1lbnUiLCJvbkNsaWNrIiwidGxFdmVuIiwiZXZlbiIsInRsT2RkIiwidGxPdmVyIiwiTGluZUxhYmVsIiwicHJldlJ1bGVyIiwiaXNMYXN0IiwibWFyZ2luTGVmdCIsInRsTGFiZWwiLCJ0bEhhc1J1bGVyIiwidGxQcmV2UnVsZXIiLCJ0bExhc3QiLCJsYWJlbCIsIkV2ZW50QmFzZSIsInJvdyIsInZhbHVlIiwiY2xhc3NOYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiZGlzcGxheVBvc2l0aW9uIiwiYmFzZSIsIndyYXBwZXIiLCJ3cmFwcGVyUmVjdCIsIndyYXBwZXJSaWdodFNpZGUiLCJwcmV2aWV3UmVjdCIsInByZXZpZXdSaWdodFNpZGUiLCJkcmFnZ2luZ0Rpc3BsYXkiLCJkcmFnZ2luZ0Rpc3BsYXlUb3AiLCJkaXNwbGF5IiwicmVuZGVyRGlzcGxheSIsInRhcmdldCIsImRyb3AiLCJtb25pdG9yIiwiaXRlbSIsImdldEl0ZW0iLCJkZWx0YSIsImdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCIsImluaXRhbE9mZnNldCIsImRyYWdnaW5nQ29tcG9uZW50IiwiZ2V0T2Zmc2V0IiwiTWF0aCIsInJvdW5kIiwieSIsIngiLCJtb3ZlVG8iLCJob3ZlciIsImNsaWVudE9mZnNldCIsImdldFNvdXJjZUNsaWVudE9mZnNldCIsImxpbmVXcmFwcGVyQm91bmRzIiwiZHJhZ2dpbmciLCJjb2xsZWN0IiwiY29ubmVjdCIsImNvbm5lY3REcm9wVGFyZ2V0IiwiZHJvcFRhcmdldCIsIkZyYW1lIiwibWluV2lkdGgiLCJyZXNpemluZ0V2ZW50IiwiY2xpY2tlZFRvcCIsImluaXRpYWxIZWlnaHQiLCJwcmV2Qm90dG9tIiwiZ2V0UHJldkJvdHRvbSIsIm1vdXNlTW92ZUV2ZW50IiwibW92ZUV2ZW50IiwicmVzaXppbmciLCJ0YXJnZXRIZWlnaHQiLCJ0YXJnZXRUb3AiLCJyZXNpemluZ1RpbWVTcGFuIiwidGltZVNwYW5Ub0hlaWdodCIsInN0b3BNb3ZlRXZlbnQiLCJtb3VzZUV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVuZFJlc2l6aW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5leHRUb3AiLCJnZXROZXh0VG9wIiwidGFyZ2V0Qm90dG9tIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjdXJyZW50IiwiZXZlbnRJZHMiLCJmb3JFYWNoIiwiY3JlYXRlRXZlbnRJZCIsInJlc3VsdHMiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsImdldFRvdGFsV2lkdGgiLCJuZXh0UHJvcHMiLCJuZXdTdGF0ZSIsImVsZW0iLCJvdmVyZmxvd1giLCJvdmVyZmxvdyIsIm92ZXJmbG93WSIsImNvbG9yIiwiZmxvYXQiLCJlbmFibGVNb3VzZUV2ZW50cyIsIkhvdXIiLCJtaW51dGVzIiwibWluU3R5bGUiLCJlYWNoTWluIiwiRXZlbnRQcmV2aWV3IiwidHJhbnNmb3JtIiwiZ2V0RHJhZ2dpbmdTdHlsZSIsIldlYmtpdFRyYW5zZm9ybSIsImdldEl0ZW1TdHlsZXMiLCJjbG9zZXN0Iiwic2VsZWN0b3IiLCJtYXRjaGVzRm4iLCJzb21lIiwiZm4iLCJkb2N1bWVudCIsImJvZHkiLCJwYXJlbnQiLCJzb3VyY2UiLCJiZWdpbkRyYWciLCJjYW5EcmFnIiwiZmluZEV2ZW50QnlJZCIsImNvbm5lY3REcmFnU291cmNlIiwiZHJhZ1NvdXJjZSIsImlzRHJhZ2dpbmciLCJFdmVudCIsImdldExpbmVMZWZ0IiwicmVzaXphYmxlIiwiZHJhZ2dpbmdQb3NpdGlvbiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInZhbHVlcyIsIm92ZXJsYXBzIiwiZXZlbnREaWRDbGljayIsInJlc2l6ZVVwIiwicmVzaXplRG93biIsInNldFRpbWVvdXQiLCJldmVudERpZFJpZ2h0Q2xpY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJuZXdQb3NpdGlvbiIsIm5leHRQb3NpdGlvbiIsImlzRnJlZVBvc2l0aW9uIiwicHJldlBvc2l0aW9uIiwibmV3VGltZVNwYW4iLCJldmVudFdpbGxGaXgiLCJldmVudERpZEZpeCIsInRsRHJhZ2dpbmdFdmVudCIsInRsUmVzaXphYmxlRXZlbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsK0M7Ozs7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SztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7QUN2THRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFR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QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNwQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNsQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx5RkFBeUY7QUFDekY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELGtDOzs7Ozs7O0FDdE9BOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELGtDOzs7Ozs7O0FDOU5BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs4Q0NqRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGtCQUFrQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkNBQTZDLG1DQUFtQzs7QUFFaEY7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkNBQTZDLG1DQUFtQzs7QUFFaEY7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQSwrRUFBK0Usa0JBQWtCO0FBQ2pHO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM1Z0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHlCQUF5QixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsU0FBUzlDLE9BQVQsQ0FBa0JsQixPQUFsQixFQUEwQjtBQUN4QixNQUFNaEosUUFBUTtBQUNaOEosa0JBQWNkLFFBQVFJLDhCQUFSO0FBREYsR0FBZDs7QUFJQSxNQUFNSCxPQUFPRCxRQUFRRSxPQUFSLEVBQWI7QUFDQSxNQUFHRCxRQUFRQSxLQUFLLG1CQUFMLENBQVgsRUFBcUM7QUFDbkNqSixVQUFNLG1CQUFOLElBQTZCaUosS0FBSyxtQkFBTCxDQUE3QjtBQUNEOztBQUVELFNBQU9qSixLQUFQO0FBQ0Q7O0lBRUtvTixZOzs7Ozs7Ozs7OztvQ0FDYTtBQUNmLFVBQUksQ0FBQyxLQUFLcE4sS0FBTCxDQUFXOEosWUFBaEIsRUFBOEI7QUFDNUIsZUFBTztBQUNMbEIsbUJBQVM7QUFESixTQUFQO0FBR0Q7O0FBRUQsVUFBTWUsSUFBSSxLQUFLM0osS0FBTCxDQUFXOEosWUFBWCxDQUF3QkgsQ0FBbEM7QUFDQSxVQUFNRCxJQUFJLEtBQUsxSixLQUFMLENBQVc4SixZQUFYLENBQXdCSixDQUFsQztBQUNBLFVBQU0yRCwyQkFBeUIxRCxDQUF6QixZQUFpQ0QsQ0FBakMsUUFBTjs7QUFFQSxhQUFPLDRCQUFPLEtBQUsxSixLQUFMLENBQVdzSixpQkFBWCxDQUE2QmdFLGdCQUE3QixFQUFQLEVBQXdEO0FBQzdEaEgsa0JBQVMsVUFEb0Q7QUFFN0QrRyxtQkFBV0EsU0FGa0Q7QUFHN0RFLHlCQUFpQkY7QUFINEMsT0FBeEQsQ0FBUDtBQUtEOzs7NkJBRVM7QUFDUixVQUFJM0Usa0JBQWtCLEVBQXRCO0FBQ0EsVUFBRyxLQUFLMUksS0FBTCxDQUFXc0osaUJBQVgsSUFBZ0MsS0FBS3RKLEtBQUwsQ0FBV3NKLGlCQUFYLENBQTZCckosS0FBN0IsQ0FBbUN5SSxlQUF0RSxFQUFzRjtBQUNwRkEsMEJBQWtCLEtBQUsxSSxLQUFMLENBQVdzSixpQkFBWCxDQUE2QnJKLEtBQTdCLENBQW1DeUksZUFBckQ7QUFDRDs7QUFFRCxVQUFJRSxVQUFVLEVBQWQ7QUFDQSxVQUFHLEtBQUs1SSxLQUFMLENBQVdzSixpQkFBWCxJQUFnQyxLQUFLdEosS0FBTCxDQUFXc0osaUJBQVgsQ0FBNkJySixLQUE3QixDQUFtQzJJLE9BQXRFLEVBQThFO0FBQzVFQSxrQkFBVSxLQUFLNUksS0FBTCxDQUFXc0osaUJBQVgsQ0FBNkJySixLQUE3QixDQUFtQzJJLE9BQTdDO0FBQ0Q7QUFDRCxhQUNFO0FBQUE7QUFBQSxVQUFLLEtBQUksU0FBVCxFQUFtQixXQUFVLDZCQUE3QixFQUEyRCxPQUFPLEtBQUs0RSxhQUFMLEVBQWxFO0FBQ0U7QUFDRSwyQkFBaUI5RSxlQURuQjtBQUVFLG1CQUFTRTtBQUZYO0FBREYsT0FERjtBQVFEOzs7O0VBckN3QixnQkFBTWxJLFM7O2tCQXdDbEIseUJBQVV3SixPQUFWLEVBQW1Ca0QsWUFBbkIsQzs7Ozs7Ozs7Ozs7O1FDMURDSyxPLEdBQUFBLE87QUFBVCxTQUFTQSxPQUFULENBQWlCaEIsSUFBakIsRUFBdUJpQixRQUF2QixFQUFpQztBQUN0QyxRQUFJQyxTQUFKOztBQUVBO0FBQ0EsS0FBQyxTQUFELEVBQVcsdUJBQVgsRUFBbUMsb0JBQW5DLEVBQXdELG1CQUF4RCxFQUE0RSxrQkFBNUUsRUFBZ0dDLElBQWhHLENBQXFHLFVBQVNDLEVBQVQsRUFBYTtBQUM5RyxZQUFJLE9BQU9DLFNBQVNDLElBQVQsQ0FBY0YsRUFBZCxDQUFQLElBQTRCLFVBQWhDLEVBQTRDO0FBQ3hDRix3QkFBWUUsRUFBWjtBQUNBLG1CQUFPLElBQVA7QUFDSDtBQUNELGVBQU8sS0FBUDtBQUNILEtBTkQ7O0FBUUEsUUFBSUcsTUFBSjs7QUFFQTtBQUNBLFdBQU92QixJQUFQLEVBQWE7QUFDVHVCLGlCQUFTdkIsS0FBS2hILGFBQWQ7QUFDQSxZQUFJdUksVUFBVUEsT0FBT0wsU0FBUCxFQUFrQkQsUUFBbEIsQ0FBZCxFQUEyQztBQUN2QyxtQkFBT00sTUFBUDtBQUNIO0FBQ0R2QixlQUFPdUIsTUFBUDtBQUNIOztBQUVELFdBQU8sSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7OztBQ3hCRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1DLFNBQVM7QUFDYkMsYUFBVyxtQkFBVWxPLEtBQVYsRUFBaUJnSixPQUFqQixFQUEwQjdDLFNBQTFCLEVBQXFDO0FBQzlDLFdBQU8sNEJBQU8sRUFBUCxFQUFXbkcsS0FBWCxFQUFrQixFQUFDc0osbUJBQW1CbkQsU0FBcEIsRUFBbEIsQ0FBUDtBQUNELEdBSFk7QUFJYmdJLFdBQVMsaUJBQVNuTyxLQUFULEVBQWdCZ0osT0FBaEIsRUFBeUI3QyxTQUF6QixFQUFtQztBQUMxQyxRQUFNbkQsWUFBWWhELE1BQU1nRyxRQUFOLENBQWVvSSxhQUFmLENBQTZCcE8sTUFBTWtDLEVBQW5DLEVBQXVDakMsS0FBdkMsQ0FBNkMrQyxTQUEvRDtBQUNBLFdBQU8sQ0FBQyxDQUFDQSxTQUFUO0FBQ0Q7QUFQWSxDQUFmOztBQVVBLElBQU1rSCxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsT0FBRCxFQUFVbkIsT0FBVixFQUFzQjtBQUNwQyxTQUFPO0FBQ0xxRix1QkFBbUJsRSxRQUFRbUUsVUFBUixFQURkO0FBRUxDLGdCQUFZdkYsUUFBUXVGLFVBQVI7QUFGUCxHQUFQO0FBSUQsQ0FMRDs7SUFPTUMsSzs7O0FBRUosaUJBQVl4TyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYd0MsV0FBS3pDLE1BQU04TSxLQUFOLEtBQWdCdk8sU0FBaEIsR0FBNEIsTUFBS3lCLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0J4QyxTQUFwQixDQUE4QixNQUFLeEQsS0FBTCxDQUFXVCxRQUFYLENBQW9CWCxZQUFwQixFQUE5QixDQUE1QixHQUFnR29CLE1BQU04TSxLQUFOLENBQVlySyxHQUR0RztBQUVYdEIsWUFBTW5CLE1BQU04TSxLQUFOLEtBQWdCdk8sU0FBaEIsR0FBNEIsTUFBS3lCLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0J5SSxXQUFwQixDQUFnQyxNQUFLek8sS0FBTCxDQUFXcUMsTUFBM0MsQ0FBNUIsR0FBaUZyQyxNQUFNOE0sS0FBTixDQUFZM0wsSUFGeEY7QUFHWDBMLGFBQU8sTUFBSzdNLEtBQUwsQ0FBVzZNLEtBSFA7QUFJWDdKLGlCQUFXaEQsTUFBTThNLEtBQU4sS0FBZ0J2TyxTQUFoQixHQUE0QixLQUE1QixHQUFvQyxJQUpwQztBQUtYbVEsaUJBQVcsS0FMQTtBQU1YaEcsdUJBQWlCLEVBTk47QUFPWEUsZUFBUzVJLE1BQU00STtBQVBKLEtBQWI7O0FBVUEsVUFBS3ZHLE1BQUwsR0FBYyxNQUFLckMsS0FBTCxDQUFXcUMsTUFBekI7QUFDQSxVQUFLOUMsUUFBTCxHQUFnQixNQUFLUyxLQUFMLENBQVdULFFBQTNCO0FBQ0EsVUFBS29QLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsVUFBS3pELGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsVUFBS0gsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFVBQUt4RixJQUFMLEdBQVksTUFBS3ZGLEtBQUwsQ0FBV3VGLElBQVgsR0FBa0IsTUFBS3ZGLEtBQUwsQ0FBV3VGLElBQTdCLEdBQW9DLEVBQWhEO0FBQ0EsVUFBS2lCLE9BQUwsR0FBZSxJQUFmOztBQUVBLFFBQUcsTUFBS3hHLEtBQUwsQ0FBVzhNLEtBQWQsRUFBb0I7QUFDbEIsVUFBTXpLLFNBQVMsTUFBS3JDLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0IzRSxjQUFwQixDQUFtQyxNQUFLcEIsS0FBTCxDQUFXa0IsSUFBOUMsRUFBb0RuQixLQUFwRCxDQUEwRGtDLEVBQXpFO0FBQ0EsVUFBTWxELE9BQU8sTUFBS2dCLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0J0RCxTQUFwQixDQUE4QixNQUFLekMsS0FBTCxDQUFXd0MsR0FBekMsQ0FBYjtBQUNBLFlBQUtrTSxnQkFBTCxHQUF3QixFQUFDM1AsTUFBTUEsSUFBUCxFQUFhcUQsUUFBUUEsTUFBckIsRUFBeEI7QUFDQSxZQUFLcEMsS0FBTCxDQUFXeUksZUFBWCxHQUE2QjFKLEtBQUtvRyxjQUFMLEVBQTdCO0FBQ0EsWUFBS25GLEtBQUwsQ0FBV0ksTUFBWCxHQUFvQixNQUFLTCxLQUFMLENBQVdnRyxRQUFYLENBQW9CckQsY0FBcEIsQ0FBbUMsTUFBSzNDLEtBQUwsQ0FBVzhNLEtBQVgsQ0FBaUJ4TixNQUFwRCxDQUFwQjtBQUNBLFlBQUtDLFFBQUwsR0FBZ0IsdUJBQWFQLElBQWIsRUFBbUJBLEtBQUtQLE1BQUwsQ0FBWSxNQUFLdUIsS0FBTCxDQUFXOE0sS0FBWCxDQUFpQnhOLE1BQTdCLENBQW5CLENBQWhCO0FBQ0QsS0FQRCxNQU9PO0FBQ0wsWUFBS1csS0FBTCxDQUFXSSxNQUFYLEdBQW9CLE1BQUtMLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0JtRixnQkFBcEIsQ0FBcUMsTUFBSzVMLFFBQTFDLENBQXBCO0FBQ0Q7QUE5QmdCO0FBK0JsQjs7Ozs2QkFFTztBQUNOLGFBQU87QUFDTDJDLFlBQUksS0FBS2xDLEtBQUwsQ0FBV2tDLEVBRFY7QUFFTEcsZ0JBQVEsS0FBS0EsTUFGUjtBQUdMOUMsa0JBQVUsS0FBS0EsUUFIVjtBQUlMZ0csY0FBTXFKLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsU0FBTCxDQUFlLEtBQUt2SixJQUFwQixDQUFYLENBSkQ7QUFLTHNILGVBQU8sS0FBSzVNLEtBQUwsQ0FBVzRNLEtBTGI7QUFNTGpFLGlCQUFTLEtBQUs1SSxLQUFMLENBQVc0SSxPQU5mO0FBT0x0QyxrQkFBVTtBQUNSN0QsZUFBSyxLQUFLeEMsS0FBTCxDQUFXd0MsR0FEUjtBQUVSdEIsZ0JBQU0sS0FBS2xCLEtBQUwsQ0FBV2tCO0FBRlQ7QUFQTCxPQUFQO0FBWUQ7OzsyQkFFTTROLE0sRUFBTztBQUNaLFVBQU12QyxXQUFXLEVBQWpCO0FBQ0EsVUFBR3VDLE9BQU94UCxRQUFWLEVBQW1CO0FBQ2pCaU4saUJBQVNuTSxNQUFULEdBQWtCLEtBQUtMLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0JtRixnQkFBcEIsQ0FBcUM0RCxPQUFPeFAsUUFBNUMsQ0FBbEI7QUFDQWlOLGlCQUFTL0osR0FBVCxHQUFlLEtBQUt6QyxLQUFMLENBQVdnRyxRQUFYLENBQW9CeEMsU0FBcEIsQ0FBOEJ1TCxPQUFPeFAsUUFBUCxDQUFnQlgsWUFBaEIsRUFBOUIsQ0FBZjtBQUNBLGFBQUtXLFFBQUwsR0FBZ0J3UCxPQUFPeFAsUUFBdkI7QUFDRDs7QUFFRCxVQUFHd1AsT0FBT2xDLEtBQVYsRUFBZ0I7QUFDZEwsaUJBQVNLLEtBQVQsR0FBaUJrQyxPQUFPbEMsS0FBeEI7QUFDRDs7QUFFRCxVQUFHa0MsT0FBT25HLE9BQVYsRUFBa0I7QUFDaEI0RCxpQkFBUzVELE9BQVQsR0FBbUJtRyxPQUFPbkcsT0FBMUI7QUFDRDs7QUFFRCxVQUFHbUcsT0FBT3hKLElBQVYsRUFBZTtBQUNiLGFBQUtBLElBQUwsR0FBWXdKLE9BQU94SixJQUFuQjtBQUNEOztBQUVELFdBQUtxQixRQUFMLENBQWM0RixRQUFkO0FBQ0Q7Ozs7O0FBaUNEOzs7OzttQ0FLZWxHLFEsRUFBUztBQUN0QixXQUFLLElBQUloRSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3RDLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0I5RSxlQUFwQixDQUFvQ3FCLE1BQXhELEVBQWdFRCxHQUFoRSxFQUFxRTtBQUNuRSxZQUFJTCxLQUFLLEtBQUtqQyxLQUFMLENBQVdnRyxRQUFYLENBQW9COUUsZUFBcEIsQ0FBb0NvQixDQUFwQyxDQUFUO0FBQ0EsWUFBR0wsT0FBTyxJQUFWLEVBQWdCO0FBQ2hCLFlBQUdBLEdBQUdJLE1BQUgsSUFBYWlFLFNBQVNqRSxNQUF6QixFQUFpQztBQUNqQyxZQUFHSixHQUFHbUIsZUFBSCxDQUFtQjRMLFFBQW5CLENBQTRCMUksU0FBUy9HLFFBQXJDLENBQUgsRUFBa0Q7QUFDaEQsaUJBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7OzsyQkFFTWtELEcsRUFBS3RCLEksRUFBSztBQUNmLFdBQUt5RixRQUFMLENBQWMsRUFBQ25FLEtBQUtBLEdBQU4sRUFBV3RCLE1BQU1BLElBQWpCLEVBQWQ7QUFDRDs7OzRCQUVPcUUsQyxFQUFFO0FBQUE7O0FBQ1IsVUFBRyxLQUFLeEYsS0FBTCxDQUFXZ0csUUFBWCxDQUFvQmhHLEtBQXBCLENBQTBCaVAsYUFBN0IsRUFBMkM7QUFDekMsWUFBRyxLQUFLbEUsUUFBUixFQUFpQjtBQUNmO0FBQ0Q7O0FBRUQsYUFBSy9LLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0JoRyxLQUFwQixDQUEwQmlQLGFBQTFCLENBQXdDO0FBQ3RDM0ksb0JBQVU7QUFDUlAsdUJBQVcsS0FBSy9GLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0IvRSxjQUFwQixDQUFtQ3FELElBQW5DLENBQXdDcUIsWUFBeEMsQ0FBcURJLFNBRHhEO0FBRVJRLHdCQUFZLEtBQUt2RyxLQUFMLENBQVdnRyxRQUFYLENBQW9CL0UsY0FBcEIsQ0FBbUN1RixPQUFuQyxDQUEyQ0QsVUFGL0M7QUFHUjlELGlCQUFLK0MsRUFBRU0sT0FIQztBQUlSM0Usa0JBQU1xRSxFQUFFaUI7QUFKQSxXQUQ0QjtBQU90Q04scUJBQVcsSUFQMkI7QUFRdEMvRSx5QkFBZSxLQUFLcEIsS0FBTCxDQUFXZ0csUUFBWCxDQUFvQjdELGNBQXBCLENBQW1DSCxJQUFuQyxDQUF3QztBQUFBLG1CQUFpQlosY0FBY3BCLEtBQWQsQ0FBb0JrQyxFQUFwQixJQUEwQixPQUFLRyxNQUFoRDtBQUFBLFdBQXhDLENBUnVCO0FBU3RDcUUsaUJBQU9sQjtBQVQrQixTQUF4QztBQVdEO0FBQ0Y7Ozs2QkFFUXhHLEksRUFBTXFELE0sRUFBTztBQUNwQixXQUFLc00sZ0JBQUwsR0FBd0IsRUFBQzNQLE1BQU1BLElBQVAsRUFBYXFELFFBQVFBLE1BQXJCLEVBQXhCO0FBQ0EsV0FBS3VFLFFBQUwsQ0FBYyxFQUFDOEIsaUJBQWlCMUosS0FBS29HLGNBQUwsRUFBbEIsRUFBZDtBQUNEOzs7NkJBRVFJLEMsRUFBRTtBQUNULFdBQUt4RixLQUFMLENBQVdnRyxRQUFYLENBQW9CL0UsY0FBcEIsQ0FBbUNpTyxRQUFuQyxDQUE0QyxJQUE1QyxFQUFrRDFKLEVBQUVNLE9BQXBEO0FBQ0Q7OzsrQkFFVU4sQyxFQUFFO0FBQ1gsV0FBS3hGLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0IvRSxjQUFwQixDQUFtQ2tPLFVBQW5DLENBQThDLElBQTlDLEVBQW9EM0osRUFBRU0sT0FBdEQ7QUFDRDs7O2dDQUVXTixDLEVBQUU7QUFBQTs7QUFDWixVQUFHLEtBQUswRixnQkFBUixFQUF5QjtBQUN2QixZQUFNc0IsV0FBVztBQUNmOUQsMkJBQWlCLElBREY7QUFFZkMsOEJBQW9CO0FBRkwsU0FBakI7O0FBS0EsWUFBRyxLQUFLdUMsZ0JBQVIsRUFBeUI7QUFDdkJzQixtQkFBUy9KLEdBQVQsR0FBZSxLQUFLekMsS0FBTCxDQUFXZ0csUUFBWCxDQUFvQnhDLFNBQXBCLENBQThCLEtBQUswSCxnQkFBTCxDQUFzQnRNLFlBQXRCLEVBQTlCLENBQWY7QUFDQTROLG1CQUFTbk0sTUFBVCxHQUFrQixLQUFLTCxLQUFMLENBQVdnRyxRQUFYLENBQW9CbUYsZ0JBQXBCLENBQXFDLEtBQUtELGdCQUExQyxDQUFsQjtBQUNEOztBQUVELGFBQUt0RSxRQUFMLENBQWM0RixRQUFkO0FBQ0QsT0FaRCxNQVlPO0FBQ0wsYUFBSzFGLE9BQUw7QUFDRDs7QUFFRDtBQUNBc0ksaUJBQVc7QUFBQSxlQUFNLE9BQUtyRSxRQUFMLEdBQWdCLEtBQXRCO0FBQUEsT0FBWCxFQUF3QyxHQUF4QztBQUNEOzs7a0NBRWF2RixDLEVBQUU7QUFDZCxVQUFHLEtBQUt4RixLQUFMLENBQVdnRyxRQUFYLENBQW9CaEcsS0FBcEIsQ0FBMEJxUCxrQkFBN0IsRUFBZ0Q7QUFDOUMsYUFBS3JQLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0JoRyxLQUFwQixDQUEwQnFQLGtCQUExQixDQUE2QztBQUMzQzNJLGlCQUFPbEIsQ0FEb0M7QUFFM0NXLHFCQUFXO0FBRmdDLFNBQTdDO0FBSUQ7QUFDRjs7O3VDQUVpQjtBQUNoQixhQUFPO0FBQ0w5RixnQkFBUSxLQUFLSixLQUFMLENBQVdJLE1BRGQ7QUFFTEksZUFBTyxLQUFLVCxLQUFMLENBQVdTLEtBRmI7QUFHTGdDLGFBQUssS0FBS3hDLEtBQUwsQ0FBV3dDLEdBSFg7QUFJTHRCLGNBQU0sS0FBS2xCLEtBQUwsQ0FBV2tCLElBSlo7QUFLTG1PLHlCQUFpQixLQUFLclAsS0FBTCxDQUFXNE07QUFMdkIsT0FBUDtBQU9EOzs7Z0NBRVU7QUFDVCxhQUFPO0FBQ0xwSyxhQUFLLEtBQUt4QyxLQUFMLENBQVd3QyxHQURYO0FBRUx0QixjQUFNLEtBQUtsQixLQUFMLENBQVdrQjtBQUZaLE9BQVA7QUFJRDs7OzZCQUVRMEwsSyxFQUFNO0FBQ2IsV0FBS2pHLFFBQUwsQ0FBYyxFQUFDaUcsT0FBT0EsS0FBUixFQUFkO0FBQ0Q7OzsrQkFFVWpFLE8sRUFBUTtBQUNqQixXQUFLaEMsUUFBTCxDQUFjLEVBQUNnQyxTQUFTQSxPQUFWLEVBQWQ7QUFDRDs7OzZCQUVPO0FBQ04sV0FBS2hDLFFBQUwsQ0FBYztBQUNaOEgsbUJBQVc7QUFEQyxPQUFkO0FBR0Q7Ozs0QkFFTTtBQUNMLFdBQUs5SCxRQUFMLENBQWM7QUFDWjVELG1CQUFXLElBREM7QUFFWjBGLHlCQUFpQixLQUFLbkosUUFBTCxDQUFjWCxZQUFkLEdBQTZCd0csY0FBN0I7QUFGTCxPQUFkOztBQUtBLFdBQUt1SixnQkFBTCxHQUF3QixFQUFDM1AsTUFBTSxLQUFLTyxRQUFMLENBQWNYLFlBQWQsRUFBUCxFQUFxQ3lELFFBQVEsS0FBS0EsTUFBbEQsRUFBeEI7QUFDRDs7OzhCQUVRO0FBQ1AsYUFBTyxDQUFDLEtBQUtwQyxLQUFMLENBQVcrQyxTQUFaLElBQXlCLENBQUMsS0FBSy9DLEtBQUwsQ0FBV3lPLFNBQTVDO0FBQ0Q7OztnQ0FFVTtBQUNULFVBQUlhLGNBQWMsS0FBS0MsWUFBdkI7QUFDQSxVQUFHLENBQUNELFdBQUosRUFBZ0I7QUFDZCxlQUFPLElBQVA7QUFDRDs7QUFFRCxhQUFPLEtBQUtFLGNBQUwsQ0FBb0JGLFdBQXBCLENBQVA7QUFDRDs7O21DQUVhO0FBQ1osVUFBSUEsY0FBYyxLQUFLRyxZQUF2QjtBQUNBLFVBQUcsQ0FBQ0gsV0FBSixFQUFnQjtBQUNkLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQU8sS0FBS0UsY0FBTCxDQUFvQkYsV0FBcEIsQ0FBUDtBQUNEOzs7NkJBRU87QUFDTixVQUFHLEtBQUtaLGdCQUFSLEVBQXlCO0FBQ3ZCLFlBQU14TixPQUFPLEtBQUtuQixLQUFMLENBQVdnRyxRQUFYLENBQW9CeUksV0FBcEIsQ0FBZ0MsS0FBS3BNLE1BQXJDLENBQWI7QUFDQSxZQUFNSSxNQUFNLEtBQUt6QyxLQUFMLENBQVdnRyxRQUFYLENBQW9CeEMsU0FBcEIsQ0FBOEIsS0FBS2pFLFFBQUwsQ0FBY1gsWUFBZCxFQUE5QixDQUFaO0FBQ0EsYUFBSytQLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsYUFBSy9ILFFBQUwsQ0FBYztBQUNaNUQscUJBQVcsS0FEQztBQUVaMEYsMkJBQWlCLEVBRkw7QUFHWmpHLGVBQUtBLEdBSE87QUFJWnRCLGdCQUFNQTtBQUpNLFNBQWQ7QUFNRCxPQVZELE1BVU8sSUFBRyxLQUFLK0osZ0JBQVIsRUFBeUI7QUFDOUIsWUFBTXpJLE9BQU0sS0FBS3pDLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0J4QyxTQUFwQixDQUE4QixLQUFLakUsUUFBTCxDQUFjWCxZQUFkLEVBQTlCLENBQVo7QUFDQSxZQUFNeUIsU0FBUyxLQUFLTCxLQUFMLENBQVdnRyxRQUFYLENBQW9CbUYsZ0JBQXBCLENBQXFDLEtBQUs1TCxRQUExQyxDQUFmO0FBQ0EsYUFBSzJMLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsYUFBS3RFLFFBQUwsQ0FBYztBQUNaOEgscUJBQVcsS0FEQztBQUVaaEcsMkJBQWlCLEVBRkw7QUFHWmpHLGVBQUtBLElBSE87QUFJWnBDLGtCQUFRQTtBQUpJLFNBQWQ7QUFNRCxPQVZNLE1BVUE7QUFDTCxhQUFLdUcsUUFBTCxDQUFjO0FBQ1o1RCxxQkFBVyxLQURDO0FBRVowTCxxQkFBVyxLQUZDO0FBR1poRywyQkFBaUI7QUFITCxTQUFkO0FBS0Q7O0FBRUQsV0FBSzFJLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0IxRSxpQkFBcEI7QUFDRDs7OzZCQUVPO0FBQ04sV0FBS3RCLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0IxRSxpQkFBcEI7QUFDQSxhQUFPLEtBQUt0QixLQUFMLENBQVdnRyxRQUFYLENBQW9CaEMsV0FBcEIsQ0FBZ0MsS0FBS2hFLEtBQUwsQ0FBV2tDLEVBQTNDLENBQVA7QUFDRDs7O2dDQUVVO0FBQ1QsVUFBRyxLQUFLM0MsUUFBUixFQUFpQjtBQUNmLGVBQU8sS0FBS0EsUUFBTCxDQUFjUixXQUFkLEVBQVA7QUFDRCxPQUZELE1BRU8sSUFBRyxLQUFLaUIsS0FBTCxDQUFXOE0sS0FBZCxFQUFvQjtBQUN6QixlQUFPakksU0FBUyxLQUFLN0UsS0FBTCxDQUFXOE0sS0FBWCxDQUFpQnhOLE1BQTFCLEVBQWtDLEVBQWxDLENBQVA7QUFDRDtBQUNGOzs7MEJBRUk7QUFDSCxVQUFHLEtBQUtxUCxnQkFBUixFQUF5QjtBQUN2QixZQUFNMU8sUUFBUTtBQUNad0MsZUFBSyxLQUFLekMsS0FBTCxDQUFXZ0csUUFBWCxDQUFvQnhDLFNBQXBCLENBQThCLEtBQUttTCxnQkFBTCxDQUFzQjNQLElBQXBELENBRE87QUFFWm1DLGdCQUFNLEtBQUtuQixLQUFMLENBQVdnRyxRQUFYLENBQW9CeUksV0FBcEIsQ0FBZ0MsS0FBS0UsZ0JBQUwsQ0FBc0J0TSxNQUF0RCxDQUZNO0FBR1pXLHFCQUFXLEtBSEM7QUFJWjBGLDJCQUFpQjtBQUpMLFNBQWQ7QUFNQSxZQUFNaUgsY0FBYyxLQUFLcFEsUUFBTCxDQUFjTCxjQUFkLENBQTZCLEtBQUt5UCxnQkFBTCxDQUFzQjNQLElBQW5ELENBQXBCO0FBQ0EsWUFBRyxLQUFLZ0IsS0FBTCxDQUFXZ0csUUFBWCxDQUFvQmhHLEtBQXBCLENBQTBCNFAsWUFBN0IsRUFBMEM7QUFDeEMsZUFBSzVQLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0JoRyxLQUFwQixDQUEwQjRQLFlBQTFCLENBQXVDO0FBQ3JDekosdUJBQVcsSUFEMEI7QUFFckNsRyxtQkFBT0EsS0FGOEI7QUFHckNvQyxvQkFBUSxLQUFLc00sZ0JBQUwsQ0FBc0J0TSxNQUhPO0FBSXJDOUMsc0JBQVVvUTtBQUoyQixXQUF2QztBQU1EO0FBQ0QsYUFBSy9JLFFBQUwsQ0FBYzNHLEtBQWQ7QUFDQSxhQUFLb0MsTUFBTCxHQUFjLEtBQUtzTSxnQkFBTCxDQUFzQnRNLE1BQXBDO0FBQ0EsYUFBSzlDLFFBQUwsR0FBZ0JvUSxXQUFoQjtBQUNBLGFBQUtoQixnQkFBTCxHQUF3QixJQUF4QjtBQUNELE9BcEJELE1Bb0JPLElBQUcsS0FBS3pELGdCQUFSLEVBQXlCO0FBQzlCLFlBQU1qTCxTQUFRO0FBQ1p5TyxxQkFBVyxLQURDO0FBRVpoRywyQkFBaUI7QUFGTCxTQUFkO0FBSUEsWUFBRyxLQUFLMUksS0FBTCxDQUFXZ0csUUFBWCxDQUFvQmhHLEtBQXBCLENBQTBCNFAsWUFBN0IsRUFBMEM7QUFDeEMsZUFBSzVQLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0JoRyxLQUFwQixDQUEwQjRQLFlBQTFCLENBQXVDO0FBQ3JDekosdUJBQVcsSUFEMEI7QUFFckNsRyxtQkFBT0EsTUFGOEI7QUFHckNvQyxvQkFBUSxLQUFLQSxNQUh3QjtBQUlyQzlDLHNCQUFVLEtBQUsyTDtBQUpzQixXQUF2QztBQU1EO0FBQ0QsYUFBS3RFLFFBQUwsQ0FBYzNHLE1BQWQ7QUFDQSxhQUFLVixRQUFMLEdBQWdCLEtBQUsyTCxnQkFBckI7QUFDQSxhQUFLQSxnQkFBTCxHQUF3QixJQUF4QjtBQUNELE9BaEJNLE1BZ0JBO0FBQ0wsYUFBS3RFLFFBQUwsQ0FBYztBQUNaNUQscUJBQVcsS0FEQztBQUVaMEwscUJBQVcsS0FGQztBQUdaaEcsMkJBQWlCO0FBSEwsU0FBZDtBQUtEOztBQUVELFdBQUsxSSxLQUFMLENBQVdnRyxRQUFYLENBQW9CMUUsaUJBQXBCO0FBQ0EsVUFBRyxLQUFLdEIsS0FBTCxDQUFXZ0csUUFBWCxDQUFvQmhHLEtBQXBCLENBQTBCNlAsV0FBN0IsRUFBeUM7QUFDdkMsYUFBSzdQLEtBQUwsQ0FBV2dHLFFBQVgsQ0FBb0JoRyxLQUFwQixDQUEwQjZQLFdBQTFCLENBQXNDO0FBQ3BDMUoscUJBQVc7QUFEeUIsU0FBdEM7QUFHRDtBQUNGOzs7MkJBRU12RyxHLEVBQUtrSSxLLEVBQU07QUFDaEIsV0FBS3ZDLElBQUwsQ0FBVTNGLEdBQVYsSUFBaUJrSSxLQUFqQjtBQUNEOzs7MkJBRU1sSSxHLEVBQUk7QUFDVCxhQUFPLEtBQUsyRixJQUFMLENBQVUzRixHQUFWLENBQVA7QUFDRDs7O3dDQUVrQjtBQUNqQixXQUFLSSxLQUFMLENBQVdnRyxRQUFYLENBQW9COUUsZUFBcEIsQ0FBb0NYLElBQXBDLENBQXlDLElBQXpDO0FBQ0Q7OzsyQ0FFcUI7QUFBQTs7QUFDcEIsV0FBS1AsS0FBTCxDQUFXZ0csUUFBWCxDQUFvQjlFLGVBQXBCLEdBQXNDLEtBQUtsQixLQUFMLENBQVdnRyxRQUFYLENBQW9COUUsZUFBcEIsQ0FBb0M2QixNQUFwQyxDQUEyQztBQUFBLGVBQU1kLGFBQU47QUFBQSxPQUEzQyxDQUF0QztBQUNEOzs7NkJBRU87QUFBQTs7QUFDTixVQUFNN0IsUUFBUTtBQUNaQyxnQkFBUSxLQUFLSixLQUFMLENBQVdJLE1BRFA7QUFFWmlHLGtCQUFVLFVBRkU7QUFHWjdELGFBQUssS0FBS3hDLEtBQUwsQ0FBV3dDLEdBQVgsR0FBaUIsSUFIVjtBQUladEIsY0FBTSxLQUFLbEIsS0FBTCxDQUFXa0IsSUFBWCxHQUFrQixJQUpaO0FBS1pWLGVBQU8sS0FBS1QsS0FBTCxDQUFXUyxLQUFYLEdBQW1CLElBTGQ7QUFNWjZPLHlCQUFpQixLQUFLclAsS0FBTCxDQUFXNE0sS0FOaEI7QUFPWmpFLGlCQUFTLEtBQUs1SSxLQUFMLENBQVd1TyxVQUFYLEdBQXdCLE1BQXhCLEdBQWlDO0FBUDlCLE9BQWQ7O0FBVUEsYUFBTyxLQUFLdk8sS0FBTCxDQUFXcU8saUJBQVgsQ0FDTDtBQUFBO0FBQUEsVUFBSyxLQUFLO0FBQUEsbUJBQVEsT0FBSzdILE9BQUwsR0FBZWlHLElBQXZCO0FBQUEsV0FBVixFQUF1QyxlQUFlO0FBQUEsbUJBQUssT0FBSzVGLGFBQUwsQ0FBbUJyQixDQUFuQixDQUFMO0FBQUEsV0FBdEQsRUFBa0YsV0FBVywwQkFBVyxhQUFYLEVBQTBCLEVBQUNzSyxpQkFBaUIsS0FBSzdQLEtBQUwsQ0FBVytDLFNBQTdCLEVBQXdDK00sa0JBQWtCLEtBQUs5UCxLQUFMLENBQVd5TyxTQUFyRSxFQUExQixDQUE3RixFQUF5TSxPQUFPdE8sS0FBaE4sRUFBdU4sU0FBUztBQUFBLG1CQUFLLE9BQUswRyxPQUFMLENBQWF0QixDQUFiLENBQUw7QUFBQSxXQUFoTztBQUNJLG9CQUFNO0FBQ04sY0FBRyxPQUFLdkYsS0FBTCxDQUFXeU8sU0FBZCxFQUF3QjtBQUN0QixtQkFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxnQkFBZixFQUFnQyxjQUFjO0FBQUEseUJBQUssT0FBS1EsUUFBTCxDQUFjMUosQ0FBZCxDQUFMO0FBQUEsaUJBQTlDLEVBQXFFLGFBQWE7QUFBQSx5QkFBSyxPQUFLMEosUUFBTCxDQUFjMUosQ0FBZCxDQUFMO0FBQUEsaUJBQWxGO0FBQ0UsbURBQUcsV0FBVSxZQUFiLEVBQTBCLGVBQVksTUFBdEM7QUFERixhQURGO0FBS0Q7QUFDRixTQVJBLEVBREg7QUFVRTtBQUNFLDJCQUFpQixLQUFLdkYsS0FBTCxDQUFXeUksZUFEOUI7QUFFRSw4QkFBb0IsS0FBS3pJLEtBQUwsQ0FBVzBJLGtCQUZqQztBQUdFLG1CQUFTLEtBQUsxSSxLQUFMLENBQVcySTtBQUh0QixVQVZGO0FBZUksb0JBQU07QUFDTixjQUFHLE9BQUszSSxLQUFMLENBQVd5TyxTQUFkLEVBQXdCO0FBQ3RCLG1CQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLHlCQUFmLEVBQXlDLGNBQWM7QUFBQSx5QkFBSyxPQUFLUyxVQUFMLENBQWdCM0osQ0FBaEIsQ0FBTDtBQUFBLGlCQUF2RCxFQUFnRixhQUFhO0FBQUEseUJBQUssT0FBSzJKLFVBQUwsQ0FBZ0IzSixDQUFoQixDQUFMO0FBQUEsaUJBQTdGO0FBQ0UsbURBQUcsV0FBVSxZQUFiLEVBQTBCLGVBQVksTUFBdEM7QUFERixhQURGO0FBS0Q7QUFDRixTQVJBO0FBZkgsT0FESyxDQUFQO0FBMkJEOzs7d0JBMVVvQjtBQUNuQixhQUFPLEtBQUswRixnQkFBTCxJQUF5QixLQUFLM0wsUUFBckM7QUFDRDs7O3dCQUVpQjtBQUNoQixVQUFHLEtBQUtvUCxnQkFBUixFQUF5QjtBQUN2QixlQUFPO0FBQ0x0TSxrQkFBUSxLQUFLc00sZ0JBQUwsQ0FBc0J0TSxNQUR6QjtBQUVMOUMsb0JBQVUsS0FBS0EsUUFBTCxDQUFjTCxjQUFkLENBQTZCLEtBQUt5UCxnQkFBTCxDQUFzQjNQLElBQW5EO0FBRkwsU0FBUDtBQUlELE9BTEQsTUFLTyxJQUFHLEtBQUtrTSxnQkFBUixFQUF5QjtBQUM5QixlQUFNO0FBQ0o3SSxrQkFBUSxLQUFLQSxNQURUO0FBRUo5QyxvQkFBVSxLQUFLMkw7QUFGWCxTQUFOO0FBSUQ7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7Ozt3QkFFaUI7QUFDaEIsVUFBRyxDQUFDLEtBQUt5RCxnQkFBTixJQUEwQixDQUFDLEtBQUt6RCxnQkFBbkMsRUFBb0Q7QUFDbEQsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTTtBQUNKN0ksa0JBQVEsS0FBS0EsTUFEVDtBQUVKOUMsb0JBQVUsS0FBS0E7QUFGWCxTQUFOO0FBSUQ7QUFDRjs7OztFQXRHaUIsZ0JBQU1tQixTOztBQXNaMUI4TixNQUFNaEssWUFBTixHQUFxQjtBQUNuQm9FLFdBQVM7QUFEVSxDQUFyQjs7a0JBSWUsMEJBQVcsT0FBWCxFQUFvQnFGLE1BQXBCLEVBQTRCL0QsT0FBNUIsRUFBcUNzRSxLQUFyQyxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcImNsYXNzbmFtZXNcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImNsYXNzbmFtZXNcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKSA6IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiY2xhc3NOYW1lc1wiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDU1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZWQyNTczYWU0NjA4ZjBhMGQwMSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVGltZSBmcm9tICcuL1RpbWUnXG4vKipcbiAqIOS4gOW6pueUn+aIkOOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOBr+WkieabtOOBl+OBvuOBm+OCk+OAglxuICog5aSJ5pu044Oh44K944OD44OJ44Gv5paw44GX44GE44Kq44OW44K444Kn44Kv44OI44KS5biw44GX44G+44GZ44CCXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVTcGFuXG57XG4gIHN0YXRpYyBjcmVhdGUoc3RhcnQsIGVuZCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKG5ldyBUaW1lKHN0YXJ0WzBdLCBzdGFydFsxXSksIG5ldyBUaW1lKGVuZFswXSwgZW5kWzFdKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzdGFydFRpbWUsIGVuZFRpbWUpe1xuICAgIGlmKHN0YXJ0VGltZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIHN0YXJ0VGltZSA9IG5ldyBUaW1lKCk7XG4gICAgfVxuICAgIGlmKGVuZFRpbWUgPT09IHVuZGVmaW5lZCl7XG4gICAgICBlbmRUaW1lID0gbmV3IFRpbWUoKTtcbiAgICB9XG4gICAgd2hpbGUoc3RhcnRUaW1lLmNvbXBhcmUoZW5kVGltZSkgPj0gMCl7XG4gICAgICAgIGVuZFRpbWUgPSBlbmRUaW1lLmFkZE1pbigyNCAqIDYwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgdGhpcy5fZW5kVGltZSA9IGVuZFRpbWU7XG4gIH1cblxuICBjbG9uZSgpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aGlzLmdldFN0YXJ0VGltZSgpLmNsb25lKCksIHRoaXMuZ2V0RW5kVGltZSgpLmNsb25lKCkpO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKXtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUuZ2V0RGlzdGFuY2UodGhpcy5fZW5kVGltZSk7XG4gIH1cblxuICBnZXRTdGFydFRpbWUoKXsgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZTsgfVxuICBnZXRFbmRUaW1lKCl7IHJldHVybiB0aGlzLl9lbmRUaW1lOyB9XG5cbiAgc2hpZnRFbmRUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lLmFkZE1pbigtdGhpcy5nZXREaXN0YW5jZSgpKSwgdGltZSk7XG4gIH1cblxuICBzaGlmdFN0YXJ0SG91cihob3VyKXtcbiAgICByZXR1cm4gdGhpcy5zaGlmdFN0YXJ0VGltZShuZXcgVGltZShob3VyLCB0aGlzLl9zdGFydFRpbWUuZ2V0TWluKCkpKTtcbiAgfVxuXG4gIHNoaWZ0U3RhcnRNaW4obWluKXtcbiAgICByZXR1cm4gdGhpcy5zaGlmdFN0YXJ0VGltZShuZXcgVGltZSh0aGlzLl9zdGFydFRpbWUuZ2V0SG91cigpLCBtaW4pKTtcbiAgfVxuXG4gIHNoaWZ0U3RhcnRUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lLCB0aW1lLmFkZE1pbih0aGlzLmdldERpc3RhbmNlKCkpKTtcbiAgfVxuXG4gIGFkZE1pbihtaW51dGUpe1xuICAgIHJldHVybiBuZXcgVGltZVNwYW4odGhpcy5nZXRTdGFydFRpbWUoKSwgdGhpcy5nZXRFbmRUaW1lKCkuYWRkTWluKG1pbnV0ZSkpO1xuICB9XG5cbiAgZXF1YWxzKHRpbWVTcGFuKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmVxdWFscyh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgJiYgdGhpcy5nZXRFbmRUaW1lKCkuZXF1YWxzKHRpbWVTcGFuLmdldEVuZFRpbWUoKSk7XG4gIH1cblxuICBjb250YWlucyh0aW1lU3Bhbil7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5jb21wYXJlKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSA8IDAgJiYgdGhpcy5nZXRFbmRUaW1lKCkuY29tcGFyZSh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpID4gMDtcbiAgfVxuXG4gIGNvbnRhaW5zVGltZSh0aW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUodGltZSkgPCAwICYmIHRoaXMuZ2V0RW5kVGltZSgpLmNvbXBhcmUodGltZSkgPiAwO1xuICB9XG5cbiAgb3ZlcmxhcHModGltZVNwYW4pe1xuICAgICAgaWYodGltZVNwYW4uY29udGFpbnModGhpcykpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmNvbnRhaW5zVGltZSh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmNvbnRhaW5zVGltZSh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZWFjaEhvdXIoY2FsbGJhY2spe1xuICAgICAgdmFyIGhvdXIgPSB0aGlzLmdldFN0YXJ0VGltZSgpLmdldEhvdXIoKTtcbiAgICAgIHZhciBlbmQgPSB0aGlzLmdldEVuZFRpbWUoKS5nZXRIb3VyKCk7XG4gICAgICB2YXIga2V5ID0gMDtcblxuICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgaWYoaG91ciA9PT0gZW5kKXtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChob3VyLCBrZXksIGhvdXIsIHRoaXMuZ2V0RW5kVGltZSgpLmdldE1pbigpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChob3VyLCBrZXksIGhvdXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhvdXIgKz0gMTtcbiAgICAgICAgICArK2tleTtcbiAgICAgIH1cbiAgfVxuXG4gIGVhY2hUaW1lKGNhbGxiYWNrLCBtaW51dGVJbnRlcnZhbCl7XG4gICAgICB2YXIga2V5ID0gMDtcbiAgICAgIG1pbnV0ZUludGVydmFsID0gbWludXRlSW50ZXJ2YWwgPyBtaW51dGVJbnRlcnZhbCA6IDYwO1xuXG4gICAgICB2YXIgdGltZSA9IHRoaXMuZ2V0U3RhcnRUaW1lKCk7XG4gICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICBpZih0aW1lLmNvbXBhcmUodGhpcy5nZXRFbmRUaW1lKCkpID4gMCl7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGltZSwga2V5LCB0aW1lKTtcblxuICAgICAgICAgIHRpbWUgPSB0aW1lLmFkZE1pbihtaW51dGVJbnRlcnZhbCk7XG4gICAgICAgICAgKytrZXk7XG4gICAgICB9XG4gIH1cblxuICB0b1N0cmluZygpe1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZSArICd+JyArIHRoaXMuX2VuZFRpbWU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzc25hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3NuYW1lc1wiLFwiYW1kXCI6XCJjbGFzc25hbWVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob3VyczogW11cbiAgICB9XG4gICAgdGhpcy5wcm9wcy50aW1lU3Bhbi5lYWNoVGltZSgoa2V5LCB0aW1lKSA9PiB7XG4gICAgICBpZighdGltZS5lcXVhbHModGhpcy5wcm9wcy50aW1lU3Bhbi5nZXRFbmRUaW1lKCkpKXtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgLy9ib3JkZXIxcHjjgpLotrPjgZlcbiAgICAgICAgICBoZWlnaHQ6ICh0aGlzLnByb3BzLm1pbkhlaWdodCArIDEpICogNFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUuaG91cnMucHVzaChcbiAgICAgICAgICA8ZGl2IGtleT17dGltZS5nZXRIb3VyKCl9IHN0eWxlPXtzdHlsZX0+e3RpbWUuZ2V0RGlzcGxheUhvdXIoKX08L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsUnVsZXJWaWV3XCIgc3R5bGU9e3t3aWR0aDogUnVsZXIud2lkdGggKyAncHgnfX0+e3RoaXMuc3RhdGUuaG91cnN9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBSdWxlci5wcm9wVHlwZXMgPSB7XG4vLyAgIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWRcbi8vIH1cblxuUnVsZXIud2lkdGggPSAzMDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1J1bGVyLmpzeCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRU5EX0RSQUcgPSBleHBvcnRzLkRST1AgPSBleHBvcnRzLkhPVkVSID0gZXhwb3J0cy5QVUJMSVNIX0RSQUdfU09VUkNFID0gZXhwb3J0cy5CRUdJTl9EUkFHID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmJlZ2luRHJhZyA9IGJlZ2luRHJhZztcbmV4cG9ydHMucHVibGlzaERyYWdTb3VyY2UgPSBwdWJsaXNoRHJhZ1NvdXJjZTtcbmV4cG9ydHMuaG92ZXIgPSBob3ZlcjtcbmV4cG9ydHMuZHJvcCA9IGRyb3A7XG5leHBvcnRzLmVuZERyYWcgPSBlbmREcmFnO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2lzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2lzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNBcnJheSk7XG5cbnZhciBfaXNPYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNPYmplY3QnKTtcblxudmFyIF9pc09iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc09iamVjdCk7XG5cbnZhciBfbWF0Y2hlc1R5cGUgPSByZXF1aXJlKCcuLi91dGlscy9tYXRjaGVzVHlwZScpO1xuXG52YXIgX21hdGNoZXNUeXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdGNoZXNUeXBlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEJFR0lOX0RSQUcgPSBleHBvcnRzLkJFR0lOX0RSQUcgPSAnZG5kLWNvcmUvQkVHSU5fRFJBRyc7XG52YXIgUFVCTElTSF9EUkFHX1NPVVJDRSA9IGV4cG9ydHMuUFVCTElTSF9EUkFHX1NPVVJDRSA9ICdkbmQtY29yZS9QVUJMSVNIX0RSQUdfU09VUkNFJztcbnZhciBIT1ZFUiA9IGV4cG9ydHMuSE9WRVIgPSAnZG5kLWNvcmUvSE9WRVInO1xudmFyIERST1AgPSBleHBvcnRzLkRST1AgPSAnZG5kLWNvcmUvRFJPUCc7XG52YXIgRU5EX0RSQUcgPSBleHBvcnRzLkVORF9EUkFHID0gJ2RuZC1jb3JlL0VORF9EUkFHJztcblxuZnVuY3Rpb24gYmVnaW5EcmFnKHNvdXJjZUlkcykge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogeyBwdWJsaXNoU291cmNlOiB0cnVlLCBjbGllbnRPZmZzZXQ6IG51bGwgfTtcbiAgdmFyIHB1Ymxpc2hTb3VyY2UgPSBvcHRpb25zLnB1Ymxpc2hTb3VyY2UsXG4gICAgICBjbGllbnRPZmZzZXQgPSBvcHRpb25zLmNsaWVudE9mZnNldCxcbiAgICAgIGdldFNvdXJjZUNsaWVudE9mZnNldCA9IG9wdGlvbnMuZ2V0U291cmNlQ2xpZW50T2Zmc2V0O1xuXG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSgoMCwgX2lzQXJyYXkyLmRlZmF1bHQpKHNvdXJjZUlkcyksICdFeHBlY3RlZCBzb3VyY2VJZHMgdG8gYmUgYW4gYXJyYXkuJyk7XG5cbiAgdmFyIG1vbml0b3IgPSB0aGlzLmdldE1vbml0b3IoKTtcbiAgdmFyIHJlZ2lzdHJ5ID0gdGhpcy5nZXRSZWdpc3RyeSgpO1xuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoIW1vbml0b3IuaXNEcmFnZ2luZygpLCAnQ2Fubm90IGNhbGwgYmVnaW5EcmFnIHdoaWxlIGRyYWdnaW5nLicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlSWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZHNbaV0pLCAnRXhwZWN0ZWQgc291cmNlSWRzIHRvIGJlIHJlZ2lzdGVyZWQuJyk7XG4gIH1cblxuICB2YXIgc291cmNlSWQgPSBudWxsO1xuICBmb3IgKHZhciBfaSA9IHNvdXJjZUlkcy5sZW5ndGggLSAxOyBfaSA+PSAwOyBfaS0tKSB7XG4gICAgaWYgKG1vbml0b3IuY2FuRHJhZ1NvdXJjZShzb3VyY2VJZHNbX2ldKSkge1xuICAgICAgc291cmNlSWQgPSBzb3VyY2VJZHNbX2ldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmIChzb3VyY2VJZCA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzb3VyY2VDbGllbnRPZmZzZXQgPSBudWxsO1xuICBpZiAoY2xpZW50T2Zmc2V0KSB7XG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHR5cGVvZiBnZXRTb3VyY2VDbGllbnRPZmZzZXQgPT09ICdmdW5jdGlvbicsICdXaGVuIGNsaWVudE9mZnNldCBpcyBwcm92aWRlZCwgZ2V0U291cmNlQ2xpZW50T2Zmc2V0IG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICBzb3VyY2VDbGllbnRPZmZzZXQgPSBnZXRTb3VyY2VDbGllbnRPZmZzZXQoc291cmNlSWQpO1xuICB9XG5cbiAgdmFyIHNvdXJjZSA9IHJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZCk7XG4gIHZhciBpdGVtID0gc291cmNlLmJlZ2luRHJhZyhtb25pdG9yLCBzb3VyY2VJZCk7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSgoMCwgX2lzT2JqZWN0Mi5kZWZhdWx0KShpdGVtKSwgJ0l0ZW0gbXVzdCBiZSBhbiBvYmplY3QuJyk7XG5cbiAgcmVnaXN0cnkucGluU291cmNlKHNvdXJjZUlkKTtcblxuICB2YXIgaXRlbVR5cGUgPSByZWdpc3RyeS5nZXRTb3VyY2VUeXBlKHNvdXJjZUlkKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBCRUdJTl9EUkFHLFxuICAgIGl0ZW1UeXBlOiBpdGVtVHlwZSxcbiAgICBpdGVtOiBpdGVtLFxuICAgIHNvdXJjZUlkOiBzb3VyY2VJZCxcbiAgICBjbGllbnRPZmZzZXQ6IGNsaWVudE9mZnNldCxcbiAgICBzb3VyY2VDbGllbnRPZmZzZXQ6IHNvdXJjZUNsaWVudE9mZnNldCxcbiAgICBpc1NvdXJjZVB1YmxpYzogcHVibGlzaFNvdXJjZVxuICB9O1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoRHJhZ1NvdXJjZSgpIHtcbiAgdmFyIG1vbml0b3IgPSB0aGlzLmdldE1vbml0b3IoKTtcbiAgaWYgKCFtb25pdG9yLmlzRHJhZ2dpbmcoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiB7IHR5cGU6IFBVQkxJU0hfRFJBR19TT1VSQ0UgfTtcbn1cblxuZnVuY3Rpb24gaG92ZXIodGFyZ2V0SWRzQXJnKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgIF9yZWYkY2xpZW50T2Zmc2V0ID0gX3JlZi5jbGllbnRPZmZzZXQsXG4gICAgICBjbGllbnRPZmZzZXQgPSBfcmVmJGNsaWVudE9mZnNldCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWYkY2xpZW50T2Zmc2V0O1xuXG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSgoMCwgX2lzQXJyYXkyLmRlZmF1bHQpKHRhcmdldElkc0FyZyksICdFeHBlY3RlZCB0YXJnZXRJZHMgdG8gYmUgYW4gYXJyYXkuJyk7XG4gIHZhciB0YXJnZXRJZHMgPSB0YXJnZXRJZHNBcmcuc2xpY2UoMCk7XG5cbiAgdmFyIG1vbml0b3IgPSB0aGlzLmdldE1vbml0b3IoKTtcbiAgdmFyIHJlZ2lzdHJ5ID0gdGhpcy5nZXRSZWdpc3RyeSgpO1xuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkobW9uaXRvci5pc0RyYWdnaW5nKCksICdDYW5ub3QgY2FsbCBob3ZlciB3aGlsZSBub3QgZHJhZ2dpbmcuJyk7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSghbW9uaXRvci5kaWREcm9wKCksICdDYW5ub3QgY2FsbCBob3ZlciBhZnRlciBkcm9wLicpO1xuXG4gIC8vIEZpcnN0IGNoZWNrIGludmFyaWFudHMuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0SWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRhcmdldElkID0gdGFyZ2V0SWRzW2ldO1xuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0YXJnZXRJZHMubGFzdEluZGV4T2YodGFyZ2V0SWQpID09PSBpLCAnRXhwZWN0ZWQgdGFyZ2V0SWRzIHRvIGJlIHVuaXF1ZSBpbiB0aGUgcGFzc2VkIGFycmF5LicpO1xuXG4gICAgdmFyIHRhcmdldCA9IHJlZ2lzdHJ5LmdldFRhcmdldCh0YXJnZXRJZCk7XG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRhcmdldCwgJ0V4cGVjdGVkIHRhcmdldElkcyB0byBiZSByZWdpc3RlcmVkLicpO1xuICB9XG5cbiAgdmFyIGRyYWdnZWRJdGVtVHlwZSA9IG1vbml0b3IuZ2V0SXRlbVR5cGUoKTtcblxuICAvLyBSZW1vdmUgdGhvc2UgdGFyZ2V0SWRzIHRoYXQgZG9uJ3QgbWF0Y2ggdGhlIHRhcmdldFR5cGUuICBUaGlzXG4gIC8vIGZpeGVzIHNoYWxsb3cgaXNPdmVyIHdoaWNoIHdvdWxkIG9ubHkgYmUgbm9uLXNoYWxsb3cgYmVjYXVzZSBvZlxuICAvLyBub24tbWF0Y2hpbmcgdGFyZ2V0cy5cbiAgZm9yICh2YXIgX2kyID0gdGFyZ2V0SWRzLmxlbmd0aCAtIDE7IF9pMiA+PSAwOyBfaTItLSkge1xuICAgIHZhciBfdGFyZ2V0SWQgPSB0YXJnZXRJZHNbX2kyXTtcbiAgICB2YXIgdGFyZ2V0VHlwZSA9IHJlZ2lzdHJ5LmdldFRhcmdldFR5cGUoX3RhcmdldElkKTtcbiAgICBpZiAoISgwLCBfbWF0Y2hlc1R5cGUyLmRlZmF1bHQpKHRhcmdldFR5cGUsIGRyYWdnZWRJdGVtVHlwZSkpIHtcbiAgICAgIHRhcmdldElkcy5zcGxpY2UoX2kyLCAxKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaW5hbGx5IGNhbGwgaG92ZXIgb24gYWxsIG1hdGNoaW5nIHRhcmdldHMuXG4gIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IHRhcmdldElkcy5sZW5ndGg7IF9pMysrKSB7XG4gICAgdmFyIF90YXJnZXRJZDIgPSB0YXJnZXRJZHNbX2kzXTtcbiAgICB2YXIgX3RhcmdldCA9IHJlZ2lzdHJ5LmdldFRhcmdldChfdGFyZ2V0SWQyKTtcbiAgICBfdGFyZ2V0LmhvdmVyKG1vbml0b3IsIF90YXJnZXRJZDIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBIT1ZFUixcbiAgICB0YXJnZXRJZHM6IHRhcmdldElkcyxcbiAgICBjbGllbnRPZmZzZXQ6IGNsaWVudE9mZnNldFxuICB9O1xufVxuXG5mdW5jdGlvbiBkcm9wKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICB2YXIgcmVnaXN0cnkgPSB0aGlzLmdldFJlZ2lzdHJ5KCk7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShtb25pdG9yLmlzRHJhZ2dpbmcoKSwgJ0Nhbm5vdCBjYWxsIGRyb3Agd2hpbGUgbm90IGRyYWdnaW5nLicpO1xuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoIW1vbml0b3IuZGlkRHJvcCgpLCAnQ2Fubm90IGNhbGwgZHJvcCB0d2ljZSBkdXJpbmcgb25lIGRyYWcgb3BlcmF0aW9uLicpO1xuXG4gIHZhciB0YXJnZXRJZHMgPSBtb25pdG9yLmdldFRhcmdldElkcygpLmZpbHRlcihtb25pdG9yLmNhbkRyb3BPblRhcmdldCwgbW9uaXRvcik7XG5cbiAgdGFyZ2V0SWRzLnJldmVyc2UoKTtcbiAgdGFyZ2V0SWRzLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldElkLCBpbmRleCkge1xuICAgIHZhciB0YXJnZXQgPSByZWdpc3RyeS5nZXRUYXJnZXQodGFyZ2V0SWQpO1xuXG4gICAgdmFyIGRyb3BSZXN1bHQgPSB0YXJnZXQuZHJvcChtb25pdG9yLCB0YXJnZXRJZCk7XG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHR5cGVvZiBkcm9wUmVzdWx0ID09PSAndW5kZWZpbmVkJyB8fCAoMCwgX2lzT2JqZWN0Mi5kZWZhdWx0KShkcm9wUmVzdWx0KSwgJ0Ryb3AgcmVzdWx0IG11c3QgZWl0aGVyIGJlIGFuIG9iamVjdCBvciB1bmRlZmluZWQuJyk7XG4gICAgaWYgKHR5cGVvZiBkcm9wUmVzdWx0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZHJvcFJlc3VsdCA9IGluZGV4ID09PSAwID8ge30gOiBtb25pdG9yLmdldERyb3BSZXN1bHQoKTtcbiAgICB9XG5cbiAgICBfdGhpcy5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBEUk9QLFxuICAgICAgZHJvcFJlc3VsdDogX2V4dGVuZHMoe30sIG9wdGlvbnMsIGRyb3BSZXN1bHQpXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmREcmFnKCkge1xuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICB2YXIgcmVnaXN0cnkgPSB0aGlzLmdldFJlZ2lzdHJ5KCk7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShtb25pdG9yLmlzRHJhZ2dpbmcoKSwgJ0Nhbm5vdCBjYWxsIGVuZERyYWcgd2hpbGUgbm90IGRyYWdnaW5nLicpO1xuXG4gIHZhciBzb3VyY2VJZCA9IG1vbml0b3IuZ2V0U291cmNlSWQoKTtcbiAgdmFyIHNvdXJjZSA9IHJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZCwgdHJ1ZSk7XG4gIHNvdXJjZS5lbmREcmFnKG1vbml0b3IsIHNvdXJjZUlkKTtcblxuICByZWdpc3RyeS51bnBpblNvdXJjZSgpO1xuXG4gIHJldHVybiB7IHR5cGU6IEVORF9EUkFHIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2FjdGlvbnMvZHJhZ0Ryb3AuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXBEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFkZFNvdXJjZSA9IGFkZFNvdXJjZTtcbmV4cG9ydHMuYWRkVGFyZ2V0ID0gYWRkVGFyZ2V0O1xuZXhwb3J0cy5yZW1vdmVTb3VyY2UgPSByZW1vdmVTb3VyY2U7XG5leHBvcnRzLnJlbW92ZVRhcmdldCA9IHJlbW92ZVRhcmdldDtcbnZhciBBRERfU09VUkNFID0gZXhwb3J0cy5BRERfU09VUkNFID0gJ2RuZC1jb3JlL0FERF9TT1VSQ0UnO1xudmFyIEFERF9UQVJHRVQgPSBleHBvcnRzLkFERF9UQVJHRVQgPSAnZG5kLWNvcmUvQUREX1RBUkdFVCc7XG52YXIgUkVNT1ZFX1NPVVJDRSA9IGV4cG9ydHMuUkVNT1ZFX1NPVVJDRSA9ICdkbmQtY29yZS9SRU1PVkVfU09VUkNFJztcbnZhciBSRU1PVkVfVEFSR0VUID0gZXhwb3J0cy5SRU1PVkVfVEFSR0VUID0gJ2RuZC1jb3JlL1JFTU9WRV9UQVJHRVQnO1xuXG5mdW5jdGlvbiBhZGRTb3VyY2Uoc291cmNlSWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBRERfU09VUkNFLFxuICAgIHNvdXJjZUlkOiBzb3VyY2VJZFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRUYXJnZXQodGFyZ2V0SWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBRERfVEFSR0VULFxuICAgIHRhcmdldElkOiB0YXJnZXRJZFxuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVTb3VyY2Uoc291cmNlSWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRU1PVkVfU09VUkNFLFxuICAgIHNvdXJjZUlkOiBzb3VyY2VJZFxuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXJnZXQodGFyZ2V0SWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRU1PVkVfVEFSR0VULFxuICAgIHRhcmdldElkOiB0YXJnZXRJZFxuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9hY3Rpb25zL3JlZ2lzdHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjaGVja0RlY29yYXRvckFyZ3VtZW50cztcbmZ1bmN0aW9uIGNoZWNrRGVjb3JhdG9yQXJndW1lbnRzKGZ1bmN0aW9uTmFtZSwgc2lnbmF0dXJlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAoYXJndW1lbnRzLmxlbmd0aCA8PSAyID8gMCA6IGFyZ3VtZW50cy5sZW5ndGggLSAyKTsgaSArPSAxKSB7XG4gICAgICB2YXIgYXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSBpICsgMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tpICsgMl07XG4gICAgICBpZiAoYXJnICYmIGFyZy5wcm90b3R5cGUgJiYgYXJnLnByb3RvdHlwZS5yZW5kZXIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvciggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICdZb3Ugc2VlbSB0byBiZSBhcHBseWluZyB0aGUgYXJndW1lbnRzIGluIHRoZSB3cm9uZyBvcmRlci4gJyArICgnSXQgc2hvdWxkIGJlICcgKyBmdW5jdGlvbk5hbWUgKyAnKCcgKyBzaWduYXR1cmUgKyAnKShDb21wb25lbnQpLCBub3QgdGhlIG90aGVyIHdheSBhcm91bmQuICcpICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtdHJvdWJsZXNob290aW5nLmh0bWwjeW91LXNlZW0tdG8tYmUtYXBwbHlpbmctdGhlLWFyZ3VtZW50cy1pbi10aGUtd3Jvbmctb3JkZXInKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvdXRpbHMvY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQgRnJhbWUgZnJvbSAnLi9GcmFtZSc7XG5pbXBvcnQgUnVsZXIgZnJvbSAnLi9SdWxlcic7XG5pbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuXG4gICAgdGhpcy50aW1lU3BhbiA9IHRoaXMucHJvcHMudGltZVNwYW47XG5cbiAgICAvL21pblZpZXfjgYzjgYTjgY/jgaTjgYLjgovjgYvjgqvjgqbjg7Pjg4jjgIJtaW5WaWV344GvMTXliIbjgYrjgY3jgILjgZ3jgozjgpLlhYPjgavpq5jjgZXjgpLoqIjnrpfjgIJib3JkZXLliIYxcHjotrPjgZlcbiAgICB0aGlzLmxpbmVIZWlnaHQgPSAodGhpcy50aW1lU3Bhbi5nZXREaXN0YW5jZSgpIC8gMTUpICogKHRoaXMucHJvcHMubWluSGVpZ2h0ICsgMSk7XG5cbiAgICAvLzHliIbjgYLjgZ/jgorjga7pq5jjgZXjgpLnrpflh7pcbiAgICB0aGlzLnBlck1pbkhlaWdodCA9IHRoaXMubGluZUhlaWdodCAvIHRoaXMudGltZVNwYW4uZ2V0RGlzdGFuY2UoKTtcblxuICAgIHRoaXMubGluZVdpZHRoID0gcHJvcHMubGluZVdpZHRoO1xuXG4gICAgdGhpcy5jcmVhdGVkRXZlbnRJZCA9IDA7XG4gICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHRoaXMuZnJhbWVDb21wb25lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ldmVudENvbXBvbmVudHMgPSBbXVxuICB9XG5cbiAgZ2V0IGxpbmVDb21wb25lbnRzKCl7XG4gICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICBmb3IodmFyIGtleSBpbiB0aGlzLmZyYW1lQ29tcG9uZW50LnJlZnMpe1xuICAgICAgaWYoa2V5LmluZGV4T2YoXCJsaW5lQFwiKSA9PT0gMCl7XG4gICAgICAgIGxpbmVzLnB1c2godGhpcy5mcmFtZUNvbXBvbmVudC5yZWZzW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIGNyZWF0ZUV2ZW50SWQoKXtcbiAgICByZXR1cm4gJ25ld18nICsgKCsrdGhpcy5jcmVhdGVkRXZlbnRJZCk7XG4gIH1cblxuICBkcmFnZ2luZ092ZXIobGVmdCl7XG4gICAgY29uc3QgbGluZUNvbXBvbmVudCA9IHRoaXMuZmluZExpbmVCeUxlZnQobGVmdCk7XG4gICAgaWYobGluZUNvbXBvbmVudCl7XG4gICAgICBpZih0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQgIT09IGxpbmVDb21wb25lbnQpe1xuICAgICAgICBpZih0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQpe1xuICAgICAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudC5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudCA9IGxpbmVDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudC5kcmFnZ2luZ092ZXIoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYodGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50KXtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50LmNsZWFyRHJhZ2dpbmdPdmVyKCk7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVDb21wb25lbnQ7XG4gIH1cblxuICBjbGVhckRyYWdnaW5nT3Zlcigpe1xuICAgIGlmKHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudCl7XG4gICAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQuY2xlYXJEcmFnZ2luZ092ZXIoKTtcbiAgICB9XG4gIH1cblxuICBnZXRUb3RhbFdpZHRoKCl7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubGluZURhdGEucmVkdWNlKCh2YWwsIGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBoYXNSdWxlciA9IGluZGV4ICUgdGhpcy5wcm9wcy5ydWxlckludGVydmFsID09PSAwO1xuICAgICAgcmV0dXJuIHZhbCArIChoYXNSdWxlciA/IHRoaXMubGluZVdpZHRoICsgUnVsZXIud2lkdGggOiB0aGlzLmxpbmVXaWR0aCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBmaW5kRXZlbnRCeUlkKGV2ZW50SWQpe1xuICAgIHJldHVybiB0aGlzLmV2ZW50Q29tcG9uZW50cy5maW5kKGV2ID0+IGV2LnByb3BzLmlkID09IGV2ZW50SWQpO1xuICB9XG5cbiAgZmluZExpbmVCeUxlZnQobGVmdCl7XG4gICAgdmFyIHdpZHRoID0gMDtcbiAgICByZXR1cm4gdGhpcy5saW5lQ29tcG9uZW50cy5maW5kKGxpbmUgPT4ge1xuICAgICAgd2lkdGggKz0gbGluZS5wcm9wcy5oYXNSdWxlciA/IHRoaXMucHJvcHMubGluZVdpZHRoICsgUnVsZXIud2lkdGggOiB0aGlzLnByb3BzLmxpbmVXaWR0aDtcbiAgICAgIGlmKGxlZnQgPCB3aWR0aCl7XG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGluZUxlZnQobGluZUlkKXtcbiAgICBsZXQgbGVmdCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmxpbmVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5lRGF0YSA9IHRoaXMucHJvcHMubGluZURhdGFbaV07XG4gICAgICBjb25zdCBoYXNSdWxlciA9IGkgJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG4gICAgICBpZihoYXNSdWxlcil7XG4gICAgICAgIGxlZnQgKz0gUnVsZXIud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmKGxpbmVEYXRhLmlkID09IGxpbmVJZCl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsZWZ0ICs9IHRoaXMucHJvcHMubGluZVdpZHRoO1xuICAgIH1cblxuICAgIGxlZnQgKz0gTGluZS5zaWRlUGFkZGluZztcblxuICAgIHJldHVybiBsZWZ0O1xuICB9XG5cbiAgZ2V0VGltZVNwYW4odG9wLCBoZWlnaHQpe1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IHRoaXMudG9wVG9UaW1lKHRvcCk7XG5cbiAgICBjb25zdCBlbmRUaW1lID0gc3RhcnRUaW1lLmFkZE1pbihoZWlnaHQgLyB0aGlzLnBlck1pbkhlaWdodCk7XG4gICAgcmV0dXJuIG5ldyBUaW1lU3BhbihzdGFydFRpbWUsIGVuZFRpbWUpO1xuICB9XG5cbiAgbWludXRlVG9IZWlnaHQobWludXRlKXtcbiAgICByZXR1cm4gKG1pbnV0ZSAqIHRoaXMucGVyTWluSGVpZ2h0KSAtIDE7XG4gIH1cblxuICB0aW1lU3BhblRvSGVpZ2h0KHRpbWVTcGFuKXtcbiAgICByZXR1cm4gdGhpcy5taW51dGVUb0hlaWdodCh0aW1lU3Bhbi5nZXREaXN0YW5jZSgpKTtcbiAgfVxuXG4gIHRpbWVUb1RvcCh0aW1lKXtcbiAgICByZXR1cm4gdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXN0YW5jZSh0aW1lKSAqIHRoaXMucGVyTWluSGVpZ2h0IC0gMTtcbiAgfVxuXG4gIHRvcFRvVGltZSh0b3Ape1xuICAgIGlmKHRvcCA8PSAwKXtcbiAgICAgIHJldHVybiB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpO1xuICAgIH1cbiAgICBsZXQgbWludXRlID0gdG9wIC8gdGhpcy5wZXJNaW5IZWlnaHQ7XG4gICAgY29uc3QgcmVzdCA9IG1pbnV0ZSAlIHRoaXMucHJvcHMubWluSW50ZXJ2YWw7XG4gICAgaWYocmVzdCAhPT0gMCl7XG4gICAgICBpZihyZXN0ID4gdGhpcy5wcm9wcy5taW5JbnRlcnZhbCAvIDIpe1xuICAgICAgICBtaW51dGUgKz0gdGhpcy5wcm9wcy5taW5JbnRlcnZhbCAtIHJlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaW51dGUgLT0gcmVzdDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuYWRkTWluKG1pbnV0ZSk7XG4gIH1cblxuICBmaW5kUHJldkV2ZW50KGV2ZW50Q29tcG9uZW50KXtcbiAgICByZXR1cm4gdGhpcy5ldmVudENvbXBvbmVudHNcbiAgICAgIC5maWx0ZXIoZXYgPT4gIWV2LnN0YXRlLmRyYWdnYWJsZSAmJiBldi5saW5lSWQgPT0gZXZlbnRDb21wb25lbnQubGluZUlkKS8v5ZCM44GY5YiX44Gu44KC44Gu44Gg44GR44Gr57We44KLXG4gICAgICAuc29ydCgoYSwgYikgPT4gLShhLmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5jb21wYXJlKGIuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSkpLy/mmYLplpPjga7pmY3poIbjgafkuKbjgbPmm7/jgYhcbiAgICAgIC5maW5kKGV2ID0+IGV2LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCkuY29tcGFyZShldmVudENvbXBvbmVudC5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpIDw9IDApLy/pmY3poIbjgarjga7jgaflr77osaHjgojjgormnIDliJ3jgavplovlp4vmmYLplpPjgYzoi6XjgYTjgoLjga7jgYxwcmV2XG4gICAgICA7XG4gIH1cblxuICBnZXRQcmV2Qm90dG9tKGV2ZW50Q29tcG9uZW50KXtcbiAgICBjb25zdCBwcmV2RXZlbnQgPSB0aGlzLmZpbmRQcmV2RXZlbnQoZXZlbnRDb21wb25lbnQpO1xuICAgIGxldCBib3R0b21UaW1lO1xuICAgIGlmKHByZXZFdmVudCl7XG4gICAgICBib3R0b21UaW1lID0gcHJldkV2ZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdHRvbVRpbWUgPSB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRpbWVUb1RvcChib3R0b21UaW1lKTtcbiAgfVxuXG4gIGZpbmROZXh0RXZlbnQoZXZlbnRDb21wb25lbnQpe1xuICAgIHJldHVybiB0aGlzLmZpbmROZXh0RXZlbnRCeVRpbWUoZXZlbnRDb21wb25lbnQubGluZUlkLCBldmVudENvbXBvbmVudC5jdXJyZW50VGltZVNwYW4uZ2V0RW5kVGltZSgpKTtcbiAgfVxuXG4gIGZpbmROZXh0RXZlbnRCeVRpbWUobGluZUlkLCB0aW1lKXtcbiAgICByZXR1cm4gdGhpcy5ldmVudENvbXBvbmVudHNcbiAgICAgIC5maWx0ZXIoZXYgPT4gICFldi5zdGF0ZS5kcmFnZ2FibGUgJiYgZXYubGluZUlkID09IGxpbmVJZCkvL+WQjOOBmOWIl+OBruOCguOBruOBoOOBkeOBq+e1nuOCi1xuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUoYi5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpKS8v5pmC6ZaT44Gu5piH6aCG44Gn5Lim44Gz5pu/44GIXG4gICAgICAuZmluZChldiA9PiBldi5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuY29tcGFyZSh0aW1lKSA+PSAwKS8v5piH6aCG44Gq44Gu44Gn5a++6LGh44KI44KK5pyA5Yid44Gr6ZaL5aeL5pmC6ZaT44GM6YGF44GE44KC44Gu44GMbmV4dFxuICAgICAgO1xuICB9XG5cbiAgZ2V0RXZlbnRzT25MaW5lKGxpbmVJZCl7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRDb21wb25lbnRzLmZpbHRlcihldiA9PiAgIWV2LnN0YXRlLmRyYWdnYWJsZSAmJiBldi5saW5lSWQgPT0gbGluZUlkKVxuICB9XG5cbiAgZ2V0TmV4dFRpbWUobGluZUlkLCB0aW1lKXtcbiAgICBjb25zdCBuZXh0RXZlbnQgPSB0aGlzLmZpbmROZXh0RXZlbnRCeVRpbWUobGluZUlkLCB0aW1lKTtcbiAgICBsZXQgbmV4dFRpbWU7XG4gICAgaWYobmV4dEV2ZW50KXtcbiAgICAgIG5leHRUaW1lID0gbmV4dEV2ZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dFRpbWUgPSB0aGlzLnRpbWVTcGFuLmdldEVuZFRpbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRpbWU7XG4gIH1cblxuICBnZXRGcmVlTWludXRlKGxpbmVJZCwgdGltZSl7XG4gICAgY29uc3QgbmV4dFRpbWUgPSB0aGlzLmdldE5leHRUaW1lKGxpbmVJZCwgdGltZSk7XG4gICAgcmV0dXJuIHRpbWUuZ2V0RGlzdGFuY2UobmV4dFRpbWUpO1xuICB9XG5cbiAgZ2V0TmV4dFRvcChldmVudENvbXBvbmVudCl7XG4gICAgcmV0dXJuIHRoaXMudGltZVRvVG9wKHRoaXMuZ2V0TmV4dFRpbWUoZXZlbnRDb21wb25lbnQubGluZUlkLCBldmVudENvbXBvbmVudC5jdXJyZW50VGltZVNwYW4uZ2V0RW5kVGltZSgpKSk7XG4gIH1cbiAgYWRkRXZlbnRzKGV2ZW50cyl7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVDb21wb25lbnQuYWRkRXZlbnRzKGV2ZW50cyk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KXtcbiAgICB0aGlzLmZyYW1lQ29tcG9uZW50LnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnQoZXZlbnRJZCl7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVDb21wb25lbnQucmVtb3ZlRXZlbnQoZXZlbnRJZCk7XG4gIH1cblxuICB1cGRhdGVFdmVudHMoY2FsbGJhY2spe1xuICAgIHRoaXMuZnJhbWVDb21wb25lbnQudXBkYXRlRXZlbnRzKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhbWVcbiAgICAgICAgcmVmPVwiZnJhbWVcIlxuICAgICAgICBsaW5lRGF0YT17dGhpcy5wcm9wcy5saW5lRGF0YX1cbiAgICAgICAgdGltZVNwYW49e3RoaXMucHJvcHMudGltZVNwYW59XG4gICAgICAgIGxpbmVXaWR0aD17dGhpcy5wcm9wcy5saW5lV2lkdGh9XG4gICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgIGhlaWdodD17dGhpcy5wcm9wcy5oZWlnaHR9XG4gICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofVxuICAgICAgICBsaW5lSGVpZ2h0PXt0aGlzLmxpbmVIZWlnaHR9XG4gICAgICAgIHRpbWVsaW5lPXt0aGlzfVxuICAgICAgICBydWxlckludGVydmFsPXt0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWx9XG4gICAgICAgIGluaXRpYWxFdmVudHM9e3RoaXMucHJvcHMuaW5pdGlhbEV2ZW50c31cbiAgICAgICAgY2hpbGRyZW49e3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIGNoaWxkV2lkdGg9e3RoaXMucHJvcHMuY2hpbGRXaWR0aH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBUaW1lbGluZS5wcm9wVHlwZXMgPSB7XG4vLyAgIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbi8vICAgbGluZURhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4vLyAgICAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbi8vICAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4vLyAgIH0pKS5pc1JlcXVpcmVkLFxuLy8gICBsaW5lV2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuLy8gICBydWxlckludGVydmFsOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIG1pbkludGVydmFsOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuLy8gICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuLy8gfVxuXG5UaW1lbGluZS5kZWZhdWx0UHJvcHMgPSB7XG4gIG1pbkludGVydmFsOiAxLFxuICBjaGlsZFdpZHRoOiAwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qc3giLCIvKipcbiAqIOS4gOW6pueUn+aIkOOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOBr+WkieabtOOBl+OBvuOBm+OCk+OAglxuICog5aSJ5pu044Oh44K944OD44OJ44Gv5paw44GX44GE44Kq44OW44K444Kn44Kv44OI44KS5biw44GX44G+44GZ44CCXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVcbntcbiAgc3RhdGljIGVhY2hNaW4oY2FsbGJhY2ssIG1pbnV0ZUludGVydmFsKXtcbiAgICAgIHZhciBjb3VudCA9IDYwIC8gbWludXRlSW50ZXJ2YWw7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICB2YXIgbWluID0gaSAqIG1pbnV0ZUludGVydmFsO1xuICAgICAgICAgIGlmKG1pbiA8IDYwKXtcbiAgICAgICAgICAgICAgdmFyIGRpc3BsYXlNaW4gPSBtaW4gPCAxMCA/ICcwJyArIG1pbiA6IG1pbiArICcnO1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKG1pbiwgaSwgbWluLCBkaXNwbGF5TWluKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiDphY3liJfjgYvjgolUaW1l44KS55Sf5oiQXG4gICAqIEBwYXJhbSAge2FycmF5fSB0aW1lIFtob3VyLCBtaW5d44Gu6YWN5YiXXG4gICAqIEByZXR1cm4ge1RpbWV9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRpbWVbMF0sIHRpbWVbMV0pO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGhvdXIsIG1pbil7XG4gICAgdGhpcy5faG91ciA9IGhvdXIgPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChob3VyLCAxMCk7XG4gICAgdGhpcy5fbWluID0gbWluID09PSB1bmRlZmluZWQgPyAwIDogcGFyc2VJbnQobWluLCAxMCk7XG4gICAgd2hpbGUodGhpcy5fbWluIDwgMCl7XG4gICAgICAgIC0tdGhpcy5faG91cjtcbiAgICAgICAgdGhpcy5fbWluID0gNjAgKyB0aGlzLl9taW47XG4gICAgfVxuXG4gICAgd2hpbGUodGhpcy5fbWluID4gNTkpe1xuICAgICAgICArK3RoaXMuX2hvdXI7XG4gICAgICAgIHRoaXMuX21pbiA9IHRoaXMuX21pbiAtIDYwO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX2hvdXIgPCAwKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudG9TdHJpbmcoKSsnIGlzIG5vdCB2YWxpZCB0aW1lLicpO1xuICAgIH1cbiAgfVxuXG4gIGdldEhvdXIoKXsgcmV0dXJuIHRoaXMuX2hvdXI7IH07XG4gIGdldE1pbigpeyByZXR1cm4gdGhpcy5fbWluOyB9O1xuXG4gIGNsb25lKCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGhpcy5nZXRIb3VyKCksIHRoaXMuZ2V0TWluKCkpO1xuICB9O1xuXG4gIGFkZE1pbihtaW4pe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRoaXMuZ2V0SG91cigpLCB0aGlzLmdldE1pbigpICsgcGFyc2VJbnQobWluLCAxMCkpO1xuICB9O1xuXG4gIGVxdWFscyh0aW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmdldEhvdXIoKSA9PT0gdGltZS5nZXRIb3VyKCkgJiYgdGhpcy5nZXRNaW4oKSA9PT0gdGltZS5nZXRNaW4oKTtcbiAgfTtcblxuICBjb21wYXJlKHRpbWUpe1xuICAgICAgaWYodGhpcy5nZXRIb3VyKCkgPiB0aW1lLmdldEhvdXIoKSlcbiAgICAgIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodGhpcy5nZXRIb3VyKCkgPCB0aW1lLmdldEhvdXIoKSlcbiAgICAgIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgICAgaWYodGhpcy5nZXRNaW4oKSA+IHRpbWUuZ2V0TWluKCkpXG4gICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZih0aGlzLmdldE1pbigpIDwgdGltZS5nZXRNaW4oKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGdldERpc3RhbmNlKHRhcmdldFRpbWUpe1xuICAgICAgdmFyIHRhcmdldEhvdXIgPSB0YXJnZXRUaW1lLmdldEhvdXIoKTtcbiAgICAgIHZhciBob3VyRGlzdGFuY2UgPSB0YXJnZXRIb3VyIC0gdGhpcy5faG91cjtcbiAgICAgIHJldHVybiAoaG91ckRpc3RhbmNlICogNjApICsgKHRhcmdldFRpbWUuZ2V0TWluKCkgLSB0aGlzLl9taW4pO1xuICB9O1xuXG4gIHRvU3RyaW5nKCl7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXNwbGF5VGltZSgpO1xuICB9O1xuXG4gIGdldERpc3BsYXlIb3VyKCl7XG4gICAgICByZXR1cm4gdGhpcy5faG91ciA8IDI0ID8gdGhpcy5faG91ciA6IHRoaXMuX2hvdXIgLSAyNDtcbiAgfTtcblxuICBnZXREaXNwbGF5TWluKCl7XG4gICAgICByZXR1cm4gdGhpcy5fbWluIDwgMTAgPyAnMCcrdGhpcy5fbWluIDogdGhpcy5fbWluO1xuICB9O1xuXG4gIGdldERpc3BsYXlUaW1lKCl7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXNwbGF5SG91cigpICsnOicrIHRoaXMuZ2V0RGlzcGxheU1pbigpO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsYXNzZXMvVGltZS5lczYiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChjb21wYXJhdG9yKHZhbHVlLCBhcnJheVtpbmRleF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIG92ZXJSZXN0ID0gcmVxdWlyZSgnLi9fb3ZlclJlc3QnKSxcbiAgICBzZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX3NldFRvU3RyaW5nJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSZXN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUmVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZU9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZXM6IHRydWUsXG4gICAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBtaXhpbnM6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlLFxuICAgIHR5cGU6IHRydWVcbn07XG5cbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICAgIG5hbWU6IHRydWUsXG4gICAgbGVuZ3RoOiB0cnVlLFxuICAgIHByb3RvdHlwZTogdHJ1ZSxcbiAgICBjYWxsZXI6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgaXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHNBdmFpbGFibGUgPSB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgY3VzdG9tU3RhdGljcykge1xuICAgIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykgeyAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKGlzR2V0T3duUHJvcGVydHlTeW1ib2xzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKCFSRUFDVF9TVEFUSUNTW2tleXNbaV1dICYmICFLTk9XTl9TVEFUSUNTW2tleXNbaV1dICYmICghY3VzdG9tU3RhdGljcyB8fCAhY3VzdG9tU3RhdGljc1trZXlzW2ldXSkpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRDb21wb25lbnRba2V5c1tpXV0gPSBzb3VyY2VDb21wb25lbnRba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2hhbGxvd0VxdWFsO1xuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICghaGFzT3duLmNhbGwob2JqQiwga2V5c0FbaV0pIHx8IG9iakFba2V5c0FbaV1dICE9PSBvYmpCW2tleXNBW2ldXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWxBID0gb2JqQVtrZXlzQVtpXV07XG4gICAgdmFyIHZhbEIgPSBvYmpCW2tleXNBW2ldXTtcblxuICAgIGlmICh2YWxBICE9PSB2YWxCKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi91dGlscy9zaGFsbG93RXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGlzRGlzcG9zYWJsZTtcblxuZnVuY3Rpb24gaXNEaXNwb3NhYmxlKG9iaikge1xuICByZXR1cm4gQm9vbGVhbihvYmogJiYgdHlwZW9mIG9iai5kaXNwb3NlID09PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGlzcG9zYWJsZXMvbW9kdWxlcy9pc0Rpc3Bvc2FibGUuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQgSG91ciBmcm9tICcuL0hvdXInO1xuaW1wb3J0IFJ1bGVyIGZyb20gJy4vUnVsZXInO1xuaW1wb3J0IExpbmVMYWJlbCBmcm9tICcuL0xpbmVMYWJlbCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuL1RpbWVsaW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob3VyczogW10sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgZHJhZ2dpbmdPdmVyOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLnByb3BzLnRpbWVTcGFuLmVhY2hUaW1lKChrZXksIHRpbWUpID0+IHtcbiAgICAgIGlmKCF0aW1lLmVxdWFscyh0aGlzLnByb3BzLnRpbWVTcGFuLmdldEVuZFRpbWUoKSkpe1xuICAgICAgICB0aGlzLnN0YXRlLmhvdXJzLnB1c2goXG4gICAgICAgICAgPEhvdXJcbiAgICAgICAgICAgIGtleT17dGltZS5nZXRIb3VyKCl9XG4gICAgICAgICAgICB0aW1lPXt0aW1lfVxuICAgICAgICAgICAgbWluSGVpZ2h0PXt0aGlzLnByb3BzLm1pbkhlaWdodH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy52YXJzID0gdGhpcy5wcm9wcy52YXJzIHx8IHt9O1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVUb3AoZSl7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMucHJvcHMuZnJhbWUucmVmcy5saW5lc1dyYXBwZXI7XG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIGUuY2xpZW50WSAtIHBhcmVudFJlY3QudG9wICsgcGFyZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMubGluZURpZENsaWNrKXtcbiAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRvcFRvVGltZSh0aGlzLmdldFJlbGF0aXZlVG9wKGUpKTtcbiAgICAgIHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMubGluZURpZENsaWNrKHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICBmcmVlTWludXRlOiB0aGlzLnByb3BzLnRpbWVsaW5lLmdldEZyZWVNaW51dGUodGhpcy5wcm9wcy5pZCwgdGltZSksXG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LnJlZnMubGluZXNXcmFwcGVyLnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxMZWZ0OiB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LmVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgICAgICB0b3A6IGUuY2xpZW50WSxcbiAgICAgICAgICBsZWZ0OiBlLmNsaWVudFgsXG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50OiBlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNvbnRleHRNZW51KGUpe1xuICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMubGluZURpZFJpZ2h0Q2xpY2spe1xuICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5saW5lRGlkUmlnaHRDbGljayh7XG4gICAgICAgIGV2ZW50OiBlLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdnaW5nT3Zlcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nT3ZlcjogdHJ1ZX0pO1xuICB9XG5cbiAgY2xlYXJEcmFnZ2luZ092ZXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZ092ZXI6IGZhbHNlfSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvbkNvbnRleHRNZW51PXtlID0+IHRoaXMub25Db250ZXh0TWVudShlKX0+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIGlmKHRoaXMucHJvcHMuaGFzUnVsZXIpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFJ1bGVyXG4gICAgICAgICAgICAgICAga2V5PXsncnVsZXJfJyArIHRoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0PXt0aGlzLnByb3BzLm1pbkhlaWdodH1cbiAgICAgICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5wcm9wcy50aW1lU3Bhbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCl9XG4gICAgICAgIDxkaXYgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxMaW5lVmlldycsIHt0bEV2ZW46IHRoaXMucHJvcHMuZXZlbiwgdGxPZGQ6ICF0aGlzLnByb3BzLmV2ZW59LCB7dGxPdmVyOiB0aGlzLnN0YXRlLmRyYWdnaW5nT3Zlcn0pfSBzdHlsZT17e3dpZHRoOiB0aGlzLnByb3BzLndpZHRoICsgJ3B4J319PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmhvdXJzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGluZS5zaWRlUGFkZGluZyA9IDE7XG5cbi8vIExpbmUucHJvcFR5cGVzID0ge1xuLy8gICB3aWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuLy8gICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuLy8gICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbi8vICAgZXZlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbi8vICAgLy9UT0RPIOW+queSsOWPgueFp+OBq+OBquOCi+OBruOBp2ltcG9ydOOBp+OBjeOBmuOAguOBqOOCiuOBguOBiOOBmmFueeOBp+OBlOOBvuOBi+OBl+OBpuOBvuOBmeOAglxuLy8gICB0aW1lbGluZTogUmVhY3QuUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuLy8gICBoYXNSdWxlcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxuLy8gfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGluZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJ1bGVyIGZyb20gJy4vUnVsZXInO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVMYWJlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNSdWxlcjogdGhpcy5wcm9wcy5oYXNSdWxlcixcbiAgICAgIHByZXZSdWxlcjogdGhpcy5wcm9wcy5wcmV2UnVsZXIsXG4gICAgICBpc0xhc3Q6IHRydWVcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e3dpZHRoOiB0aGlzLnByb3BzLndpZHRoLCBtYXJnaW5MZWZ0OiB0aGlzLnN0YXRlLmhhc1J1bGVyID8gUnVsZXIud2lkdGggKyAncHgnIDogMH19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7dGxMYWJlbDogdHJ1ZSwgdGxIYXNSdWxlcjogdGhpcy5zdGF0ZS5oYXNSdWxlciwgdGxQcmV2UnVsZXI6IHRoaXMuc3RhdGUucHJldlJ1bGVyLCB0bExhc3Q6IHRoaXMuc3RhdGUuaXNMYXN0fSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5MaW5lTGFiZWwuaGVpZ2h0ID0gMTY7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MaW5lTGFiZWwuanN4IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0RyYWdEcm9wQ29udGV4dCA9IHJlcXVpcmUoJy4vRHJhZ0Ryb3BDb250ZXh0Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRHJhZ0Ryb3BDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJhZ0Ryb3BDb250ZXh0KS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9EcmFnRHJvcENvbnRleHRQcm92aWRlciA9IHJlcXVpcmUoJy4vRHJhZ0Ryb3BDb250ZXh0UHJvdmlkZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdEcmFnRHJvcENvbnRleHRQcm92aWRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RyYWdEcm9wQ29udGV4dFByb3ZpZGVyKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9EcmFnTGF5ZXIgPSByZXF1aXJlKCcuL0RyYWdMYXllcicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0RyYWdMYXllcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RyYWdMYXllcikuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfRHJhZ1NvdXJjZSA9IHJlcXVpcmUoJy4vRHJhZ1NvdXJjZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0RyYWdTb3VyY2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EcmFnU291cmNlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9Ecm9wVGFyZ2V0ID0gcmVxdWlyZSgnLi9Ecm9wVGFyZ2V0Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRHJvcFRhcmdldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3BUYXJnZXQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudW5wYWNrQmFja2VuZEZvckVzNVVzZXJzID0gZXhwb3J0cy5jcmVhdGVDaGlsZENvbnRleHQgPSBleHBvcnRzLkNISUxEX0NPTlRFWFRfVFlQRVMgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRHJhZ0Ryb3BDb250ZXh0O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2RuZENvcmUgPSByZXF1aXJlKCdkbmQtY29yZScpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzID0gcmVxdWlyZSgnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnKTtcblxudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ob2lzdE5vblJlYWN0U3RhdGljcyk7XG5cbnZhciBfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMgPSByZXF1aXJlKCcuL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzJyk7XG5cbnZhciBfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDSElMRF9DT05URVhUX1RZUEVTID0gZXhwb3J0cy5DSElMRF9DT05URVhUX1RZUEVTID0ge1xuICBkcmFnRHJvcE1hbmFnZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbnZhciBjcmVhdGVDaGlsZENvbnRleHQgPSBleHBvcnRzLmNyZWF0ZUNoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGNyZWF0ZUNoaWxkQ29udGV4dChiYWNrZW5kLCBjb250ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgZHJhZ0Ryb3BNYW5hZ2VyOiBuZXcgX2RuZENvcmUuRHJhZ0Ryb3BNYW5hZ2VyKGJhY2tlbmQsIGNvbnRleHQpXG4gIH07XG59O1xuXG52YXIgdW5wYWNrQmFja2VuZEZvckVzNVVzZXJzID0gZXhwb3J0cy51bnBhY2tCYWNrZW5kRm9yRXM1VXNlcnMgPSBmdW5jdGlvbiB1bnBhY2tCYWNrZW5kRm9yRXM1VXNlcnMoYmFja2VuZE9yTW9kdWxlKSB7XG4gIC8vIEF1dG8tZGV0ZWN0IEVTNiBkZWZhdWx0IGV4cG9ydCBmb3IgcGVvcGxlIHN0aWxsIHVzaW5nIEVTNVxuICB2YXIgYmFja2VuZCA9IGJhY2tlbmRPck1vZHVsZTtcbiAgaWYgKCh0eXBlb2YgYmFja2VuZCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYmFja2VuZCkpID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYmFja2VuZC5kZWZhdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgYmFja2VuZCA9IGJhY2tlbmQuZGVmYXVsdDtcbiAgfVxuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIGJhY2tlbmQgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCB0aGUgYmFja2VuZCB0byBiZSBhIGZ1bmN0aW9uIG9yIGFuIEVTNiBtb2R1bGUgZXhwb3J0aW5nIGEgZGVmYXVsdCBmdW5jdGlvbi4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctZHJvcC1jb250ZXh0Lmh0bWwnKTtcbiAgcmV0dXJuIGJhY2tlbmQ7XG59O1xuXG5mdW5jdGlvbiBEcmFnRHJvcENvbnRleHQoYmFja2VuZE9yTW9kdWxlKSB7XG4gIF9jaGVja0RlY29yYXRvckFyZ3VtZW50czIuZGVmYXVsdC5hcHBseSh1bmRlZmluZWQsIFsnRHJhZ0Ryb3BDb250ZXh0JywgJ2JhY2tlbmQnXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuXG4gIHZhciBiYWNrZW5kID0gdW5wYWNrQmFja2VuZEZvckVzNVVzZXJzKGJhY2tlbmRPck1vZHVsZSk7XG4gIHZhciBjaGlsZENvbnRleHQgPSBjcmVhdGVDaGlsZENvbnRleHQoYmFja2VuZCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRlQ29udGV4dChEZWNvcmF0ZWRDb21wb25lbnQpIHtcbiAgICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICAgIHZhciBkaXNwbGF5TmFtZSA9IERlY29yYXRlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBEZWNvcmF0ZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICAgIHZhciBEcmFnRHJvcENvbnRleHRDb250YWluZXIgPSAoX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKERyYWdEcm9wQ29udGV4dENvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIERyYWdEcm9wQ29udGV4dENvbnRhaW5lcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdEcm9wQ29udGV4dENvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEcmFnRHJvcENvbnRleHRDb250YWluZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcmFnRHJvcENvbnRleHRDb250YWluZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKERyYWdEcm9wQ29udGV4dENvbnRhaW5lciwgW3tcbiAgICAgICAga2V5OiAnZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UoKSB7XG4gICAgICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMuY2hpbGQsICdJbiBvcmRlciB0byBhY2Nlc3MgYW4gaW5zdGFuY2Ugb2YgdGhlIGRlY29yYXRlZCBjb21wb25lbnQgaXQgY2FuICcgKyAnbm90IGJlIGEgc3RhdGVsZXNzIGNvbXBvbmVudC4nKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZDtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRNYW5hZ2VyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1hbmFnZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkQ29udGV4dC5kcmFnRHJvcE1hbmFnZXI7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRDb250ZXh0O1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRGVjb3JhdGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoY2hpbGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5jaGlsZCA9IGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyO1xuICAgIH0oX3JlYWN0LkNvbXBvbmVudCksIF9jbGFzcy5EZWNvcmF0ZWRDb21wb25lbnQgPSBEZWNvcmF0ZWRDb21wb25lbnQsIF9jbGFzcy5kaXNwbGF5TmFtZSA9ICdEcmFnRHJvcENvbnRleHQoJyArIGRpc3BsYXlOYW1lICsgJyknLCBfY2xhc3MuY2hpbGRDb250ZXh0VHlwZXMgPSBDSElMRF9DT05URVhUX1RZUEVTLCBfdGVtcCk7XG5cblxuICAgIHJldHVybiAoMCwgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzMi5kZWZhdWx0KShEcmFnRHJvcENvbnRleHRDb250YWluZXIsIERlY29yYXRlZENvbXBvbmVudCk7XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9EcmFnRHJvcENvbnRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZHJhZ09mZnNldDtcbmV4cG9ydHMuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gZ2V0U291cmNlQ2xpZW50T2Zmc2V0O1xuZXhwb3J0cy5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQgPSBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQ7XG5cbnZhciBfZHJhZ0Ryb3AgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2RyYWdEcm9wJyk7XG5cbnZhciBpbml0aWFsU3RhdGUgPSB7XG4gIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQ6IG51bGwsXG4gIGluaXRpYWxDbGllbnRPZmZzZXQ6IG51bGwsXG4gIGNsaWVudE9mZnNldDogbnVsbFxufTtcblxuZnVuY3Rpb24gYXJlT2Zmc2V0c0VxdWFsKG9mZnNldEEsIG9mZnNldEIpIHtcbiAgaWYgKG9mZnNldEEgPT09IG9mZnNldEIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gb2Zmc2V0QSAmJiBvZmZzZXRCICYmIG9mZnNldEEueCA9PT0gb2Zmc2V0Qi54ICYmIG9mZnNldEEueSA9PT0gb2Zmc2V0Qi55O1xufVxuXG5mdW5jdGlvbiBkcmFnT2Zmc2V0KCkge1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGluaXRpYWxTdGF0ZTtcbiAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBfZHJhZ0Ryb3AuQkVHSU5fRFJBRzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQ6IGFjdGlvbi5zb3VyY2VDbGllbnRPZmZzZXQsXG4gICAgICAgIGluaXRpYWxDbGllbnRPZmZzZXQ6IGFjdGlvbi5jbGllbnRPZmZzZXQsXG4gICAgICAgIGNsaWVudE9mZnNldDogYWN0aW9uLmNsaWVudE9mZnNldFxuICAgICAgfTtcbiAgICBjYXNlIF9kcmFnRHJvcC5IT1ZFUjpcbiAgICAgIGlmIChhcmVPZmZzZXRzRXF1YWwoc3RhdGUuY2xpZW50T2Zmc2V0LCBhY3Rpb24uY2xpZW50T2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNsaWVudE9mZnNldDogYWN0aW9uLmNsaWVudE9mZnNldFxuICAgICAgfSk7XG4gICAgY2FzZSBfZHJhZ0Ryb3AuRU5EX0RSQUc6XG4gICAgY2FzZSBfZHJhZ0Ryb3AuRFJPUDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VDbGllbnRPZmZzZXQoc3RhdGUpIHtcbiAgdmFyIGNsaWVudE9mZnNldCA9IHN0YXRlLmNsaWVudE9mZnNldCxcbiAgICAgIGluaXRpYWxDbGllbnRPZmZzZXQgPSBzdGF0ZS5pbml0aWFsQ2xpZW50T2Zmc2V0LFxuICAgICAgaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCA9IHN0YXRlLmluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQ7XG5cbiAgaWYgKCFjbGllbnRPZmZzZXQgfHwgIWluaXRpYWxDbGllbnRPZmZzZXQgfHwgIWluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IGNsaWVudE9mZnNldC54ICsgaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldC54IC0gaW5pdGlhbENsaWVudE9mZnNldC54LFxuICAgIHk6IGNsaWVudE9mZnNldC55ICsgaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldC55IC0gaW5pdGlhbENsaWVudE9mZnNldC55XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldChzdGF0ZSkge1xuICB2YXIgY2xpZW50T2Zmc2V0ID0gc3RhdGUuY2xpZW50T2Zmc2V0LFxuICAgICAgaW5pdGlhbENsaWVudE9mZnNldCA9IHN0YXRlLmluaXRpYWxDbGllbnRPZmZzZXQ7XG5cbiAgaWYgKCFjbGllbnRPZmZzZXQgfHwgIWluaXRpYWxDbGllbnRPZmZzZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IGNsaWVudE9mZnNldC54IC0gaW5pdGlhbENsaWVudE9mZnNldC54LFxuICAgIHk6IGNsaWVudE9mZnNldC55IC0gaW5pdGlhbENsaWVudE9mZnNldC55XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL3JlZHVjZXJzL2RyYWdPZmZzZXQuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IG1hdGNoZXNUeXBlO1xuXG52YXIgX2lzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2lzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNBcnJheSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG1hdGNoZXNUeXBlKHRhcmdldFR5cGUsIGRyYWdnZWRJdGVtVHlwZSkge1xuICBpZiAoKDAsIF9pc0FycmF5Mi5kZWZhdWx0KSh0YXJnZXRUeXBlKSkge1xuICAgIHJldHVybiB0YXJnZXRUeXBlLnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0ID09PSBkcmFnZ2VkSXRlbVR5cGU7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRhcmdldFR5cGUgPT09IGRyYWdnZWRJdGVtVHlwZTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi91dGlscy9tYXRjaGVzVHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIG1ldGhvZHMgbGlrZSBgXy5kaWZmZXJlbmNlYCB3aXRob3V0IHN1cHBvcnRcbiAqIGZvciBleGNsdWRpbmcgbXVsdGlwbGUgYXJyYXlzIG9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gZXhjbHVkZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGZpbHRlcmVkIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gYmFzZURpZmZlcmVuY2UoYXJyYXksIHZhbHVlcywgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHZhbHVlc0xlbmd0aCA9IHZhbHVlcy5sZW5ndGg7XG5cbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmIChpdGVyYXRlZSkge1xuICAgIHZhbHVlcyA9IGFycmF5TWFwKHZhbHVlcywgYmFzZVVuYXJ5KGl0ZXJhdGVlKSk7XG4gIH1cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gIH1cbiAgZWxzZSBpZiAodmFsdWVzLmxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIHZhbHVlcyA9IG5ldyBTZXRDYWNoZSh2YWx1ZXMpO1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA9PSBudWxsID8gdmFsdWUgOiBpdGVyYXRlZSh2YWx1ZSk7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgdmFsdWVzSW5kZXggPSB2YWx1ZXNMZW5ndGg7XG4gICAgICB3aGlsZSAodmFsdWVzSW5kZXgtLSkge1xuICAgICAgICBpZiAodmFsdWVzW3ZhbHVlc0luZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXModmFsdWVzLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRGlmZmVyZW5jZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZURpZmZlcmVuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lkZW50aXR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBkaXJ0eUhhbmRsZXJJZHM7XG5leHBvcnRzLmFyZURpcnR5ID0gYXJlRGlydHk7XG5cbnZhciBfeG9yID0gcmVxdWlyZSgnbG9kYXNoL3hvcicpO1xuXG52YXIgX3hvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF94b3IpO1xuXG52YXIgX2ludGVyc2VjdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pbnRlcnNlY3Rpb24nKTtcblxudmFyIF9pbnRlcnNlY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW50ZXJzZWN0aW9uKTtcblxudmFyIF9kcmFnRHJvcCA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZHJhZ0Ryb3AnKTtcblxudmFyIF9yZWdpc3RyeSA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvcmVnaXN0cnknKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE5PTkUgPSBbXTtcbnZhciBBTEwgPSBbXTtcblxuZnVuY3Rpb24gZGlydHlIYW5kbGVySWRzKCkge1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IE5PTkU7XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG4gIHZhciBkcmFnT3BlcmF0aW9uID0gYXJndW1lbnRzWzJdO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIF9kcmFnRHJvcC5IT1ZFUjpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgX3JlZ2lzdHJ5LkFERF9TT1VSQ0U6XG4gICAgY2FzZSBfcmVnaXN0cnkuQUREX1RBUkdFVDpcbiAgICBjYXNlIF9yZWdpc3RyeS5SRU1PVkVfVEFSR0VUOlxuICAgIGNhc2UgX3JlZ2lzdHJ5LlJFTU9WRV9TT1VSQ0U6XG4gICAgICByZXR1cm4gTk9ORTtcbiAgICBjYXNlIF9kcmFnRHJvcC5CRUdJTl9EUkFHOlxuICAgIGNhc2UgX2RyYWdEcm9wLlBVQkxJU0hfRFJBR19TT1VSQ0U6XG4gICAgY2FzZSBfZHJhZ0Ryb3AuRU5EX0RSQUc6XG4gICAgY2FzZSBfZHJhZ0Ryb3AuRFJPUDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEFMTDtcbiAgfVxuXG4gIHZhciB0YXJnZXRJZHMgPSBhY3Rpb24udGFyZ2V0SWRzO1xuICB2YXIgcHJldlRhcmdldElkcyA9IGRyYWdPcGVyYXRpb24udGFyZ2V0SWRzO1xuXG4gIHZhciByZXN1bHQgPSAoMCwgX3hvcjIuZGVmYXVsdCkodGFyZ2V0SWRzLCBwcmV2VGFyZ2V0SWRzKTtcblxuICB2YXIgZGlkQ2hhbmdlID0gZmFsc2U7XG4gIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXJnZXRJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0YXJnZXRJZHNbaV0gIT09IHByZXZUYXJnZXRJZHNbaV0pIHtcbiAgICAgICAgZGlkQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRpZENoYW5nZSA9IHRydWU7XG4gIH1cblxuICBpZiAoIWRpZENoYW5nZSkge1xuICAgIHJldHVybiBOT05FO1xuICB9XG5cbiAgdmFyIHByZXZJbm5lcm1vc3RUYXJnZXRJZCA9IHByZXZUYXJnZXRJZHNbcHJldlRhcmdldElkcy5sZW5ndGggLSAxXTtcbiAgdmFyIGlubmVybW9zdFRhcmdldElkID0gdGFyZ2V0SWRzW3RhcmdldElkcy5sZW5ndGggLSAxXTtcblxuICBpZiAocHJldklubmVybW9zdFRhcmdldElkICE9PSBpbm5lcm1vc3RUYXJnZXRJZCkge1xuICAgIGlmIChwcmV2SW5uZXJtb3N0VGFyZ2V0SWQpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHByZXZJbm5lcm1vc3RUYXJnZXRJZCk7XG4gICAgfVxuICAgIGlmIChpbm5lcm1vc3RUYXJnZXRJZCkge1xuICAgICAgcmVzdWx0LnB1c2goaW5uZXJtb3N0VGFyZ2V0SWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGFyZURpcnR5KHN0YXRlLCBoYW5kbGVySWRzKSB7XG4gIGlmIChzdGF0ZSA9PT0gTk9ORSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzdGF0ZSA9PT0gQUxMIHx8IHR5cGVvZiBoYW5kbGVySWRzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfaW50ZXJzZWN0aW9uMi5kZWZhdWx0KShoYW5kbGVySWRzLCBzdGF0ZSkubGVuZ3RoID4gMDtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvZGlydHlIYW5kbGVySWRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLm5vb3ApO1xuICogLy8gPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vb3A7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm9vcC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRHJhZ0xheWVyO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzID0gcmVxdWlyZSgnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnKTtcblxudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ob2lzdE5vblJlYWN0U3RhdGljcyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCcuL3V0aWxzL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX3NoYWxsb3dFcXVhbFNjYWxhciA9IHJlcXVpcmUoJy4vdXRpbHMvc2hhbGxvd0VxdWFsU2NhbGFyJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsU2NhbGFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbFNjYWxhcik7XG5cbnZhciBfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMgPSByZXF1aXJlKCcuL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzJyk7XG5cbnZhciBfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIERyYWdMYXllcihjb2xsZWN0KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICBfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyLmRlZmF1bHQuYXBwbHkodW5kZWZpbmVkLCBbJ0RyYWdMYXllcicsICdjb2xsZWN0Wywgb3B0aW9uc10nXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIGNvbGxlY3QgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBcImNvbGxlY3RcIiBwcm92aWRlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gRHJhZ0xheWVyICcgKyAndG8gYmUgYSBmdW5jdGlvbiB0aGF0IGNvbGxlY3RzIHByb3BzIHRvIGluamVjdCBpbnRvIHRoZSBjb21wb25lbnQuICcsICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctbGF5ZXIuaHRtbCcsIGNvbGxlY3QpO1xuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoKDAsIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KShvcHRpb25zKSwgJ0V4cGVjdGVkIFwib3B0aW9uc1wiIHByb3ZpZGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gRHJhZ0xheWVyIHRvIGJlICcgKyAnYSBwbGFpbiBvYmplY3Qgd2hlbiBzcGVjaWZpZWQuICcgKyAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLWxheWVyLmh0bWwnLCBvcHRpb25zKTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGVMYXllcihEZWNvcmF0ZWRDb21wb25lbnQpIHtcbiAgICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICAgIHZhciBfb3B0aW9ucyRhcmVQcm9wc0VxdWEgPSBvcHRpb25zLmFyZVByb3BzRXF1YWwsXG4gICAgICAgIGFyZVByb3BzRXF1YWwgPSBfb3B0aW9ucyRhcmVQcm9wc0VxdWEgPT09IHVuZGVmaW5lZCA/IF9zaGFsbG93RXF1YWxTY2FsYXIyLmRlZmF1bHQgOiBfb3B0aW9ucyRhcmVQcm9wc0VxdWE7XG5cbiAgICB2YXIgZGlzcGxheU5hbWUgPSBEZWNvcmF0ZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgRGVjb3JhdGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cbiAgICB2YXIgRHJhZ0xheWVyQ29udGFpbmVyID0gKF90ZW1wID0gX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhEcmFnTGF5ZXJDb250YWluZXIsIF9Db21wb25lbnQpO1xuXG4gICAgICBfY3JlYXRlQ2xhc3MoRHJhZ0xheWVyQ29udGFpbmVyLCBbe1xuICAgICAgICBrZXk6ICdnZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSgpIHtcbiAgICAgICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodGhpcy5jaGlsZCwgJ0luIG9yZGVyIHRvIGFjY2VzcyBhbiBpbnN0YW5jZSBvZiB0aGUgZGVjb3JhdGVkIGNvbXBvbmVudCBpdCBjYW4gJyArICdub3QgYmUgYSBzdGF0ZWxlc3MgY29tcG9uZW50LicpO1xuICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4gIWFyZVByb3BzRXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgZnVuY3Rpb24gRHJhZ0xheWVyQ29udGFpbmVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnTGF5ZXJDb250YWluZXIpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEcmFnTGF5ZXJDb250YWluZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcmFnTGF5ZXJDb250YWluZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlID0gX3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQoX3RoaXMpO1xuXG4gICAgICAgIF90aGlzLm1hbmFnZXIgPSBjb250ZXh0LmRyYWdEcm9wTWFuYWdlcjtcbiAgICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKF90eXBlb2YoX3RoaXMubWFuYWdlcikgPT09ICdvYmplY3QnLCAnQ291bGQgbm90IGZpbmQgdGhlIGRyYWcgYW5kIGRyb3AgbWFuYWdlciBpbiB0aGUgY29udGV4dCBvZiAlcy4gJyArICdNYWtlIHN1cmUgdG8gd3JhcCB0aGUgdG9wLWxldmVsIGNvbXBvbmVudCBvZiB5b3VyIGFwcCB3aXRoIERyYWdEcm9wQ29udGV4dC4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLXRyb3VibGVzaG9vdGluZy5odG1sI2NvdWxkLW5vdC1maW5kLXRoZS1kcmFnLWFuZC1kcm9wLW1hbmFnZXItaW4tdGhlLWNvbnRleHQnLCBkaXNwbGF5TmFtZSwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0gX3RoaXMuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKERyYWdMYXllckNvbnRhaW5lciwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIG1vbml0b3IgPSB0aGlzLm1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tT2Zmc2V0Q2hhbmdlID0gbW9uaXRvci5zdWJzY3JpYmVUb09mZnNldENoYW5nZSh0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21TdGF0ZUNoYW5nZSA9IG1vbml0b3Iuc3Vic2NyaWJlVG9TdGF0ZUNoYW5nZSh0aGlzLmhhbmRsZUNoYW5nZSk7XG5cbiAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgIHRoaXMuaXNDdXJyZW50bHlNb3VudGVkID0gZmFsc2U7XG5cbiAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbU9mZnNldENoYW5nZSgpO1xuICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tU3RhdGVDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVDaGFuZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgICAgIGlmICghdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbmV4dFN0YXRlID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcbiAgICAgICAgICBpZiAoISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KShuZXh0U3RhdGUsIHRoaXMuc3RhdGUpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEN1cnJlbnRTdGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50U3RhdGUoKSB7XG4gICAgICAgICAgdmFyIG1vbml0b3IgPSB0aGlzLm1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgICAgIHJldHVybiBjb2xsZWN0KG1vbml0b3IpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRGVjb3JhdGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSwge1xuICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoY2hpbGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5jaGlsZCA9IGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gRHJhZ0xheWVyQ29udGFpbmVyO1xuICAgIH0oX3JlYWN0LkNvbXBvbmVudCksIF9jbGFzcy5EZWNvcmF0ZWRDb21wb25lbnQgPSBEZWNvcmF0ZWRDb21wb25lbnQsIF9jbGFzcy5kaXNwbGF5TmFtZSA9ICdEcmFnTGF5ZXIoJyArIGRpc3BsYXlOYW1lICsgJyknLCBfY2xhc3MuY29udGV4dFR5cGVzID0ge1xuICAgICAgZHJhZ0Ryb3BNYW5hZ2VyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfSwgX3RlbXApO1xuXG5cbiAgICByZXR1cm4gKDAsIF9ob2lzdE5vblJlYWN0U3RhdGljczIuZGVmYXVsdCkoRHJhZ0xheWVyQ29udGFpbmVyLCBEZWNvcmF0ZWRDb21wb25lbnQpO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvRHJhZ0xheWVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc2hhbGxvd0VxdWFsU2NhbGFyO1xuZnVuY3Rpb24gc2hhbGxvd0VxdWFsU2NhbGFyKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICgodHlwZW9mIG9iakEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iakEpKSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fCAodHlwZW9mIG9iakIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iakIpKSAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICghaGFzT3duLmNhbGwob2JqQiwga2V5c0FbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbEEgPSBvYmpBW2tleXNBW2ldXTtcbiAgICB2YXIgdmFsQiA9IG9iakJba2V5c0FbaV1dO1xuXG4gICAgaWYgKHZhbEEgIT09IHZhbEIgfHwgKHR5cGVvZiB2YWxBID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWxBKSkgPT09ICdvYmplY3QnIHx8ICh0eXBlb2YgdmFsQiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsQikpID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvdXRpbHMvc2hhbGxvd0VxdWFsU2NhbGFyLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZGVjb3JhdGVIYW5kbGVyO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2Rpc3Bvc2FibGVzID0gcmVxdWlyZSgnZGlzcG9zYWJsZXMnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzID0gcmVxdWlyZSgnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnKTtcblxudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ob2lzdE5vblJlYWN0U3RhdGljcyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF9zaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0VxdWFsKTtcblxudmFyIF9zaGFsbG93RXF1YWxTY2FsYXIgPSByZXF1aXJlKCcuL3V0aWxzL3NoYWxsb3dFcXVhbFNjYWxhcicpO1xuXG52YXIgX3NoYWxsb3dFcXVhbFNjYWxhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWxTY2FsYXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIGRlY29yYXRlSGFuZGxlcihfcmVmKSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBEZWNvcmF0ZWRDb21wb25lbnQgPSBfcmVmLkRlY29yYXRlZENvbXBvbmVudCxcbiAgICAgIGNyZWF0ZUhhbmRsZXIgPSBfcmVmLmNyZWF0ZUhhbmRsZXIsXG4gICAgICBjcmVhdGVNb25pdG9yID0gX3JlZi5jcmVhdGVNb25pdG9yLFxuICAgICAgY3JlYXRlQ29ubmVjdG9yID0gX3JlZi5jcmVhdGVDb25uZWN0b3IsXG4gICAgICByZWdpc3RlckhhbmRsZXIgPSBfcmVmLnJlZ2lzdGVySGFuZGxlcixcbiAgICAgIGNvbnRhaW5lckRpc3BsYXlOYW1lID0gX3JlZi5jb250YWluZXJEaXNwbGF5TmFtZSxcbiAgICAgIGdldFR5cGUgPSBfcmVmLmdldFR5cGUsXG4gICAgICBjb2xsZWN0ID0gX3JlZi5jb2xsZWN0LFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGFyZVByb3BzRXF1YSA9IG9wdGlvbnMuYXJlUHJvcHNFcXVhbCxcbiAgICAgIGFyZVByb3BzRXF1YWwgPSBfb3B0aW9ucyRhcmVQcm9wc0VxdWEgPT09IHVuZGVmaW5lZCA/IF9zaGFsbG93RXF1YWxTY2FsYXIyLmRlZmF1bHQgOiBfb3B0aW9ucyRhcmVQcm9wc0VxdWE7XG5cbiAgdmFyIGRpc3BsYXlOYW1lID0gRGVjb3JhdGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IERlY29yYXRlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuXG4gIHZhciBEcmFnRHJvcENvbnRhaW5lciA9IChfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERyYWdEcm9wQ29udGFpbmVyLCBfQ29tcG9uZW50KTtcblxuICAgIF9jcmVhdGVDbGFzcyhEcmFnRHJvcENvbnRhaW5lciwgW3tcbiAgICAgIGtleTogJ2dldEhhbmRsZXJJZCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SGFuZGxlcklkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVySWQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gIWFyZVByb3BzRXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgZnVuY3Rpb24gRHJhZ0Ryb3BDb250YWluZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnRHJvcENvbnRhaW5lcik7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEcmFnRHJvcENvbnRhaW5lci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyYWdEcm9wQ29udGFpbmVyKSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBfdGhpcy5oYW5kbGVDaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgICBfdGhpcy5oYW5kbGVDaGlsZFJlZiA9IF90aGlzLmhhbmRsZUNoaWxkUmVmLmJpbmQoX3RoaXMpO1xuXG4gICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoX3R5cGVvZihfdGhpcy5jb250ZXh0LmRyYWdEcm9wTWFuYWdlcikgPT09ICdvYmplY3QnLCAnQ291bGQgbm90IGZpbmQgdGhlIGRyYWcgYW5kIGRyb3AgbWFuYWdlciBpbiB0aGUgY29udGV4dCBvZiAlcy4gJyArICdNYWtlIHN1cmUgdG8gd3JhcCB0aGUgdG9wLWxldmVsIGNvbXBvbmVudCBvZiB5b3VyIGFwcCB3aXRoIERyYWdEcm9wQ29udGV4dC4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLXRyb3VibGVzaG9vdGluZy5odG1sI2NvdWxkLW5vdC1maW5kLXRoZS1kcmFnLWFuZC1kcm9wLW1hbmFnZXItaW4tdGhlLWNvbnRleHQnLCBkaXNwbGF5TmFtZSwgZGlzcGxheU5hbWUpO1xuXG4gICAgICBfdGhpcy5tYW5hZ2VyID0gX3RoaXMuY29udGV4dC5kcmFnRHJvcE1hbmFnZXI7XG4gICAgICBfdGhpcy5oYW5kbGVyTW9uaXRvciA9IGNyZWF0ZU1vbml0b3IoX3RoaXMubWFuYWdlcik7XG4gICAgICBfdGhpcy5oYW5kbGVyQ29ubmVjdG9yID0gY3JlYXRlQ29ubmVjdG9yKF90aGlzLm1hbmFnZXIuZ2V0QmFja2VuZCgpKTtcbiAgICAgIF90aGlzLmhhbmRsZXIgPSBjcmVhdGVIYW5kbGVyKF90aGlzLmhhbmRsZXJNb25pdG9yKTtcblxuICAgICAgX3RoaXMuZGlzcG9zYWJsZSA9IG5ldyBfZGlzcG9zYWJsZXMuU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgICAgX3RoaXMucmVjZWl2ZVByb3BzKHByb3BzKTtcbiAgICAgIF90aGlzLnN0YXRlID0gX3RoaXMuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICBfdGhpcy5kaXNwb3NlKCk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERyYWdEcm9wQ29udGFpbmVyLCBbe1xuICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlzcG9zYWJsZSA9IG5ldyBfZGlzcG9zYWJsZXMuU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWNlaXZlUHJvcHModGhpcy5wcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKCFhcmVQcm9wc0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICB0aGlzLnJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlY2VpdmVQcm9wcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlci5yZWNlaXZlUHJvcHMocHJvcHMpO1xuICAgICAgICB0aGlzLnJlY2VpdmVUeXBlKGdldFR5cGUocHJvcHMpKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZWNlaXZlVHlwZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVjZWl2ZVR5cGUodHlwZSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gdGhpcy5jdXJyZW50VHlwZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFR5cGUgPSB0eXBlO1xuXG4gICAgICAgIHZhciBfcmVnaXN0ZXJIYW5kbGVyID0gcmVnaXN0ZXJIYW5kbGVyKHR5cGUsIHRoaXMuaGFuZGxlciwgdGhpcy5tYW5hZ2VyKSxcbiAgICAgICAgICAgIGhhbmRsZXJJZCA9IF9yZWdpc3RlckhhbmRsZXIuaGFuZGxlcklkLFxuICAgICAgICAgICAgdW5yZWdpc3RlciA9IF9yZWdpc3RlckhhbmRsZXIudW5yZWdpc3RlcjtcblxuICAgICAgICB0aGlzLmhhbmRsZXJJZCA9IGhhbmRsZXJJZDtcbiAgICAgICAgdGhpcy5oYW5kbGVyTW9uaXRvci5yZWNlaXZlSGFuZGxlcklkKGhhbmRsZXJJZCk7XG4gICAgICAgIHRoaXMuaGFuZGxlckNvbm5lY3Rvci5yZWNlaXZlSGFuZGxlcklkKGhhbmRsZXJJZCk7XG5cbiAgICAgICAgdmFyIGdsb2JhbE1vbml0b3IgPSB0aGlzLm1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBnbG9iYWxNb25pdG9yLnN1YnNjcmliZVRvU3RhdGVDaGFuZ2UodGhpcy5oYW5kbGVDaGFuZ2UsIHsgaGFuZGxlcklkczogW2hhbmRsZXJJZF0gfSk7XG5cbiAgICAgICAgdGhpcy5kaXNwb3NhYmxlLnNldERpc3Bvc2FibGUobmV3IF9kaXNwb3NhYmxlcy5Db21wb3NpdGVEaXNwb3NhYmxlKG5ldyBfZGlzcG9zYWJsZXMuRGlzcG9zYWJsZSh1bnN1YnNjcmliZSksIG5ldyBfZGlzcG9zYWJsZXMuRGlzcG9zYWJsZSh1bnJlZ2lzdGVyKSkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2hhbmRsZUNoYW5nZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNDdXJyZW50bHlNb3VudGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHRTdGF0ZSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICAgIGlmICghKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSkpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdkaXNwb3NlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLmRpc3Bvc2FibGUuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmhhbmRsZXJDb25uZWN0b3IucmVjZWl2ZUhhbmRsZXJJZChudWxsKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdoYW5kbGVDaGlsZFJlZicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2hpbGRSZWYoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuaGFuZGxlci5yZWNlaXZlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0Q3VycmVudFN0YXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50U3RhdGUoKSB7XG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSBjb2xsZWN0KHRoaXMuaGFuZGxlckNvbm5lY3Rvci5ob29rcywgdGhpcy5oYW5kbGVyTW9uaXRvcik7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoKDAsIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KShuZXh0U3RhdGUpLCAnRXhwZWN0ZWQgYGNvbGxlY3RgIHNwZWNpZmllZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvICcgKyAnJXMgZm9yICVzIHRvIHJldHVybiBhIHBsYWluIG9iamVjdCBvZiBwcm9wcyB0byBpbmplY3QuICcgKyAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuJywgY29udGFpbmVyRGlzcGxheU5hbWUsIGRpc3BsYXlOYW1lLCBuZXh0U3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERlY29yYXRlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUsIHtcbiAgICAgICAgICByZWY6IHRoaXMuaGFuZGxlQ2hpbGRSZWZcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEcmFnRHJvcENvbnRhaW5lcjtcbiAgfShfcmVhY3QuQ29tcG9uZW50KSwgX2NsYXNzLkRlY29yYXRlZENvbXBvbmVudCA9IERlY29yYXRlZENvbXBvbmVudCwgX2NsYXNzLmRpc3BsYXlOYW1lID0gY29udGFpbmVyRGlzcGxheU5hbWUgKyAnKCcgKyBkaXNwbGF5TmFtZSArICcpJywgX2NsYXNzLmNvbnRleHRUeXBlcyA9IHtcbiAgICBkcmFnRHJvcE1hbmFnZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbiAgfSwgX3RlbXApO1xuXG5cbiAgcmV0dXJuICgwLCBfaG9pc3ROb25SZWFjdFN0YXRpY3MyLmRlZmF1bHQpKERyYWdEcm9wQ29udGFpbmVyLCBEZWNvcmF0ZWRDb21wb25lbnQpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvZGVjb3JhdGVIYW5kbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3cmFwQ29ubmVjdG9ySG9va3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX2Nsb25lV2l0aFJlZiA9IHJlcXVpcmUoJy4vdXRpbHMvY2xvbmVXaXRoUmVmJyk7XG5cbnZhciBfY2xvbmVXaXRoUmVmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nsb25lV2l0aFJlZik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRocm93SWZDb21wb3NpdGVDb21wb25lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gQ3VzdG9tIGNvbXBvbmVudHMgY2FuIG5vIGxvbmdlciBiZSB3cmFwcGVkIGRpcmVjdGx5IGluIFJlYWN0IERuRCAyLjBcbiAgLy8gc28gdGhhdCB3ZSBkb24ndCBuZWVkIHRvIGRlcGVuZCBvbiBmaW5kRE9NTm9kZSgpIGZyb20gcmVhY3QtZG9tLlxuICBpZiAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZGlzcGxheU5hbWUgPSBlbGVtZW50LnR5cGUuZGlzcGxheU5hbWUgfHwgZWxlbWVudC50eXBlLm5hbWUgfHwgJ3RoZSBjb21wb25lbnQnO1xuXG4gIHRocm93IG5ldyBFcnJvcignT25seSBuYXRpdmUgZWxlbWVudCBub2RlcyBjYW4gbm93IGJlIHBhc3NlZCB0byBSZWFjdCBEbkQgY29ubmVjdG9ycy4nICsgKCdZb3UgY2FuIGVpdGhlciB3cmFwICcgKyBkaXNwbGF5TmFtZSArICcgaW50byBhIDxkaXY+LCBvciB0dXJuIGl0IGludG8gYSAnKSArICdkcmFnIHNvdXJjZSBvciBhIGRyb3AgdGFyZ2V0IGl0c2VsZi4nKTtcbn1cblxuZnVuY3Rpb24gd3JhcEhvb2tUb1JlY29nbml6ZUVsZW1lbnQoaG9vaykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbGVtZW50T3JOb2RlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuXG4gICAgLy8gV2hlbiBwYXNzZWQgYSBub2RlLCBjYWxsIHRoZSBob29rIHN0cmFpZ2h0IGF3YXkuXG4gICAgaWYgKCEoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShlbGVtZW50T3JOb2RlKSkge1xuICAgICAgdmFyIG5vZGUgPSBlbGVtZW50T3JOb2RlO1xuICAgICAgaG9vayhub2RlLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gSWYgcGFzc2VkIGEgUmVhY3RFbGVtZW50LCBjbG9uZSBpdCBhbmQgYXR0YWNoIHRoaXMgZnVuY3Rpb24gYXMgYSByZWYuXG4gICAgLy8gVGhpcyBoZWxwcyB1cyBhY2hpZXZlIGEgbmVhdCBBUEkgd2hlcmUgdXNlciBkb2Vzbid0IGV2ZW4ga25vdyB0aGF0IHJlZnNcbiAgICAvLyBhcmUgYmVpbmcgdXNlZCB1bmRlciB0aGUgaG9vZC5cbiAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRPck5vZGU7XG4gICAgdGhyb3dJZkNvbXBvc2l0ZUNvbXBvbmVudEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAvLyBXaGVuIG5vIG9wdGlvbnMgYXJlIHBhc3NlZCwgdXNlIHRoZSBob29rIGRpcmVjdGx5XG4gICAgdmFyIHJlZiA9IG9wdGlvbnMgPyBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgcmV0dXJuIGhvb2sobm9kZSwgb3B0aW9ucyk7XG4gICAgfSA6IGhvb2s7XG5cbiAgICByZXR1cm4gKDAsIF9jbG9uZVdpdGhSZWYyLmRlZmF1bHQpKGVsZW1lbnQsIHJlZik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb25uZWN0b3JIb29rcyhob29rcykge1xuICB2YXIgd3JhcHBlZEhvb2tzID0ge307XG5cbiAgT2JqZWN0LmtleXMoaG9va3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBob29rID0gaG9va3Nba2V5XTtcbiAgICB2YXIgd3JhcHBlZEhvb2sgPSB3cmFwSG9va1RvUmVjb2duaXplRWxlbWVudChob29rKTtcbiAgICB3cmFwcGVkSG9va3Nba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3cmFwcGVkSG9vaztcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gd3JhcHBlZEhvb2tzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvd3JhcENvbm5lY3Rvckhvb2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhcmVPcHRpb25zRXF1YWw7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF9zaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0VxdWFsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYXJlT3B0aW9uc0VxdWFsKG5leHRPcHRpb25zLCBjdXJyZW50T3B0aW9ucykge1xuICBpZiAoY3VycmVudE9wdGlvbnMgPT09IG5leHRPcHRpb25zKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gY3VycmVudE9wdGlvbnMgIT09IG51bGwgJiYgbmV4dE9wdGlvbnMgIT09IG51bGwgJiYgKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKGN1cnJlbnRPcHRpb25zLCBuZXh0T3B0aW9ucyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9hcmVPcHRpb25zRXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzVmFsaWRUeXBlO1xuXG52YXIgX2lzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2lzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNBcnJheSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzVmFsaWRUeXBlKHR5cGUsIGFsbG93QXJyYXkpIHtcbiAgICAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8ICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHlwZSkpID09PSAnc3ltYm9sJyB8fCBhbGxvd0FycmF5ICYmICgwLCBfaXNBcnJheTIuZGVmYXVsdCkodHlwZSkgJiYgdHlwZS5ldmVyeShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZFR5cGUodCwgZmFsc2UpO1xuICAgICAgIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvdXRpbHMvaXNWYWxpZFR5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Y2xvc2VzdH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJhc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgcmVuZGVyRGlzcGxheShyb3cpe1xuICAgIGlmKCFyb3cudmFsdWUpe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygndGxFdmVudERpc3BsYXlSb3cnLCByb3cua2V5KTtcbiAgICBpZihBcnJheS5pc0FycmF5KHJvdy52YWx1ZSkpe1xuICAgICAgaWYocm93LnZhbHVlLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e3Jvdy5rZXl9PlxuICAgICAgICAgIHtyb3cudmFsdWUubWFwKCh2YWwsIGtleSkgPT4gPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwiaXRlbVwiPnt2YWx9PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtyb3cua2V5fT5cbiAgICAgICAge3Jvdy52YWx1ZX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICByZW5kZXIoKXtcbiAgICBsZXQgZGlzcGxheVBvc2l0aW9uID0gJ3JpZ2h0JztcbiAgICBcbiAgICBpZih0aGlzLnJlZnMuYmFzZSl7XG4gICAgICB2YXIgd3JhcHBlciA9IGNsb3Nlc3QodGhpcy5yZWZzLmJhc2UsICcubGluZXNGcmFtZScpO1xuICAgICAgdmFyIHdyYXBwZXJSZWN0ID0gd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciB3cmFwcGVyUmlnaHRTaWRlID0gd3JhcHBlclJlY3QubGVmdCArIHdyYXBwZXJSZWN0LndpZHRoO1xuXG4gICAgICB2YXIgcHJldmlld1JlY3QgPSB0aGlzLnJlZnMuYmFzZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBwcmV2aWV3UmlnaHRTaWRlID0gcHJldmlld1JlY3QubGVmdCArIHByZXZpZXdSZWN0LndpZHRoO1xuICAgICAgaWYod3JhcHBlclJpZ2h0U2lkZSA8IHByZXZpZXdSaWdodFNpZGUgKyA3MCl7XG4gICAgICAgIGRpc3BsYXlQb3NpdGlvbiA9ICdsZWZ0JztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwiYmFzZVwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fT5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5wcm9wcy5kcmFnZ2luZ0Rpc3BsYXkpe1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxEcmFnZ2luZ0Rpc3BsYXknLCBkaXNwbGF5UG9zaXRpb24pfSBzdHlsZT17e3RvcDogdGhpcy5wcm9wcy5kcmFnZ2luZ0Rpc3BsYXlUb3B9fT57dGhpcy5wcm9wcy5kcmFnZ2luZ0Rpc3BsYXl9PC9kaXY+KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxFdmVudERpc3BsYXlcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5kaXNwbGF5Lm1hcChyb3cgPT4gdGhpcy5yZW5kZXJEaXNwbGF5KHJvdykpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJm5ic3A7XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkV2ZW50QmFzZS5kZWZhdWx0UHJvcHMgPSB7ZGlzcGxheTogW119O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRCYXNlLmpzeCIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUaW1lbGluZSBmcm9tICcuL2NvbXBvbmVudHMvVGltZWxpbmUnO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi9jbGFzc2VzL1RpbWUnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5cbmV4cG9ydCB7VGltZWxpbmUsIFRpbWUsIFRpbWVTcGFufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmVzNiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQgfSBmcm9tICdyZWFjdC1kbmQnO1xuaW1wb3J0IERuZEJhY2tlbmQgZnJvbSAncmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQnO1xuaW1wb3J0IEV2ZW50UHJldmlldyBmcm9tICcuL0V2ZW50UHJldmlldyc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudCc7XG5pbXBvcnQgUnVsZXIgZnJvbSAnLi9SdWxlcic7XG5pbXBvcnQgTGluZUxhYmVsIGZyb20gJy4vTGluZUxhYmVsJztcbmltcG9ydCB7IERyb3BUYXJnZXQgfSBmcm9tICdyZWFjdC1kbmQnO1xuXG5cbmNvbnN0IHRhcmdldCA9IHtcbiAgZHJvcChwcm9wcywgbW9uaXRvciwgY29tcG9uZW50KSB7XG4gICAgY29uc3QgaXRlbSA9IG1vbml0b3IuZ2V0SXRlbSgpO1xuICAgIGNvbnN0IGRlbHRhID0gbW9uaXRvci5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKTtcblxuICAgIGNvbnN0IGluaXRhbE9mZnNldCA9IGl0ZW0uZHJhZ2dpbmdDb21wb25lbnQuZ2V0T2Zmc2V0KCk7XG4gICAgY29uc3QgdG9wID0gTWF0aC5yb3VuZChpbml0YWxPZmZzZXQudG9wICsgZGVsdGEueSk7XG4gICAgY29uc3QgbGVmdCA9IE1hdGgucm91bmQoaW5pdGFsT2Zmc2V0LmxlZnQgKyBkZWx0YS54KTtcblxuICAgIGl0ZW0uZHJhZ2dpbmdDb21wb25lbnQubW92ZVRvKHRvcCwgbGVmdCk7XG4gIH0sXG4gIGhvdmVyKHByb3BzLCBtb25pdG9yLCBjb21wb25lbnQpe1xuICAgIGNvbnN0IGNsaWVudE9mZnNldCA9IG1vbml0b3IuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gICAgaWYoY2xpZW50T2Zmc2V0KXtcbiAgICAgIGNvbnN0IGl0ZW0gPSBtb25pdG9yLmdldEl0ZW0oKTtcbiAgICAgIGNvbnN0IGxpbmVXcmFwcGVyQm91bmRzID0gY29tcG9uZW50LnJlZnMubGluZXNXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgbGluZUNvbXBvbmVudCA9IHByb3BzLnRpbWVsaW5lLmRyYWdnaW5nT3ZlcihjbGllbnRPZmZzZXQueCAtIGxpbmVXcmFwcGVyQm91bmRzLmxlZnQgKyAoaXRlbS5kcmFnZ2luZ0NvbXBvbmVudC5wcm9wcy53aWR0aCAvIDIvKmV2ZW5044Gu55yf44KT5Lit44KS5Z+65rqW44Gr44GZ44KLKi8pKTtcbiAgICAgIGNvbnN0IHRpbWUgPSBwcm9wcy50aW1lbGluZS50b3BUb1RpbWUoY2xpZW50T2Zmc2V0LnkgKyBjb21wb25lbnQucmVmcy5saW5lc1dyYXBwZXIuc2Nyb2xsVG9wIC0gbGluZVdyYXBwZXJCb3VuZHMudG9wKTtcbiAgICAgIGl0ZW0uZHJhZ2dpbmdDb21wb25lbnQuZHJhZ2dpbmcodGltZSwgbGluZUNvbXBvbmVudCA/IGxpbmVDb21wb25lbnQucHJvcHMuaWQgOiBudWxsKTtcbiAgICB9XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjb2xsZWN0KGNvbm5lY3QsIG1vbml0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICBjb25uZWN0RHJvcFRhcmdldDogY29ubmVjdC5kcm9wVGFyZ2V0KClcbiAgfTtcbn1cblxuY2xhc3MgRnJhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBydWxlckludGVydmFsID0gNDtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtaW5XaWR0aDogMCxcbiAgICAgIGV2ZW50czogdGhpcy5wcm9wcy5pbml0aWFsRXZlbnRzfHxbXSxcbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gIH1cblxuICByZXNpemVVcChldmVudENvbXBvbmVudCwgY2xpY2tlZFRvcCl7XG4gICAgY29uc3QgaW5pdGlhbEhlaWdodCA9IGV2ZW50Q29tcG9uZW50LnN0YXRlLmhlaWdodDtcbiAgICBjb25zdCBwcmV2Qm90dG9tID0gdGhpcy5wcm9wcy50aW1lbGluZS5nZXRQcmV2Qm90dG9tKGV2ZW50Q29tcG9uZW50KTtcbiAgICBjb25zdCBtb3VzZU1vdmVFdmVudCA9IChtb3ZlRXZlbnQpID0+IHtcbiAgICAgIGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBjbGlja2VkVG9wIC0gbW92ZUV2ZW50LmNsaWVudFk7XG4gICAgICBpZih0YXJnZXRIZWlnaHQgPiAzNil7XG4gICAgICAgIGxldCB0YXJnZXRUb3AgPSBldmVudENvbXBvbmVudC5zdGF0ZS50b3AgLSAodGFyZ2V0SGVpZ2h0IC0gZXZlbnRDb21wb25lbnQuc3RhdGUuaGVpZ2h0KTtcbiAgICAgICAgaWYodGFyZ2V0VG9wIDw9IHByZXZCb3R0b20pe1xuICAgICAgICAgIHRhcmdldFRvcCA9IHByZXZCb3R0b207XG4gICAgICAgIH1cblxuICAgICAgICBldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuID0gbmV3IFRpbWVTcGFuKHRoaXMucHJvcHMudGltZWxpbmUudG9wVG9UaW1lKHRhcmdldFRvcCksIGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCkpO1xuICAgICAgICBldmVudENvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQoZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3BhbiksXG4gICAgICAgICAgdG9wOiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcChldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSxcbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6IGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuZ2V0RGlzcGxheVRpbWUoKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc3RvcE1vdmVFdmVudCA9IChtb3VzZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50KTtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BNb3ZlRXZlbnQpO1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gICAgICBldmVudENvbXBvbmVudC5lbmRSZXNpemluZyhtb3VzZUV2ZW50KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcE1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gIH1cblxuICByZXNpemVEb3duKGV2ZW50Q29tcG9uZW50LCBjbGlja2VkVG9wKXtcbiAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gZXZlbnRDb21wb25lbnQuc3RhdGUuaGVpZ2h0O1xuICAgIGNvbnN0IG5leHRUb3AgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmdldE5leHRUb3AoZXZlbnRDb21wb25lbnQpO1xuICAgIGNvbnN0IG1vdXNlTW92ZUV2ZW50ID0gKG1vdmVFdmVudCkgPT4ge1xuICAgICAgZXZlbnRDb21wb25lbnQucmVzaXppbmcgPSB0cnVlO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIG1vdmVFdmVudC5jbGllbnRZIC0gY2xpY2tlZFRvcDtcbiAgICAgIGlmKHRhcmdldEhlaWdodCA+IDM2KXtcbiAgICAgICAgbGV0IHRhcmdldEJvdHRvbSA9IGV2ZW50Q29tcG9uZW50LnN0YXRlLnRvcCArIHRhcmdldEhlaWdodDtcbiAgICAgICAgaWYodGFyZ2V0Qm90dG9tID49IG5leHRUb3Ape1xuICAgICAgICAgIHRhcmdldEJvdHRvbSA9IG5leHRUb3A7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuID0gbmV3IFRpbWVTcGFuKGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSwgdGhpcy5wcm9wcy50aW1lbGluZS50b3BUb1RpbWUodGFyZ2V0Qm90dG9tKSk7XG4gICAgICAgIGV2ZW50Q29tcG9uZW50LnNldFN0YXRlKHtcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodChldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuKSxcbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6IGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4uZ2V0RW5kVGltZSgpLmdldERpc3BsYXlUaW1lKCksXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5VG9wOiB0YXJnZXRIZWlnaHQgLSAxMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc3RvcE1vdmVFdmVudCA9IChtb3VzZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50KTtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BNb3ZlRXZlbnQpO1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gICAgICBldmVudENvbXBvbmVudC5lbmRSZXNpemluZyhtb3VzZUV2ZW50KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcE1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gIH1cblxuICByZW1vdmVFdmVudChldmVudElkKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtldmVudHM6IHRoaXMuc3RhdGUuZXZlbnRzLmZpbHRlcihldiA9PiBldi5pZCAhPSBldmVudElkKX0sIHJlc29sdmUpO1xuICAgIH0pXG4gIH1cblxuICB1cGRhdGVFdmVudHMoY2FsbGJhY2spe1xuICAgIHRoaXMuc2V0U3RhdGUoe2V2ZW50czogY2FsbGJhY2sodGhpcy5zdGF0ZS5ldmVudHMpfSk7XG4gIH1cblxuICBhZGRFdmVudHMoZXZlbnRzKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB2YXIgY3VycmVudCA9IFsuLi50aGlzLnN0YXRlLmV2ZW50c107XG4gICAgICB2YXIgZXZlbnRJZHMgPSBbXTtcbiAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgaWYoIWV2ZW50LmlkKXtcbiAgICAgICAgICBldmVudC5pZCA9IHRoaXMucHJvcHMudGltZWxpbmUuY3JlYXRlRXZlbnRJZCgpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50SWRzLnB1c2goZXZlbnQuaWQpO1xuICAgICAgICBjdXJyZW50LnB1c2goZXZlbnQpXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2V2ZW50czogY3VycmVudH0sICgpID0+IHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmV2ZW50Q29tcG9uZW50cy5maWx0ZXIoZXZlbnRDb21wb25lbnQgPT4ge1xuICAgICAgICAgIHJldHVybiBldmVudElkcy5pbmRleE9mKGV2ZW50Q29tcG9uZW50LnByb3BzLmlkKSAhPT0gLTE7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KXtcbiAgICB0aGlzLnNldFN0YXRlKHtoZWlnaHQ6IGhlaWdodH0pO1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVQb3MoZSl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogZS5jbGllbnRZIC0gZS5jdXJyZW50VGFyZ2V0Lm9mZnNldFRvcCArIGUuY3VycmVudFRhcmdldC5zY3JvbGxUb3AsXG4gICAgICBsZWZ0OiBlLmNsaWVudFggLSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdCArIGUuY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0XG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtaW5XaWR0aDogdGhpcy5wcm9wcy50aW1lbGluZS5nZXRUb3RhbFdpZHRoKClcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHt9O1xuICAgIC8v44Kk44OZ44Oz44OI44Gv5pWw44GM5aSa44GE44Gu44Gn6LWw5p+744KS5pyA5bCP6ZmQ44Gr44GZ44KL44Gf44KBc3RhdGXjgavjgZfjgZ/jgYzjgIF0aW1lbGluZeOCkuS4uOOBo+OBqOiqreOBv+i+vOOBv+ebtOOBmeOBruOBq+WvvuW/nOOBmeOCi+OBn+OCgeODgeOCp+ODg+OCr+OAglxuICAgIC8v44Kk44OZ44Oz44OI44KS5aSJ5pu044GZ44KL44Go44GN44Gv5Z+65pysdGltZWxpbmXjga7plqLmlbDntYznlLHjgafooYzjgYTjgIHlhajjgaboqq3jgb/ovrzjgb/nm7TjgZnmmYLjgaDjgZFpbml0aWFsRXZlbnRz44KS5aSJ5pu044GZ44KL44CCXG4gICAgaWYobmV4dFByb3BzLmluaXRpYWxFdmVudHMgIT09IHRoaXMucHJvcHMuaW5pdGlhbEV2ZW50cyl7XG4gICAgICBuZXdTdGF0ZS5ldmVudHMgPSBuZXh0UHJvcHMuaW5pdGlhbEV2ZW50cztcbiAgICB9XG5cbiAgICBpZihuZXh0UHJvcHMubGluZURhdGEgIT09IHRoaXMucHJvcHMubGluZURhdGEpe1xuICAgICAgbmV3U3RhdGUubWluV2lkdGggPSB0aGlzLnByb3BzLnRpbWVsaW5lLmdldFRvdGFsV2lkdGgoKVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBjb25uZWN0RHJvcFRhcmdldCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2VsZW0gPT4gdGhpcy5lbGVtZW50ID0gZWxlbX0gY2xhc3NOYW1lPVwidGxGcmFtZVZpZXcgc2Nyb2xsV3JhcHBlclwiIHN0eWxlPXt7d2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG92ZXJmbG93WDogJ2F1dG8nfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttaW5XaWR0aDogdGhpcy5zdGF0ZS5taW5XaWR0aCArIHRoaXMucHJvcHMuY2hpbGRXaWR0aCwgZGlzcGxheTpcImZsZXhcIn19PlxuICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3REcm9wVGFyZ2V0KFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzRnJhbWVcIiBzdHlsZT17e3dpZHRoOiB0aGlzLnN0YXRlLm1pbldpZHRoLCBvdmVyZmxvdzogJ2hpZGRlbid9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IHRoaXMuc3RhdGUubWluV2lkdGggKyAyMH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bExhYmVsVmlld1wiIHN0eWxlPXt7aGVpZ2h0OiBMaW5lTGFiZWwuaGVpZ2h0fX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpbmVEYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzUnVsZXIgPSBrZXkgJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldlJ1bGVyID0gKGtleSArIDEpICUgdGhpcy5wcm9wcy5ydWxlckludGVydmFsID09PSAwO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtkYXRhLmlkICsgXCJAXCIgKyBrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLmxpbmVXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzUnVsZXI9e2hhc1J1bGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2UnVsZXI9e3ByZXZSdWxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2RhdGEubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lPXt0aGlzLnByb3BzLnRpbWVsaW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cImxpbmVzV3JhcHBlclwiIGNsYXNzTmFtZT1cInRsTGluZXNXcmFwcGVyIHNjcm9sbFdyYXBwZXJcIiBzdHlsZT17e2hlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgLSBMaW5lTGFiZWwuaGVpZ2h0fX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IHRoaXMucHJvcHMubGluZUhlaWdodCwgb3ZlcmZsb3dZOiBcImhpZGRlblwiLCBwb3NpdGlvbjpcInJlbGF0aXZlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5saW5lRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzUnVsZXIgPSBrZXkgJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2UnVsZXIgPSAoa2V5ICsgMSkgJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtcImxpbmVAXCIgKyBkYXRhLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1J1bGVyPXtoYXNSdWxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2RhdGEuaWQgKyBcIkBcIiArIGtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy5saW5lV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0PXt0aGlzLnByb3BzLm1pbkhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5wcm9wcy50aW1lU3Bhbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVuPXtrZXkgJSAyID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lPXt0aGlzLnByb3BzLnRpbWVsaW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcnM9e2RhdGEudmFyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZT17dGhpc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5ldmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17XCJldmVudEBcIiArIGV2ZW50LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZXZlbnQua2V5fHxldmVudC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZXZlbnQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2V2ZW50LmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTcGFuPXtldmVudC50aW1lU3Bhbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtldmVudC5kaXNwbGF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVJZD17ZXZlbnQubGluZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lPXt0aGlzLnByb3BzLnRpbWVsaW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmxpbmVXaWR0aCAtIDIgLSAoTGluZS5zaWRlUGFkZGluZyAqIDIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcnM9e2V2ZW50LnZhcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ9e2V2ZW50LmZsb2F0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEV2ZW50UHJldmlldyAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gRnJhbWUucHJvcFR5cGVzID0ge1xuLy8gICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4vLyAgIGxpbmVEYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuLy8gICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4vLyAgICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuLy8gICB9KSkuaXNSZXF1aXJlZCxcbi8vICAgbGluZVdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbi8vICAgdGltZWxpbmU6IFJlYWN0LlByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbi8vICAgcnVsZXJJbnRlcnZhbDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuLy8gfVxuXG5GcmFtZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGV2ZW50czogW10sXG4gIGNoaWxkV2lkdGg6IDBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdEcm9wQ29udGV4dChEbmRCYWNrZW5kKHsgZW5hYmxlTW91c2VFdmVudHM6IHRydWUgfSkpKERyb3BUYXJnZXQoXCJFdmVudFwiLCB0YXJnZXQsIGNvbGxlY3QpKEZyYW1lKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GcmFtZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi4vY2xhc3Nlcy9UaW1lJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWludXRlczogW11cbiAgICB9XG5cbiAgICBjb25zdCBtaW5TdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5taW5IZWlnaHQgKyAncHgnXG4gICAgfVxuICAgIFRpbWUuZWFjaE1pbigoa2V5LCBtaW4pID0+IHtcbiAgICAgIHRoaXMuc3RhdGUubWludXRlcy5wdXNoKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXttaW59XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0bE1pblZpZXcnLCAndGwnICsgKG1pbiArIDE1KSl9XG4gICAgICAgICAgc3R5bGU9e21pblN0eWxlfVxuICAgICAgICA+Jm5ic3A7PC9kaXY+XG4gICAgICApO1xuICAgIH0sIDE1KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxIb3VyVmlld1wiPnt0aGlzLnN0YXRlLm1pbnV0ZXN9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBIb3VyLnByb3BUeXBlcyA9IHtcbi8vICAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIHRpbWU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWUpLmlzUmVxdWlyZWRcbi8vIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvdXIuanN4IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0RyYWdEcm9wTWFuYWdlciA9IHJlcXVpcmUoJy4vRHJhZ0Ryb3BNYW5hZ2VyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRHJhZ0Ryb3BNYW5hZ2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJhZ0Ryb3BNYW5hZ2VyKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9EcmFnU291cmNlID0gcmVxdWlyZSgnLi9EcmFnU291cmNlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRHJhZ1NvdXJjZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RyYWdTb3VyY2UpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0Ryb3BUYXJnZXQgPSByZXF1aXJlKCcuL0Ryb3BUYXJnZXQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdEcm9wVGFyZ2V0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcFRhcmdldCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfY3JlYXRlVGVzdEJhY2tlbmQgPSByZXF1aXJlKCcuL2JhY2tlbmRzL2NyZWF0ZVRlc3RCYWNrZW5kJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlVGVzdEJhY2tlbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUZXN0QmFja2VuZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY3JlYXRlU3RvcmUgPSByZXF1aXJlKCdyZWR1eC9saWIvY3JlYXRlU3RvcmUnKTtcblxudmFyIF9jcmVhdGVTdG9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTdG9yZSk7XG5cbnZhciBfcmVkdWNlcnMgPSByZXF1aXJlKCcuL3JlZHVjZXJzJyk7XG5cbnZhciBfcmVkdWNlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVkdWNlcnMpO1xuXG52YXIgX2RyYWdEcm9wID0gcmVxdWlyZSgnLi9hY3Rpb25zL2RyYWdEcm9wJyk7XG5cbnZhciBkcmFnRHJvcEFjdGlvbnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZHJhZ0Ryb3ApO1xuXG52YXIgX0RyYWdEcm9wTW9uaXRvciA9IHJlcXVpcmUoJy4vRHJhZ0Ryb3BNb25pdG9yJyk7XG5cbnZhciBfRHJhZ0Ryb3BNb25pdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RyYWdEcm9wTW9uaXRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEcmFnRHJvcE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERyYWdEcm9wTWFuYWdlcihjcmVhdGVCYWNrZW5kKSB7XG4gICAgdmFyIGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdEcm9wTWFuYWdlcik7XG5cbiAgICB2YXIgc3RvcmUgPSAoMCwgX2NyZWF0ZVN0b3JlMi5kZWZhdWx0KShfcmVkdWNlcnMyLmRlZmF1bHQpO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMubW9uaXRvciA9IG5ldyBfRHJhZ0Ryb3BNb25pdG9yMi5kZWZhdWx0KHN0b3JlKTtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gdGhpcy5tb25pdG9yLnJlZ2lzdHJ5O1xuICAgIHRoaXMuYmFja2VuZCA9IGNyZWF0ZUJhY2tlbmQodGhpcyk7XG5cbiAgICBzdG9yZS5zdWJzY3JpYmUodGhpcy5oYW5kbGVSZWZDb3VudENoYW5nZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcmFnRHJvcE1hbmFnZXIsIFt7XG4gICAga2V5OiAnaGFuZGxlUmVmQ291bnRDaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVSZWZDb3VudENoYW5nZSgpIHtcbiAgICAgIHZhciBzaG91bGRTZXRVcCA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5yZWZDb3VudCA+IDA7XG4gICAgICBpZiAoc2hvdWxkU2V0VXAgJiYgIXRoaXMuaXNTZXRVcCkge1xuICAgICAgICB0aGlzLmJhY2tlbmQuc2V0dXAoKTtcbiAgICAgICAgdGhpcy5pc1NldFVwID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoIXNob3VsZFNldFVwICYmIHRoaXMuaXNTZXRVcCkge1xuICAgICAgICB0aGlzLmJhY2tlbmQudGVhcmRvd24oKTtcbiAgICAgICAgdGhpcy5pc1NldFVwID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29udGV4dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE1vbml0b3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNb25pdG9yKCkge1xuICAgICAgcmV0dXJuIHRoaXMubW9uaXRvcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRCYWNrZW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QmFja2VuZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmJhY2tlbmQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0UmVnaXN0cnknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZWdpc3RyeSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEFjdGlvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBY3Rpb25zKCkge1xuICAgICAgdmFyIG1hbmFnZXIgPSB0aGlzO1xuICAgICAgdmFyIGRpc3BhdGNoID0gdGhpcy5zdG9yZS5kaXNwYXRjaDtcblxuXG4gICAgICBmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGFjdGlvbiA9IGFjdGlvbkNyZWF0b3IuYXBwbHkobWFuYWdlciwgYXJncyk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRyYWdEcm9wQWN0aW9ucykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBkcmFnRHJvcEFjdGlvbnNba2V5XSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYm91bmRBY3Rpb25zLCBrZXkpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IGRyYWdEcm9wQWN0aW9uc1trZXldO1xuICAgICAgICBib3VuZEFjdGlvbnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgcmV0dXJuIGJvdW5kQWN0aW9ucztcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJhZ0Ryb3BNYW5hZ2VyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEcmFnRHJvcE1hbmFnZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL0RyYWdEcm9wTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5BY3Rpb25UeXBlcyA9IHVuZGVmaW5lZDtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVN0b3JlO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQbGFpbk9iamVjdCk7XG5cbnZhciBfc3ltYm9sT2JzZXJ2YWJsZSA9IHJlcXVpcmUoJ3N5bWJvbC1vYnNlcnZhYmxlJyk7XG5cbnZhciBfc3ltYm9sT2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2xPYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xudmFyIEFjdGlvblR5cGVzID0gZXhwb3J0cy5BY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogJ0BAcmVkdXgvSU5JVCdcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gICAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICAgKlxuICAgKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gICAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAgICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gICAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAgICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAgICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICAgKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICAgKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gICAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gICAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAgICovXG59O2Z1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCEoMCwgX2lzUGxhaW5PYmplY3QyWydkZWZhdWx0J10pKGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmW19zeW1ib2xPYnNlcnZhYmxlMlsnZGVmYXVsdCddXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH1cblxuICAvLyBXaGVuIGEgc3RvcmUgaXMgY3JlYXRlZCwgYW4gXCJJTklUXCIgYWN0aW9uIGlzIGRpc3BhdGNoZWQgc28gdGhhdCBldmVyeVxuICAvLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cbiAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuXG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMltfc3ltYm9sT2JzZXJ2YWJsZTJbJ2RlZmF1bHQnXV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvY3JlYXRlU3RvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BvbnlmaWxsID0gcmVxdWlyZSgnLi9wb255ZmlsbCcpO1xuXG52YXIgX3BvbnlmaWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvbnlmaWxsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgcm9vdDsgLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge1xuICByb290ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cblxudmFyIHJlc3VsdCA9ICgwLCBfcG9ueWZpbGwyWydkZWZhdWx0J10pKHJvb3QpO1xuZXhwb3J0c1snZGVmYXVsdCddID0gcmVzdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGw7XG5mdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgX1N5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgX1N5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChfU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0X1N5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVkdWNlO1xuXG52YXIgX2RyYWdPZmZzZXQgPSByZXF1aXJlKCcuL2RyYWdPZmZzZXQnKTtcblxudmFyIF9kcmFnT2Zmc2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RyYWdPZmZzZXQpO1xuXG52YXIgX2RyYWdPcGVyYXRpb24gPSByZXF1aXJlKCcuL2RyYWdPcGVyYXRpb24nKTtcblxudmFyIF9kcmFnT3BlcmF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RyYWdPcGVyYXRpb24pO1xuXG52YXIgX3JlZkNvdW50ID0gcmVxdWlyZSgnLi9yZWZDb3VudCcpO1xuXG52YXIgX3JlZkNvdW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZkNvdW50KTtcblxudmFyIF9kaXJ0eUhhbmRsZXJJZHMgPSByZXF1aXJlKCcuL2RpcnR5SGFuZGxlcklkcycpO1xuXG52YXIgX2RpcnR5SGFuZGxlcklkczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaXJ0eUhhbmRsZXJJZHMpO1xuXG52YXIgX3N0YXRlSWQgPSByZXF1aXJlKCcuL3N0YXRlSWQnKTtcblxudmFyIF9zdGF0ZUlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlSWQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiByZWR1Y2UoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgcmV0dXJuIHtcbiAgICBkaXJ0eUhhbmRsZXJJZHM6ICgwLCBfZGlydHlIYW5kbGVySWRzMi5kZWZhdWx0KShzdGF0ZS5kaXJ0eUhhbmRsZXJJZHMsIGFjdGlvbiwgc3RhdGUuZHJhZ09wZXJhdGlvbiksXG4gICAgZHJhZ09mZnNldDogKDAsIF9kcmFnT2Zmc2V0Mi5kZWZhdWx0KShzdGF0ZS5kcmFnT2Zmc2V0LCBhY3Rpb24pLFxuICAgIHJlZkNvdW50OiAoMCwgX3JlZkNvdW50Mi5kZWZhdWx0KShzdGF0ZS5yZWZDb3VudCwgYWN0aW9uKSxcbiAgICBkcmFnT3BlcmF0aW9uOiAoMCwgX2RyYWdPcGVyYXRpb24yLmRlZmF1bHQpKHN0YXRlLmRyYWdPcGVyYXRpb24sIGFjdGlvbiksXG4gICAgc3RhdGVJZDogKDAsIF9zdGF0ZUlkMi5kZWZhdWx0KShzdGF0ZS5zdGF0ZUlkKVxuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBkcmFnT3BlcmF0aW9uO1xuXG52YXIgX3dpdGhvdXQgPSByZXF1aXJlKCdsb2Rhc2gvd2l0aG91dCcpO1xuXG52YXIgX3dpdGhvdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aG91dCk7XG5cbnZhciBfZHJhZ0Ryb3AgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2RyYWdEcm9wJyk7XG5cbnZhciBfcmVnaXN0cnkgPSByZXF1aXJlKCcuLi9hY3Rpb25zL3JlZ2lzdHJ5Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpbml0aWFsU3RhdGUgPSB7XG4gIGl0ZW1UeXBlOiBudWxsLFxuICBpdGVtOiBudWxsLFxuICBzb3VyY2VJZDogbnVsbCxcbiAgdGFyZ2V0SWRzOiBbXSxcbiAgZHJvcFJlc3VsdDogbnVsbCxcbiAgZGlkRHJvcDogZmFsc2UsXG4gIGlzU291cmNlUHVibGljOiBudWxsXG59O1xuXG5mdW5jdGlvbiBkcmFnT3BlcmF0aW9uKCkge1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGluaXRpYWxTdGF0ZTtcbiAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBfZHJhZ0Ryb3AuQkVHSU5fRFJBRzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbVR5cGU6IGFjdGlvbi5pdGVtVHlwZSxcbiAgICAgICAgaXRlbTogYWN0aW9uLml0ZW0sXG4gICAgICAgIHNvdXJjZUlkOiBhY3Rpb24uc291cmNlSWQsXG4gICAgICAgIGlzU291cmNlUHVibGljOiBhY3Rpb24uaXNTb3VyY2VQdWJsaWMsXG4gICAgICAgIGRyb3BSZXN1bHQ6IG51bGwsXG4gICAgICAgIGRpZERyb3A6IGZhbHNlXG4gICAgICB9KTtcbiAgICBjYXNlIF9kcmFnRHJvcC5QVUJMSVNIX0RSQUdfU09VUkNFOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1NvdXJjZVB1YmxpYzogdHJ1ZVxuICAgICAgfSk7XG4gICAgY2FzZSBfZHJhZ0Ryb3AuSE9WRVI6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHRhcmdldElkczogYWN0aW9uLnRhcmdldElkc1xuICAgICAgfSk7XG4gICAgY2FzZSBfcmVnaXN0cnkuUkVNT1ZFX1RBUkdFVDpcbiAgICAgIGlmIChzdGF0ZS50YXJnZXRJZHMuaW5kZXhPZihhY3Rpb24udGFyZ2V0SWQpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHRhcmdldElkczogKDAsIF93aXRob3V0Mi5kZWZhdWx0KShzdGF0ZS50YXJnZXRJZHMsIGFjdGlvbi50YXJnZXRJZClcbiAgICAgIH0pO1xuICAgIGNhc2UgX2RyYWdEcm9wLkRST1A6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGRyb3BSZXN1bHQ6IGFjdGlvbi5kcm9wUmVzdWx0LFxuICAgICAgICBkaWREcm9wOiB0cnVlLFxuICAgICAgICB0YXJnZXRJZHM6IFtdXG4gICAgICB9KTtcbiAgICBjYXNlIF9kcmFnRHJvcC5FTkRfRFJBRzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbVR5cGU6IG51bGwsXG4gICAgICAgIGl0ZW06IG51bGwsXG4gICAgICAgIHNvdXJjZUlkOiBudWxsLFxuICAgICAgICBkcm9wUmVzdWx0OiBudWxsLFxuICAgICAgICBkaWREcm9wOiBmYWxzZSxcbiAgICAgICAgaXNTb3VyY2VQdWJsaWM6IG51bGwsXG4gICAgICAgIHRhcmdldElkczogW11cbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvZHJhZ09wZXJhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi9fYmFzZURpZmZlcmVuY2UnKSxcbiAgICBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBleGNsdWRpbmcgYWxsIGdpdmVuIHZhbHVlcyB1c2luZ1xuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiAqKk5vdGU6KiogVW5saWtlIGBfLnB1bGxgLCB0aGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0gey4uLip9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gZXhjbHVkZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGZpbHRlcmVkIHZhbHVlcy5cbiAqIEBzZWUgXy5kaWZmZXJlbmNlLCBfLnhvclxuICogQGV4YW1wbGVcbiAqXG4gKiBfLndpdGhvdXQoWzIsIDEsIDIsIDNdLCAxLCAyKTtcbiAqIC8vID0+IFszXVxuICovXG52YXIgd2l0aG91dCA9IGJhc2VSZXN0KGZ1bmN0aW9uKGFycmF5LCB2YWx1ZXMpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KGFycmF5KVxuICAgID8gYmFzZURpZmZlcmVuY2UoYXJyYXksIHZhbHVlcylcbiAgICA6IFtdO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2l0aG91dDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC93aXRob3V0LmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fSGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXAuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJc05hTiA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hTicpLFxuICAgIHN0cmljdEluZGV4T2YgPSByZXF1aXJlKCcuL19zdHJpY3RJbmRleE9mJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcbiAgICA/IHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpXG4gICAgOiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXNOYU4sIGZyb21JbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmRJbmRleDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmFOO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zIG9mIHZhbHVlcywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcHBseSA9IHJlcXVpcmUoJy4vX2FwcGx5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VSZXN0YCB3aGljaCB0cmFuc2Zvcm1zIHRoZSByZXN0IGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSByZXN0IGFycmF5IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyUmVzdChmdW5jLCBzdGFydCwgdHJhbnNmb3JtKSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IHRyYW5zZm9ybShhcnJheSk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlclJlc3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJSZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcHBseS5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlU2V0VG9TdHJpbmcnKSxcbiAgICBzaG9ydE91dCA9IHJlcXVpcmUoJy4vX3Nob3J0T3V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvbnN0YW50ID0gcmVxdWlyZSgnLi9jb25zdGFudCcpLFxuICAgIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc2V0VG9TdHJpbmdgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaG90IGxvb3Agc2hvcnRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgYmFzZVNldFRvU3RyaW5nID0gIWRlZmluZVByb3BlcnR5ID8gaWRlbnRpdHkgOiBmdW5jdGlvbihmdW5jLCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmMsICd0b1N0cmluZycsIHtcbiAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAnZW51bWVyYWJsZSc6IGZhbHNlLFxuICAgICd2YWx1ZSc6IGNvbnN0YW50KHN0cmluZyksXG4gICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNldFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmV0dXJuIGZyb20gdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbnN0YW50IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IF8udGltZXMoMiwgXy5jb25zdGFudCh7ICdhJzogMSB9KSk7XG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0cyk7XG4gKiAvLyA9PiBbeyAnYSc6IDEgfSwgeyAnYSc6IDEgfV1cbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzWzBdID09PSBvYmplY3RzWzFdKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jb25zdGFudC5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3J0T3V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zaG9ydE91dC5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVmQ291bnQ7XG5cbnZhciBfcmVnaXN0cnkgPSByZXF1aXJlKCcuLi9hY3Rpb25zL3JlZ2lzdHJ5Jyk7XG5cbmZ1bmN0aW9uIHJlZkNvdW50KCkge1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgX3JlZ2lzdHJ5LkFERF9TT1VSQ0U6XG4gICAgY2FzZSBfcmVnaXN0cnkuQUREX1RBUkdFVDpcbiAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4gICAgY2FzZSBfcmVnaXN0cnkuUkVNT1ZFX1NPVVJDRTpcbiAgICBjYXNlIF9yZWdpc3RyeS5SRU1PVkVfVEFSR0VUOlxuICAgICAgcmV0dXJuIHN0YXRlIC0gMTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL3JlZHVjZXJzL3JlZkNvdW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgYmFzZVhvciA9IHJlcXVpcmUoJy4vX2Jhc2VYb3InKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHVuaXF1ZSB2YWx1ZXMgdGhhdCBpcyB0aGVcbiAqIFtzeW1tZXRyaWMgZGlmZmVyZW5jZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3ltbWV0cmljX2RpZmZlcmVuY2UpXG4gKiBvZiB0aGUgZ2l2ZW4gYXJyYXlzLiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlclxuICogdGhleSBvY2N1ciBpbiB0aGUgYXJyYXlzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzLlxuICogQHNlZSBfLmRpZmZlcmVuY2UsIF8ud2l0aG91dFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnhvcihbMiwgMV0sIFsyLCAzXSk7XG4gKiAvLyA9PiBbMSwgM11cbiAqL1xudmFyIHhvciA9IGJhc2VSZXN0KGZ1bmN0aW9uKGFycmF5cykge1xuICByZXR1cm4gYmFzZVhvcihhcnJheUZpbHRlcihhcnJheXMsIGlzQXJyYXlMaWtlT2JqZWN0KSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB4b3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gveG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlRGlmZmVyZW5jZSA9IHJlcXVpcmUoJy4vX2Jhc2VEaWZmZXJlbmNlJyksXG4gICAgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGxpa2UgYF8ueG9yYCwgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcywgdGhhdCBhY2NlcHRzIGFuIGFycmF5IG9mIGFycmF5cyB0byBpbnNwZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheXMgVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBiYXNlWG9yKGFycmF5cywgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5cy5sZW5ndGg7XG4gIGlmIChsZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGxlbmd0aCA/IGJhc2VVbmlxKGFycmF5c1swXSkgOiBbXTtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgYXJyYXkgPSBhcnJheXNbaW5kZXhdLFxuICAgICAgICBvdGhJbmRleCA9IC0xO1xuXG4gICAgd2hpbGUgKCsrb3RoSW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmIChvdGhJbmRleCAhPSBpbmRleCkge1xuICAgICAgICByZXN1bHRbaW5kZXhdID0gYmFzZURpZmZlcmVuY2UocmVzdWx0W2luZGV4XSB8fCBhcnJheSwgYXJyYXlzW290aEluZGV4XSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYmFzZVVuaXEoYmFzZUZsYXR0ZW4ocmVzdWx0LCAxKSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VYb3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VYb3IuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNGbGF0dGVuYWJsZSA9IHJlcXVpcmUoJy4vX2lzRmxhdHRlbmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mbGF0dGVuYCB3aXRoIHN1cHBvcnQgZm9yIHJlc3RyaWN0aW5nIGZsYXR0ZW5pbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBmbGF0dGVuLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlcHRoIFRoZSBtYXhpbXVtIHJlY3Vyc2lvbiBkZXB0aC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZWRpY2F0ZT1pc0ZsYXR0ZW5hYmxlXSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNTdHJpY3RdIFJlc3RyaWN0IHRvIHZhbHVlcyB0aGF0IHBhc3MgYHByZWRpY2F0ZWAgY2hlY2tzLlxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdD1bXV0gVGhlIGluaXRpYWwgcmVzdWx0IHZhbHVlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlRmxhdHRlbihhcnJheSwgZGVwdGgsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBwcmVkaWNhdGUgfHwgKHByZWRpY2F0ZSA9IGlzRmxhdHRlbmFibGUpO1xuICByZXN1bHQgfHwgKHJlc3VsdCA9IFtdKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAoZGVwdGggPiAwICYmIHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIGlmIChkZXB0aCA+IDEpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmxhdHRlbiBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgICAgYmFzZUZsYXR0ZW4odmFsdWUsIGRlcHRoIC0gMSwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5UHVzaChyZXN1bHQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc1N0cmljdCkge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZsYXR0ZW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGbGF0dGVuLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ByZWFkYWJsZVN5bWJvbCA9IFN5bWJvbCA/IFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBmbGF0dGVuYWJsZSBgYXJndW1lbnRzYCBvYmplY3Qgb3IgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZmxhdHRlbmFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNGbGF0dGVuYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpIHx8XG4gICAgISEoc3ByZWFkYWJsZVN5bWJvbCAmJiB2YWx1ZSAmJiB2YWx1ZVtzcHJlYWRhYmxlU3ltYm9sXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGbGF0dGVuYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNGbGF0dGVuYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKSxcbiAgICBjcmVhdGVTZXQgPSByZXF1aXJlKCcuL19jcmVhdGVTZXQnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuaXFCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHNlZW4gPSByZXN1bHQ7XG5cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gIH1cbiAgZWxzZSBpZiAobGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICB2YXIgc2V0ID0gaXRlcmF0ZWUgPyBudWxsIDogY3JlYXRlU2V0KGFycmF5KTtcbiAgICBpZiAoc2V0KSB7XG4gICAgICByZXR1cm4gc2V0VG9BcnJheShzZXQpO1xuICAgIH1cbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgc2VlbiA9IG5ldyBTZXRDYWNoZTtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWVuID0gaXRlcmF0ZWUgPyBbXSA6IHJlc3VsdDtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciBzZWVuSW5kZXggPSBzZWVuLmxlbmd0aDtcbiAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHNlZW4sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgaWYgKHNlZW4gIT09IHJlc3VsdCkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmlxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5pcS5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBub29wID0gcmVxdWlyZSgnLi9ub29wJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9iamVjdCBvZiBgdmFsdWVzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYWRkIHRvIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgc2V0LlxuICovXG52YXIgY3JlYXRlU2V0ID0gIShTZXQgJiYgKDEgLyBzZXRUb0FycmF5KG5ldyBTZXQoWywtMF0pKVsxXSkgPT0gSU5GSU5JVFkpID8gbm9vcCA6IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFNldCh2YWx1ZXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoJy4vX2Jhc2VJbnRlcnNlY3Rpb24nKSxcbiAgICBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgY2FzdEFycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vX2Nhc3RBcnJheUxpa2VPYmplY3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHVuaXF1ZSB2YWx1ZXMgdGhhdCBhcmUgaW5jbHVkZWQgaW4gYWxsIGdpdmVuIGFycmF5c1xuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy4gVGhlIG9yZGVyIGFuZCByZWZlcmVuY2VzIG9mIHJlc3VsdCB2YWx1ZXMgYXJlXG4gKiBkZXRlcm1pbmVkIGJ5IHRoZSBmaXJzdCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7Li4uQXJyYXl9IFthcnJheXNdIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGludGVyc2VjdGluZyB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaW50ZXJzZWN0aW9uKFsyLCAxXSwgWzIsIDNdKTtcbiAqIC8vID0+IFsyXVxuICovXG52YXIgaW50ZXJzZWN0aW9uID0gYmFzZVJlc3QoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHZhciBtYXBwZWQgPSBhcnJheU1hcChhcnJheXMsIGNhc3RBcnJheUxpa2VPYmplY3QpO1xuICByZXR1cm4gKG1hcHBlZC5sZW5ndGggJiYgbWFwcGVkWzBdID09PSBhcnJheXNbMF0pXG4gICAgPyBiYXNlSW50ZXJzZWN0aW9uKG1hcHBlZClcbiAgICA6IFtdO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gaW50ZXJzZWN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2ludGVyc2VjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIG1ldGhvZHMgbGlrZSBgXy5pbnRlcnNlY3Rpb25gLCB3aXRob3V0IHN1cHBvcnRcbiAqIGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLCB0aGF0IGFjY2VwdHMgYW4gYXJyYXkgb2YgYXJyYXlzIHRvIGluc3BlY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5cyBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBzaGFyZWQgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBiYXNlSW50ZXJzZWN0aW9uKGFycmF5cywgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluY2x1ZGVzID0gY29tcGFyYXRvciA/IGFycmF5SW5jbHVkZXNXaXRoIDogYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5c1swXS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBhcnJheXMubGVuZ3RoLFxuICAgICAgb3RoSW5kZXggPSBvdGhMZW5ndGgsXG4gICAgICBjYWNoZXMgPSBBcnJheShvdGhMZW5ndGgpLFxuICAgICAgbWF4TGVuZ3RoID0gSW5maW5pdHksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAob3RoSW5kZXgtLSkge1xuICAgIHZhciBhcnJheSA9IGFycmF5c1tvdGhJbmRleF07XG4gICAgaWYgKG90aEluZGV4ICYmIGl0ZXJhdGVlKSB7XG4gICAgICBhcnJheSA9IGFycmF5TWFwKGFycmF5LCBiYXNlVW5hcnkoaXRlcmF0ZWUpKTtcbiAgICB9XG4gICAgbWF4TGVuZ3RoID0gbmF0aXZlTWluKGFycmF5Lmxlbmd0aCwgbWF4TGVuZ3RoKTtcbiAgICBjYWNoZXNbb3RoSW5kZXhdID0gIWNvbXBhcmF0b3IgJiYgKGl0ZXJhdGVlIHx8IChsZW5ndGggPj0gMTIwICYmIGFycmF5Lmxlbmd0aCA+PSAxMjApKVxuICAgICAgPyBuZXcgU2V0Q2FjaGUob3RoSW5kZXggJiYgYXJyYXkpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxuICBhcnJheSA9IGFycmF5c1swXTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHNlZW4gPSBjYWNoZXNbMF07XG5cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoICYmIHJlc3VsdC5sZW5ndGggPCBtYXhMZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmICghKHNlZW5cbiAgICAgICAgICA/IGNhY2hlSGFzKHNlZW4sIGNvbXB1dGVkKVxuICAgICAgICAgIDogaW5jbHVkZXMocmVzdWx0LCBjb21wdXRlZCwgY29tcGFyYXRvcilcbiAgICAgICAgKSkge1xuICAgICAgb3RoSW5kZXggPSBvdGhMZW5ndGg7XG4gICAgICB3aGlsZSAoLS1vdGhJbmRleCkge1xuICAgICAgICB2YXIgY2FjaGUgPSBjYWNoZXNbb3RoSW5kZXhdO1xuICAgICAgICBpZiAoIShjYWNoZVxuICAgICAgICAgICAgICA/IGNhY2hlSGFzKGNhY2hlLCBjb21wdXRlZClcbiAgICAgICAgICAgICAgOiBpbmNsdWRlcyhhcnJheXNbb3RoSW5kZXhdLCBjb21wdXRlZCwgY29tcGFyYXRvcikpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlZW4pIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW50ZXJzZWN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW50ZXJzZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYW4gZW1wdHkgYXJyYXkgaWYgaXQncyBub3QgYW4gYXJyYXkgbGlrZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fSBSZXR1cm5zIHRoZSBjYXN0IGFycmF5LWxpa2Ugb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjYXN0QXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RBcnJheUxpa2VPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHN0YXRlSWQ7XG5mdW5jdGlvbiBzdGF0ZUlkKCkge1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG5cbiAgcmV0dXJuIHN0YXRlICsgMTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvc3RhdGVJZC5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKTtcblxudmFyIF9pc0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQXJyYXkpO1xuXG52YXIgX21hdGNoZXNUeXBlID0gcmVxdWlyZSgnLi91dGlscy9tYXRjaGVzVHlwZScpO1xuXG52YXIgX21hdGNoZXNUeXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdGNoZXNUeXBlKTtcblxudmFyIF9IYW5kbGVyUmVnaXN0cnkgPSByZXF1aXJlKCcuL0hhbmRsZXJSZWdpc3RyeScpO1xuXG52YXIgX0hhbmRsZXJSZWdpc3RyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IYW5kbGVyUmVnaXN0cnkpO1xuXG52YXIgX2RyYWdPZmZzZXQgPSByZXF1aXJlKCcuL3JlZHVjZXJzL2RyYWdPZmZzZXQnKTtcblxudmFyIF9kaXJ0eUhhbmRsZXJJZHMgPSByZXF1aXJlKCcuL3JlZHVjZXJzL2RpcnR5SGFuZGxlcklkcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRHJhZ0Ryb3BNb25pdG9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEcmFnRHJvcE1vbml0b3Ioc3RvcmUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0Ryb3BNb25pdG9yKTtcblxuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gbmV3IF9IYW5kbGVyUmVnaXN0cnkyLmRlZmF1bHQoc3RvcmUpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERyYWdEcm9wTW9uaXRvciwgW3tcbiAgICBrZXk6ICdzdWJzY3JpYmVUb1N0YXRlQ2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlVG9TdGF0ZUNoYW5nZShsaXN0ZW5lcikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIGhhbmRsZXJJZHMgPSBvcHRpb25zLmhhbmRsZXJJZHM7XG5cbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicsICdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIGhhbmRsZXJJZHMgPT09ICd1bmRlZmluZWQnIHx8ICgwLCBfaXNBcnJheTIuZGVmYXVsdCkoaGFuZGxlcklkcyksICdoYW5kbGVySWRzLCB3aGVuIHNwZWNpZmllZCwgbXVzdCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzLicpO1xuXG4gICAgICB2YXIgcHJldlN0YXRlSWQgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCkuc3RhdGVJZDtcbiAgICAgIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHZhciBjdXJyZW50U3RhdGVJZCA9IHN0YXRlLnN0YXRlSWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGNhblNraXBMaXN0ZW5lciA9IGN1cnJlbnRTdGF0ZUlkID09PSBwcmV2U3RhdGVJZCB8fCBjdXJyZW50U3RhdGVJZCA9PT0gcHJldlN0YXRlSWQgKyAxICYmICEoMCwgX2RpcnR5SGFuZGxlcklkcy5hcmVEaXJ0eSkoc3RhdGUuZGlydHlIYW5kbGVySWRzLCBoYW5kbGVySWRzKTtcblxuICAgICAgICAgIGlmICghY2FuU2tpcExpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBwcmV2U3RhdGVJZCA9IGN1cnJlbnRTdGF0ZUlkO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcy5zdG9yZS5zdWJzY3JpYmUoaGFuZGxlQ2hhbmdlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdWJzY3JpYmVUb09mZnNldENoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZVRvT2Zmc2V0Q2hhbmdlKGxpc3RlbmVyKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJywgJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcblxuICAgICAgdmFyIHByZXZpb3VzU3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldDtcbiAgICAgIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSBfdGhpczIuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0O1xuICAgICAgICBpZiAobmV4dFN0YXRlID09PSBwcmV2aW91c1N0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldmlvdXNTdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB0aGlzLnN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhbkRyYWdTb3VyY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5EcmFnU291cmNlKHNvdXJjZUlkKSB7XG4gICAgICB2YXIgc291cmNlID0gdGhpcy5yZWdpc3RyeS5nZXRTb3VyY2Uoc291cmNlSWQpO1xuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHNvdXJjZSwgJ0V4cGVjdGVkIHRvIGZpbmQgYSB2YWxpZCBzb3VyY2UuJyk7XG5cbiAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzb3VyY2UuY2FuRHJhZyh0aGlzLCBzb3VyY2VJZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FuRHJvcE9uVGFyZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuRHJvcE9uVGFyZ2V0KHRhcmdldElkKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5yZWdpc3RyeS5nZXRUYXJnZXQodGFyZ2V0SWQpO1xuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRhcmdldCwgJ0V4cGVjdGVkIHRvIGZpbmQgYSB2YWxpZCB0YXJnZXQuJyk7XG5cbiAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKCkgfHwgdGhpcy5kaWREcm9wKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFyZ2V0VHlwZSA9IHRoaXMucmVnaXN0cnkuZ2V0VGFyZ2V0VHlwZSh0YXJnZXRJZCk7XG4gICAgICB2YXIgZHJhZ2dlZEl0ZW1UeXBlID0gdGhpcy5nZXRJdGVtVHlwZSgpO1xuICAgICAgcmV0dXJuICgwLCBfbWF0Y2hlc1R5cGUyLmRlZmF1bHQpKHRhcmdldFR5cGUsIGRyYWdnZWRJdGVtVHlwZSkgJiYgdGFyZ2V0LmNhbkRyb3AodGhpcywgdGFyZ2V0SWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzRHJhZ2dpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RyYWdnaW5nKCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5nZXRJdGVtVHlwZSgpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0RyYWdnaW5nU291cmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNEcmFnZ2luZ1NvdXJjZShzb3VyY2VJZCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHRoaXMucmVnaXN0cnkuZ2V0U291cmNlKHNvdXJjZUlkLCB0cnVlKTtcbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShzb3VyY2UsICdFeHBlY3RlZCB0byBmaW5kIGEgdmFsaWQgc291cmNlLicpO1xuXG4gICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZygpIHx8ICF0aGlzLmlzU291cmNlUHVibGljKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlVHlwZSA9IHRoaXMucmVnaXN0cnkuZ2V0U291cmNlVHlwZShzb3VyY2VJZCk7XG4gICAgICB2YXIgZHJhZ2dlZEl0ZW1UeXBlID0gdGhpcy5nZXRJdGVtVHlwZSgpO1xuICAgICAgaWYgKHNvdXJjZVR5cGUgIT09IGRyYWdnZWRJdGVtVHlwZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzb3VyY2UuaXNEcmFnZ2luZyh0aGlzLCBzb3VyY2VJZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNPdmVyVGFyZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNPdmVyVGFyZ2V0KHRhcmdldElkKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogeyBzaGFsbG93OiBmYWxzZSB9O1xuICAgICAgdmFyIHNoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG5cbiAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFyZ2V0VHlwZSA9IHRoaXMucmVnaXN0cnkuZ2V0VGFyZ2V0VHlwZSh0YXJnZXRJZCk7XG4gICAgICB2YXIgZHJhZ2dlZEl0ZW1UeXBlID0gdGhpcy5nZXRJdGVtVHlwZSgpO1xuICAgICAgaWYgKCEoMCwgX21hdGNoZXNUeXBlMi5kZWZhdWx0KSh0YXJnZXRUeXBlLCBkcmFnZ2VkSXRlbVR5cGUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhcmdldElkcyA9IHRoaXMuZ2V0VGFyZ2V0SWRzKCk7XG4gICAgICBpZiAoIXRhcmdldElkcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5kZXggPSB0YXJnZXRJZHMuaW5kZXhPZih0YXJnZXRJZCk7XG4gICAgICBpZiAoc2hhbGxvdykge1xuICAgICAgICByZXR1cm4gaW5kZXggPT09IHRhcmdldElkcy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ID4gLTE7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SXRlbVR5cGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJdGVtVHlwZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5pdGVtVHlwZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJdGVtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SXRlbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5pdGVtO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNvdXJjZUlkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U291cmNlSWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24uc291cmNlSWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VGFyZ2V0SWRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFyZ2V0SWRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLnRhcmdldElkcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREcm9wUmVzdWx0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RHJvcFJlc3VsdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5kcm9wUmVzdWx0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RpZERyb3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaWREcm9wKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLmRpZERyb3A7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNTb3VyY2VQdWJsaWMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1NvdXJjZVB1YmxpYygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5pc1NvdXJjZVB1YmxpYztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJbml0aWFsQ2xpZW50T2Zmc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbENsaWVudE9mZnNldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldC5pbml0aWFsQ2xpZW50T2Zmc2V0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0LmluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2xpZW50T2Zmc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2xpZW50T2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0LmNsaWVudE9mZnNldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTb3VyY2VDbGllbnRPZmZzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb3VyY2VDbGllbnRPZmZzZXQoKSB7XG4gICAgICByZXR1cm4gKDAsIF9kcmFnT2Zmc2V0LmdldFNvdXJjZUNsaWVudE9mZnNldCkodGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpIHtcbiAgICAgIHJldHVybiAoMCwgX2RyYWdPZmZzZXQuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KSh0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyYWdEcm9wTW9uaXRvcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRHJhZ0Ryb3BNb25pdG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9EcmFnRHJvcE1vbml0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKTtcblxudmFyIF9pc0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQXJyYXkpO1xuXG52YXIgX2FzYXAgPSByZXF1aXJlKCdhc2FwJyk7XG5cbnZhciBfYXNhcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc2FwKTtcblxudmFyIF9yZWdpc3RyeSA9IHJlcXVpcmUoJy4vYWN0aW9ucy9yZWdpc3RyeScpO1xuXG52YXIgX2dldE5leHRVbmlxdWVJZCA9IHJlcXVpcmUoJy4vdXRpbHMvZ2V0TmV4dFVuaXF1ZUlkJyk7XG5cbnZhciBfZ2V0TmV4dFVuaXF1ZUlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE5leHRVbmlxdWVJZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBIYW5kbGVyUm9sZXMgPSB7XG4gIFNPVVJDRTogJ1NPVVJDRScsXG4gIFRBUkdFVDogJ1RBUkdFVCdcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU291cmNlQ29udHJhY3Qoc291cmNlKSB7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0eXBlb2Ygc291cmNlLmNhbkRyYWcgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBjYW5EcmFnIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0eXBlb2Ygc291cmNlLmJlZ2luRHJhZyA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGJlZ2luRHJhZyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIHNvdXJjZS5lbmREcmFnID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgZW5kRHJhZyB0byBiZSBhIGZ1bmN0aW9uLicpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRhcmdldENvbnRyYWN0KHRhcmdldCkge1xuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIHRhcmdldC5jYW5Ecm9wID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgY2FuRHJvcCB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIHRhcmdldC5ob3ZlciA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGhvdmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0eXBlb2YgdGFyZ2V0LmRyb3AgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBiZWdpbkRyYWcgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUeXBlKHR5cGUsIGFsbG93QXJyYXkpIHtcbiAgaWYgKGFsbG93QXJyYXkgJiYgKDAsIF9pc0FycmF5Mi5kZWZhdWx0KSh0eXBlKSkge1xuICAgIHR5cGUuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlVHlwZSh0LCBmYWxzZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCAodHlwZW9mIHR5cGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHR5cGUpKSA9PT0gJ3N5bWJvbCcsIGFsbG93QXJyYXkgPyAnVHlwZSBjYW4gb25seSBiZSBhIHN0cmluZywgYSBzeW1ib2wsIG9yIGFuIGFycmF5IG9mIGVpdGhlci4nIDogJ1R5cGUgY2FuIG9ubHkgYmUgYSBzdHJpbmcgb3IgYSBzeW1ib2wuJyk7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRIYW5kbGVySWQocm9sZSkge1xuICB2YXIgaWQgPSAoMCwgX2dldE5leHRVbmlxdWVJZDIuZGVmYXVsdCkoKS50b1N0cmluZygpO1xuICBzd2l0Y2ggKHJvbGUpIHtcbiAgICBjYXNlIEhhbmRsZXJSb2xlcy5TT1VSQ0U6XG4gICAgICByZXR1cm4gJ1MnICsgaWQ7XG4gICAgY2FzZSBIYW5kbGVyUm9sZXMuVEFSR0VUOlxuICAgICAgcmV0dXJuICdUJyArIGlkO1xuICAgIGRlZmF1bHQ6XG4gICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICdVbmtub3duIHJvbGU6ICcgKyByb2xlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVJvbGVGcm9tSGFuZGxlcklkKGhhbmRsZXJJZCkge1xuICBzd2l0Y2ggKGhhbmRsZXJJZFswXSkge1xuICAgIGNhc2UgJ1MnOlxuICAgICAgcmV0dXJuIEhhbmRsZXJSb2xlcy5TT1VSQ0U7XG4gICAgY2FzZSAnVCc6XG4gICAgICByZXR1cm4gSGFuZGxlclJvbGVzLlRBUkdFVDtcbiAgICBkZWZhdWx0OlxuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlLCAnQ2Fubm90IHBhcnNlIGhhbmRsZXIgSUQ6ICcgKyBoYW5kbGVySWQpO1xuICB9XG59XG5cbnZhciBIYW5kbGVyUmVnaXN0cnkgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEhhbmRsZXJSZWdpc3RyeShzdG9yZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIYW5kbGVyUmVnaXN0cnkpO1xuXG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuXG4gICAgdGhpcy50eXBlcyA9IHt9O1xuICAgIHRoaXMuaGFuZGxlcnMgPSB7fTtcblxuICAgIHRoaXMucGlubmVkU291cmNlSWQgPSBudWxsO1xuICAgIHRoaXMucGlubmVkU291cmNlID0gbnVsbDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIYW5kbGVyUmVnaXN0cnksIFt7XG4gICAga2V5OiAnYWRkU291cmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkU291cmNlKHR5cGUsIHNvdXJjZSkge1xuICAgICAgdmFsaWRhdGVUeXBlKHR5cGUpO1xuICAgICAgdmFsaWRhdGVTb3VyY2VDb250cmFjdChzb3VyY2UpO1xuXG4gICAgICB2YXIgc291cmNlSWQgPSB0aGlzLmFkZEhhbmRsZXIoSGFuZGxlclJvbGVzLlNPVVJDRSwgdHlwZSwgc291cmNlKTtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goKDAsIF9yZWdpc3RyeS5hZGRTb3VyY2UpKHNvdXJjZUlkKSk7XG4gICAgICByZXR1cm4gc291cmNlSWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkVGFyZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVGFyZ2V0KHR5cGUsIHRhcmdldCkge1xuICAgICAgdmFsaWRhdGVUeXBlKHR5cGUsIHRydWUpO1xuICAgICAgdmFsaWRhdGVUYXJnZXRDb250cmFjdCh0YXJnZXQpO1xuXG4gICAgICB2YXIgdGFyZ2V0SWQgPSB0aGlzLmFkZEhhbmRsZXIoSGFuZGxlclJvbGVzLlRBUkdFVCwgdHlwZSwgdGFyZ2V0KTtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goKDAsIF9yZWdpc3RyeS5hZGRUYXJnZXQpKHRhcmdldElkKSk7XG4gICAgICByZXR1cm4gdGFyZ2V0SWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkSGFuZGxlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEhhbmRsZXIocm9sZSwgdHlwZSwgaGFuZGxlcikge1xuICAgICAgdmFyIGlkID0gZ2V0TmV4dEhhbmRsZXJJZChyb2xlKTtcbiAgICAgIHRoaXMudHlwZXNbaWRdID0gdHlwZTtcbiAgICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gaGFuZGxlcjtcblxuICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbnRhaW5zSGFuZGxlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRhaW5zSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5oYW5kbGVycykuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVyc1trZXldID09PSBoYW5kbGVyO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U291cmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U291cmNlKHNvdXJjZUlkLCBpbmNsdWRlUGlubmVkKSB7XG4gICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodGhpcy5pc1NvdXJjZUlkKHNvdXJjZUlkKSwgJ0V4cGVjdGVkIGEgdmFsaWQgc291cmNlIElELicpO1xuXG4gICAgICB2YXIgaXNQaW5uZWQgPSBpbmNsdWRlUGlubmVkICYmIHNvdXJjZUlkID09PSB0aGlzLnBpbm5lZFNvdXJjZUlkO1xuICAgICAgdmFyIHNvdXJjZSA9IGlzUGlubmVkID8gdGhpcy5waW5uZWRTb3VyY2UgOiB0aGlzLmhhbmRsZXJzW3NvdXJjZUlkXTtcblxuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRUYXJnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0SWQpIHtcbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLmlzVGFyZ2V0SWQodGFyZ2V0SWQpLCAnRXhwZWN0ZWQgYSB2YWxpZCB0YXJnZXQgSUQuJyk7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyc1t0YXJnZXRJZF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U291cmNlVHlwZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvdXJjZVR5cGUoc291cmNlSWQpIHtcbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLmlzU291cmNlSWQoc291cmNlSWQpLCAnRXhwZWN0ZWQgYSB2YWxpZCBzb3VyY2UgSUQuJyk7XG4gICAgICByZXR1cm4gdGhpcy50eXBlc1tzb3VyY2VJZF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VGFyZ2V0VHlwZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhcmdldFR5cGUodGFyZ2V0SWQpIHtcbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLmlzVGFyZ2V0SWQodGFyZ2V0SWQpLCAnRXhwZWN0ZWQgYSB2YWxpZCB0YXJnZXQgSUQuJyk7XG4gICAgICByZXR1cm4gdGhpcy50eXBlc1t0YXJnZXRJZF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNTb3VyY2VJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzU291cmNlSWQoaGFuZGxlcklkKSB7XG4gICAgICB2YXIgcm9sZSA9IHBhcnNlUm9sZUZyb21IYW5kbGVySWQoaGFuZGxlcklkKTtcbiAgICAgIHJldHVybiByb2xlID09PSBIYW5kbGVyUm9sZXMuU09VUkNFO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzVGFyZ2V0SWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RhcmdldElkKGhhbmRsZXJJZCkge1xuICAgICAgdmFyIHJvbGUgPSBwYXJzZVJvbGVGcm9tSGFuZGxlcklkKGhhbmRsZXJJZCk7XG4gICAgICByZXR1cm4gcm9sZSA9PT0gSGFuZGxlclJvbGVzLlRBUkdFVDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVTb3VyY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVTb3VyY2Uoc291cmNlSWQpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodGhpcy5nZXRTb3VyY2Uoc291cmNlSWQpLCAnRXhwZWN0ZWQgYW4gZXhpc3Rpbmcgc291cmNlLicpO1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCgoMCwgX3JlZ2lzdHJ5LnJlbW92ZVNvdXJjZSkoc291cmNlSWQpKTtcblxuICAgICAgKDAsIF9hc2FwMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZSBfdGhpczIuaGFuZGxlcnNbc291cmNlSWRdO1xuICAgICAgICBkZWxldGUgX3RoaXMyLnR5cGVzW3NvdXJjZUlkXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZVRhcmdldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVRhcmdldCh0YXJnZXRJZCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLmdldFRhcmdldCh0YXJnZXRJZCksICdFeHBlY3RlZCBhbiBleGlzdGluZyB0YXJnZXQuJyk7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKCgwLCBfcmVnaXN0cnkucmVtb3ZlVGFyZ2V0KSh0YXJnZXRJZCkpO1xuXG4gICAgICAoMCwgX2FzYXAyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIF90aGlzMy5oYW5kbGVyc1t0YXJnZXRJZF07XG4gICAgICAgIGRlbGV0ZSBfdGhpczMudHlwZXNbdGFyZ2V0SWRdO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncGluU291cmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGluU291cmNlKHNvdXJjZUlkKSB7XG4gICAgICB2YXIgc291cmNlID0gdGhpcy5nZXRTb3VyY2Uoc291cmNlSWQpO1xuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHNvdXJjZSwgJ0V4cGVjdGVkIGFuIGV4aXN0aW5nIHNvdXJjZS4nKTtcblxuICAgICAgdGhpcy5waW5uZWRTb3VyY2VJZCA9IHNvdXJjZUlkO1xuICAgICAgdGhpcy5waW5uZWRTb3VyY2UgPSBzb3VyY2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndW5waW5Tb3VyY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnBpblNvdXJjZSgpIHtcbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLnBpbm5lZFNvdXJjZSwgJ05vIHNvdXJjZSBpcyBwaW5uZWQgYXQgdGhlIHRpbWUuJyk7XG5cbiAgICAgIHRoaXMucGlubmVkU291cmNlSWQgPSBudWxsO1xuICAgICAgdGhpcy5waW5uZWRTb3VyY2UgPSBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIYW5kbGVyUmVnaXN0cnk7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEhhbmRsZXJSZWdpc3RyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvSGFuZGxlclJlZ2lzdHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHJhd0FzYXAgcHJvdmlkZXMgZXZlcnl0aGluZyB3ZSBuZWVkIGV4Y2VwdCBleGNlcHRpb24gbWFuYWdlbWVudC5cbnZhciByYXdBc2FwID0gcmVxdWlyZShcIi4vcmF3XCIpO1xuLy8gUmF3VGFza3MgYXJlIHJlY3ljbGVkIHRvIHJlZHVjZSBHQyBjaHVybi5cbnZhciBmcmVlVGFza3MgPSBbXTtcbi8vIFdlIHF1ZXVlIGVycm9ycyB0byBlbnN1cmUgdGhleSBhcmUgdGhyb3duIGluIHJpZ2h0IG9yZGVyIChGSUZPKS5cbi8vIEFycmF5LWFzLXF1ZXVlIGlzIGdvb2QgZW5vdWdoIGhlcmUsIHNpbmNlIHdlIGFyZSBqdXN0IGRlYWxpbmcgd2l0aCBleGNlcHRpb25zLlxudmFyIHBlbmRpbmdFcnJvcnMgPSBbXTtcbnZhciByZXF1ZXN0RXJyb3JUaHJvdyA9IHJhd0FzYXAubWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKHRocm93Rmlyc3RFcnJvcik7XG5cbmZ1bmN0aW9uIHRocm93Rmlyc3RFcnJvcigpIHtcbiAgICBpZiAocGVuZGluZ0Vycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgcGVuZGluZ0Vycm9ycy5zaGlmdCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxscyBhIHRhc2sgYXMgc29vbiBhcyBwb3NzaWJsZSBhZnRlciByZXR1cm5pbmcsIGluIGl0cyBvd24gZXZlbnQsIHdpdGggcHJpb3JpdHlcbiAqIG92ZXIgb3RoZXIgZXZlbnRzIGxpa2UgYW5pbWF0aW9uLCByZWZsb3csIGFuZCByZXBhaW50LiBBbiBlcnJvciB0aHJvd24gZnJvbSBhblxuICogZXZlbnQgd2lsbCBub3QgaW50ZXJydXB0LCBub3IgZXZlbiBzdWJzdGFudGlhbGx5IHNsb3cgZG93biB0aGUgcHJvY2Vzc2luZyBvZlxuICogb3RoZXIgZXZlbnRzLCBidXQgd2lsbCBiZSByYXRoZXIgcG9zdHBvbmVkIHRvIGEgbG93ZXIgcHJpb3JpdHkgZXZlbnQuXG4gKiBAcGFyYW0ge3tjYWxsfX0gdGFzayBBIGNhbGxhYmxlIG9iamVjdCwgdHlwaWNhbGx5IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogYXJndW1lbnRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFzYXA7XG5mdW5jdGlvbiBhc2FwKHRhc2spIHtcbiAgICB2YXIgcmF3VGFzaztcbiAgICBpZiAoZnJlZVRhc2tzLmxlbmd0aCkge1xuICAgICAgICByYXdUYXNrID0gZnJlZVRhc2tzLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJhd1Rhc2sgPSBuZXcgUmF3VGFzaygpO1xuICAgIH1cbiAgICByYXdUYXNrLnRhc2sgPSB0YXNrO1xuICAgIHJhd0FzYXAocmF3VGFzayk7XG59XG5cbi8vIFdlIHdyYXAgdGFza3Mgd2l0aCByZWN5Y2xhYmxlIHRhc2sgb2JqZWN0cy4gIEEgdGFzayBvYmplY3QgaW1wbGVtZW50c1xuLy8gYGNhbGxgLCBqdXN0IGxpa2UgYSBmdW5jdGlvbi5cbmZ1bmN0aW9uIFJhd1Rhc2soKSB7XG4gICAgdGhpcy50YXNrID0gbnVsbDtcbn1cblxuLy8gVGhlIHNvbGUgcHVycG9zZSBvZiB3cmFwcGluZyB0aGUgdGFzayBpcyB0byBjYXRjaCB0aGUgZXhjZXB0aW9uIGFuZCByZWN5Y2xlXG4vLyB0aGUgdGFzayBvYmplY3QgYWZ0ZXIgaXRzIHNpbmdsZSB1c2UuXG5SYXdUYXNrLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHRoaXMudGFzay5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGFzYXAub25lcnJvcikge1xuICAgICAgICAgICAgLy8gVGhpcyBob29rIGV4aXN0cyBwdXJlbHkgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gICAgICAgICAgICAvLyBJdHMgbmFtZSB3aWxsIGJlIHBlcmlvZGljYWxseSByYW5kb21pemVkIHRvIGJyZWFrIGFueSBjb2RlIHRoYXRcbiAgICAgICAgICAgIC8vIGRlcGVuZHMgb24gaXRzIGV4aXN0ZW5jZS5cbiAgICAgICAgICAgIGFzYXAub25lcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJbiBhIHdlYiBicm93c2VyLCBleGNlcHRpb25zIGFyZSBub3QgZmF0YWwuIEhvd2V2ZXIsIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzbG93aW5nIGRvd24gdGhlIHF1ZXVlIG9mIHBlbmRpbmcgdGFza3MsIHdlIHJldGhyb3cgdGhlIGVycm9yIGluIGFcbiAgICAgICAgICAgIC8vIGxvd2VyIHByaW9yaXR5IHR1cm4uXG4gICAgICAgICAgICBwZW5kaW5nRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgcmVxdWVzdEVycm9yVGhyb3coKTtcbiAgICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMudGFzayA9IG51bGw7XG4gICAgICAgIGZyZWVUYXNrc1tmcmVlVGFza3MubGVuZ3RoXSA9IHRoaXM7XG4gICAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FzYXAvYnJvd3Nlci1hc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFVzZSB0aGUgZmFzdGVzdCBtZWFucyBwb3NzaWJsZSB0byBleGVjdXRlIGEgdGFzayBpbiBpdHMgb3duIHR1cm4sIHdpdGhcbi8vIHByaW9yaXR5IG92ZXIgb3RoZXIgZXZlbnRzIGluY2x1ZGluZyBJTywgYW5pbWF0aW9uLCByZWZsb3csIGFuZCByZWRyYXdcbi8vIGV2ZW50cyBpbiBicm93c2Vycy5cbi8vXG4vLyBBbiBleGNlcHRpb24gdGhyb3duIGJ5IGEgdGFzayB3aWxsIHBlcm1hbmVudGx5IGludGVycnVwdCB0aGUgcHJvY2Vzc2luZyBvZlxuLy8gc3Vic2VxdWVudCB0YXNrcy4gVGhlIGhpZ2hlciBsZXZlbCBgYXNhcGAgZnVuY3Rpb24gZW5zdXJlcyB0aGF0IGlmIGFuXG4vLyBleGNlcHRpb24gaXMgdGhyb3duIGJ5IGEgdGFzaywgdGhhdCB0aGUgdGFzayBxdWV1ZSB3aWxsIGNvbnRpbnVlIGZsdXNoaW5nIGFzXG4vLyBzb29uIGFzIHBvc3NpYmxlLCBidXQgaWYgeW91IHVzZSBgcmF3QXNhcGAgZGlyZWN0bHksIHlvdSBhcmUgcmVzcG9uc2libGUgdG9cbi8vIGVpdGhlciBlbnN1cmUgdGhhdCBubyBleGNlcHRpb25zIGFyZSB0aHJvd24gZnJvbSB5b3VyIHRhc2ssIG9yIHRvIG1hbnVhbGx5XG4vLyBjYWxsIGByYXdBc2FwLnJlcXVlc3RGbHVzaGAgaWYgYW4gZXhjZXB0aW9uIGlzIHRocm93bi5cbm1vZHVsZS5leHBvcnRzID0gcmF3QXNhcDtcbmZ1bmN0aW9uIHJhd0FzYXAodGFzaykge1xuICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHJlcXVlc3RGbHVzaCgpO1xuICAgICAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgfVxuICAgIC8vIEVxdWl2YWxlbnQgdG8gcHVzaCwgYnV0IGF2b2lkcyBhIGZ1bmN0aW9uIGNhbGwuXG4gICAgcXVldWVbcXVldWUubGVuZ3RoXSA9IHRhc2s7XG59XG5cbnZhciBxdWV1ZSA9IFtdO1xuLy8gT25jZSBhIGZsdXNoIGhhcyBiZWVuIHJlcXVlc3RlZCwgbm8gZnVydGhlciBjYWxscyB0byBgcmVxdWVzdEZsdXNoYCBhcmVcbi8vIG5lY2Vzc2FyeSB1bnRpbCB0aGUgbmV4dCBgZmx1c2hgIGNvbXBsZXRlcy5cbnZhciBmbHVzaGluZyA9IGZhbHNlO1xuLy8gYHJlcXVlc3RGbHVzaGAgaXMgYW4gaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgbWV0aG9kIHRoYXQgYXR0ZW1wdHMgdG8ga2lja1xuLy8gb2ZmIGEgYGZsdXNoYCBldmVudCBhcyBxdWlja2x5IGFzIHBvc3NpYmxlLiBgZmx1c2hgIHdpbGwgYXR0ZW1wdCB0byBleGhhdXN0XG4vLyB0aGUgZXZlbnQgcXVldWUgYmVmb3JlIHlpZWxkaW5nIHRvIHRoZSBicm93c2VyJ3Mgb3duIGV2ZW50IGxvb3AuXG52YXIgcmVxdWVzdEZsdXNoO1xuLy8gVGhlIHBvc2l0aW9uIG9mIHRoZSBuZXh0IHRhc2sgdG8gZXhlY3V0ZSBpbiB0aGUgdGFzayBxdWV1ZS4gVGhpcyBpc1xuLy8gcHJlc2VydmVkIGJldHdlZW4gY2FsbHMgdG8gYGZsdXNoYCBzbyB0aGF0IGl0IGNhbiBiZSByZXN1bWVkIGlmXG4vLyBhIHRhc2sgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbnZhciBpbmRleCA9IDA7XG4vLyBJZiBhIHRhc2sgc2NoZWR1bGVzIGFkZGl0aW9uYWwgdGFza3MgcmVjdXJzaXZlbHksIHRoZSB0YXNrIHF1ZXVlIGNhbiBncm93XG4vLyB1bmJvdW5kZWQuIFRvIHByZXZlbnQgbWVtb3J5IGV4aGF1c3Rpb24sIHRoZSB0YXNrIHF1ZXVlIHdpbGwgcGVyaW9kaWNhbGx5XG4vLyB0cnVuY2F0ZSBhbHJlYWR5LWNvbXBsZXRlZCB0YXNrcy5cbnZhciBjYXBhY2l0eSA9IDEwMjQ7XG5cbi8vIFRoZSBmbHVzaCBmdW5jdGlvbiBwcm9jZXNzZXMgYWxsIHRhc2tzIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB3aXRoXG4vLyBgcmF3QXNhcGAgdW5sZXNzIGFuZCB1bnRpbCBvbmUgb2YgdGhvc2UgdGFza3MgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbi8vIElmIGEgdGFzayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBgZmx1c2hgIGVuc3VyZXMgdGhhdCBpdHMgc3RhdGUgd2lsbCByZW1haW5cbi8vIGNvbnNpc3RlbnQgYW5kIHdpbGwgcmVzdW1lIHdoZXJlIGl0IGxlZnQgb2ZmIHdoZW4gY2FsbGVkIGFnYWluLlxuLy8gSG93ZXZlciwgYGZsdXNoYCBkb2VzIG5vdCBtYWtlIGFueSBhcnJhbmdlbWVudHMgdG8gYmUgY2FsbGVkIGFnYWluIGlmIGFuXG4vLyBleGNlcHRpb24gaXMgdGhyb3duLlxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgd2hpbGUgKGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8gQWR2YW5jZSB0aGUgaW5kZXggYmVmb3JlIGNhbGxpbmcgdGhlIHRhc2suIFRoaXMgZW5zdXJlcyB0aGF0IHdlIHdpbGxcbiAgICAgICAgLy8gYmVnaW4gZmx1c2hpbmcgb24gdGhlIG5leHQgdGFzayB0aGUgdGFzayB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICAgIGluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICBxdWV1ZVtjdXJyZW50SW5kZXhdLmNhbGwoKTtcbiAgICAgICAgLy8gUHJldmVudCBsZWFraW5nIG1lbW9yeSBmb3IgbG9uZyBjaGFpbnMgb2YgcmVjdXJzaXZlIGNhbGxzIHRvIGBhc2FwYC5cbiAgICAgICAgLy8gSWYgd2UgY2FsbCBgYXNhcGAgd2l0aGluIHRhc2tzIHNjaGVkdWxlZCBieSBgYXNhcGAsIHRoZSBxdWV1ZSB3aWxsXG4gICAgICAgIC8vIGdyb3csIGJ1dCB0byBhdm9pZCBhbiBPKG4pIHdhbGsgZm9yIGV2ZXJ5IHRhc2sgd2UgZXhlY3V0ZSwgd2UgZG9uJ3RcbiAgICAgICAgLy8gc2hpZnQgdGFza3Mgb2ZmIHRoZSBxdWV1ZSBhZnRlciB0aGV5IGhhdmUgYmVlbiBleGVjdXRlZC5cbiAgICAgICAgLy8gSW5zdGVhZCwgd2UgcGVyaW9kaWNhbGx5IHNoaWZ0IDEwMjQgdGFza3Mgb2ZmIHRoZSBxdWV1ZS5cbiAgICAgICAgaWYgKGluZGV4ID4gY2FwYWNpdHkpIHtcbiAgICAgICAgICAgIC8vIE1hbnVhbGx5IHNoaWZ0IGFsbCB2YWx1ZXMgc3RhcnRpbmcgYXQgdGhlIGluZGV4IGJhY2sgdG8gdGhlXG4gICAgICAgICAgICAvLyBiZWdpbm5pbmcgb2YgdGhlIHF1ZXVlLlxuICAgICAgICAgICAgZm9yICh2YXIgc2NhbiA9IDAsIG5ld0xlbmd0aCA9IHF1ZXVlLmxlbmd0aCAtIGluZGV4OyBzY2FuIDwgbmV3TGVuZ3RoOyBzY2FuKyspIHtcbiAgICAgICAgICAgICAgICBxdWV1ZVtzY2FuXSA9IHF1ZXVlW3NjYW4gKyBpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5sZW5ndGggLT0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICBpbmRleCA9IDA7XG4gICAgZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLy8gYHJlcXVlc3RGbHVzaGAgaXMgaW1wbGVtZW50ZWQgdXNpbmcgYSBzdHJhdGVneSBiYXNlZCBvbiBkYXRhIGNvbGxlY3RlZCBmcm9tXG4vLyBldmVyeSBhdmFpbGFibGUgU2F1Y2VMYWJzIFNlbGVuaXVtIHdlYiBkcml2ZXIgd29ya2VyIGF0IHRpbWUgb2Ygd3JpdGluZy5cbi8vIGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzFtRy01VVlHdXA1cXhHZEVNV2toUDZCV0N6MDUzTlViMkUxUW9VVFUxNnVBL2VkaXQjZ2lkPTc4MzcyNDU5M1xuXG4vLyBTYWZhcmkgNiBhbmQgNi4xIGZvciBkZXNrdG9wLCBpUGFkLCBhbmQgaVBob25lIGFyZSB0aGUgb25seSBicm93c2VycyB0aGF0XG4vLyBoYXZlIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIgYnV0IG5vdCB1bi1wcmVmaXhlZCBNdXRhdGlvbk9ic2VydmVyLlxuLy8gTXVzdCB1c2UgYGdsb2JhbGAgb3IgYHNlbGZgIGluc3RlYWQgb2YgYHdpbmRvd2AgdG8gd29yayBpbiBib3RoIGZyYW1lcyBhbmQgd2ViXG4vLyB3b3JrZXJzLiBgZ2xvYmFsYCBpcyBhIHByb3Zpc2lvbiBvZiBCcm93c2VyaWZ5LCBNciwgTXJzLCBvciBNb3AuXG5cbi8qIGdsb2JhbHMgc2VsZiAqL1xudmFyIHNjb3BlID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHNlbGY7XG52YXIgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBzY29wZS5NdXRhdGlvbk9ic2VydmVyIHx8IHNjb3BlLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cbi8vIE11dGF0aW9uT2JzZXJ2ZXJzIGFyZSBkZXNpcmFibGUgYmVjYXVzZSB0aGV5IGhhdmUgaGlnaCBwcmlvcml0eSBhbmQgd29ya1xuLy8gcmVsaWFibHkgZXZlcnl3aGVyZSB0aGV5IGFyZSBpbXBsZW1lbnRlZC5cbi8vIFRoZXkgYXJlIGltcGxlbWVudGVkIGluIGFsbCBtb2Rlcm4gYnJvd3NlcnMuXG4vL1xuLy8gLSBBbmRyb2lkIDQtNC4zXG4vLyAtIENocm9tZSAyNi0zNFxuLy8gLSBGaXJlZm94IDE0LTI5XG4vLyAtIEludGVybmV0IEV4cGxvcmVyIDExXG4vLyAtIGlQYWQgU2FmYXJpIDYtNy4xXG4vLyAtIGlQaG9uZSBTYWZhcmkgNy03LjFcbi8vIC0gU2FmYXJpIDYtN1xuaWYgKHR5cGVvZiBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmVxdWVzdEZsdXNoID0gbWFrZVJlcXVlc3RDYWxsRnJvbU11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpO1xuXG4vLyBNZXNzYWdlQ2hhbm5lbHMgYXJlIGRlc2lyYWJsZSBiZWNhdXNlIHRoZXkgZ2l2ZSBkaXJlY3QgYWNjZXNzIHRvIHRoZSBIVE1MXG4vLyB0YXNrIHF1ZXVlLCBhcmUgaW1wbGVtZW50ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAsIFNhZmFyaSA1LjAtMSwgYW5kIE9wZXJhXG4vLyAxMS0xMiwgYW5kIGluIHdlYiB3b3JrZXJzIGluIG1hbnkgZW5naW5lcy5cbi8vIEFsdGhvdWdoIG1lc3NhZ2UgY2hhbm5lbHMgeWllbGQgdG8gYW55IHF1ZXVlZCByZW5kZXJpbmcgYW5kIElPIHRhc2tzLCB0aGV5XG4vLyB3b3VsZCBiZSBiZXR0ZXIgdGhhbiBpbXBvc2luZyB0aGUgNG1zIGRlbGF5IG9mIHRpbWVycy5cbi8vIEhvd2V2ZXIsIHRoZXkgZG8gbm90IHdvcmsgcmVsaWFibHkgaW4gSW50ZXJuZXQgRXhwbG9yZXIgb3IgU2FmYXJpLlxuXG4vLyBJbnRlcm5ldCBFeHBsb3JlciAxMCBpcyB0aGUgb25seSBicm93c2VyIHRoYXQgaGFzIHNldEltbWVkaWF0ZSBidXQgZG9lc1xuLy8gbm90IGhhdmUgTXV0YXRpb25PYnNlcnZlcnMuXG4vLyBBbHRob3VnaCBzZXRJbW1lZGlhdGUgeWllbGRzIHRvIHRoZSBicm93c2VyJ3MgcmVuZGVyZXIsIGl0IHdvdWxkIGJlXG4vLyBwcmVmZXJyYWJsZSB0byBmYWxsaW5nIGJhY2sgdG8gc2V0VGltZW91dCBzaW5jZSBpdCBkb2VzIG5vdCBoYXZlXG4vLyB0aGUgbWluaW11bSA0bXMgcGVuYWx0eS5cbi8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgYXBwZWFycyB0byBiZSBhIGJ1ZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCBNb2JpbGUgKGFuZFxuLy8gRGVza3RvcCB0byBhIGxlc3NlciBleHRlbnQpIHRoYXQgcmVuZGVycyBib3RoIHNldEltbWVkaWF0ZSBhbmRcbi8vIE1lc3NhZ2VDaGFubmVsIHVzZWxlc3MgZm9yIHRoZSBwdXJwb3NlcyBvZiBBU0FQLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaXNrb3dhbC9xL2lzc3Vlcy8zOTZcblxuLy8gVGltZXJzIGFyZSBpbXBsZW1lbnRlZCB1bml2ZXJzYWxseS5cbi8vIFdlIGZhbGwgYmFjayB0byB0aW1lcnMgaW4gd29ya2VycyBpbiBtb3N0IGVuZ2luZXMsIGFuZCBpbiBmb3JlZ3JvdW5kXG4vLyBjb250ZXh0cyBpbiB0aGUgZm9sbG93aW5nIGJyb3dzZXJzLlxuLy8gSG93ZXZlciwgbm90ZSB0aGF0IGV2ZW4gdGhpcyBzaW1wbGUgY2FzZSByZXF1aXJlcyBudWFuY2VzIHRvIG9wZXJhdGUgaW4gYVxuLy8gYnJvYWQgc3BlY3RydW0gb2YgYnJvd3NlcnMuXG4vL1xuLy8gLSBGaXJlZm94IDMtMTNcbi8vIC0gSW50ZXJuZXQgRXhwbG9yZXIgNi05XG4vLyAtIGlQYWQgU2FmYXJpIDQuM1xuLy8gLSBMeW54IDIuOC43XG59IGVsc2Uge1xuICAgIHJlcXVlc3RGbHVzaCA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcihmbHVzaCk7XG59XG5cbi8vIGByZXF1ZXN0Rmx1c2hgIHJlcXVlc3RzIHRoYXQgdGhlIGhpZ2ggcHJpb3JpdHkgZXZlbnQgcXVldWUgYmUgZmx1c2hlZCBhc1xuLy8gc29vbiBhcyBwb3NzaWJsZS5cbi8vIFRoaXMgaXMgdXNlZnVsIHRvIHByZXZlbnQgYW4gZXJyb3IgdGhyb3duIGluIGEgdGFzayBmcm9tIHN0YWxsaW5nIHRoZSBldmVudFxuLy8gcXVldWUgaWYgdGhlIGV4Y2VwdGlvbiBoYW5kbGVkIGJ5IE5vZGUuanPigJlzXG4vLyBgcHJvY2Vzcy5vbihcInVuY2F1Z2h0RXhjZXB0aW9uXCIpYCBvciBieSBhIGRvbWFpbi5cbnJhd0FzYXAucmVxdWVzdEZsdXNoID0gcmVxdWVzdEZsdXNoO1xuXG4vLyBUbyByZXF1ZXN0IGEgaGlnaCBwcmlvcml0eSBldmVudCwgd2UgaW5kdWNlIGEgbXV0YXRpb24gb2JzZXJ2ZXIgYnkgdG9nZ2xpbmdcbi8vIHRoZSB0ZXh0IG9mIGEgdGV4dCBub2RlIGJldHdlZW4gXCIxXCIgYW5kIFwiLTFcIi5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21NdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHRvZ2dsZSA9IDE7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xuICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4gICAgICAgIHRvZ2dsZSA9IC10b2dnbGU7XG4gICAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZTtcbiAgICB9O1xufVxuXG4vLyBUaGUgbWVzc2FnZSBjaGFubmVsIHRlY2huaXF1ZSB3YXMgZGlzY292ZXJlZCBieSBNYWx0ZSBVYmwgYW5kIHdhcyB0aGVcbi8vIG9yaWdpbmFsIGZvdW5kYXRpb24gZm9yIHRoaXMgbGlicmFyeS5cbi8vIGh0dHA6Ly93d3cubm9uYmxvY2tpbmcuaW8vMjAxMS8wNi93aW5kb3duZXh0dGljay5odG1sXG5cbi8vIFNhZmFyaSA2LjAuNSAoYXQgbGVhc3QpIGludGVybWl0dGVudGx5IGZhaWxzIHRvIGNyZWF0ZSBtZXNzYWdlIHBvcnRzIG9uIGFcbi8vIHBhZ2UncyBmaXJzdCBsb2FkLiBUaGFua2Z1bGx5LCB0aGlzIHZlcnNpb24gb2YgU2FmYXJpIHN1cHBvcnRzXG4vLyBNdXRhdGlvbk9ic2VydmVycywgc28gd2UgZG9uJ3QgbmVlZCB0byBmYWxsIGJhY2sgaW4gdGhhdCBjYXNlLlxuXG4vLyBmdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tTWVzc2FnZUNoYW5uZWwoY2FsbGJhY2spIHtcbi8vICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuLy8gICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuLy8gICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuLy8gICAgIH07XG4vLyB9XG5cbi8vIEZvciByZWFzb25zIGV4cGxhaW5lZCBhYm92ZSwgd2UgYXJlIGFsc28gdW5hYmxlIHRvIHVzZSBgc2V0SW1tZWRpYXRlYFxuLy8gdW5kZXIgYW55IGNpcmN1bXN0YW5jZXMuXG4vLyBFdmVuIGlmIHdlIHdlcmUsIHRoZXJlIGlzIGFub3RoZXIgYnVnIGluIEludGVybmV0IEV4cGxvcmVyIDEwLlxuLy8gSXQgaXMgbm90IHN1ZmZpY2llbnQgdG8gYXNzaWduIGBzZXRJbW1lZGlhdGVgIHRvIGByZXF1ZXN0Rmx1c2hgIGJlY2F1c2Vcbi8vIGBzZXRJbW1lZGlhdGVgIG11c3QgYmUgY2FsbGVkICpieSBuYW1lKiBhbmQgdGhlcmVmb3JlIG11c3QgYmUgd3JhcHBlZCBpbiBhXG4vLyBjbG9zdXJlLlxuLy8gTmV2ZXIgZm9yZ2V0LlxuXG4vLyBmdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tU2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuLy8gICAgICAgICBzZXRJbW1lZGlhdGUoY2FsbGJhY2spO1xuLy8gICAgIH07XG4vLyB9XG5cbi8vIFNhZmFyaSA2LjAgaGFzIGEgcHJvYmxlbSB3aGVyZSB0aW1lcnMgd2lsbCBnZXQgbG9zdCB3aGlsZSB0aGUgdXNlciBpc1xuLy8gc2Nyb2xsaW5nLiBUaGlzIHByb2JsZW0gZG9lcyBub3QgaW1wYWN0IEFTQVAgYmVjYXVzZSBTYWZhcmkgNi4wIHN1cHBvcnRzXG4vLyBtdXRhdGlvbiBvYnNlcnZlcnMsIHNvIHRoYXQgaW1wbGVtZW50YXRpb24gaXMgdXNlZCBpbnN0ZWFkLlxuLy8gSG93ZXZlciwgaWYgd2UgZXZlciBlbGVjdCB0byB1c2UgdGltZXJzIGluIFNhZmFyaSwgdGhlIHByZXZhbGVudCB3b3JrLWFyb3VuZFxuLy8gaXMgdG8gYWRkIGEgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHRoYXQgY2FsbHMgZm9yIGEgZmx1c2guXG5cbi8vIGBzZXRUaW1lb3V0YCBkb2VzIG5vdCBjYWxsIHRoZSBwYXNzZWQgY2FsbGJhY2sgaWYgdGhlIGRlbGF5IGlzIGxlc3MgdGhhblxuLy8gYXBwcm94aW1hdGVseSA3IGluIHdlYiB3b3JrZXJzIGluIEZpcmVmb3ggOCB0aHJvdWdoIDE4LCBhbmQgc29tZXRpbWVzIG5vdFxuLy8gZXZlbiB0aGVuLlxuXG5mdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXIoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4gICAgICAgIC8vIFdlIGRpc3BhdGNoIGEgdGltZW91dCB3aXRoIGEgc3BlY2lmaWVkIGRlbGF5IG9mIDAgZm9yIGVuZ2luZXMgdGhhdFxuICAgICAgICAvLyBjYW4gcmVsaWFibHkgYWNjb21tb2RhdGUgdGhhdCByZXF1ZXN0LiBUaGlzIHdpbGwgdXN1YWxseSBiZSBzbmFwcGVkXG4gICAgICAgIC8vIHRvIGEgNCBtaWxpc2Vjb25kIGRlbGF5LCBidXQgb25jZSB3ZSdyZSBmbHVzaGluZywgdGhlcmUncyBubyBkZWxheVxuICAgICAgICAvLyBiZXR3ZWVuIGV2ZW50cy5cbiAgICAgICAgdmFyIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGhhbmRsZVRpbWVyLCAwKTtcbiAgICAgICAgLy8gSG93ZXZlciwgc2luY2UgdGhpcyB0aW1lciBnZXRzIGZyZXF1ZW50bHkgZHJvcHBlZCBpbiBGaXJlZm94XG4gICAgICAgIC8vIHdvcmtlcnMsIHdlIGVubGlzdCBhbiBpbnRlcnZhbCBoYW5kbGUgdGhhdCB3aWxsIHRyeSB0byBmaXJlXG4gICAgICAgIC8vIGFuIGV2ZW50IDIwIHRpbWVzIHBlciBzZWNvbmQgdW50aWwgaXQgc3VjY2VlZHMuXG4gICAgICAgIHZhciBpbnRlcnZhbEhhbmRsZSA9IHNldEludGVydmFsKGhhbmRsZVRpbWVyLCA1MCk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVGltZXIoKSB7XG4gICAgICAgICAgICAvLyBXaGljaGV2ZXIgdGltZXIgc3VjY2VlZHMgd2lsbCBjYW5jZWwgYm90aCB0aW1lcnMgYW5kXG4gICAgICAgICAgICAvLyBleGVjdXRlIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxIYW5kbGUpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIFRoaXMgaXMgZm9yIGBhc2FwLmpzYCBvbmx5LlxuLy8gSXRzIG5hbWUgd2lsbCBiZSBwZXJpb2RpY2FsbHkgcmFuZG9taXplZCB0byBicmVhayBhbnkgY29kZSB0aGF0IGRlcGVuZHMgb25cbi8vIGl0cyBleGlzdGVuY2UuXG5yYXdBc2FwLm1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lciA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcjtcblxuLy8gQVNBUCB3YXMgb3JpZ2luYWxseSBhIG5leHRUaWNrIHNoaW0gaW5jbHVkZWQgaW4gUS4gVGhpcyB3YXMgZmFjdG9yZWQgb3V0XG4vLyBpbnRvIHRoaXMgQVNBUCBwYWNrYWdlLiBJdCB3YXMgbGF0ZXIgYWRhcHRlZCB0byBSU1ZQIHdoaWNoIG1hZGUgZnVydGhlclxuLy8gYW1lbmRtZW50cy4gVGhlc2UgZGVjaXNpb25zLCBwYXJ0aWN1bGFybHkgdG8gbWFyZ2luYWxpemUgTWVzc2FnZUNoYW5uZWwgYW5kXG4vLyB0byBjYXB0dXJlIHRoZSBNdXRhdGlvbk9ic2VydmVyIGltcGxlbWVudGF0aW9uIGluIGEgY2xvc3VyZSwgd2VyZSBpbnRlZ3JhdGVkXG4vLyBiYWNrIGludG8gQVNBUCBwcm9wZXIuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGlsZGVpby9yc3ZwLmpzL2Jsb2IvY2RkZjcyMzI1NDZhOWNmODU4NTI0Yjc1Y2RlNmY5ZWRmNzI2MjBhNy9saWIvcnN2cC9hc2FwLmpzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hc2FwL2Jyb3dzZXItcmF3LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXROZXh0VW5pcXVlSWQ7XG52YXIgbmV4dFVuaXF1ZUlkID0gMDtcblxuZnVuY3Rpb24gZ2V0TmV4dFVuaXF1ZUlkKCkge1xuICByZXR1cm4gbmV4dFVuaXF1ZUlkKys7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL3V0aWxzL2dldE5leHRVbmlxdWVJZC5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRHJhZ1NvdXJjZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRHJhZ1NvdXJjZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ1NvdXJjZSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJhZ1NvdXJjZSwgW3tcbiAgICBrZXk6IFwiY2FuRHJhZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5EcmFnKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzRHJhZ2dpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNEcmFnZ2luZyhtb25pdG9yLCBoYW5kbGUpIHtcbiAgICAgIHJldHVybiBoYW5kbGUgPT09IG1vbml0b3IuZ2V0U291cmNlSWQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW5kRHJhZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmREcmFnKCkge31cbiAgfV0pO1xuXG4gIHJldHVybiBEcmFnU291cmNlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEcmFnU291cmNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9EcmFnU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEcm9wVGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEcm9wVGFyZ2V0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wVGFyZ2V0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcm9wVGFyZ2V0LCBbe1xuICAgIGtleTogXCJjYW5Ecm9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbkRyb3AoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaG92ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaG92ZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImRyb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZHJvcCgpIHt9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcFRhcmdldDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRHJvcFRhcmdldDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvRHJvcFRhcmdldC5qc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQmFja2VuZDtcblxudmFyIF9ub29wID0gcmVxdWlyZSgnbG9kYXNoL25vb3AnKTtcblxudmFyIF9ub29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25vb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVGVzdEJhY2tlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRlc3RCYWNrZW5kKG1hbmFnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVzdEJhY2tlbmQpO1xuXG4gICAgdGhpcy5hY3Rpb25zID0gbWFuYWdlci5nZXRBY3Rpb25zKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGVzdEJhY2tlbmQsIFt7XG4gICAga2V5OiAnc2V0dXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAgIHRoaXMuZGlkQ2FsbFNldHVwID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0ZWFyZG93bicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRlYXJkb3duKCkge1xuICAgICAgdGhpcy5kaWRDYWxsVGVhcmRvd24gPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nvbm5lY3REcmFnU291cmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdERyYWdTb3VyY2UoKSB7XG4gICAgICByZXR1cm4gX25vb3AyLmRlZmF1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29ubmVjdERyYWdQcmV2aWV3JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdERyYWdQcmV2aWV3KCkge1xuICAgICAgcmV0dXJuIF9ub29wMi5kZWZhdWx0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nvbm5lY3REcm9wVGFyZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdERyb3BUYXJnZXQoKSB7XG4gICAgICByZXR1cm4gX25vb3AyLmRlZmF1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2ltdWxhdGVCZWdpbkRyYWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaW11bGF0ZUJlZ2luRHJhZyhzb3VyY2VJZHMsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuYWN0aW9ucy5iZWdpbkRyYWcoc291cmNlSWRzLCBvcHRpb25zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaW11bGF0ZVB1Ymxpc2hEcmFnU291cmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2ltdWxhdGVQdWJsaXNoRHJhZ1NvdXJjZSgpIHtcbiAgICAgIHRoaXMuYWN0aW9ucy5wdWJsaXNoRHJhZ1NvdXJjZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpbXVsYXRlSG92ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaW11bGF0ZUhvdmVyKHRhcmdldElkcywgb3B0aW9ucykge1xuICAgICAgdGhpcy5hY3Rpb25zLmhvdmVyKHRhcmdldElkcywgb3B0aW9ucyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2ltdWxhdGVEcm9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2ltdWxhdGVEcm9wKCkge1xuICAgICAgdGhpcy5hY3Rpb25zLmRyb3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaW11bGF0ZUVuZERyYWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaW11bGF0ZUVuZERyYWcoKSB7XG4gICAgICB0aGlzLmFjdGlvbnMuZW5kRHJhZygpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUZXN0QmFja2VuZDtcbn0oKTtcblxuZnVuY3Rpb24gY3JlYXRlQmFja2VuZChtYW5hZ2VyKSB7XG4gIHJldHVybiBuZXcgVGVzdEJhY2tlbmQobWFuYWdlcik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2JhY2tlbmRzL2NyZWF0ZVRlc3RCYWNrZW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NsYXNzLCBfdGVtcDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX0RyYWdEcm9wQ29udGV4dCA9IHJlcXVpcmUoJy4vRHJhZ0Ryb3BDb250ZXh0Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgUmVhY3QtQ29tcG9uZW50IGJhc2VkIHZlcnNpb24gb2YgdGhlIERyYWdEcm9wQ29udGV4dC5cbiAqIFRoaXMgaXMgYW4gYWx0ZXJuYXRpdmUgdG8gZGVjb3JhdGluZyBhbiBhcHBsaWNhdGlvbiBjb21wb25lbnQgd2l0aCBhbiBFUzcgZGVjb3JhdG9yLlxuICovXG52YXIgRHJhZ0Ryb3BDb250ZXh0UHJvdmlkZXIgPSAoX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRHJhZ0Ryb3BDb250ZXh0UHJvdmlkZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyYWdEcm9wQ29udGV4dFByb3ZpZGVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdEcm9wQ29udGV4dFByb3ZpZGVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEcmFnRHJvcENvbnRleHRQcm92aWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyYWdEcm9wQ29udGV4dFByb3ZpZGVyKSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMuYmFja2VuZCA9ICgwLCBfRHJhZ0Ryb3BDb250ZXh0LnVucGFja0JhY2tlbmRGb3JFczVVc2VycykocHJvcHMuYmFja2VuZCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERyYWdEcm9wQ29udGV4dFByb3ZpZGVyLCBbe1xuICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgcHJvcGVydHkgZGV0ZXJtaW5lcyB3aGljaCB3aW5kb3cgZ2xvYmFsIHRvIHVzZSBmb3IgY3JlYXRpbmcgdGhlIERyYWdEcm9wTWFuYWdlci5cbiAgICAgICAqIElmIGEgd2luZG93IGhhcyBiZWVuIGluamVjdGVkIGV4cGxpY2l0bHkgdmlhIHByb3BzLCB0aGF0IGlzIHVzZWQgZmlyc3QuIElmIGl0IGlzIGF2YWlsYWJsZVxuICAgICAgICogYXMgYSBjb250ZXh0IHZhbHVlLCB0aGVuIHVzZSB0aGF0LCBvdGhlcndpc2UgdXNlIHRoZSBicm93c2VyIGdsb2JhbC5cbiAgICAgICAqL1xuICAgICAgdmFyIGdldFdpbmRvdyA9IGZ1bmN0aW9uIGdldFdpbmRvdygpIHtcbiAgICAgICAgaWYgKF90aGlzMi5wcm9wcyAmJiBfdGhpczIucHJvcHMud2luZG93KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5wcm9wcy53aW5kb3c7XG4gICAgICAgIH0gZWxzZSBpZiAoX3RoaXMyLmNvbnRleHQgJiYgX3RoaXMyLmNvbnRleHQud2luZG93KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5jb250ZXh0LndpbmRvdztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoMCwgX0RyYWdEcm9wQ29udGV4dC5jcmVhdGVDaGlsZENvbnRleHQpKHRoaXMuYmFja2VuZCwgeyB3aW5kb3c6IGdldFdpbmRvdygpIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJhZ0Ryb3BDb250ZXh0UHJvdmlkZXI7XG59KF9yZWFjdC5Db21wb25lbnQpLCBfY2xhc3MucHJvcFR5cGVzID0ge1xuICBiYWNrZW5kOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgd2luZG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCB9LCBfY2xhc3MuZGVmYXVsdFByb3BzID0ge1xuICB3aW5kb3c6IHVuZGVmaW5lZFxufSwgX2NsYXNzLmNoaWxkQ29udGV4dFR5cGVzID0gX0RyYWdEcm9wQ29udGV4dC5DSElMRF9DT05URVhUX1RZUEVTLCBfY2xhc3MuZGlzcGxheU5hbWUgPSAnRHJhZ0Ryb3BDb250ZXh0UHJvdmlkZXInLCBfY2xhc3MuY29udGV4dFR5cGVzID0ge1xuICB3aW5kb3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59LCBfdGVtcCk7XG5leHBvcnRzLmRlZmF1bHQgPSBEcmFnRHJvcENvbnRleHRQcm92aWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0RyYWdEcm9wQ29udGV4dFByb3ZpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gRHJhZ1NvdXJjZTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG52YXIgX2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzID0gcmVxdWlyZSgnLi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cycpO1xuXG52YXIgX2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzKTtcblxudmFyIF9kZWNvcmF0ZUhhbmRsZXIgPSByZXF1aXJlKCcuL2RlY29yYXRlSGFuZGxlcicpO1xuXG52YXIgX2RlY29yYXRlSGFuZGxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWNvcmF0ZUhhbmRsZXIpO1xuXG52YXIgX3JlZ2lzdGVyU291cmNlID0gcmVxdWlyZSgnLi9yZWdpc3RlclNvdXJjZScpO1xuXG52YXIgX3JlZ2lzdGVyU291cmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZ2lzdGVyU291cmNlKTtcblxudmFyIF9jcmVhdGVTb3VyY2VGYWN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVTb3VyY2VGYWN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlU291cmNlRmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTb3VyY2VGYWN0b3J5KTtcblxudmFyIF9jcmVhdGVTb3VyY2VNb25pdG9yID0gcmVxdWlyZSgnLi9jcmVhdGVTb3VyY2VNb25pdG9yJyk7XG5cbnZhciBfY3JlYXRlU291cmNlTW9uaXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTb3VyY2VNb25pdG9yKTtcblxudmFyIF9jcmVhdGVTb3VyY2VDb25uZWN0b3IgPSByZXF1aXJlKCcuL2NyZWF0ZVNvdXJjZUNvbm5lY3RvcicpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZUNvbm5lY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTb3VyY2VDb25uZWN0b3IpO1xuXG52YXIgX2lzVmFsaWRUeXBlID0gcmVxdWlyZSgnLi91dGlscy9pc1ZhbGlkVHlwZScpO1xuXG52YXIgX2lzVmFsaWRUeXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVmFsaWRUeXBlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gRHJhZ1NvdXJjZSh0eXBlLCBzcGVjLCBjb2xsZWN0KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcblxuICBfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyLmRlZmF1bHQuYXBwbHkodW5kZWZpbmVkLCBbJ0RyYWdTb3VyY2UnLCAndHlwZSwgc3BlYywgY29sbGVjdFssIG9wdGlvbnNdJ10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgdmFyIGdldFR5cGUgPSB0eXBlO1xuICBpZiAodHlwZW9mIHR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoKDAsIF9pc1ZhbGlkVHlwZTIuZGVmYXVsdCkodHlwZSksICdFeHBlY3RlZCBcInR5cGVcIiBwcm92aWRlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gRHJhZ1NvdXJjZSB0byBiZSAnICsgJ2Egc3RyaW5nLCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHN0cmluZyBnaXZlbiB0aGUgY3VycmVudCBwcm9wcy4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCB0eXBlKTtcbiAgICBnZXRUeXBlID0gZnVuY3Rpb24gZ2V0VHlwZSgpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH07XG4gIH1cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkoc3BlYyksICdFeHBlY3RlZCBcInNwZWNcIiBwcm92aWRlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIERyYWdTb3VyY2UgdG8gYmUgJyArICdhIHBsYWluIG9iamVjdC4gSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgc3BlYyk7XG4gIHZhciBjcmVhdGVTb3VyY2UgPSAoMCwgX2NyZWF0ZVNvdXJjZUZhY3RvcnkyLmRlZmF1bHQpKHNwZWMpO1xuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIGNvbGxlY3QgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBcImNvbGxlY3RcIiBwcm92aWRlZCBhcyB0aGUgdGhpcmQgYXJndW1lbnQgdG8gRHJhZ1NvdXJjZSB0byBiZSAnICsgJ2EgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IG9mIHByb3BzIHRvIGluamVjdC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBjb2xsZWN0KTtcbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkob3B0aW9ucyksICdFeHBlY3RlZCBcIm9wdGlvbnNcIiBwcm92aWRlZCBhcyB0aGUgZm91cnRoIGFyZ3VtZW50IHRvIERyYWdTb3VyY2UgdG8gYmUgJyArICdhIHBsYWluIG9iamVjdCB3aGVuIHNwZWNpZmllZC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBjb2xsZWN0KTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGVTb3VyY2UoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuICgwLCBfZGVjb3JhdGVIYW5kbGVyMi5kZWZhdWx0KSh7XG4gICAgICBjb25uZWN0QmFja2VuZDogZnVuY3Rpb24gY29ubmVjdEJhY2tlbmQoYmFja2VuZCwgc291cmNlSWQpIHtcbiAgICAgICAgcmV0dXJuIGJhY2tlbmQuY29ubmVjdERyYWdTb3VyY2Uoc291cmNlSWQpO1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckRpc3BsYXlOYW1lOiAnRHJhZ1NvdXJjZScsXG4gICAgICBjcmVhdGVIYW5kbGVyOiBjcmVhdGVTb3VyY2UsXG4gICAgICByZWdpc3RlckhhbmRsZXI6IF9yZWdpc3RlclNvdXJjZTIuZGVmYXVsdCxcbiAgICAgIGNyZWF0ZU1vbml0b3I6IF9jcmVhdGVTb3VyY2VNb25pdG9yMi5kZWZhdWx0LFxuICAgICAgY3JlYXRlQ29ubmVjdG9yOiBfY3JlYXRlU291cmNlQ29ubmVjdG9yMi5kZWZhdWx0LFxuICAgICAgRGVjb3JhdGVkQ29tcG9uZW50OiBEZWNvcmF0ZWRDb21wb25lbnQsXG4gICAgICBnZXRUeXBlOiBnZXRUeXBlLFxuICAgICAgY29sbGVjdDogY29sbGVjdCxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9KTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0RyYWdTb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0Rpc3Bvc2FibGUyID0gcmVxdWlyZSgnLi9pc0Rpc3Bvc2FibGUnKTtcblxudmFyIF9pc0Rpc3Bvc2FibGUzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2lzRGlzcG9zYWJsZTIpO1xuXG5leHBvcnRzLmlzRGlzcG9zYWJsZSA9IF9pc0Rpc3Bvc2FibGUzWydkZWZhdWx0J107XG5cbnZhciBfRGlzcG9zYWJsZTIgPSByZXF1aXJlKCcuL0Rpc3Bvc2FibGUnKTtcblxudmFyIF9EaXNwb3NhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9EaXNwb3NhYmxlMik7XG5cbmV4cG9ydHMuRGlzcG9zYWJsZSA9IF9EaXNwb3NhYmxlM1snZGVmYXVsdCddO1xuXG52YXIgX0NvbXBvc2l0ZURpc3Bvc2FibGUyID0gcmVxdWlyZSgnLi9Db21wb3NpdGVEaXNwb3NhYmxlJyk7XG5cbnZhciBfQ29tcG9zaXRlRGlzcG9zYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfQ29tcG9zaXRlRGlzcG9zYWJsZTIpO1xuXG5leHBvcnRzLkNvbXBvc2l0ZURpc3Bvc2FibGUgPSBfQ29tcG9zaXRlRGlzcG9zYWJsZTNbJ2RlZmF1bHQnXTtcblxudmFyIF9TZXJpYWxEaXNwb3NhYmxlMiA9IHJlcXVpcmUoJy4vU2VyaWFsRGlzcG9zYWJsZScpO1xuXG52YXIgX1NlcmlhbERpc3Bvc2FibGUzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX1NlcmlhbERpc3Bvc2FibGUyKTtcblxuZXhwb3J0cy5TZXJpYWxEaXNwb3NhYmxlID0gX1NlcmlhbERpc3Bvc2FibGUzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGlzcG9zYWJsZXMvbW9kdWxlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG4vKipcbiAqIFRoZSBiYXNpYyBkaXNwb3NhYmxlLlxuICovXG5cbnZhciBEaXNwb3NhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRGlzcG9zYWJsZShhY3Rpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlzcG9zYWJsZSk7XG5cbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbiB8fCBub29wO1xuICB9XG5cbiAgRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHRoaXMuYWN0aW9uLmNhbGwobnVsbCk7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoRGlzcG9zYWJsZSwgbnVsbCwgW3tcbiAgICBrZXk6IFwiZW1wdHlcIixcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB7IGRpc3Bvc2U6IG5vb3AgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERpc3Bvc2FibGU7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERpc3Bvc2FibGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Rpc3Bvc2FibGVzL21vZHVsZXMvRGlzcG9zYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9O1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzRGlzcG9zYWJsZSA9IHJlcXVpcmUoJy4vaXNEaXNwb3NhYmxlJyk7XG5cbnZhciBfaXNEaXNwb3NhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pc0Rpc3Bvc2FibGUpO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBncm91cCBvZiBkaXNwb3NhYmxlIHJlc291cmNlcyB0aGF0IGFyZSBkaXNwb3NlZCB0b2dldGhlci5cbiAqL1xuXG52YXIgQ29tcG9zaXRlRGlzcG9zYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbXBvc2l0ZURpc3Bvc2FibGUoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRpc3Bvc2FibGVzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBkaXNwb3NhYmxlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9zaXRlRGlzcG9zYWJsZSk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShkaXNwb3NhYmxlc1swXSkgJiYgZGlzcG9zYWJsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBkaXNwb3NhYmxlcyA9IGRpc3Bvc2FibGVzWzBdO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzcG9zYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghX2lzRGlzcG9zYWJsZTJbJ2RlZmF1bHQnXShkaXNwb3NhYmxlc1tpXSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhIGRpc3Bvc2FibGUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2FibGVzID0gZGlzcG9zYWJsZXM7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGRpc3Bvc2FibGUgdG8gdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUgb3IgZGlzcG9zZXMgdGhlIGRpc3Bvc2FibGUgaWYgdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUgaXMgZGlzcG9zZWQuXG4gICAqIEBwYXJhbSB7RGlzcG9zYWJsZX0gaXRlbSBEaXNwb3NhYmxlIHRvIGFkZC5cbiAgICovXG5cbiAgQ29tcG9zaXRlRGlzcG9zYWJsZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICBpdGVtLmRpc3Bvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwb3NhYmxlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbmQgZGlzcG9zZXMgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYSBkaXNwb3NhYmxlIGZyb20gdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUuXG4gICAqIEBwYXJhbSB7RGlzcG9zYWJsZX0gaXRlbSBEaXNwb3NhYmxlIHRvIHJlbW92ZS5cbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgZm91bmQ7IGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG5cbiAgQ29tcG9zaXRlRGlzcG9zYWJsZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5kaXNwb3NhYmxlcy5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2FibGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgaXRlbS5kaXNwb3NlKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3Bvc2VzIGFsbCBkaXNwb3NhYmxlcyBpbiB0aGUgZ3JvdXAgYW5kIHJlbW92ZXMgdGhlbSBmcm9tIHRoZSBncm91cC5cbiAgICovXG5cbiAgQ29tcG9zaXRlRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsZW4gPSB0aGlzLmRpc3Bvc2FibGVzLmxlbmd0aDtcbiAgICB2YXIgY3VycmVudERpc3Bvc2FibGVzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgY3VycmVudERpc3Bvc2FibGVzW2ldID0gdGhpcy5kaXNwb3NhYmxlc1tpXTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgIHRoaXMuZGlzcG9zYWJsZXMgPSBbXTtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjdXJyZW50RGlzcG9zYWJsZXNbaV0uZGlzcG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ29tcG9zaXRlRGlzcG9zYWJsZTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvbXBvc2l0ZURpc3Bvc2FibGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kaXNwb3NhYmxlcy9tb2R1bGVzL0NvbXBvc2l0ZURpc3Bvc2FibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfTtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0Rpc3Bvc2FibGUgPSByZXF1aXJlKCcuL2lzRGlzcG9zYWJsZScpO1xuXG52YXIgX2lzRGlzcG9zYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaXNEaXNwb3NhYmxlKTtcblxudmFyIFNlcmlhbERpc3Bvc2FibGUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXJpYWxEaXNwb3NhYmxlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZXJpYWxEaXNwb3NhYmxlKTtcblxuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgdW5kZXJseWluZyBkaXNwb3NhYmxlLlxuICAgKiBAcmV0dXJuIFRoZSB1bmRlcmx5aW5nIGRpc3Bvc2FibGUuXG4gICAqL1xuXG4gIFNlcmlhbERpc3Bvc2FibGUucHJvdG90eXBlLmdldERpc3Bvc2FibGUgPSBmdW5jdGlvbiBnZXREaXNwb3NhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZS5cbiAgICogQHBhcmFtIHtEaXNwb3NhYmxlfSB2YWx1ZSBUaGUgbmV3IHVuZGVybHlpbmcgZGlzcG9zYWJsZS5cbiAgICovXG5cbiAgU2VyaWFsRGlzcG9zYWJsZS5wcm90b3R5cGUuc2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uIHNldERpc3Bvc2FibGUoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzBdO1xuXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgIV9pc0Rpc3Bvc2FibGUyWydkZWZhdWx0J10odmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGVpdGhlciBhbiBlbXB0eSB2YWx1ZSBvciBhIHZhbGlkIGRpc3Bvc2FibGUnKTtcbiAgICB9XG5cbiAgICB2YXIgaXNEaXNwb3NlZCA9IHRoaXMuaXNEaXNwb3NlZDtcbiAgICB2YXIgcHJldmlvdXMgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIWlzRGlzcG9zZWQpIHtcbiAgICAgIHByZXZpb3VzID0gdGhpcy5jdXJyZW50O1xuICAgICAgdGhpcy5jdXJyZW50ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICBwcmV2aW91cy5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcG9zZWQgJiYgdmFsdWUpIHtcbiAgICAgIHZhbHVlLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3Bvc2VzIHRoZSB1bmRlcmx5aW5nIGRpc3Bvc2FibGUgYXMgd2VsbCBhcyBhbGwgZnV0dXJlIHJlcGxhY2VtZW50cy5cbiAgICovXG5cbiAgU2VyaWFsRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgdmFyIHByZXZpb3VzID0gdGhpcy5jdXJyZW50O1xuICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG5cbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgIHByZXZpb3VzLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNlcmlhbERpc3Bvc2FibGU7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTZXJpYWxEaXNwb3NhYmxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGlzcG9zYWJsZXMvbW9kdWxlcy9TZXJpYWxEaXNwb3NhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZWdpc3RlclNvdXJjZTtcbmZ1bmN0aW9uIHJlZ2lzdGVyU291cmNlKHR5cGUsIHNvdXJjZSwgbWFuYWdlcikge1xuICB2YXIgcmVnaXN0cnkgPSBtYW5hZ2VyLmdldFJlZ2lzdHJ5KCk7XG4gIHZhciBzb3VyY2VJZCA9IHJlZ2lzdHJ5LmFkZFNvdXJjZSh0eXBlLCBzb3VyY2UpO1xuXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJTb3VyY2UoKSB7XG4gICAgcmVnaXN0cnkucmVtb3ZlU291cmNlKHNvdXJjZUlkKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGFuZGxlcklkOiBzb3VyY2VJZCxcbiAgICB1bnJlZ2lzdGVyOiB1bnJlZ2lzdGVyU291cmNlXG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9yZWdpc3RlclNvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlU291cmNlRmFjdG9yeTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQUxMT1dFRF9TUEVDX01FVEhPRFMgPSBbJ2NhbkRyYWcnLCAnYmVnaW5EcmFnJywgJ2lzRHJhZ2dpbmcnLCAnZW5kRHJhZyddO1xudmFyIFJFUVVJUkVEX1NQRUNfTUVUSE9EUyA9IFsnYmVnaW5EcmFnJ107XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZUZhY3Rvcnkoc3BlYykge1xuICBPYmplY3Qua2V5cyhzcGVjKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoQUxMT1dFRF9TUEVDX01FVEhPRFMuaW5kZXhPZihrZXkpID4gLTEsICdFeHBlY3RlZCB0aGUgZHJhZyBzb3VyY2Ugc3BlY2lmaWNhdGlvbiB0byBvbmx5IGhhdmUgJyArICdzb21lIG9mIHRoZSBmb2xsb3dpbmcga2V5czogJXMuICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCBhbiB1bmV4cGVjdGVkIFwiJXNcIiBrZXkuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgQUxMT1dFRF9TUEVDX01FVEhPRFMuam9pbignLCAnKSwga2V5KTtcbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIHNwZWNba2V5XSA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkICVzIGluIHRoZSBkcmFnIHNvdXJjZSBzcGVjaWZpY2F0aW9uIHRvIGJlIGEgZnVuY3Rpb24uICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCAlczogJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywga2V5LCBrZXksIHNwZWNba2V5XSk7XG4gIH0pO1xuICBSRVFVSVJFRF9TUEVDX01FVEhPRFMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHR5cGVvZiBzcGVjW2tleV0gPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCAlcyBpbiB0aGUgZHJhZyBzb3VyY2Ugc3BlY2lmaWNhdGlvbiB0byBiZSBhIGZ1bmN0aW9uLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgYSBzcGVjaWZpY2F0aW9uIHdpdGggJXM6ICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGtleSwga2V5LCBzcGVjW2tleV0pO1xuICB9KTtcblxuICB2YXIgU291cmNlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNvdXJjZShtb25pdG9yKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU291cmNlKTtcblxuICAgICAgdGhpcy5tb25pdG9yID0gbW9uaXRvcjtcbiAgICAgIHRoaXMucHJvcHMgPSBudWxsO1xuICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTb3VyY2UsIFt7XG4gICAgICBrZXk6ICdyZWNlaXZlUHJvcHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVjZWl2ZUNvbXBvbmVudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVjZWl2ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY2FuRHJhZycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2FuRHJhZygpIHtcbiAgICAgICAgaWYgKCFzcGVjLmNhbkRyYWcpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGVjLmNhbkRyYWcodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdpc0RyYWdnaW5nJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RyYWdnaW5nKGdsb2JhbE1vbml0b3IsIHNvdXJjZUlkKSB7XG4gICAgICAgIGlmICghc3BlYy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIHNvdXJjZUlkID09PSBnbG9iYWxNb25pdG9yLmdldFNvdXJjZUlkKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BlYy5pc0RyYWdnaW5nKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnYmVnaW5EcmFnJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBiZWdpbkRyYWcoKSB7XG4gICAgICAgIHZhciBpdGVtID0gc3BlYy5iZWdpbkRyYWcodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yLCB0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkoaXRlbSksICdiZWdpbkRyYWcoKSBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGRyYWdnZWQgaXRlbS4gJyArICdJbnN0ZWFkIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2VuZERyYWcnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuZERyYWcoKSB7XG4gICAgICAgIGlmICghc3BlYy5lbmREcmFnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BlYy5lbmREcmFnKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvciwgdGhpcy5jb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTb3VyY2U7XG4gIH0oKTtcblxuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlU291cmNlKG1vbml0b3IpIHtcbiAgICByZXR1cm4gbmV3IFNvdXJjZShtb25pdG9yKTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVNvdXJjZUZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVNvdXJjZU1vbml0b3I7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBpc0NhbGxpbmdDYW5EcmFnID0gZmFsc2U7XG52YXIgaXNDYWxsaW5nSXNEcmFnZ2luZyA9IGZhbHNlO1xuXG52YXIgU291cmNlTW9uaXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU291cmNlTW9uaXRvcihtYW5hZ2VyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvdXJjZU1vbml0b3IpO1xuXG4gICAgdGhpcy5pbnRlcm5hbE1vbml0b3IgPSBtYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTb3VyY2VNb25pdG9yLCBbe1xuICAgIGtleTogJ3JlY2VpdmVIYW5kbGVySWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWNlaXZlSGFuZGxlcklkKHNvdXJjZUlkKSB7XG4gICAgICB0aGlzLnNvdXJjZUlkID0gc291cmNlSWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FuRHJhZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbkRyYWcoKSB7XG4gICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoIWlzQ2FsbGluZ0NhbkRyYWcsICdZb3UgbWF5IG5vdCBjYWxsIG1vbml0b3IuY2FuRHJhZygpIGluc2lkZSB5b3VyIGNhbkRyYWcoKSBpbXBsZW1lbnRhdGlvbi4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLW1vbml0b3IuaHRtbCcpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBpc0NhbGxpbmdDYW5EcmFnID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmNhbkRyYWdTb3VyY2UodGhpcy5zb3VyY2VJZCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc0NhbGxpbmdDYW5EcmFnID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNEcmFnZ2luZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRHJhZ2dpbmcoKSB7XG4gICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoIWlzQ2FsbGluZ0lzRHJhZ2dpbmcsICdZb3UgbWF5IG5vdCBjYWxsIG1vbml0b3IuaXNEcmFnZ2luZygpIGluc2lkZSB5b3VyIGlzRHJhZ2dpbmcoKSBpbXBsZW1lbnRhdGlvbi4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLW1vbml0b3IuaHRtbCcpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBpc0NhbGxpbmdJc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmlzRHJhZ2dpbmdTb3VyY2UodGhpcy5zb3VyY2VJZCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc0NhbGxpbmdJc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SXRlbVR5cGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJdGVtVHlwZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJdGVtVHlwZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEl0ZW0nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJdGVtKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEl0ZW0oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREcm9wUmVzdWx0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RHJvcFJlc3VsdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlkRHJvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpZERyb3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZGlkRHJvcCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEluaXRpYWxDbGllbnRPZmZzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEluaXRpYWxDbGllbnRPZmZzZXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U291cmNlQ2xpZW50T2Zmc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldFNvdXJjZUNsaWVudE9mZnNldCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENsaWVudE9mZnNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsaWVudE9mZnNldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRDbGllbnRPZmZzZXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNvdXJjZU1vbml0b3I7XG59KCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZU1vbml0b3IobWFuYWdlcikge1xuICByZXR1cm4gbmV3IFNvdXJjZU1vbml0b3IobWFuYWdlcik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9jcmVhdGVTb3VyY2VNb25pdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlU291cmNlQ29ubmVjdG9yO1xuXG52YXIgX3dyYXBDb25uZWN0b3JIb29rcyA9IHJlcXVpcmUoJy4vd3JhcENvbm5lY3Rvckhvb2tzJyk7XG5cbnZhciBfd3JhcENvbm5lY3Rvckhvb2tzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXBDb25uZWN0b3JIb29rcyk7XG5cbnZhciBfYXJlT3B0aW9uc0VxdWFsID0gcmVxdWlyZSgnLi9hcmVPcHRpb25zRXF1YWwnKTtcblxudmFyIF9hcmVPcHRpb25zRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJlT3B0aW9uc0VxdWFsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY3JlYXRlU291cmNlQ29ubmVjdG9yKGJhY2tlbmQpIHtcbiAgdmFyIGN1cnJlbnRIYW5kbGVySWQgPSB2b2lkIDA7XG5cbiAgdmFyIGN1cnJlbnREcmFnU291cmNlTm9kZSA9IHZvaWQgMDtcbiAgdmFyIGN1cnJlbnREcmFnU291cmNlT3B0aW9ucyA9IHZvaWQgMDtcbiAgdmFyIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZSA9IHZvaWQgMDtcblxuICB2YXIgY3VycmVudERyYWdQcmV2aWV3Tm9kZSA9IHZvaWQgMDtcbiAgdmFyIGN1cnJlbnREcmFnUHJldmlld09wdGlvbnMgPSB2b2lkIDA7XG4gIHZhciBkaXNjb25uZWN0Q3VycmVudERyYWdQcmV2aWV3ID0gdm9pZCAwO1xuXG4gIGZ1bmN0aW9uIHJlY29ubmVjdERyYWdTb3VyY2UoKSB7XG4gICAgaWYgKGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZSkge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlKCk7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdTb3VyY2UgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50SGFuZGxlcklkICYmIGN1cnJlbnREcmFnU291cmNlTm9kZSkge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlID0gYmFja2VuZC5jb25uZWN0RHJhZ1NvdXJjZShjdXJyZW50SGFuZGxlcklkLCBjdXJyZW50RHJhZ1NvdXJjZU5vZGUsIGN1cnJlbnREcmFnU291cmNlT3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjb25uZWN0RHJhZ1ByZXZpZXcoKSB7XG4gICAgaWYgKGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcoKTtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50SGFuZGxlcklkICYmIGN1cnJlbnREcmFnUHJldmlld05vZGUpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcgPSBiYWNrZW5kLmNvbm5lY3REcmFnUHJldmlldyhjdXJyZW50SGFuZGxlcklkLCBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlLCBjdXJyZW50RHJhZ1ByZXZpZXdPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlSGFuZGxlcklkKGhhbmRsZXJJZCkge1xuICAgIGlmIChoYW5kbGVySWQgPT09IGN1cnJlbnRIYW5kbGVySWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50SGFuZGxlcklkID0gaGFuZGxlcklkO1xuICAgIHJlY29ubmVjdERyYWdTb3VyY2UoKTtcbiAgICByZWNvbm5lY3REcmFnUHJldmlldygpO1xuICB9XG5cbiAgdmFyIGhvb2tzID0gKDAsIF93cmFwQ29ubmVjdG9ySG9va3MyLmRlZmF1bHQpKHtcbiAgICBkcmFnU291cmNlOiBmdW5jdGlvbiBjb25uZWN0RHJhZ1NvdXJjZShub2RlLCBvcHRpb25zKSB7XG4gICAgICBpZiAobm9kZSA9PT0gY3VycmVudERyYWdTb3VyY2VOb2RlICYmICgwLCBfYXJlT3B0aW9uc0VxdWFsMi5kZWZhdWx0KShvcHRpb25zLCBjdXJyZW50RHJhZ1NvdXJjZU9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY3VycmVudERyYWdTb3VyY2VOb2RlID0gbm9kZTtcbiAgICAgIGN1cnJlbnREcmFnU291cmNlT3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIHJlY29ubmVjdERyYWdTb3VyY2UoKTtcbiAgICB9LFxuXG4gICAgZHJhZ1ByZXZpZXc6IGZ1bmN0aW9uIGNvbm5lY3REcmFnUHJldmlldyhub2RlLCBvcHRpb25zKSB7XG4gICAgICBpZiAobm9kZSA9PT0gY3VycmVudERyYWdQcmV2aWV3Tm9kZSAmJiAoMCwgX2FyZU9wdGlvbnNFcXVhbDIuZGVmYXVsdCkob3B0aW9ucywgY3VycmVudERyYWdQcmV2aWV3T3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlID0gbm9kZTtcbiAgICAgIGN1cnJlbnREcmFnUHJldmlld09wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICByZWNvbm5lY3REcmFnUHJldmlldygpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICByZWNlaXZlSGFuZGxlcklkOiByZWNlaXZlSGFuZGxlcklkLFxuICAgIGhvb2tzOiBob29rc1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlQ29ubmVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2xvbmVXaXRoUmVmO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY2xvbmVXaXRoUmVmKGVsZW1lbnQsIG5ld1JlZikge1xuICB2YXIgcHJldmlvdXNSZWYgPSBlbGVtZW50LnJlZjtcbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHR5cGVvZiBwcmV2aW91c1JlZiAhPT0gJ3N0cmluZycsICdDYW5ub3QgY29ubmVjdCBSZWFjdCBEbkQgdG8gYW4gZWxlbWVudCB3aXRoIGFuIGV4aXN0aW5nIHN0cmluZyByZWYuICcgKyAnUGxlYXNlIGNvbnZlcnQgaXQgdG8gdXNlIGEgY2FsbGJhY2sgcmVmIGluc3RlYWQsIG9yIHdyYXAgaXQgaW50byBhIDxzcGFuPiBvciA8ZGl2Pi4gJyArICdSZWFkIG1vcmU6IGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvbW9yZS1hYm91dC1yZWZzLmh0bWwjdGhlLXJlZi1jYWxsYmFjay1hdHRyaWJ1dGUnKTtcblxuICBpZiAoIXByZXZpb3VzUmVmKSB7XG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyByZWYgb24gdGhlIGVsZW1lbnQsIHVzZSB0aGUgbmV3IHJlZiBkaXJlY3RseVxuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoZWxlbWVudCwge1xuICAgICAgcmVmOiBuZXdSZWZcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoZWxlbWVudCwge1xuICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgIG5ld1JlZihub2RlKTtcblxuICAgICAgaWYgKHByZXZpb3VzUmVmKSB7XG4gICAgICAgIHByZXZpb3VzUmVmKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi91dGlscy9jbG9uZVdpdGhSZWYuanNcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBEcm9wVGFyZ2V0O1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQbGFpbk9iamVjdCk7XG5cbnZhciBfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMgPSByZXF1aXJlKCcuL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzJyk7XG5cbnZhciBfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMpO1xuXG52YXIgX2RlY29yYXRlSGFuZGxlciA9IHJlcXVpcmUoJy4vZGVjb3JhdGVIYW5kbGVyJyk7XG5cbnZhciBfZGVjb3JhdGVIYW5kbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY29yYXRlSGFuZGxlcik7XG5cbnZhciBfcmVnaXN0ZXJUYXJnZXQgPSByZXF1aXJlKCcuL3JlZ2lzdGVyVGFyZ2V0Jyk7XG5cbnZhciBfcmVnaXN0ZXJUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVnaXN0ZXJUYXJnZXQpO1xuXG52YXIgX2NyZWF0ZVRhcmdldEZhY3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZVRhcmdldEZhY3RvcnknKTtcblxudmFyIF9jcmVhdGVUYXJnZXRGYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRhcmdldEZhY3RvcnkpO1xuXG52YXIgX2NyZWF0ZVRhcmdldE1vbml0b3IgPSByZXF1aXJlKCcuL2NyZWF0ZVRhcmdldE1vbml0b3InKTtcblxudmFyIF9jcmVhdGVUYXJnZXRNb25pdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRhcmdldE1vbml0b3IpO1xuXG52YXIgX2NyZWF0ZVRhcmdldENvbm5lY3RvciA9IHJlcXVpcmUoJy4vY3JlYXRlVGFyZ2V0Q29ubmVjdG9yJyk7XG5cbnZhciBfY3JlYXRlVGFyZ2V0Q29ubmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRhcmdldENvbm5lY3Rvcik7XG5cbnZhciBfaXNWYWxpZFR5cGUgPSByZXF1aXJlKCcuL3V0aWxzL2lzVmFsaWRUeXBlJyk7XG5cbnZhciBfaXNWYWxpZFR5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNWYWxpZFR5cGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBEcm9wVGFyZ2V0KHR5cGUsIHNwZWMsIGNvbGxlY3QpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXG4gIF9jaGVja0RlY29yYXRvckFyZ3VtZW50czIuZGVmYXVsdC5hcHBseSh1bmRlZmluZWQsIFsnRHJvcFRhcmdldCcsICd0eXBlLCBzcGVjLCBjb2xsZWN0Wywgb3B0aW9uc10nXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICB2YXIgZ2V0VHlwZSA9IHR5cGU7XG4gIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSgoMCwgX2lzVmFsaWRUeXBlMi5kZWZhdWx0KSh0eXBlLCB0cnVlKSwgJ0V4cGVjdGVkIFwidHlwZVwiIHByb3ZpZGVkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBEcm9wVGFyZ2V0IHRvIGJlICcgKyAnYSBzdHJpbmcsIGFuIGFycmF5IG9mIHN0cmluZ3MsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlciBnaXZlbiAnICsgJ3RoZSBjdXJyZW50IHByb3BzLiBJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCB0eXBlKTtcbiAgICBnZXRUeXBlID0gZnVuY3Rpb24gZ2V0VHlwZSgpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH07XG4gIH1cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkoc3BlYyksICdFeHBlY3RlZCBcInNwZWNcIiBwcm92aWRlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIERyb3BUYXJnZXQgdG8gYmUgJyArICdhIHBsYWluIG9iamVjdC4gSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgc3BlYyk7XG4gIHZhciBjcmVhdGVUYXJnZXQgPSAoMCwgX2NyZWF0ZVRhcmdldEZhY3RvcnkyLmRlZmF1bHQpKHNwZWMpO1xuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIGNvbGxlY3QgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBcImNvbGxlY3RcIiBwcm92aWRlZCBhcyB0aGUgdGhpcmQgYXJndW1lbnQgdG8gRHJvcFRhcmdldCB0byBiZSAnICsgJ2EgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IG9mIHByb3BzIHRvIGluamVjdC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBjb2xsZWN0KTtcbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkob3B0aW9ucyksICdFeHBlY3RlZCBcIm9wdGlvbnNcIiBwcm92aWRlZCBhcyB0aGUgZm91cnRoIGFyZ3VtZW50IHRvIERyb3BUYXJnZXQgdG8gYmUgJyArICdhIHBsYWluIG9iamVjdCB3aGVuIHNwZWNpZmllZC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBjb2xsZWN0KTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGVUYXJnZXQoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuICgwLCBfZGVjb3JhdGVIYW5kbGVyMi5kZWZhdWx0KSh7XG4gICAgICBjb25uZWN0QmFja2VuZDogZnVuY3Rpb24gY29ubmVjdEJhY2tlbmQoYmFja2VuZCwgdGFyZ2V0SWQpIHtcbiAgICAgICAgcmV0dXJuIGJhY2tlbmQuY29ubmVjdERyb3BUYXJnZXQodGFyZ2V0SWQpO1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckRpc3BsYXlOYW1lOiAnRHJvcFRhcmdldCcsXG4gICAgICBjcmVhdGVIYW5kbGVyOiBjcmVhdGVUYXJnZXQsXG4gICAgICByZWdpc3RlckhhbmRsZXI6IF9yZWdpc3RlclRhcmdldDIuZGVmYXVsdCxcbiAgICAgIGNyZWF0ZU1vbml0b3I6IF9jcmVhdGVUYXJnZXRNb25pdG9yMi5kZWZhdWx0LFxuICAgICAgY3JlYXRlQ29ubmVjdG9yOiBfY3JlYXRlVGFyZ2V0Q29ubmVjdG9yMi5kZWZhdWx0LFxuICAgICAgRGVjb3JhdGVkQ29tcG9uZW50OiBEZWNvcmF0ZWRDb21wb25lbnQsXG4gICAgICBnZXRUeXBlOiBnZXRUeXBlLFxuICAgICAgY29sbGVjdDogY29sbGVjdCxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9KTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0Ryb3BUYXJnZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlZ2lzdGVyVGFyZ2V0O1xuZnVuY3Rpb24gcmVnaXN0ZXJUYXJnZXQodHlwZSwgdGFyZ2V0LCBtYW5hZ2VyKSB7XG4gIHZhciByZWdpc3RyeSA9IG1hbmFnZXIuZ2V0UmVnaXN0cnkoKTtcbiAgdmFyIHRhcmdldElkID0gcmVnaXN0cnkuYWRkVGFyZ2V0KHR5cGUsIHRhcmdldCk7XG5cbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRhcmdldCgpIHtcbiAgICByZWdpc3RyeS5yZW1vdmVUYXJnZXQodGFyZ2V0SWQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVySWQ6IHRhcmdldElkLFxuICAgIHVucmVnaXN0ZXI6IHVucmVnaXN0ZXJUYXJnZXRcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3JlZ2lzdGVyVGFyZ2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUYXJnZXRGYWN0b3J5O1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQbGFpbk9iamVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBTExPV0VEX1NQRUNfTUVUSE9EUyA9IFsnY2FuRHJvcCcsICdob3ZlcicsICdkcm9wJ107XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhcmdldEZhY3Rvcnkoc3BlYykge1xuICBPYmplY3Qua2V5cyhzcGVjKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoQUxMT1dFRF9TUEVDX01FVEhPRFMuaW5kZXhPZihrZXkpID4gLTEsICdFeHBlY3RlZCB0aGUgZHJvcCB0YXJnZXQgc3BlY2lmaWNhdGlvbiB0byBvbmx5IGhhdmUgJyArICdzb21lIG9mIHRoZSBmb2xsb3dpbmcga2V5czogJXMuICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCBhbiB1bmV4cGVjdGVkIFwiJXNcIiBrZXkuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgQUxMT1dFRF9TUEVDX01FVEhPRFMuam9pbignLCAnKSwga2V5KTtcbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIHNwZWNba2V5XSA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkICVzIGluIHRoZSBkcm9wIHRhcmdldCBzcGVjaWZpY2F0aW9uIHRvIGJlIGEgZnVuY3Rpb24uICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCAlczogJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywga2V5LCBrZXksIHNwZWNba2V5XSk7XG4gIH0pO1xuXG4gIHZhciBUYXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGFyZ2V0KG1vbml0b3IpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYXJnZXQpO1xuXG4gICAgICB0aGlzLm1vbml0b3IgPSBtb25pdG9yO1xuICAgICAgdGhpcy5wcm9wcyA9IG51bGw7XG4gICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRhcmdldCwgW3tcbiAgICAgIGtleTogJ3JlY2VpdmVQcm9wcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZWNlaXZlTW9uaXRvcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVjZWl2ZU1vbml0b3IobW9uaXRvcikge1xuICAgICAgICB0aGlzLm1vbml0b3IgPSBtb25pdG9yO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlY2VpdmVDb21wb25lbnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlY2VpdmVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NhbkRyb3AnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhbkRyb3AoKSB7XG4gICAgICAgIGlmICghc3BlYy5jYW5Ecm9wKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BlYy5jYW5Ecm9wKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnaG92ZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhvdmVyKCkge1xuICAgICAgICBpZiAoIXNwZWMuaG92ZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzcGVjLmhvdmVyKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvciwgdGhpcy5jb21wb25lbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Ryb3AnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRyb3AoKSB7XG4gICAgICAgIGlmICghc3BlYy5kcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkcm9wUmVzdWx0ID0gc3BlYy5kcm9wKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvciwgdGhpcy5jb21wb25lbnQpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0eXBlb2YgZHJvcFJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcgfHwgKDAsIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KShkcm9wUmVzdWx0KSwgJ2Ryb3AoKSBtdXN0IGVpdGhlciByZXR1cm4gdW5kZWZpbmVkLCBvciBhbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBkcm9wIHJlc3VsdC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIGRyb3BSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkcm9wUmVzdWx0O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUYXJnZXQ7XG4gIH0oKTtcblxuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlVGFyZ2V0KG1vbml0b3IpIHtcbiAgICByZXR1cm4gbmV3IFRhcmdldChtb25pdG9yKTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldEZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDE1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVRhcmdldE1vbml0b3I7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBpc0NhbGxpbmdDYW5Ecm9wID0gZmFsc2U7XG5cbnZhciBUYXJnZXRNb25pdG9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUYXJnZXRNb25pdG9yKG1hbmFnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFyZ2V0TW9uaXRvcik7XG5cbiAgICB0aGlzLmludGVybmFsTW9uaXRvciA9IG1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRhcmdldE1vbml0b3IsIFt7XG4gICAga2V5OiAncmVjZWl2ZUhhbmRsZXJJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlY2VpdmVIYW5kbGVySWQodGFyZ2V0SWQpIHtcbiAgICAgIHRoaXMudGFyZ2V0SWQgPSB0YXJnZXRJZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYW5Ecm9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuRHJvcCgpIHtcbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSghaXNDYWxsaW5nQ2FuRHJvcCwgJ1lvdSBtYXkgbm90IGNhbGwgbW9uaXRvci5jYW5Ecm9wKCkgaW5zaWRlIHlvdXIgY2FuRHJvcCgpIGltcGxlbWVudGF0aW9uLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQtbW9uaXRvci5odG1sJyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlzQ2FsbGluZ0NhbkRyb3AgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuY2FuRHJvcE9uVGFyZ2V0KHRoaXMudGFyZ2V0SWQpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaXNDYWxsaW5nQ2FuRHJvcCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzT3ZlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzT3ZlcihvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuaXNPdmVyVGFyZ2V0KHRoaXMudGFyZ2V0SWQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEl0ZW1UeXBlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SXRlbVR5cGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SXRlbVR5cGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJdGVtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SXRlbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJdGVtKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RHJvcFJlc3VsdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERyb3BSZXN1bHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RpZERyb3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaWREcm9wKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmRpZERyb3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJbml0aWFsQ2xpZW50T2Zmc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbENsaWVudE9mZnNldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNvdXJjZUNsaWVudE9mZnNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRTb3VyY2VDbGllbnRPZmZzZXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDbGllbnRPZmZzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbGllbnRPZmZzZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0Q2xpZW50T2Zmc2V0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUYXJnZXRNb25pdG9yO1xufSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXJnZXRNb25pdG9yKG1hbmFnZXIpIHtcbiAgcmV0dXJuIG5ldyBUYXJnZXRNb25pdG9yKG1hbmFnZXIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0TW9uaXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVRhcmdldENvbm5lY3RvcjtcblxudmFyIF93cmFwQ29ubmVjdG9ySG9va3MgPSByZXF1aXJlKCcuL3dyYXBDb25uZWN0b3JIb29rcycpO1xuXG52YXIgX3dyYXBDb25uZWN0b3JIb29rczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cmFwQ29ubmVjdG9ySG9va3MpO1xuXG52YXIgX2FyZU9wdGlvbnNFcXVhbCA9IHJlcXVpcmUoJy4vYXJlT3B0aW9uc0VxdWFsJyk7XG5cbnZhciBfYXJlT3B0aW9uc0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyZU9wdGlvbnNFcXVhbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhcmdldENvbm5lY3RvcihiYWNrZW5kKSB7XG4gIHZhciBjdXJyZW50SGFuZGxlcklkID0gdm9pZCAwO1xuXG4gIHZhciBjdXJyZW50RHJvcFRhcmdldE5vZGUgPSB2b2lkIDA7XG4gIHZhciBjdXJyZW50RHJvcFRhcmdldE9wdGlvbnMgPSB2b2lkIDA7XG4gIHZhciBkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQgPSB2b2lkIDA7XG5cbiAgZnVuY3Rpb24gcmVjb25uZWN0RHJvcFRhcmdldCgpIHtcbiAgICBpZiAoZGlzY29ubmVjdEN1cnJlbnREcm9wVGFyZ2V0KSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQoKTtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRIYW5kbGVySWQgJiYgY3VycmVudERyb3BUYXJnZXROb2RlKSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQgPSBiYWNrZW5kLmNvbm5lY3REcm9wVGFyZ2V0KGN1cnJlbnRIYW5kbGVySWQsIGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSwgY3VycmVudERyb3BUYXJnZXRPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlSGFuZGxlcklkKGhhbmRsZXJJZCkge1xuICAgIGlmIChoYW5kbGVySWQgPT09IGN1cnJlbnRIYW5kbGVySWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50SGFuZGxlcklkID0gaGFuZGxlcklkO1xuICAgIHJlY29ubmVjdERyb3BUYXJnZXQoKTtcbiAgfVxuXG4gIHZhciBob29rcyA9ICgwLCBfd3JhcENvbm5lY3Rvckhvb2tzMi5kZWZhdWx0KSh7XG4gICAgZHJvcFRhcmdldDogZnVuY3Rpb24gY29ubmVjdERyb3BUYXJnZXQobm9kZSwgb3B0aW9ucykge1xuICAgICAgaWYgKG5vZGUgPT09IGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSAmJiAoMCwgX2FyZU9wdGlvbnNFcXVhbDIuZGVmYXVsdCkob3B0aW9ucywgY3VycmVudERyb3BUYXJnZXRPcHRpb25zKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSA9IG5vZGU7XG4gICAgICBjdXJyZW50RHJvcFRhcmdldE9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICByZWNvbm5lY3REcm9wVGFyZ2V0KCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHJlY2VpdmVIYW5kbGVySWQ6IHJlY2VpdmVIYW5kbGVySWQsXG4gICAgaG9va3M6IGhvb2tzXG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9jcmVhdGVUYXJnZXRDb25uZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vIEluYy5cclxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXHJcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlRvdWNoQmFja2VuZCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlVG91Y2hCYWNrZW5kO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBnZXRFdmVudENsaWVudFRvdWNoT2Zmc2V0KGUpIHtcbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZS50YXJnZXRUb3VjaGVzWzBdKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50Q2xpZW50T2Zmc2V0KGUpIHtcbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzKSB7XG4gICAgICAgIHJldHVybiBnZXRFdmVudENsaWVudFRvdWNoT2Zmc2V0KGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBlLmNsaWVudFgsXG4gICAgICAgICAgICB5OiBlLmNsaWVudFlcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8vIFBvbHlmaWxsIGZvciBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludFxudmFyIGVsZW1lbnRzRnJvbVBvaW50ID0gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQgfHwgZnVuY3Rpb24gKHgsIHkpIHtcblxuICAgIGlmIChkb2N1bWVudC5tc0VsZW1lbnRzRnJvbVBvaW50KSB7XG4gICAgICAgIC8vIG1zRWxlbWVudHNGcm9tUG9pbnQgaXMgbXVjaCBmYXN0ZXIgYnV0IHJldHVybnMgYSBub2RlLWxpc3QsIHNvIGNvbnZlcnQgaXQgdG8gYW4gYXJyYXlcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50Lm1zRWxlbWVudHNGcm9tUG9pbnQoeCwgeSksIDApO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgICBwcmV2aW91c1BvaW50ZXJFdmVudHMgPSBbXSxcbiAgICAgICAgY3VycmVudCxcbiAgICAgICAgaSxcbiAgICAgICAgZDtcblxuICAgIC8vIGdldCBhbGwgZWxlbWVudHMgdmlhIGVsZW1lbnRGcm9tUG9pbnQsIGFuZCByZW1vdmUgdGhlbSBmcm9tIGhpdC10ZXN0aW5nIGluIG9yZGVyXG4gICAgd2hpbGUgKChjdXJyZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KSkgJiYgZWxlbWVudHMuaW5kZXhPZihjdXJyZW50KSA9PT0gLTEgJiYgY3VycmVudCAhPT0gbnVsbCkge1xuXG4gICAgICAgIC8vIHB1c2ggdGhlIGVsZW1lbnQgYW5kIGl0cyBjdXJyZW50IHN0eWxlXG4gICAgICAgIGVsZW1lbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgIHByZXZpb3VzUG9pbnRlckV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlOiBjdXJyZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BvaW50ZXItZXZlbnRzJyksXG4gICAgICAgICAgICBwcmlvcml0eTogY3VycmVudC5zdHlsZS5nZXRQcm9wZXJ0eVByaW9yaXR5KCdwb2ludGVyLWV2ZW50cycpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZCBcInBvaW50ZXItZXZlbnRzOiBub25lXCIsIHRvIGdldCB0byB0aGUgdW5kZXJseWluZyBlbGVtZW50XG4gICAgICAgIGN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnLCAnaW1wb3J0YW50Jyk7XG4gICAgfVxuXG4gICAgLy8gcmVzdG9yZSB0aGUgcHJldmlvdXMgcG9pbnRlci1ldmVudHMgdmFsdWVzXG4gICAgZm9yIChpID0gcHJldmlvdXNQb2ludGVyRXZlbnRzLmxlbmd0aDsgZCA9IHByZXZpb3VzUG9pbnRlckV2ZW50c1stLWldOykge1xuICAgICAgICBlbGVtZW50c1tpXS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnLCBkLnZhbHVlID8gZC52YWx1ZSA6ICcnLCBkLnByaW9yaXR5KTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gb3VyIHJlc3VsdHNcbiAgICByZXR1cm4gZWxlbWVudHM7XG59KS5iaW5kKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IG51bGwpO1xuXG52YXIgc3VwcG9ydHNQYXNzaXZlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHNpbXVsYXIgdG8galF1ZXJ5J3MgdGVzdFxuICAgIHZhciBzdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBzdXBwb3J0ZWQ7XG59KCk7XG5cbnZhciBFTEVNRU5UX05PREUgPSAxO1xuZnVuY3Rpb24gZ2V0Tm9kZUNsaWVudE9mZnNldChub2RlKSB7XG4gICAgdmFyIGVsID0gbm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFID8gbm9kZSA6IG5vZGUucGFyZW50RWxlbWVudDtcblxuICAgIGlmICghZWwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF9lbCRnZXRCb3VuZGluZ0NsaWVudCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB0b3AgPSBfZWwkZ2V0Qm91bmRpbmdDbGllbnQudG9wLFxuICAgICAgICBsZWZ0ID0gX2VsJGdldEJvdW5kaW5nQ2xpZW50LmxlZnQ7XG5cbiAgICByZXR1cm4geyB4OiBsZWZ0LCB5OiB0b3AgfTtcbn1cblxudmFyIGV2ZW50TmFtZXMgPSB7XG4gICAgbW91c2U6IHtcbiAgICAgICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgICAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICAgICAgZW5kOiAnbW91c2V1cCcsXG4gICAgICAgIGNvbnRleHRtZW51OiAnY29udGV4dG1lbnUnXG4gICAgfSxcbiAgICB0b3VjaDoge1xuICAgICAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgICAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICAgICAgZW5kOiAndG91Y2hlbmQnXG4gICAgfSxcbiAgICBrZXlib2FyZDoge1xuICAgICAgICBrZXlkb3duOiAna2V5ZG93bidcbiAgICB9XG59O1xuXG52YXIgVG91Y2hCYWNrZW5kID0gZXhwb3J0cy5Ub3VjaEJhY2tlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG91Y2hCYWNrZW5kKG1hbmFnZXIpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb3VjaEJhY2tlbmQpO1xuXG4gICAgICAgIG9wdGlvbnMuZGVsYXlUb3VjaFN0YXJ0ID0gb3B0aW9ucy5kZWxheVRvdWNoU3RhcnQgfHwgb3B0aW9ucy5kZWxheTtcblxuICAgICAgICBvcHRpb25zID0gX2V4dGVuZHMoe1xuICAgICAgICAgICAgZW5hYmxlVG91Y2hFdmVudHM6IHRydWUsXG4gICAgICAgICAgICBlbmFibGVNb3VzZUV2ZW50czogZmFsc2UsXG4gICAgICAgICAgICBlbmFibGVLZXlib2FyZEV2ZW50czogZmFsc2UsXG4gICAgICAgICAgICBkZWxheVRvdWNoU3RhcnQ6IDAsXG4gICAgICAgICAgICBkZWxheU1vdXNlU3RhcnQ6IDBcbiAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5hY3Rpb25zID0gbWFuYWdlci5nZXRBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMubW9uaXRvciA9IG1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgICB0aGlzLnJlZ2lzdHJ5ID0gbWFuYWdlci5nZXRSZWdpc3RyeSgpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlS2V5Ym9hcmRFdmVudHMgPSBvcHRpb25zLmVuYWJsZUtleWJvYXJkRXZlbnRzO1xuICAgICAgICB0aGlzLmVuYWJsZU1vdXNlRXZlbnRzID0gb3B0aW9ucy5lbmFibGVNb3VzZUV2ZW50cztcbiAgICAgICAgdGhpcy5kZWxheVRvdWNoU3RhcnQgPSBvcHRpb25zLmRlbGF5VG91Y2hTdGFydDtcbiAgICAgICAgdGhpcy5kZWxheU1vdXNlU3RhcnQgPSBvcHRpb25zLmRlbGF5TW91c2VTdGFydDtcbiAgICAgICAgdGhpcy5zb3VyY2VOb2RlcyA9IHt9O1xuICAgICAgICB0aGlzLnNvdXJjZU5vZGVPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVzID0ge307XG4gICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMudGFyZ2V0Tm9kZXMgPSB7fTtcbiAgICAgICAgdGhpcy50YXJnZXROb2RlT3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSB7fTtcblxuICAgICAgICBpZiAob3B0aW9ucy5lbmFibGVNb3VzZUV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLnB1c2goJ21vdXNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5lbmFibGVUb3VjaEV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLnB1c2goJ3RvdWNoJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5lbmFibGVLZXlib2FyZEV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLnB1c2goJ2tleWJvYXJkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldFNvdXJjZUNsaWVudE9mZnNldCA9IHRoaXMuZ2V0U291cmNlQ2xpZW50T2Zmc2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0ID0gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnREZWxheSA9IHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlID0gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZUNhcHR1cmUgPSB0aGlzLmhhbmRsZVRvcE1vdmVDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZSA9IHRoaXMuaGFuZGxlVG9wTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlID0gdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNhbmNlbE9uRXNjYXBlID0gdGhpcy5oYW5kbGVDYW5jZWxPbkVzY2FwZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUb3VjaEJhY2tlbmQsIFt7XG4gICAgICAgIGtleTogJ3NldHVwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoIXRoaXMuY29uc3RydWN0b3IuaXNTZXRVcCwgJ0Nhbm5vdCBoYXZlIHR3byBUb3VjaCBiYWNrZW5kcyBhdCB0aGUgc2FtZSB0aW1lLicpO1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5pc1NldFVwID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3N0YXJ0JywgdGhpcy5nZXRUb3BNb3ZlU3RhcnRIYW5kbGVyKCkpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3N0YXJ0JywgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdtb3ZlJywgdGhpcy5oYW5kbGVUb3BNb3ZlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdtb3ZlJywgdGhpcy5oYW5kbGVUb3BNb3ZlQ2FwdHVyZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnZW5kJywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZU1vdXNlRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2NvbnRleHRtZW51JywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZUtleWJvYXJkRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2tleWRvd24nLCB0aGlzLmhhbmRsZUNhbmNlbE9uRXNjYXBlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndGVhcmRvd24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdGVhcmRvd24oKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuaXNTZXRVcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSB7fTtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3N0YXJ0JywgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdzdGFydCcsIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdtb3ZlJywgdGhpcy5oYW5kbGVUb3BNb3ZlQ2FwdHVyZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnbW92ZScsIHRoaXMuaGFuZGxlVG9wTW92ZSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnZW5kJywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZU1vdXNlRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ2NvbnRleHRtZW51JywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZUtleWJvYXJkRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ2tleWRvd24nLCB0aGlzLmhhbmRsZUNhbmNlbE9uRXNjYXBlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEV2ZW50TGlzdGVuZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihzdWJqZWN0LCBldmVudCwgaGFuZGxlciwgY2FwdHVyZSkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IGNhcHR1cmU6IGNhcHR1cmUsIHBhc3NpdmU6IGZhbHNlIH0gOiBjYXB0dXJlO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgc3ViamVjdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZXNbbGlzdGVuZXJUeXBlXVtldmVudF0sIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUV2ZW50TGlzdGVuZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihzdWJqZWN0LCBldmVudCwgaGFuZGxlciwgY2FwdHVyZSkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IGNhcHR1cmU6IGNhcHR1cmUsIHBhc3NpdmU6IGZhbHNlIH0gOiBjYXB0dXJlO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgc3ViamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZXNbbGlzdGVuZXJUeXBlXVtldmVudF0sIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nvbm5lY3REcmFnU291cmNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3REcmFnU291cmNlKHNvdXJjZUlkLCBub2RlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgaGFuZGxlTW92ZVN0YXJ0ID0gdGhpcy5oYW5kbGVNb3ZlU3RhcnQuYmluZCh0aGlzLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZU5vZGVzW3NvdXJjZUlkXSA9IG5vZGU7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihub2RlLCAnc3RhcnQnLCBoYW5kbGVNb3ZlU3RhcnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5zb3VyY2VOb2Rlc1tzb3VyY2VJZF07XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCAnc3RhcnQnLCBoYW5kbGVNb3ZlU3RhcnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29ubmVjdERyYWdQcmV2aWV3JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3REcmFnUHJldmlldyhzb3VyY2VJZCwgbm9kZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVPcHRpb25zW3NvdXJjZUlkXSA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVByZXZpZXdOb2Rlc1tzb3VyY2VJZF0gPSBub2RlO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczIuc291cmNlUHJldmlld05vZGVzW3NvdXJjZUlkXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMyLnNvdXJjZVByZXZpZXdOb2RlT3B0aW9uc1tzb3VyY2VJZF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb25uZWN0RHJvcFRhcmdldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0RHJvcFRhcmdldCh0YXJnZXRJZCwgbm9kZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBoYW5kbGVNb3ZlID0gZnVuY3Rpb24gaGFuZGxlTW92ZShlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogR3JhYiB0aGUgY29vcmRpbmF0ZXMgZm9yIHRoZSBjdXJyZW50IG1vdXNlL3RvdWNoIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGV2ZW50TmFtZXMubW91c2UubW92ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkcyA9IHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgZXZlbnROYW1lcy50b3VjaC5tb3ZlOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzID0geyB4OiBlLnRvdWNoZXNbMF0uY2xpZW50WCwgeTogZS50b3VjaGVzWzBdLmNsaWVudFkgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVXNlIHRoZSBjb29yZGluYXRlcyB0byBncmFiIHRoZSBlbGVtZW50IHRoZSBkcmFnIGVuZGVkIG9uLlxyXG4gICAgICAgICAgICAgICAgICogSWYgdGhlIGVsZW1lbnQgaXMgdGhlIHNhbWUgYXMgdGhlIHRhcmdldCBub2RlIChvciBhbnkgb2YgaXQncyBjaGlsZHJlbikgdGhlbiB3ZSBoYXZlIGhpdCBhIGRyb3AgdGFyZ2V0IGFuZCBjYW4gaGFuZGxlIHRoZSBtb3ZlLlxyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIGRyb3BwZWRPbiA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoY29vcmRzLngsIGNvb3Jkcy55KTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRNYXRjaCA9IG5vZGUuY29udGFpbnMoZHJvcHBlZE9uKTtcblxuICAgICAgICAgICAgICAgIGlmIChkcm9wcGVkT24gPT09IG5vZGUgfHwgY2hpbGRNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLmhhbmRsZU1vdmUoZSwgdGFyZ2V0SWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBdHRhY2hpbmcgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBib2R5IHNvIHRoYXQgdG91Y2htb3ZlIHdpbGwgd29yayB3aGlsZSBkcmFnZ2luZyBvdmVyIG11bHRpcGxlIHRhcmdldCBlbGVtZW50cy5cclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCAnbW92ZScsIGhhbmRsZU1vdmUpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXROb2Rlc1t0YXJnZXRJZF0gPSBub2RlO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczMudGFyZ2V0Tm9kZXNbdGFyZ2V0SWRdO1xuICAgICAgICAgICAgICAgIF90aGlzMy5yZW1vdmVFdmVudExpc3RlbmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ21vdmUnLCBoYW5kbGVNb3ZlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFNvdXJjZUNsaWVudE9mZnNldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb3VyY2VDbGllbnRPZmZzZXQoc291cmNlSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXROb2RlQ2xpZW50T2Zmc2V0KHRoaXMuc291cmNlTm9kZXNbc291cmNlSWRdKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZVN0YXJ0Q2FwdHVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlKGUpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzID0gW107XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZU1vdmVTdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3ZlU3RhcnQoc291cmNlSWQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzLnVuc2hpZnQoc291cmNlSWQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRUb3BNb3ZlU3RhcnRIYW5kbGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRvcE1vdmVTdGFydEhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVsYXlUb3VjaFN0YXJ0ICYmICF0aGlzLmRlbGF5TW91c2VTdGFydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVTdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlU3RhcnQoZSkge1xuICAgICAgICAgICAgLy8gRG9uJ3QgcHJlbWF0dXJlbHkgcHJldmVudERlZmF1bHQoKSBoZXJlIHNpbmNlIGl0IG1pZ2h0OlxuICAgICAgICAgICAgLy8gMS4gTWVzcyB1cCBzY3JvbGxpbmdcbiAgICAgICAgICAgIC8vIDIuIE1lc3MgdXAgbG9uZyB0YXAgKHdoaWNoIGJyaW5ncyB1cCBjb250ZXh0IG1lbnUpXG4gICAgICAgICAgICAvLyAzLiBJZiB0aGVyZSdzIGFuIGFuY2hvciBsaW5rIGFzIGEgY2hpbGQsIHRhcCB3b24ndCBiZSB0cmlnZ2VyZWQgb24gbGlua1xuXG4gICAgICAgICAgICB2YXIgY2xpZW50T2Zmc2V0ID0gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZSk7XG4gICAgICAgICAgICBpZiAoY2xpZW50T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSBjbGllbnRPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVTdGFydERlbGF5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVTdGFydERlbGF5KGUpIHtcbiAgICAgICAgICAgIHZhciBkZWxheSA9IGUudHlwZSA9PT0gZXZlbnROYW1lcy50b3VjaC5zdGFydCA/IHRoaXMuZGVsYXlUb3VjaFN0YXJ0IDogdGhpcy5kZWxheU1vdXNlU3RhcnQ7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0LmJpbmQodGhpcywgZSksIGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZUNhcHR1cmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG9wTW92ZUNhcHR1cmUoZSkge1xuICAgICAgICAgICAgdGhpcy5kcmFnT3ZlclRhcmdldElkcyA9IFtdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVNb3ZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdmUoZSwgdGFyZ2V0SWQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJUYXJnZXRJZHMudW5zaGlmdCh0YXJnZXRJZCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG9wTW92ZShlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICAgICAgICAgIHZhciBtb3ZlU3RhcnRTb3VyY2VJZHMgPSB0aGlzLm1vdmVTdGFydFNvdXJjZUlkcyxcbiAgICAgICAgICAgICAgICBkcmFnT3ZlclRhcmdldElkcyA9IHRoaXMuZHJhZ092ZXJUYXJnZXRJZHM7XG5cbiAgICAgICAgICAgIHZhciBjbGllbnRPZmZzZXQgPSBnZXRFdmVudENsaWVudE9mZnNldChlKTtcblxuICAgICAgICAgICAgaWYgKCFjbGllbnRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIG5vdCBkcmFnZ2luZyBhbmQgd2UndmUgbW92ZWQgYSBsaXR0bGUsIHRoYXQgY291bnRzIGFzIGEgZHJhZyBzdGFydFxuICAgICAgICAgICAgaWYgKCF0aGlzLm1vbml0b3IuaXNEcmFnZ2luZygpICYmIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0Lmhhc093blByb3BlcnR5KCd4JykgJiYgbW92ZVN0YXJ0U291cmNlSWRzICYmICh0aGlzLl9tb3VzZUNsaWVudE9mZnNldC54ICE9PSBjbGllbnRPZmZzZXQueCB8fCB0aGlzLl9tb3VzZUNsaWVudE9mZnNldC55ICE9PSBjbGllbnRPZmZzZXQueSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTdGFydFNvdXJjZUlkcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmJlZ2luRHJhZyhtb3ZlU3RhcnRTb3VyY2VJZHMsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50T2Zmc2V0OiB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgZ2V0U291cmNlQ2xpZW50T2Zmc2V0OiB0aGlzLmdldFNvdXJjZUNsaWVudE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgcHVibGlzaFNvdXJjZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLm1vbml0b3IuaXNEcmFnZ2luZygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc291cmNlTm9kZSA9IHRoaXMuc291cmNlTm9kZXNbdGhpcy5tb25pdG9yLmdldFNvdXJjZUlkKCldO1xuICAgICAgICAgICAgdGhpcy5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcihzb3VyY2VOb2RlKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdWJsaXNoRHJhZ1NvdXJjZSgpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgbm9kZSBlbGVtZW50cyBvZiB0aGUgaG92ZXJlZCBEcm9wVGFyZ2V0c1xuICAgICAgICAgICAgdmFyIGRyYWdPdmVyVGFyZ2V0Tm9kZXMgPSBkcmFnT3ZlclRhcmdldElkcy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQudGFyZ2V0Tm9kZXNba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBhIG9yZGVyZWQgbGlzdCBvZiBub2RlcyB0aGF0IGFyZSB0b3VjaGVkIGJ5XG4gICAgICAgICAgICB2YXIgZWxlbWVudHNBdFBvaW50ID0gZWxlbWVudHNGcm9tUG9pbnQoY2xpZW50T2Zmc2V0LngsIGNsaWVudE9mZnNldC55KTtcbiAgICAgICAgICAgIHZhciBvcmRlcmVkRHJhZ092ZXJUYXJnZXRJZHMgPSBlbGVtZW50c0F0UG9pbnRcbiAgICAgICAgICAgIC8vIEZpbHRlciBvZmYgbm9kZXMgdGhhdCBhcmVudCBhIGhvdmVyZWQgRHJvcFRhcmdldHMgbm9kZXNcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZHJhZ092ZXJUYXJnZXROb2Rlcy5pbmRleE9mKG5vZGUpID4gLTE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gTWFwIGJhY2sgdGhlIG5vZGVzIGVsZW1lbnRzIHRvIHRhcmdldElkc1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHRhcmdldElkIGluIF90aGlzNC50YXJnZXROb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gX3RoaXM0LnRhcmdldE5vZGVzW3RhcmdldElkXSkgcmV0dXJuIHRhcmdldElkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBGaWx0ZXIgb2ZmIHBvc3NpYmxlIG51bGwgcm93c1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIW5vZGU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmV2ZXJzZSBvcmRlciBiZWNhdXNlIGRuZC1jb3JlIHJldmVyc2UgaXQgYmVmb3JlIGNhbGxpbmcgdGhlIERyb3BUYXJnZXQgZHJvcCBtZXRob2RzXG4gICAgICAgICAgICBvcmRlcmVkRHJhZ092ZXJUYXJnZXRJZHMucmV2ZXJzZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuaG92ZXIob3JkZXJlZERyYWdPdmVyVGFyZ2V0SWRzLCB7XG4gICAgICAgICAgICAgICAgY2xpZW50T2Zmc2V0OiBjbGllbnRPZmZzZXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZShlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW9uaXRvci5pc0RyYWdnaW5nKCkgfHwgdGhpcy5tb25pdG9yLmRpZERyb3AoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSB7fTtcblxuICAgICAgICAgICAgdGhpcy51bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuZHJvcCgpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmVuZERyYWcoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlQ2FuY2VsT25Fc2NhcGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2FuY2VsT25Fc2NhcGUoZSkge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0ID0ge307XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMuZW5kRHJhZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVPbkNvbnRleHRNZW51JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU9uQ29udGV4dE1lbnUoKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVTdGFydFNvdXJjZUlkcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2luc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyID0gbmV3IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczUucmVzdXJyZWN0U291cmNlTm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczUudW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlci5vYnNlcnZlKG5vZGUucGFyZW50RWxlbWVudCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jlc3VycmVjdFNvdXJjZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzdXJyZWN0U291cmNlTm9kZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXJlYWN0aWQnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kcmFnZ2VkU291cmNlTm9kZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVG91Y2hCYWNrZW5kO1xufSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVUb3VjaEJhY2tlbmQoKSB7XG4gICAgdmFyIG9wdGlvbnNPck1hbmFnZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgdmFyIHRvdWNoQmFja2VuZEZhY3RvcnkgPSBmdW5jdGlvbiB0b3VjaEJhY2tlbmRGYWN0b3J5KG1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUb3VjaEJhY2tlbmQobWFuYWdlciwgb3B0aW9uc09yTWFuYWdlcik7XG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zT3JNYW5hZ2VyLmdldE1vbml0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRvdWNoQmFja2VuZEZhY3Rvcnkob3B0aW9uc09yTWFuYWdlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRvdWNoQmFja2VuZEZhY3Rvcnk7XG4gICAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC10b3VjaC1iYWNrZW5kL2Rpc3QvVG91Y2guanNcbi8vIG1vZHVsZSBpZCA9IDE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQvbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmFnTGF5ZXIgZnJvbSAncmVhY3QtZG5kL2xpYi9EcmFnTGF5ZXInO1xuaW1wb3J0IEV2ZW50QmFzZSBmcm9tICcuL0V2ZW50QmFzZSc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuXG5mdW5jdGlvbiBjb2xsZWN0IChtb25pdG9yKXtcbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgY2xpZW50T2Zmc2V0OiBtb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpXG4gIH07XG5cbiAgY29uc3QgaXRlbSA9IG1vbml0b3IuZ2V0SXRlbSgpO1xuICBpZihpdGVtICYmIGl0ZW1bJ2RyYWdnaW5nQ29tcG9uZW50J10pe1xuICAgIHByb3BzWydkcmFnZ2luZ0NvbXBvbmVudCddID0gaXRlbVsnZHJhZ2dpbmdDb21wb25lbnQnXTtcbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn1cblxuY2xhc3MgRXZlbnRQcmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZ2V0SXRlbVN0eWxlcyAoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmNsaWVudE9mZnNldCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLmNsaWVudE9mZnNldC54O1xuICAgIGNvbnN0IHkgPSB0aGlzLnByb3BzLmNsaWVudE9mZnNldC55O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcblxuICAgIHJldHVybiBhc3NpZ24odGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudC5nZXREcmFnZ2luZ1N0eWxlKCksIHtcbiAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCBkcmFnZ2luZ0Rpc3BsYXkgPSAnJztcbiAgICBpZih0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50ICYmIHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5KXtcbiAgICAgIGRyYWdnaW5nRGlzcGxheSA9IHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5O1xuICAgIH1cblxuICAgIGxldCBkaXNwbGF5ID0gW107XG4gICAgaWYodGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudCAmJiB0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50LnN0YXRlLmRpc3BsYXkpe1xuICAgICAgZGlzcGxheSA9IHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQuc3RhdGUuZGlzcGxheTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwicHJldmlld1wiIGNsYXNzTmFtZT1cInRsRXZlbnRWaWV3IHRsRHJhZ2dpbmdFdmVudFwiIHN0eWxlPXt0aGlzLmdldEl0ZW1TdHlsZXMoKX0+XG4gICAgICAgIDxFdmVudEJhc2VcbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk9e2RyYWdnaW5nRGlzcGxheX1cbiAgICAgICAgICBkaXNwbGF5PXtkaXNwbGF5fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnTGF5ZXIoY29sbGVjdCkoRXZlbnRQcmV2aWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0V2ZW50UHJldmlldy5qc3giLCJleHBvcnQgZnVuY3Rpb24gY2xvc2VzdChlbGVtLCBzZWxlY3Rvcikge1xuICB2YXIgbWF0Y2hlc0ZuO1xuXG4gIC8vIGZpbmQgdmVuZG9yIHByZWZpeFxuICBbJ21hdGNoZXMnLCd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLCdtb3pNYXRjaGVzU2VsZWN0b3InLCdtc01hdGNoZXNTZWxlY3RvcicsJ29NYXRjaGVzU2VsZWN0b3InXS5zb21lKGZ1bmN0aW9uKGZuKSB7XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHlbZm5dID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBtYXRjaGVzRm4gPSBmbjtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfSlcblxuICB2YXIgcGFyZW50O1xuXG4gIC8vIHRyYXZlcnNlIHBhcmVudHNcbiAgd2hpbGUgKGVsZW0pIHtcbiAgICAgIHBhcmVudCA9IGVsZW0ucGFyZW50RWxlbWVudDtcbiAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50W21hdGNoZXNGbl0oc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH1cbiAgICAgIGVsZW0gPSBwYXJlbnQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuZXM2IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IHtEcmFnU291cmNlfSBmcm9tICdyZWFjdC1kbmQnO1xuaW1wb3J0IEV2ZW50QmFzZSBmcm9tICcuL0V2ZW50QmFzZSc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9UaW1lbGluZSc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5cbmNvbnN0IHNvdXJjZSA9IHtcbiAgYmVnaW5EcmFnOiBmdW5jdGlvbiAocHJvcHMsIG1vbml0b3IsIGNvbXBvbmVudCkge1xuICAgIHJldHVybiBhc3NpZ24oe30sIHByb3BzLCB7ZHJhZ2dpbmdDb21wb25lbnQ6IGNvbXBvbmVudH0pO1xuICB9LFxuICBjYW5EcmFnOiBmdW5jdGlvbihwcm9wcywgbW9uaXRvciwgY29tcG9uZW50KXtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBwcm9wcy50aW1lbGluZS5maW5kRXZlbnRCeUlkKHByb3BzLmlkKS5zdGF0ZS5kcmFnZ2FibGU7XG4gICAgcmV0dXJuICEhZHJhZ2dhYmxlO1xuICB9XG59XG5cbmNvbnN0IGNvbGxlY3QgPSAoY29ubmVjdCwgbW9uaXRvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbm5lY3REcmFnU291cmNlOiBjb25uZWN0LmRyYWdTb3VyY2UoKSxcbiAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKVxuICB9O1xufVxuXG5jbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b3A6IHByb3BzLmZsb2F0ID09PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh0aGlzLnByb3BzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSA6IHByb3BzLmZsb2F0LnRvcCxcbiAgICAgIGxlZnQ6IHByb3BzLmZsb2F0ID09PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzLnRpbWVsaW5lLmdldExpbmVMZWZ0KHRoaXMucHJvcHMubGluZUlkKSA6IHByb3BzLmZsb2F0LmxlZnQsXG4gICAgICBjb2xvcjogdGhpcy5wcm9wcy5jb2xvcixcbiAgICAgIGRyYWdnYWJsZTogcHJvcHMuZmxvYXQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogdHJ1ZSxcbiAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnLFxuICAgICAgZGlzcGxheTogcHJvcHMuZGlzcGxheSxcbiAgICB9XG5cbiAgICB0aGlzLmxpbmVJZCA9IHRoaXMucHJvcHMubGluZUlkO1xuICAgIHRoaXMudGltZVNwYW4gPSB0aGlzLnByb3BzLnRpbWVTcGFuO1xuICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbiA9IG51bGw7XG4gICAgdGhpcy5yZXNpemluZ1RpbWVTcGFuID0gbnVsbDtcbiAgICB0aGlzLnJlc2l6aW5nID0gZmFsc2U7XG4gICAgdGhpcy52YXJzID0gdGhpcy5wcm9wcy52YXJzID8gdGhpcy5wcm9wcy52YXJzIDoge307XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcblxuICAgIGlmKHRoaXMucHJvcHMuZmxvYXQpe1xuICAgICAgY29uc3QgbGluZUlkID0gdGhpcy5wcm9wcy50aW1lbGluZS5maW5kTGluZUJ5TGVmdCh0aGlzLnN0YXRlLmxlZnQpLnByb3BzLmlkO1xuICAgICAgY29uc3QgdGltZSA9IHRoaXMucHJvcHMudGltZWxpbmUudG9wVG9UaW1lKHRoaXMuc3RhdGUudG9wKTtcbiAgICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbiA9IHt0aW1lOiB0aW1lLCBsaW5lSWQ6IGxpbmVJZH07XG4gICAgICB0aGlzLnN0YXRlLmRyYWdnaW5nRGlzcGxheSA9IHRpbWUuZ2V0RGlzcGxheVRpbWUoKTtcbiAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0ID0gdGhpcy5wcm9wcy50aW1lbGluZS5taW51dGVUb0hlaWdodCh0aGlzLnByb3BzLmZsb2F0Lm1pbnV0ZSk7XG4gICAgICB0aGlzLnRpbWVTcGFuID0gbmV3IFRpbWVTcGFuKHRpbWUsIHRpbWUuYWRkTWluKHRoaXMucHJvcHMuZmxvYXQubWludXRlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0ID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KHRoaXMudGltZVNwYW4pO1xuICAgIH1cbiAgfVxuXG4gIHRvSnNvbigpe1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGxpbmVJZDogdGhpcy5saW5lSWQsXG4gICAgICB0aW1lU3BhbjogdGhpcy50aW1lU3BhbixcbiAgICAgIHZhcnM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy52YXJzKSksXG4gICAgICBjb2xvcjogdGhpcy5zdGF0ZS5jb2xvcixcbiAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuZGlzcGxheSxcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3AsXG4gICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUodmFsdWVzKXtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHt9O1xuICAgIGlmKHZhbHVlcy50aW1lU3Bhbil7XG4gICAgICBuZXdTdGF0ZS5oZWlnaHQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQodmFsdWVzLnRpbWVTcGFuKTtcbiAgICAgIG5ld1N0YXRlLnRvcCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKHZhbHVlcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSk7XG4gICAgICB0aGlzLnRpbWVTcGFuID0gdmFsdWVzLnRpbWVTcGFuO1xuICAgIH1cblxuICAgIGlmKHZhbHVlcy5jb2xvcil7XG4gICAgICBuZXdTdGF0ZS5jb2xvciA9IHZhbHVlcy5jb2xvcjtcbiAgICB9XG5cbiAgICBpZih2YWx1ZXMuZGlzcGxheSl7XG4gICAgICBuZXdTdGF0ZS5kaXNwbGF5ID0gdmFsdWVzLmRpc3BsYXk7XG4gICAgfVxuXG4gICAgaWYodmFsdWVzLnZhcnMpe1xuICAgICAgdGhpcy52YXJzID0gdmFsdWVzLnZhcnM7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH1cblxuICBnZXQgY3VycmVudFRpbWVTcGFuKCl7XG4gICAgcmV0dXJuIHRoaXMucmVzaXppbmdUaW1lU3BhbiB8fCB0aGlzLnRpbWVTcGFuO1xuICB9XG5cbiAgZ2V0IG5leHRQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMuZHJhZ2dpbmdQb3NpdGlvbil7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaW5lSWQ6IHRoaXMuZHJhZ2dpbmdQb3NpdGlvbi5saW5lSWQsXG4gICAgICAgIHRpbWVTcGFuOiB0aGlzLnRpbWVTcGFuLnNoaWZ0U3RhcnRUaW1lKHRoaXMuZHJhZ2dpbmdQb3NpdGlvbi50aW1lKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZih0aGlzLnJlc2l6aW5nVGltZVNwYW4pe1xuICAgICAgcmV0dXJue1xuICAgICAgICBsaW5lSWQ6IHRoaXMubGluZUlkLFxuICAgICAgICB0aW1lU3BhbjogdGhpcy5yZXNpemluZ1RpbWVTcGFuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgcHJldlBvc2l0aW9uKCl7XG4gICAgaWYoIXRoaXMuZHJhZ2dpbmdQb3NpdGlvbiAmJiAhdGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm57XG4gICAgICAgIGxpbmVJZDogdGhpcy5saW5lSWQsXG4gICAgICAgIHRpbWVTcGFuOiB0aGlzLnRpbWVTcGFuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOS7luOBrkV2ZW5044Go6YeN44Gq44Gj44Gm44GE44Gq44GE44GL44OB44Kn44OD44Kv44GZ44KLXG4gICAqIEBwYXJhbSAge29iamVjdH0gIHBvc2l0aW9uIHtsaW5lSWQ6ICoqKiwgdGltZVNwYW46ICoqKn1cbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGlzRnJlZVBvc2l0aW9uKHBvc2l0aW9uKXtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMudGltZWxpbmUuZXZlbnRDb21wb25lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZXYgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmV2ZW50Q29tcG9uZW50c1tpXTtcbiAgICAgIGlmKGV2ID09PSB0aGlzKSBjb250aW51ZTtcbiAgICAgIGlmKGV2LmxpbmVJZCAhPSBwb3NpdGlvbi5saW5lSWQpIGNvbnRpbnVlO1xuICAgICAgaWYoZXYuY3VycmVudFRpbWVTcGFuLm92ZXJsYXBzKHBvc2l0aW9uLnRpbWVTcGFuKSl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG1vdmVUbyh0b3AsIGxlZnQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe3RvcDogdG9wLCBsZWZ0OiBsZWZ0fSk7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnREaWRDbGljayl7XG4gICAgICBpZih0aGlzLnJlc2l6aW5nKXtcbiAgICAgICAgcmV0dXJuIDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZENsaWNrKHtcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQucmVmcy5saW5lc1dyYXBwZXIuc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbExlZnQ6IHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQuZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgICAgIHRvcDogZS5jbGllbnRZLFxuICAgICAgICAgIGxlZnQ6IGUuY2xpZW50WCxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBsaW5lQ29tcG9uZW50OiB0aGlzLnByb3BzLnRpbWVsaW5lLmxpbmVDb21wb25lbnRzLmZpbmQobGluZUNvbXBvbmVudCA9PiBsaW5lQ29tcG9uZW50LnByb3BzLmlkID09IHRoaXMubGluZUlkKSxcbiAgICAgICAgZXZlbnQ6IGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdnaW5nKHRpbWUsIGxpbmVJZCl7XG4gICAgdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uID0ge3RpbWU6IHRpbWUsIGxpbmVJZDogbGluZUlkfTtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZ0Rpc3BsYXk6IHRpbWUuZ2V0RGlzcGxheVRpbWUoKX0pO1xuICB9XG5cbiAgcmVzaXplVXAoZSl7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudC5yZXNpemVVcCh0aGlzLCBlLmNsaWVudFkpO1xuICB9XG5cbiAgcmVzaXplRG93bihlKXtcbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LnJlc2l6ZURvd24odGhpcywgZS5jbGllbnRZKTtcbiAgfVxuXG4gIGVuZFJlc2l6aW5nKGUpe1xuICAgIGlmKHRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiBudWxsLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXlUb3A6IG51bGxcbiAgICAgIH07XG5cbiAgICAgIGlmKHRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICAgIG5ld1N0YXRlLnRvcCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKHRoaXMucmVzaXppbmdUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSk7XG4gICAgICAgIG5ld1N0YXRlLmhlaWdodCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodCh0aGlzLnJlc2l6aW5nVGltZVNwYW4pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgfVxuXG4gICAgLy9vbkNsaWNr44KI44KKZW5kUmVzaXppbmfjga7lhYjjgavnmbrnlJ/jgZfjgabjgZfjgb7jgYbjgIJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzaXppbmcgPSBmYWxzZSwgMTAwKTtcbiAgfVxuXG4gIG9uQ29udGV4dE1lbnUoZSl7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZFJpZ2h0Q2xpY2spe1xuICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZFJpZ2h0Q2xpY2soe1xuICAgICAgICBldmVudDogZSxcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXREcmFnZ2luZ1N0eWxlKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3AsXG4gICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuY29sb3IsXG4gICAgfVxuICB9XG5cbiAgZ2V0T2Zmc2V0KCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3AsXG4gICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnRcbiAgICB9XG4gIH1cblxuICBzZXRDb2xvcihjb2xvcil7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29sb3I6IGNvbG9yfSk7XG4gIH1cblxuICBzZXREaXNwbGF5KGRpc3BsYXkpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXk6IGRpc3BsYXl9KTtcbiAgfVxuXG4gIHJlc2l6ZSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVzaXphYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBmbG9hdCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgZHJhZ2dpbmdEaXNwbGF5OiB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmdldERpc3BsYXlUaW1lKClcbiAgICB9KTtcblxuICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbiA9IHt0aW1lOiB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLCBsaW5lSWQ6IHRoaXMubGluZUlkfTtcbiAgfVxuXG4gIGlzRml4ZWQoKXtcbiAgICByZXR1cm4gIXRoaXMuc3RhdGUuZHJhZ2dhYmxlICYmICF0aGlzLnN0YXRlLnJlc2l6YWJsZTtcbiAgfVxuXG4gIGlzRml4YWJsZSgpe1xuICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uO1xuICAgIGlmKCFuZXdQb3NpdGlvbil7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pc0ZyZWVQb3NpdGlvbihuZXdQb3NpdGlvbik7XG4gIH1cblxuICBpc0NhbmNlbGFibGUoKXtcbiAgICB2YXIgbmV3UG9zaXRpb24gPSB0aGlzLnByZXZQb3NpdGlvbjtcbiAgICBpZighbmV3UG9zaXRpb24pe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXNGcmVlUG9zaXRpb24obmV3UG9zaXRpb24pO1xuICB9XG5cbiAgY2FuY2VsKCl7XG4gICAgaWYodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uKXtcbiAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmdldExpbmVMZWZ0KHRoaXMubGluZUlkKTtcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgICAgdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnLFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgbGVmdDogbGVmdFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmKHRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodCh0aGlzLnRpbWVTcGFuKTtcbiAgICAgIHRoaXMucmVzaXppbmdUaW1lU3BhbiA9IG51bGw7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJyxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMudGltZWxpbmUuY2xlYXJEcmFnZ2luZ092ZXIoKTtcbiAgfVxuXG4gIHJlbW92ZSgpe1xuICAgIHRoaXMucHJvcHMudGltZWxpbmUuY2xlYXJEcmFnZ2luZ092ZXIoKTtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50aW1lbGluZS5yZW1vdmVFdmVudCh0aGlzLnByb3BzLmlkKTtcbiAgfVxuXG4gIGdldE1pbnV0ZSgpe1xuICAgIGlmKHRoaXMudGltZVNwYW4pe1xuICAgICAgcmV0dXJuIHRoaXMudGltZVNwYW4uZ2V0RGlzdGFuY2UoKTtcbiAgICB9IGVsc2UgaWYodGhpcy5wcm9wcy5mbG9hdCl7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wcm9wcy5mbG9hdC5taW51dGUsIDEwKTtcbiAgICB9XG4gIH1cblxuICBmaXgoKXtcbiAgICBpZih0aGlzLmRyYWdnaW5nUG9zaXRpb24pe1xuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIHRvcDogdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLnRpbWUpLFxuICAgICAgICBsZWZ0OiB0aGlzLnByb3BzLnRpbWVsaW5lLmdldExpbmVMZWZ0KHRoaXMuZHJhZ2dpbmdQb3NpdGlvbi5saW5lSWQpLFxuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3VGltZVNwYW4gPSB0aGlzLnRpbWVTcGFuLnNoaWZ0U3RhcnRUaW1lKHRoaXMuZHJhZ2dpbmdQb3NpdGlvbi50aW1lKTtcbiAgICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnRXaWxsRml4KXtcbiAgICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudFdpbGxGaXgoe1xuICAgICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgbGluZUlkOiB0aGlzLmRyYWdnaW5nUG9zaXRpb24ubGluZUlkLFxuICAgICAgICAgIHRpbWVTcGFuOiBuZXdUaW1lU3BhblxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB0aGlzLmxpbmVJZCA9IHRoaXMuZHJhZ2dpbmdQb3NpdGlvbi5saW5lSWQ7XG4gICAgICB0aGlzLnRpbWVTcGFuID0gbmV3VGltZVNwYW47XG4gICAgICB0aGlzLmRyYWdnaW5nUG9zaXRpb24gPSBudWxsO1xuICAgIH0gZWxzZSBpZih0aGlzLnJlc2l6aW5nVGltZVNwYW4pe1xuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJydcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnRXaWxsRml4KXtcbiAgICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudFdpbGxGaXgoe1xuICAgICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgbGluZUlkOiB0aGlzLmxpbmVJZCxcbiAgICAgICAgICB0aW1lU3BhbjogdGhpcy5yZXNpemluZ1RpbWVTcGFuXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIHRoaXMudGltZVNwYW4gPSB0aGlzLnJlc2l6aW5nVGltZVNwYW47XG4gICAgICB0aGlzLnJlc2l6aW5nVGltZVNwYW4gPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnREaWRGaXgpe1xuICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZEZpeCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzZXRWYXIoa2V5LCB2YWx1ZSl7XG4gICAgdGhpcy52YXJzW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFZhcihrZXkpe1xuICAgIHJldHVybiB0aGlzLnZhcnNba2V5XTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5ldmVudENvbXBvbmVudHMucHVzaCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmV2ZW50Q29tcG9uZW50cyA9IHRoaXMucHJvcHMudGltZWxpbmUuZXZlbnRDb21wb25lbnRzLmZpbHRlcihldiA9PiBldiAhPT0gdGhpcylcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCArICdweCcsXG4gICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQgKyAncHgnLFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggKyAncHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmNvbG9yLFxuICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy5pc0RyYWdnaW5nID8gJ25vbmUnIDogJ2Jsb2NrJ1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jb25uZWN0RHJhZ1NvdXJjZShcbiAgICAgIDxkaXYgcmVmPXtlbGVtID0+IHRoaXMuZWxlbWVudCA9IGVsZW19IG9uQ29udGV4dE1lbnU9e2UgPT4gdGhpcy5vbkNvbnRleHRNZW51KGUpfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3RsRXZlbnRWaWV3Jywge3RsRHJhZ2dpbmdFdmVudDogdGhpcy5zdGF0ZS5kcmFnZ2FibGUsIHRsUmVzaXphYmxlRXZlbnQ6IHRoaXMuc3RhdGUucmVzaXphYmxlfSl9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9PlxuICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLnJlc2l6YWJsZSl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsUmVzaXplSGFuZGxlXCIgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucmVzaXplVXAoZSl9IG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplVXAoZSl9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgICAgPEV2ZW50QmFzZVxuICAgICAgICAgIGRyYWdnaW5nRGlzcGxheT17dGhpcy5zdGF0ZS5kcmFnZ2luZ0Rpc3BsYXl9XG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5VG9wPXt0aGlzLnN0YXRlLmRyYWdnaW5nRGlzcGxheVRvcH1cbiAgICAgICAgICBkaXNwbGF5PXt0aGlzLnN0YXRlLmRpc3BsYXl9XG4gICAgICAgIC8+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIGlmKHRoaXMuc3RhdGUucmVzaXphYmxlKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSZXNpemVIYW5kbGUgdGxCb3R0b21cIiBvblRvdWNoU3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVEb3duKGUpfSBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnJlc2l6ZURvd24oZSl9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRXZlbnQuZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5OiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhZ1NvdXJjZShcIkV2ZW50XCIsIHNvdXJjZSwgY29sbGVjdCkoRXZlbnQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==