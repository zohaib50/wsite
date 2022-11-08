"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Auth_child_profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/child/profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/child/profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  name: "profile",
  data: function data() {
    return {
      change: {
        current_password: null,
        new_password: null,
        new_confirm_password: null
      }
    };
  },
  mounted: function mounted() {
    this.$store.commit("setErrors", {});
    window.scrollTo(0, 0);
  },
  methods: {
    changePassword: function changePassword() {
      var _this = this;
      axios.post('/customer/change-password', this.change).then(function (response) {
        if (response.status == 200) {
          document.getElementById('closeChangePassword').click();
          _this.change.current_password = null;
          _this.change.new_password = null;
          _this.change.new_confirm_password = null;
          _this.$toasted.global.changePassword();
        }
      })["catch"](function (errors) {});
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)("auth", ["user"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["errors"]))
});

/***/ }),

/***/ "./resources/js/components/Auth/child/profile.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Auth/child/profile.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _profile_vue_vue_type_template_id_7beb45ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=7beb45ba&scoped=true& */ "./resources/js/components/Auth/child/profile.vue?vue&type=template&id=7beb45ba&scoped=true&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/child/profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_vue_vue_type_template_id_7beb45ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _profile_vue_vue_type_template_id_7beb45ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7beb45ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/child/profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/child/profile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Auth/child/profile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/child/profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/child/profile.vue?vue&type=template&id=7beb45ba&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Auth/child/profile.vue?vue&type=template&id=7beb45ba&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_7beb45ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_7beb45ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_7beb45ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=template&id=7beb45ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/child/profile.vue?vue&type=template&id=7beb45ba&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/child/profile.vue?vue&type=template&id=7beb45ba&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/child/profile.vue?vue&type=template&id=7beb45ba&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "dashboard-body" }, [
    _c("h3", [_vm._v("Profile:")]),
    _vm._v(" "),
    _c("div", { staticClass: "d-flex bd-highlight" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "p-2 bd-highlight" }),
      _vm._v(" "),
      _c("div", { staticClass: "p-2 flex-grow-1 bd-highlight" }, [
        _vm._v(_vm._s(_vm.user.name)),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "d-flex bd-highlight" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "p-2 bd-highlight" }),
      _vm._v(" "),
      _c("div", { staticClass: "p-2 flex-grow-1 bd-highlight" }, [
        _vm._v(_vm._s(_vm.user.email)),
      ]),
    ]),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "changePassword",
          tabindex: "-1",
          "aria-labelledby": "changePasswordLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "div",
                { staticClass: "tab-content", attrs: { id: "myTabContent" } },
                [
                  _c(
                    "section",
                    { staticClass: "contractor-form-area p-0 bg-white" },
                    [
                      _c(
                        "form",
                        {
                          attrs: {
                            method: "POST",
                            enctype: "multipart/form-data",
                          },
                          on: {
                            submit: function ($event) {
                              $event.preventDefault()
                              return _vm.changePassword.apply(null, arguments)
                            },
                          },
                        },
                        [
                          _c("div", { staticClass: "row mt-3" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-12 col-md-12 col-12" },
                              [
                                _c("label", { staticClass: "form-label" }, [
                                  _vm._v("Old Password"),
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.change.current_password,
                                      expression: "change.current_password",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.errors.current_password,
                                  },
                                  attrs: { type: "password" },
                                  domProps: {
                                    value: _vm.change.current_password,
                                  },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.change,
                                        "current_password",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _vm.errors.current_password
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.current_password[0]
                                          ) +
                                            "\n                                        "
                                        ),
                                      ]
                                    )
                                  : _c("div", [_vm._v("  ")]),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-12 col-md-12 col-12" },
                              [
                                _c("label", { staticClass: "form-label" }, [
                                  _vm._v("New Password"),
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.change.new_password,
                                      expression: "change.new_password",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.errors.new_password,
                                  },
                                  attrs: { type: "password" },
                                  domProps: { value: _vm.change.new_password },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.change,
                                        "new_password",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _vm.errors.new_password
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.new_password[0]) +
                                            "\n                                        "
                                        ),
                                      ]
                                    )
                                  : _c("div", [_vm._v("  ")]),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-12 col-md-12 col-12" },
                              [
                                _c("label", { staticClass: "form-label" }, [
                                  _vm._v("Confirm New Password"),
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.change.new_confirm_password,
                                      expression: "change.new_confirm_password",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.errors.new_confirm_password,
                                  },
                                  attrs: { type: "password" },
                                  domProps: {
                                    value: _vm.change.new_confirm_password,
                                  },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.change,
                                        "new_confirm_password",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _vm.errors.new_confirm_password
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.new_confirm_password[0]
                                          ) +
                                            "\n                                        "
                                        ),
                                      ]
                                    )
                                  : _c("div", [_vm._v("  ")]),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("button", { staticClass: "btn btn-submit" }, [
                            _vm._v("Submit"),
                          ]),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 bd-highlight" }, [
      _c("h5", [_vm._v("Name:")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 bd-highlight" }, [
      _c("h5", [_vm._v("E-mail:")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex bd-highlight" }, [
      _c("div", {}, [
        _c("h5", [
          _c(
            "a",
            {
              attrs: {
                href: "#",
                "data-bs-toggle": "modal",
                "data-bs-target": "#changePassword",
              },
            },
            [_vm._v("Change Your Password")]
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Change Password")]),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          id: "closeChangePassword",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);