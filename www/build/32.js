webpackJsonp([32],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComfirmPageModule", function() { return CardComfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_comfirm__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardComfirmPageModule = (function () {
    function CardComfirmPageModule() {
    }
    return CardComfirmPageModule;
}());
CardComfirmPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__card_comfirm__["a" /* CardComfirmPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__card_comfirm__["a" /* CardComfirmPage */]),
        ],
    })
], CardComfirmPageModule);

//# sourceMappingURL=card-comfirm.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComfirmPage = (function () {
    function CardComfirmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comfirm = this.navParams.get('data').data;
    }
    return CardComfirmPage;
}());
CardComfirmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-card-comfirm',template:/*ion-inline-start:"/Users/sumail/Downloads/bomao-app/src/pages/money/card-comfirm/card-comfirm.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>汇款确认</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <button ion-item>\n      <label>收款账户名:</label><span>{{comfirm.accept_account_name}}</span>\n    </button>\n    <button ion-item>\n      <label>卡号：</label><span>{{comfirm.accept_card_number}}</span>\n    </button>\n    <button ion-item>\n      <label>开户城市:</label><span>{{comfirm.accept_bank_address}}</span>\n    </button>\n    <button ion-item>\n      <label>订单金额：</label><b style="color: red; font-weight: bold;">{{comfirm.amount}}</b>\n    </button>\n    <button ion-item>\n      <label>附言(充值订单号)：</label><b>{{comfirm.note}}</b>\n    </button>\n  </ion-list>\n  <div class="save-btn">\n    <a ion-button full href="{{comfirm.url}}" target="_blank">立即充值</a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sumail/Downloads/bomao-app/src/pages/money/card-comfirm/card-comfirm.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], CardComfirmPage);

//# sourceMappingURL=card-comfirm.js.map

/***/ })

});
//# sourceMappingURL=32.js.map