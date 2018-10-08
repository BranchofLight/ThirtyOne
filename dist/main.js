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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/deck-of-cards/lib/animationFrames.js":
/*!***********************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/animationFrames.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nvar ticking\nvar animations = []\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (delay, duration) {\n  var now = Date.now()\n\n  // calculate animation start/end times\n  var start = now + delay\n  var end = start + duration\n\n  var animation = {\n    start: start,\n    end: end\n  }\n\n  // add animation\n  animations.push(animation)\n\n  if (!ticking) {\n    // start ticking\n    ticking = true\n    requestAnimationFrame(tick)\n  }\n  var self = {\n    start: function (cb) {\n      // add start callback (just one)\n      animation.startcb = cb\n      return self\n    },\n    progress: function (cb) {\n      // add progress callback (just one)\n      animation.progresscb = cb\n      return self\n    },\n    end: function (cb) {\n      // add end callback (just one)\n      animation.endcb = cb\n      return self\n    }\n  }\n  return self\n});\n\nfunction tick () {\n  var now = Date.now()\n\n  if (!animations.length) {\n    // stop ticking\n    ticking = false\n    return\n  }\n\n  for (var i = 0, animation; i < animations.length; i++) {\n    animation = animations[i]\n    if (now < animation.start) {\n      // animation not yet started..\n      continue\n    }\n    if (!animation.started) {\n      // animation starts\n      animation.started = true\n      animation.startcb && animation.startcb()\n    }\n    // animation progress\n    var t = (now - animation.start) / (animation.end - animation.start)\n    animation.progresscb && animation.progresscb(t < 1 ? t : 1)\n    if (now > animation.end) {\n      // animation ended\n      animation.endcb && animation.endcb()\n      animations.splice(i--, 1)\n      continue\n    }\n  }\n  requestAnimationFrame(tick)\n}\n\n// fallback\nwindow.requestAnimationFrame || (window.requestAnimationFrame = function (cb) {\n  setTimeout(cb, 0)\n})\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/animationFrames.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/card.js":
/*!************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/card.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deck */ \"./node_modules/deck-of-cards/lib/deck.js\");\n/* harmony import */ var _animationFrames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationFrames */ \"./node_modules/deck-of-cards/lib/animationFrames.js\");\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElement */ \"./node_modules/deck-of-cards/lib/createElement.js\");\n/* harmony import */ var _ease__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ease */ \"./node_modules/deck-of-cards/lib/ease.js\");\n/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translate */ \"./node_modules/deck-of-cards/lib/translate.js\");\n/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prefix */ \"./node_modules/deck-of-cards/lib/prefix.js\");\n\n\n\n\n\n\n\n\n\nvar maxZ = 52\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (i) {\n  var transform = Object(_prefix__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('transform')\n\n  // calculate rank/suit, etc..\n  var rank = i % 13 + 1\n  var suit = i / 13 | 0\n  var z = (52 - i) / 4\n\n  // create elements\n  var $el = Object(_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div')\n  var $face = Object(_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div')\n  var $back = Object(_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div')\n\n  // states\n  var isDraggable = false\n  var isFlippable = false\n\n  // self = card\n  var self = {i, rank, suit, pos: i, $el, mount, unmount, setSide}\n\n  var modules = _deck__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modules\n  var module\n\n  // add classes\n  $face.classList.add('face')\n  $back.classList.add('back')\n\n  // add default transform\n  $el.style[transform] = Object(_translate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(-z + 'px', -z + 'px')\n\n  // add default values\n  self.x = -z\n  self.y = -z\n  self.z = z\n  self.rot = 0\n\n  // set default side to back\n  self.setSide('back')\n\n  // add drag/click listeners\n  addListener($el, 'mousedown', onMousedown)\n  addListener($el, 'touchstart', onMousedown)\n\n  // load modules\n  for (module in modules) {\n    addModule(modules[module])\n  }\n\n  self.animateTo = function (params) {\n    var {delay, duration, x = self.x, y = self.y, rot = self.rot, ease, onStart, onProgress, onComplete} = params\n    var startX, startY, startRot\n    var diffX, diffY, diffRot\n\n    Object(_animationFrames__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(delay, duration)\n      .start(function () {\n        startX = self.x || 0\n        startY = self.y || 0\n        startRot = self.rot || 0\n        onStart && onStart()\n      })\n      .progress(function (t) {\n        var et = _ease__WEBPACK_IMPORTED_MODULE_3__[\"default\"][ease || 'cubicInOut'](t)\n\n        diffX = x - startX\n        diffY = y - startY\n        diffRot = rot - startRot\n\n        onProgress && onProgress(t, et)\n\n        self.x = startX + diffX * et\n        self.y = startY + diffY * et\n        self.rot = startRot + diffRot * et\n\n        $el.style[transform] = Object(_translate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(self.x + 'px', self.y + 'px') + (diffRot ? 'rotate(' + self.rot + 'deg)' : '')\n      })\n      .end(function () {\n        onComplete && onComplete()\n      })\n  }\n\n  // set rank & suit\n  self.setRankSuit = function (rank, suit) {\n    var suitName = SuitName(suit)\n    $el.setAttribute('class', 'card ' + suitName + ' rank' + rank)\n  }\n\n  self.setRankSuit(rank, suit)\n\n  self.enableDragging = function () {\n    // this activates dragging\n    if (isDraggable) {\n      // already is draggable, do nothing\n      return\n    }\n    isDraggable = true\n    $el.style.cursor = 'move'\n  }\n\n  self.enableFlipping = function () {\n    if (isFlippable) {\n      // already is flippable, do nothing\n      return\n    }\n    isFlippable = true\n  }\n\n  self.disableFlipping = function () {\n    if (!isFlippable) {\n      // already disabled flipping, do nothing\n      return\n    }\n    isFlippable = false\n  }\n\n  self.disableDragging = function () {\n    if (!isDraggable) {\n      // already disabled dragging, do nothing\n      return\n    }\n    isDraggable = false\n    $el.style.cursor = ''\n  }\n\n  return self\n\n  function addModule (module) {\n    // add card module\n    module.card && module.card(self)\n  }\n\n  function onMousedown (e) {\n    var startPos = {}\n    var pos = {}\n    var starttime = Date.now()\n\n    e.preventDefault()\n\n    // get start coordinates and start listening window events\n    if (e.type === 'mousedown') {\n      startPos.x = pos.x = e.clientX\n      startPos.y = pos.y = e.clientY\n      addListener(window, 'mousemove', onMousemove)\n      addListener(window, 'mouseup', onMouseup)\n    } else {\n      startPos.x = pos.x = e.touches[0].clientX\n      startPos.y = pos.y = e.touches[0].clientY\n      addListener(window, 'touchmove', onMousemove)\n      addListener(window, 'touchend', onMouseup)\n    }\n\n    if (!isDraggable) {\n      // is not draggable, do nothing\n      return\n    }\n\n    // move card\n    $el.style[transform] = Object(_translate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(self.x + 'px', self.y + 'px') + (self.rot ? ' rotate(' + self.rot + 'deg)' : '')\n    $el.style.zIndex = maxZ++\n\n    function onMousemove (e) {\n      if (!isDraggable) {\n        // is not draggable, do nothing\n        return\n      }\n      if (e.type === 'mousemove') {\n        pos.x = e.clientX\n        pos.y = e.clientY\n      } else {\n        pos.x = e.touches[0].clientX\n        pos.y = e.touches[0].clientY\n      }\n\n      // move card\n      $el.style[transform] = Object(_translate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Math.round(self.x + pos.x - startPos.x) + 'px', Math.round(self.y + pos.y - startPos.y) + 'px') + (self.rot ? ' rotate(' + self.rot + 'deg)' : '')\n    }\n\n    function onMouseup (e) {\n      if (isFlippable && Date.now() - starttime < 200) {\n        // flip sides\n        self.setSide(self.side === 'front' ? 'back' : 'front')\n      }\n      if (e.type === 'mouseup') {\n        removeListener(window, 'mousemove', onMousemove)\n        removeListener(window, 'mouseup', onMouseup)\n      } else {\n        removeListener(window, 'touchmove', onMousemove)\n        removeListener(window, 'touchend', onMouseup)\n      }\n      if (!isDraggable) {\n        // is not draggable, do nothing\n        return\n      }\n\n      // set current position\n      self.x = self.x + pos.x - startPos.x\n      self.y = self.y + pos.y - startPos.y\n    }\n  }\n\n  function mount (target) {\n    // mount card to target (deck)\n    target.appendChild($el)\n\n    self.$root = target\n  }\n\n  function unmount () {\n    // unmount from root (deck)\n    self.$root && self.$root.removeChild($el)\n    self.$root = null\n  }\n\n  function setSide (newSide) {\n    // flip sides\n    if (newSide === 'front') {\n      if (self.side === 'back') {\n        $el.removeChild($back)\n      }\n      self.side = 'front'\n      $el.appendChild($face)\n      self.setRankSuit(self.rank, self.suit)\n    } else {\n      if (self.side === 'front') {\n        $el.removeChild($face)\n      }\n      self.side = 'back'\n      $el.appendChild($back)\n      $el.setAttribute('class', 'card')\n    }\n  }\n});\n\nfunction SuitName (suit) {\n  // return suit name from suit value\n  return suit === 0 ? 'spades' : suit === 1 ? 'hearts' : suit === 2 ? 'clubs' : suit === 3 ? 'diamonds' : 'joker'\n}\n\nfunction addListener (target, name, listener) {\n  target.addEventListener(name, listener)\n}\n\nfunction removeListener (target, name, listener) {\n  target.removeEventListener(name, listener)\n}\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/card.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/createElement.js":
/*!*********************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/createElement.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (type) {\n  return document.createElement(type)\n});\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/createElement.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/deck.js":
/*!************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/deck.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Deck; });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./node_modules/deck-of-cards/lib/createElement.js\");\n/* harmony import */ var _animationFrames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationFrames */ \"./node_modules/deck-of-cards/lib/animationFrames.js\");\n/* harmony import */ var _ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ease */ \"./node_modules/deck-of-cards/lib/ease.js\");\n/* harmony import */ var _modules_bysuit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/bysuit */ \"./node_modules/deck-of-cards/lib/modules/bysuit.js\");\n/* harmony import */ var _modules_fan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/fan */ \"./node_modules/deck-of-cards/lib/modules/fan.js\");\n/* harmony import */ var _modules_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/intro */ \"./node_modules/deck-of-cards/lib/modules/intro.js\");\n/* harmony import */ var _modules_poker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/poker */ \"./node_modules/deck-of-cards/lib/modules/poker.js\");\n/* harmony import */ var _modules_shuffle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/shuffle */ \"./node_modules/deck-of-cards/lib/modules/shuffle.js\");\n/* harmony import */ var _modules_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sort */ \"./node_modules/deck-of-cards/lib/modules/sort.js\");\n/* harmony import */ var _modules_flip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/flip */ \"./node_modules/deck-of-cards/lib/modules/flip.js\");\n/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./observable */ \"./node_modules/deck-of-cards/lib/observable.js\");\n/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./queue */ \"./node_modules/deck-of-cards/lib/queue.js\");\n/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./prefix */ \"./node_modules/deck-of-cards/lib/prefix.js\");\n/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./translate */ \"./node_modules/deck-of-cards/lib/translate.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./card */ \"./node_modules/deck-of-cards/lib/card.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Deck (jokers) {\n  // init cards array\n  var cards = new Array(jokers ? 55 : 52)\n\n  var $el = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div')\n  var self = Object(_observable__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({mount, unmount, cards, $el})\n  var $root\n\n  var modules = Deck.modules\n  var module\n\n  // make queueable\n  Object(_queue__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(self)\n\n  // load modules\n  for (module in modules) {\n    addModule(modules[module])\n  }\n\n  // add class\n  $el.classList.add('deck')\n\n  var card\n\n  // create cards\n  for (var i = cards.length; i; i--) {\n    card = cards[i - 1] = Object(_card__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(i - 1)\n    card.setSide('back')\n    card.mount($el)\n  }\n\n  return self\n\n  function mount (root) {\n    // mount deck to root\n    $root = root\n    $root.appendChild($el)\n  }\n\n  function unmount () {\n    // unmount deck from root\n    $root.removeChild($el)\n  }\n\n  function addModule (module) {\n    module.deck && module.deck(self)\n  }\n}\nDeck.animationFrames = _animationFrames__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\nDeck.ease = _ease__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\nDeck.modules = {bysuit: _modules_bysuit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], fan: _modules_fan__WEBPACK_IMPORTED_MODULE_4__[\"default\"], intro: _modules_intro__WEBPACK_IMPORTED_MODULE_5__[\"default\"], poker: _modules_poker__WEBPACK_IMPORTED_MODULE_6__[\"default\"], shuffle: _modules_shuffle__WEBPACK_IMPORTED_MODULE_7__[\"default\"], sort: _modules_sort__WEBPACK_IMPORTED_MODULE_8__[\"default\"], flip: _modules_flip__WEBPACK_IMPORTED_MODULE_9__[\"default\"]}\nDeck.Card = _card__WEBPACK_IMPORTED_MODULE_14__[\"default\"]\nDeck.prefix = _prefix__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\nDeck.translate = _translate__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/deck.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/ease.js":
/*!************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/ease.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  linear: function (t) {\n    return t\n  },\n  quadIn: function (t) {\n    return t * t\n  },\n  quadOut: function (t) {\n    return t * (2 - t)\n  },\n  quadInOut: function (t) {\n    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t\n  },\n  cubicIn: function (t) {\n    return t * t * t\n  },\n  cubicOut: function (t) {\n    return (--t) * t * t + 1\n  },\n  cubicInOut: function (t) {\n    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1\n  },\n  quartIn: function (t) {\n    return t * t * t * t\n  },\n  quartOut: function (t) {\n    return 1 - (--t) * t * t * t\n  },\n  quartInOut: function (t) {\n    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t\n  },\n  quintIn: function (t) {\n    return t * t * t * t * t\n  },\n  quintOut: function (t) {\n    return 1 + (--t) * t * t * t * t\n  },\n  quintInOut: function (t) {\n    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/ease.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/fisherYates.js":
/*!*******************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/fisherYates.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (array) {\n  var rnd, temp\n\n  for (var i = array.length - 1; i; i--) {\n    rnd = Math.random() * i | 0\n    temp = array[i]\n    array[i] = array[rnd]\n    array[rnd] = temp\n  }\n\n  return array\n});\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/fisherYates.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/fontSize.js":
/*!****************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/fontSize.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return window.getComputedStyle(document.body).getPropertyValue('font-size').slice(0, -2)\n});\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/fontSize.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/modules/bysuit.js":
/*!**********************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/modules/bysuit.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fontSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fontSize */ \"./node_modules/deck-of-cards/lib/fontSize.js\");\n\n\n\nvar fontSize\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  deck: function (deck) {\n    deck.bysuit = deck.queued(bysuit)\n\n    function bysuit (next) {\n      var cards = deck.cards\n\n      fontSize = Object(_fontSize__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n      cards.forEach(function (card) {\n        card.bysuit(function (i) {\n          if (i === cards.length - 1) {\n            next()\n          }\n        })\n      })\n    }\n  },\n  card: function (card) {\n    var rank = card.rank\n    var suit = card.suit\n\n    card.bysuit = function (cb) {\n      var i = card.i\n      var delay = i * 10\n\n      card.animateTo({\n        delay: delay,\n        duration: 400,\n\n        x: -Math.round((6.75 - rank) * 8 * fontSize / 16),\n        y: -Math.round((1.5 - suit) * 92 * fontSize / 16),\n        rot: 0,\n\n        onComplete: function () {\n          cb(i)\n        }\n      })\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/modules/bysuit.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/modules/fan.js":
/*!*******************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/modules/fan.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fontSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fontSize */ \"./node_modules/deck-of-cards/lib/fontSize.js\");\n\n\n\nvar fontSize\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  deck: function (deck) {\n    deck.fan = deck.queued(fan)\n\n    function fan (next) {\n      var cards = deck.cards\n      var len = cards.length\n\n      fontSize = Object(_fontSize__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n      cards.forEach(function (card, i) {\n        card.fan(i, len, function (i) {\n          if (i === cards.length - 1) {\n            next()\n          }\n        })\n      })\n    }\n  },\n  card: function (card) {\n    var $el = card.$el\n\n    card.fan = function (i, len, cb) {\n      var z = i / 4\n      var delay = i * 10\n      var rot = i / (len - 1) * 260 - 130\n\n      card.animateTo({\n        delay: delay,\n        duration: 300,\n\n        x: -z,\n        y: -z,\n        rot: 0\n      })\n      card.animateTo({\n        delay: 300 + delay,\n        duration: 300,\n\n        x: Math.cos(deg2rad(rot - 90)) * 55 * fontSize / 16,\n        y: Math.sin(deg2rad(rot - 90)) * 55 * fontSize / 16,\n        rot: rot,\n\n        onStart: function () {\n          $el.style.zIndex = i\n        },\n\n        onComplete: function () {\n          cb(i)\n        }\n      })\n    }\n  }\n});\n\nfunction deg2rad (degrees) {\n  return degrees * Math.PI / 180\n}\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/modules/fan.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/modules/flip.js":
/*!********************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/modules/flip.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  deck: function (deck) {\n    deck.flip = deck.queued(flip)\n\n    function flip (next, side) {\n      var flipped = deck.cards.filter(function (card) {\n        return card.side === 'front'\n      }).length / deck.cards.length\n\n      deck.cards.forEach(function (card, i) {\n        card.setSide(side ? side : flipped > 0.5 ? 'back' : 'front')\n      })\n      next()\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/modules/flip.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/modules/intro.js":
/*!*********************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/modules/intro.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animationFrames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animationFrames */ \"./node_modules/deck-of-cards/lib/animationFrames.js\");\n/* harmony import */ var _ease__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ease */ \"./node_modules/deck-of-cards/lib/ease.js\");\n/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prefix */ \"./node_modules/deck-of-cards/lib/prefix.js\");\n/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translate */ \"./node_modules/deck-of-cards/lib/translate.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  deck: function (deck) {\n    deck.intro = deck.queued(intro)\n\n    function intro (next) {\n      var cards = deck.cards\n\n      cards.forEach(function (card, i) {\n        card.setSide('front')\n        card.intro(i, function (i) {\n          Object(_animationFrames__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(250, 0)\n            .start(function () {\n              card.setSide('back')\n            })\n          if (i === cards.length - 1) {\n            next()\n          }\n        })\n      })\n    }\n  },\n  card: function (card) {\n    var transform = Object(_prefix__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('transform')\n\n    var $el = card.$el\n\n    card.intro = function (i, cb) {\n      var delay = 500 + i * 10\n      var z = i / 4\n\n      $el.style[transform] = Object(_translate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(-z + 'px', '-250px')\n      $el.style.opacity = 0\n\n      card.x = -z\n      card.y = -250 - z\n      card.rot = 0\n\n      card.animateTo({\n        delay: delay,\n        duration: 1000,\n\n        x: -z,\n        y: -z,\n\n        onStart: function () {\n          $el.style.zIndex = i\n        },\n        onProgress: function (t) {\n          $el.style.opacity = t\n        },\n        onComplete: function () {\n          $el.style.opacity = ''\n          cb && cb(i)\n        }\n      })\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/modules/intro.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/modules/poker.js":
/*!*********************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/modules/poker.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fontSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fontSize */ \"./node_modules/deck-of-cards/lib/fontSize.js\");\n\n\n\nvar fontSize\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  deck: function (deck) {\n    deck.poker = deck.queued(poker)\n\n    function poker (next) {\n      var cards = deck.cards\n      var len = cards.length\n\n      fontSize = Object(_fontSize__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n      cards.slice(-5).reverse().forEach(function (card, i) {\n        card.poker(i, len, function (i) {\n          card.setSide('front')\n          if (i === 4) {\n            next()\n          }\n        })\n      })\n    }\n  },\n  card: function (card) {\n    var $el = card.$el\n\n    card.poker = function (i, len, cb) {\n      var delay = i * 250\n\n      card.animateTo({\n        delay: delay,\n        duration: 250,\n\n        x: Math.round((i - 2.05) * 70 * fontSize / 16),\n        y: Math.round(-110 * fontSize / 16),\n        rot: 0,\n\n        onStart: function () {\n          $el.style.zIndex = (len - 1) + i\n        },\n        onComplete: function () {\n          cb(i)\n        }\n      })\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/modules/poker.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/modules/shuffle.js":
/*!***********************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/modules/shuffle.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fontSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fontSize */ \"./node_modules/deck-of-cards/lib/fontSize.js\");\n/* harmony import */ var _fisherYates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fisherYates */ \"./node_modules/deck-of-cards/lib/fisherYates.js\");\n/* harmony import */ var _plusminus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plusminus */ \"./node_modules/deck-of-cards/lib/plusminus.js\");\n\n\n\n\n\nvar fontSize\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  deck: function (deck) {\n    deck.shuffle = deck.queued(shuffle)\n\n    function shuffle (next) {\n      var cards = deck.cards\n\n      fontSize = Object(_fontSize__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n      Object(_fisherYates__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cards)\n\n      cards.forEach(function (card, i) {\n        card.pos = i\n\n        card.shuffle(function (i) {\n          if (i === cards.length - 1) {\n            next()\n          }\n        })\n      })\n      return\n    }\n  },\n\n  card: function (card) {\n    var $el = card.$el\n\n    card.shuffle = function (cb) {\n      var i = card.pos\n      var z = i / 4\n      var delay = i * 2\n\n      card.animateTo({\n        delay: delay,\n        duration: 200,\n\n        x: Object(_plusminus__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Math.random() * 40 + 20) * fontSize / 16,\n        y: -z,\n        rot: 0\n      })\n      card.animateTo({\n        delay: 200 + delay,\n        duration: 200,\n\n        x: -z,\n        y: -z,\n        rot: 0,\n\n        onStart: function () {\n          $el.style.zIndex = i\n        },\n\n        onComplete: function () {\n          cb(i)\n        }\n      })\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/modules/shuffle.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/modules/sort.js":
/*!********************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/modules/sort.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  deck: function (deck) {\n    deck.sort = deck.queued(sort)\n\n    function sort (next, reverse) {\n      var cards = deck.cards\n\n      cards.sort(function (a, b) {\n        if (reverse) {\n          return a.i - b.i\n        } else {\n          return b.i - a.i\n        }\n      })\n\n      cards.forEach(function (card, i) {\n        card.sort(i, cards.length, function (i) {\n          if (i === cards.length - 1) {\n            next()\n          }\n        }, reverse)\n      })\n    }\n  },\n  card: function (card) {\n    var $el = card.$el\n\n    card.sort = function (i, len, cb, reverse) {\n      var z = i / 4\n      var delay = i * 10\n\n      card.animateTo({\n        delay: delay,\n        duration: 400,\n\n        x: -z,\n        y: -150,\n        rot: 0,\n\n        onComplete: function () {\n          $el.style.zIndex = i\n        }\n      })\n\n      card.animateTo({\n        delay: delay + 500,\n        duration: 400,\n\n        x: -z,\n        y: -z,\n        rot: 0,\n\n        onComplete: function () {\n          cb(i)\n        }\n      })\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/modules/sort.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/observable.js":
/*!******************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/observable.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (target) {\n  target || (target = {})\n  var listeners = {}\n\n  target.on = on\n  target.one = one\n  target.off = off\n  target.trigger = trigger\n\n  return target\n\n  function on (name, cb, ctx) {\n    listeners[name] || (listeners[name] = [])\n    listeners[name].push({cb, ctx})\n  }\n\n  function one (name, cb, ctx) {\n    listeners[name] || (listeners[name] = [])\n    listeners[name].push({\n      cb, ctx, once: true\n    })\n  }\n\n  function trigger (name) {\n    var self = this\n    var args = Array.prototype.slice(arguments, 1)\n\n    var currentListeners = listeners[name] || []\n\n    currentListeners.filter(function (listener) {\n      listener.cb.apply(self, args)\n\n      return !listener.once\n    })\n  }\n\n  function off (name, cb) {\n    if (!name) {\n      listeners = {}\n      return\n    }\n\n    if (!cb) {\n      listeners[name] = []\n      return\n    }\n\n    listeners[name] = listeners[name].filter(function (listener) {\n      return listener.cb !== cb\n    })\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/observable.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/plusminus.js":
/*!*****************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/plusminus.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  var plusminus = Math.round(Math.random()) ? -1 : 1\n\n  return plusminus * value\n});\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/plusminus.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/prefix.js":
/*!**************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/prefix.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nvar style = document.createElement('p').style\nvar memoized = {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (param) {\n  if (typeof memoized[param] !== 'undefined') {\n    return memoized[param]\n  }\n\n  if (typeof style[param] !== 'undefined') {\n    memoized[param] = param\n    return param\n  }\n\n  var camelCase = param[0].toUpperCase() + param.slice(1)\n  var prefixes = ['webkit', 'moz', 'Moz', 'ms', 'o']\n  var test\n\n  for (var i = 0, len = prefixes.length; i < len; i++) {\n    test = prefixes[i] + camelCase\n    if (typeof style[test] !== 'undefined') {\n      memoized[param] = test\n      return test\n    }\n  }\n});\n\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/prefix.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/queue.js":
/*!*************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/queue.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (target) {\n  var array = Array.prototype\n\n  var queueing = []\n\n  target.queue = queue\n  target.queued = queued\n\n  return target\n\n  function queued (action) {\n    return function () {\n      var self = this\n      var args = arguments\n\n      queue(function (next) {\n        action.apply(self, array.concat.apply(next, args))\n      })\n    }\n  }\n\n  function queue (action) {\n    if (!action) {\n      return\n    }\n\n    queueing.push(action)\n\n    if (queueing.length === 1) {\n      next()\n    }\n  }\n  function next () {\n    queueing[0](function (err) {\n      if (err) {\n        throw err\n      }\n\n      queueing = queueing.slice(1)\n\n      if (queueing.length) {\n        next()\n      }\n    })\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/queue.js?");

/***/ }),

