webpackJsonp([6],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataServiceProvider = (function () {
    function DataServiceProvider(http) {
        this.http = http;
        console.log('Hello DataServiceProvider Provider');
    }
    DataServiceProvider.prototype.getProducts = function () {
        return this.http.get('assets/data/products.json')
            .map(function (response) { return response.json(); });
    };
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataServiceProvider);
    return DataServiceProvider;
}());

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resetpwd_resetpwd__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(260);
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






var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, db, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.db = db;
        this.navParams = navParams;
        this.user = {};
        this.us = this.db.list('/users-list');
    }
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.resetPwd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__resetpwd_resetpwd__["a" /* ResetpwdPage */]);
    };
    LoginPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
                        .then(function (user) {
                        _this.us.push({
                            "email": user.email,
                            "uid": user.uid
                        });
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                    })
                        .catch(function (error) { return _this.handleError(error); })];
            });
        });
    };
    // If error, console log and notify user
    LoginPage.prototype.handleError = function (error) {
        console.error(error);
        //this.notify.update(error.message, 'error');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Inventory/Purchase Orders</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Email Address</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Password</ion-label>\n\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button (click)="login(user)">Login</button>\n\n  <button ion-button color="light" (click)="register(user)">Register</button>\n\n<button ion-button (click)="resetPwd()">\n\n    Forgot Password\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeaddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toast_toast_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home__ = __webpack_require__(85);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { HTTP } from '@ionic-native/http';









var HomeaddPage = (function () {
    function HomeaddPage(navCtrl, shopping, barcodeScanner, toast, dataService, platform, db, params, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.shopping = shopping;
        this.barcodeScanner = barcodeScanner;
        this.toast = toast;
        this.dataService = dataService;
        this.platform = platform;
        this.db = db;
        this.params = params;
        this.data = {};
        this.platformList = '';
        this.isApp = true;
        this.products = [];
        this.products2 = [];
        this.productFound = false;
        this.hideMe = false;
        this.averagesList = [];
        this.prevAveragesList = [];
        this.po = this.db.list('/purchase-order');
        this.http = http;
        this.mailgunUrl = "sandbox80eb3a7b4f8b4dc99d29fd49dc624be4.mailgun.org";
        this.mailgunApiKey = window.btoa("api:key-e6e1c7eddb02bfed1b4cc1a1f5a10ac5");
        this.upc = this.params.get('firstPassed');
        this.desc = this.params.get('secondPassed');
        this.qty = this.params.get('thirdPassed');
        this.key1 = this.params.get('fifthPassed');
        //alert("passed in key1 is "+this.key1);
        if (this.params.get('fourthPassed') === undefined) {
            //alert("undefined");
            console.log('undefined');
        }
        else {
            //alert("not undefined");
            this.prevAveragesList = this.params.get('fourthPassed');
        }
        this.size$ = new __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.items$ = this.size$.switchMap(function (size) {
            return db.list('/shopping-list', function (ref) {
                return size ? ref.orderByChild('upc').equalTo(size) : ref;
            }).snapshotChanges();
        });
        this.descRef = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["database"]().ref('/shopping-list');
        this.descRef.on('value', function (descList) {
            var descs = [];
            descList.forEach(function (desc) {
                descs.push(desc.val());
                return false;
            });
            _this.descList = descs;
            _this.loadedDescList = descs;
        });
        var platforms = this.platform.platforms();
        this.platformList = platforms.join(', ');
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.isApp = false;
        }
        this.section = "one";
        this.dataService.getProducts()
            .subscribe(function (response) {
            _this.products = response;
            console.log(_this.products);
        });
        this.shoppingList$ = this.shopping
            .getShoppingList() //DB List
            .snapshotChanges() //key and value
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    } //end constructor
    HomeaddPage.prototype.ionViewDidLoad = function () {
        this.userId = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]().currentUser.uid;
    };
    HomeaddPage.prototype.onClickSend = function (qO, qC, upc, keyU) {
        //alert("qC is "+qC+" and qO is "+qO+" and upc is "+upc);
        if (!qO) {
            alert("Please enter a Quantity to order");
            return false;
        }
        if (Number(qO) > Number(qC)) {
            alert("Your order quantity is more than the onhand quantity");
            return false;
        }
        else {
            if (this.prevAveragesList === undefined) {
                this.averagesList.push(upc + ' ' + qO + ' ' + keyU);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */], {
                    ordersPassed: this.averagesList
                });
            }
            else {
                this.prevAveragesList.push(upc + ' ' + qO + ':' + qC + ' ' + keyU);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */], {
                    ordersPassed: this.prevAveragesList
                });
            }
        } //end else
    };
    HomeaddPage.prototype.sendOrder = function (qO, qC, upc, keyU2) {
        //alert("qC is "+qC+" and qO is "+qO+" and upc is "+upc);
        var _this = this;
        //alert("in sendOrder received keyU2 of "+keyU2);
        if (Number(qO) > Number(qC)) {
            alert("Your order quantity is more than the onhand quantity");
            return false;
        }
        else {
            var link = 'https://jasongillikin.000webhostapp.com/sendmail.php';
            var myData;
            var message;
            var newQty = void 0;
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            today = mm + '/' + dd + '/' + yyyy;
            if (this.prevAveragesList === undefined) {
                //insert from this.averagesList array
                this.averagesList.push(upc + ' ' + qO + ':' + qC + ' ' + this.key1);
                for (var _i = 0, _a = this.averagesList; _i < _a.length; _i++) {
                    var data = _a[_i];
                    // alert(data.substr(data.lastIndexOf(' '))); //key
                    //alert(data);
                    //alert(data.substring(data.indexOf(' ')+1,data.lastIndexOf(':'))); //q0 qty
                    //alert(data.substring(data.lastIndexOf(':')+1,data.lastIndexOf(' ')));  //qC qty
                    newQty = data.substring(data.lastIndexOf(':') + 1, data.lastIndexOf(' ')) - data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':'));
                    this.shoppingList2 = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["database"]().ref("shopping-list/" + data.substr(data.lastIndexOf(' ')).trim());
                    this.shoppingList2.update({
                        "quantity": newQty
                    });
                    this.po.push({
                        "upc": data.substring(0, data.indexOf(' ')).trim(),
                        "qtyO": data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':')).trim(),
                        "qtyC": data.substring(data.lastIndexOf(':') + 1, data.lastIndexOf(' ')).trim(),
                        "prodId": data.substr(data.lastIndexOf(' ')).trim(),
                        "dateOrdered": today,
                        "orderedBy": this.userId
                    });
                    if (this.sendProduct)
                        this.sendProduct = this.sendProduct + '\n' + 'UPC:  ' + data.substring(0, data.indexOf(' ')) + ' Qty Ordered =  ' + data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':')).trim();
                    else
                        this.sendProduct = 'UPC: ' + data.substring(0, data.indexOf(' ')) + ' Qty Ordered= ' + data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':')).trim();
                } //end for
                this.averagesList = [];
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */], {
                    ordersPassed: this.averagesList
                });
                //send email
                //myData = JSON.stringify({username: "sendBodyMessage"});
                myData = JSON.stringify({ username: this.sendProduct });
                this.http.post(link, myData)
                    .subscribe(function (data) {
                    _this.data.response = "OK";
                }, function (error) {
                    console.log("oops");
                });
            }
            else {
                //insert from this.prevAveragesList
                this.prevAveragesList.push(upc + ' ' + qO + ':' + qC + ' ' + this.key1);
                for (var _b = 0, _c = this.prevAveragesList; _b < _c.length; _b++) {
                    var data = _c[_b];
                    //  alert(data.substr(data.lastIndexOf(' '))); //key
                    //alert(data);
                    //alert(data.substring(data.indexOf(' ')+1,data.lastIndexOf(':'))); //q0 qty
                    //alert(data.substring(data.lastIndexOf(':')+1,data.lastIndexOf(' ')));  //qC qty
                    newQty = data.substring(data.lastIndexOf(':') + 1, data.lastIndexOf(' ')) - data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':'));
                    this.shoppingList2 = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["database"]().ref("shopping-list/" + data.substr(data.lastIndexOf(' ')).trim());
                    this.shoppingList2.update({
                        "quantity": newQty
                    });
                    this.po.push({
                        "upc": data.substring(0, data.indexOf(' ')).trim(),
                        "qtyO": data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':')).trim(),
                        "qtyC": data.substring(data.lastIndexOf(':') + 1, data.lastIndexOf(' ')).trim(),
                        "prodId": data.substr(data.lastIndexOf(' ')).trim(),
                        "dateOrdered": today,
                        "orderedBy": this.userId
                    });
                    if (this.sendProduct)
                        this.sendProduct = this.sendProduct + '\n' + 'UPC:  ' + data.substring(0, data.indexOf(' ')) + ' Qty Ordered =  ' + data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':')).trim();
                    else
                        this.sendProduct = 'UPC:  ' + data.substring(0, data.indexOf(' ')) + ' Qty Ordered = ' + data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':')).trim();
                } //end for
                this.prevAveragesList = [];
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */], {
                    ordersPassed: this.prevAveragesList
                });
            }
            //send email
            myData = JSON.stringify({ username: this.sendProduct });
            this.http.post(link, myData)
                .subscribe(function (data) {
                _this.data.response = "OK";
            }, function (error) {
                console.log("oops");
            });
        } //end else
    };
    HomeaddPage.prototype.onBlur = function (qO, qC) {
        //alert("in onBlur and order qty is "+qO+ "and onhand qty is "+qC);
        if (Number(qO) > Number(qC)) {
            alert("Your order quantity is more than the onhand quantity");
            return false;
        }
        else
            return true;
    };
    HomeaddPage.prototype.filterBy = function (size) {
        if (size)
            this.hideMe = true;
        else
            this.hideMe = false;
        this.size$.next(size);
    };
    HomeaddPage.prototype.initializeItems = function () {
        this.descList = this.loadedDescList;
    };
    HomeaddPage.prototype.getItems = function (searchbar) {
        //alert(searchbar);
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar;
        // if the value is an empty string don't filter the items
        if (!q) {
            this.hideMe = false;
            return;
        }
        this.descList = this.descList.filter(function (v) {
            if (v.desc && q) {
                if (v.desc.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        if (this.descList.length > 0)
            this.hideMe = true;
        if (!searchbar)
            this.hideMe = false;
        //  alert(this.descList.length);
    };
    HomeaddPage.prototype.scan = function () {
        var _this = this;
        var descs = [];
        this.selectedProduct = {};
        var weeklyData = {};
        /*    this.barcodeScanner.scan().then((barcodeData) => {
              this.selectedProduct = this.products.find(product => product.upc === barcodeData.text);*/
        this.barcodeScanner.scan().then(function (barcodeData) {
            var q = barcodeData.text;
            _this.descList = _this.descList.filter(function (v) {
                if (v.upc && q) {
                    if (v.upc.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                        weeklyData["id"] = v.id;
                        weeklyData["record"] = v.upc;
                        descs.push(weeklyData);
                        return true;
                    }
                    //    return false; 
                    console.log('scan');
                }
            });
            _this.descList = [];
            _this.descList = descs;
            if (_this.descList.length > 0)
                _this.hideMe = true;
            _this.selectedProduct = _this.descList;
            if (_this.selectedProduct !== undefined || _this.selectedProduct.length > 0) {
                _this.toast.show("Found");
                _this.productFound = false;
                console.log(_this.selectedProduct);
            }
            else {
                _this.toast.show("Not found");
                _this.selectedProduct = {};
                _this.productFound = false;
                /*  this.toast.show('Product not found', '5000', 'center').subscribe(
                    toast => {
                      console.log(toast);
                    }
                  ); */
            }
        }, function (err) {
            _this.toast.show("Some error, probably in database item name");
            /* this.toast.show(err, '5000', 'center').subscribe(
               toast => {
                 console.log(toast);
               }
             ); */
        });
    }; //end scan
    HomeaddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-homeadd',template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\pages\homeadd\homeadd.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Purchase Orders\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n<ion-toolbar>\n\n    <ion-segment [(ngModel)]="section" color="primary">\n\n\n\n      <ion-segment-button value="one">Orders\n\n              </ion-segment-button>\n\n\n\n\n\n    </ion-segment>\n\n\n\n  </ion-toolbar>\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n <div [ngSwitch]="section">\n\n \n\n      <ion-list *ngSwitchCase="\'one\'">\n\n      <ion-item>\n\n      <ion-list>\n\n\n\n<div text-center>\n\n\n\n<b>UPC: {{ upc }}</b><br>\n\n  {{ desc }}<br>\n\n<u>Quantity available: {{ qty }} </u><br><br>\n\n<ion-item>\n\n<ion-input type="number" placeholder="Enter a Qty to order" [(ngModel)]="qtyOrder" max=" {{ qty }}" required></ion-input>\n\n\n\n</ion-item>\n\n\n\n<br>\n\n<button ion-button color="blue" (click)="onClickSend(qtyOrder,qty,upc,key1)">Keep Adding</button>\n\n<button ion-button color="blue" (click)="sendOrder(qtyOrder,qty,upc,key1)">Send</button>\n\n<br>\n\n<br>\n\n      <div *ngIf="prevAveragesList !== undefined"> # P.O. items: {{ prevAveragesList.length }} \n\n    </div>\n\n\n\n</div>\n\n\n\n\n\n\n\n</ion-list>\n\n</ion-item>\n\n</ion-list>\n\n\n\n</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\pages\homeadd\homeadd.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1__services_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], HomeaddPage);
    return HomeaddPage;
}()); //end export class

//# sourceMappingURL=homeadd.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list2_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toast_toast_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(84);
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
 * Generated class for the AddLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddLocationPage = (function () {
    function AddLocationPage(navCtrl, navParams, shopping, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shopping = shopping;
        this.toast = toast;
        this.item = {
            name: '',
            quantity: 0,
            price: 0,
            plu: '9781414380704'
        };
    }
    AddLocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddLocationPage');
    };
    AddLocationPage.prototype.addItem = function (item) {
        var _this = this;
        this.shopping.addItem2(item).then(function (ref) {
            _this.toast.show(item.name + " added!");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */], { key: ref.key });
        });
    };
    AddLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-addlocation',template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\pages\addlocation\addlocation.html"*/'<!--\n\n  Generated template for the AddShoppingItemPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Add a New Location</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-item>\n\n  <ion-label>Name</ion-label>\n\n  <ion-input [(ngModel)]="item.name" placeholder="Enter a new  Location Name" required></ion-input>\n\n\n\n</ion-item>\n\n\n\n<!--\n\n<ion-item>\n\n  <ion-label>PLU</ion-label>\n\n  <ion-input [(ngModel)]="item.plu" placeholder="9781414380704">\n\n</ion-input>\n\n</ion-item> -->\n\n\n\n<br>\n\n\n\n<div text-center>\n\n<button ion-button (click) ="addItem(item)">Add</button>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\pages\addlocation\addlocation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list2_service__["a" /* ShoppingListService2 */], __WEBPACK_IMPORTED_MODULE_1__services_toast_toast_service__["a" /* ToastService */]])
    ], AddLocationPage);
    return AddLocationPage;
}());

