(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./assets/js/pages/charts/Chartjs/Bar.js":
/*!***********************************************!*\
  !*** ./assets/js/pages/charts/Chartjs/Bar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var BarChart = function BarChart(_ref) {
  var theme = _ref.theme;
  var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Last year",
      backgroundColor: theme.primary,
      borderColor: theme.primary,
      hoverBackgroundColor: theme.primary,
      hoverBorderColor: theme.primary,
      data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79]
    }, {
      label: "This year",
      backgroundColor: "#E8EAED",
      borderColor: "#E8EAED",
      hoverBackgroundColor: "#E8EAED",
      hoverBorderColor: "#E8EAED",
      data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68]
    }]
  };
  var options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false
        },
        stacked: false,
        ticks: {
          stepSize: 20
        }
      }],
      xAxes: [{
        barPercentage: 0.75,
        categoryPercentage: 0.5,
        stacked: false,
        gridLines: {
          color: "transparent"
        }
      }]
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Bar Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "A bar chart provides a way of showing data values represented as vertical bars.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    data: data,
    options: options
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(BarChart));

/***/ }),

/***/ "./assets/js/pages/charts/Chartjs/Doughnut.js":
/*!****************************************************!*\
  !*** ./assets/js/pages/charts/Chartjs/Doughnut.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var DoughnutChart = function DoughnutChart(_ref) {
  var theme = _ref.theme;
  var data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [{
      data: [260, 125, 54, 146],
      backgroundColor: [theme.primary, theme.success, theme.warning, "#E8EAED"],
      borderColor: "transparent"
    }]
  };
  var options = {
    maintainAspectRatio: false,
    cutoutPercentage: 65,
    legend: {
      display: false
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Doughnut Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "Doughnut charts are excellent at showing the relational proportions between data.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart chart-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Doughnut"], {
    data: data,
    options: options
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(DoughnutChart));

/***/ }),

/***/ "./assets/js/pages/charts/Chartjs/Line.js":
/*!************************************************!*\
  !*** ./assets/js/pages/charts/Chartjs/Line.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var LineChart = function LineChart(_ref) {
  var theme = _ref.theme;
  var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Sales ($)",
      fill: true,
      backgroundColor: "transparent",
      borderColor: theme.primary,
      data: [2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917, 3327]
    }, {
      label: "Orders",
      fill: true,
      backgroundColor: "transparent",
      borderColor: theme.tertiary,
      borderDash: [4, 4],
      data: [958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827]
    }]
  };
  var options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      intersect: false
    },
    hover: {
      intersect: true
    },
    plugins: {
      filler: {
        propagate: false
      }
    },
    scales: {
      xAxes: [{
        reverse: true,
        gridLines: {
          color: "rgba(0,0,0,0.05)"
        }
      }],
      yAxes: [{
        ticks: {
          stepSize: 500
        },
        display: true,
        borderDash: [5, 5],
        gridLines: {
          color: "rgba(0,0,0,0)",
          fontColor: "#fff"
        }
      }]
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Line Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "A line chart is a way of plotting data points on a line.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    data: data,
    options: options
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(LineChart));

/***/ }),

/***/ "./assets/js/pages/charts/Chartjs/Pie.js":
/*!***********************************************!*\
  !*** ./assets/js/pages/charts/Chartjs/Pie.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var PieChart = function PieChart(_ref) {
  var theme = _ref.theme;
  var data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [{
      data: [260, 125, 54, 146],
      backgroundColor: [theme.primary, theme.warning, theme.danger, "#E8EAED"],
      borderColor: "transparent"
    }]
  };
  var options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Pie Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "Pie charts are excellent at showing the relational proportions between data.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart chart-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
    data: data,
    options: options
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(PieChart));

/***/ }),

/***/ "./assets/js/pages/charts/Chartjs/Polar.js":
/*!*************************************************!*\
  !*** ./assets/js/pages/charts/Chartjs/Polar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var PolarChart = function PolarChart(_ref) {
  var theme = _ref.theme;
  var data = {
    labels: ["Speed", "Reliability", "Comfort", "Safety", "Efficiency"],
    datasets: [{
      label: "Model S",
      data: [35, 38, 65, 70, 24],
      backgroundColor: [theme.primary, theme.success, theme.danger, theme.warning, "#5b7dff"]
    }]
  };
  var options = {
    maintainAspectRatio: false
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Polar Area Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "Polar area charts are similar to pie charts, but each segment has the same angle.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Polar"], {
    data: data,
    options: options
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(PolarChart));

/***/ }),

