(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/@mapbox/point-geometry/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@mapbox/point-geometry/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Point;

/**
 * A standalone point geometry with useful accessor, comparison, and
 * modification methods.
 *
 * @class Point
 * @param {Number} x the x-coordinate. this could be longitude or screen
 * pixels, or any other sort of unit.
 * @param {Number} y the y-coordinate. this could be latitude or screen
 * pixels, or any other sort of unit.
 * @example
 * var point = new Point(-77, 38);
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype = {

    /**
     * Clone this point, returning a new point that can be modified
     * without affecting the old one.
     * @return {Point} the clone
     */
    clone: function() { return new Point(this.x, this.y); },

    /**
     * Add this point's x & y coordinates to another point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    add:     function(p) { return this.clone()._add(p); },

    /**
     * Subtract this point's x & y coordinates to from point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    sub:     function(p) { return this.clone()._sub(p); },

    /**
     * Multiply this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    multByPoint:    function(p) { return this.clone()._multByPoint(p); },

    /**
     * Divide this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    divByPoint:     function(p) { return this.clone()._divByPoint(p); },

    /**
     * Multiply this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    mult:    function(k) { return this.clone()._mult(k); },

    /**
     * Divide this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    div:     function(k) { return this.clone()._div(k); },

    /**
     * Rotate this point around the 0, 0 origin by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @return {Point} output point
     */
    rotate:  function(a) { return this.clone()._rotate(a); },

    /**
     * Rotate this point around p point by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @param {Point} p Point to rotate around
     * @return {Point} output point
     */
    rotateAround:  function(a,p) { return this.clone()._rotateAround(a,p); },

    /**
     * Multiply this point by a 4x1 transformation matrix
     * @param {Array<Number>} m transformation matrix
     * @return {Point} output point
     */
    matMult: function(m) { return this.clone()._matMult(m); },

    /**
     * Calculate this point but as a unit vector from 0, 0, meaning
     * that the distance from the resulting point to the 0, 0
     * coordinate will be equal to 1 and the angle from the resulting
     * point to the 0, 0 coordinate will be the same as before.
     * @return {Point} unit vector point
     */
    unit:    function() { return this.clone()._unit(); },

    /**
     * Compute a perpendicular point, where the new y coordinate
     * is the old x coordinate and the new x coordinate is the old y
     * coordinate multiplied by -1
     * @return {Point} perpendicular point
     */
    perp:    function() { return this.clone()._perp(); },

    /**
     * Return a version of this point with the x & y coordinates
     * rounded to integers.
     * @return {Point} rounded point
     */
    round:   function() { return this.clone()._round(); },

    /**
     * Return the magitude of this point: this is the Euclidean
     * distance from the 0, 0 coordinate to this point's x and y
     * coordinates.
     * @return {Number} magnitude
     */
    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    /**
     * Judge whether this point is equal to another point, returning
     * true or false.
     * @param {Point} other the other point
     * @return {boolean} whether the points are equal
     */
    equals: function(other) {
        return this.x === other.x &&
               this.y === other.y;
    },

    /**
     * Calculate the distance from this point to another point
     * @param {Point} p the other point
     * @return {Number} distance
     */
    dist: function(p) {
        return Math.sqrt(this.distSqr(p));
    },

    /**
     * Calculate the distance from this point to another point,
     * without the square root step. Useful if you're comparing
     * relative distances.
     * @param {Point} p the other point
     * @return {Number} distance
     */
    distSqr: function(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    /**
     * Get the angle from the 0, 0 coordinate to this point, in radians
     * coordinates.
     * @return {Number} angle
     */
    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    /**
     * Get the angle from this point to another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleTo: function(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    /**
     * Get the angle between this point and another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleWith: function(b) {
        return this.angleWithSep(b.x, b.y);
    },

    /*
     * Find the angle of the two vectors, solving the formula for
     * the cross product a x b = |a||b|sin(θ) for θ.
     * @param {Number} x the x-coordinate
     * @param {Number} y the y-coordinate
     * @return {Number} the angle in radians
     */
    angleWithSep: function(x, y) {
        return Math.atan2(
            this.x * y - this.y * x,
            this.x * x + this.y * y);
    },

    _matMult: function(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _multByPoint: function(p) {
        this.x *= p.x;
        this.y *= p.y;
        return this;
    },

    _divByPoint: function(p) {
        this.x /= p.x;
        this.y /= p.y;
        return this;
    },

    _unit: function() {
        this._div(this.mag());
        return this;
    },

    _perp: function() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _rotateAround: function(angle, p) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = p.x + cos * (this.x - p.x) - sin * (this.y - p.y),
            y = p.y + sin * (this.x - p.x) + cos * (this.y - p.y);
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

/**
 * Construct a point from an array if necessary, otherwise if the input
 * is already a Point, or an unknown type, return it unchanged
 * @param {Array<Number>|Point|*} a any kind of input value
 * @return {Point} constructed point, or passed-through value.
 * @example
 * // this
 * var point = Point.convert([0, 1]);
 * // is equivalent to
 * var point = new Point(0, 1);
 */
Point.convert = function (a) {
    if (a instanceof Point) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point(a[0], a[1]);
    }
    return a;
};


/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

//
// We store our EE objects in a plain object whose properties are event names.
// If `Object.create(null)` is not supported we prefix the event names with a
// `~` to make sure that the built-in object properties are not overridden or
// used as an attack vector.
// We also assume that `Object.create(null)` is available when the event name
// is an ES6 Symbol.
//
var prefix = typeof Object.create !== 'function' ? '~' : false;

/**
 * Representation of a single EventEmitter function.
 *
 * @param {Function} fn Event handler to be called.
 * @param {Mixed} context Context for function execution.
 * @param {Boolean} [once=false] Only emit once
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal EventEmitter interface that is molded against the Node.js
 * EventEmitter interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() { /* Nothing to set */ }

/**
 * Hold the assigned EventEmitters by name.
 *
 * @type {Object}
 * @private
 */
EventEmitter.prototype._events = undefined;

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var events = this._events
    , names = []
    , name;

  if (!events) return names;

  for (name in events) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return a list of assigned event listeners.
 *
 * @param {String} event The events that should be listed.
 * @param {Boolean} exists We only need to know if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events && this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Emit an event to all registered event listeners.
 *
 * @param {String} event The name of the event.
 * @returns {Boolean} Indication if we've emitted an event.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events || !this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if ('function' === typeof listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Register a new EventListener for the given event.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} [context=this] The context of the function.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events) this._events = prefix ? {} : Object.create(null);
  if (!this._events[evt]) this._events[evt] = listener;
  else {
    if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [
      this._events[evt], listener
    ];
  }

  return this;
};

/**
 * Add an EventListener that's only called once.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} [context=this] The context of the function.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events) this._events = prefix ? {} : Object.create(null);
  if (!this._events[evt]) this._events[evt] = listener;
  else {
    if (!this._events[evt].fn) this._events[evt].push(listener);
    else this._events[evt] = [
      this._events[evt], listener
    ];
  }

  return this;
};

/**
 * Remove event listeners.
 *
 * @param {String} event The event we want to remove.
 * @param {Function} fn The listener that we need to find.
 * @param {Mixed} context Only remove listeners matching this context.
 * @param {Boolean} once Only remove once listeners.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events || !this._events[evt]) return this;

  var listeners = this._events[evt]
    , events = [];

  if (fn) {
    if (listeners.fn) {
      if (
           listeners.fn !== fn
        || (once && !listeners.once)
        || (context && listeners.context !== context)
      ) {
        events.push(listeners);
      }
    } else {
      for (var i = 0, length = listeners.length; i < length; i++) {
        if (
             listeners[i].fn !== fn
          || (once && !listeners[i].once)
          || (context && listeners[i].context !== context)
        ) {
          events.push(listeners[i]);
        }
      }
    }
  }

  //
  // Reset the array, or remove it completely if we have no more listeners.
  //
  if (events.length) {
    this._events[evt] = events.length === 1 ? events[0] : events;
  } else {
    delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners or only the listeners for the specified event.
 *
 * @param {String} event The event want to remove all listeners for.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  if (!this._events) return this;

  if (event) delete this._events[prefix ? prefix + event : event];
  else this._events = prefix ? {} : Object.create(null);

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/google-map-react/lib/google_heatmap.js":
/*!*************************************************************!*\
  !*** ./node_modules/google-map-react/lib/google_heatmap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var generateHeatmap = exports.generateHeatmap = function generateHeatmap(instance, _ref) {
  var positions = _ref.positions;
  return new instance.visualization.HeatmapLayer({
    data: positions.reduce(function (acc, _ref2) {
      var lat = _ref2.lat,
          lng = _ref2.lng,
          _ref2$weight = _ref2.weight,
          weight = _ref2$weight === undefined ? 1 : _ref2$weight;

      acc.push({
        location: new instance.LatLng(lat, lng),
        weight: weight
      });
      return acc;
    }, [])
  });
};

var optionsHeatmap = exports.optionsHeatmap = function optionsHeatmap(instance, _ref3) {
  var _ref3$options = _ref3.options,
      options = _ref3$options === undefined ? {} : _ref3$options;
  return Object.keys(options).map(function (option) {
    return instance.set(option, options[option]);
  });
};

/***/ }),

/***/ "./node_modules/google-map-react/lib/google_map.js":
/*!*********************************************************!*\
  !*** ./node_modules/google-map-react/lib/google_map.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _google_map_map = __webpack_require__(/*! ./google_map_map */ "./node_modules/google-map-react/lib/google_map_map.js");

var _google_map_map2 = _interopRequireDefault(_google_map_map);

var _marker_dispatcher = __webpack_require__(/*! ./marker_dispatcher */ "./node_modules/google-map-react/lib/marker_dispatcher.js");

var _marker_dispatcher2 = _interopRequireDefault(_marker_dispatcher);

var _google_map_markers = __webpack_require__(/*! ./google_map_markers */ "./node_modules/google-map-react/lib/google_map_markers.js");

var _google_map_markers2 = _interopRequireDefault(_google_map_markers);

var _google_map_markers_prerender = __webpack_require__(/*! ./google_map_markers_prerender */ "./node_modules/google-map-react/lib/google_map_markers_prerender.js");

var _google_map_markers_prerender2 = _interopRequireDefault(_google_map_markers_prerender);

var _google_heatmap = __webpack_require__(/*! ./google_heatmap */ "./node_modules/google-map-react/lib/google_heatmap.js");

var _google_map_loader = __webpack_require__(/*! ./loaders/google_map_loader */ "./node_modules/google-map-react/lib/loaders/google_map_loader.js");

var _google_map_loader2 = _interopRequireDefault(_google_map_loader);

var _geo = __webpack_require__(/*! ./utils/geo */ "./node_modules/google-map-react/lib/utils/geo.js");

var _geo2 = _interopRequireDefault(_geo);

var _raf = __webpack_require__(/*! ./utils/raf */ "./node_modules/google-map-react/lib/utils/raf.js");

var _raf2 = _interopRequireDefault(_raf);

var _pick = __webpack_require__(/*! ./utils/pick */ "./node_modules/google-map-react/lib/utils/pick.js");

var _pick2 = _interopRequireDefault(_pick);

var _omit = __webpack_require__(/*! ./utils/omit */ "./node_modules/google-map-react/lib/utils/omit.js");

var _omit2 = _interopRequireDefault(_omit);

var _log = __webpack_require__(/*! ./utils/math/log2 */ "./node_modules/google-map-react/lib/utils/math/log2.js");

var _log2 = _interopRequireDefault(_log);

var _isEmpty = __webpack_require__(/*! ./utils/isEmpty */ "./node_modules/google-map-react/lib/utils/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isNumber = __webpack_require__(/*! ./utils/isNumber */ "./node_modules/google-map-react/lib/utils/isNumber.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _detect = __webpack_require__(/*! ./utils/detect */ "./node_modules/google-map-react/lib/utils/detect.js");

var _detect2 = _interopRequireDefault(_detect);

var _shallowEqual = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/google-map-react/lib/utils/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _isPlainObject = __webpack_require__(/*! ./utils/isPlainObject */ "./node_modules/google-map-react/lib/utils/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isArraysEqualEps = __webpack_require__(/*! ./utils/isArraysEqualEps */ "./node_modules/google-map-react/lib/utils/isArraysEqualEps.js");

var _isArraysEqualEps2 = _interopRequireDefault(_isArraysEqualEps);

var _detectElementResize = __webpack_require__(/*! ./utils/detectElementResize */ "./node_modules/google-map-react/lib/utils/detectElementResize.js");

var _detectElementResize2 = _interopRequireDefault(_detectElementResize);

var _passiveEvents = __webpack_require__(/*! ./utils/passiveEvents */ "./node_modules/google-map-react/lib/utils/passiveEvents.js");

var _passiveEvents2 = _interopRequireDefault(_passiveEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies, react/forbid-prop-types, react/no-find-dom-node, no-console */


// helpers


// loaders


// utils


// consts
var kEPS = 0.00001;
var K_GOOGLE_TILE_SIZE = 256;
// real minZoom calculated here _getMinZoom
var K_IDLE_TIMEOUT = 100;
var K_IDLE_CLICK_TIMEOUT = 300;
var DEFAULT_MIN_ZOOM = 3;
// Starting with version 3.32, the maps API calls `draw()` each frame during
// a zoom animation.
var DRAW_CALLED_DURING_ANIMATION_VERSION = 32;
var IS_REACT_16 = _reactDom2.default.createPortal !== undefined;

var createPortal = IS_REACT_16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;

function defaultOptions_() /* maps */{
  return {
    overviewMapControl: false,
    streetViewControl: false,
    rotateControl: true,
    mapTypeControl: false,
    // disable poi
    styles: [{
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }],
    minZoom: DEFAULT_MIN_ZOOM // dynamically recalculted if possible during init
  };
}

var latLng2Obj = function latLng2Obj(latLng) {
  return (0, _isPlainObject2.default)(latLng) ? latLng : { lat: latLng[0], lng: latLng[1] };
};

var _checkMinZoom = function _checkMinZoom(zoom, minZoom) {
  if (true) {
    if (zoom < minZoom) {
      console.warn('GoogleMap: ' + // eslint-disable-line
      'minZoom option is less than recommended ' + 'minZoom option for your map sizes.\n' + 'overrided to value ' + minZoom);
    }
  }

  if (minZoom < zoom) {
    return zoom;
  }
  return minZoom;
};

var isFullScreen = function isFullScreen() {
  return document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement;
};

var GoogleMap = function (_Component) {
  _inherits(GoogleMap, _Component);

  // eslint-disable-line

  function GoogleMap(props) {
    _classCallCheck(this, GoogleMap);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this._getMinZoom = function () {
      if (_this.geoService_.getWidth() > 0 || _this.geoService_.getHeight() > 0) {
        var tilesPerWidth = Math.ceil(_this.geoService_.getWidth() / K_GOOGLE_TILE_SIZE) + 2;
        var tilesPerHeight = Math.ceil(_this.geoService_.getHeight() / K_GOOGLE_TILE_SIZE) + 2;
        var maxTilesPerDim = Math.max(tilesPerWidth, tilesPerHeight);
        return Math.ceil((0, _log2.default)(maxTilesPerDim));
      }
      return DEFAULT_MIN_ZOOM;
    };

    _this._computeMinZoom = function (minZoom) {
      if (!(0, _isEmpty2.default)(minZoom)) {
        return minZoom;
      }
      return _this._getMinZoom();
    };

    _this._mapDomResizeCallback = function () {
      _this.resetSizeOnIdle_ = true;
      if (_this.maps_) {
        var originalCenter = _this.props.center || _this.props.defaultCenter;
        var currentCenter = _this.map_.getCenter();
        _this.maps_.event.trigger(_this.map_, 'resize');
        _this.map_.setCenter(_this.props.resetBoundsOnResize ? originalCenter : currentCenter);
      }
    };

    _this._setLayers = function (layerTypes) {
      layerTypes.forEach(function (layerType) {
        _this.layers_[layerType] = new _this.maps_[layerType]();
        _this.layers_[layerType].setMap(_this.map_);
      });
    };

    _this._renderPortal = function () {
      return _react2.default.createElement(_google_map_markers2.default, {
        experimental: _this.props.experimental,
        onChildClick: _this._onChildClick,
        onChildMouseDown: _this._onChildMouseDown,
        onChildMouseEnter: _this._onChildMouseEnter,
        onChildMouseLeave: _this._onChildMouseLeave,
        geoService: _this.geoService_,
        insideMapPanes: true,
        distanceToMouse: _this.props.distanceToMouse,
        getHoverDistance: _this._getHoverDistance,
        dispatcher: _this.markersDispatcher_
      });
    };

    _this._initMap = function () {
      // only initialize the map once
      if (_this.initialized_) {
        return;
      }
      _this.initialized_ = true;

      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);

      _this._onBoundsChanged(); // now we can calculate map bounds center etc...

      var bootstrapURLKeys = _extends({}, _this.props.apiKey && { key: _this.props.apiKey }, _this.props.bootstrapURLKeys);

      _this.props.googleMapLoader(bootstrapURLKeys, _this.props.heatmapLibrary).then(function (maps) {
        if (!_this.mounted_) {
          return;
        }

        var centerLatLng = _this.geoService_.getCenter();

        var propsOptions = {
          zoom: _this.props.zoom || _this.props.defaultZoom,
          center: new maps.LatLng(centerLatLng.lat, centerLatLng.lng)
        };

        // Start Heatmap
        if (_this.props.heatmap.positions) {
          Object.assign(_this, {
            heatmap: (0, _google_heatmap.generateHeatmap)(maps, _this.props.heatmap)
          });
          (0, _google_heatmap.optionsHeatmap)(_this.heatmap, _this.props.heatmap);
        }
        // End Heatmap

        // prevent to exapose full api
        // next props must be exposed (console.log(Object.keys(pick(maps, isPlainObject))))
        // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
        // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition",
        // "SymbolPath", "ZoomControlStyle",
        // "event", "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem",
        // "DistanceMatrixStatus",
        // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType",
        // "GeocoderStatus", "KmlLayerStatus",
        // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference",
        // "TravelMode", "UnitSystem"
        var mapPlainObjects = (0, _pick2.default)(maps, _isPlainObject2.default);
        var options = typeof _this.props.options === 'function' ? _this.props.options(mapPlainObjects) : _this.props.options;
        var defaultOptions = defaultOptions_(mapPlainObjects);

        var draggableOptions = !(0, _isEmpty2.default)(_this.props.draggable) && {
          draggable: _this.props.draggable
        };

        var minZoom = _this._computeMinZoom(options.minZoom);
        _this.minZoom_ = minZoom;

        var preMapOptions = _extends({}, defaultOptions, {
          minZoom: minZoom
        }, options, propsOptions);

        _this.defaultDraggableOption_ = !(0, _isEmpty2.default)(preMapOptions.draggable) ? preMapOptions.draggable : _this.defaultDraggableOption_;

        var mapOptions = _extends({}, preMapOptions, draggableOptions);

        mapOptions.minZoom = _checkMinZoom(mapOptions.minZoom, minZoom);

        var map = new maps.Map(_reactDom2.default.findDOMNode(_this.googleMapDom_), mapOptions);

        _this.map_ = map;
        _this.maps_ = maps;

        _this._setLayers(_this.props.layerTypes);

        // Parse `google.maps.version` to capture the major version number.
        var versionMatch = maps.version.match(/^3\.(\d+)\./);
        // The major version is the first (and only) captured group.
        var mapsVersion = versionMatch && Number(versionMatch[1]);

        // render in overlay
        var this_ = _this;
        var overlay = Object.assign(new maps.OverlayView(), {
          onAdd: function onAdd() {
            var K_MAX_WIDTH = typeof screen !== 'undefined' ? screen.width + 'px' : '2000px';
            var K_MAX_HEIGHT = typeof screen !== 'undefined' ? screen.height + 'px' : '2000px';

            var div = document.createElement('div');
            div.style.backgroundColor = 'transparent';
            div.style.position = 'absolute';
            div.style.left = '0px';
            div.style.top = '0px';
            div.style.width = K_MAX_WIDTH; // prevents some chrome draw defects
            div.style.height = K_MAX_HEIGHT;

            if (this_.props.overlayViewDivStyle) {
              var overlayViewDivStyle = this_.props.overlayViewDivStyle;

              if ((typeof overlayViewDivStyle === 'undefined' ? 'undefined' : _typeof(overlayViewDivStyle)) === 'object') {
                Object.keys(overlayViewDivStyle).forEach(function (property) {
                  div.style[property] = overlayViewDivStyle[property];
                });
              }
            }

            var panes = this.getPanes();
            panes.overlayMouseTarget.appendChild(div);
            this_.geoService_.setMapCanvasProjection(maps, overlay.getProjection());

            if (!IS_REACT_16) {
              createPortal(this_, this_._renderPortal(), div,
              // remove prerendered markers
              function () {
                return this_.setState({ overlay: div });
              });
            } else {
              this_.setState({ overlay: div });
            }
          },
          onRemove: function onRemove() {
            var renderedOverlay = this_.state.overlay;
            if (renderedOverlay && !IS_REACT_16) {
              _reactDom2.default.unmountComponentAtNode(renderedOverlay);
            }
            this_.setState({ overlay: null });
          },
          draw: function draw() {
            this_.updateCounter_++;
            this_._onBoundsChanged(map, maps, !this_.props.debounced);

            if (!this_.googleApiLoadedCalled_) {
              this_._onGoogleApiLoaded({ map: map, maps: maps });
              this_.googleApiLoadedCalled_ = true;
            }

            if (this_.mouse_) {
              var latLng = this_.geoService_.fromContainerPixelToLatLng(this_.mouse_);
              this_.mouse_.lat = latLng.lat;
              this_.mouse_.lng = latLng.lng;
            }

            this_._onChildMouseMove();

            if (this_.markersDispatcher_) {
              this_.markersDispatcher_.emit('kON_CHANGE');
              if (this_.fireMouseEventOnIdle_) {
                this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
              }
            }
          }
        });

        _this.overlay_ = overlay;

        overlay.setMap(map);
        if (_this.props.heatmap.positions) {
          _this.heatmap.setMap(map);
        }

        if (_this.props.onTilesLoaded) {
          maps.event.addListener(map, 'tilesloaded', function () {
            this_._onTilesLoaded();
          });
        }

        maps.event.addListener(map, 'zoom_changed', function () {
          // recalc position at zoom start
          if (this_.geoService_.getZoom() !== map.getZoom()) {
            if (!this_.zoomAnimationInProgress_) {
              this_.zoomAnimationInProgress_ = true;
              this_._onZoomAnimationStart();
            }

            // If draw() is not called each frame during a zoom animation,
            // simulate it.
            if (mapsVersion < DRAW_CALLED_DURING_ANIMATION_VERSION) {
              var TIMEOUT_ZOOM = 300;

              if (new Date().getTime() - _this.zoomControlClickTime_ < TIMEOUT_ZOOM) {
                // there is strange Google Map Api behavior in chrome when zoom animation of map
                // is started only on second raf call, if was click on zoom control
                // or +- keys pressed, so i wait for two rafs before change state

                // this does not fully prevent animation jump
                // but reduce it's occurence probability
                (0, _raf2.default)(function () {
                  return (0, _raf2.default)(function () {
                    this_.updateCounter_++;
                    this_._onBoundsChanged(map, maps);
                  });
                });
              } else {
                this_.updateCounter_++;
                this_._onBoundsChanged(map, maps);
              }
            }
          }
        });

        maps.event.addListener(map, 'idle', function () {
          if (_this.resetSizeOnIdle_) {
            _this._setViewSize();
            var currMinZoom = _this._computeMinZoom(_this.props.options.minZoom);

            if (currMinZoom !== _this.minZoom_) {
              _this.minZoom_ = currMinZoom;
              map.setOptions({ minZoom: currMinZoom });
            }

            _this.resetSizeOnIdle_ = false;
          }

          if (this_.zoomAnimationInProgress_) {
            this_.zoomAnimationInProgress_ = false;
            this_._onZoomAnimationEnd();
          }

          this_.updateCounter_++;
          this_._onBoundsChanged(map, maps);

          this_.dragTime_ = 0;

          if (this_.markersDispatcher_) {
            this_.markersDispatcher_.emit('kON_CHANGE');
          }
        });

        maps.event.addListener(map, 'mouseover', function () {
          // has advantage over div MouseLeave
          this_.mouseInMap_ = true;
        });

        // an alternative way to know the mouse is back within the map
        // This would not fire when clicking/interacting with google maps
        // own on-map countrols+markers. This handles an edge case for touch devices
        // + 'draggable:false' custom option. See #332 for more details.
        maps.event.addListener(map, 'click', function () {
          this_.mouseInMap_ = true;
        });

        maps.event.addListener(map, 'mouseout', function () {
          // has advantage over div MouseLeave
          this_.mouseInMap_ = false;
          this_.mouse_ = null;
          this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
        });

        maps.event.addListener(map, 'drag', function () {
          this_.dragTime_ = new Date().getTime();
          this_._onDrag(map);
        });
        // user choosing satellite vs roads, etc
        maps.event.addListener(map, 'maptypeid_changed', function () {
          this_._onMapTypeIdChange(map.getMapTypeId());
        });
      }).catch(function (e) {
        // notify callback of load failure
        _this._onGoogleApiLoaded({ map: null, maps: null });
        console.error(e); // eslint-disable-line no-console
        throw e;
      });
    };

    _this._onGoogleApiLoaded = function () {
      if (_this.props.onGoogleApiLoaded) {
        var _this$props;

        if ( true && _this.props.yesIWantToUseGoogleMapApiInternals !== true) {
          console.warn('GoogleMap: ' + // eslint-disable-line
          'Usage of internal api objects is dangerous ' + 'and can cause a lot of issues.\n' + 'To hide this warning add yesIWantToUseGoogleMapApiInternals={true} ' + 'to <GoogleMap instance');
        }

        (_this$props = _this.props).onGoogleApiLoaded.apply(_this$props, arguments);
      }
    };

    _this._getHoverDistance = function () {
      return _this.props.hoverDistance;
    };

    _this._onDrag = function () {
      var _this$props2;

      return _this.props.onDrag && (_this$props2 = _this.props).onDrag.apply(_this$props2, arguments);
    };

    _this._onMapTypeIdChange = function () {
      var _this$props3;

      return _this.props.onMapTypeIdChange && (_this$props3 = _this.props).onMapTypeIdChange.apply(_this$props3, arguments);
    };

    _this._onZoomAnimationStart = function () {
      var _this$props4;

      return _this.props.onZoomAnimationStart && (_this$props4 = _this.props).onZoomAnimationStart.apply(_this$props4, arguments);
    };

    _this._onZoomAnimationEnd = function () {
      var _this$props5;

      return _this.props.onZoomAnimationEnd && (_this$props5 = _this.props).onZoomAnimationEnd.apply(_this$props5, arguments);
    };

    _this._onTilesLoaded = function () {
      return _this.props.onTilesLoaded && _this.props.onTilesLoaded();
    };

    _this._onChildClick = function () {
      if (_this.props.onChildClick) {
        var _this$props6;

        return (_this$props6 = _this.props).onChildClick.apply(_this$props6, arguments);
      }
      return undefined;
    };

    _this._onChildMouseDown = function (hoverKey, childProps) {
      _this.childMouseDownArgs_ = [hoverKey, childProps];
      if (_this.props.onChildMouseDown) {
        _this.props.onChildMouseDown(hoverKey, childProps, _extends({}, _this.mouse_));
      }
    };

    _this._onChildMouseUp = function () {
      if (_this.childMouseDownArgs_) {
        if (_this.props.onChildMouseUp) {
          var _this$props7;

          (_this$props7 = _this.props).onChildMouseUp.apply(_this$props7, _this.childMouseDownArgs_.concat([_extends({}, _this.mouse_)]));
        }
        _this.childMouseDownArgs_ = null;
        _this.childMouseUpTime_ = new Date().getTime();
      }
    };

    _this._onChildMouseMove = function () {
      if (_this.childMouseDownArgs_) {
        if (_this.props.onChildMouseMove) {
          var _this$props8;

          (_this$props8 = _this.props).onChildMouseMove.apply(_this$props8, _this.childMouseDownArgs_.concat([_extends({}, _this.mouse_)]));
        }
      }
    };

    _this._onChildMouseEnter = function () {
      if (_this.props.onChildMouseEnter) {
        var _this$props9;

        return (_this$props9 = _this.props).onChildMouseEnter.apply(_this$props9, arguments);
      }
      return undefined;
    };

    _this._onChildMouseLeave = function () {
      if (_this.props.onChildMouseLeave) {
        var _this$props10;

        return (_this$props10 = _this.props).onChildMouseLeave.apply(_this$props10, arguments);
      }
      return undefined;
    };

    _this._setViewSize = function () {
      if (!_this.mounted_) return;
      if (isFullScreen()) {
        _this.geoService_.setViewSize(window.innerWidth, window.innerHeight);
      } else {
        var mapDom = _reactDom2.default.findDOMNode(_this.googleMapDom_);
        _this.geoService_.setViewSize(mapDom.clientWidth, mapDom.clientHeight);
      }
      _this._onBoundsChanged();
    };

    _this._onWindowResize = function () {
      _this.resetSizeOnIdle_ = true;
    };

    _this._onMapMouseMove = function (e) {
      if (!_this.mouseInMap_) return;

      var currTime = new Date().getTime();
      var K_RECALC_CLIENT_RECT_MS = 50;

      if (currTime - _this.mouseMoveTime_ > K_RECALC_CLIENT_RECT_MS) {
        _this.boundingRect_ = e.currentTarget.getBoundingClientRect();
      }
      _this.mouseMoveTime_ = currTime;

      var mousePosX = e.clientX - _this.boundingRect_.left;
      var mousePosY = e.clientY - _this.boundingRect_.top;

      if (!_this.mouse_) {
        _this.mouse_ = { x: 0, y: 0, lat: 0, lng: 0 };
      }

      _this.mouse_.x = mousePosX;
      _this.mouse_.y = mousePosY;

      var latLng = _this.geoService_.fromContainerPixelToLatLng(_this.mouse_);
      _this.mouse_.lat = latLng.lat;
      _this.mouse_.lng = latLng.lng;

      _this._onChildMouseMove();

      if (currTime - _this.dragTime_ < K_IDLE_TIMEOUT) {
        _this.fireMouseEventOnIdle_ = true;
      } else {
        _this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
        _this.fireMouseEventOnIdle_ = false;
      }
    };

    _this._onClick = function () {
      var _this$props11;

      return _this.props.onClick && !_this.childMouseDownArgs_ && new Date().getTime() - _this.childMouseUpTime_ > K_IDLE_CLICK_TIMEOUT && _this.dragTime_ === 0 && (_this$props11 = _this.props).onClick.apply(_this$props11, arguments);
    };

    _this._onMapClick = function (event) {
      if (_this.markersDispatcher_) {
        // support touch events and recalculate mouse position on click
        _this._onMapMouseMove(event);
        var currTime = new Date().getTime();
        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
          if (_this.mouse_) {
            _this._onClick(_extends({}, _this.mouse_, {
              event: event
            }));
          }

          _this.markersDispatcher_.emit('kON_CLICK', event);
        }
      }
    };

    _this._onMapMouseDownNative = function (event) {
      if (!_this.mouseInMap_) return;

      _this._onMapMouseDown(event);
    };

    _this._onMapMouseDown = function (event) {
      if (_this.markersDispatcher_) {
        var currTime = new Date().getTime();
        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
          // Hovered marker detected at mouse move could be deleted at mouse down time
          // so it will be good to force hovered marker recalculation
          _this._onMapMouseMove(event);
          _this.markersDispatcher_.emit('kON_MDOWN', event);
        }
      }
    };

    _this._onMapMouseDownCapture = function () {
      if ((0, _detect2.default)().isChrome) {
        // to fix strange zoom in chrome
        _this.zoomControlClickTime_ = new Date().getTime();
      }
    };

    _this._onKeyDownCapture = function () {
      if ((0, _detect2.default)().isChrome) {
        _this.zoomControlClickTime_ = new Date().getTime();
      }
    };

    _this._isCenterDefined = function (center) {
      return center && ((0, _isPlainObject2.default)(center) && (0, _isNumber2.default)(center.lat) && (0, _isNumber2.default)(center.lng) || center.length === 2 && (0, _isNumber2.default)(center[0]) && (0, _isNumber2.default)(center[1]));
    };

    _this._onBoundsChanged = function (map, maps, callExtBoundsChange) {
      if (map) {
        var gmC = map.getCenter();
        _this.geoService_.setView([gmC.lat(), gmC.lng()], map.getZoom(), 0);
      }

      if ((_this.props.onChange || _this.props.onBoundsChange) && _this.geoService_.canProject()) {
        var zoom = _this.geoService_.getZoom();
        var bounds = _this.geoService_.getBounds();
        var centerLatLng = _this.geoService_.getCenter();

        if (!(0, _isArraysEqualEps2.default)(bounds, _this.prevBounds_, kEPS)) {
          if (callExtBoundsChange !== false) {
            var marginBounds = _this.geoService_.getBounds(_this.props.margin);
            if (_this.props.onBoundsChange) {
              _this.props.onBoundsChange(_this.centerIsObject_ ? _extends({}, centerLatLng) : [centerLatLng.lat, centerLatLng.lng], zoom, bounds, marginBounds);
            }

            if (_this.props.onChange) {
              _this.props.onChange({
                center: _extends({}, centerLatLng),
                zoom: zoom,
                bounds: {
                  nw: {
                    lat: bounds[0],
                    lng: bounds[1]
                  },
                  se: {
                    lat: bounds[2],
                    lng: bounds[3]
                  },
                  sw: {
                    lat: bounds[4],
                    lng: bounds[5]
                  },
                  ne: {
                    lat: bounds[6],
                    lng: bounds[7]
                  }
                },
                marginBounds: {
                  nw: {
                    lat: marginBounds[0],
                    lng: marginBounds[1]
                  },
                  se: {
                    lat: marginBounds[2],
                    lng: marginBounds[3]
                  },
                  sw: {
                    lat: marginBounds[4],
                    lng: marginBounds[5]
                  },
                  ne: {
                    lat: marginBounds[6],
                    lng: marginBounds[7]
                  }
                },

                size: _this.geoService_.hasSize() ? {
                  width: _this.geoService_.getWidth(),
                  height: _this.geoService_.getHeight()
                } : {
                  width: 0,
                  height: 0
                }
              });
            }

            _this.prevBounds_ = bounds;
          }
        }
      }
    };

    _this._registerChild = function (ref) {
      _this.googleMapDom_ = ref;
    };

    _this.mounted_ = false;
    _this.initialized_ = false;
    _this.googleApiLoadedCalled_ = false;

    _this.map_ = null;
    _this.maps_ = null;
    _this.prevBounds_ = null;
    _this.heatmap = null;

    _this.layers_ = {};

    _this.mouse_ = null;
    _this.mouseMoveTime_ = 0;
    _this.boundingRect_ = null;
    _this.mouseInMap_ = true;

    _this.dragTime_ = 0;
    _this.fireMouseEventOnIdle_ = false;
    _this.updateCounter_ = 0;

    _this.markersDispatcher_ = new _marker_dispatcher2.default(_this);
    _this.geoService_ = new _geo2.default(K_GOOGLE_TILE_SIZE);
    _this.centerIsObject_ = (0, _isPlainObject2.default)(_this.props.center);

    _this.minZoom_ = DEFAULT_MIN_ZOOM;
    _this.defaultDraggableOption_ = true;

    _this.zoomControlClickTime_ = 0;

    _this.childMouseDownArgs_ = null;
    _this.childMouseUpTime_ = 0;

    _this.googleMapDom_ = null;

    if (true) {
      if (_this.props.apiKey) {
        console.warn('GoogleMap: ' + // eslint-disable-line no-console
        'apiKey is deprecated, use ' + 'bootstrapURLKeys={{key: YOUR_API_KEY}} instead.');
      }

      if (_this.props.onBoundsChange) {
        console.warn('GoogleMap: ' + // eslint-disable-line no-console
        'onBoundsChange is deprecated, use ' + 'onChange({center, zoom, bounds, ...other}) instead.');
      }

      if ((0, _isEmpty2.default)(_this.props.center) && (0, _isEmpty2.default)(_this.props.defaultCenter)) {
        console.warn('GoogleMap: center or defaultCenter property must be defined' // eslint-disable-line no-console
        );
      }

      if ((0, _isEmpty2.default)(_this.props.zoom) && (0, _isEmpty2.default)(_this.props.defaultZoom)) {
        console.warn('GoogleMap: zoom or defaultZoom property must be defined' // eslint-disable-line no-console
        );
      }
    }

    if (_this._isCenterDefined(_this.props.center || _this.props.defaultCenter)) {
      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);
    }

    _this.zoomAnimationInProgress_ = false;

    _this.state = {
      overlay: null
    };
    return _this;
  }

  GoogleMap.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.mounted_ = true;
    (0, _passiveEvents2.default)(window, 'resize', this._onWindowResize, false);
    (0, _passiveEvents2.default)(window, 'keydown', this._onKeyDownCapture, true);
    var mapDom = _reactDom2.default.findDOMNode(this.googleMapDom_);
    // gmap can't prevent map drag if mousedown event already occured
    // the only workaround I find is prevent mousedown native browser event

    if (mapDom) {
      (0, _passiveEvents2.default)(mapDom, 'mousedown', this._onMapMouseDownNative, true);
    }

    (0, _passiveEvents2.default)(window, 'mouseup', this._onChildMouseUp, false);
    var bootstrapURLKeys = _extends({}, this.props.apiKey && { key: this.props.apiKey }, this.props.bootstrapURLKeys);

    this.props.googleMapLoader(bootstrapURLKeys, this.props.heatmapLibrary); // we can start load immediatly

    setTimeout(function () {
      // to detect size
      _this2._setViewSize();
      if (_this2._isCenterDefined(_this2.props.center || _this2.props.defaultCenter)) {
        _this2._initMap();
      }
    }, 0, this);
    if (this.props.resetBoundsOnResize) {
      var that = this;
      _detectElementResize2.default.addResizeListener(mapDom, that._mapDomResizeCallback);
    }
  };

  GoogleMap.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    if (true) {
      if (!(0, _shallowEqual2.default)(this.props.defaultCenter, nextProps.defaultCenter)) {
        console.warn("GoogleMap: defaultCenter prop changed. You can't change default props.");
      }

      if (!(0, _shallowEqual2.default)(this.props.defaultZoom, nextProps.defaultZoom)) {
        console.warn("GoogleMap: defaultZoom prop changed. You can't change default props.");
      }
    }

    if (!this._isCenterDefined(this.props.center) && this._isCenterDefined(nextProps.center)) {
      setTimeout(function () {
        return _this3._initMap();
      }, 0);
    }

    if (this.map_) {
      var centerLatLng = this.geoService_.getCenter();
      if (this._isCenterDefined(nextProps.center)) {
        var nextPropsCenter = latLng2Obj(nextProps.center);
        var currCenter = this._isCenterDefined(this.props.center) ? latLng2Obj(this.props.center) : null;

        if (!currCenter || Math.abs(nextPropsCenter.lat - currCenter.lat) + Math.abs(nextPropsCenter.lng - currCenter.lng) > kEPS) {
          if (Math.abs(nextPropsCenter.lat - centerLatLng.lat) + Math.abs(nextPropsCenter.lng - centerLatLng.lng) > kEPS) {
            this.map_.panTo({
              lat: nextPropsCenter.lat,
              lng: nextPropsCenter.lng
            });
          }
        }
      }

      if (!(0, _isEmpty2.default)(nextProps.zoom)) {
        // if zoom chaged by user
        if (Math.abs(nextProps.zoom - this.props.zoom) > 0) {
          this.map_.setZoom(nextProps.zoom);
        }
      }

      if (!(0, _isEmpty2.default)(this.props.draggable) && (0, _isEmpty2.default)(nextProps.draggable)) {
        // reset to default
        this.map_.setOptions({ draggable: this.defaultDraggableOption_ });
      } else if (!(0, _shallowEqual2.default)(this.props.draggable, nextProps.draggable)) {
        // also prevent this on window 'mousedown' event to prevent map move
        this.map_.setOptions({ draggable: nextProps.draggable });
      }

      // use shallowEqual to try avoid calling map._setOptions if only the ref changes
      if (!(0, _isEmpty2.default)(nextProps.options) && !(0, _shallowEqual2.default)(this.props.options, nextProps.options)) {
        var mapPlainObjects = (0, _pick2.default)(this.maps_, _isPlainObject2.default);
        var options = typeof nextProps.options === 'function' ? nextProps.options(mapPlainObjects) : nextProps.options;
        // remove zoom, center and draggable options as these are managed by google-maps-react
        options = (0, _omit2.default)(options, ['zoom', 'center', 'draggable']);

        if ('minZoom' in options) {
          var minZoom = this._computeMinZoom(options.minZoom);
          options.minZoom = _checkMinZoom(options.minZoom, minZoom);
        }

        this.map_.setOptions(options);
      }

      if (!(0, _shallowEqual2.default)(nextProps.layerTypes, this.props.layerTypes)) {
        Object.keys(this.layers_).forEach(function (layerKey) {
          _this3.layers_[layerKey].setMap(null);
          delete _this3.layers_[layerKey];
        });
        this._setLayers(nextProps.layerTypes);
      }
    }
  };

  GoogleMap.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    // draggable does not affect inner components
    return !(0, _shallowEqual2.default)((0, _omit2.default)(this.props, ['draggable']), (0, _omit2.default)(nextProps, ['draggable'])) || !(0, _shallowEqual2.default)(this.state, nextState);
  };

  GoogleMap.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.markersDispatcher_.emit('kON_CHANGE');

    if (!(0, _shallowEqual2.default)(this.props.hoverDistance, prevProps.hoverDistance)) {
      this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
    }
  };

  GoogleMap.prototype.componentWillUnmount = function componentWillUnmount() {
    this.mounted_ = false;
    var mapDom = _reactDom2.default.findDOMNode(this.googleMapDom_);
    if (mapDom) {
      mapDom.removeEventListener('mousedown', this._onMapMouseDownNative, true);
    }
    window.removeEventListener('resize', this._onWindowResize);
    window.removeEventListener('keydown', this._onKeyDownCapture);
    window.removeEventListener('mouseup', this._onChildMouseUp, false);
    if (this.props.resetBoundsOnResize) {
      _detectElementResize2.default.removeResizeListener(mapDom, this._mapDomResizeCallback);
    }

    if (this.overlay_) {
      // this triggers overlay_.onRemove(), which will unmount the <GoogleMapMarkers/>
      this.overlay_.setMap(null);
    }

    if (this.maps_ && this.map_) {
      // fix google, as otherwise listeners works even without map
      this.map_.setOptions({ scrollwheel: false });
      this.maps_.event.clearInstanceListeners(this.map_);
    }

    this.map_ = null;
    this.maps_ = null;
    this.markersDispatcher_.dispose();

    this.resetSizeOnIdle_ = false;

    delete this.map_;
    delete this.markersDispatcher_;
  };
  // calc minZoom if map size available
  // it's better to not set minZoom less than this calculation gives
  // otherwise there is no homeomorphism between screen coordinates and map
  // (one map coordinate can have different screen coordinates)


  // this method works only if this.props.onChildMouseDown was called


  // this method works only if this.props.onChildMouseDown was called


  // K_IDLE_CLICK_TIMEOUT - looks like 300 is enough


  // gmap can't prevent map drag if mousedown event already occured
  // the only workaround I find is prevent mousedown native browser event


  GoogleMap.prototype.render = function render() {
    var overlay = this.state.overlay;
    var mapMarkerPrerender = !overlay ? _react2.default.createElement(_google_map_markers_prerender2.default, {
      experimental: this.props.experimental,
      onChildClick: this._onChildClick,
      onChildMouseDown: this._onChildMouseDown,
      onChildMouseEnter: this._onChildMouseEnter,
      onChildMouseLeave: this._onChildMouseLeave,
      geoService: this.geoService_,
      insideMapPanes: false,
      distanceToMouse: this.props.distanceToMouse,
      getHoverDistance: this._getHoverDistance,
      dispatcher: this.markersDispatcher_
    }) : null;

    return _react2.default.createElement(
      'div',
      {
        style: this.props.style,
        onMouseMove: this._onMapMouseMove,
        onMouseDownCapture: this._onMapMouseDownCapture,
        onClick: this._onMapClick
      },
      _react2.default.createElement(_google_map_map2.default, { registerChild: this._registerChild }),
      IS_REACT_16 && overlay && createPortal(this._renderPortal(), overlay),
      mapMarkerPrerender
    );
  };

  return GoogleMap;
}(_react.Component);

