/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/rock-inline/Rockinline.ttf */ "./src/fonts/rock-inline/Rockinline.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* body - The main body for the application. */
body{
    padding: 0;
    margin: 0;
}

/* * - All elements on the browser. */
*{
    box-sizing: border-box;
}

/* Fonts */
/* font-0 - Rockinline */
@font-face {
    font-family: rockinline;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

/* Knights Travails Header */
h1{
    text-align: center;
    font-family: rockinline, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    letter-spacing: 3px;
    font-size: 40px;
}

/* Main Content */
#content{
    display: flex;
    justify-content: center;
    gap: 10px;

    /* border: 1px solid red; */
}

/* Main Gameboard */
.main-gameboard{
    display: flex;
    flex-direction: column;
    /* gap: 5px; */

    border: 1px solid black;
    /* padding: 10px; */
}
.main-gameboard > div{ /* Rows */
    display: flex;
    /* gap: 5px; */

    /* border: 1px solid black;  */
    /* padding: 10px; */
}
.cell{
    width: 60px;
    height: 60px;
    /* border: 1px solid black;   */
    cursor: pointer;
}
.white{
    background-color: white;
}
.black{
    background-color: black;
}

/* Main Gameboard Interface */
.main-gameboard-interface{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    padding: 20px;
    /* border: 1px solid black; */
}
.main-gameboard-interface > button{
    cursor: pointer;
    padding: 5px 20px 5px 20px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0);
    background-color: white;
    font-size: 20px;
    font-family: rockinline, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold;
    letter-spacing: 3px;
}
.main-gameboard-interface > button:hover{
    background-color:lightskyblue;
    border: 1px solid lightskyblue;
}

.main-gameboard-interface > div{
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    font-family: rockinline, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 18px;
    padding: 10px;
}


/* Start Point */
.start-point{
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: lightgreen;
}

/* Button Clicked */
.button-clicked{
    background-color:lightskyblue !important;
}


/* End Point */
.end-point{
    background-color: lightcoral;
}

/* Knight Piece */
.knight-piece-container{
    width: 50px;
    height: 50px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8CAA8C;AAC9C;IACI,UAAU;IACV,SAAS;AACb;;AAEA,qCAAqC;AACrC;IACI,sBAAsB;AAC1B;;AAEA,UAAU;AACV,wBAAwB;AACxB;IACI,uBAAuB;IACvB,4CAAmD;AACvD;;AAEA,4BAA4B;AAC5B;IACI,kBAAkB;IAClB,8IAA8I;IAC9I,mBAAmB;IACnB,eAAe;AACnB;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;;IAET,2BAA2B;AAC/B;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;;IAEd,uBAAuB;IACvB,mBAAmB;AACvB;AACA,uBAAuB,SAAS;IAC5B,aAAa;IACb,cAAc;;IAEd,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;IACZ,+BAA+B;IAC/B,eAAe;AACnB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,uBAAuB;AAC3B;;AAEA,6BAA6B;AAC7B;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;;IAET,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,eAAe;IACf,0BAA0B;IAC1B,mBAAmB;IACnB,kCAAkC;IAClC,uBAAuB;IACvB,eAAe;IACf,8IAA8I;IAC9I,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,6BAA6B;IAC7B,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,8IAA8I;IAC9I,eAAe;IACf,aAAa;AACjB;;;AAGA,gBAAgB;AAChB;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,4BAA4B;AAChC;;AAEA,mBAAmB;AACnB;IACI,wCAAwC;AAC5C;;;AAGA,cAAc;AACd;IACI,4BAA4B;AAChC;;AAEA,iBAAiB;AACjB;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":["/* body - The main body for the application. */\nbody{\n    padding: 0;\n    margin: 0;\n}\n\n/* * - All elements on the browser. */\n*{\n    box-sizing: border-box;\n}\n\n/* Fonts */\n/* font-0 - Rockinline */\n@font-face {\n    font-family: rockinline;\n    src: url('../src/fonts/rock-inline/Rockinline.ttf');\n}\n\n/* Knights Travails Header */\nh1{\n    text-align: center;\n    font-family: rockinline, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    letter-spacing: 3px;\n    font-size: 40px;\n}\n\n/* Main Content */\n#content{\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n\n    /* border: 1px solid red; */\n}\n\n/* Main Gameboard */\n.main-gameboard{\n    display: flex;\n    flex-direction: column;\n    /* gap: 5px; */\n\n    border: 1px solid black;\n    /* padding: 10px; */\n}\n.main-gameboard > div{ /* Rows */\n    display: flex;\n    /* gap: 5px; */\n\n    /* border: 1px solid black;  */\n    /* padding: 10px; */\n}\n.cell{\n    width: 60px;\n    height: 60px;\n    /* border: 1px solid black;   */\n    cursor: pointer;\n}\n.white{\n    background-color: white;\n}\n.black{\n    background-color: black;\n}\n\n/* Main Gameboard Interface */\n.main-gameboard-interface{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 30px;\n\n    padding: 20px;\n    /* border: 1px solid black; */\n}\n.main-gameboard-interface > button{\n    cursor: pointer;\n    padding: 5px 20px 5px 20px;\n    border-radius: 10px;\n    border: 1px solid rgba(0, 0, 0, 0);\n    background-color: white;\n    font-size: 20px;\n    font-family: rockinline, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold;\n    letter-spacing: 3px;\n}\n.main-gameboard-interface > button:hover{\n    background-color:lightskyblue;\n    border: 1px solid lightskyblue;\n}\n\n.main-gameboard-interface > div{\n    border: 1px solid #cbd5e1;\n    border-radius: 10px;\n    font-family: rockinline, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 18px;\n    padding: 10px;\n}\n\n\n/* Start Point */\n.start-point{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: lightgreen;\n}\n\n/* Button Clicked */\n.button-clicked{\n    background-color:lightskyblue !important;\n}\n\n\n/* End Point */\n.end-point{\n    background-color: lightcoral;\n}\n\n/* Knight Piece */\n.knight-piece-container{\n    width: 50px;\n    height: 50px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/displayMoves.js":
/*!*************************************!*\
  !*** ./src/modules/displayMoves.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMoves: () => (/* binding */ displayMoves)
/* harmony export */ });
/* harmony import */ var _images_black_knight_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/black-knight.png */ "./src/images/black-knight.png");


