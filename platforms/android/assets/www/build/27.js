webpackJsonp([27],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveBindPageModule", function() { return RemoveBindPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remove_bind__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_fund_service_bankcard_service__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RemoveBindPageModule = (function () {
    function RemoveBindPageModule() {
    }
    return RemoveBindPageModule;
}());
RemoveBindPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__remove_bind__["a" /* RemoveBindPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__remove_bind__["a" /* RemoveBindPage */]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_service_fund_service_bankcard_service__["a" /* BankcardService */]]
    })
], RemoveBindPageModule);

//# sourceMappingURL=remove-bind.module.js.map

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

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveBindPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_fund_service_bankcard_service__ = __webpack_require__(347);
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





/**
 * Generated class for the RemoveBindPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RemoveBindPage = (function () {
    function RemoveBindPage(share, navCtrl, params, bankcardService) {
        this.share = share;
        this.navCtrl = navCtrl;
        this.params = params;
        this.bankcardService = bankcardService;
        this.bankcard = { account_name: '', bank: '', account: '', id: '' };
        this.bankcardIconMap = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].bankcardIconMap;
        this.bankcard = this.params.get('bankcard');
    }
    RemoveBindPage.prototype.showConfirm = function () {
        var _this = this;
        this.share.showAlert('确定解除该绑定的银行卡？', [{ text: '取消', handler: function () { } },
            { text: '是的', handler: function () { return _this.removeBankcard(); } }]);
    };
    RemoveBindPage.prototype.removeBankcard = function () {
        var _this = this;
        this.bankcardService.RemovedBankCardPParameters.account_name = this.bankcard.account_name;
        this.bankcardService.RemovedBankCardPParameters.id = this.bankcard.id;
        this.bankcardService.RemovedBankCardPParameters.account = this.bankcard.account;
        setTimeout(function () { return _this.removeBankcardAction(); }, 500);
    };
    RemoveBindPage.prototype.removeBankcardAction = function () {
        var _this = this;
        this.share.showAlert('资金密码', [{ text: '取消', handler: function (data) { } },
            { text: '保存', handler: function (data) {
                    if (!data.password) {
                        _this.share.showToast('请输入资金密码');
                    }
                    else {
                        _this.bankcardService.RemovedBankCardPParameters.fund_password = data.password;
                        _this.aaa(prompt);
                    }
                    return false;
                }
            }], '', '', [{ type: 'password',
                name: 'password',
                placeholder: '输入资金密码' }]);
    };
    RemoveBindPage.prototype.aaa = function (prompt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bankcardService.removeBankCardPostRemoteServer()];
                    case 1:
                        data = _a.sent();
                        if (data.isSuccess) {
                            this.share.showToast('银行上解绑成功');
                            prompt.dismiss();
                            setTimeout(function () { return _this.navCtrl.pop(); }, 1000);
                        }
                        else {
                            this.share.showToast(data.Msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return RemoveBindPage;
}());
RemoveBindPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-remove-bind',template:/*ion-inline-start:"/Users/eric.ch/Documents/bomao-app/src/pages/money/remove-bind/remove-bind.html"*/'<!--\n  Generated template for the RemoveBind page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons class="fr">\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>解除绑定银行卡</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="gray-bg">\n  <div class="recharge-bank mt10">\n    <img src="{{bankcardIconMap[bankcard.bank]}}" alt="">\n    <span class="bank-detail">\n      <span class="name"><i>{{bankcard.bank}}</i></span>\n      <span class="number">**** **** **** {{bankcard.account.slice(-4)}}</span>\n    </span>\n  </div>\n  <div class="recharge-money">\n    <span class="amend-l fl">持卡人姓名：</span>\n    <span>**{{bankcard.account_name.slice(-1)}}</span>\n  </div>\n  <!--<div class="recharge-money">-->\n  <!--<span class="amend-l fl">银行卡预留电话号：</span>-->\n  <!--<span>13683325646</span>-->\n  <!--</div>-->\n  <div class="save-btn">\n    <button ion-button full (click)="showConfirm()">解除绑定</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/eric.ch/Documents/bomao-app/src/pages/money/remove-bind/remove-bind.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_share_global_share__["a" /* GlobalShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_fund_service_bankcard_service__["a" /* BankcardService */]])
], RemoveBindPage);

//# sourceMappingURL=remove-bind.js.map

/***/ })

});
//# sourceMappingURL=27.js.map