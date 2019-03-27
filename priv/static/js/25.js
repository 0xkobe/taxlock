(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./assets/js/pages/forms/Validation.js":
/*!*********************************************!*\
  !*** ./assets/js/pages/forms/Validation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! availity-reactstrap-validation */ "./node_modules/availity-reactstrap-validation/lib/index.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var Validation = function Validation() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    className: "p-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "h3 mb-3"
  }, "Validation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    tag: "h5"
  }, "Availity Validation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "Form validation by availity-reactstrap-validation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvForm"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvField"], {
    name: "name",
    label: "Name",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    for: "example"
  }, "Rank"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvInput"], {
    name: "rank",
    id: "example",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvFeedback"], null, "This is an error!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Radio Buttons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadioGroup"], {
    name: "radioExample",
    required: true,
    errorMessage: "Pick one!"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    label: "Bulbasaur",
    value: "Bulbasaur"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    label: "Squirtle",
    value: "Squirtle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    label: "Charmander",
    value: "Charmander"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    label: "Pikachu",
    value: "Pikachu",
    disabled: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Inline Radio Buttons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadioGroup"], {
    inline: true,
    name: "radioExample2",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    label: "Bulbasaur",
    value: "Bulbasaur"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    label: "Squirtle",
    value: "Squirtle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    label: "Charmander",
    value: "Charmander"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    label: "Pikachu",
    value: "Pikachu",
    disabled: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Custom Radio Buttons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadioGroup"], {
    name: "radioCustomInputExample",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    customInput: true,
    label: "Bulbasaur",
    value: "Bulbasaur"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    customInput: true,
    label: "Squirtle",
    value: "Squirtle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    customInput: true,
    label: "Charmander",
    value: "Charmander"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    customInput: true,
    label: "Pikachu",
    value: "Pikachu",
    disabled: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Custom Inline Radio Buttons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadioGroup"], {
    inline: true,
    name: "radioCustomInputExample2",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    customInput: true,
    label: "Bulbasaur",
    value: "Bulbasaur"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    customInput: true,
    label: "Squirtle",
    value: "Squirtle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    customInput: true,
    label: "Charmander",
    value: "Charmander"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvRadio"], {
    customInput: true,
    label: "Pikachu",
    value: "Pikachu",
    disabled: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Checkboxes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckboxGroup"], {
    name: "checkboxExample",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    label: "Bulbasaur",
    value: "Bulbasaur"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    label: "Squirtle",
    value: "Squirtle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    label: "Charmander",
    value: "Charmander"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    label: "Pikachu",
    value: "Pikachu",
    disabled: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Inline Checkboxes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckboxGroup"], {
    inline: true,
    name: "checkboxExample2",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    label: "Bulbasaur",
    value: "Bulbasaur"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    label: "Squirtle",
    value: "Squirtle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    label: "Charmander",
    value: "Charmander"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    label: "Pikachu",
    value: "Pikachu",
    disabled: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Custom Checkboxes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckboxGroup"], {
    name: "checkboxCustomInputExample",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    customInput: true,
    label: "Bulbasaur",
    value: "Bulbasaur"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    customInput: true,
    label: "Squirtle",
    value: "Squirtle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    customInput: true,
    label: "Charmander",
    value: "Charmander"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    customInput: true,
    label: "Pikachu",
    value: "Pikachu",
    disabled: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Custom Inline Checkboxes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckboxGroup"], {
    inline: true,
    name: "checkboxCustomInputExample2",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    customInput: true,
    label: "Bulbasaur",
    value: "Bulbasaur"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    customInput: true,
    label: "Squirtle",
    value: "Squirtle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    customInput: true,
    label: "Charmander",
    value: "Charmander"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvCheckbox"], {
    customInput: true,
    label: "Pikachu",
    value: "Pikachu",
    disabled: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvField"], {
    type: "select",
    name: "select",
    label: "Option",
    helpMessage: "Idk, this is an example. Deal with it!"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "5")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvField"], {
    type: "select",
    name: "select-multiple",
    label: "Option",
    helpMessage: "MULTIPLE!",
    multiple: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "5")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvGroup"], {
    check: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvInput"], {
    type: "checkbox",
    name: "checkbox"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    check: true,
    for: "checkbox"
  }, " ", "Check it out")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvField"], {
    type: "checkbox",
    name: "avFieldCheckbox",
    label: "Check out this AvField checkbox",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvInput"], {
    tag: reactstrap__WEBPACK_IMPORTED_MODULE_2__["CustomInput"],
    type: "checkbox",
    name: "customCheckbox",
    label: "Check out this custom input checkbox",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvField"], {
    tag: reactstrap__WEBPACK_IMPORTED_MODULE_2__["CustomInput"],
    type: "checkbox",
    name: "customCheckbox1",
    label: "Check out this custom input checkbox from AvField",
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Submit"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Validation);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvZm9ybXMvVmFsaWRhdGlvbi5qcyJdLCJuYW1lcyI6WyJWYWxpZGF0aW9uIiwiQ3VzdG9tSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBV0E7O0FBWUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUNqQiwyREFBQyxvREFBRDtBQUFXLFNBQUssTUFBaEI7QUFBaUIsYUFBUyxFQUFDO0FBQTNCLEtBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxrQkFERixFQUdFLDJEQUFDLCtDQUFELFFBQ0UsMkRBQUMscURBQUQsUUFDRSwyREFBQyxvREFBRDtBQUFXLE9BQUcsRUFBQztBQUFmLDJCQURGLEVBRUU7QUFBSSxhQUFTLEVBQUM7QUFBZCx5REFGRixDQURGLEVBT0UsMkRBQUMsbURBQUQsUUFDRSwyREFBQyxxRUFBRCxRQUVFLDJEQUFDLHNFQUFEO0FBQVMsUUFBSSxFQUFDLE1BQWQ7QUFBcUIsU0FBSyxFQUFDLE1BQTNCO0FBQWtDLFlBQVE7QUFBMUMsSUFGRixFQUlFLDJEQUFDLHNFQUFELFFBQ0UsMkRBQUMsZ0RBQUQ7QUFBTyxPQUFHLEVBQUM7QUFBWCxZQURGLEVBRUUsMkRBQUMsc0VBQUQ7QUFBUyxRQUFJLEVBQUMsTUFBZDtBQUFxQixNQUFFLEVBQUMsU0FBeEI7QUFBa0MsWUFBUTtBQUExQyxJQUZGLEVBR0UsMkRBQUMseUVBQUQsNEJBSEYsQ0FKRixFQVVFLHNFQVZGLEVBY0UsdUZBZEYsRUFlRSwyREFBQywyRUFBRDtBQUFjLFFBQUksRUFBQyxjQUFuQjtBQUFrQyxZQUFRLE1BQTFDO0FBQTJDLGdCQUFZLEVBQUM7QUFBeEQsS0FDRSwyREFBQyxzRUFBRDtBQUFTLFNBQUssRUFBQyxXQUFmO0FBQTJCLFNBQUssRUFBQztBQUFqQyxJQURGLEVBRUUsMkRBQUMsc0VBQUQ7QUFBUyxTQUFLLEVBQUMsVUFB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U0FBSyxFQUFDLGlDQUhSO0FBSUUsWUFBUTtBQUpWLElBVEYsRUFnQkUsMkRBQUMsc0VBQUQ7QUFDRSxPQUFHLEVBQUVDLHNEQURQO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxRQUFJLEVBQUMsZ0JBSFA7QUFJRSxTQUFLLEVBQUMsc0NBSlI7QUFLRSxZQUFRO0FBTFYsSUFoQkYsRUF3QkUsMkRBQUMsc0VBQUQ7QUFDRSxPQUFHLEVBQUVBLHNEQURQO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxRQUFJLEVBQUMsaUJBSFA7QUFJRSxTQUFLLEVBQUMsbURBSlI7QUFLRSxZQUFRO0FBTFYsSUF4QkYsQ0EvR0YsRUFnSkUsMkRBQUMsb0RBQUQsUUFDRSwyREFBQyxpREFBRCxpQkFERixDQWhKRixDQURGLENBUEYsQ0FIRixDQURpQjtBQUFBLENBQW5COztBQXFLZUQseUVBQWYsRSIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQXZGb3JtLFxyXG4gIEF2RmllbGQsXHJcbiAgQXZHcm91cCxcclxuICBBdklucHV0LFxyXG4gIEF2RmVlZGJhY2ssXHJcbiAgQXZSYWRpb0dyb3VwLFxyXG4gIEF2UmFkaW8sXHJcbiAgQXZDaGVja2JveEdyb3VwLFxyXG4gIEF2Q2hlY2tib3hcclxufSBmcm9tIFwiYXZhaWxpdHktcmVhY3RzdHJhcC12YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQm9keSxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRUaXRsZSxcclxuICBDb250YWluZXIsXHJcbiAgQnV0dG9uLFxyXG4gIExhYmVsLFxyXG4gIEZvcm1Hcm91cCxcclxuICBDdXN0b21JbnB1dFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jb25zdCBWYWxpZGF0aW9uID0gKCkgPT4gKFxyXG4gIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwiaDMgbWItM1wiPlZhbGlkYXRpb248L2gxPlxyXG5cclxuICAgIDxDYXJkPlxyXG4gICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+QXZhaWxpdHkgVmFsaWRhdGlvbjwvQ2FyZFRpdGxlPlxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgIEZvcm0gdmFsaWRhdGlvbiBieSBhdmFpbGl0eS1yZWFjdHN0cmFwLXZhbGlkYXRpb25cclxuICAgICAgICA8L2g2PlxyXG4gICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICA8QXZGb3JtPlxyXG4gICAgICAgICAgey8qIFdpdGggQXZGaWVsZCAqL31cclxuICAgICAgICAgIDxBdkZpZWxkIG5hbWU9XCJuYW1lXCIgbGFiZWw9XCJOYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgIHsvKiBXaXRoIEF2R3JvdXAgQXZJbnB1dCBhbmQgQXZGZWVkYmFjayB0byBidWlsZCB5b3VyIG93biAqL31cclxuICAgICAgICAgIDxBdkdyb3VwPlxyXG4gICAgICAgICAgICA8TGFiZWwgZm9yPVwiZXhhbXBsZVwiPlJhbms8L0xhYmVsPlxyXG4gICAgICAgICAgICA8QXZJbnB1dCBuYW1lPVwicmFua1wiIGlkPVwiZXhhbXBsZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDxBdkZlZWRiYWNrPlRoaXMgaXMgYW4gZXJyb3IhPC9BdkZlZWRiYWNrPlxyXG4gICAgICAgICAgPC9Bdkdyb3VwPlxyXG5cclxuICAgICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICAgIHsvKiBSYWRpb3MgKi99XHJcblxyXG4gICAgICAgICAgPGg0PlJhZGlvIEJ1dHRvbnM8L2g0PlxyXG4gICAgICAgICAgPEF2UmFkaW9Hcm91cCBuYW1lPVwicmFkaW9FeGFtcGxlXCIgcmVxdWlyZWQgZXJyb3JNZXNzYWdlPVwiUGljayBvbmUhXCI+XHJcbiAgICAgICAgICAgIDxBdlJhZGlvIGxhYmVsPVwiQnVsYmFzYXVyXCIgdmFsdWU9XCJCdWxiYXNhdXJcIiAvPlxyXG4gICAgICAgICAgICA8QXZSYWRpbyBsYWJlbD1cIlNxdWlydGxlXCIgdmFsdWU9XCJTcXVpcnRsZVwiIC8+XHJcbiAgICAgICAgICAgIDxBdlJhZGlvIGxhYmVsPVwiQ2hhcm1hbmRlclwiIHZhbHVlPVwiQ2hhcm1hbmRlclwiIC8+XHJcbiAgICAgICAgICAgIDxBdlJhZGlvIGxhYmVsPVwiUGlrYWNodVwiIHZhbHVlPVwiUGlrYWNodVwiIGRpc2FibGVkIC8+XHJcbiAgICAgICAgICA8L0F2UmFkaW9Hcm91cD5cclxuXHJcbiAgICAgICAgICA8aDQ+SW5saW5lIFJhZGlvIEJ1dHRvbnM8L2g0PlxyXG4gICAgICAgICAgPEF2UmFkaW9Hcm91cCBpbmxpbmUgbmFtZT1cInJhZGlvRXhhbXBsZTJcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPEF2UmFkaW8gbGFiZWw9XCJCdWxiYXNhdXJcIiB2YWx1ZT1cIkJ1bGJhc2F1clwiIC8+XHJcbiAgICAgICAgICAgIDxBdlJhZGlvIGxhYmVsPVwiU3F1aXJ0bGVcIiB2YWx1ZT1cIlNxdWlydGxlXCIgLz5cclxuICAgICAgICAgICAgPEF2UmFkaW8gbGFiZWw9XCJDaGFybWFuZGVyXCIgdmFsdWU9XCJDaGFybWFuZGVyXCIgLz5cclxuICAgICAgICAgICAgPEF2UmFkaW8gbGFiZWw9XCJQaWthY2h1XCIgdmFsdWU9XCJQaWthY2h1XCIgZGlzYWJsZWQgLz5cclxuICAgICAgICAgIDwvQXZSYWRpb0dyb3VwPlxyXG5cclxuICAgICAgICAgIDxoND5DdXN0b20gUmFkaW8gQnV0dG9uczwvaDQ+XHJcbiAgICAgICAgICA8QXZSYWRpb0dyb3VwIG5hbWU9XCJyYWRpb0N1c3RvbUlucHV0RXhhbXBsZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8QXZSYWRpbyBjdXN0b21JbnB1dCBsYWJlbD1cIkJ1bGJhc2F1clwiIHZhbHVlPVwiQnVsYmFzYXVyXCIgLz5cclxuICAgICAgICAgICAgPEF2UmFkaW8gY3VzdG9tSW5wdXQgbGFiZWw9XCJTcXVpcnRsZVwiIHZhbHVlPVwiU3F1aXJ0bGVcIiAvPlxyXG4gICAgICAgICAgICA8QXZSYWRpbyBjdXN0b21JbnB1dCBsYWJlbD1cIkNoYXJtYW5kZXJcIiB2YWx1ZT1cIkNoYXJtYW5kZXJcIiAvPlxyXG4gICAgICAgICAgICA8QXZSYWRpbyBjdXN0b21JbnB1dCBsYWJlbD1cIlBpa2FjaHVcIiB2YWx1ZT1cIlBpa2FjaHVcIiBkaXNhYmxlZCAvPlxyXG4gICAgICAgICAgPC9BdlJhZGlvR3JvdXA+XHJcblxyXG4gICAgICAgICAgPGg0PkN1c3RvbSBJbmxpbmUgUmFkaW8gQnV0dG9uczwvaDQ+XHJcbiAgICAgICAgICA8QXZSYWRpb0dyb3VwIGlubGluZSBuYW1lPVwicmFkaW9DdXN0b21JbnB1dEV4YW1wbGUyXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxBdlJhZGlvIGN1c3RvbUlucHV0IGxhYmVsPVwiQnVsYmFzYXVyXCIgdmFsdWU9XCJCdWxiYXNhdXJcIiAvPlxyXG4gICAgICAgICAgICA8QXZSYWRpbyBjdXN0b21JbnB1dCBsYWJlbD1cIlNxdWlydGxlXCIgdmFsdWU9XCJTcXVpcnRsZVwiIC8+XHJcbiAgICAgICAgICAgIDxBdlJhZGlvIGN1c3RvbUlucHV0IGxhYmVsPVwiQ2hhcm1hbmRlclwiIHZhbHVlPVwiQ2hhcm1hbmRlclwiIC8+XHJcbiAgICAgICAgICAgIDxBdlJhZGlvIGN1c3RvbUlucHV0IGxhYmVsPVwiUGlrYWNodVwiIHZhbHVlPVwiUGlrYWNodVwiIGRpc2FibGVkIC8+XHJcbiAgICAgICAgICA8L0F2UmFkaW9Hcm91cD5cclxuXHJcbiAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICB7LyogY2hlY2tib3hlcyAqL31cclxuICAgICAgICAgIDxoND5DaGVja2JveGVzPC9oND5cclxuICAgICAgICAgIDxBdkNoZWNrYm94R3JvdXAgbmFtZT1cImNoZWNrYm94RXhhbXBsZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8QXZDaGVja2JveCBsYWJlbD1cIkJ1bGJhc2F1clwiIHZhbHVlPVwiQnVsYmFzYXVyXCIgLz5cclxuICAgICAgICAgICAgPEF2Q2hlY2tib3ggbGFiZWw9XCJTcXVpcnRsZVwiIHZhbHVlPVwiU3F1aXJ0bGVcIiAvPlxyXG4gICAgICAgICAgICA8QXZDaGVja2JveCBsYWJlbD1cIkNoYXJtYW5kZXJcIiB2YWx1ZT1cIkNoYXJtYW5kZXJcIiAvPlxyXG4gICAgICAgICAgICA8QXZDaGVja2JveCBsYWJlbD1cIlBpa2FjaHVcIiB2YWx1ZT1cIlBpa2FjaHVcIiBkaXNhYmxlZCAvPlxyXG4gICAgICAgICAgPC9BdkNoZWNrYm94R3JvdXA+XHJcblxyXG4gICAgICAgICAgPGg0PklubGluZSBDaGVja2JveGVzPC9oND5cclxuICAgICAgICAgIDxBdkNoZWNrYm94R3JvdXAgaW5saW5lIG5hbWU9XCJjaGVja2JveEV4YW1wbGUyXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxBdkNoZWNrYm94IGxhYmVsPVwiQnVsYmFzYXVyXCIgdmFsdWU9XCJCdWxiYXNhdXJcIiAvPlxyXG4gICAgICAgICAgICA8QXZDaGVja2JveCBsYWJlbD1cIlNxdWlydGxlXCIgdmFsdWU9XCJTcXVpcnRsZVwiIC8+XHJcbiAgICAgICAgICAgIDxBdkNoZWNrYm94IGxhYmVsPVwiQ2hhcm1hbmRlclwiIHZhbHVlPVwiQ2hhcm1hbmRlclwiIC8+XHJcbiAgICAgICAgICAgIDxBdkNoZWNrYm94IGxhYmVsPVwiUGlrYWNodVwiIHZhbHVlPVwiUGlrYWNodVwiIGRpc2FibGVkIC8+XHJcbiAgICAgICAgICA8L0F2Q2hlY2tib3hHcm91cD5cclxuXHJcbiAgICAgICAgICA8aDQ+Q3VzdG9tIENoZWNrYm94ZXM8L2g0PlxyXG4gICAgICAgICAgPEF2Q2hlY2tib3hHcm91cCBuYW1lPVwiY2hlY2tib3hDdXN0b21JbnB1dEV4YW1wbGVcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPEF2Q2hlY2tib3ggY3VzdG9tSW5wdXQgbGFiZWw9XCJCdWxiYXNhdXJcIiB2YWx1ZT1cIkJ1bGJhc2F1clwiIC8+XHJcbiAgICAgICAgICAgIDxBdkNoZWNrYm94IGN1c3RvbUlucHV0IGxhYmVsPVwiU3F1aXJ0bGVcIiB2YWx1ZT1cIlNxdWlydGxlXCIgLz5cclxuICAgICAgICAgICAgPEF2Q2hlY2tib3ggY3VzdG9tSW5wdXQgbGFiZWw9XCJDaGFybWFuZGVyXCIgdmFsdWU9XCJDaGFybWFuZGVyXCIgLz5cclxuICAgICAgICAgICAgPEF2Q2hlY2tib3ggY3VzdG9tSW5wdXQgbGFiZWw9XCJQaWthY2h1XCIgdmFsdWU9XCJQaWthY2h1XCIgZGlzYWJsZWQgLz5cclxuICAgICAgICAgIDwvQXZDaGVja2JveEdyb3VwPlxyXG5cclxuICAgICAgICAgIDxoND5DdXN0b20gSW5saW5lIENoZWNrYm94ZXM8L2g0PlxyXG4gICAgICAgICAgPEF2Q2hlY2tib3hHcm91cCBpbmxpbmUgbmFtZT1cImNoZWNrYm94Q3VzdG9tSW5wdXRFeGFtcGxlMlwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8QXZDaGVja2JveCBjdXN0b21JbnB1dCBsYWJlbD1cIkJ1bGJhc2F1clwiIHZhbHVlPVwiQnVsYmFzYXVyXCIgLz5cclxuICAgICAgICAgICAgPEF2Q2hlY2tib3ggY3VzdG9tSW5wdXQgbGFiZWw9XCJTcXVpcnRsZVwiIHZhbHVlPVwiU3F1aXJ0bGVcIiAvPlxyXG4gICAgICAgICAgICA8QXZDaGVja2JveCBjdXN0b21JbnB1dCBsYWJlbD1cIkNoYXJtYW5kZXJcIiB2YWx1ZT1cIkNoYXJtYW5kZXJcIiAvPlxyXG4gICAgICAgICAgICA8QXZDaGVja2JveCBjdXN0b21JbnB1dCBsYWJlbD1cIlBpa2FjaHVcIiB2YWx1ZT1cIlBpa2FjaHVcIiBkaXNhYmxlZCAvPlxyXG4gICAgICAgICAgPC9BdkNoZWNrYm94R3JvdXA+XHJcblxyXG4gICAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgICAgey8qIFdpdGggc2VsZWN0IGFuZCBBdkZpZWxkICovfVxyXG4gICAgICAgICAgPEF2RmllbGRcclxuICAgICAgICAgICAgdHlwZT1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIk9wdGlvblwiXHJcbiAgICAgICAgICAgIGhlbHBNZXNzYWdlPVwiSWRrLCB0aGlzIGlzIGFuIGV4YW1wbGUuIERlYWwgd2l0aCBpdCFcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj41PC9vcHRpb24+XHJcbiAgICAgICAgICA8L0F2RmllbGQ+XHJcblxyXG4gICAgICAgICAgPEF2RmllbGRcclxuICAgICAgICAgICAgdHlwZT1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxlY3QtbXVsdGlwbGVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIk9wdGlvblwiXHJcbiAgICAgICAgICAgIGhlbHBNZXNzYWdlPVwiTVVMVElQTEUhXCJcclxuICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9BdkZpZWxkPlxyXG5cclxuICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxBdkdyb3VwIGNoZWNrPlxyXG4gICAgICAgICAgICAgIDxBdklucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgPExhYmVsIGNoZWNrIGZvcj1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBDaGVjayBpdCBvdXRcclxuICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICA8L0F2R3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8QXZGaWVsZFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImF2RmllbGRDaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDaGVjayBvdXQgdGhpcyBBdkZpZWxkIGNoZWNrYm94XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEF2SW5wdXRcclxuICAgICAgICAgICAgICB0YWc9e0N1c3RvbUlucHV0fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImN1c3RvbUNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNoZWNrIG91dCB0aGlzIGN1c3RvbSBpbnB1dCBjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxBdkZpZWxkXHJcbiAgICAgICAgICAgICAgdGFnPXtDdXN0b21JbnB1dH1cclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjdXN0b21DaGVja2JveDFcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2hlY2sgb3V0IHRoaXMgY3VzdG9tIGlucHV0IGNoZWNrYm94IGZyb20gQXZGaWVsZFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxCdXR0b24+U3VibWl0PC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICA8L0F2Rm9ybT5cclxuICAgICAgPC9DYXJkQm9keT5cclxuICAgIDwvQ2FyZD5cclxuICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=