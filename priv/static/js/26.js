(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./assets/js/pages/tables/Advanced.js":
/*!********************************************!*\
  !*** ./assets/js/pages/tables/Advanced.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-table-next */ "./node_modules/react-bootstrap-table-next/lib/index.js");
/* harmony import */ var react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_table2_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap-table2-toolkit */ "./node_modules/react-bootstrap-table2-toolkit/lib/index.js");
/* harmony import */ var react_bootstrap_table2_toolkit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table2_toolkit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap-table2-paginator */ "./node_modules/react-bootstrap-table2-paginator/lib/index.js");
/* harmony import */ var react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var tableData = [{
  name: "Tiger Nixon",
  position: "System Architect",
  office: "Edinburgh",
  age: 61,
  startDate: "2011/04/25",
  salary: "$320,800"
}, {
  name: "Garrett Winters",
  position: "Accountant",
  office: "Tokyo",
  age: 63,
  startDate: "2011/07/25",
  salary: "$170,750"
}, {
  name: "Ashton Cox",
  position: "Junior Technical Author",
  office: "San Francisco",
  age: 66,
  startDate: "2009/01/12",
  salary: "$86,000"
}, {
  name: "Cedric Kelly",
  position: "Senior Javascript Developer",
  office: "Edinburgh",
  age: 22,
  startDate: "2012/03/29",
  salary: "$433,060"
}, {
  name: "Airi Satou",
  position: "Accountant",
  office: "Tokyo",
  age: 33,
  startDate: "2008/11/28",
  salary: "$162,700"
}, {
  name: "Brielle Williamson",
  position: "Integration Specialist",
  office: "New York",
  age: 61,
  startDate: "2012/12/02",
  salary: "$372,000"
}, {
  name: "Herrod Chandler",
  position: "Sales Assistant",
  office: "San Francisco",
  age: 59,
  startDate: "2012/08/06",
  salary: "$137,500"
}, {
  name: "Rhona Davidson",
  position: "Integration Specialist",
  office: "Tokyo",
  age: 55,
  startDate: "2010/10/14",
  salary: "$327,900"
}, {
  name: "Colleen Hurst",
  position: "Javascript Developer",
  office: "San Francisco",
  age: 39,
  startDate: "2009/09/15",
  salary: "$205,500"
}, {
  name: "Sonya Frost",
  position: "Software Engineer",
  office: "Edinburgh",
  age: 23,
  startDate: "2008/12/13",
  salary: "$103,600"
}, {
  name: "Jena Gaines",
  position: "Office Manager",
  office: "London",
  age: 30,
  startDate: "2008/12/19",
  salary: "$90,560"
}, {
  name: "Quinn Flynn",
  position: "Support Lead",
  office: "Edinburgh",
  age: 22,
  startDate: "2013/03/03",
  salary: "$342,000"
}, {
  name: "Charde Marshall",
  position: "Regional Director",
  office: "San Francisco",
  age: 36,
  startDate: "2008/10/16",
  salary: "$470,600"
}, {
  name: "Haley Kennedy",
  position: "Senior Marketing Designer",
  office: "London",
  age: 43,
  startDate: "2012/12/18",
  salary: "$313,500"
}, {
  name: "Tatyana Fitzpatrick",
  position: "Regional Director",
  office: "London",
  age: 19,
  startDate: "2010/03/17",
  salary: "$385,750"
}, {
  name: "Michael Silva",
  position: "Marketing Designer",
  office: "London",
  age: 66,
  startDate: "2012/11/27",
  salary: "$198,500"
}, {
  name: "Paul Byrd",
  position: "Chief Financial Officer (CFO)",
  office: "New York",
  age: 64,
  startDate: "2010/06/09",
  salary: "$725,000"
}, {
  name: "Gloria Little",
  position: "Systems Administrator",
  office: "New York",
  age: 59,
  startDate: "2009/04/10",
  salary: "$237,500"
}, {
  name: "Bradley Greer",
  position: "Software Engineer",
  office: "London",
  age: 41,
  startDate: "2012/10/13",
  salary: "$132,000"
}, {
  name: "Dai Rios",
  position: "Personnel Lead",
  office: "Edinburgh",
  age: 35,
  startDate: "2012/09/26",
  salary: "$217,500"
}, {
  name: "Jenette Caldwell",
  position: "Development Lead",
  office: "New York",
  age: 30,
  startDate: "2011/09/03",
  salary: "$345,000"
}, {
  name: "Yuri Berry",
  position: "Chief Marketing Officer (CMO)",
  office: "New York",
  age: 40,
  startDate: "2009/06/25",
  salary: "$675,000"
}, {
  name: "Caesar Vance",
  position: "Pre-Sales Support",
  office: "New York",
  age: 21,
  startDate: "2011/12/12",
  salary: "$106,450"
}, {
  name: "Doris Wilder",
  position: "Sales Assistant",
  office: "Sidney",
  age: 23,
  startDate: "2010/09/20",
  salary: "$85,600"
}, {
  name: "Angelica Ramos",
  position: "Chief Executive Officer (CEO)",
  office: "London",
  age: 47,
  startDate: "2009/10/09",
  salary: "$1,200,000"
}, {
  name: "Gavin Joyce",
  position: "Developer",
  office: "Edinburgh",
  age: 42,
  startDate: "2010/12/22",
  salary: "$92,575"
}, {
  name: "Jennifer Chang",
  position: "Regional Director",
  office: "Singapore",
  age: 28,
  startDate: "2010/11/14",
  salary: "$357,650"
}, {
  name: "Brenden Wagner",
  position: "Software Engineer",
  office: "San Francisco",
  age: 28,
  startDate: "2011/06/07",
  salary: "$206,850"
}, {
  name: "Fiona Green",
  position: "Chief Operating Officer (COO)",
  office: "San Francisco",
  age: 48,
  startDate: "2010/03/11",
  salary: "$850,000"
}, {
  name: "Shou Itou",
  position: "Regional Marketing",
  office: "Tokyo",
  age: 20,
  startDate: "2011/08/14",
  salary: "$163,000"
}, {
  name: "Michelle House",
  position: "Integration Specialist",
  office: "Sidney",
  age: 37,
  startDate: "2011/06/02",
  salary: "$95,400"
}, {
  name: "Suki Burks",
  position: "Developer",
  office: "London",
  age: 53,
  startDate: "2009/10/22",
  salary: "$114,500"
}, {
  name: "Prescott Bartlett",
  position: "Technical Author",
  office: "London",
  age: 27,
  startDate: "2011/05/07",
  salary: "$145,000"
}, {
  name: "Gavin Cortez",
  position: "Team Leader",
  office: "San Francisco",
  age: 22,
  startDate: "2008/10/26",
  salary: "$235,500"
}, {
  name: "Martena Mccray",
  position: "Post-Sales support",
  office: "Edinburgh",
  age: 46,
  startDate: "2011/03/09",
  salary: "$324,050"
}, {
  name: "Unity Butler",
  position: "Marketing Designer",
  office: "San Francisco",
  age: 47,
  startDate: "2009/12/09",
  salary: "$85,675"
}, {
  name: "Howard Hatfield",
  position: "Office Manager",
  office: "San Francisco",
  age: 51,
  startDate: "2008/12/16",
  salary: "$164,500"
}, {
  name: "Hope Fuentes",
  position: "Secretary",
  office: "San Francisco",
  age: 41,
  startDate: "2010/02/12",
  salary: "$109,850"
}, {
  name: "Vivian Harrell",
  position: "Financial Controller",
  office: "San Francisco",
  age: 62,
  startDate: "2009/02/14",
  salary: "$452,500"
}, {
  name: "Timothy Mooney",
  position: "Office Manager",
  office: "London",
  age: 37,
  startDate: "2008/12/11",
  salary: "$136,200"
}, {
  name: "Jackson Bradshaw",
  position: "Director",
  office: "New York",
  age: 65,
  startDate: "2008/09/26",
  salary: "$645,750"
}, {
  name: "Olivia Liang",
  position: "Support Engineer",
  office: "Singapore",
  age: 64,
  startDate: "2011/02/03",
  salary: "$234,500"
}, {
  name: "Bruno Nash",
  position: "Software Engineer",
  office: "London",
  age: 38,
  startDate: "2011/05/03",
  salary: "$163,500"
}, {
  name: "Sakura Yamamoto",
  position: "Support Engineer",
  office: "Tokyo",
  age: 37,
  startDate: "2009/08/19",
  salary: "$139,575"
}, {
  name: "Thor Walton",
  position: "Developer",
  office: "New York",
  age: 61,
  startDate: "2013/08/11",
  salary: "$98,540"
}, {
  name: "Finn Camacho",
  position: "Support Engineer",
  office: "San Francisco",
  age: 47,
  startDate: "2009/07/07",
  salary: "$87,500"
}, {
  name: "Serge Baldwin",
  position: "Data Coordinator",
  office: "Singapore",
  age: 64,
  startDate: "2012/04/09",
  salary: "$138,575"
}, {
  name: "Zenaida Frank",
  position: "Software Engineer",
  office: "New York",
  age: 63,
  startDate: "2010/01/04",
  salary: "$125,250"
}, {
  name: "Zorita Serrano",
  position: "Software Engineer",
  office: "San Francisco",
  age: 56,
  startDate: "2012/06/01",
  salary: "$115,000"
}, {
  name: "Jennifer Acosta",
  position: "Junior Javascript Developer",
  office: "Edinburgh",
  age: 43,
  startDate: "2013/02/01",
  salary: "$75,650"
}, {
  name: "Cara Stevens",
  position: "Sales Assistant",
  office: "New York",
  age: 46,
  startDate: "2011/12/06",
  salary: "$145,600"
}, {
  name: "Hermione Butler",
  position: "Regional Director",
  office: "London",
  age: 47,
  startDate: "2011/03/21",
  salary: "$356,250"
}, {
  name: "Lael Greer",
  position: "Systems Administrator",
  office: "London",
  age: 21,
  startDate: "2009/02/27",
  salary: "$103,500"
}, {
  name: "Jonas Alexander",
  position: "Developer",
  office: "San Francisco",
  age: 30,
  startDate: "2010/07/14",
  salary: "$86,500"
}, {
  name: "Shad Decker",
  position: "Regional Director",
  office: "Edinburgh",
  age: 51,
  startDate: "2008/11/13",
  salary: "$183,000"
}, {
  name: "Michael Bruce",
  position: "Javascript Developer",
  office: "Singapore",
  age: 29,
  startDate: "2011/06/27",
  salary: "$183,000"
}, {
  name: "Donna Snider",
  position: "Customer Support",
  office: "New York",
  age: 27,
  startDate: "2011/01/25",
  salary: "$112,000"
}];
var tableColumns = [{
  dataField: "name",
  text: "Name",
  sort: true
}, {
  dataField: "position",
  text: "Position",
  sort: true
}, {
  dataField: "office",
  text: "Office",
  sort: true
}, {
  dataField: "age",
  text: "Age",
  sort: true
}, {
  dataField: "startDate",
  text: "Start Date",
  sort: true
}, {
  dataField: "salary",
  text: "Salary",
  sort: true
}];

