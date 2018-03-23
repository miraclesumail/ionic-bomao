webpackJsonp([33],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPageModule", function() { return SetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetPageModule = (function () {
    function SetPageModule() {
    }
    return SetPageModule;
}());
SetPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__set__["a" /* SetPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__set__["a" /* SetPage */]),
        ],
    })
], SetPageModule);

//# sourceMappingURL=set.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_share_global_share__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetPage = (function () {
    function SetPage(share, navCtrl, navParams) {
        this.share = share;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SetPage.prototype.quit = function () {
        var _this = this;
        this.share.showAlert('你确定退出帐号吗?', [{ text: '取消', role: 'cancel', handler: function () { return console.log('Cancel clicked'); } },
            {
                text: '确定', handler: function () {
                    _this.share.user = null;
                    _this.share.balance = null;
                    _this.share.basketData = [];
                    _this.share.basketDataValideArr = [];
                    _this.share.gameRecord = { data: [] };
                    _this.share.chargeRecord = { data: [] };
                    _this.share.globalData = { globalMutile: 1, trace: 1 };
                    _this.share.dataGroup = [];
                    _this.share.dataItems = null;
                    _this.navCtrl.setRoot('LoginPage');
                }
            }]);
    };
    return SetPage;
}());
SetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-set',template:/*ion-inline-start:"/Users/eric.ch/Documents/bomao-app/src/pages/common/set/set.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>设置</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="gray-bg">\n  <ul>\n    <li class="new-recharge mb8 clear j-btn" (click)="quit()">\n      <div class="message-l">退出</div>\n    </li>\n    <li class="new-recharge mb8 clear">\n      <div class="message-l">版本号</div>\n      <div class="message-r">1.0.0</div>\n    </li>\n  </ul>\n</ion-content>\n\n'/*ion-inline-end:"/Users/eric.ch/Documents/bomao-app/src/pages/common/set/set.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_global_share_global_share__["a" /* GlobalShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], SetPage);

//# sourceMappingURL=set.js.map

/***/ })

});
//# sourceMappingURL=33.js.map