GoogleMap.propTypes = {
  apiKey: _propTypes2.default.string,
  bootstrapURLKeys: _propTypes2.default.any,

  defaultCenter: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({
    lat: _propTypes2.default.number,
    lng: _propTypes2.default.number
  })]),
  center: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.shape({
    lat: _propTypes2.default.number,
    lng: _propTypes2.default.number
  })]),
  defaultZoom: _propTypes2.default.number,
  zoom: _propTypes2.default.number,
  onBoundsChange: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onChildClick: _propTypes2.default.func,
  onChildMouseDown: _propTypes2.default.func,
  onChildMouseUp: _propTypes2.default.func,
  onChildMouseMove: _propTypes2.default.func,
  onChildMouseEnter: _propTypes2.default.func,
  onChildMouseLeave: _propTypes2.default.func,
  onZoomAnimationStart: _propTypes2.default.func,
  onZoomAnimationEnd: _propTypes2.default.func,
  onDrag: _propTypes2.default.func,
  onMapTypeIdChange: _propTypes2.default.func,
  onTilesLoaded: _propTypes2.default.func,
  options: _propTypes2.default.any,
  distanceToMouse: _propTypes2.default.func,
  hoverDistance: _propTypes2.default.number,
  debounced: _propTypes2.default.bool,
  margin: _propTypes2.default.array,
  googleMapLoader: _propTypes2.default.any,
  onGoogleApiLoaded: _propTypes2.default.func,
  yesIWantToUseGoogleMapApiInternals: _propTypes2.default.bool,
  draggable: _propTypes2.default.bool,
  style: _propTypes2.default.any,
  resetBoundsOnResize: _propTypes2.default.bool,
  layerTypes: _propTypes2.default.arrayOf(_propTypes2.default.string) // ['TransitLayer', 'TrafficLayer']
};
GoogleMap.defaultProps = {
  distanceToMouse: function distanceToMouse(pt, mousePos /* , markerProps */) {
    return Math.sqrt((pt.x - mousePos.x) * (pt.x - mousePos.x) + (pt.y - mousePos.y) * (pt.y - mousePos.y));
  },

  hoverDistance: 30,
  debounced: true,
  options: defaultOptions_,
  googleMapLoader: _google_map_loader2.default,
  yesIWantToUseGoogleMapApiInternals: false,
  style: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    position: 'relative'
  },
  layerTypes: [],
  heatmap: {},
  heatmapLibrary: false
};
GoogleMap.googleMapLoader = _google_map_loader2.default;
exports.default = GoogleMap;

/***/ }),

/***/ "./node_modules/google-map-react/lib/google_map_map.js":
/*!*************************************************************!*\
  !*** ./node_modules/google-map-react/lib/google_map_map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  margin: 0,
  padding: 0,
  position: 'absolute'
};

var GoogleMapMap = function (_Component) {
  _inherits(GoogleMapMap, _Component);

  function GoogleMapMap() {
    _classCallCheck(this, GoogleMapMap);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  GoogleMapMap.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    return false; // disable react on this div
  };

  GoogleMapMap.prototype.render = function render() {
    var registerChild = this.props.registerChild;

    return _react2.default.createElement('div', { ref: registerChild, style: style });
  };

  return GoogleMapMap;
}(_react.Component);

exports.default = GoogleMapMap;

/***/ }),

/***/ "./node_modules/google-map-react/lib/google_map_markers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/google-map-react/lib/google_map_markers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _omit = __webpack_require__(/*! ./utils/omit */ "./node_modules/google-map-react/lib/utils/omit.js");

var _omit2 = _interopRequireDefault(_omit);

var _shallowEqual = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/google-map-react/lib/utils/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// utils


var mainStyle = {
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  margin: 0,
  padding: 0,
  position: 'absolute'
};

var style = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  backgroundColor: 'transparent',
  position: 'absolute'
};

var GoogleMapMarkers = function (_Component) {
  _inherits(GoogleMapMarkers, _Component);

  /* eslint-disable react/forbid-prop-types */
  function GoogleMapMarkers(props) {
    _classCallCheck(this, GoogleMapMarkers);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this._getState = function () {
      return {
        children: _this.props.dispatcher.getChildren(),
        updateCounter: _this.props.dispatcher.getUpdateCounter()
      };
    };

    _this._onChangeHandler = function () {
      if (!_this.dimensionsCache_) {
        return;
      }

      var prevChildCount = (_this.state.children || []).length;
      var state = _this._getState();

      _this.setState(state, function () {
        return (state.children || []).length !== prevChildCount && _this._onMouseChangeHandler();
      });
    };

    _this._onChildClick = function () {
      if (_this.props.onChildClick) {
        if (_this.hoverChildProps_) {
          var hoverKey = _this.hoverKey_;
          var childProps = _this.hoverChildProps_;
          // click works only on hovered item
          _this.props.onChildClick(hoverKey, childProps);
        }
      }
    };

    _this._onChildMouseDown = function () {
      if (_this.props.onChildMouseDown) {
        if (_this.hoverChildProps_) {
          var hoverKey = _this.hoverKey_;
          var childProps = _this.hoverChildProps_;
          // works only on hovered item
          _this.props.onChildMouseDown(hoverKey, childProps);
        }
      }
    };

    _this._onChildMouseEnter = function (hoverKey, childProps) {
      if (!_this.dimensionsCache_) {
        return;
      }

      if (_this.props.onChildMouseEnter) {
        _this.props.onChildMouseEnter(hoverKey, childProps);
      }

      _this.hoverChildProps_ = childProps;
      _this.hoverKey_ = hoverKey;
      _this.setState({ hoverKey: hoverKey });
    };

    _this._onChildMouseLeave = function () {
      if (!_this.dimensionsCache_) {
        return;
      }

      var hoverKey = _this.hoverKey_;
      var childProps = _this.hoverChildProps_;

      if (hoverKey !== undefined && hoverKey !== null) {
        if (_this.props.onChildMouseLeave) {
          _this.props.onChildMouseLeave(hoverKey, childProps);
        }

        _this.hoverKey_ = null;
        _this.hoverChildProps_ = null;
        _this.setState({ hoverKey: null });
      }
    };

    _this._onMouseAllow = function (value) {
      if (!value) {
        _this._onChildMouseLeave();
      }

      _this.allowMouse_ = value;
    };

    _this._onMouseChangeHandler = function () {
      if (_this.allowMouse_) {
        _this._onMouseChangeHandlerRaf();
      }
    };

    _this._onMouseChangeHandlerRaf = function () {
      if (!_this.dimensionsCache_) {
        return;
      }

      var mp = _this.props.dispatcher.getMousePosition();

      if (mp) {
        var distances = [];
        var hoverDistance = _this.props.getHoverDistance();

        _react2.default.Children.forEach(_this.state.children, function (child, childIndex) {
          if (!child) return;
          // layers
          if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
            return;
          }

          var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;
          var dist = _this.props.distanceToMouse(_this.dimensionsCache_[childKey], mp, child.props);
          if (dist < hoverDistance) {
            distances.push({
              key: childKey,
              dist: dist,
              props: child.props
            });
          }
        });

        if (distances.length) {
          distances.sort(function (a, b) {
            return a.dist - b.dist;
          });
          var hoverKey = distances[0].key;
          var childProps = distances[0].props;

          if (_this.hoverKey_ !== hoverKey) {
            _this._onChildMouseLeave();

            _this._onChildMouseEnter(hoverKey, childProps);
          }
        } else {
          _this._onChildMouseLeave();
        }
      } else {
        _this._onChildMouseLeave();
      }
    };

    _this._getDimensions = function (key) {
      var childKey = key;
      return _this.dimensionsCache_[childKey];
    };

    _this.props.dispatcher.on('kON_CHANGE', _this._onChangeHandler);
    _this.props.dispatcher.on('kON_MOUSE_POSITION_CHANGE', _this._onMouseChangeHandler);
    _this.props.dispatcher.on('kON_CLICK', _this._onChildClick);
    _this.props.dispatcher.on('kON_MDOWN', _this._onChildMouseDown);

    _this.dimensionsCache_ = {};
    _this.hoverKey_ = null;
    _this.hoverChildProps_ = null;
    _this.allowMouse_ = true;

    _this.state = _extends({}, _this._getState(), { hoverKey: null });
    return _this;
  }
  /* eslint-enable react/forbid-prop-types */

  GoogleMapMarkers.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props.experimental === true) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)((0, _omit2.default)(this.state, ['hoverKey']), (0, _omit2.default)(nextState, ['hoverKey']));
    }

    return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
  };

  GoogleMapMarkers.prototype.componentWillUnmount = function componentWillUnmount() {
    this.props.dispatcher.removeListener('kON_CHANGE', this._onChangeHandler);
    this.props.dispatcher.removeListener('kON_MOUSE_POSITION_CHANGE', this._onMouseChangeHandler);
    this.props.dispatcher.removeListener('kON_CLICK', this._onChildClick);
    this.props.dispatcher.removeListener('kON_MDOWN', this._onChildMouseDown);

    this.dimensionsCache_ = null;
  };

  GoogleMapMarkers.prototype.render = function render() {
    var _this2 = this;

    var mainElementStyle = this.props.style || mainStyle;
    this.dimensionsCache_ = {};

    var markers = _react2.default.Children.map(this.state.children, function (child, childIndex) {
      if (!child) return undefined;
      if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
        return _react2.default.cloneElement(child, {
          $geoService: _this2.props.geoService,
          $onMouseAllow: _this2._onMouseAllow,
          $prerender: _this2.props.prerender
        });
      }

      var latLng = child.props.latLng !== undefined ? child.props.latLng : { lat: child.props.lat, lng: child.props.lng };

      var pt = _this2.props.insideMapPanes ? _this2.props.geoService.fromLatLngToDivPixel(latLng) : _this2.props.geoService.fromLatLngToCenterPixel(latLng);

      var stylePtPos = {
        left: pt.x,
        top: pt.y
      };

      // If the component has a southeast corner defined (either as a LatLng, or a separate
      // lat and lng pair), set the width and height based on the distance between the northwest
      // and the southeast corner to lock the overlay to the correct geographic bounds.
      if (child.props.seLatLng !== undefined || child.props.seLat !== undefined && child.props.seLng !== undefined) {
        var seLatLng = child.props.seLatLng !== undefined ? child.props.seLatLng : { lat: child.props.seLat, lng: child.props.seLng };

        var sePt = _this2.props.insideMapPanes ? _this2.props.geoService.fromLatLngToDivPixel(seLatLng) : _this2.props.geoService.fromLatLngToCenterPixel(seLatLng);

        stylePtPos.width = sePt.x - pt.x;
        stylePtPos.height = sePt.y - pt.y;
      }

      var containerPt = _this2.props.geoService.fromLatLngToContainerPixel(latLng);

      // to prevent rerender on child element i need to pass
      // const params $getDimensions and $dimensionKey instead of dimension object
      var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;

      _this2.dimensionsCache_[childKey] = _extends({
        x: containerPt.x,
        y: containerPt.y
      }, latLng);

      return _react2.default.createElement(
        'div',
        {
          key: childKey,
          style: _extends({}, style, stylePtPos),
          className: child.props.$markerHolderClassName
        },
        _react2.default.cloneElement(child, {
          $hover: childKey === _this2.state.hoverKey,
          $getDimensions: _this2._getDimensions,
          $dimensionKey: childKey,
          $geoService: _this2.props.geoService,
          $onMouseAllow: _this2._onMouseAllow,
          $prerender: _this2.props.prerender
        })
      );
    });

    return _react2.default.createElement(
      'div',
      { style: mainElementStyle },
      markers
    );
  };

  return GoogleMapMarkers;
}(_react.Component);

GoogleMapMarkers.propTypes = {
  geoService: _propTypes2.default.any,
  style: _propTypes2.default.any,
  distanceToMouse: _propTypes2.default.func,
  dispatcher: _propTypes2.default.any,
  onChildClick: _propTypes2.default.func,
  onChildMouseDown: _propTypes2.default.func,
  onChildMouseLeave: _propTypes2.default.func,
  onChildMouseEnter: _propTypes2.default.func,
  getHoverDistance: _propTypes2.default.func,
  insideMapPanes: _propTypes2.default.bool,
  prerender: _propTypes2.default.bool
};
GoogleMapMarkers.defaultProps = {
  insideMapPanes: false,
  prerender: false
};
exports.default = GoogleMapMarkers;

/***/ }),

/***/ "./node_modules/google-map-react/lib/google_map_markers_prerender.js":
/*!***************************************************************************!*\
  !*** ./node_modules/google-map-react/lib/google_map_markers_prerender.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    { style: style },
    _react2.default.createElement(_google_map_markers2.default, _extends({}, props, { prerender: true }))
  );
};

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _google_map_markers = __webpack_require__(/*! ./google_map_markers */ "./node_modules/google-map-react/lib/google_map_markers.js");

var _google_map_markers2 = _interopRequireDefault(_google_map_markers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  width: '50%',
  height: '50%',
  left: '50%',
  top: '50%',
  // backgroundColor: 'red',
  margin: 0,
  padding: 0,
  position: 'absolute'
  // opacity: 0.3
};

/***/ }),

/***/ "./node_modules/google-map-react/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/google-map-react/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _google_map = __webpack_require__(/*! ./google_map */ "./node_modules/google-map-react/lib/google_map.js");

var _google_map2 = _interopRequireDefault(_google_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _google_map2.default;

/***/ }),

/***/ "./node_modules/google-map-react/lib/loaders/google_map_loader.js":
/*!************************************************************************!*\
  !*** ./node_modules/google-map-react/lib/loaders/google_map_loader.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var BASE_URL = 'https://maps';
var DEFAULT_URL = BASE_URL + '.googleapis.com';
var API_PATH = '/maps/api/js?callback=_$_google_map_initialize_$_';

var getUrl = function getUrl(region) {
  if (region && region.toLowerCase() === 'cn') {
    return BASE_URL + '.google.cn';
  }
  return DEFAULT_URL;
};

var $script_ = null;

var loadPromise_ = void 0;

var resolveCustomPromise_ = void 0;

var _customPromise = new Promise(function (resolve) {
  resolveCustomPromise_ = resolve;
});

// TODO add libraries language and other map options

exports.default = function (bootstrapURLKeys, heatmapLibrary) {
  if (!$script_) {
    $script_ = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js"); // eslint-disable-line
  }

  // call from outside google-map-react
  // will be as soon as loadPromise_ resolved
  if (!bootstrapURLKeys) {
    return _customPromise;
  }

  if (loadPromise_) {
    return loadPromise_;
  }

  loadPromise_ = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      reject(new Error('google map cannot be loaded outside browser env'));
      return;
    }

    if (window.google && window.google.maps) {
      resolve(window.google.maps);
      return;
    }

    if (typeof window._$_google_map_initialize_$_ !== 'undefined') {
      reject(new Error('google map initialization error'));
    }

    window._$_google_map_initialize_$_ = function () {
      delete window._$_google_map_initialize_$_;
      resolve(window.google.maps);
    };

    if (true) {
      if (Object.keys(bootstrapURLKeys).indexOf('callback') > -1) {
        var message = '"callback" key in bootstrapURLKeys is not allowed,\n                          use onGoogleApiLoaded property instead';
        // eslint-disable-next-line no-console
        console.error(message);
        throw new Error(message);
      }
    }

    var params = Object.keys(bootstrapURLKeys).reduce(function (r, key) {
      return r + '&' + key + '=' + bootstrapURLKeys[key];
    }, '');

    var baseUrl = getUrl(bootstrapURLKeys.region);
    var libraries = heatmapLibrary ? '&libraries=visualization' : '';

    $script_('' + baseUrl + API_PATH + params + libraries, function () {
      return typeof window.google === 'undefined' && reject(new Error('google map initialization error (not loaded)'));
    });
  });

  resolveCustomPromise_(loadPromise_);

  return loadPromise_;
};

/***/ }),

/***/ "./node_modules/google-map-react/lib/marker_dispatcher.js":
/*!****************************************************************!*\
  !*** ./node_modules/google-map-react/lib/marker_dispatcher.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _eventemitter = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkerDispatcher = function (_EventEmitter) {
  _inherits(MarkerDispatcher, _EventEmitter);

  function MarkerDispatcher(gmapInstance) {
    _classCallCheck(this, MarkerDispatcher);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.gmapInstance = gmapInstance;
    return _this;
  }

  MarkerDispatcher.prototype.getChildren = function getChildren() {
    return this.gmapInstance.props.children;
  };

  MarkerDispatcher.prototype.getMousePosition = function getMousePosition() {
    return this.gmapInstance.mouse_;
  };

  MarkerDispatcher.prototype.getUpdateCounter = function getUpdateCounter() {
    return this.gmapInstance.updateCounter_;
  };

  MarkerDispatcher.prototype.dispose = function dispose() {
    this.gmapInstance = null;
    this.removeAllListeners();
  };

  return MarkerDispatcher;
}(_eventemitter2.default);

exports.default = MarkerDispatcher;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/detect.js":
/*!***********************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/detect.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = detectBrowser;
// http://stackoverflow.com/questions/5899783/detect-safari-chrome-ie-firefox-opera-with-user-agent
var detectBrowserResult_ = null;

function detectBrowser() {
  if (detectBrowserResult_) {
    return detectBrowserResult_;
  }

  if (typeof navigator !== 'undefined') {
    var isExplorer = navigator.userAgent.indexOf('MSIE') > -1;
    var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
    var isOpera = navigator.userAgent.toLowerCase().indexOf('op') > -1;

    var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
    var isSafari = navigator.userAgent.indexOf('Safari') > -1;

    if (isChrome && isSafari) {
      isSafari = false;
    }

    if (isChrome && isOpera) {
      isChrome = false;
    }

    detectBrowserResult_ = {
      isExplorer: isExplorer,
      isFirefox: isFirefox,
      isOpera: isOpera,
      isChrome: isChrome,
      isSafari: isSafari
    };
    return detectBrowserResult_;
  }

  detectBrowserResult_ = {
    isChrome: true,
    isExplorer: false,
    isFirefox: false,
    isOpera: false,
    isSafari: false
  };

  return detectBrowserResult_;
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/detectElementResize.js":
/*!************************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/detectElementResize.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _passiveEvents = __webpack_require__(/*! ./passiveEvents */ "./node_modules/google-map-react/lib/utils/passiveEvents.js");

var _passiveEvents2 = _interopRequireDefault(_passiveEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Reliable `window` and `document` detection
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Check `document` and `window` in case of server-side rendering
/* eslint-disable */
/**
* Detect Element Resize.
* Forked in order to guard against unsafe 'window' and 'document' references.
*
* https://github.com/sdecima/javascript-detect-element-resize
* Sebastian Decima
*
* version: 0.5.3
**/

var _window;
if (canUseDOM) {
  _window = window;
} else if (typeof self !== 'undefined') {
  _window = self;
} else {
  _window = undefined;
}

var attachEvent = typeof document !== 'undefined' && document.attachEvent;
var stylesCreated = false;

if (canUseDOM && !attachEvent) {
  var requestFrame = function () {
    var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
      return _window.setTimeout(fn, 20);
    };
    return function (fn) {
      return raf(fn);
    };
  }();

  var cancelFrame = function () {
    var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
    return function (id) {
      return cancel(id);
    };
  }();

  var resetTriggers = function resetTriggers(element) {
    var triggers = element.__resizeTriggers__,
        expand = triggers.firstElementChild,
        contract = triggers.lastElementChild,
        expandChild = expand.firstElementChild;
    contract.scrollLeft = contract.scrollWidth;
    contract.scrollTop = contract.scrollHeight;
    expandChild.style.width = expand.offsetWidth + 1 + 'px';
    expandChild.style.height = expand.offsetHeight + 1 + 'px';
    expand.scrollLeft = expand.scrollWidth;
    expand.scrollTop = expand.scrollHeight;
  };

  var checkTriggers = function checkTriggers(element) {
    return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
  };

  var scrollListener = function scrollListener(e) {
    var element = this;
    resetTriggers(this);
    if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
    this.__resizeRAF__ = requestFrame(function () {
      if (checkTriggers(element)) {
        element.__resizeLast__.width = element.offsetWidth;
        element.__resizeLast__.height = element.offsetHeight;
        element.__resizeListeners__.forEach(function (fn) {
          fn.call(element, e);
        });
      }
    });
  };

  /* Detect CSS Animations support to detect element display/re-attach */
  var animation = false,
      animationstring = 'animation',
      keyframeprefix = '',
      animationstartevent = 'animationstart',
      domPrefixes = 'Webkit Moz O ms'.split(' '),
      startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
      pfx = '';

  if (canUseDOM) {
    var elm = document.createElement('fakeelement');
    if (elm.style.animationName !== undefined) {
      animation = true;
    }

    if (animation === false) {
      for (var i = 0; i < domPrefixes.length; i++) {
        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
          pfx = domPrefixes[i];
          animationstring = pfx + 'Animation';
          keyframeprefix = '-' + pfx.toLowerCase() + '-';
          animationstartevent = startEvents[i];
          animation = true;
          break;
        }
      }
    }
  }

  var animationName = 'resizeanim';
  var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
  var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
}

var createStyles = function createStyles() {
  if (!stylesCreated) {
    //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
    var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
    stylesCreated = true;
  }
};

var addResizeListener = function addResizeListener(element, fn) {
  if (element.parentNode === undefined) {
    var tempParentDiv = document.createElement('div');
    element.parentNode = tempParentDiv;
  }
  element = element.parentNode;
  if (attachEvent) element.attachEvent('onresize', fn);else {
    if (!element.__resizeTriggers__) {
      if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
      createStyles();
      element.__resizeLast__ = {};
      element.__resizeListeners__ = [];
      (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
      element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
      element.appendChild(element.__resizeTriggers__);
      resetTriggers(element);

      (0, _passiveEvents2.default)(element, 'scroll', scrollListener, true);

      /* Listen for a css animation to detect element display/re-attach */
      animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function (e) {
        if (e.animationName == animationName) resetTriggers(element);
      });
    }
    element.__resizeListeners__.push(fn);
  }
};

var removeResizeListener = function removeResizeListener(element, fn) {
  element = element.parentNode;
  if (attachEvent) element.detachEvent('onresize', fn);else {
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
      element.removeEventListener('scroll', scrollListener);
      element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
    }
  }
};

module.exports = {
  addResizeListener: addResizeListener,
  removeResizeListener: removeResizeListener
};

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/geo.js":
/*!********************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/geo.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pointGeometry = __webpack_require__(/*! @mapbox/point-geometry */ "./node_modules/@mapbox/point-geometry/index.js");

var _pointGeometry2 = _interopRequireDefault(_pointGeometry);

var _lat_lng = __webpack_require__(/*! ./lib_geo/lat_lng */ "./node_modules/google-map-react/lib/utils/lib_geo/lat_lng.js");

var _lat_lng2 = _interopRequireDefault(_lat_lng);

