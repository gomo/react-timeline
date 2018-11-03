(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("classnames")) : factory(root["React"], root["classNames"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeSpan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Time__ = __webpack_require__(23);
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
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(50),
    getPrototype = __webpack_require__(153),
    isObjectLike = __webpack_require__(155);

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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ruler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_TimeSpan__ = __webpack_require__(3);
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var matchesType_1 = __webpack_require__(40);
var invariant = __webpack_require__(9);
var isObject = __webpack_require__(26);
exports.BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
exports.PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
exports.HOVER = 'dnd-core/HOVER';
exports.DROP = 'dnd-core/DROP';
exports.END_DRAG = 'dnd-core/END_DRAG';
function createDragDropActions(manager) {
    return {
        beginDrag: function (sourceIds, _a) {
            if (sourceIds === void 0) { sourceIds = []; }
            var _b = _a === void 0 ? {
                publishSource: true,
            } : _a, publishSource = _b.publishSource, clientOffset = _b.clientOffset, getSourceClientOffset = _b.getSourceClientOffset;
            var monitor = manager.getMonitor();
            var registry = manager.getRegistry();
            invariant(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
            for (var _i = 0, sourceIds_1 = sourceIds; _i < sourceIds_1.length; _i++) {
                var s = sourceIds_1[_i];
                invariant(registry.getSource(s), 'Expected sourceIds to be registered.');
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
                invariant(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
                sourceClientOffset = getSourceClientOffset(sourceId);
            }
            var source = registry.getSource(sourceId);
            var item = source.beginDrag(monitor, sourceId);
            invariant(isObject(item), 'Item must be an object.');
            registry.pinSource(sourceId);
            var itemType = registry.getSourceType(sourceId);
            return {
                type: exports.BEGIN_DRAG,
                payload: {
                    itemType: itemType,
                    item: item,
                    sourceId: sourceId,
                    clientOffset: clientOffset || null,
                    sourceClientOffset: sourceClientOffset || null,
                    isSourcePublic: !!publishSource,
                },
            };
        },
        publishDragSource: function () {
            var monitor = manager.getMonitor();
            if (!monitor.isDragging()) {
                return;
            }
            return { type: exports.PUBLISH_DRAG_SOURCE };
        },
        hover: function (targetIdsArg, _a) {
            var clientOffset = (_a === void 0 ? {} : _a).clientOffset;
            invariant(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
            var targetIds = targetIdsArg.slice(0);
            var monitor = manager.getMonitor();
            var registry = manager.getRegistry();
            invariant(monitor.isDragging(), 'Cannot call hover while not dragging.');
            invariant(!monitor.didDrop(), 'Cannot call hover after drop.');
            // First check invariants.
            for (var i = 0; i < targetIds.length; i++) {
                var targetId = targetIds[i];
                invariant(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
                var target = registry.getTarget(targetId);
                invariant(target, 'Expected targetIds to be registered.');
            }
            var draggedItemType = monitor.getItemType();
            // Remove those targetIds that don't match the targetType.  This
            // fixes shallow isOver which would only be non-shallow because of
            // non-matching targets.
            for (var i = targetIds.length - 1; i >= 0; i--) {
                var targetId = targetIds[i];
                var targetType = registry.getTargetType(targetId);
                if (!matchesType_1.default(targetType, draggedItemType)) {
                    targetIds.splice(i, 1);
                }
            }
            // Finally call hover on all matching targets.
            for (var _i = 0, targetIds_1 = targetIds; _i < targetIds_1.length; _i++) {
                var targetId = targetIds_1[_i];
                var target = registry.getTarget(targetId);
                target.hover(monitor, targetId);
            }
            return {
                type: exports.HOVER,
                payload: {
                    targetIds: targetIds,
                    clientOffset: clientOffset || null,
                },
            };
        },
        drop: function (options) {
            if (options === void 0) { options = {}; }
            var monitor = manager.getMonitor();
            var registry = manager.getRegistry();
            invariant(monitor.isDragging(), 'Cannot call drop while not dragging.');
            invariant(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
            var targetIds = monitor
                .getTargetIds()
                .filter(monitor.canDropOnTarget, monitor);
            targetIds.reverse();
            // Multiple actions are dispatched here, which is why this doesn't return an action
            targetIds.forEach(function (targetId, index) {
                var target = registry.getTarget(targetId);
                var dropResult = target.drop(monitor, targetId);
                invariant(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');
                if (typeof dropResult === 'undefined') {
                    dropResult = index === 0 ? {} : monitor.getDropResult();
                }
                var action = {
                    type: exports.DROP,
                    payload: {
                        dropResult: __assign({}, options, dropResult),
                    },
                };
                manager.dispatch(action);
            });
        },
        endDrag: function () {
            var monitor = manager.getMonitor();
            var registry = manager.getRegistry();
            invariant(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
            var sourceId = monitor.getSourceId();
            var source = registry.getSource(sourceId, true);
            source.endDrag(monitor, sourceId);
            registry.unpinSource();
            return { type: exports.END_DRAG };
        },
    };
}
exports.default = createDragDropActions;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_SOURCE = 'dnd-core/ADD_SOURCE';
exports.ADD_TARGET = 'dnd-core/ADD_TARGET';
exports.REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
exports.REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
    return {
        type: exports.ADD_SOURCE,
        payload: {
            sourceId: sourceId,
        },
    };
}
exports.addSource = addSource;
function addTarget(targetId) {
    return {
        type: exports.ADD_TARGET,
        payload: {
            targetId: targetId,
        },
    };
}
exports.addTarget = addTarget;
function removeSource(sourceId) {
    return {
        type: exports.REMOVE_SOURCE,
        payload: {
            sourceId: sourceId,
        },
    };
}
exports.removeSource = removeSource;
function removeTarget(targetId) {
    return {
        type: exports.REMOVE_TARGET,
        payload: {
            targetId: targetId,
        },
    };
}
exports.removeTarget = removeTarget;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(74),
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(14);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(75);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
function checkDecoratorArguments(functionName, signature) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (process.env.NODE_ENV !== 'production') {
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var arg = args_1[_a];
            if (arg && arg.prototype && arg.prototype.render) {
                // tslint:disable-next-line no-console
                console.error('You seem to be applying the arguments in the wrong order. ' +
                    ("It should be " + functionName + "(" + signature + ")(Component), not the other way around. ") +
                    'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
                return;
            }
        }
    }
}
exports.default = checkDecoratorArguments;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_TimeSpan__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Frame__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Ruler__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Line__ = __webpack_require__(37);
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DragDropContext_1 = __webpack_require__(25);
exports.DragDropContext = DragDropContext_1.DragDropContext;
exports.DragDropContextProvider = DragDropContext_1.DragDropContextProvider;
var DragLayer_1 = __webpack_require__(49);
exports.DragLayer = DragLayer_1.default;
var DragSource_1 = __webpack_require__(156);
exports.DragSource = DragSource_1.default;
var DropTarget_1 = __webpack_require__(169);
exports.DropTarget = DropTarget_1.default;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var React = __webpack_require__(0);
var dnd_core_1 = __webpack_require__(60);
var checkDecoratorArguments_1 = __webpack_require__(20);
var invariant = __webpack_require__(1);
var hoistStatics = __webpack_require__(35);
var isClassComponent = __webpack_require__(36).default;
/**
 * Create the React Context
 */
exports.Consumer = (_a = React.createContext({ dragDropManager: undefined }), _a.Consumer), exports.Provider = _a.Provider;
/**
 * Creates the context object we're providing
 * @param backend
 * @param context
 */
function createChildContext(backend, context) {
    return {
        dragDropManager: dnd_core_1.createDragDropManager(backend, context),
    };
}
exports.createChildContext = createChildContext;
/**
 * A React component that provides the React-DnD context
 */
exports.DragDropContextProvider = function (_a) {
    var backend = _a.backend, context = _a.context, children = _a.children;
    var contextValue = createChildContext(backend, context);
    return React.createElement(exports.Provider, { value: contextValue }, children);
};
/**
 * Wrap the root component of your application with DragDropContext decorator to set up React DnD.
 * This lets you specify the backend, and sets up the shared DnD state behind the scenes.
 * @param backendFactory The DnD backend factory
 * @param backendContext The backend context
 */
function DragDropContext(backendFactory, backendContext) {
    checkDecoratorArguments_1.default('DragDropContext', 'backend', backendFactory);
    var childContext = createChildContext(backendFactory, backendContext);
    return function decorateContext(DecoratedComponent) {
        var Decorated = DecoratedComponent;
        var displayName = Decorated.displayName || Decorated.name || 'Component';
        var DragDropContextContainer = /** @class */ (function (_super) {
            __extends(DragDropContextContainer, _super);
            function DragDropContextContainer() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.ref = React.createRef();
                return _this;
            }
            DragDropContextContainer.prototype.getDecoratedComponentInstance = function () {
                invariant(this.ref.current, 'In order to access an instance of the decorated component it can not be a stateless component.');
                return this.ref.current;
            };
            DragDropContextContainer.prototype.getManager = function () {
                return childContext.dragDropManager;
            };
            DragDropContextContainer.prototype.render = function () {
                return (React.createElement(exports.Provider, { value: childContext },
                    React.createElement(Decorated, __assign({}, this.props, { ref: isClassComponent(Decorated) ? this.ref : undefined }))));
            };
            DragDropContextContainer.DecoratedComponent = DecoratedComponent;
            DragDropContextContainer.displayName = "DragDropContext(" + displayName + ")";
            return DragDropContextContainer;
        }(React.Component));
        return hoistStatics(DragDropContextContainer, DecoratedComponent);
    };
}
exports.DragDropContext = DragDropContext;


/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(43),
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13),
    getRawTag = __webpack_require__(76),
    objectToString = __webpack_require__(77);

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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(46),
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(112),
    isObjectLike = __webpack_require__(18);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    isObjectLike = __webpack_require__(18);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
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
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 35 */
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
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.render === 'function');
};

exports.default = isClassComponent;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Line; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_TimeSpan__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Hour__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Ruler__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LineLabel__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Timeline__ = __webpack_require__(22);
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ruler__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(4);
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HandlerRole;
(function (HandlerRole) {
    HandlerRole["SOURCE"] = "SOURCE";
    HandlerRole["TARGET"] = "TARGET";
})(HandlerRole = exports.HandlerRole || (exports.HandlerRole = {}));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function matchesType(targetType, draggedItemType) {
    if (draggedItemType === null) {
        return targetType === null;
    }
    return Array.isArray(targetType)
        ? targetType.some(function (t) { return t === draggedItemType; })
        : targetType === draggedItemType;
}
exports.default = matchesType;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.strictEquality = function (a, b) { return a === b; };
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */
function areCoordsEqual(offsetA, offsetB) {
    if (!offsetA && !offsetB) {
        return true;
    }
    else if (!offsetA || !offsetB) {
        return false;
    }
    else {
        return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
    }
}
exports.areCoordsEqual = areCoordsEqual;
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */
function areArraysEqual(a, b, isEqual) {
    if (isEqual === void 0) { isEqual = exports.strictEquality; }
    if (a.length !== b.length) {
        return false;
    }
    for (var i = 0; i < a.length; ++i) {
        if (!isEqual(a[i], b[i])) {
            return false;
        }
    }
    return true;
}
exports.areArraysEqual = areArraysEqual;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(27),
    arrayIncludes = __webpack_require__(29),
    arrayIncludesWith = __webpack_require__(30),
    arrayMap = __webpack_require__(17),
    baseUnary = __webpack_require__(45),
    cacheHas = __webpack_require__(31);

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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(71),
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    isObject = __webpack_require__(26);

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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var intersection = __webpack_require__(116);
exports.NONE = [];
exports.ALL = [];
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */
function areDirty(dirtyIds, handlerIds) {
    if (dirtyIds === exports.NONE) {
        return false;
    }
    if (dirtyIds === exports.ALL || typeof handlerIds === 'undefined') {
        return true;
    }
    return intersection(handlerIds, dirtyIds).length > 0;
}
exports.areDirty = areDirty;


/***/ }),
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var checkDecoratorArguments_1 = __webpack_require__(20);
var DragDropContext_1 = __webpack_require__(25);
var hoistStatics = __webpack_require__(35);
var isPlainObject = __webpack_require__(5);
var invariant = __webpack_require__(1);
var shallowEqual = __webpack_require__(21);
var isClassComponent = __webpack_require__(36).default;
function DragLayer(collect, options) {
    if (options === void 0) { options = {}; }
    checkDecoratorArguments_1.default('DragLayer', 'collect[, options]', collect, options);
    invariant(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', collect);
    invariant(isPlainObject(options), 'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. ' +
        'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', options);
    return function decorateLayer(DecoratedComponent) {
        var Decorated = DecoratedComponent;
        var _a = options.arePropsEqual, arePropsEqual = _a === void 0 ? shallowEqual : _a;
        var displayName = Decorated.displayName || Decorated.name || 'Component';
        var DragLayerContainer = /** @class */ (function (_super) {
            __extends(DragLayerContainer, _super);
            function DragLayerContainer(props) {
                var _this = _super.call(this, props) || this;
                _this.isCurrentlyMounted = false;
                _this.ref = React.createRef();
                _this.handleChange = _this.handleChange.bind(_this);
                return _this;
            }
            Object.defineProperty(DragLayerContainer.prototype, "DecoratedComponent", {
                get: function () {
                    return DecoratedComponent;
                },
                enumerable: true,
                configurable: true
            });
            DragLayerContainer.prototype.getDecoratedComponentInstance = function () {
                invariant(this.ref.current, 'In order to access an instance of the decorated component it can not be a stateless component.');
                return this.ref.current;
            };
            DragLayerContainer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
                return (!arePropsEqual(nextProps, this.props) ||
                    !shallowEqual(nextState, this.state));
            };
            DragLayerContainer.prototype.componentDidMount = function () {
                this.isCurrentlyMounted = true;
                this.handleChange();
            };
            DragLayerContainer.prototype.componentWillUnmount = function () {
                this.isCurrentlyMounted = false;
                if (this.unsubscribeFromOffsetChange) {
                    this.unsubscribeFromOffsetChange();
                    this.unsubscribeFromOffsetChange = undefined;
                }
                if (this.unsubscribeFromStateChange) {
                    this.unsubscribeFromStateChange();
                    this.unsubscribeFromStateChange = undefined;
                }
            };
            DragLayerContainer.prototype.render = function () {
                var _this = this;
                return (React.createElement(DragDropContext_1.Consumer, null, function (_a) {
                    var dragDropManager = _a.dragDropManager;
                    if (dragDropManager === undefined) {
                        return null;
                    }
                    _this.receiveDragDropManager(dragDropManager);
                    // Let componentDidMount fire to initialize the collected state
                    if (!_this.isCurrentlyMounted) {
                        return null;
                    }
                    return (React.createElement(Decorated, __assign({}, _this.props, _this.state, { ref: isClassComponent(Decorated) ? _this.ref : undefined })));
                }));
            };
            DragLayerContainer.prototype.receiveDragDropManager = function (dragDropManager) {
                if (this.manager !== undefined) {
                    return;
                }
                this.manager = dragDropManager;
                invariant(typeof dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' +
                    'Make sure to wrap the top-level component of your app with DragDropContext. ' +
                    'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
                var monitor = this.manager.getMonitor();
                this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
                this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);
            };
            DragLayerContainer.prototype.handleChange = function () {
                if (!this.isCurrentlyMounted) {
                    return;
                }
                var nextState = this.getCurrentState();
                if (!shallowEqual(nextState, this.state)) {
                    this.setState(nextState);
                }
            };
            DragLayerContainer.prototype.getCurrentState = function () {
                if (!this.manager) {
                    return {};
                }
                var monitor = this.manager.getMonitor();
                return collect(monitor, this.props);
            };
            DragLayerContainer.displayName = "DragLayer(" + displayName + ")";
            return DragLayerContainer;
        }(React.Component));
        return hoistStatics(DragLayerContainer, DecoratedComponent);
    };
}
exports.default = DragLayer;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(51),
    getRawTag = __webpack_require__(151),
    objectToString = __webpack_require__(152);

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(149);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var DragDropContext_1 = __webpack_require__(25);
var disposables_1 = __webpack_require__(157);
var isClassComponent = __webpack_require__(36).default;
var isPlainObject = __webpack_require__(5);
var invariant = __webpack_require__(1);
var hoistStatics = __webpack_require__(35);
var shallowEqual = __webpack_require__(21);
function decorateHandler(_a) {
    var DecoratedComponent = _a.DecoratedComponent, createHandler = _a.createHandler, createMonitor = _a.createMonitor, createConnector = _a.createConnector, registerHandler = _a.registerHandler, containerDisplayName = _a.containerDisplayName, getType = _a.getType, collect = _a.collect, options = _a.options;
    var _b = options.arePropsEqual, arePropsEqual = _b === void 0 ? shallowEqual : _b;
    var Decorated = DecoratedComponent;
    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
    var DragDropContainer = /** @class */ (function (_super) {
        __extends(DragDropContainer, _super);
        function DragDropContainer(props) {
            var _this = _super.call(this, props) || this;
            _this.isCurrentlyMounted = false;
            _this.handleChange = _this.handleChange.bind(_this);
            _this.disposable = new disposables_1.SerialDisposable();
            _this.receiveProps(props);
            _this.dispose();
            return _this;
        }
        DragDropContainer.prototype.getHandlerId = function () {
            return this.handlerId;
        };
        DragDropContainer.prototype.getDecoratedComponentInstance = function () {
            if (!this.handler) {
                return null;
            }
            return this.handler.ref.current;
        };
        DragDropContainer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
            return (!arePropsEqual(nextProps, this.props) ||
                !shallowEqual(nextState, this.state));
        };
        DragDropContainer.prototype.componentDidMount = function () {
            this.isCurrentlyMounted = true;
            this.disposable = new disposables_1.SerialDisposable();
            this.currentType = undefined;
            this.receiveProps(this.props);
            this.handleChange();
        };
        DragDropContainer.prototype.componentDidUpdate = function (prevProps) {
            if (!arePropsEqual(this.props, prevProps)) {
                this.receiveProps(this.props);
                this.handleChange();
            }
        };
        DragDropContainer.prototype.componentWillUnmount = function () {
            this.dispose();
            this.isCurrentlyMounted = false;
        };
        DragDropContainer.prototype.receiveProps = function (props) {
            if (!this.handler) {
                return;
            }
            this.handler.receiveProps(props);
            this.receiveType(getType(props));
        };
        DragDropContainer.prototype.receiveType = function (type) {
            if (!this.handlerMonitor || !this.manager || !this.handlerConnector) {
                return;
            }
            if (type === this.currentType) {
                return;
            }
            this.currentType = type;
            var _a = registerHandler(type, this.handler, this.manager), handlerId = _a.handlerId, unregister = _a.unregister;
            this.handlerId = handlerId;
            this.handlerMonitor.receiveHandlerId(handlerId);
            this.handlerConnector.receiveHandlerId(handlerId);
            var globalMonitor = this.manager.getMonitor();
            var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });
            this.disposable.setDisposable(new disposables_1.CompositeDisposable(new disposables_1.Disposable(unsubscribe), new disposables_1.Disposable(unregister)));
        };
        DragDropContainer.prototype.handleChange = function () {
            if (!this.isCurrentlyMounted) {
                return;
            }
            var nextState = this.getCurrentState();
            if (!shallowEqual(nextState, this.state)) {
                this.setState(nextState);
            }
        };
        DragDropContainer.prototype.dispose = function () {
            this.disposable.dispose();
            if (this.handlerConnector) {
                this.handlerConnector.receiveHandlerId(null);
            }
        };
        DragDropContainer.prototype.getCurrentState = function () {
            if (!this.handlerConnector) {
                return {};
            }
            var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);
            if (process.env.NODE_ENV !== 'production') {
                invariant(isPlainObject(nextState), 'Expected `collect` specified as the second argument to ' +
                    '%s for %s to return a plain object of props to inject. ' +
                    'Instead, received %s.', containerDisplayName, displayName, nextState);
            }
            return nextState;
        };
        DragDropContainer.prototype.render = function () {
            var _this = this;
            return (React.createElement(DragDropContext_1.Consumer, null, function (_a) {
                var dragDropManager = _a.dragDropManager;
                if (dragDropManager === undefined) {
                    return null;
                }
                _this.receiveDragDropManager(dragDropManager);
                // Let componentDidMount fire to initialize the collected state
                if (!_this.isCurrentlyMounted) {
                    return null;
                }
                return (React.createElement(Decorated, __assign({}, _this.props, _this.state, { ref: _this.handler && isClassComponent(Decorated)
                        ? _this.handler.ref
                        : undefined })));
            }));
        };
        DragDropContainer.prototype.receiveDragDropManager = function (dragDropManager) {
            if (this.manager !== undefined) {
                return;
            }
            this.manager = dragDropManager;
            invariant(typeof dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' +
                'Make sure to wrap the top-level component of your app with DragDropContext. ' +
                'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
            this.handlerMonitor = createMonitor(dragDropManager);
            this.handlerConnector = createConnector(dragDropManager.getBackend());
            this.handler = createHandler(this.handlerMonitor);
        };
        DragDropContainer.DecoratedComponent = DecoratedComponent;
        DragDropContainer.displayName = containerDisplayName + "(" + displayName + ")";
        return DragDropContainer;
    }(React.Component));
    return hoistStatics(DragDropContainer, DecoratedComponent);
}
exports.default = decorateHandler;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var cloneWithRef_1 = __webpack_require__(168);
function throwIfCompositeComponentElement(element) {
    // Custom components can no longer be wrapped directly in React DnD 2.0
    // so that we don't need to depend on findDOMNode() from react-dom.
    if (typeof element.type === 'string') {
        return;
    }
    var displayName = element.type.displayName || element.type.name || 'the component';
    throw new Error('Only native element nodes can now be passed to React DnD connectors.' +
        ("You can either wrap " + displayName + " into a <div>, or turn it into a ") +
        'drag source or a drop target itself.');
}
function wrapHookToRecognizeElement(hook) {
    return function (elementOrNode, options) {
        if (elementOrNode === void 0) { elementOrNode = null; }
        if (options === void 0) { options = null; }
        // When passed a node, call the hook straight away.
        if (!react_1.isValidElement(elementOrNode)) {
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
        var ref = options ? function (node) { return hook(node, options); } : hook;
        return cloneWithRef_1.default(element, ref);
    };
}
function wrapConnectorHooks(hooks) {
    var wrappedHooks = {};
    Object.keys(hooks).forEach(function (key) {
        var hook = hooks[key];
        var wrappedHook = wrapHookToRecognizeElement(hook);
        wrappedHooks[key] = function () { return wrappedHook; };
    });
    return wrappedHooks;
}
exports.default = wrapConnectorHooks;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isValidType(type, allowArray) {
    return (typeof type === 'string' ||
        typeof type === 'symbol' ||
        (!!allowArray &&
            Array.isArray(type) &&
            type.every(function (t) { return isValidType(t, false); })));
}
exports.default = isValidType;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(177);
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
/* 56 */
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
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Timeline__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Time__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_TimeSpan__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Timeline__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return __WEBPACK_IMPORTED_MODULE_1__classes_Time__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSpan", function() { return __WEBPACK_IMPORTED_MODULE_2__classes_TimeSpan__["a"]; });





/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_TimeSpan__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Line__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dnd__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dnd_touch_backend__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dnd_touch_backend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dnd_touch_backend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__EventPreview__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Event__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Ruler__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__LineLabel__ = __webpack_require__(38);
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
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hour; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Time__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(4);
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(39));
__export(__webpack_require__(61));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DragDropManagerImpl_1 = __webpack_require__(62);
function createDragDropManager(backend, context) {
    return new DragDropManagerImpl_1.default(backend, context);
}
exports.createDragDropManager = createDragDropManager;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(63);
var reducers_1 = __webpack_require__(67);
var dragDrop_1 = __webpack_require__(8);
var DragDropMonitorImpl_1 = __webpack_require__(142);
var HandlerRegistryImpl_1 = __webpack_require__(144);
var DragDropManagerImpl = /** @class */ (function () {
    function DragDropManagerImpl(createBackend, context) {
        if (context === void 0) { context = {}; }
        this.context = context;
        this.isSetUp = false;
        var store = redux_1.createStore(reducers_1.default);
        this.store = store;
        this.monitor = new DragDropMonitorImpl_1.default(store, new HandlerRegistryImpl_1.default(store));
        this.backend = createBackend(this);
        store.subscribe(this.handleRefCountChange.bind(this));
    }
    DragDropManagerImpl.prototype.getContext = function () {
        return this.context;
    };
    DragDropManagerImpl.prototype.getMonitor = function () {
        return this.monitor;
    };
    DragDropManagerImpl.prototype.getBackend = function () {
        return this.backend;
    };
    DragDropManagerImpl.prototype.getRegistry = function () {
        return this.monitor.registry;
    };
    DragDropManagerImpl.prototype.getActions = function () {
        var manager = this;
        var dispatch = this.store.dispatch;
        function bindActionCreator(actionCreator) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var action = actionCreator.apply(manager, args);
                if (typeof action !== 'undefined') {
                    dispatch(action);
                }
            };
        }
        var actions = dragDrop_1.default(this);
        return Object.keys(actions).reduce(function (boundActions, key) {
            var action = actions[key];
            boundActions[key] = bindActionCreator(action);
            return boundActions;
        }, {});
    };
    DragDropManagerImpl.prototype.dispatch = function (action) {
        this.store.dispatch(action);
    };
    DragDropManagerImpl.prototype.handleRefCountChange = function () {
        var shouldSetUp = this.store.getState().refCount > 0;
        if (shouldSetUp && !this.isSetUp) {
            this.backend.setup();
            this.isSetUp = true;
        }
        else if (!shouldSetUp && this.isSetUp) {
            this.backend.teardown();
            this.isSetUp = false;
        }
    };
    return DragDropManagerImpl;
}());
exports.default = DragDropManagerImpl;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__(64);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

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

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

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
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

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
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
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
    if (!isPlainObject(action)) {
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
    dispatch({
      type: ActionTypes.REPLACE
    });
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
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(66);
/* global window */


var root;

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

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(7), __webpack_require__(65)(module)))

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
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
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
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


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dragOffset_1 = __webpack_require__(68);
var dragOperation_1 = __webpack_require__(69);
var refCount_1 = __webpack_require__(114);
var dirtyHandlerIds_1 = __webpack_require__(115);
var stateId_1 = __webpack_require__(131);
var get = __webpack_require__(132);
function reduce(state, action) {
    if (state === void 0) { state = {}; }
    return {
        dirtyHandlerIds: dirtyHandlerIds_1.default(state.dirtyHandlerIds, {
            type: action.type,
            payload: __assign({}, action.payload, { prevTargetIds: get(state, 'dragOperation.targetIds', []) }),
        }),
        dragOffset: dragOffset_1.default(state.dragOffset, action),
        refCount: refCount_1.default(state.refCount, action),
        dragOperation: dragOperation_1.default(state.dragOperation, action),
        stateId: stateId_1.default(state.stateId),
    };
}
exports.default = reduce;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dragDrop_1 = __webpack_require__(8);
var equality_1 = __webpack_require__(41);
var initialState = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null,
};
function dragOffset(state, action) {
    if (state === void 0) { state = initialState; }
    var payload = action.payload;
    switch (action.type) {
        case dragDrop_1.BEGIN_DRAG:
            return {
                initialSourceClientOffset: payload.sourceClientOffset,
                initialClientOffset: payload.clientOffset,
                clientOffset: payload.clientOffset,
            };
        case dragDrop_1.HOVER:
            if (equality_1.areCoordsEqual(state.clientOffset, payload.clientOffset)) {
                return state;
            }
            return __assign({}, state, { clientOffset: payload.clientOffset });
        case dragDrop_1.END_DRAG:
        case dragDrop_1.DROP:
            return initialState;
        default:
            return state;
    }
}
exports.default = dragOffset;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dragDrop_1 = __webpack_require__(8);
var registry_1 = __webpack_require__(10);
var without = __webpack_require__(70);
var initialState = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: false,
    isSourcePublic: null,
};
function dragOperation(state, action) {
    if (state === void 0) { state = initialState; }
    var payload = action.payload;
    switch (action.type) {
        case dragDrop_1.BEGIN_DRAG:
            return __assign({}, state, { itemType: payload.itemType, item: payload.item, sourceId: payload.sourceId, isSourcePublic: payload.isSourcePublic, dropResult: null, didDrop: false });
        case dragDrop_1.PUBLISH_DRAG_SOURCE:
            return __assign({}, state, { isSourcePublic: true });
        case dragDrop_1.HOVER:
            return __assign({}, state, { targetIds: payload.targetIds });
        case registry_1.REMOVE_TARGET:
            if (state.targetIds.indexOf(payload.targetId) === -1) {
                return state;
            }
            return __assign({}, state, { targetIds: without(state.targetIds, payload.targetId) });
        case dragDrop_1.DROP:
            return __assign({}, state, { dropResult: payload.dropResult, didDrop: true, targetIds: [] });
        case dragDrop_1.END_DRAG:
            return __assign({}, state, { itemType: null, item: null, sourceId: null, dropResult: null, didDrop: false, isSourcePublic: null, targetIds: [] });
        default:
            return state;
    }
}
exports.default = dragOperation;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(42),
    baseRest = __webpack_require__(32),
    isArrayLikeObject = __webpack_require__(33);

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(72),
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(73),
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(11);

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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(44),
    isMasked = __webpack_require__(78),
    isObject = __webpack_require__(26),
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13);

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
/* 77 */
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

var root = __webpack_require__(14);

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

var nativeCreate = __webpack_require__(11);

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

var nativeCreate = __webpack_require__(11);

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

var nativeCreate = __webpack_require__(11);

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

var assocIndexOf = __webpack_require__(15);

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

var assocIndexOf = __webpack_require__(15);

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

var assocIndexOf = __webpack_require__(15);

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

var assocIndexOf = __webpack_require__(15);

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

var getNative = __webpack_require__(12),
    root = __webpack_require__(14);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(16);

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

var getMapData = __webpack_require__(16);

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

var getMapData = __webpack_require__(16);

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

var getMapData = __webpack_require__(16);

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
    identity = __webpack_require__(46);

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

var getNative = __webpack_require__(12);

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

var isFunction = __webpack_require__(44),
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

Object.defineProperty(exports, "__esModule", { value: true });
var registry_1 = __webpack_require__(10);
function refCount(state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case registry_1.ADD_SOURCE:
        case registry_1.ADD_TARGET:
            return state + 1;
        case registry_1.REMOVE_SOURCE:
        case registry_1.REMOVE_TARGET:
            return state - 1;
        default:
            return state;
    }
}
exports.default = refCount;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dragDrop_1 = __webpack_require__(8);
var registry_1 = __webpack_require__(10);
var equality_1 = __webpack_require__(41);
var dirtiness_1 = __webpack_require__(47);
var xor = __webpack_require__(119);
function dirtyHandlerIds(state, action) {
    if (state === void 0) { state = dirtiness_1.NONE; }
    switch (action.type) {
        case dragDrop_1.HOVER:
            break;
        case registry_1.ADD_SOURCE:
        case registry_1.ADD_TARGET:
        case registry_1.REMOVE_TARGET:
        case registry_1.REMOVE_SOURCE:
            return dirtiness_1.NONE;
        case dragDrop_1.BEGIN_DRAG:
        case dragDrop_1.PUBLISH_DRAG_SOURCE:
        case dragDrop_1.END_DRAG:
        case dragDrop_1.DROP:
        default:
            return dirtiness_1.ALL;
    }
    var _a = action.payload, _b = _a.targetIds, targetIds = _b === void 0 ? [] : _b, _c = _a.prevTargetIds, prevTargetIds = _c === void 0 ? [] : _c;
    var result = xor(targetIds, prevTargetIds);
    var didChange = result.length > 0 || !equality_1.areArraysEqual(targetIds, prevTargetIds);
    if (!didChange) {
        return dirtiness_1.NONE;
    }
    // Check the target ids at the innermost position. If they are valid, add them
    // to the result
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
exports.default = dirtyHandlerIds;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(17),
    baseIntersection = __webpack_require__(117),
    baseRest = __webpack_require__(32),
    castArrayLikeObject = __webpack_require__(118);

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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(27),
    arrayIncludes = __webpack_require__(29),
    arrayIncludesWith = __webpack_require__(30),
    arrayMap = __webpack_require__(17),
    baseUnary = __webpack_require__(45),
    cacheHas = __webpack_require__(31);

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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(33);

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
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(120),
    baseRest = __webpack_require__(32),
    baseXor = __webpack_require__(121),
    isArrayLikeObject = __webpack_require__(33);

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
/* 120 */
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(42),
    baseFlatten = __webpack_require__(122),
    baseUniq = __webpack_require__(127);

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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(123),
    isFlattenable = __webpack_require__(124);

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
/* 123 */
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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13),
    isArguments = __webpack_require__(125),
    isArray = __webpack_require__(19);

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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(126),
    isObjectLike = __webpack_require__(18);

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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    isObjectLike = __webpack_require__(18);

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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(27),
    arrayIncludes = __webpack_require__(29),
    arrayIncludesWith = __webpack_require__(30),
    cacheHas = __webpack_require__(31),
    createSet = __webpack_require__(128),
    setToArray = __webpack_require__(48);

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
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(129),
    noop = __webpack_require__(130),
    setToArray = __webpack_require__(48);

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
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12),
    root = __webpack_require__(14);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 130 */
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
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function stateId(state) {
    if (state === void 0) { state = 0; }
    return state + 1;
}
exports.default = stateId;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(133);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(134),
    toKey = __webpack_require__(141);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(19),
    isKey = __webpack_require__(135),
    stringToPath = __webpack_require__(136),
    toString = __webpack_require__(139);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(19),
    isSymbol = __webpack_require__(34);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(137);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(138);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(43);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(140);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13),
    arrayMap = __webpack_require__(17),
    isArray = __webpack_require__(19),
    isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var matchesType_1 = __webpack_require__(40);
var coords_1 = __webpack_require__(143);
var dirtiness_1 = __webpack_require__(47);
var invariant = __webpack_require__(9);
var DragDropMonitorImpl = /** @class */ (function () {
    function DragDropMonitorImpl(store, registry) {
        this.store = store;
        this.registry = registry;
    }
    DragDropMonitorImpl.prototype.subscribeToStateChange = function (listener, options) {
        var _this = this;
        if (options === void 0) { options = { handlerIds: undefined }; }
        var handlerIds = options.handlerIds;
        invariant(typeof listener === 'function', 'listener must be a function.');
        invariant(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
        var prevStateId = this.store.getState().stateId;
        var handleChange = function () {
            var state = _this.store.getState();
            var currentStateId = state.stateId;
            try {
                var canSkipListener = currentStateId === prevStateId ||
                    (currentStateId === prevStateId + 1 &&
                        !dirtiness_1.areDirty(state.dirtyHandlerIds, handlerIds));
                if (!canSkipListener) {
                    listener();
                }
            }
            finally {
                prevStateId = currentStateId;
            }
        };
        return this.store.subscribe(handleChange);
    };
    DragDropMonitorImpl.prototype.subscribeToOffsetChange = function (listener) {
        var _this = this;
        invariant(typeof listener === 'function', 'listener must be a function.');
        var previousState = this.store.getState().dragOffset;
        var handleChange = function () {
            var nextState = _this.store.getState().dragOffset;
            if (nextState === previousState) {
                return;
            }
            previousState = nextState;
            listener();
        };
        return this.store.subscribe(handleChange);
    };
    DragDropMonitorImpl.prototype.canDragSource = function (sourceId) {
        var source = this.registry.getSource(sourceId);
        invariant(source, 'Expected to find a valid source.');
        if (this.isDragging()) {
            return false;
        }
        return source.canDrag(this, sourceId);
    };
    DragDropMonitorImpl.prototype.canDropOnTarget = function (targetId) {
        var target = this.registry.getTarget(targetId);
        invariant(target, 'Expected to find a valid target.');
        if (!this.isDragging() || this.didDrop()) {
            return false;
        }
        var targetType = this.registry.getTargetType(targetId);
        var draggedItemType = this.getItemType();
        return (matchesType_1.default(targetType, draggedItemType) && target.canDrop(this, targetId));
    };
    DragDropMonitorImpl.prototype.isDragging = function () {
        return Boolean(this.getItemType());
    };
    DragDropMonitorImpl.prototype.isDraggingSource = function (sourceId) {
        var source = this.registry.getSource(sourceId, true);
        invariant(source, 'Expected to find a valid source.');
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
    DragDropMonitorImpl.prototype.isOverTarget = function (targetId, options) {
        if (options === void 0) { options = { shallow: false }; }
        var shallow = options.shallow;
        if (!this.isDragging()) {
            return false;
        }
        var targetType = this.registry.getTargetType(targetId);
        var draggedItemType = this.getItemType();
        if (draggedItemType && !matchesType_1.default(targetType, draggedItemType)) {
            return false;
        }
        var targetIds = this.getTargetIds();
        if (!targetIds.length) {
            return false;
        }
        var index = targetIds.indexOf(targetId);
        if (shallow) {
            return index === targetIds.length - 1;
        }
        else {
            return index > -1;
        }
    };
    DragDropMonitorImpl.prototype.getItemType = function () {
        return this.store.getState().dragOperation.itemType;
    };
    DragDropMonitorImpl.prototype.getItem = function () {
        return this.store.getState().dragOperation.item;
    };
    DragDropMonitorImpl.prototype.getSourceId = function () {
        return this.store.getState().dragOperation.sourceId;
    };
    DragDropMonitorImpl.prototype.getTargetIds = function () {
        return this.store.getState().dragOperation.targetIds;
    };
    DragDropMonitorImpl.prototype.getDropResult = function () {
        return this.store.getState().dragOperation.dropResult;
    };
    DragDropMonitorImpl.prototype.didDrop = function () {
        return this.store.getState().dragOperation.didDrop;
    };
    DragDropMonitorImpl.prototype.isSourcePublic = function () {
        return this.store.getState().dragOperation.isSourcePublic;
    };
    DragDropMonitorImpl.prototype.getInitialClientOffset = function () {
        return this.store.getState().dragOffset.initialClientOffset;
    };
    DragDropMonitorImpl.prototype.getInitialSourceClientOffset = function () {
        return this.store.getState().dragOffset.initialSourceClientOffset;
    };
    DragDropMonitorImpl.prototype.getClientOffset = function () {
        return this.store.getState().dragOffset.clientOffset;
    };
    DragDropMonitorImpl.prototype.getSourceClientOffset = function () {
        return coords_1.getSourceClientOffset(this.store.getState().dragOffset);
    };
    DragDropMonitorImpl.prototype.getDifferenceFromInitialOffset = function () {
        return coords_1.getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    };
    return DragDropMonitorImpl;
}());
exports.default = DragDropMonitorImpl;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */
function add(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y,
    };
}
exports.add = add;
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */
function subtract(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y,
    };
}
exports.subtract = subtract;
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */
function getSourceClientOffset(state) {
    var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset, initialSourceClientOffset = state.initialSourceClientOffset;
    if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
        return null;
    }
    return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
exports.getSourceClientOffset = getSourceClientOffset;
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */
function getDifferenceFromInitialOffset(state) {
    var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset;
    if (!clientOffset || !initialClientOffset) {
        return null;
    }
    return subtract(clientOffset, initialClientOffset);
}
exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var registry_1 = __webpack_require__(10);
var getNextUniqueId_1 = __webpack_require__(145);
var interfaces_1 = __webpack_require__(39);
var contracts_1 = __webpack_require__(146);
var invariant = __webpack_require__(9);
var asap = __webpack_require__(147);
function getNextHandlerId(role) {
    var id = getNextUniqueId_1.default().toString();
    switch (role) {
        case interfaces_1.HandlerRole.SOURCE:
            return "S" + id;
        case interfaces_1.HandlerRole.TARGET:
            return "T" + id;
        default:
            throw new Error("Unknown Handler Role: " + role);
    }
}
function parseRoleFromHandlerId(handlerId) {
    switch (handlerId[0]) {
        case 'S':
            return interfaces_1.HandlerRole.SOURCE;
        case 'T':
            return interfaces_1.HandlerRole.TARGET;
        default:
            invariant(false, "Cannot parse handler ID: " + handlerId);
    }
}
function mapContainsValue(map, searchValue) {
    var entries = map.entries();
    var isDone = false;
    do {
        var _a = entries.next(), done = _a.done, _b = _a.value, value = _b[1];
        if (value === searchValue) {
            return true;
        }
        isDone = done;
    } while (!isDone);
    return false;
}
var HandlerRegistryImpl = /** @class */ (function () {
    function HandlerRegistryImpl(store) {
        this.store = store;
        this.types = new Map();
        this.dragSources = new Map();
        this.dropTargets = new Map();
        this.pinnedSourceId = null;
        this.pinnedSource = null;
    }
    HandlerRegistryImpl.prototype.addSource = function (type, source) {
        contracts_1.validateType(type);
        contracts_1.validateSourceContract(source);
        var sourceId = this.addHandler(interfaces_1.HandlerRole.SOURCE, type, source);
        this.store.dispatch(registry_1.addSource(sourceId));
        return sourceId;
    };
    HandlerRegistryImpl.prototype.addTarget = function (type, target) {
        contracts_1.validateType(type, true);
        contracts_1.validateTargetContract(target);
        var targetId = this.addHandler(interfaces_1.HandlerRole.TARGET, type, target);
        this.store.dispatch(registry_1.addTarget(targetId));
        return targetId;
    };
    HandlerRegistryImpl.prototype.containsHandler = function (handler) {
        return (mapContainsValue(this.dragSources, handler) ||
            mapContainsValue(this.dropTargets, handler));
    };
    HandlerRegistryImpl.prototype.getSource = function (sourceId, includePinned) {
        if (includePinned === void 0) { includePinned = false; }
        invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
        var isPinned = includePinned && sourceId === this.pinnedSourceId;
        var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
        return source;
    };
    HandlerRegistryImpl.prototype.getTarget = function (targetId) {
        invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.dropTargets.get(targetId);
    };
    HandlerRegistryImpl.prototype.getSourceType = function (sourceId) {
        invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
        return this.types.get(sourceId);
    };
    HandlerRegistryImpl.prototype.getTargetType = function (targetId) {
        invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.types.get(targetId);
    };
    HandlerRegistryImpl.prototype.isSourceId = function (handlerId) {
        var role = parseRoleFromHandlerId(handlerId);
        return role === interfaces_1.HandlerRole.SOURCE;
    };
    HandlerRegistryImpl.prototype.isTargetId = function (handlerId) {
        var role = parseRoleFromHandlerId(handlerId);
        return role === interfaces_1.HandlerRole.TARGET;
    };
    HandlerRegistryImpl.prototype.removeSource = function (sourceId) {
        var _this = this;
        invariant(this.getSource(sourceId), 'Expected an existing source.');
        this.store.dispatch(registry_1.removeSource(sourceId));
        asap(function () {
            _this.dragSources.delete(sourceId);
            _this.types.delete(sourceId);
        });
    };
    HandlerRegistryImpl.prototype.removeTarget = function (targetId) {
        invariant(this.getTarget(targetId), 'Expected an existing target.');
        this.store.dispatch(registry_1.removeTarget(targetId));
        this.dropTargets.delete(targetId);
        this.types.delete(targetId);
    };
    HandlerRegistryImpl.prototype.pinSource = function (sourceId) {
        var source = this.getSource(sourceId);
        invariant(source, 'Expected an existing source.');
        this.pinnedSourceId = sourceId;
        this.pinnedSource = source;
    };
    HandlerRegistryImpl.prototype.unpinSource = function () {
        invariant(this.pinnedSource, 'No source is pinned at the time.');
        this.pinnedSourceId = null;
        this.pinnedSource = null;
    };
    HandlerRegistryImpl.prototype.addHandler = function (role, type, handler) {
        var id = getNextHandlerId(role);
        this.types.set(id, type);
        if (role === interfaces_1.HandlerRole.SOURCE) {
            this.dragSources.set(id, handler);
        }
        else if (role === interfaces_1.HandlerRole.TARGET) {
            this.dropTargets.set(id, handler);
        }
        return id;
    };
    return HandlerRegistryImpl;
}());
exports.default = HandlerRegistryImpl;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nextUniqueId = 0;
function getNextUniqueId() {
    return nextUniqueId++;
}
exports.default = getNextUniqueId;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invariant = __webpack_require__(9);
function validateSourceContract(source) {
    invariant(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
    invariant(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
    invariant(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
exports.validateSourceContract = validateSourceContract;
function validateTargetContract(target) {
    invariant(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
    invariant(typeof target.hover === 'function', 'Expected hover to be a function.');
    invariant(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
exports.validateTargetContract = validateTargetContract;
function validateType(type, allowArray) {
    if (allowArray && Array.isArray(type)) {
        type.forEach(function (t) { return validateType(t, false); });
        return;
    }
    invariant(typeof type === 'string' || typeof type === 'symbol', allowArray
        ? 'Type can only be a string, a symbol, or an array of either.'
        : 'Type can only be a string or a symbol.');
}
exports.validateType = validateType;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(148);
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
/* 148 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(150);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(51);

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
/* 152 */
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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(154);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 154 */
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
/* 155 */
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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checkDecoratorArguments_1 = __webpack_require__(20);
var decorateHandler_1 = __webpack_require__(52);
var registerSource_1 = __webpack_require__(164);
var createSourceFactory_1 = __webpack_require__(165);
var createSourceMonitor_1 = __webpack_require__(166);
var createSourceConnector_1 = __webpack_require__(167);
var isValidType_1 = __webpack_require__(54);
var invariant = __webpack_require__(1);
var isPlainObject = __webpack_require__(5);
/**
 * Decorates a component as a dragsource
 * @param type The dragsource type
 * @param spec The drag source specification
 * @param collect The props collector function
 * @param options DnD optinos
 */
function DragSource(type, spec, collect, options) {
    if (options === void 0) { options = {}; }
    checkDecoratorArguments_1.default('DragSource', 'type, spec, collect[, options]', type, spec, collect, options);
    var getType = type;
    if (typeof type !== 'function') {
        invariant(isValidType_1.default(type), 'Expected "type" provided as the first argument to DragSource to be ' +
            'a string, or a function that returns a string given the current props. ' +
            'Instead, received %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', type);
        getType = function () { return type; };
    }
    invariant(isPlainObject(spec), 'Expected "spec" provided as the second argument to DragSource to be ' +
        'a plain object. Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', spec);
    var createSource = createSourceFactory_1.default(spec);
    invariant(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' +
        'a function that returns a plain object of props to inject. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);
    invariant(isPlainObject(options), 'Expected "options" provided as the fourth argument to DragSource to be ' +
        'a plain object when specified. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);
    return function decorateSource(DecoratedComponent) {
        return decorateHandler_1.default({
            containerDisplayName: 'DragSource',
            createHandler: createSource,
            registerHandler: registerSource_1.default,
            createMonitor: createSourceMonitor_1.default,
            createConnector: createSourceConnector_1.default,
            DecoratedComponent: DecoratedComponent,
            getType: getType,
            collect: collect,
            options: options,
        });
    };
}
exports.default = DragSource;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(158));
__export(__webpack_require__(162));
__export(__webpack_require__(163));


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isFunction = __webpack_require__(159);
var noop = __webpack_require__(161);
/**
 * Provides a set of static methods for creating Disposables.
 * @param {Function} action Action to run during the first call to dispose.
 * The action is guaranteed to be run at most once.
 */
var Disposable = /** @class */ (function () {
    function Disposable(action) {
        this.isDisposed = false;
        this.action = isFunction(action) ? action : noop;
    }
    /**
     * Validates whether the given object is a disposable
     * @param {Object} Object to test whether it has a dispose method
     * @returns {Boolean} true if a disposable object, else false.
     */
    Disposable.isDisposable = function (d) {
        return d && isFunction(d.dispose);
    };
    Disposable._fixup = function (result) {
        return Disposable.isDisposable(result) ? result : Disposable.empty;
    };
    /**
     * Creates a disposable object that invokes the specified action when disposed.
     * @param {Function} dispose Action to run during the first call to dispose.
     * The action is guaranteed to be run at most once.
     * @return {Disposable} The disposable object that runs the given action upon disposal.
     */
    Disposable.create = function (action) {
        return new Disposable(action);
    };
    /** Performs the task of cleaning up resources. */
    Disposable.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.action();
            this.isDisposed = true;
        }
    };
    /**
     * Gets the disposable that does nothing when disposed.
     */
    Disposable.empty = { dispose: noop };
    return Disposable;
}());
exports.Disposable = Disposable;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(50),
    isObject = __webpack_require__(160);

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
/* 160 */
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
/* 161 */
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a disposable resource whose underlying disposable resource can
 * be replaced by another disposable resource, causing automatic disposal of
 * the previous underlying disposable resource.
 */
var SerialDisposable = /** @class */ (function () {
    function SerialDisposable() {
        this.isDisposed = false;
    }
    /**
     * Gets the underlying disposable.
     * @returns {Any} the underlying disposable.
     */
    SerialDisposable.prototype.getDisposable = function () {
        return this.current;
    };
    SerialDisposable.prototype.setDisposable = function (value) {
        var shouldDispose = this.isDisposed;
        if (!shouldDispose) {
            var old = this.current;
            this.current = value;
            if (old) {
                old.dispose();
            }
        }
        if (shouldDispose && value) {
            value.dispose();
        }
    };
    /** Performs the task of cleaning up resources. */
    SerialDisposable.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            var old = this.current;
            this.current = undefined;
            if (old) {
                old.dispose();
            }
        }
    };
    return SerialDisposable;
}());
exports.SerialDisposable = SerialDisposable;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a group of disposable resources that are disposed together.
 * @constructor
 */
var CompositeDisposable = /** @class */ (function () {
    function CompositeDisposable() {
        var disposables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            disposables[_i] = arguments[_i];
        }
        this.isDisposed = false;
        this.disposables = disposables;
    }
    /**
     * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
     * @param {Any} item Disposable to add.
     */
    CompositeDisposable.prototype.add = function (item) {
        if (this.isDisposed) {
            item.dispose();
        }
        else {
            this.disposables.push(item);
        }
    };
    /**
     * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
     * @param {Any} item Disposable to remove.
     * @returns {Boolean} true if found; false otherwise.
     */
    CompositeDisposable.prototype.remove = function (item) {
        var shouldDispose = false;
        if (!this.isDisposed) {
            var idx = this.disposables.indexOf(item);
            if (idx !== -1) {
                shouldDispose = true;
                this.disposables.splice(idx, 1);
                item.dispose();
            }
        }
        return shouldDispose;
    };
    /**
     *  Disposes all disposables in the group and removes them from the group but
     *  does not dispose the CompositeDisposable.
     */
    CompositeDisposable.prototype.clear = function () {
        if (!this.isDisposed) {
            var len = this.disposables.length;
            var currentDisposables = new Array(len);
            for (var i = 0; i < len; i++) {
                currentDisposables[i] = this.disposables[i];
            }
            this.disposables = [];
            for (var i = 0; i < len; i++) {
                currentDisposables[i].dispose();
            }
        }
    };
    /**
     *  Disposes all disposables in the group and removes them from the group.
     */
    CompositeDisposable.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            var len = this.disposables.length;
            var currentDisposables = new Array(len);
            for (var i = 0; i < len; i++) {
                currentDisposables[i] = this.disposables[i];
            }
            this.disposables = [];
            for (var i = 0; i < len; i++) {
                currentDisposables[i].dispose();
            }
        }
    };
    return CompositeDisposable;
}());
exports.CompositeDisposable = CompositeDisposable;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function registerSource(type, source, manager) {
    var registry = manager.getRegistry();
    var sourceId = registry.addSource(type, source);
    function unregisterSource() {
        registry.removeSource(sourceId);
    }
    return {
        handlerId: sourceId,
        unregister: unregisterSource,
    };
}
exports.default = registerSource;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var invariant = __webpack_require__(1);
var isPlainObject = __webpack_require__(5);
var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
var REQUIRED_SPEC_METHODS = ['beginDrag'];
function createSourceFactory(spec) {
    Object.keys(spec).forEach(function (key) {
        invariant(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' +
            'some of the following keys: %s. ' +
            'Instead received a specification with an unexpected "%s" key. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
        invariant(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' +
            'Instead received a specification with %s: %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
    });
    REQUIRED_SPEC_METHODS.forEach(function (key) {
        invariant(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' +
            'Instead received a specification with %s: %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
    });
    var SourceImpl = /** @class */ (function () {
        function SourceImpl(monitor) {
            this.monitor = monitor;
            this.props = null;
            this.ref = react_1.createRef();
            this.beginDrag = this.beginDrag.bind(this);
        }
        SourceImpl.prototype.receiveProps = function (props) {
            this.props = props;
        };
        SourceImpl.prototype.canDrag = function () {
            if (!this.props) {
                return false;
            }
            if (!spec.canDrag) {
                return true;
            }
            return spec.canDrag(this.props, this.monitor);
        };
        SourceImpl.prototype.isDragging = function (globalMonitor, sourceId) {
            if (!this.props) {
                return false;
            }
            if (!spec.isDragging) {
                return sourceId === globalMonitor.getSourceId();
            }
            return spec.isDragging(this.props, this.monitor);
        };
        SourceImpl.prototype.beginDrag = function () {
            if (!this.props) {
                return;
            }
            var item = spec.beginDrag(this.props, this.monitor, this.ref.current);
            if (process.env.NODE_ENV !== 'production') {
                invariant(isPlainObject(item), 'beginDrag() must return a plain object that represents the dragged item. ' +
                    'Instead received %s. ' +
                    'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', item);
            }
            return item;
        };
        SourceImpl.prototype.endDrag = function () {
            if (!this.props) {
                return;
            }
            if (!spec.endDrag) {
                return;
            }
            spec.endDrag(this.props, this.monitor, this.ref.current);
        };
        return SourceImpl;
    }());
    return function createSource(monitor) {
        return new SourceImpl(monitor);
    };
}
exports.default = createSourceFactory;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invariant = __webpack_require__(1);
var isCallingCanDrag = false;
var isCallingIsDragging = false;
var SourceMonitor = /** @class */ (function () {
    function SourceMonitor(manager) {
        this.internalMonitor = manager.getMonitor();
    }
    SourceMonitor.prototype.receiveHandlerId = function (sourceId) {
        this.sourceId = sourceId;
    };
    SourceMonitor.prototype.canDrag = function () {
        invariant(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');
        try {
            isCallingCanDrag = true;
            return this.internalMonitor.canDragSource(this.sourceId);
        }
        finally {
            isCallingCanDrag = false;
        }
    };
    SourceMonitor.prototype.isDragging = function () {
        invariant(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');
        try {
            isCallingIsDragging = true;
            return this.internalMonitor.isDraggingSource(this.sourceId);
        }
        finally {
            isCallingIsDragging = false;
        }
    };
    SourceMonitor.prototype.subscribeToStateChange = function (listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    };
    SourceMonitor.prototype.isDraggingSource = function (sourceId) {
        return this.internalMonitor.isDraggingSource(sourceId);
    };
    SourceMonitor.prototype.isOverTarget = function (targetId, options) {
        return this.internalMonitor.isOverTarget(targetId, options);
    };
    SourceMonitor.prototype.getTargetIds = function () {
        return this.internalMonitor.getTargetIds();
    };
    SourceMonitor.prototype.isSourcePublic = function () {
        return this.internalMonitor.isSourcePublic();
    };
    SourceMonitor.prototype.getSourceId = function () {
        return this.internalMonitor.getSourceId();
    };
    SourceMonitor.prototype.subscribeToOffsetChange = function (listener) {
        return this.internalMonitor.subscribeToOffsetChange(listener);
    };
    SourceMonitor.prototype.canDragSource = function (sourceId) {
        return this.internalMonitor.canDragSource(sourceId);
    };
    SourceMonitor.prototype.canDropOnTarget = function (targetId) {
        return this.internalMonitor.canDropOnTarget(targetId);
    };
    SourceMonitor.prototype.getItemType = function () {
        return this.internalMonitor.getItemType();
    };
    SourceMonitor.prototype.getItem = function () {
        return this.internalMonitor.getItem();
    };
    SourceMonitor.prototype.getDropResult = function () {
        return this.internalMonitor.getDropResult();
    };
    SourceMonitor.prototype.didDrop = function () {
        return this.internalMonitor.didDrop();
    };
    SourceMonitor.prototype.getInitialClientOffset = function () {
        return this.internalMonitor.getInitialClientOffset();
    };
    SourceMonitor.prototype.getInitialSourceClientOffset = function () {
        return this.internalMonitor.getInitialSourceClientOffset();
    };
    SourceMonitor.prototype.getSourceClientOffset = function () {
        return this.internalMonitor.getSourceClientOffset();
    };
    SourceMonitor.prototype.getClientOffset = function () {
        return this.internalMonitor.getClientOffset();
    };
    SourceMonitor.prototype.getDifferenceFromInitialOffset = function () {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    };
    return SourceMonitor;
}());
function createSourceMonitor(manager) {
    return new SourceMonitor(manager);
}
exports.default = createSourceMonitor;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var wrapConnectorHooks_1 = __webpack_require__(53);
var shallowEqual = __webpack_require__(21);
function createSourceConnector(backend) {
    var currentHandlerId;
    var currentDragSourceNode;
    var currentDragSourceOptions;
    var disconnectCurrentDragSource;
    var currentDragPreviewNode;
    var currentDragPreviewOptions;
    var disconnectCurrentDragPreview;
    function reconnectDragSource() {
        if (disconnectCurrentDragSource) {
            disconnectCurrentDragSource();
            disconnectCurrentDragSource = undefined;
        }
        if (currentHandlerId && currentDragSourceNode) {
            disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);
        }
    }
    function reconnectDragPreview() {
        if (disconnectCurrentDragPreview) {
            disconnectCurrentDragPreview();
            disconnectCurrentDragPreview = undefined;
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
    var hooks = wrapConnectorHooks_1.default({
        dragSource: function connectDragSource(node, options) {
            if (node === currentDragSourceNode &&
                shallowEqual(options, currentDragSourceOptions)) {
                return;
            }
            currentDragSourceNode = node;
            currentDragSourceOptions = options;
            reconnectDragSource();
        },
        dragPreview: function connectDragPreview(node, options) {
            if (node === currentDragPreviewNode &&
                shallowEqual(options, currentDragPreviewOptions)) {
                return;
            }
            currentDragPreviewNode = node;
            currentDragPreviewOptions = options;
            reconnectDragPreview();
        },
    });
    return {
        receiveHandlerId: receiveHandlerId,
        hooks: hooks,
    };
}
exports.default = createSourceConnector;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var invariant = __webpack_require__(1);
function cloneWithRef(element, newRef) {
    var previousRef = element.ref;
    invariant(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' +
        'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' +
        'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');
    if (!previousRef) {
        // When there is no ref on the element, use the new ref directly
        return react_1.cloneElement(element, {
            ref: newRef,
        });
    }
    return react_1.cloneElement(element, {
        ref: function (node) {
            newRef(node);
            if (previousRef) {
                previousRef(node);
            }
        },
    });
}
exports.default = cloneWithRef;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checkDecoratorArguments_1 = __webpack_require__(20);
var decorateHandler_1 = __webpack_require__(52);
var registerTarget_1 = __webpack_require__(170);
var createTargetFactory_1 = __webpack_require__(171);
var createTargetMonitor_1 = __webpack_require__(172);
var createTargetConnector_1 = __webpack_require__(173);
var isValidType_1 = __webpack_require__(54);
var invariant = __webpack_require__(1);
var isPlainObject = __webpack_require__(5);
function DropTarget(type, spec, collect, options) {
    if (options === void 0) { options = {}; }
    checkDecoratorArguments_1.default('DropTarget', 'type, spec, collect[, options]', type, spec, collect, options);
    var getType = type;
    if (typeof type !== 'function') {
        invariant(isValidType_1.default(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' +
            'a string, an array of strings, or a function that returns either given ' +
            'the current props. Instead, received %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', type);
        getType = function () { return type; };
    }
    invariant(isPlainObject(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' +
        'a plain object. Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', spec);
    var createTarget = createTargetFactory_1.default(spec);
    invariant(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' +
        'a function that returns a plain object of props to inject. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);
    invariant(isPlainObject(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' +
        'a plain object when specified. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);
    return function decorateTarget(DecoratedComponent) {
        return decorateHandler_1.default({
            containerDisplayName: 'DropTarget',
            createHandler: createTarget,
            registerHandler: registerTarget_1.default,
            createMonitor: createTargetMonitor_1.default,
            createConnector: createTargetConnector_1.default,
            DecoratedComponent: DecoratedComponent,
            getType: getType,
            collect: collect,
            options: options,
        });
    };
}
exports.default = DropTarget;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function registerTarget(type, target, manager) {
    var registry = manager.getRegistry();
    var targetId = registry.addTarget(type, target);
    function unregisterTarget() {
        registry.removeTarget(targetId);
    }
    return {
        handlerId: targetId,
        unregister: unregisterTarget,
    };
}
exports.default = registerTarget;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var invariant = __webpack_require__(1);
var isPlainObject = __webpack_require__(5);
var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];
function createTargetFactory(spec) {
    Object.keys(spec).forEach(function (key) {
        invariant(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' +
            'some of the following keys: %s. ' +
            'Instead received a specification with an unexpected "%s" key. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
        invariant(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' +
            'Instead received a specification with %s: %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
    });
    var TargetImpl = /** @class */ (function () {
        function TargetImpl(monitor) {
            this.monitor = monitor;
            this.props = null;
            this.ref = react_1.createRef();
        }
        TargetImpl.prototype.receiveProps = function (props) {
            this.props = props;
        };
        TargetImpl.prototype.receiveMonitor = function (monitor) {
            this.monitor = monitor;
        };
        TargetImpl.prototype.canDrop = function () {
            if (!spec.canDrop) {
                return true;
            }
            return spec.canDrop(this.props, this.monitor);
        };
        TargetImpl.prototype.hover = function () {
            if (!spec.hover) {
                return;
            }
            spec.hover(this.props, this.monitor, this.ref.current);
        };
        TargetImpl.prototype.drop = function () {
            if (!spec.drop) {
                return undefined;
            }
            var dropResult = spec.drop(this.props, this.monitor, this.ref.current);
            if (process.env.NODE_ENV !== 'production') {
                invariant(typeof dropResult === 'undefined' || isPlainObject(dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' +
                    'Instead received %s. ' +
                    'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', dropResult);
            }
            return dropResult;
        };
        return TargetImpl;
    }());
    return function createTarget(monitor) {
        return new TargetImpl(monitor);
    };
}
exports.default = createTargetFactory;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invariant = __webpack_require__(1);
var isCallingCanDrop = false;
var TargetMonitor = /** @class */ (function () {
    function TargetMonitor(manager) {
        this.internalMonitor = manager.getMonitor();
    }
    TargetMonitor.prototype.receiveHandlerId = function (targetId) {
        this.targetId = targetId;
    };
    TargetMonitor.prototype.canDrop = function () {
        invariant(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html');
        try {
            isCallingCanDrop = true;
            return this.internalMonitor.canDropOnTarget(this.targetId);
        }
        finally {
            isCallingCanDrop = false;
        }
    };
    TargetMonitor.prototype.isOver = function (options) {
        return this.internalMonitor.isOverTarget(this.targetId, options);
    };
    TargetMonitor.prototype.getItemType = function () {
        return this.internalMonitor.getItemType();
    };
    TargetMonitor.prototype.getItem = function () {
        return this.internalMonitor.getItem();
    };
    TargetMonitor.prototype.getDropResult = function () {
        return this.internalMonitor.getDropResult();
    };
    TargetMonitor.prototype.didDrop = function () {
        return this.internalMonitor.didDrop();
    };
    TargetMonitor.prototype.getInitialClientOffset = function () {
        return this.internalMonitor.getInitialClientOffset();
    };
    TargetMonitor.prototype.getInitialSourceClientOffset = function () {
        return this.internalMonitor.getInitialSourceClientOffset();
    };
    TargetMonitor.prototype.getSourceClientOffset = function () {
        return this.internalMonitor.getSourceClientOffset();
    };
    TargetMonitor.prototype.getClientOffset = function () {
        return this.internalMonitor.getClientOffset();
    };
    TargetMonitor.prototype.getDifferenceFromInitialOffset = function () {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    };
    return TargetMonitor;
}());
exports.TargetMonitor = TargetMonitor;
function createTargetMonitor(manager) {
    return new TargetMonitor(manager);
}
exports.default = createTargetMonitor;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var wrapConnectorHooks_1 = __webpack_require__(53);
var shallowEqual = __webpack_require__(21);
function createTargetConnector(backend) {
    var currentHandlerId;
    var currentDropTargetNode;
    var currentDropTargetOptions;
    var disconnectCurrentDropTarget;
    function reconnectDropTarget() {
        if (disconnectCurrentDropTarget) {
            disconnectCurrentDropTarget();
            disconnectCurrentDropTarget = undefined;
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
    var hooks = wrapConnectorHooks_1.default({
        dropTarget: function connectDropTarget(node, options) {
            if (node === currentDropTargetNode &&
                shallowEqual(options, currentDropTargetOptions)) {
                return;
            }
            currentDropTargetNode = node;
            currentDropTargetOptions = options;
            reconnectDropTarget();
        },
    });
    return {
        receiveHandlerId: receiveHandlerId,
        hooks: hooks,
    };
}
exports.default = createTargetConnector;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
 */


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTouchBackend;
exports.TouchBackend = void 0;

var _invariant = _interopRequireDefault(__webpack_require__(175));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
} // Used for MouseEvent.buttons (note the s on the end).


var MouseButtons = {
  Left: 1,
  Right: 2,
  Center: 4 // Used for e.button (note the lack of an s on the end).

};
var MouseButton = {
  Left: 0,
  Center: 1,
  Right: 2
  /**
   * Only touch events and mouse events where the left button is pressed should initiate a drag.
   * @param {MouseEvent | TouchEvent} e The event
   */

};

function eventShouldStartDrag(e) {
  // For touch events, button will be undefined. If e.button is defined,
  // then it should be MouseButton.Left.
  return e.button === undefined || e.button === MouseButton.Left;
}
/**
 * Only touch events and mouse events where the left mouse button is no longer held should end a drag.
 * It's possible the user mouse downs with the left mouse button, then mouse down and ups with the right mouse button.
 * We don't want releasing the right mouse button to end the drag.
 * @param {MouseEvent | TouchEvent} e The event
 */


function eventShouldEndDrag(e) {
  // Touch events will have buttons be undefined, while mouse events will have e.buttons's left button
  // bit field unset if the left mouse button has been released
  return e.buttons === undefined || (e.buttons & MouseButtons.Left) === 0;
} // Polyfill for document.elementsFromPoint


var elementsFromPoint = (typeof document !== 'undefined' && document.elementsFromPoint || function (x, y) {
  if (document.msElementsFromPoint) {
    // msElementsFromPoint is much faster but returns a node-list, so convert it to an array
    var msElements = document.msElementsFromPoint(x, y);
    return msElements && Array.prototype.slice.call(msElements, 0);
  }

  var elements = [],
      previousPointerEvents = [],
      current,
      i,
      d; // get all elements via elementFromPoint, and remove them from hit-testing in order

  while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current !== null) {
    // push the element and its current style
    elements.push(current);
    previousPointerEvents.push({
      value: current.style.getPropertyValue('pointer-events'),
      priority: current.style.getPropertyPriority('pointer-events')
    }); // add "pointer-events: none", to get to the underlying element

    current.style.setProperty('pointer-events', 'none', 'important');
  } // restore the previous pointer-events values


  for (i = previousPointerEvents.length; d = previousPointerEvents[--i];) {
    elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
  } // return our results


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

  return {
    x: left,
    y: top
  };
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

var TouchBackend =
/*#__PURE__*/
function () {
  function TouchBackend(manager) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, TouchBackend);

    options.delayTouchStart = options.delayTouchStart || options.delay;
    options = _objectSpread({
      enableTouchEvents: true,
      enableMouseEvents: false,
      enableKeyboardEvents: false,
      ignoreContextMenu: false,
      delayTouchStart: 0,
      delayMouseStart: 0,
      touchSlop: 0,
      scrollAngleRanges: undefined
    }, options);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enableKeyboardEvents = options.enableKeyboardEvents;
    this.enableMouseEvents = options.enableMouseEvents;
    this.delayTouchStart = options.delayTouchStart;
    this.delayMouseStart = options.delayMouseStart;
    this.ignoreContextMenu = options.ignoreContextMenu;
    this.touchSlop = options.touchSlop;
    this.scrollAngleRanges = options.scrollAngleRanges;
    this.sourceNodes = {};
    this.sourceNodeOptions = {};
    this.sourcePreviewNodes = {};
    this.sourcePreviewNodeOptions = {};
    this.targetNodes = {};
    this.targetNodeOptions = {};
    this.listenerTypes = [];
    this._mouseClientOffset = {};
    this._isScrolling = false;

    if (options.enableMouseEvents) {
      this.listenerTypes.push('mouse');
    }

    if (options.enableTouchEvents) {
      this.listenerTypes.push('touch');
    }

    if (options.enableKeyboardEvents) {
      this.listenerTypes.push('keyboard');
    }

    if (options.getDropTargetElementsAtPoint) {
      this.getDropTargetElementsAtPoint = options.getDropTargetElementsAtPoint;
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
    key: "setup",
    value: function setup() {
      if (typeof window === 'undefined') {
        return;
      }

      (0, _invariant.default)(!this.constructor.isSetUp, 'Cannot have two Touch backends at the same time.');
      this.constructor.isSetUp = true;
      this.addEventListener(window, 'start', this.getTopMoveStartHandler());
      this.addEventListener(window, 'start', this.handleTopMoveStartCapture, true);
      this.addEventListener(window, 'move', this.handleTopMove);
      this.addEventListener(window, 'move', this.handleTopMoveCapture, true);
      this.addEventListener(window, 'end', this.handleTopMoveEndCapture, true);

      if (this.enableMouseEvents && !this.ignoreContextMenu) {
        this.addEventListener(window, 'contextmenu', this.handleTopMoveEndCapture);
      }

      if (this.enableKeyboardEvents) {
        this.addEventListener(window, 'keydown', this.handleCancelOnEscape, true);
      }
    }
  }, {
    key: "teardown",
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

      if (this.enableMouseEvents && !this.ignoreContextMenu) {
        this.removeEventListener(window, 'contextmenu', this.handleTopMoveEndCapture);
      }

      if (this.enableKeyboardEvents) {
        this.removeEventListener(window, 'keydown', this.handleCancelOnEscape, true);
      }

      this.uninstallSourceNodeRemovalObserver();
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(subject, event, handler, capture) {
      var options = supportsPassive ? {
        capture: capture,
        passive: false
      } : capture;
      this.listenerTypes.forEach(function (listenerType) {
        var evt = eventNames[listenerType][event];

        if (evt) {
          subject.addEventListener(evt, handler, options);
        }
      });
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(subject, event, handler, capture) {
      var options = supportsPassive ? {
        capture: capture,
        passive: false
      } : capture;
      this.listenerTypes.forEach(function (listenerType) {
        var evt = eventNames[listenerType][event];

        if (evt) {
          subject.removeEventListener(evt, handler, options);
        }
      });
    }
  }, {
    key: "connectDragSource",
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
    key: "connectDragPreview",
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
    key: "connectDropTarget",
    value: function connectDropTarget(targetId, node) {
      var _this3 = this;

      var handleMove = function handleMove(e) {
        var coords;

        if (!_this3.monitor.isDragging()) {
          return;
        }
        /**
         * Grab the coordinates for the current mouse/touch position
         */


        switch (e.type) {
          case eventNames.mouse.move:
            coords = {
              x: e.clientX,
              y: e.clientY
            };
            break;

          case eventNames.touch.move:
            coords = {
              x: e.touches[0].clientX,
              y: e.touches[0].clientY
            };
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
    key: "getSourceClientOffset",
    value: function getSourceClientOffset(sourceId) {
      return getNodeClientOffset(this.sourceNodes[sourceId]);
    }
  }, {
    key: "handleTopMoveStartCapture",
    value: function handleTopMoveStartCapture(e) {
      if (!eventShouldStartDrag(e)) {
        return;
      }

      this.moveStartSourceIds = [];
    }
  }, {
    key: "handleMoveStart",
    value: function handleMoveStart(sourceId) {
      // Just because we received an event doesn't necessarily mean we need to collect drag sources.
      // We only collect start collecting drag sources on touch and left mouse events.
      if (Array.isArray(this.moveStartSourceIds)) {
        this.moveStartSourceIds.unshift(sourceId);
      }
    }
  }, {
    key: "getTopMoveStartHandler",
    value: function getTopMoveStartHandler() {
      if (!this.delayTouchStart && !this.delayMouseStart) {
        return this.handleTopMoveStart;
      }

      return this.handleTopMoveStartDelay;
    }
  }, {
    key: "handleTopMoveStart",
    value: function handleTopMoveStart(e) {
      if (!eventShouldStartDrag(e)) {
        return;
      } // Don't prematurely preventDefault() here since it might:
      // 1. Mess up scrolling
      // 2. Mess up long tap (which brings up context menu)
      // 3. If there's an anchor link as a child, tap won't be triggered on link


      var clientOffset = getEventClientOffset(e);

      if (clientOffset) {
        this._mouseClientOffset = clientOffset;
      }

      this.waitingForDelay = false;
    }
  }, {
    key: "handleTopMoveStartDelay",
    value: function handleTopMoveStartDelay(e) {
      if (!eventShouldStartDrag(e)) {
        return;
      }

      var delay = e.type === eventNames.touch.start ? this.delayTouchStart : this.delayMouseStart;
      this.timeout = setTimeout(this.handleTopMoveStart.bind(this, e), delay);
      this.waitingForDelay = true;
    }
  }, {
    key: "handleTopMoveCapture",
    value: function handleTopMoveCapture(e) {
      this.dragOverTargetIds = [];
    }
  }, {
    key: "handleMove",
    value: function handleMove(e, targetId) {
      this.dragOverTargetIds.unshift(targetId);
    }
  }, {
    key: "handleTopMove",
    value: function handleTopMove(e) {
      var _this4 = this;

      clearTimeout(this.timeout);

      if (this.waitingForDelay) {
        return;
      }

      var moveStartSourceIds = this.moveStartSourceIds,
          dragOverTargetIds = this.dragOverTargetIds;
      var clientOffset = getEventClientOffset(e);

      if (!clientOffset) {
        return;
      } // If the touch move started as a scroll, or is is between the scroll angles


      if (this._isScrolling || !this.monitor.isDragging() && inAngleRanges(this._mouseClientOffset.x, this._mouseClientOffset.y, clientOffset.x, clientOffset.y, this.scrollAngleRanges)) {
        this._isScrolling = true;
        return;
      } // If we're not dragging and we've moved a little, that counts as a drag start


      if (!this.monitor.isDragging() && this._mouseClientOffset.hasOwnProperty('x') && moveStartSourceIds && distance(this._mouseClientOffset.x, this._mouseClientOffset.y, clientOffset.x, clientOffset.y) > (this.touchSlop ? this.touchSlop : 0)) {
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
      e.preventDefault(); // Get the node elements of the hovered DropTargets

      var dragOverTargetNodes = dragOverTargetIds.map(function (key) {
        return _this4.targetNodes[key];
      }); // Get the a ordered list of nodes that are touched by

      var elementsAtPoint = this.getDropTargetElementsAtPoint ? this.getDropTargetElementsAtPoint(clientOffset.x, clientOffset.y, dragOverTargetNodes) : elementsFromPoint(clientOffset.x, clientOffset.y); // Extend list with parents that are not receiving elementsFromPoint events (size 0 elements and svg groups)

      var elementsAtPointExtended = [];

      for (var nodeId in elementsAtPoint) {
        if (!elementsAtPoint.hasOwnProperty(nodeId)) {
          continue;
        }

        var currentNode = elementsAtPoint[nodeId];
        elementsAtPointExtended.push(currentNode);

        while (currentNode) {
          currentNode = currentNode.parentElement;

          if (!elementsAtPointExtended.includes(currentNode)) {
            elementsAtPointExtended.push(currentNode);
          }
        }
      }

      var orderedDragOverTargetIds = elementsAtPointExtended // Filter off nodes that arent a hovered DropTargets nodes
      .filter(function (node) {
        return dragOverTargetNodes.indexOf(node) > -1;
      }) // Map back the nodes elements to targetIds
      .map(function (node) {
        for (var targetId in _this4.targetNodes) {
          if (node === _this4.targetNodes[targetId]) {
            return targetId;
          }
        }

        return null;
      }) // Filter off possible null rows
      .filter(function (node) {
        return !!node;
      }).filter(function (id, index, ids) {
        return ids.indexOf(id) === index;
      }); // Reverse order because dnd-core reverse it before calling the DropTarget drop methods

      orderedDragOverTargetIds.reverse();
      this.actions.hover(orderedDragOverTargetIds, {
        clientOffset: clientOffset
      });
    }
  }, {
    key: "handleTopMoveEndCapture",
    value: function handleTopMoveEndCapture(e) {
      this._isScrolling = false;

      if (!eventShouldEndDrag(e)) {
        return;
      }

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
    key: "handleCancelOnEscape",
    value: function handleCancelOnEscape(e) {
      if (e.key === 'Escape' && this.monitor.isDragging()) {
        this._mouseClientOffset = {};
        this.uninstallSourceNodeRemovalObserver();
        this.actions.endDrag();
      }
    }
  }, {
    key: "handleOnContextMenu",
    value: function handleOnContextMenu() {
      this.moveStartSourceIds = null;
    }
  }, {
    key: "installSourceNodeRemovalObserver",
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

      this.draggedSourceNodeRemovalObserver.observe(node.parentElement, {
        childList: true
      });
    }
  }, {
    key: "resurrectSourceNode",
    value: function resurrectSourceNode() {
      this.draggedSourceNode.style.display = 'none';
      this.draggedSourceNode.removeAttribute('data-reactid');
      document.body.appendChild(this.draggedSourceNode);
    }
  }, {
    key: "uninstallSourceNodeRemovalObserver",
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

exports.TouchBackend = TouchBackend;

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

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
}

function inAngleRanges(x1, y1, x2, y2, angleRanges) {
  if (angleRanges == null) {
    return false;
  }

  var angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI + 180;

  for (var i = 0; i < angleRanges.length; ++i) {
    if ((angleRanges[i].start == null || angle >= angleRanges[i].start) && (angleRanges[i].end == null || angle <= angleRanges[i].end)) {
      return true;
    }
  }

  return false;
}


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dnd_lib_DragLayer__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dnd_lib_DragLayer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dnd_lib_DragLayer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EventBase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_object_assign__ = __webpack_require__(56);
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

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_react_dnd_lib_DragLayer___default()(collect)(EventPreview));

/***/ }),
/* 177 */
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
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_TimeSpan__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EventBase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Timeline__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_object_assign__ = __webpack_require__(56);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlY2YzMzAwNDc2NzcyNDEwOGQ0YyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lU3Bhbi5lczYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImNsYXNzTmFtZXNcIixcImNvbW1vbmpzMlwiOlwiY2xhc3NuYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzbmFtZXNcIixcImFtZFwiOlwiY2xhc3NuYW1lc1wifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SdWxlci5qc3giLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2FjdGlvbnMvZHJhZ0Ryb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2FjdGlvbnMvcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvdXRpbHMvY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3dlcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvVGltZS5lczYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvRHJhZ0Ryb3BDb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlY29tcG9zZS9pc0NsYXNzQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xpbmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xpbmVMYWJlbC5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9pbnRlcmZhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvdXRpbHMvbWF0Y2hlc1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi91dGlscy9lcXVhbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZURpZmZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL3V0aWxzL2RpcnRpbmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9EcmFnTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2RlY29yYXRlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi93cmFwQ29ubmVjdG9ySG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvdXRpbHMvaXNWYWxpZFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRCYXNlLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZyYW1lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib3VyLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvZmFjdG9yaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvRHJhZ0Ryb3BNYW5hZ2VySW1wbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvcmVkdXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL3JlZHVjZXJzL2RyYWdPZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT3BlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL3dpdGhvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpY3RJbmRleE9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19zaG9ydE91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL3JlZHVjZXJzL3JlZkNvdW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvZGlydHlIYW5kbGVySWRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL2ludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdEFycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC94b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlWG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmxhdHRlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9ub29wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvc3RhdGVJZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9EcmFnRHJvcE1vbml0b3JJbXBsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvdXRpbHMvY29vcmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvSGFuZGxlclJlZ2lzdHJ5SW1wbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL3V0aWxzL2dldE5leHRVbmlxdWVJZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2NvbnRyYWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXNhcC9icm93c2VyLWFzYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FzYXAvYnJvd3Nlci1yYXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0RyYWdTb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvdXRpbHMvZGlzcG9zYWJsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvdXRpbHMvZGlzcG9zYWJsZXMvRGlzcG9zYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9ub2RlX21vZHVsZXMvbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvdXRpbHMvZGlzcG9zYWJsZXMvU2VyaWFsRGlzcG9zYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi91dGlscy9kaXNwb3NhYmxlcy9Db21wb3NpdGVEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3JlZ2lzdGVyU291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVNvdXJjZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlTW9uaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9jcmVhdGVTb3VyY2VDb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvdXRpbHMvY2xvbmVXaXRoUmVmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0Ryb3BUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvcmVnaXN0ZXJUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9jcmVhdGVUYXJnZXRNb25pdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldENvbm5lY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQvZGlzdC9Ub3VjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQvbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50UHJldmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudC5qc3giXSwibmFtZXMiOlsiVGltZVNwYW4iLCJzdGFydCIsImVuZCIsIlRpbWUiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwidW5kZWZpbmVkIiwiY29tcGFyZSIsImFkZE1pbiIsIl9zdGFydFRpbWUiLCJfZW5kVGltZSIsImdldFN0YXJ0VGltZSIsImNsb25lIiwiZ2V0RW5kVGltZSIsImdldERpc3RhbmNlIiwidGltZSIsImhvdXIiLCJzaGlmdFN0YXJ0VGltZSIsImdldE1pbiIsIm1pbiIsImdldEhvdXIiLCJtaW51dGUiLCJ0aW1lU3BhbiIsImVxdWFscyIsImNvbnRhaW5zIiwiY29udGFpbnNUaW1lIiwiY2FsbGJhY2siLCJrZXkiLCJjYWxsIiwibWludXRlSW50ZXJ2YWwiLCJSdWxlciIsInByb3BzIiwic3RhdGUiLCJob3VycyIsImVhY2hUaW1lIiwic3R5bGUiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJwdXNoIiwiZ2V0RGlzcGxheUhvdXIiLCJ3aWR0aCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVGltZWxpbmUiLCJsaW5lSGVpZ2h0IiwicGVyTWluSGVpZ2h0IiwibGluZVdpZHRoIiwiY3JlYXRlZEV2ZW50SWQiLCJkcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50IiwiZnJhbWVDb21wb25lbnQiLCJldmVudENvbXBvbmVudHMiLCJsZWZ0IiwibGluZUNvbXBvbmVudCIsImZpbmRMaW5lQnlMZWZ0IiwiY2xlYXJEcmFnZ2luZ092ZXIiLCJkcmFnZ2luZ092ZXIiLCJ0b3RhbFdpZHRoQ2FjaGUiLCJsaW5lRGF0YSIsInJlZHVjZSIsInZhbCIsImRhdGEiLCJpbmRleCIsImhhc1J1bGVyIiwicnVsZXJJbnRlcnZhbCIsImV2ZW50SWQiLCJmaW5kIiwiZXYiLCJpZCIsImxpbmVDb21wb25lbnRzIiwibGluZSIsImxpbmVJZCIsImkiLCJsZW5ndGgiLCJMaW5lIiwic2lkZVBhZGRpbmciLCJ0b3AiLCJ0b3BUb1RpbWUiLCJtaW51dGVUb0hlaWdodCIsInJlc3QiLCJtaW5JbnRlcnZhbCIsImV2ZW50Q29tcG9uZW50IiwiZmlsdGVyIiwiZHJhZ2dhYmxlIiwic29ydCIsImEiLCJiIiwiY3VycmVudFRpbWVTcGFuIiwicHJldkV2ZW50IiwiZmluZFByZXZFdmVudCIsImJvdHRvbVRpbWUiLCJ0aW1lVG9Ub3AiLCJmaW5kTmV4dEV2ZW50QnlUaW1lIiwibmV4dEV2ZW50IiwibmV4dFRpbWUiLCJnZXROZXh0VGltZSIsImV2ZW50cyIsImFkZEV2ZW50cyIsInNldEhlaWdodCIsIm5leHRQcm9wcyIsImNoaWxkcmVuIiwiY2hpbGRXaWR0aCIsImxpbmVzIiwicmVmcyIsImxpbmVzV3JhcHBlciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwibWFwIiwiZWxlbSIsImdldEF0dHJpYnV0ZSIsImRlZmF1bHRQcm9wcyIsImNvdW50IiwiZGlzcGxheU1pbiIsIl9ob3VyIiwicGFyc2VJbnQiLCJfbWluIiwiRXJyb3IiLCJ0b1N0cmluZyIsInRhcmdldFRpbWUiLCJ0YXJnZXRIb3VyIiwiaG91ckRpc3RhbmNlIiwiZ2V0RGlzcGxheVRpbWUiLCJnZXREaXNwbGF5TWluIiwidmFycyIsImUiLCJwYXJlbnRFbGVtZW50IiwiZnJhbWUiLCJwYXJlbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WSIsInNjcm9sbFRvcCIsInRpbWVsaW5lIiwibGluZURpZENsaWNrIiwiZ2V0UmVsYXRpdmVUb3AiLCJjb21wb25lbnQiLCJmcmVlTWludXRlIiwiZ2V0RnJlZU1pbnV0ZSIsInBvc2l0aW9uIiwic2Nyb2xsTGVmdCIsImVsZW1lbnQiLCJjbGllbnRYIiwiZXZlbnQiLCJsaW5lRGlkUmlnaHRDbGljayIsInNldFN0YXRlIiwib25Db250ZXh0TWVudSIsIm9uQ2xpY2siLCJjbGFzc05hbWVzIiwidGxFdmVuIiwiZXZlbiIsInRsT2RkIiwidGxPdmVyIiwiTGluZUxhYmVsIiwicHJldlJ1bGVyIiwiaXNMYXN0IiwibWFyZ2luTGVmdCIsInRsTGFiZWwiLCJ0bEhhc1J1bGVyIiwidGxQcmV2UnVsZXIiLCJ0bExhc3QiLCJsYWJlbCIsIkV2ZW50QmFzZSIsInJvdyIsInZhbHVlIiwiY2xhc3NOYW1lIiwiaXNBcnJheSIsImRpc3BsYXlQb3NpdGlvbiIsImdldFRvdGFsV2lkdGgiLCJyaWdodCIsImRyYWdnaW5nRGlzcGxheSIsImRyYWdnaW5nRGlzcGxheVRvcCIsImRpc3BsYXkiLCJyZW5kZXJEaXNwbGF5IiwidGFyZ2V0IiwiZHJvcCIsIm1vbml0b3IiLCJpdGVtIiwiZ2V0SXRlbSIsImRlbHRhIiwiZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0IiwiaW5pdGFsT2Zmc2V0IiwiZHJhZ2dpbmdDb21wb25lbnQiLCJnZXRPZmZzZXQiLCJNYXRoIiwicm91bmQiLCJ5IiwieCIsIm1vdmVUbyIsImhvdmVyIiwiY2xpZW50T2Zmc2V0IiwiZ2V0U291cmNlQ2xpZW50T2Zmc2V0IiwibGluZVdyYXBwZXJCb3VuZHMiLCJkcmFnZ2luZyIsImNvbGxlY3QiLCJjb25uZWN0IiwiY29ubmVjdERyb3BUYXJnZXQiLCJkcm9wVGFyZ2V0IiwiRnJhbWUiLCJtaW5XaWR0aCIsInJlc2l6aW5nRXZlbnQiLCJjbGlja2VkVG9wIiwiaW5pdGlhbEhlaWdodCIsInByZXZCb3R0b20iLCJnZXRQcmV2Qm90dG9tIiwibW91c2VNb3ZlRXZlbnQiLCJtb3ZlRXZlbnQiLCJyZXNpemluZyIsInRhcmdldEhlaWdodCIsInRhcmdldFRvcCIsInJlc2l6aW5nVGltZVNwYW4iLCJ0aW1lU3BhblRvSGVpZ2h0Iiwic3RvcE1vdmVFdmVudCIsIm1vdXNlRXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZW5kUmVzaXppbmciLCJhZGRFdmVudExpc3RlbmVyIiwibmV4dFRvcCIsImdldE5leHRUb3AiLCJ0YXJnZXRCb3R0b20iLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm5ld1N0YXRlIiwiY29ycmVjdE91dHNpZGVFdmVudHMiLCJmb3JFYWNoIiwiY29ycmVjdFBvc2l0aW9uIiwib3ZlcmZsb3dYIiwib3ZlcmZsb3ciLCJvdmVyZmxvd1kiLCJjb2xvciIsImZsb2F0IiwiRHJhZ0Ryb3BDb250ZXh0IiwiRG5kQmFja2VuZCIsImVuYWJsZU1vdXNlRXZlbnRzIiwiRHJvcFRhcmdldCIsIkhvdXIiLCJtaW51dGVzIiwibWluU3R5bGUiLCJlYWNoTWluIiwiRXZlbnRQcmV2aWV3IiwidHJhbnNmb3JtIiwiYXNzaWduIiwiZ2V0RHJhZ2dpbmdTdHlsZSIsIldlYmtpdFRyYW5zZm9ybSIsImdldEl0ZW1TdHlsZXMiLCJnZXRSaWdodCIsIkRyYWdMYXllciIsImNsb3Nlc3QiLCJzZWxlY3RvciIsIm1hdGNoZXNGbiIsInNvbWUiLCJmbiIsImRvY3VtZW50IiwiYm9keSIsInBhcmVudCIsInNvdXJjZSIsImJlZ2luRHJhZyIsImNhbkRyYWciLCJmaW5kRXZlbnRCeUlkIiwiY29ubmVjdERyYWdTb3VyY2UiLCJkcmFnU291cmNlIiwiaXNEcmFnZ2luZyIsIkV2ZW50IiwiaW5pdGlhbExpbmVJZCIsImluaXRpYWxUaW1lU3BhbiIsImRyYWdnaW5nUG9zaXRpb24iLCJpbml0aWFsRmxvYXQiLCJnZXRMaW5lTGVmdCIsImluaXRpYWxDb2xvciIsInJlc2l6YWJsZSIsImluaXRpYWxEaXNwbGF5IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwidmFsdWVzIiwib3ZlcmxhcHMiLCJldmVudERpZENsaWNrIiwicmVzaXplVXAiLCJyZXNpemVEb3duIiwic2V0VGltZW91dCIsImV2ZW50RGlkUmlnaHRDbGljayIsImJhY2tncm91bmRDb2xvciIsIm5ld1Bvc2l0aW9uIiwibmV4dFBvc2l0aW9uIiwiaXNGcmVlUG9zaXRpb24iLCJwcmV2UG9zaXRpb24iLCJuZXdUaW1lU3BhbiIsImV2ZW50V2lsbEZpeCIsImV2ZW50RGlkRml4IiwibmV3UG9zIiwibGFzdExpbmUiLCJib3R0b20iLCJPYmplY3QiLCJrZXlzIiwidGxEcmFnZ2luZ0V2ZW50IiwidGxSZXNpemFibGVFdmVudCIsIkRyYWdTb3VyY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsK0M7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyx5QkFBeUIsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNsREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFlBQVksa0JBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQ2hKYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdERhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5TkEsaUJBQWlCLG1CQUFPLENBQUMsR0FBZTs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDUkE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNIQSxhQUFhLG1CQUFPLENBQUMsRUFBVzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0EsR0FBRzs7O0FBR0gsd0NBQXdDLGdDQUFnQztBQUN4RTtBQUNBLEdBQUc7OztBQUdIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVCwyTUFBMk07O0FBRTNNOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Es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QTZCRDs7O3dCQTdXb0I7QUFDbkIsYUFBTyxLQUFLb0YsZ0JBQUwsSUFBeUIsS0FBSzNMLFFBQXJDO0FBQ0Q7Ozt3QkFFaUI7QUFDaEIsVUFBRyxLQUFLbVAsZ0JBQVIsRUFBeUI7QUFDdkIsZUFBTztBQUNMbk0sZ0JBQU0sRUFBRSxLQUFLbU0sZ0JBQUwsQ0FBc0JuTSxNQUR6QjtBQUVMaEQsa0JBQVEsRUFBRSxLQUFLQSxRQUFMLENBQWNMLGNBQWQsQ0FBNkIsS0FBS3dQLGdCQUFMLENBQXNCMVAsSUFBbkQ7QUFGTCxTQUFQO0FBSUQsT0FMRCxNQUtPLElBQUcsS0FBS2tNLGdCQUFSLEVBQXlCO0FBQzlCLGVBQU07QUFDSjNJLGdCQUFNLEVBQUUsS0FBS0EsTUFEVDtBQUVKaEQsa0JBQVEsRUFBRSxLQUFLMkw7QUFGWCxTQUFOO0FBSUQ7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7Ozt3QkFFaUI7QUFDaEIsVUFBRyxDQUFDLEtBQUt3RCxnQkFBTixJQUEwQixDQUFDLEtBQUt4RCxnQkFBbkMsRUFBb0Q7QUFDbEQsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTTtBQUNKM0ksZ0JBQU0sRUFBRSxLQUFLQSxNQURUO0FBRUpoRCxrQkFBUSxFQUFFLEtBQUtBO0FBRlgsU0FBTjtBQUlEO0FBQ0Y7Ozs7RUExR2lCbUIsNkNBQUssQ0FBQ0MsUzs7QUE2YjFCNE4sS0FBSyxDQUFDdkosWUFBTixHQUFxQjtBQUNuQitKLGdCQUFjLEVBQUUsRUFERztBQUVuQmxKLE1BQUksRUFBRTtBQUZhLENBQXJCO0FBS2U0SyxzSEFBVSxDQUFDLE9BQUQsRUFBVXpDLE1BQVYsRUFBa0I5RCxPQUFsQixDQUFWLENBQXFDcUUsS0FBckMsQ0FBZixFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwiY2xhc3NuYW1lc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKSA6IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiY2xhc3NOYW1lc1wiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDU3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlY2YzMzAwNDc2NzcyNDEwOGQ0YyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVGltZSBmcm9tICcuL1RpbWUnXG4vKipcbiAqIOS4gOW6pueUn+aIkOOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOBr+WkieabtOOBl+OBvuOBm+OCk+OAglxuICog5aSJ5pu044Oh44K944OD44OJ44Gv5paw44GX44GE44Kq44OW44K444Kn44Kv44OI44KS5biw44GX44G+44GZ44CCXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVTcGFuXG57XG4gIHN0YXRpYyBjcmVhdGUoc3RhcnQsIGVuZCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKG5ldyBUaW1lKHN0YXJ0WzBdLCBzdGFydFsxXSksIG5ldyBUaW1lKGVuZFswXSwgZW5kWzFdKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzdGFydFRpbWUsIGVuZFRpbWUpe1xuICAgIGlmKHN0YXJ0VGltZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIHN0YXJ0VGltZSA9IG5ldyBUaW1lKCk7XG4gICAgfVxuICAgIGlmKGVuZFRpbWUgPT09IHVuZGVmaW5lZCl7XG4gICAgICBlbmRUaW1lID0gbmV3IFRpbWUoKTtcbiAgICB9XG4gICAgd2hpbGUoc3RhcnRUaW1lLmNvbXBhcmUoZW5kVGltZSkgPj0gMCl7XG4gICAgICAgIGVuZFRpbWUgPSBlbmRUaW1lLmFkZE1pbigyNCAqIDYwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgdGhpcy5fZW5kVGltZSA9IGVuZFRpbWU7XG4gIH1cblxuICBjbG9uZSgpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aGlzLmdldFN0YXJ0VGltZSgpLmNsb25lKCksIHRoaXMuZ2V0RW5kVGltZSgpLmNsb25lKCkpO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKXtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUuZ2V0RGlzdGFuY2UodGhpcy5fZW5kVGltZSk7XG4gIH1cblxuICBnZXRTdGFydFRpbWUoKXsgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZTsgfVxuICBnZXRFbmRUaW1lKCl7IHJldHVybiB0aGlzLl9lbmRUaW1lOyB9XG5cbiAgc2hpZnRFbmRUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lLmFkZE1pbigtdGhpcy5nZXREaXN0YW5jZSgpKSwgdGltZSk7XG4gIH1cblxuICBzaGlmdFN0YXJ0SG91cihob3VyKXtcbiAgICByZXR1cm4gdGhpcy5zaGlmdFN0YXJ0VGltZShuZXcgVGltZShob3VyLCB0aGlzLl9zdGFydFRpbWUuZ2V0TWluKCkpKTtcbiAgfVxuXG4gIHNoaWZ0U3RhcnRNaW4obWluKXtcbiAgICByZXR1cm4gdGhpcy5zaGlmdFN0YXJ0VGltZShuZXcgVGltZSh0aGlzLl9zdGFydFRpbWUuZ2V0SG91cigpLCBtaW4pKTtcbiAgfVxuXG4gIHNoaWZ0U3RhcnRUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lLCB0aW1lLmFkZE1pbih0aGlzLmdldERpc3RhbmNlKCkpKTtcbiAgfVxuXG4gIGFkZE1pbihtaW51dGUpe1xuICAgIHJldHVybiBuZXcgVGltZVNwYW4odGhpcy5nZXRTdGFydFRpbWUoKSwgdGhpcy5nZXRFbmRUaW1lKCkuYWRkTWluKG1pbnV0ZSkpO1xuICB9XG5cbiAgZXF1YWxzKHRpbWVTcGFuKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmVxdWFscyh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgJiYgdGhpcy5nZXRFbmRUaW1lKCkuZXF1YWxzKHRpbWVTcGFuLmdldEVuZFRpbWUoKSk7XG4gIH1cblxuICBjb250YWlucyh0aW1lU3Bhbil7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5jb21wYXJlKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSA8IDAgJiYgdGhpcy5nZXRFbmRUaW1lKCkuY29tcGFyZSh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpID4gMDtcbiAgfVxuXG4gIGNvbnRhaW5zVGltZSh0aW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUodGltZSkgPCAwICYmIHRoaXMuZ2V0RW5kVGltZSgpLmNvbXBhcmUodGltZSkgPiAwO1xuICB9XG5cbiAgb3ZlcmxhcHModGltZVNwYW4pe1xuICAgICAgaWYodGltZVNwYW4uY29udGFpbnModGhpcykpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmNvbnRhaW5zVGltZSh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmNvbnRhaW5zVGltZSh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZWFjaEhvdXIoY2FsbGJhY2spe1xuICAgICAgdmFyIGhvdXIgPSB0aGlzLmdldFN0YXJ0VGltZSgpLmdldEhvdXIoKTtcbiAgICAgIHZhciBlbmQgPSB0aGlzLmdldEVuZFRpbWUoKS5nZXRIb3VyKCk7XG4gICAgICB2YXIga2V5ID0gMDtcblxuICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgaWYoaG91ciA9PT0gZW5kKXtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChob3VyLCBrZXksIGhvdXIsIHRoaXMuZ2V0RW5kVGltZSgpLmdldE1pbigpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChob3VyLCBrZXksIGhvdXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhvdXIgKz0gMTtcbiAgICAgICAgICArK2tleTtcbiAgICAgIH1cbiAgfVxuXG4gIGVhY2hUaW1lKGNhbGxiYWNrLCBtaW51dGVJbnRlcnZhbCl7XG4gICAgICB2YXIga2V5ID0gMDtcbiAgICAgIG1pbnV0ZUludGVydmFsID0gbWludXRlSW50ZXJ2YWwgPyBtaW51dGVJbnRlcnZhbCA6IDYwO1xuXG4gICAgICB2YXIgdGltZSA9IHRoaXMuZ2V0U3RhcnRUaW1lKCk7XG4gICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICBpZih0aW1lLmNvbXBhcmUodGhpcy5nZXRFbmRUaW1lKCkpID4gMCl7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGltZSwga2V5LCB0aW1lKTtcblxuICAgICAgICAgIHRpbWUgPSB0aW1lLmFkZE1pbihtaW51dGVJbnRlcnZhbCk7XG4gICAgICAgICAgKytrZXk7XG4gICAgICB9XG4gIH1cblxuICB0b1N0cmluZygpe1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZSArICd+JyArIHRoaXMuX2VuZFRpbWU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzc25hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3NuYW1lc1wiLFwiYW1kXCI6XCJjbGFzc25hbWVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG91cnM6IFtdXG4gICAgfVxuICAgIHRoaXMucHJvcHMudGltZVNwYW4uZWFjaFRpbWUoKGtleSwgdGltZSkgPT4ge1xuICAgICAgaWYoIXRpbWUuZXF1YWxzKHRoaXMucHJvcHMudGltZVNwYW4uZ2V0RW5kVGltZSgpKSl7XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgIC8vYm9yZGVyMXB444KS6Laz44GZXG4gICAgICAgICAgaGVpZ2h0OiAodGhpcy5wcm9wcy5taW5IZWlnaHQgKyAxKSAqIDRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLmhvdXJzLnB1c2goXG4gICAgICAgICAgPGRpdiBrZXk9e3RpbWUuZ2V0SG91cigpfSBzdHlsZT17c3R5bGV9Pnt0aW1lLmdldERpc3BsYXlIb3VyKCl9PC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bFJ1bGVyVmlld1wiIHN0eWxlPXt7d2lkdGg6IFJ1bGVyLndpZHRoICsgJ3B4J319Pnt0aGlzLnN0YXRlLmhvdXJzfTwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gUnVsZXIucHJvcFR5cGVzID0ge1xuLy8gICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkXG4vLyB9XG5cblJ1bGVyLndpZHRoID0gMzA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9SdWxlci5qc3giLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtYXRjaGVzVHlwZV8xID0gcmVxdWlyZShcIi4uL3V0aWxzL21hdGNoZXNUeXBlXCIpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzT2JqZWN0Jyk7XG5leHBvcnRzLkJFR0lOX0RSQUcgPSAnZG5kLWNvcmUvQkVHSU5fRFJBRyc7XG5leHBvcnRzLlBVQkxJU0hfRFJBR19TT1VSQ0UgPSAnZG5kLWNvcmUvUFVCTElTSF9EUkFHX1NPVVJDRSc7XG5leHBvcnRzLkhPVkVSID0gJ2RuZC1jb3JlL0hPVkVSJztcbmV4cG9ydHMuRFJPUCA9ICdkbmQtY29yZS9EUk9QJztcbmV4cG9ydHMuRU5EX0RSQUcgPSAnZG5kLWNvcmUvRU5EX0RSQUcnO1xuZnVuY3Rpb24gY3JlYXRlRHJhZ0Ryb3BBY3Rpb25zKG1hbmFnZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBiZWdpbkRyYWc6IGZ1bmN0aW9uIChzb3VyY2VJZHMsIF9hKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlSWRzID09PSB2b2lkIDApIHsgc291cmNlSWRzID0gW107IH1cbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7XG4gICAgICAgICAgICAgICAgcHVibGlzaFNvdXJjZTogdHJ1ZSxcbiAgICAgICAgICAgIH0gOiBfYSwgcHVibGlzaFNvdXJjZSA9IF9iLnB1Ymxpc2hTb3VyY2UsIGNsaWVudE9mZnNldCA9IF9iLmNsaWVudE9mZnNldCwgZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gX2IuZ2V0U291cmNlQ2xpZW50T2Zmc2V0O1xuICAgICAgICAgICAgdmFyIG1vbml0b3IgPSBtYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgICAgICAgICAgIHZhciByZWdpc3RyeSA9IG1hbmFnZXIuZ2V0UmVnaXN0cnkoKTtcbiAgICAgICAgICAgIGludmFyaWFudCghbW9uaXRvci5pc0RyYWdnaW5nKCksICdDYW5ub3QgY2FsbCBiZWdpbkRyYWcgd2hpbGUgZHJhZ2dpbmcuJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHNvdXJjZUlkc18xID0gc291cmNlSWRzOyBfaSA8IHNvdXJjZUlkc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBzID0gc291cmNlSWRzXzFbX2ldO1xuICAgICAgICAgICAgICAgIGludmFyaWFudChyZWdpc3RyeS5nZXRTb3VyY2UocyksICdFeHBlY3RlZCBzb3VyY2VJZHMgdG8gYmUgcmVnaXN0ZXJlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzb3VyY2VJZCA9IG51bGw7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc291cmNlSWRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vbml0b3IuY2FuRHJhZ1NvdXJjZShzb3VyY2VJZHNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkID0gc291cmNlSWRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc291cmNlSWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc291cmNlQ2xpZW50T2Zmc2V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChjbGllbnRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIGdldFNvdXJjZUNsaWVudE9mZnNldCA9PT0gJ2Z1bmN0aW9uJywgJ1doZW4gY2xpZW50T2Zmc2V0IGlzIHByb3ZpZGVkLCBnZXRTb3VyY2VDbGllbnRPZmZzZXQgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgICAgICAgICAgICAgIHNvdXJjZUNsaWVudE9mZnNldCA9IGdldFNvdXJjZUNsaWVudE9mZnNldChzb3VyY2VJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc291cmNlID0gcmVnaXN0cnkuZ2V0U291cmNlKHNvdXJjZUlkKTtcbiAgICAgICAgICAgIHZhciBpdGVtID0gc291cmNlLmJlZ2luRHJhZyhtb25pdG9yLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICBpbnZhcmlhbnQoaXNPYmplY3QoaXRlbSksICdJdGVtIG11c3QgYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICAgICAgcmVnaXN0cnkucGluU291cmNlKHNvdXJjZUlkKTtcbiAgICAgICAgICAgIHZhciBpdGVtVHlwZSA9IHJlZ2lzdHJ5LmdldFNvdXJjZVR5cGUoc291cmNlSWQpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBleHBvcnRzLkJFR0lOX0RSQUcsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtVHlwZTogaXRlbVR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkOiBzb3VyY2VJZCxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50T2Zmc2V0OiBjbGllbnRPZmZzZXQgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlQ2xpZW50T2Zmc2V0OiBzb3VyY2VDbGllbnRPZmZzZXQgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaXNTb3VyY2VQdWJsaWM6ICEhcHVibGlzaFNvdXJjZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcHVibGlzaERyYWdTb3VyY2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtb25pdG9yID0gbWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgICAgICAgICBpZiAoIW1vbml0b3IuaXNEcmFnZ2luZygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogZXhwb3J0cy5QVUJMSVNIX0RSQUdfU09VUkNFIH07XG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiBmdW5jdGlvbiAodGFyZ2V0SWRzQXJnLCBfYSkge1xuICAgICAgICAgICAgdmFyIGNsaWVudE9mZnNldCA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkuY2xpZW50T2Zmc2V0O1xuICAgICAgICAgICAgaW52YXJpYW50KEFycmF5LmlzQXJyYXkodGFyZ2V0SWRzQXJnKSwgJ0V4cGVjdGVkIHRhcmdldElkcyB0byBiZSBhbiBhcnJheS4nKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRJZHMgPSB0YXJnZXRJZHNBcmcuc2xpY2UoMCk7XG4gICAgICAgICAgICB2YXIgbW9uaXRvciA9IG1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgICAgICAgdmFyIHJlZ2lzdHJ5ID0gbWFuYWdlci5nZXRSZWdpc3RyeSgpO1xuICAgICAgICAgICAgaW52YXJpYW50KG1vbml0b3IuaXNEcmFnZ2luZygpLCAnQ2Fubm90IGNhbGwgaG92ZXIgd2hpbGUgbm90IGRyYWdnaW5nLicpO1xuICAgICAgICAgICAgaW52YXJpYW50KCFtb25pdG9yLmRpZERyb3AoKSwgJ0Nhbm5vdCBjYWxsIGhvdmVyIGFmdGVyIGRyb3AuJyk7XG4gICAgICAgICAgICAvLyBGaXJzdCBjaGVjayBpbnZhcmlhbnRzLlxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXJnZXRJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0SWQgPSB0YXJnZXRJZHNbaV07XG4gICAgICAgICAgICAgICAgaW52YXJpYW50KHRhcmdldElkcy5sYXN0SW5kZXhPZih0YXJnZXRJZCkgPT09IGksICdFeHBlY3RlZCB0YXJnZXRJZHMgdG8gYmUgdW5pcXVlIGluIHRoZSBwYXNzZWQgYXJyYXkuJyk7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHJlZ2lzdHJ5LmdldFRhcmdldCh0YXJnZXRJZCk7XG4gICAgICAgICAgICAgICAgaW52YXJpYW50KHRhcmdldCwgJ0V4cGVjdGVkIHRhcmdldElkcyB0byBiZSByZWdpc3RlcmVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGRyYWdnZWRJdGVtVHlwZSA9IG1vbml0b3IuZ2V0SXRlbVR5cGUoKTtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aG9zZSB0YXJnZXRJZHMgdGhhdCBkb24ndCBtYXRjaCB0aGUgdGFyZ2V0VHlwZS4gIFRoaXNcbiAgICAgICAgICAgIC8vIGZpeGVzIHNoYWxsb3cgaXNPdmVyIHdoaWNoIHdvdWxkIG9ubHkgYmUgbm9uLXNoYWxsb3cgYmVjYXVzZSBvZlxuICAgICAgICAgICAgLy8gbm9uLW1hdGNoaW5nIHRhcmdldHMuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGFyZ2V0SWRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldElkID0gdGFyZ2V0SWRzW2ldO1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUeXBlID0gcmVnaXN0cnkuZ2V0VGFyZ2V0VHlwZSh0YXJnZXRJZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVzVHlwZV8xLmRlZmF1bHQodGFyZ2V0VHlwZSwgZHJhZ2dlZEl0ZW1UeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpbmFsbHkgY2FsbCBob3ZlciBvbiBhbGwgbWF0Y2hpbmcgdGFyZ2V0cy5cbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgdGFyZ2V0SWRzXzEgPSB0YXJnZXRJZHM7IF9pIDwgdGFyZ2V0SWRzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldElkID0gdGFyZ2V0SWRzXzFbX2ldO1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSByZWdpc3RyeS5nZXRUYXJnZXQodGFyZ2V0SWQpO1xuICAgICAgICAgICAgICAgIHRhcmdldC5ob3Zlcihtb25pdG9yLCB0YXJnZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IGV4cG9ydHMuSE9WRVIsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZHM6IHRhcmdldElkcyxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50T2Zmc2V0OiBjbGllbnRPZmZzZXQgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZHJvcDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgICAgICB2YXIgbW9uaXRvciA9IG1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgICAgICAgdmFyIHJlZ2lzdHJ5ID0gbWFuYWdlci5nZXRSZWdpc3RyeSgpO1xuICAgICAgICAgICAgaW52YXJpYW50KG1vbml0b3IuaXNEcmFnZ2luZygpLCAnQ2Fubm90IGNhbGwgZHJvcCB3aGlsZSBub3QgZHJhZ2dpbmcuJyk7XG4gICAgICAgICAgICBpbnZhcmlhbnQoIW1vbml0b3IuZGlkRHJvcCgpLCAnQ2Fubm90IGNhbGwgZHJvcCB0d2ljZSBkdXJpbmcgb25lIGRyYWcgb3BlcmF0aW9uLicpO1xuICAgICAgICAgICAgdmFyIHRhcmdldElkcyA9IG1vbml0b3JcbiAgICAgICAgICAgICAgICAuZ2V0VGFyZ2V0SWRzKClcbiAgICAgICAgICAgICAgICAuZmlsdGVyKG1vbml0b3IuY2FuRHJvcE9uVGFyZ2V0LCBtb25pdG9yKTtcbiAgICAgICAgICAgIHRhcmdldElkcy5yZXZlcnNlKCk7XG4gICAgICAgICAgICAvLyBNdWx0aXBsZSBhY3Rpb25zIGFyZSBkaXNwYXRjaGVkIGhlcmUsIHdoaWNoIGlzIHdoeSB0aGlzIGRvZXNuJ3QgcmV0dXJuIGFuIGFjdGlvblxuICAgICAgICAgICAgdGFyZ2V0SWRzLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldElkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSByZWdpc3RyeS5nZXRUYXJnZXQodGFyZ2V0SWQpO1xuICAgICAgICAgICAgICAgIHZhciBkcm9wUmVzdWx0ID0gdGFyZ2V0LmRyb3AobW9uaXRvciwgdGFyZ2V0SWQpO1xuICAgICAgICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgZHJvcFJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcgfHwgaXNPYmplY3QoZHJvcFJlc3VsdCksICdEcm9wIHJlc3VsdCBtdXN0IGVpdGhlciBiZSBhbiBvYmplY3Qgb3IgdW5kZWZpbmVkLicpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZHJvcFJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJvcFJlc3VsdCA9IGluZGV4ID09PSAwID8ge30gOiBtb25pdG9yLmdldERyb3BSZXN1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZXhwb3J0cy5EUk9QLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wUmVzdWx0OiBfX2Fzc2lnbih7fSwgb3B0aW9ucywgZHJvcFJlc3VsdCksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBtYW5hZ2VyLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kRHJhZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1vbml0b3IgPSBtYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgICAgICAgICAgIHZhciByZWdpc3RyeSA9IG1hbmFnZXIuZ2V0UmVnaXN0cnkoKTtcbiAgICAgICAgICAgIGludmFyaWFudChtb25pdG9yLmlzRHJhZ2dpbmcoKSwgJ0Nhbm5vdCBjYWxsIGVuZERyYWcgd2hpbGUgbm90IGRyYWdnaW5nLicpO1xuICAgICAgICAgICAgdmFyIHNvdXJjZUlkID0gbW9uaXRvci5nZXRTb3VyY2VJZCgpO1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IHJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZCwgdHJ1ZSk7XG4gICAgICAgICAgICBzb3VyY2UuZW5kRHJhZyhtb25pdG9yLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICByZWdpc3RyeS51bnBpblNvdXJjZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogZXhwb3J0cy5FTkRfRFJBRyB9O1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVEcmFnRHJvcEFjdGlvbnM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvYWN0aW9ucy9kcmFnRHJvcC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFERF9TT1VSQ0UgPSAnZG5kLWNvcmUvQUREX1NPVVJDRSc7XG5leHBvcnRzLkFERF9UQVJHRVQgPSAnZG5kLWNvcmUvQUREX1RBUkdFVCc7XG5leHBvcnRzLlJFTU9WRV9TT1VSQ0UgPSAnZG5kLWNvcmUvUkVNT1ZFX1NPVVJDRSc7XG5leHBvcnRzLlJFTU9WRV9UQVJHRVQgPSAnZG5kLWNvcmUvUkVNT1ZFX1RBUkdFVCc7XG5mdW5jdGlvbiBhZGRTb3VyY2Uoc291cmNlSWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBleHBvcnRzLkFERF9TT1VSQ0UsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHNvdXJjZUlkOiBzb3VyY2VJZCxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5hZGRTb3VyY2UgPSBhZGRTb3VyY2U7XG5mdW5jdGlvbiBhZGRUYXJnZXQodGFyZ2V0SWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBleHBvcnRzLkFERF9UQVJHRVQsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHRhcmdldElkOiB0YXJnZXRJZCxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5hZGRUYXJnZXQgPSBhZGRUYXJnZXQ7XG5mdW5jdGlvbiByZW1vdmVTb3VyY2Uoc291cmNlSWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBleHBvcnRzLlJFTU9WRV9TT1VSQ0UsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHNvdXJjZUlkOiBzb3VyY2VJZCxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5yZW1vdmVTb3VyY2UgPSByZW1vdmVTb3VyY2U7XG5mdW5jdGlvbiByZW1vdmVUYXJnZXQodGFyZ2V0SWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBleHBvcnRzLlJFTU9WRV9UQVJHRVQsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHRhcmdldElkOiB0YXJnZXRJZCxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5yZW1vdmVUYXJnZXQgPSByZW1vdmVUYXJnZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvYWN0aW9ucy9yZWdpc3RyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXBEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGNoZWNrRGVjb3JhdG9yQXJndW1lbnRzKGZ1bmN0aW9uTmFtZSwgc2lnbmF0dXJlKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmb3IgKHZhciBfYSA9IDAsIGFyZ3NfMSA9IGFyZ3M7IF9hIDwgYXJnc18xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgdmFyIGFyZyA9IGFyZ3NfMVtfYV07XG4gICAgICAgICAgICBpZiAoYXJnICYmIGFyZy5wcm90b3R5cGUgJiYgYXJnLnByb3RvdHlwZS5yZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBzZWVtIHRvIGJlIGFwcGx5aW5nIHRoZSBhcmd1bWVudHMgaW4gdGhlIHdyb25nIG9yZGVyLiAnICtcbiAgICAgICAgICAgICAgICAgICAgKFwiSXQgc2hvdWxkIGJlIFwiICsgZnVuY3Rpb25OYW1lICsgXCIoXCIgKyBzaWduYXR1cmUgKyBcIikoQ29tcG9uZW50KSwgbm90IHRoZSBvdGhlciB3YXkgYXJvdW5kLiBcIikgK1xuICAgICAgICAgICAgICAgICAgICAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy10cm91Ymxlc2hvb3RpbmcuaHRtbCN5b3Utc2VlbS10by1iZS1hcHBseWluZy10aGUtYXJndW1lbnRzLWluLXRoZS13cm9uZy1vcmRlcicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGNoZWNrRGVjb3JhdG9yQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQiwgY29tcGFyZSwgY29tcGFyZUNvbnRleHQpIHtcbiAgdmFyIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIG9iakEsIG9iakIpIDogdm9pZCAwO1xuXG4gIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgIHJldHVybiAhIXJldDtcbiAgfVxuXG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgIW9iakEgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG5cbiAgICBpZiAoIWJIYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlQSA9IG9iakFba2V5XTtcbiAgICB2YXIgdmFsdWVCID0gb2JqQltrZXldO1xuXG4gICAgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgdmFsdWVBLCB2YWx1ZUIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICBpZiAocmV0ID09PSBmYWxzZSB8fCAocmV0ID09PSB2b2lkIDAgJiYgdmFsdWVBICE9PSB2YWx1ZUIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2hhbGxvd2VxdWFsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IEZyYW1lIGZyb20gJy4vRnJhbWUnO1xuaW1wb3J0IFJ1bGVyIGZyb20gJy4vUnVsZXInO1xuaW1wb3J0IExpbmUgZnJvbSAnLi9MaW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cblxuICAgIHRoaXMudGltZVNwYW4gPSB0aGlzLnByb3BzLnRpbWVTcGFuO1xuXG4gICAgLy9taW5WaWV344GM44GE44GP44Gk44GC44KL44GL44Kr44Km44Oz44OI44CCbWluVmlld+OBrzE15YiG44GK44GN44CC44Gd44KM44KS5YWD44Gr6auY44GV44KS6KiI566X44CCYm9yZGVy5YiGMXB46Laz44GZXG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gKHRoaXMudGltZVNwYW4uZ2V0RGlzdGFuY2UoKSAvIDE1KSAqICh0aGlzLnByb3BzLm1pbkhlaWdodCArIDEpO1xuXG4gICAgLy8x5YiG44GC44Gf44KK44Gu6auY44GV44KS566X5Ye6XG4gICAgdGhpcy5wZXJNaW5IZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHQgLyB0aGlzLnRpbWVTcGFuLmdldERpc3RhbmNlKCk7XG5cbiAgICB0aGlzLmxpbmVXaWR0aCA9IHByb3BzLmxpbmVXaWR0aDtcblxuICAgIHRoaXMuY3JlYXRlZEV2ZW50SWQgPSAwO1xuICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmZyYW1lQ29tcG9uZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZXZlbnRDb21wb25lbnRzID0gW11cbiAgfVxuXG4gIGdldCBsaW5lQ29tcG9uZW50cygpe1xuICAgIC8vIHJlZnPjga/jgqrjg5bjgrjjgqfjgq/jg4jjgarjga7jgafpoIbnlarjga7kv53oqLzjgYzjgarjgYTjgZ/jgoFET03jgYvjgonjgajjgorjgb7jgZnjgIJcbiAgICBjb25zdCBsaW5lcyA9IHRoaXMuZnJhbWVDb21wb25lbnQucmVmcy5saW5lc1dyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnLnRsTGluZVdyYXBwZXInKTtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGluZXMpLm1hcChlbGVtID0+IHtcbiAgICAgIGNvbnN0IGlkID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxuICAgICAgcmV0dXJuIHRoaXMuZnJhbWVDb21wb25lbnQucmVmc1snbGluZUAnICsgaWRdXG4gICAgfSlcbiAgfVxuXG4gIGdldCBsYXN0TGluZSgpe1xuICAgIHZhciBsaW5lcyA9IHRoaXMubGluZUNvbXBvbmVudHNcbiAgICByZXR1cm4gbGluZXNbbGluZXMubGVuZ3RoIC0gMV1cbiAgfVxuXG4gIGRyYWdnaW5nT3ZlcihsZWZ0KXtcblxuICAgIGNvbnN0IGxpbmVDb21wb25lbnQgPSB0aGlzLmZpbmRMaW5lQnlMZWZ0KGxlZnQpO1xuICAgIGlmKGxpbmVDb21wb25lbnQpe1xuICAgICAgaWYodGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50ICE9PSBsaW5lQ29tcG9uZW50KXtcbiAgICAgICAgaWYodGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50KXtcbiAgICAgICAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQuY2xlYXJEcmFnZ2luZ092ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQgPSBsaW5lQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQuZHJhZ2dpbmdPdmVyKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudCl7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudC5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICAgICAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsaW5lQ29tcG9uZW50O1xuICB9XG5cbiAgY2xlYXJEcmFnZ2luZ092ZXIoKXtcbiAgICBpZih0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQpe1xuICAgICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50LmNsZWFyRHJhZ2dpbmdPdmVyKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VG90YWxXaWR0aCgpe1xuICAgIGlmKHRoaXMudG90YWxXaWR0aENhY2hlID09PSB1bmRlZmluZWQpe1xuICAgICAgdGhpcy50b3RhbFdpZHRoQ2FjaGUgPSB0aGlzLnByb3BzLmxpbmVEYXRhLnJlZHVjZSgodmFsLCBkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBoYXNSdWxlciA9IGluZGV4ICUgdGhpcy5wcm9wcy5ydWxlckludGVydmFsID09PSAwO1xuICAgICAgICByZXR1cm4gdmFsICsgKGhhc1J1bGVyID8gdGhpcy5saW5lV2lkdGggKyBSdWxlci53aWR0aCA6IHRoaXMubGluZVdpZHRoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRvdGFsV2lkdGhDYWNoZVxuICB9XG5cbiAgZmluZEV2ZW50QnlJZChldmVudElkKXtcbiAgICByZXR1cm4gdGhpcy5ldmVudENvbXBvbmVudHMuZmluZChldiA9PiBldi5wcm9wcy5pZCA9PSBldmVudElkKTtcbiAgfVxuXG4gIGZpbmRMaW5lQnlMZWZ0KGxlZnQpe1xuICAgIHZhciB3aWR0aCA9IDA7XG4gICAgcmV0dXJuIHRoaXMubGluZUNvbXBvbmVudHMuZmluZChsaW5lID0+IHtcbiAgICAgIHdpZHRoICs9IGxpbmUucHJvcHMuaGFzUnVsZXIgPyB0aGlzLnByb3BzLmxpbmVXaWR0aCArIFJ1bGVyLndpZHRoIDogdGhpcy5wcm9wcy5saW5lV2lkdGg7XG4gICAgICBpZihsZWZ0IDwgd2lkdGgpe1xuICAgICAgICByZXR1cm4gbGluZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldExpbmVMZWZ0KGxpbmVJZCl7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5saW5lRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGluZURhdGEgPSB0aGlzLnByb3BzLmxpbmVEYXRhW2ldO1xuICAgICAgY29uc3QgaGFzUnVsZXIgPSBpICUgdGhpcy5wcm9wcy5ydWxlckludGVydmFsID09PSAwO1xuICAgICAgaWYoaGFzUnVsZXIpe1xuICAgICAgICBsZWZ0ICs9IFJ1bGVyLndpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZihsaW5lRGF0YS5pZCA9PSBsaW5lSWQpe1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgbGVmdCArPSB0aGlzLnByb3BzLmxpbmVXaWR0aDtcbiAgICB9XG5cbiAgICBsZWZ0ICs9IExpbmUuc2lkZVBhZGRpbmc7XG5cbiAgICByZXR1cm4gbGVmdDtcbiAgfVxuXG4gIGdldFRpbWVTcGFuKHRvcCwgaGVpZ2h0KXtcbiAgICBjb25zdCBzdGFydFRpbWUgPSB0aGlzLnRvcFRvVGltZSh0b3ApO1xuXG4gICAgY29uc3QgZW5kVGltZSA9IHN0YXJ0VGltZS5hZGRNaW4oaGVpZ2h0IC8gdGhpcy5wZXJNaW5IZWlnaHQpO1xuICAgIHJldHVybiBuZXcgVGltZVNwYW4oc3RhcnRUaW1lLCBlbmRUaW1lKTtcbiAgfVxuXG4gIG1pbnV0ZVRvSGVpZ2h0KG1pbnV0ZSl7XG4gICAgcmV0dXJuIChtaW51dGUgKiB0aGlzLnBlck1pbkhlaWdodCkgLSAxO1xuICB9XG5cbiAgdGltZVNwYW5Ub0hlaWdodCh0aW1lU3Bhbil7XG4gICAgcmV0dXJuIHRoaXMubWludXRlVG9IZWlnaHQodGltZVNwYW4uZ2V0RGlzdGFuY2UoKSk7XG4gIH1cblxuICB0aW1lVG9Ub3AodGltZSl7XG4gICAgcmV0dXJuIHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuZ2V0RGlzdGFuY2UodGltZSkgKiB0aGlzLnBlck1pbkhlaWdodCAtIDE7XG4gIH1cblxuICB0b3BUb1RpbWUodG9wKXtcbiAgICBpZih0b3AgPD0gMCl7XG4gICAgICByZXR1cm4gdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKTtcbiAgICB9XG4gICAgbGV0IG1pbnV0ZSA9IHRvcCAvIHRoaXMucGVyTWluSGVpZ2h0O1xuICAgIGNvbnN0IHJlc3QgPSBtaW51dGUgJSB0aGlzLnByb3BzLm1pbkludGVydmFsO1xuICAgIGlmKHJlc3QgIT09IDApe1xuICAgICAgaWYocmVzdCA+IHRoaXMucHJvcHMubWluSW50ZXJ2YWwgLyAyKXtcbiAgICAgICAgbWludXRlICs9IHRoaXMucHJvcHMubWluSW50ZXJ2YWwgLSByZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWludXRlIC09IHJlc3Q7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmFkZE1pbihtaW51dGUpO1xuICB9XG5cbiAgZmluZFByZXZFdmVudChldmVudENvbXBvbmVudCl7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRDb21wb25lbnRzXG4gICAgICAuZmlsdGVyKGV2ID0+ICFldi5zdGF0ZS5kcmFnZ2FibGUgJiYgZXYubGluZUlkID09IGV2ZW50Q29tcG9uZW50LmxpbmVJZCkvL+WQjOOBmOWIl+OBruOCguOBruOBoOOBkeOBq+e1nuOCi1xuICAgICAgLnNvcnQoKGEsIGIpID0+IC0oYS5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuY29tcGFyZShiLmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkpKS8v5pmC6ZaT44Gu6ZmN6aCG44Gn5Lim44Gz5pu/44GIXG4gICAgICAuZmluZChldiA9PiBldi5jdXJyZW50VGltZVNwYW4uZ2V0RW5kVGltZSgpLmNvbXBhcmUoZXZlbnRDb21wb25lbnQuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSA8PSAwKS8v6ZmN6aCG44Gq44Gu44Gn5a++6LGh44KI44KK5pyA5Yid44Gr6ZaL5aeL5pmC6ZaT44GM6Iul44GE44KC44Gu44GMcHJldlxuICAgICAgO1xuICB9XG5cbiAgZ2V0UHJldkJvdHRvbShldmVudENvbXBvbmVudCl7XG4gICAgY29uc3QgcHJldkV2ZW50ID0gdGhpcy5maW5kUHJldkV2ZW50KGV2ZW50Q29tcG9uZW50KTtcbiAgICBsZXQgYm90dG9tVGltZTtcbiAgICBpZihwcmV2RXZlbnQpe1xuICAgICAgYm90dG9tVGltZSA9IHByZXZFdmVudC5jdXJyZW50VGltZVNwYW4uZ2V0RW5kVGltZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3R0b21UaW1lID0gdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50aW1lVG9Ub3AoYm90dG9tVGltZSk7XG4gIH1cblxuICBmaW5kTmV4dEV2ZW50KGV2ZW50Q29tcG9uZW50KXtcbiAgICByZXR1cm4gdGhpcy5maW5kTmV4dEV2ZW50QnlUaW1lKGV2ZW50Q29tcG9uZW50LmxpbmVJZCwgZXZlbnRDb21wb25lbnQuY3VycmVudFRpbWVTcGFuLmdldEVuZFRpbWUoKSk7XG4gIH1cblxuICBmaW5kTmV4dEV2ZW50QnlUaW1lKGxpbmVJZCwgdGltZSl7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRDb21wb25lbnRzXG4gICAgICAuZmlsdGVyKGV2ID0+ICAhZXYuc3RhdGUuZHJhZ2dhYmxlICYmIGV2LmxpbmVJZCA9PSBsaW5lSWQpLy/lkIzjgZjliJfjga7jgoLjga7jgaDjgZHjgavntZ7jgotcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5jb21wYXJlKGIuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSkvL+aZgumWk+OBruaYh+mghuOBp+S4puOBs+abv+OBiFxuICAgICAgLmZpbmQoZXYgPT4gZXYuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUodGltZSkgPj0gMCkvL+aYh+mghuOBquOBruOBp+WvvuixoeOCiOOCiuacgOWIneOBq+mWi+Wni+aZgumWk+OBjOmBheOBhOOCguOBruOBjG5leHRcbiAgICAgIDtcbiAgfVxuXG4gIGdldEV2ZW50c09uTGluZShsaW5lSWQpe1xuICAgIHJldHVybiB0aGlzLmV2ZW50Q29tcG9uZW50cy5maWx0ZXIoZXYgPT4gICFldi5zdGF0ZS5kcmFnZ2FibGUgJiYgZXYubGluZUlkID09IGxpbmVJZClcbiAgfVxuXG4gIGdldE5leHRUaW1lKGxpbmVJZCwgdGltZSl7XG4gICAgY29uc3QgbmV4dEV2ZW50ID0gdGhpcy5maW5kTmV4dEV2ZW50QnlUaW1lKGxpbmVJZCwgdGltZSk7XG4gICAgbGV0IG5leHRUaW1lO1xuICAgIGlmKG5leHRFdmVudCl7XG4gICAgICBuZXh0VGltZSA9IG5leHRFdmVudC5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRUaW1lID0gdGhpcy50aW1lU3Bhbi5nZXRFbmRUaW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUaW1lO1xuICB9XG5cbiAgZ2V0RnJlZU1pbnV0ZShsaW5lSWQsIHRpbWUpe1xuICAgIGNvbnN0IG5leHRUaW1lID0gdGhpcy5nZXROZXh0VGltZShsaW5lSWQsIHRpbWUpO1xuICAgIHJldHVybiB0aW1lLmdldERpc3RhbmNlKG5leHRUaW1lKTtcbiAgfVxuXG4gIGdldE5leHRUb3AoZXZlbnRDb21wb25lbnQpe1xuICAgIHJldHVybiB0aGlzLnRpbWVUb1RvcCh0aGlzLmdldE5leHRUaW1lKGV2ZW50Q29tcG9uZW50LmxpbmVJZCwgZXZlbnRDb21wb25lbnQuY3VycmVudFRpbWVTcGFuLmdldEVuZFRpbWUoKSkpO1xuICB9XG4gIGFkZEV2ZW50cyhldmVudHMpe1xuICAgIHJldHVybiB0aGlzLmZyYW1lQ29tcG9uZW50LmFkZEV2ZW50cyhldmVudHMpO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCl7XG4gICAgdGhpcy5mcmFtZUNvbXBvbmVudC5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICBpZihuZXh0UHJvcHMubGluZURhdGEgIT09IHRoaXMucHJvcHMubGluZURhdGEpe1xuICAgICAgdGhpcy50b3RhbFdpZHRoQ2FjaGUgPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYW1lXG4gICAgICAgIHJlZj1cImZyYW1lXCJcbiAgICAgICAgbGluZURhdGE9e3RoaXMucHJvcHMubGluZURhdGF9XG4gICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICBsaW5lV2lkdGg9e3RoaXMucHJvcHMubGluZVdpZHRofVxuICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fVxuICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cbiAgICAgICAgbGluZUhlaWdodD17dGhpcy5saW5lSGVpZ2h0fVxuICAgICAgICB0aW1lbGluZT17dGhpc31cbiAgICAgICAgcnVsZXJJbnRlcnZhbD17dGhpcy5wcm9wcy5ydWxlckludGVydmFsfVxuICAgICAgICBldmVudHM9e3RoaXMucHJvcHMuZXZlbnRzfVxuICAgICAgICBjaGlsZHJlbj17dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgY2hpbGRXaWR0aD17dGhpcy5wcm9wcy5jaGlsZFdpZHRofVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbi8vIFRpbWVsaW5lLnByb3BUeXBlcyA9IHtcbi8vICAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuLy8gICBsaW5lRGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbi8vICAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuLy8gICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbi8vICAgfSkpLmlzUmVxdWlyZWQsXG4vLyAgIGxpbmVXaWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4vLyAgIHJ1bGVySW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgbWluSW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4vLyAgIGhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4vLyB9XG5cblRpbWVsaW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgbWluSW50ZXJ2YWw6IDEsXG4gIGNoaWxkV2lkdGg6IDBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIi8qKlxuICog5LiA5bqm55Sf5oiQ44GX44Gf44Kq44OW44K444Kn44Kv44OI44Gv5aSJ5pu044GX44G+44Gb44KT44CCXG4gKiDlpInmm7Tjg6Hjgr3jg4Pjg4njga/mlrDjgZfjgYTjgqrjg5bjgrjjgqfjgq/jg4jjgpLluLDjgZfjgb7jgZnjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVxue1xuICBzdGF0aWMgZWFjaE1pbihjYWxsYmFjaywgbWludXRlSW50ZXJ2YWwpe1xuICAgICAgdmFyIGNvdW50ID0gNjAgLyBtaW51dGVJbnRlcnZhbDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgIHZhciBtaW4gPSBpICogbWludXRlSW50ZXJ2YWw7XG4gICAgICAgICAgaWYobWluIDwgNjApe1xuICAgICAgICAgICAgICB2YXIgZGlzcGxheU1pbiA9IG1pbiA8IDEwID8gJzAnICsgbWluIDogbWluICsgJyc7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwobWluLCBpLCBtaW4sIGRpc3BsYXlNaW4pO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIOmFjeWIl+OBi+OCiVRpbWXjgpLnlJ/miJBcbiAgICogQHBhcmFtICB7YXJyYXl9IHRpbWUgW2hvdXIsIG1pbl3jga7phY3liJdcbiAgICogQHJldHVybiB7VGltZX1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGltZVswXSwgdGltZVsxXSk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoaG91ciwgbWluKXtcbiAgICB0aGlzLl9ob3VyID0gaG91ciA9PT0gdW5kZWZpbmVkID8gMCA6IHBhcnNlSW50KGhvdXIsIDEwKTtcbiAgICB0aGlzLl9taW4gPSBtaW4gPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChtaW4sIDEwKTtcbiAgICB3aGlsZSh0aGlzLl9taW4gPCAwKXtcbiAgICAgICAgLS10aGlzLl9ob3VyO1xuICAgICAgICB0aGlzLl9taW4gPSA2MCArIHRoaXMuX21pbjtcbiAgICB9XG5cbiAgICB3aGlsZSh0aGlzLl9taW4gPiA1OSl7XG4gICAgICAgICsrdGhpcy5faG91cjtcbiAgICAgICAgdGhpcy5fbWluID0gdGhpcy5fbWluIC0gNjA7XG4gICAgfVxuXG4gICAgaWYodGhpcy5faG91ciA8IDApXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50b1N0cmluZygpKycgaXMgbm90IHZhbGlkIHRpbWUuJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SG91cigpeyByZXR1cm4gdGhpcy5faG91cjsgfTtcbiAgZ2V0TWluKCl7IHJldHVybiB0aGlzLl9taW47IH07XG5cbiAgY2xvbmUoKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aGlzLmdldEhvdXIoKSwgdGhpcy5nZXRNaW4oKSk7XG4gIH07XG5cbiAgYWRkTWluKG1pbil7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGhpcy5nZXRIb3VyKCksIHRoaXMuZ2V0TWluKCkgKyBwYXJzZUludChtaW4sIDEwKSk7XG4gIH07XG5cbiAgZXF1YWxzKHRpbWUpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SG91cigpID09PSB0aW1lLmdldEhvdXIoKSAmJiB0aGlzLmdldE1pbigpID09PSB0aW1lLmdldE1pbigpO1xuICB9O1xuXG4gIGNvbXBhcmUodGltZSl7XG4gICAgICBpZih0aGlzLmdldEhvdXIoKSA+IHRpbWUuZ2V0SG91cigpKVxuICAgICAge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0aGlzLmdldEhvdXIoKSA8IHRpbWUuZ2V0SG91cigpKVxuICAgICAge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgICBpZih0aGlzLmdldE1pbigpID4gdGltZS5nZXRNaW4oKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMuZ2V0TWluKCkgPCB0aW1lLmdldE1pbigpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgZ2V0RGlzdGFuY2UodGFyZ2V0VGltZSl7XG4gICAgICB2YXIgdGFyZ2V0SG91ciA9IHRhcmdldFRpbWUuZ2V0SG91cigpO1xuICAgICAgdmFyIGhvdXJEaXN0YW5jZSA9IHRhcmdldEhvdXIgLSB0aGlzLl9ob3VyO1xuICAgICAgcmV0dXJuIChob3VyRGlzdGFuY2UgKiA2MCkgKyAodGFyZ2V0VGltZS5nZXRNaW4oKSAtIHRoaXMuX21pbik7XG4gIH07XG5cbiAgdG9TdHJpbmcoKXtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlUaW1lKCk7XG4gIH07XG5cbiAgZ2V0RGlzcGxheUhvdXIoKXtcbiAgICAgIHJldHVybiB0aGlzLl9ob3VyIDwgMjQgPyB0aGlzLl9ob3VyIDogdGhpcy5faG91ciAtIDI0O1xuICB9O1xuXG4gIGdldERpc3BsYXlNaW4oKXtcbiAgICAgIHJldHVybiB0aGlzLl9taW4gPCAxMCA/ICcwJyt0aGlzLl9taW4gOiB0aGlzLl9taW47XG4gIH07XG5cbiAgZ2V0RGlzcGxheVRpbWUoKXtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlIb3VyKCkgKyc6JysgdGhpcy5nZXREaXNwbGF5TWluKCk7XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERyYWdEcm9wQ29udGV4dF8xID0gcmVxdWlyZShcIi4vRHJhZ0Ryb3BDb250ZXh0XCIpO1xuZXhwb3J0cy5EcmFnRHJvcENvbnRleHQgPSBEcmFnRHJvcENvbnRleHRfMS5EcmFnRHJvcENvbnRleHQ7XG5leHBvcnRzLkRyYWdEcm9wQ29udGV4dFByb3ZpZGVyID0gRHJhZ0Ryb3BDb250ZXh0XzEuRHJhZ0Ryb3BDb250ZXh0UHJvdmlkZXI7XG52YXIgRHJhZ0xheWVyXzEgPSByZXF1aXJlKFwiLi9EcmFnTGF5ZXJcIik7XG5leHBvcnRzLkRyYWdMYXllciA9IERyYWdMYXllcl8xLmRlZmF1bHQ7XG52YXIgRHJhZ1NvdXJjZV8xID0gcmVxdWlyZShcIi4vRHJhZ1NvdXJjZVwiKTtcbmV4cG9ydHMuRHJhZ1NvdXJjZSA9IERyYWdTb3VyY2VfMS5kZWZhdWx0O1xudmFyIERyb3BUYXJnZXRfMSA9IHJlcXVpcmUoXCIuL0Ryb3BUYXJnZXRcIik7XG5leHBvcnRzLkRyb3BUYXJnZXQgPSBEcm9wVGFyZ2V0XzEuZGVmYXVsdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBfYTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBkbmRfY29yZV8xID0gcmVxdWlyZShcImRuZC1jb3JlXCIpO1xudmFyIGNoZWNrRGVjb3JhdG9yQXJndW1lbnRzXzEgPSByZXF1aXJlKFwiLi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50c1wiKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcbnZhciBob2lzdFN0YXRpY3MgPSByZXF1aXJlKCdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycpO1xudmFyIGlzQ2xhc3NDb21wb25lbnQgPSByZXF1aXJlKCdyZWNvbXBvc2UvaXNDbGFzc0NvbXBvbmVudCcpLmRlZmF1bHQ7XG4vKipcbiAqIENyZWF0ZSB0aGUgUmVhY3QgQ29udGV4dFxuICovXG5leHBvcnRzLkNvbnN1bWVyID0gKF9hID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7IGRyYWdEcm9wTWFuYWdlcjogdW5kZWZpbmVkIH0pLCBfYS5Db25zdW1lciksIGV4cG9ydHMuUHJvdmlkZXIgPSBfYS5Qcm92aWRlcjtcbi8qKlxuICogQ3JlYXRlcyB0aGUgY29udGV4dCBvYmplY3Qgd2UncmUgcHJvdmlkaW5nXG4gKiBAcGFyYW0gYmFja2VuZFxuICogQHBhcmFtIGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2hpbGRDb250ZXh0KGJhY2tlbmQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkcmFnRHJvcE1hbmFnZXI6IGRuZF9jb3JlXzEuY3JlYXRlRHJhZ0Ryb3BNYW5hZ2VyKGJhY2tlbmQsIGNvbnRleHQpLFxuICAgIH07XG59XG5leHBvcnRzLmNyZWF0ZUNoaWxkQ29udGV4dCA9IGNyZWF0ZUNoaWxkQ29udGV4dDtcbi8qKlxuICogQSBSZWFjdCBjb21wb25lbnQgdGhhdCBwcm92aWRlcyB0aGUgUmVhY3QtRG5EIGNvbnRleHRcbiAqL1xuZXhwb3J0cy5EcmFnRHJvcENvbnRleHRQcm92aWRlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBiYWNrZW5kID0gX2EuYmFja2VuZCwgY29udGV4dCA9IF9hLmNvbnRleHQsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XG4gICAgdmFyIGNvbnRleHRWYWx1ZSA9IGNyZWF0ZUNoaWxkQ29udGV4dChiYWNrZW5kLCBjb250ZXh0KTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChleHBvcnRzLlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0VmFsdWUgfSwgY2hpbGRyZW4pO1xufTtcbi8qKlxuICogV3JhcCB0aGUgcm9vdCBjb21wb25lbnQgb2YgeW91ciBhcHBsaWNhdGlvbiB3aXRoIERyYWdEcm9wQ29udGV4dCBkZWNvcmF0b3IgdG8gc2V0IHVwIFJlYWN0IERuRC5cbiAqIFRoaXMgbGV0cyB5b3Ugc3BlY2lmeSB0aGUgYmFja2VuZCwgYW5kIHNldHMgdXAgdGhlIHNoYXJlZCBEbkQgc3RhdGUgYmVoaW5kIHRoZSBzY2VuZXMuXG4gKiBAcGFyYW0gYmFja2VuZEZhY3RvcnkgVGhlIERuRCBiYWNrZW5kIGZhY3RvcnlcbiAqIEBwYXJhbSBiYWNrZW5kQ29udGV4dCBUaGUgYmFja2VuZCBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIERyYWdEcm9wQ29udGV4dChiYWNrZW5kRmFjdG9yeSwgYmFja2VuZENvbnRleHQpIHtcbiAgICBjaGVja0RlY29yYXRvckFyZ3VtZW50c18xLmRlZmF1bHQoJ0RyYWdEcm9wQ29udGV4dCcsICdiYWNrZW5kJywgYmFja2VuZEZhY3RvcnkpO1xuICAgIHZhciBjaGlsZENvbnRleHQgPSBjcmVhdGVDaGlsZENvbnRleHQoYmFja2VuZEZhY3RvcnksIGJhY2tlbmRDb250ZXh0KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGVDb250ZXh0KERlY29yYXRlZENvbXBvbmVudCkge1xuICAgICAgICB2YXIgRGVjb3JhdGVkID0gRGVjb3JhdGVkQ29tcG9uZW50O1xuICAgICAgICB2YXIgZGlzcGxheU5hbWUgPSBEZWNvcmF0ZWQuZGlzcGxheU5hbWUgfHwgRGVjb3JhdGVkLm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gICAgICAgIHZhciBEcmFnRHJvcENvbnRleHRDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgICAgICBfX2V4dGVuZHMoRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLCBfc3VwZXIpO1xuICAgICAgICAgICAgZnVuY3Rpb24gRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIERyYWdEcm9wQ29udGV4dENvbnRhaW5lci5wcm90b3R5cGUuZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW52YXJpYW50KHRoaXMucmVmLmN1cnJlbnQsICdJbiBvcmRlciB0byBhY2Nlc3MgYW4gaW5zdGFuY2Ugb2YgdGhlIGRlY29yYXRlZCBjb21wb25lbnQgaXQgY2FuIG5vdCBiZSBhIHN0YXRlbGVzcyBjb21wb25lbnQuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLnByb3RvdHlwZS5nZXRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZENvbnRleHQuZHJhZ0Ryb3BNYW5hZ2VyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIERyYWdEcm9wQ29udGV4dENvbnRhaW5lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChleHBvcnRzLlByb3ZpZGVyLCB7IHZhbHVlOiBjaGlsZENvbnRleHQgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEZWNvcmF0ZWQsIF9fYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7IHJlZjogaXNDbGFzc0NvbXBvbmVudChEZWNvcmF0ZWQpID8gdGhpcy5yZWYgOiB1bmRlZmluZWQgfSkpKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLkRlY29yYXRlZENvbXBvbmVudCA9IERlY29yYXRlZENvbXBvbmVudDtcbiAgICAgICAgICAgIERyYWdEcm9wQ29udGV4dENvbnRhaW5lci5kaXNwbGF5TmFtZSA9IFwiRHJhZ0Ryb3BDb250ZXh0KFwiICsgZGlzcGxheU5hbWUgKyBcIilcIjtcbiAgICAgICAgICAgIHJldHVybiBEcmFnRHJvcENvbnRleHRDb250YWluZXI7XG4gICAgICAgIH0oUmVhY3QuQ29tcG9uZW50KSk7XG4gICAgICAgIHJldHVybiBob2lzdFN0YXRpY3MoRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLCBEZWNvcmF0ZWRDb21wb25lbnQpO1xuICAgIH07XG59XG5leHBvcnRzLkRyYWdEcm9wQ29udGV4dCA9IERyYWdEcm9wQ29udGV4dDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvRHJhZ0Ryb3BDb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChjb21wYXJhdG9yKHZhbHVlLCBhcnJheVtpbmRleF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBvdmVyUmVzdCA9IHJlcXVpcmUoJy4vX292ZXJSZXN0JyksXG4gICAgc2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19zZXRUb1N0cmluZycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VSZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZXM6IHRydWUsXG4gICAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gICAgbWl4aW5zOiB0cnVlLFxuICAgIHByb3BUeXBlczogdHJ1ZSxcbiAgICB0eXBlOiB0cnVlXG59O1xuXG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgICBuYW1lOiB0cnVlLFxuICAgIGxlbmd0aDogdHJ1ZSxcbiAgICBwcm90b3R5cGU6IHRydWUsXG4gICAgY2FsbGVyOiB0cnVlLFxuICAgIGNhbGxlZTogdHJ1ZSxcbiAgICBhcmd1bWVudHM6IHRydWUsXG4gICAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mICYmIGdldFByb3RvdHlwZU9mKE9iamVjdCk7XG5cbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHsgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcblxuICAgICAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKCFSRUFDVF9TVEFUSUNTW2tleV0gJiYgIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAoIWJsYWNrbGlzdCB8fCAhYmxhY2tsaXN0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICAgICAgICAgIHRyeSB7IC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGlzQ2xhc3NDb21wb25lbnQgPSBmdW5jdGlvbiBpc0NsYXNzQ29tcG9uZW50KENvbXBvbmVudCkge1xuICByZXR1cm4gQm9vbGVhbihDb21wb25lbnQgJiYgQ29tcG9uZW50LnByb3RvdHlwZSAmJiB0eXBlb2YgQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPT09ICdmdW5jdGlvbicpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNDbGFzc0NvbXBvbmVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWNvbXBvc2UvaXNDbGFzc0NvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBIb3VyIGZyb20gJy4vSG91cic7XG5pbXBvcnQgUnVsZXIgZnJvbSAnLi9SdWxlcic7XG5pbXBvcnQgTGluZUxhYmVsIGZyb20gJy4vTGluZUxhYmVsJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vVGltZWxpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdXJzOiBbXSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBkcmFnZ2luZ092ZXI6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMucHJvcHMudGltZVNwYW4uZWFjaFRpbWUoKGtleSwgdGltZSkgPT4ge1xuICAgICAgaWYoIXRpbWUuZXF1YWxzKHRoaXMucHJvcHMudGltZVNwYW4uZ2V0RW5kVGltZSgpKSl7XG4gICAgICAgIHRoaXMuc3RhdGUuaG91cnMucHVzaChcbiAgICAgICAgICA8SG91clxuICAgICAgICAgICAga2V5PXt0aW1lLmdldEhvdXIoKX1cbiAgICAgICAgICAgIHRpbWU9e3RpbWV9XG4gICAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnZhcnMgPSB0aGlzLnByb3BzLnZhcnMgfHwge307XG4gIH1cblxuICBnZXRSZWxhdGl2ZVRvcChlKXtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5wcm9wcy5mcmFtZS5yZWZzLmxpbmVzV3JhcHBlcjtcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gZS5jbGllbnRZIC0gcGFyZW50UmVjdC50b3AgKyBwYXJlbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5saW5lRGlkQ2xpY2spe1xuICAgICAgY29uc3QgdGltZSA9IHRoaXMucHJvcHMudGltZWxpbmUudG9wVG9UaW1lKHRoaXMuZ2V0UmVsYXRpdmVUb3AoZSkpO1xuICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5saW5lRGlkQ2xpY2soe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICAgIGZyZWVNaW51dGU6IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0RnJlZU1pbnV0ZSh0aGlzLnByb3BzLmlkLCB0aW1lKSxcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQucmVmcy5saW5lc1dyYXBwZXIuc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbExlZnQ6IHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQuZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgICAgIHRvcDogZS5jbGllbnRZLFxuICAgICAgICAgIGxlZnQ6IGUuY2xpZW50WCxcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnQ6IGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ29udGV4dE1lbnUoZSl7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5saW5lRGlkUmlnaHRDbGljayl7XG4gICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmxpbmVEaWRSaWdodENsaWNrKHtcbiAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhZ2dpbmdPdmVyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmdPdmVyOiB0cnVlfSk7XG4gIH1cblxuICBjbGVhckRyYWdnaW5nT3Zlcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nT3ZlcjogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50ID09IHRoaXMpe1xuICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50ID0gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxMaW5lV3JhcHBlclwiIGRhdGEtaWQ9e3RoaXMucHJvcHMuaWR9IG9uQ29udGV4dE1lbnU9e2UgPT4gdGhpcy5vbkNvbnRleHRNZW51KGUpfT5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5wcm9wcy5oYXNSdWxlcil7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UnVsZXJcbiAgICAgICAgICAgICAgICBrZXk9eydydWxlcl8nICsgdGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgICAgPGRpdiBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0bExpbmVWaWV3Jywge3RsRXZlbjogdGhpcy5wcm9wcy5ldmVuLCB0bE9kZDogIXRoaXMucHJvcHMuZXZlbn0sIHt0bE92ZXI6IHRoaXMuc3RhdGUuZHJhZ2dpbmdPdmVyfSl9IHN0eWxlPXt7d2lkdGg6IHRoaXMucHJvcHMud2lkdGggKyAncHgnfX0+XG4gICAgICAgICAge3RoaXMuc3RhdGUuaG91cnN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5MaW5lLnNpZGVQYWRkaW5nID0gMTtcblxuLy8gTGluZS5wcm9wVHlwZXMgPSB7XG4vLyAgIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4vLyAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4vLyAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuLy8gICBldmVuOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuLy8gICAvL1RPRE8g5b6q55Kw5Y+C54Wn44Gr44Gq44KL44Gu44GnaW1wb3J044Gn44GN44Ga44CC44Go44KK44GC44GI44GaYW5544Gn44GU44G+44GL44GX44Gm44G+44GZ44CCXG4vLyAgIHRpbWVsaW5lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4vLyAgIGhhc1J1bGVyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG4vLyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9MaW5lLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUnVsZXIgZnJvbSAnLi9SdWxlcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUxhYmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNSdWxlcjogdGhpcy5wcm9wcy5oYXNSdWxlcixcbiAgICAgIHByZXZSdWxlcjogdGhpcy5wcm9wcy5wcmV2UnVsZXIsXG4gICAgICBpc0xhc3Q6IHRoaXMucHJvcHMuaXNMYXN0XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3t3aWR0aDogdGhpcy5wcm9wcy53aWR0aCwgbWFyZ2luTGVmdDogdGhpcy5zdGF0ZS5oYXNSdWxlciA/IFJ1bGVyLndpZHRoICsgJ3B4JyA6IDB9fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe3RsTGFiZWw6IHRydWUsIHRsSGFzUnVsZXI6IHRoaXMuc3RhdGUuaGFzUnVsZXIsIHRsUHJldlJ1bGVyOiB0aGlzLnN0YXRlLnByZXZSdWxlciwgdGxMYXN0OiB0aGlzLnN0YXRlLmlzTGFzdH0pfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGluZUxhYmVsLmhlaWdodCA9IDE2O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTGluZUxhYmVsLmpzeCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEhhbmRsZXJSb2xlO1xuKGZ1bmN0aW9uIChIYW5kbGVyUm9sZSkge1xuICAgIEhhbmRsZXJSb2xlW1wiU09VUkNFXCJdID0gXCJTT1VSQ0VcIjtcbiAgICBIYW5kbGVyUm9sZVtcIlRBUkdFVFwiXSA9IFwiVEFSR0VUXCI7XG59KShIYW5kbGVyUm9sZSA9IGV4cG9ydHMuSGFuZGxlclJvbGUgfHwgKGV4cG9ydHMuSGFuZGxlclJvbGUgPSB7fSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2ludGVyZmFjZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWF0Y2hlc1R5cGUodGFyZ2V0VHlwZSwgZHJhZ2dlZEl0ZW1UeXBlKSB7XG4gICAgaWYgKGRyYWdnZWRJdGVtVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0VHlwZSA9PT0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0VHlwZSlcbiAgICAgICAgPyB0YXJnZXRUeXBlLnNvbWUoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgPT09IGRyYWdnZWRJdGVtVHlwZTsgfSlcbiAgICAgICAgOiB0YXJnZXRUeXBlID09PSBkcmFnZ2VkSXRlbVR5cGU7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtYXRjaGVzVHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi91dGlscy9tYXRjaGVzVHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0cmljdEVxdWFsaXR5ID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgPT09IGI7IH07XG4vKipcbiAqIERldGVybWluZSBpZiB0d28gY2FydGVzaWFuIGNvb3JkaW5hdGUgb2Zmc2V0cyBhcmUgZXF1YWxcbiAqIEBwYXJhbSBvZmZzZXRBXG4gKiBAcGFyYW0gb2Zmc2V0QlxuICovXG5mdW5jdGlvbiBhcmVDb29yZHNFcXVhbChvZmZzZXRBLCBvZmZzZXRCKSB7XG4gICAgaWYgKCFvZmZzZXRBICYmICFvZmZzZXRCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICghb2Zmc2V0QSB8fCAhb2Zmc2V0Qikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gb2Zmc2V0QS54ID09PSBvZmZzZXRCLnggJiYgb2Zmc2V0QS55ID09PSBvZmZzZXRCLnk7XG4gICAgfVxufVxuZXhwb3J0cy5hcmVDb29yZHNFcXVhbCA9IGFyZUNvb3Jkc0VxdWFsO1xuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHR3byBhcnJheXMgb2YgaXRlbXMgYXJlIGVxdWFsXG4gKiBAcGFyYW0gYSBUaGUgZmlyc3QgYXJyYXkgb2YgaXRlbXNcbiAqIEBwYXJhbSBiIFRoZSBzZWNvbmQgYXJyYXkgb2YgaXRlbXNcbiAqL1xuZnVuY3Rpb24gYXJlQXJyYXlzRXF1YWwoYSwgYiwgaXNFcXVhbCkge1xuICAgIGlmIChpc0VxdWFsID09PSB2b2lkIDApIHsgaXNFcXVhbCA9IGV4cG9ydHMuc3RyaWN0RXF1YWxpdHk7IH1cbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICghaXNFcXVhbChhW2ldLCBiW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5hcmVBcnJheXNFcXVhbCA9IGFyZUFycmF5c0VxdWFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL3V0aWxzL2VxdWFsaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgbWV0aG9kcyBsaWtlIGBfLmRpZmZlcmVuY2VgIHdpdGhvdXQgc3VwcG9ydFxuICogZm9yIGV4Y2x1ZGluZyBtdWx0aXBsZSBhcnJheXMgb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBleGNsdWRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBiYXNlRGlmZmVyZW5jZShhcnJheSwgdmFsdWVzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgdmFsdWVzTGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcblxuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgdmFsdWVzID0gYXJyYXlNYXAodmFsdWVzLCBiYXNlVW5hcnkoaXRlcmF0ZWUpKTtcbiAgfVxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgfVxuICBlbHNlIGlmICh2YWx1ZXMubGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgdmFsdWVzID0gbmV3IFNldENhY2hlKHZhbHVlcyk7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID09IG51bGwgPyB2YWx1ZSA6IGl0ZXJhdGVlKHZhbHVlKTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciB2YWx1ZXNJbmRleCA9IHZhbHVlc0xlbmd0aDtcbiAgICAgIHdoaWxlICh2YWx1ZXNJbmRleC0tKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbdmFsdWVzSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyh2YWx1ZXMsIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VEaWZmZXJlbmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZURpZmZlcmVuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGludGVyc2VjdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pbnRlcnNlY3Rpb24nKTtcbmV4cG9ydHMuTk9ORSA9IFtdO1xuZXhwb3J0cy5BTEwgPSBbXTtcbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gaGFuZGxlciBJRHMgYXJlIGRpcnR5IG9yIG5vdC5cbiAqXG4gKiBAcGFyYW0gZGlydHlJZHMgVGhlIHNldCBvZiBkaXJ0eSBoYW5kbGVyIGlkc1xuICogQHBhcmFtIGhhbmRsZXJJZHMgVGhlIHNldCBvZiBoYW5kbGVyIGlkcyB0byBjaGVja1xuICovXG5mdW5jdGlvbiBhcmVEaXJ0eShkaXJ0eUlkcywgaGFuZGxlcklkcykge1xuICAgIGlmIChkaXJ0eUlkcyA9PT0gZXhwb3J0cy5OT05FKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRpcnR5SWRzID09PSBleHBvcnRzLkFMTCB8fCB0eXBlb2YgaGFuZGxlcklkcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBpbnRlcnNlY3Rpb24oaGFuZGxlcklkcywgZGlydHlJZHMpLmxlbmd0aCA+IDA7XG59XG5leHBvcnRzLmFyZURpcnR5ID0gYXJlRGlydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvdXRpbHMvZGlydGluZXNzLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgY2hlY2tEZWNvcmF0b3JBcmd1bWVudHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzXCIpO1xudmFyIERyYWdEcm9wQ29udGV4dF8xID0gcmVxdWlyZShcIi4vRHJhZ0Ryb3BDb250ZXh0XCIpO1xudmFyIGhvaXN0U3RhdGljcyA9IHJlcXVpcmUoJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJyk7XG52YXIgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG52YXIgc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnc2hhbGxvd2VxdWFsJyk7XG52YXIgaXNDbGFzc0NvbXBvbmVudCA9IHJlcXVpcmUoJ3JlY29tcG9zZS9pc0NsYXNzQ29tcG9uZW50JykuZGVmYXVsdDtcbmZ1bmN0aW9uIERyYWdMYXllcihjb2xsZWN0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBjaGVja0RlY29yYXRvckFyZ3VtZW50c18xLmRlZmF1bHQoJ0RyYWdMYXllcicsICdjb2xsZWN0Wywgb3B0aW9uc10nLCBjb2xsZWN0LCBvcHRpb25zKTtcbiAgICBpbnZhcmlhbnQodHlwZW9mIGNvbGxlY3QgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBcImNvbGxlY3RcIiBwcm92aWRlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gRHJhZ0xheWVyIHRvIGJlIGEgZnVuY3Rpb24gdGhhdCBjb2xsZWN0cyBwcm9wcyB0byBpbmplY3QgaW50byB0aGUgY29tcG9uZW50LiAnLCAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuIFJlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1sYXllci5odG1sJywgY29sbGVjdCk7XG4gICAgaW52YXJpYW50KGlzUGxhaW5PYmplY3Qob3B0aW9ucyksICdFeHBlY3RlZCBcIm9wdGlvbnNcIiBwcm92aWRlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIERyYWdMYXllciB0byBiZSBhIHBsYWluIG9iamVjdCB3aGVuIHNwZWNpZmllZC4gJyArXG4gICAgICAgICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLWxheWVyLmh0bWwnLCBvcHRpb25zKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGVMYXllcihEZWNvcmF0ZWRDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIERlY29yYXRlZCA9IERlY29yYXRlZENvbXBvbmVudDtcbiAgICAgICAgdmFyIF9hID0gb3B0aW9ucy5hcmVQcm9wc0VxdWFsLCBhcmVQcm9wc0VxdWFsID0gX2EgPT09IHZvaWQgMCA/IHNoYWxsb3dFcXVhbCA6IF9hO1xuICAgICAgICB2YXIgZGlzcGxheU5hbWUgPSBEZWNvcmF0ZWQuZGlzcGxheU5hbWUgfHwgRGVjb3JhdGVkLm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gICAgICAgIHZhciBEcmFnTGF5ZXJDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgICAgICBfX2V4dGVuZHMoRHJhZ0xheWVyQ29udGFpbmVyLCBfc3VwZXIpO1xuICAgICAgICAgICAgZnVuY3Rpb24gRHJhZ0xheWVyQ29udGFpbmVyKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgICAgICAgICAgX3RoaXMuaXNDdXJyZW50bHlNb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlID0gX3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQoX3RoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLCBcIkRlY29yYXRlZENvbXBvbmVudFwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEZWNvcmF0ZWRDb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLmdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGludmFyaWFudCh0aGlzLnJlZi5jdXJyZW50LCAnSW4gb3JkZXIgdG8gYWNjZXNzIGFuIGluc3RhbmNlIG9mIHRoZSBkZWNvcmF0ZWQgY29tcG9uZW50IGl0IGNhbiBub3QgYmUgYSBzdGF0ZWxlc3MgY29tcG9uZW50LicpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZi5jdXJyZW50O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICghYXJlUHJvcHNFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpIHx8XG4gICAgICAgICAgICAgICAgICAgICFzaGFsbG93RXF1YWwobmV4dFN0YXRlLCB0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgRHJhZ0xheWVyQ29udGFpbmVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDdXJyZW50bHlNb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudW5zdWJzY3JpYmVGcm9tT2Zmc2V0Q2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tT2Zmc2V0Q2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tT2Zmc2V0Q2hhbmdlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy51bnN1YnNjcmliZUZyb21TdGF0ZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVN0YXRlQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tU3RhdGVDaGFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdEcm9wQ29udGV4dF8xLkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyYWdEcm9wTWFuYWdlciA9IF9hLmRyYWdEcm9wTWFuYWdlcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRyYWdEcm9wTWFuYWdlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWNlaXZlRHJhZ0Ryb3BNYW5hZ2VyKGRyYWdEcm9wTWFuYWdlcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIExldCBjb21wb25lbnREaWRNb3VudCBmaXJlIHRvIGluaXRpYWxpemUgdGhlIGNvbGxlY3RlZCBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmlzQ3VycmVudGx5TW91bnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KERlY29yYXRlZCwgX19hc3NpZ24oe30sIF90aGlzLnByb3BzLCBfdGhpcy5zdGF0ZSwgeyByZWY6IGlzQ2xhc3NDb21wb25lbnQoRGVjb3JhdGVkKSA/IF90aGlzLnJlZiA6IHVuZGVmaW5lZCB9KSkpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLnJlY2VpdmVEcmFnRHJvcE1hbmFnZXIgPSBmdW5jdGlvbiAoZHJhZ0Ryb3BNYW5hZ2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWFuYWdlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VyID0gZHJhZ0Ryb3BNYW5hZ2VyO1xuICAgICAgICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgZHJhZ0Ryb3BNYW5hZ2VyID09PSAnb2JqZWN0JywgJ0NvdWxkIG5vdCBmaW5kIHRoZSBkcmFnIGFuZCBkcm9wIG1hbmFnZXIgaW4gdGhlIGNvbnRleHQgb2YgJXMuICcgK1xuICAgICAgICAgICAgICAgICAgICAnTWFrZSBzdXJlIHRvIHdyYXAgdGhlIHRvcC1sZXZlbCBjb21wb25lbnQgb2YgeW91ciBhcHAgd2l0aCBEcmFnRHJvcENvbnRleHQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy10cm91Ymxlc2hvb3RpbmcuaHRtbCNjb3VsZC1ub3QtZmluZC10aGUtZHJhZy1hbmQtZHJvcC1tYW5hZ2VyLWluLXRoZS1jb250ZXh0JywgZGlzcGxheU5hbWUsIGRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgbW9uaXRvciA9IHRoaXMubWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21PZmZzZXRDaGFuZ2UgPSBtb25pdG9yLnN1YnNjcmliZVRvT2Zmc2V0Q2hhbmdlKHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVN0YXRlQ2hhbmdlID0gbW9uaXRvci5zdWJzY3JpYmVUb1N0YXRlQ2hhbmdlKHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNDdXJyZW50bHlNb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG5leHRTdGF0ZSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFzaGFsbG93RXF1YWwobmV4dFN0YXRlLCB0aGlzLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuZ2V0Q3VycmVudFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tYW5hZ2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG1vbml0b3IgPSB0aGlzLm1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xsZWN0KG1vbml0b3IsIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIERyYWdMYXllckNvbnRhaW5lci5kaXNwbGF5TmFtZSA9IFwiRHJhZ0xheWVyKFwiICsgZGlzcGxheU5hbWUgKyBcIilcIjtcbiAgICAgICAgICAgIHJldHVybiBEcmFnTGF5ZXJDb250YWluZXI7XG4gICAgICAgIH0oUmVhY3QuQ29tcG9uZW50KSk7XG4gICAgICAgIHJldHVybiBob2lzdFN0YXRpY3MoRHJhZ0xheWVyQ29udGFpbmVyLCBEZWNvcmF0ZWRDb21wb25lbnQpO1xuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBEcmFnTGF5ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0RyYWdMYXllci5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIERyYWdEcm9wQ29udGV4dF8xID0gcmVxdWlyZShcIi4vRHJhZ0Ryb3BDb250ZXh0XCIpO1xudmFyIGRpc3Bvc2FibGVzXzEgPSByZXF1aXJlKFwiLi91dGlscy9kaXNwb3NhYmxlc1wiKTtcbnZhciBpc0NsYXNzQ29tcG9uZW50ID0gcmVxdWlyZSgncmVjb21wb3NlL2lzQ2xhc3NDb21wb25lbnQnKS5kZWZhdWx0O1xudmFyIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xudmFyIGhvaXN0U3RhdGljcyA9IHJlcXVpcmUoJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJyk7XG52YXIgc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnc2hhbGxvd2VxdWFsJyk7XG5mdW5jdGlvbiBkZWNvcmF0ZUhhbmRsZXIoX2EpIHtcbiAgICB2YXIgRGVjb3JhdGVkQ29tcG9uZW50ID0gX2EuRGVjb3JhdGVkQ29tcG9uZW50LCBjcmVhdGVIYW5kbGVyID0gX2EuY3JlYXRlSGFuZGxlciwgY3JlYXRlTW9uaXRvciA9IF9hLmNyZWF0ZU1vbml0b3IsIGNyZWF0ZUNvbm5lY3RvciA9IF9hLmNyZWF0ZUNvbm5lY3RvciwgcmVnaXN0ZXJIYW5kbGVyID0gX2EucmVnaXN0ZXJIYW5kbGVyLCBjb250YWluZXJEaXNwbGF5TmFtZSA9IF9hLmNvbnRhaW5lckRpc3BsYXlOYW1lLCBnZXRUeXBlID0gX2EuZ2V0VHlwZSwgY29sbGVjdCA9IF9hLmNvbGxlY3QsIG9wdGlvbnMgPSBfYS5vcHRpb25zO1xuICAgIHZhciBfYiA9IG9wdGlvbnMuYXJlUHJvcHNFcXVhbCwgYXJlUHJvcHNFcXVhbCA9IF9iID09PSB2b2lkIDAgPyBzaGFsbG93RXF1YWwgOiBfYjtcbiAgICB2YXIgRGVjb3JhdGVkID0gRGVjb3JhdGVkQ29tcG9uZW50O1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IERlY29yYXRlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBEZWNvcmF0ZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICB2YXIgRHJhZ0Ryb3BDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhEcmFnRHJvcENvbnRhaW5lciwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gRHJhZ0Ryb3BDb250YWluZXIocHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAgICAgX3RoaXMuaXNDdXJyZW50bHlNb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBfdGhpcy5oYW5kbGVDaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgICAgICAgICBfdGhpcy5kaXNwb3NhYmxlID0gbmV3IGRpc3Bvc2FibGVzXzEuU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgICAgICAgICAgX3RoaXMucmVjZWl2ZVByb3BzKHByb3BzKTtcbiAgICAgICAgICAgIF90aGlzLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuICAgICAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuZ2V0SGFuZGxlcklkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcklkO1xuICAgICAgICB9O1xuICAgICAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5yZWYuY3VycmVudDtcbiAgICAgICAgfTtcbiAgICAgICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIChuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuICghYXJlUHJvcHNFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpIHx8XG4gICAgICAgICAgICAgICAgIXNoYWxsb3dFcXVhbChuZXh0U3RhdGUsIHRoaXMuc3RhdGUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kaXNwb3NhYmxlID0gbmV3IGRpc3Bvc2FibGVzXzEuU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZVByb3BzKHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIChwcmV2UHJvcHMpIHtcbiAgICAgICAgICAgIGlmICghYXJlUHJvcHNFcXVhbCh0aGlzLnByb3BzLCBwcmV2UHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlUHJvcHModGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUucmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5yZWNlaXZlUHJvcHMocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5yZWNlaXZlVHlwZShnZXRUeXBlKHByb3BzKSk7XG4gICAgICAgIH07XG4gICAgICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5yZWNlaXZlVHlwZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFuZGxlck1vbml0b3IgfHwgIXRoaXMubWFuYWdlciB8fCAhdGhpcy5oYW5kbGVyQ29ubmVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IHRoaXMuY3VycmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUeXBlID0gdHlwZTtcbiAgICAgICAgICAgIHZhciBfYSA9IHJlZ2lzdGVySGFuZGxlcih0eXBlLCB0aGlzLmhhbmRsZXIsIHRoaXMubWFuYWdlciksIGhhbmRsZXJJZCA9IF9hLmhhbmRsZXJJZCwgdW5yZWdpc3RlciA9IF9hLnVucmVnaXN0ZXI7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJJZCA9IGhhbmRsZXJJZDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlck1vbml0b3IucmVjZWl2ZUhhbmRsZXJJZChoYW5kbGVySWQpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyQ29ubmVjdG9yLnJlY2VpdmVIYW5kbGVySWQoaGFuZGxlcklkKTtcbiAgICAgICAgICAgIHZhciBnbG9iYWxNb25pdG9yID0gdGhpcy5tYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgICAgICAgICAgIHZhciB1bnN1YnNjcmliZSA9IGdsb2JhbE1vbml0b3Iuc3Vic2NyaWJlVG9TdGF0ZUNoYW5nZSh0aGlzLmhhbmRsZUNoYW5nZSwgeyBoYW5kbGVySWRzOiBbaGFuZGxlcklkXSB9KTtcbiAgICAgICAgICAgIHRoaXMuZGlzcG9zYWJsZS5zZXREaXNwb3NhYmxlKG5ldyBkaXNwb3NhYmxlc18xLkNvbXBvc2l0ZURpc3Bvc2FibGUobmV3IGRpc3Bvc2FibGVzXzEuRGlzcG9zYWJsZSh1bnN1YnNjcmliZSksIG5ldyBkaXNwb3NhYmxlc18xLkRpc3Bvc2FibGUodW5yZWdpc3RlcikpKTtcbiAgICAgICAgfTtcbiAgICAgICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmV4dFN0YXRlID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcbiAgICAgICAgICAgIGlmICghc2hhbGxvd0VxdWFsKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwb3NhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXJDb25uZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJDb25uZWN0b3IucmVjZWl2ZUhhbmRsZXJJZChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmdldEN1cnJlbnRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYW5kbGVyQ29ubmVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5leHRTdGF0ZSA9IGNvbGxlY3QodGhpcy5oYW5kbGVyQ29ubmVjdG9yLmhvb2tzLCB0aGlzLmhhbmRsZXJNb25pdG9yKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaW52YXJpYW50KGlzUGxhaW5PYmplY3QobmV4dFN0YXRlKSwgJ0V4cGVjdGVkIGBjb2xsZWN0YCBzcGVjaWZpZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgJyVzIGZvciAlcyB0byByZXR1cm4gYSBwbGFpbiBvYmplY3Qgb2YgcHJvcHMgdG8gaW5qZWN0LiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ0luc3RlYWQsIHJlY2VpdmVkICVzLicsIGNvbnRhaW5lckRpc3BsYXlOYW1lLCBkaXNwbGF5TmFtZSwgbmV4dFN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICAgIH07XG4gICAgICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdEcm9wQ29udGV4dF8xLkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ0Ryb3BNYW5hZ2VyID0gX2EuZHJhZ0Ryb3BNYW5hZ2VyO1xuICAgICAgICAgICAgICAgIGlmIChkcmFnRHJvcE1hbmFnZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMucmVjZWl2ZURyYWdEcm9wTWFuYWdlcihkcmFnRHJvcE1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIC8vIExldCBjb21wb25lbnREaWRNb3VudCBmaXJlIHRvIGluaXRpYWxpemUgdGhlIGNvbGxlY3RlZCBzdGF0ZVxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuaXNDdXJyZW50bHlNb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVjb3JhdGVkLCBfX2Fzc2lnbih7fSwgX3RoaXMucHJvcHMsIF90aGlzLnN0YXRlLCB7IHJlZjogX3RoaXMuaGFuZGxlciAmJiBpc0NsYXNzQ29tcG9uZW50KERlY29yYXRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX3RoaXMuaGFuZGxlci5yZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkIH0pKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5yZWNlaXZlRHJhZ0Ryb3BNYW5hZ2VyID0gZnVuY3Rpb24gKGRyYWdEcm9wTWFuYWdlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubWFuYWdlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyID0gZHJhZ0Ryb3BNYW5hZ2VyO1xuICAgICAgICAgICAgaW52YXJpYW50KHR5cGVvZiBkcmFnRHJvcE1hbmFnZXIgPT09ICdvYmplY3QnLCAnQ291bGQgbm90IGZpbmQgdGhlIGRyYWcgYW5kIGRyb3AgbWFuYWdlciBpbiB0aGUgY29udGV4dCBvZiAlcy4gJyArXG4gICAgICAgICAgICAgICAgJ01ha2Ugc3VyZSB0byB3cmFwIHRoZSB0b3AtbGV2ZWwgY29tcG9uZW50IG9mIHlvdXIgYXBwIHdpdGggRHJhZ0Ryb3BDb250ZXh0LiAnICtcbiAgICAgICAgICAgICAgICAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy10cm91Ymxlc2hvb3RpbmcuaHRtbCNjb3VsZC1ub3QtZmluZC10aGUtZHJhZy1hbmQtZHJvcC1tYW5hZ2VyLWluLXRoZS1jb250ZXh0JywgZGlzcGxheU5hbWUsIGRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlck1vbml0b3IgPSBjcmVhdGVNb25pdG9yKGRyYWdEcm9wTWFuYWdlcik7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJDb25uZWN0b3IgPSBjcmVhdGVDb25uZWN0b3IoZHJhZ0Ryb3BNYW5hZ2VyLmdldEJhY2tlbmQoKSk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIgPSBjcmVhdGVIYW5kbGVyKHRoaXMuaGFuZGxlck1vbml0b3IpO1xuICAgICAgICB9O1xuICAgICAgICBEcmFnRHJvcENvbnRhaW5lci5EZWNvcmF0ZWRDb21wb25lbnQgPSBEZWNvcmF0ZWRDb21wb25lbnQ7XG4gICAgICAgIERyYWdEcm9wQ29udGFpbmVyLmRpc3BsYXlOYW1lID0gY29udGFpbmVyRGlzcGxheU5hbWUgKyBcIihcIiArIGRpc3BsYXlOYW1lICsgXCIpXCI7XG4gICAgICAgIHJldHVybiBEcmFnRHJvcENvbnRhaW5lcjtcbiAgICB9KFJlYWN0LkNvbXBvbmVudCkpO1xuICAgIHJldHVybiBob2lzdFN0YXRpY3MoRHJhZ0Ryb3BDb250YWluZXIsIERlY29yYXRlZENvbXBvbmVudCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWNvcmF0ZUhhbmRsZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2RlY29yYXRlSGFuZGxlci5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBjbG9uZVdpdGhSZWZfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2Nsb25lV2l0aFJlZlwiKTtcbmZ1bmN0aW9uIHRocm93SWZDb21wb3NpdGVDb21wb25lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAvLyBDdXN0b20gY29tcG9uZW50cyBjYW4gbm8gbG9uZ2VyIGJlIHdyYXBwZWQgZGlyZWN0bHkgaW4gUmVhY3QgRG5EIDIuMFxuICAgIC8vIHNvIHRoYXQgd2UgZG9uJ3QgbmVlZCB0byBkZXBlbmQgb24gZmluZERPTU5vZGUoKSBmcm9tIHJlYWN0LWRvbS5cbiAgICBpZiAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZGlzcGxheU5hbWUgPSBlbGVtZW50LnR5cGUuZGlzcGxheU5hbWUgfHwgZWxlbWVudC50eXBlLm5hbWUgfHwgJ3RoZSBjb21wb25lbnQnO1xuICAgIHRocm93IG5ldyBFcnJvcignT25seSBuYXRpdmUgZWxlbWVudCBub2RlcyBjYW4gbm93IGJlIHBhc3NlZCB0byBSZWFjdCBEbkQgY29ubmVjdG9ycy4nICtcbiAgICAgICAgKFwiWW91IGNhbiBlaXRoZXIgd3JhcCBcIiArIGRpc3BsYXlOYW1lICsgXCIgaW50byBhIDxkaXY+LCBvciB0dXJuIGl0IGludG8gYSBcIikgK1xuICAgICAgICAnZHJhZyBzb3VyY2Ugb3IgYSBkcm9wIHRhcmdldCBpdHNlbGYuJyk7XG59XG5mdW5jdGlvbiB3cmFwSG9va1RvUmVjb2duaXplRWxlbWVudChob29rKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50T3JOb2RlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChlbGVtZW50T3JOb2RlID09PSB2b2lkIDApIHsgZWxlbWVudE9yTm9kZSA9IG51bGw7IH1cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gbnVsbDsgfVxuICAgICAgICAvLyBXaGVuIHBhc3NlZCBhIG5vZGUsIGNhbGwgdGhlIGhvb2sgc3RyYWlnaHQgYXdheS5cbiAgICAgICAgaWYgKCFyZWFjdF8xLmlzVmFsaWRFbGVtZW50KGVsZW1lbnRPck5vZGUpKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGVsZW1lbnRPck5vZGU7XG4gICAgICAgICAgICBob29rKG5vZGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBwYXNzZWQgYSBSZWFjdEVsZW1lbnQsIGNsb25lIGl0IGFuZCBhdHRhY2ggdGhpcyBmdW5jdGlvbiBhcyBhIHJlZi5cbiAgICAgICAgLy8gVGhpcyBoZWxwcyB1cyBhY2hpZXZlIGEgbmVhdCBBUEkgd2hlcmUgdXNlciBkb2Vzbid0IGV2ZW4ga25vdyB0aGF0IHJlZnNcbiAgICAgICAgLy8gYXJlIGJlaW5nIHVzZWQgdW5kZXIgdGhlIGhvb2QuXG4gICAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yTm9kZTtcbiAgICAgICAgdGhyb3dJZkNvbXBvc2l0ZUNvbXBvbmVudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIC8vIFdoZW4gbm8gb3B0aW9ucyBhcmUgcGFzc2VkLCB1c2UgdGhlIGhvb2sgZGlyZWN0bHlcbiAgICAgICAgdmFyIHJlZiA9IG9wdGlvbnMgPyBmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gaG9vayhub2RlLCBvcHRpb25zKTsgfSA6IGhvb2s7XG4gICAgICAgIHJldHVybiBjbG9uZVdpdGhSZWZfMS5kZWZhdWx0KGVsZW1lbnQsIHJlZik7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdyYXBDb25uZWN0b3JIb29rcyhob29rcykge1xuICAgIHZhciB3cmFwcGVkSG9va3MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhob29rcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBob29rID0gaG9va3Nba2V5XTtcbiAgICAgICAgdmFyIHdyYXBwZWRIb29rID0gd3JhcEhvb2tUb1JlY29nbml6ZUVsZW1lbnQoaG9vayk7XG4gICAgICAgIHdyYXBwZWRIb29rc1trZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gd3JhcHBlZEhvb2s7IH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHdyYXBwZWRIb29rcztcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHdyYXBDb25uZWN0b3JIb29rcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvd3JhcENvbm5lY3Rvckhvb2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzVmFsaWRUeXBlKHR5cGUsIGFsbG93QXJyYXkpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2YgdHlwZSA9PT0gJ3N5bWJvbCcgfHxcbiAgICAgICAgKCEhYWxsb3dBcnJheSAmJlxuICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh0eXBlKSAmJlxuICAgICAgICAgICAgdHlwZS5ldmVyeShmdW5jdGlvbiAodCkgeyByZXR1cm4gaXNWYWxpZFR5cGUodCwgZmFsc2UpOyB9KSkpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gaXNWYWxpZFR5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3V0aWxzL2lzVmFsaWRUeXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge2Nsb3Nlc3R9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRCYXNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIHJlbmRlckRpc3BsYXkocm93KXtcbiAgICBpZighcm93LnZhbHVlKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3RsRXZlbnREaXNwbGF5Um93Jywgcm93LmtleSk7XG4gICAgaWYoQXJyYXkuaXNBcnJheShyb3cudmFsdWUpKXtcbiAgICAgIGlmKHJvdy52YWx1ZS5sZW5ndGggPT09IDApe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtyb3cua2V5fT5cbiAgICAgICAgICB7cm93LnZhbHVlLm1hcCgodmFsLCBrZXkpID0+IDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cIml0ZW1cIj57dmFsfTwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17cm93LmtleX0+XG4gICAgICAgIHtyb3cudmFsdWV9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgbGV0IGRpc3BsYXlQb3NpdGlvbiA9ICdsZWZ0JztcbiAgICBpZih0aGlzLnByb3BzLnRpbWVsaW5lLmdldFRvdGFsV2lkdGgoKSA+IHRoaXMucHJvcHMucmlnaHQgKyA3MCl7XG4gICAgICBkaXNwbGF5UG9zaXRpb24gPSAncmlnaHQnO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJiYXNlXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319PlxuICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnByb3BzLmRyYWdnaW5nRGlzcGxheSl7XG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0bERyYWdnaW5nRGlzcGxheScsIGRpc3BsYXlQb3NpdGlvbil9IHN0eWxlPXt7dG9wOiB0aGlzLnByb3BzLmRyYWdnaW5nRGlzcGxheVRvcH19Pnt0aGlzLnByb3BzLmRyYWdnaW5nRGlzcGxheX08L2Rpdj4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bEV2ZW50RGlzcGxheVwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXkubWFwKHJvdyA9PiB0aGlzLnJlbmRlckRpc3BsYXkocm93KSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAmbmJzcDtcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRXZlbnRCYXNlLmRlZmF1bHRQcm9wcyA9IHtkaXNwbGF5OiBbXX07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudEJhc2UuanN4IiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vY29tcG9uZW50cy9UaW1lbGluZSc7XG5pbXBvcnQgVGltZSBmcm9tICcuL2NsYXNzZXMvVGltZSc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi9jbGFzc2VzL1RpbWVTcGFuJztcblxuZXhwb3J0IHtUaW1lbGluZSwgVGltZSwgVGltZVNwYW59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguZXM2IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgRG5kQmFja2VuZCBmcm9tICdyZWFjdC1kbmQtdG91Y2gtYmFja2VuZCc7XG5pbXBvcnQgRXZlbnRQcmV2aWV3IGZyb20gJy4vRXZlbnRQcmV2aWV3JztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBMaW5lTGFiZWwgZnJvbSAnLi9MaW5lTGFiZWwnO1xuaW1wb3J0IHsgRHJvcFRhcmdldCB9IGZyb20gJ3JlYWN0LWRuZCc7XG5cblxuY29uc3QgdGFyZ2V0ID0ge1xuICBkcm9wKHByb3BzLCBtb25pdG9yLCBjb21wb25lbnQpIHtcbiAgICBjb25zdCBpdGVtID0gbW9uaXRvci5nZXRJdGVtKCk7XG4gICAgY29uc3QgZGVsdGEgPSBtb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpO1xuXG4gICAgY29uc3QgaW5pdGFsT2Zmc2V0ID0gaXRlbS5kcmFnZ2luZ0NvbXBvbmVudC5nZXRPZmZzZXQoKTtcbiAgICBjb25zdCB0b3AgPSBNYXRoLnJvdW5kKGluaXRhbE9mZnNldC50b3AgKyBkZWx0YS55KTtcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5yb3VuZChpbml0YWxPZmZzZXQubGVmdCArIGRlbHRhLngpO1xuXG4gICAgaXRlbS5kcmFnZ2luZ0NvbXBvbmVudC5tb3ZlVG8odG9wLCBsZWZ0KTtcbiAgfSxcbiAgaG92ZXIocHJvcHMsIG1vbml0b3IsIGNvbXBvbmVudCl7XG4gICAgY29uc3QgY2xpZW50T2Zmc2V0ID0gbW9uaXRvci5nZXRTb3VyY2VDbGllbnRPZmZzZXQoKTtcbiAgICBpZihjbGllbnRPZmZzZXQpe1xuICAgICAgY29uc3QgaXRlbSA9IG1vbml0b3IuZ2V0SXRlbSgpO1xuICAgICAgY29uc3QgbGluZVdyYXBwZXJCb3VuZHMgPSBjb21wb25lbnQucmVmcy5saW5lc1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBsaW5lQ29tcG9uZW50ID0gcHJvcHMudGltZWxpbmUuZHJhZ2dpbmdPdmVyKGNsaWVudE9mZnNldC54IC0gbGluZVdyYXBwZXJCb3VuZHMubGVmdCArIChpdGVtLmRyYWdnaW5nQ29tcG9uZW50LnByb3BzLndpZHRoIC8gMi8qZXZlbnTjga7nnJ/jgpPkuK3jgpLln7rmupbjgavjgZnjgosqLykpO1xuICAgICAgY29uc3QgdGltZSA9IHByb3BzLnRpbWVsaW5lLnRvcFRvVGltZShjbGllbnRPZmZzZXQueSArIGNvbXBvbmVudC5yZWZzLmxpbmVzV3JhcHBlci5zY3JvbGxUb3AgLSBsaW5lV3JhcHBlckJvdW5kcy50b3ApO1xuICAgICAgaXRlbS5kcmFnZ2luZ0NvbXBvbmVudC5kcmFnZ2luZyh0aW1lLCBsaW5lQ29tcG9uZW50ID8gbGluZUNvbXBvbmVudC5wcm9wcy5pZCA6IG51bGwpO1xuICAgIH1cbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNvbGxlY3QoY29ubmVjdCwgbW9uaXRvcikge1xuICByZXR1cm4ge1xuICAgIGNvbm5lY3REcm9wVGFyZ2V0OiBjb25uZWN0LmRyb3BUYXJnZXQoKVxuICB9O1xufVxuXG5jbGFzcyBGcmFtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHJ1bGVySW50ZXJ2YWwgPSA0O1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1pbldpZHRoOiAwLFxuICAgIH1cblxuICAgIHRoaXMucmVzaXppbmdFdmVudCA9IG51bGw7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50ID0gdGhpcztcbiAgfVxuXG4gIHJlc2l6ZVVwKGV2ZW50Q29tcG9uZW50LCBjbGlja2VkVG9wKXtcbiAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gZXZlbnRDb21wb25lbnQuc3RhdGUuaGVpZ2h0O1xuICAgIGNvbnN0IHByZXZCb3R0b20gPSB0aGlzLnByb3BzLnRpbWVsaW5lLmdldFByZXZCb3R0b20oZXZlbnRDb21wb25lbnQpO1xuICAgIGNvbnN0IG1vdXNlTW92ZUV2ZW50ID0gKG1vdmVFdmVudCkgPT4ge1xuICAgICAgZXZlbnRDb21wb25lbnQucmVzaXppbmcgPSB0cnVlO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIGNsaWNrZWRUb3AgLSBtb3ZlRXZlbnQuY2xpZW50WTtcbiAgICAgIGlmKHRhcmdldEhlaWdodCA+IDM2KXtcbiAgICAgICAgbGV0IHRhcmdldFRvcCA9IGV2ZW50Q29tcG9uZW50LnN0YXRlLnRvcCAtICh0YXJnZXRIZWlnaHQgLSBldmVudENvbXBvbmVudC5zdGF0ZS5oZWlnaHQpO1xuICAgICAgICBpZih0YXJnZXRUb3AgPD0gcHJldkJvdHRvbSl7XG4gICAgICAgICAgdGFyZ2V0VG9wID0gcHJldkJvdHRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4gPSBuZXcgVGltZVNwYW4odGhpcy5wcm9wcy50aW1lbGluZS50b3BUb1RpbWUodGFyZ2V0VG9wKSwgZXZlbnRDb21wb25lbnQuY3VycmVudFRpbWVTcGFuLmdldEVuZFRpbWUoKSk7XG4gICAgICAgIGV2ZW50Q29tcG9uZW50LnNldFN0YXRlKHtcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodChldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuKSxcbiAgICAgICAgICB0b3A6IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpLFxuICAgICAgICAgIGRyYWdnaW5nRGlzcGxheTogZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXNwbGF5VGltZSgpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzdG9wTW92ZUV2ZW50ID0gKG1vdXNlRXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlRXZlbnQpO1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcE1vdmVFdmVudCk7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBzdG9wTW92ZUV2ZW50KTtcbiAgICAgIGV2ZW50Q29tcG9uZW50LmVuZFJlc2l6aW5nKG1vdXNlRXZlbnQpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50KTtcbiAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wTW92ZUV2ZW50KTtcbiAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBzdG9wTW92ZUV2ZW50KTtcbiAgfVxuXG4gIHJlc2l6ZURvd24oZXZlbnRDb21wb25lbnQsIGNsaWNrZWRUb3Ape1xuICAgIGNvbnN0IGluaXRpYWxIZWlnaHQgPSBldmVudENvbXBvbmVudC5zdGF0ZS5oZWlnaHQ7XG4gICAgY29uc3QgbmV4dFRvcCA9IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0TmV4dFRvcChldmVudENvbXBvbmVudCk7XG4gICAgY29uc3QgbW91c2VNb3ZlRXZlbnQgPSAobW92ZUV2ZW50KSA9PiB7XG4gICAgICBldmVudENvbXBvbmVudC5yZXNpemluZyA9IHRydWU7XG4gICAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgbW92ZUV2ZW50LmNsaWVudFkgLSBjbGlja2VkVG9wO1xuICAgICAgaWYodGFyZ2V0SGVpZ2h0ID4gMzYpe1xuICAgICAgICBsZXQgdGFyZ2V0Qm90dG9tID0gZXZlbnRDb21wb25lbnQuc3RhdGUudG9wICsgdGFyZ2V0SGVpZ2h0O1xuICAgICAgICBpZih0YXJnZXRCb3R0b20gPj0gbmV4dFRvcCl7XG4gICAgICAgICAgdGFyZ2V0Qm90dG9tID0gbmV4dFRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4gPSBuZXcgVGltZVNwYW4oZXZlbnRDb21wb25lbnQuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLCB0aGlzLnByb3BzLnRpbWVsaW5lLnRvcFRvVGltZSh0YXJnZXRCb3R0b20pKTtcbiAgICAgICAgZXZlbnRDb21wb25lbnQuc2V0U3RhdGUoe1xuICAgICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4pLFxuICAgICAgICAgIGRyYWdnaW5nRGlzcGxheTogZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3Bhbi5nZXRFbmRUaW1lKCkuZ2V0RGlzcGxheVRpbWUoKSxcbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXlUb3A6IHRhcmdldEhlaWdodCAtIDEwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzdG9wTW92ZUV2ZW50ID0gKG1vdXNlRXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlRXZlbnQpO1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcE1vdmVFdmVudCk7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBzdG9wTW92ZUV2ZW50KTtcbiAgICAgIGV2ZW50Q29tcG9uZW50LmVuZFJlc2l6aW5nKG1vdXNlRXZlbnQpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50KTtcbiAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wTW92ZUV2ZW50KTtcbiAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBzdG9wTW92ZUV2ZW50KTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2hlaWdodDogaGVpZ2h0fSk7XG4gIH1cblxuICBnZXRSZWxhdGl2ZVBvcyhlKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBlLmNsaWVudFkgLSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0VG9wICsgZS5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCxcbiAgICAgIGxlZnQ6IGUuY2xpZW50WCAtIGUuY3VycmVudFRhcmdldC5vZmZzZXRMZWZ0ICsgZS5jdXJyZW50VGFyZ2V0LnNjcm9sbExlZnRcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgIG1pbldpZHRoOiB0aGlzLnByb3BzLnRpbWVsaW5lLmdldFRvdGFsV2lkdGgoKVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUsIHRoaXMuY29ycmVjdE91dHNpZGVFdmVudHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIGNvbnN0IG5ld1N0YXRlID0ge307XG5cbiAgICBpZihuZXh0UHJvcHMubGluZURhdGEgIT09IHRoaXMucHJvcHMubGluZURhdGEpe1xuICAgICAgbmV3U3RhdGUubWluV2lkdGggPSB0aGlzLnByb3BzLnRpbWVsaW5lLmdldFRvdGFsV2lkdGgoKVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUsIHRoaXMuY29ycmVjdE91dHNpZGVFdmVudHMpXG4gIH1cblxuICBjb3JyZWN0T3V0c2lkZUV2ZW50cygpe1xuICAgIHRoaXMucHJvcHMudGltZWxpbmUuZXZlbnRDb21wb25lbnRzLmZvckVhY2goZXZlbnQgPT4gZXZlbnQuY29ycmVjdFBvc2l0aW9uKCkpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGNvbm5lY3REcm9wVGFyZ2V0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17ZWxlbSA9PiB0aGlzLmVsZW1lbnQgPSBlbGVtfSBjbGFzc05hbWU9XCJ0bEZyYW1lVmlldyBzY3JvbGxXcmFwcGVyXCIgc3R5bGU9e3t3aWR0aDogdGhpcy5wcm9wcy53aWR0aCwgb3ZlcmZsb3dYOiAnYXV0byd9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17e21pbldpZHRoOiB0aGlzLnN0YXRlLm1pbldpZHRoICsgdGhpcy5wcm9wcy5jaGlsZFdpZHRoLCBkaXNwbGF5OlwiZmxleFwifX0+XG4gICAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdERyb3BUYXJnZXQoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNGcmFtZVwiIHN0eWxlPXt7d2lkdGg6IHRoaXMuc3RhdGUubWluV2lkdGgsIG92ZXJmbG93OiAnaGlkZGVuJ319PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogdGhpcy5zdGF0ZS5taW5XaWR0aCArIDIwfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsTGFiZWxWaWV3XCIgc3R5bGU9e3toZWlnaHQ6IExpbmVMYWJlbC5oZWlnaHR9fT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGluZURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNSdWxlciA9IGtleSAlIHRoaXMucHJvcHMucnVsZXJJbnRlcnZhbCA9PT0gMDtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2UnVsZXIgPSAoa2V5ICsgMSkgJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2RhdGEuaWQgKyBcIkBcIiArIGtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMubGluZVdpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNSdWxlcj17aGFzUnVsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZSdWxlcj17cHJldlJ1bGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17ZGF0YS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxpbmU9e3RoaXMucHJvcHMudGltZWxpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGFzdD17a2V5ID09IHRoaXMucHJvcHMubGluZURhdGEubGVuZ3RoIC0gMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiByZWY9XCJsaW5lc1dyYXBwZXJcIiBjbGFzc05hbWU9XCJ0bExpbmVzV3JhcHBlciBzY3JvbGxXcmFwcGVyXCIgc3R5bGU9e3toZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IC0gTGluZUxhYmVsLmhlaWdodH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiB0aGlzLnByb3BzLmxpbmVIZWlnaHQsIG92ZXJmbG93WTogXCJoaWRkZW5cIiwgcG9zaXRpb246XCJyZWxhdGl2ZVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGluZURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc1J1bGVyID0ga2V5ICUgdGhpcy5wcm9wcy5ydWxlckludGVydmFsID09PSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldlJ1bGVyID0gKGtleSArIDEpICUgdGhpcy5wcm9wcy5ydWxlckludGVydmFsID09PSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17XCJsaW5lQFwiICsgZGF0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNSdWxlcj17aGFzUnVsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtkYXRhLmlkICsgXCJAXCIgKyBrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMubGluZVdpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNwYW49e3RoaXMucHJvcHMudGltZVNwYW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbj17a2V5ICUgMiA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lbGluZT17dGhpcy5wcm9wcy50aW1lbGluZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJzPXtkYXRhLnZhcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWU9e3RoaXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZXZlbnRzLm1hcChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e1wiZXZlbnRAXCIgKyBldmVudC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2V2ZW50LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtldmVudC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsQ29sb3I9e2V2ZW50LmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUaW1lU3Bhbj17ZXZlbnQudGltZVNwYW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbERpc3BsYXk9e2V2ZW50LmRpc3BsYXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbExpbmVJZD17ZXZlbnQubGluZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lPXt0aGlzLnByb3BzLnRpbWVsaW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmxpbmVXaWR0aCAtIDIgLSAoTGluZS5zaWRlUGFkZGluZyAqIDIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcnM9e2V2ZW50LnZhcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ9e2V2ZW50LmZsb2F0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEV2ZW50UHJldmlldyB0aW1lbGluZT17dGhpcy5wcm9wcy50aW1lbGluZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSgpfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEZyYW1lLnByb3BUeXBlcyA9IHtcbi8vICAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuLy8gICBsaW5lRGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbi8vICAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuLy8gICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbi8vICAgfSkpLmlzUmVxdWlyZWQsXG4vLyAgIGxpbmVXaWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4vLyAgIHRpbWVsaW5lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4vLyAgIHJ1bGVySW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbi8vIH1cblxuRnJhbWUuZGVmYXVsdFByb3BzID0ge1xuICBldmVudHM6IFtdLFxuICBjaGlsZFdpZHRoOiAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmFnRHJvcENvbnRleHQoRG5kQmFja2VuZCh7IGVuYWJsZU1vdXNlRXZlbnRzOiB0cnVlIH0pKShEcm9wVGFyZ2V0KFwiRXZlbnRcIiwgdGFyZ2V0LCBjb2xsZWN0KShGcmFtZSkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRnJhbWUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lIGZyb20gJy4uL2NsYXNzZXMvVGltZSdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1pbnV0ZXM6IFtdXG4gICAgfVxuXG4gICAgY29uc3QgbWluU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMubWluSGVpZ2h0ICsgJ3B4J1xuICAgIH1cbiAgICBUaW1lLmVhY2hNaW4oKGtleSwgbWluKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLm1pbnV0ZXMucHVzaChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17bWlufVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxNaW5WaWV3JywgJ3RsJyArIG1pbil9XG4gICAgICAgICAgc3R5bGU9e21pblN0eWxlfVxuICAgICAgICA+Jm5ic3A7PC9kaXY+XG4gICAgICApO1xuICAgIH0sIDE1KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0bEhvdXJWaWV3JywgJ3RsJyArIHRoaXMucHJvcHMudGltZS5nZXRIb3VyKCkpfT57dGhpcy5zdGF0ZS5taW51dGVzfTwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gSG91ci5wcm9wVHlwZXMgPSB7XG4vLyAgIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICB0aW1lOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lKS5pc1JlcXVpcmVkXG4vLyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib3VyLmpzeCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2ludGVyZmFjZXNcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vZmFjdG9yaWVzXCIpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRHJhZ0Ryb3BNYW5hZ2VySW1wbF8xID0gcmVxdWlyZShcIi4vRHJhZ0Ryb3BNYW5hZ2VySW1wbFwiKTtcbmZ1bmN0aW9uIGNyZWF0ZURyYWdEcm9wTWFuYWdlcihiYWNrZW5kLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBEcmFnRHJvcE1hbmFnZXJJbXBsXzEuZGVmYXVsdChiYWNrZW5kLCBjb250ZXh0KTtcbn1cbmV4cG9ydHMuY3JlYXRlRHJhZ0Ryb3BNYW5hZ2VyID0gY3JlYXRlRHJhZ0Ryb3BNYW5hZ2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL2ZhY3Rvcmllcy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVkdXhfMSA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcbnZhciByZWR1Y2Vyc18xID0gcmVxdWlyZShcIi4vcmVkdWNlcnNcIik7XG52YXIgZHJhZ0Ryb3BfMSA9IHJlcXVpcmUoXCIuL2FjdGlvbnMvZHJhZ0Ryb3BcIik7XG52YXIgRHJhZ0Ryb3BNb25pdG9ySW1wbF8xID0gcmVxdWlyZShcIi4vRHJhZ0Ryb3BNb25pdG9ySW1wbFwiKTtcbnZhciBIYW5kbGVyUmVnaXN0cnlJbXBsXzEgPSByZXF1aXJlKFwiLi9IYW5kbGVyUmVnaXN0cnlJbXBsXCIpO1xudmFyIERyYWdEcm9wTWFuYWdlckltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRHJhZ0Ryb3BNYW5hZ2VySW1wbChjcmVhdGVCYWNrZW5kLCBjb250ZXh0KSB7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuaXNTZXRVcCA9IGZhbHNlO1xuICAgICAgICB2YXIgc3RvcmUgPSByZWR1eF8xLmNyZWF0ZVN0b3JlKHJlZHVjZXJzXzEuZGVmYXVsdCk7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICAgICAgdGhpcy5tb25pdG9yID0gbmV3IERyYWdEcm9wTW9uaXRvckltcGxfMS5kZWZhdWx0KHN0b3JlLCBuZXcgSGFuZGxlclJlZ2lzdHJ5SW1wbF8xLmRlZmF1bHQoc3RvcmUpKTtcbiAgICAgICAgdGhpcy5iYWNrZW5kID0gY3JlYXRlQmFja2VuZCh0aGlzKTtcbiAgICAgICAgc3RvcmUuc3Vic2NyaWJlKHRoaXMuaGFuZGxlUmVmQ291bnRDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIERyYWdEcm9wTWFuYWdlckltcGwucHJvdG90eXBlLmdldENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gICAgfTtcbiAgICBEcmFnRHJvcE1hbmFnZXJJbXBsLnByb3RvdHlwZS5nZXRNb25pdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb25pdG9yO1xuICAgIH07XG4gICAgRHJhZ0Ryb3BNYW5hZ2VySW1wbC5wcm90b3R5cGUuZ2V0QmFja2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2VuZDtcbiAgICB9O1xuICAgIERyYWdEcm9wTWFuYWdlckltcGwucHJvdG90eXBlLmdldFJlZ2lzdHJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb25pdG9yLnJlZ2lzdHJ5O1xuICAgIH07XG4gICAgRHJhZ0Ryb3BNYW5hZ2VySW1wbC5wcm90b3R5cGUuZ2V0QWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1hbmFnZXIgPSB0aGlzO1xuICAgICAgICB2YXIgZGlzcGF0Y2ggPSB0aGlzLnN0b3JlLmRpc3BhdGNoO1xuICAgICAgICBmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gYWN0aW9uQ3JlYXRvci5hcHBseShtYW5hZ2VyLCBhcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY3Rpb25zID0gZHJhZ0Ryb3BfMS5kZWZhdWx0KHRoaXMpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoYWN0aW9ucykucmVkdWNlKGZ1bmN0aW9uIChib3VuZEFjdGlvbnMsIGtleSkge1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgIGJvdW5kQWN0aW9uc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBib3VuZEFjdGlvbnM7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9O1xuICAgIERyYWdEcm9wTWFuYWdlckltcGwucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgfTtcbiAgICBEcmFnRHJvcE1hbmFnZXJJbXBsLnByb3RvdHlwZS5oYW5kbGVSZWZDb3VudENoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNob3VsZFNldFVwID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnJlZkNvdW50ID4gMDtcbiAgICAgICAgaWYgKHNob3VsZFNldFVwICYmICF0aGlzLmlzU2V0VXApIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2VuZC5zZXR1cCgpO1xuICAgICAgICAgICAgdGhpcy5pc1NldFVwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghc2hvdWxkU2V0VXAgJiYgdGhpcy5pc1NldFVwKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tlbmQudGVhcmRvd24oKTtcbiAgICAgICAgICAgIHRoaXMuaXNTZXRVcCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRHJhZ0Ryb3BNYW5hZ2VySW1wbDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBEcmFnRHJvcE1hbmFnZXJJbXBsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL0RyYWdEcm9wTWFuYWdlckltcGwuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xudmFyIHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIHJhbmRvbVN0cmluZygpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xufTtcblxudmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiBcIkBAcmVkdXgvSU5JVFwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFJFUExBQ0U6IFwiQEByZWR1eC9SRVBMQUNFXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUFJPQkVfVU5LTk9XTl9BQ1RJT046IGZ1bmN0aW9uIFBST0JFX1VOS05PV05fQUNUSU9OKCkge1xuICAgIHJldHVybiBcIkBAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05cIiArIHJhbmRvbVN0cmluZygpO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gb2JqO1xuXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gKlxuICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYXJndW1lbnRzWzNdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJdCBsb29rcyBsaWtlIHlvdSBhcmUgcGFzc2luZyBzZXZlcmFsIHN0b3JlIGVuaGFuY2VycyB0byAnICsgJ2NyZWF0ZVN0b3JlKCkuIFRoaXMgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCwgY29tcG9zZSB0aGVtICcgKyAndG9nZXRoZXIgdG8gYSBzaW5nbGUgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSByZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgY3VycmVudFJlZHVjZXIgPSByZWR1Y2VyO1xuICB2YXIgY3VycmVudFN0YXRlID0gcHJlbG9hZGVkU3RhdGU7XG4gIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgdmFyIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1RoZSByZWR1Y2VyIGhhcyBhbHJlYWR5IHJlY2VpdmVkIHRoZSBzdGF0ZSBhcyBhbiBhcmd1bWVudC4gJyArICdQYXNzIGl0IGRvd24gZnJvbSB0aGUgdG9wIHJlZHVjZXIgaW5zdGVhZCBvZiByZWFkaW5nIGl0IGZyb20gdGhlIHN0b3JlLicpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgY2FsbCBzdG9yZS5zdWJzY3JpYmUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnSWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgbm90aWZpZWQgYWZ0ZXIgdGhlIHN0b3JlIGhhcyBiZWVuIHVwZGF0ZWQsIHN1YnNjcmliZSBmcm9tIGEgJyArICdjb21wb25lbnQgYW5kIGludm9rZSBzdG9yZS5nZXRTdGF0ZSgpIGluIHRoZSBjYWxsYmFjayB0byBhY2Nlc3MgdGhlIGxhdGVzdCBzdGF0ZS4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpLXJlZmVyZW5jZS9zdG9yZSNzdWJzY3JpYmUobGlzdGVuZXIpIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBsaXN0ZW5lciB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS1yZWZlcmVuY2Uvc3RvcmUjc3Vic2NyaWJlKGxpc3RlbmVyKSBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUkVQTEFDRVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG5cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnIHx8IG9ic2VydmVyID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9IC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgfSk7XG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblxufVxuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbkRlc2NyaXB0aW9uID0gYWN0aW9uVHlwZSAmJiBcImFjdGlvbiBcXFwiXCIgKyBTdHJpbmcoYWN0aW9uVHlwZSkgKyBcIlxcXCJcIiB8fCAnYW4gYWN0aW9uJztcbiAgcmV0dXJuIFwiR2l2ZW4gXCIgKyBhY3Rpb25EZXNjcmlwdGlvbiArIFwiLCByZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQuIFwiICsgXCJUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuIFwiICsgXCJJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIjtcbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuIFwiVGhlIFwiICsgYXJndW1lbnROYW1lICsgXCIgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcXFwiXCIgKyB7fS50b1N0cmluZy5jYWxsKGlucHV0U3RhdGUpLm1hdGNoKC9cXHMoW2EtenxBLVpdKykvKVsxXSArIFwiXFxcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBcIiArIChcImtleXM6IFxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiXCIpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldO1xuICB9KTtcbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcbiAgaWYgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuUkVQTEFDRSkgcmV0dXJuO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIFwiVW5leHBlY3RlZCBcIiArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgXCIgXCIgKyAoXCJcXFwiXCIgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIiBmb3VuZCBpbiBcIiArIGFyZ3VtZW50TmFtZSArIFwiLiBcIikgKyBcIkV4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogXCIgKyAoXCJcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uIFwiICsgXCJJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgXCIgKyBcImV4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgXCIgKyBcIm5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIFwiICsgXCJ5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5QUk9CRV9VTktOT1dOX0FDVElPTigpXG4gICAgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiBcIiArIChcIkRvbid0IHRyeSB0byBoYW5kbGUgXCIgKyBBY3Rpb25UeXBlcy5JTklUICsgXCIgb3Igb3RoZXIgYWN0aW9ucyBpbiBcXFwicmVkdXgvKlxcXCIgXCIpICsgXCJuYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSBcIiArIFwiY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgXCIgKyBcImluIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSBcIiArIFwiYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuXCIpO1xuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cblxuXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3YXJuaW5nKFwiTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG5cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTtcbiAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHt9O1xuICB9XG5cbiAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG5cbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICAgIHN0YXRlID0ge307XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKTtcblxuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2tleSA9IGZpbmFsUmVkdWNlcktleXNbX2ldO1xuICAgICAgdmFyIHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW19rZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtfa2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG5cbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2UoX2tleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cblxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09ICdvYmplY3QnIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBpbnN0ZWFkIHJlY2VpdmVkIFwiICsgKGFjdGlvbkNyZWF0b3JzID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdGlvbkNyZWF0b3JzKSArIFwiLiBcIiArIFwiRGlkIHlvdSB3cml0ZSBcXFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cXFwiIGluc3RlYWQgb2YgXFxcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cXFwiP1wiKTtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWN0aW9uQ3JlYXRvcnMpO1xuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZ1bmNzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYShiLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5cbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG5cbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzcGF0Y2hpbmcgd2hpbGUgY29uc3RydWN0aW5nIHlvdXIgbWlkZGxld2FyZSBpcyBub3QgYWxsb3dlZC4gXCIgKyBcIk90aGVyIG1pZGRsZXdhcmUgd291bGQgbm90IGJlIGFwcGxpZWQgdG8gdGhpcyBkaXNwYXRjaC5cIik7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodm9pZCAwLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHN0b3JlLCB7XG4gICAgICAgIGRpc3BhdGNoOiBfZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbi8qXG4gKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4gKiBJZiB0aGUgZnVuY3Rpb24gaGFzIGJlZW4gbWluaWZpZWQgYW5kIE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsIHdhcm4gdGhlIHVzZXIuXG4gKi9cblxuZnVuY3Rpb24gaXNDcnVzaGVkKCkge31cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGlzQ3J1c2hlZC5uYW1lID09PSAnc3RyaW5nJyAmJiBpc0NydXNoZWQubmFtZSAhPT0gJ2lzQ3J1c2hlZCcpIHtcbiAgd2FybmluZygnWW91IGFyZSBjdXJyZW50bHkgdXNpbmcgbWluaWZpZWQgY29kZSBvdXRzaWRlIG9mIE5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIi4gJyArICdUaGlzIG1lYW5zIHRoYXQgeW91IGFyZSBydW5uaW5nIGEgc2xvd2VyIGRldmVsb3BtZW50IGJ1aWxkIG9mIFJlZHV4LiAnICsgJ1lvdSBjYW4gdXNlIGxvb3NlLWVudmlmeSAoaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvbG9vc2UtZW52aWZ5KSBmb3IgYnJvd3NlcmlmeSAnICsgJ29yIHNldHRpbmcgbW9kZSB0byBwcm9kdWN0aW9uIGluIHdlYnBhY2sgKGh0dHBzOi8vd2VicGFjay5qcy5vcmcvY29uY2VwdHMvbW9kZS8pICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYmluZEFjdGlvbkNyZWF0b3JzLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIEFjdGlvblR5cGVzIGFzIF9fRE9fTk9UX1VTRV9fQWN0aW9uVHlwZXMgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL3JlZHV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgcG9ueWZpbGwgZnJvbSAnLi9wb255ZmlsbC5qcyc7XG5cbnZhciByb290O1xuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSBwb255ZmlsbChyb290KTtcbmV4cG9ydCBkZWZhdWx0IHJlc3VsdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XHJcblx0aWYoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKFN5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRTeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL3BvbnlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRyYWdPZmZzZXRfMSA9IHJlcXVpcmUoXCIuL2RyYWdPZmZzZXRcIik7XG52YXIgZHJhZ09wZXJhdGlvbl8xID0gcmVxdWlyZShcIi4vZHJhZ09wZXJhdGlvblwiKTtcbnZhciByZWZDb3VudF8xID0gcmVxdWlyZShcIi4vcmVmQ291bnRcIik7XG52YXIgZGlydHlIYW5kbGVySWRzXzEgPSByZXF1aXJlKFwiLi9kaXJ0eUhhbmRsZXJJZHNcIik7XG52YXIgc3RhdGVJZF8xID0gcmVxdWlyZShcIi4vc3RhdGVJZFwiKTtcbnZhciBnZXQgPSByZXF1aXJlKCdsb2Rhc2gvZ2V0Jyk7XG5mdW5jdGlvbiByZWR1Y2Uoc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0ge307IH1cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXJ0eUhhbmRsZXJJZHM6IGRpcnR5SGFuZGxlcklkc18xLmRlZmF1bHQoc3RhdGUuZGlydHlIYW5kbGVySWRzLCB7XG4gICAgICAgICAgICB0eXBlOiBhY3Rpb24udHlwZSxcbiAgICAgICAgICAgIHBheWxvYWQ6IF9fYXNzaWduKHt9LCBhY3Rpb24ucGF5bG9hZCwgeyBwcmV2VGFyZ2V0SWRzOiBnZXQoc3RhdGUsICdkcmFnT3BlcmF0aW9uLnRhcmdldElkcycsIFtdKSB9KSxcbiAgICAgICAgfSksXG4gICAgICAgIGRyYWdPZmZzZXQ6IGRyYWdPZmZzZXRfMS5kZWZhdWx0KHN0YXRlLmRyYWdPZmZzZXQsIGFjdGlvbiksXG4gICAgICAgIHJlZkNvdW50OiByZWZDb3VudF8xLmRlZmF1bHQoc3RhdGUucmVmQ291bnQsIGFjdGlvbiksXG4gICAgICAgIGRyYWdPcGVyYXRpb246IGRyYWdPcGVyYXRpb25fMS5kZWZhdWx0KHN0YXRlLmRyYWdPcGVyYXRpb24sIGFjdGlvbiksXG4gICAgICAgIHN0YXRlSWQ6IHN0YXRlSWRfMS5kZWZhdWx0KHN0YXRlLnN0YXRlSWQpLFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSByZWR1Y2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZHJhZ0Ryb3BfMSA9IHJlcXVpcmUoXCIuLi9hY3Rpb25zL2RyYWdEcm9wXCIpO1xudmFyIGVxdWFsaXR5XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZXF1YWxpdHlcIik7XG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICAgIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQ6IG51bGwsXG4gICAgaW5pdGlhbENsaWVudE9mZnNldDogbnVsbCxcbiAgICBjbGllbnRPZmZzZXQ6IG51bGwsXG59O1xuZnVuY3Rpb24gZHJhZ09mZnNldChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHsgc3RhdGUgPSBpbml0aWFsU3RhdGU7IH1cbiAgICB2YXIgcGF5bG9hZCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBkcmFnRHJvcF8xLkJFR0lOX0RSQUc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQ6IHBheWxvYWQuc291cmNlQ2xpZW50T2Zmc2V0LFxuICAgICAgICAgICAgICAgIGluaXRpYWxDbGllbnRPZmZzZXQ6IHBheWxvYWQuY2xpZW50T2Zmc2V0LFxuICAgICAgICAgICAgICAgIGNsaWVudE9mZnNldDogcGF5bG9hZC5jbGllbnRPZmZzZXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIGRyYWdEcm9wXzEuSE9WRVI6XG4gICAgICAgICAgICBpZiAoZXF1YWxpdHlfMS5hcmVDb29yZHNFcXVhbChzdGF0ZS5jbGllbnRPZmZzZXQsIHBheWxvYWQuY2xpZW50T2Zmc2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgc3RhdGUsIHsgY2xpZW50T2Zmc2V0OiBwYXlsb2FkLmNsaWVudE9mZnNldCB9KTtcbiAgICAgICAgY2FzZSBkcmFnRHJvcF8xLkVORF9EUkFHOlxuICAgICAgICBjYXNlIGRyYWdEcm9wXzEuRFJPUDpcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gZHJhZ09mZnNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT2Zmc2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRyYWdEcm9wXzEgPSByZXF1aXJlKFwiLi4vYWN0aW9ucy9kcmFnRHJvcFwiKTtcbnZhciByZWdpc3RyeV8xID0gcmVxdWlyZShcIi4uL2FjdGlvbnMvcmVnaXN0cnlcIik7XG52YXIgd2l0aG91dCA9IHJlcXVpcmUoJ2xvZGFzaC93aXRob3V0Jyk7XG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICAgIGl0ZW1UeXBlOiBudWxsLFxuICAgIGl0ZW06IG51bGwsXG4gICAgc291cmNlSWQ6IG51bGwsXG4gICAgdGFyZ2V0SWRzOiBbXSxcbiAgICBkcm9wUmVzdWx0OiBudWxsLFxuICAgIGRpZERyb3A6IGZhbHNlLFxuICAgIGlzU291cmNlUHVibGljOiBudWxsLFxufTtcbmZ1bmN0aW9uIGRyYWdPcGVyYXRpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0gaW5pdGlhbFN0YXRlOyB9XG4gICAgdmFyIHBheWxvYWQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgZHJhZ0Ryb3BfMS5CRUdJTl9EUkFHOlxuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBzdGF0ZSwgeyBpdGVtVHlwZTogcGF5bG9hZC5pdGVtVHlwZSwgaXRlbTogcGF5bG9hZC5pdGVtLCBzb3VyY2VJZDogcGF5bG9hZC5zb3VyY2VJZCwgaXNTb3VyY2VQdWJsaWM6IHBheWxvYWQuaXNTb3VyY2VQdWJsaWMsIGRyb3BSZXN1bHQ6IG51bGwsIGRpZERyb3A6IGZhbHNlIH0pO1xuICAgICAgICBjYXNlIGRyYWdEcm9wXzEuUFVCTElTSF9EUkFHX1NPVVJDRTpcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgc3RhdGUsIHsgaXNTb3VyY2VQdWJsaWM6IHRydWUgfSk7XG4gICAgICAgIGNhc2UgZHJhZ0Ryb3BfMS5IT1ZFUjpcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgc3RhdGUsIHsgdGFyZ2V0SWRzOiBwYXlsb2FkLnRhcmdldElkcyB9KTtcbiAgICAgICAgY2FzZSByZWdpc3RyeV8xLlJFTU9WRV9UQVJHRVQ6XG4gICAgICAgICAgICBpZiAoc3RhdGUudGFyZ2V0SWRzLmluZGV4T2YocGF5bG9hZC50YXJnZXRJZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBzdGF0ZSwgeyB0YXJnZXRJZHM6IHdpdGhvdXQoc3RhdGUudGFyZ2V0SWRzLCBwYXlsb2FkLnRhcmdldElkKSB9KTtcbiAgICAgICAgY2FzZSBkcmFnRHJvcF8xLkRST1A6XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIHN0YXRlLCB7IGRyb3BSZXN1bHQ6IHBheWxvYWQuZHJvcFJlc3VsdCwgZGlkRHJvcDogdHJ1ZSwgdGFyZ2V0SWRzOiBbXSB9KTtcbiAgICAgICAgY2FzZSBkcmFnRHJvcF8xLkVORF9EUkFHOlxuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBzdGF0ZSwgeyBpdGVtVHlwZTogbnVsbCwgaXRlbTogbnVsbCwgc291cmNlSWQ6IG51bGwsIGRyb3BSZXN1bHQ6IG51bGwsIGRpZERyb3A6IGZhbHNlLCBpc1NvdXJjZVB1YmxpYzogbnVsbCwgdGFyZ2V0SWRzOiBbXSB9KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkcmFnT3BlcmF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL3JlZHVjZXJzL2RyYWdPcGVyYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlRGlmZmVyZW5jZSA9IHJlcXVpcmUoJy4vX2Jhc2VEaWZmZXJlbmNlJyksXG4gICAgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgZXhjbHVkaW5nIGFsbCBnaXZlbiB2YWx1ZXMgdXNpbmdcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogKipOb3RlOioqIFVubGlrZSBgXy5wdWxsYCwgdGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsuLi4qfSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGV4Y2x1ZGUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXMuXG4gKiBAc2VlIF8uZGlmZmVyZW5jZSwgXy54b3JcbiAqIEBleGFtcGxlXG4gKlxuICogXy53aXRob3V0KFsyLCAxLCAyLCAzXSwgMSwgMik7XG4gKiAvLyA9PiBbM11cbiAqL1xudmFyIHdpdGhvdXQgPSBiYXNlUmVzdChmdW5jdGlvbihhcnJheSwgdmFsdWVzKSB7XG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdChhcnJheSlcbiAgICA/IGJhc2VEaWZmZXJlbmNlKGFycmF5LCB2YWx1ZXMpXG4gICAgOiBbXTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhvdXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL3dpdGhvdXQuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fSGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleWFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlQWRkLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJc05hTiA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hTicpLFxuICAgIHN0cmljdEluZGV4T2YgPSByZXF1aXJlKCcuL19zdHJpY3RJbmRleE9mJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcbiAgICA/IHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpXG4gICAgOiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXNOYU4sIGZyb21JbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmluZEluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hTmAgd2l0aG91dCBzdXBwb3J0IGZvciBudW1iZXIgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgTmFOYCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYU47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zIG9mIHZhbHVlcywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlclJlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19hcHBseS5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlU2V0VG9TdHJpbmcnKSxcbiAgICBzaG9ydE91dCA9IHJlcXVpcmUoJy4vX3Nob3J0T3V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQnKSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTZXRUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9jb25zdGFudC5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIHRvIGRldGVjdCBob3QgZnVuY3Rpb25zIGJ5IG51bWJlciBvZiBjYWxscyB3aXRoaW4gYSBzcGFuIG9mIG1pbGxpc2Vjb25kcy4gKi9cbnZhciBIT1RfQ09VTlQgPSA4MDAsXG4gICAgSE9UX1NQQU4gPSAxNjtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0J2xsIHNob3J0IG91dCBhbmQgaW52b2tlIGBpZGVudGl0eWAgaW5zdGVhZFxuICogb2YgYGZ1bmNgIHdoZW4gaXQncyBjYWxsZWQgYEhPVF9DT1VOVGAgb3IgbW9yZSB0aW1lcyBpbiBgSE9UX1NQQU5gXG4gKiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJlc3RyaWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc2hvcnRhYmxlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBzaG9ydE91dChmdW5jKSB7XG4gIHZhciBjb3VudCA9IDAsXG4gICAgICBsYXN0Q2FsbGVkID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YW1wID0gbmF0aXZlTm93KCksXG4gICAgICAgIHJlbWFpbmluZyA9IEhPVF9TUEFOIC0gKHN0YW1wIC0gbGFzdENhbGxlZCk7XG5cbiAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG9ydE91dDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Nob3J0T3V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlZ2lzdHJ5XzEgPSByZXF1aXJlKFwiLi4vYWN0aW9ucy9yZWdpc3RyeVwiKTtcbmZ1bmN0aW9uIHJlZkNvdW50KHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkgeyBzdGF0ZSA9IDA7IH1cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgcmVnaXN0cnlfMS5BRERfU09VUkNFOlxuICAgICAgICBjYXNlIHJlZ2lzdHJ5XzEuQUREX1RBUkdFVDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4gICAgICAgIGNhc2UgcmVnaXN0cnlfMS5SRU1PVkVfU09VUkNFOlxuICAgICAgICBjYXNlIHJlZ2lzdHJ5XzEuUkVNT1ZFX1RBUkdFVDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSAtIDE7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gcmVmQ291bnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvcmVmQ291bnQuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkcmFnRHJvcF8xID0gcmVxdWlyZShcIi4uL2FjdGlvbnMvZHJhZ0Ryb3BcIik7XG52YXIgcmVnaXN0cnlfMSA9IHJlcXVpcmUoXCIuLi9hY3Rpb25zL3JlZ2lzdHJ5XCIpO1xudmFyIGVxdWFsaXR5XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZXF1YWxpdHlcIik7XG52YXIgZGlydGluZXNzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZGlydGluZXNzXCIpO1xudmFyIHhvciA9IHJlcXVpcmUoJ2xvZGFzaC94b3InKTtcbmZ1bmN0aW9uIGRpcnR5SGFuZGxlcklkcyhzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHsgc3RhdGUgPSBkaXJ0aW5lc3NfMS5OT05FOyB9XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGRyYWdEcm9wXzEuSE9WRVI6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSByZWdpc3RyeV8xLkFERF9TT1VSQ0U6XG4gICAgICAgIGNhc2UgcmVnaXN0cnlfMS5BRERfVEFSR0VUOlxuICAgICAgICBjYXNlIHJlZ2lzdHJ5XzEuUkVNT1ZFX1RBUkdFVDpcbiAgICAgICAgY2FzZSByZWdpc3RyeV8xLlJFTU9WRV9TT1VSQ0U6XG4gICAgICAgICAgICByZXR1cm4gZGlydGluZXNzXzEuTk9ORTtcbiAgICAgICAgY2FzZSBkcmFnRHJvcF8xLkJFR0lOX0RSQUc6XG4gICAgICAgIGNhc2UgZHJhZ0Ryb3BfMS5QVUJMSVNIX0RSQUdfU09VUkNFOlxuICAgICAgICBjYXNlIGRyYWdEcm9wXzEuRU5EX0RSQUc6XG4gICAgICAgIGNhc2UgZHJhZ0Ryb3BfMS5EUk9QOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGRpcnRpbmVzc18xLkFMTDtcbiAgICB9XG4gICAgdmFyIF9hID0gYWN0aW9uLnBheWxvYWQsIF9iID0gX2EudGFyZ2V0SWRzLCB0YXJnZXRJZHMgPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYiwgX2MgPSBfYS5wcmV2VGFyZ2V0SWRzLCBwcmV2VGFyZ2V0SWRzID0gX2MgPT09IHZvaWQgMCA/IFtdIDogX2M7XG4gICAgdmFyIHJlc3VsdCA9IHhvcih0YXJnZXRJZHMsIHByZXZUYXJnZXRJZHMpO1xuICAgIHZhciBkaWRDaGFuZ2UgPSByZXN1bHQubGVuZ3RoID4gMCB8fCAhZXF1YWxpdHlfMS5hcmVBcnJheXNFcXVhbCh0YXJnZXRJZHMsIHByZXZUYXJnZXRJZHMpO1xuICAgIGlmICghZGlkQ2hhbmdlKSB7XG4gICAgICAgIHJldHVybiBkaXJ0aW5lc3NfMS5OT05FO1xuICAgIH1cbiAgICAvLyBDaGVjayB0aGUgdGFyZ2V0IGlkcyBhdCB0aGUgaW5uZXJtb3N0IHBvc2l0aW9uLiBJZiB0aGV5IGFyZSB2YWxpZCwgYWRkIHRoZW1cbiAgICAvLyB0byB0aGUgcmVzdWx0XG4gICAgdmFyIHByZXZJbm5lcm1vc3RUYXJnZXRJZCA9IHByZXZUYXJnZXRJZHNbcHJldlRhcmdldElkcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgaW5uZXJtb3N0VGFyZ2V0SWQgPSB0YXJnZXRJZHNbdGFyZ2V0SWRzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChwcmV2SW5uZXJtb3N0VGFyZ2V0SWQgIT09IGlubmVybW9zdFRhcmdldElkKSB7XG4gICAgICAgIGlmIChwcmV2SW5uZXJtb3N0VGFyZ2V0SWQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByZXZJbm5lcm1vc3RUYXJnZXRJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlubmVybW9zdFRhcmdldElkKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChpbm5lcm1vc3RUYXJnZXRJZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRpcnR5SGFuZGxlcklkcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kaXJ0eUhhbmRsZXJJZHMuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKCcuL19iYXNlSW50ZXJzZWN0aW9uJyksXG4gICAgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGNhc3RBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL19jYXN0QXJyYXlMaWtlT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB1bmlxdWUgdmFsdWVzIHRoYXQgYXJlIGluY2x1ZGVkIGluIGFsbCBnaXZlbiBhcnJheXNcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuIFRoZSBvcmRlciBhbmQgcmVmZXJlbmNlcyBvZiByZXN1bHQgdmFsdWVzIGFyZVxuICogZGV0ZXJtaW5lZCBieSB0aGUgZmlyc3QgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0gey4uLkFycmF5fSBbYXJyYXlzXSBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBpbnRlcnNlY3RpbmcgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmludGVyc2VjdGlvbihbMiwgMV0sIFsyLCAzXSk7XG4gKiAvLyA9PiBbMl1cbiAqL1xudmFyIGludGVyc2VjdGlvbiA9IGJhc2VSZXN0KGZ1bmN0aW9uKGFycmF5cykge1xuICB2YXIgbWFwcGVkID0gYXJyYXlNYXAoYXJyYXlzLCBjYXN0QXJyYXlMaWtlT2JqZWN0KTtcbiAgcmV0dXJuIChtYXBwZWQubGVuZ3RoICYmIG1hcHBlZFswXSA9PT0gYXJyYXlzWzBdKVxuICAgID8gYmFzZUludGVyc2VjdGlvbihtYXBwZWQpXG4gICAgOiBbXTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludGVyc2VjdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJzZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgbWV0aG9kcyBsaWtlIGBfLmludGVyc2VjdGlvbmAsIHdpdGhvdXQgc3VwcG9ydFxuICogZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMsIHRoYXQgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgdG8gaW5zcGVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlzIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIHNoYXJlZCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbnRlcnNlY3Rpb24oYXJyYXlzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5jbHVkZXMgPSBjb21wYXJhdG9yID8gYXJyYXlJbmNsdWRlc1dpdGggOiBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXlzWzBdLmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IGFycmF5cy5sZW5ndGgsXG4gICAgICBvdGhJbmRleCA9IG90aExlbmd0aCxcbiAgICAgIGNhY2hlcyA9IEFycmF5KG90aExlbmd0aCksXG4gICAgICBtYXhMZW5ndGggPSBJbmZpbml0eSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlIChvdGhJbmRleC0tKSB7XG4gICAgdmFyIGFycmF5ID0gYXJyYXlzW290aEluZGV4XTtcbiAgICBpZiAob3RoSW5kZXggJiYgaXRlcmF0ZWUpIHtcbiAgICAgIGFycmF5ID0gYXJyYXlNYXAoYXJyYXksIGJhc2VVbmFyeShpdGVyYXRlZSkpO1xuICAgIH1cbiAgICBtYXhMZW5ndGggPSBuYXRpdmVNaW4oYXJyYXkubGVuZ3RoLCBtYXhMZW5ndGgpO1xuICAgIGNhY2hlc1tvdGhJbmRleF0gPSAhY29tcGFyYXRvciAmJiAoaXRlcmF0ZWUgfHwgKGxlbmd0aCA+PSAxMjAgJiYgYXJyYXkubGVuZ3RoID49IDEyMCkpXG4gICAgICA/IG5ldyBTZXRDYWNoZShvdGhJbmRleCAmJiBhcnJheSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG4gIGFycmF5ID0gYXJyYXlzWzBdO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgc2VlbiA9IGNhY2hlc1swXTtcblxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGggJiYgcmVzdWx0Lmxlbmd0aCA8IG1heExlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKCEoc2VlblxuICAgICAgICAgID8gY2FjaGVIYXMoc2VlbiwgY29tcHV0ZWQpXG4gICAgICAgICAgOiBpbmNsdWRlcyhyZXN1bHQsIGNvbXB1dGVkLCBjb21wYXJhdG9yKVxuICAgICAgICApKSB7XG4gICAgICBvdGhJbmRleCA9IG90aExlbmd0aDtcbiAgICAgIHdoaWxlICgtLW90aEluZGV4KSB7XG4gICAgICAgIHZhciBjYWNoZSA9IGNhY2hlc1tvdGhJbmRleF07XG4gICAgICAgIGlmICghKGNhY2hlXG4gICAgICAgICAgICAgID8gY2FjaGVIYXMoY2FjaGUsIGNvbXB1dGVkKVxuICAgICAgICAgICAgICA6IGluY2x1ZGVzKGFycmF5c1tvdGhJbmRleF0sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2Vlbikge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbnRlcnNlY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW50ZXJzZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYW4gZW1wdHkgYXJyYXkgaWYgaXQncyBub3QgYW4gYXJyYXkgbGlrZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fSBSZXR1cm5zIHRoZSBjYXN0IGFycmF5LWxpa2Ugb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjYXN0QXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0QXJyYXlMaWtlT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgYmFzZVhvciA9IHJlcXVpcmUoJy4vX2Jhc2VYb3InKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHVuaXF1ZSB2YWx1ZXMgdGhhdCBpcyB0aGVcbiAqIFtzeW1tZXRyaWMgZGlmZmVyZW5jZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3ltbWV0cmljX2RpZmZlcmVuY2UpXG4gKiBvZiB0aGUgZ2l2ZW4gYXJyYXlzLiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlclxuICogdGhleSBvY2N1ciBpbiB0aGUgYXJyYXlzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzLlxuICogQHNlZSBfLmRpZmZlcmVuY2UsIF8ud2l0aG91dFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnhvcihbMiwgMV0sIFsyLCAzXSk7XG4gKiAvLyA9PiBbMSwgM11cbiAqL1xudmFyIHhvciA9IGJhc2VSZXN0KGZ1bmN0aW9uKGFycmF5cykge1xuICByZXR1cm4gYmFzZVhvcihhcnJheUZpbHRlcihhcnJheXMsIGlzQXJyYXlMaWtlT2JqZWN0KSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB4b3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL3hvci5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi9fYmFzZURpZmZlcmVuY2UnKSxcbiAgICBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJy4vX2Jhc2VGbGF0dGVuJyksXG4gICAgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIG1ldGhvZHMgbGlrZSBgXy54b3JgLCB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLCB0aGF0IGFjY2VwdHMgYW4gYXJyYXkgb2YgYXJyYXlzIHRvIGluc3BlY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5cyBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VYb3IoYXJyYXlzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgbGVuZ3RoID0gYXJyYXlzLmxlbmd0aDtcbiAgaWYgKGxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gbGVuZ3RoID8gYmFzZVVuaXEoYXJyYXlzWzBdKSA6IFtdO1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBhcnJheSA9IGFycmF5c1tpbmRleF0sXG4gICAgICAgIG90aEluZGV4ID0gLTE7XG5cbiAgICB3aGlsZSAoKytvdGhJbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKG90aEluZGV4ICE9IGluZGV4KSB7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBiYXNlRGlmZmVyZW5jZShyZXN1bHRbaW5kZXhdIHx8IGFycmF5LCBhcnJheXNbb3RoSW5kZXhdLCBpdGVyYXRlZSwgY29tcGFyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBiYXNlVW5pcShiYXNlRmxhdHRlbihyZXN1bHQsIDEpLCBpdGVyYXRlZSwgY29tcGFyYXRvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVhvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VYb3IuanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNGbGF0dGVuYWJsZSA9IHJlcXVpcmUoJy4vX2lzRmxhdHRlbmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mbGF0dGVuYCB3aXRoIHN1cHBvcnQgZm9yIHJlc3RyaWN0aW5nIGZsYXR0ZW5pbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBmbGF0dGVuLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlcHRoIFRoZSBtYXhpbXVtIHJlY3Vyc2lvbiBkZXB0aC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZWRpY2F0ZT1pc0ZsYXR0ZW5hYmxlXSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNTdHJpY3RdIFJlc3RyaWN0IHRvIHZhbHVlcyB0aGF0IHBhc3MgYHByZWRpY2F0ZWAgY2hlY2tzLlxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdD1bXV0gVGhlIGluaXRpYWwgcmVzdWx0IHZhbHVlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlRmxhdHRlbihhcnJheSwgZGVwdGgsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBwcmVkaWNhdGUgfHwgKHByZWRpY2F0ZSA9IGlzRmxhdHRlbmFibGUpO1xuICByZXN1bHQgfHwgKHJlc3VsdCA9IFtdKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAoZGVwdGggPiAwICYmIHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIGlmIChkZXB0aCA+IDEpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmxhdHRlbiBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgICAgYmFzZUZsYXR0ZW4odmFsdWUsIGRlcHRoIC0gMSwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5UHVzaChyZXN1bHQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc1N0cmljdCkge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZsYXR0ZW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmxhdHRlbi5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheVB1c2guanNcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcHJlYWRhYmxlU3ltYm9sID0gU3ltYm9sID8gU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGZsYXR0ZW5hYmxlIGBhcmd1bWVudHNgIG9iamVjdCBvciBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmbGF0dGVuYWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0ZsYXR0ZW5hYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkgfHxcbiAgICAhIShzcHJlYWRhYmxlU3ltYm9sICYmIHZhbHVlICYmIHZhbHVlW3NwcmVhZGFibGVTeW1ib2xdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZsYXR0ZW5hYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNGbGF0dGVuYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpLFxuICAgIGNyZWF0ZVNldCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVNldCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmlxKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgc2VlbiA9IHJlc3VsdDtcblxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgfVxuICBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xuICAgIGlmIChzZXQpIHtcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XG4gICAgfVxuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKHNlZW5JbmRleC0tKSB7XG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXMoc2VlbiwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5pcS5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBub29wID0gcmVxdWlyZSgnLi9ub29wJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9iamVjdCBvZiBgdmFsdWVzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYWRkIHRvIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgc2V0LlxuICovXG52YXIgY3JlYXRlU2V0ID0gIShTZXQgJiYgKDEgLyBzZXRUb0FycmF5KG5ldyBTZXQoWywtMF0pKVsxXSkgPT0gSU5GSU5JVFkpID8gbm9vcCA6IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFNldCh2YWx1ZXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9ub29wLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBzdGF0ZUlkKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHsgc3RhdGUgPSAwOyB9XG4gICAgcmV0dXJuIHN0YXRlICsgMTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHN0YXRlSWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvcmVkdWNlcnMvc3RhdGVJZC5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleS5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtZW1vaXplQ2FwcGVkID0gcmVxdWlyZSgnLi9fbWVtb2l6ZUNhcHBlZCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHN0cmluZy5jaGFyQ29kZUF0KDApID09PSA0NiAvKiAuICovKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN1YlN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9QYXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1lbW9pemUgPSByZXF1aXJlKCcuL21lbW9pemUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIG1heGltdW0gbWVtb2l6ZSBjYWNoZSBzaXplLiAqL1xudmFyIE1BWF9NRU1PSVpFX1NJWkUgPSA1MDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1lbW9pemVgIHdoaWNoIGNsZWFycyB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24nc1xuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoY2FjaGUuc2l6ZSA9PT0gTUFYX01FTU9JWkVfU0laRSkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAgdmFyIGNhY2hlID0gcmVzdWx0LmNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVDYXBwZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL21lbW9pemUuanNcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtYXRjaGVzVHlwZV8xID0gcmVxdWlyZShcIi4vdXRpbHMvbWF0Y2hlc1R5cGVcIik7XG52YXIgY29vcmRzXzEgPSByZXF1aXJlKFwiLi91dGlscy9jb29yZHNcIik7XG52YXIgZGlydGluZXNzXzEgPSByZXF1aXJlKFwiLi91dGlscy9kaXJ0aW5lc3NcIik7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG52YXIgRHJhZ0Ryb3BNb25pdG9ySW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEcmFnRHJvcE1vbml0b3JJbXBsKHN0b3JlLCByZWdpc3RyeSkge1xuICAgICAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgICAgIHRoaXMucmVnaXN0cnkgPSByZWdpc3RyeTtcbiAgICB9XG4gICAgRHJhZ0Ryb3BNb25pdG9ySW1wbC5wcm90b3R5cGUuc3Vic2NyaWJlVG9TdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7IGhhbmRsZXJJZHM6IHVuZGVmaW5lZCB9OyB9XG4gICAgICAgIHZhciBoYW5kbGVySWRzID0gb3B0aW9ucy5oYW5kbGVySWRzO1xuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nLCAnbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIGhhbmRsZXJJZHMgPT09ICd1bmRlZmluZWQnIHx8IEFycmF5LmlzQXJyYXkoaGFuZGxlcklkcyksICdoYW5kbGVySWRzLCB3aGVuIHNwZWNpZmllZCwgbXVzdCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzLicpO1xuICAgICAgICB2YXIgcHJldlN0YXRlSWQgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCkuc3RhdGVJZDtcbiAgICAgICAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlSWQgPSBzdGF0ZS5zdGF0ZUlkO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgY2FuU2tpcExpc3RlbmVyID0gY3VycmVudFN0YXRlSWQgPT09IHByZXZTdGF0ZUlkIHx8XG4gICAgICAgICAgICAgICAgICAgIChjdXJyZW50U3RhdGVJZCA9PT0gcHJldlN0YXRlSWQgKyAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhZGlydGluZXNzXzEuYXJlRGlydHkoc3RhdGUuZGlydHlIYW5kbGVySWRzLCBoYW5kbGVySWRzKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFjYW5Ta2lwTGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGVJZCA9IGN1cnJlbnRTdGF0ZUlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zdWJzY3JpYmUoaGFuZGxlQ2hhbmdlKTtcbiAgICB9O1xuICAgIERyYWdEcm9wTW9uaXRvckltcGwucHJvdG90eXBlLnN1YnNjcmliZVRvT2Zmc2V0Q2hhbmdlID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicsICdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICAgIHZhciBwcmV2aW91c1N0YXRlID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQ7XG4gICAgICAgIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbmV4dFN0YXRlID0gX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0O1xuICAgICAgICAgICAgaWYgKG5leHRTdGF0ZSA9PT0gcHJldmlvdXNTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZpb3VzU3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zdWJzY3JpYmUoaGFuZGxlQ2hhbmdlKTtcbiAgICB9O1xuICAgIERyYWdEcm9wTW9uaXRvckltcGwucHJvdG90eXBlLmNhbkRyYWdTb3VyY2UgPSBmdW5jdGlvbiAoc291cmNlSWQpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMucmVnaXN0cnkuZ2V0U291cmNlKHNvdXJjZUlkKTtcbiAgICAgICAgaW52YXJpYW50KHNvdXJjZSwgJ0V4cGVjdGVkIHRvIGZpbmQgYSB2YWxpZCBzb3VyY2UuJyk7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2UuY2FuRHJhZyh0aGlzLCBzb3VyY2VJZCk7XG4gICAgfTtcbiAgICBEcmFnRHJvcE1vbml0b3JJbXBsLnByb3RvdHlwZS5jYW5Ecm9wT25UYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0SWQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMucmVnaXN0cnkuZ2V0VGFyZ2V0KHRhcmdldElkKTtcbiAgICAgICAgaW52YXJpYW50KHRhcmdldCwgJ0V4cGVjdGVkIHRvIGZpbmQgYSB2YWxpZCB0YXJnZXQuJyk7XG4gICAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKCkgfHwgdGhpcy5kaWREcm9wKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGFyZ2V0VHlwZSA9IHRoaXMucmVnaXN0cnkuZ2V0VGFyZ2V0VHlwZSh0YXJnZXRJZCk7XG4gICAgICAgIHZhciBkcmFnZ2VkSXRlbVR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKCk7XG4gICAgICAgIHJldHVybiAobWF0Y2hlc1R5cGVfMS5kZWZhdWx0KHRhcmdldFR5cGUsIGRyYWdnZWRJdGVtVHlwZSkgJiYgdGFyZ2V0LmNhbkRyb3AodGhpcywgdGFyZ2V0SWQpKTtcbiAgICB9O1xuICAgIERyYWdEcm9wTW9uaXRvckltcGwucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0SXRlbVR5cGUoKSk7XG4gICAgfTtcbiAgICBEcmFnRHJvcE1vbml0b3JJbXBsLnByb3RvdHlwZS5pc0RyYWdnaW5nU291cmNlID0gZnVuY3Rpb24gKHNvdXJjZUlkKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLnJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZCwgdHJ1ZSk7XG4gICAgICAgIGludmFyaWFudChzb3VyY2UsICdFeHBlY3RlZCB0byBmaW5kIGEgdmFsaWQgc291cmNlLicpO1xuICAgICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZygpIHx8ICF0aGlzLmlzU291cmNlUHVibGljKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc291cmNlVHlwZSA9IHRoaXMucmVnaXN0cnkuZ2V0U291cmNlVHlwZShzb3VyY2VJZCk7XG4gICAgICAgIHZhciBkcmFnZ2VkSXRlbVR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKCk7XG4gICAgICAgIGlmIChzb3VyY2VUeXBlICE9PSBkcmFnZ2VkSXRlbVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlLmlzRHJhZ2dpbmcodGhpcywgc291cmNlSWQpO1xuICAgIH07XG4gICAgRHJhZ0Ryb3BNb25pdG9ySW1wbC5wcm90b3R5cGUuaXNPdmVyVGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldElkLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHsgc2hhbGxvdzogZmFsc2UgfTsgfVxuICAgICAgICB2YXIgc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0YXJnZXRUeXBlID0gdGhpcy5yZWdpc3RyeS5nZXRUYXJnZXRUeXBlKHRhcmdldElkKTtcbiAgICAgICAgdmFyIGRyYWdnZWRJdGVtVHlwZSA9IHRoaXMuZ2V0SXRlbVR5cGUoKTtcbiAgICAgICAgaWYgKGRyYWdnZWRJdGVtVHlwZSAmJiAhbWF0Y2hlc1R5cGVfMS5kZWZhdWx0KHRhcmdldFR5cGUsIGRyYWdnZWRJdGVtVHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGFyZ2V0SWRzID0gdGhpcy5nZXRUYXJnZXRJZHMoKTtcbiAgICAgICAgaWYgKCF0YXJnZXRJZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGFyZ2V0SWRzLmluZGV4T2YodGFyZ2V0SWQpO1xuICAgICAgICBpZiAoc2hhbGxvdykge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09PSB0YXJnZXRJZHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCA+IC0xO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEcmFnRHJvcE1vbml0b3JJbXBsLnByb3RvdHlwZS5nZXRJdGVtVHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLml0ZW1UeXBlO1xuICAgIH07XG4gICAgRHJhZ0Ryb3BNb25pdG9ySW1wbC5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLml0ZW07XG4gICAgfTtcbiAgICBEcmFnRHJvcE1vbml0b3JJbXBsLnByb3RvdHlwZS5nZXRTb3VyY2VJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLnNvdXJjZUlkO1xuICAgIH07XG4gICAgRHJhZ0Ryb3BNb25pdG9ySW1wbC5wcm90b3R5cGUuZ2V0VGFyZ2V0SWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24udGFyZ2V0SWRzO1xuICAgIH07XG4gICAgRHJhZ0Ryb3BNb25pdG9ySW1wbC5wcm90b3R5cGUuZ2V0RHJvcFJlc3VsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLmRyb3BSZXN1bHQ7XG4gICAgfTtcbiAgICBEcmFnRHJvcE1vbml0b3JJbXBsLnByb3RvdHlwZS5kaWREcm9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24uZGlkRHJvcDtcbiAgICB9O1xuICAgIERyYWdEcm9wTW9uaXRvckltcGwucHJvdG90eXBlLmlzU291cmNlUHVibGljID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24uaXNTb3VyY2VQdWJsaWM7XG4gICAgfTtcbiAgICBEcmFnRHJvcE1vbml0b3JJbXBsLnByb3RvdHlwZS5nZXRJbml0aWFsQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQuaW5pdGlhbENsaWVudE9mZnNldDtcbiAgICB9O1xuICAgIERyYWdEcm9wTW9uaXRvckltcGwucHJvdG90eXBlLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldC5pbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0O1xuICAgIH07XG4gICAgRHJhZ0Ryb3BNb25pdG9ySW1wbC5wcm90b3R5cGUuZ2V0Q2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQuY2xpZW50T2Zmc2V0O1xuICAgIH07XG4gICAgRHJhZ0Ryb3BNb25pdG9ySW1wbC5wcm90b3R5cGUuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY29vcmRzXzEuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0KTtcbiAgICB9O1xuICAgIERyYWdEcm9wTW9uaXRvckltcGwucHJvdG90eXBlLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNvb3Jkc18xLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCh0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldCk7XG4gICAgfTtcbiAgICByZXR1cm4gRHJhZ0Ryb3BNb25pdG9ySW1wbDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBEcmFnRHJvcE1vbml0b3JJbXBsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL0RyYWdEcm9wTW9uaXRvckltcGwuanNcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogQ29vcmRpbmF0ZSBhZGRpdGlvblxuICogQHBhcmFtIGEgVGhlIGZpcnN0IGNvb3JkaW5hdGVcbiAqIEBwYXJhbSBiIFRoZSBzZWNvbmQgY29vcmRpbmF0ZVxuICovXG5mdW5jdGlvbiBhZGQoYSwgYikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGEueCArIGIueCxcbiAgICAgICAgeTogYS55ICsgYi55LFxuICAgIH07XG59XG5leHBvcnRzLmFkZCA9IGFkZDtcbi8qKlxuICogQ29vcmRpbmF0ZSBzdWJ0cmFjdGlvblxuICogQHBhcmFtIGEgVGhlIGZpcnN0IGNvb3JkaW5hdGVcbiAqIEBwYXJhbSBiIFRoZSBzZWNvbmQgY29vcmRpbmF0ZVxuICovXG5mdW5jdGlvbiBzdWJ0cmFjdChhLCBiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogYS54IC0gYi54LFxuICAgICAgICB5OiBhLnkgLSBiLnksXG4gICAgfTtcbn1cbmV4cG9ydHMuc3VidHJhY3QgPSBzdWJ0cmFjdDtcbi8qKlxuICogUmV0dXJucyB0aGUgY2FydGVzaWFuIGRpc3RhbmNlIG9mIHRoZSBkcmFnIHNvdXJjZSBjb21wb25lbnQncyBwb3NpdGlvbiwgYmFzZWQgb24gaXRzIHBvc2l0aW9uXG4gKiBhdCB0aGUgdGltZSB3aGVuIHRoZSBjdXJyZW50IGRyYWcgb3BlcmF0aW9uIGhhcyBzdGFydGVkLCBhbmQgdGhlIG1vdmVtZW50IGRpZmZlcmVuY2UuXG4gKlxuICogUmV0dXJucyBudWxsIGlmIG5vIGl0ZW0gaXMgYmVpbmcgZHJhZ2dlZC5cbiAqXG4gKiBAcGFyYW0gc3RhdGUgVGhlIG9mZnNldCBzdGF0ZSB0byBjb21wdXRlIGZyb21cbiAqL1xuZnVuY3Rpb24gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KHN0YXRlKSB7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IHN0YXRlLmNsaWVudE9mZnNldCwgaW5pdGlhbENsaWVudE9mZnNldCA9IHN0YXRlLmluaXRpYWxDbGllbnRPZmZzZXQsIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQgPSBzdGF0ZS5pbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0O1xuICAgIGlmICghY2xpZW50T2Zmc2V0IHx8ICFpbml0aWFsQ2xpZW50T2Zmc2V0IHx8ICFpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gc3VidHJhY3QoYWRkKGNsaWVudE9mZnNldCwgaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCksIGluaXRpYWxDbGllbnRPZmZzZXQpO1xufVxuZXhwb3J0cy5nZXRTb3VyY2VDbGllbnRPZmZzZXQgPSBnZXRTb3VyY2VDbGllbnRPZmZzZXQ7XG4vKipcbiAqIERldGVybWluZXMgdGhlIHgseSBvZmZzZXQgYmV0d2VlbiB0aGUgY2xpZW50IG9mZnNldCBhbmQgdGhlIGluaXRpYWwgY2xpZW50IG9mZnNldFxuICpcbiAqIEBwYXJhbSBzdGF0ZSBUaGUgb2Zmc2V0IHN0YXRlIHRvIGNvbXB1dGUgZnJvbVxuICovXG5mdW5jdGlvbiBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoc3RhdGUpIHtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gc3RhdGUuY2xpZW50T2Zmc2V0LCBpbml0aWFsQ2xpZW50T2Zmc2V0ID0gc3RhdGUuaW5pdGlhbENsaWVudE9mZnNldDtcbiAgICBpZiAoIWNsaWVudE9mZnNldCB8fCAhaW5pdGlhbENsaWVudE9mZnNldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnRyYWN0KGNsaWVudE9mZnNldCwgaW5pdGlhbENsaWVudE9mZnNldCk7XG59XG5leHBvcnRzLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCA9IGdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi91dGlscy9jb29yZHMuanNcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWdpc3RyeV8xID0gcmVxdWlyZShcIi4vYWN0aW9ucy9yZWdpc3RyeVwiKTtcbnZhciBnZXROZXh0VW5pcXVlSWRfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2dldE5leHRVbmlxdWVJZFwiKTtcbnZhciBpbnRlcmZhY2VzXzEgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzXCIpO1xudmFyIGNvbnRyYWN0c18xID0gcmVxdWlyZShcIi4vY29udHJhY3RzXCIpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xudmFyIGFzYXAgPSByZXF1aXJlKCdhc2FwJyk7XG5mdW5jdGlvbiBnZXROZXh0SGFuZGxlcklkKHJvbGUpIHtcbiAgICB2YXIgaWQgPSBnZXROZXh0VW5pcXVlSWRfMS5kZWZhdWx0KCkudG9TdHJpbmcoKTtcbiAgICBzd2l0Y2ggKHJvbGUpIHtcbiAgICAgICAgY2FzZSBpbnRlcmZhY2VzXzEuSGFuZGxlclJvbGUuU09VUkNFOlxuICAgICAgICAgICAgcmV0dXJuIFwiU1wiICsgaWQ7XG4gICAgICAgIGNhc2UgaW50ZXJmYWNlc18xLkhhbmRsZXJSb2xlLlRBUkdFVDpcbiAgICAgICAgICAgIHJldHVybiBcIlRcIiArIGlkO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBIYW5kbGVyIFJvbGU6IFwiICsgcm9sZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcGFyc2VSb2xlRnJvbUhhbmRsZXJJZChoYW5kbGVySWQpIHtcbiAgICBzd2l0Y2ggKGhhbmRsZXJJZFswXSkge1xuICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIHJldHVybiBpbnRlcmZhY2VzXzEuSGFuZGxlclJvbGUuU09VUkNFO1xuICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgIHJldHVybiBpbnRlcmZhY2VzXzEuSGFuZGxlclJvbGUuVEFSR0VUO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaW52YXJpYW50KGZhbHNlLCBcIkNhbm5vdCBwYXJzZSBoYW5kbGVyIElEOiBcIiArIGhhbmRsZXJJZCk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwQ29udGFpbnNWYWx1ZShtYXAsIHNlYXJjaFZhbHVlKSB7XG4gICAgdmFyIGVudHJpZXMgPSBtYXAuZW50cmllcygpO1xuICAgIHZhciBpc0RvbmUgPSBmYWxzZTtcbiAgICBkbyB7XG4gICAgICAgIHZhciBfYSA9IGVudHJpZXMubmV4dCgpLCBkb25lID0gX2EuZG9uZSwgX2IgPSBfYS52YWx1ZSwgdmFsdWUgPSBfYlsxXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBzZWFyY2hWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaXNEb25lID0gZG9uZTtcbiAgICB9IHdoaWxlICghaXNEb25lKTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG52YXIgSGFuZGxlclJlZ2lzdHJ5SW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIYW5kbGVyUmVnaXN0cnlJbXBsKHN0b3JlKSB7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICAgICAgdGhpcy50eXBlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5kcmFnU291cmNlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5kcm9wVGFyZ2V0cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5waW5uZWRTb3VyY2VJZCA9IG51bGw7XG4gICAgICAgIHRoaXMucGlubmVkU291cmNlID0gbnVsbDtcbiAgICB9XG4gICAgSGFuZGxlclJlZ2lzdHJ5SW1wbC5wcm90b3R5cGUuYWRkU291cmNlID0gZnVuY3Rpb24gKHR5cGUsIHNvdXJjZSkge1xuICAgICAgICBjb250cmFjdHNfMS52YWxpZGF0ZVR5cGUodHlwZSk7XG4gICAgICAgIGNvbnRyYWN0c18xLnZhbGlkYXRlU291cmNlQ29udHJhY3Qoc291cmNlKTtcbiAgICAgICAgdmFyIHNvdXJjZUlkID0gdGhpcy5hZGRIYW5kbGVyKGludGVyZmFjZXNfMS5IYW5kbGVyUm9sZS5TT1VSQ0UsIHR5cGUsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gocmVnaXN0cnlfMS5hZGRTb3VyY2Uoc291cmNlSWQpKTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZUlkO1xuICAgIH07XG4gICAgSGFuZGxlclJlZ2lzdHJ5SW1wbC5wcm90b3R5cGUuYWRkVGFyZ2V0ID0gZnVuY3Rpb24gKHR5cGUsIHRhcmdldCkge1xuICAgICAgICBjb250cmFjdHNfMS52YWxpZGF0ZVR5cGUodHlwZSwgdHJ1ZSk7XG4gICAgICAgIGNvbnRyYWN0c18xLnZhbGlkYXRlVGFyZ2V0Q29udHJhY3QodGFyZ2V0KTtcbiAgICAgICAgdmFyIHRhcmdldElkID0gdGhpcy5hZGRIYW5kbGVyKGludGVyZmFjZXNfMS5IYW5kbGVyUm9sZS5UQVJHRVQsIHR5cGUsIHRhcmdldCk7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gocmVnaXN0cnlfMS5hZGRUYXJnZXQodGFyZ2V0SWQpKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldElkO1xuICAgIH07XG4gICAgSGFuZGxlclJlZ2lzdHJ5SW1wbC5wcm90b3R5cGUuY29udGFpbnNIYW5kbGVyID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIChtYXBDb250YWluc1ZhbHVlKHRoaXMuZHJhZ1NvdXJjZXMsIGhhbmRsZXIpIHx8XG4gICAgICAgICAgICBtYXBDb250YWluc1ZhbHVlKHRoaXMuZHJvcFRhcmdldHMsIGhhbmRsZXIpKTtcbiAgICB9O1xuICAgIEhhbmRsZXJSZWdpc3RyeUltcGwucHJvdG90eXBlLmdldFNvdXJjZSA9IGZ1bmN0aW9uIChzb3VyY2VJZCwgaW5jbHVkZVBpbm5lZCkge1xuICAgICAgICBpZiAoaW5jbHVkZVBpbm5lZCA9PT0gdm9pZCAwKSB7IGluY2x1ZGVQaW5uZWQgPSBmYWxzZTsgfVxuICAgICAgICBpbnZhcmlhbnQodGhpcy5pc1NvdXJjZUlkKHNvdXJjZUlkKSwgJ0V4cGVjdGVkIGEgdmFsaWQgc291cmNlIElELicpO1xuICAgICAgICB2YXIgaXNQaW5uZWQgPSBpbmNsdWRlUGlubmVkICYmIHNvdXJjZUlkID09PSB0aGlzLnBpbm5lZFNvdXJjZUlkO1xuICAgICAgICB2YXIgc291cmNlID0gaXNQaW5uZWQgPyB0aGlzLnBpbm5lZFNvdXJjZSA6IHRoaXMuZHJhZ1NvdXJjZXMuZ2V0KHNvdXJjZUlkKTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9O1xuICAgIEhhbmRsZXJSZWdpc3RyeUltcGwucHJvdG90eXBlLmdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXRJZCkge1xuICAgICAgICBpbnZhcmlhbnQodGhpcy5pc1RhcmdldElkKHRhcmdldElkKSwgJ0V4cGVjdGVkIGEgdmFsaWQgdGFyZ2V0IElELicpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wVGFyZ2V0cy5nZXQodGFyZ2V0SWQpO1xuICAgIH07XG4gICAgSGFuZGxlclJlZ2lzdHJ5SW1wbC5wcm90b3R5cGUuZ2V0U291cmNlVHlwZSA9IGZ1bmN0aW9uIChzb3VyY2VJZCkge1xuICAgICAgICBpbnZhcmlhbnQodGhpcy5pc1NvdXJjZUlkKHNvdXJjZUlkKSwgJ0V4cGVjdGVkIGEgdmFsaWQgc291cmNlIElELicpO1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlcy5nZXQoc291cmNlSWQpO1xuICAgIH07XG4gICAgSGFuZGxlclJlZ2lzdHJ5SW1wbC5wcm90b3R5cGUuZ2V0VGFyZ2V0VHlwZSA9IGZ1bmN0aW9uICh0YXJnZXRJZCkge1xuICAgICAgICBpbnZhcmlhbnQodGhpcy5pc1RhcmdldElkKHRhcmdldElkKSwgJ0V4cGVjdGVkIGEgdmFsaWQgdGFyZ2V0IElELicpO1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlcy5nZXQodGFyZ2V0SWQpO1xuICAgIH07XG4gICAgSGFuZGxlclJlZ2lzdHJ5SW1wbC5wcm90b3R5cGUuaXNTb3VyY2VJZCA9IGZ1bmN0aW9uIChoYW5kbGVySWQpIHtcbiAgICAgICAgdmFyIHJvbGUgPSBwYXJzZVJvbGVGcm9tSGFuZGxlcklkKGhhbmRsZXJJZCk7XG4gICAgICAgIHJldHVybiByb2xlID09PSBpbnRlcmZhY2VzXzEuSGFuZGxlclJvbGUuU09VUkNFO1xuICAgIH07XG4gICAgSGFuZGxlclJlZ2lzdHJ5SW1wbC5wcm90b3R5cGUuaXNUYXJnZXRJZCA9IGZ1bmN0aW9uIChoYW5kbGVySWQpIHtcbiAgICAgICAgdmFyIHJvbGUgPSBwYXJzZVJvbGVGcm9tSGFuZGxlcklkKGhhbmRsZXJJZCk7XG4gICAgICAgIHJldHVybiByb2xlID09PSBpbnRlcmZhY2VzXzEuSGFuZGxlclJvbGUuVEFSR0VUO1xuICAgIH07XG4gICAgSGFuZGxlclJlZ2lzdHJ5SW1wbC5wcm90b3R5cGUucmVtb3ZlU291cmNlID0gZnVuY3Rpb24gKHNvdXJjZUlkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGludmFyaWFudCh0aGlzLmdldFNvdXJjZShzb3VyY2VJZCksICdFeHBlY3RlZCBhbiBleGlzdGluZyBzb3VyY2UuJyk7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gocmVnaXN0cnlfMS5yZW1vdmVTb3VyY2Uoc291cmNlSWQpKTtcbiAgICAgICAgYXNhcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5kcmFnU291cmNlcy5kZWxldGUoc291cmNlSWQpO1xuICAgICAgICAgICAgX3RoaXMudHlwZXMuZGVsZXRlKHNvdXJjZUlkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBIYW5kbGVyUmVnaXN0cnlJbXBsLnByb3RvdHlwZS5yZW1vdmVUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0SWQpIHtcbiAgICAgICAgaW52YXJpYW50KHRoaXMuZ2V0VGFyZ2V0KHRhcmdldElkKSwgJ0V4cGVjdGVkIGFuIGV4aXN0aW5nIHRhcmdldC4nKTtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChyZWdpc3RyeV8xLnJlbW92ZVRhcmdldCh0YXJnZXRJZCkpO1xuICAgICAgICB0aGlzLmRyb3BUYXJnZXRzLmRlbGV0ZSh0YXJnZXRJZCk7XG4gICAgICAgIHRoaXMudHlwZXMuZGVsZXRlKHRhcmdldElkKTtcbiAgICB9O1xuICAgIEhhbmRsZXJSZWdpc3RyeUltcGwucHJvdG90eXBlLnBpblNvdXJjZSA9IGZ1bmN0aW9uIChzb3VyY2VJZCkge1xuICAgICAgICB2YXIgc291cmNlID0gdGhpcy5nZXRTb3VyY2Uoc291cmNlSWQpO1xuICAgICAgICBpbnZhcmlhbnQoc291cmNlLCAnRXhwZWN0ZWQgYW4gZXhpc3Rpbmcgc291cmNlLicpO1xuICAgICAgICB0aGlzLnBpbm5lZFNvdXJjZUlkID0gc291cmNlSWQ7XG4gICAgICAgIHRoaXMucGlubmVkU291cmNlID0gc291cmNlO1xuICAgIH07XG4gICAgSGFuZGxlclJlZ2lzdHJ5SW1wbC5wcm90b3R5cGUudW5waW5Tb3VyY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGludmFyaWFudCh0aGlzLnBpbm5lZFNvdXJjZSwgJ05vIHNvdXJjZSBpcyBwaW5uZWQgYXQgdGhlIHRpbWUuJyk7XG4gICAgICAgIHRoaXMucGlubmVkU291cmNlSWQgPSBudWxsO1xuICAgICAgICB0aGlzLnBpbm5lZFNvdXJjZSA9IG51bGw7XG4gICAgfTtcbiAgICBIYW5kbGVyUmVnaXN0cnlJbXBsLnByb3RvdHlwZS5hZGRIYW5kbGVyID0gZnVuY3Rpb24gKHJvbGUsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGlkID0gZ2V0TmV4dEhhbmRsZXJJZChyb2xlKTtcbiAgICAgICAgdGhpcy50eXBlcy5zZXQoaWQsIHR5cGUpO1xuICAgICAgICBpZiAocm9sZSA9PT0gaW50ZXJmYWNlc18xLkhhbmRsZXJSb2xlLlNPVVJDRSkge1xuICAgICAgICAgICAgdGhpcy5kcmFnU291cmNlcy5zZXQoaWQsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJvbGUgPT09IGludGVyZmFjZXNfMS5IYW5kbGVyUm9sZS5UQVJHRVQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcFRhcmdldHMuc2V0KGlkLCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTtcbiAgICByZXR1cm4gSGFuZGxlclJlZ2lzdHJ5SW1wbDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBIYW5kbGVyUmVnaXN0cnlJbXBsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZG5kLWNvcmUvbGliL0hhbmRsZXJSZWdpc3RyeUltcGwuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBuZXh0VW5pcXVlSWQgPSAwO1xuZnVuY3Rpb24gZ2V0TmV4dFVuaXF1ZUlkKCkge1xuICAgIHJldHVybiBuZXh0VW5pcXVlSWQrKztcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGdldE5leHRVbmlxdWVJZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RuZC1jb3JlL2xpYi91dGlscy9nZXROZXh0VW5pcXVlSWQuanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcbmZ1bmN0aW9uIHZhbGlkYXRlU291cmNlQ29udHJhY3Qoc291cmNlKSB7XG4gICAgaW52YXJpYW50KHR5cGVvZiBzb3VyY2UuY2FuRHJhZyA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGNhbkRyYWcgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICBpbnZhcmlhbnQodHlwZW9mIHNvdXJjZS5iZWdpbkRyYWcgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBiZWdpbkRyYWcgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICBpbnZhcmlhbnQodHlwZW9mIHNvdXJjZS5lbmREcmFnID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgZW5kRHJhZyB0byBiZSBhIGZ1bmN0aW9uLicpO1xufVxuZXhwb3J0cy52YWxpZGF0ZVNvdXJjZUNvbnRyYWN0ID0gdmFsaWRhdGVTb3VyY2VDb250cmFjdDtcbmZ1bmN0aW9uIHZhbGlkYXRlVGFyZ2V0Q29udHJhY3QodGFyZ2V0KSB7XG4gICAgaW52YXJpYW50KHR5cGVvZiB0YXJnZXQuY2FuRHJvcCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGNhbkRyb3AgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICBpbnZhcmlhbnQodHlwZW9mIHRhcmdldC5ob3ZlciA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGhvdmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgaW52YXJpYW50KHR5cGVvZiB0YXJnZXQuZHJvcCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGJlZ2luRHJhZyB0byBiZSBhIGZ1bmN0aW9uLicpO1xufVxuZXhwb3J0cy52YWxpZGF0ZVRhcmdldENvbnRyYWN0ID0gdmFsaWRhdGVUYXJnZXRDb250cmFjdDtcbmZ1bmN0aW9uIHZhbGlkYXRlVHlwZSh0eXBlLCBhbGxvd0FycmF5KSB7XG4gICAgaWYgKGFsbG93QXJyYXkgJiYgQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlLmZvckVhY2goZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHZhbGlkYXRlVHlwZSh0LCBmYWxzZSk7IH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudCh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdzeW1ib2wnLCBhbGxvd0FycmF5XG4gICAgICAgID8gJ1R5cGUgY2FuIG9ubHkgYmUgYSBzdHJpbmcsIGEgc3ltYm9sLCBvciBhbiBhcnJheSBvZiBlaXRoZXIuJ1xuICAgICAgICA6ICdUeXBlIGNhbiBvbmx5IGJlIGEgc3RyaW5nIG9yIGEgc3ltYm9sLicpO1xufVxuZXhwb3J0cy52YWxpZGF0ZVR5cGUgPSB2YWxpZGF0ZVR5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kbmQtY29yZS9saWIvY29udHJhY3RzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHJhd0FzYXAgcHJvdmlkZXMgZXZlcnl0aGluZyB3ZSBuZWVkIGV4Y2VwdCBleGNlcHRpb24gbWFuYWdlbWVudC5cbnZhciByYXdBc2FwID0gcmVxdWlyZShcIi4vcmF3XCIpO1xuLy8gUmF3VGFza3MgYXJlIHJlY3ljbGVkIHRvIHJlZHVjZSBHQyBjaHVybi5cbnZhciBmcmVlVGFza3MgPSBbXTtcbi8vIFdlIHF1ZXVlIGVycm9ycyB0byBlbnN1cmUgdGhleSBhcmUgdGhyb3duIGluIHJpZ2h0IG9yZGVyIChGSUZPKS5cbi8vIEFycmF5LWFzLXF1ZXVlIGlzIGdvb2QgZW5vdWdoIGhlcmUsIHNpbmNlIHdlIGFyZSBqdXN0IGRlYWxpbmcgd2l0aCBleGNlcHRpb25zLlxudmFyIHBlbmRpbmdFcnJvcnMgPSBbXTtcbnZhciByZXF1ZXN0RXJyb3JUaHJvdyA9IHJhd0FzYXAubWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKHRocm93Rmlyc3RFcnJvcik7XG5cbmZ1bmN0aW9uIHRocm93Rmlyc3RFcnJvcigpIHtcbiAgICBpZiAocGVuZGluZ0Vycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgcGVuZGluZ0Vycm9ycy5zaGlmdCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxscyBhIHRhc2sgYXMgc29vbiBhcyBwb3NzaWJsZSBhZnRlciByZXR1cm5pbmcsIGluIGl0cyBvd24gZXZlbnQsIHdpdGggcHJpb3JpdHlcbiAqIG92ZXIgb3RoZXIgZXZlbnRzIGxpa2UgYW5pbWF0aW9uLCByZWZsb3csIGFuZCByZXBhaW50LiBBbiBlcnJvciB0aHJvd24gZnJvbSBhblxuICogZXZlbnQgd2lsbCBub3QgaW50ZXJydXB0LCBub3IgZXZlbiBzdWJzdGFudGlhbGx5IHNsb3cgZG93biB0aGUgcHJvY2Vzc2luZyBvZlxuICogb3RoZXIgZXZlbnRzLCBidXQgd2lsbCBiZSByYXRoZXIgcG9zdHBvbmVkIHRvIGEgbG93ZXIgcHJpb3JpdHkgZXZlbnQuXG4gKiBAcGFyYW0ge3tjYWxsfX0gdGFzayBBIGNhbGxhYmxlIG9iamVjdCwgdHlwaWNhbGx5IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogYXJndW1lbnRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFzYXA7XG5mdW5jdGlvbiBhc2FwKHRhc2spIHtcbiAgICB2YXIgcmF3VGFzaztcbiAgICBpZiAoZnJlZVRhc2tzLmxlbmd0aCkge1xuICAgICAgICByYXdUYXNrID0gZnJlZVRhc2tzLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJhd1Rhc2sgPSBuZXcgUmF3VGFzaygpO1xuICAgIH1cbiAgICByYXdUYXNrLnRhc2sgPSB0YXNrO1xuICAgIHJhd0FzYXAocmF3VGFzayk7XG59XG5cbi8vIFdlIHdyYXAgdGFza3Mgd2l0aCByZWN5Y2xhYmxlIHRhc2sgb2JqZWN0cy4gIEEgdGFzayBvYmplY3QgaW1wbGVtZW50c1xuLy8gYGNhbGxgLCBqdXN0IGxpa2UgYSBmdW5jdGlvbi5cbmZ1bmN0aW9uIFJhd1Rhc2soKSB7XG4gICAgdGhpcy50YXNrID0gbnVsbDtcbn1cblxuLy8gVGhlIHNvbGUgcHVycG9zZSBvZiB3cmFwcGluZyB0aGUgdGFzayBpcyB0byBjYXRjaCB0aGUgZXhjZXB0aW9uIGFuZCByZWN5Y2xlXG4vLyB0aGUgdGFzayBvYmplY3QgYWZ0ZXIgaXRzIHNpbmdsZSB1c2UuXG5SYXdUYXNrLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHRoaXMudGFzay5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGFzYXAub25lcnJvcikge1xuICAgICAgICAgICAgLy8gVGhpcyBob29rIGV4aXN0cyBwdXJlbHkgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gICAgICAgICAgICAvLyBJdHMgbmFtZSB3aWxsIGJlIHBlcmlvZGljYWxseSByYW5kb21pemVkIHRvIGJyZWFrIGFueSBjb2RlIHRoYXRcbiAgICAgICAgICAgIC8vIGRlcGVuZHMgb24gaXRzIGV4aXN0ZW5jZS5cbiAgICAgICAgICAgIGFzYXAub25lcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJbiBhIHdlYiBicm93c2VyLCBleGNlcHRpb25zIGFyZSBub3QgZmF0YWwuIEhvd2V2ZXIsIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzbG93aW5nIGRvd24gdGhlIHF1ZXVlIG9mIHBlbmRpbmcgdGFza3MsIHdlIHJldGhyb3cgdGhlIGVycm9yIGluIGFcbiAgICAgICAgICAgIC8vIGxvd2VyIHByaW9yaXR5IHR1cm4uXG4gICAgICAgICAgICBwZW5kaW5nRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgcmVxdWVzdEVycm9yVGhyb3coKTtcbiAgICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMudGFzayA9IG51bGw7XG4gICAgICAgIGZyZWVUYXNrc1tmcmVlVGFza3MubGVuZ3RoXSA9IHRoaXM7XG4gICAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FzYXAvYnJvd3Nlci1hc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFVzZSB0aGUgZmFzdGVzdCBtZWFucyBwb3NzaWJsZSB0byBleGVjdXRlIGEgdGFzayBpbiBpdHMgb3duIHR1cm4sIHdpdGhcbi8vIHByaW9yaXR5IG92ZXIgb3RoZXIgZXZlbnRzIGluY2x1ZGluZyBJTywgYW5pbWF0aW9uLCByZWZsb3csIGFuZCByZWRyYXdcbi8vIGV2ZW50cyBpbiBicm93c2Vycy5cbi8vXG4vLyBBbiBleGNlcHRpb24gdGhyb3duIGJ5IGEgdGFzayB3aWxsIHBlcm1hbmVudGx5IGludGVycnVwdCB0aGUgcHJvY2Vzc2luZyBvZlxuLy8gc3Vic2VxdWVudCB0YXNrcy4gVGhlIGhpZ2hlciBsZXZlbCBgYXNhcGAgZnVuY3Rpb24gZW5zdXJlcyB0aGF0IGlmIGFuXG4vLyBleGNlcHRpb24gaXMgdGhyb3duIGJ5IGEgdGFzaywgdGhhdCB0aGUgdGFzayBxdWV1ZSB3aWxsIGNvbnRpbnVlIGZsdXNoaW5nIGFzXG4vLyBzb29uIGFzIHBvc3NpYmxlLCBidXQgaWYgeW91IHVzZSBgcmF3QXNhcGAgZGlyZWN0bHksIHlvdSBhcmUgcmVzcG9uc2libGUgdG9cbi8vIGVpdGhlciBlbnN1cmUgdGhhdCBubyBleGNlcHRpb25zIGFyZSB0aHJvd24gZnJvbSB5b3VyIHRhc2ssIG9yIHRvIG1hbnVhbGx5XG4vLyBjYWxsIGByYXdBc2FwLnJlcXVlc3RGbHVzaGAgaWYgYW4gZXhjZXB0aW9uIGlzIHRocm93bi5cbm1vZHVsZS5leHBvcnRzID0gcmF3QXNhcDtcbmZ1bmN0aW9uIHJhd0FzYXAodGFzaykge1xuICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHJlcXVlc3RGbHVzaCgpO1xuICAgICAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgfVxuICAgIC8vIEVxdWl2YWxlbnQgdG8gcHVzaCwgYnV0IGF2b2lkcyBhIGZ1bmN0aW9uIGNhbGwuXG4gICAgcXVldWVbcXVldWUubGVuZ3RoXSA9IHRhc2s7XG59XG5cbnZhciBxdWV1ZSA9IFtdO1xuLy8gT25jZSBhIGZsdXNoIGhhcyBiZWVuIHJlcXVlc3RlZCwgbm8gZnVydGhlciBjYWxscyB0byBgcmVxdWVzdEZsdXNoYCBhcmVcbi8vIG5lY2Vzc2FyeSB1bnRpbCB0aGUgbmV4dCBgZmx1c2hgIGNvbXBsZXRlcy5cbnZhciBmbHVzaGluZyA9IGZhbHNlO1xuLy8gYHJlcXVlc3RGbHVzaGAgaXMgYW4gaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgbWV0aG9kIHRoYXQgYXR0ZW1wdHMgdG8ga2lja1xuLy8gb2ZmIGEgYGZsdXNoYCBldmVudCBhcyBxdWlja2x5IGFzIHBvc3NpYmxlLiBgZmx1c2hgIHdpbGwgYXR0ZW1wdCB0byBleGhhdXN0XG4vLyB0aGUgZXZlbnQgcXVldWUgYmVmb3JlIHlpZWxkaW5nIHRvIHRoZSBicm93c2VyJ3Mgb3duIGV2ZW50IGxvb3AuXG52YXIgcmVxdWVzdEZsdXNoO1xuLy8gVGhlIHBvc2l0aW9uIG9mIHRoZSBuZXh0IHRhc2sgdG8gZXhlY3V0ZSBpbiB0aGUgdGFzayBxdWV1ZS4gVGhpcyBpc1xuLy8gcHJlc2VydmVkIGJldHdlZW4gY2FsbHMgdG8gYGZsdXNoYCBzbyB0aGF0IGl0IGNhbiBiZSByZXN1bWVkIGlmXG4vLyBhIHRhc2sgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbnZhciBpbmRleCA9IDA7XG4vLyBJZiBhIHRhc2sgc2NoZWR1bGVzIGFkZGl0aW9uYWwgdGFza3MgcmVjdXJzaXZlbHksIHRoZSB0YXNrIHF1ZXVlIGNhbiBncm93XG4vLyB1bmJvdW5kZWQuIFRvIHByZXZlbnQgbWVtb3J5IGV4aGF1c3Rpb24sIHRoZSB0YXNrIHF1ZXVlIHdpbGwgcGVyaW9kaWNhbGx5XG4vLyB0cnVuY2F0ZSBhbHJlYWR5LWNvbXBsZXRlZCB0YXNrcy5cbnZhciBjYXBhY2l0eSA9IDEwMjQ7XG5cbi8vIFRoZSBmbHVzaCBmdW5jdGlvbiBwcm9jZXNzZXMgYWxsIHRhc2tzIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB3aXRoXG4vLyBgcmF3QXNhcGAgdW5sZXNzIGFuZCB1bnRpbCBvbmUgb2YgdGhvc2UgdGFza3MgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbi8vIElmIGEgdGFzayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBgZmx1c2hgIGVuc3VyZXMgdGhhdCBpdHMgc3RhdGUgd2lsbCByZW1haW5cbi8vIGNvbnNpc3RlbnQgYW5kIHdpbGwgcmVzdW1lIHdoZXJlIGl0IGxlZnQgb2ZmIHdoZW4gY2FsbGVkIGFnYWluLlxuLy8gSG93ZXZlciwgYGZsdXNoYCBkb2VzIG5vdCBtYWtlIGFueSBhcnJhbmdlbWVudHMgdG8gYmUgY2FsbGVkIGFnYWluIGlmIGFuXG4vLyBleGNlcHRpb24gaXMgdGhyb3duLlxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgd2hpbGUgKGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8gQWR2YW5jZSB0aGUgaW5kZXggYmVmb3JlIGNhbGxpbmcgdGhlIHRhc2suIFRoaXMgZW5zdXJlcyB0aGF0IHdlIHdpbGxcbiAgICAgICAgLy8gYmVnaW4gZmx1c2hpbmcgb24gdGhlIG5leHQgdGFzayB0aGUgdGFzayB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICAgIGluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICBxdWV1ZVtjdXJyZW50SW5kZXhdLmNhbGwoKTtcbiAgICAgICAgLy8gUHJldmVudCBsZWFraW5nIG1lbW9yeSBmb3IgbG9uZyBjaGFpbnMgb2YgcmVjdXJzaXZlIGNhbGxzIHRvIGBhc2FwYC5cbiAgICAgICAgLy8gSWYgd2UgY2FsbCBgYXNhcGAgd2l0aGluIHRhc2tzIHNjaGVkdWxlZCBieSBgYXNhcGAsIHRoZSBxdWV1ZSB3aWxsXG4gICAgICAgIC8vIGdyb3csIGJ1dCB0byBhdm9pZCBhbiBPKG4pIHdhbGsgZm9yIGV2ZXJ5IHRhc2sgd2UgZXhlY3V0ZSwgd2UgZG9uJ3RcbiAgICAgICAgLy8gc2hpZnQgdGFza3Mgb2ZmIHRoZSBxdWV1ZSBhZnRlciB0aGV5IGhhdmUgYmVlbiBleGVjdXRlZC5cbiAgICAgICAgLy8gSW5zdGVhZCwgd2UgcGVyaW9kaWNhbGx5IHNoaWZ0IDEwMjQgdGFza3Mgb2ZmIHRoZSBxdWV1ZS5cbiAgICAgICAgaWYgKGluZGV4ID4gY2FwYWNpdHkpIHtcbiAgICAgICAgICAgIC8vIE1hbnVhbGx5IHNoaWZ0IGFsbCB2YWx1ZXMgc3RhcnRpbmcgYXQgdGhlIGluZGV4IGJhY2sgdG8gdGhlXG4gICAgICAgICAgICAvLyBiZWdpbm5pbmcgb2YgdGhlIHF1ZXVlLlxuICAgICAgICAgICAgZm9yICh2YXIgc2NhbiA9IDAsIG5ld0xlbmd0aCA9IHF1ZXVlLmxlbmd0aCAtIGluZGV4OyBzY2FuIDwgbmV3TGVuZ3RoOyBzY2FuKyspIHtcbiAgICAgICAgICAgICAgICBxdWV1ZVtzY2FuXSA9IHF1ZXVlW3NjYW4gKyBpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5sZW5ndGggLT0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICBpbmRleCA9IDA7XG4gICAgZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLy8gYHJlcXVlc3RGbHVzaGAgaXMgaW1wbGVtZW50ZWQgdXNpbmcgYSBzdHJhdGVneSBiYXNlZCBvbiBkYXRhIGNvbGxlY3RlZCBmcm9tXG4vLyBldmVyeSBhdmFpbGFibGUgU2F1Y2VMYWJzIFNlbGVuaXVtIHdlYiBkcml2ZXIgd29ya2VyIGF0IHRpbWUgb2Ygd3JpdGluZy5cbi8vIGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzFtRy01VVlHdXA1cXhHZEVNV2toUDZCV0N6MDUzTlViMkUxUW9VVFUxNnVBL2VkaXQjZ2lkPTc4MzcyNDU5M1xuXG4vLyBTYWZhcmkgNiBhbmQgNi4xIGZvciBkZXNrdG9wLCBpUGFkLCBhbmQgaVBob25lIGFyZSB0aGUgb25seSBicm93c2VycyB0aGF0XG4vLyBoYXZlIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIgYnV0IG5vdCB1bi1wcmVmaXhlZCBNdXRhdGlvbk9ic2VydmVyLlxuLy8gTXVzdCB1c2UgYGdsb2JhbGAgb3IgYHNlbGZgIGluc3RlYWQgb2YgYHdpbmRvd2AgdG8gd29yayBpbiBib3RoIGZyYW1lcyBhbmQgd2ViXG4vLyB3b3JrZXJzLiBgZ2xvYmFsYCBpcyBhIHByb3Zpc2lvbiBvZiBCcm93c2VyaWZ5LCBNciwgTXJzLCBvciBNb3AuXG5cbi8qIGdsb2JhbHMgc2VsZiAqL1xudmFyIHNjb3BlID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHNlbGY7XG52YXIgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBzY29wZS5NdXRhdGlvbk9ic2VydmVyIHx8IHNjb3BlLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cbi8vIE11dGF0aW9uT2JzZXJ2ZXJzIGFyZSBkZXNpcmFibGUgYmVjYXVzZSB0aGV5IGhhdmUgaGlnaCBwcmlvcml0eSBhbmQgd29ya1xuLy8gcmVsaWFibHkgZXZlcnl3aGVyZSB0aGV5IGFyZSBpbXBsZW1lbnRlZC5cbi8vIFRoZXkgYXJlIGltcGxlbWVudGVkIGluIGFsbCBtb2Rlcm4gYnJvd3NlcnMuXG4vL1xuLy8gLSBBbmRyb2lkIDQtNC4zXG4vLyAtIENocm9tZSAyNi0zNFxuLy8gLSBGaXJlZm94IDE0LTI5XG4vLyAtIEludGVybmV0IEV4cGxvcmVyIDExXG4vLyAtIGlQYWQgU2FmYXJpIDYtNy4xXG4vLyAtIGlQaG9uZSBTYWZhcmkgNy03LjFcbi8vIC0gU2FmYXJpIDYtN1xuaWYgKHR5cGVvZiBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmVxdWVzdEZsdXNoID0gbWFrZVJlcXVlc3RDYWxsRnJvbU11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpO1xuXG4vLyBNZXNzYWdlQ2hhbm5lbHMgYXJlIGRlc2lyYWJsZSBiZWNhdXNlIHRoZXkgZ2l2ZSBkaXJlY3QgYWNjZXNzIHRvIHRoZSBIVE1MXG4vLyB0YXNrIHF1ZXVlLCBhcmUgaW1wbGVtZW50ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAsIFNhZmFyaSA1LjAtMSwgYW5kIE9wZXJhXG4vLyAxMS0xMiwgYW5kIGluIHdlYiB3b3JrZXJzIGluIG1hbnkgZW5naW5lcy5cbi8vIEFsdGhvdWdoIG1lc3NhZ2UgY2hhbm5lbHMgeWllbGQgdG8gYW55IHF1ZXVlZCByZW5kZXJpbmcgYW5kIElPIHRhc2tzLCB0aGV5XG4vLyB3b3VsZCBiZSBiZXR0ZXIgdGhhbiBpbXBvc2luZyB0aGUgNG1zIGRlbGF5IG9mIHRpbWVycy5cbi8vIEhvd2V2ZXIsIHRoZXkgZG8gbm90IHdvcmsgcmVsaWFibHkgaW4gSW50ZXJuZXQgRXhwbG9yZXIgb3IgU2FmYXJpLlxuXG4vLyBJbnRlcm5ldCBFeHBsb3JlciAxMCBpcyB0aGUgb25seSBicm93c2VyIHRoYXQgaGFzIHNldEltbWVkaWF0ZSBidXQgZG9lc1xuLy8gbm90IGhhdmUgTXV0YXRpb25PYnNlcnZlcnMuXG4vLyBBbHRob3VnaCBzZXRJbW1lZGlhdGUgeWllbGRzIHRvIHRoZSBicm93c2VyJ3MgcmVuZGVyZXIsIGl0IHdvdWxkIGJlXG4vLyBwcmVmZXJyYWJsZSB0byBmYWxsaW5nIGJhY2sgdG8gc2V0VGltZW91dCBzaW5jZSBpdCBkb2VzIG5vdCBoYXZlXG4vLyB0aGUgbWluaW11bSA0bXMgcGVuYWx0eS5cbi8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgYXBwZWFycyB0byBiZSBhIGJ1ZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCBNb2JpbGUgKGFuZFxuLy8gRGVza3RvcCB0byBhIGxlc3NlciBleHRlbnQpIHRoYXQgcmVuZGVycyBib3RoIHNldEltbWVkaWF0ZSBhbmRcbi8vIE1lc3NhZ2VDaGFubmVsIHVzZWxlc3MgZm9yIHRoZSBwdXJwb3NlcyBvZiBBU0FQLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaXNrb3dhbC9xL2lzc3Vlcy8zOTZcblxuLy8gVGltZXJzIGFyZSBpbXBsZW1lbnRlZCB1bml2ZXJzYWxseS5cbi8vIFdlIGZhbGwgYmFjayB0byB0aW1lcnMgaW4gd29ya2VycyBpbiBtb3N0IGVuZ2luZXMsIGFuZCBpbiBmb3JlZ3JvdW5kXG4vLyBjb250ZXh0cyBpbiB0aGUgZm9sbG93aW5nIGJyb3dzZXJzLlxuLy8gSG93ZXZlciwgbm90ZSB0aGF0IGV2ZW4gdGhpcyBzaW1wbGUgY2FzZSByZXF1aXJlcyBudWFuY2VzIHRvIG9wZXJhdGUgaW4gYVxuLy8gYnJvYWQgc3BlY3RydW0gb2YgYnJvd3NlcnMuXG4vL1xuLy8gLSBGaXJlZm94IDMtMTNcbi8vIC0gSW50ZXJuZXQgRXhwbG9yZXIgNi05XG4vLyAtIGlQYWQgU2FmYXJpIDQuM1xuLy8gLSBMeW54IDIuOC43XG59IGVsc2Uge1xuICAgIHJlcXVlc3RGbHVzaCA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcihmbHVzaCk7XG59XG5cbi8vIGByZXF1ZXN0Rmx1c2hgIHJlcXVlc3RzIHRoYXQgdGhlIGhpZ2ggcHJpb3JpdHkgZXZlbnQgcXVldWUgYmUgZmx1c2hlZCBhc1xuLy8gc29vbiBhcyBwb3NzaWJsZS5cbi8vIFRoaXMgaXMgdXNlZnVsIHRvIHByZXZlbnQgYW4gZXJyb3IgdGhyb3duIGluIGEgdGFzayBmcm9tIHN0YWxsaW5nIHRoZSBldmVudFxuLy8gcXVldWUgaWYgdGhlIGV4Y2VwdGlvbiBoYW5kbGVkIGJ5IE5vZGUuanPigJlzXG4vLyBgcHJvY2Vzcy5vbihcInVuY2F1Z2h0RXhjZXB0aW9uXCIpYCBvciBieSBhIGRvbWFpbi5cbnJhd0FzYXAucmVxdWVzdEZsdXNoID0gcmVxdWVzdEZsdXNoO1xuXG4vLyBUbyByZXF1ZXN0IGEgaGlnaCBwcmlvcml0eSBldmVudCwgd2UgaW5kdWNlIGEgbXV0YXRpb24gb2JzZXJ2ZXIgYnkgdG9nZ2xpbmdcbi8vIHRoZSB0ZXh0IG9mIGEgdGV4dCBub2RlIGJldHdlZW4gXCIxXCIgYW5kIFwiLTFcIi5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21NdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHRvZ2dsZSA9IDE7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xuICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4gICAgICAgIHRvZ2dsZSA9IC10b2dnbGU7XG4gICAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZTtcbiAgICB9O1xufVxuXG4vLyBUaGUgbWVzc2FnZSBjaGFubmVsIHRlY2huaXF1ZSB3YXMgZGlzY292ZXJlZCBieSBNYWx0ZSBVYmwgYW5kIHdhcyB0aGVcbi8vIG9yaWdpbmFsIGZvdW5kYXRpb24gZm9yIHRoaXMgbGlicmFyeS5cbi8vIGh0dHA6Ly93d3cubm9uYmxvY2tpbmcuaW8vMjAxMS8wNi93aW5kb3duZXh0dGljay5odG1sXG5cbi8vIFNhZmFyaSA2LjAuNSAoYXQgbGVhc3QpIGludGVybWl0dGVudGx5IGZhaWxzIHRvIGNyZWF0ZSBtZXNzYWdlIHBvcnRzIG9uIGFcbi8vIHBhZ2UncyBmaXJzdCBsb2FkLiBUaGFua2Z1bGx5LCB0aGlzIHZlcnNpb24gb2YgU2FmYXJpIHN1cHBvcnRzXG4vLyBNdXRhdGlvbk9ic2VydmVycywgc28gd2UgZG9uJ3QgbmVlZCB0byBmYWxsIGJhY2sgaW4gdGhhdCBjYXNlLlxuXG4vLyBmdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tTWVzc2FnZUNoYW5uZWwoY2FsbGJhY2spIHtcbi8vICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuLy8gICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuLy8gICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuLy8gICAgIH07XG4vLyB9XG5cbi8vIEZvciByZWFzb25zIGV4cGxhaW5lZCBhYm92ZSwgd2UgYXJlIGFsc28gdW5hYmxlIHRvIHVzZSBgc2V0SW1tZWRpYXRlYFxuLy8gdW5kZXIgYW55IGNpcmN1bXN0YW5jZXMuXG4vLyBFdmVuIGlmIHdlIHdlcmUsIHRoZXJlIGlzIGFub3RoZXIgYnVnIGluIEludGVybmV0IEV4cGxvcmVyIDEwLlxuLy8gSXQgaXMgbm90IHN1ZmZpY2llbnQgdG8gYXNzaWduIGBzZXRJbW1lZGlhdGVgIHRvIGByZXF1ZXN0Rmx1c2hgIGJlY2F1c2Vcbi8vIGBzZXRJbW1lZGlhdGVgIG11c3QgYmUgY2FsbGVkICpieSBuYW1lKiBhbmQgdGhlcmVmb3JlIG11c3QgYmUgd3JhcHBlZCBpbiBhXG4vLyBjbG9zdXJlLlxuLy8gTmV2ZXIgZm9yZ2V0LlxuXG4vLyBmdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tU2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuLy8gICAgICAgICBzZXRJbW1lZGlhdGUoY2FsbGJhY2spO1xuLy8gICAgIH07XG4vLyB9XG5cbi8vIFNhZmFyaSA2LjAgaGFzIGEgcHJvYmxlbSB3aGVyZSB0aW1lcnMgd2lsbCBnZXQgbG9zdCB3aGlsZSB0aGUgdXNlciBpc1xuLy8gc2Nyb2xsaW5nLiBUaGlzIHByb2JsZW0gZG9lcyBub3QgaW1wYWN0IEFTQVAgYmVjYXVzZSBTYWZhcmkgNi4wIHN1cHBvcnRzXG4vLyBtdXRhdGlvbiBvYnNlcnZlcnMsIHNvIHRoYXQgaW1wbGVtZW50YXRpb24gaXMgdXNlZCBpbnN0ZWFkLlxuLy8gSG93ZXZlciwgaWYgd2UgZXZlciBlbGVjdCB0byB1c2UgdGltZXJzIGluIFNhZmFyaSwgdGhlIHByZXZhbGVudCB3b3JrLWFyb3VuZFxuLy8gaXMgdG8gYWRkIGEgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHRoYXQgY2FsbHMgZm9yIGEgZmx1c2guXG5cbi8vIGBzZXRUaW1lb3V0YCBkb2VzIG5vdCBjYWxsIHRoZSBwYXNzZWQgY2FsbGJhY2sgaWYgdGhlIGRlbGF5IGlzIGxlc3MgdGhhblxuLy8gYXBwcm94aW1hdGVseSA3IGluIHdlYiB3b3JrZXJzIGluIEZpcmVmb3ggOCB0aHJvdWdoIDE4LCBhbmQgc29tZXRpbWVzIG5vdFxuLy8gZXZlbiB0aGVuLlxuXG5mdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXIoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4gICAgICAgIC8vIFdlIGRpc3BhdGNoIGEgdGltZW91dCB3aXRoIGEgc3BlY2lmaWVkIGRlbGF5IG9mIDAgZm9yIGVuZ2luZXMgdGhhdFxuICAgICAgICAvLyBjYW4gcmVsaWFibHkgYWNjb21tb2RhdGUgdGhhdCByZXF1ZXN0LiBUaGlzIHdpbGwgdXN1YWxseSBiZSBzbmFwcGVkXG4gICAgICAgIC8vIHRvIGEgNCBtaWxpc2Vjb25kIGRlbGF5LCBidXQgb25jZSB3ZSdyZSBmbHVzaGluZywgdGhlcmUncyBubyBkZWxheVxuICAgICAgICAvLyBiZXR3ZWVuIGV2ZW50cy5cbiAgICAgICAgdmFyIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGhhbmRsZVRpbWVyLCAwKTtcbiAgICAgICAgLy8gSG93ZXZlciwgc2luY2UgdGhpcyB0aW1lciBnZXRzIGZyZXF1ZW50bHkgZHJvcHBlZCBpbiBGaXJlZm94XG4gICAgICAgIC8vIHdvcmtlcnMsIHdlIGVubGlzdCBhbiBpbnRlcnZhbCBoYW5kbGUgdGhhdCB3aWxsIHRyeSB0byBmaXJlXG4gICAgICAgIC8vIGFuIGV2ZW50IDIwIHRpbWVzIHBlciBzZWNvbmQgdW50aWwgaXQgc3VjY2VlZHMuXG4gICAgICAgIHZhciBpbnRlcnZhbEhhbmRsZSA9IHNldEludGVydmFsKGhhbmRsZVRpbWVyLCA1MCk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVGltZXIoKSB7XG4gICAgICAgICAgICAvLyBXaGljaGV2ZXIgdGltZXIgc3VjY2VlZHMgd2lsbCBjYW5jZWwgYm90aCB0aW1lcnMgYW5kXG4gICAgICAgICAgICAvLyBleGVjdXRlIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxIYW5kbGUpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIFRoaXMgaXMgZm9yIGBhc2FwLmpzYCBvbmx5LlxuLy8gSXRzIG5hbWUgd2lsbCBiZSBwZXJpb2RpY2FsbHkgcmFuZG9taXplZCB0byBicmVhayBhbnkgY29kZSB0aGF0IGRlcGVuZHMgb25cbi8vIGl0cyBleGlzdGVuY2UuXG5yYXdBc2FwLm1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lciA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcjtcblxuLy8gQVNBUCB3YXMgb3JpZ2luYWxseSBhIG5leHRUaWNrIHNoaW0gaW5jbHVkZWQgaW4gUS4gVGhpcyB3YXMgZmFjdG9yZWQgb3V0XG4vLyBpbnRvIHRoaXMgQVNBUCBwYWNrYWdlLiBJdCB3YXMgbGF0ZXIgYWRhcHRlZCB0byBSU1ZQIHdoaWNoIG1hZGUgZnVydGhlclxuLy8gYW1lbmRtZW50cy4gVGhlc2UgZGVjaXNpb25zLCBwYXJ0aWN1bGFybHkgdG8gbWFyZ2luYWxpemUgTWVzc2FnZUNoYW5uZWwgYW5kXG4vLyB0byBjYXB0dXJlIHRoZSBNdXRhdGlvbk9ic2VydmVyIGltcGxlbWVudGF0aW9uIGluIGEgY2xvc3VyZSwgd2VyZSBpbnRlZ3JhdGVkXG4vLyBiYWNrIGludG8gQVNBUCBwcm9wZXIuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGlsZGVpby9yc3ZwLmpzL2Jsb2IvY2RkZjcyMzI1NDZhOWNmODU4NTI0Yjc1Y2RlNmY5ZWRmNzI2MjBhNy9saWIvcnN2cC9hc2FwLmpzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9hc2FwL2Jyb3dzZXItcmF3LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDE1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY2hlY2tEZWNvcmF0b3JBcmd1bWVudHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzXCIpO1xudmFyIGRlY29yYXRlSGFuZGxlcl8xID0gcmVxdWlyZShcIi4vZGVjb3JhdGVIYW5kbGVyXCIpO1xudmFyIHJlZ2lzdGVyU291cmNlXzEgPSByZXF1aXJlKFwiLi9yZWdpc3RlclNvdXJjZVwiKTtcbnZhciBjcmVhdGVTb3VyY2VGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi9jcmVhdGVTb3VyY2VGYWN0b3J5XCIpO1xudmFyIGNyZWF0ZVNvdXJjZU1vbml0b3JfMSA9IHJlcXVpcmUoXCIuL2NyZWF0ZVNvdXJjZU1vbml0b3JcIik7XG52YXIgY3JlYXRlU291cmNlQ29ubmVjdG9yXzEgPSByZXF1aXJlKFwiLi9jcmVhdGVTb3VyY2VDb25uZWN0b3JcIik7XG52YXIgaXNWYWxpZFR5cGVfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzVmFsaWRUeXBlXCIpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xudmFyIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuLyoqXG4gKiBEZWNvcmF0ZXMgYSBjb21wb25lbnQgYXMgYSBkcmFnc291cmNlXG4gKiBAcGFyYW0gdHlwZSBUaGUgZHJhZ3NvdXJjZSB0eXBlXG4gKiBAcGFyYW0gc3BlYyBUaGUgZHJhZyBzb3VyY2Ugc3BlY2lmaWNhdGlvblxuICogQHBhcmFtIGNvbGxlY3QgVGhlIHByb3BzIGNvbGxlY3RvciBmdW5jdGlvblxuICogQHBhcmFtIG9wdGlvbnMgRG5EIG9wdGlub3NcbiAqL1xuZnVuY3Rpb24gRHJhZ1NvdXJjZSh0eXBlLCBzcGVjLCBjb2xsZWN0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBjaGVja0RlY29yYXRvckFyZ3VtZW50c18xLmRlZmF1bHQoJ0RyYWdTb3VyY2UnLCAndHlwZSwgc3BlYywgY29sbGVjdFssIG9wdGlvbnNdJywgdHlwZSwgc3BlYywgY29sbGVjdCwgb3B0aW9ucyk7XG4gICAgdmFyIGdldFR5cGUgPSB0eXBlO1xuICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpbnZhcmlhbnQoaXNWYWxpZFR5cGVfMS5kZWZhdWx0KHR5cGUpLCAnRXhwZWN0ZWQgXCJ0eXBlXCIgcHJvdmlkZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIERyYWdTb3VyY2UgdG8gYmUgJyArXG4gICAgICAgICAgICAnYSBzdHJpbmcsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nIGdpdmVuIHRoZSBjdXJyZW50IHByb3BzLiAnICtcbiAgICAgICAgICAgICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgdHlwZSk7XG4gICAgICAgIGdldFR5cGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0eXBlOyB9O1xuICAgIH1cbiAgICBpbnZhcmlhbnQoaXNQbGFpbk9iamVjdChzcGVjKSwgJ0V4cGVjdGVkIFwic3BlY1wiIHByb3ZpZGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gRHJhZ1NvdXJjZSB0byBiZSAnICtcbiAgICAgICAgJ2EgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArXG4gICAgICAgICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBzcGVjKTtcbiAgICB2YXIgY3JlYXRlU291cmNlID0gY3JlYXRlU291cmNlRmFjdG9yeV8xLmRlZmF1bHQoc3BlYyk7XG4gICAgaW52YXJpYW50KHR5cGVvZiBjb2xsZWN0ID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgXCJjb2xsZWN0XCIgcHJvdmlkZWQgYXMgdGhlIHRoaXJkIGFyZ3VtZW50IHRvIERyYWdTb3VyY2UgdG8gYmUgJyArXG4gICAgICAgICdhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHBsYWluIG9iamVjdCBvZiBwcm9wcyB0byBpbmplY3QuICcgK1xuICAgICAgICAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgK1xuICAgICAgICAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgY29sbGVjdCk7XG4gICAgaW52YXJpYW50KGlzUGxhaW5PYmplY3Qob3B0aW9ucyksICdFeHBlY3RlZCBcIm9wdGlvbnNcIiBwcm92aWRlZCBhcyB0aGUgZm91cnRoIGFyZ3VtZW50IHRvIERyYWdTb3VyY2UgdG8gYmUgJyArXG4gICAgICAgICdhIHBsYWluIG9iamVjdCB3aGVuIHNwZWNpZmllZC4gJyArXG4gICAgICAgICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArXG4gICAgICAgICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBjb2xsZWN0KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGVTb3VyY2UoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBkZWNvcmF0ZUhhbmRsZXJfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIGNvbnRhaW5lckRpc3BsYXlOYW1lOiAnRHJhZ1NvdXJjZScsXG4gICAgICAgICAgICBjcmVhdGVIYW5kbGVyOiBjcmVhdGVTb3VyY2UsXG4gICAgICAgICAgICByZWdpc3RlckhhbmRsZXI6IHJlZ2lzdGVyU291cmNlXzEuZGVmYXVsdCxcbiAgICAgICAgICAgIGNyZWF0ZU1vbml0b3I6IGNyZWF0ZVNvdXJjZU1vbml0b3JfMS5kZWZhdWx0LFxuICAgICAgICAgICAgY3JlYXRlQ29ubmVjdG9yOiBjcmVhdGVTb3VyY2VDb25uZWN0b3JfMS5kZWZhdWx0LFxuICAgICAgICAgICAgRGVjb3JhdGVkQ29tcG9uZW50OiBEZWNvcmF0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICBnZXRUeXBlOiBnZXRUeXBlLFxuICAgICAgICAgICAgY29sbGVjdDogY29sbGVjdCxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBEcmFnU291cmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi9EcmFnU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vRGlzcG9zYWJsZVwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9TZXJpYWxEaXNwb3NhYmxlXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL0NvbXBvc2l0ZURpc3Bvc2FibGVcIikpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi91dGlscy9kaXNwb3NhYmxlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpO1xudmFyIG5vb3AgPSByZXF1aXJlKCdsb2Rhc2gvbm9vcCcpO1xuLyoqXG4gKiBQcm92aWRlcyBhIHNldCBvZiBzdGF0aWMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgRGlzcG9zYWJsZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gQWN0aW9uIHRvIHJ1biBkdXJpbmcgdGhlIGZpcnN0IGNhbGwgdG8gZGlzcG9zZS5cbiAqIFRoZSBhY3Rpb24gaXMgZ3VhcmFudGVlZCB0byBiZSBydW4gYXQgbW9zdCBvbmNlLlxuICovXG52YXIgRGlzcG9zYWJsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaXNwb3NhYmxlKGFjdGlvbikge1xuICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBpc0Z1bmN0aW9uKGFjdGlvbikgPyBhY3Rpb24gOiBub29wO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgZGlzcG9zYWJsZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBPYmplY3QgdG8gdGVzdCB3aGV0aGVyIGl0IGhhcyBhIGRpc3Bvc2UgbWV0aG9kXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYSBkaXNwb3NhYmxlIG9iamVjdCwgZWxzZSBmYWxzZS5cbiAgICAgKi9cbiAgICBEaXNwb3NhYmxlLmlzRGlzcG9zYWJsZSA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkICYmIGlzRnVuY3Rpb24oZC5kaXNwb3NlKTtcbiAgICB9O1xuICAgIERpc3Bvc2FibGUuX2ZpeHVwID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gRGlzcG9zYWJsZS5pc0Rpc3Bvc2FibGUocmVzdWx0KSA/IHJlc3VsdCA6IERpc3Bvc2FibGUuZW1wdHk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZGlzcG9zYWJsZSBvYmplY3QgdGhhdCBpbnZva2VzIHRoZSBzcGVjaWZpZWQgYWN0aW9uIHdoZW4gZGlzcG9zZWQuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcG9zZSBBY3Rpb24gdG8gcnVuIGR1cmluZyB0aGUgZmlyc3QgY2FsbCB0byBkaXNwb3NlLlxuICAgICAqIFRoZSBhY3Rpb24gaXMgZ3VhcmFudGVlZCB0byBiZSBydW4gYXQgbW9zdCBvbmNlLlxuICAgICAqIEByZXR1cm4ge0Rpc3Bvc2FibGV9IFRoZSBkaXNwb3NhYmxlIG9iamVjdCB0aGF0IHJ1bnMgdGhlIGdpdmVuIGFjdGlvbiB1cG9uIGRpc3Bvc2FsLlxuICAgICAqL1xuICAgIERpc3Bvc2FibGUuY3JlYXRlID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IERpc3Bvc2FibGUoYWN0aW9uKTtcbiAgICB9O1xuICAgIC8qKiBQZXJmb3JtcyB0aGUgdGFzayBvZiBjbGVhbmluZyB1cCByZXNvdXJjZXMuICovXG4gICAgRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBkaXNwb3NhYmxlIHRoYXQgZG9lcyBub3RoaW5nIHdoZW4gZGlzcG9zZWQuXG4gICAgICovXG4gICAgRGlzcG9zYWJsZS5lbXB0eSA9IHsgZGlzcG9zZTogbm9vcCB9O1xuICAgIHJldHVybiBEaXNwb3NhYmxlO1xufSgpKTtcbmV4cG9ydHMuRGlzcG9zYWJsZSA9IERpc3Bvc2FibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3V0aWxzL2Rpc3Bvc2FibGVzL0Rpc3Bvc2FibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLm5vb3ApO1xuICogLy8gPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vb3A7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbm9kZV9tb2R1bGVzL2xvZGFzaC9ub29wLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFJlcHJlc2VudHMgYSBkaXNwb3NhYmxlIHJlc291cmNlIHdob3NlIHVuZGVybHlpbmcgZGlzcG9zYWJsZSByZXNvdXJjZSBjYW5cbiAqIGJlIHJlcGxhY2VkIGJ5IGFub3RoZXIgZGlzcG9zYWJsZSByZXNvdXJjZSwgY2F1c2luZyBhdXRvbWF0aWMgZGlzcG9zYWwgb2ZcbiAqIHRoZSBwcmV2aW91cyB1bmRlcmx5aW5nIGRpc3Bvc2FibGUgcmVzb3VyY2UuXG4gKi9cbnZhciBTZXJpYWxEaXNwb3NhYmxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlcmlhbERpc3Bvc2FibGUoKSB7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB1bmRlcmx5aW5nIGRpc3Bvc2FibGUuXG4gICAgICogQHJldHVybnMge0FueX0gdGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZS5cbiAgICAgKi9cbiAgICBTZXJpYWxEaXNwb3NhYmxlLnByb3RvdHlwZS5nZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICAgIH07XG4gICAgU2VyaWFsRGlzcG9zYWJsZS5wcm90b3R5cGUuc2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc2hvdWxkRGlzcG9zZSA9IHRoaXMuaXNEaXNwb3NlZDtcbiAgICAgICAgaWYgKCFzaG91bGREaXNwb3NlKSB7XG4gICAgICAgICAgICB2YXIgb2xkID0gdGhpcy5jdXJyZW50O1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAob2xkKSB7XG4gICAgICAgICAgICAgICAgb2xkLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkRGlzcG9zZSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogUGVyZm9ybXMgdGhlIHRhc2sgb2YgY2xlYW5pbmcgdXAgcmVzb3VyY2VzLiAqL1xuICAgIFNlcmlhbERpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZCA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChvbGQpIHtcbiAgICAgICAgICAgICAgICBvbGQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2VyaWFsRGlzcG9zYWJsZTtcbn0oKSk7XG5leHBvcnRzLlNlcmlhbERpc3Bvc2FibGUgPSBTZXJpYWxEaXNwb3NhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kL2xpYi91dGlscy9kaXNwb3NhYmxlcy9TZXJpYWxEaXNwb3NhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFJlcHJlc2VudHMgYSBncm91cCBvZiBkaXNwb3NhYmxlIHJlc291cmNlcyB0aGF0IGFyZSBkaXNwb3NlZCB0b2dldGhlci5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgQ29tcG9zaXRlRGlzcG9zYWJsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb21wb3NpdGVEaXNwb3NhYmxlKCkge1xuICAgICAgICB2YXIgZGlzcG9zYWJsZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGRpc3Bvc2FibGVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzcG9zYWJsZXMgPSBkaXNwb3NhYmxlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGRpc3Bvc2FibGUgdG8gdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUgb3IgZGlzcG9zZXMgdGhlIGRpc3Bvc2FibGUgaWYgdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUgaXMgZGlzcG9zZWQuXG4gICAgICogQHBhcmFtIHtBbnl9IGl0ZW0gRGlzcG9zYWJsZSB0byBhZGQuXG4gICAgICovXG4gICAgQ29tcG9zaXRlRGlzcG9zYWJsZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgaXRlbS5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2FibGVzLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW5kIGRpc3Bvc2VzIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGEgZGlzcG9zYWJsZSBmcm9tIHRoZSBDb21wb3NpdGVEaXNwb3NhYmxlLlxuICAgICAqIEBwYXJhbSB7QW55fSBpdGVtIERpc3Bvc2FibGUgdG8gcmVtb3ZlLlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGZvdW5kOyBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgQ29tcG9zaXRlRGlzcG9zYWJsZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdmFyIHNob3VsZERpc3Bvc2UgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLmRpc3Bvc2FibGVzLmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHNob3VsZERpc3Bvc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zYWJsZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICAgICAgaXRlbS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNob3VsZERpc3Bvc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAgRGlzcG9zZXMgYWxsIGRpc3Bvc2FibGVzIGluIHRoZSBncm91cCBhbmQgcmVtb3ZlcyB0aGVtIGZyb20gdGhlIGdyb3VwIGJ1dFxuICAgICAqICBkb2VzIG5vdCBkaXNwb3NlIHRoZSBDb21wb3NpdGVEaXNwb3NhYmxlLlxuICAgICAqL1xuICAgIENvbXBvc2l0ZURpc3Bvc2FibGUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgdmFyIGxlbiA9IHRoaXMuZGlzcG9zYWJsZXMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnREaXNwb3NhYmxlcyA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnREaXNwb3NhYmxlc1tpXSA9IHRoaXMuZGlzcG9zYWJsZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2FibGVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudERpc3Bvc2FibGVzW2ldLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogIERpc3Bvc2VzIGFsbCBkaXNwb3NhYmxlcyBpbiB0aGUgZ3JvdXAgYW5kIHJlbW92ZXMgdGhlbSBmcm9tIHRoZSBncm91cC5cbiAgICAgKi9cbiAgICBDb21wb3NpdGVEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBsZW4gPSB0aGlzLmRpc3Bvc2FibGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RGlzcG9zYWJsZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGlzcG9zYWJsZXNbaV0gPSB0aGlzLmRpc3Bvc2FibGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kaXNwb3NhYmxlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnREaXNwb3NhYmxlc1tpXS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDb21wb3NpdGVEaXNwb3NhYmxlO1xufSgpKTtcbmV4cG9ydHMuQ29tcG9zaXRlRGlzcG9zYWJsZSA9IENvbXBvc2l0ZURpc3Bvc2FibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3V0aWxzL2Rpc3Bvc2FibGVzL0NvbXBvc2l0ZURpc3Bvc2FibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHJlZ2lzdGVyU291cmNlKHR5cGUsIHNvdXJjZSwgbWFuYWdlcikge1xuICAgIHZhciByZWdpc3RyeSA9IG1hbmFnZXIuZ2V0UmVnaXN0cnkoKTtcbiAgICB2YXIgc291cmNlSWQgPSByZWdpc3RyeS5hZGRTb3VyY2UodHlwZSwgc291cmNlKTtcbiAgICBmdW5jdGlvbiB1bnJlZ2lzdGVyU291cmNlKCkge1xuICAgICAgICByZWdpc3RyeS5yZW1vdmVTb3VyY2Uoc291cmNlSWQpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVySWQ6IHNvdXJjZUlkLFxuICAgICAgICB1bnJlZ2lzdGVyOiB1bnJlZ2lzdGVyU291cmNlLFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSByZWdpc3RlclNvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvcmVnaXN0ZXJTb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xudmFyIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xudmFyIEFMTE9XRURfU1BFQ19NRVRIT0RTID0gWydjYW5EcmFnJywgJ2JlZ2luRHJhZycsICdpc0RyYWdnaW5nJywgJ2VuZERyYWcnXTtcbnZhciBSRVFVSVJFRF9TUEVDX01FVEhPRFMgPSBbJ2JlZ2luRHJhZyddO1xuZnVuY3Rpb24gY3JlYXRlU291cmNlRmFjdG9yeShzcGVjKSB7XG4gICAgT2JqZWN0LmtleXMoc3BlYykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGludmFyaWFudChBTExPV0VEX1NQRUNfTUVUSE9EUy5pbmRleE9mKGtleSkgPiAtMSwgJ0V4cGVjdGVkIHRoZSBkcmFnIHNvdXJjZSBzcGVjaWZpY2F0aW9uIHRvIG9ubHkgaGF2ZSAnICtcbiAgICAgICAgICAgICdzb21lIG9mIHRoZSBmb2xsb3dpbmcga2V5czogJXMuICcgK1xuICAgICAgICAgICAgJ0luc3RlYWQgcmVjZWl2ZWQgYSBzcGVjaWZpY2F0aW9uIHdpdGggYW4gdW5leHBlY3RlZCBcIiVzXCIga2V5LiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBBTExPV0VEX1NQRUNfTUVUSE9EUy5qb2luKCcsICcpLCBrZXkpO1xuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHNwZWNba2V5XSA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkICVzIGluIHRoZSBkcmFnIHNvdXJjZSBzcGVjaWZpY2F0aW9uIHRvIGJlIGEgZnVuY3Rpb24uICcgK1xuICAgICAgICAgICAgJ0luc3RlYWQgcmVjZWl2ZWQgYSBzcGVjaWZpY2F0aW9uIHdpdGggJXM6ICVzLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBrZXksIGtleSwgc3BlY1trZXldKTtcbiAgICB9KTtcbiAgICBSRVFVSVJFRF9TUEVDX01FVEhPRFMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGludmFyaWFudCh0eXBlb2Ygc3BlY1trZXldID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgJXMgaW4gdGhlIGRyYWcgc291cmNlIHNwZWNpZmljYXRpb24gdG8gYmUgYSBmdW5jdGlvbi4gJyArXG4gICAgICAgICAgICAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCAlczogJXMuICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGtleSwga2V5LCBzcGVjW2tleV0pO1xuICAgIH0pO1xuICAgIHZhciBTb3VyY2VJbXBsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBTb3VyY2VJbXBsKG1vbml0b3IpIHtcbiAgICAgICAgICAgIHRoaXMubW9uaXRvciA9IG1vbml0b3I7XG4gICAgICAgICAgICB0aGlzLnByb3BzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucmVmID0gcmVhY3RfMS5jcmVhdGVSZWYoKTtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5EcmFnID0gdGhpcy5iZWdpbkRyYWcuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBTb3VyY2VJbXBsLnByb3RvdHlwZS5yZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgfTtcbiAgICAgICAgU291cmNlSW1wbC5wcm90b3R5cGUuY2FuRHJhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3BlYy5jYW5EcmFnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3BlYy5jYW5EcmFnKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvcik7XG4gICAgICAgIH07XG4gICAgICAgIFNvdXJjZUltcGwucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbiAoZ2xvYmFsTW9uaXRvciwgc291cmNlSWQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3BlYy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZUlkID09PSBnbG9iYWxNb25pdG9yLmdldFNvdXJjZUlkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3BlYy5pc0RyYWdnaW5nKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvcik7XG4gICAgICAgIH07XG4gICAgICAgIFNvdXJjZUltcGwucHJvdG90eXBlLmJlZ2luRHJhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpdGVtID0gc3BlYy5iZWdpbkRyYWcodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yLCB0aGlzLnJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaW52YXJpYW50KGlzUGxhaW5PYmplY3QoaXRlbSksICdiZWdpbkRyYWcoKSBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGRyYWdnZWQgaXRlbS4gJyArXG4gICAgICAgICAgICAgICAgICAgICdJbnN0ZWFkIHJlY2VpdmVkICVzLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH07XG4gICAgICAgIFNvdXJjZUltcGwucHJvdG90eXBlLmVuZERyYWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNwZWMuZW5kRHJhZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwZWMuZW5kRHJhZyh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IsIHRoaXMucmVmLmN1cnJlbnQpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gU291cmNlSW1wbDtcbiAgICB9KCkpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVTb3VyY2UobW9uaXRvcikge1xuICAgICAgICByZXR1cm4gbmV3IFNvdXJjZUltcGwobW9uaXRvcik7XG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVNvdXJjZUZhY3Rvcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVNvdXJjZUZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDE2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcbnZhciBpc0NhbGxpbmdDYW5EcmFnID0gZmFsc2U7XG52YXIgaXNDYWxsaW5nSXNEcmFnZ2luZyA9IGZhbHNlO1xudmFyIFNvdXJjZU1vbml0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU291cmNlTW9uaXRvcihtYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxNb25pdG9yID0gbWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgfVxuICAgIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLnJlY2VpdmVIYW5kbGVySWQgPSBmdW5jdGlvbiAoc291cmNlSWQpIHtcbiAgICAgICAgdGhpcy5zb3VyY2VJZCA9IHNvdXJjZUlkO1xuICAgIH07XG4gICAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuY2FuRHJhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW52YXJpYW50KCFpc0NhbGxpbmdDYW5EcmFnLCAnWW91IG1heSBub3QgY2FsbCBtb25pdG9yLmNhbkRyYWcoKSBpbnNpZGUgeW91ciBjYW5EcmFnKCkgaW1wbGVtZW50YXRpb24uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UtbW9uaXRvci5odG1sJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpc0NhbGxpbmdDYW5EcmFnID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5jYW5EcmFnU291cmNlKHRoaXMuc291cmNlSWQpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgaXNDYWxsaW5nQ2FuRHJhZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnZhcmlhbnQoIWlzQ2FsbGluZ0lzRHJhZ2dpbmcsICdZb3UgbWF5IG5vdCBjYWxsIG1vbml0b3IuaXNEcmFnZ2luZygpIGluc2lkZSB5b3VyIGlzRHJhZ2dpbmcoKSBpbXBsZW1lbnRhdGlvbi4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS1tb25pdG9yLmh0bWwnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlzQ2FsbGluZ0lzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmlzRHJhZ2dpbmdTb3VyY2UodGhpcy5zb3VyY2VJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBpc0NhbGxpbmdJc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLnN1YnNjcmliZVRvU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAobGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLnN1YnNjcmliZVRvU3RhdGVDaGFuZ2UobGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuaXNEcmFnZ2luZ1NvdXJjZSA9IGZ1bmN0aW9uIChzb3VyY2VJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuaXNEcmFnZ2luZ1NvdXJjZShzb3VyY2VJZCk7XG4gICAgfTtcbiAgICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5pc092ZXJUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0SWQsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmlzT3ZlclRhcmdldCh0YXJnZXRJZCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRUYXJnZXRJZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRUYXJnZXRJZHMoKTtcbiAgICB9O1xuICAgIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmlzU291cmNlUHVibGljID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuaXNTb3VyY2VQdWJsaWMoKTtcbiAgICB9O1xuICAgIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldFNvdXJjZUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0U291cmNlSWQoKTtcbiAgICB9O1xuICAgIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLnN1YnNjcmliZVRvT2Zmc2V0Q2hhbmdlID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5zdWJzY3JpYmVUb09mZnNldENoYW5nZShsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5jYW5EcmFnU291cmNlID0gZnVuY3Rpb24gKHNvdXJjZUlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5jYW5EcmFnU291cmNlKHNvdXJjZUlkKTtcbiAgICB9O1xuICAgIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmNhbkRyb3BPblRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuY2FuRHJvcE9uVGFyZ2V0KHRhcmdldElkKTtcbiAgICB9O1xuICAgIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldEl0ZW1UeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SXRlbVR5cGUoKTtcbiAgICB9O1xuICAgIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJdGVtKCk7XG4gICAgfTtcbiAgICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXREcm9wUmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xuICAgIH07XG4gICAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZGlkRHJvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmRpZERyb3AoKTtcbiAgICB9O1xuICAgIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldEluaXRpYWxDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCk7XG4gICAgfTtcbiAgICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpO1xuICAgIH07XG4gICAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gICAgfTtcbiAgICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRDbGllbnRPZmZzZXQoKTtcbiAgICB9O1xuICAgIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpO1xuICAgIH07XG4gICAgcmV0dXJuIFNvdXJjZU1vbml0b3I7XG59KCkpO1xuZnVuY3Rpb24gY3JlYXRlU291cmNlTW9uaXRvcihtYW5hZ2VyKSB7XG4gICAgcmV0dXJuIG5ldyBTb3VyY2VNb25pdG9yKG1hbmFnZXIpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlU291cmNlTW9uaXRvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlTW9uaXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHdyYXBDb25uZWN0b3JIb29rc18xID0gcmVxdWlyZShcIi4vd3JhcENvbm5lY3Rvckhvb2tzXCIpO1xudmFyIHNoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJ3NoYWxsb3dlcXVhbCcpO1xuZnVuY3Rpb24gY3JlYXRlU291cmNlQ29ubmVjdG9yKGJhY2tlbmQpIHtcbiAgICB2YXIgY3VycmVudEhhbmRsZXJJZDtcbiAgICB2YXIgY3VycmVudERyYWdTb3VyY2VOb2RlO1xuICAgIHZhciBjdXJyZW50RHJhZ1NvdXJjZU9wdGlvbnM7XG4gICAgdmFyIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZTtcbiAgICB2YXIgY3VycmVudERyYWdQcmV2aWV3Tm9kZTtcbiAgICB2YXIgY3VycmVudERyYWdQcmV2aWV3T3B0aW9ucztcbiAgICB2YXIgZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldztcbiAgICBmdW5jdGlvbiByZWNvbm5lY3REcmFnU291cmNlKCkge1xuICAgICAgICBpZiAoZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlKSB7XG4gICAgICAgICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdTb3VyY2UoKTtcbiAgICAgICAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEhhbmRsZXJJZCAmJiBjdXJyZW50RHJhZ1NvdXJjZU5vZGUpIHtcbiAgICAgICAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZSA9IGJhY2tlbmQuY29ubmVjdERyYWdTb3VyY2UoY3VycmVudEhhbmRsZXJJZCwgY3VycmVudERyYWdTb3VyY2VOb2RlLCBjdXJyZW50RHJhZ1NvdXJjZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlY29ubmVjdERyYWdQcmV2aWV3KCkge1xuICAgICAgICBpZiAoZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldykge1xuICAgICAgICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldygpO1xuICAgICAgICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEhhbmRsZXJJZCAmJiBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlKSB7XG4gICAgICAgICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdQcmV2aWV3ID0gYmFja2VuZC5jb25uZWN0RHJhZ1ByZXZpZXcoY3VycmVudEhhbmRsZXJJZCwgY3VycmVudERyYWdQcmV2aWV3Tm9kZSwgY3VycmVudERyYWdQcmV2aWV3T3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVjZWl2ZUhhbmRsZXJJZChoYW5kbGVySWQpIHtcbiAgICAgICAgaWYgKGhhbmRsZXJJZCA9PT0gY3VycmVudEhhbmRsZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRIYW5kbGVySWQgPSBoYW5kbGVySWQ7XG4gICAgICAgIHJlY29ubmVjdERyYWdTb3VyY2UoKTtcbiAgICAgICAgcmVjb25uZWN0RHJhZ1ByZXZpZXcoKTtcbiAgICB9XG4gICAgdmFyIGhvb2tzID0gd3JhcENvbm5lY3Rvckhvb2tzXzEuZGVmYXVsdCh7XG4gICAgICAgIGRyYWdTb3VyY2U6IGZ1bmN0aW9uIGNvbm5lY3REcmFnU291cmNlKG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChub2RlID09PSBjdXJyZW50RHJhZ1NvdXJjZU5vZGUgJiZcbiAgICAgICAgICAgICAgICBzaGFsbG93RXF1YWwob3B0aW9ucywgY3VycmVudERyYWdTb3VyY2VPcHRpb25zKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnREcmFnU291cmNlTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBjdXJyZW50RHJhZ1NvdXJjZU9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgcmVjb25uZWN0RHJhZ1NvdXJjZSgpO1xuICAgICAgICB9LFxuICAgICAgICBkcmFnUHJldmlldzogZnVuY3Rpb24gY29ubmVjdERyYWdQcmV2aWV3KG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChub2RlID09PSBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlICYmXG4gICAgICAgICAgICAgICAgc2hhbGxvd0VxdWFsKG9wdGlvbnMsIGN1cnJlbnREcmFnUHJldmlld09wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudERyYWdQcmV2aWV3Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgICBjdXJyZW50RHJhZ1ByZXZpZXdPcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIHJlY29ubmVjdERyYWdQcmV2aWV3KCk7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVjZWl2ZUhhbmRsZXJJZDogcmVjZWl2ZUhhbmRsZXJJZCxcbiAgICAgICAgaG9va3M6IGhvb2tzLFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVTb3VyY2VDb25uZWN0b3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVNvdXJjZUNvbm5lY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5mdW5jdGlvbiBjbG9uZVdpdGhSZWYoZWxlbWVudCwgbmV3UmVmKSB7XG4gICAgdmFyIHByZXZpb3VzUmVmID0gZWxlbWVudC5yZWY7XG4gICAgaW52YXJpYW50KHR5cGVvZiBwcmV2aW91c1JlZiAhPT0gJ3N0cmluZycsICdDYW5ub3QgY29ubmVjdCBSZWFjdCBEbkQgdG8gYW4gZWxlbWVudCB3aXRoIGFuIGV4aXN0aW5nIHN0cmluZyByZWYuICcgK1xuICAgICAgICAnUGxlYXNlIGNvbnZlcnQgaXQgdG8gdXNlIGEgY2FsbGJhY2sgcmVmIGluc3RlYWQsIG9yIHdyYXAgaXQgaW50byBhIDxzcGFuPiBvciA8ZGl2Pi4gJyArXG4gICAgICAgICdSZWFkIG1vcmU6IGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvbW9yZS1hYm91dC1yZWZzLmh0bWwjdGhlLXJlZi1jYWxsYmFjay1hdHRyaWJ1dGUnKTtcbiAgICBpZiAoIXByZXZpb3VzUmVmKSB7XG4gICAgICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gcmVmIG9uIHRoZSBlbGVtZW50LCB1c2UgdGhlIG5ldyByZWYgZGlyZWN0bHlcbiAgICAgICAgcmV0dXJuIHJlYWN0XzEuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgICAgICAgIHJlZjogbmV3UmVmLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlYWN0XzEuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgICAgcmVmOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgbmV3UmVmKG5vZGUpO1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzUmVmKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNSZWYobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBjbG9uZVdpdGhSZWY7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL3V0aWxzL2Nsb25lV2l0aFJlZi5qc1xuLy8gbW9kdWxlIGlkID0gMTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNoZWNrRGVjb3JhdG9yQXJndW1lbnRzXzEgPSByZXF1aXJlKFwiLi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50c1wiKTtcbnZhciBkZWNvcmF0ZUhhbmRsZXJfMSA9IHJlcXVpcmUoXCIuL2RlY29yYXRlSGFuZGxlclwiKTtcbnZhciByZWdpc3RlclRhcmdldF8xID0gcmVxdWlyZShcIi4vcmVnaXN0ZXJUYXJnZXRcIik7XG52YXIgY3JlYXRlVGFyZ2V0RmFjdG9yeV8xID0gcmVxdWlyZShcIi4vY3JlYXRlVGFyZ2V0RmFjdG9yeVwiKTtcbnZhciBjcmVhdGVUYXJnZXRNb25pdG9yXzEgPSByZXF1aXJlKFwiLi9jcmVhdGVUYXJnZXRNb25pdG9yXCIpO1xudmFyIGNyZWF0ZVRhcmdldENvbm5lY3Rvcl8xID0gcmVxdWlyZShcIi4vY3JlYXRlVGFyZ2V0Q29ubmVjdG9yXCIpO1xudmFyIGlzVmFsaWRUeXBlXzEgPSByZXF1aXJlKFwiLi91dGlscy9pc1ZhbGlkVHlwZVwiKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcbnZhciBpc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcbmZ1bmN0aW9uIERyb3BUYXJnZXQodHlwZSwgc3BlYywgY29sbGVjdCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgY2hlY2tEZWNvcmF0b3JBcmd1bWVudHNfMS5kZWZhdWx0KCdEcm9wVGFyZ2V0JywgJ3R5cGUsIHNwZWMsIGNvbGxlY3RbLCBvcHRpb25zXScsIHR5cGUsIHNwZWMsIGNvbGxlY3QsIG9wdGlvbnMpO1xuICAgIHZhciBnZXRUeXBlID0gdHlwZTtcbiAgICBpZiAodHlwZW9mIHR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaW52YXJpYW50KGlzVmFsaWRUeXBlXzEuZGVmYXVsdCh0eXBlLCB0cnVlKSwgJ0V4cGVjdGVkIFwidHlwZVwiIHByb3ZpZGVkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBEcm9wVGFyZ2V0IHRvIGJlICcgK1xuICAgICAgICAgICAgJ2Egc3RyaW5nLCBhbiBhcnJheSBvZiBzdHJpbmdzLCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIgZ2l2ZW4gJyArXG4gICAgICAgICAgICAndGhlIGN1cnJlbnQgcHJvcHMuIEluc3RlYWQsIHJlY2VpdmVkICVzLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCB0eXBlKTtcbiAgICAgICAgZ2V0VHlwZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGU7IH07XG4gICAgfVxuICAgIGludmFyaWFudChpc1BsYWluT2JqZWN0KHNwZWMpLCAnRXhwZWN0ZWQgXCJzcGVjXCIgcHJvdmlkZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byBEcm9wVGFyZ2V0IHRvIGJlICcgK1xuICAgICAgICAnYSBwbGFpbiBvYmplY3QuIEluc3RlYWQsIHJlY2VpdmVkICVzLiAnICtcbiAgICAgICAgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIHNwZWMpO1xuICAgIHZhciBjcmVhdGVUYXJnZXQgPSBjcmVhdGVUYXJnZXRGYWN0b3J5XzEuZGVmYXVsdChzcGVjKTtcbiAgICBpbnZhcmlhbnQodHlwZW9mIGNvbGxlY3QgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBcImNvbGxlY3RcIiBwcm92aWRlZCBhcyB0aGUgdGhpcmQgYXJndW1lbnQgdG8gRHJvcFRhcmdldCB0byBiZSAnICtcbiAgICAgICAgJ2EgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IG9mIHByb3BzIHRvIGluamVjdC4gJyArXG4gICAgICAgICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArXG4gICAgICAgICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBjb2xsZWN0KTtcbiAgICBpbnZhcmlhbnQoaXNQbGFpbk9iamVjdChvcHRpb25zKSwgJ0V4cGVjdGVkIFwib3B0aW9uc1wiIHByb3ZpZGVkIGFzIHRoZSBmb3VydGggYXJndW1lbnQgdG8gRHJvcFRhcmdldCB0byBiZSAnICtcbiAgICAgICAgJ2EgcGxhaW4gb2JqZWN0IHdoZW4gc3BlY2lmaWVkLiAnICtcbiAgICAgICAgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICtcbiAgICAgICAgJ1JlYWQgbW9yZTogaHR0cDovL3JlYWN0LWRuZC5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIGNvbGxlY3QpO1xuICAgIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0ZVRhcmdldChEZWNvcmF0ZWRDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGRlY29yYXRlSGFuZGxlcl8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgY29udGFpbmVyRGlzcGxheU5hbWU6ICdEcm9wVGFyZ2V0JyxcbiAgICAgICAgICAgIGNyZWF0ZUhhbmRsZXI6IGNyZWF0ZVRhcmdldCxcbiAgICAgICAgICAgIHJlZ2lzdGVySGFuZGxlcjogcmVnaXN0ZXJUYXJnZXRfMS5kZWZhdWx0LFxuICAgICAgICAgICAgY3JlYXRlTW9uaXRvcjogY3JlYXRlVGFyZ2V0TW9uaXRvcl8xLmRlZmF1bHQsXG4gICAgICAgICAgICBjcmVhdGVDb25uZWN0b3I6IGNyZWF0ZVRhcmdldENvbm5lY3Rvcl8xLmRlZmF1bHQsXG4gICAgICAgICAgICBEZWNvcmF0ZWRDb21wb25lbnQ6IERlY29yYXRlZENvbXBvbmVudCxcbiAgICAgICAgICAgIGdldFR5cGU6IGdldFR5cGUsXG4gICAgICAgICAgICBjb2xsZWN0OiBjb2xsZWN0LFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IERyb3BUYXJnZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL0Ryb3BUYXJnZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHJlZ2lzdGVyVGFyZ2V0KHR5cGUsIHRhcmdldCwgbWFuYWdlcikge1xuICAgIHZhciByZWdpc3RyeSA9IG1hbmFnZXIuZ2V0UmVnaXN0cnkoKTtcbiAgICB2YXIgdGFyZ2V0SWQgPSByZWdpc3RyeS5hZGRUYXJnZXQodHlwZSwgdGFyZ2V0KTtcbiAgICBmdW5jdGlvbiB1bnJlZ2lzdGVyVGFyZ2V0KCkge1xuICAgICAgICByZWdpc3RyeS5yZW1vdmVUYXJnZXQodGFyZ2V0SWQpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVySWQ6IHRhcmdldElkLFxuICAgICAgICB1bnJlZ2lzdGVyOiB1bnJlZ2lzdGVyVGFyZ2V0LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSByZWdpc3RlclRhcmdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC9saWIvcmVnaXN0ZXJUYXJnZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xudmFyIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xudmFyIEFMTE9XRURfU1BFQ19NRVRIT0RTID0gWydjYW5Ecm9wJywgJ2hvdmVyJywgJ2Ryb3AnXTtcbmZ1bmN0aW9uIGNyZWF0ZVRhcmdldEZhY3Rvcnkoc3BlYykge1xuICAgIE9iamVjdC5rZXlzKHNwZWMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpbnZhcmlhbnQoQUxMT1dFRF9TUEVDX01FVEhPRFMuaW5kZXhPZihrZXkpID4gLTEsICdFeHBlY3RlZCB0aGUgZHJvcCB0YXJnZXQgc3BlY2lmaWNhdGlvbiB0byBvbmx5IGhhdmUgJyArXG4gICAgICAgICAgICAnc29tZSBvZiB0aGUgZm9sbG93aW5nIGtleXM6ICVzLiAnICtcbiAgICAgICAgICAgICdJbnN0ZWFkIHJlY2VpdmVkIGEgc3BlY2lmaWNhdGlvbiB3aXRoIGFuIHVuZXhwZWN0ZWQgXCIlc1wiIGtleS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgQUxMT1dFRF9TUEVDX01FVEhPRFMuam9pbignLCAnKSwga2V5KTtcbiAgICAgICAgaW52YXJpYW50KHR5cGVvZiBzcGVjW2tleV0gPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCAlcyBpbiB0aGUgZHJvcCB0YXJnZXQgc3BlY2lmaWNhdGlvbiB0byBiZSBhIGZ1bmN0aW9uLiAnICtcbiAgICAgICAgICAgICdJbnN0ZWFkIHJlY2VpdmVkIGEgc3BlY2lmaWNhdGlvbiB3aXRoICVzOiAlcy4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywga2V5LCBrZXksIHNwZWNba2V5XSk7XG4gICAgfSk7XG4gICAgdmFyIFRhcmdldEltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFRhcmdldEltcGwobW9uaXRvcikge1xuICAgICAgICAgICAgdGhpcy5tb25pdG9yID0gbW9uaXRvcjtcbiAgICAgICAgICAgIHRoaXMucHJvcHMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5yZWYgPSByZWFjdF8xLmNyZWF0ZVJlZigpO1xuICAgICAgICB9XG4gICAgICAgIFRhcmdldEltcGwucHJvdG90eXBlLnJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB9O1xuICAgICAgICBUYXJnZXRJbXBsLnByb3RvdHlwZS5yZWNlaXZlTW9uaXRvciA9IGZ1bmN0aW9uIChtb25pdG9yKSB7XG4gICAgICAgICAgICB0aGlzLm1vbml0b3IgPSBtb25pdG9yO1xuICAgICAgICB9O1xuICAgICAgICBUYXJnZXRJbXBsLnByb3RvdHlwZS5jYW5Ecm9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFzcGVjLmNhbkRyb3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzcGVjLmNhbkRyb3AodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgVGFyZ2V0SW1wbC5wcm90b3R5cGUuaG92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXNwZWMuaG92ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGVjLmhvdmVyKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvciwgdGhpcy5yZWYuY3VycmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIFRhcmdldEltcGwucHJvdG90eXBlLmRyb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXNwZWMuZHJvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZHJvcFJlc3VsdCA9IHNwZWMuZHJvcCh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IsIHRoaXMucmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIGRyb3BSZXN1bHQgPT09ICd1bmRlZmluZWQnIHx8IGlzUGxhaW5PYmplY3QoZHJvcFJlc3VsdCksICdkcm9wKCkgbXVzdCBlaXRoZXIgcmV0dXJuIHVuZGVmaW5lZCwgb3IgYW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgZHJvcCByZXN1bHQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnSW5zdGVhZCByZWNlaXZlZCAlcy4gJyArXG4gICAgICAgICAgICAgICAgICAgICdSZWFkIG1vcmU6IGh0dHA6Ly9yZWFjdC1kbmQuZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBkcm9wUmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkcm9wUmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVGFyZ2V0SW1wbDtcbiAgICB9KCkpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVUYXJnZXQobW9uaXRvcikge1xuICAgICAgICByZXR1cm4gbmV3IFRhcmdldEltcGwobW9uaXRvcik7XG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVRhcmdldEZhY3Rvcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldEZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDE3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcbnZhciBpc0NhbGxpbmdDYW5Ecm9wID0gZmFsc2U7XG52YXIgVGFyZ2V0TW9uaXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUYXJnZXRNb25pdG9yKG1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbE1vbml0b3IgPSBtYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgICB9XG4gICAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUucmVjZWl2ZUhhbmRsZXJJZCA9IGZ1bmN0aW9uICh0YXJnZXRJZCkge1xuICAgICAgICB0aGlzLnRhcmdldElkID0gdGFyZ2V0SWQ7XG4gICAgfTtcbiAgICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5jYW5Ecm9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnZhcmlhbnQoIWlzQ2FsbGluZ0NhbkRyb3AsICdZb3UgbWF5IG5vdCBjYWxsIG1vbml0b3IuY2FuRHJvcCgpIGluc2lkZSB5b3VyIGNhbkRyb3AoKSBpbXBsZW1lbnRhdGlvbi4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlOiBodHRwOi8vcmVhY3QtZG5kLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC1tb25pdG9yLmh0bWwnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlzQ2FsbGluZ0NhbkRyb3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmNhbkRyb3BPblRhcmdldCh0aGlzLnRhcmdldElkKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlzQ2FsbGluZ0NhbkRyb3AgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuaXNPdmVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmlzT3ZlclRhcmdldCh0aGlzLnRhcmdldElkLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldEl0ZW1UeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SXRlbVR5cGUoKTtcbiAgICB9O1xuICAgIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJdGVtKCk7XG4gICAgfTtcbiAgICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXREcm9wUmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xuICAgIH07XG4gICAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZGlkRHJvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmRpZERyb3AoKTtcbiAgICB9O1xuICAgIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldEluaXRpYWxDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCk7XG4gICAgfTtcbiAgICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpO1xuICAgIH07XG4gICAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gICAgfTtcbiAgICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXRDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRDbGllbnRPZmZzZXQoKTtcbiAgICB9O1xuICAgIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpO1xuICAgIH07XG4gICAgcmV0dXJuIFRhcmdldE1vbml0b3I7XG59KCkpO1xuZXhwb3J0cy5UYXJnZXRNb25pdG9yID0gVGFyZ2V0TW9uaXRvcjtcbmZ1bmN0aW9uIGNyZWF0ZVRhcmdldE1vbml0b3IobWFuYWdlcikge1xuICAgIHJldHVybiBuZXcgVGFyZ2V0TW9uaXRvcihtYW5hZ2VyKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVRhcmdldE1vbml0b3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldE1vbml0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB3cmFwQ29ubmVjdG9ySG9va3NfMSA9IHJlcXVpcmUoXCIuL3dyYXBDb25uZWN0b3JIb29rc1wiKTtcbnZhciBzaGFsbG93RXF1YWwgPSByZXF1aXJlKCdzaGFsbG93ZXF1YWwnKTtcbmZ1bmN0aW9uIGNyZWF0ZVRhcmdldENvbm5lY3RvcihiYWNrZW5kKSB7XG4gICAgdmFyIGN1cnJlbnRIYW5kbGVySWQ7XG4gICAgdmFyIGN1cnJlbnREcm9wVGFyZ2V0Tm9kZTtcbiAgICB2YXIgY3VycmVudERyb3BUYXJnZXRPcHRpb25zO1xuICAgIHZhciBkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQ7XG4gICAgZnVuY3Rpb24gcmVjb25uZWN0RHJvcFRhcmdldCgpIHtcbiAgICAgICAgaWYgKGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCkge1xuICAgICAgICAgICAgZGlzY29ubmVjdEN1cnJlbnREcm9wVGFyZ2V0KCk7XG4gICAgICAgICAgICBkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRIYW5kbGVySWQgJiYgY3VycmVudERyb3BUYXJnZXROb2RlKSB7XG4gICAgICAgICAgICBkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQgPSBiYWNrZW5kLmNvbm5lY3REcm9wVGFyZ2V0KGN1cnJlbnRIYW5kbGVySWQsIGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSwgY3VycmVudERyb3BUYXJnZXRPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZWNlaXZlSGFuZGxlcklkKGhhbmRsZXJJZCkge1xuICAgICAgICBpZiAoaGFuZGxlcklkID09PSBjdXJyZW50SGFuZGxlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEhhbmRsZXJJZCA9IGhhbmRsZXJJZDtcbiAgICAgICAgcmVjb25uZWN0RHJvcFRhcmdldCgpO1xuICAgIH1cbiAgICB2YXIgaG9va3MgPSB3cmFwQ29ubmVjdG9ySG9va3NfMS5kZWZhdWx0KHtcbiAgICAgICAgZHJvcFRhcmdldDogZnVuY3Rpb24gY29ubmVjdERyb3BUYXJnZXQobm9kZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG5vZGUgPT09IGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSAmJlxuICAgICAgICAgICAgICAgIHNoYWxsb3dFcXVhbChvcHRpb25zLCBjdXJyZW50RHJvcFRhcmdldE9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudERyb3BUYXJnZXROb2RlID0gbm9kZTtcbiAgICAgICAgICAgIGN1cnJlbnREcm9wVGFyZ2V0T3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICByZWNvbm5lY3REcm9wVGFyZ2V0KCk7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVjZWl2ZUhhbmRsZXJJZDogcmVjZWl2ZUhhbmRsZXJJZCxcbiAgICAgICAgaG9va3M6IGhvb2tzLFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUYXJnZXRDb25uZWN0b3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldENvbm5lY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUb3VjaEJhY2tlbmQ7XG5leHBvcnRzLlRvdWNoQmFja2VuZCA9IHZvaWQgMDtcblxudmFyIF9pbnZhcmlhbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJpbnZhcmlhbnRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gZ2V0RXZlbnRDbGllbnRUb3VjaE9mZnNldChlKSB7XG4gIGlmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGdldEV2ZW50Q2xpZW50T2Zmc2V0KGUudGFyZ2V0VG91Y2hlc1swXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZSkge1xuICBpZiAoZS50YXJnZXRUb3VjaGVzKSB7XG4gICAgcmV0dXJuIGdldEV2ZW50Q2xpZW50VG91Y2hPZmZzZXQoZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgIHk6IGUuY2xpZW50WVxuICAgIH07XG4gIH1cbn0gLy8gVXNlZCBmb3IgTW91c2VFdmVudC5idXR0b25zIChub3RlIHRoZSBzIG9uIHRoZSBlbmQpLlxuXG5cbnZhciBNb3VzZUJ1dHRvbnMgPSB7XG4gIExlZnQ6IDEsXG4gIFJpZ2h0OiAyLFxuICBDZW50ZXI6IDQgLy8gVXNlZCBmb3IgZS5idXR0b24gKG5vdGUgdGhlIGxhY2sgb2YgYW4gcyBvbiB0aGUgZW5kKS5cblxufTtcbnZhciBNb3VzZUJ1dHRvbiA9IHtcbiAgTGVmdDogMCxcbiAgQ2VudGVyOiAxLFxuICBSaWdodDogMlxuICAvKipcbiAgICogT25seSB0b3VjaCBldmVudHMgYW5kIG1vdXNlIGV2ZW50cyB3aGVyZSB0aGUgbGVmdCBidXR0b24gaXMgcHJlc3NlZCBzaG91bGQgaW5pdGlhdGUgYSBkcmFnLlxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnQgfCBUb3VjaEV2ZW50fSBlIFRoZSBldmVudFxuICAgKi9cblxufTtcblxuZnVuY3Rpb24gZXZlbnRTaG91bGRTdGFydERyYWcoZSkge1xuICAvLyBGb3IgdG91Y2ggZXZlbnRzLCBidXR0b24gd2lsbCBiZSB1bmRlZmluZWQuIElmIGUuYnV0dG9uIGlzIGRlZmluZWQsXG4gIC8vIHRoZW4gaXQgc2hvdWxkIGJlIE1vdXNlQnV0dG9uLkxlZnQuXG4gIHJldHVybiBlLmJ1dHRvbiA9PT0gdW5kZWZpbmVkIHx8IGUuYnV0dG9uID09PSBNb3VzZUJ1dHRvbi5MZWZ0O1xufVxuLyoqXG4gKiBPbmx5IHRvdWNoIGV2ZW50cyBhbmQgbW91c2UgZXZlbnRzIHdoZXJlIHRoZSBsZWZ0IG1vdXNlIGJ1dHRvbiBpcyBubyBsb25nZXIgaGVsZCBzaG91bGQgZW5kIGEgZHJhZy5cbiAqIEl0J3MgcG9zc2libGUgdGhlIHVzZXIgbW91c2UgZG93bnMgd2l0aCB0aGUgbGVmdCBtb3VzZSBidXR0b24sIHRoZW4gbW91c2UgZG93biBhbmQgdXBzIHdpdGggdGhlIHJpZ2h0IG1vdXNlIGJ1dHRvbi5cbiAqIFdlIGRvbid0IHdhbnQgcmVsZWFzaW5nIHRoZSByaWdodCBtb3VzZSBidXR0b24gdG8gZW5kIHRoZSBkcmFnLlxuICogQHBhcmFtIHtNb3VzZUV2ZW50IHwgVG91Y2hFdmVudH0gZSBUaGUgZXZlbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIGV2ZW50U2hvdWxkRW5kRHJhZyhlKSB7XG4gIC8vIFRvdWNoIGV2ZW50cyB3aWxsIGhhdmUgYnV0dG9ucyBiZSB1bmRlZmluZWQsIHdoaWxlIG1vdXNlIGV2ZW50cyB3aWxsIGhhdmUgZS5idXR0b25zJ3MgbGVmdCBidXR0b25cbiAgLy8gYml0IGZpZWxkIHVuc2V0IGlmIHRoZSBsZWZ0IG1vdXNlIGJ1dHRvbiBoYXMgYmVlbiByZWxlYXNlZFxuICByZXR1cm4gZS5idXR0b25zID09PSB1bmRlZmluZWQgfHwgKGUuYnV0dG9ucyAmIE1vdXNlQnV0dG9ucy5MZWZ0KSA9PT0gMDtcbn0gLy8gUG9seWZpbGwgZm9yIGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50XG5cblxudmFyIGVsZW1lbnRzRnJvbVBvaW50ID0gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQgfHwgZnVuY3Rpb24gKHgsIHkpIHtcbiAgaWYgKGRvY3VtZW50Lm1zRWxlbWVudHNGcm9tUG9pbnQpIHtcbiAgICAvLyBtc0VsZW1lbnRzRnJvbVBvaW50IGlzIG11Y2ggZmFzdGVyIGJ1dCByZXR1cm5zIGEgbm9kZS1saXN0LCBzbyBjb252ZXJ0IGl0IHRvIGFuIGFycmF5XG4gICAgdmFyIG1zRWxlbWVudHMgPSBkb2N1bWVudC5tc0VsZW1lbnRzRnJvbVBvaW50KHgsIHkpO1xuICAgIHJldHVybiBtc0VsZW1lbnRzICYmIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG1zRWxlbWVudHMsIDApO1xuICB9XG5cbiAgdmFyIGVsZW1lbnRzID0gW10sXG4gICAgICBwcmV2aW91c1BvaW50ZXJFdmVudHMgPSBbXSxcbiAgICAgIGN1cnJlbnQsXG4gICAgICBpLFxuICAgICAgZDsgLy8gZ2V0IGFsbCBlbGVtZW50cyB2aWEgZWxlbWVudEZyb21Qb2ludCwgYW5kIHJlbW92ZSB0aGVtIGZyb20gaGl0LXRlc3RpbmcgaW4gb3JkZXJcblxuICB3aGlsZSAoKGN1cnJlbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpKSAmJiBlbGVtZW50cy5pbmRleE9mKGN1cnJlbnQpID09PSAtMSAmJiBjdXJyZW50ICE9PSBudWxsKSB7XG4gICAgLy8gcHVzaCB0aGUgZWxlbWVudCBhbmQgaXRzIGN1cnJlbnQgc3R5bGVcbiAgICBlbGVtZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgIHByZXZpb3VzUG9pbnRlckV2ZW50cy5wdXNoKHtcbiAgICAgIHZhbHVlOiBjdXJyZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BvaW50ZXItZXZlbnRzJyksXG4gICAgICBwcmlvcml0eTogY3VycmVudC5zdHlsZS5nZXRQcm9wZXJ0eVByaW9yaXR5KCdwb2ludGVyLWV2ZW50cycpXG4gICAgfSk7IC8vIGFkZCBcInBvaW50ZXItZXZlbnRzOiBub25lXCIsIHRvIGdldCB0byB0aGUgdW5kZXJseWluZyBlbGVtZW50XG5cbiAgICBjdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KCdwb2ludGVyLWV2ZW50cycsICdub25lJywgJ2ltcG9ydGFudCcpO1xuICB9IC8vIHJlc3RvcmUgdGhlIHByZXZpb3VzIHBvaW50ZXItZXZlbnRzIHZhbHVlc1xuXG5cbiAgZm9yIChpID0gcHJldmlvdXNQb2ludGVyRXZlbnRzLmxlbmd0aDsgZCA9IHByZXZpb3VzUG9pbnRlckV2ZW50c1stLWldOykge1xuICAgIGVsZW1lbnRzW2ldLnN0eWxlLnNldFByb3BlcnR5KCdwb2ludGVyLWV2ZW50cycsIGQudmFsdWUgPyBkLnZhbHVlIDogJycsIGQucHJpb3JpdHkpO1xuICB9IC8vIHJldHVybiBvdXIgcmVzdWx0c1xuXG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufSkuYmluZCh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiBudWxsKTtcblxudmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gc2ltdWxhciB0byBqUXVlcnkncyB0ZXN0XG4gIHZhciBzdXBwb3J0ZWQgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHN1cHBvcnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSkpO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHJldHVybiBzdXBwb3J0ZWQ7XG59KCk7XG5cbnZhciBFTEVNRU5UX05PREUgPSAxO1xuXG5mdW5jdGlvbiBnZXROb2RlQ2xpZW50T2Zmc2V0KG5vZGUpIHtcbiAgdmFyIGVsID0gbm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFID8gbm9kZSA6IG5vZGUucGFyZW50RWxlbWVudDtcblxuICBpZiAoIWVsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgX2VsJGdldEJvdW5kaW5nQ2xpZW50ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICB0b3AgPSBfZWwkZ2V0Qm91bmRpbmdDbGllbnQudG9wLFxuICAgICAgbGVmdCA9IF9lbCRnZXRCb3VuZGluZ0NsaWVudC5sZWZ0O1xuXG4gIHJldHVybiB7XG4gICAgeDogbGVmdCxcbiAgICB5OiB0b3BcbiAgfTtcbn1cblxudmFyIGV2ZW50TmFtZXMgPSB7XG4gIG1vdXNlOiB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGVuZDogJ21vdXNldXAnLFxuICAgIGNvbnRleHRtZW51OiAnY29udGV4dG1lbnUnXG4gIH0sXG4gIHRvdWNoOiB7XG4gICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICBlbmQ6ICd0b3VjaGVuZCdcbiAgfSxcbiAga2V5Ym9hcmQ6IHtcbiAgICBrZXlkb3duOiAna2V5ZG93bidcbiAgfVxufTtcblxudmFyIFRvdWNoQmFja2VuZCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRvdWNoQmFja2VuZChtYW5hZ2VyKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvdWNoQmFja2VuZCk7XG5cbiAgICBvcHRpb25zLmRlbGF5VG91Y2hTdGFydCA9IG9wdGlvbnMuZGVsYXlUb3VjaFN0YXJ0IHx8IG9wdGlvbnMuZGVsYXk7XG4gICAgb3B0aW9ucyA9IF9vYmplY3RTcHJlYWQoe1xuICAgICAgZW5hYmxlVG91Y2hFdmVudHM6IHRydWUsXG4gICAgICBlbmFibGVNb3VzZUV2ZW50czogZmFsc2UsXG4gICAgICBlbmFibGVLZXlib2FyZEV2ZW50czogZmFsc2UsXG4gICAgICBpZ25vcmVDb250ZXh0TWVudTogZmFsc2UsXG4gICAgICBkZWxheVRvdWNoU3RhcnQ6IDAsXG4gICAgICBkZWxheU1vdXNlU3RhcnQ6IDAsXG4gICAgICB0b3VjaFNsb3A6IDAsXG4gICAgICBzY3JvbGxBbmdsZVJhbmdlczogdW5kZWZpbmVkXG4gICAgfSwgb3B0aW9ucyk7XG4gICAgdGhpcy5hY3Rpb25zID0gbWFuYWdlci5nZXRBY3Rpb25zKCk7XG4gICAgdGhpcy5tb25pdG9yID0gbWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgdGhpcy5yZWdpc3RyeSA9IG1hbmFnZXIuZ2V0UmVnaXN0cnkoKTtcbiAgICB0aGlzLmVuYWJsZUtleWJvYXJkRXZlbnRzID0gb3B0aW9ucy5lbmFibGVLZXlib2FyZEV2ZW50cztcbiAgICB0aGlzLmVuYWJsZU1vdXNlRXZlbnRzID0gb3B0aW9ucy5lbmFibGVNb3VzZUV2ZW50cztcbiAgICB0aGlzLmRlbGF5VG91Y2hTdGFydCA9IG9wdGlvbnMuZGVsYXlUb3VjaFN0YXJ0O1xuICAgIHRoaXMuZGVsYXlNb3VzZVN0YXJ0ID0gb3B0aW9ucy5kZWxheU1vdXNlU3RhcnQ7XG4gICAgdGhpcy5pZ25vcmVDb250ZXh0TWVudSA9IG9wdGlvbnMuaWdub3JlQ29udGV4dE1lbnU7XG4gICAgdGhpcy50b3VjaFNsb3AgPSBvcHRpb25zLnRvdWNoU2xvcDtcbiAgICB0aGlzLnNjcm9sbEFuZ2xlUmFuZ2VzID0gb3B0aW9ucy5zY3JvbGxBbmdsZVJhbmdlcztcbiAgICB0aGlzLnNvdXJjZU5vZGVzID0ge307XG4gICAgdGhpcy5zb3VyY2VOb2RlT3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuc291cmNlUHJldmlld05vZGVzID0ge307XG4gICAgdGhpcy5zb3VyY2VQcmV2aWV3Tm9kZU9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLnRhcmdldE5vZGVzID0ge307XG4gICAgdGhpcy50YXJnZXROb2RlT3B0aW9ucyA9IHt9O1xuICAgIHRoaXMubGlzdGVuZXJUeXBlcyA9IFtdO1xuICAgIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0ID0ge307XG4gICAgdGhpcy5faXNTY3JvbGxpbmcgPSBmYWxzZTtcblxuICAgIGlmIChvcHRpb25zLmVuYWJsZU1vdXNlRXZlbnRzKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyVHlwZXMucHVzaCgnbW91c2UnKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5lbmFibGVUb3VjaEV2ZW50cykge1xuICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLnB1c2goJ3RvdWNoJyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZW5hYmxlS2V5Ym9hcmRFdmVudHMpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJUeXBlcy5wdXNoKCdrZXlib2FyZCcpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmdldERyb3BUYXJnZXRFbGVtZW50c0F0UG9pbnQpIHtcbiAgICAgIHRoaXMuZ2V0RHJvcFRhcmdldEVsZW1lbnRzQXRQb2ludCA9IG9wdGlvbnMuZ2V0RHJvcFRhcmdldEVsZW1lbnRzQXRQb2ludDtcbiAgICB9XG5cbiAgICB0aGlzLmdldFNvdXJjZUNsaWVudE9mZnNldCA9IHRoaXMuZ2V0U291cmNlQ2xpZW50T2Zmc2V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQgPSB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXkgPSB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydERlbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlID0gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVUb3BNb3ZlQ2FwdHVyZSA9IHRoaXMuaGFuZGxlVG9wTW92ZUNhcHR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVRvcE1vdmUgPSB0aGlzLmhhbmRsZVRvcE1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlID0gdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2FuY2VsT25Fc2NhcGUgPSB0aGlzLmhhbmRsZUNhbmNlbE9uRXNjYXBlLmJpbmQodGhpcyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVG91Y2hCYWNrZW5kLCBbe1xuICAgIGtleTogXCJzZXR1cFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICgwLCBfaW52YXJpYW50LmRlZmF1bHQpKCF0aGlzLmNvbnN0cnVjdG9yLmlzU2V0VXAsICdDYW5ub3QgaGF2ZSB0d28gVG91Y2ggYmFja2VuZHMgYXQgdGhlIHNhbWUgdGltZS4nKTtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuaXNTZXRVcCA9IHRydWU7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnc3RhcnQnLCB0aGlzLmdldFRvcE1vdmVTdGFydEhhbmRsZXIoKSk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnc3RhcnQnLCB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUsIHRydWUpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ21vdmUnLCB0aGlzLmhhbmRsZVRvcE1vdmUpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ21vdmUnLCB0aGlzLmhhbmRsZVRvcE1vdmVDYXB0dXJlLCB0cnVlKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdlbmQnLCB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlLCB0cnVlKTtcblxuICAgICAgaWYgKHRoaXMuZW5hYmxlTW91c2VFdmVudHMgJiYgIXRoaXMuaWdub3JlQ29udGV4dE1lbnUpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2NvbnRleHRtZW51JywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVuYWJsZUtleWJvYXJkRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdrZXlkb3duJywgdGhpcy5oYW5kbGVDYW5jZWxPbkVzY2FwZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRlYXJkb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRlYXJkb3duKCkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5pc1NldFVwID0gZmFsc2U7XG4gICAgICB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCA9IHt9O1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3N0YXJ0JywgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlLCB0cnVlKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdzdGFydCcsIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0KTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdtb3ZlJywgdGhpcy5oYW5kbGVUb3BNb3ZlQ2FwdHVyZSwgdHJ1ZSk7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnbW92ZScsIHRoaXMuaGFuZGxlVG9wTW92ZSk7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnZW5kJywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSwgdHJ1ZSk7XG5cbiAgICAgIGlmICh0aGlzLmVuYWJsZU1vdXNlRXZlbnRzICYmICF0aGlzLmlnbm9yZUNvbnRleHRNZW51KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdjb250ZXh0bWVudScsIHRoaXMuaGFuZGxlVG9wTW92ZUVuZENhcHR1cmUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbmFibGVLZXlib2FyZEV2ZW50cykge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAna2V5ZG93bicsIHRoaXMuaGFuZGxlQ2FuY2VsT25Fc2NhcGUsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkRXZlbnRMaXN0ZW5lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHN1YmplY3QsIGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZSA/IHtcbiAgICAgICAgY2FwdHVyZTogY2FwdHVyZSxcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0gOiBjYXB0dXJlO1xuICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyVHlwZSkge1xuICAgICAgICB2YXIgZXZ0ID0gZXZlbnROYW1lc1tsaXN0ZW5lclR5cGVdW2V2ZW50XTtcblxuICAgICAgICBpZiAoZXZ0KSB7XG4gICAgICAgICAgc3ViamVjdC5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoc3ViamVjdCwgZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gc3VwcG9ydHNQYXNzaXZlID8ge1xuICAgICAgICBjYXB0dXJlOiBjYXB0dXJlLFxuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSA6IGNhcHR1cmU7XG4gICAgICB0aGlzLmxpc3RlbmVyVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXJUeXBlKSB7XG4gICAgICAgIHZhciBldnQgPSBldmVudE5hbWVzW2xpc3RlbmVyVHlwZV1bZXZlbnRdO1xuXG4gICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICBzdWJqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbm5lY3REcmFnU291cmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3REcmFnU291cmNlKHNvdXJjZUlkLCBub2RlLCBvcHRpb25zKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgaGFuZGxlTW92ZVN0YXJ0ID0gdGhpcy5oYW5kbGVNb3ZlU3RhcnQuYmluZCh0aGlzLCBzb3VyY2VJZCk7XG4gICAgICB0aGlzLnNvdXJjZU5vZGVzW3NvdXJjZUlkXSA9IG5vZGU7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIobm9kZSwgJ3N0YXJ0JywgaGFuZGxlTW92ZVN0YXJ0KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZSBfdGhpcy5zb3VyY2VOb2Rlc1tzb3VyY2VJZF07XG5cbiAgICAgICAgX3RoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCAnc3RhcnQnLCBoYW5kbGVNb3ZlU3RhcnQpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29ubmVjdERyYWdQcmV2aWV3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3REcmFnUHJldmlldyhzb3VyY2VJZCwgbm9kZSwgb3B0aW9ucykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVPcHRpb25zW3NvdXJjZUlkXSA9IG9wdGlvbnM7XG4gICAgICB0aGlzLnNvdXJjZVByZXZpZXdOb2Rlc1tzb3VyY2VJZF0gPSBub2RlO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIF90aGlzMi5zb3VyY2VQcmV2aWV3Tm9kZXNbc291cmNlSWRdO1xuICAgICAgICBkZWxldGUgX3RoaXMyLnNvdXJjZVByZXZpZXdOb2RlT3B0aW9uc1tzb3VyY2VJZF07XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb25uZWN0RHJvcFRhcmdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0RHJvcFRhcmdldCh0YXJnZXRJZCwgbm9kZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBoYW5kbGVNb3ZlID0gZnVuY3Rpb24gaGFuZGxlTW92ZShlKSB7XG4gICAgICAgIHZhciBjb29yZHM7XG5cbiAgICAgICAgaWYgKCFfdGhpczMubW9uaXRvci5pc0RyYWdnaW5nKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdyYWIgdGhlIGNvb3JkaW5hdGVzIGZvciB0aGUgY3VycmVudCBtb3VzZS90b3VjaCBwb3NpdGlvblxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSBldmVudE5hbWVzLm1vdXNlLm1vdmU6XG4gICAgICAgICAgICBjb29yZHMgPSB7XG4gICAgICAgICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgICAgICAgeTogZS5jbGllbnRZXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIGV2ZW50TmFtZXMudG91Y2gubW92ZTpcbiAgICAgICAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgICAgICAgeDogZS50b3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICAgIHk6IGUudG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVzZSB0aGUgY29vcmRpbmF0ZXMgdG8gZ3JhYiB0aGUgZWxlbWVudCB0aGUgZHJhZyBlbmRlZCBvbi5cbiAgICAgICAgICogSWYgdGhlIGVsZW1lbnQgaXMgdGhlIHNhbWUgYXMgdGhlIHRhcmdldCBub2RlIChvciBhbnkgb2YgaXQncyBjaGlsZHJlbikgdGhlbiB3ZSBoYXZlIGhpdCBhIGRyb3AgdGFyZ2V0IGFuZCBjYW4gaGFuZGxlIHRoZSBtb3ZlLlxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHZhciBkcm9wcGVkT24gPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGNvb3Jkcy54LCBjb29yZHMueSk7XG4gICAgICAgIHZhciBjaGlsZE1hdGNoID0gbm9kZS5jb250YWlucyhkcm9wcGVkT24pO1xuXG4gICAgICAgIGlmIChkcm9wcGVkT24gPT09IG5vZGUgfHwgY2hpbGRNYXRjaCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuaGFuZGxlTW92ZShlLCB0YXJnZXRJZCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIEF0dGFjaGluZyB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGJvZHkgc28gdGhhdCB0b3VjaG1vdmUgd2lsbCB3b3JrIHdoaWxlIGRyYWdnaW5nIG92ZXIgbXVsdGlwbGUgdGFyZ2V0IGVsZW1lbnRzLlxuICAgICAgICovXG5cblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ21vdmUnLCBoYW5kbGVNb3ZlKTtcbiAgICAgIHRoaXMudGFyZ2V0Tm9kZXNbdGFyZ2V0SWRdID0gbm9kZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZSBfdGhpczMudGFyZ2V0Tm9kZXNbdGFyZ2V0SWRdO1xuXG4gICAgICAgIF90aGlzMy5yZW1vdmVFdmVudExpc3RlbmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ21vdmUnLCBoYW5kbGVNb3ZlKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNvdXJjZUNsaWVudE9mZnNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb3VyY2VDbGllbnRPZmZzZXQoc291cmNlSWQpIHtcbiAgICAgIHJldHVybiBnZXROb2RlQ2xpZW50T2Zmc2V0KHRoaXMuc291cmNlTm9kZXNbc291cmNlSWRdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlVG9wTW92ZVN0YXJ0Q2FwdHVyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlKGUpIHtcbiAgICAgIGlmICghZXZlbnRTaG91bGRTdGFydERyYWcoZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1vdmVTdGFydFNvdXJjZUlkcyA9IFtdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNb3ZlU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW92ZVN0YXJ0KHNvdXJjZUlkKSB7XG4gICAgICAvLyBKdXN0IGJlY2F1c2Ugd2UgcmVjZWl2ZWQgYW4gZXZlbnQgZG9lc24ndCBuZWNlc3NhcmlseSBtZWFuIHdlIG5lZWQgdG8gY29sbGVjdCBkcmFnIHNvdXJjZXMuXG4gICAgICAvLyBXZSBvbmx5IGNvbGxlY3Qgc3RhcnQgY29sbGVjdGluZyBkcmFnIHNvdXJjZXMgb24gdG91Y2ggYW5kIGxlZnQgbW91c2UgZXZlbnRzLlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMpKSB7XG4gICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzLnVuc2hpZnQoc291cmNlSWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRUb3BNb3ZlU3RhcnRIYW5kbGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRvcE1vdmVTdGFydEhhbmRsZXIoKSB7XG4gICAgICBpZiAoIXRoaXMuZGVsYXlUb3VjaFN0YXJ0ICYmICF0aGlzLmRlbGF5TW91c2VTdGFydCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydERlbGF5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVUb3BNb3ZlU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG9wTW92ZVN0YXJ0KGUpIHtcbiAgICAgIGlmICghZXZlbnRTaG91bGRTdGFydERyYWcoZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBEb24ndCBwcmVtYXR1cmVseSBwcmV2ZW50RGVmYXVsdCgpIGhlcmUgc2luY2UgaXQgbWlnaHQ6XG4gICAgICAvLyAxLiBNZXNzIHVwIHNjcm9sbGluZ1xuICAgICAgLy8gMi4gTWVzcyB1cCBsb25nIHRhcCAod2hpY2ggYnJpbmdzIHVwIGNvbnRleHQgbWVudSlcbiAgICAgIC8vIDMuIElmIHRoZXJlJ3MgYW4gYW5jaG9yIGxpbmsgYXMgYSBjaGlsZCwgdGFwIHdvbid0IGJlIHRyaWdnZXJlZCBvbiBsaW5rXG5cblxuICAgICAgdmFyIGNsaWVudE9mZnNldCA9IGdldEV2ZW50Q2xpZW50T2Zmc2V0KGUpO1xuXG4gICAgICBpZiAoY2xpZW50T2Zmc2V0KSB7XG4gICAgICAgIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0ID0gY2xpZW50T2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLndhaXRpbmdGb3JEZWxheSA9IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVUb3BNb3ZlU3RhcnREZWxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlU3RhcnREZWxheShlKSB7XG4gICAgICBpZiAoIWV2ZW50U2hvdWxkU3RhcnREcmFnKGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGRlbGF5ID0gZS50eXBlID09PSBldmVudE5hbWVzLnRvdWNoLnN0YXJ0ID8gdGhpcy5kZWxheVRvdWNoU3RhcnQgOiB0aGlzLmRlbGF5TW91c2VTdGFydDtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQuYmluZCh0aGlzLCBlKSwgZGVsYXkpO1xuICAgICAgdGhpcy53YWl0aW5nRm9yRGVsYXkgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVUb3BNb3ZlQ2FwdHVyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlQ2FwdHVyZShlKSB7XG4gICAgICB0aGlzLmRyYWdPdmVyVGFyZ2V0SWRzID0gW107XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZU1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW92ZShlLCB0YXJnZXRJZCkge1xuICAgICAgdGhpcy5kcmFnT3ZlclRhcmdldElkcy51bnNoaWZ0KHRhcmdldElkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlVG9wTW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlKGUpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgICAgaWYgKHRoaXMud2FpdGluZ0ZvckRlbGF5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG1vdmVTdGFydFNvdXJjZUlkcyA9IHRoaXMubW92ZVN0YXJ0U291cmNlSWRzLFxuICAgICAgICAgIGRyYWdPdmVyVGFyZ2V0SWRzID0gdGhpcy5kcmFnT3ZlclRhcmdldElkcztcbiAgICAgIHZhciBjbGllbnRPZmZzZXQgPSBnZXRFdmVudENsaWVudE9mZnNldChlKTtcblxuICAgICAgaWYgKCFjbGllbnRPZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBJZiB0aGUgdG91Y2ggbW92ZSBzdGFydGVkIGFzIGEgc2Nyb2xsLCBvciBpcyBpcyBiZXR3ZWVuIHRoZSBzY3JvbGwgYW5nbGVzXG5cblxuICAgICAgaWYgKHRoaXMuX2lzU2Nyb2xsaW5nIHx8ICF0aGlzLm1vbml0b3IuaXNEcmFnZ2luZygpICYmIGluQW5nbGVSYW5nZXModGhpcy5fbW91c2VDbGllbnRPZmZzZXQueCwgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQueSwgY2xpZW50T2Zmc2V0LngsIGNsaWVudE9mZnNldC55LCB0aGlzLnNjcm9sbEFuZ2xlUmFuZ2VzKSkge1xuICAgICAgICB0aGlzLl9pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gSWYgd2UncmUgbm90IGRyYWdnaW5nIGFuZCB3ZSd2ZSBtb3ZlZCBhIGxpdHRsZSwgdGhhdCBjb3VudHMgYXMgYSBkcmFnIHN0YXJ0XG5cblxuICAgICAgaWYgKCF0aGlzLm1vbml0b3IuaXNEcmFnZ2luZygpICYmIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0Lmhhc093blByb3BlcnR5KCd4JykgJiYgbW92ZVN0YXJ0U291cmNlSWRzICYmIGRpc3RhbmNlKHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0LngsIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0LnksIGNsaWVudE9mZnNldC54LCBjbGllbnRPZmZzZXQueSkgPiAodGhpcy50b3VjaFNsb3AgPyB0aGlzLnRvdWNoU2xvcCA6IDApKSB7XG4gICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmJlZ2luRHJhZyhtb3ZlU3RhcnRTb3VyY2VJZHMsIHtcbiAgICAgICAgICBjbGllbnRPZmZzZXQ6IHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0LFxuICAgICAgICAgIGdldFNvdXJjZUNsaWVudE9mZnNldDogdGhpcy5nZXRTb3VyY2VDbGllbnRPZmZzZXQsXG4gICAgICAgICAgcHVibGlzaFNvdXJjZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5tb25pdG9yLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VOb2RlID0gdGhpcy5zb3VyY2VOb2Rlc1t0aGlzLm1vbml0b3IuZ2V0U291cmNlSWQoKV07XG4gICAgICB0aGlzLmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKHNvdXJjZU5vZGUpO1xuICAgICAgdGhpcy5hY3Rpb25zLnB1Ymxpc2hEcmFnU291cmNlKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIEdldCB0aGUgbm9kZSBlbGVtZW50cyBvZiB0aGUgaG92ZXJlZCBEcm9wVGFyZ2V0c1xuXG4gICAgICB2YXIgZHJhZ092ZXJUYXJnZXROb2RlcyA9IGRyYWdPdmVyVGFyZ2V0SWRzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBfdGhpczQudGFyZ2V0Tm9kZXNba2V5XTtcbiAgICAgIH0pOyAvLyBHZXQgdGhlIGEgb3JkZXJlZCBsaXN0IG9mIG5vZGVzIHRoYXQgYXJlIHRvdWNoZWQgYnlcblxuICAgICAgdmFyIGVsZW1lbnRzQXRQb2ludCA9IHRoaXMuZ2V0RHJvcFRhcmdldEVsZW1lbnRzQXRQb2ludCA/IHRoaXMuZ2V0RHJvcFRhcmdldEVsZW1lbnRzQXRQb2ludChjbGllbnRPZmZzZXQueCwgY2xpZW50T2Zmc2V0LnksIGRyYWdPdmVyVGFyZ2V0Tm9kZXMpIDogZWxlbWVudHNGcm9tUG9pbnQoY2xpZW50T2Zmc2V0LngsIGNsaWVudE9mZnNldC55KTsgLy8gRXh0ZW5kIGxpc3Qgd2l0aCBwYXJlbnRzIHRoYXQgYXJlIG5vdCByZWNlaXZpbmcgZWxlbWVudHNGcm9tUG9pbnQgZXZlbnRzIChzaXplIDAgZWxlbWVudHMgYW5kIHN2ZyBncm91cHMpXG5cbiAgICAgIHZhciBlbGVtZW50c0F0UG9pbnRFeHRlbmRlZCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBub2RlSWQgaW4gZWxlbWVudHNBdFBvaW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudHNBdFBvaW50Lmhhc093blByb3BlcnR5KG5vZGVJZCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IGVsZW1lbnRzQXRQb2ludFtub2RlSWRdO1xuICAgICAgICBlbGVtZW50c0F0UG9pbnRFeHRlbmRlZC5wdXNoKGN1cnJlbnROb2RlKTtcblxuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUpIHtcbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWVsZW1lbnRzQXRQb2ludEV4dGVuZGVkLmluY2x1ZGVzKGN1cnJlbnROb2RlKSkge1xuICAgICAgICAgICAgZWxlbWVudHNBdFBvaW50RXh0ZW5kZWQucHVzaChjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBvcmRlcmVkRHJhZ092ZXJUYXJnZXRJZHMgPSBlbGVtZW50c0F0UG9pbnRFeHRlbmRlZCAvLyBGaWx0ZXIgb2ZmIG5vZGVzIHRoYXQgYXJlbnQgYSBob3ZlcmVkIERyb3BUYXJnZXRzIG5vZGVzXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBkcmFnT3ZlclRhcmdldE5vZGVzLmluZGV4T2Yobm9kZSkgPiAtMTtcbiAgICAgIH0pIC8vIE1hcCBiYWNrIHRoZSBub2RlcyBlbGVtZW50cyB0byB0YXJnZXRJZHNcbiAgICAgIC5tYXAoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgdGFyZ2V0SWQgaW4gX3RoaXM0LnRhcmdldE5vZGVzKSB7XG4gICAgICAgICAgaWYgKG5vZGUgPT09IF90aGlzNC50YXJnZXROb2Rlc1t0YXJnZXRJZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRJZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pIC8vIEZpbHRlciBvZmYgcG9zc2libGUgbnVsbCByb3dzXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiAhIW5vZGU7XG4gICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGlkLCBpbmRleCwgaWRzKSB7XG4gICAgICAgIHJldHVybiBpZHMuaW5kZXhPZihpZCkgPT09IGluZGV4O1xuICAgICAgfSk7IC8vIFJldmVyc2Ugb3JkZXIgYmVjYXVzZSBkbmQtY29yZSByZXZlcnNlIGl0IGJlZm9yZSBjYWxsaW5nIHRoZSBEcm9wVGFyZ2V0IGRyb3AgbWV0aG9kc1xuXG4gICAgICBvcmRlcmVkRHJhZ092ZXJUYXJnZXRJZHMucmV2ZXJzZSgpO1xuICAgICAgdGhpcy5hY3Rpb25zLmhvdmVyKG9yZGVyZWREcmFnT3ZlclRhcmdldElkcywge1xuICAgICAgICBjbGllbnRPZmZzZXQ6IGNsaWVudE9mZnNldFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlKGUpIHtcbiAgICAgIHRoaXMuX2lzU2Nyb2xsaW5nID0gZmFsc2U7XG5cbiAgICAgIGlmICghZXZlbnRTaG91bGRFbmREcmFnKGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm1vbml0b3IuaXNEcmFnZ2luZygpIHx8IHRoaXMubW9uaXRvci5kaWREcm9wKCkpIHtcbiAgICAgICAgdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMgPSBudWxsO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0ID0ge307XG4gICAgICB0aGlzLnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICAgIHRoaXMuYWN0aW9ucy5kcm9wKCk7XG4gICAgICB0aGlzLmFjdGlvbnMuZW5kRHJhZygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVDYW5jZWxPbkVzY2FwZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVDYW5jZWxPbkVzY2FwZShlKSB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnICYmIHRoaXMubW9uaXRvci5pc0RyYWdnaW5nKCkpIHtcbiAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy51bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKCk7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5lbmREcmFnKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZU9uQ29udGV4dE1lbnVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlT25Db250ZXh0TWVudSgpIHtcbiAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzID0gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIobm9kZSkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHRoaXMudW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpO1xuICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZSA9IG5vZGU7XG4gICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyID0gbmV3IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFub2RlLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICBfdGhpczUucmVzdXJyZWN0U291cmNlTm9kZSgpO1xuXG4gICAgICAgICAgX3RoaXM1LnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlci5vYnNlcnZlKG5vZGUucGFyZW50RWxlbWVudCwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXN1cnJlY3RTb3VyY2VOb2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3VycmVjdFNvdXJjZU5vZGUoKSB7XG4gICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1yZWFjdGlkJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKSB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcikge1xuICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlciA9IG51bGw7XG4gICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlID0gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVG91Y2hCYWNrZW5kO1xufSgpO1xuXG5leHBvcnRzLlRvdWNoQmFja2VuZCA9IFRvdWNoQmFja2VuZDtcblxuZnVuY3Rpb24gY3JlYXRlVG91Y2hCYWNrZW5kKCkge1xuICB2YXIgb3B0aW9uc09yTWFuYWdlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIHRvdWNoQmFja2VuZEZhY3RvcnkgPSBmdW5jdGlvbiB0b3VjaEJhY2tlbmRGYWN0b3J5KG1hbmFnZXIpIHtcbiAgICByZXR1cm4gbmV3IFRvdWNoQmFja2VuZChtYW5hZ2VyLCBvcHRpb25zT3JNYW5hZ2VyKTtcbiAgfTtcblxuICBpZiAob3B0aW9uc09yTWFuYWdlci5nZXRNb25pdG9yKSB7XG4gICAgcmV0dXJuIHRvdWNoQmFja2VuZEZhY3Rvcnkob3B0aW9uc09yTWFuYWdlcik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRvdWNoQmFja2VuZEZhY3Rvcnk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzdGFuY2UoeDEsIHkxLCB4MiwgeTIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhNYXRoLmFicyh4MiAtIHgxKSwgMikgKyBNYXRoLnBvdyhNYXRoLmFicyh5MiAtIHkxKSwgMikpO1xufVxuXG5mdW5jdGlvbiBpbkFuZ2xlUmFuZ2VzKHgxLCB5MSwgeDIsIHkyLCBhbmdsZVJhbmdlcykge1xuICBpZiAoYW5nbGVSYW5nZXMgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBhbmdsZSA9IE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSkgKiAxODAgLyBNYXRoLlBJICsgMTgwO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYW5nbGVSYW5nZXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGFuZ2xlUmFuZ2VzW2ldLnN0YXJ0ID09IG51bGwgfHwgYW5nbGUgPj0gYW5nbGVSYW5nZXNbaV0uc3RhcnQpICYmIChhbmdsZVJhbmdlc1tpXS5lbmQgPT0gbnVsbCB8fCBhbmdsZSA8PSBhbmdsZVJhbmdlc1tpXS5lbmQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9kaXN0L1RvdWNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQvbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmFnTGF5ZXIgZnJvbSAncmVhY3QtZG5kL2xpYi9EcmFnTGF5ZXInO1xuaW1wb3J0IEV2ZW50QmFzZSBmcm9tICcuL0V2ZW50QmFzZSc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuXG5mdW5jdGlvbiBjb2xsZWN0IChtb25pdG9yKXtcbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgY2xpZW50T2Zmc2V0OiBtb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpXG4gIH07XG5cbiAgY29uc3QgaXRlbSA9IG1vbml0b3IuZ2V0SXRlbSgpO1xuICBpZihpdGVtICYmIGl0ZW1bJ2RyYWdnaW5nQ29tcG9uZW50J10pe1xuICAgIHByb3BzWydkcmFnZ2luZ0NvbXBvbmVudCddID0gaXRlbVsnZHJhZ2dpbmdDb21wb25lbnQnXTtcbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn1cblxuY2xhc3MgRXZlbnRQcmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZ2V0SXRlbVN0eWxlcyAoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmNsaWVudE9mZnNldCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLmNsaWVudE9mZnNldC54O1xuICAgIGNvbnN0IHkgPSB0aGlzLnByb3BzLmNsaWVudE9mZnNldC55O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcblxuICAgIHJldHVybiBhc3NpZ24odGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudC5nZXREcmFnZ2luZ1N0eWxlKCksIHtcbiAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgfSk7XG4gIH1cblxuICBnZXRSaWdodCgpe1xuICAgIGlmKCF0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50KSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICBjb25zdCB3aWR0aCA9IHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQucHJvcHMud2lkdGhcbiAgICBpZih0aGlzLnByb3BzLmNsaWVudE9mZnNldCl7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudC5zdGF0ZS5sZWZ0ICsgdGhpcy5wcm9wcy5jbGllbnRPZmZzZXQueCArIHdpZHRoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50LnN0YXRlLmxlZnQgKyB3aWR0aFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG5cbiAgICBsZXQgZHJhZ2dpbmdEaXNwbGF5ID0gJyc7XG4gICAgaWYodGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudCAmJiB0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50LnN0YXRlLmRyYWdnaW5nRGlzcGxheSl7XG4gICAgICBkcmFnZ2luZ0Rpc3BsYXkgPSB0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50LnN0YXRlLmRyYWdnaW5nRGlzcGxheTtcbiAgICB9XG5cbiAgICBsZXQgZGlzcGxheSA9IFtdO1xuICAgIGlmKHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQgJiYgdGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudC5zdGF0ZS5kaXNwbGF5KXtcbiAgICAgIGRpc3BsYXkgPSB0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50LnN0YXRlLmRpc3BsYXk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cInByZXZpZXdcIiBjbGFzc05hbWU9XCJ0bEV2ZW50VmlldyB0bERyYWdnaW5nRXZlbnRcIiBzdHlsZT17dGhpcy5nZXRJdGVtU3R5bGVzKCl9PlxuICAgICAgICA8RXZlbnRCYXNlXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5PXtkcmFnZ2luZ0Rpc3BsYXl9XG4gICAgICAgICAgZGlzcGxheT17ZGlzcGxheX1cbiAgICAgICAgICB0aW1lbGluZT17dGhpcy5wcm9wcy50aW1lbGluZX1cbiAgICAgICAgICByaWdodD17dGhpcy5nZXRSaWdodCgpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnTGF5ZXIoY29sbGVjdCkoRXZlbnRQcmV2aWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0V2ZW50UHJldmlldy5qc3giLCJleHBvcnQgZnVuY3Rpb24gY2xvc2VzdChlbGVtLCBzZWxlY3Rvcikge1xuICB2YXIgbWF0Y2hlc0ZuO1xuXG4gIC8vIGZpbmQgdmVuZG9yIHByZWZpeFxuICBbJ21hdGNoZXMnLCd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLCdtb3pNYXRjaGVzU2VsZWN0b3InLCdtc01hdGNoZXNTZWxlY3RvcicsJ29NYXRjaGVzU2VsZWN0b3InXS5zb21lKGZ1bmN0aW9uKGZuKSB7XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHlbZm5dID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBtYXRjaGVzRm4gPSBmbjtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfSlcblxuICB2YXIgcGFyZW50O1xuXG4gIC8vIHRyYXZlcnNlIHBhcmVudHNcbiAgd2hpbGUgKGVsZW0pIHtcbiAgICAgIHBhcmVudCA9IGVsZW0ucGFyZW50RWxlbWVudDtcbiAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50W21hdGNoZXNGbl0oc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH1cbiAgICAgIGVsZW0gPSBwYXJlbnQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuZXM2IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IHtEcmFnU291cmNlfSBmcm9tICdyZWFjdC1kbmQnO1xuaW1wb3J0IEV2ZW50QmFzZSBmcm9tICcuL0V2ZW50QmFzZSc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9UaW1lbGluZSc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5cbmNvbnN0IHNvdXJjZSA9IHtcbiAgYmVnaW5EcmFnOiBmdW5jdGlvbiAocHJvcHMsIG1vbml0b3IsIGNvbXBvbmVudCkge1xuICAgIHJldHVybiBhc3NpZ24oe30sIHByb3BzLCB7ZHJhZ2dpbmdDb21wb25lbnQ6IGNvbXBvbmVudH0pO1xuICB9LFxuICBjYW5EcmFnOiBmdW5jdGlvbihwcm9wcywgbW9uaXRvciwgY29tcG9uZW50KXtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBwcm9wcy50aW1lbGluZS5maW5kRXZlbnRCeUlkKHByb3BzLmlkKS5zdGF0ZS5kcmFnZ2FibGU7XG4gICAgcmV0dXJuICEhZHJhZ2dhYmxlO1xuICB9XG59XG5cbmNvbnN0IGNvbGxlY3QgPSAoY29ubmVjdCwgbW9uaXRvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbm5lY3REcmFnU291cmNlOiBjb25uZWN0LmRyYWdTb3VyY2UoKSxcbiAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKVxuICB9O1xufVxuXG5jbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIOODieODqeODg+OCsCbjg4njg63jg4Pjg5fjga7jg5Hjg5Xjgqnjg7zjg57jg7PjgrnjgpLkuIrjgZLjgovjgZ/jgoHjgIHopovjgZ/nm67jgavplqLkv4Ljga7jgarjgYRzdGF0ZeOBr+ODoeODs+ODkOODvOWkieaVsOOBq+OBl+OBpuOBvuOBmeOAglxuICAgIHRoaXMubGluZUlkID0gdGhpcy5wcm9wcy5pbml0aWFsTGluZUlkO1xuICAgIHRoaXMudGltZVNwYW4gPSB0aGlzLnByb3BzLmluaXRpYWxUaW1lU3BhbjtcbiAgICB0aGlzLmRyYWdnaW5nUG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMucmVzaXppbmdUaW1lU3BhbiA9IG51bGw7XG4gICAgdGhpcy5yZXNpemluZyA9IGZhbHNlO1xuICAgIHRoaXMudmFycyA9IHRoaXMucHJvcHMudmFycztcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIC8vIOWIneacn+ODleODreODvOODiOOBruOCpOODmeODs+ODiOOBr2xpbmVJZOOCkuaMgeOBo+OBpuOBhOOBvuOBm+OCk+OAguOBk+OCjOOBr+OCreODo+ODs+OCu+ODq+OBl+OBn+aZguOBq+ODleODreODvOOBqOOBl+OBn+eKtuaFi+OBq+aIu+OBl+OBn+OBhOOBi+OCieOBp+OBmeOAglxuICAgIC8vIOS7o+OCj+OCiuOBq2Zsb2F044Gu5YCk44KS5L+d5oyB44GX44CB44Gd44GT44Gr44OV44Ot44O844OI44Gu44G+44G+5oi744GZ44KI44GG44Gr44GX44Gm44GE44G+44GZ44CCXG4gICAgdGhpcy5pbml0aWFsRmxvYXQgPSB0aGlzLnByb3BzLmZsb2F0XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdG9wOiBwcm9wcy5mbG9hdCA9PT0gdW5kZWZpbmVkID8gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgOiBwcm9wcy5mbG9hdC50b3AsXG4gICAgICBsZWZ0OiBwcm9wcy5mbG9hdCA9PT0gdW5kZWZpbmVkID8gdGhpcy5wcm9wcy50aW1lbGluZS5nZXRMaW5lTGVmdCh0aGlzLmxpbmVJZCkgOiBwcm9wcy5mbG9hdC5sZWZ0LFxuICAgICAgY29sb3I6IHRoaXMucHJvcHMuaW5pdGlhbENvbG9yLFxuICAgICAgZHJhZ2dhYmxlOiB0aGlzLnByb3BzLmZsb2F0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IHRydWUsXG4gICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJyxcbiAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuaW5pdGlhbERpc3BsYXksXG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5mbG9hdCl7XG4gICAgICAvLyDpq5jjgZXjgpLoqK3lrppcbiAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0ID0gdGhpcy5wcm9wcy50aW1lbGluZS5taW51dGVUb0hlaWdodCh0aGlzLnByb3BzLmZsb2F0Lm1pbnV0ZSk7XG4gICAgICBjb25zdCB0aW1lID0gdGhpcy5wcm9wcy50aW1lbGluZS50b3BUb1RpbWUodGhpcy5zdGF0ZS50b3ApO1xuICAgICAgdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uID0ge3RpbWU6IHRpbWUsIGxpbmVJZDogdW5kZWZpbmVkfTtcbiAgICAgIHRoaXMuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5ID0gdGltZS5nZXREaXNwbGF5VGltZSgpO1xuICAgICAgdGhpcy50aW1lU3BhbiA9IG5ldyBUaW1lU3Bhbih0aW1lLCB0aW1lLmFkZE1pbih0aGlzLnByb3BzLmZsb2F0Lm1pbnV0ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLmhlaWdodCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodCh0aGlzLnRpbWVTcGFuKTtcbiAgICB9XG4gIH1cblxuICB0b0pzb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBsaW5lSWQ6IHRoaXMubGluZUlkLFxuICAgICAgdGltZVNwYW46IHRoaXMudGltZVNwYW4sXG4gICAgICB2YXJzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMudmFycykpLFxuICAgICAgY29sb3I6IHRoaXMuc3RhdGUuY29sb3IsXG4gICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXksXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3A6IHRoaXMuc3RhdGUudG9wLFxuICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKHZhbHVlcyl7XG4gICAgY29uc3QgbmV3U3RhdGUgPSB7fTtcbiAgICBpZih2YWx1ZXMudGltZVNwYW4pe1xuICAgICAgbmV3U3RhdGUuaGVpZ2h0ID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KHZhbHVlcy50aW1lU3Bhbik7XG4gICAgICBuZXdTdGF0ZS50b3AgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh2YWx1ZXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgICAgdGhpcy50aW1lU3BhbiA9IHZhbHVlcy50aW1lU3BhbjtcbiAgICB9XG5cbiAgICBpZih2YWx1ZXMuY29sb3Ipe1xuICAgICAgbmV3U3RhdGUuY29sb3IgPSB2YWx1ZXMuY29sb3I7XG4gICAgfVxuXG4gICAgaWYodmFsdWVzLmRpc3BsYXkpe1xuICAgICAgbmV3U3RhdGUuZGlzcGxheSA9IHZhbHVlcy5kaXNwbGF5O1xuICAgIH1cblxuICAgIGlmKHZhbHVlcy52YXJzKXtcbiAgICAgIHRoaXMudmFycyA9IHZhbHVlcy52YXJzO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRUaW1lU3Bhbigpe1xuICAgIHJldHVybiB0aGlzLnJlc2l6aW5nVGltZVNwYW4gfHwgdGhpcy50aW1lU3BhbjtcbiAgfVxuXG4gIGdldCBuZXh0UG9zaXRpb24oKXtcbiAgICBpZih0aGlzLmRyYWdnaW5nUG9zaXRpb24pe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGluZUlkOiB0aGlzLmRyYWdnaW5nUG9zaXRpb24ubGluZUlkLFxuICAgICAgICB0aW1lU3BhbjogdGhpcy50aW1lU3Bhbi5zaGlmdFN0YXJ0VGltZSh0aGlzLmRyYWdnaW5nUG9zaXRpb24udGltZSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgIHJldHVybntcbiAgICAgICAgbGluZUlkOiB0aGlzLmxpbmVJZCxcbiAgICAgICAgdGltZVNwYW46IHRoaXMucmVzaXppbmdUaW1lU3BhblxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IHByZXZQb3NpdGlvbigpe1xuICAgIGlmKCF0aGlzLmRyYWdnaW5nUG9zaXRpb24gJiYgIXRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJue1xuICAgICAgICBsaW5lSWQ6IHRoaXMubGluZUlkLFxuICAgICAgICB0aW1lU3BhbjogdGhpcy50aW1lU3BhblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDku5bjga5FdmVudOOBqOmHjeOBquOBo+OBpuOBhOOBquOBhOOBi+ODgeOCp+ODg+OCr+OBmeOCi1xuICAgKiBAcGFyYW0gIHtvYmplY3R9ICBwb3NpdGlvbiB7bGluZUlkOiAqKiosIHRpbWVTcGFuOiAqKip9XG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc0ZyZWVQb3NpdGlvbihwb3NpdGlvbil7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnRpbWVsaW5lLmV2ZW50Q29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGV2ID0gdGhpcy5wcm9wcy50aW1lbGluZS5ldmVudENvbXBvbmVudHNbaV07XG4gICAgICBpZihldiA9PT0gdGhpcykgY29udGludWU7XG4gICAgICBpZihldi5saW5lSWQgIT0gcG9zaXRpb24ubGluZUlkKSBjb250aW51ZTtcbiAgICAgIGlmKGV2LmN1cnJlbnRUaW1lU3Bhbi5vdmVybGFwcyhwb3NpdGlvbi50aW1lU3Bhbikpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBtb3ZlVG8odG9wLCBsZWZ0KXtcbiAgICB0aGlzLnNldFN0YXRlKHt0b3A6IHRvcCwgbGVmdDogbGVmdH0pO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBpZih0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkQ2xpY2spe1xuICAgICAgaWYodGhpcy5yZXNpemluZyl7XG4gICAgICAgIHJldHVybiA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnREaWRDbGljayh7XG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LnJlZnMubGluZXNXcmFwcGVyLnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxMZWZ0OiB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LmVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgICAgICB0b3A6IGUuY2xpZW50WSxcbiAgICAgICAgICBsZWZ0OiBlLmNsaWVudFgsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgbGluZUNvbXBvbmVudDogdGhpcy5wcm9wcy50aW1lbGluZS5saW5lQ29tcG9uZW50cy5maW5kKGxpbmVDb21wb25lbnQgPT4gbGluZUNvbXBvbmVudC5wcm9wcy5pZCA9PSB0aGlzLmxpbmVJZCksXG4gICAgICAgIGV2ZW50OiBlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmFnZ2luZyh0aW1lLCBsaW5lSWQpe1xuICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbiA9IHt0aW1lOiB0aW1lLCBsaW5lSWQ6IGxpbmVJZH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmdEaXNwbGF5OiB0aW1lLmdldERpc3BsYXlUaW1lKCl9KTtcbiAgfVxuXG4gIHJlc2l6ZVVwKGUpe1xuICAgIHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQucmVzaXplVXAodGhpcywgZS5jbGllbnRZKTtcbiAgfVxuXG4gIHJlc2l6ZURvd24oZSl7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudC5yZXNpemVEb3duKHRoaXMsIGUuY2xpZW50WSk7XG4gIH1cblxuICBlbmRSZXNpemluZyhlKXtcbiAgICBpZih0aGlzLnJlc2l6aW5nVGltZVNwYW4pe1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogbnVsbCxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5VG9wOiBudWxsXG4gICAgICB9O1xuXG4gICAgICBpZih0aGlzLnJlc2l6aW5nVGltZVNwYW4pe1xuICAgICAgICBuZXdTdGF0ZS50b3AgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh0aGlzLnJlc2l6aW5nVGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgICAgICBuZXdTdGF0ZS5oZWlnaHQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQodGhpcy5yZXNpemluZ1RpbWVTcGFuKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25DbGljaygpO1xuICAgIH1cblxuICAgIC8vb25DbGlja+OCiOOCimVuZFJlc2l6aW5n44Gu5YWI44Gr55m655Sf44GX44Gm44GX44G+44GG44CCXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc2l6aW5nID0gZmFsc2UsIDEwMCk7XG4gIH1cblxuICBvbkNvbnRleHRNZW51KGUpe1xuICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnREaWRSaWdodENsaWNrKXtcbiAgICAgIHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnREaWRSaWdodENsaWNrKHtcbiAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RHJhZ2dpbmdTdHlsZSgpe1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICB0b3A6IHRoaXMuc3RhdGUudG9wLFxuICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmNvbG9yLFxuICAgIH1cbiAgfVxuXG4gIGdldE9mZnNldCgpe1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRoaXMuc3RhdGUudG9wLFxuICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0XG4gICAgfVxuICB9XG5cbiAgc2V0Q29sb3IoY29sb3Ipe1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvbG9yOiBjb2xvcn0pO1xuICB9XG5cbiAgc2V0RGlzcGxheShkaXNwbGF5KXtcbiAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiBkaXNwbGF5fSk7XG4gIH1cblxuICByZXNpemUoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgZmxvYXQoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIGRyYWdnaW5nRGlzcGxheTogdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXNwbGF5VGltZSgpXG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYWdnaW5nUG9zaXRpb24gPSB7dGltZTogdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSwgbGluZUlkOiB0aGlzLmxpbmVJZH07XG4gIH1cblxuICBpc0ZpeGVkKCl7XG4gICAgcmV0dXJuICF0aGlzLnN0YXRlLmRyYWdnYWJsZSAmJiAhdGhpcy5zdGF0ZS5yZXNpemFibGU7XG4gIH1cblxuICBpc0ZpeGFibGUoKXtcbiAgICB2YXIgbmV3UG9zaXRpb24gPSB0aGlzLm5leHRQb3NpdGlvbjtcbiAgICBpZighbmV3UG9zaXRpb24pe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXNGcmVlUG9zaXRpb24obmV3UG9zaXRpb24pO1xuICB9XG5cbiAgaXNDYW5jZWxhYmxlKCl7XG4gICAgdmFyIG5ld1Bvc2l0aW9uID0gdGhpcy5wcmV2UG9zaXRpb247XG4gICAgaWYoIW5ld1Bvc2l0aW9uKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmlzRnJlZVBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgfVxuXG4gIGNhbmNlbCgpe1xuICAgIGlmKHRoaXMuZHJhZ2dpbmdQb3NpdGlvbil7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHt9XG5cbiAgICAgIGlmKHRoaXMubGluZUlkID09PSB1bmRlZmluZWQpe1xuICAgICAgICBuZXdTdGF0ZS5sZWZ0ID0gdGhpcy5pbml0aWFsRmxvYXQubGVmdFxuICAgICAgICBuZXdTdGF0ZS50b3AgPSB0aGlzLmluaXRpYWxGbG9hdC50b3BcbiAgICAgICAgbmV3U3RhdGUuZHJhZ2dpbmdEaXNwbGF5ID0gdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXNwbGF5VGltZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYWdnaW5nUG9zaXRpb24gPSBudWxsO1xuICAgICAgICBuZXdTdGF0ZS5sZWZ0ID0gdGhpcy5wcm9wcy50aW1lbGluZS5nZXRMaW5lTGVmdCh0aGlzLmxpbmVJZCk7XG4gICAgICAgIG5ld1N0YXRlLnRvcCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgICAgICBuZXdTdGF0ZS5kcmFnZ2FibGUgPSBmYWxzZVxuICAgICAgICBuZXdTdGF0ZS5kcmFnZ2luZ0Rpc3BsYXkgPSAnJ1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9IGVsc2UgaWYodGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KHRoaXMudGltZVNwYW4pO1xuICAgICAgdGhpcy5yZXNpemluZ1RpbWVTcGFuID0gbnVsbDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnLFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICB9XG5cbiAgZ2V0TWludXRlKCl7XG4gICAgaWYodGhpcy50aW1lU3Bhbil7XG4gICAgICByZXR1cm4gdGhpcy50aW1lU3Bhbi5nZXREaXN0YW5jZSgpO1xuICAgIH0gZWxzZSBpZih0aGlzLnByb3BzLmZsb2F0KXtcbiAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnByb3BzLmZsb2F0Lm1pbnV0ZSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGZpeCgpe1xuICAgIGlmKHRoaXMuZHJhZ2dpbmdQb3NpdGlvbil7XG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgdG9wOiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh0aGlzLmRyYWdnaW5nUG9zaXRpb24udGltZSksXG4gICAgICAgIGxlZnQ6IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0TGluZUxlZnQodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLmxpbmVJZCksXG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJydcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdUaW1lU3BhbiA9IHRoaXMudGltZVNwYW4uc2hpZnRTdGFydFRpbWUodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLnRpbWUpO1xuICAgICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudFdpbGxGaXgpe1xuICAgICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50V2lsbEZpeCh7XG4gICAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICBsaW5lSWQ6IHRoaXMuZHJhZ2dpbmdQb3NpdGlvbi5saW5lSWQsXG4gICAgICAgICAgdGltZVNwYW46IG5ld1RpbWVTcGFuXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIHRoaXMubGluZUlkID0gdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLmxpbmVJZDtcbiAgICAgIHRoaXMudGltZVNwYW4gPSBuZXdUaW1lU3BhbjtcbiAgICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIGlmKHRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJ1xuICAgICAgfVxuICAgICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudFdpbGxGaXgpe1xuICAgICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50V2lsbEZpeCh7XG4gICAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICBsaW5lSWQ6IHRoaXMubGluZUlkLFxuICAgICAgICAgIHRpbWVTcGFuOiB0aGlzLnJlc2l6aW5nVGltZVNwYW5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgdGhpcy50aW1lU3BhbiA9IHRoaXMucmVzaXppbmdUaW1lU3BhbjtcbiAgICAgIHRoaXMucmVzaXppbmdUaW1lU3BhbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmNsZWFyRHJhZ2dpbmdPdmVyKCk7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZEZpeCl7XG4gICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkRml4KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNldFZhcihrZXksIHZhbHVlKXtcbiAgICB0aGlzLnZhcnNba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0VmFyKGtleSl7XG4gICAgcmV0dXJuIHRoaXMudmFyc1trZXldO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmV2ZW50Q29tcG9uZW50cy5wdXNoKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIHRoaXMucHJvcHMudGltZWxpbmUuZXZlbnRDb21wb25lbnRzID0gdGhpcy5wcm9wcy50aW1lbGluZS5ldmVudENvbXBvbmVudHMuZmlsdGVyKGV2ID0+IGV2ICE9PSB0aGlzKVxuICB9XG5cbiAgY29ycmVjdFBvc2l0aW9uKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5kcmFnZ2FibGUpe1xuICAgICAgY29uc3QgbmV3UG9zID0ge31cbiAgICAgIC8vIGxpbmXjgpLnibnlrprjgZnjgotcbiAgICAgIHZhciBsaW5lID0gdGhpcy5wcm9wcy50aW1lbGluZS5maW5kTGluZUJ5TGVmdCh0aGlzLnN0YXRlLmxlZnQpXG4gICAgICAvLyDjga/jgb/lh7rjgabjgZ/jgonnp7vli5VcbiAgICAgIGlmKCFsaW5lKXtcbiAgICAgICAgbGluZSA9IHRoaXMucHJvcHMudGltZWxpbmUubGFzdExpbmVcbiAgICAgICAgbmV3UG9zLmxlZnQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmdldExpbmVMZWZ0KGxpbmUucHJvcHMuaWQpXG4gICAgICAgIHRoaXMuaW5pdGlhbEZsb2F0LmxlZnQgPSBuZXdQb3MubGVmdFxuICAgICAgfVxuXG4gICAgICBpZihsaW5lKXtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLmxpbmVJZCA9IGxpbmUucHJvcHMuaWRcbiAgICAgIH1cblxuICAgICAgLy8g6auY44GV44GM44Gv44G/5Ye644Gm44Gq44GE44GL44OB44Kn44OD44KvXG4gICAgICBjb25zdCBib3R0b20gPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuLmdldEVuZFRpbWUoKSkgLSB0aGlzLnN0YXRlLmhlaWdodFxuICAgICAgaWYodGhpcy5zdGF0ZS50b3AgPiBib3R0b20pe1xuICAgICAgICBuZXdQb3MudG9wID0gYm90dG9tXG4gICAgICAgIHRoaXMuaW5pdGlhbEZsb2F0LnRvcCA9IG5ld1Bvcy50b3BcbiAgICAgICAgY29uc3QgdGltZSA9IHRoaXMucHJvcHMudGltZWxpbmUudG9wVG9UaW1lKG5ld1Bvcy50b3ApXG4gICAgICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbi50aW1lID0gdGltZVxuICAgICAgICBuZXdQb3MuZHJhZ2dpbmdEaXNwbGF5ID0gdGltZS5nZXREaXNwbGF5VGltZSgpXG4gICAgICAgIHRoaXMudGltZVNwYW4gPSBuZXcgVGltZVNwYW4odGltZSwgdGltZS5hZGRNaW4odGhpcy50aW1lU3Bhbi5nZXREaXN0YW5jZSgpKSlcbiAgICAgIH1cblxuICAgICAgaWYoT2JqZWN0LmtleXMobmV3UG9zKS5sZW5ndGgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1BvcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3AgKyAncHgnLFxuICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0ICsgJ3B4JyxcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5jb2xvcixcbiAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuaXNEcmFnZ2luZyA/ICdub25lJyA6ICdibG9jaydcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY29ubmVjdERyYWdTb3VyY2UoXG4gICAgICA8ZGl2IGRhdGEtaWQ9e3RoaXMucHJvcHMuaWR9IHJlZj17ZWxlbSA9PiB0aGlzLmVsZW1lbnQgPSBlbGVtfSBvbkNvbnRleHRNZW51PXtlID0+IHRoaXMub25Db250ZXh0TWVudShlKX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0bEV2ZW50VmlldycsIHt0bERyYWdnaW5nRXZlbnQ6IHRoaXMuc3RhdGUuZHJhZ2dhYmxlLCB0bFJlc2l6YWJsZUV2ZW50OiB0aGlzLnN0YXRlLnJlc2l6YWJsZX0pfSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfT5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5yZXNpemFibGUpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bFJlc2l6ZUhhbmRsZVwiIG9uVG91Y2hTdGFydD17ZSA9PiB0aGlzLnJlc2l6ZVVwKGUpfSBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnJlc2l6ZVVwKGUpfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCl9XG4gICAgICAgIDxFdmVudEJhc2VcbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk9e3RoaXMuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5fVxuICAgICAgICAgIGRyYWdnaW5nRGlzcGxheVRvcD17dGhpcy5zdGF0ZS5kcmFnZ2luZ0Rpc3BsYXlUb3B9XG4gICAgICAgICAgZGlzcGxheT17dGhpcy5zdGF0ZS5kaXNwbGF5fVxuICAgICAgICAgIHRpbWVsaW5lPXt0aGlzLnByb3BzLnRpbWVsaW5lfVxuICAgICAgICAgIHJpZ2h0PXt0aGlzLnN0YXRlLmxlZnQgKyB0aGlzLnByb3BzLndpZHRofVxuICAgICAgICAvPlxuICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLnJlc2l6YWJsZSl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsUmVzaXplSGFuZGxlIHRsQm90dG9tXCIgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucmVzaXplRG93bihlKX0gb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVEb3duKGUpfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkV2ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5pdGlhbERpc3BsYXk6IFtdLFxuICB2YXJzOiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhZ1NvdXJjZShcIkV2ZW50XCIsIHNvdXJjZSwgY29sbGVjdCkoRXZlbnQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==