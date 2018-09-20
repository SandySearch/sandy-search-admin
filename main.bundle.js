webpackJsonp([1,4],{

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = (function () {
    function FirebaseService(af) {
        this.af = af;
        this.listings = this.af.database.list('/serviceList');
        this.users = this.af.database.list('/userProfile');
        this.events = this.af.database.list('/events');
    }
    // Listings --------------
    FirebaseService.prototype.getListings = function () {
        return this.listings;
    };
    FirebaseService.prototype.getListingDetails = function (id) {
        this.listing = this.af.database.object('/serviceList/' + id);
        return this.listing;
    };
    FirebaseService.prototype.addListing = function (listing) {
        return this.listings.push(listing);
    };
    FirebaseService.prototype.updateListing = function (id, listing) {
        return this.listings.update(id, listing);
    };
    FirebaseService.prototype.deleteListing = function (id) {
        return this.listings.remove(id);
    };
    // Users -----------------
    FirebaseService.prototype.getUsers = function () {
        return this.users;
    };
    FirebaseService.prototype.addUser = function (user) {
        return this.users.push(user);
    };
    FirebaseService.prototype.getUserDetails = function (id) {
        this.user_details = this.af.database.object('/userProfile/' + id);
        return this.user_details;
    };
    FirebaseService.prototype.updateUser = function (id, user) {
        return this.users.update(id, user);
    };
    FirebaseService.prototype.deleteUser = function (id) {
        // NOTE this does NOT remove the user from FireBase Auth!
        return this.users.remove(id);
    };
    // Events ----------------
    FirebaseService.prototype.getEvents = function () {
        return this.events;
    };
    FirebaseService.prototype.addEvent = function (event) {
        return this.events.push(event);
    };
    FirebaseService.prototype.getEventDetails = function (id) {
        this.event_details = this.af.database.object('/events/' + id);
        return this.event_details;
    };
    FirebaseService.prototype.updateEvent = function (id, event) {
        return this.events.update(id, event);
    };
    FirebaseService.prototype.deleteEvent = function (id) {
        return this.events.remove(id);
    };
    FirebaseService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a;
}());
/* import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

 listings: FirebaseListObservable<any[]>;
 listing: FirebaseObjectObservable<any[]>;
 folder:any;
 

  constructor(private af: AngularFire) {
    this.folder = 'listingImages';
  }
  
  getListings(){
      
      this.listings = this.af.database.list('/serviceList') as FirebaseListObservable<Listing[]>;
      return this.listings;
  }
  
  getListingDetails(id){
      
      this.listing = this.af.database.object('/serviceList/' + id) as FirebaseObjectObservable<Listing>;
      return this.listing;
      
  }
  
  addListing(listing){
      let storageRef = firebase.storage().ref();
      
      for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
          
          let path = '/${this.folder}/${selectedFile.name}';
          let iRef = storageRef.child(path);
          iRef.put(selectedFile).then((snapshot) => {
             listing.image = selectedFile.name;
             listing.path = path;
             return this.listings.push(listing);
          });
      }
      
  }

}

interface Listing{
    $key?:string;
    serviceType: string
        name: string
        address?: string
        phone?: number
        notes?: string
        lat?: number
        lon?: number
        here?: boolean
        updatedDate?: string
        disputed: number
        verified: boolean
        votes: number
        createDate: string
        archive: boolean
        dupe: number
    
}
 */
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/firebase.service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 402;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(522);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/main.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(724),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/app.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_firebase_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_listings_listings_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_listing_listing_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_add_listing_add_listing_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_edit_listing_edit_listing_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_users_users_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_add_user_add_user_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_details_user_details_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_edit_user_edit_user_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_events_events_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_event_details_event_details_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_add_event_add_event_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_edit_event_edit_event_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__reports_reports_component__ = __webpack_require__(537);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var firebaseConfig = {
    apiKey: 'AIzaSyDFZL8mbJVpm5ioYGrJ1vbwu_6NC77o3O4',
    authDomain: 'sandy-search.firebaseapp.com',
    databaseURL: 'https://sandy-search.firebaseio.com',
    projectId: 'sandy-search',
    storageBucket: 'sandy-search.appspot.com',
    messagingSenderId: '400553647913'
};
var firebaseAuthConfig = {
    //provider: AuthProviders.Google,
    //method: AuthMethods.Popup
    provider: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AuthProviders */].Password,
    method: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* AuthMethods */].Password
};
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'listings', component: __WEBPACK_IMPORTED_MODULE_11__components_listings_listings_component__["a" /* ListingsComponent */] },
    { path: 'listing/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_listing_listing_component__["a" /* ListingComponent */] },
    { path: 'add-listing', component: __WEBPACK_IMPORTED_MODULE_13__components_add_listing_add_listing_component__["a" /* AddListingComponent */] },
    { path: 'edit-listing/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_edit_listing_edit_listing_component__["a" /* EditListingComponent */] },
    // users
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_15__components_users_users_component__["a" /* UsersComponent */] },
    { path: 'add-user', component: __WEBPACK_IMPORTED_MODULE_16__components_add_user_add_user_component__["a" /* AddUserComponent */] },
    { path: 'user-details/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_user_details_user_details_component__["a" /* UserDetailsComponent */] },
    { path: 'edit-user/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_edit_user_edit_user_component__["a" /* EditUserComponent */] },
    // events
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_19__components_events_events_component__["a" /* EventsComponent */] },
    { path: 'event-details/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_event_details_event_details_component__["a" /* EventDetailsComponent */] },
    { path: 'add-event', component: __WEBPACK_IMPORTED_MODULE_21__components_add_event_add_event_component__["a" /* AddEventComponent */] },
    { path: 'edit-event/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_edit_event_edit_event_component__["a" /* EditEventComponent */] },
    // reports	
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_23__reports_reports_component__["a" /* ReportsComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_listings_listings_component__["a" /* ListingsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_listing_listing_component__["a" /* ListingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_add_listing_add_listing_component__["a" /* AddListingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_edit_listing_edit_listing_component__["a" /* EditListingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_add_user_add_user_component__["a" /* AddUserComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_user_details_user_details_component__["a" /* UserDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_edit_user_edit_user_component__["a" /* EditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_event_details_event_details_component__["a" /* EventDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_add_event_add_event_component__["a" /* AddEventComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_edit_event_edit_event_component__["a" /* EditEventComponent */],
                __WEBPACK_IMPORTED_MODULE_23__reports_reports_component__["a" /* ReportsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseConfig, firebaseAuthConfig)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_firebase_service__["a" /* FirebaseService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/app.module.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEventComponent = (function () {
    function AddEventComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddEventComponent.prototype.ngOnInit = function () {
    };
    AddEventComponent.prototype.onEventAddSubmit = function () {
        var event = {
            name: this.name,
            startDate: this.startDate,
            endDate: this.endDate,
            nePointLat: this.nePointLat,
            nePointLon: this.nePointLon,
            sePointLat: this.sePointLat,
            sePointLon: this.sePointLon,
            swPointLat: this.swPointLat,
            swPointLon: this.swPointLon,
            nwPointLat: this.nwPointLat,
            nwPointLon: this.nwPointLon,
            //archive: this.archive,
            archive: false,
            active: this.active === 'true',
            notes: this.notes
        };
        this.firebaseService.addEvent(event);
        this.router.navigate(['events']);
    };
    AddEventComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-event',
            template: __webpack_require__(725),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AddEventComponent);
    return AddEventComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/add-event.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddListingComponent = (function () {
    function AddListingComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddListingComponent.prototype.ngOnInit = function () {
    };
    AddListingComponent.prototype.onAddSubmit = function () {
        var now = new Date().toLocaleString();
        var listing = {
            name: this.name,
            address: this.address,
            owner: this.owner,
            phone: this.phone,
            notes: this.notes,
            serviceType: this.serviceType,
            lat: this.lat,
            lon: this.lon,
            here: false,
            updatedDate: now,
            disputed: 0,
            verified: false,
            votes: 0,
            createDate: now,
            archive: false,
            dupe: 0
        };
        this.firebaseService.addListing(listing);
        this.router.navigate(['listings']);
    };
    AddListingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-listing',
            template: __webpack_require__(726),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AddListingComponent);
    return AddListingComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/add-listing.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserComponent = (function () {
    function AddUserComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent.prototype.onUserAddSubmit = function () {
        var now = new Date().toLocaleString();
        var user = {
            confirmed: this.confirmed === "true",
            email: this.email,
            name: this.name,
            phone: this.phone,
            role: this.role,
            signupDate: now,
            lastLoginDate: 'not yet'
        };
        this.firebaseService.addUser(user);
        this.router.navigate(['users']);
    };
    AddUserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(727),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AddUserComponent);
    return AddUserComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/add-user.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditEventComponent = (function () {
    function EditEventComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    EditEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getEventDetails(this.id).subscribe(function (event) {
            //this.id = event.id;
            _this.name = event.name;
            _this.startDate = event.startDate;
            _this.endDate = event.endDate;
            _this.nePointLat = event.nePointLat;
            _this.nePointLon = event.nePointLon;
            _this.sePointLat = event.sePointLat;
            _this.sePointLon = event.sePointLon;
            _this.swPointLat = event.swPointLat;
            _this.swPointLon = event.swPointLon;
            _this.nwPointLat = event.nwPointLat;
            _this.nwPointLon = event.nwPointLon;
            //this.archive = event.archive
            if (event.archive) {
                _this.archive = 'true';
            }
            else {
                _this.archive = 'false';
            }
            //this.active = event.active
            if (event.active) {
                _this.active = 'true';
            }
            else {
                _this.active = 'false';
            }
            _this.notes = event.notes;
        });
    };
    EditEventComponent.prototype.onEventEditSubmit = function () {
        var event = {
            //id: this.id,
            name: this.name,
            startDate: this.startDate,
            endDate: this.endDate,
            nePointLat: this.nePointLat,
            nePointLon: this.nePointLon,
            sePointLat: this.sePointLat,
            sePointLon: this.sePointLon,
            swPointLat: this.swPointLat,
            swPointLon: this.swPointLon,
            nwPointLat: this.nwPointLat,
            nwPointLon: this.nwPointLon,
            archive: this.archive === "true",
            active: this.active === "true",
            notes: this.notes
        };
        this.firebaseService.updateEvent(this.id, event);
        this.router.navigate(['/events']);
    };
    EditEventComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-event',
            template: __webpack_require__(728),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditEventComponent);
    return EditEventComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/edit-event.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditListingComponent = (function () {
    function EditListingComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    EditListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getListingDetails(this.id).subscribe(function (listing) {
            _this.name = listing.name;
            _this.owner = listing.owner;
            _this.address = listing.address;
            _this.phone = listing.phone;
            _this.notes = listing.notes;
            _this.serviceType = listing.serviceType;
            _this.lat = listing.lat;
            _this.lon = listing.lon;
            _this.here = listing.here;
            _this.updatedDate = listing.updatedDate;
            _this.disputed = listing.disputed;
            _this.verified = listing.verified;
            _this.votes = listing.votes;
            _this.createDate = listing.createDate;
            _this.archive = listing.archive;
            _this.dupe = listing.dupe;
        });
    };
    EditListingComponent.prototype.onEditSubmit = function () {
        var listing = {
            name: this.name,
            address: this.address,
            owner: this.owner,
            phone: this.phone,
            notes: this.notes,
            serviceType: this.serviceType,
            lat: this.lat,
            lon: this.lon,
            here: this.here,
            updatedDate: this.updatedDate,
            disputed: this.disputed,
            verified: this.verified,
            votes: this.votes,
            createDate: this.createDate,
            archive: this.archive,
            dupe: this.dupe
        };
        this.firebaseService.updateListing(this.id, listing);
        this.router.navigate(['/listings']);
    };
    EditListingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-listing',
            template: __webpack_require__(729),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditListingComponent);
    return EditListingComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/edit-listing.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditUserComponent = (function () {
    function EditUserComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getUserDetails(this.id).subscribe(function (user) {
            if (user.confirmed) {
                _this.confirmed = 'true';
            }
            else {
                _this.confirmed = 'false';
            }
            _this.email = user.email;
            _this.name = user.name;
            _this.phone = user.phone;
            _this.role = user.role;
            _this.signupDate = user.signupDate;
            _this.lastLoginDate = user.lastLoginDate;
        });
    };
    EditUserComponent.prototype.onUserEditSubmit = function () {
        var user = {
            //confirmed: this.confirmed,
            confirmed: this.confirmed === "true",
            email: this.email,
            name: this.name,
            phone: this.phone,
            role: this.role,
            signupDate: this.signupDate,
            lastLoginDate: this.lastLoginDate
        };
        this.firebaseService.updateUser(this.id, user);
        this.router.navigate(['/users']);
    };
    EditUserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(730),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditUserComponent);
    return EditUserComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/edit-user.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDetailsComponent = (function () {
    function EventDetailsComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        console.log(this.id);
        this.firebaseService.getEventDetails(this.id).subscribe(function (event_details) {
            _this.event_details = event_details;
        });
    };
    EventDetailsComponent.prototype.onEventDelete = function () {
        this.firebaseService.deleteEvent(this.id);
        this.router.navigate(['/events']);
    };
    EventDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-details',
            template: __webpack_require__(731),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EventDetailsComponent);
    return EventDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/event-details.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsComponent = (function () {
    function EventsComponent(firebaseService) {
        this.firebaseService = firebaseService;
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getEvents().subscribe(function (events) {
            console.log(events);
            _this.events = events;
        });
    };
    EventsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(732),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object])
    ], EventsComponent);
    return EventsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/events.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(af, flashMessage) {
        this.af = af;
        this.flashMessage = flashMessage;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.login = function () {
        this.af.auth.login();
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(733),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/home.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingComponent = (function () {
    //imageUrl:any;
    function ListingComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    ListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        console.log(this.id);
        this.firebaseService.getListingDetails(this.id).subscribe(function (listing) {
            _this.listing = listing;
        });
    };
    ListingComponent.prototype.onDeleteClick = function () {
        this.firebaseService.deleteListing(this.id);
        this.router.navigate(['/listings']);
    };
    ListingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(734),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ListingComponent);
    return ListingComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/listing.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListingsComponent = (function () {
    function ListingsComponent(firebaseService) {
        this.firebaseService = firebaseService;
    }
    ListingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getListings().subscribe(function (listings) {
            console.log(listings);
            _this.listings = listings;
        });
    };
    ListingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(735),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object])
    ], ListingsComponent);
    return ListingsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/listings.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(af, flashMessage, router) {
        this.af = af;
        this.flashMessage = flashMessage;
        this.router = router;
        this.version = "0.0.1";
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.login = function () {
        this.af.auth.login();
    };
    NavbarComponent.prototype.logout = function () {
        this.af.auth.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['']);
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(736),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/navbar.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailsComponent = (function () {
    //imageUrl:any;
    function UserDetailsComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        console.log(this.id);
        this.firebaseService.getUserDetails(this.id).subscribe(function (user) {
            _this.user = user;
        });
    };
    UserDetailsComponent.prototype.onItemDelete = function () {
        this.firebaseService.deleteUser(this.id);
        this.router.navigate(['/users']);
    };
    UserDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(737),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], UserDetailsComponent);
    return UserDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/user-details.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(firebaseService) {
        this.firebaseService = firebaseService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getUsers().subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(738),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/users.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(739),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReportsComponent);
    return ReportsComponent;
}());
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/reports.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/dbadmin/Documents/GitHub/sandy-search-admin/src/environment.js.map

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class =\"container\" style =\"margin-top:100px;\">\r\n \r\n\t<flash-messages></flash-messages>\r\n\t<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/events']\">Back</a>\n<br />\n<h2 class=\"page-header\">Add Event</h2>\n\n\n<form (submit)=\"onEventAddSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>startDate</label>\n    <input class=\"form-control\" type=\"date\" [(ngModel)]=\"startDate\" name=\"startDate\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>endDate</label>\n    <input class=\"form-control\" type=\"date\" [(ngModel)]=\"endDate\" name=\"endDate\" >\n  </div>\n  <div class=\"form-group\">\n    <label>nePointLat</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"nePointLat\" name=\"nePointLat\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>nePointLon</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"nePointLon\" name=\"nePointLon\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>sePointLat</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"sePointLat\" name=\"sePointLat\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>sePointLon</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"sePointLon\" name=\"sePointLon\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>swPointLat</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"swPointLat\" name=\"swPointLat\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>swPointLon</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"swPointLon\" name=\"swPointLon\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>nwPointLat</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"nwPointLat\" name=\"nwPointLat\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>nwPointLon</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"nwPointLon\" name=\"nwPointLon\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>active</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"active\" name=\"active\" required>\n      <option value=\"true\">TRUE</option>\n      <option value=\"false\">FALSE</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>notes</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"notes\" name=\"notes\" required>\n  </div>\n  \n  <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n</form>\n\n\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/listings']\">Back</a>\n<br />\n<h2 class=\"page-header\">Add Listing</h2>\n<form (submit)=\"onAddSubmit()\">\n  <div class=\"form-group\">\n    <label>Service Name</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Address</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"address\" name=\"address\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Owner</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"owner\" name=\"owner\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Phone</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"phone\" name=\"phone\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Service Type</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"serviceType\" name=\"serviceType\" required>\n      <option value=\"ESNY\">Emergency Shelter</option>\n      <option value=\"EFW\">Emergency Food/Water</option>\n      <option value=\"GS\">Open Gas Stations</option>\n      <option value=\"CS\">Charging Stations</option>\n      <option value=\"OFS\">Open Food Stores</option>\n      <option value=\"WATM\">Working ATMs</option>\n      <option value=\"other\">Other</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Notes</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"notes\" name=\"notes\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Lat</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"lat\" name=\"lat\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Lon</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"lon\" name=\"lon\" >\n  </div>\n  <div class=\"form-group\">\n    <label>verified</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"verified\" name=\"verified\" required>\n  </div>\n  <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/users']\">Back</a>\n<br />\n<h2 class=\"page-header\">Add User</h2>\n<form (submit)=\"onUserAddSubmit()\">\n  <div class=\"form-group\">\n    <label>confirmed</label>\n    <!--\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"confirmed\" name=\"confirmed\" required>\n    -->\n     <select class=\"form-control\" type=\"text\" [(ngModel)]=\"confirmed\" name=\"confirmed\" required>\n      <option value=\"true\">TRUE</option>\n      <option value=\"false\">FALSE</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n  </div>\n  \n  <div class=\"form-group\">\n    <label>Email</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"email\" name=\"email\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Phone</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Role</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"role\" name=\"role\" required>\n  </div>\n  \n  <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/events']\">Back</a>\n<br />\n<h2 class=\"page-header\">Edit Event</h2>\n<form (submit)=\"onEventEditSubmit()\">\n    <div class=\"form-group\">\n    <label>Name</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Notes</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"notes\" name=\"notes\" >\n  </div>\n  <div class=\"form-group\">\n    <label>startDate</label>\n    <input class=\"form-control\" type=\"date\" [(ngModel)]=\"startDate\" name=\"startDate\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>endDate</label>\n    <input class=\"form-control\" type=\"date\" [(ngModel)]=\"endDate\" name=\"endDate\" >\n  </div>\n  <div class=\"form-group\">\n    <label>nePointLat</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"nePointLat\" name=\"nePointLat\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>nePointLon</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"nePointLon\" name=\"nePointLon\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>sePointLat</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"sePointLat\" name=\"sePointLat\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>sePointLon</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"sePointLon\" name=\"sePointLon\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>swPointLat</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"swPointLat\" name=\"swPointLat\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>swPointLon</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"swPointLon\" name=\"swPointLon\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>nwPointLat</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"nwPointLat\" name=\"nwPointLat\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>nwPointLon</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"nwPointLon\" name=\"nwPointLon\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>archive</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"archive\" name=\"archive\" required>\n      <option value=\"true\">TRUE</option>\n      <option value=\"false\">FALSE</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>active</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"active\" name=\"active\" required>\n      <option value=\"true\">TRUE</option>\n      <option value=\"false\">FALSE</option>\n    </select>\n  </div>\n  \n  <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/listings']\">Back</a>\n<br />\n<h2 class=\"page-header\">Edit Listing</h2>\n<form (submit)=\"onEditSubmit()\">\n  <div class=\"form-group\">\n    <label>Service Name</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Address</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"address\" name=\"address\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Owner</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"owner\" name=\"owner\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Phone</label>\n    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"phone\" name=\"phone\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Service Type</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"serviceType\" name=\"serviceType\" required>\n      <option value=\"ESNY\">Emergency Shelter</option>\n      <option value=\"EFW\">Emergency Food/Water</option>\n      <option value=\"GS\">Open Gas Stations</option>\n      <option value=\"CS\">Charging Stations</option>\n      <option value=\"OFS\">Open Food Stores</option>\n      <option value=\"WATM\">Working ATMs</option>\n      <option value=\"other\">Other</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Notes</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"notes\" name=\"notes\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Lat</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"lat\" name=\"lat\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Lon</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"lon\" name=\"lon\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Here Flag</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"here\" name=\"here\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Last Updated Date</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"updatedDate\" name=\"updatedDate\" >\n  </div>\n  <div class=\"form-group\">\n    <label>disputed</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"disputed\" name=\"disputed\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>verified</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"verified\" name=\"verified\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>votes</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"votes\" name=\"votes\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>createDate</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"createDate\" name=\"createDate\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>archive</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"archive\" name=\"archive\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>dupe</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"dupe\" name=\"dupe\" required>\n  </div>\n  <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/users']\">Back</a>\n<br />\n<h2 class=\"page-header\">Edit User</h2>\n<form (submit)=\"onUserEditSubmit()\">\n  <div class=\"form-group\">\n    <label>confirmed</label>\n    <select class=\"form-control\" type=\"text\" [(ngModel)]=\"confirmed\" name=\"confirmed\" required>\n      <option value=\"true\">TRUE</option>\n      <option value=\"false\">FALSE</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n  </div>\n  \n  <div class=\"form-group\">\n    <label>Email</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"email\" name=\"email\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Phone</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Role</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"role\" name=\"role\" required>\n  </div>\n  \n  <div class=\"form-group\">\n    <label>signupDate</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"signupDate\" name=\"signupDate\" required>\n  </div>\n  \n  <div class=\"form-group\">\n    <label>lastLoginDate</label>\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"lastLoginDate\" name=\"lastLoginDate\" >\n  </div>\n  \n  <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\n</form>\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"event_details\">\n\n\t<a [routerLink] = \"['/events']\">Go back </a>\n\t<br>\n\t\n\t\n\t<h2 class =\"page header\">{{event_details.name}} <small>{{event_details.active}}</small></h2>\n\t<div class = \"row\">\n\t\t<div class = \"col-md-4\">\n\t\t\t<img style=\"width:100%\" class=\"thumbnail\" src=\"{{event_details.firebase_url}}\">\n\t\t\n\t\t</div>\n\t\t\n\t\t<div class = \"col-md-8\">\n\t\t\t<ul class =\"list-group\">\n\t\t\t\t<li class = \"list-group-item\">Name: <b>{{event_details.name}}</b></li>\n\t\t\t\t<li class = \"list-group-item\">Notes: <b>{{event_details.notes}}</b></li>\n\t\t\t\t<li class = \"list-group-item\">startDate: <b>{{event_details.startDate}}</b></li>\n\t\t\t\t<li class = \"list-group-item\">endDate: <b>{{event_details.endDate}}</b></li>\n\t\t\t\t<li class = \"list-group-item\">nePoint Lat/Lon: <b>{{event_details.nePointLat}}</b> / <b>{{event_details.nePointLon}}</b></li>\n\t\t\t\t<li class = \"list-group-item\">sePoint Lat/Lon: <b>{{event_details.sePointLat}}</b> / <b>{{event_details.sePointLon}}</b></li>\n\t\t\t\t<li class = \"list-group-item\">swPoint Lat/Lon: <b>{{event_details.swPointLat}}</b> / <b>{{event_details.swPointLon}}</b></li>\n\t\t\t\t<li class = \"list-group-item\">nwPoint Lat/Lon: <b>{{event_details.nwPointLat}}</b> / <b>{{event_details.nwPointLon}}</b></li>\n\t\t\t\t<li class = \"list-group-item\">archive: <b>{{event_details.archive}}</b></li>\n\t\t\t\t<li class = \"list-group-item\">active: <b>{{event_details.active}}</b></li>\n\t\t\t\t\n\t\t\t</ul>\n\t\t\n\t\t</div>\n\t\t\n\t\t<a class = \"btn btn-default\" [routerLink] = \"['/edit-event/' + event_details.$key]\">Edit</a>\n\t\t<a (click) = \"onEventDelete()\" class = \"btn btn-danger\" >Delete</a>\n\t</div>\n\n\n</div>\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "<ul class = \"list-group\">\n\n<div class=\"row\" >\n\t\t  <div class=\"col-xs-12 col-md-3\" *ngFor=\"let event of events\">\n\t\t\t\t\n\t\t\t\t<a [routerLink]=\"['/event-details/'+event.$key]\" style = \"text-align: center;\"><h4>{{event.name}}</h4></a>\n\t\t\t\t\n\t\t\t\t<img style=\"width:100%;height:150px;\" class=\"thumbnail\" src=\"{{event.firebase_url}}\">\n\t\t\t\t\n\t\t  </div>\n\t\t  \n\t</div>\n\n<!--\n\t<li class = \"list-group-item\" *ngFor=\"let event of events\">\n\t\n\t<a [routerLink]=\"['/event-details/'+event.$key]\">{{event.name}}</a>\n\t\t\n\t</li>\n-->\n</ul>\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "<div class = \"jumbotron text-center\">\n\t<div class = \"container\">\n\t\t<h1>SandySearch Admin</h1>\n\t\t<p>The Emergency Services Search and Reporting app</p>\n\t\t<a (click)=\"login()\">Login</a>\n\t\t<a (click)=\"login()\">or Request Access</a>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"listing\">\n\n\t<a [routerLink] = \"['/listings']\">Go back </a>\n\t<br>\n\t<h2 class =\"page header\">{{listing.name}}</h2>\n      \t<p>{{ listing.address }}</p>\n\t<div class = \"row\">\n\t\t<div class = \"col-md-4\">\n\t\t\t<img style=\"width:100%\" class=\"thumbnail\" src=\"{{imageUrl}}\">\n\t\t\n\t\t</div>\n\t\t\n\t\t<div class = \"col-md-8\">\n\t\t\t<ul class =\"list-group\">\n\t\t\t\t<!--\n\t\t\t\t<li class = \"list-group-item\">serviceType: {{listing.serviceType}}</li>\n\t\t\t\t-->\n\t\t\t\t<li class = \"list-group-item\" *ngIf=\"listing.serviceType == 'ESNY'\">serviceType: ({{listing.serviceType}}) Emergency Shelter</li>\n\t\t\t\t<li class = \"list-group-item\" *ngIf=\"listing.serviceType == 'EFW'\">serviceType: ({{listing.serviceType}}) Emergency Food/Water</li>\n\t\t\t\t<li class = \"list-group-item\" *ngIf=\"listing.serviceType == 'GS'\">serviceType: ({{listing.serviceType}}) Open Gas Stations</li>\n\t\t\t\t<li class = \"list-group-item\" *ngIf=\"listing.serviceType == 'CS'\">serviceType: ({{listing.serviceType}}) Charging Stations</li>\n\t\t\t\t<li class = \"list-group-item\" *ngIf=\"listing.serviceType == 'OFS'\">serviceType: ({{listing.serviceType}}) Open Food Stores</li>\n\t\t\t\t<li class = \"list-group-item\" *ngIf=\"listing.serviceType == 'WATM'\">serviceType: ({{listing.serviceType}}) Working ATMs</li>\n\t\t\t\t<li class = \"list-group-item\" *ngIf=\"listing.serviceType == 'other'\">serviceType: ({{listing.serviceType}}) Other Services</li>\n\t\t\t\t<li class = \"list-group-item\">Phone: {{listing.phone}}</li>\n\t\t\t\t<li class = \"list-group-item\">Notes: {{listing.notes}}</li>\n\t\t\t\t<li class = \"list-group-item\">Owner: {{listing.owner}}</li>\n\t\t\t\t<li class = \"list-group-item\">Lat/Lon: {{listing.lat}} / {{listing.lon}}</li>\n\t\t\t\t<li class = \"list-group-item\">here: {{listing.here}}</li>\n\t\t\t\t<li class = \"list-group-item\">updatedDate: {{listing.updatedDate}}</li>\n\t\t\t\t<li class = \"list-group-item\">disputed: {{listing.disputed}}</li>\n\t\t\t\t<li class = \"list-group-item\">verified: {{listing.verified}}</li>\n\t\t\t\t<li class = \"list-group-item\">votes: {{listing.votes}}</li>\n\t\t\t\t<li class = \"list-group-item\">createDate: {{listing.createDate}}</li>\n\t\t\t\t<li class = \"list-group-item\">archive: {{listing.archive}}</li>\n\t\t\t\t<li class = \"list-group-item\">dupe: {{listing.dupe}}</li>\n\t\t\t</ul>\n\t\t\n\t\t</div>\n\t\t\n\t\t<a class = \"btn btn-default\" [routerLink] = \"['/edit-listing/'+listing.$key]\">Edit</a>\n\t\t<a (click)=\"onDeleteClick()\" class = \"btn btn-danger\" >Delete</a>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "\n<ul class = \"list-group\">\n\t<li class = \"list-group-item\" *ngFor=\"let listing of listings\">\n\t<a [routerLink]=\"['/listing/'+listing.$key]\">{{listing.name}} {{listing.address}}</a>\n\t</li>\n</ul>\n\n"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n\t  <a class=\"navbar-brand\" href=\"#\">SandySearch ADMIN v{{version}}</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li ><a [routerLink]=\"['/']\">Home</a></li>\n            <li ><a [routerLink]=\"['/listings']\">Listings</a></li>\n\t    <li ><a [routerLink]=\"['/users']\">Users</a></li>\n\t    <li ><a [routerLink]=\"['/events']\">Events</a></li>\n\t    <li ><a [routerLink]=\"['/add-listing']\">Add New Listings</a></li>\n\t    <li ><a [routerLink]=\"['/add-user']\">Add New Users</a></li>\n\t    <li ><a [routerLink]=\"['/add-event']\">Add New Events</a></li>\n\t    <li ><a [routerLink]=\"['/reports']\">Reports</a></li>\n\t\t\t\n\t\t<!--<li ><a [routerLink]=\"['/add-item']\">Add Item</a></li>-->\n          </ul>\n\t\t  <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"!(af.auth | async)\"><a (click)=\"login()\" >Login</a></li>\n\t\t\t<li ><a (click)=\"logout()\" >Logout</a></li>\n          </ul>\n\t\t  \n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n\n\t\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"user\">\n\n\t<a [routerLink] = \"['/users']\">Go back </a>\n\t<br>\n\t<h2 class =\"page header\" *ngIf=\"user.confirmed\">{{user.name}} <small>confirmed</small></h2>\n\t<h2 class =\"page header\" *ngIf=\"!user.confirmed\">{{user.name}} <small>NOT confirmed</small></h2>\n\t<div class = \"row\">\n\t\t<div class = \"col-md-4\">\n\t\t\t<img style=\"width:100%\" class=\"thumbnail\" src=\"{{imageUrl}}\">\n\t\t\n\t\t</div>\n\t\t\n\t\t<div class = \"col-md-8\">\n\t\t\t<ul class =\"list-group\">\n\t\t\t\t<li class = \"list-group-item\">Email: {{user.email}}</li>\n\t\t\t\t<li class = \"list-group-item\">Phone: {{user.phone}}</li>\n\t\t\t\t<li class = \"list-group-item\">Role: {{user.role}}</li>\n\t\t\t\t<li class = \"list-group-item\">signupDate: {{user.signupDate}}</li>\n\t\t\t\t<li class = \"list-group-item\">lastLoginDate: {{user.lastLoginDate}}</li>\n\t\t\t\t\n\t\t\t\t\n\t\t\t</ul>\n\t\t\n\t\t</div>\n\t\t\n\t\t<a class = \"btn btn-default\" [routerLink] = \"['/edit-user/'+user.$key]\">Edit</a>\n\t\t<a (click)=\"onUserDelete()\" class = \"btn btn-danger\" >Delete</a>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<ul class = \"list-group\">\n\n<!---\t\n\t<div class=\"row\" >\n\t\t  <div class=\"col-xs-12 col-md-3\" *ngFor=\"let user of users\">\n\t\t\t\t\n\t\t\t\t<a [routerLink]=\"['/userProfile/'+user.$key]\" style = \"text-align: center;\"><h4>{{user.name}}</h4></a>\n\t\t\t\t\n\t\t\t\t<img style=\"width:100%;height:150px;\" class=\"thumbnail\" src=\"{{user.image_firebase_url}}\">\n\t\t\t\t\n\t\t  </div>\n\t\t  \n\t</div>\n--->\n\t\n\t<li class = \"list-group-item\" *ngFor=\"let user of users\">\n\t\t<a [routerLink]=\"['/user-details/'+user.$key]\">{{user.name}}</a>\n\t</li>\n\n</ul>\n\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<p>\n  reports works!\n</p>\n"

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(403);


/***/ })

},[763]);
//# sourceMappingURL=main.bundle.js.map