//# sourceMappingURL=addlocation.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListService2 = (function () {
    function ShoppingListService2(db) {
        this.db = db;
        this.shoppingListRef = this.db.list('shopping-list');
        this.locationsRef = this.db.list('locations');
    }
    ShoppingListService2.prototype.getShoppingList = function () {
        return this.shoppingListRef;
    };
    ShoppingListService2.prototype.getLocationsList = function () {
        return this.locationsRef;
    };
    ShoppingListService2.prototype.addItem = function (item) {
        return this.shoppingListRef.push(item);
    };
    ShoppingListService2.prototype.addItem2 = function (item) {
        return this.locationsRef.push(item);
    };
    ShoppingListService2.prototype.editItem = function (item) {
        return this.shoppingListRef.update(item.key, item);
    };
    ShoppingListService2.prototype.removeItem = function (item) {
        return this.locationsRef.remove(item.key);
    };
    ShoppingListService2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ShoppingListService2);
    return ShoppingListService2;
}());

//# sourceMappingURL=shopping-list2.service.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-shopping-item/add-shopping-item.module": [
		478,
		1
	],
	"../pages/addlocation/addlocation.module": [
		479,
		5
	],
	"../pages/edit-shopping-item/edit-shopping-item.module": [
		480,
		0
	],
	"../pages/home/home.module": [
		481,
		4
	],
	"../pages/homeadd/homeadd.module": [
		482,
		3
	],
	"../pages/login/login.module": [
		483,
		2
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
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IrreportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IrreportsPage = (function () {
    function IrreportsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.groceries = [
            'Units Sell Through',
            'Projection by Prev Month Sales',
            'Low Quantity Report',
            'Division 1',
            'Division 2'
        ];
    }
    IrreportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-irreports',template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\pages\irreports\irreports.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      IR Reports\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n   <ion-list>\n\n        <ion-item *ngFor="let grocery of groceries">{{grocery}}</ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\pages\irreports\irreports.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], IrreportsPage);
    return IrreportsPage;
}());

