(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./assets/js/pages/dashboards/Crypto/Chart.js":
/*!****************************************************!*\
  !*** ./assets/js/pages/dashboards/Crypto/Chart.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Chart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart(props) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chart).call(this, props));
    _this.data = [{
      data: [{
        x: new Date(2016, 1, 1),
        y: [51.98, 56.29, 51.59, 53.85]
      }, {
        x: new Date(2016, 2, 1),
        y: [53.66, 54.99, 51.35, 52.95]
      }, {
        x: new Date(2016, 3, 1),
        y: [52.96, 53.78, 51.54, 52.48]
      }, {
        x: new Date(2016, 4, 1),
        y: [52.54, 52.79, 47.88, 49.24]
      }, {
        x: new Date(2016, 5, 1),
        y: [49.1, 52.86, 47.7, 52.78]
      }, {
        x: new Date(2016, 6, 1),
        y: [52.83, 53.48, 50.32, 52.29]
      }, {
        x: new Date(2016, 7, 1),
        y: [52.2, 54.48, 51.64, 52.58]
      }, {
        x: new Date(2016, 8, 1),
        y: [52.76, 57.35, 52.15, 57.03]
      }, {
        x: new Date(2016, 9, 1),
        y: [57.04, 58.15, 48.88, 56.19]
      }, {
        x: new Date(2016, 10, 1),
        y: [56.09, 58.85, 55.48, 58.79]
      }, {
        x: new Date(2016, 11, 1),
        y: [58.78, 59.65, 58.23, 59.05]
      }, {
        x: new Date(2017, 0, 1),
        y: [59.37, 61.11, 59.35, 60.34]
      }, {
        x: new Date(2017, 1, 1),
        y: [60.4, 60.52, 56.71, 56.93]
      }, {
        x: new Date(2017, 2, 1),
        y: [57.02, 59.71, 56.04, 56.82]
      }, {
        x: new Date(2017, 3, 1),
        y: [56.97, 59.62, 54.77, 59.3]
      }, {
        x: new Date(2017, 4, 1),
        y: [59.11, 62.29, 59.1, 59.85]
      }, {
        x: new Date(2017, 5, 1),
        y: [59.97, 60.11, 55.66, 58.42]
      }, {
        x: new Date(2017, 6, 1),
        y: [58.34, 60.93, 56.75, 57.42]
      }, {
        x: new Date(2017, 7, 1),
        y: [57.76, 58.08, 53.18, 54.71]
      }, {
        x: new Date(2017, 8, 1),
        y: [54.8, 61.42, 53.58, 57.35]
      }, {
        x: new Date(2017, 9, 1),
        y: [57.56, 63.09, 57.0, 62.99]
      }, {
        x: new Date(2017, 10, 1),
        y: [62.89, 63.42, 59.72, 61.76]
      }, {
        x: new Date(2017, 11, 1),
        y: [61.71, 64.15, 61.29, 63.04]
      }, {
        x: new Date(2018, 0, 1),
        y: [59.37, 61.11, 59.35, 60.34]
      }, {
        x: new Date(2018, 1, 1),
        y: [60.4, 60.52, 56.71, 56.93]
      }, {
        x: new Date(2018, 2, 1),
        y: [57.02, 59.71, 56.04, 56.82]
      }, {
        x: new Date(2018, 3, 1),
        y: [56.97, 59.62, 54.77, 59.3]
      }, {
        x: new Date(2018, 4, 1),
        y: [59.11, 62.29, 59.1, 59.85]
      }, {
        x: new Date(2018, 5, 1),
        y: [59.97, 60.11, 55.66, 58.42]
      }, {
        x: new Date(2018, 6, 1),
        y: [58.34, 60.93, 56.75, 57.42]
      }, {
        x: new Date(2018, 7, 1),
        y: [57.76, 58.08, 51.18, 54.71]
      }, {
        x: new Date(2018, 8, 1),
        y: [54.8, 61.42, 53.18, 57.35]
      }, {
        x: new Date(2018, 9, 1),
        y: [57.56, 62.09, 57.0, 61.99]
      }, {
        x: new Date(2018, 10, 1),
        y: [62.89, 63.42, 59.72, 61.76]
      }, {
        x: new Date(2018, 11, 1),
        y: [61.71, 64.15, 61.29, 63.04]
      }]
    }];
    _this.options = {
      stroke: {
        width: 1
      },
      xaxis: {
        type: "datetime"
      },
      colors: ["#0cc2aa", "#5fc27e", "#fcc100", "#f44455", "#5b7dff"]
    };
    return _this;
  }

  _createClass(Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Trigger resize manually so chart doesn't fall off canvas
      window.dispatchEvent(new Event("resize"));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: "flex-fill"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-actions float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledDropdown"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
        tag: "a"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["MoreHorizontal"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
        right: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Another Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
        tag: "h5",
        className: "mb-0"
      }, "LTC/BTC")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a, {
        options: this.options,
        series: this.data,
        type: "candlestick",
        height: "450"
      }))));
    }
  }]);

  return Chart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./assets/js/pages/dashboards/Crypto/Markets.js":
/*!******************************************************!*\
  !*** ./assets/js/pages/dashboards/Crypto/Markets.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);




var Markets = function Markets() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-actions float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
    tag: "a"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["MoreHorizontal"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
    right: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Another Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Markets")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    size: "sm",
    striped: true,
    className: "my-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Coin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "d-none d-xl-table-cell"
  }, "Volume"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "d-none d-xl-table-cell"
  }, "Change"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ETH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.03863405"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "1379.634"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "+1.52")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "XRP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.00009313"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "270.805"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-danger"
  }, "-3.30")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "XMR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.01292315"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "203.531"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "+6.10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "DASH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.02088992"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "84.034"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-danger"
  }, "-3.17")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "LTC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.00821501"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "80.566"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "+3.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "STR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.00002948"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "58.981"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "+2.58")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "DOGE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.00000061"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "46.849"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-danger"
  }, "-1.61")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "REP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.00223510"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "37.038"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "+0.54")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "EOS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.00069000"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "35.040"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-danger"
  }, "-5.84")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "DGB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.00000277"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "34.840"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "+0.36")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ZEC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.01505000"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "32.326"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-danger"
  }, "-4.24")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "BURST"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.00000098"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "25.590"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-danger"
  }, "-15.52")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "MAID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.00003724"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "20.556"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-danger"
  }, "-2.33")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ETC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.00132249"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "19.633"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "+4.19")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "STRAT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "0.00028587"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "17.557"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "+4.40")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Markets);

/***/ }),

/***/ "./assets/js/pages/dashboards/Crypto/Orders.js":
/*!*****************************************************!*\
  !*** ./assets/js/pages/dashboards/Crypto/Orders.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);




var Orders = function Orders() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-actions float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
    tag: "a"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["MoreHorizontal"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
    right: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Another Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Sell Orders")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    size: "sm",
    striped: true,
    className: "my-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "d-none d-xl-table-cell"
  }, "ETH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "d-none d-xl-table-cell"
  }, "BTC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Sum(BTC)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    className: "text-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03892501"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "32.07831558"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "1.24864875"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1.26329659")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03893754"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "4.97546187"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.19373225"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1.45702884")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03895189"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.00288098"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.00011222"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1.45714106")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03896593"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "1.37722262"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.05366476"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1.51080582")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03897932"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "7.91612747"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.30856527"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1.81937109")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03897933"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.32745500"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.01276398"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1.83213507")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03899180"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.00758003"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.00029556"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1.83243063")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03899784"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "2.05272745"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.08005194"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "1.91248257")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03899998"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "2.59143162"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.10106578"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "2.01354835")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03899999"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "3.00000000"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.11699997"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "2.13054832")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-actions float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
    tag: "a"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["MoreHorizontal"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
    right: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Another Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Buy Orders")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    size: "sm",
    striped: true,
    className: "my-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "d-none d-xl-table-cell"
  }, "ETH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "d-none d-xl-table-cell"
  }, "BTC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Sum(BTC)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    className: "text-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03892000"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.22446452"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.00873616"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.00873616")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03890500"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "66.39390000"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "2.58305468"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "2.59179084")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03890132"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "56.55334798"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "2.19999989"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "4.79179073")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03890053"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.08285351"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.00322305"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "4.79501378")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03889706"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "15.61516705"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.60738409"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "5.40239787")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03888117"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "12.84070897"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.49926179"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "5.90165966")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03885500"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.99800000"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.03877729"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "5.94043695")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03884325"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.20552300"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.00798318"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "5.94842013")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03883474"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "7.58480860"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.29455407"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "6.24297420")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "0.03881616"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.25000000"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, "0.00970404"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "6.25267824")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Orders);

/***/ }),

