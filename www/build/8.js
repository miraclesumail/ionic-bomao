webpackJsonp([8],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LhcPageModule", function() { return LhcPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lhc__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_games_gameconfig_service_gameconfig_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_games_basket_service_basket_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tools_business_tool__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LhcPageModule = (function () {
    function LhcPageModule() {
    }
    return LhcPageModule;
}());
LhcPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lhc__["a" /* LhcPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lhc__["a" /* LhcPage */]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__providers_service_games_gameconfig_service_gameconfig_service__["a" /* GameconfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_games_basket_service_basket_service__["a" /* BasketServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_tools_business_tool__["a" /* BusinessTool */]
        ]
    })
], LhcPageModule);

//# sourceMappingURL=lhc.module.js.map

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

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameconfigServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_client_http_client__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_business_tool__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_share_global_share__ = __webpack_require__(35);
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





var GameconfigServiceProvider = (function () {
    function GameconfigServiceProvider(share, businessTool, httpclient) {
        this.share = share;
        this.businessTool = businessTool;
        this.httpclient = httpclient;
        this.data = {};
        this.defaultsMethodData = { a: {}, b: {}, c: { selectarea: [], mutipleAndModeObj: {} } };
        this.defaultData = { data: { lottery_balls: '' } };
        this.methedsList = {};
        this.getIssuesList = { data: { trace_issues: [{ number: 0 }] } };
        this.isInit = true;
        this.clock = {
            'total': '',
            'days': '',
            'hours': '',
            'minutes': '',
            'seconds': ''
        };
        this.istimeout = false;
    }
    GameconfigServiceProvider.prototype.setdefaultsMethodData = function () {
        var df = this.businessTool.setDefaultsMethod(this.methedsList.game_ways, this.defaultData.data && this.defaultData.data.default_method_id, this.defaultData);
        if (df) {
            this.defaultsMethodData = df;
        }
    };
    GameconfigServiceProvider.prototype.getParamaterToken = function () {
        return { _token: this.share.user.token };
    };
    /**
     * 1.获取总玩玩法列表
     */
    GameconfigServiceProvider.prototype.fetchMethedsList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpclient.post("/mobile-lotteries-h5/load-data/2/" + +this.share.pid, this.getParamaterToken())];
                    case 1:
                        data = _a.sent();
                        this.methedsList = data.data;
                        console.log('总玩玩法列表:' + JSON.stringify(this.methedsList));
                        this.setdefaultsMethodData();
                        this.data = data;
                        this.methedsList;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 2.获取默认数据
     */
    GameconfigServiceProvider.prototype.getDefaultsMethods = function () {
        return __awaiter(this, void 0, void 0, function () {
            var defaultData, _a, _b, str;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.share;
                        _b = this;
                        return [4 /*yield*/, this.httpclient.post("/mobile-lotteries-h5/load-data/1/" + +this.share.pid + "?_=" + Math.random(), this.getParamaterToken())];
                    case 1:
                        defaultData = _a.defaultData = _b.defaultData = _c.sent();
                        console.log('默认数据:' + JSON.stringify(defaultData));
                        str = this.defaultData.data.lottery_balls;
                        if (str) {
                            if (/[,\s]+/.test(str)) {
                                this.defaultData.data.lottery_balls = this.defaultData.data.lottery_balls.split(/[,\s]+/);
                            }
                            else {
                                this.defaultData.data.lottery_balls = this.defaultData.data.lottery_balls.split('');
                            }
                        }
                        if (defaultData.isSuccess) {
                            defaultData.data.isnot11Ygame = !/11Y/.test(this.defaultData.data.game_name_en);
                            if (this.isInit) {
                                this.setdefaultsMethodData();
                                this.isInit = false;
                            }
                            this.coundown(this.defaultData.data.current_time, this.defaultData.data.current_number_time);
                        }
                        else {
                            this.share.showToast(defaultData.Msg, 3000);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 3.获取奖期
     * @returns {any}
     */
    GameconfigServiceProvider.prototype.getIssues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpclient.post("/mobile-lotteries-h5/load-data/3/" + +this.share.pid, this.getParamaterToken())];
                    case 1:
                        data = _a.sent();
                        this.getIssuesList = data;
                        console.log('奖期:' + JSON.stringify(this.getIssuesList));
                        return [2 /*return*/];
                }
            });
        });
    };
    GameconfigServiceProvider.prototype.outergetIssues = function () {
        return this.httpclient.post("/mobile-lotteries-h5/load-data/3/" + +this.share.pid, this.getParamaterToken());
    };
    GameconfigServiceProvider.prototype.coundownAgain = function () {
        clearInterval(this.set);
        this.getIssues();
        this.getDefaultsMethods();
    };
    GameconfigServiceProvider.prototype.coundown = function (startime, endtime) {
        var _this = this;
        var a = new Date(startime.replace(/-/g, '/')).getTime();
        var b = new Date(endtime.replace(/-/g, '/')).getTime();
        var c = b - a;
        clearInterval(this.set);
        this.istimeout = false;
        if (c > 1000) {
            this.set = setInterval(function () {
                c -= 1000;
                _this.istimeout = c > 1000;
                _this.clock = _this.getTimeRemaining(c);
                if (!_this.istimeout) {
                    _this.coundownAgain();
                }
            }, 1000);
        }
        else {
            this.istimeout = c > 1000;
            //this.coundownAgain();
            this.set = setInterval(function () {
                c -= 1000;
                _this.istimeout = c > 1000;
                _this.clock = _this.getTimeRemaining(c);
                if (!_this.istimeout) {
                    _this.coundownAgain();
                }
            }, 1000);
        }
    };
    GameconfigServiceProvider.prototype.getTimeRemaining = function (t) {
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': ('0' + hours).slice(-2),
            'minutes': ('0' + minutes).slice(-2),
            'seconds': ('0' + seconds).slice(-2)
        };
    };
    return GameconfigServiceProvider;
}());
GameconfigServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__global_share_global_share__["a" /* GlobalShareProvider */], __WEBPACK_IMPORTED_MODULE_3__tools_business_tool__["a" /* BusinessTool */], __WEBPACK_IMPORTED_MODULE_2__http_client_http_client__["a" /* HttpClientProvider */]])
], GameconfigServiceProvider);

