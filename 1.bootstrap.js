(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../pkg/wasm_game_of_life.js":
/*!***********************************!*\
  !*** ../pkg/wasm_game_of_life.js ***!
  \***********************************/
/*! exports provided: Cell, Universe, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_game_of_life_bg.wasm */ \"../pkg/wasm_game_of_life_bg.wasm\");\n/* harmony import */ var _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_game_of_life_bg.js */ \"../pkg/wasm_game_of_life_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_59cb74e423758ede\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_59cb74e423758ede\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_558ba5917b466edd\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_stack_558ba5917b466edd\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_4bb6c2a97407129a\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_error_4bb6c2a97407129a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life.js?");

/***/ }),

/***/ "../pkg/wasm_game_of_life_bg.js":
/*!**************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.js ***!
  \**************************************/
/*! exports provided: Cell, Universe, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_59cb74e423758ede\", function() { return __wbg_new_59cb74e423758ede; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_558ba5917b466edd\", function() { return __wbg_stack_558ba5917b466edd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_4bb6c2a97407129a\", function() { return __wbg_error_4bb6c2a97407129a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_game_of_life_bg.wasm */ \"../pkg/wasm_game_of_life_bg.wasm\");\n\nconst heap = new Array(32).fill(undefined);\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) {\n  return heap[idx];\n}\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n  if (idx < 36) return;\n  heap[idx] = heap_next;\n  heap_next = idx;\n}\n\nfunction takeObject(idx) {\n  const ret = getObject(idx);\n  dropObject(idx);\n  return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\nlet cachedTextDecoder = new lTextDecoder('utf-8', {\n  ignoreBOM: true,\n  fatal: true\n});\ncachedTextDecoder.decode();\nlet cachegetUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n    cachegetUint8Memory0 = new Uint8Array(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n  }\n\n  return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n  if (heap_next === heap.length) heap.push(heap.length + 1);\n  const idx = heap_next;\n  heap_next = heap[idx];\n  heap[idx] = obj;\n  return idx;\n}\n\nlet WASM_VECTOR_LEN = 0;\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\nlet cachedTextEncoder = new lTextEncoder('utf-8');\nconst encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {\n  return cachedTextEncoder.encodeInto(arg, view);\n} : function (arg, view) {\n  const buf = cachedTextEncoder.encode(arg);\n  view.set(buf);\n  return {\n    read: arg.length,\n    written: buf.length\n  };\n};\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n  if (realloc === undefined) {\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = malloc(buf.length);\n    getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n  }\n\n  let len = arg.length;\n  let ptr = malloc(len);\n  const mem = getUint8Memory0();\n  let offset = 0;\n\n  for (; offset < len; offset++) {\n    const code = arg.charCodeAt(offset);\n    if (code > 0x7F) break;\n    mem[ptr + offset] = code;\n  }\n\n  if (offset !== len) {\n    if (offset !== 0) {\n      arg = arg.slice(offset);\n    }\n\n    ptr = realloc(ptr, len, len = offset + arg.length * 3);\n    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n    const ret = encodeString(arg, view);\n    offset += ret.written;\n  }\n\n  WASM_VECTOR_LEN = offset;\n  return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n    cachegetInt32Memory0 = new Int32Array(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n  }\n\n  return cachegetInt32Memory0;\n}\n/**\n*/\n\n\nconst Cell = Object.freeze({\n  Dead: 0,\n  Alive: 1\n});\n/**\n*/\n\nclass Universe {\n  static __wrap(ptr) {\n    const obj = Object.create(Universe.prototype);\n    obj.ptr = ptr;\n    return obj;\n  }\n\n  free() {\n    const ptr = this.ptr;\n    this.ptr = 0;\n\n    _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n  }\n  /**\n  */\n\n\n  tick() {\n    _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n  }\n  /**\n  * @returns {Universe}\n  */\n\n\n  static new() {\n    var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"]();\n    return Universe.__wrap(ret);\n  }\n  /**\n  * @returns {number}\n  */\n\n\n  width() {\n    var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_width\"](this.ptr);\n    return ret >>> 0;\n  }\n  /**\n  * Set the width of the universe.\n  *\n  * Resets all cells to the dead state.\n  * @param {number} width\n  */\n\n\n  set_width(width) {\n    _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_width\"](this.ptr, width);\n  }\n  /**\n  * @returns {number}\n  */\n\n\n  height() {\n    var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_height\"](this.ptr);\n    return ret >>> 0;\n  }\n  /**\n  * Set the height of the universe.\n  *\n  * Resets all cells to the dead state.\n  * @param {number} height\n  */\n\n\n  set_height(height) {\n    _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_height\"](this.ptr, height);\n  }\n  /**\n  * @returns {number}\n  */\n\n\n  cells() {\n    var ret = _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_cells\"](this.ptr);\n    return ret;\n  }\n  /**\n  * @param {number} row\n  * @param {number} column\n  */\n\n\n  toggle_cell(row, column) {\n    _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_toggle_cell\"](this.ptr, row, column);\n  }\n\n}\nconst __wbg_new_59cb74e423758ede = function () {\n  var ret = new Error();\n  return addHeapObject(ret);\n};\nconst __wbg_stack_558ba5917b466edd = function (arg0, arg1) {\n  var ret = getObject(arg1).stack;\n  var ptr0 = passStringToWasm0(ret, _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n  var len0 = WASM_VECTOR_LEN;\n  getInt32Memory0()[arg0 / 4 + 1] = len0;\n  getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\nconst __wbg_error_4bb6c2a97407129a = function (arg0, arg1) {\n  try {\n    console.error(getStringFromWasm0(arg0, arg1));\n  } finally {\n    _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](arg0, arg1);\n  }\n};\nconst __wbindgen_object_drop_ref = function (arg0) {\n  takeObject(arg0);\n};\nconst __wbindgen_throw = function (arg0, arg1) {\n  throw new Error(getStringFromWasm0(arg0, arg1));\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life_bg.js?");

