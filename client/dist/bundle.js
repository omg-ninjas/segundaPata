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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/hc033/Desktop/segundaPata/client/src/index.js: Unexpected token, expected \\\";\\\" (5:11)\\n\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[36mconst\\u001b[39m \\u001b[33mIndex\\u001b[39m \\u001b[33m=\\u001b[39m () \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 5 | \\u001b[39m  render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m           \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m    (\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m \\u001b[33mHello\\u001b[39m \\u001b[33mReact\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at _class.raise (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:3938:15)\\n    at _class.unexpected (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:5247:16)\\n    at _class.semicolon (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:5231:40)\\n    at _class.parseExpressionStatement (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:7664:10)\\n    at _class.parseStatementContent (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:7263:19)\\n    at _class.parseStatement (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:7144:17)\\n    at _class.parseBlockOrModuleBlockBody (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:7695:23)\\n    at _class.parseBlockBody (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:7682:10)\\n    at _class.parseBlock (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:7671:10)\\n    at _class.parseFunctionBody (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:6924:24)\\n    at _class.parseArrowExpression (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:6876:10)\\n    at _class.parseParenAndDistinguishExpression (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:6492:12)\\n    at _class.parseExprAtom (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:6283:21)\\n    at _class.parseExprAtom (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:3634:52)\\n    at _class.parseExprSubscripts (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:5923:21)\\n    at _class.parseMaybeUnary (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:5902:21)\\n    at _class.parseExprOps (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:5811:21)\\n    at _class.parseMaybeConditional (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:5783:21)\\n    at _class.parseMaybeAssign (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:5730:21)\\n    at _class.parseVar (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:7764:26)\\n    at _class.parseVarStatement (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:7594:10)\\n    at _class.parseStatementContent (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:7194:21)\\n    at _class.parseStatement (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:7144:17)\\n    at _class.parseBlockOrModuleBlockBody (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:7695:23)\\n    at _class.parseBlockBody (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:7682:10)\\n    at _class.parseTopLevel (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:7109:10)\\n    at _class.parse (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:8495:17)\\n    at parse (/home/hc033/Desktop/segundaPata/node_modules/@babel/parser/lib/index.js:10448:38)\\n    at parser (/home/hc033/Desktop/segundaPata/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/home/hc033/Desktop/segundaPata/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\");\n\n//# sourceURL=webpack:///./client/src/index.js?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./client/src/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./client/src/index.js */\"./client/src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./client/src/index.js?");

/***/ })

/******/ });