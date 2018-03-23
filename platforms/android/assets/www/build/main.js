webpackJsonp([36],{

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/common/intro/intro.module": [
		307,
		35
	],
	"../pages/common/person-data/person-data.module": [
		308,
		25
	],
	"../pages/common/play-help/play-help.module": [
		309,
		34
	],
	"../pages/common/set/set.module": [
		310,
		33
	],
	"../pages/games/cqssc/cqssc.module": [
		311,
		1
	],
	"../pages/games/game-common/bet-detail-more/bet-detail-more.module": [
		312,
		24
	],
	"../pages/games/game-common/bet-success/bet-success.module": [
		313,
		32
	],
	"../pages/games/game-common/buy-basket/buy-basket.module": [
		314,
		5
	],
	"../pages/games/jsks/jsks.module": [
		315,
		2
	],
	"../pages/games/pk10/pk10.module": [
		316,
		0
	],
	"../pages/home/home.module": [
		317,
		9
	],
	"../pages/login/login.module": [
		318,
		4
	],
	"../pages/message/message-detail/message-detail.module": [
		320,
		23
	],
	"../pages/message/message/message.module": [
		319,
		22
	],
	"../pages/money/add-bank/add-bank.module": [
		321,
		8
	],
	"../pages/money/bankcard-rechargecomfirm/bankcard-rechargecomfirm.module": [
		322,
		31
	],
	"../pages/money/bankrecharge-result/bankrecharge-result.module": [
		323,
		28
	],
	"../pages/money/bind-bank/bind-bank.module": [
		324,
		21
	],
	"../pages/money/card-comfirm/card-comfirm.module": [
		325,
		30
	],
	"../pages/money/code-comfirm/code-comfirm.module": [
		326,
		26
	],
	"../pages/money/get-money/get-money.module": [
		327,
		3
	],
	"../pages/money/manage-catalogue/manage-catalogue.module": [
		328,
		20
	],
	"../pages/money/recharge-detail/recharge-detail.module": [
		330,
		7
	],
	"../pages/money/recharge/recharge.module": [
		329,
		19
	],
	"../pages/money/remove-bind/remove-bind.module": [
		331,
		27
	],
	"../pages/money/safe-center/safe-center.module": [
		332,
		18
	],
	"../pages/money/select-bank/select-bank.module": [
		333,
		17
	],
	"../pages/money/valid-bank/valid-bank.module": [
		334,
		16
	],
	"../pages/notice/notice-detail/notice-detail.module": [
		335,
		15
	],
	"../pages/notice/notice-list/notice-list.module": [
		336,
		14
	],
	"../pages/personal/personal-profiles/personal-profiles.module": [
		337,
		6
	],
	"../pages/record/bet-datail/bet-datail.module": [
		338,
		13
	],
	"../pages/record/game-record/game-record.module": [
		339,
		12
	],
	"../pages/special/special-detail/special-detail.module": [
		340,
		11
	],
	"../pages/special/special-offer/special-offer.module": [
		341,
		10
	],
	"../pages/tab/tab-home/tab-home.module": [
		342,
		29
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_share_global_share__ = __webpack_require__(55);
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





var HttpClientProvider = (function () {
    function HttpClientProvider(http, share) {
        this.http = http;
        this.share = share;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */].baseurl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
    }
    HttpClientProvider.prototype.get = function (url) {
        return this.doSubmitAction(url);
    };
    HttpClientProvider.prototype.post = function (url, data) {
        return this.doSubmitAction(url, data);
    };
    HttpClientProvider.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.share.store.remove('app_user');
                this.share.user = null;
                localStorage.expired = Date.now();
                this.share.showToast('您太久没有操作，帐号已自动退出', 3000);
                setTimeout(function () { return location.reload(); }, 3000);
                return [2 /*return*/];
            });
        });
    };
    HttpClientProvider.prototype.beforeRequest = function () {
        var a = localStorage.expired;
        var b = Date.now();
        if ((b - a) > 1800000)
            this.logout();
        return (b - a) > 1800000;
    };
    HttpClientProvider.prototype.doSubmitAction = function (url, data) {
        var _this = this;
        clearTimeout(this.autoLoginOutId);
        this.autoLoginOutId = setTimeout(function () { return _this.logout(); }, 1800000);
        return new Promise(function (resolve, reject) {
            if (_this.beforeRequest()) {
                reject({ isSuccess: 0 });
                _this.share.hideLoading();
                return;
            }
            if (data) {
                return _this.http.post(_this.baseUrl + url, data, _this.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    if (data.isSuccess) {
                        resolve(data);
                        _this.share.hideLoading();
                    }
                    else {
                        _this.share.showToast(data.Msg, 3000);
                        _this.share.hideLoading();
                        reject(data);
                    }
                }, function (e) {
                    _this.share.showToast(JSON.stringify(e), 3000);
                    _this.share.hideLoading();
                    reject(e);
                });
            }
            else {
                return _this.http.get(_this.baseUrl + url, _this.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    if (data.isSuccess) {
                        resolve(data);
                        _this.share.hideLoading();
                    }
                    else {
                        _this.share.showToast(data.Msg, 3000);
                        _this.share.hideLoading();
                        reject(data);
                    }
                }, function (e) {
                    _this.share.showToast(e, 3000);
                    _this.share.hideLoading();
                    reject(e);
                });
            }
        });
    };
    return HttpClientProvider;
}());
HttpClientProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__global_share_global_share__["a" /* GlobalShareProvider */]])
], HttpClientProvider);

//# sourceMappingURL=http-client.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPopOverComponent; });
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


