(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <app-googlemap></app-googlemap> -->\n<!-- <app-page-menu></app-page-menu> -->\n\n<!-- <app-create-user></app-create-user> -->\n<router-outlet></router-outlet>\n      <!-- <roter-outlet></roter-outlet> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _components_googlemap_googlemap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/googlemap/googlemap.component */ "./src/app/components/googlemap/googlemap.component.ts");
/* harmony import */ var _components_page_menu_page_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-menu/page-menu.component */ "./src/app/components/page-menu/page-menu.component.ts");
/* harmony import */ var _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create-user/create-user.component */ "./src/app/components/create-user/create-user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_survey_survey_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/survey/survey.component */ "./src/app/components/survey/survey.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: "", component: _components_page_menu_page_menu_component__WEBPACK_IMPORTED_MODULE_8__["PageMenuComponent"] },
    { path: "Login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
    { path: "createuser", component: _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_9__["CreateUserComponent"] },
    { path: "Survey", component: _components_survey_survey_component__WEBPACK_IMPORTED_MODULE_11__["SurveyComponent"] },
    { path: "Contact", component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"] },
    { path: "user", component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: "Search", component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
        children: [
            { path: "googlemap", component: _components_googlemap_googlemap_component__WEBPACK_IMPORTED_MODULE_7__["GooglemapComponent"] },
        ]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
                _components_googlemap_googlemap_component__WEBPACK_IMPORTED_MODULE_7__["GooglemapComponent"],
                _components_page_menu_page_menu_component__WEBPACK_IMPORTED_MODULE_8__["PageMenuComponent"],
                _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_9__["CreateUserComponent"],
                _components_survey_survey_component__WEBPACK_IMPORTED_MODULE_11__["SurveyComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_15__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes),
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: ''
                })
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo{ background: #e2e2e2; }\n.serviceBox{\n    color: #606060;\n    padding: 0 10px 60px;\n    background-color: #F9A11C;\n    border: 1px solid transparent;\n    border-radius: 20px;\n    margin: 80px 0 30px;\n    position: relative;\n }\n.serviceBox .service-content{\n   text-align: center;\n    padding: 15px 20px 30px;\n    margin-top: -80px;\n    border-radius: 25px;\n    background-color: #fff;\n    position: relative;\n    transition:all 0.3s;\n }\n.serviceBox .service-content:hover{\n   box-shadow: 0 0 20px -5px #000;\n }\n.serviceBox .service-content:after{\n    content: '';\n    height: 50px;\n    width: 50px;\n    border: 25px solid transparent;\n    border-top: 25px solid #fff;\n    -webkit-transform:translateX(-50%);\n            transform:translateX(-50%);\n    position: absolute;\n    bottom: -50px;\n    left: 50%;\n}\n.serviceBox .service-icon{\n    display: inline-block;\n    color: #F9A11C;\n    font-size: 90px;\n    margin-bottom: 10px;\n    transition: all 0.3s ease 0s;\n}\n.serviceBox:hover .service-icon{\n    -webkit-transform:rotateX(360deg);\n            transform:rotateX(360deg);\n}\n.serviceBox .title{\n    font-size: 18px;\n    font-weight: 600;\n    text-transform: uppercase;\n    margin:0 0 10px;\n}\n.serviceBox .description{\n    font-size: 15px;\n    line-height: 25px;\n    margin: 0;\n}\n.serviceBox .read-more{\n    display: block;\n    width: 60%;\n    font-size: 15px;\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    color: #fff;\n    padding: 10px 0;\n    background-color: #6D4D42;\n    border-radius: 15px;\n    -webkit-transform:translateX(-50%);\n            transform:translateX(-50%);\n    transition:all 0.3s ease 0s;\n    position: absolute;\n    left: 50%;\n    bottom: -20px;\n}\n.serviceBox .read-more:hover{\n    text-decoration: none;\n    letter-spacing: 2px;\n    box-shadow: 0 0 10px #000;\n}\n.serviceBox.green{background-color: #44BB85;}\n.serviceBox.green .service-icon{color: #44BB85;}\n.serviceBox.green .read-more{background-color: #007A6D;}\n.serviceBox.blue{background-color: #36BFC5;}\n.serviceBox.blue .service-icon{color: #36BFC5;}\n.serviceBox.blue .read-more{background-color: #015F65;}\n.serviceBox.red{background-color: #f23d3a;}\n.serviceBox.red .service-icon{color: #f23d3a;}\n.serviceBox.red .read-more{background-color: #ad0e0c;}\n@media only screen and (max-width:990px){\n    .serviceBox{ margin-bottom: 60px; }\n    .serviceBox .service-content{padding: 20px 15px 30px;}\n}\n@media only screen and (max-width:767px){\n    .serviceBox{ margin-bottom: 130px; }\n}"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-3 col-sm-6\">\n            <div class=\"serviceBox\">\n                <div class=\"service-content\">\n                  <div class=\"service-icon\">\n                      <i class=\"fa fa-globe\"></i>\n                  </div>\n                    <h3 class=\"title\">Web Design</h3>\n                    <p class=\"description\">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.\n                    </p>\n                </div>\n                <a class=\"read-more\" href=\"\">Read More</a>\n            </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6\">\n          <div class=\"serviceBox green\">\n              <div class=\"service-content\">\n                <div class=\"service-icon\">\n                    <i class=\"fa fa-users\"></i>\n                </div>\n                  <h3 class=\"title\">Web Development</h3>\n                  <p class=\"description\">\n                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.\n                  </p>\n              </div>\n              <a class=\"read-more\" href=\"\">Read More</a>\n          </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/create-user/create-user.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/create-user/create-user.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-bg{\n    background: #e4e6e6;\n}\nform{\n    font-family: 'Kanit', sans-serif !important;\n}\n.form-horizontal .header{\n    background: #3f9cb5;\n    padding: 13px  25px;\n    font-size: 30px;\n    color: #fff;\n    text-align: center;\n    text-transform: uppercase;\n    border-radius: 3px 3px 0 0;\n}\n.form-horizontal .heading{\n    font-size: 16px;\n    color: #3f9cb5;\n    margin: 10px 0 20px 0;\n    text-transform: capitalize;\n}\n.form-horizontal .form-content{\n    padding: 25px;\n    background: #fff;\n}\n.form-horizontal .form-control{\n    padding: 12px 16px 12px 39px;\n    height: 50px;\n    font-size: 14px;\n    color: #2b2a2a;\n    border: none;\n    border-bottom: 2px solid #ccc;\n    border-radius: 0;\n    box-shadow: none;\n    margin-bottom: 15px;\n}\n.form-horizontal .form-control:focus{\n    border-color: #3f9cb5;\n    box-shadow: none;\n}\n.form-horizontal .control-label{\n    font-size: 17px;\n    color: #ccc;\n    position: absolute;\n    top: 5px;\n    /* left: 27px; */\n    text-align: center;\n}\n.form-horizontal textarea.form-control{\n    resize: vertical;\n    height: 130px;\n}\n.form-horizontal .btn{\n    font-size: 18px;\n    color: #4e4e4e;\n    float: right;\n    margin: 10px 0;\n    border: 2px solid #ccc;\n    border-radius: 0;\n    padding: 10px 25px;\n    transition: all 0.5s ease 0s;\n}\n.form-horizontal .btn:hover{\n    background: #fff;\n    border-color: #3f9cb5;\n}\n.btn{\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: #fe6d6d;\n    border-radius: 0;\n    position: relative;\n}\n.btn:hover{ color: #fe6d6d; }\n.btn:after{\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    border: 2px solid #fe6d6d;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    transition: width 0.2s ease 0s, height 0.2s ease 0.1s, border-top-width 0.1s ease 0.2s, margin 0.2s ease 0s;\n}\n.btn:hover:after{\n    width: 60%;\n    height: 0;\n    border-width: 0 2px 2px;\n    margin: 0 20%;\n    transition: width 0.2s ease 0.2s, height 0.2s ease 0.1s, border-top-width 0.1s ease 0s, margin 0.2s ease 0.2s;\n}\n.btn.blue,\n.btn.blue:hover{ color: #22ace3; }\n.btn.blue:after{ border-color: #22ace3; }\n.btn.orange,\n.btn.orange:hover{ color: #f56f17; }\n.btn.orange:after{ border-color: #f56f17; }\n.btn.green,\n.btn.green:hover{ color: #47cf77; }\n.btn.green:after{ border-color: #47cf77; }\n@media only screen and (max-width: 767px){\n    .btn{ margin-bottom: 20px; }\n}"

/***/ }),

/***/ "./src/app/components/create-user/create-user.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-user/create-user.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"form-bg\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"col-md-offset-3\">\n                <form class=\"form-horizontal\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n                    <div class=\"header\">ข้อมูลคลินิก</div>\n                    <div class=\"form-content\">\n                        <h4 class=\"heading\">รายละเอียด</h4>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-6\">\n                                <label class=\"control-label\" for=\"exampleInputName2\"><i class=\"fa fa-user\"></i></label>\n                                <input type=\"text\" class=\"form-control\" name=\"Clinicname\" placeholder=\"ชื่อคลินิค\"  [(ngModel)]=\"model.Clinicname\" #Clinicname=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && Clinicname.invalid }\" required />\n                            </div>\n                            <div class=\"col-sm-6\">\n                               \n                                <label class=\"control-label\" for=\"exampleInputName2\"><i class=\"fa fa-lock\"></i></label>\n                              \n                                <input type=\"text\" class=\"form-control\" name=\"Customername\"  placeholder=\"ชื่อผู้ประกอบการ\" [(ngModel)]=\"model.Customername\" #Customername=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && Customername.invalid }\" required />\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-12\">\n                                <label class=\"control-label\" for=\"exampleInputName2\"><i class=\"fa fa-lock\"></i></label>\n                                <input type=\"text\" class=\"form-control\" name=\"Operatorname\"  placeholder=\"ชื่อผู้ดำเนินการ\" [(ngModel)]=\"model.Operatorname\" #Operatorname=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && Operatorname.invalid }\" required />\n              \n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-12\">\n                                <label class=\"control-label\" for=\"exampleInputName2\"><i class=\"fa fa-lock\"></i></label>\n                                <input type=\"text\" class=\"form-control\" name=\"Address\"  placeholder=\"ที่ตั้ง\" [(ngModel)]=\"model.Address\" #Address=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && Address.invalid }\" required />\n              \n                            </div>\n                        </div>\n                        <h4 class=\"heading\">เพิ่มเติม</h4>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-6\">\n                                <label class=\"control-label\" for=\"exampleInputName2\"><i class=\"fa fa-user\"></i></label>\n                                <input class=\"form-control\" id=\"exampleInputName2\" placeholder=\"Adults\" type=\"number\">\n                            </div>\n \n                            <div class=\"col-sm-6\">\n                                <label class=\"control-label\" for=\"exampleInputName2\"><i class=\"fa fa-user\"></i></label>\n                                <input class=\"form-control\" id=\"exampleInputName2\" placeholder=\"Children\" type=\"number\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-6\">\n                                <label class=\"control-label\" for=\"exampleInputName2\"><i class=\"fa fa-calendar\"></i></label>\n                                <input class=\"form-control\" id=\"exampleInputName2\" placeholder=\"Check-in date (dd/mm/yy)\" type=\"text\">\n                            </div>\n \n                            <div class=\"col-sm-6\">\n                                <label class=\"control-label\" for=\"exampleInputName2\"><i class=\"fa fa-calendar\"></i></label>\n                                <input class=\"form-control\" id=\"exampleInputName2\" placeholder=\"Check-out date (dd/mm/yy)\" type=\"text\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-12\">\n                                <label class=\"control-label\" for=\"exampleInputName2\"><i class=\"fa fa-calendar\"></i></label>\n                                <textarea class=\"form-control\" placeholder=\"Additional Message\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"clearfix\">\n                            <button type=\"submit\" class=\"btn btn-default blue\"> Register</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/create-user/create-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/create-user/create-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent() {
        this.model = {};
    }
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUserComponent.prototype.onSubmit = function () {
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
        jquery__WEBPACK_IMPORTED_MODULE_1__["ajax"]({
            type: "POST",
            dataType: 'json',
            url: 'http://localhost:7777/books',
            data: this.model,
            success: function (data) { alert('data: ' + data); }
        });
    };
    CreateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/components/create-user/create-user.component.html"),
            styles: [__webpack_require__(/*! ./create-user.component.css */ "./src/app/components/create-user/create-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/components/googlemap/googlemap.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/googlemap/googlemap.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 300px;\n  }\n\n  *{\n    font-family: 'Kanit', sans-serif !important;\n}\n\n  .ct{\n  text-align: -webkit-center;\n}"

/***/ }),

