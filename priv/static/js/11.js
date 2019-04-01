(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/pages/dashboards/Analytics/BarChart.js":
/*!**********************************************************!*\
  !*** ./assets/js/pages/dashboards/Analytics/BarChart.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_4__);






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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "flex-fill w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-actions float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledDropdown"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownToggle"], {
    tag: "a"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["MoreHorizontal"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu"], {
    right: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], null, "Another Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Mobile / Desktop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    className: "d-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "align-self-center w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    data: data,
    options: options
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(BarChart));

/***/ }),

/***/ "./assets/js/pages/dashboards/Analytics/Languages.js":
/*!***********************************************************!*\
  !*** ./assets/js/pages/dashboards/Analytics/Languages.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);




var Languages = function Languages() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-actions float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
    tag: "a"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["MoreHorizontal"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
    right: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Another Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Languages")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    striped: true,
    className: "my-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Language"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-right"
  }, "Users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "d-none d-xl-table-cell w-75"
  }, "% Users"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "en-us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "735"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    color: "info",
    value: 43
  }, "43%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "en-gb"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "223"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    color: "info",
    value: 27
  }, "27%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "fr-fr"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "181"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    color: "info",
    value: 22
  }, "22%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "es-es"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "132"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    color: "info",
    value: 16
  }, "16%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "de-de"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "118"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    color: "info",
    value: 15
  }, "15%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "ru-ru"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "98"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    color: "info",
    value: 13
  }, "13%"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Languages);

/***/ }),

/***/ "./assets/js/pages/dashboards/Analytics/PieChart.js":
/*!**********************************************************!*\
  !*** ./assets/js/pages/dashboards/Analytics/PieChart.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");








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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "flex-fill w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-actions float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledDropdown"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownToggle"], {
    tag: "a"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["MoreHorizontal"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu"], {
    right: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], null, "Another Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Source / Medium")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    className: "d-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "align-self-center w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart chart-xs"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
    data: data,
    options: options
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    className: "mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Source"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-right"
  }, "Revenue"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-right"
  }, "Value"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSquare"],
    className: "text-primary"
  }), " ", "Direct"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "$ 2602"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right text-success"
  }, "+43%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSquare"],
    className: "text-warning"
  }), " ", "Affiliate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "$ 1253"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right text-success"
  }, "+13%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSquare"],
    className: "text-danger"
  }), " ", "E-mail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "$ 541"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right text-success"
  }, "+24%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSquare"],
    className: "text-dark"
  }), " ", "Other"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "$ 1465"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right text-success"
  }, "+11%")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(PieChart));

/***/ }),

/***/ "./assets/js/pages/dashboards/Analytics/RadarChart.js":
/*!************************************************************!*\
  !*** ./assets/js/pages/dashboards/Analytics/RadarChart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_4__);






var RadarChart = function RadarChart(_ref) {
  var theme = _ref.theme;
  var data = {
    labels: ["Technology", "Sports", "Media", "Gaming", "Arts"],
    datasets: [{
      label: "Interests",
      backgroundColor: "rgba(0, 123, 255, 0.2)",
      borderColor: theme.info,
      pointBackgroundColor: theme.info,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: theme.info,
      data: [70, 53, 82, 60, 33]
    }]
  };
  var options = {
    maintainAspectRatio: false
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "flex-fill w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-actions float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledDropdown"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownToggle"], {
    tag: "a"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["MoreHorizontal"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu"], {
    right: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], null, "Another Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Interests")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    className: "d-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "align-self-center w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Radar"], {
    data: data,
    options: options
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(RadarChart));

/***/ }),

/***/ "./assets/js/pages/dashboards/Analytics/Statistics.js":
/*!************************************************************!*\
  !*** ./assets/js/pages/dashboards/Analytics/Statistics.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var Statistics = function Statistics() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-primary float-right"
  }, "Today"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "card-title mb-0"
  }, "Visitors")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    className: "my-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "d-flex align-items-center mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "d-flex align-items-center mb-0 font-weight-light"
  }, "17.212")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "4",
    className: "text-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted"
  }, "57%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    color: "primary",
    value: 57,
    className: "progress-sm shadow-sm mb-1"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-warning float-right"
  }, "Annual"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "card-title mb-0"
  }, "Bounce")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    className: "my-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "d-flex align-items-center mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "d-flex align-items-center mb-0 font-weight-light"
  }, "2.364")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "4",
    className: "text-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted"
  }, "82%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    color: "warning",
    value: 82,
    className: "progress-sm shadow-sm mb-1"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-info float-right"
  }, "Monthly"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "card-title mb-0"
  }, "Real-Time")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    className: "my-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "d-flex align-items-center mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "d-flex align-items-center mb-0 font-weight-light"
  }, "1.856")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "4",
    className: "text-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted"
  }, "64%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    color: "info",
    value: 64,
    className: "progress-sm shadow-sm mb-1"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-success float-right"
  }, "Yearly"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "card-title mb-0"
  }, "Activity")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    className: "my-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "d-flex align-items-center mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "d-flex align-items-center mb-0 font-weight-light"
  }, "57.300")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "4",
    className: "text-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted"
  }, "32%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    color: "success",
    value: 32,
    className: "progress-sm shadow-sm mb-1"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Statistics);

/***/ }),

