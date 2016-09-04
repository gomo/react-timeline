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
	
	var _reactContextMenu = __webpack_require__(144);
	
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
	    timeline.actions.setHeight(calcHeight(timelineElement));
	  };
	
	  timeline.actions.addEvents([{
	    lineId: '__1',
	    timeSpan: _index.TimeSpan.create([11, 0], [12, 0]),
	    color: '#FFB6B6',
	    display: [{ key: 'startTime', value: '11:00' }, { key: 'type', value: 'foobar' }, { key: 'memo', value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' }]
	  }]);
	
	  timeline.actions.addEvents([{ id: '1231', lineId: '__1', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '1241', lineId: '__1', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '1251', lineId: '__1', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1261', lineId: '__1', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '1271', lineId: '__1', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '1281', lineId: '__1', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '1291', lineId: '__1', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '123', lineId: '__2', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '124', lineId: '__2', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '125', lineId: '__2', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1233', lineId: '__3', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '1243', lineId: '__3', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '1253', lineId: '__3', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1234', lineId: '__4', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '1244', lineId: '__4', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '1254', lineId: '__4', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12355', lineId: '__5', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12455', lineId: '__5', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12555', lineId: '__5', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1226', lineId: '__6', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '1236', lineId: '__6', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '1246', lineId: '__6', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '1256', lineId: '__6', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1266', lineId: '__6', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '1276', lineId: '__6', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '1286', lineId: '__6', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '1296', lineId: '__6', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '12377', lineId: '__7', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12477', lineId: '__7', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12577', lineId: '__7', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1228', lineId: '__8', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '1238', lineId: '__8', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '1248', lineId: '__8', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '1258', lineId: '__8', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '1268', lineId: '__8', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '1278', lineId: '__8', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '1288', lineId: '__8', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '1298', lineId: '__8', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '1239', lineId: '__9', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '1249', lineId: '__9', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '1259', lineId: '__9', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12210', lineId: '__10', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '12310', lineId: '__10', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12410', lineId: '__10', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12510', lineId: '__10', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12610', lineId: '__10', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '12710', lineId: '__10', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '12810', lineId: '__10', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '12910', lineId: '__10', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '12311', lineId: '__11', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12411', lineId: '__11', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12511', lineId: '__11', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12312', lineId: '__12', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12412', lineId: '__12', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12512', lineId: '__12', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12213', lineId: '__13', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '12313', lineId: '__13', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12413', lineId: '__13', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12513', lineId: '__13', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12613', lineId: '__13', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '12713', lineId: '__13', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '12813', lineId: '__13', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '12913', lineId: '__13', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '12314', lineId: '__14', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12414', lineId: '__14', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12514', lineId: '__14', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12315', lineId: '__15', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12415', lineId: '__15', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12515', lineId: '__15', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12216', lineId: '__16', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '12316', lineId: '__16', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12416', lineId: '__16', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12516', lineId: '__16', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12616', lineId: '__16', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '12716', lineId: '__16', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '12816', lineId: '__16', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '12916', lineId: '__16', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '12217', lineId: '__17', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '12317', lineId: '__17', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12417', lineId: '__17', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12517', lineId: '__17', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12617', lineId: '__17', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '12717', lineId: '__17', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '12817', lineId: '__17', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '12917', lineId: '__17', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }, { id: '12218', lineId: '__18', timeSpan: _index.TimeSpan.create([11, 15], [12, 30]), color: '#FFDCB6' }, { id: '12318', lineId: '__18', timeSpan: _index.TimeSpan.create([12, 30], [13, 30]), color: '#FFDCB6' }, { id: '12418', lineId: '__18', timeSpan: _index.TimeSpan.create([14, 0], [16, 30]), color: '#FFDCB6' }, { id: '12518', lineId: '__18', timeSpan: _index.TimeSpan.create([17, 0], [18, 30]), color: '#FFDCB6' }, { id: '12618', lineId: '__18', timeSpan: _index.TimeSpan.create([18, 30], [19, 30]), color: '#FFDCB6' }, { id: '12718', lineId: '__18', timeSpan: _index.TimeSpan.create([19, 30], [20, 30]), color: '#FFDCB6' }, { id: '12818', lineId: '__18', timeSpan: _index.TimeSpan.create([20, 30], [21, 30]), color: '#FFDCB6' }, { id: '12918', lineId: '__18', timeSpan: _index.TimeSpan.create([22, 30], [23, 30]), color: '#FFDCB6' }]);
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
	
	var _TimelineActions = __webpack_require__(7);
	
	var _TimelineActions2 = _interopRequireDefault(_TimelineActions);
	
	var _Frame = __webpack_require__(137);
	
	var _Frame2 = _interopRequireDefault(_Frame);
	
	var _Ruler = __webpack_require__(140);
	
	var _Ruler2 = _interopRequireDefault(_Ruler);
	
	var _Line = __webpack_require__(138);
	
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
	
	        if (line.props.id == lineId) {
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
	      return this.findNextEventByTime(eventComponent.lineId, eventComponent.currentTimeSpan.getEndTime());
	      // return this.eventComponents
	      //   .filter(ev =>  !ev.state.draggable && ev.lineId == eventComponent.lineId)//同じ列のものだけに絞る
	      //   .sort((a, b) => a.currentTimeSpan.getStartTime().compare(b.currentTimeSpan.getStartTime()))//時間の昇順で並び替え
	      //   .find(ev => ev.currentTimeSpan.getStartTime().compare(eventComponent.currentTimeSpan.getEndTime()) >= 0)//昇順なので対象より最初に開始時間が遅いものがnext
	      //   ;
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
	      // const nextEvent = this.findNextEvent(eventComponent);
	      // let nextTime;
	      // if(nextEvent){
	      //   nextTime = nextEvent.currentTimeSpan.getStartTime();
	      // } else {
	      //   nextTime = this.timeSpan.getEndTime();
	      // }
	
	      return this.timeToTop(this.getNextTime(eventComponent.lineId, eventComponent.currentTimeSpan.getEndTime()));
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
	        lineHeight: this.lineHeight,
	        timeline: this,
	        rulerInterval: this.props.rulerInterval,
	        events: this.props.events
	      });
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
	      return this.component.frameComponent.addEvents(events);
	    }
	  }, {
	    key: 'setHeight',
	    value: function setHeight(height) {
	      this.component.frameComponent.setHeight(height);
	    }
	  }, {
	    key: 'removeEvent',
	    value: function removeEvent(eventId) {
	      this.component.frameComponent.removeEvent(eventId);
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
	
	var _EventBase = __webpack_require__(134);
	
	var _EventBase2 = _interopRequireDefault(_EventBase);
	
	var _EventActions = __webpack_require__(135);
	
	var _EventActions2 = _interopRequireDefault(_EventActions);
	
	var _Timeline = __webpack_require__(3);
	
	var _Timeline2 = _interopRequireDefault(_Timeline);
	
	var _objectAssign = __webpack_require__(136);
	
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
	    _this.vars = _this.props.vars ? _this.props.vars : {};
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
	      var _this2 = this;
	
	      if (this.props.timeline.props.eventDidClick) {
	        if (this.resizing) {
	          return;
	        }
	
	        this.props.timeline.props.eventDidClick({
	          event: e,
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
	    key: 'updateDisplay',
	    value: function updateDisplay(display) {
	      var newDisplay = this.state.display.map(function (item) {
	        if (item.key in display) {
	          return { key: item.key, value: display[item.key] };
	        }
	
	        return item;
	      });
	
	      this.setState({ display: newDisplay });
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
	        { onContextMenu: function onContextMenu(e) {
	            return _this4.onContextMenu(e);
	          }, className: (0, _classnames2.default)('tlEventView', { tlDraggingEvent: this.state.draggable, tlResizableEvent: this.state.resizable }), style: style, onClick: function onClick(e) {
	            return _this4.onClick(e);
	          } },
	        function () {
	          if (_this4.state.resizable) {
	            return _react2.default.createElement(
	              'div',
	              { className: 'tlResizeHandle', onTouchstart: function onTouchstart(e) {
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
	              { className: 'tlResizeHandle tlBottom', onTouchstart: function onTouchstart(e) {
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
	
	var _DragSource = __webpack_require__(114);
	
	exports.DragSource = _interopRequire(_DragSource);
	
	var _DropTarget = __webpack_require__(129);
	
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
	    isArrayLikeObject = __webpack_require__(76),
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(33),
	    arrayIncludes = __webpack_require__(69),
	    arrayIncludesWith = __webpack_require__(72),
	    arrayMap = __webpack_require__(73),
	    baseUnary = __webpack_require__(74),
	    cacheHas = __webpack_require__(75);
	
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
	    setCacheAdd = __webpack_require__(67),
	    setCacheHas = __webpack_require__(68);
	
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
	    mapCacheDelete = __webpack_require__(61),
	    mapCacheGet = __webpack_require__(64),
	    mapCacheHas = __webpack_require__(65),
	    mapCacheSet = __webpack_require__(66);
	
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
	    ListCache = __webpack_require__(52),
	    Map = __webpack_require__(60);
	
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
	    hashDelete = __webpack_require__(48),
	    hashGet = __webpack_require__(49),
	    hashHas = __webpack_require__(50),
	    hashSet = __webpack_require__(51);
	
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

	var baseIsNative = __webpack_require__(40),
	    getValue = __webpack_require__(47);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(41),
	    isHostObject = __webpack_require__(17),
	    isMasked = __webpack_require__(42),
	    isObject = __webpack_require__(28),
	    toSource = __webpack_require__(46);
	
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
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(43);
	
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(44);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var checkGlobal = __webpack_require__(45);
	
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(53),
	    listCacheDelete = __webpack_require__(54),
	    listCacheGet = __webpack_require__(57),
	    listCacheHas = __webpack_require__(58),
	    listCacheSet = __webpack_require__(59);
	
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
/* 53 */
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(55);
	
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(56);
	
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
/* 56 */
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(55);
	
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(55);
	
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(55);
	
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39),
	    root = __webpack_require__(44);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(62);
	
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(63);
	
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
/* 63 */
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(62);
	
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(62);
	
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(62);
	
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
/* 67 */
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
/* 68 */
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(70);
	
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(71);
	
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
/* 71 */
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
/* 72 */
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
/* 73 */
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
/* 74 */
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
/* 75 */
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(77),
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


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(78),
	    isFunction = __webpack_require__(41),
	    isLength = __webpack_require__(80);
	
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(79);
	
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
/* 79 */
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
/* 80 */
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

	var isObjectLike = __webpack_require__(18);
	
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
	    isArrayLikeObject = __webpack_require__(76),
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
	 * _.xor([2, 1], [2, 3]);
	 * // => [1, 3]
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
	    arrayIncludes = __webpack_require__(69),
	    arrayIncludesWith = __webpack_require__(72),
	    cacheHas = __webpack_require__(75),
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
	    root = __webpack_require__(44);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 96 */
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

	var arrayMap = __webpack_require__(73),
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
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(33),
	    arrayIncludes = __webpack_require__(69),
	    arrayIncludesWith = __webpack_require__(72),
	    arrayMap = __webpack_require__(73),
	    baseUnary = __webpack_require__(74),
	    cacheHas = __webpack_require__(75);
	
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

	var isArrayLikeObject = __webpack_require__(76);
	
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
	
	var _lodashIsPlainObject = __webpack_require__(15);
	
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

	'use strict';
	
	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DragSource;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsPlainObject = __webpack_require__(15);
	
	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(110);
	
	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
	
	var _decorateHandler = __webpack_require__(115);
	
	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);
	
	var _registerSource = __webpack_require__(121);
	
	var _registerSource2 = _interopRequireDefault(_registerSource);
	
	var _createSourceFactory = __webpack_require__(122);
	
	var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);
	
	var _createSourceMonitor = __webpack_require__(123);
	
	var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);
	
	var _createSourceConnector = __webpack_require__(124);
	
	var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);
	
	var _utilsIsValidType = __webpack_require__(128);
	
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
/* 115 */
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
	
	var _disposables = __webpack_require__(116);
	
	var _utilsShallowEqual = __webpack_require__(112);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	var _utilsShallowEqualScalar = __webpack_require__(113);
	
	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);
	
	var _lodashIsPlainObject = __webpack_require__(15);
	
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
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	exports.__esModule = true;
	
	var _isDisposable2 = __webpack_require__(117);
	
	var _isDisposable3 = _interopRequireWildcard(_isDisposable2);
	
	exports.isDisposable = _isDisposable3['default'];
	
	var _Disposable2 = __webpack_require__(118);
	
	var _Disposable3 = _interopRequireWildcard(_Disposable2);
	
	exports.Disposable = _Disposable3['default'];
	
	var _CompositeDisposable2 = __webpack_require__(119);
	
	var _CompositeDisposable3 = _interopRequireWildcard(_CompositeDisposable2);
	
	exports.CompositeDisposable = _CompositeDisposable3['default'];
	
	var _SerialDisposable2 = __webpack_require__(120);
	
	var _SerialDisposable3 = _interopRequireWildcard(_SerialDisposable2);
	
	exports.SerialDisposable = _SerialDisposable3['default'];

/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isDisposable;
	
	function isDisposable(obj) {
	  return Boolean(obj && typeof obj.dispose === 'function');
	}
	
	module.exports = exports['default'];

/***/ },
/* 118 */
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
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	exports.__esModule = true;
	
	var _isDisposable = __webpack_require__(117);
	
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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	exports.__esModule = true;
	
	var _isDisposable = __webpack_require__(117);
	
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
/* 121 */
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
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = createSourceFactory;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsPlainObject = __webpack_require__(15);
	
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
/* 123 */
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
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createSourceConnector;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _wrapConnectorHooks = __webpack_require__(125);
	
	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);
	
	var _areOptionsEqual = __webpack_require__(127);
	
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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = wrapConnectorHooks;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsCloneWithRef = __webpack_require__(126);
	
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
/* 126 */
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
/* 127 */
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isValidType;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashIsArray = __webpack_require__(25);
	
	var _lodashIsArray2 = _interopRequireDefault(_lodashIsArray);
	
	function isValidType(type, allowArray) {
	       return typeof type === 'string' || typeof type === 'symbol' || allowArray && _lodashIsArray2['default'](type) && type.every(function (t) {
	              return isValidType(t, false);
	       });
	}
	
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DropTarget;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsPlainObject = __webpack_require__(15);
	
	var _lodashIsPlainObject2 = _interopRequireDefault(_lodashIsPlainObject);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(110);
	
	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
	
	var _decorateHandler = __webpack_require__(115);
	
	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);
	
	var _registerTarget = __webpack_require__(130);
	
	var _registerTarget2 = _interopRequireDefault(_registerTarget);
	
	var _createTargetFactory = __webpack_require__(131);
	
	var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);
	
	var _createTargetMonitor = __webpack_require__(132);
	
	var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);
	
	var _createTargetConnector = __webpack_require__(133);
	
	var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);
	
	var _utilsIsValidType = __webpack_require__(128);
	
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
/* 130 */
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
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = createTargetFactory;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(26);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashIsPlainObject = __webpack_require__(15);
	
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
/* 132 */
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
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createTargetConnector;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _wrapConnectorHooks = __webpack_require__(125);
	
	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);
	
	var _areOptionsEqual = __webpack_require__(127);
	
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
/* 134 */
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
	              Array.isArray(row.value) ? row.value.map(function (val, key) {
	                return _react2.default.createElement(
	                  'div',
	                  { key: key, className: 'item' },
	                  val
	                );
	              }) : row.value
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
/* 135 */
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
	      this.component.props.timeline.actions.removeEvent(this.component.props.id);
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
	  }, {
	    key: 'setVar',
	    value: function setVar(key, value) {
	      this.component.vars[key] = value;
	    }
	  }, {
	    key: 'getVar',
	    value: function getVar(key) {
	      return this.component.vars[key];
	    }
	  }, {
	    key: 'setColor',
	    value: function setColor(color) {
	      this.component.setColor(color);
	    }
	
	    //[{key: ***, value: ***}]
	
	  }, {
	    key: 'setDisplay',
	    value: function setDisplay(display) {
	      this.component.setDisplay(display);
	    }
	
	    //{key: value}
	
	  }, {
	    key: 'updateDisplay',
	    value: function updateDisplay(display) {
	      this.component.updateDisplay(display);
	    }
	  }]);
	
	  return EventActions;
	}();
	
	exports.default = EventActions;

/***/ },
/* 136 */
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
/* 137 */
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
	
	var _Line = __webpack_require__(138);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _classnames = __webpack_require__(9);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactDnd = __webpack_require__(10);
	
	var _reactDndTouchBackend = __webpack_require__(142);
	
	var _reactDndTouchBackend2 = _interopRequireDefault(_reactDndTouchBackend);
	
	var _EventPreview = __webpack_require__(143);
	
	var _EventPreview2 = _interopRequireDefault(_EventPreview);
	
	var _Event = __webpack_require__(8);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _Ruler = __webpack_require__(140);
	
	var _Ruler2 = _interopRequireDefault(_Ruler);
	
	var _LineLabel = __webpack_require__(141);
	
	var _LineLabel2 = _interopRequireDefault(_LineLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	      item.draggingComponent.dragging(time, lineComponent.props.id);
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
	      events: _this.props.events,
	      minWidth: 0
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
	        key: data.id,
	        id: data.id,
	        width: this.props.lineWidth,
	        minHeight: this.props.minHeight,
	        timeSpan: this.props.timeSpan,
	        even: lines.length % 2 === 0,
	        timeline: this.props.timeline,
	        vars: data.vars,
	        frame: this
	      }));
	    }
	  }, {
	    key: 'removeEvent',
	    value: function removeEvent(eventId) {
	      var current = this.state.events;
	      var events = [];
	      current.forEach(function (ev) {
	        if (ev.id != eventId) {
	          events.push(ev);
	        }
	      });
	      this.setState({ events: events });
	    }
	  }, {
	    key: 'addEvents',
	    value: function addEvents(events) {
	      var _this4 = this;
	
	      return new Promise(function (resolve) {
	        var current = _this4.state.events;
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
	    key: 'render',
	    value: function render() {
	      var _this5 = this;
	
	      var connectDropTarget = this.props.connectDropTarget;
	
	      return connectDropTarget(_react2.default.createElement(
	        'div',
	        { className: 'tlFrameView scrollWrapper', style: { width: this.props.width, overflowX: 'auto' } },
	        _react2.default.createElement(
	          'div',
	          { style: { minWidth: this.state.minWidth } },
	          _react2.default.createElement(
	            'div',
	            { className: 'tlLabelView', style: { height: _LineLabel2.default.height } },
	            this.state.labels
	          ),
	          _react2.default.createElement(
	            'div',
	            { ref: 'linesWrapper', className: 'tlLinesWrapper scrollWrapper', style: { height: this.props.height - _LineLabel2.default.height } },
	            _react2.default.createElement(
	              'div',
	              { style: { height: this.props.lineHeight, overflowY: "hidden", position: "relative" } },
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
	                  width: _this5.props.timeline.props.lineWidth - 2 - _Line2.default.sidePadding * 2,
	                  vars: event.vars
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
/* 138 */
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
	
	var _Hour = __webpack_require__(139);
	
	var _Hour2 = _interopRequireDefault(_Hour);
	
	var _Ruler = __webpack_require__(140);
	
	var _Ruler2 = _interopRequireDefault(_Ruler);
	
	var _LineLabel = __webpack_require__(141);
	
	var _LineLabel2 = _interopRequireDefault(_LineLabel);
	
	var _classnames = __webpack_require__(9);
	
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
	        { onClick: function onClick(e) {
	            return _this2.onClick(e);
	          }, onContextMenu: function onContextMenu(e) {
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
/* 139 */
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
	
	// Hour.propTypes = {
	//   minHeight: React.PropTypes.number.isRequired,
	//   time: React.PropTypes.instanceOf(Time).isRequired
	// }
	
	
	exports.default = Hour;

/***/ },
/* 140 */
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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Ruler = __webpack_require__(140);
	
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
/* 142 */
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
/* 143 */
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
	
	var _EventBase = __webpack_require__(134);
	
	var _EventBase2 = _interopRequireDefault(_EventBase);
	
	var _objectAssign = __webpack_require__(136);
	
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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ContextMenu = undefined;
	
	var _ContextMenu = __webpack_require__(145);
	
	var _ContextMenu2 = _interopRequireDefault(_ContextMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.ContextMenu = _ContextMenu2.default;

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
	
	var _objectAssign = __webpack_require__(146);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _ContextMenuItem = __webpack_require__(147);
	
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
/* 146 */
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(148);
	
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
	
	  return ContextMenuItem;
	}(_react2.default.Component);
	
	exports.default = ContextMenuItem;

/***/ },
/* 148 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmM2YmRmODhlZDBmNGJiZTFkMjIiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaW1lbGluZUFjdGlvbnMuZXM2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9EcmFnRHJvcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvRHJhZ0Ryb3BNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvbGliL2NyZWF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNIb3N0T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc3ltYm9sLW9ic2VydmFibGUvcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvZHJhZ09mZnNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9hY3Rpb25zL2RyYWdEcm9wLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL3V0aWxzL21hdGNoZXNUeXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kcmFnT3BlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL2FjdGlvbnMvcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvd2l0aG91dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZURpZmZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fSGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jaGVja0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pbmRleE9mTmFOLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldExlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3Jlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FwcGx5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3RvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC90b0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC90b051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9yZWZDb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kaXJ0eUhhbmRsZXJJZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gveG9yLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVhvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5pcS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbm9vcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Nhc3RBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvc3RhdGVJZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9EcmFnRHJvcE1vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvSGFuZGxlclJlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL3V0aWxzL2dldE5leHRVbmlxdWVJZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FzYXAvYnJvd3Nlci1hc2FwLmpzIiwid2VicGFjazovLy8uL34vYXNhcC9icm93c2VyLXJhdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RuZC1jb3JlL2xpYi9EcmFnU291cmNlLmpzIiwid2VicGFjazovLy8uL34vZG5kLWNvcmUvbGliL0Ryb3BUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kbmQtY29yZS9saWIvYmFja2VuZHMvY3JlYXRlVGVzdEJhY2tlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9EcmFnTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL3NoYWxsb3dFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvdXRpbHMvc2hhbGxvd0VxdWFsU2NhbGFyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9EcmFnU291cmNlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9kZWNvcmF0ZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kaXNwb3NhYmxlcy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGlzcG9zYWJsZXMvbW9kdWxlcy9pc0Rpc3Bvc2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kaXNwb3NhYmxlcy9tb2R1bGVzL0Rpc3Bvc2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kaXNwb3NhYmxlcy9tb2R1bGVzL0NvbXBvc2l0ZURpc3Bvc2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kaXNwb3NhYmxlcy9tb2R1bGVzL1NlcmlhbERpc3Bvc2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3JlZ2lzdGVyU291cmNlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9jcmVhdGVTb3VyY2VGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9jcmVhdGVTb3VyY2VNb25pdG9yLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9jcmVhdGVTb3VyY2VDb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3dyYXBDb25uZWN0b3JIb29rcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvdXRpbHMvY2xvbmVXaXRoUmVmLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9hcmVPcHRpb25zRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL2lzVmFsaWRUeXBlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9Ecm9wVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kL2xpYi9yZWdpc3RlclRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0TW9uaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0Q29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50QmFzZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvRXZlbnRBY3Rpb25zLmVzNiIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRnJhbWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xpbmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hvdXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1J1bGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaW5lTGFiZWwuanN4Iiwid2VicGFjazovLy8uL34vcmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQvZGlzdC9Ub3VjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudFByZXZpZXcuanN4Iiwid2VicGFjazovLy8uLi9yZWFjdC1jb250ZXh0LW1lbnUvaW5kZXguZXM2Iiwid2VicGFjazovLy8uLi9yZWFjdC1jb250ZXh0LW1lbnUvc3JjL2pzL2NvbXBvbmVudHMvQ29udGV4dE1lbnUuanN4Iiwid2VicGFjazovLy8uLi9yZWFjdC1jb250ZXh0LW1lbnUvfi9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9yZWFjdC1jb250ZXh0LW1lbnUvc3JjL2pzL2NvbXBvbmVudHMvQ29udGV4dE1lbnVJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi4vcmVhY3QtY29udGV4dC1tZW51L34vY2xhc3NuYW1lcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLFVBQVMsYUFBVCxHQUF3QjtBQUN0QixPQUFNLFFBQVEsT0FBTyxVQUFQLElBQ1gsU0FBUyxlQUFULENBQXlCLFdBRGQsSUFFWCxTQUFTLElBQVQsQ0FBYyxXQUZqQjs7QUFJQSxPQUFNLFNBQVMsT0FBTyxXQUFQLElBQ1osU0FBUyxlQUFULENBQXlCLFlBRGIsSUFFWixTQUFTLElBQVQsQ0FBYyxZQUZqQjs7QUFJQSxVQUFPLEVBQUMsT0FBTyxLQUFSLEVBQWUsUUFBUSxNQUF2QixFQUFQO0FBQ0Q7O0FBRUQsVUFBUyxVQUFULENBQW9CLGVBQXBCLEVBQW9DO0FBQ2xDLE9BQU0sZ0JBQWdCLGdCQUFnQixxQkFBaEIsRUFBdEI7QUFDQSxPQUFNLGFBQWEsZUFBbkI7QUFDQSxVQUFPLFdBQVcsTUFBWCxHQUFvQixjQUFjLEdBQXpDO0FBQ0Q7O0FBRUQsUUFBTyxNQUFQLEdBQWdCLFlBQU07O0FBRXBCLE9BQU0sWUFBWSxtQkFBUyxNQUFULENBQ2hCO0FBQ0UsWUFBTyxDQUNMO0FBQ0UsYUFBTTtBQUFBLGdCQUFXLE9BQVg7QUFBQSxRQURS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Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixZQUFXLFNBQVM7QUFDcEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsU0FBUztBQUNwQixZQUFXLFNBQVM7QUFDcEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsTUFBTTtBQUNqQixjQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsU0FBUztBQUNwQixZQUFXLFNBQVM7QUFDcEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDOzs7Ozs7QUNqTkE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLHdCQUF1QixrRUFBa0U7O0FBRXpGOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSxxQzs7Ozs7O0FDM01BOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQ1ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQzVGQTs7QUFFQTtBQUNBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUN4RkE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUEscUM7Ozs7OztBQ2xFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBLHFDOzs7Ozs7QUNuQ0E7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDbkJBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjs7QUFFQSxxQzs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx5RUFBd0U7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDOUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUNuQkE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7OztBQ2xGQTs7QUFFQTtBQUNBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2Sjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUNwRkE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVxQixTOzs7Ozs7Ozs7Ozs4QkFFWDtBQUFBOztBQUNOLGNBQ0U7QUFBQTtTQUFBLEVBQUssT0FBTyxFQUFDLFFBQVEsTUFBVCxFQUFaO1NBQ0ksWUFBTTtBQUNOLGVBQUcsT0FBSyxLQUFMLENBQVcsZUFBZCxFQUE4QjtBQUM1QixvQkFBUTtBQUFBO2VBQUEsRUFBSyxXQUFVLG1CQUFmLEVBQW1DLE9BQU8sRUFBQyxLQUFLLE9BQUssS0FBTCxDQUFXLGtCQUFqQixFQUExQztlQUFpRixPQUFLLEtBQUwsQ0FBVztBQUE1RixjQUFSO0FBQ0Q7QUFDRixVQUpBLEVBREg7U0FNRTtBQUFBO1dBQUEsRUFBSyxXQUFVLGdCQUFmO1dBQ0csS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixHQUFuQixDQUF1QixlQUFPO0FBQzdCLG9CQUNFO0FBQUE7ZUFBQSxFQUFLLFdBQVcsMEJBQVcsbUJBQVgsRUFBZ0MsSUFBSSxHQUFwQyxDQUFoQixFQUEwRCxLQUFLLElBQUksR0FBbkU7ZUFDRyxNQUFNLE9BQU4sQ0FBYyxJQUFJLEtBQWxCLElBQTJCLElBQUksS0FBSixDQUFVLEdBQVYsQ0FBYyxVQUFDLEdBQUQsRUFBTSxHQUFOO0FBQUEsd0JBQWM7QUFBQTttQkFBQSxFQUFLLEtBQUssR0FBVixFQUFlLFdBQVUsTUFBekI7bUJBQWlDO0FBQWpDLGtCQUFkO0FBQUEsZ0JBQWQsQ0FBM0IsR0FBc0csSUFBSTtBQUQ3RyxjQURGO0FBS0QsWUFOQTtBQURILFVBTkY7U0FBQTtBQUFBLFFBREY7QUFtQkQ7Ozs7R0F0Qm9DLGdCQUFNLFM7O21CQUF4QixTOzs7Ozs7Ozs7Ozs7Ozs7O0tDSEEsWTtBQUVuQix5QkFBWSxTQUFaLEVBQXNCO0FBQUE7O0FBQ3BCLFVBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNEOzs7OzhCQUVPO0FBQ04sWUFBSyxTQUFMLENBQWUsUUFBZixDQUF3QjtBQUN0QixvQkFBVztBQURXLFFBQXhCO0FBR0Q7Ozs2QkFFTTtBQUNMLFlBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0I7QUFDdEIsb0JBQVcsSUFEVztBQUV0QiwwQkFBaUIsS0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QixZQUF4QixHQUF1QyxjQUF2QztBQUZLLFFBQXhCO0FBSUQ7OzsrQkFFUTtBQUNQLGNBQU8sQ0FBQyxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBQXFCLFNBQXRCLElBQW1DLENBQUMsS0FBSyxTQUFMLENBQWUsS0FBZixDQUFxQixTQUFoRTtBQUNEOzs7aUNBRVU7QUFDVCxXQUFJLGNBQWMsS0FBSyxTQUFMLENBQWUsWUFBakM7QUFDQSxXQUFHLENBQUMsV0FBSixFQUFnQjtBQUNkLGdCQUFPLElBQVA7QUFDRDs7QUFFRCxjQUFPLEtBQUssU0FBTCxDQUFlLGNBQWYsQ0FBOEIsV0FBOUIsQ0FBUDtBQUNEOzs7b0NBRWE7QUFDWixXQUFJLGNBQWMsS0FBSyxTQUFMLENBQWUsWUFBakM7QUFDQSxXQUFHLENBQUMsV0FBSixFQUFnQjtBQUNkLGdCQUFPLElBQVA7QUFDRDs7QUFFRCxjQUFPLEtBQUssU0FBTCxDQUFlLGNBQWYsQ0FBOEIsV0FBOUIsQ0FBUDtBQUNEOzs7OEJBRU87QUFDTixXQUFHLEtBQUssU0FBTCxDQUFlLGdCQUFsQixFQUFtQztBQUNqQyxhQUFNLE9BQU8sS0FBSyxTQUFMLENBQWUsS0FBZixDQUFxQixRQUFyQixDQUE4QixXQUE5QixDQUEwQyxLQUFLLFNBQUwsQ0FBZSxNQUF6RCxDQUFiO0FBQ0EsYUFBTSxNQUFNLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsUUFBckIsQ0FBOEIsU0FBOUIsQ0FBd0MsS0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QixZQUF4QixFQUF4QyxDQUFaO0FBQ0EsY0FBSyxTQUFMLENBQWUsZ0JBQWYsR0FBa0MsSUFBbEM7QUFDQSxjQUFLLFNBQUwsQ0FBZSxRQUFmLENBQXdCO0FBQ3RCLHNCQUFXLEtBRFc7QUFFdEIsNEJBQWlCLEVBRks7QUFHdEIsZ0JBQUssR0FIaUI7QUFJdEIsaUJBQU07QUFKZ0IsVUFBeEI7QUFNRCxRQVZELE1BVU8sSUFBRyxLQUFLLFNBQUwsQ0FBZSxnQkFBbEIsRUFBbUM7QUFDeEMsYUFBTSxPQUFNLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsUUFBckIsQ0FBOEIsU0FBOUIsQ0FBd0MsS0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QixZQUF4QixFQUF4QyxDQUFaO0FBQ0EsYUFBTSxTQUFTLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsUUFBckIsQ0FBOEIsZ0JBQTlCLENBQStDLEtBQUssU0FBTCxDQUFlLFFBQTlELENBQWY7QUFDQSxjQUFLLFNBQUwsQ0FBZSxnQkFBZixHQUFrQyxJQUFsQztBQUNBLGNBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0I7QUFDdEIsc0JBQVcsS0FEVztBQUV0Qiw0QkFBaUIsRUFGSztBQUd0QixnQkFBSyxJQUhpQjtBQUl0QixtQkFBUTtBQUpjLFVBQXhCO0FBTUQsUUFWTSxNQVVBO0FBQ0wsY0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QjtBQUN0QixzQkFBVyxLQURXO0FBRXRCLHNCQUFXLEtBRlc7QUFHdEIsNEJBQWlCO0FBSEssVUFBeEI7QUFLRDs7QUFFRCxZQUFLLFNBQUwsQ0FBZSxLQUFmLENBQXFCLFFBQXJCLENBQThCLGlCQUE5QjtBQUNEOzs7OEJBRU87QUFDTixZQUFLLFNBQUwsQ0FBZSxLQUFmLENBQXFCLFFBQXJCLENBQThCLE9BQTlCLENBQXNDLFdBQXRDLENBQWtELEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsRUFBdkU7QUFDRDs7OzJCQUVJO0FBQ0gsV0FBRyxLQUFLLFNBQUwsQ0FBZSxnQkFBbEIsRUFBbUM7QUFDakMsYUFBTSxRQUFRO0FBQ1osZ0JBQUssS0FBSyxTQUFMLENBQWUsS0FBZixDQUFxQixRQUFyQixDQUE4QixTQUE5QixDQUF3QyxLQUFLLFNBQUwsQ0FBZSxnQkFBZixDQUFnQyxJQUF4RSxDQURPO0FBRVosaUJBQU0sS0FBSyxTQUFMLENBQWUsS0FBZixDQUFxQixRQUFyQixDQUE4QixXQUE5QixDQUEwQyxLQUFLLFNBQUwsQ0FBZSxnQkFBZixDQUFnQyxNQUExRSxDQUZNO0FBR1osc0JBQVcsS0FIQztBQUlaLDRCQUFpQjtBQUpMLFVBQWQ7QUFNQSxhQUFNLGNBQWMsS0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QixjQUF4QixDQUF1QyxLQUFLLFNBQUwsQ0FBZSxnQkFBZixDQUFnQyxJQUF2RSxDQUFwQjtBQUNBLGFBQUcsS0FBSyxTQUFMLENBQWUsS0FBZixDQUFxQixRQUFyQixDQUE4QixLQUE5QixDQUFvQyxZQUF2QyxFQUFvRDtBQUNsRCxnQkFBSyxTQUFMLENBQWUsS0FBZixDQUFxQixRQUFyQixDQUE4QixLQUE5QixDQUFvQyxZQUFwQyxDQUFpRDtBQUMvQyx3QkFBVyxLQUFLLFNBRCtCO0FBRS9DLG9CQUFPLEtBRndDO0FBRy9DLHFCQUFRLEtBQUssU0FBTCxDQUFlLGdCQUFmLENBQWdDLE1BSE87QUFJL0MsdUJBQVU7QUFKcUMsWUFBakQ7QUFNRDtBQUNELGNBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0IsS0FBeEI7QUFDQSxjQUFLLFNBQUwsQ0FBZSxNQUFmLEdBQXdCLEtBQUssU0FBTCxDQUFlLGdCQUFmLENBQWdDLE1BQXhEO0FBQ0EsY0FBSyxTQUFMLENBQWUsUUFBZixHQUEwQixXQUExQjtBQUNBLGNBQUssU0FBTCxDQUFlLGdCQUFmLEdBQWtDLElBQWxDO0FBQ0QsUUFwQkQsTUFvQk8sSUFBRyxLQUFLLFNBQUwsQ0FBZSxnQkFBbEIsRUFBbUM7QUFDeEMsYUFBTSxTQUFRO0FBQ1osc0JBQVcsS0FEQztBQUVaLDRCQUFpQjtBQUZMLFVBQWQ7QUFJQSxhQUFHLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsUUFBckIsQ0FBOEIsS0FBOUIsQ0FBb0MsWUFBdkMsRUFBb0Q7QUFDbEQsZ0JBQUssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsUUFBckIsQ0FBOEIsS0FBOUIsQ0FBb0MsWUFBcEMsQ0FBaUQ7QUFDL0Msd0JBQVcsS0FBSyxTQUQrQjtBQUUvQyxvQkFBTyxNQUZ3QztBQUcvQyxxQkFBUSxLQUFLLFNBQUwsQ0FBZSxNQUh3QjtBQUkvQyx1QkFBVSxLQUFLLFNBQUwsQ0FBZTtBQUpzQixZQUFqRDtBQU1EO0FBQ0QsY0FBSyxTQUFMLENBQWUsUUFBZixDQUF3QixNQUF4QjtBQUNBLGNBQUssU0FBTCxDQUFlLFFBQWYsR0FBMEIsS0FBSyxTQUFMLENBQWUsZ0JBQXpDO0FBQ0EsY0FBSyxTQUFMLENBQWUsZ0JBQWYsR0FBa0MsSUFBbEM7QUFDRCxRQWhCTSxNQWdCQTtBQUNMLGNBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0I7QUFDdEIsc0JBQVcsS0FEVztBQUV0QixzQkFBVyxLQUZXO0FBR3RCLDRCQUFpQjtBQUhLLFVBQXhCO0FBS0Q7O0FBRUQsWUFBSyxTQUFMLENBQWUsS0FBZixDQUFxQixRQUFyQixDQUE4QixpQkFBOUI7QUFDQSxXQUFHLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBcUIsUUFBckIsQ0FBOEIsS0FBOUIsQ0FBb0MsV0FBdkMsRUFBbUQ7QUFDakQsY0FBSyxTQUFMLENBQWUsS0FBZixDQUFxQixRQUFyQixDQUE4QixLQUE5QixDQUFvQyxXQUFwQyxDQUFnRDtBQUM5QyxzQkFBVyxLQUFLO0FBRDhCLFVBQWhEO0FBR0Q7QUFDRjs7OzRCQUVNLEcsRUFBSyxLLEVBQU07QUFDaEIsWUFBSyxTQUFMLENBQWUsSUFBZixDQUFvQixHQUFwQixJQUEyQixLQUEzQjtBQUNEOzs7NEJBRU0sRyxFQUFJO0FBQ1QsY0FBTyxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLEdBQXBCLENBQVA7QUFDRDs7OzhCQUVRLEssRUFBTTtBQUNiLFlBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0IsS0FBeEI7QUFDRDs7Ozs7O2dDQUdVLE8sRUFBUTtBQUNqQixZQUFLLFNBQUwsQ0FBZSxVQUFmLENBQTBCLE9BQTFCO0FBQ0Q7Ozs7OzttQ0FHYSxPLEVBQVE7QUFDcEIsWUFBSyxTQUFMLENBQWUsYUFBZixDQUE2QixPQUE3QjtBQUNEOzs7Ozs7bUJBdEprQixZOzs7Ozs7QUNBckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBZ0Isc0JBQXNCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBLEtBQU0sU0FBUztBQUNiLE9BRGEsZ0JBQ1IsS0FEUSxFQUNELE9BREMsRUFDUSxTQURSLEVBQ21CO0FBQzlCLFNBQU0sT0FBTyxRQUFRLE9BQVIsRUFBYjtBQUNBLFNBQU0sUUFBUSxRQUFRLDhCQUFSLEVBQWQ7O0FBRUEsU0FBTSxlQUFlLEtBQUssaUJBQUwsQ0FBdUIsU0FBdkIsRUFBckI7QUFDQSxTQUFNLE1BQU0sS0FBSyxLQUFMLENBQVcsYUFBYSxHQUFiLEdBQW1CLE1BQU0sQ0FBcEMsQ0FBWjtBQUNBLFNBQU0sT0FBTyxLQUFLLEtBQUwsQ0FBVyxhQUFhLElBQWIsR0FBb0IsTUFBTSxDQUFyQyxDQUFiOztBQUVBLFVBQUssaUJBQUwsQ0FBdUIsTUFBdkIsQ0FBOEIsR0FBOUIsRUFBbUMsSUFBbkM7QUFDRCxJQVZZO0FBV2IsUUFYYSxpQkFXUCxLQVhPLEVBV0EsT0FYQSxFQVdTLFNBWFQsRUFXbUI7QUFDOUIsU0FBTSxlQUFlLFFBQVEscUJBQVIsRUFBckI7QUFDQSxTQUFHLFlBQUgsRUFBZ0I7QUFDZCxXQUFNLE9BQU8sUUFBUSxPQUFSLEVBQWI7QUFDQSxXQUFNLG9CQUFvQixVQUFVLElBQVYsQ0FBZSxZQUFmLENBQTRCLHFCQUE1QixFQUExQjtBQUNBLFdBQU0sZ0JBQWdCLE1BQU0sUUFBTixDQUFlLFlBQWYsQ0FBNEIsYUFBYSxDQUFiLEdBQWlCLGtCQUFrQixJQUFuQyxHQUEyQyxLQUFLLGlCQUFMLENBQXVCLEtBQXZCLENBQTZCLEtBQTdCLEdBQXFDLEMsb0JBQTVHLENBQXRCO0FBQ0EsV0FBTSxPQUFPLE1BQU0sUUFBTixDQUFlLFNBQWYsQ0FBeUIsYUFBYSxDQUFiLEdBQWlCLFVBQVUsSUFBVixDQUFlLFlBQWYsQ0FBNEIsU0FBN0MsR0FBeUQsa0JBQWtCLEdBQXBHLENBQWI7QUFDQSxZQUFLLGlCQUFMLENBQXVCLFFBQXZCLENBQWdDLElBQWhDLEVBQXNDLGNBQWMsS0FBZCxDQUFvQixFQUExRDtBQUNEO0FBQ0Y7QUFwQlksRUFBZjs7QUF1QkEsVUFBUyxPQUFULENBQWlCLE9BQWpCLEVBQTBCLE9BQTFCLEVBQW1DO0FBQ2pDLFVBQU87QUFDTCx3QkFBbUIsUUFBUSxVQUFSO0FBRGQsSUFBUDtBQUdEOztLQUVLLEs7OztBQUVKLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwRkFDWCxLQURXOztBQUdqQixXQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLGNBQXBCOztBQUVBLFNBQU0sZ0JBQWdCLENBQXRCOztBQUVBLFNBQU0sUUFBUSxFQUFkO0FBQ0EsU0FBTSxTQUFTLEVBQWY7QUFDQSxXQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLE9BQXBCLENBQTRCLGdCQUFRO0FBQ2xDLGFBQUssbUJBQUwsQ0FBeUIsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0MsTUFBdEM7QUFDRCxNQUZEOztBQUlBLFdBQUssS0FBTCxHQUFhO0FBQ1gsY0FBTyxLQURJO0FBRVgsZUFBUSxNQUZHO0FBR1gsZUFBUSxNQUFLLEtBQUwsQ0FBVyxNQUhSO0FBSVgsaUJBQVU7QUFKQyxNQUFiOztBQU9BLFdBQUssYUFBTCxHQUFxQixJQUFyQjtBQXBCaUI7QUFxQmxCOzs7OzhCQUVRLGMsRUFBZ0IsVSxFQUFXO0FBQUE7O0FBQ2xDLFdBQU0sZ0JBQWdCLGVBQWUsS0FBZixDQUFxQixNQUEzQztBQUNBLFdBQU0sYUFBYSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLGFBQXBCLENBQWtDLGNBQWxDLENBQW5CO0FBQ0EsV0FBTSxpQkFBaUIsU0FBakIsY0FBaUIsQ0FBQyxTQUFELEVBQWU7QUFDcEMsd0JBQWUsUUFBZixHQUEwQixJQUExQjtBQUNBLGFBQU0sZUFBZSxnQkFBZ0IsVUFBaEIsR0FBNkIsVUFBVSxPQUE1RDtBQUNBLGFBQUcsZUFBZSxFQUFsQixFQUFxQjtBQUNuQixlQUFJLFlBQVksZUFBZSxLQUFmLENBQXFCLEdBQXJCLElBQTRCLGVBQWUsZUFBZSxLQUFmLENBQXFCLE1BQWhFLENBQWhCO0FBQ0EsZUFBRyxhQUFhLFVBQWhCLEVBQTJCO0FBQ3pCLHlCQUFZLFVBQVo7QUFDRDs7QUFFRCwwQkFBZSxnQkFBZixHQUFrQyx1QkFBYSxPQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLFNBQTlCLENBQWIsRUFBdUQsZUFBZSxlQUFmLENBQStCLFVBQS9CLEVBQXZELENBQWxDO0FBQ0EsMEJBQWUsUUFBZixDQUF3QjtBQUN0QixxQkFBUSxPQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLGdCQUFwQixDQUFxQyxlQUFlLGdCQUFwRCxDQURjO0FBRXRCLGtCQUFLLE9BQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBOEIsZUFBZSxnQkFBZixDQUFnQyxZQUFoQyxFQUE5QixDQUZpQjtBQUd0Qiw4QkFBaUIsZUFBZSxnQkFBZixDQUFnQyxZQUFoQyxHQUErQyxjQUEvQztBQUhLLFlBQXhCO0FBS0Q7QUFDRixRQWhCRDs7QUFrQkEsV0FBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBQyxVQUFELEVBQWdCO0FBQ3BDLGdCQUFLLElBQUwsQ0FBVSxZQUFWLENBQXVCLG1CQUF2QixDQUEyQyxXQUEzQyxFQUF3RCxjQUF4RDtBQUNBLGdCQUFLLElBQUwsQ0FBVSxZQUFWLENBQXVCLG1CQUF2QixDQUEyQyxTQUEzQyxFQUFzRCxhQUF0RDtBQUNBLGdCQUFLLElBQUwsQ0FBVSxZQUFWLENBQXVCLG1CQUF2QixDQUEyQyxZQUEzQyxFQUF5RCxhQUF6RDtBQUNBLHdCQUFlLFdBQWYsQ0FBMkIsVUFBM0I7QUFDRCxRQUxEOztBQU9BLFlBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsZ0JBQXZCLENBQXdDLFdBQXhDLEVBQXFELGNBQXJEO0FBQ0EsWUFBSyxJQUFMLENBQVUsWUFBVixDQUF1QixnQkFBdkIsQ0FBd0MsU0FBeEMsRUFBbUQsYUFBbkQ7QUFDQSxZQUFLLElBQUwsQ0FBVSxZQUFWLENBQXVCLGdCQUF2QixDQUF3QyxZQUF4QyxFQUFzRCxhQUF0RDtBQUNEOzs7Z0NBRVUsYyxFQUFnQixVLEVBQVc7QUFBQTs7QUFDcEMsV0FBTSxnQkFBZ0IsZUFBZSxLQUFmLENBQXFCLE1BQTNDO0FBQ0EsV0FBTSxVQUFVLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsVUFBcEIsQ0FBK0IsY0FBL0IsQ0FBaEI7QUFDQSxXQUFNLGlCQUFpQixTQUFqQixjQUFpQixDQUFDLFNBQUQsRUFBZTtBQUNwQyx3QkFBZSxRQUFmLEdBQTBCLElBQTFCO0FBQ0EsYUFBTSxlQUFlLGdCQUFnQixVQUFVLE9BQTFCLEdBQW9DLFVBQXpEO0FBQ0EsYUFBRyxlQUFlLEVBQWxCLEVBQXFCO0FBQ25CLGVBQUksZUFBZSxlQUFlLEtBQWYsQ0FBcUIsR0FBckIsR0FBMkIsWUFBOUM7QUFDQSxlQUFHLGdCQUFnQixPQUFuQixFQUEyQjtBQUN6Qiw0QkFBZSxPQUFmO0FBQ0Q7O0FBRUQsMEJBQWUsZ0JBQWYsR0FBa0MsdUJBQWEsZUFBZSxlQUFmLENBQStCLFlBQS9CLEVBQWIsRUFBNEQsT0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixTQUFwQixDQUE4QixZQUE5QixDQUE1RCxDQUFsQztBQUNBLDBCQUFlLFFBQWYsQ0FBd0I7QUFDdEIscUJBQVEsT0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixnQkFBcEIsQ0FBcUMsZUFBZSxnQkFBcEQsQ0FEYztBQUV0Qiw4QkFBaUIsZUFBZSxnQkFBZixDQUFnQyxVQUFoQyxHQUE2QyxjQUE3QyxFQUZLO0FBR3RCLGlDQUFvQixlQUFlO0FBSGIsWUFBeEI7QUFLRDtBQUNGLFFBaEJEOztBQWtCQSxXQUFNLGdCQUFnQixTQUFoQixhQUFnQixDQUFDLFVBQUQsRUFBZ0I7QUFDcEMsZ0JBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsbUJBQXZCLENBQTJDLFdBQTNDLEVBQXdELGNBQXhEO0FBQ0EsZ0JBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsbUJBQXZCLENBQTJDLFNBQTNDLEVBQXNELGFBQXREO0FBQ0EsZ0JBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsbUJBQXZCLENBQTJDLFlBQTNDLEVBQXlELGFBQXpEO0FBQ0Esd0JBQWUsV0FBZixDQUEyQixVQUEzQjtBQUNELFFBTEQ7O0FBT0EsWUFBSyxJQUFMLENBQVUsWUFBVixDQUF1QixnQkFBdkIsQ0FBd0MsV0FBeEMsRUFBcUQsY0FBckQ7QUFDQSxZQUFLLElBQUwsQ0FBVSxZQUFWLENBQXVCLGdCQUF2QixDQUF3QyxTQUF4QyxFQUFtRCxhQUFuRDtBQUNBLFlBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsZ0JBQXZCLENBQXdDLFlBQXhDLEVBQXNELGFBQXREO0FBQ0Q7Ozt5Q0FFbUIsSSxFQUFNLEssRUFBTyxNLEVBQU87QUFDdEMsV0FBTSxXQUFXLE1BQU0sTUFBTixHQUFlLEtBQUssS0FBTCxDQUFXLGFBQTFCLEtBQTRDLENBQTdEO0FBQ0EsV0FBTSxZQUFZLENBQUMsTUFBTSxNQUFOLEdBQWUsQ0FBaEIsSUFBcUIsS0FBSyxLQUFMLENBQVcsYUFBaEMsS0FBa0QsQ0FBcEU7O0FBRUEsY0FBTyxJQUFQLENBQ0U7QUFDRSxjQUFLLEtBQUssRUFEWjtBQUVFLGdCQUFPLEtBQUssS0FBTCxDQUFXLFNBRnBCO0FBR0UsbUJBQVUsUUFIWjtBQUlFLG9CQUFXLFNBSmI7QUFLRSxnQkFBTyxLQUFLLEtBTGQ7QUFNRSxtQkFBVSxLQUFLLEtBQUwsQ0FBVztBQU52QixTQURGOztBQVdBLGFBQU0sSUFBTixDQUNFO0FBQ0UsbUJBQVUsUUFEWjtBQUVFLGNBQUssS0FBSyxFQUZaO0FBR0UsYUFBSSxLQUFLLEVBSFg7QUFJRSxnQkFBTyxLQUFLLEtBQUwsQ0FBVyxTQUpwQjtBQUtFLG9CQUFXLEtBQUssS0FBTCxDQUFXLFNBTHhCO0FBTUUsbUJBQVUsS0FBSyxLQUFMLENBQVcsUUFOdkI7QUFPRSxlQUFNLE1BQU0sTUFBTixHQUFlLENBQWYsS0FBcUIsQ0FQN0I7QUFRRSxtQkFBVSxLQUFLLEtBQUwsQ0FBVyxRQVJ2QjtBQVNFLGVBQU0sS0FBSyxJQVRiO0FBVUUsZ0JBQU87QUFWVCxTQURGO0FBY0Q7OztpQ0FFVyxPLEVBQVE7QUFDbEIsV0FBSSxVQUFVLEtBQUssS0FBTCxDQUFXLE1BQXpCO0FBQ0EsV0FBSSxTQUFTLEVBQWI7QUFDQSxlQUFRLE9BQVIsQ0FBZ0IsY0FBTTtBQUNwQixhQUFHLEdBQUcsRUFBSCxJQUFTLE9BQVosRUFBb0I7QUFDbEIsa0JBQU8sSUFBUCxDQUFZLEVBQVo7QUFDRDtBQUNGLFFBSkQ7QUFLQSxZQUFLLFFBQUwsQ0FBYyxFQUFDLFFBQVEsTUFBVCxFQUFkO0FBQ0Q7OzsrQkFFUyxNLEVBQU87QUFBQTs7QUFDZixjQUFPLElBQUksT0FBSixDQUFZLG1CQUFXO0FBQzVCLGFBQUksVUFBVSxPQUFLLEtBQUwsQ0FBVyxNQUF6QjtBQUNBLGFBQUksV0FBVyxFQUFmO0FBQ0EsZ0JBQU8sT0FBUCxDQUFlLGlCQUFTO0FBQ3RCLGVBQUcsQ0FBQyxNQUFNLEVBQVYsRUFBYTtBQUNYLG1CQUFNLEVBQU4sR0FBVyxPQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLGFBQXBCLEVBQVg7QUFDRDtBQUNELG9CQUFTLElBQVQsQ0FBYyxNQUFNLEVBQXBCO0FBQ0EsbUJBQVEsSUFBUixDQUFhLEtBQWI7QUFDRCxVQU5EO0FBT0EsZ0JBQUssUUFBTCxDQUFjLEVBQUMsUUFBUSxPQUFULEVBQWQsRUFBaUMsWUFBTTtBQUNyQyxlQUFJLFVBQVUsT0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixlQUFwQixDQUFvQyxNQUFwQyxDQUEyQywwQkFBa0I7QUFDekUsb0JBQU8sU0FBUyxPQUFULENBQWlCLGVBQWUsS0FBZixDQUFxQixFQUF0QyxNQUE4QyxDQUFDLENBQXREO0FBQ0QsWUFGYSxDQUFkO0FBR0EsbUJBQVEsT0FBUjtBQUNELFVBTEQ7QUFNRCxRQWhCTSxDQUFQO0FBaUJEOzs7K0JBRVMsTSxFQUFPO0FBQ2YsWUFBSyxRQUFMLENBQWMsRUFBQyxRQUFRLE1BQVQsRUFBZDtBQUNEOzs7b0NBRWMsQyxFQUFFO0FBQ2YsY0FBTztBQUNMLGNBQUssRUFBRSxPQUFGLEdBQVksRUFBRSxhQUFGLENBQWdCLFNBQTVCLEdBQXdDLEVBQUUsYUFBRixDQUFnQixTQUR4RDtBQUVMLGVBQU0sRUFBRSxPQUFGLEdBQVksRUFBRSxhQUFGLENBQWdCLFVBQTVCLEdBQXlDLEVBQUUsYUFBRixDQUFnQjtBQUYxRCxRQUFQO0FBSUQ7Ozt5Q0FFa0I7QUFDakIsWUFBSyxRQUFMLENBQWM7QUFDWixtQkFBVSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLGFBQXBCLEtBQXNDO0FBRHBDLFFBQWQ7QUFHRDs7OzhCQUVPO0FBQUE7O0FBQUEsV0FDRSxpQkFERixHQUN3QixLQUFLLEtBRDdCLENBQ0UsaUJBREY7O0FBRU4sY0FBTyxrQkFDTDtBQUFBO1NBQUEsRUFBSyxXQUFVLDJCQUFmLEVBQTJDLE9BQU8sRUFBQyxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQW5CLEVBQTBCLFdBQVcsTUFBckMsRUFBbEQ7U0FDRTtBQUFBO1dBQUEsRUFBSyxPQUFPLEVBQUMsVUFBVSxLQUFLLEtBQUwsQ0FBVyxRQUF0QixFQUFaO1dBQ0U7QUFBQTthQUFBLEVBQUssV0FBVSxhQUFmLEVBQTZCLE9BQU8sRUFBQyxRQUFRLG9CQUFVLE1BQW5CLEVBQXBDO2FBQWlFLEtBQUssS0FBTCxDQUFXO0FBQTVFLFlBREY7V0FFRTtBQUFBO2FBQUEsRUFBSyxLQUFJLGNBQVQsRUFBd0IsV0FBVSw4QkFBbEMsRUFBaUUsT0FBTyxFQUFDLFFBQVEsS0FBSyxLQUFMLENBQVcsTUFBWCxHQUFvQixvQkFBVSxNQUF2QyxFQUF4RTthQUNFO0FBQUE7ZUFBQSxFQUFLLE9BQU8sRUFBQyxRQUFRLEtBQUssS0FBTCxDQUFXLFVBQXBCLEVBQWdDLFdBQVcsUUFBM0MsRUFBcUQsVUFBUyxVQUE5RCxFQUFaO2VBQ0csS0FBSyxLQUFMLENBQVcsS0FEZDtlQUVHLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsR0FBbEIsQ0FBc0IsaUJBQVM7QUFDOUIsd0JBQ0U7QUFDRSx3QkFBSyxNQUFNLEVBRGI7QUFFRSx1QkFBSSxNQUFNLEVBRlo7QUFHRSwwQkFBTyxNQUFNLEtBSGY7QUFJRSw2QkFBVSxNQUFNLFFBSmxCO0FBS0UsNEJBQVMsTUFBTSxPQUxqQjtBQU1FLDJCQUFRLE1BQU0sTUFOaEI7QUFPRSw2QkFBVSxPQUFLLEtBQUwsQ0FBVyxRQVB2QjtBQVFFLDBCQUFPLE9BQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsS0FBcEIsQ0FBMEIsU0FBMUIsR0FBc0MsQ0FBdEMsR0FBMkMsZUFBSyxXQUFMLEdBQW1CLENBUnZFO0FBU0UseUJBQU0sTUFBTTtBQVRkLG1CQURGO0FBYUQsZ0JBZEEsQ0FGSDtlQWlCRTtBQWpCRjtBQURGO0FBRkY7QUFERixRQURLLENBQVA7QUE0QkQ7Ozs7R0F4TWlCLGdCQUFNLFM7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5TjFCLE9BQU0sWUFBTixHQUFxQjtBQUNuQixXQUFRO0FBRFcsRUFBckI7O21CQUllLCtCQUFnQixvQ0FBVyxFQUFFLG1CQUFtQixJQUFyQixFQUFYLENBQWhCLEVBQXlELDBCQUFXLE9BQVgsRUFBb0IsTUFBcEIsRUFBNEIsT0FBNUIsRUFBcUMsS0FBckMsQ0FBekQsQzs7Ozs7Ozs7Ozs7Ozs7QUN2UWY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVxQixJOzs7QUFFbkIsaUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHlGQUNYLEtBRFc7O0FBRWpCLFdBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsZ0JBQXBCOztBQUVBLFdBQUssS0FBTCxHQUFhO0FBQ1gsY0FBTyxFQURJO0FBRVgsZUFBUSxFQUZHO0FBR1gscUJBQWM7QUFISCxNQUFiO0FBS0EsV0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixRQUFwQixDQUE2QixVQUFDLEdBQUQsRUFBTSxJQUFOLEVBQWU7QUFDMUMsYUFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixJQUFqQixDQUNFO0FBQ0UsY0FBSyxLQUFLLE9BQUwsRUFEUDtBQUVFLGVBQU0sSUFGUjtBQUdFLG9CQUFXLE1BQUssS0FBTCxDQUFXO0FBSHhCLFNBREY7QUFPRCxNQVJEOztBQVVBLFdBQUssSUFBTCxHQUFZLE1BQUssS0FBTCxDQUFXLElBQVgsSUFBbUIsRUFBL0I7QUFuQmlCO0FBb0JsQjs7OztvQ0FFYyxDLEVBQUU7QUFDZixXQUFNLGdCQUFnQixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLElBQWpCLENBQXNCLFlBQTVDO0FBQ0EsV0FBTSxhQUFhLGNBQWMscUJBQWQsRUFBbkI7QUFDQSxjQUFPLEVBQUUsT0FBRixHQUFZLFdBQVcsR0FBdkIsR0FBNkIsY0FBYyxTQUFsRDtBQUNEOzs7NkJBRU8sQyxFQUFFO0FBQ1IsV0FBRyxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEtBQXBCLENBQTBCLFlBQTdCLEVBQTBDO0FBQ3hDLGFBQU0sT0FBTyxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFNBQXBCLENBQThCLEtBQUssY0FBTCxDQUFvQixDQUFwQixDQUE5QixDQUFiO0FBQ0EsY0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixLQUFwQixDQUEwQixZQUExQixDQUF1QztBQUNyQyxzQkFBVyxJQUQwQjtBQUVyQyxpQkFBTSxJQUYrQjtBQUdyQyx1QkFBWSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLGFBQXBCLENBQWtDLEtBQUssS0FBTCxDQUFXLEVBQTdDLEVBQWlELElBQWpELENBSHlCO0FBSXJDLGtCQUFPO0FBSjhCLFVBQXZDO0FBTUQ7QUFDRjs7O21DQUVhLEMsRUFBRTtBQUNkLFdBQUcsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixLQUFwQixDQUEwQixpQkFBN0IsRUFBK0M7QUFDN0MsY0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixLQUFwQixDQUEwQixpQkFBMUIsQ0FBNEM7QUFDMUMsa0JBQU8sQ0FEbUM7QUFFMUMsc0JBQVc7QUFGK0IsVUFBNUM7QUFJRDtBQUNGOzs7b0NBRWE7QUFDWixZQUFLLFFBQUwsQ0FBYyxFQUFDLGNBQWMsSUFBZixFQUFkO0FBQ0Q7Ozt5Q0FFa0I7QUFDakIsWUFBSyxRQUFMLENBQWMsRUFBQyxjQUFjLEtBQWYsRUFBZDtBQUNEOzs7OEJBRU87QUFBQTs7QUFDTixjQUNFO0FBQUE7U0FBQSxFQUFLLFNBQVM7QUFBQSxvQkFBSyxPQUFLLE9BQUwsQ0FBYSxDQUFiLENBQUw7QUFBQSxZQUFkLEVBQW9DLGVBQWU7QUFBQSxvQkFBSyxPQUFLLGFBQUwsQ0FBbUIsQ0FBbkIsQ0FBTDtBQUFBLFlBQW5EO1NBQ0ksWUFBTTtBQUNOLGVBQUcsT0FBSyxLQUFMLENBQVcsUUFBZCxFQUF1QjtBQUNyQixvQkFDRTtBQUNFLG9CQUFLLFdBQVcsT0FBSyxLQUFMLENBQVcsRUFEN0I7QUFFRSwwQkFBVyxPQUFLLEtBQUwsQ0FBVyxTQUZ4QjtBQUdFLHlCQUFVLE9BQUssS0FBTCxDQUFXO0FBSHZCLGVBREY7QUFPRDtBQUNGLFVBVkEsRUFESDtTQVlFO0FBQUE7V0FBQSxFQUFLLFdBQVcsMEJBQVcsWUFBWCxFQUF5QixFQUFDLFFBQVEsS0FBSyxLQUFMLENBQVcsSUFBcEIsRUFBMEIsT0FBTyxDQUFDLEtBQUssS0FBTCxDQUFXLElBQTdDLEVBQXpCLEVBQTZFLEVBQUMsUUFBUSxLQUFLLEtBQUwsQ0FBVyxZQUFwQixFQUE3RSxDQUFoQixFQUFpSSxPQUFPLEVBQUMsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEdBQW1CLElBQTNCLEVBQXhJO1dBQ0csS0FBSyxLQUFMLENBQVc7QUFEZDtBQVpGLFFBREY7QUFrQkQ7Ozs7R0E5RStCLGdCQUFNLFM7O21CQUFuQixJOzs7QUFpRnJCLE1BQUssV0FBTCxHQUFtQixDQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFcUIsSTs7O0FBRW5CLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5RkFDWCxLQURXOztBQUdqQixXQUFLLEtBQUwsR0FBYTtBQUNYLGdCQUFTO0FBREUsTUFBYjs7QUFJQSxTQUFNLFdBQVc7QUFDZixlQUFRLE1BQUssS0FBTCxDQUFXLFNBQVgsR0FBdUI7QUFEaEIsTUFBakI7QUFHQSxvQkFBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQ3pCLGFBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsSUFBbkIsQ0FDRTtBQUFBO1NBQUE7QUFDRSxnQkFBSyxHQURQO0FBRUUsc0JBQVcsMEJBQVcsV0FBWCxFQUF3QixRQUFRLE1BQU0sRUFBZCxDQUF4QixDQUZiO0FBR0Usa0JBQU87QUFIVDtTQUFBO0FBQUEsUUFERjtBQU9ELE1BUkQsRUFRRyxFQVJIO0FBVmlCO0FBbUJsQjs7Ozs4QkFFTztBQUNOLGNBQ0U7QUFBQTtTQUFBLEVBQUssV0FBVSxZQUFmO1NBQTZCLEtBQUssS0FBTCxDQUFXO0FBQXhDLFFBREY7QUFHRDs7OztHQTNCK0IsZ0JBQU0sUzs7Ozs7Ozs7bUJBQW5CLEk7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVxQixLOzs7QUFFbkIsa0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDBGQUNYLEtBRFc7O0FBRWpCLFdBQUssS0FBTCxHQUFhO0FBQ1gsY0FBTztBQURJLE1BQWI7QUFHQSxXQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFFBQXBCLENBQTZCLFVBQUMsR0FBRCxFQUFNLElBQU4sRUFBZTtBQUMxQyxXQUFNLFFBQVE7O0FBRVosaUJBQVEsQ0FBQyxNQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXVCLENBQXhCLElBQTZCO0FBRnpCLFFBQWQ7QUFJQSxhQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLElBQWpCLENBQ0U7QUFBQTtTQUFBLEVBQUssS0FBSyxLQUFLLE9BQUwsRUFBVixFQUEwQixPQUFPLEtBQWpDO1NBQXlDLEtBQUssY0FBTDtBQUF6QyxRQURGO0FBR0QsTUFSRDtBQUxpQjtBQWNsQjs7Ozs4QkFFTztBQUNOLGNBQ0U7QUFBQTtTQUFBLEVBQUssV0FBVSxhQUFmLEVBQTZCLE9BQU8sRUFBQyxPQUFPLE1BQU0sS0FBTixHQUFjLElBQXRCLEVBQXBDO1NBQWtFLEtBQUssS0FBTCxDQUFXO0FBQTdFLFFBREY7QUFHRDs7OztHQXRCZ0MsZ0JBQU0sUzs7Ozs7OzttQkFBcEIsSztBQThCckIsT0FBTSxLQUFOLEdBQWMsRUFBZCxDOzs7Ozs7Ozs7Ozs7OztBQ2pDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVxQixTOzs7QUFFbkIsc0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDhGQUNYLEtBRFc7O0FBR2pCLFdBQUssS0FBTCxHQUFhO0FBQ1gsaUJBQVUsTUFBSyxLQUFMLENBQVcsUUFEVjtBQUVYLGtCQUFXLE1BQUssS0FBTCxDQUFXLFNBRlg7QUFHWCxlQUFRO0FBSEcsTUFBYjtBQUhpQjtBQVFsQjs7OzswQ0FFbUI7O0FBRWxCLFdBQU0sa0JBQWtCLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsbUJBQTVDO0FBQ0EsV0FBRyxnQkFBZ0IsTUFBbkIsRUFBMEI7QUFDeEIseUJBQWdCLGdCQUFnQixNQUFoQixHQUF5QixDQUF6QyxFQUE0QyxRQUE1QyxDQUFxRCxFQUFDLFFBQVEsS0FBVCxFQUFyRDtBQUNEOztBQUVELFlBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IscUJBQXBCLENBQTBDLElBQTFDO0FBQ0Q7Ozs4QkFFTztBQUNOLGNBQ0U7QUFBQTtTQUFBO0FBQ0Usa0JBQU8sRUFBQyxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQW5CLEVBQTBCLFlBQVksS0FBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixnQkFBTSxLQUFOLEdBQWMsSUFBcEMsR0FBMkMsQ0FBakYsRUFEVDtBQUVFLHNCQUFXLDBCQUFXLEVBQUMsU0FBUyxJQUFWLEVBQWdCLFlBQVksS0FBSyxLQUFMLENBQVcsUUFBdkMsRUFBaUQsYUFBYSxLQUFLLEtBQUwsQ0FBVyxTQUF6RSxFQUFvRixRQUFRLEtBQUssS0FBTCxDQUFXLE1BQXZHLEVBQVg7QUFGYjtTQUlHLEtBQUssS0FBTCxDQUFXO0FBSmQsUUFERjtBQVFEOzs7O0dBL0JvQyxnQkFBTSxTOzttQkFBeEIsUzs7O0FBa0NyQixXQUFVLE1BQVYsR0FBbUIsRUFBbkIsQzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCxpQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakI7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrRUFBOEU7O0FBRTlFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7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ZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBmYzZiZGY4OGVkMGY0YmJlMWQyMlxuICoqLyIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtUaW1lbGluZSwgVGltZSwgVGltZVNwYW59IGZyb20gJy4uL2luZGV4LmVzNic7XG5pbXBvcnQge0NvbnRleHRNZW51fSBmcm9tICcuLi8uLi9yZWFjdC1jb250ZXh0LW1lbnUnO1xuXG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplKCl7XG4gIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbiAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgcmV0dXJuIHt3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0fTtcbn1cblxuZnVuY3Rpb24gY2FsY0hlaWdodCh0aW1lbGluZUVsZW1lbnQpe1xuICBjb25zdCB3cmFwcGVyQm91bmRzID0gdGltZWxpbmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB3aW5kb3dTaXplID0gZ2V0V2luZG93U2l6ZSgpO1xuICByZXR1cm4gd2luZG93U2l6ZS5oZWlnaHQgLSB3cmFwcGVyQm91bmRzLnRvcDtcbn1cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcblxuICBjb25zdCBldmVudE1lbnUgPSBSZWFjdERPTS5yZW5kZXIoXG4gICAgPENvbnRleHRNZW51XG4gICAgICBpdGVtcz17W1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogY29udGV4dCA9PiAnZmxvYXQnLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5jb21wb25lbnQuYWN0aW9ucy5mbG9hdCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvdzogY29udGV4dCA9PiBjb250ZXh0LmNvbXBvbmVudC5hY3Rpb25zLmlzRml4ZWQoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogY29udGV4dCA9PiAncmVzaXplJyxcbiAgICAgICAgICBvbkNsaWNrOiBjb250ZXh0ID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuY29tcG9uZW50LmFjdGlvbnMucmVzaXplKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93OiBjb250ZXh0ID0+IGNvbnRleHQuY29tcG9uZW50LmFjdGlvbnMuaXNGaXhlZCgpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBjb250ZXh0ID0+ICdjYW5jZWwnLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5jb21wb25lbnQuYWN0aW9ucy5jYW5jZWwoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3c6IGNvbnRleHQgPT4gIWNvbnRleHQuY29tcG9uZW50LmFjdGlvbnMuaXNGaXhlZCgpLFxuICAgICAgICAgIG9uQ2xpY2s6IGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgaWYoY29udGV4dC5jb21wb25lbnQuYWN0aW9ucy5pc0NhbmNlbGFibGUoKSl7XG4gICAgICAgICAgICAgIGNvbnRleHQuY29tcG9uZW50LmFjdGlvbnMuY2FuY2VsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGVydCgnWW91IGNhblxcJ3QgY2FuY2VsIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJ2ZpeCcsXG4gICAgICAgICAgb25DbGljazogY29udGV4dCA9PiB7XG4gICAgICAgICAgICBpZihjb250ZXh0LmNvbXBvbmVudC5hY3Rpb25zLmlzRml4YWJsZSgpKXtcbiAgICAgICAgICAgICAgY29udGV4dC5jb21wb25lbnQuYWN0aW9ucy5maXgoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFsZXJ0KCdZb3UgY2FuXFwndCBmaXghJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93OiBjb250ZXh0ID0+ICFjb250ZXh0LmNvbXBvbmVudC5hY3Rpb25zLmlzRml4ZWQoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogY29udGV4dCA9PiAnLSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGNvbnRleHQgPT4gJ3JlbW92ZScsXG4gICAgICAgICAgb25DbGljazogY29udGV4dCA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbXBvbmVudC5hY3Rpb25zLnJlbW92ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZW5hYmxlOiBjb250ZXh0ID0+IGNvbnRleHQuY29tcG9uZW50LmFjdGlvbnMuaXNGaXhlZCgpXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICB6SW5kZXg9ezEwMDB9XG4gICAgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxuICApO1xuXG4gIGNvbnN0IGxpbmVEYXRhID0gW1xuICAgIHtsYWJlbDonbGFiZWwxJywgaWQ6J19fMSd9LFxuICAgIHtsYWJlbDonbGFiZWwyJywgaWQ6J19fMid9LFxuICAgIHtsYWJlbDonbGFiZWwzJywgaWQ6J19fMyd9LFxuICAgIHtsYWJlbDonbGFiZWw0JywgaWQ6J19fNCd9LFxuICAgIHtsYWJlbDonbGFiZWw1JywgaWQ6J19fNSd9LFxuICAgIHtsYWJlbDonbGFiZWw2JywgaWQ6J19fNid9LFxuICAgIHtsYWJlbDonbGFiZWw3JywgaWQ6J19fNyd9LFxuICAgIHtsYWJlbDonbGFiZWw4JywgaWQ6J19fOCd9LFxuICAgIHtsYWJlbDonbGFiZWw5JywgaWQ6J19fOSd9LFxuICAgIHtsYWJlbDonbGFiZWwxMCcsIGlkOidfXzEwJ30sXG4gICAge2xhYmVsOidsYWJlbDExJywgaWQ6J19fMTEnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTInLCBpZDonX18xMid9LFxuICAgIHtsYWJlbDonbGFiZWwxMycsIGlkOidfXzEzJ30sXG4gICAge2xhYmVsOidsYWJlbDE0JywgaWQ6J19fMTQnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTUnLCBpZDonX18xNSd9LFxuICAgIHtsYWJlbDonbGFiZWwxNicsIGlkOidfXzE2J30sXG4gICAge2xhYmVsOidsYWJlbDE3JywgaWQ6J19fMTcnfSxcbiAgICB7bGFiZWw6J2xhYmVsMTgnLCBpZDonX18xOCd9XG4gIF07XG5cbiAgY29uc3QgdGltZVNwYW4gPSBUaW1lU3Bhbi5jcmVhdGUoWzEwLCAwXSwgWzI1LCAwXSk7XG4gIGNvbnN0IHRpbWVsaW5lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lbGluZScpO1xuICBjb25zdCB0aW1lbGluZSA9IFJlYWN0RE9NLnJlbmRlcihcbiAgICA8VGltZWxpbmVcbiAgICAgIGxpbmVEYXRhPXtsaW5lRGF0YX1cbiAgICAgIHRpbWVTcGFuPXt0aW1lU3Bhbn1cbiAgICAgIGxpbmVXaWR0aD17NjJ9XG4gICAgICBtaW5IZWlnaHQ9ezE3fVxuICAgICAgbWluSW50ZXJ2YWw9ezV9XG4gICAgICBydWxlckludGVydmFsPXs0fVxuICAgICAgaGVpZ2h0PXtjYWxjSGVpZ2h0KHRpbWVsaW5lRWxlbWVudCl9XG4gICAgICBsaW5lRGlkQ2xpY2s9e2RhdGEgPT4ge1xuICAgICAgICB0aW1lbGluZS5hY3Rpb25zLmFkZEV2ZW50cyhbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGluZUlkOiBkYXRhLmNvbXBvbmVudC5wcm9wcy5pZCxcbiAgICAgICAgICAgIHRpbWVTcGFuOiBuZXcgVGltZVNwYW4oZGF0YS50aW1lLCBkYXRhLnRpbWUuYWRkTWluKDEyMCkpLFxuICAgICAgICAgICAgY29sb3I6ICcjRkZCNkI2JyxcbiAgICAgICAgICAgIGRpc3BsYXk6IFtcbiAgICAgICAgICAgICAge2tleTogJ3N0YXJ0VGltZScsIHZhbHVlOiBkYXRhLnRpbWUuZ2V0RGlzcGxheVRpbWUoKX1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0pO1xuICAgICAgfX1cbiAgICAgIGxpbmVEaWRSaWdodENsaWNrPXtkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0JywgZGF0YSk7XG4gICAgICB9fVxuICAgICAgZXZlbnREaWRDbGljaz17ZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0JywgZGF0YSk7XG4gICAgICB9fVxuICAgICAgZXZlbnREaWRSaWdodENsaWNrPXtkYXRhID0+IHtcbiAgICAgICAgZGF0YS5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudE1lbnUuc2hvdyh7dG9wOiBkYXRhLmV2ZW50LmNsaWVudFksIGxlZnQ6IGRhdGEuZXZlbnQuY2xpZW50WH0sIGRhdGEpO1xuICAgICAgfX1cbiAgICAgIGV2ZW50V2lsbEZpeD17ZGF0YSA9PiB7XG4gICAgICAgIGRhdGEuc3RhdGUuZGlzcGxheSA9IGRhdGEuY29tcG9uZW50LnN0YXRlLmRpc3BsYXkubWFwKFxuICAgICAgICAgIHJvdyA9PiByb3cua2V5ID09ICdzdGFydFRpbWUnID8ge2tleTogJ3N0YXJ0VGltZScsIHZhbHVlOiBkYXRhLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmdldERpc3BsYXlUaW1lKCl9IDogcm93XG4gICAgICAgICk7XG4gICAgICB9fVxuICAgICAgZXZlbnREaWRGaXg9e2RhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIH19XG4gICAgLz4sXG4gICAgdGltZWxpbmVFbGVtZW50XG4gICk7XG5cblxuICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gICAgdGltZWxpbmUuYWN0aW9ucy5zZXRIZWlnaHQoY2FsY0hlaWdodCh0aW1lbGluZUVsZW1lbnQpKTtcbiAgfTtcblxuICB0aW1lbGluZS5hY3Rpb25zLmFkZEV2ZW50cyhbXG4gICAge1xuICAgICAgbGluZUlkOiAnX18xJyxcbiAgICAgIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAwXSwgWzEyLCAwXSksXG4gICAgICBjb2xvcjogJyNGRkI2QjYnLFxuICAgICAgZGlzcGxheTogW1xuICAgICAgICB7a2V5OiAnc3RhcnRUaW1lJywgdmFsdWU6ICcxMTowMCd9LFxuICAgICAgICB7a2V5OiAndHlwZScsIHZhbHVlOiAnZm9vYmFyJ30sXG4gICAgICAgIHtrZXk6ICdtZW1vJywgdmFsdWU6ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5J31cbiAgICAgIF1cbiAgICB9XG4gIF0pO1xuXG4gIHRpbWVsaW5lLmFjdGlvbnMuYWRkRXZlbnRzKFtcbiAgICB7aWQ6ICcxMjMxJywgbGluZUlkOiAnX18xJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQxJywgbGluZUlkOiAnX18xJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTEnLCBsaW5lSWQ6ICdfXzEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI2MScsIGxpbmVJZDogJ19fMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE4LCAzMF0sIFsxOSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI3MScsIGxpbmVJZDogJ19fMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE5LCAzMF0sIFsyMCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI4MScsIGxpbmVJZDogJ19fMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIwLCAzMF0sIFsyMSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI5MScsIGxpbmVJZDogJ19fMScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIyLCAzMF0sIFsyMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjMnLCBsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNCcsIGxpbmVJZDogJ19fMicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUnLCBsaW5lSWQ6ICdfXzInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjMzJywgbGluZUlkOiAnX18zJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQzJywgbGluZUlkOiAnX18zJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTMnLCBsaW5lSWQ6ICdfXzMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjM0JywgbGluZUlkOiAnX180JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQ0JywgbGluZUlkOiAnX180JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTQnLCBsaW5lSWQ6ICdfXzQnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjM1NScsIGxpbmVJZDogJ19fNScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0NTUnLCBsaW5lSWQ6ICdfXzUnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1NTUnLCBsaW5lSWQ6ICdfXzUnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjI2JywgbGluZUlkOiAnX182JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTEsIDE1XSwgWzEyLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjM2JywgbGluZUlkOiAnX182JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQ2JywgbGluZUlkOiAnX182JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTYnLCBsaW5lSWQ6ICdfXzYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI2NicsIGxpbmVJZDogJ19fNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE4LCAzMF0sIFsxOSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI3NicsIGxpbmVJZDogJ19fNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE5LCAzMF0sIFsyMCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI4NicsIGxpbmVJZDogJ19fNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIwLCAzMF0sIFsyMSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI5NicsIGxpbmVJZDogJ19fNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIyLCAzMF0sIFsyMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjM3NycsIGxpbmVJZDogJ19fNycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0NzcnLCBsaW5lSWQ6ICdfXzcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1NzcnLCBsaW5lSWQ6ICdfXzcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjI4JywgbGluZUlkOiAnX184JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTEsIDE1XSwgWzEyLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjM4JywgbGluZUlkOiAnX184JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQ4JywgbGluZUlkOiAnX184JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTgnLCBsaW5lSWQ6ICdfXzgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI2OCcsIGxpbmVJZDogJ19fOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE4LCAzMF0sIFsxOSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI3OCcsIGxpbmVJZDogJ19fOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE5LCAzMF0sIFsyMCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI4OCcsIGxpbmVJZDogJ19fOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIwLCAzMF0sIFsyMSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI5OCcsIGxpbmVJZDogJ19fOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIyLCAzMF0sIFsyMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjM5JywgbGluZUlkOiAnX185JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQ5JywgbGluZUlkOiAnX185JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTknLCBsaW5lSWQ6ICdfXzknLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjIxMCcsIGxpbmVJZDogJ19fMTAnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMSwgMTVdLCBbMTIsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyMzEwJywgbGluZUlkOiAnX18xMCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MTAnLCBsaW5lSWQ6ICdfXzEwJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTEwJywgbGluZUlkOiAnX18xMCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE3LCAwXSwgWzE4LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjYxMCcsIGxpbmVJZDogJ19fMTAnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzEwJywgbGluZUlkOiAnX18xMCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE5LCAzMF0sIFsyMCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI4MTAnLCBsaW5lSWQ6ICdfXzEwJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMjAsIDMwXSwgWzIxLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjkxMCcsIGxpbmVJZDogJ19fMTAnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzMTEnLCBsaW5lSWQ6ICdfXzExJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQxMScsIGxpbmVJZDogJ19fMTEnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1MTEnLCBsaW5lSWQ6ICdfXzExJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIzMTInLCBsaW5lSWQ6ICdfXzEyJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQxMicsIGxpbmVJZDogJ19fMTInLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1MTInLCBsaW5lSWQ6ICdfXzEyJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyMTMnLCBsaW5lSWQ6ICdfXzEzJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTEsIDE1XSwgWzEyLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjMxMycsIGxpbmVJZDogJ19fMTMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDEzJywgbGluZUlkOiAnX18xMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxMycsIGxpbmVJZDogJ19fMTMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI2MTMnLCBsaW5lSWQ6ICdfXzEzJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTgsIDMwXSwgWzE5LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjcxMycsIGxpbmVJZDogJ19fMTMnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODEzJywgbGluZUlkOiAnX18xMycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIwLCAzMF0sIFsyMSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI5MTMnLCBsaW5lSWQ6ICdfXzEzJywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMjIsIDMwXSwgWzIzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMzE0JywgbGluZUlkOiAnX18xNCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MTQnLCBsaW5lSWQ6ICdfXzE0JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTE0JywgbGluZUlkOiAnX18xNCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE3LCAwXSwgWzE4LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMzE1JywgbGluZUlkOiAnX18xNScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MTUnLCBsaW5lSWQ6ICdfXzE1JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTE1JywgbGluZUlkOiAnX18xNScsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE3LCAwXSwgWzE4LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcblxuICAgIHtpZDogJzEyMjE2JywgbGluZUlkOiAnX18xNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzExLCAxNV0sIFsxMiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTIzMTYnLCBsaW5lSWQ6ICdfXzE2JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTIsIDMwXSwgWzEzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjQxNicsIGxpbmVJZDogJ19fMTYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNCwgMF0sIFsxNiwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI1MTYnLCBsaW5lSWQ6ICdfXzE2JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTcsIDBdLCBbMTgsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNjE2JywgbGluZUlkOiAnX18xNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE4LCAzMF0sIFsxOSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI3MTYnLCBsaW5lSWQ6ICdfXzE2JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTksIDMwXSwgWzIwLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjgxNicsIGxpbmVJZDogJ19fMTYnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMCwgMzBdLCBbMjEsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyOTE2JywgbGluZUlkOiAnX18xNicsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIyLCAzMF0sIFsyMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG5cbiAgICB7aWQ6ICcxMjIxNycsIGxpbmVJZDogJ19fMTcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMSwgMTVdLCBbMTIsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyMzE3JywgbGluZUlkOiAnX18xNycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzEyLCAzMF0sIFsxMywgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI0MTcnLCBsaW5lSWQ6ICdfXzE3JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTQsIDBdLCBbMTYsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNTE3JywgbGluZUlkOiAnX18xNycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE3LCAwXSwgWzE4LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjYxNycsIGxpbmVJZDogJ19fMTcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOCwgMzBdLCBbMTksIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNzE3JywgbGluZUlkOiAnX18xNycsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE5LCAzMF0sIFsyMCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI4MTcnLCBsaW5lSWQ6ICdfXzE3JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMjAsIDMwXSwgWzIxLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjkxNycsIGxpbmVJZDogJ19fMTcnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsyMiwgMzBdLCBbMjMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuXG4gICAge2lkOiAnMTIyMTgnLCBsaW5lSWQ6ICdfXzE4JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTEsIDE1XSwgWzEyLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjMxOCcsIGxpbmVJZDogJ19fMTgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxMiwgMzBdLCBbMTMsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyNDE4JywgbGluZUlkOiAnX18xOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzE0LCAwXSwgWzE2LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjUxOCcsIGxpbmVJZDogJ19fMTgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxNywgMF0sIFsxOCwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI2MTgnLCBsaW5lSWQ6ICdfXzE4JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMTgsIDMwXSwgWzE5LCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgICB7aWQ6ICcxMjcxOCcsIGxpbmVJZDogJ19fMTgnLCB0aW1lU3BhbjogVGltZVNwYW4uY3JlYXRlKFsxOSwgMzBdLCBbMjAsIDMwXSksIGNvbG9yOiAnI0ZGRENCNid9LFxuICAgIHtpZDogJzEyODE4JywgbGluZUlkOiAnX18xOCcsIHRpbWVTcGFuOiBUaW1lU3Bhbi5jcmVhdGUoWzIwLCAzMF0sIFsyMSwgMzBdKSwgY29sb3I6ICcjRkZEQ0I2J30sXG4gICAge2lkOiAnMTI5MTgnLCBsaW5lSWQ6ICdfXzE4JywgdGltZVNwYW46IFRpbWVTcGFuLmNyZWF0ZShbMjIsIDMwXSwgWzIzLCAzMF0pLCBjb2xvcjogJyNGRkRDQjYnfSxcbiAgXSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGUvYXBwLmpzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZSc7XG5pbXBvcnQgVGltZSBmcm9tICcuL3NyYy9jbGFzc2VzL1RpbWUnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4vc3JjL2NsYXNzZXMvVGltZVNwYW4nO1xuXG5leHBvcnQge1RpbWVsaW5lLCBUaW1lLCBUaW1lU3Bhbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguZXM2XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBUaW1lbGluZUFjdGlvbnMgZnJvbSAnLi4vY2xhc3Nlcy9UaW1lbGluZUFjdGlvbnMnO1xuaW1wb3J0IEZyYW1lIGZyb20gJy4vRnJhbWUnO1xuaW1wb3J0IFJ1bGVyIGZyb20gJy4vUnVsZXInO1xuaW1wb3J0IExpbmUgZnJvbSAnLi9MaW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5hY3Rpb25zID0gbmV3IFRpbWVsaW5lQWN0aW9ucyh0aGlzKTtcblxuICAgIC8vTWluVmlld+OBr+S4gOaZgumWk+S4i+OBq+S9meWIhuOBjOeUn+aIkOOBleOCjOOCi+OBruOBpzYw5YiG44OX44Op44K5XG4gICAgdGhpcy50aW1lU3BhbiA9IHRoaXMucHJvcHMudGltZVNwYW4uYWRkTWluKDYwKTtcblxuICAgIC8vbWluVmlld+OBjOOBhOOBj+OBpOOBguOCi+OBi+OCq+OCpuODs+ODiOOAgm1pblZpZXfjga8xNeWIhuOBiuOBjeOAguOBneOCjOOCkuWFg+OBq+mrmOOBleOCkuioiOeul+OAgmJvcmRlcuWIhjFweOi2s+OBmVxuICAgIHRoaXMubGluZUhlaWdodCA9ICh0aGlzLnRpbWVTcGFuLmdldERpc3RhbmNlKCkgLyAxNSkgKiAodGhpcy5wcm9wcy5taW5IZWlnaHQgKyAxKTtcblxuICAgIC8vMeWIhuOBguOBn+OCiuOBrumrmOOBleOCkueul+WHulxuICAgIHRoaXMucGVyTWluSGVpZ2h0ID0gdGhpcy5saW5lSGVpZ2h0IC8gdGhpcy50aW1lU3Bhbi5nZXREaXN0YW5jZSgpO1xuXG4gICAgdGhpcy5saW5lV2lkdGggPSBwcm9wcy5saW5lV2lkdGg7XG5cbiAgICB0aGlzLmZyYW1lQ29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLmNyZWF0ZWRFdmVudElkID0gMDtcbiAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb25wb25lbnQgPSBudWxsO1xuICAgIHRoaXMubGluZUNvbXBvbmVudHMgPSBbXTtcbiAgICB0aGlzLmV2ZW50Q29tcG9uZW50cyA9IFtdO1xuICAgIHRoaXMubGluZUxhYmVsQ29tcG9uZW50cyA9IFtdO1xuICB9XG5cbiAgY3JlYXRlRXZlbnRJZCgpe1xuICAgIHJldHVybiAnbmV3XycgKyAoKyt0aGlzLmNyZWF0ZWRFdmVudElkKTtcbiAgfVxuXG4gIGRyYWdnaW5nT3ZlcihsZWZ0KXtcbiAgICBjb25zdCBsaW5lQ29tcG9uZW50ID0gdGhpcy5maW5kTGluZUJ5TGVmdChsZWZ0KTtcbiAgICBpZihsaW5lQ29tcG9uZW50ICYmIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbnBvbmVudCAhPT0gbGluZUNvbXBvbmVudCl7XG4gICAgICBpZih0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb25wb25lbnQpe1xuICAgICAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb25wb25lbnQuY2xlYXJEcmFnZ2luZ092ZXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbnBvbmVudCA9IGxpbmVDb21wb25lbnQ7XG4gICAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb25wb25lbnQuZHJhZ2dpbmdPdmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVDb21wb25lbnQ7XG4gIH1cblxuICBjbGVhckRyYWdnaW5nT3Zlcigpe1xuICAgIGlmKHRoaXMuZHJhZ2dpbmdPdmVyTGluZUNvbnBvbmVudCl7XG4gICAgICB0aGlzLmRyYWdnaW5nT3ZlckxpbmVDb25wb25lbnQuY2xlYXJEcmFnZ2luZ092ZXIoKTtcbiAgICB9XG4gIH1cblxuICBnZXRUb3RhbFdpZHRoKCl7XG4gICAgcmV0dXJuIHRoaXMubGluZUNvbXBvbmVudHMucmVkdWNlKCh2YWwsIGxpbmUpID0+IHtcbiAgICAgIHJldHVybiB2YWwgKyAobGluZS5wcm9wcy5oYXNSdWxlciA/IHRoaXMubGluZVdpZHRoICsgUnVsZXIud2lkdGggOiB0aGlzLmxpbmVXaWR0aCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBhZGRFdmVudENvbXBvbmVudChldmVudCl7XG4gICAgdGhpcy5ldmVudENvbXBvbmVudHMucHVzaChldmVudCk7XG4gIH1cblxuICBmaW5kRXZlbnRCeUlkKGV2ZW50SWQpe1xuICAgIHJldHVybiB0aGlzLmV2ZW50Q29tcG9uZW50cy5maW5kKGV2ID0+IGV2LnByb3BzLmlkID09IGV2ZW50SWQpO1xuICB9XG5cbiAgZmluZExpbmVCeUxlZnQobGVmdCl7XG4gICAgdmFyIHdpZHRoID0gMDtcbiAgICByZXR1cm4gdGhpcy5saW5lQ29tcG9uZW50cy5maW5kKGxpbmUgPT4ge1xuICAgICAgd2lkdGggKz0gbGluZS5wcm9wcy5oYXNSdWxlciA/IHRoaXMucHJvcHMubGluZVdpZHRoICsgUnVsZXIud2lkdGggOiB0aGlzLnByb3BzLmxpbmVXaWR0aDtcbiAgICAgIGlmKGxlZnQgPCB3aWR0aCl7XG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGluZUxlZnQobGluZUlkKXtcbiAgICBsZXQgbGVmdCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGluZUNvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaW5lID0gdGhpcy5saW5lQ29tcG9uZW50c1tpXTtcbiAgICAgIGlmKGxpbmUucHJvcHMuaGFzUnVsZXIpe1xuICAgICAgICBsZWZ0ICs9IFJ1bGVyLndpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZihsaW5lLnByb3BzLmlkID09IGxpbmVJZCl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsZWZ0ICs9IHRoaXMucHJvcHMubGluZVdpZHRoO1xuICAgIH1cblxuICAgIGxlZnQgKz0gTGluZS5zaWRlUGFkZGluZztcblxuICAgIHJldHVybiBsZWZ0O1xuICB9XG5cbiAgYWRkTGluZUNvbXBvbmVudChsaW5lKXtcbiAgICB0aGlzLmxpbmVDb21wb25lbnRzLnB1c2gobGluZSk7XG4gIH1cblxuICBhZGRMaW5lTGFiZWxDb21wb25lbnQobGluZSl7XG4gICAgdGhpcy5saW5lTGFiZWxDb21wb25lbnRzLnB1c2gobGluZSk7XG4gIH1cblxuICBnZXRUaW1lU3Bhbih0b3AsIGhlaWdodCl7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gdGhpcy50b3BUb1RpbWUodG9wKTtcblxuICAgIGNvbnN0IGVuZFRpbWUgPSBzdGFydFRpbWUuYWRkTWluKGhlaWdodCAvIHRoaXMucGVyTWluSGVpZ2h0KTtcbiAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHN0YXJ0VGltZSwgZW5kVGltZSk7XG4gIH1cblxuICB0aW1lU3BhblRvSGVpZ2h0KHRpbWVTcGFuKXtcbiAgICByZXR1cm4gKHRpbWVTcGFuLmdldERpc3RhbmNlKCkgKiB0aGlzLnBlck1pbkhlaWdodCkgLSAxO1xuICB9XG5cbiAgdGltZVRvVG9wKHRpbWUpe1xuICAgIHJldHVybiB0aGlzLnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmdldERpc3RhbmNlKHRpbWUpICogdGhpcy5wZXJNaW5IZWlnaHQgLSAxO1xuICB9XG5cbiAgdG9wVG9UaW1lKHRvcCl7XG4gICAgaWYodG9wIDw9IDApe1xuICAgICAgcmV0dXJuIHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCk7XG4gICAgfVxuICAgIGxldCBtaW51dGUgPSB0b3AgLyB0aGlzLnBlck1pbkhlaWdodDtcbiAgICBjb25zdCByZXN0ID0gbWludXRlICUgdGhpcy5wcm9wcy5taW5JbnRlcnZhbDtcbiAgICBpZihyZXN0ICE9PSAwKXtcbiAgICAgIGlmKHJlc3QgPiB0aGlzLnByb3BzLm1pbkludGVydmFsIC8gMil7XG4gICAgICAgIG1pbnV0ZSArPSB0aGlzLnByb3BzLm1pbkludGVydmFsIC0gcmVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pbnV0ZSAtPSByZXN0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5hZGRNaW4obWludXRlKTtcbiAgfVxuXG4gIGZpbmRQcmV2RXZlbnQoZXZlbnRDb21wb25lbnQpe1xuICAgIHJldHVybiB0aGlzLmV2ZW50Q29tcG9uZW50c1xuICAgICAgLmZpbHRlcihldiA9PiAhZXYuc3RhdGUuZHJhZ2dhYmxlICYmIGV2LmxpbmVJZCA9PSBldmVudENvbXBvbmVudC5saW5lSWQpLy/lkIzjgZjliJfjga7jgoLjga7jgaDjgZHjgavntZ7jgotcbiAgICAgIC5zb3J0KChhLCBiKSA9PiAtKGEuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUoYi5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpKSkvL+aZgumWk+OBrumZjemghuOBp+S4puOBs+abv+OBiFxuICAgICAgLmZpbmQoZXYgPT4gZXYuY3VycmVudFRpbWVTcGFuLmdldEVuZFRpbWUoKS5jb21wYXJlKGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgPD0gMCkvL+mZjemghuOBquOBruOBp+WvvuixoeOCiOOCiuacgOWIneOBq+mWi+Wni+aZgumWk+OBjOiLpeOBhOOCguOBruOBjHByZXZcbiAgICAgIDtcbiAgfVxuXG4gIGdldFByZXZCb3R0b20oZXZlbnRDb21wb25lbnQpe1xuICAgIGNvbnN0IHByZXZFdmVudCA9IHRoaXMuZmluZFByZXZFdmVudChldmVudENvbXBvbmVudCk7XG4gICAgbGV0IGJvdHRvbVRpbWU7XG4gICAgaWYocHJldkV2ZW50KXtcbiAgICAgIGJvdHRvbVRpbWUgPSBwcmV2RXZlbnQuY3VycmVudFRpbWVTcGFuLmdldEVuZFRpbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm90dG9tVGltZSA9IHRoaXMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGltZVRvVG9wKGJvdHRvbVRpbWUpO1xuICB9XG5cbiAgZmluZE5leHRFdmVudChldmVudENvbXBvbmVudCl7XG4gICAgcmV0dXJuIHRoaXMuZmluZE5leHRFdmVudEJ5VGltZShldmVudENvbXBvbmVudC5saW5lSWQsIGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCkpO1xuICAgIC8vIHJldHVybiB0aGlzLmV2ZW50Q29tcG9uZW50c1xuICAgIC8vICAgLmZpbHRlcihldiA9PiAgIWV2LnN0YXRlLmRyYWdnYWJsZSAmJiBldi5saW5lSWQgPT0gZXZlbnRDb21wb25lbnQubGluZUlkKS8v5ZCM44GY5YiX44Gu44KC44Gu44Gg44GR44Gr57We44KLXG4gICAgLy8gICAuc29ydCgoYSwgYikgPT4gYS5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkuY29tcGFyZShiLmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkpLy/mmYLplpPjga7mmIfpoIbjgafkuKbjgbPmm7/jgYhcbiAgICAvLyAgIC5maW5kKGV2ID0+IGV2LmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5jb21wYXJlKGV2ZW50Q29tcG9uZW50LmN1cnJlbnRUaW1lU3Bhbi5nZXRFbmRUaW1lKCkpID49IDApLy/mmIfpoIbjgarjga7jgaflr77osaHjgojjgormnIDliJ3jgavplovlp4vmmYLplpPjgYzpgYXjgYTjgoLjga7jgYxuZXh0XG4gICAgLy8gICA7XG4gIH1cblxuICBmaW5kTmV4dEV2ZW50QnlUaW1lKGxpbmVJZCwgdGltZSl7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRDb21wb25lbnRzXG4gICAgICAuZmlsdGVyKGV2ID0+ICAhZXYuc3RhdGUuZHJhZ2dhYmxlICYmIGV2LmxpbmVJZCA9PSBsaW5lSWQpLy/lkIzjgZjliJfjga7jgoLjga7jgaDjgZHjgavntZ7jgotcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmN1cnJlbnRUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5jb21wYXJlKGIuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpKSkvL+aZgumWk+OBruaYh+mghuOBp+S4puOBs+abv+OBiFxuICAgICAgLmZpbmQoZXYgPT4gZXYuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmNvbXBhcmUodGltZSkgPj0gMCkvL+aYh+mghuOBquOBruOBp+WvvuixoeOCiOOCiuacgOWIneOBq+mWi+Wni+aZgumWk+OBjOmBheOBhOOCguOBruOBjG5leHRcbiAgICAgIDtcbiAgfVxuXG4gIGdldE5leHRUaW1lKGxpbmVJZCwgdGltZSl7XG4gICAgY29uc3QgbmV4dEV2ZW50ID0gdGhpcy5maW5kTmV4dEV2ZW50QnlUaW1lKGxpbmVJZCwgdGltZSk7XG4gICAgbGV0IG5leHRUaW1lO1xuICAgIGlmKG5leHRFdmVudCl7XG4gICAgICBuZXh0VGltZSA9IG5leHRFdmVudC5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRUaW1lID0gdGhpcy50aW1lU3Bhbi5nZXRFbmRUaW1lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUaW1lO1xuICB9XG5cbiAgZ2V0RnJlZU1pbnV0ZShsaW5lSWQsIHRpbWUpe1xuICAgIGNvbnN0IG5leHRUaW1lID0gdGhpcy5nZXROZXh0VGltZShsaW5lSWQsIHRpbWUpO1xuICAgIHJldHVybiB0aW1lLmdldERpc3RhbmNlKG5leHRUaW1lKTtcbiAgfVxuXG4gIGdldE5leHRUb3AoZXZlbnRDb21wb25lbnQpe1xuICAgIC8vIGNvbnN0IG5leHRFdmVudCA9IHRoaXMuZmluZE5leHRFdmVudChldmVudENvbXBvbmVudCk7XG4gICAgLy8gbGV0IG5leHRUaW1lO1xuICAgIC8vIGlmKG5leHRFdmVudCl7XG4gICAgLy8gICBuZXh0VGltZSA9IG5leHRFdmVudC5jdXJyZW50VGltZVNwYW4uZ2V0U3RhcnRUaW1lKCk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIG5leHRUaW1lID0gdGhpcy50aW1lU3Bhbi5nZXRFbmRUaW1lKCk7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHRoaXMudGltZVRvVG9wKHRoaXMuZ2V0TmV4dFRpbWUoZXZlbnRDb21wb25lbnQubGluZUlkLCBldmVudENvbXBvbmVudC5jdXJyZW50VGltZVNwYW4uZ2V0RW5kVGltZSgpKSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYW1lXG4gICAgICAgIGxpbmVEYXRhPXt0aGlzLnByb3BzLmxpbmVEYXRhfVxuICAgICAgICB0aW1lU3Bhbj17dGhpcy5wcm9wcy50aW1lU3Bhbn1cbiAgICAgICAgbGluZVdpZHRoPXt0aGlzLnByb3BzLmxpbmVXaWR0aH1cbiAgICAgICAgbWluSGVpZ2h0PXt0aGlzLnByb3BzLm1pbkhlaWdodH1cbiAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH1cbiAgICAgICAgbGluZUhlaWdodD17dGhpcy5saW5lSGVpZ2h0fVxuICAgICAgICB0aW1lbGluZT17dGhpc31cbiAgICAgICAgcnVsZXJJbnRlcnZhbD17dGhpcy5wcm9wcy5ydWxlckludGVydmFsfVxuICAgICAgICBldmVudHM9e3RoaXMucHJvcHMuZXZlbnRzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbi8vIFRpbWVsaW5lLnByb3BUeXBlcyA9IHtcbi8vICAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuLy8gICBsaW5lRGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbi8vICAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuLy8gICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbi8vICAgfSkpLmlzUmVxdWlyZWQsXG4vLyAgIGxpbmVXaWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4vLyAgIHJ1bGVySW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgbWluSW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4vLyAgIGhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4vLyB9XG5cblRpbWVsaW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgbWluSW50ZXJ2YWw6IDFcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBUaW1lIGZyb20gJy4vVGltZSdcbi8qKlxuICog5LiA5bqm55Sf5oiQ44GX44Gf44Kq44OW44K444Kn44Kv44OI44Gv5aSJ5pu044GX44G+44Gb44KT44CCXG4gKiDlpInmm7Tjg6Hjgr3jg4Pjg4njga/mlrDjgZfjgYTjgqrjg5bjgrjjgqfjgq/jg4jjgpLluLDjgZfjgb7jgZnjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNwYW5cbntcbiAgc3RhdGljIGNyZWF0ZShzdGFydCwgZW5kKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4obmV3IFRpbWUoc3RhcnRbMF0sIHN0YXJ0WzFdKSwgbmV3IFRpbWUoZW5kWzBdLCBlbmRbMV0pKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHN0YXJ0VGltZSwgZW5kVGltZSl7XG4gICAgd2hpbGUoc3RhcnRUaW1lLmNvbXBhcmUoZW5kVGltZSkgPj0gMCl7XG4gICAgICAgIGVuZFRpbWUgPSBlbmRUaW1lLmFkZE1pbigyNCAqIDYwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgdGhpcy5fZW5kVGltZSA9IGVuZFRpbWU7XG4gIH1cblxuICBjbG9uZSgpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aGlzLmdldFN0YXJ0VGltZSgpLmNsb25lKCksIHRoaXMuZ2V0RW5kVGltZSgpLmNsb25lKCkpO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKXtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUuZ2V0RGlzdGFuY2UodGhpcy5fZW5kVGltZSk7XG4gIH1cblxuICBnZXRTdGFydFRpbWUoKXsgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZTsgfVxuICBnZXRFbmRUaW1lKCl7IHJldHVybiB0aGlzLl9lbmRUaW1lOyB9XG5cbiAgc2hpZnRFbmRUaW1lKHRpbWUpe1xuICAgICAgcmV0dXJuIG5ldyBUaW1lU3Bhbih0aW1lLmFkZE1pbigtdGhpcy5nZXREaXN0YW5jZSgpKSwgdGltZSk7XG4gIH1cblxuICBzaGlmdFN0YXJ0VGltZSh0aW1lKXtcbiAgICAgIHJldHVybiBuZXcgVGltZVNwYW4odGltZSwgdGltZS5hZGRNaW4odGhpcy5nZXREaXN0YW5jZSgpKSk7XG4gIH1cblxuICBhZGRNaW4obWludXRlKXtcbiAgICByZXR1cm4gbmV3IFRpbWVTcGFuKHRoaXMuZ2V0U3RhcnRUaW1lKCksIHRoaXMuZ2V0RW5kVGltZSgpLmFkZE1pbihtaW51dGUpKTtcbiAgfVxuXG4gIGVxdWFscyh0aW1lU3Bhbil7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5lcXVhbHModGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpICYmIHRoaXMuZ2V0RW5kVGltZSgpLmVxdWFscyh0aW1lU3Bhbi5nZXRFbmRUaW1lKCkpO1xuICB9XG5cbiAgY29udGFpbnModGltZVNwYW4pe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnRUaW1lKCkuY29tcGFyZSh0aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSkgPCAwICYmIHRoaXMuZ2V0RW5kVGltZSgpLmNvbXBhcmUodGltZVNwYW4uZ2V0RW5kVGltZSgpKSA+IDA7XG4gIH1cblxuICBjb250YWluc1RpbWUodGltZSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydFRpbWUoKS5jb21wYXJlKHRpbWUpIDwgMCAmJiB0aGlzLmdldEVuZFRpbWUoKS5jb21wYXJlKHRpbWUpID4gMDtcbiAgfVxuXG4gIG92ZXJsYXBzKHRpbWVTcGFuKXtcbiAgICAgIGlmKHRpbWVTcGFuLmNvbnRhaW5zKHRoaXMpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5jb250YWluc1RpbWUodGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5jb250YWluc1RpbWUodGltZVNwYW4uZ2V0RW5kVGltZSgpKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGVhY2hIb3VyKGNhbGxiYWNrKXtcbiAgICAgIHZhciBob3VyID0gdGhpcy5nZXRTdGFydFRpbWUoKS5nZXRIb3VyKCk7XG4gICAgICB2YXIgZW5kID0gdGhpcy5nZXRFbmRUaW1lKCkuZ2V0SG91cigpO1xuICAgICAgdmFyIGtleSA9IDA7XG5cbiAgICAgIHdoaWxlKHRydWUpe1xuICAgICAgICAgIGlmKGhvdXIgPT09IGVuZCl7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoaG91ciwga2V5LCBob3VyLCB0aGlzLmdldEVuZFRpbWUoKS5nZXRNaW4oKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoaG91ciwga2V5LCBob3VyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBob3VyICs9IDE7XG4gICAgICAgICAgKytrZXk7XG4gICAgICB9XG4gIH1cblxuICBlYWNoVGltZShjYWxsYmFjaywgbWludXRlSW50ZXJ2YWwpe1xuICAgICAgdmFyIGtleSA9IDA7XG4gICAgICBtaW51dGVJbnRlcnZhbCA9IG1pbnV0ZUludGVydmFsID8gbWludXRlSW50ZXJ2YWwgOiA2MDtcblxuICAgICAgdmFyIHRpbWUgPSB0aGlzLmdldFN0YXJ0VGltZSgpO1xuICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgaWYodGltZS5jb21wYXJlKHRoaXMuZ2V0RW5kVGltZSgpKSA+IDApe1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWxsYmFjay5jYWxsKHRpbWUsIGtleSwgdGltZSk7XG5cbiAgICAgICAgICB0aW1lID0gdGltZS5hZGRNaW4obWludXRlSW50ZXJ2YWwpO1xuICAgICAgICAgICsra2V5O1xuICAgICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKXtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWUgKyAnficgKyB0aGlzLl9lbmRUaW1lO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzc2VzL1RpbWVTcGFuLmVzNlxuICoqLyIsIi8qKlxuICog5LiA5bqm55Sf5oiQ44GX44Gf44Kq44OW44K444Kn44Kv44OI44Gv5aSJ5pu044GX44G+44Gb44KT44CCXG4gKiDlpInmm7Tjg6Hjgr3jg4Pjg4njga/mlrDjgZfjgYTjgqrjg5bjgrjjgqfjgq/jg4jjgpLluLDjgZfjgb7jgZnjgIJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVxue1xuICBzdGF0aWMgZWFjaE1pbihjYWxsYmFjaywgbWludXRlSW50ZXJ2YWwpe1xuICAgICAgdmFyIGNvdW50ID0gNjAgLyBtaW51dGVJbnRlcnZhbDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgIHZhciBtaW4gPSBpICogbWludXRlSW50ZXJ2YWw7XG4gICAgICAgICAgaWYobWluIDwgNjApe1xuICAgICAgICAgICAgICB2YXIgZGlzcGxheU1pbiA9IG1pbiA8IDEwID8gJzAnICsgbWluIDogbWluICsgJyc7XG4gICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwobWluLCBpLCBtaW4sIGRpc3BsYXlNaW4pO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIOmFjeWIl+OBi+OCiVRpbWXjgpLnlJ/miJBcbiAgICogQHBhcmFtICB7YXJyYXl9IHRpbWUgW2hvdXIsIG1pbl3jga7phY3liJdcbiAgICogQHJldHVybiB7VGltZX1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUodGltZSl7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGltZVswXSwgdGltZVsxXSk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoaG91ciwgbWluKXtcbiAgICB0aGlzLl9ob3VyID0gaG91ciA9PT0gdW5kZWZpbmVkID8gMCA6IHBhcnNlSW50KGhvdXIsIDEwKTtcbiAgICB0aGlzLl9taW4gPSBtaW4gPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChtaW4sIDEwKTtcbiAgICB3aGlsZSh0aGlzLl9taW4gPCAwKXtcbiAgICAgICAgLS10aGlzLl9ob3VyO1xuICAgICAgICB0aGlzLl9taW4gPSA2MCArIHRoaXMuX21pbjtcbiAgICB9XG5cbiAgICB3aGlsZSh0aGlzLl9taW4gPiA1OSl7XG4gICAgICAgICsrdGhpcy5faG91cjtcbiAgICAgICAgdGhpcy5fbWluID0gdGhpcy5fbWluIC0gNjA7XG4gICAgfVxuXG4gICAgaWYodGhpcy5faG91ciA8IDApXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50b1N0cmluZygpKycgaXMgbm90IHZhbGlkIHRpbWUuJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SG91cigpeyByZXR1cm4gdGhpcy5faG91cjsgfTtcbiAgZ2V0TWluKCl7IHJldHVybiB0aGlzLl9taW47IH07XG5cbiAgY2xvbmUoKXtcbiAgICAgIHJldHVybiBuZXcgVGltZSh0aGlzLmdldEhvdXIoKSwgdGhpcy5nZXRNaW4oKSk7XG4gIH07XG5cbiAgYWRkTWluKG1pbil7XG4gICAgICByZXR1cm4gbmV3IFRpbWUodGhpcy5nZXRIb3VyKCksIHRoaXMuZ2V0TWluKCkgKyBwYXJzZUludChtaW4sIDEwKSk7XG4gIH07XG5cbiAgZXF1YWxzKHRpbWUpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SG91cigpID09PSB0aW1lLmdldEhvdXIoKSAmJiB0aGlzLmdldE1pbigpID09PSB0aW1lLmdldE1pbigpO1xuICB9O1xuXG4gIGNvbXBhcmUodGltZSl7XG4gICAgICBpZih0aGlzLmdldEhvdXIoKSA+IHRpbWUuZ2V0SG91cigpKVxuICAgICAge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0aGlzLmdldEhvdXIoKSA8IHRpbWUuZ2V0SG91cigpKVxuICAgICAge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgICBpZih0aGlzLmdldE1pbigpID4gdGltZS5nZXRNaW4oKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMuZ2V0TWluKCkgPCB0aW1lLmdldE1pbigpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgZ2V0RGlzdGFuY2UodGFyZ2V0VGltZSl7XG4gICAgICB2YXIgdGFyZ2V0SG91ciA9IHRhcmdldFRpbWUuZ2V0SG91cigpO1xuICAgICAgdmFyIGhvdXJEaXN0YW5jZSA9IHRhcmdldEhvdXIgLSB0aGlzLl9ob3VyO1xuICAgICAgcmV0dXJuIChob3VyRGlzdGFuY2UgKiA2MCkgKyAodGFyZ2V0VGltZS5nZXRNaW4oKSAtIHRoaXMuX21pbik7XG4gIH07XG5cbiAgdG9TdHJpbmcoKXtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlUaW1lKCk7XG4gIH07XG5cbiAgZ2V0RGlzcGxheUhvdXIoKXtcbiAgICAgIHJldHVybiB0aGlzLl9ob3VyIDwgMjQgPyB0aGlzLl9ob3VyIDogdGhpcy5faG91ciAtIDI0O1xuICB9O1xuXG4gIGdldERpc3BsYXlNaW4oKXtcbiAgICAgIHJldHVybiB0aGlzLl9taW4gPCAxMCA/ICcwJyt0aGlzLl9taW4gOiB0aGlzLl9taW47XG4gIH07XG5cbiAgZ2V0RGlzcGxheVRpbWUoKXtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXlIb3VyKCkgKyc6JysgdGhpcy5nZXREaXNwbGF5TWluKCk7XG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFzc2VzL1RpbWUuZXM2XG4gKiovIiwiaW1wb3J0IEV2ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvRXZlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZUFjdGlvbnNcbntcbiAgY29uc3RydWN0b3IoY29tcG9uZW50KXtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIGFkZEV2ZW50cyhldmVudHMpe1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5mcmFtZUNvbXBvbmVudC5hZGRFdmVudHMoZXZlbnRzKTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpe1xuICAgIHRoaXMuY29tcG9uZW50LmZyYW1lQ29tcG9uZW50LnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnQoZXZlbnRJZCl7XG4gICAgdGhpcy5jb21wb25lbnQuZnJhbWVDb21wb25lbnQucmVtb3ZlRXZlbnQoZXZlbnRJZCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYXNzZXMvVGltZWxpbmVBY3Rpb25zLmVzNlxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCB7RHJhZ1NvdXJjZX0gZnJvbSAncmVhY3QtZG5kJztcbmltcG9ydCBFdmVudEJhc2UgZnJvbSAnLi9FdmVudEJhc2UnO1xuaW1wb3J0IEV2ZW50QWN0aW9ucyBmcm9tICcuLi9jbGFzc2VzL0V2ZW50QWN0aW9ucyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9UaW1lbGluZSc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5cbmNvbnN0IHNvdXJjZSA9IHtcbiAgYmVnaW5EcmFnOiBmdW5jdGlvbiAocHJvcHMsIG1vbml0b3IsIGNvbXBvbmVudCkge1xuICAgIHJldHVybiBhc3NpZ24oe30sIHByb3BzLCB7ZHJhZ2dpbmdDb21wb25lbnQ6IGNvbXBvbmVudH0pO1xuICB9LFxuICBjYW5EcmFnOiBmdW5jdGlvbihwcm9wcywgbW9uaXRvciwgY29tcG9uZW50KXtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBwcm9wcy50aW1lbGluZS5maW5kRXZlbnRCeUlkKHByb3BzLmlkKS5zdGF0ZS5kcmFnZ2FibGU7XG4gICAgcmV0dXJuICEhZHJhZ2dhYmxlO1xuICB9XG59XG5cbmNvbnN0IGNvbGxlY3QgPSAoY29ubmVjdCwgbW9uaXRvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbm5lY3REcmFnU291cmNlOiBjb25uZWN0LmRyYWdTb3VyY2UoKSxcbiAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKVxuICB9O1xufVxuXG5jbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLnRpbWVsaW5lLnRpbWVTcGFuVG9IZWlnaHQodGhpcy5wcm9wcy50aW1lU3BhbiksXG4gICAgICB0b3A6IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKHRoaXMucHJvcHMudGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpLFxuICAgICAgbGVmdDogdGhpcy5wcm9wcy50aW1lbGluZS5nZXRMaW5lTGVmdCh0aGlzLnByb3BzLmxpbmVJZCksXG4gICAgICBjb2xvcjogdGhpcy5wcm9wcy5jb2xvcixcbiAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMuZGlzcGxheSB8fCBbXSxcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJ1xuICAgIH1cblxuICAgIHRoaXMuYWN0aW9ucyA9IG5ldyBFdmVudEFjdGlvbnModGhpcyk7XG5cbiAgICB0aGlzLmxpbmVJZCA9IHRoaXMucHJvcHMubGluZUlkO1xuICAgIHRoaXMudGltZVNwYW4gPSB0aGlzLnByb3BzLnRpbWVTcGFuO1xuICAgIHRoaXMuZHJhZ2dpbmdQb3NpdGlvbiA9IG51bGw7XG4gICAgdGhpcy5yZXNpemluZ1RpbWVTcGFuID0gbnVsbDtcbiAgICB0aGlzLnJlc2l6aW5nID0gZmFsc2U7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5hZGRFdmVudENvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnZhcnMgPSB0aGlzLnByb3BzLnZhcnMgPyB0aGlzLnByb3BzLnZhcnMgOiB7fTtcbiAgfVxuXG4gIGdldCBjdXJyZW50VGltZVNwYW4oKXtcbiAgICByZXR1cm4gdGhpcy5yZXNpemluZ1RpbWVTcGFuIHx8IHRoaXMudGltZVNwYW47XG4gIH1cblxuICBnZXQgbmV4dFBvc2l0aW9uKCl7XG4gICAgaWYodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmVJZDogdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLmxpbmVJZCxcbiAgICAgICAgdGltZVNwYW46IHRoaXMudGltZVNwYW4uc2hpZnRTdGFydFRpbWUodGhpcy5kcmFnZ2luZ1Bvc2l0aW9uLnRpbWUpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHRoaXMucmVzaXppbmdUaW1lU3Bhbil7XG4gICAgICByZXR1cm57XG4gICAgICAgIGxpbmVJZDogdGhpcy5saW5lSWQsXG4gICAgICAgIHRpbWVTcGFuOiB0aGlzLnJlc2l6aW5nVGltZVNwYW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBwcmV2UG9zaXRpb24oKXtcbiAgICBpZighdGhpcy5kcmFnZ2luZ1Bvc2l0aW9uICYmICF0aGlzLnJlc2l6aW5nVGltZVNwYW4pe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybntcbiAgICAgICAgbGluZUlkOiB0aGlzLmxpbmVJZCxcbiAgICAgICAgdGltZVNwYW46IHRoaXMudGltZVNwYW5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5LuW44GuRXZlbnTjgajph43jgarjgaPjgabjgYTjgarjgYTjgYvjg4Hjgqfjg4Pjgq/jgZnjgotcbiAgICogQHBhcmFtICB7b2JqZWN0fSAgcG9zaXRpb24ge2xpbmVJZDogKioqLCB0aW1lU3BhbjogKioqfVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNGcmVlUG9zaXRpb24ocG9zaXRpb24pe1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy50aW1lbGluZS5ldmVudENvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMucHJvcHMudGltZWxpbmUuZXZlbnRDb21wb25lbnRzW2ldO1xuICAgICAgaWYoZXYgPT09IHRoaXMpIGNvbnRpbnVlO1xuICAgICAgaWYoZXYubGluZUlkICE9IHBvc2l0aW9uLmxpbmVJZCkgY29udGludWU7XG4gICAgICBpZihldi5jdXJyZW50VGltZVNwYW4ub3ZlcmxhcHMocG9zaXRpb24udGltZVNwYW4pKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbW92ZVRvKHRvcCwgbGVmdCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dG9wOiB0b3AsIGxlZnQ6IGxlZnR9KTtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgaWYodGhpcy5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudERpZENsaWNrKXtcbiAgICAgIGlmKHRoaXMucmVzaXppbmcpe1xuICAgICAgICByZXR1cm4gO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkQ2xpY2soe1xuICAgICAgICBldmVudDogZSxcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBsaW5lQ29tcG9uZW50OiB0aGlzLnByb3BzLnRpbWVsaW5lLmxpbmVDb21wb25lbnRzLmZpbmQobGluZUNvbXBvbmVudCA9PiBsaW5lQ29tcG9uZW50LnByb3BzLmlkID09IHRoaXMubGluZUlkKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZHJhZ2dpbmcodGltZSwgbGluZUlkKXtcbiAgICB0aGlzLmRyYWdnaW5nUG9zaXRpb24gPSB7dGltZTogdGltZSwgbGluZUlkOiBsaW5lSWR9O1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nRGlzcGxheTogdGltZS5nZXREaXNwbGF5VGltZSgpfSk7XG4gIH1cblxuICByZXNpemVVcChlKXtcbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmZyYW1lQ29tcG9uZW50LnJlc2l6ZVVwKHRoaXMsIGUuY2xpZW50WSk7XG4gIH1cblxuICByZXNpemVEb3duKGUpe1xuICAgIHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQucmVzaXplRG93bih0aGlzLCBlLmNsaWVudFkpO1xuICB9XG5cbiAgZW5kUmVzaXppbmcoZSl7XG4gICAgaWYodGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6IG51bGwsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheVRvcDogbnVsbFxuICAgICAgfTtcblxuICAgICAgaWYodGhpcy5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgICAgbmV3U3RhdGUudG9wID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lVG9Ub3AodGhpcy5yZXNpemluZ1RpbWVTcGFuLmdldFN0YXJ0VGltZSgpKTtcbiAgICAgICAgbmV3U3RhdGUuaGVpZ2h0ID0gdGhpcy5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KHRoaXMucmVzaXppbmdUaW1lU3Bhbik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICAvL29uQ2xpY2vjgojjgoplbmRSZXNpemluZ+OBruWFiOOBq+eZuueUn+OBl+OBpuOBl+OBvuOBhuOAglxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXNpemluZyA9IGZhbHNlLCAxMDApO1xuICB9XG5cbiAgb25Db250ZXh0TWVudShlKXtcbiAgICBpZih0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkUmlnaHRDbGljayl7XG4gICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkUmlnaHRDbGljayh7XG4gICAgICAgIGV2ZW50OiBlLFxuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldERyYWdnaW5nU3R5bGUoKXtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLFxuICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5jb2xvcixcbiAgICB9XG4gIH1cblxuICBnZXRPZmZzZXQoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMuc3RhdGUubGVmdFxuICAgIH1cbiAgfVxuXG4gIHNldENvbG9yKGNvbG9yKXtcbiAgICB0aGlzLnNldFN0YXRlKHtjb2xvcjogY29sb3J9KTtcbiAgfVxuXG4gIHNldERpc3BsYXkoZGlzcGxheSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogZGlzcGxheX0pO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheShkaXNwbGF5KXtcbiAgICBjb25zdCBuZXdEaXNwbGF5ID0gdGhpcy5zdGF0ZS5kaXNwbGF5Lm1hcChpdGVtID0+IHtcbiAgICAgIGlmKGl0ZW0ua2V5IGluIGRpc3BsYXkpe1xuICAgICAgICByZXR1cm4ge2tleTogaXRlbS5rZXksIHZhbHVlOiBkaXNwbGF5W2l0ZW0ua2V5XX1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiBuZXdEaXNwbGF5fSk7XG4gIH1cblxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiB0aGlzLnN0YXRlLnRvcCArICdweCcsXG4gICAgICBsZWZ0OiB0aGlzLnN0YXRlLmxlZnQgKyAncHgnLFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggKyAncHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmNvbG9yLFxuICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy5pc0RyYWdnaW5nID8gJ25vbmUnIDogJ2Jsb2NrJ1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jb25uZWN0RHJhZ1NvdXJjZShcbiAgICAgIDxkaXYgb25Db250ZXh0TWVudT17ZSA9PiB0aGlzLm9uQ29udGV4dE1lbnUoZSl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxFdmVudFZpZXcnLCB7dGxEcmFnZ2luZ0V2ZW50OiB0aGlzLnN0YXRlLmRyYWdnYWJsZSwgdGxSZXNpemFibGVFdmVudDogdGhpcy5zdGF0ZS5yZXNpemFibGV9KX0gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX0+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIGlmKHRoaXMuc3RhdGUucmVzaXphYmxlKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxSZXNpemVIYW5kbGVcIiBvblRvdWNoc3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVVcChlKX0gb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVVcChlKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgICA8RXZlbnRCYXNlXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5PXt0aGlzLnN0YXRlLmRyYWdnaW5nRGlzcGxheX1cbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXlUb3A9e3RoaXMuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5VG9wfVxuICAgICAgICAgIGRpc3BsYXk9e3RoaXMuc3RhdGUuZGlzcGxheX1cbiAgICAgICAgLz5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5zdGF0ZS5yZXNpemFibGUpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bFJlc2l6ZUhhbmRsZSB0bEJvdHRvbVwiIG9uVG91Y2hzdGFydD17ZSA9PiB0aGlzLnJlc2l6ZURvd24oZSl9IG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplRG93bihlKX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBFdmVudC5wcm9wVHlwZXMgPSB7XG4vLyAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4vLyAgIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbi8vICAgY29sb3I6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbi8vICAgLy9UT0RPIOW+queSsOWPgueFp+OBq+OBquOCi+OBruOBp2ltcG9ydOOBp+OBjeOBmuOAguOBqOOCiuOBguOBiOOBmmFueeOBp+OBlOOBvuOBi+OBl+OBpuOBvuOBmeOAglxuLy8gICB0aW1lbGluZTogUmVhY3QuUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuLy8gICBsaW5lSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnU291cmNlKFwiRXZlbnRcIiwgc291cmNlLCBjb2xsZWN0KShFdmVudCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0V2ZW50LmpzeFxuICoqLyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqWydkZWZhdWx0J10gOiBvYmo7IH1cblxudmFyIF9EcmFnRHJvcENvbnRleHQgPSByZXF1aXJlKCcuL0RyYWdEcm9wQ29udGV4dCcpO1xuXG5leHBvcnRzLkRyYWdEcm9wQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZShfRHJhZ0Ryb3BDb250ZXh0KTtcblxudmFyIF9EcmFnTGF5ZXIgPSByZXF1aXJlKCcuL0RyYWdMYXllcicpO1xuXG5leHBvcnRzLkRyYWdMYXllciA9IF9pbnRlcm9wUmVxdWlyZShfRHJhZ0xheWVyKTtcblxudmFyIF9EcmFnU291cmNlID0gcmVxdWlyZSgnLi9EcmFnU291cmNlJyk7XG5cbmV4cG9ydHMuRHJhZ1NvdXJjZSA9IF9pbnRlcm9wUmVxdWlyZShfRHJhZ1NvdXJjZSk7XG5cbnZhciBfRHJvcFRhcmdldCA9IHJlcXVpcmUoJy4vRHJvcFRhcmdldCcpO1xuXG5leHBvcnRzLkRyb3BUYXJnZXQgPSBfaW50ZXJvcFJlcXVpcmUoX0Ryb3BUYXJnZXQpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3NsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEcmFnRHJvcENvbnRleHQ7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9kbmRDb3JlID0gcmVxdWlyZSgnZG5kLWNvcmUnKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzID0gcmVxdWlyZSgnLi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cycpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50cyk7XG5cbmZ1bmN0aW9uIERyYWdEcm9wQ29udGV4dChiYWNrZW5kT3JNb2R1bGUpIHtcbiAgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyWydkZWZhdWx0J10uYXBwbHkodW5kZWZpbmVkLCBbJ0RyYWdEcm9wQ29udGV4dCcsICdiYWNrZW5kJ10uY29uY2F0KF9zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcblxuICAvLyBBdXRvLWRldGVjdCBFUzYgZGVmYXVsdCBleHBvcnQgZm9yIHBlb3BsZSBzdGlsbCB1c2luZyBFUzVcbiAgdmFyIGJhY2tlbmQgPSB1bmRlZmluZWQ7XG4gIGlmICh0eXBlb2YgYmFja2VuZE9yTW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYmFja2VuZE9yTW9kdWxlWydkZWZhdWx0J10gPT09ICdmdW5jdGlvbicpIHtcbiAgICBiYWNrZW5kID0gYmFja2VuZE9yTW9kdWxlWydkZWZhdWx0J107XG4gIH0gZWxzZSB7XG4gICAgYmFja2VuZCA9IGJhY2tlbmRPck1vZHVsZTtcbiAgfVxuXG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGJhY2tlbmQgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCB0aGUgYmFja2VuZCB0byBiZSBhIGZ1bmN0aW9uIG9yIGFuIEVTNiBtb2R1bGUgZXhwb3J0aW5nIGEgZGVmYXVsdCBmdW5jdGlvbi4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLWRyb3AtY29udGV4dC5odG1sJyk7XG5cbiAgdmFyIGNoaWxkQ29udGV4dCA9IHtcbiAgICBkcmFnRHJvcE1hbmFnZXI6IG5ldyBfZG5kQ29yZS5EcmFnRHJvcE1hbmFnZXIoYmFja2VuZClcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGVDb250ZXh0KERlY29yYXRlZENvbXBvbmVudCkge1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IERlY29yYXRlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBEZWNvcmF0ZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICAgIHJldHVybiAoZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhEcmFnRHJvcENvbnRleHRDb250YWluZXIsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBEcmFnRHJvcENvbnRleHRDb250YWluZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnRHJvcENvbnRleHRDb250YWluZXIpO1xuXG4gICAgICAgIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLnByb3RvdHlwZS5nZXREZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZSA9IGZ1bmN0aW9uIGdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLmNoaWxkO1xuICAgICAgfTtcblxuICAgICAgRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLnByb3RvdHlwZS5nZXRNYW5hZ2VyID0gZnVuY3Rpb24gZ2V0TWFuYWdlcigpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkQ29udGV4dC5kcmFnRHJvcE1hbmFnZXI7XG4gICAgICB9O1xuXG4gICAgICBEcmFnRHJvcENvbnRleHRDb250YWluZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkQ29udGV4dDtcbiAgICAgIH07XG5cbiAgICAgIERyYWdEcm9wQ29udGV4dENvbnRhaW5lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoRGVjb3JhdGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIHJlZjogJ2NoaWxkJyB9KSk7XG4gICAgICB9O1xuXG4gICAgICBfY3JlYXRlQ2xhc3MoRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyLCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdEZWNvcmF0ZWRDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogRGVjb3JhdGVkQ29tcG9uZW50LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc3BsYXlOYW1lJyxcbiAgICAgICAgdmFsdWU6ICdEcmFnRHJvcENvbnRleHQoJyArIGRpc3BsYXlOYW1lICsgJyknLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NoaWxkQ29udGV4dFR5cGVzJyxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBkcmFnRHJvcE1hbmFnZXI6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gRHJhZ0Ryb3BDb250ZXh0Q29udGFpbmVyO1xuICAgIH0pKF9yZWFjdC5Db21wb25lbnQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL0RyYWdEcm9wQ29udGV4dC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZShvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9ialsnZGVmYXVsdCddIDogb2JqOyB9XG5cbnZhciBfRHJhZ0Ryb3BNYW5hZ2VyID0gcmVxdWlyZSgnLi9EcmFnRHJvcE1hbmFnZXInKTtcblxuZXhwb3J0cy5EcmFnRHJvcE1hbmFnZXIgPSBfaW50ZXJvcFJlcXVpcmUoX0RyYWdEcm9wTWFuYWdlcik7XG5cbnZhciBfRHJhZ1NvdXJjZSA9IHJlcXVpcmUoJy4vRHJhZ1NvdXJjZScpO1xuXG5leHBvcnRzLkRyYWdTb3VyY2UgPSBfaW50ZXJvcFJlcXVpcmUoX0RyYWdTb3VyY2UpO1xuXG52YXIgX0Ryb3BUYXJnZXQgPSByZXF1aXJlKCcuL0Ryb3BUYXJnZXQnKTtcblxuZXhwb3J0cy5Ecm9wVGFyZ2V0ID0gX2ludGVyb3BSZXF1aXJlKF9Ecm9wVGFyZ2V0KTtcblxudmFyIF9iYWNrZW5kc0NyZWF0ZVRlc3RCYWNrZW5kID0gcmVxdWlyZSgnLi9iYWNrZW5kcy9jcmVhdGVUZXN0QmFja2VuZCcpO1xuXG5leHBvcnRzLmNyZWF0ZVRlc3RCYWNrZW5kID0gX2ludGVyb3BSZXF1aXJlKF9iYWNrZW5kc0NyZWF0ZVRlc3RCYWNrZW5kKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX3JlZHV4TGliQ3JlYXRlU3RvcmUgPSByZXF1aXJlKCdyZWR1eC9saWIvY3JlYXRlU3RvcmUnKTtcblxudmFyIF9yZWR1eExpYkNyZWF0ZVN0b3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZHV4TGliQ3JlYXRlU3RvcmUpO1xuXG52YXIgX3JlZHVjZXJzID0gcmVxdWlyZSgnLi9yZWR1Y2VycycpO1xuXG52YXIgX3JlZHVjZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZHVjZXJzKTtcblxudmFyIF9hY3Rpb25zRHJhZ0Ryb3AgPSByZXF1aXJlKCcuL2FjdGlvbnMvZHJhZ0Ryb3AnKTtcblxudmFyIGRyYWdEcm9wQWN0aW9ucyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hY3Rpb25zRHJhZ0Ryb3ApO1xuXG52YXIgX0RyYWdEcm9wTW9uaXRvciA9IHJlcXVpcmUoJy4vRHJhZ0Ryb3BNb25pdG9yJyk7XG5cbnZhciBfRHJhZ0Ryb3BNb25pdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RyYWdEcm9wTW9uaXRvcik7XG5cbnZhciBfSGFuZGxlclJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9IYW5kbGVyUmVnaXN0cnknKTtcblxudmFyIF9IYW5kbGVyUmVnaXN0cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSGFuZGxlclJlZ2lzdHJ5KTtcblxudmFyIERyYWdEcm9wTWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERyYWdEcm9wTWFuYWdlcihjcmVhdGVCYWNrZW5kKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdEcm9wTWFuYWdlcik7XG5cbiAgICB2YXIgc3RvcmUgPSBfcmVkdXhMaWJDcmVhdGVTdG9yZTJbJ2RlZmF1bHQnXShfcmVkdWNlcnMyWydkZWZhdWx0J10pO1xuXG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMubW9uaXRvciA9IG5ldyBfRHJhZ0Ryb3BNb25pdG9yMlsnZGVmYXVsdCddKHN0b3JlKTtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gdGhpcy5tb25pdG9yLnJlZ2lzdHJ5O1xuICAgIHRoaXMuYmFja2VuZCA9IGNyZWF0ZUJhY2tlbmQodGhpcyk7XG5cbiAgICBzdG9yZS5zdWJzY3JpYmUodGhpcy5oYW5kbGVSZWZDb3VudENoYW5nZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIERyYWdEcm9wTWFuYWdlci5wcm90b3R5cGUuaGFuZGxlUmVmQ291bnRDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVSZWZDb3VudENoYW5nZSgpIHtcbiAgICB2YXIgc2hvdWxkU2V0VXAgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCkucmVmQ291bnQgPiAwO1xuICAgIGlmIChzaG91bGRTZXRVcCAmJiAhdGhpcy5pc1NldFVwKSB7XG4gICAgICB0aGlzLmJhY2tlbmQuc2V0dXAoKTtcbiAgICAgIHRoaXMuaXNTZXRVcCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghc2hvdWxkU2V0VXAgJiYgdGhpcy5pc1NldFVwKSB7XG4gICAgICB0aGlzLmJhY2tlbmQudGVhcmRvd24oKTtcbiAgICAgIHRoaXMuaXNTZXRVcCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBEcmFnRHJvcE1hbmFnZXIucHJvdG90eXBlLmdldE1vbml0b3IgPSBmdW5jdGlvbiBnZXRNb25pdG9yKCkge1xuICAgIHJldHVybiB0aGlzLm1vbml0b3I7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNYW5hZ2VyLnByb3RvdHlwZS5nZXRCYWNrZW5kID0gZnVuY3Rpb24gZ2V0QmFja2VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrZW5kO1xuICB9O1xuXG4gIERyYWdEcm9wTWFuYWdlci5wcm90b3R5cGUuZ2V0UmVnaXN0cnkgPSBmdW5jdGlvbiBnZXRSZWdpc3RyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RyeTtcbiAgfTtcblxuICBEcmFnRHJvcE1hbmFnZXIucHJvdG90eXBlLmdldEFjdGlvbnMgPSBmdW5jdGlvbiBnZXRBY3Rpb25zKCkge1xuICAgIHZhciBtYW5hZ2VyID0gdGhpcztcbiAgICB2YXIgZGlzcGF0Y2ggPSB0aGlzLnN0b3JlLmRpc3BhdGNoO1xuXG4gICAgZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IGFjdGlvbkNyZWF0b3IuYXBwbHkobWFuYWdlciwgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZHJhZ0Ryb3BBY3Rpb25zKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBkcmFnRHJvcEFjdGlvbnNba2V5XSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGJvdW5kQWN0aW9ucywga2V5KSB7XG4gICAgICBib3VuZEFjdGlvbnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGRyYWdEcm9wQWN0aW9uc1trZXldKTtcbiAgICAgIHJldHVybiBib3VuZEFjdGlvbnM7XG4gICAgfSwge30pO1xuICB9O1xuXG4gIHJldHVybiBEcmFnRHJvcE1hbmFnZXI7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEcmFnRHJvcE1hbmFnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvRHJhZ0Ryb3BNYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQWN0aW9uVHlwZXMgPSB1bmRlZmluZWQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZVN0b3JlO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQbGFpbk9iamVjdCk7XG5cbnZhciBfc3ltYm9sT2JzZXJ2YWJsZSA9IHJlcXVpcmUoJ3N5bWJvbC1vYnNlcnZhYmxlJyk7XG5cbnZhciBfc3ltYm9sT2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2xPYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgQWN0aW9uVHlwZXMgPSBleHBvcnRzLkFjdGlvblR5cGVzID0ge1xuICBJTklUOiAnQEByZWR1eC9JTklUJ1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW2luaXRpYWxTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZW5oYW5jZXIgVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAqXG4gKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBpbml0aWFsU3RhdGU7XG4gICAgaW5pdGlhbFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBpbml0aWFsU3RhdGU7XG4gIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgdmFyIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hhbmdlIGxpc3RlbmVyLiBJdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCxcbiAgICogYW5kIHNvbWUgcGFydCBvZiB0aGUgc3RhdGUgdHJlZSBtYXkgcG90ZW50aWFsbHkgaGF2ZSBjaGFuZ2VkLiBZb3UgbWF5IHRoZW5cbiAgICogY2FsbCBgZ2V0U3RhdGUoKWAgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGluc2lkZSB0aGUgY2FsbGJhY2suXG4gICAqXG4gICAqIFlvdSBtYXkgY2FsbCBgZGlzcGF0Y2goKWAgZnJvbSBhIGNoYW5nZSBsaXN0ZW5lciwgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqIGNhdmVhdHM6XG4gICAqXG4gICAqIDEuIFRoZSBzdWJzY3JpcHRpb25zIGFyZSBzbmFwc2hvdHRlZCBqdXN0IGJlZm9yZSBldmVyeSBgZGlzcGF0Y2goKWAgY2FsbC5cbiAgICogSWYgeW91IHN1YnNjcmliZSBvciB1bnN1YnNjcmliZSB3aGlsZSB0aGUgbGlzdGVuZXJzIGFyZSBiZWluZyBpbnZva2VkLCB0aGlzXG4gICAqIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdCBvbiB0aGUgYGRpc3BhdGNoKClgIHRoYXQgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgKiBIb3dldmVyLCB0aGUgbmV4dCBgZGlzcGF0Y2goKWAgY2FsbCwgd2hldGhlciBuZXN0ZWQgb3Igbm90LCB3aWxsIHVzZSBhIG1vcmVcbiAgICogcmVjZW50IHNuYXBzaG90IG9mIHRoZSBzdWJzY3JpcHRpb24gbGlzdC5cbiAgICpcbiAgICogMi4gVGhlIGxpc3RlbmVyIHNob3VsZCBub3QgZXhwZWN0IHRvIHNlZSBhbGwgc3RhdGUgY2hhbmdlcywgYXMgdGhlIHN0YXRlXG4gICAqIG1pZ2h0IGhhdmUgYmVlbiB1cGRhdGVkIG11bHRpcGxlIHRpbWVzIGR1cmluZyBhIG5lc3RlZCBgZGlzcGF0Y2goKWAgYmVmb3JlXG4gICAqIHRoZSBsaXN0ZW5lciBpcyBjYWxsZWQuIEl0IGlzLCBob3dldmVyLCBndWFyYW50ZWVkIHRoYXQgYWxsIHN1YnNjcmliZXJzXG4gICAqIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBgZGlzcGF0Y2goKWAgc3RhcnRlZCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBsYXRlc3RcbiAgICogc3RhdGUgYnkgdGhlIHRpbWUgaXQgZXhpdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBldmVyeSBkaXNwYXRjaC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGlzIGNoYW5nZSBsaXN0ZW5lci5cbiAgICovXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcblxuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcblxuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghKDAsIF9pc1BsYWluT2JqZWN0MltcImRlZmF1bHRcIl0pKGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG4gICAqL1xuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cblxuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmW19zeW1ib2xPYnNlcnZhYmxlMltcImRlZmF1bHRcIl1dID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfVxuXG4gIC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyW19zeW1ib2xPYnNlcnZhYmxlMltcImRlZmF1bHRcIl1dID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgvbGliL2NyZWF0ZVN0b3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc0hvc3RPYmplY3QgPSByZXF1aXJlKCcuL19pc0hvc3RPYmplY3QnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHxcbiAgICAgIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpICE9IG9iamVjdFRhZyB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0UHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG4vKipcbiAqIEdldHMgdGhlIGBbW1Byb3RvdHlwZV1dYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtudWxsfE9iamVjdH0gUmV0dXJucyB0aGUgYFtbUHJvdG90eXBlXV1gLlxuICovXG5mdW5jdGlvbiBnZXRQcm90b3R5cGUodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZUdldFByb3RvdHlwZShPYmplY3QodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSG9zdE9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faXNIb3N0T2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vcG9ueWZpbGwnKShnbG9iYWwgfHwgd2luZG93IHx8IHRoaXMpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChTeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0U3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9wb255ZmlsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9kcmFnT2Zmc2V0ID0gcmVxdWlyZSgnLi9kcmFnT2Zmc2V0Jyk7XG5cbnZhciBfZHJhZ09mZnNldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kcmFnT2Zmc2V0KTtcblxudmFyIF9kcmFnT3BlcmF0aW9uID0gcmVxdWlyZSgnLi9kcmFnT3BlcmF0aW9uJyk7XG5cbnZhciBfZHJhZ09wZXJhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kcmFnT3BlcmF0aW9uKTtcblxudmFyIF9yZWZDb3VudCA9IHJlcXVpcmUoJy4vcmVmQ291bnQnKTtcblxudmFyIF9yZWZDb3VudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWZDb3VudCk7XG5cbnZhciBfZGlydHlIYW5kbGVySWRzID0gcmVxdWlyZSgnLi9kaXJ0eUhhbmRsZXJJZHMnKTtcblxudmFyIF9kaXJ0eUhhbmRsZXJJZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGlydHlIYW5kbGVySWRzKTtcblxudmFyIF9zdGF0ZUlkID0gcmVxdWlyZSgnLi9zdGF0ZUlkJyk7XG5cbnZhciBfc3RhdGVJZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZUlkKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHN0YXRlID0ge307XG5cbiAgcmV0dXJuIHtcbiAgICBkaXJ0eUhhbmRsZXJJZHM6IF9kaXJ0eUhhbmRsZXJJZHMyWydkZWZhdWx0J10oc3RhdGUuZGlydHlIYW5kbGVySWRzLCBhY3Rpb24sIHN0YXRlLmRyYWdPcGVyYXRpb24pLFxuICAgIGRyYWdPZmZzZXQ6IF9kcmFnT2Zmc2V0MlsnZGVmYXVsdCddKHN0YXRlLmRyYWdPZmZzZXQsIGFjdGlvbiksXG4gICAgcmVmQ291bnQ6IF9yZWZDb3VudDJbJ2RlZmF1bHQnXShzdGF0ZS5yZWZDb3VudCwgYWN0aW9uKSxcbiAgICBkcmFnT3BlcmF0aW9uOiBfZHJhZ09wZXJhdGlvbjJbJ2RlZmF1bHQnXShzdGF0ZS5kcmFnT3BlcmF0aW9uLCBhY3Rpb24pLFxuICAgIHN0YXRlSWQ6IF9zdGF0ZUlkMlsnZGVmYXVsdCddKHN0YXRlLnN0YXRlSWQpXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBkcmFnT2Zmc2V0O1xuZXhwb3J0cy5nZXRTb3VyY2VDbGllbnRPZmZzZXQgPSBnZXRTb3VyY2VDbGllbnRPZmZzZXQ7XG5leHBvcnRzLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCA9IGdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldDtcblxudmFyIF9hY3Rpb25zRHJhZ0Ryb3AgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2RyYWdEcm9wJyk7XG5cbnZhciBpbml0aWFsU3RhdGUgPSB7XG4gIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQ6IG51bGwsXG4gIGluaXRpYWxDbGllbnRPZmZzZXQ6IG51bGwsXG4gIGNsaWVudE9mZnNldDogbnVsbFxufTtcblxuZnVuY3Rpb24gYXJlT2Zmc2V0c0VxdWFsKG9mZnNldEEsIG9mZnNldEIpIHtcbiAgaWYgKG9mZnNldEEgPT09IG9mZnNldEIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gb2Zmc2V0QSAmJiBvZmZzZXRCICYmIG9mZnNldEEueCA9PT0gb2Zmc2V0Qi54ICYmIG9mZnNldEEueSA9PT0gb2Zmc2V0Qi55O1xufVxuXG5mdW5jdGlvbiBkcmFnT2Zmc2V0KHN0YXRlLCBhY3Rpb24pIHtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuQkVHSU5fRFJBRzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQ6IGFjdGlvbi5zb3VyY2VDbGllbnRPZmZzZXQsXG4gICAgICAgIGluaXRpYWxDbGllbnRPZmZzZXQ6IGFjdGlvbi5jbGllbnRPZmZzZXQsXG4gICAgICAgIGNsaWVudE9mZnNldDogYWN0aW9uLmNsaWVudE9mZnNldFxuICAgICAgfTtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuSE9WRVI6XG4gICAgICBpZiAoYXJlT2Zmc2V0c0VxdWFsKHN0YXRlLmNsaWVudE9mZnNldCwgYWN0aW9uLmNsaWVudE9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjbGllbnRPZmZzZXQ6IGFjdGlvbi5jbGllbnRPZmZzZXRcbiAgICAgIH0pO1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5FTkRfRFJBRzpcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuRFJPUDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VDbGllbnRPZmZzZXQoc3RhdGUpIHtcbiAgdmFyIGNsaWVudE9mZnNldCA9IHN0YXRlLmNsaWVudE9mZnNldDtcbiAgdmFyIGluaXRpYWxDbGllbnRPZmZzZXQgPSBzdGF0ZS5pbml0aWFsQ2xpZW50T2Zmc2V0O1xuICB2YXIgaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCA9IHN0YXRlLmluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQ7XG5cbiAgaWYgKCFjbGllbnRPZmZzZXQgfHwgIWluaXRpYWxDbGllbnRPZmZzZXQgfHwgIWluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IGNsaWVudE9mZnNldC54ICsgaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldC54IC0gaW5pdGlhbENsaWVudE9mZnNldC54LFxuICAgIHk6IGNsaWVudE9mZnNldC55ICsgaW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldC55IC0gaW5pdGlhbENsaWVudE9mZnNldC55XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldChzdGF0ZSkge1xuICB2YXIgY2xpZW50T2Zmc2V0ID0gc3RhdGUuY2xpZW50T2Zmc2V0O1xuICB2YXIgaW5pdGlhbENsaWVudE9mZnNldCA9IHN0YXRlLmluaXRpYWxDbGllbnRPZmZzZXQ7XG5cbiAgaWYgKCFjbGllbnRPZmZzZXQgfHwgIWluaXRpYWxDbGllbnRPZmZzZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IGNsaWVudE9mZnNldC54IC0gaW5pdGlhbENsaWVudE9mZnNldC54LFxuICAgIHk6IGNsaWVudE9mZnNldC55IC0gaW5pdGlhbENsaWVudE9mZnNldC55XG4gIH07XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL2RyYWdPZmZzZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5iZWdpbkRyYWcgPSBiZWdpbkRyYWc7XG5leHBvcnRzLnB1Ymxpc2hEcmFnU291cmNlID0gcHVibGlzaERyYWdTb3VyY2U7XG5leHBvcnRzLmhvdmVyID0gaG92ZXI7XG5leHBvcnRzLmRyb3AgPSBkcm9wO1xuZXhwb3J0cy5lbmREcmFnID0gZW5kRHJhZztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzTWF0Y2hlc1R5cGUgPSByZXF1aXJlKCcuLi91dGlscy9tYXRjaGVzVHlwZScpO1xuXG52YXIgX3V0aWxzTWF0Y2hlc1R5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNNYXRjaGVzVHlwZSk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfbG9kYXNoSXNBcnJheSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0FycmF5Jyk7XG5cbnZhciBfbG9kYXNoSXNBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc0FycmF5KTtcblxudmFyIF9sb2Rhc2hJc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc09iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzT2JqZWN0KTtcblxudmFyIEJFR0lOX0RSQUcgPSAnZG5kLWNvcmUvQkVHSU5fRFJBRyc7XG5leHBvcnRzLkJFR0lOX0RSQUcgPSBCRUdJTl9EUkFHO1xudmFyIFBVQkxJU0hfRFJBR19TT1VSQ0UgPSAnZG5kLWNvcmUvUFVCTElTSF9EUkFHX1NPVVJDRSc7XG5leHBvcnRzLlBVQkxJU0hfRFJBR19TT1VSQ0UgPSBQVUJMSVNIX0RSQUdfU09VUkNFO1xudmFyIEhPVkVSID0gJ2RuZC1jb3JlL0hPVkVSJztcbmV4cG9ydHMuSE9WRVIgPSBIT1ZFUjtcbnZhciBEUk9QID0gJ2RuZC1jb3JlL0RST1AnO1xuZXhwb3J0cy5EUk9QID0gRFJPUDtcbnZhciBFTkRfRFJBRyA9ICdkbmQtY29yZS9FTkRfRFJBRyc7XG5cbmV4cG9ydHMuRU5EX0RSQUcgPSBFTkRfRFJBRztcblxuZnVuY3Rpb24gYmVnaW5EcmFnKHNvdXJjZUlkcykge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIHZhciBfcmVmJHB1Ymxpc2hTb3VyY2UgPSBfcmVmLnB1Ymxpc2hTb3VyY2U7XG4gIHZhciBwdWJsaXNoU291cmNlID0gX3JlZiRwdWJsaXNoU291cmNlID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZiRwdWJsaXNoU291cmNlO1xuICB2YXIgX3JlZiRjbGllbnRPZmZzZXQgPSBfcmVmLmNsaWVudE9mZnNldDtcbiAgdmFyIGNsaWVudE9mZnNldCA9IF9yZWYkY2xpZW50T2Zmc2V0ID09PSB1bmRlZmluZWQgPyBudWxsIDogX3JlZiRjbGllbnRPZmZzZXQ7XG4gIHZhciBnZXRTb3VyY2VDbGllbnRPZmZzZXQgPSBfcmVmLmdldFNvdXJjZUNsaWVudE9mZnNldDtcblxuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF9sb2Rhc2hJc0FycmF5MlsnZGVmYXVsdCddKHNvdXJjZUlkcyksICdFeHBlY3RlZCBzb3VyY2VJZHMgdG8gYmUgYW4gYXJyYXkuJyk7XG5cbiAgdmFyIG1vbml0b3IgPSB0aGlzLmdldE1vbml0b3IoKTtcbiAgdmFyIHJlZ2lzdHJ5ID0gdGhpcy5nZXRSZWdpc3RyeSgpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKCFtb25pdG9yLmlzRHJhZ2dpbmcoKSwgJ0Nhbm5vdCBjYWxsIGJlZ2luRHJhZyB3aGlsZSBkcmFnZ2luZy4nKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZUlkcy5sZW5ndGg7IGkrKykge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10ocmVnaXN0cnkuZ2V0U291cmNlKHNvdXJjZUlkc1tpXSksICdFeHBlY3RlZCBzb3VyY2VJZHMgdG8gYmUgcmVnaXN0ZXJlZC4nKTtcbiAgfVxuXG4gIHZhciBzb3VyY2VJZCA9IG51bGw7XG4gIGZvciAodmFyIGkgPSBzb3VyY2VJZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAobW9uaXRvci5jYW5EcmFnU291cmNlKHNvdXJjZUlkc1tpXSkpIHtcbiAgICAgIHNvdXJjZUlkID0gc291cmNlSWRzW2ldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmIChzb3VyY2VJZCA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzb3VyY2VDbGllbnRPZmZzZXQgPSBudWxsO1xuICBpZiAoY2xpZW50T2Zmc2V0KSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID09PSAnZnVuY3Rpb24nLCAnV2hlbiBjbGllbnRPZmZzZXQgaXMgcHJvdmlkZWQsIGdldFNvdXJjZUNsaWVudE9mZnNldCBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgc291cmNlQ2xpZW50T2Zmc2V0ID0gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KHNvdXJjZUlkKTtcbiAgfVxuXG4gIHZhciBzb3VyY2UgPSByZWdpc3RyeS5nZXRTb3VyY2Uoc291cmNlSWQpO1xuICB2YXIgaXRlbSA9IHNvdXJjZS5iZWdpbkRyYWcobW9uaXRvciwgc291cmNlSWQpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF9sb2Rhc2hJc09iamVjdDJbJ2RlZmF1bHQnXShpdGVtKSwgJ0l0ZW0gbXVzdCBiZSBhbiBvYmplY3QuJyk7XG5cbiAgcmVnaXN0cnkucGluU291cmNlKHNvdXJjZUlkKTtcblxuICB2YXIgaXRlbVR5cGUgPSByZWdpc3RyeS5nZXRTb3VyY2VUeXBlKHNvdXJjZUlkKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBCRUdJTl9EUkFHLFxuICAgIGl0ZW1UeXBlOiBpdGVtVHlwZSxcbiAgICBpdGVtOiBpdGVtLFxuICAgIHNvdXJjZUlkOiBzb3VyY2VJZCxcbiAgICBjbGllbnRPZmZzZXQ6IGNsaWVudE9mZnNldCxcbiAgICBzb3VyY2VDbGllbnRPZmZzZXQ6IHNvdXJjZUNsaWVudE9mZnNldCxcbiAgICBpc1NvdXJjZVB1YmxpYzogcHVibGlzaFNvdXJjZVxuICB9O1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoRHJhZ1NvdXJjZShtYW5hZ2VyKSB7XG4gIHZhciBtb25pdG9yID0gdGhpcy5nZXRNb25pdG9yKCk7XG4gIGlmICghbW9uaXRvci5pc0RyYWdnaW5nKCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IFBVQkxJU0hfRFJBR19TT1VSQ0VcbiAgfTtcbn1cblxuZnVuY3Rpb24gaG92ZXIodGFyZ2V0SWRzKSB7XG4gIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIHZhciBfcmVmMiRjbGllbnRPZmZzZXQgPSBfcmVmMi5jbGllbnRPZmZzZXQ7XG4gIHZhciBjbGllbnRPZmZzZXQgPSBfcmVmMiRjbGllbnRPZmZzZXQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcmVmMiRjbGllbnRPZmZzZXQ7XG5cbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNBcnJheTJbJ2RlZmF1bHQnXSh0YXJnZXRJZHMpLCAnRXhwZWN0ZWQgdGFyZ2V0SWRzIHRvIGJlIGFuIGFycmF5LicpO1xuICB0YXJnZXRJZHMgPSB0YXJnZXRJZHMuc2xpY2UoMCk7XG5cbiAgdmFyIG1vbml0b3IgPSB0aGlzLmdldE1vbml0b3IoKTtcbiAgdmFyIHJlZ2lzdHJ5ID0gdGhpcy5nZXRSZWdpc3RyeSgpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKG1vbml0b3IuaXNEcmFnZ2luZygpLCAnQ2Fubm90IGNhbGwgaG92ZXIgd2hpbGUgbm90IGRyYWdnaW5nLicpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKCFtb25pdG9yLmRpZERyb3AoKSwgJ0Nhbm5vdCBjYWxsIGhvdmVyIGFmdGVyIGRyb3AuJyk7XG5cbiAgLy8gRmlyc3QgY2hlY2sgaW52YXJpYW50cy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXJnZXRJZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdGFyZ2V0SWQgPSB0YXJnZXRJZHNbaV07XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0YXJnZXRJZHMubGFzdEluZGV4T2YodGFyZ2V0SWQpID09PSBpLCAnRXhwZWN0ZWQgdGFyZ2V0SWRzIHRvIGJlIHVuaXF1ZSBpbiB0aGUgcGFzc2VkIGFycmF5LicpO1xuXG4gICAgdmFyIHRhcmdldCA9IHJlZ2lzdHJ5LmdldFRhcmdldCh0YXJnZXRJZCk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0YXJnZXQsICdFeHBlY3RlZCB0YXJnZXRJZHMgdG8gYmUgcmVnaXN0ZXJlZC4nKTtcbiAgfVxuXG4gIHZhciBkcmFnZ2VkSXRlbVR5cGUgPSBtb25pdG9yLmdldEl0ZW1UeXBlKCk7XG5cbiAgLy8gUmVtb3ZlIHRob3NlIHRhcmdldElkcyB0aGF0IGRvbid0IG1hdGNoIHRoZSB0YXJnZXRUeXBlLiAgVGhpc1xuICAvLyBmaXhlcyBzaGFsbG93IGlzT3ZlciB3aGljaCB3b3VsZCBvbmx5IGJlIG5vbi1zaGFsbG93IGJlY2F1c2Ugb2ZcbiAgLy8gbm9uLW1hdGNoaW5nIHRhcmdldHMuXG4gIGZvciAodmFyIGkgPSB0YXJnZXRJZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgdGFyZ2V0SWQgPSB0YXJnZXRJZHNbaV07XG4gICAgdmFyIHRhcmdldFR5cGUgPSByZWdpc3RyeS5nZXRUYXJnZXRUeXBlKHRhcmdldElkKTtcbiAgICBpZiAoIV91dGlsc01hdGNoZXNUeXBlMlsnZGVmYXVsdCddKHRhcmdldFR5cGUsIGRyYWdnZWRJdGVtVHlwZSkpIHtcbiAgICAgIHRhcmdldElkcy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmluYWxseSBjYWxsIGhvdmVyIG9uIGFsbCBtYXRjaGluZyB0YXJnZXRzLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldElkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0YXJnZXRJZCA9IHRhcmdldElkc1tpXTtcbiAgICB2YXIgdGFyZ2V0ID0gcmVnaXN0cnkuZ2V0VGFyZ2V0KHRhcmdldElkKTtcbiAgICB0YXJnZXQuaG92ZXIobW9uaXRvciwgdGFyZ2V0SWQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBIT1ZFUixcbiAgICB0YXJnZXRJZHM6IHRhcmdldElkcyxcbiAgICBjbGllbnRPZmZzZXQ6IGNsaWVudE9mZnNldFxuICB9O1xufVxuXG5mdW5jdGlvbiBkcm9wKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBtb25pdG9yID0gdGhpcy5nZXRNb25pdG9yKCk7XG4gIHZhciByZWdpc3RyeSA9IHRoaXMuZ2V0UmVnaXN0cnkoKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShtb25pdG9yLmlzRHJhZ2dpbmcoKSwgJ0Nhbm5vdCBjYWxsIGRyb3Agd2hpbGUgbm90IGRyYWdnaW5nLicpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKCFtb25pdG9yLmRpZERyb3AoKSwgJ0Nhbm5vdCBjYWxsIGRyb3AgdHdpY2UgZHVyaW5nIG9uZSBkcmFnIG9wZXJhdGlvbi4nKTtcblxuICB2YXIgdGFyZ2V0SWRzID0gbW9uaXRvci5nZXRUYXJnZXRJZHMoKS5maWx0ZXIobW9uaXRvci5jYW5Ecm9wT25UYXJnZXQsIG1vbml0b3IpO1xuXG4gIHRhcmdldElkcy5yZXZlcnNlKCk7XG4gIHRhcmdldElkcy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRJZCwgaW5kZXgpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcmVnaXN0cnkuZ2V0VGFyZ2V0KHRhcmdldElkKTtcblxuICAgIHZhciBkcm9wUmVzdWx0ID0gdGFyZ2V0LmRyb3AobW9uaXRvciwgdGFyZ2V0SWQpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGRyb3BSZXN1bHQgPT09ICd1bmRlZmluZWQnIHx8IF9sb2Rhc2hJc09iamVjdDJbJ2RlZmF1bHQnXShkcm9wUmVzdWx0KSwgJ0Ryb3AgcmVzdWx0IG11c3QgZWl0aGVyIGJlIGFuIG9iamVjdCBvciB1bmRlZmluZWQuJyk7XG4gICAgaWYgKHR5cGVvZiBkcm9wUmVzdWx0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZHJvcFJlc3VsdCA9IGluZGV4ID09PSAwID8ge30gOiBtb25pdG9yLmdldERyb3BSZXN1bHQoKTtcbiAgICB9XG5cbiAgICBfdGhpcy5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBEUk9QLFxuICAgICAgZHJvcFJlc3VsdDogZHJvcFJlc3VsdFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5kRHJhZygpIHtcbiAgdmFyIG1vbml0b3IgPSB0aGlzLmdldE1vbml0b3IoKTtcbiAgdmFyIHJlZ2lzdHJ5ID0gdGhpcy5nZXRSZWdpc3RyeSgpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKG1vbml0b3IuaXNEcmFnZ2luZygpLCAnQ2Fubm90IGNhbGwgZW5kRHJhZyB3aGlsZSBub3QgZHJhZ2dpbmcuJyk7XG5cbiAgdmFyIHNvdXJjZUlkID0gbW9uaXRvci5nZXRTb3VyY2VJZCgpO1xuICB2YXIgc291cmNlID0gcmVnaXN0cnkuZ2V0U291cmNlKHNvdXJjZUlkLCB0cnVlKTtcbiAgc291cmNlLmVuZERyYWcobW9uaXRvciwgc291cmNlSWQpO1xuXG4gIHJlZ2lzdHJ5LnVucGluU291cmNlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBFTkRfRFJBR1xuICB9O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9hY3Rpb25zL2RyYWdEcm9wLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IG1hdGNoZXNUeXBlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfbG9kYXNoSXNBcnJheSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0FycmF5Jyk7XG5cbnZhciBfbG9kYXNoSXNBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc0FycmF5KTtcblxuZnVuY3Rpb24gbWF0Y2hlc1R5cGUodGFyZ2V0VHlwZSwgZHJhZ2dlZEl0ZW1UeXBlKSB7XG4gIGlmIChfbG9kYXNoSXNBcnJheTJbJ2RlZmF1bHQnXSh0YXJnZXRUeXBlKSkge1xuICAgIHJldHVybiB0YXJnZXRUeXBlLnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0ID09PSBkcmFnZ2VkSXRlbVR5cGU7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRhcmdldFR5cGUgPT09IGRyYWdnZWRJdGVtVHlwZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvdXRpbHMvbWF0Y2hlc1R5cGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ludmFyaWFudC9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdCBkb24ndCBicmVhayB0aGluZ3MuXG52YXIgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuXG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBjYWNoZWRTZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZHJhZ09wZXJhdGlvbjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2FjdGlvbnNEcmFnRHJvcCA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZHJhZ0Ryb3AnKTtcblxudmFyIF9hY3Rpb25zUmVnaXN0cnkgPSByZXF1aXJlKCcuLi9hY3Rpb25zL3JlZ2lzdHJ5Jyk7XG5cbnZhciBfbG9kYXNoV2l0aG91dCA9IHJlcXVpcmUoJ2xvZGFzaC93aXRob3V0Jyk7XG5cbnZhciBfbG9kYXNoV2l0aG91dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hXaXRob3V0KTtcblxudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgaXRlbVR5cGU6IG51bGwsXG4gIGl0ZW06IG51bGwsXG4gIHNvdXJjZUlkOiBudWxsLFxuICB0YXJnZXRJZHM6IFtdLFxuICBkcm9wUmVzdWx0OiBudWxsLFxuICBkaWREcm9wOiBmYWxzZSxcbiAgaXNTb3VyY2VQdWJsaWM6IG51bGxcbn07XG5cbmZ1bmN0aW9uIGRyYWdPcGVyYXRpb24oc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5CRUdJTl9EUkFHOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtVHlwZTogYWN0aW9uLml0ZW1UeXBlLFxuICAgICAgICBpdGVtOiBhY3Rpb24uaXRlbSxcbiAgICAgICAgc291cmNlSWQ6IGFjdGlvbi5zb3VyY2VJZCxcbiAgICAgICAgaXNTb3VyY2VQdWJsaWM6IGFjdGlvbi5pc1NvdXJjZVB1YmxpYyxcbiAgICAgICAgZHJvcFJlc3VsdDogbnVsbCxcbiAgICAgICAgZGlkRHJvcDogZmFsc2VcbiAgICAgIH0pO1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5QVUJMSVNIX0RSQUdfU09VUkNFOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1NvdXJjZVB1YmxpYzogdHJ1ZVxuICAgICAgfSk7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkhPVkVSOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICB0YXJnZXRJZHM6IGFjdGlvbi50YXJnZXRJZHNcbiAgICAgIH0pO1xuICAgIGNhc2UgX2FjdGlvbnNSZWdpc3RyeS5SRU1PVkVfVEFSR0VUOlxuICAgICAgaWYgKHN0YXRlLnRhcmdldElkcy5pbmRleE9mKGFjdGlvbi50YXJnZXRJZCkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgdGFyZ2V0SWRzOiBfbG9kYXNoV2l0aG91dDJbJ2RlZmF1bHQnXShzdGF0ZS50YXJnZXRJZHMsIGFjdGlvbi50YXJnZXRJZClcbiAgICAgIH0pO1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5EUk9QOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBkcm9wUmVzdWx0OiBhY3Rpb24uZHJvcFJlc3VsdCxcbiAgICAgICAgZGlkRHJvcDogdHJ1ZSxcbiAgICAgICAgdGFyZ2V0SWRzOiBbXVxuICAgICAgfSk7XG4gICAgY2FzZSBfYWN0aW9uc0RyYWdEcm9wLkVORF9EUkFHOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtVHlwZTogbnVsbCxcbiAgICAgICAgaXRlbTogbnVsbCxcbiAgICAgICAgc291cmNlSWQ6IG51bGwsXG4gICAgICAgIGRyb3BSZXN1bHQ6IG51bGwsXG4gICAgICAgIGRpZERyb3A6IGZhbHNlLFxuICAgICAgICBpc1NvdXJjZVB1YmxpYzogbnVsbCxcbiAgICAgICAgdGFyZ2V0SWRzOiBbXVxuICAgICAgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvZHJhZ09wZXJhdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmFkZFNvdXJjZSA9IGFkZFNvdXJjZTtcbmV4cG9ydHMuYWRkVGFyZ2V0ID0gYWRkVGFyZ2V0O1xuZXhwb3J0cy5yZW1vdmVTb3VyY2UgPSByZW1vdmVTb3VyY2U7XG5leHBvcnRzLnJlbW92ZVRhcmdldCA9IHJlbW92ZVRhcmdldDtcbnZhciBBRERfU09VUkNFID0gJ2RuZC1jb3JlL0FERF9TT1VSQ0UnO1xuZXhwb3J0cy5BRERfU09VUkNFID0gQUREX1NPVVJDRTtcbnZhciBBRERfVEFSR0VUID0gJ2RuZC1jb3JlL0FERF9UQVJHRVQnO1xuZXhwb3J0cy5BRERfVEFSR0VUID0gQUREX1RBUkdFVDtcbnZhciBSRU1PVkVfU09VUkNFID0gJ2RuZC1jb3JlL1JFTU9WRV9TT1VSQ0UnO1xuZXhwb3J0cy5SRU1PVkVfU09VUkNFID0gUkVNT1ZFX1NPVVJDRTtcbnZhciBSRU1PVkVfVEFSR0VUID0gJ2RuZC1jb3JlL1JFTU9WRV9UQVJHRVQnO1xuXG5leHBvcnRzLlJFTU9WRV9UQVJHRVQgPSBSRU1PVkVfVEFSR0VUO1xuXG5mdW5jdGlvbiBhZGRTb3VyY2Uoc291cmNlSWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBRERfU09VUkNFLFxuICAgIHNvdXJjZUlkOiBzb3VyY2VJZFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRUYXJnZXQodGFyZ2V0SWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBRERfVEFSR0VULFxuICAgIHRhcmdldElkOiB0YXJnZXRJZFxuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVTb3VyY2Uoc291cmNlSWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRU1PVkVfU09VUkNFLFxuICAgIHNvdXJjZUlkOiBzb3VyY2VJZFxuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXJnZXQodGFyZ2V0SWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRU1PVkVfVEFSR0VULFxuICAgIHRhcmdldElkOiB0YXJnZXRJZFxuICB9O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9hY3Rpb25zL3JlZ2lzdHJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlRGlmZmVyZW5jZSA9IHJlcXVpcmUoJy4vX2Jhc2VEaWZmZXJlbmNlJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgZXhjbHVkaW5nIGFsbCBnaXZlbiB2YWx1ZXMgdXNpbmdcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Li4uKn0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBleGNsdWRlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzLlxuICogQHNlZSBfLmRpZmZlcmVuY2UsIF8ueG9yXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ud2l0aG91dChbMiwgMSwgMiwgM10sIDEsIDIpO1xuICogLy8gPT4gWzNdXG4gKi9cbnZhciB3aXRob3V0ID0gcmVzdChmdW5jdGlvbihhcnJheSwgdmFsdWVzKSB7XG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdChhcnJheSlcbiAgICA/IGJhc2VEaWZmZXJlbmNlKGFycmF5LCB2YWx1ZXMpXG4gICAgOiBbXTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhvdXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvd2l0aG91dC5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgbWV0aG9kcyBsaWtlIGBfLmRpZmZlcmVuY2VgIHdpdGhvdXQgc3VwcG9ydFxuICogZm9yIGV4Y2x1ZGluZyBtdWx0aXBsZSBhcnJheXMgb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBleGNsdWRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBiYXNlRGlmZmVyZW5jZShhcnJheSwgdmFsdWVzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgdmFsdWVzTGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcblxuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgdmFsdWVzID0gYXJyYXlNYXAodmFsdWVzLCBiYXNlVW5hcnkoaXRlcmF0ZWUpKTtcbiAgfVxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgfVxuICBlbHNlIGlmICh2YWx1ZXMubGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgdmFsdWVzID0gbmV3IFNldENhY2hlKHZhbHVlcyk7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgdmFsdWVzSW5kZXggPSB2YWx1ZXNMZW5ndGg7XG4gICAgICB3aGlsZSAodmFsdWVzSW5kZXgtLSkge1xuICAgICAgICBpZiAodmFsdWVzW3ZhbHVlc0luZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXModmFsdWVzLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRGlmZmVyZW5jZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYmFzZURpZmZlcmVuY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA/IHZhbHVlcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19TZXRDYWNoZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fSGFzaC5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNIb3N0T2JqZWN0ID0gcmVxdWlyZSgnLi9faXNIb3N0T2JqZWN0JyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCB3ZWFrIG1hcCBjb25zdHJ1Y3RvcnMsXG4gIC8vIGFuZCBQaGFudG9tSlMgMS45IHdoaWNoIHJldHVybnMgJ2Z1bmN0aW9uJyBmb3IgYE5vZGVMaXN0YCBpbnN0YW5jZXMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNoZWNrR2xvYmFsID0gcmVxdWlyZSgnLi9fY2hlY2tHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gY2hlY2tHbG9iYWwodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gY2hlY2tHbG9iYWwodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZik7XG5cbi8qKiBEZXRlY3QgYHRoaXNgIGFzIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHRoaXNHbG9iYWwgPSBjaGVja0dsb2JhbCh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKTtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgdGhpc0dsb2JhbCB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX3Jvb3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGdsb2JhbCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge251bGx8T2JqZWN0fSBSZXR1cm5zIGB2YWx1ZWAgaWYgaXQncyBhIGdsb2JhbCBvYmplY3QsIGVsc2UgYG51bGxgLlxuICovXG5mdW5jdGlvbiBjaGVja0dsb2JhbCh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLk9iamVjdCA9PT0gT2JqZWN0KSA/IHZhbHVlIDogbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja0dsb2JhbDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fY2hlY2tHbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL190b1NvdXJjZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19oYXNoR2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyBkYXRhW2tleV0gIT09IHVuZGVmaW5lZCA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19oYXNoSGFzLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faGFzaFNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICogdmFyIG90aGVyID0geyAndXNlcic6ICdmcmVkJyB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvZXEuanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fTWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanNcbiAqKiBtb2R1bGUgaWQgPSA2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIGdldE1hcERhdGEodGhpcywga2V5KS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19tYXBDYWNoZVNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuICByZXR1cm4gISFsZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGluZGV4T2ZOYU4gPSByZXF1aXJlKCcuL19pbmRleE9mTmFOJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgaWYgKHZhbHVlICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBpbmRleE9mTmFOKGFycmF5LCBmcm9tSW5kZXgpO1xuICB9XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzXG4gKiogbW9kdWxlIGlkID0gNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYE5hTmAgaXMgZm91bmQgaW4gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCBgTmFOYCwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBpbmRleE9mTmFOKGFycmF5LCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIHZhciBvdGhlciA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAob3RoZXIgIT09IG90aGVyKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbmRleE9mTmFOO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19pbmRleE9mTmFOLmpzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDAsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hcnJheU1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3Jpbmcgd3JhcHBlciBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBhIGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzXG4gKiogbW9kdWxlIGlkID0gNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldExlbmd0aCA9IHJlcXVpcmUoJy4vX2dldExlbmd0aCcpLFxuICAgIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4gKiogbW9kdWxlIGlkID0gNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHknKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBcImxlbmd0aFwiIHByb3BlcnR5IHZhbHVlIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXZvaWQgYVxuICogW0pJVCBidWddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI3OTIpIHRoYXQgYWZmZWN0c1xuICogU2FmYXJpIG9uIGF0IGxlYXN0IGlPUyA4LjEtOC4zIEFSTTY0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgXCJsZW5ndGhcIiB2YWx1ZS5cbiAqL1xudmFyIGdldExlbmd0aCA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TGVuZ3RoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19nZXRMZW5ndGguanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhcHBseSA9IHJlcXVpcmUoJy4vX2FwcGx5JyksXG4gICAgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi90b0ludGVnZXInKTtcblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGVcbiAqIGNyZWF0ZWQgZnVuY3Rpb24gYW5kIGFyZ3VtZW50cyBmcm9tIGBzdGFydGAgYW5kIGJleW9uZCBwcm92aWRlZCBhc1xuICogYW4gYXJyYXkuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGJhc2VkIG9uIHRoZVxuICogW3Jlc3QgcGFyYW1ldGVyXShodHRwczovL21kbi5pby9yZXN0X3BhcmFtZXRlcnMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgc2F5ID0gXy5yZXN0KGZ1bmN0aW9uKHdoYXQsIG5hbWVzKSB7XG4gKiAgIHJldHVybiB3aGF0ICsgJyAnICsgXy5pbml0aWFsKG5hbWVzKS5qb2luKCcsICcpICtcbiAqICAgICAoXy5zaXplKG5hbWVzKSA+IDEgPyAnLCAmICcgOiAnJykgKyBfLmxhc3QobmFtZXMpO1xuICogfSk7XG4gKlxuICogc2F5KCdoZWxsbycsICdmcmVkJywgJ2Jhcm5leScsICdwZWJibGVzJyk7XG4gKiAvLyA9PiAnaGVsbG8gZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnXG4gKi9cbmZ1bmN0aW9uIHJlc3QoZnVuYywgc3RhcnQpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogdG9JbnRlZ2VyKHN0YXJ0KSwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgc3dpdGNoIChzdGFydCkge1xuICAgICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFycmF5KTtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmdzWzBdLCBhcnJheSk7XG4gICAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJnc1swXSwgYXJnc1sxXSwgYXJyYXkpO1xuICAgIH1cbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICBpbmRleCA9IC0xO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IGFycmF5O1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvcmVzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHZhciBsZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2FwcGx5LmpzXG4gKiogbW9kdWxlIGlkID0gODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b0Zpbml0ZSA9IHJlcXVpcmUoJy4vdG9GaW5pdGUnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIGludGVnZXIuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9JbnRlZ2VyYF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvaW50ZWdlcikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgaW50ZWdlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0ludGVnZXIoMy4yKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnRvSW50ZWdlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDBcbiAqXG4gKiBfLnRvSW50ZWdlcihJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9JbnRlZ2VyKCczLjInKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9JbnRlZ2VyKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSB0b0Zpbml0ZSh2YWx1ZSksXG4gICAgICByZW1haW5kZXIgPSByZXN1bHQgJSAxO1xuXG4gIHJldHVybiByZXN1bHQgPT09IHJlc3VsdCA/IChyZW1haW5kZXIgPyByZXN1bHQgLSByZW1haW5kZXIgOiByZXN1bHQpIDogMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0ludGVnZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvdG9JbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMCxcbiAgICBNQVhfSU5URUdFUiA9IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBmaW5pdGUgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9GaW5pdGUoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9GaW5pdGUoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvRmluaXRlKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0Zpbml0ZSgnMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9GaW5pdGUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogMDtcbiAgfVxuICB2YWx1ZSA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKHZhbHVlID09PSBJTkZJTklUWSB8fCB2YWx1ZSA9PT0gLUlORklOSVRZKSB7XG4gICAgdmFyIHNpZ24gPSAodmFsdWUgPCAwID8gLTEgOiAxKTtcbiAgICByZXR1cm4gc2lnbiAqIE1BWF9JTlRFR0VSO1xuICB9XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyB2YWx1ZSA6IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9GaW5pdGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvdG9GaW5pdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA4NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IGlzRnVuY3Rpb24odmFsdWUudmFsdWVPZikgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL3RvTnVtYmVyLmpzXG4gKiogbW9kdWxlIGlkID0gODVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNTeW1ib2wuanNcbiAqKiBtb2R1bGUgaWQgPSA4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gcmVmQ291bnQ7XG5cbnZhciBfYWN0aW9uc1JlZ2lzdHJ5ID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9yZWdpc3RyeScpO1xuXG5mdW5jdGlvbiByZWZDb3VudChzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSBzdGF0ZSA9IDA7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgX2FjdGlvbnNSZWdpc3RyeS5BRERfU09VUkNFOlxuICAgIGNhc2UgX2FjdGlvbnNSZWdpc3RyeS5BRERfVEFSR0VUOlxuICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuUkVNT1ZFX1NPVVJDRTpcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuUkVNT1ZFX1RBUkdFVDpcbiAgICAgIHJldHVybiBzdGF0ZSAtIDE7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvcmVkdWNlcnMvcmVmQ291bnQuanNcbiAqKiBtb2R1bGUgaWQgPSA4N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZGlydHlIYW5kbGVySWRzO1xuZXhwb3J0cy5hcmVEaXJ0eSA9IGFyZURpcnR5O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfbG9kYXNoWG9yID0gcmVxdWlyZSgnbG9kYXNoL3hvcicpO1xuXG52YXIgX2xvZGFzaFhvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hYb3IpO1xuXG52YXIgX2xvZGFzaEludGVyc2VjdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pbnRlcnNlY3Rpb24nKTtcblxudmFyIF9sb2Rhc2hJbnRlcnNlY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSW50ZXJzZWN0aW9uKTtcblxudmFyIF9hY3Rpb25zRHJhZ0Ryb3AgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2RyYWdEcm9wJyk7XG5cbnZhciBfYWN0aW9uc1JlZ2lzdHJ5ID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9yZWdpc3RyeScpO1xuXG52YXIgTk9ORSA9IFtdO1xudmFyIEFMTCA9IFtdO1xuXG5mdW5jdGlvbiBkaXJ0eUhhbmRsZXJJZHMoc3RhdGUsIGFjdGlvbiwgZHJhZ09wZXJhdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgc3RhdGUgPSBOT05FO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuSE9WRVI6XG4gICAgICBicmVhaztcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuQUREX1NPVVJDRTpcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuQUREX1RBUkdFVDpcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuUkVNT1ZFX1RBUkdFVDpcbiAgICBjYXNlIF9hY3Rpb25zUmVnaXN0cnkuUkVNT1ZFX1NPVVJDRTpcbiAgICAgIHJldHVybiBOT05FO1xuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5CRUdJTl9EUkFHOlxuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5QVUJMSVNIX0RSQUdfU09VUkNFOlxuICAgIGNhc2UgX2FjdGlvbnNEcmFnRHJvcC5FTkRfRFJBRzpcbiAgICBjYXNlIF9hY3Rpb25zRHJhZ0Ryb3AuRFJPUDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEFMTDtcbiAgfVxuXG4gIHZhciB0YXJnZXRJZHMgPSBhY3Rpb24udGFyZ2V0SWRzO1xuICB2YXIgcHJldlRhcmdldElkcyA9IGRyYWdPcGVyYXRpb24udGFyZ2V0SWRzO1xuXG4gIHZhciBkaXJ0eUhhbmRsZXJJZHMgPSBfbG9kYXNoWG9yMlsnZGVmYXVsdCddKHRhcmdldElkcywgcHJldlRhcmdldElkcyk7XG5cbiAgdmFyIGRpZENoYW5nZSA9IGZhbHNlO1xuICBpZiAoZGlydHlIYW5kbGVySWRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0SWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGFyZ2V0SWRzW2ldICE9PSBwcmV2VGFyZ2V0SWRzW2ldKSB7XG4gICAgICAgIGRpZENoYW5nZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkaWRDaGFuZ2UgPSB0cnVlO1xuICB9XG5cbiAgaWYgKCFkaWRDaGFuZ2UpIHtcbiAgICByZXR1cm4gTk9ORTtcbiAgfVxuXG4gIHZhciBwcmV2SW5uZXJtb3N0VGFyZ2V0SWQgPSBwcmV2VGFyZ2V0SWRzW3ByZXZUYXJnZXRJZHMubGVuZ3RoIC0gMV07XG4gIHZhciBpbm5lcm1vc3RUYXJnZXRJZCA9IHRhcmdldElkc1t0YXJnZXRJZHMubGVuZ3RoIC0gMV07XG5cbiAgaWYgKHByZXZJbm5lcm1vc3RUYXJnZXRJZCAhPT0gaW5uZXJtb3N0VGFyZ2V0SWQpIHtcbiAgICBpZiAocHJldklubmVybW9zdFRhcmdldElkKSB7XG4gICAgICBkaXJ0eUhhbmRsZXJJZHMucHVzaChwcmV2SW5uZXJtb3N0VGFyZ2V0SWQpO1xuICAgIH1cbiAgICBpZiAoaW5uZXJtb3N0VGFyZ2V0SWQpIHtcbiAgICAgIGRpcnR5SGFuZGxlcklkcy5wdXNoKGlubmVybW9zdFRhcmdldElkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlydHlIYW5kbGVySWRzO1xufVxuXG5mdW5jdGlvbiBhcmVEaXJ0eShzdGF0ZSwgaGFuZGxlcklkcykge1xuICBpZiAoc3RhdGUgPT09IE5PTkUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc3RhdGUgPT09IEFMTCB8fCB0eXBlb2YgaGFuZGxlcklkcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfbG9kYXNoSW50ZXJzZWN0aW9uMlsnZGVmYXVsdCddKGhhbmRsZXJJZHMsIHN0YXRlKS5sZW5ndGggPiAwO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9yZWR1Y2Vycy9kaXJ0eUhhbmRsZXJJZHMuanNcbiAqKiBtb2R1bGUgaWQgPSA4OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBiYXNlWG9yID0gcmVxdWlyZSgnLi9fYmFzZVhvcicpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHVuaXF1ZSB2YWx1ZXMgdGhhdCBpcyB0aGVcbiAqIFtzeW1tZXRyaWMgZGlmZmVyZW5jZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3ltbWV0cmljX2RpZmZlcmVuY2UpXG4gKiBvZiB0aGUgZ2l2ZW4gYXJyYXlzLiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlclxuICogdGhleSBvY2N1ciBpbiB0aGUgYXJyYXlzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzLlxuICogQHNlZSBfLmRpZmZlcmVuY2UsIF8ud2l0aG91dFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnhvcihbMiwgMV0sIFsyLCAzXSk7XG4gKiAvLyA9PiBbMSwgM11cbiAqL1xudmFyIHhvciA9IHJlc3QoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHJldHVybiBiYXNlWG9yKGFycmF5RmlsdGVyKGFycmF5cywgaXNBcnJheUxpa2VPYmplY3QpKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHhvcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC94b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA4OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDAsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA5MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGJhc2VEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi9fYmFzZURpZmZlcmVuY2UnKSxcbiAgICBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgbWV0aG9kcyBsaWtlIGBfLnhvcmAsIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMsIHRoYXQgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgdG8gaW5zcGVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlzIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gYmFzZVhvcihhcnJheXMsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXlzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciByZXN1bHQgPSByZXN1bHRcbiAgICAgID8gYXJyYXlQdXNoKFxuICAgICAgICAgIGJhc2VEaWZmZXJlbmNlKHJlc3VsdCwgYXJyYXlzW2luZGV4XSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpLFxuICAgICAgICAgIGJhc2VEaWZmZXJlbmNlKGFycmF5c1tpbmRleF0sIHJlc3VsdCwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpXG4gICAgICAgIClcbiAgICAgIDogYXJyYXlzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoKSA/IGJhc2VVbmlxKHJlc3VsdCwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVhvcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYmFzZVhvci5qc1xuICoqIG1vZHVsZSBpZCA9IDkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19hcnJheVB1c2guanNcbiAqKiBtb2R1bGUgaWQgPSA5MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXG4gICAgY3JlYXRlU2V0ID0gcmVxdWlyZSgnLi9fY3JlYXRlU2V0JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBzZWVuID0gcmVzdWx0O1xuXG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICB9XG4gIGVsc2UgaWYgKGxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgdmFyIHNldCA9IGl0ZXJhdGVlID8gbnVsbCA6IGNyZWF0ZVNldChhcnJheSk7XG4gICAgaWYgKHNldCkge1xuICAgICAgcmV0dXJuIHNldFRvQXJyYXkoc2V0KTtcbiAgICB9XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIHNlZW4gPSBuZXcgU2V0Q2FjaGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcbiAgICAgICAgaWYgKHNlZW5bc2VlbkluZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyhzZWVuLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fYmFzZVVuaXEuanNcbiAqKiBtb2R1bGUgaWQgPSA5M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgYHZhbHVlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFkZCB0byB0aGUgc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IHNldC5cbiAqL1xudmFyIGNyZWF0ZVNldCA9ICEoU2V0ICYmICgxIC8gc2V0VG9BcnJheShuZXcgU2V0KFssLTBdKSlbMV0pID09IElORklOSVRZKSA/IG5vb3AgOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBTZXQodmFsdWVzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19jcmVhdGVTZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA5NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fU2V0LmpzXG4gKiogbW9kdWxlIGlkID0gOTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQSBtZXRob2QgdGhhdCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL25vb3AuanNcbiAqKiBtb2R1bGUgaWQgPSA5NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gOTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoJy4vX2Jhc2VJbnRlcnNlY3Rpb24nKSxcbiAgICBjYXN0QXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9fY2FzdEFycmF5TGlrZU9iamVjdCcpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHVuaXF1ZSB2YWx1ZXMgdGhhdCBhcmUgaW5jbHVkZWQgaW4gYWxsIGdpdmVuIGFycmF5c1xuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXMgZGV0ZXJtaW5lZCBieSB0aGVcbiAqIG9yZGVyIHRoZXkgb2NjdXIgaW4gdGhlIGZpcnN0IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgaW50ZXJzZWN0aW5nIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pbnRlcnNlY3Rpb24oWzIsIDFdLCBbMiwgM10pO1xuICogLy8gPT4gWzJdXG4gKi9cbnZhciBpbnRlcnNlY3Rpb24gPSByZXN0KGZ1bmN0aW9uKGFycmF5cykge1xuICB2YXIgbWFwcGVkID0gYXJyYXlNYXAoYXJyYXlzLCBjYXN0QXJyYXlMaWtlT2JqZWN0KTtcbiAgcmV0dXJuIChtYXBwZWQubGVuZ3RoICYmIG1hcHBlZFswXSA9PT0gYXJyYXlzWzBdKVxuICAgID8gYmFzZUludGVyc2VjdGlvbihtYXBwZWQpXG4gICAgOiBbXTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludGVyc2VjdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcnNlY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA5OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgbWV0aG9kcyBsaWtlIGBfLmludGVyc2VjdGlvbmAsIHdpdGhvdXQgc3VwcG9ydFxuICogZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMsIHRoYXQgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgdG8gaW5zcGVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXlzIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIHNoYXJlZCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbnRlcnNlY3Rpb24oYXJyYXlzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5jbHVkZXMgPSBjb21wYXJhdG9yID8gYXJyYXlJbmNsdWRlc1dpdGggOiBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXlzWzBdLmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IGFycmF5cy5sZW5ndGgsXG4gICAgICBvdGhJbmRleCA9IG90aExlbmd0aCxcbiAgICAgIGNhY2hlcyA9IEFycmF5KG90aExlbmd0aCksXG4gICAgICBtYXhMZW5ndGggPSBJbmZpbml0eSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlIChvdGhJbmRleC0tKSB7XG4gICAgdmFyIGFycmF5ID0gYXJyYXlzW290aEluZGV4XTtcbiAgICBpZiAob3RoSW5kZXggJiYgaXRlcmF0ZWUpIHtcbiAgICAgIGFycmF5ID0gYXJyYXlNYXAoYXJyYXksIGJhc2VVbmFyeShpdGVyYXRlZSkpO1xuICAgIH1cbiAgICBtYXhMZW5ndGggPSBuYXRpdmVNaW4oYXJyYXkubGVuZ3RoLCBtYXhMZW5ndGgpO1xuICAgIGNhY2hlc1tvdGhJbmRleF0gPSAhY29tcGFyYXRvciAmJiAoaXRlcmF0ZWUgfHwgKGxlbmd0aCA+PSAxMjAgJiYgYXJyYXkubGVuZ3RoID49IDEyMCkpXG4gICAgICA/IG5ldyBTZXRDYWNoZShvdGhJbmRleCAmJiBhcnJheSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG4gIGFycmF5ID0gYXJyYXlzWzBdO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgc2VlbiA9IGNhY2hlc1swXTtcblxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGggJiYgcmVzdWx0Lmxlbmd0aCA8IG1heExlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKCEoc2VlblxuICAgICAgICAgID8gY2FjaGVIYXMoc2VlbiwgY29tcHV0ZWQpXG4gICAgICAgICAgOiBpbmNsdWRlcyhyZXN1bHQsIGNvbXB1dGVkLCBjb21wYXJhdG9yKVxuICAgICAgICApKSB7XG4gICAgICBvdGhJbmRleCA9IG90aExlbmd0aDtcbiAgICAgIHdoaWxlICgtLW90aEluZGV4KSB7XG4gICAgICAgIHZhciBjYWNoZSA9IGNhY2hlc1tvdGhJbmRleF07XG4gICAgICAgIGlmICghKGNhY2hlXG4gICAgICAgICAgICAgID8gY2FjaGVIYXMoY2FjaGUsIGNvbXB1dGVkKVxuICAgICAgICAgICAgICA6IGluY2x1ZGVzKGFycmF5c1tvdGhJbmRleF0sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2Vlbikge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbnRlcnNlY3Rpb247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Jhc2VJbnRlcnNlY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA5OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYW4gZW1wdHkgYXJyYXkgaWYgaXQncyBub3QgYW4gYXJyYXkgbGlrZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fSBSZXR1cm5zIHRoZSBjYXN0IGFycmF5LWxpa2Ugb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjYXN0QXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2Nhc3RBcnJheUxpa2VPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzdGF0ZUlkO1xuXG5mdW5jdGlvbiBzdGF0ZUlkKCkge1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzBdO1xuXG4gIHJldHVybiBzdGF0ZSArIDE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL3JlZHVjZXJzL3N0YXRlSWQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF91dGlsc01hdGNoZXNUeXBlID0gcmVxdWlyZSgnLi91dGlscy9tYXRjaGVzVHlwZScpO1xuXG52YXIgX3V0aWxzTWF0Y2hlc1R5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNNYXRjaGVzVHlwZSk7XG5cbnZhciBfbG9kYXNoSXNBcnJheSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0FycmF5Jyk7XG5cbnZhciBfbG9kYXNoSXNBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc0FycmF5KTtcblxudmFyIF9IYW5kbGVyUmVnaXN0cnkgPSByZXF1aXJlKCcuL0hhbmRsZXJSZWdpc3RyeScpO1xuXG52YXIgX0hhbmRsZXJSZWdpc3RyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IYW5kbGVyUmVnaXN0cnkpO1xuXG52YXIgX3JlZHVjZXJzRHJhZ09mZnNldCA9IHJlcXVpcmUoJy4vcmVkdWNlcnMvZHJhZ09mZnNldCcpO1xuXG52YXIgX3JlZHVjZXJzRGlydHlIYW5kbGVySWRzID0gcmVxdWlyZSgnLi9yZWR1Y2Vycy9kaXJ0eUhhbmRsZXJJZHMnKTtcblxudmFyIERyYWdEcm9wTW9uaXRvciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERyYWdEcm9wTW9uaXRvcihzdG9yZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnRHJvcE1vbml0b3IpO1xuXG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMucmVnaXN0cnkgPSBuZXcgX0hhbmRsZXJSZWdpc3RyeTJbJ2RlZmF1bHQnXShzdG9yZSk7XG4gIH1cblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLnN1YnNjcmliZVRvU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiBzdWJzY3JpYmVUb1N0YXRlQ2hhbmdlKGxpc3RlbmVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgaGFuZGxlcklkcyA9IF9yZWYuaGFuZGxlcklkcztcblxuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nLCAnbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGhhbmRsZXJJZHMgPT09ICd1bmRlZmluZWQnIHx8IF9sb2Rhc2hJc0FycmF5MlsnZGVmYXVsdCddKGhhbmRsZXJJZHMpLCAnaGFuZGxlcklkcywgd2hlbiBzcGVjaWZpZWQsIG11c3QgYmUgYW4gYXJyYXkgb2Ygc3RyaW5ncy4nKTtcblxuICAgIHZhciBwcmV2U3RhdGVJZCA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5zdGF0ZUlkO1xuICAgIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgdmFyIGN1cnJlbnRTdGF0ZUlkID0gc3RhdGUuc3RhdGVJZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBjYW5Ta2lwTGlzdGVuZXIgPSBjdXJyZW50U3RhdGVJZCA9PT0gcHJldlN0YXRlSWQgfHwgY3VycmVudFN0YXRlSWQgPT09IHByZXZTdGF0ZUlkICsgMSAmJiAhX3JlZHVjZXJzRGlydHlIYW5kbGVySWRzLmFyZURpcnR5KHN0YXRlLmRpcnR5SGFuZGxlcklkcywgaGFuZGxlcklkcyk7XG5cbiAgICAgICAgaWYgKCFjYW5Ta2lwTGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBwcmV2U3RhdGVJZCA9IGN1cnJlbnRTdGF0ZUlkO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zdWJzY3JpYmUoaGFuZGxlQ2hhbmdlKTtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLnN1YnNjcmliZVRvT2Zmc2V0Q2hhbmdlID0gZnVuY3Rpb24gc3Vic2NyaWJlVG9PZmZzZXRDaGFuZ2UobGlzdGVuZXIpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nLCAnbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuXG4gICAgdmFyIHByZXZpb3VzU3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldDtcbiAgICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IF90aGlzMi5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQ7XG4gICAgICBpZiAobmV4dFN0YXRlID09PSBwcmV2aW91c1N0YXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcHJldmlvdXNTdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2UpO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuY2FuRHJhZ1NvdXJjZSA9IGZ1bmN0aW9uIGNhbkRyYWdTb3VyY2Uoc291cmNlSWQpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5yZWdpc3RyeS5nZXRTb3VyY2Uoc291cmNlSWQpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oc291cmNlLCAnRXhwZWN0ZWQgdG8gZmluZCBhIHZhbGlkIHNvdXJjZS4nKTtcblxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2UuY2FuRHJhZyh0aGlzLCBzb3VyY2VJZCk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5jYW5Ecm9wT25UYXJnZXQgPSBmdW5jdGlvbiBjYW5Ecm9wT25UYXJnZXQodGFyZ2V0SWQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5yZWdpc3RyeS5nZXRUYXJnZXQodGFyZ2V0SWQpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGFyZ2V0LCAnRXhwZWN0ZWQgdG8gZmluZCBhIHZhbGlkIHRhcmdldC4nKTtcblxuICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKCkgfHwgdGhpcy5kaWREcm9wKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0VHlwZSA9IHRoaXMucmVnaXN0cnkuZ2V0VGFyZ2V0VHlwZSh0YXJnZXRJZCk7XG4gICAgdmFyIGRyYWdnZWRJdGVtVHlwZSA9IHRoaXMuZ2V0SXRlbVR5cGUoKTtcbiAgICByZXR1cm4gX3V0aWxzTWF0Y2hlc1R5cGUyWydkZWZhdWx0J10odGFyZ2V0VHlwZSwgZHJhZ2dlZEl0ZW1UeXBlKSAmJiB0YXJnZXQuY2FuRHJvcCh0aGlzLCB0YXJnZXRJZCk7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldEl0ZW1UeXBlKCkpO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuaXNEcmFnZ2luZ1NvdXJjZSA9IGZ1bmN0aW9uIGlzRHJhZ2dpbmdTb3VyY2Uoc291cmNlSWQpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5yZWdpc3RyeS5nZXRTb3VyY2Uoc291cmNlSWQsIHRydWUpO1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oc291cmNlLCAnRXhwZWN0ZWQgdG8gZmluZCBhIHZhbGlkIHNvdXJjZS4nKTtcblxuICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKCkgfHwgIXRoaXMuaXNTb3VyY2VQdWJsaWMoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VUeXBlID0gdGhpcy5yZWdpc3RyeS5nZXRTb3VyY2VUeXBlKHNvdXJjZUlkKTtcbiAgICB2YXIgZHJhZ2dlZEl0ZW1UeXBlID0gdGhpcy5nZXRJdGVtVHlwZSgpO1xuICAgIGlmIChzb3VyY2VUeXBlICE9PSBkcmFnZ2VkSXRlbVR5cGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlLmlzRHJhZ2dpbmcodGhpcywgc291cmNlSWQpO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuaXNPdmVyVGFyZ2V0ID0gZnVuY3Rpb24gaXNPdmVyVGFyZ2V0KHRhcmdldElkKSB7XG4gICAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgX3JlZjIkc2hhbGxvdyA9IF9yZWYyLnNoYWxsb3c7XG4gICAgdmFyIHNoYWxsb3cgPSBfcmVmMiRzaGFsbG93ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYyJHNoYWxsb3c7XG5cbiAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZygpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFR5cGUgPSB0aGlzLnJlZ2lzdHJ5LmdldFRhcmdldFR5cGUodGFyZ2V0SWQpO1xuICAgIHZhciBkcmFnZ2VkSXRlbVR5cGUgPSB0aGlzLmdldEl0ZW1UeXBlKCk7XG4gICAgaWYgKCFfdXRpbHNNYXRjaGVzVHlwZTJbJ2RlZmF1bHQnXSh0YXJnZXRUeXBlLCBkcmFnZ2VkSXRlbVR5cGUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldElkcyA9IHRoaXMuZ2V0VGFyZ2V0SWRzKCk7XG4gICAgaWYgKCF0YXJnZXRJZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGFyZ2V0SWRzLmluZGV4T2YodGFyZ2V0SWQpO1xuICAgIGlmIChzaGFsbG93KSB7XG4gICAgICByZXR1cm4gaW5kZXggPT09IHRhcmdldElkcy5sZW5ndGggLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaW5kZXggPiAtMTtcbiAgICB9XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXRJdGVtVHlwZSA9IGZ1bmN0aW9uIGdldEl0ZW1UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5pdGVtVHlwZTtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbiBnZXRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5pdGVtO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0U291cmNlSWQgPSBmdW5jdGlvbiBnZXRTb3VyY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPcGVyYXRpb24uc291cmNlSWQ7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXRUYXJnZXRJZHMgPSBmdW5jdGlvbiBnZXRUYXJnZXRJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLnRhcmdldElkcztcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldERyb3BSZXN1bHQgPSBmdW5jdGlvbiBnZXREcm9wUmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5kcm9wUmVzdWx0O1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZGlkRHJvcCA9IGZ1bmN0aW9uIGRpZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT3BlcmF0aW9uLmRpZERyb3A7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5pc1NvdXJjZVB1YmxpYyA9IGZ1bmN0aW9uIGlzU291cmNlUHVibGljKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09wZXJhdGlvbi5pc1NvdXJjZVB1YmxpYztcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldEluaXRpYWxDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRJbml0aWFsQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldC5pbml0aWFsQ2xpZW50T2Zmc2V0O1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0LmluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQ7XG4gIH07XG5cbiAgRHJhZ0Ryb3BNb25pdG9yLnByb3RvdHlwZS5nZXRDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5kcmFnT2Zmc2V0LmNsaWVudE9mZnNldDtcbiAgfTtcblxuICBEcmFnRHJvcE1vbml0b3IucHJvdG90eXBlLmdldFNvdXJjZUNsaWVudE9mZnNldCA9IGZ1bmN0aW9uIGdldFNvdXJjZUNsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gX3JlZHVjZXJzRHJhZ09mZnNldC5nZXRTb3VyY2VDbGllbnRPZmZzZXQodGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmRyYWdPZmZzZXQpO1xuICB9O1xuXG4gIERyYWdEcm9wTW9uaXRvci5wcm90b3R5cGUuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0ID0gZnVuY3Rpb24gZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCkge1xuICAgIHJldHVybiBfcmVkdWNlcnNEcmFnT2Zmc2V0LmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCh0aGlzLnN0b3JlLmdldFN0YXRlKCkuZHJhZ09mZnNldCk7XG4gIH07XG5cbiAgcmV0dXJuIERyYWdEcm9wTW9uaXRvcjtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyYWdEcm9wTW9uaXRvcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9EcmFnRHJvcE1vbml0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/ICdzeW1ib2wnIDogdHlwZW9mIG9iajsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpO1xuXG52YXIgX2xvZGFzaElzQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNBcnJheSk7XG5cbnZhciBfdXRpbHNHZXROZXh0VW5pcXVlSWQgPSByZXF1aXJlKCcuL3V0aWxzL2dldE5leHRVbmlxdWVJZCcpO1xuXG52YXIgX3V0aWxzR2V0TmV4dFVuaXF1ZUlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzR2V0TmV4dFVuaXF1ZUlkKTtcblxudmFyIF9hY3Rpb25zUmVnaXN0cnkgPSByZXF1aXJlKCcuL2FjdGlvbnMvcmVnaXN0cnknKTtcblxudmFyIF9hc2FwID0gcmVxdWlyZSgnYXNhcCcpO1xuXG52YXIgX2FzYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNhcCk7XG5cbnZhciBIYW5kbGVyUm9sZXMgPSB7XG4gIFNPVVJDRTogJ1NPVVJDRScsXG4gIFRBUkdFVDogJ1RBUkdFVCdcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU291cmNlQ29udHJhY3Qoc291cmNlKSB7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHNvdXJjZS5jYW5EcmFnID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgY2FuRHJhZyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBzb3VyY2UuYmVnaW5EcmFnID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgYmVnaW5EcmFnIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHNvdXJjZS5lbmREcmFnID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgZW5kRHJhZyB0byBiZSBhIGZ1bmN0aW9uLicpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRhcmdldENvbnRyYWN0KHRhcmdldCkge1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiB0YXJnZXQuY2FuRHJvcCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIGNhbkRyb3AgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgdGFyZ2V0LmhvdmVyID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgaG92ZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgdGFyZ2V0LmRyb3AgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBiZWdpbkRyYWcgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUeXBlKHR5cGUsIGFsbG93QXJyYXkpIHtcbiAgaWYgKGFsbG93QXJyYXkgJiYgX2xvZGFzaElzQXJyYXkyWydkZWZhdWx0J10odHlwZSkpIHtcbiAgICB0eXBlLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZVR5cGUodCwgZmFsc2UpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8ICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHlwZSkpID09PSAnc3ltYm9sJywgYWxsb3dBcnJheSA/ICdUeXBlIGNhbiBvbmx5IGJlIGEgc3RyaW5nLCBhIHN5bWJvbCwgb3IgYW4gYXJyYXkgb2YgZWl0aGVyLicgOiAnVHlwZSBjYW4gb25seSBiZSBhIHN0cmluZyBvciBhIHN5bWJvbC4nKTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dEhhbmRsZXJJZChyb2xlKSB7XG4gIHZhciBpZCA9IF91dGlsc0dldE5leHRVbmlxdWVJZDJbJ2RlZmF1bHQnXSgpLnRvU3RyaW5nKCk7XG4gIHN3aXRjaCAocm9sZSkge1xuICAgIGNhc2UgSGFuZGxlclJvbGVzLlNPVVJDRTpcbiAgICAgIHJldHVybiAnUycgKyBpZDtcbiAgICBjYXNlIEhhbmRsZXJSb2xlcy5UQVJHRVQ6XG4gICAgICByZXR1cm4gJ1QnICsgaWQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UsICdVbmtub3duIHJvbGU6ICcgKyByb2xlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVJvbGVGcm9tSGFuZGxlcklkKGhhbmRsZXJJZCkge1xuICBzd2l0Y2ggKGhhbmRsZXJJZFswXSkge1xuICAgIGNhc2UgJ1MnOlxuICAgICAgcmV0dXJuIEhhbmRsZXJSb2xlcy5TT1VSQ0U7XG4gICAgY2FzZSAnVCc6XG4gICAgICByZXR1cm4gSGFuZGxlclJvbGVzLlRBUkdFVDtcbiAgICBkZWZhdWx0OlxuICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0Nhbm5vdCBwYXJzZSBoYW5kbGVyIElEOiAnICsgaGFuZGxlcklkKTtcbiAgfVxufVxuXG52YXIgSGFuZGxlclJlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSGFuZGxlclJlZ2lzdHJ5KHN0b3JlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhbmRsZXJSZWdpc3RyeSk7XG5cbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG5cbiAgICB0aGlzLnR5cGVzID0ge307XG4gICAgdGhpcy5oYW5kbGVycyA9IHt9O1xuXG4gICAgdGhpcy5waW5uZWRTb3VyY2VJZCA9IG51bGw7XG4gICAgdGhpcy5waW5uZWRTb3VyY2UgPSBudWxsO1xuICB9XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5hZGRTb3VyY2UgPSBmdW5jdGlvbiBhZGRTb3VyY2UodHlwZSwgc291cmNlKSB7XG4gICAgdmFsaWRhdGVUeXBlKHR5cGUpO1xuICAgIHZhbGlkYXRlU291cmNlQ29udHJhY3Qoc291cmNlKTtcblxuICAgIHZhciBzb3VyY2VJZCA9IHRoaXMuYWRkSGFuZGxlcihIYW5kbGVyUm9sZXMuU09VUkNFLCB0eXBlLCBzb3VyY2UpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goX2FjdGlvbnNSZWdpc3RyeS5hZGRTb3VyY2Uoc291cmNlSWQpKTtcbiAgICByZXR1cm4gc291cmNlSWQ7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5hZGRUYXJnZXQgPSBmdW5jdGlvbiBhZGRUYXJnZXQodHlwZSwgdGFyZ2V0KSB7XG4gICAgdmFsaWRhdGVUeXBlKHR5cGUsIHRydWUpO1xuICAgIHZhbGlkYXRlVGFyZ2V0Q29udHJhY3QodGFyZ2V0KTtcblxuICAgIHZhciB0YXJnZXRJZCA9IHRoaXMuYWRkSGFuZGxlcihIYW5kbGVyUm9sZXMuVEFSR0VULCB0eXBlLCB0YXJnZXQpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goX2FjdGlvbnNSZWdpc3RyeS5hZGRUYXJnZXQodGFyZ2V0SWQpKTtcbiAgICByZXR1cm4gdGFyZ2V0SWQ7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5hZGRIYW5kbGVyID0gZnVuY3Rpb24gYWRkSGFuZGxlcihyb2xlLCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgdmFyIGlkID0gZ2V0TmV4dEhhbmRsZXJJZChyb2xlKTtcbiAgICB0aGlzLnR5cGVzW2lkXSA9IHR5cGU7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBoYW5kbGVyO1xuXG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUuY29udGFpbnNIYW5kbGVyID0gZnVuY3Rpb24gY29udGFpbnNIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaGFuZGxlcnMpLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZXJzW2tleV0gPT09IGhhbmRsZXI7XG4gICAgfSk7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5nZXRTb3VyY2UgPSBmdW5jdGlvbiBnZXRTb3VyY2Uoc291cmNlSWQsIGluY2x1ZGVQaW5uZWQpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRoaXMuaXNTb3VyY2VJZChzb3VyY2VJZCksICdFeHBlY3RlZCBhIHZhbGlkIHNvdXJjZSBJRC4nKTtcblxuICAgIHZhciBpc1Bpbm5lZCA9IGluY2x1ZGVQaW5uZWQgJiYgc291cmNlSWQgPT09IHRoaXMucGlubmVkU291cmNlSWQ7XG4gICAgdmFyIHNvdXJjZSA9IGlzUGlubmVkID8gdGhpcy5waW5uZWRTb3VyY2UgOiB0aGlzLmhhbmRsZXJzW3NvdXJjZUlkXTtcblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5nZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0SWQpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHRoaXMuaXNUYXJnZXRJZCh0YXJnZXRJZCksICdFeHBlY3RlZCBhIHZhbGlkIHRhcmdldCBJRC4nKTtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyc1t0YXJnZXRJZF07XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5nZXRTb3VyY2VUeXBlID0gZnVuY3Rpb24gZ2V0U291cmNlVHlwZShzb3VyY2VJZCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGhpcy5pc1NvdXJjZUlkKHNvdXJjZUlkKSwgJ0V4cGVjdGVkIGEgdmFsaWQgc291cmNlIElELicpO1xuICAgIHJldHVybiB0aGlzLnR5cGVzW3NvdXJjZUlkXTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLmdldFRhcmdldFR5cGUgPSBmdW5jdGlvbiBnZXRUYXJnZXRUeXBlKHRhcmdldElkKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0aGlzLmlzVGFyZ2V0SWQodGFyZ2V0SWQpLCAnRXhwZWN0ZWQgYSB2YWxpZCB0YXJnZXQgSUQuJyk7XG4gICAgcmV0dXJuIHRoaXMudHlwZXNbdGFyZ2V0SWRdO1xuICB9O1xuXG4gIEhhbmRsZXJSZWdpc3RyeS5wcm90b3R5cGUuaXNTb3VyY2VJZCA9IGZ1bmN0aW9uIGlzU291cmNlSWQoaGFuZGxlcklkKSB7XG4gICAgdmFyIHJvbGUgPSBwYXJzZVJvbGVGcm9tSGFuZGxlcklkKGhhbmRsZXJJZCk7XG4gICAgcmV0dXJuIHJvbGUgPT09IEhhbmRsZXJSb2xlcy5TT1VSQ0U7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS5pc1RhcmdldElkID0gZnVuY3Rpb24gaXNUYXJnZXRJZChoYW5kbGVySWQpIHtcbiAgICB2YXIgcm9sZSA9IHBhcnNlUm9sZUZyb21IYW5kbGVySWQoaGFuZGxlcklkKTtcbiAgICByZXR1cm4gcm9sZSA9PT0gSGFuZGxlclJvbGVzLlRBUkdFVDtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLnJlbW92ZVNvdXJjZSA9IGZ1bmN0aW9uIHJlbW92ZVNvdXJjZShzb3VyY2VJZCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0aGlzLmdldFNvdXJjZShzb3VyY2VJZCksICdFeHBlY3RlZCBhbiBleGlzdGluZyBzb3VyY2UuJyk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChfYWN0aW9uc1JlZ2lzdHJ5LnJlbW92ZVNvdXJjZShzb3VyY2VJZCkpO1xuXG4gICAgX2FzYXAyWydkZWZhdWx0J10oZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlIF90aGlzMi5oYW5kbGVyc1tzb3VyY2VJZF07XG4gICAgICBkZWxldGUgX3RoaXMyLnR5cGVzW3NvdXJjZUlkXTtcbiAgICB9KTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLnJlbW92ZVRhcmdldCA9IGZ1bmN0aW9uIHJlbW92ZVRhcmdldCh0YXJnZXRJZCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0aGlzLmdldFRhcmdldCh0YXJnZXRJZCksICdFeHBlY3RlZCBhbiBleGlzdGluZyB0YXJnZXQuJyk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChfYWN0aW9uc1JlZ2lzdHJ5LnJlbW92ZVRhcmdldCh0YXJnZXRJZCkpO1xuXG4gICAgX2FzYXAyWydkZWZhdWx0J10oZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlIF90aGlzMy5oYW5kbGVyc1t0YXJnZXRJZF07XG4gICAgICBkZWxldGUgX3RoaXMzLnR5cGVzW3RhcmdldElkXTtcbiAgICB9KTtcbiAgfTtcblxuICBIYW5kbGVyUmVnaXN0cnkucHJvdG90eXBlLnBpblNvdXJjZSA9IGZ1bmN0aW9uIHBpblNvdXJjZShzb3VyY2VJZCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLmdldFNvdXJjZShzb3VyY2VJZCk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShzb3VyY2UsICdFeHBlY3RlZCBhbiBleGlzdGluZyBzb3VyY2UuJyk7XG5cbiAgICB0aGlzLnBpbm5lZFNvdXJjZUlkID0gc291cmNlSWQ7XG4gICAgdGhpcy5waW5uZWRTb3VyY2UgPSBzb3VyY2U7XG4gIH07XG5cbiAgSGFuZGxlclJlZ2lzdHJ5LnByb3RvdHlwZS51bnBpblNvdXJjZSA9IGZ1bmN0aW9uIHVucGluU291cmNlKCkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odGhpcy5waW5uZWRTb3VyY2UsICdObyBzb3VyY2UgaXMgcGlubmVkIGF0IHRoZSB0aW1lLicpO1xuXG4gICAgdGhpcy5waW5uZWRTb3VyY2VJZCA9IG51bGw7XG4gICAgdGhpcy5waW5uZWRTb3VyY2UgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiBIYW5kbGVyUmVnaXN0cnk7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBIYW5kbGVyUmVnaXN0cnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kbmQtY29yZS9saWIvSGFuZGxlclJlZ2lzdHJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMTAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2V0TmV4dFVuaXF1ZUlkO1xudmFyIG5leHRVbmlxdWVJZCA9IDA7XG5cbmZ1bmN0aW9uIGdldE5leHRVbmlxdWVJZCgpIHtcbiAgcmV0dXJuIG5leHRVbmlxdWVJZCsrO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi91dGlscy9nZXROZXh0VW5pcXVlSWQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyByYXdBc2FwIHByb3ZpZGVzIGV2ZXJ5dGhpbmcgd2UgbmVlZCBleGNlcHQgZXhjZXB0aW9uIG1hbmFnZW1lbnQuXG52YXIgcmF3QXNhcCA9IHJlcXVpcmUoXCIuL3Jhd1wiKTtcbi8vIFJhd1Rhc2tzIGFyZSByZWN5Y2xlZCB0byByZWR1Y2UgR0MgY2h1cm4uXG52YXIgZnJlZVRhc2tzID0gW107XG4vLyBXZSBxdWV1ZSBlcnJvcnMgdG8gZW5zdXJlIHRoZXkgYXJlIHRocm93biBpbiByaWdodCBvcmRlciAoRklGTykuXG4vLyBBcnJheS1hcy1xdWV1ZSBpcyBnb29kIGVub3VnaCBoZXJlLCBzaW5jZSB3ZSBhcmUganVzdCBkZWFsaW5nIHdpdGggZXhjZXB0aW9ucy5cbnZhciBwZW5kaW5nRXJyb3JzID0gW107XG52YXIgcmVxdWVzdEVycm9yVGhyb3cgPSByYXdBc2FwLm1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcih0aHJvd0ZpcnN0RXJyb3IpO1xuXG5mdW5jdGlvbiB0aHJvd0ZpcnN0RXJyb3IoKSB7XG4gICAgaWYgKHBlbmRpbmdFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IHBlbmRpbmdFcnJvcnMuc2hpZnQoKTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2FsbHMgYSB0YXNrIGFzIHNvb24gYXMgcG9zc2libGUgYWZ0ZXIgcmV0dXJuaW5nLCBpbiBpdHMgb3duIGV2ZW50LCB3aXRoIHByaW9yaXR5XG4gKiBvdmVyIG90aGVyIGV2ZW50cyBsaWtlIGFuaW1hdGlvbiwgcmVmbG93LCBhbmQgcmVwYWludC4gQW4gZXJyb3IgdGhyb3duIGZyb20gYW5cbiAqIGV2ZW50IHdpbGwgbm90IGludGVycnVwdCwgbm9yIGV2ZW4gc3Vic3RhbnRpYWxseSBzbG93IGRvd24gdGhlIHByb2Nlc3Npbmcgb2ZcbiAqIG90aGVyIGV2ZW50cywgYnV0IHdpbGwgYmUgcmF0aGVyIHBvc3Rwb25lZCB0byBhIGxvd2VyIHByaW9yaXR5IGV2ZW50LlxuICogQHBhcmFtIHt7Y2FsbH19IHRhc2sgQSBjYWxsYWJsZSBvYmplY3QsIHR5cGljYWxseSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm9cbiAqIGFyZ3VtZW50cy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhc2FwO1xuZnVuY3Rpb24gYXNhcCh0YXNrKSB7XG4gICAgdmFyIHJhd1Rhc2s7XG4gICAgaWYgKGZyZWVUYXNrcy5sZW5ndGgpIHtcbiAgICAgICAgcmF3VGFzayA9IGZyZWVUYXNrcy5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByYXdUYXNrID0gbmV3IFJhd1Rhc2soKTtcbiAgICB9XG4gICAgcmF3VGFzay50YXNrID0gdGFzaztcbiAgICByYXdBc2FwKHJhd1Rhc2spO1xufVxuXG4vLyBXZSB3cmFwIHRhc2tzIHdpdGggcmVjeWNsYWJsZSB0YXNrIG9iamVjdHMuICBBIHRhc2sgb2JqZWN0IGltcGxlbWVudHNcbi8vIGBjYWxsYCwganVzdCBsaWtlIGEgZnVuY3Rpb24uXG5mdW5jdGlvbiBSYXdUYXNrKCkge1xuICAgIHRoaXMudGFzayA9IG51bGw7XG59XG5cbi8vIFRoZSBzb2xlIHB1cnBvc2Ugb2Ygd3JhcHBpbmcgdGhlIHRhc2sgaXMgdG8gY2F0Y2ggdGhlIGV4Y2VwdGlvbiBhbmQgcmVjeWNsZVxuLy8gdGhlIHRhc2sgb2JqZWN0IGFmdGVyIGl0cyBzaW5nbGUgdXNlLlxuUmF3VGFzay5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICB0aGlzLnRhc2suY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChhc2FwLm9uZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaG9vayBleGlzdHMgcHVyZWx5IGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICAgICAgICAgICAgLy8gSXRzIG5hbWUgd2lsbCBiZSBwZXJpb2RpY2FsbHkgcmFuZG9taXplZCB0byBicmVhayBhbnkgY29kZSB0aGF0XG4gICAgICAgICAgICAvLyBkZXBlbmRzIG9uIGl0cyBleGlzdGVuY2UuXG4gICAgICAgICAgICBhc2FwLm9uZXJyb3IoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSW4gYSB3ZWIgYnJvd3NlciwgZXhjZXB0aW9ucyBhcmUgbm90IGZhdGFsLiBIb3dldmVyLCB0byBhdm9pZFxuICAgICAgICAgICAgLy8gc2xvd2luZyBkb3duIHRoZSBxdWV1ZSBvZiBwZW5kaW5nIHRhc2tzLCB3ZSByZXRocm93IHRoZSBlcnJvciBpbiBhXG4gICAgICAgICAgICAvLyBsb3dlciBwcmlvcml0eSB0dXJuLlxuICAgICAgICAgICAgcGVuZGluZ0Vycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgICAgICAgIHJlcXVlc3RFcnJvclRocm93KCk7XG4gICAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzLnRhc2sgPSBudWxsO1xuICAgICAgICBmcmVlVGFza3NbZnJlZVRhc2tzLmxlbmd0aF0gPSB0aGlzO1xuICAgIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hc2FwL2Jyb3dzZXItYXNhcC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFVzZSB0aGUgZmFzdGVzdCBtZWFucyBwb3NzaWJsZSB0byBleGVjdXRlIGEgdGFzayBpbiBpdHMgb3duIHR1cm4sIHdpdGhcbi8vIHByaW9yaXR5IG92ZXIgb3RoZXIgZXZlbnRzIGluY2x1ZGluZyBJTywgYW5pbWF0aW9uLCByZWZsb3csIGFuZCByZWRyYXdcbi8vIGV2ZW50cyBpbiBicm93c2Vycy5cbi8vXG4vLyBBbiBleGNlcHRpb24gdGhyb3duIGJ5IGEgdGFzayB3aWxsIHBlcm1hbmVudGx5IGludGVycnVwdCB0aGUgcHJvY2Vzc2luZyBvZlxuLy8gc3Vic2VxdWVudCB0YXNrcy4gVGhlIGhpZ2hlciBsZXZlbCBgYXNhcGAgZnVuY3Rpb24gZW5zdXJlcyB0aGF0IGlmIGFuXG4vLyBleGNlcHRpb24gaXMgdGhyb3duIGJ5IGEgdGFzaywgdGhhdCB0aGUgdGFzayBxdWV1ZSB3aWxsIGNvbnRpbnVlIGZsdXNoaW5nIGFzXG4vLyBzb29uIGFzIHBvc3NpYmxlLCBidXQgaWYgeW91IHVzZSBgcmF3QXNhcGAgZGlyZWN0bHksIHlvdSBhcmUgcmVzcG9uc2libGUgdG9cbi8vIGVpdGhlciBlbnN1cmUgdGhhdCBubyBleGNlcHRpb25zIGFyZSB0aHJvd24gZnJvbSB5b3VyIHRhc2ssIG9yIHRvIG1hbnVhbGx5XG4vLyBjYWxsIGByYXdBc2FwLnJlcXVlc3RGbHVzaGAgaWYgYW4gZXhjZXB0aW9uIGlzIHRocm93bi5cbm1vZHVsZS5leHBvcnRzID0gcmF3QXNhcDtcbmZ1bmN0aW9uIHJhd0FzYXAodGFzaykge1xuICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHJlcXVlc3RGbHVzaCgpO1xuICAgICAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgfVxuICAgIC8vIEVxdWl2YWxlbnQgdG8gcHVzaCwgYnV0IGF2b2lkcyBhIGZ1bmN0aW9uIGNhbGwuXG4gICAgcXVldWVbcXVldWUubGVuZ3RoXSA9IHRhc2s7XG59XG5cbnZhciBxdWV1ZSA9IFtdO1xuLy8gT25jZSBhIGZsdXNoIGhhcyBiZWVuIHJlcXVlc3RlZCwgbm8gZnVydGhlciBjYWxscyB0byBgcmVxdWVzdEZsdXNoYCBhcmVcbi8vIG5lY2Vzc2FyeSB1bnRpbCB0aGUgbmV4dCBgZmx1c2hgIGNvbXBsZXRlcy5cbnZhciBmbHVzaGluZyA9IGZhbHNlO1xuLy8gYHJlcXVlc3RGbHVzaGAgaXMgYW4gaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgbWV0aG9kIHRoYXQgYXR0ZW1wdHMgdG8ga2lja1xuLy8gb2ZmIGEgYGZsdXNoYCBldmVudCBhcyBxdWlja2x5IGFzIHBvc3NpYmxlLiBgZmx1c2hgIHdpbGwgYXR0ZW1wdCB0byBleGhhdXN0XG4vLyB0aGUgZXZlbnQgcXVldWUgYmVmb3JlIHlpZWxkaW5nIHRvIHRoZSBicm93c2VyJ3Mgb3duIGV2ZW50IGxvb3AuXG52YXIgcmVxdWVzdEZsdXNoO1xuLy8gVGhlIHBvc2l0aW9uIG9mIHRoZSBuZXh0IHRhc2sgdG8gZXhlY3V0ZSBpbiB0aGUgdGFzayBxdWV1ZS4gVGhpcyBpc1xuLy8gcHJlc2VydmVkIGJldHdlZW4gY2FsbHMgdG8gYGZsdXNoYCBzbyB0aGF0IGl0IGNhbiBiZSByZXN1bWVkIGlmXG4vLyBhIHRhc2sgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbnZhciBpbmRleCA9IDA7XG4vLyBJZiBhIHRhc2sgc2NoZWR1bGVzIGFkZGl0aW9uYWwgdGFza3MgcmVjdXJzaXZlbHksIHRoZSB0YXNrIHF1ZXVlIGNhbiBncm93XG4vLyB1bmJvdW5kZWQuIFRvIHByZXZlbnQgbWVtb3J5IGV4aGF1c3Rpb24sIHRoZSB0YXNrIHF1ZXVlIHdpbGwgcGVyaW9kaWNhbGx5XG4vLyB0cnVuY2F0ZSBhbHJlYWR5LWNvbXBsZXRlZCB0YXNrcy5cbnZhciBjYXBhY2l0eSA9IDEwMjQ7XG5cbi8vIFRoZSBmbHVzaCBmdW5jdGlvbiBwcm9jZXNzZXMgYWxsIHRhc2tzIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB3aXRoXG4vLyBgcmF3QXNhcGAgdW5sZXNzIGFuZCB1bnRpbCBvbmUgb2YgdGhvc2UgdGFza3MgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbi8vIElmIGEgdGFzayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBgZmx1c2hgIGVuc3VyZXMgdGhhdCBpdHMgc3RhdGUgd2lsbCByZW1haW5cbi8vIGNvbnNpc3RlbnQgYW5kIHdpbGwgcmVzdW1lIHdoZXJlIGl0IGxlZnQgb2ZmIHdoZW4gY2FsbGVkIGFnYWluLlxuLy8gSG93ZXZlciwgYGZsdXNoYCBkb2VzIG5vdCBtYWtlIGFueSBhcnJhbmdlbWVudHMgdG8gYmUgY2FsbGVkIGFnYWluIGlmIGFuXG4vLyBleGNlcHRpb24gaXMgdGhyb3duLlxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgd2hpbGUgKGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8gQWR2YW5jZSB0aGUgaW5kZXggYmVmb3JlIGNhbGxpbmcgdGhlIHRhc2suIFRoaXMgZW5zdXJlcyB0aGF0IHdlIHdpbGxcbiAgICAgICAgLy8gYmVnaW4gZmx1c2hpbmcgb24gdGhlIG5leHQgdGFzayB0aGUgdGFzayB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICAgIGluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICBxdWV1ZVtjdXJyZW50SW5kZXhdLmNhbGwoKTtcbiAgICAgICAgLy8gUHJldmVudCBsZWFraW5nIG1lbW9yeSBmb3IgbG9uZyBjaGFpbnMgb2YgcmVjdXJzaXZlIGNhbGxzIHRvIGBhc2FwYC5cbiAgICAgICAgLy8gSWYgd2UgY2FsbCBgYXNhcGAgd2l0aGluIHRhc2tzIHNjaGVkdWxlZCBieSBgYXNhcGAsIHRoZSBxdWV1ZSB3aWxsXG4gICAgICAgIC8vIGdyb3csIGJ1dCB0byBhdm9pZCBhbiBPKG4pIHdhbGsgZm9yIGV2ZXJ5IHRhc2sgd2UgZXhlY3V0ZSwgd2UgZG9uJ3RcbiAgICAgICAgLy8gc2hpZnQgdGFza3Mgb2ZmIHRoZSBxdWV1ZSBhZnRlciB0aGV5IGhhdmUgYmVlbiBleGVjdXRlZC5cbiAgICAgICAgLy8gSW5zdGVhZCwgd2UgcGVyaW9kaWNhbGx5IHNoaWZ0IDEwMjQgdGFza3Mgb2ZmIHRoZSBxdWV1ZS5cbiAgICAgICAgaWYgKGluZGV4ID4gY2FwYWNpdHkpIHtcbiAgICAgICAgICAgIC8vIE1hbnVhbGx5IHNoaWZ0IGFsbCB2YWx1ZXMgc3RhcnRpbmcgYXQgdGhlIGluZGV4IGJhY2sgdG8gdGhlXG4gICAgICAgICAgICAvLyBiZWdpbm5pbmcgb2YgdGhlIHF1ZXVlLlxuICAgICAgICAgICAgZm9yICh2YXIgc2NhbiA9IDAsIG5ld0xlbmd0aCA9IHF1ZXVlLmxlbmd0aCAtIGluZGV4OyBzY2FuIDwgbmV3TGVuZ3RoOyBzY2FuKyspIHtcbiAgICAgICAgICAgICAgICBxdWV1ZVtzY2FuXSA9IHF1ZXVlW3NjYW4gKyBpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5sZW5ndGggLT0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICBpbmRleCA9IDA7XG4gICAgZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLy8gYHJlcXVlc3RGbHVzaGAgaXMgaW1wbGVtZW50ZWQgdXNpbmcgYSBzdHJhdGVneSBiYXNlZCBvbiBkYXRhIGNvbGxlY3RlZCBmcm9tXG4vLyBldmVyeSBhdmFpbGFibGUgU2F1Y2VMYWJzIFNlbGVuaXVtIHdlYiBkcml2ZXIgd29ya2VyIGF0IHRpbWUgb2Ygd3JpdGluZy5cbi8vIGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzFtRy01VVlHdXA1cXhHZEVNV2toUDZCV0N6MDUzTlViMkUxUW9VVFUxNnVBL2VkaXQjZ2lkPTc4MzcyNDU5M1xuXG4vLyBTYWZhcmkgNiBhbmQgNi4xIGZvciBkZXNrdG9wLCBpUGFkLCBhbmQgaVBob25lIGFyZSB0aGUgb25seSBicm93c2VycyB0aGF0XG4vLyBoYXZlIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIgYnV0IG5vdCB1bi1wcmVmaXhlZCBNdXRhdGlvbk9ic2VydmVyLlxuLy8gTXVzdCB1c2UgYGdsb2JhbGAgaW5zdGVhZCBvZiBgd2luZG93YCB0byB3b3JrIGluIGJvdGggZnJhbWVzIGFuZCB3ZWJcbi8vIHdvcmtlcnMuIGBnbG9iYWxgIGlzIGEgcHJvdmlzaW9uIG9mIEJyb3dzZXJpZnksIE1yLCBNcnMsIG9yIE1vcC5cbnZhciBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuXG4vLyBNdXRhdGlvbk9ic2VydmVycyBhcmUgZGVzaXJhYmxlIGJlY2F1c2UgdGhleSBoYXZlIGhpZ2ggcHJpb3JpdHkgYW5kIHdvcmtcbi8vIHJlbGlhYmx5IGV2ZXJ5d2hlcmUgdGhleSBhcmUgaW1wbGVtZW50ZWQuXG4vLyBUaGV5IGFyZSBpbXBsZW1lbnRlZCBpbiBhbGwgbW9kZXJuIGJyb3dzZXJzLlxuLy9cbi8vIC0gQW5kcm9pZCA0LTQuM1xuLy8gLSBDaHJvbWUgMjYtMzRcbi8vIC0gRmlyZWZveCAxNC0yOVxuLy8gLSBJbnRlcm5ldCBFeHBsb3JlciAxMVxuLy8gLSBpUGFkIFNhZmFyaSA2LTcuMVxuLy8gLSBpUGhvbmUgU2FmYXJpIDctNy4xXG4vLyAtIFNhZmFyaSA2LTdcbmlmICh0eXBlb2YgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJlcXVlc3RGbHVzaCA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21NdXRhdGlvbk9ic2VydmVyKGZsdXNoKTtcblxuLy8gTWVzc2FnZUNoYW5uZWxzIGFyZSBkZXNpcmFibGUgYmVjYXVzZSB0aGV5IGdpdmUgZGlyZWN0IGFjY2VzcyB0byB0aGUgSFRNTFxuLy8gdGFzayBxdWV1ZSwgYXJlIGltcGxlbWVudGVkIGluIEludGVybmV0IEV4cGxvcmVyIDEwLCBTYWZhcmkgNS4wLTEsIGFuZCBPcGVyYVxuLy8gMTEtMTIsIGFuZCBpbiB3ZWIgd29ya2VycyBpbiBtYW55IGVuZ2luZXMuXG4vLyBBbHRob3VnaCBtZXNzYWdlIGNoYW5uZWxzIHlpZWxkIHRvIGFueSBxdWV1ZWQgcmVuZGVyaW5nIGFuZCBJTyB0YXNrcywgdGhleVxuLy8gd291bGQgYmUgYmV0dGVyIHRoYW4gaW1wb3NpbmcgdGhlIDRtcyBkZWxheSBvZiB0aW1lcnMuXG4vLyBIb3dldmVyLCB0aGV5IGRvIG5vdCB3b3JrIHJlbGlhYmx5IGluIEludGVybmV0IEV4cGxvcmVyIG9yIFNhZmFyaS5cblxuLy8gSW50ZXJuZXQgRXhwbG9yZXIgMTAgaXMgdGhlIG9ubHkgYnJvd3NlciB0aGF0IGhhcyBzZXRJbW1lZGlhdGUgYnV0IGRvZXNcbi8vIG5vdCBoYXZlIE11dGF0aW9uT2JzZXJ2ZXJzLlxuLy8gQWx0aG91Z2ggc2V0SW1tZWRpYXRlIHlpZWxkcyB0byB0aGUgYnJvd3NlcidzIHJlbmRlcmVyLCBpdCB3b3VsZCBiZVxuLy8gcHJlZmVycmFibGUgdG8gZmFsbGluZyBiYWNrIHRvIHNldFRpbWVvdXQgc2luY2UgaXQgZG9lcyBub3QgaGF2ZVxuLy8gdGhlIG1pbmltdW0gNG1zIHBlbmFsdHkuXG4vLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGFwcGVhcnMgdG8gYmUgYSBidWcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAgTW9iaWxlIChhbmRcbi8vIERlc2t0b3AgdG8gYSBsZXNzZXIgZXh0ZW50KSB0aGF0IHJlbmRlcnMgYm90aCBzZXRJbW1lZGlhdGUgYW5kXG4vLyBNZXNzYWdlQ2hhbm5lbCB1c2VsZXNzIGZvciB0aGUgcHVycG9zZXMgb2YgQVNBUC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlza293YWwvcS9pc3N1ZXMvMzk2XG5cbi8vIFRpbWVycyBhcmUgaW1wbGVtZW50ZWQgdW5pdmVyc2FsbHkuXG4vLyBXZSBmYWxsIGJhY2sgdG8gdGltZXJzIGluIHdvcmtlcnMgaW4gbW9zdCBlbmdpbmVzLCBhbmQgaW4gZm9yZWdyb3VuZFxuLy8gY29udGV4dHMgaW4gdGhlIGZvbGxvd2luZyBicm93c2Vycy5cbi8vIEhvd2V2ZXIsIG5vdGUgdGhhdCBldmVuIHRoaXMgc2ltcGxlIGNhc2UgcmVxdWlyZXMgbnVhbmNlcyB0byBvcGVyYXRlIGluIGFcbi8vIGJyb2FkIHNwZWN0cnVtIG9mIGJyb3dzZXJzLlxuLy9cbi8vIC0gRmlyZWZveCAzLTEzXG4vLyAtIEludGVybmV0IEV4cGxvcmVyIDYtOVxuLy8gLSBpUGFkIFNhZmFyaSA0LjNcbi8vIC0gTHlueCAyLjguN1xufSBlbHNlIHtcbiAgICByZXF1ZXN0Rmx1c2ggPSBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXIoZmx1c2gpO1xufVxuXG4vLyBgcmVxdWVzdEZsdXNoYCByZXF1ZXN0cyB0aGF0IHRoZSBoaWdoIHByaW9yaXR5IGV2ZW50IHF1ZXVlIGJlIGZsdXNoZWQgYXNcbi8vIHNvb24gYXMgcG9zc2libGUuXG4vLyBUaGlzIGlzIHVzZWZ1bCB0byBwcmV2ZW50IGFuIGVycm9yIHRocm93biBpbiBhIHRhc2sgZnJvbSBzdGFsbGluZyB0aGUgZXZlbnRcbi8vIHF1ZXVlIGlmIHRoZSBleGNlcHRpb24gaGFuZGxlZCBieSBOb2RlLmpz4oCZc1xuLy8gYHByb2Nlc3Mub24oXCJ1bmNhdWdodEV4Y2VwdGlvblwiKWAgb3IgYnkgYSBkb21haW4uXG5yYXdBc2FwLnJlcXVlc3RGbHVzaCA9IHJlcXVlc3RGbHVzaDtcblxuLy8gVG8gcmVxdWVzdCBhIGhpZ2ggcHJpb3JpdHkgZXZlbnQsIHdlIGluZHVjZSBhIG11dGF0aW9uIG9ic2VydmVyIGJ5IHRvZ2dsaW5nXG4vLyB0aGUgdGV4dCBvZiBhIHRleHQgbm9kZSBiZXR3ZWVuIFwiMVwiIGFuZCBcIi0xXCIuXG5mdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaykge1xuICAgIHZhciB0b2dnbGUgPSAxO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBCcm93c2VyTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuICAgICAgICB0b2dnbGUgPSAtdG9nZ2xlO1xuICAgICAgICBub2RlLmRhdGEgPSB0b2dnbGU7XG4gICAgfTtcbn1cblxuLy8gVGhlIG1lc3NhZ2UgY2hhbm5lbCB0ZWNobmlxdWUgd2FzIGRpc2NvdmVyZWQgYnkgTWFsdGUgVWJsIGFuZCB3YXMgdGhlXG4vLyBvcmlnaW5hbCBmb3VuZGF0aW9uIGZvciB0aGlzIGxpYnJhcnkuXG4vLyBodHRwOi8vd3d3Lm5vbmJsb2NraW5nLmlvLzIwMTEvMDYvd2luZG93bmV4dHRpY2suaHRtbFxuXG4vLyBTYWZhcmkgNi4wLjUgKGF0IGxlYXN0KSBpbnRlcm1pdHRlbnRseSBmYWlscyB0byBjcmVhdGUgbWVzc2FnZSBwb3J0cyBvbiBhXG4vLyBwYWdlJ3MgZmlyc3QgbG9hZC4gVGhhbmtmdWxseSwgdGhpcyB2ZXJzaW9uIG9mIFNhZmFyaSBzdXBwb3J0c1xuLy8gTXV0YXRpb25PYnNlcnZlcnMsIHNvIHdlIGRvbid0IG5lZWQgdG8gZmFsbCBiYWNrIGluIHRoYXQgY2FzZS5cblxuLy8gZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbU1lc3NhZ2VDaGFubmVsKGNhbGxiYWNrKSB7XG4vLyAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbi8vICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbi8vICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbi8vICAgICB9O1xuLy8gfVxuXG4vLyBGb3IgcmVhc29ucyBleHBsYWluZWQgYWJvdmUsIHdlIGFyZSBhbHNvIHVuYWJsZSB0byB1c2UgYHNldEltbWVkaWF0ZWBcbi8vIHVuZGVyIGFueSBjaXJjdW1zdGFuY2VzLlxuLy8gRXZlbiBpZiB3ZSB3ZXJlLCB0aGVyZSBpcyBhbm90aGVyIGJ1ZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMC5cbi8vIEl0IGlzIG5vdCBzdWZmaWNpZW50IHRvIGFzc2lnbiBgc2V0SW1tZWRpYXRlYCB0byBgcmVxdWVzdEZsdXNoYCBiZWNhdXNlXG4vLyBgc2V0SW1tZWRpYXRlYCBtdXN0IGJlIGNhbGxlZCAqYnkgbmFtZSogYW5kIHRoZXJlZm9yZSBtdXN0IGJlIHdyYXBwZWQgaW4gYVxuLy8gY2xvc3VyZS5cbi8vIE5ldmVyIGZvcmdldC5cblxuLy8gZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbVNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbi8vICAgICAgICAgc2V0SW1tZWRpYXRlKGNhbGxiYWNrKTtcbi8vICAgICB9O1xuLy8gfVxuXG4vLyBTYWZhcmkgNi4wIGhhcyBhIHByb2JsZW0gd2hlcmUgdGltZXJzIHdpbGwgZ2V0IGxvc3Qgd2hpbGUgdGhlIHVzZXIgaXNcbi8vIHNjcm9sbGluZy4gVGhpcyBwcm9ibGVtIGRvZXMgbm90IGltcGFjdCBBU0FQIGJlY2F1c2UgU2FmYXJpIDYuMCBzdXBwb3J0c1xuLy8gbXV0YXRpb24gb2JzZXJ2ZXJzLCBzbyB0aGF0IGltcGxlbWVudGF0aW9uIGlzIHVzZWQgaW5zdGVhZC5cbi8vIEhvd2V2ZXIsIGlmIHdlIGV2ZXIgZWxlY3QgdG8gdXNlIHRpbWVycyBpbiBTYWZhcmksIHRoZSBwcmV2YWxlbnQgd29yay1hcm91bmRcbi8vIGlzIHRvIGFkZCBhIHNjcm9sbCBldmVudCBsaXN0ZW5lciB0aGF0IGNhbGxzIGZvciBhIGZsdXNoLlxuXG4vLyBgc2V0VGltZW91dGAgZG9lcyBub3QgY2FsbCB0aGUgcGFzc2VkIGNhbGxiYWNrIGlmIHRoZSBkZWxheSBpcyBsZXNzIHRoYW5cbi8vIGFwcHJveGltYXRlbHkgNyBpbiB3ZWIgd29ya2VycyBpbiBGaXJlZm94IDggdGhyb3VnaCAxOCwgYW5kIHNvbWV0aW1lcyBub3Rcbi8vIGV2ZW4gdGhlbi5cblxuZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuICAgICAgICAvLyBXZSBkaXNwYXRjaCBhIHRpbWVvdXQgd2l0aCBhIHNwZWNpZmllZCBkZWxheSBvZiAwIGZvciBlbmdpbmVzIHRoYXRcbiAgICAgICAgLy8gY2FuIHJlbGlhYmx5IGFjY29tbW9kYXRlIHRoYXQgcmVxdWVzdC4gVGhpcyB3aWxsIHVzdWFsbHkgYmUgc25hcHBlZFxuICAgICAgICAvLyB0byBhIDQgbWlsaXNlY29uZCBkZWxheSwgYnV0IG9uY2Ugd2UncmUgZmx1c2hpbmcsIHRoZXJlJ3Mgbm8gZGVsYXlcbiAgICAgICAgLy8gYmV0d2VlbiBldmVudHMuXG4gICAgICAgIHZhciB0aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChoYW5kbGVUaW1lciwgMCk7XG4gICAgICAgIC8vIEhvd2V2ZXIsIHNpbmNlIHRoaXMgdGltZXIgZ2V0cyBmcmVxdWVudGx5IGRyb3BwZWQgaW4gRmlyZWZveFxuICAgICAgICAvLyB3b3JrZXJzLCB3ZSBlbmxpc3QgYW4gaW50ZXJ2YWwgaGFuZGxlIHRoYXQgd2lsbCB0cnkgdG8gZmlyZVxuICAgICAgICAvLyBhbiBldmVudCAyMCB0aW1lcyBwZXIgc2Vjb25kIHVudGlsIGl0IHN1Y2NlZWRzLlxuICAgICAgICB2YXIgaW50ZXJ2YWxIYW5kbGUgPSBzZXRJbnRlcnZhbChoYW5kbGVUaW1lciwgNTApO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVRpbWVyKCkge1xuICAgICAgICAgICAgLy8gV2hpY2hldmVyIHRpbWVyIHN1Y2NlZWRzIHdpbGwgY2FuY2VsIGJvdGggdGltZXJzIGFuZFxuICAgICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSGFuZGxlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyBUaGlzIGlzIGZvciBgYXNhcC5qc2Agb25seS5cbi8vIEl0cyBuYW1lIHdpbGwgYmUgcGVyaW9kaWNhbGx5IHJhbmRvbWl6ZWQgdG8gYnJlYWsgYW55IGNvZGUgdGhhdCBkZXBlbmRzIG9uXG4vLyBpdHMgZXhpc3RlbmNlLlxucmF3QXNhcC5tYWtlUmVxdWVzdENhbGxGcm9tVGltZXIgPSBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXI7XG5cbi8vIEFTQVAgd2FzIG9yaWdpbmFsbHkgYSBuZXh0VGljayBzaGltIGluY2x1ZGVkIGluIFEuIFRoaXMgd2FzIGZhY3RvcmVkIG91dFxuLy8gaW50byB0aGlzIEFTQVAgcGFja2FnZS4gSXQgd2FzIGxhdGVyIGFkYXB0ZWQgdG8gUlNWUCB3aGljaCBtYWRlIGZ1cnRoZXJcbi8vIGFtZW5kbWVudHMuIFRoZXNlIGRlY2lzaW9ucywgcGFydGljdWxhcmx5IHRvIG1hcmdpbmFsaXplIE1lc3NhZ2VDaGFubmVsIGFuZFxuLy8gdG8gY2FwdHVyZSB0aGUgTXV0YXRpb25PYnNlcnZlciBpbXBsZW1lbnRhdGlvbiBpbiBhIGNsb3N1cmUsIHdlcmUgaW50ZWdyYXRlZFxuLy8gYmFjayBpbnRvIEFTQVAgcHJvcGVyLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RpbGRlaW8vcnN2cC5qcy9ibG9iL2NkZGY3MjMyNTQ2YTljZjg1ODUyNGI3NWNkZTZmOWVkZjcyNjIwYTcvbGliL3JzdnAvYXNhcC5qc1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYXNhcC9icm93c2VyLXJhdy5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBEcmFnU291cmNlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRHJhZ1NvdXJjZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ1NvdXJjZSk7XG4gIH1cblxuICBEcmFnU291cmNlLnByb3RvdHlwZS5jYW5EcmFnID0gZnVuY3Rpb24gY2FuRHJhZygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBEcmFnU291cmNlLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24gaXNEcmFnZ2luZyhtb25pdG9yLCBoYW5kbGUpIHtcbiAgICByZXR1cm4gaGFuZGxlID09PSBtb25pdG9yLmdldFNvdXJjZUlkKCk7XG4gIH07XG5cbiAgRHJhZ1NvdXJjZS5wcm90b3R5cGUuZW5kRHJhZyA9IGZ1bmN0aW9uIGVuZERyYWcoKSB7fTtcblxuICByZXR1cm4gRHJhZ1NvdXJjZTtcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRHJhZ1NvdXJjZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL0RyYWdTb3VyY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRHJvcFRhcmdldCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERyb3BUYXJnZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3BUYXJnZXQpO1xuICB9XG5cbiAgRHJvcFRhcmdldC5wcm90b3R5cGUuY2FuRHJvcCA9IGZ1bmN0aW9uIGNhbkRyb3AoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgRHJvcFRhcmdldC5wcm90b3R5cGUuaG92ZXIgPSBmdW5jdGlvbiBob3ZlcigpIHt9O1xuXG4gIERyb3BUYXJnZXQucHJvdG90eXBlLmRyb3AgPSBmdW5jdGlvbiBkcm9wKCkge307XG5cbiAgcmV0dXJuIERyb3BUYXJnZXQ7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERyb3BUYXJnZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RuZC1jb3JlL2xpYi9Ecm9wVGFyZ2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVCYWNrZW5kO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX2xvZGFzaE5vb3AgPSByZXF1aXJlKCdsb2Rhc2gvbm9vcCcpO1xuXG52YXIgX2xvZGFzaE5vb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoTm9vcCk7XG5cbnZhciBUZXN0QmFja2VuZCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRlc3RCYWNrZW5kKG1hbmFnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVzdEJhY2tlbmQpO1xuXG4gICAgdGhpcy5hY3Rpb25zID0gbWFuYWdlci5nZXRBY3Rpb25zKCk7XG4gIH1cblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICB0aGlzLmRpZENhbGxTZXR1cCA9IHRydWU7XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gdGVhcmRvd24oKSB7XG4gICAgdGhpcy5kaWRDYWxsVGVhcmRvd24gPSB0cnVlO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5jb25uZWN0RHJhZ1NvdXJjZSA9IGZ1bmN0aW9uIGNvbm5lY3REcmFnU291cmNlKCkge1xuICAgIHJldHVybiBfbG9kYXNoTm9vcDJbJ2RlZmF1bHQnXTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuY29ubmVjdERyYWdQcmV2aWV3ID0gZnVuY3Rpb24gY29ubmVjdERyYWdQcmV2aWV3KCkge1xuICAgIHJldHVybiBfbG9kYXNoTm9vcDJbJ2RlZmF1bHQnXTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuY29ubmVjdERyb3BUYXJnZXQgPSBmdW5jdGlvbiBjb25uZWN0RHJvcFRhcmdldCgpIHtcbiAgICByZXR1cm4gX2xvZGFzaE5vb3AyWydkZWZhdWx0J107XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLnNpbXVsYXRlQmVnaW5EcmFnID0gZnVuY3Rpb24gc2ltdWxhdGVCZWdpbkRyYWcoc291cmNlSWRzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5hY3Rpb25zLmJlZ2luRHJhZyhzb3VyY2VJZHMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5zaW11bGF0ZVB1Ymxpc2hEcmFnU291cmNlID0gZnVuY3Rpb24gc2ltdWxhdGVQdWJsaXNoRHJhZ1NvdXJjZSgpIHtcbiAgICB0aGlzLmFjdGlvbnMucHVibGlzaERyYWdTb3VyY2UoKTtcbiAgfTtcblxuICBUZXN0QmFja2VuZC5wcm90b3R5cGUuc2ltdWxhdGVIb3ZlciA9IGZ1bmN0aW9uIHNpbXVsYXRlSG92ZXIodGFyZ2V0SWRzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5hY3Rpb25zLmhvdmVyKHRhcmdldElkcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgVGVzdEJhY2tlbmQucHJvdG90eXBlLnNpbXVsYXRlRHJvcCA9IGZ1bmN0aW9uIHNpbXVsYXRlRHJvcCgpIHtcbiAgICB0aGlzLmFjdGlvbnMuZHJvcCgpO1xuICB9O1xuXG4gIFRlc3RCYWNrZW5kLnByb3RvdHlwZS5zaW11bGF0ZUVuZERyYWcgPSBmdW5jdGlvbiBzaW11bGF0ZUVuZERyYWcoKSB7XG4gICAgdGhpcy5hY3Rpb25zLmVuZERyYWcoKTtcbiAgfTtcblxuICByZXR1cm4gVGVzdEJhY2tlbmQ7XG59KSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVCYWNrZW5kKG1hbmFnZXIpIHtcbiAgcmV0dXJuIG5ldyBUZXN0QmFja2VuZChtYW5hZ2VyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG5kLWNvcmUvbGliL2JhY2tlbmRzL2NyZWF0ZVRlc3RCYWNrZW5kLmpzXG4gKiogbW9kdWxlIGlkID0gMTA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjaGVja0RlY29yYXRvckFyZ3VtZW50cztcblxuZnVuY3Rpb24gY2hlY2tEZWNvcmF0b3JBcmd1bWVudHMoZnVuY3Rpb25OYW1lLCBzaWduYXR1cmUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGFyZyA9IGFyZ3NbaV07XG4gICAgICBpZiAoYXJnICYmIGFyZy5wcm90b3R5cGUgJiYgYXJnLnByb3RvdHlwZS5yZW5kZXIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvciggLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICdZb3Ugc2VlbSB0byBiZSBhcHBseWluZyB0aGUgYXJndW1lbnRzIGluIHRoZSB3cm9uZyBvcmRlci4gJyArICgnSXQgc2hvdWxkIGJlICcgKyBmdW5jdGlvbk5hbWUgKyAnKCcgKyBzaWduYXR1cmUgKyAnKShDb21wb25lbnQpLCBub3QgdGhlIG90aGVyIHdheSBhcm91bmQuICcpICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLXRyb3VibGVzaG9vdGluZy5odG1sI3lvdS1zZWVtLXRvLWJlLWFwcGx5aW5nLXRoZS1hcmd1bWVudHMtaW4tdGhlLXdyb25nLW9yZGVyJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDExMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3NsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEcmFnTGF5ZXI7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJy4vdXRpbHMvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNTaGFsbG93RXF1YWwpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWxTY2FsYXInKTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbFNjYWxhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1NoYWxsb3dFcXVhbFNjYWxhcik7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc1BsYWluT2JqZWN0KTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzID0gcmVxdWlyZSgnLi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cycpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50cyk7XG5cbmZ1bmN0aW9uIERyYWdMYXllcihjb2xsZWN0KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyWydkZWZhdWx0J10uYXBwbHkodW5kZWZpbmVkLCBbJ0RyYWdMYXllcicsICdjb2xsZWN0Wywgb3B0aW9uc10nXS5jb25jYXQoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBjb2xsZWN0ID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgXCJjb2xsZWN0XCIgcHJvdmlkZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIERyYWdMYXllciAnICsgJ3RvIGJlIGEgZnVuY3Rpb24gdGhhdCBjb2xsZWN0cyBwcm9wcyB0byBpbmplY3QgaW50byB0aGUgY29tcG9uZW50LiAnLCAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1sYXllci5odG1sJywgY29sbGVjdCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzUGxhaW5PYmplY3QyWydkZWZhdWx0J10ob3B0aW9ucyksICdFeHBlY3RlZCBcIm9wdGlvbnNcIiBwcm92aWRlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIERyYWdMYXllciB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0IHdoZW4gc3BlY2lmaWVkLiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctbGF5ZXIuaHRtbCcsIG9wdGlvbnMpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0ZUxheWVyKERlY29yYXRlZENvbXBvbmVudCkge1xuICAgIHZhciBfb3B0aW9ucyRhcmVQcm9wc0VxdWFsID0gb3B0aW9ucy5hcmVQcm9wc0VxdWFsO1xuICAgIHZhciBhcmVQcm9wc0VxdWFsID0gX29wdGlvbnMkYXJlUHJvcHNFcXVhbCA9PT0gdW5kZWZpbmVkID8gX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyMlsnZGVmYXVsdCddIDogX29wdGlvbnMkYXJlUHJvcHNFcXVhbDtcblxuICAgIHZhciBkaXNwbGF5TmFtZSA9IERlY29yYXRlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBEZWNvcmF0ZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICAgIHJldHVybiAoZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhEcmFnTGF5ZXJDb250YWluZXIsIF9Db21wb25lbnQpO1xuXG4gICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLmdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMuY2hpbGQ7XG4gICAgICB9O1xuXG4gICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gIWFyZVByb3BzRXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fCAhX3V0aWxzU2hhbGxvd0VxdWFsMlsnZGVmYXVsdCddKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgICB9O1xuXG4gICAgICBfY3JlYXRlQ2xhc3MoRHJhZ0xheWVyQ29udGFpbmVyLCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdEZWNvcmF0ZWRDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogRGVjb3JhdGVkQ29tcG9uZW50LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc3BsYXlOYW1lJyxcbiAgICAgICAgdmFsdWU6ICdEcmFnTGF5ZXIoJyArIGRpc3BsYXlOYW1lICsgJyknLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbnRleHRUeXBlcycsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgZHJhZ0Ryb3BNYW5hZ2VyOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH1dKTtcblxuICAgICAgZnVuY3Rpb24gRHJhZ0xheWVyQ29udGFpbmVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnTGF5ZXJDb250YWluZXIpO1xuXG4gICAgICAgIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBjb250ZXh0LmRyYWdEcm9wTWFuYWdlcjtcbiAgICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgdGhpcy5tYW5hZ2VyID09PSAnb2JqZWN0JywgJ0NvdWxkIG5vdCBmaW5kIHRoZSBkcmFnIGFuZCBkcm9wIG1hbmFnZXIgaW4gdGhlIGNvbnRleHQgb2YgJXMuICcgKyAnTWFrZSBzdXJlIHRvIHdyYXAgdGhlIHRvcC1sZXZlbCBjb21wb25lbnQgb2YgeW91ciBhcHAgd2l0aCBEcmFnRHJvcENvbnRleHQuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtdHJvdWJsZXNob290aW5nLmh0bWwjY291bGQtbm90LWZpbmQtdGhlLWRyYWctYW5kLWRyb3AtbWFuYWdlci1pbi10aGUtY29udGV4dCcsIGRpc3BsYXlOYW1lLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICB9XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQgPSB0cnVlO1xuXG4gICAgICAgIHZhciBtb25pdG9yID0gdGhpcy5tYW5hZ2VyLmdldE1vbml0b3IoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21PZmZzZXRDaGFuZ2UgPSBtb25pdG9yLnN1YnNjcmliZVRvT2Zmc2V0Q2hhbmdlKHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUZyb21TdGF0ZUNoYW5nZSA9IG1vbml0b3Iuc3Vic2NyaWJlVG9TdGF0ZUNoYW5nZSh0aGlzLmhhbmRsZUNoYW5nZSk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbU9mZnNldENoYW5nZSgpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVN0YXRlQ2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ3VycmVudGx5TW91bnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSB0aGlzLmdldEN1cnJlbnRTdGF0ZSgpO1xuICAgICAgICBpZiAoIV91dGlsc1NoYWxsb3dFcXVhbDJbJ2RlZmF1bHQnXShuZXh0U3RhdGUsIHRoaXMuc3RhdGUpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBEcmFnTGF5ZXJDb250YWluZXIucHJvdG90eXBlLmdldEN1cnJlbnRTdGF0ZSA9IGZ1bmN0aW9uIGdldEN1cnJlbnRTdGF0ZSgpIHtcbiAgICAgICAgdmFyIG1vbml0b3IgPSB0aGlzLm1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgICByZXR1cm4gY29sbGVjdChtb25pdG9yKTtcbiAgICAgIH07XG5cbiAgICAgIERyYWdMYXllckNvbnRhaW5lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoRGVjb3JhdGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSwge1xuICAgICAgICAgIHJlZjogJ2NoaWxkJyB9KSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gRHJhZ0xheWVyQ29udGFpbmVyO1xuICAgIH0pKF9yZWFjdC5Db21wb25lbnQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL0RyYWdMYXllci5qc1xuICoqIG1vZHVsZSBpZCA9IDExMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHNoYWxsb3dFcXVhbDtcblxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghaGFzT3duLmNhbGwob2JqQiwga2V5c0FbaV0pIHx8IG9iakFba2V5c0FbaV1dICE9PSBvYmpCW2tleXNBW2ldXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWxBID0gb2JqQVtrZXlzQVtpXV07XG4gICAgdmFyIHZhbEIgPSBvYmpCW2tleXNBW2ldXTtcblxuICAgIGlmICh2YWxBICE9PSB2YWxCKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi91dGlscy9zaGFsbG93RXF1YWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHNoYWxsb3dFcXVhbFNjYWxhcjtcblxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsU2NhbGFyKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghaGFzT3duLmNhbGwob2JqQiwga2V5c0FbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbEEgPSBvYmpBW2tleXNBW2ldXTtcbiAgICB2YXIgdmFsQiA9IG9iakJba2V5c0FbaV1dO1xuXG4gICAgaWYgKHZhbEEgIT09IHZhbEIgfHwgdHlwZW9mIHZhbEEgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWxCID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3V0aWxzL3NoYWxsb3dFcXVhbFNjYWxhci5qc1xuICoqIG1vZHVsZSBpZCA9IDExM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIF9zbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERyYWdTb3VyY2U7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzUGxhaW5PYmplY3QpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMgPSByZXF1aXJlKCcuL3V0aWxzL2NoZWNrRGVjb3JhdG9yQXJndW1lbnRzJyk7XG5cbnZhciBfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzKTtcblxudmFyIF9kZWNvcmF0ZUhhbmRsZXIgPSByZXF1aXJlKCcuL2RlY29yYXRlSGFuZGxlcicpO1xuXG52YXIgX2RlY29yYXRlSGFuZGxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWNvcmF0ZUhhbmRsZXIpO1xuXG52YXIgX3JlZ2lzdGVyU291cmNlID0gcmVxdWlyZSgnLi9yZWdpc3RlclNvdXJjZScpO1xuXG52YXIgX3JlZ2lzdGVyU291cmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZ2lzdGVyU291cmNlKTtcblxudmFyIF9jcmVhdGVTb3VyY2VGYWN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVTb3VyY2VGYWN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlU291cmNlRmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTb3VyY2VGYWN0b3J5KTtcblxudmFyIF9jcmVhdGVTb3VyY2VNb25pdG9yID0gcmVxdWlyZSgnLi9jcmVhdGVTb3VyY2VNb25pdG9yJyk7XG5cbnZhciBfY3JlYXRlU291cmNlTW9uaXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTb3VyY2VNb25pdG9yKTtcblxudmFyIF9jcmVhdGVTb3VyY2VDb25uZWN0b3IgPSByZXF1aXJlKCcuL2NyZWF0ZVNvdXJjZUNvbm5lY3RvcicpO1xuXG52YXIgX2NyZWF0ZVNvdXJjZUNvbm5lY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTb3VyY2VDb25uZWN0b3IpO1xuXG52YXIgX3V0aWxzSXNWYWxpZFR5cGUgPSByZXF1aXJlKCcuL3V0aWxzL2lzVmFsaWRUeXBlJyk7XG5cbnZhciBfdXRpbHNJc1ZhbGlkVHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0lzVmFsaWRUeXBlKTtcblxuZnVuY3Rpb24gRHJhZ1NvdXJjZSh0eXBlLCBzcGVjLCBjb2xsZWN0KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbM107XG5cbiAgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyWydkZWZhdWx0J10uYXBwbHkodW5kZWZpbmVkLCBbJ0RyYWdTb3VyY2UnLCAndHlwZSwgc3BlYywgY29sbGVjdFssIG9wdGlvbnNdJ10uY29uY2F0KF9zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgdmFyIGdldFR5cGUgPSB0eXBlO1xuICBpZiAodHlwZW9mIHR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKF91dGlsc0lzVmFsaWRUeXBlMlsnZGVmYXVsdCddKHR5cGUpLCAnRXhwZWN0ZWQgXCJ0eXBlXCIgcHJvdmlkZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIERyYWdTb3VyY2UgdG8gYmUgJyArICdhIHN0cmluZywgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzdHJpbmcgZ2l2ZW4gdGhlIGN1cnJlbnQgcHJvcHMuICcgKyAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIHR5cGUpO1xuICAgIGdldFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9O1xuICB9XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzUGxhaW5PYmplY3QyWydkZWZhdWx0J10oc3BlYyksICdFeHBlY3RlZCBcInNwZWNcIiBwcm92aWRlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIERyYWdTb3VyY2UgdG8gYmUgJyArICdhIHBsYWluIG9iamVjdC4gSW5zdGVhZCwgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIHNwZWMpO1xuICB2YXIgY3JlYXRlU291cmNlID0gX2NyZWF0ZVNvdXJjZUZhY3RvcnkyWydkZWZhdWx0J10oc3BlYyk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGNvbGxlY3QgPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCBcImNvbGxlY3RcIiBwcm92aWRlZCBhcyB0aGUgdGhpcmQgYXJndW1lbnQgdG8gRHJhZ1NvdXJjZSB0byBiZSAnICsgJ2EgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcGxhaW4gb2JqZWN0IG9mIHByb3BzIHRvIGluamVjdC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgY29sbGVjdCk7XG4gIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oX2xvZGFzaElzUGxhaW5PYmplY3QyWydkZWZhdWx0J10ob3B0aW9ucyksICdFeHBlY3RlZCBcIm9wdGlvbnNcIiBwcm92aWRlZCBhcyB0aGUgZm91cnRoIGFyZ3VtZW50IHRvIERyYWdTb3VyY2UgdG8gYmUgJyArICdhIHBsYWluIG9iamVjdCB3aGVuIHNwZWNpZmllZC4gJyArICdJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgY29sbGVjdCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRlU291cmNlKERlY29yYXRlZENvbXBvbmVudCkge1xuICAgIHJldHVybiBfZGVjb3JhdGVIYW5kbGVyMlsnZGVmYXVsdCddKHtcbiAgICAgIGNvbm5lY3RCYWNrZW5kOiBmdW5jdGlvbiBjb25uZWN0QmFja2VuZChiYWNrZW5kLCBzb3VyY2VJZCkge1xuICAgICAgICByZXR1cm4gYmFja2VuZC5jb25uZWN0RHJhZ1NvdXJjZShzb3VyY2VJZCk7XG4gICAgICB9LFxuICAgICAgY29udGFpbmVyRGlzcGxheU5hbWU6ICdEcmFnU291cmNlJyxcbiAgICAgIGNyZWF0ZUhhbmRsZXI6IGNyZWF0ZVNvdXJjZSxcbiAgICAgIHJlZ2lzdGVySGFuZGxlcjogX3JlZ2lzdGVyU291cmNlMlsnZGVmYXVsdCddLFxuICAgICAgY3JlYXRlTW9uaXRvcjogX2NyZWF0ZVNvdXJjZU1vbml0b3IyWydkZWZhdWx0J10sXG4gICAgICBjcmVhdGVDb25uZWN0b3I6IF9jcmVhdGVTb3VyY2VDb25uZWN0b3IyWydkZWZhdWx0J10sXG4gICAgICBEZWNvcmF0ZWRDb21wb25lbnQ6IERlY29yYXRlZENvbXBvbmVudCxcbiAgICAgIGdldFR5cGU6IGdldFR5cGUsXG4gICAgICBjb2xsZWN0OiBjb2xsZWN0LFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL0RyYWdTb3VyY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZGVjb3JhdGVIYW5kbGVyO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZGlzcG9zYWJsZXMgPSByZXF1aXJlKCdkaXNwb3NhYmxlcycpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1NoYWxsb3dFcXVhbCk7XG5cbnZhciBfdXRpbHNTaGFsbG93RXF1YWxTY2FsYXIgPSByZXF1aXJlKCcuL3V0aWxzL3NoYWxsb3dFcXVhbFNjYWxhcicpO1xuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzU2hhbGxvd0VxdWFsU2NhbGFyKTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9sb2Rhc2hJc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzUGxhaW5PYmplY3QpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG5mdW5jdGlvbiBkZWNvcmF0ZUhhbmRsZXIoX3JlZikge1xuICB2YXIgRGVjb3JhdGVkQ29tcG9uZW50ID0gX3JlZi5EZWNvcmF0ZWRDb21wb25lbnQ7XG4gIHZhciBjcmVhdGVIYW5kbGVyID0gX3JlZi5jcmVhdGVIYW5kbGVyO1xuICB2YXIgY3JlYXRlTW9uaXRvciA9IF9yZWYuY3JlYXRlTW9uaXRvcjtcbiAgdmFyIGNyZWF0ZUNvbm5lY3RvciA9IF9yZWYuY3JlYXRlQ29ubmVjdG9yO1xuICB2YXIgcmVnaXN0ZXJIYW5kbGVyID0gX3JlZi5yZWdpc3RlckhhbmRsZXI7XG4gIHZhciBjb250YWluZXJEaXNwbGF5TmFtZSA9IF9yZWYuY29udGFpbmVyRGlzcGxheU5hbWU7XG4gIHZhciBnZXRUeXBlID0gX3JlZi5nZXRUeXBlO1xuICB2YXIgY29sbGVjdCA9IF9yZWYuY29sbGVjdDtcbiAgdmFyIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRhcmVQcm9wc0VxdWFsID0gb3B0aW9ucy5hcmVQcm9wc0VxdWFsO1xuICB2YXIgYXJlUHJvcHNFcXVhbCA9IF9vcHRpb25zJGFyZVByb3BzRXF1YWwgPT09IHVuZGVmaW5lZCA/IF91dGlsc1NoYWxsb3dFcXVhbFNjYWxhcjJbJ2RlZmF1bHQnXSA6IF9vcHRpb25zJGFyZVByb3BzRXF1YWw7XG5cbiAgdmFyIGRpc3BsYXlOYW1lID0gRGVjb3JhdGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IERlY29yYXRlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuXG4gIHJldHVybiAoZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoRHJhZ0Ryb3BDb250YWluZXIsIF9Db21wb25lbnQpO1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmdldEhhbmRsZXJJZCA9IGZ1bmN0aW9uIGdldEhhbmRsZXJJZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJJZDtcbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmdldERlY29yYXRlZENvbXBvbmVudEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0RGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvcmF0ZWRDb21wb25lbnRJbnN0YW5jZTtcbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgcmV0dXJuICFhcmVQcm9wc0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHwgIV91dGlsc1NoYWxsb3dFcXVhbDJbJ2RlZmF1bHQnXShuZXh0U3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoRHJhZ0Ryb3BDb250YWluZXIsIG51bGwsIFt7XG4gICAgICBrZXk6ICdEZWNvcmF0ZWRDb21wb25lbnQnLFxuICAgICAgdmFsdWU6IERlY29yYXRlZENvbXBvbmVudCxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9LCB7XG4gICAgICBrZXk6ICdkaXNwbGF5TmFtZScsXG4gICAgICB2YWx1ZTogY29udGFpbmVyRGlzcGxheU5hbWUgKyAnKCcgKyBkaXNwbGF5TmFtZSArICcpJyxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb250ZXh0VHlwZXMnLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgZHJhZ0Ryb3BNYW5hZ2VyOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH1dKTtcblxuICAgIGZ1bmN0aW9uIERyYWdEcm9wQ29udGFpbmVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhZ0Ryb3BDb250YWluZXIpO1xuXG4gICAgICBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpO1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVDaGlsZFJlZiA9IHRoaXMuaGFuZGxlQ2hpbGRSZWYuYmluZCh0aGlzKTtcblxuICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgdGhpcy5jb250ZXh0LmRyYWdEcm9wTWFuYWdlciA9PT0gJ29iamVjdCcsICdDb3VsZCBub3QgZmluZCB0aGUgZHJhZyBhbmQgZHJvcCBtYW5hZ2VyIGluIHRoZSBjb250ZXh0IG9mICVzLiAnICsgJ01ha2Ugc3VyZSB0byB3cmFwIHRoZSB0b3AtbGV2ZWwgY29tcG9uZW50IG9mIHlvdXIgYXBwIHdpdGggRHJhZ0Ryb3BDb250ZXh0LiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLXRyb3VibGVzaG9vdGluZy5odG1sI2NvdWxkLW5vdC1maW5kLXRoZS1kcmFnLWFuZC1kcm9wLW1hbmFnZXItaW4tdGhlLWNvbnRleHQnLCBkaXNwbGF5TmFtZSwgZGlzcGxheU5hbWUpO1xuXG4gICAgICB0aGlzLm1hbmFnZXIgPSB0aGlzLmNvbnRleHQuZHJhZ0Ryb3BNYW5hZ2VyO1xuICAgICAgdGhpcy5oYW5kbGVyTW9uaXRvciA9IGNyZWF0ZU1vbml0b3IodGhpcy5tYW5hZ2VyKTtcbiAgICAgIHRoaXMuaGFuZGxlckNvbm5lY3RvciA9IGNyZWF0ZUNvbm5lY3Rvcih0aGlzLm1hbmFnZXIuZ2V0QmFja2VuZCgpKTtcbiAgICAgIHRoaXMuaGFuZGxlciA9IGNyZWF0ZUhhbmRsZXIodGhpcy5oYW5kbGVyTW9uaXRvcik7XG5cbiAgICAgIHRoaXMuZGlzcG9zYWJsZSA9IG5ldyBfZGlzcG9zYWJsZXMuU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgICAgdGhpcy5yZWNlaXZlUHJvcHMocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuaXNDdXJyZW50bHlNb3VudGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlzcG9zYWJsZSA9IG5ldyBfZGlzcG9zYWJsZXMuU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgICAgdGhpcy5jdXJyZW50VHlwZSA9IG51bGw7XG4gICAgICB0aGlzLnJlY2VpdmVQcm9wcyh0aGlzLnByb3BzKTtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICghYXJlUHJvcHNFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMucmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUucmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gcmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICB0aGlzLmhhbmRsZXIucmVjZWl2ZVByb3BzKHByb3BzKTtcbiAgICAgIHRoaXMucmVjZWl2ZVR5cGUoZ2V0VHlwZShwcm9wcykpO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUucmVjZWl2ZVR5cGUgPSBmdW5jdGlvbiByZWNlaXZlVHlwZSh0eXBlKSB7XG4gICAgICBpZiAodHlwZSA9PT0gdGhpcy5jdXJyZW50VHlwZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VycmVudFR5cGUgPSB0eXBlO1xuXG4gICAgICB2YXIgX3JlZ2lzdGVySGFuZGxlciA9IHJlZ2lzdGVySGFuZGxlcih0eXBlLCB0aGlzLmhhbmRsZXIsIHRoaXMubWFuYWdlcik7XG5cbiAgICAgIHZhciBoYW5kbGVySWQgPSBfcmVnaXN0ZXJIYW5kbGVyLmhhbmRsZXJJZDtcbiAgICAgIHZhciB1bnJlZ2lzdGVyID0gX3JlZ2lzdGVySGFuZGxlci51bnJlZ2lzdGVyO1xuXG4gICAgICB0aGlzLmhhbmRsZXJJZCA9IGhhbmRsZXJJZDtcbiAgICAgIHRoaXMuaGFuZGxlck1vbml0b3IucmVjZWl2ZUhhbmRsZXJJZChoYW5kbGVySWQpO1xuICAgICAgdGhpcy5oYW5kbGVyQ29ubmVjdG9yLnJlY2VpdmVIYW5kbGVySWQoaGFuZGxlcklkKTtcblxuICAgICAgdmFyIGdsb2JhbE1vbml0b3IgPSB0aGlzLm1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICAgICAgdmFyIHVuc3Vic2NyaWJlID0gZ2xvYmFsTW9uaXRvci5zdWJzY3JpYmVUb1N0YXRlQ2hhbmdlKHRoaXMuaGFuZGxlQ2hhbmdlLCB7IGhhbmRsZXJJZHM6IFtoYW5kbGVySWRdIH0pO1xuXG4gICAgICB0aGlzLmRpc3Bvc2FibGUuc2V0RGlzcG9zYWJsZShuZXcgX2Rpc3Bvc2FibGVzLkNvbXBvc2l0ZURpc3Bvc2FibGUobmV3IF9kaXNwb3NhYmxlcy5EaXNwb3NhYmxlKHVuc3Vic2NyaWJlKSwgbmV3IF9kaXNwb3NhYmxlcy5EaXNwb3NhYmxlKHVucmVnaXN0ZXIpKSk7XG4gICAgfTtcblxuICAgIERyYWdEcm9wQ29udGFpbmVyLnByb3RvdHlwZS5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNDdXJyZW50bHlNb3VudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5leHRTdGF0ZSA9IHRoaXMuZ2V0Q3VycmVudFN0YXRlKCk7XG4gICAgICBpZiAoIV91dGlsc1NoYWxsb3dFcXVhbDJbJ2RlZmF1bHQnXShuZXh0U3RhdGUsIHRoaXMuc3RhdGUpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRHJhZ0Ryb3BDb250YWluZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgdGhpcy5kaXNwb3NhYmxlLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuaGFuZGxlckNvbm5lY3Rvci5yZWNlaXZlSGFuZGxlcklkKG51bGwpO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuaGFuZGxlQ2hpbGRSZWYgPSBmdW5jdGlvbiBoYW5kbGVDaGlsZFJlZihjb21wb25lbnQpIHtcbiAgICAgIHRoaXMuZGVjb3JhdGVkQ29tcG9uZW50SW5zdGFuY2UgPSBjb21wb25lbnQ7XG4gICAgICB0aGlzLmhhbmRsZXIucmVjZWl2ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUuZ2V0Q3VycmVudFN0YXRlID0gZnVuY3Rpb24gZ2V0Q3VycmVudFN0YXRlKCkge1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IGNvbGxlY3QodGhpcy5oYW5kbGVyQ29ubmVjdG9yLmhvb2tzLCB0aGlzLmhhbmRsZXJNb25pdG9yKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShuZXh0U3RhdGUpLCAnRXhwZWN0ZWQgYGNvbGxlY3RgIHNwZWNpZmllZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvICcgKyAnJXMgZm9yICVzIHRvIHJldHVybiBhIHBsYWluIG9iamVjdCBvZiBwcm9wcyB0byBpbmplY3QuICcgKyAnSW5zdGVhZCwgcmVjZWl2ZWQgJXMuJywgY29udGFpbmVyRGlzcGxheU5hbWUsIGRpc3BsYXlOYW1lLCBuZXh0U3RhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgIH07XG5cbiAgICBEcmFnRHJvcENvbnRhaW5lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KERlY29yYXRlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUsIHtcbiAgICAgICAgcmVmOiB0aGlzLmhhbmRsZUNoaWxkUmVmIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERyYWdEcm9wQ29udGFpbmVyO1xuICB9KShfcmVhY3QuQ29tcG9uZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9kZWNvcmF0ZUhhbmRsZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzRGlzcG9zYWJsZTIgPSByZXF1aXJlKCcuL2lzRGlzcG9zYWJsZScpO1xuXG52YXIgX2lzRGlzcG9zYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaXNEaXNwb3NhYmxlMik7XG5cbmV4cG9ydHMuaXNEaXNwb3NhYmxlID0gX2lzRGlzcG9zYWJsZTNbJ2RlZmF1bHQnXTtcblxudmFyIF9EaXNwb3NhYmxlMiA9IHJlcXVpcmUoJy4vRGlzcG9zYWJsZScpO1xuXG52YXIgX0Rpc3Bvc2FibGUzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX0Rpc3Bvc2FibGUyKTtcblxuZXhwb3J0cy5EaXNwb3NhYmxlID0gX0Rpc3Bvc2FibGUzWydkZWZhdWx0J107XG5cbnZhciBfQ29tcG9zaXRlRGlzcG9zYWJsZTIgPSByZXF1aXJlKCcuL0NvbXBvc2l0ZURpc3Bvc2FibGUnKTtcblxudmFyIF9Db21wb3NpdGVEaXNwb3NhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9Db21wb3NpdGVEaXNwb3NhYmxlMik7XG5cbmV4cG9ydHMuQ29tcG9zaXRlRGlzcG9zYWJsZSA9IF9Db21wb3NpdGVEaXNwb3NhYmxlM1snZGVmYXVsdCddO1xuXG52YXIgX1NlcmlhbERpc3Bvc2FibGUyID0gcmVxdWlyZSgnLi9TZXJpYWxEaXNwb3NhYmxlJyk7XG5cbnZhciBfU2VyaWFsRGlzcG9zYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfU2VyaWFsRGlzcG9zYWJsZTIpO1xuXG5leHBvcnRzLlNlcmlhbERpc3Bvc2FibGUgPSBfU2VyaWFsRGlzcG9zYWJsZTNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kaXNwb3NhYmxlcy9tb2R1bGVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBpc0Rpc3Bvc2FibGU7XG5cbmZ1bmN0aW9uIGlzRGlzcG9zYWJsZShvYmopIHtcbiAgcmV0dXJuIEJvb2xlYW4ob2JqICYmIHR5cGVvZiBvYmouZGlzcG9zZSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Rpc3Bvc2FibGVzL21vZHVsZXMvaXNEaXNwb3NhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuLyoqXG4gKiBUaGUgYmFzaWMgZGlzcG9zYWJsZS5cbiAqL1xuXG52YXIgRGlzcG9zYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERpc3Bvc2FibGUoYWN0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpc3Bvc2FibGUpO1xuXG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb24gfHwgbm9vcDtcbiAgfVxuXG4gIERpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICB0aGlzLmFjdGlvbi5jYWxsKG51bGwpO1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKERpc3Bvc2FibGUsIG51bGwsIFt7XG4gICAga2V5OiBcImVtcHR5XCIsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogeyBkaXNwb3NlOiBub29wIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEaXNwb3NhYmxlO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEaXNwb3NhYmxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kaXNwb3NhYmxlcy9tb2R1bGVzL0Rpc3Bvc2FibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9O1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzRGlzcG9zYWJsZSA9IHJlcXVpcmUoJy4vaXNEaXNwb3NhYmxlJyk7XG5cbnZhciBfaXNEaXNwb3NhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pc0Rpc3Bvc2FibGUpO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBncm91cCBvZiBkaXNwb3NhYmxlIHJlc291cmNlcyB0aGF0IGFyZSBkaXNwb3NlZCB0b2dldGhlci5cbiAqL1xuXG52YXIgQ29tcG9zaXRlRGlzcG9zYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbXBvc2l0ZURpc3Bvc2FibGUoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRpc3Bvc2FibGVzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBkaXNwb3NhYmxlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9zaXRlRGlzcG9zYWJsZSk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShkaXNwb3NhYmxlc1swXSkgJiYgZGlzcG9zYWJsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBkaXNwb3NhYmxlcyA9IGRpc3Bvc2FibGVzWzBdO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzcG9zYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghX2lzRGlzcG9zYWJsZTJbJ2RlZmF1bHQnXShkaXNwb3NhYmxlc1tpXSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhIGRpc3Bvc2FibGUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2FibGVzID0gZGlzcG9zYWJsZXM7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGRpc3Bvc2FibGUgdG8gdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUgb3IgZGlzcG9zZXMgdGhlIGRpc3Bvc2FibGUgaWYgdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUgaXMgZGlzcG9zZWQuXG4gICAqIEBwYXJhbSB7RGlzcG9zYWJsZX0gaXRlbSBEaXNwb3NhYmxlIHRvIGFkZC5cbiAgICovXG5cbiAgQ29tcG9zaXRlRGlzcG9zYWJsZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICBpdGVtLmRpc3Bvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwb3NhYmxlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbmQgZGlzcG9zZXMgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYSBkaXNwb3NhYmxlIGZyb20gdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUuXG4gICAqIEBwYXJhbSB7RGlzcG9zYWJsZX0gaXRlbSBEaXNwb3NhYmxlIHRvIHJlbW92ZS5cbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgZm91bmQ7IGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG5cbiAgQ29tcG9zaXRlRGlzcG9zYWJsZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5kaXNwb3NhYmxlcy5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2FibGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgaXRlbS5kaXNwb3NlKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3Bvc2VzIGFsbCBkaXNwb3NhYmxlcyBpbiB0aGUgZ3JvdXAgYW5kIHJlbW92ZXMgdGhlbSBmcm9tIHRoZSBncm91cC5cbiAgICovXG5cbiAgQ29tcG9zaXRlRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsZW4gPSB0aGlzLmRpc3Bvc2FibGVzLmxlbmd0aDtcbiAgICB2YXIgY3VycmVudERpc3Bvc2FibGVzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgY3VycmVudERpc3Bvc2FibGVzW2ldID0gdGhpcy5kaXNwb3NhYmxlc1tpXTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgIHRoaXMuZGlzcG9zYWJsZXMgPSBbXTtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjdXJyZW50RGlzcG9zYWJsZXNbaV0uZGlzcG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ29tcG9zaXRlRGlzcG9zYWJsZTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvbXBvc2l0ZURpc3Bvc2FibGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kaXNwb3NhYmxlcy9tb2R1bGVzL0NvbXBvc2l0ZURpc3Bvc2FibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9O1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzRGlzcG9zYWJsZSA9IHJlcXVpcmUoJy4vaXNEaXNwb3NhYmxlJyk7XG5cbnZhciBfaXNEaXNwb3NhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pc0Rpc3Bvc2FibGUpO1xuXG52YXIgU2VyaWFsRGlzcG9zYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNlcmlhbERpc3Bvc2FibGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcmlhbERpc3Bvc2FibGUpO1xuXG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB1bmRlcmx5aW5nIGRpc3Bvc2FibGUuXG4gICAqIEByZXR1cm4gVGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZS5cbiAgICovXG5cbiAgU2VyaWFsRGlzcG9zYWJsZS5wcm90b3R5cGUuZ2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uIGdldERpc3Bvc2FibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICAvKipcbiAgICogU2V0cyB0aGUgdW5kZXJseWluZyBkaXNwb3NhYmxlLlxuICAgKiBAcGFyYW0ge0Rpc3Bvc2FibGV9IHZhbHVlIFRoZSBuZXcgdW5kZXJseWluZyBkaXNwb3NhYmxlLlxuICAgKi9cblxuICBTZXJpYWxEaXNwb3NhYmxlLnByb3RvdHlwZS5zZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gc2V0RGlzcG9zYWJsZSgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMF07XG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAhX2lzRGlzcG9zYWJsZTJbJ2RlZmF1bHQnXSh2YWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZWl0aGVyIGFuIGVtcHR5IHZhbHVlIG9yIGEgdmFsaWQgZGlzcG9zYWJsZScpO1xuICAgIH1cblxuICAgIHZhciBpc0Rpc3Bvc2VkID0gdGhpcy5pc0Rpc3Bvc2VkO1xuICAgIHZhciBwcmV2aW91cyA9IHVuZGVmaW5lZDtcblxuICAgIGlmICghaXNEaXNwb3NlZCkge1xuICAgICAgcHJldmlvdXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgIHByZXZpb3VzLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwb3NlZCAmJiB2YWx1ZSkge1xuICAgICAgdmFsdWUuZGlzcG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGlzcG9zZXMgdGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZSBhcyB3ZWxsIGFzIGFsbCBmdXR1cmUgcmVwbGFjZW1lbnRzLlxuICAgKi9cblxuICBTZXJpYWxEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICB2YXIgcHJldmlvdXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgcHJldmlvdXMuZGlzcG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU2VyaWFsRGlzcG9zYWJsZTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNlcmlhbERpc3Bvc2FibGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kaXNwb3NhYmxlcy9tb2R1bGVzL1NlcmlhbERpc3Bvc2FibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSByZWdpc3RlclNvdXJjZTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJTb3VyY2UodHlwZSwgc291cmNlLCBtYW5hZ2VyKSB7XG4gIHZhciByZWdpc3RyeSA9IG1hbmFnZXIuZ2V0UmVnaXN0cnkoKTtcbiAgdmFyIHNvdXJjZUlkID0gcmVnaXN0cnkuYWRkU291cmNlKHR5cGUsIHNvdXJjZSk7XG5cbiAgZnVuY3Rpb24gdW5yZWdpc3RlclNvdXJjZSgpIHtcbiAgICByZWdpc3RyeS5yZW1vdmVTb3VyY2Uoc291cmNlSWQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVySWQ6IHNvdXJjZUlkLFxuICAgIHVucmVnaXN0ZXI6IHVucmVnaXN0ZXJTb3VyY2VcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3JlZ2lzdGVyU291cmNlLmpzXG4gKiogbW9kdWxlIGlkID0gMTIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVTb3VyY2VGYWN0b3J5O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2xvZGFzaElzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoSXNQbGFpbk9iamVjdCk7XG5cbnZhciBBTExPV0VEX1NQRUNfTUVUSE9EUyA9IFsnY2FuRHJhZycsICdiZWdpbkRyYWcnLCAnY2FuRHJhZycsICdpc0RyYWdnaW5nJywgJ2VuZERyYWcnXTtcbnZhciBSRVFVSVJFRF9TUEVDX01FVEhPRFMgPSBbJ2JlZ2luRHJhZyddO1xuXG5mdW5jdGlvbiBjcmVhdGVTb3VyY2VGYWN0b3J5KHNwZWMpIHtcbiAgT2JqZWN0LmtleXMoc3BlYykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShBTExPV0VEX1NQRUNfTUVUSE9EUy5pbmRleE9mKGtleSkgPiAtMSwgJ0V4cGVjdGVkIHRoZSBkcmFnIHNvdXJjZSBzcGVjaWZpY2F0aW9uIHRvIG9ubHkgaGF2ZSAnICsgJ3NvbWUgb2YgdGhlIGZvbGxvd2luZyBrZXlzOiAlcy4gJyArICdJbnN0ZWFkIHJlY2VpdmVkIGEgc3BlY2lmaWNhdGlvbiB3aXRoIGFuIHVuZXhwZWN0ZWQgXCIlc1wiIGtleS4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcmFnLXNvdXJjZS5odG1sJywgQUxMT1dFRF9TUEVDX01FVEhPRFMuam9pbignLCAnKSwga2V5KTtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBzcGVjW2tleV0gPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCAlcyBpbiB0aGUgZHJhZyBzb3VyY2Ugc3BlY2lmaWNhdGlvbiB0byBiZSBhIGZ1bmN0aW9uLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgYSBzcGVjaWZpY2F0aW9uIHdpdGggJXM6ICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBrZXksIGtleSwgc3BlY1trZXldKTtcbiAgfSk7XG4gIFJFUVVJUkVEX1NQRUNfTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBzcGVjW2tleV0gPT09ICdmdW5jdGlvbicsICdFeHBlY3RlZCAlcyBpbiB0aGUgZHJhZyBzb3VyY2Ugc3BlY2lmaWNhdGlvbiB0byBiZSBhIGZ1bmN0aW9uLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgYSBzcGVjaWZpY2F0aW9uIHdpdGggJXM6ICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLmh0bWwnLCBrZXksIGtleSwgc3BlY1trZXldKTtcbiAgfSk7XG5cbiAgdmFyIFNvdXJjZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU291cmNlKG1vbml0b3IpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTb3VyY2UpO1xuXG4gICAgICB0aGlzLm1vbml0b3IgPSBtb25pdG9yO1xuICAgICAgdGhpcy5wcm9wcyA9IG51bGw7XG4gICAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgU291cmNlLnByb3RvdHlwZS5yZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiByZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB9O1xuXG4gICAgU291cmNlLnByb3RvdHlwZS5yZWNlaXZlQ29tcG9uZW50ID0gZnVuY3Rpb24gcmVjZWl2ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICBTb3VyY2UucHJvdG90eXBlLmNhbkRyYWcgPSBmdW5jdGlvbiBjYW5EcmFnKCkge1xuICAgICAgaWYgKCFzcGVjLmNhbkRyYWcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzcGVjLmNhbkRyYWcodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yKTtcbiAgICB9O1xuXG4gICAgU291cmNlLnByb3RvdHlwZS5pc0RyYWdnaW5nID0gZnVuY3Rpb24gaXNEcmFnZ2luZyhnbG9iYWxNb25pdG9yLCBzb3VyY2VJZCkge1xuICAgICAgaWYgKCFzcGVjLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZUlkID09PSBnbG9iYWxNb25pdG9yLmdldFNvdXJjZUlkKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzcGVjLmlzRHJhZ2dpbmcodGhpcy5wcm9wcywgdGhpcy5tb25pdG9yKTtcbiAgICB9O1xuXG4gICAgU291cmNlLnByb3RvdHlwZS5iZWdpbkRyYWcgPSBmdW5jdGlvbiBiZWdpbkRyYWcoKSB7XG4gICAgICB2YXIgaXRlbSA9IHNwZWMuYmVnaW5EcmFnKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvciwgdGhpcy5jb21wb25lbnQpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShpdGVtKSwgJ2JlZ2luRHJhZygpIG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgZHJhZ2dlZCBpdGVtLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJhZy1zb3VyY2UuaHRtbCcsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfTtcblxuICAgIFNvdXJjZS5wcm90b3R5cGUuZW5kRHJhZyA9IGZ1bmN0aW9uIGVuZERyYWcoKSB7XG4gICAgICBpZiAoIXNwZWMuZW5kRHJhZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNwZWMuZW5kRHJhZyh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IsIHRoaXMuY29tcG9uZW50KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNvdXJjZTtcbiAgfSkoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlU291cmNlKG1vbml0b3IpIHtcbiAgICByZXR1cm4gbmV3IFNvdXJjZShtb25pdG9yKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi9jcmVhdGVTb3VyY2VGYWN0b3J5LmpzXG4gKiogbW9kdWxlIGlkID0gMTIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVTb3VyY2VNb25pdG9yO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgaXNDYWxsaW5nQ2FuRHJhZyA9IGZhbHNlO1xudmFyIGlzQ2FsbGluZ0lzRHJhZ2dpbmcgPSBmYWxzZTtcblxudmFyIFNvdXJjZU1vbml0b3IgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTb3VyY2VNb25pdG9yKG1hbmFnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU291cmNlTW9uaXRvcik7XG5cbiAgICB0aGlzLmludGVybmFsTW9uaXRvciA9IG1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICB9XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUucmVjZWl2ZUhhbmRsZXJJZCA9IGZ1bmN0aW9uIHJlY2VpdmVIYW5kbGVySWQoc291cmNlSWQpIHtcbiAgICB0aGlzLnNvdXJjZUlkID0gc291cmNlSWQ7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuY2FuRHJhZyA9IGZ1bmN0aW9uIGNhbkRyYWcoKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSghaXNDYWxsaW5nQ2FuRHJhZywgJ1lvdSBtYXkgbm90IGNhbGwgbW9uaXRvci5jYW5EcmFnKCkgaW5zaWRlIHlvdXIgY2FuRHJhZygpIGltcGxlbWVudGF0aW9uLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLW1vbml0b3IuaHRtbCcpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlzQ2FsbGluZ0NhbkRyYWcgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmNhbkRyYWdTb3VyY2UodGhpcy5zb3VyY2VJZCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzQ2FsbGluZ0NhbkRyYWcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuaXNEcmFnZ2luZyA9IGZ1bmN0aW9uIGlzRHJhZ2dpbmcoKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSghaXNDYWxsaW5nSXNEcmFnZ2luZywgJ1lvdSBtYXkgbm90IGNhbGwgbW9uaXRvci5pc0RyYWdnaW5nKCkgaW5zaWRlIHlvdXIgaXNEcmFnZ2luZygpIGltcGxlbWVudGF0aW9uLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyYWctc291cmNlLW1vbml0b3IuaHRtbCcpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlzQ2FsbGluZ0lzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmlzRHJhZ2dpbmdTb3VyY2UodGhpcy5zb3VyY2VJZCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzQ2FsbGluZ0lzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0SXRlbVR5cGUgPSBmdW5jdGlvbiBnZXRJdGVtVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SXRlbVR5cGUoKTtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRJdGVtID0gZnVuY3Rpb24gZ2V0SXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SXRlbSgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldERyb3BSZXN1bHQgPSBmdW5jdGlvbiBnZXREcm9wUmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZGlkRHJvcCA9IGZ1bmN0aW9uIGRpZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmRpZERyb3AoKTtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0SW5pdGlhbENsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SW5pdGlhbENsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gIH07XG5cbiAgU291cmNlTW9uaXRvci5wcm90b3R5cGUuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRTb3VyY2VDbGllbnRPZmZzZXQoKTtcbiAgfTtcblxuICBTb3VyY2VNb25pdG9yLnByb3RvdHlwZS5nZXRDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldENsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFNvdXJjZU1vbml0b3IucHJvdG90eXBlLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCA9IGZ1bmN0aW9uIGdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCk7XG4gIH07XG5cbiAgcmV0dXJuIFNvdXJjZU1vbml0b3I7XG59KSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVTb3VyY2VNb25pdG9yKG1hbmFnZXIpIHtcbiAgcmV0dXJuIG5ldyBTb3VyY2VNb25pdG9yKG1hbmFnZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVNvdXJjZU1vbml0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVNvdXJjZUNvbm5lY3RvcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dyYXBDb25uZWN0b3JIb29rcyA9IHJlcXVpcmUoJy4vd3JhcENvbm5lY3Rvckhvb2tzJyk7XG5cbnZhciBfd3JhcENvbm5lY3Rvckhvb2tzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXBDb25uZWN0b3JIb29rcyk7XG5cbnZhciBfYXJlT3B0aW9uc0VxdWFsID0gcmVxdWlyZSgnLi9hcmVPcHRpb25zRXF1YWwnKTtcblxudmFyIF9hcmVPcHRpb25zRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJlT3B0aW9uc0VxdWFsKTtcblxuZnVuY3Rpb24gY3JlYXRlU291cmNlQ29ubmVjdG9yKGJhY2tlbmQpIHtcbiAgdmFyIGN1cnJlbnRIYW5kbGVySWQgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIGN1cnJlbnREcmFnU291cmNlTm9kZSA9IHVuZGVmaW5lZDtcbiAgdmFyIGN1cnJlbnREcmFnU291cmNlT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdmFyIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZSA9IHVuZGVmaW5lZDtcblxuICB2YXIgY3VycmVudERyYWdQcmV2aWV3Tm9kZSA9IHVuZGVmaW5lZDtcbiAgdmFyIGN1cnJlbnREcmFnUHJldmlld09wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHZhciBkaXNjb25uZWN0Q3VycmVudERyYWdQcmV2aWV3ID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIHJlY29ubmVjdERyYWdTb3VyY2UoKSB7XG4gICAgaWYgKGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1NvdXJjZSkge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlKCk7XG4gICAgICBkaXNjb25uZWN0Q3VycmVudERyYWdTb3VyY2UgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50SGFuZGxlcklkICYmIGN1cnJlbnREcmFnU291cmNlTm9kZSkge1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcmFnU291cmNlID0gYmFja2VuZC5jb25uZWN0RHJhZ1NvdXJjZShjdXJyZW50SGFuZGxlcklkLCBjdXJyZW50RHJhZ1NvdXJjZU5vZGUsIGN1cnJlbnREcmFnU291cmNlT3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjb25uZWN0RHJhZ1ByZXZpZXcoKSB7XG4gICAgaWYgKGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcoKTtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50SGFuZGxlcklkICYmIGN1cnJlbnREcmFnUHJldmlld05vZGUpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJhZ1ByZXZpZXcgPSBiYWNrZW5kLmNvbm5lY3REcmFnUHJldmlldyhjdXJyZW50SGFuZGxlcklkLCBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlLCBjdXJyZW50RHJhZ1ByZXZpZXdPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlSGFuZGxlcklkKGhhbmRsZXJJZCkge1xuICAgIGlmIChoYW5kbGVySWQgPT09IGN1cnJlbnRIYW5kbGVySWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50SGFuZGxlcklkID0gaGFuZGxlcklkO1xuICAgIHJlY29ubmVjdERyYWdTb3VyY2UoKTtcbiAgICByZWNvbm5lY3REcmFnUHJldmlldygpO1xuICB9XG5cbiAgdmFyIGhvb2tzID0gX3dyYXBDb25uZWN0b3JIb29rczJbJ2RlZmF1bHQnXSh7XG4gICAgZHJhZ1NvdXJjZTogZnVuY3Rpb24gY29ubmVjdERyYWdTb3VyY2Uobm9kZSwgb3B0aW9ucykge1xuICAgICAgaWYgKG5vZGUgPT09IGN1cnJlbnREcmFnU291cmNlTm9kZSAmJiBfYXJlT3B0aW9uc0VxdWFsMlsnZGVmYXVsdCddKG9wdGlvbnMsIGN1cnJlbnREcmFnU291cmNlT3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50RHJhZ1NvdXJjZU5vZGUgPSBub2RlO1xuICAgICAgY3VycmVudERyYWdTb3VyY2VPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgcmVjb25uZWN0RHJhZ1NvdXJjZSgpO1xuICAgIH0sXG5cbiAgICBkcmFnUHJldmlldzogZnVuY3Rpb24gY29ubmVjdERyYWdQcmV2aWV3KG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChub2RlID09PSBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlICYmIF9hcmVPcHRpb25zRXF1YWwyWydkZWZhdWx0J10ob3B0aW9ucywgY3VycmVudERyYWdQcmV2aWV3T3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50RHJhZ1ByZXZpZXdOb2RlID0gbm9kZTtcbiAgICAgIGN1cnJlbnREcmFnUHJldmlld09wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICByZWNvbm5lY3REcmFnUHJldmlldygpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICByZWNlaXZlSGFuZGxlcklkOiByZWNlaXZlSGFuZGxlcklkLFxuICAgIGhvb2tzOiBob29rc1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVNvdXJjZUNvbm5lY3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gd3JhcENvbm5lY3Rvckhvb2tzO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbHNDbG9uZVdpdGhSZWYgPSByZXF1aXJlKCcuL3V0aWxzL2Nsb25lV2l0aFJlZicpO1xuXG52YXIgX3V0aWxzQ2xvbmVXaXRoUmVmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2xvbmVXaXRoUmVmKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIHRocm93SWZDb21wb3NpdGVDb21wb25lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gQ3VzdG9tIGNvbXBvbmVudHMgY2FuIG5vIGxvbmdlciBiZSB3cmFwcGVkIGRpcmVjdGx5IGluIFJlYWN0IERuRCAyLjBcbiAgLy8gc28gdGhhdCB3ZSBkb24ndCBuZWVkIHRvIGRlcGVuZCBvbiBmaW5kRE9NTm9kZSgpIGZyb20gcmVhY3QtZG9tLlxuICBpZiAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZGlzcGxheU5hbWUgPSBlbGVtZW50LnR5cGUuZGlzcGxheU5hbWUgfHwgZWxlbWVudC50eXBlLm5hbWUgfHwgJ3RoZSBjb21wb25lbnQnO1xuXG4gIHRocm93IG5ldyBFcnJvcignT25seSBuYXRpdmUgZWxlbWVudCBub2RlcyBjYW4gbm93IGJlIHBhc3NlZCB0byBSZWFjdCBEbkQgY29ubmVjdG9ycy4gJyArICgnWW91IGNhbiBlaXRoZXIgd3JhcCAnICsgZGlzcGxheU5hbWUgKyAnIGludG8gYSA8ZGl2Piwgb3IgdHVybiBpdCBpbnRvIGEgJykgKyAnZHJhZyBzb3VyY2Ugb3IgYSBkcm9wIHRhcmdldCBpdHNlbGYuJyk7XG59XG5cbmZ1bmN0aW9uIHdyYXBIb29rVG9SZWNvZ25pemVFbGVtZW50KGhvb2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudE9yTm9kZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzFdO1xuXG4gICAgLy8gV2hlbiBwYXNzZWQgYSBub2RlLCBjYWxsIHRoZSBob29rIHN0cmFpZ2h0IGF3YXkuXG4gICAgaWYgKCFfcmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudE9yTm9kZSkpIHtcbiAgICAgIHZhciBub2RlID0gZWxlbWVudE9yTm9kZTtcbiAgICAgIGhvb2sobm9kZSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgcGFzc2VkIGEgUmVhY3RFbGVtZW50LCBjbG9uZSBpdCBhbmQgYXR0YWNoIHRoaXMgZnVuY3Rpb24gYXMgYSByZWYuXG4gICAgLy8gVGhpcyBoZWxwcyB1cyBhY2hpZXZlIGEgbmVhdCBBUEkgd2hlcmUgdXNlciBkb2Vzbid0IGV2ZW4ga25vdyB0aGF0IHJlZnNcbiAgICAvLyBhcmUgYmVpbmcgdXNlZCB1bmRlciB0aGUgaG9vZC5cbiAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRPck5vZGU7XG4gICAgdGhyb3dJZkNvbXBvc2l0ZUNvbXBvbmVudEVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAvLyBXaGVuIG5vIG9wdGlvbnMgYXJlIHBhc3NlZCwgdXNlIHRoZSBob29rIGRpcmVjdGx5XG4gICAgdmFyIHJlZiA9IG9wdGlvbnMgPyBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgcmV0dXJuIGhvb2sobm9kZSwgb3B0aW9ucyk7XG4gICAgfSA6IGhvb2s7XG5cbiAgICByZXR1cm4gX3V0aWxzQ2xvbmVXaXRoUmVmMlsnZGVmYXVsdCddKGVsZW1lbnQsIHJlZik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb25uZWN0b3JIb29rcyhob29rcykge1xuICB2YXIgd3JhcHBlZEhvb2tzID0ge307XG5cbiAgT2JqZWN0LmtleXMoaG9va3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBob29rID0gaG9va3Nba2V5XTtcbiAgICB2YXIgd3JhcHBlZEhvb2sgPSB3cmFwSG9va1RvUmVjb2duaXplRWxlbWVudChob29rKTtcbiAgICB3cmFwcGVkSG9va3Nba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3cmFwcGVkSG9vaztcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gd3JhcHBlZEhvb2tzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL3dyYXBDb25uZWN0b3JIb29rcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY2xvbmVXaXRoUmVmO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBjbG9uZVdpdGhSZWYoZWxlbWVudCwgbmV3UmVmKSB7XG4gIHZhciBwcmV2aW91c1JlZiA9IGVsZW1lbnQucmVmO1xuICBfaW52YXJpYW50MlsnZGVmYXVsdCddKHR5cGVvZiBwcmV2aW91c1JlZiAhPT0gJ3N0cmluZycsICdDYW5ub3QgY29ubmVjdCBSZWFjdCBEbkQgdG8gYW4gZWxlbWVudCB3aXRoIGFuIGV4aXN0aW5nIHN0cmluZyByZWYuICcgKyAnUGxlYXNlIGNvbnZlcnQgaXQgdG8gdXNlIGEgY2FsbGJhY2sgcmVmIGluc3RlYWQsIG9yIHdyYXAgaXQgaW50byBhIDxzcGFuPiBvciA8ZGl2Pi4gJyArICdSZWFkIG1vcmU6IGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvbW9yZS1hYm91dC1yZWZzLmh0bWwjdGhlLXJlZi1jYWxsYmFjay1hdHRyaWJ1dGUnKTtcblxuICBpZiAoIXByZXZpb3VzUmVmKSB7XG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyByZWYgb24gdGhlIGVsZW1lbnQsIHVzZSB0aGUgbmV3IHJlZiBkaXJlY3RseVxuICAgIHJldHVybiBfcmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgIHJlZjogbmV3UmVmXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gX3JlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB7XG4gICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgbmV3UmVmKG5vZGUpO1xuXG4gICAgICBpZiAocHJldmlvdXNSZWYpIHtcbiAgICAgICAgcHJldmlvdXNSZWYobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kL2xpYi91dGlscy9jbG9uZVdpdGhSZWYuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGFyZU9wdGlvbnNFcXVhbDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzU2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi91dGlscy9zaGFsbG93RXF1YWwnKTtcblxudmFyIF91dGlsc1NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1NoYWxsb3dFcXVhbCk7XG5cbmZ1bmN0aW9uIGFyZU9wdGlvbnNFcXVhbChuZXh0T3B0aW9ucywgY3VycmVudE9wdGlvbnMpIHtcbiAgaWYgKGN1cnJlbnRPcHRpb25zID09PSBuZXh0T3B0aW9ucykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRPcHRpb25zICE9PSBudWxsICYmIG5leHRPcHRpb25zICE9PSBudWxsICYmIF91dGlsc1NoYWxsb3dFcXVhbDJbJ2RlZmF1bHQnXShjdXJyZW50T3B0aW9ucywgbmV4dE9wdGlvbnMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2FyZU9wdGlvbnNFcXVhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gaXNWYWxpZFR5cGU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hJc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKTtcblxudmFyIF9sb2Rhc2hJc0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaElzQXJyYXkpO1xuXG5mdW5jdGlvbiBpc1ZhbGlkVHlwZSh0eXBlLCBhbGxvd0FycmF5KSB7XG4gICAgICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N5bWJvbCcgfHwgYWxsb3dBcnJheSAmJiBfbG9kYXNoSXNBcnJheTJbJ2RlZmF1bHQnXSh0eXBlKSAmJiB0eXBlLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkVHlwZSh0LCBmYWxzZSk7XG4gICAgICAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvdXRpbHMvaXNWYWxpZFR5cGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBfc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5leHBvcnRzWydkZWZhdWx0J10gPSBEcm9wVGFyZ2V0O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc1BsYWluT2JqZWN0KTtcblxudmFyIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzID0gcmVxdWlyZSgnLi91dGlscy9jaGVja0RlY29yYXRvckFyZ3VtZW50cycpO1xuXG52YXIgX3V0aWxzQ2hlY2tEZWNvcmF0b3JBcmd1bWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDaGVja0RlY29yYXRvckFyZ3VtZW50cyk7XG5cbnZhciBfZGVjb3JhdGVIYW5kbGVyID0gcmVxdWlyZSgnLi9kZWNvcmF0ZUhhbmRsZXInKTtcblxudmFyIF9kZWNvcmF0ZUhhbmRsZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVjb3JhdGVIYW5kbGVyKTtcblxudmFyIF9yZWdpc3RlclRhcmdldCA9IHJlcXVpcmUoJy4vcmVnaXN0ZXJUYXJnZXQnKTtcblxudmFyIF9yZWdpc3RlclRhcmdldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWdpc3RlclRhcmdldCk7XG5cbnZhciBfY3JlYXRlVGFyZ2V0RmFjdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlVGFyZ2V0RmFjdG9yeScpO1xuXG52YXIgX2NyZWF0ZVRhcmdldEZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVGFyZ2V0RmFjdG9yeSk7XG5cbnZhciBfY3JlYXRlVGFyZ2V0TW9uaXRvciA9IHJlcXVpcmUoJy4vY3JlYXRlVGFyZ2V0TW9uaXRvcicpO1xuXG52YXIgX2NyZWF0ZVRhcmdldE1vbml0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVGFyZ2V0TW9uaXRvcik7XG5cbnZhciBfY3JlYXRlVGFyZ2V0Q29ubmVjdG9yID0gcmVxdWlyZSgnLi9jcmVhdGVUYXJnZXRDb25uZWN0b3InKTtcblxudmFyIF9jcmVhdGVUYXJnZXRDb25uZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVGFyZ2V0Q29ubmVjdG9yKTtcblxudmFyIF91dGlsc0lzVmFsaWRUeXBlID0gcmVxdWlyZSgnLi91dGlscy9pc1ZhbGlkVHlwZScpO1xuXG52YXIgX3V0aWxzSXNWYWxpZFR5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNJc1ZhbGlkVHlwZSk7XG5cbmZ1bmN0aW9uIERyb3BUYXJnZXQodHlwZSwgc3BlYywgY29sbGVjdCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzNdO1xuXG4gIF91dGlsc0NoZWNrRGVjb3JhdG9yQXJndW1lbnRzMlsnZGVmYXVsdCddLmFwcGx5KHVuZGVmaW5lZCwgWydEcm9wVGFyZ2V0JywgJ3R5cGUsIHNwZWMsIGNvbGxlY3RbLCBvcHRpb25zXSddLmNvbmNhdChfc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gIHZhciBnZXRUeXBlID0gdHlwZTtcbiAgaWYgKHR5cGVvZiB0eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfdXRpbHNJc1ZhbGlkVHlwZTJbJ2RlZmF1bHQnXSh0eXBlLCB0cnVlKSwgJ0V4cGVjdGVkIFwidHlwZVwiIHByb3ZpZGVkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBEcm9wVGFyZ2V0IHRvIGJlICcgKyAnYSBzdHJpbmcsIGFuIGFycmF5IG9mIHN0cmluZ3MsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlciBnaXZlbiAnICsgJ3RoZSBjdXJyZW50IHByb3BzLiBJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgdHlwZSk7XG4gICAgZ2V0VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH07XG4gIH1cbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShzcGVjKSwgJ0V4cGVjdGVkIFwic3BlY1wiIHByb3ZpZGVkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gRHJvcFRhcmdldCB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZCAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywgc3BlYyk7XG4gIHZhciBjcmVhdGVUYXJnZXQgPSBfY3JlYXRlVGFyZ2V0RmFjdG9yeTJbJ2RlZmF1bHQnXShzcGVjKTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2YgY29sbGVjdCA9PT0gJ2Z1bmN0aW9uJywgJ0V4cGVjdGVkIFwiY29sbGVjdFwiIHByb3ZpZGVkIGFzIHRoZSB0aGlyZCBhcmd1bWVudCB0byBEcm9wVGFyZ2V0IHRvIGJlICcgKyAnYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwbGFpbiBvYmplY3Qgb2YgcHJvcHMgdG8gaW5qZWN0LiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBjb2xsZWN0KTtcbiAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXShfbG9kYXNoSXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXShvcHRpb25zKSwgJ0V4cGVjdGVkIFwib3B0aW9uc1wiIHByb3ZpZGVkIGFzIHRoZSBmb3VydGggYXJndW1lbnQgdG8gRHJvcFRhcmdldCB0byBiZSAnICsgJ2EgcGxhaW4gb2JqZWN0IHdoZW4gc3BlY2lmaWVkLiAnICsgJ0luc3RlYWQsIHJlY2VpdmVkICVzLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0Lmh0bWwnLCBjb2xsZWN0KTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGVUYXJnZXQoRGVjb3JhdGVkQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIF9kZWNvcmF0ZUhhbmRsZXIyWydkZWZhdWx0J10oe1xuICAgICAgY29ubmVjdEJhY2tlbmQ6IGZ1bmN0aW9uIGNvbm5lY3RCYWNrZW5kKGJhY2tlbmQsIHRhcmdldElkKSB7XG4gICAgICAgIHJldHVybiBiYWNrZW5kLmNvbm5lY3REcm9wVGFyZ2V0KHRhcmdldElkKTtcbiAgICAgIH0sXG4gICAgICBjb250YWluZXJEaXNwbGF5TmFtZTogJ0Ryb3BUYXJnZXQnLFxuICAgICAgY3JlYXRlSGFuZGxlcjogY3JlYXRlVGFyZ2V0LFxuICAgICAgcmVnaXN0ZXJIYW5kbGVyOiBfcmVnaXN0ZXJUYXJnZXQyWydkZWZhdWx0J10sXG4gICAgICBjcmVhdGVNb25pdG9yOiBfY3JlYXRlVGFyZ2V0TW9uaXRvcjJbJ2RlZmF1bHQnXSxcbiAgICAgIGNyZWF0ZUNvbm5lY3RvcjogX2NyZWF0ZVRhcmdldENvbm5lY3RvcjJbJ2RlZmF1bHQnXSxcbiAgICAgIERlY29yYXRlZENvbXBvbmVudDogRGVjb3JhdGVkQ29tcG9uZW50LFxuICAgICAgZ2V0VHlwZTogZ2V0VHlwZSxcbiAgICAgIGNvbGxlY3Q6IGNvbGxlY3QsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvRHJvcFRhcmdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHJlZ2lzdGVyVGFyZ2V0O1xuXG5mdW5jdGlvbiByZWdpc3RlclRhcmdldCh0eXBlLCB0YXJnZXQsIG1hbmFnZXIpIHtcbiAgdmFyIHJlZ2lzdHJ5ID0gbWFuYWdlci5nZXRSZWdpc3RyeSgpO1xuICB2YXIgdGFyZ2V0SWQgPSByZWdpc3RyeS5hZGRUYXJnZXQodHlwZSwgdGFyZ2V0KTtcblxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyVGFyZ2V0KCkge1xuICAgIHJlZ2lzdHJ5LnJlbW92ZVRhcmdldCh0YXJnZXRJZCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhbmRsZXJJZDogdGFyZ2V0SWQsXG4gICAgdW5yZWdpc3RlcjogdW5yZWdpc3RlclRhcmdldFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvcmVnaXN0ZXJUYXJnZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVRhcmdldEZhY3Rvcnk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfbG9kYXNoSXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hJc1BsYWluT2JqZWN0KTtcblxudmFyIEFMTE9XRURfU1BFQ19NRVRIT0RTID0gWydjYW5Ecm9wJywgJ2hvdmVyJywgJ2Ryb3AnXTtcblxuZnVuY3Rpb24gY3JlYXRlVGFyZ2V0RmFjdG9yeShzcGVjKSB7XG4gIE9iamVjdC5rZXlzKHNwZWMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10oQUxMT1dFRF9TUEVDX01FVEhPRFMuaW5kZXhPZihrZXkpID4gLTEsICdFeHBlY3RlZCB0aGUgZHJvcCB0YXJnZXQgc3BlY2lmaWNhdGlvbiB0byBvbmx5IGhhdmUgJyArICdzb21lIG9mIHRoZSBmb2xsb3dpbmcga2V5czogJXMuICcgKyAnSW5zdGVhZCByZWNlaXZlZCBhIHNwZWNpZmljYXRpb24gd2l0aCBhbiB1bmV4cGVjdGVkIFwiJXNcIiBrZXkuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIEFMTE9XRURfU1BFQ19NRVRIT0RTLmpvaW4oJywgJyksIGtleSk7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSh0eXBlb2Ygc3BlY1trZXldID09PSAnZnVuY3Rpb24nLCAnRXhwZWN0ZWQgJXMgaW4gdGhlIGRyb3AgdGFyZ2V0IHNwZWNpZmljYXRpb24gdG8gYmUgYSBmdW5jdGlvbi4gJyArICdJbnN0ZWFkIHJlY2VpdmVkIGEgc3BlY2lmaWNhdGlvbiB3aXRoICVzOiAlcy4gJyArICdSZWFkIG1vcmU6IGh0dHA6Ly9nYWVhcm9uLmdpdGh1Yi5pby9yZWFjdC1kbmQvZG9jcy1kcm9wLXRhcmdldC5odG1sJywga2V5LCBrZXksIHNwZWNba2V5XSk7XG4gIH0pO1xuXG4gIHZhciBUYXJnZXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRhcmdldChtb25pdG9yKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFyZ2V0KTtcblxuICAgICAgdGhpcy5tb25pdG9yID0gbW9uaXRvcjtcbiAgICAgIHRoaXMucHJvcHMgPSBudWxsO1xuICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIFRhcmdldC5wcm90b3R5cGUucmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gcmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfTtcblxuICAgIFRhcmdldC5wcm90b3R5cGUucmVjZWl2ZU1vbml0b3IgPSBmdW5jdGlvbiByZWNlaXZlTW9uaXRvcihtb25pdG9yKSB7XG4gICAgICB0aGlzLm1vbml0b3IgPSBtb25pdG9yO1xuICAgIH07XG5cbiAgICBUYXJnZXQucHJvdG90eXBlLnJlY2VpdmVDb21wb25lbnQgPSBmdW5jdGlvbiByZWNlaXZlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIFRhcmdldC5wcm90b3R5cGUuY2FuRHJvcCA9IGZ1bmN0aW9uIGNhbkRyb3AoKSB7XG4gICAgICBpZiAoIXNwZWMuY2FuRHJvcCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNwZWMuY2FuRHJvcCh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IpO1xuICAgIH07XG5cbiAgICBUYXJnZXQucHJvdG90eXBlLmhvdmVyID0gZnVuY3Rpb24gaG92ZXIoKSB7XG4gICAgICBpZiAoIXNwZWMuaG92ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzcGVjLmhvdmVyKHRoaXMucHJvcHMsIHRoaXMubW9uaXRvciwgdGhpcy5jb21wb25lbnQpO1xuICAgIH07XG5cbiAgICBUYXJnZXQucHJvdG90eXBlLmRyb3AgPSBmdW5jdGlvbiBkcm9wKCkge1xuICAgICAgaWYgKCFzcGVjLmRyb3ApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZHJvcFJlc3VsdCA9IHNwZWMuZHJvcCh0aGlzLnByb3BzLCB0aGlzLm1vbml0b3IsIHRoaXMuY29tcG9uZW50KTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIF9pbnZhcmlhbnQyWydkZWZhdWx0J10odHlwZW9mIGRyb3BSZXN1bHQgPT09ICd1bmRlZmluZWQnIHx8IF9sb2Rhc2hJc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKGRyb3BSZXN1bHQpLCAnZHJvcCgpIG11c3QgZWl0aGVyIHJldHVybiB1bmRlZmluZWQsIG9yIGFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGRyb3AgcmVzdWx0LiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQgJXMuICcgKyAnUmVhZCBtb3JlOiBodHRwOi8vZ2FlYXJvbi5naXRodWIuaW8vcmVhY3QtZG5kL2RvY3MtZHJvcC10YXJnZXQuaHRtbCcsIGRyb3BSZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRyb3BSZXN1bHQ7XG4gICAgfTtcblxuICAgIHJldHVybiBUYXJnZXQ7XG4gIH0pKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVRhcmdldChtb25pdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBUYXJnZXQobW9uaXRvcik7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWRuZC9saWIvY3JlYXRlVGFyZ2V0RmFjdG9yeS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlVGFyZ2V0TW9uaXRvcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIGlzQ2FsbGluZ0NhbkRyb3AgPSBmYWxzZTtcblxudmFyIFRhcmdldE1vbml0b3IgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUYXJnZXRNb25pdG9yKG1hbmFnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFyZ2V0TW9uaXRvcik7XG5cbiAgICB0aGlzLmludGVybmFsTW9uaXRvciA9IG1hbmFnZXIuZ2V0TW9uaXRvcigpO1xuICB9XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUucmVjZWl2ZUhhbmRsZXJJZCA9IGZ1bmN0aW9uIHJlY2VpdmVIYW5kbGVySWQodGFyZ2V0SWQpIHtcbiAgICB0aGlzLnRhcmdldElkID0gdGFyZ2V0SWQ7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuY2FuRHJvcCA9IGZ1bmN0aW9uIGNhbkRyb3AoKSB7XG4gICAgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSghaXNDYWxsaW5nQ2FuRHJvcCwgJ1lvdSBtYXkgbm90IGNhbGwgbW9uaXRvci5jYW5Ecm9wKCkgaW5zaWRlIHlvdXIgY2FuRHJvcCgpIGltcGxlbWVudGF0aW9uLiAnICsgJ1JlYWQgbW9yZTogaHR0cDovL2dhZWFyb24uZ2l0aHViLmlvL3JlYWN0LWRuZC9kb2NzLWRyb3AtdGFyZ2V0LW1vbml0b3IuaHRtbCcpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlzQ2FsbGluZ0NhbkRyb3AgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmNhbkRyb3BPblRhcmdldCh0aGlzLnRhcmdldElkKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNDYWxsaW5nQ2FuRHJvcCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5pc092ZXIgPSBmdW5jdGlvbiBpc092ZXIob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5pc092ZXJUYXJnZXQodGhpcy50YXJnZXRJZCwgb3B0aW9ucyk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0SXRlbVR5cGUgPSBmdW5jdGlvbiBnZXRJdGVtVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SXRlbVR5cGUoKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXRJdGVtID0gZnVuY3Rpb24gZ2V0SXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SXRlbSgpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldERyb3BSZXN1bHQgPSBmdW5jdGlvbiBnZXREcm9wUmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZGlkRHJvcCA9IGZ1bmN0aW9uIGRpZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmRpZERyb3AoKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0SW5pdGlhbENsaWVudE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0SW5pdGlhbENsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldEluaXRpYWxTb3VyY2VDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0KCk7XG4gIH07XG5cbiAgVGFyZ2V0TW9uaXRvci5wcm90b3R5cGUuZ2V0U291cmNlQ2xpZW50T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0U291cmNlQ2xpZW50T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsTW9uaXRvci5nZXRTb3VyY2VDbGllbnRPZmZzZXQoKTtcbiAgfTtcblxuICBUYXJnZXRNb25pdG9yLnByb3RvdHlwZS5nZXRDbGllbnRPZmZzZXQgPSBmdW5jdGlvbiBnZXRDbGllbnRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxNb25pdG9yLmdldENsaWVudE9mZnNldCgpO1xuICB9O1xuXG4gIFRhcmdldE1vbml0b3IucHJvdG90eXBlLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCA9IGZ1bmN0aW9uIGdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbE1vbml0b3IuZ2V0RGlmZmVyZW5jZUZyb21Jbml0aWFsT2Zmc2V0KCk7XG4gIH07XG5cbiAgcmV0dXJuIFRhcmdldE1vbml0b3I7XG59KSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXJnZXRNb25pdG9yKG1hbmFnZXIpIHtcbiAgcmV0dXJuIG5ldyBUYXJnZXRNb25pdG9yKG1hbmFnZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldE1vbml0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZVRhcmdldENvbm5lY3RvcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dyYXBDb25uZWN0b3JIb29rcyA9IHJlcXVpcmUoJy4vd3JhcENvbm5lY3Rvckhvb2tzJyk7XG5cbnZhciBfd3JhcENvbm5lY3Rvckhvb2tzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXBDb25uZWN0b3JIb29rcyk7XG5cbnZhciBfYXJlT3B0aW9uc0VxdWFsID0gcmVxdWlyZSgnLi9hcmVPcHRpb25zRXF1YWwnKTtcblxudmFyIF9hcmVPcHRpb25zRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJlT3B0aW9uc0VxdWFsKTtcblxuZnVuY3Rpb24gY3JlYXRlVGFyZ2V0Q29ubmVjdG9yKGJhY2tlbmQpIHtcbiAgdmFyIGN1cnJlbnRIYW5kbGVySWQgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSA9IHVuZGVmaW5lZDtcbiAgdmFyIGN1cnJlbnREcm9wVGFyZ2V0T3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdmFyIGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiByZWNvbm5lY3REcm9wVGFyZ2V0KCkge1xuICAgIGlmIChkaXNjb25uZWN0Q3VycmVudERyb3BUYXJnZXQpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCgpO1xuICAgICAgZGlzY29ubmVjdEN1cnJlbnREcm9wVGFyZ2V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudEhhbmRsZXJJZCAmJiBjdXJyZW50RHJvcFRhcmdldE5vZGUpIHtcbiAgICAgIGRpc2Nvbm5lY3RDdXJyZW50RHJvcFRhcmdldCA9IGJhY2tlbmQuY29ubmVjdERyb3BUYXJnZXQoY3VycmVudEhhbmRsZXJJZCwgY3VycmVudERyb3BUYXJnZXROb2RlLCBjdXJyZW50RHJvcFRhcmdldE9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVIYW5kbGVySWQoaGFuZGxlcklkKSB7XG4gICAgaWYgKGhhbmRsZXJJZCA9PT0gY3VycmVudEhhbmRsZXJJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN1cnJlbnRIYW5kbGVySWQgPSBoYW5kbGVySWQ7XG4gICAgcmVjb25uZWN0RHJvcFRhcmdldCgpO1xuICB9XG5cbiAgdmFyIGhvb2tzID0gX3dyYXBDb25uZWN0b3JIb29rczJbJ2RlZmF1bHQnXSh7XG4gICAgZHJvcFRhcmdldDogZnVuY3Rpb24gY29ubmVjdERyb3BUYXJnZXQobm9kZSwgb3B0aW9ucykge1xuICAgICAgaWYgKG5vZGUgPT09IGN1cnJlbnREcm9wVGFyZ2V0Tm9kZSAmJiBfYXJlT3B0aW9uc0VxdWFsMlsnZGVmYXVsdCddKG9wdGlvbnMsIGN1cnJlbnREcm9wVGFyZ2V0T3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50RHJvcFRhcmdldE5vZGUgPSBub2RlO1xuICAgICAgY3VycmVudERyb3BUYXJnZXRPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgcmVjb25uZWN0RHJvcFRhcmdldCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICByZWNlaXZlSGFuZGxlcklkOiByZWNlaXZlSGFuZGxlcklkLFxuICAgIGhvb2tzOiBob29rc1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1kbmQvbGliL2NyZWF0ZVRhcmdldENvbm5lY3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJhc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319PlxuICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICBpZih0aGlzLnByb3BzLmRyYWdnaW5nRGlzcGxheSl7XG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidGxEcmFnZ2luZ0Rpc3BsYXlcIiBzdHlsZT17e3RvcDogdGhpcy5wcm9wcy5kcmFnZ2luZ0Rpc3BsYXlUb3B9fT57dGhpcy5wcm9wcy5kcmFnZ2luZ0Rpc3BsYXl9PC9kaXY+KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxFdmVudERpc3BsYXlcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5kaXNwbGF5Lm1hcChyb3cgPT4ge1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGxFdmVudERpc3BsYXlSb3cnLCByb3cua2V5KX0ga2V5PXtyb3cua2V5fT5cbiAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShyb3cudmFsdWUpID8gcm93LnZhbHVlLm1hcCgodmFsLCBrZXkpID0+IDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cIml0ZW1cIj57dmFsfTwvZGl2PikgOiByb3cudmFsdWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJm5ic3A7XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0V2ZW50QmFzZS5qc3hcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEFjdGlvbnNcbntcbiAgY29uc3RydWN0b3IoY29tcG9uZW50KXtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIHJlc2l6ZSgpe1xuICAgIHRoaXMuY29tcG9uZW50LnNldFN0YXRlKHtcbiAgICAgIHJlc2l6YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgZmxvYXQoKXtcbiAgICB0aGlzLmNvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICBkcmFnZ2luZ0Rpc3BsYXk6IHRoaXMuY29tcG9uZW50LnRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLmdldERpc3BsYXlUaW1lKClcbiAgICB9KTtcbiAgfVxuXG4gIGlzRml4ZWQoKXtcbiAgICByZXR1cm4gIXRoaXMuY29tcG9uZW50LnN0YXRlLmRyYWdnYWJsZSAmJiAhdGhpcy5jb21wb25lbnQuc3RhdGUucmVzaXphYmxlO1xuICB9XG5cbiAgaXNGaXhhYmxlKCl7XG4gICAgdmFyIG5ld1Bvc2l0aW9uID0gdGhpcy5jb21wb25lbnQubmV4dFBvc2l0aW9uO1xuICAgIGlmKCFuZXdQb3NpdGlvbil7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuaXNGcmVlUG9zaXRpb24obmV3UG9zaXRpb24pO1xuICB9XG5cbiAgaXNDYW5jZWxhYmxlKCl7XG4gICAgdmFyIG5ld1Bvc2l0aW9uID0gdGhpcy5jb21wb25lbnQucHJldlBvc2l0aW9uO1xuICAgIGlmKCFuZXdQb3NpdGlvbil7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuaXNGcmVlUG9zaXRpb24obmV3UG9zaXRpb24pO1xuICB9XG5cbiAgY2FuY2VsKCl7XG4gICAgaWYodGhpcy5jb21wb25lbnQuZHJhZ2dpbmdQb3NpdGlvbil7XG4gICAgICBjb25zdCBsZWZ0ID0gdGhpcy5jb21wb25lbnQucHJvcHMudGltZWxpbmUuZ2V0TGluZUxlZnQodGhpcy5jb21wb25lbnQubGluZUlkKTtcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMuY29tcG9uZW50LnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh0aGlzLmNvbXBvbmVudC50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSk7XG4gICAgICB0aGlzLmNvbXBvbmVudC5kcmFnZ2luZ1Bvc2l0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuY29tcG9uZW50LnNldFN0YXRlKHtcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJyxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGxlZnQ6IGxlZnRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZih0aGlzLmNvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMuY29tcG9uZW50LnByb3BzLnRpbWVsaW5lLnRpbWVUb1RvcCh0aGlzLmNvbXBvbmVudC50aW1lU3Bhbi5nZXRTdGFydFRpbWUoKSk7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KHRoaXMuY29tcG9uZW50LnRpbWVTcGFuKTtcbiAgICAgIHRoaXMuY29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4gPSBudWxsO1xuICAgICAgdGhpcy5jb21wb25lbnQuc2V0U3RhdGUoe1xuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnLFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nRGlzcGxheTogJydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50LnByb3BzLnRpbWVsaW5lLmNsZWFyRHJhZ2dpbmdPdmVyKCk7XG4gIH1cblxuICByZW1vdmUoKXtcbiAgICB0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS5hY3Rpb25zLnJlbW92ZUV2ZW50KHRoaXMuY29tcG9uZW50LnByb3BzLmlkKTtcbiAgfVxuXG4gIGZpeCgpe1xuICAgIGlmKHRoaXMuY29tcG9uZW50LmRyYWdnaW5nUG9zaXRpb24pe1xuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIHRvcDogdGhpcy5jb21wb25lbnQucHJvcHMudGltZWxpbmUudGltZVRvVG9wKHRoaXMuY29tcG9uZW50LmRyYWdnaW5nUG9zaXRpb24udGltZSksXG4gICAgICAgIGxlZnQ6IHRoaXMuY29tcG9uZW50LnByb3BzLnRpbWVsaW5lLmdldExpbmVMZWZ0KHRoaXMuY29tcG9uZW50LmRyYWdnaW5nUG9zaXRpb24ubGluZUlkKSxcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dpbmdEaXNwbGF5OiAnJ1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG5ld1RpbWVTcGFuID0gdGhpcy5jb21wb25lbnQudGltZVNwYW4uc2hpZnRTdGFydFRpbWUodGhpcy5jb21wb25lbnQuZHJhZ2dpbmdQb3NpdGlvbi50aW1lKTtcbiAgICAgIGlmKHRoaXMuY29tcG9uZW50LnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50V2lsbEZpeCl7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50V2lsbEZpeCh7XG4gICAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudCxcbiAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgbGluZUlkOiB0aGlzLmNvbXBvbmVudC5kcmFnZ2luZ1Bvc2l0aW9uLmxpbmVJZCxcbiAgICAgICAgICB0aW1lU3BhbjogbmV3VGltZVNwYW5cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuY29tcG9uZW50LnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIHRoaXMuY29tcG9uZW50LmxpbmVJZCA9IHRoaXMuY29tcG9uZW50LmRyYWdnaW5nUG9zaXRpb24ubGluZUlkO1xuICAgICAgdGhpcy5jb21wb25lbnQudGltZVNwYW4gPSBuZXdUaW1lU3BhbjtcbiAgICAgIHRoaXMuY29tcG9uZW50LmRyYWdnaW5nUG9zaXRpb24gPSBudWxsO1xuICAgIH0gZWxzZSBpZih0aGlzLmNvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuKXtcbiAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9XG4gICAgICBpZih0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudFdpbGxGaXgpe1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS5wcm9wcy5ldmVudFdpbGxGaXgoe1xuICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnQsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgIGxpbmVJZDogdGhpcy5jb21wb25lbnQubGluZUlkLFxuICAgICAgICAgIHRpbWVTcGFuOiB0aGlzLmNvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aGlzLmNvbXBvbmVudC5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB0aGlzLmNvbXBvbmVudC50aW1lU3BhbiA9IHRoaXMuY29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW47XG4gICAgICB0aGlzLmNvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wb25lbnQuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZ0Rpc3BsYXk6ICcnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudC5wcm9wcy50aW1lbGluZS5jbGVhckRyYWdnaW5nT3ZlcigpO1xuICAgIGlmKHRoaXMuY29tcG9uZW50LnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkRml4KXtcbiAgICAgIHRoaXMuY29tcG9uZW50LnByb3BzLnRpbWVsaW5lLnByb3BzLmV2ZW50RGlkRml4KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzZXRWYXIoa2V5LCB2YWx1ZSl7XG4gICAgdGhpcy5jb21wb25lbnQudmFyc1trZXldID0gdmFsdWU7XG4gIH1cblxuICBnZXRWYXIoa2V5KXtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQudmFyc1trZXldO1xuICB9XG5cbiAgc2V0Q29sb3IoY29sb3Ipe1xuICAgIHRoaXMuY29tcG9uZW50LnNldENvbG9yKGNvbG9yKTtcbiAgfVxuXG4gIC8vW3trZXk6ICoqKiwgdmFsdWU6ICoqKn1dXG4gIHNldERpc3BsYXkoZGlzcGxheSl7XG4gICAgdGhpcy5jb21wb25lbnQuc2V0RGlzcGxheShkaXNwbGF5KTtcbiAgfVxuXG4gIC8ve2tleTogdmFsdWV9XG4gIHVwZGF0ZURpc3BsYXkoZGlzcGxheSl7XG4gICAgdGhpcy5jb21wb25lbnQudXBkYXRlRGlzcGxheShkaXNwbGF5KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhc3Nlcy9FdmVudEFjdGlvbnMuZXM2XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lU3BhbiBmcm9tICcuLi9jbGFzc2VzL1RpbWVTcGFuJztcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgRG5kQmFja2VuZCBmcm9tICdyZWFjdC1kbmQtdG91Y2gtYmFja2VuZCc7XG5pbXBvcnQgRXZlbnRQcmV2aWV3IGZyb20gJy4vRXZlbnRQcmV2aWV3JztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBMaW5lTGFiZWwgZnJvbSAnLi9MaW5lTGFiZWwnO1xuaW1wb3J0IHsgRHJvcFRhcmdldCB9IGZyb20gJ3JlYWN0LWRuZCc7XG5cblxuY29uc3QgdGFyZ2V0ID0ge1xuICBkcm9wKHByb3BzLCBtb25pdG9yLCBjb21wb25lbnQpIHtcbiAgICBjb25zdCBpdGVtID0gbW9uaXRvci5nZXRJdGVtKCk7XG4gICAgY29uc3QgZGVsdGEgPSBtb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpO1xuXG4gICAgY29uc3QgaW5pdGFsT2Zmc2V0ID0gaXRlbS5kcmFnZ2luZ0NvbXBvbmVudC5nZXRPZmZzZXQoKTtcbiAgICBjb25zdCB0b3AgPSBNYXRoLnJvdW5kKGluaXRhbE9mZnNldC50b3AgKyBkZWx0YS55KTtcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5yb3VuZChpbml0YWxPZmZzZXQubGVmdCArIGRlbHRhLngpO1xuXG4gICAgaXRlbS5kcmFnZ2luZ0NvbXBvbmVudC5tb3ZlVG8odG9wLCBsZWZ0KTtcbiAgfSxcbiAgaG92ZXIocHJvcHMsIG1vbml0b3IsIGNvbXBvbmVudCl7XG4gICAgY29uc3QgY2xpZW50T2Zmc2V0ID0gbW9uaXRvci5nZXRTb3VyY2VDbGllbnRPZmZzZXQoKTtcbiAgICBpZihjbGllbnRPZmZzZXQpe1xuICAgICAgY29uc3QgaXRlbSA9IG1vbml0b3IuZ2V0SXRlbSgpO1xuICAgICAgY29uc3QgbGluZVdyYXBwZXJCb3VuZHMgPSBjb21wb25lbnQucmVmcy5saW5lc1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBsaW5lQ29tcG9uZW50ID0gcHJvcHMudGltZWxpbmUuZHJhZ2dpbmdPdmVyKGNsaWVudE9mZnNldC54IC0gbGluZVdyYXBwZXJCb3VuZHMubGVmdCArIChpdGVtLmRyYWdnaW5nQ29tcG9uZW50LnByb3BzLndpZHRoIC8gMi8qZXZlbnTjga7nnJ/jgpPkuK3jgpLln7rmupbjgavjgZnjgosqLykpO1xuICAgICAgY29uc3QgdGltZSA9IHByb3BzLnRpbWVsaW5lLnRvcFRvVGltZShjbGllbnRPZmZzZXQueSArIGNvbXBvbmVudC5yZWZzLmxpbmVzV3JhcHBlci5zY3JvbGxUb3AgLSBsaW5lV3JhcHBlckJvdW5kcy50b3ApO1xuICAgICAgaXRlbS5kcmFnZ2luZ0NvbXBvbmVudC5kcmFnZ2luZyh0aW1lLCBsaW5lQ29tcG9uZW50LnByb3BzLmlkKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNvbGxlY3QoY29ubmVjdCwgbW9uaXRvcikge1xuICByZXR1cm4ge1xuICAgIGNvbm5lY3REcm9wVGFyZ2V0OiBjb25uZWN0LmRyb3BUYXJnZXQoKVxuICB9O1xufVxuXG5jbGFzcyBGcmFtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucHJvcHMudGltZWxpbmUuZnJhbWVDb21wb25lbnQgPSB0aGlzO1xuXG4gICAgY29uc3QgcnVsZXJJbnRlcnZhbCA9IDQ7XG5cbiAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuICAgIHRoaXMucHJvcHMubGluZURhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlTGluZUNvbXBvbmVudChkYXRhLCBsaW5lcywgbGFiZWxzKTtcbiAgICB9KVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpbmVzOiBsaW5lcyxcbiAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgZXZlbnRzOiB0aGlzLnByb3BzLmV2ZW50cyxcbiAgICAgIG1pbldpZHRoOiAwXG4gICAgfVxuXG4gICAgdGhpcy5yZXNpemluZ0V2ZW50ID0gbnVsbDtcbiAgfVxuXG4gIHJlc2l6ZVVwKGV2ZW50Q29tcG9uZW50LCBjbGlja2VkVG9wKXtcbiAgICBjb25zdCBpbml0aWFsSGVpZ2h0ID0gZXZlbnRDb21wb25lbnQuc3RhdGUuaGVpZ2h0O1xuICAgIGNvbnN0IHByZXZCb3R0b20gPSB0aGlzLnByb3BzLnRpbWVsaW5lLmdldFByZXZCb3R0b20oZXZlbnRDb21wb25lbnQpO1xuICAgIGNvbnN0IG1vdXNlTW92ZUV2ZW50ID0gKG1vdmVFdmVudCkgPT4ge1xuICAgICAgZXZlbnRDb21wb25lbnQucmVzaXppbmcgPSB0cnVlO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gaW5pdGlhbEhlaWdodCArIGNsaWNrZWRUb3AgLSBtb3ZlRXZlbnQuY2xpZW50WTtcbiAgICAgIGlmKHRhcmdldEhlaWdodCA+IDM2KXtcbiAgICAgICAgbGV0IHRhcmdldFRvcCA9IGV2ZW50Q29tcG9uZW50LnN0YXRlLnRvcCAtICh0YXJnZXRIZWlnaHQgLSBldmVudENvbXBvbmVudC5zdGF0ZS5oZWlnaHQpO1xuICAgICAgICBpZih0YXJnZXRUb3AgPD0gcHJldkJvdHRvbSl7XG4gICAgICAgICAgdGFyZ2V0VG9wID0gcHJldkJvdHRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4gPSBuZXcgVGltZVNwYW4odGhpcy5wcm9wcy50aW1lbGluZS50b3BUb1RpbWUodGFyZ2V0VG9wKSwgZXZlbnRDb21wb25lbnQuY3VycmVudFRpbWVTcGFuLmdldEVuZFRpbWUoKSk7XG4gICAgICAgIGV2ZW50Q29tcG9uZW50LnNldFN0YXRlKHtcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMudGltZWxpbmUudGltZVNwYW5Ub0hlaWdodChldmVudENvbXBvbmVudC5yZXNpemluZ1RpbWVTcGFuKSxcbiAgICAgICAgICB0b3A6IHRoaXMucHJvcHMudGltZWxpbmUudGltZVRvVG9wKGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4uZ2V0U3RhcnRUaW1lKCkpLFxuICAgICAgICAgIGRyYWdnaW5nRGlzcGxheTogZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3Bhbi5nZXRTdGFydFRpbWUoKS5nZXREaXNwbGF5VGltZSgpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzdG9wTW92ZUV2ZW50ID0gKG1vdXNlRXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlRXZlbnQpO1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcE1vdmVFdmVudCk7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBzdG9wTW92ZUV2ZW50KTtcbiAgICAgIGV2ZW50Q29tcG9uZW50LmVuZFJlc2l6aW5nKG1vdXNlRXZlbnQpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50KTtcbiAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wTW92ZUV2ZW50KTtcbiAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBzdG9wTW92ZUV2ZW50KTtcbiAgfVxuXG4gIHJlc2l6ZURvd24oZXZlbnRDb21wb25lbnQsIGNsaWNrZWRUb3Ape1xuICAgIGNvbnN0IGluaXRpYWxIZWlnaHQgPSBldmVudENvbXBvbmVudC5zdGF0ZS5oZWlnaHQ7XG4gICAgY29uc3QgbmV4dFRvcCA9IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0TmV4dFRvcChldmVudENvbXBvbmVudCk7XG4gICAgY29uc3QgbW91c2VNb3ZlRXZlbnQgPSAobW92ZUV2ZW50KSA9PiB7XG4gICAgICBldmVudENvbXBvbmVudC5yZXNpemluZyA9IHRydWU7XG4gICAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSBpbml0aWFsSGVpZ2h0ICsgbW92ZUV2ZW50LmNsaWVudFkgLSBjbGlja2VkVG9wO1xuICAgICAgaWYodGFyZ2V0SGVpZ2h0ID4gMzYpe1xuICAgICAgICBsZXQgdGFyZ2V0Qm90dG9tID0gZXZlbnRDb21wb25lbnQuc3RhdGUudG9wICsgdGFyZ2V0SGVpZ2h0O1xuICAgICAgICBpZih0YXJnZXRCb3R0b20gPj0gbmV4dFRvcCl7XG4gICAgICAgICAgdGFyZ2V0Qm90dG9tID0gbmV4dFRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4gPSBuZXcgVGltZVNwYW4oZXZlbnRDb21wb25lbnQuY3VycmVudFRpbWVTcGFuLmdldFN0YXJ0VGltZSgpLCB0aGlzLnByb3BzLnRpbWVsaW5lLnRvcFRvVGltZSh0YXJnZXRCb3R0b20pKTtcbiAgICAgICAgZXZlbnRDb21wb25lbnQuc2V0U3RhdGUoe1xuICAgICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy50aW1lbGluZS50aW1lU3BhblRvSGVpZ2h0KGV2ZW50Q29tcG9uZW50LnJlc2l6aW5nVGltZVNwYW4pLFxuICAgICAgICAgIGRyYWdnaW5nRGlzcGxheTogZXZlbnRDb21wb25lbnQucmVzaXppbmdUaW1lU3Bhbi5nZXRFbmRUaW1lKCkuZ2V0RGlzcGxheVRpbWUoKSxcbiAgICAgICAgICBkcmFnZ2luZ0Rpc3BsYXlUb3A6IHRhcmdldEhlaWdodCAtIDEwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzdG9wTW92ZUV2ZW50ID0gKG1vdXNlRXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVmcy5saW5lc1dyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlRXZlbnQpO1xuICAgICAgdGhpcy5yZWZzLmxpbmVzV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcE1vdmVFdmVudCk7XG4gICAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBzdG9wTW92ZUV2ZW50KTtcbiAgICAgIGV2ZW50Q29tcG9uZW50LmVuZFJlc2l6aW5nKG1vdXNlRXZlbnQpO1xuICAgIH07XG5cbiAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50KTtcbiAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wTW92ZUV2ZW50KTtcbiAgICB0aGlzLnJlZnMubGluZXNXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBzdG9wTW92ZUV2ZW50KTtcbiAgfVxuXG4gIGNyZWF0ZUxpbmVDb21wb25lbnQoZGF0YSwgbGluZXMsIGxhYmVscyl7XG4gICAgY29uc3QgaGFzUnVsZXIgPSBsaW5lcy5sZW5ndGggJSB0aGlzLnByb3BzLnJ1bGVySW50ZXJ2YWwgPT09IDA7XG4gICAgY29uc3QgcHJldlJ1bGVyID0gKGxpbmVzLmxlbmd0aCArIDEpICUgdGhpcy5wcm9wcy5ydWxlckludGVydmFsID09PSAwO1xuXG4gICAgbGFiZWxzLnB1c2goXG4gICAgICA8TGluZUxhYmVsXG4gICAgICAgIGtleT17ZGF0YS5pZH1cbiAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMubGluZVdpZHRofVxuICAgICAgICBoYXNSdWxlcj17aGFzUnVsZXJ9XG4gICAgICAgIHByZXZSdWxlcj17cHJldlJ1bGVyfVxuICAgICAgICBsYWJlbD17ZGF0YS5sYWJlbH1cbiAgICAgICAgdGltZWxpbmU9e3RoaXMucHJvcHMudGltZWxpbmV9XG4gICAgICAvPlxuICAgICk7XG5cbiAgICBsaW5lcy5wdXNoKFxuICAgICAgPExpbmVcbiAgICAgICAgaGFzUnVsZXI9e2hhc1J1bGVyfVxuICAgICAgICBrZXk9e2RhdGEuaWR9XG4gICAgICAgIGlkPXtkYXRhLmlkfVxuICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy5saW5lV2lkdGh9XG4gICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5taW5IZWlnaHR9XG4gICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICBldmVuPXtsaW5lcy5sZW5ndGggJSAyID09PSAwfVxuICAgICAgICB0aW1lbGluZT17dGhpcy5wcm9wcy50aW1lbGluZX1cbiAgICAgICAgdmFycz17ZGF0YS52YXJzfVxuICAgICAgICBmcmFtZT17dGhpc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50KGV2ZW50SWQpe1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5ldmVudHM7XG4gICAgdmFyIGV2ZW50cyA9IFtdO1xuICAgIGN1cnJlbnQuZm9yRWFjaChldiA9PiB7XG4gICAgICBpZihldi5pZCAhPSBldmVudElkKXtcbiAgICAgICAgZXZlbnRzLnB1c2goZXYpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe2V2ZW50czogZXZlbnRzfSk7XG4gIH1cblxuICBhZGRFdmVudHMoZXZlbnRzKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUuZXZlbnRzO1xuICAgICAgdmFyIGV2ZW50SWRzID0gW107XG4gICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgIGlmKCFldmVudC5pZCl7XG4gICAgICAgICAgZXZlbnQuaWQgPSB0aGlzLnByb3BzLnRpbWVsaW5lLmNyZWF0ZUV2ZW50SWQoKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudElkcy5wdXNoKGV2ZW50LmlkKTtcbiAgICAgICAgY3VycmVudC5wdXNoKGV2ZW50KVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtldmVudHM6IGN1cnJlbnR9LCAoKSA9PiB7XG4gICAgICAgIHZhciByZXN1bHRzID0gdGhpcy5wcm9wcy50aW1lbGluZS5ldmVudENvbXBvbmVudHMuZmlsdGVyKGV2ZW50Q29tcG9uZW50ID0+IHtcbiAgICAgICAgICByZXR1cm4gZXZlbnRJZHMuaW5kZXhPZihldmVudENvbXBvbmVudC5wcm9wcy5pZCkgIT09IC0xO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aGVpZ2h0OiBoZWlnaHR9KTtcbiAgfVxuXG4gIGdldFJlbGF0aXZlUG9zKGUpe1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGUuY2xpZW50WSAtIGUuY3VycmVudFRhcmdldC5vZmZzZXRUb3AgKyBlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wLFxuICAgICAgbGVmdDogZS5jbGllbnRYIC0gZS5jdXJyZW50VGFyZ2V0Lm9mZnNldExlZnQgKyBlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWluV2lkdGg6IHRoaXMucHJvcHMudGltZWxpbmUuZ2V0VG90YWxXaWR0aCgpICsgJ3B4J1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBjb25uZWN0RHJvcFRhcmdldCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gY29ubmVjdERyb3BUYXJnZXQoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsRnJhbWVWaWV3IHNjcm9sbFdyYXBwZXJcIiBzdHlsZT17e3dpZHRoOiB0aGlzLnByb3BzLndpZHRoLCBvdmVyZmxvd1g6ICdhdXRvJ319PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWluV2lkdGg6IHRoaXMuc3RhdGUubWluV2lkdGh9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsTGFiZWxWaWV3XCIgc3R5bGU9e3toZWlnaHQ6IExpbmVMYWJlbC5oZWlnaHR9fT57dGhpcy5zdGF0ZS5sYWJlbHN9PC9kaXY+XG4gICAgICAgICAgPGRpdiByZWY9XCJsaW5lc1dyYXBwZXJcIiBjbGFzc05hbWU9XCJ0bExpbmVzV3JhcHBlciBzY3JvbGxXcmFwcGVyXCIgc3R5bGU9e3toZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IC0gTGluZUxhYmVsLmhlaWdodH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogdGhpcy5wcm9wcy5saW5lSGVpZ2h0LCBvdmVyZmxvd1k6IFwiaGlkZGVuXCIsIHBvc2l0aW9uOlwicmVsYXRpdmVcIn19PlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5saW5lc31cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXZlbnRzLm1hcChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxFdmVudFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2V2ZW50LmlkfVxuICAgICAgICAgICAgICAgICAgICBpZD17ZXZlbnQuaWR9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtldmVudC5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgdGltZVNwYW49e2V2ZW50LnRpbWVTcGFufVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtldmVudC5kaXNwbGF5fVxuICAgICAgICAgICAgICAgICAgICBsaW5lSWQ9e2V2ZW50LmxpbmVJZH1cbiAgICAgICAgICAgICAgICAgICAgdGltZWxpbmU9e3RoaXMucHJvcHMudGltZWxpbmV9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmxpbmVXaWR0aCAtIDIgLSAoTGluZS5zaWRlUGFkZGluZyAqIDIpfVxuICAgICAgICAgICAgICAgICAgICB2YXJzPXtldmVudC52YXJzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8RXZlbnRQcmV2aWV3IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIEZyYW1lLnByb3BUeXBlcyA9IHtcbi8vICAgdGltZVNwYW46IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWVTcGFuKS5pc1JlcXVpcmVkLFxuLy8gICBsaW5lRGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbi8vICAgICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuLy8gICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbi8vICAgfSkpLmlzUmVxdWlyZWQsXG4vLyAgIGxpbmVXaWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICBtaW5IZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4vLyAgIHRpbWVsaW5lOiBSZWFjdC5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4vLyAgIHJ1bGVySW50ZXJ2YWw6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbi8vIH1cblxuRnJhbWUuZGVmYXVsdFByb3BzID0ge1xuICBldmVudHM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmFnRHJvcENvbnRleHQoRG5kQmFja2VuZCh7IGVuYWJsZU1vdXNlRXZlbnRzOiB0cnVlIH0pKShEcm9wVGFyZ2V0KFwiRXZlbnRcIiwgdGFyZ2V0LCBjb2xsZWN0KShGcmFtZSkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9GcmFtZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuaW1wb3J0IEhvdXIgZnJvbSAnLi9Ib3VyJztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBMaW5lTGFiZWwgZnJvbSAnLi9MaW5lTGFiZWwnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9UaW1lbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcm9wcy50aW1lbGluZS5hZGRMaW5lQ29tcG9uZW50KHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdXJzOiBbXSxcbiAgICAgIGV2ZW50czogW10sXG4gICAgICBkcmFnZ2luZ092ZXI6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMucHJvcHMudGltZVNwYW4uZWFjaFRpbWUoKGtleSwgdGltZSkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5ob3Vycy5wdXNoKFxuICAgICAgICA8SG91clxuICAgICAgICAgIGtleT17dGltZS5nZXRIb3VyKCl9XG4gICAgICAgICAgdGltZT17dGltZX1cbiAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHRoaXMudmFycyA9IHRoaXMucHJvcHMudmFycyB8fCB7fTtcbiAgfVxuXG4gIGdldFJlbGF0aXZlVG9wKGUpe1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLnByb3BzLmZyYW1lLnJlZnMubGluZXNXcmFwcGVyO1xuICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiBlLmNsaWVudFkgLSBwYXJlbnRSZWN0LnRvcCArIHBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBpZih0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmxpbmVEaWRDbGljayl7XG4gICAgICBjb25zdCB0aW1lID0gdGhpcy5wcm9wcy50aW1lbGluZS50b3BUb1RpbWUodGhpcy5nZXRSZWxhdGl2ZVRvcChlKSk7XG4gICAgICB0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmxpbmVEaWRDbGljayh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgdGltZTogdGltZSxcbiAgICAgICAgZnJlZU1pbnV0ZTogdGhpcy5wcm9wcy50aW1lbGluZS5nZXRGcmVlTWludXRlKHRoaXMucHJvcHMuaWQsIHRpbWUpLFxuICAgICAgICBldmVudDogZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Db250ZXh0TWVudShlKXtcbiAgICBpZih0aGlzLnByb3BzLnRpbWVsaW5lLnByb3BzLmxpbmVEaWRSaWdodENsaWNrKXtcbiAgICAgIHRoaXMucHJvcHMudGltZWxpbmUucHJvcHMubGluZURpZFJpZ2h0Q2xpY2soe1xuICAgICAgICBldmVudDogZSxcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkcmFnZ2luZ092ZXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZ092ZXI6IHRydWV9KTtcbiAgfVxuXG4gIGNsZWFyRHJhZ2dpbmdPdmVyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmdPdmVyOiBmYWxzZX0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9IG9uQ29udGV4dE1lbnU9e2UgPT4gdGhpcy5vbkNvbnRleHRNZW51KGUpfT5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5wcm9wcy5oYXNSdWxlcil7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UnVsZXJcbiAgICAgICAgICAgICAgICBrZXk9eydydWxlcl8nICsgdGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ9e3RoaXMucHJvcHMubWluSGVpZ2h0fVxuICAgICAgICAgICAgICAgIHRpbWVTcGFuPXt0aGlzLnByb3BzLnRpbWVTcGFufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3RsTGluZVZpZXcnLCB7dGxFdmVuOiB0aGlzLnByb3BzLmV2ZW4sIHRsT2RkOiAhdGhpcy5wcm9wcy5ldmVufSwge3RsT3ZlcjogdGhpcy5zdGF0ZS5kcmFnZ2luZ092ZXJ9KX0gc3R5bGU9e3t3aWR0aDogdGhpcy5wcm9wcy53aWR0aCArICdweCd9fT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5ob3Vyc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxpbmUuc2lkZVBhZGRpbmcgPSAxO1xuXG4vLyBMaW5lLnByb3BUeXBlcyA9IHtcbi8vICAgd2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbi8vICAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIHRpbWVTcGFuOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUaW1lU3BhbikuaXNSZXF1aXJlZCxcbi8vICAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbi8vICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4vLyAgIGV2ZW46IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4vLyAgIC8vVE9ETyDlvqrnkrDlj4Lnhafjgavjgarjgovjga7jgadpbXBvcnTjgafjgY3jgZrjgILjgajjgorjgYLjgYjjgZphbnnjgafjgZTjgb7jgYvjgZfjgabjgb7jgZnjgIJcbi8vICAgdGltZWxpbmU6IFJlYWN0LlByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbi8vICAgaGFzUnVsZXI6IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbi8vIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGluZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWUgZnJvbSAnLi4vY2xhc3Nlcy9UaW1lJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWludXRlczogW11cbiAgICB9XG5cbiAgICBjb25zdCBtaW5TdHlsZSA9IHtcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5taW5IZWlnaHQgKyAncHgnXG4gICAgfVxuICAgIFRpbWUuZWFjaE1pbigoa2V5LCBtaW4pID0+IHtcbiAgICAgIHRoaXMuc3RhdGUubWludXRlcy5wdXNoKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXttaW59XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0bE1pblZpZXcnLCAndGwnICsgKG1pbiArIDE1KSl9XG4gICAgICAgICAgc3R5bGU9e21pblN0eWxlfVxuICAgICAgICA+Jm5ic3A7PC9kaXY+XG4gICAgICApO1xuICAgIH0sIDE1KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGxIb3VyVmlld1wiPnt0aGlzLnN0YXRlLm1pbnV0ZXN9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBIb3VyLnByb3BUeXBlcyA9IHtcbi8vICAgbWluSGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4vLyAgIHRpbWU6IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRpbWUpLmlzUmVxdWlyZWRcbi8vIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSG91ci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpbWVTcGFuIGZyb20gJy4uL2NsYXNzZXMvVGltZVNwYW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG91cnM6IFtdXG4gICAgfVxuICAgIHRoaXMucHJvcHMudGltZVNwYW4uZWFjaFRpbWUoKGtleSwgdGltZSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIC8vYm9yZGVyMXB444KS6Laz44GZXG4gICAgICAgIGhlaWdodDogKHRoaXMucHJvcHMubWluSGVpZ2h0ICsgMSkgKiA0XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLmhvdXJzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXt0aW1lLmdldEhvdXIoKX0gc3R5bGU9e3N0eWxlfT57dGltZS5nZXREaXNwbGF5SG91cigpfTwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRsUnVsZXJWaWV3XCIgc3R5bGU9e3t3aWR0aDogUnVsZXIud2lkdGggKyAncHgnfX0+e3RoaXMuc3RhdGUuaG91cnN9PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBSdWxlci5wcm9wVHlwZXMgPSB7XG4vLyAgIG1pbkhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuLy8gICB0aW1lU3BhbjogUmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoVGltZVNwYW4pLmlzUmVxdWlyZWRcbi8vIH1cblxuUnVsZXIud2lkdGggPSAzMDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUnVsZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSdWxlciBmcm9tICcuL1J1bGVyJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lTGFiZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzUnVsZXI6IHRoaXMucHJvcHMuaGFzUnVsZXIsXG4gICAgICBwcmV2UnVsZXI6IHRoaXMucHJvcHMucHJldlJ1bGVyLFxuICAgICAgaXNMYXN0OiB0cnVlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgLy/kuIDjgaTliY3jga5sYWJlbOOBruWPs+inkuOBruS4uOOBv+OCkuWPluOCi1xuICAgIGNvbnN0IGxhYmVsQ29tcG9uZW50cyA9IHRoaXMucHJvcHMudGltZWxpbmUubGluZUxhYmVsQ29tcG9uZW50cztcbiAgICBpZihsYWJlbENvbXBvbmVudHMubGVuZ3RoKXtcbiAgICAgIGxhYmVsQ29tcG9uZW50c1tsYWJlbENvbXBvbmVudHMubGVuZ3RoIC0gMV0uc2V0U3RhdGUoe2lzTGFzdDogZmFsc2V9KTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLnRpbWVsaW5lLmFkZExpbmVMYWJlbENvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7d2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG1hcmdpbkxlZnQ6IHRoaXMuc3RhdGUuaGFzUnVsZXIgPyBSdWxlci53aWR0aCArICdweCcgOiAwfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHt0bExhYmVsOiB0cnVlLCB0bEhhc1J1bGVyOiB0aGlzLnN0YXRlLmhhc1J1bGVyLCB0bFByZXZSdWxlcjogdGhpcy5zdGF0ZS5wcmV2UnVsZXIsIHRsTGFzdDogdGhpcy5zdGF0ZS5pc0xhc3R9KX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMubGFiZWx9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxpbmVMYWJlbC5oZWlnaHQgPSAxNjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGluZUxhYmVsLmpzeFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVG91Y2hCYWNrZW5kID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUb3VjaEJhY2tlbmQ7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGdldEV2ZW50Q2xpZW50VG91Y2hPZmZzZXQoZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBnZXRFdmVudENsaWVudE9mZnNldChlLnRhcmdldFRvdWNoZXNbMF0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMpIHtcbiAgICAgICAgcmV0dXJuIGdldEV2ZW50Q2xpZW50VG91Y2hPZmZzZXQoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgICAgIHk6IGUuY2xpZW50WVxuICAgICAgICB9O1xuICAgIH1cbn1cblxudmFyIEVMRU1FTlRfTk9ERSA9IDE7XG5mdW5jdGlvbiBnZXROb2RlQ2xpZW50T2Zmc2V0KG5vZGUpIHtcbiAgICB2YXIgZWwgPSBub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUgPyBub2RlIDogbm9kZS5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX2VsJGdldEJvdW5kaW5nQ2xpZW50ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB2YXIgdG9wID0gX2VsJGdldEJvdW5kaW5nQ2xpZW50LnRvcDtcbiAgICB2YXIgbGVmdCA9IF9lbCRnZXRCb3VuZGluZ0NsaWVudC5sZWZ0O1xuXG4gICAgcmV0dXJuIHsgeDogbGVmdCwgeTogdG9wIH07XG59XG5cbnZhciBldmVudE5hbWVzID0ge1xuICAgIG1vdXNlOiB7XG4gICAgICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICAgICAgbW92ZTogJ21vdXNlbW92ZScsXG4gICAgICAgIGVuZDogJ21vdXNldXAnXG4gICAgfSxcbiAgICB0b3VjaDoge1xuICAgICAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgICAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICAgICAgZW5kOiAndG91Y2hlbmQnXG4gICAgfVxufTtcblxudmFyIFRvdWNoQmFja2VuZCA9IGV4cG9ydHMuVG91Y2hCYWNrZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvdWNoQmFja2VuZChtYW5hZ2VyKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvdWNoQmFja2VuZCk7XG5cbiAgICAgICAgb3B0aW9ucy5kZWxheVRvdWNoU3RhcnQgPSBvcHRpb25zLmRlbGF5VG91Y2hTdGFydCB8fCBvcHRpb25zLmRlbGF5O1xuXG4gICAgICAgIG9wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBlbmFibGVUb3VjaEV2ZW50czogdHJ1ZSxcbiAgICAgICAgICAgIGVuYWJsZU1vdXNlRXZlbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIGRlbGF5VG91Y2hTdGFydDogMCxcbiAgICAgICAgICAgIGRlbGF5TW91c2VTdGFydDogMFxuICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmFjdGlvbnMgPSBtYW5hZ2VyLmdldEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5tb25pdG9yID0gbWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgICAgIHRoaXMucmVnaXN0cnkgPSBtYW5hZ2VyLmdldFJlZ2lzdHJ5KCk7XG5cbiAgICAgICAgdGhpcy5kZWxheVRvdWNoU3RhcnQgPSBvcHRpb25zLmRlbGF5VG91Y2hTdGFydDtcbiAgICAgICAgdGhpcy5kZWxheU1vdXNlU3RhcnQgPSBvcHRpb25zLmRlbGF5TW91c2VTdGFydDtcbiAgICAgICAgdGhpcy5zb3VyY2VOb2RlcyA9IHt9O1xuICAgICAgICB0aGlzLnNvdXJjZU5vZGVPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVzID0ge307XG4gICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVPcHRpb25zID0ge307XG4gICAgICAgIHRoaXMudGFyZ2V0Tm9kZXMgPSB7fTtcbiAgICAgICAgdGhpcy50YXJnZXROb2RlT3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSB7fTtcblxuICAgICAgICBpZiAob3B0aW9ucy5lbmFibGVNb3VzZUV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLnB1c2goJ21vdXNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5lbmFibGVUb3VjaEV2ZW50cykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLnB1c2goJ3RvdWNoJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldFNvdXJjZUNsaWVudE9mZnNldCA9IHRoaXMuZ2V0U291cmNlQ2xpZW50T2Zmc2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0ID0gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnREZWxheSA9IHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlID0gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZUNhcHR1cmUgPSB0aGlzLmhhbmRsZVRvcE1vdmVDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wTW92ZUVuZENhcHR1cmUgPSB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRvdWNoQmFja2VuZCwgW3tcbiAgICAgICAga2V5OiAnc2V0dXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSghdGhpcy5jb25zdHJ1Y3Rvci5pc1NldFVwLCAnQ2Fubm90IGhhdmUgdHdvIFRvdWNoIGJhY2tlbmRzIGF0IHRoZSBzYW1lIHRpbWUuJyk7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmlzU2V0VXAgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnc3RhcnQnLCB0aGlzLmdldFRvcE1vdmVTdGFydEhhbmRsZXIoKSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnc3RhcnQnLCB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ21vdmUnLCB0aGlzLmhhbmRsZVRvcE1vdmVDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdlbmQnLCB0aGlzLmhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndGVhcmRvd24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdGVhcmRvd24oKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuaXNTZXRVcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSB7fTtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3N0YXJ0JywgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdzdGFydCcsIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0KTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdtb3ZlJywgdGhpcy5oYW5kbGVUb3BNb3ZlQ2FwdHVyZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnZW5kJywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMudW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRFdmVudExpc3RlbmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoc3ViamVjdCwgZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lclR5cGUpIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lc1tsaXN0ZW5lclR5cGVdW2V2ZW50XSwgaGFuZGxlciwgY2FwdHVyZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHN1YmplY3QsIGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgc3ViamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZXNbbGlzdGVuZXJUeXBlXVtldmVudF0sIGhhbmRsZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nvbm5lY3REcmFnU291cmNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3REcmFnU291cmNlKHNvdXJjZUlkLCBub2RlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgaGFuZGxlTW92ZVN0YXJ0ID0gdGhpcy5oYW5kbGVNb3ZlU3RhcnQuYmluZCh0aGlzLCBzb3VyY2VJZCk7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZU5vZGVzW3NvdXJjZUlkXSA9IG5vZGU7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihub2RlLCAnc3RhcnQnLCBoYW5kbGVNb3ZlU3RhcnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5zb3VyY2VOb2Rlc1tzb3VyY2VJZF07XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCAnc3RhcnQnLCBoYW5kbGVNb3ZlU3RhcnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29ubmVjdERyYWdQcmV2aWV3JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3REcmFnUHJldmlldyhzb3VyY2VJZCwgbm9kZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVPcHRpb25zW3NvdXJjZUlkXSA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVByZXZpZXdOb2Rlc1tzb3VyY2VJZF0gPSBub2RlO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczIuc291cmNlUHJldmlld05vZGVzW3NvdXJjZUlkXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMyLnNvdXJjZVByZXZpZXdOb2RlT3B0aW9uc1tzb3VyY2VJZF07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb25uZWN0RHJvcFRhcmdldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0RHJvcFRhcmdldCh0YXJnZXRJZCwgbm9kZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZXNbdGFyZ2V0SWRdID0gbm9kZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMzLnRhcmdldE5vZGVzW3RhcmdldElkXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFNvdXJjZUNsaWVudE9mZnNldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb3VyY2VDbGllbnRPZmZzZXQoc291cmNlSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXROb2RlQ2xpZW50T2Zmc2V0KHRoaXMuc291cmNlTm9kZXNbc291cmNlSWRdKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZVN0YXJ0Q2FwdHVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlKGUpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzID0gW107XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZU1vdmVTdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3ZlU3RhcnQoc291cmNlSWQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVN0YXJ0U291cmNlSWRzLnVuc2hpZnQoc291cmNlSWQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRUb3BNb3ZlU3RhcnRIYW5kbGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRvcE1vdmVTdGFydEhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVsYXlUb3VjaFN0YXJ0ICYmICF0aGlzLmRlbGF5TW91c2VTdGFydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0RGVsYXk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVTdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3BNb3ZlU3RhcnQoZSkge1xuICAgICAgICAgICAgLy8gRG9uJ3QgcHJlbWF0dXJlbHkgcHJldmVudERlZmF1bHQoKSBoZXJlIHNpbmNlIGl0IG1pZ2h0OlxuICAgICAgICAgICAgLy8gMS4gTWVzcyB1cCBzY3JvbGxpbmdcbiAgICAgICAgICAgIC8vIDIuIE1lc3MgdXAgbG9uZyB0YXAgKHdoaWNoIGJyaW5ncyB1cCBjb250ZXh0IG1lbnUpXG4gICAgICAgICAgICAvLyAzLiBJZiB0aGVyZSdzIGFuIGFuY2hvciBsaW5rIGFzIGEgY2hpbGQsIHRhcCB3b24ndCBiZSB0cmlnZ2VyZWQgb24gbGlua1xuXG4gICAgICAgICAgICB2YXIgY2xpZW50T2Zmc2V0ID0gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZSk7XG4gICAgICAgICAgICBpZiAoY2xpZW50T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSBjbGllbnRPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVTdGFydERlbGF5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVTdGFydERlbGF5KGUpIHtcbiAgICAgICAgICAgIHZhciBkZWxheSA9IGUudHlwZSA9PT0gZXZlbnROYW1lcy50b3VjaC5zdGFydCA/IHRoaXMuZGVsYXlUb3VjaFN0YXJ0IDogdGhpcy5kZWxheU1vdXNlU3RhcnQ7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0LmJpbmQodGhpcywgZSksIGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVG9wTW92ZUNhcHR1cmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG9wTW92ZUNhcHR1cmUoZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgICAgICAgICB2YXIgbW92ZVN0YXJ0U291cmNlSWRzID0gdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHM7XG5cbiAgICAgICAgICAgIHZhciBjbGllbnRPZmZzZXQgPSBnZXRFdmVudENsaWVudE9mZnNldChlKTtcblxuICAgICAgICAgICAgaWYgKCFjbGllbnRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIG5vdCBkcmFnZ2luZyBhbmQgd2UndmUgbW92ZWQgYSBsaXR0bGUsIHRoYXQgY291bnRzIGFzIGEgZHJhZyBzdGFydFxuICAgICAgICAgICAgaWYgKCF0aGlzLm1vbml0b3IuaXNEcmFnZ2luZygpICYmIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0Lmhhc093blByb3BlcnR5KCd4JykgJiYgbW92ZVN0YXJ0U291cmNlSWRzICYmICh0aGlzLl9tb3VzZUNsaWVudE9mZnNldC54ICE9PSBjbGllbnRPZmZzZXQueCB8fCB0aGlzLl9tb3VzZUNsaWVudE9mZnNldC55ICE9PSBjbGllbnRPZmZzZXQueSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVTdGFydFNvdXJjZUlkcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmJlZ2luRHJhZyhtb3ZlU3RhcnRTb3VyY2VJZHMsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50T2Zmc2V0OiB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgZ2V0U291cmNlQ2xpZW50T2Zmc2V0OiB0aGlzLmdldFNvdXJjZUNsaWVudE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgcHVibGlzaFNvdXJjZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLm1vbml0b3IuaXNEcmFnZ2luZygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc291cmNlTm9kZSA9IHRoaXMuc291cmNlTm9kZXNbdGhpcy5tb25pdG9yLmdldFNvdXJjZUlkKCldO1xuICAgICAgICAgICAgdGhpcy5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcihzb3VyY2VOb2RlKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5wdWJsaXNoRHJhZ1NvdXJjZSgpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBtYXRjaGluZ1RhcmdldElkcyA9IE9iamVjdC5rZXlzKHRoaXMudGFyZ2V0Tm9kZXMpLmZpbHRlcihmdW5jdGlvbiAodGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRpbmdSZWN0ID0gX3RoaXM0LnRhcmdldE5vZGVzW3RhcmdldElkXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpZW50T2Zmc2V0LnggPj0gYm91bmRpbmdSZWN0LmxlZnQgJiYgY2xpZW50T2Zmc2V0LnggPD0gYm91bmRpbmdSZWN0LnJpZ2h0ICYmIGNsaWVudE9mZnNldC55ID49IGJvdW5kaW5nUmVjdC50b3AgJiYgY2xpZW50T2Zmc2V0LnkgPD0gYm91bmRpbmdSZWN0LmJvdHRvbTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuaG92ZXIobWF0Y2hpbmdUYXJnZXRJZHMsIHtcbiAgICAgICAgICAgICAgICBjbGllbnRPZmZzZXQ6IGNsaWVudE9mZnNldFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRvcE1vdmVFbmRDYXB0dXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvcE1vdmVFbmRDYXB0dXJlKGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tb25pdG9yLmlzRHJhZ2dpbmcoKSB8fCB0aGlzLm1vbml0b3IuZGlkRHJvcCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLl9tb3VzZUNsaWVudE9mZnNldCA9IHt9O1xuXG4gICAgICAgICAgICB0aGlzLnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5kcm9wKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuZW5kRHJhZygpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcihub2RlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy51bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlciA9IG5ldyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM1LnJlc3VycmVjdFNvdXJjZU5vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM1LnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIub2JzZXJ2ZShub2RlLnBhcmVudEVsZW1lbnQsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZXN1cnJlY3RTb3VyY2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3VycmVjdFNvdXJjZU5vZGUoKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1yZWFjdGlkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRvdWNoQmFja2VuZDtcbn0oKTtcblxuZnVuY3Rpb24gY3JlYXRlVG91Y2hCYWNrZW5kKCkge1xuICAgIHZhciBvcHRpb25zT3JNYW5hZ2VyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgdG91Y2hCYWNrZW5kRmFjdG9yeSA9IGZ1bmN0aW9uIHRvdWNoQmFja2VuZEZhY3RvcnkobWFuYWdlcikge1xuICAgICAgICByZXR1cm4gbmV3IFRvdWNoQmFja2VuZChtYW5hZ2VyLCBvcHRpb25zT3JNYW5hZ2VyKTtcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnNPck1hbmFnZXIuZ2V0TW9uaXRvcikge1xuICAgICAgICByZXR1cm4gdG91Y2hCYWNrZW5kRmFjdG9yeShvcHRpb25zT3JNYW5hZ2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG91Y2hCYWNrZW5kRmFjdG9yeTtcbiAgICB9XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQvZGlzdC9Ub3VjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmFnTGF5ZXIgZnJvbSAncmVhY3QtZG5kL2xpYi9EcmFnTGF5ZXInO1xuaW1wb3J0IEV2ZW50QmFzZSBmcm9tICcuL0V2ZW50QmFzZSc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuXG5mdW5jdGlvbiBjb2xsZWN0IChtb25pdG9yKXtcbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgY2xpZW50T2Zmc2V0OiBtb25pdG9yLmdldERpZmZlcmVuY2VGcm9tSW5pdGlhbE9mZnNldCgpXG4gIH07XG5cbiAgY29uc3QgaXRlbSA9IG1vbml0b3IuZ2V0SXRlbSgpO1xuICBpZihpdGVtICYmIGl0ZW1bJ2RyYWdnaW5nQ29tcG9uZW50J10pe1xuICAgIHByb3BzWydkcmFnZ2luZ0NvbXBvbmVudCddID0gaXRlbVsnZHJhZ2dpbmdDb21wb25lbnQnXTtcbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn1cblxuY2xhc3MgRXZlbnRQcmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZ2V0SXRlbVN0eWxlcyAoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmNsaWVudE9mZnNldCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHggPSB0aGlzLnByb3BzLmNsaWVudE9mZnNldC54O1xuICAgIGNvbnN0IHkgPSB0aGlzLnByb3BzLmNsaWVudE9mZnNldC55O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcblxuICAgIHJldHVybiBhc3NpZ24odGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudC5nZXREcmFnZ2luZ1N0eWxlKCksIHtcbiAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCBkcmFnZ2luZ0Rpc3BsYXkgPSAnJztcbiAgICBpZih0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50ICYmIHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5KXtcbiAgICAgIGRyYWdnaW5nRGlzcGxheSA9IHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQuc3RhdGUuZHJhZ2dpbmdEaXNwbGF5O1xuICAgIH1cbiAgICBcbiAgICBsZXQgZGlzcGxheSA9IFtdO1xuICAgIGlmKHRoaXMucHJvcHMuZHJhZ2dpbmdDb21wb25lbnQgJiYgdGhpcy5wcm9wcy5kcmFnZ2luZ0NvbXBvbmVudC5zdGF0ZS5kaXNwbGF5KXtcbiAgICAgIGRpc3BsYXkgPSB0aGlzLnByb3BzLmRyYWdnaW5nQ29tcG9uZW50LnN0YXRlLmRpc3BsYXk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cInByZXZpZXdcIiBjbGFzc05hbWU9XCJ0bEV2ZW50VmlldyB0bERyYWdnaW5nRXZlbnRcIiBzdHlsZT17dGhpcy5nZXRJdGVtU3R5bGVzKCl9PlxuICAgICAgICA8RXZlbnRCYXNlXG4gICAgICAgICAgZHJhZ2dpbmdEaXNwbGF5PXtkcmFnZ2luZ0Rpc3BsYXl9XG4gICAgICAgICAgZGlzcGxheT17ZGlzcGxheX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZ0xheWVyKGNvbGxlY3QpKEV2ZW50UHJldmlldyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0V2ZW50UHJldmlldy5qc3hcbiAqKi8iLCJpbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudSc7XG5cbmV4cG9ydCB7Q29udGV4dE1lbnV9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9yZWFjdC1jb250ZXh0LW1lbnUvaW5kZXguZXM2XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbidcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL0NvbnRleHRNZW51SXRlbSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgc3RhdGljIGdldFdpbmRvd1NpemUoKXtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblxuICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiB7d2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgekluZGV4OiB0aGlzLnByb3BzLnpJbmRleFxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLm92ZXJsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdybU1lbnVPdmVybGF5Jyk7XG4gICAgdGhpcy5vdmVybGF5LnN0eWxlW1wicG9zaXRpb25cIl0gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcInRvcFwiXSA9ICcwJztcbiAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJsZWZ0XCJdID0gJzAnO1xuICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcImRpc3BsYXlcIl0gPSAnbm9uZSc7XG4gICAgdGhpcy5vdmVybGF5LnN0eWxlW1wiekluZGV4XCJdID0gdGhpcy5wcm9wcy56SW5kZXggLSAxO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcbiAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuY2xvc2UoKSk7XG4gICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93KHBvcywgY29udGV4dCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdHlsZTogYXNzaWduKHt9LCB0aGlzLnN0YXRlLnN0eWxlLCBwb3MsIHtkaXNwbGF5OiAnYmxvY2snfSksXG4gICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgfSwgKCkgPT4ge1xuICAgICAgbGV0IHdpbmRvd1NpemUgPSBDb250ZXh0TWVudS5nZXRXaW5kb3dTaXplKCk7XG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJ3aWR0aFwiXSA9IHdpbmRvd1NpemUud2lkdGggKyAncHgnO1xuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlW1wiaGVpZ2h0XCJdID0gd2luZG93U2l6ZS5oZWlnaHQgKyAncHgnO1xuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlWydkaXNwbGF5J10gPSAnYmxvY2snO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZU91dCgpe1xuICAgIGNvbnNvbGUubG9nKCdvdXQnKTtcbiAgfVxuXG4gIG9uTW91c2VPdmVyKCl7XG4gICAgY29uc29sZS5sb2coJ292ZXInKTtcbiAgfVxuXG4gIGNsb3NlKCl7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtzdHlsZTogYXNzaWduKHt9LCB0aGlzLnN0YXRlLnN0eWxlLCB7ZGlzcGxheTogJ25vbmUnfSl9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGVbJ2Rpc3BsYXknXSA9ICdub25lJztcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwibWVudVwiIGNsYXNzTmFtZT1cInJtTWVudVwiIHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJtTWVudUl0ZW1MaXN0XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuY29udGV4dCA/IHRoaXMucHJvcHMuaXRlbXMubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmKCFpdGVtLnNob3cgfHwgaXRlbS5zaG93KHRoaXMuc3RhdGUuY29udGV4dCkpe1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWUodGhpcy5zdGF0ZS5jb250ZXh0KX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2l0ZW0ub25DbGlja31cbiAgICAgICAgICAgICAgICAgIG1lbnU9e3RoaXN9XG4gICAgICAgICAgICAgICAgICBlbmFibGU9e2l0ZW0uZW5hYmxlID8gaXRlbS5lbmFibGUodGhpcy5zdGF0ZS5jb250ZXh0KSA6IHRydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIDogbnVsbH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ29udGV4dE1lbnUucHJvcFR5cGVzID0ge1xuICBpdGVtczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHNob3c6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGVuYWJsZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSkpLmlzUmVxdWlyZWQsXG4gIHpJbmRleDogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxufVxuXG5Db250ZXh0TWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHpJbmRleDogMTAwXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9yZWFjdC1jb250ZXh0LW1lbnUvc3JjL2pzL2NvbXBvbmVudHMvQ29udGV4dE1lbnUuanN4XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9yZWFjdC1jb250ZXh0LW1lbnUvfi9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW91c2VPdmVyOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBvbk1vdXNlT3V0KCl7XG4gICAgaWYodGhpcy5wcm9wcy5lbmFibGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VPdmVyKCl7XG4gICAgaWYodGhpcy5wcm9wcy5lbmFibGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiB0cnVlfSk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBpZih0aGlzLnByb3BzLmVuYWJsZSl7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy5tZW51LnN0YXRlLmNvbnRleHQpO1xuICAgICAgdGhpcy5wcm9wcy5tZW51LmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJybU1lbnVJdGVtXCIsIHtybU1vdXNlT3ZlcjogdGhpcy5zdGF0ZS5tb3VzZU92ZXIsIHJtRGlzYWJsZWQ6ICF0aGlzLnByb3BzLmVuYWJsZSwgcm1TZXBhcmF0b3I6IHRoaXMucHJvcHMubmFtZSA9PSAnLSd9KX1cbiAgICAgICAgb25Nb3VzZU92ZXI9e2UgPT4gdGhpcy5vbk1vdXNlT3ZlcihlKX1cbiAgICAgICAgb25Nb3VzZU91dD17ZSA9PiB0aGlzLm9uTW91c2VPdXQoZSl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5uYW1lID09ICctJyA/IG51bGwgOiB0aGlzLnByb3BzLm5hbWV9XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL3JlYWN0LWNvbnRleHQtbWVudS9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudUl0ZW0uanN4XG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL3JlYWN0LWNvbnRleHQtbWVudS9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=