/***/ "./src/app/components/googlemap/googlemap.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/googlemap/googlemap.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<!-- <button (click)=\"getLocation()\">Get Location</button> -->\n<p id=\"demo\"></p>\n\n\n\n\n<h1 class=\"ct\">{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n\n\n"

/***/ }),

/***/ "./src/app/components/googlemap/googlemap.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/googlemap/googlemap.component.ts ***!
  \*************************************************************/
/*! exports provided: GooglemapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglemapComponent", function() { return GooglemapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GooglemapComponent = /** @class */ (function () {
    function GooglemapComponent() {
        this.title = 'สถานคลินิคที่ตรวจ';
        this.lat = 0;
        this.lng = 0;
    }
    GooglemapComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.geolocationPosition = position,
                    console.log(position);
                // this.lat = position.coords.latitude
                // this.lng = position.coords.longitude
                _this.lat = 14.598382;
                _this.lng = 100.447521;
            }, function (error) {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            });
        }
        ;
    };
    GooglemapComponent.prototype.getLocation = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.geolocationPosition = position,
                    console.log(position);
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            }, function (error) {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            });
        }
        ;
    };
    GooglemapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-googlemap',
            template: __webpack_require__(/*! ./googlemap.component.html */ "./src/app/components/googlemap/googlemap.component.html"),
            styles: [__webpack_require__(/*! ./googlemap.component.css */ "./src/app/components/googlemap/googlemap.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GooglemapComponent);
    return GooglemapComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/page-menu/page-menu.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/page-menu/page-menu.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  * {\n    font-family: 'Kanit', sans-serif;\n   }\n   .fs-1{\n       font-size: 0.8em;\n   }\n   .bg-menu {\n    /* The image used */\n    background-image: url(\"http://www.getwellmedical.ca/asset/img/clinic-slider02.jpg\");\n\n    /* Full height */\n    height: 50%; \n\n    /* Center and scale the image nicely */\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n   /* ล่าง */\n   .box{\n    overflow: hidden;\n    box-shadow: 0 0 3px rgba(0,0,0,0.3);\n    position: relative;\n}\n   .box img{\n    width: 100%;\n    height: auto;\n}\n   .box .box-content{\n    padding: 25% 10px;\n    text-align: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    opacity: 0;\n    z-index: 1;\n    transition: all 0.5s ease 0s;\n}\n   .box:hover .box-content{\n    opacity: 1;\n    transition-delay: 0.2s;\n}\n   .box:before,\n.box:after,\n.box .box-content:before,\n.box .box-content:after{\n    content: \"\";\n    width: 50%;\n    height: 50%;\n    background: rgba(4, 36, 66, 0.8);\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    -webkit-transform: scale(0.05);\n            transform: scale(0.05);\n    transition: all 0.3s ease 0s;\n}\n   .box:after{\n    left: auto;\n    right: 0;\n    transition-delay: 0.1s;\n}\n   .box .box-content:before,\n.box .box-content:after{\n    top: auto;\n    bottom: 0;\n    z-index: -1;\n    transition-delay: 0.2s;\n}\n   .box .box-content:after{\n    left: auto;\n    right: 0;\n    transition-delay: 0.3s;\n}\n   .box:hover:before,\n.box:hover:after,\n.box:hover .box-content:before,\n.box:hover .box-content:after{\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n   .box .title{\n    font-size: 30px;\n    color: #f5bc24;\n    margin: 0 0 10px 0;\n}\n   .box .post{\n    display: block;\n    font-size: 14px;\n    color: #fff;\n    font-weight: 700;\n    font-style: italic;\n    margin: 0 0 10px 0;\n}\n   .box .icon{\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n   .box .icon li{\n    display: inline-block;\n    margin: 0 5px 0 0;\n}\n   .box .icon li a{\n    display: block;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    font-size: 15px;\n    color: #f5bc24;\n    border: 1px solid #f5bc24;\n    transition: all 0.3s ease 0s;\n}\n   .box .icon li a:hover{\n    text-decoration: none;\n    border-radius: 50%;\n    background: #f5bc24;\n    color: #fff;\n}\n   @media only screen and (max-width:990px){\n    .box{ margin-bottom: 30px; }\n}\n   .grad {\n    background-image: linear-gradient(to bottom right, #217d96, #217d96);\n  }\n   .circle{ /* ชื่อคลาสต้องตรงกับ <img class=\"circle\"... */\n    height: auto;  /* ความสูงปรับให้เป็นออโต้ */\n    width: auto;  /* ความสูงปรับให้เป็นออโต้ */\n    border-radius: 50%; /* ปรับเป็น 50% คือความโค้งของเส้นขอบ*/\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* เงาของรูป */\n}\n   .icon{\n    display: inline-block;\n    width: 100px;\n    height: 100px;\n    line-height: 100px;\n    border-radius: 50%;\n    margin: auto;\n    font-size: 30px;\n    color: #581c22;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 25px;\n}"

/***/ }),

/***/ "./src/app/components/page-menu/page-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/page-menu/page-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<nav class=\"navbar navbar-expand-lg navbar-dark grad\">\n  <a class=\"navbar-brand w-50\" href=\"#\" >\n    <span class=\"\"><img class=\"w-25 circle\" src=\"http://164.115.41.179/d756/sites/default/files/styles/event_list/public/events/aopnoPvF.png?itok=l1MnCFC9\"/></span> CLINIC TRACKING\n  </a>\n\n  <button class=\"navbar-toggler\" type=\"button\"\n          (click)=\"toggleNavbar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n  \n  <div class=\"collapse navbar-collapse\"\n       [ngClass]=\"{ 'show': navbarOpen }\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['googlemap']\">รายละเอียด</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">ติดต่อ</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<!-- \n<div class=\"container bg-menu\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n          <div class=\"card p-3 mt-4 shadow-lg p-3 mb-5  rounded bg-success\" [routerLink]=\"['createuser']\">\n             <h5 class=\"text-light mx-auto\"><i class=\"fas fa-plus-square p-3 \"></i>สร้างข้อมูลผู้ประกอบการ</h5>\n            </div>\n      </div>\n      <div class=\"col-sm\">\n          <div class=\"card p-3  mt-4 shadow-lg p-3 mb-5  rounded bg-success\"  [routerLink]=\"['Search']\">\n              <h5 class=\"text-light mx-auto\"><i class=\"fas fa-search p-3\"></i>ค้นหาข้อมูล</h5>\n          </div>\n      </div>\n\n      <div class=\"col-sm\">\n          <div class=\"card p-3  mt-4 shadow-lg p-3 mb-5  rounded bg-success\"  [routerLink]=\"['Contact']\">\n              <h5 class=\"text-light mx-auto\"><i class=\"fas fa-search p-3\"></i>ติดต่อ</h5>\n          </div>\n      </div>\n     \n    </div>\n  </div> -->\n\n\n\n  <div class=\"container p-3\">\n      <div class=\"row\">\n          <div class=\"col-md-4 col-sm-6\">\n              <div class=\"box\">\n                  <img src=\"https://www.acibademcityclinic.bg/public/files/home-page/city-clinic-vl-8905.jpg\" alt=\"\">\n                  <div class=\"box-content\"  >\n                      <h3 class=\"title\" >สร้างข้อมูลผู้ประกอบการ</h3>\n                      <span class=\"post\" [routerLink]=\"['createuser']\">เริ่ม Click!</span>\n                      <ul class=\"icon\">\n                          <li><a href=\"#\" class=\"fa fa-search\"></a></li>\n                          <li><a href=\"#\" class=\"fa fa-link\"></a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6\">\n              <div class=\"box\">\n                  <img src=\"http://skincancer.blob.core.windows.net/assets/uploads/img/general%20content/clinic.jpg\" alt=\"\">\n                  <div class=\"box-content\" >\n                      <h3 class=\"title\">ค้นหาข้อมูล</h3>\n                      <span class=\"post\" [routerLink]=\"['Search']\">เริ่ม Click!</span>\n                      <ul class=\"icon\">\n                          <li><a href=\"#\" class=\"fa fa-search\"></a></li>\n                          <li><a href=\"#\" class=\"fa fa-link\"></a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6\">\n              <div class=\"box\">\n                  <img src=\"http://newsofthesouth.com/wp-content/uploads/2017/10/clinic.jpg\" alt=\"\">\n                  <div class=\"box-content\" >\n                      <h3 class=\"title\">ติดต่อ</h3>\n                      <span class=\"post\" [routerLink]=\"['Contact']\">เริ่ม Click!</span>\n                      <ul class=\"icon\">\n                          <li><a href=\"#\" class=\"fa fa-search\"></a></li>\n                          <li><a href=\"#\" class=\"fa fa-link\"></a></li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/page-menu/page-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/page-menu/page-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: PageMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMenuComponent", function() { return PageMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageMenuComponent = /** @class */ (function () {
    function PageMenuComponent() {
        this.navbarOpen = false;
    }
    PageMenuComponent.prototype.ngOnInit = function () {
    };
    PageMenuComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    PageMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-menu',
            template: __webpack_require__(/*! ./page-menu.component.html */ "./src/app/components/page-menu/page-menu.component.html"),
            styles: [__webpack_require__(/*! ./page-menu.component.css */ "./src/app/components/page-menu/page-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageMenuComponent);
    return PageMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-bg{\n    background: #e4e6e6;\n}\n\nform{\n    font-family: 'Kanit', sans-serif !important;\n}\n\n.form-horizontal .header{\n    background: #3f9cb5;\n    padding: 13px  25px;\n    font-size: 30px;\n    color: #fff;\n    text-align: center;\n    text-transform: uppercase;\n    border-radius: 3px 3px 0 0;\n}\n\n.form-horizontal .heading{\n    font-size: 16px;\n    color: #3f9cb5;\n    margin: 10px 0 20px 0;\n    text-transform: capitalize;\n}\n\n.form-horizontal .form-content{\n    padding: 25px;\n    background: #fff;\n}\n\n.form-horizontal .form-control{\n    padding: 12px 16px 12px 39px;\n    height: 50px;\n    font-size: 14px;\n    color: #2b2a2a;\n    border: none;\n    border-bottom: 2px solid #ccc;\n    border-radius: 0;\n    box-shadow: none;\n    margin-bottom: 15px;\n}\n\n.form-horizontal .form-control:focus{\n    border-color: #3f9cb5;\n    box-shadow: none;\n}\n\n.form-horizontal .control-label{\n    font-size: 17px;\n    color: #ccc;\n    position: absolute;\n    top: 5px;\n    /* left: 27px; */\n    text-align: center;\n}\n\n.form-horizontal textarea.form-control{\n    resize: vertical;\n    height: 130px;\n}\n\n.form-horizontal .btn{\n    font-size: 18px;\n    color: #4e4e4e;\n    float: right;\n    margin: 10px 0;\n    border: 2px solid #ccc;\n    border-radius: 0;\n    padding: 10px 25px;\n    transition: all 0.5s ease 0s;\n}\n\n.form-horizontal .btn:hover{\n    background: #fff;\n    border-color: #3f9cb5;\n}\n\n.btn{\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: #fe6d6d;\n    border-radius: 0;\n    position: relative;\n}\n\n.btn:hover{ color: #fe6d6d; }\n\n.btn:after{\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    border: 2px solid #fe6d6d;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    transition: width 0.2s ease 0s, height 0.2s ease 0.1s, border-top-width 0.1s ease 0.2s, margin 0.2s ease 0s;\n}\n\n.btn:hover:after{\n    width: 60%;\n    height: 0;\n    border-width: 0 2px 2px;\n    margin: 0 20%;\n    transition: width 0.2s ease 0.2s, height 0.2s ease 0.1s, border-top-width 0.1s ease 0s, margin 0.2s ease 0.2s;\n}\n\n.btn.blue,\n.btn.blue:hover{ color: #22ace3; }\n\n.btn.blue:after{ border-color: #22ace3; }\n\n.btn.orange,\n.btn.orange:hover{ color: #f56f17; }\n\n.btn.orange:after{ border-color: #f56f17; }\n\n.btn.green,\n.btn.green:hover{ color: #47cf77; }\n\n.btn.green:after{ border-color: #47cf77; }\n\n@media only screen and (max-width: 767px){\n    .btn{ margin-bottom: 20px; }\n}"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n  <!-- <app-survey [message]=\"message\"></app-survey> -->\n<div class=\"form-bg\">\n    <div class=\"\">\n        <div class=\"\">\n            <div class=\"col-md-offset-3\">\n                <form class=\"form-horizontal\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n                    <div class=\"header\">ค้นหา คลินิค</div>\n                    <div class=\"form-content\">\n                        <h4 class=\"heading\"></h4>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-6\">\n                                <label class=\"control-label\" for=\"exampleInputName2\"><i class=\"fa fa-user\"></i></label>\n                               \n                                <input placeholder=\"ชื่อคลินิก\" type=\"text\" class=\"form-control\" name=\"Clinicname\" [(ngModel)]=\"model.Clinicname\" #Clinicname=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && Clinicname.invalid }\"  />\n                                <div *ngIf=\"f.submitted && Clinicname.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"Clinicname.errors.required\">Clinic Name is required</div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                               \n                                <label class=\"control-label\" for=\"exampleInputName2\"><i class=\"fa fa-lock\"></i></label>\n                                \n                                <input placeholder=\"ชื่อผู้ประกอบการ\" type=\"text\" class=\"form-control\" name=\"Customername\" [(ngModel)]=\"model.Customername\" #Customername=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && Customername.invalid }\"  />\n                                <div *ngIf=\"f.submitted && Customername.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"Customername.errors.required\">Customername is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-12\">\n                                <label class=\"control-label\" for=\"exampleInputName2\"><i class=\"fa fa-lock\"></i></label>\n                               \n                                <input placeholder=\"ชื่อผู้ดำเนินการ\" type=\"text\" class=\"form-control\" name=\"Operatorname\" [(ngModel)]=\"model.Operatorname\" #Operatorname=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && Operatorname.invalid }\"  />\n                                <div *ngIf=\"f.submitted && Operatorname.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"Operatorname.errors.required\">Operatorname is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-12\">\n                                <label class=\"control-label\" for=\"exampleInputName2\"><i class=\"fa fa-lock\"></i></label>\n                                <input placeholder=\"สถานที่\" type=\"text\" class=\"form-control\" name=\"Address\" [(ngModel)]=\"model.Address\" #Address=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && Address.invalid }\"  />\n                                <div *ngIf=\"f.submitted && Address.invalid\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"Address.errors.required\">Address is required</div>\n                                </div>\n                            </div>\n                            <div class=\"clearfix\"  >\n                                <button type=\"submit\"  class=\"btn btn-default blue\" > ค้นหา</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n            \n        <!-- <form name=\"form-horizontal\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n            <div class=\"form-group\">\n                <label for=\"firstName\">First Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && firstName.invalid }\" required />\n                <div *ngIf=\"f.submitted && firstName.invalid\" class=\"invalid-feedback\">\n                    <div *ngIf=\"firstName.errors.required\">First Name is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"lastName\">Last Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && lastName.invalid }\" required />\n                <div *ngIf=\"f.submitted && lastName.invalid\" class=\"invalid-feedback\">\n                    <div *ngIf=\"lastName.errors.required\">Last Name is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required email />\n                <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n                    <div *ngIf=\"email.errors.required\">Email is required</div>\n                    <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required minlength=\"6\" />\n                <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n                    <div *ngIf=\"password.errors.required\">Password is required</div>\n                    <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\">Register</button>\n            </div>\n        </form>  -->\n            </div>\n        </div>\n    </div>\n</div>\n<div>\n\n  </div>\n<h2>{{Clinicnames}}</h2>\n<!-- <ul>\n    <li *ngFor=\"let item of searctServiceData\">{{item.title}}</li>\n</ul> -->\n\n<!-- <app-survey></app-survey>\n<br>\n<app-googlemap></app-googlemap>\n -->\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/DataService */ "./src/app/services/DataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {AppChildSurvey} from '';
var SearchComponent = /** @class */ (function () {
    function SearchComponent(ApiService, router, DataService) {
        this.ApiService = ApiService;
        this.router = router;
        this.DataService = DataService;
        this.message = "test";
        this.model = {};
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onSubmit = function () {
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
        var _this = this;
        this.ApiService.getSearch(this.model.Clinicname).subscribe(function (Response) {
            // this.ResponseResult = Response;
            _this.DataService.searchDetail = Response;
        });
        //  this.DataService.searchDetail = this.model; 
        this.router.navigate(['/Survey']);
        // this.router.navigate(['/Survey']);
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_DataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SearchComponent);
    return SearchComponent;
}());

// interface Datum {
//   id: number;
//   first_name: string;
//   last_name: string;
//   avatar: string;
// }
// interface ClsResponseAPI {
//   page: number;
//   per_page: number;
//   total: number;
//   total_pages: number;
//   data: Datum[];
// }


/***/ }),

/***/ "./src/app/components/survey/survey.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/survey/survey.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* *{\n    font-family: 'Kanit', sans-serif !important;\n} */\n\n.main-timeline{\n    overflow: hidden;\n    position: relative;\n    font-family: 'Kanit', sans-serif !important;\n}\n\n.main-timeline:before{\n    content: \"\";\n    width: 3px;\n    height: 100%;\n    background: #fae1e4;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n\n.main-timeline .timeline{\n    width: 50%;\n    float: right;\n    padding: 50px 50px 10px 50px;\n    margin-top: 50px;\n    position: relative;\n}\n\n.main-timeline .timeline:before{\n    content: attr(data-heading);\n    width: 70px;\n    height: 35px;\n    line-height: 35px;\n    border-radius: 20px;\n    background: #f1083e;\n    text-align: center;\n    font-size: 20px;\n    font-weight: 600;\n    color: #fff;\n    position: absolute;\n    top: 3px;\n    left: -32px;\n}\n\n.main-timeline .timeline:after{\n    content: \"\";\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: #fae1e4;\n    border: 2px solid #3c1525;\n    position: absolute;\n    bottom: 53px;\n    left: -8px;\n}\n\n.main-timeline .timeline-content{\n    display: block;\n    padding: 25px 150px 25px 25px;\n    border-radius: 0 70px 70px 0;\n    background: #3c1525;\n    color: #fff;\n    position: relative;\n}\n\n.main-timeline .timeline-content:hover{ text-decoration: none; }\n\n.main-timeline .timeline-content:before{\n    content: \"\";\n    border-bottom: 20px solid transparent;\n    border-right: 62px solid #3c1525;\n    position: absolute;\n    bottom: 14px;\n    left: -53px;\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg);\n}\n\n.main-timeline .icon{\n    display: inline-block;\n    width: 100px;\n    height: 100px;\n    line-height: 100px;\n    border-radius: 50%;\n    background: #fff;\n    text-align: center;\n    margin: auto;\n    font-size: 30px;\n    color: #581c22;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 25px;\n}\n\n.main-timeline .title{\n    font-size: 18px;\n    font-weight: 600;\n    text-transform: uppercase;\n    margin: 0 0 5px 0;\n}\n\n.main-timeline .description{ font-size: 14px; }\n\n.main-timeline .timeline:nth-child(2n){ padding: 50px 50px 10px 50px; }\n\n.main-timeline .timeline:nth-child(2n):before{\n    left: auto;\n    right: -40px;\n}\n\n.main-timeline .timeline:nth-child(2n):after{\n    left: auto;\n    right: -10px;\n}\n\n.main-timeline .timeline:nth-child(2n) .timeline-content{\n    border-radius:70px 0 0 70px;\n    padding: 25px  25px 25px 150px;\n}\n\n.main-timeline .timeline:nth-child(2n) .timeline-content:before{\n    border-right: 68px solid #3c1525;\n    bottom: 21px;\n    left: auto;\n    right: -50px;\n    -webkit-transform: rotate(-226deg);\n            transform: rotate(-226deg);\n}\n\n.main-timeline .timeline:nth-child(2n) .icon{\n    right: auto;\n    left: 25px;\n}\n\n.main-timeline .timeline:nth-child(2){ margin-top: 210px; }\n\n.main-timeline .timeline:nth-child(odd){ margin: -220px 0 50px 0; }\n\n.main-timeline .timeline:nth-child(even){ margin-bottom: 210px; }\n\n.main-timeline .timeline:first-child,\n.main-timeline .timeline:last-child:nth-child(even){ margin: 0 0 30px 0; }\n\n.main-timeline .timeline:last-child:nth-child(even){ margin-bottom: 0; }\n\n@media only screen and (max-width: 1200px){\n    .main-timeline .timeline{ padding: 50px 0 10px 50px; }\n    .main-timeline .timeline:nth-child(2n){ padding: 50px 50px 10px 0; }\n    .main-timeline .timeline-content{ padding: 25px 130px 25px 25px;}\n    .main-timeline .timeline:nth-child(2n) .timeline-content{ padding: 25px 25px 25px 130px; }\n}\n\n@media only screen and (max-width: 990px){\n    .main-timeline .timeline,\n    .main-timeline .timeline:nth-child(2n){ padding-top: 20px; }\n    .main-timeline .icon{ right: 15px; }\n    .main-timeline .timeline:nth-child(2n) .icon{ left: 15px; }\n}\n\n@media only screen and (max-width: 767px){\n    .main-timeline:before,\n    .main-timeline .timeline:after,\n    .main-timeline .timeline .timeline-content:before{ display: none; }\n    .main-timeline .timeline,\n    .main-timeline .timeline:nth-child(even),\n    .main-timeline .timeline:nth-child(odd){\n        width: 100%;\n        float: none;\n        padding: 50px 0 0 0;\n        margin: 0 0 30px 0;\n    }\n    .main-timeline .timeline:before,\n    .main-timeline .timeline:nth-child(2n):before{\n        left: 0;\n        -webkit-transform: translateX(0);\n                transform: translateX(0);\n    }\n    .main-timeline .timeline:nth-child(2n) .timeline-content{\n        padding: 25px 120px 25px 25px;\n        border-radius: 0 70px 70px 0;\n    }\n    .main-timeline .timeline:nth-child(2n) .icon{\n        right: 20px;\n        left: auto;\n    }\n}\n\n.circle{ /* ชื่อคลาสต้องตรงกับ <img class=\"circle\"... */\n    height: auto;  /* ความสูงปรับให้เป็นออโต้ */\n    width: auto;  /* ความสูงปรับให้เป็นออโต้ */\n    border-radius: 50%; /* ปรับเป็น 50% คือความโค้งของเส้นขอบ*/\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* เงาของรูป */\n}\n"

/***/ }),

/***/ "./src/app/components/survey/survey.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/survey/survey.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <!-- <h2>Hi {{ResultSearch}}</h2> -->\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"main-timeline\">\n                <div class=\"timeline\" data-heading=\"2018\">\n                    <a href=\"#\" class=\"timeline-content\">\n                        <span class=\"icon\"><img class=\"w-100 circle\" src=\"http://164.115.41.179/d756/sites/default/files/styles/event_list/public/events/aopnoPvF.png?itok=l1MnCFC9\"/></span>\n                        <div class=\"inner-content\">\n                       \n                            <h1 class=\"title text font-weight-bold text-warning\">ประวัติการตรวจ</h1>\n\n                     \n                            <div *ngFor=\"let item of ResultSearch | keyvalue\">\n                                    <b>{{item.key}}</b> : \n                                    <ng-container *ngIf=\"item.key ==='Image';else second\">\n                                    <img class=\"w-100 border border-white\" src={{item.value}}/>\n                          </ng-container> \n                             <ng-template #second>{{item.value}}\n                        </ng-template>\n\n                                </div>\n                                \n                      \n                          \n                        </div>\n                    </a>\n                </div>\n                <div class=\"timeline\" data-heading=\"2017\">\n                    <a href=\"#\" class=\"timeline-content\">\n                        <span class=\"icon\"><img class=\"w-100 circle\" src=\"http://164.115.41.179/d756/sites/default/files/styles/event_list/public/events/aopnoPvF.png?itok=l1MnCFC9\"/></span>\n                        <div class=\"inner-content\">\n                            <h3 class=\"title\">ตรวจครั้งที่ 1</h3>\n                            <strong><h4 class=\" text-danger\">\n                                ไม่ผ่านการ \n                            </h4></strong>\n                        </div>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<br>\n<app-googlemap></app-googlemap>"

/***/ }),

/***/ "./src/app/components/survey/survey.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/survey/survey.component.ts ***!
  \*******************************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/DataService */ "./src/app/services/DataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(DataService) {
        this.DataService = DataService;
    }
    SurveyComponent.prototype.ngOnInit = function () {
        //   $(document).ready(function(){
        var _this = this;
        // });
        setTimeout(function () {
            _this.ResultSearch = _this.DataService.searchDetail;
            console.log(_this.ResultSearch);
        }, 1000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SurveyComponent.prototype, "message", void 0);
    SurveyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-survey',
            template: __webpack_require__(/*! ./survey.component.html */ "./src/app/components/survey/survey.component.html"),
            styles: [__webpack_require__(/*! ./survey.component.css */ "./src/app/components/survey/survey.component.css")]
        }),
        __metadata("design:paramtypes", [_services_DataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SurveyComponent);
    return SurveyComponent;
}());

