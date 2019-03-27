(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./assets/js/pages/maps/GoogleMaps/DarkStyle.js":
/*!******************************************************!*\
  !*** ./assets/js/pages/maps/GoogleMaps/DarkStyle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var DarkStyle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DarkStyle, _React$Component);

  function DarkStyle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DarkStyle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DarkStyle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getMapOptions", function () {
      return {
        fullscreenControl: true,
        mapTypeControl: true,
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: true,
        styles: [{
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [{
            saturation: 36
          }, {
            color: "#000000"
          }, {
            lightness: 40
          }]
        }, {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [{
            visibility: "on"
          }, {
            color: "#000000"
          }, {
            lightness: 16
          }]
        }, {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [{
            visibility: "off"
          }]
        }, {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [{
            color: "#000000"
          }, {
            lightness: 20
          }]
        }, {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{
            color: "#000000"
          }, {
            lightness: 17
          }, {
            weight: 1.2
          }]
        }, {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [{
            color: "#000000"
          }, {
            lightness: 20
          }]
        }, {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{
            color: "#000000"
          }, {
            lightness: 21
          }]
        }, {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{
            color: "#000000"
          }, {
            lightness: 17
          }]
        }, {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{
            color: "#000000"
          }, {
            lightness: 29
          }, {
            weight: 0.2
          }]
        }, {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{
            color: "#000000"
          }, {
            lightness: 18
          }]
        }, {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [{
            color: "#000000"
          }, {
            lightness: 16
          }]
        }, {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{
            color: "#000000"
          }, {
            lightness: 19
          }]
        }, {
          featureType: "water",
          elementType: "geometry",
          stylers: [{
            color: "#000000"
          }, {
            lightness: 17
          }]
        }]
      };
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
        tag: "h5"
      }, "Dark Style"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "card-subtitle text-muted"
      }, "Dark color scheme.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: 300,
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
        options: _this.getMapOptions,
        bootstrapURLKeys: {
          key: "AIzaSyA-aWrwgr64q4b3TEZwQ0lkHI4lZK-moM4"
        },
        defaultCenter: _this.props.center,
        defaultZoom: _this.props.zoom
      }))));
    });

    return _this;
  }

  return DarkStyle;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(DarkStyle, "defaultProps", {
  center: {
    lat: 40.712784,
    lng: -74.005941
  },
  zoom: 14
});

/* harmony default export */ __webpack_exports__["default"] = (DarkStyle);

/***/ }),

/***/ "./assets/js/pages/maps/GoogleMaps/Default.js":
/*!****************************************************!*\
  !*** ./assets/js/pages/maps/GoogleMaps/Default.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Default, _React$Component);

  function Default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getMapOptions", function (maps) {
      return {
        fullscreenControl: true,
        mapTypeControl: true,
        mapTypeId: maps.MapTypeId.ROADMAP,
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: true
      };
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
        tag: "h5"
      }, "Default Map"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "card-subtitle text-muted"
      }, "Displays the default road map view.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: 300,
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
        options: _this.getMapOptions,
        bootstrapURLKeys: {
          key: "AIzaSyA-aWrwgr64q4b3TEZwQ0lkHI4lZK-moM4"
        },
        defaultCenter: _this.props.center,
        defaultZoom: _this.props.zoom
      }))));
    });

    return _this;
  }

  return Default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Default, "defaultProps", {
  center: {
    lat: 40.712784,
    lng: -74.005941
  },
  zoom: 14
});

/* harmony default export */ __webpack_exports__["default"] = (Default);

/***/ }),

/***/ "./assets/js/pages/maps/GoogleMaps/Hybrid.js":
/*!***************************************************!*\
  !*** ./assets/js/pages/maps/GoogleMaps/Hybrid.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Hybrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hybrid, _React$Component);

  function Hybrid() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Hybrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Hybrid)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getMapOptions", function (maps) {
      return {
        fullscreenControl: true,
        mapTypeControl: true,
        mapTypeId: maps.MapTypeId.HYBRID,
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: true
      };
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
        tag: "h5"
      }, "Hybrid Map"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "card-subtitle text-muted"
      }, "Displays a mixture of normal and satellite views.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: 300,
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
        options: _this.getMapOptions,
        bootstrapURLKeys: {
          key: "AIzaSyA-aWrwgr64q4b3TEZwQ0lkHI4lZK-moM4"
        },
        defaultCenter: _this.props.center,
        defaultZoom: _this.props.zoom
      }))));
    });

    return _this;
  }

  return Hybrid;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Hybrid, "defaultProps", {
  center: {
    lat: 40.712784,
    lng: -74.005941
  },
  zoom: 14
});

/* harmony default export */ __webpack_exports__["default"] = (Hybrid);