//# sourceMappingURL=irreports.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrInvReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__ = __webpack_require__(32);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrInvReportPage = (function () {
    function CurrInvReportPage(navCtrl, shopping, platform, toast) {
        this.navCtrl = navCtrl;
        this.shopping = shopping;
        this.platform = platform;
        this.toast = toast;
        this.item = {
            item: '',
            upc: 0,
            desc: '',
            location: '',
            quantity: 0,
            lot: ''
        };
        this.groceries = [
            'Units Sell Through',
            'Projection by Prev Month Sales',
            'Low Quantity Report',
            'Division 1',
            'Division 2'
        ];
        this.shoppingList$ = this.shopping
            .getShoppingList() //DB List
            .snapshotChanges() //key and value
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    } //end constructor
    CurrInvReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-currinvreport',template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\pages\currinvreport\currinvreport.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Curr Inv Report\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n   <ion-list>\n\n\n\n<!--        <ion-item *ngFor="let grocery of groceries">{{grocery}}</ion-item> -->\n\n<br>\n\n<div style="width: 800px;  repeat">\n\n<div class="row">\n\n<div class="col" align="center"><b><u>UPC</u></b></div>\n\n<div class="col" align="center"><b><u>Quantity</u></b></div>\n\n</div>\n\n\n\n<br>\n\n\n\n<ion-item *ngFor="let item of shoppingList$ | async" detail-push navPush="EditShoppingItemPage" [navParams]="{item: item}">\n\n<div class="row">\n\n<div class="col" align="center">{{item.upc}}</div>\n\n<div class="col" align="center">{{item.quantity}}</div>\n\n</div>\n\n</ion-item>\n\n\n\n</div>\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\pages\currinvreport\currinvreport.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__["a" /* ToastService */]])
    ], CurrInvReportPage);
    return CurrInvReportPage;
}());

//# sourceMappingURL=currinvreport.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__ = __webpack_require__(32);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var POReportPage = (function () {
    function POReportPage(navCtrl, shopping, platform, toast) {
        this.navCtrl = navCtrl;
        this.shopping = shopping;
        this.platform = platform;
        this.toast = toast;
        this.item = {
            prodId: '',
            qtyC: '',
            qtyO: '',
            dateOrdered: '',
            orderedBy: '',
            upc: ''
        };
        this.groceries = [
            'Units Sell Through',
            'Projection by Prev Month Sales',
            'Low Quantity Report',
            'Division 1',
            'Division 2'
        ];
        this.shoppingList$ = this.shopping
            .getPOList() //DB List
            .snapshotChanges() //key and value
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    } //end constructor
    POReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-poreport',template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\pages\poreport\poreport.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Curr Inv Report\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n   <ion-list>\n\n\n\n<!--        <ion-item *ngFor="let grocery of groceries">{{grocery}}</ion-item> -->\n\n<br>\n\n<div style="width: 800px;  repeat">\n\n<div class="row">\n\n<div class="col" align="center"><b><u>UPC</u></b></div>\n\n<div class="col" align="center"><b><u>Date Ordered</u></b></div>\n\n<div class="col" align="center"><b><u>Qty Ordered</u></b></div>\n\n</div>\n\n\n\n\n\n<br>\n\n\n\n<ion-item *ngFor="let item of shoppingList$ | async" detail-push navPush="EditShoppingItemPage" [navParams]="{item: item}">\n\n<div class="row">\n\n<div class="col" align="center">{{item.upc}}</div>\n\n<div class="col" align="center">{{item.dateOrdered}}</div>\n\n<div class="col" align="center">{{item.qtyO}}</div>\n\n</div>\n\n</ion-item>\n\n\n\n</div>\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\pages\poreport\poreport.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__["a" /* ToastService */]])
    ], POReportPage);
    return POReportPage;
}());

//# sourceMappingURL=poreport.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryPage = (function () {
    function InventoryPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InventoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inventory',template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\pages\inventory\inventory.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Inventory\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\pages\inventory\inventory.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], InventoryPage);
    return InventoryPage;
}());

//# sourceMappingURL=inventory.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AuthService } from '../../providers/auth-service';