// displayMoves(): Displays the moves from start point to end point
const displayMoves = (squareCoord) =>{
    const cells = document.querySelectorAll('.main-gameboard > div > div'); 

    const startPoint = document.querySelector('.start-point');

    const endPoint = document.querySelector('.end-point'); 

    const searchInProgress = document.querySelector('.main-gameboard-interface > div');

    let timer = 100;

    squareCoord.forEach((square) => {
        cells.forEach((cell) => {
            if (`${cell.dataset.x}, ${cell.dataset.y}` === square)
            {
                if (`${startPoint.dataset.x}, ${startPoint.dataset.y}` === `${cell.dataset.x}, ${cell.dataset.y}`)
                {
                    cell.replaceChildren(); // Remove the original start-point so it doesn't conflict the travailing start point. 
                }

                setTimeout(() => {
                    cell.classList.add('start-point');
                    const knightPieceContainer = document.createElement('img');
                    knightPieceContainer.classList.add('knight-piece-container');
                    knightPieceContainer.src = _images_black_knight_png__WEBPACK_IMPORTED_MODULE_0__;
                    cell.appendChild(knightPieceContainer);
                    
                    if (`${endPoint.dataset.x}, ${endPoint.dataset.y}` === `${cell.dataset.x}, ${cell.dataset.y}`)
                    {
                        searchInProgress.textContent = "Search Complete";
                        searchInProgress.setAttribute('style', 'background-color: #a3e635; border: 1px solid #a3e635;');
                    }
                }, timer);

                timer += 250;
            }
        });
    });
}

/***/ }),

/***/ "./src/modules/domContent.js":
/*!***********************************!*\
  !*** ./src/modules/domContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _images_black_knight_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/black-knight.png */ "./src/images/black-knight.png");
/* harmony import */ var _knightMoves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knightMoves */ "./src/modules/knightMoves.js");




// CreateGameboard(): Creates the main gameboard.
function CreateGameboard(){
    const content = document.getElementById('content');
    content.classList.add('content');

    const mainGameboard = document.createElement('div');
    mainGameboard.classList.add('main-gameboard');

    const board = _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.createGameboard();

    for (let i = 0; i < board.length; i++)
    {
        const row = document.createElement('div'); 

        for (let j = 0; j < board[i].length; j++)
        {
            const cell = document.createElement('div');
            cell.classList.add('cell'); 
            cell.dataset.x = i;
            cell.dataset.y = j;

            // create white and black cells for the chess board. 
            if (i % 2 === 0)
            {
                if (j % 2 === 0)
                {
                    cell.classList.add('white');
                }
                else
                {
                    cell.classList.add('black');
                }
            }
            else
            {
                if (j % 2 === 0)
                {
                    cell.classList.add('black');
                }
                else
                {
                    cell.classList.add('white');
                }
            }

            row.appendChild(cell);
        }

        mainGameboard.appendChild(row);
    }

    // content.appendChild(mainGameboardInterface);
    content.appendChild(mainGameboard);
}

// CreateGameboardInterface(): Create the gameboard interface and interface buttons. 
function CreateGameboardInterface(){
    const content = document.getElementById('content');

    const mainGameboardInterface = document.createElement('div');
    mainGameboardInterface.classList.add('main-gameboard-interface');

    const startPointBtn = document.createElement('button');
    startPointBtn.textContent = 'Start Point';

    const endPointBtn = document.createElement('button'); 
    endPointBtn.textContent = 'End Point';

    const travailBtn = document.createElement('button');
    travailBtn.textContent = 'Travail';

    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear';

    const searchInProgress = document.createElement('div');
    searchInProgress.textContent = "No Search In Progress";

    mainGameboardInterface.appendChild(startPointBtn);
    mainGameboardInterface.appendChild(endPointBtn);
    mainGameboardInterface.appendChild(travailBtn);
    mainGameboardInterface.appendChild(clearBtn);
    mainGameboardInterface.appendChild(searchInProgress);

    content.appendChild(mainGameboardInterface);
}

// StartPoint(): Start point initiated.
function StartPoint(){
    console.log("Start Point Initiated"); // Testing
    const cells = document.querySelectorAll('.main-gameboard > div > div');
    const searchInProgress = document.querySelector('.main-gameboard-interface > div');
    const startPointBtn = document.querySelector('.main-gameboard-interface > button:nth-child(1)');
    startPointBtn.classList.add('button-clicked'); 

    if (searchInProgress.textContent !== 'Search Complete')
    {
        cells.forEach((cell) => {
            cell.addEventListener('click', ChooseStartPoint);
        });
    }
    else
    {
        console.log("Please clear the board before choosing a new start point."); // Testing
        console.log("\n"); // Testing 
    }
}

// ChooseStartPoint(): Choose the start point on the gameboard.
function ChooseStartPoint(e){
    console.log("Start Point X: ", e.target.dataset.x); // Testing
    console.log("Start Point Y: ", e.target.dataset.y); // Testing
    console.log("\n"); // Testing 

    const startPoint = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`); 

    startPoint.classList.add('start-point');
    const knightPieceContainer = document.createElement('img');
    knightPieceContainer.classList.add('knight-piece-container');
    knightPieceContainer.src = _images_black_knight_png__WEBPACK_IMPORTED_MODULE_1__;
    startPoint.appendChild(knightPieceContainer); 

    _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.startPointX = e.target.dataset.x;
    _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.startPointY = e.target.dataset.y;

    const cells = document.querySelectorAll('.main-gameboard > div > div');
    // Remove the event once the start point is choosen. 
    cells.forEach((cell) => {
        cell.removeEventListener('click', ChooseStartPoint);
    });
}

// EndPoint(): End point initiated. 
function EndPoint(){
    const cells = document.querySelectorAll('.main-gameboard > div > div');
    const endPointBtn = document.querySelector('.main-gameboard-interface > button:nth-child(2)');
    const searchInProgress = document.querySelector('.main-gameboard-interface > div');

    if (_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.startPointX !== null)
    {
        console.log("End Point Initiated"); 
        if (searchInProgress.textContent !== 'Search Complete')
        {
            endPointBtn.classList.add('button-clicked'); 
            cells.forEach((cell) => {
                cell.addEventListener('click', ChooseEndPoint);
            });
        }
        else
        {
            console.log("Please clear the board before choosing a new end point."); // Testing
            console.log("\n"); // Testing 
        }
    }
    else
    {
        console.log("Please choose a start point first."); // Testing
        console.log("\n"); // Testing 
    }
}

// ChooseEndPoint(): Choose the end point on the gameboard. 
function ChooseEndPoint(e){
    console.log("End Point X: ", e.target.dataset.x); // Testing
    console.log("End Point Y: ", e.target.dataset.y); // Testing
    console.log("\n"); // Testing 
    
    const endPoint = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`);

    endPoint.classList.add('end-point');

    _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.endPointX = e.target.dataset.x;
    _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.endPointY = e.target.dataset.y;

    const cells = document.querySelectorAll('.main-gameboard > div > div');
    // Remove the event once the end point is choosen.
    cells.forEach((cell) => {
        cell.removeEventListener('click', ChooseEndPoint); 
    });
}

// KnightMoves(): Commence moving the knight from the start point to the end point.
function KnightTravails(){
    const travailBtn = document.querySelector('.main-gameboard-interface > button:nth-child(3)');
    const searchInProgress = document.querySelector('.main-gameboard-interface > div');

    if (_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.startPointX !== null && _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.endPointX !== null)
    {
        if (searchInProgress.textContent !== 'Search Complete')
        {
            searchInProgress.textContent = 'Search In Progress';
            searchInProgress.setAttribute('style', 'background-color: #fdba74; border: 1px solid #fdba74;');
            travailBtn.classList.add('button-clicked'); 
            (0,_knightMoves__WEBPACK_IMPORTED_MODULE_2__.knightMoves)([parseInt(_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.startPointX), parseInt(_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.startPointY)], [parseInt(_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.endPointX), parseInt(_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.endPointY)]);
        }
        else 
        {
            console.log("Please clear the board for a new travail."); // Testing
            console.log('\n'); // Testing 
        }
    }
    else
    {
        console.log("please choose a start point and end point before travailing."); // Testing 
        console.log("\n"); // Testing 
    }
}

// ClearBoard(): Clear the board.
function ClearBoard(){
    const cells = document.querySelectorAll('.main-gameboard > div > div');
    const mainGameboardInterface = document.querySelectorAll('.main-gameboard-interface > button')
    const searchInProgress = document.querySelector('.main-gameboard-interface > div');
    searchInProgress.textContent = "No Search In Progress";
    searchInProgress.removeAttribute('style'); 

    _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.resetGameboard(); // Reset all the key properties in gameboard. 

    cells.forEach((cell) => {
        cell.replaceChildren(); // Removes all child nodes from the gameboard cell. 
        cell.classList.remove('start-point'); 
        cell.classList.remove('end-point');
    });

    mainGameboardInterface.forEach((btn) => {
        btn.classList.remove('button-clicked'); 
    });
}

// InitializeDomContent(): Initialize all the dom content for the application
function InitializeDomContent(){
    CreateGameboardInterface();
    CreateGameboard();

    const startPointBtn = document.querySelector('.main-gameboard-interface > button:nth-child(1)');
    startPointBtn.addEventListener('click', StartPoint); 

    const endPointBtn = document.querySelector('.main-gameboard-interface > button:nth-child(2)');
    endPointBtn.addEventListener('click', EndPoint); 

    const travailBtn = document.querySelector('.main-gameboard-interface > button:nth-child(3)');
    travailBtn.addEventListener('click', KnightTravails);

    const clearBtn = document.querySelector('.main-gameboard-interface > button:nth-child(4)');
    clearBtn.addEventListener('click', ClearBoard);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InitializeDomContent);

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameboard: () => (/* binding */ gameboard)
/* harmony export */ });
const gameboard = {
    startPointX: null,
    startPointY: null,
    endPointX: null,
    endPointY: null,
    createGameboard(){
        const board = [...Array(8)].map(() => Array(8).fill(""));
        return board;
    },

    resetGameboard(){
        this.startPointX = null;
        this.startPointY = null;
        this.endPointX = null;
        this.endPointY = null;
    }
}

/***/ }),

/***/ "./src/modules/knightMoves.js":
/*!************************************!*\
  !*** ./src/modules/knightMoves.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   knightMoves: () => (/* binding */ knightMoves)
/* harmony export */ });
/* harmony import */ var _displayMoves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayMoves */ "./src/modules/displayMoves.js");


const squareRegistry = new Map();

const chessSquare = (x, y) => {
    const xPosition = x;
    const yPosition = y;
    let predecessor; 

    console.log("Chess Square Initiated..."); // Testing 
    console.log("X Position: ", xPosition); // Testing 
    console.log("Y Position: ", yPosition); // Testing 
    console.log("\n"); // Testing 

    // All possible default knight moves:
    const KNIGHT_MOVES = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ]

    const getPredecessor = () => predecessor;
    const setPredecessor = (newPredecessor) => {
        predecessor = predecessor || newPredecessor;
    }

    const name = () => `${x}, ${y}`;

    // Calculate all possible knight moves:
    const possibleKnightMoves = () => {
        return KNIGHT_MOVES
            .map((offset) => newSquareFrom(offset[0], offset[1]))
            .filter((square) => square !== undefined);
    }

    // Calulate new set of square coordinates against offsets
    const newSquareFrom = (xOffset, yOffset) => {
        const [newX, newY] = [xPosition + xOffset, yPosition + yOffset];
        if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7)
        {
            return chessSquare(newX, newY); 
        }
    }

    // Store data in an object.
    if (squareRegistry.has(name()))
    {
        return squareRegistry.get(name());
    }
    else
    {
        const newSquare = { name, getPredecessor, setPredecessor, possibleKnightMoves }
        squareRegistry.set(name(), newSquare); 
        console.log("The data name: ", newSquare.name()); // Testing
        console.log("The new data for the square registry: ", newSquare) // Testing
        console.log("\n"); // Testing 
        return newSquare; 
    }
}

// knightMoves(): Will move the knight to the end point. 
const knightMoves = (startPoint, endPoint) =>{
    squareRegistry.clear();
  
    console.log("Knight Moves Initiated..."); // Testing
    console.log("Start Point: ", startPoint); // Testing
    console.log("End Point: ", endPoint); // Testing
    console.log("\n"); // Testing 

    const knightStartPoint = chessSquare(...startPoint);
    const knightEndPoint = chessSquare(...endPoint); 

    const queue = [knightStartPoint]; 

    while(!queue.includes(knightEndPoint))
    {
        const currentSquare = queue.shift();
        console.log("Current Square: ", currentSquare.name()); // Testing 
        
        const enqueueList = currentSquare.possibleKnightMoves();
        console.log("Enqueue List: ", enqueueList); // Testing
        enqueueList.forEach((square) => square.setPredecessor(currentSquare));
        queue.push(...enqueueList);
    }

    const path = [knightEndPoint];
    while (!path.includes(knightStartPoint))
    {
        const previousSquare = path[0].getPredecessor();
        path.unshift(previousSquare); 
    }

    console.log("Displaying the predecessor paths:"); // Testing 
    let squareCoord = [];
    path.forEach((square) => {
        console.log("The Square: ", square.name());
        squareCoord.push(square.name());
    });
    console.log("\n"); // Testing 

    (0,_displayMoves__WEBPACK_IMPORTED_MODULE_0__.displayMoves)(squareCoord);
}

/***/ }),

/***/ "./src/fonts/rock-inline/Rockinline.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/rock-inline/Rockinline.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47707fcc353206afdab6.ttf";

/***/ }),

/***/ "./src/images/black-knight.png":
/*!*************************************!*\
  !*** ./src/images/black-knight.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "620baf66bdbdafc1ab5e.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_domContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domContent */ "./src/modules/domContent.js");



