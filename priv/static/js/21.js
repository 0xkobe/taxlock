(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./assets/js/pages/forms/BasicElements.js":
/*!************************************************!*\
  !*** ./assets/js/pages/forms/BasicElements.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var InputComponent = function InputComponent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Input")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "input",
    placeholder: "Input"
  })));
};

var TextareaComponent = function TextareaComponent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Textarea")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "textarea",
    name: "input",
    placeholder: "Textarea"
  })));
};

var Checkboxes = function Checkboxes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Checkboxes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "checkbox"
  }), " Option one is this and that\u2014be sure to include why it's great")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "checkbox",
    disabled: true
  }), " Option two is disabled")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    inline: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "checkbox"
  }), " 1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    inline: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "checkbox"
  }), " 2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    inline: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "checkbox",
    disabled: true
  }), " 3"))));
};

var CustomCheckboxes = function CustomCheckboxes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Custom checkboxes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: "checkbox",
    id: "exampleCustomCheckbox",
    label: "Custom checkbox",
    className: "mb-2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: "checkbox",
    id: "exampleCustomCheckbox2",
    label: "Disabled custom checkbox",
    checked: true,
    disabled: true,
    className: "mb-2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: "checkbox",
    id: "exampleCustomCheckbox3",
    label: "Disabled custom checkbox",
    disabled: true
  })));
};

var CustomSelects = function CustomSelects() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Custom selects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: "select",
    id: "exampleCustomSelect",
    name: "customSelect",
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Open this select menu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "One"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Two"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Three")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: "select",
    id: "exampleCustomSelectMultiple",
    name: "customSelectMultiple",
    multiple: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Open this select menu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "One"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Two"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Three"))));
};

var Sizes = function Sizes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Sizes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    placeholder: "Large input",
    bsSize: "lg",
    className: "mb-3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    placeholder: "Medium input",
    className: "mb-3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    placeholder: "Small input",
    bsSize: "sm"
  })));
};

var Radios = function Radios() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Radios")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "radio1",
    checked: true,
    onChange: function onChange() {
      return true;
    }
  }), " ", "Option one is this and that\u2014be sure to include why it's great")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "radio1"
  }), " Option two can be something else and selecting it will deselect option one")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    disabled: true,
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "radio1",
    disabled: true
  }), " Option three is disabled")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    inline: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "radio2",
    checked: true,
    onChange: function onChange() {
      return true;
    }
  }), " 1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    inline: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "radio2"
  }), " 2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    inline: true,
    disabled: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "radio2",
    disabled: true
  }), " 3"))));
};

var CustomRadios = function CustomRadios() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Custom radios")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: "radio",
    id: "exampleCustomRadio",
    name: "customRadio",
    label: "Toggle this custom radio",
    className: "mb-2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: "radio",
    id: "exampleCustomRadio2",
    name: "customRadio",
    label: "Or toggle this other custom radio",
    className: "mb-2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: "radio",
    id: "exampleCustomRadio3",
    label: "Disabled custom radio",
    checked: true,
    disabled: true,
    className: "mb-2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: "radio",
    id: "exampleCustomRadio4",
    label: "Other disabled custom radio",
    disabled: true
  })));
};

var Switches = function Switches() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Switches")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: "switch",
    id: "exampleCustomSwitch",
    name: "customSwitch",
    label: "Toggle this switch element"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CustomInput"], {
    type: "switch",
    id: "exampleCustomSwitch1",
    label: "Disabled switch element",
    disabled: true
  })));
};

var Selects = function Selects() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Selects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "select",
    id: "exampleCustomSelect",
    name: "customSelect",
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Open this select menu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "One"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Two"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Three")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "select",
    id: "exampleCustomSelectMultiple",
    name: "customSelectMultiple",
    multiple: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Open this select menu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "One"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Two"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Three"))));
};

var Disabled = function Disabled() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Disabled")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "disabledInput"
  }, "Disabled input"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "disabledInput",
    id: "disabledInput",
    placeholder: "Disabled input",
    disabled: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "disabledSelect"
  }, "Disabled select menu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "select",
    name: "disabledSelect",
    id: "disabledSelect",
    disabled: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: ""
  }, "Disabled select"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "..."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    check: true,
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "checkbox",
    disabled: true
  }), " Can't check this"))));
};

var ReadOnly = function ReadOnly() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5",
    className: "mb-0"
  }, "Read only")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "readonlyInput",
    id: "readonlyInput",
    placeholder: "Readonly input",
    readOnly: true
  })));
};

var BasicElements = function BasicElements() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    className: "p-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "h3 mb-3"
  }, "Basic Elements"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputComponent, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextareaComponent, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Checkboxes, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomCheckboxes, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomSelects, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sizes, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Radios, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomRadios, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Switches, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Selects, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Disabled, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReadOnly, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (BasicElements);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvZm9ybXMvQmFzaWNFbGVtZW50cy5qcyJdLCJuYW1lcyI6WyJJbnB1dENvbXBvbmVudCIsIlRleHRhcmVhQ29tcG9uZW50IiwiQ2hlY2tib3hlcyIsIkN1c3RvbUNoZWNrYm94ZXMiLCJDdXN0b21TZWxlY3RzIiwiU2l6ZXMiLCJSYWRpb3MiLCJDdXN0b21SYWRpb3MiLCJTd2l0Y2hlcyIsIlNlbGVjdHMiLCJEaXNhYmxlZCIsIlJlYWRPbmx5IiwiQmFzaWNFbGVtZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFjQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsU0FDckIsMkRBQUMsK0NBQUQsUUFDRSwyREFBQyxxREFBRCxRQUNFLDJEQUFDLG9EQUFEO0FBQVcsT0FBRyxFQUFDLElBQWY7QUFBb0IsYUFBUyxFQUFDO0FBQTlCLGFBREYsQ0FERixFQU1FLDJEQUFDLG1EQUFELFFBQ0UsMkRBQUMsZ0RBQUQ7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsT0FBeEI7QUFBZ0MsZUFBVyxFQUFDO0FBQTVDLElBREYsQ0FORixDQURxQjtBQUFBLENBQXZCOztBQWFBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxTQUN4QiwyREFBQywrQ0FBRCxRQUNFLDJEQUFDLHFEQUFELFFBQ0UsMkRBQUMsb0RBQUQ7QUFBVyxPQUFHLEVBQUMsSUFBZjtBQUFvQixhQUFTLEVBQUM7QUFBOUIsZ0JBREYsQ0FERixFQU1FLDJEQUFDLG1EQUFELFFBQ0UsMkRBQUMsZ0RBQUQ7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixRQUFJLEVBQUMsT0FBNUI7QUFBb0MsZUFBVyxFQUFDO0FBQWhELElBREYsQ0FORixDQUR3QjtBQUFBLENBQTFCOztBQWFBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsU0FD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Q0FBakI7O0FBbUJBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxTQUNwQiwyREFBQyxvREFBRDtBQUFXLFNBQUssTUFBaEI7QUFBaUIsYUFBUyxFQUFDO0FBQTNCLEtBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxzQkFERixFQUdFLDJEQUFDLDhDQUFELFFBQ0UsMkRBQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUM7QUFBUixLQUNFLDJEQUFDLGNBQUQsT0FERixFQUVFLDJEQUFDLGlCQUFELE9BRkYsRUFHRSwyREFBQyxVQUFELE9BSEYsRUFJRSwyREFBQyxnQkFBRCxPQUpGLEVBS0UsMkRBQUMsYUFBRCxPQUxGLEVBTUUsMkRBQUMsS0FBRCxPQU5GLENBREYsRUFTRSwyREFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQztBQUFSLEtBQ0UsMkRBQUMsTUFBRCxPQURGLEVBRUUsMkRBQUMsWUFBRCxPQUZGLEVBR0UsMkRBQUMsUUFBRCxPQUhGLEVBSUUsMkRBQUMsT0FBRCxPQUpGLEVBS0UsMkRBQUMsUUFBRCxPQUxGLEVBTUUsMkRBQUMsUUFBRCxPQU5GLENBVEYsQ0FIRixDQURvQjtBQUFBLENBQXRCOztBQXlCZUEsNEVBQWYsRSIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRCb2R5LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZFRpdGxlLFxyXG4gIENvbCxcclxuICBDb250YWluZXIsXHJcbiAgQ3VzdG9tSW5wdXQsXHJcbiAgRm9ybUdyb3VwLFxyXG4gIElucHV0LFxyXG4gIExhYmVsLFxyXG4gIFJvd1xyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBJbnB1dENvbXBvbmVudCA9ICgpID0+IChcclxuICA8Q2FyZD5cclxuICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCIgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgIElucHV0XHJcbiAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgPENhcmRCb2R5PlxyXG4gICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIklucHV0XCIgLz5cclxuICAgIDwvQ2FyZEJvZHk+XHJcbiAgPC9DYXJkPlxyXG4pO1xyXG5cclxuY29uc3QgVGV4dGFyZWFDb21wb25lbnQgPSAoKSA9PiAoXHJcbiAgPENhcmQ+XHJcbiAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICBUZXh0YXJlYVxyXG4gICAgICA8L0NhcmRUaXRsZT5cclxuICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgIDxDYXJkQm9keT5cclxuICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwiVGV4dGFyZWFcIiAvPlxyXG4gICAgPC9DYXJkQm9keT5cclxuICA8L0NhcmQ+XHJcbik7XHJcblxyXG5jb25zdCBDaGVja2JveGVzID0gKCkgPT4gKFxyXG4gIDxDYXJkPlxyXG4gICAgPENhcmRIZWFkZXI+XHJcbiAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIiBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgQ2hlY2tib3hlc1xyXG4gICAgICA8L0NhcmRUaXRsZT5cclxuICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgIDxDYXJkQm9keT5cclxuICAgICAgPEZvcm1Hcm91cCBjaGVjayBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgPExhYmVsIGNoZWNrPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+IE9wdGlvbiBvbmUgaXMgdGhpcyBhbmQgdGhhdOKAlGJlIHN1cmUgdG9cclxuICAgICAgICAgIGluY2x1ZGUgd2h5IGl0J3MgZ3JlYXRcclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgPEZvcm1Hcm91cCBjaGVjayBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgPExhYmVsIGNoZWNrPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIGRpc2FibGVkIC8+IE9wdGlvbiB0d28gaXMgZGlzYWJsZWRcclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgIDxGb3JtR3JvdXAgY2hlY2sgaW5saW5lPlxyXG4gICAgICAgIDxMYWJlbCBjaGVjaz5cclxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPiAxXHJcbiAgICAgICAgPC9MYWJlbD5cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDxGb3JtR3JvdXAgY2hlY2sgaW5saW5lPlxyXG4gICAgICAgIDxMYWJlbCBjaGVjaz5cclxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPiAyXHJcbiAgICAgICAgPC9MYWJlbD5cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDxGb3JtR3JvdXAgY2hlY2sgaW5saW5lPlxyXG4gICAgICAgIDxMYWJlbCBjaGVjaz5cclxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkaXNhYmxlZCAvPiAzXHJcbiAgICAgICAgPC9MYWJlbD5cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICA8L0NhcmRCb2R5PlxyXG4gIDwvQ2FyZD5cclxuKTtcclxuXHJcbmNvbnN0IEN1c3RvbUNoZWNrYm94ZXMgPSAoKSA9PiAoXHJcbiAgPENhcmQ+XHJcbiAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICBDdXN0b20gY2hlY2tib3hlc1xyXG4gICAgICA8L0NhcmRUaXRsZT5cclxuICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgIDxDYXJkQm9keT5cclxuICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICBpZD1cImV4YW1wbGVDdXN0b21DaGVja2JveFwiXHJcbiAgICAgICAgbGFiZWw9XCJDdXN0b20gY2hlY2tib3hcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8Q3VzdG9tSW5wdXRcclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGlkPVwiZXhhbXBsZUN1c3RvbUNoZWNrYm94MlwiXHJcbiAgICAgICAgbGFiZWw9XCJEaXNhYmxlZCBjdXN0b20gY2hlY2tib3hcIlxyXG4gICAgICAgIGNoZWNrZWRcclxuICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8Q3VzdG9tSW5wdXRcclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGlkPVwiZXhhbXBsZUN1c3RvbUNoZWNrYm94M1wiXHJcbiAgICAgICAgbGFiZWw9XCJEaXNhYmxlZCBjdXN0b20gY2hlY2tib3hcIlxyXG4gICAgICAgIGRpc2FibGVkXHJcbiAgICAgIC8+XHJcbiAgICA8L0NhcmRCb2R5PlxyXG4gIDwvQ2FyZD5cclxuKTtcclxuXHJcbmNvbnN0IEN1c3RvbVNlbGVjdHMgPSAoKSA9PiAoXHJcbiAgPENhcmQ+XHJcbiAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICBDdXN0b20gc2VsZWN0c1xyXG4gICAgICA8L0NhcmRUaXRsZT5cclxuICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgIDxDYXJkQm9keT5cclxuICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgdHlwZT1cInNlbGVjdFwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlQ3VzdG9tU2VsZWN0XCJcclxuICAgICAgICBuYW1lPVwiY3VzdG9tU2VsZWN0XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5PcGVuIHRoaXMgc2VsZWN0IG1lbnU8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uPk9uZTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24+VHdvPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbj5UaHJlZTwvb3B0aW9uPlxyXG4gICAgICA8L0N1c3RvbUlucHV0PlxyXG5cclxuICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgdHlwZT1cInNlbGVjdFwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlQ3VzdG9tU2VsZWN0TXVsdGlwbGVcIlxyXG4gICAgICAgIG5hbWU9XCJjdXN0b21TZWxlY3RNdWx0aXBsZVwiXHJcbiAgICAgICAgbXVsdGlwbGVcclxuICAgICAgPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5PcGVuIHRoaXMgc2VsZWN0IG1lbnU8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uPk9uZTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24+VHdvPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbj5UaHJlZTwvb3B0aW9uPlxyXG4gICAgICA8L0N1c3RvbUlucHV0PlxyXG4gICAgPC9DYXJkQm9keT5cclxuICA8L0NhcmQ+XHJcbik7XHJcblxyXG5jb25zdCBTaXplcyA9ICgpID0+IChcclxuICA8Q2FyZD5cclxuICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCIgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgIFNpemVzXHJcbiAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgPENhcmRCb2R5PlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXJnZSBpbnB1dFwiXHJcbiAgICAgICAgYnNTaXplPVwibGdcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1lZGl1bSBpbnB1dFwiIGNsYXNzTmFtZT1cIm1iLTNcIiAvPlxyXG4gICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNtYWxsIGlucHV0XCIgYnNTaXplPVwic21cIiAvPlxyXG4gICAgPC9DYXJkQm9keT5cclxuICA8L0NhcmQ+XHJcbik7XHJcblxyXG5jb25zdCBSYWRpb3MgPSAoKSA9PiAoXHJcbiAgPENhcmQ+XHJcbiAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICBSYWRpb3NcclxuICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICA8Q2FyZEJvZHk+XHJcbiAgICAgIDxGb3JtR3JvdXAgY2hlY2sgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgIDxMYWJlbCBjaGVjaz5cclxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW8xXCIgY2hlY2tlZCBvbkNoYW5nZT17KCkgPT4gdHJ1ZX0gLz57XCIgXCJ9XHJcbiAgICAgICAgICBPcHRpb24gb25lIGlzIHRoaXMgYW5kIHRoYXTigJRiZSBzdXJlIHRvIGluY2x1ZGUgd2h5IGl0J3MgZ3JlYXRcclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgPEZvcm1Hcm91cCBjaGVjayBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgPExhYmVsIGNoZWNrPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpbzFcIiAvPiBPcHRpb24gdHdvIGNhbiBiZSBzb21ldGhpbmcgZWxzZVxyXG4gICAgICAgICAgYW5kIHNlbGVjdGluZyBpdCB3aWxsIGRlc2VsZWN0IG9wdGlvbiBvbmVcclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgPEZvcm1Hcm91cCBjaGVjayBkaXNhYmxlZCBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgPExhYmVsIGNoZWNrPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpbzFcIiBkaXNhYmxlZCAvPiBPcHRpb24gdGhyZWUgaXMgZGlzYWJsZWRcclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgIDxGb3JtR3JvdXAgY2hlY2sgaW5saW5lPlxyXG4gICAgICAgIDxMYWJlbCBjaGVjaz5cclxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicmFkaW8yXCIgY2hlY2tlZCBvbkNoYW5nZT17KCkgPT4gdHJ1ZX0gLz4gMVxyXG4gICAgICAgIDwvTGFiZWw+XHJcbiAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICA8Rm9ybUdyb3VwIGNoZWNrIGlubGluZT5cclxuICAgICAgICA8TGFiZWwgY2hlY2s+XHJcbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvMlwiIC8+IDJcclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgPEZvcm1Hcm91cCBjaGVjayBpbmxpbmUgZGlzYWJsZWQ+XHJcbiAgICAgICAgPExhYmVsIGNoZWNrPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpbzJcIiBkaXNhYmxlZCAvPiAzXHJcbiAgICAgICAgPC9MYWJlbD5cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICA8L0NhcmRCb2R5PlxyXG4gIDwvQ2FyZD5cclxuKTtcclxuXHJcbmNvbnN0IEN1c3RvbVJhZGlvcyA9ICgpID0+IChcclxuICA8Q2FyZD5cclxuICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCIgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgIEN1c3RvbSByYWRpb3NcclxuICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICA8Q2FyZEJvZHk+XHJcbiAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlQ3VzdG9tUmFkaW9cIlxyXG4gICAgICAgIG5hbWU9XCJjdXN0b21SYWRpb1wiXHJcbiAgICAgICAgbGFiZWw9XCJUb2dnbGUgdGhpcyBjdXN0b20gcmFkaW9cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8Q3VzdG9tSW5wdXRcclxuICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgIGlkPVwiZXhhbXBsZUN1c3RvbVJhZGlvMlwiXHJcbiAgICAgICAgbmFtZT1cImN1c3RvbVJhZGlvXCJcclxuICAgICAgICBsYWJlbD1cIk9yIHRvZ2dsZSB0aGlzIG90aGVyIGN1c3RvbSByYWRpb1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItMlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlQ3VzdG9tUmFkaW8zXCJcclxuICAgICAgICBsYWJlbD1cIkRpc2FibGVkIGN1c3RvbSByYWRpb1wiXHJcbiAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItMlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlQ3VzdG9tUmFkaW80XCJcclxuICAgICAgICBsYWJlbD1cIk90aGVyIGRpc2FibGVkIGN1c3RvbSByYWRpb1wiXHJcbiAgICAgICAgZGlzYWJsZWRcclxuICAgICAgLz5cclxuICAgIDwvQ2FyZEJvZHk+XHJcbiAgPC9DYXJkPlxyXG4pO1xyXG5cclxuY29uc3QgU3dpdGNoZXMgPSAoKSA9PiAoXHJcbiAgPENhcmQ+XHJcbiAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICBTd2l0Y2hlc1xyXG4gICAgICA8L0NhcmRUaXRsZT5cclxuICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgIDxDYXJkQm9keT5cclxuICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgdHlwZT1cInN3aXRjaFwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlQ3VzdG9tU3dpdGNoXCJcclxuICAgICAgICBuYW1lPVwiY3VzdG9tU3dpdGNoXCJcclxuICAgICAgICBsYWJlbD1cIlRvZ2dsZSB0aGlzIHN3aXRjaCBlbGVtZW50XCJcclxuICAgICAgLz5cclxuICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgdHlwZT1cInN3aXRjaFwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlQ3VzdG9tU3dpdGNoMVwiXHJcbiAgICAgICAgbGFiZWw9XCJEaXNhYmxlZCBzd2l0Y2ggZWxlbWVudFwiXHJcbiAgICAgICAgZGlzYWJsZWRcclxuICAgICAgLz5cclxuICAgIDwvQ2FyZEJvZHk+XHJcbiAgPC9DYXJkPlxyXG4pO1xyXG5cclxuY29uc3QgU2VsZWN0cyA9ICgpID0+IChcclxuICA8Q2FyZD5cclxuICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCIgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgIFNlbGVjdHNcclxuICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICA8Q2FyZEJvZHk+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHR5cGU9XCJzZWxlY3RcIlxyXG4gICAgICAgIGlkPVwiZXhhbXBsZUN1c3RvbVNlbGVjdFwiXHJcbiAgICAgICAgbmFtZT1cImN1c3RvbVNlbGVjdFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgID5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+T3BlbiB0aGlzIHNlbGVjdCBtZW51PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbj5PbmU8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uPlR3bzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24+VGhyZWU8L29wdGlvbj5cclxuICAgICAgPC9JbnB1dD5cclxuXHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHR5cGU9XCJzZWxlY3RcIlxyXG4gICAgICAgIGlkPVwiZXhhbXBsZUN1c3RvbVNlbGVjdE11bHRpcGxlXCJcclxuICAgICAgICBuYW1lPVwiY3VzdG9tU2VsZWN0TXVsdGlwbGVcIlxyXG4gICAgICAgIG11bHRpcGxlXHJcbiAgICAgID5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+T3BlbiB0aGlzIHNlbGVjdCBtZW51PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbj5PbmU8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uPlR3bzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24+VGhyZWU8L29wdGlvbj5cclxuICAgICAgPC9JbnB1dD5cclxuICAgIDwvQ2FyZEJvZHk+XHJcbiAgPC9DYXJkPlxyXG4pO1xyXG5cclxuY29uc3QgRGlzYWJsZWQgPSAoKSA9PiAoXHJcbiAgPENhcmQ+XHJcbiAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICBEaXNhYmxlZFxyXG4gICAgICA8L0NhcmRUaXRsZT5cclxuICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgIDxDYXJkQm9keT5cclxuICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICA8TGFiZWwgZm9yPVwiZGlzYWJsZWRJbnB1dFwiPkRpc2FibGVkIGlucHV0PC9MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJkaXNhYmxlZElucHV0XCJcclxuICAgICAgICAgIGlkPVwiZGlzYWJsZWRJbnB1dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpc2FibGVkIGlucHV0XCJcclxuICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgPExhYmVsIGZvcj1cImRpc2FibGVkU2VsZWN0XCI+RGlzYWJsZWQgc2VsZWN0IG1lbnU8L0xhYmVsPlxyXG4gICAgICAgIDxJbnB1dCB0eXBlPVwic2VsZWN0XCIgbmFtZT1cImRpc2FibGVkU2VsZWN0XCIgaWQ9XCJkaXNhYmxlZFNlbGVjdFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkRpc2FibGVkIHNlbGVjdDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbj4uLi48L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24+Li4uPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uPi4uLjwvb3B0aW9uPlxyXG4gICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgPEZvcm1Hcm91cCBjaGVjayBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgPExhYmVsIGNoZWNrPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIGRpc2FibGVkIC8+IENhbid0IGNoZWNrIHRoaXNcclxuICAgICAgICA8L0xhYmVsPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuICAgIDwvQ2FyZEJvZHk+XHJcbiAgPC9DYXJkPlxyXG4pO1xyXG5cclxuY29uc3QgUmVhZE9ubHkgPSAoKSA9PiAoXHJcbiAgPENhcmQ+XHJcbiAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICBSZWFkIG9ubHlcclxuICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICA8Q2FyZEJvZHk+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBuYW1lPVwicmVhZG9ubHlJbnB1dFwiXHJcbiAgICAgICAgaWQ9XCJyZWFkb25seUlucHV0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlJlYWRvbmx5IGlucHV0XCJcclxuICAgICAgICByZWFkT25seVxyXG4gICAgICAvPlxyXG4gICAgPC9DYXJkQm9keT5cclxuICA8L0NhcmQ+XHJcbik7XHJcblxyXG5jb25zdCBCYXNpY0VsZW1lbnRzID0gKCkgPT4gKFxyXG4gIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwiaDMgbWItM1wiPkJhc2ljIEVsZW1lbnRzPC9oMT5cclxuXHJcbiAgICA8Um93PlxyXG4gICAgICA8Q29sIGxnPVwiNlwiPlxyXG4gICAgICAgIDxJbnB1dENvbXBvbmVudCAvPlxyXG4gICAgICAgIDxUZXh0YXJlYUNvbXBvbmVudCAvPlxyXG4gICAgICAgIDxDaGVja2JveGVzIC8+XHJcbiAgICAgICAgPEN1c3RvbUNoZWNrYm94ZXMgLz5cclxuICAgICAgICA8Q3VzdG9tU2VsZWN0cyAvPlxyXG4gICAgICAgIDxTaXplcyAvPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBsZz1cIjZcIj5cclxuICAgICAgICA8UmFkaW9zIC8+XHJcbiAgICAgICAgPEN1c3RvbVJhZGlvcyAvPlxyXG4gICAgICAgIDxTd2l0Y2hlcyAvPlxyXG4gICAgICAgIDxTZWxlY3RzIC8+XHJcbiAgICAgICAgPERpc2FibGVkIC8+XHJcbiAgICAgICAgPFJlYWRPbmx5IC8+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgPC9Db250YWluZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNpY0VsZW1lbnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9