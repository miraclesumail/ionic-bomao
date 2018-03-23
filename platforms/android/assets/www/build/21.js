webpackJsonp([21],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindBankPageModule", function() { return BindBankPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bind_bank__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_fund_service_bankcard_service__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BindBankPageModule = (function () {
    function BindBankPageModule() {
    }
    return BindBankPageModule;
}());
BindBankPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bind_bank__["a" /* BindBankPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bind_bank__["a" /* BindBankPage */]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_service_fund_service_bankcard_service__["a" /* BankcardService */]]
    })
], BindBankPageModule);

//# sourceMappingURL=bind-bank.module.js.map

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

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankcardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_observe__ = __webpack_require__(209);
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




var _ = new __WEBPACK_IMPORTED_MODULE_1__tools_observe__["a" /* observe */]();
var BankcardService = (function () {
    function BankcardService(httpclient, share) {
        var _this = this;
        this.httpclient = httpclient;
        this.share = share;
        this.isBindBankCard = false;
        this.drawMoneyCount = 2.0;
        this.withdrawData = { data: { accounts: { available: 0, withdrawable: 0 }, bank_cards: [] } };
        this.defautbankcard = {
            "id": "",
            "account": "",
            "account_name": "",
            "bank": "",
            "province": "",
            "city": ""
        };
        this.parameters = { id: '', account: '', fund_password: '', amount: '', _token: '' };
        this.bindBankCardRequestType = { id: 0 };
        this.bindBankCardPostParameter = {
            _token: '',
            bank_id: '',
            province_id: '',
            city_id: '',
            branch: '',
            account_confirmation: '',
            account: '',
            account_name: ''
        };
        this.ValidedBankCardPParameters = {
            _token: '',
            id: '',
            fund_password: '',
            account: '',
            account_name: ''
        };
        this.RemovedBankCardPParameters = {
            _token: '',
            account_name: '',
            account: '',
            fund_password: '',
            id: ''
        };
        _.observe(this.bindBankCardRequestType, 'update', function () { return _this.postBindCardServer(); });
        this.initSetting();
    }
    BankcardService.prototype.initSetting = function () {
    };
    /**
     * 提款页面接口
     */
    BankcardService.prototype.getRemoteServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpclient.get('/mobileh5-withdrawals/withdraw')];
                    case 1:
                        data = _a.sent();
                        try {
                            this.withdrawData = data;
                            this.defautbankcard = data.data.bank_cards[0];
                            this.isBindBankCard = true;
                        }
                        catch (e) {
                            this.isBindBankCard = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BankcardService.prototype.getParameters = function () {
        this.parameters._token = this.share.user.token;
        this.parameters.amount = this.drawMoneyCount;
        this.parameters.account = this.defautbankcard.account;
        this.parameters.fund_password = this.fund_password;
        this.parameters.id = this.defautbankcard.id;
        return this.parameters;
    };
    BankcardService.prototype.postRemoteServer = function () {
        return this.httpclient.post('/mobileh5-withdrawals/withdraw/1', this.getParameters());
    };
    BankcardService.prototype.getbindBankCardPostParameter = function () {
        this.bindBankCardPostParameter._token = this.share.user.token;
        return this.bindBankCardPostParameter;
    };
    BankcardService.prototype.postBindCardServer = function () {
        return this.httpclient.post('/mobileh5-bank-cards/0/bind-card', this.getParameters());
    };
    /**
     * 绑卡提交接口
     * @return {Observable<R>}
     */
    BankcardService.prototype.bindBankCardPostRemoteServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bindBankCardPostRemoteServerAsync()];
                    case 1:
                        result = _a.sent();
                        result.isSuccess && this.getRemoteServer();
                        return [2 /*return*/];
                }
            });
        });
    };
    BankcardService.prototype.bindBankCardPostRemoteServerAsync = function () {
        return this.httpclient.post("/mobileh5-bank-cards/2/bind-card", this.getbindBankCardPostParameter());
    };
    /**
     * 银行卡验证接口,如果用户没有绑定银行卡.就会直接到/mobileh5-bank-cards/1/bind-card,获取银行列表和城市列表
     * @return {{_token: string, id: string, fund_password: string, account: string, account_name: string}}
     */
    BankcardService.prototype.getValidedBankCardPParameters = function () {
        this.ValidedBankCardPParameters._token = this.share.user.token;
        return this.ValidedBankCardPParameters;
    };
    BankcardService.prototype.getRemovedBankCardPParameters = function () {
        this.ValidedBankCardPParameters._token = this.share.user.token;
        return this.ValidedBankCardPParameters;
    };
    /**
     * 删除银行卡接口
     * @return {Observable<R>}
     */
    BankcardService.prototype.removeBankCardPostRemoteServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpclient.post('/mobileh5-bank-cards/destroy', this.getRemovedBankCardPParameters())];
                    case 1:
                        result = _a.sent();
                        result.isSuccess && this.getRemoteServer();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 绑卡页面,用于获取城市列表,银行名称列表
     *
     */
    BankcardService.prototype.getBankCardInformationPostRemoteServer = function () {
        return this.httpclient.post('/mobileh5-bank-cards/1/bind-card', { _token: this.share.user.token });
    };
    BankcardService.prototype.drawAll = function () {
        this.drawMoneyCount = this.withdrawData.data.accounts.withdrawable;
    };
    return BankcardService;
}());
BankcardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_client_http_client__["a" /* HttpClientProvider */], __WEBPACK_IMPORTED_MODULE_3__global_share_global_share__["a" /* GlobalShareProvider */]])
], BankcardService);

