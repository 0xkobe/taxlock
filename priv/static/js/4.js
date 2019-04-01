(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/availity-reactstrap-validation/lib/AvBaseInput.js":
/*!************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvBaseInput.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js");

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _get = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var htmlValidationAttrs = ['min', 'max', 'minLength', 'maxLength', 'pattern', 'required', 'step'];

var htmlValidationTypes = ['email', 'date', 'datetime', 'number', 'tel', 'url'];

var AvBaseInput = function (_Component) {
  (0, _inherits3.default)(AvBaseInput, _Component);

  function AvBaseInput(props) {
    (0, _classCallCheck3.default)(this, AvBaseInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = { value: _this.props.multiple ? [] : '' };
    _this.validations = {};
    _this.value = '';
    _this.onKeyUpHandler = _this.onKeyUpHandler.bind(_this);
    _this.onInputHandler = _this.onInputHandler.bind(_this);
    _this.onBlurHandler = _this.onBlurHandler.bind(_this);
    _this.onFocusHandler = _this.onFocusHandler.bind(_this);
    _this.onChangeHandler = _this.onChangeHandler.bind(_this);
    _this.validate = _this.validate.bind(_this);
    return _this;
  }

  AvBaseInput.prototype.componentWillMount = function componentWillMount() {
    this.value = this.props.value || this.getDefaultValue();
    this.setState({ value: this.value });
    this.updateValidations();
  };

  AvBaseInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name) {
      this.context.FormCtrl.unregister(this);
    }
    if (nextProps.type === 'checkbox') {
      if (nextProps.checked !== this.props.checked) {
        if (nextProps.checked) {
          this.value = nextProps.trueValue;
        } else {
          this.value = nextProps.falseValue;
        }
        this.setState({ value: this.value });
      }
    } else {
      if (nextProps.multiple !== this.props.multiple) {
        this.value = nextProps.multiple ? [] : '';
        this.setState({ value: this.value });
      }
      if (nextProps.value !== this.props.value) {
        this.value = nextProps.value;
        this.setState({ value: nextProps.value });
      }
    }

    if (!(0, _isEqual2.default)(nextProps, this.props)) {
      this.updateValidations(nextProps);
    }
  };

  AvBaseInput.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.context.FormCtrl.register(this);
    }
  };

  AvBaseInput.prototype.componentWillUnmount = function componentWillUnmount() {
    this.context.FormCtrl.unregister(this);
  };

  AvBaseInput.prototype.onKeyUpHandler = function onKeyUpHandler(event) {
    var badInput = (0, _get2.default)(event, 'target.validity.badInput', false);
    if (badInput !== this.context.FormCtrl.isBad(this.props.name)) {
      this.context.FormCtrl.setBad(this.props.name, badInput);
      this.validate();
    }
    this.props.onKeyUp && this.props.onKeyUp(event);
  };

  AvBaseInput.prototype.onInputHandler = function onInputHandler(_value) {
    this.value = this.getFieldValue(_value);
    this.validateEvent('onInput', _value);
    !this.context.FormCtrl.isDirty(this.props.name) && this.context.FormCtrl.setDirty(this.props.name);
  };

  AvBaseInput.prototype.onBlurHandler = function onBlurHandler(_value) {
    this.value = this.getFieldValue(_value);
    this.validateEvent('onBlur', _value);
    !this.context.FormCtrl.isTouched(this.props.name) && this.context.FormCtrl.setTouched(this.props.name);
  };

  AvBaseInput.prototype.onFocusHandler = function onFocusHandler(_value) {
    this.value = this.getFieldValue(_value);
    this.validateEvent('onFocus', _value);
  };

  AvBaseInput.prototype.onChangeHandler = function onChangeHandler(_value) {
    this.value = this.getFieldValue(_value);
    this.validateEvent('onChange', _value);
    !this.context.FormCtrl.isDirty(this.props.name) && this.context.FormCtrl.setDirty(this.props.name);
  };

  AvBaseInput.prototype.getDefaultValue = function getDefaultValue() {
    var defaultValue = '';

    if (this.props.type === 'checkbox') {
      if (!(0, _isUndefined2.default)(this.props.defaultChecked)) {
        return this.props.defaultChecked ? this.props.trueValue : this.props.falseValue;
      }
      defaultValue = this.props.falseValue;
    }

    if (this.props.type === 'select' && this.props.multiple) {
      defaultValue = [];
    }

    var value = this.props.defaultValue || this.context.FormCtrl.getDefaultValue(this.props.name);

    if (this.props.type === 'checkbox' && value !== this.props.trueValue) {
      value = defaultValue;
    }

    return (0, _isUndefined2.default)(value) ? defaultValue : value;
  };

  AvBaseInput.prototype.getFieldValue = function getFieldValue(event) {
    if (this.props.type === 'checkbox') {
      return event.target.checked ? this.props.trueValue : this.props.falseValue;
    }

    if (this.props.type === 'select' && this.props.multiple) {
      /* // Something about this does not work when transpiled
      return [...event.target.options]
        .filter(({ selected }) => selected)
        .map(({ value }) => value); */
      var ret = [];
      var options = event.target.options;
      for (var i = 0; i < options.length; i++) {
        if (options[i].selected) {
          ret.push(options[i].value);
        }
      }
      return ret;
    }
    return event && event.target && !(0, _isUndefined2.default)(event.target.value) ? event.target.value : event;
  };

  AvBaseInput.prototype.getValidationEvent = function getValidationEvent() {
    var validationEvent = this.props.validationEvent ? this.props.validationEvent : this.context.FormCtrl.getValidationEvent();
    return Array.isArray(validationEvent) ? validationEvent : [validationEvent];
  };

  AvBaseInput.prototype.getValidatorProps = function getValidatorProps() {
    var _this2 = this;

    var validatity = this.context.FormCtrl.getInputState(this.props.name);
    var htmlValAttrs = (0, _keys2.default)(this.props.validate || {}).filter(function (val) {
      return htmlValidationAttrs.indexOf(val) > -1;
    }).reduce(function (result, item) {
      result[item] = _this2.props.validate[item].value || _this2.props.validate[item];
      return result;
    }, {});

    var newProps = (0, _extends3.default)({
      onKeyUp: this.onKeyUpHandler,
      onBlur: this.onBlurHandler,
      onInput: this.onInputHandler,
      onFocus: this.onFocusHandler,
      onChange: this.onChangeHandler,
      value: this.value
    }, htmlValAttrs);

    if (this.props.disabled === undefined && this.context.FormCtrl.isDisabled() !== undefined) {
      newProps.disabled = this.context.FormCtrl.isDisabled();
    }

    if (this.props.readOnly === undefined && this.context.FormCtrl.isReadOnly() !== undefined) {
      newProps.readOnly = this.context.FormCtrl.isReadOnly();
    }

    if (this.props.type === 'checkbox') {
      newProps.checked = this.value === this.props.trueValue;
    }

    if (this.props.state || validatity && validatity.errorMessage) {
      newProps.valid = !(validatity && validatity.errorMessage);
    }

    return newProps;
  };

  AvBaseInput.prototype.getValue = function getValue() {
    return this.value;
  };

  AvBaseInput.prototype.reset = function reset() {
    this.value = this.getDefaultValue();
    this.context.FormCtrl.setDirty(this.props.name, false);
    this.context.FormCtrl.setTouched(this.props.name, false);
    this.context.FormCtrl.setBad(this.props.name, false);
    this.setState({ value: this.value });
    this.validate();
    this.props.onReset && this.props.onReset(this.value);
  };

  AvBaseInput.prototype.validateEvent = function validateEvent(eventName, _event) {
    this.setState({ value: this.value });
    if (this.getValidationEvent().indexOf(eventName) > -1) {
      this.validate();
    }
    this.props[eventName] && this.props[eventName](_event, this.value);
  };

  AvBaseInput.prototype.validate = function validate() {
    this.context.FormCtrl.validate(this.props.name);
  };

  AvBaseInput.prototype.updateValidations = function updateValidations() {
    var _this3 = this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    this.validations = (0, _assign2.default)({}, props.validate);

    if (htmlValidationTypes.indexOf(props.type) > -1) {
      this.validations[props.type] = this.validations[props.type] || true;
    }

    (0, _keys2.default)(props).filter(function (val) {
      return htmlValidationAttrs.indexOf(val) > -1;
    }).forEach(function (attr) {
      if (props[attr]) {
        _this3.validations[attr] = _this3.validations[attr] || {
          value: props[attr]
        };
      } else {
        delete _this3.validations[attr];
      }
    });

    this.context.FormCtrl && this.context.FormCtrl.register(this);
    this.validate();
  };

  return AvBaseInput;
}(_react.Component);

AvBaseInput.propTypes = {
  name: _propTypes2.default.string.isRequired,
  validationEvent: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['', 'onInput', 'onChange', 'onBlur', 'onFocus']), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['onInput', 'onChange', 'onBlur', 'onFocus']))]),
  validate: _propTypes2.default.object,
  value: _propTypes2.default.any,
  defaultValue: _propTypes2.default.any,
  trueValue: _propTypes2.default.any,
  falseValue: _propTypes2.default.any,
  checked: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  state: _propTypes2.default.bool,
  type: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  onKeyUp: _propTypes2.default.func,
  onInput: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onReset: _propTypes2.default.func
};
AvBaseInput.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
AvBaseInput.defaultProps = {
  validationEvent: '',
  validate: {},
  trueValue: true,
  falseValue: false
};
exports.default = AvBaseInput;

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvCheckbox.js":
/*!***********************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvCheckbox.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactstrap = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _AvInput = __webpack_require__(/*! ./AvInput */ "./node_modules/availity-reactstrap-validation/lib/AvInput.js");

var _AvInput2 = _interopRequireDefault(_AvInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkPropTypes = (0, _assign2.default)({}, _AvInput2.default.propTypes, { customInput: _propTypes2.default.bool });
delete checkPropTypes.name;

var AvCheckbox = function (_Component) {
  (0, _inherits3.default)(AvCheckbox, _Component);

  function AvCheckbox() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AvCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AvCheckbox.prototype.componentDidMount = function componentDidMount() {
    this.context.FormCtrl && this.context.FormCtrl.register(this);
  };

  AvCheckbox.prototype.componentWillUnmount = function componentWillUnmount() {
    this.context.FormCtrl && this.context.FormCtrl.unregister(this);
  };

  AvCheckbox.prototype.isDefaultChecked = function isDefaultChecked(valueArr) {
    var _this2 = this;

    return Array.isArray(valueArr) && valueArr.length > 0 && valueArr.filter(function (item) {
      return item === _this2.props.value;
    });
  };

  AvCheckbox.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        id = _props.id,
        customInput = _props.customInput,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['className', 'id', 'customInput']);


    var groupProps = this.context.Group.getProps();

    var touched = this.context.FormCtrl.isTouched(groupProps.name);
    var hasError = this.context.FormCtrl.hasError(groupProps.name);

    var classes = (0, _classnames2.default)(className, touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(groupProps.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(groupProps.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid');

    if (this.props.disabled === undefined && this.context.FormCtrl.isDisabled() !== undefined) {
      attributes.disabled = this.context.FormCtrl.isDisabled();
    }

    if (this.props.readOnly === undefined && this.context.FormCtrl.isReadOnly() !== undefined) {
      attributes.disabled = attributes.disabled || this.context.FormCtrl.isReadOnly();
    }

    if (customInput) {
      return _react2.default.createElement(_reactstrap.CustomInput, (0, _extends3.default)({
        name: groupProps.name,
        type: 'checkbox'
      }, attributes, {
        inline: groupProps.inline,
        id: id || 'checkbox-' + groupProps.name + '-' + this.props.value,
        className: classes,
        onChange: this.onChangeHandler,
        value: this.props.value && this.props.value.toString(),
        defaultChecked: this.isDefaultChecked(groupProps.value),
        required: groupProps.required,
        label: this.props.label
      }));
    }

    return _react2.default.createElement(
      _reactstrap.FormGroup,
      { check: true, inline: groupProps.inline, disabled: attributes.disabled || attributes.readOnly },
      _react2.default.createElement(_reactstrap.Input, (0, _extends3.default)({
        name: groupProps.name,
        type: 'checkbox'
      }, attributes, {
        id: id || 'checkbox-' + groupProps.name + '-' + this.props.value,
        className: classes,
        onChange: this.onChangeHandler,
        value: this.props.value && this.props.value.toString(),
        defaultChecked: this.isDefaultChecked(groupProps.value),
        required: groupProps.required
      })),
      _react2.default.createElement(
        _reactstrap.Label,
        { check: true, 'for': id || 'checkbox-' + groupProps.name + '-' + this.props.value },
        this.props.label
      )
    );
  };

  return AvCheckbox;
}(_react.Component);

AvCheckbox.contextTypes = (0, _assign2.default)({}, _AvInput2.default.contextTypes, {
  Group: _propTypes2.default.object.isRequired
});
AvCheckbox.propTypes = checkPropTypes;

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onChangeHandler = function (event) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    _this3.context.Group.update(event, _this3.props.value);
    if (_this3.props.onChange) {
      var _props2;

      (_props2 = _this3.props).onChange.apply(_props2, [event].concat(args));
    }
  };
};

exports.default = AvCheckbox;

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvCheckboxGroup.js":
/*!****************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvCheckboxGroup.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js");

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _reactstrap = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _AvFeedback = __webpack_require__(/*! ./AvFeedback */ "./node_modules/availity-reactstrap-validation/lib/AvFeedback.js");

var _AvFeedback2 = _interopRequireDefault(_AvFeedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var htmlValidationAttrs = ['required'];

var noop = function noop() {};

var AvCheckboxGroup = function (_Component) {
  (0, _inherits3.default)(AvCheckboxGroup, _Component);

  function AvCheckboxGroup() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AvCheckboxGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      invalidInputs: {},
      dirtyInputs: {},
      touchedInputs: {},
      badInputs: {},
      validate: {},
      value: []
    }, _this._inputs = [], _this.value = [], _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AvCheckboxGroup.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    if (!this.FormCtrl) {
      this.FormCtrl = (0, _extends3.default)({}, this.context.FormCtrl);
      this.FormCtrl.register = this.registerInput.bind(this);
      this.FormCtrl.unregister = this.unregisterInput.bind(this);
      this.FormCtrl.validate = noop;
    }

    var updateGroup = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e, value) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e.target.checked) {
                  _this2.value.push(value);
                } else {
                  _this2.value = _this2.value.filter(function (item) {
                    return item !== value;
                  });
                }

                _this2.setState({ value: _this2.value });

                _context.next = 4;
                return _this2.validate();

              case 4:
                !_this2.context.FormCtrl.isTouched(_this2.props.name) && _this2.context.FormCtrl.setTouched(_this2.props.name);
                !_this2.context.FormCtrl.isDirty(_this2.props.name) && _this2.context.FormCtrl.setDirty(_this2.props.name);
                _this2.props.onChange && _this2.props.onChange(e, value);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function updateGroup(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    return {
      Group: {
        getProps: function getProps() {
          return {
            name: _this2.props.name,
            inline: _this2.props.inline,
            required: _this2.props.required || !!(_this2.validations.required && _this2.validations.required.value),
            value: _this2.value
          };
        },
        update: updateGroup,
        getValue: function getValue() {
          return _this2.value;
        },
        getInputState: this.getInputState.bind(this)
      },
      FormCtrl: this.FormCtrl
    };
  };

  AvCheckboxGroup.prototype.componentWillMount = function componentWillMount() {
    this.value = this.props.value || this.getDefaultValue().value;
    this.setState({ value: this.value });
    this.updateValidations();
  };

  AvCheckboxGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name) {
      this.context.FormCtrl.unregister(this);
    }
    if (nextProps.value !== this.props.value) {
      this.value = nextProps.value;
      this.setState({ value: nextProps.value });
    }
    if (!(0, _isEqual2.default)(nextProps, this.props)) {
      this.updateValidations(nextProps);
    }
  };

  AvCheckboxGroup.prototype.componentWillUnmount = function componentWillUnmount() {
    this.context.FormCtrl.unregister(this);
  };

  AvCheckboxGroup.prototype.getValue = function getValue() {
    return this.value;
  };

  AvCheckboxGroup.prototype.getInputState = function getInputState() {
    return this.context.FormCtrl.getInputState(this.props.name);
  };

  AvCheckboxGroup.prototype.getDefaultValue = function getDefaultValue() {
    var key = 'defaultValue';

    var value = [];
    if (!(0, _isUndefined2.default)(this.props[key])) {
      value = this.props[key];
    } else if (!(0, _isUndefined2.default)(this.context.FormCtrl.getDefaultValue(this.props.name))) {
      value = this.context.FormCtrl.getDefaultValue(this.props.name);
    }

    return { key: key, value: value };
  };

  AvCheckboxGroup.prototype.validate = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.context.FormCtrl.validate(this.props.name);

            case 2:
              this.updateInputs();

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function validate() {
      return _ref2.apply(this, arguments);
    }

    return validate;
  }();

  AvCheckboxGroup.prototype.update = function update() {
    this.setState({});
    this.updateInputs();
  };

  AvCheckboxGroup.prototype.updateValidations = function updateValidations() {
    var _this3 = this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    this.validations = (0, _assign2.default)({}, props.validate);

    (0, _keys2.default)(props).filter(function (val) {
      return htmlValidationAttrs.indexOf(val) > -1;
    }).forEach(function (attr) {
      if (props[attr]) {
        _this3.validations[attr] = _this3.validations[attr] || {
          value: props[attr]
        };
      } else {
        delete _this3.validations[attr];
      }
    });

    this.context.FormCtrl.register(this, this.update.bind(this));
    this.validate();
  };

  AvCheckboxGroup.prototype.updateInputs = function updateInputs() {
    this._inputs.forEach(function (input) {
      return (0, _reactDom.findDOMNode)(input).firstChild.setCustomValidity('Invalid.') && input.setState.call(input, {});
    });

    this.setState({});
  };

  AvCheckboxGroup.prototype.reset = function reset() {
    this.value = this.getDefaultValue().value;
    this.context.FormCtrl.setDirty(this.props.name, false);
    this.context.FormCtrl.setTouched(this.props.name, false);
    this.context.FormCtrl.setBad(this.props.name, false);
    this.setState({ value: this.value });
    this.validate();
    this.props.onReset && this.props.onReset(this.value);
  };

  AvCheckboxGroup.prototype.registerInput = function registerInput(input) {
    if (this._inputs.indexOf(input) < 0) {
      this._inputs.push(input);
    }
  };

  AvCheckboxGroup.prototype.unregisterInput = function unregisterInput(input) {
    this._inputs = this._inputs.filter(function (ipt) {
      return ipt !== input;
    });
  };

  AvCheckboxGroup.prototype.render = function render() {
    var legend = this.props.label ? _react2.default.createElement(
      'legend',
      null,
      this.props.label
    ) : '';
    var validation = this.getInputState();
    var _props = this.props,
        omit1 = _props.errorMessage,
        omit2 = _props.validate,
        omit3 = _props.validationEvent,
        omit4 = _props.state,
        omit5 = _props.label,
        omit6 = _props.required,
        omit7 = _props.inline,
        children = _props.children,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['errorMessage', 'validate', 'validationEvent', 'state', 'label', 'required', 'inline', 'children']);


    var touched = this.context.FormCtrl.isTouched(this.props.name);
    var hasError = this.context.FormCtrl.hasError(this.props.name);

    var classes = (0, _classnames2.default)('form-control border-0 p-0 h-auto', touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(this.props.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(this.props.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid');

    var groupClass = (0, _classnames2.default)(attributes.className, touched && hasError && 'was-validated');

    return _react2.default.createElement(
      _reactstrap.FormGroup,
      (0, _extends3.default)({ tag: 'fieldset' }, attributes, { className: groupClass }),
      legend,
      _react2.default.createElement(
        'div',
        { className: classes },
        children
      ),
      _react2.default.createElement(
        _AvFeedback2.default,
        null,
        validation.errorMessage
      )
    );
  };

  return AvCheckboxGroup;
}(_react.Component);

AvCheckboxGroup.propTypes = (0, _assign2.default)({}, _reactstrap.FormGroup.propTypes, {
  name: _propTypes2.default.string.isRequired
});
AvCheckboxGroup.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
AvCheckboxGroup.childContextTypes = {
  Group: _propTypes2.default.object.isRequired,
  FormCtrl: _propTypes2.default.object.isRequired
};
exports.default = AvCheckboxGroup;

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvFeedback.js":
/*!***********************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvFeedback.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvFeedback = function (_Component) {
  (0, _inherits3.default)(AvFeedback, _Component);

  function AvFeedback() {
    (0, _classCallCheck3.default)(this, AvFeedback);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  AvFeedback.prototype.render = function render() {
    var validation = this.context.Group.getInputState();
    return _react2.default.createElement(_reactstrap.FormFeedback, (0, _extends3.default)({ valid: !validation.error }, this.props));
  };

  return AvFeedback;
}(_react.Component);

AvFeedback.propTypes = (0, _assign2.default)({}, _reactstrap.FormFeedback.propTypes);
AvFeedback.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired,
  Group: _propTypes2.default.object.isRequired
};
exports.default = AvFeedback;

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvField.js":
/*!********************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvField.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AvInput = __webpack_require__(/*! ./AvInput */ "./node_modules/availity-reactstrap-validation/lib/AvInput.js");

var _AvInput2 = _interopRequireDefault(_AvInput);

var _AvGroup = __webpack_require__(/*! ./AvGroup */ "./node_modules/availity-reactstrap-validation/lib/AvGroup.js");

var _AvGroup2 = _interopRequireDefault(_AvGroup);

var _AvFeedback = __webpack_require__(/*! ./AvFeedback */ "./node_modules/availity-reactstrap-validation/lib/AvFeedback.js");

var _AvFeedback2 = _interopRequireDefault(_AvFeedback);

var _reactstrap = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

var AvField = function (_Component) {
  (0, _inherits3.default)(AvField, _Component);

  function AvField() {
    (0, _classCallCheck3.default)(this, AvField);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  AvField.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    this.FormCtrl = (0, _extends3.default)({}, this.context.FormCtrl);
    var registerValidator = this.FormCtrl.register;
    this.FormCtrl.register = function (input) {
      var updater = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : input && input.setState && input.setState.bind(input);

      registerValidator(input, function () {
        _this2.setState({});
        if (updater) updater({});
      });
    };
    return {
      FormCtrl: this.FormCtrl
    };
  };

  AvField.prototype.render = function render() {
    var row = false;
    var col = {};
    var labelCol = {};
    var _props = this.props,
        helpMessage = _props.helpMessage,
        label = _props.label,
        labelHidden = _props.labelHidden,
        inputClass = _props.inputClass,
        labelClass = _props.labelClass,
        children = _props.children,
        _props$id = _props.id,
        id = _props$id === undefined ? this.props.name : _props$id,
        size = _props.size,
        disabled = _props.disabled,
        readOnly = _props.readOnly,
        grid = _props.grid,
        labelAttrs = _props.labelAttrs,
        groupAttrs = _props.groupAttrs,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['helpMessage', 'label', 'labelHidden', 'inputClass', 'labelClass', 'children', 'id', 'size', 'disabled', 'readOnly', 'grid', 'labelAttrs', 'groupAttrs']);


    if (grid) {
      colSizes.forEach(function (colSize) {
        if (grid[colSize]) {
          row = true;
          var sizeNum = parseInt(grid[colSize], 10);
          col[colSize] = sizeNum;
          labelCol[colSize] = 12 - sizeNum;
        }
      });
    }

    var input = _react2.default.createElement(
      _AvInput2.default,
      (0, _extends3.default)({
        id: id,
        className: inputClass,
        size: size,
        disabled: disabled,
        readOnly: readOnly
      }, attributes),
      children
    );

    var validation = this.context.FormCtrl.getInputState(this.props.name);

    var feedback = validation.errorMessage ? _react2.default.createElement(
      _AvFeedback2.default,
      null,
      validation.errorMessage
    ) : null;
    var help = helpMessage ? _react2.default.createElement(
      _reactstrap.FormText,
      null,
      helpMessage
    ) : null;
    var inputRow = row ? _react2.default.createElement(
      _reactstrap.Col,
      col,
      input,
      feedback,
      help
    ) : input;
    var check = attributes.type === 'checkbox';

    if ((check || attributes.type === "radio" || attributes.type === "switch") && (attributes.tag === _reactstrap.CustomInput || Array.isArray(attributes.tag) && attributes.tag[0] === _reactstrap.CustomInput)) {
      return _react2.default.createElement(
        _AvGroup2.default,
        { className: 'mb-0' },
        _react2.default.createElement(
          _AvInput2.default,
          this.props,
          feedback,
          help
        )
      );
    }

    return _react2.default.createElement(
      _AvGroup2.default,
      (0, _extends3.default)({ check: check, disabled: disabled, row: row }, groupAttrs),
      check && inputRow,
      label && _react2.default.createElement(
        _reactstrap.Label,
        (0, _extends3.default)({
          'for': id,
          className: labelClass,
          hidden: labelHidden,
          size: size
        }, labelCol, labelAttrs),
        label
      ),
      !check && inputRow,
      !row && feedback,
      !row && help
    );
  };

  return AvField;
}(_react.Component);

AvField.propTypes = (0, _assign2.default)({}, _AvInput2.default.propTypes, {
  label: _propTypes2.default.node,
  labelHidden: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  inputClass: _propTypes2.default.string,
  labelClass: _propTypes2.default.string,
  helpMessage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  errorMessage: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  labelAttrs: _propTypes2.default.object,
  groupAttrs: _propTypes2.default.object,
  grid: _propTypes2.default.object
});
AvField.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
AvField.childContextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
exports.default = AvField;

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvForm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvForm.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AvInputContainer = __webpack_require__(/*! ./AvInputContainer */ "./node_modules/availity-reactstrap-validation/lib/AvInputContainer.js");

var _AvInputContainer2 = _interopRequireDefault(_AvInputContainer);

