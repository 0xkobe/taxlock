(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/pages/charts/ApexCharts/Area.js":
/*!***************************************************!*\
  !*** ./assets/js/pages/charts/ApexCharts/Area.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var AreaChart = function AreaChart(_ref) {
  var theme = _ref.theme;
  var data = [{
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: "series2",
    data: [11, 32, 45, 32, 34, 52, 41]
  }];
  var options = {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      type: "datetime",
      categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"]
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    },
    colors: [theme.primary, theme.success, theme.warning, theme.danger, theme.info]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Area Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "Area charts are used to represent quantitative variations.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a, {
    options: options,
    series: data,
    type: "area",
    height: "350"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(AreaChart));

/***/ }),

/***/ "./assets/js/pages/charts/ApexCharts/Bar.js":
/*!**************************************************!*\
  !*** ./assets/js/pages/charts/ApexCharts/Bar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var BarChart = function BarChart(_ref) {
  var theme = _ref.theme;
  var data = [{
    name: "Marine Sprite",
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: "Striking Calf",
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: "Tank Picture",
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: "Bucket Slope",
    data: [9, 7, 5, 8, 6, 9, 4]
  }, {
    name: "Reborn Kid",
    data: [25, 12, 19, 32, 25, 24, 10]
  }];
  var options = {
    chart: {
      stacked: true
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        formatter: function formatter(val) {
          return val + "K";
        }
      }
    },
    yaxis: {
      title: {
        text: undefined
      }
    },
    tooltip: {
      y: {
        formatter: function formatter(val) {
          return val + "K";
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40
    },
    colors: [theme.primary, theme.success, theme.warning, theme.danger, theme.info]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Bar Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "A bar chart is the best tool for displaying comparisons between categories of data.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a, {
    options: options,
    series: data,
    type: "bar",
    height: "350"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(BarChart));

/***/ }),

/***/ "./assets/js/pages/charts/ApexCharts/Candlestick.js":
/*!**********************************************************!*\
  !*** ./assets/js/pages/charts/ApexCharts/Candlestick.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var CandlestickChart = function CandlestickChart(_ref) {
  var theme = _ref.theme;
  var data = [{
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
      y: [57.76, 58.08, 51.18, 54.71]
    }, {
      x: new Date(2017, 8, 1),
      y: [54.8, 61.42, 53.18, 57.35]
    }, {
      x: new Date(2017, 9, 1),
      y: [57.56, 63.09, 57.0, 62.99]
    }, {
      x: new Date(2017, 10, 1),
      y: [62.89, 63.42, 59.72, 61.76]
    }, {
      x: new Date(2017, 11, 1),
      y: [61.71, 64.15, 61.29, 63.04]
    }]
  }];
  var options = {
    stroke: {
      width: 1
    },
    xaxis: {
      type: "datetime"
    },
    colors: [theme.primary, theme.success, theme.warning, theme.danger, theme.info]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Candlestick Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "A candlestick chart is a style of financial chart used to describe price movements.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a, {
    options: options,
    series: data,
    type: "candlestick",
    height: "350"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(CandlestickChart));

/***/ }),

/***/ "./assets/js/pages/charts/ApexCharts/Column.js":
/*!*****************************************************!*\
  !*** ./assets/js/pages/charts/ApexCharts/Column.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var ColumnChart = function ColumnChart(_ref) {
  var theme = _ref.theme;
  var data = [{
    name: "Net Profit",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: "Revenue",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: "Free Cash Flow",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }];
  var options = {
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
    },
    yaxis: {
      title: {
        text: "$ (thousands)"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function formatter(val) {
          return "$ " + val + " thousands";
        }
      }
    },
    colors: [theme.primary, theme.success, theme.warning, theme.danger, theme.info]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Column Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "A column chart uses vertical bars to display data and is used to compare values across categories.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a, {
    options: options,
    series: data,
    type: "bar",
    height: "350"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(ColumnChart));

/***/ }),

/***/ "./assets/js/pages/charts/ApexCharts/Heatmap.js":
/*!******************************************************!*\
  !*** ./assets/js/pages/charts/ApexCharts/Heatmap.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var HeatmapChart = function HeatmapChart(_ref) {
  var theme = _ref.theme;

  var generateData = function generateData(count, yrange) {
    var i = 0;
    var series = [];

    while (i < count) {
      var x = (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({
        x: x,
        y: y
      });
      i++;
    }

    return series;
  };

  var data = [{
    name: "Metric1",
    data: generateData(20, {
      min: 0,
      max: 90
    })
  }, {
    name: "Metric2",
    data: generateData(20, {
      min: 0,
      max: 90
    })
  }, {
    name: "Metric3",
    data: generateData(20, {
      min: 0,
      max: 90
    })
  }, {
    name: "Metric4",
    data: generateData(20, {
      min: 0,
      max: 90
    })
  }, {
    name: "Metric5",
    data: generateData(20, {
      min: 0,
      max: 90
    })
  }, {
    name: "Metric6",
    data: generateData(20, {
      min: 0,
      max: 90
    })
  }, {
    name: "Metric7",
    data: generateData(20, {
      min: 0,
      max: 90
    })
  }, {
    name: "Metric8",
    data: generateData(20, {
      min: 0,
      max: 90
    })
  }, {
    name: "Metric9",
    data: generateData(20, {
      min: 0,
      max: 90
    })
  }];
  var options = {
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    xaxis: {
      type: "category"
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Heatmap Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "Heatmap is a visualization tool that employs color the way a bar chart employs height and width in representing data.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a, {
    options: options,
    series: data,
    type: "heatmap",
    height: "350"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(HeatmapChart));

/***/ }),

