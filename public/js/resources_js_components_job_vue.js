"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_job_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/job.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/job.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-star-rating */ "./node_modules/vue-star-rating/dist/VueStarRating.common.js");
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_star_rating__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "job",
  data: function data() {
    return {
      limit: 100,
      job: null,
      rating: null,
      message: null,
      ratingData: null
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)("auth", ["user"])),
  mounted: function mounted() {
    this.getjob();
    window.scrollTo(0, 0);
  },
  methods: {
    getjob: function getjob() {
      var _this = this;
      axios.get('/customer/job/' + this.$route.params.id).then(function (response) {
        console.log(response.data);
        _this.job = response.data;
        _this.getRating();
      })["catch"](function (error) {});
    },
    getRating: function getRating() {
      var _this2 = this;
      axios.get('/customer/inquiry/rating?userId=' + this.job.merchent.id + '&customerId=' + this.user.id + '&inquiryId=' + this.job.id + '&limit=' + this.limit).then(function (response) {
        _this2.ratingData = response.data;
        console.log(response);
      })["catch"](function (error) {});
    },
    postRating: function postRating() {
      var _this3 = this;
      axios.post('/customer/inquiry/rating', {
        'customer_id': this.user.id,
        'user_id': this.job.merchent.id,
        'inquiry_id': this.job.id,
        'rating': this.rating,
        'message': this.message
      }).then(function (response) {
        _this3.getRating();
        _this3.rating = null;
        _this3.message = null;
        console.log(response);
      });
    }
  },
  components: {
    StarRating: (vue_star_rating__WEBPACK_IMPORTED_MODULE_0___default())
  }
});

/***/ }),

/***/ "./resources/js/components/job.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/job.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _job_vue_vue_type_template_id_5ccd7542_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job.vue?vue&type=template&id=5ccd7542&scoped=true& */ "./resources/js/components/job.vue?vue&type=template&id=5ccd7542&scoped=true&");
/* harmony import */ var _job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job.vue?vue&type=script&lang=js& */ "./resources/js/components/job.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _job_vue_vue_type_template_id_5ccd7542_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _job_vue_vue_type_template_id_5ccd7542_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5ccd7542",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/job.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/job.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/job.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./job.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/job.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_job_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/job.vue?vue&type=template&id=5ccd7542&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/job.vue?vue&type=template&id=5ccd7542&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_job_vue_vue_type_template_id_5ccd7542_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_job_vue_vue_type_template_id_5ccd7542_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_job_vue_vue_type_template_id_5ccd7542_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./job.vue?vue&type=template&id=5ccd7542&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/job.vue?vue&type=template&id=5ccd7542&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/job.vue?vue&type=template&id=5ccd7542&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/job.vue?vue&type=template&id=5ccd7542&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "main",
      { attrs: { id: "main-content" } },
      [
        _c("div", { staticClass: "container m-5" }, [
          _c(
            "div",
            { staticClass: "mt-5" },
            [
              _vm.ratingData.data.length == 0
                ? _c("div", [
                    _c("h2", { staticClass: "my-3" }, [
                      _vm._v("Please give your feedback:"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        staticClass: "form-horizontal",
                        attrs: { method: "post" },
                        on: {
                          submit: function ($event) {
                            $event.preventDefault()
                            return _vm.postRating.apply(null, arguments)
                          },
                        },
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-8 my-3" },
                            [
                              _c("star-rating", {
                                attrs: { "show-rating": false },
                                model: {
                                  value: _vm.rating,
                                  callback: function ($$v) {
                                    _vm.rating = $$v
                                  },
                                  expression: "rating",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("div", { staticClass: "col-md-8 my-3" }, [
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.message,
                                  expression: "message",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                placeholder:
                                  "Please enter your feedback here...",
                                rows: "5",
                              },
                              domProps: { value: _vm.message },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.message = $event.target.value
                                },
                              },
                            }),
                          ]),
                        ]),
                        _vm._v(" "),
                        _vm._m(1),
                      ]
                    ),
                  ])
                : _vm._l(_vm.ratingData.data, function (item, index) {
                    return _c("div", { staticClass: "row my-3" }, [
                      _c("div", { staticClass: "col-md-8" }, [
                        _vm._m(2, true),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "rating-content" },
                          [
                            _c("div", [
                              _c("h5", [_vm._v(_vm._s(item.customer.name))]),
                            ]),
                            _vm._v(" "),
                            _c("star-rating", {
                              attrs: {
                                "read-only": true,
                                "star-size": 30,
                                "show-rating": true,
                              },
                              model: {
                                value: item.rating,
                                callback: function ($$v) {
                                  _vm.$set(item, "rating", $$v)
                                },
                                expression: "item.rating",
                              },
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "my-3" }, [
                              _c("p", [_vm._v(_vm._s(item.message))]),
                            ]),
                          ],
                          1
                        ),
                      ]),
                    ])
                  }),
            ],
            2
          ),
        ]),
        _vm._v(" "),
        _c("companies"),
        _vm._v(" "),
        _c("social-media"),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "banner-area", attrs: { id: "banner-area" } },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "page-title" }, [
            _c("h1", [_vm._v("Job Rating")]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "button",
          { staticClass: "btn btn-feedback", attrs: { type: "submit" } },
          [_vm._v("Save")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h2", { staticClass: "my-3" }, [_vm._v("Thanks for Rating:")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);