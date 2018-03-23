webpackJsonp([33],{

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankcardRechargecomfirmPageModule", function() { return BankcardRechargecomfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bankcard_rechargecomfirm__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BankcardRechargecomfirmPageModule = (function () {
    function BankcardRechargecomfirmPageModule() {
    }
    return BankcardRechargecomfirmPageModule;
}());
BankcardRechargecomfirmPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bankcard_rechargecomfirm__["a" /* BankcardRechargecomfirmPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bankcard_rechargecomfirm__["a" /* BankcardRechargecomfirmPage */]),
        ],
    })
], BankcardRechargecomfirmPageModule);

//# sourceMappingURL=bankcard-rechargecomfirm.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankcardRechargecomfirmPage; });
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


/**
 * Generated class for the BankcardRechargecomfirmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BankcardRechargecomfirmPage = (function () {
    function BankcardRechargecomfirmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comfirmDateil = this.navParams.get('data').data;
    }
    BankcardRechargecomfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankcardRechargecomfirmPage');
    };
    return BankcardRechargecomfirmPage;
}());
BankcardRechargecomfirmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bankcard-rechargecomfirm',template:/*ion-inline-start:"/Users/sumail/Downloads/bomao-app/src/pages/money/bankcard-rechargecomfirm/bankcard-rechargecomfirm.html"*/'<!--\n  Generated template for the BankcardRechargecomfirm page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>汇款确认</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item>\n      <label>\n        收款账户名:\n      </label>\n      <span>{{comfirmDateil.accept_account_name}}</span>\n    </button>\n    <button ion-item>\n      <label>\n        卡号：\n      </label>\n      <span>{{comfirmDateil.accept_card_number}}</span>\n    </button>\n    <button ion-item>\n      <label>\n        开户城市:\n      </label>\n      <span>{{comfirmDateil.accept_bank_address}}</span>\n    </button>\n    <button ion-item>\n      <label>\n        订单金额：\n      </label>\n      <b style="color: red; font-weight: bold;">{{comfirmDateil.amount}}</b>\n    </button>\n\n    <button ion-item>\n      <label>\n        附言(充值订单号)：\n      </label>\n      <b>{{comfirmDateil.note}}</b>\n    </button>\n    <!--<button ion-item>-->\n    <!--<label>-->\n    <!--网银入口：-->\n    <!--</label>-->\n    <!--<a href="{{comfirmDateil.url}}" target="_blank">{{comfirmDateil.url}}</a>-->\n    <!--</button>-->\n  </ion-list>\n\n  <div class="save-btn">\n    <a ion-button full href="{{comfirmDateil.url}}" target="_blank">立即充值</a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sumail/Downloads/bomao-app/src/pages/money/bankcard-rechargecomfirm/bankcard-rechargecomfirm.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], BankcardRechargecomfirmPage);

//# sourceMappingURL=bankcard-rechargecomfirm.js.map

/***/ })

});
//# sourceMappingURL=33.js.map