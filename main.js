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

/* Main Content */
#content{
    display: flex;
    justify-content: center;
    gap: 10px;

    border: 1px solid red;
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
    border: 1px solid black;
}
.main-gameboard-interface > button{
    cursor: pointer;
    padding: 5px 20px 5px 20px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0);
    background-color: white;
    font-size: 20px;
    font-family: rockinline;
}
.main-gameboard-interface > button:hover{
    background-color:lightskyblue;
    border: 1px solid lightskyblue;
}

.main-gameboard-interface > div{
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    font-family: rockinline;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8CAA8C;AAC9C;IACI,UAAU;IACV,SAAS;AACb;;AAEA,qCAAqC;AACrC;IACI,sBAAsB;AAC1B;;AAEA,UAAU;AACV,wBAAwB;AACxB;IACI,uBAAuB;IACvB,4CAAmD;AACvD;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;;IAET,qBAAqB;AACzB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;;IAEd,uBAAuB;IACvB,mBAAmB;AACvB;AACA,uBAAuB,SAAS;IAC5B,aAAa;IACb,cAAc;;IAEd,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;IACZ,+BAA+B;IAC/B,eAAe;AACnB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,uBAAuB;AAC3B;;AAEA,6BAA6B;AAC7B;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;;IAET,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,0BAA0B;IAC1B,mBAAmB;IACnB,kCAAkC;IAClC,uBAAuB;IACvB,eAAe;IACf,uBAAuB;AAC3B;AACA;IACI,6BAA6B;IAC7B,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,aAAa;AACjB;;;AAGA,gBAAgB;AAChB;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,4BAA4B;AAChC;;AAEA,mBAAmB;AACnB;IACI,wCAAwC;AAC5C;;;AAGA,cAAc;AACd;IACI,4BAA4B;AAChC;;AAEA,iBAAiB;AACjB;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":["/* body - The main body for the application. */\nbody{\n    padding: 0;\n    margin: 0;\n}\n\n/* * - All elements on the browser. */\n*{\n    box-sizing: border-box;\n}\n\n/* Fonts */\n/* font-0 - Rockinline */\n@font-face {\n    font-family: rockinline;\n    src: url('../src/fonts/rock-inline/Rockinline.ttf');\n}\n\n/* Main Content */\n#content{\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n\n    border: 1px solid red;\n}\n\n/* Main Gameboard */\n.main-gameboard{\n    display: flex;\n    flex-direction: column;\n    /* gap: 5px; */\n\n    border: 1px solid black;\n    /* padding: 10px; */\n}\n.main-gameboard > div{ /* Rows */\n    display: flex;\n    /* gap: 5px; */\n\n    /* border: 1px solid black;  */\n    /* padding: 10px; */\n}\n.cell{\n    width: 60px;\n    height: 60px;\n    /* border: 1px solid black;   */\n    cursor: pointer;\n}\n.white{\n    background-color: white;\n}\n.black{\n    background-color: black;\n}\n\n/* Main Gameboard Interface */\n.main-gameboard-interface{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 30px;\n\n    padding: 20px;\n    border: 1px solid black;\n}\n.main-gameboard-interface > button{\n    cursor: pointer;\n    padding: 5px 20px 5px 20px;\n    border-radius: 10px;\n    border: 1px solid rgba(0, 0, 0, 0);\n    background-color: white;\n    font-size: 20px;\n    font-family: rockinline;\n}\n.main-gameboard-interface > button:hover{\n    background-color:lightskyblue;\n    border: 1px solid lightskyblue;\n}\n\n.main-gameboard-interface > div{\n    border: 1px solid #cbd5e1;\n    border-radius: 10px;\n    font-family: rockinline;\n    font-size: 18px;\n    padding: 10px;\n}\n\n\n/* Start Point */\n.start-point{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: lightgreen;\n}\n\n/* Button Clicked */\n.button-clicked{\n    background-color:lightskyblue !important;\n}\n\n\n/* End Point */\n.end-point{\n    background-color: lightcoral;\n}\n\n/* Knight Piece */\n.knight-piece-container{\n    width: 50px;\n    height: 50px;\n}"],"sourceRoot":""}]);
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
    console.log("displaying Moves: ", squareCoord); // Testing

    const cells = document.querySelectorAll('.main-gameboard > div > div'); 
    const startPoint = document.querySelector('.start-point');
    console.log(`Start Point: ${startPoint.dataset.x}, ${startPoint.dataset.y}`); // Testing
    const endPoint = document.querySelector('.end-point'); 
    console.log(`End Point: ${endPoint.dataset.x}, ${endPoint.dataset.y}`); // Testing
    console.log("\n"); // Testing

    let timer = 100;

    squareCoord.forEach((square) => {
        cells.forEach((cell) => {
            if (`${cell.dataset.x}, ${cell.dataset.y}` === square)
            {
                console.log(`${cell.dataset.x}, ${cell.dataset.y}`); // Testing

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

    // const mainGameboardInterface = document.createElement('div');
    // mainGameboardInterface.classList.add('main-gameboard-interface');

    const board = _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.createGameboard();
    console.log("Gameboard: ", board); // Testing

    for (let i = 0; i < board.length; i++)
    {
        console.log("Each row: ",board[i]); // Testing
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
    searchInProgress.textContent = "No Search In Progess";

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
    const startPointBtn = document.querySelector('.main-gameboard-interface > button:nth-child(1)');
    startPointBtn.classList.add('button-clicked'); 
    
    cells.forEach((cell) => {
        cell.addEventListener('click', ChooseStartPoint);
    });
}

// ChooseStartPoint(): Choose the start point on the gameboard.
function ChooseStartPoint(e){
    console.log("Target: ", e.target); // Testing
    console.log("Start Point X: ", e.target.dataset.x); // Testing
    console.log("Start Point Y: ", e.target.dataset.y); // Testing

    const startPoint = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`); 
    console.log("First way to expose the start point: ", startPoint); // Testing

    startPoint.classList.add('start-point');
    const knightPieceContainer = document.createElement('img');
    knightPieceContainer.classList.add('knight-piece-container');
    knightPieceContainer.src = _images_black_knight_png__WEBPACK_IMPORTED_MODULE_1__;
    startPoint.appendChild(knightPieceContainer); 

    _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.startPointX = e.target.dataset.x;
    _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.startPointY = e.target.dataset.y;

    const startPointTwo = e.target;
    console.log("Second way to expose the start point: ", startPointTwo); // Testing
    console.log("\n"); // Testing 

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

    if (_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.startPointX !== null)
    {
        console.log("End Point Initiated"); 
        endPointBtn.classList.add('button-clicked'); 
        cells.forEach((cell) => {
            cell.addEventListener('click', ChooseEndPoint);
        });
    }
    else
    {
        console.log("Please choose a start point first."); // Testing
        console.log("\n"); // Testing 
    }
}

// ChooseEndPoint(): Choose the end point on the gameboard. 
function ChooseEndPoint(e){
    console.log("Target: ", e.target); // Testing
    console.log("End Point X: ", e.target.dataset.x); // Testing
    console.log("End Point Y: ", e.target.dataset.y); // Testing
    
    const endPoint = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`);
    console.log("The End Point: ", endPoint); // Testing
    console.log("\n"); // Testing 

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

    if (_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.startPointX !== null && _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.endPointX !== null)
    {
        travailBtn.classList.add('button-clicked'); 
        (0,_knightMoves__WEBPACK_IMPORTED_MODULE_2__.knightMoves)([parseInt(_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.startPointX), parseInt(_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.startPointY)], [parseInt(_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.endPointX), parseInt(_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard.endPointY)]);
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
    console.log("Queue: ", queue); // Testing
    console.log("\n"); // Testing 

    while(!queue.includes(knightEndPoint))
    {
        const currentSquare = queue.shift();
        // Testing: Testing The Queue:
        queue.forEach((data) => {
            console.log("Data inside queue: ", data.name());
        });
        console.log("Current Square: ", currentSquare.name()); // Testing
        
        const enqueueList = currentSquare.possibleKnightMoves();
        console.log("The New Enqueue List: ", enqueueList);  // Testing 
        enqueueList.forEach((square) => square.setPredecessor(currentSquare));
        queue.push(...enqueueList);
    }
    console.log("\n"); // Testing 

    console.log("----------------------------------------------------") // Testing
    console.log("Data inside in the queue after:");
    queue.forEach((data) => {
        console.log("Data inside: ", data.name()); // Testing
    });
    console.log("----------------------------------------------------"); // Testing
    console.log("\n"); // Testing

    const path = [knightEndPoint];
    console.log("Path: ", path); 
    path.forEach((data) => {
        console.log("End Point: ", data.name()); // Testing
    });
    console.log("\n"); // Testing

    console.log("Finding the predecessor paths: "); // Testing
    while (!path.includes(knightStartPoint))
    {
        const previousSquare = path[0].getPredecessor();
        path.unshift(previousSquare); 
        console.log(previousSquare.name()); // Testing
    }
    console.log("\n"); // Testing 

    console.log("Displaying the square paths"); // Testing 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ21DOztBQUV4RCwrREFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5TW92ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZG9tQ29udGVudC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3QvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0Ly4vc3JjL21vZHVsZXMva25pZ2h0TW92ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9mb250cy9yb2NrLWlubGluZS9Sb2NraW5saW5lLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogYm9keSAtIFRoZSBtYWluIGJvZHkgZm9yIHRoZSBhcHBsaWNhdGlvbi4gKi9cbmJvZHl7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi8qICogLSBBbGwgZWxlbWVudHMgb24gdGhlIGJyb3dzZXIuICovXG4qe1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIEZvbnRzICovXG4vKiBmb250LTAgLSBSb2NraW5saW5lICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogcm9ja2lubGluZTtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLyogTWFpbiBDb250ZW50ICovXG4jY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLyogTWFpbiBHYW1lYm9hcmQgKi9cbi5tYWluLWdhbWVib2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyogZ2FwOiA1cHg7ICovXG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xufVxuLm1haW4tZ2FtZWJvYXJkID4gZGl2eyAvKiBSb3dzICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBnYXA6IDVweDsgKi9cblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAgKi9cbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xufVxuLmNlbGx7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAgICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndoaXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmJsYWNre1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4vKiBNYWluIEdhbWVib2FyZCBJbnRlcmZhY2UgKi9cbi5tYWluLWdhbWVib2FyZC1pbnRlcmZhY2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMzBweDtcblxuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4ubWFpbi1nYW1lYm9hcmQtaW50ZXJmYWNlID4gYnV0dG9ue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiByb2NraW5saW5lO1xufVxuLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c2t5Ymx1ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNreWJsdWU7XG59XG5cbi5tYWluLWdhbWVib2FyZC1pbnRlcmZhY2UgPiBkaXZ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiByb2NraW5saW5lO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5cbi8qIFN0YXJ0IFBvaW50ICovXG4uc3RhcnQtcG9pbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLyogQnV0dG9uIENsaWNrZWQgKi9cbi5idXR0b24tY2xpY2tlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0c2t5Ymx1ZSAhaW1wb3J0YW50O1xufVxuXG5cbi8qIEVuZCBQb2ludCAqL1xuLmVuZC1wb2ludHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4vKiBLbmlnaHQgUGllY2UgKi9cbi5rbmlnaHQtcGllY2UtY29udGFpbmVye1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOENBQThDO0FBQzlDO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQSxxQ0FBcUM7QUFDckM7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUEsVUFBVTtBQUNWLHdCQUF3QjtBQUN4QjtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBbUQ7QUFDdkQ7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTOztJQUVULHFCQUFxQjtBQUN6Qjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7O0lBRWQsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBLHVCQUF1QixTQUFTO0lBQzVCLGFBQWE7SUFDYixjQUFjOztJQUVkLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBLDZCQUE2QjtBQUM3QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7O0lBRVQsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGFBQWE7QUFDakI7OztBQUdBLGdCQUFnQjtBQUNoQjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQiw0QkFBNEI7QUFDaEM7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksd0NBQXdDO0FBQzVDOzs7QUFHQSxjQUFjO0FBQ2Q7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogYm9keSAtIFRoZSBtYWluIGJvZHkgZm9yIHRoZSBhcHBsaWNhdGlvbi4gKi9cXG5ib2R5e1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qICogLSBBbGwgZWxlbWVudHMgb24gdGhlIGJyb3dzZXIuICovXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogRm9udHMgKi9cXG4vKiBmb250LTAgLSBSb2NraW5saW5lICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiByb2NraW5saW5lO1xcbiAgICBzcmM6IHVybCgnLi4vc3JjL2ZvbnRzL3JvY2staW5saW5lL1JvY2tpbmxpbmUudHRmJyk7XFxufVxcblxcbi8qIE1haW4gQ29udGVudCAqL1xcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi8qIE1haW4gR2FtZWJvYXJkICovXFxuLm1haW4tZ2FtZWJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBnYXA6IDVweDsgKi9cXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcbi5tYWluLWdhbWVib2FyZCA+IGRpdnsgLyogUm93cyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBnYXA6IDVweDsgKi9cXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICAqL1xcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xcbn1cXG4uY2VsbHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICAgKi9cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ud2hpdGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uYmxhY2t7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBNYWluIEdhbWVib2FyZCBJbnRlcmZhY2UgKi9cXG4ubWFpbi1nYW1lYm9hcmQtaW50ZXJmYWNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcblxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IHJvY2tpbmxpbmU7XFxufVxcbi5tYWluLWdhbWVib2FyZC1pbnRlcmZhY2UgPiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRza3libHVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNreWJsdWU7XFxufVxcblxcbi5tYWluLWdhbWVib2FyZC1pbnRlcmZhY2UgPiBkaXZ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiByb2NraW5saW5lO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcblxcbi8qIFN0YXJ0IFBvaW50ICovXFxuLnN0YXJ0LXBvaW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLyogQnV0dG9uIENsaWNrZWQgKi9cXG4uYnV0dG9uLWNsaWNrZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRza3libHVlICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbi8qIEVuZCBQb2ludCAqL1xcbi5lbmQtcG9pbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcblxcbi8qIEtuaWdodCBQaWVjZSAqL1xcbi5rbmlnaHQtcGllY2UtY29udGFpbmVye1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBrbmlnaHRQaWVjZSBmcm9tICcuLi9pbWFnZXMvYmxhY2sta25pZ2h0LnBuZyc7XG5cbi8vIGRpc3BsYXlNb3ZlcygpOiBEaXNwbGF5cyB0aGUgbW92ZXMgZnJvbSBzdGFydCBwb2ludCB0byBlbmQgcG9pbnRcbmV4cG9ydCBjb25zdCBkaXNwbGF5TW92ZXMgPSAoc3F1YXJlQ29vcmQpID0+e1xuICAgIGNvbnNvbGUubG9nKFwiZGlzcGxheWluZyBNb3ZlczogXCIsIHNxdWFyZUNvb3JkKTsgLy8gVGVzdGluZ1xuXG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1nYW1lYm9hcmQgPiBkaXYgPiBkaXYnKTsgXG4gICAgY29uc3Qgc3RhcnRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1wb2ludCcpO1xuICAgIGNvbnNvbGUubG9nKGBTdGFydCBQb2ludDogJHtzdGFydFBvaW50LmRhdGFzZXQueH0sICR7c3RhcnRQb2ludC5kYXRhc2V0Lnl9YCk7IC8vIFRlc3RpbmdcbiAgICBjb25zdCBlbmRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQtcG9pbnQnKTsgXG4gICAgY29uc29sZS5sb2coYEVuZCBQb2ludDogJHtlbmRQb2ludC5kYXRhc2V0Lnh9LCAke2VuZFBvaW50LmRhdGFzZXQueX1gKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKFwiXFxuXCIpOyAvLyBUZXN0aW5nXG5cbiAgICBsZXQgdGltZXIgPSAxMDA7XG5cbiAgICBzcXVhcmVDb29yZC5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGAke2NlbGwuZGF0YXNldC54fSwgJHtjZWxsLmRhdGFzZXQueX1gID09PSBzcXVhcmUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7Y2VsbC5kYXRhc2V0Lnh9LCAke2NlbGwuZGF0YXNldC55fWApOyAvLyBUZXN0aW5nXG5cbiAgICAgICAgICAgICAgICBpZiAoYCR7c3RhcnRQb2ludC5kYXRhc2V0Lnh9LCAke3N0YXJ0UG9pbnQuZGF0YXNldC55fWAgPT09IGAke2NlbGwuZGF0YXNldC54fSwgJHtjZWxsLmRhdGFzZXQueX1gKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5yZXBsYWNlQ2hpbGRyZW4oKTsgLy8gUmVtb3ZlIHRoZSBvcmlnaW5hbCBzdGFydC1wb2ludCBzbyBpdCBkb2Vzbid0IGNvbmZsaWN0IHRoZSB0cmF2YWlsaW5nIHN0YXJ0IHBvaW50LiBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzdGFydC1wb2ludCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrbmlnaHRQaWVjZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBrbmlnaHRQaWVjZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdrbmlnaHQtcGllY2UtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGtuaWdodFBpZWNlQ29udGFpbmVyLnNyYyA9IGtuaWdodFBpZWNlO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGtuaWdodFBpZWNlQ29udGFpbmVyKTsgXG4gICAgICAgICAgICAgICAgfSwgdGltZXIpO1xuXG4gICAgICAgICAgICAgICAgdGltZXIgKz0gMjUwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBrbmlnaHRQaWVjZSBmcm9tICcuLi9pbWFnZXMvYmxhY2sta25pZ2h0LnBuZyc7XG5pbXBvcnQgeyBrbmlnaHRNb3ZlcyB9IGZyb20gXCIuL2tuaWdodE1vdmVzXCI7XG5cbi8vIENyZWF0ZUdhbWVib2FyZCgpOiBDcmVhdGVzIHRoZSBtYWluIGdhbWVib2FyZC5cbmZ1bmN0aW9uIENyZWF0ZUdhbWVib2FyZCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgbWFpbkdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5HYW1lYm9hcmQuY2xhc3NMaXN0LmFkZCgnbWFpbi1nYW1lYm9hcmQnKTtcblxuICAgIC8vIGNvbnN0IG1haW5HYW1lYm9hcmRJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBtYWluR2FtZWJvYXJkSW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoJ21haW4tZ2FtZWJvYXJkLWludGVyZmFjZScpO1xuXG4gICAgY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQuY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgY29uc29sZS5sb2coXCJHYW1lYm9hcmQ6IFwiLCBib2FyZCk7IC8vIFRlc3RpbmdcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVhY2ggcm93OiBcIixib2FyZFtpXSk7IC8vIFRlc3RpbmdcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpOyBcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC55ID0gajtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIHdoaXRlIGFuZCBibGFjayBjZWxscyBmb3IgdGhlIGNoZXNzIGJvYXJkLiBcbiAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoaiAlIDIgPT09IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYmxhY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGogJSAyID09PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdibGFjaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluR2FtZWJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChtYWluR2FtZWJvYXJkSW50ZXJmYWNlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5HYW1lYm9hcmQpO1xufVxuXG4vLyBDcmVhdGVHYW1lYm9hcmRJbnRlcmZhY2UoKTogQ3JlYXRlIHRoZSBnYW1lYm9hcmQgaW50ZXJmYWNlIGFuZCBpbnRlcmZhY2UgYnV0dG9ucy4gXG5mdW5jdGlvbiBDcmVhdGVHYW1lYm9hcmRJbnRlcmZhY2UoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG1haW5HYW1lYm9hcmRJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluR2FtZWJvYXJkSW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoJ21haW4tZ2FtZWJvYXJkLWludGVyZmFjZScpO1xuXG4gICAgY29uc3Qgc3RhcnRQb2ludEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN0YXJ0UG9pbnRCdG4udGV4dENvbnRlbnQgPSAnU3RhcnQgUG9pbnQnO1xuXG4gICAgY29uc3QgZW5kUG9pbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgZW5kUG9pbnRCdG4udGV4dENvbnRlbnQgPSAnRW5kIFBvaW50JztcblxuICAgIGNvbnN0IHRyYXZhaWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0cmF2YWlsQnRuLnRleHRDb250ZW50ID0gJ1RyYXZhaWwnO1xuXG4gICAgY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbGVhckJ0bi50ZXh0Q29udGVudCA9ICdDbGVhcic7XG5cbiAgICBjb25zdCBzZWFyY2hJblByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VhcmNoSW5Qcm9ncmVzcy50ZXh0Q29udGVudCA9IFwiTm8gU2VhcmNoIEluIFByb2dlc3NcIjtcblxuICAgIG1haW5HYW1lYm9hcmRJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoc3RhcnRQb2ludEJ0bik7XG4gICAgbWFpbkdhbWVib2FyZEludGVyZmFjZS5hcHBlbmRDaGlsZChlbmRQb2ludEJ0bik7XG4gICAgbWFpbkdhbWVib2FyZEludGVyZmFjZS5hcHBlbmRDaGlsZCh0cmF2YWlsQnRuKTtcbiAgICBtYWluR2FtZWJvYXJkSW50ZXJmYWNlLmFwcGVuZENoaWxkKGNsZWFyQnRuKTtcbiAgICBtYWluR2FtZWJvYXJkSW50ZXJmYWNlLmFwcGVuZENoaWxkKHNlYXJjaEluUHJvZ3Jlc3MpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluR2FtZWJvYXJkSW50ZXJmYWNlKTtcbn1cblxuLy8gU3RhcnRQb2ludCgpOiBTdGFydCBwb2ludCBpbml0aWF0ZWQuXG5mdW5jdGlvbiBTdGFydFBvaW50KCl7XG4gICAgY29uc29sZS5sb2coXCJTdGFydCBQb2ludCBJbml0aWF0ZWRcIik7IC8vIFRlc3RpbmdcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLWdhbWVib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIGNvbnN0IHN0YXJ0UG9pbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1nYW1lYm9hcmQtaW50ZXJmYWNlID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIHN0YXJ0UG9pbnRCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNsaWNrZWQnKTsgXG4gICAgXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hvb3NlU3RhcnRQb2ludCk7XG4gICAgfSk7XG59XG5cbi8vIENob29zZVN0YXJ0UG9pbnQoKTogQ2hvb3NlIHRoZSBzdGFydCBwb2ludCBvbiB0aGUgZ2FtZWJvYXJkLlxuZnVuY3Rpb24gQ2hvb3NlU3RhcnRQb2ludChlKXtcbiAgICBjb25zb2xlLmxvZyhcIlRhcmdldDogXCIsIGUudGFyZ2V0KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnQgUG9pbnQgWDogXCIsIGUudGFyZ2V0LmRhdGFzZXQueCk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0IFBvaW50IFk6IFwiLCBlLnRhcmdldC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nXG5cbiAgICBjb25zdCBzdGFydFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTsgXG4gICAgY29uc29sZS5sb2coXCJGaXJzdCB3YXkgdG8gZXhwb3NlIHRoZSBzdGFydCBwb2ludDogXCIsIHN0YXJ0UG9pbnQpOyAvLyBUZXN0aW5nXG5cbiAgICBzdGFydFBvaW50LmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LXBvaW50Jyk7XG4gICAgY29uc3Qga25pZ2h0UGllY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBrbmlnaHRQaWVjZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdrbmlnaHQtcGllY2UtY29udGFpbmVyJyk7XG4gICAga25pZ2h0UGllY2VDb250YWluZXIuc3JjID0ga25pZ2h0UGllY2U7XG4gICAgc3RhcnRQb2ludC5hcHBlbmRDaGlsZChrbmlnaHRQaWVjZUNvbnRhaW5lcik7IFxuXG4gICAgZ2FtZWJvYXJkLnN0YXJ0UG9pbnRYID0gZS50YXJnZXQuZGF0YXNldC54O1xuICAgIGdhbWVib2FyZC5zdGFydFBvaW50WSA9IGUudGFyZ2V0LmRhdGFzZXQueTtcblxuICAgIGNvbnN0IHN0YXJ0UG9pbnRUd28gPSBlLnRhcmdldDtcbiAgICBjb25zb2xlLmxvZyhcIlNlY29uZCB3YXkgdG8gZXhwb3NlIHRoZSBzdGFydCBwb2ludDogXCIsIHN0YXJ0UG9pbnRUd28pOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coXCJcXG5cIik7IC8vIFRlc3RpbmcgXG5cbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLWdhbWVib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIC8vIFJlbW92ZSB0aGUgZXZlbnQgb25jZSB0aGUgc3RhcnQgcG9pbnQgaXMgY2hvb3Nlbi4gXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hvb3NlU3RhcnRQb2ludCk7XG4gICAgfSk7XG59XG5cbi8vIEVuZFBvaW50KCk6IEVuZCBwb2ludCBpbml0aWF0ZWQuIFxuZnVuY3Rpb24gRW5kUG9pbnQoKXtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLWdhbWVib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIGNvbnN0IGVuZFBvaW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTtcblxuICAgIGlmIChnYW1lYm9hcmQuc3RhcnRQb2ludFggIT09IG51bGwpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVuZCBQb2ludCBJbml0aWF0ZWRcIik7IFxuICAgICAgICBlbmRQb2ludEJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24tY2xpY2tlZCcpOyBcbiAgICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENob29zZUVuZFBvaW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGNob29zZSBhIHN0YXJ0IHBvaW50IGZpcnN0LlwiKTsgLy8gVGVzdGluZ1xuICAgICAgICBjb25zb2xlLmxvZyhcIlxcblwiKTsgLy8gVGVzdGluZyBcbiAgICB9XG59XG5cbi8vIENob29zZUVuZFBvaW50KCk6IENob29zZSB0aGUgZW5kIHBvaW50IG9uIHRoZSBnYW1lYm9hcmQuIFxuZnVuY3Rpb24gQ2hvb3NlRW5kUG9pbnQoZSl7XG4gICAgY29uc29sZS5sb2coXCJUYXJnZXQ6IFwiLCBlLnRhcmdldCk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZyhcIkVuZCBQb2ludCBYOiBcIiwgZS50YXJnZXQuZGF0YXNldC54KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKFwiRW5kIFBvaW50IFk6IFwiLCBlLnRhcmdldC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nXG4gICAgXG4gICAgY29uc3QgZW5kUG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnNvbGUubG9nKFwiVGhlIEVuZCBQb2ludDogXCIsIGVuZFBvaW50KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKFwiXFxuXCIpOyAvLyBUZXN0aW5nIFxuXG4gICAgZW5kUG9pbnQuY2xhc3NMaXN0LmFkZCgnZW5kLXBvaW50Jyk7XG5cbiAgICBnYW1lYm9hcmQuZW5kUG9pbnRYID0gZS50YXJnZXQuZGF0YXNldC54O1xuICAgIGdhbWVib2FyZC5lbmRQb2ludFkgPSBlLnRhcmdldC5kYXRhc2V0Lnk7XG5cbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLWdhbWVib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIC8vIFJlbW92ZSB0aGUgZXZlbnQgb25jZSB0aGUgZW5kIHBvaW50IGlzIGNob29zZW4uXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hvb3NlRW5kUG9pbnQpOyBcbiAgICB9KTtcbn1cblxuLy8gS25pZ2h0TW92ZXMoKTogQ29tbWVuY2UgbW92aW5nIHRoZSBrbmlnaHQgZnJvbSB0aGUgc3RhcnQgcG9pbnQgdG8gdGhlIGVuZCBwb2ludC5cbmZ1bmN0aW9uIEtuaWdodFRyYXZhaWxzKCl7XG4gICAgY29uc3QgdHJhdmFpbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdhbWVib2FyZC1pbnRlcmZhY2UgPiBidXR0b246bnRoLWNoaWxkKDMpJyk7XG5cbiAgICBpZiAoZ2FtZWJvYXJkLnN0YXJ0UG9pbnRYICE9PSBudWxsICYmIGdhbWVib2FyZC5lbmRQb2ludFggIT09IG51bGwpXG4gICAge1xuICAgICAgICB0cmF2YWlsQnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1jbGlja2VkJyk7IFxuICAgICAgICBrbmlnaHRNb3ZlcyhbcGFyc2VJbnQoZ2FtZWJvYXJkLnN0YXJ0UG9pbnRYKSwgcGFyc2VJbnQoZ2FtZWJvYXJkLnN0YXJ0UG9pbnRZKV0sIFtwYXJzZUludChnYW1lYm9hcmQuZW5kUG9pbnRYKSwgcGFyc2VJbnQoZ2FtZWJvYXJkLmVuZFBvaW50WSldKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGVhc2UgY2hvb3NlIGEgc3RhcnQgcG9pbnQgYW5kIGVuZCBwb2ludCBiZWZvcmUgdHJhdmFpbGluZy5cIik7IC8vIFRlc3RpbmcgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFxuXCIpOyAvLyBUZXN0aW5nIFxuICAgIH1cbn1cblxuLy8gQ2xlYXJCb2FyZCgpOiBDbGVhciB0aGUgYm9hcmQuXG5mdW5jdGlvbiBDbGVhckJvYXJkKCl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1nYW1lYm9hcmQgPiBkaXYgPiBkaXYnKTtcbiAgICBjb25zdCBtYWluR2FtZWJvYXJkSW50ZXJmYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGJ1dHRvbicpXG4gICAgZ2FtZWJvYXJkLnJlc2V0R2FtZWJvYXJkKCk7IC8vIFJlc2V0IGFsbCB0aGUga2V5IHByb3BlcnRpZXMgaW4gZ2FtZWJvYXJkLiBcblxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5yZXBsYWNlQ2hpbGRyZW4oKTsgLy8gUmVtb3ZlcyBhbGwgY2hpbGQgbm9kZXMgZnJvbSB0aGUgZ2FtZWJvYXJkIGNlbGwuIFxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LXBvaW50Jyk7IFxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2VuZC1wb2ludCcpO1xuICAgIH0pO1xuXG4gICAgbWFpbkdhbWVib2FyZEludGVyZmFjZS5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbi1jbGlja2VkJyk7IFxuICAgIH0pO1xufVxuXG4vLyBJbml0aWFsaXplRG9tQ29udGVudCgpOiBJbml0aWFsaXplIGFsbCB0aGUgZG9tIGNvbnRlbnQgZm9yIHRoZSBhcHBsaWNhdGlvblxuZnVuY3Rpb24gSW5pdGlhbGl6ZURvbUNvbnRlbnQoKXtcbiAgICBDcmVhdGVHYW1lYm9hcmRJbnRlcmZhY2UoKTtcbiAgICBDcmVhdGVHYW1lYm9hcmQoKTtcblxuICAgIGNvbnN0IHN0YXJ0UG9pbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1nYW1lYm9hcmQtaW50ZXJmYWNlID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIHN0YXJ0UG9pbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBTdGFydFBvaW50KTsgXG5cbiAgICBjb25zdCBlbmRQb2ludEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdhbWVib2FyZC1pbnRlcmZhY2UgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7XG4gICAgZW5kUG9pbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBFbmRQb2ludCk7IFxuXG4gICAgY29uc3QgdHJhdmFpbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdhbWVib2FyZC1pbnRlcmZhY2UgPiBidXR0b246bnRoLWNoaWxkKDMpJyk7XG4gICAgdHJhdmFpbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEtuaWdodFRyYXZhaWxzKTtcblxuICAgIGNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ2FtZWJvYXJkLWludGVyZmFjZSA+IGJ1dHRvbjpudGgtY2hpbGQoNCknKTtcbiAgICBjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENsZWFyQm9hcmQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbml0aWFsaXplRG9tQ29udGVudDsiLCJleHBvcnQgY29uc3QgZ2FtZWJvYXJkID0ge1xuICAgIHN0YXJ0UG9pbnRYOiBudWxsLFxuICAgIHN0YXJ0UG9pbnRZOiBudWxsLFxuICAgIGVuZFBvaW50WDogbnVsbCxcbiAgICBlbmRQb2ludFk6IG51bGwsXG4gICAgY3JlYXRlR2FtZWJvYXJkKCl7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gWy4uLkFycmF5KDgpXS5tYXAoKCkgPT4gQXJyYXkoOCkuZmlsbChcIlwiKSk7XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9LFxuXG4gICAgcmVzZXRHYW1lYm9hcmQoKXtcbiAgICAgICAgdGhpcy5zdGFydFBvaW50WCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhcnRQb2ludFkgPSBudWxsO1xuICAgICAgICB0aGlzLmVuZFBvaW50WCA9IG51bGw7XG4gICAgICAgIHRoaXMuZW5kUG9pbnRZID0gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHsgZGlzcGxheU1vdmVzIH0gZnJvbSBcIi4vZGlzcGxheU1vdmVzXCI7XG5cbmNvbnN0IHNxdWFyZVJlZ2lzdHJ5ID0gbmV3IE1hcCgpO1xuXG5jb25zdCBjaGVzc1NxdWFyZSA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3QgeFBvc2l0aW9uID0geDtcbiAgICBjb25zdCB5UG9zaXRpb24gPSB5O1xuICAgIGxldCBwcmVkZWNlc3NvcjsgXG5cbiAgICBjb25zb2xlLmxvZyhcIkNoZXNzIFNxdWFyZSBJbml0aWF0ZWQuLi5cIik7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coXCJYIFBvc2l0aW9uOiBcIiwgeFBvc2l0aW9uKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZyhcIlkgUG9zaXRpb246IFwiLCB5UG9zaXRpb24pOyAvLyBUZXN0aW5nIFxuXG4gICAgLy8gQWxsIHBvc3NpYmxlIGRlZmF1bHQga25pZ2h0IG1vdmVzOlxuICAgIGNvbnN0IEtOSUdIVF9NT1ZFUyA9IFtcbiAgICAgICAgWzEsIDJdLCBbMSwgLTJdLFxuICAgICAgICBbMiwgMV0sIFsyLCAtMV0sXG4gICAgICAgIFstMSwgMl0sIFstMSwgLTJdLFxuICAgICAgICBbLTIsIDFdLCBbLTIsIC0xXVxuICAgIF1cblxuICAgIGNvbnN0IGdldFByZWRlY2Vzc29yID0gKCkgPT4gcHJlZGVjZXNzb3I7XG4gICAgY29uc3Qgc2V0UHJlZGVjZXNzb3IgPSAobmV3UHJlZGVjZXNzb3IpID0+IHtcbiAgICAgICAgcHJlZGVjZXNzb3IgPSBwcmVkZWNlc3NvciB8fCBuZXdQcmVkZWNlc3NvcjtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0gKCkgPT4gYCR7eH0sICR7eX1gO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGFsbCBwb3NzaWJsZSBrbmlnaHQgbW92ZXM6XG4gICAgY29uc3QgcG9zc2libGVLbmlnaHRNb3ZlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIEtOSUdIVF9NT1ZFU1xuICAgICAgICAgICAgLm1hcCgob2Zmc2V0KSA9PiBuZXdTcXVhcmVGcm9tKG9mZnNldFswXSwgb2Zmc2V0WzFdKSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHNxdWFyZSkgPT4gc3F1YXJlICE9PSB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIC8vIENhbHVsYXRlIG5ldyBzZXQgb2Ygc3F1YXJlIGNvb3JkaW5hdGVzIGFnYWluc3Qgb2Zmc2V0c1xuICAgIGNvbnN0IG5ld1NxdWFyZUZyb20gPSAoeE9mZnNldCwgeU9mZnNldCkgPT4ge1xuICAgICAgICBjb25zdCBbbmV3WCwgbmV3WV0gPSBbeFBvc2l0aW9uICsgeE9mZnNldCwgeVBvc2l0aW9uICsgeU9mZnNldF07XG4gICAgICAgIGlmIChuZXdYID49IDAgJiYgbmV3WCA8PSA3ICYmIG5ld1kgPj0gMCAmJiBuZXdZIDw9IDcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVzc1NxdWFyZShuZXdYLCBuZXdZKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdG9yZSBkYXRhIGluIGFuIG9iamVjdC5cbiAgICBpZiAoc3F1YXJlUmVnaXN0cnkuaGFzKG5hbWUoKSkpXG4gICAge1xuICAgICAgICByZXR1cm4gc3F1YXJlUmVnaXN0cnkuZ2V0KG5hbWUoKSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IHsgbmFtZSwgZ2V0UHJlZGVjZXNzb3IsIHNldFByZWRlY2Vzc29yLCBwb3NzaWJsZUtuaWdodE1vdmVzIH1cbiAgICAgICAgc3F1YXJlUmVnaXN0cnkuc2V0KG5hbWUoKSwgbmV3U3F1YXJlKTsgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGRhdGEgbmFtZTogXCIsIG5ld1NxdWFyZS5uYW1lKCkpOyAvLyBUZXN0aW5nXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIG5ldyBkYXRhIGZvciB0aGUgc3F1YXJlIHJlZ2lzdHJ5OiBcIiwgbmV3U3F1YXJlKSAvLyBUZXN0aW5nXG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFxuXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICByZXR1cm4gbmV3U3F1YXJlOyBcbiAgICB9XG59XG5cbi8vIGtuaWdodE1vdmVzKCk6IFdpbGwgbW92ZSB0aGUga25pZ2h0IHRvIHRoZSBlbmQgcG9pbnQuIFxuZXhwb3J0IGNvbnN0IGtuaWdodE1vdmVzID0gKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSA9PntcbiAgICBzcXVhcmVSZWdpc3RyeS5jbGVhcigpO1xuXG4gICAgY29uc29sZS5sb2coXCJLbmlnaHQgTW92ZXMgSW5pdGlhdGVkLi4uXCIpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coXCJTdGFydCBQb2ludDogXCIsIHN0YXJ0UG9pbnQpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coXCJFbmQgUG9pbnQ6IFwiLCBlbmRQb2ludCk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZyhcIlxcblwiKTsgLy8gVGVzdGluZyBcblxuICAgIGNvbnN0IGtuaWdodFN0YXJ0UG9pbnQgPSBjaGVzc1NxdWFyZSguLi5zdGFydFBvaW50KTtcbiAgICBjb25zdCBrbmlnaHRFbmRQb2ludCA9IGNoZXNzU3F1YXJlKC4uLmVuZFBvaW50KTsgXG5cbiAgICBjb25zdCBxdWV1ZSA9IFtrbmlnaHRTdGFydFBvaW50XTsgXG4gICAgY29uc29sZS5sb2coXCJRdWV1ZTogXCIsIHF1ZXVlKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKFwiXFxuXCIpOyAvLyBUZXN0aW5nIFxuXG4gICAgd2hpbGUoIXF1ZXVlLmluY2x1ZGVzKGtuaWdodEVuZFBvaW50KSlcbiAgICB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAvLyBUZXN0aW5nOiBUZXN0aW5nIFRoZSBRdWV1ZTpcbiAgICAgICAgcXVldWUuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIGluc2lkZSBxdWV1ZTogXCIsIGRhdGEubmFtZSgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBTcXVhcmU6IFwiLCBjdXJyZW50U3F1YXJlLm5hbWUoKSk7IC8vIFRlc3RpbmdcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVucXVldWVMaXN0ID0gY3VycmVudFNxdWFyZS5wb3NzaWJsZUtuaWdodE1vdmVzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIE5ldyBFbnF1ZXVlIExpc3Q6IFwiLCBlbnF1ZXVlTGlzdCk7ICAvLyBUZXN0aW5nIFxuICAgICAgICBlbnF1ZXVlTGlzdC5mb3JFYWNoKChzcXVhcmUpID0+IHNxdWFyZS5zZXRQcmVkZWNlc3NvcihjdXJyZW50U3F1YXJlKSk7XG4gICAgICAgIHF1ZXVlLnB1c2goLi4uZW5xdWV1ZUxpc3QpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIlxcblwiKTsgLy8gVGVzdGluZyBcblxuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKSAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coXCJEYXRhIGluc2lkZSBpbiB0aGUgcXVldWUgYWZ0ZXI6XCIpO1xuICAgIHF1ZXVlLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIGluc2lkZTogXCIsIGRhdGEubmFtZSgpKTsgLy8gVGVzdGluZ1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKFwiXFxuXCIpOyAvLyBUZXN0aW5nXG5cbiAgICBjb25zdCBwYXRoID0gW2tuaWdodEVuZFBvaW50XTtcbiAgICBjb25zb2xlLmxvZyhcIlBhdGg6IFwiLCBwYXRoKTsgXG4gICAgcGF0aC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW5kIFBvaW50OiBcIiwgZGF0YS5uYW1lKCkpOyAvLyBUZXN0aW5nXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJcXG5cIik7IC8vIFRlc3RpbmdcblxuICAgIGNvbnNvbGUubG9nKFwiRmluZGluZyB0aGUgcHJlZGVjZXNzb3IgcGF0aHM6IFwiKTsgLy8gVGVzdGluZ1xuICAgIHdoaWxlICghcGF0aC5pbmNsdWRlcyhrbmlnaHRTdGFydFBvaW50KSlcbiAgICB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzU3F1YXJlID0gcGF0aFswXS5nZXRQcmVkZWNlc3NvcigpO1xuICAgICAgICBwYXRoLnVuc2hpZnQocHJldmlvdXNTcXVhcmUpOyBcbiAgICAgICAgY29uc29sZS5sb2cocHJldmlvdXNTcXVhcmUubmFtZSgpKTsgLy8gVGVzdGluZ1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIlxcblwiKTsgLy8gVGVzdGluZyBcblxuICAgIGNvbnNvbGUubG9nKFwiRGlzcGxheWluZyB0aGUgc3F1YXJlIHBhdGhzXCIpOyAvLyBUZXN0aW5nIFxuICAgIGxldCBzcXVhcmVDb29yZCA9IFtdO1xuICAgIHBhdGguZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIFNxdWFyZTogXCIsIHNxdWFyZS5uYW1lKCkpO1xuICAgICAgICBzcXVhcmVDb29yZC5wdXNoKHNxdWFyZS5uYW1lKCkpO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiXFxuXCIpOyAvLyBUZXN0aW5nIFxuXG4gICAgZGlzcGxheU1vdmVzKHNxdWFyZUNvb3JkKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEluaXRpYWxpemVEb21Db250ZW50IGZyb20gJy4vbW9kdWxlcy9kb21Db250ZW50JztcblxuSW5pdGlhbGl6ZURvbUNvbnRlbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==