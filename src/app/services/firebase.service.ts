import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  
  users:FirebaseListObservable<any[]>;
  user_details:FirebaseObjectObservable<any>;
  
  events:FirebaseListObservable<any[]>;
  event_details:FirebaseObjectObservable<any>;
  
  constructor(private af: AngularFire) {
	this.listings = this.af.database.list('/serviceList') as FirebaseListObservable<Listing[]>;
	this.users = this.af.database.list('/userProfile') as FirebaseListObservable<User[]>;
	this.events = this.af.database.list('/events') as FirebaseListObservable<Event[]>;
  }
  

  // Listings --------------
  getListings(){
    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.af.database.object('/serviceList/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }
  
  addListing(listing){
    return this.listings.push(listing);
  }
  
  updateListing(id,listing){
    return this.listings.update(id,listing);
  }
  
  deleteListing(id){
    return this.listings.remove(id);
  }

  // Users -----------------
  getUsers(){
	  return this.users;
  }
  
  addUser(user){
	return this.users.push(user);
  }

  getUserDetails(id){
	this.user_details = this.af.database.object('/userProfile/'+id) as FirebaseObjectObservable<User>
	return this.user_details;
  }
  
  updateUser(id,user){
	  return this.users.update(id,user);
  }
  
  deleteUser(id){
  	// NOTE this does NOT remove the user from FireBase Auth!
	return this.users.remove(id);
  }
  
  
  // Events ----------------
  getEvents(){
	  return this.events;
  }
  
  addEvent(event){
	return this.events.push(event);
  }

  getEventDetails(id){
	this.event_details = this.af.database.object('/events/'+id) as FirebaseObjectObservable<Event>
	return this.event_details;
  }
  
  updateEvent(id,event){
	  return this.events.update(id,event);
  }
  
  deleteEvent(id){
	return this.events.remove(id);
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

interface User{
  $key?:string;
  confirmed?:string;
  email?:string;
  name?:string;
  phone?:string;
  role?:string;
  signupDate?:string;
  lastLoginDate:string;
}

interface Event{
  $key?:string;
  name?:string;
  startDate?:string;
  endDate?:string;
  nePointLat?:number;
  nePointLon?:number;
  sePointLat?:number;
  sePointLon?:number;
  swPointLat?:number;
  swPointLon?:number;
  nwPointLat?:number;
  nwPointLon?:number;
  archive:boolean;
  active:boolean;
  notes?:string;
}

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