var _AvValidator = __webpack_require__(/*! ./AvValidator */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/index.js");

var _AvValidator2 = _interopRequireDefault(_AvValidator);

var _reactstrap = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _get2 = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _set2 = __webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js");

var _set3 = _interopRequireDefault(_set2);

var _throttle2 = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");

var _throttle3 = _interopRequireDefault(_throttle2);

var _isString = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getInputErrorMessage = function getInputErrorMessage(input, ruleName) {
  var errorMessage = input && input.props && input.props.errorMessage;

  if ((typeof errorMessage === 'undefined' ? 'undefined' : (0, _typeof3.default)(errorMessage)) === 'object') {
    return errorMessage[ruleName];
  }
  return errorMessage;
};

var AvForm = function (_InputContainer) {
  (0, _inherits3.default)(AvForm, _InputContainer);

  function AvForm() {
    var _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AvForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _InputContainer.call.apply(_InputContainer, [this].concat(args))), _this), _this.state = {
      invalidInputs: {},
      dirtyInputs: {},
      touchedInputs: {},
      badInputs: {},
      submitted: false
    }, _this.validations = {}, _this.handleSubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var values, _ref2, isValid, errors;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.props.beforeSubmitValidation) {
                  _this.props.beforeSubmitValidation(e);
                }

                if (e && typeof e.preventDefault === 'function') {
                  e.preventDefault();
                }

                if (!_this.props.disabled) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt('return');

              case 4:
                values = _this.getValues();
                _context.next = 7;
                return _this.validateAll(values, false);

              case 7:
                _ref2 = _context.sent;
                isValid = _ref2.isValid;
                errors = _ref2.errors;


                _this.setTouched((0, _keys2.default)(_this._inputs), true, false);

                _this.updateInputs();

                _this.props.onSubmit(e, errors, values);
                if (isValid) {
                  _this.props.onValidSubmit(e, values);
                } else {
                  _this.props.onInvalidSubmit(e, errors, values);
                }

                !_this.state.submitted && _this.setState({ submitted: true });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), _this.handleNonFormSubmission = function (event) {
      if (_this.props.onKeyDown(event) !== false) {
        if (event.type === 'keydown' && (event.which === 13 || event.keyCode === 13 || event.key === 'Enter')) {
          event.stopPropagation();
          event.preventDefault();
          _this.handleSubmit(event);
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AvForm.prototype.getChildContext = function getChildContext() {
    var _this3 = this;

    return {
      FormCtrl: {
        getDefaultValue: this.getDefaultValue.bind(this),
        getInputState: this.getInputState.bind(this),
        getInput: function getInput(name) {
          return _this3._inputs[name];
        },
        getInputValue: this.getValue.bind(this),
        getValues: this.getValues.bind(this),
        hasError: this.hasError.bind(this),
        isDirty: this.isDirty.bind(this),
        isTouched: this.isTouched.bind(this),
        isBad: this.isBad.bind(this),
        isDisabled: function isDisabled() {
          return _this3.props.disabled;
        },
        isReadOnly: function isReadOnly() {
          return _this3.props.readOnly;
        },
        setDirty: this.setDirty.bind(this),
        setTouched: this.setTouched.bind(this),
        setBad: this.setBad.bind(this),
        register: this.registerInput.bind(this),
        unregister: this.unregisterInput.bind(this),
        validate: this.validateInput.bind(this),
        getValidationEvent: function getValidationEvent() {
          return _this3.props.validationEvent;
        },
        parent: this.context.FormCtrl || null
      }
    };
  };

  AvForm.prototype.componentWillMount = function componentWillMount() {
    _InputContainer.prototype.componentWillMount.call(this);

    this._validators = {};
  };

  AvForm.prototype.registerInput = function registerInput(input, updater) {
    _InputContainer.prototype.registerInput.call(this, input, updater);

    if ((0, _typeof3.default)(input.validations) === 'object') {
      this._validators[input.props.name] = this.compileValidationRules(input, input.validations);
    }
  };

  AvForm.prototype.unregisterInput = function unregisterInput(input) {
    _InputContainer.prototype.unregisterInput.call(this, input);

    delete this._validators[input.props.name];
    this.setError(input.props.name, false);
    this.setDirty(input.props.name, false);
    this.setTouched(input.props.name, false);
    this.setBad(input.props.name, false);
  };

  AvForm.prototype.render = function render() {
    var _props = this.props,
        Tag = _props.tag,
        omit1 = _props.errorMessage,
        omit2 = _props.model,
        omit3 = _props.onValidSubmit,
        omit4 = _props.onInvalidSubmit,
        omit5 = _props.validate,
        omit6 = _props.validateOne,
        omit7 = _props.validateAll,
        omit8 = _props.validationEvent,
        omit9 = _props.disabled,
        omit10 = _props.readOnly,
        omit11 = _props.beforeSubmitValidation,
        className = _props.className,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['tag', 'errorMessage', 'model', 'onValidSubmit', 'onInvalidSubmit', 'validate', 'validateOne', 'validateAll', 'validationEvent', 'disabled', 'readOnly', 'beforeSubmitValidation', 'className']);


    var classes = (0, _classnames2.default)(className, this.state.submitted ? 'av-submitted' : false, (0, _keys2.default)(this.state.invalidInputs).length > 0 ? 'av-invalid' : 'av-valid');

    if (Tag !== 'form' && Tag !== _reactstrap.Form) {
      attributes.onKeyDown = this.handleNonFormSubmission;
    }

    return _react2.default.createElement(Tag, (0, _extends3.default)({ noValidate: true,
      action: '#'
    }, attributes, {
      className: classes,
      onSubmit: this.handleSubmit
    }));
  };

  AvForm.prototype.getValues = function getValues() {
    var _this4 = this;

    return (0, _keys2.default)(this._inputs).reduce(function (values, inputName) {
      (0, _set3.default)(values, inputName, _this4.getValue(inputName));

      return values;
    }, {});
  };

  AvForm.prototype.submit = function submit() {
    this.handleSubmit.apply(this, arguments);
  };

  AvForm.prototype.reset = function reset() {
    var _this5 = this;

    (0, _keys2.default)(this._inputs).forEach(function (inputName) {
      return _this5._inputs[inputName] && _this5._inputs[inputName].reset();
    });
  };

  AvForm.prototype.updateInputs = function updateInputs() {
    var _this6 = this;

    if (this.throttledUpdateInputs) {
      this.throttledUpdateInputs();
      return;
    }
    // this is just until a more intelligent way to determine which inputs need updated is implemented in v3
    this.throttledUpdateInputs = (0, _throttle3.default)(function () {
      (0, _keys2.default)(_this6._updaters).forEach(function (inputName) {
        return _this6._updaters[inputName] && _this6._inputs[inputName] && _this6._updaters[inputName].call(_this6._inputs[inputName], {});
      });
    }, 250);
    this.updateInputs();
  };

  AvForm.prototype.validateInput = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(name) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.validateOne(name, this.getValues());

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function validateInput(_x2) {
      return _ref3.apply(this, arguments);
    }

    return validateInput;
  }();

  AvForm.prototype.getInputState = function getInputState(inputName) {
    var errorMessage = void 0;
    var error = this.isTouched(inputName) && this.hasError(inputName);
    var color = void 0;

    if (error) {
      errorMessage = this.state.invalidInputs[inputName];
      color = 'danger';
      if (!(0, _isString2.default)(errorMessage)) {
        errorMessage = 'This field is invalid';
      }
    }

    return { color: color, error: error, errorMessage: errorMessage };
  };

  AvForm.prototype.hasError = function hasError(inputName) {
    return inputName ? !!this.state.invalidInputs[inputName] : (0, _keys2.default)(this.state.invalidInputs).length > 0;
  };

  AvForm.prototype.isDirty = function isDirty(inputName) {
    return inputName ? !!this.state.dirtyInputs[inputName] : (0, _keys2.default)(this.state.dirtyInputs).length > 0;
  };

  AvForm.prototype.isTouched = function isTouched(inputName) {
    return inputName ? !!this.state.touchedInputs[inputName] : (0, _keys2.default)(this.state.touchedInputs).length > 0;
  };

  AvForm.prototype.isBad = function isBad(inputName) {
    return inputName ? !!this.state.badInputs[inputName] : (0, _keys2.default)(this.state.badInputs).length > 0;
  };

  AvForm.prototype.setError = function setError(inputName) {
    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var _this7 = this;

    var errText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : error;
    var update = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    if (error && !(0, _isString2.default)(errText) && typeof errText !== 'boolean') {
      errText = errText + '';
    }
    var changed = false;
    var currentError = this.hasError(inputName);
    var invalidInputs = this.state.invalidInputs;

    if ((invalidInputs[inputName] === undefined && !error || invalidInputs[inputName] === (errText || true)) && error === currentError) return;
    if (error) {
      invalidInputs[inputName] = errText || true;
      changed = true;
    } else {
      delete invalidInputs[inputName];
      changed = true;
    }

    if (!changed) return;

    invalidInputs = (0, _extends3.default)({}, this.state.invalidInputs);
    this.setState({ invalidInputs: invalidInputs }, function () {
      if (update) _this7.updateInputs();
    });
  };

  AvForm.prototype.setDirty = function setDirty(inputs) {
    var _this8 = this;

    var dirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var dirtyInputs = this.state.dirtyInputs;
    var changed = false;
    if (!Array.isArray(inputs)) {
      inputs = [inputs];
    }
    inputs.forEach(function (inputName) {
      if (dirty && !dirtyInputs[inputName]) {
        dirtyInputs[inputName] = true;
        changed = true;
      } else if (!dirty && dirtyInputs[inputName]) {
        delete dirtyInputs[inputName];
        changed = true;
      }
    });

    if (!changed) return;

    dirtyInputs = (0, _extends3.default)({}, this.state.dirtyInputs);
    this.setState({ dirtyInputs: dirtyInputs }, function () {
      if (update) _this8.updateInputs();
    });
  };

  AvForm.prototype.setTouched = function setTouched(inputs) {
    var _this9 = this;

    var touched = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var touchedInputs = this.state.touchedInputs;
    var changed = false;
    if (!Array.isArray(inputs)) {
      inputs = [inputs];
    }
    inputs.forEach(function (inputName) {
      if (touched && !touchedInputs[inputName]) {
        touchedInputs[inputName] = true;
        changed = true;
      } else if (!touched && touchedInputs[inputName]) {
        delete touchedInputs[inputName];
        changed = true;
      }
    });

    if (!changed) return;

    touchedInputs = (0, _extends3.default)({}, this.state.touchedInputs);
    this.setState({ touchedInputs: touchedInputs }, function () {
      if (update) _this9.updateInputs();
    });
  };

  AvForm.prototype.setBad = function setBad(inputs) {
    var _this10 = this;

    var isBad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var badInputs = this.state.badInputs;
    var changed = false;
    if (!Array.isArray(inputs)) {
      inputs = [inputs];
    }
    inputs.forEach(function (inputName) {
      if (isBad && !badInputs[inputName]) {
        badInputs[inputName] = true;
        changed = true;
      } else if (!isBad && badInputs[inputName]) {
        delete badInputs[inputName];
        changed = true;
      }
    });

    if (!changed) return;

    badInputs = (0, _extends3.default)({}, this.state.badInputs);
    this.setState({ badInputs: badInputs }, function () {
      if (update) _this10.updateInputs();
    });
  };

  AvForm.prototype.validateOne = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(inputName, context) {
      var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var input, value, validate, isValid, result, error;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              input = this._inputs[inputName];

              if (!Array.isArray(input)) {
                _context3.next = 3;
                break;
              }

              throw new Error('Multiple inputs cannot use the same name: "' + inputName + '"');

            case 3:
              value = (0, _get3.default)(context, inputName);
              validate = input.validations;
              isValid = true;
              result = void 0;
              error = void 0;

              if (!(typeof validate === 'function')) {
                _context3.next = 14;
                break;
              }

              _context3.next = 11;
              return validate(value, context, input);

            case 11:
              result = _context3.sent;
              _context3.next = 21;
              break;

            case 14:
              if (!((typeof validate === 'undefined' ? 'undefined' : (0, _typeof3.default)(validate)) === 'object')) {
                _context3.next = 20;
                break;
              }

              _context3.next = 17;
              return this._validators[inputName](value, context);

            case 17:
              result = _context3.sent;
              _context3.next = 21;
              break;

            case 20:
              result = true;

            case 21:

              if (result !== true) {
                isValid = false;

                if ((0, _isString2.default)(result)) {
                  error = result;
                }
              }

              this.setError(inputName, !isValid, error, update);

              return _context3.abrupt('return', isValid);

            case 24:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function validateOne(_x12, _x13) {
      return _ref4.apply(this, arguments);
    }

    return validateOne;
  }();

  AvForm.prototype.validateAll = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(context) {
      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var errors, isValid, inputName, valid, formLevelValidation;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              errors = [];
              isValid = true;
              _context4.t0 = _regenerator2.default.keys(this._inputs);

            case 3:
              if ((_context4.t1 = _context4.t0()).done) {
                _context4.next = 12;
                break;
              }

              inputName = _context4.t1.value;

              if (!this._inputs.hasOwnProperty(inputName)) {
                _context4.next = 10;
                break;
              }

              _context4.next = 8;
              return this.validateOne(inputName, context, update);

            case 8:
              valid = _context4.sent;

              if (!valid) {
                isValid = false;
                errors.push(inputName);
              }

            case 10:
              _context4.next = 3;
              break;

            case 12:

              if (this.props.validate) {
                formLevelValidation = this.props.validate;

                if (!Array.isArray(formLevelValidation)) {
                  formLevelValidation = [formLevelValidation];
                }

                if (!formLevelValidation.every(function (validationFn) {
                  return validationFn(context);
                })) {
                  isValid = false;
                  errors.push('*');
                }
              }

              return _context4.abrupt('return', {
                isValid: isValid,
                errors: errors
              });

            case 14:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function validateAll(_x15) {
      return _ref5.apply(this, arguments);
    }

    return validateAll;
  }();

  AvForm.prototype.compileValidationRules = function compileValidationRules(input, ruleProp) {
    var _this11 = this;

    return function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(val, context) {
        var result, validations, _loop, rule;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this11.isBad(input.props.name)) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return', false);

              case 2:
                result = true;
                validations = [];

                _loop = function _loop(rule) {
                  /* istanbul ignore else  */
                  if (ruleProp.hasOwnProperty(rule)) {
                    var ruleResult = void 0;

                    var promise = new _promise2.default(function (resolve, reject) {
                      var callback = function callback(value) {
                        return resolve({ value: value, rule: rule });
                      };

                      if (typeof ruleProp[rule] === 'function') {
                        ruleResult = ruleProp[rule](val, context, input, callback);
                      } else {
                        if (typeof _AvValidator2.default[rule] !== 'function') {
                          return reject(new Error('Invalid input validation rule: "' + rule + '"'));
                        }

                        if (ruleProp[rule].enabled === false) {
                          ruleResult = true;
                        } else {
                          ruleResult = _AvValidator2.default[rule](val, context, ruleProp[rule], input, callback);
                        }
                      }

                      if (ruleResult && typeof ruleResult.then === 'function') {
                        ruleResult.then(callback);
                      } else if (ruleResult !== undefined) {
                        callback(ruleResult);
                      } else {
                        // they are using the callback
                      }
                    });

                    validations.push(promise);
                  }
                };

                for (rule in ruleProp) {
                  _loop(rule);
                }

                _context5.next = 8;
                return _promise2.default.all(validations).then(function (results) {
                  results.every(function (ruleResult) {
                    if (result === true && ruleResult.value !== true) {
                      result = (0, _isString2.default)(ruleResult.value) && ruleResult.value || getInputErrorMessage(input, ruleResult.rule) || getInputErrorMessage(_this11, ruleResult.rule) || false;
                    }
                    return result === true;
                  });
                });

              case 8:
                return _context5.abrupt('return', result);

              case 9:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this11);
      }));

      return function (_x17, _x18) {
        return _ref6.apply(this, arguments);
      };
    }();
  };

  AvForm.prototype.getDefaultValue = function getDefaultValue(inputName) {
    return (0, _get3.default)(this.props.model, inputName);
  };

  AvForm.prototype.getValue = function getValue(inputName) {
    var input = this._inputs[inputName];

    if (!input) return undefined;

    if (Array.isArray(input)) {
      throw new Error('Multiple inputs cannot use the same name: "' + inputName + '"');
    }

    return input.getValue();
  };

  return AvForm;
}(_AvInputContainer2.default);

AvForm.childContextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
AvForm.contextTypes = {
  FormCtrl: _propTypes2.default.object
};
AvForm.propTypes = {
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  className: _propTypes2.default.string,
  model: _propTypes2.default.object,
  method: _propTypes2.default.oneOf(['get', 'post']),
  onSubmit: _propTypes2.default.func,
  beforeSubmitValidation: _propTypes2.default.func,
  validate: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.array]),
  onValidSubmit: _propTypes2.default.func,
  onInvalidSubmit: _propTypes2.default.func,
  validationEvent: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['onInput', 'onChange', 'onBlur', 'onFocus']), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['onInput', 'onChange', 'onBlur', 'onFocus']))]),
  errorMessage: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string, _propTypes2.default.node]),
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool
};
AvForm.defaultProps = {
  tag: _reactstrap.Form,
  model: {},
  validationEvent: ['onChange', 'onInput'],
  method: 'get',
  onSubmit: function onSubmit() {},
  onKeyDown: function onKeyDown() {},
  onValidSubmit: function onValidSubmit() {},
  onInvalidSubmit: function onInvalidSubmit() {}
};
exports.default = AvForm;

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvGroup.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvGroup = function (_Component) {
  (0, _inherits3.default)(AvGroup, _Component);

  function AvGroup(props) {
    (0, _classCallCheck3.default)(this, AvGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = { input: { props: {} } };
    return _this;
  }

  AvGroup.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    this.FormCtrl = (0, _extends3.default)({}, this.context.FormCtrl);
    var registerValidator = this.FormCtrl.register;
    this.FormCtrl.register = function (input) {
      _this2.setState({ input: input });
      registerValidator(input, _this2.update.bind(_this2, input));
    };
    return {
      Group: {
        getInput: function getInput() {
          return _this2.state.input;
        },
        getInputState: this.getInputState.bind(this)
      },
      FormCtrl: this.FormCtrl
    };
  };

  AvGroup.prototype.getInputState = function getInputState() {
    return this.context.FormCtrl.getInputState(this.state.input.props.name);
  };

  AvGroup.prototype.update = function update(input) {
    if (input && input.setState) input.setState.call(input, {});
    this.setState({});
  };

  AvGroup.prototype.render = function render() {
    var validation = this.getInputState();
    var classname = (0, _classnames2.default)(this.props.className, validation.color && 'text-' + validation.color);
    return _react2.default.createElement(_reactstrap.FormGroup, (0, _extends3.default)({ className: classname }, this.props));
  };

  return AvGroup;
}(_react.Component);

AvGroup.propTypes = (0, _assign2.default)({}, _reactstrap.FormGroup.propTypes);
AvGroup.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
AvGroup.childContextTypes = {
  Group: _propTypes2.default.object.isRequired,
  FormCtrl: _propTypes2.default.object.isRequired
};
exports.default = AvGroup;

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvInput.js":
/*!********************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvInput.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactstrap = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _AvBaseInput2 = __webpack_require__(/*! ./AvBaseInput */ "./node_modules/availity-reactstrap-validation/lib/AvBaseInput.js");

var _AvBaseInput3 = _interopRequireDefault(_AvBaseInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvInput = function (_AvBaseInput) {
  (0, _inherits3.default)(AvInput, _AvBaseInput);

  function AvInput() {
    (0, _classCallCheck3.default)(this, AvInput);
    return (0, _possibleConstructorReturn3.default)(this, _AvBaseInput.apply(this, arguments));
  }

  AvInput.prototype.getValue = function getValue() {
    return this.props.valueParser ? this.props.valueParser(this.value) : this.value;
  };

  AvInput.prototype.getViewValue = function getViewValue() {
    return this.props.valueFormatter ? this.props.valueFormatter(this.value) : this.value;
  };

  AvInput.prototype.render = function render() {
    var _props = this.props,
        omit1 = _props.errorMessage,
        omit2 = _props.validate,
        omit3 = _props.validationEvent,
        omit4 = _props.state,
        omit5 = _props.trueValue,
        omit6 = _props.falseValue,
        omit7 = _props.valueParser,
        omit8 = _props.valueFormatter,
        className = _props.className,
        tag = _props.tag,
        getRef = _props.getRef,
        _props$id = _props.id,
        id = _props$id === undefined ? this.props.name : _props$id,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['errorMessage', 'validate', 'validationEvent', 'state', 'trueValue', 'falseValue', 'valueParser', 'valueFormatter', 'className', 'tag', 'getRef', 'id']);


    var touched = this.context.FormCtrl.isTouched(this.props.name);
    var hasError = this.context.FormCtrl.hasError(this.props.name);
    var Tag = tag;

    if (Array.isArray(tag)) {
      var tags = void 0;
      Tag = tag[0];
      tags = tag.slice(1);

      attributes.tag = tags;
      if (attributes.tag.length <= 1) {
        attributes.tag = attributes.tag[0];
      }
    }

    var classes = (0, _classnames2.default)(className, touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(this.props.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(this.props.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid', attributes.type === 'checkbox' && touched && hasError && 'was-validated');

    var value = this.getViewValue();

    return _react2.default.createElement(Tag, (0, _extends3.default)({}, attributes, {
      ref: getRef
    }, this.getValidatorProps(), {
      className: classes,
      value: value,
      id: id
    }));
  };

  return AvInput;
}(_AvBaseInput3.default);

AvInput.defaultProps = (0, _assign2.default)({}, _AvBaseInput3.default.defaultProps, {
  tag: _reactstrap.Input
});
AvInput.contextTypes = _AvBaseInput3.default.contextTypes;
exports.default = AvInput;

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvInputContainer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvInputContainer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validComponent(input) {
  var name = input && input.props ? input.props.name : undefined;

  if (!name) {
    throw new Error('Input ' + input + ' has no "name" prop');
  }

  return { name: name };
}

var InputContainer = function (_Component) {
  (0, _inherits3.default)(InputContainer, _Component);

  function InputContainer() {
    (0, _classCallCheck3.default)(this, InputContainer);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  InputContainer.prototype.componentWillMount = function componentWillMount() {
    this._updaters = {};
    this._inputs = {};
  };

  InputContainer.prototype.getOldInputName = function getOldInputName(input) {
    for (var key in this._inputs) {
      if (this._inputs[key] === input) {
        return key;
      }
    }
  };

  InputContainer.prototype.registerInput = function registerInput(input) {
    var updater = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : input && input.setState && input.setState.bind(input);

    var _validComponent = validComponent(input, updater),
        name = _validComponent.name;

    var oldName = this.getOldInputName(input);
    if (oldName !== name) {
      if (oldName) {
        this.unregisterInput({ props: { name: oldName } });
      }
      this._updaters[name] = updater;
      this._inputs[name] = input;
    }
  };

  InputContainer.prototype.unregisterInput = function unregisterInput(input) {
    var _validComponent2 = validComponent(input),
        name = _validComponent2.name;

    delete this._updaters[name];
    delete this._inputs[name];
  };

  return InputContainer;
}(_react.Component);

exports.default = InputContainer;

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvRadio.js":
/*!********************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvRadio.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactstrap = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _AvInput = __webpack_require__(/*! ./AvInput */ "./node_modules/availity-reactstrap-validation/lib/AvInput.js");

var _AvInput2 = _interopRequireDefault(_AvInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var radioPropTypes = (0, _assign2.default)({}, _AvInput2.default.propTypes, { customInput: _propTypes2.default.bool });
delete radioPropTypes.name;

var AvRadio = function (_Component) {
  (0, _inherits3.default)(AvRadio, _Component);

  function AvRadio() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AvRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AvRadio.prototype.componentDidMount = function componentDidMount() {
    this.context.FormCtrl && this.context.FormCtrl.register(this);
  };

  AvRadio.prototype.componentWillUnmount = function componentWillUnmount() {
    this.context.FormCtrl && this.context.FormCtrl.unregister(this);
  };

  AvRadio.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        id = _props.id,
        customInput = _props.customInput,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['className', 'id', 'customInput']);


    var groupProps = this.context.Group.getProps();

    var touched = this.context.FormCtrl.isTouched(groupProps.name);
    var hasError = this.context.FormCtrl.hasError(groupProps.name);

    var classes = (0, _classnames2.default)(className, touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(groupProps.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(groupProps.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid');

    if (this.props.disabled === undefined && this.context.FormCtrl.isDisabled() !== undefined) {
      attributes.disabled = this.context.FormCtrl.isDisabled();
    }

    if (this.props.readOnly === undefined && this.context.FormCtrl.isReadOnly() !== undefined) {
      attributes.disabled = attributes.disabled || this.context.FormCtrl.isReadOnly();
    }

    if (customInput) {
      return _react2.default.createElement(_reactstrap.CustomInput, (0, _extends3.default)({ name: groupProps.name,
        type: 'radio'
      }, attributes, {
        inline: groupProps.inline,
        id: id || 'radio-' + groupProps.name + '-' + this.props.value,
        className: classes,
        onChange: this.onChangeHandler,
        checked: this.props.value === groupProps.value,
        value: this.props.value && this.props.value.toString(),
        required: groupProps.required,
        label: this.props.label
      }));
    }

    return _react2.default.createElement(
      _reactstrap.FormGroup,
      { check: true, inline: groupProps.inline, disabled: attributes.disabled || attributes.readOnly },
      _react2.default.createElement(_reactstrap.Input, (0, _extends3.default)({
        name: groupProps.name,
        type: 'radio'
      }, attributes, {
        id: id || 'radio-' + groupProps.name + '-' + this.props.value,
        className: classes,
        onChange: this.onChangeHandler,
        checked: this.props.value === groupProps.value,
        value: this.props.value && this.props.value.toString(),
        required: groupProps.required
      })),
      _react2.default.createElement(
        _reactstrap.Label,
        { check: true, 'for': id || 'radio-' + groupProps.name + '-' + this.props.value },
        this.props.label
      )
    );
  };

  return AvRadio;
}(_react.Component);

AvRadio.contextTypes = (0, _assign2.default)({}, _AvInput2.default.contextTypes, {
  Group: _propTypes2.default.object.isRequired
});
AvRadio.propTypes = radioPropTypes;

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onChangeHandler = function (event) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    _this2.context.Group.update(event, _this2.props.value);
    if (_this2.props.onChange) {
      var _props2;

      (_props2 = _this2.props).onChange.apply(_props2, [event].concat(args));
    }
  };
};

exports.default = AvRadio;

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvRadioGroup.js":
/*!*************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvRadioGroup.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js");

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _reactstrap = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _AvFeedback = __webpack_require__(/*! ./AvFeedback */ "./node_modules/availity-reactstrap-validation/lib/AvFeedback.js");

var _AvFeedback2 = _interopRequireDefault(_AvFeedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var htmlValidationAttrs = ['required'];

var noop = function noop() {};

var AvRadioGroup = function (_Component) {
  (0, _inherits3.default)(AvRadioGroup, _Component);

  function AvRadioGroup() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AvRadioGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      invalidInputs: {},
      dirtyInputs: {},
      touchedInputs: {},
      badInputs: {},
      validate: {},
      value: ''
    }, _this._inputs = [], _this.value = '', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AvRadioGroup.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    if (!this.FormCtrl) {
      this.FormCtrl = (0, _extends3.default)({}, this.context.FormCtrl);
      this.FormCtrl.register = this.registerInput.bind(this);
      this.FormCtrl.unregister = this.unregisterInput.bind(this);
      this.FormCtrl.validate = noop;
    }

    var updateGroup = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e, value) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.setState({ value: value });
                _this2.value = value;
                _context.next = 4;
                return _this2.validate();

              case 4:
                !_this2.context.FormCtrl.isTouched(_this2.props.name) && _this2.context.FormCtrl.setTouched(_this2.props.name);
                !_this2.context.FormCtrl.isDirty(_this2.props.name) && _this2.context.FormCtrl.setDirty(_this2.props.name);
                _this2.props.onChange && _this2.props.onChange(e, value);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function updateGroup(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    return {
      Group: {
        getProps: function getProps() {
          return {
            name: _this2.props.name,
            inline: _this2.props.inline,
            required: _this2.props.required || !!(_this2.validations.required && _this2.validations.required.value),
            value: _this2.value
          };
        },
        update: updateGroup,
        getValue: function getValue() {
          return _this2.value;
        },
        getInputState: this.getInputState.bind(this)
      },
      FormCtrl: this.FormCtrl
    };
  };

  AvRadioGroup.prototype.componentWillMount = function componentWillMount() {
    this.value = this.props.value || this.getDefaultValue().value;
    this.setState({ value: this.value });
    this.updateValidations();
  };

  AvRadioGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name) {
      this.context.FormCtrl.unregister(this);
    }
    if (nextProps.value !== this.props.value) {
      this.value = nextProps.value;
      this.setState({ value: nextProps.value });
    }
    if (!(0, _isEqual2.default)(nextProps, this.props)) {
      this.updateValidations(nextProps);
    }
  };

  AvRadioGroup.prototype.componentWillUnmount = function componentWillUnmount() {
    this.context.FormCtrl.unregister(this);
  };

  AvRadioGroup.prototype.getValue = function getValue() {
    return this.value;
  };

  AvRadioGroup.prototype.getInputState = function getInputState() {
    return this.context.FormCtrl.getInputState(this.props.name);
  };

  AvRadioGroup.prototype.getDefaultValue = function getDefaultValue() {
    var key = 'defaultValue';

    var value = '';
    if (!(0, _isUndefined2.default)(this.props[key])) {
      value = this.props[key];
    } else if (!(0, _isUndefined2.default)(this.context.FormCtrl.getDefaultValue(this.props.name))) {
      value = this.context.FormCtrl.getDefaultValue(this.props.name);
    }

    return { key: key, value: value };
  };

  AvRadioGroup.prototype.validate = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.context.FormCtrl.validate(this.props.name);

            case 2:
              this.updateInputs();

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function validate() {
      return _ref2.apply(this, arguments);
    }

    return validate;
  }();

  AvRadioGroup.prototype.update = function update() {
    this.setState({});
    this.updateInputs();
  };

  AvRadioGroup.prototype.updateValidations = function updateValidations() {
    var _this3 = this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    this.validations = (0, _assign2.default)({}, props.validate);

    (0, _keys2.default)(props).filter(function (val) {
      return htmlValidationAttrs.indexOf(val) > -1;
    }).forEach(function (attr) {
      if (props[attr]) {
        _this3.validations[attr] = _this3.validations[attr] || {
          value: props[attr]
        };
      } else {
        delete _this3.validations[attr];
      }
    });

    this.context.FormCtrl.register(this, this.update.bind(this));
    this.validate();
  };

  AvRadioGroup.prototype.updateInputs = function updateInputs() {
    this._inputs.forEach(function (input) {
      return input.setState.call(input, {});
    });
    this.setState({});
  };

  AvRadioGroup.prototype.reset = function reset() {
    this.value = this.getDefaultValue().value;
    this.context.FormCtrl.setDirty(this.props.name, false);
    this.context.FormCtrl.setTouched(this.props.name, false);
    this.context.FormCtrl.setBad(this.props.name, false);
    this.setState({ value: this.value });
    this.validate();
    this.props.onReset && this.props.onReset(this.value);
  };

  AvRadioGroup.prototype.registerInput = function registerInput(input) {
    if (this._inputs.indexOf(input) < 0) {
      this._inputs.push(input);
    }
  };

  AvRadioGroup.prototype.unregisterInput = function unregisterInput(input) {
    this._inputs = this._inputs.filter(function (ipt) {
      return ipt !== input;
    });
  };

  AvRadioGroup.prototype.render = function render() {
    var legend = this.props.label ? _react2.default.createElement(
      'legend',
      null,
      this.props.label
    ) : '';
    var validation = this.getInputState();
    var _props = this.props,
        omit1 = _props.errorMessage,
        omit2 = _props.validate,
        omit3 = _props.validationEvent,
        omit4 = _props.state,
        omit5 = _props.label,
        omit6 = _props.required,
        omit7 = _props.inline,
        children = _props.children,
        attributes = (0, _objectWithoutProperties3.default)(_props, ['errorMessage', 'validate', 'validationEvent', 'state', 'label', 'required', 'inline', 'children']);


    var touched = this.context.FormCtrl.isTouched(this.props.name);
    var hasError = this.context.FormCtrl.hasError(this.props.name);

    var classes = (0, _classnames2.default)('form-control border-0 p-0 h-auto', touched ? 'is-touched' : 'is-untouched', this.context.FormCtrl.isDirty(this.props.name) ? 'is-dirty' : 'is-pristine', this.context.FormCtrl.isBad(this.props.name) ? 'is-bad-input' : null, hasError ? 'av-invalid' : 'av-valid', touched && hasError && 'is-invalid');

    var groupClass = (0, _classnames2.default)(attributes.className, touched && hasError && 'was-validated');

    return _react2.default.createElement(
      _reactstrap.FormGroup,
      (0, _extends3.default)({ tag: 'fieldset' }, attributes, { className: groupClass }),
      legend,
      _react2.default.createElement(
        'div',
        { className: classes },
        children
      ),
      _react2.default.createElement(
        _AvFeedback2.default,
        null,
        validation.errorMessage
      )
    );
  };

  return AvRadioGroup;
}(_react.Component);

AvRadioGroup.propTypes = (0, _assign2.default)({}, _reactstrap.FormGroup.propTypes, {
  name: _propTypes2.default.string.isRequired
});
AvRadioGroup.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
AvRadioGroup.childContextTypes = {
  Group: _propTypes2.default.object.isRequired,
  FormCtrl: _propTypes2.default.object.isRequired
};
exports.default = AvRadioGroup;

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/date.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/date.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$format = _ref.format,
      format = _ref$format === undefined ? 'MM/DD/YYYY' : _ref$format,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? 'Format needs to be ' + format : _ref$errorMessage;

  if ((0, _utils.isEmpty)(value)) return true;

  var date = (0, _moment2.default)(value, [_utils.isoDateFormat, format], true);

  return date.isValid() || errorMessage;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/dateRange.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/dateRange.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setMin(value) {
  value.set('hours', 0);
  value.set('minutes', 0);
  value.set('seconds', 0);

  return value;
}

function setMax(value) {
  value.set('hours', 23);
  value.set('minutes', 59);
  value.set('seconds', 59);

  return value;
}

function getStartDate(start) {
  return setMin((0, _moment2.default)().add(start.value, start.units));
}

function getEndDate(end) {
  return setMax((0, _moment2.default)().add(end.value, end.units));
}

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$format = _ref.format,
      format = _ref$format === undefined ? 'MM/DD/YYYY' : _ref$format,
      _ref$displayFormat = _ref.displayFormat,
      displayFormat = _ref$displayFormat === undefined ? 'MM/DD/YYYY' : _ref$displayFormat,
      _ref$start = _ref.start,
      start = _ref$start === undefined ? {} : _ref$start,
      _ref$end = _ref.end,
      end = _ref$end === undefined ? {} : _ref$end,
      errorMessage = _ref.errorMessage;

  if ((0, _utils.isEmpty)(value)) return true;

  var startDate = void 0;
  var endDate = void 0;

  var date = (0, _moment2.default)(value, [_utils.isoDateFormat, format], true);
  setMin(date);

  if (!(0, _utils.isEmpty)(start.units) && !(0, _utils.isEmpty)(end.units)) {
    startDate = getStartDate(start);
    endDate = getEndDate(end);
  } else {
    startDate = (0, _moment2.default)(start.value, start.format || format);
    endDate = setMax((0, _moment2.default)(end.value, end.format || format));
  }
  errorMessage = errorMessage || 'Date must be between ' + startDate.format(displayFormat) + ' and ' + endDate.format(displayFormat);
  return date.isValid() && (date.isBetween(startDate, endDate, 'day') || date.isSame(startDate, 'day') || date.isSame(endDate, 'day')) || errorMessage;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/email.js":
/*!******************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/email.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _pattern = __webpack_require__(/*! ./pattern */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/pattern.js");

