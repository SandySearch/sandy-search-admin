import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
	
	id : any;
	serviceType:any;
	name:any;
	owner:any;
	address:any;
	phone:any;
	notes:any;
        lat: any
        lon: any
        here: false
        updatedDate: any
        disputed: any
        verified: string
        votes: number
        createDate: string
	archive: boolean
	dupe: number

  constructor(
	private firebaseService:FirebaseService,
	private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
	  let now = new Date().toLocaleString(); 
	  let listing= {
	          name: this.name,
		  address: this.address,
		  owner: this.owner,  // what is the default?
		  phone: this.phone,
		  notes: this.notes,
		  serviceType: this.serviceType,
		  lat: this.lat,
		  lon: this.lon,
		  here: false,
		  updatedDate: now,
		  disputed: 0,
		  verified: this.verified === 'true',  // is this correct?
		  votes: 0,
		  createDate: now,
		  archive: false,
		  dupe: 0
	  }
  
  this.firebaseService.addListing(listing);
  this.router.navigate(['listings']);
  
  }
}
