webpackJsonp([35],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = (function () {
    function IntroPageModule() {
    }
    return IntroPageModule;
}());
IntroPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
        ],
    })
], IntroPageModule);

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
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


var IntroPage = (function () {
    function IntroPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideOptions = {
            initialSlide: 0,
            loop: false,
            autoplay: 4000,
            pager: true
        };
    }
    IntroPage.prototype.ngAfterViewInit = function () {
    };
    IntroPage.prototype.slideNext = function () {
        this.slides.slideNext();
    };
    IntroPage.prototype.goToHome = function () {
        this.navCtrl.setRoot("TabHomePage");
    };
    return IntroPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], IntroPage.prototype, "slides", void 0);
IntroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-intro',template:/*ion-inline-start:"/Users/eric.ch/Documents/bomao-app/src/pages/common/intro/intro.html"*/'\n<ion-slides class="swiper-container">\n  <ion-slide>\n    <img src="assets/img/guide-1.jpg" alt="" class="guide-img">\n    <img src="assets/img/know.png" (click)="slideNext()" alt="" class="guide-know">\n    <img src="assets/img/skip.png" (click)="goToHome()" alt="" class="guide-skip">\n  </ion-slide>\n\n  <ion-slide>\n    <img src="assets/img/guide-2.jpg" alt="" class="guide-img">\n    <img src="assets/img/know.png" (click)="slideNext()" alt="" class="guide-know">\n  </ion-slide>\n\n  <ion-slide>\n    <img src="assets/img/guide-3.jpg" alt="" class="guide-img">\n    <img src="assets/img/know.png" (click)="slideNext()" alt="" class="guide-know">\n  </ion-slide>\n\n  <ion-slide>\n    <img src="assets/img/guide-4.jpg" alt="" class="guide-img">\n    <img src="assets/img/start.png" alt="" class="guide-know" (click)="goToHome()">\n  </ion-slide>\n</ion-slides>\n'/*ion-inline-end:"/Users/eric.ch/Documents/bomao-app/src/pages/common/intro/intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], IntroPage);

//# sourceMappingURL=intro.js.map

/***/ })

});
//# sourceMappingURL=35.js.map