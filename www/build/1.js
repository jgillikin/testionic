webpackJsonp([1],{

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditShoppingItemPageModule", function() { return EditShoppingItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_shopping_item__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditShoppingItemPageModule = (function () {
    function EditShoppingItemPageModule() {
    }
    EditShoppingItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_shopping_item__["a" /* EditShoppingItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_shopping_item__["a" /* EditShoppingItemPage */]),
            ],
        })
    ], EditShoppingItemPageModule);
    return EditShoppingItemPageModule;
}());

//# sourceMappingURL=edit-shopping-item.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditShoppingItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toast_toast_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shopping_list_shopping_list2_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(80);
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
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditShoppingItemPage = (function () {
    function EditShoppingItemPage(navCtrl, navParams, shopping, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shopping = shopping;
        this.toast = toast;
    }
    EditShoppingItemPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
    };
    EditShoppingItemPage.prototype.saveItem = function (item) {
        var _this = this;
        this.shopping.editItem(item).then(function () {
            _this.toast.show(item.name + " saved!", 3000);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */]);
        });
    };
    EditShoppingItemPage.prototype.removeItem = function (item) {
        var _this = this;
        this.shopping.removeItem(item)
            .then(function () {
            _this.toast.show(item.name + " deleted!");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */]);
        });
    };
    EditShoppingItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-shopping-item',template:/*ion-inline-start:"C:\ionicFirebase\IonicShoppingList\src\pages\edit-shopping-item\edit-shopping-item.html"*/'<!--\n\n  Generated template for the EditShoppingItemPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{item?.name}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-item>\n\n  <ion-label>Name</ion-label>\n\n  <ion-input [(ngModel)]="item.name" placeholder="iPad Pro"></ion-input>\n\n\n\n</ion-item>\n\n\n\n<!--\n\n<ion-item>\n\n  <ion-label>Quantity</ion-label>\n\n  <ion-input type="number" [(ngModel)]="item.quantity" placeholder="1"></ion-input>\n\n\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <ion-label>Price</ion-label>\n\n  <ion-input type="number" [(ngModel)]="item.price" placeholder="700"></ion-input>\n\n\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <ion-label>PLU</ion-label>\n\n  <ion-input [(ngModel)]="item.plu" placeholder="9781414380704"></ion-input>\n\n\n\n</ion-item> -->\n\n\n\n\n\n<button ion-button block clear (click) ="saveItem(item)">Save</button>\n\n<button ion-button block clear color="danger" (click)="removeItem(item)">Delete</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\ionicFirebase\IonicShoppingList\src\pages\edit-shopping-item\edit-shopping-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_shopping_list_shopping_list2_service__["a" /* ShoppingListService2 */], __WEBPACK_IMPORTED_MODULE_1__services_toast_toast_service__["a" /* ToastService */]])
    ], EditShoppingItemPage);
    return EditShoppingItemPage;
}());

//# sourceMappingURL=edit-shopping-item.js.map

/***/ })

});
//# sourceMappingURL=1.js.map