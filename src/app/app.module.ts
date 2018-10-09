import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'
import { AngularFireModule,AuthProviders, AuthMethods  } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { firebaseConfig, googleMapsKey } from './credentials'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ListingsComponent } from './components/listings/listings.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

import { EventsComponent } from './components/events/events.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { ReportsComponent } from './reports/reports.component';

//import { AgmCoreModule } from '@agm/core'

/***
export const firebaseConfig = {
  apiKey: 'AIzaSyDFZL8mbJVpm5ioYGrJ1vbwu_6NC77o3O4',
  authDomain: 'sandy-search.firebaseapp.com',
  databaseURL: 'https://sandy-search.firebaseio.com',
  projectId: 'sandy-search',
  storageBucket: 'sandy-search.appspot.com',
  messagingSenderId: '400553647913'
}
***/

const firebaseAuthConfig = {
  //provider: AuthProviders.Google,
  //method: AuthMethods.Popup
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};


const appRoutes : Routes = [
	{path:'',component:HomeComponent},
	{path:'listings',component:ListingsComponent},
	{path:'listing/:id',component:ListingComponent},
	{path:'add-listing',component:AddListingComponent},
	{path:'edit-listing/:id',component:EditListingComponent},

	// users
	{path:'users',component:UsersComponent},
	{path:'add-user',component:AddUserComponent},
	{path:'user-details/:id',component:UserDetailsComponent},
	{path:'edit-user/:id',component:EditUserComponent},

	// events
	{path:'events',component:EventsComponent},
	{path:'event-details/:id',component:EventDetailsComponent},
	{path:'add-event',component:AddEventComponent},
	{path:'edit-event/:id',component:EditEventComponent},

        // reports	
	{path:'reports',component:ReportsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,

    ListingsComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,

    UsersComponent,
    AddUserComponent,
    UserDetailsComponent,
    EditUserComponent,

    EventsComponent,
    EventDetailsComponent,
    AddEventComponent,
    EditEventComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig)
    /***
    AgmCoreModule.forRoot({
      apiKey: googleMapsKey
    })
    ***/
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
