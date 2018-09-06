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
  }, {
    key: 'lastLine',
    get: function get() {
      var lines = this.lineComponents;
      return lines[lines.length - 1];
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
      isLast: _this.props.isLast
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

      var displayPosition = 'left';
      if (this.refs.base) {
        var wrapper = (0, _utils.closest)(this.refs.base, '.linesFrame');
        var wrapperRect = wrapper.getBoundingClientRect();
        var wrapperRightSide = wrapperRect.left + wrapperRect.width;

        var previewRect = this.refs.base.getBoundingClientRect();
        var previewRightSide = previewRect.left + previewRect.width;

        if (wrapperRightSide > previewRightSide + 70) {
          displayPosition = 'right';
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
                      timeline: _this6.props.timeline,
                      isLast: key == _this6.props.lineData.length - 1
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
      // 右がはみ出てないかチェック
      var line = _this.props.timeline.findLineByLeft(_this.state.left);
      if (!line) {
        line = _this.props.timeline.lastLine;
        _this.state.left = _this.props.timeline.getLineLeft(line.props.id);
      }

      _this.state.height = _this.props.timeline.minuteToHeight(_this.props.float.minute);
      // 高さがはみ出てないかチェック
      var bottom = _this.props.timeline.timeToTop(line.props.timeSpan.getEndTime()) - _this.state.height;
      if (_this.state.top > bottom) {
        _this.state.top = bottom;
      }

      var time = _this.props.timeline.topToTime(_this.state.top);
      _this.draggingPosition = { time: time, lineId: line.props.id };
      _this.state.draggingDisplay = time.getDisplayTime();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxZjQ1ZGIyZjE1MGI2ZDVjMjgzMyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzc25hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3NuYW1lc1wiLFwiYW1kXCI6XCJjbGFzc25hbWVzXCJ9Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1J1bGVyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn0iLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2FjdGlvbnMvZHJhZ0Ryb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2FjdGlvbnMvcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvdXRpbHMvY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWUuZXM2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3V0aWxzL3NoYWxsb3dFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlzcG9zYWJsZXMvbW9kdWxlcy9pc0Rpc3Bvc2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGluZUxhYmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9EcmFnRHJvcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT2Zmc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvdXRpbHMvbWF0Y2hlc1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZURpZmZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvZGlydHlIYW5kbGVySWRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm9vcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0RyYWdMYXllci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi91dGlscy9zaGFsbG93RXF1YWxTY2FsYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvZGVjb3JhdGVIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3dyYXBDb25uZWN0b3JIb29rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9hcmVPcHRpb25zRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvdXRpbHMvaXNWYWxpZFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRCYXNlLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZyYW1lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib3VyLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvRHJhZ0Ryb3BNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvY3JlYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL3BvbnlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT3BlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvd2l0aG91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zaG9ydE91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9yZWZDb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3hvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlWG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGbGF0dGVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0QXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvc3RhdGVJZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL0RyYWdEcm9wTW9uaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL0hhbmRsZXJSZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXNhcC9icm93c2VyLWFzYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FzYXAvYnJvd3Nlci1yYXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi91dGlscy9nZXROZXh0VW5pcXVlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9EcmFnU291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvRHJvcFRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2JhY2tlbmRzL2NyZWF0ZVRlc3RCYWNrZW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0RyYWdEcm9wQ29udGV4dFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0RyYWdTb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Rpc3Bvc2FibGVzL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Rpc3Bvc2FibGVzL21vZHVsZXMvRGlzcG9zYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlzcG9zYWJsZXMvbW9kdWxlcy9Db21wb3NpdGVEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kaXNwb3NhYmxlcy9tb2R1bGVzL1NlcmlhbERpc3Bvc2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvcmVnaXN0ZXJTb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9jcmVhdGVTb3VyY2VNb25pdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVNvdXJjZUNvbm5lY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi91dGlscy9jbG9uZVdpdGhSZWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvRHJvcFRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9yZWdpc3RlclRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9jcmVhdGVUYXJnZXRGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldE1vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0Q29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9kaXN0L1RvdWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRQcmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50LmpzeCJdLCJuYW1lcyI6WyJUaW1lU3BhbiIsInN0YXJ0IiwiZW5kIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInVuZGVmaW5lZCIsImNvbXBhcmUiLCJhZGRNaW4iLCJfc3RhcnRUaW1lIiwiX2VuZFRpbWUiLCJnZXRTdGFydFRpbWUiLCJjbG9uZSIsImdldEVuZFRpbWUiLCJnZXREaXN0YW5jZSIsInRpbWUiLCJob3VyIiwic2hpZnRTdGFydFRpbWUiLCJnZXRNaW4iLCJtaW4iLCJnZXRIb3VyIiwibWludXRlIiwidGltZVNwYW4iLCJlcXVhbHMiLCJjb250YWlucyIsImNvbnRhaW5zVGltZSIsImNhbGxiYWNrIiwia2V5IiwiY2FsbCIsIm1pbnV0ZUludGVydmFsIiwiUnVsZXIiLCJwcm9wcyIsInN0YXRlIiwiaG91cnMiLCJlYWNoVGltZSIsInN0eWxlIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwicHVzaCIsImdldERpc3BsYXlIb3VyIiwid2lkdGgiLCJDb21wb25lbnQiLCJUaW1lbGluZSIsImxpbmVIZWlnaHQiLCJwZXJNaW5IZWlnaHQiLCJsaW5lV2lkdGgiLCJjcmVhdGVkRXZlbnRJZCIsImRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQiLCJmcmFtZUNvbXBvbmVudCIsImV2ZW50Q29tcG9uZW50cyIsImxlZnQiLCJsaW5lQ29tcG9uZW50IiwiZmluZExpbmVCeUxlZnQiLCJjbGVhckRyYWdnaW5nT3ZlciIsImRyYWdnaW5nT3ZlciIsImxpbmVEYXRhIiwicmVkdWNlIiwidmFsIiwiZGF0YSIsImluZGV4IiwiaGFzUnVsZXIiLCJydWxlckludGVydmFsIiwiZXZlbnRJZCIsImZpbmQiLCJldiIsImlkIiwibGluZUNvbXBvbmVudHMiLCJsaW5lIiwibGluZUlkIiwiaSIsImxlbmd0aCIsInNpZGVQYWRkaW5nIiwidG9wIiwidG9wVG9UaW1lIiwibWludXRlVG9IZWlnaHQiLCJyZXN0IiwibWluSW50ZXJ2YWwiLCJldmVudENvbXBvbmVudCIsImZpbHRlciIsImRyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImN1cnJlbnRUaW1lU3BhbiIsInByZXZFdmVudCIsImZpbmRQcmV2RXZlbnQiLCJib3R0b21UaW1lIiwidGltZVRvVG9wIiwiZmluZE5leHRFdmVudEJ5VGltZSIsIm5leHRFdmVudCIsIm5leHRUaW1lIiwiZ2V0TmV4dFRpbWUiLCJldmVudHMiLCJhZGRFdmVudHMiLCJzZXRIZWlnaHQiLCJyZW1vdmVFdmVudCIsInVwZGF0ZUV2ZW50cyIsImluaXRpYWxFdmVudHMiLCJjaGlsZHJlbiIsImNoaWxkV2lkdGgiLCJsaW5lcyIsInJlZnMiLCJpbmRleE9mIiwiZGVmYXVsdFByb3BzIiwiVGltZSIsImNvdW50IiwiZGlzcGxheU1pbiIsIl9ob3VyIiwicGFyc2VJbnQiLCJfbWluIiwiRXJyb3IiLCJ0b1N0cmluZyIsInRhcmdldFRpbWUiLCJ0YXJnZXRIb3VyIiwiaG91ckRpc3RhbmNlIiwiZ2V0RGlzcGxheVRpbWUiLCJnZXREaXNwbGF5TWluIiwiTGluZSIsInZhcnMiLCJlIiwicGFyZW50RWxlbWVudCIsImZyYW1lIiwibGluZXNXcmFwcGVyIiwicGFyZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFkiLCJzY3JvbGxUb3AiLCJ0aW1lbGluZSIsImxpbmVEaWRDbGljayIsImdldFJlbGF0aXZlVG9wIiwiY29tcG9uZW50IiwiZnJlZU1pbnV0ZSIsImdldEZyZWVNaW51dGUiLCJwb3NpdGlvbiIsInNjcm9sbExlZnQiLCJlbGVtZW50IiwiY2xpZW50WCIsImV2ZW50IiwibGluZURpZFJpZ2h0Q2xpY2siLCJzZXRTdGF0ZSIsIm9uQ29udGV4dE1lbnUiLCJvbkNsaWNrIiwidGxFdmVuIiwiZXZlbiIsInRsT2RkIiwidGxPdmVyIiwiTGluZUxhYmVsIiwicHJldlJ1bGVyIiwiaXNMYXN0IiwibWFyZ2luTGVmdCIsInRsTGFiZWwiLCJ0bEhhc1J1bGVyIiwidGxQcmV2UnVsZXIiLCJ0bExhc3QiLCJsYWJlbCIsIkV2ZW50QmFzZSIsInJvdyIsInZhbHVlIiwiY2xhc3NOYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiZGlzcGxheVBvc2l0aW9uIiwiYmFzZSIsIndyYXBwZXIiLCJ3cmFwcGVyUmVjdCIsIndyYXBwZXJSaWdodFNpZGUiLCJwcmV2aWV3UmVjdCIsInByZXZpZXdSaWdodFNpZGUiLCJkcmFnZ2luZ0Rpc3BsYXkiLCJkcmFnZ2luZ0Rpc3BsYXlUb3AiLCJkaXNwbGF5IiwicmVuZGVyRGlzcGxheSIsInRhcmdldCIsImRyb3AiLCJtb25pdG9yIiwiaXRlbSIsImdldEl0ZW0iLCJkZWx0YSIsImdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCIsImluaXRhbE9mZnNldCIsImRyYWdnaW5nQ29tcG9uZW50IiwiZ2V0T2Zmc2V0IiwiTWF0aCIsInJvdW5kIiwieSIsIngiLCJtb3ZlVG8iLCJob3ZlciIsImNsaWVudE9mZnNldCIsImdldFNvdXJjZUNsaWVudE9mZnNldCIsImxpbmVXcmFwcGVyQm91bmRzIiwiZHJhZ2dpbmciLCJjb2xsZWN0IiwiY29ubmVjdCIsImNvbm5lY3REcm9wVGFyZ2V0IiwiZHJvcFRhcmdldCIsIkZyYW1lIiwibWluV2lkdGgiLCJyZXNpemluZ0V2ZW50IiwiY2xpY2tlZFRvcCIsImluaXRpYWxIZWlnaHQiLCJwcmV2Qm90dG9tIiwiZ2V0UHJldkJvdHRvbSIsIm1vdXNlTW92ZUV2ZW50IiwibW92ZUV2ZW50IiwicmVzaXppbmciLCJ0YXJnZXRIZWlnaHQiLCJ0YXJnZXRUb3AiLCJyZXNpemluZ1RpbWVTcGFuIiwidGltZVNwYW5Ub0hlaWdodCIsInN0b3BNb3ZlRXZlbnQiLCJtb3VzZUV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVuZFJlc2l6aW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5leHRUb3AiLCJnZXROZXh0VG9wIiwidGFyZ2V0Qm90dG9tIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjdXJyZW50IiwiZXZlbnRJZHMiLCJmb3JFYWNoIiwiY3JlYXRlRXZlbnRJZCIsInJlc3VsdHMiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsImdldFRvdGFsV2lkdGgiLCJuZXh0UHJvcHMiLCJuZXdTdGF0ZSIsImVsZW0iLCJvdmVyZmxvd1giLCJvdmVyZmxvdyIsIm92ZXJmbG93WSIsImNvbG9yIiwiZmxvYXQiLCJlbmFibGVNb3VzZUV2ZW50cyIsIkhvdXIiLCJtaW51dGVzIiwibWluU3R5bGUiLCJlYWNoTWluIiwiRXZlbnRQcmV2aWV3IiwidHJhbnNmb3JtIiwiZ2V0RHJhZ2dpbmdTdHlsZSIsIldlYmtpdFRyYW5zZm9ybSIsImdldEl0ZW1TdHlsZXMiLCJjbG9zZXN0Iiwic2VsZWN0b3IiLCJtYXRjaGVzRm4iLCJzb21lIiwiZm4iLCJkb2N1bWVudCIsImJvZHkiLCJwYXJlbnQiLCJzb3VyY2UiLCJiZWdpbkRyYWciLCJjYW5EcmFnIiwiZmluZEV2ZW50QnlJZCIsImNvbm5lY3REcmFnU291cmNlIiwiZHJhZ1NvdXJjZSIsImlzRHJhZ2dpbmciLCJFdmVudCIsImdldExpbmVMZWZ0IiwicmVzaXphYmxlIiwiZHJhZ2dpbmdQb3NpdGlvbiIsImxhc3RMaW5lIiwiYm90dG9tIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwidmFsdWVzIiwib3ZlcmxhcHMiLCJldmVudERpZENsaWNrIiwicmVzaXplVXAiLCJyZXNpemVEb3duIiwic2V0VGltZW91dCIsImV2ZW50RGlkUmlnaHRDbGljayIsImJhY2tncm91bmRDb2xvciIsIm5ld1Bvc2l0aW9uIiwibmV4dFBvc2l0aW9uIiwiaXNGcmVlUG9zaXRpb24iLCJwcmV2UG9zaXRpb24iLCJuZXdUaW1lU3BhbiIsImV2ZW50V2lsbEZpeCIsImV2ZW50RGlkRml4IiwidGxEcmFnZ2luZ0V2ZW50IiwidGxSZXNpemFibGVFdmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSwrQzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHlCQUF5QixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7O0FBQ0E7Ozs7SUFJcUJBLFE7OzsrQkFFTEMsSyxFQUFPQyxHLEVBQUk7QUFDckIsbUJBQU8sSUFBSUYsUUFBSixDQUFhLG1CQUFTQyxNQUFNLENBQU4sQ0FBVCxFQUFtQkEsTUFBTSxDQUFOLENBQW5CLENBQWIsRUFBMkMsbUJBQVNDLElBQUksQ0FBSixDQUFULEVBQWlCQSxJQUFJLENBQUosQ0FBakIsQ0FBM0MsQ0FBUDtBQUNIOzs7QUFFRCxzQkFBWUMsU0FBWixFQUF1QkMsT0FBdkIsRUFBK0I7QUFBQTs7QUFDN0IsWUFBR0QsY0FBY0UsU0FBakIsRUFBMkI7QUFDekJGLHdCQUFZLG9CQUFaO0FBQ0Q7QUFDRCxZQUFHQyxZQUFZQyxTQUFmLEVBQXlCO0FBQ3ZCRCxzQkFBVSxvQkFBVjtBQUNEO0FBQ0QsZUFBTUQsVUFBVUcsT0FBVixDQUFrQkYsT0FBbEIsS0FBOEIsQ0FBcEMsRUFBc0M7QUFDbENBLHNCQUFVQSxRQUFRRyxNQUFSLENBQWUsS0FBSyxFQUFwQixDQUFWO0FBQ0g7O0FBRUQsYUFBS0MsVUFBTCxHQUFrQkwsU0FBbEI7QUFDQSxhQUFLTSxRQUFMLEdBQWdCTCxPQUFoQjtBQUNEOzs7O2dDQUVNO0FBQ0gsbUJBQU8sSUFBSUosUUFBSixDQUFhLEtBQUtVLFlBQUwsR0FBb0JDLEtBQXBCLEVBQWIsRUFBMEMsS0FBS0MsVUFBTCxHQUFrQkQsS0FBbEIsRUFBMUMsQ0FBUDtBQUNIOzs7c0NBRVk7QUFDVCxtQkFBTyxLQUFLSCxVQUFMLENBQWdCSyxXQUFoQixDQUE0QixLQUFLSixRQUFqQyxDQUFQO0FBQ0g7Ozt1Q0FFYTtBQUFFLG1CQUFPLEtBQUtELFVBQVo7QUFBeUI7OztxQ0FDN0I7QUFBRSxtQkFBTyxLQUFLQyxRQUFaO0FBQXVCOzs7cUNBRXhCSyxJLEVBQUs7QUFDZCxtQkFBTyxJQUFJZCxRQUFKLENBQWFjLEtBQUtQLE1BQUwsQ0FBWSxDQUFDLEtBQUtNLFdBQUwsRUFBYixDQUFiLEVBQStDQyxJQUEvQyxDQUFQO0FBQ0g7Ozt1Q0FFY0MsSSxFQUFLO0FBQ2xCLG1CQUFPLEtBQUtDLGNBQUwsQ0FBb0IsbUJBQVNELElBQVQsRUFBZSxLQUFLUCxVQUFMLENBQWdCUyxNQUFoQixFQUFmLENBQXBCLENBQVA7QUFDRDs7O3NDQUVhQyxHLEVBQUk7QUFDaEIsbUJBQU8sS0FBS0YsY0FBTCxDQUFvQixtQkFBUyxLQUFLUixVQUFMLENBQWdCVyxPQUFoQixFQUFULEVBQW9DRCxHQUFwQyxDQUFwQixDQUFQO0FBQ0Q7Ozt1Q0FFY0osSSxFQUFLO0FBQ2hCLG1CQUFPLElBQUlkLFFBQUosQ0FBYWMsSUFBYixFQUFtQkEsS0FBS1AsTUFBTCxDQUFZLEtBQUtNLFdBQUwsRUFBWixDQUFuQixDQUFQO0FBQ0g7OzsrQkFFTU8sTSxFQUFPO0FBQ1osbUJBQU8sSUFBSXBCLFFBQUosQ0FBYSxLQUFLVSxZQUFMLEVBQWIsRUFBa0MsS0FBS0UsVUFBTCxHQUFrQkwsTUFBbEIsQ0FBeUJhLE1BQXpCLENBQWxDLENBQVA7QUFDRDs7OytCQUVNQyxRLEVBQVM7QUFDWixtQkFBTyxLQUFLWCxZQUFMLEdBQW9CWSxNQUFwQixDQUEyQkQsU0FBU1gsWUFBVCxFQUEzQixLQUF1RCxLQUFLRSxVQUFMLEdBQWtCVSxNQUFsQixDQUF5QkQsU0FBU1QsVUFBVCxFQUF6QixDQUE5RDtBQUNIOzs7aUNBRVFTLFEsRUFBUztBQUNkLG1CQUFPLEtBQUtYLFlBQUwsR0FBb0JKLE9BQXBCLENBQTRCZSxTQUFTWCxZQUFULEVBQTVCLElBQXVELENBQXZELElBQTRELEtBQUtFLFVBQUwsR0FBa0JOLE9BQWxCLENBQTBCZSxTQUFTVCxVQUFULEVBQTFCLElBQW1ELENBQXRIO0FBQ0g7OztxQ0FFWUUsSSxFQUFLO0FBQ2QsbUJBQU8sS0FBS0osWUFBTCxHQUFvQkosT0FBcEIsQ0FBNEJRLElBQTVCLElBQW9DLENBQXBDLElBQXlDLEtBQUtGLFVBQUwsR0FBa0JOLE9BQWxCLENBQTBCUSxJQUExQixJQUFrQyxDQUFsRjtBQUNIOzs7aUNBRVFPLFEsRUFBUztBQUNkLGdCQUFHQSxTQUFTRSxRQUFULENBQWtCLElBQWxCLENBQUgsRUFBMkI7QUFDdkIsdUJBQU8sSUFBUDtBQUNIOztBQUVELGdCQUFHLEtBQUtDLFlBQUwsQ0FBa0JILFNBQVNYLFlBQVQsRUFBbEIsQ0FBSCxFQUE4QztBQUMxQyx1QkFBTyxJQUFQO0FBQ0g7O0FBRUQsZ0JBQUcsS0FBS2MsWUFBTCxDQUFrQkgsU0FBU1QsVUFBVCxFQUFsQixDQUFILEVBQTRDO0FBQ3hDLHVCQUFPLElBQVA7QUFDSDs7QUFFRCxtQkFBTyxLQUFQO0FBQ0g7OztpQ0FFUWEsUSxFQUFTO0FBQ2QsZ0JBQUlWLE9BQU8sS0FBS0wsWUFBTCxHQUFvQlMsT0FBcEIsRUFBWDtBQUNBLGdCQUFJakIsTUFBTSxLQUFLVSxVQUFMLEdBQWtCTyxPQUFsQixFQUFWO0FBQ0EsZ0JBQUlPLE1BQU0sQ0FBVjs7QUFFQSxtQkFBTSxJQUFOLEVBQVc7QUFDUCxvQkFBR1gsU0FBU2IsR0FBWixFQUFnQjtBQUNadUIsNkJBQVNFLElBQVQsQ0FBY1osSUFBZCxFQUFvQlcsR0FBcEIsRUFBeUJYLElBQXpCLEVBQStCLEtBQUtILFVBQUwsR0FBa0JLLE1BQWxCLEVBQS9CO0FBQ0E7QUFDSCxpQkFIRCxNQUdPO0FBQ0hRLDZCQUFTRSxJQUFULENBQWNaLElBQWQsRUFBb0JXLEdBQXBCLEVBQXlCWCxJQUF6QjtBQUNIOztBQUVEQSx3QkFBUSxDQUFSO0FBQ0Esa0JBQUVXLEdBQUY7QUFDSDtBQUNKOzs7aUNBRVFELFEsRUFBVUcsYyxFQUFlO0FBQzlCLGdCQUFJRixNQUFNLENBQVY7QUFDQUUsNkJBQWlCQSxpQkFBaUJBLGNBQWpCLEdBQWtDLEVBQW5EOztBQUVBLGdCQUFJZCxPQUFPLEtBQUtKLFlBQUwsRUFBWDtBQUNBLG1CQUFNLElBQU4sRUFBVztBQUNQLG9CQUFHSSxLQUFLUixPQUFMLENBQWEsS0FBS00sVUFBTCxFQUFiLElBQWtDLENBQXJDLEVBQXVDO0FBQ25DO0FBQ0g7O0FBRURhLHlCQUFTRSxJQUFULENBQWNiLElBQWQsRUFBb0JZLEdBQXBCLEVBQXlCWixJQUF6Qjs7QUFFQUEsdUJBQU9BLEtBQUtQLE1BQUwsQ0FBWXFCLGNBQVosQ0FBUDtBQUNBLGtCQUFFRixHQUFGO0FBQ0g7QUFDSjs7O21DQUVTO0FBQ04sbUJBQU8sS0FBS2xCLFVBQUwsR0FBa0IsR0FBbEIsR0FBd0IsS0FBS0MsUUFBcEM7QUFDSDs7Ozs7O2tCQXJIa0JULFE7Ozs7OztBQ0xyQiwrQzs7Ozs7O0FDQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFX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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1GQUFtRiwwQkFBMEI7O0FBRTdHO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOzs7QUFHSDtBQUNBLEM7Ozs7Ozs7O0FDck5BOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMvQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM5Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ25CQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTEE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQsa0M7Ozs7Ozs7QUM5TkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OzhDQ2pFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM3R0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDeEZBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7OztBQ25DQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBOztBQUVBLHFKQUFxSjtBQUNySjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7QUM3RUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7OytDQ2xCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7QUM3RkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2Sjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNyR0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw2Q0FBNkMsbUNBQW1DOztBQUVoRjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw2Q0FBNkMsbUNBQW1DOztBQUVoRjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FB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QWE7QUFBQSx5QkFBSyxPQUFLNkosVUFBTCxDQUFnQjdKLENBQWhCLENBQUw7QUFBQSxpQkFBN0Y7QUFDRSxtREFBRyxXQUFVLFlBQWIsRUFBMEIsZUFBWSxNQUF0QztBQURGLGFBREY7QUFLRDtBQUNGLFNBUkE7QUFmSCxPQURLLENBQVA7QUEyQkQ7Ozt3QkExVW9CO0FBQ25CLGFBQU8sS0FBSzBGLGdCQUFMLElBQXlCLEtBQUszTCxRQUFyQztBQUNEOzs7d0JBRWlCO0FBQ2hCLFVBQUcsS0FBS29QLGdCQUFSLEVBQXlCO0FBQ3ZCLGVBQU87QUFDTHRNLGtCQUFRLEtBQUtzTSxnQkFBTCxDQUFzQnRNLE1BRHpCO0FBRUw5QyxvQkFBVSxLQUFLQSxRQUFMLENBQWNMLGNBQWQsQ0FBNkIsS0FBS3lQLGdCQUFMLENBQXNCM1AsSUFBbkQ7QUFGTCxTQUFQO0FBSUQsT0FMRCxNQUtPLElBQUcsS0FBS2tNLGdCQUFSLEVBQXlCO0FBQzlCLGVBQU07QUFDSjdJLGtCQUFRLEtBQUtBLE1BRFQ7QUFFSjlDLG9CQUFVLEtBQUsyTDtBQUZYLFNBQU47QUFJRDs7QUFFRCxhQUFPLElBQVA7QUFDRDs7O3dCQUVpQjtBQUNoQixVQUFHLENBQUMsS0FBS3lELGdCQUFOLElBQTBCLENBQUMsS0FBS3pELGdCQUFuQyxFQUFvRDtBQUNsRCxlQUFPLElBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFNO0FBQ0o3SSxrQkFBUSxLQUFLQSxNQURUO0FBRUo5QyxvQkFBVSxLQUFLQTtBQUZYLFNBQU47QUFJRDtBQUNGOzs7O0VBbkhpQixnQkFBTW1CLFM7O0FBbWExQjhOLE1BQU1oSyxZQUFOLEdBQXFCO0FBQ25Cb0UsV0FBUztBQURVLENBQXJCOztrQkFJZSwwQkFBVyxPQUFYLEVBQW9CcUYsTUFBcEIsRUFBNEIvRCxPQUE1QixFQUFxQ3NFLEtBQXJDLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImNsYXNzbmFtZXNcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwiY2xhc3NuYW1lc1wiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpIDogZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJjbGFzc05hbWVzXCJdLCByb290W1wiUHJvcFR5cGVzXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFmNDVkYjJmMTUwYjZkNWMyODMzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQbGFpbk9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUaW1lIGZyb20gJy4vVGltZSdcbi8qKlxuICog5LiA5bqm55Sf5oiQ44GX44Gf44Kq44OW44K444Kn44Kv44OI44Gv5aSJ5pu044GX44G+44Gb44KT44CCXG4gKiDlpInmm7Tjg6Hjgr3jg4Pjg4njga/mlrDjgZfjgYTjgqrjg5bjgrjjgqfjgq/jg4jjgpLluLDjgZfjgb7jgZnjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNwYW5cbntcbiAgc3RhdGljIGNyZWF0ZShzdGFydCwgZW5kKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4obmV3IFRpbWUoc3RhcnRbMF0sIHN0YXJ0WzFdKSwgbmV3IFRpbWUoZW5kWzBdLCBlbmRbMV0pKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHN0YXJ0VGltZSwgZW5kVGltZSl7XG4gICAgaWYoc3RhcnRUaW1lID09PSB1bmRlZmluZWQpe1xuICAgICAgc3RhcnRUaW1lID0gbmV3IFRpbWUoKTtcbiAgICB9XG4gICAgaWYoZW5kVGltZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIGVuZFRpbWUgPSBuZXcgVGltZSgpO1xuICAgIH1cbiAgICB3aGlsZShzdGFydFRpbWUuY29tcGFyZShlbmRUaW1lKSA+PSAwKXtcbiAgICAgICAgZW5kVGltZSA9IGVuZFRpbWUuYWRkTWluKDI0ICogNjApO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICB0aGlzLl9lbmRUaW1lID0gZW5kVGltZTtcbiAgfVxuXG4gIGNsb25lKCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRoaXMuZ2V0U3RhcnRUaW1lKCkuY2xvbmUoKSwgdGhpcy5nZXRFbmRUaW1lKCkuY2xvbmUoKSk7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpe1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZS5nZXREaXN0YW5jZSh0aGlzLl9lbmRUaW1lKTtcbiAgfVxuXG4gIGdldFN0YXJ0VGltZSgpeyByZXR1cm4gdGhpcy5fc3RhcnRUaW1lOyB9XG4gIGdldEVuZFRpbWUoKXsgcmV0dXJuIHRoaXMuX2VuZFRpbWU7IH1cblxuICBzaGlmdEVuZFRpbWUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRpbWUuYWRkTWluKC10aGlzLmdldERpc3RhbmNlKCkpLCB0aW1lKTtcbiAgfVxuXG4gIHNoaWZ0U3RhcnRIb3VyKGhvdXIpe1xuICAgIHJldHVybiB0aGlzLnNoaWZ0U3RhcnRUaW1lKG5ldyBUaW1lKGhvdXIsIHRoaXMuX3N0YXJ0VGltZS5nZXRNaW4oKSkpO1xuICB9XG5cbiAgc2hpZnRTdGFydE1pbihtaW4pe1xuICAgIHJldHVybiB0aGlzLnNoaWZ0U3RhcnRUaW1lKG5ldyBUaW1lKHRoaXMuX3N0YXJ0VGltZS5nZXRIb3VyKCksIG1pbikpO1xuICB9XG5cbiAgc2hpZnRTdGFydFRpbWUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRpbWUsIHRpbWUuYWRkTWluKHRoaXMuZ2V0RGlzdGFuY2UoKSkpO1xuICB9XG5cbiAgYWRkTWluKG1pbnV0ZSl7XG4gICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aGlzLmdldFN0YXJ0VGltZSgpLCB0aGlzLmdldEVuZFRpbWUoKS5hZGRNaW4obWludXRlKSk7XG4gIH1cblxuICBlcXVhbHModGltZVNwYW4pe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuZXF1YWxzKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSAmJiB0aGlzLmdldEVuZFRpbWUoKS5lcXVhbHModGltZVNwYW4uZ2V0RW5kVGltZSgpKTtcbiAgfVxuXG4gIGNvbnRhaW5zKHRpbWVTcGFuKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUodGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpIDwgMCAmJiB0aGlzLmdldEVuZFRpbWUoKS5jb21wYXJlKHRpbWVTcGFuLmdldEVuZFRpbWUoKSkgPiAwO1xuICB9XG5cbiAgY29udGFpbnNUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuY29tcGFyZSh0aW1lKSA8IDAgJiYgdGhpcy5nZXRFbmRUaW1lKCkuY29tcGFyZSh0aW1lKSA+IDA7XG4gIH1cblxuICBvdmVybGFwcyh0aW1lU3Bhbil7XG4gICAgICBpZih0aW1lU3Bhbi5jb250YWlucyh0aGlzKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuY29udGFpbnNUaW1lKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuY29udGFpbnNUaW1lKHRpbWVTcGFuLmdldEVuZFRpbWUoKSkpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBlYWNoSG91cihjYWxsYmFjayl7XG4gICAgICB2YXIgaG91ciA9IHRoaXMuZ2V0U3RhcnRUaW1lKCkuZ2V0SG91cigpO1xuICAgICAgdmFyIGVuZCA9IHRoaXMuZ2V0RW5kVGltZSgpLmdldEhvdXIoKTtcbiAgICAgIHZhciBrZXkgPSAwO1xuXG4gICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICBpZihob3VyID09PSBlbmQpe1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGhvdXIsIGtleSwgaG91ciwgdGhpcy5nZXRFbmRUaW1lKCkuZ2V0TWluKCkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGhvdXIsIGtleSwgaG91cik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaG91ciArPSAxO1xuICAgICAgICAgICsra2V5O1xuICAgICAgfVxuICB9XG5cbiAgZWFjaFRpbWUoY2FsbGJhY2ssIG1pbnV0ZUludGVydmFsKXtcbiAgICAgIHZhciBrZXkgPSAwO1xuICAgICAgbWludXRlSW50ZXJ2YWwgPSBtaW51dGVJbnRlcnZhbCA/IG1pbnV0ZUludGVydmFsIDogNjA7XG5cbiAgICAgIHZhciB0aW1lID0gdGhpcy5nZXRTdGFydFRpbWUoKTtcbiAgICAgIHdoaWxlKHRydWUpe1xuICAgICAgICAgIGlmKHRpbWUuY29tcGFyZSh0aGlzLmdldEVuZFRpbWUoKSkgPiAwKXtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FsbGJhY2suY2FsbCh0aW1lLCBrZXksIHRpbWUpO1xuXG4gICAgICAgICAgdGltZSA9IHRpbWUuYWRkTWluKG1pbnV0ZUludGVydmFsKTtcbiAgICAgICAgICArK2tleTtcbiAgICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCl7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lICsgJ34nICsgdGhpcy5fZW5kVGltZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsYXNzZXMvVGltZVNwYW4uZXM2IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzc25hbWVzXCIsXCJhbWRcIjpcImNsYXNzbmFtZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdXJzOiBbXVxuICAgIH1cbiAgICB0aGlzLnByb3BzLnRpbWVTcGFuLmVhY2hUaW1lKChrZXksIHRpbWUpID0+IHtcbiAgICAgIGlmKCF0aW1lLmVxdWFscyh0aGlzLnByb3BzLnRpbWVTcGFuLmdldEVuZFRpbWUoKSkpe1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAvL2JvcmRlcjFweOOCkui2s+OBmVxuICAgICAgICAgIGhlaWdodDogKHRoaXMucHJvcHMubWluSGVpZ2h0ICsgMSkgKiA0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5ob3Vycy5wdXNoKFxuICAgICAgICAgIDxkaXYga2V5PXt0aW1lLmdldEhvdXIoKX0gc3R5bGU9e3N0eWxlfT57dGltZS5nZXREaXNwbGF5SG91cigpfTwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSdWxlclZpZXdcIiBzdHlsZT17e3dpZHRoOiBSdWxlci53aWR0aCArICdweCd9fT57dGhpcy5zdGF0ZS5ob3Vyc308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIFJ1bGVyLnByb3BUeXBlcyA9IHtcbi8vICAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZFxuLy8gfVxuXG5SdWxlci53aWR0aCA9IDMwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUnVsZXIuanN4IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifVxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5FTkRfRFJBRyA9IGV4cG9ydHMuRFJPUCA9IGV4cG9ydHMuSE9WRVIgPSBleHBvcnRzLlBVQkxJU0hfRFJBR19TT1VSQ0UgPSBleHBvcnRzLkJFR0lOX0RSQUcgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuYmVnaW5EcmFnID0gYmVnaW5EcmFnO1xuZXhwb3J0cy5wdWJsaXNoRHJhZ1NvdXJjZSA9IHB1Ymxpc2hEcmFnU291cmNlO1xuZXhwb3J0cy5ob3ZlciA9IGhvdmVyO1xuZXhwb3J0cy5kcm9wID0gZHJvcDtcbmV4cG9ydHMuZW5kRHJhZyA9IGVuZERyYWc7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfaXNBcnJheSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0FycmF5Jyk7XG5cbnZhciBfaXNBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0FycmF5KTtcblxudmFyIF9pc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc09iamVjdCcpO1xuXG52YXIgX2lzT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzT2JqZWN0KTtcblxudmFyIF9tYXRjaGVzVHlwZSA9IHJlcXVpcmUoJy4uL3V0aWxzL21hdGNoZXNUeXBlJyk7XG5cbnZhciBfbWF0Y2hlc1R5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF0Y2hlc1R5cGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQkVHSU5fRFJBRyA9IGV4cG9ydHMuQkVHSU5fRFJBRyA9ICdkbmQtY29yZS9CRUdJTl9EUkFHJztcbnZhciBQVUJMSVNIX0RSQUdfU09VUkNFID0gZXhwb3J0cy5QVUJMSVNIX0RSQUdfU09VUkNFID0gJ2RuZC1jb3JlL1BVQkxJU0hfRFJBR19TT1VSQ0UnO1xudmFyIEhPVkVSID0gZXhwb3J0cy5IT1ZFUiA9ICdkbmQtY29yZS9IT1ZFUic7XG52YXIgRFJPUCA9IGV4cG9ydHMuRFJPUCA9ICdkbmQtY29yZS9EUk9QJztcbnZhciBFTkRfRFJBRyA9IGV4cG9ydHMuRU5EX0RSQUcgPSAnZG5kLWNvcmUvRU5EX0RSQUcnO1xuXG5mdW5jdGlvbiBiZWdpbkRyYWcoc291cmNlSWRzKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7IHB1Ymxpc2hTb3VyY2U6IHRydWUsIGNsaWVudE9mZnNldDogbnVsbCB9O1xuICB2YXIgcHVibGlzaFNvdXJjZSA9IG9wdGlvbnMucHVibGlzaFNvdXJjZSxcbiAgICAgIGNsaWVudE9mZnNldCA9IG9wdGlvbnMuY2xpZW50T2Zmc2V0LFxuICAgICAgZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gb3B0aW9ucy5nZXRTb3VyY2VDbGllbnRPZmZzZXQ7XG5cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCgwLCBfaXNBcnJheTIuZGVmYXVsdCkoc291cmNlSWRzKSwgJ0V4cGVjdGVkIHNvdXJjZUlkcyB0byBiZSBhbiBhcnJheS4nKTtcblxuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICB2YXIgcmVnaXN0cnkgPSB0aGlzLmdldFJlZ2lzdHJ5KCk7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSghbW9uaXRvci5pc0RyYWdnaW5nKCksICdDYW5ub3QgY2FsbCBiZWdpbkRyYWcgd2hpbGUgZHJhZ2dpbmcuJyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkocmVnaXN0cnkuZ2V0U291cmNlKHNvdXJjZUlkc1tpXSksICdFeHBlY3RlZCBzb3VyY2VJZHMgdG8gYmUgcmVnaXN0ZXJlZC4nKTtcbiAgfVxuXG4gIHZhciBzb3VyY2VJZCA9IG51bGw7XG4gIGZvciAodmFyIF9pID0gc291cmNlSWRzLmxlbmd0aCAtIDE7IF9pID49IDA7IF9pLS0pIHtcbiAgICBpZiAobW9uaXRvci5jYW5EcmFnU291cmNlKHNvdXJjZUlkc1tfaV0pKSB7XG4gICAgICBzb3VyY2VJZCA9IHNvdXJjZUlkc1tfaV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKHNvdXJjZUlkID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNvdXJjZUNsaWVudE9mZnNldCA9IG51bGw7XG4gIGlmIChjbGllbnRPZmZzZXQpIHtcbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIGdldFNvdXJjZUNsaWVudE9mZnNldCA9PT0gJ2Z1bmN0aW9uJywgJ1doZW4gY2xpZW50T2Zmc2V0IGlzIHByb3ZpZGVkLCBnZXRTb3VyY2VDbGllbnRPZmZzZXQgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIHNvdXJjZUNsaWVudE9mZnNldCA9IGdldFNvdXJjZUNsaWVudE9mZnNldChzb3VyY2VJZCk7XG4gIH1cblxuICB2YXIgc291cmNlID0gcmVnaXN0cnkuZ2V0U291cmNlKHNvdXJjZUlkKTtcbiAgdmFyIGl0ZW0gPSBzb3VyY2UuYmVnaW5EcmFnKG1vbml0b3IsIHNvdXJjZUlkKTtcbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCgwLCBfaXNPYmplY3QyLmRlZmF1bHQpKGl0ZW0pLCAnSXRlbSBtdXN0IGJlIGFuIG9iamVjdC4nKTtcblxuICByZWdpc3RyeS5waW5Tb3VyY2Uoc291cmNlSWQpO1xuXG4gIHZhciBpdGVtVHlwZSA9IHJlZ2lzdHJ5LmdldFNvdXJjZVR5cGUoc291cmNlSWQpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEJFR0lOX0RSQUcsXG4gICAgaXRlbVR5cGU6IGl0ZW1UeXBlLFxuICAgIGl0ZW06IGl0ZW0sXG4gICAgc291cmNlSWQ6IHNvdXJjZUlkLFxuICAgIGNsaWVudE9mZnNldDogY2xpZW50T2Zmc2V0LFxuICAgIHNvdXJjZUNsaWVudE9mZnNldDogc291cmNlQ2xpZW50T2Zmc2V0LFxuICAgIGlzU291cmNlUHVibGljOiBwdWJsaXNoU291cmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hEcmFnU291cmNlKCkge1xuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICBpZiAoIW1vbml0b3IuaXNEcmFnZ2luZygpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHsgdHlwZTogUFVCTElTSF9EUkFHX1NPVVJDRSB9O1xufVxuXG5mdW5jdGlvbiBob3Zlcih0YXJnZXRJZHNBcmcpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgX3JlZiRjbGllbnRPZmZzZXQgPSBfcmVmLmNsaWVudE9mZnNldCxcbiAgICAgIGNsaWVudE9mZnNldCA9IF9yZWYkY2xpZW50T2Zmc2V0ID09PSB1bmRlZmluZWQgPyBudWxsIDogX3JlZiRjbGllbnRPZmZzZXQ7XG5cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCgwLCBfaXNBcnJheTIuZGVmYXVsdCkodGFyZ2V0SWRzQXJnKSwgJ0V4cGVjdGVkIHRhcmdldElkcyB0byBiZSBhbiBhcnJheS4nKTtcbiAgdmFyIHRhcmdldElkcyA9IHRhcmdldElkc0FyZy5zbGljZSgwKTtcblxuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICB2YXIgcmVnaXN0cnkgPSB0aGlzLmdldFJlZ2lzdHJ5KCk7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShtb25pdG9yLmlzRHJhZ2dpbmcoKSwgJ0Nhbm5vdCBjYWxsIGhvdmVyIHdoaWxlIG5vdCBkcmFnZ2luZy4nKTtcbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCFtb25pdG9yLmRpZERyb3AoKSwgJ0Nhbm5vdCBjYWxsIGhvdmVyIGFmdGVyIGRyb3AuJyk7XG5cbiAgLy8gRmlyc3QgY2hlY2sgaW52YXJpYW50cy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXJnZXRJZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdGFyZ2V0SWQgPSB0YXJnZXRJZHNbaV07XG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRhcmdldElkcy5sYXN0SW5kZXhPZih0YXJnZXRJZCkgPT09IGksICdFeHBlY3RlZCB0YXJnZXRJZHMgdG8gYmUgdW5pcXVlIGluIHRoZSBwYXNzZWQgYXJyYXkuJyk7XG5cbiAgICB2YXIgdGFyZ2V0ID0gcmVnaXN0cnkuZ2V0VGFyZ2V0KHRhcmdldElkKTtcbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodGFyZ2V0LCAnRXhwZWN0ZWQgdGFyZ2V0SWRzIHRvIGJlIHJlZ2lzdGVyZWQuJyk7XG4gIH1cblxuICB2YXIgZHJhZ2dlZEl0ZW1UeXBlID0gbW9uaXRvci5nZXRJdGVtVHlwZSgpO1xuXG4gIC8vIFJlbW92ZSB0aG9zZSB0YXJnZXRJZHMgdGhhdCBkb24ndCBtYXRjaCB0aGUgdGFyZ2V0VHlwZS4gIFRoaXNcbiAgLy8gZml4ZXMgc2hhbGxvdyBpc092ZXIgd2hpY2ggd291bGQgb25seSBiZSBub24tc2hhbGxvdyBiZWNhdXNlIG9mXG4gIC8vIG5vbi1tYXRjaGluZyB0YXJnZXRzLlxuICBmb3IgKHZhciBfaTIgPSB0YXJnZXRJZHMubGVuZ3RoIC0gMTsgX2kyID49IDA7IF9pMi0tKSB7XG4gICAgdmFyIF90YXJnZXRJZCA9IHRhcmdldElkc1tfaTJdO1xuICAgIHZhciB0YXJnZXRUeXBlID0gcmVnaXN0cnkuZ2V0VGFyZ2V0VHlwZShfdGFyZ2V0SWQpO1xuICAgIGlmICghKDAsIF9tYXRjaGVzVHlwZTIuZGVmYXVsdCkodGFyZ2V0VHlwZSwgZHJhZ2dlZEl0ZW1UeXBlKSkge1xuICAgICAgdGFyZ2V0SWRzLnNwbGljZShfaTIsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmFsbHkgY2FsbCBob3ZlciBvbiBhbGwgbWF0Y2hpbmcgdGFyZ2V0cy5cbiAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgdGFyZ2V0SWRzLmxlbmd0aDsgX2kzKyspIHtcbiAgICB2YXIgX3RhcmdldElkMiA9IHRhcmdldElkc1tfaTNdO1xuICAgIHZhciBfdGFyZ2V0ID0gcmVnaXN0cnkuZ2V0VGFyZ2V0KF90YXJnZXRJZDIpO1xuICAgIF90YXJnZXQuaG92ZXIobW9uaXRvciwgX3RhcmdldElkMik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IEhPVkVSLFxuICAgIHRhcmdldElkczogdGFyZ2V0SWRzLFxuICAgIGNsaWVudE9mZnNldDogY2xpZW50T2Zmc2V0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRyb3AoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBtb25pdG9yID0gdGhpcy5nZXRNb25pdG9yKCk7XG4gIHZhciByZWdpc3RyeSA9IHRoaXMuZ2V0UmVnaXN0cnkoKTtcbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKG1vbml0b3IuaXNEcmFnZ2luZygpLCAnQ2Fubm90IGNhbGwgZHJvcCB3aGlsZSBub3QgZHJhZ2dpbmcuJyk7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSghbW9uaXRvci5kaWREcm9wKCksICdDYW5ub3QgY2FsbCBkcm9wIHR3aWNlIGR1cmluZyBvbmUgZHJhZyBvcGVyYXRpb24uJyk7XG5cbiAgdmFyIHRhcmdldElkcyA9IG1vbml0b3IuZ2V0VGFyZ2V0SWRzKCkuZmlsdGVyKG1vbml0b3IuY2FuRHJvcE9uVGFyZ2V0LCBtb25pdG9yKTtcblxuICB0YXJnZXRJZHMucmV2ZXJzZSgpO1xuICB0YXJnZXRJZHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0SWQsIGluZGV4KSB7XG4gICAgdmFyIHRhcmdldCA9IHJlZ2lzdHJ5LmdldFRhcmdldCh0YXJnZXRJZCk7XG5cbiAgICB2YXIgZHJvcFJlc3VsdCA9IHRhcmdldC5kcm9wKG1vbml0b3IsIHRhcmdldElkKTtcbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIGRyb3BSZXN1bHQgPT09ICd1bmRlZmluZWQnIHx8ICgwLCBfaXNPYmplY3QyLmRlZmF1bHQpKGRyb3BSZXN1bHQpLCAnRHJvcCByZXN1bHQgbXVzdCBlaXRoZXIgYmUgYW4gb2JqZWN0IG9yIHVuZGVmaW5lZC4nKTtcbiAgICBpZiAodHlwZW9mIGRyb3BSZXN1bHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkcm9wUmVzdWx0ID0gaW5kZXggPT09IDAgPyB7fSA6IG1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xuICAgIH1cblxuICAgIF90aGlzLnN0b3JlLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IERST1AsXG4gICAgICBkcm9wUmVzdWx0OiBfZXh0ZW5kcyh7fSwgb3B0aW9ucywgZHJvcFJlc3VsdClcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuZERyYWcoKSB7XG4gIHZhciBtb25pdG9yID0gdGhpcy5nZXRNb25pdG9yKCk7XG4gIHZhciByZWdpc3RyeSA9IHRoaXMuZ2V0UmVnaXN0cnkoKTtcbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKG1vbml0b3IuaXNEcmFnZ2luZygpLCAnQ2Fubm90IGNhbGwgZW5kRHJhZyB3aGlsZSBub3QgZHJhZ2dpbmcuJyk7XG5cbiAgdmFyIHNvdXJjZUlkID0gbW9uaXRvci5nZXRTb3VyY2VJZCgpO1xuICB2YXIgc291cmNlID0gcmVnaXN0cnkuZ2V0U291cmNlKHNvdXJjZUlkLCB0cnVlKTtcbiAgc291cmNlLmVuZERyYWcobW9uaXRvciwgc291cmNlSWQpO1xuXG4gIHJlZ2lzdHJ5LnVucGluU291cmNlKCk7XG5cbiAgcmV0dXJuIHsgdHlwZTogRU5EX0RSQUcgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvYWN0aW9ucy9kcmFnRHJvcC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYWRkU291cmNlID0gYWRkU291cmNlO1xuZXhwb3J0cy5hZGRUYXJnZXQgPSBhZGRUYXJnZXQ7XG5leHBvcnRzLnJlbW92ZVNvdXJjZSA9IHJlbW92ZVNvdXJjZTtcbmV4cG9ydHMucmVtb3ZlVGFyZ2V0ID0gcmVtb3ZlVGFyZ2V0O1xudmFyIEFERF9TT1VSQ0UgPSBleHBvcnRzLkFERF9TT1VSQ0UgPSAnZG5kLWNvcmUvQUREX1NPVVJDRSc7XG52YXIgQUREX1RBUkdFVCA9IGV4cG9ydHMuQUREX1RBUkdFVCA9ICdkbmQtY29yZS9BRERfVEFSR0VUJztcbnZhciBSRU1PVkVfU09VUkNFID0gZXhwb3J0cy5SRU1PVkVfU09VUkNFID0gJ2RuZC1jb3JlL1JFTU9WRV9TT1VSQ0UnO1xudmFyIFJFTU9WRV9UQVJHRVQgPSBleHBvcnRzLlJFTU9WRV9UQVJHRVQgPSAnZG5kLWNvcmUvUkVNT1ZFX1RBUkdFVCc7XG5cbmZ1bmN0aW9uIGFkZFNvdXJjZShzb3VyY2VJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFERF9TT1VSQ0UsXG4gICAgc291cmNlSWQ6IHNvdXJjZUlkXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZFRhcmdldCh0YXJnZXRJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFERF9UQVJHRVQsXG4gICAgdGFyZ2V0SWQ6IHRhcmdldElkXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNvdXJjZShzb3VyY2VJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFTU9WRV9TT1VSQ0UsXG4gICAgc291cmNlSWQ6IHNvdXJjZUlkXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldCh0YXJnZXRJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFTU9WRV9UQVJHRVQsXG4gICAgdGFyZ2V0SWQ6IHRhcmdldElkXG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2FjdGlvbnMvcmVnaXN0cnkuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNoZWNrRGVjb3JhdG9yQXJndW1lbnRzO1xuZnVuY3Rpb24gY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMoZnVuY3Rpb25OYW1lLCBzaWduYXR1cmUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IChhcmd1bWVudHMubGVuZ3RoIDw9IDIgPyAwIDogYXJndW1lbnRzLmxlbmd0aCAtIDIpOyBpICs9IDEpIHtcbiAgICAgIHZhciBhcmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IGkgKyAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2kgKyAyXTtcbiAgICAgIGlmIChhcmcgJiYgYXJnLnByb3RvdHlwZSAmJiBhcmcucHJvdG90eXBlLnJlbmRlcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgJ1lvdSBzZWVtIHRvIGJlIGFwcGx5aW5nIHRoZSBhcmd1bWVudHMgaW4gdGhlIHdyb25nIG9yZGVyLiAnICsgKCdJdCBzaG91bGQgYmUgJyArIGZ1bmN0aW9uTmFtZSArICcoJyArIHNpZ25hdHVyZSArICcpKENvbXBvbmVudCksIG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC4gJykgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy10cm91Ymxlc2hvb3RpbmcuaHRtbCN5b3Utc2VlbS10by1iZS1hcHBseWluZy10aGUtYXJndW1lbnRzLWluLXRoZS13cm9uZy1vcmRlcicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBGcmFtZSBmcm9tICcuL0ZyYW1lJztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cbiAgICB0aGlzLnRpbWVTcGFuID0gdGhpcy5wcm9wcy50aW1lU3BhbjtcblxuICAgIC8vbWluVmlld+OBjOOBhOOBj+OBpOOBguOCi+OBi+OCq+OCpuODs+ODiOOAgm1pblZpZXfjga8xNeWIhuOBiuOBjeOAguOBneOCjOOCkuWFg+OBq+mrmOOBleOCkuioiOeul+OAgmJvcmRlcuWIhjFweOi2s+OBmVxuICAgIHRoaXMubGluZUhlaWdodCA9ICh0aGlzLnRpbWVTcGFuLmdldERpc3RhbmNlKCkgLyAxNSkgKiAodGhpcy5wcm9wcy5taW5IZWlnaHQgKyAxKTtcblxuICAgIC8vMeWIhuOBguOBn+OCiuOBrumrmOOBleOCkueul+WHulxuICAgIHRoaXMucGVyTWluSGVpZ2h0ID0gdGhpcy5saW5lSGVpZ2h0IC8gdGhpcy50aW1lU3Bhbi5nZXREaXN0YW5jZSgpO1xuXG4gICAgdGhpcy5saW5lV2lkdGggPSBwcm9wcy5saW5lV2lkdGg7XG5cbiAgICB0aGlzLmNyZWF0ZWRFdmVudElkID0gMDtcbiAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5mcmFtZUNvbXBvbmVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmV2ZW50Q29tcG9uZW50cyA9IFtdXG4gIH1cblxuICBnZXQgbGluZUNvbXBvbmVudHMoKXtcbiAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgIGZvcih2YXIga2V5IGluIHRoaXMuZnJhbWVDb21wb25lbnQucmVmcyl7XG4gICAgICBpZihrZXkuaW5kZXhPZihcImxpbmVAXCIpID09PSAwKXtcbiAgICAgICAgbGluZXMucHVzaCh0aGlzLmZyYW1lQ29tcG9uZW50LnJlZnNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgZ2V0IGxhc3RMaW5lKCl7XG4gICAgdmFyIGxpbmVzID0gdGhpcy5saW5lQ29tcG9uZW50c1xuICAgIHJldHVybiBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXVxuICB9XG5cbiAgY3JlYXRlRXZlbnRJZCgpe1xuICAgIHJldHVybiAnbmV3XycgKyAoKyt0aGlzLmNyZWF0ZWRFdmVudElkKTtcbiAgfVxuXG4gIGRyYWdnaW5nT3ZlcihsZWZ0KXtcbiAgICBjb25zdCBsaW5lQ29tcG9uZW50ID0gdGhpcy5maW5kTGluZUJ5TGVmdChsZWZ0KTtcbiAgICBpZihsaW5lQ29tcG9uZW50KXtcbiAgICAgIGlmKHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudCAhPT0gbGluZUNvbXBvbmVudCl7XG4gICAgICAgIGlmKHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudCl7XG4gICAgICAgICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50LmNsZWFyRHJhZ2dpbmdPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50ID0gbGluZUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50LmRyYWdnaW5nT3ZlcigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZih0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQpe1xuICAgICAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQuY2xlYXJEcmFnZ2luZ092ZXIoKTtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGluZUNvbXBvbmVudDtcbiAgfVxuXG4gIGNsZWFyRHJhZ2dpbmdPdmVyKCl7XG4gICAgaWYodGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50KXtcbiAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudC5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICAgIH1cbiAgfVxuXG4gIGdldFRvdGFsV2lkdGgoKXtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5saW5lRGF0YS5yZWR1Y2UoKHZhbCwgZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGhhc1J1bGVyID0gaW5kZXggJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG4gICAgICByZXR1cm4gdmFsICsgKGhhc1J1bGVyID8gdGhpcy5saW5lV2lkdGggKyBSdWxlci53aWR0aCA6IHRoaXMubGluZVdpZHRoKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGZpbmRFdmVudEJ5SWQoZXZlbnRJZCl7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRDb21wb25lbnRzLmZpbmQoZXYgPT4gZXYucHJvcHMuaWQgPT0gZXZlbnRJZCk7XG4gIH1cblxuICBmaW5kTGluZUJ5TGVmdChsZWZ0KXtcbiAgICB2YXIgd2lkdGggPSAwO1xuICAgIHJldHVybiB0aGlzLmxpbmVDb21wb25lbnRzLmZpbmQobGluZSA9PiB7XG4gICAgICB3aWR0aCArPSBsaW5lLnByb3BzLmhhc1J1bGVyID8gdGhpcy5wcm9wcy5saW5lV2lkdGggKyBSdWxlci53aWR0aCA6IHRoaXMucHJvcHMubGluZVdpZHRoO1xuICAgICAgaWYobGVmdCA8IHdpZHRoKXtcbiAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRMaW5lTGVmdChsaW5lSWQpe1xuICAgIGxldCBsZWZ0ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMubGluZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmVEYXRhID0gdGhpcy5wcm9wcy5saW5lRGF0YVtpXTtcbiAgICAgIGNvbnN0IGhhc1J1bGVyID0gaSAlIHRoaXMucHJvcHMucnVsZXJJbnRlcnZhbCA9PT0gMDtcbiAgICAgIGlmKGhhc1J1bGVyKXtcbiAgICAgICAgbGVmdCArPSBSdWxlci53aWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYobGluZURhdGEuaWQgPT0gbGluZUlkKXtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGxlZnQgKz0gdGhpcy5wcm9wcy5saW5lV2lkdGg7XG4gICAgfVxuXG4gICAgbGVmdCArPSBMaW5lLnNpZGVQYWRkaW5nO1xuXG4gICAgcmV0dXJuIGxlZnQ7XG4gIH1cblxuICBnZXRUaW1lU3Bhbih0b3AsIGhlaWdodCl7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gdGhpcy50b3BUb1RpbWUodG9wKTtcblxuICAgIGNvbnN0IGVuZFRpbWUgPSBzdGFydFRpbWUuYWRkTWluKGhlaWdodCAvIHRoaXMucGVyTWluSGVpZ2h0KTtcbiAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHN0YXJ0VGltZSwgZW5kVGltZSk7XG4gIH1cblxuICBtaW51dGVUb0hlaWdodChtaW51dGUpe1xuICAgIHJldHVybiAobWludXRlICogdGhpcy5wZXJNaW5IZWlnaHQpIC0gMTtcbiAgfVxuXG4gIHRpbWVTcGFuVG9IZWlnaHQodGltZVNwYW4pe1xuICAgIHJldHVybiB0aGlzLm1pbnV0ZVRvSGVpZ2h0KHRpbWVTcGFuLmdldERpc3RhbmNlKCkpO1xuICB9XG5cbiAgdGltZVRvVG9wKHRpbWUpe1xuICAgIHJldHVybiB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmdldERpc3RhbmNlKHRpbWUpICogdGhpcy5wZXJNaW5IZWlnaHQgLSAxO1xuICB9XG5cbiAgdG9wVG9UaW1lKHRvcCl7XG4gICAgaWYodG9wIDw9IDApe1xuICAgICAgcmV0dXJuIHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCk7XG4gICAgfVxuICAgIGxldCBtaW51dGUgPSB0b3AgLyB0aGlzLnBlck1pbkhlaWdodDtcbiAgICBjb25zdCByZXN0ID0gbWludXRlICUgdGhpcy5wcm9wcy5taW5JbnRlcnZhbDtcbiAgICBpZihyZXN0ICE9PSAwKXtcbiAgICAgIGlmKHJlc3QgPiB0aGlzLnByb3BzLm1pbkludGVydmFsIC8gMil7XG4gICAgICAgIG1pbnV0ZSArPSB0aGlzLnByb3BzLm1pbkludGVydmFsIC0gcmVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pbnV0ZSAtPSByZXN0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5hZGRNaW4obWludXRlKTtcbiAgfVxuXG4gIGZpbmRQcmV2RXZlbnQoZXZlbnRDb21wb25lbnQpe1xuICAgIHJldHVybiB0aGlzLmV2ZW50Q29tcG9uZW50c1xuICAgICAgLmZpbHRlcihldiA9PiAhZXYuc3RhdGUuZHJhZ2dhYmxlICYmIGV2LmxpbmVJZCA9PSBldmVudENvbXBvbmVudC5saW5lSWQpLy/lkIzjgZjliJfjga7jgoLjga7jgaDjgZHjgavntZ7jgotcbiAgICAgIC5zb3J0KChhLCBiKSA9PiAtKGEuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUoYi5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpKSkvL+aZgumWk+OBrumZjemghuOBp+S4puOBs+abv+OBiFxuICAgICAgLmZpbmQoZXYgPT4gZXYuY3VycmVudFRpbWVTcGFuLmdldEVuZFRpbWUoKS5jb21wYXJlKGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgPD0gMCkvL+mZjemghuOBquOBruOBp+WvvuixoeOCiOOCiuacgOWIneOBq+mWi+Wni+aZgumWk+OBjOiLpeOBhOOCguOBruOBjHByZXZcbiAgICAgIDtcbiAgfVxuXG4gIGdldFByZXZCb3R0b20oZXZlbnRDb21wb25lbnQpe1xuICAgIGNvbnN0IHByZXZFdmVudCA9IHRoaXMuZmluZFByZXZFdmVudChldmVudENvbXBvbmVudCk7XG4gICAgbGV0IGJvdHRvbVRpbWU7XG4gICAgaWYocHJldkV2ZW50KXtcbiAgICAgIGJvdHRvbVRpbWUgPSBwcmV2RXZlbnQuY3VycmVudFRpbWVTcGFuLmdldEVuZFRpbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm90dG9tVGltZSA9IHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGltZVRvVG9wKGJvdHRvbVRpbWUpO1xuICB9XG5cbiAgZmluZE5leHRFdmVudChldmVudENvbXBvbmVudCl7XG4gICAgcmV0dXJuIHRoaXMuZmluZE5leHRFdmVudEJ5VGltZShldmVudENvbXBvbmVudC5saW5lSWQsIGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCkpO1xuICB9XG5cbiAgZmluZE5leHRFdmVudEJ5VGltZShsaW5lSWQsIHRpbWUpe1xuICAgIHJldHVybiB0aGlzLmV2ZW50Q29tcG9uZW50c1xuICAgICAgLmZpbHRlcihldiA9PiAgIWV2LnN0YXRlLmRyYWdnYWJsZSAmJiBldi5saW5lSWQgPT0gbGluZUlkKS8v5ZCM44GY5YiX44Gu44KC44Gu44Gg44GR44Gr57We44KLXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuY29tcGFyZShiLmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkpLy/mmYLplpPjga7mmIfpoIbjgafkuKbjgbPmm7/jgYhcbiAgICAgIC5maW5kKGV2ID0+IGV2LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5jb21wYXJlKHRpbWUpID49IDApLy/mmIfpoIbjgarjga7jgaflr77osaHjgojjgormnIDliJ3jgavplovlp4vmmYLplpPjgYzpgYXjgYTjgoLjga7jgYxuZXh0XG4gICAgICA7XG4gIH1cblxuICBnZXRFdmVudHNPbkxpbmUobGluZUlkKXtcbiAgICByZXR1cm4gdGhpcy5ldmVudENvbXBvbmVudHMuZmlsdGVyKGV2ID0+ICAhZXYuc3RhdGUuZHJhZ2dhYmxlICYmIGV2LmxpbmVJZCA9PSBsaW5lSWQpXG4gIH1cblxuICBnZXROZXh0VGltZShsaW5lSWQsIHRpbWUpe1xuICAgIGNvbnN0IG5leHRFdmVudCA9IHRoaXMuZmluZE5leHRFdmVudEJ5VGltZShsaW5lSWQsIHRpbWUpO1xuICAgIGxldCBuZXh0VGltZTtcbiAgICBpZihuZXh0RXZlbnQpe1xuICAgICAgbmV4dFRpbWUgPSBuZXh0RXZlbnQuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0VGltZSA9IHRoaXMudGltZVNwYW4uZ2V0RW5kVGltZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VGltZTtcbiAgfVxuXG4gIGdldEZyZWVNaW51dGUobGluZUlkLCB0aW1lKXtcbiAgICBjb25zdCBuZXh0VGltZSA9IHRoaXMuZ2V0TmV4dFRpbWUobGluZUlkLCB0aW1lKTtcbiAgICByZXR1cm4gdGltZS5nZXREaXN0YW5jZShuZXh0VGltZSk7XG4gIH1cblxuICBnZXROZXh0VG9wKGV2ZW50Q29tcG9uZW50KXtcbiAgICByZXR1cm4gdGhpcy50aW1lVG9Ub3AodGhpcy5nZXROZXh0VGltZShldmVudENvbXBvbmVudC5saW5lSWQsIGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCkpKTtcbiAgfVxuICBhZGRFdmVudHMoZXZlbnRzKXtcbiAgICByZXR1cm4gdGhpcy5mcmFtZUNvbXBvbmVudC5hZGRFdmVudHMoZXZlbnRzKTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpe1xuICAgIHRoaXMuZnJhbWVDb21wb25lbnQuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICByZW1vdmVFdmVudChldmVudElkKXtcbiAgICByZXR1cm4gdGhpcy5mcmFtZUNvbXBvbmVudC5yZW1vdmVFdmVudChldmVudElkKTtcbiAgfVxuXG4gIHVwZGF0ZUV2ZW50cyhjYWxsYmFjayl7XG4gICAgdGhpcy5mcmFtZUNvbXBvbmVudC51cGRhdGVFdmVudHMoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFtZVxuICAgICAgICByZWY9XCJmcmFtZVwiXG4gICAgICAgIGxpbmVEYXRhPXt0aGlzLnByb3BzLmxpbmVEYXRhfVxuICAgICAgICB0aW1lU3Bhbj17dGhpcy5wcm9wcy50aW1lU3Bhbn1cbiAgICAgICAgbGluZVdpZHRoPXt0aGlzLnByb3BzLmxpbmVXaWR0aH1cbiAgICAgICAgbWluSGVpZ2h0PXt0aGlzLnByb3BzLm1pbkhlaWdodH1cbiAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH1cbiAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgIGxpbmVIZWlnaHQ9e3RoaXMubGluZUhlaWdodH1cbiAgICAgICAgdGltZWxpbmU9e3RoaXN9XG4gICAgICAgIHJ1bGVySW50ZXJ2YWw9e3RoaXMucHJvcHMucnVsZXJJbnRlcnZhbH1cbiAgICAgICAgaW5pdGlhbEV2ZW50cz17dGhpcy5wcm9wcy5pbml0aWFsRXZlbnRzfVxuICAgICAgICBjaGlsZHJlbj17dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgY2hpbGRXaWR0aD17dGhpcy5wcm9wcy5jaGlsZFdpZHRofVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbi8vIFRpbWVsaW5lLnByb3BUeXBlcyA9IHtcbi8vICAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuLy8gICBsaW5lRGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbi8vICAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuLy8gICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbi8vICAgfSkpLmlzUmVxdWlyZWQsXG4vLyAgIGxpbmVXaWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4vLyAgIHJ1bGVySW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgbWluSW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4vLyAgIGhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4vLyB9XG5cblRpbWVsaW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgbWluSW50ZXJ2YWw6IDEsXG4gIGNoaWxkV2lkdGg6IDBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIi8qKlxuICog5LiA5bqm55Sf5oiQ44GX44Gf44Kq44OW44K444Kn44Kv44OI44Gv5aSJ5pu044GX44G+44Gb44KT44CCXG4gKiDlpInmm7Tjg6Hjgr3jg4Pjg4njga/mlrDjgZfjgYTjgqrjg5bjgrjjgqfjgq/jg4jjgpLluLDjgZfjgb7jgZnjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVxue1xuICBzdGF0aWMgZWFjaE1pbihjYWxsYmFjaywgbWludXRlSW50ZXJ2YWwpe1xuICAgICAgdmFyIGNvdW50ID0gNjAgLyBtaW51dGVJbnRlcnZhbDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgIHZhciBtaW4gPSBpICogbWludXRlSW50ZXJ2YWw7XG4gICAgICAgICAgaWYobWluIDwgNjApe1xuICAgICAgICAgICAgICB2YXIgZGlzcGxheU1pbiA9IG1pbiA8IDEwID8gJzAnICsgbWluIDogbWluICsgJyc7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwobWluLCBpLCBtaW4sIGRpc3BsYXlNaW4pO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIOmFjeWIl+OBi+OCiVRpbWXjgpLnlJ/miJBcbiAgICogQHBhcmFtICB7YXJyYXl9IHRpbWUgW2hvdXIsIG1pbl3jga7phY3liJdcbiAgICogQHJldHVybiB7VGltZX1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGltZVswXSwgdGltZVsxXSk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoaG91ciwgbWluKXtcbiAgICB0aGlzLl9ob3VyID0gaG91ciA9PT0gdW5kZWZpbmVkID8gMCA6IHBhcnNlSW50KGhvdXIsIDEwKTtcbiAgICB0aGlzLl9taW4gPSBtaW4gPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChtaW4sIDEwKTtcbiAgICB3aGlsZSh0aGlzLl9taW4gPCAwKXtcbiAgICAgICAgLS10aGlzLl9ob3VyO1xuICAgICAgICB0aGlzLl9taW4gPSA2MCArIHRoaXMuX21pbjtcbiAgICB9XG5cbiAgICB3aGlsZSh0aGlzLl9taW4gPiA1OSl7XG4gICAgICAgICsrdGhpcy5faG91cjtcbiAgICAgICAgdGhpcy5fbWluID0gdGhpcy5fbWluIC0gNjA7XG4gICAgfVxuXG4gICAgaWYodGhpcy5faG91ciA8IDApXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50b1N0cmluZygpKycgaXMgbm90IHZhbGlkIHRpbWUuJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SG91cigpeyByZXR1cm4gdGhpcy5faG91cjsgfTtcbiAgZ2V0TWluKCl7IHJldHVybiB0aGlzLl9taW47IH07XG5cbiAgY2xvbmUoKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aGlzLmdldEhvdXIoKSwgdGhpcy5nZXRNaW4oKSk7XG4gIH07XG5cbiAgYWRkTWluKG1pbil7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGhpcy5nZXRIb3VyKCksIHRoaXMuZ2V0TWluKCkgKyBwYXJzZUludChtaW4sIDEwKSk7XG4gIH07XG5cbiAgZXF1YWxzKHRpbWUpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SG91cigpID09PSB0aW1lLmdldEhvdXIoKSAmJiB0aGlzLmdldE1pbigpID09PSB0aW1lLmdldE1pbigpO1xuICB9O1xuXG4gIGNvbXBhcmUodGltZSl7XG4gICAgICBpZih0aGlzLmdldEhvdXIoKSA+IHRpbWUuZ2V0SG91cigpKVxuICAgICAge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0aGlzLmdldEhvdXIoKSA8IHRpbWUuZ2V0SG91cigpKVxuICAgICAge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgICBpZih0aGlzLmdldE1pbigpID4gdGltZS5nZXRNaW4oKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMuZ2V0TWluKCkgPCB0aW1lLmdldE1pbigpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgZ2V0RGlzdGFuY2UodGFyZ2V0VGltZSl7XG4gICAgICB2YXIgdGFyZ2V0SG91ciA9IHRhcmdldFRpbWUuZ2V0SG91cigpO1xuICAgICAgdmFyIGhvdXJEaXN0YW5jZSA9IHRhcmdldEhvdXIgLSB0aGlzLl9ob3VyO1xuICAgICAgcmV0dXJuIChob3VyRGlzdGFuY2UgKiA2MCkgKyAodGFyZ2V0VGltZS5nZXRNaW4oKSAtIHRoaXMuX21pbik7XG4gIH07XG5cbiAgdG9TdHJpbmcoKXtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlUaW1lKCk7XG4gIH07XG5cbiAgZ2V0RGlzcGxheUhvdXIoKXtcbiAgICAgIHJldHVybiB0aGlzLl9ob3VyIDwgMjQgPyB0aGlzLl9ob3VyIDogdGhpcy5faG91ciAtIDI0O1xuICB9O1xuXG4gIGdldERpc3BsYXlNaW4oKXtcbiAgICAgIHJldHVybiB0aGlzLl9taW4gPCAxMCA/ICcwJyt0aGlzLl9taW4gOiB0aGlzLl9taW47XG4gIH07XG5cbiAgZ2V0RGlzcGxheVRpbWUoKXtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlIb3VyKCkgKyc6JysgdGhpcy5nZXREaXNwbGF5TWluKCk7XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNXaXRoKGFycmF5LCB2YWx1ZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheU1hcC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgb3ZlclJlc3QgPSByZXF1aXJlKCcuL19vdmVyUmVzdCcpLFxuICAgIHNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fc2V0VG9TdHJpbmcnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlc3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VSZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBhcmd1bWVudHM6IHRydWUsXG4gICAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBpc0dldE93blByb3BlcnR5U3ltYm9sc0F2YWlsYWJsZSA9IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBjdXN0b21TdGF0aWNzKSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoaXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoIVJFQUNUX1NUQVRJQ1Nba2V5c1tpXV0gJiYgIUtOT1dOX1NUQVRJQ1Nba2V5c1tpXV0gJiYgKCFjdXN0b21TdGF0aWNzIHx8ICFjdXN0b21TdGF0aWNzW2tleXNbaV1dKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENvbXBvbmVudFtrZXlzW2ldXSA9IHNvdXJjZUNvbXBvbmVudFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzaGFsbG93RXF1YWw7XG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKCFoYXNPd24uY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgb2JqQVtrZXlzQVtpXV0gIT09IG9iakJba2V5c0FbaV1dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbEEgPSBvYmpBW2tleXNBW2ldXTtcbiAgICB2YXIgdmFsQiA9IG9iakJba2V5c0FbaV1dO1xuXG4gICAgaWYgKHZhbEEgIT09IHZhbEIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3V0aWxzL3NoYWxsb3dFcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gaXNEaXNwb3NhYmxlO1xuXG5mdW5jdGlvbiBpc0Rpc3Bvc2FibGUob2JqKSB7XG4gIHJldHVybiBCb29sZWFuKG9iaiAmJiB0eXBlb2Ygb2JqLmRpc3Bvc2UgPT09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kaXNwb3NhYmxlcy9tb2R1bGVzL2lzRGlzcG9zYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBIb3VyIGZyb20gJy4vSG91cic7XG5pbXBvcnQgUnVsZXIgZnJvbSAnLi9SdWxlcic7XG5pbXBvcnQgTGluZUxhYmVsIGZyb20gJy4vTGluZUxhYmVsJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vVGltZWxpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdXJzOiBbXSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBkcmFnZ2luZ092ZXI6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMucHJvcHMudGltZVNwYW4uZWFjaFRpbWUoKGtleSwgdGltZSkgPT4ge1xuICAgICAgaWYoIXRpbWUuZXF1YWxzKHRoaXMucHJvcHMudGltZVNwYW4uZ2V0RW5kVGltZSgpKSl7XG4gICAgICAgIHRoaXMuc3RhdGUuaG91cnMucHVzaChcbiAgICAgICAgICA8SG91clxuICAgICAgICAgICAga2V5PXt0aW1lLmdldEhvdXIoKX1cbiAgICAgICAgICAgIHRpbWU9e3RpbWV9XG4gICAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnZhcnMgPSB0aGlzLnByb3BzLnZhcnMgfHwge307XG4gIH1cblxuICBnZXRSZWxhdGl2ZVRvcChlKXtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5wcm9wcy5mcmFtZS5yZWZzLmxpbmVzV3JhcHBlcjtcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gZS5jbGllbnRZIC0gcGFyZW50UmVjdC50b3AgKyBwYXJlbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5saW5lRGlkQ2xpY2spe1xuICAgICAgY29uc3QgdGltZSA9IHRoaXMucHJvcHMudGltZWxpbmUudG9wVG9UaW1lKHRoaXMuZ2V0UmVsYXRpdmVUb3AoZSkpO1xuICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5saW5lRGlkQ2xpY2soe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgIGZyZWVNaW51dGU6IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0RnJlZU1pbnV0ZSh0aGlzLnByb3BzLmlkLCB0aW1lKSxcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQucmVmcy5saW5lc1dyYXBwZXIuc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbExlZnQ6IHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQuZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgICAgIHRvcDogZS5jbGllbnRZLFxuICAgICAgICAgIGxlZnQ6IGUuY2xpZW50WCxcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnQ6IGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ29udGV4dE1lbnUoZSl7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5saW5lRGlkUmlnaHRDbGljayl7XG4gICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmxpbmVEaWRSaWdodENsaWNrKHtcbiAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhZ2dpbmdPdmVyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmdPdmVyOiB0cnVlfSk7XG4gIH1cblxuICBjbGVhckRyYWdnaW5nT3Zlcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nT3ZlcjogZmFsc2V9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9uQ29udGV4dE1lbnU9e2UgPT4gdGhpcy5vbkNvbnRleHRNZW51KGUpfT5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5wcm9wcy5oYXNSdWxlcil7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UnVsZXJcbiAgICAgICAgICAgICAgICBrZXk9eydydWxlcl8nICsgdGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgICAgPGRpdiBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0bExpbmVWaWV3Jywge3RsRXZlbjogdGhpcy5wcm9wcy5ldmVuLCB0bE9kZDogIXRoaXMucHJvcHMuZXZlbn0sIHt0bE92ZXI6IHRoaXMuc3RhdGUuZHJhZ2dpbmdPdmVyfSl9IHN0eWxlPXt7d2lkdGg6IHRoaXMucHJvcHMud2lkdGggKyAncHgnfX0+XG4gICAgICAgICAge3RoaXMuc3RhdGUuaG91cnN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5MaW5lLnNpZGVQYWRkaW5nID0gMTtcblxuLy8gTGluZS5wcm9wVHlwZXMgPSB7XG4vLyAgIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4vLyAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4vLyAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuLy8gICBldmVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuLy8gICAvL1RPRE8g5b6q55Kw5Y+C54Wn44Gr44Gq44KL44Gu44GnaW1wb3J044Gn44GN44Ga44CC44Go44KK44GC44GI44GaYW5544Gn44GU44G+44GL44GX44Gm44G+44GZ44CCXG4vLyAgIHRpbWVsaW5lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4vLyAgIGhhc1J1bGVyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG4vLyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MaW5lLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUnVsZXIgZnJvbSAnLi9SdWxlcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUxhYmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNSdWxlcjogdGhpcy5wcm9wcy5oYXNSdWxlcixcbiAgICAgIHByZXZSdWxlcjogdGhpcy5wcm9wcy5wcmV2UnVsZXIsXG4gICAgICBpc0xhc3Q6IHRoaXMucHJvcHMuaXNMYXN0XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3t3aWR0aDogdGhpcy5wcm9wcy53aWR0aCwgbWFyZ2luTGVmdDogdGhpcy5zdGF0ZS5oYXNSdWxlciA/IFJ1bGVyLndpZHRoICsgJ3B4JyA6IDB9fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe3RsTGFiZWw6IHRydWUsIHRsSGFzUnVsZXI6IHRoaXMuc3RhdGUuaGFzUnVsZXIsIHRsUHJldlJ1bGVyOiB0aGlzLnN0YXRlLnByZXZSdWxlciwgdGxMYXN0OiB0aGlzLnN0YXRlLmlzTGFzdH0pfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGluZUxhYmVsLmhlaWdodCA9IDE2O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGluZUxhYmVsLmpzeCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9EcmFnRHJvcENvbnRleHQgPSByZXF1aXJlKCcuL0RyYWdEcm9wQ29udGV4dCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0RyYWdEcm9wQ29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RyYWdEcm9wQ29udGV4dCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfRHJhZ0Ryb3BDb250ZXh0UHJvdmlkZXIgPSByZXF1aXJlKCcuL0RyYWdEcm9wQ29udGV4dFByb3ZpZGVyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRHJhZ0Ryb3BDb250ZXh0UHJvdmlkZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EcmFnRHJvcENvbnRleHRQcm92aWRlcikuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfRHJhZ0xheWVyID0gcmVxdWlyZSgnLi9EcmFnTGF5ZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdEcmFnTGF5ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EcmFnTGF5ZXIpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0RyYWdTb3VyY2UgPSByZXF1aXJlKCcuL0RyYWdTb3VyY2UnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdEcmFnU291cmNlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJhZ1NvdXJjZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfRHJvcFRhcmdldCA9IHJlcXVpcmUoJy4vRHJvcFRhcmdldCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Ryb3BUYXJnZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wVGFyZ2V0KS5kZWZhdWx0O1xuICB9XG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVucGFja0JhY2tlbmRGb3JFczVVc2VycyA9IGV4cG9ydHMuY3JlYXRlQ2hpbGRDb250ZXh0ID0gZXhwb3J0cy5DSElMRF9DT05URVhUX1RZUEVTID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IERyYWdEcm9wQ29udGV4dDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9kbmRDb3JlID0gcmVxdWlyZSgnZG5kLWNvcmUnKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljcyA9IHJlcXVpcmUoJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJyk7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaG9pc3ROb25SZWFjdFN0YXRpY3MpO1xuXG52YXIgX2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzID0gcmVxdWlyZSgnLi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cycpO1xuXG52YXIgX2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ0hJTERfQ09OVEVYVF9UWVBFUyA9IGV4cG9ydHMuQ0hJTERfQ09OVEVYVF9UWVBFUyA9IHtcbiAgZHJhZ0Ryb3BNYW5hZ2VyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG52YXIgY3JlYXRlQ2hpbGRDb250ZXh0ID0gZXhwb3J0cy5jcmVhdGVDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBjcmVhdGVDaGlsZENvbnRleHQoYmFja2VuZCwgY29udGV4dCkge1xuICByZXR1cm4ge1xuICAgIGRyYWdEcm9wTWFuYWdlcjogbmV3IF9kbmRDb3JlLkRyYWdEcm9wTWFuYWdlcihiYWNrZW5kLCBjb250ZXh0KVxuICB9O1xufTtcblxudmFyIHVucGFja0JhY2tlbmRGb3JFczVVc2VycyA9IGV4cG9ydHMudW5wYWNrQmFja2VuZEZvckVzNVVzZXJzID0gZnVuY3Rpb24gdW5wYWNrQmFja2VuZEZvckVzNVVzZXJzKGJhY2tlbmRPck1vZHVsZSkge1xuICAvLyBBdXRvLWRldGVjdCBFUzYgZGVmYXVsdCBleHBvcnQgZm9yIHBlb3BsZSBzdGlsbCB1c2luZyBFUzVcbiAgdmFyIGJhY2tlbmQgPSBiYWNrZW5kT3JNb2R1bGU7XG4gIGlmICgodHlwZW9mIGJhY2tlbmQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGJhY2tlbmQpKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGJhY2tlbmQuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGJhY2tlbmQgPSBiYWNrZW5kLmRlZmF1bHQ7XG4gIH1cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHR5cGVvZiBiYWNrZW5kID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgdGhlIGJhY2tlbmQgdG8gYmUgYSBmdW5jdGlvbiBvciBhbiBFUzYgbW9kdWxlIGV4cG9ydGluZyBhIGRlZmF1bHQgZnVuY3Rpb24uICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLWRyb3AtY29udGV4dC5odG1sJyk7XG4gIHJldHVybiBiYWNrZW5kO1xufTtcblxuZnVuY3Rpb24gRHJhZ0Ryb3BDb250ZXh0KGJhY2tlbmRPck1vZHVsZSkge1xuICBfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyLmRlZmF1bHQuYXBwbHkodW5kZWZpbmVkLCBbJ0RyYWdEcm9wQ29udGV4dCcsICdiYWNrZW5kJ10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcblxuICB2YXIgYmFja2VuZCA9IHVucGFja0JhY2tlbmRGb3JFczVVc2VycyhiYWNrZW5kT3JNb2R1bGUpO1xuICB2YXIgY2hpbGRDb250ZXh0ID0gY3JlYXRlQ2hpbGRDb250ZXh0KGJhY2tlbmQpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0ZUNvbnRleHQoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgICB2YXIgZGlzcGxheU5hbWUgPSBEZWNvcmF0ZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgRGVjb3JhdGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cbiAgICB2YXIgRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyID0gKF90ZW1wID0gX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhEcmFnRHJvcENvbnRleHRDb250YWluZXIsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBEcmFnRHJvcENvbnRleHRDb250YWluZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnRHJvcENvbnRleHRDb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhEcmFnRHJvcENvbnRleHRDb250YWluZXIsIFt7XG4gICAgICAgIGtleTogJ2dldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlKCkge1xuICAgICAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLmNoaWxkLCAnSW4gb3JkZXIgdG8gYWNjZXNzIGFuIGluc3RhbmNlIG9mIHRoZSBkZWNvcmF0ZWQgY29tcG9uZW50IGl0IGNhbiAnICsgJ25vdCBiZSBhIHN0YXRlbGVzcyBjb21wb25lbnQuJyk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0TWFuYWdlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNYW5hZ2VyKCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZENvbnRleHQuZHJhZ0Ryb3BNYW5hZ2VyO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkQ29udGV4dDtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERlY29yYXRlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGNoaWxkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczIuY2hpbGQgPSBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIERyYWdEcm9wQ29udGV4dENvbnRhaW5lcjtcbiAgICB9KF9yZWFjdC5Db21wb25lbnQpLCBfY2xhc3MuRGVjb3JhdGVkQ29tcG9uZW50ID0gRGVjb3JhdGVkQ29tcG9uZW50LCBfY2xhc3MuZGlzcGxheU5hbWUgPSAnRHJhZ0Ryb3BDb250ZXh0KCcgKyBkaXNwbGF5TmFtZSArICcpJywgX2NsYXNzLmNoaWxkQ29udGV4dFR5cGVzID0gQ0hJTERfQ09OVEVYVF9UWVBFUywgX3RlbXApO1xuXG5cbiAgICByZXR1cm4gKDAsIF9ob2lzdE5vblJlYWN0U3RhdGljczIuZGVmYXVsdCkoRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLCBEZWNvcmF0ZWRDb21wb25lbnQpO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvRHJhZ0Ryb3BDb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRyYWdPZmZzZXQ7XG5leHBvcnRzLmdldFNvdXJjZUNsaWVudE9mZnNldCA9IGdldFNvdXJjZUNsaWVudE9mZnNldDtcbmV4cG9ydHMuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0ID0gZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0O1xuXG52YXIgX2RyYWdEcm9wID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9kcmFnRHJvcCcpO1xuXG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICBpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0OiBudWxsLFxuICBpbml0aWFsQ2xpZW50T2Zmc2V0OiBudWxsLFxuICBjbGllbnRPZmZzZXQ6IG51bGxcbn07XG5cbmZ1bmN0aW9uIGFyZU9mZnNldHNFcXVhbChvZmZzZXRBLCBvZmZzZXRCKSB7XG4gIGlmIChvZmZzZXRBID09PSBvZmZzZXRCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIG9mZnNldEEgJiYgb2Zmc2V0QiAmJiBvZmZzZXRBLnggPT09IG9mZnNldEIueCAmJiBvZmZzZXRBLnkgPT09IG9mZnNldEIueTtcbn1cblxuZnVuY3Rpb24gZHJhZ09mZnNldCgpIHtcbiAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBpbml0aWFsU3RhdGU7XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgX2RyYWdEcm9wLkJFR0lOX0RSQUc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0OiBhY3Rpb24uc291cmNlQ2xpZW50T2Zmc2V0LFxuICAgICAgICBpbml0aWFsQ2xpZW50T2Zmc2V0OiBhY3Rpb24uY2xpZW50T2Zmc2V0LFxuICAgICAgICBjbGllbnRPZmZzZXQ6IGFjdGlvbi5jbGllbnRPZmZzZXRcbiAgICAgIH07XG4gICAgY2FzZSBfZHJhZ0Ryb3AuSE9WRVI6XG4gICAgICBpZiAoYXJlT2Zmc2V0c0VxdWFsKHN0YXRlLmNsaWVudE9mZnNldCwgYWN0aW9uLmNsaWVudE9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjbGllbnRPZmZzZXQ6IGFjdGlvbi5jbGllbnRPZmZzZXRcbiAgICAgIH0pO1xuICAgIGNhc2UgX2RyYWdEcm9wLkVORF9EUkFHOlxuICAgIGNhc2UgX2RyYWdEcm9wLkRST1A6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KHN0YXRlKSB7XG4gIHZhciBjbGllbnRPZmZzZXQgPSBzdGF0ZS5jbGllbnRPZmZzZXQsXG4gICAgICBpbml0aWFsQ2xpZW50T2Zmc2V0ID0gc3RhdGUuaW5pdGlhbENsaWVudE9mZnNldCxcbiAgICAgIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQgPSBzdGF0ZS5pbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0O1xuXG4gIGlmICghY2xpZW50T2Zmc2V0IHx8ICFpbml0aWFsQ2xpZW50T2Zmc2V0IHx8ICFpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiBjbGllbnRPZmZzZXQueCArIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQueCAtIGluaXRpYWxDbGllbnRPZmZzZXQueCxcbiAgICB5OiBjbGllbnRPZmZzZXQueSArIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQueSAtIGluaXRpYWxDbGllbnRPZmZzZXQueVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoc3RhdGUpIHtcbiAgdmFyIGNsaWVudE9mZnNldCA9IHN0YXRlLmNsaWVudE9mZnNldCxcbiAgICAgIGluaXRpYWxDbGllbnRPZmZzZXQgPSBzdGF0ZS5pbml0aWFsQ2xpZW50T2Zmc2V0O1xuXG4gIGlmICghY2xpZW50T2Zmc2V0IHx8ICFpbml0aWFsQ2xpZW50T2Zmc2V0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiBjbGllbnRPZmZzZXQueCAtIGluaXRpYWxDbGllbnRPZmZzZXQueCxcbiAgICB5OiBjbGllbnRPZmZzZXQueSAtIGluaXRpYWxDbGllbnRPZmZzZXQueVxuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT2Zmc2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBtYXRjaGVzVHlwZTtcblxudmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKTtcblxudmFyIF9pc0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQXJyYXkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBtYXRjaGVzVHlwZSh0YXJnZXRUeXBlLCBkcmFnZ2VkSXRlbVR5cGUpIHtcbiAgaWYgKCgwLCBfaXNBcnJheTIuZGVmYXVsdCkodGFyZ2V0VHlwZSkpIHtcbiAgICByZXR1cm4gdGFyZ2V0VHlwZS5zb21lKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdCA9PT0gZHJhZ2dlZEl0ZW1UeXBlO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0YXJnZXRUeXBlID09PSBkcmFnZ2VkSXRlbVR5cGU7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvdXRpbHMvbWF0Y2hlc1R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGxpa2UgYF8uZGlmZmVyZW5jZWAgd2l0aG91dCBzdXBwb3J0XG4gKiBmb3IgZXhjbHVkaW5nIG11bHRpcGxlIGFycmF5cyBvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGV4Y2x1ZGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VEaWZmZXJlbmNlKGFycmF5LCB2YWx1ZXMsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICB2YWx1ZXNMZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xuXG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoaXRlcmF0ZWUpIHtcbiAgICB2YWx1ZXMgPSBhcnJheU1hcCh2YWx1ZXMsIGJhc2VVbmFyeShpdGVyYXRlZSkpO1xuICB9XG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICB9XG4gIGVsc2UgaWYgKHZhbHVlcy5sZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB2YWx1ZXMgPSBuZXcgU2V0Q2FjaGUodmFsdWVzKTtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPT0gbnVsbCA/IHZhbHVlIDogaXRlcmF0ZWUodmFsdWUpO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHZhbHVlc0luZGV4ID0gdmFsdWVzTGVuZ3RoO1xuICAgICAgd2hpbGUgKHZhbHVlc0luZGV4LS0pIHtcbiAgICAgICAgaWYgKHZhbHVlc1t2YWx1ZXNJbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHZhbHVlcywgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZURpZmZlcmVuY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VEaWZmZXJlbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pZGVudGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGlydHlIYW5kbGVySWRzO1xuZXhwb3J0cy5hcmVEaXJ0eSA9IGFyZURpcnR5O1xuXG52YXIgX3hvciA9IHJlcXVpcmUoJ2xvZGFzaC94b3InKTtcblxudmFyIF94b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfeG9yKTtcblxudmFyIF9pbnRlcnNlY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaW50ZXJzZWN0aW9uJyk7XG5cbnZhciBfaW50ZXJzZWN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludGVyc2VjdGlvbik7XG5cbnZhciBfZHJhZ0Ryb3AgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2RyYWdEcm9wJyk7XG5cbnZhciBfcmVnaXN0cnkgPSByZXF1aXJlKCcuLi9hY3Rpb25zL3JlZ2lzdHJ5Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBOT05FID0gW107XG52YXIgQUxMID0gW107XG5cbmZ1bmN0aW9uIGRpcnR5SGFuZGxlcklkcygpIHtcbiAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBOT05FO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuICB2YXIgZHJhZ09wZXJhdGlvbiA9IGFyZ3VtZW50c1syXTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBfZHJhZ0Ryb3AuSE9WRVI6XG4gICAgICBicmVhaztcbiAgICBjYXNlIF9yZWdpc3RyeS5BRERfU09VUkNFOlxuICAgIGNhc2UgX3JlZ2lzdHJ5LkFERF9UQVJHRVQ6XG4gICAgY2FzZSBfcmVnaXN0cnkuUkVNT1ZFX1RBUkdFVDpcbiAgICBjYXNlIF9yZWdpc3RyeS5SRU1PVkVfU09VUkNFOlxuICAgICAgcmV0dXJuIE5PTkU7XG4gICAgY2FzZSBfZHJhZ0Ryb3AuQkVHSU5fRFJBRzpcbiAgICBjYXNlIF9kcmFnRHJvcC5QVUJMSVNIX0RSQUdfU09VUkNFOlxuICAgIGNhc2UgX2RyYWdEcm9wLkVORF9EUkFHOlxuICAgIGNhc2UgX2RyYWdEcm9wLkRST1A6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBBTEw7XG4gIH1cblxuICB2YXIgdGFyZ2V0SWRzID0gYWN0aW9uLnRhcmdldElkcztcbiAgdmFyIHByZXZUYXJnZXRJZHMgPSBkcmFnT3BlcmF0aW9uLnRhcmdldElkcztcblxuICB2YXIgcmVzdWx0ID0gKDAsIF94b3IyLmRlZmF1bHQpKHRhcmdldElkcywgcHJldlRhcmdldElkcyk7XG5cbiAgdmFyIGRpZENoYW5nZSA9IGZhbHNlO1xuICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0SWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGFyZ2V0SWRzW2ldICE9PSBwcmV2VGFyZ2V0SWRzW2ldKSB7XG4gICAgICAgIGRpZENoYW5nZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkaWRDaGFuZ2UgPSB0cnVlO1xuICB9XG5cbiAgaWYgKCFkaWRDaGFuZ2UpIHtcbiAgICByZXR1cm4gTk9ORTtcbiAgfVxuXG4gIHZhciBwcmV2SW5uZXJtb3N0VGFyZ2V0SWQgPSBwcmV2VGFyZ2V0SWRzW3ByZXZUYXJnZXRJZHMubGVuZ3RoIC0gMV07XG4gIHZhciBpbm5lcm1vc3RUYXJnZXRJZCA9IHRhcmdldElkc1t0YXJnZXRJZHMubGVuZ3RoIC0gMV07XG5cbiAgaWYgKHByZXZJbm5lcm1vc3RUYXJnZXRJZCAhPT0gaW5uZXJtb3N0VGFyZ2V0SWQpIHtcbiAgICBpZiAocHJldklubmVybW9zdFRhcmdldElkKSB7XG4gICAgICByZXN1bHQucHVzaChwcmV2SW5uZXJtb3N0VGFyZ2V0SWQpO1xuICAgIH1cbiAgICBpZiAoaW5uZXJtb3N0VGFyZ2V0SWQpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGlubmVybW9zdFRhcmdldElkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBhcmVEaXJ0eShzdGF0ZSwgaGFuZGxlcklkcykge1xuICBpZiAoc3RhdGUgPT09IE5PTkUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc3RhdGUgPT09IEFMTCB8fCB0eXBlb2YgaGFuZGxlcklkcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2ludGVyc2VjdGlvbjIuZGVmYXVsdCkoaGFuZGxlcklkcywgc3RhdGUpLmxlbmd0aCA+IDA7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL3JlZHVjZXJzL2RpcnR5SGFuZGxlcklkcy5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vb3AuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IERyYWdMYXllcjtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljcyA9IHJlcXVpcmUoJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJyk7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaG9pc3ROb25SZWFjdFN0YXRpY3MpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQbGFpbk9iamVjdCk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF9zaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0VxdWFsKTtcblxudmFyIF9zaGFsbG93RXF1YWxTY2FsYXIgPSByZXF1aXJlKCcuL3V0aWxzL3NoYWxsb3dFcXVhbFNjYWxhcicpO1xuXG52YXIgX3NoYWxsb3dFcXVhbFNjYWxhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWxTY2FsYXIpO1xuXG52YXIgX2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzID0gcmVxdWlyZSgnLi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cycpO1xuXG52YXIgX2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBEcmFnTGF5ZXIoY29sbGVjdCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgX2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMi5kZWZhdWx0LmFwcGx5KHVuZGVmaW5lZCwgWydEcmFnTGF5ZXInLCAnY29sbGVjdFssIG9wdGlvbnNdJ10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHR5cGVvZiBjb2xsZWN0ID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgXCJjb2xsZWN0XCIgcHJvdmlkZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIERyYWdMYXllciAnICsgJ3RvIGJlIGEgZnVuY3Rpb24gdGhhdCBjb2xsZWN0cyBwcm9wcyB0byBpbmplY3QgaW50byB0aGUgY29tcG9uZW50LiAnLCAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLWxheWVyLmh0bWwnLCBjb2xsZWN0KTtcbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkob3B0aW9ucyksICdFeHBlY3RlZCBcIm9wdGlvbnNcIiBwcm92aWRlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIERyYWdMYXllciB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0IHdoZW4gc3BlY2lmaWVkLiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1sYXllci5odG1sJywgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRlTGF5ZXIoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgICB2YXIgX29wdGlvbnMkYXJlUHJvcHNFcXVhID0gb3B0aW9ucy5hcmVQcm9wc0VxdWFsLFxuICAgICAgICBhcmVQcm9wc0VxdWFsID0gX29wdGlvbnMkYXJlUHJvcHNFcXVhID09PSB1bmRlZmluZWQgPyBfc2hhbGxvd0VxdWFsU2NhbGFyMi5kZWZhdWx0IDogX29wdGlvbnMkYXJlUHJvcHNFcXVhO1xuXG4gICAgdmFyIGRpc3BsYXlOYW1lID0gRGVjb3JhdGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IERlY29yYXRlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuXG4gICAgdmFyIERyYWdMYXllckNvbnRhaW5lciA9IChfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoRHJhZ0xheWVyQ29udGFpbmVyLCBfQ29tcG9uZW50KTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKERyYWdMYXllckNvbnRhaW5lciwgW3tcbiAgICAgICAga2V5OiAnZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UoKSB7XG4gICAgICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMuY2hpbGQsICdJbiBvcmRlciB0byBhY2Nlc3MgYW4gaW5zdGFuY2Ugb2YgdGhlIGRlY29yYXRlZCBjb21wb25lbnQgaXQgY2FuICcgKyAnbm90IGJlIGEgc3RhdGVsZXNzIGNvbXBvbmVudC4nKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZDtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuICFhcmVQcm9wc0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KShuZXh0U3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIGZ1bmN0aW9uIERyYWdMYXllckNvbnRhaW5lcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0xheWVyQ29udGFpbmVyKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRHJhZ0xheWVyQ29udGFpbmVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHJhZ0xheWVyQ29udGFpbmVyKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLmhhbmRsZUNoYW5nZSA9IF90aGlzLmhhbmRsZUNoYW5nZS5iaW5kKF90aGlzKTtcblxuICAgICAgICBfdGhpcy5tYW5hZ2VyID0gY29udGV4dC5kcmFnRHJvcE1hbmFnZXI7XG4gICAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShfdHlwZW9mKF90aGlzLm1hbmFnZXIpID09PSAnb2JqZWN0JywgJ0NvdWxkIG5vdCBmaW5kIHRoZSBkcmFnIGFuZCBkcm9wIG1hbmFnZXIgaW4gdGhlIGNvbnRleHQgb2YgJXMuICcgKyAnTWFrZSBzdXJlIHRvIHdyYXAgdGhlIHRvcC1sZXZlbCBjb21wb25lbnQgb2YgeW91ciBhcHAgd2l0aCBEcmFnRHJvcENvbnRleHQuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy10cm91Ymxlc2hvb3RpbmcuaHRtbCNjb3VsZC1ub3QtZmluZC10aGUtZHJhZy1hbmQtZHJvcC1tYW5hZ2VyLWluLXRoZS1jb250ZXh0JywgZGlzcGxheU5hbWUsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IF90aGlzLmdldEN1cnJlbnRTdGF0ZSgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhEcmFnTGF5ZXJDb250YWluZXIsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgIHRoaXMuaXNDdXJyZW50bHlNb3VudGVkID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBtb25pdG9yID0gdGhpcy5tYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbU9mZnNldENoYW5nZSA9IG1vbml0b3Iuc3Vic2NyaWJlVG9PZmZzZXRDaGFuZ2UodGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tU3RhdGVDaGFuZ2UgPSBtb25pdG9yLnN1YnNjcmliZVRvU3RhdGVDaGFuZ2UodGhpcy5oYW5kbGVDaGFuZ2UpO1xuXG4gICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21PZmZzZXRDaGFuZ2UoKTtcbiAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVN0YXRlQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlQ2hhbmdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNDdXJyZW50bHlNb3VudGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG5leHRTdGF0ZSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICAgICAgaWYgKCEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkobmV4dFN0YXRlLCB0aGlzLnN0YXRlKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRDdXJyZW50U3RhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFN0YXRlKCkge1xuICAgICAgICAgIHZhciBtb25pdG9yID0gdGhpcy5tYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgICAgICAgICByZXR1cm4gY29sbGVjdChtb25pdG9yKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERlY29yYXRlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUsIHtcbiAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGNoaWxkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczIuY2hpbGQgPSBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIERyYWdMYXllckNvbnRhaW5lcjtcbiAgICB9KF9yZWFjdC5Db21wb25lbnQpLCBfY2xhc3MuRGVjb3JhdGVkQ29tcG9uZW50ID0gRGVjb3JhdGVkQ29tcG9uZW50LCBfY2xhc3MuZGlzcGxheU5hbWUgPSAnRHJhZ0xheWVyKCcgKyBkaXNwbGF5TmFtZSArICcpJywgX2NsYXNzLmNvbnRleHRUeXBlcyA9IHtcbiAgICAgIGRyYWdEcm9wTWFuYWdlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH0sIF90ZW1wKTtcblxuXG4gICAgcmV0dXJuICgwLCBfaG9pc3ROb25SZWFjdFN0YXRpY3MyLmRlZmF1bHQpKERyYWdMYXllckNvbnRhaW5lciwgRGVjb3JhdGVkQ29tcG9uZW50KTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0RyYWdMYXllci5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNoYWxsb3dFcXVhbFNjYWxhcjtcbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbFNjYWxhcihvYmpBLCBvYmpCKSB7XG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoKHR5cGVvZiBvYmpBID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmpBKSkgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgKHR5cGVvZiBvYmpCID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmpCKSkgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoIWhhc093bi5jYWxsKG9iakIsIGtleXNBW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWxBID0gb2JqQVtrZXlzQVtpXV07XG4gICAgdmFyIHZhbEIgPSBvYmpCW2tleXNBW2ldXTtcblxuICAgIGlmICh2YWxBICE9PSB2YWxCIHx8ICh0eXBlb2YgdmFsQSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsQSkpID09PSAnb2JqZWN0JyB8fCAodHlwZW9mIHZhbEIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbEIpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3V0aWxzL3NoYWxsb3dFcXVhbFNjYWxhci5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRlY29yYXRlSGFuZGxlcjtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9kaXNwb3NhYmxlcyA9IHJlcXVpcmUoJ2Rpc3Bvc2FibGVzJyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljcyA9IHJlcXVpcmUoJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJyk7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaG9pc3ROb25SZWFjdFN0YXRpY3MpO1xuXG52YXIgX3NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJy4vdXRpbHMvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfc2hhbGxvd0VxdWFsU2NhbGFyID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWxTY2FsYXInKTtcblxudmFyIF9zaGFsbG93RXF1YWxTY2FsYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0VxdWFsU2NhbGFyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBkZWNvcmF0ZUhhbmRsZXIoX3JlZikge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICB2YXIgRGVjb3JhdGVkQ29tcG9uZW50ID0gX3JlZi5EZWNvcmF0ZWRDb21wb25lbnQsXG4gICAgICBjcmVhdGVIYW5kbGVyID0gX3JlZi5jcmVhdGVIYW5kbGVyLFxuICAgICAgY3JlYXRlTW9uaXRvciA9IF9yZWYuY3JlYXRlTW9uaXRvcixcbiAgICAgIGNyZWF0ZUNvbm5lY3RvciA9IF9yZWYuY3JlYXRlQ29ubmVjdG9yLFxuICAgICAgcmVnaXN0ZXJIYW5kbGVyID0gX3JlZi5yZWdpc3RlckhhbmRsZXIsXG4gICAgICBjb250YWluZXJEaXNwbGF5TmFtZSA9IF9yZWYuY29udGFpbmVyRGlzcGxheU5hbWUsXG4gICAgICBnZXRUeXBlID0gX3JlZi5nZXRUeXBlLFxuICAgICAgY29sbGVjdCA9IF9yZWYuY29sbGVjdCxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRhcmVQcm9wc0VxdWEgPSBvcHRpb25zLmFyZVByb3BzRXF1YWwsXG4gICAgICBhcmVQcm9wc0VxdWFsID0gX29wdGlvbnMkYXJlUHJvcHNFcXVhID09PSB1bmRlZmluZWQgPyBfc2hhbGxvd0VxdWFsU2NhbGFyMi5kZWZhdWx0IDogX29wdGlvbnMkYXJlUHJvcHNFcXVhO1xuXG4gIHZhciBkaXNwbGF5TmFtZSA9IERlY29yYXRlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBEZWNvcmF0ZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICB2YXIgRHJhZ0Ryb3BDb250YWluZXIgPSAoX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhEcmFnRHJvcENvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgICBfY3JlYXRlQ2xhc3MoRHJhZ0Ryb3BDb250YWluZXIsIFt7XG4gICAgICBrZXk6ICdnZXRIYW5kbGVySWQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEhhbmRsZXJJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcklkO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2U7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuICFhcmVQcm9wc0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KShuZXh0U3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIGZ1bmN0aW9uIERyYWdEcm9wQ29udGFpbmVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0Ryb3BDb250YWluZXIpO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRHJhZ0Ryb3BDb250YWluZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcmFnRHJvcENvbnRhaW5lcikpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlID0gX3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQoX3RoaXMpO1xuICAgICAgX3RoaXMuaGFuZGxlQ2hpbGRSZWYgPSBfdGhpcy5oYW5kbGVDaGlsZFJlZi5iaW5kKF90aGlzKTtcblxuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKF90eXBlb2YoX3RoaXMuY29udGV4dC5kcmFnRHJvcE1hbmFnZXIpID09PSAnb2JqZWN0JywgJ0NvdWxkIG5vdCBmaW5kIHRoZSBkcmFnIGFuZCBkcm9wIG1hbmFnZXIgaW4gdGhlIGNvbnRleHQgb2YgJXMuICcgKyAnTWFrZSBzdXJlIHRvIHdyYXAgdGhlIHRvcC1sZXZlbCBjb21wb25lbnQgb2YgeW91ciBhcHAgd2l0aCBEcmFnRHJvcENvbnRleHQuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy10cm91Ymxlc2hvb3RpbmcuaHRtbCNjb3VsZC1ub3QtZmluZC10aGUtZHJhZy1hbmQtZHJvcC1tYW5hZ2VyLWluLXRoZS1jb250ZXh0JywgZGlzcGxheU5hbWUsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgX3RoaXMubWFuYWdlciA9IF90aGlzLmNvbnRleHQuZHJhZ0Ryb3BNYW5hZ2VyO1xuICAgICAgX3RoaXMuaGFuZGxlck1vbml0b3IgPSBjcmVhdGVNb25pdG9yKF90aGlzLm1hbmFnZXIpO1xuICAgICAgX3RoaXMuaGFuZGxlckNvbm5lY3RvciA9IGNyZWF0ZUNvbm5lY3RvcihfdGhpcy5tYW5hZ2VyLmdldEJhY2tlbmQoKSk7XG4gICAgICBfdGhpcy5oYW5kbGVyID0gY3JlYXRlSGFuZGxlcihfdGhpcy5oYW5kbGVyTW9uaXRvcik7XG5cbiAgICAgIF90aGlzLmRpc3Bvc2FibGUgPSBuZXcgX2Rpc3Bvc2FibGVzLlNlcmlhbERpc3Bvc2FibGUoKTtcbiAgICAgIF90aGlzLnJlY2VpdmVQcm9wcyhwcm9wcyk7XG4gICAgICBfdGhpcy5zdGF0ZSA9IF90aGlzLmdldEN1cnJlbnRTdGF0ZSgpO1xuICAgICAgX3RoaXMuZGlzcG9zZSgpO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhEcmFnRHJvcENvbnRhaW5lciwgW3tcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc3Bvc2FibGUgPSBuZXcgX2Rpc3Bvc2FibGVzLlNlcmlhbERpc3Bvc2FibGUoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IG51bGw7XG4gICAgICAgIHRoaXMucmVjZWl2ZVByb3BzKHRoaXMucHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICghYXJlUHJvcHNFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgdGhpcy5yZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZWNlaXZlUHJvcHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLmhhbmRsZXIucmVjZWl2ZVByb3BzKHByb3BzKTtcbiAgICAgICAgdGhpcy5yZWNlaXZlVHlwZShnZXRUeXBlKHByb3BzKSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVjZWl2ZVR5cGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlY2VpdmVUeXBlKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IHRoaXMuY3VycmVudFR5cGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlID0gdHlwZTtcblxuICAgICAgICB2YXIgX3JlZ2lzdGVySGFuZGxlciA9IHJlZ2lzdGVySGFuZGxlcih0eXBlLCB0aGlzLmhhbmRsZXIsIHRoaXMubWFuYWdlciksXG4gICAgICAgICAgICBoYW5kbGVySWQgPSBfcmVnaXN0ZXJIYW5kbGVyLmhhbmRsZXJJZCxcbiAgICAgICAgICAgIHVucmVnaXN0ZXIgPSBfcmVnaXN0ZXJIYW5kbGVyLnVucmVnaXN0ZXI7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVySWQgPSBoYW5kbGVySWQ7XG4gICAgICAgIHRoaXMuaGFuZGxlck1vbml0b3IucmVjZWl2ZUhhbmRsZXJJZChoYW5kbGVySWQpO1xuICAgICAgICB0aGlzLmhhbmRsZXJDb25uZWN0b3IucmVjZWl2ZUhhbmRsZXJJZChoYW5kbGVySWQpO1xuXG4gICAgICAgIHZhciBnbG9iYWxNb25pdG9yID0gdGhpcy5tYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gZ2xvYmFsTW9uaXRvci5zdWJzY3JpYmVUb1N0YXRlQ2hhbmdlKHRoaXMuaGFuZGxlQ2hhbmdlLCB7IGhhbmRsZXJJZHM6IFtoYW5kbGVySWRdIH0pO1xuXG4gICAgICAgIHRoaXMuZGlzcG9zYWJsZS5zZXREaXNwb3NhYmxlKG5ldyBfZGlzcG9zYWJsZXMuQ29tcG9zaXRlRGlzcG9zYWJsZShuZXcgX2Rpc3Bvc2FibGVzLkRpc3Bvc2FibGUodW5zdWJzY3JpYmUpLCBuZXcgX2Rpc3Bvc2FibGVzLkRpc3Bvc2FibGUodW5yZWdpc3RlcikpKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdoYW5kbGVDaGFuZ2UnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ3VycmVudGx5TW91bnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSB0aGlzLmdldEN1cnJlbnRTdGF0ZSgpO1xuICAgICAgICBpZiAoISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KShuZXh0U3RhdGUsIHRoaXMuc3RhdGUpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZGlzcG9zZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy5kaXNwb3NhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVyQ29ubmVjdG9yLnJlY2VpdmVIYW5kbGVySWQobnVsbCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnaGFuZGxlQ2hpbGRSZWYnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNoaWxkUmVmKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmRlY29yYXRlZENvbXBvbmVudEluc3RhbmNlID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLmhhbmRsZXIucmVjZWl2ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldEN1cnJlbnRTdGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFN0YXRlKCkge1xuICAgICAgICB2YXIgbmV4dFN0YXRlID0gY29sbGVjdCh0aGlzLmhhbmRsZXJDb25uZWN0b3IuaG9va3MsIHRoaXMuaGFuZGxlck1vbml0b3IpO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkobmV4dFN0YXRlKSwgJ0V4cGVjdGVkIGBjb2xsZWN0YCBzcGVjaWZpZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byAnICsgJyVzIGZvciAlcyB0byByZXR1cm4gYSBwbGFpbiBvYmplY3Qgb2YgcHJvcHMgdG8gaW5qZWN0LiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLicsIGNvbnRhaW5lckRpc3BsYXlOYW1lLCBkaXNwbGF5TmFtZSwgbmV4dFN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChEZWNvcmF0ZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlLCB7XG4gICAgICAgICAgcmVmOiB0aGlzLmhhbmRsZUNoaWxkUmVmXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRHJhZ0Ryb3BDb250YWluZXI7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCksIF9jbGFzcy5EZWNvcmF0ZWRDb21wb25lbnQgPSBEZWNvcmF0ZWRDb21wb25lbnQsIF9jbGFzcy5kaXNwbGF5TmFtZSA9IGNvbnRhaW5lckRpc3BsYXlOYW1lICsgJygnICsgZGlzcGxheU5hbWUgKyAnKScsIF9jbGFzcy5jb250ZXh0VHlwZXMgPSB7XG4gICAgZHJhZ0Ryb3BNYW5hZ2VyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG4gIH0sIF90ZW1wKTtcblxuXG4gIHJldHVybiAoMCwgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzMi5kZWZhdWx0KShEcmFnRHJvcENvbnRhaW5lciwgRGVjb3JhdGVkQ29tcG9uZW50KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2RlY29yYXRlSGFuZGxlci5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd3JhcENvbm5lY3Rvckhvb2tzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9jbG9uZVdpdGhSZWYgPSByZXF1aXJlKCcuL3V0aWxzL2Nsb25lV2l0aFJlZicpO1xuXG52YXIgX2Nsb25lV2l0aFJlZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbG9uZVdpdGhSZWYpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0aHJvd0lmQ29tcG9zaXRlQ29tcG9uZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vIEN1c3RvbSBjb21wb25lbnRzIGNhbiBubyBsb25nZXIgYmUgd3JhcHBlZCBkaXJlY3RseSBpbiBSZWFjdCBEbkQgMi4wXG4gIC8vIHNvIHRoYXQgd2UgZG9uJ3QgbmVlZCB0byBkZXBlbmQgb24gZmluZERPTU5vZGUoKSBmcm9tIHJlYWN0LWRvbS5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGRpc3BsYXlOYW1lID0gZWxlbWVudC50eXBlLmRpc3BsYXlOYW1lIHx8IGVsZW1lbnQudHlwZS5uYW1lIHx8ICd0aGUgY29tcG9uZW50JztcblxuICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgbmF0aXZlIGVsZW1lbnQgbm9kZXMgY2FuIG5vdyBiZSBwYXNzZWQgdG8gUmVhY3QgRG5EIGNvbm5lY3RvcnMuJyArICgnWW91IGNhbiBlaXRoZXIgd3JhcCAnICsgZGlzcGxheU5hbWUgKyAnIGludG8gYSA8ZGl2Piwgb3IgdHVybiBpdCBpbnRvIGEgJykgKyAnZHJhZyBzb3VyY2Ugb3IgYSBkcm9wIHRhcmdldCBpdHNlbGYuJyk7XG59XG5cbmZ1bmN0aW9uIHdyYXBIb29rVG9SZWNvZ25pemVFbGVtZW50KGhvb2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudE9yTm9kZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcblxuICAgIC8vIFdoZW4gcGFzc2VkIGEgbm9kZSwgY2FsbCB0aGUgaG9vayBzdHJhaWdodCBhd2F5LlxuICAgIGlmICghKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkoZWxlbWVudE9yTm9kZSkpIHtcbiAgICAgIHZhciBub2RlID0gZWxlbWVudE9yTm9kZTtcbiAgICAgIGhvb2sobm9kZSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIElmIHBhc3NlZCBhIFJlYWN0RWxlbWVudCwgY2xvbmUgaXQgYW5kIGF0dGFjaCB0aGlzIGZ1bmN0aW9uIGFzIGEgcmVmLlxuICAgIC8vIFRoaXMgaGVscHMgdXMgYWNoaWV2ZSBhIG5lYXQgQVBJIHdoZXJlIHVzZXIgZG9lc24ndCBldmVuIGtub3cgdGhhdCByZWZzXG4gICAgLy8gYXJlIGJlaW5nIHVzZWQgdW5kZXIgdGhlIGhvb2QuXG4gICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JOb2RlO1xuICAgIHRocm93SWZDb21wb3NpdGVDb21wb25lbnRFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgLy8gV2hlbiBubyBvcHRpb25zIGFyZSBwYXNzZWQsIHVzZSB0aGUgaG9vayBkaXJlY3RseVxuICAgIHZhciByZWYgPSBvcHRpb25zID8gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHJldHVybiBob29rKG5vZGUsIG9wdGlvbnMpO1xuICAgIH0gOiBob29rO1xuXG4gICAgcmV0dXJuICgwLCBfY2xvbmVXaXRoUmVmMi5kZWZhdWx0KShlbGVtZW50LCByZWYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB3cmFwQ29ubmVjdG9ySG9va3MoaG9va3MpIHtcbiAgdmFyIHdyYXBwZWRIb29rcyA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKGhvb2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgaG9vayA9IGhvb2tzW2tleV07XG4gICAgdmFyIHdyYXBwZWRIb29rID0gd3JhcEhvb2tUb1JlY29nbml6ZUVsZW1lbnQoaG9vayk7XG4gICAgd3JhcHBlZEhvb2tzW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd3JhcHBlZEhvb2s7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdyYXBwZWRIb29rcztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3dyYXBDb25uZWN0b3JIb29rcy5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYXJlT3B0aW9uc0VxdWFsO1xuXG52YXIgX3NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJy4vdXRpbHMvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFyZU9wdGlvbnNFcXVhbChuZXh0T3B0aW9ucywgY3VycmVudE9wdGlvbnMpIHtcbiAgaWYgKGN1cnJlbnRPcHRpb25zID09PSBuZXh0T3B0aW9ucykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRPcHRpb25zICE9PSBudWxsICYmIG5leHRPcHRpb25zICE9PSBudWxsICYmICgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KShjdXJyZW50T3B0aW9ucywgbmV4dE9wdGlvbnMpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvYXJlT3B0aW9uc0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc1ZhbGlkVHlwZTtcblxudmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKTtcblxudmFyIF9pc0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQXJyYXkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc1ZhbGlkVHlwZSh0eXBlLCBhbGxvd0FycmF5KSB7XG4gICAgICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCAodHlwZW9mIHR5cGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHR5cGUpKSA9PT0gJ3N5bWJvbCcgfHwgYWxsb3dBcnJheSAmJiAoMCwgX2lzQXJyYXkyLmRlZmF1bHQpKHR5cGUpICYmIHR5cGUuZXZlcnkoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWRUeXBlKHQsIGZhbHNlKTtcbiAgICAgICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3V0aWxzL2lzVmFsaWRUeXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge2Nsb3Nlc3R9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRCYXNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIHJlbmRlckRpc3BsYXkocm93KXtcbiAgICBpZighcm93LnZhbHVlKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3RsRXZlbnREaXNwbGF5Um93Jywgcm93LmtleSk7XG4gICAgaWYoQXJyYXkuaXNBcnJheShyb3cudmFsdWUpKXtcbiAgICAgIGlmKHJvdy52YWx1ZS5sZW5ndGggPT09IDApe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtyb3cua2V5fT5cbiAgICAgICAgICB7cm93LnZhbHVlLm1hcCgodmFsLCBrZXkpID0+IDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cIml0ZW1cIj57dmFsfTwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17cm93LmtleX0+XG4gICAgICAgIHtyb3cudmFsdWV9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgbGV0IGRpc3BsYXlQb3NpdGlvbiA9ICdsZWZ0JztcbiAgICBpZih0aGlzLnJlZnMuYmFzZSl7XG4gICAgICB2YXIgd3JhcHBlciA9IGNsb3Nlc3QodGhpcy5yZWZzLmJhc2UsICcubGluZXNGcmFtZScpO1xuICAgICAgdmFyIHdyYXBwZXJSZWN0ID0gd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciB3cmFwcGVyUmlnaHRTaWRlID0gd3JhcHBlclJlY3QubGVmdCArIHdyYXBwZXJSZWN0LndpZHRoO1xuXG4gICAgICB2YXIgcHJldmlld1JlY3QgPSB0aGlzLnJlZnMuYmFzZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBwcmV2aWV3UmlnaHRTaWRlID0gcHJldmlld1JlY3QubGVmdCArIHByZXZpZXdSZWN0LndpZHRoO1xuICAgICAgXG4gICAgICBpZih3cmFwcGVyUmlnaHRTaWRlID4gcHJldmlld1JpZ2h0U2lkZSArIDcwKXtcbiAgICAgICAgZGlzcGxheVBvc2l0aW9uID0gJ3JpZ2h0JztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwiYmFzZVwiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fT5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5wcm9wcy5kcmFnZ2luZ0Rpc3BsYXkpe1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxEcmFnZ2luZ0Rpc3BsYXknLCBkaXNwbGF5UG9zaXRpb24pfSBzdHlsZT17e3RvcDogdGhpcy5wcm9wcy5kcmFnZ2luZ0Rpc3BsYXlUb3B9fT57dGhpcy5wcm9wcy5kcmFnZ2luZ0Rpc3BsYXl9PC9kaXY+KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxFdmVudERpc3BsYXlcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5kaXNwbGF5Lm1hcChyb3cgPT4gdGhpcy5yZW5kZXJEaXNwbGF5KHJvdykpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJm5ic3A7XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkV2ZW50QmFzZS5kZWZhdWx0UHJvcHMgPSB7ZGlzcGxheTogW119O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRCYXNlLmpzeCIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUaW1lbGluZSBmcm9tICcuL2NvbXBvbmVudHMvVGltZWxpbmUnO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi9jbGFzc2VzL1RpbWUnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5cbmV4cG9ydCB7VGltZWxpbmUsIFRpbWUsIFRpbWVTcGFufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmVzNiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQgfSBmcm9tICdyZWFjdC1kbmQnO1xuaW1wb3J0IERuZEJhY2tlbmQgZnJvbSAncmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQnO1xuaW1wb3J0IEV2ZW50UHJldmlldyBmcm9tICcuL0V2ZW50UHJldmlldyc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudCc7XG5pbXBvcnQgUnVsZXIgZnJvbSAnLi9SdWxlcic7XG5pbXBvcnQgTGluZUxhYmVsIGZyb20gJy4vTGluZUxhYmVsJztcbmltcG9ydCB7IERyb3BUYXJnZXQgfSBmcm9tICdyZWFjdC1kbmQnO1xuXG5cbmNvbnN0IHRhcmdldCA9IHtcbiAgZHJvcChwcm9wcywgbW9uaXRvciwgY29tcG9uZW50KSB7XG4gICAgY29uc3QgaXRlbSA9IG1vbml0b3IuZ2V0SXRlbSgpO1xuICAgIGNvbnN0IGRlbHRhID0gbW9uaXRvci5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKTtcblxuICAgIGNvbnN0IGluaXRhbE9mZnNldCA9IGl0ZW0uZHJhZ2dpbmdDb21wb25lbnQuZ2V0T2Zmc2V0KCk7XG4gICAgY29uc3QgdG9wID0gTWF0aC5yb3VuZChpbml0YWxPZmZzZXQudG9wICsgZGVsdGEueSk7XG4gICAgY29uc3QgbGVmdCA9IE1hdGgucm91bmQoaW5pdGFsT2Zmc2V0LmxlZnQgKyBkZWx0YS54KTtcblxuICAgIGl0ZW0uZHJhZ2dpbmdDb21wb25lbnQubW92ZVRvKHRvcCwgbGVmdCk7XG4gIH0sXG4gIGhvdmVyKHByb3BzLCBtb25pdG9yLCBjb21wb25lbnQpe1xuICAgIGNvbnN0IGNsaWVudE9mZnNldCA9IG1vbml0b3IuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gICAgaWYoY2xpZW50T2Zmc2V0KXtcbiAgICAgIGNvbnN0IGl0ZW0gPSBtb25pdG9yLmdldEl0ZW0oKTtcbiAgICAgIGNvbnN0IGxpbmVXcmFwcGVyQm91bmRzID0gY29tcG9uZW50LnJlZnMubGluZXNXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgbGluZUNvbXBvbmVudCA9IHByb3BzLnRpbWVsaW5lLmRyYWdnaW5nT3ZlcihjbGllbnRPZmZzZXQueCAtIGxpbmVXcmFwcGVyQm91bmRzLmxlZnQgKyAoaXRlbS5kcmFnZ2luZ0NvbXBvbmVudC5wcm9wcy53aWR0aCAvIDIvKmV2ZW5044Gu55yf44KT5Lit44KS5Z+65rqW44Gr44GZ44KLKi8pKTtcbiAgICAgIGNvbnN0IHRpbWUgPSBwcm9wcy50aW1lbGluZS50b3BUb1RpbWUoY2xpZW50T2Zmc2V0LnkgKyBjb21wb25lbnQucmVmcy5saW5lc1dyYXBwZXIuc2Nyb2xsVG9wIC0gbGluZVdyYXBwZXJCb3VuZHMudG9wKTtcbiAgICAgIGl0ZW0uZHJhZ2dpbmdDb21wb25lbnQuZHJhZ2dpbmcodGltZSwgbGluZUNvbXBvbmVudCA/IGxpbmVDb21wb25lbnQucHJvcHMuaWQgOiBudWxsKTtcbiAgICB9XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjb2xsZWN0KGNvbm5lY3QsIG1vbml0b3IpIHtcbiAgcmV0dXJuIHtcbiAgICBjb25uZWN0RHJvcFRhcmdldDogY29ubmVjdC5kcm9wVGFyZ2V0KClcbiAgfTtcbn1cblxuY2xhc3MgRnJhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBydWxlckludGVydmFsID0gNDtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtaW5XaWR0aDogMCxcbiAgICAgIGV2ZW50czogdGhpcy5wcm9wcy5pbml0aWFsRXZlbnRzfHxbXSxcbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gIH1cblxuICByZXNpemVVcChldmVudENvbXBvbmVudCwgY2xpY2tlZFRvcCl7XG4gICAgY29uc3QgaW5pdGlhbEhlaWdodCA9IGV2ZW50Q29tcG9uZW50LnN0YXRlLmhlaWdodDtcbiAgICBjb25zdCBwcmV2Qm90dG9tID0gdGhpcy5wcm9wcy50aW1lbGluZS5nZXRQcmV2Qm90dG9tKGV2ZW50Q29tcG9uZW50KTtcbiAgICBjb25zdCBtb3VzZU1vdmVFdmVudCA9IChtb3ZlRXZlbnQpID0+IHtcbiAgICAgIGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBjbGlja2VkVG9wIC0gbW92ZUV2ZW50LmNsaWVudFk7XG4gICAgICBpZih0YXJnZXRIZWlnaHQgPiAzNil7XG4gICAgICAgIGxldCB0YXJnZXRUb3AgPSBldmVudENvbXBvbmVudC5zdGF0ZS50b3AgLSAodGFyZ2V0SGVpZ2h0IC0gZXZlbnRDb21wb25lbnQuc3RhdGUuaGVpZ2h0KTtcbiAgICAgICAgaWYodGFyZ2V0VG9wIDw9IHByZXZCb3R0b20pe1xuICAgICAgICAgIHRhcmdldFRvcCA9IHByZXZCb3R0b207XG4gICAgICAgIH1cblxuICAgICAgICBldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuID0gbmV3IFRpbWVTcGFuKHRoaXMucHJvcHMudGltZWxpbmUudG9wVG9UaW1lKHRhcmdldFRvcCksIGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCkpO1xuICAgICAgICBldmVudENvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQoZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3BhbiksXG4gICAgICAgICAgdG9wOiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcChldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSxcbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6IGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuZ2V0RGlzcGxheVRpbWUoKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc3RvcE1vdmVFdmVudCA9IChtb3VzZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50KTtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BNb3ZlRXZlbnQpO1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gICAgICBldmVudENvbXBvbmVudC5lbmRSZXNpemluZyhtb3VzZUV2ZW50KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcE1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gIH1cblxuICByZXNpemVEb3duKGV2ZW50Q29tcG9uZW50LCBjbGlja2VkVG9wKXtcbiAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gZXZlbnRDb21wb25lbnQuc3RhdGUuaGVpZ2h0O1xuICAgIGNvbnN0IG5leHRUb3AgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmdldE5leHRUb3AoZXZlbnRDb21wb25lbnQpO1xuICAgIGNvbnN0IG1vdXNlTW92ZUV2ZW50ID0gKG1vdmVFdmVudCkgPT4ge1xuICAgICAgZXZlbnRDb21wb25lbnQucmVzaXppbmcgPSB0cnVlO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIG1vdmVFdmVudC5jbGllbnRZIC0gY2xpY2tlZFRvcDtcbiAgICAgIGlmKHRhcmdldEhlaWdodCA+IDM2KXtcbiAgICAgICAgbGV0IHRhcmdldEJvdHRvbSA9IGV2ZW50Q29tcG9uZW50LnN0YXRlLnRvcCArIHRhcmdldEhlaWdodDtcbiAgICAgICAgaWYodGFyZ2V0Qm90dG9tID49IG5leHRUb3Ape1xuICAgICAgICAgIHRhcmdldEJvdHRvbSA9IG5leHRUb3A7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuID0gbmV3IFRpbWVTcGFuKGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSwgdGhpcy5wcm9wcy50aW1lbGluZS50b3BUb1RpbWUodGFyZ2V0Qm90dG9tKSk7XG4gICAgICAgIGV2ZW50Q29tcG9uZW50LnNldFN0YXRlKHtcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodChldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuKSxcbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6IGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4uZ2V0RW5kVGltZSgpLmdldERpc3BsYXlUaW1lKCksXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5VG9wOiB0YXJnZXRIZWlnaHQgLSAxMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc3RvcE1vdmVFdmVudCA9IChtb3VzZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50KTtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BNb3ZlRXZlbnQpO1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gICAgICBldmVudENvbXBvbmVudC5lbmRSZXNpemluZyhtb3VzZUV2ZW50KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcE1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gIH1cblxuICByZW1vdmVFdmVudChldmVudElkKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtldmVudHM6IHRoaXMuc3RhdGUuZXZlbnRzLmZpbHRlcihldiA9PiBldi5pZCAhPSBldmVudElkKX0sIHJlc29sdmUpO1xuICAgIH0pXG4gIH1cblxuICB1cGRhdGVFdmVudHMoY2FsbGJhY2spe1xuICAgIHRoaXMuc2V0U3RhdGUoe2V2ZW50czogY2FsbGJhY2sodGhpcy5zdGF0ZS5ldmVudHMpfSk7XG4gIH1cblxuICBhZGRFdmVudHMoZXZlbnRzKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB2YXIgY3VycmVudCA9IFsuLi50aGlzLnN0YXRlLmV2ZW50c107XG4gICAgICB2YXIgZXZlbnRJZHMgPSBbXTtcbiAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgaWYoIWV2ZW50LmlkKXtcbiAgICAgICAgICBldmVudC5pZCA9IHRoaXMucHJvcHMudGltZWxpbmUuY3JlYXRlRXZlbnRJZCgpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50SWRzLnB1c2goZXZlbnQuaWQpO1xuICAgICAgICBjdXJyZW50LnB1c2goZXZlbnQpXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2V2ZW50czogY3VycmVudH0sICgpID0+IHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmV2ZW50Q29tcG9uZW50cy5maWx0ZXIoZXZlbnRDb21wb25lbnQgPT4ge1xuICAgICAgICAgIHJldHVybiBldmVudElkcy5pbmRleE9mKGV2ZW50Q29tcG9uZW50LnByb3BzLmlkKSAhPT0gLTE7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KXtcbiAgICB0aGlzLnNldFN0YXRlKHtoZWlnaHQ6IGhlaWdodH0pO1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVQb3MoZSl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogZS5jbGllbnRZIC0gZS5jdXJyZW50VGFyZ2V0Lm9mZnNldFRvcCArIGUuY3VycmVudFRhcmdldC5zY3JvbGxUb3AsXG4gICAgICBsZWZ0OiBlLmNsaWVudFggLSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdCArIGUuY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0XG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtaW5XaWR0aDogdGhpcy5wcm9wcy50aW1lbGluZS5nZXRUb3RhbFdpZHRoKClcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHt9O1xuICAgIC8v44Kk44OZ44Oz44OI44Gv5pWw44GM5aSa44GE44Gu44Gn6LWw5p+744KS5pyA5bCP6ZmQ44Gr44GZ44KL44Gf44KBc3RhdGXjgavjgZfjgZ/jgYzjgIF0aW1lbGluZeOCkuS4uOOBo+OBqOiqreOBv+i+vOOBv+ebtOOBmeOBruOBq+WvvuW/nOOBmeOCi+OBn+OCgeODgeOCp+ODg+OCr+OAglxuICAgIC8v44Kk44OZ44Oz44OI44KS5aSJ5pu044GZ44KL44Go44GN44Gv5Z+65pysdGltZWxpbmXjga7plqLmlbDntYznlLHjgafooYzjgYTjgIHlhajjgaboqq3jgb/ovrzjgb/nm7TjgZnmmYLjgaDjgZFpbml0aWFsRXZlbnRz44KS5aSJ5pu044GZ44KL44CCXG4gICAgaWYobmV4dFByb3BzLmluaXRpYWxFdmVudHMgIT09IHRoaXMucHJvcHMuaW5pdGlhbEV2ZW50cyl7XG4gICAgICBuZXdTdGF0ZS5ldmVudHMgPSBuZXh0UHJvcHMuaW5pdGlhbEV2ZW50cztcbiAgICB9XG5cbiAgICBpZihuZXh0UHJvcHMubGluZURhdGEgIT09IHRoaXMucHJvcHMubGluZURhdGEpe1xuICAgICAgbmV3U3RhdGUubWluV2lkdGggPSB0aGlzLnByb3BzLnRpbWVsaW5lLmdldFRvdGFsV2lkdGgoKVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBjb25uZWN0RHJvcFRhcmdldCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2VsZW0gPT4gdGhpcy5lbGVtZW50ID0gZWxlbX0gY2xhc3NOYW1lPVwidGxGcmFtZVZpZXcgc2Nyb2xsV3JhcHBlclwiIHN0eWxlPXt7d2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG92ZXJmbG93WDogJ2F1dG8nfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttaW5XaWR0aDogdGhpcy5zdGF0ZS5taW5XaWR0aCArIHRoaXMucHJvcHMuY2hpbGRXaWR0aCwgZGlzcGxheTpcImZsZXhcIn19PlxuICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3REcm9wVGFyZ2V0KFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzRnJhbWVcIiBzdHlsZT17e3dpZHRoOiB0aGlzLnN0YXRlLm1pbldpZHRoLCBvdmVyZmxvdzogJ2hpZGRlbid9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IHRoaXMuc3RhdGUubWluV2lkdGggKyAyMH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bExhYmVsVmlld1wiIHN0eWxlPXt7aGVpZ2h0OiBMaW5lTGFiZWwuaGVpZ2h0fX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpbmVEYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzUnVsZXIgPSBrZXkgJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldlJ1bGVyID0gKGtleSArIDEpICUgdGhpcy5wcm9wcy5ydWxlckludGVydmFsID09PSAwO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtkYXRhLmlkICsgXCJAXCIgKyBrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLmxpbmVXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzUnVsZXI9e2hhc1J1bGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2UnVsZXI9e3ByZXZSdWxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2RhdGEubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lPXt0aGlzLnByb3BzLnRpbWVsaW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xhc3Q9e2tleSA9PSB0aGlzLnByb3BzLmxpbmVEYXRhLmxlbmd0aCAtIDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPVwibGluZXNXcmFwcGVyXCIgY2xhc3NOYW1lPVwidGxMaW5lc1dyYXBwZXIgc2Nyb2xsV3JhcHBlclwiIHN0eWxlPXt7aGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCAtIExpbmVMYWJlbC5oZWlnaHR9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogdGhpcy5wcm9wcy5saW5lSGVpZ2h0LCBvdmVyZmxvd1k6IFwiaGlkZGVuXCIsIHBvc2l0aW9uOlwicmVsYXRpdmVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpbmVEYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNSdWxlciA9IGtleSAlIHRoaXMucHJvcHMucnVsZXJJbnRlcnZhbCA9PT0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZSdWxlciA9IChrZXkgKyAxKSAlIHRoaXMucHJvcHMucnVsZXJJbnRlcnZhbCA9PT0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e1wibGluZUBcIiArIGRhdGEuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzUnVsZXI9e2hhc1J1bGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YS5pZCArIFwiQFwiICsga2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLmxpbmVXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW49e2tleSAlIDIgPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxpbmU9e3RoaXMucHJvcHMudGltZWxpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFycz17ZGF0YS52YXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lPXt0aGlzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmV2ZW50cy5tYXAoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtcImV2ZW50QFwiICsgZXZlbnQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtldmVudC5rZXl8fGV2ZW50LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtldmVudC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17ZXZlbnQuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNwYW49e2V2ZW50LnRpbWVTcGFufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e2V2ZW50LmRpc3BsYXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUlkPXtldmVudC5saW5lSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxpbmU9e3RoaXMucHJvcHMudGltZWxpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMudGltZWxpbmUucHJvcHMubGluZVdpZHRoIC0gMiAtIChMaW5lLnNpZGVQYWRkaW5nICogMil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFycz17ZXZlbnQudmFyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdD17ZXZlbnQuZmxvYXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RXZlbnRQcmV2aWV3IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSkoKX1cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBGcmFtZS5wcm9wVHlwZXMgPSB7XG4vLyAgIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbi8vICAgbGluZURhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4vLyAgICAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbi8vICAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4vLyAgIH0pKS5pc1JlcXVpcmVkLFxuLy8gICBsaW5lV2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuLy8gICB0aW1lbGluZTogUmVhY3QuUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuLy8gICBydWxlckludGVydmFsOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIGhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4vLyB9XG5cbkZyYW1lLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXZlbnRzOiBbXSxcbiAgY2hpbGRXaWR0aDogMFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhZ0Ryb3BDb250ZXh0KERuZEJhY2tlbmQoeyBlbmFibGVNb3VzZUV2ZW50czogdHJ1ZSB9KSkoRHJvcFRhcmdldChcIkV2ZW50XCIsIHRhcmdldCwgY29sbGVjdCkoRnJhbWUpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZyYW1lLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZSBmcm9tICcuLi9jbGFzc2VzL1RpbWUnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91ciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtaW51dGVzOiBbXVxuICAgIH1cblxuICAgIGNvbnN0IG1pblN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLm1pbkhlaWdodCArICdweCdcbiAgICB9XG4gICAgVGltZS5lYWNoTWluKChrZXksIG1pbikgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5taW51dGVzLnB1c2goXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e21pbn1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3RsTWluVmlldycsICd0bCcgKyAobWluICsgMTUpKX1cbiAgICAgICAgICBzdHlsZT17bWluU3R5bGV9XG4gICAgICAgID4mbmJzcDs8L2Rpdj5cbiAgICAgICk7XG4gICAgfSwgMTUpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bEhvdXJWaWV3XCI+e3RoaXMuc3RhdGUubWludXRlc308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEhvdXIucHJvcFR5cGVzID0ge1xuLy8gICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgdGltZTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZSkuaXNSZXF1aXJlZFxuLy8gfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG91ci5qc3giLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRHJhZ0Ryb3BNYW5hZ2VyID0gcmVxdWlyZSgnLi9EcmFnRHJvcE1hbmFnZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdEcmFnRHJvcE1hbmFnZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EcmFnRHJvcE1hbmFnZXIpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0RyYWdTb3VyY2UgPSByZXF1aXJlKCcuL0RyYWdTb3VyY2UnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdEcmFnU291cmNlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJhZ1NvdXJjZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfRHJvcFRhcmdldCA9IHJlcXVpcmUoJy4vRHJvcFRhcmdldCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Ryb3BUYXJnZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wVGFyZ2V0KS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9jcmVhdGVUZXN0QmFja2VuZCA9IHJlcXVpcmUoJy4vYmFja2VuZHMvY3JlYXRlVGVzdEJhY2tlbmQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVUZXN0QmFja2VuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRlc3RCYWNrZW5kKS5kZWZhdWx0O1xuICB9XG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jcmVhdGVTdG9yZSA9IHJlcXVpcmUoJ3JlZHV4L2xpYi9jcmVhdGVTdG9yZScpO1xuXG52YXIgX2NyZWF0ZVN0b3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVN0b3JlKTtcblxudmFyIF9yZWR1Y2VycyA9IHJlcXVpcmUoJy4vcmVkdWNlcnMnKTtcblxudmFyIF9yZWR1Y2VyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWR1Y2Vycyk7XG5cbnZhciBfZHJhZ0Ryb3AgPSByZXF1aXJlKCcuL2FjdGlvbnMvZHJhZ0Ryb3AnKTtcblxudmFyIGRyYWdEcm9wQWN0aW9ucyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9kcmFnRHJvcCk7XG5cbnZhciBfRHJhZ0Ryb3BNb25pdG9yID0gcmVxdWlyZSgnLi9EcmFnRHJvcE1vbml0b3InKTtcblxudmFyIF9EcmFnRHJvcE1vbml0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJhZ0Ryb3BNb25pdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIERyYWdEcm9wTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRHJhZ0Ryb3BNYW5hZ2VyKGNyZWF0ZUJhY2tlbmQpIHtcbiAgICB2YXIgY29udGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0Ryb3BNYW5hZ2VyKTtcblxuICAgIHZhciBzdG9yZSA9ICgwLCBfY3JlYXRlU3RvcmUyLmRlZmF1bHQpKF9yZWR1Y2VyczIuZGVmYXVsdCk7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5tb25pdG9yID0gbmV3IF9EcmFnRHJvcE1vbml0b3IyLmRlZmF1bHQoc3RvcmUpO1xuICAgIHRoaXMucmVnaXN0cnkgPSB0aGlzLm1vbml0b3IucmVnaXN0cnk7XG4gICAgdGhpcy5iYWNrZW5kID0gY3JlYXRlQmFja2VuZCh0aGlzKTtcblxuICAgIHN0b3JlLnN1YnNjcmliZSh0aGlzLmhhbmRsZVJlZkNvdW50Q2hhbmdlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERyYWdEcm9wTWFuYWdlciwgW3tcbiAgICBrZXk6ICdoYW5kbGVSZWZDb3VudENoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVJlZkNvdW50Q2hhbmdlKCkge1xuICAgICAgdmFyIHNob3VsZFNldFVwID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnJlZkNvdW50ID4gMDtcbiAgICAgIGlmIChzaG91bGRTZXRVcCAmJiAhdGhpcy5pc1NldFVwKSB7XG4gICAgICAgIHRoaXMuYmFja2VuZC5zZXR1cCgpO1xuICAgICAgICB0aGlzLmlzU2V0VXAgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICghc2hvdWxkU2V0VXAgJiYgdGhpcy5pc1NldFVwKSB7XG4gICAgICAgIHRoaXMuYmFja2VuZC50ZWFyZG93bigpO1xuICAgICAgICB0aGlzLmlzU2V0VXAgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDb250ZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TW9uaXRvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1vbml0b3IoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb25pdG9yO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEJhY2tlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCYWNrZW5kKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYmFja2VuZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRSZWdpc3RyeScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlZ2lzdHJ5KCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVnaXN0cnk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0QWN0aW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgICB2YXIgbWFuYWdlciA9IHRoaXM7XG4gICAgICB2YXIgZGlzcGF0Y2ggPSB0aGlzLnN0b3JlLmRpc3BhdGNoO1xuXG5cbiAgICAgIGZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgYWN0aW9uID0gYWN0aW9uQ3JlYXRvci5hcHBseShtYW5hZ2VyLCBhcmdzKTtcbiAgICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoZHJhZ0Ryb3BBY3Rpb25zKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGRyYWdEcm9wQWN0aW9uc1trZXldID09PSAnZnVuY3Rpb24nO1xuICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uIChib3VuZEFjdGlvbnMsIGtleSkge1xuICAgICAgICB2YXIgYWN0aW9uID0gZHJhZ0Ryb3BBY3Rpb25zW2tleV07XG4gICAgICAgIGJvdW5kQWN0aW9uc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICByZXR1cm4gYm91bmRBY3Rpb25zO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEcmFnRHJvcE1hbmFnZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IERyYWdEcm9wTWFuYWdlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvRHJhZ0Ryb3BNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFjdGlvblR5cGVzID0gdW5kZWZpbmVkO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlU3RvcmU7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF9zeW1ib2xPYnNlcnZhYmxlID0gcmVxdWlyZSgnc3ltYm9sLW9ic2VydmFibGUnKTtcblxudmFyIF9zeW1ib2xPYnNlcnZhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbE9ic2VydmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgQWN0aW9uVHlwZXMgPSBleHBvcnRzLkFjdGlvblR5cGVzID0ge1xuICBJTklUOiAnQEByZWR1eC9JTklUJ1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAgICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gICAqXG4gICAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAgICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICAgKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAgICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICAgKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICAgKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICAgKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gICAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbmhhbmNlcl0gVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICAgKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gICAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAgICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAgICpcbiAgICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAgICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICAgKi9cbn07ZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXSkoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBvdXRlclN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICByZXR1cm4gX3JlZiA9IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMge3N1YnNjcmlwdGlvbn0gQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7IHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbX3N5bWJvbE9ic2VydmFibGUyWydkZWZhdWx0J11dID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfVxuXG4gIC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyW19zeW1ib2xPYnNlcnZhYmxlMlsnZGVmYXVsdCddXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9jcmVhdGVTdG9yZS5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcG9ueWZpbGwgPSByZXF1aXJlKCcuL3BvbnlmaWxsJyk7XG5cbnZhciBfcG9ueWZpbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9ueWZpbGwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciByb290OyAvKiBnbG9iYWwgd2luZG93ICovXG5cblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7XG4gIHJvb3QgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufVxuXG52YXIgcmVzdWx0ID0gKDAsIF9wb255ZmlsbDJbJ2RlZmF1bHQnXSkocm9vdCk7XG5leHBvcnRzWydkZWZhdWx0J10gPSByZXN1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHN5bWJvbE9ic2VydmFibGVQb255ZmlsbDtcbmZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBfU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBfU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKF9TeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRfU3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL3BvbnlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZWR1Y2U7XG5cbnZhciBfZHJhZ09mZnNldCA9IHJlcXVpcmUoJy4vZHJhZ09mZnNldCcpO1xuXG52YXIgX2RyYWdPZmZzZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZHJhZ09mZnNldCk7XG5cbnZhciBfZHJhZ09wZXJhdGlvbiA9IHJlcXVpcmUoJy4vZHJhZ09wZXJhdGlvbicpO1xuXG52YXIgX2RyYWdPcGVyYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZHJhZ09wZXJhdGlvbik7XG5cbnZhciBfcmVmQ291bnQgPSByZXF1aXJlKCcuL3JlZkNvdW50Jyk7XG5cbnZhciBfcmVmQ291bnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVmQ291bnQpO1xuXG52YXIgX2RpcnR5SGFuZGxlcklkcyA9IHJlcXVpcmUoJy4vZGlydHlIYW5kbGVySWRzJyk7XG5cbnZhciBfZGlydHlIYW5kbGVySWRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RpcnR5SGFuZGxlcklkcyk7XG5cbnZhciBfc3RhdGVJZCA9IHJlcXVpcmUoJy4vc3RhdGVJZCcpO1xuXG52YXIgX3N0YXRlSWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVJZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHJlZHVjZSgpIHtcbiAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICByZXR1cm4ge1xuICAgIGRpcnR5SGFuZGxlcklkczogKDAsIF9kaXJ0eUhhbmRsZXJJZHMyLmRlZmF1bHQpKHN0YXRlLmRpcnR5SGFuZGxlcklkcywgYWN0aW9uLCBzdGF0ZS5kcmFnT3BlcmF0aW9uKSxcbiAgICBkcmFnT2Zmc2V0OiAoMCwgX2RyYWdPZmZzZXQyLmRlZmF1bHQpKHN0YXRlLmRyYWdPZmZzZXQsIGFjdGlvbiksXG4gICAgcmVmQ291bnQ6ICgwLCBfcmVmQ291bnQyLmRlZmF1bHQpKHN0YXRlLnJlZkNvdW50LCBhY3Rpb24pLFxuICAgIGRyYWdPcGVyYXRpb246ICgwLCBfZHJhZ09wZXJhdGlvbjIuZGVmYXVsdCkoc3RhdGUuZHJhZ09wZXJhdGlvbiwgYWN0aW9uKSxcbiAgICBzdGF0ZUlkOiAoMCwgX3N0YXRlSWQyLmRlZmF1bHQpKHN0YXRlLnN0YXRlSWQpXG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL3JlZHVjZXJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRyYWdPcGVyYXRpb247XG5cbnZhciBfd2l0aG91dCA9IHJlcXVpcmUoJ2xvZGFzaC93aXRob3V0Jyk7XG5cbnZhciBfd2l0aG91dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRob3V0KTtcblxudmFyIF9kcmFnRHJvcCA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZHJhZ0Ryb3AnKTtcblxudmFyIF9yZWdpc3RyeSA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvcmVnaXN0cnknKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgaXRlbVR5cGU6IG51bGwsXG4gIGl0ZW06IG51bGwsXG4gIHNvdXJjZUlkOiBudWxsLFxuICB0YXJnZXRJZHM6IFtdLFxuICBkcm9wUmVzdWx0OiBudWxsLFxuICBkaWREcm9wOiBmYWxzZSxcbiAgaXNTb3VyY2VQdWJsaWM6IG51bGxcbn07XG5cbmZ1bmN0aW9uIGRyYWdPcGVyYXRpb24oKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogaW5pdGlhbFN0YXRlO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIF9kcmFnRHJvcC5CRUdJTl9EUkFHOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtVHlwZTogYWN0aW9uLml0ZW1UeXBlLFxuICAgICAgICBpdGVtOiBhY3Rpb24uaXRlbSxcbiAgICAgICAgc291cmNlSWQ6IGFjdGlvbi5zb3VyY2VJZCxcbiAgICAgICAgaXNTb3VyY2VQdWJsaWM6IGFjdGlvbi5pc1NvdXJjZVB1YmxpYyxcbiAgICAgICAgZHJvcFJlc3VsdDogbnVsbCxcbiAgICAgICAgZGlkRHJvcDogZmFsc2VcbiAgICAgIH0pO1xuICAgIGNhc2UgX2RyYWdEcm9wLlBVQkxJU0hfRFJBR19TT1VSQ0U6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGlzU291cmNlUHVibGljOiB0cnVlXG4gICAgICB9KTtcbiAgICBjYXNlIF9kcmFnRHJvcC5IT1ZFUjpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgdGFyZ2V0SWRzOiBhY3Rpb24udGFyZ2V0SWRzXG4gICAgICB9KTtcbiAgICBjYXNlIF9yZWdpc3RyeS5SRU1PVkVfVEFSR0VUOlxuICAgICAgaWYgKHN0YXRlLnRhcmdldElkcy5pbmRleE9mKGFjdGlvbi50YXJnZXRJZCkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgdGFyZ2V0SWRzOiAoMCwgX3dpdGhvdXQyLmRlZmF1bHQpKHN0YXRlLnRhcmdldElkcywgYWN0aW9uLnRhcmdldElkKVxuICAgICAgfSk7XG4gICAgY2FzZSBfZHJhZ0Ryb3AuRFJPUDpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZHJvcFJlc3VsdDogYWN0aW9uLmRyb3BSZXN1bHQsXG4gICAgICAgIGRpZERyb3A6IHRydWUsXG4gICAgICAgIHRhcmdldElkczogW11cbiAgICAgIH0pO1xuICAgIGNhc2UgX2RyYWdEcm9wLkVORF9EUkFHOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtVHlwZTogbnVsbCxcbiAgICAgICAgaXRlbTogbnVsbCxcbiAgICAgICAgc291cmNlSWQ6IG51bGwsXG4gICAgICAgIGRyb3BSZXN1bHQ6IG51bGwsXG4gICAgICAgIGRpZERyb3A6IGZhbHNlLFxuICAgICAgICBpc1NvdXJjZVB1YmxpYzogbnVsbCxcbiAgICAgICAgdGFyZ2V0SWRzOiBbXVxuICAgICAgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT3BlcmF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZURpZmZlcmVuY2UgPSByZXF1aXJlKCcuL19iYXNlRGlmZmVyZW5jZScpLFxuICAgIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGV4Y2x1ZGluZyBhbGwgZ2l2ZW4gdmFsdWVzIHVzaW5nXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqICoqTm90ZToqKiBVbmxpa2UgYF8ucHVsbGAsIHRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Li4uKn0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBleGNsdWRlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzLlxuICogQHNlZSBfLmRpZmZlcmVuY2UsIF8ueG9yXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ud2l0aG91dChbMiwgMSwgMiwgM10sIDEsIDIpO1xuICogLy8gPT4gWzNdXG4gKi9cbnZhciB3aXRob3V0ID0gYmFzZVJlc3QoZnVuY3Rpb24oYXJyYXksIHZhbHVlcykge1xuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QoYXJyYXkpXG4gICAgPyBiYXNlRGlmZmVyZW5jZShhcnJheSwgdmFsdWVzKVxuICAgIDogW107XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aXRob3V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3dpdGhvdXQuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19IYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlQWRkLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUlzTmFOID0gcmVxdWlyZSgnLi9fYmFzZUlzTmFOJyksXG4gICAgc3RyaWN0SW5kZXhPZiA9IHJlcXVpcmUoJy4vX3N0cmljdEluZGV4T2YnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IGBmcm9tSW5kZXhgIGJvdW5kcyBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZVxuICAgID8gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleClcbiAgICA6IGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUluZGV4T2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmluZEluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hTmAgd2l0aG91dCBzdXBwb3J0IGZvciBudW1iZXIgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgTmFOYCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYU47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hTi5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpY3RJbmRleE9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyUmVzdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlclJlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FwcGx5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VTZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VTZXRUb1N0cmluZycpLFxuICAgIHNob3J0T3V0ID0gcmVxdWlyZSgnLi9fc2hvcnRPdXQnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29uc3RhbnQgPSByZXF1aXJlKCcuL2NvbnN0YW50JyksXG4gICAgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXRUb1N0cmluZ2Agd2l0aG91dCBzdXBwb3J0IGZvciBob3QgbG9vcCBzaG9ydGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuYywgJ3RvU3RyaW5nJywge1xuICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgJ3ZhbHVlJzogY29uc3RhbnQoc3RyaW5nKSxcbiAgICAnd3JpdGFibGUnOiB0cnVlXG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2NvbnN0YW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVOb3cgPSBEYXRlLm5vdztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvcnRPdXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Nob3J0T3V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNMZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZWZDb3VudDtcblxudmFyIF9yZWdpc3RyeSA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvcmVnaXN0cnknKTtcblxuZnVuY3Rpb24gcmVmQ291bnQoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBfcmVnaXN0cnkuQUREX1NPVVJDRTpcbiAgICBjYXNlIF9yZWdpc3RyeS5BRERfVEFSR0VUOlxuICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbiAgICBjYXNlIF9yZWdpc3RyeS5SRU1PVkVfU09VUkNFOlxuICAgIGNhc2UgX3JlZ2lzdHJ5LlJFTU9WRV9UQVJHRVQ6XG4gICAgICByZXR1cm4gc3RhdGUgLSAxO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvcmVmQ291bnQuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBiYXNlWG9yID0gcmVxdWlyZSgnLi9fYmFzZVhvcicpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdW5pcXVlIHZhbHVlcyB0aGF0IGlzIHRoZVxuICogW3N5bW1ldHJpYyBkaWZmZXJlbmNlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TeW1tZXRyaWNfZGlmZmVyZW5jZSlcbiAqIG9mIHRoZSBnaXZlbiBhcnJheXMuIFRoZSBvcmRlciBvZiByZXN1bHQgdmFsdWVzIGlzIGRldGVybWluZWQgYnkgdGhlIG9yZGVyXG4gKiB0aGV5IG9jY3VyIGluIHRoZSBhcnJheXMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0gey4uLkFycmF5fSBbYXJyYXlzXSBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXMuXG4gKiBAc2VlIF8uZGlmZmVyZW5jZSwgXy53aXRob3V0XG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ueG9yKFsyLCAxXSwgWzIsIDNdKTtcbiAqIC8vID0+IFsxLCAzXVxuICovXG52YXIgeG9yID0gYmFzZVJlc3QoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHJldHVybiBiYXNlWG9yKGFycmF5RmlsdGVyKGFycmF5cywgaXNBcnJheUxpa2VPYmplY3QpKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHhvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC94b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi9fYmFzZURpZmZlcmVuY2UnKSxcbiAgICBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJy4vX2Jhc2VGbGF0dGVuJyksXG4gICAgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIG1ldGhvZHMgbGlrZSBgXy54b3JgLCB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLCB0aGF0IGFjY2VwdHMgYW4gYXJyYXkgb2YgYXJyYXlzIHRvIGluc3BlY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5cyBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VYb3IoYXJyYXlzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgbGVuZ3RoID0gYXJyYXlzLmxlbmd0aDtcbiAgaWYgKGxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gbGVuZ3RoID8gYmFzZVVuaXEoYXJyYXlzWzBdKSA6IFtdO1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBhcnJheSA9IGFycmF5c1tpbmRleF0sXG4gICAgICAgIG90aEluZGV4ID0gLTE7XG5cbiAgICB3aGlsZSAoKytvdGhJbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKG90aEluZGV4ICE9IGluZGV4KSB7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBiYXNlRGlmZmVyZW5jZShyZXN1bHRbaW5kZXhdIHx8IGFycmF5LCBhcnJheXNbb3RoSW5kZXhdLCBpdGVyYXRlZSwgY29tcGFyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBiYXNlVW5pcShiYXNlRmxhdHRlbihyZXN1bHQsIDEpLCBpdGVyYXRlZSwgY29tcGFyYXRvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVhvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVhvci5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0ZsYXR0ZW5hYmxlID0gcmVxdWlyZSgnLi9faXNGbGF0dGVuYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggc3VwcG9ydCBmb3IgcmVzdHJpY3RpbmcgZmxhdHRlbmluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcGFyYW0ge251bWJlcn0gZGVwdGggVGhlIG1heGltdW0gcmVjdXJzaW9uIGRlcHRoLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJlZGljYXRlPWlzRmxhdHRlbmFibGVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1N0cmljdF0gUmVzdHJpY3QgdG8gdmFsdWVzIHRoYXQgcGFzcyBgcHJlZGljYXRlYCBjaGVja3MuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBkZXB0aCwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHByZWRpY2F0ZSB8fCAocHJlZGljYXRlID0gaXNGbGF0dGVuYWJsZSk7XG4gIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChkZXB0aCA+IDAgJiYgcHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBmbGF0dGVuIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmxhdHRlbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZsYXR0ZW4uanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheVB1c2guanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcHJlYWRhYmxlU3ltYm9sID0gU3ltYm9sID8gU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGZsYXR0ZW5hYmxlIGBhcmd1bWVudHNgIG9iamVjdCBvciBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmbGF0dGVuYWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0ZsYXR0ZW5hYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkgfHxcbiAgICAhIShzcHJlYWRhYmxlU3ltYm9sICYmIHZhbHVlICYmIHZhbHVlW3NwcmVhZGFibGVTeW1ib2xdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZsYXR0ZW5hYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpLFxuICAgIGNyZWF0ZVNldCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVNldCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmlxKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgc2VlbiA9IHJlc3VsdDtcblxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgfVxuICBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xuICAgIGlmIChzZXQpIHtcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XG4gICAgfVxuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKHNlZW5JbmRleC0tKSB7XG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXMoc2VlbiwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmlxLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2JqZWN0IG9mIGB2YWx1ZXNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBzZXQuXG4gKi9cbnZhciBjcmVhdGVTZXQgPSAhKFNldCAmJiAoMSAvIHNldFRvQXJyYXkobmV3IFNldChbLC0wXSkpWzFdKSA9PSBJTkZJTklUWSkgPyBub29wIDogZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgU2V0KHZhbHVlcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZSgnLi9fYmFzZUludGVyc2VjdGlvbicpLFxuICAgIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBjYXN0QXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9fY2FzdEFycmF5TGlrZU9iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdW5pcXVlIHZhbHVlcyB0aGF0IGFyZSBpbmNsdWRlZCBpbiBhbGwgZ2l2ZW4gYXJyYXlzXG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLiBUaGUgb3JkZXIgYW5kIHJlZmVyZW5jZXMgb2YgcmVzdWx0IHZhbHVlcyBhcmVcbiAqIGRldGVybWluZWQgYnkgdGhlIGZpcnN0IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgaW50ZXJzZWN0aW5nIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pbnRlcnNlY3Rpb24oWzIsIDFdLCBbMiwgM10pO1xuICogLy8gPT4gWzJdXG4gKi9cbnZhciBpbnRlcnNlY3Rpb24gPSBiYXNlUmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgdmFyIG1hcHBlZCA9IGFycmF5TWFwKGFycmF5cywgY2FzdEFycmF5TGlrZU9iamVjdCk7XG4gIHJldHVybiAobWFwcGVkLmxlbmd0aCAmJiBtYXBwZWRbMF0gPT09IGFycmF5c1swXSlcbiAgICA/IGJhc2VJbnRlcnNlY3Rpb24obWFwcGVkKVxuICAgIDogW107XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcnNlY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJzZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgbWV0aG9kcyBsaWtlIGBfLmludGVyc2VjdGlvbmAsIHdpdGhvdXQgc3VwcG9ydFxuICogZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMsIHRoYXQgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgdG8gaW5zcGVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlzIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIHNoYXJlZCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbnRlcnNlY3Rpb24oYXJyYXlzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5jbHVkZXMgPSBjb21wYXJhdG9yID8gYXJyYXlJbmNsdWRlc1dpdGggOiBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXlzWzBdLmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IGFycmF5cy5sZW5ndGgsXG4gICAgICBvdGhJbmRleCA9IG90aExlbmd0aCxcbiAgICAgIGNhY2hlcyA9IEFycmF5KG90aExlbmd0aCksXG4gICAgICBtYXhMZW5ndGggPSBJbmZpbml0eSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlIChvdGhJbmRleC0tKSB7XG4gICAgdmFyIGFycmF5ID0gYXJyYXlzW290aEluZGV4XTtcbiAgICBpZiAob3RoSW5kZXggJiYgaXRlcmF0ZWUpIHtcbiAgICAgIGFycmF5ID0gYXJyYXlNYXAoYXJyYXksIGJhc2VVbmFyeShpdGVyYXRlZSkpO1xuICAgIH1cbiAgICBtYXhMZW5ndGggPSBuYXRpdmVNaW4oYXJyYXkubGVuZ3RoLCBtYXhMZW5ndGgpO1xuICAgIGNhY2hlc1tvdGhJbmRleF0gPSAhY29tcGFyYXRvciAmJiAoaXRlcmF0ZWUgfHwgKGxlbmd0aCA+PSAxMjAgJiYgYXJyYXkubGVuZ3RoID49IDEyMCkpXG4gICAgICA/IG5ldyBTZXRDYWNoZShvdGhJbmRleCAmJiBhcnJheSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG4gIGFycmF5ID0gYXJyYXlzWzBdO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgc2VlbiA9IGNhY2hlc1swXTtcblxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGggJiYgcmVzdWx0Lmxlbmd0aCA8IG1heExlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKCEoc2VlblxuICAgICAgICAgID8gY2FjaGVIYXMoc2VlbiwgY29tcHV0ZWQpXG4gICAgICAgICAgOiBpbmNsdWRlcyhyZXN1bHQsIGNvbXB1dGVkLCBjb21wYXJhdG9yKVxuICAgICAgICApKSB7XG4gICAgICBvdGhJbmRleCA9IG90aExlbmd0aDtcbiAgICAgIHdoaWxlICgtLW90aEluZGV4KSB7XG4gICAgICAgIHZhciBjYWNoZSA9IGNhY2hlc1tvdGhJbmRleF07XG4gICAgICAgIGlmICghKGNhY2hlXG4gICAgICAgICAgICAgID8gY2FjaGVIYXMoY2FjaGUsIGNvbXB1dGVkKVxuICAgICAgICAgICAgICA6IGluY2x1ZGVzKGFycmF5c1tvdGhJbmRleF0sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2Vlbikge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbnRlcnNlY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJbnRlcnNlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhbiBlbXB0eSBhcnJheSBpZiBpdCdzIG5vdCBhbiBhcnJheSBsaWtlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IFJldHVybnMgdGhlIGNhc3QgYXJyYXktbGlrZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNhc3RBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdEFycmF5TGlrZU9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdEFycmF5TGlrZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3RhdGVJZDtcbmZ1bmN0aW9uIHN0YXRlSWQoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcblxuICByZXR1cm4gc3RhdGUgKyAxO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9zdGF0ZUlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2lzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2lzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNBcnJheSk7XG5cbnZhciBfbWF0Y2hlc1R5cGUgPSByZXF1aXJlKCcuL3V0aWxzL21hdGNoZXNUeXBlJyk7XG5cbnZhciBfbWF0Y2hlc1R5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF0Y2hlc1R5cGUpO1xuXG52YXIgX0hhbmRsZXJSZWdpc3RyeSA9IHJlcXVpcmUoJy4vSGFuZGxlclJlZ2lzdHJ5Jyk7XG5cbnZhciBfSGFuZGxlclJlZ2lzdHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hhbmRsZXJSZWdpc3RyeSk7XG5cbnZhciBfZHJhZ09mZnNldCA9IHJlcXVpcmUoJy4vcmVkdWNlcnMvZHJhZ09mZnNldCcpO1xuXG52YXIgX2RpcnR5SGFuZGxlcklkcyA9IHJlcXVpcmUoJy4vcmVkdWNlcnMvZGlydHlIYW5kbGVySWRzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEcmFnRHJvcE1vbml0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERyYWdEcm9wTW9uaXRvcihzdG9yZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnRHJvcE1vbml0b3IpO1xuXG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMucmVnaXN0cnkgPSBuZXcgX0hhbmRsZXJSZWdpc3RyeTIuZGVmYXVsdChzdG9yZSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJhZ0Ryb3BNb25pdG9yLCBbe1xuICAgIGtleTogJ3N1YnNjcmliZVRvU3RhdGVDaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmVUb1N0YXRlQ2hhbmdlKGxpc3RlbmVyKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgaGFuZGxlcklkcyA9IG9wdGlvbnMuaGFuZGxlcklkcztcblxuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJywgJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0eXBlb2YgaGFuZGxlcklkcyA9PT0gJ3VuZGVmaW5lZCcgfHwgKDAsIF9pc0FycmF5Mi5kZWZhdWx0KShoYW5kbGVySWRzKSwgJ2hhbmRsZXJJZHMsIHdoZW4gc3BlY2lmaWVkLCBtdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3MuJyk7XG5cbiAgICAgIHZhciBwcmV2U3RhdGVJZCA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5zdGF0ZUlkO1xuICAgICAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZUlkID0gc3RhdGUuc3RhdGVJZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgY2FuU2tpcExpc3RlbmVyID0gY3VycmVudFN0YXRlSWQgPT09IHByZXZTdGF0ZUlkIHx8IGN1cnJlbnRTdGF0ZUlkID09PSBwcmV2U3RhdGVJZCArIDEgJiYgISgwLCBfZGlydHlIYW5kbGVySWRzLmFyZURpcnR5KShzdGF0ZS5kaXJ0eUhhbmRsZXJJZHMsIGhhbmRsZXJJZHMpO1xuXG4gICAgICAgICAgaWYgKCFjYW5Ta2lwTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHByZXZTdGF0ZUlkID0gY3VycmVudFN0YXRlSWQ7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB0aGlzLnN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N1YnNjcmliZVRvT2Zmc2V0Q2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlVG9PZmZzZXRDaGFuZ2UobGlzdGVuZXIpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nLCAnbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuXG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0O1xuICAgICAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgICAgdmFyIG5leHRTdGF0ZSA9IF90aGlzMi5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQ7XG4gICAgICAgIGlmIChuZXh0U3RhdGUgPT09IHByZXZpb3VzU3RhdGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2aW91c1N0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc3Vic2NyaWJlKGhhbmRsZUNoYW5nZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FuRHJhZ1NvdXJjZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbkRyYWdTb3VyY2Uoc291cmNlSWQpIHtcbiAgICAgIHZhciBzb3VyY2UgPSB0aGlzLnJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZCk7XG4gICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoc291cmNlLCAnRXhwZWN0ZWQgdG8gZmluZCBhIHZhbGlkIHNvdXJjZS4nKTtcblxuICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNvdXJjZS5jYW5EcmFnKHRoaXMsIHNvdXJjZUlkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYW5Ecm9wT25UYXJnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5Ecm9wT25UYXJnZXQodGFyZ2V0SWQpIHtcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnJlZ2lzdHJ5LmdldFRhcmdldCh0YXJnZXRJZCk7XG4gICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodGFyZ2V0LCAnRXhwZWN0ZWQgdG8gZmluZCBhIHZhbGlkIHRhcmdldC4nKTtcblxuICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcoKSB8fCB0aGlzLmRpZERyb3AoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXRUeXBlID0gdGhpcy5yZWdpc3RyeS5nZXRUYXJnZXRUeXBlKHRhcmdldElkKTtcbiAgICAgIHZhciBkcmFnZ2VkSXRlbVR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKCk7XG4gICAgICByZXR1cm4gKDAsIF9tYXRjaGVzVHlwZTIuZGVmYXVsdCkodGFyZ2V0VHlwZSwgZHJhZ2dlZEl0ZW1UeXBlKSAmJiB0YXJnZXQuY2FuRHJvcCh0aGlzLCB0YXJnZXRJZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNEcmFnZ2luZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRHJhZ2dpbmcoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldEl0ZW1UeXBlKCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzRHJhZ2dpbmdTb3VyY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RyYWdnaW5nU291cmNlKHNvdXJjZUlkKSB7XG4gICAgICB2YXIgc291cmNlID0gdGhpcy5yZWdpc3RyeS5nZXRTb3VyY2Uoc291cmNlSWQsIHRydWUpO1xuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHNvdXJjZSwgJ0V4cGVjdGVkIHRvIGZpbmQgYSB2YWxpZCBzb3VyY2UuJyk7XG5cbiAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKCkgfHwgIXRoaXMuaXNTb3VyY2VQdWJsaWMoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VUeXBlID0gdGhpcy5yZWdpc3RyeS5nZXRTb3VyY2VUeXBlKHNvdXJjZUlkKTtcbiAgICAgIHZhciBkcmFnZ2VkSXRlbVR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKCk7XG4gICAgICBpZiAoc291cmNlVHlwZSAhPT0gZHJhZ2dlZEl0ZW1UeXBlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNvdXJjZS5pc0RyYWdnaW5nKHRoaXMsIHNvdXJjZUlkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc092ZXJUYXJnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc092ZXJUYXJnZXQodGFyZ2V0SWQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7IHNoYWxsb3c6IGZhbHNlIH07XG4gICAgICB2YXIgc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcblxuICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXRUeXBlID0gdGhpcy5yZWdpc3RyeS5nZXRUYXJnZXRUeXBlKHRhcmdldElkKTtcbiAgICAgIHZhciBkcmFnZ2VkSXRlbVR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKCk7XG4gICAgICBpZiAoISgwLCBfbWF0Y2hlc1R5cGUyLmRlZmF1bHQpKHRhcmdldFR5cGUsIGRyYWdnZWRJdGVtVHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFyZ2V0SWRzID0gdGhpcy5nZXRUYXJnZXRJZHMoKTtcbiAgICAgIGlmICghdGFyZ2V0SWRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBpbmRleCA9IHRhcmdldElkcy5pbmRleE9mKHRhcmdldElkKTtcbiAgICAgIGlmIChzaGFsbG93KSB7XG4gICAgICAgIHJldHVybiBpbmRleCA9PT0gdGFyZ2V0SWRzLmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaW5kZXggPiAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJdGVtVHlwZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEl0ZW1UeXBlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLml0ZW1UeXBlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEl0ZW0nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJdGVtKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLml0ZW07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U291cmNlSWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb3VyY2VJZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5zb3VyY2VJZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRUYXJnZXRJZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYXJnZXRJZHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24udGFyZ2V0SWRzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldERyb3BSZXN1bHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREcm9wUmVzdWx0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLmRyb3BSZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlkRHJvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpZERyb3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24uZGlkRHJvcDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc1NvdXJjZVB1YmxpYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzU291cmNlUHVibGljKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLmlzU291cmNlUHVibGljO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEluaXRpYWxDbGllbnRPZmZzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0LmluaXRpYWxDbGllbnRPZmZzZXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQuaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDbGllbnRPZmZzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbGllbnRPZmZzZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQuY2xpZW50T2Zmc2V0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNvdXJjZUNsaWVudE9mZnNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICAgIHJldHVybiAoMCwgX2RyYWdPZmZzZXQuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KSh0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCkge1xuICAgICAgcmV0dXJuICgwLCBfZHJhZ09mZnNldC5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQpKHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJhZ0Ryb3BNb25pdG9yO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEcmFnRHJvcE1vbml0b3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL0RyYWdEcm9wTW9uaXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2lzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2lzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNBcnJheSk7XG5cbnZhciBfYXNhcCA9IHJlcXVpcmUoJ2FzYXAnKTtcblxudmFyIF9hc2FwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FzYXApO1xuXG52YXIgX3JlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9hY3Rpb25zL3JlZ2lzdHJ5Jyk7XG5cbnZhciBfZ2V0TmV4dFVuaXF1ZUlkID0gcmVxdWlyZSgnLi91dGlscy9nZXROZXh0VW5pcXVlSWQnKTtcblxudmFyIF9nZXROZXh0VW5pcXVlSWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0TmV4dFVuaXF1ZUlkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEhhbmRsZXJSb2xlcyA9IHtcbiAgU09VUkNFOiAnU09VUkNFJyxcbiAgVEFSR0VUOiAnVEFSR0VUJ1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVTb3VyY2VDb250cmFjdChzb3VyY2UpIHtcbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHR5cGVvZiBzb3VyY2UuY2FuRHJhZyA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGNhbkRyYWcgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHR5cGVvZiBzb3VyY2UuYmVnaW5EcmFnID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgYmVnaW5EcmFnIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0eXBlb2Ygc291cmNlLmVuZERyYWcgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBlbmREcmFnIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGFyZ2V0Q29udHJhY3QodGFyZ2V0KSB7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0eXBlb2YgdGFyZ2V0LmNhbkRyb3AgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBjYW5Ecm9wIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0eXBlb2YgdGFyZ2V0LmhvdmVyID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgaG92ZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHR5cGVvZiB0YXJnZXQuZHJvcCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGJlZ2luRHJhZyB0byBiZSBhIGZ1bmN0aW9uLicpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVR5cGUodHlwZSwgYWxsb3dBcnJheSkge1xuICBpZiAoYWxsb3dBcnJheSAmJiAoMCwgX2lzQXJyYXkyLmRlZmF1bHQpKHR5cGUpKSB7XG4gICAgdHlwZS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGVUeXBlKHQsIGZhbHNlKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8ICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHlwZSkpID09PSAnc3ltYm9sJywgYWxsb3dBcnJheSA/ICdUeXBlIGNhbiBvbmx5IGJlIGEgc3RyaW5nLCBhIHN5bWJvbCwgb3IgYW4gYXJyYXkgb2YgZWl0aGVyLicgOiAnVHlwZSBjYW4gb25seSBiZSBhIHN0cmluZyBvciBhIHN5bWJvbC4nKTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dEhhbmRsZXJJZChyb2xlKSB7XG4gIHZhciBpZCA9ICgwLCBfZ2V0TmV4dFVuaXF1ZUlkMi5kZWZhdWx0KSgpLnRvU3RyaW5nKCk7XG4gIHN3aXRjaCAocm9sZSkge1xuICAgIGNhc2UgSGFuZGxlclJvbGVzLlNPVVJDRTpcbiAgICAgIHJldHVybiAnUycgKyBpZDtcbiAgICBjYXNlIEhhbmRsZXJSb2xlcy5UQVJHRVQ6XG4gICAgICByZXR1cm4gJ1QnICsgaWQ7XG4gICAgZGVmYXVsdDpcbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSwgJ1Vua25vd24gcm9sZTogJyArIHJvbGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUm9sZUZyb21IYW5kbGVySWQoaGFuZGxlcklkKSB7XG4gIHN3aXRjaCAoaGFuZGxlcklkWzBdKSB7XG4gICAgY2FzZSAnUyc6XG4gICAgICByZXR1cm4gSGFuZGxlclJvbGVzLlNPVVJDRTtcbiAgICBjYXNlICdUJzpcbiAgICAgIHJldHVybiBIYW5kbGVyUm9sZXMuVEFSR0VUO1xuICAgIGRlZmF1bHQ6XG4gICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICdDYW5ub3QgcGFyc2UgaGFuZGxlciBJRDogJyArIGhhbmRsZXJJZCk7XG4gIH1cbn1cblxudmFyIEhhbmRsZXJSZWdpc3RyeSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSGFuZGxlclJlZ2lzdHJ5KHN0b3JlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhbmRsZXJSZWdpc3RyeSk7XG5cbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG5cbiAgICB0aGlzLnR5cGVzID0ge307XG4gICAgdGhpcy5oYW5kbGVycyA9IHt9O1xuXG4gICAgdGhpcy5waW5uZWRTb3VyY2VJZCA9IG51bGw7XG4gICAgdGhpcy5waW5uZWRTb3VyY2UgPSBudWxsO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEhhbmRsZXJSZWdpc3RyeSwgW3tcbiAgICBrZXk6ICdhZGRTb3VyY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRTb3VyY2UodHlwZSwgc291cmNlKSB7XG4gICAgICB2YWxpZGF0ZVR5cGUodHlwZSk7XG4gICAgICB2YWxpZGF0ZVNvdXJjZUNvbnRyYWN0KHNvdXJjZSk7XG5cbiAgICAgIHZhciBzb3VyY2VJZCA9IHRoaXMuYWRkSGFuZGxlcihIYW5kbGVyUm9sZXMuU09VUkNFLCB0eXBlLCBzb3VyY2UpO1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCgoMCwgX3JlZ2lzdHJ5LmFkZFNvdXJjZSkoc291cmNlSWQpKTtcbiAgICAgIHJldHVybiBzb3VyY2VJZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGRUYXJnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRUYXJnZXQodHlwZSwgdGFyZ2V0KSB7XG4gICAgICB2YWxpZGF0ZVR5cGUodHlwZSwgdHJ1ZSk7XG4gICAgICB2YWxpZGF0ZVRhcmdldENvbnRyYWN0KHRhcmdldCk7XG5cbiAgICAgIHZhciB0YXJnZXRJZCA9IHRoaXMuYWRkSGFuZGxlcihIYW5kbGVyUm9sZXMuVEFSR0VULCB0eXBlLCB0YXJnZXQpO1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCgoMCwgX3JlZ2lzdHJ5LmFkZFRhcmdldCkodGFyZ2V0SWQpKTtcbiAgICAgIHJldHVybiB0YXJnZXRJZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGRIYW5kbGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSGFuZGxlcihyb2xlLCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgICB2YXIgaWQgPSBnZXROZXh0SGFuZGxlcklkKHJvbGUpO1xuICAgICAgdGhpcy50eXBlc1tpZF0gPSB0eXBlO1xuICAgICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBoYW5kbGVyO1xuXG4gICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29udGFpbnNIYW5kbGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udGFpbnNIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmhhbmRsZXJzKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZXJzW2tleV0gPT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTb3VyY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb3VyY2Uoc291cmNlSWQsIGluY2x1ZGVQaW5uZWQpIHtcbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLmlzU291cmNlSWQoc291cmNlSWQpLCAnRXhwZWN0ZWQgYSB2YWxpZCBzb3VyY2UgSUQuJyk7XG5cbiAgICAgIHZhciBpc1Bpbm5lZCA9IGluY2x1ZGVQaW5uZWQgJiYgc291cmNlSWQgPT09IHRoaXMucGlubmVkU291cmNlSWQ7XG4gICAgICB2YXIgc291cmNlID0gaXNQaW5uZWQgPyB0aGlzLnBpbm5lZFNvdXJjZSA6IHRoaXMuaGFuZGxlcnNbc291cmNlSWRdO1xuXG4gICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFRhcmdldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXRJZCkge1xuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMuaXNUYXJnZXRJZCh0YXJnZXRJZCksICdFeHBlY3RlZCBhIHZhbGlkIHRhcmdldCBJRC4nKTtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzW3RhcmdldElkXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTb3VyY2VUeXBlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U291cmNlVHlwZShzb3VyY2VJZCkge1xuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMuaXNTb3VyY2VJZChzb3VyY2VJZCksICdFeHBlY3RlZCBhIHZhbGlkIHNvdXJjZSBJRC4nKTtcbiAgICAgIHJldHVybiB0aGlzLnR5cGVzW3NvdXJjZUlkXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRUYXJnZXRUeXBlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFyZ2V0VHlwZSh0YXJnZXRJZCkge1xuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMuaXNUYXJnZXRJZCh0YXJnZXRJZCksICdFeHBlY3RlZCBhIHZhbGlkIHRhcmdldCBJRC4nKTtcbiAgICAgIHJldHVybiB0aGlzLnR5cGVzW3RhcmdldElkXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc1NvdXJjZUlkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNTb3VyY2VJZChoYW5kbGVySWQpIHtcbiAgICAgIHZhciByb2xlID0gcGFyc2VSb2xlRnJvbUhhbmRsZXJJZChoYW5kbGVySWQpO1xuICAgICAgcmV0dXJuIHJvbGUgPT09IEhhbmRsZXJSb2xlcy5TT1VSQ0U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNUYXJnZXRJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVGFyZ2V0SWQoaGFuZGxlcklkKSB7XG4gICAgICB2YXIgcm9sZSA9IHBhcnNlUm9sZUZyb21IYW5kbGVySWQoaGFuZGxlcklkKTtcbiAgICAgIHJldHVybiByb2xlID09PSBIYW5kbGVyUm9sZXMuVEFSR0VUO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZVNvdXJjZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVNvdXJjZShzb3VyY2VJZCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLmdldFNvdXJjZShzb3VyY2VJZCksICdFeHBlY3RlZCBhbiBleGlzdGluZyBzb3VyY2UuJyk7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKCgwLCBfcmVnaXN0cnkucmVtb3ZlU291cmNlKShzb3VyY2VJZCkpO1xuXG4gICAgICAoMCwgX2FzYXAyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIF90aGlzMi5oYW5kbGVyc1tzb3VyY2VJZF07XG4gICAgICAgIGRlbGV0ZSBfdGhpczIudHlwZXNbc291cmNlSWRdO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlVGFyZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0KHRhcmdldElkKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMuZ2V0VGFyZ2V0KHRhcmdldElkKSwgJ0V4cGVjdGVkIGFuIGV4aXN0aW5nIHRhcmdldC4nKTtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goKDAsIF9yZWdpc3RyeS5yZW1vdmVUYXJnZXQpKHRhcmdldElkKSk7XG5cbiAgICAgICgwLCBfYXNhcDIuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWxldGUgX3RoaXMzLmhhbmRsZXJzW3RhcmdldElkXTtcbiAgICAgICAgZGVsZXRlIF90aGlzMy50eXBlc1t0YXJnZXRJZF07XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwaW5Tb3VyY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwaW5Tb3VyY2Uoc291cmNlSWQpIHtcbiAgICAgIHZhciBzb3VyY2UgPSB0aGlzLmdldFNvdXJjZShzb3VyY2VJZCk7XG4gICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoc291cmNlLCAnRXhwZWN0ZWQgYW4gZXhpc3Rpbmcgc291cmNlLicpO1xuXG4gICAgICB0aGlzLnBpbm5lZFNvdXJjZUlkID0gc291cmNlSWQ7XG4gICAgICB0aGlzLnBpbm5lZFNvdXJjZSA9IHNvdXJjZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1bnBpblNvdXJjZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVucGluU291cmNlKCkge1xuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMucGlubmVkU291cmNlLCAnTm8gc291cmNlIGlzIHBpbm5lZCBhdCB0aGUgdGltZS4nKTtcblxuICAgICAgdGhpcy5waW5uZWRTb3VyY2VJZCA9IG51bGw7XG4gICAgICB0aGlzLnBpbm5lZFNvdXJjZSA9IG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhhbmRsZXJSZWdpc3RyeTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSGFuZGxlclJlZ2lzdHJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9IYW5kbGVyUmVnaXN0cnkuanNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gcmF3QXNhcCBwcm92aWRlcyBldmVyeXRoaW5nIHdlIG5lZWQgZXhjZXB0IGV4Y2VwdGlvbiBtYW5hZ2VtZW50LlxudmFyIHJhd0FzYXAgPSByZXF1aXJlKFwiLi9yYXdcIik7XG4vLyBSYXdUYXNrcyBhcmUgcmVjeWNsZWQgdG8gcmVkdWNlIEdDIGNodXJuLlxudmFyIGZyZWVUYXNrcyA9IFtdO1xuLy8gV2UgcXVldWUgZXJyb3JzIHRvIGVuc3VyZSB0aGV5IGFyZSB0aHJvd24gaW4gcmlnaHQgb3JkZXIgKEZJRk8pLlxuLy8gQXJyYXktYXMtcXVldWUgaXMgZ29vZCBlbm91Z2ggaGVyZSwgc2luY2Ugd2UgYXJlIGp1c3QgZGVhbGluZyB3aXRoIGV4Y2VwdGlvbnMuXG52YXIgcGVuZGluZ0Vycm9ycyA9IFtdO1xudmFyIHJlcXVlc3RFcnJvclRocm93ID0gcmF3QXNhcC5tYWtlUmVxdWVzdENhbGxGcm9tVGltZXIodGhyb3dGaXJzdEVycm9yKTtcblxuZnVuY3Rpb24gdGhyb3dGaXJzdEVycm9yKCkge1xuICAgIGlmIChwZW5kaW5nRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBwZW5kaW5nRXJyb3JzLnNoaWZ0KCk7XG4gICAgfVxufVxuXG4vKipcbiAqIENhbGxzIGEgdGFzayBhcyBzb29uIGFzIHBvc3NpYmxlIGFmdGVyIHJldHVybmluZywgaW4gaXRzIG93biBldmVudCwgd2l0aCBwcmlvcml0eVxuICogb3ZlciBvdGhlciBldmVudHMgbGlrZSBhbmltYXRpb24sIHJlZmxvdywgYW5kIHJlcGFpbnQuIEFuIGVycm9yIHRocm93biBmcm9tIGFuXG4gKiBldmVudCB3aWxsIG5vdCBpbnRlcnJ1cHQsIG5vciBldmVuIHN1YnN0YW50aWFsbHkgc2xvdyBkb3duIHRoZSBwcm9jZXNzaW5nIG9mXG4gKiBvdGhlciBldmVudHMsIGJ1dCB3aWxsIGJlIHJhdGhlciBwb3N0cG9uZWQgdG8gYSBsb3dlciBwcmlvcml0eSBldmVudC5cbiAqIEBwYXJhbSB7e2NhbGx9fSB0YXNrIEEgY2FsbGFibGUgb2JqZWN0LCB0eXBpY2FsbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIG5vXG4gKiBhcmd1bWVudHMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYXNhcDtcbmZ1bmN0aW9uIGFzYXAodGFzaykge1xuICAgIHZhciByYXdUYXNrO1xuICAgIGlmIChmcmVlVGFza3MubGVuZ3RoKSB7XG4gICAgICAgIHJhd1Rhc2sgPSBmcmVlVGFza3MucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmF3VGFzayA9IG5ldyBSYXdUYXNrKCk7XG4gICAgfVxuICAgIHJhd1Rhc2sudGFzayA9IHRhc2s7XG4gICAgcmF3QXNhcChyYXdUYXNrKTtcbn1cblxuLy8gV2Ugd3JhcCB0YXNrcyB3aXRoIHJlY3ljbGFibGUgdGFzayBvYmplY3RzLiAgQSB0YXNrIG9iamVjdCBpbXBsZW1lbnRzXG4vLyBgY2FsbGAsIGp1c3QgbGlrZSBhIGZ1bmN0aW9uLlxuZnVuY3Rpb24gUmF3VGFzaygpIHtcbiAgICB0aGlzLnRhc2sgPSBudWxsO1xufVxuXG4vLyBUaGUgc29sZSBwdXJwb3NlIG9mIHdyYXBwaW5nIHRoZSB0YXNrIGlzIHRvIGNhdGNoIHRoZSBleGNlcHRpb24gYW5kIHJlY3ljbGVcbi8vIHRoZSB0YXNrIG9iamVjdCBhZnRlciBpdHMgc2luZ2xlIHVzZS5cblJhd1Rhc2sucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdGhpcy50YXNrLmNhbGwoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoYXNhcC5vbmVycm9yKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGhvb2sgZXhpc3RzIHB1cmVseSBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAgICAgICAgICAgIC8vIEl0cyBuYW1lIHdpbGwgYmUgcGVyaW9kaWNhbGx5IHJhbmRvbWl6ZWQgdG8gYnJlYWsgYW55IGNvZGUgdGhhdFxuICAgICAgICAgICAgLy8gZGVwZW5kcyBvbiBpdHMgZXhpc3RlbmNlLlxuICAgICAgICAgICAgYXNhcC5vbmVycm9yKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEluIGEgd2ViIGJyb3dzZXIsIGV4Y2VwdGlvbnMgYXJlIG5vdCBmYXRhbC4gSG93ZXZlciwgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIHNsb3dpbmcgZG93biB0aGUgcXVldWUgb2YgcGVuZGluZyB0YXNrcywgd2UgcmV0aHJvdyB0aGUgZXJyb3IgaW4gYVxuICAgICAgICAgICAgLy8gbG93ZXIgcHJpb3JpdHkgdHVybi5cbiAgICAgICAgICAgIHBlbmRpbmdFcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgICAgICByZXF1ZXN0RXJyb3JUaHJvdygpO1xuICAgICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy50YXNrID0gbnVsbDtcbiAgICAgICAgZnJlZVRhc2tzW2ZyZWVUYXNrcy5sZW5ndGhdID0gdGhpcztcbiAgICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXNhcC9icm93c2VyLWFzYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gVXNlIHRoZSBmYXN0ZXN0IG1lYW5zIHBvc3NpYmxlIHRvIGV4ZWN1dGUgYSB0YXNrIGluIGl0cyBvd24gdHVybiwgd2l0aFxuLy8gcHJpb3JpdHkgb3ZlciBvdGhlciBldmVudHMgaW5jbHVkaW5nIElPLCBhbmltYXRpb24sIHJlZmxvdywgYW5kIHJlZHJhd1xuLy8gZXZlbnRzIGluIGJyb3dzZXJzLlxuLy9cbi8vIEFuIGV4Y2VwdGlvbiB0aHJvd24gYnkgYSB0YXNrIHdpbGwgcGVybWFuZW50bHkgaW50ZXJydXB0IHRoZSBwcm9jZXNzaW5nIG9mXG4vLyBzdWJzZXF1ZW50IHRhc2tzLiBUaGUgaGlnaGVyIGxldmVsIGBhc2FwYCBmdW5jdGlvbiBlbnN1cmVzIHRoYXQgaWYgYW5cbi8vIGV4Y2VwdGlvbiBpcyB0aHJvd24gYnkgYSB0YXNrLCB0aGF0IHRoZSB0YXNrIHF1ZXVlIHdpbGwgY29udGludWUgZmx1c2hpbmcgYXNcbi8vIHNvb24gYXMgcG9zc2libGUsIGJ1dCBpZiB5b3UgdXNlIGByYXdBc2FwYCBkaXJlY3RseSwgeW91IGFyZSByZXNwb25zaWJsZSB0b1xuLy8gZWl0aGVyIGVuc3VyZSB0aGF0IG5vIGV4Y2VwdGlvbnMgYXJlIHRocm93biBmcm9tIHlvdXIgdGFzaywgb3IgdG8gbWFudWFsbHlcbi8vIGNhbGwgYHJhd0FzYXAucmVxdWVzdEZsdXNoYCBpZiBhbiBleGNlcHRpb24gaXMgdGhyb3duLlxubW9kdWxlLmV4cG9ydHMgPSByYXdBc2FwO1xuZnVuY3Rpb24gcmF3QXNhcCh0YXNrKSB7XG4gICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcmVxdWVzdEZsdXNoKCk7XG4gICAgICAgIGZsdXNoaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gRXF1aXZhbGVudCB0byBwdXNoLCBidXQgYXZvaWRzIGEgZnVuY3Rpb24gY2FsbC5cbiAgICBxdWV1ZVtxdWV1ZS5sZW5ndGhdID0gdGFzaztcbn1cblxudmFyIHF1ZXVlID0gW107XG4vLyBPbmNlIGEgZmx1c2ggaGFzIGJlZW4gcmVxdWVzdGVkLCBubyBmdXJ0aGVyIGNhbGxzIHRvIGByZXF1ZXN0Rmx1c2hgIGFyZVxuLy8gbmVjZXNzYXJ5IHVudGlsIHRoZSBuZXh0IGBmbHVzaGAgY29tcGxldGVzLlxudmFyIGZsdXNoaW5nID0gZmFsc2U7XG4vLyBgcmVxdWVzdEZsdXNoYCBpcyBhbiBpbXBsZW1lbnRhdGlvbi1zcGVjaWZpYyBtZXRob2QgdGhhdCBhdHRlbXB0cyB0byBraWNrXG4vLyBvZmYgYSBgZmx1c2hgIGV2ZW50IGFzIHF1aWNrbHkgYXMgcG9zc2libGUuIGBmbHVzaGAgd2lsbCBhdHRlbXB0IHRvIGV4aGF1c3Rcbi8vIHRoZSBldmVudCBxdWV1ZSBiZWZvcmUgeWllbGRpbmcgdG8gdGhlIGJyb3dzZXIncyBvd24gZXZlbnQgbG9vcC5cbnZhciByZXF1ZXN0Rmx1c2g7XG4vLyBUaGUgcG9zaXRpb24gb2YgdGhlIG5leHQgdGFzayB0byBleGVjdXRlIGluIHRoZSB0YXNrIHF1ZXVlLiBUaGlzIGlzXG4vLyBwcmVzZXJ2ZWQgYmV0d2VlbiBjYWxscyB0byBgZmx1c2hgIHNvIHRoYXQgaXQgY2FuIGJlIHJlc3VtZWQgaWZcbi8vIGEgdGFzayB0aHJvd3MgYW4gZXhjZXB0aW9uLlxudmFyIGluZGV4ID0gMDtcbi8vIElmIGEgdGFzayBzY2hlZHVsZXMgYWRkaXRpb25hbCB0YXNrcyByZWN1cnNpdmVseSwgdGhlIHRhc2sgcXVldWUgY2FuIGdyb3dcbi8vIHVuYm91bmRlZC4gVG8gcHJldmVudCBtZW1vcnkgZXhoYXVzdGlvbiwgdGhlIHRhc2sgcXVldWUgd2lsbCBwZXJpb2RpY2FsbHlcbi8vIHRydW5jYXRlIGFscmVhZHktY29tcGxldGVkIHRhc2tzLlxudmFyIGNhcGFjaXR5ID0gMTAyNDtcblxuLy8gVGhlIGZsdXNoIGZ1bmN0aW9uIHByb2Nlc3NlcyBhbGwgdGFza3MgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHdpdGhcbi8vIGByYXdBc2FwYCB1bmxlc3MgYW5kIHVudGlsIG9uZSBvZiB0aG9zZSB0YXNrcyB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuLy8gSWYgYSB0YXNrIHRocm93cyBhbiBleGNlcHRpb24sIGBmbHVzaGAgZW5zdXJlcyB0aGF0IGl0cyBzdGF0ZSB3aWxsIHJlbWFpblxuLy8gY29uc2lzdGVudCBhbmQgd2lsbCByZXN1bWUgd2hlcmUgaXQgbGVmdCBvZmYgd2hlbiBjYWxsZWQgYWdhaW4uXG4vLyBIb3dldmVyLCBgZmx1c2hgIGRvZXMgbm90IG1ha2UgYW55IGFycmFuZ2VtZW50cyB0byBiZSBjYWxsZWQgYWdhaW4gaWYgYW5cbi8vIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB3aGlsZSAoaW5kZXggPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAvLyBBZHZhbmNlIHRoZSBpbmRleCBiZWZvcmUgY2FsbGluZyB0aGUgdGFzay4gVGhpcyBlbnN1cmVzIHRoYXQgd2Ugd2lsbFxuICAgICAgICAvLyBiZWdpbiBmbHVzaGluZyBvbiB0aGUgbmV4dCB0YXNrIHRoZSB0YXNrIHRocm93cyBhbiBlcnJvci5cbiAgICAgICAgaW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgIHF1ZXVlW2N1cnJlbnRJbmRleF0uY2FsbCgpO1xuICAgICAgICAvLyBQcmV2ZW50IGxlYWtpbmcgbWVtb3J5IGZvciBsb25nIGNoYWlucyBvZiByZWN1cnNpdmUgY2FsbHMgdG8gYGFzYXBgLlxuICAgICAgICAvLyBJZiB3ZSBjYWxsIGBhc2FwYCB3aXRoaW4gdGFza3Mgc2NoZWR1bGVkIGJ5IGBhc2FwYCwgdGhlIHF1ZXVlIHdpbGxcbiAgICAgICAgLy8gZ3JvdywgYnV0IHRvIGF2b2lkIGFuIE8obikgd2FsayBmb3IgZXZlcnkgdGFzayB3ZSBleGVjdXRlLCB3ZSBkb24ndFxuICAgICAgICAvLyBzaGlmdCB0YXNrcyBvZmYgdGhlIHF1ZXVlIGFmdGVyIHRoZXkgaGF2ZSBiZWVuIGV4ZWN1dGVkLlxuICAgICAgICAvLyBJbnN0ZWFkLCB3ZSBwZXJpb2RpY2FsbHkgc2hpZnQgMTAyNCB0YXNrcyBvZmYgdGhlIHF1ZXVlLlxuICAgICAgICBpZiAoaW5kZXggPiBjYXBhY2l0eSkge1xuICAgICAgICAgICAgLy8gTWFudWFsbHkgc2hpZnQgYWxsIHZhbHVlcyBzdGFydGluZyBhdCB0aGUgaW5kZXggYmFjayB0byB0aGVcbiAgICAgICAgICAgIC8vIGJlZ2lubmluZyBvZiB0aGUgcXVldWUuXG4gICAgICAgICAgICBmb3IgKHZhciBzY2FuID0gMCwgbmV3TGVuZ3RoID0gcXVldWUubGVuZ3RoIC0gaW5kZXg7IHNjYW4gPCBuZXdMZW5ndGg7IHNjYW4rKykge1xuICAgICAgICAgICAgICAgIHF1ZXVlW3NjYW5dID0gcXVldWVbc2NhbiArIGluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXVlLmxlbmd0aCAtPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgIGluZGV4ID0gMDtcbiAgICBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBgcmVxdWVzdEZsdXNoYCBpcyBpbXBsZW1lbnRlZCB1c2luZyBhIHN0cmF0ZWd5IGJhc2VkIG9uIGRhdGEgY29sbGVjdGVkIGZyb21cbi8vIGV2ZXJ5IGF2YWlsYWJsZSBTYXVjZUxhYnMgU2VsZW5pdW0gd2ViIGRyaXZlciB3b3JrZXIgYXQgdGltZSBvZiB3cml0aW5nLlxuLy8gaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMW1HLTVVWUd1cDVxeEdkRU1Xa2hQNkJXQ3owNTNOVWIyRTFRb1VUVTE2dUEvZWRpdCNnaWQ9NzgzNzI0NTkzXG5cbi8vIFNhZmFyaSA2IGFuZCA2LjEgZm9yIGRlc2t0b3AsIGlQYWQsIGFuZCBpUGhvbmUgYXJlIHRoZSBvbmx5IGJyb3dzZXJzIHRoYXRcbi8vIGhhdmUgV2ViS2l0TXV0YXRpb25PYnNlcnZlciBidXQgbm90IHVuLXByZWZpeGVkIE11dGF0aW9uT2JzZXJ2ZXIuXG4vLyBNdXN0IHVzZSBgZ2xvYmFsYCBvciBgc2VsZmAgaW5zdGVhZCBvZiBgd2luZG93YCB0byB3b3JrIGluIGJvdGggZnJhbWVzIGFuZCB3ZWJcbi8vIHdvcmtlcnMuIGBnbG9iYWxgIGlzIGEgcHJvdmlzaW9uIG9mIEJyb3dzZXJpZnksIE1yLCBNcnMsIG9yIE1vcC5cblxuLyogZ2xvYmFscyBzZWxmICovXG52YXIgc2NvcGUgPSB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogc2VsZjtcbnZhciBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IHNjb3BlLk11dGF0aW9uT2JzZXJ2ZXIgfHwgc2NvcGUuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxuLy8gTXV0YXRpb25PYnNlcnZlcnMgYXJlIGRlc2lyYWJsZSBiZWNhdXNlIHRoZXkgaGF2ZSBoaWdoIHByaW9yaXR5IGFuZCB3b3JrXG4vLyByZWxpYWJseSBldmVyeXdoZXJlIHRoZXkgYXJlIGltcGxlbWVudGVkLlxuLy8gVGhleSBhcmUgaW1wbGVtZW50ZWQgaW4gYWxsIG1vZGVybiBicm93c2Vycy5cbi8vXG4vLyAtIEFuZHJvaWQgNC00LjNcbi8vIC0gQ2hyb21lIDI2LTM0XG4vLyAtIEZpcmVmb3ggMTQtMjlcbi8vIC0gSW50ZXJuZXQgRXhwbG9yZXIgMTFcbi8vIC0gaVBhZCBTYWZhcmkgNi03LjFcbi8vIC0gaVBob25lIFNhZmFyaSA3LTcuMVxuLy8gLSBTYWZhcmkgNi03XG5pZiAodHlwZW9mIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXF1ZXN0Rmx1c2ggPSBtYWtlUmVxdWVzdENhbGxGcm9tTXV0YXRpb25PYnNlcnZlcihmbHVzaCk7XG5cbi8vIE1lc3NhZ2VDaGFubmVscyBhcmUgZGVzaXJhYmxlIGJlY2F1c2UgdGhleSBnaXZlIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIEhUTUxcbi8vIHRhc2sgcXVldWUsIGFyZSBpbXBsZW1lbnRlZCBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCwgU2FmYXJpIDUuMC0xLCBhbmQgT3BlcmFcbi8vIDExLTEyLCBhbmQgaW4gd2ViIHdvcmtlcnMgaW4gbWFueSBlbmdpbmVzLlxuLy8gQWx0aG91Z2ggbWVzc2FnZSBjaGFubmVscyB5aWVsZCB0byBhbnkgcXVldWVkIHJlbmRlcmluZyBhbmQgSU8gdGFza3MsIHRoZXlcbi8vIHdvdWxkIGJlIGJldHRlciB0aGFuIGltcG9zaW5nIHRoZSA0bXMgZGVsYXkgb2YgdGltZXJzLlxuLy8gSG93ZXZlciwgdGhleSBkbyBub3Qgd29yayByZWxpYWJseSBpbiBJbnRlcm5ldCBFeHBsb3JlciBvciBTYWZhcmkuXG5cbi8vIEludGVybmV0IEV4cGxvcmVyIDEwIGlzIHRoZSBvbmx5IGJyb3dzZXIgdGhhdCBoYXMgc2V0SW1tZWRpYXRlIGJ1dCBkb2VzXG4vLyBub3QgaGF2ZSBNdXRhdGlvbk9ic2VydmVycy5cbi8vIEFsdGhvdWdoIHNldEltbWVkaWF0ZSB5aWVsZHMgdG8gdGhlIGJyb3dzZXIncyByZW5kZXJlciwgaXQgd291bGQgYmVcbi8vIHByZWZlcnJhYmxlIHRvIGZhbGxpbmcgYmFjayB0byBzZXRUaW1lb3V0IHNpbmNlIGl0IGRvZXMgbm90IGhhdmVcbi8vIHRoZSBtaW5pbXVtIDRtcyBwZW5hbHR5LlxuLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBhcHBlYXJzIHRvIGJlIGEgYnVnIGluIEludGVybmV0IEV4cGxvcmVyIDEwIE1vYmlsZSAoYW5kXG4vLyBEZXNrdG9wIHRvIGEgbGVzc2VyIGV4dGVudCkgdGhhdCByZW5kZXJzIGJvdGggc2V0SW1tZWRpYXRlIGFuZFxuLy8gTWVzc2FnZUNoYW5uZWwgdXNlbGVzcyBmb3IgdGhlIHB1cnBvc2VzIG9mIEFTQVAuXG4vLyBodHRwczovL2dpdGh1Yi5jb20va3Jpc2tvd2FsL3EvaXNzdWVzLzM5NlxuXG4vLyBUaW1lcnMgYXJlIGltcGxlbWVudGVkIHVuaXZlcnNhbGx5LlxuLy8gV2UgZmFsbCBiYWNrIHRvIHRpbWVycyBpbiB3b3JrZXJzIGluIG1vc3QgZW5naW5lcywgYW5kIGluIGZvcmVncm91bmRcbi8vIGNvbnRleHRzIGluIHRoZSBmb2xsb3dpbmcgYnJvd3NlcnMuXG4vLyBIb3dldmVyLCBub3RlIHRoYXQgZXZlbiB0aGlzIHNpbXBsZSBjYXNlIHJlcXVpcmVzIG51YW5jZXMgdG8gb3BlcmF0ZSBpbiBhXG4vLyBicm9hZCBzcGVjdHJ1bSBvZiBicm93c2Vycy5cbi8vXG4vLyAtIEZpcmVmb3ggMy0xM1xuLy8gLSBJbnRlcm5ldCBFeHBsb3JlciA2LTlcbi8vIC0gaVBhZCBTYWZhcmkgNC4zXG4vLyAtIEx5bnggMi44Ljdcbn0gZWxzZSB7XG4gICAgcmVxdWVzdEZsdXNoID0gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKGZsdXNoKTtcbn1cblxuLy8gYHJlcXVlc3RGbHVzaGAgcmVxdWVzdHMgdGhhdCB0aGUgaGlnaCBwcmlvcml0eSBldmVudCBxdWV1ZSBiZSBmbHVzaGVkIGFzXG4vLyBzb29uIGFzIHBvc3NpYmxlLlxuLy8gVGhpcyBpcyB1c2VmdWwgdG8gcHJldmVudCBhbiBlcnJvciB0aHJvd24gaW4gYSB0YXNrIGZyb20gc3RhbGxpbmcgdGhlIGV2ZW50XG4vLyBxdWV1ZSBpZiB0aGUgZXhjZXB0aW9uIGhhbmRsZWQgYnkgTm9kZS5qc+KAmXNcbi8vIGBwcm9jZXNzLm9uKFwidW5jYXVnaHRFeGNlcHRpb25cIilgIG9yIGJ5IGEgZG9tYWluLlxucmF3QXNhcC5yZXF1ZXN0Rmx1c2ggPSByZXF1ZXN0Rmx1c2g7XG5cbi8vIFRvIHJlcXVlc3QgYSBoaWdoIHByaW9yaXR5IGV2ZW50LCB3ZSBpbmR1Y2UgYSBtdXRhdGlvbiBvYnNlcnZlciBieSB0b2dnbGluZ1xuLy8gdGhlIHRleHQgb2YgYSB0ZXh0IG5vZGUgYmV0d2VlbiBcIjFcIiBhbmQgXCItMVwiLlxuZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbU11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spIHtcbiAgICB2YXIgdG9nZ2xlID0gMTtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pO1xuICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbiAgICAgICAgdG9nZ2xlID0gLXRvZ2dsZTtcbiAgICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlO1xuICAgIH07XG59XG5cbi8vIFRoZSBtZXNzYWdlIGNoYW5uZWwgdGVjaG5pcXVlIHdhcyBkaXNjb3ZlcmVkIGJ5IE1hbHRlIFVibCBhbmQgd2FzIHRoZVxuLy8gb3JpZ2luYWwgZm91bmRhdGlvbiBmb3IgdGhpcyBsaWJyYXJ5LlxuLy8gaHR0cDovL3d3dy5ub25ibG9ja2luZy5pby8yMDExLzA2L3dpbmRvd25leHR0aWNrLmh0bWxcblxuLy8gU2FmYXJpIDYuMC41IChhdCBsZWFzdCkgaW50ZXJtaXR0ZW50bHkgZmFpbHMgdG8gY3JlYXRlIG1lc3NhZ2UgcG9ydHMgb24gYVxuLy8gcGFnZSdzIGZpcnN0IGxvYWQuIFRoYW5rZnVsbHksIHRoaXMgdmVyc2lvbiBvZiBTYWZhcmkgc3VwcG9ydHNcbi8vIE11dGF0aW9uT2JzZXJ2ZXJzLCBzbyB3ZSBkb24ndCBuZWVkIHRvIGZhbGwgYmFjayBpbiB0aGF0IGNhc2UuXG5cbi8vIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21NZXNzYWdlQ2hhbm5lbChjYWxsYmFjaykge1xuLy8gICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4vLyAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBjYWxsYmFjaztcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4vLyAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4vLyAgICAgfTtcbi8vIH1cblxuLy8gRm9yIHJlYXNvbnMgZXhwbGFpbmVkIGFib3ZlLCB3ZSBhcmUgYWxzbyB1bmFibGUgdG8gdXNlIGBzZXRJbW1lZGlhdGVgXG4vLyB1bmRlciBhbnkgY2lyY3Vtc3RhbmNlcy5cbi8vIEV2ZW4gaWYgd2Ugd2VyZSwgdGhlcmUgaXMgYW5vdGhlciBidWcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAuXG4vLyBJdCBpcyBub3Qgc3VmZmljaWVudCB0byBhc3NpZ24gYHNldEltbWVkaWF0ZWAgdG8gYHJlcXVlc3RGbHVzaGAgYmVjYXVzZVxuLy8gYHNldEltbWVkaWF0ZWAgbXVzdCBiZSBjYWxsZWQgKmJ5IG5hbWUqIGFuZCB0aGVyZWZvcmUgbXVzdCBiZSB3cmFwcGVkIGluIGFcbi8vIGNsb3N1cmUuXG4vLyBOZXZlciBmb3JnZXQuXG5cbi8vIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21TZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4vLyAgICAgICAgIHNldEltbWVkaWF0ZShjYWxsYmFjayk7XG4vLyAgICAgfTtcbi8vIH1cblxuLy8gU2FmYXJpIDYuMCBoYXMgYSBwcm9ibGVtIHdoZXJlIHRpbWVycyB3aWxsIGdldCBsb3N0IHdoaWxlIHRoZSB1c2VyIGlzXG4vLyBzY3JvbGxpbmcuIFRoaXMgcHJvYmxlbSBkb2VzIG5vdCBpbXBhY3QgQVNBUCBiZWNhdXNlIFNhZmFyaSA2LjAgc3VwcG9ydHNcbi8vIG11dGF0aW9uIG9ic2VydmVycywgc28gdGhhdCBpbXBsZW1lbnRhdGlvbiBpcyB1c2VkIGluc3RlYWQuXG4vLyBIb3dldmVyLCBpZiB3ZSBldmVyIGVsZWN0IHRvIHVzZSB0aW1lcnMgaW4gU2FmYXJpLCB0aGUgcHJldmFsZW50IHdvcmstYXJvdW5kXG4vLyBpcyB0byBhZGQgYSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgdGhhdCBjYWxscyBmb3IgYSBmbHVzaC5cblxuLy8gYHNldFRpbWVvdXRgIGRvZXMgbm90IGNhbGwgdGhlIHBhc3NlZCBjYWxsYmFjayBpZiB0aGUgZGVsYXkgaXMgbGVzcyB0aGFuXG4vLyBhcHByb3hpbWF0ZWx5IDcgaW4gd2ViIHdvcmtlcnMgaW4gRmlyZWZveCA4IHRocm91Z2ggMTgsIGFuZCBzb21ldGltZXMgbm90XG4vLyBldmVuIHRoZW4uXG5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcihjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbiAgICAgICAgLy8gV2UgZGlzcGF0Y2ggYSB0aW1lb3V0IHdpdGggYSBzcGVjaWZpZWQgZGVsYXkgb2YgMCBmb3IgZW5naW5lcyB0aGF0XG4gICAgICAgIC8vIGNhbiByZWxpYWJseSBhY2NvbW1vZGF0ZSB0aGF0IHJlcXVlc3QuIFRoaXMgd2lsbCB1c3VhbGx5IGJlIHNuYXBwZWRcbiAgICAgICAgLy8gdG8gYSA0IG1pbGlzZWNvbmQgZGVsYXksIGJ1dCBvbmNlIHdlJ3JlIGZsdXNoaW5nLCB0aGVyZSdzIG5vIGRlbGF5XG4gICAgICAgIC8vIGJldHdlZW4gZXZlbnRzLlxuICAgICAgICB2YXIgdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoaGFuZGxlVGltZXIsIDApO1xuICAgICAgICAvLyBIb3dldmVyLCBzaW5jZSB0aGlzIHRpbWVyIGdldHMgZnJlcXVlbnRseSBkcm9wcGVkIGluIEZpcmVmb3hcbiAgICAgICAgLy8gd29ya2Vycywgd2UgZW5saXN0IGFuIGludGVydmFsIGhhbmRsZSB0aGF0IHdpbGwgdHJ5IHRvIGZpcmVcbiAgICAgICAgLy8gYW4gZXZlbnQgMjAgdGltZXMgcGVyIHNlY29uZCB1bnRpbCBpdCBzdWNjZWVkcy5cbiAgICAgICAgdmFyIGludGVydmFsSGFuZGxlID0gc2V0SW50ZXJ2YWwoaGFuZGxlVGltZXIsIDUwKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVUaW1lcigpIHtcbiAgICAgICAgICAgIC8vIFdoaWNoZXZlciB0aW1lciBzdWNjZWVkcyB3aWxsIGNhbmNlbCBib3RoIHRpbWVycyBhbmRcbiAgICAgICAgICAgIC8vIGV4ZWN1dGUgdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbEhhbmRsZSk7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gVGhpcyBpcyBmb3IgYGFzYXAuanNgIG9ubHkuXG4vLyBJdHMgbmFtZSB3aWxsIGJlIHBlcmlvZGljYWxseSByYW5kb21pemVkIHRvIGJyZWFrIGFueSBjb2RlIHRoYXQgZGVwZW5kcyBvblxuLy8gaXRzIGV4aXN0ZW5jZS5cbnJhd0FzYXAubWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyID0gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyO1xuXG4vLyBBU0FQIHdhcyBvcmlnaW5hbGx5IGEgbmV4dFRpY2sgc2hpbSBpbmNsdWRlZCBpbiBRLiBUaGlzIHdhcyBmYWN0b3JlZCBvdXRcbi8vIGludG8gdGhpcyBBU0FQIHBhY2thZ2UuIEl0IHdhcyBsYXRlciBhZGFwdGVkIHRvIFJTVlAgd2hpY2ggbWFkZSBmdXJ0aGVyXG4vLyBhbWVuZG1lbnRzLiBUaGVzZSBkZWNpc2lvbnMsIHBhcnRpY3VsYXJseSB0byBtYXJnaW5hbGl6ZSBNZXNzYWdlQ2hhbm5lbCBhbmRcbi8vIHRvIGNhcHR1cmUgdGhlIE11dGF0aW9uT2JzZXJ2ZXIgaW1wbGVtZW50YXRpb24gaW4gYSBjbG9zdXJlLCB3ZXJlIGludGVncmF0ZWRcbi8vIGJhY2sgaW50byBBU0FQIHByb3Blci5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90aWxkZWlvL3JzdnAuanMvYmxvYi9jZGRmNzIzMjU0NmE5Y2Y4NTg1MjRiNzVjZGU2ZjllZGY3MjYyMGE3L2xpYi9yc3ZwL2FzYXAuanNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FzYXAvYnJvd3Nlci1yYXcuanNcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldE5leHRVbmlxdWVJZDtcbnZhciBuZXh0VW5pcXVlSWQgPSAwO1xuXG5mdW5jdGlvbiBnZXROZXh0VW5pcXVlSWQoKSB7XG4gIHJldHVybiBuZXh0VW5pcXVlSWQrKztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvdXRpbHMvZ2V0TmV4dFVuaXF1ZUlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEcmFnU291cmNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEcmFnU291cmNlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnU291cmNlKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcmFnU291cmNlLCBbe1xuICAgIGtleTogXCJjYW5EcmFnXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbkRyYWcoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNEcmFnZ2luZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RyYWdnaW5nKG1vbml0b3IsIGhhbmRsZSkge1xuICAgICAgcmV0dXJuIGhhbmRsZSA9PT0gbW9uaXRvci5nZXRTb3VyY2VJZCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlbmREcmFnXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZERyYWcoKSB7fVxuICB9XSk7XG5cbiAgcmV0dXJuIERyYWdTb3VyY2U7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IERyYWdTb3VyY2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL0RyYWdTb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIERyb3BUYXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERyb3BUYXJnZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3BUYXJnZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERyb3BUYXJnZXQsIFt7XG4gICAga2V5OiBcImNhbkRyb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuRHJvcCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJob3ZlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBob3ZlcigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiZHJvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkcm9wKCkge31cbiAgfV0pO1xuXG4gIHJldHVybiBEcm9wVGFyZ2V0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEcm9wVGFyZ2V0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9Ecm9wVGFyZ2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVCYWNrZW5kO1xuXG52YXIgX25vb3AgPSByZXF1aXJlKCdsb2Rhc2gvbm9vcCcpO1xuXG52YXIgX25vb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbm9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUZXN0QmFja2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGVzdEJhY2tlbmQobWFuYWdlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0QmFja2VuZCk7XG5cbiAgICB0aGlzLmFjdGlvbnMgPSBtYW5hZ2VyLmdldEFjdGlvbnMoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUZXN0QmFja2VuZCwgW3tcbiAgICBrZXk6ICdzZXR1cCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwKCkge1xuICAgICAgdGhpcy5kaWRDYWxsU2V0dXAgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RlYXJkb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGVhcmRvd24oKSB7XG4gICAgICB0aGlzLmRpZENhbGxUZWFyZG93biA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29ubmVjdERyYWdTb3VyY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0RHJhZ1NvdXJjZSgpIHtcbiAgICAgIHJldHVybiBfbm9vcDIuZGVmYXVsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb25uZWN0RHJhZ1ByZXZpZXcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0RHJhZ1ByZXZpZXcoKSB7XG4gICAgICByZXR1cm4gX25vb3AyLmRlZmF1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29ubmVjdERyb3BUYXJnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0RHJvcFRhcmdldCgpIHtcbiAgICAgIHJldHVybiBfbm9vcDIuZGVmYXVsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaW11bGF0ZUJlZ2luRHJhZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNpbXVsYXRlQmVnaW5EcmFnKHNvdXJjZUlkcywgb3B0aW9ucykge1xuICAgICAgdGhpcy5hY3Rpb25zLmJlZ2luRHJhZyhzb3VyY2VJZHMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpbXVsYXRlUHVibGlzaERyYWdTb3VyY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaW11bGF0ZVB1Ymxpc2hEcmFnU291cmNlKCkge1xuICAgICAgdGhpcy5hY3Rpb25zLnB1Ymxpc2hEcmFnU291cmNlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2ltdWxhdGVIb3ZlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNpbXVsYXRlSG92ZXIodGFyZ2V0SWRzLCBvcHRpb25zKSB7XG4gICAgICB0aGlzLmFjdGlvbnMuaG92ZXIodGFyZ2V0SWRzLCBvcHRpb25zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaW11bGF0ZURyb3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaW11bGF0ZURyb3AoKSB7XG4gICAgICB0aGlzLmFjdGlvbnMuZHJvcCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpbXVsYXRlRW5kRHJhZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNpbXVsYXRlRW5kRHJhZygpIHtcbiAgICAgIHRoaXMuYWN0aW9ucy5lbmREcmFnKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRlc3RCYWNrZW5kO1xufSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVCYWNrZW5kKG1hbmFnZXIpIHtcbiAgcmV0dXJuIG5ldyBUZXN0QmFja2VuZChtYW5hZ2VyKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvYmFja2VuZHMvY3JlYXRlVGVzdEJhY2tlbmQuanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY2xhc3MsIF90ZW1wO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfRHJhZ0Ryb3BDb250ZXh0ID0gcmVxdWlyZSgnLi9EcmFnRHJvcENvbnRleHQnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBSZWFjdC1Db21wb25lbnQgYmFzZWQgdmVyc2lvbiBvZiB0aGUgRHJhZ0Ryb3BDb250ZXh0LlxuICogVGhpcyBpcyBhbiBhbHRlcm5hdGl2ZSB0byBkZWNvcmF0aW5nIGFuIGFwcGxpY2F0aW9uIGNvbXBvbmVudCB3aXRoIGFuIEVTNyBkZWNvcmF0b3IuXG4gKi9cbnZhciBEcmFnRHJvcENvbnRleHRQcm92aWRlciA9IChfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEcmFnRHJvcENvbnRleHRQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJhZ0Ryb3BDb250ZXh0UHJvdmlkZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0Ryb3BDb250ZXh0UHJvdmlkZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERyYWdEcm9wQ29udGV4dFByb3ZpZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHJhZ0Ryb3BDb250ZXh0UHJvdmlkZXIpKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5iYWNrZW5kID0gKDAsIF9EcmFnRHJvcENvbnRleHQudW5wYWNrQmFja2VuZEZvckVzNVVzZXJzKShwcm9wcy5iYWNrZW5kKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJhZ0Ryb3BDb250ZXh0UHJvdmlkZXIsIFt7XG4gICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIC8qKlxuICAgICAgICogVGhpcyBwcm9wZXJ0eSBkZXRlcm1pbmVzIHdoaWNoIHdpbmRvdyBnbG9iYWwgdG8gdXNlIGZvciBjcmVhdGluZyB0aGUgRHJhZ0Ryb3BNYW5hZ2VyLlxuICAgICAgICogSWYgYSB3aW5kb3cgaGFzIGJlZW4gaW5qZWN0ZWQgZXhwbGljaXRseSB2aWEgcHJvcHMsIHRoYXQgaXMgdXNlZCBmaXJzdC4gSWYgaXQgaXMgYXZhaWxhYmxlXG4gICAgICAgKiBhcyBhIGNvbnRleHQgdmFsdWUsIHRoZW4gdXNlIHRoYXQsIG90aGVyd2lzZSB1c2UgdGhlIGJyb3dzZXIgZ2xvYmFsLlxuICAgICAgICovXG4gICAgICB2YXIgZ2V0V2luZG93ID0gZnVuY3Rpb24gZ2V0V2luZG93KCkge1xuICAgICAgICBpZiAoX3RoaXMyLnByb3BzICYmIF90aGlzMi5wcm9wcy53aW5kb3cpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnByb3BzLndpbmRvdztcbiAgICAgICAgfSBlbHNlIGlmIChfdGhpczIuY29udGV4dCAmJiBfdGhpczIuY29udGV4dC53aW5kb3cpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmNvbnRleHQud2luZG93O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuICgwLCBfRHJhZ0Ryb3BDb250ZXh0LmNyZWF0ZUNoaWxkQ29udGV4dCkodGhpcy5iYWNrZW5kLCB7IHdpbmRvdzogZ2V0V2luZG93KCkgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEcmFnRHJvcENvbnRleHRQcm92aWRlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCksIF9jbGFzcy5wcm9wVHlwZXMgPSB7XG4gIGJhY2tlbmQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudC5pc1JlcXVpcmVkLFxuICB3aW5kb3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0IH0sIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSB7XG4gIHdpbmRvdzogdW5kZWZpbmVkXG59LCBfY2xhc3MuY2hpbGRDb250ZXh0VHlwZXMgPSBfRHJhZ0Ryb3BDb250ZXh0LkNISUxEX0NPTlRFWFRfVFlQRVMsIF9jbGFzcy5kaXNwbGF5TmFtZSA9ICdEcmFnRHJvcENvbnRleHRQcm92aWRlcicsIF9jbGFzcy5jb250ZXh0VHlwZXMgPSB7XG4gIHdpbmRvdzogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0sIF90ZW1wKTtcbmV4cG9ydHMuZGVmYXVsdCA9IERyYWdEcm9wQ29udGV4dFByb3ZpZGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvRHJhZ0Ryb3BDb250ZXh0UHJvdmlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBEcmFnU291cmNlO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQbGFpbk9iamVjdCk7XG5cbnZhciBfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMgPSByZXF1aXJlKCcuL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzJyk7XG5cbnZhciBfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMpO1xuXG52YXIgX2RlY29yYXRlSGFuZGxlciA9IHJlcXVpcmUoJy4vZGVjb3JhdGVIYW5kbGVyJyk7XG5cbnZhciBfZGVjb3JhdGVIYW5kbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY29yYXRlSGFuZGxlcik7XG5cbnZhciBfcmVnaXN0ZXJTb3VyY2UgPSByZXF1aXJlKCcuL3JlZ2lzdGVyU291cmNlJyk7XG5cbnZhciBfcmVnaXN0ZXJTb3VyY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVnaXN0ZXJTb3VyY2UpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZUZhY3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZVNvdXJjZUZhY3RvcnknKTtcblxudmFyIF9jcmVhdGVTb3VyY2VGYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVNvdXJjZUZhY3RvcnkpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZU1vbml0b3IgPSByZXF1aXJlKCcuL2NyZWF0ZVNvdXJjZU1vbml0b3InKTtcblxudmFyIF9jcmVhdGVTb3VyY2VNb25pdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVNvdXJjZU1vbml0b3IpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZUNvbm5lY3RvciA9IHJlcXVpcmUoJy4vY3JlYXRlU291cmNlQ29ubmVjdG9yJyk7XG5cbnZhciBfY3JlYXRlU291cmNlQ29ubmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVNvdXJjZUNvbm5lY3Rvcik7XG5cbnZhciBfaXNWYWxpZFR5cGUgPSByZXF1aXJlKCcuL3V0aWxzL2lzVmFsaWRUeXBlJyk7XG5cbnZhciBfaXNWYWxpZFR5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNWYWxpZFR5cGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBEcmFnU291cmNlKHR5cGUsIHNwZWMsIGNvbGxlY3QpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXG4gIF9jaGVja0RlY29yYXRvckFyZ3VtZW50czIuZGVmYXVsdC5hcHBseSh1bmRlZmluZWQsIFsnRHJhZ1NvdXJjZScsICd0eXBlLCBzcGVjLCBjb2xsZWN0Wywgb3B0aW9uc10nXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICB2YXIgZ2V0VHlwZSA9IHR5cGU7XG4gIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSgoMCwgX2lzVmFsaWRUeXBlMi5kZWZhdWx0KSh0eXBlKSwgJ0V4cGVjdGVkIFwidHlwZVwiIHByb3ZpZGVkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBEcmFnU291cmNlIHRvIGJlICcgKyAnYSBzdHJpbmcsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nIGdpdmVuIHRoZSBjdXJyZW50IHByb3BzLiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIHR5cGUpO1xuICAgIGdldFR5cGUgPSBmdW5jdGlvbiBnZXRUeXBlKCkge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfTtcbiAgfVxuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoKDAsIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KShzcGVjKSwgJ0V4cGVjdGVkIFwic3BlY1wiIHByb3ZpZGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gRHJhZ1NvdXJjZSB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBzcGVjKTtcbiAgdmFyIGNyZWF0ZVNvdXJjZSA9ICgwLCBfY3JlYXRlU291cmNlRmFjdG9yeTIuZGVmYXVsdCkoc3BlYyk7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0eXBlb2YgY29sbGVjdCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIFwiY29sbGVjdFwiIHByb3ZpZGVkIGFzIHRoZSB0aGlyZCBhcmd1bWVudCB0byBEcmFnU291cmNlIHRvIGJlICcgKyAnYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwbGFpbiBvYmplY3Qgb2YgcHJvcHMgdG8gaW5qZWN0LiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGNvbGxlY3QpO1xuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoKDAsIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KShvcHRpb25zKSwgJ0V4cGVjdGVkIFwib3B0aW9uc1wiIHByb3ZpZGVkIGFzIHRoZSBmb3VydGggYXJndW1lbnQgdG8gRHJhZ1NvdXJjZSB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0IHdoZW4gc3BlY2lmaWVkLiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGNvbGxlY3QpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0ZVNvdXJjZShEZWNvcmF0ZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gKDAsIF9kZWNvcmF0ZUhhbmRsZXIyLmRlZmF1bHQpKHtcbiAgICAgIGNvbm5lY3RCYWNrZW5kOiBmdW5jdGlvbiBjb25uZWN0QmFja2VuZChiYWNrZW5kLCBzb3VyY2VJZCkge1xuICAgICAgICByZXR1cm4gYmFja2VuZC5jb25uZWN0RHJhZ1NvdXJjZShzb3VyY2VJZCk7XG4gICAgICB9LFxuICAgICAgY29udGFpbmVyRGlzcGxheU5hbWU6ICdEcmFnU291cmNlJyxcbiAgICAgIGNyZWF0ZUhhbmRsZXI6IGNyZWF0ZVNvdXJjZSxcbiAgICAgIHJlZ2lzdGVySGFuZGxlcjogX3JlZ2lzdGVyU291cmNlMi5kZWZhdWx0LFxuICAgICAgY3JlYXRlTW9uaXRvcjogX2NyZWF0ZVNvdXJjZU1vbml0b3IyLmRlZmF1bHQsXG4gICAgICBjcmVhdGVDb25uZWN0b3I6IF9jcmVhdGVTb3VyY2VDb25uZWN0b3IyLmRlZmF1bHQsXG4gICAgICBEZWNvcmF0ZWRDb21wb25lbnQ6IERlY29yYXRlZENvbXBvbmVudCxcbiAgICAgIGdldFR5cGU6IGdldFR5cGUsXG4gICAgICBjb2xsZWN0OiBjb2xsZWN0LFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0pO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvRHJhZ1NvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzRGlzcG9zYWJsZTIgPSByZXF1aXJlKCcuL2lzRGlzcG9zYWJsZScpO1xuXG52YXIgX2lzRGlzcG9zYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaXNEaXNwb3NhYmxlMik7XG5cbmV4cG9ydHMuaXNEaXNwb3NhYmxlID0gX2lzRGlzcG9zYWJsZTNbJ2RlZmF1bHQnXTtcblxudmFyIF9EaXNwb3NhYmxlMiA9IHJlcXVpcmUoJy4vRGlzcG9zYWJsZScpO1xuXG52YXIgX0Rpc3Bvc2FibGUzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX0Rpc3Bvc2FibGUyKTtcblxuZXhwb3J0cy5EaXNwb3NhYmxlID0gX0Rpc3Bvc2FibGUzWydkZWZhdWx0J107XG5cbnZhciBfQ29tcG9zaXRlRGlzcG9zYWJsZTIgPSByZXF1aXJlKCcuL0NvbXBvc2l0ZURpc3Bvc2FibGUnKTtcblxudmFyIF9Db21wb3NpdGVEaXNwb3NhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9Db21wb3NpdGVEaXNwb3NhYmxlMik7XG5cbmV4cG9ydHMuQ29tcG9zaXRlRGlzcG9zYWJsZSA9IF9Db21wb3NpdGVEaXNwb3NhYmxlM1snZGVmYXVsdCddO1xuXG52YXIgX1NlcmlhbERpc3Bvc2FibGUyID0gcmVxdWlyZSgnLi9TZXJpYWxEaXNwb3NhYmxlJyk7XG5cbnZhciBfU2VyaWFsRGlzcG9zYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfU2VyaWFsRGlzcG9zYWJsZTIpO1xuXG5leHBvcnRzLlNlcmlhbERpc3Bvc2FibGUgPSBfU2VyaWFsRGlzcG9zYWJsZTNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kaXNwb3NhYmxlcy9tb2R1bGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbi8qKlxuICogVGhlIGJhc2ljIGRpc3Bvc2FibGUuXG4gKi9cblxudmFyIERpc3Bvc2FibGUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEaXNwb3NhYmxlKGFjdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEaXNwb3NhYmxlKTtcblxuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uIHx8IG5vb3A7XG4gIH1cblxuICBEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgdGhpcy5hY3Rpb24uY2FsbChudWxsKTtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhEaXNwb3NhYmxlLCBudWxsLCBbe1xuICAgIGtleTogXCJlbXB0eVwiLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IHsgZGlzcG9zZTogbm9vcCB9XG4gIH1dKTtcblxuICByZXR1cm4gRGlzcG9zYWJsZTtcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRGlzcG9zYWJsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGlzcG9zYWJsZXMvbW9kdWxlcy9EaXNwb3NhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH07XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNEaXNwb3NhYmxlID0gcmVxdWlyZSgnLi9pc0Rpc3Bvc2FibGUnKTtcblxudmFyIF9pc0Rpc3Bvc2FibGUyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2lzRGlzcG9zYWJsZSk7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGdyb3VwIG9mIGRpc3Bvc2FibGUgcmVzb3VyY2VzIHRoYXQgYXJlIGRpc3Bvc2VkIHRvZ2V0aGVyLlxuICovXG5cbnZhciBDb21wb3NpdGVEaXNwb3NhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29tcG9zaXRlRGlzcG9zYWJsZSgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZGlzcG9zYWJsZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGRpc3Bvc2FibGVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb3NpdGVEaXNwb3NhYmxlKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRpc3Bvc2FibGVzWzBdKSAmJiBkaXNwb3NhYmxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGRpc3Bvc2FibGVzID0gZGlzcG9zYWJsZXNbMF07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXNwb3NhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFfaXNEaXNwb3NhYmxlMlsnZGVmYXVsdCddKGRpc3Bvc2FibGVzW2ldKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGEgZGlzcG9zYWJsZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZGlzcG9zYWJsZXMgPSBkaXNwb3NhYmxlcztcbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZGlzcG9zYWJsZSB0byB0aGUgQ29tcG9zaXRlRGlzcG9zYWJsZSBvciBkaXNwb3NlcyB0aGUgZGlzcG9zYWJsZSBpZiB0aGUgQ29tcG9zaXRlRGlzcG9zYWJsZSBpcyBkaXNwb3NlZC5cbiAgICogQHBhcmFtIHtEaXNwb3NhYmxlfSBpdGVtIERpc3Bvc2FibGUgdG8gYWRkLlxuICAgKi9cblxuICBDb21wb3NpdGVEaXNwb3NhYmxlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQoaXRlbSkge1xuICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIGl0ZW0uZGlzcG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3Bvc2FibGVzLnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuZCBkaXNwb3NlcyB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhIGRpc3Bvc2FibGUgZnJvbSB0aGUgQ29tcG9zaXRlRGlzcG9zYWJsZS5cbiAgICogQHBhcmFtIHtEaXNwb3NhYmxlfSBpdGVtIERpc3Bvc2FibGUgdG8gcmVtb3ZlLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBmb3VuZDsgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cblxuICBDb21wb3NpdGVEaXNwb3NhYmxlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoaXRlbSkge1xuICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLmRpc3Bvc2FibGVzLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuZGlzcG9zYWJsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpdGVtLmRpc3Bvc2UoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogRGlzcG9zZXMgYWxsIGRpc3Bvc2FibGVzIGluIHRoZSBncm91cCBhbmQgcmVtb3ZlcyB0aGVtIGZyb20gdGhlIGdyb3VwLlxuICAgKi9cblxuICBDb21wb3NpdGVEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxlbiA9IHRoaXMuZGlzcG9zYWJsZXMubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50RGlzcG9zYWJsZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjdXJyZW50RGlzcG9zYWJsZXNbaV0gPSB0aGlzLmRpc3Bvc2FibGVzW2ldO1xuICAgIH1cblxuICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgdGhpcy5kaXNwb3NhYmxlcyA9IFtdO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGN1cnJlbnREaXNwb3NhYmxlc1tpXS5kaXNwb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDb21wb3NpdGVEaXNwb3NhYmxlO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ29tcG9zaXRlRGlzcG9zYWJsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Rpc3Bvc2FibGVzL21vZHVsZXMvQ29tcG9zaXRlRGlzcG9zYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9O1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzRGlzcG9zYWJsZSA9IHJlcXVpcmUoJy4vaXNEaXNwb3NhYmxlJyk7XG5cbnZhciBfaXNEaXNwb3NhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pc0Rpc3Bvc2FibGUpO1xuXG52YXIgU2VyaWFsRGlzcG9zYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNlcmlhbERpc3Bvc2FibGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcmlhbERpc3Bvc2FibGUpO1xuXG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB1bmRlcmx5aW5nIGRpc3Bvc2FibGUuXG4gICAqIEByZXR1cm4gVGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZS5cbiAgICovXG5cbiAgU2VyaWFsRGlzcG9zYWJsZS5wcm90b3R5cGUuZ2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uIGdldERpc3Bvc2FibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICAvKipcbiAgICogU2V0cyB0aGUgdW5kZXJseWluZyBkaXNwb3NhYmxlLlxuICAgKiBAcGFyYW0ge0Rpc3Bvc2FibGV9IHZhbHVlIFRoZSBuZXcgdW5kZXJseWluZyBkaXNwb3NhYmxlLlxuICAgKi9cblxuICBTZXJpYWxEaXNwb3NhYmxlLnByb3RvdHlwZS5zZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gc2V0RGlzcG9zYWJsZSgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMF07XG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAhX2lzRGlzcG9zYWJsZTJbJ2RlZmF1bHQnXSh2YWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZWl0aGVyIGFuIGVtcHR5IHZhbHVlIG9yIGEgdmFsaWQgZGlzcG9zYWJsZScpO1xuICAgIH1cblxuICAgIHZhciBpc0Rpc3Bvc2VkID0gdGhpcy5pc0Rpc3Bvc2VkO1xuICAgIHZhciBwcmV2aW91cyA9IHVuZGVmaW5lZDtcblxuICAgIGlmICghaXNEaXNwb3NlZCkge1xuICAgICAgcHJldmlvdXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgIHByZXZpb3VzLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwb3NlZCAmJiB2YWx1ZSkge1xuICAgICAgdmFsdWUuZGlzcG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGlzcG9zZXMgdGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZSBhcyB3ZWxsIGFzIGFsbCBmdXR1cmUgcmVwbGFjZW1lbnRzLlxuICAgKi9cblxuICBTZXJpYWxEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICB2YXIgcHJldmlvdXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgcHJldmlvdXMuZGlzcG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU2VyaWFsRGlzcG9zYWJsZTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNlcmlhbERpc3Bvc2FibGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kaXNwb3NhYmxlcy9tb2R1bGVzL1NlcmlhbERpc3Bvc2FibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJlZ2lzdGVyU291cmNlO1xuZnVuY3Rpb24gcmVnaXN0ZXJTb3VyY2UodHlwZSwgc291cmNlLCBtYW5hZ2VyKSB7XG4gIHZhciByZWdpc3RyeSA9IG1hbmFnZXIuZ2V0UmVnaXN0cnkoKTtcbiAgdmFyIHNvdXJjZUlkID0gcmVnaXN0cnkuYWRkU291cmNlKHR5cGUsIHNvdXJjZSk7XG5cbiAgZnVuY3Rpb24gdW5yZWdpc3RlclNvdXJjZSgpIHtcbiAgICByZWdpc3RyeS5yZW1vdmVTb3VyY2Uoc291cmNlSWQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVySWQ6IHNvdXJjZUlkLFxuICAgIHVucmVnaXN0ZXI6IHVucmVnaXN0ZXJTb3VyY2VcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3JlZ2lzdGVyU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVTb3VyY2VGYWN0b3J5O1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQbGFpbk9iamVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBTExPV0VEX1NQRUNfTUVUSE9EUyA9IFsnY2FuRHJhZycsICdiZWdpbkRyYWcnLCAnaXNEcmFnZ2luZycsICdlbmREcmFnJ107XG52YXIgUkVRVUlSRURfU1BFQ19NRVRIT0RTID0gWydiZWdpbkRyYWcnXTtcblxuZnVuY3Rpb24gY3JlYXRlU291cmNlRmFjdG9yeShzcGVjKSB7XG4gIE9iamVjdC5rZXlzKHNwZWMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShBTExPV0VEX1NQRUNfTUVUSE9EUy5pbmRleE9mKGtleSkgPiAtMSwgJ0V4cGVjdGVkIHRoZSBkcmFnIHNvdXJjZSBzcGVjaWZpY2F0aW9uIHRvIG9ubHkgaGF2ZSAnICsgJ3NvbWUgb2YgdGhlIGZvbGxvd2luZyBrZXlzOiAlcy4gJyArICdJbnN0ZWFkIHJlY2VpdmVkIGEgc3BlY2lmaWNhdGlvbiB3aXRoIGFuIHVuZXhwZWN0ZWQgXCIlc1wiIGtleS4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBBTExPV0VEX1NQRUNfTUVUSE9EUy5qb2luKCcsICcpLCBrZXkpO1xuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0eXBlb2Ygc3BlY1trZXldID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgJXMgaW4gdGhlIGRyYWcgc291cmNlIHNwZWNpZmljYXRpb24gdG8gYmUgYSBmdW5jdGlvbi4gJyArICdJbnN0ZWFkIHJlY2VpdmVkIGEgc3BlY2lmaWNhdGlvbiB3aXRoICVzOiAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBrZXksIGtleSwgc3BlY1trZXldKTtcbiAgfSk7XG4gIFJFUVVJUkVEX1NQRUNfTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIHNwZWNba2V5XSA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkICVzIGluIHRoZSBkcmFnIHNvdXJjZSBzcGVjaWZpY2F0aW9uIHRvIGJlIGEgZnVuY3Rpb24uICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCAlczogJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywga2V5LCBrZXksIHNwZWNba2V5XSk7XG4gIH0pO1xuXG4gIHZhciBTb3VyY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU291cmNlKG1vbml0b3IpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb3VyY2UpO1xuXG4gICAgICB0aGlzLm1vbml0b3IgPSBtb25pdG9yO1xuICAgICAgdGhpcy5wcm9wcyA9IG51bGw7XG4gICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFNvdXJjZSwgW3tcbiAgICAgIGtleTogJ3JlY2VpdmVQcm9wcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZWNlaXZlQ29tcG9uZW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWNlaXZlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjYW5EcmFnJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5EcmFnKCkge1xuICAgICAgICBpZiAoIXNwZWMuY2FuRHJhZykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwZWMuY2FuRHJhZyh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2lzRHJhZ2dpbmcnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRHJhZ2dpbmcoZ2xvYmFsTW9uaXRvciwgc291cmNlSWQpIHtcbiAgICAgICAgaWYgKCFzcGVjLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICByZXR1cm4gc291cmNlSWQgPT09IGdsb2JhbE1vbml0b3IuZ2V0U291cmNlSWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGVjLmlzRHJhZ2dpbmcodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdiZWdpbkRyYWcnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJlZ2luRHJhZygpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBzcGVjLmJlZ2luRHJhZyh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IsIHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoKDAsIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KShpdGVtKSwgJ2JlZ2luRHJhZygpIG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgZHJhZ2dlZCBpdGVtLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZW5kRHJhZycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZW5kRHJhZygpIHtcbiAgICAgICAgaWYgKCFzcGVjLmVuZERyYWcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzcGVjLmVuZERyYWcodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yLCB0aGlzLmNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNvdXJjZTtcbiAgfSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVTb3VyY2UobW9uaXRvcikge1xuICAgIHJldHVybiBuZXcgU291cmNlKG1vbml0b3IpO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlRmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlU291cmNlTW9uaXRvcjtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGlzQ2FsbGluZ0NhbkRyYWcgPSBmYWxzZTtcbnZhciBpc0NhbGxpbmdJc0RyYWdnaW5nID0gZmFsc2U7XG5cbnZhciBTb3VyY2VNb25pdG9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTb3VyY2VNb25pdG9yKG1hbmFnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU291cmNlTW9uaXRvcik7XG5cbiAgICB0aGlzLmludGVybmFsTW9uaXRvciA9IG1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNvdXJjZU1vbml0b3IsIFt7XG4gICAga2V5OiAncmVjZWl2ZUhhbmRsZXJJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlY2VpdmVIYW5kbGVySWQoc291cmNlSWQpIHtcbiAgICAgIHRoaXMuc291cmNlSWQgPSBzb3VyY2VJZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYW5EcmFnJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuRHJhZygpIHtcbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSghaXNDYWxsaW5nQ2FuRHJhZywgJ1lvdSBtYXkgbm90IGNhbGwgbW9uaXRvci5jYW5EcmFnKCkgaW5zaWRlIHlvdXIgY2FuRHJhZygpIGltcGxlbWVudGF0aW9uLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UtbW9uaXRvci5odG1sJyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlzQ2FsbGluZ0NhbkRyYWcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuY2FuRHJhZ1NvdXJjZSh0aGlzLnNvdXJjZUlkKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlzQ2FsbGluZ0NhbkRyYWcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0RyYWdnaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSghaXNDYWxsaW5nSXNEcmFnZ2luZywgJ1lvdSBtYXkgbm90IGNhbGwgbW9uaXRvci5pc0RyYWdnaW5nKCkgaW5zaWRlIHlvdXIgaXNEcmFnZ2luZygpIGltcGxlbWVudGF0aW9uLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UtbW9uaXRvci5odG1sJyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlzQ2FsbGluZ0lzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuaXNEcmFnZ2luZ1NvdXJjZSh0aGlzLnNvdXJjZUlkKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlzQ2FsbGluZ0lzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJdGVtVHlwZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEl0ZW1UeXBlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEl0ZW1UeXBlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SXRlbScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEl0ZW0oKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SXRlbSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldERyb3BSZXN1bHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREcm9wUmVzdWx0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldERyb3BSZXN1bHQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaWREcm9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlkRHJvcCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5kaWREcm9wKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SW5pdGlhbENsaWVudE9mZnNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluaXRpYWxDbGllbnRPZmZzZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SW5pdGlhbENsaWVudE9mZnNldCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTb3VyY2VDbGllbnRPZmZzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb3VyY2VDbGllbnRPZmZzZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2xpZW50T2Zmc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2xpZW50T2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldENsaWVudE9mZnNldCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU291cmNlTW9uaXRvcjtcbn0oKTtcblxuZnVuY3Rpb24gY3JlYXRlU291cmNlTW9uaXRvcihtYW5hZ2VyKSB7XG4gIHJldHVybiBuZXcgU291cmNlTW9uaXRvcihtYW5hZ2VyKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVNvdXJjZU1vbml0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVTb3VyY2VDb25uZWN0b3I7XG5cbnZhciBfd3JhcENvbm5lY3Rvckhvb2tzID0gcmVxdWlyZSgnLi93cmFwQ29ubmVjdG9ySG9va3MnKTtcblxudmFyIF93cmFwQ29ubmVjdG9ySG9va3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd3JhcENvbm5lY3Rvckhvb2tzKTtcblxudmFyIF9hcmVPcHRpb25zRXF1YWwgPSByZXF1aXJlKCcuL2FyZU9wdGlvbnNFcXVhbCcpO1xuXG52YXIgX2FyZU9wdGlvbnNFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcmVPcHRpb25zRXF1YWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjcmVhdGVTb3VyY2VDb25uZWN0b3IoYmFja2VuZCkge1xuICB2YXIgY3VycmVudEhhbmRsZXJJZCA9IHZvaWQgMDtcblxuICB2YXIgY3VycmVudERyYWdTb3VyY2VOb2RlID0gdm9pZCAwO1xuICB2YXIgY3VycmVudERyYWdTb3VyY2VPcHRpb25zID0gdm9pZCAwO1xuICB2YXIgZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlID0gdm9pZCAwO1xuXG4gIHZhciBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlID0gdm9pZCAwO1xuICB2YXIgY3VycmVudERyYWdQcmV2aWV3T3B0aW9ucyA9IHZvaWQgMDtcbiAgdmFyIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcgPSB2b2lkIDA7XG5cbiAgZnVuY3Rpb24gcmVjb25uZWN0RHJhZ1NvdXJjZSgpIHtcbiAgICBpZiAoZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlKSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdTb3VyY2UoKTtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRIYW5kbGVySWQgJiYgY3VycmVudERyYWdTb3VyY2VOb2RlKSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdTb3VyY2UgPSBiYWNrZW5kLmNvbm5lY3REcmFnU291cmNlKGN1cnJlbnRIYW5kbGVySWQsIGN1cnJlbnREcmFnU291cmNlTm9kZSwgY3VycmVudERyYWdTb3VyY2VPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNvbm5lY3REcmFnUHJldmlldygpIHtcbiAgICBpZiAoZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldykge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldygpO1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRIYW5kbGVySWQgJiYgY3VycmVudERyYWdQcmV2aWV3Tm9kZSkge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldyA9IGJhY2tlbmQuY29ubmVjdERyYWdQcmV2aWV3KGN1cnJlbnRIYW5kbGVySWQsIGN1cnJlbnREcmFnUHJldmlld05vZGUsIGN1cnJlbnREcmFnUHJldmlld09wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVIYW5kbGVySWQoaGFuZGxlcklkKSB7XG4gICAgaWYgKGhhbmRsZXJJZCA9PT0gY3VycmVudEhhbmRsZXJJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN1cnJlbnRIYW5kbGVySWQgPSBoYW5kbGVySWQ7XG4gICAgcmVjb25uZWN0RHJhZ1NvdXJjZSgpO1xuICAgIHJlY29ubmVjdERyYWdQcmV2aWV3KCk7XG4gIH1cblxuICB2YXIgaG9va3MgPSAoMCwgX3dyYXBDb25uZWN0b3JIb29rczIuZGVmYXVsdCkoe1xuICAgIGRyYWdTb3VyY2U6IGZ1bmN0aW9uIGNvbm5lY3REcmFnU291cmNlKG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChub2RlID09PSBjdXJyZW50RHJhZ1NvdXJjZU5vZGUgJiYgKDAsIF9hcmVPcHRpb25zRXF1YWwyLmRlZmF1bHQpKG9wdGlvbnMsIGN1cnJlbnREcmFnU291cmNlT3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50RHJhZ1NvdXJjZU5vZGUgPSBub2RlO1xuICAgICAgY3VycmVudERyYWdTb3VyY2VPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgcmVjb25uZWN0RHJhZ1NvdXJjZSgpO1xuICAgIH0sXG5cbiAgICBkcmFnUHJldmlldzogZnVuY3Rpb24gY29ubmVjdERyYWdQcmV2aWV3KG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChub2RlID09PSBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlICYmICgwLCBfYXJlT3B0aW9uc0VxdWFsMi5kZWZhdWx0KShvcHRpb25zLCBjdXJyZW50RHJhZ1ByZXZpZXdPcHRpb25zKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnREcmFnUHJldmlld05vZGUgPSBub2RlO1xuICAgICAgY3VycmVudERyYWdQcmV2aWV3T3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIHJlY29ubmVjdERyYWdQcmV2aWV3KCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHJlY2VpdmVIYW5kbGVySWQ6IHJlY2VpdmVIYW5kbGVySWQsXG4gICAgaG9va3M6IGhvb2tzXG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9jcmVhdGVTb3VyY2VDb25uZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjbG9uZVdpdGhSZWY7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjbG9uZVdpdGhSZWYoZWxlbWVudCwgbmV3UmVmKSB7XG4gIHZhciBwcmV2aW91c1JlZiA9IGVsZW1lbnQucmVmO1xuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodHlwZW9mIHByZXZpb3VzUmVmICE9PSAnc3RyaW5nJywgJ0Nhbm5vdCBjb25uZWN0IFJlYWN0IERuRCB0byBhbiBlbGVtZW50IHdpdGggYW4gZXhpc3Rpbmcgc3RyaW5nIHJlZi4gJyArICdQbGVhc2UgY29udmVydCBpdCB0byB1c2UgYSBjYWxsYmFjayByZWYgaW5zdGVhZCwgb3Igd3JhcCBpdCBpbnRvIGEgPHNwYW4+IG9yIDxkaXY+LiAnICsgJ1JlYWQgbW9yZTogaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9tb3JlLWFib3V0LXJlZnMuaHRtbCN0aGUtcmVmLWNhbGxiYWNrLWF0dHJpYnV0ZScpO1xuXG4gIGlmICghcHJldmlvdXNSZWYpIHtcbiAgICAvLyBXaGVuIHRoZXJlIGlzIG5vIHJlZiBvbiB0aGUgZWxlbWVudCwgdXNlIHRoZSBuZXcgcmVmIGRpcmVjdGx5XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShlbGVtZW50LCB7XG4gICAgICByZWY6IG5ld1JlZlxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShlbGVtZW50LCB7XG4gICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgbmV3UmVmKG5vZGUpO1xuXG4gICAgICBpZiAocHJldmlvdXNSZWYpIHtcbiAgICAgICAgcHJldmlvdXNSZWYobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3V0aWxzL2Nsb25lV2l0aFJlZi5qc1xuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IERyb3BUYXJnZXQ7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF9jaGVja0RlY29yYXRvckFyZ3VtZW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMnKTtcblxudmFyIF9jaGVja0RlY29yYXRvckFyZ3VtZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja0RlY29yYXRvckFyZ3VtZW50cyk7XG5cbnZhciBfZGVjb3JhdGVIYW5kbGVyID0gcmVxdWlyZSgnLi9kZWNvcmF0ZUhhbmRsZXInKTtcblxudmFyIF9kZWNvcmF0ZUhhbmRsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVjb3JhdGVIYW5kbGVyKTtcblxudmFyIF9yZWdpc3RlclRhcmdldCA9IHJlcXVpcmUoJy4vcmVnaXN0ZXJUYXJnZXQnKTtcblxudmFyIF9yZWdpc3RlclRhcmdldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWdpc3RlclRhcmdldCk7XG5cbnZhciBfY3JlYXRlVGFyZ2V0RmFjdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlVGFyZ2V0RmFjdG9yeScpO1xuXG52YXIgX2NyZWF0ZVRhcmdldEZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVGFyZ2V0RmFjdG9yeSk7XG5cbnZhciBfY3JlYXRlVGFyZ2V0TW9uaXRvciA9IHJlcXVpcmUoJy4vY3JlYXRlVGFyZ2V0TW9uaXRvcicpO1xuXG52YXIgX2NyZWF0ZVRhcmdldE1vbml0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVGFyZ2V0TW9uaXRvcik7XG5cbnZhciBfY3JlYXRlVGFyZ2V0Q29ubmVjdG9yID0gcmVxdWlyZSgnLi9jcmVhdGVUYXJnZXRDb25uZWN0b3InKTtcblxudmFyIF9jcmVhdGVUYXJnZXRDb25uZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVGFyZ2V0Q29ubmVjdG9yKTtcblxudmFyIF9pc1ZhbGlkVHlwZSA9IHJlcXVpcmUoJy4vdXRpbHMvaXNWYWxpZFR5cGUnKTtcblxudmFyIF9pc1ZhbGlkVHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ZhbGlkVHlwZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIERyb3BUYXJnZXQodHlwZSwgc3BlYywgY29sbGVjdCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG5cbiAgX2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMi5kZWZhdWx0LmFwcGx5KHVuZGVmaW5lZCwgWydEcm9wVGFyZ2V0JywgJ3R5cGUsIHNwZWMsIGNvbGxlY3RbLCBvcHRpb25zXSddLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gIHZhciBnZXRUeXBlID0gdHlwZTtcbiAgaWYgKHR5cGVvZiB0eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCgwLCBfaXNWYWxpZFR5cGUyLmRlZmF1bHQpKHR5cGUsIHRydWUpLCAnRXhwZWN0ZWQgXCJ0eXBlXCIgcHJvdmlkZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIERyb3BUYXJnZXQgdG8gYmUgJyArICdhIHN0cmluZywgYW4gYXJyYXkgb2Ygc3RyaW5ncywgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyIGdpdmVuICcgKyAndGhlIGN1cnJlbnQgcHJvcHMuIEluc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIHR5cGUpO1xuICAgIGdldFR5cGUgPSBmdW5jdGlvbiBnZXRUeXBlKCkge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfTtcbiAgfVxuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoKDAsIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KShzcGVjKSwgJ0V4cGVjdGVkIFwic3BlY1wiIHByb3ZpZGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gRHJvcFRhcmdldCB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBzcGVjKTtcbiAgdmFyIGNyZWF0ZVRhcmdldCA9ICgwLCBfY3JlYXRlVGFyZ2V0RmFjdG9yeTIuZGVmYXVsdCkoc3BlYyk7XG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0eXBlb2YgY29sbGVjdCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIFwiY29sbGVjdFwiIHByb3ZpZGVkIGFzIHRoZSB0aGlyZCBhcmd1bWVudCB0byBEcm9wVGFyZ2V0IHRvIGJlICcgKyAnYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwbGFpbiBvYmplY3Qgb2YgcHJvcHMgdG8gaW5qZWN0LiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIGNvbGxlY3QpO1xuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoKDAsIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KShvcHRpb25zKSwgJ0V4cGVjdGVkIFwib3B0aW9uc1wiIHByb3ZpZGVkIGFzIHRoZSBmb3VydGggYXJndW1lbnQgdG8gRHJvcFRhcmdldCB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0IHdoZW4gc3BlY2lmaWVkLiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIGNvbGxlY3QpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0ZVRhcmdldChEZWNvcmF0ZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gKDAsIF9kZWNvcmF0ZUhhbmRsZXIyLmRlZmF1bHQpKHtcbiAgICAgIGNvbm5lY3RCYWNrZW5kOiBmdW5jdGlvbiBjb25uZWN0QmFja2VuZChiYWNrZW5kLCB0YXJnZXRJZCkge1xuICAgICAgICByZXR1cm4gYmFja2VuZC5jb25uZWN0RHJvcFRhcmdldCh0YXJnZXRJZCk7XG4gICAgICB9LFxuICAgICAgY29udGFpbmVyRGlzcGxheU5hbWU6ICdEcm9wVGFyZ2V0JyxcbiAgICAgIGNyZWF0ZUhhbmRsZXI6IGNyZWF0ZVRhcmdldCxcbiAgICAgIHJlZ2lzdGVySGFuZGxlcjogX3JlZ2lzdGVyVGFyZ2V0Mi5kZWZhdWx0LFxuICAgICAgY3JlYXRlTW9uaXRvcjogX2NyZWF0ZVRhcmdldE1vbml0b3IyLmRlZmF1bHQsXG4gICAgICBjcmVhdGVDb25uZWN0b3I6IF9jcmVhdGVUYXJnZXRDb25uZWN0b3IyLmRlZmF1bHQsXG4gICAgICBEZWNvcmF0ZWRDb21wb25lbnQ6IERlY29yYXRlZENvbXBvbmVudCxcbiAgICAgIGdldFR5cGU6IGdldFR5cGUsXG4gICAgICBjb2xsZWN0OiBjb2xsZWN0LFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0pO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvRHJvcFRhcmdldC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVnaXN0ZXJUYXJnZXQ7XG5mdW5jdGlvbiByZWdpc3RlclRhcmdldCh0eXBlLCB0YXJnZXQsIG1hbmFnZXIpIHtcbiAgdmFyIHJlZ2lzdHJ5ID0gbWFuYWdlci5nZXRSZWdpc3RyeSgpO1xuICB2YXIgdGFyZ2V0SWQgPSByZWdpc3RyeS5hZGRUYXJnZXQodHlwZSwgdGFyZ2V0KTtcblxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyVGFyZ2V0KCkge1xuICAgIHJlZ2lzdHJ5LnJlbW92ZVRhcmdldCh0YXJnZXRJZCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhbmRsZXJJZDogdGFyZ2V0SWQsXG4gICAgdW5yZWdpc3RlcjogdW5yZWdpc3RlclRhcmdldFxuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvcmVnaXN0ZXJUYXJnZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVRhcmdldEZhY3Rvcnk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFMTE9XRURfU1BFQ19NRVRIT0RTID0gWydjYW5Ecm9wJywgJ2hvdmVyJywgJ2Ryb3AnXTtcblxuZnVuY3Rpb24gY3JlYXRlVGFyZ2V0RmFjdG9yeShzcGVjKSB7XG4gIE9iamVjdC5rZXlzKHNwZWMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShBTExPV0VEX1NQRUNfTUVUSE9EUy5pbmRleE9mKGtleSkgPiAtMSwgJ0V4cGVjdGVkIHRoZSBkcm9wIHRhcmdldCBzcGVjaWZpY2F0aW9uIHRvIG9ubHkgaGF2ZSAnICsgJ3NvbWUgb2YgdGhlIGZvbGxvd2luZyBrZXlzOiAlcy4gJyArICdJbnN0ZWFkIHJlY2VpdmVkIGEgc3BlY2lmaWNhdGlvbiB3aXRoIGFuIHVuZXhwZWN0ZWQgXCIlc1wiIGtleS4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBBTExPV0VEX1NQRUNfTUVUSE9EUy5qb2luKCcsICcpLCBrZXkpO1xuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0eXBlb2Ygc3BlY1trZXldID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgJXMgaW4gdGhlIGRyb3AgdGFyZ2V0IHNwZWNpZmljYXRpb24gdG8gYmUgYSBmdW5jdGlvbi4gJyArICdJbnN0ZWFkIHJlY2VpdmVkIGEgc3BlY2lmaWNhdGlvbiB3aXRoICVzOiAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBrZXksIGtleSwgc3BlY1trZXldKTtcbiAgfSk7XG5cbiAgdmFyIFRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUYXJnZXQobW9uaXRvcikge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhcmdldCk7XG5cbiAgICAgIHRoaXMubW9uaXRvciA9IG1vbml0b3I7XG4gICAgICB0aGlzLnByb3BzID0gbnVsbDtcbiAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGFyZ2V0LCBbe1xuICAgICAga2V5OiAncmVjZWl2ZVByb3BzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlY2VpdmVNb25pdG9yJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWNlaXZlTW9uaXRvcihtb25pdG9yKSB7XG4gICAgICAgIHRoaXMubW9uaXRvciA9IG1vbml0b3I7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVjZWl2ZUNvbXBvbmVudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVjZWl2ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY2FuRHJvcCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2FuRHJvcCgpIHtcbiAgICAgICAgaWYgKCFzcGVjLmNhbkRyb3ApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGVjLmNhbkRyb3AodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdob3ZlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaG92ZXIoKSB7XG4gICAgICAgIGlmICghc3BlYy5ob3Zlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwZWMuaG92ZXIodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yLCB0aGlzLmNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZHJvcCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZHJvcCgpIHtcbiAgICAgICAgaWYgKCFzcGVjLmRyb3ApIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRyb3BSZXN1bHQgPSBzcGVjLmRyb3AodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yLCB0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHR5cGVvZiBkcm9wUmVzdWx0ID09PSAndW5kZWZpbmVkJyB8fCAoMCwgX2lzUGxhaW5PYmplY3QyLmRlZmF1bHQpKGRyb3BSZXN1bHQpLCAnZHJvcCgpIG11c3QgZWl0aGVyIHJldHVybiB1bmRlZmluZWQsIG9yIGFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGRyb3AgcmVzdWx0LiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgZHJvcFJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRyb3BSZXN1bHQ7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRhcmdldDtcbiAgfSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVUYXJnZXQobW9uaXRvcikge1xuICAgIHJldHVybiBuZXcgVGFyZ2V0KG1vbml0b3IpO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0RmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlVGFyZ2V0TW9uaXRvcjtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGlzQ2FsbGluZ0NhbkRyb3AgPSBmYWxzZTtcblxudmFyIFRhcmdldE1vbml0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRhcmdldE1vbml0b3IobWFuYWdlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYXJnZXRNb25pdG9yKTtcblxuICAgIHRoaXMuaW50ZXJuYWxNb25pdG9yID0gbWFuYWdlci5nZXRNb25pdG9yKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGFyZ2V0TW9uaXRvciwgW3tcbiAgICBrZXk6ICdyZWNlaXZlSGFuZGxlcklkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVjZWl2ZUhhbmRsZXJJZCh0YXJnZXRJZCkge1xuICAgICAgdGhpcy50YXJnZXRJZCA9IHRhcmdldElkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhbkRyb3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5Ecm9wKCkge1xuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKCFpc0NhbGxpbmdDYW5Ecm9wLCAnWW91IG1heSBub3QgY2FsbCBtb25pdG9yLmNhbkRyb3AoKSBpbnNpZGUgeW91ciBjYW5Ecm9wKCkgaW1wbGVtZW50YXRpb24uICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC1tb25pdG9yLmh0bWwnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgaXNDYWxsaW5nQ2FuRHJvcCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5jYW5Ecm9wT25UYXJnZXQodGhpcy50YXJnZXRJZCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc0NhbGxpbmdDYW5Ecm9wID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNPdmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNPdmVyKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5pc092ZXJUYXJnZXQodGhpcy50YXJnZXRJZCwgb3B0aW9ucyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SXRlbVR5cGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJdGVtVHlwZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJdGVtVHlwZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEl0ZW0nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJdGVtKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEl0ZW0oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREcm9wUmVzdWx0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RHJvcFJlc3VsdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlkRHJvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpZERyb3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZGlkRHJvcCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEluaXRpYWxDbGllbnRPZmZzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEluaXRpYWxDbGllbnRPZmZzZXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U291cmNlQ2xpZW50T2Zmc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldFNvdXJjZUNsaWVudE9mZnNldCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENsaWVudE9mZnNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsaWVudE9mZnNldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRDbGllbnRPZmZzZXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRhcmdldE1vbml0b3I7XG59KCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhcmdldE1vbml0b3IobWFuYWdlcikge1xuICByZXR1cm4gbmV3IFRhcmdldE1vbml0b3IobWFuYWdlcik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9jcmVhdGVUYXJnZXRNb25pdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlVGFyZ2V0Q29ubmVjdG9yO1xuXG52YXIgX3dyYXBDb25uZWN0b3JIb29rcyA9IHJlcXVpcmUoJy4vd3JhcENvbm5lY3Rvckhvb2tzJyk7XG5cbnZhciBfd3JhcENvbm5lY3Rvckhvb2tzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXBDb25uZWN0b3JIb29rcyk7XG5cbnZhciBfYXJlT3B0aW9uc0VxdWFsID0gcmVxdWlyZSgnLi9hcmVPcHRpb25zRXF1YWwnKTtcblxudmFyIF9hcmVPcHRpb25zRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJlT3B0aW9uc0VxdWFsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY3JlYXRlVGFyZ2V0Q29ubmVjdG9yKGJhY2tlbmQpIHtcbiAgdmFyIGN1cnJlbnRIYW5kbGVySWQgPSB2b2lkIDA7XG5cbiAgdmFyIGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSA9IHZvaWQgMDtcbiAgdmFyIGN1cnJlbnREcm9wVGFyZ2V0T3B0aW9ucyA9IHZvaWQgMDtcbiAgdmFyIGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCA9IHZvaWQgMDtcblxuICBmdW5jdGlvbiByZWNvbm5lY3REcm9wVGFyZ2V0KCkge1xuICAgIGlmIChkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCgpO1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcm9wVGFyZ2V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudEhhbmRsZXJJZCAmJiBjdXJyZW50RHJvcFRhcmdldE5vZGUpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCA9IGJhY2tlbmQuY29ubmVjdERyb3BUYXJnZXQoY3VycmVudEhhbmRsZXJJZCwgY3VycmVudERyb3BUYXJnZXROb2RlLCBjdXJyZW50RHJvcFRhcmdldE9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVIYW5kbGVySWQoaGFuZGxlcklkKSB7XG4gICAgaWYgKGhhbmRsZXJJZCA9PT0gY3VycmVudEhhbmRsZXJJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN1cnJlbnRIYW5kbGVySWQgPSBoYW5kbGVySWQ7XG4gICAgcmVjb25uZWN0RHJvcFRhcmdldCgpO1xuICB9XG5cbiAgdmFyIGhvb2tzID0gKDAsIF93cmFwQ29ubmVjdG9ySG9va3MyLmRlZmF1bHQpKHtcbiAgICBkcm9wVGFyZ2V0OiBmdW5jdGlvbiBjb25uZWN0RHJvcFRhcmdldChub2RlLCBvcHRpb25zKSB7XG4gICAgICBpZiAobm9kZSA9PT0gY3VycmVudERyb3BUYXJnZXROb2RlICYmICgwLCBfYXJlT3B0aW9uc0VxdWFsMi5kZWZhdWx0KShvcHRpb25zLCBjdXJyZW50RHJvcFRhcmdldE9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY3VycmVudERyb3BUYXJnZXROb2RlID0gbm9kZTtcbiAgICAgIGN1cnJlbnREcm9wVGFyZ2V0T3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIHJlY29ubmVjdERyb3BUYXJnZXQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcmVjZWl2ZUhhbmRsZXJJZDogcmVjZWl2ZUhhbmRsZXJJZCxcbiAgICBob29rczogaG9va3NcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldENvbm5lY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28gSW5jLlxyXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cclxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVG91Y2hCYWNrZW5kID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUb3VjaEJhY2tlbmQ7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGdldEV2ZW50Q2xpZW50VG91Y2hPZmZzZXQoZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBnZXRFdmVudENsaWVudE9mZnNldChlLnRhcmdldFRvdWNoZXNbMF0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMpIHtcbiAgICAgICAgcmV0dXJuIGdldEV2ZW50Q2xpZW50VG91Y2hPZmZzZXQoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgICAgIHk6IGUuY2xpZW50WVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLy8gUG9seWZpbGwgZm9yIGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50XG52YXIgZWxlbWVudHNGcm9tUG9pbnQgPSAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludCB8fCBmdW5jdGlvbiAoeCwgeSkge1xuXG4gICAgaWYgKGRvY3VtZW50Lm1zRWxlbWVudHNGcm9tUG9pbnQpIHtcbiAgICAgICAgLy8gbXNFbGVtZW50c0Zyb21Qb2ludCBpcyBtdWNoIGZhc3RlciBidXQgcmV0dXJucyBhIG5vZGUtbGlzdCwgc28gY29udmVydCBpdCB0byBhbiBhcnJheVxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQubXNFbGVtZW50c0Zyb21Qb2ludCh4LCB5KSwgMCk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnRzID0gW10sXG4gICAgICAgIHByZXZpb3VzUG9pbnRlckV2ZW50cyA9IFtdLFxuICAgICAgICBjdXJyZW50LFxuICAgICAgICBpLFxuICAgICAgICBkO1xuXG4gICAgLy8gZ2V0IGFsbCBlbGVtZW50cyB2aWEgZWxlbWVudEZyb21Qb2ludCwgYW5kIHJlbW92ZSB0aGVtIGZyb20gaGl0LXRlc3RpbmcgaW4gb3JkZXJcbiAgICB3aGlsZSAoKGN1cnJlbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpKSAmJiBlbGVtZW50cy5pbmRleE9mKGN1cnJlbnQpID09PSAtMSAmJiBjdXJyZW50ICE9PSBudWxsKSB7XG5cbiAgICAgICAgLy8gcHVzaCB0aGUgZWxlbWVudCBhbmQgaXRzIGN1cnJlbnQgc3R5bGVcbiAgICAgICAgZWxlbWVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgcHJldmlvdXNQb2ludGVyRXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncG9pbnRlci1ldmVudHMnKSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBjdXJyZW50LnN0eWxlLmdldFByb3BlcnR5UHJpb3JpdHkoJ3BvaW50ZXItZXZlbnRzJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYWRkIFwicG9pbnRlci1ldmVudHM6IG5vbmVcIiwgdG8gZ2V0IHRvIHRoZSB1bmRlcmx5aW5nIGVsZW1lbnRcbiAgICAgICAgY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScsICdpbXBvcnRhbnQnKTtcbiAgICB9XG5cbiAgICAvLyByZXN0b3JlIHRoZSBwcmV2aW91cyBwb2ludGVyLWV2ZW50cyB2YWx1ZXNcbiAgICBmb3IgKGkgPSBwcmV2aW91c1BvaW50ZXJFdmVudHMubGVuZ3RoOyBkID0gcHJldmlvdXNQb2ludGVyRXZlbnRzWy0taV07KSB7XG4gICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlLnNldFByb3BlcnR5KCdwb2ludGVyLWV2ZW50cycsIGQudmFsdWUgPyBkLnZhbHVlIDogJycsIGQucHJpb3JpdHkpO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBvdXIgcmVzdWx0c1xuICAgIHJldHVybiBlbGVtZW50cztcbn0pLmJpbmQodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogbnVsbCk7XG5cbnZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gc2ltdWxhciB0byBqUXVlcnkncyB0ZXN0XG4gICAgdmFyIHN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIHN1cHBvcnRlZDtcbn0oKTtcblxudmFyIEVMRU1FTlRfTk9ERSA9IDE7XG5mdW5jdGlvbiBnZXROb2RlQ2xpZW50T2Zmc2V0KG5vZGUpIHtcbiAgICB2YXIgZWwgPSBub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUgPyBub2RlIDogbm9kZS5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX2VsJGdldEJvdW5kaW5nQ2xpZW50ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHRvcCA9IF9lbCRnZXRCb3VuZGluZ0NsaWVudC50b3AsXG4gICAgICAgIGxlZnQgPSBfZWwkZ2V0Qm91bmRpbmdDbGllbnQubGVmdDtcblxuICAgIHJldHVybiB7IHg6IGxlZnQsIHk6IHRvcCB9O1xufVxuXG52YXIgZXZlbnROYW1lcyA9IHtcbiAgICBtb3VzZToge1xuICAgICAgICBzdGFydDogJ21vdXNlZG93bicsXG4gICAgICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgICAgICBlbmQ6ICdtb3VzZXVwJyxcbiAgICAgICAgY29udGV4dG1lbnU6ICdjb250ZXh0bWVudSdcbiAgICB9LFxuICAgIHRvdWNoOiB7XG4gICAgICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgICAgICBlbmQ6ICd0b3VjaGVuZCdcbiAgICB9LFxuICAgIGtleWJvYXJkOiB7XG4gICAgICAgIGtleWRvd246ICdrZXlkb3duJ1xuICAgIH1cbn07XG5cbnZhciBUb3VjaEJhY2tlbmQgPSBleHBvcnRzLlRvdWNoQmFja2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb3VjaEJhY2tlbmQobWFuYWdlcikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvdWNoQmFja2VuZCk7XG5cbiAgICAgICAgb3B0aW9ucy5kZWxheVRvdWNoU3RhcnQgPSBvcHRpb25zLmRlbGF5VG91Y2hTdGFydCB8fCBvcHRpb25zLmRlbGF5O1xuXG4gICAgICAgIG9wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBlbmFibGVUb3VjaEV2ZW50czogdHJ1ZSxcbiAgICAgICAgICAgIGVuYWJsZU1vdXNlRXZlbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIGVuYWJsZUtleWJvYXJkRXZlbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIGRlbGF5VG91Y2hTdGFydDogMCxcbiAgICAgICAgICAgIGRlbGF5TW91c2VTdGFydDogMFxuICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmFjdGlvbnMgPSBtYW5hZ2VyLmdldEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5tb25pdG9yID0gbWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgICAgIHRoaXMucmVnaXN0cnkgPSBtYW5hZ2VyLmdldFJlZ2lzdHJ5KCk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVLZXlib2FyZEV2ZW50cyA9IG9wdGlvbnMuZW5hYmxlS2V5Ym9hcmRFdmVudHM7XG4gICAgICAgIHRoaXMuZW5hYmxlTW91c2VFdmVudHMgPSBvcHRpb25zLmVuYWJsZU1vdXNlRXZlbnRzO1xuICAgICAgICB0aGlzLmRlbGF5VG91Y2hTdGFydCA9IG9wdGlvbnMuZGVsYXlUb3VjaFN0YXJ0O1xuICAgICAgICB0aGlzLmRlbGF5TW91c2VTdGFydCA9IG9wdGlvbnMuZGVsYXlNb3VzZVN0YXJ0O1xuICAgICAgICB0aGlzLnNvdXJjZU5vZGVzID0ge307XG4gICAgICAgIHRoaXMuc291cmNlTm9kZU9wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5zb3VyY2VQcmV2aWV3Tm9kZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zb3VyY2VQcmV2aWV3Tm9kZU9wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy50YXJnZXROb2RlcyA9IHt9O1xuICAgICAgICB0aGlzLnRhcmdldE5vZGVPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXJUeXBlcyA9IFtdO1xuICAgICAgICB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCA9IHt9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmVuYWJsZU1vdXNlRXZlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMucHVzaCgnbW91c2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmVuYWJsZVRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMucHVzaCgndG91Y2gnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmVuYWJsZUtleWJvYXJkRXZlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMucHVzaCgna2V5Ym9hcmQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gdGhpcy5nZXRTb3VyY2VDbGllbnRPZmZzZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQgPSB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydERlbGF5ID0gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnREZWxheS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUgPSB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlQ2FwdHVyZSA9IHRoaXMuaGFuZGxlVG9wTW92ZUNhcHR1cmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlID0gdGhpcy5oYW5kbGVUb3BNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZUVuZENhcHR1cmUgPSB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2FuY2VsT25Fc2NhcGUgPSB0aGlzLmhhbmRsZUNhbmNlbE9uRXNjYXBlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRvdWNoQmFja2VuZCwgW3tcbiAgICAgICAga2V5OiAnc2V0dXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSghdGhpcy5jb25zdHJ1Y3Rvci5pc1NldFVwLCAnQ2Fubm90IGhhdmUgdHdvIFRvdWNoIGJhY2tlbmRzIGF0IHRoZSBzYW1lIHRpbWUuJyk7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmlzU2V0VXAgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnc3RhcnQnLCB0aGlzLmdldFRvcE1vdmVTdGFydEhhbmRsZXIoKSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnc3RhcnQnLCB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ21vdmUnLCB0aGlzLmhhbmRsZVRvcE1vdmUpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ21vdmUnLCB0aGlzLmhhbmRsZVRvcE1vdmVDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdlbmQnLCB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlLCB0cnVlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW91c2VFdmVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnY29udGV4dG1lbnUnLCB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlS2V5Ym9hcmRFdmVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAna2V5ZG93bicsIHRoaXMuaGFuZGxlQ2FuY2VsT25Fc2NhcGUsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0ZWFyZG93bicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0ZWFyZG93bigpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5pc1NldFVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCA9IHt9O1xuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnc3RhcnQnLCB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3N0YXJ0JywgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ21vdmUnLCB0aGlzLmhhbmRsZVRvcE1vdmVDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdtb3ZlJywgdGhpcy5oYW5kbGVUb3BNb3ZlKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdlbmQnLCB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlLCB0cnVlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW91c2VFdmVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnY29udGV4dG1lbnUnLCB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlS2V5Ym9hcmRFdmVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAna2V5ZG93bicsIHRoaXMuaGFuZGxlQ2FuY2VsT25Fc2NhcGUsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWRkRXZlbnRMaXN0ZW5lcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHN1YmplY3QsIGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZSA/IHsgY2FwdHVyZTogY2FwdHVyZSwgcGFzc2l2ZTogZmFsc2UgfSA6IGNhcHR1cmU7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lclR5cGUpIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lc1tsaXN0ZW5lclR5cGVdW2V2ZW50XSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHN1YmplY3QsIGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZSA/IHsgY2FwdHVyZTogY2FwdHVyZSwgcGFzc2l2ZTogZmFsc2UgfSA6IGNhcHR1cmU7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lclR5cGUpIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lc1tsaXN0ZW5lclR5cGVdW2V2ZW50XSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29ubmVjdERyYWdTb3VyY2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdERyYWdTb3VyY2Uoc291cmNlSWQsIG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBoYW5kbGVNb3ZlU3RhcnQgPSB0aGlzLmhhbmRsZU1vdmVTdGFydC5iaW5kKHRoaXMsIHNvdXJjZUlkKTtcbiAgICAgICAgICAgIHRoaXMuc291cmNlTm9kZXNbc291cmNlSWRdID0gbm9kZTtcblxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG5vZGUsICdzdGFydCcsIGhhbmRsZU1vdmVTdGFydCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzLnNvdXJjZU5vZGVzW3NvdXJjZUlkXTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsICdzdGFydCcsIGhhbmRsZU1vdmVTdGFydCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb25uZWN0RHJhZ1ByZXZpZXcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdERyYWdQcmV2aWV3KHNvdXJjZUlkLCBub2RlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5zb3VyY2VQcmV2aWV3Tm9kZU9wdGlvbnNbc291cmNlSWRdID0gb3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVzW3NvdXJjZUlkXSA9IG5vZGU7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMi5zb3VyY2VQcmV2aWV3Tm9kZXNbc291cmNlSWRdO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczIuc291cmNlUHJldmlld05vZGVPcHRpb25zW3NvdXJjZUlkXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nvbm5lY3REcm9wVGFyZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3REcm9wVGFyZ2V0KHRhcmdldElkLCBub2RlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGhhbmRsZU1vdmUgPSBmdW5jdGlvbiBoYW5kbGVNb3ZlKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBHcmFiIHRoZSBjb29yZGluYXRlcyBmb3IgdGhlIGN1cnJlbnQgbW91c2UvdG91Y2ggcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgZXZlbnROYW1lcy5tb3VzZS5tb3ZlOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBldmVudE5hbWVzLnRvdWNoLm1vdmU6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZHMgPSB7IHg6IGUudG91Y2hlc1swXS5jbGllbnRYLCB5OiBlLnRvdWNoZXNbMF0uY2xpZW50WSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBVc2UgdGhlIGNvb3JkaW5hdGVzIHRvIGdyYWIgdGhlIGVsZW1lbnQgdGhlIGRyYWcgZW5kZWQgb24uXHJcbiAgICAgICAgICAgICAgICAgKiBJZiB0aGUgZWxlbWVudCBpcyB0aGUgc2FtZSBhcyB0aGUgdGFyZ2V0IG5vZGUgKG9yIGFueSBvZiBpdCdzIGNoaWxkcmVuKSB0aGVuIHdlIGhhdmUgaGl0IGEgZHJvcCB0YXJnZXQgYW5kIGNhbiBoYW5kbGUgdGhlIG1vdmUuXHJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB2YXIgZHJvcHBlZE9uID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChjb29yZHMueCwgY29vcmRzLnkpO1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZE1hdGNoID0gbm9kZS5jb250YWlucyhkcm9wcGVkT24pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRyb3BwZWRPbiA9PT0gbm9kZSB8fCBjaGlsZE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuaGFuZGxlTW92ZShlLCB0YXJnZXRJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEF0dGFjaGluZyB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGJvZHkgc28gdGhhdCB0b3VjaG1vdmUgd2lsbCB3b3JrIHdoaWxlIGRyYWdnaW5nIG92ZXIgbXVsdGlwbGUgdGFyZ2V0IGVsZW1lbnRzLlxyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICdtb3ZlJywgaGFuZGxlTW92ZSk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldE5vZGVzW3RhcmdldElkXSA9IG5vZGU7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMy50YXJnZXROb2Rlc1t0YXJnZXRJZF07XG4gICAgICAgICAgICAgICAgX3RoaXMzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCAnbW92ZScsIGhhbmRsZU1vdmUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U291cmNlQ2xpZW50T2Zmc2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvdXJjZUNsaWVudE9mZnNldChzb3VyY2VJZCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldE5vZGVDbGllbnRPZmZzZXQodGhpcy5zb3VyY2VOb2Rlc1tzb3VyY2VJZF0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUoZSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlTW92ZVN0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdmVTdGFydChzb3VyY2VJZCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMudW5zaGlmdChzb3VyY2VJZCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFRvcE1vdmVTdGFydEhhbmRsZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VG9wTW92ZVN0YXJ0SGFuZGxlcigpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kZWxheVRvdWNoU3RhcnQgJiYgIXRoaXMuZGVsYXlNb3VzZVN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnREZWxheTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZVN0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVTdGFydChlKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBwcmVtYXR1cmVseSBwcmV2ZW50RGVmYXVsdCgpIGhlcmUgc2luY2UgaXQgbWlnaHQ6XG4gICAgICAgICAgICAvLyAxLiBNZXNzIHVwIHNjcm9sbGluZ1xuICAgICAgICAgICAgLy8gMi4gTWVzcyB1cCBsb25nIHRhcCAod2hpY2ggYnJpbmdzIHVwIGNvbnRleHQgbWVudSlcbiAgICAgICAgICAgIC8vIDMuIElmIHRoZXJlJ3MgYW4gYW5jaG9yIGxpbmsgYXMgYSBjaGlsZCwgdGFwIHdvbid0IGJlIHRyaWdnZXJlZCBvbiBsaW5rXG5cbiAgICAgICAgICAgIHZhciBjbGllbnRPZmZzZXQgPSBnZXRFdmVudENsaWVudE9mZnNldChlKTtcbiAgICAgICAgICAgIGlmIChjbGllbnRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCA9IGNsaWVudE9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXknLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXkoZSkge1xuICAgICAgICAgICAgdmFyIGRlbGF5ID0gZS50eXBlID09PSBldmVudE5hbWVzLnRvdWNoLnN0YXJ0ID8gdGhpcy5kZWxheVRvdWNoU3RhcnQgOiB0aGlzLmRlbGF5TW91c2VTdGFydDtcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQuYmluZCh0aGlzLCBlKSwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVUb3BNb3ZlQ2FwdHVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlQ2FwdHVyZShlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdPdmVyVGFyZ2V0SWRzID0gW107XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZU1vdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW92ZShlLCB0YXJnZXRJZCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnT3ZlclRhcmdldElkcy51bnNoaWZ0KHRhcmdldElkKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlKGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgICAgICAgICAgdmFyIG1vdmVTdGFydFNvdXJjZUlkcyA9IHRoaXMubW92ZVN0YXJ0U291cmNlSWRzLFxuICAgICAgICAgICAgICAgIGRyYWdPdmVyVGFyZ2V0SWRzID0gdGhpcy5kcmFnT3ZlclRhcmdldElkcztcblxuICAgICAgICAgICAgdmFyIGNsaWVudE9mZnNldCA9IGdldEV2ZW50Q2xpZW50T2Zmc2V0KGUpO1xuXG4gICAgICAgICAgICBpZiAoIWNsaWVudE9mZnNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgd2UncmUgbm90IGRyYWdnaW5nIGFuZCB3ZSd2ZSBtb3ZlZCBhIGxpdHRsZSwgdGhhdCBjb3VudHMgYXMgYSBkcmFnIHN0YXJ0XG4gICAgICAgICAgICBpZiAoIXRoaXMubW9uaXRvci5pc0RyYWdnaW5nKCkgJiYgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQuaGFzT3duUHJvcGVydHkoJ3gnKSAmJiBtb3ZlU3RhcnRTb3VyY2VJZHMgJiYgKHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0LnggIT09IGNsaWVudE9mZnNldC54IHx8IHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0LnkgIT09IGNsaWVudE9mZnNldC55KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMuYmVnaW5EcmFnKG1vdmVTdGFydFNvdXJjZUlkcywge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRPZmZzZXQ6IHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICBnZXRTb3VyY2VDbGllbnRPZmZzZXQ6IHRoaXMuZ2V0U291cmNlQ2xpZW50T2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICBwdWJsaXNoU291cmNlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMubW9uaXRvci5pc0RyYWdnaW5nKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzb3VyY2VOb2RlID0gdGhpcy5zb3VyY2VOb2Rlc1t0aGlzLm1vbml0b3IuZ2V0U291cmNlSWQoKV07XG4gICAgICAgICAgICB0aGlzLmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKHNvdXJjZU5vZGUpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLnB1Ymxpc2hEcmFnU291cmNlKCk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBub2RlIGVsZW1lbnRzIG9mIHRoZSBob3ZlcmVkIERyb3BUYXJnZXRzXG4gICAgICAgICAgICB2YXIgZHJhZ092ZXJUYXJnZXROb2RlcyA9IGRyYWdPdmVyVGFyZ2V0SWRzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC50YXJnZXROb2Rlc1trZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGEgb3JkZXJlZCBsaXN0IG9mIG5vZGVzIHRoYXQgYXJlIHRvdWNoZWQgYnlcbiAgICAgICAgICAgIHZhciBlbGVtZW50c0F0UG9pbnQgPSBlbGVtZW50c0Zyb21Qb2ludChjbGllbnRPZmZzZXQueCwgY2xpZW50T2Zmc2V0LnkpO1xuICAgICAgICAgICAgdmFyIG9yZGVyZWREcmFnT3ZlclRhcmdldElkcyA9IGVsZW1lbnRzQXRQb2ludFxuICAgICAgICAgICAgLy8gRmlsdGVyIG9mZiBub2RlcyB0aGF0IGFyZW50IGEgaG92ZXJlZCBEcm9wVGFyZ2V0cyBub2Rlc1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkcmFnT3ZlclRhcmdldE5vZGVzLmluZGV4T2Yobm9kZSkgPiAtMTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBNYXAgYmFjayB0aGUgbm9kZXMgZWxlbWVudHMgdG8gdGFyZ2V0SWRzXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdGFyZ2V0SWQgaW4gX3RoaXM0LnRhcmdldE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlID09PSBfdGhpczQudGFyZ2V0Tm9kZXNbdGFyZ2V0SWRdKSByZXR1cm4gdGFyZ2V0SWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIEZpbHRlciBvZmYgcG9zc2libGUgbnVsbCByb3dzXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhbm9kZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZXZlcnNlIG9yZGVyIGJlY2F1c2UgZG5kLWNvcmUgcmV2ZXJzZSBpdCBiZWZvcmUgY2FsbGluZyB0aGUgRHJvcFRhcmdldCBkcm9wIG1ldGhvZHNcbiAgICAgICAgICAgIG9yZGVyZWREcmFnT3ZlclRhcmdldElkcy5yZXZlcnNlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5ob3ZlcihvcmRlcmVkRHJhZ092ZXJUYXJnZXRJZHMsIHtcbiAgICAgICAgICAgICAgICBjbGllbnRPZmZzZXQ6IGNsaWVudE9mZnNldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVFbmRDYXB0dXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlKGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tb25pdG9yLmlzRHJhZ2dpbmcoKSB8fCB0aGlzLm1vbml0b3IuZGlkRHJvcCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCA9IHt9O1xuXG4gICAgICAgICAgICB0aGlzLnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5kcm9wKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuZW5kRHJhZygpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVDYW5jZWxPbkVzY2FwZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVDYW5jZWxPbkVzY2FwZShlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSB7fTtcblxuICAgICAgICAgICAgICAgIHRoaXMudW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5lbmREcmFnKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZU9uQ29udGV4dE1lbnUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlT25Db250ZXh0TWVudSgpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIobm9kZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMudW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpO1xuXG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlID0gbm9kZTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIgPSBuZXcgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghbm9kZS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNS5yZXN1cnJlY3RTb3VyY2VOb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNS51bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyLm9ic2VydmUobm9kZS5wYXJlbnRFbGVtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVzdXJyZWN0U291cmNlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXN1cnJlY3RTb3VyY2VOb2RlKCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcmVhY3RpZCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRyYWdnZWRTb3VyY2VOb2RlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUb3VjaEJhY2tlbmQ7XG59KCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvdWNoQmFja2VuZCgpIHtcbiAgICB2YXIgb3B0aW9uc09yTWFuYWdlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICB2YXIgdG91Y2hCYWNrZW5kRmFjdG9yeSA9IGZ1bmN0aW9uIHRvdWNoQmFja2VuZEZhY3RvcnkobWFuYWdlcikge1xuICAgICAgICByZXR1cm4gbmV3IFRvdWNoQmFja2VuZChtYW5hZ2VyLCBvcHRpb25zT3JNYW5hZ2VyKTtcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnNPck1hbmFnZXIuZ2V0TW9uaXRvcikge1xuICAgICAgICByZXR1cm4gdG91Y2hCYWNrZW5kRmFjdG9yeShvcHRpb25zT3JNYW5hZ2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG91Y2hCYWNrZW5kRmFjdG9yeTtcbiAgICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQvZGlzdC9Ub3VjaC5qc1xuLy8gbW9kdWxlIGlkID0gMTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyYWdMYXllciBmcm9tICdyZWFjdC1kbmQvbGliL0RyYWdMYXllcic7XG5pbXBvcnQgRXZlbnRCYXNlIGZyb20gJy4vRXZlbnRCYXNlJztcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5cbmZ1bmN0aW9uIGNvbGxlY3QgKG1vbml0b3Ipe1xuICBjb25zdCBwcm9wcyA9IHtcbiAgICBjbGllbnRPZmZzZXQ6IG1vbml0b3IuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KClcbiAgfTtcblxuICBjb25zdCBpdGVtID0gbW9uaXRvci5nZXRJdGVtKCk7XG4gIGlmKGl0ZW0gJiYgaXRlbVsnZHJhZ2dpbmdDb21wb25lbnQnXSl7XG4gICAgcHJvcHNbJ2RyYWdnaW5nQ29tcG9uZW50J10gPSBpdGVtWydkcmFnZ2luZ0NvbXBvbmVudCddO1xuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuXG5jbGFzcyBFdmVudFByZXZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBnZXRJdGVtU3R5bGVzICgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuY2xpZW50T2Zmc2V0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgeCA9IHRoaXMucHJvcHMuY2xpZW50T2Zmc2V0Lng7XG4gICAgY29uc3QgeSA9IHRoaXMucHJvcHMuY2xpZW50T2Zmc2V0Lnk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weClgO1xuXG4gICAgcmV0dXJuIGFzc2lnbih0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50LmdldERyYWdnaW5nU3R5bGUoKSwge1xuICAgICAgcG9zaXRpb246J2Fic29sdXRlJyxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgV2Via2l0VHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IGRyYWdnaW5nRGlzcGxheSA9ICcnO1xuICAgIGlmKHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQgJiYgdGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudC5zdGF0ZS5kcmFnZ2luZ0Rpc3BsYXkpe1xuICAgICAgZHJhZ2dpbmdEaXNwbGF5ID0gdGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudC5zdGF0ZS5kcmFnZ2luZ0Rpc3BsYXk7XG4gICAgfVxuXG4gICAgbGV0IGRpc3BsYXkgPSBbXTtcbiAgICBpZih0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50ICYmIHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQuc3RhdGUuZGlzcGxheSl7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudC5zdGF0ZS5kaXNwbGF5O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJwcmV2aWV3XCIgY2xhc3NOYW1lPVwidGxFdmVudFZpZXcgdGxEcmFnZ2luZ0V2ZW50XCIgc3R5bGU9e3RoaXMuZ2V0SXRlbVN0eWxlcygpfT5cbiAgICAgICAgPEV2ZW50QmFzZVxuICAgICAgICAgIGRyYWdnaW5nRGlzcGxheT17ZHJhZ2dpbmdEaXNwbGF5fVxuICAgICAgICAgIGRpc3BsYXk9e2Rpc3BsYXl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdMYXllcihjb2xsZWN0KShFdmVudFByZXZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRQcmV2aWV3LmpzeCIsImV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0KGVsZW0sIHNlbGVjdG9yKSB7XG4gIHZhciBtYXRjaGVzRm47XG5cbiAgLy8gZmluZCB2ZW5kb3IgcHJlZml4XG4gIFsnbWF0Y2hlcycsJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsJ21vek1hdGNoZXNTZWxlY3RvcicsJ21zTWF0Y2hlc1NlbGVjdG9yJywnb01hdGNoZXNTZWxlY3RvciddLnNvbWUoZnVuY3Rpb24oZm4pIHtcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keVtmbl0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG1hdGNoZXNGbiA9IGZuO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9KVxuXG4gIHZhciBwYXJlbnQ7XG5cbiAgLy8gdHJhdmVyc2UgcGFyZW50c1xuICB3aGlsZSAoZWxlbSkge1xuICAgICAgcGFyZW50ID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnRbbWF0Y2hlc0ZuXShzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfVxuICAgICAgZWxlbSA9IHBhcmVudDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5lczYiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQge0RyYWdTb3VyY2V9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgRXZlbnRCYXNlIGZyb20gJy4vRXZlbnRCYXNlJztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuL1RpbWVsaW5lJztcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxuY29uc3Qgc291cmNlID0ge1xuICBiZWdpbkRyYWc6IGZ1bmN0aW9uIChwcm9wcywgbW9uaXRvciwgY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGFzc2lnbih7fSwgcHJvcHMsIHtkcmFnZ2luZ0NvbXBvbmVudDogY29tcG9uZW50fSk7XG4gIH0sXG4gIGNhbkRyYWc6IGZ1bmN0aW9uKHByb3BzLCBtb25pdG9yLCBjb21wb25lbnQpe1xuICAgIGNvbnN0IGRyYWdnYWJsZSA9IHByb3BzLnRpbWVsaW5lLmZpbmRFdmVudEJ5SWQocHJvcHMuaWQpLnN0YXRlLmRyYWdnYWJsZTtcbiAgICByZXR1cm4gISFkcmFnZ2FibGU7XG4gIH1cbn1cblxuY29uc3QgY29sbGVjdCA9IChjb25uZWN0LCBtb25pdG9yKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29ubmVjdERyYWdTb3VyY2U6IGNvbm5lY3QuZHJhZ1NvdXJjZSgpLFxuICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpXG4gIH07XG59XG5cbmNsYXNzIEV2ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvcDogcHJvcHMuZmxvYXQgPT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKHRoaXMucHJvcHMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpIDogcHJvcHMuZmxvYXQudG9wLFxuICAgICAgbGVmdDogcHJvcHMuZmxvYXQgPT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0TGluZUxlZnQodGhpcy5wcm9wcy5saW5lSWQpIDogcHJvcHMuZmxvYXQubGVmdCxcbiAgICAgIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yLFxuICAgICAgZHJhZ2dhYmxlOiBwcm9wcy5mbG9hdCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiB0cnVlLFxuICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgIGRyYWdnaW5nRGlzcGxheTogJycsXG4gICAgICBkaXNwbGF5OiBwcm9wcy5kaXNwbGF5LFxuICAgIH1cblxuICAgIHRoaXMubGluZUlkID0gdGhpcy5wcm9wcy5saW5lSWQ7XG4gICAgdGhpcy50aW1lU3BhbiA9IHRoaXMucHJvcHMudGltZVNwYW47XG4gICAgdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLnJlc2l6aW5nVGltZVNwYW4gPSBudWxsO1xuICAgIHRoaXMucmVzaXppbmcgPSBmYWxzZTtcbiAgICB0aGlzLnZhcnMgPSB0aGlzLnByb3BzLnZhcnMgPyB0aGlzLnByb3BzLnZhcnMgOiB7fTtcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYodGhpcy5wcm9wcy5mbG9hdCl7XG4gICAgICAvLyDlj7PjgYzjga/jgb/lh7rjgabjgarjgYTjgYvjg4Hjgqfjg4Pjgq9cbiAgICAgIHZhciBsaW5lID0gdGhpcy5wcm9wcy50aW1lbGluZS5maW5kTGluZUJ5TGVmdCh0aGlzLnN0YXRlLmxlZnQpXG4gICAgICBpZighbGluZSl7XG4gICAgICAgIGxpbmUgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmxhc3RMaW5lXG4gICAgICAgIHRoaXMuc3RhdGUubGVmdCA9IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0TGluZUxlZnQobGluZS5wcm9wcy5pZClcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLm1pbnV0ZVRvSGVpZ2h0KHRoaXMucHJvcHMuZmxvYXQubWludXRlKTtcbiAgICAgIC8vIOmrmOOBleOBjOOBr+OBv+WHuuOBpuOBquOBhOOBi+ODgeOCp+ODg+OCr1xuICAgICAgY29uc3QgYm90dG9tID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AobGluZS5wcm9wcy50aW1lU3Bhbi5nZXRFbmRUaW1lKCkpIC0gdGhpcy5zdGF0ZS5oZWlnaHRcbiAgICAgIGlmKHRoaXMuc3RhdGUudG9wID4gYm90dG9tKXtcbiAgICAgICAgdGhpcy5zdGF0ZS50b3AgPSBib3R0b21cbiAgICAgIH1cblxuICAgICAgY29uc3QgdGltZSA9IHRoaXMucHJvcHMudGltZWxpbmUudG9wVG9UaW1lKHRoaXMuc3RhdGUudG9wKTtcbiAgICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbiA9IHt0aW1lOiB0aW1lLCBsaW5lSWQ6IGxpbmUucHJvcHMuaWR9O1xuICAgICAgdGhpcy5zdGF0ZS5kcmFnZ2luZ0Rpc3BsYXkgPSB0aW1lLmdldERpc3BsYXlUaW1lKCk7XG4gICAgICB0aGlzLnRpbWVTcGFuID0gbmV3IFRpbWVTcGFuKHRpbWUsIHRpbWUuYWRkTWluKHRoaXMucHJvcHMuZmxvYXQubWludXRlKSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQodGhpcy50aW1lU3Bhbik7XG4gICAgfVxuICB9XG5cbiAgdG9Kc29uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgbGluZUlkOiB0aGlzLmxpbmVJZCxcbiAgICAgIHRpbWVTcGFuOiB0aGlzLnRpbWVTcGFuLFxuICAgICAgdmFyczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnZhcnMpKSxcbiAgICAgIGNvbG9yOiB0aGlzLnN0YXRlLmNvbG9yLFxuICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy5kaXNwbGF5LFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCxcbiAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSh2YWx1ZXMpe1xuICAgIGNvbnN0IG5ld1N0YXRlID0ge307XG4gICAgaWYodmFsdWVzLnRpbWVTcGFuKXtcbiAgICAgIG5ld1N0YXRlLmhlaWdodCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodCh2YWx1ZXMudGltZVNwYW4pO1xuICAgICAgbmV3U3RhdGUudG9wID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodmFsdWVzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKTtcbiAgICAgIHRoaXMudGltZVNwYW4gPSB2YWx1ZXMudGltZVNwYW47XG4gICAgfVxuXG4gICAgaWYodmFsdWVzLmNvbG9yKXtcbiAgICAgIG5ld1N0YXRlLmNvbG9yID0gdmFsdWVzLmNvbG9yO1xuICAgIH1cblxuICAgIGlmKHZhbHVlcy5kaXNwbGF5KXtcbiAgICAgIG5ld1N0YXRlLmRpc3BsYXkgPSB2YWx1ZXMuZGlzcGxheTtcbiAgICB9XG5cbiAgICBpZih2YWx1ZXMudmFycyl7XG4gICAgICB0aGlzLnZhcnMgPSB2YWx1ZXMudmFycztcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50VGltZVNwYW4oKXtcbiAgICByZXR1cm4gdGhpcy5yZXNpemluZ1RpbWVTcGFuIHx8IHRoaXMudGltZVNwYW47XG4gIH1cblxuICBnZXQgbmV4dFBvc2l0aW9uKCl7XG4gICAgaWYodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmVJZDogdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLmxpbmVJZCxcbiAgICAgICAgdGltZVNwYW46IHRoaXMudGltZVNwYW4uc2hpZnRTdGFydFRpbWUodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLnRpbWUpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICByZXR1cm57XG4gICAgICAgIGxpbmVJZDogdGhpcy5saW5lSWQsXG4gICAgICAgIHRpbWVTcGFuOiB0aGlzLnJlc2l6aW5nVGltZVNwYW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBwcmV2UG9zaXRpb24oKXtcbiAgICBpZighdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uICYmICF0aGlzLnJlc2l6aW5nVGltZVNwYW4pe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybntcbiAgICAgICAgbGluZUlkOiB0aGlzLmxpbmVJZCxcbiAgICAgICAgdGltZVNwYW46IHRoaXMudGltZVNwYW5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5LuW44GuRXZlbnTjgajph43jgarjgaPjgabjgYTjgarjgYTjgYvjg4Hjgqfjg4Pjgq/jgZnjgotcbiAgICogQHBhcmFtICB7b2JqZWN0fSAgcG9zaXRpb24ge2xpbmVJZDogKioqLCB0aW1lU3BhbjogKioqfVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNGcmVlUG9zaXRpb24ocG9zaXRpb24pe1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy50aW1lbGluZS5ldmVudENvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMucHJvcHMudGltZWxpbmUuZXZlbnRDb21wb25lbnRzW2ldO1xuICAgICAgaWYoZXYgPT09IHRoaXMpIGNvbnRpbnVlO1xuICAgICAgaWYoZXYubGluZUlkICE9IHBvc2l0aW9uLmxpbmVJZCkgY29udGludWU7XG4gICAgICBpZihldi5jdXJyZW50VGltZVNwYW4ub3ZlcmxhcHMocG9zaXRpb24udGltZVNwYW4pKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbW92ZVRvKHRvcCwgbGVmdCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dG9wOiB0b3AsIGxlZnQ6IGxlZnR9KTtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZENsaWNrKXtcbiAgICAgIGlmKHRoaXMucmVzaXppbmcpe1xuICAgICAgICByZXR1cm4gO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkQ2xpY2soe1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy5wcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudC5yZWZzLmxpbmVzV3JhcHBlci5zY3JvbGxUb3AsXG4gICAgICAgICAgc2Nyb2xsTGVmdDogdGhpcy5wcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudC5lbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICAgICAgdG9wOiBlLmNsaWVudFksXG4gICAgICAgICAgbGVmdDogZS5jbGllbnRYLFxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGxpbmVDb21wb25lbnQ6IHRoaXMucHJvcHMudGltZWxpbmUubGluZUNvbXBvbmVudHMuZmluZChsaW5lQ29tcG9uZW50ID0+IGxpbmVDb21wb25lbnQucHJvcHMuaWQgPT0gdGhpcy5saW5lSWQpLFxuICAgICAgICBldmVudDogZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhZ2dpbmcodGltZSwgbGluZUlkKXtcbiAgICB0aGlzLmRyYWdnaW5nUG9zaXRpb24gPSB7dGltZTogdGltZSwgbGluZUlkOiBsaW5lSWR9O1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nRGlzcGxheTogdGltZS5nZXREaXNwbGF5VGltZSgpfSk7XG4gIH1cblxuICByZXNpemVVcChlKXtcbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LnJlc2l6ZVVwKHRoaXMsIGUuY2xpZW50WSk7XG4gIH1cblxuICByZXNpemVEb3duKGUpe1xuICAgIHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQucmVzaXplRG93bih0aGlzLCBlLmNsaWVudFkpO1xuICB9XG5cbiAgZW5kUmVzaXppbmcoZSl7XG4gICAgaWYodGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6IG51bGwsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheVRvcDogbnVsbFxuICAgICAgfTtcblxuICAgICAgaWYodGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgICAgbmV3U3RhdGUudG9wID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5yZXNpemluZ1RpbWVTcGFuLmdldFN0YXJ0VGltZSgpKTtcbiAgICAgICAgbmV3U3RhdGUuaGVpZ2h0ID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KHRoaXMucmVzaXppbmdUaW1lU3Bhbik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICAvL29uQ2xpY2vjgojjgoplbmRSZXNpemluZ+OBruWFiOOBq+eZuueUn+OBl+OBpuOBl+OBvuOBhuOAglxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXNpemluZyA9IGZhbHNlLCAxMDApO1xuICB9XG5cbiAgb25Db250ZXh0TWVudShlKXtcbiAgICBpZih0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkUmlnaHRDbGljayl7XG4gICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkUmlnaHRDbGljayh7XG4gICAgICAgIGV2ZW50OiBlLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldERyYWdnaW5nU3R5bGUoKXtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLFxuICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5jb2xvcixcbiAgICB9XG4gIH1cblxuICBnZXRPZmZzZXQoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdFxuICAgIH1cbiAgfVxuXG4gIHNldENvbG9yKGNvbG9yKXtcbiAgICB0aGlzLnNldFN0YXRlKHtjb2xvcjogY29sb3J9KTtcbiAgfVxuXG4gIHNldERpc3BsYXkoZGlzcGxheSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogZGlzcGxheX0pO1xuICB9XG5cbiAgcmVzaXplKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICByZXNpemFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGZsb2F0KCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICBkcmFnZ2luZ0Rpc3BsYXk6IHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuZ2V0RGlzcGxheVRpbWUoKVxuICAgIH0pO1xuXG4gICAgdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uID0ge3RpbWU6IHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCksIGxpbmVJZDogdGhpcy5saW5lSWR9O1xuICB9XG5cbiAgaXNGaXhlZCgpe1xuICAgIHJldHVybiAhdGhpcy5zdGF0ZS5kcmFnZ2FibGUgJiYgIXRoaXMuc3RhdGUucmVzaXphYmxlO1xuICB9XG5cbiAgaXNGaXhhYmxlKCl7XG4gICAgdmFyIG5ld1Bvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb247XG4gICAgaWYoIW5ld1Bvc2l0aW9uKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmlzRnJlZVBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgfVxuXG4gIGlzQ2FuY2VsYWJsZSgpe1xuICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMucHJldlBvc2l0aW9uO1xuICAgIGlmKCFuZXdQb3NpdGlvbil7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pc0ZyZWVQb3NpdGlvbihuZXdQb3NpdGlvbik7XG4gIH1cblxuICBjYW5jZWwoKXtcbiAgICBpZih0aGlzLmRyYWdnaW5nUG9zaXRpb24pe1xuICAgICAgY29uc3QgbGVmdCA9IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0TGluZUxlZnQodGhpcy5saW5lSWQpO1xuICAgICAgY29uc3QgdG9wID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSk7XG4gICAgICB0aGlzLmRyYWdnaW5nUG9zaXRpb24gPSBudWxsO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJycsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBsZWZ0OiBsZWZ0XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYodGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KHRoaXMudGltZVNwYW4pO1xuICAgICAgdGhpcy5yZXNpemluZ1RpbWVTcGFuID0gbnVsbDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnLFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICB9XG5cbiAgcmVtb3ZlKCl7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICAgIHJldHVybiB0aGlzLnByb3BzLnRpbWVsaW5lLnJlbW92ZUV2ZW50KHRoaXMucHJvcHMuaWQpO1xuICB9XG5cbiAgZ2V0TWludXRlKCl7XG4gICAgaWYodGhpcy50aW1lU3Bhbil7XG4gICAgICByZXR1cm4gdGhpcy50aW1lU3Bhbi5nZXREaXN0YW5jZSgpO1xuICAgIH0gZWxzZSBpZih0aGlzLnByb3BzLmZsb2F0KXtcbiAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnByb3BzLmZsb2F0Lm1pbnV0ZSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGZpeCgpe1xuICAgIGlmKHRoaXMuZHJhZ2dpbmdQb3NpdGlvbil7XG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgdG9wOiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh0aGlzLmRyYWdnaW5nUG9zaXRpb24udGltZSksXG4gICAgICAgIGxlZnQ6IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0TGluZUxlZnQodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLmxpbmVJZCksXG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJydcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdUaW1lU3BhbiA9IHRoaXMudGltZVNwYW4uc2hpZnRTdGFydFRpbWUodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLnRpbWUpO1xuICAgICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudFdpbGxGaXgpe1xuICAgICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50V2lsbEZpeCh7XG4gICAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICBsaW5lSWQ6IHRoaXMuZHJhZ2dpbmdQb3NpdGlvbi5saW5lSWQsXG4gICAgICAgICAgdGltZVNwYW46IG5ld1RpbWVTcGFuXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIHRoaXMubGluZUlkID0gdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLmxpbmVJZDtcbiAgICAgIHRoaXMudGltZVNwYW4gPSBuZXdUaW1lU3BhbjtcbiAgICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIGlmKHRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJ1xuICAgICAgfVxuICAgICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudFdpbGxGaXgpe1xuICAgICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50V2lsbEZpeCh7XG4gICAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICBsaW5lSWQ6IHRoaXMubGluZUlkLFxuICAgICAgICAgIHRpbWVTcGFuOiB0aGlzLnJlc2l6aW5nVGltZVNwYW5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgdGhpcy50aW1lU3BhbiA9IHRoaXMucmVzaXppbmdUaW1lU3BhbjtcbiAgICAgIHRoaXMucmVzaXppbmdUaW1lU3BhbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmNsZWFyRHJhZ2dpbmdPdmVyKCk7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZEZpeCl7XG4gICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkRml4KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNldFZhcihrZXksIHZhbHVlKXtcbiAgICB0aGlzLnZhcnNba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0VmFyKGtleSl7XG4gICAgcmV0dXJuIHRoaXMudmFyc1trZXldO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmV2ZW50Q29tcG9uZW50cy5wdXNoKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIHRoaXMucHJvcHMudGltZWxpbmUuZXZlbnRDb21wb25lbnRzID0gdGhpcy5wcm9wcy50aW1lbGluZS5ldmVudENvbXBvbmVudHMuZmlsdGVyKGV2ID0+IGV2ICE9PSB0aGlzKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IHRoaXMuc3RhdGUudG9wICsgJ3B4JyxcbiAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCArICdweCcsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCArICdweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuY29sb3IsXG4gICAgICBkaXNwbGF5OiB0aGlzLnByb3BzLmlzRHJhZ2dpbmcgPyAnbm9uZScgOiAnYmxvY2snXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLmNvbm5lY3REcmFnU291cmNlKFxuICAgICAgPGRpdiByZWY9e2VsZW0gPT4gdGhpcy5lbGVtZW50ID0gZWxlbX0gb25Db250ZXh0TWVudT17ZSA9PiB0aGlzLm9uQ29udGV4dE1lbnUoZSl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxFdmVudFZpZXcnLCB7dGxEcmFnZ2luZ0V2ZW50OiB0aGlzLnN0YXRlLmRyYWdnYWJsZSwgdGxSZXNpemFibGVFdmVudDogdGhpcy5zdGF0ZS5yZXNpemFibGV9KX0gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX0+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIGlmKHRoaXMuc3RhdGUucmVzaXphYmxlKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSZXNpemVIYW5kbGVcIiBvblRvdWNoU3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVVcChlKX0gb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVVcChlKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgICA8RXZlbnRCYXNlXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5PXt0aGlzLnN0YXRlLmRyYWdnaW5nRGlzcGxheX1cbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXlUb3A9e3RoaXMuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5VG9wfVxuICAgICAgICAgIGRpc3BsYXk9e3RoaXMuc3RhdGUuZGlzcGxheX1cbiAgICAgICAgLz5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5yZXNpemFibGUpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bFJlc2l6ZUhhbmRsZSB0bEJvdHRvbVwiIG9uVG91Y2hTdGFydD17ZSA9PiB0aGlzLnJlc2l6ZURvd24oZSl9IG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplRG93bihlKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5FdmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3BsYXk6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmFnU291cmNlKFwiRXZlbnRcIiwgc291cmNlLCBjb2xsZWN0KShFdmVudCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudC5qc3giXSwic291cmNlUm9vdCI6IiJ9