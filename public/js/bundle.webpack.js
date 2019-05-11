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

/***/ "./src/img/javascript.png":
/*!********************************!*\
  !*** ./src/img/javascript.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/javascript.png\";\n\n//# sourceURL=webpack:///./src/img/javascript.png?");

/***/ }),

/***/ "./src/img/loading.gif":
/*!*****************************!*\
  !*** ./src/img/loading.gif ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/loading.gif\";\n\n//# sourceURL=webpack:///./src/img/loading.gif?");

/***/ }),

/***/ "./src/img/technology.jpg":
/*!********************************!*\
  !*** ./src/img/technology.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/technology.jpg\";\n\n//# sourceURL=webpack:///./src/img/technology.jpg?");

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_value_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/value.scss */ \"./src/style/value.scss\");\n/* harmony import */ var _style_value_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_value_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_media_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/media.scss */ \"./src/style/media.scss\");\n/* harmony import */ var _style_media_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_media_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _img_javascript_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/javascript.png */ \"./src/img/javascript.png\");\n/* harmony import */ var _img_javascript_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_javascript_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _img_loading_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/loading.gif */ \"./src/img/loading.gif\");\n/* harmony import */ var _img_loading_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_loading_gif__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _img_technology_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/technology.jpg */ \"./src/img/technology.jpg\");\n/* harmony import */ var _img_technology_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_technology_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model */ \"./src/js/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view */ \"./src/js/view.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller */ \"./src/js/controller.js\");\n/* @ Styles @ */\n\n\n\n/* @ Media-file @ */\n\n\n\n\n/* @ JavaScript @ */\n\n\n\n\n\nfunction main() {\n  var pages = new _model__WEBPACK_IMPORTED_MODULE_6__[\"Pages\"]();\n  var news = new _model__WEBPACK_IMPORTED_MODULE_6__[\"News\"]();\n  var db = new _model__WEBPACK_IMPORTED_MODULE_6__[\"DataBase\"]();\n  news.getCoords();\n  var view = new _view__WEBPACK_IMPORTED_MODULE_7__[\"default\"](document.getElementById('newsApp'));\n  var controll = new _controller__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n  controll.setEvents(view, news, pages);\n  view.showComponents();\n  view.showLoader();\n  var have = news.request(view, pages, db);\n\n  if (have === false) {\n    view.customElements(document.querySelector('.loader'), 'delete');\n    view.updateBroswer();\n  } // controll.setDbEvents(dateBase,db.storeData);\n\n}\n\nmain();\n\n//# sourceURL=webpack:///./src/js/bundle.js?");

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Controller =\n/*#__PURE__*/\nfunction () {\n  function Controller() {\n    _classCallCheck(this, Controller);\n\n    this.menu = null;\n    this.menuTitle = null;\n    this.timer = null;\n    this.scrolled = null;\n    this.clickScrollCount = 0;\n  }\n\n  _createClass(Controller, [{\n    key: \"setDbEvents\",\n    value: function setDbEvents(dateNews, storeData) {\n      dateNews.onupgradeneeded = function (event) {\n        var db = event.target.result; // Create an objectStore to hold information about our customers. We're\n        // going to use \"id\" as our key path because it's guaranteed to be\n        // unique.\n\n        var objectStore = db.createObjectStore(\"news\", {\n          autoIncrement: true\n        }); // Create an index to search customers by name. We may have duplicates\n        // so we can't use a unique index.\n\n        objectStore.createIndex(\"name\", 'name', {\n          unique: false\n        }); // Store values in the newly created objectStore.\n\n        for (var i = 0; i < storeData.length; i++) {\n          objectStore.add(storeData[i]);\n        }\n      };\n\n      dateNews.onsuccess = function (event) {\n        //если база открылась и все в порядке\n        var db = event.target.result;\n        var objectStore = db.transaction([\"news\"], \"readwrite\");\n        var store = objectStore.objectStore(\"news\");\n\n        store.openCursor().onsuccess = function (event) {\n          var cursor = event.target.result;\n          if (cursor) cursor.continue();\n        };\n      };\n    }\n  }, {\n    key: \"setEvents\",\n    value: function setEvents(view, model, pages) {\n      var self = this;\n\n      function scroll(e) {\n        self.menu = document.getElementsByTagName('nav')[0];\n        self.scrolled = window.pageYOffset || document.documentElement.scrollTop;\n\n        if (self.timer != null && self.scrolled === 0) {\n          clearInterval(self.timer);\n          self.clickScrollCount = 0;\n        }\n\n        ;\n\n        if (self.scrolled > 100) {\n          self.menu.classList.add('fixed-menu');\n          !document.querySelector('.scroll') && !Modernizr.touchevents && view.showScrollUp();\n        } else if (self.menu.classList[0] == 'fixed-menu' && self.scrolled < 100) {\n          var _scroll = document.querySelector('.scroll');\n\n          self.menu.classList.toggle('fixed-menu');\n          _scroll && _scroll.parentNode.removeChild(_scroll); // || remove()\n        }\n      }\n\n      ;\n\n      function clickEvent(e) {\n        var target = e.target;\n\n        if (target.classList[0] === 'loadingNewsBtn') {\n          view.loadingNews(target);\n          return;\n        }\n\n        ;\n\n        if ((target.parentNode.classList[0] === 'scroll' || target.classList[0] === 'scroll') && self.clickScrollCount === 0) {\n          self.clickScrollCount++;\n          self.timer = setInterval(function tick() {\n            document.documentElement.scrollTop = document.documentElement.scrollTop - 20;\n          }, 0);\n        }\n      }\n\n      ;\n      /* -----------Modernizr----------- */\n\n      console.log('touchevents detected:' + Modernizr.touchevents);\n      Modernizr.touchevents && document.addEventListener('touchend', clickEvent, false);\n      !Modernizr.touchevents && document.addEventListener('click', clickEvent, false);\n      window.addEventListener('storage', function (e) {\n        view.showNews();\n      }, false);\n      document.addEventListener('scroll', scroll, false);\n      document.addEventListener('DOMContentLoaded', function () {\n        if (window.location.hash.slice(2) === 'main') {\n          window.location.hash = '';\n        }\n      }, false);\n      window.addEventListener('hashchange', updateState);\n\n      function updateState(e) {\n        sessionStorage.state = window.location.hash.slice(2);\n        pages.currentState = sessionStorage.state;\n        view.checkState(pages);\n      }\n    }\n  }]);\n\n  return Controller;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/controller.js?");

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/*! exports provided: Pages, DataBase, News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pages\", function() { return Pages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataBase\", function() { return DataBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"News\", function() { return News; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Pages =\n/*#__PURE__*/\nfunction () {\n  function Pages() {\n    _classCallCheck(this, Pages);\n\n    this.state = 'index';\n  }\n\n  _createClass(Pages, [{\n    key: \"currentState\",\n    set: function set(index) {\n      this.state = index;\n    },\n    get: function get() {\n      return this.state;\n    }\n  }]);\n\n  return Pages;\n}();\n\nvar News =\n/*#__PURE__*/\nfunction () {\n  function News() {\n    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'top-headlines';\n    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ru';\n\n    _classCallCheck(this, News);\n\n    this.KEY = '92084bd2e2064d8d856eb2c499818785';\n    this.URI = 'https://newsapi.org/v2/';\n    this.CATEGORY = 'technology';\n    this.type = type;\n    this.country = \"country=\".concat(lang);\n    this.buffer = false;\n    this.correctUTF = [];\n    this.articlesNews = [];\n    this.error = null;\n  }\n\n  _createClass(News, [{\n    key: \"getCoords\",\n    value: function getCoords() {\n      function error(err) {\n        var coords = {\n          latitude: 53.9130256,\n          longitude: 27.4998984,\n          error: true\n        };\n        localStorage.coords = JSON.stringify(coords);\n      }\n\n      ;\n      navigator.geolocation.getCurrentPosition(function success(pos) {\n        var response = pos.coords;\n        var coords = {\n          latitude: response.latitude,\n          longitude: response.longitude,\n          error: false\n        };\n        localStorage.coords = JSON.stringify(coords);\n      }, error);\n    }\n  }, {\n    key: \"request\",\n    value: function request(view, pages, db) {\n      if (!window.fetch) return false;\n      window.fetch(\"\".concat(this.URI + this.type, \"?\").concat(this.country, \"&category=\").concat(this.CATEGORY, \"&apiKey=\").concat(this.KEY)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        return sessionStorage.news = JSON.stringify(response.articles);\n      }).then(function (response) {\n        return db.openDateBase(view, pages, response);\n      }).catch(function (error) {\n        sessionStorage.state = window.location.hash.slice(2);\n        pages.currentState = sessionStorage.state;\n        view.showNews();\n        view.checkState(pages);\n        view.customElements(document.querySelector('.loader'), 'delete');\n      });\n    }\n  }], [{\n    key: \"mapInit\",\n    value: function mapInit() {\n      var mapIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('.ol-viewport');\n\n      if (!mapIn) {\n        var mousePositionControl = new ol.control.MousePosition({\n          // используется градусная проекция\n          projection: 'EPSG:4326',\n          // переопределяем функцию вывода координат\n          coordinateFormat: function coordinateFormat(coordinate) {\n            // сначала широта, потом долгота и ограничиваем до 3 знаков после запятой\n            return ol.coordinate.format(coordinate, '{y}, {x}', 3);\n          }\n        });\n        return new ol.Map({\n          controls: ol.control.defaults().extend([new ol.control.ZoomSlider(), mousePositionControl, new ol.control.OverviewMap(), new ol.control.ScaleLine()]),\n          target: 'map',\n          layers: [new ol.layer.Tile({\n            source: new ol.source.OSM()\n          })],\n          view: new ol.View({\n            center: ol.proj.fromLonLat([27.4998984, 53.9130256]),\n            zoom: 7\n          })\n        });\n      }\n    }\n  }]);\n\n  return News;\n}();\n\nvar DataBase =\n/*#__PURE__*/\nfunction () {\n  function DataBase() {\n    _classCallCheck(this, DataBase);\n\n    this.storeData = [];\n    this.requestArticle = [];\n    this.dbItems = null;\n    this.itemCountDB = null;\n  }\n\n  _createClass(DataBase, [{\n    key: \"openDateBase\",\n    value: function openDateBase(view, pages, storeData) {\n      var _this = this;\n\n      this.requestArticle = JSON.parse(sessionStorage.news);\n      if (!window.indexedDB) return;\n      var dbPromise = window.indexedDB.open('newsDB', 1);\n\n      dbPromise.onupgradeneeded = function (e) {\n        _this.storeData = JSON.parse(sessionStorage.news);\n        var db = event.target.result;\n        var objectStore = db.createObjectStore(\"news\", {\n          autoIncrement: true\n        });\n        objectStore.createIndex(\"name\", 'name', {\n          unique: false\n        }); // Store values in the newly created objectStore.\n\n        _this.storeData.forEach(function (item) {\n          return objectStore.add(item);\n        });\n      };\n\n      dbPromise.onsuccess = function (e) {\n        var db = e.target.result;\n        _this.dbItems = db.transaction('news').objectStore('news').getAll();\n\n        _this.dbItems.onsuccess = function (e) {\n          var dbPromise = new Promise(function (resolve, reject) {\n            var data = db.transaction('news', 'readwrite').objectStore('news'); // let store = data.objectStore('news');\n\n            data.oncomplete(resolve(data));\n          }).then(function (data) {\n            var promise = new Promise(function (resolve, reject) {\n              data.openCursor().onsuccess = function logItems(e) {\n                var cursor = e.target.result;\n\n                if (!cursor) {\n                  return resolve('done');\n                }\n\n                if (cursor.key > 54) cursor.delete();\n                cursor.continue();\n              };\n            }).then(function (result) {\n              return db.transaction('news').objectStore('news').getAll();\n            }).then(function (result) {\n              result.onsuccess = function (e) {\n                _this.itemCountDB = _this.dbItems.result.length - 1;\n                var news = e.target.result;\n                _this.correctUTF = [];\n                _this.buffer = news.length ? news : _this.requestArticle;\n                var _iteratorNormalCompletion = true;\n                var _didIteratorError = false;\n                var _iteratorError = undefined;\n\n                try {\n                  for (var _iterator = _this.buffer[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                    var item = _step.value;\n                    item.source && (item.name = item.source.name);\n                    item.source && delete item.source;\n                    item.author !== undefined && delete item.author;\n                    item.content !== undefined && delete item.content;\n                  }\n                } catch (err) {\n                  _didIteratorError = true;\n                  _iteratorError = err;\n                } finally {\n                  try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                      _iterator.return();\n                    }\n                  } finally {\n                    if (_didIteratorError) {\n                      throw _iteratorError;\n                    }\n                  }\n                }\n\n                var filterNews = _this.requestArticle.filter(function (item, i) {\n                  var its = _this.buffer.find(function (it) {\n                    return it.description === item.description;\n                  });\n\n                  return its === undefined;\n                });\n\n                if (filterNews.length) {\n                  filterNews.forEach(function (element) {\n                    return _this.buffer.unshift(element);\n                  });\n                }\n\n                var findItem = _this.buffer || _this.requestArticle;\n                _this.correctUTF = findItem.filter(function (item) {\n                  return item.name != 'Rg.ru';\n                });\n                var trans = db.transaction('news', 'readwrite');\n\n                for (var i = 0; i < _this.correctUTF.length; i++) {\n                  trans.objectStore('news').put(_this.correctUTF[i], i + 1);\n                }\n\n                sessionStorage.removeItem('news');\n                sessionStorage.itemCount = _this.correctUTF.length - 1;\n                sessionStorage.state = window.location.hash.slice(2);\n                pages.currentState = sessionStorage.state;\n                view.itemCountDB = _this.itemCountDB;\n                view.showNews(news);\n                view.checkState(pages);\n                view.customElements(document.querySelector('.loader'), 'delete');\n              };\n            }).catch(function (error) {\n              console.warn(error);\n            });\n          });\n        };\n      };\n    }\n  }]);\n\n  return DataBase;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/model.js?");

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ViewNews; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ViewNews =\n/*#__PURE__*/\nfunction () {\n  function ViewNews() {\n    var ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.createElement('div');\n\n    _classCallCheck(this, ViewNews);\n\n    this.ctx = ctx;\n    this.content = null;\n    this.menu = ['main', 'about', 'contact'];\n    this.news = localStorage.news ? JSON.parse(localStorage.news) : [];\n    this.newsSection = [];\n    this.count = 6;\n    this.countShow = 18;\n    this.lengthLoading = 0;\n    this.items = [];\n    this.itemCountDB = null;\n    this.components = {\n      header: null,\n      footer: null,\n      loadMoreBox: null,\n      loadingNews: null,\n      contentSection: null,\n      nav: null,\n      wrapperHeader: null,\n      navigator: null,\n      title: null,\n      footerWrapper: null,\n      footerPower: null\n    };\n  }\n\n  _createClass(ViewNews, [{\n    key: \"updateBroswer\",\n    value: function updateBroswer() {\n      var content = document.querySelector('.content');\n      var support = document.createElement('h2');\n      support.classList.add('updateIE');\n      support.innerHTML = \"Please update browser or if you use IE download a modern browser.\";\n      content.appendChild(support);\n    }\n  }, {\n    key: \"showScrollUp\",\n    value: function showScrollUp() {\n      var scrollUp = document.createElement('div');\n      scrollUp.classList.add('scroll');\n      scrollUp.innerHTML = '<i class=\"fa-2x fas fa-arrow-up positionIcon\"></i>';\n      this.ctx.appendChild(scrollUp);\n    }\n  }, {\n    key: \"customElements\",\n    value: function customElements(target) {\n      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';\n      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Спрятать';\n\n      if (target) {\n        type === 'disabled' && target.setAttribute('disabled', 'true');\n        type === 'delete' && target.parentNode.removeChild(target);\n        type === 'rename' && (target.value = name);\n      }\n    }\n  }, {\n    key: \"loadingNews\",\n    value: function loadingNews() {\n      var _this = this;\n\n      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      var lastSection = _toConsumableArray(document.getElementsByTagName('section'));\n\n      var contentSection = document.querySelector('.content');\n      var num = this.newsSection.length - 1;\n      this.items = [];\n      lastSection.forEach(function (item) {\n        var _this$items;\n\n        return (_this$items = _this.items).push.apply(_this$items, _toConsumableArray(item.children));\n      });\n      this.newContent = this.news.filter(function (item, i) {\n        return i > _this.items.length - 1;\n      });\n\n      if (this.newContent.length) {\n        this.countShow = this.countShow > this.newContent.length ? this.newContent.length : 17;\n        var countArticle = Math.ceil(this.countShow / 3);\n\n        for (var j = 0; j < countArticle; j++) {\n          var section = document.createElement('section');\n          this.newsSection.push(section);\n        }\n\n        this.lengthLoading = this.newContent.length > this.countShow ? this.countShow : this.newContent.length;\n\n        for (var i = 0; i < this.lengthLoading; i++) {\n          var read = document.createElement('a');\n          var article = document.createElement('div');\n          var img = document.createElement('img');\n          img.src = this.newContent[i].urlToImage ? this.newContent[i].urlToImage : 'img/technology.jpg';\n          img.classList.add('topic-image');\n          var content = document.createElement('p');\n          content.classList.add('article__content');\n          article.classList.add('article-col');\n          article.classList.add('rel-col');\n          read.href = this.newContent[i].url;\n          read.setAttribute('target', '_blank');\n          read.classList.add('article__content__read');\n          content.innerHTML = this.newContent[i].description != '' && this.newContent[i].description != null ? this.newContent[i].description : this.newContent[i].title;\n          article.appendChild(img);\n          article.appendChild(content);\n          article.appendChild(read);\n          this.newsSection[num].appendChild(article);\n          if (this.newsSection[num].children.length >= 3) num++;\n        }\n\n        for (var ij = 7; ij < this.newsSection.length; ij++) {\n          var parent = target.parentNode;\n          contentSection.insertBefore(this.newsSection[ij], parent);\n        }\n\n        this.items = [];\n        this.items = document.querySelectorAll('div.article-col').length - 1;\n        if (this.items === this.itemCountDB) this.customElements(document.querySelector('.loadingNewsBtn'), 'delete');\n      } else {\n        this.customElements(document.querySelector('.loadingNewsBtn'), 'delete');\n        return;\n      }\n    }\n  }, {\n    key: \"showLoadingButton\",\n    value: function showLoadingButton() {\n      this.components.loadMoreBox = document.createElement('div');\n      this.components.loadMoreBox.classList.add('controllSection');\n      this.components.loadMoreBox = document.createElement('div');\n      this.components.loadMoreBox.classList.add('controllSection');\n      this.components.loadingNews = document.createElement('input');\n      this.components.loadingNews.setAttribute('type', 'button');\n      this.components.loadingNews.classList.add('loadingNewsBtn');\n      this.components.loadingNews.value = 'Загрузить';\n      this.components.loadMoreBox.appendChild(this.components.loadingNews);\n    }\n  }, {\n    key: \"showComponents\",\n    value: function showComponents() {\n      this.ctx.innerHTML = '';\n      this.components.header = document.createElement('header');\n      this.components.footer = document.createElement('footer');\n      this.components.contentSection = document.createElement('div');\n      this.components.contentSection.classList.add('content');\n      this.components.nav = document.createElement('nav');\n      this.components.wrapperHeader = document.createElement('div');\n      this.components.navigator = document.createElement('ul');\n      this.components.navigator.classList.add('menu');\n      this.components.wrapperHeader.classList.add('row-center');\n      this.components.title = document.createElement('h1');\n      this.components.title.innerHTML = 'Technology news';\n      this.components.title.classList.add('title');\n      this.components.footerWrapper = document.createElement('div');\n      this.components.footerWrapper.classList.add('footerWrapper');\n      this.components.footerPower = document.createElement('p');\n      this.components.footerPower.classList.add('footerWrapper__powerd');\n      this.components.footerPower.innerHTML = 'Create by themafia98 (Pavel P)';\n\n      for (var i = 0; i < 3; i++) {\n        var li = document.createElement('li');\n        var link = document.createElement('a');\n        link.setAttribute('href', \"#!\".concat(this.menu[i]));\n        link.dataset.menu = this.menu[i];\n        link.innerHTML = this.menu[i];\n        li.appendChild(link);\n        this.components.navigator.appendChild(li);\n      }\n\n      this.showLoadingButton();\n      this.components.nav.appendChild(this.components.navigator);\n      this.components.footerWrapper.appendChild(this.components.footerPower);\n      this.components.wrapperHeader.appendChild(this.components.title);\n      this.components.wrapperHeader.appendChild(this.components.nav);\n      this.components.footer.appendChild(this.components.footerWrapper);\n      this.components.header.appendChild(this.components.wrapperHeader);\n      this.ctx.appendChild(this.components.header);\n      this.ctx.appendChild(this.components.contentSection);\n      this.ctx.appendChild(this.components.footer);\n      this.content = document.querySelector('.content');\n    }\n  }, {\n    key: \"showNews\",\n    value: function showNews() {\n      var _this2 = this;\n\n      var db = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n      this.content.innerHTML = '';\n      this.items = document.querySelectorAll('div.article-col').length - 1;\n      this.newsSection = [];\n      this.countShow = 18;\n      this.news = db;\n\n      if (this.items === this.itemCountDB) {\n        this.customElements(document.querySelector('.loadingNewsBtn'), 'delete');\n      } else this.showLoadingButton();\n\n      var countArticle = Math.ceil(this.countShow / 3);\n      var num = 0;\n\n      for (var j = 0; j < countArticle + 1; j++) {\n        var section = document.createElement('section');\n        this.newsSection.push(section);\n      }\n\n      ;\n      var length = this.countShow + this.lengthLoading;\n\n      for (var i = 0; i < length; i++) {\n        if (this.news.length === 0) break;\n        var read = document.createElement('a');\n        var article = document.createElement('div');\n        var img = document.createElement('img');\n        img.src = this.news[i].urlToImage ? this.news[i].urlToImage : 'img/technology.jpg';\n        img.classList.add('topic-image');\n        var content = document.createElement('p');\n        content.classList.add('article__content');\n        article.classList.add('article-col');\n        article.classList.add('rel-col');\n\n        if (i === 0) {\n          read.href = this.news[i].url;\n          read.classList.add('hot-article__content__read');\n          read.setAttribute('target', '_blank');\n          read.innerHTML = 'Читать';\n          this.newsSection[i].classList.add('hot-topic');\n          content.classList.add('hot-topic_content');\n          img.classList.add('hot-image');\n        } else {\n          read.href = this.news[i].url;\n          read.setAttribute('target', '_blank');\n          read.classList.add('article__content__read');\n        }\n\n        content.innerHTML = this.news[i].description != '' && this.news[i].description != null ? this.news[i].description : this.news[i].title;\n        article.appendChild(img);\n        article.appendChild(content);\n        article.appendChild(read);\n\n        if (this.lengthLoading > 0) {\n          !this.newsSection[num] && (this.newsSection[num] = document.createElement('section'));\n        }\n\n        this.newsSection[num].appendChild(article);\n        if (i % 3 === 0) num++;\n      }\n\n      this.newsSection.forEach(function (item) {\n        return _this2.components.contentSection.appendChild(item);\n      });\n      this.components.contentSection.appendChild(this.components.loadMoreBox);\n      this.ctx.insertBefore(this.components.contentSection, this.components.header.nextSibling);\n    }\n  }, {\n    key: \"checkState\",\n    value: function checkState(pages) {\n      pages.currentState === 'about' && this.showAbout();\n      pages.currentState === 'contact' && this.showContact();\n      (pages.currentState === 'main' || '') && this.showNews(this.news);\n    }\n  }, {\n    key: \"showAbout\",\n    value: function showAbout() {\n      this.content.innerHTML = '';\n      var titleState = document.createElement('h2');\n      titleState.classList.add('state-title');\n      titleState.innerHTML = 'About';\n      var aboutWrapper = document.createElement('div');\n      aboutWrapper.classList.add('aboutWrapper');\n      var aboutArticle = document.createElement('p');\n      aboutArticle.classList.add('aboutArticle');\n      aboutArticle.innerHTML = 'This is a test project. Use a <a href = \"https://newsapi.org/\">News API</a>.';\n      var aboutMe = document.createElement('p');\n      aboutMe.classList.add('aboutMe');\n      aboutMe.innerHTML = 'My name is Pavel Petrovich and i like <strong>JavaScript</strong>.';\n      var imageJs = document.createElement('img');\n      imageJs.classList.add('imagesAbout');\n      imageJs.src = 'img/javascript.png';\n      aboutWrapper.appendChild(aboutArticle);\n      aboutWrapper.appendChild(aboutMe);\n\n      imageJs.onload = function () {\n        return aboutWrapper.appendChild(imageJs);\n      };\n\n      this.content.appendChild(titleState);\n      this.content.appendChild(aboutWrapper);\n    }\n  }, {\n    key: \"showContact\",\n    value: function showContact() {\n      this.content.innerHTML = '';\n      var titleState = document.createElement('h2');\n      titleState.classList.add('state-title');\n      titleState.innerHTML = 'Contact';\n      var aboutWrapper = document.createElement('div');\n      aboutWrapper.classList.add('aboutWrapper');\n      var aboutArticle = document.createElement('p');\n      aboutArticle.classList.add('contact-links');\n      aboutArticle.innerHTML = '<a href = \"https://github.com/themafia98\"><i class=\"fab fa-github-square\"></i></a>' + ' <a href = \"https://www.linkedin.com/in/pavel-p-80887b151/\"><i class=\"fab fa-linkedin\"></i></a>';\n      var map = document.createElement('div');\n      map.setAttribute('id', 'map');\n      aboutWrapper.appendChild(aboutArticle);\n      this.content.appendChild(titleState);\n      this.content.appendChild(aboutWrapper);\n      this.content.appendChild(map);\n      var maps = News.mapInit();\n      var coords = JSON.parse(localStorage.coords);\n      var mapp = document.querySelector('.ol-viewport');\n      var currentMarker = document.createElement('div');\n      currentMarker.classList.add('markerCurrent');\n      var marker = document.createElement('div');\n      marker.classList.add('marker');\n      mapp.appendChild(currentMarker);\n      mapp.appendChild(marker);\n\n      if (!coords.error) {\n        var markerYour = new ol.Overlay({\n          position: ol.proj.fromLonLat([coords.longitude, coords.latitude]),\n          element: document.querySelector('.marker'),\n          positioning: 'bottom-center'\n        });\n        maps.addOverlay(markerYour);\n      } else document.querySelector('.marker').style.display = 'none';\n\n      var markerCurrent = new ol.Overlay({\n        position: ol.proj.fromLonLat([27.4998984, 53.9130256]),\n        element: document.querySelector('.markerCurrent'),\n        positioning: 'bottom-center'\n      });\n      maps.addOverlay(markerCurrent);\n    }\n  }, {\n    key: \"showLoader\",\n    value: function showLoader() {\n      var app = document.getElementById('newsApp');\n      var loadWrapper = document.createElement('div');\n      loadWrapper.classList.add('loadingWrapper');\n      var load = document.createElement('img');\n      load.classList.add('loader');\n      load.src = 'img/loading.gif';\n      loadWrapper.appendChild(load);\n      this.ctx.insertBefore(loadWrapper, this.components.header.nextSibling);\n    }\n  }]);\n\n  return ViewNews;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/view.js?");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style/main.scss?");

/***/ }),

/***/ "./src/style/media.scss":
/*!******************************!*\
  !*** ./src/style/media.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style/media.scss?");

/***/ }),

/***/ "./src/style/value.scss":
/*!******************************!*\
  !*** ./src/style/value.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style/value.scss?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/bundle.js */\"./src/js/bundle.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/bundle.js?");

/***/ })

/******/ });
//# sourceMappingURL=http://localhost:5500/bundle.webpack.js.map