/***/ }),

/***/ "../pkg/wasm_game_of_life_bg.wasm":
/*!****************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, __wbg_universe_free, universe_tick, universe_new, universe_width, universe_set_width, universe_height, universe_set_height, universe_cells, universe_toggle_cell, __wbindgen_free, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_game_of_life_bg.js */ \"../pkg/wasm_game_of_life_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life_bg.wasm?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html, body {\\n    background-color: #222233 !important;\\n    line-height: 0;\\n  }\\n  \\n  p {\\n    align-content: center;\\n    color: #fff;\\n    opacity: 0.4;\\n    padding-top: 15px !important;\\n    text-align: center;\\n  }\\n  \\n  p > span {\\n    opacity: 0.4;\\n    text-align: center;\\n  }\\n  \\n  .title {\\n    padding-top: 20px !important;\\n  }\\n  \\n  .controls {\\n    text-align: center;\\n    margin: 20px;\\n  }\\n  \\n  .game-grid {\\n    text-align: center;\\n  }\\n  \\n  .row {\\n    height: 5px;\\n  }\\n  \\n  .cell {\\n    background-color: #e9e9eb;\\n    display: inline-block;\\n    width: 5px;\\n    height: 6px;\\n    cursor: pointer;\\n    border: solid 1px rgba(0, 0, 0, 0.6);\\n  }\\n  \\n  .cell:hover {\\n    background-color: #bcbcc1;\\n  }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm-game-of-life */ \"../pkg/wasm_game_of_life.js\");\n/* harmony import */ var wasm_game_of_life_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wasm-game-of-life/wasm_game_of_life_bg.wasm */ \"../pkg/wasm_game_of_life_bg.wasm\");\n/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Grid */ \"./src/components/Grid.tsx\");\n/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Game */ \"./src/components/Game.tsx\");\n\n// import './App.css'\n\n\n\n // var memory = new WebAssembly.Memory({initial:10, maximum:100});\n\nvar CELL_SIZE = 5; // px\n\nvar GRID_COLOR = \"#CCCCCC\";\nvar DEAD_COLOR = \"#FFFFFF\";\nvar ALIVE_COLOR = \"#000000\";\nvar universe = wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"][\"new\"](); // Construct the universe, and get its width and height.\n\nvar width = universe.width();\nvar height = universe.height();\n\nfor (var i = 0; i < 200; ++i) {\n  universe.tick();\n} // universe.tick();\n// universe.tick();\n// universe.tick();\n\n\nvar dict = {\n  1: \"black\",\n  2: \"white\"\n};\n\nvar Cell1 = function Cell1(_ref) {\n  var x = _ref.x,\n      y = _ref.y,\n      z = _ref.z;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Cell\",\n    style: {\n      left: \"\".concat(CELL_SIZE * x + 1, \"px\"),\n      top: \"\".concat(CELL_SIZE * y + 1, \"px\"),\n      width: \"\".concat(CELL_SIZE - 1, \"px\"),\n      height: \"\".concat(CELL_SIZE - 1, \"px\"),\n      backgroundColor: dict[z]\n    }\n  });\n};\n\nvar Board = function Board() {\n  var cellsPtr = universe.cells();\n  var cells = Array.from(new Uint8Array(wasm_game_of_life_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_2__[\"memory\"].buffer, cellsPtr, width * height)); // const cells = [1,2,3,4,5,6,7];\n\n  var indents = [];\n\n  for (var i = 0; i < width; i++) {\n    for (var j = 0; j < height; ++j) {\n      indents.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cell1, {\n        x: i,\n        y: j,\n        z: cells[i * width + j]\n      }));\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Board\"\n  }, indents);\n};\n\nfunction update() {\n  universe.tick();\n  requestAnimationFrame(update);\n}\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Game__WEBPACK_IMPORTED_MODULE_4__[\"Game\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/components/Controls.tsx":
/*!*************************************!*\
  !*** ./src/components/Controls.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\nvar Controls = function Controls(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"controls\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    content: \"Next\",\n    icon: \"right arrow\",\n    labelPosition: \"right\",\n    onClick: props.next\n  }), props.playing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    content: \"Stop\",\n    icon: \"stop\",\n    labelPosition: \"right\",\n    onClick: props.stop\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    content: \"Play\",\n    icon: \"play\",\n    labelPosition: \"right\",\n    onClick: props.play\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controls);\n\n//# sourceURL=webpack:///./src/components/Controls.tsx?");

/***/ }),

