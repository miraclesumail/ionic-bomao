webpackJsonp([13],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetDatailPageModule", function() { return BetDatailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bet_datail__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_home_service_home_service__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BetDatailPageModule = (function () {
    function BetDatailPageModule() {
    }
    return BetDatailPageModule;
}());
BetDatailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bet_datail__["a" /* BetDatailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bet_datail__["a" /* BetDatailPage */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_service_home_service_home_service__["a" /* HomeServiceProvider */]]
    })
], BetDatailPageModule);

//# sourceMappingURL=bet-datail.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mores_mores__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_data_remind_no_data_remind__ = __webpack_require__(345);
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

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
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
        selector: 'mores',template:/*ion-inline-start:"/Users/eric.ch/Documents/bomao-app/src/components/mores/mores.html"*/'<button ion-button icon-only (click)="presentPopover($event)">\n  <i class="ion-ios-more"></i>\n</button>\n'/*ion-inline-end:"/Users/eric.ch/Documents/bomao-app/src/components/mores/mores.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
], MoresComponent);

//# sourceMappingURL=mores.js.map

/***/ }),

/***/ 345:
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
        selector: 'no-data-remind',template:/*ion-inline-start:"/Users/eric.ch/Documents/bomao-app/src/components/no-data-remind/no-data-remind.html"*/'<div class="gesture-wrap">\n  <div><img src="assets/img/bet-bill.svg" alt=""></div>\n  <div class="notice-detail-t">{{text ? text :"这里还没有内容"}}</div>\n</div>\n'/*ion-inline-end:"/Users/eric.ch/Documents/bomao-app/src/components/no-data-remind/no-data-remind.html"*/
    }),
    __metadata("design:paramtypes", [])
], NoDataRemindComponent);

//# sourceMappingURL=no-data-remind.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_client_http_client__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_share_global_share__ = __webpack_require__(55);
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
    { name: "快三系列", nav: "K3", time: null, group: [] },
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
    HomeServiceProvider.prototype.getUserBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.get('/mobileh5-users/user-account-info')];
                    case 1:
                        balance = _a.sent();
                        this.balance = balance.data;
                        return [2 /*return*/];
                }
            });
        });
    };
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
                        return [4 /*yield*/, this.client.post('/mobile-lotteries-h5/lottery-info', this.parameter)];
                    case 1:
                        inData = _a.sent();
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetDatailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_home_service_home_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_share_global_share__ = __webpack_require__(55);
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




var BetDatailPage = (function () {
    function BetDatailPage(share, navCtrl, params, home) {
        this.share = share;
        this.navCtrl = navCtrl;
        this.params = params;
        this.home = home;
        this.statusName = { 0: '待开奖', 1: '已撤销', 2: '未中奖', 3: '已中奖', 4: '已派奖', 5: '系统撤销' };
        this.bet_winning_number = [];
        this.getDetailID();
    }
    BetDatailPage.prototype.getDetailID = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.home.betDetail = null;
                        this.id = null;
                        if (!!this.params.get('id')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.home.postRemoteServer()];
                    case 1:
                        _a.sent();
                        if (this.share.gameRecord.data[0])
                            this.id = this.share.gameRecord.data[0].id;
                        return [3 /*break*/, 3];
                    case 2:
                        this.id = this.params.get('id');
                        _a.label = 3;
                    case 3:
                        if (this.id)
                            this.requestDetail(this.id);
                        return [2 /*return*/];
                }
            });
        });
    };
    BetDatailPage.prototype.requestDetail = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var str;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.home.getBetDetailServer(id)];
                    case 1:
                        _a.sent();
                        str = this.home.betDetail.winning_number;
                        if (str)
                            this.bet_winning_number = str.replace(/\s+?/ig, "").split('');
                        return [2 /*return*/];
                }
            });
        });
    };
    return BetDatailPage;
}());
BetDatailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bet-datail',template:/*ion-inline-start:"/Users/eric.ch/Documents/bomao-app/src/pages/record/bet-datail/bet-datail.html"*/'<ion-header>\n  <ion-navbar>\n    <button icon-only class="fr">\n      <mores></mores>\n    </button>\n    <ion-title>注单详情</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="gray-bg">\n  <div class="betdetail-bg" *ngIf="home?.betDetail">\n    <div class="bet-top">\n      <div class="text-1">{{home?.betDetail?.title}}</div>\n      <div class="text-2">第{{home?.betDetail?.issue}}期</div>\n      <div class="bet-num-green" *ngIf="bet_winning_number.length">\n        <i class="num-green" *ngFor="let num of bet_winning_number">{{num}}</i>\n      </div>\n    </div>\n    <div class="bet-wrap">\n      <div class="bet-detail clear">\n        <div class="bet-l">\n          <div><span>注单金额：</span><span class="gray">￥{{home?.betDetail?.amount}}</span></div>\n          <div class="mt5" *ngIf="home?.betDetail?.winning_number"><span>中奖金额：</span><span class="col">￥{{home?.betDetail?.prize}}</span></div>\n        </div>\n        <div class="bet-r">\n          <div>下注时间：</div>\n          <div>{{home?.betDetail?.bought_at}}</div>\n        </div>\n      </div>\n      <ul class="bet-list">\n        <li><span>模式：</span><span class="gray">{{({\'1.00\':\'元\',\'0.1\':\'角\',\'0.01\':"分"}[home?.betDetail?.coefficient])}}</span></li>\n        <li><span>倍数：</span><span class="gray">{{home?.betDetail?.multiple}}倍</span></li>\n        <li><span>投注内容：</span><span class="gray">{{home?.betDetail?.display_bet_number}}</span></li>\n        <li><span>注单编号：</span><span class="gray">{{home?.betDetail?.serial_number}}</span></li>\n        <li><span>订单状态：</span><span class="gray">{{(statusName[home?.betDetail?.status])}}</span></li>\n      </ul>\n    </div>\n  </div>\n  <no-data-remind *ngIf="!home?.betDetail"></no-data-remind>\n</ion-content>\n'/*ion-inline-end:"/Users/eric.ch/Documents/bomao-app/src/pages/record/bet-datail/bet-datail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_share_global_share__["a" /* GlobalShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_home_service_home_service__["a" /* HomeServiceProvider */]])
], BetDatailPage);

//# sourceMappingURL=bet-datail.js.map

/***/ })

});
//# sourceMappingURL=13.js.map