var PaginationTable = function PaginationTable() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5"
  }, "Pagination"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "Pagination by react-bootstrap-table2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_2___default.a, {
    keyField: "name",
    data: tableData,
    columns: tableColumns,
    bootstrap4: true,
    bordered: false,
    pagination: react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_4___default()({
      sizePerPage: 5,
      sizePerPageList: [5, 10, 25, 50]
    })
  })));
};

var RowSelectionTable = function RowSelectionTable() {
  var selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#f8f9fa"
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5"
  }, "Row Selection"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "Row selection by react-bootstrap-table2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_2___default.a, {
    bootstrap4: true,
    bordered: false,
    keyField: "name",
    data: tableData,
    columns: tableColumns,
    selectRow: selectRow,
    pagination: react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_4___default()({
      sizePerPage: 5,
      sizePerPageList: [5, 10, 25, 50]
    })
  })));
};

var ExpandableRowsTable = function ExpandableRowsTable() {
  var expandRow = {
    renderer: function renderer(row) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This Expand row is belong to \"".concat(row.name, "\"")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can render anything here, also you can add additional data on every row object."));
    },
    showExpandColumn: true,
    expandHeaderColumnRenderer: function expandHeaderColumnRenderer(_ref) {
      var isAnyExpands = _ref.isAnyExpands;
      return isAnyExpands ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["MinusCircle"], {
        width: 16,
        height: 16
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["PlusCircle"], {
        width: 16,
        height: 16
      });
    },
    expandColumnRenderer: function expandColumnRenderer(_ref2) {
      var expanded = _ref2.expanded;
      return expanded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["MinusCircle"], {
        width: 16,
        height: 16
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["PlusCircle"], {
        width: 16,
        height: 16
      });
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    tag: "h5"
  }, "Expandable Rows"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, "Expandable rows by react-bootstrap-table2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_2___default.a, {
    bootstrap4: true,
    bordered: false,
    keyField: "name",
    data: tableData,
    columns: tableColumns,
    expandRow: expandRow,
    pagination: react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_4___default()({
      sizePerPage: 5,
      sizePerPageList: [5, 10, 25, 50]
    })
  })));
};

var ExportCSVTable = function ExportCSVTable() {
  var MyExportCSV = function MyExportCSV(props) {
    var handleClick = function handleClick() {
      props.onExport();
    };

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-secondary mt-2",
      onClick: handleClick
    }, "Export"));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_table2_toolkit__WEBPACK_IMPORTED_MODULE_3___default.a, {
    keyField: "name",
    data: tableData,
    columns: tableColumns,
    exportCSV: true
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "float-right pull-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyExportCSV, props.csvProps)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
      tag: "h5"
    }, "Export CSV"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "card-subtitle text-muted"
    }, "Exportable CSV by react-bootstrap-table2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_table_next__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props.baseProps, {
      bootstrap4: true,
      bordered: false,
      pagination: react_bootstrap_table2_paginator__WEBPACK_IMPORTED_MODULE_4___default()({
        sizePerPage: 5,
        sizePerPageList: [5, 10, 25, 50]
      })
    }))));
  }));
};

var Tables = function Tables() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    className: "p-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "h3 mb-3"
  }, "Advanced Tables"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaginationTable, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RowSelectionTable, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExpandableRowsTable, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExportCSVTable, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Tables);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvdGFibGVzL0FkdmFuY2VkLmpzIl0sIm5hbWVzIjpbInRhYmxlRGF0YSIsIm5hbWUiLCJwb3NpdGlvbiIsIm9mZmljZSIsImFnZSIsInN0YXJ0RGF0ZSIsInNhbGFyeSIsInRhYmxlQ29sdW1ucyIsImRhdGFGaWVsZCIsInRleHQiLCJzb3J0IiwiUGFnaW5hdGlvblRhYmxlIiwicGFnaW5hdGlvbkZhY3RvcnkiLCJzaXplUGVyUGFnZSIsInNpemVQZXJQYWdlTGlzdCIsIlJvd1NlbGVjdGlvblRhYmxlIiwic2VsZWN0Um93IiwibW9kZSIsImNsaWNrVG9TZWxlY3QiLCJiZ0NvbG9yIiwiRXhwYW5kYWJsZVJvd3NUYWJsZSIsImV4cGFuZFJvdyIsInJlbmRlcmVyIiwicm93Iiwic2hvd0V4cGFuZENvbHVtbiIsImV4cGFuZEhlYWRlckNvbHVtblJlbmRlcmVyIiwiaXNBbnlFeHBhbmRzIiwiZXhwYW5kQ29sdW1uUmVuZGVyZXIiLCJleHBhbmRlZCIsIkV4cG9ydENTVlRhYmxlIiwiTXlFeHBvcnRDU1YiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwib25FeHBvcnQiLCJjc3ZQcm9wcyIsImJhc2VQcm9wcyIsIlRhYmxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLE1BQUksRUFBRSxhQURSO0FBRUVDLFVBQVEsRUFBRSxrQkFGWjtBQUdFQyxRQUFNLEVBQUUsV0FIVjtBQUlFQyxLQUFHLEVBQUUsRUFKUDtBQUtFQyxXQUFTLEVBQUUsWUFMYjtBQU1FQyxRQUFNLEVBQUU7QUFOVixDQURnQixFQVNoQjtBQUNFTCxNQUFJLEVBQUUsaUJBRFI7QUFFRUMsVUFBUSxFQUFFLFlBRlo7QUFHRUMsUUFBTSxFQUFFLE9BSFY7QUFJRUMsS0FBRyxFQUFFLEVBSlA7QUFLRUMsV0FBUyxF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dkIsQ0FERixDQURGLEVBSUUsMkRBQUMsb0RBQUQ7QUFBVyxTQUFHLEVBQUM7QUFBZixvQkFKRixFQUtFO0FBQUksZUFBUyxFQUFDO0FBQWQsa0RBTEYsQ0FERixFQVVFLDJEQUFDLG1EQUFELFFBQ0UsMkRBQUMsaUVBQUQsZUFDTUgsS0FBSyxDQUFDSSxTQURaO0FBRUUsZ0JBQVUsTUFGWjtBQUdFLGNBQVEsRUFBRSxLQUhaO0FBSUUsZ0JBQVUsRUFBRXZCLHVFQUFpQixDQUFDO0FBQzVCQyxtQkFBVyxFQUFFLENBRGU7QUFFNUJDLHVCQUFlLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaO0FBRlcsT0FBRDtBQUovQixPQURGLENBVkYsQ0FESTtBQUFBLEdBTlIsQ0FERixDQURGO0FBbUNELENBakREOztBQW1EQSxJQUFNc0IsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUNiLDJEQUFDLG9EQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFpQixhQUFTLEVBQUM7QUFBM0IsS0FDRTtBQUFJLGFBQVMsRUFBQztBQUFkLHVCQURGLEVBR0UsMkRBQUMsZUFBRCxPQUhGLEVBSUUsMkRBQUMsaUJBQUQsT0FKRixFQUtFLDJEQUFDLG1CQUFELE9BTEYsRUFNRSwyREFBQyxjQUFELE9BTkYsQ0FEYTtBQUFBLENBQWY7O0FBV2VBLHFFQUFmLEUiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRCb2R5LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUsIENvbnRhaW5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgQm9vdHN0cmFwVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC10YWJsZS1uZXh0XCI7XHJcbmltcG9ydCBUb29sa2l0UHJvdmlkZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdFwiO1xyXG5pbXBvcnQgcGFnaW5hdGlvbkZhY3RvcnkgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yXCI7XHJcblxyXG5pbXBvcnQgeyBNaW51c0NpcmNsZSwgUGx1c0NpcmNsZSB9IGZyb20gXCJyZWFjdC1mZWF0aGVyXCI7XHJcblxyXG5jb25zdCB0YWJsZURhdGEgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJUaWdlciBOaXhvblwiLFxyXG4gICAgcG9zaXRpb246IFwiU3lzdGVtIEFyY2hpdGVjdFwiLFxyXG4gICAgb2ZmaWNlOiBcIkVkaW5idXJnaFwiLFxyXG4gICAgYWdlOiA2MSxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDExLzA0LzI1XCIsXHJcbiAgICBzYWxhcnk6IFwiJDMyMCw4MDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJHYXJyZXR0IFdpbnRlcnNcIixcclxuICAgIHBvc2l0aW9uOiBcIkFjY291bnRhbnRcIixcclxuICAgIG9mZmljZTogXCJUb2t5b1wiLFxyXG4gICAgYWdlOiA2MyxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDExLzA3LzI1XCIsXHJcbiAgICBzYWxhcnk6IFwiJDE3MCw3NTBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBc2h0b24gQ294XCIsXHJcbiAgICBwb3NpdGlvbjogXCJKdW5pb3IgVGVjaG5pY2FsIEF1dGhvclwiLFxyXG4gICAgb2ZmaWNlOiBcIlNhbiBGcmFuY2lzY29cIixcclxuICAgIGFnZTogNjYsXHJcbiAgICBzdGFydERhdGU6IFwiMjAwOS8wMS8xMlwiLFxyXG4gICAgc2FsYXJ5OiBcIiQ4NiwwMDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDZWRyaWMgS2VsbHlcIixcclxuICAgIHBvc2l0aW9uOiBcIlNlbmlvciBKYXZhc2NyaXB0IERldmVsb3BlclwiLFxyXG4gICAgb2ZmaWNlOiBcIkVkaW5idXJnaFwiLFxyXG4gICAgYWdlOiAyMixcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDEyLzAzLzI5XCIsXHJcbiAgICBzYWxhcnk6IFwiJDQzMywwNjBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBaXJpIFNhdG91XCIsXHJcbiAgICBwb3NpdGlvbjogXCJBY2NvdW50YW50XCIsXHJcbiAgICBvZmZpY2U6IFwiVG9reW9cIixcclxuICAgIGFnZTogMzMsXHJcbiAgICBzdGFydERhdGU6IFwiMjAwOC8xMS8yOFwiLFxyXG4gICAgc2FsYXJ5OiBcIiQxNjIsNzAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQnJpZWxsZSBXaWxsaWFtc29uXCIsXHJcbiAgICBwb3NpdGlvbjogXCJJbnRlZ3JhdGlvbiBTcGVjaWFsaXN0XCIsXHJcbiAgICBvZmZpY2U6IFwiTmV3IFlvcmtcIixcclxuICAgIGFnZTogNjEsXHJcbiAgICBzdGFydERhdGU6IFwiMjAxMi8xMi8wMlwiLFxyXG4gICAgc2FsYXJ5OiBcIiQzNzIsMDAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiSGVycm9kIENoYW5kbGVyXCIsXHJcbiAgICBwb3NpdGlvbjogXCJTYWxlcyBBc3Npc3RhbnRcIixcclxuICAgIG9mZmljZTogXCJTYW4gRnJhbmNpc2NvXCIsXHJcbiAgICBhZ2U6IDU5LFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMTIvMDgvMDZcIixcclxuICAgIHNhbGFyeTogXCIkMTM3LDUwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJob25hIERhdmlkc29uXCIsXHJcbiAgICBwb3NpdGlvbjogXCJJbnRlZ3JhdGlvbiBTcGVjaWFsaXN0XCIsXHJcbiAgICBvZmZpY2U6IFwiVG9reW9cIixcclxuICAgIGFnZTogNTUsXHJcbiAgICBzdGFydERhdGU6IFwiMjAxMC8xMC8xNFwiLFxyXG4gICAgc2FsYXJ5OiBcIiQzMjcsOTAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ29sbGVlbiBIdXJzdFwiLFxyXG4gICAgcG9zaXRpb246IFwiSmF2YXNjcmlwdCBEZXZlbG9wZXJcIixcclxuICAgIG9mZmljZTogXCJTYW4gRnJhbmNpc2NvXCIsXHJcbiAgICBhZ2U6IDM5LFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMDkvMDkvMTVcIixcclxuICAgIHNhbGFyeTogXCIkMjA1LDUwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNvbnlhIEZyb3N0XCIsXHJcbiAgICBwb3NpdGlvbjogXCJTb2Z0d2FyZSBFbmdpbmVlclwiLFxyXG4gICAgb2ZmaWNlOiBcIkVkaW5idXJnaFwiLFxyXG4gICAgYWdlOiAyMyxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDA4LzEyLzEzXCIsXHJcbiAgICBzYWxhcnk6IFwiJDEwMyw2MDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJKZW5hIEdhaW5lc1wiLFxyXG4gICAgcG9zaXRpb246IFwiT2ZmaWNlIE1hbmFnZXJcIixcclxuICAgIG9mZmljZTogXCJMb25kb25cIixcclxuICAgIGFnZTogMzAsXHJcbiAgICBzdGFydERhdGU6IFwiMjAwOC8xMi8xOVwiLFxyXG4gICAgc2FsYXJ5OiBcIiQ5MCw1NjBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJRdWlubiBGbHlublwiLFxyXG4gICAgcG9zaXRpb246IFwiU3VwcG9ydCBMZWFkXCIsXHJcbiAgICBvZmZpY2U6IFwiRWRpbmJ1cmdoXCIsXHJcbiAgICBhZ2U6IDIyLFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMTMvMDMvMDNcIixcclxuICAgIHNhbGFyeTogXCIkMzQyLDAwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNoYXJkZSBNYXJzaGFsbFwiLFxyXG4gICAgcG9zaXRpb246IFwiUmVnaW9uYWwgRGlyZWN0b3JcIixcclxuICAgIG9mZmljZTogXCJTYW4gRnJhbmNpc2NvXCIsXHJcbiAgICBhZ2U6IDM2LFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMDgvMTAvMTZcIixcclxuICAgIHNhbGFyeTogXCIkNDcwLDYwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkhhbGV5IEtlbm5lZHlcIixcclxuICAgIHBvc2l0aW9uOiBcIlNlbmlvciBNYXJrZXRpbmcgRGVzaWduZXJcIixcclxuICAgIG9mZmljZTogXCJMb25kb25cIixcclxuICAgIGFnZTogNDMsXHJcbiAgICBzdGFydERhdGU6IFwiMjAxMi8xMi8xOFwiLFxyXG4gICAgc2FsYXJ5OiBcIiQzMTMsNTAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVGF0eWFuYSBGaXR6cGF0cmlja1wiLFxyXG4gICAgcG9zaXRpb246IFwiUmVnaW9uYWwgRGlyZWN0b3JcIixcclxuICAgIG9mZmljZTogXCJMb25kb25cIixcclxuICAgIGFnZTogMTksXHJcbiAgICBzdGFydERhdGU6IFwiMjAxMC8wMy8xN1wiLFxyXG4gICAgc2FsYXJ5OiBcIiQzODUsNzUwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTWljaGFlbCBTaWx2YVwiLFxyXG4gICAgcG9zaXRpb246IFwiTWFya2V0aW5nIERlc2lnbmVyXCIsXHJcbiAgICBvZmZpY2U6IFwiTG9uZG9uXCIsXHJcbiAgICBhZ2U6IDY2LFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMTIvMTEvMjdcIixcclxuICAgIHNhbGFyeTogXCIkMTk4LDUwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlBhdWwgQnlyZFwiLFxyXG4gICAgcG9zaXRpb246IFwiQ2hpZWYgRmluYW5jaWFsIE9mZmljZXIgKENGTylcIixcclxuICAgIG9mZmljZTogXCJOZXcgWW9ya1wiLFxyXG4gICAgYWdlOiA2NCxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDEwLzA2LzA5XCIsXHJcbiAgICBzYWxhcnk6IFwiJDcyNSwwMDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJHbG9yaWEgTGl0dGxlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJTeXN0ZW1zIEFkbWluaXN0cmF0b3JcIixcclxuICAgIG9mZmljZTogXCJOZXcgWW9ya1wiLFxyXG4gICAgYWdlOiA1OSxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDA5LzA0LzEwXCIsXHJcbiAgICBzYWxhcnk6IFwiJDIzNyw1MDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCcmFkbGV5IEdyZWVyXCIsXHJcbiAgICBwb3NpdGlvbjogXCJTb2Z0d2FyZSBFbmdpbmVlclwiLFxyXG4gICAgb2ZmaWNlOiBcIkxvbmRvblwiLFxyXG4gICAgYWdlOiA0MSxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDEyLzEwLzEzXCIsXHJcbiAgICBzYWxhcnk6IFwiJDEzMiwwMDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEYWkgUmlvc1wiLFxyXG4gICAgcG9zaXRpb246IFwiUGVyc29ubmVsIExlYWRcIixcclxuICAgIG9mZmljZTogXCJFZGluYnVyZ2hcIixcclxuICAgIGFnZTogMzUsXHJcbiAgICBzdGFydERhdGU6IFwiMjAxMi8wOS8yNlwiLFxyXG4gICAgc2FsYXJ5OiBcIiQyMTcsNTAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiSmVuZXR0ZSBDYWxkd2VsbFwiLFxyXG4gICAgcG9zaXRpb246IFwiRGV2ZWxvcG1lbnQgTGVhZFwiLFxyXG4gICAgb2ZmaWNlOiBcIk5ldyBZb3JrXCIsXHJcbiAgICBhZ2U6IDMwLFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMTEvMDkvMDNcIixcclxuICAgIHNhbGFyeTogXCIkMzQ1LDAwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIll1cmkgQmVycnlcIixcclxuICAgIHBvc2l0aW9uOiBcIkNoaWVmIE1hcmtldGluZyBPZmZpY2VyIChDTU8pXCIsXHJcbiAgICBvZmZpY2U6IFwiTmV3IFlvcmtcIixcclxuICAgIGFnZTogNDAsXHJcbiAgICBzdGFydERhdGU6IFwiMjAwOS8wNi8yNVwiLFxyXG4gICAgc2FsYXJ5OiBcIiQ2NzUsMDAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ2Flc2FyIFZhbmNlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJQcmUtU2FsZXMgU3VwcG9ydFwiLFxyXG4gICAgb2ZmaWNlOiBcIk5ldyBZb3JrXCIsXHJcbiAgICBhZ2U6IDIxLFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMTEvMTIvMTJcIixcclxuICAgIHNhbGFyeTogXCIkMTA2LDQ1MFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkRvcmlzIFdpbGRlclwiLFxyXG4gICAgcG9zaXRpb246IFwiU2FsZXMgQXNzaXN0YW50XCIsXHJcbiAgICBvZmZpY2U6IFwiU2lkbmV5XCIsXHJcbiAgICBhZ2U6IDIzLFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMTAvMDkvMjBcIixcclxuICAgIHNhbGFyeTogXCIkODUsNjAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQW5nZWxpY2EgUmFtb3NcIixcclxuICAgIHBvc2l0aW9uOiBcIkNoaWVmIEV4ZWN1dGl2ZSBPZmZpY2VyIChDRU8pXCIsXHJcbiAgICBvZmZpY2U6IFwiTG9uZG9uXCIsXHJcbiAgICBhZ2U6IDQ3LFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMDkvMTAvMDlcIixcclxuICAgIHNhbGFyeTogXCIkMSwyMDAsMDAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiR2F2aW4gSm95Y2VcIixcclxuICAgIHBvc2l0aW9uOiBcIkRldmVsb3BlclwiLFxyXG4gICAgb2ZmaWNlOiBcIkVkaW5idXJnaFwiLFxyXG4gICAgYWdlOiA0MixcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDEwLzEyLzIyXCIsXHJcbiAgICBzYWxhcnk6IFwiJDkyLDU3NVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkplbm5pZmVyIENoYW5nXCIsXHJcbiAgICBwb3NpdGlvbjogXCJSZWdpb25hbCBEaXJlY3RvclwiLFxyXG4gICAgb2ZmaWNlOiBcIlNpbmdhcG9yZVwiLFxyXG4gICAgYWdlOiAyOCxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDEwLzExLzE0XCIsXHJcbiAgICBzYWxhcnk6IFwiJDM1Nyw2NTBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCcmVuZGVuIFdhZ25lclwiLFxyXG4gICAgcG9zaXRpb246IFwiU29mdHdhcmUgRW5naW5lZXJcIixcclxuICAgIG9mZmljZTogXCJTYW4gRnJhbmNpc2NvXCIsXHJcbiAgICBhZ2U6IDI4LFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMTEvMDYvMDdcIixcclxuICAgIHNhbGFyeTogXCIkMjA2LDg1MFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkZpb25hIEdyZWVuXCIsXHJcbiAgICBwb3NpdGlvbjogXCJDaGllZiBPcGVyYXRpbmcgT2ZmaWNlciAoQ09PKVwiLFxyXG4gICAgb2ZmaWNlOiBcIlNhbiBGcmFuY2lzY29cIixcclxuICAgIGFnZTogNDgsXHJcbiAgICBzdGFydERhdGU6IFwiMjAxMC8wMy8xMVwiLFxyXG4gICAgc2FsYXJ5OiBcIiQ4NTAsMDAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2hvdSBJdG91XCIsXHJcbiAgICBwb3NpdGlvbjogXCJSZWdpb25hbCBNYXJrZXRpbmdcIixcclxuICAgIG9mZmljZTogXCJUb2t5b1wiLFxyXG4gICAgYWdlOiAyMCxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDExLzA4LzE0XCIsXHJcbiAgICBzYWxhcnk6IFwiJDE2MywwMDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJNaWNoZWxsZSBIb3VzZVwiLFxyXG4gICAgcG9zaXRpb246IFwiSW50ZWdyYXRpb24gU3BlY2lhbGlzdFwiLFxyXG4gICAgb2ZmaWNlOiBcIlNpZG5leVwiLFxyXG4gICAgYWdlOiAzNyxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDExLzA2LzAyXCIsXHJcbiAgICBzYWxhcnk6IFwiJDk1LDQwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlN1a2kgQnVya3NcIixcclxuICAgIHBvc2l0aW9uOiBcIkRldmVsb3BlclwiLFxyXG4gICAgb2ZmaWNlOiBcIkxvbmRvblwiLFxyXG4gICAgYWdlOiA1MyxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDA5LzEwLzIyXCIsXHJcbiAgICBzYWxhcnk6IFwiJDExNCw1MDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQcmVzY290dCBCYXJ0bGV0dFwiLFxyXG4gICAgcG9zaXRpb246IFwiVGVjaG5pY2FsIEF1dGhvclwiLFxyXG4gICAgb2ZmaWNlOiBcIkxvbmRvblwiLFxyXG4gICAgYWdlOiAyNyxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDExLzA1LzA3XCIsXHJcbiAgICBzYWxhcnk6IFwiJDE0NSwwMDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJHYXZpbiBDb3J0ZXpcIixcclxuICAgIHBvc2l0aW9uOiBcIlRlYW0gTGVhZGVyXCIsXHJcbiAgICBvZmZpY2U6IFwiU2FuIEZyYW5jaXNjb1wiLFxyXG4gICAgYWdlOiAyMixcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDA4LzEwLzI2XCIsXHJcbiAgICBzYWxhcnk6IFwiJDIzNSw1MDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJNYXJ0ZW5hIE1jY3JheVwiLFxyXG4gICAgcG9zaXRpb246IFwiUG9zdC1TYWxlcyBzdXBwb3J0XCIsXHJcbiAgICBvZmZpY2U6IFwiRWRpbmJ1cmdoXCIsXHJcbiAgICBhZ2U6IDQ2LFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMTEvMDMvMDlcIixcclxuICAgIHNhbGFyeTogXCIkMzI0LDA1MFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlVuaXR5IEJ1dGxlclwiLFxyXG4gICAgcG9zaXRpb246IFwiTWFya2V0aW5nIERlc2lnbmVyXCIsXHJcbiAgICBvZmZpY2U6IFwiU2FuIEZyYW5jaXNjb1wiLFxyXG4gICAgYWdlOiA0NyxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDA5LzEyLzA5XCIsXHJcbiAgICBzYWxhcnk6IFwiJDg1LDY3NVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkhvd2FyZCBIYXRmaWVsZFwiLFxyXG4gICAgcG9zaXRpb246IFwiT2ZmaWNlIE1hbmFnZXJcIixcclxuICAgIG9mZmljZTogXCJTYW4gRnJhbmNpc2NvXCIsXHJcbiAgICBhZ2U6IDUxLFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMDgvMTIvMTZcIixcclxuICAgIHNhbGFyeTogXCIkMTY0LDUwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkhvcGUgRnVlbnRlc1wiLFxyXG4gICAgcG9zaXRpb246IFwiU2VjcmV0YXJ5XCIsXHJcbiAgICBvZmZpY2U6IFwiU2FuIEZyYW5jaXNjb1wiLFxyXG4gICAgYWdlOiA0MSxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDEwLzAyLzEyXCIsXHJcbiAgICBzYWxhcnk6IFwiJDEwOSw4NTBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJWaXZpYW4gSGFycmVsbFwiLFxyXG4gICAgcG9zaXRpb246IFwiRmluYW5jaWFsIENvbnRyb2xsZXJcIixcclxuICAgIG9mZmljZTogXCJTYW4gRnJhbmNpc2NvXCIsXHJcbiAgICBhZ2U6IDYyLFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMDkvMDIvMTRcIixcclxuICAgIHNhbGFyeTogXCIkNDUyLDUwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlRpbW90aHkgTW9vbmV5XCIsXHJcbiAgICBwb3NpdGlvbjogXCJPZmZpY2UgTWFuYWdlclwiLFxyXG4gICAgb2ZmaWNlOiBcIkxvbmRvblwiLFxyXG4gICAgYWdlOiAzNyxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDA4LzEyLzExXCIsXHJcbiAgICBzYWxhcnk6IFwiJDEzNiwyMDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJKYWNrc29uIEJyYWRzaGF3XCIsXHJcbiAgICBwb3NpdGlvbjogXCJEaXJlY3RvclwiLFxyXG4gICAgb2ZmaWNlOiBcIk5ldyBZb3JrXCIsXHJcbiAgICBhZ2U6IDY1LFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMDgvMDkvMjZcIixcclxuICAgIHNhbGFyeTogXCIkNjQ1LDc1MFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk9saXZpYSBMaWFuZ1wiLFxyXG4gICAgcG9zaXRpb246IFwiU3VwcG9ydCBFbmdpbmVlclwiLFxyXG4gICAgb2ZmaWNlOiBcIlNpbmdhcG9yZVwiLFxyXG4gICAgYWdlOiA2NCxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDExLzAyLzAzXCIsXHJcbiAgICBzYWxhcnk6IFwiJDIzNCw1MDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCcnVubyBOYXNoXCIsXHJcbiAgICBwb3NpdGlvbjogXCJTb2Z0d2FyZSBFbmdpbmVlclwiLFxyXG4gICAgb2ZmaWNlOiBcIkxvbmRvblwiLFxyXG4gICAgYWdlOiAzOCxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDExLzA1LzAzXCIsXHJcbiAgICBzYWxhcnk6IFwiJDE2Myw1MDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTYWt1cmEgWWFtYW1vdG9cIixcclxuICAgIHBvc2l0aW9uOiBcIlN1cHBvcnQgRW5naW5lZXJcIixcclxuICAgIG9mZmljZTogXCJUb2t5b1wiLFxyXG4gICAgYWdlOiAzNyxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDA5LzA4LzE5XCIsXHJcbiAgICBzYWxhcnk6IFwiJDEzOSw1NzVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUaG9yIFdhbHRvblwiLFxyXG4gICAgcG9zaXRpb246IFwiRGV2ZWxvcGVyXCIsXHJcbiAgICBvZmZpY2U6IFwiTmV3IFlvcmtcIixcclxuICAgIGFnZTogNjEsXHJcbiAgICBzdGFydERhdGU6IFwiMjAxMy8wOC8xMVwiLFxyXG4gICAgc2FsYXJ5OiBcIiQ5OCw1NDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJGaW5uIENhbWFjaG9cIixcclxuICAgIHBvc2l0aW9uOiBcIlN1cHBvcnQgRW5naW5lZXJcIixcclxuICAgIG9mZmljZTogXCJTYW4gRnJhbmNpc2NvXCIsXHJcbiAgICBhZ2U6IDQ3LFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMDkvMDcvMDdcIixcclxuICAgIHNhbGFyeTogXCIkODcsNTAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2VyZ2UgQmFsZHdpblwiLFxyXG4gICAgcG9zaXRpb246IFwiRGF0YSBDb29yZGluYXRvclwiLFxyXG4gICAgb2ZmaWNlOiBcIlNpbmdhcG9yZVwiLFxyXG4gICAgYWdlOiA2NCxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDEyLzA0LzA5XCIsXHJcbiAgICBzYWxhcnk6IFwiJDEzOCw1NzVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJaZW5haWRhIEZyYW5rXCIsXHJcbiAgICBwb3NpdGlvbjogXCJTb2Z0d2FyZSBFbmdpbmVlclwiLFxyXG4gICAgb2ZmaWNlOiBcIk5ldyBZb3JrXCIsXHJcbiAgICBhZ2U6IDYzLFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMTAvMDEvMDRcIixcclxuICAgIHNhbGFyeTogXCIkMTI1LDI1MFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlpvcml0YSBTZXJyYW5vXCIsXHJcbiAgICBwb3NpdGlvbjogXCJTb2Z0d2FyZSBFbmdpbmVlclwiLFxyXG4gICAgb2ZmaWNlOiBcIlNhbiBGcmFuY2lzY29cIixcclxuICAgIGFnZTogNTYsXHJcbiAgICBzdGFydERhdGU6IFwiMjAxMi8wNi8wMVwiLFxyXG4gICAgc2FsYXJ5OiBcIiQxMTUsMDAwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiSmVubmlmZXIgQWNvc3RhXCIsXHJcbiAgICBwb3NpdGlvbjogXCJKdW5pb3IgSmF2YXNjcmlwdCBEZXZlbG9wZXJcIixcclxuICAgIG9mZmljZTogXCJFZGluYnVyZ2hcIixcclxuICAgIGFnZTogNDMsXHJcbiAgICBzdGFydERhdGU6IFwiMjAxMy8wMi8wMVwiLFxyXG4gICAgc2FsYXJ5OiBcIiQ3NSw2NTBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDYXJhIFN0ZXZlbnNcIixcclxuICAgIHBvc2l0aW9uOiBcIlNhbGVzIEFzc2lzdGFudFwiLFxyXG4gICAgb2ZmaWNlOiBcIk5ldyBZb3JrXCIsXHJcbiAgICBhZ2U6IDQ2LFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMTEvMTIvMDZcIixcclxuICAgIHNhbGFyeTogXCIkMTQ1LDYwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkhlcm1pb25lIEJ1dGxlclwiLFxyXG4gICAgcG9zaXRpb246IFwiUmVnaW9uYWwgRGlyZWN0b3JcIixcclxuICAgIG9mZmljZTogXCJMb25kb25cIixcclxuICAgIGFnZTogNDcsXHJcbiAgICBzdGFydERhdGU6IFwiMjAxMS8wMy8yMVwiLFxyXG4gICAgc2FsYXJ5OiBcIiQzNTYsMjUwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFlbCBHcmVlclwiLFxyXG4gICAgcG9zaXRpb246IFwiU3lzdGVtcyBBZG1pbmlzdHJhdG9yXCIsXHJcbiAgICBvZmZpY2U6IFwiTG9uZG9uXCIsXHJcbiAgICBhZ2U6IDIxLFxyXG4gICAgc3RhcnREYXRlOiBcIjIwMDkvMDIvMjdcIixcclxuICAgIHNhbGFyeTogXCIkMTAzLDUwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkpvbmFzIEFsZXhhbmRlclwiLFxyXG4gICAgcG9zaXRpb246IFwiRGV2ZWxvcGVyXCIsXHJcbiAgICBvZmZpY2U6IFwiU2FuIEZyYW5jaXNjb1wiLFxyXG4gICAgYWdlOiAzMCxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDEwLzA3LzE0XCIsXHJcbiAgICBzYWxhcnk6IFwiJDg2LDUwMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNoYWQgRGVja2VyXCIsXHJcbiAgICBwb3NpdGlvbjogXCJSZWdpb25hbCBEaXJlY3RvclwiLFxyXG4gICAgb2ZmaWNlOiBcIkVkaW5idXJnaFwiLFxyXG4gICAgYWdlOiA1MSxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDA4LzExLzEzXCIsXHJcbiAgICBzYWxhcnk6IFwiJDE4MywwMDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJNaWNoYWVsIEJydWNlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJKYXZhc2NyaXB0IERldmVsb3BlclwiLFxyXG4gICAgb2ZmaWNlOiBcIlNpbmdhcG9yZVwiLFxyXG4gICAgYWdlOiAyOSxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDExLzA2LzI3XCIsXHJcbiAgICBzYWxhcnk6IFwiJDE4MywwMDBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEb25uYSBTbmlkZXJcIixcclxuICAgIHBvc2l0aW9uOiBcIkN1c3RvbWVyIFN1cHBvcnRcIixcclxuICAgIG9mZmljZTogXCJOZXcgWW9ya1wiLFxyXG4gICAgYWdlOiAyNyxcclxuICAgIHN0YXJ0RGF0ZTogXCIyMDExLzAxLzI1XCIsXHJcbiAgICBzYWxhcnk6IFwiJDExMiwwMDBcIlxyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IHRhYmxlQ29sdW1ucyA9IFtcclxuICB7XHJcbiAgICBkYXRhRmllbGQ6IFwibmFtZVwiLFxyXG4gICAgdGV4dDogXCJOYW1lXCIsXHJcbiAgICBzb3J0OiB0cnVlXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRhRmllbGQ6IFwicG9zaXRpb25cIixcclxuICAgIHRleHQ6IFwiUG9zaXRpb25cIixcclxuICAgIHNvcnQ6IHRydWVcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGFGaWVsZDogXCJvZmZpY2VcIixcclxuICAgIHRleHQ6IFwiT2ZmaWNlXCIsXHJcbiAgICBzb3J0OiB0cnVlXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRhRmllbGQ6IFwiYWdlXCIsXHJcbiAgICB0ZXh0OiBcIkFnZVwiLFxyXG4gICAgc29ydDogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0YUZpZWxkOiBcInN0YXJ0RGF0ZVwiLFxyXG4gICAgdGV4dDogXCJTdGFydCBEYXRlXCIsXHJcbiAgICBzb3J0OiB0cnVlXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRhRmllbGQ6IFwic2FsYXJ5XCIsXHJcbiAgICB0ZXh0OiBcIlNhbGFyeVwiLFxyXG4gICAgc29ydDogdHJ1ZVxyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IFBhZ2luYXRpb25UYWJsZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5QYWdpbmF0aW9uPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgUGFnaW5hdGlvbiBieSByZWFjdC1ib290c3RyYXAtdGFibGUyXHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgPEJvb3RzdHJhcFRhYmxlXHJcbiAgICAgICAgICBrZXlGaWVsZD1cIm5hbWVcIlxyXG4gICAgICAgICAgZGF0YT17dGFibGVEYXRhfVxyXG4gICAgICAgICAgY29sdW1ucz17dGFibGVDb2x1bW5zfVxyXG4gICAgICAgICAgYm9vdHN0cmFwNFxyXG4gICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgcGFnaW5hdGlvbj17cGFnaW5hdGlvbkZhY3Rvcnkoe1xyXG4gICAgICAgICAgICBzaXplUGVyUGFnZTogNSxcclxuICAgICAgICAgICAgc2l6ZVBlclBhZ2VMaXN0OiBbNSwgMTAsIDI1LCA1MF1cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFJvd1NlbGVjdGlvblRhYmxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdFJvdyA9IHtcclxuICAgIG1vZGU6IFwiY2hlY2tib3hcIixcclxuICAgIGNsaWNrVG9TZWxlY3Q6IHRydWUsXHJcbiAgICBiZ0NvbG9yOiBcIiNmOGY5ZmFcIlxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPlJvdyBTZWxlY3Rpb248L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBSb3cgc2VsZWN0aW9uIGJ5IHJlYWN0LWJvb3RzdHJhcC10YWJsZTJcclxuICAgICAgICA8L2g2PlxyXG4gICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICA8Qm9vdHN0cmFwVGFibGVcclxuICAgICAgICAgIGJvb3RzdHJhcDRcclxuICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgIGtleUZpZWxkPVwibmFtZVwiXHJcbiAgICAgICAgICBkYXRhPXt0YWJsZURhdGF9XHJcbiAgICAgICAgICBjb2x1bW5zPXt0YWJsZUNvbHVtbnN9XHJcbiAgICAgICAgICBzZWxlY3RSb3c9e3NlbGVjdFJvd31cclxuICAgICAgICAgIHBhZ2luYXRpb249e3BhZ2luYXRpb25GYWN0b3J5KHtcclxuICAgICAgICAgICAgc2l6ZVBlclBhZ2U6IDUsXHJcbiAgICAgICAgICAgIHNpemVQZXJQYWdlTGlzdDogWzUsIDEwLCAyNSwgNTBdXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmRCb2R5PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBFeHBhbmRhYmxlUm93c1RhYmxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGV4cGFuZFJvdyA9IHtcclxuICAgIHJlbmRlcmVyOiByb3cgPT4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwPntgVGhpcyBFeHBhbmQgcm93IGlzIGJlbG9uZyB0byBcIiR7cm93Lm5hbWV9XCJgfTwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFlvdSBjYW4gcmVuZGVyIGFueXRoaW5nIGhlcmUsIGFsc28geW91IGNhbiBhZGQgYWRkaXRpb25hbCBkYXRhIG9uIGV2ZXJ5IHJvdyBvYmplY3QuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgICBzaG93RXhwYW5kQ29sdW1uOiB0cnVlLFxyXG4gICAgZXhwYW5kSGVhZGVyQ29sdW1uUmVuZGVyZXI6ICh7IGlzQW55RXhwYW5kcyB9KSA9PlxyXG4gICAgICBpc0FueUV4cGFuZHMgPyAoXHJcbiAgICAgICAgPE1pbnVzQ2lyY2xlIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8UGx1c0NpcmNsZSB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IC8+XHJcbiAgICAgICksXHJcbiAgICBleHBhbmRDb2x1bW5SZW5kZXJlcjogKHsgZXhwYW5kZWQgfSkgPT5cclxuICAgICAgZXhwYW5kZWQgPyAoXHJcbiAgICAgICAgPE1pbnVzQ2lyY2xlIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8UGx1c0NpcmNsZSB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IC8+XHJcbiAgICAgIClcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkVGl0bGUgdGFnPVwiaDVcIj5FeHBhbmRhYmxlIFJvd3M8L0NhcmRUaXRsZT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICBFeHBhbmRhYmxlIHJvd3MgYnkgcmVhY3QtYm9vdHN0cmFwLXRhYmxlMlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgIDxCb290c3RyYXBUYWJsZVxyXG4gICAgICAgICAgYm9vdHN0cmFwNFxyXG4gICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAga2V5RmllbGQ9XCJuYW1lXCJcclxuICAgICAgICAgIGRhdGE9e3RhYmxlRGF0YX1cclxuICAgICAgICAgIGNvbHVtbnM9e3RhYmxlQ29sdW1uc31cclxuICAgICAgICAgIGV4cGFuZFJvdz17ZXhwYW5kUm93fVxyXG4gICAgICAgICAgcGFnaW5hdGlvbj17cGFnaW5hdGlvbkZhY3Rvcnkoe1xyXG4gICAgICAgICAgICBzaXplUGVyUGFnZTogNSxcclxuICAgICAgICAgICAgc2l6ZVBlclBhZ2VMaXN0OiBbNSwgMTAsIDI1LCA1MF1cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEV4cG9ydENTVlRhYmxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IE15RXhwb3J0Q1NWID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIHByb3BzLm9uRXhwb3J0KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IG10LTJcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICBFeHBvcnRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPFRvb2xraXRQcm92aWRlclxyXG4gICAgICAgIGtleUZpZWxkPVwibmFtZVwiXHJcbiAgICAgICAgZGF0YT17dGFibGVEYXRhfVxyXG4gICAgICAgIGNvbHVtbnM9e3RhYmxlQ29sdW1uc31cclxuICAgICAgICBleHBvcnRDU1ZcclxuICAgICAgPlxyXG4gICAgICAgIHtwcm9wcyA9PiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IHB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxNeUV4cG9ydENTViB7Li4ucHJvcHMuY3N2UHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPENhcmRUaXRsZSB0YWc9XCJoNVwiPkV4cG9ydCBDU1Y8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBFeHBvcnRhYmxlIENTViBieSByZWFjdC1ib290c3RyYXAtdGFibGUyXHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPEJvb3RzdHJhcFRhYmxlXHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvcHMuYmFzZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgYm9vdHN0cmFwNFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17cGFnaW5hdGlvbkZhY3Rvcnkoe1xyXG4gICAgICAgICAgICAgICAgICBzaXplUGVyUGFnZTogNSxcclxuICAgICAgICAgICAgICAgICAgc2l6ZVBlclBhZ2VMaXN0OiBbNSwgMTAsIDI1LCA1MF1cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1Rvb2xraXRQcm92aWRlcj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGFibGVzID0gKCkgPT4gKFxyXG4gIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwiaDMgbWItM1wiPkFkdmFuY2VkIFRhYmxlczwvaDE+XHJcblxyXG4gICAgPFBhZ2luYXRpb25UYWJsZSAvPlxyXG4gICAgPFJvd1NlbGVjdGlvblRhYmxlIC8+XHJcbiAgICA8RXhwYW5kYWJsZVJvd3NUYWJsZSAvPlxyXG4gICAgPEV4cG9ydENTVlRhYmxlIC8+XHJcbiAgPC9Db250YWluZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=