/***/ }),

/***/ "./assets/js/pages/maps/GoogleMaps/LightStyle.js":
/*!*******************************************************!*\
  !*** ./assets/js/pages/maps/GoogleMaps/LightStyle.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var LightStyle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LightStyle, _React$Component);

  function LightStyle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LightStyle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LightStyle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getMapOptions", function () {
      return {
        fullscreenControl: true,
        mapTypeControl: true,
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: true,
        styles: [{
          featureType: "water",
          elementType: "geometry",
          stylers: [{
            color: "#e9e9e9"
          }, {
            lightness: 17
          }]
        }, {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [{
            color: "#f5f5f5"
          }, {
            lightness: 20
          }]
        }, {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{
            color: "#ffffff"
          }, {
            lightness: 17
          }]
        }, {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{
            color: "#ffffff"
          }, {
            lightness: 29
          }, {
            weight: 0.2
          }]
        }, {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{
            color: "#ffffff"
          }, {
            lightness: 18
          }]
        }, {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [{
            color: "#ffffff"
          }, {
            lightness: 16
          }]
        }, {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{
            color: "#f5f5f5"
          }, {
            lightness: 21
          }]
        }, {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{
            color: "#dedede"
          }, {
            lightness: 21
          }]
        }, {
          elementType: "labels.text.stroke",
          stylers: [{
            visibility: "on"
          }, {
            color: "#ffffff"
          }, {
            lightness: 16
          }]
        }, {
          elementType: "labels.text.fill",
          stylers: [{
            saturation: 36
          }, {
            color: "#333333"
          }, {
            lightness: 40
          }]
        }, {
          elementType: "labels.icon",
          stylers: [{
            visibility: "off"
          }]
        }, {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{
            color: "#f2f2f2"
          }, {
            lightness: 19
          }]
        }, {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [{
            color: "#fefefe"
          }, {
            lightness: 20
          }]
        }, {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{
            color: "#fefefe"
          }, {
            lightness: 17
          }, {
            weight: 1.2
          }]
        }]
      };
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
        tag: "h5"
      }, "Light Style"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "card-subtitle text-muted"
      }, "Light color scheme.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: 300,
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
        options: _this.getMapOptions,
        bootstrapURLKeys: {
          key: "AIzaSyA-aWrwgr64q4b3TEZwQ0lkHI4lZK-moM4"
        },
        defaultCenter: _this.props.center,
        defaultZoom: _this.props.zoom
      }))));
    });

    return _this;
  }

  return LightStyle;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(LightStyle, "defaultProps", {
  center: {
    lat: 40.712784,
    lng: -74.005941
  },
  zoom: 14
});

/* harmony default export */ __webpack_exports__["default"] = (LightStyle);

/***/ }),

/***/ "./assets/js/pages/maps/GoogleMaps/Markers.js":
/*!****************************************************!*\
  !*** ./assets/js/pages/maps/GoogleMaps/Markers.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);
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





var Markers =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Markers, _React$Component);

  function Markers() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Markers);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Markers)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getMapOptions", function (maps) {
      return {
        fullscreenControl: true,
        mapTypeControl: true,
        mapTypeId: maps.MapTypeId.ROADMAP,
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: true
      };
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
        tag: "h5"
      }, "Markers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "card-subtitle text-muted"
      }, "Identify a location on a map.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: 300,
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
        options: _this.getMapOptions,
        bootstrapURLKeys: {
          key: "AIzaSyA-aWrwgr64q4b3TEZwQ0lkHI4lZK-moM4"
        },
        defaultCenter: _this.props.center,
        defaultZoom: _this.props.zoom,
        onGoogleApiLoaded: function onGoogleApiLoaded(_ref) {
          var map = _ref.map,
              maps = _ref.maps;
          return _this.renderMarkers(map, maps);
        }
      }))));
    });

    return _this;
  }

  _createClass(Markers, [{
    key: "renderMarkers",
    value: function renderMarkers(map, maps) {
      new maps.Marker({
        position: {
          lat: 40.712784,
          lng: -74.005941
        },
        map: map,
        title: "Hello World!"
      });
    }
  }]);

  return Markers;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Markers, "defaultProps", {
  center: {
    lat: 40.712784,
    lng: -74.005941
  },
  zoom: 14
});

/* harmony default export */ __webpack_exports__["default"] = (Markers);