//# sourceMappingURL=bankcard-service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindBankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_fund_service_bankcard_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_observe__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_share_global_share__ = __webpack_require__(55);
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





var _ = new __WEBPACK_IMPORTED_MODULE_3__providers_tools_observe__["a" /* observe */]();
/**
 * Generated class for the BindBankPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BindBankPage = (function () {
    function BindBankPage(share, navCtrl, bankcardService) {
        this.share = share;
        this.navCtrl = navCtrl;
        this.bankcardService = bankcardService;
        this.userInput = {
            account_name: "",
            account: "",
            branch: ""
        };
        this.province = { title: '' };
        this.provinceList = [];
        this.city = { title: '' };
        this.cityList = [];
        this.district = { title: '' };
        this.bank = { title: '' };
        this.banks = [];
    }
    BindBankPage.prototype.convertBanksToArray = function (data) {
        var arr = [];
        for (var key in data) {
            var obj = { id: key, name: data[key] };
            arr.push(obj);
        }
        return arr;
    };
    BindBankPage.prototype.initilizeCityAndProvince = function (data) {
        if (data.isSuccess) {
            this.provinceList = data.data.provice_cities;
            this.banks = this.convertBanksToArray(data.data.banks[0]);
        }
        else {
            this.share.showToast(data.Msg);
        }
    };
    BindBankPage.prototype.aaa = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bankcardService.getBankCardInformationPostRemoteServer()];
                    case 1:
                        data = _a.sent();
                        this.initilizeCityAndProvince(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    BindBankPage.prototype.bbb = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bankcardService.postBindCardServer()];
                    case 1:
                        data = _a.sent();
                        this.initilizeCityAndProvince(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    BindBankPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.bankcardService.isBindBankCard) {
            this.aaa();
        }
        else {
            this.bbb();
        }
        _.observe(this.province, function () {
            _this.chooseProvince();
        });
        _.observe(this.city, function () {
            _this.chooseCity();
        });
        _.observe(this.district, function () {
        });
    };
    BindBankPage.prototype.chooseCity = function () {
        var _this = this;
        this.cityList.some(function (v) {
            if (v.id == _this.city.title) {
                _this.district = v.children;
            }
            return v.id == _this.city.title;
        });
    };
    BindBankPage.prototype.chooseProvince = function () {
        var _this = this;
        this.provinceList.some(function (v) {
            if (v.id == _this.province.title) {
                _this.cityList = v.children;
            }
            return v.id == _this.province.title;
        });
    };
    BindBankPage.prototype.get_id = function (data, std) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var val = data_1[_i];
            if (val.id == std.title)
                return val.id;
        }
    };
    BindBankPage.prototype.todoParameter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            bank_id: this.get_id(this.banks, this.bank),
                            province_id: this.get_id(this.provinceList, this.province),
                            city_id: this.get_id(this.cityList, this.city),
                            branch: this.userInput.branch,
                            account_confirmation: this.userInput.account,
                            account: this.userInput.account,
                            account_name: this.userInput.account_name
                        };
                        if (!this.isVaildedParameter(params))
                            return [2 /*return*/];
                        return [4 /*yield*/, this.bankcardService.bindBankCardPostRemoteServerAsync()];
                    case 1:
                        result = _a.sent();
                        if (result.isSuccess) {
                            this.bankcardService.getRemoteServer();
                            this.share.showAlert('', ['确定'], '', '绑卡成功');
                        }
                        else {
                            this.share.showAlert('', ['确定'], '', result.Msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BindBankPage.prototype.isVaildedParameter = function (params) {
        for (var key in params) {
            this.bankcardService.bindBankCardPostParameter[key] = params[key];
            if (!params[key]) {
                this.share.showAlert('请完善资料再提交', ['好的']);
                return false;
            }
        }
        return true;
    };
    BindBankPage.prototype.showConfirm = function () {
        this.todoParameter();
    };
    return BindBankPage;
}());
BindBankPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bind-bank',template:/*ion-inline-start:"/Users/eric.ch/Documents/bomao-app/src/pages/money/bind-bank/bind-bank.html"*/'<ion-header>\n  <ion-navbar>\n    <button icon-only class="fr">\n      <mores></mores>\n    </button>\n    <ion-title>银行卡管理</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="gray-bg">\n  <div class="new-recharge mt10">\n    <span class="amend-l fl">持卡人姓名：</span>\n    <div class="amend-r ml95 clear"><input [(ngModel)]="userInput.account_name" type="text" class="money-input"></div>\n  </div>\n  <div class="new-recharge mt10">\n    <span class="amend-l fl">卡号：</span>\n    <div class="amend-r ml50 clear"><input [(ngModel)]="userInput.account" minlength="16" maxlength="20" type="tel" class="money-input"></div>\n  </div>\n  <ion-list class="mt10">\n    <ion-item>\n      <ion-label>开户行名称</ion-label>\n      <ion-select [(ngModel)]="bank.title" cancelText="取消" okText="确认" placeholder="选择开户行">\n        <ion-option value="{{item.id}}" *ngFor="let item of banks">\n          {{item.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>开户所在省</ion-label>\n      <ion-select [(ngModel)]="province.title" cancelText="取消" okText="确认" placeholder="选择省">\n        <ion-option value="{{item.id}}" *ngFor="let item of provinceList">\n          {{item.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="cityList.length">\n      <ion-label>开户所在市</ion-label>\n      <ion-select [(ngModel)]="city.title" cancelText="取消" okText="确认" placeholder="选择市">\n        <ion-option value="{{items.id}}" *ngFor="let items of cityList">\n          {{items.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <div class="new-recharge mt10">\n    <span class="amend-l fl">支行名称：</span>\n    <div class="amend-r ml80 clear"><input [(ngModel)]="userInput.branch"  type="text" class="money-input"></div>\n  </div>\n  <div class="save-btn">\n    <button ion-button full (click)="showConfirm()">立即绑卡</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/eric.ch/Documents/bomao-app/src/pages/money/bind-bank/bind-bank.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_share_global_share__["a" /* GlobalShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_fund_service_bankcard_service__["a" /* BankcardService */]])
], BindBankPage);

//# sourceMappingURL=bind-bank.js.map

/***/ })

});
//# sourceMappingURL=21.js.map