/***/ "./assets/js/pages/charts/Chartjs/Radar.js":
/*!*************************************************!*\
  !*** ./assets/js/pages/charts/Chartjs/Radar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var RadarChart = function RadarChart(_ref) {
  var theme = _ref.theme;
  var data = {
    labels: ["Speed", "Reliability", "Comfort", "Safety", "Efficiency"],
    datasets: [{
      label: "Model X",
      backgroundColor: "rgba(0, 123, 255, 0.2)",
      borderColor: theme.primary,
      pointBackgroundColor: theme.primary,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: theme.primary,
      data: [70, 53, 82, 60, 33]
    }, {
      label: "Model S",
      backgroundColor: "rgba(220, 53, 69, 0.2)",
      borderColor: theme.danger,
      pointBackgroundColor: theme.danger,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: theme.danger,
      data: [35, 38, 65, 85, 84]
    }]
  };
  var options = {
    maintainAspectRatio: false
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Radar Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "A radar chart is a way of showing multiple data points and the variation between them.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Radar"], {
    data: data,
    options: options
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(RadarChart));

/***/ }),

/***/ "./assets/js/pages/charts/Chartjs/index.js":
/*!*************************************************!*\
  !*** ./assets/js/pages/charts/Chartjs/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Line */ "./assets/js/pages/charts/Chartjs/Line.js");
/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bar */ "./assets/js/pages/charts/Chartjs/Bar.js");
/* harmony import */ var _Doughnut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Doughnut */ "./assets/js/pages/charts/Chartjs/Doughnut.js");
/* harmony import */ var _Pie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pie */ "./assets/js/pages/charts/Chartjs/Pie.js");
/* harmony import */ var _Radar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Radar */ "./assets/js/pages/charts/Chartjs/Radar.js");
/* harmony import */ var _Polar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Polar */ "./assets/js/pages/charts/Chartjs/Polar.js");









