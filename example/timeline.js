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
	
	var _reactContextMenu = __webpack_require__(142);
	
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
	
	  var eventMenu = _reactDom2.default.render(React.createElement(_reactContextMenu.ContextMenu, {
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
	        context.component.remove();
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
	      data.state.display = data.component.state.display.map(function (row) {
	        return row.key == 'startTime' ? { key: 'startTime', value: data.timeSpan.getStartTime().getDisplayTime() } : row;
	      });
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
	
	var _Frame = __webpack_require__(7);
	
	var _Frame2 = _interopRequireDefault(_Frame);
	
	var _Ruler = __webpack_require__(11);
	
	var _Ruler2 = _interopRequireDefault(_Ruler);
	
	var _Line = __webpack_require__(8);
	
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
	
	    _this.timeSpan = _this.props.timeSpan;
	
	    //minViewがいくつあるかカウント。minViewは15分おき。それを元に高さを計算。border分1px足す
	    _this.lineHeight = _this.timeSpan.getDistance() / 15 * (_this.props.minHeight + 1);
	
	    //1分あたりの高さを算出
	    _this.perMinHeight = _this.lineHeight / _this.timeSpan.getDistance();
	
	    _this.lineWidth = props.lineWidth;
	
	    _this.createdEventId = 0;
	    _this.draggingOverLineComponent = null;
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
	      this.frameComponent.removeEvent(eventId);
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
	    key: 'eventComponents',
	    get: function get() {
	      var events = [];
	
	      for (var key in this.frameComponent.refs) {
	        if (key.indexOf("event@") === 0) {
	          events.push(this.frameComponent.refs[key].getDecoratedComponentInstance());
	        }
	      }
	
	      return events;
	    }
	  }, {
	    key: 'frameComponent',
	    get: function get() {
	      return this.refs.frame.getDecoratedComponentInstance().getDecoratedComponentInstance();
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
	
	var _Line = __webpack_require__(8);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _classnames = __webpack_require__(10);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactDnd = __webpack_require__(13);
	
	var _reactDndTouchBackend = __webpack_require__(137);
	
	var _reactDndTouchBackend2 = _interopRequireDefault(_reactDndTouchBackend);
	
	var _EventPreview = __webpack_require__(138);
	
	var _EventPreview2 = _interopRequireDefault(_EventPreview);
	
	var _Event = __webpack_require__(141);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _Ruler = __webpack_require__(11);
	
	var _Ruler2 = _interopRequireDefault(_Ruler);
	
	var _LineLabel = __webpack_require__(12);
	
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
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Frame).call(this, props));
	
	    var rulerInterval = 4;
	
	    _this.state = {
	      minWidth: 0,
	      events: _this.props.initialEvents
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
	      this.setState({ events: this.state.events.filter(function (ev) {
	          return ev.id != eventId;
	        }) });
	    }
	  }, {
	    key: 'updateEvents',
	    value: function updateEvents(callback) {
	      this.setState({ events: callback(this.state.events) });
	    }
	  }, {
	    key: 'addEvents',
	    value: function addEvents(events) {
	      var _this4 = this;
	
	      return new Promise(function (resolve) {
	        var current = [].concat(_toConsumableArray(_this4.state.events));
	        var eventIds = [];
	        events.forEach(function (event) {
	          if (!event.id) {
	            event.id = _this4.props.timeline.createEventId();
	          }
	          eventIds.push(event.id);
	          current.push(event);
	        });
	        _this4.setState({ events: current }, function () {
	          var results = _this4.props.timeline.eventComponents.filter(function (eventComponent) {
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
	      var _this5 = this;
	
	      var connectDropTarget = this.props.connectDropTarget;
	
	      return connectDropTarget(_react2.default.createElement(
	        'div',
	        { ref: function ref(elem) {
	            return _this5.element = elem;
	          }, className: 'tlFrameView scrollWrapper', style: { width: this.props.width, overflowX: 'auto' } },
	        _react2.default.createElement(
	          'div',
	          { className: 'clearfix', style: { minWidth: this.state.minWidth + this.props.childWidth } },
	          _react2.default.createElement(
	            'div',
	            { className: 'pull-left' },
	            _react2.default.createElement(
	              'div',
	              { className: 'tlLabelView', style: { height: _LineLabel2.default.height } },
	              this.props.lineData.map(function (data, key) {
	                var hasRuler = key % _this5.props.rulerInterval === 0;
	                var prevRuler = (key + 1) % _this5.props.rulerInterval === 0;
	                return _react2.default.createElement(_LineLabel2.default, {
	                  key: data.id + "@" + key,
	                  width: _this5.props.lineWidth,
	                  hasRuler: hasRuler,
	                  prevRuler: prevRuler,
	                  label: data.label,
	                  timeline: _this5.props.timeline
	                });
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              { ref: 'linesWrapper', className: 'tlLinesWrapper scrollWrapper', style: { height: this.props.height - _LineLabel2.default.height } },
	              _react2.default.createElement(
	                'div',
	                { style: { height: this.props.lineHeight, overflowY: "hidden", position: "relative" } },
	                this.props.lineData.map(function (data, key) {
	                  var hasRuler = key % _this5.props.rulerInterval === 0;
	                  var prevRuler = (key + 1) % _this5.props.rulerInterval === 0;
	                  return _react2.default.createElement(_Line2.default, {
	                    ref: "line@" + data.id,
	                    hasRuler: hasRuler,
	                    key: data.id + "@" + key,
	                    id: data.id,
	                    width: _this5.props.lineWidth,
	                    minHeight: _this5.props.minHeight,
	                    timeSpan: _this5.props.timeSpan,
	                    even: key % 2 === 0,
	                    timeline: _this5.props.timeline,
	                    vars: data.vars,
	                    frame: _this5
	                  });
	                }),
	                this.state.events.map(function (event) {
	                  return _react2.default.createElement(_Event2.default, {
	                    ref: "event@" + event.id,
	                    key: event.key || event.id,
	                    id: event.id,
	                    color: event.color,
	                    timeSpan: event.timeSpan,
	                    display: event.display,
	                    lineId: event.lineId,
	                    timeline: _this5.props.timeline,
	                    width: _this5.props.timeline.props.lineWidth - 2 - _Line2.default.sidePadding * 2,
	                    vars: event.vars,
	                    float: event.float
	                  });
	                }),
	                _react2.default.createElement(_EventPreview2.default, null)
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'pull-left' },
	            this.props.children
	          )
	        )
	      ));
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
	
	var _TimeSpan = __webpack_require__(5);
	
	var _TimeSpan2 = _interopRequireDefault(_TimeSpan);
	
	var _Hour = __webpack_require__(9);
	
	var _Hour2 = _interopRequireDefault(_Hour);
	
	var _Ruler = __webpack_require__(11);
	
	var _Ruler2 = _interopRequireDefault(_Ruler);
	
	var _LineLabel = __webpack_require__(12);
	
	var _LineLabel2 = _interopRequireDefault(_LineLabel);
	
	var _classnames = __webpack_require__(10);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Timeline = __webpack_require__(3);
	
	var _Timeline2 = _interopRequireDefault(_Timeline);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Line = function (_React$Component) {
	  _inherits(Line, _React$Component);
	
	  function Line(props) {
	    _classCallCheck(this, Line);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Line).call(this, props));
	
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
	          }
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

/***/ },
/* 9 */
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
	
	var _classnames = __webpack_require__(10);
	
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
	
	// Hour.propTypes = {
	//   minHeight: React.PropTypes.number.isRequired,
	//   time: React.PropTypes.instanceOf(Time).isRequired
	// }
	
	
	exports.default = Hour;

/***/ },
/* 10 */
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
/* 11 */
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
	
	var _Ruler = __webpack_require__(11);
	
	var _Ruler2 = _interopRequireDefault(_Ruler);
	
	var _classnames = __webpack_require__(10);
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _DragDropContext = __webpack_require__(14);
	
	exports.DragDropContext = _interopRequire(_DragDropContext);
	
	var _DragLayer = __webpack_require__(114);
	
	exports.DragLayer = _interopRequire(_DragLayer);
	
	var _DragSource = __webpack_require__(117);
	
	exports.DragSource = _interopRequire(_DragSource);
	
	var _DropTarget = __webpack_require__(132);
	
	exports.DropTarget = _interopRequire(_DropTarget);

/***/ },
/* 14 */
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
	
	var _dndCore = __webpack_require__(15);
	
	var _invariant = __webpack_require__(29);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(113);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _DragDropManager = __webpack_require__(16);
	
	exports.DragDropManager = _interopRequire(_DragDropManager);
	
	var _DragSource = __webpack_require__(110);
	
	exports.DragSource = _interopRequire(_DragSource);
	
	var _DropTarget = __webpack_require__(111);
	
	exports.DropTarget = _interopRequire(_DropTarget);
	
	var _backendsCreateTestBackend = __webpack_require__(112);
	
	exports.createTestBackend = _interopRequire(_backendsCreateTestBackend);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _reduxLibCreateStore = __webpack_require__(17);
	
	var _reduxLibCreateStore2 = _interopRequireDefault(_reduxLibCreateStore);
	
	var _reducers = __webpack_require__(24);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _actionsDragDrop = __webpack_require__(26);
	
	var dragDropActions = _interopRequireWildcard(_actionsDragDrop);
	
	var _DragDropMonitor = __webpack_require__(105);
	
	var _DragDropMonitor2 = _interopRequireDefault(_DragDropMonitor);
	
	var _HandlerRegistry = __webpack_require__(106);
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;
	
	var _isPlainObject = __webpack_require__(18);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(22);
	
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(19),
	    isHostObject = __webpack_require__(20),
	    isObjectLike = __webpack_require__(21);
	
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';
	
	module.exports = __webpack_require__(23)(global || window || this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 23 */
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _dragOffset = __webpack_require__(25);
	
	var _dragOffset2 = _interopRequireDefault(_dragOffset);
	
	var _dragOperation = __webpack_require__(32);
	
	var _dragOperation2 = _interopRequireDefault(_dragOperation);
	
	var _refCount = __webpack_require__(90);
	
	var _refCount2 = _interopRequireDefault(_refCount);
	
	var _dirtyHandlerIds = __webpack_require__(91);
	
	var _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds);
	
	var _stateId = __webpack_require__(104);
	
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = dragOffset;
	exports.getSourceClientOffset = getSourceClientOffset;
	exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;
	
	var _actionsDragDrop = __webpack_require__(26);
	
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.beginDrag = beginDrag;
	exports.publishDragSource = publishDragSource;
	exports.hover = hover;
	exports.drop = drop;
	exports.endDrag = endDrag;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsMatchesType = __webpack_require__(27);
	
	var _utilsMatchesType2 = _interopRequireDefault(_utilsMatchesType);
	
	var _invariant = __webpack_require__(29);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsArray = __webpack_require__(28);
	
	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);
	
	var _lodashIsObject = __webpack_require__(31);
	
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = matchesType;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashIsArray = __webpack_require__(28);
	
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
/* 28 */
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
/* 29 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ },
/* 30 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it don't break things.
	var cachedSetTimeout = setTimeout;
	var cachedClearTimeout = clearTimeout;
	
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
	    var timeout = cachedSetTimeout(cleanUpNextTick);
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
	    cachedClearTimeout(timeout);
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
	        cachedSetTimeout(drainQueue, 0);
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
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = dragOperation;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _actionsDragDrop = __webpack_require__(26);
	
	var _actionsRegistry = __webpack_require__(33);
	
	var _lodashWithout = __webpack_require__(34);
	
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
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(35),
	    isArrayLikeObject = __webpack_require__(79),
	    rest = __webpack_require__(84);
	
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
	 * _.without([2, 1, 2, 3], 1, 2);
	 * // => [3]
	 */
	var without = rest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, values)
	    : [];
	});
	
	module.exports = without;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(36),
	    arrayIncludes = __webpack_require__(72),
	    arrayIncludesWith = __webpack_require__(75),
	    arrayMap = __webpack_require__(76),
	    baseUnary = __webpack_require__(77),
	    cacheHas = __webpack_require__(78);
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(37),
	    setCacheAdd = __webpack_require__(70),
	    setCacheHas = __webpack_require__(71);
	
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(38),
	    mapCacheDelete = __webpack_require__(64),
	    mapCacheGet = __webpack_require__(67),
	    mapCacheHas = __webpack_require__(68),
	    mapCacheSet = __webpack_require__(69);
	
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(39),
	    ListCache = __webpack_require__(55),
	    Map = __webpack_require__(63);
	
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(40),
	    hashDelete = __webpack_require__(51),
	    hashGet = __webpack_require__(52),
	    hashHas = __webpack_require__(53),
	    hashSet = __webpack_require__(54);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(41);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(42);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(43),
	    getValue = __webpack_require__(50);
	
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


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(44),
	    isHostObject = __webpack_require__(20),
	    isMasked = __webpack_require__(45),
	    isObject = __webpack_require__(31),
	    toSource = __webpack_require__(49);
	
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
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31);
	
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(46);
	
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


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(47);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var checkGlobal = __webpack_require__(48);
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(typeof global == 'object' && global);
	
	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(typeof self == 'object' && self);
	
	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(typeof this == 'object' && this);
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();
	
	module.exports = root;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 48 */
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
/* 49 */
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
/* 50 */
/***/ function(module, exports) {

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


/***/ },
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(41);
	
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(41);
	
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(41);
	
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(56),
	    listCacheDelete = __webpack_require__(57),
	    listCacheGet = __webpack_require__(60),
	    listCacheHas = __webpack_require__(61),
	    listCacheSet = __webpack_require__(62);
	
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
/* 56 */
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(58);
	
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(59);
	
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
/* 59 */
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(58);
	
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(58);
	
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(58);
	
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(42),
	    root = __webpack_require__(47);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(65);
	
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(66);
	
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
/* 66 */
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(65);
	
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(65);
	
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(65);
	
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
/* 70 */
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
/* 71 */
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(73);
	
	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}
	
	module.exports = arrayIncludes;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(74);
	
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
/* 74 */
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
	      index = fromIndex + (fromRight ? 1 : -1);
	
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
/* 75 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arrayIncludesWith;


/***/ },
/* 76 */
/***/ function(module, exports) {

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
	      length = array ? array.length : 0,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 77 */
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
/* 78 */
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(80),
	    isObjectLike = __webpack_require__(21);
	
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(81),
	    isFunction = __webpack_require__(44),
	    isLength = __webpack_require__(83);
	
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(82);
	
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
/* 82 */
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
/* 83 */
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(85),
	    toInteger = __webpack_require__(86);
	
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
/* 85 */
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(87);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(88);
	
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(44),
	    isObject = __webpack_require__(31),
	    isSymbol = __webpack_require__(89);
	
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(21);
	
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = refCount;
	
	var _actionsRegistry = __webpack_require__(33);
	
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = dirtyHandlerIds;
	exports.areDirty = areDirty;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashXor = __webpack_require__(92);
	
	var _lodashXor2 = _interopRequireDefault(_lodashXor);
	
	var _lodashIntersection = __webpack_require__(101);
	
	var _lodashIntersection2 = _interopRequireDefault(_lodashIntersection);
	
	var _actionsDragDrop = __webpack_require__(26);
	
	var _actionsRegistry = __webpack_require__(33);
	
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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(93),
	    baseXor = __webpack_require__(94),
	    isArrayLikeObject = __webpack_require__(79),
	    rest = __webpack_require__(84);
	
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
	var xor = rest(function(arrays) {
	  return baseXor(arrayFilter(arrays, isArrayLikeObject));
	});
	
	module.exports = xor;


/***/ },
/* 93 */
/***/ function(module, exports) {

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
	      length = array ? array.length : 0,
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(95),
	    baseDifference = __webpack_require__(35),
	    baseUniq = __webpack_require__(96);
	
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
/* 95 */
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(36),
	    arrayIncludes = __webpack_require__(72),
	    arrayIncludesWith = __webpack_require__(75),
	    cacheHas = __webpack_require__(78),
	    createSet = __webpack_require__(97),
	    setToArray = __webpack_require__(100);
	
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
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(98),
	    noop = __webpack_require__(99),
	    setToArray = __webpack_require__(100);
	
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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(42),
	    root = __webpack_require__(47);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * A method that returns `undefined`.
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


/***/ },
/* 100 */
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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(76),
	    baseIntersection = __webpack_require__(102),
	    castArrayLikeObject = __webpack_require__(103),
	    rest = __webpack_require__(84);
	
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
	 * _.intersection([2, 1], [2, 3]);
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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(36),
	    arrayIncludes = __webpack_require__(72),
	    arrayIncludesWith = __webpack_require__(75),
	    arrayMap = __webpack_require__(76),
	    baseUnary = __webpack_require__(77),
	    cacheHas = __webpack_require__(78);
	
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
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(79);
	
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
/* 104 */
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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(29);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _utilsMatchesType = __webpack_require__(27);
	
	var _utilsMatchesType2 = _interopRequireDefault(_utilsMatchesType);
	
	var _lodashIsArray = __webpack_require__(28);
	
	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);
	
	var _HandlerRegistry = __webpack_require__(106);
	
	var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);
	
	var _reducersDragOffset = __webpack_require__(25);
	
	var _reducersDirtyHandlerIds = __webpack_require__(91);
	
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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }
	
	var _invariant = __webpack_require__(29);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsArray = __webpack_require__(28);
	
	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);
	
	var _utilsGetNextUniqueId = __webpack_require__(107);
	
	var _utilsGetNextUniqueId2 = _interopRequireDefault(_utilsGetNextUniqueId);
	
	var _actionsRegistry = __webpack_require__(33);
	
	var _asap = __webpack_require__(108);
	
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
/* 107 */
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(109);
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
/* 109 */
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
/* 110 */
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
/* 111 */
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
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createBackend;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _lodashNoop = __webpack_require__(99);
	
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
/* 113 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ },
/* 114 */
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
	
	var _utilsShallowEqual = __webpack_require__(115);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	var _utilsShallowEqualScalar = __webpack_require__(116);
	
	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);
	
	var _lodashIsPlainObject = __webpack_require__(18);
	
	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);
	
	var _invariant = __webpack_require__(29);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(113);
	
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
/* 115 */
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
/* 116 */
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
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DragSource;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(29);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsPlainObject = __webpack_require__(18);
	
	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(113);
	
	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
	
	var _decorateHandler = __webpack_require__(118);
	
	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);
	
	var _registerSource = __webpack_require__(124);
	
	var _registerSource2 = _interopRequireDefault(_registerSource);
	
	var _createSourceFactory = __webpack_require__(125);
	
	var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);
	
	var _createSourceMonitor = __webpack_require__(126);
	
	var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);
	
	var _createSourceConnector = __webpack_require__(127);
	
	var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);
	
	var _utilsIsValidType = __webpack_require__(131);
	
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
/* 118 */
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
	
	var _disposables = __webpack_require__(119);
	
	var _utilsShallowEqual = __webpack_require__(115);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	var _utilsShallowEqualScalar = __webpack_require__(116);
	
	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);
	
	var _lodashIsPlainObject = __webpack_require__(18);
	
	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);
	
	var _invariant = __webpack_require__(29);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	exports.__esModule = true;
	
	var _isDisposable2 = __webpack_require__(120);
	
	var _isDisposable3 = _interopRequireWildcard(_isDisposable2);
	
	exports.isDisposable = _isDisposable3['default'];
	
	var _Disposable2 = __webpack_require__(121);
	
	var _Disposable3 = _interopRequireWildcard(_Disposable2);
	
	exports.Disposable = _Disposable3['default'];
	
	var _CompositeDisposable2 = __webpack_require__(122);
	
	var _CompositeDisposable3 = _interopRequireWildcard(_CompositeDisposable2);
	
	exports.CompositeDisposable = _CompositeDisposable3['default'];
	
	var _SerialDisposable2 = __webpack_require__(123);
	
	var _SerialDisposable3 = _interopRequireWildcard(_SerialDisposable2);
	
	exports.SerialDisposable = _SerialDisposable3['default'];

/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isDisposable;
	
	function isDisposable(obj) {
	  return Boolean(obj && typeof obj.dispose === 'function');
	}
	
	module.exports = exports['default'];

/***/ },
/* 121 */
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
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	exports.__esModule = true;
	
	var _isDisposable = __webpack_require__(120);
	
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
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	exports.__esModule = true;
	
	var _isDisposable = __webpack_require__(120);
	
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
/* 124 */
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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = createSourceFactory;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(29);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsPlainObject = __webpack_require__(18);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createSourceMonitor;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(29);
	
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
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createSourceConnector;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _wrapConnectorHooks = __webpack_require__(128);
	
	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);
	
	var _areOptionsEqual = __webpack_require__(130);
	
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = wrapConnectorHooks;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsCloneWithRef = __webpack_require__(129);
	
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
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = cloneWithRef;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(29);
	
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
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = areOptionsEqual;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsShallowEqual = __webpack_require__(115);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	function areOptionsEqual(nextOptions, currentOptions) {
	  if (currentOptions === nextOptions) {
	    return true;
	  }
	
	  return currentOptions !== null && nextOptions !== null && _utilsShallowEqual2['default'](currentOptions, nextOptions);
	}
	
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isValidType;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashIsArray = __webpack_require__(28);
	
	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);
	
	function isValidType(type, allowArray) {
	       return typeof type === 'string' || typeof type === 'symbol' || allowArray && _lodashIsArray2['default'](type) && type.every(function (t) {
	              return isValidType(t, false);
	       });
	}
	
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DropTarget;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(29);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsPlainObject = __webpack_require__(18);
	
	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(113);
	
	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
	
	var _decorateHandler = __webpack_require__(118);
	
	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);
	
	var _registerTarget = __webpack_require__(133);
	
	var _registerTarget2 = _interopRequireDefault(_registerTarget);
	
	var _createTargetFactory = __webpack_require__(134);
	
	var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);
	
	var _createTargetMonitor = __webpack_require__(135);
	
	var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);
	
	var _createTargetConnector = __webpack_require__(136);
	
	var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);
	
	var _utilsIsValidType = __webpack_require__(131);
	
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
/* 133 */
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
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = createTargetFactory;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(29);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsPlainObject = __webpack_require__(18);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createTargetMonitor;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(29);
	
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
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createTargetConnector;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _wrapConnectorHooks = __webpack_require__(128);
	
	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);
	
	var _areOptionsEqual = __webpack_require__(130);
	
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
/* 137 */
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
	
	var _invariant = __webpack_require__(29);
	
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
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DragLayer = __webpack_require__(114);
	
	var _DragLayer2 = _interopRequireDefault(_DragLayer);
	
	var _EventBase = __webpack_require__(139);
	
	var _EventBase2 = _interopRequireDefault(_EventBase);
	
	var _objectAssign = __webpack_require__(140);
	
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
	
	var _classnames = __webpack_require__(10);
	
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
	            return _this2.renderDisplay(row);
	          })
	        ),
	        ' '
	      );
	    }
	  }]);
	
	  return EventBase;
	}(_react2.default.Component);
	
	exports.default = EventBase;
	
	
	EventBase.defaultProps = { display: [] };

/***/ },
/* 140 */
/***/ function(module, exports) {

	'use strict';
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
	
	var _classnames = __webpack_require__(10);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _TimeSpan = __webpack_require__(5);
	
	var _TimeSpan2 = _interopRequireDefault(_TimeSpan);
	
	var _reactDnd = __webpack_require__(13);
	
	var _EventBase = __webpack_require__(139);
	
	var _EventBase2 = _interopRequireDefault(_EventBase);
	
	var _Timeline = __webpack_require__(3);
	
	var _Timeline2 = _interopRequireDefault(_Timeline);
	
	var _objectAssign = __webpack_require__(140);
	
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
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Event).call(this, props));
	
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
	    } else {
	      _this.state.height = _this.props.timeline.timeSpanToHeight(_this.props.timeSpan);
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
	          })
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
	      this.props.timeline.removeEvent(this.props.id);
	      this.props.timeline.clearDraggingOver();
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
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
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
	            return _this4.element = elem;
	          }, onContextMenu: function onContextMenu(e) {
	            return _this4.onContextMenu(e);
	          }, className: (0, _classnames2.default)('tlEventView', { tlDraggingEvent: this.state.draggable, tlResizableEvent: this.state.resizable }), style: style, onClick: function onClick(e) {
	            return _this4.onClick(e);
	          } },
	        function () {
	          if (_this4.state.resizable) {
	            return _react2.default.createElement(
	              'div',
	              { className: 'tlResizeHandle', onTouchStart: function onTouchStart(e) {
	                  return _this4.resizeUp(e);
	                }, onMouseDown: function onMouseDown(e) {
	                  return _this4.resizeUp(e);
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
	          if (_this4.state.resizable) {
	            return _react2.default.createElement(
	              'div',
	              { className: 'tlResizeHandle tlBottom', onTouchStart: function onTouchStart(e) {
	                  return _this4.resizeDown(e);
	                }, onMouseDown: function onMouseDown(e) {
	                  return _this4.resizeDown(e);
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
	
	// Event.propTypes = {
	//   id: React.PropTypes.string.isRequired,
	//   timeSpan: React.PropTypes.instanceOf(TimeSpan).isRequired,
	//   color: React.PropTypes.string.isRequired,
	//   //TODO 循環参照になるのでimportできず。とりあえずanyでごまかしてます。
	//   timeline: React.PropTypes.any.isRequired,
	//   lineId: React.PropTypes.string.isRequired
	// }
	
	exports.default = (0, _reactDnd.DragSource)("Event", source, collect)(Event);

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ContextMenu = undefined;
	
	var _ContextMenu = __webpack_require__(143);
	
	var _ContextMenu2 = _interopRequireDefault(_ContextMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.ContextMenu = _ContextMenu2.default;

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
	
	var _objectAssign = __webpack_require__(144);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _ContextMenuItem = __webpack_require__(145);
	
	var _ContextMenuItem2 = _interopRequireDefault(_ContextMenuItem);
	
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
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContextMenu).call(this, props));
	
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
	  items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	    name: _react2.default.PropTypes.func.isRequired,
	    onClick: _react2.default.PropTypes.func,
	    show: _react2.default.PropTypes.func,
	    enable: _react2.default.PropTypes.func
	  })).isRequired,
	  zIndex: _react2.default.PropTypes.number
	};
	
	ContextMenu.defaultProps = {
	  zIndex: 100
	};

/***/ },
/* 144 */
/***/ function(module, exports) {

	'use strict';
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
	
	var _classnames = __webpack_require__(146);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ContextMenuItem = function (_React$Component) {
	  _inherits(ContextMenuItem, _React$Component);
	
	  function ContextMenuItem(props) {
	    _classCallCheck(this, ContextMenuItem);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContextMenuItem).call(this, props));
	
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

/***/ },
/* 146 */
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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmZiYzIxNWMxYzRhZTJkOWE5ZDUiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GcmFtZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG91ci5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1J1bGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5lTGFiZWwuanN4Iiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvRHJhZ0Ryb3BDb250ZXh0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL0RyYWdEcm9wTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2xpYi9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSG9zdE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL3BvbnlmaWxsLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL2RyYWdPZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvYWN0aW9ucy9kcmFnRHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi91dGlscy9tYXRjaGVzVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvZHJhZ09wZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9hY3Rpb25zL3JlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3dpdGhvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VEaWZmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2hlY2tHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faW5kZXhPZk5hTi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9yZXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC90b0ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdG9GaW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvcmVmQ291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvZGlydHlIYW5kbGVySWRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3hvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VYb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYXN0QXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL3N0YXRlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvRHJhZ0Ryb3BNb25pdG9yLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL0hhbmRsZXJSZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi91dGlscy9nZXROZXh0VW5pcXVlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hc2FwL2Jyb3dzZXItYXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FzYXAvYnJvd3Nlci1yYXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvRHJhZ1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9Ecm9wVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL2JhY2tlbmRzL2NyZWF0ZVRlc3RCYWNrZW5kLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvRHJhZ0xheWVyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi91dGlscy9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL3NoYWxsb3dFcXVhbFNjYWxhci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvRHJhZ1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvZGVjb3JhdGVIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvaXNEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9EaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9Db21wb3NpdGVEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9TZXJpYWxEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9yZWdpc3RlclNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlTW9uaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlQ29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi93cmFwQ29ubmVjdG9ySG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL2Nsb25lV2l0aFJlZi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvYXJlT3B0aW9uc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi91dGlscy9pc1ZhbGlkVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvRHJvcFRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvcmVnaXN0ZXJUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldE1vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldENvbm5lY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC10b3VjaC1iYWNrZW5kL2Rpc3QvVG91Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRQcmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudEJhc2UuanN4Iiwid2VicGFjazovLy8uL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4uL3JlYWN0LWNvbnRleHQtbWVudS9pbmRleC5lczYiLCJ3ZWJwYWNrOi8vLy4uL3JlYWN0LWNvbnRleHQtbWVudS9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4uL3JlYWN0LWNvbnRleHQtbWVudS9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3JlYWN0LWNvbnRleHQtbWVudS9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudUl0ZW0uanN4Iiwid2VicGFjazovLy8uLi9yZWFjdC1jb250ZXh0LW1lbnUvfi9jbGFzc25hbWVzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsVUFBUyxhQUFULEdBQXdCO0FBQ3RCLE9BQU0sUUFBUSxPQUFPLFVBQVAsSUFDWCxTQUFTLGVBQVQsQ0FBeUIsV0FEZCxJQUVYLFNBQVMsSUFBVCxDQUFjLFdBRmpCOztBQUlBLE9BQU0sU0FBUyxPQUFPLFdBQVAsSUFDWixTQUFTLGVBQVQsQ0FBeUIsWUFEYixJQUVaLFNBQVMsSUFBVCxDQUFjLFlBRmpCOztBQUlBLFVBQU8sRUFBQyxPQUFPLEtBQVIsRUFBZSxRQUFRLE1BQXZCLEVBQVA7QUFDRDs7QUFFRCxVQUFTLFVBQVQsQ0FBb0IsZUFBcEIsRUFBb0M7QUFDbEMsT0FBTSxnQkFBZ0IsZ0JBQWdCLHFCQUFoQixFQUF0QjtBQUNBLE9BQU0sYUFBYSxlQUFuQjtBQUNBLFVBQU8sV0FBVyxNQUFYLEdBQW9CLGNBQWMsR0FBekM7QUFDRDs7QUFFRCxRQUFPLE1BQVAsR0FBZ0IsWUFBTTs7QUFFcEIsT0FBTSxZQUFZLG1CQUFTLE1BQVQsQ0FDaEI7QUFDRSxZQUFPLENBQ0w7QUFDRSxhQUFNO0FBQUEsZ0JBQVcsT0FBWDtBQUFBLFFBRFI7QUFFRSxnQkFBUywwQkFBVztBQUNsQixpQkFBUSxTQUFSLENBQWtCLEtBQWxCO0FBQ0QsUUFKSDtBQUtFLGFBQU07QUFBQSxnQkFBVyxRQUFRLFNBQVIsQ0FB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QTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUssSUFBSTtBQUNUOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7QUM1RkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0EsWUFBVyxJQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsSUFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSxxQzs7Ozs7O0FDM01BOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQ1ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7OztBQ3RGQTs7QUFFQTtBQUNBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2Sjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQzVGQTs7QUFFQTtBQUNBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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VyxZQUFYLEVBQXlCLEVBQUMsYUFBYSxLQUFLLEtBQUwsQ0FBVyxTQUF6QixFQUFvQyxZQUFZLENBQUMsS0FBSyxLQUFMLENBQVcsTUFBNUQsRUFBb0UsYUFBYSxLQUFLLEtBQUwsQ0FBVyxJQUFYLElBQW1CLEdBQXBHLEVBQXpCLENBRGI7QUFFRSxzQkFBYTtBQUFBLGtCQUFLLE9BQUssV0FBTCxDQUFpQixDQUFqQixDQUFMO0FBQUEsVUFGZjtBQUdFLHFCQUFZO0FBQUEsa0JBQUssT0FBSyxVQUFMLENBQWdCLENBQWhCLENBQUw7QUFBQSxVQUhkO0FBSUUsa0JBQVM7QUFBQSxrQkFBSyxPQUFLLE9BQUwsQ0FBYSxDQUFiLENBQUw7QUFBQSxVQUpYO0FBS0Usa0NBQXlCLEVBQUMsUUFBUSxLQUFLLEtBQUwsQ0FBVyxJQUFYLElBQW1CLEdBQW5CLEdBQXlCLElBQXpCLEdBQWdDLEtBQUssS0FBTCxDQUFXLElBQXBEO0FBTDNCLFNBREY7QUFVRDs7OztHQXZDMEMsZ0JBQU0sUzs7bUJBQTlCLGU7Ozs7OztBQ0hyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsa0JBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDZmYmMyMTVjMWM0YWUyZDlhOWQ1XG4gKiovIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3Bhbn0gZnJvbSAnLi4vaW5kZXguZXM2JztcbmltcG9ydCB7Q29udGV4dE1lbnV9IGZyb20gJy4uLy4uL3JlYWN0LWNvbnRleHQtbWVudSc7XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1NpemUoKXtcbiAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblxuICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICByZXR1cm4ge3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9O1xufVxuXG5mdW5jdGlvbiBjYWxjSGVpZ2h0KHRpbWVsaW5lRWxlbWVudCl7XG4gIGNvbnN0IHdyYXBwZXJCb3VuZHMgPSB0aW1lbGluZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHdpbmRvd1NpemUgPSBnZXRXaW5kb3dTaXplKCk7XG4gIHJldHVybiB3aW5kb3dTaXplLmhlaWdodCAtIHdyYXBwZXJCb3VuZHMudG9wO1xufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXG4gIGNvbnN0IGV2ZW50TWVudSA9IFJlYWN0RE9NLnJlbmRlcihcbiAgICA8Q29udGV4dE1lbnVcbiAgICAgIGl0ZW1zPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBjb250ZXh0ID0+ICdmbG9hdCcsXG4gICAgICAgICAgb25DbGljazogY29udGV4dCA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbXBvbmVudC5mbG9hdCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvdzogY29udGV4dCA9PiBjb250ZXh0LmNvbXBvbmVudC5pc0ZpeGVkKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJ3Jlc2l6ZScsXG4gICAgICAgICAgb25DbGljazogY29udGV4dCA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbXBvbmVudC5yZXNpemUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3c6IGNvbnRleHQgPT4gY29udGV4dC5jb21wb25lbnQuaXNGaXhlZCgpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBjb250ZXh0ID0+ICdjYW5jZWwnLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5jb21wb25lbnQuY2FuY2VsKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93OiBjb250ZXh0ID0+ICFjb250ZXh0LmNvbXBvbmVudC5pc0ZpeGVkKCksXG4gICAgICAgICAgb25DbGljazogY29udGV4dCA9PiB7XG4gICAgICAgICAgICBpZihjb250ZXh0LmNvbXBvbmVudC5pc0NhbmNlbGFibGUoKSl7XG4gICAgICAgICAgICAgIGNvbnRleHQuY29tcG9uZW50LmNhbmNlbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWxlcnQoJ1lvdSBjYW5cXCd0IGNhbmNlbCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBjb250ZXh0ID0+ICdmaXgnLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgaWYoY29udGV4dC5jb21wb25lbnQuaXNGaXhhYmxlKCkpe1xuICAgICAgICAgICAgICBjb250ZXh0LmNvbXBvbmVudC5maXgoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFsZXJ0KCdZb3UgY2FuXFwndCBmaXghJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93OiBjb250ZXh0ID0+ICFjb250ZXh0LmNvbXBvbmVudC5pc0ZpeGVkKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJy0nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBjb250ZXh0ID0+ICdyZW1vdmUnLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5jb21wb25lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbmFibGU6IGNvbnRleHQgPT4gY29udGV4dC5jb21wb25lbnQuaXNGaXhlZCgpXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICB6SW5kZXg9ezEwMDB9XG4gICAgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxuICApO1xuXG4gIGNvbnN0IGxpbmVEYXRhID0gW1xuICAgIHtsYWJlbDonbGFiZWwxJywgaWQ6J19fMSd9LFxuICAgIHtsYWJlbDonbGFiZWwyJywgaWQ6J19fMid9LFxuICAgIHtsYWJlbDonbGFiZWwzJywgaWQ6J19fMyd9LFxuICAgIHtsYWJlbDonbGFiZWw0JywgaWQ6J19fNCd9LFxuICAgIHtsYWJlbDonbGFiZWw1JywgaWQ6J19fNSd9LFxuICAgIHtsYWJlbDonbGFiZWw2JywgaWQ6J19fNid9LFxuICAgIHtsYWJlbDonbGFiZWw3JywgaWQ6J19fNyd9LFxuICAgIHtsYWJlbDonbGFiZWw4JywgaWQ6J19fOCd9LFxuICAgIHtsYWJlbDonbGFiZWw5JywgaWQ6J19fOSd9LFxuICAgIHtsYWJlbDonbGFiZWwxMCcsIGlkOidfXzEwJ30sXG4gICAge2xhYmVsOidsYWJlbDExJywgaWQ6J19fMTEnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTInLCBpZDonX18xMid9LFxuICAgIHtsYWJlbDonbGFiZWwxMycsIGlkOidfXzEzJ30sXG4gICAge2xhYmVsOidsYWJlbDE0JywgaWQ6J19fMTQnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTUnLCBpZDonX18xNSd9LFxuICAgIHtsYWJlbDonbGFiZWwxNicsIGlkOidfXzE2J30sXG4gICAge2xhYmVsOidsYWJlbDE3JywgaWQ6J19fMTcnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTgnLCBpZDonX18xOCd9XG4gIF07XG5cbiAgY29uc3QgdGltZVNwYW4gPSBUaW1lU3Bhbi5jcmVhdGUoWzEwLCAwXSwgWzI1LCAwXSk7XG4gIGNvbnN0IHRpbWVsaW5lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lbGluZScpO1xuICBjb25zdCB0aW1lbGluZSA9IFJlYWN0RE9NLnJlbmRlcihcbiAgICA8VGltZWxpbmVcbiAgICAgIGxpbmVEYXRhPXtsaW5lRGF0YX1cbiAgICAgIHRpbWVTcGFuPXt0aW1lU3Bhbn1cbiAgICAgIGxpbmVXaWR0aD17NjJ9XG4gICAgICBtaW5IZWlnaHQ9ezE3fVxuICAgICAgbWluSW50ZXJ2YWw9ezV9XG4gICAgICBydWxlckludGVydmFsPXs0fVxuICAgICAgaGVpZ2h0PXtjYWxjSGVpZ2h0KHRpbWVsaW5lRWxlbWVudCl9XG4gICAgICBsaW5lRGlkQ2xpY2s9e2RhdGEgPT4ge1xuICAgICAgICB0aW1lbGluZS5hZGRFdmVudHMoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpbmVJZDogZGF0YS5jb21wb25lbnQucHJvcHMuaWQsXG4gICAgICAgICAgICB0aW1lU3BhbjogbmV3IFRpbWVTcGFuKGRhdGEudGltZSwgZGF0YS50aW1lLmFkZE1pbigxMjApKSxcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGQjZCNicsXG4gICAgICAgICAgICBkaXNwbGF5OiBbXG4gICAgICAgICAgICAgIHtrZXk6ICdzdGFydFRpbWUnLCB2YWx1ZTogZGF0YS50aW1lLmdldERpc3BsYXlUaW1lKCl9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICAgIH19XG4gICAgICBsaW5lRGlkUmlnaHRDbGljaz17ZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCcsIGRhdGEpO1xuICAgICAgfX1cbiAgICAgIGV2ZW50RGlkQ2xpY2s9e2RhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbGVmdCcsIGRhdGEpO1xuICAgICAgfX1cbiAgICAgIGV2ZW50RGlkUmlnaHRDbGljaz17ZGF0YSA9PiB7XG4gICAgICAgIGRhdGEuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnRNZW51LnNob3coe3RvcDogZGF0YS5ldmVudC5jbGllbnRZLCBsZWZ0OiBkYXRhLmV2ZW50LmNsaWVudFh9LCBkYXRhKTtcbiAgICAgIH19XG4gICAgICBldmVudFdpbGxGaXg9e2RhdGEgPT4ge1xuICAgICAgICBkYXRhLnN0YXRlLmRpc3BsYXkgPSBkYXRhLmNvbXBvbmVudC5zdGF0ZS5kaXNwbGF5Lm1hcChcbiAgICAgICAgICByb3cgPT4gcm93LmtleSA9PSAnc3RhcnRUaW1lJyA/IHtrZXk6ICdzdGFydFRpbWUnLCB2YWx1ZTogZGF0YS50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXNwbGF5VGltZSgpfSA6IHJvd1xuICAgICAgICApO1xuICAgICAgfX1cbiAgICAgIGV2ZW50RGlkRml4PXtkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9fVxuICAgIC8+LFxuICAgIHRpbWVsaW5lRWxlbWVudFxuICApO1xuXG5cbiAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICAgIHRpbWVsaW5lLnNldEhlaWdodChjYWxjSGVpZ2h0KHRpbWVsaW5lRWxlbWVudCkpO1xuICB9O1xuXG4gIHRpbWVsaW5lLmFkZEV2ZW50cyhbXG4gICAge1xuICAgICAgbGluZUlkOiAnX18xJyxcbiAgICAgIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAwXSwgWzEyLCAwXSksXG4gICAgICBjb2xvcjogJyNGRkI2QjYnLFxuICAgICAgZGlzcGxheTogW1xuICAgICAgICB7a2V5OiAnc3RhcnRUaW1lJywgdmFsdWU6ICcxMTowMCd9LFxuICAgICAgICB7a2V5OiAndHlwZScsIHZhbHVlOiAnZm9vYmFyJ30sXG4gICAgICAgIHtrZXk6ICdtZW1vJywgdmFsdWU6ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5J31cbiAgICAgIF1cbiAgICB9XG4gIF0pO1xuXG4gIHRpbWVsaW5lLmFkZEV2ZW50cyhbXG4gICAge2lkOiAnMTIzMScsIGxpbmVJZDogJ19fMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MScsIGxpbmVJZDogJ19fMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxJywgbGluZUlkOiAnX18xJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjEnLCBsaW5lSWQ6ICdfXzEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzEnLCBsaW5lSWQ6ICdfXzEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODEnLCBsaW5lSWQ6ICdfXzEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTEnLCBsaW5lSWQ6ICdfXzEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzJywgbGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQnLCBsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1JywgbGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzMycsIGxpbmVJZDogJ19fMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MycsIGxpbmVJZDogJ19fMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUzJywgbGluZUlkOiAnX18zJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzNCcsIGxpbmVJZDogJ19fNCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0NCcsIGxpbmVJZDogJ19fNCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjU0JywgbGluZUlkOiAnX180JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzNTUnLCBsaW5lSWQ6ICdfXzUnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDU1JywgbGluZUlkOiAnX181JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTU1JywgbGluZUlkOiAnX181JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyNicsIGxpbmVJZDogJ19fNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAxNV0sIFsxMiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTIzNicsIGxpbmVJZDogJ19fNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0NicsIGxpbmVJZDogJ19fNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjU2JywgbGluZUlkOiAnX182JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjYnLCBsaW5lSWQ6ICdfXzYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzYnLCBsaW5lSWQ6ICdfXzYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODYnLCBsaW5lSWQ6ICdfXzYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTYnLCBsaW5lSWQ6ICdfXzYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzNzcnLCBsaW5lSWQ6ICdfXzcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDc3JywgbGluZUlkOiAnX183JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTc3JywgbGluZUlkOiAnX183JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyOCcsIGxpbmVJZDogJ19fOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAxNV0sIFsxMiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTIzOCcsIGxpbmVJZDogJ19fOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0OCcsIGxpbmVJZDogJ19fOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjU4JywgbGluZUlkOiAnX184JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjgnLCBsaW5lSWQ6ICdfXzgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzgnLCBsaW5lSWQ6ICdfXzgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODgnLCBsaW5lSWQ6ICdfXzgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTgnLCBsaW5lSWQ6ICdfXzgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzOScsIGxpbmVJZDogJ19fOScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0OScsIGxpbmVJZDogJ19fOScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjU5JywgbGluZUlkOiAnX185JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyMTAnLCBsaW5lSWQ6ICdfXzEwJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTEsIDE1XSwgWzEyLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjMxMCcsIGxpbmVJZDogJ19fMTAnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDEwJywgbGluZUlkOiAnX18xMCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxMCcsIGxpbmVJZDogJ19fMTAnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI2MTAnLCBsaW5lSWQ6ICdfXzEwJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTgsIDMwXSwgWzE5LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjcxMCcsIGxpbmVJZDogJ19fMTAnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODEwJywgbGluZUlkOiAnX18xMCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIwLCAzMF0sIFsyMSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI5MTAnLCBsaW5lSWQ6ICdfXzEwJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMjIsIDMwXSwgWzIzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMzExJywgbGluZUlkOiAnX18xMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MTEnLCBsaW5lSWQ6ICdfXzExJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTExJywgbGluZUlkOiAnX18xMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE3LCAwXSwgWzE4LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMzEyJywgbGluZUlkOiAnX18xMicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MTInLCBsaW5lSWQ6ICdfXzEyJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTEyJywgbGluZUlkOiAnX18xMicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE3LCAwXSwgWzE4LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMjEzJywgbGluZUlkOiAnX18xMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAxNV0sIFsxMiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTIzMTMnLCBsaW5lSWQ6ICdfXzEzJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQxMycsIGxpbmVJZDogJ19fMTMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1MTMnLCBsaW5lSWQ6ICdfXzEzJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjEzJywgbGluZUlkOiAnX18xMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE4LCAzMF0sIFsxOSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI3MTMnLCBsaW5lSWQ6ICdfXzEzJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTksIDMwXSwgWzIwLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjgxMycsIGxpbmVJZDogJ19fMTMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTEzJywgbGluZUlkOiAnX18xMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIyLCAzMF0sIFsyMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjMxNCcsIGxpbmVJZDogJ19fMTQnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDE0JywgbGluZUlkOiAnX18xNCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxNCcsIGxpbmVJZDogJ19fMTQnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjMxNScsIGxpbmVJZDogJ19fMTUnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDE1JywgbGluZUlkOiAnX18xNScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxNScsIGxpbmVJZDogJ19fMTUnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjIxNicsIGxpbmVJZDogJ19fMTYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMSwgMTVdLCBbMTIsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyMzE2JywgbGluZUlkOiAnX18xNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MTYnLCBsaW5lSWQ6ICdfXzE2JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTE2JywgbGluZUlkOiAnX18xNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE3LCAwXSwgWzE4LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjYxNicsIGxpbmVJZDogJ19fMTYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzE2JywgbGluZUlkOiAnX18xNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE5LCAzMF0sIFsyMCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI4MTYnLCBsaW5lSWQ6ICdfXzE2JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMjAsIDMwXSwgWzIxLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjkxNicsIGxpbmVJZDogJ19fMTYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyMTcnLCBsaW5lSWQ6ICdfXzE3JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTEsIDE1XSwgWzEyLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjMxNycsIGxpbmVJZDogJ19fMTcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDE3JywgbGluZUlkOiAnX18xNycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxNycsIGxpbmVJZDogJ19fMTcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI2MTcnLCBsaW5lSWQ6ICdfXzE3JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTgsIDMwXSwgWzE5LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjcxNycsIGxpbmVJZDogJ19fMTcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODE3JywgbGluZUlkOiAnX18xNycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIwLCAzMF0sIFsyMSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI5MTcnLCBsaW5lSWQ6ICdfXzE3JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMjIsIDMwXSwgWzIzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMjE4JywgbGluZUlkOiAnX18xOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAxNV0sIFsxMiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTIzMTgnLCBsaW5lSWQ6ICdfXzE4JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQxOCcsIGxpbmVJZDogJ19fMTgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1MTgnLCBsaW5lSWQ6ICdfXzE4JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjE4JywgbGluZUlkOiAnX18xOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE4LCAzMF0sIFsxOSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI3MTgnLCBsaW5lSWQ6ICdfXzE4JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTksIDMwXSwgWzIwLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjgxOCcsIGxpbmVJZDogJ19fMTgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTE4JywgbGluZUlkOiAnX18xOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIyLCAzMF0sIFsyMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gIF0pO1xuXG4gIHRpbWVsaW5lLmFkZEV2ZW50cyhbXG4gICAge1xuICAgICAgY29sb3I6ICcjRkZCNkI2JyxcbiAgICAgIGZsb2F0OiB7dG9wOiAxMCwgbGVmdDogMTAsIG1pbnV0ZTogNjB9XG4gICAgfSxcbiAgICB7XG4gICAgICBjb2xvcjogJyNGRkI2QjYnLFxuICAgICAgZmxvYXQ6IHt0b3A6IDEwMCwgbGVmdDogMTAwLCBtaW51dGU6IDYwfVxuICAgIH1cbiAgXSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGUvYXBwLmpzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZSc7XG5pbXBvcnQgVGltZSBmcm9tICcuL3NyYy9jbGFzc2VzL1RpbWUnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4vc3JjL2NsYXNzZXMvVGltZVNwYW4nO1xuXG5leHBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3Bhbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguZXM2XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBGcmFtZSBmcm9tICcuL0ZyYW1lJztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cbiAgICB0aGlzLnRpbWVTcGFuID0gdGhpcy5wcm9wcy50aW1lU3BhbjtcblxuICAgIC8vbWluVmlld+OBjOOBhOOBj+OBpOOBguOCi+OBi+OCq+OCpuODs+ODiOOAgm1pblZpZXfjga8xNeWIhuOBiuOBjeOAguOBneOCjOOCkuWFg+OBq+mrmOOBleOCkuioiOeul+OAgmJvcmRlcuWIhjFweOi2s+OBmVxuICAgIHRoaXMubGluZUhlaWdodCA9ICh0aGlzLnRpbWVTcGFuLmdldERpc3RhbmNlKCkgLyAxNSkgKiAodGhpcy5wcm9wcy5taW5IZWlnaHQgKyAxKTtcblxuICAgIC8vMeWIhuOBguOBn+OCiuOBrumrmOOBleOCkueul+WHulxuICAgIHRoaXMucGVyTWluSGVpZ2h0ID0gdGhpcy5saW5lSGVpZ2h0IC8gdGhpcy50aW1lU3Bhbi5nZXREaXN0YW5jZSgpO1xuXG4gICAgdGhpcy5saW5lV2lkdGggPSBwcm9wcy5saW5lV2lkdGg7XG5cbiAgICB0aGlzLmNyZWF0ZWRFdmVudElkID0gMDtcbiAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQgPSBudWxsO1xuICB9XG5cbiAgZ2V0IGV2ZW50Q29tcG9uZW50cygpe1xuICAgIGNvbnN0IGV2ZW50cyA9IFtdO1xuXG4gICAgZm9yKHZhciBrZXkgaW4gdGhpcy5mcmFtZUNvbXBvbmVudC5yZWZzKXtcbiAgICAgIGlmKGtleS5pbmRleE9mKFwiZXZlbnRAXCIpID09PSAwKXtcbiAgICAgICAgZXZlbnRzLnB1c2godGhpcy5mcmFtZUNvbXBvbmVudC5yZWZzW2tleV0uZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZW50cztcbiAgfVxuXG4gIGdldCBmcmFtZUNvbXBvbmVudCgpe1xuICAgIHJldHVybiB0aGlzLnJlZnMuZnJhbWUuZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UoKS5nZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSgpO1xuICB9XG5cbiAgZ2V0IGxpbmVDb21wb25lbnRzKCl7XG4gICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICBmb3IodmFyIGtleSBpbiB0aGlzLmZyYW1lQ29tcG9uZW50LnJlZnMpe1xuICAgICAgaWYoa2V5LmluZGV4T2YoXCJsaW5lQFwiKSA9PT0gMCl7XG4gICAgICAgIGxpbmVzLnB1c2godGhpcy5mcmFtZUNvbXBvbmVudC5yZWZzW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxuXG4gIGNyZWF0ZUV2ZW50SWQoKXtcbiAgICByZXR1cm4gJ25ld18nICsgKCsrdGhpcy5jcmVhdGVkRXZlbnRJZCk7XG4gIH1cblxuICBkcmFnZ2luZ092ZXIobGVmdCl7XG4gICAgY29uc3QgbGluZUNvbXBvbmVudCA9IHRoaXMuZmluZExpbmVCeUxlZnQobGVmdCk7XG4gICAgaWYobGluZUNvbXBvbmVudCl7XG4gICAgICBpZih0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQgIT09IGxpbmVDb21wb25lbnQpe1xuICAgICAgICBpZih0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQpe1xuICAgICAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudC5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudCA9IGxpbmVDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudC5kcmFnZ2luZ092ZXIoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYodGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50KXtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50LmNsZWFyRHJhZ2dpbmdPdmVyKCk7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVDb21wb25lbnQ7XG4gIH1cblxuICBjbGVhckRyYWdnaW5nT3Zlcigpe1xuICAgIGlmKHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudCl7XG4gICAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQuY2xlYXJEcmFnZ2luZ092ZXIoKTtcbiAgICB9XG4gIH1cblxuICBnZXRUb3RhbFdpZHRoKCl7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubGluZURhdGEucmVkdWNlKCh2YWwsIGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBoYXNSdWxlciA9IGluZGV4ICUgdGhpcy5wcm9wcy5ydWxlckludGVydmFsID09PSAwO1xuICAgICAgcmV0dXJuIHZhbCArIChoYXNSdWxlciA/IHRoaXMubGluZVdpZHRoICsgUnVsZXIud2lkdGggOiB0aGlzLmxpbmVXaWR0aCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBmaW5kRXZlbnRCeUlkKGV2ZW50SWQpe1xuICAgIHJldHVybiB0aGlzLmV2ZW50Q29tcG9uZW50cy5maW5kKGV2ID0+IGV2LnByb3BzLmlkID09IGV2ZW50SWQpO1xuICB9XG5cbiAgZmluZExpbmVCeUxlZnQobGVmdCl7XG4gICAgdmFyIHdpZHRoID0gMDtcbiAgICByZXR1cm4gdGhpcy5saW5lQ29tcG9uZW50cy5maW5kKGxpbmUgPT4ge1xuICAgICAgd2lkdGggKz0gbGluZS5wcm9wcy5oYXNSdWxlciA/IHRoaXMucHJvcHMubGluZVdpZHRoICsgUnVsZXIud2lkdGggOiB0aGlzLnByb3BzLmxpbmVXaWR0aDtcbiAgICAgIGlmKGxlZnQgPCB3aWR0aCl7XG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGluZUxlZnQobGluZUlkKXtcbiAgICBsZXQgbGVmdCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmxpbmVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5lRGF0YSA9IHRoaXMucHJvcHMubGluZURhdGFbaV07XG4gICAgICBjb25zdCBoYXNSdWxlciA9IGkgJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG4gICAgICBpZihoYXNSdWxlcil7XG4gICAgICAgIGxlZnQgKz0gUnVsZXIud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmKGxpbmVEYXRhLmlkID09IGxpbmVJZCl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsZWZ0ICs9IHRoaXMucHJvcHMubGluZVdpZHRoO1xuICAgIH1cblxuICAgIGxlZnQgKz0gTGluZS5zaWRlUGFkZGluZztcblxuICAgIHJldHVybiBsZWZ0O1xuICB9XG5cbiAgZ2V0VGltZVNwYW4odG9wLCBoZWlnaHQpe1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IHRoaXMudG9wVG9UaW1lKHRvcCk7XG5cbiAgICBjb25zdCBlbmRUaW1lID0gc3RhcnRUaW1lLmFkZE1pbihoZWlnaHQgLyB0aGlzLnBlck1pbkhlaWdodCk7XG4gICAgcmV0dXJuIG5ldyBUaW1lU3BhbihzdGFydFRpbWUsIGVuZFRpbWUpO1xuICB9XG5cbiAgbWludXRlVG9IZWlnaHQobWludXRlKXtcbiAgICByZXR1cm4gKG1pbnV0ZSAqIHRoaXMucGVyTWluSGVpZ2h0KSAtIDE7XG4gIH1cblxuICB0aW1lU3BhblRvSGVpZ2h0KHRpbWVTcGFuKXtcbiAgICByZXR1cm4gdGhpcy5taW51dGVUb0hlaWdodCh0aW1lU3Bhbi5nZXREaXN0YW5jZSgpKTtcbiAgfVxuXG4gIHRpbWVUb1RvcCh0aW1lKXtcbiAgICByZXR1cm4gdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXN0YW5jZSh0aW1lKSAqIHRoaXMucGVyTWluSGVpZ2h0IC0gMTtcbiAgfVxuXG4gIHRvcFRvVGltZSh0b3Ape1xuICAgIGlmKHRvcCA8PSAwKXtcbiAgICAgIHJldHVybiB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpO1xuICAgIH1cbiAgICBsZXQgbWludXRlID0gdG9wIC8gdGhpcy5wZXJNaW5IZWlnaHQ7XG4gICAgY29uc3QgcmVzdCA9IG1pbnV0ZSAlIHRoaXMucHJvcHMubWluSW50ZXJ2YWw7XG4gICAgaWYocmVzdCAhPT0gMCl7XG4gICAgICBpZihyZXN0ID4gdGhpcy5wcm9wcy5taW5JbnRlcnZhbCAvIDIpe1xuICAgICAgICBtaW51dGUgKz0gdGhpcy5wcm9wcy5taW5JbnRlcnZhbCAtIHJlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaW51dGUgLT0gcmVzdDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuYWRkTWluKG1pbnV0ZSk7XG4gIH1cblxuICBmaW5kUHJldkV2ZW50KGV2ZW50Q29tcG9uZW50KXtcbiAgICByZXR1cm4gdGhpcy5ldmVudENvbXBvbmVudHNcbiAgICAgIC5maWx0ZXIoZXYgPT4gIWV2LnN0YXRlLmRyYWdnYWJsZSAmJiBldi5saW5lSWQgPT0gZXZlbnRDb21wb25lbnQubGluZUlkKS8v5ZCM44GY5YiX44Gu44KC44Gu44Gg44GR44Gr57We44KLXG4gICAgICAuc29ydCgoYSwgYikgPT4gLShhLmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5jb21wYXJlKGIuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSkpLy/mmYLplpPjga7pmY3poIbjgafkuKbjgbPmm7/jgYhcbiAgICAgIC5maW5kKGV2ID0+IGV2LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCkuY29tcGFyZShldmVudENvbXBvbmVudC5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpIDw9IDApLy/pmY3poIbjgarjga7jgaflr77osaHjgojjgormnIDliJ3jgavplovlp4vmmYLplpPjgYzoi6XjgYTjgoLjga7jgYxwcmV2XG4gICAgICA7XG4gIH1cblxuICBnZXRQcmV2Qm90dG9tKGV2ZW50Q29tcG9uZW50KXtcbiAgICBjb25zdCBwcmV2RXZlbnQgPSB0aGlzLmZpbmRQcmV2RXZlbnQoZXZlbnRDb21wb25lbnQpO1xuICAgIGxldCBib3R0b21UaW1lO1xuICAgIGlmKHByZXZFdmVudCl7XG4gICAgICBib3R0b21UaW1lID0gcHJldkV2ZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdHRvbVRpbWUgPSB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRpbWVUb1RvcChib3R0b21UaW1lKTtcbiAgfVxuXG4gIGZpbmROZXh0RXZlbnQoZXZlbnRDb21wb25lbnQpe1xuICAgIHJldHVybiB0aGlzLmZpbmROZXh0RXZlbnRCeVRpbWUoZXZlbnRDb21wb25lbnQubGluZUlkLCBldmVudENvbXBvbmVudC5jdXJyZW50VGltZVNwYW4uZ2V0RW5kVGltZSgpKTtcbiAgfVxuXG4gIGZpbmROZXh0RXZlbnRCeVRpbWUobGluZUlkLCB0aW1lKXtcbiAgICByZXR1cm4gdGhpcy5ldmVudENvbXBvbmVudHNcbiAgICAgIC5maWx0ZXIoZXYgPT4gICFldi5zdGF0ZS5kcmFnZ2FibGUgJiYgZXYubGluZUlkID09IGxpbmVJZCkvL+WQjOOBmOWIl+OBruOCguOBruOBoOOBkeOBq+e1nuOCi1xuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUoYi5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpKS8v5pmC6ZaT44Gu5piH6aCG44Gn5Lim44Gz5pu/44GIXG4gICAgICAuZmluZChldiA9PiBldi5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuY29tcGFyZSh0aW1lKSA+PSAwKS8v5piH6aCG44Gq44Gu44Gn5a++6LGh44KI44KK5pyA5Yid44Gr6ZaL5aeL5pmC6ZaT44GM6YGF44GE44KC44Gu44GMbmV4dFxuICAgICAgO1xuICB9XG5cbiAgZ2V0RXZlbnRzT25MaW5lKGxpbmVJZCl7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRDb21wb25lbnRzLmZpbHRlcihldiA9PiAgIWV2LnN0YXRlLmRyYWdnYWJsZSAmJiBldi5saW5lSWQgPT0gbGluZUlkKVxuICB9XG5cbiAgZ2V0TmV4dFRpbWUobGluZUlkLCB0aW1lKXtcbiAgICBjb25zdCBuZXh0RXZlbnQgPSB0aGlzLmZpbmROZXh0RXZlbnRCeVRpbWUobGluZUlkLCB0aW1lKTtcbiAgICBsZXQgbmV4dFRpbWU7XG4gICAgaWYobmV4dEV2ZW50KXtcbiAgICAgIG5leHRUaW1lID0gbmV4dEV2ZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dFRpbWUgPSB0aGlzLnRpbWVTcGFuLmdldEVuZFRpbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFRpbWU7XG4gIH1cblxuICBnZXRGcmVlTWludXRlKGxpbmVJZCwgdGltZSl7XG4gICAgY29uc3QgbmV4dFRpbWUgPSB0aGlzLmdldE5leHRUaW1lKGxpbmVJZCwgdGltZSk7XG4gICAgcmV0dXJuIHRpbWUuZ2V0RGlzdGFuY2UobmV4dFRpbWUpO1xuICB9XG5cbiAgZ2V0TmV4dFRvcChldmVudENvbXBvbmVudCl7XG4gICAgcmV0dXJuIHRoaXMudGltZVRvVG9wKHRoaXMuZ2V0TmV4dFRpbWUoZXZlbnRDb21wb25lbnQubGluZUlkLCBldmVudENvbXBvbmVudC5jdXJyZW50VGltZVNwYW4uZ2V0RW5kVGltZSgpKSk7XG4gIH1cbiAgYWRkRXZlbnRzKGV2ZW50cyl7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVDb21wb25lbnQuYWRkRXZlbnRzKGV2ZW50cyk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KXtcbiAgICB0aGlzLmZyYW1lQ29tcG9uZW50LnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnQoZXZlbnRJZCl7XG4gICAgdGhpcy5mcmFtZUNvbXBvbmVudC5yZW1vdmVFdmVudChldmVudElkKTtcbiAgfVxuXG4gIHVwZGF0ZUV2ZW50cyhjYWxsYmFjayl7XG4gICAgdGhpcy5mcmFtZUNvbXBvbmVudC51cGRhdGVFdmVudHMoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFtZVxuICAgICAgICByZWY9XCJmcmFtZVwiXG4gICAgICAgIGxpbmVEYXRhPXt0aGlzLnByb3BzLmxpbmVEYXRhfVxuICAgICAgICB0aW1lU3Bhbj17dGhpcy5wcm9wcy50aW1lU3Bhbn1cbiAgICAgICAgbGluZVdpZHRoPXt0aGlzLnByb3BzLmxpbmVXaWR0aH1cbiAgICAgICAgbWluSGVpZ2h0PXt0aGlzLnByb3BzLm1pbkhlaWdodH1cbiAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH1cbiAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgIGxpbmVIZWlnaHQ9e3RoaXMubGluZUhlaWdodH1cbiAgICAgICAgdGltZWxpbmU9e3RoaXN9XG4gICAgICAgIHJ1bGVySW50ZXJ2YWw9e3RoaXMucHJvcHMucnVsZXJJbnRlcnZhbH1cbiAgICAgICAgaW5pdGlhbEV2ZW50cz17dGhpcy5wcm9wcy5pbml0aWFsRXZlbnRzfVxuICAgICAgICBjaGlsZHJlbj17dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgY2hpbGRXaWR0aD17dGhpcy5wcm9wcy5jaGlsZFdpZHRofVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbi8vIFRpbWVsaW5lLnByb3BUeXBlcyA9IHtcbi8vICAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuLy8gICBsaW5lRGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbi8vICAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuLy8gICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbi8vICAgfSkpLmlzUmVxdWlyZWQsXG4vLyAgIGxpbmVXaWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4vLyAgIHJ1bGVySW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgbWluSW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4vLyAgIGhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4vLyB9XG5cblRpbWVsaW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgbWluSW50ZXJ2YWw6IDEsXG4gIGNoaWxkV2lkdGg6IDBcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBUaW1lIGZyb20gJy4vVGltZSdcbi8qKlxuICog5LiA5bqm55Sf5oiQ44GX44Gf44Kq44OW44K444Kn44Kv44OI44Gv5aSJ5pu044GX44G+44Gb44KT44CCXG4gKiDlpInmm7Tjg6Hjgr3jg4Pjg4njga/mlrDjgZfjgYTjgqrjg5bjgrjjgqfjgq/jg4jjgpLluLDjgZfjgb7jgZnjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNwYW5cbntcbiAgc3RhdGljIGNyZWF0ZShzdGFydCwgZW5kKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4obmV3IFRpbWUoc3RhcnRbMF0sIHN0YXJ0WzFdKSwgbmV3IFRpbWUoZW5kWzBdLCBlbmRbMV0pKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHN0YXJ0VGltZSwgZW5kVGltZSl7XG4gICAgaWYoc3RhcnRUaW1lID09PSB1bmRlZmluZWQpe1xuICAgICAgc3RhcnRUaW1lID0gbmV3IFRpbWUoKTtcbiAgICB9XG4gICAgaWYoZW5kVGltZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIGVuZFRpbWUgPSBuZXcgVGltZSgpO1xuICAgIH1cbiAgICB3aGlsZShzdGFydFRpbWUuY29tcGFyZShlbmRUaW1lKSA+PSAwKXtcbiAgICAgICAgZW5kVGltZSA9IGVuZFRpbWUuYWRkTWluKDI0ICogNjApO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICB0aGlzLl9lbmRUaW1lID0gZW5kVGltZTtcbiAgfVxuXG4gIGNsb25lKCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRoaXMuZ2V0U3RhcnRUaW1lKCkuY2xvbmUoKSwgdGhpcy5nZXRFbmRUaW1lKCkuY2xvbmUoKSk7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpe1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZS5nZXREaXN0YW5jZSh0aGlzLl9lbmRUaW1lKTtcbiAgfVxuXG4gIGdldFN0YXJ0VGltZSgpeyByZXR1cm4gdGhpcy5fc3RhcnRUaW1lOyB9XG4gIGdldEVuZFRpbWUoKXsgcmV0dXJuIHRoaXMuX2VuZFRpbWU7IH1cblxuICBzaGlmdEVuZFRpbWUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRpbWUuYWRkTWluKC10aGlzLmdldERpc3RhbmNlKCkpLCB0aW1lKTtcbiAgfVxuXG4gIHNoaWZ0U3RhcnRIb3VyKGhvdXIpe1xuICAgIHJldHVybiB0aGlzLnNoaWZ0U3RhcnRUaW1lKG5ldyBUaW1lKGhvdXIsIHRoaXMuX3N0YXJ0VGltZS5nZXRNaW4oKSkpO1xuICB9XG5cbiAgc2hpZnRTdGFydE1pbihtaW4pe1xuICAgIHJldHVybiB0aGlzLnNoaWZ0U3RhcnRUaW1lKG5ldyBUaW1lKHRoaXMuX3N0YXJ0VGltZS5nZXRIb3VyKCksIG1pbikpO1xuICB9XG5cbiAgc2hpZnRTdGFydFRpbWUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRpbWUsIHRpbWUuYWRkTWluKHRoaXMuZ2V0RGlzdGFuY2UoKSkpO1xuICB9XG5cbiAgYWRkTWluKG1pbnV0ZSl7XG4gICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aGlzLmdldFN0YXJ0VGltZSgpLCB0aGlzLmdldEVuZFRpbWUoKS5hZGRNaW4obWludXRlKSk7XG4gIH1cblxuICBlcXVhbHModGltZVNwYW4pe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuZXF1YWxzKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSAmJiB0aGlzLmdldEVuZFRpbWUoKS5lcXVhbHModGltZVNwYW4uZ2V0RW5kVGltZSgpKTtcbiAgfVxuXG4gIGNvbnRhaW5zKHRpbWVTcGFuKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUodGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpIDwgMCAmJiB0aGlzLmdldEVuZFRpbWUoKS5jb21wYXJlKHRpbWVTcGFuLmdldEVuZFRpbWUoKSkgPiAwO1xuICB9XG5cbiAgY29udGFpbnNUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuY29tcGFyZSh0aW1lKSA8IDAgJiYgdGhpcy5nZXRFbmRUaW1lKCkuY29tcGFyZSh0aW1lKSA+IDA7XG4gIH1cblxuICBvdmVybGFwcyh0aW1lU3Bhbil7XG4gICAgICBpZih0aW1lU3Bhbi5jb250YWlucyh0aGlzKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuY29udGFpbnNUaW1lKHRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuY29udGFpbnNUaW1lKHRpbWVTcGFuLmdldEVuZFRpbWUoKSkpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBlYWNoSG91cihjYWxsYmFjayl7XG4gICAgICB2YXIgaG91ciA9IHRoaXMuZ2V0U3RhcnRUaW1lKCkuZ2V0SG91cigpO1xuICAgICAgdmFyIGVuZCA9IHRoaXMuZ2V0RW5kVGltZSgpLmdldEhvdXIoKTtcbiAgICAgIHZhciBrZXkgPSAwO1xuXG4gICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICBpZihob3VyID09PSBlbmQpe1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGhvdXIsIGtleSwgaG91ciwgdGhpcy5nZXRFbmRUaW1lKCkuZ2V0TWluKCkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGhvdXIsIGtleSwgaG91cik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaG91ciArPSAxO1xuICAgICAgICAgICsra2V5O1xuICAgICAgfVxuICB9XG5cbiAgZWFjaFRpbWUoY2FsbGJhY2ssIG1pbnV0ZUludGVydmFsKXtcbiAgICAgIHZhciBrZXkgPSAwO1xuICAgICAgbWludXRlSW50ZXJ2YWwgPSBtaW51dGVJbnRlcnZhbCA/IG1pbnV0ZUludGVydmFsIDogNjA7XG5cbiAgICAgIHZhciB0aW1lID0gdGhpcy5nZXRTdGFydFRpbWUoKTtcbiAgICAgIHdoaWxlKHRydWUpe1xuICAgICAgICAgIGlmKHRpbWUuY29tcGFyZSh0aGlzLmdldEVuZFRpbWUoKSkgPiAwKXtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FsbGJhY2suY2FsbCh0aW1lLCBrZXksIHRpbWUpO1xuXG4gICAgICAgICAgdGltZSA9IHRpbWUuYWRkTWluKG1pbnV0ZUludGVydmFsKTtcbiAgICAgICAgICArK2tleTtcbiAgICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCl7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lICsgJ34nICsgdGhpcy5fZW5kVGltZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3Nlcy9UaW1lU3Bhbi5lczZcbiAqKi8iLCIvKipcbiAqIOS4gOW6pueUn+aIkOOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOBr+WkieabtOOBl+OBvuOBm+OCk+OAglxuICog5aSJ5pu044Oh44K944OD44OJ44Gv5paw44GX44GE44Kq44OW44K444Kn44Kv44OI44KS5biw44GX44G+44GZ44CCXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVcbntcbiAgc3RhdGljIGVhY2hNaW4oY2FsbGJhY2ssIG1pbnV0ZUludGVydmFsKXtcbiAgICAgIHZhciBjb3VudCA9IDYwIC8gbWludXRlSW50ZXJ2YWw7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICB2YXIgbWluID0gaSAqIG1pbnV0ZUludGVydmFsO1xuICAgICAgICAgIGlmKG1pbiA8IDYwKXtcbiAgICAgICAgICAgICAgdmFyIGRpc3BsYXlNaW4gPSBtaW4gPCAxMCA/ICcwJyArIG1pbiA6IG1pbiArICcnO1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKG1pbiwgaSwgbWluLCBkaXNwbGF5TWluKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiDphY3liJfjgYvjgolUaW1l44KS55Sf5oiQXG4gICAqIEBwYXJhbSAge2FycmF5fSB0aW1lIFtob3VyLCBtaW5d44Gu6YWN5YiXXG4gICAqIEByZXR1cm4ge1RpbWV9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRpbWVbMF0sIHRpbWVbMV0pO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGhvdXIsIG1pbil7XG4gICAgdGhpcy5faG91ciA9IGhvdXIgPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChob3VyLCAxMCk7XG4gICAgdGhpcy5fbWluID0gbWluID09PSB1bmRlZmluZWQgPyAwIDogcGFyc2VJbnQobWluLCAxMCk7XG4gICAgd2hpbGUodGhpcy5fbWluIDwgMCl7XG4gICAgICAgIC0tdGhpcy5faG91cjtcbiAgICAgICAgdGhpcy5fbWluID0gNjAgKyB0aGlzLl9taW47XG4gICAgfVxuXG4gICAgd2hpbGUodGhpcy5fbWluID4gNTkpe1xuICAgICAgICArK3RoaXMuX2hvdXI7XG4gICAgICAgIHRoaXMuX21pbiA9IHRoaXMuX21pbiAtIDYwO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX2hvdXIgPCAwKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudG9TdHJpbmcoKSsnIGlzIG5vdCB2YWxpZCB0aW1lLicpO1xuICAgIH1cbiAgfVxuXG4gIGdldEhvdXIoKXsgcmV0dXJuIHRoaXMuX2hvdXI7IH07XG4gIGdldE1pbigpeyByZXR1cm4gdGhpcy5fbWluOyB9O1xuXG4gIGNsb25lKCl7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGhpcy5nZXRIb3VyKCksIHRoaXMuZ2V0TWluKCkpO1xuICB9O1xuXG4gIGFkZE1pbihtaW4pe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lKHRoaXMuZ2V0SG91cigpLCB0aGlzLmdldE1pbigpICsgcGFyc2VJbnQobWluLCAxMCkpO1xuICB9O1xuXG4gIGVxdWFscyh0aW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmdldEhvdXIoKSA9PT0gdGltZS5nZXRIb3VyKCkgJiYgdGhpcy5nZXRNaW4oKSA9PT0gdGltZS5nZXRNaW4oKTtcbiAgfTtcblxuICBjb21wYXJlKHRpbWUpe1xuICAgICAgaWYodGhpcy5nZXRIb3VyKCkgPiB0aW1lLmdldEhvdXIoKSlcbiAgICAgIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodGhpcy5nZXRIb3VyKCkgPCB0aW1lLmdldEhvdXIoKSlcbiAgICAgIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgICAgaWYodGhpcy5nZXRNaW4oKSA+IHRpbWUuZ2V0TWluKCkpXG4gICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZih0aGlzLmdldE1pbigpIDwgdGltZS5nZXRNaW4oKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGdldERpc3RhbmNlKHRhcmdldFRpbWUpe1xuICAgICAgdmFyIHRhcmdldEhvdXIgPSB0YXJnZXRUaW1lLmdldEhvdXIoKTtcbiAgICAgIHZhciBob3VyRGlzdGFuY2UgPSB0YXJnZXRIb3VyIC0gdGhpcy5faG91cjtcbiAgICAgIHJldHVybiAoaG91ckRpc3RhbmNlICogNjApICsgKHRhcmdldFRpbWUuZ2V0TWluKCkgLSB0aGlzLl9taW4pO1xuICB9O1xuXG4gIHRvU3RyaW5nKCl7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXNwbGF5VGltZSgpO1xuICB9O1xuXG4gIGdldERpc3BsYXlIb3VyKCl7XG4gICAgICByZXR1cm4gdGhpcy5faG91ciA8IDI0ID8gdGhpcy5faG91ciA6IHRoaXMuX2hvdXIgLSAyNDtcbiAgfTtcblxuICBnZXREaXNwbGF5TWluKCl7XG4gICAgICByZXR1cm4gdGhpcy5fbWluIDwgMTAgPyAnMCcrdGhpcy5fbWluIDogdGhpcy5fbWluO1xuICB9O1xuXG4gIGdldERpc3BsYXlUaW1lKCl7XG4gICAgICByZXR1cm4gdGhpcy5nZXREaXNwbGF5SG91cigpICsnOicrIHRoaXMuZ2V0RGlzcGxheU1pbigpO1xuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNlxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQgfSBmcm9tICdyZWFjdC1kbmQnO1xuaW1wb3J0IERuZEJhY2tlbmQgZnJvbSAncmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQnO1xuaW1wb3J0IEV2ZW50UHJldmlldyBmcm9tICcuL0V2ZW50UHJldmlldyc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudCc7XG5pbXBvcnQgUnVsZXIgZnJvbSAnLi9SdWxlcic7XG5pbXBvcnQgTGluZUxhYmVsIGZyb20gJy4vTGluZUxhYmVsJztcbmltcG9ydCB7IERyb3BUYXJnZXQgfSBmcm9tICdyZWFjdC1kbmQnO1xuXG5cbmNvbnN0IHRhcmdldCA9IHtcbiAgZHJvcChwcm9wcywgbW9uaXRvciwgY29tcG9uZW50KSB7XG4gICAgY29uc3QgaXRlbSA9IG1vbml0b3IuZ2V0SXRlbSgpO1xuICAgIGNvbnN0IGRlbHRhID0gbW9uaXRvci5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKTtcblxuICAgIGNvbnN0IGluaXRhbE9mZnNldCA9IGl0ZW0uZHJhZ2dpbmdDb21wb25lbnQuZ2V0T2Zmc2V0KCk7XG4gICAgY29uc3QgdG9wID0gTWF0aC5yb3VuZChpbml0YWxPZmZzZXQudG9wICsgZGVsdGEueSk7XG4gICAgY29uc3QgbGVmdCA9IE1hdGgucm91bmQoaW5pdGFsT2Zmc2V0LmxlZnQgKyBkZWx0YS54KTtcblxuICAgIGl0ZW0uZHJhZ2dpbmdDb21wb25lbnQubW92ZVRvKHRvcCwgbGVmdCk7XG4gIH0sXG4gIGhvdmVyKHByb3BzLCBtb25pdG9yLCBjb21wb25lbnQpe1xuICAgIGNvbnN0IGNsaWVudE9mZnNldCA9IG1vbml0b3IuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gICAgaWYoY2xpZW50T2Zmc2V0KXtcbiAgICAgIGNvbnN0IGl0ZW0gPSBtb25pdG9yLmdldEl0ZW0oKTtcbiAgICAgIGNvbnN0IGxpbmVXcmFwcGVyQm91bmRzID0gY29tcG9uZW50LnJlZnMubGluZXNXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgbGluZUNvbXBvbmVudCA9IHByb3BzLnRpbWVsaW5lLmRyYWdnaW5nT3ZlcihjbGllbnRPZmZzZXQueCAtIGxpbmVXcmFwcGVyQm91bmRzLmxlZnQgKyAoaXRlbS5kcmFnZ2luZ0NvbXBvbmVudC5wcm9wcy53aWR0aCAvIDIvKmV2ZW5044Gu55yf44KT5Lit44KS5Z+65rqW44Gr44GZ44KLKi8pKTtcbiAgICAgIGNvbnN0IHRpbWUgPSBwcm9wcy50aW1lbGluZS50b3BUb1RpbWUoY2xpZW50T2Zmc2V0LnkgKyBjb21wb25lbnQucmVmcy5saW5lc1dyYXBwZXIuc2Nyb2xsVG9wIC0gbGluZVdyYXBwZXJCb3VuZHMudG9wKTtcbiAgICAgIGl0ZW0uZHJhZ2dpbmdDb21wb25lbnQuZHJhZ2dpbmcodGltZSwgbGluZUNvbXBvbmVudCA/IGxpbmVDb21wb25lbnQucHJvcHMuaWQgOiBudWxsKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNvbGxlY3QoY29ubmVjdCwgbW9uaXRvcikge1xuICByZXR1cm4ge1xuICAgIGNvbm5lY3REcm9wVGFyZ2V0OiBjb25uZWN0LmRyb3BUYXJnZXQoKVxuICB9O1xufVxuXG5jbGFzcyBGcmFtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHJ1bGVySW50ZXJ2YWwgPSA0O1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgZXZlbnRzOiB0aGlzLnByb3BzLmluaXRpYWxFdmVudHMsXG4gICAgfVxuXG4gICAgdGhpcy5yZXNpemluZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgcmVzaXplVXAoZXZlbnRDb21wb25lbnQsIGNsaWNrZWRUb3Ape1xuICAgIGNvbnN0IGluaXRpYWxIZWlnaHQgPSBldmVudENvbXBvbmVudC5zdGF0ZS5oZWlnaHQ7XG4gICAgY29uc3QgcHJldkJvdHRvbSA9IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0UHJldkJvdHRvbShldmVudENvbXBvbmVudCk7XG4gICAgY29uc3QgbW91c2VNb3ZlRXZlbnQgPSAobW92ZUV2ZW50KSA9PiB7XG4gICAgICBldmVudENvbXBvbmVudC5yZXNpemluZyA9IHRydWU7XG4gICAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgY2xpY2tlZFRvcCAtIG1vdmVFdmVudC5jbGllbnRZO1xuICAgICAgaWYodGFyZ2V0SGVpZ2h0ID4gMzYpe1xuICAgICAgICBsZXQgdGFyZ2V0VG9wID0gZXZlbnRDb21wb25lbnQuc3RhdGUudG9wIC0gKHRhcmdldEhlaWdodCAtIGV2ZW50Q29tcG9uZW50LnN0YXRlLmhlaWdodCk7XG4gICAgICAgIGlmKHRhcmdldFRvcCA8PSBwcmV2Qm90dG9tKXtcbiAgICAgICAgICB0YXJnZXRUb3AgPSBwcmV2Qm90dG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3BhbiA9IG5ldyBUaW1lU3Bhbih0aGlzLnByb3BzLnRpbWVsaW5lLnRvcFRvVGltZSh0YXJnZXRUb3ApLCBldmVudENvbXBvbmVudC5jdXJyZW50VGltZVNwYW4uZ2V0RW5kVGltZSgpKTtcbiAgICAgICAgZXZlbnRDb21wb25lbnQuc2V0U3RhdGUoe1xuICAgICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4pLFxuICAgICAgICAgIHRvcDogdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AoZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSksXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiBldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmdldERpc3BsYXlUaW1lKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHN0b3BNb3ZlRXZlbnQgPSAobW91c2VFdmVudCkgPT4ge1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudCk7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wTW92ZUV2ZW50KTtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHN0b3BNb3ZlRXZlbnQpO1xuICAgICAgZXZlbnRDb21wb25lbnQuZW5kUmVzaXppbmcobW91c2VFdmVudCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlRXZlbnQpO1xuICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BNb3ZlRXZlbnQpO1xuICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHN0b3BNb3ZlRXZlbnQpO1xuICB9XG5cbiAgcmVzaXplRG93bihldmVudENvbXBvbmVudCwgY2xpY2tlZFRvcCl7XG4gICAgY29uc3QgaW5pdGlhbEhlaWdodCA9IGV2ZW50Q29tcG9uZW50LnN0YXRlLmhlaWdodDtcbiAgICBjb25zdCBuZXh0VG9wID0gdGhpcy5wcm9wcy50aW1lbGluZS5nZXROZXh0VG9wKGV2ZW50Q29tcG9uZW50KTtcbiAgICBjb25zdCBtb3VzZU1vdmVFdmVudCA9IChtb3ZlRXZlbnQpID0+IHtcbiAgICAgIGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBtb3ZlRXZlbnQuY2xpZW50WSAtIGNsaWNrZWRUb3A7XG4gICAgICBpZih0YXJnZXRIZWlnaHQgPiAzNil7XG4gICAgICAgIGxldCB0YXJnZXRCb3R0b20gPSBldmVudENvbXBvbmVudC5zdGF0ZS50b3AgKyB0YXJnZXRIZWlnaHQ7XG4gICAgICAgIGlmKHRhcmdldEJvdHRvbSA+PSBuZXh0VG9wKXtcbiAgICAgICAgICB0YXJnZXRCb3R0b20gPSBuZXh0VG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3BhbiA9IG5ldyBUaW1lU3BhbihldmVudENvbXBvbmVudC5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCksIHRoaXMucHJvcHMudGltZWxpbmUudG9wVG9UaW1lKHRhcmdldEJvdHRvbSkpO1xuICAgICAgICBldmVudENvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQoZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3BhbiksXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiBldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuLmdldEVuZFRpbWUoKS5nZXREaXNwbGF5VGltZSgpLFxuICAgICAgICAgIGRyYWdnaW5nRGlzcGxheVRvcDogdGFyZ2V0SGVpZ2h0IC0gMTBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHN0b3BNb3ZlRXZlbnQgPSAobW91c2VFdmVudCkgPT4ge1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudCk7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wTW92ZUV2ZW50KTtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHN0b3BNb3ZlRXZlbnQpO1xuICAgICAgZXZlbnRDb21wb25lbnQuZW5kUmVzaXppbmcobW91c2VFdmVudCk7XG4gICAgfTtcblxuICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlRXZlbnQpO1xuICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BNb3ZlRXZlbnQpO1xuICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHN0b3BNb3ZlRXZlbnQpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnQoZXZlbnRJZCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXZlbnRzOiB0aGlzLnN0YXRlLmV2ZW50cy5maWx0ZXIoZXYgPT4gZXYuaWQgIT0gZXZlbnRJZCl9KTtcbiAgfVxuXG4gIHVwZGF0ZUV2ZW50cyhjYWxsYmFjayl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXZlbnRzOiBjYWxsYmFjayh0aGlzLnN0YXRlLmV2ZW50cyl9KTtcbiAgfVxuXG4gIGFkZEV2ZW50cyhldmVudHMpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHZhciBjdXJyZW50ID0gWy4uLnRoaXMuc3RhdGUuZXZlbnRzXTtcbiAgICAgIHZhciBldmVudElkcyA9IFtdO1xuICAgICAgZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICBpZighZXZlbnQuaWQpe1xuICAgICAgICAgIGV2ZW50LmlkID0gdGhpcy5wcm9wcy50aW1lbGluZS5jcmVhdGVFdmVudElkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRJZHMucHVzaChldmVudC5pZCk7XG4gICAgICAgIGN1cnJlbnQucHVzaChldmVudClcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXZlbnRzOiBjdXJyZW50fSwgKCkgPT4ge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IHRoaXMucHJvcHMudGltZWxpbmUuZXZlbnRDb21wb25lbnRzLmZpbHRlcihldmVudENvbXBvbmVudCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50SWRzLmluZGV4T2YoZXZlbnRDb21wb25lbnQucHJvcHMuaWQpICE9PSAtMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2hlaWdodDogaGVpZ2h0fSk7XG4gIH1cblxuICBnZXRSZWxhdGl2ZVBvcyhlKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBlLmNsaWVudFkgLSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0VG9wICsgZS5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCxcbiAgICAgIGxlZnQ6IGUuY2xpZW50WCAtIGUuY3VycmVudFRhcmdldC5vZmZzZXRMZWZ0ICsgZS5jdXJyZW50VGFyZ2V0LnNjcm9sbExlZnRcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1pbldpZHRoOiB0aGlzLnByb3BzLnRpbWVsaW5lLmdldFRvdGFsV2lkdGgoKVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIGNvbnN0IG5ld1N0YXRlID0ge307XG4gICAgLy/jgqTjg5njg7Pjg4jjga/mlbDjgYzlpJrjgYTjga7jgafotbDmn7vjgpLmnIDlsI/pmZDjgavjgZnjgovjgZ/jgoFzdGF0ZeOBq+OBl+OBn+OBjOOAgXRpbWVsaW5l44KS5Li444Gj44Go6Kqt44G/6L6844G/55u044GZ44Gu44Gr5a++5b+c44GZ44KL44Gf44KB44OB44Kn44OD44Kv44CCXG4gICAgLy/jgqTjg5njg7Pjg4jjgpLlpInmm7TjgZnjgovjgajjgY3jga/ln7rmnKx0aW1lbGluZeOBrumWouaVsOe1jOeUseOBp+ihjOOBhOOAgeWFqOOBpuiqreOBv+i+vOOBv+ebtOOBmeaZguOBoOOBkWluaXRpYWxFdmVudHPjgpLlpInmm7TjgZnjgovjgIJcbiAgICBpZihuZXh0UHJvcHMuaW5pdGlhbEV2ZW50cyAhPT0gdGhpcy5wcm9wcy5pbml0aWFsRXZlbnRzKXtcbiAgICAgIG5ld1N0YXRlLmV2ZW50cyA9IG5leHRQcm9wcy5pbml0aWFsRXZlbnRzO1xuICAgIH1cblxuICAgIGlmKG5leHRQcm9wcy5saW5lRGF0YSAhPT0gdGhpcy5wcm9wcy5saW5lRGF0YSl7XG4gICAgICBuZXdTdGF0ZS5taW5XaWR0aCA9IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0VG90YWxXaWR0aCgpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGNvbm5lY3REcm9wVGFyZ2V0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBjb25uZWN0RHJvcFRhcmdldChcbiAgICAgIDxkaXYgcmVmPXtlbGVtID0+IHRoaXMuZWxlbWVudCA9IGVsZW19IGNsYXNzTmFtZT1cInRsRnJhbWVWaWV3IHNjcm9sbFdyYXBwZXJcIiBzdHlsZT17e3dpZHRoOiB0aGlzLnByb3BzLndpZHRoLCBvdmVyZmxvd1g6ICdhdXRvJ319PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCIgc3R5bGU9e3ttaW5XaWR0aDogdGhpcy5zdGF0ZS5taW5XaWR0aCArIHRoaXMucHJvcHMuY2hpbGRXaWR0aH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsTGFiZWxWaWV3XCIgc3R5bGU9e3toZWlnaHQ6IExpbmVMYWJlbC5oZWlnaHR9fT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMubGluZURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNSdWxlciA9IGtleSAlIHRoaXMucHJvcHMucnVsZXJJbnRlcnZhbCA9PT0gMDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2UnVsZXIgPSAoa2V5ICsgMSkgJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgPExpbmVMYWJlbFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2RhdGEuaWQgKyBcIkBcIiArIGtleX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMubGluZVdpZHRofVxuICAgICAgICAgICAgICAgICAgICBoYXNSdWxlcj17aGFzUnVsZXJ9XG4gICAgICAgICAgICAgICAgICAgIHByZXZSdWxlcj17cHJldlJ1bGVyfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17ZGF0YS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgdGltZWxpbmU9e3RoaXMucHJvcHMudGltZWxpbmV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgcmVmPVwibGluZXNXcmFwcGVyXCIgY2xhc3NOYW1lPVwidGxMaW5lc1dyYXBwZXIgc2Nyb2xsV3JhcHBlclwiIHN0eWxlPXt7aGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCAtIExpbmVMYWJlbC5oZWlnaHR9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogdGhpcy5wcm9wcy5saW5lSGVpZ2h0LCBvdmVyZmxvd1k6IFwiaGlkZGVuXCIsIHBvc2l0aW9uOlwicmVsYXRpdmVcIn19PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpbmVEYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBoYXNSdWxlciA9IGtleSAlIHRoaXMucHJvcHMucnVsZXJJbnRlcnZhbCA9PT0gMDtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZSdWxlciA9IChrZXkgKyAxKSAlIHRoaXMucHJvcHMucnVsZXJJbnRlcnZhbCA9PT0gMDtcbiAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgPExpbmVcbiAgICAgICAgICAgICAgICAgICAgICByZWY9e1wibGluZUBcIiArIGRhdGEuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgaGFzUnVsZXI9e2hhc1J1bGVyfVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YS5pZCArIFwiQFwiICsga2V5fVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLmxpbmVXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICAgICAgICAgICAgICAgIGV2ZW49e2tleSAlIDIgPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgdGltZWxpbmU9e3RoaXMucHJvcHMudGltZWxpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFycz17ZGF0YS52YXJzfVxuICAgICAgICAgICAgICAgICAgICAgIGZyYW1lPXt0aGlzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmV2ZW50cy5tYXAoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgcmVmPXtcImV2ZW50QFwiICsgZXZlbnQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtldmVudC5rZXl8fGV2ZW50LmlkfVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtldmVudC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17ZXZlbnQuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgdGltZVNwYW49e2V2ZW50LnRpbWVTcGFufVxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e2V2ZW50LmRpc3BsYXl9XG4gICAgICAgICAgICAgICAgICAgICAgbGluZUlkPXtldmVudC5saW5lSWR9XG4gICAgICAgICAgICAgICAgICAgICAgdGltZWxpbmU9e3RoaXMucHJvcHMudGltZWxpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMudGltZWxpbmUucHJvcHMubGluZVdpZHRoIC0gMiAtIChMaW5lLnNpZGVQYWRkaW5nICogMil9XG4gICAgICAgICAgICAgICAgICAgICAgdmFycz17ZXZlbnQudmFyc31cbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdD17ZXZlbnQuZmxvYXR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPEV2ZW50UHJldmlldyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEZyYW1lLnByb3BUeXBlcyA9IHtcbi8vICAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuLy8gICBsaW5lRGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbi8vICAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuLy8gICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbi8vICAgfSkpLmlzUmVxdWlyZWQsXG4vLyAgIGxpbmVXaWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4vLyAgIHRpbWVsaW5lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4vLyAgIHJ1bGVySW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbi8vIH1cblxuRnJhbWUuZGVmYXVsdFByb3BzID0ge1xuICBldmVudHM6IFtdLFxuICBjaGlsZFdpZHRoOiAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmFnRHJvcENvbnRleHQoRG5kQmFja2VuZCh7IGVuYWJsZU1vdXNlRXZlbnRzOiB0cnVlIH0pKShEcm9wVGFyZ2V0KFwiRXZlbnRcIiwgdGFyZ2V0LCBjb2xsZWN0KShGcmFtZSkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9GcmFtZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IEhvdXIgZnJvbSAnLi9Ib3VyJztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBMaW5lTGFiZWwgZnJvbSAnLi9MaW5lTGFiZWwnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9UaW1lbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG91cnM6IFtdLFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICAgIGRyYWdnaW5nT3ZlcjogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5wcm9wcy50aW1lU3Bhbi5lYWNoVGltZSgoa2V5LCB0aW1lKSA9PiB7XG4gICAgICBpZighdGltZS5lcXVhbHModGhpcy5wcm9wcy50aW1lU3Bhbi5nZXRFbmRUaW1lKCkpKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5ob3Vycy5wdXNoKFxuICAgICAgICAgIDxIb3VyXG4gICAgICAgICAgICBrZXk9e3RpbWUuZ2V0SG91cigpfVxuICAgICAgICAgICAgdGltZT17dGltZX1cbiAgICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudmFycyA9IHRoaXMucHJvcHMudmFycyB8fCB7fTtcbiAgfVxuXG4gIGdldFJlbGF0aXZlVG9wKGUpe1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLnByb3BzLmZyYW1lLnJlZnMubGluZXNXcmFwcGVyO1xuICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiBlLmNsaWVudFkgLSBwYXJlbnRSZWN0LnRvcCArIHBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBpZih0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmxpbmVEaWRDbGljayl7XG4gICAgICBjb25zdCB0aW1lID0gdGhpcy5wcm9wcy50aW1lbGluZS50b3BUb1RpbWUodGhpcy5nZXRSZWxhdGl2ZVRvcChlKSk7XG4gICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmxpbmVEaWRDbGljayh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgZnJlZU1pbnV0ZTogdGhpcy5wcm9wcy50aW1lbGluZS5nZXRGcmVlTWludXRlKHRoaXMucHJvcHMuaWQsIHRpbWUpLFxuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy5wcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudC5yZWZzLmxpbmVzV3JhcHBlci5zY3JvbGxUb3AsXG4gICAgICAgICAgc2Nyb2xsTGVmdDogdGhpcy5wcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudC5lbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICAgICAgdG9wOiBlLmNsaWVudFksXG4gICAgICAgICAgbGVmdDogZS5jbGllbnRYLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Db250ZXh0TWVudShlKXtcbiAgICBpZih0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmxpbmVEaWRSaWdodENsaWNrKXtcbiAgICAgIHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMubGluZURpZFJpZ2h0Q2xpY2soe1xuICAgICAgICBldmVudDogZSxcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmFnZ2luZ092ZXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZ092ZXI6IHRydWV9KTtcbiAgfVxuXG4gIGNsZWFyRHJhZ2dpbmdPdmVyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmdPdmVyOiBmYWxzZX0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgb25Db250ZXh0TWVudT17ZSA9PiB0aGlzLm9uQ29udGV4dE1lbnUoZSl9PlxuICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnByb3BzLmhhc1J1bGVyKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxSdWxlclxuICAgICAgICAgICAgICAgIGtleT17J3J1bGVyXycgKyB0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgICAgICAgICAgdGltZVNwYW49e3RoaXMucHJvcHMudGltZVNwYW59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3RsTGluZVZpZXcnLCB7dGxFdmVuOiB0aGlzLnByb3BzLmV2ZW4sIHRsT2RkOiAhdGhpcy5wcm9wcy5ldmVufSwge3RsT3ZlcjogdGhpcy5zdGF0ZS5kcmFnZ2luZ092ZXJ9KX0gc3R5bGU9e3t3aWR0aDogdGhpcy5wcm9wcy53aWR0aCArICdweCd9fT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5ob3Vyc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxpbmUuc2lkZVBhZGRpbmcgPSAxO1xuXG4vLyBMaW5lLnByb3BUeXBlcyA9IHtcbi8vICAgd2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbi8vICAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbi8vICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4vLyAgIGV2ZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4vLyAgIC8vVE9ETyDlvqrnkrDlj4Lnhafjgavjgarjgovjga7jgadpbXBvcnTjgafjgY3jgZrjgILjgajjgorjgYLjgYjjgZphbnnjgafjgZTjgb7jgYvjgZfjgabjgb7jgZnjgIJcbi8vICAgdGltZWxpbmU6IFJlYWN0LlByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbi8vICAgaGFzUnVsZXI6IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbi8vIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGluZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi4vY2xhc3Nlcy9UaW1lJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWludXRlczogW11cbiAgICB9XG5cbiAgICBjb25zdCBtaW5TdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5taW5IZWlnaHQgKyAncHgnXG4gICAgfVxuICAgIFRpbWUuZWFjaE1pbigoa2V5LCBtaW4pID0+IHtcbiAgICAgIHRoaXMuc3RhdGUubWludXRlcy5wdXNoKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXttaW59XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0bE1pblZpZXcnLCAndGwnICsgKG1pbiArIDE1KSl9XG4gICAgICAgICAgc3R5bGU9e21pblN0eWxlfVxuICAgICAgICA+Jm5ic3A7PC9kaXY+XG4gICAgICApO1xuICAgIH0sIDE1KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxIb3VyVmlld1wiPnt0aGlzLnN0YXRlLm1pbnV0ZXN9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBIb3VyLnByb3BUeXBlcyA9IHtcbi8vICAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIHRpbWU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWUpLmlzUmVxdWlyZWRcbi8vIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSG91ci5qc3hcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdXJzOiBbXVxuICAgIH1cbiAgICB0aGlzLnByb3BzLnRpbWVTcGFuLmVhY2hUaW1lKChrZXksIHRpbWUpID0+IHtcbiAgICAgIGlmKCF0aW1lLmVxdWFscyh0aGlzLnByb3BzLnRpbWVTcGFuLmdldEVuZFRpbWUoKSkpe1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAvL2JvcmRlcjFweOOCkui2s+OBmVxuICAgICAgICAgIGhlaWdodDogKHRoaXMucHJvcHMubWluSGVpZ2h0ICsgMSkgKiA0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5ob3Vycy5wdXNoKFxuICAgICAgICAgIDxkaXYga2V5PXt0aW1lLmdldEhvdXIoKX0gc3R5bGU9e3N0eWxlfT57dGltZS5nZXREaXNwbGF5SG91cigpfTwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSdWxlclZpZXdcIiBzdHlsZT17e3dpZHRoOiBSdWxlci53aWR0aCArICdweCd9fT57dGhpcy5zdGF0ZS5ob3Vyc308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIFJ1bGVyLnByb3BUeXBlcyA9IHtcbi8vICAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZFxuLy8gfVxuXG5SdWxlci53aWR0aCA9IDMwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9SdWxlci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJ1bGVyIGZyb20gJy4vUnVsZXInO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVMYWJlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNSdWxlcjogdGhpcy5wcm9wcy5oYXNSdWxlcixcbiAgICAgIHByZXZSdWxlcjogdGhpcy5wcm9wcy5wcmV2UnVsZXIsXG4gICAgICBpc0xhc3Q6IHRydWVcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e3dpZHRoOiB0aGlzLnByb3BzLndpZHRoLCBtYXJnaW5MZWZ0OiB0aGlzLnN0YXRlLmhhc1J1bGVyID8gUnVsZXIud2lkdGggKyAncHgnIDogMH19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7dGxMYWJlbDogdHJ1ZSwgdGxIYXNSdWxlcjogdGhpcy5zdGF0ZS5oYXNSdWxlciwgdGxQcmV2UnVsZXI6IHRoaXMuc3RhdGUucHJldlJ1bGVyLCB0bExhc3Q6IHRoaXMuc3RhdGUuaXNMYXN0fSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5MaW5lTGFiZWwuaGVpZ2h0ID0gMTY7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xpbmVMYWJlbC5qc3hcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZShvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9ialsnZGVmYXVsdCddIDogb2JqOyB9XG5cbnZhciBfRHJhZ0Ryb3BDb250ZXh0ID0gcmVxdWlyZSgnLi9EcmFnRHJvcENvbnRleHQnKTtcblxuZXhwb3J0cy5EcmFnRHJvcENvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmUoX0RyYWdEcm9wQ29udGV4dCk7XG5cbnZhciBfRHJhZ0xheWVyID0gcmVxdWlyZSgnLi9EcmFnTGF5ZXInKTtcblxuZXhwb3J0cy5EcmFnTGF5ZXIgPSBfaW50ZXJvcFJlcXVpcmUoX0RyYWdMYXllcik7XG5cbnZhciBfRHJhZ1NvdXJjZSA9IHJlcXVpcmUoJy4vRHJhZ1NvdXJjZScpO1xuXG5leHBvcnRzLkRyYWdTb3VyY2UgPSBfaW50ZXJvcFJlcXVpcmUoX0RyYWdTb3VyY2UpO1xuXG52YXIgX0Ryb3BUYXJnZXQgPSByZXF1aXJlKCcuL0Ryb3BUYXJnZXQnKTtcblxuZXhwb3J0cy5Ecm9wVGFyZ2V0ID0gX2ludGVyb3BSZXF1aXJlKF9Ecm9wVGFyZ2V0KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9zbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJhZ0Ryb3BDb250ZXh0O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZG5kQ29yZSA9IHJlcXVpcmUoJ2RuZC1jb3JlJyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMnKTtcblxudmFyIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMpO1xuXG5mdW5jdGlvbiBEcmFnRHJvcENvbnRleHQoYmFja2VuZE9yTW9kdWxlKSB7XG4gIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMlsnZGVmYXVsdCddLmFwcGx5KHVuZGVmaW5lZCwgWydEcmFnRHJvcENvbnRleHQnLCAnYmFja2VuZCddLmNvbmNhdChfc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG5cbiAgLy8gQXV0by1kZXRlY3QgRVM2IGRlZmF1bHQgZXhwb3J0IGZvciBwZW9wbGUgc3RpbGwgdXNpbmcgRVM1XG4gIHZhciBiYWNrZW5kID0gdW5kZWZpbmVkO1xuICBpZiAodHlwZW9mIGJhY2tlbmRPck1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGJhY2tlbmRPck1vZHVsZVsnZGVmYXVsdCddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgYmFja2VuZCA9IGJhY2tlbmRPck1vZHVsZVsnZGVmYXVsdCddO1xuICB9IGVsc2Uge1xuICAgIGJhY2tlbmQgPSBiYWNrZW5kT3JNb2R1bGU7XG4gIH1cblxuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBiYWNrZW5kID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgdGhlIGJhY2tlbmQgdG8gYmUgYSBmdW5jdGlvbiBvciBhbiBFUzYgbW9kdWxlIGV4cG9ydGluZyBhIGRlZmF1bHQgZnVuY3Rpb24uICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1kcm9wLWNvbnRleHQuaHRtbCcpO1xuXG4gIHZhciBjaGlsZENvbnRleHQgPSB7XG4gICAgZHJhZ0Ryb3BNYW5hZ2VyOiBuZXcgX2RuZENvcmUuRHJhZ0Ryb3BNYW5hZ2VyKGJhY2tlbmQpXG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRlQ29udGV4dChEZWNvcmF0ZWRDb21wb25lbnQpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBEZWNvcmF0ZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgRGVjb3JhdGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cbiAgICByZXR1cm4gKGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyKTtcblxuICAgICAgICBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIERyYWdEcm9wQ29udGV4dENvbnRhaW5lci5wcm90b3R5cGUuZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5jaGlsZDtcbiAgICAgIH07XG5cbiAgICAgIERyYWdEcm9wQ29udGV4dENvbnRhaW5lci5wcm90b3R5cGUuZ2V0TWFuYWdlciA9IGZ1bmN0aW9uIGdldE1hbmFnZXIoKSB7XG4gICAgICAgIHJldHVybiBjaGlsZENvbnRleHQuZHJhZ0Ryb3BNYW5hZ2VyO1xuICAgICAgfTtcblxuICAgICAgRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiBjaGlsZENvbnRleHQ7XG4gICAgICB9O1xuXG4gICAgICBEcmFnRHJvcENvbnRleHRDb250YWluZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KERlY29yYXRlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICByZWY6ICdjaGlsZCcgfSkpO1xuICAgICAgfTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKERyYWdEcm9wQ29udGV4dENvbnRhaW5lciwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnRGVjb3JhdGVkQ29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IERlY29yYXRlZENvbXBvbmVudCxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNwbGF5TmFtZScsXG4gICAgICAgIHZhbHVlOiAnRHJhZ0Ryb3BDb250ZXh0KCcgKyBkaXNwbGF5TmFtZSArICcpJyxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjaGlsZENvbnRleHRUeXBlcycsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgZHJhZ0Ryb3BNYW5hZ2VyOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIERyYWdEcm9wQ29udGV4dENvbnRhaW5lcjtcbiAgICB9KShfcmVhY3QuQ29tcG9uZW50KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9EcmFnRHJvcENvbnRleHQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmUob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmpbJ2RlZmF1bHQnXSA6IG9iajsgfVxuXG52YXIgX0RyYWdEcm9wTWFuYWdlciA9IHJlcXVpcmUoJy4vRHJhZ0Ryb3BNYW5hZ2VyJyk7XG5cbmV4cG9ydHMuRHJhZ0Ryb3BNYW5hZ2VyID0gX2ludGVyb3BSZXF1aXJlKF9EcmFnRHJvcE1hbmFnZXIpO1xuXG52YXIgX0RyYWdTb3VyY2UgPSByZXF1aXJlKCcuL0RyYWdTb3VyY2UnKTtcblxuZXhwb3J0cy5EcmFnU291cmNlID0gX2ludGVyb3BSZXF1aXJlKF9EcmFnU291cmNlKTtcblxudmFyIF9Ecm9wVGFyZ2V0ID0gcmVxdWlyZSgnLi9Ecm9wVGFyZ2V0Jyk7XG5cbmV4cG9ydHMuRHJvcFRhcmdldCA9IF9pbnRlcm9wUmVxdWlyZShfRHJvcFRhcmdldCk7XG5cbnZhciBfYmFja2VuZHNDcmVhdGVUZXN0QmFja2VuZCA9IHJlcXVpcmUoJy4vYmFja2VuZHMvY3JlYXRlVGVzdEJhY2tlbmQnKTtcblxuZXhwb3J0cy5jcmVhdGVUZXN0QmFja2VuZCA9IF9pbnRlcm9wUmVxdWlyZShfYmFja2VuZHNDcmVhdGVUZXN0QmFja2VuZCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9yZWR1eExpYkNyZWF0ZVN0b3JlID0gcmVxdWlyZSgncmVkdXgvbGliL2NyZWF0ZVN0b3JlJyk7XG5cbnZhciBfcmVkdXhMaWJDcmVhdGVTdG9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWR1eExpYkNyZWF0ZVN0b3JlKTtcblxudmFyIF9yZWR1Y2VycyA9IHJlcXVpcmUoJy4vcmVkdWNlcnMnKTtcblxudmFyIF9yZWR1Y2VyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWR1Y2Vycyk7XG5cbnZhciBfYWN0aW9uc0RyYWdEcm9wID0gcmVxdWlyZSgnLi9hY3Rpb25zL2RyYWdEcm9wJyk7XG5cbnZhciBkcmFnRHJvcEFjdGlvbnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfYWN0aW9uc0RyYWdEcm9wKTtcblxudmFyIF9EcmFnRHJvcE1vbml0b3IgPSByZXF1aXJlKCcuL0RyYWdEcm9wTW9uaXRvcicpO1xuXG52YXIgX0RyYWdEcm9wTW9uaXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EcmFnRHJvcE1vbml0b3IpO1xuXG52YXIgX0hhbmRsZXJSZWdpc3RyeSA9IHJlcXVpcmUoJy4vSGFuZGxlclJlZ2lzdHJ5Jyk7XG5cbnZhciBfSGFuZGxlclJlZ2lzdHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hhbmRsZXJSZWdpc3RyeSk7XG5cbnZhciBEcmFnRHJvcE1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEcmFnRHJvcE1hbmFnZXIoY3JlYXRlQmFja2VuZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnRHJvcE1hbmFnZXIpO1xuXG4gICAgdmFyIHN0b3JlID0gX3JlZHV4TGliQ3JlYXRlU3RvcmUyWydkZWZhdWx0J10oX3JlZHVjZXJzMlsnZGVmYXVsdCddKTtcblxuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICB0aGlzLm1vbml0b3IgPSBuZXcgX0RyYWdEcm9wTW9uaXRvcjJbJ2RlZmF1bHQnXShzdG9yZSk7XG4gICAgdGhpcy5yZWdpc3RyeSA9IHRoaXMubW9uaXRvci5yZWdpc3RyeTtcbiAgICB0aGlzLmJhY2tlbmQgPSBjcmVhdGVCYWNrZW5kKHRoaXMpO1xuXG4gICAgc3RvcmUuc3Vic2NyaWJlKHRoaXMuaGFuZGxlUmVmQ291bnRDaGFuZ2UuYmluZCh0aGlzKSk7XG4gIH1cblxuICBEcmFnRHJvcE1hbmFnZXIucHJvdG90eXBlLmhhbmRsZVJlZkNvdW50Q2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlUmVmQ291bnRDaGFuZ2UoKSB7XG4gICAgdmFyIHNob3VsZFNldFVwID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnJlZkNvdW50ID4gMDtcbiAgICBpZiAoc2hvdWxkU2V0VXAgJiYgIXRoaXMuaXNTZXRVcCkge1xuICAgICAgdGhpcy5iYWNrZW5kLnNldHVwKCk7XG4gICAgICB0aGlzLmlzU2V0VXAgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXNob3VsZFNldFVwICYmIHRoaXMuaXNTZXRVcCkge1xuICAgICAgdGhpcy5iYWNrZW5kLnRlYXJkb3duKCk7XG4gICAgICB0aGlzLmlzU2V0VXAgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgRHJhZ0Ryb3BNYW5hZ2VyLnByb3RvdHlwZS5nZXRNb25pdG9yID0gZnVuY3Rpb24gZ2V0TW9uaXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5tb25pdG9yO1xuICB9O1xuXG4gIERyYWdEcm9wTWFuYWdlci5wcm90b3R5cGUuZ2V0QmFja2VuZCA9IGZ1bmN0aW9uIGdldEJhY2tlbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja2VuZDtcbiAgfTtcblxuICBEcmFnRHJvcE1hbmFnZXIucHJvdG90eXBlLmdldFJlZ2lzdHJ5ID0gZnVuY3Rpb24gZ2V0UmVnaXN0cnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0cnk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNYW5hZ2VyLnByb3RvdHlwZS5nZXRBY3Rpb25zID0gZnVuY3Rpb24gZ2V0QWN0aW9ucygpIHtcbiAgICB2YXIgbWFuYWdlciA9IHRoaXM7XG4gICAgdmFyIGRpc3BhdGNoID0gdGhpcy5zdG9yZS5kaXNwYXRjaDtcblxuICAgIGZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSBhY3Rpb25DcmVhdG9yLmFwcGx5KG1hbmFnZXIsIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRyYWdEcm9wQWN0aW9ucykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZHJhZ0Ryb3BBY3Rpb25zW2tleV0gPT09ICdmdW5jdGlvbic7XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uIChib3VuZEFjdGlvbnMsIGtleSkge1xuICAgICAgYm91bmRBY3Rpb25zW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihkcmFnRHJvcEFjdGlvbnNba2V5XSk7XG4gICAgICByZXR1cm4gYm91bmRBY3Rpb25zO1xuICAgIH0sIHt9KTtcbiAgfTtcblxuICByZXR1cm4gRHJhZ0Ryb3BNYW5hZ2VyO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJhZ0Ryb3BNYW5hZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL0RyYWdEcm9wTWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFjdGlvblR5cGVzID0gdW5kZWZpbmVkO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVTdG9yZTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG52YXIgX3N5bWJvbE9ic2VydmFibGUgPSByZXF1aXJlKCdzeW1ib2wtb2JzZXJ2YWJsZScpO1xuXG52YXIgX3N5bWJvbE9ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sT2JzZXJ2YWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xudmFyIEFjdGlvblR5cGVzID0gZXhwb3J0cy5BY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogJ0BAcmVkdXgvSU5JVCdcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtpbml0aWFsU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAqIHByZXZpb3VzbHkgc2VyaWFsaXplZCB1c2VyIHNlc3Npb24uXG4gKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVuaGFuY2VyIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gKlxuICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gaW5pdGlhbFN0YXRlO1xuICAgIGluaXRpYWxTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSByZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgY3VycmVudFJlZHVjZXIgPSByZWR1Y2VyO1xuICB2YXIgY3VycmVudFN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDJbXCJkZWZhdWx0XCJdKShhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXSgpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3plbnBhcnNpbmcvZXMtb2JzZXJ2YWJsZVxuICAgKi9cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBvdXRlclN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICByZXR1cm4gX3JlZiA9IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMge3N1YnNjcmlwdGlvbn0gQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG5cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHsgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlIH07XG4gICAgICB9XG4gICAgfSwgX3JlZltfc3ltYm9sT2JzZXJ2YWJsZTJbXCJkZWZhdWx0XCJdXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH1cblxuICAvLyBXaGVuIGEgc3RvcmUgaXMgY3JlYXRlZCwgYW4gXCJJTklUXCIgYWN0aW9uIGlzIGRpc3BhdGNoZWQgc28gdGhhdCBldmVyeVxuICAvLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cbiAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuXG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMltfc3ltYm9sT2JzZXJ2YWJsZTJbXCJkZWZhdWx0XCJdXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4L2xpYi9jcmVhdGVTdG9yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNIb3N0T2JqZWN0ID0gcmVxdWlyZSgnLi9faXNIb3N0T2JqZWN0JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8XG4gICAgICBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSAhPSBvYmplY3RUYWcgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiZcbiAgICBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJiBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzUGxhaW5PYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuLyoqXG4gKiBHZXRzIHRoZSBgW1tQcm90b3R5cGVdXWAgb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7bnVsbHxPYmplY3R9IFJldHVybnMgdGhlIGBbW1Byb3RvdHlwZV1dYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvdG90eXBlKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVHZXRQcm90b3R5cGUoT2JqZWN0KHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0hvc3RPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2lzSG9zdE9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3BvbnlmaWxsJykoZ2xvYmFsIHx8IHdpbmRvdyB8fCB0aGlzKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdFN5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3ltYm9sLW9ic2VydmFibGUvcG9ueWZpbGwuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZHJhZ09mZnNldCA9IHJlcXVpcmUoJy4vZHJhZ09mZnNldCcpO1xuXG52YXIgX2RyYWdPZmZzZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZHJhZ09mZnNldCk7XG5cbnZhciBfZHJhZ09wZXJhdGlvbiA9IHJlcXVpcmUoJy4vZHJhZ09wZXJhdGlvbicpO1xuXG52YXIgX2RyYWdPcGVyYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZHJhZ09wZXJhdGlvbik7XG5cbnZhciBfcmVmQ291bnQgPSByZXF1aXJlKCcuL3JlZkNvdW50Jyk7XG5cbnZhciBfcmVmQ291bnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVmQ291bnQpO1xuXG52YXIgX2RpcnR5SGFuZGxlcklkcyA9IHJlcXVpcmUoJy4vZGlydHlIYW5kbGVySWRzJyk7XG5cbnZhciBfZGlydHlIYW5kbGVySWRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RpcnR5SGFuZGxlcklkcyk7XG5cbnZhciBfc3RhdGVJZCA9IHJlcXVpcmUoJy4vc3RhdGVJZCcpO1xuXG52YXIgX3N0YXRlSWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVJZCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSBzdGF0ZSA9IHt9O1xuXG4gIHJldHVybiB7XG4gICAgZGlydHlIYW5kbGVySWRzOiBfZGlydHlIYW5kbGVySWRzMlsnZGVmYXVsdCddKHN0YXRlLmRpcnR5SGFuZGxlcklkcywgYWN0aW9uLCBzdGF0ZS5kcmFnT3BlcmF0aW9uKSxcbiAgICBkcmFnT2Zmc2V0OiBfZHJhZ09mZnNldDJbJ2RlZmF1bHQnXShzdGF0ZS5kcmFnT2Zmc2V0LCBhY3Rpb24pLFxuICAgIHJlZkNvdW50OiBfcmVmQ291bnQyWydkZWZhdWx0J10oc3RhdGUucmVmQ291bnQsIGFjdGlvbiksXG4gICAgZHJhZ09wZXJhdGlvbjogX2RyYWdPcGVyYXRpb24yWydkZWZhdWx0J10oc3RhdGUuZHJhZ09wZXJhdGlvbiwgYWN0aW9uKSxcbiAgICBzdGF0ZUlkOiBfc3RhdGVJZDJbJ2RlZmF1bHQnXShzdGF0ZS5zdGF0ZUlkKVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZHJhZ09mZnNldDtcbmV4cG9ydHMuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gZ2V0U291cmNlQ2xpZW50T2Zmc2V0O1xuZXhwb3J0cy5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQgPSBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQ7XG5cbnZhciBfYWN0aW9uc0RyYWdEcm9wID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9kcmFnRHJvcCcpO1xuXG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICBpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0OiBudWxsLFxuICBpbml0aWFsQ2xpZW50T2Zmc2V0OiBudWxsLFxuICBjbGllbnRPZmZzZXQ6IG51bGxcbn07XG5cbmZ1bmN0aW9uIGFyZU9mZnNldHNFcXVhbChvZmZzZXRBLCBvZmZzZXRCKSB7XG4gIGlmIChvZmZzZXRBID09PSBvZmZzZXRCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIG9mZnNldEEgJiYgb2Zmc2V0QiAmJiBvZmZzZXRBLnggPT09IG9mZnNldEIueCAmJiBvZmZzZXRBLnkgPT09IG9mZnNldEIueTtcbn1cblxuZnVuY3Rpb24gZHJhZ09mZnNldChzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkJFR0lOX0RSQUc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0OiBhY3Rpb24uc291cmNlQ2xpZW50T2Zmc2V0LFxuICAgICAgICBpbml0aWFsQ2xpZW50T2Zmc2V0OiBhY3Rpb24uY2xpZW50T2Zmc2V0LFxuICAgICAgICBjbGllbnRPZmZzZXQ6IGFjdGlvbi5jbGllbnRPZmZzZXRcbiAgICAgIH07XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkhPVkVSOlxuICAgICAgaWYgKGFyZU9mZnNldHNFcXVhbChzdGF0ZS5jbGllbnRPZmZzZXQsIGFjdGlvbi5jbGllbnRPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY2xpZW50T2Zmc2V0OiBhY3Rpb24uY2xpZW50T2Zmc2V0XG4gICAgICB9KTtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuRU5EX0RSQUc6XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkRST1A6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KHN0YXRlKSB7XG4gIHZhciBjbGllbnRPZmZzZXQgPSBzdGF0ZS5jbGllbnRPZmZzZXQ7XG4gIHZhciBpbml0aWFsQ2xpZW50T2Zmc2V0ID0gc3RhdGUuaW5pdGlhbENsaWVudE9mZnNldDtcbiAgdmFyIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQgPSBzdGF0ZS5pbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0O1xuXG4gIGlmICghY2xpZW50T2Zmc2V0IHx8ICFpbml0aWFsQ2xpZW50T2Zmc2V0IHx8ICFpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiBjbGllbnRPZmZzZXQueCArIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQueCAtIGluaXRpYWxDbGllbnRPZmZzZXQueCxcbiAgICB5OiBjbGllbnRPZmZzZXQueSArIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQueSAtIGluaXRpYWxDbGllbnRPZmZzZXQueVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoc3RhdGUpIHtcbiAgdmFyIGNsaWVudE9mZnNldCA9IHN0YXRlLmNsaWVudE9mZnNldDtcbiAgdmFyIGluaXRpYWxDbGllbnRPZmZzZXQgPSBzdGF0ZS5pbml0aWFsQ2xpZW50T2Zmc2V0O1xuXG4gIGlmICghY2xpZW50T2Zmc2V0IHx8ICFpbml0aWFsQ2xpZW50T2Zmc2V0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiBjbGllbnRPZmZzZXQueCAtIGluaXRpYWxDbGllbnRPZmZzZXQueCxcbiAgICB5OiBjbGllbnRPZmZzZXQueSAtIGluaXRpYWxDbGllbnRPZmZzZXQueVxuICB9O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT2Zmc2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuYmVnaW5EcmFnID0gYmVnaW5EcmFnO1xuZXhwb3J0cy5wdWJsaXNoRHJhZ1NvdXJjZSA9IHB1Ymxpc2hEcmFnU291cmNlO1xuZXhwb3J0cy5ob3ZlciA9IGhvdmVyO1xuZXhwb3J0cy5kcm9wID0gZHJvcDtcbmV4cG9ydHMuZW5kRHJhZyA9IGVuZERyYWc7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlsc01hdGNoZXNUeXBlID0gcmVxdWlyZSgnLi4vdXRpbHMvbWF0Y2hlc1R5cGUnKTtcblxudmFyIF91dGlsc01hdGNoZXNUeXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzTWF0Y2hlc1R5cGUpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNBcnJheSk7XG5cbnZhciBfbG9kYXNoSXNPYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNPYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc09iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc09iamVjdCk7XG5cbnZhciBCRUdJTl9EUkFHID0gJ2RuZC1jb3JlL0JFR0lOX0RSQUcnO1xuZXhwb3J0cy5CRUdJTl9EUkFHID0gQkVHSU5fRFJBRztcbnZhciBQVUJMSVNIX0RSQUdfU09VUkNFID0gJ2RuZC1jb3JlL1BVQkxJU0hfRFJBR19TT1VSQ0UnO1xuZXhwb3J0cy5QVUJMSVNIX0RSQUdfU09VUkNFID0gUFVCTElTSF9EUkFHX1NPVVJDRTtcbnZhciBIT1ZFUiA9ICdkbmQtY29yZS9IT1ZFUic7XG5leHBvcnRzLkhPVkVSID0gSE9WRVI7XG52YXIgRFJPUCA9ICdkbmQtY29yZS9EUk9QJztcbmV4cG9ydHMuRFJPUCA9IERST1A7XG52YXIgRU5EX0RSQUcgPSAnZG5kLWNvcmUvRU5EX0RSQUcnO1xuXG5leHBvcnRzLkVORF9EUkFHID0gRU5EX0RSQUc7XG5cbmZ1bmN0aW9uIGJlZ2luRHJhZyhzb3VyY2VJZHMpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgX3JlZiRwdWJsaXNoU291cmNlID0gX3JlZi5wdWJsaXNoU291cmNlO1xuICB2YXIgcHVibGlzaFNvdXJjZSA9IF9yZWYkcHVibGlzaFNvdXJjZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkcHVibGlzaFNvdXJjZTtcbiAgdmFyIF9yZWYkY2xpZW50T2Zmc2V0ID0gX3JlZi5jbGllbnRPZmZzZXQ7XG4gIHZhciBjbGllbnRPZmZzZXQgPSBfcmVmJGNsaWVudE9mZnNldCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWYkY2xpZW50T2Zmc2V0O1xuICB2YXIgZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gX3JlZi5nZXRTb3VyY2VDbGllbnRPZmZzZXQ7XG5cbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNBcnJheTJbJ2RlZmF1bHQnXShzb3VyY2VJZHMpLCAnRXhwZWN0ZWQgc291cmNlSWRzIHRvIGJlIGFuIGFycmF5LicpO1xuXG4gIHZhciBtb25pdG9yID0gdGhpcy5nZXRNb25pdG9yKCk7XG4gIHZhciByZWdpc3RyeSA9IHRoaXMuZ2V0UmVnaXN0cnkoKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSghbW9uaXRvci5pc0RyYWdnaW5nKCksICdDYW5ub3QgY2FsbCBiZWdpbkRyYWcgd2hpbGUgZHJhZ2dpbmcuJyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VJZHMubGVuZ3RoOyBpKyspIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZHNbaV0pLCAnRXhwZWN0ZWQgc291cmNlSWRzIHRvIGJlIHJlZ2lzdGVyZWQuJyk7XG4gIH1cblxuICB2YXIgc291cmNlSWQgPSBudWxsO1xuICBmb3IgKHZhciBpID0gc291cmNlSWRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKG1vbml0b3IuY2FuRHJhZ1NvdXJjZShzb3VyY2VJZHNbaV0pKSB7XG4gICAgICBzb3VyY2VJZCA9IHNvdXJjZUlkc1tpXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAoc291cmNlSWQgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc291cmNlQ2xpZW50T2Zmc2V0ID0gbnVsbDtcbiAgaWYgKGNsaWVudE9mZnNldCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGdldFNvdXJjZUNsaWVudE9mZnNldCA9PT0gJ2Z1bmN0aW9uJywgJ1doZW4gY2xpZW50T2Zmc2V0IGlzIHByb3ZpZGVkLCBnZXRTb3VyY2VDbGllbnRPZmZzZXQgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIHNvdXJjZUNsaWVudE9mZnNldCA9IGdldFNvdXJjZUNsaWVudE9mZnNldChzb3VyY2VJZCk7XG4gIH1cblxuICB2YXIgc291cmNlID0gcmVnaXN0cnkuZ2V0U291cmNlKHNvdXJjZUlkKTtcbiAgdmFyIGl0ZW0gPSBzb3VyY2UuYmVnaW5EcmFnKG1vbml0b3IsIHNvdXJjZUlkKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNPYmplY3QyWydkZWZhdWx0J10oaXRlbSksICdJdGVtIG11c3QgYmUgYW4gb2JqZWN0LicpO1xuXG4gIHJlZ2lzdHJ5LnBpblNvdXJjZShzb3VyY2VJZCk7XG5cbiAgdmFyIGl0ZW1UeXBlID0gcmVnaXN0cnkuZ2V0U291cmNlVHlwZShzb3VyY2VJZCk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQkVHSU5fRFJBRyxcbiAgICBpdGVtVHlwZTogaXRlbVR5cGUsXG4gICAgaXRlbTogaXRlbSxcbiAgICBzb3VyY2VJZDogc291cmNlSWQsXG4gICAgY2xpZW50T2Zmc2V0OiBjbGllbnRPZmZzZXQsXG4gICAgc291cmNlQ2xpZW50T2Zmc2V0OiBzb3VyY2VDbGllbnRPZmZzZXQsXG4gICAgaXNTb3VyY2VQdWJsaWM6IHB1Ymxpc2hTb3VyY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHVibGlzaERyYWdTb3VyY2UobWFuYWdlcikge1xuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICBpZiAoIW1vbml0b3IuaXNEcmFnZ2luZygpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBQVUJMSVNIX0RSQUdfU09VUkNFXG4gIH07XG59XG5cbmZ1bmN0aW9uIGhvdmVyKHRhcmdldElkcykge1xuICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgX3JlZjIkY2xpZW50T2Zmc2V0ID0gX3JlZjIuY2xpZW50T2Zmc2V0O1xuICB2YXIgY2xpZW50T2Zmc2V0ID0gX3JlZjIkY2xpZW50T2Zmc2V0ID09PSB1bmRlZmluZWQgPyBudWxsIDogX3JlZjIkY2xpZW50T2Zmc2V0O1xuXG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzQXJyYXkyWydkZWZhdWx0J10odGFyZ2V0SWRzKSwgJ0V4cGVjdGVkIHRhcmdldElkcyB0byBiZSBhbiBhcnJheS4nKTtcbiAgdGFyZ2V0SWRzID0gdGFyZ2V0SWRzLnNsaWNlKDApO1xuXG4gIHZhciBtb25pdG9yID0gdGhpcy5nZXRNb25pdG9yKCk7XG4gIHZhciByZWdpc3RyeSA9IHRoaXMuZ2V0UmVnaXN0cnkoKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShtb25pdG9yLmlzRHJhZ2dpbmcoKSwgJ0Nhbm5vdCBjYWxsIGhvdmVyIHdoaWxlIG5vdCBkcmFnZ2luZy4nKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSghbW9uaXRvci5kaWREcm9wKCksICdDYW5ub3QgY2FsbCBob3ZlciBhZnRlciBkcm9wLicpO1xuXG4gIC8vIEZpcnN0IGNoZWNrIGludmFyaWFudHMuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0SWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRhcmdldElkID0gdGFyZ2V0SWRzW2ldO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGFyZ2V0SWRzLmxhc3RJbmRleE9mKHRhcmdldElkKSA9PT0gaSwgJ0V4cGVjdGVkIHRhcmdldElkcyB0byBiZSB1bmlxdWUgaW4gdGhlIHBhc3NlZCBhcnJheS4nKTtcblxuICAgIHZhciB0YXJnZXQgPSByZWdpc3RyeS5nZXRUYXJnZXQodGFyZ2V0SWQpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGFyZ2V0LCAnRXhwZWN0ZWQgdGFyZ2V0SWRzIHRvIGJlIHJlZ2lzdGVyZWQuJyk7XG4gIH1cblxuICB2YXIgZHJhZ2dlZEl0ZW1UeXBlID0gbW9uaXRvci5nZXRJdGVtVHlwZSgpO1xuXG4gIC8vIFJlbW92ZSB0aG9zZSB0YXJnZXRJZHMgdGhhdCBkb24ndCBtYXRjaCB0aGUgdGFyZ2V0VHlwZS4gIFRoaXNcbiAgLy8gZml4ZXMgc2hhbGxvdyBpc092ZXIgd2hpY2ggd291bGQgb25seSBiZSBub24tc2hhbGxvdyBiZWNhdXNlIG9mXG4gIC8vIG5vbi1tYXRjaGluZyB0YXJnZXRzLlxuICBmb3IgKHZhciBpID0gdGFyZ2V0SWRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHRhcmdldElkID0gdGFyZ2V0SWRzW2ldO1xuICAgIHZhciB0YXJnZXRUeXBlID0gcmVnaXN0cnkuZ2V0VGFyZ2V0VHlwZSh0YXJnZXRJZCk7XG4gICAgaWYgKCFfdXRpbHNNYXRjaGVzVHlwZTJbJ2RlZmF1bHQnXSh0YXJnZXRUeXBlLCBkcmFnZ2VkSXRlbVR5cGUpKSB7XG4gICAgICB0YXJnZXRJZHMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmFsbHkgY2FsbCBob3ZlciBvbiBhbGwgbWF0Y2hpbmcgdGFyZ2V0cy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXJnZXRJZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdGFyZ2V0SWQgPSB0YXJnZXRJZHNbaV07XG4gICAgdmFyIHRhcmdldCA9IHJlZ2lzdHJ5LmdldFRhcmdldCh0YXJnZXRJZCk7XG4gICAgdGFyZ2V0LmhvdmVyKG1vbml0b3IsIHRhcmdldElkKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogSE9WRVIsXG4gICAgdGFyZ2V0SWRzOiB0YXJnZXRJZHMsXG4gICAgY2xpZW50T2Zmc2V0OiBjbGllbnRPZmZzZXRcbiAgfTtcbn1cblxuZnVuY3Rpb24gZHJvcCgpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICB2YXIgcmVnaXN0cnkgPSB0aGlzLmdldFJlZ2lzdHJ5KCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10obW9uaXRvci5pc0RyYWdnaW5nKCksICdDYW5ub3QgY2FsbCBkcm9wIHdoaWxlIG5vdCBkcmFnZ2luZy4nKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSghbW9uaXRvci5kaWREcm9wKCksICdDYW5ub3QgY2FsbCBkcm9wIHR3aWNlIGR1cmluZyBvbmUgZHJhZyBvcGVyYXRpb24uJyk7XG5cbiAgdmFyIHRhcmdldElkcyA9IG1vbml0b3IuZ2V0VGFyZ2V0SWRzKCkuZmlsdGVyKG1vbml0b3IuY2FuRHJvcE9uVGFyZ2V0LCBtb25pdG9yKTtcblxuICB0YXJnZXRJZHMucmV2ZXJzZSgpO1xuICB0YXJnZXRJZHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0SWQsIGluZGV4KSB7XG4gICAgdmFyIHRhcmdldCA9IHJlZ2lzdHJ5LmdldFRhcmdldCh0YXJnZXRJZCk7XG5cbiAgICB2YXIgZHJvcFJlc3VsdCA9IHRhcmdldC5kcm9wKG1vbml0b3IsIHRhcmdldElkKTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBkcm9wUmVzdWx0ID09PSAndW5kZWZpbmVkJyB8fCBfbG9kYXNoSXNPYmplY3QyWydkZWZhdWx0J10oZHJvcFJlc3VsdCksICdEcm9wIHJlc3VsdCBtdXN0IGVpdGhlciBiZSBhbiBvYmplY3Qgb3IgdW5kZWZpbmVkLicpO1xuICAgIGlmICh0eXBlb2YgZHJvcFJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRyb3BSZXN1bHQgPSBpbmRleCA9PT0gMCA/IHt9IDogbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XG4gICAgfVxuXG4gICAgX3RoaXMuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRFJPUCxcbiAgICAgIGRyb3BSZXN1bHQ6IGRyb3BSZXN1bHRcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuZERyYWcoKSB7XG4gIHZhciBtb25pdG9yID0gdGhpcy5nZXRNb25pdG9yKCk7XG4gIHZhciByZWdpc3RyeSA9IHRoaXMuZ2V0UmVnaXN0cnkoKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShtb25pdG9yLmlzRHJhZ2dpbmcoKSwgJ0Nhbm5vdCBjYWxsIGVuZERyYWcgd2hpbGUgbm90IGRyYWdnaW5nLicpO1xuXG4gIHZhciBzb3VyY2VJZCA9IG1vbml0b3IuZ2V0U291cmNlSWQoKTtcbiAgdmFyIHNvdXJjZSA9IHJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZCwgdHJ1ZSk7XG4gIHNvdXJjZS5lbmREcmFnKG1vbml0b3IsIHNvdXJjZUlkKTtcblxuICByZWdpc3RyeS51bnBpblNvdXJjZSgpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogRU5EX0RSQUdcbiAgfTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvYWN0aW9ucy9kcmFnRHJvcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBtYXRjaGVzVHlwZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaElzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNBcnJheSk7XG5cbmZ1bmN0aW9uIG1hdGNoZXNUeXBlKHRhcmdldFR5cGUsIGRyYWdnZWRJdGVtVHlwZSkge1xuICBpZiAoX2xvZGFzaElzQXJyYXkyWydkZWZhdWx0J10odGFyZ2V0VHlwZSkpIHtcbiAgICByZXR1cm4gdGFyZ2V0VHlwZS5zb21lKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdCA9PT0gZHJhZ2dlZEl0ZW1UeXBlO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0YXJnZXRUeXBlID09PSBkcmFnZ2VkSXRlbVR5cGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL3V0aWxzL21hdGNoZXNUeXBlLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbnZhcmlhbnQvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXQgZG9uJ3QgYnJlYWsgdGhpbmdzLlxudmFyIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcblxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gY2FjaGVkU2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc09iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRyYWdPcGVyYXRpb247XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9hY3Rpb25zRHJhZ0Ryb3AgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2RyYWdEcm9wJyk7XG5cbnZhciBfYWN0aW9uc1JlZ2lzdHJ5ID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9yZWdpc3RyeScpO1xuXG52YXIgX2xvZGFzaFdpdGhvdXQgPSByZXF1aXJlKCdsb2Rhc2gvd2l0aG91dCcpO1xuXG52YXIgX2xvZGFzaFdpdGhvdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoV2l0aG91dCk7XG5cbnZhciBpbml0aWFsU3RhdGUgPSB7XG4gIGl0ZW1UeXBlOiBudWxsLFxuICBpdGVtOiBudWxsLFxuICBzb3VyY2VJZDogbnVsbCxcbiAgdGFyZ2V0SWRzOiBbXSxcbiAgZHJvcFJlc3VsdDogbnVsbCxcbiAgZGlkRHJvcDogZmFsc2UsXG4gIGlzU291cmNlUHVibGljOiBudWxsXG59O1xuXG5mdW5jdGlvbiBkcmFnT3BlcmF0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuQkVHSU5fRFJBRzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbVR5cGU6IGFjdGlvbi5pdGVtVHlwZSxcbiAgICAgICAgaXRlbTogYWN0aW9uLml0ZW0sXG4gICAgICAgIHNvdXJjZUlkOiBhY3Rpb24uc291cmNlSWQsXG4gICAgICAgIGlzU291cmNlUHVibGljOiBhY3Rpb24uaXNTb3VyY2VQdWJsaWMsXG4gICAgICAgIGRyb3BSZXN1bHQ6IG51bGwsXG4gICAgICAgIGRpZERyb3A6IGZhbHNlXG4gICAgICB9KTtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuUFVCTElTSF9EUkFHX1NPVVJDRTpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNTb3VyY2VQdWJsaWM6IHRydWVcbiAgICAgIH0pO1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5IT1ZFUjpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgdGFyZ2V0SWRzOiBhY3Rpb24udGFyZ2V0SWRzXG4gICAgICB9KTtcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuUkVNT1ZFX1RBUkdFVDpcbiAgICAgIGlmIChzdGF0ZS50YXJnZXRJZHMuaW5kZXhPZihhY3Rpb24udGFyZ2V0SWQpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHRhcmdldElkczogX2xvZGFzaFdpdGhvdXQyWydkZWZhdWx0J10oc3RhdGUudGFyZ2V0SWRzLCBhY3Rpb24udGFyZ2V0SWQpXG4gICAgICB9KTtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuRFJPUDpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZHJvcFJlc3VsdDogYWN0aW9uLmRyb3BSZXN1bHQsXG4gICAgICAgIGRpZERyb3A6IHRydWUsXG4gICAgICAgIHRhcmdldElkczogW11cbiAgICAgIH0pO1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5FTkRfRFJBRzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbVR5cGU6IG51bGwsXG4gICAgICAgIGl0ZW06IG51bGwsXG4gICAgICAgIHNvdXJjZUlkOiBudWxsLFxuICAgICAgICBkcm9wUmVzdWx0OiBudWxsLFxuICAgICAgICBkaWREcm9wOiBmYWxzZSxcbiAgICAgICAgaXNTb3VyY2VQdWJsaWM6IG51bGwsXG4gICAgICAgIHRhcmdldElkczogW11cbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL2RyYWdPcGVyYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5hZGRTb3VyY2UgPSBhZGRTb3VyY2U7XG5leHBvcnRzLmFkZFRhcmdldCA9IGFkZFRhcmdldDtcbmV4cG9ydHMucmVtb3ZlU291cmNlID0gcmVtb3ZlU291cmNlO1xuZXhwb3J0cy5yZW1vdmVUYXJnZXQgPSByZW1vdmVUYXJnZXQ7XG52YXIgQUREX1NPVVJDRSA9ICdkbmQtY29yZS9BRERfU09VUkNFJztcbmV4cG9ydHMuQUREX1NPVVJDRSA9IEFERF9TT1VSQ0U7XG52YXIgQUREX1RBUkdFVCA9ICdkbmQtY29yZS9BRERfVEFSR0VUJztcbmV4cG9ydHMuQUREX1RBUkdFVCA9IEFERF9UQVJHRVQ7XG52YXIgUkVNT1ZFX1NPVVJDRSA9ICdkbmQtY29yZS9SRU1PVkVfU09VUkNFJztcbmV4cG9ydHMuUkVNT1ZFX1NPVVJDRSA9IFJFTU9WRV9TT1VSQ0U7XG52YXIgUkVNT1ZFX1RBUkdFVCA9ICdkbmQtY29yZS9SRU1PVkVfVEFSR0VUJztcblxuZXhwb3J0cy5SRU1PVkVfVEFSR0VUID0gUkVNT1ZFX1RBUkdFVDtcblxuZnVuY3Rpb24gYWRkU291cmNlKHNvdXJjZUlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUREX1NPVVJDRSxcbiAgICBzb3VyY2VJZDogc291cmNlSWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkVGFyZ2V0KHRhcmdldElkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUREX1RBUkdFVCxcbiAgICB0YXJnZXRJZDogdGFyZ2V0SWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU291cmNlKHNvdXJjZUlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVNT1ZFX1NPVVJDRSxcbiAgICBzb3VyY2VJZDogc291cmNlSWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0KHRhcmdldElkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVNT1ZFX1RBUkdFVCxcbiAgICB0YXJnZXRJZDogdGFyZ2V0SWRcbiAgfTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvYWN0aW9ucy9yZWdpc3RyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZURpZmZlcmVuY2UgPSByZXF1aXJlKCcuL19iYXNlRGlmZmVyZW5jZScpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGV4Y2x1ZGluZyBhbGwgZ2l2ZW4gdmFsdWVzIHVzaW5nXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0gey4uLip9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gZXhjbHVkZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGZpbHRlcmVkIHZhbHVlcy5cbiAqIEBzZWUgXy5kaWZmZXJlbmNlLCBfLnhvclxuICogQGV4YW1wbGVcbiAqXG4gKiBfLndpdGhvdXQoWzIsIDEsIDIsIDNdLCAxLCAyKTtcbiAqIC8vID0+IFszXVxuICovXG52YXIgd2l0aG91dCA9IHJlc3QoZnVuY3Rpb24oYXJyYXksIHZhbHVlcykge1xuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QoYXJyYXkpXG4gICAgPyBiYXNlRGlmZmVyZW5jZShhcnJheSwgdmFsdWVzKVxuICAgIDogW107XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aXRob3V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL3dpdGhvdXQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIG1ldGhvZHMgbGlrZSBgXy5kaWZmZXJlbmNlYCB3aXRob3V0IHN1cHBvcnRcbiAqIGZvciBleGNsdWRpbmcgbXVsdGlwbGUgYXJyYXlzIG9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gZXhjbHVkZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGZpbHRlcmVkIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gYmFzZURpZmZlcmVuY2UoYXJyYXksIHZhbHVlcywgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHZhbHVlc0xlbmd0aCA9IHZhbHVlcy5sZW5ndGg7XG5cbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmIChpdGVyYXRlZSkge1xuICAgIHZhbHVlcyA9IGFycmF5TWFwKHZhbHVlcywgYmFzZVVuYXJ5KGl0ZXJhdGVlKSk7XG4gIH1cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gIH1cbiAgZWxzZSBpZiAodmFsdWVzLmxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIHZhbHVlcyA9IG5ldyBTZXRDYWNoZSh2YWx1ZXMpO1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHZhbHVlc0luZGV4ID0gdmFsdWVzTGVuZ3RoO1xuICAgICAgd2hpbGUgKHZhbHVlc0luZGV4LS0pIHtcbiAgICAgICAgaWYgKHZhbHVlc1t2YWx1ZXNJbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHZhbHVlcywgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZURpZmZlcmVuY2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VEaWZmZXJlbmNlLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPyB2YWx1ZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX01hcENhY2hlLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX0hhc2guanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzSG9zdE9iamVjdCA9IHJlcXVpcmUoJy4vX2lzSG9zdE9iamVjdCcpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOCB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgd2VhayBtYXAgY29uc3RydWN0b3JzLFxuICAvLyBhbmQgUGhhbnRvbUpTIDEuOSB3aGljaCByZXR1cm5zICdmdW5jdGlvbicgZm9yIGBOb2RlTGlzdGAgaW5zdGFuY2VzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19pc01hc2tlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjaGVja0dsb2JhbCA9IHJlcXVpcmUoJy4vX2NoZWNrR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IGNoZWNrR2xvYmFsKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IGNoZWNrR2xvYmFsKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpO1xuXG4vKiogRGV0ZWN0IGB0aGlzYCBhcyB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciB0aGlzR2xvYmFsID0gY2hlY2tHbG9iYWwodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcyk7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IHRoaXNHbG9iYWwgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19yb290LmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBnbG9iYWwgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtudWxsfE9iamVjdH0gUmV0dXJucyBgdmFsdWVgIGlmIGl0J3MgYSBnbG9iYWwgb2JqZWN0LCBlbHNlIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gY2hlY2tHbG9iYWwodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5PYmplY3QgPT09IE9iamVjdCkgPyB2YWx1ZSA6IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tHbG9iYWw7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2NoZWNrR2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faGFzaEdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gZGF0YVtrZXldICE9PSB1bmRlZmluZWQgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faGFzaEhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2hhc2hTZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqIHZhciBvdGhlciA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2VxLmpzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX01hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICBnZXRNYXBEYXRhKHRoaXMsIGtleSkuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzXG4gKiogbW9kdWxlIGlkID0gNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanNcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpbmRleE9mTmFOID0gcmVxdWlyZSgnLi9faW5kZXhPZk5hTicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICByZXR1cm4gaW5kZXhPZk5hTihhcnJheSwgZnJvbUluZGV4KTtcbiAgfVxuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qc1xuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGBOYU5gIGlzIGZvdW5kIGluIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgYE5hTmAsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gaW5kZXhPZk5hTihhcnJheSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICB2YXIgb3RoZXIgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKG90aGVyICE9PSBvdGhlcikge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZXhPZk5hTjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faW5kZXhPZk5hTi5qc1xuICoqIG1vZHVsZSBpZCA9IDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNXaXRoKGFycmF5LCB2YWx1ZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChjb21wYXJhdG9yKHZhbHVlLCBhcnJheVtpbmRleF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYXJyYXlNYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIHdyYXBwZXIgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlVW5hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19jYWNoZUhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRMZW5ndGggPSByZXF1aXJlKCcuL19nZXRMZW5ndGgnKSxcbiAgICBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKGdldExlbmd0aCh2YWx1ZSkpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGF2b2lkIGFcbiAqIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKSB0aGF0IGFmZmVjdHNcbiAqIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldExlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fZ2V0TGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlUHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSA4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0xlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlXG4gKiBjcmVhdGVkIGZ1bmN0aW9uIGFuZCBhcmd1bWVudHMgZnJvbSBgc3RhcnRgIGFuZCBiZXlvbmQgcHJvdmlkZWQgYXNcbiAqIGFuIGFycmF5LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBiYXNlZCBvbiB0aGVcbiAqIFtyZXN0IHBhcmFtZXRlcl0oaHR0cHM6Ly9tZG4uaW8vcmVzdF9wYXJhbWV0ZXJzKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHNheSA9IF8ucmVzdChmdW5jdGlvbih3aGF0LCBuYW1lcykge1xuICogICByZXR1cm4gd2hhdCArICcgJyArIF8uaW5pdGlhbChuYW1lcykuam9pbignLCAnKSArXG4gKiAgICAgKF8uc2l6ZShuYW1lcykgPiAxID8gJywgJiAnIDogJycpICsgXy5sYXN0KG5hbWVzKTtcbiAqIH0pO1xuICpcbiAqIHNheSgnaGVsbG8nLCAnZnJlZCcsICdiYXJuZXknLCAncGViYmxlcycpO1xuICogLy8gPT4gJ2hlbGxvIGZyZWQsIGJhcm5leSwgJiBwZWJibGVzJ1xuICovXG5mdW5jdGlvbiByZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHRvSW50ZWdlcihzdGFydCksIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIHN3aXRjaCAoc3RhcnQpIHtcbiAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcnJheSk7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJnc1swXSwgYXJyYXkpO1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFycmF5KTtcbiAgICB9XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgaW5kZXggPSAtMTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSBhcnJheTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL3Jlc3QuanNcbiAqKiBtb2R1bGUgaWQgPSA4NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICB2YXIgbGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hcHBseS5qc1xuICoqIG1vZHVsZSBpZCA9IDg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9GaW5pdGUgPSByZXF1aXJlKCcuL3RvRmluaXRlJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBpbnRlZ2VyLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvSW50ZWdlcmBdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2ludGVnZXIpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIGludGVnZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9JbnRlZ2VyKDMuMik7XG4gKiAvLyA9PiAzXG4gKlxuICogXy50b0ludGVnZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiAwXG4gKlxuICogXy50b0ludGVnZXIoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvSW50ZWdlcignMy4yJyk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIHRvSW50ZWdlcih2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdG9GaW5pdGUodmFsdWUpLFxuICAgICAgcmVtYWluZGVyID0gcmVzdWx0ICUgMTtcblxuICByZXR1cm4gcmVzdWx0ID09PSByZXN1bHQgPyAocmVtYWluZGVyID8gcmVzdWx0IC0gcmVtYWluZGVyIDogcmVzdWx0KSA6IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9JbnRlZ2VyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL3RvSW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgTUFYX0lOVEVHRVIgPSAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwODtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTIuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvRmluaXRlKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvRmluaXRlKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b0Zpbml0ZShJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9GaW5pdGUoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvRmluaXRlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdmFsdWUgOiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvRmluaXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL3RvRmluaXRlLmpzXG4gKiogbW9kdWxlIGlkID0gODdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSBpc0Z1bmN0aW9uKHZhbHVlLnZhbHVlT2YpID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC90b051bWJlci5qc1xuICoqIG1vZHVsZSBpZCA9IDg4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzU3ltYm9sLmpzXG4gKiogbW9kdWxlIGlkID0gODlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlZkNvdW50O1xuXG52YXIgX2FjdGlvbnNSZWdpc3RyeSA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvcmVnaXN0cnknKTtcblxuZnVuY3Rpb24gcmVmQ291bnQoc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgc3RhdGUgPSAwO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuQUREX1NPVVJDRTpcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuQUREX1RBUkdFVDpcbiAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LlJFTU9WRV9TT1VSQ0U6XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LlJFTU9WRV9UQVJHRVQ6XG4gICAgICByZXR1cm4gc3RhdGUgLSAxO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL3JlZkNvdW50LmpzXG4gKiogbW9kdWxlIGlkID0gOTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRpcnR5SGFuZGxlcklkcztcbmV4cG9ydHMuYXJlRGlydHkgPSBhcmVEaXJ0eTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaFhvciA9IHJlcXVpcmUoJ2xvZGFzaC94b3InKTtcblxudmFyIF9sb2Rhc2hYb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoWG9yKTtcblxudmFyIF9sb2Rhc2hJbnRlcnNlY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaW50ZXJzZWN0aW9uJyk7XG5cbnZhciBfbG9kYXNoSW50ZXJzZWN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaEludGVyc2VjdGlvbik7XG5cbnZhciBfYWN0aW9uc0RyYWdEcm9wID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9kcmFnRHJvcCcpO1xuXG52YXIgX2FjdGlvbnNSZWdpc3RyeSA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvcmVnaXN0cnknKTtcblxudmFyIE5PTkUgPSBbXTtcbnZhciBBTEwgPSBbXTtcblxuZnVuY3Rpb24gZGlydHlIYW5kbGVySWRzKHN0YXRlLCBhY3Rpb24sIGRyYWdPcGVyYXRpb24pIHtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHN0YXRlID0gTk9ORTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkhPVkVSOlxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LkFERF9TT1VSQ0U6XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LkFERF9UQVJHRVQ6XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LlJFTU9WRV9UQVJHRVQ6XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LlJFTU9WRV9TT1VSQ0U6XG4gICAgICByZXR1cm4gTk9ORTtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuQkVHSU5fRFJBRzpcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuUFVCTElTSF9EUkFHX1NPVVJDRTpcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuRU5EX0RSQUc6XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkRST1A6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBBTEw7XG4gIH1cblxuICB2YXIgdGFyZ2V0SWRzID0gYWN0aW9uLnRhcmdldElkcztcbiAgdmFyIHByZXZUYXJnZXRJZHMgPSBkcmFnT3BlcmF0aW9uLnRhcmdldElkcztcblxuICB2YXIgZGlydHlIYW5kbGVySWRzID0gX2xvZGFzaFhvcjJbJ2RlZmF1bHQnXSh0YXJnZXRJZHMsIHByZXZUYXJnZXRJZHMpO1xuXG4gIHZhciBkaWRDaGFuZ2UgPSBmYWxzZTtcbiAgaWYgKGRpcnR5SGFuZGxlcklkcy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldElkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRhcmdldElkc1tpXSAhPT0gcHJldlRhcmdldElkc1tpXSkge1xuICAgICAgICBkaWRDaGFuZ2UgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGlkQ2hhbmdlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICghZGlkQ2hhbmdlKSB7XG4gICAgcmV0dXJuIE5PTkU7XG4gIH1cblxuICB2YXIgcHJldklubmVybW9zdFRhcmdldElkID0gcHJldlRhcmdldElkc1twcmV2VGFyZ2V0SWRzLmxlbmd0aCAtIDFdO1xuICB2YXIgaW5uZXJtb3N0VGFyZ2V0SWQgPSB0YXJnZXRJZHNbdGFyZ2V0SWRzLmxlbmd0aCAtIDFdO1xuXG4gIGlmIChwcmV2SW5uZXJtb3N0VGFyZ2V0SWQgIT09IGlubmVybW9zdFRhcmdldElkKSB7XG4gICAgaWYgKHByZXZJbm5lcm1vc3RUYXJnZXRJZCkge1xuICAgICAgZGlydHlIYW5kbGVySWRzLnB1c2gocHJldklubmVybW9zdFRhcmdldElkKTtcbiAgICB9XG4gICAgaWYgKGlubmVybW9zdFRhcmdldElkKSB7XG4gICAgICBkaXJ0eUhhbmRsZXJJZHMucHVzaChpbm5lcm1vc3RUYXJnZXRJZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcnR5SGFuZGxlcklkcztcbn1cblxuZnVuY3Rpb24gYXJlRGlydHkoc3RhdGUsIGhhbmRsZXJJZHMpIHtcbiAgaWYgKHN0YXRlID09PSBOT05FKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHN0YXRlID09PSBBTEwgfHwgdHlwZW9mIGhhbmRsZXJJZHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gX2xvZGFzaEludGVyc2VjdGlvbjJbJ2RlZmF1bHQnXShoYW5kbGVySWRzLCBzdGF0ZSkubGVuZ3RoID4gMDtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvZGlydHlIYW5kbGVySWRzLmpzXG4gKiogbW9kdWxlIGlkID0gOTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgYmFzZVhvciA9IHJlcXVpcmUoJy4vX2Jhc2VYb3InKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB1bmlxdWUgdmFsdWVzIHRoYXQgaXMgdGhlXG4gKiBbc3ltbWV0cmljIGRpZmZlcmVuY2VdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1N5bW1ldHJpY19kaWZmZXJlbmNlKVxuICogb2YgdGhlIGdpdmVuIGFycmF5cy4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXMgZGV0ZXJtaW5lZCBieSB0aGUgb3JkZXJcbiAqIHRoZXkgb2NjdXIgaW4gdGhlIGFycmF5cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7Li4uQXJyYXl9IFthcnJheXNdIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGZpbHRlcmVkIHZhbHVlcy5cbiAqIEBzZWUgXy5kaWZmZXJlbmNlLCBfLndpdGhvdXRcbiAqIEBleGFtcGxlXG4gKlxuICogXy54b3IoWzIsIDFdLCBbMiwgM10pO1xuICogLy8gPT4gWzEsIDNdXG4gKi9cbnZhciB4b3IgPSByZXN0KGZ1bmN0aW9uKGFycmF5cykge1xuICByZXR1cm4gYmFzZVhvcihhcnJheUZpbHRlcihhcnJheXMsIGlzQXJyYXlMaWtlT2JqZWN0KSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB4b3I7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gveG9yLmpzXG4gKiogbW9kdWxlIGlkID0gOTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBiYXNlRGlmZmVyZW5jZSA9IHJlcXVpcmUoJy4vX2Jhc2VEaWZmZXJlbmNlJyksXG4gICAgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIG1ldGhvZHMgbGlrZSBgXy54b3JgLCB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLCB0aGF0IGFjY2VwdHMgYW4gYXJyYXkgb2YgYXJyYXlzIHRvIGluc3BlY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5cyBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VYb3IoYXJyYXlzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5cy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgcmVzdWx0ID0gcmVzdWx0XG4gICAgICA/IGFycmF5UHVzaChcbiAgICAgICAgICBiYXNlRGlmZmVyZW5jZShyZXN1bHQsIGFycmF5c1tpbmRleF0sIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSxcbiAgICAgICAgICBiYXNlRGlmZmVyZW5jZShhcnJheXNbaW5kZXhdLCByZXN1bHQsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKVxuICAgICAgICApXG4gICAgICA6IGFycmF5c1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkgPyBiYXNlVW5pcShyZXN1bHQsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VYb3I7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VYb3IuanNcbiAqKiBtb2R1bGUgaWQgPSA5NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzXG4gKiogbW9kdWxlIGlkID0gOTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpLFxuICAgIGNyZWF0ZVNldCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVNldCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmlxKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgc2VlbiA9IHJlc3VsdDtcblxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgfVxuICBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xuICAgIGlmIChzZXQpIHtcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XG4gICAgfVxuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKHNlZW5JbmRleC0tKSB7XG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXMoc2VlbiwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VVbmlxLmpzXG4gKiogbW9kdWxlIGlkID0gOTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBub29wID0gcmVxdWlyZSgnLi9ub29wJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIGB2YWx1ZXNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBzZXQuXG4gKi9cbnZhciBjcmVhdGVTZXQgPSAhKFNldCAmJiAoMSAvIHNldFRvQXJyYXkobmV3IFNldChbLC0wXSkpWzFdKSA9PSBJTkZJTklUWSkgPyBub29wIDogZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgU2V0KHZhbHVlcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fY3JlYXRlU2V0LmpzXG4gKiogbW9kdWxlIGlkID0gOTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX1NldC5qc1xuICoqIG1vZHVsZSBpZCA9IDk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgbWV0aG9kIHRoYXQgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9ub29wLmpzXG4gKiogbW9kdWxlIGlkID0gOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZSgnLi9fYmFzZUludGVyc2VjdGlvbicpLFxuICAgIGNhc3RBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL19jYXN0QXJyYXlMaWtlT2JqZWN0JyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdW5pcXVlIHZhbHVlcyB0aGF0IGFyZSBpbmNsdWRlZCBpbiBhbGwgZ2l2ZW4gYXJyYXlzXG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpcyBkZXRlcm1pbmVkIGJ5IHRoZVxuICogb3JkZXIgdGhleSBvY2N1ciBpbiB0aGUgZmlyc3QgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0gey4uLkFycmF5fSBbYXJyYXlzXSBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBpbnRlcnNlY3RpbmcgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmludGVyc2VjdGlvbihbMiwgMV0sIFsyLCAzXSk7XG4gKiAvLyA9PiBbMl1cbiAqL1xudmFyIGludGVyc2VjdGlvbiA9IHJlc3QoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHZhciBtYXBwZWQgPSBhcnJheU1hcChhcnJheXMsIGNhc3RBcnJheUxpa2VPYmplY3QpO1xuICByZXR1cm4gKG1hcHBlZC5sZW5ndGggJiYgbWFwcGVkWzBdID09PSBhcnJheXNbMF0pXG4gICAgPyBiYXNlSW50ZXJzZWN0aW9uKG1hcHBlZClcbiAgICA6IFtdO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gaW50ZXJzZWN0aW9uO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVyc2VjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgbWV0aG9kcyBsaWtlIGBfLmludGVyc2VjdGlvbmAsIHdpdGhvdXQgc3VwcG9ydFxuICogZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMsIHRoYXQgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgdG8gaW5zcGVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlzIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIHNoYXJlZCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbnRlcnNlY3Rpb24oYXJyYXlzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5jbHVkZXMgPSBjb21wYXJhdG9yID8gYXJyYXlJbmNsdWRlc1dpdGggOiBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXlzWzBdLmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IGFycmF5cy5sZW5ndGgsXG4gICAgICBvdGhJbmRleCA9IG90aExlbmd0aCxcbiAgICAgIGNhY2hlcyA9IEFycmF5KG90aExlbmd0aCksXG4gICAgICBtYXhMZW5ndGggPSBJbmZpbml0eSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlIChvdGhJbmRleC0tKSB7XG4gICAgdmFyIGFycmF5ID0gYXJyYXlzW290aEluZGV4XTtcbiAgICBpZiAob3RoSW5kZXggJiYgaXRlcmF0ZWUpIHtcbiAgICAgIGFycmF5ID0gYXJyYXlNYXAoYXJyYXksIGJhc2VVbmFyeShpdGVyYXRlZSkpO1xuICAgIH1cbiAgICBtYXhMZW5ndGggPSBuYXRpdmVNaW4oYXJyYXkubGVuZ3RoLCBtYXhMZW5ndGgpO1xuICAgIGNhY2hlc1tvdGhJbmRleF0gPSAhY29tcGFyYXRvciAmJiAoaXRlcmF0ZWUgfHwgKGxlbmd0aCA+PSAxMjAgJiYgYXJyYXkubGVuZ3RoID49IDEyMCkpXG4gICAgICA/IG5ldyBTZXRDYWNoZShvdGhJbmRleCAmJiBhcnJheSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG4gIGFycmF5ID0gYXJyYXlzWzBdO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgc2VlbiA9IGNhY2hlc1swXTtcblxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGggJiYgcmVzdWx0Lmxlbmd0aCA8IG1heExlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKCEoc2VlblxuICAgICAgICAgID8gY2FjaGVIYXMoc2VlbiwgY29tcHV0ZWQpXG4gICAgICAgICAgOiBpbmNsdWRlcyhyZXN1bHQsIGNvbXB1dGVkLCBjb21wYXJhdG9yKVxuICAgICAgICApKSB7XG4gICAgICBvdGhJbmRleCA9IG90aExlbmd0aDtcbiAgICAgIHdoaWxlICgtLW90aEluZGV4KSB7XG4gICAgICAgIHZhciBjYWNoZSA9IGNhY2hlc1tvdGhJbmRleF07XG4gICAgICAgIGlmICghKGNhY2hlXG4gICAgICAgICAgICAgID8gY2FjaGVIYXMoY2FjaGUsIGNvbXB1dGVkKVxuICAgICAgICAgICAgICA6IGluY2x1ZGVzKGFycmF5c1tvdGhJbmRleF0sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2Vlbikge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbnRlcnNlY3Rpb247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VJbnRlcnNlY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGFuIGVtcHR5IGFycmF5IGlmIGl0J3Mgbm90IGFuIGFycmF5IGxpa2Ugb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fE9iamVjdH0gUmV0dXJucyB0aGUgY2FzdCBhcnJheS1saWtlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2FzdEFycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpID8gdmFsdWUgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0QXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19jYXN0QXJyYXlMaWtlT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gc3RhdGVJZDtcblxuZnVuY3Rpb24gc3RhdGVJZCgpIHtcbiAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1swXTtcblxuICByZXR1cm4gc3RhdGUgKyAxO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9zdGF0ZUlkLmpzXG4gKiogbW9kdWxlIGlkID0gMTA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfdXRpbHNNYXRjaGVzVHlwZSA9IHJlcXVpcmUoJy4vdXRpbHMvbWF0Y2hlc1R5cGUnKTtcblxudmFyIF91dGlsc01hdGNoZXNUeXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzTWF0Y2hlc1R5cGUpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNBcnJheSk7XG5cbnZhciBfSGFuZGxlclJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9IYW5kbGVyUmVnaXN0cnknKTtcblxudmFyIF9IYW5kbGVyUmVnaXN0cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSGFuZGxlclJlZ2lzdHJ5KTtcblxudmFyIF9yZWR1Y2Vyc0RyYWdPZmZzZXQgPSByZXF1aXJlKCcuL3JlZHVjZXJzL2RyYWdPZmZzZXQnKTtcblxudmFyIF9yZWR1Y2Vyc0RpcnR5SGFuZGxlcklkcyA9IHJlcXVpcmUoJy4vcmVkdWNlcnMvZGlydHlIYW5kbGVySWRzJyk7XG5cbnZhciBEcmFnRHJvcE1vbml0b3IgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEcmFnRHJvcE1vbml0b3Ioc3RvcmUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0Ryb3BNb25pdG9yKTtcblxuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gbmV3IF9IYW5kbGVyUmVnaXN0cnkyWydkZWZhdWx0J10oc3RvcmUpO1xuICB9XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5zdWJzY3JpYmVUb1N0YXRlQ2hhbmdlID0gZnVuY3Rpb24gc3Vic2NyaWJlVG9TdGF0ZUNoYW5nZShsaXN0ZW5lcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIGhhbmRsZXJJZHMgPSBfcmVmLmhhbmRsZXJJZHM7XG5cbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJywgJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBoYW5kbGVySWRzID09PSAndW5kZWZpbmVkJyB8fCBfbG9kYXNoSXNBcnJheTJbJ2RlZmF1bHQnXShoYW5kbGVySWRzKSwgJ2hhbmRsZXJJZHMsIHdoZW4gc3BlY2lmaWVkLCBtdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3MuJyk7XG5cbiAgICB2YXIgcHJldlN0YXRlSWQgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCkuc3RhdGVJZDtcbiAgICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgdmFyIHN0YXRlID0gX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgIHZhciBjdXJyZW50U3RhdGVJZCA9IHN0YXRlLnN0YXRlSWQ7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgY2FuU2tpcExpc3RlbmVyID0gY3VycmVudFN0YXRlSWQgPT09IHByZXZTdGF0ZUlkIHx8IGN1cnJlbnRTdGF0ZUlkID09PSBwcmV2U3RhdGVJZCArIDEgJiYgIV9yZWR1Y2Vyc0RpcnR5SGFuZGxlcklkcy5hcmVEaXJ0eShzdGF0ZS5kaXJ0eUhhbmRsZXJJZHMsIGhhbmRsZXJJZHMpO1xuXG4gICAgICAgIGlmICghY2FuU2tpcExpc3RlbmVyKSB7XG4gICAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgcHJldlN0YXRlSWQgPSBjdXJyZW50U3RhdGVJZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc3Vic2NyaWJlKGhhbmRsZUNoYW5nZSk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5zdWJzY3JpYmVUb09mZnNldENoYW5nZSA9IGZ1bmN0aW9uIHN1YnNjcmliZVRvT2Zmc2V0Q2hhbmdlKGxpc3RlbmVyKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJywgJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcblxuICAgIHZhciBwcmV2aW91c1N0YXRlID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQ7XG4gICAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgIHZhciBuZXh0U3RhdGUgPSBfdGhpczIuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0O1xuICAgICAgaWYgKG5leHRTdGF0ZSA9PT0gcHJldmlvdXNTdGF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzU3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zdWJzY3JpYmUoaGFuZGxlQ2hhbmdlKTtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmNhbkRyYWdTb3VyY2UgPSBmdW5jdGlvbiBjYW5EcmFnU291cmNlKHNvdXJjZUlkKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMucmVnaXN0cnkuZ2V0U291cmNlKHNvdXJjZUlkKTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHNvdXJjZSwgJ0V4cGVjdGVkIHRvIGZpbmQgYSB2YWxpZCBzb3VyY2UuJyk7XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlLmNhbkRyYWcodGhpcywgc291cmNlSWQpO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuY2FuRHJvcE9uVGFyZ2V0ID0gZnVuY3Rpb24gY2FuRHJvcE9uVGFyZ2V0KHRhcmdldElkKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMucmVnaXN0cnkuZ2V0VGFyZ2V0KHRhcmdldElkKTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRhcmdldCwgJ0V4cGVjdGVkIHRvIGZpbmQgYSB2YWxpZCB0YXJnZXQuJyk7XG5cbiAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZygpIHx8IHRoaXMuZGlkRHJvcCgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFR5cGUgPSB0aGlzLnJlZ2lzdHJ5LmdldFRhcmdldFR5cGUodGFyZ2V0SWQpO1xuICAgIHZhciBkcmFnZ2VkSXRlbVR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKCk7XG4gICAgcmV0dXJuIF91dGlsc01hdGNoZXNUeXBlMlsnZGVmYXVsdCddKHRhcmdldFR5cGUsIGRyYWdnZWRJdGVtVHlwZSkgJiYgdGFyZ2V0LmNhbkRyb3AodGhpcywgdGFyZ2V0SWQpO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuaXNEcmFnZ2luZyA9IGZ1bmN0aW9uIGlzRHJhZ2dpbmcoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5nZXRJdGVtVHlwZSgpKTtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmlzRHJhZ2dpbmdTb3VyY2UgPSBmdW5jdGlvbiBpc0RyYWdnaW5nU291cmNlKHNvdXJjZUlkKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMucmVnaXN0cnkuZ2V0U291cmNlKHNvdXJjZUlkLCB0cnVlKTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHNvdXJjZSwgJ0V4cGVjdGVkIHRvIGZpbmQgYSB2YWxpZCBzb3VyY2UuJyk7XG5cbiAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZygpIHx8ICF0aGlzLmlzU291cmNlUHVibGljKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlVHlwZSA9IHRoaXMucmVnaXN0cnkuZ2V0U291cmNlVHlwZShzb3VyY2VJZCk7XG4gICAgdmFyIGRyYWdnZWRJdGVtVHlwZSA9IHRoaXMuZ2V0SXRlbVR5cGUoKTtcbiAgICBpZiAoc291cmNlVHlwZSAhPT0gZHJhZ2dlZEl0ZW1UeXBlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZS5pc0RyYWdnaW5nKHRoaXMsIHNvdXJjZUlkKTtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmlzT3ZlclRhcmdldCA9IGZ1bmN0aW9uIGlzT3ZlclRhcmdldCh0YXJnZXRJZCkge1xuICAgIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIF9yZWYyJHNoYWxsb3cgPSBfcmVmMi5zaGFsbG93O1xuICAgIHZhciBzaGFsbG93ID0gX3JlZjIkc2hhbGxvdyA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmMiRzaGFsbG93O1xuXG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRUeXBlID0gdGhpcy5yZWdpc3RyeS5nZXRUYXJnZXRUeXBlKHRhcmdldElkKTtcbiAgICB2YXIgZHJhZ2dlZEl0ZW1UeXBlID0gdGhpcy5nZXRJdGVtVHlwZSgpO1xuICAgIGlmICghX3V0aWxzTWF0Y2hlc1R5cGUyWydkZWZhdWx0J10odGFyZ2V0VHlwZSwgZHJhZ2dlZEl0ZW1UeXBlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRJZHMgPSB0aGlzLmdldFRhcmdldElkcygpO1xuICAgIGlmICghdGFyZ2V0SWRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IHRhcmdldElkcy5pbmRleE9mKHRhcmdldElkKTtcbiAgICBpZiAoc2hhbGxvdykge1xuICAgICAgcmV0dXJuIGluZGV4ID09PSB0YXJnZXRJZHMubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGluZGV4ID4gLTE7XG4gICAgfVxuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0SXRlbVR5cGUgPSBmdW5jdGlvbiBnZXRJdGVtVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24uaXRlbVR5cGU7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXRJdGVtID0gZnVuY3Rpb24gZ2V0SXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24uaXRlbTtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldFNvdXJjZUlkID0gZnVuY3Rpb24gZ2V0U291cmNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLnNvdXJjZUlkO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0VGFyZ2V0SWRzID0gZnVuY3Rpb24gZ2V0VGFyZ2V0SWRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi50YXJnZXRJZHM7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXREcm9wUmVzdWx0ID0gZnVuY3Rpb24gZ2V0RHJvcFJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24uZHJvcFJlc3VsdDtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmRpZERyb3AgPSBmdW5jdGlvbiBkaWREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5kaWREcm9wO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuaXNTb3VyY2VQdWJsaWMgPSBmdW5jdGlvbiBpc1NvdXJjZVB1YmxpYygpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24uaXNTb3VyY2VQdWJsaWM7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0SW5pdGlhbENsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQuaW5pdGlhbENsaWVudE9mZnNldDtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldC5pbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0O1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0Q2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0Q2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldC5jbGllbnRPZmZzZXQ7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXRTb3VyY2VDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRTb3VyY2VDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIF9yZWR1Y2Vyc0RyYWdPZmZzZXQuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0KTtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCA9IGZ1bmN0aW9uIGdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpIHtcbiAgICByZXR1cm4gX3JlZHVjZXJzRHJhZ09mZnNldC5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQodGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQpO1xuICB9O1xuXG4gIHJldHVybiBEcmFnRHJvcE1vbml0b3I7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEcmFnRHJvcE1vbml0b3I7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvRHJhZ0Ryb3BNb25pdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyAnc3ltYm9sJyA6IHR5cGVvZiBvYmo7IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9sb2Rhc2hJc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKTtcblxudmFyIF9sb2Rhc2hJc0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzQXJyYXkpO1xuXG52YXIgX3V0aWxzR2V0TmV4dFVuaXF1ZUlkID0gcmVxdWlyZSgnLi91dGlscy9nZXROZXh0VW5pcXVlSWQnKTtcblxudmFyIF91dGlsc0dldE5leHRVbmlxdWVJZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0dldE5leHRVbmlxdWVJZCk7XG5cbnZhciBfYWN0aW9uc1JlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9hY3Rpb25zL3JlZ2lzdHJ5Jyk7XG5cbnZhciBfYXNhcCA9IHJlcXVpcmUoJ2FzYXAnKTtcblxudmFyIF9hc2FwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FzYXApO1xuXG52YXIgSGFuZGxlclJvbGVzID0ge1xuICBTT1VSQ0U6ICdTT1VSQ0UnLFxuICBUQVJHRVQ6ICdUQVJHRVQnXG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVNvdXJjZUNvbnRyYWN0KHNvdXJjZSkge1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBzb3VyY2UuY2FuRHJhZyA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGNhbkRyYWcgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2Ygc291cmNlLmJlZ2luRHJhZyA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGJlZ2luRHJhZyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBzb3VyY2UuZW5kRHJhZyA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGVuZERyYWcgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUYXJnZXRDb250cmFjdCh0YXJnZXQpIHtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgdGFyZ2V0LmNhbkRyb3AgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBjYW5Ecm9wIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHRhcmdldC5ob3ZlciA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGhvdmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHRhcmdldC5kcm9wID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgYmVnaW5EcmFnIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVHlwZSh0eXBlLCBhbGxvd0FycmF5KSB7XG4gIGlmIChhbGxvd0FycmF5ICYmIF9sb2Rhc2hJc0FycmF5MlsnZGVmYXVsdCddKHR5cGUpKSB7XG4gICAgdHlwZS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGVUeXBlKHQsIGZhbHNlKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCAodHlwZW9mIHR5cGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHR5cGUpKSA9PT0gJ3N5bWJvbCcsIGFsbG93QXJyYXkgPyAnVHlwZSBjYW4gb25seSBiZSBhIHN0cmluZywgYSBzeW1ib2wsIG9yIGFuIGFycmF5IG9mIGVpdGhlci4nIDogJ1R5cGUgY2FuIG9ubHkgYmUgYSBzdHJpbmcgb3IgYSBzeW1ib2wuJyk7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRIYW5kbGVySWQocm9sZSkge1xuICB2YXIgaWQgPSBfdXRpbHNHZXROZXh0VW5pcXVlSWQyWydkZWZhdWx0J10oKS50b1N0cmluZygpO1xuICBzd2l0Y2ggKHJvbGUpIHtcbiAgICBjYXNlIEhhbmRsZXJSb2xlcy5TT1VSQ0U6XG4gICAgICByZXR1cm4gJ1MnICsgaWQ7XG4gICAgY2FzZSBIYW5kbGVyUm9sZXMuVEFSR0VUOlxuICAgICAgcmV0dXJuICdUJyArIGlkO1xuICAgIGRlZmF1bHQ6XG4gICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnVW5rbm93biByb2xlOiAnICsgcm9sZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VSb2xlRnJvbUhhbmRsZXJJZChoYW5kbGVySWQpIHtcbiAgc3dpdGNoIChoYW5kbGVySWRbMF0pIHtcbiAgICBjYXNlICdTJzpcbiAgICAgIHJldHVybiBIYW5kbGVyUm9sZXMuU09VUkNFO1xuICAgIGNhc2UgJ1QnOlxuICAgICAgcmV0dXJuIEhhbmRsZXJSb2xlcy5UQVJHRVQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UsICdDYW5ub3QgcGFyc2UgaGFuZGxlciBJRDogJyArIGhhbmRsZXJJZCk7XG4gIH1cbn1cblxudmFyIEhhbmRsZXJSZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEhhbmRsZXJSZWdpc3RyeShzdG9yZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIYW5kbGVyUmVnaXN0cnkpO1xuXG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuXG4gICAgdGhpcy50eXBlcyA9IHt9O1xuICAgIHRoaXMuaGFuZGxlcnMgPSB7fTtcblxuICAgIHRoaXMucGlubmVkU291cmNlSWQgPSBudWxsO1xuICAgIHRoaXMucGlubmVkU291cmNlID0gbnVsbDtcbiAgfVxuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUuYWRkU291cmNlID0gZnVuY3Rpb24gYWRkU291cmNlKHR5cGUsIHNvdXJjZSkge1xuICAgIHZhbGlkYXRlVHlwZSh0eXBlKTtcbiAgICB2YWxpZGF0ZVNvdXJjZUNvbnRyYWN0KHNvdXJjZSk7XG5cbiAgICB2YXIgc291cmNlSWQgPSB0aGlzLmFkZEhhbmRsZXIoSGFuZGxlclJvbGVzLlNPVVJDRSwgdHlwZSwgc291cmNlKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKF9hY3Rpb25zUmVnaXN0cnkuYWRkU291cmNlKHNvdXJjZUlkKSk7XG4gICAgcmV0dXJuIHNvdXJjZUlkO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUuYWRkVGFyZ2V0ID0gZnVuY3Rpb24gYWRkVGFyZ2V0KHR5cGUsIHRhcmdldCkge1xuICAgIHZhbGlkYXRlVHlwZSh0eXBlLCB0cnVlKTtcbiAgICB2YWxpZGF0ZVRhcmdldENvbnRyYWN0KHRhcmdldCk7XG5cbiAgICB2YXIgdGFyZ2V0SWQgPSB0aGlzLmFkZEhhbmRsZXIoSGFuZGxlclJvbGVzLlRBUkdFVCwgdHlwZSwgdGFyZ2V0KTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKF9hY3Rpb25zUmVnaXN0cnkuYWRkVGFyZ2V0KHRhcmdldElkKSk7XG4gICAgcmV0dXJuIHRhcmdldElkO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUuYWRkSGFuZGxlciA9IGZ1bmN0aW9uIGFkZEhhbmRsZXIocm9sZSwgdHlwZSwgaGFuZGxlcikge1xuICAgIHZhciBpZCA9IGdldE5leHRIYW5kbGVySWQocm9sZSk7XG4gICAgdGhpcy50eXBlc1tpZF0gPSB0eXBlO1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gaGFuZGxlcjtcblxuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmNvbnRhaW5zSGFuZGxlciA9IGZ1bmN0aW9uIGNvbnRhaW5zSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmhhbmRsZXJzKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVyc1trZXldID09PSBoYW5kbGVyO1xuICAgIH0pO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUuZ2V0U291cmNlID0gZnVuY3Rpb24gZ2V0U291cmNlKHNvdXJjZUlkLCBpbmNsdWRlUGlubmVkKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0aGlzLmlzU291cmNlSWQoc291cmNlSWQpLCAnRXhwZWN0ZWQgYSB2YWxpZCBzb3VyY2UgSUQuJyk7XG5cbiAgICB2YXIgaXNQaW5uZWQgPSBpbmNsdWRlUGlubmVkICYmIHNvdXJjZUlkID09PSB0aGlzLnBpbm5lZFNvdXJjZUlkO1xuICAgIHZhciBzb3VyY2UgPSBpc1Bpbm5lZCA/IHRoaXMucGlubmVkU291cmNlIDogdGhpcy5oYW5kbGVyc1tzb3VyY2VJZF07XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUuZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldElkKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0aGlzLmlzVGFyZ2V0SWQodGFyZ2V0SWQpLCAnRXhwZWN0ZWQgYSB2YWxpZCB0YXJnZXQgSUQuJyk7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnNbdGFyZ2V0SWRdO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUuZ2V0U291cmNlVHlwZSA9IGZ1bmN0aW9uIGdldFNvdXJjZVR5cGUoc291cmNlSWQpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRoaXMuaXNTb3VyY2VJZChzb3VyY2VJZCksICdFeHBlY3RlZCBhIHZhbGlkIHNvdXJjZSBJRC4nKTtcbiAgICByZXR1cm4gdGhpcy50eXBlc1tzb3VyY2VJZF07XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5nZXRUYXJnZXRUeXBlID0gZnVuY3Rpb24gZ2V0VGFyZ2V0VHlwZSh0YXJnZXRJZCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGhpcy5pc1RhcmdldElkKHRhcmdldElkKSwgJ0V4cGVjdGVkIGEgdmFsaWQgdGFyZ2V0IElELicpO1xuICAgIHJldHVybiB0aGlzLnR5cGVzW3RhcmdldElkXTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmlzU291cmNlSWQgPSBmdW5jdGlvbiBpc1NvdXJjZUlkKGhhbmRsZXJJZCkge1xuICAgIHZhciByb2xlID0gcGFyc2VSb2xlRnJvbUhhbmRsZXJJZChoYW5kbGVySWQpO1xuICAgIHJldHVybiByb2xlID09PSBIYW5kbGVyUm9sZXMuU09VUkNFO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUuaXNUYXJnZXRJZCA9IGZ1bmN0aW9uIGlzVGFyZ2V0SWQoaGFuZGxlcklkKSB7XG4gICAgdmFyIHJvbGUgPSBwYXJzZVJvbGVGcm9tSGFuZGxlcklkKGhhbmRsZXJJZCk7XG4gICAgcmV0dXJuIHJvbGUgPT09IEhhbmRsZXJSb2xlcy5UQVJHRVQ7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5yZW1vdmVTb3VyY2UgPSBmdW5jdGlvbiByZW1vdmVTb3VyY2Uoc291cmNlSWQpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGhpcy5nZXRTb3VyY2Uoc291cmNlSWQpLCAnRXhwZWN0ZWQgYW4gZXhpc3Rpbmcgc291cmNlLicpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goX2FjdGlvbnNSZWdpc3RyeS5yZW1vdmVTb3VyY2Uoc291cmNlSWQpKTtcblxuICAgIF9hc2FwMlsnZGVmYXVsdCddKGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlbGV0ZSBfdGhpczIuaGFuZGxlcnNbc291cmNlSWRdO1xuICAgICAgZGVsZXRlIF90aGlzMi50eXBlc1tzb3VyY2VJZF07XG4gICAgfSk7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5yZW1vdmVUYXJnZXQgPSBmdW5jdGlvbiByZW1vdmVUYXJnZXQodGFyZ2V0SWQpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGhpcy5nZXRUYXJnZXQodGFyZ2V0SWQpLCAnRXhwZWN0ZWQgYW4gZXhpc3RpbmcgdGFyZ2V0LicpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goX2FjdGlvbnNSZWdpc3RyeS5yZW1vdmVUYXJnZXQodGFyZ2V0SWQpKTtcblxuICAgIF9hc2FwMlsnZGVmYXVsdCddKGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlbGV0ZSBfdGhpczMuaGFuZGxlcnNbdGFyZ2V0SWRdO1xuICAgICAgZGVsZXRlIF90aGlzMy50eXBlc1t0YXJnZXRJZF07XG4gICAgfSk7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5waW5Tb3VyY2UgPSBmdW5jdGlvbiBwaW5Tb3VyY2Uoc291cmNlSWQpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5nZXRTb3VyY2Uoc291cmNlSWQpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oc291cmNlLCAnRXhwZWN0ZWQgYW4gZXhpc3Rpbmcgc291cmNlLicpO1xuXG4gICAgdGhpcy5waW5uZWRTb3VyY2VJZCA9IHNvdXJjZUlkO1xuICAgIHRoaXMucGlubmVkU291cmNlID0gc291cmNlO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUudW5waW5Tb3VyY2UgPSBmdW5jdGlvbiB1bnBpblNvdXJjZSgpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRoaXMucGlubmVkU291cmNlLCAnTm8gc291cmNlIGlzIHBpbm5lZCBhdCB0aGUgdGltZS4nKTtcblxuICAgIHRoaXMucGlubmVkU291cmNlSWQgPSBudWxsO1xuICAgIHRoaXMucGlubmVkU291cmNlID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gSGFuZGxlclJlZ2lzdHJ5O1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gSGFuZGxlclJlZ2lzdHJ5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL0hhbmRsZXJSZWdpc3RyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGdldE5leHRVbmlxdWVJZDtcbnZhciBuZXh0VW5pcXVlSWQgPSAwO1xuXG5mdW5jdGlvbiBnZXROZXh0VW5pcXVlSWQoKSB7XG4gIHJldHVybiBuZXh0VW5pcXVlSWQrKztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvdXRpbHMvZ2V0TmV4dFVuaXF1ZUlkLmpzXG4gKiogbW9kdWxlIGlkID0gMTA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gcmF3QXNhcCBwcm92aWRlcyBldmVyeXRoaW5nIHdlIG5lZWQgZXhjZXB0IGV4Y2VwdGlvbiBtYW5hZ2VtZW50LlxudmFyIHJhd0FzYXAgPSByZXF1aXJlKFwiLi9yYXdcIik7XG4vLyBSYXdUYXNrcyBhcmUgcmVjeWNsZWQgdG8gcmVkdWNlIEdDIGNodXJuLlxudmFyIGZyZWVUYXNrcyA9IFtdO1xuLy8gV2UgcXVldWUgZXJyb3JzIHRvIGVuc3VyZSB0aGV5IGFyZSB0aHJvd24gaW4gcmlnaHQgb3JkZXIgKEZJRk8pLlxuLy8gQXJyYXktYXMtcXVldWUgaXMgZ29vZCBlbm91Z2ggaGVyZSwgc2luY2Ugd2UgYXJlIGp1c3QgZGVhbGluZyB3aXRoIGV4Y2VwdGlvbnMuXG52YXIgcGVuZGluZ0Vycm9ycyA9IFtdO1xudmFyIHJlcXVlc3RFcnJvclRocm93ID0gcmF3QXNhcC5tYWtlUmVxdWVzdENhbGxGcm9tVGltZXIodGhyb3dGaXJzdEVycm9yKTtcblxuZnVuY3Rpb24gdGhyb3dGaXJzdEVycm9yKCkge1xuICAgIGlmIChwZW5kaW5nRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBwZW5kaW5nRXJyb3JzLnNoaWZ0KCk7XG4gICAgfVxufVxuXG4vKipcbiAqIENhbGxzIGEgdGFzayBhcyBzb29uIGFzIHBvc3NpYmxlIGFmdGVyIHJldHVybmluZywgaW4gaXRzIG93biBldmVudCwgd2l0aCBwcmlvcml0eVxuICogb3ZlciBvdGhlciBldmVudHMgbGlrZSBhbmltYXRpb24sIHJlZmxvdywgYW5kIHJlcGFpbnQuIEFuIGVycm9yIHRocm93biBmcm9tIGFuXG4gKiBldmVudCB3aWxsIG5vdCBpbnRlcnJ1cHQsIG5vciBldmVuIHN1YnN0YW50aWFsbHkgc2xvdyBkb3duIHRoZSBwcm9jZXNzaW5nIG9mXG4gKiBvdGhlciBldmVudHMsIGJ1dCB3aWxsIGJlIHJhdGhlciBwb3N0cG9uZWQgdG8gYSBsb3dlciBwcmlvcml0eSBldmVudC5cbiAqIEBwYXJhbSB7e2NhbGx9fSB0YXNrIEEgY2FsbGFibGUgb2JqZWN0LCB0eXBpY2FsbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIG5vXG4gKiBhcmd1bWVudHMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYXNhcDtcbmZ1bmN0aW9uIGFzYXAodGFzaykge1xuICAgIHZhciByYXdUYXNrO1xuICAgIGlmIChmcmVlVGFza3MubGVuZ3RoKSB7XG4gICAgICAgIHJhd1Rhc2sgPSBmcmVlVGFza3MucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmF3VGFzayA9IG5ldyBSYXdUYXNrKCk7XG4gICAgfVxuICAgIHJhd1Rhc2sudGFzayA9IHRhc2s7XG4gICAgcmF3QXNhcChyYXdUYXNrKTtcbn1cblxuLy8gV2Ugd3JhcCB0YXNrcyB3aXRoIHJlY3ljbGFibGUgdGFzayBvYmplY3RzLiAgQSB0YXNrIG9iamVjdCBpbXBsZW1lbnRzXG4vLyBgY2FsbGAsIGp1c3QgbGlrZSBhIGZ1bmN0aW9uLlxuZnVuY3Rpb24gUmF3VGFzaygpIHtcbiAgICB0aGlzLnRhc2sgPSBudWxsO1xufVxuXG4vLyBUaGUgc29sZSBwdXJwb3NlIG9mIHdyYXBwaW5nIHRoZSB0YXNrIGlzIHRvIGNhdGNoIHRoZSBleGNlcHRpb24gYW5kIHJlY3ljbGVcbi8vIHRoZSB0YXNrIG9iamVjdCBhZnRlciBpdHMgc2luZ2xlIHVzZS5cblJhd1Rhc2sucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdGhpcy50YXNrLmNhbGwoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoYXNhcC5vbmVycm9yKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGhvb2sgZXhpc3RzIHB1cmVseSBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAgICAgICAgICAgIC8vIEl0cyBuYW1lIHdpbGwgYmUgcGVyaW9kaWNhbGx5IHJhbmRvbWl6ZWQgdG8gYnJlYWsgYW55IGNvZGUgdGhhdFxuICAgICAgICAgICAgLy8gZGVwZW5kcyBvbiBpdHMgZXhpc3RlbmNlLlxuICAgICAgICAgICAgYXNhcC5vbmVycm9yKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEluIGEgd2ViIGJyb3dzZXIsIGV4Y2VwdGlvbnMgYXJlIG5vdCBmYXRhbC4gSG93ZXZlciwgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIHNsb3dpbmcgZG93biB0aGUgcXVldWUgb2YgcGVuZGluZyB0YXNrcywgd2UgcmV0aHJvdyB0aGUgZXJyb3IgaW4gYVxuICAgICAgICAgICAgLy8gbG93ZXIgcHJpb3JpdHkgdHVybi5cbiAgICAgICAgICAgIHBlbmRpbmdFcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgICAgICByZXF1ZXN0RXJyb3JUaHJvdygpO1xuICAgICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy50YXNrID0gbnVsbDtcbiAgICAgICAgZnJlZVRhc2tzW2ZyZWVUYXNrcy5sZW5ndGhdID0gdGhpcztcbiAgICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYXNhcC9icm93c2VyLWFzYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBVc2UgdGhlIGZhc3Rlc3QgbWVhbnMgcG9zc2libGUgdG8gZXhlY3V0ZSBhIHRhc2sgaW4gaXRzIG93biB0dXJuLCB3aXRoXG4vLyBwcmlvcml0eSBvdmVyIG90aGVyIGV2ZW50cyBpbmNsdWRpbmcgSU8sIGFuaW1hdGlvbiwgcmVmbG93LCBhbmQgcmVkcmF3XG4vLyBldmVudHMgaW4gYnJvd3NlcnMuXG4vL1xuLy8gQW4gZXhjZXB0aW9uIHRocm93biBieSBhIHRhc2sgd2lsbCBwZXJtYW5lbnRseSBpbnRlcnJ1cHQgdGhlIHByb2Nlc3Npbmcgb2Zcbi8vIHN1YnNlcXVlbnQgdGFza3MuIFRoZSBoaWdoZXIgbGV2ZWwgYGFzYXBgIGZ1bmN0aW9uIGVuc3VyZXMgdGhhdCBpZiBhblxuLy8gZXhjZXB0aW9uIGlzIHRocm93biBieSBhIHRhc2ssIHRoYXQgdGhlIHRhc2sgcXVldWUgd2lsbCBjb250aW51ZSBmbHVzaGluZyBhc1xuLy8gc29vbiBhcyBwb3NzaWJsZSwgYnV0IGlmIHlvdSB1c2UgYHJhd0FzYXBgIGRpcmVjdGx5LCB5b3UgYXJlIHJlc3BvbnNpYmxlIHRvXG4vLyBlaXRoZXIgZW5zdXJlIHRoYXQgbm8gZXhjZXB0aW9ucyBhcmUgdGhyb3duIGZyb20geW91ciB0YXNrLCBvciB0byBtYW51YWxseVxuLy8gY2FsbCBgcmF3QXNhcC5yZXF1ZXN0Rmx1c2hgIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG5tb2R1bGUuZXhwb3J0cyA9IHJhd0FzYXA7XG5mdW5jdGlvbiByYXdBc2FwKHRhc2spIHtcbiAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgICByZXF1ZXN0Rmx1c2goKTtcbiAgICAgICAgZmx1c2hpbmcgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBFcXVpdmFsZW50IHRvIHB1c2gsIGJ1dCBhdm9pZHMgYSBmdW5jdGlvbiBjYWxsLlxuICAgIHF1ZXVlW3F1ZXVlLmxlbmd0aF0gPSB0YXNrO1xufVxuXG52YXIgcXVldWUgPSBbXTtcbi8vIE9uY2UgYSBmbHVzaCBoYXMgYmVlbiByZXF1ZXN0ZWQsIG5vIGZ1cnRoZXIgY2FsbHMgdG8gYHJlcXVlc3RGbHVzaGAgYXJlXG4vLyBuZWNlc3NhcnkgdW50aWwgdGhlIG5leHQgYGZsdXNoYCBjb21wbGV0ZXMuXG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbi8vIGByZXF1ZXN0Rmx1c2hgIGlzIGFuIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG1ldGhvZCB0aGF0IGF0dGVtcHRzIHRvIGtpY2tcbi8vIG9mZiBhIGBmbHVzaGAgZXZlbnQgYXMgcXVpY2tseSBhcyBwb3NzaWJsZS4gYGZsdXNoYCB3aWxsIGF0dGVtcHQgdG8gZXhoYXVzdFxuLy8gdGhlIGV2ZW50IHF1ZXVlIGJlZm9yZSB5aWVsZGluZyB0byB0aGUgYnJvd3NlcidzIG93biBldmVudCBsb29wLlxudmFyIHJlcXVlc3RGbHVzaDtcbi8vIFRoZSBwb3NpdGlvbiBvZiB0aGUgbmV4dCB0YXNrIHRvIGV4ZWN1dGUgaW4gdGhlIHRhc2sgcXVldWUuIFRoaXMgaXNcbi8vIHByZXNlcnZlZCBiZXR3ZWVuIGNhbGxzIHRvIGBmbHVzaGAgc28gdGhhdCBpdCBjYW4gYmUgcmVzdW1lZCBpZlxuLy8gYSB0YXNrIHRocm93cyBhbiBleGNlcHRpb24uXG52YXIgaW5kZXggPSAwO1xuLy8gSWYgYSB0YXNrIHNjaGVkdWxlcyBhZGRpdGlvbmFsIHRhc2tzIHJlY3Vyc2l2ZWx5LCB0aGUgdGFzayBxdWV1ZSBjYW4gZ3Jvd1xuLy8gdW5ib3VuZGVkLiBUbyBwcmV2ZW50IG1lbW9yeSBleGhhdXN0aW9uLCB0aGUgdGFzayBxdWV1ZSB3aWxsIHBlcmlvZGljYWxseVxuLy8gdHJ1bmNhdGUgYWxyZWFkeS1jb21wbGV0ZWQgdGFza3MuXG52YXIgY2FwYWNpdHkgPSAxMDI0O1xuXG4vLyBUaGUgZmx1c2ggZnVuY3Rpb24gcHJvY2Vzc2VzIGFsbCB0YXNrcyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgd2l0aFxuLy8gYHJhd0FzYXBgIHVubGVzcyBhbmQgdW50aWwgb25lIG9mIHRob3NlIHRhc2tzIHRocm93cyBhbiBleGNlcHRpb24uXG4vLyBJZiBhIHRhc2sgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgYGZsdXNoYCBlbnN1cmVzIHRoYXQgaXRzIHN0YXRlIHdpbGwgcmVtYWluXG4vLyBjb25zaXN0ZW50IGFuZCB3aWxsIHJlc3VtZSB3aGVyZSBpdCBsZWZ0IG9mZiB3aGVuIGNhbGxlZCBhZ2Fpbi5cbi8vIEhvd2V2ZXIsIGBmbHVzaGAgZG9lcyBub3QgbWFrZSBhbnkgYXJyYW5nZW1lbnRzIHRvIGJlIGNhbGxlZCBhZ2FpbiBpZiBhblxuLy8gZXhjZXB0aW9uIGlzIHRocm93bi5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHdoaWxlIChpbmRleCA8IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgIC8vIEFkdmFuY2UgdGhlIGluZGV4IGJlZm9yZSBjYWxsaW5nIHRoZSB0YXNrLiBUaGlzIGVuc3VyZXMgdGhhdCB3ZSB3aWxsXG4gICAgICAgIC8vIGJlZ2luIGZsdXNoaW5nIG9uIHRoZSBuZXh0IHRhc2sgdGhlIHRhc2sgdGhyb3dzIGFuIGVycm9yLlxuICAgICAgICBpbmRleCA9IGluZGV4ICsgMTtcbiAgICAgICAgcXVldWVbY3VycmVudEluZGV4XS5jYWxsKCk7XG4gICAgICAgIC8vIFByZXZlbnQgbGVha2luZyBtZW1vcnkgZm9yIGxvbmcgY2hhaW5zIG9mIHJlY3Vyc2l2ZSBjYWxscyB0byBgYXNhcGAuXG4gICAgICAgIC8vIElmIHdlIGNhbGwgYGFzYXBgIHdpdGhpbiB0YXNrcyBzY2hlZHVsZWQgYnkgYGFzYXBgLCB0aGUgcXVldWUgd2lsbFxuICAgICAgICAvLyBncm93LCBidXQgdG8gYXZvaWQgYW4gTyhuKSB3YWxrIGZvciBldmVyeSB0YXNrIHdlIGV4ZWN1dGUsIHdlIGRvbid0XG4gICAgICAgIC8vIHNoaWZ0IHRhc2tzIG9mZiB0aGUgcXVldWUgYWZ0ZXIgdGhleSBoYXZlIGJlZW4gZXhlY3V0ZWQuXG4gICAgICAgIC8vIEluc3RlYWQsIHdlIHBlcmlvZGljYWxseSBzaGlmdCAxMDI0IHRhc2tzIG9mZiB0aGUgcXVldWUuXG4gICAgICAgIGlmIChpbmRleCA+IGNhcGFjaXR5KSB7XG4gICAgICAgICAgICAvLyBNYW51YWxseSBzaGlmdCBhbGwgdmFsdWVzIHN0YXJ0aW5nIGF0IHRoZSBpbmRleCBiYWNrIHRvIHRoZVxuICAgICAgICAgICAgLy8gYmVnaW5uaW5nIG9mIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgIGZvciAodmFyIHNjYW4gPSAwLCBuZXdMZW5ndGggPSBxdWV1ZS5sZW5ndGggLSBpbmRleDsgc2NhbiA8IG5ld0xlbmd0aDsgc2NhbisrKSB7XG4gICAgICAgICAgICAgICAgcXVldWVbc2Nhbl0gPSBxdWV1ZVtzY2FuICsgaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVldWUubGVuZ3RoIC09IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgaW5kZXggPSAwO1xuICAgIGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIGByZXF1ZXN0Rmx1c2hgIGlzIGltcGxlbWVudGVkIHVzaW5nIGEgc3RyYXRlZ3kgYmFzZWQgb24gZGF0YSBjb2xsZWN0ZWQgZnJvbVxuLy8gZXZlcnkgYXZhaWxhYmxlIFNhdWNlTGFicyBTZWxlbml1bSB3ZWIgZHJpdmVyIHdvcmtlciBhdCB0aW1lIG9mIHdyaXRpbmcuXG4vLyBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xbUctNVVZR3VwNXF4R2RFTVdraFA2QldDejA1M05VYjJFMVFvVVRVMTZ1QS9lZGl0I2dpZD03ODM3MjQ1OTNcblxuLy8gU2FmYXJpIDYgYW5kIDYuMSBmb3IgZGVza3RvcCwgaVBhZCwgYW5kIGlQaG9uZSBhcmUgdGhlIG9ubHkgYnJvd3NlcnMgdGhhdFxuLy8gaGF2ZSBXZWJLaXRNdXRhdGlvbk9ic2VydmVyIGJ1dCBub3QgdW4tcHJlZml4ZWQgTXV0YXRpb25PYnNlcnZlci5cbi8vIE11c3QgdXNlIGBnbG9iYWxgIGluc3RlYWQgb2YgYHdpbmRvd2AgdG8gd29yayBpbiBib3RoIGZyYW1lcyBhbmQgd2ViXG4vLyB3b3JrZXJzLiBgZ2xvYmFsYCBpcyBhIHByb3Zpc2lvbiBvZiBCcm93c2VyaWZ5LCBNciwgTXJzLCBvciBNb3AuXG52YXIgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxuLy8gTXV0YXRpb25PYnNlcnZlcnMgYXJlIGRlc2lyYWJsZSBiZWNhdXNlIHRoZXkgaGF2ZSBoaWdoIHByaW9yaXR5IGFuZCB3b3JrXG4vLyByZWxpYWJseSBldmVyeXdoZXJlIHRoZXkgYXJlIGltcGxlbWVudGVkLlxuLy8gVGhleSBhcmUgaW1wbGVtZW50ZWQgaW4gYWxsIG1vZGVybiBicm93c2Vycy5cbi8vXG4vLyAtIEFuZHJvaWQgNC00LjNcbi8vIC0gQ2hyb21lIDI2LTM0XG4vLyAtIEZpcmVmb3ggMTQtMjlcbi8vIC0gSW50ZXJuZXQgRXhwbG9yZXIgMTFcbi8vIC0gaVBhZCBTYWZhcmkgNi03LjFcbi8vIC0gaVBob25lIFNhZmFyaSA3LTcuMVxuLy8gLSBTYWZhcmkgNi03XG5pZiAodHlwZW9mIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXF1ZXN0Rmx1c2ggPSBtYWtlUmVxdWVzdENhbGxGcm9tTXV0YXRpb25PYnNlcnZlcihmbHVzaCk7XG5cbi8vIE1lc3NhZ2VDaGFubmVscyBhcmUgZGVzaXJhYmxlIGJlY2F1c2UgdGhleSBnaXZlIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIEhUTUxcbi8vIHRhc2sgcXVldWUsIGFyZSBpbXBsZW1lbnRlZCBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCwgU2FmYXJpIDUuMC0xLCBhbmQgT3BlcmFcbi8vIDExLTEyLCBhbmQgaW4gd2ViIHdvcmtlcnMgaW4gbWFueSBlbmdpbmVzLlxuLy8gQWx0aG91Z2ggbWVzc2FnZSBjaGFubmVscyB5aWVsZCB0byBhbnkgcXVldWVkIHJlbmRlcmluZyBhbmQgSU8gdGFza3MsIHRoZXlcbi8vIHdvdWxkIGJlIGJldHRlciB0aGFuIGltcG9zaW5nIHRoZSA0bXMgZGVsYXkgb2YgdGltZXJzLlxuLy8gSG93ZXZlciwgdGhleSBkbyBub3Qgd29yayByZWxpYWJseSBpbiBJbnRlcm5ldCBFeHBsb3JlciBvciBTYWZhcmkuXG5cbi8vIEludGVybmV0IEV4cGxvcmVyIDEwIGlzIHRoZSBvbmx5IGJyb3dzZXIgdGhhdCBoYXMgc2V0SW1tZWRpYXRlIGJ1dCBkb2VzXG4vLyBub3QgaGF2ZSBNdXRhdGlvbk9ic2VydmVycy5cbi8vIEFsdGhvdWdoIHNldEltbWVkaWF0ZSB5aWVsZHMgdG8gdGhlIGJyb3dzZXIncyByZW5kZXJlciwgaXQgd291bGQgYmVcbi8vIHByZWZlcnJhYmxlIHRvIGZhbGxpbmcgYmFjayB0byBzZXRUaW1lb3V0IHNpbmNlIGl0IGRvZXMgbm90IGhhdmVcbi8vIHRoZSBtaW5pbXVtIDRtcyBwZW5hbHR5LlxuLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBhcHBlYXJzIHRvIGJlIGEgYnVnIGluIEludGVybmV0IEV4cGxvcmVyIDEwIE1vYmlsZSAoYW5kXG4vLyBEZXNrdG9wIHRvIGEgbGVzc2VyIGV4dGVudCkgdGhhdCByZW5kZXJzIGJvdGggc2V0SW1tZWRpYXRlIGFuZFxuLy8gTWVzc2FnZUNoYW5uZWwgdXNlbGVzcyBmb3IgdGhlIHB1cnBvc2VzIG9mIEFTQVAuXG4vLyBodHRwczovL2dpdGh1Yi5jb20va3Jpc2tvd2FsL3EvaXNzdWVzLzM5NlxuXG4vLyBUaW1lcnMgYXJlIGltcGxlbWVudGVkIHVuaXZlcnNhbGx5LlxuLy8gV2UgZmFsbCBiYWNrIHRvIHRpbWVycyBpbiB3b3JrZXJzIGluIG1vc3QgZW5naW5lcywgYW5kIGluIGZvcmVncm91bmRcbi8vIGNvbnRleHRzIGluIHRoZSBmb2xsb3dpbmcgYnJvd3NlcnMuXG4vLyBIb3dldmVyLCBub3RlIHRoYXQgZXZlbiB0aGlzIHNpbXBsZSBjYXNlIHJlcXVpcmVzIG51YW5jZXMgdG8gb3BlcmF0ZSBpbiBhXG4vLyBicm9hZCBzcGVjdHJ1bSBvZiBicm93c2Vycy5cbi8vXG4vLyAtIEZpcmVmb3ggMy0xM1xuLy8gLSBJbnRlcm5ldCBFeHBsb3JlciA2LTlcbi8vIC0gaVBhZCBTYWZhcmkgNC4zXG4vLyAtIEx5bnggMi44Ljdcbn0gZWxzZSB7XG4gICAgcmVxdWVzdEZsdXNoID0gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKGZsdXNoKTtcbn1cblxuLy8gYHJlcXVlc3RGbHVzaGAgcmVxdWVzdHMgdGhhdCB0aGUgaGlnaCBwcmlvcml0eSBldmVudCBxdWV1ZSBiZSBmbHVzaGVkIGFzXG4vLyBzb29uIGFzIHBvc3NpYmxlLlxuLy8gVGhpcyBpcyB1c2VmdWwgdG8gcHJldmVudCBhbiBlcnJvciB0aHJvd24gaW4gYSB0YXNrIGZyb20gc3RhbGxpbmcgdGhlIGV2ZW50XG4vLyBxdWV1ZSBpZiB0aGUgZXhjZXB0aW9uIGhhbmRsZWQgYnkgTm9kZS5qc+KAmXNcbi8vIGBwcm9jZXNzLm9uKFwidW5jYXVnaHRFeGNlcHRpb25cIilgIG9yIGJ5IGEgZG9tYWluLlxucmF3QXNhcC5yZXF1ZXN0Rmx1c2ggPSByZXF1ZXN0Rmx1c2g7XG5cbi8vIFRvIHJlcXVlc3QgYSBoaWdoIHByaW9yaXR5IGV2ZW50LCB3ZSBpbmR1Y2UgYSBtdXRhdGlvbiBvYnNlcnZlciBieSB0b2dnbGluZ1xuLy8gdGhlIHRleHQgb2YgYSB0ZXh0IG5vZGUgYmV0d2VlbiBcIjFcIiBhbmQgXCItMVwiLlxuZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbU11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spIHtcbiAgICB2YXIgdG9nZ2xlID0gMTtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pO1xuICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbiAgICAgICAgdG9nZ2xlID0gLXRvZ2dsZTtcbiAgICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlO1xuICAgIH07XG59XG5cbi8vIFRoZSBtZXNzYWdlIGNoYW5uZWwgdGVjaG5pcXVlIHdhcyBkaXNjb3ZlcmVkIGJ5IE1hbHRlIFVibCBhbmQgd2FzIHRoZVxuLy8gb3JpZ2luYWwgZm91bmRhdGlvbiBmb3IgdGhpcyBsaWJyYXJ5LlxuLy8gaHR0cDovL3d3dy5ub25ibG9ja2luZy5pby8yMDExLzA2L3dpbmRvd25leHR0aWNrLmh0bWxcblxuLy8gU2FmYXJpIDYuMC41IChhdCBsZWFzdCkgaW50ZXJtaXR0ZW50bHkgZmFpbHMgdG8gY3JlYXRlIG1lc3NhZ2UgcG9ydHMgb24gYVxuLy8gcGFnZSdzIGZpcnN0IGxvYWQuIFRoYW5rZnVsbHksIHRoaXMgdmVyc2lvbiBvZiBTYWZhcmkgc3VwcG9ydHNcbi8vIE11dGF0aW9uT2JzZXJ2ZXJzLCBzbyB3ZSBkb24ndCBuZWVkIHRvIGZhbGwgYmFjayBpbiB0aGF0IGNhc2UuXG5cbi8vIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21NZXNzYWdlQ2hhbm5lbChjYWxsYmFjaykge1xuLy8gICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4vLyAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBjYWxsYmFjaztcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4vLyAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4vLyAgICAgfTtcbi8vIH1cblxuLy8gRm9yIHJlYXNvbnMgZXhwbGFpbmVkIGFib3ZlLCB3ZSBhcmUgYWxzbyB1bmFibGUgdG8gdXNlIGBzZXRJbW1lZGlhdGVgXG4vLyB1bmRlciBhbnkgY2lyY3Vtc3RhbmNlcy5cbi8vIEV2ZW4gaWYgd2Ugd2VyZSwgdGhlcmUgaXMgYW5vdGhlciBidWcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAuXG4vLyBJdCBpcyBub3Qgc3VmZmljaWVudCB0byBhc3NpZ24gYHNldEltbWVkaWF0ZWAgdG8gYHJlcXVlc3RGbHVzaGAgYmVjYXVzZVxuLy8gYHNldEltbWVkaWF0ZWAgbXVzdCBiZSBjYWxsZWQgKmJ5IG5hbWUqIGFuZCB0aGVyZWZvcmUgbXVzdCBiZSB3cmFwcGVkIGluIGFcbi8vIGNsb3N1cmUuXG4vLyBOZXZlciBmb3JnZXQuXG5cbi8vIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21TZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4vLyAgICAgICAgIHNldEltbWVkaWF0ZShjYWxsYmFjayk7XG4vLyAgICAgfTtcbi8vIH1cblxuLy8gU2FmYXJpIDYuMCBoYXMgYSBwcm9ibGVtIHdoZXJlIHRpbWVycyB3aWxsIGdldCBsb3N0IHdoaWxlIHRoZSB1c2VyIGlzXG4vLyBzY3JvbGxpbmcuIFRoaXMgcHJvYmxlbSBkb2VzIG5vdCBpbXBhY3QgQVNBUCBiZWNhdXNlIFNhZmFyaSA2LjAgc3VwcG9ydHNcbi8vIG11dGF0aW9uIG9ic2VydmVycywgc28gdGhhdCBpbXBsZW1lbnRhdGlvbiBpcyB1c2VkIGluc3RlYWQuXG4vLyBIb3dldmVyLCBpZiB3ZSBldmVyIGVsZWN0IHRvIHVzZSB0aW1lcnMgaW4gU2FmYXJpLCB0aGUgcHJldmFsZW50IHdvcmstYXJvdW5kXG4vLyBpcyB0byBhZGQgYSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgdGhhdCBjYWxscyBmb3IgYSBmbHVzaC5cblxuLy8gYHNldFRpbWVvdXRgIGRvZXMgbm90IGNhbGwgdGhlIHBhc3NlZCBjYWxsYmFjayBpZiB0aGUgZGVsYXkgaXMgbGVzcyB0aGFuXG4vLyBhcHByb3hpbWF0ZWx5IDcgaW4gd2ViIHdvcmtlcnMgaW4gRmlyZWZveCA4IHRocm91Z2ggMTgsIGFuZCBzb21ldGltZXMgbm90XG4vLyBldmVuIHRoZW4uXG5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcihjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbiAgICAgICAgLy8gV2UgZGlzcGF0Y2ggYSB0aW1lb3V0IHdpdGggYSBzcGVjaWZpZWQgZGVsYXkgb2YgMCBmb3IgZW5naW5lcyB0aGF0XG4gICAgICAgIC8vIGNhbiByZWxpYWJseSBhY2NvbW1vZGF0ZSB0aGF0IHJlcXVlc3QuIFRoaXMgd2lsbCB1c3VhbGx5IGJlIHNuYXBwZWRcbiAgICAgICAgLy8gdG8gYSA0IG1pbGlzZWNvbmQgZGVsYXksIGJ1dCBvbmNlIHdlJ3JlIGZsdXNoaW5nLCB0aGVyZSdzIG5vIGRlbGF5XG4gICAgICAgIC8vIGJldHdlZW4gZXZlbnRzLlxuICAgICAgICB2YXIgdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoaGFuZGxlVGltZXIsIDApO1xuICAgICAgICAvLyBIb3dldmVyLCBzaW5jZSB0aGlzIHRpbWVyIGdldHMgZnJlcXVlbnRseSBkcm9wcGVkIGluIEZpcmVmb3hcbiAgICAgICAgLy8gd29ya2Vycywgd2UgZW5saXN0IGFuIGludGVydmFsIGhhbmRsZSB0aGF0IHdpbGwgdHJ5IHRvIGZpcmVcbiAgICAgICAgLy8gYW4gZXZlbnQgMjAgdGltZXMgcGVyIHNlY29uZCB1bnRpbCBpdCBzdWNjZWVkcy5cbiAgICAgICAgdmFyIGludGVydmFsSGFuZGxlID0gc2V0SW50ZXJ2YWwoaGFuZGxlVGltZXIsIDUwKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVUaW1lcigpIHtcbiAgICAgICAgICAgIC8vIFdoaWNoZXZlciB0aW1lciBzdWNjZWVkcyB3aWxsIGNhbmNlbCBib3RoIHRpbWVycyBhbmRcbiAgICAgICAgICAgIC8vIGV4ZWN1dGUgdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbEhhbmRsZSk7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gVGhpcyBpcyBmb3IgYGFzYXAuanNgIG9ubHkuXG4vLyBJdHMgbmFtZSB3aWxsIGJlIHBlcmlvZGljYWxseSByYW5kb21pemVkIHRvIGJyZWFrIGFueSBjb2RlIHRoYXQgZGVwZW5kcyBvblxuLy8gaXRzIGV4aXN0ZW5jZS5cbnJhd0FzYXAubWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyID0gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyO1xuXG4vLyBBU0FQIHdhcyBvcmlnaW5hbGx5IGEgbmV4dFRpY2sgc2hpbSBpbmNsdWRlZCBpbiBRLiBUaGlzIHdhcyBmYWN0b3JlZCBvdXRcbi8vIGludG8gdGhpcyBBU0FQIHBhY2thZ2UuIEl0IHdhcyBsYXRlciBhZGFwdGVkIHRvIFJTVlAgd2hpY2ggbWFkZSBmdXJ0aGVyXG4vLyBhbWVuZG1lbnRzLiBUaGVzZSBkZWNpc2lvbnMsIHBhcnRpY3VsYXJseSB0byBtYXJnaW5hbGl6ZSBNZXNzYWdlQ2hhbm5lbCBhbmRcbi8vIHRvIGNhcHR1cmUgdGhlIE11dGF0aW9uT2JzZXJ2ZXIgaW1wbGVtZW50YXRpb24gaW4gYSBjbG9zdXJlLCB3ZXJlIGludGVncmF0ZWRcbi8vIGJhY2sgaW50byBBU0FQIHByb3Blci5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90aWxkZWlvL3JzdnAuanMvYmxvYi9jZGRmNzIzMjU0NmE5Y2Y4NTg1MjRiNzVjZGU2ZjllZGY3MjYyMGE3L2xpYi9yc3ZwL2FzYXAuanNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FzYXAvYnJvd3Nlci1yYXcuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRHJhZ1NvdXJjZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERyYWdTb3VyY2UoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdTb3VyY2UpO1xuICB9XG5cbiAgRHJhZ1NvdXJjZS5wcm90b3R5cGUuY2FuRHJhZyA9IGZ1bmN0aW9uIGNhbkRyYWcoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgRHJhZ1NvdXJjZS5wcm90b3R5cGUuaXNEcmFnZ2luZyA9IGZ1bmN0aW9uIGlzRHJhZ2dpbmcobW9uaXRvciwgaGFuZGxlKSB7XG4gICAgcmV0dXJuIGhhbmRsZSA9PT0gbW9uaXRvci5nZXRTb3VyY2VJZCgpO1xuICB9O1xuXG4gIERyYWdTb3VyY2UucHJvdG90eXBlLmVuZERyYWcgPSBmdW5jdGlvbiBlbmREcmFnKCkge307XG5cbiAgcmV0dXJuIERyYWdTb3VyY2U7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERyYWdTb3VyY2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9EcmFnU291cmNlLmpzXG4gKiogbW9kdWxlIGlkID0gMTEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIERyb3BUYXJnZXQgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEcm9wVGFyZ2V0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wVGFyZ2V0KTtcbiAgfVxuXG4gIERyb3BUYXJnZXQucHJvdG90eXBlLmNhbkRyb3AgPSBmdW5jdGlvbiBjYW5Ecm9wKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIERyb3BUYXJnZXQucHJvdG90eXBlLmhvdmVyID0gZnVuY3Rpb24gaG92ZXIoKSB7fTtcblxuICBEcm9wVGFyZ2V0LnByb3RvdHlwZS5kcm9wID0gZnVuY3Rpb24gZHJvcCgpIHt9O1xuXG4gIHJldHVybiBEcm9wVGFyZ2V0O1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEcm9wVGFyZ2V0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvRHJvcFRhcmdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDExMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlQmFja2VuZDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9sb2Rhc2hOb29wID0gcmVxdWlyZSgnbG9kYXNoL25vb3AnKTtcblxudmFyIF9sb2Rhc2hOb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaE5vb3ApO1xuXG52YXIgVGVzdEJhY2tlbmQgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUZXN0QmFja2VuZChtYW5hZ2VyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RCYWNrZW5kKTtcblxuICAgIHRoaXMuYWN0aW9ucyA9IG1hbmFnZXIuZ2V0QWN0aW9ucygpO1xuICB9XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgdGhpcy5kaWRDYWxsU2V0dXAgPSB0cnVlO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIHRlYXJkb3duKCkge1xuICAgIHRoaXMuZGlkQ2FsbFRlYXJkb3duID0gdHJ1ZTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuY29ubmVjdERyYWdTb3VyY2UgPSBmdW5jdGlvbiBjb25uZWN0RHJhZ1NvdXJjZSgpIHtcbiAgICByZXR1cm4gX2xvZGFzaE5vb3AyWydkZWZhdWx0J107XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLmNvbm5lY3REcmFnUHJldmlldyA9IGZ1bmN0aW9uIGNvbm5lY3REcmFnUHJldmlldygpIHtcbiAgICByZXR1cm4gX2xvZGFzaE5vb3AyWydkZWZhdWx0J107XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLmNvbm5lY3REcm9wVGFyZ2V0ID0gZnVuY3Rpb24gY29ubmVjdERyb3BUYXJnZXQoKSB7XG4gICAgcmV0dXJuIF9sb2Rhc2hOb29wMlsnZGVmYXVsdCddO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5zaW11bGF0ZUJlZ2luRHJhZyA9IGZ1bmN0aW9uIHNpbXVsYXRlQmVnaW5EcmFnKHNvdXJjZUlkcywgb3B0aW9ucykge1xuICAgIHRoaXMuYWN0aW9ucy5iZWdpbkRyYWcoc291cmNlSWRzLCBvcHRpb25zKTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuc2ltdWxhdGVQdWJsaXNoRHJhZ1NvdXJjZSA9IGZ1bmN0aW9uIHNpbXVsYXRlUHVibGlzaERyYWdTb3VyY2UoKSB7XG4gICAgdGhpcy5hY3Rpb25zLnB1Ymxpc2hEcmFnU291cmNlKCk7XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLnNpbXVsYXRlSG92ZXIgPSBmdW5jdGlvbiBzaW11bGF0ZUhvdmVyKHRhcmdldElkcywgb3B0aW9ucykge1xuICAgIHRoaXMuYWN0aW9ucy5ob3Zlcih0YXJnZXRJZHMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5zaW11bGF0ZURyb3AgPSBmdW5jdGlvbiBzaW11bGF0ZURyb3AoKSB7XG4gICAgdGhpcy5hY3Rpb25zLmRyb3AoKTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuc2ltdWxhdGVFbmREcmFnID0gZnVuY3Rpb24gc2ltdWxhdGVFbmREcmFnKCkge1xuICAgIHRoaXMuYWN0aW9ucy5lbmREcmFnKCk7XG4gIH07XG5cbiAgcmV0dXJuIFRlc3RCYWNrZW5kO1xufSkoKTtcblxuZnVuY3Rpb24gY3JlYXRlQmFja2VuZChtYW5hZ2VyKSB7XG4gIHJldHVybiBuZXcgVGVzdEJhY2tlbmQobWFuYWdlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9iYWNrZW5kcy9jcmVhdGVUZXN0QmFja2VuZC5qc1xuICoqIG1vZHVsZSBpZCA9IDExMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY2hlY2tEZWNvcmF0b3JBcmd1bWVudHM7XG5cbmZ1bmN0aW9uIGNoZWNrRGVjb3JhdG9yQXJndW1lbnRzKGZ1bmN0aW9uTmFtZSwgc2lnbmF0dXJlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBhcmcgPSBhcmdzW2ldO1xuICAgICAgaWYgKGFyZyAmJiBhcmcucHJvdG90eXBlICYmIGFyZy5wcm90b3R5cGUucmVuZGVyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICAnWW91IHNlZW0gdG8gYmUgYXBwbHlpbmcgdGhlIGFyZ3VtZW50cyBpbiB0aGUgd3Jvbmcgb3JkZXIuICcgKyAoJ0l0IHNob3VsZCBiZSAnICsgZnVuY3Rpb25OYW1lICsgJygnICsgc2lnbmF0dXJlICsgJykoQ29tcG9uZW50KSwgbm90IHRoZSBvdGhlciB3YXkgYXJvdW5kLiAnKSArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy10cm91Ymxlc2hvb3RpbmcuaHRtbCN5b3Utc2VlbS10by1iZS1hcHBseWluZy10aGUtYXJndW1lbnRzLWluLXRoZS13cm9uZy1vcmRlcicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvdXRpbHMvY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9zbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJhZ0xheWVyO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWwgPSByZXF1aXJlKCcuL3V0aWxzL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzU2hhbGxvd0VxdWFsKTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbFNjYWxhciA9IHJlcXVpcmUoJy4vdXRpbHMvc2hhbGxvd0VxdWFsU2NhbGFyJyk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWxTY2FsYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNTaGFsbG93RXF1YWxTY2FsYXIpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNQbGFpbk9iamVjdCk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMnKTtcblxudmFyIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMpO1xuXG5mdW5jdGlvbiBEcmFnTGF5ZXIoY29sbGVjdCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMlsnZGVmYXVsdCddLmFwcGx5KHVuZGVmaW5lZCwgWydEcmFnTGF5ZXInLCAnY29sbGVjdFssIG9wdGlvbnNdJ10uY29uY2F0KF9zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgY29sbGVjdCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIFwiY29sbGVjdFwiIHByb3ZpZGVkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBEcmFnTGF5ZXIgJyArICd0byBiZSBhIGZ1bmN0aW9uIHRoYXQgY29sbGVjdHMgcHJvcHMgdG8gaW5qZWN0IGludG8gdGhlIGNvbXBvbmVudC4gJywgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctbGF5ZXIuaHRtbCcsIGNvbGxlY3QpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF9sb2Rhc2hJc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKG9wdGlvbnMpLCAnRXhwZWN0ZWQgXCJvcHRpb25zXCIgcHJvdmlkZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byBEcmFnTGF5ZXIgdG8gYmUgJyArICdhIHBsYWluIG9iamVjdCB3aGVuIHNwZWNpZmllZC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLWxheWVyLmh0bWwnLCBvcHRpb25zKTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGVMYXllcihEZWNvcmF0ZWRDb21wb25lbnQpIHtcbiAgICB2YXIgX29wdGlvbnMkYXJlUHJvcHNFcXVhbCA9IG9wdGlvbnMuYXJlUHJvcHNFcXVhbDtcbiAgICB2YXIgYXJlUHJvcHNFcXVhbCA9IF9vcHRpb25zJGFyZVByb3BzRXF1YWwgPT09IHVuZGVmaW5lZCA/IF91dGlsc1NoYWxsb3dFcXVhbFNjYWxhcjJbJ2RlZmF1bHQnXSA6IF9vcHRpb25zJGFyZVByb3BzRXF1YWw7XG5cbiAgICB2YXIgZGlzcGxheU5hbWUgPSBEZWNvcmF0ZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgRGVjb3JhdGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cbiAgICByZXR1cm4gKGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoRHJhZ0xheWVyQ29udGFpbmVyLCBfQ29tcG9uZW50KTtcblxuICAgICAgRHJhZ0xheWVyQ29udGFpbmVyLnByb3RvdHlwZS5nZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSA9IGZ1bmN0aW9uIGdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLmNoaWxkO1xuICAgICAgfTtcblxuICAgICAgRHJhZ0xheWVyQ29udGFpbmVyLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuICFhcmVQcm9wc0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHwgIV91dGlsc1NoYWxsb3dFcXVhbDJbJ2RlZmF1bHQnXShuZXh0U3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgICAgfTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKERyYWdMYXllckNvbnRhaW5lciwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnRGVjb3JhdGVkQ29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IERlY29yYXRlZENvbXBvbmVudCxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNwbGF5TmFtZScsXG4gICAgICAgIHZhbHVlOiAnRHJhZ0xheWVyKCcgKyBkaXNwbGF5TmFtZSArICcpJyxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb250ZXh0VHlwZXMnLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGRyYWdEcm9wTWFuYWdlcjogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9XSk7XG5cbiAgICAgIGZ1bmN0aW9uIERyYWdMYXllckNvbnRhaW5lcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0xheWVyQ29udGFpbmVyKTtcblxuICAgICAgICBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gY29udGV4dC5kcmFnRHJvcE1hbmFnZXI7XG4gICAgICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHRoaXMubWFuYWdlciA9PT0gJ29iamVjdCcsICdDb3VsZCBub3QgZmluZCB0aGUgZHJhZyBhbmQgZHJvcCBtYW5hZ2VyIGluIHRoZSBjb250ZXh0IG9mICVzLiAnICsgJ01ha2Ugc3VyZSB0byB3cmFwIHRoZSB0b3AtbGV2ZWwgY29tcG9uZW50IG9mIHlvdXIgYXBwIHdpdGggRHJhZ0Ryb3BDb250ZXh0LiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLXRyb3VibGVzaG9vdGluZy5odG1sI2NvdWxkLW5vdC1maW5kLXRoZS1kcmFnLWFuZC1kcm9wLW1hbmFnZXItaW4tdGhlLWNvbnRleHQnLCBkaXNwbGF5TmFtZSwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldEN1cnJlbnRTdGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaXNDdXJyZW50bHlNb3VudGVkID0gdHJ1ZTtcblxuICAgICAgICB2YXIgbW9uaXRvciA9IHRoaXMubWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tT2Zmc2V0Q2hhbmdlID0gbW9uaXRvci5zdWJzY3JpYmVUb09mZnNldENoYW5nZSh0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tU3RhdGVDaGFuZ2UgPSBtb25pdG9yLnN1YnNjcmliZVRvU3RhdGVDaGFuZ2UodGhpcy5oYW5kbGVDaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuaXNDdXJyZW50bHlNb3VudGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21PZmZzZXRDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21TdGF0ZUNoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgRHJhZ0xheWVyQ29udGFpbmVyLnByb3RvdHlwZS5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV4dFN0YXRlID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcbiAgICAgICAgaWYgKCFfdXRpbHNTaGFsbG93RXF1YWwyWydkZWZhdWx0J10obmV4dFN0YXRlLCB0aGlzLnN0YXRlKSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgRHJhZ0xheWVyQ29udGFpbmVyLnByb3RvdHlwZS5nZXRDdXJyZW50U3RhdGUgPSBmdW5jdGlvbiBnZXRDdXJyZW50U3RhdGUoKSB7XG4gICAgICAgIHZhciBtb25pdG9yID0gdGhpcy5tYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3QobW9uaXRvcik7XG4gICAgICB9O1xuXG4gICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KERlY29yYXRlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUsIHtcbiAgICAgICAgICByZWY6ICdjaGlsZCcgfSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIERyYWdMYXllckNvbnRhaW5lcjtcbiAgICB9KShfcmVhY3QuQ29tcG9uZW50KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9EcmFnTGF5ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzaGFsbG93RXF1YWw7XG5cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWhhc093bi5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCBvYmpBW2tleXNBW2ldXSAhPT0gb2JqQltrZXlzQVtpXV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsQSA9IG9iakFba2V5c0FbaV1dO1xuICAgIHZhciB2YWxCID0gb2JqQltrZXlzQVtpXV07XG5cbiAgICBpZiAodmFsQSAhPT0gdmFsQikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvdXRpbHMvc2hhbGxvd0VxdWFsLmpzXG4gKiogbW9kdWxlIGlkID0gMTE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzaGFsbG93RXF1YWxTY2FsYXI7XG5cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbFNjYWxhcihvYmpBLCBvYmpCKSB7XG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWhhc093bi5jYWxsKG9iakIsIGtleXNBW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWxBID0gb2JqQVtrZXlzQVtpXV07XG4gICAgdmFyIHZhbEIgPSBvYmpCW2tleXNBW2ldXTtcblxuICAgIGlmICh2YWxBICE9PSB2YWxCIHx8IHR5cGVvZiB2YWxBID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsQiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi91dGlscy9zaGFsbG93RXF1YWxTY2FsYXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBfc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5leHBvcnRzWydkZWZhdWx0J10gPSBEcmFnU291cmNlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc1BsYWluT2JqZWN0KTtcblxudmFyIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzID0gcmVxdWlyZSgnLi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cycpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50cyk7XG5cbnZhciBfZGVjb3JhdGVIYW5kbGVyID0gcmVxdWlyZSgnLi9kZWNvcmF0ZUhhbmRsZXInKTtcblxudmFyIF9kZWNvcmF0ZUhhbmRsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVjb3JhdGVIYW5kbGVyKTtcblxudmFyIF9yZWdpc3RlclNvdXJjZSA9IHJlcXVpcmUoJy4vcmVnaXN0ZXJTb3VyY2UnKTtcblxudmFyIF9yZWdpc3RlclNvdXJjZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWdpc3RlclNvdXJjZSk7XG5cbnZhciBfY3JlYXRlU291cmNlRmFjdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlU291cmNlRmFjdG9yeScpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZUZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlU291cmNlRmFjdG9yeSk7XG5cbnZhciBfY3JlYXRlU291cmNlTW9uaXRvciA9IHJlcXVpcmUoJy4vY3JlYXRlU291cmNlTW9uaXRvcicpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZU1vbml0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlU291cmNlTW9uaXRvcik7XG5cbnZhciBfY3JlYXRlU291cmNlQ29ubmVjdG9yID0gcmVxdWlyZSgnLi9jcmVhdGVTb3VyY2VDb25uZWN0b3InKTtcblxudmFyIF9jcmVhdGVTb3VyY2VDb25uZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlU291cmNlQ29ubmVjdG9yKTtcblxudmFyIF91dGlsc0lzVmFsaWRUeXBlID0gcmVxdWlyZSgnLi91dGlscy9pc1ZhbGlkVHlwZScpO1xuXG52YXIgX3V0aWxzSXNWYWxpZFR5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNJc1ZhbGlkVHlwZSk7XG5cbmZ1bmN0aW9uIERyYWdTb3VyY2UodHlwZSwgc3BlYywgY29sbGVjdCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzNdO1xuXG4gIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMlsnZGVmYXVsdCddLmFwcGx5KHVuZGVmaW5lZCwgWydEcmFnU291cmNlJywgJ3R5cGUsIHNwZWMsIGNvbGxlY3RbLCBvcHRpb25zXSddLmNvbmNhdChfc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gIHZhciBnZXRUeXBlID0gdHlwZTtcbiAgaWYgKHR5cGVvZiB0eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfdXRpbHNJc1ZhbGlkVHlwZTJbJ2RlZmF1bHQnXSh0eXBlKSwgJ0V4cGVjdGVkIFwidHlwZVwiIHByb3ZpZGVkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBEcmFnU291cmNlIHRvIGJlICcgKyAnYSBzdHJpbmcsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nIGdpdmVuIHRoZSBjdXJyZW50IHByb3BzLiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCB0eXBlKTtcbiAgICBnZXRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfTtcbiAgfVxuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF9sb2Rhc2hJc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKHNwZWMpLCAnRXhwZWN0ZWQgXCJzcGVjXCIgcHJvdmlkZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byBEcmFnU291cmNlIHRvIGJlICcgKyAnYSBwbGFpbiBvYmplY3QuIEluc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBzcGVjKTtcbiAgdmFyIGNyZWF0ZVNvdXJjZSA9IF9jcmVhdGVTb3VyY2VGYWN0b3J5MlsnZGVmYXVsdCddKHNwZWMpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBjb2xsZWN0ID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgXCJjb2xsZWN0XCIgcHJvdmlkZWQgYXMgdGhlIHRoaXJkIGFyZ3VtZW50IHRvIERyYWdTb3VyY2UgdG8gYmUgJyArICdhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHBsYWluIG9iamVjdCBvZiBwcm9wcyB0byBpbmplY3QuICcgKyAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGNvbGxlY3QpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF9sb2Rhc2hJc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKG9wdGlvbnMpLCAnRXhwZWN0ZWQgXCJvcHRpb25zXCIgcHJvdmlkZWQgYXMgdGhlIGZvdXJ0aCBhcmd1bWVudCB0byBEcmFnU291cmNlIHRvIGJlICcgKyAnYSBwbGFpbiBvYmplY3Qgd2hlbiBzcGVjaWZpZWQuICcgKyAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGNvbGxlY3QpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0ZVNvdXJjZShEZWNvcmF0ZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gX2RlY29yYXRlSGFuZGxlcjJbJ2RlZmF1bHQnXSh7XG4gICAgICBjb25uZWN0QmFja2VuZDogZnVuY3Rpb24gY29ubmVjdEJhY2tlbmQoYmFja2VuZCwgc291cmNlSWQpIHtcbiAgICAgICAgcmV0dXJuIGJhY2tlbmQuY29ubmVjdERyYWdTb3VyY2Uoc291cmNlSWQpO1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckRpc3BsYXlOYW1lOiAnRHJhZ1NvdXJjZScsXG4gICAgICBjcmVhdGVIYW5kbGVyOiBjcmVhdGVTb3VyY2UsXG4gICAgICByZWdpc3RlckhhbmRsZXI6IF9yZWdpc3RlclNvdXJjZTJbJ2RlZmF1bHQnXSxcbiAgICAgIGNyZWF0ZU1vbml0b3I6IF9jcmVhdGVTb3VyY2VNb25pdG9yMlsnZGVmYXVsdCddLFxuICAgICAgY3JlYXRlQ29ubmVjdG9yOiBfY3JlYXRlU291cmNlQ29ubmVjdG9yMlsnZGVmYXVsdCddLFxuICAgICAgRGVjb3JhdGVkQ29tcG9uZW50OiBEZWNvcmF0ZWRDb21wb25lbnQsXG4gICAgICBnZXRUeXBlOiBnZXRUeXBlLFxuICAgICAgY29sbGVjdDogY29sbGVjdCxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9EcmFnU291cmNlLmpzXG4gKiogbW9kdWxlIGlkID0gMTE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlY29yYXRlSGFuZGxlcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2Rpc3Bvc2FibGVzID0gcmVxdWlyZSgnZGlzcG9zYWJsZXMnKTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJy4vdXRpbHMvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNTaGFsbG93RXF1YWwpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWxTY2FsYXInKTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbFNjYWxhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1NoYWxsb3dFcXVhbFNjYWxhcik7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc1BsYWluT2JqZWN0KTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxuZnVuY3Rpb24gZGVjb3JhdGVIYW5kbGVyKF9yZWYpIHtcbiAgdmFyIERlY29yYXRlZENvbXBvbmVudCA9IF9yZWYuRGVjb3JhdGVkQ29tcG9uZW50O1xuICB2YXIgY3JlYXRlSGFuZGxlciA9IF9yZWYuY3JlYXRlSGFuZGxlcjtcbiAgdmFyIGNyZWF0ZU1vbml0b3IgPSBfcmVmLmNyZWF0ZU1vbml0b3I7XG4gIHZhciBjcmVhdGVDb25uZWN0b3IgPSBfcmVmLmNyZWF0ZUNvbm5lY3RvcjtcbiAgdmFyIHJlZ2lzdGVySGFuZGxlciA9IF9yZWYucmVnaXN0ZXJIYW5kbGVyO1xuICB2YXIgY29udGFpbmVyRGlzcGxheU5hbWUgPSBfcmVmLmNvbnRhaW5lckRpc3BsYXlOYW1lO1xuICB2YXIgZ2V0VHlwZSA9IF9yZWYuZ2V0VHlwZTtcbiAgdmFyIGNvbGxlY3QgPSBfcmVmLmNvbGxlY3Q7XG4gIHZhciBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkYXJlUHJvcHNFcXVhbCA9IG9wdGlvbnMuYXJlUHJvcHNFcXVhbDtcbiAgdmFyIGFyZVByb3BzRXF1YWwgPSBfb3B0aW9ucyRhcmVQcm9wc0VxdWFsID09PSB1bmRlZmluZWQgPyBfdXRpbHNTaGFsbG93RXF1YWxTY2FsYXIyWydkZWZhdWx0J10gOiBfb3B0aW9ucyRhcmVQcm9wc0VxdWFsO1xuXG4gIHZhciBkaXNwbGF5TmFtZSA9IERlY29yYXRlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBEZWNvcmF0ZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICByZXR1cm4gKGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERyYWdEcm9wQ29udGFpbmVyLCBfQ29tcG9uZW50KTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5nZXRIYW5kbGVySWQgPSBmdW5jdGlvbiBnZXRIYW5kbGVySWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVySWQ7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5nZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSA9IGZ1bmN0aW9uIGdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2U7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgIHJldHVybiAhYXJlUHJvcHNFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpIHx8ICFfdXRpbHNTaGFsbG93RXF1YWwyWydkZWZhdWx0J10obmV4dFN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKERyYWdEcm9wQ29udGFpbmVyLCBudWxsLCBbe1xuICAgICAga2V5OiAnRGVjb3JhdGVkQ29tcG9uZW50JyxcbiAgICAgIHZhbHVlOiBEZWNvcmF0ZWRDb21wb25lbnQsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSwge1xuICAgICAga2V5OiAnZGlzcGxheU5hbWUnLFxuICAgICAgdmFsdWU6IGNvbnRhaW5lckRpc3BsYXlOYW1lICsgJygnICsgZGlzcGxheU5hbWUgKyAnKScsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSwge1xuICAgICAga2V5OiAnY29udGV4dFR5cGVzJyxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGRyYWdEcm9wTWFuYWdlcjogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9XSk7XG5cbiAgICBmdW5jdGlvbiBEcmFnRHJvcENvbnRhaW5lcihwcm9wcywgY29udGV4dCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdEcm9wQ29udGFpbmVyKTtcblxuICAgICAgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KTtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlQ2hpbGRSZWYgPSB0aGlzLmhhbmRsZUNoaWxkUmVmLmJpbmQodGhpcyk7XG5cbiAgICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHRoaXMuY29udGV4dC5kcmFnRHJvcE1hbmFnZXIgPT09ICdvYmplY3QnLCAnQ291bGQgbm90IGZpbmQgdGhlIGRyYWcgYW5kIGRyb3AgbWFuYWdlciBpbiB0aGUgY29udGV4dCBvZiAlcy4gJyArICdNYWtlIHN1cmUgdG8gd3JhcCB0aGUgdG9wLWxldmVsIGNvbXBvbmVudCBvZiB5b3VyIGFwcCB3aXRoIERyYWdEcm9wQ29udGV4dC4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy10cm91Ymxlc2hvb3RpbmcuaHRtbCNjb3VsZC1ub3QtZmluZC10aGUtZHJhZy1hbmQtZHJvcC1tYW5hZ2VyLWluLXRoZS1jb250ZXh0JywgZGlzcGxheU5hbWUsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgdGhpcy5tYW5hZ2VyID0gdGhpcy5jb250ZXh0LmRyYWdEcm9wTWFuYWdlcjtcbiAgICAgIHRoaXMuaGFuZGxlck1vbml0b3IgPSBjcmVhdGVNb25pdG9yKHRoaXMubWFuYWdlcik7XG4gICAgICB0aGlzLmhhbmRsZXJDb25uZWN0b3IgPSBjcmVhdGVDb25uZWN0b3IodGhpcy5tYW5hZ2VyLmdldEJhY2tlbmQoKSk7XG4gICAgICB0aGlzLmhhbmRsZXIgPSBjcmVhdGVIYW5kbGVyKHRoaXMuaGFuZGxlck1vbml0b3IpO1xuXG4gICAgICB0aGlzLmRpc3Bvc2FibGUgPSBuZXcgX2Rpc3Bvc2FibGVzLlNlcmlhbERpc3Bvc2FibGUoKTtcbiAgICAgIHRoaXMucmVjZWl2ZVByb3BzKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldEN1cnJlbnRTdGF0ZSgpO1xuICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IHRydWU7XG4gICAgICB0aGlzLmRpc3Bvc2FibGUgPSBuZXcgX2Rpc3Bvc2FibGVzLlNlcmlhbERpc3Bvc2FibGUoKTtcbiAgICAgIHRoaXMuY3VycmVudFR5cGUgPSBudWxsO1xuICAgICAgdGhpcy5yZWNlaXZlUHJvcHModGhpcy5wcm9wcyk7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoIWFyZVByb3BzRXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLnJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIHJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgdGhpcy5oYW5kbGVyLnJlY2VpdmVQcm9wcyhwcm9wcyk7XG4gICAgICB0aGlzLnJlY2VpdmVUeXBlKGdldFR5cGUocHJvcHMpKTtcbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLnJlY2VpdmVUeXBlID0gZnVuY3Rpb24gcmVjZWl2ZVR5cGUodHlwZSkge1xuICAgICAgaWYgKHR5cGUgPT09IHRoaXMuY3VycmVudFR5cGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN1cnJlbnRUeXBlID0gdHlwZTtcblxuICAgICAgdmFyIF9yZWdpc3RlckhhbmRsZXIgPSByZWdpc3RlckhhbmRsZXIodHlwZSwgdGhpcy5oYW5kbGVyLCB0aGlzLm1hbmFnZXIpO1xuXG4gICAgICB2YXIgaGFuZGxlcklkID0gX3JlZ2lzdGVySGFuZGxlci5oYW5kbGVySWQ7XG4gICAgICB2YXIgdW5yZWdpc3RlciA9IF9yZWdpc3RlckhhbmRsZXIudW5yZWdpc3RlcjtcblxuICAgICAgdGhpcy5oYW5kbGVySWQgPSBoYW5kbGVySWQ7XG4gICAgICB0aGlzLmhhbmRsZXJNb25pdG9yLnJlY2VpdmVIYW5kbGVySWQoaGFuZGxlcklkKTtcbiAgICAgIHRoaXMuaGFuZGxlckNvbm5lY3Rvci5yZWNlaXZlSGFuZGxlcklkKGhhbmRsZXJJZCk7XG5cbiAgICAgIHZhciBnbG9iYWxNb25pdG9yID0gdGhpcy5tYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgICAgIHZhciB1bnN1YnNjcmliZSA9IGdsb2JhbE1vbml0b3Iuc3Vic2NyaWJlVG9TdGF0ZUNoYW5nZSh0aGlzLmhhbmRsZUNoYW5nZSwgeyBoYW5kbGVySWRzOiBbaGFuZGxlcklkXSB9KTtcblxuICAgICAgdGhpcy5kaXNwb3NhYmxlLnNldERpc3Bvc2FibGUobmV3IF9kaXNwb3NhYmxlcy5Db21wb3NpdGVEaXNwb3NhYmxlKG5ldyBfZGlzcG9zYWJsZXMuRGlzcG9zYWJsZSh1bnN1YnNjcmliZSksIG5ldyBfZGlzcG9zYWJsZXMuRGlzcG9zYWJsZSh1bnJlZ2lzdGVyKSkpO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgaWYgKCF0aGlzLmlzQ3VycmVudGx5TW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0U3RhdGUgPSB0aGlzLmdldEN1cnJlbnRTdGF0ZSgpO1xuICAgICAgaWYgKCFfdXRpbHNTaGFsbG93RXF1YWwyWydkZWZhdWx0J10obmV4dFN0YXRlLCB0aGlzLnN0YXRlKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIHRoaXMuZGlzcG9zYWJsZS5kaXNwb3NlKCk7XG4gICAgICB0aGlzLmhhbmRsZXJDb25uZWN0b3IucmVjZWl2ZUhhbmRsZXJJZChudWxsKTtcbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmhhbmRsZUNoaWxkUmVmID0gZnVuY3Rpb24gaGFuZGxlQ2hpbGRSZWYoY29tcG9uZW50KSB7XG4gICAgICB0aGlzLmRlY29yYXRlZENvbXBvbmVudEluc3RhbmNlID0gY29tcG9uZW50O1xuICAgICAgdGhpcy5oYW5kbGVyLnJlY2VpdmVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmdldEN1cnJlbnRTdGF0ZSA9IGZ1bmN0aW9uIGdldEN1cnJlbnRTdGF0ZSgpIHtcbiAgICAgIHZhciBuZXh0U3RhdGUgPSBjb2xsZWN0KHRoaXMuaGFuZGxlckNvbm5lY3Rvci5ob29rcywgdGhpcy5oYW5kbGVyTW9uaXRvcik7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzUGxhaW5PYmplY3QyWydkZWZhdWx0J10obmV4dFN0YXRlKSwgJ0V4cGVjdGVkIGBjb2xsZWN0YCBzcGVjaWZpZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byAnICsgJyVzIGZvciAlcyB0byByZXR1cm4gYSBwbGFpbiBvYmplY3Qgb2YgcHJvcHMgdG8gaW5qZWN0LiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLicsIGNvbnRhaW5lckRpc3BsYXlOYW1lLCBkaXNwbGF5TmFtZSwgbmV4dFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChEZWNvcmF0ZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlLCB7XG4gICAgICAgIHJlZjogdGhpcy5oYW5kbGVDaGlsZFJlZiB9KSk7XG4gICAgfTtcblxuICAgIHJldHVybiBEcmFnRHJvcENvbnRhaW5lcjtcbiAgfSkoX3JlYWN0LkNvbXBvbmVudCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvZGVjb3JhdGVIYW5kbGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0Rpc3Bvc2FibGUyID0gcmVxdWlyZSgnLi9pc0Rpc3Bvc2FibGUnKTtcblxudmFyIF9pc0Rpc3Bvc2FibGUzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2lzRGlzcG9zYWJsZTIpO1xuXG5leHBvcnRzLmlzRGlzcG9zYWJsZSA9IF9pc0Rpc3Bvc2FibGUzWydkZWZhdWx0J107XG5cbnZhciBfRGlzcG9zYWJsZTIgPSByZXF1aXJlKCcuL0Rpc3Bvc2FibGUnKTtcblxudmFyIF9EaXNwb3NhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9EaXNwb3NhYmxlMik7XG5cbmV4cG9ydHMuRGlzcG9zYWJsZSA9IF9EaXNwb3NhYmxlM1snZGVmYXVsdCddO1xuXG52YXIgX0NvbXBvc2l0ZURpc3Bvc2FibGUyID0gcmVxdWlyZSgnLi9Db21wb3NpdGVEaXNwb3NhYmxlJyk7XG5cbnZhciBfQ29tcG9zaXRlRGlzcG9zYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfQ29tcG9zaXRlRGlzcG9zYWJsZTIpO1xuXG5leHBvcnRzLkNvbXBvc2l0ZURpc3Bvc2FibGUgPSBfQ29tcG9zaXRlRGlzcG9zYWJsZTNbJ2RlZmF1bHQnXTtcblxudmFyIF9TZXJpYWxEaXNwb3NhYmxlMiA9IHJlcXVpcmUoJy4vU2VyaWFsRGlzcG9zYWJsZScpO1xuXG52YXIgX1NlcmlhbERpc3Bvc2FibGUzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX1NlcmlhbERpc3Bvc2FibGUyKTtcblxuZXhwb3J0cy5TZXJpYWxEaXNwb3NhYmxlID0gX1NlcmlhbERpc3Bvc2FibGUzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDExOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gaXNEaXNwb3NhYmxlO1xuXG5mdW5jdGlvbiBpc0Rpc3Bvc2FibGUob2JqKSB7XG4gIHJldHVybiBCb29sZWFuKG9iaiAmJiB0eXBlb2Ygb2JqLmRpc3Bvc2UgPT09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kaXNwb3NhYmxlcy9tb2R1bGVzL2lzRGlzcG9zYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbi8qKlxuICogVGhlIGJhc2ljIGRpc3Bvc2FibGUuXG4gKi9cblxudmFyIERpc3Bvc2FibGUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEaXNwb3NhYmxlKGFjdGlvbikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEaXNwb3NhYmxlKTtcblxuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uIHx8IG5vb3A7XG4gIH1cblxuICBEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgdGhpcy5hY3Rpb24uY2FsbChudWxsKTtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhEaXNwb3NhYmxlLCBudWxsLCBbe1xuICAgIGtleTogXCJlbXB0eVwiLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgdmFsdWU6IHsgZGlzcG9zZTogbm9vcCB9XG4gIH1dKTtcblxuICByZXR1cm4gRGlzcG9zYWJsZTtcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRGlzcG9zYWJsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9EaXNwb3NhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfTtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0Rpc3Bvc2FibGUgPSByZXF1aXJlKCcuL2lzRGlzcG9zYWJsZScpO1xuXG52YXIgX2lzRGlzcG9zYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaXNEaXNwb3NhYmxlKTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZ3JvdXAgb2YgZGlzcG9zYWJsZSByZXNvdXJjZXMgdGhhdCBhcmUgZGlzcG9zZWQgdG9nZXRoZXIuXG4gKi9cblxudmFyIENvbXBvc2l0ZURpc3Bvc2FibGUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb21wb3NpdGVEaXNwb3NhYmxlKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBkaXNwb3NhYmxlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgZGlzcG9zYWJsZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvc2l0ZURpc3Bvc2FibGUpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGlzcG9zYWJsZXNbMF0pICYmIGRpc3Bvc2FibGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZGlzcG9zYWJsZXMgPSBkaXNwb3NhYmxlc1swXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3Bvc2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIV9pc0Rpc3Bvc2FibGUyWydkZWZhdWx0J10oZGlzcG9zYWJsZXNbaV0pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYSBkaXNwb3NhYmxlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwb3NhYmxlcyA9IGRpc3Bvc2FibGVzO1xuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBkaXNwb3NhYmxlIHRvIHRoZSBDb21wb3NpdGVEaXNwb3NhYmxlIG9yIGRpc3Bvc2VzIHRoZSBkaXNwb3NhYmxlIGlmIHRoZSBDb21wb3NpdGVEaXNwb3NhYmxlIGlzIGRpc3Bvc2VkLlxuICAgKiBAcGFyYW0ge0Rpc3Bvc2FibGV9IGl0ZW0gRGlzcG9zYWJsZSB0byBhZGQuXG4gICAqL1xuXG4gIENvbXBvc2l0ZURpc3Bvc2FibGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZChpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgaXRlbS5kaXNwb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcG9zYWJsZXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW5kIGRpc3Bvc2VzIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGEgZGlzcG9zYWJsZSBmcm9tIHRoZSBDb21wb3NpdGVEaXNwb3NhYmxlLlxuICAgKiBAcGFyYW0ge0Rpc3Bvc2FibGV9IGl0ZW0gRGlzcG9zYWJsZSB0byByZW1vdmUuXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGZvdW5kOyBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuXG4gIENvbXBvc2l0ZURpc3Bvc2FibGUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IHRoaXMuZGlzcG9zYWJsZXMuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwb3NhYmxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGl0ZW0uZGlzcG9zZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwb3NlcyBhbGwgZGlzcG9zYWJsZXMgaW4gdGhlIGdyb3VwIGFuZCByZW1vdmVzIHRoZW0gZnJvbSB0aGUgZ3JvdXAuXG4gICAqL1xuXG4gIENvbXBvc2l0ZURpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGVuID0gdGhpcy5kaXNwb3NhYmxlcy5sZW5ndGg7XG4gICAgdmFyIGN1cnJlbnREaXNwb3NhYmxlcyA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGN1cnJlbnREaXNwb3NhYmxlc1tpXSA9IHRoaXMuZGlzcG9zYWJsZXNbaV07XG4gICAgfVxuXG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmRpc3Bvc2FibGVzID0gW107XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgY3VycmVudERpc3Bvc2FibGVzW2ldLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvc2l0ZURpc3Bvc2FibGU7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBDb21wb3NpdGVEaXNwb3NhYmxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9Db21wb3NpdGVEaXNwb3NhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfTtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0Rpc3Bvc2FibGUgPSByZXF1aXJlKCcuL2lzRGlzcG9zYWJsZScpO1xuXG52YXIgX2lzRGlzcG9zYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaXNEaXNwb3NhYmxlKTtcblxudmFyIFNlcmlhbERpc3Bvc2FibGUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXJpYWxEaXNwb3NhYmxlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZXJpYWxEaXNwb3NhYmxlKTtcblxuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgdW5kZXJseWluZyBkaXNwb3NhYmxlLlxuICAgKiBAcmV0dXJuIFRoZSB1bmRlcmx5aW5nIGRpc3Bvc2FibGUuXG4gICAqL1xuXG4gIFNlcmlhbERpc3Bvc2FibGUucHJvdG90eXBlLmdldERpc3Bvc2FibGUgPSBmdW5jdGlvbiBnZXREaXNwb3NhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZS5cbiAgICogQHBhcmFtIHtEaXNwb3NhYmxlfSB2YWx1ZSBUaGUgbmV3IHVuZGVybHlpbmcgZGlzcG9zYWJsZS5cbiAgICovXG5cbiAgU2VyaWFsRGlzcG9zYWJsZS5wcm90b3R5cGUuc2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uIHNldERpc3Bvc2FibGUoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzBdO1xuXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgIV9pc0Rpc3Bvc2FibGUyWydkZWZhdWx0J10odmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGVpdGhlciBhbiBlbXB0eSB2YWx1ZSBvciBhIHZhbGlkIGRpc3Bvc2FibGUnKTtcbiAgICB9XG5cbiAgICB2YXIgaXNEaXNwb3NlZCA9IHRoaXMuaXNEaXNwb3NlZDtcbiAgICB2YXIgcHJldmlvdXMgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIWlzRGlzcG9zZWQpIHtcbiAgICAgIHByZXZpb3VzID0gdGhpcy5jdXJyZW50O1xuICAgICAgdGhpcy5jdXJyZW50ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICBwcmV2aW91cy5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcG9zZWQgJiYgdmFsdWUpIHtcbiAgICAgIHZhbHVlLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3Bvc2VzIHRoZSB1bmRlcmx5aW5nIGRpc3Bvc2FibGUgYXMgd2VsbCBhcyBhbGwgZnV0dXJlIHJlcGxhY2VtZW50cy5cbiAgICovXG5cbiAgU2VyaWFsRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgdmFyIHByZXZpb3VzID0gdGhpcy5jdXJyZW50O1xuICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG5cbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgIHByZXZpb3VzLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNlcmlhbERpc3Bvc2FibGU7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTZXJpYWxEaXNwb3NhYmxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9TZXJpYWxEaXNwb3NhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gcmVnaXN0ZXJTb3VyY2U7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyU291cmNlKHR5cGUsIHNvdXJjZSwgbWFuYWdlcikge1xuICB2YXIgcmVnaXN0cnkgPSBtYW5hZ2VyLmdldFJlZ2lzdHJ5KCk7XG4gIHZhciBzb3VyY2VJZCA9IHJlZ2lzdHJ5LmFkZFNvdXJjZSh0eXBlLCBzb3VyY2UpO1xuXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJTb3VyY2UoKSB7XG4gICAgcmVnaXN0cnkucmVtb3ZlU291cmNlKHNvdXJjZUlkKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGFuZGxlcklkOiBzb3VyY2VJZCxcbiAgICB1bnJlZ2lzdGVyOiB1bnJlZ2lzdGVyU291cmNlXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9yZWdpc3RlclNvdXJjZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlU291cmNlRmFjdG9yeTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzUGxhaW5PYmplY3QpO1xuXG52YXIgQUxMT1dFRF9TUEVDX01FVEhPRFMgPSBbJ2NhbkRyYWcnLCAnYmVnaW5EcmFnJywgJ2NhbkRyYWcnLCAnaXNEcmFnZ2luZycsICdlbmREcmFnJ107XG52YXIgUkVRVUlSRURfU1BFQ19NRVRIT0RTID0gWydiZWdpbkRyYWcnXTtcblxuZnVuY3Rpb24gY3JlYXRlU291cmNlRmFjdG9yeShzcGVjKSB7XG4gIE9iamVjdC5rZXlzKHNwZWMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oQUxMT1dFRF9TUEVDX01FVEhPRFMuaW5kZXhPZihrZXkpID4gLTEsICdFeHBlY3RlZCB0aGUgZHJhZyBzb3VyY2Ugc3BlY2lmaWNhdGlvbiB0byBvbmx5IGhhdmUgJyArICdzb21lIG9mIHRoZSBmb2xsb3dpbmcga2V5czogJXMuICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCBhbiB1bmV4cGVjdGVkIFwiJXNcIiBrZXkuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIEFMTE9XRURfU1BFQ19NRVRIT0RTLmpvaW4oJywgJyksIGtleSk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2Ygc3BlY1trZXldID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgJXMgaW4gdGhlIGRyYWcgc291cmNlIHNwZWNpZmljYXRpb24gdG8gYmUgYSBmdW5jdGlvbi4gJyArICdJbnN0ZWFkIHJlY2VpdmVkIGEgc3BlY2lmaWNhdGlvbiB3aXRoICVzOiAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywga2V5LCBrZXksIHNwZWNba2V5XSk7XG4gIH0pO1xuICBSRVFVSVJFRF9TUEVDX01FVEhPRFMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2Ygc3BlY1trZXldID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgJXMgaW4gdGhlIGRyYWcgc291cmNlIHNwZWNpZmljYXRpb24gdG8gYmUgYSBmdW5jdGlvbi4gJyArICdJbnN0ZWFkIHJlY2VpdmVkIGEgc3BlY2lmaWNhdGlvbiB3aXRoICVzOiAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywga2V5LCBrZXksIHNwZWNba2V5XSk7XG4gIH0pO1xuXG4gIHZhciBTb3VyY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNvdXJjZShtb25pdG9yKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU291cmNlKTtcblxuICAgICAgdGhpcy5tb25pdG9yID0gbW9uaXRvcjtcbiAgICAgIHRoaXMucHJvcHMgPSBudWxsO1xuICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIFNvdXJjZS5wcm90b3R5cGUucmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gcmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfTtcblxuICAgIFNvdXJjZS5wcm90b3R5cGUucmVjZWl2ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIHJlY2VpdmVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgU291cmNlLnByb3RvdHlwZS5jYW5EcmFnID0gZnVuY3Rpb24gY2FuRHJhZygpIHtcbiAgICAgIGlmICghc3BlYy5jYW5EcmFnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3BlYy5jYW5EcmFnKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvcik7XG4gICAgfTtcblxuICAgIFNvdXJjZS5wcm90b3R5cGUuaXNEcmFnZ2luZyA9IGZ1bmN0aW9uIGlzRHJhZ2dpbmcoZ2xvYmFsTW9uaXRvciwgc291cmNlSWQpIHtcbiAgICAgIGlmICghc3BlYy5pc0RyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2VJZCA9PT0gZ2xvYmFsTW9uaXRvci5nZXRTb3VyY2VJZCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3BlYy5pc0RyYWdnaW5nKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvcik7XG4gICAgfTtcblxuICAgIFNvdXJjZS5wcm90b3R5cGUuYmVnaW5EcmFnID0gZnVuY3Rpb24gYmVnaW5EcmFnKCkge1xuICAgICAgdmFyIGl0ZW0gPSBzcGVjLmJlZ2luRHJhZyh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IsIHRoaXMuY29tcG9uZW50KTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzUGxhaW5PYmplY3QyWydkZWZhdWx0J10oaXRlbSksICdiZWdpbkRyYWcoKSBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGRyYWdnZWQgaXRlbS4gJyArICdJbnN0ZWFkIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH07XG5cbiAgICBTb3VyY2UucHJvdG90eXBlLmVuZERyYWcgPSBmdW5jdGlvbiBlbmREcmFnKCkge1xuICAgICAgaWYgKCFzcGVjLmVuZERyYWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzcGVjLmVuZERyYWcodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yLCB0aGlzLmNvbXBvbmVudCk7XG4gICAgfTtcblxuICAgIHJldHVybiBTb3VyY2U7XG4gIH0pKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVNvdXJjZShtb25pdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBTb3VyY2UobW9uaXRvcik7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlRmFjdG9yeS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlU291cmNlTW9uaXRvcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIGlzQ2FsbGluZ0NhbkRyYWcgPSBmYWxzZTtcbnZhciBpc0NhbGxpbmdJc0RyYWdnaW5nID0gZmFsc2U7XG5cbnZhciBTb3VyY2VNb25pdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU291cmNlTW9uaXRvcihtYW5hZ2VyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvdXJjZU1vbml0b3IpO1xuXG4gICAgdGhpcy5pbnRlcm5hbE1vbml0b3IgPSBtYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgfVxuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLnJlY2VpdmVIYW5kbGVySWQgPSBmdW5jdGlvbiByZWNlaXZlSGFuZGxlcklkKHNvdXJjZUlkKSB7XG4gICAgdGhpcy5zb3VyY2VJZCA9IHNvdXJjZUlkO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmNhbkRyYWcgPSBmdW5jdGlvbiBjYW5EcmFnKCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oIWlzQ2FsbGluZ0NhbkRyYWcsICdZb3UgbWF5IG5vdCBjYWxsIG1vbml0b3IuY2FuRHJhZygpIGluc2lkZSB5b3VyIGNhbkRyYWcoKSBpbXBsZW1lbnRhdGlvbi4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS1tb25pdG9yLmh0bWwnKTtcblxuICAgIHRyeSB7XG4gICAgICBpc0NhbGxpbmdDYW5EcmFnID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5jYW5EcmFnU291cmNlKHRoaXMuc291cmNlSWQpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0NhbGxpbmdDYW5EcmFnID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbiBpc0RyYWdnaW5nKCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oIWlzQ2FsbGluZ0lzRHJhZ2dpbmcsICdZb3UgbWF5IG5vdCBjYWxsIG1vbml0b3IuaXNEcmFnZ2luZygpIGluc2lkZSB5b3VyIGlzRHJhZ2dpbmcoKSBpbXBsZW1lbnRhdGlvbi4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS1tb25pdG9yLmh0bWwnKTtcblxuICAgIHRyeSB7XG4gICAgICBpc0NhbGxpbmdJc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5pc0RyYWdnaW5nU291cmNlKHRoaXMuc291cmNlSWQpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0NhbGxpbmdJc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldEl0ZW1UeXBlID0gZnVuY3Rpb24gZ2V0SXRlbVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEl0ZW1UeXBlKCk7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uIGdldEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEl0ZW0oKTtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXREcm9wUmVzdWx0ID0gZnVuY3Rpb24gZ2V0RHJvcFJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmRpZERyb3AgPSBmdW5jdGlvbiBkaWREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5kaWREcm9wKCk7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0SW5pdGlhbENsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldEluaXRpYWxDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEluaXRpYWxDbGllbnRPZmZzZXQoKTtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldFNvdXJjZUNsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0Q2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0Q2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRDbGllbnRPZmZzZXQoKTtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQgPSBmdW5jdGlvbiBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpO1xuICB9O1xuXG4gIHJldHVybiBTb3VyY2VNb25pdG9yO1xufSkoKTtcblxuZnVuY3Rpb24gY3JlYXRlU291cmNlTW9uaXRvcihtYW5hZ2VyKSB7XG4gIHJldHVybiBuZXcgU291cmNlTW9uaXRvcihtYW5hZ2VyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9jcmVhdGVTb3VyY2VNb25pdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVTb3VyY2VDb25uZWN0b3I7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93cmFwQ29ubmVjdG9ySG9va3MgPSByZXF1aXJlKCcuL3dyYXBDb25uZWN0b3JIb29rcycpO1xuXG52YXIgX3dyYXBDb25uZWN0b3JIb29rczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cmFwQ29ubmVjdG9ySG9va3MpO1xuXG52YXIgX2FyZU9wdGlvbnNFcXVhbCA9IHJlcXVpcmUoJy4vYXJlT3B0aW9uc0VxdWFsJyk7XG5cbnZhciBfYXJlT3B0aW9uc0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyZU9wdGlvbnNFcXVhbCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZUNvbm5lY3RvcihiYWNrZW5kKSB7XG4gIHZhciBjdXJyZW50SGFuZGxlcklkID0gdW5kZWZpbmVkO1xuXG4gIHZhciBjdXJyZW50RHJhZ1NvdXJjZU5vZGUgPSB1bmRlZmluZWQ7XG4gIHZhciBjdXJyZW50RHJhZ1NvdXJjZU9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHZhciBkaXNjb25uZWN0Q3VycmVudERyYWdTb3VyY2UgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIGN1cnJlbnREcmFnUHJldmlld05vZGUgPSB1bmRlZmluZWQ7XG4gIHZhciBjdXJyZW50RHJhZ1ByZXZpZXdPcHRpb25zID0gdW5kZWZpbmVkO1xuICB2YXIgZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldyA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiByZWNvbm5lY3REcmFnU291cmNlKCkge1xuICAgIGlmIChkaXNjb25uZWN0Q3VycmVudERyYWdTb3VyY2UpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZSgpO1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudEhhbmRsZXJJZCAmJiBjdXJyZW50RHJhZ1NvdXJjZU5vZGUpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZSA9IGJhY2tlbmQuY29ubmVjdERyYWdTb3VyY2UoY3VycmVudEhhbmRsZXJJZCwgY3VycmVudERyYWdTb3VyY2VOb2RlLCBjdXJyZW50RHJhZ1NvdXJjZU9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY29ubmVjdERyYWdQcmV2aWV3KCkge1xuICAgIGlmIChkaXNjb25uZWN0Q3VycmVudERyYWdQcmV2aWV3KSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdQcmV2aWV3KCk7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdQcmV2aWV3ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudEhhbmRsZXJJZCAmJiBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlKSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdQcmV2aWV3ID0gYmFja2VuZC5jb25uZWN0RHJhZ1ByZXZpZXcoY3VycmVudEhhbmRsZXJJZCwgY3VycmVudERyYWdQcmV2aWV3Tm9kZSwgY3VycmVudERyYWdQcmV2aWV3T3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUhhbmRsZXJJZChoYW5kbGVySWQpIHtcbiAgICBpZiAoaGFuZGxlcklkID09PSBjdXJyZW50SGFuZGxlcklkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3VycmVudEhhbmRsZXJJZCA9IGhhbmRsZXJJZDtcbiAgICByZWNvbm5lY3REcmFnU291cmNlKCk7XG4gICAgcmVjb25uZWN0RHJhZ1ByZXZpZXcoKTtcbiAgfVxuXG4gIHZhciBob29rcyA9IF93cmFwQ29ubmVjdG9ySG9va3MyWydkZWZhdWx0J10oe1xuICAgIGRyYWdTb3VyY2U6IGZ1bmN0aW9uIGNvbm5lY3REcmFnU291cmNlKG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChub2RlID09PSBjdXJyZW50RHJhZ1NvdXJjZU5vZGUgJiYgX2FyZU9wdGlvbnNFcXVhbDJbJ2RlZmF1bHQnXShvcHRpb25zLCBjdXJyZW50RHJhZ1NvdXJjZU9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY3VycmVudERyYWdTb3VyY2VOb2RlID0gbm9kZTtcbiAgICAgIGN1cnJlbnREcmFnU291cmNlT3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIHJlY29ubmVjdERyYWdTb3VyY2UoKTtcbiAgICB9LFxuXG4gICAgZHJhZ1ByZXZpZXc6IGZ1bmN0aW9uIGNvbm5lY3REcmFnUHJldmlldyhub2RlLCBvcHRpb25zKSB7XG4gICAgICBpZiAobm9kZSA9PT0gY3VycmVudERyYWdQcmV2aWV3Tm9kZSAmJiBfYXJlT3B0aW9uc0VxdWFsMlsnZGVmYXVsdCddKG9wdGlvbnMsIGN1cnJlbnREcmFnUHJldmlld09wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY3VycmVudERyYWdQcmV2aWV3Tm9kZSA9IG5vZGU7XG4gICAgICBjdXJyZW50RHJhZ1ByZXZpZXdPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgcmVjb25uZWN0RHJhZ1ByZXZpZXcoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcmVjZWl2ZUhhbmRsZXJJZDogcmVjZWl2ZUhhbmRsZXJJZCxcbiAgICBob29rczogaG9va3NcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9jcmVhdGVTb3VyY2VDb25uZWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHdyYXBDb25uZWN0b3JIb29rcztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzQ2xvbmVXaXRoUmVmID0gcmVxdWlyZSgnLi91dGlscy9jbG9uZVdpdGhSZWYnKTtcblxudmFyIF91dGlsc0Nsb25lV2l0aFJlZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0Nsb25lV2l0aFJlZik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiB0aHJvd0lmQ29tcG9zaXRlQ29tcG9uZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vIEN1c3RvbSBjb21wb25lbnRzIGNhbiBubyBsb25nZXIgYmUgd3JhcHBlZCBkaXJlY3RseSBpbiBSZWFjdCBEbkQgMi4wXG4gIC8vIHNvIHRoYXQgd2UgZG9uJ3QgbmVlZCB0byBkZXBlbmQgb24gZmluZERPTU5vZGUoKSBmcm9tIHJlYWN0LWRvbS5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGRpc3BsYXlOYW1lID0gZWxlbWVudC50eXBlLmRpc3BsYXlOYW1lIHx8IGVsZW1lbnQudHlwZS5uYW1lIHx8ICd0aGUgY29tcG9uZW50JztcblxuICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgbmF0aXZlIGVsZW1lbnQgbm9kZXMgY2FuIG5vdyBiZSBwYXNzZWQgdG8gUmVhY3QgRG5EIGNvbm5lY3RvcnMuICcgKyAoJ1lvdSBjYW4gZWl0aGVyIHdyYXAgJyArIGRpc3BsYXlOYW1lICsgJyBpbnRvIGEgPGRpdj4sIG9yIHR1cm4gaXQgaW50byBhICcpICsgJ2RyYWcgc291cmNlIG9yIGEgZHJvcCB0YXJnZXQgaXRzZWxmLicpO1xufVxuXG5mdW5jdGlvbiB3cmFwSG9va1RvUmVjb2duaXplRWxlbWVudChob29rKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsZW1lbnRPck5vZGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIFdoZW4gcGFzc2VkIGEgbm9kZSwgY2FsbCB0aGUgaG9vayBzdHJhaWdodCBhd2F5LlxuICAgIGlmICghX3JlYWN0LmlzVmFsaWRFbGVtZW50KGVsZW1lbnRPck5vZGUpKSB7XG4gICAgICB2YXIgbm9kZSA9IGVsZW1lbnRPck5vZGU7XG4gICAgICBob29rKG5vZGUsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHBhc3NlZCBhIFJlYWN0RWxlbWVudCwgY2xvbmUgaXQgYW5kIGF0dGFjaCB0aGlzIGZ1bmN0aW9uIGFzIGEgcmVmLlxuICAgIC8vIFRoaXMgaGVscHMgdXMgYWNoaWV2ZSBhIG5lYXQgQVBJIHdoZXJlIHVzZXIgZG9lc24ndCBldmVuIGtub3cgdGhhdCByZWZzXG4gICAgLy8gYXJlIGJlaW5nIHVzZWQgdW5kZXIgdGhlIGhvb2QuXG4gICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JOb2RlO1xuICAgIHRocm93SWZDb21wb3NpdGVDb21wb25lbnRFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgLy8gV2hlbiBubyBvcHRpb25zIGFyZSBwYXNzZWQsIHVzZSB0aGUgaG9vayBkaXJlY3RseVxuICAgIHZhciByZWYgPSBvcHRpb25zID8gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHJldHVybiBob29rKG5vZGUsIG9wdGlvbnMpO1xuICAgIH0gOiBob29rO1xuXG4gICAgcmV0dXJuIF91dGlsc0Nsb25lV2l0aFJlZjJbJ2RlZmF1bHQnXShlbGVtZW50LCByZWYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB3cmFwQ29ubmVjdG9ySG9va3MoaG9va3MpIHtcbiAgdmFyIHdyYXBwZWRIb29rcyA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKGhvb2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgaG9vayA9IGhvb2tzW2tleV07XG4gICAgdmFyIHdyYXBwZWRIb29rID0gd3JhcEhvb2tUb1JlY29nbml6ZUVsZW1lbnQoaG9vayk7XG4gICAgd3JhcHBlZEhvb2tzW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd3JhcHBlZEhvb2s7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdyYXBwZWRIb29rcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi93cmFwQ29ubmVjdG9ySG9va3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNsb25lV2l0aFJlZjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gY2xvbmVXaXRoUmVmKGVsZW1lbnQsIG5ld1JlZikge1xuICB2YXIgcHJldmlvdXNSZWYgPSBlbGVtZW50LnJlZjtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgcHJldmlvdXNSZWYgIT09ICdzdHJpbmcnLCAnQ2Fubm90IGNvbm5lY3QgUmVhY3QgRG5EIHRvIGFuIGVsZW1lbnQgd2l0aCBhbiBleGlzdGluZyBzdHJpbmcgcmVmLiAnICsgJ1BsZWFzZSBjb252ZXJ0IGl0IHRvIHVzZSBhIGNhbGxiYWNrIHJlZiBpbnN0ZWFkLCBvciB3cmFwIGl0IGludG8gYSA8c3Bhbj4gb3IgPGRpdj4uICcgKyAnUmVhZCBtb3JlOiBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL21vcmUtYWJvdXQtcmVmcy5odG1sI3RoZS1yZWYtY2FsbGJhY2stYXR0cmlidXRlJyk7XG5cbiAgaWYgKCFwcmV2aW91c1JlZikge1xuICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gcmVmIG9uIHRoZSBlbGVtZW50LCB1c2UgdGhlIG5ldyByZWYgZGlyZWN0bHlcbiAgICByZXR1cm4gX3JlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB7XG4gICAgICByZWY6IG5ld1JlZlxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQoZWxlbWVudCwge1xuICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgIG5ld1JlZihub2RlKTtcblxuICAgICAgaWYgKHByZXZpb3VzUmVmKSB7XG4gICAgICAgIHByZXZpb3VzUmVmKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvdXRpbHMvY2xvbmVXaXRoUmVmLmpzXG4gKiogbW9kdWxlIGlkID0gMTI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBhcmVPcHRpb25zRXF1YWw7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJy4vdXRpbHMvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNTaGFsbG93RXF1YWwpO1xuXG5mdW5jdGlvbiBhcmVPcHRpb25zRXF1YWwobmV4dE9wdGlvbnMsIGN1cnJlbnRPcHRpb25zKSB7XG4gIGlmIChjdXJyZW50T3B0aW9ucyA9PT0gbmV4dE9wdGlvbnMpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50T3B0aW9ucyAhPT0gbnVsbCAmJiBuZXh0T3B0aW9ucyAhPT0gbnVsbCAmJiBfdXRpbHNTaGFsbG93RXF1YWwyWydkZWZhdWx0J10oY3VycmVudE9wdGlvbnMsIG5leHRPcHRpb25zKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9hcmVPcHRpb25zRXF1YWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGlzVmFsaWRUeXBlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfbG9kYXNoSXNBcnJheSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0FycmF5Jyk7XG5cbnZhciBfbG9kYXNoSXNBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc0FycmF5KTtcblxuZnVuY3Rpb24gaXNWYWxpZFR5cGUodHlwZSwgYWxsb3dBcnJheSkge1xuICAgICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdzeW1ib2wnIHx8IGFsbG93QXJyYXkgJiYgX2xvZGFzaElzQXJyYXkyWydkZWZhdWx0J10odHlwZSkgJiYgdHlwZS5ldmVyeShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZFR5cGUodCwgZmFsc2UpO1xuICAgICAgIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL2lzVmFsaWRUeXBlLmpzXG4gKiogbW9kdWxlIGlkID0gMTMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgX3NsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gRHJvcFRhcmdldDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNQbGFpbk9iamVjdCk7XG5cbnZhciBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMnKTtcblxudmFyIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMpO1xuXG52YXIgX2RlY29yYXRlSGFuZGxlciA9IHJlcXVpcmUoJy4vZGVjb3JhdGVIYW5kbGVyJyk7XG5cbnZhciBfZGVjb3JhdGVIYW5kbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY29yYXRlSGFuZGxlcik7XG5cbnZhciBfcmVnaXN0ZXJUYXJnZXQgPSByZXF1aXJlKCcuL3JlZ2lzdGVyVGFyZ2V0Jyk7XG5cbnZhciBfcmVnaXN0ZXJUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVnaXN0ZXJUYXJnZXQpO1xuXG52YXIgX2NyZWF0ZVRhcmdldEZhY3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZVRhcmdldEZhY3RvcnknKTtcblxudmFyIF9jcmVhdGVUYXJnZXRGYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRhcmdldEZhY3RvcnkpO1xuXG52YXIgX2NyZWF0ZVRhcmdldE1vbml0b3IgPSByZXF1aXJlKCcuL2NyZWF0ZVRhcmdldE1vbml0b3InKTtcblxudmFyIF9jcmVhdGVUYXJnZXRNb25pdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRhcmdldE1vbml0b3IpO1xuXG52YXIgX2NyZWF0ZVRhcmdldENvbm5lY3RvciA9IHJlcXVpcmUoJy4vY3JlYXRlVGFyZ2V0Q29ubmVjdG9yJyk7XG5cbnZhciBfY3JlYXRlVGFyZ2V0Q29ubmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRhcmdldENvbm5lY3Rvcik7XG5cbnZhciBfdXRpbHNJc1ZhbGlkVHlwZSA9IHJlcXVpcmUoJy4vdXRpbHMvaXNWYWxpZFR5cGUnKTtcblxudmFyIF91dGlsc0lzVmFsaWRUeXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzSXNWYWxpZFR5cGUpO1xuXG5mdW5jdGlvbiBEcm9wVGFyZ2V0KHR5cGUsIHNwZWMsIGNvbGxlY3QpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1szXTtcblxuICBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czJbJ2RlZmF1bHQnXS5hcHBseSh1bmRlZmluZWQsIFsnRHJvcFRhcmdldCcsICd0eXBlLCBzcGVjLCBjb2xsZWN0Wywgb3B0aW9uc10nXS5jb25jYXQoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICB2YXIgZ2V0VHlwZSA9IHR5cGU7XG4gIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX3V0aWxzSXNWYWxpZFR5cGUyWydkZWZhdWx0J10odHlwZSwgdHJ1ZSksICdFeHBlY3RlZCBcInR5cGVcIiBwcm92aWRlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gRHJvcFRhcmdldCB0byBiZSAnICsgJ2Egc3RyaW5nLCBhbiBhcnJheSBvZiBzdHJpbmdzLCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIgZ2l2ZW4gJyArICd0aGUgY3VycmVudCBwcm9wcy4gSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIHR5cGUpO1xuICAgIGdldFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9O1xuICB9XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzUGxhaW5PYmplY3QyWydkZWZhdWx0J10oc3BlYyksICdFeHBlY3RlZCBcInNwZWNcIiBwcm92aWRlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIERyb3BUYXJnZXQgdG8gYmUgJyArICdhIHBsYWluIG9iamVjdC4gSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIHNwZWMpO1xuICB2YXIgY3JlYXRlVGFyZ2V0ID0gX2NyZWF0ZVRhcmdldEZhY3RvcnkyWydkZWZhdWx0J10oc3BlYyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGNvbGxlY3QgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBcImNvbGxlY3RcIiBwcm92aWRlZCBhcyB0aGUgdGhpcmQgYXJndW1lbnQgdG8gRHJvcFRhcmdldCB0byBiZSAnICsgJ2EgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IG9mIHByb3BzIHRvIGluamVjdC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgY29sbGVjdCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzUGxhaW5PYmplY3QyWydkZWZhdWx0J10ob3B0aW9ucyksICdFeHBlY3RlZCBcIm9wdGlvbnNcIiBwcm92aWRlZCBhcyB0aGUgZm91cnRoIGFyZ3VtZW50IHRvIERyb3BUYXJnZXQgdG8gYmUgJyArICdhIHBsYWluIG9iamVjdCB3aGVuIHNwZWNpZmllZC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgY29sbGVjdCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRlVGFyZ2V0KERlY29yYXRlZENvbXBvbmVudCkge1xuICAgIHJldHVybiBfZGVjb3JhdGVIYW5kbGVyMlsnZGVmYXVsdCddKHtcbiAgICAgIGNvbm5lY3RCYWNrZW5kOiBmdW5jdGlvbiBjb25uZWN0QmFja2VuZChiYWNrZW5kLCB0YXJnZXRJZCkge1xuICAgICAgICByZXR1cm4gYmFja2VuZC5jb25uZWN0RHJvcFRhcmdldCh0YXJnZXRJZCk7XG4gICAgICB9LFxuICAgICAgY29udGFpbmVyRGlzcGxheU5hbWU6ICdEcm9wVGFyZ2V0JyxcbiAgICAgIGNyZWF0ZUhhbmRsZXI6IGNyZWF0ZVRhcmdldCxcbiAgICAgIHJlZ2lzdGVySGFuZGxlcjogX3JlZ2lzdGVyVGFyZ2V0MlsnZGVmYXVsdCddLFxuICAgICAgY3JlYXRlTW9uaXRvcjogX2NyZWF0ZVRhcmdldE1vbml0b3IyWydkZWZhdWx0J10sXG4gICAgICBjcmVhdGVDb25uZWN0b3I6IF9jcmVhdGVUYXJnZXRDb25uZWN0b3IyWydkZWZhdWx0J10sXG4gICAgICBEZWNvcmF0ZWRDb21wb25lbnQ6IERlY29yYXRlZENvbXBvbmVudCxcbiAgICAgIGdldFR5cGU6IGdldFR5cGUsXG4gICAgICBjb2xsZWN0OiBjb2xsZWN0LFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL0Ryb3BUYXJnZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSByZWdpc3RlclRhcmdldDtcblxuZnVuY3Rpb24gcmVnaXN0ZXJUYXJnZXQodHlwZSwgdGFyZ2V0LCBtYW5hZ2VyKSB7XG4gIHZhciByZWdpc3RyeSA9IG1hbmFnZXIuZ2V0UmVnaXN0cnkoKTtcbiAgdmFyIHRhcmdldElkID0gcmVnaXN0cnkuYWRkVGFyZ2V0KHR5cGUsIHRhcmdldCk7XG5cbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRhcmdldCgpIHtcbiAgICByZWdpc3RyeS5yZW1vdmVUYXJnZXQodGFyZ2V0SWQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVySWQ6IHRhcmdldElkLFxuICAgIHVucmVnaXN0ZXI6IHVucmVnaXN0ZXJUYXJnZXRcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3JlZ2lzdGVyVGFyZ2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVUYXJnZXRGYWN0b3J5O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNQbGFpbk9iamVjdCk7XG5cbnZhciBBTExPV0VEX1NQRUNfTUVUSE9EUyA9IFsnY2FuRHJvcCcsICdob3ZlcicsICdkcm9wJ107XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhcmdldEZhY3Rvcnkoc3BlYykge1xuICBPYmplY3Qua2V5cyhzcGVjKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKEFMTE9XRURfU1BFQ19NRVRIT0RTLmluZGV4T2Yoa2V5KSA+IC0xLCAnRXhwZWN0ZWQgdGhlIGRyb3AgdGFyZ2V0IHNwZWNpZmljYXRpb24gdG8gb25seSBoYXZlICcgKyAnc29tZSBvZiB0aGUgZm9sbG93aW5nIGtleXM6ICVzLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgYSBzcGVjaWZpY2F0aW9uIHdpdGggYW4gdW5leHBlY3RlZCBcIiVzXCIga2V5LiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBBTExPV0VEX1NQRUNfTUVUSE9EUy5qb2luKCcsICcpLCBrZXkpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHNwZWNba2V5XSA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkICVzIGluIHRoZSBkcm9wIHRhcmdldCBzcGVjaWZpY2F0aW9uIHRvIGJlIGEgZnVuY3Rpb24uICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCAlczogJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIGtleSwga2V5LCBzcGVjW2tleV0pO1xuICB9KTtcblxuICB2YXIgVGFyZ2V0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUYXJnZXQobW9uaXRvcikge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhcmdldCk7XG5cbiAgICAgIHRoaXMubW9uaXRvciA9IG1vbml0b3I7XG4gICAgICB0aGlzLnByb3BzID0gbnVsbDtcbiAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBUYXJnZXQucHJvdG90eXBlLnJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIHJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIH07XG5cbiAgICBUYXJnZXQucHJvdG90eXBlLnJlY2VpdmVNb25pdG9yID0gZnVuY3Rpb24gcmVjZWl2ZU1vbml0b3IobW9uaXRvcikge1xuICAgICAgdGhpcy5tb25pdG9yID0gbW9uaXRvcjtcbiAgICB9O1xuXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5yZWNlaXZlQ29tcG9uZW50ID0gZnVuY3Rpb24gcmVjZWl2ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICBUYXJnZXQucHJvdG90eXBlLmNhbkRyb3AgPSBmdW5jdGlvbiBjYW5Ecm9wKCkge1xuICAgICAgaWYgKCFzcGVjLmNhbkRyb3ApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzcGVjLmNhbkRyb3AodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yKTtcbiAgICB9O1xuXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5ob3ZlciA9IGZ1bmN0aW9uIGhvdmVyKCkge1xuICAgICAgaWYgKCFzcGVjLmhvdmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3BlYy5ob3Zlcih0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IsIHRoaXMuY29tcG9uZW50KTtcbiAgICB9O1xuXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5kcm9wID0gZnVuY3Rpb24gZHJvcCgpIHtcbiAgICAgIGlmICghc3BlYy5kcm9wKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGRyb3BSZXN1bHQgPSBzcGVjLmRyb3AodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yLCB0aGlzLmNvbXBvbmVudCk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBkcm9wUmVzdWx0ID09PSAndW5kZWZpbmVkJyB8fCBfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShkcm9wUmVzdWx0KSwgJ2Ryb3AoKSBtdXN0IGVpdGhlciByZXR1cm4gdW5kZWZpbmVkLCBvciBhbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBkcm9wIHJlc3VsdC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBkcm9wUmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkcm9wUmVzdWx0O1xuICAgIH07XG5cbiAgICByZXR1cm4gVGFyZ2V0O1xuICB9KSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVUYXJnZXQobW9uaXRvcikge1xuICAgIHJldHVybiBuZXcgVGFyZ2V0KG1vbml0b3IpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldEZhY3RvcnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVRhcmdldE1vbml0b3I7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBpc0NhbGxpbmdDYW5Ecm9wID0gZmFsc2U7XG5cbnZhciBUYXJnZXRNb25pdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGFyZ2V0TW9uaXRvcihtYW5hZ2VyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhcmdldE1vbml0b3IpO1xuXG4gICAgdGhpcy5pbnRlcm5hbE1vbml0b3IgPSBtYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgfVxuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLnJlY2VpdmVIYW5kbGVySWQgPSBmdW5jdGlvbiByZWNlaXZlSGFuZGxlcklkKHRhcmdldElkKSB7XG4gICAgdGhpcy50YXJnZXRJZCA9IHRhcmdldElkO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmNhbkRyb3AgPSBmdW5jdGlvbiBjYW5Ecm9wKCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oIWlzQ2FsbGluZ0NhbkRyb3AsICdZb3UgbWF5IG5vdCBjYWxsIG1vbml0b3IuY2FuRHJvcCgpIGluc2lkZSB5b3VyIGNhbkRyb3AoKSBpbXBsZW1lbnRhdGlvbi4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC1tb25pdG9yLmh0bWwnKTtcblxuICAgIHRyeSB7XG4gICAgICBpc0NhbGxpbmdDYW5Ecm9wID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5jYW5Ecm9wT25UYXJnZXQodGhpcy50YXJnZXRJZCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzQ2FsbGluZ0NhbkRyb3AgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuaXNPdmVyID0gZnVuY3Rpb24gaXNPdmVyKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuaXNPdmVyVGFyZ2V0KHRoaXMudGFyZ2V0SWQsIG9wdGlvbnMpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldEl0ZW1UeXBlID0gZnVuY3Rpb24gZ2V0SXRlbVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEl0ZW1UeXBlKCk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uIGdldEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEl0ZW0oKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXREcm9wUmVzdWx0ID0gZnVuY3Rpb24gZ2V0RHJvcFJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmRpZERyb3AgPSBmdW5jdGlvbiBkaWREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5kaWREcm9wKCk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0SW5pdGlhbENsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldEluaXRpYWxDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEluaXRpYWxDbGllbnRPZmZzZXQoKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldFNvdXJjZUNsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0Q2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0Q2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRDbGllbnRPZmZzZXQoKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQgPSBmdW5jdGlvbiBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpO1xuICB9O1xuXG4gIHJldHVybiBUYXJnZXRNb25pdG9yO1xufSkoKTtcblxuZnVuY3Rpb24gY3JlYXRlVGFyZ2V0TW9uaXRvcihtYW5hZ2VyKSB7XG4gIHJldHVybiBuZXcgVGFyZ2V0TW9uaXRvcihtYW5hZ2VyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9jcmVhdGVUYXJnZXRNb25pdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVUYXJnZXRDb25uZWN0b3I7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93cmFwQ29ubmVjdG9ySG9va3MgPSByZXF1aXJlKCcuL3dyYXBDb25uZWN0b3JIb29rcycpO1xuXG52YXIgX3dyYXBDb25uZWN0b3JIb29rczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cmFwQ29ubmVjdG9ySG9va3MpO1xuXG52YXIgX2FyZU9wdGlvbnNFcXVhbCA9IHJlcXVpcmUoJy4vYXJlT3B0aW9uc0VxdWFsJyk7XG5cbnZhciBfYXJlT3B0aW9uc0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyZU9wdGlvbnNFcXVhbCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhcmdldENvbm5lY3RvcihiYWNrZW5kKSB7XG4gIHZhciBjdXJyZW50SGFuZGxlcklkID0gdW5kZWZpbmVkO1xuXG4gIHZhciBjdXJyZW50RHJvcFRhcmdldE5vZGUgPSB1bmRlZmluZWQ7XG4gIHZhciBjdXJyZW50RHJvcFRhcmdldE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHZhciBkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQgPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gcmVjb25uZWN0RHJvcFRhcmdldCgpIHtcbiAgICBpZiAoZGlzY29ubmVjdEN1cnJlbnREcm9wVGFyZ2V0KSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQoKTtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRIYW5kbGVySWQgJiYgY3VycmVudERyb3BUYXJnZXROb2RlKSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQgPSBiYWNrZW5kLmNvbm5lY3REcm9wVGFyZ2V0KGN1cnJlbnRIYW5kbGVySWQsIGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSwgY3VycmVudERyb3BUYXJnZXRPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlSGFuZGxlcklkKGhhbmRsZXJJZCkge1xuICAgIGlmIChoYW5kbGVySWQgPT09IGN1cnJlbnRIYW5kbGVySWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50SGFuZGxlcklkID0gaGFuZGxlcklkO1xuICAgIHJlY29ubmVjdERyb3BUYXJnZXQoKTtcbiAgfVxuXG4gIHZhciBob29rcyA9IF93cmFwQ29ubmVjdG9ySG9va3MyWydkZWZhdWx0J10oe1xuICAgIGRyb3BUYXJnZXQ6IGZ1bmN0aW9uIGNvbm5lY3REcm9wVGFyZ2V0KG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChub2RlID09PSBjdXJyZW50RHJvcFRhcmdldE5vZGUgJiYgX2FyZU9wdGlvbnNFcXVhbDJbJ2RlZmF1bHQnXShvcHRpb25zLCBjdXJyZW50RHJvcFRhcmdldE9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY3VycmVudERyb3BUYXJnZXROb2RlID0gbm9kZTtcbiAgICAgIGN1cnJlbnREcm9wVGFyZ2V0T3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIHJlY29ubmVjdERyb3BUYXJnZXQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcmVjZWl2ZUhhbmRsZXJJZDogcmVjZWl2ZUhhbmRsZXJJZCxcbiAgICBob29rczogaG9va3NcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9jcmVhdGVUYXJnZXRDb25uZWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVG91Y2hCYWNrZW5kID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUb3VjaEJhY2tlbmQ7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGdldEV2ZW50Q2xpZW50VG91Y2hPZmZzZXQoZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBnZXRFdmVudENsaWVudE9mZnNldChlLnRhcmdldFRvdWNoZXNbMF0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMpIHtcbiAgICAgICAgcmV0dXJuIGdldEV2ZW50Q2xpZW50VG91Y2hPZmZzZXQoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgICAgIHk6IGUuY2xpZW50WVxuICAgICAgICB9O1xuICAgIH1cbn1cblxudmFyIEVMRU1FTlRfTk9ERSA9IDE7XG5mdW5jdGlvbiBnZXROb2RlQ2xpZW50T2Zmc2V0KG5vZGUpIHtcbiAgICB2YXIgZWwgPSBub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUgPyBub2RlIDogbm9kZS5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX2VsJGdldEJvdW5kaW5nQ2xpZW50ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB2YXIgdG9wID0gX2VsJGdldEJvdW5kaW5nQ2xpZW50LnRvcDtcbiAgICB2YXIgbGVmdCA9IF9lbCRnZXRCb3VuZGluZ0NsaWVudC5sZWZ0O1xuXG4gICAgcmV0dXJuIHsgeDogbGVmdCwgeTogdG9wIH07XG59XG5cbnZhciBldmVudE5hbWVzID0ge1xuICAgIG1vdXNlOiB7XG4gICAgICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICAgICAgbW92ZTogJ21vdXNlbW92ZScsXG4gICAgICAgIGVuZDogJ21vdXNldXAnXG4gICAgfSxcbiAgICB0b3VjaDoge1xuICAgICAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgICAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICAgICAgZW5kOiAndG91Y2hlbmQnXG4gICAgfVxufTtcblxudmFyIFRvdWNoQmFja2VuZCA9IGV4cG9ydHMuVG91Y2hCYWNrZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvdWNoQmFja2VuZChtYW5hZ2VyKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvdWNoQmFja2VuZCk7XG5cbiAgICAgICAgb3B0aW9ucy5kZWxheVRvdWNoU3RhcnQgPSBvcHRpb25zLmRlbGF5VG91Y2hTdGFydCB8fCBvcHRpb25zLmRlbGF5O1xuXG4gICAgICAgIG9wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBlbmFibGVUb3VjaEV2ZW50czogdHJ1ZSxcbiAgICAgICAgICAgIGVuYWJsZU1vdXNlRXZlbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIGRlbGF5VG91Y2hTdGFydDogMCxcbiAgICAgICAgICAgIGRlbGF5TW91c2VTdGFydDogMFxuICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmFjdGlvbnMgPSBtYW5hZ2VyLmdldEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5tb25pdG9yID0gbWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgICAgIHRoaXMucmVnaXN0cnkgPSBtYW5hZ2VyLmdldFJlZ2lzdHJ5KCk7XG5cbiAgICAgICAgdGhpcy5kZWxheVRvdWNoU3RhcnQgPSBvcHRpb25zLmRlbGF5VG91Y2hTdGFydDtcbiAgICAgICAgdGhpcy5kZWxheU1vdXNlU3RhcnQgPSBvcHRpb25zLmRlbGF5TW91c2VTdGFydDtcbiAgICAgICAgdGhpcy5zb3VyY2VOb2RlcyA9IHt9O1xuICAgICAgICB0aGlzLnNvdXJjZU5vZGVPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVzID0ge307XG4gICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMudGFyZ2V0Tm9kZXMgPSB7fTtcbiAgICAgICAgdGhpcy50YXJnZXROb2RlT3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSB7fTtcblxuICAgICAgICBpZiAob3B0aW9ucy5lbmFibGVNb3VzZUV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLnB1c2goJ21vdXNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5lbmFibGVUb3VjaEV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLnB1c2goJ3RvdWNoJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldFNvdXJjZUNsaWVudE9mZnNldCA9IHRoaXMuZ2V0U291cmNlQ2xpZW50T2Zmc2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0ID0gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnREZWxheSA9IHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlID0gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZUNhcHR1cmUgPSB0aGlzLmhhbmRsZVRvcE1vdmVDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZUVuZENhcHR1cmUgPSB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRvdWNoQmFja2VuZCwgW3tcbiAgICAgICAga2V5OiAnc2V0dXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSghdGhpcy5jb25zdHJ1Y3Rvci5pc1NldFVwLCAnQ2Fubm90IGhhdmUgdHdvIFRvdWNoIGJhY2tlbmRzIGF0IHRoZSBzYW1lIHRpbWUuJyk7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmlzU2V0VXAgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnc3RhcnQnLCB0aGlzLmdldFRvcE1vdmVTdGFydEhhbmRsZXIoKSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnc3RhcnQnLCB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ21vdmUnLCB0aGlzLmhhbmRsZVRvcE1vdmVDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdlbmQnLCB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndGVhcmRvd24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdGVhcmRvd24oKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuaXNTZXRVcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSB7fTtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3N0YXJ0JywgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdzdGFydCcsIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdtb3ZlJywgdGhpcy5oYW5kbGVUb3BNb3ZlQ2FwdHVyZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnZW5kJywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMudW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRFdmVudExpc3RlbmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoc3ViamVjdCwgZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lclR5cGUpIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lc1tsaXN0ZW5lclR5cGVdW2V2ZW50XSwgaGFuZGxlciwgY2FwdHVyZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHN1YmplY3QsIGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgc3ViamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZXNbbGlzdGVuZXJUeXBlXVtldmVudF0sIGhhbmRsZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nvbm5lY3REcmFnU291cmNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3REcmFnU291cmNlKHNvdXJjZUlkLCBub2RlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgaGFuZGxlTW92ZVN0YXJ0ID0gdGhpcy5oYW5kbGVNb3ZlU3RhcnQuYmluZCh0aGlzLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZU5vZGVzW3NvdXJjZUlkXSA9IG5vZGU7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihub2RlLCAnc3RhcnQnLCBoYW5kbGVNb3ZlU3RhcnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5zb3VyY2VOb2Rlc1tzb3VyY2VJZF07XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCAnc3RhcnQnLCBoYW5kbGVNb3ZlU3RhcnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29ubmVjdERyYWdQcmV2aWV3JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3REcmFnUHJldmlldyhzb3VyY2VJZCwgbm9kZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVPcHRpb25zW3NvdXJjZUlkXSA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVByZXZpZXdOb2Rlc1tzb3VyY2VJZF0gPSBub2RlO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczIuc291cmNlUHJldmlld05vZGVzW3NvdXJjZUlkXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMyLnNvdXJjZVByZXZpZXdOb2RlT3B0aW9uc1tzb3VyY2VJZF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb25uZWN0RHJvcFRhcmdldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0RHJvcFRhcmdldCh0YXJnZXRJZCwgbm9kZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZXNbdGFyZ2V0SWRdID0gbm9kZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMzLnRhcmdldE5vZGVzW3RhcmdldElkXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFNvdXJjZUNsaWVudE9mZnNldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb3VyY2VDbGllbnRPZmZzZXQoc291cmNlSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXROb2RlQ2xpZW50T2Zmc2V0KHRoaXMuc291cmNlTm9kZXNbc291cmNlSWRdKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZVN0YXJ0Q2FwdHVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlKGUpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzID0gW107XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZU1vdmVTdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3ZlU3RhcnQoc291cmNlSWQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzLnVuc2hpZnQoc291cmNlSWQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRUb3BNb3ZlU3RhcnRIYW5kbGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRvcE1vdmVTdGFydEhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVsYXlUb3VjaFN0YXJ0ICYmICF0aGlzLmRlbGF5TW91c2VTdGFydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVTdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlU3RhcnQoZSkge1xuICAgICAgICAgICAgLy8gRG9uJ3QgcHJlbWF0dXJlbHkgcHJldmVudERlZmF1bHQoKSBoZXJlIHNpbmNlIGl0IG1pZ2h0OlxuICAgICAgICAgICAgLy8gMS4gTWVzcyB1cCBzY3JvbGxpbmdcbiAgICAgICAgICAgIC8vIDIuIE1lc3MgdXAgbG9uZyB0YXAgKHdoaWNoIGJyaW5ncyB1cCBjb250ZXh0IG1lbnUpXG4gICAgICAgICAgICAvLyAzLiBJZiB0aGVyZSdzIGFuIGFuY2hvciBsaW5rIGFzIGEgY2hpbGQsIHRhcCB3b24ndCBiZSB0cmlnZ2VyZWQgb24gbGlua1xuXG4gICAgICAgICAgICB2YXIgY2xpZW50T2Zmc2V0ID0gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZSk7XG4gICAgICAgICAgICBpZiAoY2xpZW50T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSBjbGllbnRPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVTdGFydERlbGF5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVTdGFydERlbGF5KGUpIHtcbiAgICAgICAgICAgIHZhciBkZWxheSA9IGUudHlwZSA9PT0gZXZlbnROYW1lcy50b3VjaC5zdGFydCA/IHRoaXMuZGVsYXlUb3VjaFN0YXJ0IDogdGhpcy5kZWxheU1vdXNlU3RhcnQ7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0LmJpbmQodGhpcywgZSksIGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZUNhcHR1cmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG9wTW92ZUNhcHR1cmUoZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgICAgICAgICB2YXIgbW92ZVN0YXJ0U291cmNlSWRzID0gdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHM7XG5cbiAgICAgICAgICAgIHZhciBjbGllbnRPZmZzZXQgPSBnZXRFdmVudENsaWVudE9mZnNldChlKTtcblxuICAgICAgICAgICAgaWYgKCFjbGllbnRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIG5vdCBkcmFnZ2luZyBhbmQgd2UndmUgbW92ZWQgYSBsaXR0bGUsIHRoYXQgY291bnRzIGFzIGEgZHJhZyBzdGFydFxuICAgICAgICAgICAgaWYgKCF0aGlzLm1vbml0b3IuaXNEcmFnZ2luZygpICYmIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0Lmhhc093blByb3BlcnR5KCd4JykgJiYgbW92ZVN0YXJ0U291cmNlSWRzICYmICh0aGlzLl9tb3VzZUNsaWVudE9mZnNldC54ICE9PSBjbGllbnRPZmZzZXQueCB8fCB0aGlzLl9tb3VzZUNsaWVudE9mZnNldC55ICE9PSBjbGllbnRPZmZzZXQueSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTdGFydFNvdXJjZUlkcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmJlZ2luRHJhZyhtb3ZlU3RhcnRTb3VyY2VJZHMsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50T2Zmc2V0OiB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgZ2V0U291cmNlQ2xpZW50T2Zmc2V0OiB0aGlzLmdldFNvdXJjZUNsaWVudE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgcHVibGlzaFNvdXJjZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLm1vbml0b3IuaXNEcmFnZ2luZygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc291cmNlTm9kZSA9IHRoaXMuc291cmNlTm9kZXNbdGhpcy5tb25pdG9yLmdldFNvdXJjZUlkKCldO1xuICAgICAgICAgICAgdGhpcy5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcihzb3VyY2VOb2RlKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdWJsaXNoRHJhZ1NvdXJjZSgpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBtYXRjaGluZ1RhcmdldElkcyA9IE9iamVjdC5rZXlzKHRoaXMudGFyZ2V0Tm9kZXMpLmZpbHRlcihmdW5jdGlvbiAodGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRpbmdSZWN0ID0gX3RoaXM0LnRhcmdldE5vZGVzW3RhcmdldElkXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpZW50T2Zmc2V0LnggPj0gYm91bmRpbmdSZWN0LmxlZnQgJiYgY2xpZW50T2Zmc2V0LnggPD0gYm91bmRpbmdSZWN0LnJpZ2h0ICYmIGNsaWVudE9mZnNldC55ID49IGJvdW5kaW5nUmVjdC50b3AgJiYgY2xpZW50T2Zmc2V0LnkgPD0gYm91bmRpbmdSZWN0LmJvdHRvbTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuaG92ZXIobWF0Y2hpbmdUYXJnZXRJZHMsIHtcbiAgICAgICAgICAgICAgICBjbGllbnRPZmZzZXQ6IGNsaWVudE9mZnNldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVFbmRDYXB0dXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlKGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tb25pdG9yLmlzRHJhZ2dpbmcoKSB8fCB0aGlzLm1vbml0b3IuZGlkRHJvcCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCA9IHt9O1xuXG4gICAgICAgICAgICB0aGlzLnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5kcm9wKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuZW5kRHJhZygpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcihub2RlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy51bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlciA9IG5ldyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM1LnJlc3VycmVjdFNvdXJjZU5vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM1LnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIub2JzZXJ2ZShub2RlLnBhcmVudEVsZW1lbnQsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXN1cnJlY3RTb3VyY2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3VycmVjdFNvdXJjZU5vZGUoKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1yZWFjdGlkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRvdWNoQmFja2VuZDtcbn0oKTtcblxuZnVuY3Rpb24gY3JlYXRlVG91Y2hCYWNrZW5kKCkge1xuICAgIHZhciBvcHRpb25zT3JNYW5hZ2VyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgdG91Y2hCYWNrZW5kRmFjdG9yeSA9IGZ1bmN0aW9uIHRvdWNoQmFja2VuZEZhY3RvcnkobWFuYWdlcikge1xuICAgICAgICByZXR1cm4gbmV3IFRvdWNoQmFja2VuZChtYW5hZ2VyLCBvcHRpb25zT3JNYW5hZ2VyKTtcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnNPck1hbmFnZXIuZ2V0TW9uaXRvcikge1xuICAgICAgICByZXR1cm4gdG91Y2hCYWNrZW5kRmFjdG9yeShvcHRpb25zT3JNYW5hZ2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG91Y2hCYWNrZW5kRmFjdG9yeTtcbiAgICB9XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQvZGlzdC9Ub3VjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmFnTGF5ZXIgZnJvbSAncmVhY3QtZG5kL2xpYi9EcmFnTGF5ZXInO1xuaW1wb3J0IEV2ZW50QmFzZSBmcm9tICcuL0V2ZW50QmFzZSc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuXG5mdW5jdGlvbiBjb2xsZWN0IChtb25pdG9yKXtcbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgY2xpZW50T2Zmc2V0OiBtb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpXG4gIH07XG5cbiAgY29uc3QgaXRlbSA9IG1vbml0b3IuZ2V0SXRlbSgpO1xuICBpZihpdGVtICYmIGl0ZW1bJ2RyYWdnaW5nQ29tcG9uZW50J10pe1xuICAgIHByb3BzWydkcmFnZ2luZ0NvbXBvbmVudCddID0gaXRlbVsnZHJhZ2dpbmdDb21wb25lbnQnXTtcbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn1cblxuY2xhc3MgRXZlbnRQcmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZ2V0SXRlbVN0eWxlcyAoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmNsaWVudE9mZnNldCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLmNsaWVudE9mZnNldC54O1xuICAgIGNvbnN0IHkgPSB0aGlzLnByb3BzLmNsaWVudE9mZnNldC55O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcblxuICAgIHJldHVybiBhc3NpZ24odGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudC5nZXREcmFnZ2luZ1N0eWxlKCksIHtcbiAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCBkcmFnZ2luZ0Rpc3BsYXkgPSAnJztcbiAgICBpZih0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50ICYmIHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5KXtcbiAgICAgIGRyYWdnaW5nRGlzcGxheSA9IHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5O1xuICAgIH1cbiAgICBcbiAgICBsZXQgZGlzcGxheSA9IFtdO1xuICAgIGlmKHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQgJiYgdGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudC5zdGF0ZS5kaXNwbGF5KXtcbiAgICAgIGRpc3BsYXkgPSB0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50LnN0YXRlLmRpc3BsYXk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cInByZXZpZXdcIiBjbGFzc05hbWU9XCJ0bEV2ZW50VmlldyB0bERyYWdnaW5nRXZlbnRcIiBzdHlsZT17dGhpcy5nZXRJdGVtU3R5bGVzKCl9PlxuICAgICAgICA8RXZlbnRCYXNlXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5PXtkcmFnZ2luZ0Rpc3BsYXl9XG4gICAgICAgICAgZGlzcGxheT17ZGlzcGxheX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZ0xheWVyKGNvbGxlY3QpKEV2ZW50UHJldmlldyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0V2ZW50UHJldmlldy5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50QmFzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICByZW5kZXJEaXNwbGF5KHJvdyl7XG4gICAgaWYoIXJvdy52YWx1ZSl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCd0bEV2ZW50RGlzcGxheVJvdycsIHJvdy5rZXkpO1xuICAgIGlmKEFycmF5LmlzQXJyYXkocm93LnZhbHVlKSl7XG4gICAgICBpZihyb3cudmFsdWUubGVuZ3RoID09PSAwKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17cm93LmtleX0+XG4gICAgICAgICAge3Jvdy52YWx1ZS5tYXAoKHZhbCwga2V5KSA9PiA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJpdGVtXCI+e3ZhbH08L2Rpdj4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e3Jvdy5rZXl9PlxuICAgICAgICB7cm93LnZhbHVlfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fT5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5wcm9wcy5kcmFnZ2luZ0Rpc3BsYXkpe1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInRsRHJhZ2dpbmdEaXNwbGF5XCIgc3R5bGU9e3t0b3A6IHRoaXMucHJvcHMuZHJhZ2dpbmdEaXNwbGF5VG9wfX0+e3RoaXMucHJvcHMuZHJhZ2dpbmdEaXNwbGF5fTwvZGl2Pik7XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsRXZlbnREaXNwbGF5XCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuZGlzcGxheS5tYXAocm93ID0+IHRoaXMucmVuZGVyRGlzcGxheShyb3cpKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICZuYnNwO1xuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5FdmVudEJhc2UuZGVmYXVsdFByb3BzID0ge2Rpc3BsYXk6IFtdfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRCYXNlLmpzeFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCB7RHJhZ1NvdXJjZX0gZnJvbSAncmVhY3QtZG5kJztcbmltcG9ydCBFdmVudEJhc2UgZnJvbSAnLi9FdmVudEJhc2UnO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4vVGltZWxpbmUnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuXG5jb25zdCBzb3VyY2UgPSB7XG4gIGJlZ2luRHJhZzogZnVuY3Rpb24gKHByb3BzLCBtb25pdG9yLCBjb21wb25lbnQpIHtcbiAgICByZXR1cm4gYXNzaWduKHt9LCBwcm9wcywge2RyYWdnaW5nQ29tcG9uZW50OiBjb21wb25lbnR9KTtcbiAgfSxcbiAgY2FuRHJhZzogZnVuY3Rpb24ocHJvcHMsIG1vbml0b3IsIGNvbXBvbmVudCl7XG4gICAgY29uc3QgZHJhZ2dhYmxlID0gcHJvcHMudGltZWxpbmUuZmluZEV2ZW50QnlJZChwcm9wcy5pZCkuc3RhdGUuZHJhZ2dhYmxlO1xuICAgIHJldHVybiAhIWRyYWdnYWJsZTtcbiAgfVxufVxuXG5jb25zdCBjb2xsZWN0ID0gKGNvbm5lY3QsIG1vbml0b3IpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb25uZWN0RHJhZ1NvdXJjZTogY29ubmVjdC5kcmFnU291cmNlKCksXG4gICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKClcbiAgfTtcbn1cblxuY2xhc3MgRXZlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdG9wOiBwcm9wcy5mbG9hdCA9PT0gdW5kZWZpbmVkID8gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5wcm9wcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgOiBwcm9wcy5mbG9hdC50b3AsXG4gICAgICBsZWZ0OiBwcm9wcy5mbG9hdCA9PT0gdW5kZWZpbmVkID8gdGhpcy5wcm9wcy50aW1lbGluZS5nZXRMaW5lTGVmdCh0aGlzLnByb3BzLmxpbmVJZCkgOiBwcm9wcy5mbG9hdC5sZWZ0LFxuICAgICAgY29sb3I6IHRoaXMucHJvcHMuY29sb3IsXG4gICAgICBkcmFnZ2FibGU6IHByb3BzLmZsb2F0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IHRydWUsXG4gICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJyxcbiAgICAgIGRpc3BsYXk6IHByb3BzLmRpc3BsYXksXG4gICAgfVxuXG4gICAgdGhpcy5saW5lSWQgPSB0aGlzLnByb3BzLmxpbmVJZDtcbiAgICB0aGlzLnRpbWVTcGFuID0gdGhpcy5wcm9wcy50aW1lU3BhbjtcbiAgICB0aGlzLmRyYWdnaW5nUG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMucmVzaXppbmdUaW1lU3BhbiA9IG51bGw7XG4gICAgdGhpcy5yZXNpemluZyA9IGZhbHNlO1xuICAgIHRoaXMudmFycyA9IHRoaXMucHJvcHMudmFycyA/IHRoaXMucHJvcHMudmFycyA6IHt9O1xuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG5cbiAgICBpZih0aGlzLnByb3BzLmZsb2F0KXtcbiAgICAgIGNvbnN0IGxpbmVJZCA9IHRoaXMucHJvcHMudGltZWxpbmUuZmluZExpbmVCeUxlZnQodGhpcy5zdGF0ZS5sZWZ0KS5wcm9wcy5pZDtcbiAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRvcFRvVGltZSh0aGlzLnN0YXRlLnRvcCk7XG4gICAgICB0aGlzLmRyYWdnaW5nUG9zaXRpb24gPSB7dGltZTogdGltZSwgbGluZUlkOiBsaW5lSWR9O1xuICAgICAgdGhpcy5zdGF0ZS5kcmFnZ2luZ0Rpc3BsYXkgPSB0aW1lLmdldERpc3BsYXlUaW1lKCk7XG4gICAgICB0aGlzLnN0YXRlLmhlaWdodCA9IHRoaXMucHJvcHMudGltZWxpbmUubWludXRlVG9IZWlnaHQodGhpcy5wcm9wcy5mbG9hdC5taW51dGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLmhlaWdodCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodCh0aGlzLnByb3BzLnRpbWVTcGFuKTtcbiAgICB9XG4gIH1cblxuICB0b0pzb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBsaW5lSWQ6IHRoaXMubGluZUlkLFxuICAgICAgdGltZVNwYW46IHRoaXMudGltZVNwYW4sXG4gICAgICB2YXJzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMudmFycykpLFxuICAgICAgY29sb3I6IHRoaXMuc3RhdGUuY29sb3IsXG4gICAgICBkaXNwbGF5OiB0aGlzLnByb3BzLmRpc3BsYXksXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3A6IHRoaXMuc3RhdGUudG9wLFxuICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKHZhbHVlcyl7XG4gICAgY29uc3QgbmV3U3RhdGUgPSB7fTtcbiAgICBpZih2YWx1ZXMudGltZVNwYW4pe1xuICAgICAgbmV3U3RhdGUuaGVpZ2h0ID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KHZhbHVlcy50aW1lU3Bhbik7XG4gICAgICBuZXdTdGF0ZS50b3AgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh2YWx1ZXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgICAgdGhpcy50aW1lU3BhbiA9IHZhbHVlcy50aW1lU3BhbjtcbiAgICB9XG5cbiAgICBpZih2YWx1ZXMuY29sb3Ipe1xuICAgICAgbmV3U3RhdGUuY29sb3IgPSB2YWx1ZXMuY29sb3I7XG4gICAgfVxuXG4gICAgaWYodmFsdWVzLmRpc3BsYXkpe1xuICAgICAgbmV3U3RhdGUuZGlzcGxheSA9IHZhbHVlcy5kaXNwbGF5O1xuICAgIH1cblxuICAgIGlmKHZhbHVlcy52YXJzKXtcbiAgICAgIHRoaXMudmFycyA9IHZhbHVlcy52YXJzO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRUaW1lU3Bhbigpe1xuICAgIHJldHVybiB0aGlzLnJlc2l6aW5nVGltZVNwYW4gfHwgdGhpcy50aW1lU3BhbjtcbiAgfVxuXG4gIGdldCBuZXh0UG9zaXRpb24oKXtcbiAgICBpZih0aGlzLmRyYWdnaW5nUG9zaXRpb24pe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGluZUlkOiB0aGlzLmRyYWdnaW5nUG9zaXRpb24ubGluZUlkLFxuICAgICAgICB0aW1lU3BhbjogdGhpcy50aW1lU3Bhbi5zaGlmdFN0YXJ0VGltZSh0aGlzLmRyYWdnaW5nUG9zaXRpb24udGltZSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgIHJldHVybntcbiAgICAgICAgbGluZUlkOiB0aGlzLmxpbmVJZCxcbiAgICAgICAgdGltZVNwYW46IHRoaXMucmVzaXppbmdUaW1lU3BhblxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IHByZXZQb3NpdGlvbigpe1xuICAgIGlmKCF0aGlzLmRyYWdnaW5nUG9zaXRpb24gJiYgIXRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJue1xuICAgICAgICBsaW5lSWQ6IHRoaXMubGluZUlkLFxuICAgICAgICB0aW1lU3BhbjogdGhpcy50aW1lU3BhblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDku5bjga5FdmVudOOBqOmHjeOBquOBo+OBpuOBhOOBquOBhOOBi+ODgeOCp+ODg+OCr+OBmeOCi1xuICAgKiBAcGFyYW0gIHtvYmplY3R9ICBwb3NpdGlvbiB7bGluZUlkOiAqKiosIHRpbWVTcGFuOiAqKip9XG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc0ZyZWVQb3NpdGlvbihwb3NpdGlvbil7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnRpbWVsaW5lLmV2ZW50Q29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGV2ID0gdGhpcy5wcm9wcy50aW1lbGluZS5ldmVudENvbXBvbmVudHNbaV07XG4gICAgICBpZihldiA9PT0gdGhpcykgY29udGludWU7XG4gICAgICBpZihldi5saW5lSWQgIT0gcG9zaXRpb24ubGluZUlkKSBjb250aW51ZTtcbiAgICAgIGlmKGV2LmN1cnJlbnRUaW1lU3Bhbi5vdmVybGFwcyhwb3NpdGlvbi50aW1lU3Bhbikpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBtb3ZlVG8odG9wLCBsZWZ0KXtcbiAgICB0aGlzLnNldFN0YXRlKHt0b3A6IHRvcCwgbGVmdDogbGVmdH0pO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBpZih0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkQ2xpY2spe1xuICAgICAgaWYodGhpcy5yZXNpemluZyl7XG4gICAgICAgIHJldHVybiA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnREaWRDbGljayh7XG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LnJlZnMubGluZXNXcmFwcGVyLnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxMZWZ0OiB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LmVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgICAgICB0b3A6IGUuY2xpZW50WSxcbiAgICAgICAgICBsZWZ0OiBlLmNsaWVudFgsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgbGluZUNvbXBvbmVudDogdGhpcy5wcm9wcy50aW1lbGluZS5saW5lQ29tcG9uZW50cy5maW5kKGxpbmVDb21wb25lbnQgPT4gbGluZUNvbXBvbmVudC5wcm9wcy5pZCA9PSB0aGlzLmxpbmVJZClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdnaW5nKHRpbWUsIGxpbmVJZCl7XG4gICAgdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uID0ge3RpbWU6IHRpbWUsIGxpbmVJZDogbGluZUlkfTtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZ0Rpc3BsYXk6IHRpbWUuZ2V0RGlzcGxheVRpbWUoKX0pO1xuICB9XG5cbiAgcmVzaXplVXAoZSl7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudC5yZXNpemVVcCh0aGlzLCBlLmNsaWVudFkpO1xuICB9XG5cbiAgcmVzaXplRG93bihlKXtcbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LnJlc2l6ZURvd24odGhpcywgZS5jbGllbnRZKTtcbiAgfVxuXG4gIGVuZFJlc2l6aW5nKGUpe1xuICAgIGlmKHRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiBudWxsLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXlUb3A6IG51bGxcbiAgICAgIH07XG5cbiAgICAgIGlmKHRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICAgIG5ld1N0YXRlLnRvcCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKHRoaXMucmVzaXppbmdUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSk7XG4gICAgICAgIG5ld1N0YXRlLmhlaWdodCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodCh0aGlzLnJlc2l6aW5nVGltZVNwYW4pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgfVxuXG4gICAgLy9vbkNsaWNr44KI44KKZW5kUmVzaXppbmfjga7lhYjjgavnmbrnlJ/jgZfjgabjgZfjgb7jgYbjgIJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVzaXppbmcgPSBmYWxzZSwgMTAwKTtcbiAgfVxuXG4gIG9uQ29udGV4dE1lbnUoZSl7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZFJpZ2h0Q2xpY2spe1xuICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZFJpZ2h0Q2xpY2soe1xuICAgICAgICBldmVudDogZSxcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXREcmFnZ2luZ1N0eWxlKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3AsXG4gICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuY29sb3IsXG4gICAgfVxuICB9XG5cbiAgZ2V0T2Zmc2V0KCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3AsXG4gICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnRcbiAgICB9XG4gIH1cblxuICBzZXRDb2xvcihjb2xvcil7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29sb3I6IGNvbG9yfSk7XG4gIH1cblxuICBzZXREaXNwbGF5KGRpc3BsYXkpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXk6IGRpc3BsYXl9KTtcbiAgfVxuXG4gIHJlc2l6ZSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVzaXphYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBmbG9hdCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgZHJhZ2dpbmdEaXNwbGF5OiB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmdldERpc3BsYXlUaW1lKClcbiAgICB9KTtcblxuICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbiA9IHt0aW1lOiB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLCBsaW5lSWQ6IHRoaXMubGluZUlkfTtcbiAgfVxuXG4gIGlzRml4ZWQoKXtcbiAgICByZXR1cm4gIXRoaXMuc3RhdGUuZHJhZ2dhYmxlICYmICF0aGlzLnN0YXRlLnJlc2l6YWJsZTtcbiAgfVxuXG4gIGlzRml4YWJsZSgpe1xuICAgIHZhciBuZXdQb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uO1xuICAgIGlmKCFuZXdQb3NpdGlvbil7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pc0ZyZWVQb3NpdGlvbihuZXdQb3NpdGlvbik7XG4gIH1cblxuICBpc0NhbmNlbGFibGUoKXtcbiAgICB2YXIgbmV3UG9zaXRpb24gPSB0aGlzLnByZXZQb3NpdGlvbjtcbiAgICBpZighbmV3UG9zaXRpb24pe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXNGcmVlUG9zaXRpb24obmV3UG9zaXRpb24pO1xuICB9XG5cbiAgY2FuY2VsKCl7XG4gICAgaWYodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uKXtcbiAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmdldExpbmVMZWZ0KHRoaXMubGluZUlkKTtcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgICAgdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnLFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgbGVmdDogbGVmdFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmKHRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodCh0aGlzLnRpbWVTcGFuKTtcbiAgICAgIHRoaXMucmVzaXppbmdUaW1lU3BhbiA9IG51bGw7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJyxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMudGltZWxpbmUuY2xlYXJEcmFnZ2luZ092ZXIoKTtcbiAgfVxuXG4gIHJlbW92ZSgpe1xuICAgIHRoaXMucHJvcHMudGltZWxpbmUucmVtb3ZlRXZlbnQodGhpcy5wcm9wcy5pZCk7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICB9XG5cbiAgZ2V0TWludXRlKCl7XG4gICAgaWYodGhpcy50aW1lU3Bhbil7XG4gICAgICByZXR1cm4gdGhpcy50aW1lU3Bhbi5nZXREaXN0YW5jZSgpO1xuICAgIH0gZWxzZSBpZih0aGlzLnByb3BzLmZsb2F0KXtcbiAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnByb3BzLmZsb2F0Lm1pbnV0ZSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGZpeCgpe1xuICAgIGlmKHRoaXMuZHJhZ2dpbmdQb3NpdGlvbil7XG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgdG9wOiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh0aGlzLmRyYWdnaW5nUG9zaXRpb24udGltZSksXG4gICAgICAgIGxlZnQ6IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0TGluZUxlZnQodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLmxpbmVJZCksXG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJydcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdUaW1lU3BhbiA9IHRoaXMudGltZVNwYW4uc2hpZnRTdGFydFRpbWUodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLnRpbWUpO1xuICAgICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudFdpbGxGaXgpe1xuICAgICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50V2lsbEZpeCh7XG4gICAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICBsaW5lSWQ6IHRoaXMuZHJhZ2dpbmdQb3NpdGlvbi5saW5lSWQsXG4gICAgICAgICAgdGltZVNwYW46IG5ld1RpbWVTcGFuXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIHRoaXMubGluZUlkID0gdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLmxpbmVJZDtcbiAgICAgIHRoaXMudGltZVNwYW4gPSBuZXdUaW1lU3BhbjtcbiAgICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIGlmKHRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJ1xuICAgICAgfVxuICAgICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudFdpbGxGaXgpe1xuICAgICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50V2lsbEZpeCh7XG4gICAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICBsaW5lSWQ6IHRoaXMubGluZUlkLFxuICAgICAgICAgIHRpbWVTcGFuOiB0aGlzLnJlc2l6aW5nVGltZVNwYW5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgdGhpcy50aW1lU3BhbiA9IHRoaXMucmVzaXppbmdUaW1lU3BhbjtcbiAgICAgIHRoaXMucmVzaXppbmdUaW1lU3BhbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmNsZWFyRHJhZ2dpbmdPdmVyKCk7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZEZpeCl7XG4gICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkRml4KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNldFZhcihrZXksIHZhbHVlKXtcbiAgICB0aGlzLnZhcnNba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0VmFyKGtleSl7XG4gICAgcmV0dXJuIHRoaXMudmFyc1trZXldO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IHRoaXMuc3RhdGUudG9wICsgJ3B4JyxcbiAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCArICdweCcsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCArICdweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuY29sb3IsXG4gICAgICBkaXNwbGF5OiB0aGlzLnByb3BzLmlzRHJhZ2dpbmcgPyAnbm9uZScgOiAnYmxvY2snXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLmNvbm5lY3REcmFnU291cmNlKFxuICAgICAgPGRpdiByZWY9e2VsZW0gPT4gdGhpcy5lbGVtZW50ID0gZWxlbX0gb25Db250ZXh0TWVudT17ZSA9PiB0aGlzLm9uQ29udGV4dE1lbnUoZSl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxFdmVudFZpZXcnLCB7dGxEcmFnZ2luZ0V2ZW50OiB0aGlzLnN0YXRlLmRyYWdnYWJsZSwgdGxSZXNpemFibGVFdmVudDogdGhpcy5zdGF0ZS5yZXNpemFibGV9KX0gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX0+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIGlmKHRoaXMuc3RhdGUucmVzaXphYmxlKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSZXNpemVIYW5kbGVcIiBvblRvdWNoU3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVVcChlKX0gb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVVcChlKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgICA8RXZlbnRCYXNlXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5PXt0aGlzLnN0YXRlLmRyYWdnaW5nRGlzcGxheX1cbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXlUb3A9e3RoaXMuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5VG9wfVxuICAgICAgICAgIGRpc3BsYXk9e3RoaXMuc3RhdGUuZGlzcGxheX1cbiAgICAgICAgLz5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5yZXNpemFibGUpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bFJlc2l6ZUhhbmRsZSB0bEJvdHRvbVwiIG9uVG91Y2hTdGFydD17ZSA9PiB0aGlzLnJlc2l6ZURvd24oZSl9IG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplRG93bihlKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBFdmVudC5wcm9wVHlwZXMgPSB7XG4vLyAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4vLyAgIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbi8vICAgY29sb3I6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbi8vICAgLy9UT0RPIOW+queSsOWPgueFp+OBq+OBquOCi+OBruOBp2ltcG9ydOOBp+OBjeOBmuOAguOBqOOCiuOBguOBiOOBmmFueeOBp+OBlOOBvuOBi+OBl+OBpuOBvuOBmeOAglxuLy8gICB0aW1lbGluZTogUmVhY3QuUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuLy8gICBsaW5lSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnU291cmNlKFwiRXZlbnRcIiwgc291cmNlLCBjb2xsZWN0KShFdmVudCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0V2ZW50LmpzeFxuICoqLyIsImltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL3NyYy9qcy9jb21wb25lbnRzL0NvbnRleHRNZW51JztcblxuZXhwb3J0IHtDb250ZXh0TWVudX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3JlYWN0LWNvbnRleHQtbWVudS9pbmRleC5lczZcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJ1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vQ29udGV4dE1lbnVJdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0TWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBzdGF0aWMgZ2V0V2luZG93U2l6ZSgpe1xuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIHt3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0fTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICB6SW5kZXg6IHRoaXMucHJvcHMuekluZGV4XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMub3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JtTWVudU92ZXJsYXknKTtcbiAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJwb3NpdGlvblwiXSA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5vdmVybGF5LnN0eWxlW1widG9wXCJdID0gJzAnO1xuICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcImxlZnRcIl0gPSAnMCc7XG4gICAgdGhpcy5vdmVybGF5LnN0eWxlW1wiZGlzcGxheVwiXSA9ICdub25lJztcbiAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJ6SW5kZXhcIl0gPSB0aGlzLnByb3BzLnpJbmRleCAtIDE7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5jbG9zZSgpKTtcbiAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3cocG9zLCBjb250ZXh0KXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0eWxlOiBhc3NpZ24oe30sIHRoaXMuc3RhdGUuc3R5bGUsIHBvcywge2Rpc3BsYXk6ICdibG9jayd9KSxcbiAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICB9LCAoKSA9PiB7XG4gICAgICBsZXQgd2luZG93U2l6ZSA9IENvbnRleHRNZW51LmdldFdpbmRvd1NpemUoKTtcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcIndpZHRoXCJdID0gd2luZG93U2l6ZS53aWR0aCArICdweCc7XG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJoZWlnaHRcIl0gPSB3aW5kb3dTaXplLmhlaWdodCArICdweCc7XG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGVbJ2Rpc3BsYXknXSA9ICdibG9jayc7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlT3V0KCl7XG4gICAgY29uc29sZS5sb2coJ291dCcpO1xuICB9XG5cbiAgb25Nb3VzZU92ZXIoKXtcbiAgICBjb25zb2xlLmxvZygnb3ZlcicpO1xuICB9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge3N0eWxlOiBhc3NpZ24oe30sIHRoaXMuc3RhdGUuc3R5bGUsIHtkaXNwbGF5OiAnbm9uZSd9KX0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZVsnZGlzcGxheSddID0gJ25vbmUnO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJtZW51XCIgY2xhc3NOYW1lPVwicm1NZW51XCIgc3R5bGU9e3RoaXMuc3RhdGUuc3R5bGV9PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicm1NZW51SXRlbUxpc3RcIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5jb250ZXh0ID8gdGhpcy5wcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYoIWl0ZW0uc2hvdyB8fCBpdGVtLnNob3codGhpcy5zdGF0ZS5jb250ZXh0KSl7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZSh0aGlzLnN0YXRlLmNvbnRleHQpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aXRlbS5vbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgbWVudT17dGhpc31cbiAgICAgICAgICAgICAgICAgIGVuYWJsZT17aXRlbS5lbmFibGUgPyBpdGVtLmVuYWJsZSh0aGlzLnN0YXRlLmNvbnRleHQpIDogdHJ1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgOiBudWxsfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZXh0TWVudS5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvdzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgZW5hYmxlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9KSkuaXNSZXF1aXJlZCxcbiAgekluZGV4OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG59XG5cbkNvbnRleHRNZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgekluZGV4OiAxMDBcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3JlYWN0LWNvbnRleHQtbWVudS9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudS5qc3hcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL3JlYWN0LWNvbnRleHQtbWVudS9+L29iamVjdC1hc3NpZ24vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnVJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3VzZU92ZXI6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIG9uTW91c2VPdXQoKXtcbiAgICBpZih0aGlzLnByb3BzLmVuYWJsZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHttb3VzZU92ZXI6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU92ZXIoKXtcbiAgICBpZih0aGlzLnByb3BzLmVuYWJsZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHttb3VzZU92ZXI6IHRydWV9KTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGlmKHRoaXMucHJvcHMuZW5hYmxlKXtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLm1lbnUuc3RhdGUuY29udGV4dCk7XG4gICAgICB0aGlzLnByb3BzLm1lbnUuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcInJtTWVudUl0ZW1cIiwge3JtTW91c2VPdmVyOiB0aGlzLnN0YXRlLm1vdXNlT3Zlciwgcm1EaXNhYmxlZDogIXRoaXMucHJvcHMuZW5hYmxlLCBybVNlcGFyYXRvcjogdGhpcy5wcm9wcy5uYW1lID09ICctJ30pfVxuICAgICAgICBvbk1vdXNlT3Zlcj17ZSA9PiB0aGlzLm9uTW91c2VPdmVyKGUpfVxuICAgICAgICBvbk1vdXNlT3V0PXtlID0+IHRoaXMub25Nb3VzZU91dChlKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnByb3BzLm5hbWUgPT0gJy0nID8gbnVsbCA6IHRoaXMucHJvcHMubmFtZX19XG4gICAgICA+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3JlYWN0LWNvbnRleHQtbWVudS9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudUl0ZW0uanN4XG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL3JlYWN0LWNvbnRleHQtbWVudS9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=