/***/ "./assets/js/pages/charts/ApexCharts/Line.js":
/*!***************************************************!*\
  !*** ./assets/js/pages/charts/ApexCharts/Line.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var LineChart = function LineChart(_ref) {
  var theme = _ref.theme;
  var data = [{
    name: "Session Duration",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  }, {
    name: "Page Views",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
  }, {
    name: "Total Visits",
    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
  }];
  var options = {
    chart: {
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 5]
    },
    markers: {
      size: 0,
      style: "hollow" // full, hollow, inverted

    },
    xaxis: {
      categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"]
    },
    tooltip: {
      y: [{
        title: {
          formatter: function formatter(val) {
            return val + " (mins)";
          }
        }
      }, {
        title: {
          formatter: function formatter(val) {
            return val + " per session";
          }
        }
      }, {
        title: {
          formatter: function formatter(val) {
            return val;
          }
        }
      }]
    },
    grid: {
      borderColor: "#f1f1f1"
    },
    colors: [theme.primary, theme.success, theme.warning, theme.danger, theme.info]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Line Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "Line charts are a typical pictorial representation that depicts trends and behaviors over time.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a, {
    options: options,
    series: data,
    type: "line",
    height: "350"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(LineChart));

/***/ }),

/***/ "./assets/js/pages/charts/ApexCharts/Mixed.js":
/*!****************************************************!*\
  !*** ./assets/js/pages/charts/ApexCharts/Mixed.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var MixedChart = function MixedChart(_ref) {
  var theme = _ref.theme;
  var data = [{
    name: "TEAM A",
    type: "column",
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: "TEAM B",
    type: "area",
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: "TEAM C",
    type: "line",
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }];
  var options = {
    chart: {
      stacked: false
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth"
    },
    plotOptions: {
      bar: {
        columnWidth: "50%"
      }
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: ["01/01/2003", "02/01/2003", "03/01/2003", "04/01/2003", "05/01/2003", "06/01/2003", "07/01/2003", "08/01/2003", "09/01/2003", "10/01/2003", "11/01/2003"],
    markers: {
      size: 0
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      title: {
        text: "Points"
      },
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function formatter(y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }

          return y;
        }
      }
    },
    colors: [theme.primary, theme.success, theme.warning, theme.danger, theme.info]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Mixed Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "A Mixed Chart is a visualization that allows the combination of two or more distinct graphs.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a, {
    options: options,
    series: data,
    type: "line",
    height: "350"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(MixedChart));

/***/ }),

/***/ "./assets/js/pages/charts/ApexCharts/Pie.js":
/*!**************************************************!*\
  !*** ./assets/js/pages/charts/ApexCharts/Pie.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var PieChart = function PieChart(_ref) {
  var theme = _ref.theme;
  var data = [44, 55, 13, 33];
  var options = {
    dataLabels: {
      enabled: false
    },
    colors: [theme.primary, theme.success, theme.warning, theme.danger, theme.info]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
    tag: "h5"
  }, "Pie Chart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "Pie charts are an instrumental visualization tool useful in expressing data and information in terms of percentages, ratio.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a, {
    options: options,
    series: data,
    type: "donut",
    height: "350"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(PieChart));

/***/ }),

/***/ "./assets/js/pages/charts/ApexCharts/index.js":
/*!****************************************************!*\
  !*** ./assets/js/pages/charts/ApexCharts/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Line */ "./assets/js/pages/charts/ApexCharts/Line.js");