var _pattern2 = _interopRequireDefault(_pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$pattern = _ref.pattern,
      pattern = _ref$pattern === undefined ? EMAIL_REGEXP : _ref$pattern,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  return (0, _pattern2.default)(value, context, { value: pattern, errorMessage: errorMessage });
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _date = __webpack_require__(/*! ./date */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/date.js");

var _date2 = _interopRequireDefault(_date);

var _dateRange = __webpack_require__(/*! ./dateRange */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/dateRange.js");

var _dateRange2 = _interopRequireDefault(_dateRange);

var _email = __webpack_require__(/*! ./email */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/email.js");

var _email2 = _interopRequireDefault(_email);

var _match = __webpack_require__(/*! ./match */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/match.js");

var _match2 = _interopRequireDefault(_match);

var _max = __webpack_require__(/*! ./max */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/max.js");

var _max2 = _interopRequireDefault(_max);

var _maxlength = __webpack_require__(/*! ./maxlength */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/maxlength.js");

var _maxlength2 = _interopRequireDefault(_maxlength);

var _maxchecked = __webpack_require__(/*! ./maxchecked */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/maxchecked.js");

var _maxchecked2 = _interopRequireDefault(_maxchecked);

var _min = __webpack_require__(/*! ./min */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/min.js");

var _min2 = _interopRequireDefault(_min);

var _minlength = __webpack_require__(/*! ./minlength */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/minlength.js");

var _minlength2 = _interopRequireDefault(_minlength);

var _minchecked = __webpack_require__(/*! ./minchecked */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/minchecked.js");

var _minchecked2 = _interopRequireDefault(_minchecked);

var _number = __webpack_require__(/*! ./number */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/number.js");

var _number2 = _interopRequireDefault(_number);

var _npi = __webpack_require__(/*! ./npi */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/npi.js");

var _npi2 = _interopRequireDefault(_npi);

var _pattern = __webpack_require__(/*! ./pattern */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/pattern.js");

var _pattern2 = _interopRequireDefault(_pattern);

var _phone = __webpack_require__(/*! ./phone */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/phone.js");

var _phone2 = _interopRequireDefault(_phone);

var _required = __webpack_require__(/*! ./required */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/required.js");

var _required2 = _interopRequireDefault(_required);

var _step = __webpack_require__(/*! ./step */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/step.js");

var _step2 = _interopRequireDefault(_step);

var _url = __webpack_require__(/*! ./url */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/url.js");

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  date: _date2.default,
  datetime: _date2.default,
  dateRange: _dateRange2.default,
  email: _email2.default,
  match: _match2.default,
  max: _max2.default,
  maxlength: _maxlength2.default,
  maxLength: _maxlength2.default,
  maxChecked: _maxchecked2.default,
  min: _min2.default,
  minlength: _minlength2.default,
  minLength: _minlength2.default,
  minChecked: _minchecked2.default,
  number: _number2.default,
  npi: _npi2.default,
  pattern: _pattern2.default,
  phone: _phone2.default,
  tel: _phone2.default,
  required: _required2.default,
  step: _step2.default,
  url: _url2.default
};

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/match.js":
/*!******************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/match.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

var _get = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return (0, _utils.isEmpty)(value) || value === (0, _get2.default)(context, constraint.value) || constraint.errorMessage || false;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/max.js":
/*!****************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/max.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _toNumber = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");

var _toNumber2 = _interopRequireDefault(_toNumber);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

var _maxchecked = __webpack_require__(/*! ./maxchecked */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/maxchecked.js");

var _maxchecked2 = _interopRequireDefault(_maxchecked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (Array.isArray(input.value)) {
    return (0, _maxchecked2.default)(value, context, constraint, input);
  }

  if ((0, _utils.isEmpty)(value)) return true;

  if (input.validations && input.validations.date || input.props && input.props.type && input.props.type.toLowerCase() === 'date') {
    return (0, _moment2.default)(value, [_utils.isoDateFormat, constraint.format || 'MM/DD/YYYY'], true).isSameOrBefore(constraint.value, 'day') || constraint.errorMessage || false;
  }

  var number = (0, _toNumber2.default)(value);

  return !isNaN(number) && isFinite(number) && number <= (0, _toNumber2.default)(constraint.value) || constraint.errorMessage || false;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/maxchecked.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/maxchecked.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _toNumber = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");

var _toNumber2 = _interopRequireDefault(_toNumber);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if ((0, _utils.isEmpty)(input.value)) return true;

  var max = (0, _toNumber2.default)(constraint.value);

  return !isNaN(max) && isFinite(max) && !(0, _utils.isDecimal)(max) && max >= input.value.length || constraint.errorMessage || false;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/maxlength.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/maxlength.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _toNumber = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");

var _toNumber2 = _interopRequireDefault(_toNumber);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _utils.isEmpty)(value)) return true;

  var length = value.length;

  return length <= (0, _toNumber2.default)(constraint.value) || constraint.errorMessage || false;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/min.js":
/*!****************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/min.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _toNumber = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");

var _toNumber2 = _interopRequireDefault(_toNumber);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

var _minchecked = __webpack_require__(/*! ./minchecked */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/minchecked.js");

var _minchecked2 = _interopRequireDefault(_minchecked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (Array.isArray(input.value)) {
    return (0, _minchecked2.default)(value, context, constraint, input);
  }

  if ((0, _utils.isEmpty)(value)) return true;

  if (input.validations && input.validations.date || input.props && input.props.type && input.props.type.toLowerCase() === 'date') {
    return (0, _moment2.default)(value, [_utils.isoDateFormat, constraint.format || 'MM/DD/YYYY'], true).isSameOrAfter(constraint.value, 'day') || constraint.errorMessage || false;
  }

  var number = (0, _toNumber2.default)(value);

  return !isNaN(number) && isFinite(number) && number >= (0, _toNumber2.default)(constraint.value) || constraint.errorMessage || false;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/minchecked.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/minchecked.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _toNumber = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");

var _toNumber2 = _interopRequireDefault(_toNumber);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if ((0, _utils.isEmpty)(input.value)) return true;

  var min = (0, _toNumber2.default)(constraint.value);

  return !isNaN(min) && isFinite(min) && !(0, _utils.isDecimal)(min) && min <= input.value.length || constraint.errorMessage || false;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/minlength.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/minlength.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _toNumber = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");

var _toNumber2 = _interopRequireDefault(_toNumber);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _utils.isEmpty)(value)) return true;

  var length = value.length;

  return length >= (0, _toNumber2.default)(constraint.value) || constraint.errorMessage || false;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/npi.js":
/*!****************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/npi.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

var INTEGER_REGEX = /^\d*$/;

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  if ((0, _utils.isEmpty)(value)) return true;

  value = value + '';

  if (!INTEGER_REGEX.test(value) || value.length !== 10) {
    return errorMessage;
  }

  var firstDigit = value.charAt(0);
  if (['1', '2', '3', '4'].indexOf(firstDigit) < 0) {
    return errorMessage;
  }

  var digit = parseInt(value.charAt(9), 10);
  value = value.substring(0, 9);
  value = '80840' + value;

  var alternate = true;
  var total = 0;

  for (var i = value.length; i > 0; i--) {
    var next = parseInt(value.charAt(i - 1), 10);
    if (alternate) {
      next = next * 2;
      if (next > 9) {
        next = next % 10 + 1;
      }
    }
    total += next;
    alternate = !alternate;
  }

  var roundUp = Math.ceil(total / 10) * 10;
  var calculatedCheck = roundUp - total;

  return calculatedCheck === digit || errorMessage;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/number.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/number.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _isNumber = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _toNumber = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");

var _toNumber2 = _interopRequireDefault(_toNumber);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  if ((0, _utils.isEmpty)(value)) return true;

  var number = (0, _toNumber2.default)(value);

  return (0, _isNumber2.default)(number) && !isNaN(number) || errorMessage;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/pattern.js":
/*!********************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/pattern.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _isRegExp = __webpack_require__(/*! lodash/isRegExp */ "./node_modules/lodash/isRegExp.js");

var _isRegExp2 = _interopRequireDefault(_isRegExp);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REGEX = /^\/(.*)\/([gim]*)$/; // regular expression to test a regular expression

function asRegExp(pattern) {
  // if regex then return it
  if ((0, _isRegExp2.default)(pattern)) {
    return pattern;
  }

  // if string then test for valid regex then convert to regex and return
  var match = pattern.match(REGEX);
  if (match) {
    return new RegExp(match[1], match[2]);
  }

  return new RegExp(pattern);
}

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _utils.isEmpty)(value)) return true;

  var values = Array.isArray(constraint.value) ? constraint.value : [constraint.value];

  return values.some(function (expression) {
    return asRegExp(expression).test(value);
  }) || constraint.errorMessage || false;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/phone.js":
/*!******************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/phone.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _pattern = __webpack_require__(/*! ./pattern */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/pattern.js");

var _pattern2 = _interopRequireDefault(_pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NANP_REGEXP = /^(\+?1[\.\-\s]?)?\(?[2-9]\d{2}[\)\.\-\s]?\s?[2-9]\d{2}[\.\-\s]?\d{4}$/;

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$pattern = _ref.pattern,
      pattern = _ref$pattern === undefined ? NANP_REGEXP : _ref$pattern,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  return (0, _pattern2.default)(value, context, { value: pattern, errorMessage: errorMessage });
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/required.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/required.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$value = _ref.value,
      enabled = _ref$value === undefined ? true : _ref$value,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  return !enabled || !(0, _utils.isEmpty)(value) || errorMessage || false;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/step.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/step.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _toNumber = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");

var _toNumber2 = _interopRequireDefault(_toNumber);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://stackoverflow.com/a/31711034/1873485
function floatSafeRemainder(val, step) {
  var valDecCount = (val.toString().split('.')[1] || '').length;
  var stepDecCount = (step.toString().split('.')[1] || '').length;
  var decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  var valInt = parseInt(val.toFixed(decCount).replace('.', ''), 10);
  var stepInt = parseInt(step.toFixed(decCount).replace('.', ''), 10);
  return valInt % stepInt / Math.pow(10, decCount);
}

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _utils.isEmpty)(value)) return true;

  return floatSafeRemainder((0, _toNumber2.default)(value), (0, _toNumber2.default)(constraint.value)) === 0 || constraint.errorMessage || false;
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/url.js":
/*!****************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/url.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _pattern = __webpack_require__(/*! ./pattern */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/pattern.js");

var _pattern2 = _interopRequireDefault(_pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://gist.github.com/dperini/729294
var URL_REGEXP = new RegExp('^' +
// protocol identifier
'(?:(?:https?|ftps?|sftp)://)' +
// user:pass authentication
'(?:\\S+(?::\\S*)?@)?' + '(?:' +
// IP address exclusion
// private & local networks
'(?!(?:10|127)(?:\\.\\d{1,3}){3})' + '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' + '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
// IP address dotted notation octets
// excludes loopback network 0.0.0.0
// excludes reserved space >= 224.0.0.0
// excludes network & broacast addresses
// (first & last IP address of each class)
'(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' + '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' + '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' + '|' +
// host name
'(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
// domain name
'(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
// TLD identifier
'(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
// TLD may end with dot
'\\.?' + ')' +
// port number
'(?::\\d{2,5})?' +
// resource path
'(?:[/?#]\\S*)?' + '$', 'i');

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$pattern = _ref.pattern,
      pattern = _ref$pattern === undefined ? URL_REGEXP : _ref$pattern,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  return (0, _pattern2.default)(value, context, { value: pattern, errorMessage: errorMessage });
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/AvValidator/utils.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.inputTypeOverride = exports.inputType = exports.isoDateFormat = undefined;
exports.isEmpty = isEmpty;
exports.isDecimal = isDecimal;

var _isString = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");

var _isString2 = _interopRequireDefault(_isString);

var _isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js");

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */
var isoDateFormat = exports.isoDateFormat = 'YYYY-MM-DD';

function isEmpty(value) {
  return (0, _isUndefined2.default)(value) || value === null || (0, _isString2.default)(value) && value.trim() === '' || value === false || Array.isArray(value) && value.length === 0;
}

function isDecimal(value) {
  return value % 1 !== 0;
}

var inputType = exports.inputType = { date: false, number: false, time: false, month: false, week: false };

var inputTypeOverride = exports.inputTypeOverride = function inputTypeOverride(key, value) {
  inputType[key] = value;
};

/* istanbul ignore next  */
if (typeof document !== 'undefined' && typeof document.createElement === 'function') {
  var tester = document.createElement('input');

  for (var i in inputType) {
    if (inputType.hasOwnProperty(i)) {
      tester.setAttribute('type', i);
      tester.value = ':(';

      if (tester.type === i && tester.value === '') {
        inputType[i] = true;
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/availity-reactstrap-validation/lib/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/availity-reactstrap-validation/lib/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.AvValidator = exports.AvInputContainer = exports.AvBaseInput = exports.AvInput = exports.AvRadio = exports.AvRadioGroup = exports.AvGroup = exports.AvForm = exports.AvField = exports.AvFeedback = exports.AvCheckboxGroup = exports.AvCheckbox = undefined;

var _AvCheckbox = __webpack_require__(/*! ./AvCheckbox */ "./node_modules/availity-reactstrap-validation/lib/AvCheckbox.js");

var _AvCheckbox2 = _interopRequireDefault(_AvCheckbox);

var _AvCheckboxGroup = __webpack_require__(/*! ./AvCheckboxGroup */ "./node_modules/availity-reactstrap-validation/lib/AvCheckboxGroup.js");

var _AvCheckboxGroup2 = _interopRequireDefault(_AvCheckboxGroup);

var _AvFeedback = __webpack_require__(/*! ./AvFeedback */ "./node_modules/availity-reactstrap-validation/lib/AvFeedback.js");

var _AvFeedback2 = _interopRequireDefault(_AvFeedback);

var _AvField = __webpack_require__(/*! ./AvField */ "./node_modules/availity-reactstrap-validation/lib/AvField.js");

var _AvField2 = _interopRequireDefault(_AvField);

var _AvForm = __webpack_require__(/*! ./AvForm */ "./node_modules/availity-reactstrap-validation/lib/AvForm.js");

var _AvForm2 = _interopRequireDefault(_AvForm);

var _AvGroup = __webpack_require__(/*! ./AvGroup */ "./node_modules/availity-reactstrap-validation/lib/AvGroup.js");

var _AvGroup2 = _interopRequireDefault(_AvGroup);

var _AvRadioGroup = __webpack_require__(/*! ./AvRadioGroup */ "./node_modules/availity-reactstrap-validation/lib/AvRadioGroup.js");

var _AvRadioGroup2 = _interopRequireDefault(_AvRadioGroup);

var _AvRadio = __webpack_require__(/*! ./AvRadio */ "./node_modules/availity-reactstrap-validation/lib/AvRadio.js");

var _AvRadio2 = _interopRequireDefault(_AvRadio);

var _AvInput = __webpack_require__(/*! ./AvInput */ "./node_modules/availity-reactstrap-validation/lib/AvInput.js");

var _AvInput2 = _interopRequireDefault(_AvInput);

var _AvBaseInput = __webpack_require__(/*! ./AvBaseInput */ "./node_modules/availity-reactstrap-validation/lib/AvBaseInput.js");

var _AvBaseInput2 = _interopRequireDefault(_AvBaseInput);

var _AvInputContainer = __webpack_require__(/*! ./AvInputContainer */ "./node_modules/availity-reactstrap-validation/lib/AvInputContainer.js");

var _AvInputContainer2 = _interopRequireDefault(_AvInputContainer);

var _AvValidator = __webpack_require__(/*! ./AvValidator */ "./node_modules/availity-reactstrap-validation/lib/AvValidator/index.js");

var _AvValidator2 = _interopRequireDefault(_AvValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AvCheckbox = _AvCheckbox2.default;
exports.AvCheckboxGroup = _AvCheckboxGroup2.default;
exports.AvFeedback = _AvFeedback2.default;
exports.AvField = _AvField2.default;
exports.AvForm = _AvForm2.default;
exports.AvGroup = _AvGroup2.default;
exports.AvRadioGroup = _AvRadioGroup2.default;
exports.AvRadio = _AvRadio2.default;
exports.AvInput = _AvInput2.default;
exports.AvBaseInput = _AvBaseInput2.default;
exports.AvInputContainer = _AvInputContainer2.default;
exports.AvValidator = _AvValidator2.default;

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/promise.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/promise.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-instance.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-instance.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_invoke.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_invoke.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_microtask.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_microtask.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine-all.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine-all.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-species.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-species.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_user-agent.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_user-agent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.keys.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.keys.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.promise.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.promise.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.finally.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.try.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.promise.try.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseIsRegExp.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsRegExp.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

module.exports = baseIsRegExp;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ "./node_modules/lodash/isRegExp.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isRegExp.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsRegExp = __webpack_require__(/*! ./_baseIsRegExp */ "./node_modules/lodash/_baseIsRegExp.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/isUndefined.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isUndefined.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js");

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXZhaWxpdHktcmVhY3RzdHJhcC12YWxpZGF0aW9uL2xpYi9BdkJhc2VJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXZhaWxpdHktcmVhY3RzdHJhcC12YWxpZGF0aW9uL2xpYi9BdkNoZWNrYm94LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2Q2hlY2tib3hHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXZhaWxpdHktcmVhY3RzdHJhcC12YWxpZGF0aW9uL2xpYi9BdkZlZWRiYWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2RmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F2YWlsaXR5LXJlYWN0c3RyYXAtdmFsaWRhdGlvbi9saWIvQXZGb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2R3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F2YWlsaXR5LXJlYWN0c3RyYXAtdmFsaWRhdGlvbi9saWIvQXZJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXZhaWxpdHktcmVhY3RzdHJhcC12YWxpZGF0aW9uL2xpYi9BdklucHV0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2UmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F2YWlsaXR5LXJlYWN0c3RyYXAtdmFsaWRhdGlvbi9saWIvQXZSYWRpb0dyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2VmFsaWRhdG9yL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F2YWlsaXR5LXJlYWN0c3RyYXAtdmFsaWRhdGlvbi9saWIvQXZWYWxpZGF0b3IvZGF0ZVJhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2VmFsaWRhdG9yL2VtYWlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2VmFsaWRhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2VmFsaWRhdG9yL21hdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2VmFsaWRhdG9yL21heC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXZhaWxpdHktcmVhY3RzdHJhcC12YWxpZGF0aW9uL2xpYi9BdlZhbGlkYXRvci9tYXhjaGVja2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2VmFsaWRhdG9yL21heGxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXZhaWxpdHktcmVhY3RzdHJhcC12YWxpZGF0aW9uL2xpYi9BdlZhbGlkYXRvci9taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F2YWlsaXR5LXJlYWN0c3RyYXAtdmFsaWRhdGlvbi9saWIvQXZWYWxpZGF0b3IvbWluY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXZhaWxpdHktcmVhY3RzdHJhcC12YWxpZGF0aW9uL2xpYi9BdlZhbGlkYXRvci9taW5sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F2YWlsaXR5LXJlYWN0c3RyYXAtdmFsaWRhdGlvbi9saWIvQXZWYWxpZGF0b3IvbnBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2VmFsaWRhdG9yL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXZhaWxpdHktcmVhY3RzdHJhcC12YWxpZGF0aW9uL2xpYi9BdlZhbGlkYXRvci9wYXR0ZXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2VmFsaWRhdG9yL3Bob25lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2VmFsaWRhdG9yL3JlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2VmFsaWRhdG9yL3N0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F2YWlsaXR5LXJlYWN0c3RyYXAtdmFsaWRhdGlvbi9saWIvQXZWYWxpZGF0b3IvdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL0F2VmFsaWRhdG9yL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb24vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1JlZ0V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzUmVnRXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1VuZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjs7QUFFQSxjQUFjLG1CQUFPLENBQUMsa0dBQXFDOztBQUUzRDs7QUFFQSxnQkFBZ0IsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXZEOztBQUVBLFlBQVksbUJBQU8sQ0FBQyw4RkFBbUM7O0FBRXZEOztBQUVBLHVCQUF1QixtQkFBTyxDQUFDLG9HQUFzQzs7QUFFckU7O0FBRUEsa0NBQWtDLG1CQUFPLENBQUMsMEhBQWlEOztBQUUzRjs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzRUFBc0U7QUFDdEU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLElBQUk7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5SUFBeUk7QUFDekksT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2Q0FBNkM7QUFDN0MsbUJBQW1CLCtCQUErQjtBQUNs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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLGlCQUFpQixRQUFRLE9BQU8sU0FBUyxFQUFFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbENBLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTtBQUNuQyxlQUFlLG1CQUFPLENBQUMscURBQVk7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU8sWUFBWTtBQUM5QixXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG9CQUFvQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbicpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9rZXlzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7XG5cbnZhciBfa2V5czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaXNVbmRlZmluZWQgPSByZXF1aXJlKCdsb2Rhc2gvaXNVbmRlZmluZWQnKTtcblxudmFyIF9pc1VuZGVmaW5lZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1VuZGVmaW5lZCk7XG5cbnZhciBfaXNFcXVhbCA9IHJlcXVpcmUoJ2xvZGFzaC9pc0VxdWFsJyk7XG5cbnZhciBfaXNFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0VxdWFsKTtcblxudmFyIF9nZXQgPSByZXF1aXJlKCdsb2Rhc2gvZ2V0Jyk7XG5cbnZhciBfZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBodG1sVmFsaWRhdGlvbkF0dHJzID0gWydtaW4nLCAnbWF4JywgJ21pbkxlbmd0aCcsICdtYXhMZW5ndGgnLCAncGF0dGVybicsICdyZXF1aXJlZCcsICdzdGVwJ107XG5cbnZhciBodG1sVmFsaWRhdGlvblR5cGVzID0gWydlbWFpbCcsICdkYXRlJywgJ2RhdGV0aW1lJywgJ251bWJlcicsICd0ZWwnLCAndXJsJ107XG5cbnZhciBBdkJhc2VJbnB1dCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEF2QmFzZUlucHV0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBdkJhc2VJbnB1dChwcm9wcykge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEF2QmFzZUlucHV0KTtcblxuICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IF90aGlzLnByb3BzLm11bHRpcGxlID8gW10gOiAnJyB9O1xuICAgIF90aGlzLnZhbGlkYXRpb25zID0ge307XG4gICAgX3RoaXMudmFsdWUgPSAnJztcbiAgICBfdGhpcy5vbktleVVwSGFuZGxlciA9IF90aGlzLm9uS2V5VXBIYW5kbGVyLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uSW5wdXRIYW5kbGVyID0gX3RoaXMub25JbnB1dEhhbmRsZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25CbHVySGFuZGxlciA9IF90aGlzLm9uQmx1ckhhbmRsZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25Gb2N1c0hhbmRsZXIgPSBfdGhpcy5vbkZvY3VzSGFuZGxlci5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkNoYW5nZUhhbmRsZXIgPSBfdGhpcy5vbkNoYW5nZUhhbmRsZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMudmFsaWRhdGUgPSBfdGhpcy52YWxpZGF0ZS5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBBdkJhc2VJbnB1dC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgIHRoaXMudXBkYXRlVmFsaWRhdGlvbnMoKTtcbiAgfTtcblxuICBBdkJhc2VJbnB1dC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5uYW1lICE9PSB0aGlzLnByb3BzLm5hbWUpIHtcbiAgICAgIHRoaXMuY29udGV4dC5Gb3JtQ3RybC51bnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cbiAgICBpZiAobmV4dFByb3BzLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuY2hlY2tlZCAhPT0gdGhpcy5wcm9wcy5jaGVja2VkKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXh0UHJvcHMudHJ1ZVZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXh0UHJvcHMuZmFsc2VWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuZXh0UHJvcHMubXVsdGlwbGUgIT09IHRoaXMucHJvcHMubXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5leHRQcm9wcy5tdWx0aXBsZSA/IFtdIDogJyc7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5leHRQcm9wcy52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBuZXh0UHJvcHMudmFsdWUgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEoMCwgX2lzRXF1YWwyLmRlZmF1bHQpKG5leHRQcm9wcywgdGhpcy5wcm9wcykpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsaWRhdGlvbnMobmV4dFByb3BzKTtcbiAgICB9XG4gIH07XG5cbiAgQXZCYXNlSW5wdXQucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLm5hbWUgIT09IHRoaXMucHJvcHMubmFtZSkge1xuICAgICAgdGhpcy5jb250ZXh0LkZvcm1DdHJsLnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBBdkJhc2VJbnB1dC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNvbnRleHQuRm9ybUN0cmwudW5yZWdpc3Rlcih0aGlzKTtcbiAgfTtcblxuICBBdkJhc2VJbnB1dC5wcm90b3R5cGUub25LZXlVcEhhbmRsZXIgPSBmdW5jdGlvbiBvbktleVVwSGFuZGxlcihldmVudCkge1xuICAgIHZhciBiYWRJbnB1dCA9ICgwLCBfZ2V0Mi5kZWZhdWx0KShldmVudCwgJ3RhcmdldC52YWxpZGl0eS5iYWRJbnB1dCcsIGZhbHNlKTtcbiAgICBpZiAoYmFkSW5wdXQgIT09IHRoaXMuY29udGV4dC5Gb3JtQ3RybC5pc0JhZCh0aGlzLnByb3BzLm5hbWUpKSB7XG4gICAgICB0aGlzLmNvbnRleHQuRm9ybUN0cmwuc2V0QmFkKHRoaXMucHJvcHMubmFtZSwgYmFkSW5wdXQpO1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uS2V5VXAgJiYgdGhpcy5wcm9wcy5vbktleVVwKGV2ZW50KTtcbiAgfTtcblxuICBBdkJhc2VJbnB1dC5wcm90b3R5cGUub25JbnB1dEhhbmRsZXIgPSBmdW5jdGlvbiBvbklucHV0SGFuZGxlcihfdmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5nZXRGaWVsZFZhbHVlKF92YWx1ZSk7XG4gICAgdGhpcy52YWxpZGF0ZUV2ZW50KCdvbklucHV0JywgX3ZhbHVlKTtcbiAgICAhdGhpcy5jb250ZXh0LkZvcm1DdHJsLmlzRGlydHkodGhpcy5wcm9wcy5uYW1lKSAmJiB0aGlzLmNvbnRleHQuRm9ybUN0cmwuc2V0RGlydHkodGhpcy5wcm9wcy5uYW1lKTtcbiAgfTtcblxuICBBdkJhc2VJbnB1dC5wcm90b3R5cGUub25CbHVySGFuZGxlciA9IGZ1bmN0aW9uIG9uQmx1ckhhbmRsZXIoX3ZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0RmllbGRWYWx1ZShfdmFsdWUpO1xuICAgIHRoaXMudmFsaWRhdGVFdmVudCgnb25CbHVyJywgX3ZhbHVlKTtcbiAgICAhdGhpcy5jb250ZXh0LkZvcm1DdHJsLmlzVG91Y2hlZCh0aGlzLnByb3BzLm5hbWUpICYmIHRoaXMuY29udGV4dC5Gb3JtQ3RybC5zZXRUb3VjaGVkKHRoaXMucHJvcHMubmFtZSk7XG4gIH07XG5cbiAgQXZCYXNlSW5wdXQucHJvdG90eXBlLm9uRm9jdXNIYW5kbGVyID0gZnVuY3Rpb24gb25Gb2N1c0hhbmRsZXIoX3ZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0RmllbGRWYWx1ZShfdmFsdWUpO1xuICAgIHRoaXMudmFsaWRhdGVFdmVudCgnb25Gb2N1cycsIF92YWx1ZSk7XG4gIH07XG5cbiAgQXZCYXNlSW5wdXQucHJvdG90eXBlLm9uQ2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uIG9uQ2hhbmdlSGFuZGxlcihfdmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5nZXRGaWVsZFZhbHVlKF92YWx1ZSk7XG4gICAgdGhpcy52YWxpZGF0ZUV2ZW50KCdvbkNoYW5nZScsIF92YWx1ZSk7XG4gICAgIXRoaXMuY29udGV4dC5Gb3JtQ3RybC5pc0RpcnR5KHRoaXMucHJvcHMubmFtZSkgJiYgdGhpcy5jb250ZXh0LkZvcm1DdHJsLnNldERpcnR5KHRoaXMucHJvcHMubmFtZSk7XG4gIH07XG5cbiAgQXZCYXNlSW5wdXQucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICB2YXIgZGVmYXVsdFZhbHVlID0gJyc7XG5cbiAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBpZiAoISgwLCBfaXNVbmRlZmluZWQyLmRlZmF1bHQpKHRoaXMucHJvcHMuZGVmYXVsdENoZWNrZWQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRlZmF1bHRDaGVja2VkID8gdGhpcy5wcm9wcy50cnVlVmFsdWUgOiB0aGlzLnByb3BzLmZhbHNlVmFsdWU7XG4gICAgICB9XG4gICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLnByb3BzLmZhbHNlVmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3NlbGVjdCcgJiYgdGhpcy5wcm9wcy5tdWx0aXBsZSkge1xuICAgICAgZGVmYXVsdFZhbHVlID0gW107XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgfHwgdGhpcy5jb250ZXh0LkZvcm1DdHJsLmdldERlZmF1bHRWYWx1ZSh0aGlzLnByb3BzLm5hbWUpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ2NoZWNrYm94JyAmJiB2YWx1ZSAhPT0gdGhpcy5wcm9wcy50cnVlVmFsdWUpIHtcbiAgICAgIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX2lzVW5kZWZpbmVkMi5kZWZhdWx0KSh2YWx1ZSkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbiAgfTtcblxuICBBdkJhc2VJbnB1dC5wcm90b3R5cGUuZ2V0RmllbGRWYWx1ZSA9IGZ1bmN0aW9uIGdldEZpZWxkVmFsdWUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICByZXR1cm4gZXZlbnQudGFyZ2V0LmNoZWNrZWQgPyB0aGlzLnByb3BzLnRydWVWYWx1ZSA6IHRoaXMucHJvcHMuZmFsc2VWYWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnc2VsZWN0JyAmJiB0aGlzLnByb3BzLm11bHRpcGxlKSB7XG4gICAgICAvKiAvLyBTb21ldGhpbmcgYWJvdXQgdGhpcyBkb2VzIG5vdCB3b3JrIHdoZW4gdHJhbnNwaWxlZFxuICAgICAgcmV0dXJuIFsuLi5ldmVudC50YXJnZXQub3B0aW9uc11cbiAgICAgICAgLmZpbHRlcigoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZClcbiAgICAgICAgLm1hcCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7ICovXG4gICAgICB2YXIgcmV0ID0gW107XG4gICAgICB2YXIgb3B0aW9ucyA9IGV2ZW50LnRhcmdldC5vcHRpb25zO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChvcHRpb25zW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgICAgcmV0LnB1c2gob3B0aW9uc1tpXS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIHJldHVybiBldmVudCAmJiBldmVudC50YXJnZXQgJiYgISgwLCBfaXNVbmRlZmluZWQyLmRlZmF1bHQpKGV2ZW50LnRhcmdldC52YWx1ZSkgPyBldmVudC50YXJnZXQudmFsdWUgOiBldmVudDtcbiAgfTtcblxuICBBdkJhc2VJbnB1dC5wcm90b3R5cGUuZ2V0VmFsaWRhdGlvbkV2ZW50ID0gZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbkV2ZW50KCkge1xuICAgIHZhciB2YWxpZGF0aW9uRXZlbnQgPSB0aGlzLnByb3BzLnZhbGlkYXRpb25FdmVudCA/IHRoaXMucHJvcHMudmFsaWRhdGlvbkV2ZW50IDogdGhpcy5jb250ZXh0LkZvcm1DdHJsLmdldFZhbGlkYXRpb25FdmVudCgpO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbGlkYXRpb25FdmVudCkgPyB2YWxpZGF0aW9uRXZlbnQgOiBbdmFsaWRhdGlvbkV2ZW50XTtcbiAgfTtcblxuICBBdkJhc2VJbnB1dC5wcm90b3R5cGUuZ2V0VmFsaWRhdG9yUHJvcHMgPSBmdW5jdGlvbiBnZXRWYWxpZGF0b3JQcm9wcygpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciB2YWxpZGF0aXR5ID0gdGhpcy5jb250ZXh0LkZvcm1DdHJsLmdldElucHV0U3RhdGUodGhpcy5wcm9wcy5uYW1lKTtcbiAgICB2YXIgaHRtbFZhbEF0dHJzID0gKDAsIF9rZXlzMi5kZWZhdWx0KSh0aGlzLnByb3BzLnZhbGlkYXRlIHx8IHt9KS5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuIGh0bWxWYWxpZGF0aW9uQXR0cnMuaW5kZXhPZih2YWwpID4gLTE7XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGl0ZW0pIHtcbiAgICAgIHJlc3VsdFtpdGVtXSA9IF90aGlzMi5wcm9wcy52YWxpZGF0ZVtpdGVtXS52YWx1ZSB8fCBfdGhpczIucHJvcHMudmFsaWRhdGVbaXRlbV07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcblxuICAgIHZhciBuZXdQcm9wcyA9ICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgb25LZXlVcDogdGhpcy5vbktleVVwSGFuZGxlcixcbiAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXJIYW5kbGVyLFxuICAgICAgb25JbnB1dDogdGhpcy5vbklucHV0SGFuZGxlcixcbiAgICAgIG9uRm9jdXM6IHRoaXMub25Gb2N1c0hhbmRsZXIsXG4gICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZUhhbmRsZXIsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgIH0sIGh0bWxWYWxBdHRycyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuY29udGV4dC5Gb3JtQ3RybC5pc0Rpc2FibGVkKCkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3UHJvcHMuZGlzYWJsZWQgPSB0aGlzLmNvbnRleHQuRm9ybUN0cmwuaXNEaXNhYmxlZCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnJlYWRPbmx5ID09PSB1bmRlZmluZWQgJiYgdGhpcy5jb250ZXh0LkZvcm1DdHJsLmlzUmVhZE9ubHkoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdQcm9wcy5yZWFkT25seSA9IHRoaXMuY29udGV4dC5Gb3JtQ3RybC5pc1JlYWRPbmx5KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgbmV3UHJvcHMuY2hlY2tlZCA9IHRoaXMudmFsdWUgPT09IHRoaXMucHJvcHMudHJ1ZVZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnN0YXRlIHx8IHZhbGlkYXRpdHkgJiYgdmFsaWRhdGl0eS5lcnJvck1lc3NhZ2UpIHtcbiAgICAgIG5ld1Byb3BzLnZhbGlkID0gISh2YWxpZGF0aXR5ICYmIHZhbGlkYXRpdHkuZXJyb3JNZXNzYWdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UHJvcHM7XG4gIH07XG5cbiAgQXZCYXNlSW5wdXQucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH07XG5cbiAgQXZCYXNlSW5wdXQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCk7XG4gICAgdGhpcy5jb250ZXh0LkZvcm1DdHJsLnNldERpcnR5KHRoaXMucHJvcHMubmFtZSwgZmFsc2UpO1xuICAgIHRoaXMuY29udGV4dC5Gb3JtQ3RybC5zZXRUb3VjaGVkKHRoaXMucHJvcHMubmFtZSwgZmFsc2UpO1xuICAgIHRoaXMuY29udGV4dC5Gb3JtQ3RybC5zZXRCYWQodGhpcy5wcm9wcy5uYW1lLCBmYWxzZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KHRoaXMudmFsdWUpO1xuICB9O1xuXG4gIEF2QmFzZUlucHV0LnByb3RvdHlwZS52YWxpZGF0ZUV2ZW50ID0gZnVuY3Rpb24gdmFsaWRhdGVFdmVudChldmVudE5hbWUsIF9ldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICBpZiAodGhpcy5nZXRWYWxpZGF0aW9uRXZlbnQoKS5pbmRleE9mKGV2ZW50TmFtZSkgPiAtMSkge1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzW2V2ZW50TmFtZV0gJiYgdGhpcy5wcm9wc1tldmVudE5hbWVdKF9ldmVudCwgdGhpcy52YWx1ZSk7XG4gIH07XG5cbiAgQXZCYXNlSW5wdXQucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gdmFsaWRhdGUoKSB7XG4gICAgdGhpcy5jb250ZXh0LkZvcm1DdHJsLnZhbGlkYXRlKHRoaXMucHJvcHMubmFtZSk7XG4gIH07XG5cbiAgQXZCYXNlSW5wdXQucHJvdG90eXBlLnVwZGF0ZVZhbGlkYXRpb25zID0gZnVuY3Rpb24gdXBkYXRlVmFsaWRhdGlvbnMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnZhbGlkYXRpb25zID0gKDAsIF9hc3NpZ24yLmRlZmF1bHQpKHt9LCBwcm9wcy52YWxpZGF0ZSk7XG5cbiAgICBpZiAoaHRtbFZhbGlkYXRpb25UeXBlcy5pbmRleE9mKHByb3BzLnR5cGUpID4gLTEpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvbnNbcHJvcHMudHlwZV0gPSB0aGlzLnZhbGlkYXRpb25zW3Byb3BzLnR5cGVdIHx8IHRydWU7XG4gICAgfVxuXG4gICAgKDAsIF9rZXlzMi5kZWZhdWx0KShwcm9wcykuZmlsdGVyKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiBodG1sVmFsaWRhdGlvbkF0dHJzLmluZGV4T2YodmFsKSA+IC0xO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgIGlmIChwcm9wc1thdHRyXSkge1xuICAgICAgICBfdGhpczMudmFsaWRhdGlvbnNbYXR0cl0gPSBfdGhpczMudmFsaWRhdGlvbnNbYXR0cl0gfHwge1xuICAgICAgICAgIHZhbHVlOiBwcm9wc1thdHRyXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIF90aGlzMy52YWxpZGF0aW9uc1thdHRyXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY29udGV4dC5Gb3JtQ3RybCAmJiB0aGlzLmNvbnRleHQuRm9ybUN0cmwucmVnaXN0ZXIodGhpcyk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9O1xuXG4gIHJldHVybiBBdkJhc2VJbnB1dDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkF2QmFzZUlucHV0LnByb3BUeXBlcyA9IHtcbiAgbmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmFsaWRhdGlvbkV2ZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJycsICdvbklucHV0JywgJ29uQ2hhbmdlJywgJ29uQmx1cicsICdvbkZvY3VzJ10pLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ29uSW5wdXQnLCAnb25DaGFuZ2UnLCAnb25CbHVyJywgJ29uRm9jdXMnXSkpXSksXG4gIHZhbGlkYXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICBkZWZhdWx0VmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICB0cnVlVmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICBmYWxzZVZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgY2hlY2tlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBkZWZhdWx0Q2hlY2tlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzdGF0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICB0eXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgbXVsdGlwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcmVhZE9ubHk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgb25LZXlVcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbklucHV0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uUmVzZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcbkF2QmFzZUlucHV0LmNvbnRleHRUeXBlcyA9IHtcbiAgRm9ybUN0cmw6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5BdkJhc2VJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhbGlkYXRpb25FdmVudDogJycsXG4gIHZhbGlkYXRlOiB7fSxcbiAgdHJ1ZVZhbHVlOiB0cnVlLFxuICBmYWxzZVZhbHVlOiBmYWxzZVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEF2QmFzZUlucHV0OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduJyk7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0c3RyYXAgPSByZXF1aXJlKCdyZWFjdHN0cmFwJyk7XG5cbnZhciBfQXZJbnB1dCA9IHJlcXVpcmUoJy4vQXZJbnB1dCcpO1xuXG52YXIgX0F2SW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXZJbnB1dCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjaGVja1Byb3BUeXBlcyA9ICgwLCBfYXNzaWduMi5kZWZhdWx0KSh7fSwgX0F2SW5wdXQyLmRlZmF1bHQucHJvcFR5cGVzLCB7IGN1c3RvbUlucHV0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wgfSk7XG5kZWxldGUgY2hlY2tQcm9wVHlwZXMubmFtZTtcblxudmFyIEF2Q2hlY2tib3ggPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShBdkNoZWNrYm94LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBdkNoZWNrYm94KCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBBdkNoZWNrYm94KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyksIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICBBdkNoZWNrYm94LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY29udGV4dC5Gb3JtQ3RybCAmJiB0aGlzLmNvbnRleHQuRm9ybUN0cmwucmVnaXN0ZXIodGhpcyk7XG4gIH07XG5cbiAgQXZDaGVja2JveC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNvbnRleHQuRm9ybUN0cmwgJiYgdGhpcy5jb250ZXh0LkZvcm1DdHJsLnVucmVnaXN0ZXIodGhpcyk7XG4gIH07XG5cbiAgQXZDaGVja2JveC5wcm90b3R5cGUuaXNEZWZhdWx0Q2hlY2tlZCA9IGZ1bmN0aW9uIGlzRGVmYXVsdENoZWNrZWQodmFsdWVBcnIpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlQXJyKSAmJiB2YWx1ZUFyci5sZW5ndGggPiAwICYmIHZhbHVlQXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0gPT09IF90aGlzMi5wcm9wcy52YWx1ZTtcbiAgICB9KTtcbiAgfTtcblxuICBBdkNoZWNrYm94LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGlkID0gX3Byb3BzLmlkLFxuICAgICAgICBjdXN0b21JbnB1dCA9IF9wcm9wcy5jdXN0b21JbnB1dCxcbiAgICAgICAgYXR0cmlidXRlcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydjbGFzc05hbWUnLCAnaWQnLCAnY3VzdG9tSW5wdXQnXSk7XG5cblxuICAgIHZhciBncm91cFByb3BzID0gdGhpcy5jb250ZXh0Lkdyb3VwLmdldFByb3BzKCk7XG5cbiAgICB2YXIgdG91Y2hlZCA9IHRoaXMuY29udGV4dC5Gb3JtQ3RybC5pc1RvdWNoZWQoZ3JvdXBQcm9wcy5uYW1lKTtcbiAgICB2YXIgaGFzRXJyb3IgPSB0aGlzLmNvbnRleHQuRm9ybUN0cmwuaGFzRXJyb3IoZ3JvdXBQcm9wcy5uYW1lKTtcblxuICAgIHZhciBjbGFzc2VzID0gKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KShjbGFzc05hbWUsIHRvdWNoZWQgPyAnaXMtdG91Y2hlZCcgOiAnaXMtdW50b3VjaGVkJywgdGhpcy5jb250ZXh0LkZvcm1DdHJsLmlzRGlydHkoZ3JvdXBQcm9wcy5uYW1lKSA/ICdpcy1kaXJ0eScgOiAnaXMtcHJpc3RpbmUnLCB0aGlzLmNvbnRleHQuRm9ybUN0cmwuaXNCYWQoZ3JvdXBQcm9wcy5uYW1lKSA/ICdpcy1iYWQtaW5wdXQnIDogbnVsbCwgaGFzRXJyb3IgPyAnYXYtaW52YWxpZCcgOiAnYXYtdmFsaWQnLCB0b3VjaGVkICYmIGhhc0Vycm9yICYmICdpcy1pbnZhbGlkJyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuY29udGV4dC5Gb3JtQ3RybC5pc0Rpc2FibGVkKCkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYXR0cmlidXRlcy5kaXNhYmxlZCA9IHRoaXMuY29udGV4dC5Gb3JtQ3RybC5pc0Rpc2FibGVkKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMucmVhZE9ubHkgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmNvbnRleHQuRm9ybUN0cmwuaXNSZWFkT25seSgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGF0dHJpYnV0ZXMuZGlzYWJsZWQgPSBhdHRyaWJ1dGVzLmRpc2FibGVkIHx8IHRoaXMuY29udGV4dC5Gb3JtQ3RybC5pc1JlYWRPbmx5KCk7XG4gICAgfVxuXG4gICAgaWYgKGN1c3RvbUlucHV0KSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0c3RyYXAuQ3VzdG9tSW5wdXQsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICBuYW1lOiBncm91cFByb3BzLm5hbWUsXG4gICAgICAgIHR5cGU6ICdjaGVja2JveCdcbiAgICAgIH0sIGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgaW5saW5lOiBncm91cFByb3BzLmlubGluZSxcbiAgICAgICAgaWQ6IGlkIHx8ICdjaGVja2JveC0nICsgZ3JvdXBQcm9wcy5uYW1lICsgJy0nICsgdGhpcy5wcm9wcy52YWx1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZUhhbmRsZXIsXG4gICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlICYmIHRoaXMucHJvcHMudmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgZGVmYXVsdENoZWNrZWQ6IHRoaXMuaXNEZWZhdWx0Q2hlY2tlZChncm91cFByb3BzLnZhbHVlKSxcbiAgICAgICAgcmVxdWlyZWQ6IGdyb3VwUHJvcHMucmVxdWlyZWQsXG4gICAgICAgIGxhYmVsOiB0aGlzLnByb3BzLmxhYmVsXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgX3JlYWN0c3RyYXAuRm9ybUdyb3VwLFxuICAgICAgeyBjaGVjazogdHJ1ZSwgaW5saW5lOiBncm91cFByb3BzLmlubGluZSwgZGlzYWJsZWQ6IGF0dHJpYnV0ZXMuZGlzYWJsZWQgfHwgYXR0cmlidXRlcy5yZWFkT25seSB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0c3RyYXAuSW5wdXQsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICBuYW1lOiBncm91cFByb3BzLm5hbWUsXG4gICAgICAgIHR5cGU6ICdjaGVja2JveCdcbiAgICAgIH0sIGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgaWQ6IGlkIHx8ICdjaGVja2JveC0nICsgZ3JvdXBQcm9wcy5uYW1lICsgJy0nICsgdGhpcy5wcm9wcy52YWx1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZUhhbmRsZXIsXG4gICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlICYmIHRoaXMucHJvcHMudmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgZGVmYXVsdENoZWNrZWQ6IHRoaXMuaXNEZWZhdWx0Q2hlY2tlZChncm91cFByb3BzLnZhbHVlKSxcbiAgICAgICAgcmVxdWlyZWQ6IGdyb3VwUHJvcHMucmVxdWlyZWRcbiAgICAgIH0pKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RzdHJhcC5MYWJlbCxcbiAgICAgICAgeyBjaGVjazogdHJ1ZSwgJ2Zvcic6IGlkIHx8ICdjaGVja2JveC0nICsgZ3JvdXBQcm9wcy5uYW1lICsgJy0nICsgdGhpcy5wcm9wcy52YWx1ZSB9LFxuICAgICAgICB0aGlzLnByb3BzLmxhYmVsXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQXZDaGVja2JveDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkF2Q2hlY2tib3guY29udGV4dFR5cGVzID0gKDAsIF9hc3NpZ24yLmRlZmF1bHQpKHt9LCBfQXZJbnB1dDIuZGVmYXVsdC5jb250ZXh0VHlwZXMsIHtcbiAgR3JvdXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn0pO1xuQXZDaGVja2JveC5wcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXMzID0gdGhpcztcblxuICB0aGlzLm9uQ2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgX3RoaXMzLmNvbnRleHQuR3JvdXAudXBkYXRlKGV2ZW50LCBfdGhpczMucHJvcHMudmFsdWUpO1xuICAgIGlmIChfdGhpczMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHZhciBfcHJvcHMyO1xuXG4gICAgICAoX3Byb3BzMiA9IF90aGlzMy5wcm9wcykub25DaGFuZ2UuYXBwbHkoX3Byb3BzMiwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEF2Q2hlY2tib3g7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfa2V5cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpO1xuXG52YXIgX2tleXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24nKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxudmFyIF9yZWdlbmVyYXRvciA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3InKTtcblxudmFyIF9yZWdlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWdlbmVyYXRvcik7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvcicpO1xuXG52YXIgX2FzeW5jVG9HZW5lcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXN5bmNUb0dlbmVyYXRvcjIpO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaXNFcXVhbCA9IHJlcXVpcmUoJ2xvZGFzaC9pc0VxdWFsJyk7XG5cbnZhciBfaXNFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0VxdWFsKTtcblxudmFyIF9pc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpO1xuXG52YXIgX2lzVW5kZWZpbmVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVW5kZWZpbmVkKTtcblxudmFyIF9yZWFjdHN0cmFwID0gcmVxdWlyZSgncmVhY3RzdHJhcCcpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9BdkZlZWRiYWNrID0gcmVxdWlyZSgnLi9BdkZlZWRiYWNrJyk7XG5cbnZhciBfQXZGZWVkYmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdkZlZWRiYWNrKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGh0bWxWYWxpZGF0aW9uQXR0cnMgPSBbJ3JlcXVpcmVkJ107XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgQXZDaGVja2JveEdyb3VwID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoQXZDaGVja2JveEdyb3VwLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBdkNoZWNrYm94R3JvdXAoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEF2Q2hlY2tib3hHcm91cCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGludmFsaWRJbnB1dHM6IHt9LFxuICAgICAgZGlydHlJbnB1dHM6IHt9LFxuICAgICAgdG91Y2hlZElucHV0czoge30sXG4gICAgICBiYWRJbnB1dHM6IHt9LFxuICAgICAgdmFsaWRhdGU6IHt9LFxuICAgICAgdmFsdWU6IFtdXG4gICAgfSwgX3RoaXMuX2lucHV0cyA9IFtdLCBfdGhpcy52YWx1ZSA9IFtdLCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgQXZDaGVja2JveEdyb3VwLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuRm9ybUN0cmwpIHtcbiAgICAgIHRoaXMuRm9ybUN0cmwgPSAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCB0aGlzLmNvbnRleHQuRm9ybUN0cmwpO1xuICAgICAgdGhpcy5Gb3JtQ3RybC5yZWdpc3RlciA9IHRoaXMucmVnaXN0ZXJJbnB1dC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5Gb3JtQ3RybC51bnJlZ2lzdGVyID0gdGhpcy51bnJlZ2lzdGVySW5wdXQuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuRm9ybUN0cmwudmFsaWRhdGUgPSBub29wO1xuICAgIH1cblxuICAgIHZhciB1cGRhdGVHcm91cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMy5kZWZhdWx0KSggLyojX19QVVJFX18qL19yZWdlbmVyYXRvcjIuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvcjIuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICBfdGhpczIudmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMi52YWx1ZSA9IF90aGlzMi52YWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gIT09IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgdmFsdWU6IF90aGlzMi52YWx1ZSB9KTtcblxuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIudmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgIV90aGlzMi5jb250ZXh0LkZvcm1DdHJsLmlzVG91Y2hlZChfdGhpczIucHJvcHMubmFtZSkgJiYgX3RoaXMyLmNvbnRleHQuRm9ybUN0cmwuc2V0VG91Y2hlZChfdGhpczIucHJvcHMubmFtZSk7XG4gICAgICAgICAgICAgICAgIV90aGlzMi5jb250ZXh0LkZvcm1DdHJsLmlzRGlydHkoX3RoaXMyLnByb3BzLm5hbWUpICYmIF90aGlzMi5jb250ZXh0LkZvcm1DdHJsLnNldERpcnR5KF90aGlzMi5wcm9wcy5uYW1lKTtcbiAgICAgICAgICAgICAgICBfdGhpczIucHJvcHMub25DaGFuZ2UgJiYgX3RoaXMyLnByb3BzLm9uQ2hhbmdlKGUsIHZhbHVlKTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIF90aGlzMik7XG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGVHcm91cChfeCwgX3gyKSB7XG4gICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBHcm91cDoge1xuICAgICAgICBnZXRQcm9wczogZnVuY3Rpb24gZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IF90aGlzMi5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgaW5saW5lOiBfdGhpczIucHJvcHMuaW5saW5lLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IF90aGlzMi5wcm9wcy5yZXF1aXJlZCB8fCAhIShfdGhpczIudmFsaWRhdGlvbnMucmVxdWlyZWQgJiYgX3RoaXMyLnZhbGlkYXRpb25zLnJlcXVpcmVkLnZhbHVlKSxcbiAgICAgICAgICAgIHZhbHVlOiBfdGhpczIudmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IHVwZGF0ZUdyb3VwLFxuICAgICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SW5wdXRTdGF0ZTogdGhpcy5nZXRJbnB1dFN0YXRlLmJpbmQodGhpcylcbiAgICAgIH0sXG4gICAgICBGb3JtQ3RybDogdGhpcy5Gb3JtQ3RybFxuICAgIH07XG4gIH07XG5cbiAgQXZDaGVja2JveEdyb3VwLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5nZXREZWZhdWx0VmFsdWUoKS52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gICAgdGhpcy51cGRhdGVWYWxpZGF0aW9ucygpO1xuICB9O1xuXG4gIEF2Q2hlY2tib3hHcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5uYW1lICE9PSB0aGlzLnByb3BzLm5hbWUpIHtcbiAgICAgIHRoaXMuY29udGV4dC5Gb3JtQ3RybC51bnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cbiAgICBpZiAobmV4dFByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbmV4dFByb3BzLnZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBuZXh0UHJvcHMudmFsdWUgfSk7XG4gICAgfVxuICAgIGlmICghKDAsIF9pc0VxdWFsMi5kZWZhdWx0KShuZXh0UHJvcHMsIHRoaXMucHJvcHMpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbGlkYXRpb25zKG5leHRQcm9wcyk7XG4gICAgfVxuICB9O1xuXG4gIEF2Q2hlY2tib3hHcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNvbnRleHQuRm9ybUN0cmwudW5yZWdpc3Rlcih0aGlzKTtcbiAgfTtcblxuICBBdkNoZWNrYm94R3JvdXAucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH07XG5cbiAgQXZDaGVja2JveEdyb3VwLnByb3RvdHlwZS5nZXRJbnB1dFN0YXRlID0gZnVuY3Rpb24gZ2V0SW5wdXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LkZvcm1DdHJsLmdldElucHV0U3RhdGUodGhpcy5wcm9wcy5uYW1lKTtcbiAgfTtcblxuICBBdkNoZWNrYm94R3JvdXAucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICB2YXIga2V5ID0gJ2RlZmF1bHRWYWx1ZSc7XG5cbiAgICB2YXIgdmFsdWUgPSBbXTtcbiAgICBpZiAoISgwLCBfaXNVbmRlZmluZWQyLmRlZmF1bHQpKHRoaXMucHJvcHNba2V5XSkpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcm9wc1trZXldO1xuICAgIH0gZWxzZSBpZiAoISgwLCBfaXNVbmRlZmluZWQyLmRlZmF1bHQpKHRoaXMuY29udGV4dC5Gb3JtQ3RybC5nZXREZWZhdWx0VmFsdWUodGhpcy5wcm9wcy5uYW1lKSkpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5jb250ZXh0LkZvcm1DdHJsLmdldERlZmF1bHRWYWx1ZSh0aGlzLnByb3BzLm5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGtleToga2V5LCB2YWx1ZTogdmFsdWUgfTtcbiAgfTtcblxuICBBdkNoZWNrYm94R3JvdXAucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcmVmMiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjMuZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3IyLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlMigpIHtcbiAgICAgIHJldHVybiBfcmVnZW5lcmF0b3IyLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5Gb3JtQ3RybC52YWxpZGF0ZSh0aGlzLnByb3BzLm5hbWUpO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlSW5wdXRzKCk7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgX2NhbGxlZTIsIHRoaXMpO1xuICAgIH0pKTtcblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xuICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlO1xuICB9KCk7XG5cbiAgQXZDaGVja2JveEdyb3VwLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgdGhpcy51cGRhdGVJbnB1dHMoKTtcbiAgfTtcblxuICBBdkNoZWNrYm94R3JvdXAucHJvdG90eXBlLnVwZGF0ZVZhbGlkYXRpb25zID0gZnVuY3Rpb24gdXBkYXRlVmFsaWRhdGlvbnMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnZhbGlkYXRpb25zID0gKDAsIF9hc3NpZ24yLmRlZmF1bHQpKHt9LCBwcm9wcy52YWxpZGF0ZSk7XG5cbiAgICAoMCwgX2tleXMyLmRlZmF1bHQpKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuIGh0bWxWYWxpZGF0aW9uQXR0cnMuaW5kZXhPZih2YWwpID4gLTE7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgaWYgKHByb3BzW2F0dHJdKSB7XG4gICAgICAgIF90aGlzMy52YWxpZGF0aW9uc1thdHRyXSA9IF90aGlzMy52YWxpZGF0aW9uc1thdHRyXSB8fCB7XG4gICAgICAgICAgdmFsdWU6IHByb3BzW2F0dHJdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgX3RoaXMzLnZhbGlkYXRpb25zW2F0dHJdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jb250ZXh0LkZvcm1DdHJsLnJlZ2lzdGVyKHRoaXMsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfTtcblxuICBBdkNoZWNrYm94R3JvdXAucHJvdG90eXBlLnVwZGF0ZUlucHV0cyA9IGZ1bmN0aW9uIHVwZGF0ZUlucHV0cygpIHtcbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHJldHVybiAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKShpbnB1dCkuZmlyc3RDaGlsZC5zZXRDdXN0b21WYWxpZGl0eSgnSW52YWxpZC4nKSAmJiBpbnB1dC5zZXRTdGF0ZS5jYWxsKGlucHV0LCB7fSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgfTtcblxuICBBdkNoZWNrYm94R3JvdXAucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCkudmFsdWU7XG4gICAgdGhpcy5jb250ZXh0LkZvcm1DdHJsLnNldERpcnR5KHRoaXMucHJvcHMubmFtZSwgZmFsc2UpO1xuICAgIHRoaXMuY29udGV4dC5Gb3JtQ3RybC5zZXRUb3VjaGVkKHRoaXMucHJvcHMubmFtZSwgZmFsc2UpO1xuICAgIHRoaXMuY29udGV4dC5Gb3JtQ3RybC5zZXRCYWQodGhpcy5wcm9wcy5uYW1lLCBmYWxzZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB0aGlzLnByb3BzLm9uUmVzZXQgJiYgdGhpcy5wcm9wcy5vblJlc2V0KHRoaXMudmFsdWUpO1xuICB9O1xuXG4gIEF2Q2hlY2tib3hHcm91cC5wcm90b3R5cGUucmVnaXN0ZXJJbnB1dCA9IGZ1bmN0aW9uIHJlZ2lzdGVySW5wdXQoaW5wdXQpIHtcbiAgICBpZiAodGhpcy5faW5wdXRzLmluZGV4T2YoaW5wdXQpIDwgMCkge1xuICAgICAgdGhpcy5faW5wdXRzLnB1c2goaW5wdXQpO1xuICAgIH1cbiAgfTtcblxuICBBdkNoZWNrYm94R3JvdXAucHJvdG90eXBlLnVucmVnaXN0ZXJJbnB1dCA9IGZ1bmN0aW9uIHVucmVnaXN0ZXJJbnB1dChpbnB1dCkge1xuICAgIHRoaXMuX2lucHV0cyA9IHRoaXMuX2lucHV0cy5maWx0ZXIoZnVuY3Rpb24gKGlwdCkge1xuICAgICAgcmV0dXJuIGlwdCAhPT0gaW5wdXQ7XG4gICAgfSk7XG4gIH07XG5cbiAgQXZDaGVja2JveEdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGxlZ2VuZCA9IHRoaXMucHJvcHMubGFiZWwgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdsZWdlbmQnLFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXMucHJvcHMubGFiZWxcbiAgICApIDogJyc7XG4gICAgdmFyIHZhbGlkYXRpb24gPSB0aGlzLmdldElucHV0U3RhdGUoKTtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb21pdDEgPSBfcHJvcHMuZXJyb3JNZXNzYWdlLFxuICAgICAgICBvbWl0MiA9IF9wcm9wcy52YWxpZGF0ZSxcbiAgICAgICAgb21pdDMgPSBfcHJvcHMudmFsaWRhdGlvbkV2ZW50LFxuICAgICAgICBvbWl0NCA9IF9wcm9wcy5zdGF0ZSxcbiAgICAgICAgb21pdDUgPSBfcHJvcHMubGFiZWwsXG4gICAgICAgIG9taXQ2ID0gX3Byb3BzLnJlcXVpcmVkLFxuICAgICAgICBvbWl0NyA9IF9wcm9wcy5pbmxpbmUsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBhdHRyaWJ1dGVzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2Vycm9yTWVzc2FnZScsICd2YWxpZGF0ZScsICd2YWxpZGF0aW9uRXZlbnQnLCAnc3RhdGUnLCAnbGFiZWwnLCAncmVxdWlyZWQnLCAnaW5saW5lJywgJ2NoaWxkcmVuJ10pO1xuXG5cbiAgICB2YXIgdG91Y2hlZCA9IHRoaXMuY29udGV4dC5Gb3JtQ3RybC5pc1RvdWNoZWQodGhpcy5wcm9wcy5uYW1lKTtcbiAgICB2YXIgaGFzRXJyb3IgPSB0aGlzLmNvbnRleHQuRm9ybUN0cmwuaGFzRXJyb3IodGhpcy5wcm9wcy5uYW1lKTtcblxuICAgIHZhciBjbGFzc2VzID0gKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgnZm9ybS1jb250cm9sIGJvcmRlci0wIHAtMCBoLWF1dG8nLCB0b3VjaGVkID8gJ2lzLXRvdWNoZWQnIDogJ2lzLXVudG91Y2hlZCcsIHRoaXMuY29udGV4dC5Gb3JtQ3RybC5pc0RpcnR5KHRoaXMucHJvcHMubmFtZSkgPyAnaXMtZGlydHknIDogJ2lzLXByaXN0aW5lJywgdGhpcy5jb250ZXh0LkZvcm1DdHJsLmlzQmFkKHRoaXMucHJvcHMubmFtZSkgPyAnaXMtYmFkLWlucHV0JyA6IG51bGwsIGhhc0Vycm9yID8gJ2F2LWludmFsaWQnIDogJ2F2LXZhbGlkJywgdG91Y2hlZCAmJiBoYXNFcnJvciAmJiAnaXMtaW52YWxpZCcpO1xuXG4gICAgdmFyIGdyb3VwQ2xhc3MgPSAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKGF0dHJpYnV0ZXMuY2xhc3NOYW1lLCB0b3VjaGVkICYmIGhhc0Vycm9yICYmICd3YXMtdmFsaWRhdGVkJyk7XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfcmVhY3RzdHJhcC5Gb3JtR3JvdXAsXG4gICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHsgdGFnOiAnZmllbGRzZXQnIH0sIGF0dHJpYnV0ZXMsIHsgY2xhc3NOYW1lOiBncm91cENsYXNzIH0pLFxuICAgICAgbGVnZW5kLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NlcyB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfQXZGZWVkYmFjazIuZGVmYXVsdCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdmFsaWRhdGlvbi5lcnJvck1lc3NhZ2VcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBBdkNoZWNrYm94R3JvdXA7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5BdkNoZWNrYm94R3JvdXAucHJvcFR5cGVzID0gKDAsIF9hc3NpZ24yLmRlZmF1bHQpKHt9LCBfcmVhY3RzdHJhcC5Gb3JtR3JvdXAucHJvcFR5cGVzLCB7XG4gIG5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWRcbn0pO1xuQXZDaGVja2JveEdyb3VwLmNvbnRleHRUeXBlcyA9IHtcbiAgRm9ybUN0cmw6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5BdkNoZWNrYm94R3JvdXAuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIEdyb3VwOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuICBGb3JtQ3RybDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEF2Q2hlY2tib3hHcm91cDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24nKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdHN0cmFwID0gcmVxdWlyZSgncmVhY3RzdHJhcCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQXZGZWVkYmFjayA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEF2RmVlZGJhY2ssIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEF2RmVlZGJhY2soKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgQXZGZWVkYmFjayk7XG4gICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIEF2RmVlZGJhY2sucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgdmFsaWRhdGlvbiA9IHRoaXMuY29udGV4dC5Hcm91cC5nZXRJbnB1dFN0YXRlKCk7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdHN0cmFwLkZvcm1GZWVkYmFjaywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7IHZhbGlkOiAhdmFsaWRhdGlvbi5lcnJvciB9LCB0aGlzLnByb3BzKSk7XG4gIH07XG5cbiAgcmV0dXJuIEF2RmVlZGJhY2s7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5BdkZlZWRiYWNrLnByb3BUeXBlcyA9ICgwLCBfYXNzaWduMi5kZWZhdWx0KSh7fSwgX3JlYWN0c3RyYXAuRm9ybUZlZWRiYWNrLnByb3BUeXBlcyk7XG5BdkZlZWRiYWNrLmNvbnRleHRUeXBlcyA9IHtcbiAgRm9ybUN0cmw6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gIEdyb3VwOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQXZGZWVkYmFjazsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24nKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX0F2SW5wdXQgPSByZXF1aXJlKCcuL0F2SW5wdXQnKTtcblxudmFyIF9BdklucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0F2SW5wdXQpO1xuXG52YXIgX0F2R3JvdXAgPSByZXF1aXJlKCcuL0F2R3JvdXAnKTtcblxudmFyIF9Bdkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0F2R3JvdXApO1xuXG52YXIgX0F2RmVlZGJhY2sgPSByZXF1aXJlKCcuL0F2RmVlZGJhY2snKTtcblxudmFyIF9BdkZlZWRiYWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0F2RmVlZGJhY2spO1xuXG52YXIgX3JlYWN0c3RyYXAgPSByZXF1aXJlKCdyZWFjdHN0cmFwJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjb2xTaXplcyA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXTtcblxudmFyIEF2RmllbGQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShBdkZpZWxkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBdkZpZWxkKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEF2RmllbGQpO1xuICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBBdkZpZWxkLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLkZvcm1DdHJsID0gKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgdGhpcy5jb250ZXh0LkZvcm1DdHJsKTtcbiAgICB2YXIgcmVnaXN0ZXJWYWxpZGF0b3IgPSB0aGlzLkZvcm1DdHJsLnJlZ2lzdGVyO1xuICAgIHRoaXMuRm9ybUN0cmwucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBpbnB1dCAmJiBpbnB1dC5zZXRTdGF0ZSAmJiBpbnB1dC5zZXRTdGF0ZS5iaW5kKGlucHV0KTtcblxuICAgICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHt9KTtcbiAgICAgICAgaWYgKHVwZGF0ZXIpIHVwZGF0ZXIoe30pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgRm9ybUN0cmw6IHRoaXMuRm9ybUN0cmxcbiAgICB9O1xuICB9O1xuXG4gIEF2RmllbGQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcm93ID0gZmFsc2U7XG4gICAgdmFyIGNvbCA9IHt9O1xuICAgIHZhciBsYWJlbENvbCA9IHt9O1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBoZWxwTWVzc2FnZSA9IF9wcm9wcy5oZWxwTWVzc2FnZSxcbiAgICAgICAgbGFiZWwgPSBfcHJvcHMubGFiZWwsXG4gICAgICAgIGxhYmVsSGlkZGVuID0gX3Byb3BzLmxhYmVsSGlkZGVuLFxuICAgICAgICBpbnB1dENsYXNzID0gX3Byb3BzLmlucHV0Q2xhc3MsXG4gICAgICAgIGxhYmVsQ2xhc3MgPSBfcHJvcHMubGFiZWxDbGFzcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIF9wcm9wcyRpZCA9IF9wcm9wcy5pZCxcbiAgICAgICAgaWQgPSBfcHJvcHMkaWQgPT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMubmFtZSA6IF9wcm9wcyRpZCxcbiAgICAgICAgc2l6ZSA9IF9wcm9wcy5zaXplLFxuICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgcmVhZE9ubHkgPSBfcHJvcHMucmVhZE9ubHksXG4gICAgICAgIGdyaWQgPSBfcHJvcHMuZ3JpZCxcbiAgICAgICAgbGFiZWxBdHRycyA9IF9wcm9wcy5sYWJlbEF0dHJzLFxuICAgICAgICBncm91cEF0dHJzID0gX3Byb3BzLmdyb3VwQXR0cnMsXG4gICAgICAgIGF0dHJpYnV0ZXMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnaGVscE1lc3NhZ2UnLCAnbGFiZWwnLCAnbGFiZWxIaWRkZW4nLCAnaW5wdXRDbGFzcycsICdsYWJlbENsYXNzJywgJ2NoaWxkcmVuJywgJ2lkJywgJ3NpemUnLCAnZGlzYWJsZWQnLCAncmVhZE9ubHknLCAnZ3JpZCcsICdsYWJlbEF0dHJzJywgJ2dyb3VwQXR0cnMnXSk7XG5cblxuICAgIGlmIChncmlkKSB7XG4gICAgICBjb2xTaXplcy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xTaXplKSB7XG4gICAgICAgIGlmIChncmlkW2NvbFNpemVdKSB7XG4gICAgICAgICAgcm93ID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgc2l6ZU51bSA9IHBhcnNlSW50KGdyaWRbY29sU2l6ZV0sIDEwKTtcbiAgICAgICAgICBjb2xbY29sU2l6ZV0gPSBzaXplTnVtO1xuICAgICAgICAgIGxhYmVsQ29sW2NvbFNpemVdID0gMTIgLSBzaXplTnVtO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaW5wdXQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIF9BdklucHV0Mi5kZWZhdWx0LFxuICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgY2xhc3NOYW1lOiBpbnB1dENsYXNzLFxuICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIHJlYWRPbmx5OiByZWFkT25seVxuICAgICAgfSwgYXR0cmlidXRlcyksXG4gICAgICBjaGlsZHJlblxuICAgICk7XG5cbiAgICB2YXIgdmFsaWRhdGlvbiA9IHRoaXMuY29udGV4dC5Gb3JtQ3RybC5nZXRJbnB1dFN0YXRlKHRoaXMucHJvcHMubmFtZSk7XG5cbiAgICB2YXIgZmVlZGJhY2sgPSB2YWxpZGF0aW9uLmVycm9yTWVzc2FnZSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgX0F2RmVlZGJhY2syLmRlZmF1bHQsXG4gICAgICBudWxsLFxuICAgICAgdmFsaWRhdGlvbi5lcnJvck1lc3NhZ2VcbiAgICApIDogbnVsbDtcbiAgICB2YXIgaGVscCA9IGhlbHBNZXNzYWdlID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfcmVhY3RzdHJhcC5Gb3JtVGV4dCxcbiAgICAgIG51bGwsXG4gICAgICBoZWxwTWVzc2FnZVxuICAgICkgOiBudWxsO1xuICAgIHZhciBpbnB1dFJvdyA9IHJvdyA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgX3JlYWN0c3RyYXAuQ29sLFxuICAgICAgY29sLFxuICAgICAgaW5wdXQsXG4gICAgICBmZWVkYmFjayxcbiAgICAgIGhlbHBcbiAgICApIDogaW5wdXQ7XG4gICAgdmFyIGNoZWNrID0gYXR0cmlidXRlcy50eXBlID09PSAnY2hlY2tib3gnO1xuXG4gICAgaWYgKChjaGVjayB8fCBhdHRyaWJ1dGVzLnR5cGUgPT09IFwicmFkaW9cIiB8fCBhdHRyaWJ1dGVzLnR5cGUgPT09IFwic3dpdGNoXCIpICYmIChhdHRyaWJ1dGVzLnRhZyA9PT0gX3JlYWN0c3RyYXAuQ3VzdG9tSW5wdXQgfHwgQXJyYXkuaXNBcnJheShhdHRyaWJ1dGVzLnRhZykgJiYgYXR0cmlidXRlcy50YWdbMF0gPT09IF9yZWFjdHN0cmFwLkN1c3RvbUlucHV0KSkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfQXZHcm91cDIuZGVmYXVsdCxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdtYi0wJyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfQXZJbnB1dDIuZGVmYXVsdCxcbiAgICAgICAgICB0aGlzLnByb3BzLFxuICAgICAgICAgIGZlZWRiYWNrLFxuICAgICAgICAgIGhlbHBcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfQXZHcm91cDIuZGVmYXVsdCxcbiAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoeyBjaGVjazogY2hlY2ssIGRpc2FibGVkOiBkaXNhYmxlZCwgcm93OiByb3cgfSwgZ3JvdXBBdHRycyksXG4gICAgICBjaGVjayAmJiBpbnB1dFJvdyxcbiAgICAgIGxhYmVsICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RzdHJhcC5MYWJlbCxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgJ2Zvcic6IGlkLFxuICAgICAgICAgIGNsYXNzTmFtZTogbGFiZWxDbGFzcyxcbiAgICAgICAgICBoaWRkZW46IGxhYmVsSGlkZGVuLFxuICAgICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgfSwgbGFiZWxDb2wsIGxhYmVsQXR0cnMpLFxuICAgICAgICBsYWJlbFxuICAgICAgKSxcbiAgICAgICFjaGVjayAmJiBpbnB1dFJvdyxcbiAgICAgICFyb3cgJiYgZmVlZGJhY2ssXG4gICAgICAhcm93ICYmIGhlbHBcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBBdkZpZWxkO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQXZGaWVsZC5wcm9wVHlwZXMgPSAoMCwgX2Fzc2lnbjIuZGVmYXVsdCkoe30sIF9BdklucHV0Mi5kZWZhdWx0LnByb3BUeXBlcywge1xuICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBsYWJlbEhpZGRlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICByZWFkT25seTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGlucHV0Q2xhc3M6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBsYWJlbENsYXNzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaGVscE1lc3NhZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RdKSxcbiAgZXJyb3JNZXNzYWdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XSksXG4gIGxhYmVsQXR0cnM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBncm91cEF0dHJzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgZ3JpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0pO1xuQXZGaWVsZC5jb250ZXh0VHlwZXMgPSB7XG4gIEZvcm1DdHJsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuQXZGaWVsZC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgRm9ybUN0cmw6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBBdkZpZWxkOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9wcm9taXNlID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UnKTtcblxudmFyIF9wcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb21pc2UpO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcicpO1xuXG52YXIgX3JlZ2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZ2VuZXJhdG9yKTtcblxudmFyIF9rZXlzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7XG5cbnZhciBfa2V5czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJyk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3luY1RvR2VuZXJhdG9yMik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZicpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9BdklucHV0Q29udGFpbmVyID0gcmVxdWlyZSgnLi9BdklucHV0Q29udGFpbmVyJyk7XG5cbnZhciBfQXZJbnB1dENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdklucHV0Q29udGFpbmVyKTtcblxudmFyIF9BdlZhbGlkYXRvciA9IHJlcXVpcmUoJy4vQXZWYWxpZGF0b3InKTtcblxudmFyIF9BdlZhbGlkYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdlZhbGlkYXRvcik7XG5cbnZhciBfcmVhY3RzdHJhcCA9IHJlcXVpcmUoJ3JlYWN0c3RyYXAnKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfZ2V0MiA9IHJlcXVpcmUoJ2xvZGFzaC9nZXQnKTtcblxudmFyIF9nZXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Mik7XG5cbnZhciBfc2V0MiA9IHJlcXVpcmUoJ2xvZGFzaC9zZXQnKTtcblxudmFyIF9zZXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0Mik7XG5cbnZhciBfdGhyb3R0bGUyID0gcmVxdWlyZSgnbG9kYXNoL3Rocm90dGxlJyk7XG5cbnZhciBfdGhyb3R0bGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGhyb3R0bGUyKTtcblxudmFyIF9pc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpO1xuXG52YXIgX2lzU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzU3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdldElucHV0RXJyb3JNZXNzYWdlID0gZnVuY3Rpb24gZ2V0SW5wdXRFcnJvck1lc3NhZ2UoaW5wdXQsIHJ1bGVOYW1lKSB7XG4gIHZhciBlcnJvck1lc3NhZ2UgPSBpbnB1dCAmJiBpbnB1dC5wcm9wcyAmJiBpbnB1dC5wcm9wcy5lcnJvck1lc3NhZ2U7XG5cbiAgaWYgKCh0eXBlb2YgZXJyb3JNZXNzYWdlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGVycm9yTWVzc2FnZSkpID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBlcnJvck1lc3NhZ2VbcnVsZU5hbWVdO1xuICB9XG4gIHJldHVybiBlcnJvck1lc3NhZ2U7XG59O1xuXG52YXIgQXZGb3JtID0gZnVuY3Rpb24gKF9JbnB1dENvbnRhaW5lcikge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShBdkZvcm0sIF9JbnB1dENvbnRhaW5lcik7XG5cbiAgZnVuY3Rpb24gQXZGb3JtKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEF2Rm9ybSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgX0lucHV0Q29udGFpbmVyLmNhbGwuYXBwbHkoX0lucHV0Q29udGFpbmVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpbnZhbGlkSW5wdXRzOiB7fSxcbiAgICAgIGRpcnR5SW5wdXRzOiB7fSxcbiAgICAgIHRvdWNoZWRJbnB1dHM6IHt9LFxuICAgICAgYmFkSW5wdXRzOiB7fSxcbiAgICAgIHN1Ym1pdHRlZDogZmFsc2VcbiAgICB9LCBfdGhpcy52YWxpZGF0aW9ucyA9IHt9LCBfdGhpcy5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjMuZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3IyLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlKGUpIHtcbiAgICAgICAgdmFyIHZhbHVlcywgX3JlZjIsIGlzVmFsaWQsIGVycm9ycztcblxuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yMi5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLmJlZm9yZVN1Ym1pdFZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLmJlZm9yZVN1Ym1pdFZhbGlkYXRpb24oZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGUgJiYgdHlwZW9mIGUucHJldmVudERlZmF1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoJ3JldHVybicpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBfdGhpcy5nZXRWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMudmFsaWRhdGVBbGwodmFsdWVzLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIF9yZWYyID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gX3JlZjIuaXNWYWxpZDtcbiAgICAgICAgICAgICAgICBlcnJvcnMgPSBfcmVmMi5lcnJvcnM7XG5cblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFRvdWNoZWQoKDAsIF9rZXlzMi5kZWZhdWx0KShfdGhpcy5faW5wdXRzKSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlSW5wdXRzKCk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9wcy5vblN1Ym1pdChlLCBlcnJvcnMsIHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLm9uVmFsaWRTdWJtaXQoZSwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgX3RoaXMucHJvcHMub25JbnZhbGlkU3VibWl0KGUsIGVycm9ycywgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAhX3RoaXMuc3RhdGUuc3VibWl0dGVkICYmIF90aGlzLnNldFN0YXRlKHsgc3VibWl0dGVkOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIF90aGlzMik7XG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSgpLCBfdGhpcy5oYW5kbGVOb25Gb3JtU3VibWlzc2lvbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uS2V5RG93bihldmVudCkgIT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicgJiYgKGV2ZW50LndoaWNoID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicpKSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVTdWJtaXQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIEF2Rm9ybS5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIEZvcm1DdHJsOiB7XG4gICAgICAgIGdldERlZmF1bHRWYWx1ZTogdGhpcy5nZXREZWZhdWx0VmFsdWUuYmluZCh0aGlzKSxcbiAgICAgICAgZ2V0SW5wdXRTdGF0ZTogdGhpcy5nZXRJbnB1dFN0YXRlLmJpbmQodGhpcyksXG4gICAgICAgIGdldElucHV0OiBmdW5jdGlvbiBnZXRJbnB1dChuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5faW5wdXRzW25hbWVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRJbnB1dFZhbHVlOiB0aGlzLmdldFZhbHVlLmJpbmQodGhpcyksXG4gICAgICAgIGdldFZhbHVlczogdGhpcy5nZXRWYWx1ZXMuYmluZCh0aGlzKSxcbiAgICAgICAgaGFzRXJyb3I6IHRoaXMuaGFzRXJyb3IuYmluZCh0aGlzKSxcbiAgICAgICAgaXNEaXJ0eTogdGhpcy5pc0RpcnR5LmJpbmQodGhpcyksXG4gICAgICAgIGlzVG91Y2hlZDogdGhpcy5pc1RvdWNoZWQuYmluZCh0aGlzKSxcbiAgICAgICAgaXNCYWQ6IHRoaXMuaXNCYWQuYmluZCh0aGlzKSxcbiAgICAgICAgaXNEaXNhYmxlZDogZnVuY3Rpb24gaXNEaXNhYmxlZCgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLnByb3BzLmRpc2FibGVkO1xuICAgICAgICB9LFxuICAgICAgICBpc1JlYWRPbmx5OiBmdW5jdGlvbiBpc1JlYWRPbmx5KCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMucHJvcHMucmVhZE9ubHk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldERpcnR5OiB0aGlzLnNldERpcnR5LmJpbmQodGhpcyksXG4gICAgICAgIHNldFRvdWNoZWQ6IHRoaXMuc2V0VG91Y2hlZC5iaW5kKHRoaXMpLFxuICAgICAgICBzZXRCYWQ6IHRoaXMuc2V0QmFkLmJpbmQodGhpcyksXG4gICAgICAgIHJlZ2lzdGVyOiB0aGlzLnJlZ2lzdGVySW5wdXQuYmluZCh0aGlzKSxcbiAgICAgICAgdW5yZWdpc3RlcjogdGhpcy51bnJlZ2lzdGVySW5wdXQuYmluZCh0aGlzKSxcbiAgICAgICAgdmFsaWRhdGU6IHRoaXMudmFsaWRhdGVJbnB1dC5iaW5kKHRoaXMpLFxuICAgICAgICBnZXRWYWxpZGF0aW9uRXZlbnQ6IGZ1bmN0aW9uIGdldFZhbGlkYXRpb25FdmVudCgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLnByb3BzLnZhbGlkYXRpb25FdmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgcGFyZW50OiB0aGlzLmNvbnRleHQuRm9ybUN0cmwgfHwgbnVsbFxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgQXZGb3JtLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgX0lucHV0Q29udGFpbmVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuX3ZhbGlkYXRvcnMgPSB7fTtcbiAgfTtcblxuICBBdkZvcm0ucHJvdG90eXBlLnJlZ2lzdGVySW5wdXQgPSBmdW5jdGlvbiByZWdpc3RlcklucHV0KGlucHV0LCB1cGRhdGVyKSB7XG4gICAgX0lucHV0Q29udGFpbmVyLnByb3RvdHlwZS5yZWdpc3RlcklucHV0LmNhbGwodGhpcywgaW5wdXQsIHVwZGF0ZXIpO1xuXG4gICAgaWYgKCgwLCBfdHlwZW9mMy5kZWZhdWx0KShpbnB1dC52YWxpZGF0aW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLl92YWxpZGF0b3JzW2lucHV0LnByb3BzLm5hbWVdID0gdGhpcy5jb21waWxlVmFsaWRhdGlvblJ1bGVzKGlucHV0LCBpbnB1dC52YWxpZGF0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIEF2Rm9ybS5wcm90b3R5cGUudW5yZWdpc3RlcklucHV0ID0gZnVuY3Rpb24gdW5yZWdpc3RlcklucHV0KGlucHV0KSB7XG4gICAgX0lucHV0Q29udGFpbmVyLnByb3RvdHlwZS51bnJlZ2lzdGVySW5wdXQuY2FsbCh0aGlzLCBpbnB1dCk7XG5cbiAgICBkZWxldGUgdGhpcy5fdmFsaWRhdG9yc1tpbnB1dC5wcm9wcy5uYW1lXTtcbiAgICB0aGlzLnNldEVycm9yKGlucHV0LnByb3BzLm5hbWUsIGZhbHNlKTtcbiAgICB0aGlzLnNldERpcnR5KGlucHV0LnByb3BzLm5hbWUsIGZhbHNlKTtcbiAgICB0aGlzLnNldFRvdWNoZWQoaW5wdXQucHJvcHMubmFtZSwgZmFsc2UpO1xuICAgIHRoaXMuc2V0QmFkKGlucHV0LnByb3BzLm5hbWUsIGZhbHNlKTtcbiAgfTtcblxuICBBdkZvcm0ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgVGFnID0gX3Byb3BzLnRhZyxcbiAgICAgICAgb21pdDEgPSBfcHJvcHMuZXJyb3JNZXNzYWdlLFxuICAgICAgICBvbWl0MiA9IF9wcm9wcy5tb2RlbCxcbiAgICAgICAgb21pdDMgPSBfcHJvcHMub25WYWxpZFN1Ym1pdCxcbiAgICAgICAgb21pdDQgPSBfcHJvcHMub25JbnZhbGlkU3VibWl0LFxuICAgICAgICBvbWl0NSA9IF9wcm9wcy52YWxpZGF0ZSxcbiAgICAgICAgb21pdDYgPSBfcHJvcHMudmFsaWRhdGVPbmUsXG4gICAgICAgIG9taXQ3ID0gX3Byb3BzLnZhbGlkYXRlQWxsLFxuICAgICAgICBvbWl0OCA9IF9wcm9wcy52YWxpZGF0aW9uRXZlbnQsXG4gICAgICAgIG9taXQ5ID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICBvbWl0MTAgPSBfcHJvcHMucmVhZE9ubHksXG4gICAgICAgIG9taXQxMSA9IF9wcm9wcy5iZWZvcmVTdWJtaXRWYWxpZGF0aW9uLFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBhdHRyaWJ1dGVzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ3RhZycsICdlcnJvck1lc3NhZ2UnLCAnbW9kZWwnLCAnb25WYWxpZFN1Ym1pdCcsICdvbkludmFsaWRTdWJtaXQnLCAndmFsaWRhdGUnLCAndmFsaWRhdGVPbmUnLCAndmFsaWRhdGVBbGwnLCAndmFsaWRhdGlvbkV2ZW50JywgJ2Rpc2FibGVkJywgJ3JlYWRPbmx5JywgJ2JlZm9yZVN1Ym1pdFZhbGlkYXRpb24nLCAnY2xhc3NOYW1lJ10pO1xuXG5cbiAgICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoY2xhc3NOYW1lLCB0aGlzLnN0YXRlLnN1Ym1pdHRlZCA/ICdhdi1zdWJtaXR0ZWQnIDogZmFsc2UsICgwLCBfa2V5czIuZGVmYXVsdCkodGhpcy5zdGF0ZS5pbnZhbGlkSW5wdXRzKS5sZW5ndGggPiAwID8gJ2F2LWludmFsaWQnIDogJ2F2LXZhbGlkJyk7XG5cbiAgICBpZiAoVGFnICE9PSAnZm9ybScgJiYgVGFnICE9PSBfcmVhY3RzdHJhcC5Gb3JtKSB7XG4gICAgICBhdHRyaWJ1dGVzLm9uS2V5RG93biA9IHRoaXMuaGFuZGxlTm9uRm9ybVN1Ym1pc3Npb247XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRhZywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7IG5vVmFsaWRhdGU6IHRydWUsXG4gICAgICBhY3Rpb246ICcjJ1xuICAgIH0sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIG9uU3VibWl0OiB0aGlzLmhhbmRsZVN1Ym1pdFxuICAgIH0pKTtcbiAgfTtcblxuICBBdkZvcm0ucHJvdG90eXBlLmdldFZhbHVlcyA9IGZ1bmN0aW9uIGdldFZhbHVlcygpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHJldHVybiAoMCwgX2tleXMyLmRlZmF1bHQpKHRoaXMuX2lucHV0cykucmVkdWNlKGZ1bmN0aW9uICh2YWx1ZXMsIGlucHV0TmFtZSkge1xuICAgICAgKDAsIF9zZXQzLmRlZmF1bHQpKHZhbHVlcywgaW5wdXROYW1lLCBfdGhpczQuZ2V0VmFsdWUoaW5wdXROYW1lKSk7XG5cbiAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfSwge30pO1xuICB9O1xuXG4gIEF2Rm9ybS5wcm90b3R5cGUuc3VibWl0ID0gZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIHRoaXMuaGFuZGxlU3VibWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgQXZGb3JtLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgKDAsIF9rZXlzMi5kZWZhdWx0KSh0aGlzLl9pbnB1dHMpLmZvckVhY2goZnVuY3Rpb24gKGlucHV0TmFtZSkge1xuICAgICAgcmV0dXJuIF90aGlzNS5faW5wdXRzW2lucHV0TmFtZV0gJiYgX3RoaXM1Ll9pbnB1dHNbaW5wdXROYW1lXS5yZXNldCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIEF2Rm9ybS5wcm90b3R5cGUudXBkYXRlSW5wdXRzID0gZnVuY3Rpb24gdXBkYXRlSW5wdXRzKCkge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMudGhyb3R0bGVkVXBkYXRlSW5wdXRzKSB7XG4gICAgICB0aGlzLnRocm90dGxlZFVwZGF0ZUlucHV0cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0aGlzIGlzIGp1c3QgdW50aWwgYSBtb3JlIGludGVsbGlnZW50IHdheSB0byBkZXRlcm1pbmUgd2hpY2ggaW5wdXRzIG5lZWQgdXBkYXRlZCBpcyBpbXBsZW1lbnRlZCBpbiB2M1xuICAgIHRoaXMudGhyb3R0bGVkVXBkYXRlSW5wdXRzID0gKDAsIF90aHJvdHRsZTMuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgKDAsIF9rZXlzMi5kZWZhdWx0KShfdGhpczYuX3VwZGF0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNi5fdXBkYXRlcnNbaW5wdXROYW1lXSAmJiBfdGhpczYuX2lucHV0c1tpbnB1dE5hbWVdICYmIF90aGlzNi5fdXBkYXRlcnNbaW5wdXROYW1lXS5jYWxsKF90aGlzNi5faW5wdXRzW2lucHV0TmFtZV0sIHt9KTtcbiAgICAgIH0pO1xuICAgIH0sIDI1MCk7XG4gICAgdGhpcy51cGRhdGVJbnB1dHMoKTtcbiAgfTtcblxuICBBdkZvcm0ucHJvdG90eXBlLnZhbGlkYXRlSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYzID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMy5kZWZhdWx0KSggLyojX19QVVJFX18qL19yZWdlbmVyYXRvcjIuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKG5hbWUpIHtcbiAgICAgIHJldHVybiBfcmVnZW5lcmF0b3IyLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVPbmUobmFtZSwgdGhpcy5nZXRWYWx1ZXMoKSk7XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgX2NhbGxlZTIsIHRoaXMpO1xuICAgIH0pKTtcblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoX3gyKSB7XG4gICAgICByZXR1cm4gX3JlZjMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVJbnB1dDtcbiAgfSgpO1xuXG4gIEF2Rm9ybS5wcm90b3R5cGUuZ2V0SW5wdXRTdGF0ZSA9IGZ1bmN0aW9uIGdldElucHV0U3RhdGUoaW5wdXROYW1lKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IHZvaWQgMDtcbiAgICB2YXIgZXJyb3IgPSB0aGlzLmlzVG91Y2hlZChpbnB1dE5hbWUpICYmIHRoaXMuaGFzRXJyb3IoaW5wdXROYW1lKTtcbiAgICB2YXIgY29sb3IgPSB2b2lkIDA7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IHRoaXMuc3RhdGUuaW52YWxpZElucHV0c1tpbnB1dE5hbWVdO1xuICAgICAgY29sb3IgPSAnZGFuZ2VyJztcbiAgICAgIGlmICghKDAsIF9pc1N0cmluZzIuZGVmYXVsdCkoZXJyb3JNZXNzYWdlKSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UgPSAnVGhpcyBmaWVsZCBpcyBpbnZhbGlkJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBjb2xvcjogY29sb3IsIGVycm9yOiBlcnJvciwgZXJyb3JNZXNzYWdlOiBlcnJvck1lc3NhZ2UgfTtcbiAgfTtcblxuICBBdkZvcm0ucHJvdG90eXBlLmhhc0Vycm9yID0gZnVuY3Rpb24gaGFzRXJyb3IoaW5wdXROYW1lKSB7XG4gICAgcmV0dXJuIGlucHV0TmFtZSA/ICEhdGhpcy5zdGF0ZS5pbnZhbGlkSW5wdXRzW2lucHV0TmFtZV0gOiAoMCwgX2tleXMyLmRlZmF1bHQpKHRoaXMuc3RhdGUuaW52YWxpZElucHV0cykubGVuZ3RoID4gMDtcbiAgfTtcblxuICBBdkZvcm0ucHJvdG90eXBlLmlzRGlydHkgPSBmdW5jdGlvbiBpc0RpcnR5KGlucHV0TmFtZSkge1xuICAgIHJldHVybiBpbnB1dE5hbWUgPyAhIXRoaXMuc3RhdGUuZGlydHlJbnB1dHNbaW5wdXROYW1lXSA6ICgwLCBfa2V5czIuZGVmYXVsdCkodGhpcy5zdGF0ZS5kaXJ0eUlucHV0cykubGVuZ3RoID4gMDtcbiAgfTtcblxuICBBdkZvcm0ucHJvdG90eXBlLmlzVG91Y2hlZCA9IGZ1bmN0aW9uIGlzVG91Y2hlZChpbnB1dE5hbWUpIHtcbiAgICByZXR1cm4gaW5wdXROYW1lID8gISF0aGlzLnN0YXRlLnRvdWNoZWRJbnB1dHNbaW5wdXROYW1lXSA6ICgwLCBfa2V5czIuZGVmYXVsdCkodGhpcy5zdGF0ZS50b3VjaGVkSW5wdXRzKS5sZW5ndGggPiAwO1xuICB9O1xuXG4gIEF2Rm9ybS5wcm90b3R5cGUuaXNCYWQgPSBmdW5jdGlvbiBpc0JhZChpbnB1dE5hbWUpIHtcbiAgICByZXR1cm4gaW5wdXROYW1lID8gISF0aGlzLnN0YXRlLmJhZElucHV0c1tpbnB1dE5hbWVdIDogKDAsIF9rZXlzMi5kZWZhdWx0KSh0aGlzLnN0YXRlLmJhZElucHV0cykubGVuZ3RoID4gMDtcbiAgfTtcblxuICBBdkZvcm0ucHJvdG90eXBlLnNldEVycm9yID0gZnVuY3Rpb24gc2V0RXJyb3IoaW5wdXROYW1lKSB7XG4gICAgdmFyIGVycm9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICB2YXIgZXJyVGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZXJyb3I7XG4gICAgdmFyIHVwZGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogdHJ1ZTtcblxuICAgIGlmIChlcnJvciAmJiAhKDAsIF9pc1N0cmluZzIuZGVmYXVsdCkoZXJyVGV4dCkgJiYgdHlwZW9mIGVyclRleHQgIT09ICdib29sZWFuJykge1xuICAgICAgZXJyVGV4dCA9IGVyclRleHQgKyAnJztcbiAgICB9XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgY3VycmVudEVycm9yID0gdGhpcy5oYXNFcnJvcihpbnB1dE5hbWUpO1xuICAgIHZhciBpbnZhbGlkSW5wdXRzID0gdGhpcy5zdGF0ZS5pbnZhbGlkSW5wdXRzO1xuXG4gICAgaWYgKChpbnZhbGlkSW5wdXRzW2lucHV0TmFtZV0gPT09IHVuZGVmaW5lZCAmJiAhZXJyb3IgfHwgaW52YWxpZElucHV0c1tpbnB1dE5hbWVdID09PSAoZXJyVGV4dCB8fCB0cnVlKSkgJiYgZXJyb3IgPT09IGN1cnJlbnRFcnJvcikgcmV0dXJuO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgaW52YWxpZElucHV0c1tpbnB1dE5hbWVdID0gZXJyVGV4dCB8fCB0cnVlO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBpbnZhbGlkSW5wdXRzW2lucHV0TmFtZV07XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWNoYW5nZWQpIHJldHVybjtcblxuICAgIGludmFsaWRJbnB1dHMgPSAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCB0aGlzLnN0YXRlLmludmFsaWRJbnB1dHMpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnZhbGlkSW5wdXRzOiBpbnZhbGlkSW5wdXRzIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh1cGRhdGUpIF90aGlzNy51cGRhdGVJbnB1dHMoKTtcbiAgICB9KTtcbiAgfTtcblxuICBBdkZvcm0ucHJvdG90eXBlLnNldERpcnR5ID0gZnVuY3Rpb24gc2V0RGlydHkoaW5wdXRzKSB7XG4gICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICB2YXIgZGlydHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICAgdmFyIHVwZGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcblxuICAgIHZhciBkaXJ0eUlucHV0cyA9IHRoaXMuc3RhdGUuZGlydHlJbnB1dHM7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXRzKSkge1xuICAgICAgaW5wdXRzID0gW2lucHV0c107XG4gICAgfVxuICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dE5hbWUpIHtcbiAgICAgIGlmIChkaXJ0eSAmJiAhZGlydHlJbnB1dHNbaW5wdXROYW1lXSkge1xuICAgICAgICBkaXJ0eUlucHV0c1tpbnB1dE5hbWVdID0gdHJ1ZTtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKCFkaXJ0eSAmJiBkaXJ0eUlucHV0c1tpbnB1dE5hbWVdKSB7XG4gICAgICAgIGRlbGV0ZSBkaXJ0eUlucHV0c1tpbnB1dE5hbWVdO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghY2hhbmdlZCkgcmV0dXJuO1xuXG4gICAgZGlydHlJbnB1dHMgPSAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCB0aGlzLnN0YXRlLmRpcnR5SW5wdXRzKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlydHlJbnB1dHM6IGRpcnR5SW5wdXRzIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh1cGRhdGUpIF90aGlzOC51cGRhdGVJbnB1dHMoKTtcbiAgICB9KTtcbiAgfTtcblxuICBBdkZvcm0ucHJvdG90eXBlLnNldFRvdWNoZWQgPSBmdW5jdGlvbiBzZXRUb3VjaGVkKGlucHV0cykge1xuICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgdmFyIHRvdWNoZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICAgdmFyIHVwZGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcblxuICAgIHZhciB0b3VjaGVkSW5wdXRzID0gdGhpcy5zdGF0ZS50b3VjaGVkSW5wdXRzO1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0cykpIHtcbiAgICAgIGlucHV0cyA9IFtpbnB1dHNdO1xuICAgIH1cbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXROYW1lKSB7XG4gICAgICBpZiAodG91Y2hlZCAmJiAhdG91Y2hlZElucHV0c1tpbnB1dE5hbWVdKSB7XG4gICAgICAgIHRvdWNoZWRJbnB1dHNbaW5wdXROYW1lXSA9IHRydWU7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICghdG91Y2hlZCAmJiB0b3VjaGVkSW5wdXRzW2lucHV0TmFtZV0pIHtcbiAgICAgICAgZGVsZXRlIHRvdWNoZWRJbnB1dHNbaW5wdXROYW1lXTtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWNoYW5nZWQpIHJldHVybjtcblxuICAgIHRvdWNoZWRJbnB1dHMgPSAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCB0aGlzLnN0YXRlLnRvdWNoZWRJbnB1dHMpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0b3VjaGVkSW5wdXRzOiB0b3VjaGVkSW5wdXRzIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh1cGRhdGUpIF90aGlzOS51cGRhdGVJbnB1dHMoKTtcbiAgICB9KTtcbiAgfTtcblxuICBBdkZvcm0ucHJvdG90eXBlLnNldEJhZCA9IGZ1bmN0aW9uIHNldEJhZChpbnB1dHMpIHtcbiAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICB2YXIgaXNCYWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICAgdmFyIHVwZGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcblxuICAgIHZhciBiYWRJbnB1dHMgPSB0aGlzLnN0YXRlLmJhZElucHV0cztcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dHMpKSB7XG4gICAgICBpbnB1dHMgPSBbaW5wdXRzXTtcbiAgICB9XG4gICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0TmFtZSkge1xuICAgICAgaWYgKGlzQmFkICYmICFiYWRJbnB1dHNbaW5wdXROYW1lXSkge1xuICAgICAgICBiYWRJbnB1dHNbaW5wdXROYW1lXSA9IHRydWU7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICghaXNCYWQgJiYgYmFkSW5wdXRzW2lucHV0TmFtZV0pIHtcbiAgICAgICAgZGVsZXRlIGJhZElucHV0c1tpbnB1dE5hbWVdO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghY2hhbmdlZCkgcmV0dXJuO1xuXG4gICAgYmFkSW5wdXRzID0gKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgdGhpcy5zdGF0ZS5iYWRJbnB1dHMpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBiYWRJbnB1dHM6IGJhZElucHV0cyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodXBkYXRlKSBfdGhpczEwLnVwZGF0ZUlucHV0cygpO1xuICAgIH0pO1xuICB9O1xuXG4gIEF2Rm9ybS5wcm90b3R5cGUudmFsaWRhdGVPbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWY0ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMy5kZWZhdWx0KSggLyojX19QVVJFX18qL19yZWdlbmVyYXRvcjIuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKGlucHV0TmFtZSwgY29udGV4dCkge1xuICAgICAgdmFyIHVwZGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcbiAgICAgIHZhciBpbnB1dCwgdmFsdWUsIHZhbGlkYXRlLCBpc1ZhbGlkLCByZXN1bHQsIGVycm9yO1xuICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvcjIuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzJChfY29udGV4dDMpIHtcbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgaW5wdXQgPSB0aGlzLl9pbnB1dHNbaW5wdXROYW1lXTtcblxuICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdWx0aXBsZSBpbnB1dHMgY2Fubm90IHVzZSB0aGUgc2FtZSBuYW1lOiBcIicgKyBpbnB1dE5hbWUgKyAnXCInKTtcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICB2YWx1ZSA9ICgwLCBfZ2V0My5kZWZhdWx0KShjb250ZXh0LCBpbnB1dE5hbWUpO1xuICAgICAgICAgICAgICB2YWxpZGF0ZSA9IGlucHV0LnZhbGlkYXRpb25zO1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICBlcnJvciA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICBpZiAoISh0eXBlb2YgdmFsaWRhdGUgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAxNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTE7XG4gICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZSh2YWx1ZSwgY29udGV4dCwgaW5wdXQpO1xuXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICByZXN1bHQgPSBfY29udGV4dDMuc2VudDtcbiAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyMTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgIGlmICghKCh0eXBlb2YgdmFsaWRhdGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkodmFsaWRhdGUpKSA9PT0gJ29iamVjdCcpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTc7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3JzW2lucHV0TmFtZV0odmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICByZXN1bHQgPSBfY29udGV4dDMuc2VudDtcbiAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyMTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgICAgIGNhc2UgMjE6XG5cbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmICgoMCwgX2lzU3RyaW5nMi5kZWZhdWx0KShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvciA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnNldEVycm9yKGlucHV0TmFtZSwgIWlzVmFsaWQsIGVycm9yLCB1cGRhdGUpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KCdyZXR1cm4nLCBpc1ZhbGlkKTtcblxuICAgICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgX2NhbGxlZTMsIHRoaXMpO1xuICAgIH0pKTtcblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlT25lKF94MTIsIF94MTMpIHtcbiAgICAgIHJldHVybiBfcmVmNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZU9uZTtcbiAgfSgpO1xuXG4gIEF2Rm9ybS5wcm90b3R5cGUudmFsaWRhdGVBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWY1ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMy5kZWZhdWx0KSggLyojX19QVVJFX18qL19yZWdlbmVyYXRvcjIuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0KGNvbnRleHQpIHtcbiAgICAgIHZhciB1cGRhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICAgICB2YXIgZXJyb3JzLCBpc1ZhbGlkLCBpbnB1dE5hbWUsIHZhbGlkLCBmb3JtTGV2ZWxWYWxpZGF0aW9uO1xuICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvcjIuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0JChfY29udGV4dDQpIHtcbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NC5wcmV2ID0gX2NvbnRleHQ0Lm5leHQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgZXJyb3JzID0gW107XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICBfY29udGV4dDQudDAgPSBfcmVnZW5lcmF0b3IyLmRlZmF1bHQua2V5cyh0aGlzLl9pbnB1dHMpO1xuXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGlmICgoX2NvbnRleHQ0LnQxID0gX2NvbnRleHQ0LnQwKCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDEyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaW5wdXROYW1lID0gX2NvbnRleHQ0LnQxLnZhbHVlO1xuXG4gICAgICAgICAgICAgIGlmICghdGhpcy5faW5wdXRzLmhhc093blByb3BlcnR5KGlucHV0TmFtZSkpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDEwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSA4O1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZU9uZShpbnB1dE5hbWUsIGNvbnRleHQsIHVwZGF0ZSk7XG5cbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgdmFsaWQgPSBfY29udGV4dDQuc2VudDtcblxuICAgICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGlucHV0TmFtZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAzO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMjpcblxuICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy52YWxpZGF0ZSkge1xuICAgICAgICAgICAgICAgIGZvcm1MZXZlbFZhbGlkYXRpb24gPSB0aGlzLnByb3BzLnZhbGlkYXRlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1MZXZlbFZhbGlkYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICBmb3JtTGV2ZWxWYWxpZGF0aW9uID0gW2Zvcm1MZXZlbFZhbGlkYXRpb25dO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZm9ybUxldmVsVmFsaWRhdGlvbi5ldmVyeShmdW5jdGlvbiAodmFsaWRhdGlvbkZuKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGlvbkZuKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaCgnKicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuYWJydXB0KCdyZXR1cm4nLCB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZDogaXNWYWxpZCxcbiAgICAgICAgICAgICAgICBlcnJvcnM6IGVycm9yc1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgX2NhbGxlZTQsIHRoaXMpO1xuICAgIH0pKTtcblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlQWxsKF94MTUpIHtcbiAgICAgIHJldHVybiBfcmVmNS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZUFsbDtcbiAgfSgpO1xuXG4gIEF2Rm9ybS5wcm90b3R5cGUuY29tcGlsZVZhbGlkYXRpb25SdWxlcyA9IGZ1bmN0aW9uIGNvbXBpbGVWYWxpZGF0aW9uUnVsZXMoaW5wdXQsIHJ1bGVQcm9wKSB7XG4gICAgdmFyIF90aGlzMTEgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmNiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjMuZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3IyLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlNSh2YWwsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCwgdmFsaWRhdGlvbnMsIF9sb29wLCBydWxlO1xuXG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3IyLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlNSQoX2NvbnRleHQ1KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1LnByZXYgPSBfY29udGV4dDUubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpczExLmlzQmFkKGlucHV0LnByb3BzLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LmFicnVwdCgncmV0dXJuJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zID0gW107XG5cbiAgICAgICAgICAgICAgICBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuICAgICAgICAgICAgICAgICAgaWYgKHJ1bGVQcm9wLmhhc093blByb3BlcnR5KHJ1bGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBydWxlUmVzdWx0ID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IF9wcm9taXNlMi5kZWZhdWx0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyB2YWx1ZTogdmFsdWUsIHJ1bGU6IHJ1bGUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcnVsZVByb3BbcnVsZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVSZXN1bHQgPSBydWxlUHJvcFtydWxlXSh2YWwsIGNvbnRleHQsIGlucHV0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX0F2VmFsaWRhdG9yMi5kZWZhdWx0W3J1bGVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKCdJbnZhbGlkIGlucHV0IHZhbGlkYXRpb24gcnVsZTogXCInICsgcnVsZSArICdcIicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGVQcm9wW3J1bGVdLmVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVSZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZVJlc3VsdCA9IF9BdlZhbGlkYXRvcjIuZGVmYXVsdFtydWxlXSh2YWwsIGNvbnRleHQsIHJ1bGVQcm9wW3J1bGVdLCBpbnB1dCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChydWxlUmVzdWx0ICYmIHR5cGVvZiBydWxlUmVzdWx0LnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVSZXN1bHQudGhlbihjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChydWxlUmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJ1bGVSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGV5IGFyZSB1c2luZyB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGZvciAocnVsZSBpbiBydWxlUHJvcCkge1xuICAgICAgICAgICAgICAgICAgX2xvb3AocnVsZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA4O1xuICAgICAgICAgICAgICAgIHJldHVybiBfcHJvbWlzZTIuZGVmYXVsdC5hbGwodmFsaWRhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdHMuZXZlcnkoZnVuY3Rpb24gKHJ1bGVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSAmJiBydWxlUmVzdWx0LnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKDAsIF9pc1N0cmluZzIuZGVmYXVsdCkocnVsZVJlc3VsdC52YWx1ZSkgJiYgcnVsZVJlc3VsdC52YWx1ZSB8fCBnZXRJbnB1dEVycm9yTWVzc2FnZShpbnB1dCwgcnVsZVJlc3VsdC5ydWxlKSB8fCBnZXRJbnB1dEVycm9yTWVzc2FnZShfdGhpczExLCBydWxlUmVzdWx0LnJ1bGUpIHx8IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgPT09IHRydWU7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoJ3JldHVybicsIHJlc3VsdCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTUsIF90aGlzMTEpO1xuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKF94MTcsIF94MTgpIHtcbiAgICAgICAgcmV0dXJuIF9yZWY2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0oKTtcbiAgfTtcblxuICBBdkZvcm0ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZShpbnB1dE5hbWUpIHtcbiAgICByZXR1cm4gKDAsIF9nZXQzLmRlZmF1bHQpKHRoaXMucHJvcHMubW9kZWwsIGlucHV0TmFtZSk7XG4gIH07XG5cbiAgQXZGb3JtLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFZhbHVlKGlucHV0TmFtZSkge1xuICAgIHZhciBpbnB1dCA9IHRoaXMuX2lucHV0c1tpbnB1dE5hbWVdO1xuXG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdWx0aXBsZSBpbnB1dHMgY2Fubm90IHVzZSB0aGUgc2FtZSBuYW1lOiBcIicgKyBpbnB1dE5hbWUgKyAnXCInKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5wdXQuZ2V0VmFsdWUoKTtcbiAgfTtcblxuICByZXR1cm4gQXZGb3JtO1xufShfQXZJbnB1dENvbnRhaW5lcjIuZGVmYXVsdCk7XG5cbkF2Rm9ybS5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgRm9ybUN0cmw6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5BdkZvcm0uY29udGV4dFR5cGVzID0ge1xuICBGb3JtQ3RybDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5BdkZvcm0ucHJvcFR5cGVzID0ge1xuICB0YWc6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSksXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIG1vZGVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgbWV0aG9kOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnZ2V0JywgJ3Bvc3QnXSksXG4gIG9uU3VibWl0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGJlZm9yZVN1Ym1pdFZhbGlkYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgdmFsaWRhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXldKSxcbiAgb25WYWxpZFN1Ym1pdDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkludmFsaWRTdWJtaXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgdmFsaWRhdGlvbkV2ZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ29uSW5wdXQnLCAnb25DaGFuZ2UnLCAnb25CbHVyJywgJ29uRm9jdXMnXSksIF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnb25JbnB1dCcsICdvbkNoYW5nZScsICdvbkJsdXInLCAnb25Gb2N1cyddKSldKSxcbiAgZXJyb3JNZXNzYWdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVdKSxcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcmVhZE9ubHk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbFxufTtcbkF2Rm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRhZzogX3JlYWN0c3RyYXAuRm9ybSxcbiAgbW9kZWw6IHt9LFxuICB2YWxpZGF0aW9uRXZlbnQ6IFsnb25DaGFuZ2UnLCAnb25JbnB1dCddLFxuICBtZXRob2Q6ICdnZXQnLFxuICBvblN1Ym1pdDogZnVuY3Rpb24gb25TdWJtaXQoKSB7fSxcbiAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oKSB7fSxcbiAgb25WYWxpZFN1Ym1pdDogZnVuY3Rpb24gb25WYWxpZFN1Ym1pdCgpIHt9LFxuICBvbkludmFsaWRTdWJtaXQ6IGZ1bmN0aW9uIG9uSW52YWxpZFN1Ym1pdCgpIHt9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQXZGb3JtOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbicpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdHN0cmFwID0gcmVxdWlyZSgncmVhY3RzdHJhcCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQXZHcm91cCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEF2R3JvdXAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEF2R3JvdXAocHJvcHMpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBBdkdyb3VwKTtcblxuICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHsgaW5wdXQ6IHsgcHJvcHM6IHt9IH0gfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBBdkdyb3VwLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLkZvcm1DdHJsID0gKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgdGhpcy5jb250ZXh0LkZvcm1DdHJsKTtcbiAgICB2YXIgcmVnaXN0ZXJWYWxpZGF0b3IgPSB0aGlzLkZvcm1DdHJsLnJlZ2lzdGVyO1xuICAgIHRoaXMuRm9ybUN0cmwucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGlucHV0OiBpbnB1dCB9KTtcbiAgICAgIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0LCBfdGhpczIudXBkYXRlLmJpbmQoX3RoaXMyLCBpbnB1dCkpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIEdyb3VwOiB7XG4gICAgICAgIGdldElucHV0OiBmdW5jdGlvbiBnZXRJbnB1dCgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnN0YXRlLmlucHV0O1xuICAgICAgICB9LFxuICAgICAgICBnZXRJbnB1dFN0YXRlOiB0aGlzLmdldElucHV0U3RhdGUuYmluZCh0aGlzKVxuICAgICAgfSxcbiAgICAgIEZvcm1DdHJsOiB0aGlzLkZvcm1DdHJsXG4gICAgfTtcbiAgfTtcblxuICBBdkdyb3VwLnByb3RvdHlwZS5nZXRJbnB1dFN0YXRlID0gZnVuY3Rpb24gZ2V0SW5wdXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LkZvcm1DdHJsLmdldElucHV0U3RhdGUodGhpcy5zdGF0ZS5pbnB1dC5wcm9wcy5uYW1lKTtcbiAgfTtcblxuICBBdkdyb3VwLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgJiYgaW5wdXQuc2V0U3RhdGUpIGlucHV0LnNldFN0YXRlLmNhbGwoaW5wdXQsIHt9KTtcbiAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgfTtcblxuICBBdkdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHZhbGlkYXRpb24gPSB0aGlzLmdldElucHV0U3RhdGUoKTtcbiAgICB2YXIgY2xhc3NuYW1lID0gKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdmFsaWRhdGlvbi5jb2xvciAmJiAndGV4dC0nICsgdmFsaWRhdGlvbi5jb2xvcik7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdHN0cmFwLkZvcm1Hcm91cCwgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7IGNsYXNzTmFtZTogY2xhc3NuYW1lIH0sIHRoaXMucHJvcHMpKTtcbiAgfTtcblxuICByZXR1cm4gQXZHcm91cDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkF2R3JvdXAucHJvcFR5cGVzID0gKDAsIF9hc3NpZ24yLmRlZmF1bHQpKHt9LCBfcmVhY3RzdHJhcC5Gb3JtR3JvdXAucHJvcFR5cGVzKTtcbkF2R3JvdXAuY29udGV4dFR5cGVzID0ge1xuICBGb3JtQ3RybDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbkF2R3JvdXAuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIEdyb3VwOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuICBGb3JtQ3RybDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEF2R3JvdXA7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduJyk7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdHN0cmFwID0gcmVxdWlyZSgncmVhY3RzdHJhcCcpO1xuXG52YXIgX0F2QmFzZUlucHV0MiA9IHJlcXVpcmUoJy4vQXZCYXNlSW5wdXQnKTtcblxudmFyIF9BdkJhc2VJbnB1dDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdkJhc2VJbnB1dDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQXZJbnB1dCA9IGZ1bmN0aW9uIChfQXZCYXNlSW5wdXQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoQXZJbnB1dCwgX0F2QmFzZUlucHV0KTtcblxuICBmdW5jdGlvbiBBdklucHV0KCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEF2SW5wdXQpO1xuICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIF9BdkJhc2VJbnB1dC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIEF2SW5wdXQucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWVQYXJzZXIgPyB0aGlzLnByb3BzLnZhbHVlUGFyc2VyKHRoaXMudmFsdWUpIDogdGhpcy52YWx1ZTtcbiAgfTtcblxuICBBdklucHV0LnByb3RvdHlwZS5nZXRWaWV3VmFsdWUgPSBmdW5jdGlvbiBnZXRWaWV3VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWVGb3JtYXR0ZXIgPyB0aGlzLnByb3BzLnZhbHVlRm9ybWF0dGVyKHRoaXMudmFsdWUpIDogdGhpcy52YWx1ZTtcbiAgfTtcblxuICBBdklucHV0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9taXQxID0gX3Byb3BzLmVycm9yTWVzc2FnZSxcbiAgICAgICAgb21pdDIgPSBfcHJvcHMudmFsaWRhdGUsXG4gICAgICAgIG9taXQzID0gX3Byb3BzLnZhbGlkYXRpb25FdmVudCxcbiAgICAgICAgb21pdDQgPSBfcHJvcHMuc3RhdGUsXG4gICAgICAgIG9taXQ1ID0gX3Byb3BzLnRydWVWYWx1ZSxcbiAgICAgICAgb21pdDYgPSBfcHJvcHMuZmFsc2VWYWx1ZSxcbiAgICAgICAgb21pdDcgPSBfcHJvcHMudmFsdWVQYXJzZXIsXG4gICAgICAgIG9taXQ4ID0gX3Byb3BzLnZhbHVlRm9ybWF0dGVyLFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICB0YWcgPSBfcHJvcHMudGFnLFxuICAgICAgICBnZXRSZWYgPSBfcHJvcHMuZ2V0UmVmLFxuICAgICAgICBfcHJvcHMkaWQgPSBfcHJvcHMuaWQsXG4gICAgICAgIGlkID0gX3Byb3BzJGlkID09PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzLm5hbWUgOiBfcHJvcHMkaWQsXG4gICAgICAgIGF0dHJpYnV0ZXMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnZXJyb3JNZXNzYWdlJywgJ3ZhbGlkYXRlJywgJ3ZhbGlkYXRpb25FdmVudCcsICdzdGF0ZScsICd0cnVlVmFsdWUnLCAnZmFsc2VWYWx1ZScsICd2YWx1ZVBhcnNlcicsICd2YWx1ZUZvcm1hdHRlcicsICdjbGFzc05hbWUnLCAndGFnJywgJ2dldFJlZicsICdpZCddKTtcblxuXG4gICAgdmFyIHRvdWNoZWQgPSB0aGlzLmNvbnRleHQuRm9ybUN0cmwuaXNUb3VjaGVkKHRoaXMucHJvcHMubmFtZSk7XG4gICAgdmFyIGhhc0Vycm9yID0gdGhpcy5jb250ZXh0LkZvcm1DdHJsLmhhc0Vycm9yKHRoaXMucHJvcHMubmFtZSk7XG4gICAgdmFyIFRhZyA9IHRhZztcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHRhZykpIHtcbiAgICAgIHZhciB0YWdzID0gdm9pZCAwO1xuICAgICAgVGFnID0gdGFnWzBdO1xuICAgICAgdGFncyA9IHRhZy5zbGljZSgxKTtcblxuICAgICAgYXR0cmlidXRlcy50YWcgPSB0YWdzO1xuICAgICAgaWYgKGF0dHJpYnV0ZXMudGFnLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMudGFnID0gYXR0cmlidXRlcy50YWdbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKGNsYXNzTmFtZSwgdG91Y2hlZCA/ICdpcy10b3VjaGVkJyA6ICdpcy11bnRvdWNoZWQnLCB0aGlzLmNvbnRleHQuRm9ybUN0cmwuaXNEaXJ0eSh0aGlzLnByb3BzLm5hbWUpID8gJ2lzLWRpcnR5JyA6ICdpcy1wcmlzdGluZScsIHRoaXMuY29udGV4dC5Gb3JtQ3RybC5pc0JhZCh0aGlzLnByb3BzLm5hbWUpID8gJ2lzLWJhZC1pbnB1dCcgOiBudWxsLCBoYXNFcnJvciA/ICdhdi1pbnZhbGlkJyA6ICdhdi12YWxpZCcsIHRvdWNoZWQgJiYgaGFzRXJyb3IgJiYgJ2lzLWludmFsaWQnLCBhdHRyaWJ1dGVzLnR5cGUgPT09ICdjaGVja2JveCcgJiYgdG91Y2hlZCAmJiBoYXNFcnJvciAmJiAnd2FzLXZhbGlkYXRlZCcpO1xuXG4gICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWaWV3VmFsdWUoKTtcblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUYWcsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIHJlZjogZ2V0UmVmXG4gICAgfSwgdGhpcy5nZXRWYWxpZGF0b3JQcm9wcygpLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBpZDogaWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIEF2SW5wdXQ7XG59KF9BdkJhc2VJbnB1dDMuZGVmYXVsdCk7XG5cbkF2SW5wdXQuZGVmYXVsdFByb3BzID0gKDAsIF9hc3NpZ24yLmRlZmF1bHQpKHt9LCBfQXZCYXNlSW5wdXQzLmRlZmF1bHQuZGVmYXVsdFByb3BzLCB7XG4gIHRhZzogX3JlYWN0c3RyYXAuSW5wdXRcbn0pO1xuQXZJbnB1dC5jb250ZXh0VHlwZXMgPSBfQXZCYXNlSW5wdXQzLmRlZmF1bHQuY29udGV4dFR5cGVzO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXZJbnB1dDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkQ29tcG9uZW50KGlucHV0KSB7XG4gIHZhciBuYW1lID0gaW5wdXQgJiYgaW5wdXQucHJvcHMgPyBpbnB1dC5wcm9wcy5uYW1lIDogdW5kZWZpbmVkO1xuXG4gIGlmICghbmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW5wdXQgJyArIGlucHV0ICsgJyBoYXMgbm8gXCJuYW1lXCIgcHJvcCcpO1xuICB9XG5cbiAgcmV0dXJuIHsgbmFtZTogbmFtZSB9O1xufVxuXG52YXIgSW5wdXRDb250YWluZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShJbnB1dENvbnRhaW5lciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5wdXRDb250YWluZXIoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgSW5wdXRDb250YWluZXIpO1xuICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBJbnB1dENvbnRhaW5lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuX3VwZGF0ZXJzID0ge307XG4gICAgdGhpcy5faW5wdXRzID0ge307XG4gIH07XG5cbiAgSW5wdXRDb250YWluZXIucHJvdG90eXBlLmdldE9sZElucHV0TmFtZSA9IGZ1bmN0aW9uIGdldE9sZElucHV0TmFtZShpbnB1dCkge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl9pbnB1dHMpIHtcbiAgICAgIGlmICh0aGlzLl9pbnB1dHNba2V5XSA9PT0gaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgSW5wdXRDb250YWluZXIucHJvdG90eXBlLnJlZ2lzdGVySW5wdXQgPSBmdW5jdGlvbiByZWdpc3RlcklucHV0KGlucHV0KSB7XG4gICAgdmFyIHVwZGF0ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGlucHV0ICYmIGlucHV0LnNldFN0YXRlICYmIGlucHV0LnNldFN0YXRlLmJpbmQoaW5wdXQpO1xuXG4gICAgdmFyIF92YWxpZENvbXBvbmVudCA9IHZhbGlkQ29tcG9uZW50KGlucHV0LCB1cGRhdGVyKSxcbiAgICAgICAgbmFtZSA9IF92YWxpZENvbXBvbmVudC5uYW1lO1xuXG4gICAgdmFyIG9sZE5hbWUgPSB0aGlzLmdldE9sZElucHV0TmFtZShpbnB1dCk7XG4gICAgaWYgKG9sZE5hbWUgIT09IG5hbWUpIHtcbiAgICAgIGlmIChvbGROYW1lKSB7XG4gICAgICAgIHRoaXMudW5yZWdpc3RlcklucHV0KHsgcHJvcHM6IHsgbmFtZTogb2xkTmFtZSB9IH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fdXBkYXRlcnNbbmFtZV0gPSB1cGRhdGVyO1xuICAgICAgdGhpcy5faW5wdXRzW25hbWVdID0gaW5wdXQ7XG4gICAgfVxuICB9O1xuXG4gIElucHV0Q29udGFpbmVyLnByb3RvdHlwZS51bnJlZ2lzdGVySW5wdXQgPSBmdW5jdGlvbiB1bnJlZ2lzdGVySW5wdXQoaW5wdXQpIHtcbiAgICB2YXIgX3ZhbGlkQ29tcG9uZW50MiA9IHZhbGlkQ29tcG9uZW50KGlucHV0KSxcbiAgICAgICAgbmFtZSA9IF92YWxpZENvbXBvbmVudDIubmFtZTtcblxuICAgIGRlbGV0ZSB0aGlzLl91cGRhdGVyc1tuYW1lXTtcbiAgICBkZWxldGUgdGhpcy5faW5wdXRzW25hbWVdO1xuICB9O1xuXG4gIHJldHVybiBJbnB1dENvbnRhaW5lcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0Q29udGFpbmVyOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduJyk7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0c3RyYXAgPSByZXF1aXJlKCdyZWFjdHN0cmFwJyk7XG5cbnZhciBfQXZJbnB1dCA9IHJlcXVpcmUoJy4vQXZJbnB1dCcpO1xuXG52YXIgX0F2SW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXZJbnB1dCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciByYWRpb1Byb3BUeXBlcyA9ICgwLCBfYXNzaWduMi5kZWZhdWx0KSh7fSwgX0F2SW5wdXQyLmRlZmF1bHQucHJvcFR5cGVzLCB7IGN1c3RvbUlucHV0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wgfSk7XG5kZWxldGUgcmFkaW9Qcm9wVHlwZXMubmFtZTtcblxudmFyIEF2UmFkaW8gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShBdlJhZGlvLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBdlJhZGlvKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBBdlJhZGlvKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyksIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICBBdlJhZGlvLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY29udGV4dC5Gb3JtQ3RybCAmJiB0aGlzLmNvbnRleHQuRm9ybUN0cmwucmVnaXN0ZXIodGhpcyk7XG4gIH07XG5cbiAgQXZSYWRpby5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNvbnRleHQuRm9ybUN0cmwgJiYgdGhpcy5jb250ZXh0LkZvcm1DdHJsLnVucmVnaXN0ZXIodGhpcyk7XG4gIH07XG5cbiAgQXZSYWRpby5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBpZCA9IF9wcm9wcy5pZCxcbiAgICAgICAgY3VzdG9tSW5wdXQgPSBfcHJvcHMuY3VzdG9tSW5wdXQsXG4gICAgICAgIGF0dHJpYnV0ZXMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnY2xhc3NOYW1lJywgJ2lkJywgJ2N1c3RvbUlucHV0J10pO1xuXG5cbiAgICB2YXIgZ3JvdXBQcm9wcyA9IHRoaXMuY29udGV4dC5Hcm91cC5nZXRQcm9wcygpO1xuXG4gICAgdmFyIHRvdWNoZWQgPSB0aGlzLmNvbnRleHQuRm9ybUN0cmwuaXNUb3VjaGVkKGdyb3VwUHJvcHMubmFtZSk7XG4gICAgdmFyIGhhc0Vycm9yID0gdGhpcy5jb250ZXh0LkZvcm1DdHJsLmhhc0Vycm9yKGdyb3VwUHJvcHMubmFtZSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoY2xhc3NOYW1lLCB0b3VjaGVkID8gJ2lzLXRvdWNoZWQnIDogJ2lzLXVudG91Y2hlZCcsIHRoaXMuY29udGV4dC5Gb3JtQ3RybC5pc0RpcnR5KGdyb3VwUHJvcHMubmFtZSkgPyAnaXMtZGlydHknIDogJ2lzLXByaXN0aW5lJywgdGhpcy5jb250ZXh0LkZvcm1DdHJsLmlzQmFkKGdyb3VwUHJvcHMubmFtZSkgPyAnaXMtYmFkLWlucHV0JyA6IG51bGwsIGhhc0Vycm9yID8gJ2F2LWludmFsaWQnIDogJ2F2LXZhbGlkJywgdG91Y2hlZCAmJiBoYXNFcnJvciAmJiAnaXMtaW52YWxpZCcpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmNvbnRleHQuRm9ybUN0cmwuaXNEaXNhYmxlZCgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGF0dHJpYnV0ZXMuZGlzYWJsZWQgPSB0aGlzLmNvbnRleHQuRm9ybUN0cmwuaXNEaXNhYmxlZCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnJlYWRPbmx5ID09PSB1bmRlZmluZWQgJiYgdGhpcy5jb250ZXh0LkZvcm1DdHJsLmlzUmVhZE9ubHkoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhdHRyaWJ1dGVzLmRpc2FibGVkID0gYXR0cmlidXRlcy5kaXNhYmxlZCB8fCB0aGlzLmNvbnRleHQuRm9ybUN0cmwuaXNSZWFkT25seSgpO1xuICAgIH1cblxuICAgIGlmIChjdXN0b21JbnB1dCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdHN0cmFwLkN1c3RvbUlucHV0LCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHsgbmFtZTogZ3JvdXBQcm9wcy5uYW1lLFxuICAgICAgICB0eXBlOiAncmFkaW8nXG4gICAgICB9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICAgIGlubGluZTogZ3JvdXBQcm9wcy5pbmxpbmUsXG4gICAgICAgIGlkOiBpZCB8fCAncmFkaW8tJyArIGdyb3VwUHJvcHMubmFtZSArICctJyArIHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VIYW5kbGVyLFxuICAgICAgICBjaGVja2VkOiB0aGlzLnByb3BzLnZhbHVlID09PSBncm91cFByb3BzLnZhbHVlLFxuICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSAmJiB0aGlzLnByb3BzLnZhbHVlLnRvU3RyaW5nKCksXG4gICAgICAgIHJlcXVpcmVkOiBncm91cFByb3BzLnJlcXVpcmVkLFxuICAgICAgICBsYWJlbDogdGhpcy5wcm9wcy5sYWJlbFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIF9yZWFjdHN0cmFwLkZvcm1Hcm91cCxcbiAgICAgIHsgY2hlY2s6IHRydWUsIGlubGluZTogZ3JvdXBQcm9wcy5pbmxpbmUsIGRpc2FibGVkOiBhdHRyaWJ1dGVzLmRpc2FibGVkIHx8IGF0dHJpYnV0ZXMucmVhZE9ubHkgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdHN0cmFwLklucHV0LCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgbmFtZTogZ3JvdXBQcm9wcy5uYW1lLFxuICAgICAgICB0eXBlOiAncmFkaW8nXG4gICAgICB9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICAgIGlkOiBpZCB8fCAncmFkaW8tJyArIGdyb3VwUHJvcHMubmFtZSArICctJyArIHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VIYW5kbGVyLFxuICAgICAgICBjaGVja2VkOiB0aGlzLnByb3BzLnZhbHVlID09PSBncm91cFByb3BzLnZhbHVlLFxuICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSAmJiB0aGlzLnByb3BzLnZhbHVlLnRvU3RyaW5nKCksXG4gICAgICAgIHJlcXVpcmVkOiBncm91cFByb3BzLnJlcXVpcmVkXG4gICAgICB9KSksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0c3RyYXAuTGFiZWwsXG4gICAgICAgIHsgY2hlY2s6IHRydWUsICdmb3InOiBpZCB8fCAncmFkaW8tJyArIGdyb3VwUHJvcHMubmFtZSArICctJyArIHRoaXMucHJvcHMudmFsdWUgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5sYWJlbFxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIEF2UmFkaW87XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5BdlJhZGlvLmNvbnRleHRUeXBlcyA9ICgwLCBfYXNzaWduMi5kZWZhdWx0KSh7fSwgX0F2SW5wdXQyLmRlZmF1bHQuY29udGV4dFR5cGVzLCB7XG4gIEdyb3VwOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59KTtcbkF2UmFkaW8ucHJvcFR5cGVzID0gcmFkaW9Qcm9wVHlwZXM7XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgdGhpcy5vbkNoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIF90aGlzMi5jb250ZXh0Lkdyb3VwLnVwZGF0ZShldmVudCwgX3RoaXMyLnByb3BzLnZhbHVlKTtcbiAgICBpZiAoX3RoaXMyLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB2YXIgX3Byb3BzMjtcblxuICAgICAgKF9wcm9wczIgPSBfdGhpczIucHJvcHMpLm9uQ2hhbmdlLmFwcGx5KF9wcm9wczIsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBdlJhZGlvOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2tleXMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTtcblxudmFyIF9rZXlzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduJyk7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbnZhciBfcmVnZW5lcmF0b3IgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJyk7XG5cbnZhciBfcmVnZW5lcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVnZW5lcmF0b3IpO1xuXG52YXIgX2FzeW5jVG9HZW5lcmF0b3IyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FzeW5jVG9HZW5lcmF0b3IyKTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9pc0VxdWFsID0gcmVxdWlyZSgnbG9kYXNoL2lzRXF1YWwnKTtcblxudmFyIF9pc0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRXF1YWwpO1xuXG52YXIgX2lzVW5kZWZpbmVkID0gcmVxdWlyZSgnbG9kYXNoL2lzVW5kZWZpbmVkJyk7XG5cbnZhciBfaXNVbmRlZmluZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNVbmRlZmluZWQpO1xuXG52YXIgX3JlYWN0c3RyYXAgPSByZXF1aXJlKCdyZWFjdHN0cmFwJyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0F2RmVlZGJhY2sgPSByZXF1aXJlKCcuL0F2RmVlZGJhY2snKTtcblxudmFyIF9BdkZlZWRiYWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0F2RmVlZGJhY2spO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaHRtbFZhbGlkYXRpb25BdHRycyA9IFsncmVxdWlyZWQnXTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBBdlJhZGlvR3JvdXAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShBdlJhZGlvR3JvdXAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEF2UmFkaW9Hcm91cCgpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgQXZSYWRpb0dyb3VwKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaW52YWxpZElucHV0czoge30sXG4gICAgICBkaXJ0eUlucHV0czoge30sXG4gICAgICB0b3VjaGVkSW5wdXRzOiB7fSxcbiAgICAgIGJhZElucHV0czoge30sXG4gICAgICB2YWxpZGF0ZToge30sXG4gICAgICB2YWx1ZTogJydcbiAgICB9LCBfdGhpcy5faW5wdXRzID0gW10sIF90aGlzLnZhbHVlID0gJycsIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICBBdlJhZGlvR3JvdXAucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICghdGhpcy5Gb3JtQ3RybCkge1xuICAgICAgdGhpcy5Gb3JtQ3RybCA9ICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIHRoaXMuY29udGV4dC5Gb3JtQ3RybCk7XG4gICAgICB0aGlzLkZvcm1DdHJsLnJlZ2lzdGVyID0gdGhpcy5yZWdpc3RlcklucHV0LmJpbmQodGhpcyk7XG4gICAgICB0aGlzLkZvcm1DdHJsLnVucmVnaXN0ZXIgPSB0aGlzLnVucmVnaXN0ZXJJbnB1dC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5Gb3JtQ3RybC52YWxpZGF0ZSA9IG5vb3A7XG4gICAgfVxuXG4gICAgdmFyIHVwZGF0ZUdyb3VwID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IzLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yMi5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZShlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yMi5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIF90aGlzMi52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIudmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgIV90aGlzMi5jb250ZXh0LkZvcm1DdHJsLmlzVG91Y2hlZChfdGhpczIucHJvcHMubmFtZSkgJiYgX3RoaXMyLmNvbnRleHQuRm9ybUN0cmwuc2V0VG91Y2hlZChfdGhpczIucHJvcHMubmFtZSk7XG4gICAgICAgICAgICAgICAgIV90aGlzMi5jb250ZXh0LkZvcm1DdHJsLmlzRGlydHkoX3RoaXMyLnByb3BzLm5hbWUpICYmIF90aGlzMi5jb250ZXh0LkZvcm1DdHJsLnNldERpcnR5KF90aGlzMi5wcm9wcy5uYW1lKTtcbiAgICAgICAgICAgICAgICBfdGhpczIucHJvcHMub25DaGFuZ2UgJiYgX3RoaXMyLnByb3BzLm9uQ2hhbmdlKGUsIHZhbHVlKTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIF90aGlzMik7XG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGVHcm91cChfeCwgX3gyKSB7XG4gICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBHcm91cDoge1xuICAgICAgICBnZXRQcm9wczogZnVuY3Rpb24gZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IF90aGlzMi5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgaW5saW5lOiBfdGhpczIucHJvcHMuaW5saW5lLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IF90aGlzMi5wcm9wcy5yZXF1aXJlZCB8fCAhIShfdGhpczIudmFsaWRhdGlvbnMucmVxdWlyZWQgJiYgX3RoaXMyLnZhbGlkYXRpb25zLnJlcXVpcmVkLnZhbHVlKSxcbiAgICAgICAgICAgIHZhbHVlOiBfdGhpczIudmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IHVwZGF0ZUdyb3VwLFxuICAgICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SW5wdXRTdGF0ZTogdGhpcy5nZXRJbnB1dFN0YXRlLmJpbmQodGhpcylcbiAgICAgIH0sXG4gICAgICBGb3JtQ3RybDogdGhpcy5Gb3JtQ3RybFxuICAgIH07XG4gIH07XG5cbiAgQXZSYWRpb0dyb3VwLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5nZXREZWZhdWx0VmFsdWUoKS52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gICAgdGhpcy51cGRhdGVWYWxpZGF0aW9ucygpO1xuICB9O1xuXG4gIEF2UmFkaW9Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5uYW1lICE9PSB0aGlzLnByb3BzLm5hbWUpIHtcbiAgICAgIHRoaXMuY29udGV4dC5Gb3JtQ3RybC51bnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cbiAgICBpZiAobmV4dFByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbmV4dFByb3BzLnZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBuZXh0UHJvcHMudmFsdWUgfSk7XG4gICAgfVxuICAgIGlmICghKDAsIF9pc0VxdWFsMi5kZWZhdWx0KShuZXh0UHJvcHMsIHRoaXMucHJvcHMpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbGlkYXRpb25zKG5leHRQcm9wcyk7XG4gICAgfVxuICB9O1xuXG4gIEF2UmFkaW9Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNvbnRleHQuRm9ybUN0cmwudW5yZWdpc3Rlcih0aGlzKTtcbiAgfTtcblxuICBBdlJhZGlvR3JvdXAucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH07XG5cbiAgQXZSYWRpb0dyb3VwLnByb3RvdHlwZS5nZXRJbnB1dFN0YXRlID0gZnVuY3Rpb24gZ2V0SW5wdXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LkZvcm1DdHJsLmdldElucHV0U3RhdGUodGhpcy5wcm9wcy5uYW1lKTtcbiAgfTtcblxuICBBdlJhZGlvR3JvdXAucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICB2YXIga2V5ID0gJ2RlZmF1bHRWYWx1ZSc7XG5cbiAgICB2YXIgdmFsdWUgPSAnJztcbiAgICBpZiAoISgwLCBfaXNVbmRlZmluZWQyLmRlZmF1bHQpKHRoaXMucHJvcHNba2V5XSkpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcm9wc1trZXldO1xuICAgIH0gZWxzZSBpZiAoISgwLCBfaXNVbmRlZmluZWQyLmRlZmF1bHQpKHRoaXMuY29udGV4dC5Gb3JtQ3RybC5nZXREZWZhdWx0VmFsdWUodGhpcy5wcm9wcy5uYW1lKSkpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5jb250ZXh0LkZvcm1DdHJsLmdldERlZmF1bHRWYWx1ZSh0aGlzLnByb3BzLm5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGtleToga2V5LCB2YWx1ZTogdmFsdWUgfTtcbiAgfTtcblxuICBBdlJhZGlvR3JvdXAucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcmVmMiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjMuZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3IyLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlMigpIHtcbiAgICAgIHJldHVybiBfcmVnZW5lcmF0b3IyLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5Gb3JtQ3RybC52YWxpZGF0ZSh0aGlzLnByb3BzLm5hbWUpO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlSW5wdXRzKCk7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgX2NhbGxlZTIsIHRoaXMpO1xuICAgIH0pKTtcblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xuICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlO1xuICB9KCk7XG5cbiAgQXZSYWRpb0dyb3VwLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgdGhpcy51cGRhdGVJbnB1dHMoKTtcbiAgfTtcblxuICBBdlJhZGlvR3JvdXAucHJvdG90eXBlLnVwZGF0ZVZhbGlkYXRpb25zID0gZnVuY3Rpb24gdXBkYXRlVmFsaWRhdGlvbnMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnZhbGlkYXRpb25zID0gKDAsIF9hc3NpZ24yLmRlZmF1bHQpKHt9LCBwcm9wcy52YWxpZGF0ZSk7XG5cbiAgICAoMCwgX2tleXMyLmRlZmF1bHQpKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuIGh0bWxWYWxpZGF0aW9uQXR0cnMuaW5kZXhPZih2YWwpID4gLTE7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgaWYgKHByb3BzW2F0dHJdKSB7XG4gICAgICAgIF90aGlzMy52YWxpZGF0aW9uc1thdHRyXSA9IF90aGlzMy52YWxpZGF0aW9uc1thdHRyXSB8fCB7XG4gICAgICAgICAgdmFsdWU6IHByb3BzW2F0dHJdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgX3RoaXMzLnZhbGlkYXRpb25zW2F0dHJdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jb250ZXh0LkZvcm1DdHJsLnJlZ2lzdGVyKHRoaXMsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfTtcblxuICBBdlJhZGlvR3JvdXAucHJvdG90eXBlLnVwZGF0ZUlucHV0cyA9IGZ1bmN0aW9uIHVwZGF0ZUlucHV0cygpIHtcbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHJldHVybiBpbnB1dC5zZXRTdGF0ZS5jYWxsKGlucHV0LCB7fSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gIH07XG5cbiAgQXZSYWRpb0dyb3VwLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpLnZhbHVlO1xuICAgIHRoaXMuY29udGV4dC5Gb3JtQ3RybC5zZXREaXJ0eSh0aGlzLnByb3BzLm5hbWUsIGZhbHNlKTtcbiAgICB0aGlzLmNvbnRleHQuRm9ybUN0cmwuc2V0VG91Y2hlZCh0aGlzLnByb3BzLm5hbWUsIGZhbHNlKTtcbiAgICB0aGlzLmNvbnRleHQuRm9ybUN0cmwuc2V0QmFkKHRoaXMucHJvcHMubmFtZSwgZmFsc2UpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgdGhpcy5wcm9wcy5vblJlc2V0ICYmIHRoaXMucHJvcHMub25SZXNldCh0aGlzLnZhbHVlKTtcbiAgfTtcblxuICBBdlJhZGlvR3JvdXAucHJvdG90eXBlLnJlZ2lzdGVySW5wdXQgPSBmdW5jdGlvbiByZWdpc3RlcklucHV0KGlucHV0KSB7XG4gICAgaWYgKHRoaXMuX2lucHV0cy5pbmRleE9mKGlucHV0KSA8IDApIHtcbiAgICAgIHRoaXMuX2lucHV0cy5wdXNoKGlucHV0KTtcbiAgICB9XG4gIH07XG5cbiAgQXZSYWRpb0dyb3VwLnByb3RvdHlwZS51bnJlZ2lzdGVySW5wdXQgPSBmdW5jdGlvbiB1bnJlZ2lzdGVySW5wdXQoaW5wdXQpIHtcbiAgICB0aGlzLl9pbnB1dHMgPSB0aGlzLl9pbnB1dHMuZmlsdGVyKGZ1bmN0aW9uIChpcHQpIHtcbiAgICAgIHJldHVybiBpcHQgIT09IGlucHV0O1xuICAgIH0pO1xuICB9O1xuXG4gIEF2UmFkaW9Hcm91cC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBsZWdlbmQgPSB0aGlzLnByb3BzLmxhYmVsID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGVnZW5kJyxcbiAgICAgIG51bGwsXG4gICAgICB0aGlzLnByb3BzLmxhYmVsXG4gICAgKSA6ICcnO1xuICAgIHZhciB2YWxpZGF0aW9uID0gdGhpcy5nZXRJbnB1dFN0YXRlKCk7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9taXQxID0gX3Byb3BzLmVycm9yTWVzc2FnZSxcbiAgICAgICAgb21pdDIgPSBfcHJvcHMudmFsaWRhdGUsXG4gICAgICAgIG9taXQzID0gX3Byb3BzLnZhbGlkYXRpb25FdmVudCxcbiAgICAgICAgb21pdDQgPSBfcHJvcHMuc3RhdGUsXG4gICAgICAgIG9taXQ1ID0gX3Byb3BzLmxhYmVsLFxuICAgICAgICBvbWl0NiA9IF9wcm9wcy5yZXF1aXJlZCxcbiAgICAgICAgb21pdDcgPSBfcHJvcHMuaW5saW5lLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgYXR0cmlidXRlcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydlcnJvck1lc3NhZ2UnLCAndmFsaWRhdGUnLCAndmFsaWRhdGlvbkV2ZW50JywgJ3N0YXRlJywgJ2xhYmVsJywgJ3JlcXVpcmVkJywgJ2lubGluZScsICdjaGlsZHJlbiddKTtcblxuXG4gICAgdmFyIHRvdWNoZWQgPSB0aGlzLmNvbnRleHQuRm9ybUN0cmwuaXNUb3VjaGVkKHRoaXMucHJvcHMubmFtZSk7XG4gICAgdmFyIGhhc0Vycm9yID0gdGhpcy5jb250ZXh0LkZvcm1DdHJsLmhhc0Vycm9yKHRoaXMucHJvcHMubmFtZSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ2Zvcm0tY29udHJvbCBib3JkZXItMCBwLTAgaC1hdXRvJywgdG91Y2hlZCA/ICdpcy10b3VjaGVkJyA6ICdpcy11bnRvdWNoZWQnLCB0aGlzLmNvbnRleHQuRm9ybUN0cmwuaXNEaXJ0eSh0aGlzLnByb3BzLm5hbWUpID8gJ2lzLWRpcnR5JyA6ICdpcy1wcmlzdGluZScsIHRoaXMuY29udGV4dC5Gb3JtQ3RybC5pc0JhZCh0aGlzLnByb3BzLm5hbWUpID8gJ2lzLWJhZC1pbnB1dCcgOiBudWxsLCBoYXNFcnJvciA/ICdhdi1pbnZhbGlkJyA6ICdhdi12YWxpZCcsIHRvdWNoZWQgJiYgaGFzRXJyb3IgJiYgJ2lzLWludmFsaWQnKTtcblxuICAgIHZhciBncm91cENsYXNzID0gKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KShhdHRyaWJ1dGVzLmNsYXNzTmFtZSwgdG91Y2hlZCAmJiBoYXNFcnJvciAmJiAnd2FzLXZhbGlkYXRlZCcpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgX3JlYWN0c3RyYXAuRm9ybUdyb3VwLFxuICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7IHRhZzogJ2ZpZWxkc2V0JyB9LCBhdHRyaWJ1dGVzLCB7IGNsYXNzTmFtZTogZ3JvdXBDbGFzcyB9KSxcbiAgICAgIGxlZ2VuZCxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzZXMgfSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0F2RmVlZGJhY2syLmRlZmF1bHQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHZhbGlkYXRpb24uZXJyb3JNZXNzYWdlXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQXZSYWRpb0dyb3VwO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQXZSYWRpb0dyb3VwLnByb3BUeXBlcyA9ICgwLCBfYXNzaWduMi5kZWZhdWx0KSh7fSwgX3JlYWN0c3RyYXAuRm9ybUdyb3VwLnByb3BUeXBlcywge1xuICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkXG59KTtcbkF2UmFkaW9Hcm91cC5jb250ZXh0VHlwZXMgPSB7XG4gIEZvcm1DdHJsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuQXZSYWRpb0dyb3VwLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICBHcm91cDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgRm9ybUN0cmw6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBBdlJhZGlvR3JvdXA7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdGU7XG5cbnZhciBfbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbnZhciBfbW9tZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vbWVudCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBjb250ZXh0KSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICAgIF9yZWYkZm9ybWF0ID0gX3JlZi5mb3JtYXQsXG4gICAgICBmb3JtYXQgPSBfcmVmJGZvcm1hdCA9PT0gdW5kZWZpbmVkID8gJ01NL0REL1lZWVknIDogX3JlZiRmb3JtYXQsXG4gICAgICBfcmVmJGVycm9yTWVzc2FnZSA9IF9yZWYuZXJyb3JNZXNzYWdlLFxuICAgICAgZXJyb3JNZXNzYWdlID0gX3JlZiRlcnJvck1lc3NhZ2UgPT09IHVuZGVmaW5lZCA/ICdGb3JtYXQgbmVlZHMgdG8gYmUgJyArIGZvcm1hdCA6IF9yZWYkZXJyb3JNZXNzYWdlO1xuXG4gIGlmICgoMCwgX3V0aWxzLmlzRW1wdHkpKHZhbHVlKSkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIGRhdGUgPSAoMCwgX21vbWVudDIuZGVmYXVsdCkodmFsdWUsIFtfdXRpbHMuaXNvRGF0ZUZvcm1hdCwgZm9ybWF0XSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIGRhdGUuaXNWYWxpZCgpIHx8IGVycm9yTWVzc2FnZTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTtcblxudmFyIF9tb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxudmFyIF9tb21lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9tZW50KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc2V0TWluKHZhbHVlKSB7XG4gIHZhbHVlLnNldCgnaG91cnMnLCAwKTtcbiAgdmFsdWUuc2V0KCdtaW51dGVzJywgMCk7XG4gIHZhbHVlLnNldCgnc2Vjb25kcycsIDApO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2V0TWF4KHZhbHVlKSB7XG4gIHZhbHVlLnNldCgnaG91cnMnLCAyMyk7XG4gIHZhbHVlLnNldCgnbWludXRlcycsIDU5KTtcbiAgdmFsdWUuc2V0KCdzZWNvbmRzJywgNTkpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnREYXRlKHN0YXJ0KSB7XG4gIHJldHVybiBzZXRNaW4oKDAsIF9tb21lbnQyLmRlZmF1bHQpKCkuYWRkKHN0YXJ0LnZhbHVlLCBzdGFydC51bml0cykpO1xufVxuXG5mdW5jdGlvbiBnZXRFbmREYXRlKGVuZCkge1xuICByZXR1cm4gc2V0TWF4KCgwLCBfbW9tZW50Mi5kZWZhdWx0KSgpLmFkZChlbmQudmFsdWUsIGVuZC51bml0cykpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgY29udGV4dCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgICBfcmVmJGZvcm1hdCA9IF9yZWYuZm9ybWF0LFxuICAgICAgZm9ybWF0ID0gX3JlZiRmb3JtYXQgPT09IHVuZGVmaW5lZCA/ICdNTS9ERC9ZWVlZJyA6IF9yZWYkZm9ybWF0LFxuICAgICAgX3JlZiRkaXNwbGF5Rm9ybWF0ID0gX3JlZi5kaXNwbGF5Rm9ybWF0LFxuICAgICAgZGlzcGxheUZvcm1hdCA9IF9yZWYkZGlzcGxheUZvcm1hdCA9PT0gdW5kZWZpbmVkID8gJ01NL0REL1lZWVknIDogX3JlZiRkaXNwbGF5Rm9ybWF0LFxuICAgICAgX3JlZiRzdGFydCA9IF9yZWYuc3RhcnQsXG4gICAgICBzdGFydCA9IF9yZWYkc3RhcnQgPT09IHVuZGVmaW5lZCA/IHt9IDogX3JlZiRzdGFydCxcbiAgICAgIF9yZWYkZW5kID0gX3JlZi5lbmQsXG4gICAgICBlbmQgPSBfcmVmJGVuZCA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmJGVuZCxcbiAgICAgIGVycm9yTWVzc2FnZSA9IF9yZWYuZXJyb3JNZXNzYWdlO1xuXG4gIGlmICgoMCwgX3V0aWxzLmlzRW1wdHkpKHZhbHVlKSkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIHN0YXJ0RGF0ZSA9IHZvaWQgMDtcbiAgdmFyIGVuZERhdGUgPSB2b2lkIDA7XG5cbiAgdmFyIGRhdGUgPSAoMCwgX21vbWVudDIuZGVmYXVsdCkodmFsdWUsIFtfdXRpbHMuaXNvRGF0ZUZvcm1hdCwgZm9ybWF0XSwgdHJ1ZSk7XG4gIHNldE1pbihkYXRlKTtcblxuICBpZiAoISgwLCBfdXRpbHMuaXNFbXB0eSkoc3RhcnQudW5pdHMpICYmICEoMCwgX3V0aWxzLmlzRW1wdHkpKGVuZC51bml0cykpIHtcbiAgICBzdGFydERhdGUgPSBnZXRTdGFydERhdGUoc3RhcnQpO1xuICAgIGVuZERhdGUgPSBnZXRFbmREYXRlKGVuZCk7XG4gIH0gZWxzZSB7XG4gICAgc3RhcnREYXRlID0gKDAsIF9tb21lbnQyLmRlZmF1bHQpKHN0YXJ0LnZhbHVlLCBzdGFydC5mb3JtYXQgfHwgZm9ybWF0KTtcbiAgICBlbmREYXRlID0gc2V0TWF4KCgwLCBfbW9tZW50Mi5kZWZhdWx0KShlbmQudmFsdWUsIGVuZC5mb3JtYXQgfHwgZm9ybWF0KSk7XG4gIH1cbiAgZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlIHx8ICdEYXRlIG11c3QgYmUgYmV0d2VlbiAnICsgc3RhcnREYXRlLmZvcm1hdChkaXNwbGF5Rm9ybWF0KSArICcgYW5kICcgKyBlbmREYXRlLmZvcm1hdChkaXNwbGF5Rm9ybWF0KTtcbiAgcmV0dXJuIGRhdGUuaXNWYWxpZCgpICYmIChkYXRlLmlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUsICdkYXknKSB8fCBkYXRlLmlzU2FtZShzdGFydERhdGUsICdkYXknKSB8fCBkYXRlLmlzU2FtZShlbmREYXRlLCAnZGF5JykpIHx8IGVycm9yTWVzc2FnZTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTtcblxudmFyIF9wYXR0ZXJuID0gcmVxdWlyZSgnLi9wYXR0ZXJuJyk7XG5cbnZhciBfcGF0dGVybjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXR0ZXJuKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEVNQUlMX1JFR0VYUCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPyQvaTtcblxuZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIGNvbnRleHQpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9LFxuICAgICAgX3JlZiRwYXR0ZXJuID0gX3JlZi5wYXR0ZXJuLFxuICAgICAgcGF0dGVybiA9IF9yZWYkcGF0dGVybiA9PT0gdW5kZWZpbmVkID8gRU1BSUxfUkVHRVhQIDogX3JlZiRwYXR0ZXJuLFxuICAgICAgX3JlZiRlcnJvck1lc3NhZ2UgPSBfcmVmLmVycm9yTWVzc2FnZSxcbiAgICAgIGVycm9yTWVzc2FnZSA9IF9yZWYkZXJyb3JNZXNzYWdlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkZXJyb3JNZXNzYWdlO1xuXG4gIHJldHVybiAoMCwgX3BhdHRlcm4yLmRlZmF1bHQpKHZhbHVlLCBjb250ZXh0LCB7IHZhbHVlOiBwYXR0ZXJuLCBlcnJvck1lc3NhZ2U6IGVycm9yTWVzc2FnZSB9KTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGF0ZSA9IHJlcXVpcmUoJy4vZGF0ZScpO1xuXG52YXIgX2RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF0ZSk7XG5cbnZhciBfZGF0ZVJhbmdlID0gcmVxdWlyZSgnLi9kYXRlUmFuZ2UnKTtcblxudmFyIF9kYXRlUmFuZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF0ZVJhbmdlKTtcblxudmFyIF9lbWFpbCA9IHJlcXVpcmUoJy4vZW1haWwnKTtcblxudmFyIF9lbWFpbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbWFpbCk7XG5cbnZhciBfbWF0Y2ggPSByZXF1aXJlKCcuL21hdGNoJyk7XG5cbnZhciBfbWF0Y2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF0Y2gpO1xuXG52YXIgX21heCA9IHJlcXVpcmUoJy4vbWF4Jyk7XG5cbnZhciBfbWF4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21heCk7XG5cbnZhciBfbWF4bGVuZ3RoID0gcmVxdWlyZSgnLi9tYXhsZW5ndGgnKTtcblxudmFyIF9tYXhsZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF4bGVuZ3RoKTtcblxudmFyIF9tYXhjaGVja2VkID0gcmVxdWlyZSgnLi9tYXhjaGVja2VkJyk7XG5cbnZhciBfbWF4Y2hlY2tlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXhjaGVja2VkKTtcblxudmFyIF9taW4gPSByZXF1aXJlKCcuL21pbicpO1xuXG52YXIgX21pbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9taW4pO1xuXG52YXIgX21pbmxlbmd0aCA9IHJlcXVpcmUoJy4vbWlubGVuZ3RoJyk7XG5cbnZhciBfbWlubGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21pbmxlbmd0aCk7XG5cbnZhciBfbWluY2hlY2tlZCA9IHJlcXVpcmUoJy4vbWluY2hlY2tlZCcpO1xuXG52YXIgX21pbmNoZWNrZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWluY2hlY2tlZCk7XG5cbnZhciBfbnVtYmVyID0gcmVxdWlyZSgnLi9udW1iZXInKTtcblxudmFyIF9udW1iZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtYmVyKTtcblxudmFyIF9ucGkgPSByZXF1aXJlKCcuL25waScpO1xuXG52YXIgX25waTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ucGkpO1xuXG52YXIgX3BhdHRlcm4gPSByZXF1aXJlKCcuL3BhdHRlcm4nKTtcblxudmFyIF9wYXR0ZXJuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdHRlcm4pO1xuXG52YXIgX3Bob25lID0gcmVxdWlyZSgnLi9waG9uZScpO1xuXG52YXIgX3Bob25lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bob25lKTtcblxudmFyIF9yZXF1aXJlZCA9IHJlcXVpcmUoJy4vcmVxdWlyZWQnKTtcblxudmFyIF9yZXF1aXJlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXF1aXJlZCk7XG5cbnZhciBfc3RlcCA9IHJlcXVpcmUoJy4vc3RlcCcpO1xuXG52YXIgX3N0ZXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RlcCk7XG5cbnZhciBfdXJsID0gcmVxdWlyZSgnLi91cmwnKTtcblxudmFyIF91cmwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXJsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkYXRlOiBfZGF0ZTIuZGVmYXVsdCxcbiAgZGF0ZXRpbWU6IF9kYXRlMi5kZWZhdWx0LFxuICBkYXRlUmFuZ2U6IF9kYXRlUmFuZ2UyLmRlZmF1bHQsXG4gIGVtYWlsOiBfZW1haWwyLmRlZmF1bHQsXG4gIG1hdGNoOiBfbWF0Y2gyLmRlZmF1bHQsXG4gIG1heDogX21heDIuZGVmYXVsdCxcbiAgbWF4bGVuZ3RoOiBfbWF4bGVuZ3RoMi5kZWZhdWx0LFxuICBtYXhMZW5ndGg6IF9tYXhsZW5ndGgyLmRlZmF1bHQsXG4gIG1heENoZWNrZWQ6IF9tYXhjaGVja2VkMi5kZWZhdWx0LFxuICBtaW46IF9taW4yLmRlZmF1bHQsXG4gIG1pbmxlbmd0aDogX21pbmxlbmd0aDIuZGVmYXVsdCxcbiAgbWluTGVuZ3RoOiBfbWlubGVuZ3RoMi5kZWZhdWx0LFxuICBtaW5DaGVja2VkOiBfbWluY2hlY2tlZDIuZGVmYXVsdCxcbiAgbnVtYmVyOiBfbnVtYmVyMi5kZWZhdWx0LFxuICBucGk6IF9ucGkyLmRlZmF1bHQsXG4gIHBhdHRlcm46IF9wYXR0ZXJuMi5kZWZhdWx0LFxuICBwaG9uZTogX3Bob25lMi5kZWZhdWx0LFxuICB0ZWw6IF9waG9uZTIuZGVmYXVsdCxcbiAgcmVxdWlyZWQ6IF9yZXF1aXJlZDIuZGVmYXVsdCxcbiAgc3RlcDogX3N0ZXAyLmRlZmF1bHQsXG4gIHVybDogX3VybDIuZGVmYXVsdFxufTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9nZXQgPSByZXF1aXJlKCdsb2Rhc2gvZ2V0Jyk7XG5cbnZhciBfZ2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBjb250ZXh0KSB7XG4gIHZhciBjb25zdHJhaW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICByZXR1cm4gKDAsIF91dGlscy5pc0VtcHR5KSh2YWx1ZSkgfHwgdmFsdWUgPT09ICgwLCBfZ2V0Mi5kZWZhdWx0KShjb250ZXh0LCBjb25zdHJhaW50LnZhbHVlKSB8fCBjb25zdHJhaW50LmVycm9yTWVzc2FnZSB8fCBmYWxzZTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTtcblxudmFyIF9tb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxudmFyIF9tb21lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9tZW50KTtcblxudmFyIF90b051bWJlciA9IHJlcXVpcmUoJ2xvZGFzaC90b051bWJlcicpO1xuXG52YXIgX3RvTnVtYmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvTnVtYmVyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9tYXhjaGVja2VkID0gcmVxdWlyZSgnLi9tYXhjaGVja2VkJyk7XG5cbnZhciBfbWF4Y2hlY2tlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXhjaGVja2VkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIGNvbnRleHQpIHtcbiAgdmFyIGNvbnN0cmFpbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICB2YXIgaW5wdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGlucHV0LnZhbHVlKSkge1xuICAgIHJldHVybiAoMCwgX21heGNoZWNrZWQyLmRlZmF1bHQpKHZhbHVlLCBjb250ZXh0LCBjb25zdHJhaW50LCBpbnB1dCk7XG4gIH1cblxuICBpZiAoKDAsIF91dGlscy5pc0VtcHR5KSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuXG4gIGlmIChpbnB1dC52YWxpZGF0aW9ucyAmJiBpbnB1dC52YWxpZGF0aW9ucy5kYXRlIHx8IGlucHV0LnByb3BzICYmIGlucHV0LnByb3BzLnR5cGUgJiYgaW5wdXQucHJvcHMudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnZGF0ZScpIHtcbiAgICByZXR1cm4gKDAsIF9tb21lbnQyLmRlZmF1bHQpKHZhbHVlLCBbX3V0aWxzLmlzb0RhdGVGb3JtYXQsIGNvbnN0cmFpbnQuZm9ybWF0IHx8ICdNTS9ERC9ZWVlZJ10sIHRydWUpLmlzU2FtZU9yQmVmb3JlKGNvbnN0cmFpbnQudmFsdWUsICdkYXknKSB8fCBjb25zdHJhaW50LmVycm9yTWVzc2FnZSB8fCBmYWxzZTtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSAoMCwgX3RvTnVtYmVyMi5kZWZhdWx0KSh2YWx1ZSk7XG5cbiAgcmV0dXJuICFpc05hTihudW1iZXIpICYmIGlzRmluaXRlKG51bWJlcikgJiYgbnVtYmVyIDw9ICgwLCBfdG9OdW1iZXIyLmRlZmF1bHQpKGNvbnN0cmFpbnQudmFsdWUpIHx8IGNvbnN0cmFpbnQuZXJyb3JNZXNzYWdlIHx8IGZhbHNlO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZhbGlkYXRlO1xuXG52YXIgX3RvTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL3RvTnVtYmVyJyk7XG5cbnZhciBfdG9OdW1iZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9OdW1iZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgY29udGV4dCkge1xuICB2YXIgY29uc3RyYWludCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHZhciBpbnB1dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG5cbiAgaWYgKCgwLCBfdXRpbHMuaXNFbXB0eSkoaW5wdXQudmFsdWUpKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgbWF4ID0gKDAsIF90b051bWJlcjIuZGVmYXVsdCkoY29uc3RyYWludC52YWx1ZSk7XG5cbiAgcmV0dXJuICFpc05hTihtYXgpICYmIGlzRmluaXRlKG1heCkgJiYgISgwLCBfdXRpbHMuaXNEZWNpbWFsKShtYXgpICYmIG1heCA+PSBpbnB1dC52YWx1ZS5sZW5ndGggfHwgY29uc3RyYWludC5lcnJvck1lc3NhZ2UgfHwgZmFsc2U7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdGU7XG5cbnZhciBfdG9OdW1iZXIgPSByZXF1aXJlKCdsb2Rhc2gvdG9OdW1iZXInKTtcblxudmFyIF90b051bWJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b051bWJlcik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBjb250ZXh0KSB7XG4gIHZhciBjb25zdHJhaW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICBpZiAoKDAsIF91dGlscy5pc0VtcHR5KSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG5cbiAgcmV0dXJuIGxlbmd0aCA8PSAoMCwgX3RvTnVtYmVyMi5kZWZhdWx0KShjb25zdHJhaW50LnZhbHVlKSB8fCBjb25zdHJhaW50LmVycm9yTWVzc2FnZSB8fCBmYWxzZTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTtcblxudmFyIF9tb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxudmFyIF9tb21lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9tZW50KTtcblxudmFyIF90b051bWJlciA9IHJlcXVpcmUoJ2xvZGFzaC90b051bWJlcicpO1xuXG52YXIgX3RvTnVtYmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvTnVtYmVyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9taW5jaGVja2VkID0gcmVxdWlyZSgnLi9taW5jaGVja2VkJyk7XG5cbnZhciBfbWluY2hlY2tlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9taW5jaGVja2VkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIGNvbnRleHQpIHtcbiAgdmFyIGNvbnN0cmFpbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICB2YXIgaW5wdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGlucHV0LnZhbHVlKSkge1xuICAgIHJldHVybiAoMCwgX21pbmNoZWNrZWQyLmRlZmF1bHQpKHZhbHVlLCBjb250ZXh0LCBjb25zdHJhaW50LCBpbnB1dCk7XG4gIH1cblxuICBpZiAoKDAsIF91dGlscy5pc0VtcHR5KSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuXG4gIGlmIChpbnB1dC52YWxpZGF0aW9ucyAmJiBpbnB1dC52YWxpZGF0aW9ucy5kYXRlIHx8IGlucHV0LnByb3BzICYmIGlucHV0LnByb3BzLnR5cGUgJiYgaW5wdXQucHJvcHMudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnZGF0ZScpIHtcbiAgICByZXR1cm4gKDAsIF9tb21lbnQyLmRlZmF1bHQpKHZhbHVlLCBbX3V0aWxzLmlzb0RhdGVGb3JtYXQsIGNvbnN0cmFpbnQuZm9ybWF0IHx8ICdNTS9ERC9ZWVlZJ10sIHRydWUpLmlzU2FtZU9yQWZ0ZXIoY29uc3RyYWludC52YWx1ZSwgJ2RheScpIHx8IGNvbnN0cmFpbnQuZXJyb3JNZXNzYWdlIHx8IGZhbHNlO1xuICB9XG5cbiAgdmFyIG51bWJlciA9ICgwLCBfdG9OdW1iZXIyLmRlZmF1bHQpKHZhbHVlKTtcblxuICByZXR1cm4gIWlzTmFOKG51bWJlcikgJiYgaXNGaW5pdGUobnVtYmVyKSAmJiBudW1iZXIgPj0gKDAsIF90b051bWJlcjIuZGVmYXVsdCkoY29uc3RyYWludC52YWx1ZSkgfHwgY29uc3RyYWludC5lcnJvck1lc3NhZ2UgfHwgZmFsc2U7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdGU7XG5cbnZhciBfdG9OdW1iZXIgPSByZXF1aXJlKCdsb2Rhc2gvdG9OdW1iZXInKTtcblxudmFyIF90b051bWJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b051bWJlcik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBjb250ZXh0KSB7XG4gIHZhciBjb25zdHJhaW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIGlucHV0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcblxuICBpZiAoKDAsIF91dGlscy5pc0VtcHR5KShpbnB1dC52YWx1ZSkpIHJldHVybiB0cnVlO1xuXG4gIHZhciBtaW4gPSAoMCwgX3RvTnVtYmVyMi5kZWZhdWx0KShjb25zdHJhaW50LnZhbHVlKTtcblxuICByZXR1cm4gIWlzTmFOKG1pbikgJiYgaXNGaW5pdGUobWluKSAmJiAhKDAsIF91dGlscy5pc0RlY2ltYWwpKG1pbikgJiYgbWluIDw9IGlucHV0LnZhbHVlLmxlbmd0aCB8fCBjb25zdHJhaW50LmVycm9yTWVzc2FnZSB8fCBmYWxzZTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTtcblxudmFyIF90b051bWJlciA9IHJlcXVpcmUoJ2xvZGFzaC90b051bWJlcicpO1xuXG52YXIgX3RvTnVtYmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvTnVtYmVyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIGNvbnRleHQpIHtcbiAgdmFyIGNvbnN0cmFpbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gIGlmICgoMCwgX3V0aWxzLmlzRW1wdHkpKHZhbHVlKSkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcblxuICByZXR1cm4gbGVuZ3RoID49ICgwLCBfdG9OdW1iZXIyLmRlZmF1bHQpKGNvbnN0cmFpbnQudmFsdWUpIHx8IGNvbnN0cmFpbnQuZXJyb3JNZXNzYWdlIHx8IGZhbHNlO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZhbGlkYXRlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgSU5URUdFUl9SRUdFWCA9IC9eXFxkKiQvO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgY29udGV4dCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgICBfcmVmJGVycm9yTWVzc2FnZSA9IF9yZWYuZXJyb3JNZXNzYWdlLFxuICAgICAgZXJyb3JNZXNzYWdlID0gX3JlZiRlcnJvck1lc3NhZ2UgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRlcnJvck1lc3NhZ2U7XG5cbiAgaWYgKCgwLCBfdXRpbHMuaXNFbXB0eSkodmFsdWUpKSByZXR1cm4gdHJ1ZTtcblxuICB2YWx1ZSA9IHZhbHVlICsgJyc7XG5cbiAgaWYgKCFJTlRFR0VSX1JFR0VYLnRlc3QodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCAhPT0gMTApIHtcbiAgICByZXR1cm4gZXJyb3JNZXNzYWdlO1xuICB9XG5cbiAgdmFyIGZpcnN0RGlnaXQgPSB2YWx1ZS5jaGFyQXQoMCk7XG4gIGlmIChbJzEnLCAnMicsICczJywgJzQnXS5pbmRleE9mKGZpcnN0RGlnaXQpIDwgMCkge1xuICAgIHJldHVybiBlcnJvck1lc3NhZ2U7XG4gIH1cblxuICB2YXIgZGlnaXQgPSBwYXJzZUludCh2YWx1ZS5jaGFyQXQoOSksIDEwKTtcbiAgdmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgOSk7XG4gIHZhbHVlID0gJzgwODQwJyArIHZhbHVlO1xuXG4gIHZhciBhbHRlcm5hdGUgPSB0cnVlO1xuICB2YXIgdG90YWwgPSAwO1xuXG4gIGZvciAodmFyIGkgPSB2YWx1ZS5sZW5ndGg7IGkgPiAwOyBpLS0pIHtcbiAgICB2YXIgbmV4dCA9IHBhcnNlSW50KHZhbHVlLmNoYXJBdChpIC0gMSksIDEwKTtcbiAgICBpZiAoYWx0ZXJuYXRlKSB7XG4gICAgICBuZXh0ID0gbmV4dCAqIDI7XG4gICAgICBpZiAobmV4dCA+IDkpIHtcbiAgICAgICAgbmV4dCA9IG5leHQgJSAxMCArIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHRvdGFsICs9IG5leHQ7XG4gICAgYWx0ZXJuYXRlID0gIWFsdGVybmF0ZTtcbiAgfVxuXG4gIHZhciByb3VuZFVwID0gTWF0aC5jZWlsKHRvdGFsIC8gMTApICogMTA7XG4gIHZhciBjYWxjdWxhdGVkQ2hlY2sgPSByb3VuZFVwIC0gdG90YWw7XG5cbiAgcmV0dXJuIGNhbGN1bGF0ZWRDaGVjayA9PT0gZGlnaXQgfHwgZXJyb3JNZXNzYWdlO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZhbGlkYXRlO1xuXG52YXIgX2lzTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVtYmVyJyk7XG5cbnZhciBfaXNOdW1iZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNOdW1iZXIpO1xuXG52YXIgX3RvTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL3RvTnVtYmVyJyk7XG5cbnZhciBfdG9OdW1iZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9OdW1iZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgY29udGV4dCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgICBfcmVmJGVycm9yTWVzc2FnZSA9IF9yZWYuZXJyb3JNZXNzYWdlLFxuICAgICAgZXJyb3JNZXNzYWdlID0gX3JlZiRlcnJvck1lc3NhZ2UgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRlcnJvck1lc3NhZ2U7XG5cbiAgaWYgKCgwLCBfdXRpbHMuaXNFbXB0eSkodmFsdWUpKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgbnVtYmVyID0gKDAsIF90b051bWJlcjIuZGVmYXVsdCkodmFsdWUpO1xuXG4gIHJldHVybiAoMCwgX2lzTnVtYmVyMi5kZWZhdWx0KShudW1iZXIpICYmICFpc05hTihudW1iZXIpIHx8IGVycm9yTWVzc2FnZTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTtcblxudmFyIF9pc1JlZ0V4cCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1JlZ0V4cCcpO1xuXG52YXIgX2lzUmVnRXhwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUmVnRXhwKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFJFR0VYID0gL15cXC8oLiopXFwvKFtnaW1dKikkLzsgLy8gcmVndWxhciBleHByZXNzaW9uIHRvIHRlc3QgYSByZWd1bGFyIGV4cHJlc3Npb25cblxuZnVuY3Rpb24gYXNSZWdFeHAocGF0dGVybikge1xuICAvLyBpZiByZWdleCB0aGVuIHJldHVybiBpdFxuICBpZiAoKDAsIF9pc1JlZ0V4cDIuZGVmYXVsdCkocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybjtcbiAgfVxuXG4gIC8vIGlmIHN0cmluZyB0aGVuIHRlc3QgZm9yIHZhbGlkIHJlZ2V4IHRoZW4gY29udmVydCB0byByZWdleCBhbmQgcmV0dXJuXG4gIHZhciBtYXRjaCA9IHBhdHRlcm4ubWF0Y2goUkVHRVgpO1xuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChtYXRjaFsxXSwgbWF0Y2hbMl0pO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybik7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBjb250ZXh0KSB7XG4gIHZhciBjb25zdHJhaW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICBpZiAoKDAsIF91dGlscy5pc0VtcHR5KSh2YWx1ZSkpIHJldHVybiB0cnVlO1xuXG4gIHZhciB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KGNvbnN0cmFpbnQudmFsdWUpID8gY29uc3RyYWludC52YWx1ZSA6IFtjb25zdHJhaW50LnZhbHVlXTtcblxuICByZXR1cm4gdmFsdWVzLnNvbWUoZnVuY3Rpb24gKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gYXNSZWdFeHAoZXhwcmVzc2lvbikudGVzdCh2YWx1ZSk7XG4gIH0pIHx8IGNvbnN0cmFpbnQuZXJyb3JNZXNzYWdlIHx8IGZhbHNlO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZhbGlkYXRlO1xuXG52YXIgX3BhdHRlcm4gPSByZXF1aXJlKCcuL3BhdHRlcm4nKTtcblxudmFyIF9wYXR0ZXJuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdHRlcm4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTkFOUF9SRUdFWFAgPSAvXihcXCs/MVtcXC5cXC1cXHNdPyk/XFwoP1syLTldXFxkezJ9W1xcKVxcLlxcLVxcc10/XFxzP1syLTldXFxkezJ9W1xcLlxcLVxcc10/XFxkezR9JC87XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBjb250ZXh0KSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICAgIF9yZWYkcGF0dGVybiA9IF9yZWYucGF0dGVybixcbiAgICAgIHBhdHRlcm4gPSBfcmVmJHBhdHRlcm4gPT09IHVuZGVmaW5lZCA/IE5BTlBfUkVHRVhQIDogX3JlZiRwYXR0ZXJuLFxuICAgICAgX3JlZiRlcnJvck1lc3NhZ2UgPSBfcmVmLmVycm9yTWVzc2FnZSxcbiAgICAgIGVycm9yTWVzc2FnZSA9IF9yZWYkZXJyb3JNZXNzYWdlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkZXJyb3JNZXNzYWdlO1xuXG4gIHJldHVybiAoMCwgX3BhdHRlcm4yLmRlZmF1bHQpKHZhbHVlLCBjb250ZXh0LCB7IHZhbHVlOiBwYXR0ZXJuLCBlcnJvck1lc3NhZ2U6IGVycm9yTWVzc2FnZSB9KTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIGNvbnRleHQpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9LFxuICAgICAgX3JlZiR2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBlbmFibGVkID0gX3JlZiR2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkdmFsdWUsXG4gICAgICBfcmVmJGVycm9yTWVzc2FnZSA9IF9yZWYuZXJyb3JNZXNzYWdlLFxuICAgICAgZXJyb3JNZXNzYWdlID0gX3JlZiRlcnJvck1lc3NhZ2UgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRlcnJvck1lc3NhZ2U7XG5cbiAgcmV0dXJuICFlbmFibGVkIHx8ICEoMCwgX3V0aWxzLmlzRW1wdHkpKHZhbHVlKSB8fCBlcnJvck1lc3NhZ2UgfHwgZmFsc2U7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdGU7XG5cbnZhciBfdG9OdW1iZXIgPSByZXF1aXJlKCdsb2Rhc2gvdG9OdW1iZXInKTtcblxudmFyIF90b051bWJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b051bWJlcik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxNzExMDM0LzE4NzM0ODVcbmZ1bmN0aW9uIGZsb2F0U2FmZVJlbWFpbmRlcih2YWwsIHN0ZXApIHtcbiAgdmFyIHZhbERlY0NvdW50ID0gKHZhbC50b1N0cmluZygpLnNwbGl0KCcuJylbMV0gfHwgJycpLmxlbmd0aDtcbiAgdmFyIHN0ZXBEZWNDb3VudCA9IChzdGVwLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXSB8fCAnJykubGVuZ3RoO1xuICB2YXIgZGVjQ291bnQgPSB2YWxEZWNDb3VudCA+IHN0ZXBEZWNDb3VudCA/IHZhbERlY0NvdW50IDogc3RlcERlY0NvdW50O1xuICB2YXIgdmFsSW50ID0gcGFyc2VJbnQodmFsLnRvRml4ZWQoZGVjQ291bnQpLnJlcGxhY2UoJy4nLCAnJyksIDEwKTtcbiAgdmFyIHN0ZXBJbnQgPSBwYXJzZUludChzdGVwLnRvRml4ZWQoZGVjQ291bnQpLnJlcGxhY2UoJy4nLCAnJyksIDEwKTtcbiAgcmV0dXJuIHZhbEludCAlIHN0ZXBJbnQgLyBNYXRoLnBvdygxMCwgZGVjQ291bnQpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgY29udGV4dCkge1xuICB2YXIgY29uc3RyYWludCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgaWYgKCgwLCBfdXRpbHMuaXNFbXB0eSkodmFsdWUpKSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmxvYXRTYWZlUmVtYWluZGVyKCgwLCBfdG9OdW1iZXIyLmRlZmF1bHQpKHZhbHVlKSwgKDAsIF90b051bWJlcjIuZGVmYXVsdCkoY29uc3RyYWludC52YWx1ZSkpID09PSAwIHx8IGNvbnN0cmFpbnQuZXJyb3JNZXNzYWdlIHx8IGZhbHNlO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZhbGlkYXRlO1xuXG52YXIgX3BhdHRlcm4gPSByZXF1aXJlKCcuL3BhdHRlcm4nKTtcblxudmFyIF9wYXR0ZXJuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdHRlcm4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9kcGVyaW5pLzcyOTI5NFxudmFyIFVSTF9SRUdFWFAgPSBuZXcgUmVnRXhwKCdeJyArXG4vLyBwcm90b2NvbCBpZGVudGlmaWVyXG4nKD86KD86aHR0cHM/fGZ0cHM/fHNmdHApOi8vKScgK1xuLy8gdXNlcjpwYXNzIGF1dGhlbnRpY2F0aW9uXG4nKD86XFxcXFMrKD86OlxcXFxTKik/QCk/JyArICcoPzonICtcbi8vIElQIGFkZHJlc3MgZXhjbHVzaW9uXG4vLyBwcml2YXRlICYgbG9jYWwgbmV0d29ya3NcbicoPyEoPzoxMHwxMjcpKD86XFxcXC5cXFxcZHsxLDN9KXszfSknICsgJyg/ISg/OjE2OVxcXFwuMjU0fDE5MlxcXFwuMTY4KSg/OlxcXFwuXFxcXGR7MSwzfSl7Mn0pJyArICcoPyExNzJcXFxcLig/OjFbNi05XXwyXFxcXGR8M1swLTFdKSg/OlxcXFwuXFxcXGR7MSwzfSl7Mn0pJyArXG4vLyBJUCBhZGRyZXNzIGRvdHRlZCBub3RhdGlvbiBvY3RldHNcbi8vIGV4Y2x1ZGVzIGxvb3BiYWNrIG5ldHdvcmsgMC4wLjAuMFxuLy8gZXhjbHVkZXMgcmVzZXJ2ZWQgc3BhY2UgPj0gMjI0LjAuMC4wXG4vLyBleGNsdWRlcyBuZXR3b3JrICYgYnJvYWNhc3QgYWRkcmVzc2VzXG4vLyAoZmlyc3QgJiBsYXN0IElQIGFkZHJlc3Mgb2YgZWFjaCBjbGFzcylcbicoPzpbMS05XVxcXFxkP3wxXFxcXGRcXFxcZHwyWzAxXVxcXFxkfDIyWzAtM10pJyArICcoPzpcXFxcLig/OjE/XFxcXGR7MSwyfXwyWzAtNF1cXFxcZHwyNVswLTVdKSl7Mn0nICsgJyg/OlxcXFwuKD86WzEtOV1cXFxcZD98MVxcXFxkXFxcXGR8MlswLTRdXFxcXGR8MjVbMC00XSkpJyArICd8JyArXG4vLyBob3N0IG5hbWVcbicoPzooPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0tKikqW2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKyknICtcbi8vIGRvbWFpbiBuYW1lXG4nKD86XFxcXC4oPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0tKikqW2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKykqJyArXG4vLyBUTEQgaWRlbnRpZmllclxuJyg/OlxcXFwuKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmZdezIsfSkpJyArXG4vLyBUTEQgbWF5IGVuZCB3aXRoIGRvdFxuJ1xcXFwuPycgKyAnKScgK1xuLy8gcG9ydCBudW1iZXJcbicoPzo6XFxcXGR7Miw1fSk/JyArXG4vLyByZXNvdXJjZSBwYXRoXG4nKD86Wy8/I11cXFxcUyopPycgKyAnJCcsICdpJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCBjb250ZXh0KSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICAgIF9yZWYkcGF0dGVybiA9IF9yZWYucGF0dGVybixcbiAgICAgIHBhdHRlcm4gPSBfcmVmJHBhdHRlcm4gPT09IHVuZGVmaW5lZCA/IFVSTF9SRUdFWFAgOiBfcmVmJHBhdHRlcm4sXG4gICAgICBfcmVmJGVycm9yTWVzc2FnZSA9IF9yZWYuZXJyb3JNZXNzYWdlLFxuICAgICAgZXJyb3JNZXNzYWdlID0gX3JlZiRlcnJvck1lc3NhZ2UgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRlcnJvck1lc3NhZ2U7XG5cbiAgcmV0dXJuICgwLCBfcGF0dGVybjIuZGVmYXVsdCkodmFsdWUsIGNvbnRleHQsIHsgdmFsdWU6IHBhdHRlcm4sIGVycm9yTWVzc2FnZTogZXJyb3JNZXNzYWdlIH0pO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuaW5wdXRUeXBlT3ZlcnJpZGUgPSBleHBvcnRzLmlucHV0VHlwZSA9IGV4cG9ydHMuaXNvRGF0ZUZvcm1hdCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuaXNFbXB0eSA9IGlzRW1wdHk7XG5leHBvcnRzLmlzRGVjaW1hbCA9IGlzRGVjaW1hbDtcblxudmFyIF9pc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpO1xuXG52YXIgX2lzU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzU3RyaW5nKTtcblxudmFyIF9pc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpO1xuXG52YXIgX2lzVW5kZWZpbmVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVW5kZWZpbmVkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZ2xvYmFsIGRvY3VtZW50ICovXG52YXIgaXNvRGF0ZUZvcm1hdCA9IGV4cG9ydHMuaXNvRGF0ZUZvcm1hdCA9ICdZWVlZLU1NLUREJztcblxuZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuICByZXR1cm4gKDAsIF9pc1VuZGVmaW5lZDIuZGVmYXVsdCkodmFsdWUpIHx8IHZhbHVlID09PSBudWxsIHx8ICgwLCBfaXNTdHJpbmcyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS50cmltKCkgPT09ICcnIHx8IHZhbHVlID09PSBmYWxzZSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzRGVjaW1hbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJSAxICE9PSAwO1xufVxuXG52YXIgaW5wdXRUeXBlID0gZXhwb3J0cy5pbnB1dFR5cGUgPSB7IGRhdGU6IGZhbHNlLCBudW1iZXI6IGZhbHNlLCB0aW1lOiBmYWxzZSwgbW9udGg6IGZhbHNlLCB3ZWVrOiBmYWxzZSB9O1xuXG52YXIgaW5wdXRUeXBlT3ZlcnJpZGUgPSBleHBvcnRzLmlucHV0VHlwZU92ZXJyaWRlID0gZnVuY3Rpb24gaW5wdXRUeXBlT3ZlcnJpZGUoa2V5LCB2YWx1ZSkge1xuICBpbnB1dFR5cGVba2V5XSA9IHZhbHVlO1xufTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICB2YXIgdGVzdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBmb3IgKHZhciBpIGluIGlucHV0VHlwZSkge1xuICAgIGlmIChpbnB1dFR5cGUuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIHRlc3Rlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpKTtcbiAgICAgIHRlc3Rlci52YWx1ZSA9ICc6KCc7XG5cbiAgICAgIGlmICh0ZXN0ZXIudHlwZSA9PT0gaSAmJiB0ZXN0ZXIudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGlucHV0VHlwZVtpXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5BdlZhbGlkYXRvciA9IGV4cG9ydHMuQXZJbnB1dENvbnRhaW5lciA9IGV4cG9ydHMuQXZCYXNlSW5wdXQgPSBleHBvcnRzLkF2SW5wdXQgPSBleHBvcnRzLkF2UmFkaW8gPSBleHBvcnRzLkF2UmFkaW9Hcm91cCA9IGV4cG9ydHMuQXZHcm91cCA9IGV4cG9ydHMuQXZGb3JtID0gZXhwb3J0cy5BdkZpZWxkID0gZXhwb3J0cy5BdkZlZWRiYWNrID0gZXhwb3J0cy5BdkNoZWNrYm94R3JvdXAgPSBleHBvcnRzLkF2Q2hlY2tib3ggPSB1bmRlZmluZWQ7XG5cbnZhciBfQXZDaGVja2JveCA9IHJlcXVpcmUoJy4vQXZDaGVja2JveCcpO1xuXG52YXIgX0F2Q2hlY2tib3gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXZDaGVja2JveCk7XG5cbnZhciBfQXZDaGVja2JveEdyb3VwID0gcmVxdWlyZSgnLi9BdkNoZWNrYm94R3JvdXAnKTtcblxudmFyIF9BdkNoZWNrYm94R3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXZDaGVja2JveEdyb3VwKTtcblxudmFyIF9BdkZlZWRiYWNrID0gcmVxdWlyZSgnLi9BdkZlZWRiYWNrJyk7XG5cbnZhciBfQXZGZWVkYmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdkZlZWRiYWNrKTtcblxudmFyIF9BdkZpZWxkID0gcmVxdWlyZSgnLi9BdkZpZWxkJyk7XG5cbnZhciBfQXZGaWVsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdkZpZWxkKTtcblxudmFyIF9BdkZvcm0gPSByZXF1aXJlKCcuL0F2Rm9ybScpO1xuXG52YXIgX0F2Rm9ybTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdkZvcm0pO1xuXG52YXIgX0F2R3JvdXAgPSByZXF1aXJlKCcuL0F2R3JvdXAnKTtcblxudmFyIF9Bdkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0F2R3JvdXApO1xuXG52YXIgX0F2UmFkaW9Hcm91cCA9IHJlcXVpcmUoJy4vQXZSYWRpb0dyb3VwJyk7XG5cbnZhciBfQXZSYWRpb0dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0F2UmFkaW9Hcm91cCk7XG5cbnZhciBfQXZSYWRpbyA9IHJlcXVpcmUoJy4vQXZSYWRpbycpO1xuXG52YXIgX0F2UmFkaW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXZSYWRpbyk7XG5cbnZhciBfQXZJbnB1dCA9IHJlcXVpcmUoJy4vQXZJbnB1dCcpO1xuXG52YXIgX0F2SW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXZJbnB1dCk7XG5cbnZhciBfQXZCYXNlSW5wdXQgPSByZXF1aXJlKCcuL0F2QmFzZUlucHV0Jyk7XG5cbnZhciBfQXZCYXNlSW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXZCYXNlSW5wdXQpO1xuXG52YXIgX0F2SW5wdXRDb250YWluZXIgPSByZXF1aXJlKCcuL0F2SW5wdXRDb250YWluZXInKTtcblxudmFyIF9BdklucHV0Q29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0F2SW5wdXRDb250YWluZXIpO1xuXG52YXIgX0F2VmFsaWRhdG9yID0gcmVxdWlyZSgnLi9BdlZhbGlkYXRvcicpO1xuXG52YXIgX0F2VmFsaWRhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0F2VmFsaWRhdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5BdkNoZWNrYm94ID0gX0F2Q2hlY2tib3gyLmRlZmF1bHQ7XG5leHBvcnRzLkF2Q2hlY2tib3hHcm91cCA9IF9BdkNoZWNrYm94R3JvdXAyLmRlZmF1bHQ7XG5leHBvcnRzLkF2RmVlZGJhY2sgPSBfQXZGZWVkYmFjazIuZGVmYXVsdDtcbmV4cG9ydHMuQXZGaWVsZCA9IF9BdkZpZWxkMi5kZWZhdWx0O1xuZXhwb3J0cy5BdkZvcm0gPSBfQXZGb3JtMi5kZWZhdWx0O1xuZXhwb3J0cy5Bdkdyb3VwID0gX0F2R3JvdXAyLmRlZmF1bHQ7XG5leHBvcnRzLkF2UmFkaW9Hcm91cCA9IF9BdlJhZGlvR3JvdXAyLmRlZmF1bHQ7XG5leHBvcnRzLkF2UmFkaW8gPSBfQXZSYWRpbzIuZGVmYXVsdDtcbmV4cG9ydHMuQXZJbnB1dCA9IF9BdklucHV0Mi5kZWZhdWx0O1xuZXhwb3J0cy5BdkJhc2VJbnB1dCA9IF9BdkJhc2VJbnB1dDIuZGVmYXVsdDtcbmV4cG9ydHMuQXZJbnB1dENvbnRhaW5lciA9IF9BdklucHV0Q29udGFpbmVyMi5kZWZhdWx0O1xuZXhwb3J0cy5BdlZhbGlkYXRvciA9IF9BdlZhbGlkYXRvcjIuZGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Byb21pc2UgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9wcm9taXNlXCIpO1xuXG52YXIgX3Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvbWlzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgX3Byb21pc2UyLmRlZmF1bHQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfcHJvbWlzZTIuZGVmYXVsdC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiKTtcbiAgICB9KTtcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCkge1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuNScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IGNyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpIH0pO1xuIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjggfHwgJyc7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgICAvLyB2OCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgICAmJiB2OC5pbmRleE9mKCc2LjYnKSAhPT0gMFxuICAgICAgJiYgdXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZS82NicpID09PSAtMTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBtYXkgdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS1maW5hbGx5XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnUHJvbWlzZScsIHsgJ2ZpbmFsbHknOiBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSk7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIG9uRmluYWxseSA9PSAnZnVuY3Rpb24nO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHksXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyB0aHJvdyBlOyB9KTtcbiAgICB9IDogb25GaW5hbGx5XG4gICk7XG59IH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcbiIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1JlZ0V4cGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSByZWdleHAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzUmVnRXhwKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHJlZ2V4cFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNSZWdFeHA7XG4iLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIHBhdGggY3JlYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlU2V0KG9iamVjdCwgcGF0aCwgdmFsdWUsIGN1c3RvbWl6ZXIpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMSxcbiAgICAgIG5lc3RlZCA9IG9iamVjdDtcblxuICB3aGlsZSAobmVzdGVkICE9IG51bGwgJiYgKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSB0b0tleShwYXRoW2luZGV4XSksXG4gICAgICAgIG5ld1ZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAoaW5kZXggIT0gbGFzdEluZGV4KSB7XG4gICAgICB2YXIgb2JqVmFsdWUgPSBuZXN0ZWRba2V5XTtcbiAgICAgIG5ld1ZhbHVlID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIob2JqVmFsdWUsIGtleSwgbmVzdGVkKSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaXNPYmplY3Qob2JqVmFsdWUpXG4gICAgICAgICAgPyBvYmpWYWx1ZVxuICAgICAgICAgIDogKGlzSW5kZXgocGF0aFtpbmRleCArIDFdKSA/IFtdIDoge30pO1xuICAgICAgfVxuICAgIH1cbiAgICBhc3NpZ25WYWx1ZShuZXN0ZWQsIGtleSwgbmV3VmFsdWUpO1xuICAgIG5lc3RlZCA9IG5lc3RlZFtrZXldO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNldDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBOdW1iZXJgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogKipOb3RlOioqIFRvIGV4Y2x1ZGUgYEluZmluaXR5YCwgYC1JbmZpbml0eWAsIGFuZCBgTmFOYCwgd2hpY2ggYXJlXG4gKiBjbGFzc2lmaWVkIGFzIG51bWJlcnMsIHVzZSB0aGUgYF8uaXNGaW5pdGVgIG1ldGhvZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG51bWJlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTnVtYmVyKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bWJlcignMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IG51bWJlclRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOdW1iZXI7XG4iLCJ2YXIgYmFzZUlzUmVnRXhwID0gcmVxdWlyZSgnLi9fYmFzZUlzUmVnRXhwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1JlZ0V4cCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzUmVnRXhwO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgUmVnRXhwYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSByZWdleHAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1JlZ0V4cCgvYWJjLyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1JlZ0V4cCgnL2FiYy8nKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1JlZ0V4cCA9IG5vZGVJc1JlZ0V4cCA/IGJhc2VVbmFyeShub2RlSXNSZWdFeHApIDogYmFzZUlzUmVnRXhwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUmVnRXhwO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN0cmluZ2AgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN0cmluZywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3RyaW5nKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3RyaW5nKDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fFxuICAgICghaXNBcnJheSh2YWx1ZSkgJiYgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzdHJpbmdUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaW5nO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgdW5kZWZpbmVkYCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKHZvaWQgMCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1VuZGVmaW5lZChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVW5kZWZpbmVkO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGJhc2VTZXQgPSByZXF1aXJlKCcuL19iYXNlU2V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiBhIHBvcnRpb24gb2YgYHBhdGhgIGRvZXNuJ3QgZXhpc3QsXG4gKiBpdCdzIGNyZWF0ZWQuIEFycmF5cyBhcmUgY3JlYXRlZCBmb3IgbWlzc2luZyBpbmRleCBwcm9wZXJ0aWVzIHdoaWxlIG9iamVjdHNcbiAqIGFyZSBjcmVhdGVkIGZvciBhbGwgb3RoZXIgbWlzc2luZyBwcm9wZXJ0aWVzLiBVc2UgYF8uc2V0V2l0aGAgdG8gY3VzdG9taXplXG4gKiBgcGF0aGAgY3JlYXRpb24uXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uc2V0KG9iamVjdCwgJ2FbMF0uYi5jJywgNCk7XG4gKiBjb25zb2xlLmxvZyhvYmplY3QuYVswXS5iLmMpO1xuICogLy8gPT4gNFxuICpcbiAqIF8uc2V0KG9iamVjdCwgWyd4JywgJzAnLCAneScsICd6J10sIDUpO1xuICogY29uc29sZS5sb2cob2JqZWN0LnhbMF0ueS56KTtcbiAqIC8vID0+IDVcbiAqL1xuZnVuY3Rpb24gc2V0KG9iamVjdCwgcGF0aCwgdmFsdWUpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gb2JqZWN0IDogYmFzZVNldChvYmplY3QsIHBhdGgsIHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXQ7XG4iLCJ2YXIgZGVib3VuY2UgPSByZXF1aXJlKCcuL2RlYm91bmNlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iXSwic291cmNlUm9vdCI6IiJ9