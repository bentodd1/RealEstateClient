webpackJsonp([0],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/market-detail/market-detail.module": [
		155
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketDetailPageModule", function() { return MarketDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_detail__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MarketDetailPageModule = (function () {
    function MarketDetailPageModule() {
    }
    MarketDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__market_detail__["a" /* MarketDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__market_detail__["a" /* MarketDetailPage */]),
            ],
        })
    ], MarketDetailPageModule);
    return MarketDetailPageModule;
}());

//# sourceMappingURL=market-detail.module.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_detail_market_detail__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_real_estate_real_estate__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, realEstateProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.realEstateProvider = realEstateProvider;
        this.pageTitle = 'Market Health';
        this._markets = [];
        this.markets = [];
        this.realEstateProvider.getAllRealEstate().subscribe(function (res) {
            _this._markets = res["markets"];
            // console.log(JSON.stringify(res));
            _this.initializeItems();
        });
    }
    HomePage.prototype.goToDetail = function (market) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__market_detail_market_detail__["a" /* MarketDetailPage */], { market: market });
    };
    HomePage.prototype.getSearchResults = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.markets = this._markets.filter(function (market) {
                return (market.city.toLowerCase().indexOf(val.toLowerCase()) > -1 || market.zip.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    //TODO get this right
    HomePage.prototype.initializeItems = function () {
        this.markets = this._markets;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kevinmontanez/Desktop/repos/RealEstateClient/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{pageTitle}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar [placeholder]="\'Enter a city or zip\'" (ionInput)="getSearchResults($event)"></ion-searchbar>\n  <ion-row padding align-items-center style="background: lightgray;height:44px">\n    <ion-col col-6 class="body-2 gray">City</ion-col>\n    <ion-col col-3 class="body-2 gray" text-center>Zip</ion-col>\n    <ion-col col-3 class="body-2 gray" text-right>Health</ion-col>\n  </ion-row>\n  <ion-row padding align-items-center *ngFor="let m of markets" style="height:44px;border-bottom:1px solid lightgray" (click)="goToDetail(m)">\n    <ion-col col-6 class="body-1 gray">{{m?.City}}</ion-col>\n    <ion-col col-3 class="body-1 gray" text-center>{{m?.State}}</ion-col>\n    <ion-col col-3 class="body-1 gray" text-right>{{m?.MarketHealthIndex}}</ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/kevinmontanez/Desktop/repos/RealEstateClient/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_real_estate_real_estate__["a" /* RealEstateProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_real_estate_real_estate__["a" /* RealEstateProvider */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealEstateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RealEstateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RealEstateProvider = (function () {
    function RealEstateProvider(http) {
        this.http = http;
    }
    RealEstateProvider.prototype.login = function (body) {
        return this.http.post('https://mentr.msts.com/api/users/auth', body, { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" }) });
    };
    RealEstateProvider.prototype.startSession = function (session) {
        this.session = session;
        console.log("Starting session with " + JSON.stringify(this.session));
    };
    RealEstateProvider.prototype.register = function (body) {
        return this.http.post('https://mentr.msts.com/api/users/register', body, { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" }) });
    };
    RealEstateProvider.prototype.getRealEstateById = function (id) {
        return this.http.get('http://ec2-34-216-65-142.us-west-2.compute.amazonaws.com:5000/market/' + id);
    };
    RealEstateProvider.prototype.getRealEstateByState = function (state) {
        return this.http.get('http://ec2-34-216-65-142.us-west-2.compute.amazonaws.com:5000/market/state/' + state);
    };
    RealEstateProvider.prototype.getRealEstateByMetro = function (metro) {
        return this.http.get('http://ec2-34-216-65-142.us-west-2.compute.amazonaws.com:5000/market/metro/' + metro);
    };
    RealEstateProvider.prototype.getAllRealEstate = function () {
        return this.http.get('http://ec2-34-216-65-142.us-west-2.compute.amazonaws.com:5000/market/');
    };
    RealEstateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RealEstateProvider);
    return RealEstateProvider;
}());

//# sourceMappingURL=real-estate.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_market_detail_market_detail_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_market_detail_market_detail__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_real_estate_real_estate__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_market_detail_market_detail_module__["MarketDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    preloadModule: false,
                    mode: 'md'
                }, {
                    links: [
                        { loadChildren: '../pages/market-detail/market-detail.module#MarketDetailPageModule', name: 'MarketDetailPage', segment: 'market-detail', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_market_detail_market_detail__["a" /* MarketDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_real_estate_real_estate__["a" /* RealEstateProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_real_estate_real_estate__["a" /* RealEstateProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_real_estate_real_estate__["a" /* RealEstateProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kevinmontanez/Desktop/repos/RealEstateClient/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kevinmontanez/Desktop/repos/RealEstateClient/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
 * Generated class for the MarketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarketDetailPage = (function () {
    function MarketDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pageTitle = 'Market Detail';
        // this.checkParams();
        this.market = {
            cbsa: 'New York-Newark-Jersey City, NY-NJ-PA',
            size: 0,
            health: 9.3453524533,
            sfg: 95.73,
            pf: 1.0234,
            fr: 0.0254,
            fyoy: 0.038965,
            ne: 0.067887,
            d: 0.09989,
            dom: 155
        };
    }
    MarketDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarketDetailPage');
    };
    MarketDetailPage.prototype.checkParams = function () {
        this.market = this.navParams.get('market');
        this.pageTitle = this.market.zip;
    };
    MarketDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-market-detail',template:/*ion-inline-start:"/Users/kevinmontanez/Desktop/repos/RealEstateClient/src/pages/market-detail/market-detail.html"*/'<!--\n  Generated template for the MarketDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{pageTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!--{-->\n<!--cbsa:\'New York-Newark-Jersey City, NY-NJ-PA\',-->\n<!--size:0,-->\n<!--health:9.3453524533,-->\n<!--sfg:95.73,-->\n<!--pf:1.0234,-->\n<!--fr:0.0254,-->\n<!--fyoy:0.038965-->\n<!--ne:0.067887-->\n<!--d:0.09989,-->\n<!--dom:155-->\n<!--}-->\n<ion-content>\n  <ion-list padding-top>\n    <ion-item no-padding>\n      <span class="body-1 gray">CBSA Title</span>\n      <p class="body-2">{{market.cbsa}}</p>\n    </ion-item>\n\n    <ion-item no-padding>\n      <span class="body-1 gray">Size Rank</span>\n      <p class="body-2">{{market.size}}</p>\n    </ion-item>\n\n    <ion-item no-padding>\n      <span class="body-1 gray">Health Index</span>\n      <p class="body-2">{{market.health}}</p>\n    </ion-item>\n\n    <ion-item no-padding>\n      <span class="body-1 gray">Sell for Gain</span>\n      <p class="body-2">{{market.sfg}}</p>\n    </ion-item>\n\n    <ion-item no-padding>\n      <span class="body-1 gray">Prev Foreclosed</span>\n      <p class="body-2">{{market.pf}}</p>\n    </ion-item>\n\n    <ion-item no-padding>\n      <span class="body-1 gray">Foreclosure Ratio</span>\n      <p class="body-2">{{market.fr}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kevinmontanez/Desktop/repos/RealEstateClient/src/pages/market-detail/market-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MarketDetailPage);
    return MarketDetailPage;
}());

//# sourceMappingURL=market-detail.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map