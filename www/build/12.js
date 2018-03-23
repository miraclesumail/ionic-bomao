webpackJsonp([12],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRecordPageModule", function() { return GameRecordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_record__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_home_service_home_service__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GameRecordPageModule = (function () {
    function GameRecordPageModule() {
    }
    return GameRecordPageModule;
}());
GameRecordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__game_record__["a" /* GameRecordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__game_record__["a" /* GameRecordPage */]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_service_home_service_home_service__["a" /* HomeServiceProvider */]],
        entryComponents: []
    })
], GameRecordPageModule);

//# sourceMappingURL=game-record.module.js.map

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

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameRecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_share_global_share__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_date__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_home_service_home_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tools_observe__ = __webpack_require__(209);
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






var _ = new __WEBPACK_IMPORTED_MODULE_5__providers_tools_observe__["a" /* observe */]();
var GameRecordPage = (function () {
    function GameRecordPage(share, home, viewCtrl, navCtrl, params) {
        this.share = share;
        this.home = home;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.params = params;
        this.eventOne = { timeStarts: '', timeEnds: '', id: null };
        this.isTitle = false;
        this.statusName = { 0: '待开奖', 1: '已撤销', 2: '未中奖', 3: '已中奖', 4: '已派奖', 5: '系统撤销' };
        this.pet1 = 9;
        this.titleIndex = 0;
        this.recordLogin();
    }
    GameRecordPage.prototype.recordLogin = function () {
        var _this = this;
        this.isTitle = (this.params.get('title') != '投注记录');
        if (this.isTitle)
            this.titleIndex = 1;
        var startDay = new Date();
        startDay.setDate(startDay.getDate() - 7);
        var endDay = new Date();
        endDay.setDate(endDay.getDate() + 1);
        this.eventOne = {
            timeStarts: __WEBPACK_IMPORTED_MODULE_3__providers_tools_date__["a" /* DateFormat */].format(startDay),
            timeEnds: __WEBPACK_IMPORTED_MODULE_3__providers_tools_date__["a" /* DateFormat */].format(endDay),
            id: null
        };
        _.observe(this.eventOne, function () { return _this.changeParameter(_this.titleIndex); });
        this.viewCtrl.didEnter.subscribe(function () {
            _.observe(_this.share.parameters, function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getRecordData(this.titleIndex)];
                        case 1:
                            _a.sent();
                            if (!this.isTitle) {
                                this.backData = this.filterData(this.share.gameRecord.data);
                            }
                            else {
                                this.backData = this.share.chargeRecord.data;
                            }
                            this.gameData = this.backData;
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    GameRecordPage.prototype.getRecordData = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(index != 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.home.postRemoteServer()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.home.postRecordServer()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GameRecordPage.prototype.clickFilter = function (num) {
        this.pet1 = num;
        this.gameData = this.filterData(this.backData);
    };
    GameRecordPage.prototype.filterData = function (inputData) {
        var _this = this;
        if (this.pet1 == 9)
            return inputData;
        var outputData = [];
        inputData && inputData.forEach(function (v) {
            if (v.status == _this.pet1)
                outputData.push(v);
        });
        return outputData;
    };
    GameRecordPage.prototype.changeParameter = function (index) {
        this.share.parameters[index].end = this.eventOne.timeEnds;
        this.share.parameters[index].start = this.eventOne.timeStarts;
        this.share.parameters[index].lottery_id = this.eventOne.id;
    };
    GameRecordPage.prototype.goDetail = function (item) {
        if (this.params.get('title') == '投注记录') {
            this.navCtrl.push('BetDatailPage', item);
        }
    };
    return GameRecordPage;
}());
GameRecordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-game-record',template:/*ion-inline-start:"/Users/sumail/Downloads/bomao-app/src/pages/record/game-record/game-record.html"*/'<ion-header>\n  <ion-navbar>\n    <button icon-only class="fr">\n      <mores></mores>\n    </button>\n    <ion-title>{{params.get(\'title\')}}</ion-title>\n  </ion-navbar>\n  <div class="recharge mt0">\n    <div class="recharge-con block" *ngIf="!isTitle">\n      <ion-segment>\n        <ion-segment-button (click)="clickFilter(\'9\')" value="9">全部</ion-segment-button>\n        <ion-segment-button (click)="clickFilter(\'3\')" value="3">已中奖</ion-segment-button>\n        <ion-segment-button (click)="clickFilter(\'0\')" value="0">待开奖</ion-segment-button>\n        <ion-segment-button (click)="clickFilter(\'2\')" value="2">未中奖</ion-segment-button>\n      </ion-segment>\n    </div>\n  </div>\n  <ul class="record clear">\n    <li class="record-li">\n      <ion-list>\n        <ion-item>\n          <ion-datetime cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD"\n                        [(ngModel)]="eventOne.timeStarts"></ion-datetime>\n        </ion-item>\n      </ion-list>\n      <i class="iconfont icon-fanhui icon-down"></i>\n    </li>\n    <li class="record-li">\n      <ion-list>\n        <ion-item>\n          <ion-datetime cancelText="取消" doneText="确定" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD"\n                        [(ngModel)]="eventOne.timeEnds"></ion-datetime>\n        </ion-item>\n      </ion-list>\n      <i class="iconfont icon-fanhui icon-down"></i>\n    </li>\n    <li class="record-li">\n      <ion-list>\n        <ion-item>\n          <ion-label>全部游戏</ion-label>\n          <ion-select [(ngModel)]="eventOne.id" cancelText="取消" okText="确认" placeholder="全部游戏">\n            <ion-option value="">全部</ion-option>\n            <ion-option *ngFor="let item of share?.dataItems;let i = index;" value="{{item.pid}}">{{item.name}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n      <i class="iconfont icon-fanhui icon-down"></i>\n    </li>\n  </ul>\n</ion-header>\n<ion-content class="gray-bg">\n  <div *ngIf="!isTitle">\n    <div class="recharge mt0">\n      <div class="recharge-con block">\n        <div>\n          <ion-list>\n            <ul class="bet-record">\n              <li *ngFor="let item of gameData" (click)="goDetail(item)">\n                <div class="my-table">\n                  <div class="my-row">\n                    <div class="my-cell start-col">\n                      <div class="text-2">{{(item.created_at?.replace(share.yearReg, \'\'))}}</div>\n                    </div>\n                    <div class="my-cell large-col">\n                      <div class="text-1">{{item.friendly_name}}</div>\n                      <div class="text-2 nowrap">金额:{{item.amount}}</div>\n                    </div>\n                    <div class="my-cell big-col center">\n                      <div class="col-3">{{item.display_bet_number}}</div>\n                    </div>\n                    <div class="my-cell end-col right">\n                      <div class="text-2 nowrap" [class.orange]="item.status == 3" [class.green]="item.status == 0">\n                        {{statusName[item.status]}}\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </ion-list>\n        </div>\n      </div>\n      <no-data-remind *ngIf="!gameData?.length"></no-data-remind>\n    </div>\n  </div>\n  <div *ngIf="isTitle">\n    <div class="recharge mt0">\n      <div class="recharge-con block">\n        <div>\n          <ion-list>\n            <ul class="bet-record">\n              <li *ngFor="let item of gameData" (click)="goDetail(item)">\n                <div class="my-table">\n                  <div class="my-row">\n                    <div class="my-cell avg-col">\n                      <div class="text-2">{{(item.created_at?.replace(share.yearReg, \'\'))}}</div>\n                    </div>\n                    <div class="my-cell avg-col">\n                      <div class="text-1 nowrap">{{item.friendly_name}}</div>\n                    </div>\n                    <div class="my-cell avg-col center">\n                      <div class="text-2">金额：</div>\n                      <div class="text-2 nowrap">{{item.amount}}</div>\n                    </div>\n                    <div class="my-cell avg-col center">\n                      <div class="text-2">余额：</div>\n                      <div class="text-2 nowrap">{{item.balance}}</div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </ion-list>\n        </div>\n      </div>\n      <no-data-remind *ngIf="!gameData?.length"></no-data-remind>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sumail/Downloads/bomao-app/src/pages/record/game-record/game-record.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_global_share_global_share__["a" /* GlobalShareProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_service_home_service_home_service__["a" /* HomeServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], GameRecordPage);

//# sourceMappingURL=game-record.js.map

/***/ })

});
//# sourceMappingURL=12.js.map