var Chartjs = function Chartjs() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    className: "p-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "h3 mb-3"
  }, "Chart.js"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Line__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bar__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Doughnut__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pie__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Radar__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Polar__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Chartjs);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvY2hhcnRzL0NoYXJ0anMvQmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9jaGFydHMvQ2hhcnRqcy9Eb3VnaG51dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvY2hhcnRzL0NoYXJ0anMvTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvY2hhcnRzL0NoYXJ0anMvUGllLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9jaGFydHMvQ2hhcnRqcy9Qb2xhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvY2hhcnRzL0NoYXJ0anMvUmFkYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL2NoYXJ0cy9DaGFydGpzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJhckNoYXJ0IiwidGhlbWUiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsInByaW1hcnkiLCJib3JkZXJDb2xvciIsImhvdmVyQmFja2dyb3VuZENvbG9yIiwiaG92ZXJCb3JkZXJDb2xvciIsIm9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwibGVnZW5kIiwiZGlzcGxheSIsInNjYWxlcyIsInlBeGVzIiwiZ3JpZExpbmVzIiwic3RhY2tlZCIsInRpY2tzIiwic3RlcFNpemUiLCJ4QXhlcyIsImJhclBlcmNlbnRhZ2UiLCJjYXRlZ29yeVBlcmNlbnRhZ2UiLCJjb2xvciIsImNvbm5lY3QiLCJzdG9yZSIsImN1cnJlbnRUaGVtZSIsIkRvdWdobnV0Q2hhcnQiLCJzdWNjZXNzIiwid2FybmluZyIsImN1dG91dFBlcmNlbnRhZ2UiLCJMaW5lQ2hhcnQiLCJmaWxsIiwidGVydGlhcnkiLCJib3JkZXJEYXNoIiwidG9vbHRpcHMiLCJpbnRlcnNlY3QiLCJob3ZlciIsInBsdWdpbnMiLCJmaWxsZXIiLCJwcm9wYWdhdGUiLCJyZXZlcnNlIiwiZm9udENvbG9yIiwiUGllQ2hhcnQiLCJkYW5nZXIiLCJQb2xhckNoYXJ0IiwiUmFkYXJDaGFydCIsInBvaW50QmFja2dyb3VuZENvbG9yIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJDaGFydGpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUM5QixNQUFNQyxJQUFJLEdBQUc7QUFDWEMsVUFBTSxFQUFFLENBQ04sS0FETSxFQUVOLEtBRk0sRUFHTixLQUhNLEVBSU4sS0FKTSxFQUtOLEtBTE0sRUFNTixLQU5NLEVBT04sS0FQTSxFQVFOLEtBUk0sRUFTTixLQVRNLEVBVU4sS0FWTSxFQVdOLEtBWE0sRUFZTixLQVpNLENBREc7QUFlWEMsWUFBUSxFQUFFLENBQ1I7QUFDRUMsV0FBSyxFQUFFLFdBRFQ7QUFFRUMscUJBQWUsRUFBRUwsS0FBSyxDQUFDTSxPQUZ6QjtBQUdFQyxpQkFBVyxFQUFFUCxLQUFLLENBQUNNLE9BSHJCO0FBSUVFLDBCQUFvQixFQUFFUixLQUFLLENBQUNNLE9BSjlCO0FBS0VHLHNCQUFnQixFQUFFVCxLQUFLLENBQUNNLE9BTDFCO0FBTUVMLFVBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekIsRUFBNkIsRUFBN0IsRUFBaUMsRUFBakMsRUFBcUMsRUFBckMsRUFBeUMsRUFBekMsRUFBNkMsRUFBN0M7QUFOUixLQURRLEVBU1I7QUFDRUcsV0FBSyxFQUFFLFdBRFQ7QUFFRUMscUJBQWUsRUFBRSxTQUZuQjtBQUdFRSxpQkFBVyxFQUFFLFNBSGY7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Qyw0Q0FBRCxPQURGLENBSkYsRUFPRSwyREFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQztBQUFSLEtBQ0UsMkRBQUMsaURBQUQsT0FERixDQVBGLEVBVUUsMkRBQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUM7QUFBUixLQUNFLDJEQUFDLDRDQUFELE9BREYsQ0FWRixFQWFFLDJEQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDO0FBQVIsS0FDRSwyREFBQyw4Q0FBRCxPQURGLENBYkYsRUFnQkUsMkRBQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUM7QUFBUixLQUNFLDJEQUFDLDhDQUFELE9BREYsQ0FoQkYsQ0FIRixDQURjO0FBQUEsQ0FBaEI7O0FBMkJlQSxzRUFBZixFIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCYXIgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IENhcmQsIENhcmRCb2R5LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuY29uc3QgQmFyQ2hhcnQgPSAoeyB0aGVtZSB9KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGxhYmVsczogW1xyXG4gICAgICBcIkphblwiLFxyXG4gICAgICBcIkZlYlwiLFxyXG4gICAgICBcIk1hclwiLFxyXG4gICAgICBcIkFwclwiLFxyXG4gICAgICBcIk1heVwiLFxyXG4gICAgICBcIkp1blwiLFxyXG4gICAgICBcIkp1bFwiLFxyXG4gICAgICBcIkF1Z1wiLFxyXG4gICAgICBcIlNlcFwiLFxyXG4gICAgICBcIk9jdFwiLFxyXG4gICAgICBcIk5vdlwiLFxyXG4gICAgICBcIkRlY1wiXHJcbiAgICBdLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIkxhc3QgeWVhclwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICBob3ZlckJvcmRlckNvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG4gICAgICAgIGRhdGE6IFs1NCwgNjcsIDQxLCA1NSwgNjIsIDQ1LCA1NSwgNzMsIDYwLCA3NiwgNDgsIDc5XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiVGhpcyB5ZWFyXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFOEVBRURcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogXCIjRThFQUVEXCIsXHJcbiAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiI0U4RUFFRFwiLFxyXG4gICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6IFwiI0U4RUFFRFwiLFxyXG4gICAgICAgIGRhdGE6IFs2OSwgNjYsIDI0LCA0OCwgNTIsIDUxLCA0NCwgNTMsIDYyLCA3OSwgNTEsIDY4XVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHlBeGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3RhY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICBzdGVwU2l6ZTogMjBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIHhBeGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYmFyUGVyY2VudGFnZTogMC43NSxcclxuICAgICAgICAgIGNhdGVnb3J5UGVyY2VudGFnZTogMC41LFxyXG4gICAgICAgICAgc3RhY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgY29sb3I6IFwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkJhciBDaGFydDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgIEEgYmFyIGNoYXJ0IHByb3ZpZGVzIGEgd2F5IG9mIHNob3dpbmcgZGF0YSB2YWx1ZXMgcmVwcmVzZW50ZWQgYXNcclxuICAgICAgICAgIHZlcnRpY2FsIGJhcnMuXHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxyXG4gICAgICAgICAgPEJhciBkYXRhPXtkYXRhfSBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0b3JlID0+ICh7XHJcbiAgdGhlbWU6IHN0b3JlLnRoZW1lLmN1cnJlbnRUaGVtZVxyXG59KSkoQmFyQ2hhcnQpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQm9keSwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IERvdWdobnV0Q2hhcnQgPSAoeyB0aGVtZSB9KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGxhYmVsczogW1wiU29jaWFsXCIsIFwiU2VhcmNoIEVuZ2luZXNcIiwgXCJEaXJlY3RcIiwgXCJPdGhlclwiXSxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBkYXRhOiBbMjYwLCAxMjUsIDU0LCAxNDZdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgdGhlbWUucHJpbWFyeSxcclxuICAgICAgICAgIHRoZW1lLnN1Y2Nlc3MsXHJcbiAgICAgICAgICB0aGVtZS53YXJuaW5nLFxyXG4gICAgICAgICAgXCIjRThFQUVEXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgIGN1dG91dFBlcmNlbnRhZ2U6IDY1LFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+RG91Z2hudXQgQ2hhcnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBEb3VnaG51dCBjaGFydHMgYXJlIGV4Y2VsbGVudCBhdCBzaG93aW5nIHRoZSByZWxhdGlvbmFsIHByb3BvcnRpb25zXHJcbiAgICAgICAgICBiZXR3ZWVuIGRhdGEuXHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydCBjaGFydC1zbVwiPlxyXG4gICAgICAgICAgPERvdWdobnV0IGRhdGE9e2RhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RvcmUgPT4gKHtcclxuICB0aGVtZTogc3RvcmUudGhlbWUuY3VycmVudFRoZW1lXHJcbn0pKShEb3VnaG51dENoYXJ0KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQm9keSwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IExpbmVDaGFydCA9ICh7IHRoZW1lIH0pID0+IHtcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBbXHJcbiAgICAgIFwiSmFuXCIsXHJcbiAgICAgIFwiRmViXCIsXHJcbiAgICAgIFwiTWFyXCIsXHJcbiAgICAgIFwiQXByXCIsXHJcbiAgICAgIFwiTWF5XCIsXHJcbiAgICAgIFwiSnVuXCIsXHJcbiAgICAgIFwiSnVsXCIsXHJcbiAgICAgIFwiQXVnXCIsXHJcbiAgICAgIFwiU2VwXCIsXHJcbiAgICAgIFwiT2N0XCIsXHJcbiAgICAgIFwiTm92XCIsXHJcbiAgICAgIFwiRGVjXCJcclxuICAgIF0sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiU2FsZXMgKCQpXCIsXHJcbiAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAyMTE1LFxyXG4gICAgICAgICAgMTU2MixcclxuICAgICAgICAgIDE1ODQsXHJcbiAgICAgICAgICAxODkyLFxyXG4gICAgICAgICAgMTQ4NyxcclxuICAgICAgICAgIDIyMjMsXHJcbiAgICAgICAgICAyOTY2LFxyXG4gICAgICAgICAgMjQ0OCxcclxuICAgICAgICAgIDI5MDUsXHJcbiAgICAgICAgICAzODM4LFxyXG4gICAgICAgICAgMjkxNyxcclxuICAgICAgICAgIDMzMjdcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCJPcmRlcnNcIixcclxuICAgICAgICBmaWxsOiB0cnVlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS50ZXJ0aWFyeSxcclxuICAgICAgICBib3JkZXJEYXNoOiBbNCwgNF0sXHJcbiAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgOTU4LFxyXG4gICAgICAgICAgNzI0LFxyXG4gICAgICAgICAgNjI5LFxyXG4gICAgICAgICAgODgzLFxyXG4gICAgICAgICAgOTE1LFxyXG4gICAgICAgICAgMTIxNCxcclxuICAgICAgICAgIDE0NzYsXHJcbiAgICAgICAgICAxMjEyLFxyXG4gICAgICAgICAgMTU1NCxcclxuICAgICAgICAgIDIxMjgsXHJcbiAgICAgICAgICAxNDY2LFxyXG4gICAgICAgICAgMTgyN1xyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgIGludGVyc2VjdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBob3Zlcjoge1xyXG4gICAgICBpbnRlcnNlY3Q6IHRydWVcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiB7XHJcbiAgICAgIGZpbGxlcjoge1xyXG4gICAgICAgIHByb3BhZ2F0ZTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB4QXhlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJldmVyc2U6IHRydWUsXHJcbiAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgY29sb3I6IFwicmdiYSgwLDAsMCwwLjA1KVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICB5QXhlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgIHN0ZXBTaXplOiA1MDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaDogWzUsIDVdLFxyXG4gICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwwLDAsMClcIixcclxuICAgICAgICAgICAgZm9udENvbG9yOiBcIiNmZmZcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkxpbmUgQ2hhcnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBBIGxpbmUgY2hhcnQgaXMgYSB3YXkgb2YgcGxvdHRpbmcgZGF0YSBwb2ludHMgb24gYSBsaW5lLlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cclxuICAgICAgICAgIDxMaW5lIGRhdGE9e2RhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RvcmUgPT4gKHtcclxuICB0aGVtZTogc3RvcmUudGhlbWUuY3VycmVudFRoZW1lXHJcbn0pKShMaW5lQ2hhcnQpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBpZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBQaWVDaGFydCA9ICh7IHRoZW1lIH0pID0+IHtcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBbXCJTb2NpYWxcIiwgXCJTZWFyY2ggRW5naW5lc1wiLCBcIkRpcmVjdFwiLCBcIk90aGVyXCJdLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGRhdGE6IFsyNjAsIDEyNSwgNTQsIDE0Nl0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICB0aGVtZS5wcmltYXJ5LFxyXG4gICAgICAgICAgdGhlbWUud2FybmluZyxcclxuICAgICAgICAgIHRoZW1lLmRhbmdlcixcclxuICAgICAgICAgIFwiI0U4RUFFRFwiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5QaWUgQ2hhcnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBQaWUgY2hhcnRzIGFyZSBleGNlbGxlbnQgYXQgc2hvd2luZyB0aGUgcmVsYXRpb25hbCBwcm9wb3J0aW9ucyBiZXR3ZWVuXHJcbiAgICAgICAgICBkYXRhLlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQgY2hhcnQtc21cIj5cclxuICAgICAgICAgIDxQaWUgZGF0YT17ZGF0YX0gb3B0aW9ucz17b3B0aW9uc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkQm9keT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdG9yZSA9PiAoe1xyXG4gIHRoZW1lOiBzdG9yZS50aGVtZS5jdXJyZW50VGhlbWVcclxufSkpKFBpZUNoYXJ0KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQb2xhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBQb2xhckNoYXJ0ID0gKHsgdGhlbWUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBsYWJlbHM6IFtcIlNwZWVkXCIsIFwiUmVsaWFiaWxpdHlcIiwgXCJDb21mb3J0XCIsIFwiU2FmZXR5XCIsIFwiRWZmaWNpZW5jeVwiXSxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCJNb2RlbCBTXCIsXHJcbiAgICAgICAgZGF0YTogWzM1LCAzOCwgNjUsIDcwLCAyNF0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICB0aGVtZS5wcmltYXJ5LFxyXG4gICAgICAgICAgdGhlbWUuc3VjY2VzcyxcclxuICAgICAgICAgIHRoZW1lLmRhbmdlcixcclxuICAgICAgICAgIHRoZW1lLndhcm5pbmcsXHJcbiAgICAgICAgICBcIiM1YjdkZmZcIlxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7IG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPlBvbGFyIEFyZWEgQ2hhcnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBQb2xhciBhcmVhIGNoYXJ0cyBhcmUgc2ltaWxhciB0byBwaWUgY2hhcnRzLCBidXQgZWFjaCBzZWdtZW50IGhhcyB0aGVcclxuICAgICAgICAgIHNhbWUgYW5nbGUuXHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxyXG4gICAgICAgICAgPFBvbGFyIGRhdGE9e2RhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RvcmUgPT4gKHtcclxuICB0aGVtZTogc3RvcmUudGhlbWUuY3VycmVudFRoZW1lXHJcbn0pKShQb2xhckNoYXJ0KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSYWRhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBSYWRhckNoYXJ0ID0gKHsgdGhlbWUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBsYWJlbHM6IFtcIlNwZWVkXCIsIFwiUmVsaWFiaWxpdHlcIiwgXCJDb21mb3J0XCIsIFwiU2FmZXR5XCIsIFwiRWZmaWNpZW5jeVwiXSxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCJNb2RlbCBYXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMTIzLCAyNTUsIDAuMilcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IHRoZW1lLnByaW1hcnksXHJcbiAgICAgICAgZGF0YTogWzcwLCA1MywgODIsIDYwLCAzM11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIk1vZGVsIFNcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjAsIDUzLCA2OSwgMC4yKVwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5kYW5nZXIsXHJcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRhbmdlcixcclxuICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IHRoZW1lLmRhbmdlcixcclxuICAgICAgICBkYXRhOiBbMzUsIDM4LCA2NSwgODUsIDg0XVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHsgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+UmFkYXIgQ2hhcnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBBIHJhZGFyIGNoYXJ0IGlzIGEgd2F5IG9mIHNob3dpbmcgbXVsdGlwbGUgZGF0YSBwb2ludHMgYW5kIHRoZVxyXG4gICAgICAgICAgdmFyaWF0aW9uIGJldHdlZW4gdGhlbS5cclxuICAgICAgICA8L2g2PlxyXG4gICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XHJcbiAgICAgICAgICA8UmFkYXIgZGF0YT17ZGF0YX0gb3B0aW9ucz17b3B0aW9uc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkQm9keT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdG9yZSA9PiAoe1xyXG4gIHRoZW1lOiBzdG9yZS50aGVtZS5jdXJyZW50VGhlbWVcclxufSkpKFJhZGFyQ2hhcnQpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCBMaW5lIGZyb20gXCIuL0xpbmVcIjtcclxuaW1wb3J0IEJhciBmcm9tIFwiLi9CYXJcIjtcclxuaW1wb3J0IERvdWdobnV0IGZyb20gXCIuL0RvdWdobnV0XCI7XHJcbmltcG9ydCBQaWUgZnJvbSBcIi4vUGllXCI7XHJcbmltcG9ydCBSYWRhciBmcm9tIFwiLi9SYWRhclwiO1xyXG5pbXBvcnQgUG9sYXIgZnJvbSBcIi4vUG9sYXJcIjtcclxuXHJcbmNvbnN0IENoYXJ0anMgPSAoKSA9PiAoXHJcbiAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgIDxoMSBjbGFzc05hbWU9XCJoMyBtYi0zXCI+Q2hhcnQuanM8L2gxPlxyXG5cclxuICAgIDxSb3c+XHJcbiAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgPExpbmUgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgPEJhciAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBsZz1cIjZcIj5cclxuICAgICAgICA8RG91Z2hudXQgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgPFBpZSAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBsZz1cIjZcIj5cclxuICAgICAgICA8UmFkYXIgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgPFBvbGFyIC8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgPC9Db250YWluZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydGpzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9