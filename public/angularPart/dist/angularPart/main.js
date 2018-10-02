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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'angularPart';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/wish-list/wish-list.component */ "./src/app/components/wish-list/wish-list.component.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _auth_guard_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth-guard.guard */ "./src/app/auth-guard.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], canActivate: [_auth_guard_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuardGuard"]] },
    { path: 'wishList', component: _components_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_8__["WishListComponent"], canActivate: [_auth_guard_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuardGuard"]] },
    { path: 'changePassword', component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"], canActivate: [_auth_guard_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuardGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_8__["WishListComponent"],
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _auth_guard_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuardGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth-guard.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function() { return AuthGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardGuard = /** @class */ (function () {
    function AuthGuardGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var token = JSON.parse(localStorage.getItem('isCustomer'));
        if (token != null) {
            this.auth.isLoggedIn(token.data).subscribe(function (flag) {
                _this.status = flag.status;
                if (!_this.status) {
                    localStorage.clear();
                    _this.router.navigateByUrl('/login');
                    return false;
                }
            });
            return true;
        }
        else if (token == null) {
            this.router.navigateByUrl('/login');
            return false;
        }
    };
    AuthGuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardGuard);
    return AuthGuardGuard;
}());



/***/ }),

/***/ "./src/app/components/change-password/change-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/change-password/change-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<div class=\"col-md-8 col-md-offset-3\" style=\"margin: auto\">\n<div class=\"card\">\n    <h4 class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">Change Your Password</h4>\n    <div class=\"card-body\">\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-4 text-center\">\n                <h4><b>Old Password:</b></h4>  \n            </div> \n            <div class=\"col-md-6\">    \n                <input class=\"form-control\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Enter old password\" required>\n            </div>\n            <div class=\"col-md-1\"></div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-4 text-center\">\n                <h4><b>New Password:</b></h4>  \n            </div> \n            <div class=\"col-md-6\">    \n                <input class=\"form-control\" type=\"password\" [(ngModel)]=\"user.npassword\" name=\"npassword\" placeholder=\"Enter new password\" required>\n            </div>\n            <div class=\"col-md-1\"></div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-4 text-center\">\n                <h4><b>Confirm New Password:</b></h4>  \n            </div> \n            <div class=\"col-md-6\">    \n                <input class=\"form-control\" type=\"password\" [(ngModel)]=\"temp.ncpassword\" name=\"ncpassword\" placeholder=\"Confirm new password\" required>\n            </div>\n            <div class=\"col-md-1\"></div>\n        </div>\n        \n            \n    \n<br>\n<div class=\"text-center\">\n    <button class=\"btn btn-warning\" (click)=\"onPasswordChange()\">Submit</button>\n</div>\n<br><br>\n</div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/change-password/change-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.user = {
            password: "",
            npassword: ""
        };
        this.temp = {
            ncpassword: ""
        };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.onPasswordChange = function () {
        var _this = this;
        var cpass = this.temp.ncpassword;
        if (this.user.password != '' && this.user.npassword != '' && this.temp.ncpassword != '') {
            if (this.user.npassword == cpass) {
                var token = JSON.parse(localStorage.getItem('isCustomer'));
                var data = {
                    _id: token._id,
                    password: this.user.password,
                    npassword: this.user.npassword
                };
                this.dataService.changePassword(token.data, data).subscribe(function (signal) {
                    if (signal.message == true) {
                        alert("Your password has been changed");
                        _this.router.navigateByUrl('/home');
                    }
                    if (signal.message == "loginError" || signal.message == 'headerUndefined') {
                        localStorage.clear();
                        alert('Login Timeout');
                        _this.router.navigateByUrl('/login');
                    }
                    else if (signal.message == 'fetchingError' || signal.message == 'You entered wrong old password' || signal.message == 'noUser') {
                        alert(signal.message);
                    }
                });
            }
            else {
                alert("mismatch confirm password");
            }
        }
        else {
            alert("Please fill all credentials");
        }
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/components/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/components/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<div class=\"well\">\n    <div class=\"col-md-11 col-md-offset-3\" style=\"margin: auto\">\n        <div class=\"card card-login mx-auto mt-5\">\n            <div class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">\n                <span class=\"fa fa-2x fa-money\"></span> \n              <h4>Item List</h4>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"table-responsive text-center\">\n                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                  <thead>\n                    <tr>\n                      \n                      <th class=\"text-center\">Product Name</th>\n                      <th class=\"text-center\">Product Price(in Rs)</th>\n                      <th class=\"text-center\">Actions</th>\n                    </tr>\n                  </thead>\n                  <tfoot>\n                    <tr>\n                      <th class=\"text-center\">Product Name</th>\n                      <th class=\"text-center\">Product Price(in Rs)</th>\n                      <th class=\"text-center\">Actions</th>\n                    </tr>\n                  </tfoot>\n                  \n                  <tbody>\n                    <tr *ngFor=\"let item of items\">\n                      <td class=\"text-primary\">{{ item.name }}</td>\n                      <td class=\"text-primary\">{{ item.price }}</td>\n                      <td>\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <button class=\"btn btn-success btn-block\" (click)=\"onClickBuy()\">Buy</button>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <button class=\"btn btn-info btn-block\" (click)=\"onAddWishList(item)\">Add to wishlist</button>\n                          </div>\n                        </div>                                            \n                     </td>\n                    </tr>\n                  </tbody>\n                </table>\n        </div>\n        </div>\n\n</div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, router, route) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.items = [];
        var token = JSON.parse(localStorage.getItem('isCustomer'));
        this.dataService.getItems(token.data).subscribe(function (items) {
            _this.items = items;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onClickBuy = function () {
        alert("Functionality is on hold");
    };
    HomeComponent.prototype.onAddWishList = function (item) {
        var token = JSON.parse(localStorage.getItem('isCustomer'));
        var item1 = { _id: "", name: "", price: "", customerId: "" };
        item1 = item;
        item1.customerId = token._id;
        this.dataService.addToWish(token.data, item).subscribe(function (signal) {
            if (signal.message == true) {
                alert("Item is successfully added to wish List");
            }
            if (signal.message != true) {
                alert(signal.message);
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btncolor{\r\n    background-color: #343a40!important;\r\n }\r\n .wordmargin{\r\n    margin-left: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0VBQ3RDO0NBQ0Q7SUFDRyxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuY29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwIWltcG9ydGFudDtcclxuIH1cclxuIC53b3JkbWFyZ2lue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"col-md-8 col-md-offset-3\" style=\"margin: auto\">\n  <div class=\"card card-login mx-auto mt-5\">\n    <h4 class=\"card-header text-center text-white bg-success\">Customer Login</h4>\n      <div class=\"card-body\">\n        <form  novalidate #f=\"ngForm\" (ngSubmit)=\"login(f)\">\n\n        \n            <label for=\"username\" class=\"wordmargin\"><b>Username</b></label>\n            <input type=\"text\" placeholder=\"Enter Username\" [(ngModel)]=\"user.email\" name=\"email\"  class=\"form-control\"\n            #userName=\"ngModel\"\n            required\n            >\n            <div *ngIf=\"userName.errors?.required && userName.touched\" class=\"alert alert-danger\">Username is Required</div>\n\n            <label for=\"password\" class=\"wordmargin\"><b>Password</b></label>\n            <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"user.password\" name=\"password\" class=\"form-control\"\n            #userPassword=\"ngModel\"\n            required\n            >\n            <div *ngIf=\"userPassword.errors?.required && userPassword.touched\" class=\"alert alert-danger\">Password is Required</div>\n            <br>\n            <div class=\"text-center\">\n              <button type=\"submit\" class=\"btn text-white btncolor\">Login</button>\n            </div>\n\n        </form>\n        <br>\n      </div>\n      </div>\n    </div>\n  </div>\n\n\n\n"

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
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LoginComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.user = {
            email: '',
            password: ''
        };
        var token = JSON.parse(localStorage.getItem('isCustomer'));
        if (token != null) {
            this.dataService.isLoggedIn(token.data).subscribe(function (signal) {
                if (signal.status != false && signal.message != 'headerUndefined') {
                    _this.router.navigateByUrl('/home');
                }
            });
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.user.email != '' && this.user.password != '') {
            this.dataService.login(this.user).subscribe(function (tokenfromapi) {
                console.log(tokenfromapi);
                _this.token = tokenfromapi.data;
                var _id = tokenfromapi._id;
                if (tokenfromapi.message == 'noUser') {
                    alert("Customer do not exist");
                }
                else if (tokenfromapi.message == 'wrongPassword') {
                    alert("Wrong Password");
                }
                else if (tokenfromapi.message == 'networkError') {
                    alert("There is a problem to fetch data");
                }
                else if (_this.token != undefined) {
                    localStorage.clear();
                    var customerLink = {
                        "visibility": "hidden"
                    };
                    localStorage.setItem('isCustomer', JSON.stringify(tokenfromapi));
                    localStorage.setItem('isCustomerLink', JSON.stringify(customerLink));
                    _this.router.navigateByUrl('/home');
                }
            });
        }
        else {
            if (this.user.email != '') {
                if (this.user.password == '') {
                    alert('Please Enter Password');
                }
            }
            if (this.user.password != '') {
                if (this.user.email == '') {
                    alert('Please Enter Email');
                }
            }
            if (this.user.email == '' && this.user.password == '') {
                alert('Please Enter Email & Password');
            }
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".use{\r\n  position: fixed;\r\n  background-color: #343a40!important;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n/* Dropdown Button */\r\n\r\n.dropbtn {\r\nbackground-color: #343a40!important;\r\ncolor: white;\r\npadding: 0px 45px 10px 40px;\r\nfont-size: 13px;\r\nborder: none;\r\n}\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n\r\n.dropdown {\r\nposition: relative;\r\ndisplay: inline-block;\r\n}\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n\r\n.dropdown-content {\r\ndisplay: none;\r\nposition: absolute;\r\nbackground-color:#343a40!important;\r\nmin-width: 130px;\r\nbox-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\nz-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n\r\n.dropdown-content a {\r\ncolor: black;\r\npadding: 12px 56px;\r\ntext-decoration: none;\r\ndisplay: block;\r\n}\r\n\r\n/* Change color of dropdown links on hover */\r\n\r\n.dropdown-content a:hover {background-color:#343a40!important;}\r\n\r\n/* Show the dropdown menu on hover */\r\n\r\n.dropdown:hover .dropdown-content {display: block;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixXQUFXO0NBQ1o7O0FBRUQscUJBQXFCOztBQUNyQjtBQUNBLG9DQUFvQztBQUNwQyxhQUFhO0FBQ2IsNEJBQTRCO0FBQzVCLGdCQUFnQjtBQUNoQixhQUFhO0NBQ1o7O0FBRUQsbUVBQW1FOztBQUNuRTtBQUNBLG1CQUFtQjtBQUNuQixzQkFBc0I7Q0FDckI7O0FBRUQsMENBQTBDOztBQUMxQztBQUNBLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsbUNBQW1DO0FBQ25DLGlCQUFpQjtBQUNqQiw2Q0FBNkM7QUFDN0MsV0FBVztDQUNWOztBQUVELCtCQUErQjs7QUFDL0I7QUFDQSxhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0QixlQUFlO0NBQ2Q7O0FBRUQsNkNBQTZDOztBQUM3QywyQkFBMkIsbUNBQW1DLENBQUM7O0FBRS9ELHFDQUFxQzs7QUFDckMsbUNBQW1DLGVBQWUsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MCFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLyogRHJvcGRvd24gQnV0dG9uICovXHJcbi5kcm9wYnRuIHtcclxuYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MCFpbXBvcnRhbnQ7XHJcbmNvbG9yOiB3aGl0ZTtcclxucGFkZGluZzogMHB4IDQ1cHggMTBweCA0MHB4O1xyXG5mb250LXNpemU6IDEzcHg7XHJcbmJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG4uZHJvcGRvd24ge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuZGlzcGxheTogbm9uZTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiMzNDNhNDAhaW1wb3J0YW50O1xyXG5taW4td2lkdGg6IDEzMHB4O1xyXG5ib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuei1pbmRleDogMTtcclxufVxyXG5cclxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuY29sb3I6IGJsYWNrO1xyXG5wYWRkaW5nOiAxMnB4IDU2cHg7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiMzNDNhNDAhaW1wb3J0YW50O31cclxuXHJcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"use navbar navbar-toggleable-md navbar-dark rounded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a href=\"#\" routerLink=\"/\" class=\"logo-brand\">\n    <h3>Wish List</h3>\n   </a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n\n    <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n            <div class=\"dropdown\" [hidden]=\"!exp_customer\">\n                <button class=\"dropbtn\">Profile</button>\n                <div class=\"dropdown-content\">\n                  <br>\n                  <button class=\"btn btn-success btn-block btn-sm\" href=\"#\" routerLink=\"/home\">Dashboard</button>\n                  <button class=\"btn btn-warning btn-block btn-sm\" href=\"#\" routerLink=\"/wishList\">Wish List</button>\n                  <button class=\"btn btn-info btn-block btn-sm\" href=\"#\" routerLink=\"/changePassword\">Change Password</button>\n                  <button class=\"btn btn-danger btn-block btn-sm\" (click)=\"logout()\">Logout</button>\n                  <br>\n                </div>\n              </div>\n        </li>   \n    </ul>\n \n  </div>\n</nav>\n<br><br><br>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.exp_customer = false;
        var customerLink = JSON.parse(localStorage.getItem('isCustomerLink'));
        var customerToken = JSON.parse(localStorage.getItem('isCustomer'));
        if (customerLink != null) {
            if (customerLink.visibility == "hidden") {
                this.exp_customer = true;
            }
        }
        if (customerToken != null) {
            this.customer_id = customerToken._id;
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/wish-list/wish-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/wish-list/wish-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lzaC1saXN0L3dpc2gtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/wish-list/wish-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/wish-list/wish-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<div class=\"well\">\n    <div class=\"col-md-11 col-md-offset-3\" style=\"margin: auto\">\n        <div class=\"card card-login mx-auto mt-5\">\n            <div class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">\n                <span class=\"fa fa-2x fa-thumbs-up\"></span> \n              <h4>Wish List</h4>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"table-responsive text-center\">\n                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                  <thead>\n                    <tr>\n                      \n                      <th class=\"text-center\">Product Name</th>\n                      <th class=\"text-center\">Product Price(in Rs)</th>\n                      <th class=\"text-center\">Actions</th>\n                    </tr>\n                  </thead>\n                  <tfoot>\n                    <tr>\n                      <th class=\"text-center\">Product Name</th>\n                      <th class=\"text-center\">Product Price(in Rs)</th>\n                      <th class=\"text-center\">Actions</th>\n                    </tr>\n                  </tfoot>\n                  \n                  <tbody>\n                    <tr *ngFor=\"let item of items\">\n                      <td class=\"text-primary\">{{ item.name }}</td>\n                      <td class=\"text-primary\">{{ item.price }}</td>\n                      <td>\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <button class=\"btn btn-success btn-block\" (click)=\"onClickBuy()\">Buy</button>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <button class=\"btn btn-danger btn-block\" (click)=\"onRemoveFromList(item._id)\">Remove</button>\n                          </div>\n                        </div>                                            \n                     </td>\n                    </tr>\n                  </tbody>\n                </table>\n        </div>\n        </div>\n\n</div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/wish-list/wish-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/wish-list/wish-list.component.ts ***!
  \*************************************************************/
/*! exports provided: WishListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListComponent", function() { return WishListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishListComponent = /** @class */ (function () {
    function WishListComponent(dataService, router, route) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.items = [];
        var token = JSON.parse(localStorage.getItem('isCustomer'));
        this.dataService.getWishListItems(token.data, token._id).subscribe(function (items) {
            _this.items = items;
        });
    }
    WishListComponent.prototype.ngOnInit = function () {
    };
    WishListComponent.prototype.onClickBuy = function () {
        alert("Functionality is on hold");
    };
    WishListComponent.prototype.onRemoveFromList = function (id) {
        var _this = this;
        var result = confirm("Are you sure to remove this item");
        if (result) {
            var token = JSON.parse(localStorage.getItem('isCustomer'));
            this.dataService.removeWishListItem(token.data, id).subscribe(function (signal) {
                if (signal.message == true) {
                    for (var i = 0; i < _this.items.length; i++) {
                        if (_this.items[i]._id == id) {
                            _this.items.splice(i, 1);
                        }
                    }
                    alert("Item is successfully removed from wish list");
                }
                if (signal.message != true) {
                    alert(signal.message);
                }
            });
        }
    };
    WishListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wish-list',
            template: __webpack_require__(/*! ./wish-list.component.html */ "./src/app/components/wish-list/wish-list.component.html"),
            styles: [__webpack_require__(/*! ./wish-list.component.css */ "./src/app/components/wish-list/wish-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WishListComponent);
    return WishListComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function DataService(http) {
        this.http = http;
        //rootUrl = 'http://localhost:8080/';
        this.rootUrl = '';
    }
    //login
    DataService.prototype.login = function (user) {
        return this.http.post(this.rootUrl + 'api/customer', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    //for router guard 
    DataService.prototype.isLoggedIn = function (token) {
        var apiUrl = this.rootUrl + 'api/customer';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.get(apiUrl, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    //change password
    DataService.prototype.changePassword = function (token, data) {
        var apiUrl = this.rootUrl + 'api/customer/' + data._id;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.put(apiUrl, data, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.getItems = function (token) {
        var apiUrl = this.rootUrl + 'api/items';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.get(apiUrl, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.addToWish = function (token, item) {
        var apiUrl = this.rootUrl + 'api/wishList';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, item, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.getWishListItems = function (token, id) {
        var apiUrl = this.rootUrl + 'api/wishList/' + id;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.put(apiUrl, { _id: id }, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.removeWishListItem = function (token, id) {
        var apiUrl = this.rootUrl + 'api/wishList';
        var options = {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            }),
            body: { _id: id },
        };
        return this.http.delete(apiUrl, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());



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

module.exports = __webpack_require__(/*! C:\Projects\WishList\public\angularPart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map