/***/ "./assets/js/pages/dashboards/Analytics/Traffic.js":
/*!*********************************************************!*\
  !*** ./assets/js/pages/dashboards/Analytics/Traffic.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_2__);




var Traffic = function Traffic() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "flex-fill w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-actions float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
    tag: "a"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["MoreHorizontal"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
    right: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Another Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Traffic")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    striped: true,
    className: "my-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Source"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-right"
  }, "Users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "d-none d-xl-table-cell text-right"
  }, "Sessions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "d-none d-xl-table-cell text-right"
  }, "Bounce Rate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "d-none d-xl-table-cell text-right"
  }, "Avg. Session Duration"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Google"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "1023"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "1265"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "27.23%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "00:06:25")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Bing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "504"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "623"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-danger"
  }, "66.76%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "00:04:42")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Twitter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "462"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "571"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "31.53%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "00:08:05")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Pinterest"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "623"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "770"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-danger"
  }, "52.81%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "00:03:10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Facebook"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "812"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "1003"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "24.83%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "00:05:56")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "DuckDuckGo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "693"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "856"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "37.36%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "00:09:12")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "GitHub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "713"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "881"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "38.09%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "00:06:19")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Instagram"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "412"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "508"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "17.09%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "00:04:23")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Direct"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-right"
  }, "872"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "1077"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right text-success"
  }, "32.70%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "d-none d-xl-table-cell text-right"
  }, "00:09:18")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Traffic);

/***/ }),

/***/ "./assets/js/pages/dashboards/Analytics/WorldMap.js":
/*!**********************************************************!*\
  !*** ./assets/js/pages/dashboards/Analytics/WorldMap.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var $ = jQuery;
window.jQuery = jQuery;

__webpack_require__(/*! jvectormap-next */ "./node_modules/jvectormap-next/jquery-jvectormap.min.js");

__webpack_require__(/*! ../../../vendor/jquery-jvectormap-world-mill */ "./assets/js/vendor/jquery-jvectormap-world-mill.js");

var World =
/*#__PURE__*/
function (_React$Component) {
  _inherits(World, _React$Component);

  function World() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, World);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(World)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: "flex-fill w-100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-actions float-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledDropdown"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
        tag: "a"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["MoreHorizontal"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
        right: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Another Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], null, "Something else here")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
        tag: "h5",
        className: "mb-0"
      }, "Real-Time")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        className: "p-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "world_map",
        style: {
          height: 304
        }
      }))));
    });

    return _this;
  }

  _createClass(World, [{
    key: "drawMap",
    value: function drawMap(theme) {
      this.map = $("#world_map").vectorMap({
        map: "world_mill",
        normalizeFunction: "polynomial",
        hoverOpacity: 0.7,
        hoverColor: false,
        regionStyle: {
          initial: {
            fill: "#e3eaef"
          }
        },
        markerStyle: {
          initial: {
            r: 9,
            fill: theme.primary,
            "fill-opacity": 0.9,
            stroke: "#fff",
            "stroke-width": 7,
            "stroke-opacity": 0.4
          },
          hover: {
            stroke: "#fff",
            "fill-opacity": 1,
            "stroke-width": 1.5
          }
        },
        backgroundColor: "transparent",
        markers: [{
          latLng: [31.230391, 121.473701],
          name: "Shanghai"
        }, {
          latLng: [39.904202, 116.407394],
          name: "Beijing"
        }, {
          latLng: [28.70406, 77.102493],
          name: "Delhi"
        }, {
          latLng: [6.524379, 3.379206],
          name: "Lagos"
        }, {
          latLng: [39.343357, 117.361649],
          name: "Tianjin"
        }, {
          latLng: [24.860735, 67.001137],
          name: "Karachi"
        }, {
          latLng: [41.00824, 28.978359],
          name: "Istanbul"
        }, {
          latLng: [35.689487, 139.691711],
          name: "Tokyo"
        }, {
          latLng: [23.12911, 113.264381],
          name: "Guangzhou"
        }, {
          latLng: [19.075983, 72.877655],
          name: "Mumbai"
        }, {
          latLng: [40.7127837, -74.0059413],
          name: "New York"
        }, {
          latLng: [34.052235, -118.243683],
          name: "Los Angeles"
        }, {
          latLng: [41.878113, -87.629799],
          name: "Chicago"
        }, {
          latLng: [29.760427, -95.369804],
          name: "Houston"
        }, {
          latLng: [33.448376, -112.074036],
          name: "Phoenix"
        }, {
          latLng: [51.507351, -0.127758],
          name: "London"
        }, {
          latLng: [48.856613, 2.352222],
          name: "Paris"
        }, {
          latLng: [55.755825, 37.617298],
          name: "Moscow"
        }, {
          latLng: [40.416775, -3.70379],
          name: "Madrid"
        }]
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.drawMap(this.props.theme);
    }
  }]);

  return World;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(World));

/***/ }),

/***/ "./assets/js/pages/dashboards/Analytics/index.js":
/*!*******************************************************!*\
  !*** ./assets/js/pages/dashboards/Analytics/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _BarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarChart */ "./assets/js/pages/dashboards/Analytics/BarChart.js");
