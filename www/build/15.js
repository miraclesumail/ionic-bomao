webpackJsonp([15],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeListPageModule", function() { return NoticeListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice_list__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_home_service_home_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NoticeListPageModule = (function () {
    function NoticeListPageModule() {
    }
    return NoticeListPageModule;
}());
NoticeListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notice_list__["a" /* NoticeListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notice_list__["a" /* NoticeListPage */]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_service_home_service_home_service__["a" /* HomeServiceProvider */]],
        entryComponents: []
    })
], NoticeListPageModule);

//# sourceMappingURL=notice-list.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mores_mores__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_data_remind_no_data_remind__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__mores_mores__["a" /* MoresComponent */],
            __WEBPACK_IMPORTED_MODULE_2__no_data_remind_no_data_remind__["a" /* NoDataRemindComponent */]
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__mores_mores__["a" /* MoresComponent */],
            __WEBPACK_IMPORTED_MODULE_2__no_data_remind_no_data_remind__["a" /* NoDataRemindComponent */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_pop_over_my_pop_over__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoresComponent = (function () {
    function MoresComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    MoresComponent.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__my_pop_over_my_pop_over__["a" /* MyPopOverComponent */]);
        popover.present({ ev: myEvent });
    };
    return MoresComponent;
}());
MoresComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'mores',template:/*ion-inline-start:"/Users/sumail/Downloads/bomao-app/src/components/mores/mores.html"*/'<button ion-button icon-only (click)="presentPopover($event)">\n  <i class="ion-ios-more"></i>\n</button>\n'/*ion-inline-end:"/Users/sumail/Downloads/bomao-app/src/components/mores/mores.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
], MoresComponent);

//# sourceMappingURL=mores.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoDataRemindComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoDataRemindComponent = (function () {
    function NoDataRemindComponent() {
    }
    return NoDataRemindComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], NoDataRemindComponent.prototype, "text", void 0);
NoDataRemindComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'no-data-remind',template:/*ion-inline-start:"/Users/sumail/Downloads/bomao-app/src/components/no-data-remind/no-data-remind.html"*/'<div class="gesture-wrap">\n  <div><img src="assets/img/bet-bill.svg" alt=""></div>\n  <div class="notice-detail-t">{{text ? text :"这里还没有内容"}}</div>\n</div>\n'/*ion-inline-end:"/Users/sumail/Downloads/bomao-app/src/components/no-data-remind/no-data-remind.html"*/
    }),
    __metadata("design:paramtypes", [])
], NoDataRemindComponent);

//# sourceMappingURL=no-data-remind.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_client_http_client__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_share_global_share__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var dataGroup = [{ name: "时时彩系列", nav: "SSC|60", time: null, group: [] },
    { name: "11选5系列", nav: "11Y", time: null, group: [] },
    { name: "六合彩系列", nav: "LHC", time: null, group: [] },
    { name: "幸运28系列", nav: "KL", time: null, group: [] },
    { name: "快三系列", nav: "K3|DICE", time: null, group: [] },
    { name: "北京PK10", nav: "PK10", time: null, group: [] }];
