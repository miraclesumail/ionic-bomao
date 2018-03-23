webpackJsonp([36],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayHelpPageModule", function() { return PlayHelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play_help__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlayHelpPageModule = (function () {
    function PlayHelpPageModule() {
    }
    return PlayHelpPageModule;
}());
PlayHelpPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__play_help__["a" /* PlayHelpPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__play_help__["a" /* PlayHelpPage */]),
        ],
    })
], PlayHelpPageModule);

//# sourceMappingURL=play-help.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayHelpPage; });
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
 * Generated class for the PlayHelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PlayHelpPage = (function () {
    function PlayHelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlayHelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayHelpPage');
    };
    return PlayHelpPage;
}());
PlayHelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-play-help',template:/*ion-inline-start:"/Users/sumail/Downloads/bomao-app/src/pages/common/play-help/play-help.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>玩法帮助</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="white-bg">\n\n  <div class="help-wrap">\n    <h2 class="help-title">时时彩</h2>\n    <p class="help-p">\n      时时彩属于高频彩, 投注区分为万位、千位、百位、十位和个位，各位号码范围为0～9，每期从各位上开出1个号码组成中奖号码。\n      玩法即是竞猜5位开奖号码的全部号码、部分号码或部分号码特征。时时彩分星彩玩法和大小单双玩法。博猫目前上线了重庆、黑龙江、\n      西、新疆、天津五省市的时时彩以及博猫自主研发的博猫1分彩、博猫2分彩、博猫5分彩。\n    </p>\n    <h3 class="help-title">11选5</h3>\n    <p class="help-p">\n      11选5是从01-11共11个号码中任选1-8个号码进行投注，每期开出5个号码为中奖号码，竞猜5位开奖号码的全部或部分号码。投注方式灵活，\n      开奖频次高，全面满足不同彩民的投注需要。博猫目前上线了广东、江西、山东三省的11选5以及博猫自主研发的2分钟开一期奖的11选5。\n    </p>\n    <h4 class="help-title">福彩3D</h4>\n    <p>\n      3D是一种小盘玩法游戏，属数字型彩票范畴，由中国福利彩票发行管理中心统一组织发行，在全国范围内销售。每天开奖一次，每晚20:30现场开奖，\n      单期单注奖金限额10万元。\n    </p>\n    <p>\n      3D投注区分为百位、十位和个位，各位号码范围为0～9。每期从各位上开出1个号码作为中奖号码，即开奖号码为3位数。3D玩法即是竞猜3位开奖号码。\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sumail/Downloads/bomao-app/src/pages/common/play-help/play-help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], PlayHelpPage);

//# sourceMappingURL=play-help.js.map

/***/ })

});
//# sourceMappingURL=36.js.map