/***/ }),

/***/ "./assets/js/pages/maps/GoogleMaps/Streetview.js":
/*!*******************************************************!*\
  !*** ./assets/js/pages/maps/GoogleMaps/Streetview.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Streetview =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Streetview, _React$Component);

  function Streetview() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Streetview);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Streetview)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getMapOptions", function () {
      return {
        fullscreenControl: true,
        mapTypeControl: true,
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: true
      };
    });

    _defineProperty(_assertThisInitialized(_this), "apiIsLoaded", function (map, maps) {
      if (map) {
        var panorama = new maps.StreetViewPanorama(react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(_this.refs.panorama), {
          position: {
            lat: 42.345573,
            lng: -71.098326
          },
          pov: {
            heading: 160,
            pitch: 0
          },
          visible: true
        });
        map.setStreetView(panorama);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
        tag: "h5"
      }, "Streetview"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "card-subtitle text-muted"
      }, "Panoramic 360 degree views from designated roads throughout its coverage area.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: 300,
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
        ref: "panorama",
        options: _this.getMapOptions,
        bootstrapURLKeys: {
          key: "AIzaSyA-aWrwgr64q4b3TEZwQ0lkHI4lZK-moM4"
        },
        defaultCenter: _this.props.center,
        defaultZoom: _this.props.zoom,
        onGoogleApiLoaded: function onGoogleApiLoaded(_ref) {
          var map = _ref.map,
              maps = _ref.maps;
          return _this.apiIsLoaded(map, maps);
        },
        yesIWantToUseGoogleMapApiInternals: true
      }))));
    });

    return _this;
  }

  return Streetview;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Streetview, "defaultProps", {
  center: {
    lat: 40.712784,
    lng: -74.005941
  },
  zoom: 14
});

/* harmony default export */ __webpack_exports__["default"] = (Streetview);

/***/ }),

/***/ "./assets/js/pages/maps/GoogleMaps/index.js":
/*!**************************************************!*\
  !*** ./assets/js/pages/maps/GoogleMaps/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Default */ "./assets/js/pages/maps/GoogleMaps/Default.js");
/* harmony import */ var _Hybrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hybrid */ "./assets/js/pages/maps/GoogleMaps/Hybrid.js");
/* harmony import */ var _LightStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LightStyle */ "./assets/js/pages/maps/GoogleMaps/LightStyle.js");
/* harmony import */ var _DarkStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DarkStyle */ "./assets/js/pages/maps/GoogleMaps/DarkStyle.js");
/* harmony import */ var _Streetview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Streetview */ "./assets/js/pages/maps/GoogleMaps/Streetview.js");
/* harmony import */ var _Markers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Markers */ "./assets/js/pages/maps/GoogleMaps/Markers.js");









