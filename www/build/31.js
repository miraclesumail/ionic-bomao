webpackJsonp([31],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHomePageModule", function() { return TabHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_home__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabHomePageModule = (function () {
    function TabHomePageModule() {
    }
    return TabHomePageModule;
}());
TabHomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tab_home__["a" /* TabHomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_home__["a" /* TabHomePage */]),
        ],
    })
], TabHomePageModule);

//# sourceMappingURL=tab-home.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabHomePage; });
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


var TabHomePage = (function () {
    function TabHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = "SpecialOfferPage";
        this.tab2Root = "GameRecordPage";
        this.tab3Root = "HomePage";
        this.tab4Root = "ManageCataloguePage";
        this.tab5Root = "PersonalProfilesPage";
    }
    TabHomePage.prototype.ionViewDidEnter = function () {
        var pageIndex = this.navParams.get('pageIndex');
        pageIndex ? this.tabRef.select(pageIndex) : this.tabRef.select(2);
    };
    return TabHomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Tabs */])
], TabHomePage.prototype, "tabRef", void 0);
TabHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab-home',template:/*ion-inline-start:"/Users/sumail/Downloads/bomao-app/src/pages/tab/tab-home/tab-home.html"*/'<ion-tabs #myTabs selectedIndex="2">\n  <ion-tab [root]="tab2Root" tabTitle="投注记录" tabIcon="text" [rootParams]="{title:\'投注记录\'}"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="资金管理" tabIcon="image"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="" tabIcon="home-icon">home</ion-tab>\n  <ion-tab [root]="tab1Root" tabTitle="优惠活动" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="个人中心" tabIcon="star"></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"/Users/sumail/Downloads/bomao-app/src/pages/tab/tab-home/tab-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], TabHomePage);

//# sourceMappingURL=tab-home.js.map

/***/ })

});
//# sourceMappingURL=31.js.map