/* harmony import */ var _Area__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Area */ "./assets/js/pages/charts/ApexCharts/Area.js");
/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Bar */ "./assets/js/pages/charts/ApexCharts/Bar.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Column */ "./assets/js/pages/charts/ApexCharts/Column.js");
/* harmony import */ var _Pie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pie */ "./assets/js/pages/charts/ApexCharts/Pie.js");
/* harmony import */ var _Heatmap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Heatmap */ "./assets/js/pages/charts/ApexCharts/Heatmap.js");
/* harmony import */ var _Mixed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Mixed */ "./assets/js/pages/charts/ApexCharts/Mixed.js");
/* harmony import */ var _Candlestick__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Candlestick */ "./assets/js/pages/charts/ApexCharts/Candlestick.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var ApexCharts =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ApexCharts, _React$Component);

  function ApexCharts() {
    _classCallCheck(this, ApexCharts);

    return _possibleConstructorReturn(this, _getPrototypeOf(ApexCharts).apply(this, arguments));
  }

  _createClass(ApexCharts, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      setTimeout(function () {
        window.dispatchEvent(new Event("resize"));
      }, 100);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true,
        className: "p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "h3 mb-3"
      }, "ApexCharts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Line__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Area__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bar__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Column__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pie__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Heatmap__WEBPACK_IMPORTED_MODULE_8__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Mixed__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Candlestick__WEBPACK_IMPORTED_MODULE_10__["default"], null))));
    }
  }]);

  return ApexCharts;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (store) {
  return {
    theme: store.theme.currentTheme
  };
})(ApexCharts));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvY2hhcnRzL0FwZXhDaGFydHMvQXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvY2hhcnRzL0FwZXhDaGFydHMvQmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9jaGFydHMvQXBleENoYXJ0cy9DYW5kbGVzdGljay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvY2hhcnRzL0FwZXhDaGFydHMvQ29sdW1uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9jaGFydHMvQXBleENoYXJ0cy9IZWF0bWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9jaGFydHMvQXBleENoYXJ0cy9MaW5lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9jaGFydHMvQXBleENoYXJ0cy9NaXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvY2hhcnRzL0FwZXhDaGFydHMvUGllLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9jaGFydHMvQXBleENoYXJ0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcmVhQ2hhcnQiLCJ0aGVtZSIsImRhdGEiLCJuYW1lIiwib3B0aW9ucyIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwic3Ryb2tlIiwiY3VydmUiLCJ4YXhpcyIsInR5cGUiLCJjYXRlZ29yaWVzIiwidG9vbHRpcCIsIngiLCJmb3JtYXQiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic3VjY2VzcyIsIndhcm5pbmciLCJkYW5nZXIiLCJpbmZvIiwiY29ubmVjdCIsInN0b3JlIiwiY3VycmVudFRoZW1lIiwiQmFyQ2hhcnQiLCJjaGFydCIsInN0YWNrZWQiLCJwbG90T3B0aW9ucyIsImJhciIsImhvcml6b250YWwiLCJ3aWR0aCIsImxhYmVscyIsImZvcm1hdHRlciIsInZhbCIsInlheGlzIiwidGl0bGUiLCJ0ZXh0IiwidW5kZWZpbmVkIiwieSIsImZpbGwiLCJvcGFjaXR5IiwibGVnZW5kIiwicG9zaXRpb24iLCJob3Jpem9udGFsQWxpZ24iLCJvZmZzZXRYIiwiQ2FuZGxlc3RpY2tDaGFydCIsIkRhdGUiLCJDb2x1bW5DaGFydCIsImVuZGluZ1NoYXBlIiwiY29sdW1uV2lkdGgiLCJzaG93IiwiSGVhdG1hcENoYXJ0IiwiZ2VuZXJhdGVEYXRhIiwiY291bnQiLCJ5cmFuZ2UiLCJpIiwic2VyaWVzIiwidG9TdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtYXgiLCJtaW4iLCJwdXNoIiwiTGluZUNoYXJ0Iiwiem9vbSIsImRhc2hBcnJheSIsIm1hcmtlcnMiLCJzaXplIiwic3R5bGUiLCJncmlkIiwiYm9yZGVyQ29sb3IiLCJNaXhlZENoYXJ0IiwiZ3JhZGllbnQiLCJpbnZlcnNlQ29sb3JzIiwic2hhZGUiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInN0b3BzIiwic2hhcmVkIiwiaW50ZXJzZWN0IiwidG9GaXhlZCIsIlBpZUNoYXJ0IiwiQXBleENoYXJ0cyIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMvQixNQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxRQUFJLEVBQUUsU0FEUjtBQUVFRCxRQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCO0FBRlIsR0FEVyxFQUtYO0FBQ0VDLFFBQUksRUFBRSxTQURSO0FBRUVELFFBQUksRUFBRSxDQUFDLEVBQUQsRUFB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QTNCLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsc0JBREYsRUFHRSwyREFBQyw4Q0FBRCxRQUNFLDJEQUFDLDhDQUFEO0FBQUssVUFBRSxFQUFDO0FBQVIsU0FDRSwyREFBQyw2Q0FBRCxPQURGLENBREYsRUFJRSwyREFBQyw4Q0FBRDtBQUFLLFVBQUUsRUFBQztBQUFSLFNBQ0UsMkRBQUMsNkNBQUQsT0FERixDQUpGLEVBT0UsMkRBQUMsOENBQUQ7QUFBSyxVQUFFLEVBQUM7QUFBUixTQUNFLDJEQUFDLDRDQUFELE9BREYsQ0FQRixFQVVFLDJEQUFDLDhDQUFEO0FBQUssVUFBRSxFQUFDO0FBQVIsU0FDRSwyREFBQywrQ0FBRCxPQURGLENBVkYsRUFhRSwyREFBQyw4Q0FBRDtBQUFLLFVBQUUsRUFBQztBQUFSLFNBQ0UsMkRBQUMsNENBQUQsT0FERixDQWJGLEVBZ0JFLDJEQUFDLDhDQUFEO0FBQUssVUFBRSxFQUFDO0FBQVIsU0FDRSwyREFBQyxnREFBRCxPQURGLENBaEJGLEVBbUJFLDJEQUFDLDhDQUFEO0FBQUssVUFBRSxFQUFDO0FBQVIsU0FDRSwyREFBQyw4Q0FBRCxPQURGLENBbkJGLEVBc0JFLDJEQUFDLDhDQUFEO0FBQUssVUFBRSxFQUFDO0FBQVIsU0FDRSwyREFBQyxxREFBRCxPQURGLENBdEJGLENBSEYsQ0FERjtBQWdDRDs7OztFQXhDc0JDLDRDQUFLLENBQUNDLFM7O0FBMkNoQnBFLDBIQUFPLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDL0JyQixTQUFLLEVBQUVxQixLQUFLLENBQUNyQixLQUFOLENBQVlzQjtBQURZLEdBQUw7QUFBQSxDQUFOLENBQVAsQ0FFWDRELFVBRlcsQ0FBZixFIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBBcmVhQ2hhcnQgPSAoeyB0aGVtZSB9KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzZXJpZXMxXCIsXHJcbiAgICAgIGRhdGE6IFszMSwgNDAsIDI4LCA1MSwgNDIsIDEwOSwgMTAwXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzZXJpZXMyXCIsXHJcbiAgICAgIGRhdGE6IFsxMSwgMzIsIDQ1LCAzMiwgMzQsIDUyLCA0MV1cclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgZGF0YUxhYmVsczoge1xyXG4gICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHN0cm9rZToge1xyXG4gICAgICBjdXJ2ZTogXCJzbW9vdGhcIlxyXG4gICAgfSxcclxuICAgIHhheGlzOiB7XHJcbiAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcclxuICAgICAgY2F0ZWdvcmllczogW1xyXG4gICAgICAgIFwiMjAxOC0wOS0xOVQwMDowMDowMFwiLFxyXG4gICAgICAgIFwiMjAxOC0wOS0xOVQwMTozMDowMFwiLFxyXG4gICAgICAgIFwiMjAxOC0wOS0xOVQwMjozMDowMFwiLFxyXG4gICAgICAgIFwiMjAxOC0wOS0xOVQwMzozMDowMFwiLFxyXG4gICAgICAgIFwiMjAxOC0wOS0xOVQwNDozMDowMFwiLFxyXG4gICAgICAgIFwiMjAxOC0wOS0xOVQwNTozMDowMFwiLFxyXG4gICAgICAgIFwiMjAxOC0wOS0xOVQwNjozMDowMFwiXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIHg6IHtcclxuICAgICAgICBmb3JtYXQ6IFwiZGQvTU0veXkgSEg6bW1cIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29sb3JzOiBbXHJcbiAgICAgIHRoZW1lLnByaW1hcnksXHJcbiAgICAgIHRoZW1lLnN1Y2Nlc3MsXHJcbiAgICAgIHRoZW1lLndhcm5pbmcsXHJcbiAgICAgIHRoZW1lLmRhbmdlcixcclxuICAgICAgdGhlbWUuaW5mb1xyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkFyZWEgQ2hhcnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBBcmVhIGNoYXJ0cyBhcmUgdXNlZCB0byByZXByZXNlbnQgcXVhbnRpdGF0aXZlIHZhcmlhdGlvbnMuXHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydCB3LTEwMFwiPlxyXG4gICAgICAgICAgPENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17ZGF0YX0gdHlwZT1cImFyZWFcIiBoZWlnaHQ9XCIzNTBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0b3JlID0+ICh7XHJcbiAgdGhlbWU6IHN0b3JlLnRoZW1lLmN1cnJlbnRUaGVtZVxyXG59KSkoQXJlYUNoYXJ0KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBCYXJDaGFydCA9ICh7IHRoZW1lIH0pID0+IHtcclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1hcmluZSBTcHJpdGVcIixcclxuICAgICAgZGF0YTogWzQ0LCA1NSwgNDEsIDM3LCAyMiwgNDMsIDIxXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTdHJpa2luZyBDYWxmXCIsXHJcbiAgICAgIGRhdGE6IFs1MywgMzIsIDMzLCA1MiwgMTMsIDQzLCAzMl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVGFuayBQaWN0dXJlXCIsXHJcbiAgICAgIGRhdGE6IFsxMiwgMTcsIDExLCA5LCAxNSwgMTEsIDIwXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCdWNrZXQgU2xvcGVcIixcclxuICAgICAgZGF0YTogWzksIDcsIDUsIDgsIDYsIDksIDRdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlYm9ybiBLaWRcIixcclxuICAgICAgZGF0YTogWzI1LCAxMiwgMTksIDMyLCAyNSwgMjQsIDEwXVxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBjaGFydDoge1xyXG4gICAgICBzdGFja2VkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgYmFyOiB7XHJcbiAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3Ryb2tlOiB7XHJcbiAgICAgIHdpZHRoOiAxLFxyXG4gICAgICBjb2xvcnM6IFtcIiNmZmZcIl1cclxuICAgIH0sXHJcbiAgICB4YXhpczoge1xyXG4gICAgICBjYXRlZ29yaWVzOiBbMjAwOCwgMjAwOSwgMjAxMCwgMjAxMSwgMjAxMiwgMjAxMywgMjAxNF0sXHJcbiAgICAgIGxhYmVsczoge1xyXG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsICsgXCJLXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgeWF4aXM6IHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICB0ZXh0OiB1bmRlZmluZWRcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgeToge1xyXG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsICsgXCJLXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZmlsbDoge1xyXG4gICAgICBvcGFjaXR5OiAxXHJcbiAgICB9LFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICBob3Jpem9udGFsQWxpZ246IFwibGVmdFwiLFxyXG4gICAgICBvZmZzZXRYOiA0MFxyXG4gICAgfSxcclxuICAgIGNvbG9yczogW1xyXG4gICAgICB0aGVtZS5wcmltYXJ5LFxyXG4gICAgICB0aGVtZS5zdWNjZXNzLFxyXG4gICAgICB0aGVtZS53YXJuaW5nLFxyXG4gICAgICB0aGVtZS5kYW5nZXIsXHJcbiAgICAgIHRoZW1lLmluZm9cclxuICAgIF1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5CYXIgQ2hhcnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBBIGJhciBjaGFydCBpcyB0aGUgYmVzdCB0b29sIGZvciBkaXNwbGF5aW5nIGNvbXBhcmlzb25zIGJldHdlZW5cclxuICAgICAgICAgIGNhdGVnb3JpZXMgb2YgZGF0YS5cclxuICAgICAgICA8L2g2PlxyXG4gICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XHJcbiAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17b3B0aW9uc30gc2VyaWVzPXtkYXRhfSB0eXBlPVwiYmFyXCIgaGVpZ2h0PVwiMzUwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkQm9keT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdG9yZSA9PiAoe1xyXG4gIHRoZW1lOiBzdG9yZS50aGVtZS5jdXJyZW50VGhlbWVcclxufSkpKEJhckNoYXJ0KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBDYW5kbGVzdGlja0NoYXJ0ID0gKHsgdGhlbWUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIGRhdGE6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAxLCAxKSxcclxuICAgICAgICAgIHk6IFs1MS45OCwgNTYuMjksIDUxLjU5LCA1My44NV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDIsIDEpLFxyXG4gICAgICAgICAgeTogWzUzLjY2LCA1NC45OSwgNTEuMzUsIDUyLjk1XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgeDogbmV3IERhdGUoMjAxNiwgMywgMSksXHJcbiAgICAgICAgICB5OiBbNTIuOTYsIDUzLjc4LCA1MS41NCwgNTIuNDhdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE2LCA0LCAxKSxcclxuICAgICAgICAgIHk6IFs1Mi41NCwgNTIuNzksIDQ3Ljg4LCA0OS4yNF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDUsIDEpLFxyXG4gICAgICAgICAgeTogWzQ5LjEsIDUyLjg2LCA0Ny43LCA1Mi43OF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDYsIDEpLFxyXG4gICAgICAgICAgeTogWzUyLjgzLCA1My40OCwgNTAuMzIsIDUyLjI5XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgeDogbmV3IERhdGUoMjAxNiwgNywgMSksXHJcbiAgICAgICAgICB5OiBbNTIuMiwgNTQuNDgsIDUxLjY0LCA1Mi41OF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDgsIDEpLFxyXG4gICAgICAgICAgeTogWzUyLjc2LCA1Ny4zNSwgNTIuMTUsIDU3LjAzXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgeDogbmV3IERhdGUoMjAxNiwgOSwgMSksXHJcbiAgICAgICAgICB5OiBbNTcuMDQsIDU4LjE1LCA0OC44OCwgNTYuMTldXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAxMCwgMSksXHJcbiAgICAgICAgICB5OiBbNTYuMDksIDU4Ljg1LCA1NS40OCwgNTguNzldXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAxMSwgMSksXHJcbiAgICAgICAgICB5OiBbNTguNzgsIDU5LjY1LCA1OC4yMywgNTkuMDVdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE3LCAwLCAxKSxcclxuICAgICAgICAgIHk6IFs1OS4zNywgNjEuMTEsIDU5LjM1LCA2MC4zNF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTcsIDEsIDEpLFxyXG4gICAgICAgICAgeTogWzYwLjQsIDYwLjUyLCA1Ni43MSwgNTYuOTNdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE3LCAyLCAxKSxcclxuICAgICAgICAgIHk6IFs1Ny4wMiwgNTkuNzEsIDU2LjA0LCA1Ni44Ml1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTcsIDMsIDEpLFxyXG4gICAgICAgICAgeTogWzU2Ljk3LCA1OS42MiwgNTQuNzcsIDU5LjNdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE3LCA0LCAxKSxcclxuICAgICAgICAgIHk6IFs1OS4xMSwgNjIuMjksIDU5LjEsIDU5Ljg1XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgeDogbmV3IERhdGUoMjAxNywgNSwgMSksXHJcbiAgICAgICAgICB5OiBbNTkuOTcsIDYwLjExLCA1NS42NiwgNTguNDJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE3LCA2LCAxKSxcclxuICAgICAgICAgIHk6IFs1OC4zNCwgNjAuOTMsIDU2Ljc1LCA1Ny40Ml1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTcsIDcsIDEpLFxyXG4gICAgICAgICAgeTogWzU3Ljc2LCA1OC4wOCwgNTEuMTgsIDU0LjcxXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgeDogbmV3IERhdGUoMjAxNywgOCwgMSksXHJcbiAgICAgICAgICB5OiBbNTQuOCwgNjEuNDIsIDUzLjE4LCA1Ny4zNV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6IG5ldyBEYXRlKDIwMTcsIDksIDEpLFxyXG4gICAgICAgICAgeTogWzU3LjU2LCA2My4wOSwgNTcuMCwgNjIuOTldXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE3LCAxMCwgMSksXHJcbiAgICAgICAgICB5OiBbNjIuODksIDYzLjQyLCA1OS43MiwgNjEuNzZdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB4OiBuZXcgRGF0ZSgyMDE3LCAxMSwgMSksXHJcbiAgICAgICAgICB5OiBbNjEuNzEsIDY0LjE1LCA2MS4yOSwgNjMuMDRdXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHN0cm9rZToge1xyXG4gICAgICB3aWR0aDogMVxyXG4gICAgfSxcclxuICAgIHhheGlzOiB7XHJcbiAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIlxyXG4gICAgfSxcclxuICAgIGNvbG9yczogW1xyXG4gICAgICB0aGVtZS5wcmltYXJ5LFxyXG4gICAgICB0aGVtZS5zdWNjZXNzLFxyXG4gICAgICB0aGVtZS53YXJuaW5nLFxyXG4gICAgICB0aGVtZS5kYW5nZXIsXHJcbiAgICAgIHRoZW1lLmluZm9cclxuICAgIF1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5DYW5kbGVzdGljayBDaGFydDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgIEEgY2FuZGxlc3RpY2sgY2hhcnQgaXMgYSBzdHlsZSBvZiBmaW5hbmNpYWwgY2hhcnQgdXNlZCB0byBkZXNjcmliZVxyXG4gICAgICAgICAgcHJpY2UgbW92ZW1lbnRzLlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cclxuICAgICAgICAgIDxDaGFydFxyXG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgICBzZXJpZXM9e2RhdGF9XHJcbiAgICAgICAgICAgIHR5cGU9XCJjYW5kbGVzdGlja1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjM1MFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0b3JlID0+ICh7XHJcbiAgdGhlbWU6IHN0b3JlLnRoZW1lLmN1cnJlbnRUaGVtZVxyXG59KSkoQ2FuZGxlc3RpY2tDaGFydCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJyZWFjdC1hcGV4Y2hhcnRzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IENhcmQsIENhcmRCb2R5LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuY29uc3QgQ29sdW1uQ2hhcnQgPSAoeyB0aGVtZSB9KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJOZXQgUHJvZml0XCIsXHJcbiAgICAgIGRhdGE6IFs0NCwgNTUsIDU3LCA1NiwgNjEsIDU4LCA2MywgNjAsIDY2XVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXZlbnVlXCIsXHJcbiAgICAgIGRhdGE6IFs3NiwgODUsIDEwMSwgOTgsIDg3LCAxMDUsIDkxLCAxMTQsIDk0XVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJGcmVlIENhc2ggRmxvd1wiLFxyXG4gICAgICBkYXRhOiBbMzUsIDQxLCAzNiwgMjYsIDQ1LCA0OCwgNTIsIDUzLCA0MV1cclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgYmFyOiB7XHJcbiAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXHJcbiAgICAgICAgZW5kaW5nU2hhcGU6IFwicm91bmRlZFwiLFxyXG4gICAgICAgIGNvbHVtbldpZHRoOiBcIjU1JVwiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3Ryb2tlOiB7XHJcbiAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgIHdpZHRoOiAyLFxyXG4gICAgICBjb2xvcnM6IFtcInRyYW5zcGFyZW50XCJdXHJcbiAgICB9LFxyXG4gICAgeGF4aXM6IHtcclxuICAgICAgY2F0ZWdvcmllczogW1xyXG4gICAgICAgIFwiRmViXCIsXHJcbiAgICAgICAgXCJNYXJcIixcclxuICAgICAgICBcIkFwclwiLFxyXG4gICAgICAgIFwiTWF5XCIsXHJcbiAgICAgICAgXCJKdW5cIixcclxuICAgICAgICBcIkp1bFwiLFxyXG4gICAgICAgIFwiQXVnXCIsXHJcbiAgICAgICAgXCJTZXBcIixcclxuICAgICAgICBcIk9jdFwiXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB5YXhpczoge1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIHRleHQ6IFwiJCAodGhvdXNhbmRzKVwiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmaWxsOiB7XHJcbiAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0sXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIHk6IHtcclxuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgcmV0dXJuIFwiJCBcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbG9yczogW1xyXG4gICAgICB0aGVtZS5wcmltYXJ5LFxyXG4gICAgICB0aGVtZS5zdWNjZXNzLFxyXG4gICAgICB0aGVtZS53YXJuaW5nLFxyXG4gICAgICB0aGVtZS5kYW5nZXIsXHJcbiAgICAgIHRoZW1lLmluZm9cclxuICAgIF1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5Db2x1bW4gQ2hhcnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBBIGNvbHVtbiBjaGFydCB1c2VzIHZlcnRpY2FsIGJhcnMgdG8gZGlzcGxheSBkYXRhIGFuZCBpcyB1c2VkIHRvXHJcbiAgICAgICAgICBjb21wYXJlIHZhbHVlcyBhY3Jvc3MgY2F0ZWdvcmllcy5cclxuICAgICAgICA8L2g2PlxyXG4gICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XHJcbiAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17b3B0aW9uc30gc2VyaWVzPXtkYXRhfSB0eXBlPVwiYmFyXCIgaGVpZ2h0PVwiMzUwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkQm9keT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdG9yZSA9PiAoe1xyXG4gIHRoZW1lOiBzdG9yZS50aGVtZS5jdXJyZW50VGhlbWVcclxufSkpKENvbHVtbkNoYXJ0KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBIZWF0bWFwQ2hhcnQgPSAoeyB0aGVtZSB9KSA9PiB7XHJcbiAgY29uc3QgZ2VuZXJhdGVEYXRhID0gKGNvdW50LCB5cmFuZ2UpID0+IHtcclxuICAgIHZhciBpID0gMDtcclxuICAgIHZhciBzZXJpZXMgPSBbXTtcclxuICAgIHdoaWxlIChpIDwgY291bnQpIHtcclxuICAgICAgdmFyIHggPSAoaSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgIHZhciB5ID1cclxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoeXJhbmdlLm1heCAtIHlyYW5nZS5taW4gKyAxKSkgKyB5cmFuZ2UubWluO1xyXG4gICAgICBzZXJpZXMucHVzaCh7XHJcbiAgICAgICAgeDogeCxcclxuICAgICAgICB5OiB5XHJcbiAgICAgIH0pO1xyXG4gICAgICBpKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2VyaWVzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTWV0cmljMVwiLFxyXG4gICAgICBkYXRhOiBnZW5lcmF0ZURhdGEoMjAsIHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiA5MFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNZXRyaWMyXCIsXHJcbiAgICAgIGRhdGE6IGdlbmVyYXRlRGF0YSgyMCwge1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDkwXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1ldHJpYzNcIixcclxuICAgICAgZGF0YTogZ2VuZXJhdGVEYXRhKDIwLCB7XHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogOTBcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTWV0cmljNFwiLFxyXG4gICAgICBkYXRhOiBnZW5lcmF0ZURhdGEoMjAsIHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiA5MFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNZXRyaWM1XCIsXHJcbiAgICAgIGRhdGE6IGdlbmVyYXRlRGF0YSgyMCwge1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDkwXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1ldHJpYzZcIixcclxuICAgICAgZGF0YTogZ2VuZXJhdGVEYXRhKDIwLCB7XHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogOTBcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTWV0cmljN1wiLFxyXG4gICAgICBkYXRhOiBnZW5lcmF0ZURhdGEoMjAsIHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiA5MFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNZXRyaWM4XCIsXHJcbiAgICAgIGRhdGE6IGdlbmVyYXRlRGF0YSgyMCwge1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDkwXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1ldHJpYzlcIixcclxuICAgICAgZGF0YTogZ2VuZXJhdGVEYXRhKDIwLCB7XHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogOTBcclxuICAgICAgfSlcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgZGF0YUxhYmVsczoge1xyXG4gICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGNvbG9yczogW1wiIzAwOEZGQlwiXSxcclxuICAgIHhheGlzOiB7XHJcbiAgICAgIHR5cGU6IFwiY2F0ZWdvcnlcIlxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkhlYXRtYXAgQ2hhcnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBIZWF0bWFwIGlzIGEgdmlzdWFsaXphdGlvbiB0b29sIHRoYXQgZW1wbG95cyBjb2xvciB0aGUgd2F5IGEgYmFyIGNoYXJ0XHJcbiAgICAgICAgICBlbXBsb3lzIGhlaWdodCBhbmQgd2lkdGggaW4gcmVwcmVzZW50aW5nIGRhdGEuXHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxyXG4gICAgICAgICAgPENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17ZGF0YX0gdHlwZT1cImhlYXRtYXBcIiBoZWlnaHQ9XCIzNTBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0b3JlID0+ICh7XHJcbiAgdGhlbWU6IHN0b3JlLnRoZW1lLmN1cnJlbnRUaGVtZVxyXG59KSkoSGVhdG1hcENoYXJ0KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBMaW5lQ2hhcnQgPSAoeyB0aGVtZSB9KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTZXNzaW9uIER1cmF0aW9uXCIsXHJcbiAgICAgIGRhdGE6IFs0NSwgNTIsIDM4LCAyNCwgMzMsIDI2LCAyMSwgMjAsIDYsIDgsIDE1LCAxMF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUGFnZSBWaWV3c1wiLFxyXG4gICAgICBkYXRhOiBbMzUsIDQxLCA2MiwgNDIsIDEzLCAxOCwgMjksIDM3LCAzNiwgNTEsIDMyLCAzNV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVG90YWwgVmlzaXRzXCIsXHJcbiAgICAgIGRhdGE6IFs4NywgNTcsIDc0LCA5OSwgNzUsIDM4LCA2MiwgNDcsIDgyLCA1NiwgNDUsIDQ3XVxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBjaGFydDoge1xyXG4gICAgICB6b29tOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzdHJva2U6IHtcclxuICAgICAgd2lkdGg6IFs1LCA3LCA1XSxcclxuICAgICAgY3VydmU6IFwic3RyYWlnaHRcIixcclxuICAgICAgZGFzaEFycmF5OiBbMCwgOCwgNV1cclxuICAgIH0sXHJcbiAgICBtYXJrZXJzOiB7XHJcbiAgICAgIHNpemU6IDAsXHJcbiAgICAgIHN0eWxlOiBcImhvbGxvd1wiIC8vIGZ1bGwsIGhvbGxvdywgaW52ZXJ0ZWRcclxuICAgIH0sXHJcbiAgICB4YXhpczoge1xyXG4gICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAgXCIwMSBKYW5cIixcclxuICAgICAgICBcIjAyIEphblwiLFxyXG4gICAgICAgIFwiMDMgSmFuXCIsXHJcbiAgICAgICAgXCIwNCBKYW5cIixcclxuICAgICAgICBcIjA1IEphblwiLFxyXG4gICAgICAgIFwiMDYgSmFuXCIsXHJcbiAgICAgICAgXCIwNyBKYW5cIixcclxuICAgICAgICBcIjA4IEphblwiLFxyXG4gICAgICAgIFwiMDkgSmFuXCIsXHJcbiAgICAgICAgXCIxMCBKYW5cIixcclxuICAgICAgICBcIjExIEphblwiLFxyXG4gICAgICAgIFwiMTIgSmFuXCJcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgeTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbCArIFwiIChtaW5zKVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB2YWwgKyBcIiBwZXIgc2Vzc2lvblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICBncmlkOiB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiBcIiNmMWYxZjFcIlxyXG4gICAgfSxcclxuICAgIGNvbG9yczogW1xyXG4gICAgICB0aGVtZS5wcmltYXJ5LFxyXG4gICAgICB0aGVtZS5zdWNjZXNzLFxyXG4gICAgICB0aGVtZS53YXJuaW5nLFxyXG4gICAgICB0aGVtZS5kYW5nZXIsXHJcbiAgICAgIHRoZW1lLmluZm9cclxuICAgIF1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5MaW5lIENoYXJ0PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgTGluZSBjaGFydHMgYXJlIGEgdHlwaWNhbCBwaWN0b3JpYWwgcmVwcmVzZW50YXRpb24gdGhhdCBkZXBpY3RzIHRyZW5kc1xyXG4gICAgICAgICAgYW5kIGJlaGF2aW9ycyBvdmVyIHRpbWUuXHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxyXG4gICAgICAgICAgPENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17ZGF0YX0gdHlwZT1cImxpbmVcIiBoZWlnaHQ9XCIzNTBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0b3JlID0+ICh7XHJcbiAgdGhlbWU6IHN0b3JlLnRoZW1lLmN1cnJlbnRUaGVtZVxyXG59KSkoTGluZUNoYXJ0KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBNaXhlZENoYXJ0ID0gKHsgdGhlbWUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVEVBTSBBXCIsXHJcbiAgICAgIHR5cGU6IFwiY29sdW1uXCIsXHJcbiAgICAgIGRhdGE6IFsyMywgMTEsIDIyLCAyNywgMTMsIDIyLCAzNywgMjEsIDQ0LCAyMiwgMzBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlRFQU0gQlwiLFxyXG4gICAgICB0eXBlOiBcImFyZWFcIixcclxuICAgICAgZGF0YTogWzQ0LCA1NSwgNDEsIDY3LCAyMiwgNDMsIDIxLCA0MSwgNTYsIDI3LCA0M11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVEVBTSBDXCIsXHJcbiAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICBkYXRhOiBbMzAsIDI1LCAzNiwgMzAsIDQ1LCAzNSwgNjQsIDUyLCA1OSwgMzYsIDM5XVxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBjaGFydDoge1xyXG4gICAgICBzdGFja2VkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHN0cm9rZToge1xyXG4gICAgICB3aWR0aDogWzAsIDIsIDVdLFxyXG4gICAgICBjdXJ2ZTogXCJzbW9vdGhcIlxyXG4gICAgfSxcclxuICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgIGJhcjoge1xyXG4gICAgICAgIGNvbHVtbldpZHRoOiBcIjUwJVwiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmaWxsOiB7XHJcbiAgICAgIG9wYWNpdHk6IFswLjg1LCAwLjI1LCAxXSxcclxuICAgICAgZ3JhZGllbnQ6IHtcclxuICAgICAgICBpbnZlcnNlQ29sb3JzOiBmYWxzZSxcclxuICAgICAgICBzaGFkZTogXCJsaWdodFwiLFxyXG4gICAgICAgIHR5cGU6IFwidmVydGljYWxcIixcclxuICAgICAgICBvcGFjaXR5RnJvbTogMC44NSxcclxuICAgICAgICBvcGFjaXR5VG86IDAuNTUsXHJcbiAgICAgICAgc3RvcHM6IFswLCAxMDAsIDEwMCwgMTAwXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGFiZWxzOiBbXHJcbiAgICAgIFwiMDEvMDEvMjAwM1wiLFxyXG4gICAgICBcIjAyLzAxLzIwMDNcIixcclxuICAgICAgXCIwMy8wMS8yMDAzXCIsXHJcbiAgICAgIFwiMDQvMDEvMjAwM1wiLFxyXG4gICAgICBcIjA1LzAxLzIwMDNcIixcclxuICAgICAgXCIwNi8wMS8yMDAzXCIsXHJcbiAgICAgIFwiMDcvMDEvMjAwM1wiLFxyXG4gICAgICBcIjA4LzAxLzIwMDNcIixcclxuICAgICAgXCIwOS8wMS8yMDAzXCIsXHJcbiAgICAgIFwiMTAvMDEvMjAwM1wiLFxyXG4gICAgICBcIjExLzAxLzIwMDNcIlxyXG4gICAgXSxcclxuICAgIG1hcmtlcnM6IHtcclxuICAgICAgc2l6ZTogMFxyXG4gICAgfSxcclxuICAgIHhheGlzOiB7XHJcbiAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIlxyXG4gICAgfSxcclxuICAgIHlheGlzOiB7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogXCJQb2ludHNcIlxyXG4gICAgICB9LFxyXG4gICAgICBtaW46IDBcclxuICAgIH0sXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIHNoYXJlZDogdHJ1ZSxcclxuICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcclxuICAgICAgeToge1xyXG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oeSkge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB5LnRvRml4ZWQoMCkgKyBcIiBwb2ludHNcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbG9yczogW1xyXG4gICAgICB0aGVtZS5wcmltYXJ5LFxyXG4gICAgICB0aGVtZS5zdWNjZXNzLFxyXG4gICAgICB0aGVtZS53YXJuaW5nLFxyXG4gICAgICB0aGVtZS5kYW5nZXIsXHJcbiAgICAgIHRoZW1lLmluZm9cclxuICAgIF1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5NaXhlZCBDaGFydDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgIEEgTWl4ZWQgQ2hhcnQgaXMgYSB2aXN1YWxpemF0aW9uIHRoYXQgYWxsb3dzIHRoZSBjb21iaW5hdGlvbiBvZiB0d28gb3JcclxuICAgICAgICAgIG1vcmUgZGlzdGluY3QgZ3JhcGhzLlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cclxuICAgICAgICAgIDxDaGFydCBvcHRpb25zPXtvcHRpb25zfSBzZXJpZXM9e2RhdGF9IHR5cGU9XCJsaW5lXCIgaGVpZ2h0PVwiMzUwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkQm9keT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdG9yZSA9PiAoe1xyXG4gIHRoZW1lOiBzdG9yZS50aGVtZS5jdXJyZW50VGhlbWVcclxufSkpKE1peGVkQ2hhcnQpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtYXBleGNoYXJ0c1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQm9keSwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IFBpZUNoYXJ0ID0gKHsgdGhlbWUgfSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBbNDQsIDU1LCAxMywgMzNdO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgZGF0YUxhYmVsczoge1xyXG4gICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGNvbG9yczogW1xyXG4gICAgICB0aGVtZS5wcmltYXJ5LFxyXG4gICAgICB0aGVtZS5zdWNjZXNzLFxyXG4gICAgICB0aGVtZS53YXJuaW5nLFxyXG4gICAgICB0aGVtZS5kYW5nZXIsXHJcbiAgICAgIHRoZW1lLmluZm9cclxuICAgIF1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5QaWUgQ2hhcnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBQaWUgY2hhcnRzIGFyZSBhbiBpbnN0cnVtZW50YWwgdmlzdWFsaXphdGlvbiB0b29sIHVzZWZ1bCBpbiBleHByZXNzaW5nXHJcbiAgICAgICAgICBkYXRhIGFuZCBpbmZvcm1hdGlvbiBpbiB0ZXJtcyBvZiBwZXJjZW50YWdlcywgcmF0aW8uXHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxyXG4gICAgICAgICAgPENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17ZGF0YX0gdHlwZT1cImRvbnV0XCIgaGVpZ2h0PVwiMzUwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkQm9keT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdG9yZSA9PiAoe1xyXG4gIHRoZW1lOiBzdG9yZS50aGVtZS5jdXJyZW50VGhlbWVcclxufSkpKFBpZUNoYXJ0KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCBMaW5lIGZyb20gXCIuL0xpbmVcIjtcclxuaW1wb3J0IEFyZWEgZnJvbSBcIi4vQXJlYVwiO1xyXG5pbXBvcnQgQmFyIGZyb20gXCIuL0JhclwiO1xyXG5pbXBvcnQgQ29sdW1uIGZyb20gXCIuL0NvbHVtblwiO1xyXG5pbXBvcnQgUGllIGZyb20gXCIuL1BpZVwiO1xyXG5pbXBvcnQgSGVhdG1hcCBmcm9tIFwiLi9IZWF0bWFwXCI7XHJcbmltcG9ydCBNaXhlZCBmcm9tIFwiLi9NaXhlZFwiO1xyXG5pbXBvcnQgQ2FuZGxlc3RpY2sgZnJvbSBcIi4vQ2FuZGxlc3RpY2tcIjtcclxuXHJcbmNsYXNzIEFwZXhDaGFydHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZXNpemVcIikpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgzIG1iLTNcIj5BcGV4Q2hhcnRzPC9oMT5cclxuXHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxMaW5lIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxBcmVhIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxCYXIgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBsZz1cIjZcIj5cclxuICAgICAgICAgICAgPENvbHVtbiAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICA8UGllIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxIZWF0bWFwIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxNaXhlZCAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICA8Q2FuZGxlc3RpY2sgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0b3JlID0+ICh7XHJcbiAgdGhlbWU6IHN0b3JlLnRoZW1lLmN1cnJlbnRUaGVtZVxyXG59KSkoQXBleENoYXJ0cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=