var _transform = __webpack_require__(/*! ./lib_geo/transform */ "./node_modules/google-map-react/lib/utils/lib_geo/transform.js");

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Geo = function () {
  function Geo(tileSize) {
    _classCallCheck(this, Geo);

    // left_top view пользует гугл
    // super();
    this.hasSize_ = false;
    this.hasView_ = false;
    this.transform_ = new _transform2.default(tileSize || 512);
  }

  Geo.prototype.setView = function setView(center, zoom, bearing) {
    this.transform_.center = _lat_lng2.default.convert(center);
    this.transform_.zoom = +zoom;
    this.transform_.bearing = +bearing;
    this.hasView_ = true;
  };

  Geo.prototype.setViewSize = function setViewSize(width, height) {
    this.transform_.width = width;
    this.transform_.height = height;
    this.hasSize_ = true;
  };

  Geo.prototype.setMapCanvasProjection = function setMapCanvasProjection(maps, mapCanvasProjection) {
    this.maps_ = maps;
    this.mapCanvasProjection_ = mapCanvasProjection;
  };

  Geo.prototype.canProject = function canProject() {
    return this.hasSize_ && this.hasView_;
  };

  Geo.prototype.hasSize = function hasSize() {
    return this.hasSize_;
  };

  /** Returns the pixel position relative to the map center. */


  Geo.prototype.fromLatLngToCenterPixel = function fromLatLngToCenterPixel(ptLatLng) {
    return this.transform_.locationPoint(_lat_lng2.default.convert(ptLatLng));
  };

  /**
   * Returns the pixel position relative to the map panes,
   * or relative to the map center if there are no panes.
   */


  Geo.prototype.fromLatLngToDivPixel = function fromLatLngToDivPixel(ptLatLng) {
    if (this.mapCanvasProjection_) {
      var latLng = new this.maps_.LatLng(ptLatLng.lat, ptLatLng.lng);
      return this.mapCanvasProjection_.fromLatLngToDivPixel(latLng);
    }
    return this.fromLatLngToCenterPixel(ptLatLng);
  };

  /** Returns the pixel position relative to the map top-left. */


  Geo.prototype.fromLatLngToContainerPixel = function fromLatLngToContainerPixel(ptLatLng) {
    if (this.mapCanvasProjection_) {
      var latLng = new this.maps_.LatLng(ptLatLng.lat, ptLatLng.lng);
      return this.mapCanvasProjection_.fromLatLngToContainerPixel(latLng);
    }

    var pt = this.fromLatLngToCenterPixel(ptLatLng);
    pt.x -= this.transform_.worldSize * Math.round(pt.x / this.transform_.worldSize);

    pt.x += this.transform_.width / 2;
    pt.y += this.transform_.height / 2;

    return pt;
  };

  /** Returns the LatLng for the given offset from the map top-left. */


  Geo.prototype.fromContainerPixelToLatLng = function fromContainerPixelToLatLng(ptXY) {
    if (this.mapCanvasProjection_) {
      var latLng = this.mapCanvasProjection_.fromContainerPixelToLatLng(ptXY);
      return { lat: latLng.lat(), lng: latLng.lng() };
    }

    var ptxy = _extends({}, ptXY);
    ptxy.x -= this.transform_.width / 2;
    ptxy.y -= this.transform_.height / 2;
    var ptRes = this.transform_.pointLocation(_pointGeometry2.default.convert(ptxy));

    ptRes.lng -= 360 * Math.round(ptRes.lng / 360); // convert 2 google format
    return ptRes;
  };

  Geo.prototype.getWidth = function getWidth() {
    return this.transform_.width;
  };

  Geo.prototype.getHeight = function getHeight() {
    return this.transform_.height;
  };

  Geo.prototype.getZoom = function getZoom() {
    return this.transform_.zoom;
  };

  Geo.prototype.getCenter = function getCenter() {
    var ptRes = this.transform_.pointLocation({ x: 0, y: 0 });

    return ptRes;
  };

  Geo.prototype.getBounds = function getBounds(margins, roundFactor) {
    var bndT = margins && margins[0] || 0;
    var bndR = margins && margins[1] || 0;
    var bndB = margins && margins[2] || 0;
    var bndL = margins && margins[3] || 0;

    if (this.getWidth() - bndR - bndL > 0 && this.getHeight() - bndT - bndB > 0) {
      var topLeftCorner = this.transform_.pointLocation(_pointGeometry2.default.convert({
        x: bndL - this.getWidth() / 2,
        y: bndT - this.getHeight() / 2
      }));
      var bottomRightCorner = this.transform_.pointLocation(_pointGeometry2.default.convert({
        x: this.getWidth() / 2 - bndR,
        y: this.getHeight() / 2 - bndB
      }));

      var res = [topLeftCorner.lat, topLeftCorner.lng, // NW
      bottomRightCorner.lat, bottomRightCorner.lng, // SE
      bottomRightCorner.lat, topLeftCorner.lng, // SW
      topLeftCorner.lat, bottomRightCorner.lng];

      if (roundFactor) {
        res = res.map(function (r) {
          return Math.round(r * roundFactor) / roundFactor;
        });
      }
      return res;
    }

    return [0, 0, 0, 0];
  };

  return Geo;
}();

exports.default = Geo;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/isArraysEqualEps.js":
/*!*********************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/isArraysEqualEps.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isArraysEqualEps;
function isArraysEqualEps(arrayA, arrayB, eps) {
  if (arrayA && arrayB) {
    for (var i = 0; i !== arrayA.length; ++i) {
      if (Math.abs(arrayA[i] - arrayB[i]) > eps) {
        return false;
      }
    }
    return true;
  }
  return false;
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/isEmpty.js":
/*!************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/isEmpty.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isEmpty = function isEmpty(val) {
  // check for empty object {}, array []
  if (val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
    if (Object.keys(val).length === 0) {
      return true;
    }
  } else if (val === null || val === undefined || val === '') {
    // check for undefined, null and ""
    return true;
  }
  return false;
};

exports.default = isEmpty;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/isNumber.js":
/*!*************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/isNumber.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isNumber;
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}

var objectToString = Object.prototype.toString;

function isNumber(value) {
  var numberTag = '[object Number]';
  return typeof value === 'number' || isObjectLike(value) && objectToString.call(value) === numberTag;
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/isPlainObject.js":
/*!******************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/isPlainObject.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isPlainObject;
// source taken from https://github.com/rackt/redux/blob/master/src/utils/isPlainObject.js
var fnToString = function fnToString(fn) {
  return Function.prototype.toString.call(fn);
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return false;
  }

  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

  if (proto === null) {
    return true;
  }

  var constructor = proto.constructor;

  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/lat_lng.js":
/*!********************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/lib_geo/lat_lng.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _wrap2 = __webpack_require__(/*! ./wrap */ "./node_modules/google-map-react/lib/utils/lib_geo/wrap.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LatLng = function () {
  function LatLng(lat, lng) {
    _classCallCheck(this, LatLng);

    if (isNaN(lat) || isNaN(lng)) {
      throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
    }
    this.lat = +lat;
    this.lng = +lng;
  }

  LatLng.prototype.wrap = function wrap() {
    return new LatLng(this.lat, (0, _wrap2.wrap)(this.lng, -180, 180));
  };

  return LatLng;
}();

LatLng.convert = function (a) {
  if (a instanceof LatLng) {
    return a;
  }

  if (Array.isArray(a)) {
    return new LatLng(a[0], a[1]);
  }

  if ('lng' in a && 'lat' in a) {
    return new LatLng(a.lat, a.lng);
  }

  return a;
};

exports.default = LatLng;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/transform.js":
/*!**********************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/lib_geo/transform.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _pointGeometry = __webpack_require__(/*! @mapbox/point-geometry */ "./node_modules/@mapbox/point-geometry/index.js");

var _pointGeometry2 = _interopRequireDefault(_pointGeometry);

var _lat_lng = __webpack_require__(/*! ./lat_lng */ "./node_modules/google-map-react/lib/utils/lib_geo/lat_lng.js");

var _lat_lng2 = _interopRequireDefault(_lat_lng);

var _wrap = __webpack_require__(/*! ./wrap */ "./node_modules/google-map-react/lib/utils/lib_geo/wrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A single transform, generally used for a single tile to be scaled, rotated, and zoomed.
var Transform = function () {
  function Transform(tileSize, minZoom, maxZoom) {
    _classCallCheck(this, Transform);

    this.tileSize = tileSize || 512; // constant

    this._minZoom = minZoom || 0;
    this._maxZoom = maxZoom || 52;

    this.latRange = [-85.05113, 85.05113];

    this.width = 0;
    this.height = 0;
    this.zoom = 0;
    this.center = new _lat_lng2.default(0, 0);
    this.angle = 0;
  }

  Transform.prototype.zoomScale = function zoomScale(zoom) {
    return Math.pow(2, zoom);
  };

  Transform.prototype.scaleZoom = function scaleZoom(scale) {
    return Math.log(scale) / Math.LN2;
  };

  Transform.prototype.project = function project(latlng, worldSize) {
    return new _pointGeometry2.default(this.lngX(latlng.lng, worldSize), this.latY(latlng.lat, worldSize));
  };

  Transform.prototype.unproject = function unproject(point, worldSize) {
    return new _lat_lng2.default(this.yLat(point.y, worldSize), this.xLng(point.x, worldSize));
  };

  // lat/lon <-> absolute pixel coords convertion
  Transform.prototype.lngX = function lngX(lon, worldSize) {
    return (180 + lon) * (worldSize || this.worldSize) / 360;
  };

  // latitude to absolute y coord


  Transform.prototype.latY = function latY(lat, worldSize) {
    var y = 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
    return (180 - y) * (worldSize || this.worldSize) / 360;
  };

  Transform.prototype.xLng = function xLng(x, worldSize) {
    return x * 360 / (worldSize || this.worldSize) - 180;
  };

  Transform.prototype.yLat = function yLat(y, worldSize) {
    var y2 = 180 - y * 360 / (worldSize || this.worldSize);
    return 360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90;
  };

  Transform.prototype.locationPoint = function locationPoint(latlng) {
    var p = this.project(latlng);
    return this.centerPoint._sub(this.point._sub(p)._rotate(this.angle));
  };

  Transform.prototype.pointLocation = function pointLocation(p) {
    var p2 = this.centerPoint._sub(p)._rotate(-this.angle);
    return this.unproject(this.point.sub(p2));
  };

  _createClass(Transform, [{
    key: 'minZoom',
    get: function get() {
      return this._minZoom;
    },
    set: function set(zoom) {
      this._minZoom = zoom;
      this.zoom = Math.max(this.zoom, zoom);
    }
  }, {
    key: 'maxZoom',
    get: function get() {
      return this._maxZoom;
    },
    set: function set(zoom) {
      this._maxZoom = zoom;
      this.zoom = Math.min(this.zoom, zoom);
    }
  }, {
    key: 'worldSize',
    get: function get() {
      return this.tileSize * this.scale;
    }
  }, {
    key: 'centerPoint',
    get: function get() {
      return new _pointGeometry2.default(0, 0); // this.size._div(2);
    }
  }, {
    key: 'size',
    get: function get() {
      return new _pointGeometry2.default(this.width, this.height);
    }
  }, {
    key: 'bearing',
    get: function get() {
      return -this.angle / Math.PI * 180;
    },
    set: function set(bearing) {
      this.angle = -(0, _wrap.wrap)(bearing, -180, 180) * Math.PI / 180;
    }
  }, {
    key: 'zoom',
    get: function get() {
      return this._zoom;
    },
    set: function set(zoom) {
      var zoomV = Math.min(Math.max(zoom, this.minZoom), this.maxZoom);
      this._zoom = zoomV;
      this.scale = this.zoomScale(zoomV);
      this.tileZoom = Math.floor(zoomV);
      this.zoomFraction = zoomV - this.tileZoom;
    }
  }, {
    key: 'x',
    get: function get() {
      return this.lngX(this.center.lng);
    }
  }, {
    key: 'y',
    get: function get() {
      return this.latY(this.center.lat);
    }
  }, {
    key: 'point',
    get: function get() {
      return new _pointGeometry2.default(this.x, this.y);
    }
  }]);

  return Transform;
}();

exports.default = Transform;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/wrap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/lib_geo/wrap.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.wrap = wrap;
/* eslint-disable import/prefer-default-export */

function wrap(n, min, max) {
  var d = max - min;
  return n === max ? n : ((n - min) % d + d) % d + min;
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/math/log2.js":
/*!**************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/math/log2.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var log2 = Math.log2 ? Math.log2 : function (x) {
  return Math.log(x) / Math.LN2;
};

exports.default = log2;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/omit.js":
/*!*********************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/omit.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/acdlite/recompose/blob/master/src/packages/recompose/utils/omit.js
var omit = function omit(obj, keys) {
  var rest = _objectWithoutProperties(obj, []);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key in rest) {
      delete rest[key];
    }
  }
  return rest;
};

exports.default = omit;

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/passiveEvents.js":
/*!******************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/passiveEvents.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = addPassiveEventListener;
// feature detection for passive support
// see: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
function hasPassiveSupport() {
  var passiveSupported = false;

  try {
    var options = Object.defineProperty({}, 'passive', {
      get: function get() {
        passiveSupported = true;
      }
    });

    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
}

function addPassiveEventListener(element, eventName, func, capture) {
  element.addEventListener(eventName, func, hasPassiveSupport() ? {
    capture: capture,
    passive: true
  } : capture);
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/pick.js":
/*!*********************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/pick.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = pick;
// source taken from https://github.com/rackt/redux/blob/master/src/utils/pick.js

function pick(obj, fn) {
  return Object.keys(obj).reduce(function (result, key) {
    if (fn(obj[key])) {
      result[key] = obj[key]; // eslint-disable-line
    }
    return result;
  }, {});
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/raf.js":
/*!********************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/raf.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = raf;
function raf(callback) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(callback);
  }

  var nativeRaf = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

  return nativeRaf ? nativeRaf(callback) : window.setTimeout(callback, 1e3 / 60);
}

/***/ }),

/***/ "./node_modules/google-map-react/lib/utils/shallowEqual.js":
/*!*****************************************************************!*\
  !*** ./node_modules/google-map-react/lib/utils/shallowEqual.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 * 
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  }
  // Step 6.a: NaN == NaN
  // eslint-disable-next-line no-self-compare
  return x !== x && y !== y;
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
/* src: https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js */

/***/ }),

