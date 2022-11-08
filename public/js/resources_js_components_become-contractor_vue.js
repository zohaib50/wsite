"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_become-contractor_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/become-contractor.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/become-contractor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  name: "become-contractor",
  data: function data() {
    return {
      contractor: {
        name: null,
        email: null,
        profile_image: null,
        govt_photo: null,
        business_name: null,
        business_address: null,
        details: null,
        password: null,
        password_confirmation: null
      }
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["errors"])),
  mounted: function mounted() {
    this.$store.commit("setErrors", {});
    window.scrollTo(0, 0);
  },
  methods: {
    profileFileUpload: function profileFileUpload() {
      this.contractor.profile_image = this.$refs.file1.files[0];
    },
    govtFileUpload: function govtFileUpload() {
      this.contractor.govt_photo = this.$refs.file2.files[0];
    },
    createCustomer: function createCustomer() {
      var _this = this;
      var formData = new FormData();
      formData.append('name', this.contractor.name);
      formData.append('email', this.contractor.email);
      formData.append('profile_image', this.contractor.profile_image);
      formData.append('govt_photo', this.contractor.govt_photo);
      formData.append('business_name', this.contractor.business_name);
      formData.append('business_address', this.contractor.business_address);
      formData.append('details', this.contractor.details);
      formData.append('password', this.contractor.password);
      formData.append('password_confirmation', this.contractor.password_confirmation);
      var otherdata = this.contractor;
      console.log(formData);
      axios.post('/customer/contractor/create', {
        formData: formData,
        otherdata: otherdata
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        if (response.status == 200) {
          _this.contractor.name = null;
          _this.contractor.email = null;
          _this.contractor.profile_image = null;
          _this.contractor.govt_photo = null;
          _this.contractor.business_name = null;
          _this.contractor.business_address = null;
          _this.contractor.details = null;
          _this.contractor.password = null;
          _this.contractor.password_confirmation = null;
          _this.$router.push('contractors');
          _this.$toasted.global.becomeContractor();
        }
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./resources/js/components/become-contractor.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/become-contractor.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _become_contractor_vue_vue_type_template_id_09e2fc00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./become-contractor.vue?vue&type=template&id=09e2fc00&scoped=true& */ "./resources/js/components/become-contractor.vue?vue&type=template&id=09e2fc00&scoped=true&");
/* harmony import */ var _become_contractor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./become-contractor.vue?vue&type=script&lang=js& */ "./resources/js/components/become-contractor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _become_contractor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _become_contractor_vue_vue_type_template_id_09e2fc00_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _become_contractor_vue_vue_type_template_id_09e2fc00_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "09e2fc00",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/become-contractor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/become-contractor.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/become-contractor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_become_contractor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./become-contractor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/become-contractor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_become_contractor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/become-contractor.vue?vue&type=template&id=09e2fc00&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/become-contractor.vue?vue&type=template&id=09e2fc00&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_become_contractor_vue_vue_type_template_id_09e2fc00_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_become_contractor_vue_vue_type_template_id_09e2fc00_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_become_contractor_vue_vue_type_template_id_09e2fc00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./become-contractor.vue?vue&type=template&id=09e2fc00&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/become-contractor.vue?vue&type=template&id=09e2fc00&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/become-contractor.vue?vue&type=template&id=09e2fc00&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/become-contractor.vue?vue&type=template&id=09e2fc00&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        _c("section", { staticClass: "contractor-form-area" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "form-area" }, [
              _c("div", { staticClass: "row justify-content-center" }, [
                _c("div", { staticClass: "col-lg-7 col-md-7 col-12" }, [
                  _c("div", { staticClass: "form-box" }, [
                    _c("h1", [
                      _vm._v(
                        "If you want to Become A Contractor fill this form!"
                      ),
                    ]),
                    _vm._v(" "),
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
                            return _vm.createCustomer.apply(null, arguments)
                          },
                        },
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-lg-6 col-md-6 col-12" },
                            [
                              _c("label", { staticClass: "form-label" }, [
                                _vm._v("Your Name"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.contractor.name,
                                    expression: "contractor.name",
                                  },
                                ],
                                staticClass: "form-control",
                                class: { "is-invalid": _vm.errors.name },
                                attrs: { type: "text" },
                                domProps: { value: _vm.contractor.name },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.contractor,
                                      "name",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.name
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.name[0]))]
                                  )
                                : _c("div", [_vm._v("   ")]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-6 col-md-6 col-12" },
                            [
                              _c("label", { staticClass: "form-label" }, [
                                _vm._v("E-mail"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.contractor.email,
                                    expression: "contractor.email",
                                  },
                                ],
                                staticClass: "form-control",
                                class: { "is-invalid": _vm.errors.email },
                                attrs: { type: "emial" },
                                domProps: { value: _vm.contractor.email },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.contractor,
                                      "email",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.email
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.email[0]))]
                                  )
                                : _c("div", [_vm._v("   ")]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-6 col-md-6 col-12" },
                            [
                              _c("label", { staticClass: "form-label" }, [
                                _vm._v("Your Profile Picture"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                ref: "file1",
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.profile_image,
                                },
                                attrs: { type: "file" },
                                on: { change: _vm.profileFileUpload },
                              }),
                              _vm._v(" "),
                              _vm.errors.profile_image
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.profile_image[0])
                                      ),
                                    ]
                                  )
                                : _c("div", [_vm._v("   ")]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-6 col-md-6 col-12" },
                            [
                              _c("label", { staticClass: "form-label" }, [
                                _vm._v("Government Photo"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                ref: "file2",
                                staticClass: "form-control",
                                class: { "is-invalid": _vm.errors.govt_photo },
                                attrs: { type: "file" },
                                on: { change: _vm.govtFileUpload },
                              }),
                              _vm._v(" "),
                              _vm.errors.govt_photo
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.govt_photo[0]))]
                                  )
                                : _c("div", [_vm._v("   ")]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-6 col-md-6 col-12" },
                            [
                              _c("label", { staticClass: "form-label" }, [
                                _vm._v("Business Name"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.contractor.business_name,
                                    expression: "contractor.business_name",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.business_name,
                                },
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.contractor.business_name,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.contractor,
                                      "business_name",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.business_name
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.business_name[0])
                                      ),
                                    ]
                                  )
                                : _c("div", [_vm._v("   ")]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-6 col-md-6 col-12" },
                            [
                              _c("label", { staticClass: "form-label" }, [
                                _vm._v("Business Address"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.contractor.business_address,
                                    expression: "contractor.business_address",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.business_address,
                                },
                                attrs: { type: "text" },
                                domProps: {
                                  value: _vm.contractor.business_address,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.contractor,
                                      "business_address",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.business_address
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.business_address[0])
                                      ),
                                    ]
                                  )
                                : _c("div", [_vm._v("   ")]),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("label", { staticClass: "form-label" }, [
                              _vm._v("Contractor Details"),
                            ]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.contractor.details,
                                  expression: "contractor.details",
                                },
                              ],
                              staticClass: "form-control",
                              class: { "is-invalid": _vm.errors.details },
                              domProps: { value: _vm.contractor.details },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.contractor,
                                    "details",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.details
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(_vm._s(_vm.errors.details[0])),
                                ])
                              : _c("div", [_vm._v("   ")]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-6 col-md-6 col-12" },
                            [
                              _c("label", { staticClass: "form-label" }, [
                                _vm._v("Password"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.contractor.password,
                                    expression: "contractor.password",
                                  },
                                ],
                                staticClass: "form-control",
                                class: { "is-invalid": _vm.errors.password },
                                attrs: { type: "password" },
                                domProps: { value: _vm.contractor.password },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.contractor,
                                      "password",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.password
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.password[0]))]
                                  )
                                : _c("div", [_vm._v("   ")]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-lg-6 col-md-6 col-12" },
                            [
                              _c("label", { staticClass: "form-label" }, [
                                _vm._v("Confirm Password"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.contractor.password_confirmation,
                                    expression:
                                      "contractor.password_confirmation",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "password" },
                                domProps: {
                                  value: _vm.contractor.password_confirmation,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.contractor,
                                      "password_confirmation",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.password_confirmation
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.password_confirmation[0]
                                        )
                                      ),
                                    ]
                                  )
                                : _c("div", [_vm._v("   ")]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-submit",
                            attrs: { type: "submit" },
                          },
                          [_vm._v("Submit")]
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("top-rating"),
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
            _c("h1", [_vm._v("Become A Contractor")]),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);