// interface Datum {
//   id: number;
//   first_name: string;
//   last_name: string;
//   avatar: string;
// }
// interface ClsResponseAPI {
//   page: number;
//   per_page: number;
//   total: number;
//   total_pages: number;
//   data: Datum[];
// }


/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 300px;\n  }"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>Click the button to get your coordinates.</p>\n\n<!-- <button onclick='getLocation()'>Try It</button> -->\n<button (click)=\"getLocation()\">Click me!</button>\n<p id=\"demo\"></p>\n\n\n\n\n<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n\n\n\n<script>\n  var x = document.getElementById(\"demo\");\n  \n  function getLocation() {\n      if (navigator.geolocation) {\n          navigator.geolocation.getCurrentPosition(showPosition);\n      } else { \n          x.innerHTML = \"Geolocation is not supported by this browser.\";\n      }\n  }\n  \n  function showPosition(position) {\n      x.innerHTML = \"Latitude: \" + position.coords.latitude + \n      \"<br>Longitude: \" + position.coords.longitude;\n  }\n  </script> \n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.title = 'จุดตรวจ สถานคลินิค';
        this.lat = 0;
        this.lng = 0;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.name = "Nopphadon";
        this.lastName = "Saengaroon";
        this.address = {
            province: "Tak",
            street: "Tak Sin Road",
            city: "Tak",
            poscode: "63000",
            phone: "086-4147900",
        };
        this.skills = ["Football", "Running", "swimming"];
    };
    UserComponent.prototype.addSkill = function (skill) {
        this.skills.unshift(skill);
        return false;
    };
    UserComponent.prototype.removeSkill = function (skill) {
        var _this = this;
        this.skills.forEach(function (element, index) {
            if (element == skill) {
                _this.skills.splice(index, 1);
            }
        });
    };
    UserComponent.prototype.getLocation = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.geolocationPosition = position,
                    console.log(position);
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            }, function (error) {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            });
        }
        ;
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/services/DataService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/DataService.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());