/***/ "./node_modules/scriptjs/dist/script.js":
/*!**********************************************!*\
  !*** ./node_modules/scriptjs/dist/script.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else {}
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      fn(el)
      return 1
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hcGJveC9wb2ludC1nZW9tZXRyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvZ29vZ2xlX2hlYXRtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL2dvb2dsZV9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL2dvb2dsZV9tYXBfbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9nb29nbGVfbWFwX21hcmtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL2dvb2dsZV9tYXBfbWFya2Vyc19wcmVyZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9sb2FkZXJzL2dvb2dsZV9tYXBfbG9hZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi9tYXJrZXJfZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9kZXRlY3RFbGVtZW50UmVzaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9nZW8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2lzQXJyYXlzRXF1YWxFcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2lzTnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9saWJfZ2VvL2xhdF9sbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL2xpYl9nZW8vdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9saWJfZ2VvL3dyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXAtcmVhY3QvbGliL3V0aWxzL21hdGgvbG9nMi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvb21pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvcGFzc2l2ZUV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvcGljay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ29vZ2xlLW1hcC1yZWFjdC9saWIvdXRpbHMvcmFmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwLXJlYWN0L2xpYi91dGlscy9zaGFsbG93RXF1YWwuanMiLCJ3ZWJw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QUFFLG9DQUFPLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUN4RSxPQUFPLEVBQXlCO0FBQ2hDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2RUFBNkUsc0JBQXNCO0FBQ25HOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxpQ0FBaUMsaUJBQWlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xuXG4vKipcbiAqIEEgc3RhbmRhbG9uZSBwb2ludCBnZW9tZXRyeSB3aXRoIHVzZWZ1bCBhY2Nlc3NvciwgY29tcGFyaXNvbiwgYW5kXG4gKiBtb2RpZmljYXRpb24gbWV0aG9kcy5cbiAqXG4gKiBAY2xhc3MgUG9pbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IHRoZSB4LWNvb3JkaW5hdGUuIHRoaXMgY291bGQgYmUgbG9uZ2l0dWRlIG9yIHNjcmVlblxuICogcGl4ZWxzLCBvciBhbnkgb3RoZXIgc29ydCBvZiB1bml0LlxuICogQHBhcmFtIHtOdW1iZXJ9IHkgdGhlIHktY29vcmRpbmF0ZS4gdGhpcyBjb3VsZCBiZSBsYXRpdHVkZSBvciBzY3JlZW5cbiAqIHBpeGVscywgb3IgYW55IG90aGVyIHNvcnQgb2YgdW5pdC5cbiAqIEBleGFtcGxlXG4gKiB2YXIgcG9pbnQgPSBuZXcgUG9pbnQoLTc3LCAzOCk7XG4gKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG59XG5cblBvaW50LnByb3RvdHlwZSA9IHtcblxuICAgIC8qKlxuICAgICAqIENsb25lIHRoaXMgcG9pbnQsIHJldHVybmluZyBhIG5ldyBwb2ludCB0aGF0IGNhbiBiZSBtb2RpZmllZFxuICAgICAqIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBvbGQgb25lLlxuICAgICAqIEByZXR1cm4ge1BvaW50fSB0aGUgY2xvbmVcbiAgICAgKi9cbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoaXMgcG9pbnQncyB4ICYgeSBjb29yZGluYXRlcyB0byBhbm90aGVyIHBvaW50LFxuICAgICAqIHlpZWxkaW5nIGEgbmV3IHBvaW50LlxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHAgdGhlIG90aGVyIHBvaW50XG4gICAgICogQHJldHVybiB7UG9pbnR9IG91dHB1dCBwb2ludFxuICAgICAqL1xuICAgIGFkZDogICAgIGZ1bmN0aW9uKHApIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fYWRkKHApOyB9LFxuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3QgdGhpcyBwb2ludCdzIHggJiB5IGNvb3JkaW5hdGVzIHRvIGZyb20gcG9pbnQsXG4gICAgICogeWllbGRpbmcgYSBuZXcgcG9pbnQuXG4gICAgICogQHBhcmFtIHtQb2ludH0gcCB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gb3V0cHV0IHBvaW50XG4gICAgICovXG4gICAgc3ViOiAgICAgZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9zdWIocCk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHBvaW50J3MgeCAmIHkgY29vcmRpbmF0ZXMgYnkgcG9pbnQsXG4gICAgICogeWllbGRpbmcgYSBuZXcgcG9pbnQuXG4gICAgICogQHBhcmFtIHtQb2ludH0gcCB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gb3V0cHV0IHBvaW50XG4gICAgICovXG4gICAgbXVsdEJ5UG9pbnQ6ICAgIGZ1bmN0aW9uKHApIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fbXVsdEJ5UG9pbnQocCk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGUgdGhpcyBwb2ludCdzIHggJiB5IGNvb3JkaW5hdGVzIGJ5IHBvaW50LFxuICAgICAqIHlpZWxkaW5nIGEgbmV3IHBvaW50LlxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHAgdGhlIG90aGVyIHBvaW50XG4gICAgICogQHJldHVybiB7UG9pbnR9IG91dHB1dCBwb2ludFxuICAgICAqL1xuICAgIGRpdkJ5UG9pbnQ6ICAgICBmdW5jdGlvbihwKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX2RpdkJ5UG9pbnQocCk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHBvaW50J3MgeCAmIHkgY29vcmRpbmF0ZXMgYnkgYSBmYWN0b3IsXG4gICAgICogeWllbGRpbmcgYSBuZXcgcG9pbnQuXG4gICAgICogQHBhcmFtIHtQb2ludH0gayBmYWN0b3JcbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gb3V0cHV0IHBvaW50XG4gICAgICovXG4gICAgbXVsdDogICAgZnVuY3Rpb24oaykgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9tdWx0KGspOyB9LFxuXG4gICAgLyoqXG4gICAgICogRGl2aWRlIHRoaXMgcG9pbnQncyB4ICYgeSBjb29yZGluYXRlcyBieSBhIGZhY3RvcixcbiAgICAgKiB5aWVsZGluZyBhIG5ldyBwb2ludC5cbiAgICAgKiBAcGFyYW0ge1BvaW50fSBrIGZhY3RvclxuICAgICAqIEByZXR1cm4ge1BvaW50fSBvdXRwdXQgcG9pbnRcbiAgICAgKi9cbiAgICBkaXY6ICAgICBmdW5jdGlvbihrKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX2RpdihrKTsgfSxcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZSB0aGlzIHBvaW50IGFyb3VuZCB0aGUgMCwgMCBvcmlnaW4gYnkgYW4gYW5nbGUgYSxcbiAgICAgKiBnaXZlbiBpbiByYWRpYW5zXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGEgYW5nbGUgdG8gcm90YXRlIGFyb3VuZCwgaW4gcmFkaWFuc1xuICAgICAqIEByZXR1cm4ge1BvaW50fSBvdXRwdXQgcG9pbnRcbiAgICAgKi9cbiAgICByb3RhdGU6ICBmdW5jdGlvbihhKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3JvdGF0ZShhKTsgfSxcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZSB0aGlzIHBvaW50IGFyb3VuZCBwIHBvaW50IGJ5IGFuIGFuZ2xlIGEsXG4gICAgICogZ2l2ZW4gaW4gcmFkaWFuc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBhIGFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQsIGluIHJhZGlhbnNcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwIFBvaW50IHRvIHJvdGF0ZSBhcm91bmRcbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gb3V0cHV0IHBvaW50XG4gICAgICovXG4gICAgcm90YXRlQXJvdW5kOiAgZnVuY3Rpb24oYSxwKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3JvdGF0ZUFyb3VuZChhLHApOyB9LFxuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyBwb2ludCBieSBhIDR4MSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcbiAgICAgKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IG0gdHJhbnNmb3JtYXRpb24gbWF0cml4XG4gICAgICogQHJldHVybiB7UG9pbnR9IG91dHB1dCBwb2ludFxuICAgICAqL1xuICAgIG1hdE11bHQ6IGZ1bmN0aW9uKG0pIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fbWF0TXVsdChtKTsgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGlzIHBvaW50IGJ1dCBhcyBhIHVuaXQgdmVjdG9yIGZyb20gMCwgMCwgbWVhbmluZ1xuICAgICAqIHRoYXQgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHJlc3VsdGluZyBwb2ludCB0byB0aGUgMCwgMFxuICAgICAqIGNvb3JkaW5hdGUgd2lsbCBiZSBlcXVhbCB0byAxIGFuZCB0aGUgYW5nbGUgZnJvbSB0aGUgcmVzdWx0aW5nXG4gICAgICogcG9pbnQgdG8gdGhlIDAsIDAgY29vcmRpbmF0ZSB3aWxsIGJlIHRoZSBzYW1lIGFzIGJlZm9yZS5cbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gdW5pdCB2ZWN0b3IgcG9pbnRcbiAgICAgKi9cbiAgICB1bml0OiAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fdW5pdCgpOyB9LFxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSBhIHBlcnBlbmRpY3VsYXIgcG9pbnQsIHdoZXJlIHRoZSBuZXcgeSBjb29yZGluYXRlXG4gICAgICogaXMgdGhlIG9sZCB4IGNvb3JkaW5hdGUgYW5kIHRoZSBuZXcgeCBjb29yZGluYXRlIGlzIHRoZSBvbGQgeVxuICAgICAqIGNvb3JkaW5hdGUgbXVsdGlwbGllZCBieSAtMVxuICAgICAqIEByZXR1cm4ge1BvaW50fSBwZXJwZW5kaWN1bGFyIHBvaW50XG4gICAgICovXG4gICAgcGVycDogICAgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3BlcnAoKTsgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybiBhIHZlcnNpb24gb2YgdGhpcyBwb2ludCB3aXRoIHRoZSB4ICYgeSBjb29yZGluYXRlc1xuICAgICAqIHJvdW5kZWQgdG8gaW50ZWdlcnMuXG4gICAgICogQHJldHVybiB7UG9pbnR9IHJvdW5kZWQgcG9pbnRcbiAgICAgKi9cbiAgICByb3VuZDogICBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcm91bmQoKTsgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgbWFnaXR1ZGUgb2YgdGhpcyBwb2ludDogdGhpcyBpcyB0aGUgRXVjbGlkZWFuXG4gICAgICogZGlzdGFuY2UgZnJvbSB0aGUgMCwgMCBjb29yZGluYXRlIHRvIHRoaXMgcG9pbnQncyB4IGFuZCB5XG4gICAgICogY29vcmRpbmF0ZXMuXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBtYWduaXR1ZGVcbiAgICAgKi9cbiAgICBtYWc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEp1ZGdlIHdoZXRoZXIgdGhpcyBwb2ludCBpcyBlcXVhbCB0byBhbm90aGVyIHBvaW50LCByZXR1cm5pbmdcbiAgICAgKiB0cnVlIG9yIGZhbHNlLlxuICAgICAqIEBwYXJhbSB7UG9pbnR9IG90aGVyIHRoZSBvdGhlciBwb2ludFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHdoZXRoZXIgdGhlIHBvaW50cyBhcmUgZXF1YWxcbiAgICAgKi9cbiAgICBlcXVhbHM6IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT09IG90aGVyLnggJiZcbiAgICAgICAgICAgICAgIHRoaXMueSA9PT0gb3RoZXIueTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBmcm9tIHRoaXMgcG9pbnQgdG8gYW5vdGhlciBwb2ludFxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHAgdGhlIG90aGVyIHBvaW50XG4gICAgICogQHJldHVybiB7TnVtYmVyfSBkaXN0YW5jZVxuICAgICAqL1xuICAgIGRpc3Q6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RTcXIocCkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGZyb20gdGhpcyBwb2ludCB0byBhbm90aGVyIHBvaW50LFxuICAgICAqIHdpdGhvdXQgdGhlIHNxdWFyZSByb290IHN0ZXAuIFVzZWZ1bCBpZiB5b3UncmUgY29tcGFyaW5nXG4gICAgICogcmVsYXRpdmUgZGlzdGFuY2VzLlxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHAgdGhlIG90aGVyIHBvaW50XG4gICAgICogQHJldHVybiB7TnVtYmVyfSBkaXN0YW5jZVxuICAgICAqL1xuICAgIGRpc3RTcXI6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgdmFyIGR4ID0gcC54IC0gdGhpcy54LFxuICAgICAgICAgICAgZHkgPSBwLnkgLSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhbmdsZSBmcm9tIHRoZSAwLCAwIGNvb3JkaW5hdGUgdG8gdGhpcyBwb2ludCwgaW4gcmFkaWFuc1xuICAgICAqIGNvb3JkaW5hdGVzLlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gYW5nbGVcbiAgICAgKi9cbiAgICBhbmdsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhbmdsZSBmcm9tIHRoaXMgcG9pbnQgdG8gYW5vdGhlciBwb2ludCwgaW4gcmFkaWFuc1xuICAgICAqIEBwYXJhbSB7UG9pbnR9IGIgdGhlIG90aGVyIHBvaW50XG4gICAgICogQHJldHVybiB7TnVtYmVyfSBhbmdsZVxuICAgICAqL1xuICAgIGFuZ2xlVG86IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55IC0gYi55LCB0aGlzLnggLSBiLngpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGFuZ2xlIGJldHdlZW4gdGhpcyBwb2ludCBhbmQgYW5vdGhlciBwb2ludCwgaW4gcmFkaWFuc1xuICAgICAqIEBwYXJhbSB7UG9pbnR9IGIgdGhlIG90aGVyIHBvaW50XG4gICAgICogQHJldHVybiB7TnVtYmVyfSBhbmdsZVxuICAgICAqL1xuICAgIGFuZ2xlV2l0aDogZnVuY3Rpb24oYikge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmdsZVdpdGhTZXAoYi54LCBiLnkpO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAqIEZpbmQgdGhlIGFuZ2xlIG9mIHRoZSB0d28gdmVjdG9ycywgc29sdmluZyB0aGUgZm9ybXVsYSBmb3JcbiAgICAgKiB0aGUgY3Jvc3MgcHJvZHVjdCBhIHggYiA9IHxhfHxifHNpbijOuCkgZm9yIM64LlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4IHRoZSB4LWNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geSB0aGUgeS1jb29yZGluYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfSB0aGUgYW5nbGUgaW4gcmFkaWFuc1xuICAgICAqL1xuICAgIGFuZ2xlV2l0aFNlcDogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIHRoaXMueCAqIHkgLSB0aGlzLnkgKiB4LFxuICAgICAgICAgICAgdGhpcy54ICogeCArIHRoaXMueSAqIHkpO1xuICAgIH0sXG5cbiAgICBfbWF0TXVsdDogZnVuY3Rpb24obSkge1xuICAgICAgICB2YXIgeCA9IG1bMF0gKiB0aGlzLnggKyBtWzFdICogdGhpcy55LFxuICAgICAgICAgICAgeSA9IG1bMl0gKiB0aGlzLnggKyBtWzNdICogdGhpcy55O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2FkZDogZnVuY3Rpb24ocCkge1xuICAgICAgICB0aGlzLnggKz0gcC54O1xuICAgICAgICB0aGlzLnkgKz0gcC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3N1YjogZnVuY3Rpb24ocCkge1xuICAgICAgICB0aGlzLnggLT0gcC54O1xuICAgICAgICB0aGlzLnkgLT0gcC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX211bHQ6IGZ1bmN0aW9uKGspIHtcbiAgICAgICAgdGhpcy54ICo9IGs7XG4gICAgICAgIHRoaXMueSAqPSBrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2RpdjogZnVuY3Rpb24oaykge1xuICAgICAgICB0aGlzLnggLz0gaztcbiAgICAgICAgdGhpcy55IC89IGs7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfbXVsdEJ5UG9pbnQ6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgdGhpcy54ICo9IHAueDtcbiAgICAgICAgdGhpcy55ICo9IHAueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9kaXZCeVBvaW50OiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHRoaXMueCAvPSBwLng7XG4gICAgICAgIHRoaXMueSAvPSBwLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfdW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2Rpdih0aGlzLm1hZygpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9wZXJwOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gLXk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcm90YXRlOiBmdW5jdGlvbihhbmdsZSkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgICAgeCA9IGNvcyAqIHRoaXMueCAtIHNpbiAqIHRoaXMueSxcbiAgICAgICAgICAgIHkgPSBzaW4gKiB0aGlzLnggKyBjb3MgKiB0aGlzLnk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcm90YXRlQXJvdW5kOiBmdW5jdGlvbihhbmdsZSwgcCkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgICAgeCA9IHAueCArIGNvcyAqICh0aGlzLnggLSBwLngpIC0gc2luICogKHRoaXMueSAtIHAueSksXG4gICAgICAgICAgICB5ID0gcC55ICsgc2luICogKHRoaXMueCAtIHAueCkgKyBjb3MgKiAodGhpcy55IC0gcC55KTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9yb3VuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG4vKipcbiAqIENvbnN0cnVjdCBhIHBvaW50IGZyb20gYW4gYXJyYXkgaWYgbmVjZXNzYXJ5LCBvdGhlcndpc2UgaWYgdGhlIGlucHV0XG4gKiBpcyBhbHJlYWR5IGEgUG9pbnQsIG9yIGFuIHVua25vd24gdHlwZSwgcmV0dXJuIGl0IHVuY2hhbmdlZFxuICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fFBvaW50fCp9IGEgYW55IGtpbmQgb2YgaW5wdXQgdmFsdWVcbiAqIEByZXR1cm4ge1BvaW50fSBjb25zdHJ1Y3RlZCBwb2ludCwgb3IgcGFzc2VkLXRocm91Z2ggdmFsdWUuXG4gKiBAZXhhbXBsZVxuICogLy8gdGhpc1xuICogdmFyIHBvaW50ID0gUG9pbnQuY29udmVydChbMCwgMV0pO1xuICogLy8gaXMgZXF1aXZhbGVudCB0b1xuICogdmFyIHBvaW50ID0gbmV3IFBvaW50KDAsIDEpO1xuICovXG5Qb2ludC5jb252ZXJ0ID0gZnVuY3Rpb24gKGEpIHtcbiAgICBpZiAoYSBpbnN0YW5jZW9mIFBvaW50KSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KGFbMF0sIGFbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vL1xuLy8gV2Ugc3RvcmUgb3VyIEVFIG9iamVjdHMgaW4gYSBwbGFpbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgZXZlbnQgbmFtZXMuXG4vLyBJZiBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaXMgbm90IHN1cHBvcnRlZCB3ZSBwcmVmaXggdGhlIGV2ZW50IG5hbWVzIHdpdGggYVxuLy8gYH5gIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBidWlsdC1pbiBvYmplY3QgcHJvcGVydGllcyBhcmUgbm90IG92ZXJyaWRkZW4gb3Jcbi8vIHVzZWQgYXMgYW4gYXR0YWNrIHZlY3Rvci5cbi8vIFdlIGFsc28gYXNzdW1lIHRoYXQgYE9iamVjdC5jcmVhdGUobnVsbClgIGlzIGF2YWlsYWJsZSB3aGVuIHRoZSBldmVudCBuYW1lXG4vLyBpcyBhbiBFUzYgU3ltYm9sLlxuLy9cbnZhciBwcmVmaXggPSB0eXBlb2YgT2JqZWN0LmNyZWF0ZSAhPT0gJ2Z1bmN0aW9uJyA/ICd+JyA6IGZhbHNlO1xuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIEV2ZW50RW1pdHRlciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBFdmVudCBoYW5kbGVyIHRvIGJlIGNhbGxlZC5cbiAqIEBwYXJhbSB7TWl4ZWR9IGNvbnRleHQgQ29udGV4dCBmb3IgZnVuY3Rpb24gZXhlY3V0aW9uLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gT25seSBlbWl0IG9uY2VcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFRShmbiwgY29udGV4dCwgb25jZSkge1xuICB0aGlzLmZuID0gZm47XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMub25jZSA9IG9uY2UgfHwgZmFsc2U7XG59XG5cbi8qKlxuICogTWluaW1hbCBFdmVudEVtaXR0ZXIgaW50ZXJmYWNlIHRoYXQgaXMgbW9sZGVkIGFnYWluc3QgdGhlIE5vZGUuanNcbiAqIEV2ZW50RW1pdHRlciBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7IC8qIE5vdGhpbmcgdG8gc2V0ICovIH1cblxuLyoqXG4gKiBIb2xkIHRoZSBhc3NpZ25lZCBFdmVudEVtaXR0ZXJzIGJ5IG5hbWUuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgbGlzdGluZyB0aGUgZXZlbnRzIGZvciB3aGljaCB0aGUgZW1pdHRlciBoYXMgcmVnaXN0ZXJlZFxuICogbGlzdGVuZXJzLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHNcbiAgICAsIG5hbWVzID0gW11cbiAgICAsIG5hbWU7XG5cbiAgaWYgKCFldmVudHMpIHJldHVybiBuYW1lcztcblxuICBmb3IgKG5hbWUgaW4gZXZlbnRzKSB7XG4gICAgaWYgKGhhcy5jYWxsKGV2ZW50cywgbmFtZSkpIG5hbWVzLnB1c2gocHJlZml4ID8gbmFtZS5zbGljZSgxKSA6IG5hbWUpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICByZXR1cm4gbmFtZXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZXZlbnRzKSk7XG4gIH1cblxuICByZXR1cm4gbmFtZXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhIGxpc3Qgb2YgYXNzaWduZWQgZXZlbnQgbGlzdGVuZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnRzIHRoYXQgc2hvdWxkIGJlIGxpc3RlZC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXhpc3RzIFdlIG9ubHkgbmVlZCB0byBrbm93IGlmIHRoZXJlIGFyZSBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7QXJyYXl8Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50LCBleGlzdHMpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGF2YWlsYWJsZSA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoZXhpc3RzKSByZXR1cm4gISFhdmFpbGFibGU7XG4gIGlmICghYXZhaWxhYmxlKSByZXR1cm4gW107XG4gIGlmIChhdmFpbGFibGUuZm4pIHJldHVybiBbYXZhaWxhYmxlLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGF2YWlsYWJsZS5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBhdmFpbGFibGVbaV0uZm47XG4gIH1cblxuICByZXR1cm4gZWU7XG59O1xuXG4vKipcbiAqIEVtaXQgYW4gZXZlbnQgdG8gYWxsIHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gSW5kaWNhdGlvbiBpZiB3ZSd2ZSBlbWl0dGVkIGFuIGV2ZW50LlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGxpc3RlbmVycy5mbikge1xuICAgIGlmIChsaXN0ZW5lcnMub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgc3dpdGNoIChsZW4pIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSksIHRydWU7XG4gICAgICBjYXNlIDM6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCksIHRydWU7XG4gICAgICBjYXNlIDY6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZuLmFwcGx5KGxpc3RlbmVycy5jb250ZXh0LCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgLCBqO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyc1tpXS5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgc3dpdGNoIChsZW4pIHtcbiAgICAgICAgY2FzZSAxOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCk7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSk7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWFyZ3MpIGZvciAoaiA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBhcmdzW2ogLSAxXSA9IGFyZ3VtZW50c1tqXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uYXBwbHkobGlzdGVuZXJzW2ldLmNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBhIG5ldyBFdmVudExpc3RlbmVyIGZvciB0aGUgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IE5hbWUgb2YgdGhlIGV2ZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gQ2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge01peGVkfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCBvZiB0aGUgZnVuY3Rpb24uXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCB0aGlzKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50cykgdGhpcy5fZXZlbnRzID0gcHJlZml4ID8ge30gOiBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyO1xuICBlbHNlIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdLmZuKSB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgICBlbHNlIHRoaXMuX2V2ZW50c1tldnRdID0gW1xuICAgICAgdGhpcy5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGQgYW4gRXZlbnRMaXN0ZW5lciB0aGF0J3Mgb25seSBjYWxsZWQgb25jZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgTmFtZSBvZiB0aGUgZXZlbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBDYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IG9mIHRoZSBmdW5jdGlvbi5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCB0aGlzLCB0cnVlKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50cykgdGhpcy5fZXZlbnRzID0gcHJlZml4ID8ge30gOiBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyO1xuICBlbHNlIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdLmZuKSB0aGlzLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgICBlbHNlIHRoaXMuX2V2ZW50c1tldnRdID0gW1xuICAgICAgdGhpcy5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnQgd2Ugd2FudCB0byByZW1vdmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgdGhhdCB3ZSBuZWVkIHRvIGZpbmQuXG4gKiBAcGFyYW0ge01peGVkfSBjb250ZXh0IE9ubHkgcmVtb3ZlIGxpc3RlbmVycyBtYXRjaGluZyB0aGlzIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25jZSBsaXN0ZW5lcnMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIHRoaXM7XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdXG4gICAgLCBldmVudHMgPSBbXTtcblxuICBpZiAoZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgICBpZiAoXG4gICAgICAgICAgIGxpc3RlbmVycy5mbiAhPT0gZm5cbiAgICAgICAgfHwgKG9uY2UgJiYgIWxpc3RlbmVycy5vbmNlKVxuICAgICAgICB8fCAoY29udGV4dCAmJiBsaXN0ZW5lcnMuY29udGV4dCAhPT0gY29udGV4dClcbiAgICAgICkge1xuICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuXG4gICAgICAgICAgfHwgKG9uY2UgJiYgIWxpc3RlbmVyc1tpXS5vbmNlKVxuICAgICAgICAgIHx8IChjb250ZXh0ICYmIGxpc3RlbmVyc1tpXS5jb250ZXh0ICE9PSBjb250ZXh0KVxuICAgICAgICApIHtcbiAgICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9cbiAgLy8gUmVzZXQgdGhlIGFycmF5LCBvciByZW1vdmUgaXQgY29tcGxldGVseSBpZiB3ZSBoYXZlIG5vIG1vcmUgbGlzdGVuZXJzLlxuICAvL1xuICBpZiAoZXZlbnRzLmxlbmd0aCkge1xuICAgIHRoaXMuX2V2ZW50c1tldnRdID0gZXZlbnRzLmxlbmd0aCA9PT0gMSA/IGV2ZW50c1swXSA6IGV2ZW50cztcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgdGhpcy5fZXZlbnRzW2V2dF07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgb3Igb25seSB0aGUgbGlzdGVuZXJzIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnQgd2FudCB0byByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICBpZiAoIXRoaXMuX2V2ZW50cykgcmV0dXJuIHRoaXM7XG5cbiAgaWYgKGV2ZW50KSBkZWxldGUgdGhpcy5fZXZlbnRzW3ByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRdO1xuICBlbHNlIHRoaXMuX2V2ZW50cyA9IHByZWZpeCA/IHt9IDogT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gVGhpcyBmdW5jdGlvbiBkb2Vzbid0IGFwcGx5IGFueW1vcmUuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGdlbmVyYXRlSGVhdG1hcCA9IGV4cG9ydHMuZ2VuZXJhdGVIZWF0bWFwID0gZnVuY3Rpb24gZ2VuZXJhdGVIZWF0bWFwKGluc3RhbmNlLCBfcmVmKSB7XG4gIHZhciBwb3NpdGlvbnMgPSBfcmVmLnBvc2l0aW9ucztcbiAgcmV0dXJuIG5ldyBpbnN0YW5jZS52aXN1YWxpemF0aW9uLkhlYXRtYXBMYXllcih7XG4gICAgZGF0YTogcG9zaXRpb25zLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBfcmVmMikge1xuICAgICAgdmFyIGxhdCA9IF9yZWYyLmxhdCxcbiAgICAgICAgICBsbmcgPSBfcmVmMi5sbmcsXG4gICAgICAgICAgX3JlZjIkd2VpZ2h0ID0gX3JlZjIud2VpZ2h0LFxuICAgICAgICAgIHdlaWdodCA9IF9yZWYyJHdlaWdodCA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYyJHdlaWdodDtcblxuICAgICAgYWNjLnB1c2goe1xuICAgICAgICBsb2NhdGlvbjogbmV3IGluc3RhbmNlLkxhdExuZyhsYXQsIGxuZyksXG4gICAgICAgIHdlaWdodDogd2VpZ2h0XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pXG4gIH0pO1xufTtcblxudmFyIG9wdGlvbnNIZWF0bWFwID0gZXhwb3J0cy5vcHRpb25zSGVhdG1hcCA9IGZ1bmN0aW9uIG9wdGlvbnNIZWF0bWFwKGluc3RhbmNlLCBfcmVmMykge1xuICB2YXIgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICBvcHRpb25zID0gX3JlZjMkb3B0aW9ucyA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmMyRvcHRpb25zO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykubWFwKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gaW5zdGFuY2Uuc2V0KG9wdGlvbiwgb3B0aW9uc1tvcHRpb25dKTtcbiAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2dvb2dsZV9tYXBfbWFwID0gcmVxdWlyZSgnLi9nb29nbGVfbWFwX21hcCcpO1xuXG52YXIgX2dvb2dsZV9tYXBfbWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dvb2dsZV9tYXBfbWFwKTtcblxudmFyIF9tYXJrZXJfZGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4vbWFya2VyX2Rpc3BhdGNoZXInKTtcblxudmFyIF9tYXJrZXJfZGlzcGF0Y2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXJrZXJfZGlzcGF0Y2hlcik7XG5cbnZhciBfZ29vZ2xlX21hcF9tYXJrZXJzID0gcmVxdWlyZSgnLi9nb29nbGVfbWFwX21hcmtlcnMnKTtcblxudmFyIF9nb29nbGVfbWFwX21hcmtlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZ2xlX21hcF9tYXJrZXJzKTtcblxudmFyIF9nb29nbGVfbWFwX21hcmtlcnNfcHJlcmVuZGVyID0gcmVxdWlyZSgnLi9nb29nbGVfbWFwX21hcmtlcnNfcHJlcmVuZGVyJyk7XG5cbnZhciBfZ29vZ2xlX21hcF9tYXJrZXJzX3ByZXJlbmRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29nbGVfbWFwX21hcmtlcnNfcHJlcmVuZGVyKTtcblxudmFyIF9nb29nbGVfaGVhdG1hcCA9IHJlcXVpcmUoJy4vZ29vZ2xlX2hlYXRtYXAnKTtcblxudmFyIF9nb29nbGVfbWFwX2xvYWRlciA9IHJlcXVpcmUoJy4vbG9hZGVycy9nb29nbGVfbWFwX2xvYWRlcicpO1xuXG52YXIgX2dvb2dsZV9tYXBfbG9hZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dvb2dsZV9tYXBfbG9hZGVyKTtcblxudmFyIF9nZW8gPSByZXF1aXJlKCcuL3V0aWxzL2dlbycpO1xuXG52YXIgX2dlbzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW8pO1xuXG52YXIgX3JhZiA9IHJlcXVpcmUoJy4vdXRpbHMvcmFmJyk7XG5cbnZhciBfcmFmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhZik7XG5cbnZhciBfcGljayA9IHJlcXVpcmUoJy4vdXRpbHMvcGljaycpO1xuXG52YXIgX3BpY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGljayk7XG5cbnZhciBfb21pdCA9IHJlcXVpcmUoJy4vdXRpbHMvb21pdCcpO1xuXG52YXIgX29taXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb21pdCk7XG5cbnZhciBfbG9nID0gcmVxdWlyZSgnLi91dGlscy9tYXRoL2xvZzInKTtcblxudmFyIF9sb2cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9nKTtcblxudmFyIF9pc0VtcHR5ID0gcmVxdWlyZSgnLi91dGlscy9pc0VtcHR5Jyk7XG5cbnZhciBfaXNFbXB0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0VtcHR5KTtcblxudmFyIF9pc051bWJlciA9IHJlcXVpcmUoJy4vdXRpbHMvaXNOdW1iZXInKTtcblxudmFyIF9pc051bWJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc051bWJlcik7XG5cbnZhciBfZGV0ZWN0ID0gcmVxdWlyZSgnLi91dGlscy9kZXRlY3QnKTtcblxudmFyIF9kZXRlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGV0ZWN0KTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCcuL3V0aWxzL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCcuL3V0aWxzL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG52YXIgX2lzQXJyYXlzRXF1YWxFcHMgPSByZXF1aXJlKCcuL3V0aWxzL2lzQXJyYXlzRXF1YWxFcHMnKTtcblxudmFyIF9pc0FycmF5c0VxdWFsRXBzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQXJyYXlzRXF1YWxFcHMpO1xuXG52YXIgX2RldGVjdEVsZW1lbnRSZXNpemUgPSByZXF1aXJlKCcuL3V0aWxzL2RldGVjdEVsZW1lbnRSZXNpemUnKTtcblxudmFyIF9kZXRlY3RFbGVtZW50UmVzaXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RldGVjdEVsZW1lbnRSZXNpemUpO1xuXG52YXIgX3Bhc3NpdmVFdmVudHMgPSByZXF1aXJlKCcuL3V0aWxzL3Bhc3NpdmVFdmVudHMnKTtcblxudmFyIF9wYXNzaXZlRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bhc3NpdmVFdmVudHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcywgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMsIHJlYWN0L25vLWZpbmQtZG9tLW5vZGUsIG5vLWNvbnNvbGUgKi9cblxuXG4vLyBoZWxwZXJzXG5cblxuLy8gbG9hZGVyc1xuXG5cbi8vIHV0aWxzXG5cblxuLy8gY29uc3RzXG52YXIga0VQUyA9IDAuMDAwMDE7XG52YXIgS19HT09HTEVfVElMRV9TSVpFID0gMjU2O1xuLy8gcmVhbCBtaW5ab29tIGNhbGN1bGF0ZWQgaGVyZSBfZ2V0TWluWm9vbVxudmFyIEtfSURMRV9USU1FT1VUID0gMTAwO1xudmFyIEtfSURMRV9DTElDS19USU1FT1VUID0gMzAwO1xudmFyIERFRkFVTFRfTUlOX1pPT00gPSAzO1xuLy8gU3RhcnRpbmcgd2l0aCB2ZXJzaW9uIDMuMzIsIHRoZSBtYXBzIEFQSSBjYWxscyBgZHJhdygpYCBlYWNoIGZyYW1lIGR1cmluZ1xuLy8gYSB6b29tIGFuaW1hdGlvbi5cbnZhciBEUkFXX0NBTExFRF9EVVJJTkdfQU5JTUFUSU9OX1ZFUlNJT04gPSAzMjtcbnZhciBJU19SRUFDVF8xNiA9IF9yZWFjdERvbTIuZGVmYXVsdC5jcmVhdGVQb3J0YWwgIT09IHVuZGVmaW5lZDtcblxudmFyIGNyZWF0ZVBvcnRhbCA9IElTX1JFQUNUXzE2ID8gX3JlYWN0RG9tMi5kZWZhdWx0LmNyZWF0ZVBvcnRhbCA6IF9yZWFjdERvbTIuZGVmYXVsdC51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcjtcblxuZnVuY3Rpb24gZGVmYXVsdE9wdGlvbnNfKCkgLyogbWFwcyAqL3tcbiAgcmV0dXJuIHtcbiAgICBvdmVydmlld01hcENvbnRyb2w6IGZhbHNlLFxuICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcbiAgICByb3RhdGVDb250cm9sOiB0cnVlLFxuICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcbiAgICAvLyBkaXNhYmxlIHBvaVxuICAgIHN0eWxlczogW3tcbiAgICAgIGZlYXR1cmVUeXBlOiAncG9pJyxcbiAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzJyxcbiAgICAgIHN0eWxlcnM6IFt7IHZpc2liaWxpdHk6ICdvZmYnIH1dXG4gICAgfV0sXG4gICAgbWluWm9vbTogREVGQVVMVF9NSU5fWk9PTSAvLyBkeW5hbWljYWxseSByZWNhbGN1bHRlZCBpZiBwb3NzaWJsZSBkdXJpbmcgaW5pdFxuICB9O1xufVxuXG52YXIgbGF0TG5nMk9iaiA9IGZ1bmN0aW9uIGxhdExuZzJPYmoobGF0TG5nKSB7XG4gIHJldHVybiAoMCwgX2lzUGxhaW5PYmplY3QyLmRlZmF1bHQpKGxhdExuZykgPyBsYXRMbmcgOiB7IGxhdDogbGF0TG5nWzBdLCBsbmc6IGxhdExuZ1sxXSB9O1xufTtcblxudmFyIF9jaGVja01pblpvb20gPSBmdW5jdGlvbiBfY2hlY2tNaW5ab29tKHpvb20sIG1pblpvb20pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoem9vbSA8IG1pblpvb20pIHtcbiAgICAgIGNvbnNvbGUud2FybignR29vZ2xlTWFwOiAnICsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgJ21pblpvb20gb3B0aW9uIGlzIGxlc3MgdGhhbiByZWNvbW1lbmRlZCAnICsgJ21pblpvb20gb3B0aW9uIGZvciB5b3VyIG1hcCBzaXplcy5cXG4nICsgJ292ZXJyaWRlZCB0byB2YWx1ZSAnICsgbWluWm9vbSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1pblpvb20gPCB6b29tKSB7XG4gICAgcmV0dXJuIHpvb207XG4gIH1cbiAgcmV0dXJuIG1pblpvb207XG59O1xuXG52YXIgaXNGdWxsU2NyZWVuID0gZnVuY3Rpb24gaXNGdWxsU2NyZWVuKCkge1xuICByZXR1cm4gZG9jdW1lbnQuZnVsbHNjcmVlbiB8fCBkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW4gfHwgZG9jdW1lbnQubW96RnVsbFNjcmVlbiB8fCBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50O1xufTtcblxudmFyIEdvb2dsZU1hcCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHb29nbGVNYXAsIF9Db21wb25lbnQpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBmdW5jdGlvbiBHb29nbGVNYXAocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR29vZ2xlTWFwKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuX2dldE1pblpvb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuZ2VvU2VydmljZV8uZ2V0V2lkdGgoKSA+IDAgfHwgX3RoaXMuZ2VvU2VydmljZV8uZ2V0SGVpZ2h0KCkgPiAwKSB7XG4gICAgICAgIHZhciB0aWxlc1BlcldpZHRoID0gTWF0aC5jZWlsKF90aGlzLmdlb1NlcnZpY2VfLmdldFdpZHRoKCkgLyBLX0dPT0dMRV9USUxFX1NJWkUpICsgMjtcbiAgICAgICAgdmFyIHRpbGVzUGVySGVpZ2h0ID0gTWF0aC5jZWlsKF90aGlzLmdlb1NlcnZpY2VfLmdldEhlaWdodCgpIC8gS19HT09HTEVfVElMRV9TSVpFKSArIDI7XG4gICAgICAgIHZhciBtYXhUaWxlc1BlckRpbSA9IE1hdGgubWF4KHRpbGVzUGVyV2lkdGgsIHRpbGVzUGVySGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgoMCwgX2xvZzIuZGVmYXVsdCkobWF4VGlsZXNQZXJEaW0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBERUZBVUxUX01JTl9aT09NO1xuICAgIH07XG5cbiAgICBfdGhpcy5fY29tcHV0ZU1pblpvb20gPSBmdW5jdGlvbiAobWluWm9vbSkge1xuICAgICAgaWYgKCEoMCwgX2lzRW1wdHkyLmRlZmF1bHQpKG1pblpvb20pKSB7XG4gICAgICAgIHJldHVybiBtaW5ab29tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzLl9nZXRNaW5ab29tKCk7XG4gICAgfTtcblxuICAgIF90aGlzLl9tYXBEb21SZXNpemVDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnJlc2V0U2l6ZU9uSWRsZV8gPSB0cnVlO1xuICAgICAgaWYgKF90aGlzLm1hcHNfKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbENlbnRlciA9IF90aGlzLnByb3BzLmNlbnRlciB8fCBfdGhpcy5wcm9wcy5kZWZhdWx0Q2VudGVyO1xuICAgICAgICB2YXIgY3VycmVudENlbnRlciA9IF90aGlzLm1hcF8uZ2V0Q2VudGVyKCk7XG4gICAgICAgIF90aGlzLm1hcHNfLmV2ZW50LnRyaWdnZXIoX3RoaXMubWFwXywgJ3Jlc2l6ZScpO1xuICAgICAgICBfdGhpcy5tYXBfLnNldENlbnRlcihfdGhpcy5wcm9wcy5yZXNldEJvdW5kc09uUmVzaXplID8gb3JpZ2luYWxDZW50ZXIgOiBjdXJyZW50Q2VudGVyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX3NldExheWVycyA9IGZ1bmN0aW9uIChsYXllclR5cGVzKSB7XG4gICAgICBsYXllclR5cGVzLmZvckVhY2goZnVuY3Rpb24gKGxheWVyVHlwZSkge1xuICAgICAgICBfdGhpcy5sYXllcnNfW2xheWVyVHlwZV0gPSBuZXcgX3RoaXMubWFwc19bbGF5ZXJUeXBlXSgpO1xuICAgICAgICBfdGhpcy5sYXllcnNfW2xheWVyVHlwZV0uc2V0TWFwKF90aGlzLm1hcF8pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLl9yZW5kZXJQb3J0YWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2dvb2dsZV9tYXBfbWFya2VyczIuZGVmYXVsdCwge1xuICAgICAgICBleHBlcmltZW50YWw6IF90aGlzLnByb3BzLmV4cGVyaW1lbnRhbCxcbiAgICAgICAgb25DaGlsZENsaWNrOiBfdGhpcy5fb25DaGlsZENsaWNrLFxuICAgICAgICBvbkNoaWxkTW91c2VEb3duOiBfdGhpcy5fb25DaGlsZE1vdXNlRG93bixcbiAgICAgICAgb25DaGlsZE1vdXNlRW50ZXI6IF90aGlzLl9vbkNoaWxkTW91c2VFbnRlcixcbiAgICAgICAgb25DaGlsZE1vdXNlTGVhdmU6IF90aGlzLl9vbkNoaWxkTW91c2VMZWF2ZSxcbiAgICAgICAgZ2VvU2VydmljZTogX3RoaXMuZ2VvU2VydmljZV8sXG4gICAgICAgIGluc2lkZU1hcFBhbmVzOiB0cnVlLFxuICAgICAgICBkaXN0YW5jZVRvTW91c2U6IF90aGlzLnByb3BzLmRpc3RhbmNlVG9Nb3VzZSxcbiAgICAgICAgZ2V0SG92ZXJEaXN0YW5jZTogX3RoaXMuX2dldEhvdmVyRGlzdGFuY2UsXG4gICAgICAgIGRpc3BhdGNoZXI6IF90aGlzLm1hcmtlcnNEaXNwYXRjaGVyX1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLl9pbml0TWFwID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gb25seSBpbml0aWFsaXplIHRoZSBtYXAgb25jZVxuICAgICAgaWYgKF90aGlzLmluaXRpYWxpemVkXykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpcy5pbml0aWFsaXplZF8gPSB0cnVlO1xuXG4gICAgICB2YXIgcHJvcHNDZW50ZXIgPSBsYXRMbmcyT2JqKF90aGlzLnByb3BzLmNlbnRlciB8fCBfdGhpcy5wcm9wcy5kZWZhdWx0Q2VudGVyKTtcbiAgICAgIF90aGlzLmdlb1NlcnZpY2VfLnNldFZpZXcocHJvcHNDZW50ZXIsIF90aGlzLnByb3BzLnpvb20gfHwgX3RoaXMucHJvcHMuZGVmYXVsdFpvb20sIDApO1xuXG4gICAgICBfdGhpcy5fb25Cb3VuZHNDaGFuZ2VkKCk7IC8vIG5vdyB3ZSBjYW4gY2FsY3VsYXRlIG1hcCBib3VuZHMgY2VudGVyIGV0Yy4uLlxuXG4gICAgICB2YXIgYm9vdHN0cmFwVVJMS2V5cyA9IF9leHRlbmRzKHt9LCBfdGhpcy5wcm9wcy5hcGlLZXkgJiYgeyBrZXk6IF90aGlzLnByb3BzLmFwaUtleSB9LCBfdGhpcy5wcm9wcy5ib290c3RyYXBVUkxLZXlzKTtcblxuICAgICAgX3RoaXMucHJvcHMuZ29vZ2xlTWFwTG9hZGVyKGJvb3RzdHJhcFVSTEtleXMsIF90aGlzLnByb3BzLmhlYXRtYXBMaWJyYXJ5KS50aGVuKGZ1bmN0aW9uIChtYXBzKSB7XG4gICAgICAgIGlmICghX3RoaXMubW91bnRlZF8pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2VudGVyTGF0TG5nID0gX3RoaXMuZ2VvU2VydmljZV8uZ2V0Q2VudGVyKCk7XG5cbiAgICAgICAgdmFyIHByb3BzT3B0aW9ucyA9IHtcbiAgICAgICAgICB6b29tOiBfdGhpcy5wcm9wcy56b29tIHx8IF90aGlzLnByb3BzLmRlZmF1bHRab29tLFxuICAgICAgICAgIGNlbnRlcjogbmV3IG1hcHMuTGF0TG5nKGNlbnRlckxhdExuZy5sYXQsIGNlbnRlckxhdExuZy5sbmcpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU3RhcnQgSGVhdG1hcFxuICAgICAgICBpZiAoX3RoaXMucHJvcHMuaGVhdG1hcC5wb3NpdGlvbnMpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKF90aGlzLCB7XG4gICAgICAgICAgICBoZWF0bWFwOiAoMCwgX2dvb2dsZV9oZWF0bWFwLmdlbmVyYXRlSGVhdG1hcCkobWFwcywgX3RoaXMucHJvcHMuaGVhdG1hcClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAoMCwgX2dvb2dsZV9oZWF0bWFwLm9wdGlvbnNIZWF0bWFwKShfdGhpcy5oZWF0bWFwLCBfdGhpcy5wcm9wcy5oZWF0bWFwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmQgSGVhdG1hcFxuXG4gICAgICAgIC8vIHByZXZlbnQgdG8gZXhhcG9zZSBmdWxsIGFwaVxuICAgICAgICAvLyBuZXh0IHByb3BzIG11c3QgYmUgZXhwb3NlZCAoY29uc29sZS5sb2coT2JqZWN0LmtleXMocGljayhtYXBzLCBpc1BsYWluT2JqZWN0KSkpKVxuICAgICAgICAvLyBcIkFuaW1hdGlvblwiLCBcIkNvbnRyb2xQb3NpdGlvblwiLCBcIk1hcFR5cGVDb250cm9sU3R5bGVcIiwgXCJNYXBUeXBlSWRcIixcbiAgICAgICAgLy8gXCJOYXZpZ2F0aW9uQ29udHJvbFN0eWxlXCIsIFwiU2NhbGVDb250cm9sU3R5bGVcIiwgXCJTdHJva2VQb3NpdGlvblwiLFxuICAgICAgICAvLyBcIlN5bWJvbFBhdGhcIiwgXCJab29tQ29udHJvbFN0eWxlXCIsXG4gICAgICAgIC8vIFwiZXZlbnRcIiwgXCJEaXJlY3Rpb25zU3RhdHVzXCIsIFwiRGlyZWN0aW9uc1RyYXZlbE1vZGVcIiwgXCJEaXJlY3Rpb25zVW5pdFN5c3RlbVwiLFxuICAgICAgICAvLyBcIkRpc3RhbmNlTWF0cml4U3RhdHVzXCIsXG4gICAgICAgIC8vIFwiRGlzdGFuY2VNYXRyaXhFbGVtZW50U3RhdHVzXCIsIFwiRWxldmF0aW9uU3RhdHVzXCIsIFwiR2VvY29kZXJMb2NhdGlvblR5cGVcIixcbiAgICAgICAgLy8gXCJHZW9jb2RlclN0YXR1c1wiLCBcIkttbExheWVyU3RhdHVzXCIsXG4gICAgICAgIC8vIFwiTWF4Wm9vbVN0YXR1c1wiLCBcIlN0cmVldFZpZXdTdGF0dXNcIiwgXCJUcmFuc2l0TW9kZVwiLCBcIlRyYW5zaXRSb3V0ZVByZWZlcmVuY2VcIixcbiAgICAgICAgLy8gXCJUcmF2ZWxNb2RlXCIsIFwiVW5pdFN5c3RlbVwiXG4gICAgICAgIHZhciBtYXBQbGFpbk9iamVjdHMgPSAoMCwgX3BpY2syLmRlZmF1bHQpKG1hcHMsIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2YgX3RoaXMucHJvcHMub3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IF90aGlzLnByb3BzLm9wdGlvbnMobWFwUGxhaW5PYmplY3RzKSA6IF90aGlzLnByb3BzLm9wdGlvbnM7XG4gICAgICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zXyhtYXBQbGFpbk9iamVjdHMpO1xuXG4gICAgICAgIHZhciBkcmFnZ2FibGVPcHRpb25zID0gISgwLCBfaXNFbXB0eTIuZGVmYXVsdCkoX3RoaXMucHJvcHMuZHJhZ2dhYmxlKSAmJiB7XG4gICAgICAgICAgZHJhZ2dhYmxlOiBfdGhpcy5wcm9wcy5kcmFnZ2FibGVcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgbWluWm9vbSA9IF90aGlzLl9jb21wdXRlTWluWm9vbShvcHRpb25zLm1pblpvb20pO1xuICAgICAgICBfdGhpcy5taW5ab29tXyA9IG1pblpvb207XG5cbiAgICAgICAgdmFyIHByZU1hcE9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgICAgICBtaW5ab29tOiBtaW5ab29tXG4gICAgICAgIH0sIG9wdGlvbnMsIHByb3BzT3B0aW9ucyk7XG5cbiAgICAgICAgX3RoaXMuZGVmYXVsdERyYWdnYWJsZU9wdGlvbl8gPSAhKDAsIF9pc0VtcHR5Mi5kZWZhdWx0KShwcmVNYXBPcHRpb25zLmRyYWdnYWJsZSkgPyBwcmVNYXBPcHRpb25zLmRyYWdnYWJsZSA6IF90aGlzLmRlZmF1bHREcmFnZ2FibGVPcHRpb25fO1xuXG4gICAgICAgIHZhciBtYXBPcHRpb25zID0gX2V4dGVuZHMoe30sIHByZU1hcE9wdGlvbnMsIGRyYWdnYWJsZU9wdGlvbnMpO1xuXG4gICAgICAgIG1hcE9wdGlvbnMubWluWm9vbSA9IF9jaGVja01pblpvb20obWFwT3B0aW9ucy5taW5ab29tLCBtaW5ab29tKTtcblxuICAgICAgICB2YXIgbWFwID0gbmV3IG1hcHMuTWFwKF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZShfdGhpcy5nb29nbGVNYXBEb21fKSwgbWFwT3B0aW9ucyk7XG5cbiAgICAgICAgX3RoaXMubWFwXyA9IG1hcDtcbiAgICAgICAgX3RoaXMubWFwc18gPSBtYXBzO1xuXG4gICAgICAgIF90aGlzLl9zZXRMYXllcnMoX3RoaXMucHJvcHMubGF5ZXJUeXBlcyk7XG5cbiAgICAgICAgLy8gUGFyc2UgYGdvb2dsZS5tYXBzLnZlcnNpb25gIHRvIGNhcHR1cmUgdGhlIG1ham9yIHZlcnNpb24gbnVtYmVyLlxuICAgICAgICB2YXIgdmVyc2lvbk1hdGNoID0gbWFwcy52ZXJzaW9uLm1hdGNoKC9eM1xcLihcXGQrKVxcLi8pO1xuICAgICAgICAvLyBUaGUgbWFqb3IgdmVyc2lvbiBpcyB0aGUgZmlyc3QgKGFuZCBvbmx5KSBjYXB0dXJlZCBncm91cC5cbiAgICAgICAgdmFyIG1hcHNWZXJzaW9uID0gdmVyc2lvbk1hdGNoICYmIE51bWJlcih2ZXJzaW9uTWF0Y2hbMV0pO1xuXG4gICAgICAgIC8vIHJlbmRlciBpbiBvdmVybGF5XG4gICAgICAgIHZhciB0aGlzXyA9IF90aGlzO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IE9iamVjdC5hc3NpZ24obmV3IG1hcHMuT3ZlcmxheVZpZXcoKSwge1xuICAgICAgICAgIG9uQWRkOiBmdW5jdGlvbiBvbkFkZCgpIHtcbiAgICAgICAgICAgIHZhciBLX01BWF9XSURUSCA9IHR5cGVvZiBzY3JlZW4gIT09ICd1bmRlZmluZWQnID8gc2NyZWVuLndpZHRoICsgJ3B4JyA6ICcyMDAwcHgnO1xuICAgICAgICAgICAgdmFyIEtfTUFYX0hFSUdIVCA9IHR5cGVvZiBzY3JlZW4gIT09ICd1bmRlZmluZWQnID8gc2NyZWVuLmhlaWdodCArICdweCcgOiAnMjAwMHB4JztcblxuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgICAgIGRpdi5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIGRpdi5zdHlsZS53aWR0aCA9IEtfTUFYX1dJRFRIOyAvLyBwcmV2ZW50cyBzb21lIGNocm9tZSBkcmF3IGRlZmVjdHNcbiAgICAgICAgICAgIGRpdi5zdHlsZS5oZWlnaHQgPSBLX01BWF9IRUlHSFQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzXy5wcm9wcy5vdmVybGF5Vmlld0RpdlN0eWxlKSB7XG4gICAgICAgICAgICAgIHZhciBvdmVybGF5Vmlld0RpdlN0eWxlID0gdGhpc18ucHJvcHMub3ZlcmxheVZpZXdEaXZTdHlsZTtcblxuICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBvdmVybGF5Vmlld0RpdlN0eWxlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvdmVybGF5Vmlld0RpdlN0eWxlKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3ZlcmxheVZpZXdEaXZTdHlsZSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgIGRpdi5zdHlsZVtwcm9wZXJ0eV0gPSBvdmVybGF5Vmlld0RpdlN0eWxlW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFuZXMgPSB0aGlzLmdldFBhbmVzKCk7XG4gICAgICAgICAgICBwYW5lcy5vdmVybGF5TW91c2VUYXJnZXQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIHRoaXNfLmdlb1NlcnZpY2VfLnNldE1hcENhbnZhc1Byb2plY3Rpb24obWFwcywgb3ZlcmxheS5nZXRQcm9qZWN0aW9uKCkpO1xuXG4gICAgICAgICAgICBpZiAoIUlTX1JFQUNUXzE2KSB7XG4gICAgICAgICAgICAgIGNyZWF0ZVBvcnRhbCh0aGlzXywgdGhpc18uX3JlbmRlclBvcnRhbCgpLCBkaXYsXG4gICAgICAgICAgICAgIC8vIHJlbW92ZSBwcmVyZW5kZXJlZCBtYXJrZXJzXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc18uc2V0U3RhdGUoeyBvdmVybGF5OiBkaXYgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpc18uc2V0U3RhdGUoeyBvdmVybGF5OiBkaXYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvblJlbW92ZTogZnVuY3Rpb24gb25SZW1vdmUoKSB7XG4gICAgICAgICAgICB2YXIgcmVuZGVyZWRPdmVybGF5ID0gdGhpc18uc3RhdGUub3ZlcmxheTtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZE92ZXJsYXkgJiYgIUlTX1JFQUNUXzE2KSB7XG4gICAgICAgICAgICAgIF9yZWFjdERvbTIuZGVmYXVsdC51bm1vdW50Q29tcG9uZW50QXROb2RlKHJlbmRlcmVkT3ZlcmxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzXy5zZXRTdGF0ZSh7IG92ZXJsYXk6IG51bGwgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkcmF3OiBmdW5jdGlvbiBkcmF3KCkge1xuICAgICAgICAgICAgdGhpc18udXBkYXRlQ291bnRlcl8rKztcbiAgICAgICAgICAgIHRoaXNfLl9vbkJvdW5kc0NoYW5nZWQobWFwLCBtYXBzLCAhdGhpc18ucHJvcHMuZGVib3VuY2VkKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzXy5nb29nbGVBcGlMb2FkZWRDYWxsZWRfKSB7XG4gICAgICAgICAgICAgIHRoaXNfLl9vbkdvb2dsZUFwaUxvYWRlZCh7IG1hcDogbWFwLCBtYXBzOiBtYXBzIH0pO1xuICAgICAgICAgICAgICB0aGlzXy5nb29nbGVBcGlMb2FkZWRDYWxsZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXNfLm1vdXNlXykge1xuICAgICAgICAgICAgICB2YXIgbGF0TG5nID0gdGhpc18uZ2VvU2VydmljZV8uZnJvbUNvbnRhaW5lclBpeGVsVG9MYXRMbmcodGhpc18ubW91c2VfKTtcbiAgICAgICAgICAgICAgdGhpc18ubW91c2VfLmxhdCA9IGxhdExuZy5sYXQ7XG4gICAgICAgICAgICAgIHRoaXNfLm1vdXNlXy5sbmcgPSBsYXRMbmcubG5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzXy5fb25DaGlsZE1vdXNlTW92ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGhpc18ubWFya2Vyc0Rpc3BhdGNoZXJfKSB7XG4gICAgICAgICAgICAgIHRoaXNfLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fQ0hBTkdFJyk7XG4gICAgICAgICAgICAgIGlmICh0aGlzXy5maXJlTW91c2VFdmVudE9uSWRsZV8pIHtcbiAgICAgICAgICAgICAgICB0aGlzXy5tYXJrZXJzRGlzcGF0Y2hlcl8uZW1pdCgna09OX01PVVNFX1BPU0lUSU9OX0NIQU5HRScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5vdmVybGF5XyA9IG92ZXJsYXk7XG5cbiAgICAgICAgb3ZlcmxheS5zZXRNYXAobWFwKTtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmhlYXRtYXAucG9zaXRpb25zKSB7XG4gICAgICAgICAgX3RoaXMuaGVhdG1hcC5zZXRNYXAobWFwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRpbGVzTG9hZGVkKSB7XG4gICAgICAgICAgbWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXAsICd0aWxlc2xvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXNfLl9vblRpbGVzTG9hZGVkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ3pvb21fY2hhbmdlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyByZWNhbGMgcG9zaXRpb24gYXQgem9vbSBzdGFydFxuICAgICAgICAgIGlmICh0aGlzXy5nZW9TZXJ2aWNlXy5nZXRab29tKCkgIT09IG1hcC5nZXRab29tKCkpIHtcbiAgICAgICAgICAgIGlmICghdGhpc18uem9vbUFuaW1hdGlvbkluUHJvZ3Jlc3NfKSB7XG4gICAgICAgICAgICAgIHRoaXNfLnpvb21BbmltYXRpb25JblByb2dyZXNzXyA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXNfLl9vblpvb21BbmltYXRpb25TdGFydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBkcmF3KCkgaXMgbm90IGNhbGxlZCBlYWNoIGZyYW1lIGR1cmluZyBhIHpvb20gYW5pbWF0aW9uLFxuICAgICAgICAgICAgLy8gc2ltdWxhdGUgaXQuXG4gICAgICAgICAgICBpZiAobWFwc1ZlcnNpb24gPCBEUkFXX0NBTExFRF9EVVJJTkdfQU5JTUFUSU9OX1ZFUlNJT04pIHtcbiAgICAgICAgICAgICAgdmFyIFRJTUVPVVRfWk9PTSA9IDMwMDtcblxuICAgICAgICAgICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBfdGhpcy56b29tQ29udHJvbENsaWNrVGltZV8gPCBUSU1FT1VUX1pPT00pIHtcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBzdHJhbmdlIEdvb2dsZSBNYXAgQXBpIGJlaGF2aW9yIGluIGNocm9tZSB3aGVuIHpvb20gYW5pbWF0aW9uIG9mIG1hcFxuICAgICAgICAgICAgICAgIC8vIGlzIHN0YXJ0ZWQgb25seSBvbiBzZWNvbmQgcmFmIGNhbGwsIGlmIHdhcyBjbGljayBvbiB6b29tIGNvbnRyb2xcbiAgICAgICAgICAgICAgICAvLyBvciArLSBrZXlzIHByZXNzZWQsIHNvIGkgd2FpdCBmb3IgdHdvIHJhZnMgYmVmb3JlIGNoYW5nZSBzdGF0ZVxuXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBkb2VzIG5vdCBmdWxseSBwcmV2ZW50IGFuaW1hdGlvbiBqdW1wXG4gICAgICAgICAgICAgICAgLy8gYnV0IHJlZHVjZSBpdCdzIG9jY3VyZW5jZSBwcm9iYWJpbGl0eVxuICAgICAgICAgICAgICAgICgwLCBfcmFmMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKDAsIF9yYWYyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc18udXBkYXRlQ291bnRlcl8rKztcbiAgICAgICAgICAgICAgICAgICAgdGhpc18uX29uQm91bmRzQ2hhbmdlZChtYXAsIG1hcHMpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc18udXBkYXRlQ291bnRlcl8rKztcbiAgICAgICAgICAgICAgICB0aGlzXy5fb25Cb3VuZHNDaGFuZ2VkKG1hcCwgbWFwcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAnaWRsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMucmVzZXRTaXplT25JZGxlXykge1xuICAgICAgICAgICAgX3RoaXMuX3NldFZpZXdTaXplKCk7XG4gICAgICAgICAgICB2YXIgY3Vyck1pblpvb20gPSBfdGhpcy5fY29tcHV0ZU1pblpvb20oX3RoaXMucHJvcHMub3B0aW9ucy5taW5ab29tKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJNaW5ab29tICE9PSBfdGhpcy5taW5ab29tXykge1xuICAgICAgICAgICAgICBfdGhpcy5taW5ab29tXyA9IGN1cnJNaW5ab29tO1xuICAgICAgICAgICAgICBtYXAuc2V0T3B0aW9ucyh7IG1pblpvb206IGN1cnJNaW5ab29tIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5yZXNldFNpemVPbklkbGVfID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXNfLnpvb21BbmltYXRpb25JblByb2dyZXNzXykge1xuICAgICAgICAgICAgdGhpc18uem9vbUFuaW1hdGlvbkluUHJvZ3Jlc3NfID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzXy5fb25ab29tQW5pbWF0aW9uRW5kKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpc18udXBkYXRlQ291bnRlcl8rKztcbiAgICAgICAgICB0aGlzXy5fb25Cb3VuZHNDaGFuZ2VkKG1hcCwgbWFwcyk7XG5cbiAgICAgICAgICB0aGlzXy5kcmFnVGltZV8gPSAwO1xuXG4gICAgICAgICAgaWYgKHRoaXNfLm1hcmtlcnNEaXNwYXRjaGVyXykge1xuICAgICAgICAgICAgdGhpc18ubWFya2Vyc0Rpc3BhdGNoZXJfLmVtaXQoJ2tPTl9DSEFOR0UnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAnbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIGhhcyBhZHZhbnRhZ2Ugb3ZlciBkaXYgTW91c2VMZWF2ZVxuICAgICAgICAgIHRoaXNfLm1vdXNlSW5NYXBfID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYW4gYWx0ZXJuYXRpdmUgd2F5IHRvIGtub3cgdGhlIG1vdXNlIGlzIGJhY2sgd2l0aGluIHRoZSBtYXBcbiAgICAgICAgLy8gVGhpcyB3b3VsZCBub3QgZmlyZSB3aGVuIGNsaWNraW5nL2ludGVyYWN0aW5nIHdpdGggZ29vZ2xlIG1hcHNcbiAgICAgICAgLy8gb3duIG9uLW1hcCBjb3VudHJvbHMrbWFya2Vycy4gVGhpcyBoYW5kbGVzIGFuIGVkZ2UgY2FzZSBmb3IgdG91Y2ggZGV2aWNlc1xuICAgICAgICAvLyArICdkcmFnZ2FibGU6ZmFsc2UnIGN1c3RvbSBvcHRpb24uIFNlZSAjMzMyIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICAgIG1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFwLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpc18ubW91c2VJbk1hcF8gPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBtYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIGhhcyBhZHZhbnRhZ2Ugb3ZlciBkaXYgTW91c2VMZWF2ZVxuICAgICAgICAgIHRoaXNfLm1vdXNlSW5NYXBfID0gZmFsc2U7XG4gICAgICAgICAgdGhpc18ubW91c2VfID0gbnVsbDtcbiAgICAgICAgICB0aGlzXy5tYXJrZXJzRGlzcGF0Y2hlcl8uZW1pdCgna09OX01PVVNFX1BPU0lUSU9OX0NIQU5HRScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ2RyYWcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpc18uZHJhZ1RpbWVfID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgdGhpc18uX29uRHJhZyhtYXApO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdXNlciBjaG9vc2luZyBzYXRlbGxpdGUgdnMgcm9hZHMsIGV0Y1xuICAgICAgICBtYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcCwgJ21hcHR5cGVpZF9jaGFuZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXNfLl9vbk1hcFR5cGVJZENoYW5nZShtYXAuZ2V0TWFwVHlwZUlkKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIG5vdGlmeSBjYWxsYmFjayBvZiBsb2FkIGZhaWx1cmVcbiAgICAgICAgX3RoaXMuX29uR29vZ2xlQXBpTG9hZGVkKHsgbWFwOiBudWxsLCBtYXBzOiBudWxsIH0pO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25Hb29nbGVBcGlMb2FkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Hb29nbGVBcGlMb2FkZWQpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF90aGlzLnByb3BzLnllc0lXYW50VG9Vc2VHb29nbGVNYXBBcGlJbnRlcm5hbHMgIT09IHRydWUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0dvb2dsZU1hcDogJyArIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAnVXNhZ2Ugb2YgaW50ZXJuYWwgYXBpIG9iamVjdHMgaXMgZGFuZ2Vyb3VzICcgKyAnYW5kIGNhbiBjYXVzZSBhIGxvdCBvZiBpc3N1ZXMuXFxuJyArICdUbyBoaWRlIHRoaXMgd2FybmluZyBhZGQgeWVzSVdhbnRUb1VzZUdvb2dsZU1hcEFwaUludGVybmFscz17dHJ1ZX0gJyArICd0byA8R29vZ2xlTWFwIGluc3RhbmNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAoX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcykub25Hb29nbGVBcGlMb2FkZWQuYXBwbHkoX3RoaXMkcHJvcHMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9nZXRIb3ZlckRpc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmhvdmVyRGlzdGFuY2U7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkRyYWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyO1xuXG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25EcmFnICYmIChfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcykub25EcmFnLmFwcGx5KF90aGlzJHByb3BzMiwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTWFwVHlwZUlkQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMztcblxuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uTWFwVHlwZUlkQ2hhbmdlICYmIChfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcykub25NYXBUeXBlSWRDaGFuZ2UuYXBwbHkoX3RoaXMkcHJvcHMzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25ab29tQW5pbWF0aW9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0O1xuXG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25ab29tQW5pbWF0aW9uU3RhcnQgJiYgKF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzKS5vblpvb21BbmltYXRpb25TdGFydC5hcHBseShfdGhpcyRwcm9wczQsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vblpvb21BbmltYXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1O1xuXG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25ab29tQW5pbWF0aW9uRW5kICYmIChfdGhpcyRwcm9wczUgPSBfdGhpcy5wcm9wcykub25ab29tQW5pbWF0aW9uRW5kLmFwcGx5KF90aGlzJHByb3BzNSwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uVGlsZXNMb2FkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25UaWxlc0xvYWRlZCAmJiBfdGhpcy5wcm9wcy5vblRpbGVzTG9hZGVkKCk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGlsZENsaWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczY7XG5cbiAgICAgICAgcmV0dXJuIChfdGhpcyRwcm9wczYgPSBfdGhpcy5wcm9wcykub25DaGlsZENsaWNrLmFwcGx5KF90aGlzJHByb3BzNiwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkTW91c2VEb3duID0gZnVuY3Rpb24gKGhvdmVyS2V5LCBjaGlsZFByb3BzKSB7XG4gICAgICBfdGhpcy5jaGlsZE1vdXNlRG93bkFyZ3NfID0gW2hvdmVyS2V5LCBjaGlsZFByb3BzXTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VEb3duKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZURvd24oaG92ZXJLZXksIGNoaWxkUHJvcHMsIF9leHRlbmRzKHt9LCBfdGhpcy5tb3VzZV8pKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2hpbGRNb3VzZVVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmNoaWxkTW91c2VEb3duQXJnc18pIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZVVwKSB7XG4gICAgICAgICAgdmFyIF90aGlzJHByb3BzNztcblxuICAgICAgICAgIChfdGhpcyRwcm9wczcgPSBfdGhpcy5wcm9wcykub25DaGlsZE1vdXNlVXAuYXBwbHkoX3RoaXMkcHJvcHM3LCBfdGhpcy5jaGlsZE1vdXNlRG93bkFyZ3NfLmNvbmNhdChbX2V4dGVuZHMoe30sIF90aGlzLm1vdXNlXyldKSk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuY2hpbGRNb3VzZURvd25BcmdzXyA9IG51bGw7XG4gICAgICAgIF90aGlzLmNoaWxkTW91c2VVcFRpbWVfID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkTW91c2VNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmNoaWxkTW91c2VEb3duQXJnc18pIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hpbGRNb3VzZU1vdmUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkcHJvcHM4O1xuXG4gICAgICAgICAgKF90aGlzJHByb3BzOCA9IF90aGlzLnByb3BzKS5vbkNoaWxkTW91c2VNb3ZlLmFwcGx5KF90aGlzJHByb3BzOCwgX3RoaXMuY2hpbGRNb3VzZURvd25BcmdzXy5jb25jYXQoW19leHRlbmRzKHt9LCBfdGhpcy5tb3VzZV8pXSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkTW91c2VFbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VFbnRlcikge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM5O1xuXG4gICAgICAgIHJldHVybiAoX3RoaXMkcHJvcHM5ID0gX3RoaXMucHJvcHMpLm9uQ2hpbGRNb3VzZUVudGVyLmFwcGx5KF90aGlzJHByb3BzOSwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkTW91c2VMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VMZWF2ZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMxMDtcblxuICAgICAgICByZXR1cm4gKF90aGlzJHByb3BzMTAgPSBfdGhpcy5wcm9wcykub25DaGlsZE1vdXNlTGVhdmUuYXBwbHkoX3RoaXMkcHJvcHMxMCwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIF90aGlzLl9zZXRWaWV3U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMubW91bnRlZF8pIHJldHVybjtcbiAgICAgIGlmIChpc0Z1bGxTY3JlZW4oKSkge1xuICAgICAgICBfdGhpcy5nZW9TZXJ2aWNlXy5zZXRWaWV3U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtYXBEb20gPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMuZ29vZ2xlTWFwRG9tXyk7XG4gICAgICAgIF90aGlzLmdlb1NlcnZpY2VfLnNldFZpZXdTaXplKG1hcERvbS5jbGllbnRXaWR0aCwgbWFwRG9tLmNsaWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5fb25Cb3VuZHNDaGFuZ2VkKCk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnJlc2V0U2l6ZU9uSWRsZV8gPSB0cnVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5fb25NYXBNb3VzZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCFfdGhpcy5tb3VzZUluTWFwXykgcmV0dXJuO1xuXG4gICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciBLX1JFQ0FMQ19DTElFTlRfUkVDVF9NUyA9IDUwO1xuXG4gICAgICBpZiAoY3VyclRpbWUgLSBfdGhpcy5tb3VzZU1vdmVUaW1lXyA+IEtfUkVDQUxDX0NMSUVOVF9SRUNUX01TKSB7XG4gICAgICAgIF90aGlzLmJvdW5kaW5nUmVjdF8gPSBlLmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5tb3VzZU1vdmVUaW1lXyA9IGN1cnJUaW1lO1xuXG4gICAgICB2YXIgbW91c2VQb3NYID0gZS5jbGllbnRYIC0gX3RoaXMuYm91bmRpbmdSZWN0Xy5sZWZ0O1xuICAgICAgdmFyIG1vdXNlUG9zWSA9IGUuY2xpZW50WSAtIF90aGlzLmJvdW5kaW5nUmVjdF8udG9wO1xuXG4gICAgICBpZiAoIV90aGlzLm1vdXNlXykge1xuICAgICAgICBfdGhpcy5tb3VzZV8gPSB7IHg6IDAsIHk6IDAsIGxhdDogMCwgbG5nOiAwIH07XG4gICAgICB9XG5cbiAgICAgIF90aGlzLm1vdXNlXy54ID0gbW91c2VQb3NYO1xuICAgICAgX3RoaXMubW91c2VfLnkgPSBtb3VzZVBvc1k7XG5cbiAgICAgIHZhciBsYXRMbmcgPSBfdGhpcy5nZW9TZXJ2aWNlXy5mcm9tQ29udGFpbmVyUGl4ZWxUb0xhdExuZyhfdGhpcy5tb3VzZV8pO1xuICAgICAgX3RoaXMubW91c2VfLmxhdCA9IGxhdExuZy5sYXQ7XG4gICAgICBfdGhpcy5tb3VzZV8ubG5nID0gbGF0TG5nLmxuZztcblxuICAgICAgX3RoaXMuX29uQ2hpbGRNb3VzZU1vdmUoKTtcblxuICAgICAgaWYgKGN1cnJUaW1lIC0gX3RoaXMuZHJhZ1RpbWVfIDwgS19JRExFX1RJTUVPVVQpIHtcbiAgICAgICAgX3RoaXMuZmlyZU1vdXNlRXZlbnRPbklkbGVfID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fTU9VU0VfUE9TSVRJT05fQ0hBTkdFJyk7XG4gICAgICAgIF90aGlzLmZpcmVNb3VzZUV2ZW50T25JZGxlXyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczExO1xuXG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25DbGljayAmJiAhX3RoaXMuY2hpbGRNb3VzZURvd25BcmdzXyAmJiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIF90aGlzLmNoaWxkTW91c2VVcFRpbWVfID4gS19JRExFX0NMSUNLX1RJTUVPVVQgJiYgX3RoaXMuZHJhZ1RpbWVfID09PSAwICYmIChfdGhpcyRwcm9wczExID0gX3RoaXMucHJvcHMpLm9uQ2xpY2suYXBwbHkoX3RoaXMkcHJvcHMxMSwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTWFwQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5tYXJrZXJzRGlzcGF0Y2hlcl8pIHtcbiAgICAgICAgLy8gc3VwcG9ydCB0b3VjaCBldmVudHMgYW5kIHJlY2FsY3VsYXRlIG1vdXNlIHBvc2l0aW9uIG9uIGNsaWNrXG4gICAgICAgIF90aGlzLl9vbk1hcE1vdXNlTW92ZShldmVudCk7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoY3VyclRpbWUgLSBfdGhpcy5kcmFnVGltZV8gPiBLX0lETEVfVElNRU9VVCkge1xuICAgICAgICAgIGlmIChfdGhpcy5tb3VzZV8pIHtcbiAgICAgICAgICAgIF90aGlzLl9vbkNsaWNrKF9leHRlbmRzKHt9LCBfdGhpcy5tb3VzZV8sIHtcbiAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMubWFya2Vyc0Rpc3BhdGNoZXJfLmVtaXQoJ2tPTl9DTElDSycsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25NYXBNb3VzZURvd25OYXRpdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMubW91c2VJbk1hcF8pIHJldHVybjtcblxuICAgICAgX3RoaXMuX29uTWFwTW91c2VEb3duKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTWFwTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMubWFya2Vyc0Rpc3BhdGNoZXJfKSB7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoY3VyclRpbWUgLSBfdGhpcy5kcmFnVGltZV8gPiBLX0lETEVfVElNRU9VVCkge1xuICAgICAgICAgIC8vIEhvdmVyZWQgbWFya2VyIGRldGVjdGVkIGF0IG1vdXNlIG1vdmUgY291bGQgYmUgZGVsZXRlZCBhdCBtb3VzZSBkb3duIHRpbWVcbiAgICAgICAgICAvLyBzbyBpdCB3aWxsIGJlIGdvb2QgdG8gZm9yY2UgaG92ZXJlZCBtYXJrZXIgcmVjYWxjdWxhdGlvblxuICAgICAgICAgIF90aGlzLl9vbk1hcE1vdXNlTW92ZShldmVudCk7XG4gICAgICAgICAgX3RoaXMubWFya2Vyc0Rpc3BhdGNoZXJfLmVtaXQoJ2tPTl9NRE9XTicsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25NYXBNb3VzZURvd25DYXB0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCgwLCBfZGV0ZWN0Mi5kZWZhdWx0KSgpLmlzQ2hyb21lKSB7XG4gICAgICAgIC8vIHRvIGZpeCBzdHJhbmdlIHpvb20gaW4gY2hyb21lXG4gICAgICAgIF90aGlzLnpvb21Db250cm9sQ2xpY2tUaW1lXyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25LZXlEb3duQ2FwdHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgoMCwgX2RldGVjdDIuZGVmYXVsdCkoKS5pc0Nocm9tZSkge1xuICAgICAgICBfdGhpcy56b29tQ29udHJvbENsaWNrVGltZV8gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2lzQ2VudGVyRGVmaW5lZCA9IGZ1bmN0aW9uIChjZW50ZXIpIHtcbiAgICAgIHJldHVybiBjZW50ZXIgJiYgKCgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkoY2VudGVyKSAmJiAoMCwgX2lzTnVtYmVyMi5kZWZhdWx0KShjZW50ZXIubGF0KSAmJiAoMCwgX2lzTnVtYmVyMi5kZWZhdWx0KShjZW50ZXIubG5nKSB8fCBjZW50ZXIubGVuZ3RoID09PSAyICYmICgwLCBfaXNOdW1iZXIyLmRlZmF1bHQpKGNlbnRlclswXSkgJiYgKDAsIF9pc051bWJlcjIuZGVmYXVsdCkoY2VudGVyWzFdKSk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkJvdW5kc0NoYW5nZWQgPSBmdW5jdGlvbiAobWFwLCBtYXBzLCBjYWxsRXh0Qm91bmRzQ2hhbmdlKSB7XG4gICAgICBpZiAobWFwKSB7XG4gICAgICAgIHZhciBnbUMgPSBtYXAuZ2V0Q2VudGVyKCk7XG4gICAgICAgIF90aGlzLmdlb1NlcnZpY2VfLnNldFZpZXcoW2dtQy5sYXQoKSwgZ21DLmxuZygpXSwgbWFwLmdldFpvb20oKSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoX3RoaXMucHJvcHMub25DaGFuZ2UgfHwgX3RoaXMucHJvcHMub25Cb3VuZHNDaGFuZ2UpICYmIF90aGlzLmdlb1NlcnZpY2VfLmNhblByb2plY3QoKSkge1xuICAgICAgICB2YXIgem9vbSA9IF90aGlzLmdlb1NlcnZpY2VfLmdldFpvb20oKTtcbiAgICAgICAgdmFyIGJvdW5kcyA9IF90aGlzLmdlb1NlcnZpY2VfLmdldEJvdW5kcygpO1xuICAgICAgICB2YXIgY2VudGVyTGF0TG5nID0gX3RoaXMuZ2VvU2VydmljZV8uZ2V0Q2VudGVyKCk7XG5cbiAgICAgICAgaWYgKCEoMCwgX2lzQXJyYXlzRXF1YWxFcHMyLmRlZmF1bHQpKGJvdW5kcywgX3RoaXMucHJldkJvdW5kc18sIGtFUFMpKSB7XG4gICAgICAgICAgaWYgKGNhbGxFeHRCb3VuZHNDaGFuZ2UgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgbWFyZ2luQm91bmRzID0gX3RoaXMuZ2VvU2VydmljZV8uZ2V0Qm91bmRzKF90aGlzLnByb3BzLm1hcmdpbik7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMub25Cb3VuZHNDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgX3RoaXMucHJvcHMub25Cb3VuZHNDaGFuZ2UoX3RoaXMuY2VudGVySXNPYmplY3RfID8gX2V4dGVuZHMoe30sIGNlbnRlckxhdExuZykgOiBbY2VudGVyTGF0TG5nLmxhdCwgY2VudGVyTGF0TG5nLmxuZ10sIHpvb20sIGJvdW5kcywgbWFyZ2luQm91bmRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICBjZW50ZXI6IF9leHRlbmRzKHt9LCBjZW50ZXJMYXRMbmcpLFxuICAgICAgICAgICAgICAgIHpvb206IHpvb20sXG4gICAgICAgICAgICAgICAgYm91bmRzOiB7XG4gICAgICAgICAgICAgICAgICBudzoge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IGJvdW5kc1swXSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBib3VuZHNbMV1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzZToge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IGJvdW5kc1syXSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBib3VuZHNbM11cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzdzoge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IGJvdW5kc1s0XSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBib3VuZHNbNV1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBuZToge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IGJvdW5kc1s2XSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBib3VuZHNbN11cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdW5kczoge1xuICAgICAgICAgICAgICAgICAgbnc6IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBtYXJnaW5Cb3VuZHNbMF0sXG4gICAgICAgICAgICAgICAgICAgIGxuZzogbWFyZ2luQm91bmRzWzFdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBtYXJnaW5Cb3VuZHNbMl0sXG4gICAgICAgICAgICAgICAgICAgIGxuZzogbWFyZ2luQm91bmRzWzNdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc3c6IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBtYXJnaW5Cb3VuZHNbNF0sXG4gICAgICAgICAgICAgICAgICAgIGxuZzogbWFyZ2luQm91bmRzWzVdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBtYXJnaW5Cb3VuZHNbNl0sXG4gICAgICAgICAgICAgICAgICAgIGxuZzogbWFyZ2luQm91bmRzWzddXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHNpemU6IF90aGlzLmdlb1NlcnZpY2VfLmhhc1NpemUoKSA/IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBfdGhpcy5nZW9TZXJ2aWNlXy5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBfdGhpcy5nZW9TZXJ2aWNlXy5nZXRIZWlnaHQoKVxuICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLnByZXZCb3VuZHNfID0gYm91bmRzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fcmVnaXN0ZXJDaGlsZCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLmdvb2dsZU1hcERvbV8gPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLm1vdW50ZWRfID0gZmFsc2U7XG4gICAgX3RoaXMuaW5pdGlhbGl6ZWRfID0gZmFsc2U7XG4gICAgX3RoaXMuZ29vZ2xlQXBpTG9hZGVkQ2FsbGVkXyA9IGZhbHNlO1xuXG4gICAgX3RoaXMubWFwXyA9IG51bGw7XG4gICAgX3RoaXMubWFwc18gPSBudWxsO1xuICAgIF90aGlzLnByZXZCb3VuZHNfID0gbnVsbDtcbiAgICBfdGhpcy5oZWF0bWFwID0gbnVsbDtcblxuICAgIF90aGlzLmxheWVyc18gPSB7fTtcblxuICAgIF90aGlzLm1vdXNlXyA9IG51bGw7XG4gICAgX3RoaXMubW91c2VNb3ZlVGltZV8gPSAwO1xuICAgIF90aGlzLmJvdW5kaW5nUmVjdF8gPSBudWxsO1xuICAgIF90aGlzLm1vdXNlSW5NYXBfID0gdHJ1ZTtcblxuICAgIF90aGlzLmRyYWdUaW1lXyA9IDA7XG4gICAgX3RoaXMuZmlyZU1vdXNlRXZlbnRPbklkbGVfID0gZmFsc2U7XG4gICAgX3RoaXMudXBkYXRlQ291bnRlcl8gPSAwO1xuXG4gICAgX3RoaXMubWFya2Vyc0Rpc3BhdGNoZXJfID0gbmV3IF9tYXJrZXJfZGlzcGF0Y2hlcjIuZGVmYXVsdChfdGhpcyk7XG4gICAgX3RoaXMuZ2VvU2VydmljZV8gPSBuZXcgX2dlbzIuZGVmYXVsdChLX0dPT0dMRV9USUxFX1NJWkUpO1xuICAgIF90aGlzLmNlbnRlcklzT2JqZWN0XyA9ICgwLCBfaXNQbGFpbk9iamVjdDIuZGVmYXVsdCkoX3RoaXMucHJvcHMuY2VudGVyKTtcblxuICAgIF90aGlzLm1pblpvb21fID0gREVGQVVMVF9NSU5fWk9PTTtcbiAgICBfdGhpcy5kZWZhdWx0RHJhZ2dhYmxlT3B0aW9uXyA9IHRydWU7XG5cbiAgICBfdGhpcy56b29tQ29udHJvbENsaWNrVGltZV8gPSAwO1xuXG4gICAgX3RoaXMuY2hpbGRNb3VzZURvd25BcmdzXyA9IG51bGw7XG4gICAgX3RoaXMuY2hpbGRNb3VzZVVwVGltZV8gPSAwO1xuXG4gICAgX3RoaXMuZ29vZ2xlTWFwRG9tXyA9IG51bGw7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmFwaUtleSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0dvb2dsZU1hcDogJyArIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICAnYXBpS2V5IGlzIGRlcHJlY2F0ZWQsIHVzZSAnICsgJ2Jvb3RzdHJhcFVSTEtleXM9e3trZXk6IFlPVVJfQVBJX0tFWX19IGluc3RlYWQuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkJvdW5kc0NoYW5nZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0dvb2dsZU1hcDogJyArIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICAnb25Cb3VuZHNDaGFuZ2UgaXMgZGVwcmVjYXRlZCwgdXNlICcgKyAnb25DaGFuZ2Uoe2NlbnRlciwgem9vbSwgYm91bmRzLCAuLi5vdGhlcn0pIGluc3RlYWQuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoMCwgX2lzRW1wdHkyLmRlZmF1bHQpKF90aGlzLnByb3BzLmNlbnRlcikgJiYgKDAsIF9pc0VtcHR5Mi5kZWZhdWx0KShfdGhpcy5wcm9wcy5kZWZhdWx0Q2VudGVyKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0dvb2dsZU1hcDogY2VudGVyIG9yIGRlZmF1bHRDZW50ZXIgcHJvcGVydHkgbXVzdCBiZSBkZWZpbmVkJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCgwLCBfaXNFbXB0eTIuZGVmYXVsdCkoX3RoaXMucHJvcHMuem9vbSkgJiYgKDAsIF9pc0VtcHR5Mi5kZWZhdWx0KShfdGhpcy5wcm9wcy5kZWZhdWx0Wm9vbSkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdHb29nbGVNYXA6IHpvb20gb3IgZGVmYXVsdFpvb20gcHJvcGVydHkgbXVzdCBiZSBkZWZpbmVkJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoX3RoaXMuX2lzQ2VudGVyRGVmaW5lZChfdGhpcy5wcm9wcy5jZW50ZXIgfHwgX3RoaXMucHJvcHMuZGVmYXVsdENlbnRlcikpIHtcbiAgICAgIHZhciBwcm9wc0NlbnRlciA9IGxhdExuZzJPYmooX3RoaXMucHJvcHMuY2VudGVyIHx8IF90aGlzLnByb3BzLmRlZmF1bHRDZW50ZXIpO1xuICAgICAgX3RoaXMuZ2VvU2VydmljZV8uc2V0Vmlldyhwcm9wc0NlbnRlciwgX3RoaXMucHJvcHMuem9vbSB8fCBfdGhpcy5wcm9wcy5kZWZhdWx0Wm9vbSwgMCk7XG4gICAgfVxuXG4gICAgX3RoaXMuem9vbUFuaW1hdGlvbkluUHJvZ3Jlc3NfID0gZmFsc2U7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG92ZXJsYXk6IG51bGxcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIEdvb2dsZU1hcC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMubW91bnRlZF8gPSB0cnVlO1xuICAgICgwLCBfcGFzc2l2ZUV2ZW50czIuZGVmYXVsdCkod2luZG93LCAncmVzaXplJywgdGhpcy5fb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcbiAgICAoMCwgX3Bhc3NpdmVFdmVudHMyLmRlZmF1bHQpKHdpbmRvdywgJ2tleWRvd24nLCB0aGlzLl9vbktleURvd25DYXB0dXJlLCB0cnVlKTtcbiAgICB2YXIgbWFwRG9tID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMuZ29vZ2xlTWFwRG9tXyk7XG4gICAgLy8gZ21hcCBjYW4ndCBwcmV2ZW50IG1hcCBkcmFnIGlmIG1vdXNlZG93biBldmVudCBhbHJlYWR5IG9jY3VyZWRcbiAgICAvLyB0aGUgb25seSB3b3JrYXJvdW5kIEkgZmluZCBpcyBwcmV2ZW50IG1vdXNlZG93biBuYXRpdmUgYnJvd3NlciBldmVudFxuXG4gICAgaWYgKG1hcERvbSkge1xuICAgICAgKDAsIF9wYXNzaXZlRXZlbnRzMi5kZWZhdWx0KShtYXBEb20sICdtb3VzZWRvd24nLCB0aGlzLl9vbk1hcE1vdXNlRG93bk5hdGl2ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgKDAsIF9wYXNzaXZlRXZlbnRzMi5kZWZhdWx0KSh3aW5kb3csICdtb3VzZXVwJywgdGhpcy5fb25DaGlsZE1vdXNlVXAsIGZhbHNlKTtcbiAgICB2YXIgYm9vdHN0cmFwVVJMS2V5cyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLmFwaUtleSAmJiB7IGtleTogdGhpcy5wcm9wcy5hcGlLZXkgfSwgdGhpcy5wcm9wcy5ib290c3RyYXBVUkxLZXlzKTtcblxuICAgIHRoaXMucHJvcHMuZ29vZ2xlTWFwTG9hZGVyKGJvb3RzdHJhcFVSTEtleXMsIHRoaXMucHJvcHMuaGVhdG1hcExpYnJhcnkpOyAvLyB3ZSBjYW4gc3RhcnQgbG9hZCBpbW1lZGlhdGx5XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHRvIGRldGVjdCBzaXplXG4gICAgICBfdGhpczIuX3NldFZpZXdTaXplKCk7XG4gICAgICBpZiAoX3RoaXMyLl9pc0NlbnRlckRlZmluZWQoX3RoaXMyLnByb3BzLmNlbnRlciB8fCBfdGhpczIucHJvcHMuZGVmYXVsdENlbnRlcikpIHtcbiAgICAgICAgX3RoaXMyLl9pbml0TWFwKCk7XG4gICAgICB9XG4gICAgfSwgMCwgdGhpcyk7XG4gICAgaWYgKHRoaXMucHJvcHMucmVzZXRCb3VuZHNPblJlc2l6ZSkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgX2RldGVjdEVsZW1lbnRSZXNpemUyLmRlZmF1bHQuYWRkUmVzaXplTGlzdGVuZXIobWFwRG9tLCB0aGF0Ll9tYXBEb21SZXNpemVDYWxsYmFjayk7XG4gICAgfVxuICB9O1xuXG4gIEdvb2dsZU1hcC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcy5kZWZhdWx0Q2VudGVyLCBuZXh0UHJvcHMuZGVmYXVsdENlbnRlcikpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiR29vZ2xlTWFwOiBkZWZhdWx0Q2VudGVyIHByb3AgY2hhbmdlZC4gWW91IGNhbid0IGNoYW5nZSBkZWZhdWx0IHByb3BzLlwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcy5kZWZhdWx0Wm9vbSwgbmV4dFByb3BzLmRlZmF1bHRab29tKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJHb29nbGVNYXA6IGRlZmF1bHRab29tIHByb3AgY2hhbmdlZC4gWW91IGNhbid0IGNoYW5nZSBkZWZhdWx0IHByb3BzLlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2lzQ2VudGVyRGVmaW5lZCh0aGlzLnByb3BzLmNlbnRlcikgJiYgdGhpcy5faXNDZW50ZXJEZWZpbmVkKG5leHRQcm9wcy5jZW50ZXIpKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5faW5pdE1hcCgpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWFwXykge1xuICAgICAgdmFyIGNlbnRlckxhdExuZyA9IHRoaXMuZ2VvU2VydmljZV8uZ2V0Q2VudGVyKCk7XG4gICAgICBpZiAodGhpcy5faXNDZW50ZXJEZWZpbmVkKG5leHRQcm9wcy5jZW50ZXIpKSB7XG4gICAgICAgIHZhciBuZXh0UHJvcHNDZW50ZXIgPSBsYXRMbmcyT2JqKG5leHRQcm9wcy5jZW50ZXIpO1xuICAgICAgICB2YXIgY3VyckNlbnRlciA9IHRoaXMuX2lzQ2VudGVyRGVmaW5lZCh0aGlzLnByb3BzLmNlbnRlcikgPyBsYXRMbmcyT2JqKHRoaXMucHJvcHMuY2VudGVyKSA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFjdXJyQ2VudGVyIHx8IE1hdGguYWJzKG5leHRQcm9wc0NlbnRlci5sYXQgLSBjdXJyQ2VudGVyLmxhdCkgKyBNYXRoLmFicyhuZXh0UHJvcHNDZW50ZXIubG5nIC0gY3VyckNlbnRlci5sbmcpID4ga0VQUykge1xuICAgICAgICAgIGlmIChNYXRoLmFicyhuZXh0UHJvcHNDZW50ZXIubGF0IC0gY2VudGVyTGF0TG5nLmxhdCkgKyBNYXRoLmFicyhuZXh0UHJvcHNDZW50ZXIubG5nIC0gY2VudGVyTGF0TG5nLmxuZykgPiBrRVBTKSB7XG4gICAgICAgICAgICB0aGlzLm1hcF8ucGFuVG8oe1xuICAgICAgICAgICAgICBsYXQ6IG5leHRQcm9wc0NlbnRlci5sYXQsXG4gICAgICAgICAgICAgIGxuZzogbmV4dFByb3BzQ2VudGVyLmxuZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghKDAsIF9pc0VtcHR5Mi5kZWZhdWx0KShuZXh0UHJvcHMuem9vbSkpIHtcbiAgICAgICAgLy8gaWYgem9vbSBjaGFnZWQgYnkgdXNlclxuICAgICAgICBpZiAoTWF0aC5hYnMobmV4dFByb3BzLnpvb20gLSB0aGlzLnByb3BzLnpvb20pID4gMCkge1xuICAgICAgICAgIHRoaXMubWFwXy5zZXRab29tKG5leHRQcm9wcy56b29tKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoISgwLCBfaXNFbXB0eTIuZGVmYXVsdCkodGhpcy5wcm9wcy5kcmFnZ2FibGUpICYmICgwLCBfaXNFbXB0eTIuZGVmYXVsdCkobmV4dFByb3BzLmRyYWdnYWJsZSkpIHtcbiAgICAgICAgLy8gcmVzZXQgdG8gZGVmYXVsdFxuICAgICAgICB0aGlzLm1hcF8uc2V0T3B0aW9ucyh7IGRyYWdnYWJsZTogdGhpcy5kZWZhdWx0RHJhZ2dhYmxlT3B0aW9uXyB9KTtcbiAgICAgIH0gZWxzZSBpZiAoISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLmRyYWdnYWJsZSwgbmV4dFByb3BzLmRyYWdnYWJsZSkpIHtcbiAgICAgICAgLy8gYWxzbyBwcmV2ZW50IHRoaXMgb24gd2luZG93ICdtb3VzZWRvd24nIGV2ZW50IHRvIHByZXZlbnQgbWFwIG1vdmVcbiAgICAgICAgdGhpcy5tYXBfLnNldE9wdGlvbnMoeyBkcmFnZ2FibGU6IG5leHRQcm9wcy5kcmFnZ2FibGUgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHVzZSBzaGFsbG93RXF1YWwgdG8gdHJ5IGF2b2lkIGNhbGxpbmcgbWFwLl9zZXRPcHRpb25zIGlmIG9ubHkgdGhlIHJlZiBjaGFuZ2VzXG4gICAgICBpZiAoISgwLCBfaXNFbXB0eTIuZGVmYXVsdCkobmV4dFByb3BzLm9wdGlvbnMpICYmICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcy5vcHRpb25zLCBuZXh0UHJvcHMub3B0aW9ucykpIHtcbiAgICAgICAgdmFyIG1hcFBsYWluT2JqZWN0cyA9ICgwLCBfcGljazIuZGVmYXVsdCkodGhpcy5tYXBzXywgX2lzUGxhaW5PYmplY3QyLmRlZmF1bHQpO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBuZXh0UHJvcHMub3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IG5leHRQcm9wcy5vcHRpb25zKG1hcFBsYWluT2JqZWN0cykgOiBuZXh0UHJvcHMub3B0aW9ucztcbiAgICAgICAgLy8gcmVtb3ZlIHpvb20sIGNlbnRlciBhbmQgZHJhZ2dhYmxlIG9wdGlvbnMgYXMgdGhlc2UgYXJlIG1hbmFnZWQgYnkgZ29vZ2xlLW1hcHMtcmVhY3RcbiAgICAgICAgb3B0aW9ucyA9ICgwLCBfb21pdDIuZGVmYXVsdCkob3B0aW9ucywgWyd6b29tJywgJ2NlbnRlcicsICdkcmFnZ2FibGUnXSk7XG5cbiAgICAgICAgaWYgKCdtaW5ab29tJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgdmFyIG1pblpvb20gPSB0aGlzLl9jb21wdXRlTWluWm9vbShvcHRpb25zLm1pblpvb20pO1xuICAgICAgICAgIG9wdGlvbnMubWluWm9vbSA9IF9jaGVja01pblpvb20ob3B0aW9ucy5taW5ab29tLCBtaW5ab29tKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwXy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KShuZXh0UHJvcHMubGF5ZXJUeXBlcywgdGhpcy5wcm9wcy5sYXllclR5cGVzKSkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmxheWVyc18pLmZvckVhY2goZnVuY3Rpb24gKGxheWVyS2V5KSB7XG4gICAgICAgICAgX3RoaXMzLmxheWVyc19bbGF5ZXJLZXldLnNldE1hcChudWxsKTtcbiAgICAgICAgICBkZWxldGUgX3RoaXMzLmxheWVyc19bbGF5ZXJLZXldO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc2V0TGF5ZXJzKG5leHRQcm9wcy5sYXllclR5cGVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgR29vZ2xlTWFwLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAvLyBkcmFnZ2FibGUgZG9lcyBub3QgYWZmZWN0IGlubmVyIGNvbXBvbmVudHNcbiAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSgoMCwgX29taXQyLmRlZmF1bHQpKHRoaXMucHJvcHMsIFsnZHJhZ2dhYmxlJ10pLCAoMCwgX29taXQyLmRlZmF1bHQpKG5leHRQcm9wcywgWydkcmFnZ2FibGUnXSkpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcbiAgfTtcblxuICBHb29nbGVNYXAucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB0aGlzLm1hcmtlcnNEaXNwYXRjaGVyXy5lbWl0KCdrT05fQ0hBTkdFJyk7XG5cbiAgICBpZiAoISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLmhvdmVyRGlzdGFuY2UsIHByZXZQcm9wcy5ob3ZlckRpc3RhbmNlKSkge1xuICAgICAgdGhpcy5tYXJrZXJzRGlzcGF0Y2hlcl8uZW1pdCgna09OX01PVVNFX1BPU0lUSU9OX0NIQU5HRScpO1xuICAgIH1cbiAgfTtcblxuICBHb29nbGVNYXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkXyA9IGZhbHNlO1xuICAgIHZhciBtYXBEb20gPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5nb29nbGVNYXBEb21fKTtcbiAgICBpZiAobWFwRG9tKSB7XG4gICAgICBtYXBEb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5fb25NYXBNb3VzZURvd25OYXRpdmUsIHRydWUpO1xuICAgIH1cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25XaW5kb3dSZXNpemUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duQ2FwdHVyZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9vbkNoaWxkTW91c2VVcCwgZmFsc2UpO1xuICAgIGlmICh0aGlzLnByb3BzLnJlc2V0Qm91bmRzT25SZXNpemUpIHtcbiAgICAgIF9kZXRlY3RFbGVtZW50UmVzaXplMi5kZWZhdWx0LnJlbW92ZVJlc2l6ZUxpc3RlbmVyKG1hcERvbSwgdGhpcy5fbWFwRG9tUmVzaXplQ2FsbGJhY2spO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm92ZXJsYXlfKSB7XG4gICAgICAvLyB0aGlzIHRyaWdnZXJzIG92ZXJsYXlfLm9uUmVtb3ZlKCksIHdoaWNoIHdpbGwgdW5tb3VudCB0aGUgPEdvb2dsZU1hcE1hcmtlcnMvPlxuICAgICAgdGhpcy5vdmVybGF5Xy5zZXRNYXAobnVsbCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWFwc18gJiYgdGhpcy5tYXBfKSB7XG4gICAgICAvLyBmaXggZ29vZ2xlLCBhcyBvdGhlcndpc2UgbGlzdGVuZXJzIHdvcmtzIGV2ZW4gd2l0aG91dCBtYXBcbiAgICAgIHRoaXMubWFwXy5zZXRPcHRpb25zKHsgc2Nyb2xsd2hlZWw6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5tYXBzXy5ldmVudC5jbGVhckluc3RhbmNlTGlzdGVuZXJzKHRoaXMubWFwXyk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXBfID0gbnVsbDtcbiAgICB0aGlzLm1hcHNfID0gbnVsbDtcbiAgICB0aGlzLm1hcmtlcnNEaXNwYXRjaGVyXy5kaXNwb3NlKCk7XG5cbiAgICB0aGlzLnJlc2V0U2l6ZU9uSWRsZV8gPSBmYWxzZTtcblxuICAgIGRlbGV0ZSB0aGlzLm1hcF87XG4gICAgZGVsZXRlIHRoaXMubWFya2Vyc0Rpc3BhdGNoZXJfO1xuICB9O1xuICAvLyBjYWxjIG1pblpvb20gaWYgbWFwIHNpemUgYXZhaWxhYmxlXG4gIC8vIGl0J3MgYmV0dGVyIHRvIG5vdCBzZXQgbWluWm9vbSBsZXNzIHRoYW4gdGhpcyBjYWxjdWxhdGlvbiBnaXZlc1xuICAvLyBvdGhlcndpc2UgdGhlcmUgaXMgbm8gaG9tZW9tb3JwaGlzbSBiZXR3ZWVuIHNjcmVlbiBjb29yZGluYXRlcyBhbmQgbWFwXG4gIC8vIChvbmUgbWFwIGNvb3JkaW5hdGUgY2FuIGhhdmUgZGlmZmVyZW50IHNjcmVlbiBjb29yZGluYXRlcylcblxuXG4gIC8vIHRoaXMgbWV0aG9kIHdvcmtzIG9ubHkgaWYgdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VEb3duIHdhcyBjYWxsZWRcblxuXG4gIC8vIHRoaXMgbWV0aG9kIHdvcmtzIG9ubHkgaWYgdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VEb3duIHdhcyBjYWxsZWRcblxuXG4gIC8vIEtfSURMRV9DTElDS19USU1FT1VUIC0gbG9va3MgbGlrZSAzMDAgaXMgZW5vdWdoXG5cblxuICAvLyBnbWFwIGNhbid0IHByZXZlbnQgbWFwIGRyYWcgaWYgbW91c2Vkb3duIGV2ZW50IGFscmVhZHkgb2NjdXJlZFxuICAvLyB0aGUgb25seSB3b3JrYXJvdW5kIEkgZmluZCBpcyBwcmV2ZW50IG1vdXNlZG93biBuYXRpdmUgYnJvd3NlciBldmVudFxuXG5cbiAgR29vZ2xlTWFwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIG92ZXJsYXkgPSB0aGlzLnN0YXRlLm92ZXJsYXk7XG4gICAgdmFyIG1hcE1hcmtlclByZXJlbmRlciA9ICFvdmVybGF5ID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2dvb2dsZV9tYXBfbWFya2Vyc19wcmVyZW5kZXIyLmRlZmF1bHQsIHtcbiAgICAgIGV4cGVyaW1lbnRhbDogdGhpcy5wcm9wcy5leHBlcmltZW50YWwsXG4gICAgICBvbkNoaWxkQ2xpY2s6IHRoaXMuX29uQ2hpbGRDbGljayxcbiAgICAgIG9uQ2hpbGRNb3VzZURvd246IHRoaXMuX29uQ2hpbGRNb3VzZURvd24sXG4gICAgICBvbkNoaWxkTW91c2VFbnRlcjogdGhpcy5fb25DaGlsZE1vdXNlRW50ZXIsXG4gICAgICBvbkNoaWxkTW91c2VMZWF2ZTogdGhpcy5fb25DaGlsZE1vdXNlTGVhdmUsXG4gICAgICBnZW9TZXJ2aWNlOiB0aGlzLmdlb1NlcnZpY2VfLFxuICAgICAgaW5zaWRlTWFwUGFuZXM6IGZhbHNlLFxuICAgICAgZGlzdGFuY2VUb01vdXNlOiB0aGlzLnByb3BzLmRpc3RhbmNlVG9Nb3VzZSxcbiAgICAgIGdldEhvdmVyRGlzdGFuY2U6IHRoaXMuX2dldEhvdmVyRGlzdGFuY2UsXG4gICAgICBkaXNwYXRjaGVyOiB0aGlzLm1hcmtlcnNEaXNwYXRjaGVyX1xuICAgIH0pIDogbnVsbDtcblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSxcbiAgICAgICAgb25Nb3VzZU1vdmU6IHRoaXMuX29uTWFwTW91c2VNb3ZlLFxuICAgICAgICBvbk1vdXNlRG93bkNhcHR1cmU6IHRoaXMuX29uTWFwTW91c2VEb3duQ2FwdHVyZSxcbiAgICAgICAgb25DbGljazogdGhpcy5fb25NYXBDbGlja1xuICAgICAgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9nb29nbGVfbWFwX21hcDIuZGVmYXVsdCwgeyByZWdpc3RlckNoaWxkOiB0aGlzLl9yZWdpc3RlckNoaWxkIH0pLFxuICAgICAgSVNfUkVBQ1RfMTYgJiYgb3ZlcmxheSAmJiBjcmVhdGVQb3J0YWwodGhpcy5fcmVuZGVyUG9ydGFsKCksIG92ZXJsYXkpLFxuICAgICAgbWFwTWFya2VyUHJlcmVuZGVyXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gR29vZ2xlTWFwO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuR29vZ2xlTWFwLnByb3BUeXBlcyA9IHtcbiAgYXBpS2V5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYm9vdHN0cmFwVVJMS2V5czogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG5cbiAgZGVmYXVsdENlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXksIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGxhdDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gICAgbG5nOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlclxuICB9KV0pLFxuICBjZW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LCBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBsYXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICAgIGxuZzogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbiAgfSldKSxcbiAgZGVmYXVsdFpvb206IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICB6b29tOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgb25Cb3VuZHNDaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoaWxkQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGlsZE1vdXNlRG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoaWxkTW91c2VVcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoaWxkTW91c2VNb3ZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hpbGRNb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hpbGRNb3VzZUxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uWm9vbUFuaW1hdGlvblN0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uWm9vbUFuaW1hdGlvbkVuZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkRyYWc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25NYXBUeXBlSWRDaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25UaWxlc0xvYWRlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvcHRpb25zOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgZGlzdGFuY2VUb01vdXNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGhvdmVyRGlzdGFuY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBkZWJvdW5jZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgbWFyZ2luOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LFxuICBnb29nbGVNYXBMb2FkZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICBvbkdvb2dsZUFwaUxvYWRlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICB5ZXNJV2FudFRvVXNlR29vZ2xlTWFwQXBpSW50ZXJuYWxzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGRyYWdnYWJsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIHJlc2V0Qm91bmRzT25SZXNpemU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgbGF5ZXJUeXBlczogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nKSAvLyBbJ1RyYW5zaXRMYXllcicsICdUcmFmZmljTGF5ZXInXVxufTtcbkdvb2dsZU1hcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3RhbmNlVG9Nb3VzZTogZnVuY3Rpb24gZGlzdGFuY2VUb01vdXNlKHB0LCBtb3VzZVBvcyAvKiAsIG1hcmtlclByb3BzICovKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgocHQueCAtIG1vdXNlUG9zLngpICogKHB0LnggLSBtb3VzZVBvcy54KSArIChwdC55IC0gbW91c2VQb3MueSkgKiAocHQueSAtIG1vdXNlUG9zLnkpKTtcbiAgfSxcblxuICBob3ZlckRpc3RhbmNlOiAzMCxcbiAgZGVib3VuY2VkOiB0cnVlLFxuICBvcHRpb25zOiBkZWZhdWx0T3B0aW9uc18sXG4gIGdvb2dsZU1hcExvYWRlcjogX2dvb2dsZV9tYXBfbG9hZGVyMi5kZWZhdWx0LFxuICB5ZXNJV2FudFRvVXNlR29vZ2xlTWFwQXBpSW50ZXJuYWxzOiBmYWxzZSxcbiAgc3R5bGU6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIGxheWVyVHlwZXM6IFtdLFxuICBoZWF0bWFwOiB7fSxcbiAgaGVhdG1hcExpYnJhcnk6IGZhbHNlXG59O1xuR29vZ2xlTWFwLmdvb2dsZU1hcExvYWRlciA9IF9nb29nbGVfbWFwX2xvYWRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdCA9IEdvb2dsZU1hcDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgc3R5bGUgPSB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBsZWZ0OiAwLFxuICB0b3A6IDAsXG4gIG1hcmdpbjogMCxcbiAgcGFkZGluZzogMCxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbn07XG5cbnZhciBHb29nbGVNYXBNYXAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR29vZ2xlTWFwTWFwLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBHb29nbGVNYXBNYXAoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdvb2dsZU1hcE1hcCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIEdvb2dsZU1hcE1hcC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTsgLy8gZGlzYWJsZSByZWFjdCBvbiB0aGlzIGRpdlxuICB9O1xuXG4gIEdvb2dsZU1hcE1hcC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciByZWdpc3RlckNoaWxkID0gdGhpcy5wcm9wcy5yZWdpc3RlckNoaWxkO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHJlZjogcmVnaXN0ZXJDaGlsZCwgc3R5bGU6IHN0eWxlIH0pO1xuICB9O1xuXG4gIHJldHVybiBHb29nbGVNYXBNYXA7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBHb29nbGVNYXBNYXA7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX29taXQgPSByZXF1aXJlKCcuL3V0aWxzL29taXQnKTtcblxudmFyIF9vbWl0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29taXQpO1xuXG52YXIgX3NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJy4vdXRpbHMvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8gdXRpbHNcblxuXG52YXIgbWFpblN0eWxlID0ge1xuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgbGVmdDogMCxcbiAgdG9wOiAwLFxuICBtYXJnaW46IDAsXG4gIHBhZGRpbmc6IDAsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG59O1xuXG52YXIgc3R5bGUgPSB7XG4gIHdpZHRoOiAwLFxuICBoZWlnaHQ6IDAsXG4gIGxlZnQ6IDAsXG4gIHRvcDogMCxcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xufTtcblxudmFyIEdvb2dsZU1hcE1hcmtlcnMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR29vZ2xlTWFwTWFya2VycywgX0NvbXBvbmVudCk7XG5cbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbiAgZnVuY3Rpb24gR29vZ2xlTWFwTWFya2Vycyhwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHb29nbGVNYXBNYXJrZXJzKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuX2dldFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2hpbGRyZW46IF90aGlzLnByb3BzLmRpc3BhdGNoZXIuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgdXBkYXRlQ291bnRlcjogX3RoaXMucHJvcHMuZGlzcGF0Y2hlci5nZXRVcGRhdGVDb3VudGVyKClcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLmRpbWVuc2lvbnNDYWNoZV8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldkNoaWxkQ291bnQgPSAoX3RoaXMuc3RhdGUuY2hpbGRyZW4gfHwgW10pLmxlbmd0aDtcbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLl9nZXRTdGF0ZSgpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShzdGF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHN0YXRlLmNoaWxkcmVuIHx8IFtdKS5sZW5ndGggIT09IHByZXZDaGlsZENvdW50ICYmIF90aGlzLl9vbk1vdXNlQ2hhbmdlSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLl9vbkNoaWxkQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGlsZENsaWNrKSB7XG4gICAgICAgIGlmIChfdGhpcy5ob3ZlckNoaWxkUHJvcHNfKSB7XG4gICAgICAgICAgdmFyIGhvdmVyS2V5ID0gX3RoaXMuaG92ZXJLZXlfO1xuICAgICAgICAgIHZhciBjaGlsZFByb3BzID0gX3RoaXMuaG92ZXJDaGlsZFByb3BzXztcbiAgICAgICAgICAvLyBjbGljayB3b3JrcyBvbmx5IG9uIGhvdmVyZWQgaXRlbVxuICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hpbGRDbGljayhob3ZlcktleSwgY2hpbGRQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2hpbGRNb3VzZURvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGlsZE1vdXNlRG93bikge1xuICAgICAgICBpZiAoX3RoaXMuaG92ZXJDaGlsZFByb3BzXykge1xuICAgICAgICAgIHZhciBob3ZlcktleSA9IF90aGlzLmhvdmVyS2V5XztcbiAgICAgICAgICB2YXIgY2hpbGRQcm9wcyA9IF90aGlzLmhvdmVyQ2hpbGRQcm9wc187XG4gICAgICAgICAgLy8gd29ya3Mgb25seSBvbiBob3ZlcmVkIGl0ZW1cbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VEb3duKGhvdmVyS2V5LCBjaGlsZFByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25DaGlsZE1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoaG92ZXJLZXksIGNoaWxkUHJvcHMpIHtcbiAgICAgIGlmICghX3RoaXMuZGltZW5zaW9uc0NhY2hlXykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VFbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VFbnRlcihob3ZlcktleSwgY2hpbGRQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmhvdmVyQ2hpbGRQcm9wc18gPSBjaGlsZFByb3BzO1xuICAgICAgX3RoaXMuaG92ZXJLZXlfID0gaG92ZXJLZXk7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyS2V5OiBob3ZlcktleSB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uQ2hpbGRNb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5kaW1lbnNpb25zQ2FjaGVfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGhvdmVyS2V5ID0gX3RoaXMuaG92ZXJLZXlfO1xuICAgICAgdmFyIGNoaWxkUHJvcHMgPSBfdGhpcy5ob3ZlckNoaWxkUHJvcHNfO1xuXG4gICAgICBpZiAoaG92ZXJLZXkgIT09IHVuZGVmaW5lZCAmJiBob3ZlcktleSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DaGlsZE1vdXNlTGVhdmUpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNoaWxkTW91c2VMZWF2ZShob3ZlcktleSwgY2hpbGRQcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5ob3ZlcktleV8gPSBudWxsO1xuICAgICAgICBfdGhpcy5ob3ZlckNoaWxkUHJvcHNfID0gbnVsbDtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcktleTogbnVsbCB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTW91c2VBbGxvdyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICBfdGhpcy5fb25DaGlsZE1vdXNlTGVhdmUoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuYWxsb3dNb3VzZV8gPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuX29uTW91c2VDaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmFsbG93TW91c2VfKSB7XG4gICAgICAgIF90aGlzLl9vbk1vdXNlQ2hhbmdlSGFuZGxlclJhZigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5fb25Nb3VzZUNoYW5nZUhhbmRsZXJSYWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLmRpbWVuc2lvbnNDYWNoZV8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbXAgPSBfdGhpcy5wcm9wcy5kaXNwYXRjaGVyLmdldE1vdXNlUG9zaXRpb24oKTtcblxuICAgICAgaWYgKG1wKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZXMgPSBbXTtcbiAgICAgICAgdmFyIGhvdmVyRGlzdGFuY2UgPSBfdGhpcy5wcm9wcy5nZXRIb3ZlckRpc3RhbmNlKCk7XG5cbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goX3RoaXMuc3RhdGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgY2hpbGRJbmRleCkge1xuICAgICAgICAgIGlmICghY2hpbGQpIHJldHVybjtcbiAgICAgICAgICAvLyBsYXllcnNcbiAgICAgICAgICBpZiAoY2hpbGQucHJvcHMubGF0TG5nID09PSB1bmRlZmluZWQgJiYgY2hpbGQucHJvcHMubGF0ID09PSB1bmRlZmluZWQgJiYgY2hpbGQucHJvcHMubG5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgY2hpbGRLZXkgPSBjaGlsZC5rZXkgIT09IHVuZGVmaW5lZCAmJiBjaGlsZC5rZXkgIT09IG51bGwgPyBjaGlsZC5rZXkgOiBjaGlsZEluZGV4O1xuICAgICAgICAgIHZhciBkaXN0ID0gX3RoaXMucHJvcHMuZGlzdGFuY2VUb01vdXNlKF90aGlzLmRpbWVuc2lvbnNDYWNoZV9bY2hpbGRLZXldLCBtcCwgY2hpbGQucHJvcHMpO1xuICAgICAgICAgIGlmIChkaXN0IDwgaG92ZXJEaXN0YW5jZSkge1xuICAgICAgICAgICAgZGlzdGFuY2VzLnB1c2goe1xuICAgICAgICAgICAgICBrZXk6IGNoaWxkS2V5LFxuICAgICAgICAgICAgICBkaXN0OiBkaXN0LFxuICAgICAgICAgICAgICBwcm9wczogY2hpbGQucHJvcHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRpc3RhbmNlcy5sZW5ndGgpIHtcbiAgICAgICAgICBkaXN0YW5jZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEuZGlzdCAtIGIuZGlzdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgaG92ZXJLZXkgPSBkaXN0YW5jZXNbMF0ua2V5O1xuICAgICAgICAgIHZhciBjaGlsZFByb3BzID0gZGlzdGFuY2VzWzBdLnByb3BzO1xuXG4gICAgICAgICAgaWYgKF90aGlzLmhvdmVyS2V5XyAhPT0gaG92ZXJLZXkpIHtcbiAgICAgICAgICAgIF90aGlzLl9vbkNoaWxkTW91c2VMZWF2ZSgpO1xuXG4gICAgICAgICAgICBfdGhpcy5fb25DaGlsZE1vdXNlRW50ZXIoaG92ZXJLZXksIGNoaWxkUHJvcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5fb25DaGlsZE1vdXNlTGVhdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuX29uQ2hpbGRNb3VzZUxlYXZlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9nZXREaW1lbnNpb25zID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIGNoaWxkS2V5ID0ga2V5O1xuICAgICAgcmV0dXJuIF90aGlzLmRpbWVuc2lvbnNDYWNoZV9bY2hpbGRLZXldO1xuICAgIH07XG5cbiAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaGVyLm9uKCdrT05fQ0hBTkdFJywgX3RoaXMuX29uQ2hhbmdlSGFuZGxlcik7XG4gICAgX3RoaXMucHJvcHMuZGlzcGF0Y2hlci5vbigna09OX01PVVNFX1BPU0lUSU9OX0NIQU5HRScsIF90aGlzLl9vbk1vdXNlQ2hhbmdlSGFuZGxlcik7XG4gICAgX3RoaXMucHJvcHMuZGlzcGF0Y2hlci5vbigna09OX0NMSUNLJywgX3RoaXMuX29uQ2hpbGRDbGljayk7XG4gICAgX3RoaXMucHJvcHMuZGlzcGF0Y2hlci5vbigna09OX01ET1dOJywgX3RoaXMuX29uQ2hpbGRNb3VzZURvd24pO1xuXG4gICAgX3RoaXMuZGltZW5zaW9uc0NhY2hlXyA9IHt9O1xuICAgIF90aGlzLmhvdmVyS2V5XyA9IG51bGw7XG4gICAgX3RoaXMuaG92ZXJDaGlsZFByb3BzXyA9IG51bGw7XG4gICAgX3RoaXMuYWxsb3dNb3VzZV8gPSB0cnVlO1xuXG4gICAgX3RoaXMuc3RhdGUgPSBfZXh0ZW5kcyh7fSwgX3RoaXMuX2dldFN0YXRlKCksIHsgaG92ZXJLZXk6IG51bGwgfSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cblxuICBHb29nbGVNYXBNYXJrZXJzLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5leHBlcmltZW50YWwgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSgoMCwgX29taXQyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIFsnaG92ZXJLZXknXSksICgwLCBfb21pdDIuZGVmYXVsdCkobmV4dFN0YXRlLCBbJ2hvdmVyS2V5J10pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcbiAgfTtcblxuICBHb29nbGVNYXBNYXJrZXJzLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hlci5yZW1vdmVMaXN0ZW5lcigna09OX0NIQU5HRScsIHRoaXMuX29uQ2hhbmdlSGFuZGxlcik7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaGVyLnJlbW92ZUxpc3RlbmVyKCdrT05fTU9VU0VfUE9TSVRJT05fQ0hBTkdFJywgdGhpcy5fb25Nb3VzZUNoYW5nZUhhbmRsZXIpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hlci5yZW1vdmVMaXN0ZW5lcigna09OX0NMSUNLJywgdGhpcy5fb25DaGlsZENsaWNrKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoZXIucmVtb3ZlTGlzdGVuZXIoJ2tPTl9NRE9XTicsIHRoaXMuX29uQ2hpbGRNb3VzZURvd24pO1xuXG4gICAgdGhpcy5kaW1lbnNpb25zQ2FjaGVfID0gbnVsbDtcbiAgfTtcblxuICBHb29nbGVNYXBNYXJrZXJzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgbWFpbkVsZW1lbnRTdHlsZSA9IHRoaXMucHJvcHMuc3R5bGUgfHwgbWFpblN0eWxlO1xuICAgIHRoaXMuZGltZW5zaW9uc0NhY2hlXyA9IHt9O1xuXG4gICAgdmFyIG1hcmtlcnMgPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKHRoaXMuc3RhdGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgY2hpbGRJbmRleCkge1xuICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5sYXRMbmcgPT09IHVuZGVmaW5lZCAmJiBjaGlsZC5wcm9wcy5sYXQgPT09IHVuZGVmaW5lZCAmJiBjaGlsZC5wcm9wcy5sbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICRnZW9TZXJ2aWNlOiBfdGhpczIucHJvcHMuZ2VvU2VydmljZSxcbiAgICAgICAgICAkb25Nb3VzZUFsbG93OiBfdGhpczIuX29uTW91c2VBbGxvdyxcbiAgICAgICAgICAkcHJlcmVuZGVyOiBfdGhpczIucHJvcHMucHJlcmVuZGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGF0TG5nID0gY2hpbGQucHJvcHMubGF0TG5nICE9PSB1bmRlZmluZWQgPyBjaGlsZC5wcm9wcy5sYXRMbmcgOiB7IGxhdDogY2hpbGQucHJvcHMubGF0LCBsbmc6IGNoaWxkLnByb3BzLmxuZyB9O1xuXG4gICAgICB2YXIgcHQgPSBfdGhpczIucHJvcHMuaW5zaWRlTWFwUGFuZXMgPyBfdGhpczIucHJvcHMuZ2VvU2VydmljZS5mcm9tTGF0TG5nVG9EaXZQaXhlbChsYXRMbmcpIDogX3RoaXMyLnByb3BzLmdlb1NlcnZpY2UuZnJvbUxhdExuZ1RvQ2VudGVyUGl4ZWwobGF0TG5nKTtcblxuICAgICAgdmFyIHN0eWxlUHRQb3MgPSB7XG4gICAgICAgIGxlZnQ6IHB0LngsXG4gICAgICAgIHRvcDogcHQueVxuICAgICAgfTtcblxuICAgICAgLy8gSWYgdGhlIGNvbXBvbmVudCBoYXMgYSBzb3V0aGVhc3QgY29ybmVyIGRlZmluZWQgKGVpdGhlciBhcyBhIExhdExuZywgb3IgYSBzZXBhcmF0ZVxuICAgICAgLy8gbGF0IGFuZCBsbmcgcGFpciksIHNldCB0aGUgd2lkdGggYW5kIGhlaWdodCBiYXNlZCBvbiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgbm9ydGh3ZXN0XG4gICAgICAvLyBhbmQgdGhlIHNvdXRoZWFzdCBjb3JuZXIgdG8gbG9jayB0aGUgb3ZlcmxheSB0byB0aGUgY29ycmVjdCBnZW9ncmFwaGljIGJvdW5kcy5cbiAgICAgIGlmIChjaGlsZC5wcm9wcy5zZUxhdExuZyAhPT0gdW5kZWZpbmVkIHx8IGNoaWxkLnByb3BzLnNlTGF0ICE9PSB1bmRlZmluZWQgJiYgY2hpbGQucHJvcHMuc2VMbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgc2VMYXRMbmcgPSBjaGlsZC5wcm9wcy5zZUxhdExuZyAhPT0gdW5kZWZpbmVkID8gY2hpbGQucHJvcHMuc2VMYXRMbmcgOiB7IGxhdDogY2hpbGQucHJvcHMuc2VMYXQsIGxuZzogY2hpbGQucHJvcHMuc2VMbmcgfTtcblxuICAgICAgICB2YXIgc2VQdCA9IF90aGlzMi5wcm9wcy5pbnNpZGVNYXBQYW5lcyA/IF90aGlzMi5wcm9wcy5nZW9TZXJ2aWNlLmZyb21MYXRMbmdUb0RpdlBpeGVsKHNlTGF0TG5nKSA6IF90aGlzMi5wcm9wcy5nZW9TZXJ2aWNlLmZyb21MYXRMbmdUb0NlbnRlclBpeGVsKHNlTGF0TG5nKTtcblxuICAgICAgICBzdHlsZVB0UG9zLndpZHRoID0gc2VQdC54IC0gcHQueDtcbiAgICAgICAgc3R5bGVQdFBvcy5oZWlnaHQgPSBzZVB0LnkgLSBwdC55O1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGFpbmVyUHQgPSBfdGhpczIucHJvcHMuZ2VvU2VydmljZS5mcm9tTGF0TG5nVG9Db250YWluZXJQaXhlbChsYXRMbmcpO1xuXG4gICAgICAvLyB0byBwcmV2ZW50IHJlcmVuZGVyIG9uIGNoaWxkIGVsZW1lbnQgaSBuZWVkIHRvIHBhc3NcbiAgICAgIC8vIGNvbnN0IHBhcmFtcyAkZ2V0RGltZW5zaW9ucyBhbmQgJGRpbWVuc2lvbktleSBpbnN0ZWFkIG9mIGRpbWVuc2lvbiBvYmplY3RcbiAgICAgIHZhciBjaGlsZEtleSA9IGNoaWxkLmtleSAhPT0gdW5kZWZpbmVkICYmIGNoaWxkLmtleSAhPT0gbnVsbCA/IGNoaWxkLmtleSA6IGNoaWxkSW5kZXg7XG5cbiAgICAgIF90aGlzMi5kaW1lbnNpb25zQ2FjaGVfW2NoaWxkS2V5XSA9IF9leHRlbmRzKHtcbiAgICAgICAgeDogY29udGFpbmVyUHQueCxcbiAgICAgICAgeTogY29udGFpbmVyUHQueVxuICAgICAgfSwgbGF0TG5nKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogY2hpbGRLZXksXG4gICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBzdHlsZSwgc3R5bGVQdFBvcyksXG4gICAgICAgICAgY2xhc3NOYW1lOiBjaGlsZC5wcm9wcy4kbWFya2VySG9sZGVyQ2xhc3NOYW1lXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAkaG92ZXI6IGNoaWxkS2V5ID09PSBfdGhpczIuc3RhdGUuaG92ZXJLZXksXG4gICAgICAgICAgJGdldERpbWVuc2lvbnM6IF90aGlzMi5fZ2V0RGltZW5zaW9ucyxcbiAgICAgICAgICAkZGltZW5zaW9uS2V5OiBjaGlsZEtleSxcbiAgICAgICAgICAkZ2VvU2VydmljZTogX3RoaXMyLnByb3BzLmdlb1NlcnZpY2UsXG4gICAgICAgICAgJG9uTW91c2VBbGxvdzogX3RoaXMyLl9vbk1vdXNlQWxsb3csXG4gICAgICAgICAgJHByZXJlbmRlcjogX3RoaXMyLnByb3BzLnByZXJlbmRlclxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBzdHlsZTogbWFpbkVsZW1lbnRTdHlsZSB9LFxuICAgICAgbWFya2Vyc1xuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIEdvb2dsZU1hcE1hcmtlcnM7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Hb29nbGVNYXBNYXJrZXJzLnByb3BUeXBlcyA9IHtcbiAgZ2VvU2VydmljZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgZGlzdGFuY2VUb01vdXNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGRpc3BhdGNoZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICBvbkNoaWxkQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DaGlsZE1vdXNlRG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoaWxkTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoaWxkTW91c2VFbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBnZXRIb3ZlckRpc3RhbmNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGluc2lkZU1hcFBhbmVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHByZXJlbmRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXG59O1xuR29vZ2xlTWFwTWFya2Vycy5kZWZhdWx0UHJvcHMgPSB7XG4gIGluc2lkZU1hcFBhbmVzOiBmYWxzZSxcbiAgcHJlcmVuZGVyOiBmYWxzZVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdvb2dsZU1hcE1hcmtlcnM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgc3R5bGU6IHN0eWxlIH0sXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2dvb2dsZV9tYXBfbWFya2VyczIuZGVmYXVsdCwgX2V4dGVuZHMoe30sIHByb3BzLCB7IHByZXJlbmRlcjogdHJ1ZSB9KSlcbiAgKTtcbn07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9nb29nbGVfbWFwX21hcmtlcnMgPSByZXF1aXJlKCcuL2dvb2dsZV9tYXBfbWFya2VycycpO1xuXG52YXIgX2dvb2dsZV9tYXBfbWFya2VyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29nbGVfbWFwX21hcmtlcnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc3R5bGUgPSB7XG4gIHdpZHRoOiAnNTAlJyxcbiAgaGVpZ2h0OiAnNTAlJyxcbiAgbGVmdDogJzUwJScsXG4gIHRvcDogJzUwJScsXG4gIC8vIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gIG1hcmdpbjogMCxcbiAgcGFkZGluZzogMCxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgLy8gb3BhY2l0eTogMC4zXG59OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9nb29nbGVfbWFwID0gcmVxdWlyZSgnLi9nb29nbGVfbWFwJyk7XG5cbnZhciBfZ29vZ2xlX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29nbGVfbWFwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2dvb2dsZV9tYXAyLmRlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIEJBU0VfVVJMID0gJ2h0dHBzOi8vbWFwcyc7XG52YXIgREVGQVVMVF9VUkwgPSBCQVNFX1VSTCArICcuZ29vZ2xlYXBpcy5jb20nO1xudmFyIEFQSV9QQVRIID0gJy9tYXBzL2FwaS9qcz9jYWxsYmFjaz1fJF9nb29nbGVfbWFwX2luaXRpYWxpemVfJF8nO1xuXG52YXIgZ2V0VXJsID0gZnVuY3Rpb24gZ2V0VXJsKHJlZ2lvbikge1xuICBpZiAocmVnaW9uICYmIHJlZ2lvbi50b0xvd2VyQ2FzZSgpID09PSAnY24nKSB7XG4gICAgcmV0dXJuIEJBU0VfVVJMICsgJy5nb29nbGUuY24nO1xuICB9XG4gIHJldHVybiBERUZBVUxUX1VSTDtcbn07XG5cbnZhciAkc2NyaXB0XyA9IG51bGw7XG5cbnZhciBsb2FkUHJvbWlzZV8gPSB2b2lkIDA7XG5cbnZhciByZXNvbHZlQ3VzdG9tUHJvbWlzZV8gPSB2b2lkIDA7XG5cbnZhciBfY3VzdG9tUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIHJlc29sdmVDdXN0b21Qcm9taXNlXyA9IHJlc29sdmU7XG59KTtcblxuLy8gVE9ETyBhZGQgbGlicmFyaWVzIGxhbmd1YWdlIGFuZCBvdGhlciBtYXAgb3B0aW9uc1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYm9vdHN0cmFwVVJMS2V5cywgaGVhdG1hcExpYnJhcnkpIHtcbiAgaWYgKCEkc2NyaXB0Xykge1xuICAgICRzY3JpcHRfID0gcmVxdWlyZSgnc2NyaXB0anMnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB9XG5cbiAgLy8gY2FsbCBmcm9tIG91dHNpZGUgZ29vZ2xlLW1hcC1yZWFjdFxuICAvLyB3aWxsIGJlIGFzIHNvb24gYXMgbG9hZFByb21pc2VfIHJlc29sdmVkXG4gIGlmICghYm9vdHN0cmFwVVJMS2V5cykge1xuICAgIHJldHVybiBfY3VzdG9tUHJvbWlzZTtcbiAgfVxuXG4gIGlmIChsb2FkUHJvbWlzZV8pIHtcbiAgICByZXR1cm4gbG9hZFByb21pc2VfO1xuICB9XG5cbiAgbG9hZFByb21pc2VfID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ29vZ2xlIG1hcCBjYW5ub3QgYmUgbG9hZGVkIG91dHNpZGUgYnJvd3NlciBlbnYnKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5nb29nbGUgJiYgd2luZG93Lmdvb2dsZS5tYXBzKSB7XG4gICAgICByZXNvbHZlKHdpbmRvdy5nb29nbGUubWFwcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuXyRfZ29vZ2xlX21hcF9pbml0aWFsaXplXyRfICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ29vZ2xlIG1hcCBpbml0aWFsaXphdGlvbiBlcnJvcicpKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuXyRfZ29vZ2xlX21hcF9pbml0aWFsaXplXyRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlIHdpbmRvdy5fJF9nb29nbGVfbWFwX2luaXRpYWxpemVfJF87XG4gICAgICByZXNvbHZlKHdpbmRvdy5nb29nbGUubWFwcyk7XG4gICAgfTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoYm9vdHN0cmFwVVJMS2V5cykuaW5kZXhPZignY2FsbGJhY2snKSA+IC0xKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gJ1wiY2FsbGJhY2tcIiBrZXkgaW4gYm9vdHN0cmFwVVJMS2V5cyBpcyBub3QgYWxsb3dlZCxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVzZSBvbkdvb2dsZUFwaUxvYWRlZCBwcm9wZXJ0eSBpbnN0ZWFkJztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwYXJhbXMgPSBPYmplY3Qua2V5cyhib290c3RyYXBVUkxLZXlzKS5yZWR1Y2UoZnVuY3Rpb24gKHIsIGtleSkge1xuICAgICAgcmV0dXJuIHIgKyAnJicgKyBrZXkgKyAnPScgKyBib290c3RyYXBVUkxLZXlzW2tleV07XG4gICAgfSwgJycpO1xuXG4gICAgdmFyIGJhc2VVcmwgPSBnZXRVcmwoYm9vdHN0cmFwVVJMS2V5cy5yZWdpb24pO1xuICAgIHZhciBsaWJyYXJpZXMgPSBoZWF0bWFwTGlicmFyeSA/ICcmbGlicmFyaWVzPXZpc3VhbGl6YXRpb24nIDogJyc7XG5cbiAgICAkc2NyaXB0XygnJyArIGJhc2VVcmwgKyBBUElfUEFUSCArIHBhcmFtcyArIGxpYnJhcmllcywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cuZ29vZ2xlID09PSAndW5kZWZpbmVkJyAmJiByZWplY3QobmV3IEVycm9yKCdnb29nbGUgbWFwIGluaXRpYWxpemF0aW9uIGVycm9yIChub3QgbG9hZGVkKScpKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmVzb2x2ZUN1c3RvbVByb21pc2VfKGxvYWRQcm9taXNlXyk7XG5cbiAgcmV0dXJuIGxvYWRQcm9taXNlXztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V2ZW50ZW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50ZW1pdHRlcjMnKTtcblxudmFyIF9ldmVudGVtaXR0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnRlbWl0dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTWFya2VyRGlzcGF0Y2hlciA9IGZ1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0cyhNYXJrZXJEaXNwYXRjaGVyLCBfRXZlbnRFbWl0dGVyKTtcblxuICBmdW5jdGlvbiBNYXJrZXJEaXNwYXRjaGVyKGdtYXBJbnN0YW5jZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXJrZXJEaXNwYXRjaGVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9FdmVudEVtaXR0ZXIuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5nbWFwSW5zdGFuY2UgPSBnbWFwSW5zdGFuY2U7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgTWFya2VyRGlzcGF0Y2hlci5wcm90b3R5cGUuZ2V0Q2hpbGRyZW4gPSBmdW5jdGlvbiBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nbWFwSW5zdGFuY2UucHJvcHMuY2hpbGRyZW47XG4gIH07XG5cbiAgTWFya2VyRGlzcGF0Y2hlci5wcm90b3R5cGUuZ2V0TW91c2VQb3NpdGlvbiA9IGZ1bmN0aW9uIGdldE1vdXNlUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ21hcEluc3RhbmNlLm1vdXNlXztcbiAgfTtcblxuICBNYXJrZXJEaXNwYXRjaGVyLnByb3RvdHlwZS5nZXRVcGRhdGVDb3VudGVyID0gZnVuY3Rpb24gZ2V0VXBkYXRlQ291bnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nbWFwSW5zdGFuY2UudXBkYXRlQ291bnRlcl87XG4gIH07XG5cbiAgTWFya2VyRGlzcGF0Y2hlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5nbWFwSW5zdGFuY2UgPSBudWxsO1xuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgcmV0dXJuIE1hcmtlckRpc3BhdGNoZXI7XG59KF9ldmVudGVtaXR0ZXIyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNYXJrZXJEaXNwYXRjaGVyOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRldGVjdEJyb3dzZXI7XG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU4OTk3ODMvZGV0ZWN0LXNhZmFyaS1jaHJvbWUtaWUtZmlyZWZveC1vcGVyYS13aXRoLXVzZXItYWdlbnRcbnZhciBkZXRlY3RCcm93c2VyUmVzdWx0XyA9IG51bGw7XG5cbmZ1bmN0aW9uIGRldGVjdEJyb3dzZXIoKSB7XG4gIGlmIChkZXRlY3RCcm93c2VyUmVzdWx0Xykge1xuICAgIHJldHVybiBkZXRlY3RCcm93c2VyUmVzdWx0XztcbiAgfVxuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBpc0V4cGxvcmVyID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgPiAtMTtcbiAgICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMTtcbiAgICB2YXIgaXNPcGVyYSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdvcCcpID4gLTE7XG5cbiAgICB2YXIgaXNDaHJvbWUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZScpID4gLTE7XG4gICAgdmFyIGlzU2FmYXJpID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdTYWZhcmknKSA+IC0xO1xuXG4gICAgaWYgKGlzQ2hyb21lICYmIGlzU2FmYXJpKSB7XG4gICAgICBpc1NhZmFyaSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc0Nocm9tZSAmJiBpc09wZXJhKSB7XG4gICAgICBpc0Nocm9tZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRldGVjdEJyb3dzZXJSZXN1bHRfID0ge1xuICAgICAgaXNFeHBsb3JlcjogaXNFeHBsb3JlcixcbiAgICAgIGlzRmlyZWZveDogaXNGaXJlZm94LFxuICAgICAgaXNPcGVyYTogaXNPcGVyYSxcbiAgICAgIGlzQ2hyb21lOiBpc0Nocm9tZSxcbiAgICAgIGlzU2FmYXJpOiBpc1NhZmFyaVxuICAgIH07XG4gICAgcmV0dXJuIGRldGVjdEJyb3dzZXJSZXN1bHRfO1xuICB9XG5cbiAgZGV0ZWN0QnJvd3NlclJlc3VsdF8gPSB7XG4gICAgaXNDaHJvbWU6IHRydWUsXG4gICAgaXNFeHBsb3JlcjogZmFsc2UsXG4gICAgaXNGaXJlZm94OiBmYWxzZSxcbiAgICBpc09wZXJhOiBmYWxzZSxcbiAgICBpc1NhZmFyaTogZmFsc2VcbiAgfTtcblxuICByZXR1cm4gZGV0ZWN0QnJvd3NlclJlc3VsdF87XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3Bhc3NpdmVFdmVudHMgPSByZXF1aXJlKCcuL3Bhc3NpdmVFdmVudHMnKTtcblxudmFyIF9wYXNzaXZlRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bhc3NpdmVFdmVudHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBSZWxpYWJsZSBgd2luZG93YCBhbmQgYGRvY3VtZW50YCBkZXRlY3Rpb25cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG4vLyBDaGVjayBgZG9jdW1lbnRgIGFuZCBgd2luZG93YCBpbiBjYXNlIG9mIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuKiBEZXRlY3QgRWxlbWVudCBSZXNpemUuXG4qIEZvcmtlZCBpbiBvcmRlciB0byBndWFyZCBhZ2FpbnN0IHVuc2FmZSAnd2luZG93JyBhbmQgJ2RvY3VtZW50JyByZWZlcmVuY2VzLlxuKlxuKiBodHRwczovL2dpdGh1Yi5jb20vc2RlY2ltYS9qYXZhc2NyaXB0LWRldGVjdC1lbGVtZW50LXJlc2l6ZVxuKiBTZWJhc3RpYW4gRGVjaW1hXG4qXG4qIHZlcnNpb246IDAuNS4zXG4qKi9cblxudmFyIF93aW5kb3c7XG5pZiAoY2FuVXNlRE9NKSB7XG4gIF93aW5kb3cgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICBfd2luZG93ID0gc2VsZjtcbn0gZWxzZSB7XG4gIF93aW5kb3cgPSB1bmRlZmluZWQ7XG59XG5cbnZhciBhdHRhY2hFdmVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuYXR0YWNoRXZlbnQ7XG52YXIgc3R5bGVzQ3JlYXRlZCA9IGZhbHNlO1xuXG5pZiAoY2FuVXNlRE9NICYmICFhdHRhY2hFdmVudCkge1xuICB2YXIgcmVxdWVzdEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByYWYgPSBfd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBfd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBfd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBfd2luZG93LnNldFRpbWVvdXQoZm4sIDIwKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiByYWYoZm4pO1xuICAgIH07XG4gIH0oKTtcblxuICB2YXIgY2FuY2VsRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhbmNlbCA9IF93aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgX3dpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBfd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IF93aW5kb3cuY2xlYXJUaW1lb3V0O1xuICAgIHJldHVybiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHJldHVybiBjYW5jZWwoaWQpO1xuICAgIH07XG4gIH0oKTtcblxuICB2YXIgcmVzZXRUcmlnZ2VycyA9IGZ1bmN0aW9uIHJlc2V0VHJpZ2dlcnMoZWxlbWVudCkge1xuICAgIHZhciB0cmlnZ2VycyA9IGVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fLFxuICAgICAgICBleHBhbmQgPSB0cmlnZ2Vycy5maXJzdEVsZW1lbnRDaGlsZCxcbiAgICAgICAgY29udHJhY3QgPSB0cmlnZ2Vycy5sYXN0RWxlbWVudENoaWxkLFxuICAgICAgICBleHBhbmRDaGlsZCA9IGV4cGFuZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb250cmFjdC5zY3JvbGxMZWZ0ID0gY29udHJhY3Quc2Nyb2xsV2lkdGg7XG4gICAgY29udHJhY3Quc2Nyb2xsVG9wID0gY29udHJhY3Quc2Nyb2xsSGVpZ2h0O1xuICAgIGV4cGFuZENoaWxkLnN0eWxlLndpZHRoID0gZXhwYW5kLm9mZnNldFdpZHRoICsgMSArICdweCc7XG4gICAgZXhwYW5kQ2hpbGQuc3R5bGUuaGVpZ2h0ID0gZXhwYW5kLm9mZnNldEhlaWdodCArIDEgKyAncHgnO1xuICAgIGV4cGFuZC5zY3JvbGxMZWZ0ID0gZXhwYW5kLnNjcm9sbFdpZHRoO1xuICAgIGV4cGFuZC5zY3JvbGxUb3AgPSBleHBhbmQuc2Nyb2xsSGVpZ2h0O1xuICB9O1xuXG4gIHZhciBjaGVja1RyaWdnZXJzID0gZnVuY3Rpb24gY2hlY2tUcmlnZ2VycyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0V2lkdGggIT0gZWxlbWVudC5fX3Jlc2l6ZUxhc3RfXy53aWR0aCB8fCBlbGVtZW50Lm9mZnNldEhlaWdodCAhPSBlbGVtZW50Ll9fcmVzaXplTGFzdF9fLmhlaWdodDtcbiAgfTtcblxuICB2YXIgc2Nyb2xsTGlzdGVuZXIgPSBmdW5jdGlvbiBzY3JvbGxMaXN0ZW5lcihlKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzO1xuICAgIHJlc2V0VHJpZ2dlcnModGhpcyk7XG4gICAgaWYgKHRoaXMuX19yZXNpemVSQUZfXykgY2FuY2VsRnJhbWUodGhpcy5fX3Jlc2l6ZVJBRl9fKTtcbiAgICB0aGlzLl9fcmVzaXplUkFGX18gPSByZXF1ZXN0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNoZWNrVHJpZ2dlcnMoZWxlbWVudCkpIHtcbiAgICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxhc3RfXy53aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGVsZW1lbnQuX19yZXNpemVMYXN0X18uaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgIGZuLmNhbGwoZWxlbWVudCwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qIERldGVjdCBDU1MgQW5pbWF0aW9ucyBzdXBwb3J0IHRvIGRldGVjdCBlbGVtZW50IGRpc3BsYXkvcmUtYXR0YWNoICovXG4gIHZhciBhbmltYXRpb24gPSBmYWxzZSxcbiAgICAgIGFuaW1hdGlvbnN0cmluZyA9ICdhbmltYXRpb24nLFxuICAgICAga2V5ZnJhbWVwcmVmaXggPSAnJyxcbiAgICAgIGFuaW1hdGlvbnN0YXJ0ZXZlbnQgPSAnYW5pbWF0aW9uc3RhcnQnLFxuICAgICAgZG9tUHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zJy5zcGxpdCgnICcpLFxuICAgICAgc3RhcnRFdmVudHMgPSAnd2Via2l0QW5pbWF0aW9uU3RhcnQgYW5pbWF0aW9uc3RhcnQgb0FuaW1hdGlvblN0YXJ0IE1TQW5pbWF0aW9uU3RhcnQnLnNwbGl0KCcgJyksXG4gICAgICBwZnggPSAnJztcblxuICBpZiAoY2FuVXNlRE9NKSB7XG4gICAgdmFyIGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG4gICAgaWYgKGVsbS5zdHlsZS5hbmltYXRpb25OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFuaW1hdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9tUHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVsbS5zdHlsZVtkb21QcmVmaXhlc1tpXSArICdBbmltYXRpb25OYW1lJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHBmeCA9IGRvbVByZWZpeGVzW2ldO1xuICAgICAgICAgIGFuaW1hdGlvbnN0cmluZyA9IHBmeCArICdBbmltYXRpb24nO1xuICAgICAgICAgIGtleWZyYW1lcHJlZml4ID0gJy0nICsgcGZ4LnRvTG93ZXJDYXNlKCkgKyAnLSc7XG4gICAgICAgICAgYW5pbWF0aW9uc3RhcnRldmVudCA9IHN0YXJ0RXZlbnRzW2ldO1xuICAgICAgICAgIGFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgYW5pbWF0aW9uTmFtZSA9ICdyZXNpemVhbmltJztcbiAgdmFyIGFuaW1hdGlvbktleWZyYW1lcyA9ICdAJyArIGtleWZyYW1lcHJlZml4ICsgJ2tleWZyYW1lcyAnICsgYW5pbWF0aW9uTmFtZSArICcgeyBmcm9tIHsgb3BhY2l0eTogMDsgfSB0byB7IG9wYWNpdHk6IDA7IH0gfSAnO1xuICB2YXIgYW5pbWF0aW9uU3R5bGUgPSBrZXlmcmFtZXByZWZpeCArICdhbmltYXRpb246IDFtcyAnICsgYW5pbWF0aW9uTmFtZSArICc7ICc7XG59XG5cbnZhciBjcmVhdGVTdHlsZXMgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoKSB7XG4gIGlmICghc3R5bGVzQ3JlYXRlZCkge1xuICAgIC8vb3BhY2l0eTowIHdvcmtzIGFyb3VuZCBhIGNocm9tZSBidWcgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTI4NjM2MFxuICAgIHZhciBjc3MgPSAoYW5pbWF0aW9uS2V5ZnJhbWVzID8gYW5pbWF0aW9uS2V5ZnJhbWVzIDogJycpICsgJy5yZXNpemUtdHJpZ2dlcnMgeyAnICsgKGFuaW1hdGlvblN0eWxlID8gYW5pbWF0aW9uU3R5bGUgOiAnJykgKyAndmlzaWJpbGl0eTogaGlkZGVuOyBvcGFjaXR5OiAwOyB9ICcgKyAnLnJlc2l6ZS10cmlnZ2VycywgLnJlc2l6ZS10cmlnZ2VycyA+IGRpdiwgLmNvbnRyYWN0LXRyaWdnZXI6YmVmb3JlIHsgY29udGVudDogXCIgXCI7IGRpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgfSAucmVzaXplLXRyaWdnZXJzID4gZGl2IHsgYmFja2dyb3VuZDogI2VlZTsgb3ZlcmZsb3c6IGF1dG87IH0gLmNvbnRyYWN0LXRyaWdnZXI6YmVmb3JlIHsgd2lkdGg6IDIwMCU7IGhlaWdodDogMjAwJTsgfScsXG4gICAgICAgIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0sXG4gICAgICAgIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIHN0eWxlc0NyZWF0ZWQgPSB0cnVlO1xuICB9XG59O1xuXG52YXIgYWRkUmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRSZXNpemVMaXN0ZW5lcihlbGVtZW50LCBmbikge1xuICBpZiAoZWxlbWVudC5wYXJlbnROb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgdGVtcFBhcmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQucGFyZW50Tm9kZSA9IHRlbXBQYXJlbnREaXY7XG4gIH1cbiAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgaWYgKGF0dGFjaEV2ZW50KSBlbGVtZW50LmF0dGFjaEV2ZW50KCdvbnJlc2l6ZScsIGZuKTtlbHNlIHtcbiAgICBpZiAoIWVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fKSB7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PSAnc3RhdGljJykgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICBjcmVhdGVTdHlsZXMoKTtcbiAgICAgIGVsZW1lbnQuX19yZXNpemVMYXN0X18gPSB7fTtcbiAgICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXyA9IFtdO1xuICAgICAgKGVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLmNsYXNzTmFtZSA9ICdyZXNpemUtdHJpZ2dlcnMnO1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18uaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJleHBhbmQtdHJpZ2dlclwiPjxkaXY+PC9kaXY+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwiY29udHJhY3QtdHJpZ2dlclwiPjwvZGl2Pic7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQuX19yZXNpemVUcmlnZ2Vyc19fKTtcbiAgICAgIHJlc2V0VHJpZ2dlcnMoZWxlbWVudCk7XG5cbiAgICAgICgwLCBfcGFzc2l2ZUV2ZW50czIuZGVmYXVsdCkoZWxlbWVudCwgJ3Njcm9sbCcsIHNjcm9sbExpc3RlbmVyLCB0cnVlKTtcblxuICAgICAgLyogTGlzdGVuIGZvciBhIGNzcyBhbmltYXRpb24gdG8gZGV0ZWN0IGVsZW1lbnQgZGlzcGxheS9yZS1hdHRhY2ggKi9cbiAgICAgIGFuaW1hdGlvbnN0YXJ0ZXZlbnQgJiYgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18uYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25zdGFydGV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5hbmltYXRpb25OYW1lID09IGFuaW1hdGlvbk5hbWUpIHJlc2V0VHJpZ2dlcnMoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLnB1c2goZm4pO1xuICB9XG59O1xuXG52YXIgcmVtb3ZlUmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVSZXNpemVMaXN0ZW5lcihlbGVtZW50LCBmbikge1xuICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICBpZiAoYXR0YWNoRXZlbnQpIGVsZW1lbnQuZGV0YWNoRXZlbnQoJ29ucmVzaXplJywgZm4pO2Vsc2Uge1xuICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXy5zcGxpY2UoZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLmluZGV4T2YoZm4pLCAxKTtcbiAgICBpZiAoIWVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXy5sZW5ndGgpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsTGlzdGVuZXIpO1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJzX18gPSAhZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcnNfXyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRkUmVzaXplTGlzdGVuZXI6IGFkZFJlc2l6ZUxpc3RlbmVyLFxuICByZW1vdmVSZXNpemVMaXN0ZW5lcjogcmVtb3ZlUmVzaXplTGlzdGVuZXJcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3BvaW50R2VvbWV0cnkgPSByZXF1aXJlKCdAbWFwYm94L3BvaW50LWdlb21ldHJ5Jyk7XG5cbnZhciBfcG9pbnRHZW9tZXRyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludEdlb21ldHJ5KTtcblxudmFyIF9sYXRfbG5nID0gcmVxdWlyZSgnLi9saWJfZ2VvL2xhdF9sbmcnKTtcblxudmFyIF9sYXRfbG5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xhdF9sbmcpO1xuXG52YXIgX3RyYW5zZm9ybSA9IHJlcXVpcmUoJy4vbGliX2dlby90cmFuc2Zvcm0nKTtcblxudmFyIF90cmFuc2Zvcm0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEdlbyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2VvKHRpbGVTaXplKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdlbyk7XG5cbiAgICAvLyBsZWZ0X3RvcCB2aWV3INC/0L7Qu9GM0LfRg9C10YIg0LPRg9Cz0LtcbiAgICAvLyBzdXBlcigpO1xuICAgIHRoaXMuaGFzU2l6ZV8gPSBmYWxzZTtcbiAgICB0aGlzLmhhc1ZpZXdfID0gZmFsc2U7XG4gICAgdGhpcy50cmFuc2Zvcm1fID0gbmV3IF90cmFuc2Zvcm0yLmRlZmF1bHQodGlsZVNpemUgfHwgNTEyKTtcbiAgfVxuXG4gIEdlby5wcm90b3R5cGUuc2V0VmlldyA9IGZ1bmN0aW9uIHNldFZpZXcoY2VudGVyLCB6b29tLCBiZWFyaW5nKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1fLmNlbnRlciA9IF9sYXRfbG5nMi5kZWZhdWx0LmNvbnZlcnQoY2VudGVyKTtcbiAgICB0aGlzLnRyYW5zZm9ybV8uem9vbSA9ICt6b29tO1xuICAgIHRoaXMudHJhbnNmb3JtXy5iZWFyaW5nID0gK2JlYXJpbmc7XG4gICAgdGhpcy5oYXNWaWV3XyA9IHRydWU7XG4gIH07XG5cbiAgR2VvLnByb3RvdHlwZS5zZXRWaWV3U2l6ZSA9IGZ1bmN0aW9uIHNldFZpZXdTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnRyYW5zZm9ybV8ud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLnRyYW5zZm9ybV8uaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuaGFzU2l6ZV8gPSB0cnVlO1xuICB9O1xuXG4gIEdlby5wcm90b3R5cGUuc2V0TWFwQ2FudmFzUHJvamVjdGlvbiA9IGZ1bmN0aW9uIHNldE1hcENhbnZhc1Byb2plY3Rpb24obWFwcywgbWFwQ2FudmFzUHJvamVjdGlvbikge1xuICAgIHRoaXMubWFwc18gPSBtYXBzO1xuICAgIHRoaXMubWFwQ2FudmFzUHJvamVjdGlvbl8gPSBtYXBDYW52YXNQcm9qZWN0aW9uO1xuICB9O1xuXG4gIEdlby5wcm90b3R5cGUuY2FuUHJvamVjdCA9IGZ1bmN0aW9uIGNhblByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzU2l6ZV8gJiYgdGhpcy5oYXNWaWV3XztcbiAgfTtcblxuICBHZW8ucHJvdG90eXBlLmhhc1NpemUgPSBmdW5jdGlvbiBoYXNTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmhhc1NpemVfO1xuICB9O1xuXG4gIC8qKiBSZXR1cm5zIHRoZSBwaXhlbCBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgbWFwIGNlbnRlci4gKi9cblxuXG4gIEdlby5wcm90b3R5cGUuZnJvbUxhdExuZ1RvQ2VudGVyUGl4ZWwgPSBmdW5jdGlvbiBmcm9tTGF0TG5nVG9DZW50ZXJQaXhlbChwdExhdExuZykge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybV8ubG9jYXRpb25Qb2ludChfbGF0X2xuZzIuZGVmYXVsdC5jb252ZXJ0KHB0TGF0TG5nKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBpeGVsIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBtYXAgcGFuZXMsXG4gICAqIG9yIHJlbGF0aXZlIHRvIHRoZSBtYXAgY2VudGVyIGlmIHRoZXJlIGFyZSBubyBwYW5lcy5cbiAgICovXG5cblxuICBHZW8ucHJvdG90eXBlLmZyb21MYXRMbmdUb0RpdlBpeGVsID0gZnVuY3Rpb24gZnJvbUxhdExuZ1RvRGl2UGl4ZWwocHRMYXRMbmcpIHtcbiAgICBpZiAodGhpcy5tYXBDYW52YXNQcm9qZWN0aW9uXykge1xuICAgICAgdmFyIGxhdExuZyA9IG5ldyB0aGlzLm1hcHNfLkxhdExuZyhwdExhdExuZy5sYXQsIHB0TGF0TG5nLmxuZyk7XG4gICAgICByZXR1cm4gdGhpcy5tYXBDYW52YXNQcm9qZWN0aW9uXy5mcm9tTGF0TG5nVG9EaXZQaXhlbChsYXRMbmcpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mcm9tTGF0TG5nVG9DZW50ZXJQaXhlbChwdExhdExuZyk7XG4gIH07XG5cbiAgLyoqIFJldHVybnMgdGhlIHBpeGVsIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBtYXAgdG9wLWxlZnQuICovXG5cblxuICBHZW8ucHJvdG90eXBlLmZyb21MYXRMbmdUb0NvbnRhaW5lclBpeGVsID0gZnVuY3Rpb24gZnJvbUxhdExuZ1RvQ29udGFpbmVyUGl4ZWwocHRMYXRMbmcpIHtcbiAgICBpZiAodGhpcy5tYXBDYW52YXNQcm9qZWN0aW9uXykge1xuICAgICAgdmFyIGxhdExuZyA9IG5ldyB0aGlzLm1hcHNfLkxhdExuZyhwdExhdExuZy5sYXQsIHB0TGF0TG5nLmxuZyk7XG4gICAgICByZXR1cm4gdGhpcy5tYXBDYW52YXNQcm9qZWN0aW9uXy5mcm9tTGF0TG5nVG9Db250YWluZXJQaXhlbChsYXRMbmcpO1xuICAgIH1cblxuICAgIHZhciBwdCA9IHRoaXMuZnJvbUxhdExuZ1RvQ2VudGVyUGl4ZWwocHRMYXRMbmcpO1xuICAgIHB0LnggLT0gdGhpcy50cmFuc2Zvcm1fLndvcmxkU2l6ZSAqIE1hdGgucm91bmQocHQueCAvIHRoaXMudHJhbnNmb3JtXy53b3JsZFNpemUpO1xuXG4gICAgcHQueCArPSB0aGlzLnRyYW5zZm9ybV8ud2lkdGggLyAyO1xuICAgIHB0LnkgKz0gdGhpcy50cmFuc2Zvcm1fLmhlaWdodCAvIDI7XG5cbiAgICByZXR1cm4gcHQ7XG4gIH07XG5cbiAgLyoqIFJldHVybnMgdGhlIExhdExuZyBmb3IgdGhlIGdpdmVuIG9mZnNldCBmcm9tIHRoZSBtYXAgdG9wLWxlZnQuICovXG5cblxuICBHZW8ucHJvdG90eXBlLmZyb21Db250YWluZXJQaXhlbFRvTGF0TG5nID0gZnVuY3Rpb24gZnJvbUNvbnRhaW5lclBpeGVsVG9MYXRMbmcocHRYWSkge1xuICAgIGlmICh0aGlzLm1hcENhbnZhc1Byb2plY3Rpb25fKSB7XG4gICAgICB2YXIgbGF0TG5nID0gdGhpcy5tYXBDYW52YXNQcm9qZWN0aW9uXy5mcm9tQ29udGFpbmVyUGl4ZWxUb0xhdExuZyhwdFhZKTtcbiAgICAgIHJldHVybiB7IGxhdDogbGF0TG5nLmxhdCgpLCBsbmc6IGxhdExuZy5sbmcoKSB9O1xuICAgIH1cblxuICAgIHZhciBwdHh5ID0gX2V4dGVuZHMoe30sIHB0WFkpO1xuICAgIHB0eHkueCAtPSB0aGlzLnRyYW5zZm9ybV8ud2lkdGggLyAyO1xuICAgIHB0eHkueSAtPSB0aGlzLnRyYW5zZm9ybV8uaGVpZ2h0IC8gMjtcbiAgICB2YXIgcHRSZXMgPSB0aGlzLnRyYW5zZm9ybV8ucG9pbnRMb2NhdGlvbihfcG9pbnRHZW9tZXRyeTIuZGVmYXVsdC5jb252ZXJ0KHB0eHkpKTtcblxuICAgIHB0UmVzLmxuZyAtPSAzNjAgKiBNYXRoLnJvdW5kKHB0UmVzLmxuZyAvIDM2MCk7IC8vIGNvbnZlcnQgMiBnb29nbGUgZm9ybWF0XG4gICAgcmV0dXJuIHB0UmVzO1xuICB9O1xuXG4gIEdlby5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1fLndpZHRoO1xuICB9O1xuXG4gIEdlby5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybV8uaGVpZ2h0O1xuICB9O1xuXG4gIEdlby5wcm90b3R5cGUuZ2V0Wm9vbSA9IGZ1bmN0aW9uIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtXy56b29tO1xuICB9O1xuXG4gIEdlby5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24gZ2V0Q2VudGVyKCkge1xuICAgIHZhciBwdFJlcyA9IHRoaXMudHJhbnNmb3JtXy5wb2ludExvY2F0aW9uKHsgeDogMCwgeTogMCB9KTtcblxuICAgIHJldHVybiBwdFJlcztcbiAgfTtcblxuICBHZW8ucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uIGdldEJvdW5kcyhtYXJnaW5zLCByb3VuZEZhY3Rvcikge1xuICAgIHZhciBibmRUID0gbWFyZ2lucyAmJiBtYXJnaW5zWzBdIHx8IDA7XG4gICAgdmFyIGJuZFIgPSBtYXJnaW5zICYmIG1hcmdpbnNbMV0gfHwgMDtcbiAgICB2YXIgYm5kQiA9IG1hcmdpbnMgJiYgbWFyZ2luc1syXSB8fCAwO1xuICAgIHZhciBibmRMID0gbWFyZ2lucyAmJiBtYXJnaW5zWzNdIHx8IDA7XG5cbiAgICBpZiAodGhpcy5nZXRXaWR0aCgpIC0gYm5kUiAtIGJuZEwgPiAwICYmIHRoaXMuZ2V0SGVpZ2h0KCkgLSBibmRUIC0gYm5kQiA+IDApIHtcbiAgICAgIHZhciB0b3BMZWZ0Q29ybmVyID0gdGhpcy50cmFuc2Zvcm1fLnBvaW50TG9jYXRpb24oX3BvaW50R2VvbWV0cnkyLmRlZmF1bHQuY29udmVydCh7XG4gICAgICAgIHg6IGJuZEwgLSB0aGlzLmdldFdpZHRoKCkgLyAyLFxuICAgICAgICB5OiBibmRUIC0gdGhpcy5nZXRIZWlnaHQoKSAvIDJcbiAgICAgIH0pKTtcbiAgICAgIHZhciBib3R0b21SaWdodENvcm5lciA9IHRoaXMudHJhbnNmb3JtXy5wb2ludExvY2F0aW9uKF9wb2ludEdlb21ldHJ5Mi5kZWZhdWx0LmNvbnZlcnQoe1xuICAgICAgICB4OiB0aGlzLmdldFdpZHRoKCkgLyAyIC0gYm5kUixcbiAgICAgICAgeTogdGhpcy5nZXRIZWlnaHQoKSAvIDIgLSBibmRCXG4gICAgICB9KSk7XG5cbiAgICAgIHZhciByZXMgPSBbdG9wTGVmdENvcm5lci5sYXQsIHRvcExlZnRDb3JuZXIubG5nLCAvLyBOV1xuICAgICAgYm90dG9tUmlnaHRDb3JuZXIubGF0LCBib3R0b21SaWdodENvcm5lci5sbmcsIC8vIFNFXG4gICAgICBib3R0b21SaWdodENvcm5lci5sYXQsIHRvcExlZnRDb3JuZXIubG5nLCAvLyBTV1xuICAgICAgdG9wTGVmdENvcm5lci5sYXQsIGJvdHRvbVJpZ2h0Q29ybmVyLmxuZ107XG5cbiAgICAgIGlmIChyb3VuZEZhY3Rvcikge1xuICAgICAgICByZXMgPSByZXMubWFwKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQociAqIHJvdW5kRmFjdG9yKSAvIHJvdW5kRmFjdG9yO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIFswLCAwLCAwLCAwXTtcbiAgfTtcblxuICByZXR1cm4gR2VvO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBHZW87IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0FycmF5c0VxdWFsRXBzO1xuZnVuY3Rpb24gaXNBcnJheXNFcXVhbEVwcyhhcnJheUEsIGFycmF5QiwgZXBzKSB7XG4gIGlmIChhcnJheUEgJiYgYXJyYXlCKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgIT09IGFycmF5QS5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKE1hdGguYWJzKGFycmF5QVtpXSAtIGFycmF5QltpXSkgPiBlcHMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBpc0VtcHR5ID0gZnVuY3Rpb24gaXNFbXB0eSh2YWwpIHtcbiAgLy8gY2hlY2sgZm9yIGVtcHR5IG9iamVjdCB7fSwgYXJyYXkgW11cbiAgaWYgKHZhbCAhPT0gbnVsbCAmJiAodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsKSkgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHZhbCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gJycpIHtcbiAgICAvLyBjaGVjayBmb3IgdW5kZWZpbmVkLCBudWxsIGFuZCBcIlwiXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNFbXB0eTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNOdW1iZXI7XG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCc7XG59XG5cbnZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHZhciBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJztcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gbnVtYmVyVGFnO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc1BsYWluT2JqZWN0O1xuLy8gc291cmNlIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlZHV4L2Jsb2IvbWFzdGVyL3NyYy91dGlscy9pc1BsYWluT2JqZWN0LmpzXG52YXIgZm5Ub1N0cmluZyA9IGZ1bmN0aW9uIGZuVG9TdHJpbmcoZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGZuKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJndW1lbnQgYXBwZWFycyB0byBiZSBhIHBsYWluIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKCFvYmogfHwgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iaikpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90byA9IHR5cGVvZiBvYmouY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA6IE9iamVjdC5wcm90b3R5cGU7XG5cbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgY29uc3RydWN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcblxuICByZXR1cm4gdHlwZW9mIGNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmIGNvbnN0cnVjdG9yIGluc3RhbmNlb2YgY29uc3RydWN0b3IgJiYgZm5Ub1N0cmluZyhjb25zdHJ1Y3RvcikgPT09IGZuVG9TdHJpbmcoT2JqZWN0KTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd3JhcDIgPSByZXF1aXJlKCcuL3dyYXAnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIExhdExuZyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTGF0TG5nKGxhdCwgbG5nKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExhdExuZyk7XG5cbiAgICBpZiAoaXNOYU4obGF0KSB8fCBpc05hTihsbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgTGF0TG5nIG9iamVjdDogKCcgKyBsYXQgKyAnLCAnICsgbG5nICsgJyknKTtcbiAgICB9XG4gICAgdGhpcy5sYXQgPSArbGF0O1xuICAgIHRoaXMubG5nID0gK2xuZztcbiAgfVxuXG4gIExhdExuZy5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgcmV0dXJuIG5ldyBMYXRMbmcodGhpcy5sYXQsICgwLCBfd3JhcDIud3JhcCkodGhpcy5sbmcsIC0xODAsIDE4MCkpO1xuICB9O1xuXG4gIHJldHVybiBMYXRMbmc7XG59KCk7XG5cbkxhdExuZy5jb252ZXJ0ID0gZnVuY3Rpb24gKGEpIHtcbiAgaWYgKGEgaW5zdGFuY2VvZiBMYXRMbmcpIHtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgcmV0dXJuIG5ldyBMYXRMbmcoYVswXSwgYVsxXSk7XG4gIH1cblxuICBpZiAoJ2xuZycgaW4gYSAmJiAnbGF0JyBpbiBhKSB7XG4gICAgcmV0dXJuIG5ldyBMYXRMbmcoYS5sYXQsIGEubG5nKTtcbiAgfVxuXG4gIHJldHVybiBhO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGF0TG5nOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTsgLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG5cbnZhciBfcG9pbnRHZW9tZXRyeSA9IHJlcXVpcmUoJ0BtYXBib3gvcG9pbnQtZ2VvbWV0cnknKTtcblxudmFyIF9wb2ludEdlb21ldHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvaW50R2VvbWV0cnkpO1xuXG52YXIgX2xhdF9sbmcgPSByZXF1aXJlKCcuL2xhdF9sbmcnKTtcblxudmFyIF9sYXRfbG5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xhdF9sbmcpO1xuXG52YXIgX3dyYXAgPSByZXF1aXJlKCcuL3dyYXAnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gQSBzaW5nbGUgdHJhbnNmb3JtLCBnZW5lcmFsbHkgdXNlZCBmb3IgYSBzaW5nbGUgdGlsZSB0byBiZSBzY2FsZWQsIHJvdGF0ZWQsIGFuZCB6b29tZWQuXG52YXIgVHJhbnNmb3JtID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUcmFuc2Zvcm0odGlsZVNpemUsIG1pblpvb20sIG1heFpvb20pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNmb3JtKTtcblxuICAgIHRoaXMudGlsZVNpemUgPSB0aWxlU2l6ZSB8fCA1MTI7IC8vIGNvbnN0YW50XG5cbiAgICB0aGlzLl9taW5ab29tID0gbWluWm9vbSB8fCAwO1xuICAgIHRoaXMuX21heFpvb20gPSBtYXhab29tIHx8IDUyO1xuXG4gICAgdGhpcy5sYXRSYW5nZSA9IFstODUuMDUxMTMsIDg1LjA1MTEzXTtcblxuICAgIHRoaXMud2lkdGggPSAwO1xuICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICB0aGlzLnpvb20gPSAwO1xuICAgIHRoaXMuY2VudGVyID0gbmV3IF9sYXRfbG5nMi5kZWZhdWx0KDAsIDApO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICB9XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS56b29tU2NhbGUgPSBmdW5jdGlvbiB6b29tU2NhbGUoem9vbSkge1xuICAgIHJldHVybiBNYXRoLnBvdygyLCB6b29tKTtcbiAgfTtcblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLnNjYWxlWm9vbSA9IGZ1bmN0aW9uIHNjYWxlWm9vbShzY2FsZSkge1xuICAgIHJldHVybiBNYXRoLmxvZyhzY2FsZSkgLyBNYXRoLkxOMjtcbiAgfTtcblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLnByb2plY3QgPSBmdW5jdGlvbiBwcm9qZWN0KGxhdGxuZywgd29ybGRTaXplKSB7XG4gICAgcmV0dXJuIG5ldyBfcG9pbnRHZW9tZXRyeTIuZGVmYXVsdCh0aGlzLmxuZ1gobGF0bG5nLmxuZywgd29ybGRTaXplKSwgdGhpcy5sYXRZKGxhdGxuZy5sYXQsIHdvcmxkU2l6ZSkpO1xuICB9O1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUudW5wcm9qZWN0ID0gZnVuY3Rpb24gdW5wcm9qZWN0KHBvaW50LCB3b3JsZFNpemUpIHtcbiAgICByZXR1cm4gbmV3IF9sYXRfbG5nMi5kZWZhdWx0KHRoaXMueUxhdChwb2ludC55LCB3b3JsZFNpemUpLCB0aGlzLnhMbmcocG9pbnQueCwgd29ybGRTaXplKSk7XG4gIH07XG5cbiAgLy8gbGF0L2xvbiA8LT4gYWJzb2x1dGUgcGl4ZWwgY29vcmRzIGNvbnZlcnRpb25cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS5sbmdYID0gZnVuY3Rpb24gbG5nWChsb24sIHdvcmxkU2l6ZSkge1xuICAgIHJldHVybiAoMTgwICsgbG9uKSAqICh3b3JsZFNpemUgfHwgdGhpcy53b3JsZFNpemUpIC8gMzYwO1xuICB9O1xuXG4gIC8vIGxhdGl0dWRlIHRvIGFic29sdXRlIHkgY29vcmRcblxuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUubGF0WSA9IGZ1bmN0aW9uIGxhdFkobGF0LCB3b3JsZFNpemUpIHtcbiAgICB2YXIgeSA9IDE4MCAvIE1hdGguUEkgKiBNYXRoLmxvZyhNYXRoLnRhbihNYXRoLlBJIC8gNCArIGxhdCAqIE1hdGguUEkgLyAzNjApKTtcbiAgICByZXR1cm4gKDE4MCAtIHkpICogKHdvcmxkU2l6ZSB8fCB0aGlzLndvcmxkU2l6ZSkgLyAzNjA7XG4gIH07XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS54TG5nID0gZnVuY3Rpb24geExuZyh4LCB3b3JsZFNpemUpIHtcbiAgICByZXR1cm4geCAqIDM2MCAvICh3b3JsZFNpemUgfHwgdGhpcy53b3JsZFNpemUpIC0gMTgwO1xuICB9O1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUueUxhdCA9IGZ1bmN0aW9uIHlMYXQoeSwgd29ybGRTaXplKSB7XG4gICAgdmFyIHkyID0gMTgwIC0geSAqIDM2MCAvICh3b3JsZFNpemUgfHwgdGhpcy53b3JsZFNpemUpO1xuICAgIHJldHVybiAzNjAgLyBNYXRoLlBJICogTWF0aC5hdGFuKE1hdGguZXhwKHkyICogTWF0aC5QSSAvIDE4MCkpIC0gOTA7XG4gIH07XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS5sb2NhdGlvblBvaW50ID0gZnVuY3Rpb24gbG9jYXRpb25Qb2ludChsYXRsbmcpIHtcbiAgICB2YXIgcCA9IHRoaXMucHJvamVjdChsYXRsbmcpO1xuICAgIHJldHVybiB0aGlzLmNlbnRlclBvaW50Ll9zdWIodGhpcy5wb2ludC5fc3ViKHApLl9yb3RhdGUodGhpcy5hbmdsZSkpO1xuICB9O1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUucG9pbnRMb2NhdGlvbiA9IGZ1bmN0aW9uIHBvaW50TG9jYXRpb24ocCkge1xuICAgIHZhciBwMiA9IHRoaXMuY2VudGVyUG9pbnQuX3N1YihwKS5fcm90YXRlKC10aGlzLmFuZ2xlKTtcbiAgICByZXR1cm4gdGhpcy51bnByb2plY3QodGhpcy5wb2ludC5zdWIocDIpKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoVHJhbnNmb3JtLCBbe1xuICAgIGtleTogJ21pblpvb20nLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21pblpvb207XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh6b29tKSB7XG4gICAgICB0aGlzLl9taW5ab29tID0gem9vbTtcbiAgICAgIHRoaXMuem9vbSA9IE1hdGgubWF4KHRoaXMuem9vbSwgem9vbSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWF4Wm9vbScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWF4Wm9vbTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHpvb20pIHtcbiAgICAgIHRoaXMuX21heFpvb20gPSB6b29tO1xuICAgICAgdGhpcy56b29tID0gTWF0aC5taW4odGhpcy56b29tLCB6b29tKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd3b3JsZFNpemUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlsZVNpemUgKiB0aGlzLnNjYWxlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NlbnRlclBvaW50JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBuZXcgX3BvaW50R2VvbWV0cnkyLmRlZmF1bHQoMCwgMCk7IC8vIHRoaXMuc2l6ZS5fZGl2KDIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NpemUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIG5ldyBfcG9pbnRHZW9tZXRyeTIuZGVmYXVsdCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYmVhcmluZycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gLXRoaXMuYW5nbGUgLyBNYXRoLlBJICogMTgwO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoYmVhcmluZykge1xuICAgICAgdGhpcy5hbmdsZSA9IC0oMCwgX3dyYXAud3JhcCkoYmVhcmluZywgLTE4MCwgMTgwKSAqIE1hdGguUEkgLyAxODA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnem9vbScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fem9vbTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHpvb20pIHtcbiAgICAgIHZhciB6b29tViA9IE1hdGgubWluKE1hdGgubWF4KHpvb20sIHRoaXMubWluWm9vbSksIHRoaXMubWF4Wm9vbSk7XG4gICAgICB0aGlzLl96b29tID0gem9vbVY7XG4gICAgICB0aGlzLnNjYWxlID0gdGhpcy56b29tU2NhbGUoem9vbVYpO1xuICAgICAgdGhpcy50aWxlWm9vbSA9IE1hdGguZmxvb3Ioem9vbVYpO1xuICAgICAgdGhpcy56b29tRnJhY3Rpb24gPSB6b29tViAtIHRoaXMudGlsZVpvb207XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAneCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sbmdYKHRoaXMuY2VudGVyLmxuZyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAneScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXRZKHRoaXMuY2VudGVyLmxhdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9pbnQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIG5ldyBfcG9pbnRHZW9tZXRyeTIuZGVmYXVsdCh0aGlzLngsIHRoaXMueSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRyYW5zZm9ybTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy53cmFwID0gd3JhcDtcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuZnVuY3Rpb24gd3JhcChuLCBtaW4sIG1heCkge1xuICB2YXIgZCA9IG1heCAtIG1pbjtcbiAgcmV0dXJuIG4gPT09IG1heCA/IG4gOiAoKG4gLSBtaW4pICUgZCArIGQpICUgZCArIG1pbjtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBsb2cyID0gTWF0aC5sb2cyID8gTWF0aC5sb2cyIDogZnVuY3Rpb24gKHgpIHtcbiAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjI7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBsb2cyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2RsaXRlL3JlY29tcG9zZS9ibG9iL21hc3Rlci9zcmMvcGFja2FnZXMvcmVjb21wb3NlL3V0aWxzL29taXQuanNcbnZhciBvbWl0ID0gZnVuY3Rpb24gb21pdChvYmosIGtleXMpIHtcbiAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBbXSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKGtleSBpbiByZXN0KSB7XG4gICAgICBkZWxldGUgcmVzdFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9taXQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkUGFzc2l2ZUV2ZW50TGlzdGVuZXI7XG4vLyBmZWF0dXJlIGRldGVjdGlvbiBmb3IgcGFzc2l2ZSBzdXBwb3J0XG4vLyBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudFRhcmdldC9hZGRFdmVudExpc3RlbmVyI1NhZmVseV9kZXRlY3Rpbmdfb3B0aW9uX3N1cHBvcnRcbmZ1bmN0aW9uIGhhc1Bhc3NpdmVTdXBwb3J0KCkge1xuICB2YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgdmFyIG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZDtcbn1cblxuZnVuY3Rpb24gYWRkUGFzc2l2ZUV2ZW50TGlzdGVuZXIoZWxlbWVudCwgZXZlbnROYW1lLCBmdW5jLCBjYXB0dXJlKSB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmMsIGhhc1Bhc3NpdmVTdXBwb3J0KCkgPyB7XG4gICAgY2FwdHVyZTogY2FwdHVyZSxcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0gOiBjYXB0dXJlKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBpY2s7XG4vLyBzb3VyY2UgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVkdXgvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL3BpY2suanNcblxuZnVuY3Rpb24gcGljayhvYmosIGZuKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBrZXkpIHtcbiAgICBpZiAoZm4ob2JqW2tleV0pKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG9ialtrZXldOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJhZjtcbmZ1bmN0aW9uIHJhZihjYWxsYmFjaykge1xuICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHZhciBuYXRpdmVSYWYgPSB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbiAgcmV0dXJuIG5hdGl2ZVJhZiA/IG5hdGl2ZVJhZihjYWxsYmFjaykgOiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMWUzIC8gNjApO1xufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBzaGFsbG93RXF1YWxcbiAqIEB0eXBlY2hlY2tzXG4gKiBcbiAqL1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgaWYgKHggPT09IHkpIHtcbiAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgIC8vIEFkZGVkIHRoZSBub256ZXJvIHkgY2hlY2sgdG8gbWFrZSBGbG93IGhhcHB5LCBidXQgaXQgaXMgcmVkdW5kYW50XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH1cbiAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGVxdWFsaXR5IGJ5IGl0ZXJhdGluZyB0aHJvdWdoIGtleXMgb24gYW4gb2JqZWN0IGFuZCByZXR1cm5pbmcgZmFsc2VcbiAqIHdoZW4gYW55IGtleSBoYXMgdmFsdWVzIHdoaWNoIGFyZSBub3Qgc3RyaWN0bHkgZXF1YWwgYmV0d2VlbiB0aGUgYXJndW1lbnRzLlxuICogUmV0dXJucyB0cnVlIHdoZW4gdGhlIHZhbHVlcyBvZiBhbGwga2V5cyBhcmUgc3RyaWN0bHkgZXF1YWwuXG4gKi9cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCh0eXBlb2Ygb2JqQSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqQSkpICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8ICh0eXBlb2Ygb2JqQiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqQikpICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hhbGxvd0VxdWFsO1xuLyogc3JjOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL21hc3Rlci9wYWNrYWdlcy9mYmpzL3NyYy9jb3JlL3NoYWxsb3dFcXVhbC5qcyAqLyIsIi8qIVxuICAqICRzY3JpcHQuanMgSlMgbG9hZGVyICYgZGVwZW5kZW5jeSBtYW5hZ2VyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2RlZC9zY3JpcHQuanNcbiAgKiAoYykgRHVzdGluIERpYXogMjAxNCB8IExpY2Vuc2UgTUlUXG4gICovXG5cbihmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIHRoaXNbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0pKCckc2NyaXB0JywgZnVuY3Rpb24gKCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnRcbiAgICAsIGhlYWQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICAgICwgcyA9ICdzdHJpbmcnXG4gICAgLCBmID0gZmFsc2VcbiAgICAsIHB1c2ggPSAncHVzaCdcbiAgICAsIHJlYWR5U3RhdGUgPSAncmVhZHlTdGF0ZSdcbiAgICAsIG9ucmVhZHlzdGF0ZWNoYW5nZSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICAgLCBsaXN0ID0ge31cbiAgICAsIGlkcyA9IHt9XG4gICAgLCBkZWxheSA9IHt9XG4gICAgLCBzY3JpcHRzID0ge31cbiAgICAsIHNjcmlwdHBhdGhcbiAgICAsIHVybEFyZ3NcblxuICBmdW5jdGlvbiBldmVyeShhciwgZm4pIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGFyLmxlbmd0aDsgaSA8IGo7ICsraSkgaWYgKCFmbihhcltpXSkpIHJldHVybiBmXG4gICAgcmV0dXJuIDFcbiAgfVxuICBmdW5jdGlvbiBlYWNoKGFyLCBmbikge1xuICAgIGV2ZXJ5KGFyLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGZuKGVsKVxuICAgICAgcmV0dXJuIDFcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gJHNjcmlwdChwYXRocywgaWRPckRvbmUsIG9wdERvbmUpIHtcbiAgICBwYXRocyA9IHBhdGhzW3B1c2hdID8gcGF0aHMgOiBbcGF0aHNdXG4gICAgdmFyIGlkT3JEb25lSXNEb25lID0gaWRPckRvbmUgJiYgaWRPckRvbmUuY2FsbFxuICAgICAgLCBkb25lID0gaWRPckRvbmVJc0RvbmUgPyBpZE9yRG9uZSA6IG9wdERvbmVcbiAgICAgICwgaWQgPSBpZE9yRG9uZUlzRG9uZSA/IHBhdGhzLmpvaW4oJycpIDogaWRPckRvbmVcbiAgICAgICwgcXVldWUgPSBwYXRocy5sZW5ndGhcbiAgICBmdW5jdGlvbiBsb29wRm4oaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uY2FsbCA/IGl0ZW0oKSA6IGxpc3RbaXRlbV1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBpZiAoIS0tcXVldWUpIHtcbiAgICAgICAgbGlzdFtpZF0gPSAxXG4gICAgICAgIGRvbmUgJiYgZG9uZSgpXG4gICAgICAgIGZvciAodmFyIGRzZXQgaW4gZGVsYXkpIHtcbiAgICAgICAgICBldmVyeShkc2V0LnNwbGl0KCd8JyksIGxvb3BGbikgJiYgIWVhY2goZGVsYXlbZHNldF0sIGxvb3BGbikgJiYgKGRlbGF5W2RzZXRdID0gW10pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBlYWNoKHBhdGhzLCBmdW5jdGlvbiBsb2FkaW5nKHBhdGgsIGZvcmNlKSB7XG4gICAgICAgIGlmIChwYXRoID09PSBudWxsKSByZXR1cm4gY2FsbGJhY2soKVxuICAgICAgICBcbiAgICAgICAgaWYgKCFmb3JjZSAmJiAhL15odHRwcz86XFwvXFwvLy50ZXN0KHBhdGgpICYmIHNjcmlwdHBhdGgpIHtcbiAgICAgICAgICBwYXRoID0gKHBhdGguaW5kZXhPZignLmpzJykgPT09IC0xKSA/IHNjcmlwdHBhdGggKyBwYXRoICsgJy5qcycgOiBzY3JpcHRwYXRoICsgcGF0aDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHNjcmlwdHNbcGF0aF0pIHtcbiAgICAgICAgICBpZiAoaWQpIGlkc1tpZF0gPSAxXG4gICAgICAgICAgcmV0dXJuIChzY3JpcHRzW3BhdGhdID09IDIpID8gY2FsbGJhY2soKSA6IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBsb2FkaW5nKHBhdGgsIHRydWUpIH0sIDApXG4gICAgICAgIH1cblxuICAgICAgICBzY3JpcHRzW3BhdGhdID0gMVxuICAgICAgICBpZiAoaWQpIGlkc1tpZF0gPSAxXG4gICAgICAgIGNyZWF0ZShwYXRoLCBjYWxsYmFjaylcbiAgICAgIH0pXG4gICAgfSwgMClcbiAgICByZXR1cm4gJHNjcmlwdFxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlKHBhdGgsIGZuKSB7XG4gICAgdmFyIGVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpLCBsb2FkZWRcbiAgICBlbC5vbmxvYWQgPSBlbC5vbmVycm9yID0gZWxbb25yZWFkeXN0YXRlY2hhbmdlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgoZWxbcmVhZHlTdGF0ZV0gJiYgISgvXmN8bG9hZGUvLnRlc3QoZWxbcmVhZHlTdGF0ZV0pKSkgfHwgbG9hZGVkKSByZXR1cm47XG4gICAgICBlbC5vbmxvYWQgPSBlbFtvbnJlYWR5c3RhdGVjaGFuZ2VdID0gbnVsbFxuICAgICAgbG9hZGVkID0gMVxuICAgICAgc2NyaXB0c1twYXRoXSA9IDJcbiAgICAgIGZuKClcbiAgICB9XG4gICAgZWwuYXN5bmMgPSAxXG4gICAgZWwuc3JjID0gdXJsQXJncyA/IHBhdGggKyAocGF0aC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHVybEFyZ3MgOiBwYXRoO1xuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKGVsLCBoZWFkLmxhc3RDaGlsZClcbiAgfVxuXG4gICRzY3JpcHQuZ2V0ID0gY3JlYXRlXG5cbiAgJHNjcmlwdC5vcmRlciA9IGZ1bmN0aW9uIChzY3JpcHRzLCBpZCwgZG9uZSkge1xuICAgIChmdW5jdGlvbiBjYWxsYmFjayhzKSB7XG4gICAgICBzID0gc2NyaXB0cy5zaGlmdCgpXG4gICAgICAhc2NyaXB0cy5sZW5ndGggPyAkc2NyaXB0KHMsIGlkLCBkb25lKSA6ICRzY3JpcHQocywgY2FsbGJhY2spXG4gICAgfSgpKVxuICB9XG5cbiAgJHNjcmlwdC5wYXRoID0gZnVuY3Rpb24gKHApIHtcbiAgICBzY3JpcHRwYXRoID0gcFxuICB9XG4gICRzY3JpcHQudXJsQXJncyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB1cmxBcmdzID0gc3RyO1xuICB9XG4gICRzY3JpcHQucmVhZHkgPSBmdW5jdGlvbiAoZGVwcywgcmVhZHksIHJlcSkge1xuICAgIGRlcHMgPSBkZXBzW3B1c2hdID8gZGVwcyA6IFtkZXBzXVxuICAgIHZhciBtaXNzaW5nID0gW107XG4gICAgIWVhY2goZGVwcywgZnVuY3Rpb24gKGRlcCkge1xuICAgICAgbGlzdFtkZXBdIHx8IG1pc3NpbmdbcHVzaF0oZGVwKTtcbiAgICB9KSAmJiBldmVyeShkZXBzLCBmdW5jdGlvbiAoZGVwKSB7cmV0dXJuIGxpc3RbZGVwXX0pID9cbiAgICAgIHJlYWR5KCkgOiAhZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVsYXlba2V5XSA9IGRlbGF5W2tleV0gfHwgW11cbiAgICAgIGRlbGF5W2tleV1bcHVzaF0ocmVhZHkpXG4gICAgICByZXEgJiYgcmVxKG1pc3NpbmcpXG4gICAgfShkZXBzLmpvaW4oJ3wnKSlcbiAgICByZXR1cm4gJHNjcmlwdFxuICB9XG5cbiAgJHNjcmlwdC5kb25lID0gZnVuY3Rpb24gKGlkT3JEb25lKSB7XG4gICAgJHNjcmlwdChbbnVsbF0sIGlkT3JEb25lKVxuICB9XG5cbiAgcmV0dXJuICRzY3JpcHRcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==