/* harmony import */ var _RadarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RadarChart */ "./assets/js/pages/dashboards/Analytics/RadarChart.js");
/* harmony import */ var _PieChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PieChart */ "./assets/js/pages/dashboards/Analytics/PieChart.js");
/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Statistics */ "./assets/js/pages/dashboards/Analytics/Statistics.js");
/* harmony import */ var _WorldMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WorldMap */ "./assets/js/pages/dashboards/Analytics/WorldMap.js");
/* harmony import */ var _Languages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Languages */ "./assets/js/pages/dashboards/Analytics/Languages.js");
/* harmony import */ var _Traffic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Traffic */ "./assets/js/pages/dashboards/Analytics/Traffic.js");










var Analytics = function Analytics() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    className: "p-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    xl: "5",
    className: "d-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Statistics__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    xl: "7",
    className: "d-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WorldMap__WEBPACK_IMPORTED_MODULE_6__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "4",
    className: "d-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Languages__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "4",
    className: "d-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BarChart__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "4",
    className: "d-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RadarChart__WEBPACK_IMPORTED_MODULE_3__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "5",
    xl: "4",
    className: "d-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PieChart__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "7",
    xl: "8",
    className: "d-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Traffic__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Analytics);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvZGFzaGJvYXJkcy9BbmFseXRpY3MvQmFyQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL2Rhc2hib2FyZHMvQW5hbHl0aWNzL0xhbmd1YWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvZGFzaGJvYXJkcy9BbmFseXRpY3MvUGllQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL2Rhc2hib2FyZHMvQW5hbHl0aWNzL1JhZGFyQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL2Rhc2hib2FyZHMvQW5hbHl0aWNzL1N0YXRpc3RpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL2Rhc2hib2FyZHMvQW5hbHl0aWNzL1RyYWZmaWMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL2Rhc2hib2FyZHMvQW5hbHl0aWNzL1dvcmxkTWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9kYXNoYm9hcmRzL0FuYWx5dGljcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCYXJDaGFydCIsInRoZW1lIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5IiwiYm9yZGVyQ29sb3IiLCJob3ZlckJhY2tncm91bmRDb2xvciIsImhvdmVyQm9yZGVyQ29sb3IiLCJvcHRpb25zIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImxlZ2VuZCIsImRpc3BsYXkiLCJzY2FsZXMiLCJ5QXhlcyIsImdyaWRMaW5lcyIsInN0YWNrZWQiLCJ0aWNrcyIsInN0ZXBTaXplIiwieEF4ZXMiLCJiYXJQZXJjZW50YWdlIiwiY2F0ZWdvcnlQZXJjZW50YWdlIiwiY29sb3IiLCJjb25uZWN0Iiwic3RvcmUiLCJjdXJyZW50VGhlbWUiLCJMYW5ndWFnZXMiLCJQaWVDaGFydCIsIndhcm5pbmciLCJkYW5nZXIiLCJmYVNxdWFyZSIsIlJhZGFyQ2hhcnQiLCJpbmZvIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRIb3ZlckJhY2tncm91bmRDb2xvciIsInBvaW50SG92ZXJCb3JkZXJDb2xvciIsIlN0YXRpc3RpY3MiLCJUcmFmZmljIiwialF1ZXJ5IiwicmVxdWlyZSIsIiQiLCJ3aW5kb3ciLCJXb3JsZCIsImhlaWdodCIsIm1hcCIsInZlY3Rvck1hcCIsIm5vcm1hbGl6ZUZ1bmN0aW9uIiwiaG92ZXJPcGFjaXR5IiwiaG92ZXJDb2xvciIsInJlZ2lvblN0eWxlIiwiaW5pdGlhbCIsImZpbGwiLCJtYXJrZXJTdHlsZSIsInIiLCJzdHJva2UiLCJob3ZlciIsIm1hcmtlcnMiLCJsYXRMbmciLCJuYW1lIiwiZHJhd01hcCIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJBbmFseXRpY3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFXQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzlCLE1BQU1DLElBQUksR0FBRztBQUNYQyxVQUFNLEVBQUUsQ0FDTixLQURNLEVBRU4sS0FGTSxFQUdOLEtBSE0sRUFJTixLQUpNLEVBS04sS0FMTSxFQU1OLEtBTk0sRUFPTixLQVBNLEVBUU4sS0FSTSxFQVNOLEtBVE0sRUFVTixLQVZNLEVBV04sS0FYTSxFQVlOLEtBWk0sQ0FERztBQWVYQyxZQUFRLEVBQUUsQ0FDUjtBQUNFQyxXQUFLLEVBQUUsV0FEVDtBQUVFQyxxQkFBZSxFQUFFTCxLQUFLLENBQUNNLE9BRnpCO0FBR0VDLGlCQUFXLEVBQUVQLEtBQUssQ0FBQ00sT0FIckI7QUFJRUUsMEJBQW9CLEVBQUVSLEtBQUssQ0FBQ00sT0FKOUI7QUFLRUcsc0JB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LE1BQUUsRUFBQyxHQUFmO0FBQW1CLGFBQVMsRUFBQztBQUE3QixLQUNFLDJEQUFDLGlEQUFELE9BREYsQ0FERixFQUlFLDJEQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBWSxNQUFFLEVBQUMsR0FBZjtBQUFtQixhQUFTLEVBQUM7QUFBN0IsS0FDRSwyREFBQyxnREFBRCxPQURGLENBSkYsQ0FwQkYsQ0FEZ0I7QUFBQSxDQUFsQjs7QUFnQ2VBLHdFQUFmLEUiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRCb2R5LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZFRpdGxlLFxyXG4gIERyb3Bkb3duSXRlbSxcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25Ub2dnbGUsXHJcbiAgVW5jb250cm9sbGVkRHJvcGRvd25cclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgTW9yZUhvcml6b250YWwgfSBmcm9tIFwicmVhY3QtZmVhdGhlclwiO1xyXG5cclxuY29uc3QgQmFyQ2hhcnQgPSAoeyB0aGVtZSB9KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGxhYmVsczogW1xyXG4gICAgICBcIkphblwiLFxyXG4gICAgICBcIkZlYlwiLFxyXG4gICAgICBcIk1hclwiLFxyXG4gICAgICBcIkFwclwiLFxyXG4gICAgICBcIk1heVwiLFxyXG4gICAgICBcIkp1blwiLFxyXG4gICAgICBcIkp1bFwiLFxyXG4gICAgICBcIkF1Z1wiLFxyXG4gICAgICBcIlNlcFwiLFxyXG4gICAgICBcIk9jdFwiLFxyXG4gICAgICBcIk5vdlwiLFxyXG4gICAgICBcIkRlY1wiXHJcbiAgICBdLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIkxhc3QgeWVhclwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICBob3ZlckJvcmRlckNvbG9yOiB0aGVtZS5wcmltYXJ5LFxyXG4gICAgICAgIGRhdGE6IFs1NCwgNjcsIDQxLCA1NSwgNjIsIDQ1LCA1NSwgNzMsIDYwLCA3NiwgNDgsIDc5XVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiVGhpcyB5ZWFyXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFOEVBRURcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogXCIjRThFQUVEXCIsXHJcbiAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiI0U4RUFFRFwiLFxyXG4gICAgICAgIGhvdmVyQm9yZGVyQ29sb3I6IFwiI0U4RUFFRFwiLFxyXG4gICAgICAgIGRhdGE6IFs2OSwgNjYsIDI0LCA0OCwgNTIsIDUxLCA0NCwgNTMsIDYyLCA3OSwgNTEsIDY4XVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHlBeGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3RhY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICBzdGVwU2l6ZTogMjBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIHhBeGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYmFyUGVyY2VudGFnZTogMC43NSxcclxuICAgICAgICAgIGNhdGVnb3J5UGVyY2VudGFnZTogMC41LFxyXG4gICAgICAgICAgc3RhY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgY29sb3I6IFwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJmbGV4LWZpbGwgdy0xMDBcIj5cclxuICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMgZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgIDxVbmNvbnRyb2xsZWREcm9wZG93bj5cclxuICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIHRhZz1cImFcIj5cclxuICAgICAgICAgICAgICA8TW9yZUhvcml6b250YWwgLz5cclxuICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudSByaWdodD5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPkFjdGlvbjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+QW5vdGhlciBBY3Rpb248L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlNvbWV0aGluZyBlbHNlIGhlcmU8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICA8L1VuY29udHJvbGxlZERyb3Bkb3duPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIiBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICBNb2JpbGUgLyBEZXNrdG9wXHJcbiAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cclxuICAgICAgICAgICAgPEJhciBkYXRhPXtkYXRhfSBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RvcmUgPT4gKHtcclxuICB0aGVtZTogc3RvcmUudGhlbWUuY3VycmVudFRoZW1lXHJcbn0pKShCYXJDaGFydCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRUaXRsZSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIFRhYmxlLFxyXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG4gIFByb2dyZXNzXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7IE1vcmVIb3Jpem9udGFsIH0gZnJvbSBcInJlYWN0LWZlYXRoZXJcIjtcclxuXHJcbmNvbnN0IExhbmd1YWdlcyA9ICgpID0+IChcclxuICA8Q2FyZCBjbGFzc05hbWU9XCJmbGV4LWZpbGwgdy0xMDBcIj5cclxuICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgIDxVbmNvbnRyb2xsZWREcm9wZG93bj5cclxuICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSB0YWc9XCJhXCI+XHJcbiAgICAgICAgICAgIDxNb3JlSG9yaXpvbnRhbCAvPlxyXG4gICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cclxuICAgICAgICAgIDxEcm9wZG93bk1lbnUgcmlnaHQ+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+QWN0aW9uPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+QW5vdGhlciBBY3Rpb248L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5Tb21ldGhpbmcgZWxzZSBoZXJlPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgICA8L1VuY29udHJvbGxlZERyb3Bkb3duPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICBMYW5ndWFnZXNcclxuICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICA8VGFibGUgc3RyaXBlZCBjbGFzc05hbWU9XCJteS0wXCI+XHJcbiAgICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+TGFuZ3VhZ2U8L3RoPlxyXG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5Vc2VyczwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB3LTc1XCI+JSBVc2VyczwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD5lbi11czwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjczNTwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3MgY29sb3I9XCJpbmZvXCIgdmFsdWU9ezQzfT5cclxuICAgICAgICAgICAgICA0MyVcclxuICAgICAgICAgICAgPC9Qcm9ncmVzcz5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+ZW4tZ2I8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4yMjM8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj5cclxuICAgICAgICAgICAgPFByb2dyZXNzIGNvbG9yPVwiaW5mb1wiIHZhbHVlPXsyN30+XHJcbiAgICAgICAgICAgICAgMjclXHJcbiAgICAgICAgICAgIDwvUHJvZ3Jlc3M+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPmZyLWZyPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+MTgxPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsXCI+XHJcbiAgICAgICAgICAgIDxQcm9ncmVzcyBjb2xvcj1cImluZm9cIiB2YWx1ZT17MjJ9PlxyXG4gICAgICAgICAgICAgIDIyJVxyXG4gICAgICAgICAgICA8L1Byb2dyZXNzPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD5lcy1lczwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjEzMjwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3MgY29sb3I9XCJpbmZvXCIgdmFsdWU9ezE2fT5cclxuICAgICAgICAgICAgICAxNiVcclxuICAgICAgICAgICAgPC9Qcm9ncmVzcz5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+ZGUtZGU8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4xMTg8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj5cclxuICAgICAgICAgICAgPFByb2dyZXNzIGNvbG9yPVwiaW5mb1wiIHZhbHVlPXsxNX0+XHJcbiAgICAgICAgICAgICAgMTUlXHJcbiAgICAgICAgICAgIDwvUHJvZ3Jlc3M+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPnJ1LXJ1PC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+OTg8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGxcIj5cclxuICAgICAgICAgICAgPFByb2dyZXNzIGNvbG9yPVwiaW5mb1wiIHZhbHVlPXsxM30+XHJcbiAgICAgICAgICAgICAgMTMlXHJcbiAgICAgICAgICAgIDwvUHJvZ3Jlc3M+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L1RhYmxlPlxyXG4gIDwvQ2FyZD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQaWUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2FyZEJvZHksXHJcbiAgQ2FyZCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRUaXRsZSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIFRhYmxlLFxyXG4gIFVuY29udHJvbGxlZERyb3Bkb3duXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7IE1vcmVIb3Jpem9udGFsIH0gZnJvbSBcInJlYWN0LWZlYXRoZXJcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVNxdWFyZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcbmNvbnN0IFBpZUNoYXJ0ID0gKHsgdGhlbWUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBsYWJlbHM6IFtcIlNvY2lhbFwiLCBcIlNlYXJjaCBFbmdpbmVzXCIsIFwiRGlyZWN0XCIsIFwiT3RoZXJcIl0sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgZGF0YTogWzI2MCwgMTI1LCA1NCwgMTQ2XSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgIHRoZW1lLnByaW1hcnksXHJcbiAgICAgICAgICB0aGVtZS53YXJuaW5nLFxyXG4gICAgICAgICAgdGhlbWUuZGFuZ2VyLFxyXG4gICAgICAgICAgXCIjRThFQUVEXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJmbGV4LWZpbGwgdy0xMDBcIj5cclxuICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMgZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgIDxVbmNvbnRyb2xsZWREcm9wZG93bj5cclxuICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIHRhZz1cImFcIj5cclxuICAgICAgICAgICAgICA8TW9yZUhvcml6b250YWwgLz5cclxuICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudSByaWdodD5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPkFjdGlvbjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+QW5vdGhlciBBY3Rpb248L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlNvbWV0aGluZyBlbHNlIGhlcmU8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICA8L1VuY29udHJvbGxlZERyb3Bkb3duPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIiBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICBTb3VyY2UgLyBNZWRpdW1cclxuICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQgY2hhcnQteHNcIj5cclxuICAgICAgICAgICAgICA8UGllIGRhdGE9e2RhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5Tb3VyY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5SZXZlbnVlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+VmFsdWU8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTcXVhcmV9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICBEaXJlY3RcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiQgMjYwMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodCB0ZXh0LXN1Y2Nlc3NcIj4rNDMlPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNxdWFyZX0gY2xhc3NOYW1lPVwidGV4dC13YXJuaW5nXCIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIEFmZmlsaWF0ZVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+JCAxMjUzPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IHRleHQtc3VjY2Vzc1wiPisxMyU8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3F1YXJlfSBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICBFLW1haWxcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiQgNTQxPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IHRleHQtc3VjY2Vzc1wiPisyNCU8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3F1YXJlfSBjbGFzc05hbWU9XCJ0ZXh0LWRhcmtcIiAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgT3RoZXJcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiQgMTQ2NTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodCB0ZXh0LXN1Y2Nlc3NcIj4rMTElPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkQm9keT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdG9yZSA9PiAoe1xyXG4gIHRoZW1lOiBzdG9yZS50aGVtZS5jdXJyZW50VGhlbWVcclxufSkpKFBpZUNoYXJ0KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSYWRhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRCb2R5LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZFRpdGxlLFxyXG4gIERyb3Bkb3duSXRlbSxcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25Ub2dnbGUsXHJcbiAgVW5jb250cm9sbGVkRHJvcGRvd25cclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgTW9yZUhvcml6b250YWwgfSBmcm9tIFwicmVhY3QtZmVhdGhlclwiO1xyXG5cclxuY29uc3QgUmFkYXJDaGFydCA9ICh7IHRoZW1lIH0pID0+IHtcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBbXCJUZWNobm9sb2d5XCIsIFwiU3BvcnRzXCIsIFwiTWVkaWFcIiwgXCJHYW1pbmdcIiwgXCJBcnRzXCJdLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIkludGVyZXN0c1wiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDEyMywgMjU1LCAwLjIpXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmluZm8sXHJcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmluZm8sXHJcbiAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiB0aGVtZS5pbmZvLFxyXG4gICAgICAgIGRhdGE6IFs3MCwgNTMsIDgyLCA2MCwgMzNdXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxuICBjb25zdCBvcHRpb25zID0geyBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwiZmxleC1maWxsIHctMTAwXCI+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24+XHJcbiAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSB0YWc9XCJhXCI+XHJcbiAgICAgICAgICAgICAgPE1vcmVIb3Jpem9udGFsIC8+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgcmlnaHQ+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5BY3Rpb248L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPkFub3RoZXIgQWN0aW9uPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5Tb21ldGhpbmcgZWxzZSBoZXJlPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgPC9VbmNvbnRyb2xsZWREcm9wZG93bj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCIgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgSW50ZXJlc3RzXHJcbiAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cclxuICAgICAgICAgICAgPFJhZGFyIGRhdGE9e2RhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkQm9keT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdG9yZSA9PiAoe1xyXG4gIHRoZW1lOiBzdG9yZS50aGVtZS5jdXJyZW50VGhlbWVcclxufSkpKFJhZGFyQ2hhcnQpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbCwgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIFByb2dyZXNzLCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuY29uc3QgU3RhdGlzdGljcyA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICA8Um93PlxyXG4gICAgICA8Q29sIHNtPVwiNlwiPlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImZsZXgtZmlsbFwiPlxyXG4gICAgICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnkgZmxvYXQtcmlnaHRcIj5Ub2RheTwvc3Bhbj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgbWItMFwiPlZpc2l0b3JzPC9oNT5cclxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJteS0yXCI+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi00XCI+XHJcbiAgICAgICAgICAgICAgPENvbCB4cz1cIjhcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTAgZm9udC13ZWlnaHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgMTcuMjEyXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgeHM9XCI0XCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPjU3JTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NcclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXs1N31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1zbSBzaGFkb3ctc20gbWItMVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgc209XCI2XCI+XHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZmxleC1maWxsXCI+XHJcbiAgICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utd2FybmluZyBmbG9hdC1yaWdodFwiPkFubnVhbDwvc3Bhbj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgbWItMFwiPkJvdW5jZTwvaDU+XHJcbiAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwibXktMlwiPlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItNFwiPlxyXG4gICAgICAgICAgICAgIDxDb2wgeHM9XCI4XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0wIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDIuMzY0XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgeHM9XCI0XCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPjgyJTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NcclxuICAgICAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXs4Mn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1zbSBzaGFkb3ctc20gbWItMVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgc209XCI2XCI+XHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZmxleC1maWxsXCI+XHJcbiAgICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtaW5mbyBmbG9hdC1yaWdodFwiPk1vbnRobHk8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIG1iLTBcIj5SZWFsLVRpbWU8L2g1PlxyXG4gICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cIm15LTJcIj5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTRcIj5cclxuICAgICAgICAgICAgICA8Q29sIHhzPVwiOFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMCBmb250LXdlaWdodC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAxLjg1NlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIHhzPVwiNFwiIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj42NCU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgPFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17NjR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3Mtc20gc2hhZG93LXNtIG1iLTFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIHNtPVwiNlwiPlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImZsZXgtZmlsbFwiPlxyXG4gICAgICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIj5ZZWFybHk8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIG1iLTBcIj5BY3Rpdml0eTwvaDU+XHJcbiAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwibXktMlwiPlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItNFwiPlxyXG4gICAgICAgICAgICAgIDxDb2wgeHM9XCI4XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0wIGZvbnQtd2VpZ2h0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDU3LjMwMFxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIHhzPVwiNFwiIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj4zMiU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgPFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17MzJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3Mtc20gc2hhZG93LXNtIG1iLTFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkVGl0bGUsXHJcbiAgRHJvcGRvd25JdGVtLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBUYWJsZVxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgeyBNb3JlSG9yaXpvbnRhbCB9IGZyb20gXCJyZWFjdC1mZWF0aGVyXCI7XHJcblxyXG5jb25zdCBUcmFmZmljID0gKCkgPT4gKFxyXG4gIDxDYXJkIGNsYXNzTmFtZT1cImZsZXgtZmlsbCB3LTEwMFwiPlxyXG4gICAgPENhcmRIZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgPFVuY29udHJvbGxlZERyb3Bkb3duPlxyXG4gICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIHRhZz1cImFcIj5cclxuICAgICAgICAgICAgPE1vcmVIb3Jpem9udGFsIC8+XHJcbiAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgPERyb3Bkb3duTWVudSByaWdodD5cclxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5BY3Rpb248L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5Bbm90aGVyIEFjdGlvbjwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtPlNvbWV0aGluZyBlbHNlIGhlcmU8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgIDwvVW5jb250cm9sbGVkRHJvcGRvd24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCIgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgIFRyYWZmaWNcclxuICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICA8VGFibGUgc3RyaXBlZCBjbGFzc05hbWU9XCJteS0wXCI+XHJcbiAgICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+U291cmNlPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+VXNlcnM8L3RoPlxyXG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodFwiPlNlc3Npb25zPC90aD5cclxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHRcIj5Cb3VuY2UgUmF0ZTwvdGg+XHJcbiAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIEF2Zy4gU2Vzc2lvbiBEdXJhdGlvblxyXG4gICAgICAgICAgPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPkdvb2dsZTwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjEwMjM8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodFwiPjEyNjU8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodCB0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgMjcuMjMlXHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodFwiPjAwOjA2OjI1PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD5CaW5nPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+NTA0PC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHRcIj42MjM8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodCB0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICA2Ni43NiVcclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+MDA6MDQ6NDI8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPlR3aXR0ZXI8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj40NjI8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodFwiPjU3MTwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0IHRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAzMS41MyVcclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+MDA6MDg6MDU8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPlBpbnRlcmVzdDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjYyMzwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+NzcwPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHQgdGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgNTIuODElXHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodFwiPjAwOjAzOjEwPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD5GYWNlYm9vazwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjgxMjwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+MTAwMzwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0IHRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAyNC44MyVcclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+MDA6MDU6NTY8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPkR1Y2tEdWNrR288L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj42OTM8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodFwiPjg1NjwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0IHRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAzNy4zNiVcclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+MDA6MDk6MTI8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRkPkdpdEh1YjwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjcxMzwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtdGFibGUtY2VsbCB0ZXh0LXJpZ2h0XCI+ODgxPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHQgdGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIDM4LjA5JVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHRcIj4wMDowNjoxOTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQ+SW5zdGFncmFtPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+NDEyPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC10YWJsZS1jZWxsIHRleHQtcmlnaHRcIj41MDg8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodCB0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgMTcuMDklXHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodFwiPjAwOjA0OjIzPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD5EaXJlY3Q8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj44NzI8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodFwiPjEwNzc8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodCB0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgMzIuNzAlXHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLXRhYmxlLWNlbGwgdGV4dC1yaWdodFwiPjAwOjA5OjE4PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC9UYWJsZT5cclxuICA8L0NhcmQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFmZmljO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQm9keSxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRUaXRsZSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIFVuY29udHJvbGxlZERyb3Bkb3duXHJcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7IE1vcmVIb3Jpem9udGFsIH0gZnJvbSBcInJlYWN0LWZlYXRoZXJcIjtcclxuXHJcbmNvbnN0IGpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcbmNvbnN0ICQgPSBqUXVlcnk7XHJcbndpbmRvdy5qUXVlcnkgPSBqUXVlcnk7XHJcblxyXG5yZXF1aXJlKFwianZlY3Rvcm1hcC1uZXh0XCIpO1xyXG5yZXF1aXJlKFwiLi4vLi4vLi4vdmVuZG9yL2pxdWVyeS1qdmVjdG9ybWFwLXdvcmxkLW1pbGxcIik7XHJcblxyXG5jbGFzcyBXb3JsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgZHJhd01hcCh0aGVtZSkge1xyXG4gICAgdGhpcy5tYXAgPSAkKFwiI3dvcmxkX21hcFwiKS52ZWN0b3JNYXAoe1xyXG4gICAgICBtYXA6IFwid29ybGRfbWlsbFwiLFxyXG4gICAgICBub3JtYWxpemVGdW5jdGlvbjogXCJwb2x5bm9taWFsXCIsXHJcbiAgICAgIGhvdmVyT3BhY2l0eTogMC43LFxyXG4gICAgICBob3ZlckNvbG9yOiBmYWxzZSxcclxuICAgICAgcmVnaW9uU3R5bGU6IHtcclxuICAgICAgICBpbml0aWFsOiB7XHJcbiAgICAgICAgICBmaWxsOiBcIiNlM2VhZWZcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbWFya2VyU3R5bGU6IHtcclxuICAgICAgICBpbml0aWFsOiB7XHJcbiAgICAgICAgICByOiA5LFxyXG4gICAgICAgICAgZmlsbDogdGhlbWUucHJpbWFyeSxcclxuICAgICAgICAgIFwiZmlsbC1vcGFjaXR5XCI6IDAuOSxcclxuICAgICAgICAgIHN0cm9rZTogXCIjZmZmXCIsXHJcbiAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiA3LFxyXG4gICAgICAgICAgXCJzdHJva2Utb3BhY2l0eVwiOiAwLjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICBzdHJva2U6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgXCJmaWxsLW9wYWNpdHlcIjogMSxcclxuICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IDEuNVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIG1hcmtlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYXRMbmc6IFszMS4yMzAzOTEsIDEyMS40NzM3MDFdLFxyXG4gICAgICAgICAgbmFtZTogXCJTaGFuZ2hhaVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYXRMbmc6IFszOS45MDQyMDIsIDExNi40MDczOTRdLFxyXG4gICAgICAgICAgbmFtZTogXCJCZWlqaW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhdExuZzogWzI4LjcwNDA2LCA3Ny4xMDI0OTNdLFxyXG4gICAgICAgICAgbmFtZTogXCJEZWxoaVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYXRMbmc6IFs2LjUyNDM3OSwgMy4zNzkyMDZdLFxyXG4gICAgICAgICAgbmFtZTogXCJMYWdvc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYXRMbmc6IFszOS4zNDMzNTcsIDExNy4zNjE2NDldLFxyXG4gICAgICAgICAgbmFtZTogXCJUaWFuamluXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhdExuZzogWzI0Ljg2MDczNSwgNjcuMDAxMTM3XSxcclxuICAgICAgICAgIG5hbWU6IFwiS2FyYWNoaVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYXRMbmc6IFs0MS4wMDgyNCwgMjguOTc4MzU5XSxcclxuICAgICAgICAgIG5hbWU6IFwiSXN0YW5idWxcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGF0TG5nOiBbMzUuNjg5NDg3LCAxMzkuNjkxNzExXSxcclxuICAgICAgICAgIG5hbWU6IFwiVG9reW9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGF0TG5nOiBbMjMuMTI5MTEsIDExMy4yNjQzODFdLFxyXG4gICAgICAgICAgbmFtZTogXCJHdWFuZ3pob3VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGF0TG5nOiBbMTkuMDc1OTgzLCA3Mi44Nzc2NTVdLFxyXG4gICAgICAgICAgbmFtZTogXCJNdW1iYWlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGF0TG5nOiBbNDAuNzEyNzgzNywgLTc0LjAwNTk0MTNdLFxyXG4gICAgICAgICAgbmFtZTogXCJOZXcgWW9ya1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYXRMbmc6IFszNC4wNTIyMzUsIC0xMTguMjQzNjgzXSxcclxuICAgICAgICAgIG5hbWU6IFwiTG9zIEFuZ2VsZXNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGF0TG5nOiBbNDEuODc4MTEzLCAtODcuNjI5Nzk5XSxcclxuICAgICAgICAgIG5hbWU6IFwiQ2hpY2Fnb1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYXRMbmc6IFsyOS43NjA0MjcsIC05NS4zNjk4MDRdLFxyXG4gICAgICAgICAgbmFtZTogXCJIb3VzdG9uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhdExuZzogWzMzLjQ0ODM3NiwgLTExMi4wNzQwMzZdLFxyXG4gICAgICAgICAgbmFtZTogXCJQaG9lbml4XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhdExuZzogWzUxLjUwNzM1MSwgLTAuMTI3NzU4XSxcclxuICAgICAgICAgIG5hbWU6IFwiTG9uZG9uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhdExuZzogWzQ4Ljg1NjYxMywgMi4zNTIyMjJdLFxyXG4gICAgICAgICAgbmFtZTogXCJQYXJpc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYXRMbmc6IFs1NS43NTU4MjUsIDM3LjYxNzI5OF0sXHJcbiAgICAgICAgICBuYW1lOiBcIk1vc2Nvd1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYXRMbmc6IFs0MC40MTY3NzUsIC0zLjcwMzc5XSxcclxuICAgICAgICAgIG5hbWU6IFwiTWFkcmlkXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZHJhd01hcCh0aGlzLnByb3BzLnRoZW1lKTtcclxuICB9XHJcbiAgcmVuZGVyID0gKCkgPT4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwiZmxleC1maWxsIHctMTAwXCI+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24+XHJcbiAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSB0YWc9XCJhXCI+XHJcbiAgICAgICAgICAgICAgPE1vcmVIb3Jpem9udGFsIC8+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgcmlnaHQ+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5BY3Rpb248L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPkFub3RoZXIgQWN0aW9uPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5Tb21ldGhpbmcgZWxzZSBoZXJlPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgPC9VbmNvbnRyb2xsZWREcm9wZG93bj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCIgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgUmVhbC1UaW1lXHJcbiAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cIndvcmxkX21hcFwiIHN0eWxlPXt7IGhlaWdodDogMzA0IH19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdG9yZSA9PiAoe1xyXG4gIHRoZW1lOiBzdG9yZS50aGVtZS5jdXJyZW50VGhlbWVcclxufSkpKFdvcmxkKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCBCYXJDaGFydCBmcm9tIFwiLi9CYXJDaGFydFwiO1xyXG5pbXBvcnQgUmFkYXJDaGFydCBmcm9tIFwiLi9SYWRhckNoYXJ0XCI7XHJcbmltcG9ydCBQaWVDaGFydCBmcm9tIFwiLi9QaWVDaGFydFwiO1xyXG5cclxuaW1wb3J0IFN0YXRpc3RpY3MgZnJvbSBcIi4vU3RhdGlzdGljc1wiO1xyXG5pbXBvcnQgV29ybGRNYXAgZnJvbSBcIi4vV29ybGRNYXBcIjtcclxuaW1wb3J0IExhbmd1YWdlcyBmcm9tIFwiLi9MYW5ndWFnZXNcIjtcclxuaW1wb3J0IFRyYWZmaWMgZnJvbSBcIi4vVHJhZmZpY1wiO1xyXG5cclxuY29uc3QgQW5hbHl0aWNzID0gKCkgPT4gKFxyXG4gIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICA8Um93PlxyXG4gICAgICA8Q29sIGxnPVwiNlwiIHhsPVwiNVwiIGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgIDxTdGF0aXN0aWNzIC8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIGxnPVwiNlwiIHhsPVwiN1wiIGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgIDxXb3JsZE1hcCAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvUm93PlxyXG4gICAgPFJvdz5cclxuICAgICAgPENvbCBsZz1cIjRcIiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICA8TGFuZ3VhZ2VzIC8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIGxnPVwiNFwiIGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgIDxCYXJDaGFydCAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBsZz1cIjRcIiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICA8UmFkYXJDaGFydCAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvUm93PlxyXG4gICAgPFJvdz5cclxuICAgICAgPENvbCBsZz1cIjVcIiB4bD1cIjRcIiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICA8UGllQ2hhcnQgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgbGc9XCI3XCIgeGw9XCI4XCIgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgPFRyYWZmaWMgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L1Jvdz5cclxuICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuYWx5dGljcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==