/***/ "./assets/js/pages/dashboards/Crypto/Tickers.js":
/*!******************************************************!*\
  !*** ./assets/js/pages/dashboards/Crypto/Tickers.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var Tickers = function Tickers() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    xl: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "float-right text-danger"
  }, "-5.28%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mb-2"
  }, "HSR/BTC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "0.001416"), " $16.61"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Volume: 2,692.47 BTC")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    xl: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "float-right text-success"
  }, "2.61%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mb-2"
  }, "BNB/BTC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "0.00022004"), " $2.58"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Volume: 842.52 BTC")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    xl: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "float-right text-danger"
  }, "-7.27%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mb-2"
  }, "POWR/BTC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "0.00005806"), " $0.68"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Volume: 393.03 BTC")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    xl: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "float-right text-danger"
  }, "-4.98%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mb-2"
  }, "TRX/BTC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "0.00000229"), " $0.04"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Volume: 6,836.31 BTC")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    xl: true,
    className: "d-none d-xxl-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "float-right text-success"
  }, "16.11%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mb-2"
  }, "IOTA/BTC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "0.00025800"), " $3.03"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Volume: 14,065.87 BTC")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Tickers);

/***/ }),

/***/ "./assets/js/pages/dashboards/Crypto/index.js":
/*!****************************************************!*\
  !*** ./assets/js/pages/dashboards/Crypto/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chart */ "./assets/js/pages/dashboards/Crypto/Chart.js");
/* harmony import */ var _Tickers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tickers */ "./assets/js/pages/dashboards/Crypto/Tickers.js");
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Markets */ "./assets/js/pages/dashboards/Crypto/Markets.js");
/* harmony import */ var _Orders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Orders */ "./assets/js/pages/dashboards/Crypto/Orders.js");