/***/ "./node_modules/deck-of-cards/lib/translate.js":
/*!*****************************************************!*\
  !*** ./node_modules/deck-of-cards/lib/translate.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefix */ \"./node_modules/deck-of-cards/lib/prefix.js\");\n\n\n\nvar has3d\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (a, b, c) {\n  (typeof has3d !== 'undefined') || (has3d = check3d())\n\n  c = c || 0\n\n  if (has3d) {\n    return 'translate3d(' + a + ', ' + b + ', ' + c + ')'\n  } else {\n    return 'translate(' + a + ', ' + b + ')'\n  }\n});\n\nfunction check3d () {\n  // I admit, this line is stealed from the great Velocity.js!\n  // http://julian.com/research/velocity/\n  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)\n\n  if (!isMobile) {\n    return false\n  }\n\n  var transform = Object(_prefix__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('transform')\n  var $p = document.createElement('p')\n\n  document.body.appendChild($p)\n  $p.style[transform] = 'translate3d(1px,1px,1px)'\n\n  has3d = $p.style[transform]\n  has3d = has3d != null && has3d.length && has3d !== 'none'\n\n  document.body.removeChild($p)\n\n  return has3d\n}\n\n\n//# sourceURL=webpack:///./node_modules/deck-of-cards/lib/translate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var deck_of_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deck-of-cards */ \"./node_modules/deck-of-cards/lib/deck.js\");\n\n\nconst table = document.querySelector('.table');\nconst deck = Object(deck_of_cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\ndeck.mount(table);\ndeck.fan();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });