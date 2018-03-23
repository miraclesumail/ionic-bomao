webpackJsonp([17],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBankPageModule", function() { return SelectBankPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_bank__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_money_serice_money_serice__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_share_global_share__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SelectBankPageModule = (function () {
    function SelectBankPageModule() {
    }
    return SelectBankPageModule;
}());
SelectBankPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__select_bank__["a" /* SelectBankPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_bank__["a" /* SelectBankPage */]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_service_money_serice_money_serice__["a" /* MoneySericeProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_global_share_global_share__["a" /* GlobalShareProvider */]]
    })
], SelectBankPageModule);

//# sourceMappingURL=select-bank.module.js.map

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

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneySericeProvider; });
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




var MoneySericeProvider = (function () {
    function MoneySericeProvider(client, share) {
        this.client = client;
        this.share = share;
        this.payType = [];
        this.bankCardList = [];
        this.payClass = {
            display: '',
            max: 0,
            remind: false,
            button: '',
            show: { alipay: '', weixin: '', bankkj: '', bank: '', yinlian: '', baidu: '', qq: '' },
            post: { _token: '', deposit_mode: 2, bank_code: '', bank: 0, amount: 10 }
        };
        this.parameters = { id: '', account: '', account_name: '', fund_password: '', amount: 2, _token: '' };
        this.withdraw = { data: { accounts: { available: 0, withdrawable: 0 }, bank_cards: [] } };
        this.selectCard = { "id": "", "account": "", "account_name": "", "bank": "", "province": "", "city": "" };
        this.getTimes = 0;
    }
    MoneySericeProvider.prototype.checkPayType = function () {
        return __awaiter(this, void 0, void 0, function () {
            var payType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.post('/mobile-lotteries-h5/load-data/banks_tab/availabe', { _token: this.share.user.token })];
                    case 1:
                        payType = _a.sent();
                        this.payType = payType.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneySericeProvider.prototype.getBankList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bankCardList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.get('/mobileh5-recharges/netbank')];
                    case 1:
                        bankCardList = _a.sent();
                        this.bankCardList = bankCardList.data.banks;
                        if (this.bankCardList.length)
                            this.bankItem = this.bankCardList[0];
                        if (this.payClass.display == 'bank')
                            this.payClass.max = Number(this.bankItem.max);
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneySericeProvider.prototype.getUnion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bankCardList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.get('/mobileh5-recharges/sdpay')];
                    case 1:
                        bankCardList = _a.sent();
                        this.maxLoad = bankCardList.data.fMaxLoad;
                        this.bankCardList = bankCardList.data.banks;
                        if (this.bankCardList.length)
                            this.bankItem = this.bankCardList[0];
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneySericeProvider.prototype.postAlipayCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var aliCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.post('/mobileh5-recharges/get-alipay-qrcode', this.payClass.post)];
                    case 1:
                        aliCode = _a.sent();
                        this.aliCode = aliCode;
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneySericeProvider.prototype.postWechartCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var weCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.post('/mobileh5-recharges/confirmWeiXin', this.payClass.post)];
                    case 1:
                        weCode = _a.sent();
                        this.weCode = weCode;
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneySericeProvider.prototype.postBankCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bankCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.post('/mobileh5-recharges/confirm', this.payClass.post)];
                    case 1:
                        bankCode = _a.sent();
                        this.bankCode = bankCode;
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneySericeProvider.prototype.postUnionCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var unionCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.post('/mobileh5-recharges/confirmSdpay', this.payClass.post)];
                    case 1:
                        unionCode = _a.sent();
                        this.unionCode = unionCode;
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneySericeProvider.prototype.postBaiduCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var baiduCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.post('/mobileh5-recharges/confirmMobileBaidu', this.payClass.post)];
                    case 1:
                        baiduCode = _a.sent();
                        this.baiduCode = baiduCode;
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneySericeProvider.prototype.postQQCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var QQCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.post('/mobileh5-recharges/confirmMobileQq', this.payClass.post)];
                    case 1:
                        QQCode = _a.sent();
                        this.QQCode = QQCode;
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneySericeProvider.prototype.getWithdraw = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.get('/mobileh5-withdrawals/withdraw')];
                    case 1:
                        data = _a.sent();
                        this.getTimes = 1;
                        try {
                            this.withdraw = data;
                            this.selectCard = data.data.bank_cards[0];
                            this.share.user.is_set_fund_password = 1;
                        }
                        catch (e) {
                            this.share.user.is_set_fund_password = '';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneySericeProvider.prototype.postWithdraw = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.post('/mobileh5-withdrawals/withdraw/1', this.getParameters())];
                    case 1:
                        data = _a.sent();
                        if (data.isSuccess) {
                            this.share.showAlert('您的提款申请已经提交成功', ['好的']);
                        }
                        else {
                            this.share.showToast(data.Msg, 3000);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneySericeProvider.prototype.getParameters = function () {
        this.parameters._token = this.share.user.token;
        this.parameters.account = this.selectCard.account;
        this.parameters.account_name = this.selectCard.account_name;
        this.parameters.id = this.selectCard.id;
        return this.parameters;
    };
    MoneySericeProvider.prototype.getAll = function () {
        this.parameters.amount = this.withdraw.data.accounts.withdrawable;
    };
    return MoneySericeProvider;
}());
MoneySericeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_client_http_client__["a" /* HttpClientProvider */], __WEBPACK_IMPORTED_MODULE_3__global_share_global_share__["a" /* GlobalShareProvider */]])
], MoneySericeProvider);

//# sourceMappingURL=money-serice.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_money_serice_money_serice__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectBankPage = (function () {
    function SelectBankPage(money, navCtrl, navParams) {
        this.money = money;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bankcardIconMap = __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* Config */].bankcardIconMap;
        this.bankCardList = [];
    }
    SelectBankPage.prototype.ionViewDidLoad = function () {
        this.bankCardList = this.navParams.get('data');
        this.money.payClass = this.navParams.get('pay');
    };
    SelectBankPage.prototype.goBack = function (item) {
        this.money.bankItem = item;
        if (this.money.payClass.display != 'yinlian') {
            if (this.money.payClass.display == 'bank')
                this.money.payClass.max = Number(item.max);
            this.money.payClass.post.bank = item.id;
        }
        this.navCtrl.push('RechargePage', { item: item });
    };
    return SelectBankPage;
}());
SelectBankPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-select-bank',template:/*ion-inline-start:"/Users/eric.ch/Documents/bomao-app/src/pages/money/select-bank/select-bank.html"*/'<ion-header>\n  <ion-navbar>\n    <button icon-only class="fr">\n      <mores></mores>\n    </button>\n    <ion-title>选择银行卡</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="white-bg">\n  <ul class="bank-list">\n    <li *ngFor="let item of bankCardList" (click)="goBack(item)">\n      <span class="bank-img">\n        <img src="{{bankcardIconMap[item.name]}}" alt="">\n      </span>\n      <span class="bank-text">{{item.name}}</span>\n    </li>\n  </ul>\n</ion-content>\n\n'/*ion-inline-end:"/Users/eric.ch/Documents/bomao-app/src/pages/money/select-bank/select-bank.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_service_money_serice_money_serice__["a" /* MoneySericeProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], SelectBankPage);

//# sourceMappingURL=select-bank.js.map

/***/ })

});
//# sourceMappingURL=17.js.map