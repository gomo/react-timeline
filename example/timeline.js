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
	
	    //MinViewは一時間下に余分が生成されるので60分プラス
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Timeline).call(this, props));
	
	    _this.timeSpan = _this.props.timeSpan.addMin(60);
	
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
	        initialEvents: this.props.initialEvents
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
	        minWidth: this.props.timeline.getTotalWidth() + 'px'
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
	        newState.minWidth = this.props.timeline.getTotalWidth() + 'px';
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
	          { style: { minWidth: this.state.minWidth } },
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
	  events: []
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
	      _this.state.hours.push(_react2.default.createElement(_Hour2.default, {
	        key: time.getHour(),
	        time: time,
	        minHeight: _this.props.minHeight
	      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzRmYTk2MzdkYzZiYmRkOGFjNjIiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GcmFtZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG91ci5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1J1bGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5lTGFiZWwuanN4Iiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvRHJhZ0Ryb3BDb250ZXh0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL0RyYWdEcm9wTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2xpYi9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSG9zdE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL3BvbnlmaWxsLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL2RyYWdPZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvYWN0aW9ucy9kcmFnRHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi91dGlscy9tYXRjaGVzVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvZHJhZ09wZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9hY3Rpb25zL3JlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3dpdGhvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VEaWZmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2hlY2tHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faW5kZXhPZk5hTi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9yZXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC90b0ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdG9GaW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvcmVmQ291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvZGlydHlIYW5kbGVySWRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3hvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VYb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYXN0QXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL3N0YXRlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvRHJhZ0Ryb3BNb25pdG9yLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL0hhbmRsZXJSZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi91dGlscy9nZXROZXh0VW5pcXVlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hc2FwL2Jyb3dzZXItYXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FzYXAvYnJvd3Nlci1yYXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvRHJhZ1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9Ecm9wVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL2JhY2tlbmRzL2NyZWF0ZVRlc3RCYWNrZW5kLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvRHJhZ0xheWVyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi91dGlscy9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL3NoYWxsb3dFcXVhbFNjYWxhci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvRHJhZ1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvZGVjb3JhdGVIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvaXNEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9EaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9Db21wb3NpdGVEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9TZXJpYWxEaXNwb3NhYmxlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9yZWdpc3RlclNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlTW9uaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlQ29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi93cmFwQ29ubmVjdG9ySG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL2Nsb25lV2l0aFJlZi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvYXJlT3B0aW9uc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi91dGlscy9pc1ZhbGlkVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvRHJvcFRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvcmVnaXN0ZXJUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldE1vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldENvbm5lY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC10b3VjaC1iYWNrZW5kL2Rpc3QvVG91Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRQcmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudEJhc2UuanN4Iiwid2VicGFjazovLy8uL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4uL3JlYWN0LWNvbnRleHQtbWVudS9pbmRleC5lczYiLCJ3ZWJwYWNrOi8vLy4uL3JlYWN0LWNvbnRleHQtbWVudS9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4uL3JlYWN0LWNvbnRleHQtbWVudS9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3JlYWN0LWNvbnRleHQtbWVudS9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudUl0ZW0uanN4Iiwid2VicGFjazovLy8uLi9yZWFjdC1jb250ZXh0LW1lbnUvfi9jbGFzc25hbWVzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsVUFBUyxhQUFULEdBQXdCO0FBQ3RCLE9BQU0sUUFBUSxPQUFPLFVBQVAsSUFDWCxTQUFTLGVBQVQsQ0FBeUIsV0FEZCxJQUVYLFNBQVMsSUFBVCxDQUFjLFdBRmpCOztBQUlBLE9BQU0sU0FBUyxPQUFPLFdBQVAsSUFDWixTQUFTLGVBQVQsQ0FBeUIsWUFEYixJQUVaLFNBQVMsSUFBVCxDQUFjLFlBRmpCOztBQUlBLFVBQU8sRUFBQyxPQUFPLEtBQVIsRUFBZSxRQUFRLE1BQXZCLEVBQVA7QUFDRDs7QUFFRCxVQUFTLFVBQVQsQ0FBb0IsZUFBcEIsRUFBb0M7QUFDbEMsT0FBTSxnQkFBZ0IsZ0JBQWdCLHFCQUFoQixFQUF0QjtBQUNBLE9BQU0sYUFBYSxlQUFuQjtBQUNBLFVBQU8sV0FBVyxNQUFYLEdBQW9CLGNBQWMsR0FBekM7QUFDRDs7QUFFRCxRQUFPLE1BQVAsR0FBZ0IsWUFBTTs7QUFFcEIsT0FBTSxZQUFZLG1CQUFTLE1BQVQsQ0FDaEI7QUFDRSxZQUFPLENBQ0w7QUFDRSxhQUFNO0FBQUEsZ0JBQVcsT0FBWDtBQUFBLFFBRFI7QUFFRSxnQkFBUywwQkFBVztBQUNsQixpQkFBUSxTQUFSLENBQWtCLEtBQWxCO0FBQ0QsUUFKSDtBQUtFLGFBQU07QUFBQSxnQkFBVyxRQUFRLFNBQVIsQ0FB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Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixZQUFXLFNBQVM7QUFDcEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsU0FBUztBQUNwQixZQUFXLFNBQVM7QUFDcEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsTUFBTTtBQUNqQixjQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsU0FBUztBQUNwQixZQUFXLFNBQVM7QUFDcEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7QUNqTkE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLHdCQUF1QixrRUFBa0U7O0FBRXpGOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSxxQzs7Ozs7O0FDM01BOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQ1ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQzVGQTs7QUFFQTtBQUNBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUN4RkE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7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O0FBRWhCO0FBQ0E7O0FBRUEsa0JBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDM0ZmE5NjM3ZGM2YmJkZDhhYzYyXG4gKiovIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3Bhbn0gZnJvbSAnLi4vaW5kZXguZXM2JztcbmltcG9ydCB7Q29udGV4dE1lbnV9IGZyb20gJy4uLy4uL3JlYWN0LWNvbnRleHQtbWVudSc7XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1NpemUoKXtcbiAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblxuICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICByZXR1cm4ge3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9O1xufVxuXG5mdW5jdGlvbiBjYWxjSGVpZ2h0KHRpbWVsaW5lRWxlbWVudCl7XG4gIGNvbnN0IHdyYXBwZXJCb3VuZHMgPSB0aW1lbGluZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHdpbmRvd1NpemUgPSBnZXRXaW5kb3dTaXplKCk7XG4gIHJldHVybiB3aW5kb3dTaXplLmhlaWdodCAtIHdyYXBwZXJCb3VuZHMudG9wO1xufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXG4gIGNvbnN0IGV2ZW50TWVudSA9IFJlYWN0RE9NLnJlbmRlcihcbiAgICA8Q29udGV4dE1lbnVcbiAgICAgIGl0ZW1zPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBjb250ZXh0ID0+ICdmbG9hdCcsXG4gICAgICAgICAgb25DbGljazogY29udGV4dCA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbXBvbmVudC5mbG9hdCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvdzogY29udGV4dCA9PiBjb250ZXh0LmNvbXBvbmVudC5pc0ZpeGVkKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJ3Jlc2l6ZScsXG4gICAgICAgICAgb25DbGljazogY29udGV4dCA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbXBvbmVudC5yZXNpemUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3c6IGNvbnRleHQgPT4gY29udGV4dC5jb21wb25lbnQuaXNGaXhlZCgpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBjb250ZXh0ID0+ICdjYW5jZWwnLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5jb21wb25lbnQuY2FuY2VsKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93OiBjb250ZXh0ID0+ICFjb250ZXh0LmNvbXBvbmVudC5pc0ZpeGVkKCksXG4gICAgICAgICAgb25DbGljazogY29udGV4dCA9PiB7XG4gICAgICAgICAgICBpZihjb250ZXh0LmNvbXBvbmVudC5pc0NhbmNlbGFibGUoKSl7XG4gICAgICAgICAgICAgIGNvbnRleHQuY29tcG9uZW50LmNhbmNlbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWxlcnQoJ1lvdSBjYW5cXCd0IGNhbmNlbCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBjb250ZXh0ID0+ICdmaXgnLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgaWYoY29udGV4dC5jb21wb25lbnQuaXNGaXhhYmxlKCkpe1xuICAgICAgICAgICAgICBjb250ZXh0LmNvbXBvbmVudC5maXgoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFsZXJ0KCdZb3UgY2FuXFwndCBmaXghJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93OiBjb250ZXh0ID0+ICFjb250ZXh0LmNvbXBvbmVudC5pc0ZpeGVkKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJy0nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBjb250ZXh0ID0+ICdyZW1vdmUnLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5jb21wb25lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbmFibGU6IGNvbnRleHQgPT4gY29udGV4dC5jb21wb25lbnQuaXNGaXhlZCgpXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICB6SW5kZXg9ezEwMDB9XG4gICAgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxuICApO1xuXG4gIGNvbnN0IGxpbmVEYXRhID0gW1xuICAgIHtsYWJlbDonbGFiZWwxJywgaWQ6J19fMSd9LFxuICAgIHtsYWJlbDonbGFiZWwyJywgaWQ6J19fMid9LFxuICAgIHtsYWJlbDonbGFiZWwzJywgaWQ6J19fMyd9LFxuICAgIHtsYWJlbDonbGFiZWw0JywgaWQ6J19fNCd9LFxuICAgIHtsYWJlbDonbGFiZWw1JywgaWQ6J19fNSd9LFxuICAgIHtsYWJlbDonbGFiZWw2JywgaWQ6J19fNid9LFxuICAgIHtsYWJlbDonbGFiZWw3JywgaWQ6J19fNyd9LFxuICAgIHtsYWJlbDonbGFiZWw4JywgaWQ6J19fOCd9LFxuICAgIHtsYWJlbDonbGFiZWw5JywgaWQ6J19fOSd9LFxuICAgIHtsYWJlbDonbGFiZWwxMCcsIGlkOidfXzEwJ30sXG4gICAge2xhYmVsOidsYWJlbDExJywgaWQ6J19fMTEnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTInLCBpZDonX18xMid9LFxuICAgIHtsYWJlbDonbGFiZWwxMycsIGlkOidfXzEzJ30sXG4gICAge2xhYmVsOidsYWJlbDE0JywgaWQ6J19fMTQnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTUnLCBpZDonX18xNSd9LFxuICAgIHtsYWJlbDonbGFiZWwxNicsIGlkOidfXzE2J30sXG4gICAge2xhYmVsOidsYWJlbDE3JywgaWQ6J19fMTcnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTgnLCBpZDonX18xOCd9XG4gIF07XG5cbiAgY29uc3QgdGltZVNwYW4gPSBUaW1lU3Bhbi5jcmVhdGUoWzEwLCAwXSwgWzI1LCAwXSk7XG4gIGNvbnN0IHRpbWVsaW5lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lbGluZScpO1xuICBjb25zdCB0aW1lbGluZSA9IFJlYWN0RE9NLnJlbmRlcihcbiAgICA8VGltZWxpbmVcbiAgICAgIGxpbmVEYXRhPXtsaW5lRGF0YX1cbiAgICAgIHRpbWVTcGFuPXt0aW1lU3Bhbn1cbiAgICAgIGxpbmVXaWR0aD17NjJ9XG4gICAgICBtaW5IZWlnaHQ9ezE3fVxuICAgICAgbWluSW50ZXJ2YWw9ezV9XG4gICAgICBydWxlckludGVydmFsPXs0fVxuICAgICAgaGVpZ2h0PXtjYWxjSGVpZ2h0KHRpbWVsaW5lRWxlbWVudCl9XG4gICAgICBsaW5lRGlkQ2xpY2s9e2RhdGEgPT4ge1xuICAgICAgICB0aW1lbGluZS5hZGRFdmVudHMoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpbmVJZDogZGF0YS5jb21wb25lbnQucHJvcHMuaWQsXG4gICAgICAgICAgICB0aW1lU3BhbjogbmV3IFRpbWVTcGFuKGRhdGEudGltZSwgZGF0YS50aW1lLmFkZE1pbigxMjApKSxcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGQjZCNicsXG4gICAgICAgICAgICBkaXNwbGF5OiBbXG4gICAgICAgICAgICAgIHtrZXk6ICdzdGFydFRpbWUnLCB2YWx1ZTogZGF0YS50aW1lLmdldERpc3BsYXlUaW1lKCl9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICAgIH19XG4gICAgICBsaW5lRGlkUmlnaHRDbGljaz17ZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCcsIGRhdGEpO1xuICAgICAgfX1cbiAgICAgIGV2ZW50RGlkQ2xpY2s9e2RhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbGVmdCcsIGRhdGEpO1xuICAgICAgfX1cbiAgICAgIGV2ZW50RGlkUmlnaHRDbGljaz17ZGF0YSA9PiB7XG4gICAgICAgIGRhdGEuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnRNZW51LnNob3coe3RvcDogZGF0YS5ldmVudC5jbGllbnRZLCBsZWZ0OiBkYXRhLmV2ZW50LmNsaWVudFh9LCBkYXRhKTtcbiAgICAgIH19XG4gICAgICBldmVudFdpbGxGaXg9e2RhdGEgPT4ge1xuICAgICAgICBkYXRhLnN0YXRlLmRpc3BsYXkgPSBkYXRhLmNvbXBvbmVudC5zdGF0ZS5kaXNwbGF5Lm1hcChcbiAgICAgICAgICByb3cgPT4gcm93LmtleSA9PSAnc3RhcnRUaW1lJyA/IHtrZXk6ICdzdGFydFRpbWUnLCB2YWx1ZTogZGF0YS50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXNwbGF5VGltZSgpfSA6IHJvd1xuICAgICAgICApO1xuICAgICAgfX1cbiAgICAgIGV2ZW50RGlkRml4PXtkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9fVxuICAgIC8+LFxuICAgIHRpbWVsaW5lRWxlbWVudFxuICApO1xuXG5cbiAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICAgIHRpbWVsaW5lLnNldEhlaWdodChjYWxjSGVpZ2h0KHRpbWVsaW5lRWxlbWVudCkpO1xuICB9O1xuXG4gIHRpbWVsaW5lLmFkZEV2ZW50cyhbXG4gICAge1xuICAgICAgbGluZUlkOiAnX18xJyxcbiAgICAgIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAwXSwgWzEyLCAwXSksXG4gICAgICBjb2xvcjogJyNGRkI2QjYnLFxuICAgICAgZGlzcGxheTogW1xuICAgICAgICB7a2V5OiAnc3RhcnRUaW1lJywgdmFsdWU6ICcxMTowMCd9LFxuICAgICAgICB7a2V5OiAndHlwZScsIHZhbHVlOiAnZm9vYmFyJ30sXG4gICAgICAgIHtrZXk6ICdtZW1vJywgdmFsdWU6ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5J31cbiAgICAgIF1cbiAgICB9XG4gIF0pO1xuXG4gIHRpbWVsaW5lLmFkZEV2ZW50cyhbXG4gICAge2lkOiAnMTIzMScsIGxpbmVJZDogJ19fMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MScsIGxpbmVJZDogJ19fMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxJywgbGluZUlkOiAnX18xJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjEnLCBsaW5lSWQ6ICdfXzEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzEnLCBsaW5lSWQ6ICdfXzEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODEnLCBsaW5lSWQ6ICdfXzEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTEnLCBsaW5lSWQ6ICdfXzEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzJywgbGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQnLCBsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1JywgbGluZUlkOiAnX18yJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzMycsIGxpbmVJZDogJ19fMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MycsIGxpbmVJZDogJ19fMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUzJywgbGluZUlkOiAnX18zJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzNCcsIGxpbmVJZDogJ19fNCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0NCcsIGxpbmVJZDogJ19fNCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjU0JywgbGluZUlkOiAnX180JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzNTUnLCBsaW5lSWQ6ICdfXzUnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDU1JywgbGluZUlkOiAnX181JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTU1JywgbGluZUlkOiAnX181JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyNicsIGxpbmVJZDogJ19fNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAxNV0sIFsxMiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTIzNicsIGxpbmVJZDogJ19fNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0NicsIGxpbmVJZDogJ19fNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjU2JywgbGluZUlkOiAnX182JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjYnLCBsaW5lSWQ6ICdfXzYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzYnLCBsaW5lSWQ6ICdfXzYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODYnLCBsaW5lSWQ6ICdfXzYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTYnLCBsaW5lSWQ6ICdfXzYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzNzcnLCBsaW5lSWQ6ICdfXzcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDc3JywgbGluZUlkOiAnX183JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTc3JywgbGluZUlkOiAnX183JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyOCcsIGxpbmVJZDogJ19fOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAxNV0sIFsxMiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTIzOCcsIGxpbmVJZDogJ19fOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0OCcsIGxpbmVJZDogJ19fOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjU4JywgbGluZUlkOiAnX184JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjgnLCBsaW5lSWQ6ICdfXzgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzgnLCBsaW5lSWQ6ICdfXzgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODgnLCBsaW5lSWQ6ICdfXzgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTgnLCBsaW5lSWQ6ICdfXzgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzOScsIGxpbmVJZDogJ19fOScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0OScsIGxpbmVJZDogJ19fOScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjU5JywgbGluZUlkOiAnX185JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyMTAnLCBsaW5lSWQ6ICdfXzEwJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTEsIDE1XSwgWzEyLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjMxMCcsIGxpbmVJZDogJ19fMTAnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDEwJywgbGluZUlkOiAnX18xMCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxMCcsIGxpbmVJZDogJ19fMTAnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI2MTAnLCBsaW5lSWQ6ICdfXzEwJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTgsIDMwXSwgWzE5LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjcxMCcsIGxpbmVJZDogJ19fMTAnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODEwJywgbGluZUlkOiAnX18xMCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIwLCAzMF0sIFsyMSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI5MTAnLCBsaW5lSWQ6ICdfXzEwJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMjIsIDMwXSwgWzIzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMzExJywgbGluZUlkOiAnX18xMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MTEnLCBsaW5lSWQ6ICdfXzExJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTExJywgbGluZUlkOiAnX18xMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE3LCAwXSwgWzE4LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMzEyJywgbGluZUlkOiAnX18xMicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MTInLCBsaW5lSWQ6ICdfXzEyJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTEyJywgbGluZUlkOiAnX18xMicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE3LCAwXSwgWzE4LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMjEzJywgbGluZUlkOiAnX18xMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAxNV0sIFsxMiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTIzMTMnLCBsaW5lSWQ6ICdfXzEzJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQxMycsIGxpbmVJZDogJ19fMTMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1MTMnLCBsaW5lSWQ6ICdfXzEzJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjEzJywgbGluZUlkOiAnX18xMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE4LCAzMF0sIFsxOSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI3MTMnLCBsaW5lSWQ6ICdfXzEzJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTksIDMwXSwgWzIwLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjgxMycsIGxpbmVJZDogJ19fMTMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTEzJywgbGluZUlkOiAnX18xMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIyLCAzMF0sIFsyMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjMxNCcsIGxpbmVJZDogJ19fMTQnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDE0JywgbGluZUlkOiAnX18xNCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxNCcsIGxpbmVJZDogJ19fMTQnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjMxNScsIGxpbmVJZDogJ19fMTUnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDE1JywgbGluZUlkOiAnX18xNScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxNScsIGxpbmVJZDogJ19fMTUnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjIxNicsIGxpbmVJZDogJ19fMTYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMSwgMTVdLCBbMTIsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyMzE2JywgbGluZUlkOiAnX18xNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MTYnLCBsaW5lSWQ6ICdfXzE2JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTE2JywgbGluZUlkOiAnX18xNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE3LCAwXSwgWzE4LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjYxNicsIGxpbmVJZDogJ19fMTYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzE2JywgbGluZUlkOiAnX18xNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE5LCAzMF0sIFsyMCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI4MTYnLCBsaW5lSWQ6ICdfXzE2JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMjAsIDMwXSwgWzIxLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjkxNicsIGxpbmVJZDogJ19fMTYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyMTcnLCBsaW5lSWQ6ICdfXzE3JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTEsIDE1XSwgWzEyLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjMxNycsIGxpbmVJZDogJ19fMTcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDE3JywgbGluZUlkOiAnX18xNycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxNycsIGxpbmVJZDogJ19fMTcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI2MTcnLCBsaW5lSWQ6ICdfXzE3JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTgsIDMwXSwgWzE5LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjcxNycsIGxpbmVJZDogJ19fMTcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODE3JywgbGluZUlkOiAnX18xNycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIwLCAzMF0sIFsyMSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI5MTcnLCBsaW5lSWQ6ICdfXzE3JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMjIsIDMwXSwgWzIzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMjE4JywgbGluZUlkOiAnX18xOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAxNV0sIFsxMiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTIzMTgnLCBsaW5lSWQ6ICdfXzE4JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQxOCcsIGxpbmVJZDogJ19fMTgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1MTgnLCBsaW5lSWQ6ICdfXzE4JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjE4JywgbGluZUlkOiAnX18xOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE4LCAzMF0sIFsxOSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI3MTgnLCBsaW5lSWQ6ICdfXzE4JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTksIDMwXSwgWzIwLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjgxOCcsIGxpbmVJZDogJ19fMTgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTE4JywgbGluZUlkOiAnX18xOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIyLCAzMF0sIFsyMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gIF0pO1xuXG4gIHRpbWVsaW5lLmFkZEV2ZW50cyhbXG4gICAge1xuICAgICAgY29sb3I6ICcjRkZCNkI2JyxcbiAgICAgIGZsb2F0OiB7dG9wOiAxMCwgbGVmdDogMTAsIG1pbnV0ZTogNjB9XG4gICAgfSxcbiAgICB7XG4gICAgICBjb2xvcjogJyNGRkI2QjYnLFxuICAgICAgZmxvYXQ6IHt0b3A6IDEwMCwgbGVmdDogMTAwLCBtaW51dGU6IDYwfVxuICAgIH1cbiAgXSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGUvYXBwLmpzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZSc7XG5pbXBvcnQgVGltZSBmcm9tICcuL3NyYy9jbGFzc2VzL1RpbWUnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4vc3JjL2NsYXNzZXMvVGltZVNwYW4nO1xuXG5leHBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3Bhbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguZXM2XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBGcmFtZSBmcm9tICcuL0ZyYW1lJztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy9NaW5WaWV344Gv5LiA5pmC6ZaT5LiL44Gr5L2Z5YiG44GM55Sf5oiQ44GV44KM44KL44Gu44GnNjDliIbjg5fjg6njgrlcbiAgICB0aGlzLnRpbWVTcGFuID0gdGhpcy5wcm9wcy50aW1lU3Bhbi5hZGRNaW4oNjApO1xuXG4gICAgLy9taW5WaWV344GM44GE44GP44Gk44GC44KL44GL44Kr44Km44Oz44OI44CCbWluVmlld+OBrzE15YiG44GK44GN44CC44Gd44KM44KS5YWD44Gr6auY44GV44KS6KiI566X44CCYm9yZGVy5YiGMXB46Laz44GZXG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gKHRoaXMudGltZVNwYW4uZ2V0RGlzdGFuY2UoKSAvIDE1KSAqICh0aGlzLnByb3BzLm1pbkhlaWdodCArIDEpO1xuXG4gICAgLy8x5YiG44GC44Gf44KK44Gu6auY44GV44KS566X5Ye6XG4gICAgdGhpcy5wZXJNaW5IZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHQgLyB0aGlzLnRpbWVTcGFuLmdldERpc3RhbmNlKCk7XG5cbiAgICB0aGlzLmxpbmVXaWR0aCA9IHByb3BzLmxpbmVXaWR0aDtcblxuICAgIHRoaXMuY3JlYXRlZEV2ZW50SWQgPSAwO1xuICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudCA9IG51bGw7XG4gIH1cblxuICBnZXQgZXZlbnRDb21wb25lbnRzKCl7XG4gICAgY29uc3QgZXZlbnRzID0gW107XG5cbiAgICBmb3IodmFyIGtleSBpbiB0aGlzLmZyYW1lQ29tcG9uZW50LnJlZnMpe1xuICAgICAgaWYoa2V5LmluZGV4T2YoXCJldmVudEBcIikgPT09IDApe1xuICAgICAgICBldmVudHMucHVzaCh0aGlzLmZyYW1lQ29tcG9uZW50LnJlZnNba2V5XS5nZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXZlbnRzO1xuICB9XG5cbiAgZ2V0IGZyYW1lQ29tcG9uZW50KCl7XG4gICAgcmV0dXJuIHRoaXMucmVmcy5mcmFtZS5nZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSgpLmdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlKCk7XG4gIH1cblxuICBnZXQgbGluZUNvbXBvbmVudHMoKXtcbiAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgIGZvcih2YXIga2V5IGluIHRoaXMuZnJhbWVDb21wb25lbnQucmVmcyl7XG4gICAgICBpZihrZXkuaW5kZXhPZihcImxpbmVAXCIpID09PSAwKXtcbiAgICAgICAgbGluZXMucHVzaCh0aGlzLmZyYW1lQ29tcG9uZW50LnJlZnNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG5cbiAgY3JlYXRlRXZlbnRJZCgpe1xuICAgIHJldHVybiAnbmV3XycgKyAoKyt0aGlzLmNyZWF0ZWRFdmVudElkKTtcbiAgfVxuXG4gIGRyYWdnaW5nT3ZlcihsZWZ0KXtcbiAgICBjb25zdCBsaW5lQ29tcG9uZW50ID0gdGhpcy5maW5kTGluZUJ5TGVmdChsZWZ0KTtcbiAgICBpZihsaW5lQ29tcG9uZW50KXtcbiAgICAgIGlmKHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudCAhPT0gbGluZUNvbXBvbmVudCl7XG4gICAgICAgIGlmKHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudCl7XG4gICAgICAgICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50LmNsZWFyRHJhZ2dpbmdPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50ID0gbGluZUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50LmRyYWdnaW5nT3ZlcigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZih0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQpe1xuICAgICAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb21wb25lbnQuY2xlYXJEcmFnZ2luZ092ZXIoKTtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGluZUNvbXBvbmVudDtcbiAgfVxuXG4gIGNsZWFyRHJhZ2dpbmdPdmVyKCl7XG4gICAgaWYodGhpcy5kcmFnZ2luZ092ZXJMaW5lQ29tcG9uZW50KXtcbiAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbXBvbmVudC5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICAgIH1cbiAgfVxuXG4gIGdldFRvdGFsV2lkdGgoKXtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5saW5lRGF0YS5yZWR1Y2UoKHZhbCwgZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGhhc1J1bGVyID0gaW5kZXggJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG4gICAgICByZXR1cm4gdmFsICsgKGhhc1J1bGVyID8gdGhpcy5saW5lV2lkdGggKyBSdWxlci53aWR0aCA6IHRoaXMubGluZVdpZHRoKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGZpbmRFdmVudEJ5SWQoZXZlbnRJZCl7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRDb21wb25lbnRzLmZpbmQoZXYgPT4gZXYucHJvcHMuaWQgPT0gZXZlbnRJZCk7XG4gIH1cblxuICBmaW5kTGluZUJ5TGVmdChsZWZ0KXtcbiAgICB2YXIgd2lkdGggPSAwO1xuICAgIHJldHVybiB0aGlzLmxpbmVDb21wb25lbnRzLmZpbmQobGluZSA9PiB7XG4gICAgICB3aWR0aCArPSBsaW5lLnByb3BzLmhhc1J1bGVyID8gdGhpcy5wcm9wcy5saW5lV2lkdGggKyBSdWxlci53aWR0aCA6IHRoaXMucHJvcHMubGluZVdpZHRoO1xuICAgICAgaWYobGVmdCA8IHdpZHRoKXtcbiAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRMaW5lTGVmdChsaW5lSWQpe1xuICAgIGxldCBsZWZ0ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMubGluZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmVEYXRhID0gdGhpcy5wcm9wcy5saW5lRGF0YVtpXTtcbiAgICAgIGNvbnN0IGhhc1J1bGVyID0gaSAlIHRoaXMucHJvcHMucnVsZXJJbnRlcnZhbCA9PT0gMDtcbiAgICAgIGlmKGhhc1J1bGVyKXtcbiAgICAgICAgbGVmdCArPSBSdWxlci53aWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYobGluZURhdGEuaWQgPT0gbGluZUlkKXtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGxlZnQgKz0gdGhpcy5wcm9wcy5saW5lV2lkdGg7XG4gICAgfVxuXG4gICAgbGVmdCArPSBMaW5lLnNpZGVQYWRkaW5nO1xuXG4gICAgcmV0dXJuIGxlZnQ7XG4gIH1cblxuICBnZXRUaW1lU3Bhbih0b3AsIGhlaWdodCl7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gdGhpcy50b3BUb1RpbWUodG9wKTtcblxuICAgIGNvbnN0IGVuZFRpbWUgPSBzdGFydFRpbWUuYWRkTWluKGhlaWdodCAvIHRoaXMucGVyTWluSGVpZ2h0KTtcbiAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHN0YXJ0VGltZSwgZW5kVGltZSk7XG4gIH1cblxuICBtaW51dGVUb0hlaWdodChtaW51dGUpe1xuICAgIHJldHVybiAobWludXRlICogdGhpcy5wZXJNaW5IZWlnaHQpIC0gMTtcbiAgfVxuXG4gIHRpbWVTcGFuVG9IZWlnaHQodGltZVNwYW4pe1xuICAgIHJldHVybiB0aGlzLm1pbnV0ZVRvSGVpZ2h0KHRpbWVTcGFuLmdldERpc3RhbmNlKCkpO1xuICB9XG5cbiAgdGltZVRvVG9wKHRpbWUpe1xuICAgIHJldHVybiB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmdldERpc3RhbmNlKHRpbWUpICogdGhpcy5wZXJNaW5IZWlnaHQgLSAxO1xuICB9XG5cbiAgdG9wVG9UaW1lKHRvcCl7XG4gICAgaWYodG9wIDw9IDApe1xuICAgICAgcmV0dXJuIHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCk7XG4gICAgfVxuICAgIGxldCBtaW51dGUgPSB0b3AgLyB0aGlzLnBlck1pbkhlaWdodDtcbiAgICBjb25zdCByZXN0ID0gbWludXRlICUgdGhpcy5wcm9wcy5taW5JbnRlcnZhbDtcbiAgICBpZihyZXN0ICE9PSAwKXtcbiAgICAgIGlmKHJlc3QgPiB0aGlzLnByb3BzLm1pbkludGVydmFsIC8gMil7XG4gICAgICAgIG1pbnV0ZSArPSB0aGlzLnByb3BzLm1pbkludGVydmFsIC0gcmVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pbnV0ZSAtPSByZXN0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5hZGRNaW4obWludXRlKTtcbiAgfVxuXG4gIGZpbmRQcmV2RXZlbnQoZXZlbnRDb21wb25lbnQpe1xuICAgIHJldHVybiB0aGlzLmV2ZW50Q29tcG9uZW50c1xuICAgICAgLmZpbHRlcihldiA9PiAhZXYuc3RhdGUuZHJhZ2dhYmxlICYmIGV2LmxpbmVJZCA9PSBldmVudENvbXBvbmVudC5saW5lSWQpLy/lkIzjgZjliJfjga7jgoLjga7jgaDjgZHjgavntZ7jgotcbiAgICAgIC5zb3J0KChhLCBiKSA9PiAtKGEuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUoYi5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpKSkvL+aZgumWk+OBrumZjemghuOBp+S4puOBs+abv+OBiFxuICAgICAgLmZpbmQoZXYgPT4gZXYuY3VycmVudFRpbWVTcGFuLmdldEVuZFRpbWUoKS5jb21wYXJlKGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgPD0gMCkvL+mZjemghuOBquOBruOBp+WvvuixoeOCiOOCiuacgOWIneOBq+mWi+Wni+aZgumWk+OBjOiLpeOBhOOCguOBruOBjHByZXZcbiAgICAgIDtcbiAgfVxuXG4gIGdldFByZXZCb3R0b20oZXZlbnRDb21wb25lbnQpe1xuICAgIGNvbnN0IHByZXZFdmVudCA9IHRoaXMuZmluZFByZXZFdmVudChldmVudENvbXBvbmVudCk7XG4gICAgbGV0IGJvdHRvbVRpbWU7XG4gICAgaWYocHJldkV2ZW50KXtcbiAgICAgIGJvdHRvbVRpbWUgPSBwcmV2RXZlbnQuY3VycmVudFRpbWVTcGFuLmdldEVuZFRpbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm90dG9tVGltZSA9IHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGltZVRvVG9wKGJvdHRvbVRpbWUpO1xuICB9XG5cbiAgZmluZE5leHRFdmVudChldmVudENvbXBvbmVudCl7XG4gICAgcmV0dXJuIHRoaXMuZmluZE5leHRFdmVudEJ5VGltZShldmVudENvbXBvbmVudC5saW5lSWQsIGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCkpO1xuICB9XG5cbiAgZmluZE5leHRFdmVudEJ5VGltZShsaW5lSWQsIHRpbWUpe1xuICAgIHJldHVybiB0aGlzLmV2ZW50Q29tcG9uZW50c1xuICAgICAgLmZpbHRlcihldiA9PiAgIWV2LnN0YXRlLmRyYWdnYWJsZSAmJiBldi5saW5lSWQgPT0gbGluZUlkKS8v5ZCM44GY5YiX44Gu44KC44Gu44Gg44GR44Gr57We44KLXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuY29tcGFyZShiLmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkpLy/mmYLplpPjga7mmIfpoIbjgafkuKbjgbPmm7/jgYhcbiAgICAgIC5maW5kKGV2ID0+IGV2LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5jb21wYXJlKHRpbWUpID49IDApLy/mmIfpoIbjgarjga7jgaflr77osaHjgojjgormnIDliJ3jgavplovlp4vmmYLplpPjgYzpgYXjgYTjgoLjga7jgYxuZXh0XG4gICAgICA7XG4gIH1cblxuICBnZXROZXh0VGltZShsaW5lSWQsIHRpbWUpe1xuICAgIGNvbnN0IG5leHRFdmVudCA9IHRoaXMuZmluZE5leHRFdmVudEJ5VGltZShsaW5lSWQsIHRpbWUpO1xuICAgIGxldCBuZXh0VGltZTtcbiAgICBpZihuZXh0RXZlbnQpe1xuICAgICAgbmV4dFRpbWUgPSBuZXh0RXZlbnQuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0VGltZSA9IHRoaXMudGltZVNwYW4uZ2V0RW5kVGltZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VGltZTtcbiAgfVxuXG4gIGdldEZyZWVNaW51dGUobGluZUlkLCB0aW1lKXtcbiAgICBjb25zdCBuZXh0VGltZSA9IHRoaXMuZ2V0TmV4dFRpbWUobGluZUlkLCB0aW1lKTtcbiAgICByZXR1cm4gdGltZS5nZXREaXN0YW5jZShuZXh0VGltZSk7XG4gIH1cblxuICBnZXROZXh0VG9wKGV2ZW50Q29tcG9uZW50KXtcbiAgICByZXR1cm4gdGhpcy50aW1lVG9Ub3AodGhpcy5nZXROZXh0VGltZShldmVudENvbXBvbmVudC5saW5lSWQsIGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCkpKTtcbiAgfVxuICBhZGRFdmVudHMoZXZlbnRzKXtcbiAgICByZXR1cm4gdGhpcy5mcmFtZUNvbXBvbmVudC5hZGRFdmVudHMoZXZlbnRzKTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpe1xuICAgIHRoaXMuZnJhbWVDb21wb25lbnQuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICByZW1vdmVFdmVudChldmVudElkKXtcbiAgICB0aGlzLmZyYW1lQ29tcG9uZW50LnJlbW92ZUV2ZW50KGV2ZW50SWQpO1xuICB9XG5cbiAgdXBkYXRlRXZlbnRzKGNhbGxiYWNrKXtcbiAgICB0aGlzLmZyYW1lQ29tcG9uZW50LnVwZGF0ZUV2ZW50cyhjYWxsYmFjayk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYW1lXG4gICAgICAgIHJlZj1cImZyYW1lXCJcbiAgICAgICAgbGluZURhdGE9e3RoaXMucHJvcHMubGluZURhdGF9XG4gICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICBsaW5lV2lkdGg9e3RoaXMucHJvcHMubGluZVdpZHRofVxuICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fVxuICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cbiAgICAgICAgbGluZUhlaWdodD17dGhpcy5saW5lSGVpZ2h0fVxuICAgICAgICB0aW1lbGluZT17dGhpc31cbiAgICAgICAgcnVsZXJJbnRlcnZhbD17dGhpcy5wcm9wcy5ydWxlckludGVydmFsfVxuICAgICAgICBpbml0aWFsRXZlbnRzPXt0aGlzLnByb3BzLmluaXRpYWxFdmVudHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuLy8gVGltZWxpbmUucHJvcFR5cGVzID0ge1xuLy8gICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4vLyAgIGxpbmVEYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuLy8gICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4vLyAgICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuLy8gICB9KSkuaXNSZXF1aXJlZCxcbi8vICAgbGluZVdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbi8vICAgcnVsZXJJbnRlcnZhbDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBtaW5JbnRlcnZhbDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbi8vICAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbi8vIH1cblxuVGltZWxpbmUuZGVmYXVsdFByb3BzID0ge1xuICBtaW5JbnRlcnZhbDogMVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFRpbWUgZnJvbSAnLi9UaW1lJ1xuLyoqXG4gKiDkuIDluqbnlJ/miJDjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga/lpInmm7TjgZfjgb7jgZvjgpPjgIJcbiAqIOWkieabtOODoeOCveODg+ODieOBr+aWsOOBl+OBhOOCquODluOCuOOCp+OCr+ODiOOCkuW4sOOBl+OBvuOBmeOAglxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU3Bhblxue1xuICBzdGF0aWMgY3JlYXRlKHN0YXJ0LCBlbmQpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3BhbihuZXcgVGltZShzdGFydFswXSwgc3RhcnRbMV0pLCBuZXcgVGltZShlbmRbMF0sIGVuZFsxXSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3Ioc3RhcnRUaW1lLCBlbmRUaW1lKXtcbiAgICBpZihzdGFydFRpbWUgPT09IHVuZGVmaW5lZCl7XG4gICAgICBzdGFydFRpbWUgPSBuZXcgVGltZSgpO1xuICAgIH1cbiAgICBpZihlbmRUaW1lID09PSB1bmRlZmluZWQpe1xuICAgICAgZW5kVGltZSA9IG5ldyBUaW1lKCk7XG4gICAgfVxuICAgIHdoaWxlKHN0YXJ0VGltZS5jb21wYXJlKGVuZFRpbWUpID49IDApe1xuICAgICAgICBlbmRUaW1lID0gZW5kVGltZS5hZGRNaW4oMjQgKiA2MCk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgIHRoaXMuX2VuZFRpbWUgPSBlbmRUaW1lO1xuICB9XG5cbiAgY2xvbmUoKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4odGhpcy5nZXRTdGFydFRpbWUoKS5jbG9uZSgpLCB0aGlzLmdldEVuZFRpbWUoKS5jbG9uZSgpKTtcbiAgfVxuXG4gIGdldERpc3RhbmNlKCl7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lLmdldERpc3RhbmNlKHRoaXMuX2VuZFRpbWUpO1xuICB9XG5cbiAgZ2V0U3RhcnRUaW1lKCl7IHJldHVybiB0aGlzLl9zdGFydFRpbWU7IH1cbiAgZ2V0RW5kVGltZSgpeyByZXR1cm4gdGhpcy5fZW5kVGltZTsgfVxuXG4gIHNoaWZ0RW5kVGltZSh0aW1lKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4odGltZS5hZGRNaW4oLXRoaXMuZ2V0RGlzdGFuY2UoKSksIHRpbWUpO1xuICB9XG5cbiAgc2hpZnRTdGFydEhvdXIoaG91cil7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRTdGFydFRpbWUobmV3IFRpbWUoaG91ciwgdGhpcy5fc3RhcnRUaW1lLmdldE1pbigpKSk7XG4gIH1cblxuICBzaGlmdFN0YXJ0TWluKG1pbil7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRTdGFydFRpbWUobmV3IFRpbWUodGhpcy5fc3RhcnRUaW1lLmdldEhvdXIoKSwgbWluKSk7XG4gIH1cblxuICBzaGlmdFN0YXJ0VGltZSh0aW1lKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4odGltZSwgdGltZS5hZGRNaW4odGhpcy5nZXREaXN0YW5jZSgpKSk7XG4gIH1cblxuICBhZGRNaW4obWludXRlKXtcbiAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRoaXMuZ2V0U3RhcnRUaW1lKCksIHRoaXMuZ2V0RW5kVGltZSgpLmFkZE1pbihtaW51dGUpKTtcbiAgfVxuXG4gIGVxdWFscyh0aW1lU3Bhbil7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5lcXVhbHModGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpICYmIHRoaXMuZ2V0RW5kVGltZSgpLmVxdWFscyh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpO1xuICB9XG5cbiAgY29udGFpbnModGltZVNwYW4pe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuY29tcGFyZSh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgPCAwICYmIHRoaXMuZ2V0RW5kVGltZSgpLmNvbXBhcmUodGltZVNwYW4uZ2V0RW5kVGltZSgpKSA+IDA7XG4gIH1cblxuICBjb250YWluc1RpbWUodGltZSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5jb21wYXJlKHRpbWUpIDwgMCAmJiB0aGlzLmdldEVuZFRpbWUoKS5jb21wYXJlKHRpbWUpID4gMDtcbiAgfVxuXG4gIG92ZXJsYXBzKHRpbWVTcGFuKXtcbiAgICAgIGlmKHRpbWVTcGFuLmNvbnRhaW5zKHRoaXMpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5jb250YWluc1RpbWUodGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5jb250YWluc1RpbWUodGltZVNwYW4uZ2V0RW5kVGltZSgpKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGVhY2hIb3VyKGNhbGxiYWNrKXtcbiAgICAgIHZhciBob3VyID0gdGhpcy5nZXRTdGFydFRpbWUoKS5nZXRIb3VyKCk7XG4gICAgICB2YXIgZW5kID0gdGhpcy5nZXRFbmRUaW1lKCkuZ2V0SG91cigpO1xuICAgICAgdmFyIGtleSA9IDA7XG5cbiAgICAgIHdoaWxlKHRydWUpe1xuICAgICAgICAgIGlmKGhvdXIgPT09IGVuZCl7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoaG91ciwga2V5LCBob3VyLCB0aGlzLmdldEVuZFRpbWUoKS5nZXRNaW4oKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoaG91ciwga2V5LCBob3VyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBob3VyICs9IDE7XG4gICAgICAgICAgKytrZXk7XG4gICAgICB9XG4gIH1cblxuICBlYWNoVGltZShjYWxsYmFjaywgbWludXRlSW50ZXJ2YWwpe1xuICAgICAgdmFyIGtleSA9IDA7XG4gICAgICBtaW51dGVJbnRlcnZhbCA9IG1pbnV0ZUludGVydmFsID8gbWludXRlSW50ZXJ2YWwgOiA2MDtcblxuICAgICAgdmFyIHRpbWUgPSB0aGlzLmdldFN0YXJ0VGltZSgpO1xuICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgaWYodGltZS5jb21wYXJlKHRoaXMuZ2V0RW5kVGltZSgpKSA+IDApe1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWxsYmFjay5jYWxsKHRpbWUsIGtleSwgdGltZSk7XG5cbiAgICAgICAgICB0aW1lID0gdGltZS5hZGRNaW4obWludXRlSW50ZXJ2YWwpO1xuICAgICAgICAgICsra2V5O1xuICAgICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKXtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUgKyAnficgKyB0aGlzLl9lbmRUaW1lO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNlxuICoqLyIsIi8qKlxuICog5LiA5bqm55Sf5oiQ44GX44Gf44Kq44OW44K444Kn44Kv44OI44Gv5aSJ5pu044GX44G+44Gb44KT44CCXG4gKiDlpInmm7Tjg6Hjgr3jg4Pjg4njga/mlrDjgZfjgYTjgqrjg5bjgrjjgqfjgq/jg4jjgpLluLDjgZfjgb7jgZnjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVxue1xuICBzdGF0aWMgZWFjaE1pbihjYWxsYmFjaywgbWludXRlSW50ZXJ2YWwpe1xuICAgICAgdmFyIGNvdW50ID0gNjAgLyBtaW51dGVJbnRlcnZhbDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgIHZhciBtaW4gPSBpICogbWludXRlSW50ZXJ2YWw7XG4gICAgICAgICAgaWYobWluIDwgNjApe1xuICAgICAgICAgICAgICB2YXIgZGlzcGxheU1pbiA9IG1pbiA8IDEwID8gJzAnICsgbWluIDogbWluICsgJyc7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwobWluLCBpLCBtaW4sIGRpc3BsYXlNaW4pO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIOmFjeWIl+OBi+OCiVRpbWXjgpLnlJ/miJBcbiAgICogQHBhcmFtICB7YXJyYXl9IHRpbWUgW2hvdXIsIG1pbl3jga7phY3liJdcbiAgICogQHJldHVybiB7VGltZX1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGltZVswXSwgdGltZVsxXSk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoaG91ciwgbWluKXtcbiAgICB0aGlzLl9ob3VyID0gaG91ciA9PT0gdW5kZWZpbmVkID8gMCA6IHBhcnNlSW50KGhvdXIsIDEwKTtcbiAgICB0aGlzLl9taW4gPSBtaW4gPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChtaW4sIDEwKTtcbiAgICB3aGlsZSh0aGlzLl9taW4gPCAwKXtcbiAgICAgICAgLS10aGlzLl9ob3VyO1xuICAgICAgICB0aGlzLl9taW4gPSA2MCArIHRoaXMuX21pbjtcbiAgICB9XG5cbiAgICB3aGlsZSh0aGlzLl9taW4gPiA1OSl7XG4gICAgICAgICsrdGhpcy5faG91cjtcbiAgICAgICAgdGhpcy5fbWluID0gdGhpcy5fbWluIC0gNjA7XG4gICAgfVxuXG4gICAgaWYodGhpcy5faG91ciA8IDApXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50b1N0cmluZygpKycgaXMgbm90IHZhbGlkIHRpbWUuJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SG91cigpeyByZXR1cm4gdGhpcy5faG91cjsgfTtcbiAgZ2V0TWluKCl7IHJldHVybiB0aGlzLl9taW47IH07XG5cbiAgY2xvbmUoKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aGlzLmdldEhvdXIoKSwgdGhpcy5nZXRNaW4oKSk7XG4gIH07XG5cbiAgYWRkTWluKG1pbil7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGhpcy5nZXRIb3VyKCksIHRoaXMuZ2V0TWluKCkgKyBwYXJzZUludChtaW4sIDEwKSk7XG4gIH07XG5cbiAgZXF1YWxzKHRpbWUpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SG91cigpID09PSB0aW1lLmdldEhvdXIoKSAmJiB0aGlzLmdldE1pbigpID09PSB0aW1lLmdldE1pbigpO1xuICB9O1xuXG4gIGNvbXBhcmUodGltZSl7XG4gICAgICBpZih0aGlzLmdldEhvdXIoKSA+IHRpbWUuZ2V0SG91cigpKVxuICAgICAge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0aGlzLmdldEhvdXIoKSA8IHRpbWUuZ2V0SG91cigpKVxuICAgICAge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgICBpZih0aGlzLmdldE1pbigpID4gdGltZS5nZXRNaW4oKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMuZ2V0TWluKCkgPCB0aW1lLmdldE1pbigpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgZ2V0RGlzdGFuY2UodGFyZ2V0VGltZSl7XG4gICAgICB2YXIgdGFyZ2V0SG91ciA9IHRhcmdldFRpbWUuZ2V0SG91cigpO1xuICAgICAgdmFyIGhvdXJEaXN0YW5jZSA9IHRhcmdldEhvdXIgLSB0aGlzLl9ob3VyO1xuICAgICAgcmV0dXJuIChob3VyRGlzdGFuY2UgKiA2MCkgKyAodGFyZ2V0VGltZS5nZXRNaW4oKSAtIHRoaXMuX21pbik7XG4gIH07XG5cbiAgdG9TdHJpbmcoKXtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlUaW1lKCk7XG4gIH07XG5cbiAgZ2V0RGlzcGxheUhvdXIoKXtcbiAgICAgIHJldHVybiB0aGlzLl9ob3VyIDwgMjQgPyB0aGlzLl9ob3VyIDogdGhpcy5faG91ciAtIDI0O1xuICB9O1xuXG4gIGdldERpc3BsYXlNaW4oKXtcbiAgICAgIHJldHVybiB0aGlzLl9taW4gPCAxMCA/ICcwJyt0aGlzLl9taW4gOiB0aGlzLl9taW47XG4gIH07XG5cbiAgZ2V0RGlzcGxheVRpbWUoKXtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlIb3VyKCkgKyc6JysgdGhpcy5nZXREaXNwbGF5TWluKCk7XG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzc2VzL1RpbWUuZXM2XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgRG5kQmFja2VuZCBmcm9tICdyZWFjdC1kbmQtdG91Y2gtYmFja2VuZCc7XG5pbXBvcnQgRXZlbnRQcmV2aWV3IGZyb20gJy4vRXZlbnRQcmV2aWV3JztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBMaW5lTGFiZWwgZnJvbSAnLi9MaW5lTGFiZWwnO1xuaW1wb3J0IHsgRHJvcFRhcmdldCB9IGZyb20gJ3JlYWN0LWRuZCc7XG5cblxuY29uc3QgdGFyZ2V0ID0ge1xuICBkcm9wKHByb3BzLCBtb25pdG9yLCBjb21wb25lbnQpIHtcbiAgICBjb25zdCBpdGVtID0gbW9uaXRvci5nZXRJdGVtKCk7XG4gICAgY29uc3QgZGVsdGEgPSBtb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpO1xuXG4gICAgY29uc3QgaW5pdGFsT2Zmc2V0ID0gaXRlbS5kcmFnZ2luZ0NvbXBvbmVudC5nZXRPZmZzZXQoKTtcbiAgICBjb25zdCB0b3AgPSBNYXRoLnJvdW5kKGluaXRhbE9mZnNldC50b3AgKyBkZWx0YS55KTtcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5yb3VuZChpbml0YWxPZmZzZXQubGVmdCArIGRlbHRhLngpO1xuXG4gICAgaXRlbS5kcmFnZ2luZ0NvbXBvbmVudC5tb3ZlVG8odG9wLCBsZWZ0KTtcbiAgfSxcbiAgaG92ZXIocHJvcHMsIG1vbml0b3IsIGNvbXBvbmVudCl7XG4gICAgY29uc3QgY2xpZW50T2Zmc2V0ID0gbW9uaXRvci5nZXRTb3VyY2VDbGllbnRPZmZzZXQoKTtcbiAgICBpZihjbGllbnRPZmZzZXQpe1xuICAgICAgY29uc3QgaXRlbSA9IG1vbml0b3IuZ2V0SXRlbSgpO1xuICAgICAgY29uc3QgbGluZVdyYXBwZXJCb3VuZHMgPSBjb21wb25lbnQucmVmcy5saW5lc1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBsaW5lQ29tcG9uZW50ID0gcHJvcHMudGltZWxpbmUuZHJhZ2dpbmdPdmVyKGNsaWVudE9mZnNldC54IC0gbGluZVdyYXBwZXJCb3VuZHMubGVmdCArIChpdGVtLmRyYWdnaW5nQ29tcG9uZW50LnByb3BzLndpZHRoIC8gMi8qZXZlbnTjga7nnJ/jgpPkuK3jgpLln7rmupbjgavjgZnjgosqLykpO1xuICAgICAgY29uc3QgdGltZSA9IHByb3BzLnRpbWVsaW5lLnRvcFRvVGltZShjbGllbnRPZmZzZXQueSArIGNvbXBvbmVudC5yZWZzLmxpbmVzV3JhcHBlci5zY3JvbGxUb3AgLSBsaW5lV3JhcHBlckJvdW5kcy50b3ApO1xuICAgICAgaXRlbS5kcmFnZ2luZ0NvbXBvbmVudC5kcmFnZ2luZyh0aW1lLCBsaW5lQ29tcG9uZW50ID8gbGluZUNvbXBvbmVudC5wcm9wcy5pZCA6IG51bGwpO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gY29sbGVjdChjb25uZWN0LCBtb25pdG9yKSB7XG4gIHJldHVybiB7XG4gICAgY29ubmVjdERyb3BUYXJnZXQ6IGNvbm5lY3QuZHJvcFRhcmdldCgpXG4gIH07XG59XG5cbmNsYXNzIEZyYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgcnVsZXJJbnRlcnZhbCA9IDQ7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWluV2lkdGg6IDAsXG4gICAgICBldmVudHM6IHRoaXMucHJvcHMuaW5pdGlhbEV2ZW50cyxcbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gIH1cblxuICByZXNpemVVcChldmVudENvbXBvbmVudCwgY2xpY2tlZFRvcCl7XG4gICAgY29uc3QgaW5pdGlhbEhlaWdodCA9IGV2ZW50Q29tcG9uZW50LnN0YXRlLmhlaWdodDtcbiAgICBjb25zdCBwcmV2Qm90dG9tID0gdGhpcy5wcm9wcy50aW1lbGluZS5nZXRQcmV2Qm90dG9tKGV2ZW50Q29tcG9uZW50KTtcbiAgICBjb25zdCBtb3VzZU1vdmVFdmVudCA9IChtb3ZlRXZlbnQpID0+IHtcbiAgICAgIGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IGluaXRpYWxIZWlnaHQgKyBjbGlja2VkVG9wIC0gbW92ZUV2ZW50LmNsaWVudFk7XG4gICAgICBpZih0YXJnZXRIZWlnaHQgPiAzNil7XG4gICAgICAgIGxldCB0YXJnZXRUb3AgPSBldmVudENvbXBvbmVudC5zdGF0ZS50b3AgLSAodGFyZ2V0SGVpZ2h0IC0gZXZlbnRDb21wb25lbnQuc3RhdGUuaGVpZ2h0KTtcbiAgICAgICAgaWYodGFyZ2V0VG9wIDw9IHByZXZCb3R0b20pe1xuICAgICAgICAgIHRhcmdldFRvcCA9IHByZXZCb3R0b207XG4gICAgICAgIH1cblxuICAgICAgICBldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuID0gbmV3IFRpbWVTcGFuKHRoaXMucHJvcHMudGltZWxpbmUudG9wVG9UaW1lKHRhcmdldFRvcCksIGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCkpO1xuICAgICAgICBldmVudENvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQoZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3BhbiksXG4gICAgICAgICAgdG9wOiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcChldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSxcbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6IGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuZ2V0RGlzcGxheVRpbWUoKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc3RvcE1vdmVFdmVudCA9IChtb3VzZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50KTtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BNb3ZlRXZlbnQpO1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gICAgICBldmVudENvbXBvbmVudC5lbmRSZXNpemluZyhtb3VzZUV2ZW50KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcE1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gIH1cblxuICByZXNpemVEb3duKGV2ZW50Q29tcG9uZW50LCBjbGlja2VkVG9wKXtcbiAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gZXZlbnRDb21wb25lbnQuc3RhdGUuaGVpZ2h0O1xuICAgIGNvbnN0IG5leHRUb3AgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmdldE5leHRUb3AoZXZlbnRDb21wb25lbnQpO1xuICAgIGNvbnN0IG1vdXNlTW92ZUV2ZW50ID0gKG1vdmVFdmVudCkgPT4ge1xuICAgICAgZXZlbnRDb21wb25lbnQucmVzaXppbmcgPSB0cnVlO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIG1vdmVFdmVudC5jbGllbnRZIC0gY2xpY2tlZFRvcDtcbiAgICAgIGlmKHRhcmdldEhlaWdodCA+IDM2KXtcbiAgICAgICAgbGV0IHRhcmdldEJvdHRvbSA9IGV2ZW50Q29tcG9uZW50LnN0YXRlLnRvcCArIHRhcmdldEhlaWdodDtcbiAgICAgICAgaWYodGFyZ2V0Qm90dG9tID49IG5leHRUb3Ape1xuICAgICAgICAgIHRhcmdldEJvdHRvbSA9IG5leHRUb3A7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuID0gbmV3IFRpbWVTcGFuKGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSwgdGhpcy5wcm9wcy50aW1lbGluZS50b3BUb1RpbWUodGFyZ2V0Qm90dG9tKSk7XG4gICAgICAgIGV2ZW50Q29tcG9uZW50LnNldFN0YXRlKHtcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodChldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuKSxcbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6IGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4uZ2V0RW5kVGltZSgpLmdldERpc3BsYXlUaW1lKCksXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5VG9wOiB0YXJnZXRIZWlnaHQgLSAxMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc3RvcE1vdmVFdmVudCA9IChtb3VzZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50KTtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BNb3ZlRXZlbnQpO1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gICAgICBldmVudENvbXBvbmVudC5lbmRSZXNpemluZyhtb3VzZUV2ZW50KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcE1vdmVFdmVudCk7XG4gICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc3RvcE1vdmVFdmVudCk7XG4gIH1cblxuICByZW1vdmVFdmVudChldmVudElkKXtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudHM6IHRoaXMuc3RhdGUuZXZlbnRzLmZpbHRlcihldiA9PiBldi5pZCAhPSBldmVudElkKX0pO1xuICB9XG5cbiAgdXBkYXRlRXZlbnRzKGNhbGxiYWNrKXtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudHM6IGNhbGxiYWNrKHRoaXMuc3RhdGUuZXZlbnRzKX0pO1xuICB9XG5cbiAgYWRkRXZlbnRzKGV2ZW50cyl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdmFyIGN1cnJlbnQgPSBbLi4udGhpcy5zdGF0ZS5ldmVudHNdO1xuICAgICAgdmFyIGV2ZW50SWRzID0gW107XG4gICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgIGlmKCFldmVudC5pZCl7XG4gICAgICAgICAgZXZlbnQuaWQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmNyZWF0ZUV2ZW50SWQoKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudElkcy5wdXNoKGV2ZW50LmlkKTtcbiAgICAgICAgY3VycmVudC5wdXNoKGV2ZW50KVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtldmVudHM6IGN1cnJlbnR9LCAoKSA9PiB7XG4gICAgICAgIHZhciByZXN1bHRzID0gdGhpcy5wcm9wcy50aW1lbGluZS5ldmVudENvbXBvbmVudHMuZmlsdGVyKGV2ZW50Q29tcG9uZW50ID0+IHtcbiAgICAgICAgICByZXR1cm4gZXZlbnRJZHMuaW5kZXhPZihldmVudENvbXBvbmVudC5wcm9wcy5pZCkgIT09IC0xO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aGVpZ2h0OiBoZWlnaHR9KTtcbiAgfVxuXG4gIGdldFJlbGF0aXZlUG9zKGUpe1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGUuY2xpZW50WSAtIGUuY3VycmVudFRhcmdldC5vZmZzZXRUb3AgKyBlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wLFxuICAgICAgbGVmdDogZS5jbGllbnRYIC0gZS5jdXJyZW50VGFyZ2V0Lm9mZnNldExlZnQgKyBlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWluV2lkdGg6IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0VG90YWxXaWR0aCgpICsgJ3B4J1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIGNvbnN0IG5ld1N0YXRlID0ge307XG4gICAgLy/jgqTjg5njg7Pjg4jjga/mlbDjgYzlpJrjgYTjga7jgafotbDmn7vjgpLmnIDlsI/pmZDjgavjgZnjgovjgZ/jgoFzdGF0ZeOBq+OBl+OBn+OBjOOAgXRpbWVsaW5l44KS5Li444Gj44Go6Kqt44G/6L6844G/55u044GZ44Gu44Gr5a++5b+c44GZ44KL44Gf44KB44OB44Kn44OD44Kv44CCXG4gICAgLy/jgqTjg5njg7Pjg4jjgpLlpInmm7TjgZnjgovjgajjgY3jga/ln7rmnKx0aW1lbGluZeOBrumWouaVsOe1jOeUseOBp+ihjOOBhOOAgeWFqOOBpuiqreOBv+i+vOOBv+ebtOOBmeaZguOBoOOBkWluaXRpYWxFdmVudHPjgpLlpInmm7TjgZnjgovjgIJcbiAgICBpZihuZXh0UHJvcHMuaW5pdGlhbEV2ZW50cyAhPT0gdGhpcy5wcm9wcy5pbml0aWFsRXZlbnRzKXtcbiAgICAgIG5ld1N0YXRlLmV2ZW50cyA9IG5leHRQcm9wcy5pbml0aWFsRXZlbnRzO1xuICAgIH1cblxuICAgIGlmKG5leHRQcm9wcy5saW5lRGF0YSAhPT0gdGhpcy5wcm9wcy5saW5lRGF0YSl7XG4gICAgICBuZXdTdGF0ZS5taW5XaWR0aCA9IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0VG90YWxXaWR0aCgpICsgJ3B4JztcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgY29ubmVjdERyb3BUYXJnZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGNvbm5lY3REcm9wVGFyZ2V0KFxuICAgICAgPGRpdiByZWY9e2VsZW0gPT4gdGhpcy5lbGVtZW50ID0gZWxlbX0gY2xhc3NOYW1lPVwidGxGcmFtZVZpZXcgc2Nyb2xsV3JhcHBlclwiIHN0eWxlPXt7d2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG92ZXJmbG93WDogJ2F1dG8nfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttaW5XaWR0aDogdGhpcy5zdGF0ZS5taW5XaWR0aH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxMYWJlbFZpZXdcIiBzdHlsZT17e2hlaWdodDogTGluZUxhYmVsLmhlaWdodH19PlxuICAgICAgICAgICAge3RoaXMucHJvcHMubGluZURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaGFzUnVsZXIgPSBrZXkgJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG4gICAgICAgICAgICAgIGNvbnN0IHByZXZSdWxlciA9IChrZXkgKyAxKSAlIHRoaXMucHJvcHMucnVsZXJJbnRlcnZhbCA9PT0gMDtcbiAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxMaW5lTGFiZWxcbiAgICAgICAgICAgICAgICAgIGtleT17ZGF0YS5pZCArIFwiQFwiICsga2V5fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMubGluZVdpZHRofVxuICAgICAgICAgICAgICAgICAgaGFzUnVsZXI9e2hhc1J1bGVyfVxuICAgICAgICAgICAgICAgICAgcHJldlJ1bGVyPXtwcmV2UnVsZXJ9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17ZGF0YS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIHRpbWVsaW5lPXt0aGlzLnByb3BzLnRpbWVsaW5lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgcmVmPVwibGluZXNXcmFwcGVyXCIgY2xhc3NOYW1lPVwidGxMaW5lc1dyYXBwZXIgc2Nyb2xsV3JhcHBlclwiIHN0eWxlPXt7aGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCAtIExpbmVMYWJlbC5oZWlnaHR9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IHRoaXMucHJvcHMubGluZUhlaWdodCwgb3ZlcmZsb3dZOiBcImhpZGRlblwiLCBwb3NpdGlvbjpcInJlbGF0aXZlXCJ9fT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMubGluZURhdGEubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNSdWxlciA9IGtleSAlIHRoaXMucHJvcHMucnVsZXJJbnRlcnZhbCA9PT0gMDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2UnVsZXIgPSAoa2V5ICsgMSkgJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgPExpbmVcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtcImxpbmVAXCIgKyBkYXRhLmlkfVxuICAgICAgICAgICAgICAgICAgICBoYXNSdWxlcj17aGFzUnVsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YS5pZCArIFwiQFwiICsga2V5fVxuICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMubGluZVdpZHRofVxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5wcm9wcy50aW1lU3Bhbn1cbiAgICAgICAgICAgICAgICAgICAgZXZlbj17a2V5ICUgMiA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgdGltZWxpbmU9e3RoaXMucHJvcHMudGltZWxpbmV9XG4gICAgICAgICAgICAgICAgICAgIHZhcnM9e2RhdGEudmFyc31cbiAgICAgICAgICAgICAgICAgICAgZnJhbWU9e3RoaXN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmV2ZW50cy5tYXAoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtcImV2ZW50QFwiICsgZXZlbnQuaWR9XG4gICAgICAgICAgICAgICAgICAgIGtleT17ZXZlbnQua2V5fHxldmVudC5pZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2V2ZW50LmlkfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17ZXZlbnQuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgIHRpbWVTcGFuPXtldmVudC50aW1lU3Bhbn1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17ZXZlbnQuZGlzcGxheX1cbiAgICAgICAgICAgICAgICAgICAgbGluZUlkPXtldmVudC5saW5lSWR9XG4gICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lPXt0aGlzLnByb3BzLnRpbWVsaW5lfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5saW5lV2lkdGggLSAyIC0gKExpbmUuc2lkZVBhZGRpbmcgKiAyKX1cbiAgICAgICAgICAgICAgICAgICAgdmFycz17ZXZlbnQudmFyc31cbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ9e2V2ZW50LmZsb2F0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8RXZlbnRQcmV2aWV3IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEZyYW1lLnByb3BUeXBlcyA9IHtcbi8vICAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuLy8gICBsaW5lRGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbi8vICAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuLy8gICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbi8vICAgfSkpLmlzUmVxdWlyZWQsXG4vLyAgIGxpbmVXaWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4vLyAgIHRpbWVsaW5lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4vLyAgIHJ1bGVySW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbi8vIH1cblxuRnJhbWUuZGVmYXVsdFByb3BzID0ge1xuICBldmVudHM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmFnRHJvcENvbnRleHQoRG5kQmFja2VuZCh7IGVuYWJsZU1vdXNlRXZlbnRzOiB0cnVlIH0pKShEcm9wVGFyZ2V0KFwiRXZlbnRcIiwgdGFyZ2V0LCBjb2xsZWN0KShGcmFtZSkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9GcmFtZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IEhvdXIgZnJvbSAnLi9Ib3VyJztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBMaW5lTGFiZWwgZnJvbSAnLi9MaW5lTGFiZWwnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9UaW1lbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG91cnM6IFtdLFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICAgIGRyYWdnaW5nT3ZlcjogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5wcm9wcy50aW1lU3Bhbi5lYWNoVGltZSgoa2V5LCB0aW1lKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLmhvdXJzLnB1c2goXG4gICAgICAgIDxIb3VyXG4gICAgICAgICAga2V5PXt0aW1lLmdldEhvdXIoKX1cbiAgICAgICAgICB0aW1lPXt0aW1lfVxuICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgdGhpcy52YXJzID0gdGhpcy5wcm9wcy52YXJzIHx8IHt9O1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVUb3AoZSl7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMucHJvcHMuZnJhbWUucmVmcy5saW5lc1dyYXBwZXI7XG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIGUuY2xpZW50WSAtIHBhcmVudFJlY3QudG9wICsgcGFyZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMubGluZURpZENsaWNrKXtcbiAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRvcFRvVGltZSh0aGlzLmdldFJlbGF0aXZlVG9wKGUpKTtcbiAgICAgIHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMubGluZURpZENsaWNrKHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICB0aW1lOiB0aW1lLFxuICAgICAgICBmcmVlTWludXRlOiB0aGlzLnByb3BzLnRpbWVsaW5lLmdldEZyZWVNaW51dGUodGhpcy5wcm9wcy5pZCwgdGltZSksXG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LnJlZnMubGluZXNXcmFwcGVyLnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxMZWZ0OiB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LmVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgICAgICB0b3A6IGUuY2xpZW50WSxcbiAgICAgICAgICBsZWZ0OiBlLmNsaWVudFgsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNvbnRleHRNZW51KGUpe1xuICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMubGluZURpZFJpZ2h0Q2xpY2spe1xuICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5saW5lRGlkUmlnaHRDbGljayh7XG4gICAgICAgIGV2ZW50OiBlLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdnaW5nT3Zlcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nT3ZlcjogdHJ1ZX0pO1xuICB9XG5cbiAgY2xlYXJEcmFnZ2luZ092ZXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZ092ZXI6IGZhbHNlfSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvbkNvbnRleHRNZW51PXtlID0+IHRoaXMub25Db250ZXh0TWVudShlKX0+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIGlmKHRoaXMucHJvcHMuaGFzUnVsZXIpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFJ1bGVyXG4gICAgICAgICAgICAgICAga2V5PXsncnVsZXJfJyArIHRoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0PXt0aGlzLnByb3BzLm1pbkhlaWdodH1cbiAgICAgICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5wcm9wcy50aW1lU3Bhbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCl9XG4gICAgICAgIDxkaXYgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxMaW5lVmlldycsIHt0bEV2ZW46IHRoaXMucHJvcHMuZXZlbiwgdGxPZGQ6ICF0aGlzLnByb3BzLmV2ZW59LCB7dGxPdmVyOiB0aGlzLnN0YXRlLmRyYWdnaW5nT3Zlcn0pfSBzdHlsZT17e3dpZHRoOiB0aGlzLnByb3BzLndpZHRoICsgJ3B4J319PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmhvdXJzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGluZS5zaWRlUGFkZGluZyA9IDE7XG5cbi8vIExpbmUucHJvcFR5cGVzID0ge1xuLy8gICB3aWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuLy8gICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuLy8gICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbi8vICAgZXZlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbi8vICAgLy9UT0RPIOW+queSsOWPgueFp+OBq+OBquOCi+OBruOBp2ltcG9ydOOBp+OBjeOBmuOAguOBqOOCiuOBguOBiOOBmmFueeOBp+OBlOOBvuOBi+OBl+OBpuOBvuOBmeOAglxuLy8gICB0aW1lbGluZTogUmVhY3QuUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuLy8gICBoYXNSdWxlcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxuLy8gfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9MaW5lLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZSBmcm9tICcuLi9jbGFzc2VzL1RpbWUnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG91ciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtaW51dGVzOiBbXVxuICAgIH1cblxuICAgIGNvbnN0IG1pblN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLm1pbkhlaWdodCArICdweCdcbiAgICB9XG4gICAgVGltZS5lYWNoTWluKChrZXksIG1pbikgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5taW51dGVzLnB1c2goXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e21pbn1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3RsTWluVmlldycsICd0bCcgKyAobWluICsgMTUpKX1cbiAgICAgICAgICBzdHlsZT17bWluU3R5bGV9XG4gICAgICAgID4mbmJzcDs8L2Rpdj5cbiAgICAgICk7XG4gICAgfSwgMTUpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bEhvdXJWaWV3XCI+e3RoaXMuc3RhdGUubWludXRlc308L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEhvdXIucHJvcFR5cGVzID0ge1xuLy8gICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgdGltZTogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZSkuaXNSZXF1aXJlZFxuLy8gfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9Ib3VyLmpzeFxuICoqLyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG91cnM6IFtdXG4gICAgfVxuICAgIHRoaXMucHJvcHMudGltZVNwYW4uZWFjaFRpbWUoKGtleSwgdGltZSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIC8vYm9yZGVyMXB444KS6Laz44GZXG4gICAgICAgIGhlaWdodDogKHRoaXMucHJvcHMubWluSGVpZ2h0ICsgMSkgKiA0XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLmhvdXJzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXt0aW1lLmdldEhvdXIoKX0gc3R5bGU9e3N0eWxlfT57dGltZS5nZXREaXNwbGF5SG91cigpfTwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsUnVsZXJWaWV3XCIgc3R5bGU9e3t3aWR0aDogUnVsZXIud2lkdGggKyAncHgnfX0+e3RoaXMuc3RhdGUuaG91cnN9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBSdWxlci5wcm9wVHlwZXMgPSB7XG4vLyAgIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWRcbi8vIH1cblxuUnVsZXIud2lkdGggPSAzMDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUnVsZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lTGFiZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzUnVsZXI6IHRoaXMucHJvcHMuaGFzUnVsZXIsXG4gICAgICBwcmV2UnVsZXI6IHRoaXMucHJvcHMucHJldlJ1bGVyLFxuICAgICAgaXNMYXN0OiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3t3aWR0aDogdGhpcy5wcm9wcy53aWR0aCwgbWFyZ2luTGVmdDogdGhpcy5zdGF0ZS5oYXNSdWxlciA/IFJ1bGVyLndpZHRoICsgJ3B4JyA6IDB9fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe3RsTGFiZWw6IHRydWUsIHRsSGFzUnVsZXI6IHRoaXMuc3RhdGUuaGFzUnVsZXIsIHRsUHJldlJ1bGVyOiB0aGlzLnN0YXRlLnByZXZSdWxlciwgdGxMYXN0OiB0aGlzLnN0YXRlLmlzTGFzdH0pfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGluZUxhYmVsLmhlaWdodCA9IDE2O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9MaW5lTGFiZWwuanN4XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmUob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmpbJ2RlZmF1bHQnXSA6IG9iajsgfVxuXG52YXIgX0RyYWdEcm9wQ29udGV4dCA9IHJlcXVpcmUoJy4vRHJhZ0Ryb3BDb250ZXh0Jyk7XG5cbmV4cG9ydHMuRHJhZ0Ryb3BDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlKF9EcmFnRHJvcENvbnRleHQpO1xuXG52YXIgX0RyYWdMYXllciA9IHJlcXVpcmUoJy4vRHJhZ0xheWVyJyk7XG5cbmV4cG9ydHMuRHJhZ0xheWVyID0gX2ludGVyb3BSZXF1aXJlKF9EcmFnTGF5ZXIpO1xuXG52YXIgX0RyYWdTb3VyY2UgPSByZXF1aXJlKCcuL0RyYWdTb3VyY2UnKTtcblxuZXhwb3J0cy5EcmFnU291cmNlID0gX2ludGVyb3BSZXF1aXJlKF9EcmFnU291cmNlKTtcblxudmFyIF9Ecm9wVGFyZ2V0ID0gcmVxdWlyZSgnLi9Ecm9wVGFyZ2V0Jyk7XG5cbmV4cG9ydHMuRHJvcFRhcmdldCA9IF9pbnRlcm9wUmVxdWlyZShfRHJvcFRhcmdldCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyYWdEcm9wQ29udGV4dDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2RuZENvcmUgPSByZXF1aXJlKCdkbmQtY29yZScpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMgPSByZXF1aXJlKCcuL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzJyk7XG5cbnZhciBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzKTtcblxuZnVuY3Rpb24gRHJhZ0Ryb3BDb250ZXh0KGJhY2tlbmRPck1vZHVsZSkge1xuICBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czJbJ2RlZmF1bHQnXS5hcHBseSh1bmRlZmluZWQsIFsnRHJhZ0Ryb3BDb250ZXh0JywgJ2JhY2tlbmQnXS5jb25jYXQoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuXG4gIC8vIEF1dG8tZGV0ZWN0IEVTNiBkZWZhdWx0IGV4cG9ydCBmb3IgcGVvcGxlIHN0aWxsIHVzaW5nIEVTNVxuICB2YXIgYmFja2VuZCA9IHVuZGVmaW5lZDtcbiAgaWYgKHR5cGVvZiBiYWNrZW5kT3JNb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBiYWNrZW5kT3JNb2R1bGVbJ2RlZmF1bHQnXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGJhY2tlbmQgPSBiYWNrZW5kT3JNb2R1bGVbJ2RlZmF1bHQnXTtcbiAgfSBlbHNlIHtcbiAgICBiYWNrZW5kID0gYmFja2VuZE9yTW9kdWxlO1xuICB9XG5cbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgYmFja2VuZCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIHRoZSBiYWNrZW5kIHRvIGJlIGEgZnVuY3Rpb24gb3IgYW4gRVM2IG1vZHVsZSBleHBvcnRpbmcgYSBkZWZhdWx0IGZ1bmN0aW9uLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctZHJvcC1jb250ZXh0Lmh0bWwnKTtcblxuICB2YXIgY2hpbGRDb250ZXh0ID0ge1xuICAgIGRyYWdEcm9wTWFuYWdlcjogbmV3IF9kbmRDb3JlLkRyYWdEcm9wTWFuYWdlcihiYWNrZW5kKVxuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0ZUNvbnRleHQoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gRGVjb3JhdGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IERlY29yYXRlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuXG4gICAgcmV0dXJuIChmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKERyYWdEcm9wQ29udGV4dENvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIERyYWdEcm9wQ29udGV4dENvbnRhaW5lcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdEcm9wQ29udGV4dENvbnRhaW5lcik7XG5cbiAgICAgICAgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBEcmFnRHJvcENvbnRleHRDb250YWluZXIucHJvdG90eXBlLmdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMuY2hpbGQ7XG4gICAgICB9O1xuXG4gICAgICBEcmFnRHJvcENvbnRleHRDb250YWluZXIucHJvdG90eXBlLmdldE1hbmFnZXIgPSBmdW5jdGlvbiBnZXRNYW5hZ2VyKCkge1xuICAgICAgICByZXR1cm4gY2hpbGRDb250ZXh0LmRyYWdEcm9wTWFuYWdlcjtcbiAgICAgIH07XG5cbiAgICAgIERyYWdEcm9wQ29udGV4dENvbnRhaW5lci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gY2hpbGRDb250ZXh0O1xuICAgICAgfTtcblxuICAgICAgRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChEZWNvcmF0ZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgcmVmOiAnY2hpbGQnIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhEcmFnRHJvcENvbnRleHRDb250YWluZXIsIG51bGwsIFt7XG4gICAgICAgIGtleTogJ0RlY29yYXRlZENvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBEZWNvcmF0ZWRDb21wb25lbnQsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzcGxheU5hbWUnLFxuICAgICAgICB2YWx1ZTogJ0RyYWdEcm9wQ29udGV4dCgnICsgZGlzcGxheU5hbWUgKyAnKScsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2hpbGRDb250ZXh0VHlwZXMnLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGRyYWdEcm9wTWFuYWdlcjogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBEcmFnRHJvcENvbnRleHRDb250YWluZXI7XG4gICAgfSkoX3JlYWN0LkNvbXBvbmVudCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvRHJhZ0Ryb3BDb250ZXh0LmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqWydkZWZhdWx0J10gOiBvYmo7IH1cblxudmFyIF9EcmFnRHJvcE1hbmFnZXIgPSByZXF1aXJlKCcuL0RyYWdEcm9wTWFuYWdlcicpO1xuXG5leHBvcnRzLkRyYWdEcm9wTWFuYWdlciA9IF9pbnRlcm9wUmVxdWlyZShfRHJhZ0Ryb3BNYW5hZ2VyKTtcblxudmFyIF9EcmFnU291cmNlID0gcmVxdWlyZSgnLi9EcmFnU291cmNlJyk7XG5cbmV4cG9ydHMuRHJhZ1NvdXJjZSA9IF9pbnRlcm9wUmVxdWlyZShfRHJhZ1NvdXJjZSk7XG5cbnZhciBfRHJvcFRhcmdldCA9IHJlcXVpcmUoJy4vRHJvcFRhcmdldCcpO1xuXG5leHBvcnRzLkRyb3BUYXJnZXQgPSBfaW50ZXJvcFJlcXVpcmUoX0Ryb3BUYXJnZXQpO1xuXG52YXIgX2JhY2tlbmRzQ3JlYXRlVGVzdEJhY2tlbmQgPSByZXF1aXJlKCcuL2JhY2tlbmRzL2NyZWF0ZVRlc3RCYWNrZW5kJyk7XG5cbmV4cG9ydHMuY3JlYXRlVGVzdEJhY2tlbmQgPSBfaW50ZXJvcFJlcXVpcmUoX2JhY2tlbmRzQ3JlYXRlVGVzdEJhY2tlbmQpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbJ2RlZmF1bHQnXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfcmVkdXhMaWJDcmVhdGVTdG9yZSA9IHJlcXVpcmUoJ3JlZHV4L2xpYi9jcmVhdGVTdG9yZScpO1xuXG52YXIgX3JlZHV4TGliQ3JlYXRlU3RvcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVkdXhMaWJDcmVhdGVTdG9yZSk7XG5cbnZhciBfcmVkdWNlcnMgPSByZXF1aXJlKCcuL3JlZHVjZXJzJyk7XG5cbnZhciBfcmVkdWNlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVkdWNlcnMpO1xuXG52YXIgX2FjdGlvbnNEcmFnRHJvcCA9IHJlcXVpcmUoJy4vYWN0aW9ucy9kcmFnRHJvcCcpO1xuXG52YXIgZHJhZ0Ryb3BBY3Rpb25zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2FjdGlvbnNEcmFnRHJvcCk7XG5cbnZhciBfRHJhZ0Ryb3BNb25pdG9yID0gcmVxdWlyZSgnLi9EcmFnRHJvcE1vbml0b3InKTtcblxudmFyIF9EcmFnRHJvcE1vbml0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJhZ0Ryb3BNb25pdG9yKTtcblxudmFyIF9IYW5kbGVyUmVnaXN0cnkgPSByZXF1aXJlKCcuL0hhbmRsZXJSZWdpc3RyeScpO1xuXG52YXIgX0hhbmRsZXJSZWdpc3RyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IYW5kbGVyUmVnaXN0cnkpO1xuXG52YXIgRHJhZ0Ryb3BNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRHJhZ0Ryb3BNYW5hZ2VyKGNyZWF0ZUJhY2tlbmQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0Ryb3BNYW5hZ2VyKTtcblxuICAgIHZhciBzdG9yZSA9IF9yZWR1eExpYkNyZWF0ZVN0b3JlMlsnZGVmYXVsdCddKF9yZWR1Y2VyczJbJ2RlZmF1bHQnXSk7XG5cbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5tb25pdG9yID0gbmV3IF9EcmFnRHJvcE1vbml0b3IyWydkZWZhdWx0J10oc3RvcmUpO1xuICAgIHRoaXMucmVnaXN0cnkgPSB0aGlzLm1vbml0b3IucmVnaXN0cnk7XG4gICAgdGhpcy5iYWNrZW5kID0gY3JlYXRlQmFja2VuZCh0aGlzKTtcblxuICAgIHN0b3JlLnN1YnNjcmliZSh0aGlzLmhhbmRsZVJlZkNvdW50Q2hhbmdlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgRHJhZ0Ryb3BNYW5hZ2VyLnByb3RvdHlwZS5oYW5kbGVSZWZDb3VudENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVJlZkNvdW50Q2hhbmdlKCkge1xuICAgIHZhciBzaG91bGRTZXRVcCA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5yZWZDb3VudCA+IDA7XG4gICAgaWYgKHNob3VsZFNldFVwICYmICF0aGlzLmlzU2V0VXApIHtcbiAgICAgIHRoaXMuYmFja2VuZC5zZXR1cCgpO1xuICAgICAgdGhpcy5pc1NldFVwID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFzaG91bGRTZXRVcCAmJiB0aGlzLmlzU2V0VXApIHtcbiAgICAgIHRoaXMuYmFja2VuZC50ZWFyZG93bigpO1xuICAgICAgdGhpcy5pc1NldFVwID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIERyYWdEcm9wTWFuYWdlci5wcm90b3R5cGUuZ2V0TW9uaXRvciA9IGZ1bmN0aW9uIGdldE1vbml0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9uaXRvcjtcbiAgfTtcblxuICBEcmFnRHJvcE1hbmFnZXIucHJvdG90eXBlLmdldEJhY2tlbmQgPSBmdW5jdGlvbiBnZXRCYWNrZW5kKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2tlbmQ7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNYW5hZ2VyLnByb3RvdHlwZS5nZXRSZWdpc3RyeSA9IGZ1bmN0aW9uIGdldFJlZ2lzdHJ5KCkge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5O1xuICB9O1xuXG4gIERyYWdEcm9wTWFuYWdlci5wcm90b3R5cGUuZ2V0QWN0aW9ucyA9IGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgdmFyIG1hbmFnZXIgPSB0aGlzO1xuICAgIHZhciBkaXNwYXRjaCA9IHRoaXMuc3RvcmUuZGlzcGF0Y2g7XG5cbiAgICBmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gYWN0aW9uQ3JlYXRvci5hcHBseShtYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBkaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhkcmFnRHJvcEFjdGlvbnMpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGRyYWdEcm9wQWN0aW9uc1trZXldID09PSAnZnVuY3Rpb24nO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYm91bmRBY3Rpb25zLCBrZXkpIHtcbiAgICAgIGJvdW5kQWN0aW9uc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoZHJhZ0Ryb3BBY3Rpb25zW2tleV0pO1xuICAgICAgcmV0dXJuIGJvdW5kQWN0aW9ucztcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgcmV0dXJuIERyYWdEcm9wTWFuYWdlcjtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyYWdEcm9wTWFuYWdlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9EcmFnRHJvcE1hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5BY3Rpb25UeXBlcyA9IHVuZGVmaW5lZDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlU3RvcmU7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF9zeW1ib2xPYnNlcnZhYmxlID0gcmVxdWlyZSgnc3ltYm9sLW9ic2VydmFibGUnKTtcblxudmFyIF9zeW1ib2xPYnNlcnZhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbE9ic2VydmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciBBY3Rpb25UeXBlcyA9IGV4cG9ydHMuQWN0aW9uVHlwZXMgPSB7XG4gIElOSVQ6ICdAQHJlZHV4L0lOSVQnXG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gKlxuICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICpcbiAqIEBwYXJhbSB7YW55fSBbaW5pdGlhbFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmhhbmNlciBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IGluaXRpYWxTdGF0ZTtcbiAgICBpbml0aWFsU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCEoMCwgX2lzUGxhaW5PYmplY3QyW1wiZGVmYXVsdFwiXSkoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5wYXJzaW5nL2VzLW9ic2VydmFibGVcbiAgICovXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7IHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbX3N5bWJvbE9ic2VydmFibGUyW1wiZGVmYXVsdFwiXV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9XG5cbiAgLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG4gIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbX3N5bWJvbE9ic2VydmFibGUyW1wiZGVmYXVsdFwiXV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC9saWIvY3JlYXRlU3RvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzSG9zdE9iamVjdCA9IHJlcXVpcmUoJy4vX2lzSG9zdE9iamVjdCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fFxuICAgICAgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT0gb2JqZWN0VGFnIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmXG4gICAgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiYgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQbGFpbk9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbi8qKlxuICogR2V0cyB0aGUgYFtbUHJvdG90eXBlXV1gIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge251bGx8T2JqZWN0fSBSZXR1cm5zIHRoZSBgW1tQcm90b3R5cGVdXWAuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3RvdHlwZSh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlR2V0UHJvdG90eXBlKE9iamVjdCh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNIb3N0T2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19pc0hvc3RPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBnbG9iYWwgd2luZG93ICovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9wb255ZmlsbCcpKGdsb2JhbCB8fCB3aW5kb3cgfHwgdGhpcyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKFN5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRTeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N5bWJvbC1vYnNlcnZhYmxlL3BvbnlmaWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2RyYWdPZmZzZXQgPSByZXF1aXJlKCcuL2RyYWdPZmZzZXQnKTtcblxudmFyIF9kcmFnT2Zmc2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RyYWdPZmZzZXQpO1xuXG52YXIgX2RyYWdPcGVyYXRpb24gPSByZXF1aXJlKCcuL2RyYWdPcGVyYXRpb24nKTtcblxudmFyIF9kcmFnT3BlcmF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RyYWdPcGVyYXRpb24pO1xuXG52YXIgX3JlZkNvdW50ID0gcmVxdWlyZSgnLi9yZWZDb3VudCcpO1xuXG52YXIgX3JlZkNvdW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZkNvdW50KTtcblxudmFyIF9kaXJ0eUhhbmRsZXJJZHMgPSByZXF1aXJlKCcuL2RpcnR5SGFuZGxlcklkcycpO1xuXG52YXIgX2RpcnR5SGFuZGxlcklkczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaXJ0eUhhbmRsZXJJZHMpO1xuXG52YXIgX3N0YXRlSWQgPSByZXF1aXJlKCcuL3N0YXRlSWQnKTtcblxudmFyIF9zdGF0ZUlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlSWQpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgc3RhdGUgPSB7fTtcblxuICByZXR1cm4ge1xuICAgIGRpcnR5SGFuZGxlcklkczogX2RpcnR5SGFuZGxlcklkczJbJ2RlZmF1bHQnXShzdGF0ZS5kaXJ0eUhhbmRsZXJJZHMsIGFjdGlvbiwgc3RhdGUuZHJhZ09wZXJhdGlvbiksXG4gICAgZHJhZ09mZnNldDogX2RyYWdPZmZzZXQyWydkZWZhdWx0J10oc3RhdGUuZHJhZ09mZnNldCwgYWN0aW9uKSxcbiAgICByZWZDb3VudDogX3JlZkNvdW50MlsnZGVmYXVsdCddKHN0YXRlLnJlZkNvdW50LCBhY3Rpb24pLFxuICAgIGRyYWdPcGVyYXRpb246IF9kcmFnT3BlcmF0aW9uMlsnZGVmYXVsdCddKHN0YXRlLmRyYWdPcGVyYXRpb24sIGFjdGlvbiksXG4gICAgc3RhdGVJZDogX3N0YXRlSWQyWydkZWZhdWx0J10oc3RhdGUuc3RhdGVJZClcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRyYWdPZmZzZXQ7XG5leHBvcnRzLmdldFNvdXJjZUNsaWVudE9mZnNldCA9IGdldFNvdXJjZUNsaWVudE9mZnNldDtcbmV4cG9ydHMuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0ID0gZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0O1xuXG52YXIgX2FjdGlvbnNEcmFnRHJvcCA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZHJhZ0Ryb3AnKTtcblxudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldDogbnVsbCxcbiAgaW5pdGlhbENsaWVudE9mZnNldDogbnVsbCxcbiAgY2xpZW50T2Zmc2V0OiBudWxsXG59O1xuXG5mdW5jdGlvbiBhcmVPZmZzZXRzRXF1YWwob2Zmc2V0QSwgb2Zmc2V0Qikge1xuICBpZiAob2Zmc2V0QSA9PT0gb2Zmc2V0Qikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBvZmZzZXRBICYmIG9mZnNldEIgJiYgb2Zmc2V0QS54ID09PSBvZmZzZXRCLnggJiYgb2Zmc2V0QS55ID09PSBvZmZzZXRCLnk7XG59XG5cbmZ1bmN0aW9uIGRyYWdPZmZzZXQoc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5CRUdJTl9EUkFHOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldDogYWN0aW9uLnNvdXJjZUNsaWVudE9mZnNldCxcbiAgICAgICAgaW5pdGlhbENsaWVudE9mZnNldDogYWN0aW9uLmNsaWVudE9mZnNldCxcbiAgICAgICAgY2xpZW50T2Zmc2V0OiBhY3Rpb24uY2xpZW50T2Zmc2V0XG4gICAgICB9O1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5IT1ZFUjpcbiAgICAgIGlmIChhcmVPZmZzZXRzRXF1YWwoc3RhdGUuY2xpZW50T2Zmc2V0LCBhY3Rpb24uY2xpZW50T2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNsaWVudE9mZnNldDogYWN0aW9uLmNsaWVudE9mZnNldFxuICAgICAgfSk7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkVORF9EUkFHOlxuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5EUk9QOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUNsaWVudE9mZnNldChzdGF0ZSkge1xuICB2YXIgY2xpZW50T2Zmc2V0ID0gc3RhdGUuY2xpZW50T2Zmc2V0O1xuICB2YXIgaW5pdGlhbENsaWVudE9mZnNldCA9IHN0YXRlLmluaXRpYWxDbGllbnRPZmZzZXQ7XG4gIHZhciBpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0ID0gc3RhdGUuaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldDtcblxuICBpZiAoIWNsaWVudE9mZnNldCB8fCAhaW5pdGlhbENsaWVudE9mZnNldCB8fCAhaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgeDogY2xpZW50T2Zmc2V0LnggKyBpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0LnggLSBpbml0aWFsQ2xpZW50T2Zmc2V0LngsXG4gICAgeTogY2xpZW50T2Zmc2V0LnkgKyBpbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0LnkgLSBpbml0aWFsQ2xpZW50T2Zmc2V0LnlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KHN0YXRlKSB7XG4gIHZhciBjbGllbnRPZmZzZXQgPSBzdGF0ZS5jbGllbnRPZmZzZXQ7XG4gIHZhciBpbml0aWFsQ2xpZW50T2Zmc2V0ID0gc3RhdGUuaW5pdGlhbENsaWVudE9mZnNldDtcblxuICBpZiAoIWNsaWVudE9mZnNldCB8fCAhaW5pdGlhbENsaWVudE9mZnNldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgeDogY2xpZW50T2Zmc2V0LnggLSBpbml0aWFsQ2xpZW50T2Zmc2V0LngsXG4gICAgeTogY2xpZW50T2Zmc2V0LnkgLSBpbml0aWFsQ2xpZW50T2Zmc2V0LnlcbiAgfTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvZHJhZ09mZnNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmJlZ2luRHJhZyA9IGJlZ2luRHJhZztcbmV4cG9ydHMucHVibGlzaERyYWdTb3VyY2UgPSBwdWJsaXNoRHJhZ1NvdXJjZTtcbmV4cG9ydHMuaG92ZXIgPSBob3ZlcjtcbmV4cG9ydHMuZHJvcCA9IGRyb3A7XG5leHBvcnRzLmVuZERyYWcgPSBlbmREcmFnO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbHNNYXRjaGVzVHlwZSA9IHJlcXVpcmUoJy4uL3V0aWxzL21hdGNoZXNUeXBlJyk7XG5cbnZhciBfdXRpbHNNYXRjaGVzVHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc01hdGNoZXNUeXBlKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9sb2Rhc2hJc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKTtcblxudmFyIF9sb2Rhc2hJc0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzQXJyYXkpO1xuXG52YXIgX2xvZGFzaElzT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzT2JqZWN0Jyk7XG5cbnZhciBfbG9kYXNoSXNPYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNPYmplY3QpO1xuXG52YXIgQkVHSU5fRFJBRyA9ICdkbmQtY29yZS9CRUdJTl9EUkFHJztcbmV4cG9ydHMuQkVHSU5fRFJBRyA9IEJFR0lOX0RSQUc7XG52YXIgUFVCTElTSF9EUkFHX1NPVVJDRSA9ICdkbmQtY29yZS9QVUJMSVNIX0RSQUdfU09VUkNFJztcbmV4cG9ydHMuUFVCTElTSF9EUkFHX1NPVVJDRSA9IFBVQkxJU0hfRFJBR19TT1VSQ0U7XG52YXIgSE9WRVIgPSAnZG5kLWNvcmUvSE9WRVInO1xuZXhwb3J0cy5IT1ZFUiA9IEhPVkVSO1xudmFyIERST1AgPSAnZG5kLWNvcmUvRFJPUCc7XG5leHBvcnRzLkRST1AgPSBEUk9QO1xudmFyIEVORF9EUkFHID0gJ2RuZC1jb3JlL0VORF9EUkFHJztcblxuZXhwb3J0cy5FTkRfRFJBRyA9IEVORF9EUkFHO1xuXG5mdW5jdGlvbiBiZWdpbkRyYWcoc291cmNlSWRzKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgdmFyIF9yZWYkcHVibGlzaFNvdXJjZSA9IF9yZWYucHVibGlzaFNvdXJjZTtcbiAgdmFyIHB1Ymxpc2hTb3VyY2UgPSBfcmVmJHB1Ymxpc2hTb3VyY2UgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJHB1Ymxpc2hTb3VyY2U7XG4gIHZhciBfcmVmJGNsaWVudE9mZnNldCA9IF9yZWYuY2xpZW50T2Zmc2V0O1xuICB2YXIgY2xpZW50T2Zmc2V0ID0gX3JlZiRjbGllbnRPZmZzZXQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcmVmJGNsaWVudE9mZnNldDtcbiAgdmFyIGdldFNvdXJjZUNsaWVudE9mZnNldCA9IF9yZWYuZ2V0U291cmNlQ2xpZW50T2Zmc2V0O1xuXG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzQXJyYXkyWydkZWZhdWx0J10oc291cmNlSWRzKSwgJ0V4cGVjdGVkIHNvdXJjZUlkcyB0byBiZSBhbiBhcnJheS4nKTtcblxuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICB2YXIgcmVnaXN0cnkgPSB0aGlzLmdldFJlZ2lzdHJ5KCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oIW1vbml0b3IuaXNEcmFnZ2luZygpLCAnQ2Fubm90IGNhbGwgYmVnaW5EcmFnIHdoaWxlIGRyYWdnaW5nLicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlSWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShyZWdpc3RyeS5nZXRTb3VyY2Uoc291cmNlSWRzW2ldKSwgJ0V4cGVjdGVkIHNvdXJjZUlkcyB0byBiZSByZWdpc3RlcmVkLicpO1xuICB9XG5cbiAgdmFyIHNvdXJjZUlkID0gbnVsbDtcbiAgZm9yICh2YXIgaSA9IHNvdXJjZUlkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChtb25pdG9yLmNhbkRyYWdTb3VyY2Uoc291cmNlSWRzW2ldKSkge1xuICAgICAgc291cmNlSWQgPSBzb3VyY2VJZHNbaV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKHNvdXJjZUlkID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNvdXJjZUNsaWVudE9mZnNldCA9IG51bGw7XG4gIGlmIChjbGllbnRPZmZzZXQpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBnZXRTb3VyY2VDbGllbnRPZmZzZXQgPT09ICdmdW5jdGlvbicsICdXaGVuIGNsaWVudE9mZnNldCBpcyBwcm92aWRlZCwgZ2V0U291cmNlQ2xpZW50T2Zmc2V0IG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICBzb3VyY2VDbGllbnRPZmZzZXQgPSBnZXRTb3VyY2VDbGllbnRPZmZzZXQoc291cmNlSWQpO1xuICB9XG5cbiAgdmFyIHNvdXJjZSA9IHJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZCk7XG4gIHZhciBpdGVtID0gc291cmNlLmJlZ2luRHJhZyhtb25pdG9yLCBzb3VyY2VJZCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzT2JqZWN0MlsnZGVmYXVsdCddKGl0ZW0pLCAnSXRlbSBtdXN0IGJlIGFuIG9iamVjdC4nKTtcblxuICByZWdpc3RyeS5waW5Tb3VyY2Uoc291cmNlSWQpO1xuXG4gIHZhciBpdGVtVHlwZSA9IHJlZ2lzdHJ5LmdldFNvdXJjZVR5cGUoc291cmNlSWQpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEJFR0lOX0RSQUcsXG4gICAgaXRlbVR5cGU6IGl0ZW1UeXBlLFxuICAgIGl0ZW06IGl0ZW0sXG4gICAgc291cmNlSWQ6IHNvdXJjZUlkLFxuICAgIGNsaWVudE9mZnNldDogY2xpZW50T2Zmc2V0LFxuICAgIHNvdXJjZUNsaWVudE9mZnNldDogc291cmNlQ2xpZW50T2Zmc2V0LFxuICAgIGlzU291cmNlUHVibGljOiBwdWJsaXNoU291cmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hEcmFnU291cmNlKG1hbmFnZXIpIHtcbiAgdmFyIG1vbml0b3IgPSB0aGlzLmdldE1vbml0b3IoKTtcbiAgaWYgKCFtb25pdG9yLmlzRHJhZ2dpbmcoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogUFVCTElTSF9EUkFHX1NPVVJDRVxuICB9O1xufVxuXG5mdW5jdGlvbiBob3Zlcih0YXJnZXRJZHMpIHtcbiAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgdmFyIF9yZWYyJGNsaWVudE9mZnNldCA9IF9yZWYyLmNsaWVudE9mZnNldDtcbiAgdmFyIGNsaWVudE9mZnNldCA9IF9yZWYyJGNsaWVudE9mZnNldCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWYyJGNsaWVudE9mZnNldDtcblxuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF9sb2Rhc2hJc0FycmF5MlsnZGVmYXVsdCddKHRhcmdldElkcyksICdFeHBlY3RlZCB0YXJnZXRJZHMgdG8gYmUgYW4gYXJyYXkuJyk7XG4gIHRhcmdldElkcyA9IHRhcmdldElkcy5zbGljZSgwKTtcblxuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICB2YXIgcmVnaXN0cnkgPSB0aGlzLmdldFJlZ2lzdHJ5KCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10obW9uaXRvci5pc0RyYWdnaW5nKCksICdDYW5ub3QgY2FsbCBob3ZlciB3aGlsZSBub3QgZHJhZ2dpbmcuJyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oIW1vbml0b3IuZGlkRHJvcCgpLCAnQ2Fubm90IGNhbGwgaG92ZXIgYWZ0ZXIgZHJvcC4nKTtcblxuICAvLyBGaXJzdCBjaGVjayBpbnZhcmlhbnRzLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldElkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0YXJnZXRJZCA9IHRhcmdldElkc1tpXTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRhcmdldElkcy5sYXN0SW5kZXhPZih0YXJnZXRJZCkgPT09IGksICdFeHBlY3RlZCB0YXJnZXRJZHMgdG8gYmUgdW5pcXVlIGluIHRoZSBwYXNzZWQgYXJyYXkuJyk7XG5cbiAgICB2YXIgdGFyZ2V0ID0gcmVnaXN0cnkuZ2V0VGFyZ2V0KHRhcmdldElkKTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRhcmdldCwgJ0V4cGVjdGVkIHRhcmdldElkcyB0byBiZSByZWdpc3RlcmVkLicpO1xuICB9XG5cbiAgdmFyIGRyYWdnZWRJdGVtVHlwZSA9IG1vbml0b3IuZ2V0SXRlbVR5cGUoKTtcblxuICAvLyBSZW1vdmUgdGhvc2UgdGFyZ2V0SWRzIHRoYXQgZG9uJ3QgbWF0Y2ggdGhlIHRhcmdldFR5cGUuICBUaGlzXG4gIC8vIGZpeGVzIHNoYWxsb3cgaXNPdmVyIHdoaWNoIHdvdWxkIG9ubHkgYmUgbm9uLXNoYWxsb3cgYmVjYXVzZSBvZlxuICAvLyBub24tbWF0Y2hpbmcgdGFyZ2V0cy5cbiAgZm9yICh2YXIgaSA9IHRhcmdldElkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciB0YXJnZXRJZCA9IHRhcmdldElkc1tpXTtcbiAgICB2YXIgdGFyZ2V0VHlwZSA9IHJlZ2lzdHJ5LmdldFRhcmdldFR5cGUodGFyZ2V0SWQpO1xuICAgIGlmICghX3V0aWxzTWF0Y2hlc1R5cGUyWydkZWZhdWx0J10odGFyZ2V0VHlwZSwgZHJhZ2dlZEl0ZW1UeXBlKSkge1xuICAgICAgdGFyZ2V0SWRzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaW5hbGx5IGNhbGwgaG92ZXIgb24gYWxsIG1hdGNoaW5nIHRhcmdldHMuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0SWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRhcmdldElkID0gdGFyZ2V0SWRzW2ldO1xuICAgIHZhciB0YXJnZXQgPSByZWdpc3RyeS5nZXRUYXJnZXQodGFyZ2V0SWQpO1xuICAgIHRhcmdldC5ob3Zlcihtb25pdG9yLCB0YXJnZXRJZCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IEhPVkVSLFxuICAgIHRhcmdldElkczogdGFyZ2V0SWRzLFxuICAgIGNsaWVudE9mZnNldDogY2xpZW50T2Zmc2V0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRyb3AoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIG1vbml0b3IgPSB0aGlzLmdldE1vbml0b3IoKTtcbiAgdmFyIHJlZ2lzdHJ5ID0gdGhpcy5nZXRSZWdpc3RyeSgpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKG1vbml0b3IuaXNEcmFnZ2luZygpLCAnQ2Fubm90IGNhbGwgZHJvcCB3aGlsZSBub3QgZHJhZ2dpbmcuJyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oIW1vbml0b3IuZGlkRHJvcCgpLCAnQ2Fubm90IGNhbGwgZHJvcCB0d2ljZSBkdXJpbmcgb25lIGRyYWcgb3BlcmF0aW9uLicpO1xuXG4gIHZhciB0YXJnZXRJZHMgPSBtb25pdG9yLmdldFRhcmdldElkcygpLmZpbHRlcihtb25pdG9yLmNhbkRyb3BPblRhcmdldCwgbW9uaXRvcik7XG5cbiAgdGFyZ2V0SWRzLnJldmVyc2UoKTtcbiAgdGFyZ2V0SWRzLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldElkLCBpbmRleCkge1xuICAgIHZhciB0YXJnZXQgPSByZWdpc3RyeS5nZXRUYXJnZXQodGFyZ2V0SWQpO1xuXG4gICAgdmFyIGRyb3BSZXN1bHQgPSB0YXJnZXQuZHJvcChtb25pdG9yLCB0YXJnZXRJZCk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgZHJvcFJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcgfHwgX2xvZGFzaElzT2JqZWN0MlsnZGVmYXVsdCddKGRyb3BSZXN1bHQpLCAnRHJvcCByZXN1bHQgbXVzdCBlaXRoZXIgYmUgYW4gb2JqZWN0IG9yIHVuZGVmaW5lZC4nKTtcbiAgICBpZiAodHlwZW9mIGRyb3BSZXN1bHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkcm9wUmVzdWx0ID0gaW5kZXggPT09IDAgPyB7fSA6IG1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xuICAgIH1cblxuICAgIF90aGlzLnN0b3JlLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IERST1AsXG4gICAgICBkcm9wUmVzdWx0OiBkcm9wUmVzdWx0XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmREcmFnKCkge1xuICB2YXIgbW9uaXRvciA9IHRoaXMuZ2V0TW9uaXRvcigpO1xuICB2YXIgcmVnaXN0cnkgPSB0aGlzLmdldFJlZ2lzdHJ5KCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10obW9uaXRvci5pc0RyYWdnaW5nKCksICdDYW5ub3QgY2FsbCBlbmREcmFnIHdoaWxlIG5vdCBkcmFnZ2luZy4nKTtcblxuICB2YXIgc291cmNlSWQgPSBtb25pdG9yLmdldFNvdXJjZUlkKCk7XG4gIHZhciBzb3VyY2UgPSByZWdpc3RyeS5nZXRTb3VyY2Uoc291cmNlSWQsIHRydWUpO1xuICBzb3VyY2UuZW5kRHJhZyhtb25pdG9yLCBzb3VyY2VJZCk7XG5cbiAgcmVnaXN0cnkudW5waW5Tb3VyY2UoKTtcblxuICByZXR1cm4ge1xuICAgIHR5cGU6IEVORF9EUkFHXG4gIH07XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL2FjdGlvbnMvZHJhZ0Ryb3AuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gbWF0Y2hlc1R5cGU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hJc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKTtcblxudmFyIF9sb2Rhc2hJc0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzQXJyYXkpO1xuXG5mdW5jdGlvbiBtYXRjaGVzVHlwZSh0YXJnZXRUeXBlLCBkcmFnZ2VkSXRlbVR5cGUpIHtcbiAgaWYgKF9sb2Rhc2hJc0FycmF5MlsnZGVmYXVsdCddKHRhcmdldFR5cGUpKSB7XG4gICAgcmV0dXJuIHRhcmdldFR5cGUuc29tZShmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQgPT09IGRyYWdnZWRJdGVtVHlwZTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGFyZ2V0VHlwZSA9PT0gZHJhZ2dlZEl0ZW1UeXBlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi91dGlscy9tYXRjaGVzVHlwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQHR5cGUge0Z1bmN0aW9ufVxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNBcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW52YXJpYW50L2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0IGRvbid0IGJyZWFrIHRoaW5ncy5cbnZhciBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IGNhY2hlZFNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNhY2hlZENsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBkcmFnT3BlcmF0aW9uO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfYWN0aW9uc0RyYWdEcm9wID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9kcmFnRHJvcCcpO1xuXG52YXIgX2FjdGlvbnNSZWdpc3RyeSA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvcmVnaXN0cnknKTtcblxudmFyIF9sb2Rhc2hXaXRob3V0ID0gcmVxdWlyZSgnbG9kYXNoL3dpdGhvdXQnKTtcblxudmFyIF9sb2Rhc2hXaXRob3V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaFdpdGhvdXQpO1xuXG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICBpdGVtVHlwZTogbnVsbCxcbiAgaXRlbTogbnVsbCxcbiAgc291cmNlSWQ6IG51bGwsXG4gIHRhcmdldElkczogW10sXG4gIGRyb3BSZXN1bHQ6IG51bGwsXG4gIGRpZERyb3A6IGZhbHNlLFxuICBpc1NvdXJjZVB1YmxpYzogbnVsbFxufTtcblxuZnVuY3Rpb24gZHJhZ09wZXJhdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkJFR0lOX0RSQUc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1UeXBlOiBhY3Rpb24uaXRlbVR5cGUsXG4gICAgICAgIGl0ZW06IGFjdGlvbi5pdGVtLFxuICAgICAgICBzb3VyY2VJZDogYWN0aW9uLnNvdXJjZUlkLFxuICAgICAgICBpc1NvdXJjZVB1YmxpYzogYWN0aW9uLmlzU291cmNlUHVibGljLFxuICAgICAgICBkcm9wUmVzdWx0OiBudWxsLFxuICAgICAgICBkaWREcm9wOiBmYWxzZVxuICAgICAgfSk7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLlBVQkxJU0hfRFJBR19TT1VSQ0U6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGlzU291cmNlUHVibGljOiB0cnVlXG4gICAgICB9KTtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuSE9WRVI6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHRhcmdldElkczogYWN0aW9uLnRhcmdldElkc1xuICAgICAgfSk7XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LlJFTU9WRV9UQVJHRVQ6XG4gICAgICBpZiAoc3RhdGUudGFyZ2V0SWRzLmluZGV4T2YoYWN0aW9uLnRhcmdldElkKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICB0YXJnZXRJZHM6IF9sb2Rhc2hXaXRob3V0MlsnZGVmYXVsdCddKHN0YXRlLnRhcmdldElkcywgYWN0aW9uLnRhcmdldElkKVxuICAgICAgfSk7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkRST1A6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGRyb3BSZXN1bHQ6IGFjdGlvbi5kcm9wUmVzdWx0LFxuICAgICAgICBkaWREcm9wOiB0cnVlLFxuICAgICAgICB0YXJnZXRJZHM6IFtdXG4gICAgICB9KTtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuRU5EX0RSQUc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1UeXBlOiBudWxsLFxuICAgICAgICBpdGVtOiBudWxsLFxuICAgICAgICBzb3VyY2VJZDogbnVsbCxcbiAgICAgICAgZHJvcFJlc3VsdDogbnVsbCxcbiAgICAgICAgZGlkRHJvcDogZmFsc2UsXG4gICAgICAgIGlzU291cmNlUHVibGljOiBudWxsLFxuICAgICAgICB0YXJnZXRJZHM6IFtdXG4gICAgICB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT3BlcmF0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuYWRkU291cmNlID0gYWRkU291cmNlO1xuZXhwb3J0cy5hZGRUYXJnZXQgPSBhZGRUYXJnZXQ7XG5leHBvcnRzLnJlbW92ZVNvdXJjZSA9IHJlbW92ZVNvdXJjZTtcbmV4cG9ydHMucmVtb3ZlVGFyZ2V0ID0gcmVtb3ZlVGFyZ2V0O1xudmFyIEFERF9TT1VSQ0UgPSAnZG5kLWNvcmUvQUREX1NPVVJDRSc7XG5leHBvcnRzLkFERF9TT1VSQ0UgPSBBRERfU09VUkNFO1xudmFyIEFERF9UQVJHRVQgPSAnZG5kLWNvcmUvQUREX1RBUkdFVCc7XG5leHBvcnRzLkFERF9UQVJHRVQgPSBBRERfVEFSR0VUO1xudmFyIFJFTU9WRV9TT1VSQ0UgPSAnZG5kLWNvcmUvUkVNT1ZFX1NPVVJDRSc7XG5leHBvcnRzLlJFTU9WRV9TT1VSQ0UgPSBSRU1PVkVfU09VUkNFO1xudmFyIFJFTU9WRV9UQVJHRVQgPSAnZG5kLWNvcmUvUkVNT1ZFX1RBUkdFVCc7XG5cbmV4cG9ydHMuUkVNT1ZFX1RBUkdFVCA9IFJFTU9WRV9UQVJHRVQ7XG5cbmZ1bmN0aW9uIGFkZFNvdXJjZShzb3VyY2VJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFERF9TT1VSQ0UsXG4gICAgc291cmNlSWQ6IHNvdXJjZUlkXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZFRhcmdldCh0YXJnZXRJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFERF9UQVJHRVQsXG4gICAgdGFyZ2V0SWQ6IHRhcmdldElkXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNvdXJjZShzb3VyY2VJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFTU9WRV9TT1VSQ0UsXG4gICAgc291cmNlSWQ6IHNvdXJjZUlkXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldCh0YXJnZXRJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFTU9WRV9UQVJHRVQsXG4gICAgdGFyZ2V0SWQ6IHRhcmdldElkXG4gIH07XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL2FjdGlvbnMvcmVnaXN0cnkuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi9fYmFzZURpZmZlcmVuY2UnKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBleGNsdWRpbmcgYWxsIGdpdmVuIHZhbHVlcyB1c2luZ1xuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsuLi4qfSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGV4Y2x1ZGUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXMuXG4gKiBAc2VlIF8uZGlmZmVyZW5jZSwgXy54b3JcbiAqIEBleGFtcGxlXG4gKlxuICogXy53aXRob3V0KFsyLCAxLCAyLCAzXSwgMSwgMik7XG4gKiAvLyA9PiBbM11cbiAqL1xudmFyIHdpdGhvdXQgPSByZXN0KGZ1bmN0aW9uKGFycmF5LCB2YWx1ZXMpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KGFycmF5KVxuICAgID8gYmFzZURpZmZlcmVuY2UoYXJyYXksIHZhbHVlcylcbiAgICA6IFtdO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2l0aG91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC93aXRob3V0LmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGxpa2UgYF8uZGlmZmVyZW5jZWAgd2l0aG91dCBzdXBwb3J0XG4gKiBmb3IgZXhjbHVkaW5nIG11bHRpcGxlIGFycmF5cyBvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGV4Y2x1ZGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VEaWZmZXJlbmNlKGFycmF5LCB2YWx1ZXMsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICB2YWx1ZXNMZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xuXG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoaXRlcmF0ZWUpIHtcbiAgICB2YWx1ZXMgPSBhcnJheU1hcCh2YWx1ZXMsIGJhc2VVbmFyeShpdGVyYXRlZSkpO1xuICB9XG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICB9XG4gIGVsc2UgaWYgKHZhbHVlcy5sZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB2YWx1ZXMgPSBuZXcgU2V0Q2FjaGUodmFsdWVzKTtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciB2YWx1ZXNJbmRleCA9IHZhbHVlc0xlbmd0aDtcbiAgICAgIHdoaWxlICh2YWx1ZXNJbmRleC0tKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbdmFsdWVzSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyh2YWx1ZXMsIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VEaWZmZXJlbmNlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlRGlmZmVyZW5jZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID8gdmFsdWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX1NldENhY2hlLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19NYXBDYWNoZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19IYXNoLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19oYXNoQ2xlYXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19nZXROYXRpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0hvc3RPYmplY3QgPSByZXF1aXJlKCcuL19pc0hvc3RPYmplY3QnKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDggd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIHdlYWsgbWFwIGNvbnN0cnVjdG9ycyxcbiAgLy8gYW5kIFBoYW50b21KUyAxLjkgd2hpY2ggcmV0dXJucyAnZnVuY3Rpb24nIGZvciBgTm9kZUxpc3RgIGluc3RhbmNlcy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faXNNYXNrZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY2hlY2tHbG9iYWwgPSByZXF1aXJlKCcuL19jaGVja0dsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSBjaGVja0dsb2JhbCh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSBjaGVja0dsb2JhbCh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKTtcblxuLyoqIERldGVjdCBgdGhpc2AgYXMgdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgdGhpc0dsb2JhbCA9IGNoZWNrR2xvYmFsKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCB0aGlzR2xvYmFsIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fcm9vdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgZ2xvYmFsIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7bnVsbHxPYmplY3R9IFJldHVybnMgYHZhbHVlYCBpZiBpdCdzIGEgZ2xvYmFsIG9iamVjdCwgZWxzZSBgbnVsbGAuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrR2xvYmFsKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgJiYgdmFsdWUuT2JqZWN0ID09PSBPYmplY3QpID8gdmFsdWUgOiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrR2xvYmFsO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19jaGVja0dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX3RvU291cmNlLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19nZXRWYWx1ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2hhc2hHZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19oYXNoU2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19MaXN0Q2FjaGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICd1c2VyJzogJ2ZyZWQnIH07XG4gKiB2YXIgb3RoZXIgPSB7ICd1c2VyJzogJ2ZyZWQnIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9lcS5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19NYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19pc0tleWFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qc1xuICoqIG1vZHVsZSBpZCA9IDcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaW5kZXhPZk5hTiA9IHJlcXVpcmUoJy4vX2luZGV4T2ZOYU4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IGBmcm9tSW5kZXhgIGJvdW5kcyBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICBpZiAodmFsdWUgIT09IHZhbHVlKSB7XG4gICAgcmV0dXJuIGluZGV4T2ZOYU4oYXJyYXksIGZyb21JbmRleCk7XG4gIH1cbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYmFzZUluZGV4T2YuanNcbiAqKiBtb2R1bGUgaWQgPSA3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBgTmFOYCBpcyBmb3VuZCBpbiBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIGBOYU5gLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGluZGV4T2ZOYU4oYXJyYXksIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgdmFyIG90aGVyID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChvdGhlciAhPT0gb3RoZXIpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluZGV4T2ZOYU47XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2luZGV4T2ZOYU4uanNcbiAqKiBtb2R1bGUgaWQgPSA3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanNcbiAqKiBtb2R1bGUgaWQgPSA3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyB3cmFwcGVyIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGEgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fY2FjaGVIYXMuanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZU9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TGVuZ3RoID0gcmVxdWlyZSgnLi9fZ2V0TGVuZ3RoJyksXG4gICAgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aChnZXRMZW5ndGgodmFsdWUpKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanNcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpO1xuXG4vKipcbiAqIEdldHMgdGhlIFwibGVuZ3RoXCIgcHJvcGVydHkgdmFsdWUgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdm9pZCBhXG4gKiBbSklUIGJ1Z10oaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0Mjc5MikgdGhhdCBhZmZlY3RzXG4gKiBTYWZhcmkgb24gYXQgbGVhc3QgaU9TIDguMS04LjMgQVJNNjQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBcImxlbmd0aFwiIHZhbHVlLlxuICovXG52YXIgZ2V0TGVuZ3RoID0gYmFzZVByb3BlcnR5KCdsZW5ndGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRMZW5ndGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2dldExlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNMZW5ndGguanNcbiAqKiBtb2R1bGUgaWQgPSA4M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpO1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZVxuICogY3JlYXRlZCBmdW5jdGlvbiBhbmQgYXJndW1lbnRzIGZyb20gYHN0YXJ0YCBhbmQgYmV5b25kIHByb3ZpZGVkIGFzXG4gKiBhbiBhcnJheS5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgYmFzZWQgb24gdGhlXG4gKiBbcmVzdCBwYXJhbWV0ZXJdKGh0dHBzOi8vbWRuLmlvL3Jlc3RfcGFyYW1ldGVycykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBzYXkgPSBfLnJlc3QoZnVuY3Rpb24od2hhdCwgbmFtZXMpIHtcbiAqICAgcmV0dXJuIHdoYXQgKyAnICcgKyBfLmluaXRpYWwobmFtZXMpLmpvaW4oJywgJykgK1xuICogICAgIChfLnNpemUobmFtZXMpID4gMSA/ICcsICYgJyA6ICcnKSArIF8ubGFzdChuYW1lcyk7XG4gKiB9KTtcbiAqXG4gKiBzYXkoJ2hlbGxvJywgJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnKTtcbiAqIC8vID0+ICdoZWxsbyBmcmVkLCBiYXJuZXksICYgcGViYmxlcydcbiAqL1xuZnVuY3Rpb24gcmVzdChmdW5jLCBzdGFydCkge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiB0b0ludGVnZXIoc3RhcnQpLCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXJ0KSB7XG4gICAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJyYXkpO1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3NbMF0sIGFycmF5KTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmdzWzBdLCBhcmdzWzFdLCBhcnJheSk7XG4gICAgfVxuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIGluZGV4ID0gLTE7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gYXJyYXk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9yZXN0LmpzXG4gKiogbW9kdWxlIGlkID0gODRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYXBwbHkuanNcbiAqKiBtb2R1bGUgaWQgPSA4NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvRmluaXRlID0gcmVxdWlyZSgnLi90b0Zpbml0ZScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0ludGVnZXJgXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9pbnRlZ2VyKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBpbnRlZ2VyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvSW50ZWdlcigzLjIpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMuMicpO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRvRmluaXRlKHZhbHVlKSxcbiAgICAgIHJlbWFpbmRlciA9IHJlc3VsdCAlIDE7XG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gcmVzdWx0ID8gKHJlbWFpbmRlciA/IHJlc3VsdCAtIHJlbWFpbmRlciA6IHJlc3VsdCkgOiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvSW50ZWdlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC90b0ludGVnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwLFxuICAgIE1BWF9JTlRFR0VSID0gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDg7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIGZpbml0ZSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEyLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0Zpbml0ZSgzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b0Zpbml0ZShOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9GaW5pdGUoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvRmluaXRlKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b0Zpbml0ZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiAwO1xuICB9XG4gIHZhbHVlID0gdG9OdW1iZXIodmFsdWUpO1xuICBpZiAodmFsdWUgPT09IElORklOSVRZIHx8IHZhbHVlID09PSAtSU5GSU5JVFkpIHtcbiAgICB2YXIgc2lnbiA9ICh2YWx1ZSA8IDAgPyAtMSA6IDEpO1xuICAgIHJldHVybiBzaWduICogTUFYX0lOVEVHRVI7XG4gIH1cbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IHZhbHVlIDogMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0Zpbml0ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC90b0Zpbml0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDg3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gaXNGdW5jdGlvbih2YWx1ZS52YWx1ZU9mKSA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvdG9OdW1iZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA4OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc1N5bWJvbC5qc1xuICoqIG1vZHVsZSBpZCA9IDg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSByZWZDb3VudDtcblxudmFyIF9hY3Rpb25zUmVnaXN0cnkgPSByZXF1aXJlKCcuLi9hY3Rpb25zL3JlZ2lzdHJ5Jyk7XG5cbmZ1bmN0aW9uIHJlZkNvdW50KHN0YXRlLCBhY3Rpb24pIHtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHN0YXRlID0gMDtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LkFERF9TT1VSQ0U6XG4gICAgY2FzZSBfYWN0aW9uc1JlZ2lzdHJ5LkFERF9UQVJHRVQ6XG4gICAgICByZXR1cm4gc3RhdGUgKyAxO1xuICAgIGNhc2UgX2FjdGlvbnNSZWdpc3RyeS5SRU1PVkVfU09VUkNFOlxuICAgIGNhc2UgX2FjdGlvbnNSZWdpc3RyeS5SRU1PVkVfVEFSR0VUOlxuICAgICAgcmV0dXJuIHN0YXRlIC0gMTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9yZWZDb3VudC5qc1xuICoqIG1vZHVsZSBpZCA9IDkwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBkaXJ0eUhhbmRsZXJJZHM7XG5leHBvcnRzLmFyZURpcnR5ID0gYXJlRGlydHk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hYb3IgPSByZXF1aXJlKCdsb2Rhc2gveG9yJyk7XG5cbnZhciBfbG9kYXNoWG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaFhvcik7XG5cbnZhciBfbG9kYXNoSW50ZXJzZWN0aW9uID0gcmVxdWlyZSgnbG9kYXNoL2ludGVyc2VjdGlvbicpO1xuXG52YXIgX2xvZGFzaEludGVyc2VjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJbnRlcnNlY3Rpb24pO1xuXG52YXIgX2FjdGlvbnNEcmFnRHJvcCA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZHJhZ0Ryb3AnKTtcblxudmFyIF9hY3Rpb25zUmVnaXN0cnkgPSByZXF1aXJlKCcuLi9hY3Rpb25zL3JlZ2lzdHJ5Jyk7XG5cbnZhciBOT05FID0gW107XG52YXIgQUxMID0gW107XG5cbmZ1bmN0aW9uIGRpcnR5SGFuZGxlcklkcyhzdGF0ZSwgYWN0aW9uLCBkcmFnT3BlcmF0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSBzdGF0ZSA9IE5PTkU7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5IT1ZFUjpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgX2FjdGlvbnNSZWdpc3RyeS5BRERfU09VUkNFOlxuICAgIGNhc2UgX2FjdGlvbnNSZWdpc3RyeS5BRERfVEFSR0VUOlxuICAgIGNhc2UgX2FjdGlvbnNSZWdpc3RyeS5SRU1PVkVfVEFSR0VUOlxuICAgIGNhc2UgX2FjdGlvbnNSZWdpc3RyeS5SRU1PVkVfU09VUkNFOlxuICAgICAgcmV0dXJuIE5PTkU7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkJFR0lOX0RSQUc6XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLlBVQkxJU0hfRFJBR19TT1VSQ0U6XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkVORF9EUkFHOlxuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5EUk9QOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gQUxMO1xuICB9XG5cbiAgdmFyIHRhcmdldElkcyA9IGFjdGlvbi50YXJnZXRJZHM7XG4gIHZhciBwcmV2VGFyZ2V0SWRzID0gZHJhZ09wZXJhdGlvbi50YXJnZXRJZHM7XG5cbiAgdmFyIGRpcnR5SGFuZGxlcklkcyA9IF9sb2Rhc2hYb3IyWydkZWZhdWx0J10odGFyZ2V0SWRzLCBwcmV2VGFyZ2V0SWRzKTtcblxuICB2YXIgZGlkQ2hhbmdlID0gZmFsc2U7XG4gIGlmIChkaXJ0eUhhbmRsZXJJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXJnZXRJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0YXJnZXRJZHNbaV0gIT09IHByZXZUYXJnZXRJZHNbaV0pIHtcbiAgICAgICAgZGlkQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRpZENoYW5nZSA9IHRydWU7XG4gIH1cblxuICBpZiAoIWRpZENoYW5nZSkge1xuICAgIHJldHVybiBOT05FO1xuICB9XG5cbiAgdmFyIHByZXZJbm5lcm1vc3RUYXJnZXRJZCA9IHByZXZUYXJnZXRJZHNbcHJldlRhcmdldElkcy5sZW5ndGggLSAxXTtcbiAgdmFyIGlubmVybW9zdFRhcmdldElkID0gdGFyZ2V0SWRzW3RhcmdldElkcy5sZW5ndGggLSAxXTtcblxuICBpZiAocHJldklubmVybW9zdFRhcmdldElkICE9PSBpbm5lcm1vc3RUYXJnZXRJZCkge1xuICAgIGlmIChwcmV2SW5uZXJtb3N0VGFyZ2V0SWQpIHtcbiAgICAgIGRpcnR5SGFuZGxlcklkcy5wdXNoKHByZXZJbm5lcm1vc3RUYXJnZXRJZCk7XG4gICAgfVxuICAgIGlmIChpbm5lcm1vc3RUYXJnZXRJZCkge1xuICAgICAgZGlydHlIYW5kbGVySWRzLnB1c2goaW5uZXJtb3N0VGFyZ2V0SWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJ0eUhhbmRsZXJJZHM7XG59XG5cbmZ1bmN0aW9uIGFyZURpcnR5KHN0YXRlLCBoYW5kbGVySWRzKSB7XG4gIGlmIChzdGF0ZSA9PT0gTk9ORSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzdGF0ZSA9PT0gQUxMIHx8IHR5cGVvZiBoYW5kbGVySWRzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF9sb2Rhc2hJbnRlcnNlY3Rpb24yWydkZWZhdWx0J10oaGFuZGxlcklkcywgc3RhdGUpLmxlbmd0aCA+IDA7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL2RpcnR5SGFuZGxlcklkcy5qc1xuICoqIG1vZHVsZSBpZCA9IDkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIGJhc2VYb3IgPSByZXF1aXJlKCcuL19iYXNlWG9yJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdW5pcXVlIHZhbHVlcyB0aGF0IGlzIHRoZVxuICogW3N5bW1ldHJpYyBkaWZmZXJlbmNlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TeW1tZXRyaWNfZGlmZmVyZW5jZSlcbiAqIG9mIHRoZSBnaXZlbiBhcnJheXMuIFRoZSBvcmRlciBvZiByZXN1bHQgdmFsdWVzIGlzIGRldGVybWluZWQgYnkgdGhlIG9yZGVyXG4gKiB0aGV5IG9jY3VyIGluIHRoZSBhcnJheXMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0gey4uLkFycmF5fSBbYXJyYXlzXSBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXMuXG4gKiBAc2VlIF8uZGlmZmVyZW5jZSwgXy53aXRob3V0XG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ueG9yKFsyLCAxXSwgWzIsIDNdKTtcbiAqIC8vID0+IFsxLCAzXVxuICovXG52YXIgeG9yID0gcmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgcmV0dXJuIGJhc2VYb3IoYXJyYXlGaWx0ZXIoYXJyYXlzLCBpc0FycmF5TGlrZU9iamVjdCkpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0geG9yO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL3hvci5qc1xuICoqIG1vZHVsZSBpZCA9IDkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hcnJheUZpbHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDkzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgYmFzZURpZmZlcmVuY2UgPSByZXF1aXJlKCcuL19iYXNlRGlmZmVyZW5jZScpLFxuICAgIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGxpa2UgYF8ueG9yYCwgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcywgdGhhdCBhY2NlcHRzIGFuIGFycmF5IG9mIGFycmF5cyB0byBpbnNwZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheXMgVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBiYXNlWG9yKGFycmF5cywgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheXMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHJlc3VsdFxuICAgICAgPyBhcnJheVB1c2goXG4gICAgICAgICAgYmFzZURpZmZlcmVuY2UocmVzdWx0LCBhcnJheXNbaW5kZXhdLCBpdGVyYXRlZSwgY29tcGFyYXRvciksXG4gICAgICAgICAgYmFzZURpZmZlcmVuY2UoYXJyYXlzW2luZGV4XSwgcmVzdWx0LCBpdGVyYXRlZSwgY29tcGFyYXRvcilcbiAgICAgICAgKVxuICAgICAgOiBhcnJheXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpID8gYmFzZVVuaXEocmVzdWx0LCBpdGVyYXRlZSwgY29tcGFyYXRvcikgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlWG9yO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlWG9yLmpzXG4gKiogbW9kdWxlIGlkID0gOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qc1xuICoqIG1vZHVsZSBpZCA9IDk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKSxcbiAgICBjcmVhdGVTZXQgPSByZXF1aXJlKCcuL19jcmVhdGVTZXQnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuaXFCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHNlZW4gPSByZXN1bHQ7XG5cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gIH1cbiAgZWxzZSBpZiAobGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICB2YXIgc2V0ID0gaXRlcmF0ZWUgPyBudWxsIDogY3JlYXRlU2V0KGFycmF5KTtcbiAgICBpZiAoc2V0KSB7XG4gICAgICByZXR1cm4gc2V0VG9BcnJheShzZXQpO1xuICAgIH1cbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgc2VlbiA9IG5ldyBTZXRDYWNoZTtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWVuID0gaXRlcmF0ZWUgPyBbXSA6IHJlc3VsdDtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciBzZWVuSW5kZXggPSBzZWVuLmxlbmd0aDtcbiAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHNlZW4sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgaWYgKHNlZW4gIT09IHJlc3VsdCkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmlxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlVW5pcS5qc1xuICoqIG1vZHVsZSBpZCA9IDk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgbm9vcCA9IHJlcXVpcmUoJy4vbm9vcCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBgdmFsdWVzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYWRkIHRvIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgc2V0LlxuICovXG52YXIgY3JlYXRlU2V0ID0gIShTZXQgJiYgKDEgLyBzZXRUb0FycmF5KG5ldyBTZXQoWywtMF0pKVsxXSkgPT0gSU5GSU5JVFkpID8gbm9vcCA6IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFNldCh2YWx1ZXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2NyZWF0ZVNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19TZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA5OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBIG1ldGhvZCB0aGF0IHJldHVybnMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLm5vb3ApO1xuICogLy8gPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vb3A7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbm9vcC5qc1xuICoqIG1vZHVsZSBpZCA9IDk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoJy4vX2Jhc2VJbnRlcnNlY3Rpb24nKSxcbiAgICBjYXN0QXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9fY2FzdEFycmF5TGlrZU9iamVjdCcpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHVuaXF1ZSB2YWx1ZXMgdGhhdCBhcmUgaW5jbHVkZWQgaW4gYWxsIGdpdmVuIGFycmF5c1xuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXMgZGV0ZXJtaW5lZCBieSB0aGVcbiAqIG9yZGVyIHRoZXkgb2NjdXIgaW4gdGhlIGZpcnN0IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgaW50ZXJzZWN0aW5nIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pbnRlcnNlY3Rpb24oWzIsIDFdLCBbMiwgM10pO1xuICogLy8gPT4gWzJdXG4gKi9cbnZhciBpbnRlcnNlY3Rpb24gPSByZXN0KGZ1bmN0aW9uKGFycmF5cykge1xuICB2YXIgbWFwcGVkID0gYXJyYXlNYXAoYXJyYXlzLCBjYXN0QXJyYXlMaWtlT2JqZWN0KTtcbiAgcmV0dXJuIChtYXBwZWQubGVuZ3RoICYmIG1hcHBlZFswXSA9PT0gYXJyYXlzWzBdKVxuICAgID8gYmFzZUludGVyc2VjdGlvbihtYXBwZWQpXG4gICAgOiBbXTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludGVyc2VjdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcnNlY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIG1ldGhvZHMgbGlrZSBgXy5pbnRlcnNlY3Rpb25gLCB3aXRob3V0IHN1cHBvcnRcbiAqIGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLCB0aGF0IGFjY2VwdHMgYW4gYXJyYXkgb2YgYXJyYXlzIHRvIGluc3BlY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5cyBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBzaGFyZWQgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBiYXNlSW50ZXJzZWN0aW9uKGFycmF5cywgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluY2x1ZGVzID0gY29tcGFyYXRvciA/IGFycmF5SW5jbHVkZXNXaXRoIDogYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5c1swXS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBhcnJheXMubGVuZ3RoLFxuICAgICAgb3RoSW5kZXggPSBvdGhMZW5ndGgsXG4gICAgICBjYWNoZXMgPSBBcnJheShvdGhMZW5ndGgpLFxuICAgICAgbWF4TGVuZ3RoID0gSW5maW5pdHksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAob3RoSW5kZXgtLSkge1xuICAgIHZhciBhcnJheSA9IGFycmF5c1tvdGhJbmRleF07XG4gICAgaWYgKG90aEluZGV4ICYmIGl0ZXJhdGVlKSB7XG4gICAgICBhcnJheSA9IGFycmF5TWFwKGFycmF5LCBiYXNlVW5hcnkoaXRlcmF0ZWUpKTtcbiAgICB9XG4gICAgbWF4TGVuZ3RoID0gbmF0aXZlTWluKGFycmF5Lmxlbmd0aCwgbWF4TGVuZ3RoKTtcbiAgICBjYWNoZXNbb3RoSW5kZXhdID0gIWNvbXBhcmF0b3IgJiYgKGl0ZXJhdGVlIHx8IChsZW5ndGggPj0gMTIwICYmIGFycmF5Lmxlbmd0aCA+PSAxMjApKVxuICAgICAgPyBuZXcgU2V0Q2FjaGUob3RoSW5kZXggJiYgYXJyYXkpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxuICBhcnJheSA9IGFycmF5c1swXTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHNlZW4gPSBjYWNoZXNbMF07XG5cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoICYmIHJlc3VsdC5sZW5ndGggPCBtYXhMZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmICghKHNlZW5cbiAgICAgICAgICA/IGNhY2hlSGFzKHNlZW4sIGNvbXB1dGVkKVxuICAgICAgICAgIDogaW5jbHVkZXMocmVzdWx0LCBjb21wdXRlZCwgY29tcGFyYXRvcilcbiAgICAgICAgKSkge1xuICAgICAgb3RoSW5kZXggPSBvdGhMZW5ndGg7XG4gICAgICB3aGlsZSAoLS1vdGhJbmRleCkge1xuICAgICAgICB2YXIgY2FjaGUgPSBjYWNoZXNbb3RoSW5kZXhdO1xuICAgICAgICBpZiAoIShjYWNoZVxuICAgICAgICAgICAgICA/IGNhY2hlSGFzKGNhY2hlLCBjb21wdXRlZClcbiAgICAgICAgICAgICAgOiBpbmNsdWRlcyhhcnJheXNbb3RoSW5kZXhdLCBjb21wdXRlZCwgY29tcGFyYXRvcikpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlZW4pIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW50ZXJzZWN0aW9uO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19iYXNlSW50ZXJzZWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhbiBlbXB0eSBhcnJheSBpZiBpdCdzIG5vdCBhbiBhcnJheSBsaWtlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IFJldHVybnMgdGhlIGNhc3QgYXJyYXktbGlrZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNhc3RBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdEFycmF5TGlrZU9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fY2FzdEFycmF5TGlrZU9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHN0YXRlSWQ7XG5cbmZ1bmN0aW9uIHN0YXRlSWQoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG5cbiAgcmV0dXJuIHN0YXRlICsgMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvc3RhdGVJZC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3V0aWxzTWF0Y2hlc1R5cGUgPSByZXF1aXJlKCcuL3V0aWxzL21hdGNoZXNUeXBlJyk7XG5cbnZhciBfdXRpbHNNYXRjaGVzVHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc01hdGNoZXNUeXBlKTtcblxudmFyIF9sb2Rhc2hJc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKTtcblxudmFyIF9sb2Rhc2hJc0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzQXJyYXkpO1xuXG52YXIgX0hhbmRsZXJSZWdpc3RyeSA9IHJlcXVpcmUoJy4vSGFuZGxlclJlZ2lzdHJ5Jyk7XG5cbnZhciBfSGFuZGxlclJlZ2lzdHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hhbmRsZXJSZWdpc3RyeSk7XG5cbnZhciBfcmVkdWNlcnNEcmFnT2Zmc2V0ID0gcmVxdWlyZSgnLi9yZWR1Y2Vycy9kcmFnT2Zmc2V0Jyk7XG5cbnZhciBfcmVkdWNlcnNEaXJ0eUhhbmRsZXJJZHMgPSByZXF1aXJlKCcuL3JlZHVjZXJzL2RpcnR5SGFuZGxlcklkcycpO1xuXG52YXIgRHJhZ0Ryb3BNb25pdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRHJhZ0Ryb3BNb25pdG9yKHN0b3JlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdEcm9wTW9uaXRvcik7XG5cbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5yZWdpc3RyeSA9IG5ldyBfSGFuZGxlclJlZ2lzdHJ5MlsnZGVmYXVsdCddKHN0b3JlKTtcbiAgfVxuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuc3Vic2NyaWJlVG9TdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uIHN1YnNjcmliZVRvU3RhdGVDaGFuZ2UobGlzdGVuZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBoYW5kbGVySWRzID0gX3JlZi5oYW5kbGVySWRzO1xuXG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicsICdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgaGFuZGxlcklkcyA9PT0gJ3VuZGVmaW5lZCcgfHwgX2xvZGFzaElzQXJyYXkyWydkZWZhdWx0J10oaGFuZGxlcklkcyksICdoYW5kbGVySWRzLCB3aGVuIHNwZWNpZmllZCwgbXVzdCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzLicpO1xuXG4gICAgdmFyIHByZXZTdGF0ZUlkID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnN0YXRlSWQ7XG4gICAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICB2YXIgY3VycmVudFN0YXRlSWQgPSBzdGF0ZS5zdGF0ZUlkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGNhblNraXBMaXN0ZW5lciA9IGN1cnJlbnRTdGF0ZUlkID09PSBwcmV2U3RhdGVJZCB8fCBjdXJyZW50U3RhdGVJZCA9PT0gcHJldlN0YXRlSWQgKyAxICYmICFfcmVkdWNlcnNEaXJ0eUhhbmRsZXJJZHMuYXJlRGlydHkoc3RhdGUuZGlydHlIYW5kbGVySWRzLCBoYW5kbGVySWRzKTtcblxuICAgICAgICBpZiAoIWNhblNraXBMaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHByZXZTdGF0ZUlkID0gY3VycmVudFN0YXRlSWQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2UpO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuc3Vic2NyaWJlVG9PZmZzZXRDaGFuZ2UgPSBmdW5jdGlvbiBzdWJzY3JpYmVUb09mZnNldENoYW5nZShsaXN0ZW5lcikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicsICdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG5cbiAgICB2YXIgcHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0O1xuICAgIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICB2YXIgbmV4dFN0YXRlID0gX3RoaXMyLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldDtcbiAgICAgIGlmIChuZXh0U3RhdGUgPT09IHByZXZpb3VzU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwcmV2aW91c1N0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc3Vic2NyaWJlKGhhbmRsZUNoYW5nZSk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5jYW5EcmFnU291cmNlID0gZnVuY3Rpb24gY2FuRHJhZ1NvdXJjZShzb3VyY2VJZCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZCk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShzb3VyY2UsICdFeHBlY3RlZCB0byBmaW5kIGEgdmFsaWQgc291cmNlLicpO1xuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZygpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZS5jYW5EcmFnKHRoaXMsIHNvdXJjZUlkKTtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmNhbkRyb3BPblRhcmdldCA9IGZ1bmN0aW9uIGNhbkRyb3BPblRhcmdldCh0YXJnZXRJZCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLnJlZ2lzdHJ5LmdldFRhcmdldCh0YXJnZXRJZCk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0YXJnZXQsICdFeHBlY3RlZCB0byBmaW5kIGEgdmFsaWQgdGFyZ2V0LicpO1xuXG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcoKSB8fCB0aGlzLmRpZERyb3AoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRUeXBlID0gdGhpcy5yZWdpc3RyeS5nZXRUYXJnZXRUeXBlKHRhcmdldElkKTtcbiAgICB2YXIgZHJhZ2dlZEl0ZW1UeXBlID0gdGhpcy5nZXRJdGVtVHlwZSgpO1xuICAgIHJldHVybiBfdXRpbHNNYXRjaGVzVHlwZTJbJ2RlZmF1bHQnXSh0YXJnZXRUeXBlLCBkcmFnZ2VkSXRlbVR5cGUpICYmIHRhcmdldC5jYW5Ecm9wKHRoaXMsIHRhcmdldElkKTtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbiBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0SXRlbVR5cGUoKSk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5pc0RyYWdnaW5nU291cmNlID0gZnVuY3Rpb24gaXNEcmFnZ2luZ1NvdXJjZShzb3VyY2VJZCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnJlZ2lzdHJ5LmdldFNvdXJjZShzb3VyY2VJZCwgdHJ1ZSk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShzb3VyY2UsICdFeHBlY3RlZCB0byBmaW5kIGEgdmFsaWQgc291cmNlLicpO1xuXG4gICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcoKSB8fCAhdGhpcy5pc1NvdXJjZVB1YmxpYygpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZVR5cGUgPSB0aGlzLnJlZ2lzdHJ5LmdldFNvdXJjZVR5cGUoc291cmNlSWQpO1xuICAgIHZhciBkcmFnZ2VkSXRlbVR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKCk7XG4gICAgaWYgKHNvdXJjZVR5cGUgIT09IGRyYWdnZWRJdGVtVHlwZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2UuaXNEcmFnZ2luZyh0aGlzLCBzb3VyY2VJZCk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5pc092ZXJUYXJnZXQgPSBmdW5jdGlvbiBpc092ZXJUYXJnZXQodGFyZ2V0SWQpIHtcbiAgICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBfcmVmMiRzaGFsbG93ID0gX3JlZjIuc2hhbGxvdztcbiAgICB2YXIgc2hhbGxvdyA9IF9yZWYyJHNoYWxsb3cgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZjIkc2hhbGxvdztcblxuICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0VHlwZSA9IHRoaXMucmVnaXN0cnkuZ2V0VGFyZ2V0VHlwZSh0YXJnZXRJZCk7XG4gICAgdmFyIGRyYWdnZWRJdGVtVHlwZSA9IHRoaXMuZ2V0SXRlbVR5cGUoKTtcbiAgICBpZiAoIV91dGlsc01hdGNoZXNUeXBlMlsnZGVmYXVsdCddKHRhcmdldFR5cGUsIGRyYWdnZWRJdGVtVHlwZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0SWRzID0gdGhpcy5nZXRUYXJnZXRJZHMoKTtcbiAgICBpZiAoIXRhcmdldElkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0YXJnZXRJZHMuaW5kZXhPZih0YXJnZXRJZCk7XG4gICAgaWYgKHNoYWxsb3cpIHtcbiAgICAgIHJldHVybiBpbmRleCA9PT0gdGFyZ2V0SWRzLmxlbmd0aCAtIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbmRleCA+IC0xO1xuICAgIH1cbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldEl0ZW1UeXBlID0gZnVuY3Rpb24gZ2V0SXRlbVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLml0ZW1UeXBlO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uIGdldEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLml0ZW07XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXRTb3VyY2VJZCA9IGZ1bmN0aW9uIGdldFNvdXJjZUlkKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5zb3VyY2VJZDtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldFRhcmdldElkcyA9IGZ1bmN0aW9uIGdldFRhcmdldElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24udGFyZ2V0SWRzO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0RHJvcFJlc3VsdCA9IGZ1bmN0aW9uIGdldERyb3BSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLmRyb3BSZXN1bHQ7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5kaWREcm9wID0gZnVuY3Rpb24gZGlkRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24uZGlkRHJvcDtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmlzU291cmNlUHVibGljID0gZnVuY3Rpb24gaXNTb3VyY2VQdWJsaWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLmlzU291cmNlUHVibGljO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0SW5pdGlhbENsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldEluaXRpYWxDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0LmluaXRpYWxDbGllbnRPZmZzZXQ7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQuaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldDtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldENsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldENsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQuY2xpZW50T2Zmc2V0O1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiBfcmVkdWNlcnNEcmFnT2Zmc2V0LmdldFNvdXJjZUNsaWVudE9mZnNldCh0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldCk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQgPSBmdW5jdGlvbiBnZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIF9yZWR1Y2Vyc0RyYWdPZmZzZXQuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0KTtcbiAgfTtcblxuICByZXR1cm4gRHJhZ0Ryb3BNb25pdG9yO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRHJhZ0Ryb3BNb25pdG9yO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL0RyYWdEcm9wTW9uaXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gJ3N5bWJvbCcgOiB0eXBlb2Ygb2JqOyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfbG9kYXNoSXNBcnJheSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0FycmF5Jyk7XG5cbnZhciBfbG9kYXNoSXNBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc0FycmF5KTtcblxudmFyIF91dGlsc0dldE5leHRVbmlxdWVJZCA9IHJlcXVpcmUoJy4vdXRpbHMvZ2V0TmV4dFVuaXF1ZUlkJyk7XG5cbnZhciBfdXRpbHNHZXROZXh0VW5pcXVlSWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNHZXROZXh0VW5pcXVlSWQpO1xuXG52YXIgX2FjdGlvbnNSZWdpc3RyeSA9IHJlcXVpcmUoJy4vYWN0aW9ucy9yZWdpc3RyeScpO1xuXG52YXIgX2FzYXAgPSByZXF1aXJlKCdhc2FwJyk7XG5cbnZhciBfYXNhcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc2FwKTtcblxudmFyIEhhbmRsZXJSb2xlcyA9IHtcbiAgU09VUkNFOiAnU09VUkNFJyxcbiAgVEFSR0VUOiAnVEFSR0VUJ1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVTb3VyY2VDb250cmFjdChzb3VyY2UpIHtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2Ygc291cmNlLmNhbkRyYWcgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBjYW5EcmFnIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHNvdXJjZS5iZWdpbkRyYWcgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBiZWdpbkRyYWcgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2Ygc291cmNlLmVuZERyYWcgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBlbmREcmFnIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGFyZ2V0Q29udHJhY3QodGFyZ2V0KSB7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHRhcmdldC5jYW5Ecm9wID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgY2FuRHJvcCB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiB0YXJnZXQuaG92ZXIgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBob3ZlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiB0YXJnZXQuZHJvcCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGJlZ2luRHJhZyB0byBiZSBhIGZ1bmN0aW9uLicpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVR5cGUodHlwZSwgYWxsb3dBcnJheSkge1xuICBpZiAoYWxsb3dBcnJheSAmJiBfbG9kYXNoSXNBcnJheTJbJ2RlZmF1bHQnXSh0eXBlKSkge1xuICAgIHR5cGUuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlVHlwZSh0LCBmYWxzZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgKHR5cGVvZiB0eXBlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0eXBlKSkgPT09ICdzeW1ib2wnLCBhbGxvd0FycmF5ID8gJ1R5cGUgY2FuIG9ubHkgYmUgYSBzdHJpbmcsIGEgc3ltYm9sLCBvciBhbiBhcnJheSBvZiBlaXRoZXIuJyA6ICdUeXBlIGNhbiBvbmx5IGJlIGEgc3RyaW5nIG9yIGEgc3ltYm9sLicpO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0SGFuZGxlcklkKHJvbGUpIHtcbiAgdmFyIGlkID0gX3V0aWxzR2V0TmV4dFVuaXF1ZUlkMlsnZGVmYXVsdCddKCkudG9TdHJpbmcoKTtcbiAgc3dpdGNoIChyb2xlKSB7XG4gICAgY2FzZSBIYW5kbGVyUm9sZXMuU09VUkNFOlxuICAgICAgcmV0dXJuICdTJyArIGlkO1xuICAgIGNhc2UgSGFuZGxlclJvbGVzLlRBUkdFVDpcbiAgICAgIHJldHVybiAnVCcgKyBpZDtcbiAgICBkZWZhdWx0OlxuICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ1Vua25vd24gcm9sZTogJyArIHJvbGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUm9sZUZyb21IYW5kbGVySWQoaGFuZGxlcklkKSB7XG4gIHN3aXRjaCAoaGFuZGxlcklkWzBdKSB7XG4gICAgY2FzZSAnUyc6XG4gICAgICByZXR1cm4gSGFuZGxlclJvbGVzLlNPVVJDRTtcbiAgICBjYXNlICdUJzpcbiAgICAgIHJldHVybiBIYW5kbGVyUm9sZXMuVEFSR0VUO1xuICAgIGRlZmF1bHQ6XG4gICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnQ2Fubm90IHBhcnNlIGhhbmRsZXIgSUQ6ICcgKyBoYW5kbGVySWQpO1xuICB9XG59XG5cbnZhciBIYW5kbGVyUmVnaXN0cnkgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIYW5kbGVyUmVnaXN0cnkoc3RvcmUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFuZGxlclJlZ2lzdHJ5KTtcblxuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcblxuICAgIHRoaXMudHlwZXMgPSB7fTtcbiAgICB0aGlzLmhhbmRsZXJzID0ge307XG5cbiAgICB0aGlzLnBpbm5lZFNvdXJjZUlkID0gbnVsbDtcbiAgICB0aGlzLnBpbm5lZFNvdXJjZSA9IG51bGw7XG4gIH1cblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmFkZFNvdXJjZSA9IGZ1bmN0aW9uIGFkZFNvdXJjZSh0eXBlLCBzb3VyY2UpIHtcbiAgICB2YWxpZGF0ZVR5cGUodHlwZSk7XG4gICAgdmFsaWRhdGVTb3VyY2VDb250cmFjdChzb3VyY2UpO1xuXG4gICAgdmFyIHNvdXJjZUlkID0gdGhpcy5hZGRIYW5kbGVyKEhhbmRsZXJSb2xlcy5TT1VSQ0UsIHR5cGUsIHNvdXJjZSk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChfYWN0aW9uc1JlZ2lzdHJ5LmFkZFNvdXJjZShzb3VyY2VJZCkpO1xuICAgIHJldHVybiBzb3VyY2VJZDtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmFkZFRhcmdldCA9IGZ1bmN0aW9uIGFkZFRhcmdldCh0eXBlLCB0YXJnZXQpIHtcbiAgICB2YWxpZGF0ZVR5cGUodHlwZSwgdHJ1ZSk7XG4gICAgdmFsaWRhdGVUYXJnZXRDb250cmFjdCh0YXJnZXQpO1xuXG4gICAgdmFyIHRhcmdldElkID0gdGhpcy5hZGRIYW5kbGVyKEhhbmRsZXJSb2xlcy5UQVJHRVQsIHR5cGUsIHRhcmdldCk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChfYWN0aW9uc1JlZ2lzdHJ5LmFkZFRhcmdldCh0YXJnZXRJZCkpO1xuICAgIHJldHVybiB0YXJnZXRJZDtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmFkZEhhbmRsZXIgPSBmdW5jdGlvbiBhZGRIYW5kbGVyKHJvbGUsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaWQgPSBnZXROZXh0SGFuZGxlcklkKHJvbGUpO1xuICAgIHRoaXMudHlwZXNbaWRdID0gdHlwZTtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IGhhbmRsZXI7XG5cbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5jb250YWluc0hhbmRsZXIgPSBmdW5jdGlvbiBjb250YWluc0hhbmRsZXIoaGFuZGxlcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5oYW5kbGVycykuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlcnNba2V5XSA9PT0gaGFuZGxlcjtcbiAgICB9KTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmdldFNvdXJjZSA9IGZ1bmN0aW9uIGdldFNvdXJjZShzb3VyY2VJZCwgaW5jbHVkZVBpbm5lZCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGhpcy5pc1NvdXJjZUlkKHNvdXJjZUlkKSwgJ0V4cGVjdGVkIGEgdmFsaWQgc291cmNlIElELicpO1xuXG4gICAgdmFyIGlzUGlubmVkID0gaW5jbHVkZVBpbm5lZCAmJiBzb3VyY2VJZCA9PT0gdGhpcy5waW5uZWRTb3VyY2VJZDtcbiAgICB2YXIgc291cmNlID0gaXNQaW5uZWQgPyB0aGlzLnBpbm5lZFNvdXJjZSA6IHRoaXMuaGFuZGxlcnNbc291cmNlSWRdO1xuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXRJZCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGhpcy5pc1RhcmdldElkKHRhcmdldElkKSwgJ0V4cGVjdGVkIGEgdmFsaWQgdGFyZ2V0IElELicpO1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzW3RhcmdldElkXTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmdldFNvdXJjZVR5cGUgPSBmdW5jdGlvbiBnZXRTb3VyY2VUeXBlKHNvdXJjZUlkKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0aGlzLmlzU291cmNlSWQoc291cmNlSWQpLCAnRXhwZWN0ZWQgYSB2YWxpZCBzb3VyY2UgSUQuJyk7XG4gICAgcmV0dXJuIHRoaXMudHlwZXNbc291cmNlSWRdO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUuZ2V0VGFyZ2V0VHlwZSA9IGZ1bmN0aW9uIGdldFRhcmdldFR5cGUodGFyZ2V0SWQpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRoaXMuaXNUYXJnZXRJZCh0YXJnZXRJZCksICdFeHBlY3RlZCBhIHZhbGlkIHRhcmdldCBJRC4nKTtcbiAgICByZXR1cm4gdGhpcy50eXBlc1t0YXJnZXRJZF07XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5pc1NvdXJjZUlkID0gZnVuY3Rpb24gaXNTb3VyY2VJZChoYW5kbGVySWQpIHtcbiAgICB2YXIgcm9sZSA9IHBhcnNlUm9sZUZyb21IYW5kbGVySWQoaGFuZGxlcklkKTtcbiAgICByZXR1cm4gcm9sZSA9PT0gSGFuZGxlclJvbGVzLlNPVVJDRTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmlzVGFyZ2V0SWQgPSBmdW5jdGlvbiBpc1RhcmdldElkKGhhbmRsZXJJZCkge1xuICAgIHZhciByb2xlID0gcGFyc2VSb2xlRnJvbUhhbmRsZXJJZChoYW5kbGVySWQpO1xuICAgIHJldHVybiByb2xlID09PSBIYW5kbGVyUm9sZXMuVEFSR0VUO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUucmVtb3ZlU291cmNlID0gZnVuY3Rpb24gcmVtb3ZlU291cmNlKHNvdXJjZUlkKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRoaXMuZ2V0U291cmNlKHNvdXJjZUlkKSwgJ0V4cGVjdGVkIGFuIGV4aXN0aW5nIHNvdXJjZS4nKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKF9hY3Rpb25zUmVnaXN0cnkucmVtb3ZlU291cmNlKHNvdXJjZUlkKSk7XG5cbiAgICBfYXNhcDJbJ2RlZmF1bHQnXShmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGUgX3RoaXMyLmhhbmRsZXJzW3NvdXJjZUlkXTtcbiAgICAgIGRlbGV0ZSBfdGhpczIudHlwZXNbc291cmNlSWRdO1xuICAgIH0pO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUucmVtb3ZlVGFyZ2V0ID0gZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0KHRhcmdldElkKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRoaXMuZ2V0VGFyZ2V0KHRhcmdldElkKSwgJ0V4cGVjdGVkIGFuIGV4aXN0aW5nIHRhcmdldC4nKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKF9hY3Rpb25zUmVnaXN0cnkucmVtb3ZlVGFyZ2V0KHRhcmdldElkKSk7XG5cbiAgICBfYXNhcDJbJ2RlZmF1bHQnXShmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGUgX3RoaXMzLmhhbmRsZXJzW3RhcmdldElkXTtcbiAgICAgIGRlbGV0ZSBfdGhpczMudHlwZXNbdGFyZ2V0SWRdO1xuICAgIH0pO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUucGluU291cmNlID0gZnVuY3Rpb24gcGluU291cmNlKHNvdXJjZUlkKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuZ2V0U291cmNlKHNvdXJjZUlkKTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHNvdXJjZSwgJ0V4cGVjdGVkIGFuIGV4aXN0aW5nIHNvdXJjZS4nKTtcblxuICAgIHRoaXMucGlubmVkU291cmNlSWQgPSBzb3VyY2VJZDtcbiAgICB0aGlzLnBpbm5lZFNvdXJjZSA9IHNvdXJjZTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLnVucGluU291cmNlID0gZnVuY3Rpb24gdW5waW5Tb3VyY2UoKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0aGlzLnBpbm5lZFNvdXJjZSwgJ05vIHNvdXJjZSBpcyBwaW5uZWQgYXQgdGhlIHRpbWUuJyk7XG5cbiAgICB0aGlzLnBpbm5lZFNvdXJjZUlkID0gbnVsbDtcbiAgICB0aGlzLnBpbm5lZFNvdXJjZSA9IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIEhhbmRsZXJSZWdpc3RyeTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhhbmRsZXJSZWdpc3RyeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9IYW5kbGVyUmVnaXN0cnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXROZXh0VW5pcXVlSWQ7XG52YXIgbmV4dFVuaXF1ZUlkID0gMDtcblxuZnVuY3Rpb24gZ2V0TmV4dFVuaXF1ZUlkKCkge1xuICByZXR1cm4gbmV4dFVuaXF1ZUlkKys7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL3V0aWxzL2dldE5leHRVbmlxdWVJZC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHJhd0FzYXAgcHJvdmlkZXMgZXZlcnl0aGluZyB3ZSBuZWVkIGV4Y2VwdCBleGNlcHRpb24gbWFuYWdlbWVudC5cbnZhciByYXdBc2FwID0gcmVxdWlyZShcIi4vcmF3XCIpO1xuLy8gUmF3VGFza3MgYXJlIHJlY3ljbGVkIHRvIHJlZHVjZSBHQyBjaHVybi5cbnZhciBmcmVlVGFza3MgPSBbXTtcbi8vIFdlIHF1ZXVlIGVycm9ycyB0byBlbnN1cmUgdGhleSBhcmUgdGhyb3duIGluIHJpZ2h0IG9yZGVyIChGSUZPKS5cbi8vIEFycmF5LWFzLXF1ZXVlIGlzIGdvb2QgZW5vdWdoIGhlcmUsIHNpbmNlIHdlIGFyZSBqdXN0IGRlYWxpbmcgd2l0aCBleGNlcHRpb25zLlxudmFyIHBlbmRpbmdFcnJvcnMgPSBbXTtcbnZhciByZXF1ZXN0RXJyb3JUaHJvdyA9IHJhd0FzYXAubWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKHRocm93Rmlyc3RFcnJvcik7XG5cbmZ1bmN0aW9uIHRocm93Rmlyc3RFcnJvcigpIHtcbiAgICBpZiAocGVuZGluZ0Vycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgcGVuZGluZ0Vycm9ycy5zaGlmdCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxscyBhIHRhc2sgYXMgc29vbiBhcyBwb3NzaWJsZSBhZnRlciByZXR1cm5pbmcsIGluIGl0cyBvd24gZXZlbnQsIHdpdGggcHJpb3JpdHlcbiAqIG92ZXIgb3RoZXIgZXZlbnRzIGxpa2UgYW5pbWF0aW9uLCByZWZsb3csIGFuZCByZXBhaW50LiBBbiBlcnJvciB0aHJvd24gZnJvbSBhblxuICogZXZlbnQgd2lsbCBub3QgaW50ZXJydXB0LCBub3IgZXZlbiBzdWJzdGFudGlhbGx5IHNsb3cgZG93biB0aGUgcHJvY2Vzc2luZyBvZlxuICogb3RoZXIgZXZlbnRzLCBidXQgd2lsbCBiZSByYXRoZXIgcG9zdHBvbmVkIHRvIGEgbG93ZXIgcHJpb3JpdHkgZXZlbnQuXG4gKiBAcGFyYW0ge3tjYWxsfX0gdGFzayBBIGNhbGxhYmxlIG9iamVjdCwgdHlwaWNhbGx5IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogYXJndW1lbnRzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFzYXA7XG5mdW5jdGlvbiBhc2FwKHRhc2spIHtcbiAgICB2YXIgcmF3VGFzaztcbiAgICBpZiAoZnJlZVRhc2tzLmxlbmd0aCkge1xuICAgICAgICByYXdUYXNrID0gZnJlZVRhc2tzLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJhd1Rhc2sgPSBuZXcgUmF3VGFzaygpO1xuICAgIH1cbiAgICByYXdUYXNrLnRhc2sgPSB0YXNrO1xuICAgIHJhd0FzYXAocmF3VGFzayk7XG59XG5cbi8vIFdlIHdyYXAgdGFza3Mgd2l0aCByZWN5Y2xhYmxlIHRhc2sgb2JqZWN0cy4gIEEgdGFzayBvYmplY3QgaW1wbGVtZW50c1xuLy8gYGNhbGxgLCBqdXN0IGxpa2UgYSBmdW5jdGlvbi5cbmZ1bmN0aW9uIFJhd1Rhc2soKSB7XG4gICAgdGhpcy50YXNrID0gbnVsbDtcbn1cblxuLy8gVGhlIHNvbGUgcHVycG9zZSBvZiB3cmFwcGluZyB0aGUgdGFzayBpcyB0byBjYXRjaCB0aGUgZXhjZXB0aW9uIGFuZCByZWN5Y2xlXG4vLyB0aGUgdGFzayBvYmplY3QgYWZ0ZXIgaXRzIHNpbmdsZSB1c2UuXG5SYXdUYXNrLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHRoaXMudGFzay5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGFzYXAub25lcnJvcikge1xuICAgICAgICAgICAgLy8gVGhpcyBob29rIGV4aXN0cyBwdXJlbHkgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gICAgICAgICAgICAvLyBJdHMgbmFtZSB3aWxsIGJlIHBlcmlvZGljYWxseSByYW5kb21pemVkIHRvIGJyZWFrIGFueSBjb2RlIHRoYXRcbiAgICAgICAgICAgIC8vIGRlcGVuZHMgb24gaXRzIGV4aXN0ZW5jZS5cbiAgICAgICAgICAgIGFzYXAub25lcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJbiBhIHdlYiBicm93c2VyLCBleGNlcHRpb25zIGFyZSBub3QgZmF0YWwuIEhvd2V2ZXIsIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzbG93aW5nIGRvd24gdGhlIHF1ZXVlIG9mIHBlbmRpbmcgdGFza3MsIHdlIHJldGhyb3cgdGhlIGVycm9yIGluIGFcbiAgICAgICAgICAgIC8vIGxvd2VyIHByaW9yaXR5IHR1cm4uXG4gICAgICAgICAgICBwZW5kaW5nRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgcmVxdWVzdEVycm9yVGhyb3coKTtcbiAgICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMudGFzayA9IG51bGw7XG4gICAgICAgIGZyZWVUYXNrc1tmcmVlVGFza3MubGVuZ3RoXSA9IHRoaXM7XG4gICAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FzYXAvYnJvd3Nlci1hc2FwLmpzXG4gKiogbW9kdWxlIGlkID0gMTA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gVXNlIHRoZSBmYXN0ZXN0IG1lYW5zIHBvc3NpYmxlIHRvIGV4ZWN1dGUgYSB0YXNrIGluIGl0cyBvd24gdHVybiwgd2l0aFxuLy8gcHJpb3JpdHkgb3ZlciBvdGhlciBldmVudHMgaW5jbHVkaW5nIElPLCBhbmltYXRpb24sIHJlZmxvdywgYW5kIHJlZHJhd1xuLy8gZXZlbnRzIGluIGJyb3dzZXJzLlxuLy9cbi8vIEFuIGV4Y2VwdGlvbiB0aHJvd24gYnkgYSB0YXNrIHdpbGwgcGVybWFuZW50bHkgaW50ZXJydXB0IHRoZSBwcm9jZXNzaW5nIG9mXG4vLyBzdWJzZXF1ZW50IHRhc2tzLiBUaGUgaGlnaGVyIGxldmVsIGBhc2FwYCBmdW5jdGlvbiBlbnN1cmVzIHRoYXQgaWYgYW5cbi8vIGV4Y2VwdGlvbiBpcyB0aHJvd24gYnkgYSB0YXNrLCB0aGF0IHRoZSB0YXNrIHF1ZXVlIHdpbGwgY29udGludWUgZmx1c2hpbmcgYXNcbi8vIHNvb24gYXMgcG9zc2libGUsIGJ1dCBpZiB5b3UgdXNlIGByYXdBc2FwYCBkaXJlY3RseSwgeW91IGFyZSByZXNwb25zaWJsZSB0b1xuLy8gZWl0aGVyIGVuc3VyZSB0aGF0IG5vIGV4Y2VwdGlvbnMgYXJlIHRocm93biBmcm9tIHlvdXIgdGFzaywgb3IgdG8gbWFudWFsbHlcbi8vIGNhbGwgYHJhd0FzYXAucmVxdWVzdEZsdXNoYCBpZiBhbiBleGNlcHRpb24gaXMgdGhyb3duLlxubW9kdWxlLmV4cG9ydHMgPSByYXdBc2FwO1xuZnVuY3Rpb24gcmF3QXNhcCh0YXNrKSB7XG4gICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcmVxdWVzdEZsdXNoKCk7XG4gICAgICAgIGZsdXNoaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gRXF1aXZhbGVudCB0byBwdXNoLCBidXQgYXZvaWRzIGEgZnVuY3Rpb24gY2FsbC5cbiAgICBxdWV1ZVtxdWV1ZS5sZW5ndGhdID0gdGFzaztcbn1cblxudmFyIHF1ZXVlID0gW107XG4vLyBPbmNlIGEgZmx1c2ggaGFzIGJlZW4gcmVxdWVzdGVkLCBubyBmdXJ0aGVyIGNhbGxzIHRvIGByZXF1ZXN0Rmx1c2hgIGFyZVxuLy8gbmVjZXNzYXJ5IHVudGlsIHRoZSBuZXh0IGBmbHVzaGAgY29tcGxldGVzLlxudmFyIGZsdXNoaW5nID0gZmFsc2U7XG4vLyBgcmVxdWVzdEZsdXNoYCBpcyBhbiBpbXBsZW1lbnRhdGlvbi1zcGVjaWZpYyBtZXRob2QgdGhhdCBhdHRlbXB0cyB0byBraWNrXG4vLyBvZmYgYSBgZmx1c2hgIGV2ZW50IGFzIHF1aWNrbHkgYXMgcG9zc2libGUuIGBmbHVzaGAgd2lsbCBhdHRlbXB0IHRvIGV4aGF1c3Rcbi8vIHRoZSBldmVudCBxdWV1ZSBiZWZvcmUgeWllbGRpbmcgdG8gdGhlIGJyb3dzZXIncyBvd24gZXZlbnQgbG9vcC5cbnZhciByZXF1ZXN0Rmx1c2g7XG4vLyBUaGUgcG9zaXRpb24gb2YgdGhlIG5leHQgdGFzayB0byBleGVjdXRlIGluIHRoZSB0YXNrIHF1ZXVlLiBUaGlzIGlzXG4vLyBwcmVzZXJ2ZWQgYmV0d2VlbiBjYWxscyB0byBgZmx1c2hgIHNvIHRoYXQgaXQgY2FuIGJlIHJlc3VtZWQgaWZcbi8vIGEgdGFzayB0aHJvd3MgYW4gZXhjZXB0aW9uLlxudmFyIGluZGV4ID0gMDtcbi8vIElmIGEgdGFzayBzY2hlZHVsZXMgYWRkaXRpb25hbCB0YXNrcyByZWN1cnNpdmVseSwgdGhlIHRhc2sgcXVldWUgY2FuIGdyb3dcbi8vIHVuYm91bmRlZC4gVG8gcHJldmVudCBtZW1vcnkgZXhoYXVzdGlvbiwgdGhlIHRhc2sgcXVldWUgd2lsbCBwZXJpb2RpY2FsbHlcbi8vIHRydW5jYXRlIGFscmVhZHktY29tcGxldGVkIHRhc2tzLlxudmFyIGNhcGFjaXR5ID0gMTAyNDtcblxuLy8gVGhlIGZsdXNoIGZ1bmN0aW9uIHByb2Nlc3NlcyBhbGwgdGFza3MgdGhhdCBoYXZlIGJlZW4gc2NoZWR1bGVkIHdpdGhcbi8vIGByYXdBc2FwYCB1bmxlc3MgYW5kIHVudGlsIG9uZSBvZiB0aG9zZSB0YXNrcyB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuLy8gSWYgYSB0YXNrIHRocm93cyBhbiBleGNlcHRpb24sIGBmbHVzaGAgZW5zdXJlcyB0aGF0IGl0cyBzdGF0ZSB3aWxsIHJlbWFpblxuLy8gY29uc2lzdGVudCBhbmQgd2lsbCByZXN1bWUgd2hlcmUgaXQgbGVmdCBvZmYgd2hlbiBjYWxsZWQgYWdhaW4uXG4vLyBIb3dldmVyLCBgZmx1c2hgIGRvZXMgbm90IG1ha2UgYW55IGFycmFuZ2VtZW50cyB0byBiZSBjYWxsZWQgYWdhaW4gaWYgYW5cbi8vIGV4Y2VwdGlvbiBpcyB0aHJvd24uXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB3aGlsZSAoaW5kZXggPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAvLyBBZHZhbmNlIHRoZSBpbmRleCBiZWZvcmUgY2FsbGluZyB0aGUgdGFzay4gVGhpcyBlbnN1cmVzIHRoYXQgd2Ugd2lsbFxuICAgICAgICAvLyBiZWdpbiBmbHVzaGluZyBvbiB0aGUgbmV4dCB0YXNrIHRoZSB0YXNrIHRocm93cyBhbiBlcnJvci5cbiAgICAgICAgaW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgIHF1ZXVlW2N1cnJlbnRJbmRleF0uY2FsbCgpO1xuICAgICAgICAvLyBQcmV2ZW50IGxlYWtpbmcgbWVtb3J5IGZvciBsb25nIGNoYWlucyBvZiByZWN1cnNpdmUgY2FsbHMgdG8gYGFzYXBgLlxuICAgICAgICAvLyBJZiB3ZSBjYWxsIGBhc2FwYCB3aXRoaW4gdGFza3Mgc2NoZWR1bGVkIGJ5IGBhc2FwYCwgdGhlIHF1ZXVlIHdpbGxcbiAgICAgICAgLy8gZ3JvdywgYnV0IHRvIGF2b2lkIGFuIE8obikgd2FsayBmb3IgZXZlcnkgdGFzayB3ZSBleGVjdXRlLCB3ZSBkb24ndFxuICAgICAgICAvLyBzaGlmdCB0YXNrcyBvZmYgdGhlIHF1ZXVlIGFmdGVyIHRoZXkgaGF2ZSBiZWVuIGV4ZWN1dGVkLlxuICAgICAgICAvLyBJbnN0ZWFkLCB3ZSBwZXJpb2RpY2FsbHkgc2hpZnQgMTAyNCB0YXNrcyBvZmYgdGhlIHF1ZXVlLlxuICAgICAgICBpZiAoaW5kZXggPiBjYXBhY2l0eSkge1xuICAgICAgICAgICAgLy8gTWFudWFsbHkgc2hpZnQgYWxsIHZhbHVlcyBzdGFydGluZyBhdCB0aGUgaW5kZXggYmFjayB0byB0aGVcbiAgICAgICAgICAgIC8vIGJlZ2lubmluZyBvZiB0aGUgcXVldWUuXG4gICAgICAgICAgICBmb3IgKHZhciBzY2FuID0gMCwgbmV3TGVuZ3RoID0gcXVldWUubGVuZ3RoIC0gaW5kZXg7IHNjYW4gPCBuZXdMZW5ndGg7IHNjYW4rKykge1xuICAgICAgICAgICAgICAgIHF1ZXVlW3NjYW5dID0gcXVldWVbc2NhbiArIGluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXVlLmxlbmd0aCAtPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgIGluZGV4ID0gMDtcbiAgICBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBgcmVxdWVzdEZsdXNoYCBpcyBpbXBsZW1lbnRlZCB1c2luZyBhIHN0cmF0ZWd5IGJhc2VkIG9uIGRhdGEgY29sbGVjdGVkIGZyb21cbi8vIGV2ZXJ5IGF2YWlsYWJsZSBTYXVjZUxhYnMgU2VsZW5pdW0gd2ViIGRyaXZlciB3b3JrZXIgYXQgdGltZSBvZiB3cml0aW5nLlxuLy8gaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMW1HLTVVWUd1cDVxeEdkRU1Xa2hQNkJXQ3owNTNOVWIyRTFRb1VUVTE2dUEvZWRpdCNnaWQ9NzgzNzI0NTkzXG5cbi8vIFNhZmFyaSA2IGFuZCA2LjEgZm9yIGRlc2t0b3AsIGlQYWQsIGFuZCBpUGhvbmUgYXJlIHRoZSBvbmx5IGJyb3dzZXJzIHRoYXRcbi8vIGhhdmUgV2ViS2l0TXV0YXRpb25PYnNlcnZlciBidXQgbm90IHVuLXByZWZpeGVkIE11dGF0aW9uT2JzZXJ2ZXIuXG4vLyBNdXN0IHVzZSBgZ2xvYmFsYCBpbnN0ZWFkIG9mIGB3aW5kb3dgIHRvIHdvcmsgaW4gYm90aCBmcmFtZXMgYW5kIHdlYlxuLy8gd29ya2Vycy4gYGdsb2JhbGAgaXMgYSBwcm92aXNpb24gb2YgQnJvd3NlcmlmeSwgTXIsIE1ycywgb3IgTW9wLlxudmFyIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cbi8vIE11dGF0aW9uT2JzZXJ2ZXJzIGFyZSBkZXNpcmFibGUgYmVjYXVzZSB0aGV5IGhhdmUgaGlnaCBwcmlvcml0eSBhbmQgd29ya1xuLy8gcmVsaWFibHkgZXZlcnl3aGVyZSB0aGV5IGFyZSBpbXBsZW1lbnRlZC5cbi8vIFRoZXkgYXJlIGltcGxlbWVudGVkIGluIGFsbCBtb2Rlcm4gYnJvd3NlcnMuXG4vL1xuLy8gLSBBbmRyb2lkIDQtNC4zXG4vLyAtIENocm9tZSAyNi0zNFxuLy8gLSBGaXJlZm94IDE0LTI5XG4vLyAtIEludGVybmV0IEV4cGxvcmVyIDExXG4vLyAtIGlQYWQgU2FmYXJpIDYtNy4xXG4vLyAtIGlQaG9uZSBTYWZhcmkgNy03LjFcbi8vIC0gU2FmYXJpIDYtN1xuaWYgKHR5cGVvZiBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmVxdWVzdEZsdXNoID0gbWFrZVJlcXVlc3RDYWxsRnJvbU11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpO1xuXG4vLyBNZXNzYWdlQ2hhbm5lbHMgYXJlIGRlc2lyYWJsZSBiZWNhdXNlIHRoZXkgZ2l2ZSBkaXJlY3QgYWNjZXNzIHRvIHRoZSBIVE1MXG4vLyB0YXNrIHF1ZXVlLCBhcmUgaW1wbGVtZW50ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAsIFNhZmFyaSA1LjAtMSwgYW5kIE9wZXJhXG4vLyAxMS0xMiwgYW5kIGluIHdlYiB3b3JrZXJzIGluIG1hbnkgZW5naW5lcy5cbi8vIEFsdGhvdWdoIG1lc3NhZ2UgY2hhbm5lbHMgeWllbGQgdG8gYW55IHF1ZXVlZCByZW5kZXJpbmcgYW5kIElPIHRhc2tzLCB0aGV5XG4vLyB3b3VsZCBiZSBiZXR0ZXIgdGhhbiBpbXBvc2luZyB0aGUgNG1zIGRlbGF5IG9mIHRpbWVycy5cbi8vIEhvd2V2ZXIsIHRoZXkgZG8gbm90IHdvcmsgcmVsaWFibHkgaW4gSW50ZXJuZXQgRXhwbG9yZXIgb3IgU2FmYXJpLlxuXG4vLyBJbnRlcm5ldCBFeHBsb3JlciAxMCBpcyB0aGUgb25seSBicm93c2VyIHRoYXQgaGFzIHNldEltbWVkaWF0ZSBidXQgZG9lc1xuLy8gbm90IGhhdmUgTXV0YXRpb25PYnNlcnZlcnMuXG4vLyBBbHRob3VnaCBzZXRJbW1lZGlhdGUgeWllbGRzIHRvIHRoZSBicm93c2VyJ3MgcmVuZGVyZXIsIGl0IHdvdWxkIGJlXG4vLyBwcmVmZXJyYWJsZSB0byBmYWxsaW5nIGJhY2sgdG8gc2V0VGltZW91dCBzaW5jZSBpdCBkb2VzIG5vdCBoYXZlXG4vLyB0aGUgbWluaW11bSA0bXMgcGVuYWx0eS5cbi8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgYXBwZWFycyB0byBiZSBhIGJ1ZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCBNb2JpbGUgKGFuZFxuLy8gRGVza3RvcCB0byBhIGxlc3NlciBleHRlbnQpIHRoYXQgcmVuZGVycyBib3RoIHNldEltbWVkaWF0ZSBhbmRcbi8vIE1lc3NhZ2VDaGFubmVsIHVzZWxlc3MgZm9yIHRoZSBwdXJwb3NlcyBvZiBBU0FQLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaXNrb3dhbC9xL2lzc3Vlcy8zOTZcblxuLy8gVGltZXJzIGFyZSBpbXBsZW1lbnRlZCB1bml2ZXJzYWxseS5cbi8vIFdlIGZhbGwgYmFjayB0byB0aW1lcnMgaW4gd29ya2VycyBpbiBtb3N0IGVuZ2luZXMsIGFuZCBpbiBmb3JlZ3JvdW5kXG4vLyBjb250ZXh0cyBpbiB0aGUgZm9sbG93aW5nIGJyb3dzZXJzLlxuLy8gSG93ZXZlciwgbm90ZSB0aGF0IGV2ZW4gdGhpcyBzaW1wbGUgY2FzZSByZXF1aXJlcyBudWFuY2VzIHRvIG9wZXJhdGUgaW4gYVxuLy8gYnJvYWQgc3BlY3RydW0gb2YgYnJvd3NlcnMuXG4vL1xuLy8gLSBGaXJlZm94IDMtMTNcbi8vIC0gSW50ZXJuZXQgRXhwbG9yZXIgNi05XG4vLyAtIGlQYWQgU2FmYXJpIDQuM1xuLy8gLSBMeW54IDIuOC43XG59IGVsc2Uge1xuICAgIHJlcXVlc3RGbHVzaCA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcihmbHVzaCk7XG59XG5cbi8vIGByZXF1ZXN0Rmx1c2hgIHJlcXVlc3RzIHRoYXQgdGhlIGhpZ2ggcHJpb3JpdHkgZXZlbnQgcXVldWUgYmUgZmx1c2hlZCBhc1xuLy8gc29vbiBhcyBwb3NzaWJsZS5cbi8vIFRoaXMgaXMgdXNlZnVsIHRvIHByZXZlbnQgYW4gZXJyb3IgdGhyb3duIGluIGEgdGFzayBmcm9tIHN0YWxsaW5nIHRoZSBldmVudFxuLy8gcXVldWUgaWYgdGhlIGV4Y2VwdGlvbiBoYW5kbGVkIGJ5IE5vZGUuanPigJlzXG4vLyBgcHJvY2Vzcy5vbihcInVuY2F1Z2h0RXhjZXB0aW9uXCIpYCBvciBieSBhIGRvbWFpbi5cbnJhd0FzYXAucmVxdWVzdEZsdXNoID0gcmVxdWVzdEZsdXNoO1xuXG4vLyBUbyByZXF1ZXN0IGEgaGlnaCBwcmlvcml0eSBldmVudCwgd2UgaW5kdWNlIGEgbXV0YXRpb24gb2JzZXJ2ZXIgYnkgdG9nZ2xpbmdcbi8vIHRoZSB0ZXh0IG9mIGEgdGV4dCBub2RlIGJldHdlZW4gXCIxXCIgYW5kIFwiLTFcIi5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21NdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHRvZ2dsZSA9IDE7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xuICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4gICAgICAgIHRvZ2dsZSA9IC10b2dnbGU7XG4gICAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZTtcbiAgICB9O1xufVxuXG4vLyBUaGUgbWVzc2FnZSBjaGFubmVsIHRlY2huaXF1ZSB3YXMgZGlzY292ZXJlZCBieSBNYWx0ZSBVYmwgYW5kIHdhcyB0aGVcbi8vIG9yaWdpbmFsIGZvdW5kYXRpb24gZm9yIHRoaXMgbGlicmFyeS5cbi8vIGh0dHA6Ly93d3cubm9uYmxvY2tpbmcuaW8vMjAxMS8wNi93aW5kb3duZXh0dGljay5odG1sXG5cbi8vIFNhZmFyaSA2LjAuNSAoYXQgbGVhc3QpIGludGVybWl0dGVudGx5IGZhaWxzIHRvIGNyZWF0ZSBtZXNzYWdlIHBvcnRzIG9uIGFcbi8vIHBhZ2UncyBmaXJzdCBsb2FkLiBUaGFua2Z1bGx5LCB0aGlzIHZlcnNpb24gb2YgU2FmYXJpIHN1cHBvcnRzXG4vLyBNdXRhdGlvbk9ic2VydmVycywgc28gd2UgZG9uJ3QgbmVlZCB0byBmYWxsIGJhY2sgaW4gdGhhdCBjYXNlLlxuXG4vLyBmdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tTWVzc2FnZUNoYW5uZWwoY2FsbGJhY2spIHtcbi8vICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuLy8gICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuLy8gICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuLy8gICAgIH07XG4vLyB9XG5cbi8vIEZvciByZWFzb25zIGV4cGxhaW5lZCBhYm92ZSwgd2UgYXJlIGFsc28gdW5hYmxlIHRvIHVzZSBgc2V0SW1tZWRpYXRlYFxuLy8gdW5kZXIgYW55IGNpcmN1bXN0YW5jZXMuXG4vLyBFdmVuIGlmIHdlIHdlcmUsIHRoZXJlIGlzIGFub3RoZXIgYnVnIGluIEludGVybmV0IEV4cGxvcmVyIDEwLlxuLy8gSXQgaXMgbm90IHN1ZmZpY2llbnQgdG8gYXNzaWduIGBzZXRJbW1lZGlhdGVgIHRvIGByZXF1ZXN0Rmx1c2hgIGJlY2F1c2Vcbi8vIGBzZXRJbW1lZGlhdGVgIG11c3QgYmUgY2FsbGVkICpieSBuYW1lKiBhbmQgdGhlcmVmb3JlIG11c3QgYmUgd3JhcHBlZCBpbiBhXG4vLyBjbG9zdXJlLlxuLy8gTmV2ZXIgZm9yZ2V0LlxuXG4vLyBmdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tU2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuLy8gICAgICAgICBzZXRJbW1lZGlhdGUoY2FsbGJhY2spO1xuLy8gICAgIH07XG4vLyB9XG5cbi8vIFNhZmFyaSA2LjAgaGFzIGEgcHJvYmxlbSB3aGVyZSB0aW1lcnMgd2lsbCBnZXQgbG9zdCB3aGlsZSB0aGUgdXNlciBpc1xuLy8gc2Nyb2xsaW5nLiBUaGlzIHByb2JsZW0gZG9lcyBub3QgaW1wYWN0IEFTQVAgYmVjYXVzZSBTYWZhcmkgNi4wIHN1cHBvcnRzXG4vLyBtdXRhdGlvbiBvYnNlcnZlcnMsIHNvIHRoYXQgaW1wbGVtZW50YXRpb24gaXMgdXNlZCBpbnN0ZWFkLlxuLy8gSG93ZXZlciwgaWYgd2UgZXZlciBlbGVjdCB0byB1c2UgdGltZXJzIGluIFNhZmFyaSwgdGhlIHByZXZhbGVudCB3b3JrLWFyb3VuZFxuLy8gaXMgdG8gYWRkIGEgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHRoYXQgY2FsbHMgZm9yIGEgZmx1c2guXG5cbi8vIGBzZXRUaW1lb3V0YCBkb2VzIG5vdCBjYWxsIHRoZSBwYXNzZWQgY2FsbGJhY2sgaWYgdGhlIGRlbGF5IGlzIGxlc3MgdGhhblxuLy8gYXBwcm94aW1hdGVseSA3IGluIHdlYiB3b3JrZXJzIGluIEZpcmVmb3ggOCB0aHJvdWdoIDE4LCBhbmQgc29tZXRpbWVzIG5vdFxuLy8gZXZlbiB0aGVuLlxuXG5mdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXIoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4gICAgICAgIC8vIFdlIGRpc3BhdGNoIGEgdGltZW91dCB3aXRoIGEgc3BlY2lmaWVkIGRlbGF5IG9mIDAgZm9yIGVuZ2luZXMgdGhhdFxuICAgICAgICAvLyBjYW4gcmVsaWFibHkgYWNjb21tb2RhdGUgdGhhdCByZXF1ZXN0LiBUaGlzIHdpbGwgdXN1YWxseSBiZSBzbmFwcGVkXG4gICAgICAgIC8vIHRvIGEgNCBtaWxpc2Vjb25kIGRlbGF5LCBidXQgb25jZSB3ZSdyZSBmbHVzaGluZywgdGhlcmUncyBubyBkZWxheVxuICAgICAgICAvLyBiZXR3ZWVuIGV2ZW50cy5cbiAgICAgICAgdmFyIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGhhbmRsZVRpbWVyLCAwKTtcbiAgICAgICAgLy8gSG93ZXZlciwgc2luY2UgdGhpcyB0aW1lciBnZXRzIGZyZXF1ZW50bHkgZHJvcHBlZCBpbiBGaXJlZm94XG4gICAgICAgIC8vIHdvcmtlcnMsIHdlIGVubGlzdCBhbiBpbnRlcnZhbCBoYW5kbGUgdGhhdCB3aWxsIHRyeSB0byBmaXJlXG4gICAgICAgIC8vIGFuIGV2ZW50IDIwIHRpbWVzIHBlciBzZWNvbmQgdW50aWwgaXQgc3VjY2VlZHMuXG4gICAgICAgIHZhciBpbnRlcnZhbEhhbmRsZSA9IHNldEludGVydmFsKGhhbmRsZVRpbWVyLCA1MCk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVGltZXIoKSB7XG4gICAgICAgICAgICAvLyBXaGljaGV2ZXIgdGltZXIgc3VjY2VlZHMgd2lsbCBjYW5jZWwgYm90aCB0aW1lcnMgYW5kXG4gICAgICAgICAgICAvLyBleGVjdXRlIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxIYW5kbGUpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIFRoaXMgaXMgZm9yIGBhc2FwLmpzYCBvbmx5LlxuLy8gSXRzIG5hbWUgd2lsbCBiZSBwZXJpb2RpY2FsbHkgcmFuZG9taXplZCB0byBicmVhayBhbnkgY29kZSB0aGF0IGRlcGVuZHMgb25cbi8vIGl0cyBleGlzdGVuY2UuXG5yYXdBc2FwLm1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lciA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcjtcblxuLy8gQVNBUCB3YXMgb3JpZ2luYWxseSBhIG5leHRUaWNrIHNoaW0gaW5jbHVkZWQgaW4gUS4gVGhpcyB3YXMgZmFjdG9yZWQgb3V0XG4vLyBpbnRvIHRoaXMgQVNBUCBwYWNrYWdlLiBJdCB3YXMgbGF0ZXIgYWRhcHRlZCB0byBSU1ZQIHdoaWNoIG1hZGUgZnVydGhlclxuLy8gYW1lbmRtZW50cy4gVGhlc2UgZGVjaXNpb25zLCBwYXJ0aWN1bGFybHkgdG8gbWFyZ2luYWxpemUgTWVzc2FnZUNoYW5uZWwgYW5kXG4vLyB0byBjYXB0dXJlIHRoZSBNdXRhdGlvbk9ic2VydmVyIGltcGxlbWVudGF0aW9uIGluIGEgY2xvc3VyZSwgd2VyZSBpbnRlZ3JhdGVkXG4vLyBiYWNrIGludG8gQVNBUCBwcm9wZXIuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGlsZGVpby9yc3ZwLmpzL2Jsb2IvY2RkZjcyMzI1NDZhOWNmODU4NTI0Yjc1Y2RlNmY5ZWRmNzI2MjBhNy9saWIvcnN2cC9hc2FwLmpzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hc2FwL2Jyb3dzZXItcmF3LmpzXG4gKiogbW9kdWxlIGlkID0gMTA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIERyYWdTb3VyY2UgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEcmFnU291cmNlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnU291cmNlKTtcbiAgfVxuXG4gIERyYWdTb3VyY2UucHJvdG90eXBlLmNhbkRyYWcgPSBmdW5jdGlvbiBjYW5EcmFnKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIERyYWdTb3VyY2UucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbiBpc0RyYWdnaW5nKG1vbml0b3IsIGhhbmRsZSkge1xuICAgIHJldHVybiBoYW5kbGUgPT09IG1vbml0b3IuZ2V0U291cmNlSWQoKTtcbiAgfTtcblxuICBEcmFnU291cmNlLnByb3RvdHlwZS5lbmREcmFnID0gZnVuY3Rpb24gZW5kRHJhZygpIHt9O1xuXG4gIHJldHVybiBEcmFnU291cmNlO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEcmFnU291cmNlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvRHJhZ1NvdXJjZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEcm9wVGFyZ2V0ID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRHJvcFRhcmdldCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJvcFRhcmdldCk7XG4gIH1cblxuICBEcm9wVGFyZ2V0LnByb3RvdHlwZS5jYW5Ecm9wID0gZnVuY3Rpb24gY2FuRHJvcCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBEcm9wVGFyZ2V0LnByb3RvdHlwZS5ob3ZlciA9IGZ1bmN0aW9uIGhvdmVyKCkge307XG5cbiAgRHJvcFRhcmdldC5wcm90b3R5cGUuZHJvcCA9IGZ1bmN0aW9uIGRyb3AoKSB7fTtcblxuICByZXR1cm4gRHJvcFRhcmdldDtcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRHJvcFRhcmdldDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL0Ryb3BUYXJnZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUJhY2tlbmQ7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfbG9kYXNoTm9vcCA9IHJlcXVpcmUoJ2xvZGFzaC9ub29wJyk7XG5cbnZhciBfbG9kYXNoTm9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hOb29wKTtcblxudmFyIFRlc3RCYWNrZW5kID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGVzdEJhY2tlbmQobWFuYWdlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0QmFja2VuZCk7XG5cbiAgICB0aGlzLmFjdGlvbnMgPSBtYW5hZ2VyLmdldEFjdGlvbnMoKTtcbiAgfVxuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uIHNldHVwKCkge1xuICAgIHRoaXMuZGlkQ2FsbFNldHVwID0gdHJ1ZTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiB0ZWFyZG93bigpIHtcbiAgICB0aGlzLmRpZENhbGxUZWFyZG93biA9IHRydWU7XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLmNvbm5lY3REcmFnU291cmNlID0gZnVuY3Rpb24gY29ubmVjdERyYWdTb3VyY2UoKSB7XG4gICAgcmV0dXJuIF9sb2Rhc2hOb29wMlsnZGVmYXVsdCddO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5jb25uZWN0RHJhZ1ByZXZpZXcgPSBmdW5jdGlvbiBjb25uZWN0RHJhZ1ByZXZpZXcoKSB7XG4gICAgcmV0dXJuIF9sb2Rhc2hOb29wMlsnZGVmYXVsdCddO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5jb25uZWN0RHJvcFRhcmdldCA9IGZ1bmN0aW9uIGNvbm5lY3REcm9wVGFyZ2V0KCkge1xuICAgIHJldHVybiBfbG9kYXNoTm9vcDJbJ2RlZmF1bHQnXTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuc2ltdWxhdGVCZWdpbkRyYWcgPSBmdW5jdGlvbiBzaW11bGF0ZUJlZ2luRHJhZyhzb3VyY2VJZHMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmFjdGlvbnMuYmVnaW5EcmFnKHNvdXJjZUlkcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLnNpbXVsYXRlUHVibGlzaERyYWdTb3VyY2UgPSBmdW5jdGlvbiBzaW11bGF0ZVB1Ymxpc2hEcmFnU291cmNlKCkge1xuICAgIHRoaXMuYWN0aW9ucy5wdWJsaXNoRHJhZ1NvdXJjZSgpO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5zaW11bGF0ZUhvdmVyID0gZnVuY3Rpb24gc2ltdWxhdGVIb3Zlcih0YXJnZXRJZHMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmFjdGlvbnMuaG92ZXIodGFyZ2V0SWRzLCBvcHRpb25zKTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuc2ltdWxhdGVEcm9wID0gZnVuY3Rpb24gc2ltdWxhdGVEcm9wKCkge1xuICAgIHRoaXMuYWN0aW9ucy5kcm9wKCk7XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLnNpbXVsYXRlRW5kRHJhZyA9IGZ1bmN0aW9uIHNpbXVsYXRlRW5kRHJhZygpIHtcbiAgICB0aGlzLmFjdGlvbnMuZW5kRHJhZygpO1xuICB9O1xuXG4gIHJldHVybiBUZXN0QmFja2VuZDtcbn0pKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhY2tlbmQobWFuYWdlcikge1xuICByZXR1cm4gbmV3IFRlc3RCYWNrZW5kKG1hbmFnZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvYmFja2VuZHMvY3JlYXRlVGVzdEJhY2tlbmQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNoZWNrRGVjb3JhdG9yQXJndW1lbnRzO1xuXG5mdW5jdGlvbiBjaGVja0RlY29yYXRvckFyZ3VtZW50cyhmdW5jdGlvbk5hbWUsIHNpZ25hdHVyZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYXJnID0gYXJnc1tpXTtcbiAgICAgIGlmIChhcmcgJiYgYXJnLnByb3RvdHlwZSAmJiBhcmcucHJvdG90eXBlLnJlbmRlcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgJ1lvdSBzZWVtIHRvIGJlIGFwcGx5aW5nIHRoZSBhcmd1bWVudHMgaW4gdGhlIHdyb25nIG9yZGVyLiAnICsgKCdJdCBzaG91bGQgYmUgJyArIGZ1bmN0aW9uTmFtZSArICcoJyArIHNpZ25hdHVyZSArICcpKENvbXBvbmVudCksIG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC4gJykgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtdHJvdWJsZXNob290aW5nLmh0bWwjeW91LXNlZW0tdG8tYmUtYXBwbHlpbmctdGhlLWFyZ3VtZW50cy1pbi10aGUtd3Jvbmctb3JkZXInKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMTEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyYWdMYXllcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1NoYWxsb3dFcXVhbCk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWxTY2FsYXIgPSByZXF1aXJlKCcuL3V0aWxzL3NoYWxsb3dFcXVhbFNjYWxhcicpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyKTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzUGxhaW5PYmplY3QpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMgPSByZXF1aXJlKCcuL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzJyk7XG5cbnZhciBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzKTtcblxuZnVuY3Rpb24gRHJhZ0xheWVyKGNvbGxlY3QpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czJbJ2RlZmF1bHQnXS5hcHBseSh1bmRlZmluZWQsIFsnRHJhZ0xheWVyJywgJ2NvbGxlY3RbLCBvcHRpb25zXSddLmNvbmNhdChfc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGNvbGxlY3QgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBcImNvbGxlY3RcIiBwcm92aWRlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gRHJhZ0xheWVyICcgKyAndG8gYmUgYSBmdW5jdGlvbiB0aGF0IGNvbGxlY3RzIHByb3BzIHRvIGluamVjdCBpbnRvIHRoZSBjb21wb25lbnQuICcsICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLWxheWVyLmh0bWwnLCBjb2xsZWN0KTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShvcHRpb25zKSwgJ0V4cGVjdGVkIFwib3B0aW9uc1wiIHByb3ZpZGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gRHJhZ0xheWVyIHRvIGJlICcgKyAnYSBwbGFpbiBvYmplY3Qgd2hlbiBzcGVjaWZpZWQuICcgKyAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1sYXllci5odG1sJywgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRlTGF5ZXIoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgdmFyIF9vcHRpb25zJGFyZVByb3BzRXF1YWwgPSBvcHRpb25zLmFyZVByb3BzRXF1YWw7XG4gICAgdmFyIGFyZVByb3BzRXF1YWwgPSBfb3B0aW9ucyRhcmVQcm9wc0VxdWFsID09PSB1bmRlZmluZWQgPyBfdXRpbHNTaGFsbG93RXF1YWxTY2FsYXIyWydkZWZhdWx0J10gOiBfb3B0aW9ucyRhcmVQcm9wc0VxdWFsO1xuXG4gICAgdmFyIGRpc3BsYXlOYW1lID0gRGVjb3JhdGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IERlY29yYXRlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuXG4gICAgcmV0dXJuIChmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKERyYWdMYXllckNvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5jaGlsZDtcbiAgICAgIH07XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAhYXJlUHJvcHNFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpIHx8ICFfdXRpbHNTaGFsbG93RXF1YWwyWydkZWZhdWx0J10obmV4dFN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgICAgIH07XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhEcmFnTGF5ZXJDb250YWluZXIsIG51bGwsIFt7XG4gICAgICAgIGtleTogJ0RlY29yYXRlZENvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBEZWNvcmF0ZWRDb21wb25lbnQsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzcGxheU5hbWUnLFxuICAgICAgICB2YWx1ZTogJ0RyYWdMYXllcignICsgZGlzcGxheU5hbWUgKyAnKScsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29udGV4dFR5cGVzJyxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBkcmFnRHJvcE1hbmFnZXI6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfV0pO1xuXG4gICAgICBmdW5jdGlvbiBEcmFnTGF5ZXJDb250YWluZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdMYXllckNvbnRhaW5lcik7XG5cbiAgICAgICAgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMubWFuYWdlciA9IGNvbnRleHQuZHJhZ0Ryb3BNYW5hZ2VyO1xuICAgICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiB0aGlzLm1hbmFnZXIgPT09ICdvYmplY3QnLCAnQ291bGQgbm90IGZpbmQgdGhlIGRyYWcgYW5kIGRyb3AgbWFuYWdlciBpbiB0aGUgY29udGV4dCBvZiAlcy4gJyArICdNYWtlIHN1cmUgdG8gd3JhcCB0aGUgdG9wLWxldmVsIGNvbXBvbmVudCBvZiB5b3VyIGFwcCB3aXRoIERyYWdEcm9wQ29udGV4dC4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy10cm91Ymxlc2hvb3RpbmcuaHRtbCNjb3VsZC1ub3QtZmluZC10aGUtZHJhZy1hbmQtZHJvcC1tYW5hZ2VyLWluLXRoZS1jb250ZXh0JywgZGlzcGxheU5hbWUsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgRHJhZ0xheWVyQ29udGFpbmVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IHRydWU7XG5cbiAgICAgICAgdmFyIG1vbml0b3IgPSB0aGlzLm1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbU9mZnNldENoYW5nZSA9IG1vbml0b3Iuc3Vic2NyaWJlVG9PZmZzZXRDaGFuZ2UodGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVN0YXRlQ2hhbmdlID0gbW9uaXRvci5zdWJzY3JpYmVUb1N0YXRlQ2hhbmdlKHRoaXMuaGFuZGxlQ2hhbmdlKTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgRHJhZ0xheWVyQ29udGFpbmVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tT2Zmc2V0Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tU3RhdGVDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNDdXJyZW50bHlNb3VudGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHRTdGF0ZSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICAgIGlmICghX3V0aWxzU2hhbGxvd0VxdWFsMlsnZGVmYXVsdCddKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSkpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuZ2V0Q3VycmVudFN0YXRlID0gZnVuY3Rpb24gZ2V0Q3VycmVudFN0YXRlKCkge1xuICAgICAgICB2YXIgbW9uaXRvciA9IHRoaXMubWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgICAgIHJldHVybiBjb2xsZWN0KG1vbml0b3IpO1xuICAgICAgfTtcblxuICAgICAgRHJhZ0xheWVyQ29udGFpbmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChEZWNvcmF0ZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlLCB7XG4gICAgICAgICAgcmVmOiAnY2hpbGQnIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBEcmFnTGF5ZXJDb250YWluZXI7XG4gICAgfSkoX3JlYWN0LkNvbXBvbmVudCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvRHJhZ0xheWVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gc2hhbGxvd0VxdWFsO1xuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFoYXNPd24uY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgb2JqQVtrZXlzQVtpXV0gIT09IG9iakJba2V5c0FbaV1dKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbEEgPSBvYmpBW2tleXNBW2ldXTtcbiAgICB2YXIgdmFsQiA9IG9iakJba2V5c0FbaV1dO1xuXG4gICAgaWYgKHZhbEEgIT09IHZhbEIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL3NoYWxsb3dFcXVhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDExNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc2hhbGxvd0VxdWFsU2NhbGFyO1xuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWxTY2FsYXIob2JqQSwgb2JqQikge1xuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFoYXNPd24uY2FsbChvYmpCLCBrZXlzQVtpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsQSA9IG9iakFba2V5c0FbaV1dO1xuICAgIHZhciB2YWxCID0gb2JqQltrZXlzQVtpXV07XG5cbiAgICBpZiAodmFsQSAhPT0gdmFsQiB8fCB0eXBlb2YgdmFsQSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbEIgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvdXRpbHMvc2hhbGxvd0VxdWFsU2NhbGFyLmpzXG4gKiogbW9kdWxlIGlkID0gMTE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgX3NsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gRHJhZ1NvdXJjZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNQbGFpbk9iamVjdCk7XG5cbnZhciBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50cyA9IHJlcXVpcmUoJy4vdXRpbHMvY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMnKTtcblxudmFyIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMpO1xuXG52YXIgX2RlY29yYXRlSGFuZGxlciA9IHJlcXVpcmUoJy4vZGVjb3JhdGVIYW5kbGVyJyk7XG5cbnZhciBfZGVjb3JhdGVIYW5kbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY29yYXRlSGFuZGxlcik7XG5cbnZhciBfcmVnaXN0ZXJTb3VyY2UgPSByZXF1aXJlKCcuL3JlZ2lzdGVyU291cmNlJyk7XG5cbnZhciBfcmVnaXN0ZXJTb3VyY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVnaXN0ZXJTb3VyY2UpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZUZhY3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZVNvdXJjZUZhY3RvcnknKTtcblxudmFyIF9jcmVhdGVTb3VyY2VGYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVNvdXJjZUZhY3RvcnkpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZU1vbml0b3IgPSByZXF1aXJlKCcuL2NyZWF0ZVNvdXJjZU1vbml0b3InKTtcblxudmFyIF9jcmVhdGVTb3VyY2VNb25pdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVNvdXJjZU1vbml0b3IpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZUNvbm5lY3RvciA9IHJlcXVpcmUoJy4vY3JlYXRlU291cmNlQ29ubmVjdG9yJyk7XG5cbnZhciBfY3JlYXRlU291cmNlQ29ubmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVNvdXJjZUNvbm5lY3Rvcik7XG5cbnZhciBfdXRpbHNJc1ZhbGlkVHlwZSA9IHJlcXVpcmUoJy4vdXRpbHMvaXNWYWxpZFR5cGUnKTtcblxudmFyIF91dGlsc0lzVmFsaWRUeXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzSXNWYWxpZFR5cGUpO1xuXG5mdW5jdGlvbiBEcmFnU291cmNlKHR5cGUsIHNwZWMsIGNvbGxlY3QpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1szXTtcblxuICBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czJbJ2RlZmF1bHQnXS5hcHBseSh1bmRlZmluZWQsIFsnRHJhZ1NvdXJjZScsICd0eXBlLCBzcGVjLCBjb2xsZWN0Wywgb3B0aW9uc10nXS5jb25jYXQoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICB2YXIgZ2V0VHlwZSA9IHR5cGU7XG4gIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX3V0aWxzSXNWYWxpZFR5cGUyWydkZWZhdWx0J10odHlwZSksICdFeHBlY3RlZCBcInR5cGVcIiBwcm92aWRlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gRHJhZ1NvdXJjZSB0byBiZSAnICsgJ2Egc3RyaW5nLCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHN0cmluZyBnaXZlbiB0aGUgY3VycmVudCBwcm9wcy4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgdHlwZSk7XG4gICAgZ2V0VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH07XG4gIH1cbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShzcGVjKSwgJ0V4cGVjdGVkIFwic3BlY1wiIHByb3ZpZGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gRHJhZ1NvdXJjZSB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgc3BlYyk7XG4gIHZhciBjcmVhdGVTb3VyY2UgPSBfY3JlYXRlU291cmNlRmFjdG9yeTJbJ2RlZmF1bHQnXShzcGVjKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgY29sbGVjdCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIFwiY29sbGVjdFwiIHByb3ZpZGVkIGFzIHRoZSB0aGlyZCBhcmd1bWVudCB0byBEcmFnU291cmNlIHRvIGJlICcgKyAnYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwbGFpbiBvYmplY3Qgb2YgcHJvcHMgdG8gaW5qZWN0LiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBjb2xsZWN0KTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShvcHRpb25zKSwgJ0V4cGVjdGVkIFwib3B0aW9uc1wiIHByb3ZpZGVkIGFzIHRoZSBmb3VydGggYXJndW1lbnQgdG8gRHJhZ1NvdXJjZSB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0IHdoZW4gc3BlY2lmaWVkLiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBjb2xsZWN0KTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGVTb3VyY2UoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIF9kZWNvcmF0ZUhhbmRsZXIyWydkZWZhdWx0J10oe1xuICAgICAgY29ubmVjdEJhY2tlbmQ6IGZ1bmN0aW9uIGNvbm5lY3RCYWNrZW5kKGJhY2tlbmQsIHNvdXJjZUlkKSB7XG4gICAgICAgIHJldHVybiBiYWNrZW5kLmNvbm5lY3REcmFnU291cmNlKHNvdXJjZUlkKTtcbiAgICAgIH0sXG4gICAgICBjb250YWluZXJEaXNwbGF5TmFtZTogJ0RyYWdTb3VyY2UnLFxuICAgICAgY3JlYXRlSGFuZGxlcjogY3JlYXRlU291cmNlLFxuICAgICAgcmVnaXN0ZXJIYW5kbGVyOiBfcmVnaXN0ZXJTb3VyY2UyWydkZWZhdWx0J10sXG4gICAgICBjcmVhdGVNb25pdG9yOiBfY3JlYXRlU291cmNlTW9uaXRvcjJbJ2RlZmF1bHQnXSxcbiAgICAgIGNyZWF0ZUNvbm5lY3RvcjogX2NyZWF0ZVNvdXJjZUNvbm5lY3RvcjJbJ2RlZmF1bHQnXSxcbiAgICAgIERlY29yYXRlZENvbXBvbmVudDogRGVjb3JhdGVkQ29tcG9uZW50LFxuICAgICAgZ2V0VHlwZTogZ2V0VHlwZSxcbiAgICAgIGNvbGxlY3Q6IGNvbGxlY3QsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvRHJhZ1NvdXJjZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBkZWNvcmF0ZUhhbmRsZXI7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9kaXNwb3NhYmxlcyA9IHJlcXVpcmUoJ2Rpc3Bvc2FibGVzJyk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWwgPSByZXF1aXJlKCcuL3V0aWxzL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzU2hhbGxvd0VxdWFsKTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbFNjYWxhciA9IHJlcXVpcmUoJy4vdXRpbHMvc2hhbGxvd0VxdWFsU2NhbGFyJyk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWxTY2FsYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNTaGFsbG93RXF1YWxTY2FsYXIpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNQbGFpbk9iamVjdCk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbmZ1bmN0aW9uIGRlY29yYXRlSGFuZGxlcihfcmVmKSB7XG4gIHZhciBEZWNvcmF0ZWRDb21wb25lbnQgPSBfcmVmLkRlY29yYXRlZENvbXBvbmVudDtcbiAgdmFyIGNyZWF0ZUhhbmRsZXIgPSBfcmVmLmNyZWF0ZUhhbmRsZXI7XG4gIHZhciBjcmVhdGVNb25pdG9yID0gX3JlZi5jcmVhdGVNb25pdG9yO1xuICB2YXIgY3JlYXRlQ29ubmVjdG9yID0gX3JlZi5jcmVhdGVDb25uZWN0b3I7XG4gIHZhciByZWdpc3RlckhhbmRsZXIgPSBfcmVmLnJlZ2lzdGVySGFuZGxlcjtcbiAgdmFyIGNvbnRhaW5lckRpc3BsYXlOYW1lID0gX3JlZi5jb250YWluZXJEaXNwbGF5TmFtZTtcbiAgdmFyIGdldFR5cGUgPSBfcmVmLmdldFR5cGU7XG4gIHZhciBjb2xsZWN0ID0gX3JlZi5jb2xsZWN0O1xuICB2YXIgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGFyZVByb3BzRXF1YWwgPSBvcHRpb25zLmFyZVByb3BzRXF1YWw7XG4gIHZhciBhcmVQcm9wc0VxdWFsID0gX29wdGlvbnMkYXJlUHJvcHNFcXVhbCA9PT0gdW5kZWZpbmVkID8gX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyMlsnZGVmYXVsdCddIDogX29wdGlvbnMkYXJlUHJvcHNFcXVhbDtcblxuICB2YXIgZGlzcGxheU5hbWUgPSBEZWNvcmF0ZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgRGVjb3JhdGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cbiAgcmV0dXJuIChmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhEcmFnRHJvcENvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuZ2V0SGFuZGxlcklkID0gZnVuY3Rpb24gZ2V0SGFuZGxlcklkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcklkO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UgPSBmdW5jdGlvbiBnZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlY29yYXRlZENvbXBvbmVudEluc3RhbmNlO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICByZXR1cm4gIWFyZVByb3BzRXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fCAhX3V0aWxzU2hhbGxvd0VxdWFsMlsnZGVmYXVsdCddKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgfTtcblxuICAgIF9jcmVhdGVDbGFzcyhEcmFnRHJvcENvbnRhaW5lciwgbnVsbCwgW3tcbiAgICAgIGtleTogJ0RlY29yYXRlZENvbXBvbmVudCcsXG4gICAgICB2YWx1ZTogRGVjb3JhdGVkQ29tcG9uZW50LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Rpc3BsYXlOYW1lJyxcbiAgICAgIHZhbHVlOiBjb250YWluZXJEaXNwbGF5TmFtZSArICcoJyArIGRpc3BsYXlOYW1lICsgJyknLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbnRleHRUeXBlcycsXG4gICAgICB2YWx1ZToge1xuICAgICAgICBkcmFnRHJvcE1hbmFnZXI6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfV0pO1xuXG4gICAgZnVuY3Rpb24gRHJhZ0Ryb3BDb250YWluZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnRHJvcENvbnRhaW5lcik7XG5cbiAgICAgIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCk7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZUNoaWxkUmVmID0gdGhpcy5oYW5kbGVDaGlsZFJlZi5iaW5kKHRoaXMpO1xuXG4gICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiB0aGlzLmNvbnRleHQuZHJhZ0Ryb3BNYW5hZ2VyID09PSAnb2JqZWN0JywgJ0NvdWxkIG5vdCBmaW5kIHRoZSBkcmFnIGFuZCBkcm9wIG1hbmFnZXIgaW4gdGhlIGNvbnRleHQgb2YgJXMuICcgKyAnTWFrZSBzdXJlIHRvIHdyYXAgdGhlIHRvcC1sZXZlbCBjb21wb25lbnQgb2YgeW91ciBhcHAgd2l0aCBEcmFnRHJvcENvbnRleHQuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtdHJvdWJsZXNob290aW5nLmh0bWwjY291bGQtbm90LWZpbmQtdGhlLWRyYWctYW5kLWRyb3AtbWFuYWdlci1pbi10aGUtY29udGV4dCcsIGRpc3BsYXlOYW1lLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgIHRoaXMubWFuYWdlciA9IHRoaXMuY29udGV4dC5kcmFnRHJvcE1hbmFnZXI7XG4gICAgICB0aGlzLmhhbmRsZXJNb25pdG9yID0gY3JlYXRlTW9uaXRvcih0aGlzLm1hbmFnZXIpO1xuICAgICAgdGhpcy5oYW5kbGVyQ29ubmVjdG9yID0gY3JlYXRlQ29ubmVjdG9yKHRoaXMubWFuYWdlci5nZXRCYWNrZW5kKCkpO1xuICAgICAgdGhpcy5oYW5kbGVyID0gY3JlYXRlSGFuZGxlcih0aGlzLmhhbmRsZXJNb25pdG9yKTtcblxuICAgICAgdGhpcy5kaXNwb3NhYmxlID0gbmV3IF9kaXNwb3NhYmxlcy5TZXJpYWxEaXNwb3NhYmxlKCk7XG4gICAgICB0aGlzLnJlY2VpdmVQcm9wcyhwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcbiAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5kaXNwb3NhYmxlID0gbmV3IF9kaXNwb3NhYmxlcy5TZXJpYWxEaXNwb3NhYmxlKCk7XG4gICAgICB0aGlzLmN1cnJlbnRUeXBlID0gbnVsbDtcbiAgICAgIHRoaXMucmVjZWl2ZVByb3BzKHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKCFhcmVQcm9wc0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy5yZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuaXNDdXJyZW50bHlNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5yZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiByZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgIHRoaXMuaGFuZGxlci5yZWNlaXZlUHJvcHMocHJvcHMpO1xuICAgICAgdGhpcy5yZWNlaXZlVHlwZShnZXRUeXBlKHByb3BzKSk7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5yZWNlaXZlVHlwZSA9IGZ1bmN0aW9uIHJlY2VpdmVUeXBlKHR5cGUpIHtcbiAgICAgIGlmICh0eXBlID09PSB0aGlzLmN1cnJlbnRUeXBlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IHR5cGU7XG5cbiAgICAgIHZhciBfcmVnaXN0ZXJIYW5kbGVyID0gcmVnaXN0ZXJIYW5kbGVyKHR5cGUsIHRoaXMuaGFuZGxlciwgdGhpcy5tYW5hZ2VyKTtcblxuICAgICAgdmFyIGhhbmRsZXJJZCA9IF9yZWdpc3RlckhhbmRsZXIuaGFuZGxlcklkO1xuICAgICAgdmFyIHVucmVnaXN0ZXIgPSBfcmVnaXN0ZXJIYW5kbGVyLnVucmVnaXN0ZXI7XG5cbiAgICAgIHRoaXMuaGFuZGxlcklkID0gaGFuZGxlcklkO1xuICAgICAgdGhpcy5oYW5kbGVyTW9uaXRvci5yZWNlaXZlSGFuZGxlcklkKGhhbmRsZXJJZCk7XG4gICAgICB0aGlzLmhhbmRsZXJDb25uZWN0b3IucmVjZWl2ZUhhbmRsZXJJZChoYW5kbGVySWQpO1xuXG4gICAgICB2YXIgZ2xvYmFsTW9uaXRvciA9IHRoaXMubWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgICB2YXIgdW5zdWJzY3JpYmUgPSBnbG9iYWxNb25pdG9yLnN1YnNjcmliZVRvU3RhdGVDaGFuZ2UodGhpcy5oYW5kbGVDaGFuZ2UsIHsgaGFuZGxlcklkczogW2hhbmRsZXJJZF0gfSk7XG5cbiAgICAgIHRoaXMuZGlzcG9zYWJsZS5zZXREaXNwb3NhYmxlKG5ldyBfZGlzcG9zYWJsZXMuQ29tcG9zaXRlRGlzcG9zYWJsZShuZXcgX2Rpc3Bvc2FibGVzLkRpc3Bvc2FibGUodW5zdWJzY3JpYmUpLCBuZXcgX2Rpc3Bvc2FibGVzLkRpc3Bvc2FibGUodW5yZWdpc3RlcikpKTtcbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgIGlmICghdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV4dFN0YXRlID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcbiAgICAgIGlmICghX3V0aWxzU2hhbGxvd0VxdWFsMlsnZGVmYXVsdCddKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICB0aGlzLmRpc3Bvc2FibGUuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5oYW5kbGVyQ29ubmVjdG9yLnJlY2VpdmVIYW5kbGVySWQobnVsbCk7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5oYW5kbGVDaGlsZFJlZiA9IGZ1bmN0aW9uIGhhbmRsZUNoaWxkUmVmKGNvbXBvbmVudCkge1xuICAgICAgdGhpcy5kZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSA9IGNvbXBvbmVudDtcbiAgICAgIHRoaXMuaGFuZGxlci5yZWNlaXZlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5nZXRDdXJyZW50U3RhdGUgPSBmdW5jdGlvbiBnZXRDdXJyZW50U3RhdGUoKSB7XG4gICAgICB2YXIgbmV4dFN0YXRlID0gY29sbGVjdCh0aGlzLmhhbmRsZXJDb25uZWN0b3IuaG9va3MsIHRoaXMuaGFuZGxlck1vbml0b3IpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF9sb2Rhc2hJc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKG5leHRTdGF0ZSksICdFeHBlY3RlZCBgY29sbGVjdGAgc3BlY2lmaWVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gJyArICclcyBmb3IgJXMgdG8gcmV0dXJuIGEgcGxhaW4gb2JqZWN0IG9mIHByb3BzIHRvIGluamVjdC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4nLCBjb250YWluZXJEaXNwbGF5TmFtZSwgZGlzcGxheU5hbWUsIG5leHRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoRGVjb3JhdGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSwge1xuICAgICAgICByZWY6IHRoaXMuaGFuZGxlQ2hpbGRSZWYgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRHJhZ0Ryb3BDb250YWluZXI7XG4gIH0pKF9yZWFjdC5Db21wb25lbnQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2RlY29yYXRlSGFuZGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDExOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNEaXNwb3NhYmxlMiA9IHJlcXVpcmUoJy4vaXNEaXNwb3NhYmxlJyk7XG5cbnZhciBfaXNEaXNwb3NhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pc0Rpc3Bvc2FibGUyKTtcblxuZXhwb3J0cy5pc0Rpc3Bvc2FibGUgPSBfaXNEaXNwb3NhYmxlM1snZGVmYXVsdCddO1xuXG52YXIgX0Rpc3Bvc2FibGUyID0gcmVxdWlyZSgnLi9EaXNwb3NhYmxlJyk7XG5cbnZhciBfRGlzcG9zYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfRGlzcG9zYWJsZTIpO1xuXG5leHBvcnRzLkRpc3Bvc2FibGUgPSBfRGlzcG9zYWJsZTNbJ2RlZmF1bHQnXTtcblxudmFyIF9Db21wb3NpdGVEaXNwb3NhYmxlMiA9IHJlcXVpcmUoJy4vQ29tcG9zaXRlRGlzcG9zYWJsZScpO1xuXG52YXIgX0NvbXBvc2l0ZURpc3Bvc2FibGUzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX0NvbXBvc2l0ZURpc3Bvc2FibGUyKTtcblxuZXhwb3J0cy5Db21wb3NpdGVEaXNwb3NhYmxlID0gX0NvbXBvc2l0ZURpc3Bvc2FibGUzWydkZWZhdWx0J107XG5cbnZhciBfU2VyaWFsRGlzcG9zYWJsZTIgPSByZXF1aXJlKCcuL1NlcmlhbERpc3Bvc2FibGUnKTtcblxudmFyIF9TZXJpYWxEaXNwb3NhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9TZXJpYWxEaXNwb3NhYmxlMik7XG5cbmV4cG9ydHMuU2VyaWFsRGlzcG9zYWJsZSA9IF9TZXJpYWxEaXNwb3NhYmxlM1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGlzRGlzcG9zYWJsZTtcblxuZnVuY3Rpb24gaXNEaXNwb3NhYmxlKG9iaikge1xuICByZXR1cm4gQm9vbGVhbihvYmogJiYgdHlwZW9mIG9iai5kaXNwb3NlID09PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9pc0Rpc3Bvc2FibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG4vKipcbiAqIFRoZSBiYXNpYyBkaXNwb3NhYmxlLlxuICovXG5cbnZhciBEaXNwb3NhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRGlzcG9zYWJsZShhY3Rpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlzcG9zYWJsZSk7XG5cbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbiB8fCBub29wO1xuICB9XG5cbiAgRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHRoaXMuYWN0aW9uLmNhbGwobnVsbCk7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoRGlzcG9zYWJsZSwgbnVsbCwgW3tcbiAgICBrZXk6IFwiZW1wdHlcIixcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB7IGRpc3Bvc2U6IG5vb3AgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERpc3Bvc2FibGU7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERpc3Bvc2FibGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvRGlzcG9zYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH07XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNEaXNwb3NhYmxlID0gcmVxdWlyZSgnLi9pc0Rpc3Bvc2FibGUnKTtcblxudmFyIF9pc0Rpc3Bvc2FibGUyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2lzRGlzcG9zYWJsZSk7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGdyb3VwIG9mIGRpc3Bvc2FibGUgcmVzb3VyY2VzIHRoYXQgYXJlIGRpc3Bvc2VkIHRvZ2V0aGVyLlxuICovXG5cbnZhciBDb21wb3NpdGVEaXNwb3NhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29tcG9zaXRlRGlzcG9zYWJsZSgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZGlzcG9zYWJsZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGRpc3Bvc2FibGVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb3NpdGVEaXNwb3NhYmxlKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRpc3Bvc2FibGVzWzBdKSAmJiBkaXNwb3NhYmxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGRpc3Bvc2FibGVzID0gZGlzcG9zYWJsZXNbMF07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXNwb3NhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFfaXNEaXNwb3NhYmxlMlsnZGVmYXVsdCddKGRpc3Bvc2FibGVzW2ldKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGEgZGlzcG9zYWJsZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZGlzcG9zYWJsZXMgPSBkaXNwb3NhYmxlcztcbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZGlzcG9zYWJsZSB0byB0aGUgQ29tcG9zaXRlRGlzcG9zYWJsZSBvciBkaXNwb3NlcyB0aGUgZGlzcG9zYWJsZSBpZiB0aGUgQ29tcG9zaXRlRGlzcG9zYWJsZSBpcyBkaXNwb3NlZC5cbiAgICogQHBhcmFtIHtEaXNwb3NhYmxlfSBpdGVtIERpc3Bvc2FibGUgdG8gYWRkLlxuICAgKi9cblxuICBDb21wb3NpdGVEaXNwb3NhYmxlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQoaXRlbSkge1xuICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIGl0ZW0uZGlzcG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3Bvc2FibGVzLnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuZCBkaXNwb3NlcyB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhIGRpc3Bvc2FibGUgZnJvbSB0aGUgQ29tcG9zaXRlRGlzcG9zYWJsZS5cbiAgICogQHBhcmFtIHtEaXNwb3NhYmxlfSBpdGVtIERpc3Bvc2FibGUgdG8gcmVtb3ZlLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBmb3VuZDsgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cblxuICBDb21wb3NpdGVEaXNwb3NhYmxlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoaXRlbSkge1xuICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLmRpc3Bvc2FibGVzLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuZGlzcG9zYWJsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpdGVtLmRpc3Bvc2UoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogRGlzcG9zZXMgYWxsIGRpc3Bvc2FibGVzIGluIHRoZSBncm91cCBhbmQgcmVtb3ZlcyB0aGVtIGZyb20gdGhlIGdyb3VwLlxuICAgKi9cblxuICBDb21wb3NpdGVEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxlbiA9IHRoaXMuZGlzcG9zYWJsZXMubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50RGlzcG9zYWJsZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjdXJyZW50RGlzcG9zYWJsZXNbaV0gPSB0aGlzLmRpc3Bvc2FibGVzW2ldO1xuICAgIH1cblxuICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgdGhpcy5kaXNwb3NhYmxlcyA9IFtdO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGN1cnJlbnREaXNwb3NhYmxlc1tpXS5kaXNwb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDb21wb3NpdGVEaXNwb3NhYmxlO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQ29tcG9zaXRlRGlzcG9zYWJsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvQ29tcG9zaXRlRGlzcG9zYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH07XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNEaXNwb3NhYmxlID0gcmVxdWlyZSgnLi9pc0Rpc3Bvc2FibGUnKTtcblxudmFyIF9pc0Rpc3Bvc2FibGUyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2lzRGlzcG9zYWJsZSk7XG5cbnZhciBTZXJpYWxEaXNwb3NhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2VyaWFsRGlzcG9zYWJsZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VyaWFsRGlzcG9zYWJsZSk7XG5cbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZS5cbiAgICogQHJldHVybiBUaGUgdW5kZXJseWluZyBkaXNwb3NhYmxlLlxuICAgKi9cblxuICBTZXJpYWxEaXNwb3NhYmxlLnByb3RvdHlwZS5nZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gZ2V0RGlzcG9zYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB1bmRlcmx5aW5nIGRpc3Bvc2FibGUuXG4gICAqIEBwYXJhbSB7RGlzcG9zYWJsZX0gdmFsdWUgVGhlIG5ldyB1bmRlcmx5aW5nIGRpc3Bvc2FibGUuXG4gICAqL1xuXG4gIFNlcmlhbERpc3Bvc2FibGUucHJvdG90eXBlLnNldERpc3Bvc2FibGUgPSBmdW5jdGlvbiBzZXREaXNwb3NhYmxlKCkge1xuICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1swXTtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICFfaXNEaXNwb3NhYmxlMlsnZGVmYXVsdCddKHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBlaXRoZXIgYW4gZW1wdHkgdmFsdWUgb3IgYSB2YWxpZCBkaXNwb3NhYmxlJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzRGlzcG9zZWQgPSB0aGlzLmlzRGlzcG9zZWQ7XG4gICAgdmFyIHByZXZpb3VzID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFpc0Rpc3Bvc2VkKSB7XG4gICAgICBwcmV2aW91cyA9IHRoaXMuY3VycmVudDtcbiAgICAgIHRoaXMuY3VycmVudCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgcHJldmlvdXMuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3Bvc2VkICYmIHZhbHVlKSB7XG4gICAgICB2YWx1ZS5kaXNwb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwb3NlcyB0aGUgdW5kZXJseWluZyBkaXNwb3NhYmxlIGFzIHdlbGwgYXMgYWxsIGZ1dHVyZSByZXBsYWNlbWVudHMuXG4gICAqL1xuXG4gIFNlcmlhbERpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgIHZhciBwcmV2aW91cyA9IHRoaXMuY3VycmVudDtcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICBwcmV2aW91cy5kaXNwb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTZXJpYWxEaXNwb3NhYmxlO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2VyaWFsRGlzcG9zYWJsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvU2VyaWFsRGlzcG9zYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJlZ2lzdGVyU291cmNlO1xuXG5mdW5jdGlvbiByZWdpc3RlclNvdXJjZSh0eXBlLCBzb3VyY2UsIG1hbmFnZXIpIHtcbiAgdmFyIHJlZ2lzdHJ5ID0gbWFuYWdlci5nZXRSZWdpc3RyeSgpO1xuICB2YXIgc291cmNlSWQgPSByZWdpc3RyeS5hZGRTb3VyY2UodHlwZSwgc291cmNlKTtcblxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyU291cmNlKCkge1xuICAgIHJlZ2lzdHJ5LnJlbW92ZVNvdXJjZShzb3VyY2VJZCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhbmRsZXJJZDogc291cmNlSWQsXG4gICAgdW5yZWdpc3RlcjogdW5yZWdpc3RlclNvdXJjZVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvcmVnaXN0ZXJTb3VyY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVNvdXJjZUZhY3Rvcnk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc1BsYWluT2JqZWN0KTtcblxudmFyIEFMTE9XRURfU1BFQ19NRVRIT0RTID0gWydjYW5EcmFnJywgJ2JlZ2luRHJhZycsICdjYW5EcmFnJywgJ2lzRHJhZ2dpbmcnLCAnZW5kRHJhZyddO1xudmFyIFJFUVVJUkVEX1NQRUNfTUVUSE9EUyA9IFsnYmVnaW5EcmFnJ107XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZUZhY3Rvcnkoc3BlYykge1xuICBPYmplY3Qua2V5cyhzcGVjKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKEFMTE9XRURfU1BFQ19NRVRIT0RTLmluZGV4T2Yoa2V5KSA+IC0xLCAnRXhwZWN0ZWQgdGhlIGRyYWcgc291cmNlIHNwZWNpZmljYXRpb24gdG8gb25seSBoYXZlICcgKyAnc29tZSBvZiB0aGUgZm9sbG93aW5nIGtleXM6ICVzLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgYSBzcGVjaWZpY2F0aW9uIHdpdGggYW4gdW5leHBlY3RlZCBcIiVzXCIga2V5LiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBBTExPV0VEX1NQRUNfTUVUSE9EUy5qb2luKCcsICcpLCBrZXkpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHNwZWNba2V5XSA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkICVzIGluIHRoZSBkcmFnIHNvdXJjZSBzcGVjaWZpY2F0aW9uIHRvIGJlIGEgZnVuY3Rpb24uICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCAlczogJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGtleSwga2V5LCBzcGVjW2tleV0pO1xuICB9KTtcbiAgUkVRVUlSRURfU1BFQ19NRVRIT0RTLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHNwZWNba2V5XSA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkICVzIGluIHRoZSBkcmFnIHNvdXJjZSBzcGVjaWZpY2F0aW9uIHRvIGJlIGEgZnVuY3Rpb24uICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCAlczogJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGtleSwga2V5LCBzcGVjW2tleV0pO1xuICB9KTtcblxuICB2YXIgU291cmNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTb3VyY2UobW9uaXRvcikge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNvdXJjZSk7XG5cbiAgICAgIHRoaXMubW9uaXRvciA9IG1vbml0b3I7XG4gICAgICB0aGlzLnByb3BzID0gbnVsbDtcbiAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBTb3VyY2UucHJvdG90eXBlLnJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIHJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIH07XG5cbiAgICBTb3VyY2UucHJvdG90eXBlLnJlY2VpdmVDb21wb25lbnQgPSBmdW5jdGlvbiByZWNlaXZlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIFNvdXJjZS5wcm90b3R5cGUuY2FuRHJhZyA9IGZ1bmN0aW9uIGNhbkRyYWcoKSB7XG4gICAgICBpZiAoIXNwZWMuY2FuRHJhZykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNwZWMuY2FuRHJhZyh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IpO1xuICAgIH07XG5cbiAgICBTb3VyY2UucHJvdG90eXBlLmlzRHJhZ2dpbmcgPSBmdW5jdGlvbiBpc0RyYWdnaW5nKGdsb2JhbE1vbml0b3IsIHNvdXJjZUlkKSB7XG4gICAgICBpZiAoIXNwZWMuaXNEcmFnZ2luZykge1xuICAgICAgICByZXR1cm4gc291cmNlSWQgPT09IGdsb2JhbE1vbml0b3IuZ2V0U291cmNlSWQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNwZWMuaXNEcmFnZ2luZyh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IpO1xuICAgIH07XG5cbiAgICBTb3VyY2UucHJvdG90eXBlLmJlZ2luRHJhZyA9IGZ1bmN0aW9uIGJlZ2luRHJhZygpIHtcbiAgICAgIHZhciBpdGVtID0gc3BlYy5iZWdpbkRyYWcodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yLCB0aGlzLmNvbXBvbmVudCk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF9sb2Rhc2hJc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKGl0ZW0pLCAnYmVnaW5EcmFnKCkgbXVzdCByZXR1cm4gYSBwbGFpbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBkcmFnZ2VkIGl0ZW0uICcgKyAnSW5zdGVhZCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgaXRlbSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuXG4gICAgU291cmNlLnByb3RvdHlwZS5lbmREcmFnID0gZnVuY3Rpb24gZW5kRHJhZygpIHtcbiAgICAgIGlmICghc3BlYy5lbmREcmFnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3BlYy5lbmREcmFnKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvciwgdGhpcy5jb21wb25lbnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU291cmNlO1xuICB9KSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVTb3VyY2UobW9uaXRvcikge1xuICAgIHJldHVybiBuZXcgU291cmNlKG1vbml0b3IpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVNvdXJjZUZhY3RvcnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVNvdXJjZU1vbml0b3I7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBpc0NhbGxpbmdDYW5EcmFnID0gZmFsc2U7XG52YXIgaXNDYWxsaW5nSXNEcmFnZ2luZyA9IGZhbHNlO1xuXG52YXIgU291cmNlTW9uaXRvciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNvdXJjZU1vbml0b3IobWFuYWdlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb3VyY2VNb25pdG9yKTtcblxuICAgIHRoaXMuaW50ZXJuYWxNb25pdG9yID0gbWFuYWdlci5nZXRNb25pdG9yKCk7XG4gIH1cblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5yZWNlaXZlSGFuZGxlcklkID0gZnVuY3Rpb24gcmVjZWl2ZUhhbmRsZXJJZChzb3VyY2VJZCkge1xuICAgIHRoaXMuc291cmNlSWQgPSBzb3VyY2VJZDtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5jYW5EcmFnID0gZnVuY3Rpb24gY2FuRHJhZygpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKCFpc0NhbGxpbmdDYW5EcmFnLCAnWW91IG1heSBub3QgY2FsbCBtb25pdG9yLmNhbkRyYWcoKSBpbnNpZGUgeW91ciBjYW5EcmFnKCkgaW1wbGVtZW50YXRpb24uICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UtbW9uaXRvci5odG1sJyk7XG5cbiAgICB0cnkge1xuICAgICAgaXNDYWxsaW5nQ2FuRHJhZyA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuY2FuRHJhZ1NvdXJjZSh0aGlzLnNvdXJjZUlkKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNDYWxsaW5nQ2FuRHJhZyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKCFpc0NhbGxpbmdJc0RyYWdnaW5nLCAnWW91IG1heSBub3QgY2FsbCBtb25pdG9yLmlzRHJhZ2dpbmcoKSBpbnNpZGUgeW91ciBpc0RyYWdnaW5nKCkgaW1wbGVtZW50YXRpb24uICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UtbW9uaXRvci5odG1sJyk7XG5cbiAgICB0cnkge1xuICAgICAgaXNDYWxsaW5nSXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuaXNEcmFnZ2luZ1NvdXJjZSh0aGlzLnNvdXJjZUlkKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNDYWxsaW5nSXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRJdGVtVHlwZSA9IGZ1bmN0aW9uIGdldEl0ZW1UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJdGVtVHlwZSgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbiBnZXRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJdGVtKCk7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0RHJvcFJlc3VsdCA9IGZ1bmN0aW9uIGdldERyb3BSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldERyb3BSZXN1bHQoKTtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5kaWREcm9wID0gZnVuY3Rpb24gZGlkRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZGlkRHJvcCgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldEluaXRpYWxDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCk7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKTtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRTb3VyY2VDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRTb3VyY2VDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldFNvdXJjZUNsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldENsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldENsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0Q2xpZW50T2Zmc2V0KCk7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0ID0gZnVuY3Rpb24gZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKTtcbiAgfTtcblxuICByZXR1cm4gU291cmNlTW9uaXRvcjtcbn0pKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXJjZU1vbml0b3IobWFuYWdlcikge1xuICByZXR1cm4gbmV3IFNvdXJjZU1vbml0b3IobWFuYWdlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlTW9uaXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlU291cmNlQ29ubmVjdG9yO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd3JhcENvbm5lY3Rvckhvb2tzID0gcmVxdWlyZSgnLi93cmFwQ29ubmVjdG9ySG9va3MnKTtcblxudmFyIF93cmFwQ29ubmVjdG9ySG9va3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd3JhcENvbm5lY3Rvckhvb2tzKTtcblxudmFyIF9hcmVPcHRpb25zRXF1YWwgPSByZXF1aXJlKCcuL2FyZU9wdGlvbnNFcXVhbCcpO1xuXG52YXIgX2FyZU9wdGlvbnNFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcmVPcHRpb25zRXF1YWwpO1xuXG5mdW5jdGlvbiBjcmVhdGVTb3VyY2VDb25uZWN0b3IoYmFja2VuZCkge1xuICB2YXIgY3VycmVudEhhbmRsZXJJZCA9IHVuZGVmaW5lZDtcblxuICB2YXIgY3VycmVudERyYWdTb3VyY2VOb2RlID0gdW5kZWZpbmVkO1xuICB2YXIgY3VycmVudERyYWdTb3VyY2VPcHRpb25zID0gdW5kZWZpbmVkO1xuICB2YXIgZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlID0gdW5kZWZpbmVkO1xuXG4gIHZhciBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlID0gdW5kZWZpbmVkO1xuICB2YXIgY3VycmVudERyYWdQcmV2aWV3T3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdmFyIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcgPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gcmVjb25uZWN0RHJhZ1NvdXJjZSgpIHtcbiAgICBpZiAoZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlKSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdTb3VyY2UoKTtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRIYW5kbGVySWQgJiYgY3VycmVudERyYWdTb3VyY2VOb2RlKSB7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdTb3VyY2UgPSBiYWNrZW5kLmNvbm5lY3REcmFnU291cmNlKGN1cnJlbnRIYW5kbGVySWQsIGN1cnJlbnREcmFnU291cmNlTm9kZSwgY3VycmVudERyYWdTb3VyY2VPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNvbm5lY3REcmFnUHJldmlldygpIHtcbiAgICBpZiAoZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldykge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldygpO1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRIYW5kbGVySWQgJiYgY3VycmVudERyYWdQcmV2aWV3Tm9kZSkge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnUHJldmlldyA9IGJhY2tlbmQuY29ubmVjdERyYWdQcmV2aWV3KGN1cnJlbnRIYW5kbGVySWQsIGN1cnJlbnREcmFnUHJldmlld05vZGUsIGN1cnJlbnREcmFnUHJldmlld09wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVIYW5kbGVySWQoaGFuZGxlcklkKSB7XG4gICAgaWYgKGhhbmRsZXJJZCA9PT0gY3VycmVudEhhbmRsZXJJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN1cnJlbnRIYW5kbGVySWQgPSBoYW5kbGVySWQ7XG4gICAgcmVjb25uZWN0RHJhZ1NvdXJjZSgpO1xuICAgIHJlY29ubmVjdERyYWdQcmV2aWV3KCk7XG4gIH1cblxuICB2YXIgaG9va3MgPSBfd3JhcENvbm5lY3Rvckhvb2tzMlsnZGVmYXVsdCddKHtcbiAgICBkcmFnU291cmNlOiBmdW5jdGlvbiBjb25uZWN0RHJhZ1NvdXJjZShub2RlLCBvcHRpb25zKSB7XG4gICAgICBpZiAobm9kZSA9PT0gY3VycmVudERyYWdTb3VyY2VOb2RlICYmIF9hcmVPcHRpb25zRXF1YWwyWydkZWZhdWx0J10ob3B0aW9ucywgY3VycmVudERyYWdTb3VyY2VPcHRpb25zKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnREcmFnU291cmNlTm9kZSA9IG5vZGU7XG4gICAgICBjdXJyZW50RHJhZ1NvdXJjZU9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICByZWNvbm5lY3REcmFnU291cmNlKCk7XG4gICAgfSxcblxuICAgIGRyYWdQcmV2aWV3OiBmdW5jdGlvbiBjb25uZWN0RHJhZ1ByZXZpZXcobm9kZSwgb3B0aW9ucykge1xuICAgICAgaWYgKG5vZGUgPT09IGN1cnJlbnREcmFnUHJldmlld05vZGUgJiYgX2FyZU9wdGlvbnNFcXVhbDJbJ2RlZmF1bHQnXShvcHRpb25zLCBjdXJyZW50RHJhZ1ByZXZpZXdPcHRpb25zKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnREcmFnUHJldmlld05vZGUgPSBub2RlO1xuICAgICAgY3VycmVudERyYWdQcmV2aWV3T3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIHJlY29ubmVjdERyYWdQcmV2aWV3KCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHJlY2VpdmVIYW5kbGVySWQ6IHJlY2VpdmVIYW5kbGVySWQsXG4gICAgaG9va3M6IGhvb2tzXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlU291cmNlQ29ubmVjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSB3cmFwQ29ubmVjdG9ySG9va3M7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlsc0Nsb25lV2l0aFJlZiA9IHJlcXVpcmUoJy4vdXRpbHMvY2xvbmVXaXRoUmVmJyk7XG5cbnZhciBfdXRpbHNDbG9uZVdpdGhSZWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDbG9uZVdpdGhSZWYpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gdGhyb3dJZkNvbXBvc2l0ZUNvbXBvbmVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyBDdXN0b20gY29tcG9uZW50cyBjYW4gbm8gbG9uZ2VyIGJlIHdyYXBwZWQgZGlyZWN0bHkgaW4gUmVhY3QgRG5EIDIuMFxuICAvLyBzbyB0aGF0IHdlIGRvbid0IG5lZWQgdG8gZGVwZW5kIG9uIGZpbmRET01Ob2RlKCkgZnJvbSByZWFjdC1kb20uXG4gIGlmICh0eXBlb2YgZWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBkaXNwbGF5TmFtZSA9IGVsZW1lbnQudHlwZS5kaXNwbGF5TmFtZSB8fCBlbGVtZW50LnR5cGUubmFtZSB8fCAndGhlIGNvbXBvbmVudCc7XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IG5hdGl2ZSBlbGVtZW50IG5vZGVzIGNhbiBub3cgYmUgcGFzc2VkIHRvIFJlYWN0IERuRCBjb25uZWN0b3JzLiAnICsgKCdZb3UgY2FuIGVpdGhlciB3cmFwICcgKyBkaXNwbGF5TmFtZSArICcgaW50byBhIDxkaXY+LCBvciB0dXJuIGl0IGludG8gYSAnKSArICdkcmFnIHNvdXJjZSBvciBhIGRyb3AgdGFyZ2V0IGl0c2VsZi4nKTtcbn1cblxuZnVuY3Rpb24gd3JhcEhvb2tUb1JlY29nbml6ZUVsZW1lbnQoaG9vaykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbGVtZW50T3JOb2RlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMV07XG5cbiAgICAvLyBXaGVuIHBhc3NlZCBhIG5vZGUsIGNhbGwgdGhlIGhvb2sgc3RyYWlnaHQgYXdheS5cbiAgICBpZiAoIV9yZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50T3JOb2RlKSkge1xuICAgICAgdmFyIG5vZGUgPSBlbGVtZW50T3JOb2RlO1xuICAgICAgaG9vayhub2RlLCBvcHRpb25zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBwYXNzZWQgYSBSZWFjdEVsZW1lbnQsIGNsb25lIGl0IGFuZCBhdHRhY2ggdGhpcyBmdW5jdGlvbiBhcyBhIHJlZi5cbiAgICAvLyBUaGlzIGhlbHBzIHVzIGFjaGlldmUgYSBuZWF0IEFQSSB3aGVyZSB1c2VyIGRvZXNuJ3QgZXZlbiBrbm93IHRoYXQgcmVmc1xuICAgIC8vIGFyZSBiZWluZyB1c2VkIHVuZGVyIHRoZSBob29kLlxuICAgIHZhciBlbGVtZW50ID0gZWxlbWVudE9yTm9kZTtcbiAgICB0aHJvd0lmQ29tcG9zaXRlQ29tcG9uZW50RWxlbWVudChlbGVtZW50KTtcblxuICAgIC8vIFdoZW4gbm8gb3B0aW9ucyBhcmUgcGFzc2VkLCB1c2UgdGhlIGhvb2sgZGlyZWN0bHlcbiAgICB2YXIgcmVmID0gb3B0aW9ucyA/IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICByZXR1cm4gaG9vayhub2RlLCBvcHRpb25zKTtcbiAgICB9IDogaG9vaztcblxuICAgIHJldHVybiBfdXRpbHNDbG9uZVdpdGhSZWYyWydkZWZhdWx0J10oZWxlbWVudCwgcmVmKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbm5lY3Rvckhvb2tzKGhvb2tzKSB7XG4gIHZhciB3cmFwcGVkSG9va3MgPSB7fTtcblxuICBPYmplY3Qua2V5cyhob29rcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGhvb2sgPSBob29rc1trZXldO1xuICAgIHZhciB3cmFwcGVkSG9vayA9IHdyYXBIb29rVG9SZWNvZ25pemVFbGVtZW50KGhvb2spO1xuICAgIHdyYXBwZWRIb29rc1trZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdyYXBwZWRIb29rO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB3cmFwcGVkSG9va3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvd3JhcENvbm5lY3Rvckhvb2tzLmpzXG4gKiogbW9kdWxlIGlkID0gMTI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjbG9uZVdpdGhSZWY7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIGNsb25lV2l0aFJlZihlbGVtZW50LCBuZXdSZWYpIHtcbiAgdmFyIHByZXZpb3VzUmVmID0gZWxlbWVudC5yZWY7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHByZXZpb3VzUmVmICE9PSAnc3RyaW5nJywgJ0Nhbm5vdCBjb25uZWN0IFJlYWN0IERuRCB0byBhbiBlbGVtZW50IHdpdGggYW4gZXhpc3Rpbmcgc3RyaW5nIHJlZi4gJyArICdQbGVhc2UgY29udmVydCBpdCB0byB1c2UgYSBjYWxsYmFjayByZWYgaW5zdGVhZCwgb3Igd3JhcCBpdCBpbnRvIGEgPHNwYW4+IG9yIDxkaXY+LiAnICsgJ1JlYWQgbW9yZTogaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9tb3JlLWFib3V0LXJlZnMuaHRtbCN0aGUtcmVmLWNhbGxiYWNrLWF0dHJpYnV0ZScpO1xuXG4gIGlmICghcHJldmlvdXNSZWYpIHtcbiAgICAvLyBXaGVuIHRoZXJlIGlzIG5vIHJlZiBvbiB0aGUgZWxlbWVudCwgdXNlIHRoZSBuZXcgcmVmIGRpcmVjdGx5XG4gICAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQoZWxlbWVudCwge1xuICAgICAgcmVmOiBuZXdSZWZcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBfcmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICBuZXdSZWYobm9kZSk7XG5cbiAgICAgIGlmIChwcmV2aW91c1JlZikge1xuICAgICAgICBwcmV2aW91c1JlZihub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL2Nsb25lV2l0aFJlZi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gYXJlT3B0aW9uc0VxdWFsO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWwgPSByZXF1aXJlKCcuL3V0aWxzL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzU2hhbGxvd0VxdWFsKTtcblxuZnVuY3Rpb24gYXJlT3B0aW9uc0VxdWFsKG5leHRPcHRpb25zLCBjdXJyZW50T3B0aW9ucykge1xuICBpZiAoY3VycmVudE9wdGlvbnMgPT09IG5leHRPcHRpb25zKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gY3VycmVudE9wdGlvbnMgIT09IG51bGwgJiYgbmV4dE9wdGlvbnMgIT09IG51bGwgJiYgX3V0aWxzU2hhbGxvd0VxdWFsMlsnZGVmYXVsdCddKGN1cnJlbnRPcHRpb25zLCBuZXh0T3B0aW9ucyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvYXJlT3B0aW9uc0VxdWFsLmpzXG4gKiogbW9kdWxlIGlkID0gMTMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBpc1ZhbGlkVHlwZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaElzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNBcnJheSk7XG5cbmZ1bmN0aW9uIGlzVmFsaWRUeXBlKHR5cGUsIGFsbG93QXJyYXkpIHtcbiAgICAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnc3ltYm9sJyB8fCBhbGxvd0FycmF5ICYmIF9sb2Rhc2hJc0FycmF5MlsnZGVmYXVsdCddKHR5cGUpICYmIHR5cGUuZXZlcnkoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWRUeXBlKHQsIGZhbHNlKTtcbiAgICAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi91dGlscy9pc1ZhbGlkVHlwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIF9zbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyb3BUYXJnZXQ7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzUGxhaW5PYmplY3QpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMgPSByZXF1aXJlKCcuL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzJyk7XG5cbnZhciBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzKTtcblxudmFyIF9kZWNvcmF0ZUhhbmRsZXIgPSByZXF1aXJlKCcuL2RlY29yYXRlSGFuZGxlcicpO1xuXG52YXIgX2RlY29yYXRlSGFuZGxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWNvcmF0ZUhhbmRsZXIpO1xuXG52YXIgX3JlZ2lzdGVyVGFyZ2V0ID0gcmVxdWlyZSgnLi9yZWdpc3RlclRhcmdldCcpO1xuXG52YXIgX3JlZ2lzdGVyVGFyZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZ2lzdGVyVGFyZ2V0KTtcblxudmFyIF9jcmVhdGVUYXJnZXRGYWN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVUYXJnZXRGYWN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlVGFyZ2V0RmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUYXJnZXRGYWN0b3J5KTtcblxudmFyIF9jcmVhdGVUYXJnZXRNb25pdG9yID0gcmVxdWlyZSgnLi9jcmVhdGVUYXJnZXRNb25pdG9yJyk7XG5cbnZhciBfY3JlYXRlVGFyZ2V0TW9uaXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUYXJnZXRNb25pdG9yKTtcblxudmFyIF9jcmVhdGVUYXJnZXRDb25uZWN0b3IgPSByZXF1aXJlKCcuL2NyZWF0ZVRhcmdldENvbm5lY3RvcicpO1xuXG52YXIgX2NyZWF0ZVRhcmdldENvbm5lY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUYXJnZXRDb25uZWN0b3IpO1xuXG52YXIgX3V0aWxzSXNWYWxpZFR5cGUgPSByZXF1aXJlKCcuL3V0aWxzL2lzVmFsaWRUeXBlJyk7XG5cbnZhciBfdXRpbHNJc1ZhbGlkVHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0lzVmFsaWRUeXBlKTtcblxuZnVuY3Rpb24gRHJvcFRhcmdldCh0eXBlLCBzcGVjLCBjb2xsZWN0KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbM107XG5cbiAgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyWydkZWZhdWx0J10uYXBwbHkodW5kZWZpbmVkLCBbJ0Ryb3BUYXJnZXQnLCAndHlwZSwgc3BlYywgY29sbGVjdFssIG9wdGlvbnNdJ10uY29uY2F0KF9zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgdmFyIGdldFR5cGUgPSB0eXBlO1xuICBpZiAodHlwZW9mIHR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF91dGlsc0lzVmFsaWRUeXBlMlsnZGVmYXVsdCddKHR5cGUsIHRydWUpLCAnRXhwZWN0ZWQgXCJ0eXBlXCIgcHJvdmlkZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIERyb3BUYXJnZXQgdG8gYmUgJyArICdhIHN0cmluZywgYW4gYXJyYXkgb2Ygc3RyaW5ncywgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyIGdpdmVuICcgKyAndGhlIGN1cnJlbnQgcHJvcHMuIEluc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCB0eXBlKTtcbiAgICBnZXRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfTtcbiAgfVxuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF9sb2Rhc2hJc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKHNwZWMpLCAnRXhwZWN0ZWQgXCJzcGVjXCIgcHJvdmlkZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byBEcm9wVGFyZ2V0IHRvIGJlICcgKyAnYSBwbGFpbiBvYmplY3QuIEluc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBzcGVjKTtcbiAgdmFyIGNyZWF0ZVRhcmdldCA9IF9jcmVhdGVUYXJnZXRGYWN0b3J5MlsnZGVmYXVsdCddKHNwZWMpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBjb2xsZWN0ID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgXCJjb2xsZWN0XCIgcHJvdmlkZWQgYXMgdGhlIHRoaXJkIGFyZ3VtZW50IHRvIERyb3BUYXJnZXQgdG8gYmUgJyArICdhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHBsYWluIG9iamVjdCBvZiBwcm9wcyB0byBpbmplY3QuICcgKyAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIGNvbGxlY3QpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF9sb2Rhc2hJc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKG9wdGlvbnMpLCAnRXhwZWN0ZWQgXCJvcHRpb25zXCIgcHJvdmlkZWQgYXMgdGhlIGZvdXJ0aCBhcmd1bWVudCB0byBEcm9wVGFyZ2V0IHRvIGJlICcgKyAnYSBwbGFpbiBvYmplY3Qgd2hlbiBzcGVjaWZpZWQuICcgKyAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIGNvbGxlY3QpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0ZVRhcmdldChEZWNvcmF0ZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gX2RlY29yYXRlSGFuZGxlcjJbJ2RlZmF1bHQnXSh7XG4gICAgICBjb25uZWN0QmFja2VuZDogZnVuY3Rpb24gY29ubmVjdEJhY2tlbmQoYmFja2VuZCwgdGFyZ2V0SWQpIHtcbiAgICAgICAgcmV0dXJuIGJhY2tlbmQuY29ubmVjdERyb3BUYXJnZXQodGFyZ2V0SWQpO1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lckRpc3BsYXlOYW1lOiAnRHJvcFRhcmdldCcsXG4gICAgICBjcmVhdGVIYW5kbGVyOiBjcmVhdGVUYXJnZXQsXG4gICAgICByZWdpc3RlckhhbmRsZXI6IF9yZWdpc3RlclRhcmdldDJbJ2RlZmF1bHQnXSxcbiAgICAgIGNyZWF0ZU1vbml0b3I6IF9jcmVhdGVUYXJnZXRNb25pdG9yMlsnZGVmYXVsdCddLFxuICAgICAgY3JlYXRlQ29ubmVjdG9yOiBfY3JlYXRlVGFyZ2V0Q29ubmVjdG9yMlsnZGVmYXVsdCddLFxuICAgICAgRGVjb3JhdGVkQ29tcG9uZW50OiBEZWNvcmF0ZWRDb21wb25lbnQsXG4gICAgICBnZXRUeXBlOiBnZXRUeXBlLFxuICAgICAgY29sbGVjdDogY29sbGVjdCxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9Ecm9wVGFyZ2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gcmVnaXN0ZXJUYXJnZXQ7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVGFyZ2V0KHR5cGUsIHRhcmdldCwgbWFuYWdlcikge1xuICB2YXIgcmVnaXN0cnkgPSBtYW5hZ2VyLmdldFJlZ2lzdHJ5KCk7XG4gIHZhciB0YXJnZXRJZCA9IHJlZ2lzdHJ5LmFkZFRhcmdldCh0eXBlLCB0YXJnZXQpO1xuXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJUYXJnZXQoKSB7XG4gICAgcmVnaXN0cnkucmVtb3ZlVGFyZ2V0KHRhcmdldElkKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGFuZGxlcklkOiB0YXJnZXRJZCxcbiAgICB1bnJlZ2lzdGVyOiB1bnJlZ2lzdGVyVGFyZ2V0XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9yZWdpc3RlclRhcmdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlVGFyZ2V0RmFjdG9yeTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzUGxhaW5PYmplY3QpO1xuXG52YXIgQUxMT1dFRF9TUEVDX01FVEhPRFMgPSBbJ2NhbkRyb3AnLCAnaG92ZXInLCAnZHJvcCddO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXJnZXRGYWN0b3J5KHNwZWMpIHtcbiAgT2JqZWN0LmtleXMoc3BlYykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShBTExPV0VEX1NQRUNfTUVUSE9EUy5pbmRleE9mKGtleSkgPiAtMSwgJ0V4cGVjdGVkIHRoZSBkcm9wIHRhcmdldCBzcGVjaWZpY2F0aW9uIHRvIG9ubHkgaGF2ZSAnICsgJ3NvbWUgb2YgdGhlIGZvbGxvd2luZyBrZXlzOiAlcy4gJyArICdJbnN0ZWFkIHJlY2VpdmVkIGEgc3BlY2lmaWNhdGlvbiB3aXRoIGFuIHVuZXhwZWN0ZWQgXCIlc1wiIGtleS4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgQUxMT1dFRF9TUEVDX01FVEhPRFMuam9pbignLCAnKSwga2V5KTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBzcGVjW2tleV0gPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCAlcyBpbiB0aGUgZHJvcCB0YXJnZXQgc3BlY2lmaWNhdGlvbiB0byBiZSBhIGZ1bmN0aW9uLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgYSBzcGVjaWZpY2F0aW9uIHdpdGggJXM6ICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBrZXksIGtleSwgc3BlY1trZXldKTtcbiAgfSk7XG5cbiAgdmFyIFRhcmdldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGFyZ2V0KG1vbml0b3IpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYXJnZXQpO1xuXG4gICAgICB0aGlzLm1vbml0b3IgPSBtb25pdG9yO1xuICAgICAgdGhpcy5wcm9wcyA9IG51bGw7XG4gICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5yZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiByZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB9O1xuXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5yZWNlaXZlTW9uaXRvciA9IGZ1bmN0aW9uIHJlY2VpdmVNb25pdG9yKG1vbml0b3IpIHtcbiAgICAgIHRoaXMubW9uaXRvciA9IG1vbml0b3I7XG4gICAgfTtcblxuICAgIFRhcmdldC5wcm90b3R5cGUucmVjZWl2ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIHJlY2VpdmVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5jYW5Ecm9wID0gZnVuY3Rpb24gY2FuRHJvcCgpIHtcbiAgICAgIGlmICghc3BlYy5jYW5Ecm9wKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3BlYy5jYW5Ecm9wKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvcik7XG4gICAgfTtcblxuICAgIFRhcmdldC5wcm90b3R5cGUuaG92ZXIgPSBmdW5jdGlvbiBob3ZlcigpIHtcbiAgICAgIGlmICghc3BlYy5ob3Zlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNwZWMuaG92ZXIodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yLCB0aGlzLmNvbXBvbmVudCk7XG4gICAgfTtcblxuICAgIFRhcmdldC5wcm90b3R5cGUuZHJvcCA9IGZ1bmN0aW9uIGRyb3AoKSB7XG4gICAgICBpZiAoIXNwZWMuZHJvcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBkcm9wUmVzdWx0ID0gc3BlYy5kcm9wKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvciwgdGhpcy5jb21wb25lbnQpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgZHJvcFJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcgfHwgX2xvZGFzaElzUGxhaW5PYmplY3QyWydkZWZhdWx0J10oZHJvcFJlc3VsdCksICdkcm9wKCkgbXVzdCBlaXRoZXIgcmV0dXJuIHVuZGVmaW5lZCwgb3IgYW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgZHJvcCByZXN1bHQuICcgKyAnSW5zdGVhZCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgZHJvcFJlc3VsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZHJvcFJlc3VsdDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRhcmdldDtcbiAgfSkoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlVGFyZ2V0KG1vbml0b3IpIHtcbiAgICByZXR1cm4gbmV3IFRhcmdldChtb25pdG9yKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9jcmVhdGVUYXJnZXRGYWN0b3J5LmpzXG4gKiogbW9kdWxlIGlkID0gMTM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVUYXJnZXRNb25pdG9yO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgaXNDYWxsaW5nQ2FuRHJvcCA9IGZhbHNlO1xuXG52YXIgVGFyZ2V0TW9uaXRvciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRhcmdldE1vbml0b3IobWFuYWdlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYXJnZXRNb25pdG9yKTtcblxuICAgIHRoaXMuaW50ZXJuYWxNb25pdG9yID0gbWFuYWdlci5nZXRNb25pdG9yKCk7XG4gIH1cblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5yZWNlaXZlSGFuZGxlcklkID0gZnVuY3Rpb24gcmVjZWl2ZUhhbmRsZXJJZCh0YXJnZXRJZCkge1xuICAgIHRoaXMudGFyZ2V0SWQgPSB0YXJnZXRJZDtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5jYW5Ecm9wID0gZnVuY3Rpb24gY2FuRHJvcCgpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKCFpc0NhbGxpbmdDYW5Ecm9wLCAnWW91IG1heSBub3QgY2FsbCBtb25pdG9yLmNhbkRyb3AoKSBpbnNpZGUgeW91ciBjYW5Ecm9wKCkgaW1wbGVtZW50YXRpb24uICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQtbW9uaXRvci5odG1sJyk7XG5cbiAgICB0cnkge1xuICAgICAgaXNDYWxsaW5nQ2FuRHJvcCA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuY2FuRHJvcE9uVGFyZ2V0KHRoaXMudGFyZ2V0SWQpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0NhbGxpbmdDYW5Ecm9wID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmlzT3ZlciA9IGZ1bmN0aW9uIGlzT3ZlcihvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmlzT3ZlclRhcmdldCh0aGlzLnRhcmdldElkLCBvcHRpb25zKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXRJdGVtVHlwZSA9IGZ1bmN0aW9uIGdldEl0ZW1UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJdGVtVHlwZSgpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbiBnZXRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJdGVtKCk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0RHJvcFJlc3VsdCA9IGZ1bmN0aW9uIGdldERyb3BSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldERyb3BSZXN1bHQoKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5kaWREcm9wID0gZnVuY3Rpb24gZGlkRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZGlkRHJvcCgpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldEluaXRpYWxDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXRTb3VyY2VDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRTb3VyY2VDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldFNvdXJjZUNsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldENsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldENsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0Q2xpZW50T2Zmc2V0KCk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0ID0gZnVuY3Rpb24gZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKTtcbiAgfTtcblxuICByZXR1cm4gVGFyZ2V0TW9uaXRvcjtcbn0pKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhcmdldE1vbml0b3IobWFuYWdlcikge1xuICByZXR1cm4gbmV3IFRhcmdldE1vbml0b3IobWFuYWdlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0TW9uaXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlVGFyZ2V0Q29ubmVjdG9yO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd3JhcENvbm5lY3Rvckhvb2tzID0gcmVxdWlyZSgnLi93cmFwQ29ubmVjdG9ySG9va3MnKTtcblxudmFyIF93cmFwQ29ubmVjdG9ySG9va3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd3JhcENvbm5lY3Rvckhvb2tzKTtcblxudmFyIF9hcmVPcHRpb25zRXF1YWwgPSByZXF1aXJlKCcuL2FyZU9wdGlvbnNFcXVhbCcpO1xuXG52YXIgX2FyZU9wdGlvbnNFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcmVPcHRpb25zRXF1YWwpO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXJnZXRDb25uZWN0b3IoYmFja2VuZCkge1xuICB2YXIgY3VycmVudEhhbmRsZXJJZCA9IHVuZGVmaW5lZDtcblxuICB2YXIgY3VycmVudERyb3BUYXJnZXROb2RlID0gdW5kZWZpbmVkO1xuICB2YXIgY3VycmVudERyb3BUYXJnZXRPcHRpb25zID0gdW5kZWZpbmVkO1xuICB2YXIgZGlzY29ubmVjdEN1cnJlbnREcm9wVGFyZ2V0ID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIHJlY29ubmVjdERyb3BUYXJnZXQoKSB7XG4gICAgaWYgKGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCkge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcm9wVGFyZ2V0KCk7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50SGFuZGxlcklkICYmIGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSkge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcm9wVGFyZ2V0ID0gYmFja2VuZC5jb25uZWN0RHJvcFRhcmdldChjdXJyZW50SGFuZGxlcklkLCBjdXJyZW50RHJvcFRhcmdldE5vZGUsIGN1cnJlbnREcm9wVGFyZ2V0T3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUhhbmRsZXJJZChoYW5kbGVySWQpIHtcbiAgICBpZiAoaGFuZGxlcklkID09PSBjdXJyZW50SGFuZGxlcklkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3VycmVudEhhbmRsZXJJZCA9IGhhbmRsZXJJZDtcbiAgICByZWNvbm5lY3REcm9wVGFyZ2V0KCk7XG4gIH1cblxuICB2YXIgaG9va3MgPSBfd3JhcENvbm5lY3Rvckhvb2tzMlsnZGVmYXVsdCddKHtcbiAgICBkcm9wVGFyZ2V0OiBmdW5jdGlvbiBjb25uZWN0RHJvcFRhcmdldChub2RlLCBvcHRpb25zKSB7XG4gICAgICBpZiAobm9kZSA9PT0gY3VycmVudERyb3BUYXJnZXROb2RlICYmIF9hcmVPcHRpb25zRXF1YWwyWydkZWZhdWx0J10ob3B0aW9ucywgY3VycmVudERyb3BUYXJnZXRPcHRpb25zKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSA9IG5vZGU7XG4gICAgICBjdXJyZW50RHJvcFRhcmdldE9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICByZWNvbm5lY3REcm9wVGFyZ2V0KCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHJlY2VpdmVIYW5kbGVySWQ6IHJlY2VpdmVIYW5kbGVySWQsXG4gICAgaG9va3M6IGhvb2tzXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0Q29ubmVjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlRvdWNoQmFja2VuZCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlVG91Y2hCYWNrZW5kO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBnZXRFdmVudENsaWVudFRvdWNoT2Zmc2V0KGUpIHtcbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZS50YXJnZXRUb3VjaGVzWzBdKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50Q2xpZW50T2Zmc2V0KGUpIHtcbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzKSB7XG4gICAgICAgIHJldHVybiBnZXRFdmVudENsaWVudFRvdWNoT2Zmc2V0KGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBlLmNsaWVudFgsXG4gICAgICAgICAgICB5OiBlLmNsaWVudFlcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbnZhciBFTEVNRU5UX05PREUgPSAxO1xuZnVuY3Rpb24gZ2V0Tm9kZUNsaWVudE9mZnNldChub2RlKSB7XG4gICAgdmFyIGVsID0gbm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFID8gbm9kZSA6IG5vZGUucGFyZW50RWxlbWVudDtcblxuICAgIGlmICghZWwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF9lbCRnZXRCb3VuZGluZ0NsaWVudCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgdmFyIHRvcCA9IF9lbCRnZXRCb3VuZGluZ0NsaWVudC50b3A7XG4gICAgdmFyIGxlZnQgPSBfZWwkZ2V0Qm91bmRpbmdDbGllbnQubGVmdDtcblxuICAgIHJldHVybiB7IHg6IGxlZnQsIHk6IHRvcCB9O1xufVxuXG52YXIgZXZlbnROYW1lcyA9IHtcbiAgICBtb3VzZToge1xuICAgICAgICBzdGFydDogJ21vdXNlZG93bicsXG4gICAgICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgICAgICBlbmQ6ICdtb3VzZXVwJ1xuICAgIH0sXG4gICAgdG91Y2g6IHtcbiAgICAgICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgICAgIGVuZDogJ3RvdWNoZW5kJ1xuICAgIH1cbn07XG5cbnZhciBUb3VjaEJhY2tlbmQgPSBleHBvcnRzLlRvdWNoQmFja2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb3VjaEJhY2tlbmQobWFuYWdlcikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb3VjaEJhY2tlbmQpO1xuXG4gICAgICAgIG9wdGlvbnMuZGVsYXlUb3VjaFN0YXJ0ID0gb3B0aW9ucy5kZWxheVRvdWNoU3RhcnQgfHwgb3B0aW9ucy5kZWxheTtcblxuICAgICAgICBvcHRpb25zID0gX2V4dGVuZHMoe1xuICAgICAgICAgICAgZW5hYmxlVG91Y2hFdmVudHM6IHRydWUsXG4gICAgICAgICAgICBlbmFibGVNb3VzZUV2ZW50czogZmFsc2UsXG4gICAgICAgICAgICBkZWxheVRvdWNoU3RhcnQ6IDAsXG4gICAgICAgICAgICBkZWxheU1vdXNlU3RhcnQ6IDBcbiAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5hY3Rpb25zID0gbWFuYWdlci5nZXRBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMubW9uaXRvciA9IG1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgICB0aGlzLnJlZ2lzdHJ5ID0gbWFuYWdlci5nZXRSZWdpc3RyeSgpO1xuXG4gICAgICAgIHRoaXMuZGVsYXlUb3VjaFN0YXJ0ID0gb3B0aW9ucy5kZWxheVRvdWNoU3RhcnQ7XG4gICAgICAgIHRoaXMuZGVsYXlNb3VzZVN0YXJ0ID0gb3B0aW9ucy5kZWxheU1vdXNlU3RhcnQ7XG4gICAgICAgIHRoaXMuc291cmNlTm9kZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zb3VyY2VOb2RlT3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLnNvdXJjZVByZXZpZXdOb2RlcyA9IHt9O1xuICAgICAgICB0aGlzLnNvdXJjZVByZXZpZXdOb2RlT3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLnRhcmdldE5vZGVzID0ge307XG4gICAgICAgIHRoaXMudGFyZ2V0Tm9kZU9wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5saXN0ZW5lclR5cGVzID0gW107XG4gICAgICAgIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0ID0ge307XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlTW91c2VFdmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJUeXBlcy5wdXNoKCdtb3VzZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlVG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJUeXBlcy5wdXNoKCd0b3VjaCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRTb3VyY2VDbGllbnRPZmZzZXQgPSB0aGlzLmdldFNvdXJjZUNsaWVudE9mZnNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydCA9IHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXkgPSB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydERlbGF5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0Q2FwdHVyZSA9IHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0Q2FwdHVyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVRvcE1vdmVDYXB0dXJlID0gdGhpcy5oYW5kbGVUb3BNb3ZlQ2FwdHVyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlID0gdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUb3VjaEJhY2tlbmQsIFt7XG4gICAgICAgIGtleTogJ3NldHVwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoIXRoaXMuY29uc3RydWN0b3IuaXNTZXRVcCwgJ0Nhbm5vdCBoYXZlIHR3byBUb3VjaCBiYWNrZW5kcyBhdCB0aGUgc2FtZSB0aW1lLicpO1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5pc1NldFVwID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3N0YXJ0JywgdGhpcy5nZXRUb3BNb3ZlU3RhcnRIYW5kbGVyKCkpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3N0YXJ0JywgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdtb3ZlJywgdGhpcy5oYW5kbGVUb3BNb3ZlQ2FwdHVyZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnZW5kJywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3RlYXJkb3duJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRlYXJkb3duKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmlzU2V0VXAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0ID0ge307XG5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdzdGFydCcsIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0Q2FwdHVyZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnc3RhcnQnLCB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnbW92ZScsIHRoaXMuaGFuZGxlVG9wTW92ZUNhcHR1cmUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ2VuZCcsIHRoaXMuaGFuZGxlVG9wTW92ZUVuZENhcHR1cmUsIHRydWUpO1xuXG4gICAgICAgICAgICB0aGlzLnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWRkRXZlbnRMaXN0ZW5lcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHN1YmplY3QsIGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgc3ViamVjdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZXNbbGlzdGVuZXJUeXBlXVtldmVudF0sIGhhbmRsZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUV2ZW50TGlzdGVuZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihzdWJqZWN0LCBldmVudCwgaGFuZGxlciwgY2FwdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyVHlwZSkge1xuICAgICAgICAgICAgICAgIHN1YmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWVzW2xpc3RlbmVyVHlwZV1bZXZlbnRdLCBoYW5kbGVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb25uZWN0RHJhZ1NvdXJjZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0RHJhZ1NvdXJjZShzb3VyY2VJZCwgbm9kZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGhhbmRsZU1vdmVTdGFydCA9IHRoaXMuaGFuZGxlTW92ZVN0YXJ0LmJpbmQodGhpcywgc291cmNlSWQpO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VOb2Rlc1tzb3VyY2VJZF0gPSBub2RlO1xuXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIobm9kZSwgJ3N0YXJ0JywgaGFuZGxlTW92ZVN0YXJ0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMuc291cmNlTm9kZXNbc291cmNlSWRdO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgJ3N0YXJ0JywgaGFuZGxlTW92ZVN0YXJ0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nvbm5lY3REcmFnUHJldmlldycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0RHJhZ1ByZXZpZXcoc291cmNlSWQsIG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVByZXZpZXdOb2RlT3B0aW9uc1tzb3VyY2VJZF0gPSBvcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VQcmV2aWV3Tm9kZXNbc291cmNlSWRdID0gbm9kZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMyLnNvdXJjZVByZXZpZXdOb2Rlc1tzb3VyY2VJZF07XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMi5zb3VyY2VQcmV2aWV3Tm9kZU9wdGlvbnNbc291cmNlSWRdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29ubmVjdERyb3BUYXJnZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdERyb3BUYXJnZXQodGFyZ2V0SWQsIG5vZGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLnRhcmdldE5vZGVzW3RhcmdldElkXSA9IG5vZGU7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMy50YXJnZXROb2Rlc1t0YXJnZXRJZF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRTb3VyY2VDbGllbnRPZmZzZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KHNvdXJjZUlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Tm9kZUNsaWVudE9mZnNldCh0aGlzLnNvdXJjZU5vZGVzW3NvdXJjZUlkXSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG9wTW92ZVN0YXJ0Q2FwdHVyZShlKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVTdGFydFNvdXJjZUlkcyA9IFtdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVNb3ZlU3RhcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW92ZVN0YXJ0KHNvdXJjZUlkKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVTdGFydFNvdXJjZUlkcy51bnNoaWZ0KHNvdXJjZUlkKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0VG9wTW92ZVN0YXJ0SGFuZGxlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUb3BNb3ZlU3RhcnRIYW5kbGVyKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRlbGF5VG91Y2hTdGFydCAmJiAhdGhpcy5kZWxheU1vdXNlU3RhcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydERlbGF5O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVUb3BNb3ZlU3RhcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG9wTW92ZVN0YXJ0KGUpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHByZW1hdHVyZWx5IHByZXZlbnREZWZhdWx0KCkgaGVyZSBzaW5jZSBpdCBtaWdodDpcbiAgICAgICAgICAgIC8vIDEuIE1lc3MgdXAgc2Nyb2xsaW5nXG4gICAgICAgICAgICAvLyAyLiBNZXNzIHVwIGxvbmcgdGFwICh3aGljaCBicmluZ3MgdXAgY29udGV4dCBtZW51KVxuICAgICAgICAgICAgLy8gMy4gSWYgdGhlcmUncyBhbiBhbmNob3IgbGluayBhcyBhIGNoaWxkLCB0YXAgd29uJ3QgYmUgdHJpZ2dlcmVkIG9uIGxpbmtcblxuICAgICAgICAgICAgdmFyIGNsaWVudE9mZnNldCA9IGdldEV2ZW50Q2xpZW50T2Zmc2V0KGUpO1xuICAgICAgICAgICAgaWYgKGNsaWVudE9mZnNldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0ID0gY2xpZW50T2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVUb3BNb3ZlU3RhcnREZWxheScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlU3RhcnREZWxheShlKSB7XG4gICAgICAgICAgICB2YXIgZGVsYXkgPSBlLnR5cGUgPT09IGV2ZW50TmFtZXMudG91Y2guc3RhcnQgPyB0aGlzLmRlbGF5VG91Y2hTdGFydCA6IHRoaXMuZGVsYXlNb3VzZVN0YXJ0O1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLmhhbmRsZVRvcE1vdmVTdGFydC5iaW5kKHRoaXMsIGUpLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVDYXB0dXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVDYXB0dXJlKGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgICAgICAgICAgdmFyIG1vdmVTdGFydFNvdXJjZUlkcyA9IHRoaXMubW92ZVN0YXJ0U291cmNlSWRzO1xuXG4gICAgICAgICAgICB2YXIgY2xpZW50T2Zmc2V0ID0gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZSk7XG5cbiAgICAgICAgICAgIGlmICghY2xpZW50T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBub3QgZHJhZ2dpbmcgYW5kIHdlJ3ZlIG1vdmVkIGEgbGl0dGxlLCB0aGF0IGNvdW50cyBhcyBhIGRyYWcgc3RhcnRcbiAgICAgICAgICAgIGlmICghdGhpcy5tb25pdG9yLmlzRHJhZ2dpbmcoKSAmJiB0aGlzLl9tb3VzZUNsaWVudE9mZnNldC5oYXNPd25Qcm9wZXJ0eSgneCcpICYmIG1vdmVTdGFydFNvdXJjZUlkcyAmJiAodGhpcy5fbW91c2VDbGllbnRPZmZzZXQueCAhPT0gY2xpZW50T2Zmc2V0LnggfHwgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQueSAhPT0gY2xpZW50T2Zmc2V0LnkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5iZWdpbkRyYWcobW92ZVN0YXJ0U291cmNlSWRzLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudE9mZnNldDogdGhpcy5fbW91c2VDbGllbnRPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgIGdldFNvdXJjZUNsaWVudE9mZnNldDogdGhpcy5nZXRTb3VyY2VDbGllbnRPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgIHB1Ymxpc2hTb3VyY2U6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5tb25pdG9yLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNvdXJjZU5vZGUgPSB0aGlzLnNvdXJjZU5vZGVzW3RoaXMubW9uaXRvci5nZXRTb3VyY2VJZCgpXTtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoc291cmNlTm9kZSk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMucHVibGlzaERyYWdTb3VyY2UoKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgbWF0Y2hpbmdUYXJnZXRJZHMgPSBPYmplY3Qua2V5cyh0aGlzLnRhcmdldE5vZGVzKS5maWx0ZXIoZnVuY3Rpb24gKHRhcmdldElkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvdW5kaW5nUmVjdCA9IF90aGlzNC50YXJnZXROb2Rlc1t0YXJnZXRJZF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudE9mZnNldC54ID49IGJvdW5kaW5nUmVjdC5sZWZ0ICYmIGNsaWVudE9mZnNldC54IDw9IGJvdW5kaW5nUmVjdC5yaWdodCAmJiBjbGllbnRPZmZzZXQueSA+PSBib3VuZGluZ1JlY3QudG9wICYmIGNsaWVudE9mZnNldC55IDw9IGJvdW5kaW5nUmVjdC5ib3R0b207XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmhvdmVyKG1hdGNoaW5nVGFyZ2V0SWRzLCB7XG4gICAgICAgICAgICAgICAgY2xpZW50T2Zmc2V0OiBjbGllbnRPZmZzZXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZShlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW9uaXRvci5pc0RyYWdnaW5nKCkgfHwgdGhpcy5tb25pdG9yLmRpZERyb3AoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSB7fTtcblxuICAgICAgICAgICAgdGhpcy51bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuZHJvcCgpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmVuZERyYWcoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIobm9kZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMudW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpO1xuXG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlID0gbm9kZTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIgPSBuZXcgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghbm9kZS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNS5yZXN1cnJlY3RTb3VyY2VOb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNS51bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyLm9ic2VydmUobm9kZS5wYXJlbnRFbGVtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVzdXJyZWN0U291cmNlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXN1cnJlY3RTb3VyY2VOb2RlKCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcmVhY3RpZCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRyYWdnZWRTb3VyY2VOb2RlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUb3VjaEJhY2tlbmQ7XG59KCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvdWNoQmFja2VuZCgpIHtcbiAgICB2YXIgb3B0aW9uc09yTWFuYWdlciA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgdmFyIHRvdWNoQmFja2VuZEZhY3RvcnkgPSBmdW5jdGlvbiB0b3VjaEJhY2tlbmRGYWN0b3J5KG1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUb3VjaEJhY2tlbmQobWFuYWdlciwgb3B0aW9uc09yTWFuYWdlcik7XG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zT3JNYW5hZ2VyLmdldE1vbml0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRvdWNoQmFja2VuZEZhY3Rvcnkob3B0aW9uc09yTWFuYWdlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRvdWNoQmFja2VuZEZhY3Rvcnk7XG4gICAgfVxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC10b3VjaC1iYWNrZW5kL2Rpc3QvVG91Y2guanNcbiAqKiBtb2R1bGUgaWQgPSAxMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJhZ0xheWVyIGZyb20gJ3JlYWN0LWRuZC9saWIvRHJhZ0xheWVyJztcbmltcG9ydCBFdmVudEJhc2UgZnJvbSAnLi9FdmVudEJhc2UnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcblxuZnVuY3Rpb24gY29sbGVjdCAobW9uaXRvcil7XG4gIGNvbnN0IHByb3BzID0ge1xuICAgIGNsaWVudE9mZnNldDogbW9uaXRvci5nZXREaWZmZXJlbmNlRnJvbUluaXRpYWxPZmZzZXQoKVxuICB9O1xuXG4gIGNvbnN0IGl0ZW0gPSBtb25pdG9yLmdldEl0ZW0oKTtcbiAgaWYoaXRlbSAmJiBpdGVtWydkcmFnZ2luZ0NvbXBvbmVudCddKXtcbiAgICBwcm9wc1snZHJhZ2dpbmdDb21wb25lbnQnXSA9IGl0ZW1bJ2RyYWdnaW5nQ29tcG9uZW50J107XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59XG5cbmNsYXNzIEV2ZW50UHJldmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGdldEl0ZW1TdHlsZXMgKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5jbGllbnRPZmZzZXQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCB4ID0gdGhpcy5wcm9wcy5jbGllbnRPZmZzZXQueDtcbiAgICBjb25zdCB5ID0gdGhpcy5wcm9wcy5jbGllbnRPZmZzZXQueTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWA7XG5cbiAgICByZXR1cm4gYXNzaWduKHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQuZ2V0RHJhZ2dpbmdTdHlsZSgpLCB7XG4gICAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICBXZWJraXRUcmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgZHJhZ2dpbmdEaXNwbGF5ID0gJyc7XG4gICAgaWYodGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudCAmJiB0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50LnN0YXRlLmRyYWdnaW5nRGlzcGxheSl7XG4gICAgICBkcmFnZ2luZ0Rpc3BsYXkgPSB0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50LnN0YXRlLmRyYWdnaW5nRGlzcGxheTtcbiAgICB9XG4gICAgXG4gICAgbGV0IGRpc3BsYXkgPSBbXTtcbiAgICBpZih0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50ICYmIHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQuc3RhdGUuZGlzcGxheSl7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudC5zdGF0ZS5kaXNwbGF5O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJwcmV2aWV3XCIgY2xhc3NOYW1lPVwidGxFdmVudFZpZXcgdGxEcmFnZ2luZ0V2ZW50XCIgc3R5bGU9e3RoaXMuZ2V0SXRlbVN0eWxlcygpfT5cbiAgICAgICAgPEV2ZW50QmFzZVxuICAgICAgICAgIGRyYWdnaW5nRGlzcGxheT17ZHJhZ2dpbmdEaXNwbGF5fVxuICAgICAgICAgIGRpc3BsYXk9e2Rpc3BsYXl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdMYXllcihjb2xsZWN0KShFdmVudFByZXZpZXcpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9FdmVudFByZXZpZXcuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJhc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgcmVuZGVyRGlzcGxheShyb3cpe1xuICAgIGlmKCFyb3cudmFsdWUpe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygndGxFdmVudERpc3BsYXlSb3cnLCByb3cua2V5KTtcbiAgICBpZihBcnJheS5pc0FycmF5KHJvdy52YWx1ZSkpe1xuICAgICAgaWYocm93LnZhbHVlLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e3Jvdy5rZXl9PlxuICAgICAgICAgIHtyb3cudmFsdWUubWFwKCh2YWwsIGtleSkgPT4gPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwiaXRlbVwiPnt2YWx9PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtyb3cua2V5fT5cbiAgICAgICAge3Jvdy52YWx1ZX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzEwMCUnfX0+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIGlmKHRoaXMucHJvcHMuZHJhZ2dpbmdEaXNwbGF5KXtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJ0bERyYWdnaW5nRGlzcGxheVwiIHN0eWxlPXt7dG9wOiB0aGlzLnByb3BzLmRyYWdnaW5nRGlzcGxheVRvcH19Pnt0aGlzLnByb3BzLmRyYWdnaW5nRGlzcGxheX08L2Rpdj4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bEV2ZW50RGlzcGxheVwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXkubWFwKHJvdyA9PiB0aGlzLnJlbmRlckRpc3BsYXkocm93KSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAmbmJzcDtcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRXZlbnRCYXNlLmRlZmF1bHRQcm9wcyA9IHtkaXNwbGF5OiBbXX07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0V2ZW50QmFzZS5qc3hcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVGltZVNwYW4gZnJvbSAnLi4vY2xhc3Nlcy9UaW1lU3Bhbic7XG5pbXBvcnQge0RyYWdTb3VyY2V9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgRXZlbnRCYXNlIGZyb20gJy4vRXZlbnRCYXNlJztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuL1RpbWVsaW5lJztcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcblxuY29uc3Qgc291cmNlID0ge1xuICBiZWdpbkRyYWc6IGZ1bmN0aW9uIChwcm9wcywgbW9uaXRvciwgY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGFzc2lnbih7fSwgcHJvcHMsIHtkcmFnZ2luZ0NvbXBvbmVudDogY29tcG9uZW50fSk7XG4gIH0sXG4gIGNhbkRyYWc6IGZ1bmN0aW9uKHByb3BzLCBtb25pdG9yLCBjb21wb25lbnQpe1xuICAgIGNvbnN0IGRyYWdnYWJsZSA9IHByb3BzLnRpbWVsaW5lLmZpbmRFdmVudEJ5SWQocHJvcHMuaWQpLnN0YXRlLmRyYWdnYWJsZTtcbiAgICByZXR1cm4gISFkcmFnZ2FibGU7XG4gIH1cbn1cblxuY29uc3QgY29sbGVjdCA9IChjb25uZWN0LCBtb25pdG9yKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29ubmVjdERyYWdTb3VyY2U6IGNvbm5lY3QuZHJhZ1NvdXJjZSgpLFxuICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpXG4gIH07XG59XG5cbmNsYXNzIEV2ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvcDogcHJvcHMuZmxvYXQgPT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKHRoaXMucHJvcHMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpIDogcHJvcHMuZmxvYXQudG9wLFxuICAgICAgbGVmdDogcHJvcHMuZmxvYXQgPT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0TGluZUxlZnQodGhpcy5wcm9wcy5saW5lSWQpIDogcHJvcHMuZmxvYXQubGVmdCxcbiAgICAgIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yLFxuICAgICAgZHJhZ2dhYmxlOiBwcm9wcy5mbG9hdCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiB0cnVlLFxuICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgIGRyYWdnaW5nRGlzcGxheTogJycsXG4gICAgICBkaXNwbGF5OiBwcm9wcy5kaXNwbGF5LFxuICAgIH1cblxuICAgIHRoaXMubGluZUlkID0gdGhpcy5wcm9wcy5saW5lSWQ7XG4gICAgdGhpcy50aW1lU3BhbiA9IHRoaXMucHJvcHMudGltZVNwYW47XG4gICAgdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLnJlc2l6aW5nVGltZVNwYW4gPSBudWxsO1xuICAgIHRoaXMucmVzaXppbmcgPSBmYWxzZTtcbiAgICB0aGlzLnZhcnMgPSB0aGlzLnByb3BzLnZhcnMgPyB0aGlzLnByb3BzLnZhcnMgOiB7fTtcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYodGhpcy5wcm9wcy5mbG9hdCl7XG4gICAgICBjb25zdCBsaW5lSWQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmZpbmRMaW5lQnlMZWZ0KHRoaXMuc3RhdGUubGVmdCkucHJvcHMuaWQ7XG4gICAgICBjb25zdCB0aW1lID0gdGhpcy5wcm9wcy50aW1lbGluZS50b3BUb1RpbWUodGhpcy5zdGF0ZS50b3ApO1xuICAgICAgdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uID0ge3RpbWU6IHRpbWUsIGxpbmVJZDogbGluZUlkfTtcbiAgICAgIHRoaXMuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5ID0gdGltZS5nZXREaXNwbGF5VGltZSgpO1xuICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLm1pbnV0ZVRvSGVpZ2h0KHRoaXMucHJvcHMuZmxvYXQubWludXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQodGhpcy5wcm9wcy50aW1lU3Bhbik7XG4gICAgfVxuICB9XG5cbiAgdG9Kc29uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgbGluZUlkOiB0aGlzLmxpbmVJZCxcbiAgICAgIHRpbWVTcGFuOiB0aGlzLnRpbWVTcGFuLFxuICAgICAgdmFyczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnZhcnMpKSxcbiAgICAgIGNvbG9yOiB0aGlzLnN0YXRlLmNvbG9yLFxuICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy5kaXNwbGF5LFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCxcbiAgICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSh2YWx1ZXMpe1xuICAgIGNvbnN0IG5ld1N0YXRlID0ge307XG4gICAgaWYodmFsdWVzLnRpbWVTcGFuKXtcbiAgICAgIG5ld1N0YXRlLmhlaWdodCA9IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodCh2YWx1ZXMudGltZVNwYW4pO1xuICAgICAgbmV3U3RhdGUudG9wID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodmFsdWVzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKTtcbiAgICAgIHRoaXMudGltZVNwYW4gPSB2YWx1ZXMudGltZVNwYW47XG4gICAgfVxuXG4gICAgaWYodmFsdWVzLmNvbG9yKXtcbiAgICAgIG5ld1N0YXRlLmNvbG9yID0gdmFsdWVzLmNvbG9yO1xuICAgIH1cblxuICAgIGlmKHZhbHVlcy5kaXNwbGF5KXtcbiAgICAgIG5ld1N0YXRlLmRpc3BsYXkgPSB2YWx1ZXMuZGlzcGxheTtcbiAgICB9XG5cbiAgICBpZih2YWx1ZXMudmFycyl7XG4gICAgICB0aGlzLnZhcnMgPSB2YWx1ZXMudmFycztcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50VGltZVNwYW4oKXtcbiAgICByZXR1cm4gdGhpcy5yZXNpemluZ1RpbWVTcGFuIHx8IHRoaXMudGltZVNwYW47XG4gIH1cblxuICBnZXQgbmV4dFBvc2l0aW9uKCl7XG4gICAgaWYodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmVJZDogdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLmxpbmVJZCxcbiAgICAgICAgdGltZVNwYW46IHRoaXMudGltZVNwYW4uc2hpZnRTdGFydFRpbWUodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLnRpbWUpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICByZXR1cm57XG4gICAgICAgIGxpbmVJZDogdGhpcy5saW5lSWQsXG4gICAgICAgIHRpbWVTcGFuOiB0aGlzLnJlc2l6aW5nVGltZVNwYW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBwcmV2UG9zaXRpb24oKXtcbiAgICBpZighdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uICYmICF0aGlzLnJlc2l6aW5nVGltZVNwYW4pe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybntcbiAgICAgICAgbGluZUlkOiB0aGlzLmxpbmVJZCxcbiAgICAgICAgdGltZVNwYW46IHRoaXMudGltZVNwYW5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5LuW44GuRXZlbnTjgajph43jgarjgaPjgabjgYTjgarjgYTjgYvjg4Hjgqfjg4Pjgq/jgZnjgotcbiAgICogQHBhcmFtICB7b2JqZWN0fSAgcG9zaXRpb24ge2xpbmVJZDogKioqLCB0aW1lU3BhbjogKioqfVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNGcmVlUG9zaXRpb24ocG9zaXRpb24pe1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy50aW1lbGluZS5ldmVudENvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMucHJvcHMudGltZWxpbmUuZXZlbnRDb21wb25lbnRzW2ldO1xuICAgICAgaWYoZXYgPT09IHRoaXMpIGNvbnRpbnVlO1xuICAgICAgaWYoZXYubGluZUlkICE9IHBvc2l0aW9uLmxpbmVJZCkgY29udGludWU7XG4gICAgICBpZihldi5jdXJyZW50VGltZVNwYW4ub3ZlcmxhcHMocG9zaXRpb24udGltZVNwYW4pKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbW92ZVRvKHRvcCwgbGVmdCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dG9wOiB0b3AsIGxlZnQ6IGxlZnR9KTtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZENsaWNrKXtcbiAgICAgIGlmKHRoaXMucmVzaXppbmcpe1xuICAgICAgICByZXR1cm4gO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkQ2xpY2soe1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy5wcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudC5yZWZzLmxpbmVzV3JhcHBlci5zY3JvbGxUb3AsXG4gICAgICAgICAgc2Nyb2xsTGVmdDogdGhpcy5wcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudC5lbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICAgICAgdG9wOiBlLmNsaWVudFksXG4gICAgICAgICAgbGVmdDogZS5jbGllbnRYLFxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGxpbmVDb21wb25lbnQ6IHRoaXMucHJvcHMudGltZWxpbmUubGluZUNvbXBvbmVudHMuZmluZChsaW5lQ29tcG9uZW50ID0+IGxpbmVDb21wb25lbnQucHJvcHMuaWQgPT0gdGhpcy5saW5lSWQpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmFnZ2luZyh0aW1lLCBsaW5lSWQpe1xuICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbiA9IHt0aW1lOiB0aW1lLCBsaW5lSWQ6IGxpbmVJZH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmdEaXNwbGF5OiB0aW1lLmdldERpc3BsYXlUaW1lKCl9KTtcbiAgfVxuXG4gIHJlc2l6ZVVwKGUpe1xuICAgIHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQucmVzaXplVXAodGhpcywgZS5jbGllbnRZKTtcbiAgfVxuXG4gIHJlc2l6ZURvd24oZSl7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5mcmFtZUNvbXBvbmVudC5yZXNpemVEb3duKHRoaXMsIGUuY2xpZW50WSk7XG4gIH1cblxuICBlbmRSZXNpemluZyhlKXtcbiAgICBpZih0aGlzLnJlc2l6aW5nVGltZVNwYW4pe1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogbnVsbCxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5VG9wOiBudWxsXG4gICAgICB9O1xuXG4gICAgICBpZih0aGlzLnJlc2l6aW5nVGltZVNwYW4pe1xuICAgICAgICBuZXdTdGF0ZS50b3AgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh0aGlzLnJlc2l6aW5nVGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpO1xuICAgICAgICBuZXdTdGF0ZS5oZWlnaHQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQodGhpcy5yZXNpemluZ1RpbWVTcGFuKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25DbGljaygpO1xuICAgIH1cblxuICAgIC8vb25DbGlja+OCiOOCimVuZFJlc2l6aW5n44Gu5YWI44Gr55m655Sf44GX44Gm44GX44G+44GG44CCXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc2l6aW5nID0gZmFsc2UsIDEwMCk7XG4gIH1cblxuICBvbkNvbnRleHRNZW51KGUpe1xuICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnREaWRSaWdodENsaWNrKXtcbiAgICAgIHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnREaWRSaWdodENsaWNrKHtcbiAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RHJhZ2dpbmdTdHlsZSgpe1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICB0b3A6IHRoaXMuc3RhdGUudG9wLFxuICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmNvbG9yLFxuICAgIH1cbiAgfVxuXG4gIGdldE9mZnNldCgpe1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRoaXMuc3RhdGUudG9wLFxuICAgICAgbGVmdDogdGhpcy5zdGF0ZS5sZWZ0XG4gICAgfVxuICB9XG5cbiAgc2V0Q29sb3IoY29sb3Ipe1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvbG9yOiBjb2xvcn0pO1xuICB9XG5cbiAgc2V0RGlzcGxheShkaXNwbGF5KXtcbiAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiBkaXNwbGF5fSk7XG4gIH1cblxuICByZXNpemUoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgZmxvYXQoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIGRyYWdnaW5nRGlzcGxheTogdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXNwbGF5VGltZSgpXG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYWdnaW5nUG9zaXRpb24gPSB7dGltZTogdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSwgbGluZUlkOiB0aGlzLmxpbmVJZH07XG4gIH1cblxuICBpc0ZpeGVkKCl7XG4gICAgcmV0dXJuICF0aGlzLnN0YXRlLmRyYWdnYWJsZSAmJiAhdGhpcy5zdGF0ZS5yZXNpemFibGU7XG4gIH1cblxuICBpc0ZpeGFibGUoKXtcbiAgICB2YXIgbmV3UG9zaXRpb24gPSB0aGlzLm5leHRQb3NpdGlvbjtcbiAgICBpZighbmV3UG9zaXRpb24pe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXNGcmVlUG9zaXRpb24obmV3UG9zaXRpb24pO1xuICB9XG5cbiAgaXNDYW5jZWxhYmxlKCl7XG4gICAgdmFyIG5ld1Bvc2l0aW9uID0gdGhpcy5wcmV2UG9zaXRpb247XG4gICAgaWYoIW5ld1Bvc2l0aW9uKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmlzRnJlZVBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgfVxuXG4gIGNhbmNlbCgpe1xuICAgIGlmKHRoaXMuZHJhZ2dpbmdQb3NpdGlvbil7XG4gICAgICBjb25zdCBsZWZ0ID0gdGhpcy5wcm9wcy50aW1lbGluZS5nZXRMaW5lTGVmdCh0aGlzLmxpbmVJZCk7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKTtcbiAgICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJyxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGxlZnQ6IGxlZnRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZih0aGlzLnJlc2l6aW5nVGltZVNwYW4pe1xuICAgICAgY29uc3QgdG9wID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSk7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQodGhpcy50aW1lU3Bhbik7XG4gICAgICB0aGlzLnJlc2l6aW5nVGltZVNwYW4gPSBudWxsO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJycsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmNsZWFyRHJhZ2dpbmdPdmVyKCk7XG4gIH1cblxuICByZW1vdmUoKXtcbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnJlbW92ZUV2ZW50KHRoaXMucHJvcHMuaWQpO1xuICAgIHRoaXMucHJvcHMudGltZWxpbmUuY2xlYXJEcmFnZ2luZ092ZXIoKTtcbiAgfVxuXG4gIGdldE1pbnV0ZSgpe1xuICAgIGlmKHRoaXMudGltZVNwYW4pe1xuICAgICAgcmV0dXJuIHRoaXMudGltZVNwYW4uZ2V0RGlzdGFuY2UoKTtcbiAgICB9IGVsc2UgaWYodGhpcy5wcm9wcy5mbG9hdCl7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wcm9wcy5mbG9hdC5taW51dGUsIDEwKTtcbiAgICB9XG4gIH1cblxuICBmaXgoKXtcbiAgICBpZih0aGlzLmRyYWdnaW5nUG9zaXRpb24pe1xuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIHRvcDogdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLnRpbWUpLFxuICAgICAgICBsZWZ0OiB0aGlzLnByb3BzLnRpbWVsaW5lLmdldExpbmVMZWZ0KHRoaXMuZHJhZ2dpbmdQb3NpdGlvbi5saW5lSWQpLFxuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3VGltZVNwYW4gPSB0aGlzLnRpbWVTcGFuLnNoaWZ0U3RhcnRUaW1lKHRoaXMuZHJhZ2dpbmdQb3NpdGlvbi50aW1lKTtcbiAgICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnRXaWxsRml4KXtcbiAgICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudFdpbGxGaXgoe1xuICAgICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgbGluZUlkOiB0aGlzLmRyYWdnaW5nUG9zaXRpb24ubGluZUlkLFxuICAgICAgICAgIHRpbWVTcGFuOiBuZXdUaW1lU3BhblxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB0aGlzLmxpbmVJZCA9IHRoaXMuZHJhZ2dpbmdQb3NpdGlvbi5saW5lSWQ7XG4gICAgICB0aGlzLnRpbWVTcGFuID0gbmV3VGltZVNwYW47XG4gICAgICB0aGlzLmRyYWdnaW5nUG9zaXRpb24gPSBudWxsO1xuICAgIH0gZWxzZSBpZih0aGlzLnJlc2l6aW5nVGltZVNwYW4pe1xuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJydcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnRXaWxsRml4KXtcbiAgICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudFdpbGxGaXgoe1xuICAgICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgbGluZUlkOiB0aGlzLmxpbmVJZCxcbiAgICAgICAgICB0aW1lU3BhbjogdGhpcy5yZXNpemluZ1RpbWVTcGFuXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIHRoaXMudGltZVNwYW4gPSB0aGlzLnJlc2l6aW5nVGltZVNwYW47XG4gICAgICB0aGlzLnJlc2l6aW5nVGltZVNwYW4gPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICAgIGlmKHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMuZXZlbnREaWRGaXgpe1xuICAgICAgdGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZEZpeCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzZXRWYXIoa2V5LCB2YWx1ZSl7XG4gICAgdGhpcy52YXJzW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFZhcihrZXkpe1xuICAgIHJldHVybiB0aGlzLnZhcnNba2V5XTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCArICdweCcsXG4gICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQgKyAncHgnLFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggKyAncHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmNvbG9yLFxuICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy5pc0RyYWdnaW5nID8gJ25vbmUnIDogJ2Jsb2NrJ1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jb25uZWN0RHJhZ1NvdXJjZShcbiAgICAgIDxkaXYgcmVmPXtlbGVtID0+IHRoaXMuZWxlbWVudCA9IGVsZW19IG9uQ29udGV4dE1lbnU9e2UgPT4gdGhpcy5vbkNvbnRleHRNZW51KGUpfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3RsRXZlbnRWaWV3Jywge3RsRHJhZ2dpbmdFdmVudDogdGhpcy5zdGF0ZS5kcmFnZ2FibGUsIHRsUmVzaXphYmxlRXZlbnQ6IHRoaXMuc3RhdGUucmVzaXphYmxlfSl9IHN0eWxlPXtzdHlsZX0gb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9PlxuICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnN0YXRlLnJlc2l6YWJsZSl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsUmVzaXplSGFuZGxlXCIgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucmVzaXplVXAoZSl9IG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplVXAoZSl9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgICAgPEV2ZW50QmFzZVxuICAgICAgICAgIGRyYWdnaW5nRGlzcGxheT17dGhpcy5zdGF0ZS5kcmFnZ2luZ0Rpc3BsYXl9XG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5VG9wPXt0aGlzLnN0YXRlLmRyYWdnaW5nRGlzcGxheVRvcH1cbiAgICAgICAgICBkaXNwbGF5PXt0aGlzLnN0YXRlLmRpc3BsYXl9XG4gICAgICAgIC8+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIGlmKHRoaXMuc3RhdGUucmVzaXphYmxlKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSZXNpemVIYW5kbGUgdGxCb3R0b21cIiBvblRvdWNoU3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVEb3duKGUpfSBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLnJlc2l6ZURvd24oZSl9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gRXZlbnQucHJvcFR5cGVzID0ge1xuLy8gICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuLy8gICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWQsXG4vLyAgIGNvbG9yOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4vLyAgIC8vVE9ETyDlvqrnkrDlj4Lnhafjgavjgarjgovjga7jgadpbXBvcnTjgafjgY3jgZrjgILjgajjgorjgYLjgYjjgZphbnnjgafjgZTjgb7jgYvjgZfjgabjgb7jgZnjgIJcbi8vICAgdGltZWxpbmU6IFJlYWN0LlByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbi8vICAgbGluZUlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZ1NvdXJjZShcIkV2ZW50XCIsIHNvdXJjZSwgY29sbGVjdCkoRXZlbnQpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9FdmVudC5qc3hcbiAqKi8iLCJpbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudSc7XG5cbmV4cG9ydCB7Q29udGV4dE1lbnV9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9yZWFjdC1jb250ZXh0LW1lbnUvaW5kZXguZXM2XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL0NvbnRleHRNZW51SXRlbSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgc3RhdGljIGdldFdpbmRvd1NpemUoKXtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblxuICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiB7d2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgekluZGV4OiB0aGlzLnByb3BzLnpJbmRleFxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLm92ZXJsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdybU1lbnVPdmVybGF5Jyk7XG4gICAgdGhpcy5vdmVybGF5LnN0eWxlW1wicG9zaXRpb25cIl0gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcInRvcFwiXSA9ICcwJztcbiAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJsZWZ0XCJdID0gJzAnO1xuICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcImRpc3BsYXlcIl0gPSAnbm9uZSc7XG4gICAgdGhpcy5vdmVybGF5LnN0eWxlW1wiekluZGV4XCJdID0gdGhpcy5wcm9wcy56SW5kZXggLSAxO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcbiAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuY2xvc2UoKSk7XG4gICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93KHBvcywgY29udGV4dCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdHlsZTogYXNzaWduKHt9LCB0aGlzLnN0YXRlLnN0eWxlLCBwb3MsIHtkaXNwbGF5OiAnYmxvY2snfSksXG4gICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgfSwgKCkgPT4ge1xuICAgICAgbGV0IHdpbmRvd1NpemUgPSBDb250ZXh0TWVudS5nZXRXaW5kb3dTaXplKCk7XG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJ3aWR0aFwiXSA9IHdpbmRvd1NpemUud2lkdGggKyAncHgnO1xuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlW1wiaGVpZ2h0XCJdID0gd2luZG93U2l6ZS5oZWlnaHQgKyAncHgnO1xuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlWydkaXNwbGF5J10gPSAnYmxvY2snO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZU91dCgpe1xuICAgIGNvbnNvbGUubG9nKCdvdXQnKTtcbiAgfVxuXG4gIG9uTW91c2VPdmVyKCl7XG4gICAgY29uc29sZS5sb2coJ292ZXInKTtcbiAgfVxuXG4gIGNsb3NlKCl7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtzdHlsZTogYXNzaWduKHt9LCB0aGlzLnN0YXRlLnN0eWxlLCB7ZGlzcGxheTogJ25vbmUnfSl9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGVbJ2Rpc3BsYXknXSA9ICdub25lJztcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwibWVudVwiIGNsYXNzTmFtZT1cInJtTWVudVwiIHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJtTWVudUl0ZW1MaXN0XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuY29udGV4dCA/IHRoaXMucHJvcHMuaXRlbXMubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmKCFpdGVtLnNob3cgfHwgaXRlbS5zaG93KHRoaXMuc3RhdGUuY29udGV4dCkpe1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWUodGhpcy5zdGF0ZS5jb250ZXh0KX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2l0ZW0ub25DbGlja31cbiAgICAgICAgICAgICAgICAgIG1lbnU9e3RoaXN9XG4gICAgICAgICAgICAgICAgICBlbmFibGU9e2l0ZW0uZW5hYmxlID8gaXRlbS5lbmFibGUodGhpcy5zdGF0ZS5jb250ZXh0KSA6IHRydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIDogbnVsbH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ29udGV4dE1lbnUucHJvcFR5cGVzID0ge1xuICBpdGVtczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHNob3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGVuYWJsZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSkpLmlzUmVxdWlyZWQsXG4gIHpJbmRleDogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxufVxuXG5Db250ZXh0TWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHpJbmRleDogMTAwXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9yZWFjdC1jb250ZXh0LW1lbnUvc3JjL2pzL2NvbXBvbmVudHMvQ29udGV4dE1lbnUuanN4XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9yZWFjdC1jb250ZXh0LW1lbnUvfi9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW91c2VPdmVyOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBvbk1vdXNlT3V0KCl7XG4gICAgaWYodGhpcy5wcm9wcy5lbmFibGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VPdmVyKCl7XG4gICAgaWYodGhpcy5wcm9wcy5lbmFibGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiB0cnVlfSk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBpZih0aGlzLnByb3BzLmVuYWJsZSl7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy5tZW51LnN0YXRlLmNvbnRleHQpO1xuICAgICAgdGhpcy5wcm9wcy5tZW51LmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJybU1lbnVJdGVtXCIsIHtybU1vdXNlT3ZlcjogdGhpcy5zdGF0ZS5tb3VzZU92ZXIsIHJtRGlzYWJsZWQ6ICF0aGlzLnByb3BzLmVuYWJsZSwgcm1TZXBhcmF0b3I6IHRoaXMucHJvcHMubmFtZSA9PSAnLSd9KX1cbiAgICAgICAgb25Nb3VzZU92ZXI9e2UgPT4gdGhpcy5vbk1vdXNlT3ZlcihlKX1cbiAgICAgICAgb25Nb3VzZU91dD17ZSA9PiB0aGlzLm9uTW91c2VPdXQoZSl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5wcm9wcy5uYW1lID09ICctJyA/IG51bGwgOiB0aGlzLnByb3BzLm5hbWV9fVxuICAgICAgPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9yZWFjdC1jb250ZXh0LW1lbnUvc3JjL2pzL2NvbXBvbmVudHMvQ29udGV4dE1lbnVJdGVtLmpzeFxuICoqLyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9yZWFjdC1jb250ZXh0LW1lbnUvfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9