var HomeServiceProvider = (function () {
    function HomeServiceProvider(client, share) {
        this.client = client;
        this.share = share;
        this.dataItems = [];
        this.notice = { data: [] };
        this.message = { data: [] };
        this.specialData = [];
    }
    HomeServiceProvider.prototype.postRecordServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var chargeRecord;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.parameter = this.getParameters(1);
                        return [4 /*yield*/, this.client.post('/mobileh5-reports/0/getmobileusertransaction/', this.parameter)];
                    case 1:
                        chargeRecord = _a.sent();
                        this.share.chargeRecord.data = chargeRecord.data.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeServiceProvider.prototype.postRemoteServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gameRecord;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.parameter = this.getParameters(0);
                        return [4 /*yield*/, this.client.post('/mobileh5-projects', this.parameter)];
                    case 1:
                        gameRecord = _a.sent();
                        this.share.gameRecord.data = gameRecord.data.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeServiceProvider.prototype.getBetDetailServer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var betDetail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.get("/mobileh5-projects/" + id + "/view")];
                    case 1:
                        betDetail = _a.sent();
                        this.betDetail = betDetail.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeServiceProvider.prototype.getRemoteServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var notice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.get('/mobileh5-announcements/')];
                    case 1:
                        notice = _a.sent();
                        this.notice.data = notice.data.cmsarticle;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeServiceProvider.prototype.getBannerRemoteServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var banners;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.get('/mobileh5-announcements/banner')];
                    case 1:
                        banners = _a.sent();
                        this.banners = banners.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeServiceProvider.prototype.postMessageServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.parameter = this.getParameters(0);
                        return [4 /*yield*/, this.client.post('/mobileh5-station-letters/', this.parameter)];
                    case 1:
                        message = _a.sent();
                        this.message.data = message.data.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeServiceProvider.prototype.getMessageServer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var messageDetail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.get("/mobileh5-station-letters/" + id + "/view")];
                    case 1:
                        messageDetail = _a.sent();
                        this.messageDetail = messageDetail.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeServiceProvider.prototype.postLotteryServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.parameter = this.getParameters(0);
                        this.share.showLoading();
                        return [4 /*yield*/, this.client.post('/mobile-lotteries-h5/lottery-info', this.parameter)];
                    case 1:
                        inData = _a.sent();
                        this.share.hideLoading();
                        this.dataGroup = JSON.parse(JSON.stringify(dataGroup));
                        this.setInData(inData);
                        this.share.dataGroup = this.dataGroup;
                        this.share.dataItems = this.dataItems;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeServiceProvider.prototype.getSpecialSever = function () {
        return __awaiter(this, void 0, void 0, function () {
            var specialData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.get("/mobileh5-announcements/youhui")];
                    case 1:
                        specialData = _a.sent();
                        this.specialData = specialData.data.youhui;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeServiceProvider.prototype.setInData = function (inData) {
        for (var k in inData) {
            if (inData[k].name && inData[k].nav) {
                this.dataItems.push(inData[k]);
                for (var v in this.dataGroup) {
                    if (this.inStr(this.dataGroup[v].nav, inData[k].nav)) {
                        if (!this.dataGroup[v].time)
                            this.dataGroup[v].time = inData[k].time;
                        this.dataGroup[v].group.push(inData[k]);
                        break;
                    }
                }
            }
        }
        return inData;
    };
    HomeServiceProvider.prototype.inStr = function (strB, strA) {
        var subStr = strB.split("|");
        var indexNumber;
        for (var v in subStr) {
            indexNumber = strA.toUpperCase().indexOf(subStr[v].toUpperCase());
            if (indexNumber > -1)
                break;
        }
        return indexNumber > -1;
    };
    HomeServiceProvider.prototype.getParameters = function (index) {
        if (this.share.user)
            this.share.parameters[index]._token = this.share.user.token;
        return this.share.parameters[index];
    };
    return HomeServiceProvider;
}());
HomeServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_client_http_client__["a" /* HttpClientProvider */], __WEBPACK_IMPORTED_MODULE_3__global_share_global_share__["a" /* GlobalShareProvider */]])
], HomeServiceProvider);

//# sourceMappingURL=home-service.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_home_service_home_service__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoticeListPage = (function () {
    function NoticeListPage(navCtrl, homeService, navParams) {
        this.navCtrl = navCtrl;
        this.homeService = homeService;
        this.navParams = navParams;
    }
    NoticeListPage.prototype.ionViewDidLoad = function () {
        this.homeService.getRemoteServer();
    };
    NoticeListPage.prototype.pushPage = function (page, parameter) {
        if (page)
            this.navCtrl.push(page, parameter);
    };
    return NoticeListPage;
}());
NoticeListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notice-list',template:/*ion-inline-start:"/Users/sumail/Downloads/bomao-app/src/pages/notice/notice-list/notice-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button icon-only class="fr">\n      <mores></mores>\n    </button>\n    <ion-title>公告</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="gray-bg">\n  <ul class="notice">\n    <li class="new-recharge j-btn" *ngFor="let item of homeService.notice.data" (click)="pushPage(\'NoticeDetailPage\',{notice:item})">\n      <div class="message-date">{{item.created_at}}</div>\n      <div class="message-title">{{item.title}}</div>\n    </li>\n  </ul>\n  <no-data-remind *ngIf="!homeService.notice.data?.length"></no-data-remind>\n</ion-content>\n'/*ion-inline-end:"/Users/sumail/Downloads/bomao-app/src/pages/notice/notice-list/notice-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_home_service_home_service__["a" /* HomeServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], NoticeListPage);

//# sourceMappingURL=notice-list.js.map

/***/ })

});
//# sourceMappingURL=15.js.map