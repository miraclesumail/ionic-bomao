webpackJsonp([32],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetSuccessPageModule", function() { return BetSuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bet_success__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BetSuccessPageModule = (function () {
    function BetSuccessPageModule() {
    }
    return BetSuccessPageModule;
}());
BetSuccessPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bet_success__["a" /* BetSuccessPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bet_success__["a" /* BetSuccessPage */]),
        ],
    })
], BetSuccessPageModule);

//# sourceMappingURL=bet-success.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
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
 * Generated class for the BetSuccessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BetSuccessPage = (function () {
    function BetSuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BetSuccessPage.prototype.ionViewDidLoad = function () {
    };
    BetSuccessPage.prototype.gosscpage = function () {
        this.navCtrl.pop();
        this.navCtrl.pop();
    };
    BetSuccessPage.prototype.go = function (a, b) {
        this.navCtrl.push(a, b);
    };
    return BetSuccessPage;
}());
BetSuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bet-success',template:/*ion-inline-start:"/Users/eric.ch/Documents/bomao-app/src/pages/games/game-common/bet-success/bet-success.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>温馨提示</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="white-bg">\n  <div class="bet-success">\n    <div><img src="assets/img/ok.png" alt=""></div>\n    <div class="text-1">恭喜你！</div>\n    <div class="text-2">你的下注已经成功了祝你好运！</div>\n  </div>\n  <ul class="bet-bottom-box clear">\n    <li><button ion-button full (click)="go(\'BetDetailMorePage\',navParams.get(\'data\'))" class="bet-green">订单详情</button></li>\n    <li><button ion-button full (touchstart)="gosscpage()">继续投注</button></li>\n  </ul>\n</ion-content>\n'/*ion-inline-end:"/Users/eric.ch/Documents/bomao-app/src/pages/games/game-common/bet-success/bet-success.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], BetSuccessPage);

//# sourceMappingURL=bet-success.js.map

/***/ })

});
//# sourceMappingURL=32.js.map