//# sourceMappingURL=gameconfig-service.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_client_http_client__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_business_tool__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gameconfig_service_gameconfig_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_share_global_share__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_share_balance__ = __webpack_require__(210);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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






var BasketServiceProvider = (function (_super) {
    __extends(BasketServiceProvider, _super);
    function BasketServiceProvider(balance, share, gameconfigure, httpclient) {
        var _this = _super.call(this) || this;
        _this.balance = balance;
        _this.share = share;
        _this.gameconfigure = gameconfigure;
        _this.httpclient = httpclient;
        _this.basketData = [];
        _this.basketBall = [];
        _this.c = { name_cn: '', prize: 0 };
        _this.totalAllCount = 0;
        _this.traceWinStop = true;
        _this.submitProcessing = false;
        _this.share.globalData = { globalMutile: 1, trace: 1 };
        _this._.observe(_this.share.globalData, 'update', function () {
            _this.whenUpdateGlobalData();
            _this.whenUpdatebasketData();
        });
        _this._.observe(_this.share.basketData, function () {
            _this.whenUpdatebasketData();
        });
        _this.share.MinMutiple = { minmax_multiple: 0, c: {} };
        _this._.observe(_this.share.MinMutiple, 'update', function () {
            _this.whenUpdateGlobalData();
            _this.whenUpdatebasketData();
        });
        return _this;
    }
    BasketServiceProvider.prototype.whenUpdatebasketData = function () {
        this.getMinMutipleAndTotalAllCount();
        if (!this.share.basketData.length)
            this.share.globalData.trace = 0;
        else if (!this.share.globalData.trace)
            this.share.globalData.trace = 1;
    };
    BasketServiceProvider.prototype.getMinMutipleAndTotalAllCount = function () {
        var _this = this;
        var min = this.share.basketData[0];
        this.totalAllCount = 0;
        this.totalAllNum = 0;
        var totalAllCount = 0;
        this.share.basketData.forEach(function (v) {
            totalAllCount += (v.mutipleAndModeObj.mode * v.mutipleAndModeObj.times * v.price * _this.share.globalData.globalMutile * _this.share.globalData.trace * v.count);
            totalAllCount = +totalAllCount.toFixed(4);
            _this.totalAllNum += v.count;
            if (v.max_multiple < min.max_multiple)
                min = v;
        });
        this.share.totalAllCount = totalAllCount;
        if (min) {
            this.share.MinMutiple.minmax_multiple = min.max_multiple;
            this.share.MinMutiple.c = min;
        }
        else {
            if (this.share.MinMutiple) {
                this.share.MinMutiple.minmax_multiple = 0;
                this.share.MinMutiple.c = min;
            }
        }
        return this.share.MinMutiple;
    };
    BasketServiceProvider.prototype.whenUpdateGlobalData = function () {
        this.resetGlobalMutiple();
    };
    BasketServiceProvider.prototype.resetGlobalMutiple = function () {
        if (!this.share.basketData.length)
            this.share.globalData.globalMutile = 0;
        else if (this.share.globalData.globalMutile == 0)
            this.share.globalData.globalMutile = 1;
        if (this.share.MinMutiple.c && this.share.MinMutiple.c.mutipleAndModeObj && this.isBigerThenMutipleAndModeObj(this.share.MinMutiple.c)) {
            this.share.globalData.globalMutile -= 1;
            this.resetGlobalMutiple();
        }
    };
    BasketServiceProvider.prototype.isBigerThenMutipleAndModeObj = function (c) {
        return this.share.MinMutiple.minmax_multiple < c.mutipleAndModeObj.times * this.share.globalData.globalMutile;
    };
    BasketServiceProvider.prototype.addDataToBasket = function (obj) {
        if (obj.count) {
            this.addLabel(obj);
            this.c = obj;
            var validIndex = obj.fullName_en + "/" + obj.label;
            if (this.share.basketDataValideArr.indexOf(validIndex) == -1) {
                this.share.basketDataValideArr.push(validIndex);
                this.share.basketData.push(this.deepCloneObj(obj));
                obj.isRedudu = false;
                return true;
            }
            else {
                obj.isRedudu = true;
                return false;
            }
        }
        else {
            obj.isRedudu = false;
            return false;
        }
    };
    BasketServiceProvider.prototype.addLabelPK10 = function (obj) {
        obj.label = [];
        obj.isliangmianpan = /^liangmianpan/.test(obj.fullName_en);
        obj.iszhixuanhezhi = /^zhixuanhezhi/.test(obj.fullName_en);
        if (obj.isliangmianpan) {
            obj.selectarea.forEach(function (v, k) {
                if (Array.isArray(v.value)) {
                    var tmp_1 = [];
                    v.value.forEach(function (v1, k1) {
                        if (obj.isnotnumberSymble) {
                            v1 && tmp_1.push(obj.bet_numberArrObj[k].value[k1].join('-'));
                        }
                        else {
                            v1 && tmp_1.push(obj.bet_numberArrObj[k].value[k1]);
                        }
                    });
                    if (obj.isnotnumberSymble) {
                        obj.label.push(tmp_1.join(','));
                    }
                    else {
                        obj.label.push(tmp_1.join(''));
                    }
                }
            });
        }
        else {
            obj.selectarea.forEach(function (v, k) {
                if (Array.isArray(v.value)) {
                    var tmp_2 = [];
                    v.value.forEach(function (v1, k1) {
                        v1 && tmp_2.push(obj.bet_numberArrObj[k].value[k1]);
                    });
                    if (obj.iszhixuanhezhi) {
                        obj.label.push(tmp_2.join('|'));
                    }
                    else {
                        obj.label.push(tmp_2.join(''));
                    }
                }
            });
        }
    };
    BasketServiceProvider.prototype.addDataToBasketPK10 = function (obj) {
        if (obj.count) {
            this.addLabelPK10(obj);
            this.c = obj;
            var validIndex = obj.fullName_en + "/" + obj.label;
            if (this.share.basketDataValideArr.indexOf(validIndex) == -1) {
                this.share.basketDataValideArr.push(validIndex);
                this.share.basketData.push(this.deepCloneObj(obj));
                obj.isRedudu = false;
                return true;
            }
            else {
                obj.isRedudu = true;
                return false;
            }
        }
        else {
            obj.isRedudu = false;
            return false;
        }
    };
    BasketServiceProvider.prototype.addDataToBasketK3 = function (obj) {
        if (obj.count) {
            this.addLabelk3(obj);
            this.c = obj;
            var validIndex = obj.fullName_en + "/" + obj.label;
            if (this.share.basketDataValideArr.indexOf(validIndex) == -1) {
                this.share.basketDataValideArr.push(validIndex);
                this.share.basketData.push(this.deepCloneObj(obj));
                obj.isRedudu = false;
                return true;
            }
            else {
                obj.isRedudu = true;
                return false;
            }
        }
        else {
            obj.isRedudu = false;
            return false;
        }
    };
    BasketServiceProvider.prototype.isNot11Y = function () {
        return this.gameconfigure.defaultData.data && this.gameconfigure.defaultData.data.isnot11Ygame;
    };
    BasketServiceProvider.prototype.createLabel = function (arr, type) {
        var _this = this;
        if (/hezhi|teshuhaoma/.test(type)) {
            return arr[0];
        }
        return arr.map(function (v) {
            return _this.isNot11Y() ? v.join('') : v.join(' ');
        });
    };
    BasketServiceProvider.prototype.addLabel = function (obj) {
        obj.label = this.createLabel(this.pluckChooseBall(this.pluckBall(obj.bet_numberArrObj), obj.selectarea), obj.fullName_en);
    };
    BasketServiceProvider.prototype.addLabelk3 = function (obj) {
        if (obj.leveltwo) {
            obj.label = [];
            obj.selectarea.forEach(function (v, k) {
                if (v.some(function (v) { return v; })) {
                    v.forEach(function (v1, k1) {
                        v1 && obj.label.push(obj.bet_numberArrObj[k][k1]);
                    });
                }
            });
        }
        else {
            obj.label = [];
            obj.selectarea.forEach(function (v, k) {
                v && obj.label.push(obj.bet_numberArrObj[k]);
            });
        }
    };
    BasketServiceProvider.prototype.pluckBall = function (a) {
        var arr = [];
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var val = a_1[_i];
            arr.push(val.value.slice());
        }
        return arr;
    };
    BasketServiceProvider.prototype.hasChooseBall = function (arr) {
        return arr.some(function (v) {
            if (Array.isArray(v)) {
                return v.some(function (v) {
                    return v;
                });
            }
            return v;
        });
    };
    BasketServiceProvider.prototype.pluckChooseBall = function (a, b) {
        return a.map(function (v, k) {
            return v.filter(function (v1, k1) {
                return b[k][k1];
            });
        });
    };
    BasketServiceProvider.prototype.deleteItem = function (i) {
        this.share.basketData.splice(i, 1);
        this.share.basketDataValideArr.splice(i, 1);
    };
    BasketServiceProvider.prototype.clearAll = function () {
        this.share.basketData.splice(0, this.share.basketData.length);
        this.share.basketDataValideArr.splice(0, this.share.basketDataValideArr.length);
    };
    BasketServiceProvider.prototype.convertToBalls = function (a, b) {
        return b.filter(function (v, k) {
            return a[k];
        });
    };
    BasketServiceProvider.prototype.fiterBalls = function (v, name_en) {
        var _this = this;
        if ("teshuhaoma" == name_en || /daxiaodanshuang/.test(name_en) || /quwei\.|longhu\.|hezhi\./.test(v.fullName_en)) {
            var arr = v.selectarea;
            return arr.map(function (v) {
                var b = _this.range(0, v.length);
                return _this.convertToBalls(v, b).join('');
            }).join('|');
        }
        return v.label;
    };
    BasketServiceProvider.prototype.getBallsString = function () {
        if (this.ispk10) {
            return this.getStringGenertorispk10();
        }
        else if (+(this.share.pid) == 71) {
            return this.encrypt(JSON.stringify(this.basketBall));
        }
        return this.getStringGenertor();
    };
    BasketServiceProvider.prototype.getStringGenertorispk10 = function () {
        var _this = this;
        var balls = [];
        this.share.basketData.forEach(function (v, key) {
            var ball = _this.fiterBalls(v, v.name_en);
            if (v.iszhixuanhezhi) {
                ball = v.label;
            }
            else if (v.isliangmianpan || /caichehao.dingweidan.dingweidan/.test(v.fullName_en)) {
                ball = [];
                v.selectarea.forEach(function (v3) {
                    if (Array.isArray(v3.value)) {
                        var tmp_3 = [];
                        v3.value.forEach(function (v4, k4) {
                            v4 && tmp_3.push(v.isAnMingChi ? ([1, 0, 3, 2][k4]) : k4);
                        });
                        ball.push(tmp_3.join(''));
                    }
                });
            }
            balls.push({
                "jsId": 2,
                "wayId": v.id,
                "ball": Array.isArray(ball) ? ball.join('|') : ball,
                "position": [],
                "viewBalls": v.label.join('|'),
                "num": v.count,
                "type": v.fullName_en,
                "onePrice": 2,
                "prize_group": _this.setcustomprizeGroupchoose,
                "moneyunit": v.mutipleAndModeObj.mode,
                "multiple": v.mutipleAndModeObj.times * _this.share.globalData.globalMutile
            });
        });
        return this.encrypt(JSON.stringify(balls));
    };
    BasketServiceProvider.prototype.getStringGenertor = function () {
        var _this = this;
        var balls = [];
        var ReplaceBallNameByMap = {
            '5单0双': '5',
            '4单1双': '4',
            '3单2双': '3',
            '2单3双': '2',
            '1单4双': '1',
            '0单5双': '0'
        };
        this.share.basketData.forEach(function (v, key) {
            var ball = _this.fiterBalls(v, v.name_en);
            if (Array.isArray(ball) && /单|双/.test(ball[0])) {
                for (var key_1 in ReplaceBallNameByMap) {
                    ball[0] = ball[0].replace(key_1, ReplaceBallNameByMap[key_1]);
                }
                var tmp = ball[0].split('').join(' ').split(/\s+/).join(' ');
                ball = tmp;
            }
            balls.push({
                "jsId": key,
                "wayId": v.id,
                "ball": Array.isArray(ball) ? ball.join('|') : ball,
                "position": [],
                "viewBalls": v.label.join('|'),
                "num": v.count,
                "type": v.fullName_en,
                "onePrice": 2,
                "prize_group": _this.setcustomprizeGroupchoose,
                "moneyunit": v.mutipleAndModeObj.mode,
                "multiple": v.mutipleAndModeObj.times * _this.share.globalData.globalMutile
            });
        });
        return this.encrypt(JSON.stringify(balls));
    };
    BasketServiceProvider.prototype.getOrderIssure = function () {
        var orderIssue = {};
        for (var i = 0; i < this.share.globalData.trace; i++) {
            orderIssue[this.gameconfigure.getIssuesList.data.trace_issues[i].number] = 1;
        }
        return orderIssue;
    };
    BasketServiceProvider.prototype.saobogetSubmitData = function (balls) {
        var totalamont = 0;
        balls.forEach(function (v) { return totalamont += (v.moneyunit * 2 * v.multiple * v.num); });
        var orderIssue = {};
        for (var i = 0; i < 1; i++) {
            orderIssue[this.gameconfigure.getIssuesList.data.trace_issues[i].number] = 1;
        }
        return {
            "gameId": this.share.pid,
            "isTrace": 0,
            "traceWinStop": 0,
            "traceStopValue": 0,
            "balls": this.encrypt(JSON.stringify(balls)),
            "orders": orderIssue,
            "amount": totalamont,
            is_encoded: 1,
            _token: this.share.user.token,
            bet_source: this.share.plat
        };
    };
    BasketServiceProvider.prototype.getSubmitData = function () {
        return {
            "gameId": this.share.pid,
            "isTrace": +(this.share.globalData.trace > 1),
            "traceWinStop": +this.traceWinStop,
            "traceStopValue": 1,
            "balls": this.getBallsString(),
            "orders": this.getOrderIssure(),
            "amount": this.totalAllCount,
            is_encoded: 1,
            _token: this.share.user.token,
            bet_source: this.share.plat
        };
    };
    BasketServiceProvider.prototype.messages = function (obj) {
        if (obj.isRedudu)
            this.share.showToast('订单已经存在', 1000);
    };
    BasketServiceProvider.prototype.getRondomBall = function () {
        this.findRandom(this.c.name_cn, this.c);
        this.mainBussiness(this.c);
        var isSucess = this.addDataToBasket(this.c);
        if (isSucess)
            this.share.showToast('注单添加成功', 1000, 'bottom');
        else
            this.messages(this.c);
    };
    BasketServiceProvider.prototype.finishRequest = function (data, goContent) {
        if (data.isSuccess) {
            data.data.istrace = +(this.share.globalData.trace > 1);
            goContent.navCtrl.push("BetSuccessPage", data);
            this.clearAll();
        }
        else {
            this.share.showAlert('', ['确定'], data.type && data.type == "bet-too-fast" ? "您投注太快了,请休息会再来" : data.Msg);
        }
        this.balance.getBalance();
    };
    BasketServiceProvider.prototype.saobaoSubmit = function (balls, content) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.submitProcessing)
                            return [2 /*return*/];
                        this.submitProcessing = true;
                        this.share.showLoading();
                        _a = this.gameconfigure;
                        return [4 /*yield*/, this.gameconfigure.outergetIssues()];
                    case 1:
                        _a.getIssuesList = _b.sent();
                        this.loading && this.loading.dismiss();
                        return [4 /*yield*/, this.saobodoSubmint(balls)];
                    case 2:
                        data = _b.sent();
                        this.submitProcessing = false;
                        if (data.isSuccess) {
                            this.share.showToast('投注成功');
                            this.clearAll();
                        }
                        else {
                            this.share.showAlert('', ['确定'], data.type && data.type == "bet-too-fast" ? "您投注太快了,请休息会再来" : data.Msg);
                        }
                        this.balance.getBalance();
                        return [2 /*return*/];
                }
            });
        });
    };
    BasketServiceProvider.prototype.submit = function (goContent) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.ispk10 = this.share.ispk10;
                        if (!!(this.share.basketData.length)) return [3 /*break*/, 1];
                        this.share.showToast('号码篮不能为空', 1000);
                        return [3 /*break*/, 4];
                    case 1:
                        if (this.submitProcessing)
                            return [2 /*return*/];
                        this.submitProcessing = true;
                        this.share.showLoading();
                        _a = this.gameconfigure;
                        return [4 /*yield*/, this.gameconfigure.outergetIssues()];
                    case 2:
                        _a.getIssuesList = _b.sent();
                        this.loading && this.loading.dismiss();
                        return [4 /*yield*/, this.doSubmint()];
                    case 3:
                        data = _b.sent();
                        this.submitProcessing = false;
                        this.finishRequest(data, goContent);
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BasketServiceProvider.prototype.saobodoSubmint = function (balls) {
        return this.httpclient.post("/mobile-lotteries-h5/bet/" + +this.share.pid, this.saobogetSubmitData(balls));
    };
    BasketServiceProvider.prototype.doSubmint = function () {
        return this.httpclient.post("/mobile-lotteries-h5/bet/" + +this.share.pid, this.getSubmitData());
    };
    return BasketServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_2__tools_business_tool__["a" /* BusinessTool */]));
BasketServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__global_share_balance__["a" /* BalanceProvider */], __WEBPACK_IMPORTED_MODULE_4__global_share_global_share__["a" /* GlobalShareProvider */], __WEBPACK_IMPORTED_MODULE_3__gameconfig_service_gameconfig_service__["a" /* GameconfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__http_client_http_client__["a" /* HttpClientProvider */]])
], BasketServiceProvider);

//# sourceMappingURL=basket-service.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LhcPage; });
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
 * Generated class for the LhcPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LhcPage = (function () {
    function LhcPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    LhcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LhcPage');
    };
    LhcPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: '投注成功',
            subTitle: '您可以通过"游戏记录"查询您的投注记录！<a class="view-myHistory" href="http://www.baidu.com">查看投注记录</a>',
        });
        alert.present();
    };
    return LhcPage;
}());
LhcPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lhc',template:/*ion-inline-start:"/Users/sumail/Downloads/bomao-app/src/pages/games/lhc/lhc.html"*/'\n<!--头部-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <h1>luihe cai</h1>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<!--主要内容-->\n<ion-content class="no-scroll">\n  <div class="lhc-container">\n    <!--头部状态模块-->\n    <header class="lhc-header cl">\n      <div class="status-title cl">\n        <p>第1041期/等待开奖中</p>\n      </div>\n      <div class="status-box cl">\n        <div class="status-unit status-number"><span class="red-ball">8</span>\n          <p>猪</p>\n        </div>\n        <div class="status-unit status-plus"><span>+</span>\n        </div>\n        <div class="status-unit status-number"><span class="red-ball">8</span>\n          <p>猪</p>\n        </div>\n        <div class="status-unit status-plus"><span>+</span>\n        </div>\n        <div class="status-unit status-number"><span class="red-ball">8</span>\n          <p>猪</p>\n        </div>\n        <div class="status-unit status-plus"><span>+</span>\n        </div>\n        <div class="status-unit status-number"><span class="red-ball">8</span>\n          <p>猪</p>\n        </div>\n        <div class="status-unit status-plus"><span>+</span>\n        </div>\n        <div class="status-unit status-number"><span class="red-ball">8</span>\n          <p>猪</p>\n        </div>\n        <div class="status-unit status-plus"><span>+</span>\n        </div>\n        <div class="status-unit status-number"><span class="red-ball">8</span>\n          <p>猪</p>\n        </div>\n        <div class="status-unit status-plus"><span>+</span>\n        </div>\n        <div class="status-unit status-number"><span class="red-ball">8</span>\n          <p>猪</p>\n        </div>\n        <div class="status-unit status-plus"><span>=</span>\n        </div>\n        <div class="status-unit "><span>168</span>\n        </div>\n      </div>\n      <div class="status-time cl">\n        <div class="l">第161121080期投注截止</div>\n        <div class="r">\n          <span>00</span> : <span>45</span> : <span>12</span>\n        </div>\n      </div>\n    </header>\n    <!--特码彩种-->\n    <section class="lhc-tm cl">\n      <section class="t-box">\n        <ul class="cl">\n          <li class="current">单</li>\n          <li>双</li>\n          <li>大</li>\n          <li>小</li>\n          <li>鼠</li>\n          <li>牛</li>\n          <li>虎</li>\n          <li>兔</li>\n          <li>龙</li>\n          <li>蛇</li>\n          <li>马</li>\n          <li>羊</li>\n          <li>猴</li>\n          <li>鸡</li>\n          <li>狗</li>\n          <li>猪</li>\n        </ul>\n      </section>\n      <section class="b-box cl">\n        <ul>\n          <li class="tm-unit"><span class="ball red-ball currunt">1</span></li>\n          <li class="tm-unit"><span class="ball red-ball currunt">2</span></li>\n          <li class="tm-unit"><span class="ball purple-ball currunt">3</span></li>\n          <li class="tm-unit"><span class="ball purple-ball currunt">4</span></li>\n          <li class="tm-unit"><span class="ball green-ball currunt">5</span></li>\n          <li class="tm-unit"><span class="ball green-ball currunt">6</span></li>\n          <li class="tm-unit"><span class="ball red-ball">7</span></li>\n          <li class="tm-unit"><span class="ball red-ball">8</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">9</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">10</span></li>\n          <li class="tm-unit"><span class="ball green-ball">11</span></li>\n          <li class="tm-unit"><span class="ball red-ball">12</span></li>\n          <li class="tm-unit"><span class="ball red-ball">13</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">14</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">15</span></li>\n          <li class="tm-unit"><span class="ball green-ball">16</span></li>\n          <li class="tm-unit"><span class="ball green-ball">17</span></li>\n          <li class="tm-unit"><span class="ball red-ball">18</span></li>\n          <li class="tm-unit"><span class="ball red-ball">19</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">20</span></li>\n          <li class="tm-unit"><span class="ball green-ball">21</span></li>\n          <li class="tm-unit"><span class="ball green-ball">22</span></li>\n          <li class="tm-unit"><span class="ball red-ball">23</span></li>\n          <li class="tm-unit"><span class="ball red-ball">24</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">25</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">26</span></li>\n          <li class="tm-unit"><span class="ball green-ball">27</span></li>\n          <li class="tm-unit"><span class="ball green-ball">28</span></li>\n          <li class="tm-unit"><span class="ball red-ball">29</span></li>\n          <li class="tm-unit"><span class="ball red-ball">30</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">31</span></li>\n          <li class="tm-unit"><span class="ball green-ball">32</span></li>\n          <li class="tm-unit"><span class="ball green-ball">33</span></li>\n          <li class="tm-unit"><span class="ball red-ball">34</span></li>\n          <li class="tm-unit"><span class="ball red-ball">35</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">36</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">37</span></li>\n          <li class="tm-unit"><span class="ball green-ball">38</span></li>\n          <li class="tm-unit"><span class="ball green-ball">39</span></li>\n          <li class="tm-unit"><span class="ball red-ball">40</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">41</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">42</span></li>\n          <li class="tm-unit"><span class="ball green-ball">43</span></li>\n          <li class="tm-unit"><span class="ball green-ball">44</span></li>\n          <li class="tm-unit"><span class="ball red-ball">45</span></li>\n          <li class="tm-unit"><span class="ball red-ball">46</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">47</span></li>\n          <li class="tm-unit"><span class="ball purple-ball">48</span></li>\n          <li class="tm-unit"><span class="ball green-ball">49</span></li>\n        </ul>\n      </section>\n    </section>\n    <!--半波彩种-->\n    <section class="lhc-bb">\n      <div class="bb-unit currunt">\n        <h2>红大<span> 赔率6.68</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="red-ball">29</span></li>\n            <li class="bb"><span class="red-ball">30</span></li>\n            <li class="bb"><span class="red-ball">34</span></li>\n            <li class="bb"><span class="red-ball">35</span></li>\n            <li class="bb"><span class="red-ball">40</span></li>\n            <li class="bb"><span class="red-ball">45</span></li>\n            <li class="bb"><span class="red-ball">46</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>红小<span> 赔率4.68</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="red-ball">01</span></li>\n            <li class="bb"><span class="red-ball">02</span></li>\n            <li class="bb"><span class="red-ball">07</span></li>\n            <li class="bb"><span class="red-ball">08</span></li>\n            <li class="bb"><span class="red-ball">12</span></li>\n            <li class="bb"><span class="red-ball">13</span></li>\n            <li class="bb"><span class="red-ball">18</span></li>\n            <li class="bb"><span class="red-ball">19</span></li>\n            <li class="bb"><span class="red-ball">23</span></li>\n            <li class="bb"><span class="red-ball">24</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>红单<span> 赔率5.85</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="red-ball">01</span></li>\n            <li class="bb"><span class="red-ball">07</span></li>\n            <li class="bb"><span class="red-ball">13</span></li>\n            <li class="bb"><span class="red-ball">19</span></li>\n            <li class="bb"><span class="red-ball">23</span></li>\n            <li class="bb"><span class="red-ball">29</span></li>\n            <li class="bb"><span class="red-ball">35</span></li>\n            <li class="bb"><span class="red-ball">45</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>红双<span> 赔率5.19</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="red-ball">02</span></li>\n            <li class="bb"><span class="red-ball">08</span></li>\n            <li class="bb"><span class="red-ball">12</span></li>\n            <li class="bb"><span class="red-ball">18</span></li>\n            <li class="bb"><span class="red-ball">24</span></li>\n            <li class="bb"><span class="red-ball">30</span></li>\n            <li class="bb"><span class="red-ball">34</span></li>\n            <li class="bb"><span class="red-ball">40</span></li>\n            <li class="bb"><span class="red-ball">46</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>红合单<span> 赔率5.19</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="red-ball">01</span></li>\n            <li class="bb"><span class="red-ball">07</span></li>\n            <li class="bb"><span class="red-ball">12</span></li>\n            <li class="bb"><span class="red-ball">18</span></li>\n            <li class="bb"><span class="red-ball">23</span></li>\n            <li class="bb"><span class="red-ball">29</span></li>\n            <li class="bb"><span class="red-ball">30</span></li>\n            <li class="bb"><span class="red-ball">34</span></li>\n            <li class="bb"><span class="red-ball">45</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>红合双<span> 赔率5.85</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="red-ball">02</span></li>\n            <li class="bb"><span class="red-ball">08</span></li>\n            <li class="bb"><span class="red-ball">13</span></li>\n            <li class="bb"><span class="red-ball">19</span></li>\n            <li class="bb"><span class="red-ball">24</span></li>\n            <li class="bb"><span class="red-ball">35</span></li>\n            <li class="bb"><span class="red-ball">40</span></li>\n            <li class="bb"><span class="red-ball">46</span></li>\n          </ul>\n        </div>\n      </div>\n\n      <div class="bb-unit currunt">\n        <h2>绿大<span> 赔率5.85</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="green-ball">27</span></li>\n            <li class="bb"><span class="green-ball">28</span></li>\n            <li class="bb"><span class="green-ball">32</span></li>\n            <li class="bb"><span class="green-ball">33</span></li>\n            <li class="bb"><span class="green-ball">38</span></li>\n            <li class="bb"><span class="green-ball">39</span></li>\n            <li class="bb"><span class="green-ball">43</span></li>\n            <li class="bb"><span class="green-ball">44</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>绿小<span> 赔率6.68</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="green-ball">05</span></li>\n            <li class="bb"><span class="green-ball">06</span></li>\n            <li class="bb"><span class="green-ball">11</span></li>\n            <li class="bb"><span class="green-ball">16</span></li>\n            <li class="bb"><span class="green-ball">17</span></li>\n            <li class="bb"><span class="green-ball">21</span></li>\n            <li class="bb"><span class="green-ball">22</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>绿单<span> 赔率5.85</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="green-ball">05</span></li>\n            <li class="bb"><span class="green-ball">11</span></li>\n            <li class="bb"><span class="green-ball">17</span></li>\n            <li class="bb"><span class="green-ball">21</span></li>\n            <li class="bb"><span class="green-ball">27</span></li>\n            <li class="bb"><span class="green-ball">33</span></li>\n            <li class="bb"><span class="green-ball">39</span></li>\n            <li class="bb"><span class="green-ball">43</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>绿双<span> 赔率6.68</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="green-ball">06</span></li>\n            <li class="bb"><span class="green-ball">16</span></li>\n            <li class="bb"><span class="green-ball">22</span></li>\n            <li class="bb"><span class="green-ball">28</span></li>\n            <li class="bb"><span class="green-ball">32</span></li>\n            <li class="bb"><span class="green-ball">38</span></li>\n            <li class="bb"><span class="green-ball">44</span></li>\n            、\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>绿合单<span> 赔率6.68</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="green-ball">05</span></li>\n            <li class="bb"><span class="green-ball">16</span></li>\n            <li class="bb"><span class="green-ball">21</span></li>\n            <li class="bb"><span class="green-ball">27</span></li>\n            <li class="bb"><span class="green-ball">32</span></li>\n            <li class="bb"><span class="green-ball">38</span></li>\n            <li class="bb"><span class="green-ball">43</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>绿合双<span> 赔率5.85</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="green-ball">06</span></li>\n            <li class="bb"><span class="green-ball">11</span></li>\n            <li class="bb"><span class="green-ball">17</span></li>\n            <li class="bb"><span class="green-ball">22</span></li>\n            <li class="bb"><span class="green-ball">28</span></li>\n            <li class="bb"><span class="green-ball">33</span></li>\n            <li class="bb"><span class="green-ball">39</span></li>\n            <li class="bb"><span class="green-ball">44</span></li>\n          </ul>\n        </div>\n      </div>\n\n      <div class="bb-unit currunt">\n        <h2>蓝大<span> 赔率5.19</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="purple-ball">25</span></li>\n            <li class="bb"><span class="purple-ball">26</span></li>\n            <li class="bb"><span class="purple-ball">31</span></li>\n            <li class="bb"><span class="purple-ball">36</span></li>\n            <li class="bb"><span class="purple-ball">37</span></li>\n            <li class="bb"><span class="purple-ball">41</span></li>\n            <li class="bb"><span class="purple-ball">42</span></li>\n            <li class="bb"><span class="purple-ball">47</span></li>\n            <li class="bb"><span class="purple-ball">48</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>蓝小<span> 赔率6.68</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="purple-ball">03</span></li>\n            <li class="bb"><span class="purple-ball">04</span></li>\n            <li class="bb"><span class="purple-ball">09</span></li>\n            <li class="bb"><span class="purple-ball">10</span></li>\n            <li class="bb"><span class="purple-ball">14</span></li>\n            <li class="bb"><span class="purple-ball">15</span></li>\n            <li class="bb"><span class="purple-ball">20</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>蓝单<span> 赔率5.85</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="purple-ball">03</span></li>\n            <li class="bb"><span class="purple-ball">09</span></li>\n            <li class="bb"><span class="purple-ball">15</span></li>\n            <li class="bb"><span class="purple-ball">25</span></li>\n            <li class="bb"><span class="purple-ball">31</span></li>\n            <li class="bb"><span class="purple-ball">37</span></li>\n            <li class="bb"><span class="purple-ball">41</span></li>\n            <li class="bb"><span class="purple-ball">47</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>蓝双<span> 赔率5.85</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="purple-ball">04</span></li>\n            <li class="bb"><span class="purple-ball">10</span></li>\n            <li class="bb"><span class="purple-ball">14</span></li>\n            <li class="bb"><span class="purple-ball">20</span></li>\n            <li class="bb"><span class="purple-ball">26</span></li>\n            <li class="bb"><span class="purple-ball">36</span></li>\n            <li class="bb"><span class="purple-ball">42</span></li>\n            <li class="bb"><span class="purple-ball">48</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>蓝合单<span> 赔率5.85</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="purple-ball">03</span></li>\n            <li class="bb"><span class="purple-ball">09</span></li>\n            <li class="bb"><span class="purple-ball">10</span></li>\n            <li class="bb"><span class="purple-ball">14</span></li>\n            <li class="bb"><span class="purple-ball">25</span></li>\n            <li class="bb"><span class="purple-ball">36</span></li>\n            <li class="bb"><span class="purple-ball">41</span></li>\n            <li class="bb"><span class="purple-ball">47</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="bb-unit">\n        <h2>蓝合双<span> 赔率5.85</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul class="cl">\n            <li class="bb"><span class="purple-ball">04</span></li>\n            <li class="bb"><span class="purple-ball">15</span></li>\n            <li class="bb"><span class="purple-ball">20</span></li>\n            <li class="bb"><span class="purple-ball">26</span></li>\n            <li class="bb"><span class="purple-ball">31</span></li>\n            <li class="bb"><span class="purple-ball">37</span></li>\n            <li class="bb"><span class="purple-ball">42</span></li>\n            <li class="bb"><span class="purple-ball">48</span></li>\n          </ul>\n        </div>\n      </div>\n    </section>\n    <!--12生肖-->\n    <section class="lhc-animals">\n      <div class="animals-unit currunt">\n        <h2>鼠<span> 赔率11.94</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="purple-ball">10</span></li>\n            <li><span class="green-ball">22</span></li>\n            <li><span class="red-ball">34</span></li>\n            <li><span class="red-ball">46</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit currunt">\n        <h2>牛<span> 赔率11.94</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="purple-ball">09</span></li>\n            <li><span class="green-ball">21</span></li>\n            <li><span class="green-ball">33</span></li>\n            <li><span class="purple-ball">45</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>虎<span> 赔率11.94</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="red-ball">08</span></li>\n            <li><span class="purple-ball">20</span></li>\n            <li><span class="green-ball">32</span></li>\n            <li><span class="green-ball">44</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>兔<span> 赔率11.94</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="red-ball">07</span></li>\n            <li><span class="red-ball">19</span></li>\n            <li><span class="purple-ball">31</span></li>\n            <li><span class="green-ball">43</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>龙<span> 赔率11.94</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="green-ball">06</span></li>\n            <li><span class="red-ball">18</span></li>\n            <li><span class="red-ball">30</span></li>\n            <li><span class="purple-ball">42</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>蛇<span> 赔率11.94</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="green-ball">05</span></li>\n            <li><span class="green-ball">17</span></li>\n            <li><span class="red-ball">29</span></li>\n            <li><span class="purple-ball">41</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>马<span> 赔率11.94</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="purple-ball">04</span></li>\n            <li><span class="green-ball">16</span></li>\n            <li><span class="green-ball">28</span></li>\n            <li><span class="red-ball">40</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>羊<span> 赔率11.94</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="purple-ball">03</span></li>\n            <li><span class="purple-ball">15</span></li>\n            <li><span class="green-ball">27</span></li>\n            <li><span class="green-ball">39</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>猴<span> 赔率11.94</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="red-ball">02</span></li>\n            <li><span class="purple-ball">14</span></li>\n            <li><span class="purple-ball">26</span></li>\n            <li><span class="green-ball">38</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>鸡<span> 赔率9。55</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="red-ball">01</span></li>\n            <li><span class="red-ball">13</span></li>\n            <li><span class="purple-ball">25</span></li>\n            <li><span class="purple-ball">37</span></li>\n            <li><span class="green-ball">49</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>狗<span> 赔率11.94</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="red-ball">12</span></li>\n            <li><span class="red-ball">24</span></li>\n            <li><span class="purple-ball">36</span></li>\n            <li><span class="purple-ball">48</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>猪<span> 赔率11.94</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="green-ball">11</span></li>\n            <li><span class="red-ball">23</span></li>\n            <li><span class="red-ball">35</span></li>\n            <li><span class="purple-ball">47</span></li>\n          </ul>\n        </div>\n      </div>\n    </section>\n    <!--尾数-->\n    <section class="lhc-animals">\n      <div class="animals-unit currunt">\n        <h2>0尾<span> 赔率2.06</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="purple-ball">10</span></li>\n            <li><span class="purple-ball">20</span></li>\n            <li><span class="red-ball">30</span></li>\n            <li><span class="red-ball">40</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit currunt">\n        <h2>1尾<span> 赔率1.76</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="red-ball">01</span></li>\n            <li><span class="green-ball">11</span></li>\n            <li><span class="green-ball">21</span></li>\n            <li><span class="purple-ball">31</span></li>\n            <li><span class="purple-ball">41</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>2尾<span> 赔率1.76</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="red-ball">02</span></li>\n            <li><span class="red-ball">12</span></li>\n            <li><span class="green-ball">22</span></li>\n            <li><span class="green-ball">32</span></li>\n            <li><span class="purple-ball">42</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>3尾<span> 赔率1.76</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="purple-ball">03</span></li>\n            <li><span class="red-ball">13</span></li>\n            <li><span class="red-ball">23</span></li>\n            <li><span class="green-ball">33</span></li>\n            <li><span class="green-ball">43</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>4尾<span> 赔率1.76</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="purple-ball">04</span></li>\n            <li><span class="purple-ball">14</span></li>\n            <li><span class="red-ball">24</span></li>\n            <li><span class="red-ball">34</span></li>\n            <li><span class="green-ball">44</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>5尾<span> 赔率1.76</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="green-ball">05</span></li>\n            <li><span class="purple-ball">15</span></li>\n            <li><span class="purple-ball">25</span></li>\n            <li><span class="red-ball">35</span></li>\n            <li><span class="red-ball">45</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>6尾<span> 赔率1.76</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="green-ball">06</span></li>\n            <li><span class="green-ball">16</span></li>\n            <li><span class="purple-ball">26</span></li>\n            <li><span class="purple-ball">36</span></li>\n            <li><span class="red-ball">46</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>7尾<span> 赔率1.76</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="red-ball">07</span></li>\n            <li><span class="green-ball">17</span></li>\n            <li><span class="green-ball">27</span></li>\n            <li><span class="purple-ball">37</span></li>\n            <li><span class="purple-ball">47</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>8尾<span> 赔率1.76</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="red-ball">08</span></li>\n            <li><span class="red-ball">18</span></li>\n            <li><span class="green-ball">28</span></li>\n            <li><span class="green-ball">38</span></li>\n            <li><span class="purple-ball">48</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class="animals-unit">\n        <h2>9尾<span> 赔率1.76</span></h2>\n        <span class="bet-money">10000</span>\n        <div class="ball-box">\n          <ul>\n            <li><span class="purple-ball">09</span></li>\n            <li><span class="red-ball">19</span></li>\n            <li><span class="red-ball">29</span></li>\n            <li><span class="green-ball">39</span></li>\n            <li><span class="green-ball">49</span></li>\n          </ul>\n        </div>\n      </div>\n    </section>\n    <!--总分-->\n    <section class="lhc-points">\n      <div class="points-unit current">\n        <h2>大<span> 赔率1.95</span></h2>\n        <span class="bet-money">10000</span>\n        <p>总分大于等于175的，即视为中奖。</p>\n      </div>\n      <div class="points-unit">\n        <h2>小<span> 赔率1.95</span></h2>\n        <span class="bet-money">10000</span>\n        <p>总分小于等于174的，即视为中奖。</p>\n      </div>\n      <div class="points-unit">\n        <h2>单<span> 赔率1.95</span></h2>\n        <span class="bet-money">10000</span>\n        <p>总分是单数的，即视为中奖。</p>\n      </div>\n      <div class="points-unit">\n        <h2>双<span> 赔率1.95</span></h2>\n        <span class="bet-money">10000</span>\n        <p>总分是双数的，即视为中奖。</p>\n      </div>\n      <div class="points-unit points-big current">\n        <h2>大单<span> 赔率3.90</span></h2>\n        <span class="bet-money">10000</span>\n        <p>总分小于等于175且为单数的，即视为中奖。</p>\n      </div>\n      <div class="points-unit points-big">\n        <h2>大双<span> 赔率3.90</span></h2>\n        <span class="bet-money">10000</span>\n        <p>总分大于等于175且为双数的，即视为中奖。</p>\n      </div>\n      <div class="points-unit points-big">\n        <h2>小单<span> 赔率3.90</span></h2>\n        <span class="bet-money">10000</span>\n        <p>总分小于等于174且为单数的，即视为中奖。</p>\n      </div>\n      <div class="points-unit points-big">\n        <h2>小双<span> 赔率3.90</span></h2>\n        <span class="bet-money">10000</span>\n        <p>总分小于等于174且为双数的，即视为中奖。</p>\n      </div>\n    </section>\n  </div>\n\n\n</ion-content>\n<!--页脚内容-->\n<ion-footer>\n  <footer class="lhc-footer">\n    <div class="t-box">\n      <div class="l">\n        共计：9/5注\n      </div>\n      <div class="r">\n        <div class="bet-money">\n          <input type="button" value="-"><input type="text" value="22"><input type="button" value="+">\n        </div>\n        元\n      </div>\n    </div>\n    <div class="b-box">\n      <div class="l">\n        <a href="javascript:;" class="">清空</a><a href="javascript:;">撤单</a>\n      </div>\n      <div class="r">\n        <a href="javascript:;">立即投注</a>\n      </div>\n    </div>\n  </footer>\n</ion-footer>\n\n<!--确认投注弹窗内容-->\n<section class="lhc-popup" *ngIf="false">\n  <div class="pupop-container">\n    <h2>确认信息</h2>\n    <h4>共计：¥<span>34/30</span>注，您确认要下注吗？</h4>\n    <div class="popup-list">\n      <ul>\n        <li>\n          <div class="bet-unit">特码(01)47.77x1</div>\n          <div class="bet-unit">特码(01)47.77x1</div>\n          <div class="bet-unit">特码(01)47.77x1</div>\n        </li>\n        <li>\n          <div class="bet-unit">特码(01)47.77x1</div>\n          <div class="bet-unit">特码(01)47.77x1</div>\n          <div class="bet-unit">特码(01)47.77x1</div>\n        </li>\n        <li>\n          <div class="bet-unit">特码(01)47.77x1</div>\n          <div class="bet-unit">特码(01)47.77x1</div>\n          <div class="bet-unit">特码(01)47.77x1</div>\n        </li>\n        <li>\n          <div class="bet-unit">特码(01)47.77x1</div>\n          <div class="bet-unit">特码(01)47.77x1</div>\n          <div class="bet-unit">特码(01)47.77x1</div>\n        </li>\n      </ul>\n    </div>\n    <button class="offhand-btn" (touchstart)="showAlert()">立即投注</button>\n  </div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/sumail/Downloads/bomao-app/src/pages/games/lhc/lhc.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LhcPage);

//# sourceMappingURL=lhc.js.map

/***/ })

});
//# sourceMappingURL=8.js.map