// interface Datum {
//   id: number;
//   first_name: string;
//   last_name: string;
//   avatar: string;
// }
// interface ClsResponseAPI {
//   page: number;
//   per_page: number;
//   total: number;
//   total_pages: number;
//   data: Datum[];
// }


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getSearch = function (Clinicname) {
        // API จริง
        // this json plea
        //return this.http.get("https://jsonplaceholder.typicode.com/posts/"+Clinicname).map((res)=>res.json());
        //this reqres.in
        //use ใช้ได้
        // return this.http.get(" https://reqres.in/api/users?page="+Clinicname).map((res)=>res.json());
        //test
        return this.http.get("https://apissj-api.azurewebsites.net/books/" + Clinicname).map(function (res) { return res.json(); });
        console.log(Clinicname);
        //API localhost สำหรับเทส
        //return this.http.get("http://localhost:3000/books"+Clinicname).map((res)=>res.json());
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ApiService);
    return ApiService;
}());

// import { Injectable} from '@angular/core';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// @Injectable()
// export class HostelService {
//     constructor( private _http: Http) { }            
//     getHostel(id): Observable<any> {
//         return this._http
//             .get('http://localhost/api/hostel/' + id)
//             .map(response => { return response.json(); });
//     }
// }


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Downloads\APP-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map