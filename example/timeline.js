/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(12)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(14)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
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

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(4);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = __webpack_require__(10);

var _reactContextMenu = __webpack_require__(15);

var _reactContextMenu2 = _interopRequireDefault(_reactContextMenu);

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

  var eventMenu = _reactDom2.default.render(React.createElement(_reactContextMenu2.default, {
    items: [{
      name: function name(context) {
        return 'float';
      },
      onClick: function onClick(context) {
        context.component.float();
      },
      show: function show(context) {
        return context.component.isFixed();
      }
    }, {
      name: function name(context) {
        return 'resize';
      },
      onClick: function onClick(context) {
        context.component.resize();
      },
      show: function show(context) {
        return context.component.isFixed();
      }
    }, _defineProperty({
      name: function name(context) {
        return 'cancel';
      },
      onClick: function onClick(context) {
        context.component.cancel();
      },
      show: function show(context) {
        return !context.component.isFixed();
      }
    }, 'onClick', function onClick(context) {
      if (context.component.isCancelable()) {
        context.component.cancel();
      } else {
        alert('You can\'t cancel!');
      }
    }), {
      name: function name(context) {
        return 'fix';
      },
      onClick: function onClick(context) {
        if (context.component.isFixable()) {
          context.component.fix();
        } else {
          alert('You can\'t fix!');
        }
      },
      show: function show(context) {
        return !context.component.isFixed();
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
        var lineId = context.component.lineId;
        context.component.remove().then(function () {
          console.log(timeline.getEventsOnLine(lineId));
        });
      },
      enable: function enable(context) {
        return context.component.isFixed();
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
      timeline.addEvents([{
        lineId: data.component.props.id,
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
      var display = data.component.state.display.filter(function (row) {
        return row.key != 'startTime';
      });
      display.push({ key: 'startTime', value: data.timeSpan.getStartTime().getDisplayTime() });
      data.state.display = display;
    },
    eventDidFix: function eventDidFix(data) {
      console.log(data);
    }
  }), timelineElement);

  window.onresize = function () {
    timeline.setHeight(calcHeight(timelineElement));
  };

  timeline.addEvents([{
    lineId: '__1',
    timeSpan: _index.TimeSpan.create([11, 0], [12, 0]),
    color: '#FFB6B6',
    display: [{ key: 'startTime', value: '11:00' }, { key: 'type', value: 'foobar' }, { key: 'memo', value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' }]
  }]);

  timeline.addEvents([{ id: '1231', lineId: '__1', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '1241', lineId: '__1', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '1251', lineId: '__1', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1261', lineId: '__1', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '1271', lineId: '__1', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '1281', lineId: '__1', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '1291', lineId: '__1', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '123', lineId: '__2', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '124', lineId: '__2', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '125', lineId: '__2', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1233', lineId: '__3', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '1243', lineId: '__3', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '1253', lineId: '__3', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1234', lineId: '__4', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '1244', lineId: '__4', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '1254', lineId: '__4', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12355', lineId: '__5', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12455', lineId: '__5', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12555', lineId: '__5', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1226', lineId: '__6', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '1236', lineId: '__6', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '1246', lineId: '__6', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '1256', lineId: '__6', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1266', lineId: '__6', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '1276', lineId: '__6', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '1286', lineId: '__6', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '1296', lineId: '__6', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '12377', lineId: '__7', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12477', lineId: '__7', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12577', lineId: '__7', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1228', lineId: '__8', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '1238', lineId: '__8', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '1248', lineId: '__8', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '1258', lineId: '__8', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1268', lineId: '__8', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '1278', lineId: '__8', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '1288', lineId: '__8', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '1298', lineId: '__8', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '1239', lineId: '__9', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '1249', lineId: '__9', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '1259', lineId: '__9', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12210', lineId: '__10', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '12310', lineId: '__10', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12410', lineId: '__10', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12510', lineId: '__10', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12610', lineId: '__10', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '12710', lineId: '__10', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '12810', lineId: '__10', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '12910', lineId: '__10', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '12311', lineId: '__11', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12411', lineId: '__11', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12511', lineId: '__11', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12312', lineId: '__12', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12412', lineId: '__12', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12512', lineId: '__12', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12213', lineId: '__13', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '12313', lineId: '__13', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12413', lineId: '__13', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12513', lineId: '__13', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12613', lineId: '__13', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '12713', lineId: '__13', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '12813', lineId: '__13', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '12913', lineId: '__13', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '12314', lineId: '__14', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12414', lineId: '__14', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12514', lineId: '__14', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12315', lineId: '__15', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12415', lineId: '__15', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12515', lineId: '__15', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12216', lineId: '__16', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '12316', lineId: '__16', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12416', lineId: '__16', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12516', lineId: '__16', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12616', lineId: '__16', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '12716', lineId: '__16', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '12816', lineId: '__16', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '12916', lineId: '__16', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '12217', lineId: '__17', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '12317', lineId: '__17', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12417', lineId: '__17', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12517', lineId: '__17', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12617', lineId: '__17', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '12717', lineId: '__17', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '12817', lineId: '__17', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '12917', lineId: '__17', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '12218', lineId: '__18', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '12318', lineId: '__18', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12418', lineId: '__18', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12518', lineId: '__18', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12618', lineId: '__18', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '12718', lineId: '__18', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '12818', lineId: '__18', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '12918', lineId: '__18', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }]);

  timeline.addEvents([{
    color: '#FFB6B6',
    float: { top: 10, left: 10, minute: 60 }
  }, {
    color: '#FFB6B6',
    float: { top: 100, left: 100, minute: 60 }
  }]);

  setTimeout(function () {
    console.log(timeline.getEventsOnLine('__18'));
  }, 500);
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/masamoto/Documents/repos/home/source/sites/react-timeline/index.js: Unexpected token \u0011\n    at Object.parse (native)\n    at new Converter (/Users/masamoto/Documents/repos/home/source/sites/react-timeline/node_modules/convert-source-map/index.js:50:48)\n    at Object.exports.fromComment (/Users/masamoto/Documents/repos/home/source/sites/react-timeline/node_modules/convert-source-map/index.js:106:10)\n    at Object.exports.fromSource (/Users/masamoto/Documents/repos/home/source/sites/react-timeline/node_modules/convert-source-map/index.js:116:22)\n    at File.parseInputSourceMap (/Users/masamoto/Documents/repos/home/source/sites/react-timeline/node_modules/babel-core/lib/transformation/file/index.js:636:49)\n    at File.addCode (/Users/masamoto/Documents/repos/home/source/sites/react-timeline/node_modules/babel-core/lib/transformation/file/index.js:596:17)\n    at /Users/masamoto/Documents/repos/home/source/sites/react-timeline/node_modules/babel-core/lib/transformation/pipeline.js:48:12\n    at File.wrap (/Users/masamoto/Documents/repos/home/source/sites/react-timeline/node_modules/babel-core/lib/transformation/file/index.js:564:16)\n    at Pipeline.transform (/Users/masamoto/Documents/repos/home/source/sites/react-timeline/node_modules/babel-core/lib/transformation/pipeline.js:47:17)\n    at transpile (/Users/masamoto/Documents/repos/home/source/sites/react-timeline/node_modules/babel-loader/lib/index.js:49:20)");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var warning = __webpack_require__(7);

var ReactPropTypesSecret = __webpack_require__(6);
var checkPropTypes = __webpack_require__(13);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(5);
  var warning = __webpack_require__(7);
  var ReactPropTypesSecret = __webpack_require__(6);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var ReactPropTypesSecret = __webpack_require__(6);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(1), __webpack_require__(2), __webpack_require__(3));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("classnames"), require("prop-types")) : factory(root["React"], root["classNames"], root["PropTypes"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextMenu = undefined;

var _ContextMenu = __webpack_require__(2);

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ContextMenu = _ContextMenu2.default;
exports.default = _ContextMenu2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(3);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _ContextMenuItem = __webpack_require__(4);

var _ContextMenuItem2 = _interopRequireDefault(_ContextMenuItem);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContextMenu = function (_React$Component) {
  _inherits(ContextMenu, _React$Component);

  _createClass(ContextMenu, null, [{
    key: 'getWindowSize',
    value: function getWindowSize() {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

      return { width: width, height: height };
    }
  }]);

  function ContextMenu(props) {
    _classCallCheck(this, ContextMenu);

    var _this = _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).call(this, props));

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

  _createClass(ContextMenu, [{
    key: 'show',
    value: function show(pos, context) {
      var _this2 = this;

      this.setState({
        style: (0, _objectAssign2.default)({}, this.state.style, pos, { display: 'block' }),
        context: context
      }, function () {
        var windowSize = ContextMenu.getWindowSize();
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
              return _react2.default.createElement(_ContextMenuItem2.default, {
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

  return ContextMenu;
}(_react2.default.Component);

exports.default = ContextMenu;


ContextMenu.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.func.isRequired,
    onClick: _propTypes2.default.func,
    show: _propTypes2.default.func,
    enable: _propTypes2.default.func
  })).isRequired,
  zIndex: _propTypes2.default.number
};

ContextMenu.defaultProps = {
  zIndex: 100
};

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContextMenuItem = function (_React$Component) {
  _inherits(ContextMenuItem, _React$Component);

  function ContextMenuItem(props) {
    _classCallCheck(this, ContextMenuItem);

    var _this = _possibleConstructorReturn(this, (ContextMenuItem.__proto__ || Object.getPrototypeOf(ContextMenuItem)).call(this, props));

    _this.state = {
      mouseOver: false
    };
    return _this;
  }

  _createClass(ContextMenuItem, [{
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

      return _react2.default.createElement('li', {
        className: (0, _classnames2.default)("rmMenuItem", { rmMouseOver: this.state.mouseOver, rmDisabled: !this.props.enable, rmSeparator: this.props.name == '-' }),
        onMouseOver: function onMouseOver(e) {
          return _this2.onMouseOver(e);
        },
        onMouseOut: function onMouseOut(e) {
          return _this2.onMouseOut(e);
        },
        onClick: function onClick(e) {
          return _this2.onClick(e);
        },
        dangerouslySetInnerHTML: { __html: this.props.name == '-' ? null : this.props.name }
      });
    }
  }]);

  return ContextMenuItem;
}(_react2.default.Component);

exports.default = ContextMenuItem;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1NzM4M2FjZmFmY2MyZWNkMmY3MCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRleHRNZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudUl0ZW0uanN4Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzc25hbWVzXCIsXCJhbWRcIjpcImNsYXNzbmFtZXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCJ9Il0sIm5hbWVzIjpbIkNvbnRleHRNZW51Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvZHkiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInByb3BzIiwic3RhdGUiLCJzdHlsZSIsInBvc2l0aW9uIiwiZGlzcGxheSIsInpJbmRleCIsIm92ZXJsYXkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3MiLCJjb250ZXh0Iiwic2V0U3RhdGUiLCJ3aW5kb3dTaXplIiwiZ2V0V2luZG93U2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJrZXkiLCJzaG93IiwibmFtZSIsIm9uQ2xpY2siLCJlbmFibGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsIkNvbnRleHRNZW51SXRlbSIsIm1vdXNlT3ZlciIsIm1lbnUiLCJybU1vdXNlT3ZlciIsInJtRGlzYWJsZWQiLCJybVNlcGFyYXRvciIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSwrQzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1FBQ1FBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Oztv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V3VDLElBQVgsQ0FBZ0I1QixLQUFoQjtBQUNEO0FBQ0Y7Ozs2QkFFTztBQUFBOztBQUNOLGFBQ0U7QUFDRSxtQkFBVywwQkFBVyxZQUFYLEVBQXlCLEVBQUM2QixhQUFhLEtBQUt2QyxLQUFMLENBQVdxQyxTQUF6QixFQUFvQ0csWUFBWSxDQUFDLEtBQUt6QyxLQUFMLENBQVc0QixNQUE1RCxFQUFvRWMsYUFBYSxLQUFLMUMsS0FBTCxDQUFXMEIsSUFBWCxJQUFtQixHQUFwRyxFQUF6QixDQURiO0FBRUUscUJBQWE7QUFBQSxpQkFBSyxPQUFLaUIsV0FBTCxDQUFpQi9CLENBQWpCLENBQUw7QUFBQSxTQUZmO0FBR0Usb0JBQVk7QUFBQSxpQkFBSyxPQUFLZ0MsVUFBTCxDQUFnQmhDLENBQWhCLENBQUw7QUFBQSxTQUhkO0FBSUUsaUJBQVM7QUFBQSxpQkFBSyxPQUFLZSxPQUFMLENBQWFmLENBQWIsQ0FBTDtBQUFBLFNBSlg7QUFLRSxpQ0FBeUIsRUFBQ2lDLFFBQVEsS0FBSzdDLEtBQUwsQ0FBVzBCLElBQVgsSUFBbUIsR0FBbkIsR0FBeUIsSUFBekIsR0FBZ0MsS0FBSzFCLEtBQUwsQ0FBVzBCLElBQXBEO0FBTDNCLFFBREY7QUFVRDs7OztFQXZDMEMsZ0JBQU1HLFM7O2tCQUE5QlEsZTs7Ozs7O0FDSHJCLCtDOzs7Ozs7QUNBQSwrQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJjbGFzc25hbWVzXCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSkgOiBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcImNsYXNzTmFtZXNcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NzM4M2FjZmFmY2MyZWNkMmY3MCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9qcy9jb21wb25lbnRzL0NvbnRleHRNZW51JztcbmV4cG9ydCB7Q29udGV4dE1lbnV9XG5leHBvcnQgZGVmYXVsdCBDb250ZXh0TWVudVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmVzNiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9Db250ZXh0TWVudUl0ZW0nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIHN0YXRpYyBnZXRXaW5kb3dTaXplKCl7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4ge3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIHpJbmRleDogdGhpcy5wcm9wcy56SW5kZXhcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5vdmVybGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm1NZW51T3ZlcmxheScpO1xuICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcInBvc2l0aW9uXCJdID0gJ2Fic29sdXRlJztcbiAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJ0b3BcIl0gPSAnMCc7XG4gICAgdGhpcy5vdmVybGF5LnN0eWxlW1wibGVmdFwiXSA9ICcwJztcbiAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJkaXNwbGF5XCJdID0gJ25vbmUnO1xuICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcInpJbmRleFwiXSA9IHRoaXMucHJvcHMuekluZGV4IC0gMTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XG4gICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmNsb3NlKCkpO1xuICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvdyhwb3MsIGNvbnRleHQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3R5bGU6IGFzc2lnbih7fSwgdGhpcy5zdGF0ZS5zdHlsZSwgcG9zLCB7ZGlzcGxheTogJ2Jsb2NrJ30pLFxuICAgICAgY29udGV4dDogY29udGV4dFxuICAgIH0sICgpID0+IHtcbiAgICAgIGxldCB3aW5kb3dTaXplID0gQ29udGV4dE1lbnUuZ2V0V2luZG93U2l6ZSgpO1xuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlW1wid2lkdGhcIl0gPSB3aW5kb3dTaXplLndpZHRoICsgJ3B4JztcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcImhlaWdodFwiXSA9IHdpbmRvd1NpemUuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZVsnZGlzcGxheSddID0gJ2Jsb2NrJztcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VPdXQoKXtcbiAgICBjb25zb2xlLmxvZygnb3V0Jyk7XG4gIH1cblxuICBvbk1vdXNlT3Zlcigpe1xuICAgIGNvbnNvbGUubG9nKCdvdmVyJyk7XG4gIH1cblxuICBjbG9zZSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7c3R5bGU6IGFzc2lnbih7fSwgdGhpcy5zdGF0ZS5zdHlsZSwge2Rpc3BsYXk6ICdub25lJ30pfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlWydkaXNwbGF5J10gPSAnbm9uZSc7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cIm1lbnVcIiBjbGFzc05hbWU9XCJybU1lbnVcIiBzdHlsZT17dGhpcy5zdGF0ZS5zdHlsZX0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJybU1lbnVJdGVtTGlzdFwiPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbnRleHQgPyB0aGlzLnByb3BzLml0ZW1zLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZighaXRlbS5zaG93IHx8IGl0ZW0uc2hvdyh0aGlzLnN0YXRlLmNvbnRleHQpKXtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lKHRoaXMuc3RhdGUuY29udGV4dCl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtpdGVtLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBtZW51PXt0aGlzfVxuICAgICAgICAgICAgICAgICAgZW5hYmxlPXtpdGVtLmVuYWJsZSA/IGl0ZW0uZW5hYmxlKHRoaXMuc3RhdGUuY29udGV4dCkgOiB0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSA6IG51bGx9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRleHRNZW51LnByb3BUeXBlcyA9IHtcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbmFtZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaG93OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBlbmFibGU6IFByb3BUeXBlcy5mdW5jXG4gIH0pKS5pc1JlcXVpcmVkLFxuICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuQ29udGV4dE1lbnUuZGVmYXVsdFByb3BzID0ge1xuICB6SW5kZXg6IDEwMFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ29udGV4dE1lbnUuanN4IiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW91c2VPdmVyOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBvbk1vdXNlT3V0KCl7XG4gICAgaWYodGhpcy5wcm9wcy5lbmFibGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VPdmVyKCl7XG4gICAgaWYodGhpcy5wcm9wcy5lbmFibGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiB0cnVlfSk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBpZih0aGlzLnByb3BzLmVuYWJsZSl7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy5tZW51LnN0YXRlLmNvbnRleHQpO1xuICAgICAgdGhpcy5wcm9wcy5tZW51LmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJybU1lbnVJdGVtXCIsIHtybU1vdXNlT3ZlcjogdGhpcy5zdGF0ZS5tb3VzZU92ZXIsIHJtRGlzYWJsZWQ6ICF0aGlzLnByb3BzLmVuYWJsZSwgcm1TZXBhcmF0b3I6IHRoaXMucHJvcHMubmFtZSA9PSAnLSd9KX1cbiAgICAgICAgb25Nb3VzZU92ZXI9e2UgPT4gdGhpcy5vbk1vdXNlT3ZlcihlKX1cbiAgICAgICAgb25Nb3VzZU91dD17ZSA9PiB0aGlzLm9uTW91c2VPdXQoZSl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5wcm9wcy5uYW1lID09ICctJyA/IG51bGwgOiB0aGlzLnByb3BzLm5hbWV9fVxuICAgICAgPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudUl0ZW0uanN4IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzc25hbWVzXCIsXCJhbWRcIjpcImNsYXNzbmFtZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifVxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzQ3OWQ4OWY5NzYzN2NjYzZiNzIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL2V4YW1wbGUvYXBwLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGdvbW8vcmVhY3QtY29udGV4dC1tZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbImdldFdpbmRvd1NpemUiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYm9keSIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2FsY0hlaWdodCIsInRpbWVsaW5lRWxlbWVudCIsIndyYXBwZXJCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3dTaXplIiwidG9wIiwib25sb2FkIiwiZXZlbnRNZW51IiwicmVuZGVyIiwibmFtZSIsIm9uQ2xpY2siLCJjb250ZXh0IiwiY29tcG9uZW50IiwiZmxvYXQiLCJzaG93IiwiaXNGaXhlZCIsInJlc2l6ZSIsImNhbmNlbCIsImlzQ2FuY2VsYWJsZSIsImFsZXJ0IiwiaXNGaXhhYmxlIiwiZml4IiwibGluZUlkIiwicmVtb3ZlIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lbGluZSIsImdldEV2ZW50c09uTGluZSIsImVuYWJsZSIsImdldEVsZW1lbnRCeUlkIiwibGluZURhdGEiLCJsYWJlbCIsImlkIiwidGltZVNwYW4iLCJjcmVhdGUiLCJhZGRFdmVudHMiLCJkYXRhIiwicHJvcHMiLCJ0aW1lIiwiYWRkTWluIiwiY29sb3IiLCJkaXNwbGF5Iiwia2V5IiwidmFsdWUiLCJnZXREaXNwbGF5VGltZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGllbnRZIiwibGVmdCIsImNsaWVudFgiLCJzdGF0ZSIsImZpbHRlciIsInJvdyIsInB1c2giLCJnZXRTdGFydFRpbWUiLCJvbnJlc2l6ZSIsInNldEhlaWdodCIsIm1pbnV0ZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNy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WCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF0QyxFQUEyRU0sT0FBTyxTQUFsRixFQTFCaUIsRUEyQmpCLEVBQUNSLElBQUksTUFBTCxFQUFhWCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF6QixDQUF0QyxFQUEwRU0sT0FBTyxTQUFqRixFQTNCaUIsRUE0QmpCLEVBQUNSLElBQUksTUFBTCxFQUFhWCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF6QixDQUF0QyxFQUEwRU0sT0FBTyxTQUFqRixFQTVCaUIsRUE2QmpCLEVBQUNSLElBQUksTUFBTCxFQUFhWCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF0QyxFQUEyRU0sT0FBTyxTQUFsRixFQTdCaUIsRUE4QmpCLEVBQUNSLElBQUksTUFBTCxFQUFhWCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF0QyxFQUEyRU0sT0FBTyxTQUFsRixFQTlCaUIsRUErQmpCLEVBQUNSLElBQUksTUFBTCxFQUFhWCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF0QyxFQUEyRU0sT0FBTyxTQUFsRixFQS9CaUIsRUFnQ2pCLEVBQUNSLElBQUksTUFBTCxFQUFhWCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF0QyxFQUEyRU0sT0FBTyxTQUFsRixFQWhDaUIsRUFrQ2pCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLEtBQXRCLEVBQTZCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF2QyxFQUE0RU0sT0FBTyxTQUFuRixFQWxDaUIsRUFtQ2pCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLEtBQXRCLEVBQTZCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF6QixDQUF2QyxFQUEyRU0sT0FBTyxTQUFsRixFQW5DaUIsRUFvQ2pCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLEtBQXRCLEVBQTZCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF6QixDQUF2QyxFQUEyRU0sT0FBTyxTQUFsRixFQXBDaUIsRUFzQ2pCLEVBQUNSLElBQUksTUFBTCxFQUFhWCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF0QyxFQUEyRU0sT0FBTyxTQUFsRixFQXRDaUIsRUF1Q2pCLEVBQUNSLElBQUksTUFBTCxFQUFhWCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF0QyxFQUEyRU0sT0FBTyxTQUFsRixFQXZDaUIsRUF3Q2pCLEVBQUNSLElBQUksTUFBTCxFQUFhWCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF6QixDQUF0QyxFQUEwRU0sT0FBTyxTQUFqRixFQXhDaUIsRUF5Q2pCLEVBQUNSLElBQUksTUFBTCxFQUFhWCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF6QixDQUF0QyxFQUEwRU0sT0FBTyxTQUFqRixFQXpDaUIsRUEwQ2pCLEVBQUNSLElBQUksTUFBTCxFQUFhWCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF0QyxFQUEyRU0sT0FBTyxTQUFsRixFQTFDaUIsRUEyQ2pCLEVBQUNSLElBQUksTUFBTCxFQUFhWCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF0QyxFQUEyRU0sT0FBTyxTQUFsRixFQTNDaUIsRUE0Q2pCLEVBQUNSLElBQUksTUFBTCxFQUFhWCxRQUFRLEtBQXJCLEVBQTRCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF0QyxFQUEyRU0sT0FBTyxTQUFsRixFQTVDaUIsRUE2Q2pCLEVBQUNSLElBQUksTUFBTCxF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RUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF4QyxFQUE2RU0sT0FBTyxTQUFwRixFQTFEaUIsRUE0RGpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF4QyxFQUE2RU0sT0FBTyxTQUFwRixFQTVEaUIsRUE2RGpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF6QixDQUF4QyxFQUE0RU0sT0FBTyxTQUFuRixFQTdEaUIsRUE4RGpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF6QixDQUF4QyxFQUE0RU0sT0FBTyxTQUFuRixFQTlEaUIsRUFnRWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF4QyxFQUE2RU0sT0FBTyxTQUFwRixFQWhFaUIsRUFpRWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF6QixDQUF4QyxFQUE0RU0sT0FBTyxTQUFuRixFQWpFaUIsRUFrRWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF6QixDQUF4QyxFQUE0RU0sT0FBTyxTQUFuRixFQWxFaUIsRUFvRWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF4QyxFQUE2RU0sT0FBTyxTQUFwRixFQXBFaUIsRUFxRWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF4QyxFQUE2RU0sT0FBTyxTQUFwRixFQXJFaUIsRUFzRWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF6QixDQUF4QyxFQUE0RU0sT0FBTyxTQUFuRixFQXRFaUIsRUF1RWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF6QixDQUF4QyxFQUE0RU0sT0FBTyxTQUFuRixFQXZFaUIsRUF3RWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF4QyxFQUE2RU0sT0FBTyxTQUFwRixFQXhFaUIsRUF5RWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF4QyxFQUE2RU0sT0FBTyxTQUFwRixFQXpFaUIsRUEwRWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF4QyxFQUE2RU0sT0FBTyxTQUFwRixFQTFFaUIsRUEyRWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF4QyxFQUE2RU0sT0FBTyxTQUFwRixFQTNFaUIsRUE2RWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsRUFBMEIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUExQixDQUF4QyxFQUE2RU0sT0FBTyxTQUFwRixFQTdFaUIsRUE4RWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBaEIsRUFBeUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF6QixDQUF4QyxFQUE0RU0sT0FBTyxTQUFuRixFQTlFaUIsRUErRWpCLEVBQUNSLElBQUksT0FBTCxFQUFjWCxRQUFRLE1BQXRCLEVBQThCWSxVQUFVLGdCQUFTQyxNQUFULENBQWdCLENB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QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDL2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRztBQUNoRztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosaURBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywwQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGNBQWM7QUFDZDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywwQkFBMEIsbUJBQW1CO0FBQzFGO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsc0NBQXNDLHFCQUFxQixrQkFBa0IsR0FBRztBQUNyRztBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsNERBQTREO0FBQ3JFO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHNCQUFzQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQseUdBQXlHO0FBQ3JLO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQyxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQSxDQUFDO0FBQ0QsMkNBQTJDLGNBQWMsbW9xQiIsImZpbGUiOiJ0aW1lbGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM0NzlkODlmOTc2MzdjY2M2YjcyIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgfTtcblxuICAgIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7VGltZWxpbmUsIFRpbWUsIFRpbWVTcGFufSBmcm9tICcuLi9pbmRleC5qcyc7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnQGdvbW8vcmVhY3QtY29udGV4dC1tZW51JztcblxuZnVuY3Rpb24gZ2V0V2luZG93U2l6ZSgpe1xuICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXG4gIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXG4gIHJldHVybiB7d2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodH07XG59XG5cbmZ1bmN0aW9uIGNhbGNIZWlnaHQodGltZWxpbmVFbGVtZW50KXtcbiAgY29uc3Qgd3JhcHBlckJvdW5kcyA9IHRpbWVsaW5lRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3Qgd2luZG93U2l6ZSA9IGdldFdpbmRvd1NpemUoKTtcbiAgcmV0dXJuIHdpbmRvd1NpemUuaGVpZ2h0IC0gd3JhcHBlckJvdW5kcy50b3A7XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cbiAgY29uc3QgZXZlbnRNZW51ID0gUmVhY3RET00ucmVuZGVyKFxuICAgIDxDb250ZXh0TWVudVxuICAgICAgaXRlbXM9e1tcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJ2Zsb2F0JyxcbiAgICAgICAgICBvbkNsaWNrOiBjb250ZXh0ID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuY29tcG9uZW50LmZsb2F0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93OiBjb250ZXh0ID0+IGNvbnRleHQuY29tcG9uZW50LmlzRml4ZWQoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogY29udGV4dCA9PiAncmVzaXplJyxcbiAgICAgICAgICBvbkNsaWNrOiBjb250ZXh0ID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuY29tcG9uZW50LnJlc2l6ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvdzogY29udGV4dCA9PiBjb250ZXh0LmNvbXBvbmVudC5pc0ZpeGVkKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJ2NhbmNlbCcsXG4gICAgICAgICAgb25DbGljazogY29udGV4dCA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbXBvbmVudC5jYW5jZWwoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3c6IGNvbnRleHQgPT4gIWNvbnRleHQuY29tcG9uZW50LmlzRml4ZWQoKSxcbiAgICAgICAgICBvbkNsaWNrOiBjb250ZXh0ID0+IHtcbiAgICAgICAgICAgIGlmKGNvbnRleHQuY29tcG9uZW50LmlzQ2FuY2VsYWJsZSgpKXtcbiAgICAgICAgICAgICAgY29udGV4dC5jb21wb25lbnQuY2FuY2VsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGVydCgnWW91IGNhblxcJ3QgY2FuY2VsIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJ2ZpeCcsXG4gICAgICAgICAgb25DbGljazogY29udGV4dCA9PiB7XG4gICAgICAgICAgICBpZihjb250ZXh0LmNvbXBvbmVudC5pc0ZpeGFibGUoKSl7XG4gICAgICAgICAgICAgIGNvbnRleHQuY29tcG9uZW50LmZpeCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWxlcnQoJ1lvdSBjYW5cXCd0IGZpeCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3c6IGNvbnRleHQgPT4gIWNvbnRleHQuY29tcG9uZW50LmlzRml4ZWQoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogY29udGV4dCA9PiAnLSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJ3JlbW92ZScsXG4gICAgICAgICAgb25DbGljazogY29udGV4dCA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaW5lSWQgPSBjb250ZXh0LmNvbXBvbmVudC5saW5lSWQ7XG4gICAgICAgICAgICBjb250ZXh0LmNvbXBvbmVudC5yZW1vdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGltZWxpbmUuZ2V0RXZlbnRzT25MaW5lKGxpbmVJZCkpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVuYWJsZTogY29udGV4dCA9PiBjb250ZXh0LmNvbXBvbmVudC5pc0ZpeGVkKClcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAgIHpJbmRleD17MTAwMH1cbiAgICAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXG4gICk7XG5cbiAgY29uc3QgbGluZURhdGEgPSBbXG4gICAge2xhYmVsOidsYWJlbDEnLCBpZDonX18xJ30sXG4gICAge2xhYmVsOidsYWJlbDInLCBpZDonX18yJ30sXG4gICAge2xhYmVsOidsYWJlbDMnLCBpZDonX18zJ30sXG4gICAge2xhYmVsOidsYWJlbDQnLCBpZDonX180J30sXG4gICAge2xhYmVsOidsYWJlbDUnLCBpZDonX181J30sXG4gICAge2xhYmVsOidsYWJlbDYnLCBpZDonX182J30sXG4gICAge2xhYmVsOidsYWJlbDcnLCBpZDonX183J30sXG4gICAge2xhYmVsOidsYWJlbDgnLCBpZDonX184J30sXG4gICAge2xhYmVsOidsYWJlbDknLCBpZDonX185J30sXG4gICAge2xhYmVsOidsYWJlbDEwJywgaWQ6J19fMTAnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTEnLCBpZDonX18xMSd9LFxuICAgIHtsYWJlbDonbGFiZWwxMicsIGlkOidfXzEyJ30sXG4gICAge2xhYmVsOidsYWJlbDEzJywgaWQ6J19fMTMnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTQnLCBpZDonX18xNCd9LFxuICAgIHtsYWJlbDonbGFiZWwxNScsIGlkOidfXzE1J30sXG4gICAge2xhYmVsOidsYWJlbDE2JywgaWQ6J19fMTYnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTcnLCBpZDonX18xNyd9LFxuICAgIHtsYWJlbDonbGFiZWwxOCcsIGlkOidfXzE4J31cbiAgXTtcblxuICBjb25zdCB0aW1lU3BhbiA9IFRpbWVTcGFuLmNyZWF0ZShbMTAsIDBdLCBbMjUsIDBdKTtcbiAgY29uc3QgdGltZWxpbmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVsaW5lJyk7XG4gIGNvbnN0IHRpbWVsaW5lID0gUmVhY3RET00ucmVuZGVyKFxuICAgIDxUaW1lbGluZVxuICAgICAgbGluZURhdGE9e2xpbmVEYXRhfVxuICAgICAgdGltZVNwYW49e3RpbWVTcGFufVxuICAgICAgbGluZVdpZHRoPXs2Mn1cbiAgICAgIG1pbkhlaWdodD17MTd9XG4gICAgICBtaW5JbnRlcnZhbD17NX1cbiAgICAgIHJ1bGVySW50ZXJ2YWw9ezR9XG4gICAgICBoZWlnaHQ9e2NhbGNIZWlnaHQodGltZWxpbmVFbGVtZW50KX1cbiAgICAgIGxpbmVEaWRDbGljaz17ZGF0YSA9PiB7XG4gICAgICAgIHRpbWVsaW5lLmFkZEV2ZW50cyhbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGluZUlkOiBkYXRhLmNvbXBvbmVudC5wcm9wcy5pZCxcbiAgICAgICAgICAgIHRpbWVTcGFuOiBuZXcgVGltZVNwYW4oZGF0YS50aW1lLCBkYXRhLnRpbWUuYWRkTWluKDEyMCkpLFxuICAgICAgICAgICAgY29sb3I6ICcjRkZCNkI2JyxcbiAgICAgICAgICAgIGRpc3BsYXk6IFtcbiAgICAgICAgICAgICAge2tleTogJ3N0YXJ0VGltZScsIHZhbHVlOiBkYXRhLnRpbWUuZ2V0RGlzcGxheVRpbWUoKX1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0pO1xuICAgICAgfX1cbiAgICAgIGxpbmVEaWRSaWdodENsaWNrPXtkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0JywgZGF0YSk7XG4gICAgICB9fVxuICAgICAgZXZlbnREaWRDbGljaz17ZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0JywgZGF0YSk7XG4gICAgICB9fVxuICAgICAgZXZlbnREaWRSaWdodENsaWNrPXtkYXRhID0+IHtcbiAgICAgICAgZGF0YS5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudE1lbnUuc2hvdyh7dG9wOiBkYXRhLmV2ZW50LmNsaWVudFksIGxlZnQ6IGRhdGEuZXZlbnQuY2xpZW50WH0sIGRhdGEpO1xuICAgICAgfX1cbiAgICAgIGV2ZW50V2lsbEZpeD17ZGF0YSA9PiB7XG4gICAgICAgIHZhciBkaXNwbGF5ID0gZGF0YS5jb21wb25lbnQuc3RhdGUuZGlzcGxheS5maWx0ZXIocm93ID0+IHJvdy5rZXkgIT0gJ3N0YXJ0VGltZScpO1xuICAgICAgICBkaXNwbGF5LnB1c2goe2tleTogJ3N0YXJ0VGltZScsIHZhbHVlOiBkYXRhLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmdldERpc3BsYXlUaW1lKCl9KVxuICAgICAgICBkYXRhLnN0YXRlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICAgICAgfX1cbiAgICAgIGV2ZW50RGlkRml4PXtkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9fVxuICAgIC8+LFxuICAgIHRpbWVsaW5lRWxlbWVudFxuICApO1xuXG5cbiAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICAgIHRpbWVsaW5lLnNldEhlaWdodChjYWxjSGVpZ2h0KHRpbWVsaW5lRWxlbWVudCkpO1xuICB9O1xuXG4gIHRpbWVsaW5lLmFkZEV2ZW50cyhbXG4gICAge1xuICAgICAgbGluZUlkOiAnX18xJyxcbiAgICAgIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAwXSwgWzEyLCAwXSksXG4gICAgICBjb2xvcjogJyNGRkI2QjYnLFxuICAgICAgZGlzcGxheTogW1xuICAgICAgICB7a2V5OiAnc3RhcnRUaW1lJywgdmFsdWU6ICcxMTowMCd9LFxuICAgICAgICB7a2V5OiAndHlwZScsIHZhbHVlOiAnZm9vYmFyJ30sXG4gICAgICAgIHtrZXk6ICdtZW1vJywgdmFsdWU6ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5J31cbiAgICAgIF1cbiAgICB9XG4gIF0pO1xuXG4gIHRpbWVsaW5lLmFkZEV2ZW50cyhbXG4gICAge2lkOiAnMTIzMScsIGxpbmVJZDogJ19fMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MScsIGxpbmVJZDogJ19fMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxJywgbGluZUlkOiAnX18xJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjEnLCBsaW5lSWQ6ICdfXzEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzEnLCBsaW5lSWQ6ICdfXzEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODEnLCBsaW5lSWQ6ICdfXzEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTEnLCBsaW5lSWQ6ICdfXzEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzJywgbGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQnLCBsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1JywgbGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzMycsIGxpbmVJZDogJ19fMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MycsIGxpbmVJZDogJ19fMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUzJywgbGluZUlkOiAnX18zJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzNCcsIGxpbmVJZDogJ19fNCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0NCcsIGxpbmVJZDogJ19fNCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjU0JywgbGluZUlkOiAnX180JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzNTUnLCBsaW5lSWQ6ICdfXzUnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDU1JywgbGluZUlkOiAnX181JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTU1JywgbGluZUlkOiAnX181JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyNicsIGxpbmVJZDogJ19fNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAxNV0sIFsxMiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTIzNicsIGxpbmVJZDogJ19fNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0NicsIGxpbmVJZDogJ19fNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjU2JywgbGluZUlkOiAnX182JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjYnLCBsaW5lSWQ6ICdfXzYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzYnLCBsaW5lSWQ6ICdfXzYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODYnLCBsaW5lSWQ6ICdfXzYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTYnLCBsaW5lSWQ6ICdfXzYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzNzcnLCBsaW5lSWQ6ICdfXzcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDc3JywgbGluZUlkOiAnX183JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTc3JywgbGluZUlkOiAnX183JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyOCcsIGxpbmVJZDogJ19fOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAxNV0sIFsxMiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTIzOCcsIGxpbmVJZDogJ19fOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0OCcsIGxpbmVJZDogJ19fOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjU4JywgbGluZUlkOiAnX184JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjgnLCBsaW5lSWQ6ICdfXzgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzgnLCBsaW5lSWQ6ICdfXzgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODgnLCBsaW5lSWQ6ICdfXzgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTgnLCBsaW5lSWQ6ICdfXzgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzOScsIGxpbmVJZDogJ19fOScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0OScsIGxpbmVJZDogJ19fOScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjU5JywgbGluZUlkOiAnX185JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyMTAnLCBsaW5lSWQ6ICdfXzEwJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTEsIDE1XSwgWzEyLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjMxMCcsIGxpbmVJZDogJ19fMTAnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDEwJywgbGluZUlkOiAnX18xMCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxMCcsIGxpbmVJZDogJ19fMTAnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI2MTAnLCBsaW5lSWQ6ICdfXzEwJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTgsIDMwXSwgWzE5LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjcxMCcsIGxpbmVJZDogJ19fMTAnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODEwJywgbGluZUlkOiAnX18xMCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIwLCAzMF0sIFsyMSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI5MTAnLCBsaW5lSWQ6ICdfXzEwJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMjIsIDMwXSwgWzIzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMzExJywgbGluZUlkOiAnX18xMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MTEnLCBsaW5lSWQ6ICdfXzExJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTExJywgbGluZUlkOiAnX18xMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE3LCAwXSwgWzE4LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMzEyJywgbGluZUlkOiAnX18xMicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MTInLCBsaW5lSWQ6ICdfXzEyJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTEyJywgbGluZUlkOiAnX18xMicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE3LCAwXSwgWzE4LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMjEzJywgbGluZUlkOiAnX18xMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAxNV0sIFsxMiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTIzMTMnLCBsaW5lSWQ6ICdfXzEzJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQxMycsIGxpbmVJZDogJ19fMTMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1MTMnLCBsaW5lSWQ6ICdfXzEzJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjEzJywgbGluZUlkOiAnX18xMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE4LCAzMF0sIFsxOSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI3MTMnLCBsaW5lSWQ6ICdfXzEzJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTksIDMwXSwgWzIwLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjgxMycsIGxpbmVJZDogJ19fMTMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTEzJywgbGluZUlkOiAnX18xMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIyLCAzMF0sIFsyMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjMxNCcsIGxpbmVJZDogJ19fMTQnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDE0JywgbGluZUlkOiAnX18xNCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxNCcsIGxpbmVJZDogJ19fMTQnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjMxNScsIGxpbmVJZDogJ19fMTUnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDE1JywgbGluZUlkOiAnX18xNScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxNScsIGxpbmVJZDogJ19fMTUnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjIxNicsIGxpbmVJZDogJ19fMTYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMSwgMTVdLCBbMTIsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyMzE2JywgbGluZUlkOiAnX18xNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MTYnLCBsaW5lSWQ6ICdfXzE2JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTE2JywgbGluZUlkOiAnX18xNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE3LCAwXSwgWzE4LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjYxNicsIGxpbmVJZDogJ19fMTYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzE2JywgbGluZUlkOiAnX18xNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE5LCAzMF0sIFsyMCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI4MTYnLCBsaW5lSWQ6ICdfXzE2JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMjAsIDMwXSwgWzIxLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjkxNicsIGxpbmVJZDogJ19fMTYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyMTcnLCBsaW5lSWQ6ICdfXzE3JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTEsIDE1XSwgWzEyLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjMxNycsIGxpbmVJZDogJ19fMTcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDE3JywgbGluZUlkOiAnX18xNycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxNycsIGxpbmVJZDogJ19fMTcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI2MTcnLCBsaW5lSWQ6ICdfXzE3JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTgsIDMwXSwgWzE5LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjcxNycsIGxpbmVJZDogJ19fMTcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODE3JywgbGluZUlkOiAnX18xNycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIwLCAzMF0sIFsyMSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI5MTcnLCBsaW5lSWQ6ICdfXzE3JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMjIsIDMwXSwgWzIzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMjE4JywgbGluZUlkOiAnX18xOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAxNV0sIFsxMiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTIzMTgnLCBsaW5lSWQ6ICdfXzE4JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQxOCcsIGxpbmVJZDogJ19fMTgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1MTgnLCBsaW5lSWQ6ICdfXzE4JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjE4JywgbGluZUlkOiAnX18xOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE4LCAzMF0sIFsxOSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI3MTgnLCBsaW5lSWQ6ICdfXzE4JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTksIDMwXSwgWzIwLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjgxOCcsIGxpbmVJZDogJ19fMTgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTE4JywgbGluZUlkOiAnX18xOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIyLCAzMF0sIFsyMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gIF0pO1xuXG4gIHRpbWVsaW5lLmFkZEV2ZW50cyhbXG4gICAge1xuICAgICAgY29sb3I6ICcjRkZCNkI2JyxcbiAgICAgIGZsb2F0OiB7dG9wOiAxMCwgbGVmdDogMTAsIG1pbnV0ZTogNjB9XG4gICAgfSxcbiAgICB7XG4gICAgICBjb2xvcjogJyNGRkI2QjYnLFxuICAgICAgZmxvYXQ6IHt0b3A6IDEwMCwgbGVmdDogMTAwLCBtaW51dGU6IDYwfVxuICAgIH1cbiAgXSk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyh0aW1lbGluZS5nZXRFdmVudHNPbkxpbmUoJ19fMTgnKSlcbiAgfSwgNTAwKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS9hcHAuanN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAlcyBhdCBpbmRleCAlcy4nLFxuICAgICAgICAgIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSxcbiAgICAgICAgICBpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbiAgdmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaW52YXJpYW50KHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSA9PT0gJ2Z1bmN0aW9uJywgJyVzOiAlcyB0eXBlIGAlc2AgaXMgaW52YWxpZDsgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gJyArICdSZWFjdC5Qcm9wVHlwZXMuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lKTtcbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgd2FybmluZyghZXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciwgJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yKTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImNsYXNzbmFtZXNcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwiY2xhc3NuYW1lc1wiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpIDogZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJjbGFzc05hbWVzXCJdLCByb290W1wiUHJvcFR5cGVzXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Db250ZXh0TWVudSA9IHVuZGVmaW5lZDtcblxudmFyIF9Db250ZXh0TWVudSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfQ29udGV4dE1lbnUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29udGV4dE1lbnUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLkNvbnRleHRNZW51ID0gX0NvbnRleHRNZW51Mi5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX0NvbnRleHRNZW51Mi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX29iamVjdEFzc2lnbiA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbnZhciBfb2JqZWN0QXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFzc2lnbik7XG5cbnZhciBfQ29udGV4dE1lbnVJdGVtID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9Db250ZXh0TWVudUl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29udGV4dE1lbnVJdGVtKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb250ZXh0TWVudSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb250ZXh0TWVudSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnRleHRNZW51LCBudWxsLCBbe1xuICAgIGtleTogJ2dldFdpbmRvd1NpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRXaW5kb3dTaXplKCkge1xuICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbiAgICAgIHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIH1cbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIENvbnRleHRNZW51KHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRleHRNZW51KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb250ZXh0TWVudS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbnRleHRNZW51KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICB6SW5kZXg6IF90aGlzLnByb3BzLnpJbmRleFxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3RoaXMub3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JtTWVudU92ZXJsYXknKTtcbiAgICBfdGhpcy5vdmVybGF5LnN0eWxlW1wicG9zaXRpb25cIl0gPSAnYWJzb2x1dGUnO1xuICAgIF90aGlzLm92ZXJsYXkuc3R5bGVbXCJ0b3BcIl0gPSAnMCc7XG4gICAgX3RoaXMub3ZlcmxheS5zdHlsZVtcImxlZnRcIl0gPSAnMCc7XG4gICAgX3RoaXMub3ZlcmxheS5zdHlsZVtcImRpc3BsYXlcIl0gPSAnbm9uZSc7XG4gICAgX3RoaXMub3ZlcmxheS5zdHlsZVtcInpJbmRleFwiXSA9IF90aGlzLnByb3BzLnpJbmRleCAtIDE7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChfdGhpcy5vdmVybGF5KTtcbiAgICBfdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBfdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICAgIF90aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29udGV4dE1lbnUsIFt7XG4gICAga2V5OiAnc2hvdycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3cocG9zLCBjb250ZXh0KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0eWxlOiAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIHRoaXMuc3RhdGUuc3R5bGUsIHBvcywgeyBkaXNwbGF5OiAnYmxvY2snIH0pLFxuICAgICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3aW5kb3dTaXplID0gQ29udGV4dE1lbnUuZ2V0V2luZG93U2l6ZSgpO1xuICAgICAgICBfdGhpczIub3ZlcmxheS5zdHlsZVtcIndpZHRoXCJdID0gd2luZG93U2l6ZS53aWR0aCArICdweCc7XG4gICAgICAgIF90aGlzMi5vdmVybGF5LnN0eWxlW1wiaGVpZ2h0XCJdID0gd2luZG93U2l6ZS5oZWlnaHQgKyAncHgnO1xuICAgICAgICBfdGhpczIub3ZlcmxheS5zdHlsZVsnZGlzcGxheSddID0gJ2Jsb2NrJztcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTW91c2VPdXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlT3V0KCkge1xuICAgICAgY29uc29sZS5sb2coJ291dCcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTW91c2VPdmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZU92ZXIoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb3ZlcicpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0eWxlOiAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIHRoaXMuc3RhdGUuc3R5bGUsIHsgZGlzcGxheTogJ25vbmUnIH0pIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLm92ZXJsYXkuc3R5bGVbJ2Rpc3BsYXknXSA9ICdub25lJztcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHJlZjogJ21lbnUnLCBjbGFzc05hbWU6ICdybU1lbnUnLCBzdHlsZTogdGhpcy5zdGF0ZS5zdHlsZSB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAndWwnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAncm1NZW51SXRlbUxpc3QnIH0sXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jb250ZXh0ID8gdGhpcy5wcm9wcy5pdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgaWYgKCFpdGVtLnNob3cgfHwgaXRlbS5zaG93KF90aGlzNC5zdGF0ZS5jb250ZXh0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0NvbnRleHRNZW51SXRlbTIuZGVmYXVsdCwge1xuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZShfdGhpczQuc3RhdGUuY29udGV4dCksXG4gICAgICAgICAgICAgICAgb25DbGljazogaXRlbS5vbkNsaWNrLFxuICAgICAgICAgICAgICAgIG1lbnU6IF90aGlzNCxcbiAgICAgICAgICAgICAgICBlbmFibGU6IGl0ZW0uZW5hYmxlID8gaXRlbS5lbmFibGUoX3RoaXM0LnN0YXRlLmNvbnRleHQpIDogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSA6IG51bGxcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29udGV4dE1lbnU7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb250ZXh0TWVudTtcblxuXG5Db250ZXh0TWVudS5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgbmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIHNob3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBlbmFibGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xuICB9KSkuaXNSZXF1aXJlZCxcbiAgekluZGV4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlclxufTtcblxuQ29udGV4dE1lbnUuZGVmYXVsdFByb3BzID0ge1xuICB6SW5kZXg6IDEwMFxufTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb250ZXh0TWVudUl0ZW0gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29udGV4dE1lbnVJdGVtLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb250ZXh0TWVudUl0ZW0ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udGV4dE1lbnVJdGVtKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb250ZXh0TWVudUl0ZW0uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb250ZXh0TWVudUl0ZW0pKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdXNlT3ZlcjogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb250ZXh0TWVudUl0ZW0sIFt7XG4gICAga2V5OiAnb25Nb3VzZU91dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VPdXQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5lbmFibGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vdXNlT3ZlcjogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25Nb3VzZU92ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlT3ZlcigpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW91c2VPdmVyOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy5tZW51LnN0YXRlLmNvbnRleHQpO1xuICAgICAgICB0aGlzLnByb3BzLm1lbnUuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKFwicm1NZW51SXRlbVwiLCB7IHJtTW91c2VPdmVyOiB0aGlzLnN0YXRlLm1vdXNlT3Zlciwgcm1EaXNhYmxlZDogIXRoaXMucHJvcHMuZW5hYmxlLCBybVNlcGFyYXRvcjogdGhpcy5wcm9wcy5uYW1lID09ICctJyB9KSxcbiAgICAgICAgb25Nb3VzZU92ZXI6IGZ1bmN0aW9uIG9uTW91c2VPdmVyKGUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm9uTW91c2VPdmVyKGUpO1xuICAgICAgICB9LFxuICAgICAgICBvbk1vdXNlT3V0OiBmdW5jdGlvbiBvbk1vdXNlT3V0KGUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm9uTW91c2VPdXQoZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIub25DbGljayhlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiB0aGlzLnByb3BzLm5hbWUgPT0gJy0nID8gbnVsbCA6IHRoaXMucHJvcHMubmFtZSB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29udGV4dE1lbnVJdGVtO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29udGV4dE1lbnVJdGVtO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTFOek00TTJGalptRm1ZMk15WldOa01tWTNNQ0lzSW5kbFluQmhZMnM2THk4dlpYaDBaWEp1WVd3Z2Uxd2ljbTl2ZEZ3aU9sd2lVbVZoWTNSY0lpeGNJbU52YlcxdmJtcHpNbHdpT2x3aWNtVmhZM1JjSWl4Y0ltTnZiVzF2Ym1welhDSTZYQ0p5WldGamRGd2lMRndpWVcxa1hDSTZYQ0p5WldGamRGd2lmU0lzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YVc1a1pYZ3VaWE0ySWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cWN5OWpiMjF3YjI1bGJuUnpMME52Ym5SbGVIUk5aVzUxTG1wemVDSXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZiMkpxWldOMExXRnpjMmxuYmk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmFuTXZZMjl0Y0c5dVpXNTBjeTlEYjI1MFpYaDBUV1Z1ZFVsMFpXMHVhbk40SWl3aWQyVmljR0ZqYXpvdkx5OWxlSFJsY201aGJDQjdYQ0p5YjI5MFhDSTZYQ0pqYkdGemMwNWhiV1Z6WENJc1hDSmpiMjF0YjI1cWN6SmNJanBjSW1Oc1lYTnpibUZ0WlhOY0lpeGNJbU52YlcxdmJtcHpYQ0k2WENKamJHRnpjMjVoYldWelhDSXNYQ0poYldSY0lqcGNJbU5zWVhOemJtRnRaWE5jSW4waUxDSjNaV0p3WVdOck9pOHZMMlY0ZEdWeWJtRnNJSHRjSW5KdmIzUmNJanBjSWxCeWIzQlVlWEJsYzF3aUxGd2lZMjl0Ylc5dWFuTXlYQ0k2WENKd2NtOXdMWFI1Y0dWelhDSXNYQ0pqYjIxdGIyNXFjMXdpT2x3aWNISnZjQzEwZVhCbGMxd2lMRndpWVcxa1hDSTZYQ0p3Y205d0xYUjVjR1Z6WENKOUlsMHNJbTVoYldWeklqcGJJa052Ym5SbGVIUk5aVzUxSWl3aWQybGtkR2dpTENKM2FXNWtiM2NpTENKcGJtNWxjbGRwWkhSb0lpd2laRzlqZFcxbGJuUWlMQ0prYjJOMWJXVnVkRVZzWlcxbGJuUWlMQ0pqYkdsbGJuUlhhV1IwYUNJc0ltSnZaSGtpTENKb1pXbG5hSFFpTENKcGJtNWxja2hsYVdkb2RDSXNJbU5zYVdWdWRFaGxhV2RvZENJc0luQnliM0J6SWl3aWMzUmhkR1VpTENKemRIbHNaU0lzSW5CdmMybDBhVzl1SWl3aVpHbHpjR3hoZVNJc0lucEpibVJsZUNJc0ltOTJaWEpzWVhraUxDSmpjbVZoZEdWRmJHVnRaVzUwSWl3aWMyVjBRWFIwY21saWRYUmxJaXdpWVhCd1pXNWtRMmhwYkdRaUxDSmhaR1JGZG1WdWRFeHBjM1JsYm1WeUlpd2lZMnh2YzJVaUxDSmxJaXdpY0hKbGRtVnVkRVJsWm1GMWJIUWlMQ0p3YjNNaUxDSmpiMjUwWlhoMElpd2ljMlYwVTNSaGRHVWlMQ0ozYVc1a2IzZFRhWHBsSWl3aVoyVjBWMmx1Wkc5M1UybDZaU0lzSW1OdmJuTnZiR1VpTENKc2IyY2lMQ0pwZEdWdGN5SXNJbTFoY0NJc0ltbDBaVzBpTENKclpYa2lMQ0p6YUc5M0lpd2libUZ0WlNJc0ltOXVRMnhwWTJzaUxDSmxibUZpYkdVaUxDSkRiMjF3YjI1bGJuUWlMQ0p3Y205d1ZIbHdaWE1pTENKaGNuSmhlVTltSWl3aWMyaGhjR1VpTENKbWRXNWpJaXdpYVhOU1pYRjFhWEpsWkNJc0ltNTFiV0psY2lJc0ltUmxabUYxYkhSUWNtOXdjeUlzSWtOdmJuUmxlSFJOWlc1MVNYUmxiU0lzSW0xdmRYTmxUM1psY2lJc0ltMWxiblVpTENKeWJVMXZkWE5sVDNabGNpSXNJbkp0UkdsellXSnNaV1FpTENKeWJWTmxjR0Z5WVhSdmNpSXNJbTl1VFc5MWMyVlBkbVZ5SWl3aWIyNU5iM1Z6WlU5MWRDSXNJbDlmYUhSdGJDSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8wRkJRM1pFTEhsRFFVRnBReXhsUVVGbE8wRkJRMmhFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEaEVRVUZ6UkN3clJFRkJLMFE3TzBGQlJYSklPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPenM3T3p0QlF6ZEVRU3dyUXpzN096czdPenM3T3pzN096czdRVU5CUVRzN096czdPMUZCUTFGQkxGYzdPenM3T3pzN096czdPenM3T3pzN1FVTkVVanM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3T3pzN096czdPMGxCUlhGQ1FTeFhPenM3T3p0dlEwRkZSenRCUVVOd1FpeFZRVUZOUXl4UlFVRlJReXhQUVVGUFF5eFZRVUZRTEVsQlExaERMRk5CUVZORExHVkJRVlFzUTBGQmVVSkRMRmRCUkdRc1NVRkZXRVlzVTBGQlUwY3NTVUZCVkN4RFFVRmpSQ3hYUVVacVFqczdRVUZKUVN4VlFVRk5SU3hUUVVGVFRpeFBRVUZQVHl4WFFVRlFMRWxCUTFwTUxGTkJRVk5ETEdWQlFWUXNRMEZCZVVKTExGbEJSR0lzU1VGRldrNHNVMEZCVTBjc1NVRkJWQ3hEUVVGalJ5eFpRVVpxUWpzN1FVRkpRU3hoUVVGUExFVkJRVU5VTEU5QlFVOUJMRXRCUVZJc1JVRkJaVThzVVVGQlVVRXNUVUZCZGtJc1JVRkJVRHRCUVVORU96czdRVUZGUkN4MVFrRkJXVWNzUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVGQkxEQklRVU5ZUVN4TFFVUlhPenRCUVVWcVFpeFZRVUZMUXl4TFFVRk1MRWRCUVdFN1FVRkRXRU1zWVVGQlR6dEJRVU5NUXl4clFrRkJWU3hWUVVSTU8wRkJSVXhETEdsQ1FVRlRMRTFCUmtvN1FVRkhURU1zWjBKQlFWRXNUVUZCUzB3c1MwRkJUQ3hEUVVGWFN6dEJRVWhrTzBGQlJFa3NTMEZCWWpzN1FVRlJRU3hWUVVGTFF5eFBRVUZNTEVkQlFXVmlMRk5CUVZOakxHRkJRVlFzUTBGQmRVSXNTMEZCZGtJc1EwRkJaanRCUVVOQkxGVkJRVXRFTEU5QlFVd3NRMEZCWVVVc1dVRkJZaXhEUVVFd1FpeFBRVUV4UWl4RlFVRnRReXhsUVVGdVF6dEJRVU5CTEZWQlFVdEdMRTlCUVV3c1EwRkJZVW9zUzBGQllpeERRVUZ0UWl4VlFVRnVRaXhKUVVGcFF5eFZRVUZxUXp0QlFVTkJMRlZCUVV0SkxFOUJRVXdzUTBGQllVb3NTMEZCWWl4RFFVRnRRaXhMUVVGdVFpeEpRVUUwUWl4SFFVRTFRanRCUVVOQkxGVkJRVXRKTEU5QlFVd3NRMEZCWVVvc1MwRkJZaXhEUVVGdFFpeE5RVUZ1UWl4SlFVRTJRaXhIUVVFM1FqdEJRVU5CTEZWQlFVdEpMRTlCUVV3c1EwRkJZVW9zUzBGQllpeERRVUZ0UWl4VFFVRnVRaXhKUVVGblF5eE5RVUZvUXp0QlFVTkJMRlZCUVV0SkxFOUJRVXdzUTBGQllVb3NTMEZCWWl4RFFVRnRRaXhSUVVGdVFpeEpRVUVyUWl4TlFVRkxSaXhMUVVGTUxFTkJRVmRMTEUxQlFWZ3NSMEZCYjBJc1EwRkJia1E3UVVGRFFWb3NZVUZCVTBjc1NVRkJWQ3hEUVVGallTeFhRVUZrTEVOQlFUQkNMRTFCUVV0SUxFOUJRUzlDTzBGQlEwRXNWVUZCUzBFc1QwRkJUQ3hEUVVGaFNTeG5Ra0ZCWWl4RFFVRTRRaXhQUVVFNVFpeEZRVUYxUXp0QlFVRkJMR0ZCUVVzc1RVRkJTME1zUzBGQlRDeEZRVUZNTzBGQlFVRXNTMEZCZGtNN1FVRkRRU3hWUVVGTFRDeFBRVUZNTEVOQlFXRkpMR2RDUVVGaUxFTkJRVGhDTEdGQlFUbENMRVZCUVRaRExHRkJRVXM3UVVGRGFFUkZMRkZCUVVWRExHTkJRVVk3UVVGRFFTeFpRVUZMUml4TFFVRk1PMEZCUTBRc1MwRklSRHRCUVc1Q2FVSTdRVUYxUW14Q096czdPM2xDUVVWSlJ5eEhMRVZCUVV0RExFOHNSVUZCVVR0QlFVRkJPenRCUVVOb1FpeFhRVUZMUXl4UlFVRk1MRU5CUVdNN1FVRkRXbVFzWlVGQlR5dzBRa0ZCVHl4RlFVRlFMRVZCUVZjc1MwRkJTMFFzUzBGQlRDeERRVUZYUXl4TFFVRjBRaXhGUVVFMlFsa3NSMEZCTjBJc1JVRkJhME1zUlVGQlExWXNVMEZCVXl4UFFVRldMRVZCUVd4RExFTkJSRXM3UVVGRldsY3NhVUpCUVZOQk8wRkJSa2NzVDBGQlpDeEZRVWRITEZsQlFVMDdRVUZEVUN4WlFVRkpSU3hoUVVGaE5VSXNXVUZCV1RaQ0xHRkJRVm9zUlVGQmFrSTdRVUZEUVN4bFFVRkxXaXhQUVVGTUxFTkJRV0ZLTEV0QlFXSXNRMEZCYlVJc1QwRkJia0lzU1VGQk9FSmxMRmRCUVZjelFpeExRVUZZTEVkQlFXMUNMRWxCUVdwRU8wRkJRMEVzWlVGQlMyZENMRTlCUVV3c1EwRkJZVW9zUzBGQllpeERRVUZ0UWl4UlFVRnVRaXhKUVVFclFtVXNWMEZCVjNCQ0xFMUJRVmdzUjBGQmIwSXNTVUZCYmtRN1FVRkRRU3hsUVVGTFV5eFBRVUZNTEVOQlFXRktMRXRCUVdJc1EwRkJiVUlzVTBGQmJrSXNTVUZCWjBNc1QwRkJhRU03UVVGRFJDeFBRVkpFTzBGQlUwUTdPenRwUTBGRlZ6dEJRVU5XYVVJc1kwRkJVVU1zUjBGQlVpeERRVUZaTEV0QlFWbzdRVUZEUkRzN08ydERRVVZaTzBGQlExaEVMR05CUVZGRExFZEJRVklzUTBGQldTeE5RVUZhTzBGQlEwUTdPenMwUWtGRlRUdEJRVUZCT3p0QlFVTk1MRmRCUVV0S0xGRkJRVXdzUTBGRFJTeEZRVUZEWkN4UFFVRlBMRFJDUVVGUExFVkJRVkFzUlVGQlZ5eExRVUZMUkN4TFFVRk1MRU5CUVZkRExFdEJRWFJDTEVWQlFUWkNMRVZCUVVORkxGTkJRVk1zVFVGQlZpeEZRVUUzUWl4RFFVRlNMRVZCUkVZc1JVRkZSU3haUVVGTk8wRkJRMG9zWlVGQlMwVXNUMEZCVEN4RFFVRmhTaXhMUVVGaUxFTkJRVzFDTEZOQlFXNUNMRWxCUVdkRExFMUJRV2hETzBGQlEwUXNUMEZLU0R0QlFVMUVPenM3TmtKQlJVODdRVUZCUVRzN1FVRkRUaXhoUVVORk8wRkJRVUU3UVVGQlFTeFZRVUZMTEV0QlFVa3NUVUZCVkN4RlFVRm5RaXhYUVVGVkxGRkJRVEZDTEVWQlFXMURMRTlCUVU4c1MwRkJTMFFzUzBGQlRDeERRVUZYUXl4TFFVRnlSRHRCUVVORk8wRkJRVUU3UVVGQlFTeFpRVUZKTEZkQlFWVXNaMEpCUVdRN1FVRkRSeXhsUVVGTFJDeExRVUZNTEVOQlFWZGpMRTlCUVZnc1IwRkJjVUlzUzBGQlMyWXNTMEZCVEN4RFFVRlhjVUlzUzBGQldDeERRVUZwUWtNc1IwRkJha0lzUTBGQmNVSXNWVUZCUTBNc1NVRkJSQ3hGUVVGUFF5eEhRVUZRTEVWQlFXVTdRVUZEZUVRc1owSkJRVWNzUTBGQlEwUXNTMEZCUzBVc1NVRkJUaXhKUVVGalJpeExRVUZMUlN4SlFVRk1MRU5CUVZVc1QwRkJTM2hDTEV0QlFVd3NRMEZCVjJNc1QwRkJja0lzUTBGQmFrSXNSVUZCSzBNN1FVRkROME1zY1VKQlEwVTdRVUZEUlN4eFFrRkJTMU1zUjBGRVVEdEJRVVZGTEhOQ1FVRk5SQ3hMUVVGTFJ5eEpRVUZNTEVOQlFWVXNUMEZCUzNwQ0xFdEJRVXdzUTBGQlYyTXNUMEZCY2tJc1EwRkdVanRCUVVkRkxIbENRVUZUVVN4TFFVRkxTU3hQUVVob1FqdEJRVWxGTERSQ1FVcEdPMEZCUzBVc2QwSkJRVkZLTEV0QlFVdExMRTFCUVV3c1IwRkJZMHdzUzBGQlMwc3NUVUZCVEN4RFFVRlpMRTlCUVVzelFpeExRVUZNTEVOQlFWZGpMRTlCUVhaQ0xFTkJRV1FzUjBGQlowUTdRVUZNTVVRc1owSkJSRVk3UVVGVFJEdEJRVU5HTEZkQlduRkNMRU5CUVhKQ0xFZEJXVWs3UVVGaVVEdEJRVVJHTEU5QlJFWTdRVUZ0UWtRN096czdSVUY0Um5ORExHZENRVUZOWXl4VE96dHJRa0ZCTVVKNFF5eFhPenM3UVVFeVJuSkNRU3haUVVGWmVVTXNVMEZCV2l4SFFVRjNRanRCUVVOMFFsUXNVMEZCVHl4dlFrRkJWVlVzVDBGQlZpeERRVUZyUWl4dlFrRkJWVU1zUzBGQlZpeERRVUZuUWp0QlFVTjJRMDRzVlVGQlRTeHZRa0ZCVlU4c1NVRkJWaXhEUVVGbFF5eFZRVVJyUWp0QlFVVjJRMUFzWVVGQlV5eHZRa0ZCVlUwc1NVRkdiMEk3UVVGSGRrTlNMRlZCUVUwc2IwSkJRVlZSTEVsQlNIVkNPMEZCU1haRFRDeFpRVUZSTEc5Q1FVRlZTenRCUVVweFFpeEhRVUZvUWl4RFFVRnNRaXhGUVV0SVF5eFZRVTVyUWp0QlFVOTBRamRDTEZWQlFWRXNiMEpCUVZVNFFqdEJRVkJKTEVOQlFYaENPenRCUVZWQk9VTXNXVUZCV1N0RExGbEJRVm9zUjBGQk1rSTdRVUZEZWtJdlFpeFZRVUZSTzBGQlJHbENMRU5CUVROQ0xFTTdPenM3T3pzN1FVTXhSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEVzWjBOQlFXZERPMEZCUTJoRE8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hwUWtGQmFVSXNVVUZCVVR0QlFVTjZRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnc2EwTkJRV3RETzBGQlEyeERPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3huUWtGQlowSXNjMEpCUVhOQ08wRkJRM1JET3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMR3RDUVVGclFpeHZRa0ZCYjBJN1FVRkRkRU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3T3pzN096czdPenM3T3pzN096czdRVU5zUmtFN096czdRVUZEUVRzN096czdPenM3T3pzN08wbEJSWEZDWjBNc1pUczdPMEZCUlc1Q0xESkNRVUZaY2tNc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVRkJMR3RKUVVOWVFTeExRVVJYT3p0QlFVVnFRaXhWUVVGTFF5eExRVUZNTEVkQlFXRTdRVUZEV0hGRExHbENRVUZYTzBGQlJFRXNTMEZCWWp0QlFVWnBRanRCUVV0c1FqczdPenRwUTBGRlZ6dEJRVU5XTEZWQlFVY3NTMEZCUzNSRExFdEJRVXdzUTBGQlZ6UkNMRTFCUVdRc1JVRkJjVUk3UVVGRGJrSXNZVUZCUzFvc1VVRkJUQ3hEUVVGakxFVkJRVU56UWl4WFFVRlhMRXRCUVZvc1JVRkJaRHRCUVVORU8wRkJRMFk3T3p0clEwRkZXVHRCUVVOWUxGVkJRVWNzUzBGQlMzUkRMRXRCUVV3c1EwRkJWelJDTEUxQlFXUXNSVUZCY1VJN1FVRkRia0lzWVVGQlMxb3NVVUZCVEN4RFFVRmpMRVZCUVVOelFpeFhRVUZYTEVsQlFWb3NSVUZCWkR0QlFVTkVPMEZCUTBZN096czBRa0ZGVHpGQ0xFTXNSVUZCUlR0QlFVTlNMRlZCUVVjc1MwRkJTMW9zUzBGQlRDeERRVUZYTkVJc1RVRkJaQ3hGUVVGeFFqdEJRVU51UWl4aFFVRkxOVUlzUzBGQlRDeERRVUZYTWtJc1QwRkJXQ3hEUVVGdFFpeExRVUZMTTBJc1MwRkJUQ3hEUVVGWGRVTXNTVUZCV0N4RFFVRm5RblJETEV0QlFXaENMRU5CUVhOQ1l5eFBRVUY2UXp0QlFVTkJMR0ZCUVV0bUxFdEJRVXdzUTBGQlYzVkRMRWxCUVZnc1EwRkJaMEkxUWl4TFFVRm9RanRCUVVORU8wRkJRMFk3T3pzMlFrRkZUenRCUVVGQk96dEJRVU5PTEdGQlEwVTdRVUZEUlN4dFFrRkJWeXd3UWtGQlZ5eFpRVUZZTEVWQlFYbENMRVZCUVVNMlFpeGhRVUZoTEV0QlFVdDJReXhMUVVGTUxFTkJRVmR4UXl4VFFVRjZRaXhGUVVGdlEwY3NXVUZCV1N4RFFVRkRMRXRCUVV0NlF5eExRVUZNTEVOQlFWYzBRaXhOUVVFMVJDeEZRVUZ2UldNc1lVRkJZU3hMUVVGTE1VTXNTMEZCVEN4RFFVRlhNRUlzU1VGQldDeEpRVUZ0UWl4SFFVRndSeXhGUVVGNlFpeERRVVJpTzBGQlJVVXNjVUpCUVdFN1FVRkJRU3hwUWtGQlN5eFBRVUZMYVVJc1YwRkJUQ3hEUVVGcFFpOUNMRU5CUVdwQ0xFTkJRVXc3UVVGQlFTeFRRVVptTzBGQlIwVXNiMEpCUVZrN1FVRkJRU3hwUWtGQlN5eFBRVUZMWjBNc1ZVRkJUQ3hEUVVGblFtaERMRU5CUVdoQ0xFTkJRVXc3UVVGQlFTeFRRVWhrTzBGQlNVVXNhVUpCUVZNN1FVRkJRU3hwUWtGQlN5eFBRVUZMWlN4UFFVRk1MRU5CUVdGbUxFTkJRV0lzUTBGQlREdEJRVUZCTEZOQlNsZzdRVUZMUlN4cFEwRkJlVUlzUlVGQlEybERMRkZCUVZFc1MwRkJTemRETEV0QlFVd3NRMEZCVnpCQ0xFbEJRVmdzU1VGQmJVSXNSMEZCYmtJc1IwRkJlVUlzU1VGQmVrSXNSMEZCWjBNc1MwRkJTekZDTEV0QlFVd3NRMEZCVnpCQ0xFbEJRWEJFTzBGQlRETkNMRkZCUkVZN1FVRlZSRHM3T3p0RlFYWkRNRU1zWjBKQlFVMUhMRk03TzJ0Q1FVRTVRbEVzWlRzN096czdPMEZEU0hKQ0xDdERPenM3T3pzN1FVTkJRU3dyUXlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29jbVZ4ZFdseVpTaGNJbkpsWVdOMFhDSXBMQ0J5WlhGMWFYSmxLRndpWTJ4aGMzTnVZVzFsYzF3aUtTd2djbVZ4ZFdseVpTaGNJbkJ5YjNBdGRIbHdaWE5jSWlrcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvVzF3aWNtVmhZM1JjSWl3Z1hDSmpiR0Z6YzI1aGJXVnpYQ0lzSUZ3aWNISnZjQzEwZVhCbGMxd2lYU3dnWm1GamRHOXllU2s3WEc1Y2RHVnNjMlVnZTF4dVhIUmNkSFpoY2lCaElEMGdkSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JRDhnWm1GamRHOXllU2h5WlhGMWFYSmxLRndpY21WaFkzUmNJaWtzSUhKbGNYVnBjbVVvWENKamJHRnpjMjVoYldWelhDSXBMQ0J5WlhGMWFYSmxLRndpY0hKdmNDMTBlWEJsYzF3aUtTa2dPaUJtWVdOMGIzSjVLSEp2YjNSYlhDSlNaV0ZqZEZ3aVhTd2djbTl2ZEZ0Y0ltTnNZWE56VG1GdFpYTmNJbDBzSUhKdmIzUmJYQ0pRY205d1ZIbHdaWE5jSWwwcE8xeHVYSFJjZEdadmNpaDJZWElnYVNCcGJpQmhLU0FvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUQ4Z1pYaHdiM0owY3lBNklISnZiM1FwVzJsZElEMGdZVnRwWFR0Y2JseDBmVnh1ZlNrb2RHaHBjeXdnWm5WdVkzUnBiMjRvWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjh3WDE4c0lGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZk5WOWZMQ0JmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYelpmWHlrZ2UxeHVjbVYwZFhKdUlGeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIdGNiaUJjZEZ4MFhIUmNkR052Ym1acFozVnlZV0pzWlRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWEhSbGJuVnRaWEpoWW14bE9pQjBjblZsTEZ4dUlGeDBYSFJjZEZ4MFoyVjBPaUJuWlhSMFpYSmNiaUJjZEZ4MFhIUjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBeEtUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDJKdmIzUnpkSEpoY0NBMU56TTRNMkZqWm1GbVkyTXlaV05rTW1ZM01DSXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOHdYMTg3WEc1Y2JseHVMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVbHh1THk4Z1pYaDBaWEp1WVd3Z2Uxd2ljbTl2ZEZ3aU9sd2lVbVZoWTNSY0lpeGNJbU52YlcxdmJtcHpNbHdpT2x3aWNtVmhZM1JjSWl4Y0ltTnZiVzF2Ym1welhDSTZYQ0p5WldGamRGd2lMRndpWVcxa1hDSTZYQ0p5WldGamRGd2lmVnh1THk4Z2JXOWtkV3hsSUdsa0lEMGdNRnh1THk4Z2JXOWtkV3hsSUdOb2RXNXJjeUE5SURBaUxDSnBiWEJ2Y25RZ1EyOXVkR1Y0ZEUxbGJuVWdabkp2YlNBbkxpOXFjeTlqYjIxd2IyNWxiblJ6TDBOdmJuUmxlSFJOWlc1MUp6dGNibVY0Y0c5eWRDQjdRMjl1ZEdWNGRFMWxiblY5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JEYjI1MFpYaDBUV1Z1ZFZ4dVhHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJQzR2YzNKakwybHVaR1Y0TG1Wek5pSXNJbWx0Y0c5eWRDQlNaV0ZqZENCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdZWE56YVdkdUlHWnliMjBnSjI5aWFtVmpkQzFoYzNOcFoyNG5YRzVwYlhCdmNuUWdUV1Z1ZFVsMFpXMGdabkp2YlNBbkxpOURiMjUwWlhoMFRXVnVkVWwwWlcwblhHNXBiWEJ2Y25RZ1VISnZjRlI1Y0dWeklHWnliMjBnSjNCeWIzQXRkSGx3WlhNblhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVOdmJuUmxlSFJOWlc1MUlHVjRkR1Z1WkhNZ1VtVmhZM1F1UTI5dGNHOXVaVzUwWEc1N1hHNGdJSE4wWVhScFl5Qm5aWFJYYVc1a2IzZFRhWHBsS0NsN1hHNGdJQ0FnWTI5dWMzUWdkMmxrZEdnZ1BTQjNhVzVrYjNjdWFXNXVaWEpYYVdSMGFGeHVJQ0FnSUh4OElHUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1amJHbGxiblJYYVdSMGFGeHVJQ0FnSUh4OElHUnZZM1Z0Wlc1MExtSnZaSGt1WTJ4cFpXNTBWMmxrZEdnN1hHNWNiaUFnSUNCamIyNXpkQ0JvWldsbmFIUWdQU0IzYVc1a2IzY3VhVzV1WlhKSVpXbG5hSFJjYmlBZ0lDQjhmQ0JrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVZMnhwWlc1MFNHVnBaMmgwWEc0Z0lDQWdmSHdnWkc5amRXMWxiblF1WW05a2VTNWpiR2xsYm5SSVpXbG5hSFE3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdlM2RwWkhSb09pQjNhV1IwYUN3Z2FHVnBaMmgwT2lCb1pXbG5hSFI5TzF4dUlDQjlYRzVjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCemRYQmxjaWh3Y205d2N5azdYRzRnSUNBZ2RHaHBjeTV6ZEdGMFpTQTlJSHRjYmlBZ0lDQWdJSE4wZVd4bE9pQjdYRzRnSUNBZ0lDQWdJSEJ2YzJsMGFXOXVPaUFuWVdKemIyeDFkR1VuTEZ4dUlDQWdJQ0FnSUNCa2FYTndiR0Y1T2lBbmJtOXVaU2NzWEc0Z0lDQWdJQ0FnSUhwSmJtUmxlRG9nZEdocGN5NXdjbTl3Y3k1NlNXNWtaWGhjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdkR2hwY3k1dmRtVnliR0Y1SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5azdYRzRnSUNBZ2RHaHBjeTV2ZG1WeWJHRjVMbk5sZEVGMGRISnBZblYwWlNnblkyeGhjM01uTENBbmNtMU5aVzUxVDNabGNteGhlU2NwTzF4dUlDQWdJSFJvYVhNdWIzWmxjbXhoZVM1emRIbHNaVnRjSW5CdmMybDBhVzl1WENKZElEMGdKMkZpYzI5c2RYUmxKenRjYmlBZ0lDQjBhR2x6TG05MlpYSnNZWGt1YzNSNWJHVmJYQ0owYjNCY0lsMGdQU0FuTUNjN1hHNGdJQ0FnZEdocGN5NXZkbVZ5YkdGNUxuTjBlV3hsVzF3aWJHVm1kRndpWFNBOUlDY3dKenRjYmlBZ0lDQjBhR2x6TG05MlpYSnNZWGt1YzNSNWJHVmJYQ0prYVhOd2JHRjVYQ0pkSUQwZ0oyNXZibVVuTzF4dUlDQWdJSFJvYVhNdWIzWmxjbXhoZVM1emRIbHNaVnRjSW5wSmJtUmxlRndpWFNBOUlIUm9hWE11Y0hKdmNITXVla2x1WkdWNElDMGdNVHRjYmlBZ0lDQmtiMk4xYldWdWRDNWliMlI1TG1Gd2NHVnVaRU5vYVd4a0tIUm9hWE11YjNabGNteGhlU2s3WEc0Z0lDQWdkR2hwY3k1dmRtVnliR0Y1TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnWlNBOVBpQjBhR2x6TG1Oc2IzTmxLQ2twTzF4dUlDQWdJSFJvYVhNdWIzWmxjbXhoZVM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamIyNTBaWGgwYldWdWRTY3NJR1VnUFQ0Z2UxeHVJQ0FnSUNBZ1pTNXdjbVYyWlc1MFJHVm1ZWFZzZENncE8xeHVJQ0FnSUNBZ2RHaHBjeTVqYkc5elpTZ3BPMXh1SUNBZ0lIMHBPMXh1SUNCOVhHNWNiaUFnYzJodmR5aHdiM01zSUdOdmJuUmxlSFFwZTF4dUlDQWdJSFJvYVhNdWMyVjBVM1JoZEdVb2UxeHVJQ0FnSUNBZ2MzUjViR1U2SUdGemMybG5iaWg3ZlN3Z2RHaHBjeTV6ZEdGMFpTNXpkSGxzWlN3Z2NHOXpMQ0I3WkdsemNHeGhlVG9nSjJKc2IyTnJKMzBwTEZ4dUlDQWdJQ0FnWTI5dWRHVjRkRG9nWTI5dWRHVjRkRnh1SUNBZ0lIMHNJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lHeGxkQ0IzYVc1a2IzZFRhWHBsSUQwZ1EyOXVkR1Y0ZEUxbGJuVXVaMlYwVjJsdVpHOTNVMmw2WlNncE8xeHVJQ0FnSUNBZ2RHaHBjeTV2ZG1WeWJHRjVMbk4wZVd4bFcxd2lkMmxrZEdoY0lsMGdQU0IzYVc1a2IzZFRhWHBsTG5kcFpIUm9JQ3NnSjNCNEp6dGNiaUFnSUNBZ0lIUm9hWE11YjNabGNteGhlUzV6ZEhsc1pWdGNJbWhsYVdkb2RGd2lYU0E5SUhkcGJtUnZkMU5wZW1VdWFHVnBaMmgwSUNzZ0ozQjRKenRjYmlBZ0lDQWdJSFJvYVhNdWIzWmxjbXhoZVM1emRIbHNaVnNuWkdsemNHeGhlU2RkSUQwZ0oySnNiMk5ySnp0Y2JpQWdJQ0I5S1R0Y2JpQWdmVnh1WEc0Z0lHOXVUVzkxYzJWUGRYUW9LWHRjYmlBZ0lDQmpiMjV6YjJ4bExteHZaeWduYjNWMEp5azdYRzRnSUgxY2JseHVJQ0J2YmsxdmRYTmxUM1psY2lncGUxeHVJQ0FnSUdOdmJuTnZiR1V1Ykc5bktDZHZkbVZ5SnlrN1hHNGdJSDFjYmx4dUlDQmpiRzl6WlNncGUxeHVJQ0FnSUhSb2FYTXVjMlYwVTNSaGRHVW9YRzRnSUNBZ0lDQjdjM1I1YkdVNklHRnpjMmxuYmloN2ZTd2dkR2hwY3k1emRHRjBaUzV6ZEhsc1pTd2dlMlJwYzNCc1lYazZJQ2R1YjI1bEozMHBmU3hjYmlBZ0lDQWdJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmRtVnliR0Y1TG5OMGVXeGxXeWRrYVhOd2JHRjVKMTBnUFNBbmJtOXVaU2M3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdLVHRjYmlBZ2ZWeHVYRzRnSUhKbGJtUmxjaWdwZTF4dUlDQWdJSEpsZEhWeWJpQW9YRzRnSUNBZ0lDQThaR2wySUhKbFpqMWNJbTFsYm5WY0lpQmpiR0Z6YzA1aGJXVTlYQ0p5YlUxbGJuVmNJaUJ6ZEhsc1pUMTdkR2hwY3k1emRHRjBaUzV6ZEhsc1pYMCtYRzRnSUNBZ0lDQWdJRHgxYkNCamJHRnpjMDVoYldVOVhDSnliVTFsYm5WSmRHVnRUR2x6ZEZ3aVBseHVJQ0FnSUNBZ0lDQWdJSHQwYUdsekxuTjBZWFJsTG1OdmJuUmxlSFFnUHlCMGFHbHpMbkJ5YjNCekxtbDBaVzF6TG0xaGNDZ29hWFJsYlN3Z2EyVjVLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlnaGFYUmxiUzV6YUc5M0lIeDhJR2wwWlcwdWMyaHZkeWgwYUdsekxuTjBZWFJsTG1OdmJuUmxlSFFwS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4VFdWdWRVbDBaVzFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd0bGVUMTdhMlY1ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtRnRaVDE3YVhSbGJTNXVZVzFsS0hSb2FYTXVjM1JoZEdVdVkyOXVkR1Y0ZENsOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnZia05zYVdOclBYdHBkR1Z0TG05dVEyeHBZMnQ5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdFpXNTFQWHQwYUdsemZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaVzVoWW14bFBYdHBkR1Z0TG1WdVlXSnNaU0EvSUdsMFpXMHVaVzVoWW14bEtIUm9hWE11YzNSaGRHVXVZMjl1ZEdWNGRDa2dPaUIwY25WbGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDbGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQjlLU0E2SUc1MWJHeDlYRzRnSUNBZ0lDQWdJRHd2ZFd3K1hHNGdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQXBPMXh1SUNCOVhHNTlYRzVjYmtOdmJuUmxlSFJOWlc1MUxuQnliM0JVZVhCbGN5QTlJSHRjYmlBZ2FYUmxiWE02SUZCeWIzQlVlWEJsY3k1aGNuSmhlVTltS0ZCeWIzQlVlWEJsY3k1emFHRndaU2g3WEc0Z0lDQWdibUZ0WlRvZ1VISnZjRlI1Y0dWekxtWjFibU11YVhOU1pYRjFhWEpsWkN4Y2JpQWdJQ0J2YmtOc2FXTnJPaUJRY205d1ZIbHdaWE11Wm5WdVl5eGNiaUFnSUNCemFHOTNPaUJRY205d1ZIbHdaWE11Wm5WdVl5eGNiaUFnSUNCbGJtRmliR1U2SUZCeWIzQlVlWEJsY3k1bWRXNWpYRzRnSUgwcEtTNXBjMUpsY1hWcGNtVmtMRnh1SUNCNlNXNWtaWGc2SUZCeWIzQlVlWEJsY3k1dWRXMWlaWEpjYm4xY2JseHVRMjl1ZEdWNGRFMWxiblV1WkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNCNlNXNWtaWGc2SURFd01GeHVmVnh1WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZjM0pqTDJwekwyTnZiWEJ2Ym1WdWRITXZRMjl1ZEdWNGRFMWxiblV1YW5ONElpd2lKM1Z6WlNCemRISnBZM1FuTzF4dUx5b2daWE5zYVc1MExXUnBjMkZpYkdVZ2JtOHRkVzUxYzJWa0xYWmhjbk1nS2k5Y2JuWmhjaUJvWVhOUGQyNVFjbTl3WlhKMGVTQTlJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrN1hHNTJZWElnY0hKdmNFbHpSVzUxYldWeVlXSnNaU0E5SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1Y0hKdmNHVnlkSGxKYzBWdWRXMWxjbUZpYkdVN1hHNWNibVoxYm1OMGFXOXVJSFJ2VDJKcVpXTjBLSFpoYkNrZ2UxeHVYSFJwWmlBb2RtRnNJRDA5UFNCdWRXeHNJSHg4SUhaaGJDQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNWNkRngwZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblQySnFaV04wTG1GemMybG5iaUJqWVc1dWIzUWdZbVVnWTJGc2JHVmtJSGRwZEdnZ2JuVnNiQ0J2Y2lCMWJtUmxabWx1WldRbktUdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQlBZbXBsWTNRb2RtRnNLVHRjYm4xY2JseHVablZ1WTNScGIyNGdjMmh2ZFd4a1ZYTmxUbUYwYVhabEtDa2dlMXh1WEhSMGNua2dlMXh1WEhSY2RHbG1JQ2doVDJKcVpXTjBMbUZ6YzJsbmJpa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHWmhiSE5sTzF4dVhIUmNkSDFjYmx4dVhIUmNkQzh2SUVSbGRHVmpkQ0JpZFdkbmVTQndjbTl3WlhKMGVTQmxiblZ0WlhKaGRHbHZiaUJ2Y21SbGNpQnBiaUJ2YkdSbGNpQldPQ0IyWlhKemFXOXVjeTVjYmx4dVhIUmNkQzh2SUdoMGRIQnpPaTh2WW5WbmN5NWphSEp2YldsMWJTNXZjbWN2Y0M5Mk9DOXBjM04xWlhNdlpHVjBZV2xzUDJsa1BUUXhNVGhjYmx4MFhIUjJZWElnZEdWemRERWdQU0J1WlhjZ1UzUnlhVzVuS0NkaFltTW5LVHNnSUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFd4cGJtVmNibHgwWEhSMFpYTjBNVnMxWFNBOUlDZGtaU2M3WEc1Y2RGeDBhV1lnS0U5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVVNWhiV1Z6S0hSbGMzUXhLVnN3WFNBOVBUMGdKelVuS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnWm1Gc2MyVTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MEx5OGdhSFIwY0hNNkx5OWlkV2R6TG1Ob2NtOXRhWFZ0TG05eVp5OXdMM1k0TDJsemMzVmxjeTlrWlhSaGFXdy9hV1E5TXpBMU5seHVYSFJjZEhaaGNpQjBaWE4wTWlBOUlIdDlPMXh1WEhSY2RHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dNVEE3SUdrckt5a2dlMXh1WEhSY2RGeDBkR1Z6ZERKYkoxOG5JQ3NnVTNSeWFXNW5MbVp5YjIxRGFHRnlRMjlrWlNocEtWMGdQU0JwTzF4dVhIUmNkSDFjYmx4MFhIUjJZWElnYjNKa1pYSXlJRDBnVDJKcVpXTjBMbWRsZEU5M2JsQnliM0JsY25SNVRtRnRaWE1vZEdWemRESXBMbTFoY0NobWRXNWpkR2x2YmlBb2Jpa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlIUmxjM1F5VzI1ZE8xeHVYSFJjZEgwcE8xeHVYSFJjZEdsbUlDaHZjbVJsY2pJdWFtOXBiaWduSnlrZ0lUMDlJQ2N3TVRJek5EVTJOemc1SnlrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUdaaGJITmxPMXh1WEhSY2RIMWNibHh1WEhSY2RDOHZJR2gwZEhCek9pOHZZblZuY3k1amFISnZiV2wxYlM1dmNtY3ZjQzkyT0M5cGMzTjFaWE12WkdWMFlXbHNQMmxrUFRNd05UWmNibHgwWEhSMllYSWdkR1Z6ZERNZ1BTQjdmVHRjYmx4MFhIUW5ZV0pqWkdWbVoyaHBhbXRzYlc1dmNIRnljM1FuTG5Od2JHbDBLQ2NuS1M1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNoc1pYUjBaWElwSUh0Y2JseDBYSFJjZEhSbGMzUXpXMnhsZEhSbGNsMGdQU0JzWlhSMFpYSTdYRzVjZEZ4MGZTazdYRzVjZEZ4MGFXWWdLRTlpYW1WamRDNXJaWGx6S0U5aWFtVmpkQzVoYzNOcFoyNG9lMzBzSUhSbGMzUXpLU2t1YW05cGJpZ25KeWtnSVQwOVhHNWNkRngwWEhSY2RDZGhZbU5rWldabmFHbHFhMnh0Ym05d2NYSnpkQ2NwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJtWVd4elpUdGNibHgwWEhSOVhHNWNibHgwWEhSeVpYUjFjbTRnZEhKMVpUdGNibHgwZlNCallYUmphQ0FvWlNrZ2UxeHVYSFJjZEM4dklGZGxJR1J2YmlkMElHVjRjR1ZqZENCaGJua2diMllnZEdobElHRmliM1psSUhSdklIUm9jbTkzTENCaWRYUWdZbVYwZEdWeUlIUnZJR0psSUhOaFptVXVYRzVjZEZ4MGNtVjBkWEp1SUdaaGJITmxPMXh1WEhSOVhHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnYzJodmRXeGtWWE5sVG1GMGFYWmxLQ2tnUHlCUFltcGxZM1F1WVhOemFXZHVJRG9nWm5WdVkzUnBiMjRnS0hSaGNtZGxkQ3dnYzI5MWNtTmxLU0I3WEc1Y2RIWmhjaUJtY205dE8xeHVYSFIyWVhJZ2RHOGdQU0IwYjA5aWFtVmpkQ2gwWVhKblpYUXBPMXh1WEhSMllYSWdjM2x0WW05c2N6dGNibHh1WEhSbWIzSWdLSFpoY2lCeklEMGdNVHNnY3lBOElHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN0lITXJLeWtnZTF4dVhIUmNkR1p5YjIwZ1BTQlBZbXBsWTNRb1lYSm5kVzFsYm5SelczTmRLVHRjYmx4dVhIUmNkR1p2Y2lBb2RtRnlJR3RsZVNCcGJpQm1jbTl0S1NCN1hHNWNkRngwWEhScFppQW9hR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2htY205dExDQnJaWGtwS1NCN1hHNWNkRngwWEhSY2RIUnZXMnRsZVYwZ1BTQm1jbTl0VzJ0bGVWMDdYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYRzVjZEZ4MGFXWWdLRTlpYW1WamRDNW5aWFJQZDI1UWNtOXdaWEowZVZONWJXSnZiSE1wSUh0Y2JseDBYSFJjZEhONWJXSnZiSE1nUFNCUFltcGxZM1F1WjJWMFQzZHVVSEp2Y0dWeWRIbFRlVzFpYjJ4ektHWnliMjBwTzF4dVhIUmNkRngwWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCemVXMWliMnh6TG14bGJtZDBhRHNnYVNzcktTQjdYRzVjZEZ4MFhIUmNkR2xtSUNod2NtOXdTWE5GYm5WdFpYSmhZbXhsTG1OaGJHd29abkp2YlN3Z2MzbHRZbTlzYzF0cFhTa3BJSHRjYmx4MFhIUmNkRngwWEhSMGIxdHplVzFpYjJ4elcybGRYU0E5SUdaeWIyMWJjM2x0WW05c2MxdHBYVjA3WEc1Y2RGeDBYSFJjZEgxY2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnZEc4N1hHNTlPMXh1WEc1Y2JseHVMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVbHh1THk4Z0xpOXViMlJsWDIxdlpIVnNaWE12YjJKcVpXTjBMV0Z6YzJsbmJpOXBibVJsZUM1cWMxeHVMeThnYlc5a2RXeGxJR2xrSUQwZ00xeHVMeThnYlc5a2RXeGxJR05vZFc1cmN5QTlJREFpTENKcGJYQnZjblFnVW1WaFkzUWdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUdOc1lYTnpUbUZ0WlhNZ1puSnZiU0FuWTJ4aGMzTnVZVzFsY3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVOdmJuUmxlSFJOWlc1MVNYUmxiU0JsZUhSbGJtUnpJRkpsWVdOMExrTnZiWEJ2Ym1WdWRGeHVlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNiaUFnSUNCMGFHbHpMbk4wWVhSbElEMGdlMXh1SUNBZ0lDQWdiVzkxYzJWUGRtVnlPaUJtWVd4elpWeHVJQ0FnSUgwN1hHNGdJSDFjYmx4dUlDQnZiazF2ZFhObFQzVjBLQ2w3WEc0Z0lDQWdhV1lvZEdocGN5NXdjbTl3Y3k1bGJtRmliR1VwZTF4dUlDQWdJQ0FnZEdocGN5NXpaWFJUZEdGMFpTaDdiVzkxYzJWUGRtVnlPaUJtWVd4elpYMHBPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJRzl1VFc5MWMyVlBkbVZ5S0NsN1hHNGdJQ0FnYVdZb2RHaHBjeTV3Y205d2N5NWxibUZpYkdVcGUxeHVJQ0FnSUNBZ2RHaHBjeTV6WlhSVGRHRjBaU2g3Ylc5MWMyVlBkbVZ5T2lCMGNuVmxmU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYjI1RGJHbGpheWhsS1h0Y2JpQWdJQ0JwWmloMGFHbHpMbkJ5YjNCekxtVnVZV0pzWlNsN1hHNGdJQ0FnSUNCMGFHbHpMbkJ5YjNCekxtOXVRMnhwWTJzb2RHaHBjeTV3Y205d2N5NXRaVzUxTG5OMFlYUmxMbU52Ym5SbGVIUXBPMXh1SUNBZ0lDQWdkR2hwY3k1d2NtOXdjeTV0Wlc1MUxtTnNiM05sS0NrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVnVaR1Z5S0NsN1hHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJRHhzYVZ4dUlDQWdJQ0FnSUNCamJHRnpjMDVoYldVOWUyTnNZWE56VG1GdFpYTW9YQ0p5YlUxbGJuVkpkR1Z0WENJc0lIdHliVTF2ZFhObFQzWmxjam9nZEdocGN5NXpkR0YwWlM1dGIzVnpaVTkyWlhJc0lISnRSR2x6WVdKc1pXUTZJQ0YwYUdsekxuQnliM0J6TG1WdVlXSnNaU3dnY20xVFpYQmhjbUYwYjNJNklIUm9hWE11Y0hKdmNITXVibUZ0WlNBOVBTQW5MU2Q5S1gxY2JpQWdJQ0FnSUNBZ2IyNU5iM1Z6WlU5MlpYSTllMlVnUFQ0Z2RHaHBjeTV2YmsxdmRYTmxUM1psY2lobEtYMWNiaUFnSUNBZ0lDQWdiMjVOYjNWelpVOTFkRDE3WlNBOVBpQjBhR2x6TG05dVRXOTFjMlZQZFhRb1pTbDlYRzRnSUNBZ0lDQWdJRzl1UTJ4cFkyczllMlVnUFQ0Z2RHaHBjeTV2YmtOc2FXTnJLR1VwZlZ4dUlDQWdJQ0FnSUNCa1lXNW5aWEp2ZFhOc2VWTmxkRWx1Ym1WeVNGUk5URDE3ZTE5ZmFIUnRiRG9nZEdocGN5NXdjbTl3Y3k1dVlXMWxJRDA5SUNjdEp5QS9JRzUxYkd3Z09pQjBhR2x6TG5CeWIzQnpMbTVoYldWOWZWeHVJQ0FnSUNBZ1BseHVJQ0FnSUNBZ1BDOXNhVDVjYmlBZ0lDQXBPMXh1SUNCOVhHNTlYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXpjbU12YW5NdlkyOXRjRzl1Wlc1MGN5OURiMjUwWlhoMFRXVnVkVWwwWlcwdWFuTjRJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYelZmWHp0Y2JseHVYRzR2THk4dkx5OHZMeTh2THk4dkx5OHZMeTljYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0dkx5QmxlSFJsY201aGJDQjdYQ0p5YjI5MFhDSTZYQ0pqYkdGemMwNWhiV1Z6WENJc1hDSmpiMjF0YjI1cWN6SmNJanBjSW1Oc1lYTnpibUZ0WlhOY0lpeGNJbU52YlcxdmJtcHpYQ0k2WENKamJHRnpjMjVoYldWelhDSXNYQ0poYldSY0lqcGNJbU5zWVhOemJtRnRaWE5jSW4xY2JpOHZJRzF2WkhWc1pTQnBaQ0E5SURWY2JpOHZJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYelpmWHp0Y2JseHVYRzR2THk4dkx5OHZMeTh2THk4dkx5OHZMeTljYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0dkx5QmxlSFJsY201aGJDQjdYQ0p5YjI5MFhDSTZYQ0pRY205d1ZIbHdaWE5jSWl4Y0ltTnZiVzF2Ym1wek1sd2lPbHdpY0hKdmNDMTBlWEJsYzF3aUxGd2lZMjl0Ylc5dWFuTmNJanBjSW5CeWIzQXRkSGx3WlhOY0lpeGNJbUZ0WkZ3aU9sd2ljSEp2Y0MxMGVYQmxjMXdpZlZ4dUx5OGdiVzlrZFd4bElHbGtJRDBnTmx4dUx5OGdiVzlrZFd4bElHTm9kVzVyY3lBOUlEQWlYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AZ29tby9yZWFjdC1jb250ZXh0LW1lbnUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=