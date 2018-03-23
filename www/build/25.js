webpackJsonp([25],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetDetailMorePageModule", function() { return BetDetailMorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bet_detail_more__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_betrecord_service_betrecord_detail_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BetDetailMorePageModule = (function () {
    function BetDetailMorePageModule() {
    }
    return BetDetailMorePageModule;
}());
BetDetailMorePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bet_detail_more__["a" /* BetDetailMorePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bet_detail_more__["a" /* BetDetailMorePage */]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_service_betrecord_service_betrecord_detail_service__["a" /* BetrecordDetailService */]]
    })
], BetDetailMorePageModule);

//# sourceMappingURL=bet-detail-more.module.js.map

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

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetrecordDetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_client_http_client__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_share_global_share__ = __webpack_require__(35);
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



var BetrecordDetailService = (function () {
    function BetrecordDetailService(http, share) {
        this.http = http;
        this.share = share;
        this.bet_winning_number = [];
        this.detaidata = { data: { winning_number: [] } };
        this.betDetailParametersData = { projects: [] };
        this.parameters = { id: 0 };
    }
    BetrecordDetailService.prototype.postRemoteServer = function () {
        return this.http.get("/mobileh5-projects/" + this.getParameters().id + "/view");
    };
    BetrecordDetailService.prototype.getRemoteServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get("/mobileh5-projects/" + this.getParameters().id + "/view")];
                    case 1:
                        data = _a.sent();
                        this.detaidata = data;
                        this.detaidata.data.winning_number = this.detaidata.data.winning_number.replace(/\s+/g, '').split(' ');
                        return [2 /*return*/];
                }
            });
        });
    };
    BetrecordDetailService.prototype.betDetailMoreRemoteServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, i, str;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get("/mobileh5-projects/batch-print-projects?project_ids=" + this.betMoreDetailParameters)];
                    case 1:
                        data = _a.sent();
                        this.betDetailParametersData = data;
                        for (i = 0; i < this.betDetailParametersData.projects.length; i++) {
                            str = this.betDetailParametersData.projects[i].winning_number;
                            this.bet_winning_number = [];
                            if (str) {
                                if (/[,\s]+/.test(str))
                                    this.bet_winning_number = str.split(/[,\s]+/);
                                else
                                    this.bet_winning_number = str.split('');
                            }
                            this.betDetailParametersData.projects[i].winning_number_group = JSON.parse(JSON.stringify(this.bet_winning_number));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BetrecordDetailService.prototype.getbetDetailParameters = function () {
        return this.betDetailParameters;
    };
    BetrecordDetailService.prototype.getParameters = function () {
        return this.parameters;
    };
    BetrecordDetailService.prototype.setParameters = function (id) {
        this.parameters.id = id;
        return this.getRemoteServer();
    };
    BetrecordDetailService.prototype.setParametersMerge = function (id) {
        this.parameters.id = id;
        return this.postRemoteServer();
    };
    return BetrecordDetailService;
}());
BetrecordDetailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_client_http_client__["a" /* HttpClientProvider */], __WEBPACK_IMPORTED_MODULE_2__global_share_global_share__["a" /* GlobalShareProvider */]])
], BetrecordDetailService);

//# sourceMappingURL=betrecord-detail-service.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetDetailMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_betrecord_service_betrecord_detail_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_share_global_share__ = __webpack_require__(35);
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
 * Generated class for the BetDetailMorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BetDetailMorePage = (function () {
    function BetDetailMorePage(share, navCtrl, params, betrecordDetailService) {
        this.share = share;
        this.navCtrl = navCtrl;
        this.params = params;
        this.betrecordDetailService = betrecordDetailService;
        this.statusName = { 0: '待开奖', 1: '已撤销', 2: '未中奖', 3: '已中奖', 4: '已派奖', 5: '系统撤销' };
        this.share.setTimer('divTimer', 1000);
    }
    BetDetailMorePage.prototype.ionViewDidLoad = function () {
        this.betrecordDetailService.betMoreDetailParameters = this.getIDs();
        this.betrecordDetailService.betDetailMoreRemoteServer();
    };
    BetDetailMorePage.prototype.getIDs = function () {
        if (this.params.get('tplData') && this.params.get('tplData').successful) {
            var ids = this.params.get('tplData').successful.map(function (v) { return v.id; });
            return ids.join(',') + "&istrace=" + this.params.get('istrace');
        }
        return "";
    };
    return BetDetailMorePage;
}());
BetDetailMorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bet-detail-more',template:/*ion-inline-start:"/Users/sumail/Downloads/bomao-app/src/pages/games/game-common/bet-detail-more/bet-detail-more.html"*/'<ion-header>\n  <ion-navbar>\n    <button icon-only class="fr">\n      <mores></mores>\n    </button>\n    <ion-title>投注详情</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="gray-bg">\n  <div style="height: 1px;" [class.sscbg]="share?.timers?.divTimer?.show" ></div>\n  <div class="betdetail-bg">\n    <div *ngFor="let data of betrecordDetailService.betDetailParametersData.projects">\n      <div class="bet-wrap">\n        <div class="bet-detail-1">\n          <div class="bet-l">\n            <div class="mt5 bet-title"><span>{{data.title}}</span></div>\n            <div class="mt5"><span>第{{data.issue}}期</span></div>\n            <div class="mt5"><span>注单金额：</span><span class="gray">￥{{data.amount}}</span></div>\n            <div class="mt5" *ngIf="data.total_prize"><span>中奖金额：</span><span>￥{{data.total_prize }}</span></div>\n          </div>\n          <div class="bet-l bet-r-font">\n            <div class="" *ngIf="data.winning_number_group?.length">\n              <div>中奖号码：</div>\n              <div><i class="num-green" *ngFor="let num of data.winning_number_group">{{num}}</i></div>\n            </div>\n            <div>下注时间：</div>\n            <div>{{data.bought_at}}</div>\n          </div>\n        </div>\n        <ul class="bet-list">\n          <li><span>模式：</span><span class="gray">{{({\'0.10\':\'角\',\'1.00\':\'元\',\'0.1\':\'角\',\'0.01\':"分"}[data.coefficient])}}</span></li>\n          <li><span>倍数：</span><span class="gray">{{data.multiple}}倍</span></li>\n          <li><span>投注内容：</span><span class="gray">{{data.display_bet_number}}</span></li>\n          <li><span>注单编号：</span><span class="gray">{{data.serial_number}}</span></li>\n          <li><span>订单状态：</span><span class="gray">{{(statusName[data.status])}}</span></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sumail/Downloads/bomao-app/src/pages/games/game-common/bet-detail-more/bet-detail-more.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_global_share_global_share__["a" /* GlobalShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_betrecord_service_betrecord_detail_service__["a" /* BetrecordDetailService */]])
], BetDetailMorePage);

//# sourceMappingURL=bet-detail-more.js.map

/***/ })

});
//# sourceMappingURL=25.js.map