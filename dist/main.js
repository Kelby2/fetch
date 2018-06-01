/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DomNodeCollection.js":
/*!**********************************!*\
  !*** ./src/DomNodeCollection.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar DOMNodeCollection = function () {\n  function DOMNodeCollection(nodeArray) {\n    _classCallCheck(this, DOMNodeCollection);\n\n    this.nodeArray = nodeArray;\n  }\n\n  _createClass(DOMNodeCollection, [{\n    key: 'at',\n    value: function at(index) {\n      return this.nodeArray[index];\n    }\n  }, {\n    key: 'html',\n    value: function html(text) {\n      if (typeof text === 'string') {\n        this._each(function (node) {\n          node.innerHTML = text;\n        });\n      } else {\n        return this.nodeArray[0].innerHTML;\n      }\n    }\n  }, {\n    key: 'empty',\n    value: function empty() {\n      this.html('');\n    }\n  }, {\n    key: 'first',\n    value: function first() {\n      var firstNode = this.nodeArray[0];\n      return new DOMNodeCollection([firstNode]);\n    }\n  }, {\n    key: 'last',\n    value: function last() {\n      var lastNode = this.nodeArray[this.nodeArray.length - 1];\n      return new DOMNodeCollection([lastNode]);\n    }\n  }, {\n    key: 'prepend',\n    value: function prepend(newElement) {\n      this._each(function (node) {\n        node.innerHTML = newElement + node.innerHTML;\n      });\n      return this;\n    }\n  }, {\n    key: 'append',\n    value: function append(newElement) {\n      this._each(function (node) {\n        node.innerHTML += newElement;\n      });\n      return this;\n    }\n  }, {\n    key: 'addClass',\n    value: function addClass(className) {\n      this._each(function (node) {\n        return node.classList.add(className);\n      });\n      return this;\n    }\n  }, {\n    key: 'removeClass',\n    value: function removeClass(className) {\n      this._each(function (node) {\n        return node.classList.remove(className);\n      });\n      return this;\n    }\n  }, {\n    key: 'toggleClass',\n    value: function toggleClass(className) {\n      this._each(function (node) {\n        return node.classList.toggle(className);\n      });\n      return this;\n    }\n  }, {\n    key: 'find',\n    value: function find(selector) {\n      var foundNodes = [];\n      this._each(function (node) {\n        return foundNodes.push.apply(foundNodes, _toConsumableArray(node.querySelectorAll(selector)));\n      });\n      debugger;\n      return new DOMNodeCollection(foundNodes);\n    }\n  }, {\n    key: 'remove',\n    value: function remove() {\n      this._each(function (node) {\n        return node.remove();\n      });\n      return this;\n    }\n  }, {\n    key: 'children',\n    value: function children() {\n      var allChildrenNodes = [];\n      this._each(function (node) {\n        var nodeChildren = Array.from(node.children);\n        allChildrenNodes.concat(nodeChildren);\n      });\n      return new DOMNodeCollection(allChildrenNodes);\n    }\n  }, {\n    key: 'parent',\n    value: function parent() {\n      var parentNodes = [];\n      this._each(function (node) {\n        var nodeParent = node.parentElement;\n        //should only include each parent once\n        if (!nodeParent.visited) {\n          parentNodes.push(nodeParent);\n        }\n        nodeParent.visited = true;\n      });\n\n      //changes visited back to false for future calls\n      parentNodes.forEach(function (node) {\n        node.visited = false;\n      });\n      return new DOMNodeCollection(parentNodes);\n    }\n  }, {\n    key: 'on',\n    value: function on(event, callback) {\n      var eventKey = 'cs-' + event;\n      this._each(function (node) {\n        node.addEventListener(event, callback);\n        if (!node[eventKey]) {\n          node[eventKey] = [];\n        }\n        //saves event/callback for removal purposes\n        node[eventKey].push(callback);\n      });\n      return this;\n    }\n  }, {\n    key: 'off',\n    value: function off(event, callback) {\n      var eventKey = 'cs-' + event;\n      this._each(function (node) {\n        if (callback) {\n          //removes specific callback handler if provided\n          node.removeEventListener(event, callback);\n        } else {\n          //removes all listeners attached to the event\n          node[eventKey].forEach(function (cb) {\n            node.removeEventListener(event, cb);\n          });\n          node[eventKey] = [];\n        }\n      });\n      return this;\n    }\n  }, {\n    key: '_each',\n    value: function _each(callback) {\n      this.nodeArray.forEach(callback);\n    }\n  }]);\n\n  return DOMNodeCollection;\n}();\n\nexports.default = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/DomNodeCollection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _DomNodeCollection = __webpack_require__(/*! ./DomNodeCollection */ \"./src/DomNodeCollection.js\");\n\nvar _DomNodeCollection2 = _interopRequireDefault(_DomNodeCollection);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar fxArray = [];\n\nfunction $f(selector) {\n  var nodeArray = void 0;\n  switch (typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) {\n    case 'string':\n      var nodeList = document.querySelectorAll(selector);\n      nodeArray = Array.from(nodeList);\n      break;\n    case 'function':\n      fxArray.push(selector);\n      break;\n    case HTMLElement:\n      nodeArray = Array.from(selector);\n      break;\n  }\n\n  return new _DomNodeCollection2.default(nodeArray);\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  fxArray.forEach(function (fx) {\n    return fx();\n  });\n});\n\n$f.extend = function () {\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return Object.assign.apply(Object, [{}].concat(args));\n};\n\n$f.ajax = function (options) {\n  return new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n    var defaults = {\n      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',\n      method: \"get\",\n      url: \"\",\n      success: function success() {},\n      error: function error() {},\n      data: {}\n    };\n    options = $f.extend(defaults, options);\n    options.method = options.method.toUpperCase();\n    if (options.method === 'GET') {\n      options.url += '?' + _createQueryString(options.data);\n    }\n\n    xhr.open(options.method, options.url, true);\n    xhr.onload = function () {\n      if (xhr.status >= 200 && xhr.status < 300) {\n        resolve(JSON.parse(xhr.response));\n      } else {\n        reject(JSON.parse(xhr.response));\n      }\n    };\n\n    xhr.send(JSON.stringify(options.data));\n  });\n};\n\nvar _createQueryString = function _createQueryString(obj) {\n  var queryParams = [];\n  for (var keys in obj) {\n    var param = keys + '=' + obj[keys];\n    queryParams.push(param);\n  }\n  return queryParams.join('&');\n};\n\nwindow.$f = $f;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });