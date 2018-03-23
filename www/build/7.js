webpackJsonp([7],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBankPageModule", function() { return AddBankPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_bank__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_fund_service_setfundpassword_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_fund_service_bankcard_service__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AddBankPageModule = (function () {
    function AddBankPageModule() {
    }
    return AddBankPageModule;
}());
AddBankPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_bank__["a" /* AddBankPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_bank__["a" /* AddBankPage */]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_service_fund_service_setfundpassword_service__["a" /* SetfundpasswordService */], __WEBPACK_IMPORTED_MODULE_5__providers_service_fund_service_bankcard_service__["a" /* BankcardService */]]
    })
], AddBankPageModule);

//# sourceMappingURL=add-bank.module.js.map

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

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankcardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_observe__ = __webpack_require__(209);
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

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetfundpasswordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_share_global_share__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_client_http_client__ = __webpack_require__(109);
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



var SetfundpasswordService = (function () {
    function SetfundpasswordService(http, share) {
        this.http = http;
        this.share = share;
        this.parameters = {
            _token: '',
            fund_password: '',
            fund_password_confirmation: ''
        };
        this.initialize();
    }
    SetfundpasswordService.prototype.getRemoteServer = function () {
        return null;
    };
    SetfundpasswordService.prototype.initialize = function () {
        if (this.isNoSetFundPW()) {
            this.showPrompt();
        }
        return this.isNoSetFundPW();
    };
    SetfundpasswordService.prototype.isNoSetFundPW = function () {
        return !(+this.share.user.is_set_fund_password);
    };
    SetfundpasswordService.prototype.getParameters = function () {
        this.parameters._token = this.share.user.token;
        return this.parameters;
    };
    SetfundpasswordService.prototype.postRemoteServer = function () {
        return this.http.post('/mobileh5-users/safe-reset-fund-password', this.getParameters());
    };
    SetfundpasswordService.prototype.showPrompt = function () {
        var _this = this;
        this.share.showAlert('请设置资金密码', [{ text: '取消', handler: function (data) { } },
            { text: '保存',
                handler: function (data) {
                    if (data.password != data.repassword) {
                        _this.share.showToast('两次输入不一致,请重新输入');
                    }
                    else if (!data.password || !data.repassword) {
                        _this.share.showToast('输入有误');
                    }
                    else {
                        _this.parameters.fund_password = data.password;
                        _this.parameters.fund_password_confirmation = data.repassword;
                        _this.aaa(prompt);
                    }
                    return false;
                }
            }], '', '', [{ type: 'password', name: 'password', placeholder: '至少8位,字母和数字的组合' },
            { type: 'password', name: 'repassword', placeholder: '重复输入资金密码' }]);
    };
    SetfundpasswordService.prototype.aaa = function (prompt) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postRemoteServer()];
                    case 1:
                        data = _a.sent();
                        if (data.isSuccess) {
                            this.share.showToast('资金密码设置成功');
                            this.share.user.is_set_fund_password = 1;
                            prompt.dismiss();
                        }
                        else {
                            this.share.showToast(data.Msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return SetfundpasswordService;
}());
SetfundpasswordService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_client_http_client__["a" /* HttpClientProvider */], __WEBPACK_IMPORTED_MODULE_1__global_share_global_share__["a" /* GlobalShareProvider */]])
], SetfundpasswordService);

//# sourceMappingURL=setfundpassword-service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_fund_service_setfundpassword_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_fund_service_bankcard_service__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddBankPage = (function () {
    function AddBankPage(navCtrl, setfundpasswordService, bankcardService) {
        this.navCtrl = navCtrl;
        this.setfundpasswordService = setfundpasswordService;
        this.bankcardService = bankcardService;
        this.RechargePage = "RechargePage";
        this.RemoveBindPage = "RemoveBindPage";
        this.bankcardIconMap = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].bankcardIconMap;
    }
    AddBankPage.prototype.ionViewDidLoad = function () {
    };
    AddBankPage.prototype.addBinddBankCard = function () {
        if (this.bankcardService.withdrawData.data.bank_cards.length >= 4) {
            this.navCtrl.pop();
        }
        else {
            var isset = this.setfundpasswordService.initialize();
            if (!isset) {
                if (this.bankcardService.isBindBankCard) {
                    this.navCtrl.push("ValidBankPage");
                }
                else {
                    this.navCtrl.push("BindBankPage");
                }
            }
        }
    };
    AddBankPage.prototype.gopage = function (page, p) {
        this.navCtrl.push(page, p);
    };
    return AddBankPage;
}());
AddBankPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-bank',template:/*ion-inline-start:"/Users/sumail/Downloads/bomao-app/src/pages/money/add-bank/add-bank.html"*/'<ion-header>\n  <ion-navbar>\n    <button icon-only class="fr">\n      <mores></mores>\n    </button>\n    <ion-title>银行卡管理</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="{{bankcardService.isBindBankCard ? \'gray-bg\':\'white-bg\'}}" >\n  <div *ngIf="bankcardService.isBindBankCard">\n    <div class="recharge-bank mt10" *ngFor="let item of bankcardService.withdrawData.data.bank_cards">\n      <button ion-button class="bank-btn fr" (click)="gopage(\'RechargePage\',{bankcard:item})">充值</button>\n      <div (click)="gopage(\'RemoveBindPage\',{bankcard:item})"`>\n        <img src="{{bankcardIconMap[item.name]}}" alt="">\n        <span class="bank-detail">\n          <span class="name"><i>{{item.bank}}</i></span>\n          <span class="number">**** **** **** {{item.account.slice(-4)}}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class="bank-pic" *ngIf="!bankcardService.isBindBankCard">\n    <div><img src="assets/img/bank-pic.svg" alt=""></div>\n    <div class="bank-text">您还未添加任何银行卡</div>\n    <div class="col-1">点击下方按钮快速绑定银行卡</div>\n  </div>\n  <div class="save-btn">\n    <button ion-button full (click)="addBinddBankCard()">\n      {{this.bankcardService.withdrawData.data.bank_cards.length >= 4 ?\'返回\' :\'添加银行卡\'}}\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sumail/Downloads/bomao-app/src/pages/money/add-bank/add-bank.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_fund_service_setfundpassword_service__["a" /* SetfundpasswordService */], __WEBPACK_IMPORTED_MODULE_4__providers_service_fund_service_bankcard_service__["a" /* BankcardService */]])
], AddBankPage);

//# sourceMappingURL=add-bank.js.map

/***/ })

});
//# sourceMappingURL=7.js.map