(0,_modules_domContent__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNtQzs7QUFFeEQsK0RBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheU1vdmVzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2RvbUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2tuaWdodE1vdmVzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvZm9udHMvcm9jay1pbmxpbmUvUm9ja2lubGluZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGJvZHkgLSBUaGUgbWFpbiBib2R5IGZvciB0aGUgYXBwbGljYXRpb24uICovXG5ib2R5e1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4vKiAqIC0gQWxsIGVsZW1lbnRzIG9uIHRoZSBicm93c2VyLiAqL1xuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBGb250cyAqL1xuLyogZm9udC0wIC0gUm9ja2lubGluZSAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IHJvY2tpbmxpbmU7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi8qIEtuaWdodHMgVHJhdmFpbHMgSGVhZGVyICovXG5oMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IHJvY2tpbmxpbmUsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4vKiBNYWluIENvbnRlbnQgKi9cbiNjb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xufVxuXG4vKiBNYWluIEdhbWVib2FyZCAqL1xuLm1haW4tZ2FtZWJvYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvKiBnYXA6IDVweDsgKi9cblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG59XG4ubWFpbi1nYW1lYm9hcmQgPiBkaXZ7IC8qIFJvd3MgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGdhcDogNXB4OyAqL1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICAqL1xuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG59XG4uY2VsbHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICAgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ud2hpdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYmxhY2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi8qIE1haW4gR2FtZWJvYXJkIEludGVyZmFjZSAqL1xuLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAzMHB4O1xuXG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbn1cbi5tYWluLWdhbWVib2FyZC1pbnRlcmZhY2UgPiBidXR0b257XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IHJvY2tpbmxpbmUsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG4ubWFpbi1nYW1lYm9hcmQtaW50ZXJmYWNlID4gYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRza3libHVlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcbn1cblxuLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGRpdntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IHJvY2tpbmxpbmUsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5cbi8qIFN0YXJ0IFBvaW50ICovXG4uc3RhcnQtcG9pbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLyogQnV0dG9uIENsaWNrZWQgKi9cbi5idXR0b24tY2xpY2tlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c2t5Ymx1ZSAhaW1wb3J0YW50O1xufVxuXG5cbi8qIEVuZCBQb2ludCAqL1xuLmVuZC1wb2ludHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4vKiBLbmlnaHQgUGllY2UgKi9cbi5rbmlnaHQtcGllY2UtY29udGFpbmVye1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOENBQThDO0FBQzlDO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQSxxQ0FBcUM7QUFDckM7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUEsVUFBVTtBQUNWLHdCQUF3QjtBQUN4QjtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBbUQ7QUFDdkQ7O0FBRUEsNEJBQTRCO0FBQzVCO0lBQ0ksa0JBQWtCO0lBQ2xCLDhJQUE4STtJQUM5SSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7O0lBRVQsMkJBQTJCO0FBQy9COztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYzs7SUFFZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0EsdUJBQXVCLFNBQVM7SUFDNUIsYUFBYTtJQUNiLGNBQWM7O0lBRWQsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUEsNkJBQTZCO0FBQzdCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUzs7SUFFVCxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZiw4SUFBOEk7SUFDOUksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsOElBQThJO0lBQzlJLGVBQWU7SUFDZixhQUFhO0FBQ2pCOzs7QUFHQSxnQkFBZ0I7QUFDaEI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsNEJBQTRCO0FBQ2hDOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLHdDQUF3QztBQUM1Qzs7O0FBR0EsY0FBYztBQUNkO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGJvZHkgLSBUaGUgbWFpbiBib2R5IGZvciB0aGUgYXBwbGljYXRpb24uICovXFxuYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiAqIC0gQWxsIGVsZW1lbnRzIG9uIHRoZSBicm93c2VyLiAqL1xcbip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEZvbnRzICovXFxuLyogZm9udC0wIC0gUm9ja2lubGluZSAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogcm9ja2lubGluZTtcXG4gICAgc3JjOiB1cmwoJy4uL3NyYy9mb250cy9yb2NrLWlubGluZS9Sb2NraW5saW5lLnR0ZicpO1xcbn1cXG5cXG4vKiBLbmlnaHRzIFRyYXZhaWxzIEhlYWRlciAqL1xcbmgxe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiByb2NraW5saW5lLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLyogTWFpbiBDb250ZW50ICovXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLyogTWFpbiBHYW1lYm9hcmQgKi9cXG4ubWFpbi1nYW1lYm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGdhcDogNXB4OyAqL1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG59XFxuLm1haW4tZ2FtZWJvYXJkID4gZGl2eyAvKiBSb3dzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGdhcDogNXB4OyAqL1xcblxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgICovXFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcbi5jZWxse1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgICAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi53aGl0ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5ibGFja3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIE1haW4gR2FtZWJvYXJkIEludGVyZmFjZSAqL1xcbi5tYWluLWdhbWVib2FyZC1pbnRlcmZhY2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG4ubWFpbi1nYW1lYm9hcmQtaW50ZXJmYWNlID4gYnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogcm9ja2lubGluZSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG59XFxuLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodHNreWJsdWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXFxuLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGRpdntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IHJvY2tpbmxpbmUsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5cXG4vKiBTdGFydCBQb2ludCAqL1xcbi5zdGFydC1wb2ludHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi8qIEJ1dHRvbiBDbGlja2VkICovXFxuLmJ1dHRvbi1jbGlja2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c2t5Ymx1ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5cXG4vKiBFbmQgUG9pbnQgKi9cXG4uZW5kLXBvaW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbn1cXG5cXG4vKiBLbmlnaHQgUGllY2UgKi9cXG4ua25pZ2h0LXBpZWNlLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQga25pZ2h0UGllY2UgZnJvbSAnLi4vaW1hZ2VzL2JsYWNrLWtuaWdodC5wbmcnO1xuXG4vLyBkaXNwbGF5TW92ZXMoKTogRGlzcGxheXMgdGhlIG1vdmVzIGZyb20gc3RhcnQgcG9pbnQgdG8gZW5kIHBvaW50XG5leHBvcnQgY29uc3QgZGlzcGxheU1vdmVzID0gKHNxdWFyZUNvb3JkKSA9PntcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLWdhbWVib2FyZCA+IGRpdiA+IGRpdicpOyBcblxuICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtcG9pbnQnKTtcblxuICAgIGNvbnN0IGVuZFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1wb2ludCcpOyBcblxuICAgIGNvbnN0IHNlYXJjaEluUHJvZ3Jlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1nYW1lYm9hcmQtaW50ZXJmYWNlID4gZGl2Jyk7XG5cbiAgICBsZXQgdGltZXIgPSAxMDA7XG5cbiAgICBzcXVhcmVDb29yZC5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGAke2NlbGwuZGF0YXNldC54fSwgJHtjZWxsLmRhdGFzZXQueX1gID09PSBzcXVhcmUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGAke3N0YXJ0UG9pbnQuZGF0YXNldC54fSwgJHtzdGFydFBvaW50LmRhdGFzZXQueX1gID09PSBgJHtjZWxsLmRhdGFzZXQueH0sICR7Y2VsbC5kYXRhc2V0Lnl9YClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucmVwbGFjZUNoaWxkcmVuKCk7IC8vIFJlbW92ZSB0aGUgb3JpZ2luYWwgc3RhcnQtcG9pbnQgc28gaXQgZG9lc24ndCBjb25mbGljdCB0aGUgdHJhdmFpbGluZyBzdGFydCBwb2ludC4gXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc3RhcnQtcG9pbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga25pZ2h0UGllY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAga25pZ2h0UGllY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgna25pZ2h0LXBpZWNlLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICBrbmlnaHRQaWVjZUNvbnRhaW5lci5zcmMgPSBrbmlnaHRQaWVjZTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChrbmlnaHRQaWVjZUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoYCR7ZW5kUG9pbnQuZGF0YXNldC54fSwgJHtlbmRQb2ludC5kYXRhc2V0Lnl9YCA9PT0gYCR7Y2VsbC5kYXRhc2V0Lnh9LCAke2NlbGwuZGF0YXNldC55fWApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEluUHJvZ3Jlc3MudGV4dENvbnRlbnQgPSBcIlNlYXJjaCBDb21wbGV0ZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoSW5Qcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6ICNhM2U2MzU7IGJvcmRlcjogMXB4IHNvbGlkICNhM2U2MzU7Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aW1lcik7XG5cbiAgICAgICAgICAgICAgICB0aW1lciArPSAyNTA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSIsImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IGtuaWdodFBpZWNlIGZyb20gJy4uL2ltYWdlcy9ibGFjay1rbmlnaHQucG5nJztcbmltcG9ydCB7IGtuaWdodE1vdmVzIH0gZnJvbSBcIi4va25pZ2h0TW92ZXNcIjtcblxuLy8gQ3JlYXRlR2FtZWJvYXJkKCk6IENyZWF0ZXMgdGhlIG1haW4gZ2FtZWJvYXJkLlxuZnVuY3Rpb24gQ3JlYXRlR2FtZWJvYXJkKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBtYWluR2FtZWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKCdtYWluLWdhbWVib2FyZCcpO1xuXG4gICAgY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQuY3JlYXRlR2FtZWJvYXJkKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpOyBcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC55ID0gajtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIHdoaXRlIGFuZCBibGFjayBjZWxscyBmb3IgdGhlIGNoZXNzIGJvYXJkLiBcbiAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoaiAlIDIgPT09IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYmxhY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGogJSAyID09PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdibGFjaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluR2FtZWJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChtYWluR2FtZWJvYXJkSW50ZXJmYWNlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5HYW1lYm9hcmQpO1xufVxuXG4vLyBDcmVhdGVHYW1lYm9hcmRJbnRlcmZhY2UoKTogQ3JlYXRlIHRoZSBnYW1lYm9hcmQgaW50ZXJmYWNlIGFuZCBpbnRlcmZhY2UgYnV0dG9ucy4gXG5mdW5jdGlvbiBDcmVhdGVHYW1lYm9hcmRJbnRlcmZhY2UoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG1haW5HYW1lYm9hcmRJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluR2FtZWJvYXJkSW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoJ21haW4tZ2FtZWJvYXJkLWludGVyZmFjZScpO1xuXG4gICAgY29uc3Qgc3RhcnRQb2ludEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN0YXJ0UG9pbnRCdG4udGV4dENvbnRlbnQgPSAnU3RhcnQgUG9pbnQnO1xuXG4gICAgY29uc3QgZW5kUG9pbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgZW5kUG9pbnRCdG4udGV4dENvbnRlbnQgPSAnRW5kIFBvaW50JztcblxuICAgIGNvbnN0IHRyYXZhaWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0cmF2YWlsQnRuLnRleHRDb250ZW50ID0gJ1RyYXZhaWwnO1xuXG4gICAgY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbGVhckJ0bi50ZXh0Q29udGVudCA9ICdDbGVhcic7XG5cbiAgICBjb25zdCBzZWFyY2hJblByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VhcmNoSW5Qcm9ncmVzcy50ZXh0Q29udGVudCA9IFwiTm8gU2VhcmNoIEluIFByb2dyZXNzXCI7XG5cbiAgICBtYWluR2FtZWJvYXJkSW50ZXJmYWNlLmFwcGVuZENoaWxkKHN0YXJ0UG9pbnRCdG4pO1xuICAgIG1haW5HYW1lYm9hcmRJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoZW5kUG9pbnRCdG4pO1xuICAgIG1haW5HYW1lYm9hcmRJbnRlcmZhY2UuYXBwZW5kQ2hpbGQodHJhdmFpbEJ0bik7XG4gICAgbWFpbkdhbWVib2FyZEludGVyZmFjZS5hcHBlbmRDaGlsZChjbGVhckJ0bik7XG4gICAgbWFpbkdhbWVib2FyZEludGVyZmFjZS5hcHBlbmRDaGlsZChzZWFyY2hJblByb2dyZXNzKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkdhbWVib2FyZEludGVyZmFjZSk7XG59XG5cbi8vIFN0YXJ0UG9pbnQoKTogU3RhcnQgcG9pbnQgaW5pdGlhdGVkLlxuZnVuY3Rpb24gU3RhcnRQb2ludCgpe1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnQgUG9pbnQgSW5pdGlhdGVkXCIpOyAvLyBUZXN0aW5nXG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1nYW1lYm9hcmQgPiBkaXYgPiBkaXYnKTtcbiAgICBjb25zdCBzZWFyY2hJblByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGRpdicpO1xuICAgIGNvbnN0IHN0YXJ0UG9pbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1nYW1lYm9hcmQtaW50ZXJmYWNlID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIHN0YXJ0UG9pbnRCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNsaWNrZWQnKTsgXG5cbiAgICBpZiAoc2VhcmNoSW5Qcm9ncmVzcy50ZXh0Q29udGVudCAhPT0gJ1NlYXJjaCBDb21wbGV0ZScpXG4gICAge1xuICAgICAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hvb3NlU3RhcnRQb2ludCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBjbGVhciB0aGUgYm9hcmQgYmVmb3JlIGNob29zaW5nIGEgbmV3IHN0YXJ0IHBvaW50LlwiKTsgLy8gVGVzdGluZ1xuICAgICAgICBjb25zb2xlLmxvZyhcIlxcblwiKTsgLy8gVGVzdGluZyBcbiAgICB9XG59XG5cbi8vIENob29zZVN0YXJ0UG9pbnQoKTogQ2hvb3NlIHRoZSBzdGFydCBwb2ludCBvbiB0aGUgZ2FtZWJvYXJkLlxuZnVuY3Rpb24gQ2hvb3NlU3RhcnRQb2ludChlKXtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0IFBvaW50IFg6IFwiLCBlLnRhcmdldC5kYXRhc2V0LngpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coXCJTdGFydCBQb2ludCBZOiBcIiwgZS50YXJnZXQuZGF0YXNldC55KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKFwiXFxuXCIpOyAvLyBUZXN0aW5nIFxuXG4gICAgY29uc3Qgc3RhcnRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7IFxuXG4gICAgc3RhcnRQb2ludC5jbGFzc0xpc3QuYWRkKCdzdGFydC1wb2ludCcpO1xuICAgIGNvbnN0IGtuaWdodFBpZWNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAga25pZ2h0UGllY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgna25pZ2h0LXBpZWNlLWNvbnRhaW5lcicpO1xuICAgIGtuaWdodFBpZWNlQ29udGFpbmVyLnNyYyA9IGtuaWdodFBpZWNlO1xuICAgIHN0YXJ0UG9pbnQuYXBwZW5kQ2hpbGQoa25pZ2h0UGllY2VDb250YWluZXIpOyBcblxuICAgIGdhbWVib2FyZC5zdGFydFBvaW50WCA9IGUudGFyZ2V0LmRhdGFzZXQueDtcbiAgICBnYW1lYm9hcmQuc3RhcnRQb2ludFkgPSBlLnRhcmdldC5kYXRhc2V0Lnk7XG5cbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLWdhbWVib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIC8vIFJlbW92ZSB0aGUgZXZlbnQgb25jZSB0aGUgc3RhcnQgcG9pbnQgaXMgY2hvb3Nlbi4gXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hvb3NlU3RhcnRQb2ludCk7XG4gICAgfSk7XG59XG5cbi8vIEVuZFBvaW50KCk6IEVuZCBwb2ludCBpbml0aWF0ZWQuIFxuZnVuY3Rpb24gRW5kUG9pbnQoKXtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLWdhbWVib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIGNvbnN0IGVuZFBvaW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTtcbiAgICBjb25zdCBzZWFyY2hJblByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGRpdicpO1xuXG4gICAgaWYgKGdhbWVib2FyZC5zdGFydFBvaW50WCAhPT0gbnVsbClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW5kIFBvaW50IEluaXRpYXRlZFwiKTsgXG4gICAgICAgIGlmIChzZWFyY2hJblByb2dyZXNzLnRleHRDb250ZW50ICE9PSAnU2VhcmNoIENvbXBsZXRlJylcbiAgICAgICAge1xuICAgICAgICAgICAgZW5kUG9pbnRCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNsaWNrZWQnKTsgXG4gICAgICAgICAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENob29zZUVuZFBvaW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgY2xlYXIgdGhlIGJvYXJkIGJlZm9yZSBjaG9vc2luZyBhIG5ldyBlbmQgcG9pbnQuXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlxcblwiKTsgLy8gVGVzdGluZyBcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBjaG9vc2UgYSBzdGFydCBwb2ludCBmaXJzdC5cIik7IC8vIFRlc3RpbmdcbiAgICAgICAgY29uc29sZS5sb2coXCJcXG5cIik7IC8vIFRlc3RpbmcgXG4gICAgfVxufVxuXG4vLyBDaG9vc2VFbmRQb2ludCgpOiBDaG9vc2UgdGhlIGVuZCBwb2ludCBvbiB0aGUgZ2FtZWJvYXJkLiBcbmZ1bmN0aW9uIENob29zZUVuZFBvaW50KGUpe1xuICAgIGNvbnNvbGUubG9nKFwiRW5kIFBvaW50IFg6IFwiLCBlLnRhcmdldC5kYXRhc2V0LngpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coXCJFbmQgUG9pbnQgWTogXCIsIGUudGFyZ2V0LmRhdGFzZXQueSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZyhcIlxcblwiKTsgLy8gVGVzdGluZyBcbiAgICBcbiAgICBjb25zdCBlbmRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG5cbiAgICBlbmRQb2ludC5jbGFzc0xpc3QuYWRkKCdlbmQtcG9pbnQnKTtcblxuICAgIGdhbWVib2FyZC5lbmRQb2ludFggPSBlLnRhcmdldC5kYXRhc2V0Lng7XG4gICAgZ2FtZWJvYXJkLmVuZFBvaW50WSA9IGUudGFyZ2V0LmRhdGFzZXQueTtcblxuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tZ2FtZWJvYXJkID4gZGl2ID4gZGl2Jyk7XG4gICAgLy8gUmVtb3ZlIHRoZSBldmVudCBvbmNlIHRoZSBlbmQgcG9pbnQgaXMgY2hvb3Nlbi5cbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaG9vc2VFbmRQb2ludCk7IFxuICAgIH0pO1xufVxuXG4vLyBLbmlnaHRNb3ZlcygpOiBDb21tZW5jZSBtb3ZpbmcgdGhlIGtuaWdodCBmcm9tIHRoZSBzdGFydCBwb2ludCB0byB0aGUgZW5kIHBvaW50LlxuZnVuY3Rpb24gS25pZ2h0VHJhdmFpbHMoKXtcbiAgICBjb25zdCB0cmF2YWlsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGJ1dHRvbjpudGgtY2hpbGQoMyknKTtcbiAgICBjb25zdCBzZWFyY2hJblByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGRpdicpO1xuXG4gICAgaWYgKGdhbWVib2FyZC5zdGFydFBvaW50WCAhPT0gbnVsbCAmJiBnYW1lYm9hcmQuZW5kUG9pbnRYICE9PSBudWxsKVxuICAgIHtcbiAgICAgICAgaWYgKHNlYXJjaEluUHJvZ3Jlc3MudGV4dENvbnRlbnQgIT09ICdTZWFyY2ggQ29tcGxldGUnKVxuICAgICAgICB7XG4gICAgICAgICAgICBzZWFyY2hJblByb2dyZXNzLnRleHRDb250ZW50ID0gJ1NlYXJjaCBJbiBQcm9ncmVzcyc7XG4gICAgICAgICAgICBzZWFyY2hJblByb2dyZXNzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogI2ZkYmE3NDsgYm9yZGVyOiAxcHggc29saWQgI2ZkYmE3NDsnKTtcbiAgICAgICAgICAgIHRyYXZhaWxCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNsaWNrZWQnKTsgXG4gICAgICAgICAgICBrbmlnaHRNb3ZlcyhbcGFyc2VJbnQoZ2FtZWJvYXJkLnN0YXJ0UG9pbnRYKSwgcGFyc2VJbnQoZ2FtZWJvYXJkLnN0YXJ0UG9pbnRZKV0sIFtwYXJzZUludChnYW1lYm9hcmQuZW5kUG9pbnRYKSwgcGFyc2VJbnQoZ2FtZWJvYXJkLmVuZFBvaW50WSldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBjbGVhciB0aGUgYm9hcmQgZm9yIGEgbmV3IHRyYXZhaWwuXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGVhc2UgY2hvb3NlIGEgc3RhcnQgcG9pbnQgYW5kIGVuZCBwb2ludCBiZWZvcmUgdHJhdmFpbGluZy5cIik7IC8vIFRlc3RpbmcgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFxuXCIpOyAvLyBUZXN0aW5nIFxuICAgIH1cbn1cblxuLy8gQ2xlYXJCb2FyZCgpOiBDbGVhciB0aGUgYm9hcmQuXG5mdW5jdGlvbiBDbGVhckJvYXJkKCl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1nYW1lYm9hcmQgPiBkaXYgPiBkaXYnKTtcbiAgICBjb25zdCBtYWluR2FtZWJvYXJkSW50ZXJmYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGJ1dHRvbicpXG4gICAgY29uc3Qgc2VhcmNoSW5Qcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdhbWVib2FyZC1pbnRlcmZhY2UgPiBkaXYnKTtcbiAgICBzZWFyY2hJblByb2dyZXNzLnRleHRDb250ZW50ID0gXCJObyBTZWFyY2ggSW4gUHJvZ3Jlc3NcIjtcbiAgICBzZWFyY2hJblByb2dyZXNzLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTsgXG5cbiAgICBnYW1lYm9hcmQucmVzZXRHYW1lYm9hcmQoKTsgLy8gUmVzZXQgYWxsIHRoZSBrZXkgcHJvcGVydGllcyBpbiBnYW1lYm9hcmQuIFxuXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnJlcGxhY2VDaGlsZHJlbigpOyAvLyBSZW1vdmVzIGFsbCBjaGlsZCBub2RlcyBmcm9tIHRoZSBnYW1lYm9hcmQgY2VsbC4gXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtcG9pbnQnKTsgXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZW5kLXBvaW50Jyk7XG4gICAgfSk7XG5cbiAgICBtYWluR2FtZWJvYXJkSW50ZXJmYWNlLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLWNsaWNrZWQnKTsgXG4gICAgfSk7XG59XG5cbi8vIEluaXRpYWxpemVEb21Db250ZW50KCk6IEluaXRpYWxpemUgYWxsIHRoZSBkb20gY29udGVudCBmb3IgdGhlIGFwcGxpY2F0aW9uXG5mdW5jdGlvbiBJbml0aWFsaXplRG9tQ29udGVudCgpe1xuICAgIENyZWF0ZUdhbWVib2FyZEludGVyZmFjZSgpO1xuICAgIENyZWF0ZUdhbWVib2FyZCgpO1xuXG4gICAgY29uc3Qgc3RhcnRQb2ludEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdhbWVib2FyZC1pbnRlcmZhY2UgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gICAgc3RhcnRQb2ludEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFN0YXJ0UG9pbnQpOyBcblxuICAgIGNvbnN0IGVuZFBvaW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTtcbiAgICBlbmRQb2ludEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEVuZFBvaW50KTsgXG5cbiAgICBjb25zdCB0cmF2YWlsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGJ1dHRvbjpudGgtY2hpbGQoMyknKTtcbiAgICB0cmF2YWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgS25pZ2h0VHJhdmFpbHMpO1xuXG4gICAgY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1nYW1lYm9hcmQtaW50ZXJmYWNlID4gYnV0dG9uOm50aC1jaGlsZCg0KScpO1xuICAgIGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2xlYXJCb2FyZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluaXRpYWxpemVEb21Db250ZW50OyIsImV4cG9ydCBjb25zdCBnYW1lYm9hcmQgPSB7XG4gICAgc3RhcnRQb2ludFg6IG51bGwsXG4gICAgc3RhcnRQb2ludFk6IG51bGwsXG4gICAgZW5kUG9pbnRYOiBudWxsLFxuICAgIGVuZFBvaW50WTogbnVsbCxcbiAgICBjcmVhdGVHYW1lYm9hcmQoKXtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBbLi4uQXJyYXkoOCldLm1hcCgoKSA9PiBBcnJheSg4KS5maWxsKFwiXCIpKTtcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH0sXG5cbiAgICByZXNldEdhbWVib2FyZCgpe1xuICAgICAgICB0aGlzLnN0YXJ0UG9pbnRYID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydFBvaW50WSA9IG51bGw7XG4gICAgICAgIHRoaXMuZW5kUG9pbnRYID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbmRQb2ludFkgPSBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBkaXNwbGF5TW92ZXMgfSBmcm9tIFwiLi9kaXNwbGF5TW92ZXNcIjtcblxuY29uc3Qgc3F1YXJlUmVnaXN0cnkgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IGNoZXNzU3F1YXJlID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCB4UG9zaXRpb24gPSB4O1xuICAgIGNvbnN0IHlQb3NpdGlvbiA9IHk7XG4gICAgbGV0IHByZWRlY2Vzc29yOyBcblxuICAgIGNvbnNvbGUubG9nKFwiQ2hlc3MgU3F1YXJlIEluaXRpYXRlZC4uLlwiKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZyhcIlggUG9zaXRpb246IFwiLCB4UG9zaXRpb24pOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKFwiWSBQb3NpdGlvbjogXCIsIHlQb3NpdGlvbik7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coXCJcXG5cIik7IC8vIFRlc3RpbmcgXG5cbiAgICAvLyBBbGwgcG9zc2libGUgZGVmYXVsdCBrbmlnaHQgbW92ZXM6XG4gICAgY29uc3QgS05JR0hUX01PVkVTID0gW1xuICAgICAgICBbMSwgMl0sIFsxLCAtMl0sXG4gICAgICAgIFsyLCAxXSwgWzIsIC0xXSxcbiAgICAgICAgWy0xLCAyXSwgWy0xLCAtMl0sXG4gICAgICAgIFstMiwgMV0sIFstMiwgLTFdXG4gICAgXVxuXG4gICAgY29uc3QgZ2V0UHJlZGVjZXNzb3IgPSAoKSA9PiBwcmVkZWNlc3NvcjtcbiAgICBjb25zdCBzZXRQcmVkZWNlc3NvciA9IChuZXdQcmVkZWNlc3NvcikgPT4ge1xuICAgICAgICBwcmVkZWNlc3NvciA9IHByZWRlY2Vzc29yIHx8IG5ld1ByZWRlY2Vzc29yO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSAoKSA9PiBgJHt4fSwgJHt5fWA7XG5cbiAgICAvLyBDYWxjdWxhdGUgYWxsIHBvc3NpYmxlIGtuaWdodCBtb3ZlczpcbiAgICBjb25zdCBwb3NzaWJsZUtuaWdodE1vdmVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gS05JR0hUX01PVkVTXG4gICAgICAgICAgICAubWFwKChvZmZzZXQpID0+IG5ld1NxdWFyZUZyb20ob2Zmc2V0WzBdLCBvZmZzZXRbMV0pKVxuICAgICAgICAgICAgLmZpbHRlcigoc3F1YXJlKSA9PiBzcXVhcmUgIT09IHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgLy8gQ2FsdWxhdGUgbmV3IHNldCBvZiBzcXVhcmUgY29vcmRpbmF0ZXMgYWdhaW5zdCBvZmZzZXRzXG4gICAgY29uc3QgbmV3U3F1YXJlRnJvbSA9ICh4T2Zmc2V0LCB5T2Zmc2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IFtuZXdYLCBuZXdZXSA9IFt4UG9zaXRpb24gKyB4T2Zmc2V0LCB5UG9zaXRpb24gKyB5T2Zmc2V0XTtcbiAgICAgICAgaWYgKG5ld1ggPj0gMCAmJiBuZXdYIDw9IDcgJiYgbmV3WSA+PSAwICYmIG5ld1kgPD0gNylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGNoZXNzU3F1YXJlKG5ld1gsIG5ld1kpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0b3JlIGRhdGEgaW4gYW4gb2JqZWN0LlxuICAgIGlmIChzcXVhcmVSZWdpc3RyeS5oYXMobmFtZSgpKSlcbiAgICB7XG4gICAgICAgIHJldHVybiBzcXVhcmVSZWdpc3RyeS5nZXQobmFtZSgpKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgY29uc3QgbmV3U3F1YXJlID0geyBuYW1lLCBnZXRQcmVkZWNlc3Nvciwgc2V0UHJlZGVjZXNzb3IsIHBvc3NpYmxlS25pZ2h0TW92ZXMgfVxuICAgICAgICBzcXVhcmVSZWdpc3RyeS5zZXQobmFtZSgpLCBuZXdTcXVhcmUpOyBcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZGF0YSBuYW1lOiBcIiwgbmV3U3F1YXJlLm5hbWUoKSk7IC8vIFRlc3RpbmdcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgbmV3IGRhdGEgZm9yIHRoZSBzcXVhcmUgcmVnaXN0cnk6IFwiLCBuZXdTcXVhcmUpIC8vIFRlc3RpbmdcbiAgICAgICAgY29uc29sZS5sb2coXCJcXG5cIik7IC8vIFRlc3RpbmcgXG4gICAgICAgIHJldHVybiBuZXdTcXVhcmU7IFxuICAgIH1cbn1cblxuLy8ga25pZ2h0TW92ZXMoKTogV2lsbCBtb3ZlIHRoZSBrbmlnaHQgdG8gdGhlIGVuZCBwb2ludC4gXG5leHBvcnQgY29uc3Qga25pZ2h0TW92ZXMgPSAoc3RhcnRQb2ludCwgZW5kUG9pbnQpID0+e1xuICAgIHNxdWFyZVJlZ2lzdHJ5LmNsZWFyKCk7XG4gIFxuICAgIGNvbnNvbGUubG9nKFwiS25pZ2h0IE1vdmVzIEluaXRpYXRlZC4uLlwiKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnQgUG9pbnQ6IFwiLCBzdGFydFBvaW50KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKFwiRW5kIFBvaW50OiBcIiwgZW5kUG9pbnQpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coXCJcXG5cIik7IC8vIFRlc3RpbmcgXG5cbiAgICBjb25zdCBrbmlnaHRTdGFydFBvaW50ID0gY2hlc3NTcXVhcmUoLi4uc3RhcnRQb2ludCk7XG4gICAgY29uc3Qga25pZ2h0RW5kUG9pbnQgPSBjaGVzc1NxdWFyZSguLi5lbmRQb2ludCk7IFxuXG4gICAgY29uc3QgcXVldWUgPSBba25pZ2h0U3RhcnRQb2ludF07IFxuXG4gICAgd2hpbGUoIXF1ZXVlLmluY2x1ZGVzKGtuaWdodEVuZFBvaW50KSlcbiAgICB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnQgU3F1YXJlOiBcIiwgY3VycmVudFNxdWFyZS5uYW1lKCkpOyAvLyBUZXN0aW5nIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgZW5xdWV1ZUxpc3QgPSBjdXJyZW50U3F1YXJlLnBvc3NpYmxlS25pZ2h0TW92ZXMoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJFbnF1ZXVlIExpc3Q6IFwiLCBlbnF1ZXVlTGlzdCk7IC8vIFRlc3RpbmdcbiAgICAgICAgZW5xdWV1ZUxpc3QuZm9yRWFjaCgoc3F1YXJlKSA9PiBzcXVhcmUuc2V0UHJlZGVjZXNzb3IoY3VycmVudFNxdWFyZSkpO1xuICAgICAgICBxdWV1ZS5wdXNoKC4uLmVucXVldWVMaXN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXRoID0gW2tuaWdodEVuZFBvaW50XTtcbiAgICB3aGlsZSAoIXBhdGguaW5jbHVkZXMoa25pZ2h0U3RhcnRQb2ludCkpXG4gICAge1xuICAgICAgICBjb25zdCBwcmV2aW91c1NxdWFyZSA9IHBhdGhbMF0uZ2V0UHJlZGVjZXNzb3IoKTtcbiAgICAgICAgcGF0aC51bnNoaWZ0KHByZXZpb3VzU3F1YXJlKTsgXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJEaXNwbGF5aW5nIHRoZSBwcmVkZWNlc3NvciBwYXRoczpcIik7IC8vIFRlc3RpbmcgXG4gICAgbGV0IHNxdWFyZUNvb3JkID0gW107XG4gICAgcGF0aC5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgU3F1YXJlOiBcIiwgc3F1YXJlLm5hbWUoKSk7XG4gICAgICAgIHNxdWFyZUNvb3JkLnB1c2goc3F1YXJlLm5hbWUoKSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJcXG5cIik7IC8vIFRlc3RpbmcgXG5cbiAgICBkaXNwbGF5TW92ZXMoc3F1YXJlQ29vcmQpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgSW5pdGlhbGl6ZURvbUNvbnRlbnQgZnJvbSAnLi9tb2R1bGVzL2RvbUNvbnRlbnQnO1xuXG5Jbml0aWFsaXplRG9tQ29udGVudCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9