var Crypto = function Crypto() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    className: "p-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tickers__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "5",
    className: "d-flex col-xxl-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Markets__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "7",
    className: "d-flex col-xxl-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart__WEBPACK_IMPORTED_MODULE_2__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Orders__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Crypto);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvZGFzaGJvYXJkcy9DcnlwdG8vQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL2Rhc2hib2FyZHMvQ3J5cHRvL01hcmtldHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL2Rhc2hib2FyZHMvQ3J5cHRvL09yZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvZGFzaGJvYXJkcy9DcnlwdG8vVGlja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvZGFzaGJvYXJkcy9DcnlwdG8vaW5kZXguanMiXSwibmFtZXMiOlsiQ2hhcnQiLCJwcm9wcyIsImRhdGEiLCJ4IiwiRGF0ZSIsInkiLCJvcHRpb25zIiwic3Ryb2tlIiwid2lkdGgiLCJ4YXhpcyIsInR5cGUiLCJjb2xvcnMiLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIk1hcmtldHMiLCJPcmRlcnMiLCJUaWNrZXJzIiwiQ3J5cHRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFXQTs7SUFFTUEsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiwrRUFBTUEsS0FBTjtBQUVBLFVBQUtDLElBQUwsR0FBWSxDQUNWO0FBQ0VBLFVBQUksRUFBRSxDQUNKO0FBQ0VDLFNBQUMsRUFBRSxJQUFJQyxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FETDtBQUVFQyxTQUFDLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEI7QUFGTCxPQURJLEVBS0o7QUFDRUYsU0FBQyxFQUFFLElBQUlDLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQURMO0FBRUVDLFNB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QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFNBQ2IsMkRBQUMsb0RBQUQ7QUFBVyxTQUFLLE1BQWhCO0FBQWlCLGFBQVMsRUFBQztBQUEzQixLQUNFLDJEQUFDLGdEQUFELE9BREYsRUFFRSwyREFBQyw4Q0FBRCxRQUNFLDJEQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUM7QUFBdEIsS0FDRSwyREFBQyxnREFBRCxPQURGLENBREYsRUFJRSwyREFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDO0FBQXRCLEtBQ0UsMkRBQUMsOENBQUQsT0FERixDQUpGLENBRkYsRUFVRSwyREFBQywrQ0FBRCxPQVZGLENBRGE7QUFBQSxDQUFmOztBQWVlQSxxRUFBZixFIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEFwZXhDaGFydHMgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQm9keSxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRUaXRsZSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIFVuY29udHJvbGxlZERyb3Bkb3duXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7IE1vcmVIb3Jpem9udGFsIH0gZnJvbSBcInJlYWN0LWZlYXRoZXJcIjtcclxuXHJcbmNsYXNzIENoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxNiwgMSwgMSksXHJcbiAgICAgICAgICAgIHk6IFs1MS45OCwgNTYuMjksIDUxLjU5LCA1My44NV1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDIsIDEpLFxyXG4gICAgICAgICAgICB5OiBbNTMuNjYsIDU0Ljk5LCA1MS4zNSwgNTIuOTVdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAzLCAxKSxcclxuICAgICAgICAgICAgeTogWzUyLjk2LCA1My43OCwgNTEuNTQsIDUyLjQ4XVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxNiwgNCwgMSksXHJcbiAgICAgICAgICAgIHk6IFs1Mi41NCwgNTIuNzksIDQ3Ljg4LCA0OS4yNF1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDUsIDEpLFxyXG4gICAgICAgICAgICB5OiBbNDkuMSwgNTIuODYsIDQ3LjcsIDUyLjc4XVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxNiwgNiwgMSksXHJcbiAgICAgICAgICAgIHk6IFs1Mi44MywgNTMuNDgsIDUwLjMyLCA1Mi4yOV1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDcsIDEpLFxyXG4gICAgICAgICAgICB5OiBbNTIuMiwgNTQuNDgsIDUxLjY0LCA1Mi41OF1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDgsIDEpLFxyXG4gICAgICAgICAgICB5OiBbNTIuNzYsIDU3LjM1LCA1Mi4xNSwgNTcuMDNdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE2LCA5LCAxKSxcclxuICAgICAgICAgICAgeTogWzU3LjA0LCA1OC4xNSwgNDguODgsIDU2LjE5XVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxNiwgMTAsIDEpLFxyXG4gICAgICAgICAgICB5OiBbNTYuMDksIDU4Ljg1LCA1NS40OCwgNTguNzldXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAxMSwgMSksXHJcbiAgICAgICAgICAgIHk6IFs1OC43OCwgNTkuNjUsIDU4LjIzLCA1OS4wNV1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTcsIDAsIDEpLFxyXG4gICAgICAgICAgICB5OiBbNTkuMzcsIDYxLjExLCA1OS4zNSwgNjAuMzRdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE3LCAxLCAxKSxcclxuICAgICAgICAgICAgeTogWzYwLjQsIDYwLjUyLCA1Ni43MSwgNTYuOTNdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE3LCAyLCAxKSxcclxuICAgICAgICAgICAgeTogWzU3LjAyLCA1OS43MSwgNTYuMDQsIDU2LjgyXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxNywgMywgMSksXHJcbiAgICAgICAgICAgIHk6IFs1Ni45NywgNTkuNjIsIDU0Ljc3LCA1OS4zXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxNywgNCwgMSksXHJcbiAgICAgICAgICAgIHk6IFs1OS4xMSwgNjIuMjksIDU5LjEsIDU5Ljg1XVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxNywgNSwgMSksXHJcbiAgICAgICAgICAgIHk6IFs1OS45NywgNjAuMTEsIDU1LjY2LCA1OC40Ml1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTcsIDYsIDEpLFxyXG4gICAgICAgICAgICB5OiBbNTguMzQsIDYwLjkzLCA1Ni43NSwgNTcuNDJdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE3LCA3LCAxKSxcclxuICAgICAgICAgICAgeTogWzU3Ljc2LCA1OC4wOCwgNTMuMTgsIDU0LjcxXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxNywgOCwgMSksXHJcbiAgICAgICAgICAgIHk6IFs1NC44LCA2MS40MiwgNTMuNTgsIDU3LjM1XVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxNywgOSwgMSksXHJcbiAgICAgICAgICAgIHk6IFs1Ny41NiwgNjMuMDksIDU3LjAsIDYyLjk5XVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxNywgMTAsIDEpLFxyXG4gICAgICAgICAgICB5OiBbNjIuODksIDYzLjQyLCA1OS43MiwgNjEuNzZdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE3LCAxMSwgMSksXHJcbiAgICAgICAgICAgIHk6IFs2MS43MSwgNjQuMTUsIDYxLjI5LCA2My4wNF1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTgsIDAsIDEpLFxyXG4gICAgICAgICAgICB5OiBbNTkuMzcsIDYxLjExLCA1OS4zNSwgNjAuMzRdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE4LCAxLCAxKSxcclxuICAgICAgICAgICAgeTogWzYwLjQsIDYwLjUyLCA1Ni43MSwgNTYuOTNdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE4LCAyLCAxKSxcclxuICAgICAgICAgICAgeTogWzU3LjAyLCA1OS43MSwgNTYuMDQsIDU2LjgyXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxOCwgMywgMSksXHJcbiAgICAgICAgICAgIHk6IFs1Ni45NywgNTkuNjIsIDU0Ljc3LCA1OS4zXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxOCwgNCwgMSksXHJcbiAgICAgICAgICAgIHk6IFs1OS4xMSwgNjIuMjksIDU5LjEsIDU5Ljg1XVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxOCwgNSwgMSksXHJcbiAgICAgICAgICAgIHk6IFs1OS45NywgNjAuMTEsIDU1LjY2LCA1OC40Ml1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTgsIDYsIDEpLFxyXG4gICAgICAgICAgICB5OiBbNTguMzQsIDYwLjkzLCA1Ni43NSwgNTcuNDJdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE4LCA3LCAxKSxcclxuICAgICAgICAgICAgeTogWzU3Ljc2LCA1OC4wOCwgNTEuMTgsIDU0LjcxXVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxOCwgOCwgMSksXHJcbiAgICAgICAgICAgIHk6IFs1NC44LCA2MS40MiwgNTMuMTgsIDU3LjM1XVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxOCwgOSwgMSksXHJcbiAgICAgICAgICAgIHk6IFs1Ny41NiwgNjIuMDksIDU3LjAsIDYxLjk5XVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeDogbmV3IERhdGUoMjAxOCwgMTAsIDEpLFxyXG4gICAgICAgICAgICB5OiBbNjIuODksIDYzLjQyLCA1OS43MiwgNjEuNzZdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE4LCAxMSwgMSksXHJcbiAgICAgICAgICAgIHk6IFs2MS43MSwgNjQuMTUsIDYxLjI5LCA2My4wNF1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICBzdHJva2U6IHtcclxuICAgICAgICB3aWR0aDogMVxyXG4gICAgICB9LFxyXG4gICAgICB4YXhpczoge1xyXG4gICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIlxyXG4gICAgICB9LFxyXG4gICAgICBjb2xvcnM6IFtcIiMwY2MyYWFcIiwgXCIjNWZjMjdlXCIsIFwiI2ZjYzEwMFwiLCBcIiNmNDQ0NTVcIiwgXCIjNWI3ZGZmXCJdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyBUcmlnZ2VyIHJlc2l6ZSBtYW51YWxseSBzbyBjaGFydCBkb2Vzbid0IGZhbGwgb2ZmIGNhbnZhc1xyXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwicmVzaXplXCIpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImZsZXgtZmlsbFwiPlxyXG4gICAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMgZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPFVuY29udHJvbGxlZERyb3Bkb3duPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSB0YWc9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICA8TW9yZUhvcml6b250YWwgLz5cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgcmlnaHQ+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPkFjdGlvbjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5Bbm90aGVyIEFjdGlvbjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5Tb21ldGhpbmcgZWxzZSBoZXJlPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgIDwvVW5jb250cm9sbGVkRHJvcGRvd24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIiBjbGFzc05hbWU9XCJtYi0wXCI+TFRDL0JUQzwvQ2FyZFRpdGxlPlxyXG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XHJcbiAgICAgICAgICAgIDxBcGV4Q2hhcnRzXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5vcHRpb25zfVxyXG4gICAgICAgICAgICAgIHNlcmllcz17dGhpcy5kYXRhfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjYW5kbGVzdGlja1wiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDUwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkVGl0bGUsXHJcbiAgRHJvcGRvd25JdGVtLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBUYWJsZVxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgeyBNb3JlSG9yaXpvbnRhbCB9IGZyb20gXCJyZWFjdC1mZWF0aGVyXCI7XHJcblxyXG5jb25zdCBNYXJrZXRzID0gKCkgPT4gKFxyXG4gIDxDYXJkIGNsYXNzTmFtZT1cImZsZXgtZmlsbFwiPlxyXG4gICAgPENhcmRIZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgPFVuY29udHJvbGxlZERyb3Bkb3duPlxyXG4gICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIHRhZz1cImFcIj5cclxuICAgICAgICAgICAgPE1vcmVIb3Jpem9udGFsIC8+XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgPERyb3Bkb3duTWVudSByaWdodD5cclxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5BY3Rpb248L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5Bbm90aGVyIEFjdGlvbjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtPlNvbWV0aGluZyBlbHNlIGhlcmU8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgIDwvVW5jb250cm9sbGVkRHJvcGRvd24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCIgY2xhc3NOYW1lPVwibWItMFwiPk1hcmtldHM8L0NhcmRUaXRsZT5cclxuICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgIDxUYWJsZSBzaXplPVwic21cIiBzdHJpcGVkIGNsYXNzTmFtZT1cIm15LTBcIj5cclxuICAgICAgPHRoZWFkPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0aD5Db2luPC90aD5cclxuICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPlZvbHVtZTwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPkNoYW5nZTwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD5FVEg8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4wLjAzODYzNDA1PC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHRcIj4xMzc5LjYzNDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0IHRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICArMS41MlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD5YUlA8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4wLjAwMDA5MzEzPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHRcIj4yNzAuODA1PC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHQgdGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgLTMuMzBcclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+WE1SPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+MC4wMTI5MjMxNTwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+MjAzLjUzMTwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0IHRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICArNi4xMFxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD5EQVNIPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+MC4wMjA4ODk5MjwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+ODQuMDM0PC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHQgdGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgLTMuMTdcclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+TFRDPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+MC4wMDgyMTUwMTwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+ODAuNTY2PC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHQgdGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICszLjAwXHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPlNUUjwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjAuMDAwMDI5NDg8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodFwiPjU4Ljk4MTwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0IHRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICArMi41OFxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD5ET0dFPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+MC4wMDAwMDA2MTwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+NDYuODQ5PC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHQgdGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgLTEuNjFcclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+UkVQPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+MC4wMDIyMzUxMDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+MzcuMDM4PC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHQgdGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICswLjU0XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPkVPUzwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjAuMDAwNjkwMDA8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodFwiPjM1LjA0MDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0IHRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgIC01Ljg0XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPkRHQjwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjAuMDAwMDAyNzc8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodFwiPjM0Ljg0MDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0IHRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICArMC4zNlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD5aRUM8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4wLjAxNTA1MDAwPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHRcIj4zMi4zMjY8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodCB0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAtNC4yNFxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD5CVVJTVDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjAuMDAwMDAwOTg8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodFwiPjI1LjU5MDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0IHRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgIC0xNS41MlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD5NQUlEPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+MC4wMDAwMzcyNDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+MjAuNTU2PC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHQgdGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgLTIuMzNcclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+RVRDPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+MC4wMDEzMjI0OTwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+MTkuNjMzPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHQgdGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICs0LjE5XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPlNUUkFUPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+MC4wMDAyODU4NzwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+MTcuNTU3PC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHQgdGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICs0LjQwXHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L1RhYmxlPlxyXG4gIDwvQ2FyZD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcmtldHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZFRpdGxlLFxyXG4gIENvbCxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIFJvdyxcclxuICBUYWJsZSxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93blxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgeyBNb3JlSG9yaXpvbnRhbCB9IGZyb20gXCJyZWFjdC1mZWF0aGVyXCI7XHJcblxyXG5jb25zdCBPcmRlcnMgPSAoKSA9PiAoXHJcbiAgPFJvdz5cclxuICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImZsZXgtZmlsbFwiPlxyXG4gICAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMgZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPFVuY29udHJvbGxlZERyb3Bkb3duPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSB0YWc9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICA8TW9yZUhvcml6b250YWwgLz5cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgcmlnaHQ+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPkFjdGlvbjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5Bbm90aGVyIEFjdGlvbjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5Tb21ldGhpbmcgZWxzZSBoZXJlPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgIDwvVW5jb250cm9sbGVkRHJvcGRvd24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIiBjbGFzc05hbWU9XCJtYi0wXCI+U2VsbCBPcmRlcnM8L0NhcmRUaXRsZT5cclxuICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgPFRhYmxlIHNpemU9XCJzbVwiIHN0cmlwZWQgY2xhc3NOYW1lPVwibXktMFwiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPkVUSDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj5CVEM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5TdW0oQlRDKTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD4wLjAzODkyNTAxPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPjMyLjA3ODMxNTU4PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPjEuMjQ4NjQ4NzU8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD4xLjI2MzI5NjU5PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD4wLjAzODkzNzU0PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPjQuOTc1NDYxODc8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+MC4xOTM3MzIyNTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjEuNDU3MDI4ODQ8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPjAuMDM4OTUxODk8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+MC4wMDI4ODA5ODwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4wLjAwMDExMjIyPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+MS40NTcxNDEwNjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+MC4wMzg5NjU5MzwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4xLjM3NzIyMjYyPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPjAuMDUzNjY0NzY8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD4xLjUxMDgwNTgyPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD4wLjAzODk3OTMyPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPjcuOTE2MTI3NDc8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+MC4zMDg1NjUyNzwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjEuODE5MzcxMDk8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPjAuMDM4OTc5MzM8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+MC4zMjc0NTUwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4wLjAxMjc2Mzk4PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+MS44MzIxMzUwNzwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+MC4wMzg5OTE4MDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4wLjAwNzU4MDAzPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPjAuMDAwMjk1NTY8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD4xLjgzMjQzMDYzPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD4wLjAzODk5Nzg0PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPjIuMDUyNzI3NDU8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+MC4wODAwNTE5NDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjEuOTEyNDgyNTc8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPjAuMDM4OTk5OTg8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+Mi41OTE0MzE2MjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4wLjEwMTA2NTc4PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+Mi4wMTM1NDgzNTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+MC4wMzg5OTk5OTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4zLjAwMDAwMDAwPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPjAuMTE2OTk5OTc8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD4yLjEzMDU0ODMyPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9Db2w+XHJcbiAgICA8Q29sIGxnPVwiNlwiPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJmbGV4LWZpbGxcIj5cclxuICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxVbmNvbnRyb2xsZWREcm9wZG93bj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgdGFnPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgPE1vcmVIb3Jpem9udGFsIC8+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IHJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5BY3Rpb248L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+QW5vdGhlciBBY3Rpb248L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+U29tZXRoaW5nIGVsc2UgaGVyZTwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICA8L1VuY29udHJvbGxlZERyb3Bkb3duPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCIgY2xhc3NOYW1lPVwibWItMFwiPkJ1eSBPcmRlcnM8L0NhcmRUaXRsZT5cclxuICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgPFRhYmxlIHNpemU9XCJzbVwiIHN0cmlwZWQgY2xhc3NOYW1lPVwibXktMFwiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPkVUSDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj5CVEM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5TdW0oQlRDKTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD4wLjAzODkyMDAwPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPjAuMjI0NDY0NTI8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+MC4wMDg3MzYxNjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjAuMDA4NzM2MTY8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPjAuMDM4OTA1MDA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+NjYuMzkzOTAwMDA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+Mi41ODMwNTQ2ODwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjIuNTkxNzkwODQ8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPjAuMDM4OTAxMzI8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+NTYuNTUzMzQ3OTg8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+Mi4xOTk5OTk4OTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjQuNzkxNzkwNzM8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPjAuMDM4OTAwNTM8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+MC4wODI4NTM1MTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4wLjAwMzIyMzA1PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+NC43OTUwMTM3ODwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+MC4wMzg4OTcwNjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4xNS42MTUxNjcwNTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4wLjYwNzM4NDA5PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+NS40MDIzOTc4NzwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+MC4wMzg4ODExNzwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4xMi44NDA3MDg5NzwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4wLjQ5OTI2MTc5PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+NS45MDE2NTk2NjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+MC4wMzg4NTUwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4wLjk5ODAwMDAwPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPjAuMDM4Nzc3Mjk8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD41Ljk0MDQzNjk1PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD4wLjAzODg0MzI1PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPjAuMjA1NTIzMDA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+MC4wMDc5ODMxODwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjUuOTQ4NDIwMTM8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPjAuMDM4ODM0NzQ8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+Ny41ODQ4MDg2MDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4wLjI5NDU1NDA3PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+Ni4yNDI5NzQyMDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+MC4wMzg4MTYxNjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj4wLjI1MDAwMDAwPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPjAuMDA5NzA0MDQ8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD42LjI1MjY3ODI0PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9Db2w+XHJcbiAgPC9Sb3c+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlcnM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29sLCBDYXJkLCBDYXJkQm9keSwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IFRpY2tlcnMgPSAoKSA9PiAoXHJcbiAgPFJvdz5cclxuICAgIDxDb2wgbWQ9XCI2XCIgeGw+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImZsZXgtZmlsbFwiPlxyXG4gICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgdGV4dC1kYW5nZXJcIj4tNS4yOCU8L2Rpdj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi0yXCI+SFNSL0JUQzwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTFcIj5cclxuICAgICAgICAgICAgPHN0cm9uZz4wLjAwMTQxNjwvc3Ryb25nPiAkMTYuNjFcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5Wb2x1bWU6IDIsNjkyLjQ3IEJUQzwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvQ29sPlxyXG4gICAgPENvbCBtZD1cIjZcIiB4bD5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZmxleC1maWxsXCI+XHJcbiAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCB0ZXh0LXN1Y2Nlc3NcIj4yLjYxJTwvZGl2PlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTJcIj5CTkIvQlRDPC9oND5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICA8c3Ryb25nPjAuMDAwMjIwMDQ8L3N0cm9uZz4gJDIuNThcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5Wb2x1bWU6IDg0Mi41MiBCVEM8L2Rpdj5cclxuICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L0NvbD5cclxuICAgIDxDb2wgbWQ9XCI2XCIgeGw+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImZsZXgtZmlsbFwiPlxyXG4gICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgdGV4dC1kYW5nZXJcIj4tNy4yNyU8L2Rpdj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi0yXCI+UE9XUi9CVEM8L2g0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+MC4wMDAwNTgwNjwvc3Ryb25nPiAkMC42OFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlZvbHVtZTogMzkzLjAzIEJUQzwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvQ29sPlxyXG4gICAgPENvbCBtZD1cIjZcIiB4bD5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZmxleC1maWxsXCI+XHJcbiAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCB0ZXh0LWRhbmdlclwiPi00Ljk4JTwvZGl2PlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTJcIj5UUlgvQlRDPC9oND5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMVwiPlxyXG4gICAgICAgICAgICA8c3Ryb25nPjAuMDAwMDAyMjk8L3N0cm9uZz4gJDAuMDRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5Wb2x1bWU6IDYsODM2LjMxIEJUQzwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvQ29sPlxyXG4gICAgPENvbCBtZD1cIjZcIiB4bCBjbGFzc05hbWU9XCJkLW5vbmUgZC14eGwtZmxleFwiPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJmbGV4LWZpbGxcIj5cclxuICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IHRleHQtc3VjY2Vzc1wiPjE2LjExJTwvZGl2PlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTJcIj5JT1RBL0JUQzwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTFcIj5cclxuICAgICAgICAgICAgPHN0cm9uZz4wLjAwMDI1ODAwPC9zdHJvbmc+ICQzLjAzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+Vm9sdW1lOiAxNCwwNjUuODcgQlRDPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9Db2w+XHJcbiAgPC9Sb3c+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWNrZXJzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IENoYXJ0IGZyb20gXCIuL0NoYXJ0XCI7XHJcblxyXG5pbXBvcnQgVGlja2VycyBmcm9tIFwiLi9UaWNrZXJzXCI7XHJcbmltcG9ydCBNYXJrZXRzIGZyb20gXCIuL01hcmtldHNcIjtcclxuaW1wb3J0IE9yZGVycyBmcm9tIFwiLi9PcmRlcnNcIjtcclxuXHJcbmNvbnN0IENyeXB0byA9ICgpID0+IChcclxuICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgPFRpY2tlcnMgLz5cclxuICAgIDxSb3c+XHJcbiAgICAgIDxDb2wgbGc9XCI1XCIgY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC14eGwtNFwiPlxyXG4gICAgICAgIDxNYXJrZXRzIC8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIGxnPVwiN1wiIGNsYXNzTmFtZT1cImQtZmxleCBjb2wteHhsLThcIj5cclxuICAgICAgICA8Q2hhcnQgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L1Jvdz5cclxuICAgIDxPcmRlcnMgLz5cclxuICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyeXB0bztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==