var MyPopOverComponent = (function () {
    function MyPopOverComponent(viewCtrl, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
    }
    MyPopOverComponent.prototype.close = function (page) {
        this.navCtrl.push(page);
        this.viewCtrl.dismiss();
    };
    return MyPopOverComponent;
}());
MyPopOverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'my-pop-over',template:/*ion-inline-start:"/Users/eric.ch/Documents/bomao-app/src/components/my-pop-over/my-pop-over.html"*/'<div class="side-nav">\n  <a href="#" (touchstart)="close(\'TabHomePage\')" class="side-nav-a j-btn">游戏大厅</a>\n  <a href="#" (touchstart)="close(\'SafeCenterPage\')" class="side-nav-a j-btn">账户设置</a>\n  <a href="#" (touchstart)="close(\'MessagePage\')" class="side-nav-a j-btn">站内信</a>\n</div>\n'/*ion-inline-end:"/Users/eric.ch/Documents/bomao-app/src/components/my-pop-over/my-pop-over.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], MyPopOverComponent);

//# sourceMappingURL=my-pop-over.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessTool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_util__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observe__ = __webpack_require__(209);
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





var _ = new __WEBPACK_IMPORTED_MODULE_4__observe__["a" /* observe */]();
var BusinessTool = (function (_super) {
    __extends(BusinessTool, _super);
    function BusinessTool() {
        var _this = _super.call(this) || this;
        _this._ = _;
        return _this;
    }
    BusinessTool.prototype.createNumberRange = function (a, b) {
        var numbarArr = [];
        var flag = a;
        var numA = +a;
        var numB = +b;
        if (isNaN(numA))
            return [];
        for (; numA <= numB; numA++) {
            var createZore = '0';
            if (flag.length == 2 && numA < 10) {
                createZore += numA;
            }
            else {
                createZore = ('' + numA);
            }
            numbarArr.push(createZore);
        }
        return numbarArr;
    };
    BusinessTool.prototype.createSelectArrarModel = function (a, b) {
        var numbarArr = [];
        if (isNaN(+a))
            return [];
        for (; a <= b; a++) {
            numbarArr.push(false);
        }
        return numbarArr;
    };
    BusinessTool.prototype.filterMethod = function (methodsData) {
        try {
            for (var ii = 0; ii < methodsData.length; ii++) {
                var a = methodsData[ii];
                for (var _i = 0, _a = a.children; _i < _a.length; _i++) {
                    var b = _a[_i];
                    for (var i = 0; i < b.children.length; i++) {
                        var c = b.children[i];
                        if (/danshi|hunhezuxuan/.test(c.name_en)) {
                            b.children.splice(i, 1);
                            i--;
                        }
                    }
                }
                if (/renxuan/.test(a.name_en)) {
                    methodsData.splice(ii, 1);
                    ii--;
                }
            }
        }
        catch (e) {
            return false;
        }
        return true;
    };
    BusinessTool.prototype.initSetBussiness = function (c) {
        var _this = this;
        var bet_numberArrObj = [];
        var selectarea = [];
        var selectareaPair = [];
        c.isdanshi = true;
        c.isdantuo = /dantuo/.test(c.name_en);
        for (var key in c.bet_number) {
            c.isdanshi = /danshi/.test(c.fullName_en);
            var isnotnumberSymble = /,/.test(c.bet_number[key]);
            if (isnotnumberSymble) {
                var n;
                if (/\)/.test(c.bet_number[key])) {
                    n = c.bet_number[key].replace(/\),/g, ')|').split('|');
                }
                else {
                    n = c.bet_number[key].split(',');
                }
                var arrRange = n.map(function (v) {
                    return __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */].ballLabelMap[v];
                });
                bet_numberArrObj.push({ key: key, value: arrRange, isnotnumberSymble: isnotnumberSymble, showgroup: true });
                selectareaPair.push(arrRange);
                selectarea.push(this.createSelectArrarModel(0, arrRange.length));
            }
            else {
                var n_1 = c.bet_number[key].split('-');
                var arrRange = this.createNumberRange(n_1[0], n_1[1]);
                bet_numberArrObj.push({
                    key: key,
                    value: arrRange,
                    isnotnumberSymble: isnotnumberSymble,
                    showgroup: (n_1[0] == 0 || ((!c.isdantuo) && n_1[0].length > 1))
                });
                selectareaPair.push(arrRange);
                selectarea.push(this.createSelectArrarModel(n_1[0], n_1[1]));
            }
        }
        c.isbaodan = /包胆/.test(c.name_cn);
        c.modesArray = [1, 0.1, 0.01];
        var mutipleAndModeObj = {
            mode: 1,
            times: 1
        };
        c.mutipleAndMode = [mutipleAndModeObj];
        c.mutipleAndModeObj = mutipleAndModeObj;
        c.bet_numberArrObj = bet_numberArrObj;
        c.selectarea = selectarea;
        c.selectareaPair = selectareaPair;
        c.count = 0;
        c.totals = 0;
        _.observe(c.selectarea, 'update', function () {
            _this.mainBussiness(c);
        });
        _.observe(c.mutipleAndMode, 'update', function () {
            _this.mainBussiness(c);
        });
    };
    BusinessTool.prototype.setDefaultsMethod = function (methodsData, defaultMethodId, defaultData) {
        this.defaultData = defaultData;
        if (!this.filterMethod(methodsData))
            return;
        if (!defaultMethodId || !methodsData) {
            return null;
        }
        var obj;
        var ii = 0;
        for (var _i = 0, methodsData_1 = methodsData; _i < methodsData_1.length; _i++) {
            var a = methodsData_1[_i];
            for (var _a = 0, _b = a.children; _a < _b.length; _a++) {
                var b = _b[_a];
                var i = 0;
                for (var _c = 0, _d = b.children; _c < _d.length; _c++) {
                    var c = _d[_c];
                    if (c.id == defaultMethodId) {
                        a.defaultMethod = c.defaultMethod = true;
                        obj = { a: a, b: b, c: c };
                    }
                    c.fullName_cn = "" + a.name_cn + c.name_cn;
                    c.fullName_en = a.name_en + "." + b.name_en + "." + c.name_en;
                    this.initSetBussiness(c);
                    i++;
                }
            }
            ii++;
        }
        return obj;
    };
    BusinessTool.prototype.mainBussiness = function (data) {
        this.findCounter(data.name_cn, data);
    };
    BusinessTool.prototype.findCounter = function (name, obj) {
        switch (name) {
            case "直选组合":
                this.zhuhe(obj);
                break;
            case "直选和值":
                this.zhixuanhezhi(obj);
                break;
            case "直选跨度":
                this.zhixuankuadu(obj);
                break;
            case "组选和值":
                this.zuxuanhezhi(obj);
                break;
            case "组三":
                this.zusan(obj);
                break;
            case "组六":
                this.zuliu(obj);
                break;
            case "定位胆":
                this.dingweidan(obj);
                break;
            case "包胆":
                this.baodan(obj);
                break;
            case "和值尾数":
                this.commonCount(obj);
                break;
            case "特殊号码":
                this.commonCount(obj);
                break;
            default:
                if ((/大小单双|复式|趣味[\s\S]+?星|区间[\s\S]+?星|万|千|个|百|五星和值/).test(name)) {
                    if (/zuxuan\.\w+?fushi/.test(obj.fullName_en)) {
                        this.houerfushi(obj);
                    }
                    else {
                        this.fushi(obj);
                    }
                }
                else if ((/组选(\d+)/).test(name)) {
                    this.zuxuanNum(obj, RegExp.$1);
                }
                else if (/zhixuan\.(\w+)erhezhi/.test(obj.fullName_en)) {
                    this.erzhixuanhezhi(obj);
                }
                else if (/zhixuan\.(\w+)kuadu/.test(obj.fullName_en)) {
                    this.houerkuadu(obj);
                }
                else if (/zuxuan\.(\w+)erhezhi/.test(obj.fullName_en)) {
                    this.erzuxuanhezhi(obj);
                }
                else if (/zuxuan\.(\w+)erbaodan/.test(obj.fullName_en)) {
                    this.erbaodan(obj);
                }
                else if (/(.{1})码不定位/.test(name)) {
                    this.budingwei(obj, { '三': 3, '二': 2, '一': 1 }[RegExp.$1]);
                }
                else if ((/一帆风顺|好事成双|三星报喜|四季发财|不定位|定单双|猜中位/).test(name)) {
                    this.quwei(obj);
                }
                else if (obj.isdantuo) {
                    this.dantuo(obj);
                }
        }
    };
    BusinessTool.prototype.exclusionArray = function (a, b) {
        a.forEach(function (v, k) {
            if (v) {
                b[k] = false;
            }
        });
    };
    BusinessTool.prototype.clearArray = function (arr) {
        arr.forEach(function (v, k, array) {
            array[k] = false;
        });
    };
    BusinessTool.prototype.resetsanmaDantuo = function (k, arr, obj) {
        var arrgroup = obj.selectarea;
        var arrA = arrgroup[0];
        var arrB = arrgroup[1];
        if (arrA == arr) {
            var choosekey_1 = 0;
            var isChooseAlready = arr.some(function (v, k) {
                if (v)
                    choosekey_1 = k;
                return v;
            });
            if (isChooseAlready) {
                this.clearArray(arrA);
                arrA[choosekey_1] = true;
            }
            arr[k] = !arr[k];
            this.exclusionArray(arrA, arrB);
        }
        else {
            arr[k] = !arr[k];
            this.exclusionArray(arrB, arrA);
        }
    };
    BusinessTool.prototype.resetermaDantuo = function (k, arr, obj) {
        var arrgroup = obj.selectarea;
        var arrA = arrgroup[0];
        var arrB = arrgroup[1];
        if (arrA == arr) {
            arrA.forEach(function (v, kk, a) {
                if (k != kk)
                    a[kk] = false;
            });
            arr[k] = !arr[k];
            this.exclusionArray(arrA, arrB);
        }
        else {
            arr[k] = !arr[k];
            this.exclusionArray(arrB, arrA);
        }
    };
    BusinessTool.prototype.chooseBall = function (k, arr, obj) {
        if (obj.isbaodan) {
            arr.forEach(function (v, kk, a) {
                if (k != kk)
                    a[kk] = false;
            });
        }
        else if (/dantuo/.test(obj.name_en)) {
            switch (obj.name_cn) {
                case '前三组选胆拖':
                    this.resetsanmaDantuo(k, arr, obj);
                    return;
                case '前二组选胆拖':
                    this.resetermaDantuo(k, arr, obj);
                    return;
            }
        }
        arr[k] = !arr[k];
    };
    BusinessTool.prototype.countsTotal = function (obj) {
        var total = obj.mutipleAndModeObj.mode * obj.price * obj.count * obj.mutipleAndModeObj.times;
        return +total.toFixed(4);
    };
    BusinessTool.prototype.countChooseLength = function (arr) {
        return arr.map(function (v) {
            return v.filter(function (vv) {
                return vv;
            }).length;
        }).reduce(function (prev, cur) {
            return prev + cur;
        });
    };
    BusinessTool.prototype.values = function (minarr) {
        return minarr.slice().filter(function (v) {
            return v;
        });
    };
    BusinessTool.prototype.intersection = function (array, arraySecond) {
        return array.filter(function (v, i) {
            return v && arraySecond[i];
        }).length;
    };
    BusinessTool.prototype.zuxuanGenner = function (obj) {
        var plukchoose = obj.selectarea;
        var aArr = plukchoose[0];
        var bArr = plukchoose[1];
        var a = this.values(plukchoose[0]).length;
        var b = this.values(plukchoose[1]).length;
        var r = this.intersection(aArr, bArr);
        return [a, b, r];
    };
    BusinessTool.prototype.zuxun120_24_2 = function (obj, r) {
        var a = this.countChooseLength(obj.selectarea);
        obj.count = this.C(a, r);
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.zuxuan60 = function (obj) {
        var _this = this;
        var ctor = function (a, b, r) {
            return _this.C(a, 1) * _this.C(b, 3) - r * _this.C(b - 1, 2);
        };
        obj.count = ctor.apply(this, this.zuxuanGenner(obj));
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.zuxuan30 = function (obj) {
        var _this = this;
        var ctor = function (a, b, r) {
            return _this.C(a, 2) * _this.C(b, 1) - r * _this.C(a - 1, 1);
        };
        obj.count = ctor.apply(this, this.zuxuanGenner(obj));
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.zuxuan20 = function (obj) {
        var _this = this;
        var ctor = function (a, b, r) {
            return _this.C(a, 1) * _this.C(b, 2) - r * _this.C(b - 1, 1);
        };
        obj.count = ctor.apply(this, this.zuxuanGenner(obj));
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.zuxuan10 = function (obj) {
        var _this = this;
        var ctor = function (a, b, r) {
            return _this.C(a, 1) * _this.C(b, 1) - r;
        };
        obj.count = ctor.apply(this, this.zuxuanGenner(obj));
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.zuxuan5 = function (obj) {
        var _this = this;
        var ctor = function (a, b, r) {
            return _this.C(a, 1) * _this.C(b, 1) - r;
        };
        obj.count = ctor.apply(this, this.zuxuanGenner(obj));
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.zuxuan12 = function (obj) {
        var _this = this;
        var ctor = function (a, b, r) {
            return _this.C(a, 1) * _this.C(b, 2) - r * _this.C(b - 1, 1);
        };
        obj.count = ctor.apply(this, this.zuxuanGenner(obj));
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.zuxuan4 = function (obj) {
        var _this = this;
        var ctor = function (a, b, r) {
            return _this.C(a, 1) * _this.C(b, 1) - r;
        };
        obj.count = ctor.apply(this, this.zuxuanGenner(obj));
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.zuxuanNum = function (obj, typenum) {
        var r = { 120: 5, 24: 4, 6: 2 }[typenum];
        if (r) {
            this.zuxun120_24_2(obj, r);
        }
        else {
            this['zuxuan' + typenum](obj);
        }
    };
    BusinessTool.prototype.is11Y = function () {
        return /11Y/.test(this.defaultData.data.game_name_en);
    };
    BusinessTool.prototype.getl11Yfushi3abcR = function (arr) {
        var arrA = arr[0];
        var arrB = arr[1];
        var arrC = arr[2];
        var a = this.values(arrA).length;
        var b = this.values(arrB).length;
        var c = this.values(arrC).length;
        var R12 = this.intersection(arrA, arrB);
        var R13 = this.intersection(arrA, arrC);
        var R23 = this.intersection(arrB, arrC);
        var R123 = Math.min(R12, R13, R23);
        return [a, b, c, R12, R13, R23, R123];
    };
    BusinessTool.prototype.l11Yfushi3 = function (obj) {
        var ctor = function (a, b, c, R12, R13, R23, R123) {
            return a * b * c - R12 * c - R13 * b - R23 * a + R123 * 2;
        };
        obj.count = ctor.apply(this, this.getl11Yfushi3abcR(obj.selectarea));
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.getl11Yfushi2acr = function (arr) {
        var arrA = arr[0];
        var arrB = arr[1];
        var a = this.values(arrA).length;
        var b = this.values(arrB).length;
        var r = this.intersection(arrA, arrB);
        return [a, b, r];
    };
    BusinessTool.prototype.l11Yfushi2 = function (obj) {
        var ctor = function (a, b, r) {
            return a * b - r;
        };
        obj.count = ctor.apply(this, this.getl11Yfushi2acr(obj.selectarea));
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.houerfushi = function (obj) {
        obj.count = this.C(this.values(obj.selectarea[0]).length, 2);
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.fushi = function (obj) {
        if (this.is11Y()) {
            if (obj.selectarea.length == 3) {
                this.l11Yfushi3(obj);
            }
            else if (obj.selectarea.length == 2) {
                this.l11Yfushi2(obj);
            }
            else {
                var num = {
                    "前三组选复式": 3, "前二组选复式": 2
                }[obj.name_cn];
                obj.count = this.C(this.valuesAll(obj.selectarea), num);
                obj.totals = this.countsTotal(obj);
            }
        }
        else {
            obj.count = this.getCountFromPermutation(obj.selectarea);
            obj.totals = this.countsTotal(obj);
        }
    };
    BusinessTool.prototype.zhuhe = function (obj) {
        var plukchoose = obj.selectarea;
        obj.count = plukchoose.length * this.getCountFromPermutation(plukchoose);
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.pluckChooseResult = function (NumberArray, swichesArray) {
        return NumberArray.filter(function (value, key) {
            return swichesArray[key];
        });
    };
    BusinessTool.prototype.range = function (start, position) {
        var arr = [];
        for (; start < position; start++)
            arr.push(start);
        return arr;
    };
    BusinessTool.prototype.zhixuanhezhi = function (obj) {
        var ctor = function (n) {
            if (n <= 9) {
                return ((n + 1) * (n + 2)) / 2;
            }
            else if (n >= 10 && n <= 14) {
                return (((n + 1) * (n + 2) - (3 * (n - 8) * (n - 9)))) / 2;
            }
            else if (n >= 15 && n <= 17) {
                return { 15: 73, 16: 69, 17: 63 }[n];
            }
            else {
                return (29 - n) * (28 - n) / 2;
            }
        };
        var ballArr = obj.selectarea;
        var count = 0;
        var result = this.pluckChooseResult(this.range(0, ballArr[0].length), ballArr[0]);
        for (var i = 0; i < result.length; i++) {
            count += ctor(result[i]);
        }
        obj.count = count;
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.zhixuankuadu = function (obj) {
        var ctor = function (n) {
            return [10, 54, 96, 126, 144, 150, 144, 126, 96, 54][n];
        };
        var ballArr = obj.selectarea;
        var count = 0;
        var result = this.pluckChooseResult(this.range(0, ballArr[0].length), ballArr[0]);
        for (var i = 0; i < result.length; i++) {
            count += ctor(result[i]);
        }
        obj.count = count;
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.zuxuanhezhi = function (obj) {
        var ctor = function (n) {
            return {
                "1": 1,
                "2": 2,
                "3": 2,
                "4": 4,
                "5": 5,
                "6": 6,
                "7": 8,
                "8": 10,
                "9": 11,
                "10": 13,
                "11": 14,
                "12": 14,
                "13": 15,
                "14": 15,
                "15": 14,
                "16": 14,
                "17": 13,
                "18": 11,
                "19": 10,
                "20": 8,
                "21": 6,
                "22": 5,
                "23": 4,
                "24": 2,
                "25": 2,
                "26": 1
            }[n];
        };
        var ballArr = obj.selectarea;
        var count = 0;
        var result = this.pluckChooseResult(this.range(1, (ballArr[0].length + 1)), ballArr[0]);
        for (var i = 0; i < result.length; i++) {
            count += ctor(result[i]);
        }
        obj.count = count;
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.zusan = function (obj) {
        var ctor = function (b) {
            return b < 2 ? 0 : this.C(b, 2) * 2;
        };
        var choosearray = obj.selectarea;
        var count = ctor.call(this, this.countChooseLength(choosearray));
        obj.count = count;
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.zuliu = function (obj) {
        this.zuxun120_24_2(obj, 3);
    };
    BusinessTool.prototype.valuesAll = function (arr) {
        var _this = this;
        return arr.map(function (v) {
            return _this.values(v).length;
        }).reduce(function (prev, cur) {
            return prev + cur;
        });
    };
    BusinessTool.prototype.dingweidan = function (obj) {
        var ballArr = obj.selectarea;
        obj.count = this.valuesAll(ballArr);
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.baodan = function (obj) {
        var ischoose = obj.selectarea[0].some(function (v) {
            return v;
        });
        obj.count = ischoose ? 54 : 0;
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.erbaodan = function (obj) {
        var ischoose = obj.selectarea[0].some(function (v) {
            return v;
        });
        obj.count = ischoose ? 9 : 0;
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.commonCount = function (obj) {
        obj.count = this.values(obj.selectarea[0]).length;
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.erzhixuanhezhi = function (obj) {
        var ctor = function (n) {
            return n <= 9 ? n + 1 : 19 - n;
        };
        var ballArr = obj.selectarea;
        var count = 0;
        var result = this.pluckChooseResult(this.range(0, ballArr[0].length), ballArr[0]);
        for (var i = 0; i < result.length; i++) {
            count += ctor(result[i]);
        }
        obj.count = count;
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.erzuxuanhezhi = function (obj) {
        var ctor = function (n) {
            return n <= 9 ? Math.ceil(n / 2) : Math.ceil((18 - n) / 2);
        };
        var ballArr = obj.selectarea;
        var count = 0;
        var result = this.pluckChooseResult(this.range(1, (ballArr[0].length + 1)), ballArr[0]);
        for (var i = 0; i < result.length; i++) {
            count += ctor(result[i]);
        }
        obj.count = count;
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.houerkuadu = function (obj) {
        var ctor = function (n) {
            return [10, 18, 16, 14, 12, 10, 8, 6, 4, 2][n];
        };
        var ballArr = obj.selectarea;
        var count = 0;
        var result = this.pluckChooseResult(this.range(0, ballArr[0].length), ballArr[0]);
        for (var i = 0; i < result.length; i++) {
            count += ctor(result[i]);
        }
        obj.count = count;
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.quwei = function (obj) {
        var ballArr = obj.selectarea;
        obj.count = this.values(ballArr[0]).length;
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.hasBothChooseBall = function (arr) {
        return arr.every(function (v) {
            return v.some(function (v) {
                return v;
            });
        });
    };
    BusinessTool.prototype.qiansanzuxuandantuo = function (obj) {
        //1 => C(n,2), 2 => C(n,1)
        var haschoose = this.hasBothChooseBall(obj.selectarea);
        var arrA = obj.selectarea[0];
        var arrB = obj.selectarea[1];
        var num = { 1: 2, 2: 1 }[this.values(arrA).length];
        if (haschoose) {
            obj.count = this.values(arrB).length >= num ? this.C(this.values(arrB).length, num) : 0;
            obj.totals = this.countsTotal(obj);
        }
        else {
            obj.count = 0;
            obj.totals = this.countsTotal(obj);
        }
    };
    BusinessTool.prototype.qianerzuxuandantuo = function (obj) {
        //C(n,1)
        var haschoose = this.hasBothChooseBall(obj.selectarea);
        var arrB = obj.selectarea[1];
        if (haschoose) {
            obj.count = this.C(this.values(arrB).length, 1);
            obj.totals = this.countsTotal(obj);
        }
        else {
            obj.count = 0;
            obj.totals = this.countsTotal(obj);
        }
    };
    BusinessTool.prototype.dantuo = function (obj) {
        switch (obj.name_cn) {
            case '前三组选胆拖':
                this.qiansanzuxuandantuo(obj);
                break;
            case '前二组选胆拖':
                this.qianerzuxuandantuo(obj);
                break;
        }
    };
    BusinessTool.prototype.budingwei = function (obj, r) {
        var a = this.countChooseLength(obj.selectarea);
        obj.count = this.C(a, r);
        obj.totals = this.countsTotal(obj);
    };
    BusinessTool.prototype.daxiaodanshuangqing = function (arr, tag, value) {
        function hanlder(v, k, arr) {
            arr[k] = false;
        }
        function setDaXiao(startIndex, endindex, array) {
            for (var i = 0; i < array.length; i++) {
                if (i >= startIndex && i < endindex) {
                    array[i] = true;
                }
                else {
                    array[i] = false;
                }
            }
        }
        function setDanShuang(tag, array, value) {
            function setFalse(arr, i) {
                arr[i] = false;
            }
            console.log(value);
            function setTrue(arr, i) {
                arr[i] = true;
            }
            function setds(array) {
                for (var i = 0; i < array.length; i++) {
                    if (tag == 'dan') {
                        if ((+value[i]) % 2 === 0) {
                            setFalse(array, i);
                        }
                        else {
                            setTrue(array, i);
                        }
                    }
                    else {
                        if ((+value[i]) % 2 === 0) {
                            setTrue(array, i);
                        }
                        else {
                            setFalse(array, i);
                        }
                    }
                }
            }
            setds(array);
        }
        function qing(array) {
            array.some(hanlder);
        }
        function setquan(array) {
            for (var i = 0; i < array.length; i++)
                arr[i] = true;
        }
        switch (tag) {
            case 'da':
                setDaXiao(arr.length / 2, arr.length, arr);
                break;
            case 'xiao':
                setDaXiao(0, arr.length / 2, arr);
                break;
            case 'dan':
                setDanShuang('dan', arr, value);
                break;
            case 'shuang':
                setDanShuang('shuang', arr, value);
                break;
            case 'quan':
                setquan(arr);
                break;
            case 'qing':
                qing(arr);
                break;
        }
        return arr;
    };
    BusinessTool.prototype.clearBall = function (ball) {
        ball.forEach(function (v, k, arr) {
            if (Array.isArray(v)) {
                v.forEach(function (v, k, arr) {
                    arr[k] = false;
                });
            }
            else {
                arr[k] = false;
            }
        });
    };
    BusinessTool.prototype.findRandom = function (name, obj) {
        this.clearBall(obj.selectarea);
        switch (name) {
            case "组三":
                this.randomPluck(obj.selectarea[0], 2);
                break;
            case "组六":
                this.randomPluck(obj.selectarea[0], 3);
                break;
            default:
                var zhx = (/组选(\d+)/).exec(name);
                if ((/复式|后二|组合|直选和值|组选和值|定位胆|一帆风顺|好事成双|三星报喜|四季发财|包胆|大小单双|龙/).test(name)) {
                    this.runArray(obj.selectarea);
                }
                else if ((/(.{1})码不定位/).test(name)) {
                    this.randomPluck(obj.selectarea[0], {
                        '三': 3,
                        '二': 2,
                        '一': 1
                    }[RegExp.$1]);
                }
                else if (zhx) {
                    var num = zhx[1];
                    var b = obj.selectarea;
                    if (b.length == 1) {
                        this.randomPluck(b[0], { 120: 5, 60: 4, 24: 4, 6: 2 }[num]);
                    }
                    else {
                        var marr = { 60: [1, 4], 30: [2, 1], 20: [1, 2], 10: [1, 1], 12: [1, 2], 4: [1, 2] }[num];
                        this.randomPluck(b[0], marr[0]);
                        this.randomPluck(b[1], marr[1]);
                    }
                }
        }
    };
    BusinessTool.prototype.randomPluck = function (array, num) {
        var cacheIndex = [];
        function randomNum() {
            var n = Math.floor(Math.random() * array.length);
            if (cacheIndex.indexOf(n) > -1)
                n = randomNum();
            cacheIndex.push(n);
            return n;
        }
        if (!num) {
            var index = Math.floor(Math.random() * array.length);
            array[index] = true;
        }
        else {
            for (var i = 0; i < num; i++)
                array[randomNum()] = true;
        }
        return array;
    };
    BusinessTool.prototype.runArray = function (ball) {
        function hanlder(v, k, arr) {
            arr[k] = false;
        }
        for (var key = 0; key < ball.length; key++) {
            if (ball[key] instanceof Array) {
                ball[key].some(hanlder);
                this.randomPluck(ball[key], null);
            }
        }
    };
    BusinessTool.prototype.deepCloneObj = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    BusinessTool.prototype.encrypt = function (data) {
        var _$ = ['\x4a\x38\x4c\x46\x51\x49\x55\x37\x58\x38\x59\x54\x46\x42\x52\x39', '\x45\x33\x54\x59\x34\x37\x30\x50\x48\x47\x54\x45\x56\x35\x59\x42'];
        var key = __WEBPACK_IMPORTED_MODULE_2_crypto_js__["enc"].Latin1.parse(_$[0]);
        var iv = __WEBPACK_IMPORTED_MODULE_2_crypto_js__["enc"].Latin1.parse(_$[1]);
        return __WEBPACK_IMPORTED_MODULE_2_crypto_js__["AES"].encrypt(data, key, {
            iv: iv,
            mode: __WEBPACK_IMPORTED_MODULE_2_crypto_js__["mode"].CBC,
            padding: __WEBPACK_IMPORTED_MODULE_2_crypto_js__["pad"].ZeroPadding
        }).toString();
    };
    return BusinessTool;
}(__WEBPACK_IMPORTED_MODULE_1__game_util__["a" /* GameUtil */]));
BusinessTool = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BusinessTool);

//# sourceMappingURL=business-tool.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/**
 * Created by richard on 1/4/17.
 * thanks:https://github.com/mennovanslooten/underscore-observe
 */

var _detect_timeout;
var _subjects = [];
var _observables = [];
// ES5 Object support check from Modernizr
var _es5_object_supported = !!(Object.keys &&
    Object.create &&
    Object.getPrototypeOf &&
    Object.getOwnPropertyNames &&
    Object.isSealed &&
    Object.isFrozen &&
    Object.isExtensible &&
    Object.getOwnPropertyDescriptor &&
    Object.defineProperty &&
    Object.defineProperties &&
    Object.seal &&
    Object.freeze &&
    Object.preventExtensions);
function ObservableArray(subject) {
    var _first_bind = true;
    var _old_subject = [];
    var _handlers = {
        generic: [],
        create: [],
        update: [],
        'delete': []
    };
    function reset() {
        callGenericSubscribers();
        _old_subject = JSON.parse(JSON.stringify(subject));
    }
    function callGenericSubscribers() {
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](_handlers.generic, function (f) {
            f(subject, _old_subject);
        });
    }
    function callCreateSubscribers(new_item, item_index) {
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](_handlers.create, function (f) {
            f(new_item, item_index);
        });
    }
    function callUpdateSubscribers(new_item, old_item, item_index) {
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](_handlers.update, function (f) {
            f(new_item, old_item, item_index);
        });
    }
    function callDeleteSubscribers(deleted_item, item_index) {
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](_handlers['delete'], function (f) {
            f(deleted_item, item_index);
        });
    }
    function detectChanges() {
        var old_length = _old_subject.length;
        var new_length = subject.length;
        if (old_length !== new_length || JSON.stringify(_old_subject) !== JSON.stringify(subject)) {
            var max = Math.max(new_length, old_length) - 1;
            for (var i = max; i >= 0; i--) {
                var old_item = _old_subject[i];
                var new_item = subject[i];
                if (i > old_length - 1) {
                    callCreateSubscribers(new_item, i);
                }
                else if (i > new_length - 1) {
                    callDeleteSubscribers(old_item, i);
                }
                else if (!__WEBPACK_IMPORTED_MODULE_0_underscore__["isEqual"](new_item, old_item)) {
                    callUpdateSubscribers(new_item, old_item, i);
                }
            }
            reset();
        }
    }
    /* ################################################################
     Array mutator methods
     ################################################################ */
    function overrideMethod(name, f) {
        // Use Object.defineProperty to prevent methods from appearing in
        // the subject's for in loop
        if (_es5_object_supported) {
            Object.defineProperty(subject, name, {
                value: f
            });
        }
        else {
            subject[name] = f;
        }
    }
    // We need to augment all the standard Array mutator methods to notify
    // all observers in case of a change.
    //
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array#Mutator_methods
    // pop: Removes the last element from an array and returns that element.
    overrideMethod('pop', function () {
        detectChanges();
        var deleted_item = Array.prototype.pop.apply(this, arguments);
        var item_index = this.length;
        callDeleteSubscribers(deleted_item, item_index);
        reset();
        return deleted_item;
    });
    // push: Adds one or more elements to the end of an array and returns
    // the new length of the array.
    overrideMethod('push', function () {
        detectChanges();
        var new_item = arguments[0];
        var new_length = Array.prototype.push.apply(this, arguments);
        callCreateSubscribers(new_item, new_length - 1);
        reset();
        return new_length;
    });
    // reverse: Reverses the order of the elements of an array -- the first
    // becomes the last, and the last becomes the first.
    overrideMethod('reverse', function () {
        detectChanges();
        // Always use reverse loops when deleting stuff based on index
        for (var j = this.length - 1; j >= 0; j--) {
            callDeleteSubscribers(this[j], j);
        }
        var result = Array.prototype.reverse.apply(this, arguments);
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](this, callCreateSubscribers);
        reset();
        return result;
    });
    // shift: Removes the first element from an array and returns that
    // element.
    overrideMethod('shift', function () {
        detectChanges();
        var deleted_item = Array.prototype.shift.apply(this, arguments);
        callDeleteSubscribers(deleted_item, 0);
        reset();
        return deleted_item;
    });
    // sort: Sorts the elements of an array.
    overrideMethod('sort', function () {
        detectChanges();
        // Always use reverse loops when deleting stuff based on index
        for (var j = this.length - 1; j >= 0; j--) {
            callDeleteSubscribers(this[j], j);
        }
        var result = Array.prototype.sort.apply(this, arguments);
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](this, callCreateSubscribers);
        reset();
        return result;
    });
    // splice: Adds and/or removes elements from an array.
    overrideMethod('splice', function (i /*, length , insert */) {
        detectChanges();
        var insert = Array.prototype.slice.call(arguments, 2);
        var deleted = Array.prototype.splice.apply(this, arguments);
        // Always use reverse loops when deleting stuff based on index
        for (var j = deleted.length - 1; j >= 0; j--) {
            callDeleteSubscribers(deleted[j], i + j);
        }
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](insert, function (new_item, k) {
            callCreateSubscribers(new_item, i + k);
        });
        reset();
        return deleted;
    });
    // unshift: Adds one or more elements to the front of an array and
    // returns the new length of the array.
    overrideMethod('unshift', function () {
        detectChanges();
        var new_length = Array.prototype.unshift.apply(this, arguments);
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](arguments, function (new_item, i) {
            callCreateSubscribers(new_item, i);
        });
        reset();
        return new_length;
    });
    //setInterval(detectChanges, 250);
    //detectChanges();
    return {
        detectChanges: detectChanges,
        unbind: function (type, handler) {
            if (__WEBPACK_IMPORTED_MODULE_0_underscore__["isUndefined"](type) && __WEBPACK_IMPORTED_MODULE_0_underscore__["isUndefined"](handler)) {
                __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](_handlers, function (handler) {
                    handler.length = 0;
                });
            }
            else if (__WEBPACK_IMPORTED_MODULE_0_underscore__["isString"](type) && __WEBPACK_IMPORTED_MODULE_0_underscore__["isUndefined"](handler)) {
                _handlers[type].length = 0;
            }
            else if (__WEBPACK_IMPORTED_MODULE_0_underscore__["isFunction"](type) && __WEBPACK_IMPORTED_MODULE_0_underscore__["isUndefined"](handler)) {
                handler = type;
                type = 'generic';
                _handlers[type] = __WEBPACK_IMPORTED_MODULE_0_underscore__["without"](_handlers[type], handler);
            }
            else if (__WEBPACK_IMPORTED_MODULE_0_underscore__["isString"](type) && __WEBPACK_IMPORTED_MODULE_0_underscore__["isFunction"](handler)) {
                _handlers[type] = __WEBPACK_IMPORTED_MODULE_0_underscore__["without"](_handlers[type], handler);
            }
        },
        bind: function (type, handler) {
            _handlers[type].push(handler);
            if (type === 'generic') {
                handler(subject, _old_subject);
            }
            else if (type === 'create') {
                __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](subject, function (item, index) {
                    // Don't do this, it will add the current array as an
                    // extra argument:
                    //_.each(subject, handler);
                    handler(item, index);
                });
            }
            if (_first_bind) {
                _old_subject = JSON.parse(JSON.stringify(subject));
                _first_bind = false;
            }
        }
    };
}
__WEBPACK_IMPORTED_MODULE_0_underscore__["mixin"]({
    observe: function (subject, type, f) {
        if (!__WEBPACK_IMPORTED_MODULE_0_underscore__["isArray"](subject)) {
            subject = [subject];
        }
        if (__WEBPACK_IMPORTED_MODULE_0_underscore__["isFunction"](type)) {
            f = type;
            type = 'generic';
        }
        var index = __WEBPACK_IMPORTED_MODULE_0_underscore__["indexOf"](_subjects, subject);
        if (index === -1) {
            index = _subjects.length;
            _subjects.push(subject);
            var observable = ObservableArray(subject);
            _observables.push(observable);
        }
        _observables[index].bind(type, f);
        scheduleDetectAllChanges();
        return subject;
    },
    unobserve: function (subject, type, f) {
        if (!arguments.length) {
            // _.unobserve() removes all observers
            __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](_observables, function (observable) {
                observable.unbind();
            });
            _subjects.length = 0;
            _observables.length = 0;
            return;
        }
        if (!__WEBPACK_IMPORTED_MODULE_0_underscore__["isArray"](subject)) {
            throw 'subject should be a array';
        }
        var index = __WEBPACK_IMPORTED_MODULE_0_underscore__["indexOf"](_subjects, subject);
        if (index === -1) {
            return;
        }
        _observables[index].unbind(type, f);
        return subject;
    }
});
function detectAllChanges() {
    if (!_observables.length) {
        _detect_timeout = null;
        return;
    }
    __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](_observables, function (observable) {
        observable.detectChanges();
    });
    scheduleDetectAllChanges();
}
function scheduleDetectAllChanges() {
    if (_detect_timeout) {
        clearTimeout(_detect_timeout);
    }
    _detect_timeout = setTimeout(detectAllChanges, 250);
}
var observe = (function () {
    function observe() {
        __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"](this, __WEBPACK_IMPORTED_MODULE_0_underscore__);
    }
    observe.prototype.observe = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
    };
    return observe;
}());

//# sourceMappingURL=observe.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubBusinessToolProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_tools_business_tool__ = __webpack_require__(208);
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


var SubBusinessToolProvider = (function (_super) {
    __extends(SubBusinessToolProvider, _super);
    function SubBusinessToolProvider() {
        return _super.call(this) || this;
    }
    SubBusinessToolProvider.prototype.initSetBussiness = function (c) {
        var _this = this;
        var bet_numberArrObj = [];
        var selectareaPair = [];
        var selectarea = [];
        c.ishezhi = /.hezhi$/.test(c.fullName_en);
        c.isertonghao = /ertonghao$/.test(c.fullName_en);
        c.issanlianhao = /santonghao|sanlianhao/.test(c.fullName_en);
        if (c.ishezhi) {
            bet_numberArrObj = selectareaPair = c.bet_number;
            selectarea = c.bet_number.map(function (v) { return false; });
        }
        else {
            c.bet_number = this.threeArrToTwoArr(c.bet_number, c);
            if (c.isertonghao) {
                c.bet_number.splice(-1);
            }
        }
        bet_numberArrObj = selectareaPair = c.bet_number;
        if (c.leveltwo) {
            selectarea = c.bet_number.map(function (v) { return v.map(function (vv) { return false; }); });
        }
        else {
            selectarea = c.bet_number.map(function (v) { return false; });
        }
        c.modesArray = [1, 0.1, 0.01];
        var mutipleAndModeObj = {
            mode: 1,
            times: 1
        };
        c.mutipleAndModeObj = mutipleAndModeObj;
        c.bet_numberArrObj = bet_numberArrObj;
        c.selectarea = selectarea;
        c.selectareaPair = selectareaPair;
        c.count = 0;
        c.totals = 0;
        //是否和值
        this._.observe(c.selectarea, 'update', function () {
            _this.mainBussiness(c);
        });
        this._.observe(c.mutipleAndModeObj, 'update', function () {
            _this.mainBussiness(c);
        });
    };
    SubBusinessToolProvider.prototype.threeArrToTwoArr = function (arr, c) {
        if (arr[0] && Array.isArray(arr[0])) {
            c.leveltwo = false;
            if (arr[0][0] && Array.isArray(arr[0][0])) {
                c.leveltwo = true;
            }
            return arr[0];
        }
        return arr;
    };
    SubBusinessToolProvider.prototype.mainBussiness = function (data) {
        this.findCounter(data.name_cn, data);
    };
    SubBusinessToolProvider.prototype.findCounter = function (name, obj) {
        obj.count = obj.selectarea.toString().replace(/false/g, '').split(',').filter(function (v) { return v; }).length;
        ;
        obj.totals = this.countsTotal(obj);
    };
    return SubBusinessToolProvider;
}(__WEBPACK_IMPORTED_MODULE_1__providers_tools_business_tool__["a" /* BusinessTool */]));
SubBusinessToolProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SubBusinessToolProvider);

//# sourceMappingURL=sub-business-tool.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormat; });
var DateFormat = (function () {
    function DateFormat() {
    }
    DateFormat.format = function (d) {
        var oMonth = "0" + (d.getMonth() + 1);
        oMonth = oMonth.slice(-2);
        return d.getFullYear() + "-" + oMonth + "-" + ('0' + d.getDate()).slice(-2);
    };
    DateFormat.formatCompatible = function (d) {
        var oMonth = "0" + (d.getMonth() + 1);
        oMonth = oMonth.slice(-2);
        return d.getFullYear() + "/" + oMonth + "/" + ('0' + d.getDate()).slice(-2);
    };
    DateFormat.FormatTime = function (dd) {
        if (dd) {
            var d = new Date(dd.replace(/-/g, '/'));
            var hh = ("0" + d.getHours()).slice(-2);
            var mm = ("0" + d.getMinutes()).slice(-2);
            return hh + ":" + mm;
        }
        return '';
    };
    return DateFormat;
}());

//# sourceMappingURL=date.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_http_client_http_client__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_share_global_share__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MyExceptionHandler__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_my_pop_over_my_pop_over__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_games_jsks_sub_business_tool__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__components_my_pop_over_my_pop_over__["a" /* MyPopOverComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NO_ERRORS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                backButtonText: '返回',
                iconMode: 'ios',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                tabsPlacement: 'bottom',
                pageTransition: 'ios',
                mode: 'ios',
                tabsHideOnSubPages: true
            }, {
                links: [
                    { loadChildren: '../pages/common/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/common/person-data/person-data.module#PersonDataPageModule', name: 'PersonDataPage', segment: 'person-data', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/common/play-help/play-help.module#PlayHelpPageModule', name: 'PlayHelpPage', segment: 'play-help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/common/set/set.module#SetPageModule', name: 'SetPage', segment: 'set', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/games/cqssc/cqssc.module#CqsscPageModule', name: 'CqsscPage', segment: 'cqssc', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/games/game-common/bet-detail-more/bet-detail-more.module#BetDetailMorePageModule', name: 'BetDetailMorePage', segment: 'bet-detail-more', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/games/game-common/bet-success/bet-success.module#BetSuccessPageModule', name: 'BetSuccessPage', segment: 'bet-success', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/games/game-common/buy-basket/buy-basket.module#BuyBasketPageModule', name: 'BuyBasketPage', segment: 'buy-basket', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/games/jsks/jsks.module#JsksPageModule', name: 'JsksPage', segment: 'jsks', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/games/pk10/pk10.module#Pk10PageModule', name: 'Pk10Page', segment: 'pk10', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/message/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/message/message-detail/message-detail.module#MessageDetailPageModule', name: 'MessageDetailPage', segment: 'message-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/add-bank/add-bank.module#AddBankPageModule', name: 'AddBankPage', segment: 'add-bank', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/bankcard-rechargecomfirm/bankcard-rechargecomfirm.module#BankcardRechargecomfirmPageModule', name: 'BankcardRechargecomfirmPage', segment: 'bankcard-rechargecomfirm', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/bankrecharge-result/bankrecharge-result.module#BankrechargeResultPageModule', name: 'BankrechargeResultPage', segment: 'bankrecharge-result', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/bind-bank/bind-bank.module#BindBankPageModule', name: 'BindBankPage', segment: 'bind-bank', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/card-comfirm/card-comfirm.module#CardComfirmPageModule', name: 'CardComfirmPage', segment: 'card-comfirm', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/code-comfirm/code-comfirm.module#CodeComfirmPageModule', name: 'CodeComfirmPage', segment: 'code-comfirm', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/get-money/get-money.module#GetMoneyPageModule', name: 'GetMoneyPage', segment: 'get-money', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/manage-catalogue/manage-catalogue.module#ManageCataloguePageModule', name: 'ManageCataloguePage', segment: 'manage-catalogue', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/recharge/recharge.module#RechargePageModule', name: 'RechargePage', segment: 'recharge', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/recharge-detail/recharge-detail.module#RechargeDetailPageModule', name: 'RechargeDetailPage', segment: 'recharge-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/remove-bind/remove-bind.module#RemoveBindPageModule', name: 'RemoveBindPage', segment: 'remove-bind', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/safe-center/safe-center.module#SafeCenterPageModule', name: 'SafeCenterPage', segment: 'safe-center', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/select-bank/select-bank.module#SelectBankPageModule', name: 'SelectBankPage', segment: 'select-bank', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money/valid-bank/valid-bank.module#ValidBankPageModule', name: 'ValidBankPage', segment: 'valid-bank', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notice/notice-detail/notice-detail.module#NoticeDetailPageModule', name: 'NoticeDetailPage', segment: 'notice-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notice/notice-list/notice-list.module#NoticeListPageModule', name: 'NoticeListPage', segment: 'notice-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal/personal-profiles/personal-profiles.module#PersonalProfilesPageModule', name: 'PersonalProfilesPage', segment: 'personal-profiles', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/record/bet-datail/bet-datail.module#BetDatailPageModule', name: 'BetDatailPage', segment: 'bet-datail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/record/game-record/game-record.module#GameRecordPageModule', name: 'GameRecordPage', segment: 'game-record', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/special/special-detail/special-detail.module#SpecialDetailPageModule', name: 'SpecialDetailPage', segment: 'special-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/special/special-offer/special-offer.module#SpecialOfferPageModule', name: 'SpecialOfferPage', segment: 'special-offer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab/tab-home/tab-home.module#TabHomePageModule', name: 'TabHomePage', segment: 'tab-home', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__components_my_pop_over_my_pop_over__["a" /* MyPopOverComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__providers_http_client_http_client__["a" /* HttpClientProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_global_share_global_share__["a" /* GlobalShareProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9__MyExceptionHandler__["a" /* MyExceptionHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__pages_games_jsks_sub_business_tool__["a" /* SubBusinessToolProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameUtil; });
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

var GameUtil = (function () {
    function GameUtil() {
    }
    GameUtil.prototype.C = function (n, r) {
        if (r > n)
            return 0;
        if (r === undefined)
            throw Error("请传入每个参数");
        /*---数学公式=n!/r!(n-r)!----*/
        return this.factorial(n) / (this.factorial(r) * this.factorial(n - r));
    };
    GameUtil.prototype.factorial = function (num) {
        var total = 1;
        for (var i = 1; i <= num; i++) {
            total *= i;
        }
        return total;
    };
    GameUtil.prototype.getTrueArrayLength = function (arr) {
        return arr.filter(function (v) {
            return v;
        }).length;
    };
    GameUtil.prototype.getCountFromPermutation = function (arg) {
        var _this = this;
        return arg.reduce(function (prev, cur) {
            return prev * _this.getTrueArrayLength(cur);
        }, 1);
    };
    GameUtil.prototype.getCountFromCombination = function (arr, r) {
        var n = this.getTrueArrayLength(arr);
        return this.C(n, r);
    };
    return GameUtil;
}());
GameUtil = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GameUtil);

//# sourceMappingURL=game-util.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_share_global_share__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tools_date__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(share, app, ionicApp, platform, statusBar, splashScreen, menu) {
        var _this = this;
        this.share = share;
        this.app = app;
        this.ionicApp = ionicApp;
        this.platform = platform;
        this.menu = menu;
        this.ft = __WEBPACK_IMPORTED_MODULE_6__providers_tools_date__["a" /* DateFormat */].FormatTime;
        this.rootPage = "LoginPage";
        this.userTypeMap = __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* Config */].userTypeMap;
        this.gamelistIconMap = __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* Config */].gameiconMap;
        this.statusName = { 0: '待开奖', 1: '已撤销', 2: '未中奖', 3: '已中奖', 4: '已派奖', 5: '系统撤销' };
        this.yearReg = /[\d]{4}-/;
        platform.ready().then(function () {
            if (!(/^#(\/login|\/tmp)/.test(location.hash) || /^#\/tmp/.test(location.hash))) {
                setTimeout(function (v) { return _this.nav.setRoot('LoginPage'); }, 500);
            }
            statusBar.styleDefault();
            splashScreen.hide();
            _this.egisterBackButtonAction();
        });
    }
    MyApp.prototype.egisterBackButtonAction = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            var activePortal = _this.ionicApp._modalPortal.getActive();
            if (activePortal) {
                activePortal.dismiss();
                return;
            }
            var activeNav = _this.app.getActiveNav();
            if (activeNav.canGoBack()) {
                activeNav.pop();
            }
            else {
                _this.showExit();
            }
        });
    };
    MyApp.prototype.showExit = function () {
        var _this = this;
        this.share.showAlert('您需要退出程序吗?', [{ text: '取消', handler: function () { return console.log('Disagree clicked'); } },
            { text: '退出', handler: function () { return _this.platform.exitApp(); } }]);
    };
    MyApp.prototype.playGame = function (gameNav, toPage) {
        if (!gameNav.time) {
            this.share.showToast('即将上线', 1000);
            return;
        }
        this.menu.close();
        if (toPage) {
            if (/k3$/i.test(gameNav.nav)) {
                toPage = 'JsksPage';
            }
            else if (/SSC|11Y$/i.test(gameNav.nav)) {
                toPage = 'CqsscPage';
            }
            else if (/K10$/i.test(gameNav.nav)) {
                toPage = 'Pk10Page';
            }
            if (toPage)
                this.nav.push(toPage, { nav: gameNav });
        }
    };
    MyApp.prototype.goPage = function (page, parameter, how) {
        if (page) {
            this.menu.close();
            if (how) {
                this.nav.push(page, parameter);
            }
            else {
                this.nav.setRoot(page, parameter);
            }
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/eric.ch/Documents/bomao-app/src/app/app.html"*/'<ion-menu [content]="content" side="left" id="menu1">\n  <ion-content>\n    <div class="side-content">\n      <div class="side-header">\n        <span class="member" (touchstart)="goPage(\'TabHomePage\',{pageIndex: 4})"><img src="assets/img/header-pic.svg" alt=""></span>\n        <span class="name-grade">\n          <strong class="name">{{ share?.user?.username}}</strong>\n          <strong class="grade">会员类型：{{userTypeMap[ share?.user?.user_type]}}</strong>\n        </span>\n      </div>\n      <div class="side-title clear">\n        <a (touchstart)="goPage(\'TabHomePage\',\'\')"><span>游戏大厅</span></a>\n        <a (touchstart)="goPage(\'GameRecordPage\',{title: \'投注记录\'},1)"><span>投注记录</span></a>\n        <a (touchstart)="goPage(\'ManageCataloguePage\',\'\',1)"><span>充值提款</span></a>\n      </div>\n      <div class="side-wrap">\n        <ul class="side-list">\n          <li class="side-li" *ngFor="let items of share?.dataGroup">\n            <div class="side-con clear">\n              <div class="fl">\n                <img src="{{gamelistIconMap[items.name]}}" alt="">\n                <span>{{items.name}}</span>\n              </div>\n              <div class="fr">\n                <span class="time" *ngIf="items?.group">{{ft(items.group[0]?.time)}}</span>\n                <!--<span class="star"><i [class.icon-wujiaoxingman]="" class="iconfont icon-wujiaoxingkong"></i></span>-->\n              </div>\n            </div>\n            <div class="side-drop clear" *ngIf="items.group">\n              <a class="definite-sort" *ngFor="let minitems of items.group" (touchstart)="playGame(minitems,\'CqsscPage\')">{{minitems.name}}\n              </a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </ion-content>\n</ion-menu>\n\n<ion-menu [content]="content" side="right" id="unauthenticated">\n  <ion-content class="blue-bg">\n    <div class="bill-title">投注单</div>\n    <div class="bet-con">\n      <ul class="bet-record side-bet-record">\n        <li *ngFor="let item of share?.gameRecord?.data" (touchstart)="goPage(\'BetDatailPage\',item,1)">\n          <div class="my-table">\n            <div class="my-row">\n              <div class="my-cell">\n                <div class="text-2 gray">{{item.created_at?.replace(yearReg, \'\')}}</div>\n              </div>\n              <div class="my-cell large-col">\n                <div class="text-1 white">{{item.friendly_name}}</div>\n                <div class="text-2">金额：{{item.amount}}</div>\n                <div class="col-4">{{item.display_bet_number}}</div>\n              </div>\n              <div class="my-cell right">\n                <div class="text-2 nowrap" [class.orange]="item.status == 3" [class.green]="item.status == 0">\n                  {{statusName[item.status]}}\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <no-data-remind *ngIf="!share?.gameRecord?.data?.length"></no-data-remind>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/Users/eric.ch/Documents/bomao-app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_share_global_share__["a" /* GlobalShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyExceptionHandler; });
var MyExceptionHandler = (function () {
    function MyExceptionHandler() {
    }
    MyExceptionHandler.prototype.handleError = function (err) {
        console.log(err);
    };
    return MyExceptionHandler;
}());

//# sourceMappingURL=MyExceptionHandler.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalShareProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlobalShareProvider = (function () {
    function GlobalShareProvider(http, toastCtrl, loadingCtrl, alertCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.basketData = [];
        this.basketDataValideArr = [];
        this.globalData = { globalMutile: 1, trace: 1 };
        this.dataGroup = [];
        this.gameRecord = { data: [] };
        this.chargeRecord = { data: [] };
        this.parameters = { 0: {
                _token: '',
                page: 1,
                end: '',
                start: '',
                bet_status: 1,
                lottery_id: ''
            }, 1: {
                _token: '',
                page: 1,
                end: '',
                start: '',
                bet_status: 1,
                lottery_id: ''
            } };
        this.store = {
            get: function (key) {
                return JSON.parse(localStorage.getItem(key));
            },
            set: function (key, value) {
                if (typeof value != 'number')
                    value = JSON.stringify(value);
                localStorage.setItem(key, value);
            },
            remove: function (key) {
                localStorage.removeItem(key);
            }
        };
    }
    GlobalShareProvider.prototype.showToast = function (msg, time, position) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time ? time : 2000,
            position: position ? position : 'middle'
        });
        toast.present();
    };
    GlobalShareProvider.prototype.showAlert = function (title, button, subTitle, msg, input) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle ? subTitle : '',
            message: msg ? msg : '',
            inputs: input ? input : '',
            buttons: button ? button : ''
        });
        alert.present();
    };
    GlobalShareProvider.prototype.hideLoading = function () {
        this.loading && this.loading.dismiss();
        this.loading = null;
    };
    GlobalShareProvider.prototype.showLoading = function (msg) {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({ content: msg ? msg : '', spinner: 'bubbles' });
            this.loading.present();
        }
    };
    GlobalShareProvider.prototype.setPid = function (name) {
        this.pid = name;
    };
    GlobalShareProvider.prototype.getPid = function () {
        return this.pid;
    };
    return GlobalShareProvider;
}());
GlobalShareProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], GlobalShareProvider);

//# sourceMappingURL=global-share.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = (function () {
    function Config() {
    }
    Config.repleceImgSrc = function (str) {
        return str.replace(/src="([\s\S]+?)"/g, function (mathed, a) {
            return "src=\"" + Config.baseurl + a + "\"";
        });
    };
    return Config;
}());

Config.baseurl = "";
//static baseurl = "http://180.178.42.214";
Config.autologin = !!(+localStorage.getItem('autologin'));
Config.bankcardIconMap = {
    "中国工商银行": "assets/img/bank/gongshang.svg",
    "中国建设银行": "assets/img/bank/jianshe.svg",
    "中国农业银行": "assets/img/bank/nongye.svg",
    "中国银行": "assets/img/bank/zhongguo.svg",
    "招商银行": "assets/img/bank/zhaoshang.svg",
    "中国交通银行": "assets/img/bank/jiaotong.svg",
    "中国民生银行": "assets/img/bank/mingsheng.svg",
    "中信银行": "assets/img/bank/zhongxin.svg",
    "上海浦东发展银行": "assets/img/bank/pufa.svg",
    "广东发展银行": "assets/img/bank/guangfa.svg",
    "平安银行": "assets/img/bank/pingan.svg",
    "兴业银行": "assets/img/bank/xingye.svg",
    "华夏银行": "assets/img/bank/huaxia.svg",
    "中国光大银行": "assets/img/bank/guangda.svg",
    "中国邮政储蓄银行": "assets/img/bank/youzheng.svg",
    "财付通": "assets/img/bank/caifutong.svg",
    "上海银行": "assets/img/bank/shanghai.svg",
    "北京银行": "assets/img/bank/beijing.svg",
    "江苏银行": "assets/img/bank/jiangsu.svg",
    "宁波银行": "assets/img/bank/ningbo.svg",
    "深圳发展银行": "assets/img/bank/shenfa.svg",
    "温州银行": "assets/img/bank/wenzhou.svg",
    "杭州银行": "assets/img/bank/hangzhou.svg",
    "金华银行": "assets/img/bank/jinhua.svg",
    "恒丰银行": "assets/img/bank/hengfeng.svg",
    "郑州银行": "assets/img/bank/zhengzhou.svg",
    "包商银行": "assets/img/bank/baoshang.svg",
    "福建海峡银行": "assets/img/bank/fujianhaixia.svg",
    "嘉兴银行": "assets/img/bank/jiaxing.svg",
    "绍兴银行": "assets/img/bank/shaoxing.svg",
};
Config.gameiconMap = {
    "时时彩系列": "assets/img/lottery-sort/shishicai.png",
    "11选5系列": "assets/img/lottery-sort/11select5.png",
    "六合彩系列": "assets/img/lottery-sort/liuhecai.png",
    "快三系列": "assets/img/lottery-sort/jiangsukuai3.png",
    "福彩3D": "assets/img/lottery-sort/fucai3d.png",
    "幸运28系列": "assets/img/lottery-sort/kuaile28.png",
    "排列3/5": "assets/img/lottery-sort/ticaiP3-5.png",
    "北京PK10": "assets/img/lottery-sort/beijingpk10.png"
};
Config.userTypeMap = {
    0: '普通用户',
    1: '代理',
    2: '总代'
};
Config.ballLabelMap = {
    'w': '万',
    'q': '千',
    'b': '百',
    's': '十',
    'g': '个',
    'danhao': '单号',
    'erchonghao': '二重号',
    'sanchonghao': '三重号',
    'sichonghao': '四重号',
    'da': '大',
    'xiao': '小',
    'dan': '单',
    'shuang': '双',
    'baozi': '豹子',
    'shunzi': '顺子',
    'duizi': '对子',
    'xiao(0-4)': '小(0-4)',
    'da(5-9)': '大(5-9)',
    'yiqu(0,1)': '一区(0,1)',
    'erqu(2,3)': '二区(2,3)',
    'sanqu(4,5)': '三区((4,5)',
    'siqu(6,7)': '四区(6,7)',
    'wuqu(8,9)': '五区(8,9)',
    'long': '龙',
    'hu': '虎',
    'he': '和',
    'wq': '万:千',
    'wb': '万:百',
    'ws': '万:十',
    'wg': '万:个',
    'qb': '千:百',
    'qs': '千:十',
    'qg': '千:个',
    'bs': '百:十',
    'bg': '百:个',
    'sg': '十:个',
    'erwei': '二位',
    'yiwei': '一位',
    'sanwei': '三位',
    '5dan0shuang': '5单0双',
    '4dan1shuang': '4单1双',
    '3dan2shuang': '3单2双',
    '2dan3shuang': '2单3双',
    '1dan4shuang': '1单4双',
    '0dan5shuang': '0单5双',
    'danma': '胆码',
    'tuoma': '拖码'
};
//# sourceMappingURL=config.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map