/***/ "./src/components/Game.tsx":
/*!*********************************!*\
  !*** ./src/components/Game.tsx ***!
  \*********************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm-game-of-life */ \"../pkg/wasm_game_of_life.js\");\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ \"./src/components/Grid.tsx\");\n/* harmony import */ var wasm_game_of_life_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wasm-game-of-life/wasm_game_of_life_bg.wasm */ \"../pkg/wasm_game_of_life_bg.wasm\");\n/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controls */ \"./src/components/Controls.tsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n/* this is a wrapper class to interact with wasm */\n\nvar universe = wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"][\"new\"](); // Construct the universe, and get its width and height.\n\nvar width = universe.width();\nvar height = universe.height();\n\nvar changeArrayValue = function changeArrayValue(arr, i, val) {\n  return [].concat(_toConsumableArray(arr.slice(0, i)), [val], _toConsumableArray(arr.slice(i + 1)));\n};\n\nvar createWorld = function createWorld() {\n  return Array(width).fill(0).map(function () {\n    return Array(height).fill(false);\n  });\n};\n\nvar getWorld = function getWorld(world) {\n  var cellsPtr = universe.cells();\n  var cells = Array.from(new Uint8Array(wasm_game_of_life_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_3__[\"memory\"].buffer, cellsPtr, width * height));\n  return world.map(function (row, y) {\n    return row.map(function (val, x) {\n      return cells[x * width + y] != 0;\n    });\n  });\n};\n\nvar Game = /*#__PURE__*/function (_React$Component) {\n  _inherits(Game, _React$Component);\n\n  var _super = _createSuper(Game);\n\n  function Game() {\n    var _this;\n\n    _classCallCheck(this, Game);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      world: getWorld(createWorld()),\n      generation: 0,\n      playing: false,\n      interval: setInterval(function () {}, 100)\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onChange\", function (x, y) {\n      universe.toggle_cell(x, y);\n      var val = _this.state.world[y][x];\n      var row = changeArrayValue(_this.state.world[y], x, !val);\n      var newWorld = changeArrayValue(_this.state.world, y, row);\n\n      _this.setState({\n        world: newWorld\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onNext\", function () {\n      universe.tick();\n\n      _this.setState({\n        world: getWorld(_this.state.world),\n        generation: _this.state.generation + 1\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onPlay\", function () {\n      _this.setState({\n        playing: true\n      });\n\n      _this.state.interval = setInterval(function () {\n        return _this.onNext();\n      }, 100);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onStop\", function () {\n      _this.setState({\n        playing: false\n      });\n\n      clearInterval(_this.state.interval);\n    });\n\n    return _this;\n  }\n\n  _createClass(Game, [{\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          world = _this$state.world,\n          playing = _this$state.playing;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        world: world,\n        onChange: this.onChange\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Controls__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        next: this.onNext,\n        play: this.onPlay,\n        stop: this.onStop,\n        playing: playing\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Generation: \", this.state.generation));\n    }\n  }]);\n\n  return Game;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n//# sourceURL=webpack:///./src/components/Game.tsx?");

/***/ }),

/***/ "./src/components/Grid.tsx":
/*!*********************************!*\
  !*** ./src/components/Grid.tsx ***!
  \*********************************/
/*! exports provided: Grid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar Grid = /*#__PURE__*/function (_React$Component) {\n  _inherits(Grid, _React$Component);\n\n  var _super = _createSuper(Grid);\n\n  function Grid() {\n    var _this;\n\n    _classCallCheck(this, Grid);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"toggleCell\", function (x, y) {\n      _this.props.onChange(x, y);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"renderCell\", function (alive, x, y) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: x,\n        className: \"cell\",\n        onMouseDown: function onMouseDown() {\n          return _this.toggleCell(x, y);\n        },\n        style: {\n          backgroundColor: alive ? '#424151' : \"\"\n        }\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"renderRow\", function (row, y) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\",\n        key: y\n      }, row.map(function (alive, x) {\n        return _this.renderCell(alive, x, y);\n      }));\n    });\n\n    return _this;\n  }\n\n  _createClass(Grid, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"game-grid\"\n      }, this.props.world.map(function (row, y) {\n        return _this2.renderRow(row, y);\n      }));\n    }\n  }]);\n\n  return Grid;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack:///./src/components/Grid.tsx?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n\n // import 'bootstrap/dist/css/bootstrap.min.css';\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ })

}]);