var GoogleMaps = function GoogleMaps() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    className: "p-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "h3 mb-3"
  }, "Google Maps"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Default__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hybrid__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LightStyle__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Streetview__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Markers__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (GoogleMaps);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvbWFwcy9Hb29nbGVNYXBzL0RhcmtTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvbWFwcy9Hb29nbGVNYXBzL0RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL21hcHMvR29vZ2xlTWFwcy9IeWJyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL21hcHMvR29vZ2xlTWFwcy9MaWdodFN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9tYXBzL0dvb2dsZU1hcHMvTWFya2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvbWFwcy9Hb29nbGVNYXBzL1N0cmVldHZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL21hcHMvR29vZ2xlTWFwcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEYXJrU3R5bGUiLCJmdWxsc2NyZWVuQ29udHJvbCIsIm1hcFR5cGVDb250cm9sIiwic2NhbGVDb250cm9sIiwic2Nyb2xsd2hlZWwiLCJzdHJlZXRWaWV3Q29udHJvbCIsInN0eWxlcyIsImZlYXR1cmVUeXBlIiwiZWxlbWVudFR5cGUiLCJzdHlsZXJzIiwic2F0dXJhdGlvbiIsImNvbG9yIiwibGlnaHRuZXNzIiwidmlzaWJpbGl0eSIsIndlaWdodCIsImhlaWdodCIsIndpZHRoIiwiZ2V0TWFwT3B0aW9ucyIsImtleSIsInByb3BzIiwiY2VudGVyIiwiem9vbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibGF0IiwibG5nIiwiRGVmYXVsdCIsIm1hcHMiLCJtYXBUeXBlSWQiLCJNYXBUeXBlSWQiLCJST0FETUFQIiwiSHlicmlkIiwiSFlCUklEIiwiTGlnaHRTdHlsZSIsIk1hcmtlcnMiLCJtYXAiLCJyZW5kZXJNYXJrZXJzIiwiTWFya2VyIiwicG9zaXRpb24iLCJ0aXRsZSIsIlN0cmVldHZpZXciLCJwYW5vcmFtYSIsIlN0cmVldFZpZXdQYW5vcmFtYSIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJyZWZzIiwicG92IiwiaGVhZGluZyIsInBpdGNoIiwidmlzaWJsZSIsInNldFN0cmVldFZpZXciLCJhcGlJc0xvYWRlZCIsIkdvb2dsZU1hcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztJQUVNQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0VBU1ksWUFBTTtBQUNwQixhQUFPO0FBQ0xDLHlCQUFpQixFQUFFLElBRGQ7QUFFTEMsc0JBQWMsRUFBRSxJQUZYO0FBR0xDLG9CQUFZLEVBQUUsSUFIVDtBQUlMQyxtQkFBVyxFQUFFLEtBSlI7QUFLTEMseUJBQWlCLEVBQUUsSUFMZDtBQU1MQyxjQUFNLEVBQUUsQ0FDTjtBQUNFQyxxQkFBVyxFQUFFLEtBRGY7QUFFRUMscUJBQVcsRUFBRSxrQkFGZjtBQUdFQyxpQkFBTyxFQUFFLENBQ1A7QUFDRUMsc0JBQVUsRUFBRTtBQURkLFdBRE8sRUFJUDtBQUNFQyxpQkFBSyxFQUFFO0FBRFQsV0FKTyxFQU9QO0FBQ0VDLHFCQUFTLEVBQUU7QUFEYixXQVBPO0FBSFgsU0FETSxFQWdCTjtBQUNFTCxxQkFBVyxFQUFFLEtBRGY7QUFFRUMscUJBQVcsRUFBRSxvQkFGZjtBQUdFQyxpQkFBTyxFQUFFLENBQ1A7QUFDRUksc0JBQVUsRUFBRTtBQURkLFdBRE8sRUFJUDtBQUNFRixpQkFBSyxFQUFFO0FBRFQsV0FKTyxFQU9QO0FBQ0VDLHFCQUFTLEVBQUU7QUFEYixXQVBPO0FBSFgsU0FoQk0sRUErQk47QUFDRUwscUJBQVcsRUFBRSxLQURmO0FBRUVDLHFCQUFXLEVBQUUsYUFGZjtBQUdFQyxpQkFBTyxFQUFFLENBQ1A7QUFDRUksc0JBQVUsRUFBRTtBQURkLFdBRE87QUFIWCxTQS9CTSxFQXdDTjtBQUNFTixxQkFBVyxFQUFFLGdCQURmO0FBRUVDLHFCQUFXLEVBQUUsZUFGZjtBQUdFQyxpQkFBTyxFQUFFLENB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LEM7O0FBa0VUbUIseUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNWSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQ2pCLDJEQUFDLG9EQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFpQixhQUFTLEVBQUM7QUFBM0IsS0FDRTtBQUFJLGFBQVMsRUFBQztBQUFkLG1CQURGLEVBR0UsMkRBQUMsOENBQUQsUUFDRSwyREFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQztBQUFSLEtBQ0UsMkRBQUMsZ0RBQUQsT0FERixDQURGLEVBSUUsMkRBQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUM7QUFBUixLQUNFLDJEQUFDLCtDQUFELE9BREYsQ0FKRixFQU9FLDJEQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDO0FBQVIsS0FDRSwyREFBQyxtREFBRCxPQURGLENBUEYsRUFVRSwyREFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQztBQUFSLEtBQ0UsMkRBQUMsa0RBQUQsT0FERixDQVZGLEVBYUUsMkRBQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUM7QUFBUixLQUNFLDJEQUFDLG1EQUFELE9BREYsQ0FiRixFQWdCRSwyREFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQztBQUFSLEtBQ0UsMkRBQUMsZ0RBQUQsT0FERixDQWhCRixDQUhGLENBRGlCO0FBQUEsQ0FBbkI7O0FBMkJlQSx5RUFBZixFIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQm9keSwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tIFwiZ29vZ2xlLW1hcC1yZWFjdFwiO1xyXG5cclxuY2xhc3MgRGFya1N0eWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2VudGVyOiB7XHJcbiAgICAgIGxhdDogNDAuNzEyNzg0LFxyXG4gICAgICBsbmc6IC03NC4wMDU5NDFcclxuICAgIH0sXHJcbiAgICB6b29tOiAxNFxyXG4gIH07XHJcblxyXG4gIGdldE1hcE9wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmdWxsc2NyZWVuQ29udHJvbDogdHJ1ZSxcclxuICAgICAgbWFwVHlwZUNvbnRyb2w6IHRydWUsXHJcbiAgICAgIHNjYWxlQ29udHJvbDogdHJ1ZSxcclxuICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgICBzdHJlZXRWaWV3Q29udHJvbDogdHJ1ZSxcclxuICAgICAgc3R5bGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwiYWxsXCIsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzYXR1cmF0aW9uOiAzNlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWdodG5lc3M6IDQwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcImFsbFwiLFxyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBcIm9uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGlnaHRuZXNzOiAxNlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJhbGxcIixcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBcIm9mZlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5maWxsXCIsXHJcbiAgICAgICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxpZ2h0bmVzczogMjBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwiYWRtaW5pc3RyYXRpdmVcIixcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWdodG5lc3M6IDE3XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB3ZWlnaHQ6IDEuMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJsYW5kc2NhcGVcIixcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxpZ2h0bmVzczogMjBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwicG9pXCIsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWdodG5lc3M6IDIxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWdodG5lc3M6IDE3XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxpZ2h0bmVzczogMjlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHdlaWdodDogMC4yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxpZ2h0bmVzczogMThcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5sb2NhbFwiLFxyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgIHN0eWxlcnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGlnaHRuZXNzOiAxNlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWdodG5lc3M6IDE5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcIndhdGVyXCIsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWdodG5lc3M6IDE3XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyID0gKCkgPT4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5EYXJrIFN0eWxlPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPkRhcmsgY29sb3Igc2NoZW1lLjwvaDY+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldE1hcE9wdGlvbnN9XHJcbiAgICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3tcclxuICAgICAgICAgICAgICBrZXk6IFwiQUl6YVN5QS1hV3J3Z3I2NHE0YjNURVp3UTBsa0hJNGxaSy1tb000XCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZGVmYXVsdENlbnRlcj17dGhpcy5wcm9wcy5jZW50ZXJ9XHJcbiAgICAgICAgICAgIGRlZmF1bHRab29tPXt0aGlzLnByb3BzLnpvb219XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhcmtTdHlsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQm9keSwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tIFwiZ29vZ2xlLW1hcC1yZWFjdFwiO1xyXG5cclxuY2xhc3MgRGVmYXVsdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNlbnRlcjoge1xyXG4gICAgICBsYXQ6IDQwLjcxMjc4NCxcclxuICAgICAgbG5nOiAtNzQuMDA1OTQxXHJcbiAgICB9LFxyXG4gICAgem9vbTogMTRcclxuICB9O1xyXG5cclxuICBnZXRNYXBPcHRpb25zID0gbWFwcyA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmdWxsc2NyZWVuQ29udHJvbDogdHJ1ZSxcclxuICAgICAgbWFwVHlwZUNvbnRyb2w6IHRydWUsXHJcbiAgICAgIG1hcFR5cGVJZDogbWFwcy5NYXBUeXBlSWQuUk9BRE1BUCxcclxuICAgICAgc2NhbGVDb250cm9sOiB0cnVlLFxyXG4gICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICAgIHN0cmVldFZpZXdDb250cm9sOiB0cnVlXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJlbmRlciA9ICgpID0+IChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+RGVmYXVsdCBNYXA8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBEaXNwbGF5cyB0aGUgZGVmYXVsdCByb2FkIG1hcCB2aWV3LlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldE1hcE9wdGlvbnN9XHJcbiAgICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3tcclxuICAgICAgICAgICAgICBrZXk6IFwiQUl6YVN5QS1hV3J3Z3I2NHE0YjNURVp3UTBsa0hJNGxaSy1tb000XCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZGVmYXVsdENlbnRlcj17dGhpcy5wcm9wcy5jZW50ZXJ9XHJcbiAgICAgICAgICAgIGRlZmF1bHRab29tPXt0aGlzLnByb3BzLnpvb219XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlZmF1bHQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSBcImdvb2dsZS1tYXAtcmVhY3RcIjtcclxuXHJcbmNsYXNzIEh5YnJpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNlbnRlcjoge1xyXG4gICAgICBsYXQ6IDQwLjcxMjc4NCxcclxuICAgICAgbG5nOiAtNzQuMDA1OTQxXHJcbiAgICB9LFxyXG4gICAgem9vbTogMTRcclxuICB9O1xyXG5cclxuICBnZXRNYXBPcHRpb25zID0gbWFwcyA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmdWxsc2NyZWVuQ29udHJvbDogdHJ1ZSxcclxuICAgICAgbWFwVHlwZUNvbnRyb2w6IHRydWUsXHJcbiAgICAgIG1hcFR5cGVJZDogbWFwcy5NYXBUeXBlSWQuSFlCUklELFxyXG4gICAgICBzY2FsZUNvbnRyb2w6IHRydWUsXHJcbiAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IHRydWVcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyID0gKCkgPT4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5IeWJyaWQgTWFwPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgRGlzcGxheXMgYSBtaXh0dXJlIG9mIG5vcm1hbCBhbmQgc2F0ZWxsaXRlIHZpZXdzLlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldE1hcE9wdGlvbnN9XHJcbiAgICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3tcclxuICAgICAgICAgICAgICBrZXk6IFwiQUl6YVN5QS1hV3J3Z3I2NHE0YjNURVp3UTBsa0hJNGxaSy1tb000XCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZGVmYXVsdENlbnRlcj17dGhpcy5wcm9wcy5jZW50ZXJ9XHJcbiAgICAgICAgICAgIGRlZmF1bHRab29tPXt0aGlzLnByb3BzLnpvb219XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEh5YnJpZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQm9keSwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tIFwiZ29vZ2xlLW1hcC1yZWFjdFwiO1xyXG5cclxuY2xhc3MgTGlnaHRTdHlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNlbnRlcjoge1xyXG4gICAgICBsYXQ6IDQwLjcxMjc4NCxcclxuICAgICAgbG5nOiAtNzQuMDA1OTQxXHJcbiAgICB9LFxyXG4gICAgem9vbTogMTRcclxuICB9O1xyXG5cclxuICBnZXRNYXBPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IHRydWUsXHJcbiAgICAgIG1hcFR5cGVDb250cm9sOiB0cnVlLFxyXG4gICAgICBzY2FsZUNvbnRyb2w6IHRydWUsXHJcbiAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IHRydWUsXHJcbiAgICAgIHN0eWxlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcIndhdGVyXCIsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2U5ZTllOVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWdodG5lc3M6IDE3XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcImxhbmRzY2FwZVwiLFxyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgIHN0eWxlcnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmNWY1ZjVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGlnaHRuZXNzOiAyMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICAgIHN0eWxlcnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGlnaHRuZXNzOiAxN1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWdodG5lc3M6IDI5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB3ZWlnaHQ6IDAuMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmFydGVyaWFsXCIsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWdodG5lc3M6IDE4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQubG9jYWxcIixcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxpZ2h0bmVzczogMTZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwicG9pXCIsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2Y1ZjVmNVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWdodG5lc3M6IDIxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInBvaS5wYXJrXCIsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2RlZGVkZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWdodG5lc3M6IDIxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxpZ2h0bmVzczogMTZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2F0dXJhdGlvbjogMzZcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMzMzMzMzNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGlnaHRuZXNzOiA0MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJvZmZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2YyZjJmMlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWdodG5lc3M6IDE5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5maWxsXCIsXHJcbiAgICAgICAgICBzdHlsZXJzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjZmVmZWZlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxpZ2h0bmVzczogMjBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwiYWRtaW5pc3RyYXRpdmVcIixcclxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgICAgICAgc3R5bGVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZlZmVmZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWdodG5lc3M6IDE3XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB3ZWlnaHQ6IDEuMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJlbmRlciA9ICgpID0+IChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+TGlnaHQgU3R5bGU8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+TGlnaHQgY29sb3Igc2NoZW1lLjwvaDY+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldE1hcE9wdGlvbnN9XHJcbiAgICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3tcclxuICAgICAgICAgICAgICBrZXk6IFwiQUl6YVN5QS1hV3J3Z3I2NHE0YjNURVp3UTBsa0hJNGxaSy1tb000XCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZGVmYXVsdENlbnRlcj17dGhpcy5wcm9wcy5jZW50ZXJ9XHJcbiAgICAgICAgICAgIGRlZmF1bHRab29tPXt0aGlzLnByb3BzLnpvb219XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZ2h0U3R5bGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSBcImdvb2dsZS1tYXAtcmVhY3RcIjtcclxuXHJcbmNsYXNzIE1hcmtlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjZW50ZXI6IHtcclxuICAgICAgbGF0OiA0MC43MTI3ODQsXHJcbiAgICAgIGxuZzogLTc0LjAwNTk0MVxyXG4gICAgfSxcclxuICAgIHpvb206IDE0XHJcbiAgfTtcclxuXHJcbiAgZ2V0TWFwT3B0aW9ucyA9IG1hcHMgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IHRydWUsXHJcbiAgICAgIG1hcFR5cGVDb250cm9sOiB0cnVlLFxyXG4gICAgICBtYXBUeXBlSWQ6IG1hcHMuTWFwVHlwZUlkLlJPQURNQVAsXHJcbiAgICAgIHNjYWxlQ29udHJvbDogdHJ1ZSxcclxuICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgICBzdHJlZXRWaWV3Q29udHJvbDogdHJ1ZVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZW5kZXJNYXJrZXJzKG1hcCwgbWFwcykge1xyXG4gICAgbmV3IG1hcHMuTWFya2VyKHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICBsYXQ6IDQwLjcxMjc4NCxcclxuICAgICAgICBsbmc6IC03NC4wMDU5NDFcclxuICAgICAgfSxcclxuICAgICAgbWFwLFxyXG4gICAgICB0aXRsZTogXCJIZWxsbyBXb3JsZCFcIlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgPSAoKSA9PiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPk1hcmtlcnM8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBJZGVudGlmeSBhIGxvY2F0aW9uIG9uIGEgbWFwLlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldE1hcE9wdGlvbnN9XHJcbiAgICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3tcclxuICAgICAgICAgICAgICBrZXk6IFwiQUl6YVN5QS1hV3J3Z3I2NHE0YjNURVp3UTBsa0hJNGxaSy1tb000XCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZGVmYXVsdENlbnRlcj17dGhpcy5wcm9wcy5jZW50ZXJ9XHJcbiAgICAgICAgICAgIGRlZmF1bHRab29tPXt0aGlzLnByb3BzLnpvb219XHJcbiAgICAgICAgICAgIG9uR29vZ2xlQXBpTG9hZGVkPXsoeyBtYXAsIG1hcHMgfSkgPT4gdGhpcy5yZW5kZXJNYXJrZXJzKG1hcCwgbWFwcyl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcmtlcnM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSBcImdvb2dsZS1tYXAtcmVhY3RcIjtcclxuXHJcbmNsYXNzIFN0cmVldHZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjZW50ZXI6IHtcclxuICAgICAgbGF0OiA0MC43MTI3ODQsXHJcbiAgICAgIGxuZzogLTc0LjAwNTk0MVxyXG4gICAgfSxcclxuICAgIHpvb206IDE0XHJcbiAgfTtcclxuXHJcbiAgZ2V0TWFwT3B0aW9ucyA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiB0cnVlLFxyXG4gICAgICBtYXBUeXBlQ29udHJvbDogdHJ1ZSxcclxuICAgICAgc2NhbGVDb250cm9sOiB0cnVlLFxyXG4gICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICAgIHN0cmVldFZpZXdDb250cm9sOiB0cnVlXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGFwaUlzTG9hZGVkID0gKG1hcCwgbWFwcykgPT4ge1xyXG4gICAgaWYgKG1hcCkge1xyXG4gICAgICBjb25zdCBwYW5vcmFtYSA9IG5ldyBtYXBzLlN0cmVldFZpZXdQYW5vcmFtYShcclxuICAgICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGFub3JhbWEpLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIGxhdDogNDIuMzQ1NTczLFxyXG4gICAgICAgICAgICBsbmc6IC03MS4wOTgzMjZcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwb3Y6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogMTYwLFxyXG4gICAgICAgICAgICBwaXRjaDogMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZpc2libGU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIG1hcC5zZXRTdHJlZXRWaWV3KHBhbm9yYW1hKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZW5kZXIgPSAoKSA9PiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPlN0cmVldHZpZXc8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBQYW5vcmFtaWMgMzYwIGRlZ3JlZSB2aWV3cyBmcm9tIGRlc2lnbmF0ZWQgcm9hZHMgdGhyb3VnaG91dCBpdHNcclxuICAgICAgICAgIGNvdmVyYWdlIGFyZWEuXHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDMwMCwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPEdvb2dsZU1hcFJlYWN0XHJcbiAgICAgICAgICAgIHJlZj17XCJwYW5vcmFtYVwifVxyXG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldE1hcE9wdGlvbnN9XHJcbiAgICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3tcclxuICAgICAgICAgICAgICBrZXk6IFwiQUl6YVN5QS1hV3J3Z3I2NHE0YjNURVp3UTBsa0hJNGxaSy1tb000XCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZGVmYXVsdENlbnRlcj17dGhpcy5wcm9wcy5jZW50ZXJ9XHJcbiAgICAgICAgICAgIGRlZmF1bHRab29tPXt0aGlzLnByb3BzLnpvb219XHJcbiAgICAgICAgICAgIG9uR29vZ2xlQXBpTG9hZGVkPXsoeyBtYXAsIG1hcHMgfSkgPT4gdGhpcy5hcGlJc0xvYWRlZChtYXAsIG1hcHMpfVxyXG4gICAgICAgICAgICB5ZXNJV2FudFRvVXNlR29vZ2xlTWFwQXBpSW50ZXJuYWxzPXt0cnVlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkQm9keT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHJlZXR2aWV3O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IERlZmF1bHQgZnJvbSBcIi4vRGVmYXVsdFwiO1xyXG5pbXBvcnQgSHlicmlkIGZyb20gXCIuL0h5YnJpZFwiO1xyXG5pbXBvcnQgTGlnaHRTdHlsZSBmcm9tIFwiLi9MaWdodFN0eWxlXCI7XHJcbmltcG9ydCBEYXJrU3R5bGUgZnJvbSBcIi4vRGFya1N0eWxlXCI7XHJcbmltcG9ydCBTdHJlZXR2aWV3IGZyb20gXCIuL1N0cmVldHZpZXdcIjtcclxuaW1wb3J0IE1hcmtlcnMgZnJvbSBcIi4vTWFya2Vyc1wiO1xyXG5cclxuY29uc3QgR29vZ2xlTWFwcyA9ICgpID0+IChcclxuICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgPGgxIGNsYXNzTmFtZT1cImgzIG1iLTNcIj5Hb29nbGUgTWFwczwvaDE+XHJcblxyXG4gICAgPFJvdz5cclxuICAgICAgPENvbCBsZz1cIjZcIj5cclxuICAgICAgICA8RGVmYXVsdCAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBsZz1cIjZcIj5cclxuICAgICAgICA8SHlicmlkIC8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIGxnPVwiNlwiPlxyXG4gICAgICAgIDxMaWdodFN0eWxlIC8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIGxnPVwiNlwiPlxyXG4gICAgICAgIDxEYXJrU3R5bGUgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgPFN0cmVldHZpZXcgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgPE1hcmtlcnMgLz5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L1Jvdz5cclxuICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvb2dsZU1hcHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=