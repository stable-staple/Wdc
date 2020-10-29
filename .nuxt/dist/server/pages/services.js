exports.ids = [2];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/services.vue?vue&type=template&id=2fcff9db&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"services-block"},[_vm._ssrNode(((_vm.modalOpened)?("<div class=\"services-block__modal\"><div class=\"services-block__modal__inner\"><div class=\"close-modal\"><svg width=\"24\" height=\"24\" viewbox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0.75\" y=\"1.81055\" width=\"1.4\" height=\"30.0003\" transform=\"rotate(-45 0.75 1.81055)\" fill=\"#272727\"></rect><rect x=\"21.9641\" y=\"0.75\" width=\"1.4\" height=\"30.0003\" transform=\"rotate(45 21.9641 0.75)\" fill=\"#272727\"></rect></svg></div><h3 class=\"services-block__modal__title\">"+_vm._ssrEscape(_vm._s(_vm.modalTitle))+"</h3><h4 class=\"services-block__modal__desc\">Записаться на прием</h4><form service-block__modal__form><div style=\"display: inline-block;\"><label for=\"name\" class=\"services-block__modal__label\">Имя</label><input type=\"text\" name=\"name\" spellcheck=\"false\" required=\"required\" class=\"services-block__modal__field\"></div><div style=\"display: inline-block;\"><label for=\"phone\" class=\"services-block__modal__label\">Телефон</label><input type=\"text\" name=\"phone\" required=\"required\" class=\"services-block__modal__field margin-right-del\"></div><div style=\"display: inline-block;\"><label for=\"phone\" class=\"services-block__modal__label\">Дата</label><input type=\"date\" name=\"date\" class=\"services-block__modal__field\"></div><div style=\"display: inline-block;\"><label for=\"phone\" class=\"services-block__modal__label\">Время</label><input type=\"time\" class=\"services-block__modal__field margin-right-del\"></div><input type=\"text\" placeholder=\"Ваше сообщение...\" autocomplete=\"off\" class=\"services-block__modal__field                 services-block__modal__field--full-width\"><button class=\"services-sections-apply__apply-btn\">Записаться на прием</button><p class=\"services-block__modal__confidential\">Нажимая кнопку «Записаться на прием», вы соглашаетесь с конфиденциальностью персональной информации</p></form></div></div>"):"<!---->")),_vm._ssrNode("<div class=\"service-info\">","</div>",[_vm._ssrNode("<span class=\"service-info__breadcrumbs\">","</span>",[_c('NuxtLink',{staticClass:"breadcrumbs__link",attrs:{"to":"/"}},[_vm._v("Главная  ")]),_vm._ssrNode("/  Детская стоматология")],2),_vm._ssrNode("<h1 class=\"services-block__title\">"+_vm._ssrEscape(_vm._s(_vm.servicesSection[_vm.currentSection].name))+"</h1><ul class=\"services-list\">"+(_vm._ssrList((_vm.servicesSection[_vm.currentSection].servicesList),function(service){return ("<li class=\"services-list__elem\"><span>"+_vm._ssrEscape(_vm._s(service.name))+"<span class=\"service__price\">"+_vm._ssrEscape(_vm._s(service.price))+"</span></span></li>")}))+"</ul><hr class=\"service-section__sep\"><img"+(_vm._ssrAttr("src",__webpack_require__(59)))+" width=\"853px\" height=\"524px\" class=\"service-info__img\"><p class=\"service-section__desc\">"+_vm._ssrEscape(_vm._s(_vm.servicesSection[_vm.currentSection].description))+"</p><span class=\"service-info__more\">Читать полностью</span><hr class=\"service-section__sep\">")],2),_vm._ssrNode("<div class=\"services__right\"><div class=\"services-sections-list\">"+(_vm._ssrList((_vm.servicesSection),function(section,ind){return ("<a href=\"#\""+(_vm._ssrClass("services-sections-list__elem",{'services-sections-list__elem--active': _vm.currentSection == ind}))+">"+_vm._ssrEscape(_vm._s(section.name))+"</a>")}))+"</div><div class=\"services-sections-apply\"><p class=\"services-sections-apply__desc\">Вы можете записаться на прием по телефону или оставить заявку</p><a href=\"tel:+7(499) 372 94 90\" class=\"services-sections-apply__tel\">+7 (499) 372 94 90</a><button class=\"services-sections-apply__apply-btn\">Оставить заявку</button></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/services.vue?vue&type=template&id=2fcff9db&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/services.vue?vue&type=script&lang=js&
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
/* harmony default export */ var servicesvue_type_script_lang_js_ = ({
  data: function () {
    return {
      modalOpened: false,
      modalTitle: null,
      currentSection: 0,
      servicesSection: [{
        name: "Детская стоматология",
        description: "Детская стоматология На молодежной (West Dental Clinic) специализируется на здоровье зубов \
                        детей от младенчества до подросткового возраста. Наши врачи прекрасно понимают \
                        различия структуры зубов и полости рта у детей и взрослых. Они имеют те же знания \
                        и навыки, что и традиционные врачи-стоматологи, но дополнительно изучили способы \
                        и манипуляции, чтобы сделать посещение врача-стоматолога менее травмирующим для ребёнка.",
        servicesList: [{
          name: "Психологическая адаптация к стоматологическому приему детей",
          price: "1 500 руб"
        }, {
          name: "Постановка пломбы светового отверждения (молочный зуб)",
          price: "1 500 руб"
        }, {
          name: "Постановка пломбы светового отверждения (коренной зуб)",
          price: "1 500 руб"
        }, {
          name: "Удаление зубных отложений щеткой с профилактической пастой",
          price: "1 500 руб"
        }, {
          name: "Неинвазивный метод лечения Icon",
          price: "1 500 руб"
        }, {
          name: "Удаление молочного зуба 2-3 степени подвижности",
          price: "1 500 руб"
        }, {
          name: "Удаление молочного зуба с сохраненными корнями",
          price: "1 500 руб"
        }]
      }, {
        name: "Лечение зубов",
        description: "",
        servicesList: [{
          name: "Восстановление зуба пломбой с использованием материалов из фотоп.",
          price: "4 900 руб"
        }, {
          name: "Эндодонтическое лечение (лечение корневого канала зуба)",
          price: "1 500 руб"
        }, {
          name: "Лечение периодонтита",
          price: "1 500 руб"
        }, {
          name: "Эстетическая реставрация",
          price: "1 500 руб"
        }, {
          name: "Нехирургическое лечение при заболеваниях пародонта",
          price: "1 500 руб"
        }]
      }, {
        name: "Импланты и протезы",
        description: "",
        servicesList: [{
          name: "Установка имплантата Straumann",
          price: "55 000 руб"
        }, {
          name: "Установка мини-имплатата MDI",
          price: "25 000 руб"
        }, {
          name: "Операция направленной регенерации кости (НРК)",
          price: "48 000 руб"
        }, {
          name: "Операция открытого синус-лифтинга",
          price: "47 000 руб"
        }, {
          name: "Операция закрытого синус-лифтинга",
          price: "22 000 руб"
        }]
      }, {
        name: "Импланты и протезы"
      }, {
        name: "Импланты и протезы"
      }, {
        name: "Импланты и протезы"
      }, {
        name: "Импланты и протезы"
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/services.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_servicesvue_type_script_lang_js_ = (servicesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/services.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_servicesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "beb92502"
  
)

/* harmony default export */ var services = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7b073720", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgNiA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNS42OTM3MyA0LjI0M0wxLjQyMzE4IDYuMTgwNzllLTA4TC02LjIyNTMyZS0wOCAxLjQxNUwyLjg0NzM3IDQuMjQzTC0zLjExMDllLTA3IDcuMDcxTDEuNDIzMTggOC40ODZMNS42OTM3MyA0LjI0M1oiIGZpbGw9IiMwNDk4OTgiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/child_dent1.84097da.jpg";

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_services_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(12);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(62);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(47);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".services-block{margin-top:80px;margin-bottom:96px;display:flex}.services-block__modal{position:fixed;z-index:5;left:0;top:0;width:100vw;height:100vh;overflow:auto;background-color:rgba(0,0,0,.4)}.services-block__modal__inner{position:absolute;padding:56px 196px 102px 80px;width:1050px;height:674px;background-color:#fff;box-shadow:0 10px 10px rgba(0,0,0,.02),0 10px 40px rgba(0,0,0,.04),0 2px 6px rgba(0,0,0,.04),0 0 1px rgba(0,0,0,.04);border-radius:10px;left:50%;top:50%;z-index:6;transform:translate(-50%,-50%)}.services-block__modal__title{margin:0 0 12px;color:#272727;font-family:\"MontserratMedium\";font-weight:500;font-size:22px;line-height:48px}.services-block__modal__desc{font-family:\"MontserratRegular\";font-weight:400;font-size:16px;line-height:24px;margin:0 0 40px;color:#747376}.services-block__modal__field{display:block;width:331px;margin:0 80px 24px 0;height:41px;padding-bottom:20px;border-style:none none solid;border-bottom:1px solid rgba(116,115,118,.32)}.services-block__modal__field--full-width{width:100%;margin-bottom:56px}.services-block__modal__label{font-family:\"MontserratRegular\";font-size:12px;line-height:24px;color:#272727}.services-block__modal__confidential{color:#747376;margin:16px 0 0;opacity:.8;font-family:\"MontserratRegular\";font-size:12px;line-height:24px}.services-block__modal input[type=text]{font-family:\"MontserratMedium\";font-weight:500;font-size:16px;line-height:24px;color:#272727}.close-modal{position:absolute;top:40px;right:48px;cursor:pointer}.service-info{width:100%;margin-right:65px}.service-info__breadcrumbs{display:block;margin-bottom:48px;color:#272727;font-family:\"MontserratRegular\";font-size:14px;line-height:20px}.service-info__img{margin:0 0 32px}.service-info__more{display:inline-block;color:#272727;font-family:\"MontserratBold\";font-size:14px;line-height:17px;cursor:pointer}.service-info__more:after{content:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");margin-left:8px}.breadcrumbs__link{color:#272727;opacity:.48}.services-block__title{font-family:\"MontserratRegular\";font-size:48px;line-height:56px;color:#272727;margin:0 0 40px}.services-list{list-style:none;padding:0}.services-list__elem{font-family:\"MontserratRegular\";padding-left:41px;padding-right:49px;cursor:pointer;height:72px;border-radius:6px}.services-list__elem>span{color:#272727;line-height:72px;font-size:16px}.services-list__elem:hover{background:#f8f8f8}.services-list__elem:hover .service__price:after{opacity:1}li{position:relative}.service__price{float:right;font-family:\"MontserratBold\";font-style:normal}.service__price:after{content:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");margin-left:16px;transition:opacity .3s ease-in-out;opacity:0}.services__right{position:-webkit-sticky;position:sticky;align-self:flex-start;top:80px}.service-section__desc{margin:0 0 40px;font-family:\"MontserratRegular\";font-size:16px;line-height:32px;color:#272727}.service-section__sep{margin:88px 0}.services-sections-list{padding:0;top:140px;list-style:none;min-width:394px;font-size:14px;margin:0 0 32px;box-shadow:0 10px 10px rgba(0,0,0,.02),0 10px 40px rgba(0,0,0,.04),0 2px 6px rgba(0,0,0,.04),0 0 1px rgba(114,110,110,.04);border-radius:10px}.services-sections-list__elem{display:block;height:4em;padding-left:66px;line-height:4em;cursor:pointer;font-family:\"MontserratRegular\";color:#78797d}.services-sections-list__elem:hover{background:#f8f8f8}.services-sections-list__elem:hover:after{opacity:1}.services-sections-list__elem--active{background:#f8f8f8;color:#272727}.services-sections-list__elem--active:hover:after{opacity:0}.services-sections-list__elem:after{content:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");float:right;margin-right:50px;transition:opacity .3s ease-in-out;opacity:0}.services-sections-apply{width:394px;height:217px;background:#fff;padding:26px;box-shadow:0 10px 10px rgba(0,0,0,.02),0 10px 40px rgba(0,0,0,.04),0 2px 6px rgba(0,0,0,.04),0 0 1px rgba(0,0,0,.04);border-radius:10px}.services-sections-apply__desc{font-family:\"MontserratRegular\";font-size:14px;line-height:24px;margin:0 0 16px;color:#272727}.services-sections-apply__tel{display:inline-block;font-family:\"MontserratRegular\";font-weight:500;font-size:24px;line-height:32px;margin:0 0 20px;color:#272727}.services-sections-apply__apply-btn{height:49px;width:100%;font-family:\"MontserratBold\";cursor:pointer;background:#272727;border-radius:2px;font-size:14px;color:#fff}.margin-right-del{margin-right:-80px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTAuODY3NkwxMCA2Ljg0MTY3TDguNjY2MDQgNS41TDYgOC4xODQzTDMuMzMzOTYgNS41TDIgNi44NDE2N0w2IDEwLjg2NzZaIiBmaWxsPSIjMDQ5ODk4Ii8+Cjwvc3ZnPgo="

/***/ })

};;
//# sourceMappingURL=services.js.map