/*
  Generated class for the Resetpwd page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ResetpwdPage = (function () {
    function ResetpwdPage(navCtrl, authService, navParams, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.emailChanged = false;
        this.submitAttempt = false;
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.resetpwdForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])]
        });
    }
    ResetpwdPage.prototype.elementChanged = function (input) {
        var field = input.inputControl.name;
        this[field + "Changed"] = true;
    };
    ResetpwdPage.prototype.resetPwd = function (email) {
        //alert("email to reset is "+email.value);
        if (!this.resetpwdForm.valid) {
            console.log('not valid');
        }
        else {
            return this.authService.auth.sendPasswordResetEmail(this.email.value);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
    };
    ResetpwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpwd',template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\pages\resetpwd\resetpwd.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Reset Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h2>Reset Password</h2>\n\n  <form [formGroup]="resetpwdForm" (submit)="resetPwd(email)" novalidate>\n\n    <ion-item>\n\n      <ion-label stacked>Email</ion-label>\n\n      <ion-input #email formControlName="email" type="email" \n\n        placeholder="Your email address"\n\n        [class.invalid]="!resetpwdForm.controls.email.valid && (emailChanged || submitAttempt)"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!resetpwdForm.controls.email.valid  && (emailChanged || submitAttempt)">\n\n      <p>Please enter a valid email.</p>\n\n    </ion-item>\n\n    <button ion-button block type="submit">\n\n      Reset Password\n\n    </button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\pages\resetpwd\resetpwd.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]) === "function" && _f || Object])
    ], ResetpwdPage);
    return ResetpwdPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=resetpwd.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        //tab2Root = IrreportsPage;
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="1">\n\n  <ion-tab [root]="tab1Root" tabTitle="Purchase Orders" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Inventory" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Manufacturers" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Manufacturers\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    \n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(332);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.show = function (message, duration) {
        if (duration === void 0) { duration = 3000; }
        return this.toastCtrl
            .create({
            message: message,
            duration: duration,
        })
            .present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_addlocation_addlocation__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_shopping_list_shopping_list2_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_currinvreport_currinvreport__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_poreport_poreport__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_homeadd_homeadd__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_resetpwd_resetpwd__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_irreports_irreports__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_inventory_inventory__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__firebase_credentials__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_shopping_list_shopping_list_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_toast_toast_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_barcode_scanner__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic2_super_tabs__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_data_service_data_service__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import * as firebase from 'firebase';








//import { LoginPage } from '../pages/login/login';










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_homeadd_homeadd__["a" /* HomeaddPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_irreports_irreports__["a" /* IrreportsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_inventory_inventory__["a" /* InventoryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_addlocation_addlocation__["a" /* AddLocationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_currinvreport_currinvreport__["a" /* CurrInvReportPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_poreport_poreport__["a" /* POReportPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_resetpwd_resetpwd__["a" /* ResetpwdPage */]
                //   LoginPage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-shopping-item/add-shopping-item.module#AddShoppingItemPageModule', name: 'AddShoppingItemPage', segment: 'add-shopping-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addlocation/addlocation.module#AddLocationPageModule', name: 'AddLocationPage', segment: 'addlocation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-shopping-item/edit-shopping-item.module#EditShoppingItemPageModule', name: 'EditShoppingItemPage', segment: 'edit-shopping-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homeadd/homeadd.module#HomeaddModule', name: 'HomeaddPage', segment: 'homeadd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_20__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_25_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_homeadd_homeadd__["a" /* HomeaddPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_irreports_irreports__["a" /* IrreportsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_inventory_inventory__["a" /* InventoryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_addlocation_addlocation__["a" /* AddLocationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_currinvreport_currinvreport__["a" /* CurrInvReportPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_poreport_poreport__["a" /* POReportPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_resetpwd_resetpwd__["a" /* ResetpwdPage */]
                //LoginPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
                __WEBPACK_IMPORTED_MODULE_9__services_shopping_list_shopping_list2_service__["a" /* ShoppingListService2 */],
                __WEBPACK_IMPORTED_MODULE_22__services_toast_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_25_ionic2_super_tabs__["a" /* SuperTabsModule */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_27__providers_data_service_data_service__["a" /* DataServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListService = (function () {
    function ShoppingListService(db) {
        this.db = db;
        this.shoppingListRef = this.db.list('shopping-list');
        this.locationsRef = this.db.list('locations');
        this.poRef = this.db.list('purchase-order');
        //db.list('locations', ref => ref.limitToLast(3));
    }
    ShoppingListService.prototype.getShoppingList = function () {
        return this.shoppingListRef;
    };
    ShoppingListService.prototype.getPOList = function () {
        return this.poRef;
    };
    ShoppingListService.prototype.getLocationsList = function () {
        //return this.locationsRef;
        //below works
        //return this.db.list('locations', ref => ref.limitToLast(3)); 
        return this.db.list('locations', function (ref) { return ref.orderByChild("name"); });
    };
    ShoppingListService.prototype.addItem = function (item) {
        return this.shoppingListRef.push(item);
    };
    ShoppingListService.prototype.addItem2 = function (item) {
        return this.locationsRef.push(item);
    };
    ShoppingListService.prototype.editItem = function (item) {
        return this.shoppingListRef.update(item.key, item);
    };
    ShoppingListService.prototype.removeItem = function (item) {
        return this.shoppingListRef.remove(item.key);
    };
    ShoppingListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ShoppingListService);
    return ShoppingListService;
}());

//# sourceMappingURL=shopping-list.service.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import firebase from 'firebase'
//import { TabsPage } from '../pages/tabs/tabs';
//import { LoginPage } from '../pages/login/login';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCQogF_gSy2CfbecFxg58vvxhQfmaG2xHc",
    authDomain: "shoppinglist-e3f54.firebaseapp.com",
    databaseURL: "https://shoppinglist-e3f54.firebaseio.com",
    projectId: "shoppinglist-e3f54",
    storageBucket: "",
    messagingSenderId: "1025883988321"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__irreports_irreports__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__currinvreport_currinvreport__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__poreport_poreport__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inventory_inventory__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__addlocation_addlocation__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_toast_toast_service__ = __webpack_require__(32);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AboutPage = (function () {
    function AboutPage(navCtrl, shopping, platform, toast, afA) {
        this.navCtrl = navCtrl;
        this.shopping = shopping;
        this.platform = platform;
        this.toast = toast;
        this.afA = afA;
        this.platformList = '';
        this.isApp = true;
        this.item = {
            item: '',
            upc: 0,
            desc: '',
            location: '',
            quantity: 0,
            lot: ''
        };
        this.page1 = __WEBPACK_IMPORTED_MODULE_4__irreports_irreports__["a" /* IrreportsPage */];
        this.page2 = __WEBPACK_IMPORTED_MODULE_7__inventory_inventory__["a" /* InventoryPage */];
        this.pushPage = __WEBPACK_IMPORTED_MODULE_9__addlocation_addlocation__["a" /* AddLocationPage */];
        this.section = "one";
        var platforms = this.platform.platforms();
        this.platformList = platforms.join(', ');
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.isApp = false;
        }
        this.groceries = [
            'Current Inventory Report',
            'Purchase Order Report'
        ];
        this.shoppingList$ = this.shopping
            .getLocationsList() //DB List
            .snapshotChanges() //key and value
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    } //end constructor
    AboutPage.prototype.logout = function () {
        var _this = this;
        //alert("in logout");
        this.afA.auth.signOut().then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        });
    };
    AboutPage.prototype.goReport = function (rep) {
        //alert(rep);
        if (rep === 'Current Inventory Report')
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__currinvreport_currinvreport__["a" /* CurrInvReportPage */]);
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__poreport_poreport__["a" /* POReportPage */]);
    };
    AboutPage.prototype.changeListener = function (files) {
        var _this = this;
        console.log(files);
        var str_array;
        var lines;
        var ind;
        if (files && files.length > 0) {
            var file = files.item(0);
            console.log(file.name);
            console.log(file.size);
            console.log(file.type);
            var reader_1 = new FileReader();
            reader_1.readAsText(file);
            reader_1.onload = function (e) {
                //let csv: string = reader.result;
                var csv = reader_1.result;
                var rows = csv.split("\n");
                //skip header row by starting with i =1 below
                for (var i = 1; i < rows.length; i++) {
                    var cells = rows[i].split(",");
                    for (var j = 0; j < cells.length; j++) {
                        // alert("element number "+j+" and i is "+i+" with value "+cells[j]);
                        if (j == 5) {
                            _this.item.item = cells[0];
                            _this.item.upc = cells[1];
                            _this.item.desc = cells[2];
                            _this.item.location = cells[3];
                            _this.item.quantity = cells[4];
                            _this.item.lot = cells[5];
                            _this.shopping.addItem(_this.item).then(function (ref) {
                                //this.toast.show(`File added!`);
                                //this.navCtrl.setRoot(AboutPage, { key: ref.key });
                            });
                        }
                    }
                }
                _this.toast.show("File added!");
                // alert(csv);
            };
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Inventory\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button color="clear" (click)="logout()">Log Out</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n<ion-toolbar>\n\n    <ion-segment [(ngModel)]="section" color="primary">\n\n\n\n      <ion-segment-button value="one">Inventory\n\n              </ion-segment-button>\n\n\n\n      <ion-segment-button value="two">Inventory Reports\n\n</ion-segment-button>\n\n\n\n    </ion-segment>\n\n\n\n  </ion-toolbar>\n\n  \n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n\n\n <div [ngSwitch]="section">\n\n \n\n      <ion-list *ngSwitchCase="\'one\'">\n\n        <ion-item>\n\n\n\n <ion-list>\n\n\n\n  <ion-list-header>\n\n\n\n<div text-center>\n\n<button ion-button [navPush]="pushPage">\n\n  Add a New Location\n\n</button>    \n\n</div>\n\n\n\n  </ion-list-header>\n\n\n\n\n\n\n\n<u>Existing Locations:</u> \n\n\n\n  <ion-item *ngFor="let item of shoppingList$ | async" detail-push navPush="EditShoppingItemPage" [navParams]="{item: item}">\n\n   {{item.name}}\n\n  </ion-item>\n\n\n\n </ion-list>\n\n\n\n <p *ngIf="!isApp">\n\n (This is being viewed from a browser) <br>\n\n <br>\n\n\n\n<input type="file" class="upload" (change)="changeListener($event.target.files)">\n\n\n\n{{csv}}\n\n\n\n </p>\n\n\n\n         \n\n        </ion-item>\n\n      </ion-list>\n\n \n\n      <ion-list *ngSwitchCase="\'two\'">\n\n        <ion-item>\n\n\n\n<ion-list>\n\n <ion-item *ngFor="let grocery of groceries">   \n\n   <button ion-button color="blue" (click)="goReport(grocery)">{{ grocery}}</button>\n\n </ion-item>\n\n</ion-list>\n\n\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_10__services_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toast_toast_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__homeadd_homeadd__ = __webpack_require__(149);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function HomePage(navCtrl, shopping, barcodeScanner, toast, dataService, platform, db, params, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.shopping = shopping;
        this.barcodeScanner = barcodeScanner;
        this.toast = toast;
        this.dataService = dataService;
        this.platform = platform;
        this.db = db;
        this.params = params;
        this.data = {};
        this.platformList = '';
        this.isApp = true;
        this.products = [];
        this.products2 = [];
        this.productFound = false;
        this.hideMe = false;
        this.po = this.db.list('/purchase-order');
        this.http = http;
        if (this.params.get('ordersPassed') === undefined) {
            //alert("undefined");
            console.log('undefined');
        }
        else {
            //alert("not undefined");
            this.prevAveragesList = this.params.get('ordersPassed');
        }
        this.size$ = new __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.items$ = this.size$.switchMap(function (size) {
            return db.list('/shopping-list', function (ref) {
                return size ? ref.orderByChild('upc').equalTo(size) : ref;
            }).snapshotChanges();
        });
        this.descRef = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["database"]().ref('/shopping-list');
        this.descRef.on('value', function (descList) {
            var descs = [];
            descList.forEach(function (desc) {
                //    descs.push(desc.val());
                var weeklyData = {};
                weeklyData["id"] = desc.key;
                weeklyData["record"] = desc.val();
                //descs.push(desc.val()+" "+desc.key);
                descs.push(weeklyData);
                return false;
            });
            //alert(descs[0].id);
            _this.descList = descs;
            _this.loadedDescList = descs;
        });
        var platforms = this.platform.platforms();
        this.platformList = platforms.join(', ');
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.isApp = false;
        }
        this.section = "one";
        this.dataService.getProducts()
            .subscribe(function (response) {
            _this.products = response;
            console.log(_this.products);
        });
        this.shoppingList$ = this.shopping
            .getShoppingList() //DB List
            .snapshotChanges() //key and value
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    } //end constructor
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidLoad = function () {
        this.userId = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]().currentUser.uid;
    };
    HomePage.prototype.onClick = function (val, desc, qty, key1) {
        //alert("in onClick, key is "+key1);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__homeadd_homeadd__["a" /* HomeaddPage */], {
            firstPassed: val,
            secondPassed: desc,
            thirdPassed: qty,
            fourthPassed: this.prevAveragesList,
            fifthPassed: key1
        });
    };
    HomePage.prototype.filterBy = function (size) {
        if (size)
            this.hideMe = true;
        else
            this.hideMe = false;
        this.size$.next(size);
    };
    HomePage.prototype.initializeItems = function () {
        this.descList = this.loadedDescList;
    };
    HomePage.prototype.getItems = function (searchbar) {
        //alert(searchbar);
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar;
        // if the value is an empty string don't filter the items
        if (!q) {
            this.hideMe = false;
            return;
        }
        this.descList = this.descList.filter(function (v) {
            if (v.record.desc && q) {
                if (v.record.desc.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        //filter prevAveragesList records
        if (this.prevAveragesList !== undefined) {
            var q;
            for (var _i = 0, _a = this.prevAveragesList; _i < _a.length; _i++) {
                var data = _a[_i];
                q = data.substr(0, data.indexOf(' '));
                //alert("q is "+q);
                this.descList = this.descList.filter(function (v) {
                    if (v.record.upc && q) {
                        if (v.record.upc.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                            return false;
                        }
                        return true;
                    }
                });
            } //end for
        }
        if (this.descList.length > 0)
            this.hideMe = true;
        if (!searchbar)
            this.hideMe = false;
        //  alert(this.descList.length);
    };
    HomePage.prototype.sendOrder = function () {
        //alert("qC is "+qC+" and qO is "+qO+" and upc is "+upc);
        var _this = this;
        //alert("in sendOrder received keyU2 of "+keyU2);
        var link = 'https://jasongillikin.000webhostapp.com/sendmail.php';
        var myData;
        var message;
        var newQty;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = mm + '/' + dd + '/' + yyyy;
        if (this.prevAveragesList === undefined) {
            //insert from this.averagesList array
            //this.averagesList.push(upc+' '+qO+':'+qC+' '+this.key1);
            for (var _i = 0, _a = this.averagesList; _i < _a.length; _i++) {
                var data = _a[_i];
                // alert(data.substr(data.lastIndexOf(' '))); //key
                //alert(data);
                //alert(data.substring(data.indexOf(' ')+1,data.lastIndexOf(':'))); //q0 qty
                //alert(data.substring(data.lastIndexOf(':')+1,data.lastIndexOf(' ')));  //qC qty
                newQty = data.substring(data.lastIndexOf(':') + 1, data.lastIndexOf(' ')) - data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':'));
                this.shoppingList2 = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["database"]().ref("shopping-list/" + data.substr(data.lastIndexOf(' ')).trim());
                this.shoppingList2.update({
                    "quantity": newQty
                });
                this.po.push({
                    "upc": data.substring(0, data.indexOf(' ')).trim(),
                    "qtyO": data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':')).trim(),
                    "qtyC": data.substring(data.lastIndexOf(':') + 1, data.lastIndexOf(' ')).trim(),
                    "prodId": data.substr(data.lastIndexOf(' ')).trim(),
                    "dateOrdered": today,
                    "orderedBy": this.userId
                });
                if (this.sendProduct)
                    this.sendProduct = this.sendProduct + '\n' + 'UPC:  ' + data.substring(0, data.indexOf(' ')) + ' Qty Ordered =  ' + data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':')).trim();
                else
                    this.sendProduct = 'UPC: ' + data.substring(0, data.indexOf(' ')) + ' Qty Ordered= ' + data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':')).trim();
            } //end for
            this.averagesList = [];
            this.navCtrl.push(HomePage_1, {
                ordersPassed: this.averagesList
            });
            //send email
            //myData = JSON.stringify({username: "sendBodyMessage"});
            myData = JSON.stringify({ username: this.sendProduct });
            this.http.post(link, myData)
                .subscribe(function (data) {
                _this.data.response = "OK";
            }, function (error) {
                console.log("oops");
            });
        }
        else {
            //insert from this.prevAveragesList
            // this.prevAveragesList.push(upc+' '+qO+':'+qC+' '+this.key1);
            for (var _b = 0, _c = this.prevAveragesList; _b < _c.length; _b++) {
                var data = _c[_b];
                //  alert(data.substr(data.lastIndexOf(' '))); //key
                //alert(data);
                //alert(data.substring(data.indexOf(' ')+1,data.lastIndexOf(':'))); //q0 qty
                //alert(data.substring(data.lastIndexOf(':')+1,data.lastIndexOf(' ')));  //qC qty
                newQty = data.substring(data.lastIndexOf(':') + 1, data.lastIndexOf(' ')) - data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':'));
                this.shoppingList2 = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["database"]().ref("shopping-list/" + data.substr(data.lastIndexOf(' ')).trim());
                this.shoppingList2.update({
                    "quantity": newQty
                });
                this.po.push({
                    "upc": data.substring(0, data.indexOf(' ')).trim(),
                    "qtyO": data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':')).trim(),
                    "qtyC": data.substring(data.lastIndexOf(':') + 1, data.lastIndexOf(' ')).trim(),
                    "prodId": data.substr(data.lastIndexOf(' ')).trim(),
                    "dateOrdered": today,
                    "orderedBy": this.userId
                });
                if (this.sendProduct)
                    this.sendProduct = this.sendProduct + '\n' + 'UPC:  ' + data.substring(0, data.indexOf(' ')) + ' Qty Ordered =  ' + data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':')).trim();
                else
                    this.sendProduct = 'UPC:  ' + data.substring(0, data.indexOf(' ')) + ' Qty Ordered = ' + data.substring(data.indexOf(' ') + 1, data.lastIndexOf(':')).trim();
            } //end for
            this.prevAveragesList = [];
            this.navCtrl.push(HomePage_1, {
                ordersPassed: this.prevAveragesList
            });
        }
        //send email
        myData = JSON.stringify({ username: this.sendProduct });
        this.http.post(link, myData)
            .subscribe(function (data) {
            _this.data.response = "OK";
        }, function (error) {
            console.log("oops");
        });
    };
    HomePage.prototype.scan = function () {
        var _this = this;
        var descs = [];
        this.selectedProduct = {};
        var weeklyData = {};
        /*    this.barcodeScanner.scan().then((barcodeData) => {
              this.selectedProduct = this.products.find(product => product.upc === barcodeData.text);*/
        this.barcodeScanner.scan().then(function (barcodeData) {
            var q = barcodeData.text;
            _this.descList = _this.descList.filter(function (v) {
                if (v.record.upc && q) {
                    if (v.record.upc.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                        return true;
                    }
                    //    return false; 
                    console.log('scan');
                }
            });
            if (_this.descList.length > 0)
                _this.hideMe = true;
            _this.selectedProduct = _this.descList;
            if (_this.selectedProduct !== undefined || _this.selectedProduct.length > 0) {
                _this.toast.show("Found");
                _this.productFound = false;
                console.log(_this.selectedProduct);
            }
            else {
                _this.toast.show("Not found");
                _this.selectedProduct = {};
                _this.productFound = false;
                /*  this.toast.show('Product not found', '5000', 'center').subscribe(
                    toast => {
                      console.log(toast);
                    }
                  ); */
            }
        }, function (err) {
            _this.toast.show("Some error, probably in database item name");
            /* this.toast.show(err, '5000', 'center').subscribe(
               toast => {
                 console.log(toast);
               }
             ); */
        });
    }; //end scan
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Purchase Orders\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n<ion-toolbar>\n\n    <ion-segment [(ngModel)]="section" color="primary">\n\n\n\n      <ion-segment-button value="one">Orders\n\n              </ion-segment-button>\n\n\n\n      <ion-segment-button value="two">Re-orders\n\n</ion-segment-button>\n\n\n\n    </ion-segment>\n\n\n\n  </ion-toolbar>\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n <div [ngSwitch]="section">\n\n \n\n      <ion-list *ngSwitchCase="\'one\'">\n\n      <ion-item>\n\n      <ion-list>\n\n\n\n<div text-center>\n\n <button ion-button color="blue" (click)="scan()">Scan by UPC</button>\n\n<br>\n\n<br>\n\nor<br>\n\n<br>\n\n\n\n<ion-item>\n\n\n\n<ion-input placeholder="Enter a Description" [(ngModel)]="prodMan" required></ion-input>\n\n\n\n</ion-item>\n\n\n\n<br>\n\n\n\n<div *ngIf="prevAveragesList !== undefined && prevAveragesList.length > 0 else emptyList">\n\n<button ion-button color="blue" (click)="getItems(prodMan)">Search</button><button ion-button color="blue" (click)="sendOrder()">Send</button>\n\n</div>\n\n\n\n<ng-template #emptyList>\n\n<button ion-button color="blue" (click)="getItems(prodMan)">Search</button>\n\n</ng-template>\n\n\n\n </div>\n\n<br>\n\n      <div *ngIf="prevAveragesList !== undefined" text-center> # P.O. items: {{ prevAveragesList.length }} \n\n    </div>\n\n\n\n\n\n<br>\n\n\n\n<ion-card *ngIf="productFound">\n\n  <ion-card-header>\n\n \n\n  </ion-card-header>\n\n  <ion-card-content>\n\n    <ul>\n\n      <li>{{selectedProduct.desc}}</li>\n\n    </ul>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<div *ngIf="hideMe">\n\n\n\n      <div *ngFor="let desc of descList">\n\n        \n\n<ion-row class="ionrow">\n\n<ion-col width-125>\n\n<button ion-button full color="blue" (click)="onClick(desc.record.upc,desc.record.desc,desc.record.quantity,desc.id)">{{ desc.record.desc }} </button>\n\n</ion-col>\n\n</ion-row>\n\n\n\n\n\n        \n\n      </div>\n\n\n\n      \n\n      <div *ngIf="descList.length === 0">No results, try clearing filters\n\n    </div>\n\n\n\n \n\n\n\n\n\n</div>\n\n\n\n\n\n\n\n</ion-list>\n\n</ion-item>\n\n</ion-list>\n\n\n\n     <ion-list *ngSwitchCase="\'two\'">\n\n     <ion-item>\n\n     <ion-list>\n\n\n\n         Re-orders\n\n\n\n</ion-list>        \n\n</ion-item>\n\n</ion-list>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1__services_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}()); //end export class

//# sourceMappingURL=home.js.map

/***/ })

},[312]);
//# sourceMappingURL=main.js.map