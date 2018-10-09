import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {

	id : any;
	serviceType:any;
	name:any;
	owner:any;
	address:any;
	phone:any;
	notes:any;
        lat: any
        lon: any
        here: string
        updatedDate: any
        disputed: any
        verified: string
        votes: number
        createDate: string
	archive: string
	dupe: number

  constructor(
  private firebaseService:FirebaseService,
  private router: Router,
  private route: ActivatedRoute
  ) { }

  ngOnInit() {
	  this.id = this.route.snapshot.params['id'];
	  
	  this.firebaseService.getListingDetails(this.id).subscribe(listing =>{
		  
		  this.name = listing.name;
		  this.owner = listing.owner;
		  this.address = listing.address;
		  this.phone = listing.phone;
		  this.notes = listing.notes;
		  this.serviceType = listing.serviceType;
		  this.lat = listing.lat;
		  this.lon = listing.lon;
		  //this.here = listing.here;
		  if (listing.here) {
		    this.here = 'TRUE';
		  } else {
		    this.here = 'FALSE';
		  }
		  this.updatedDate = listing.updatedDate;
		  this.disputed = listing.disputed;
		  //this.verified = listing.verified;
		  if (listing.verified) {
		    this.verified = 'true';
		  } else {
		    this.verified = 'false';
		  }
		  this.votes = listing.votes;
		  this.createDate = listing.createDate;
		  //this.archive = listing.archive;
		  if (listing.archive) {
		    this.archive = 'true';
		  } else {
		    this.archive = 'false';
		  }
		  this.dupe = listing.dupe;
	  });
	  
  }
  
  
  onEditSubmit(){
	  
	   let listing= {
		  name: this.name,
		  address: this.address,
		  owner: this.owner,
		  phone: this.phone,
		  notes: this.notes,
		  serviceType: this.serviceType,
		  lat: this.lat,
		  lon: this.lon,
		  //here: this.here === 'true',
		  updatedDate: this.updatedDate,
		  disputed: this.disputed,
		  verified: this.verified === 'true',
		  votes: this.votes,
		  createDate: this.createDate,
		  archive: this.archive === 'true',
		  dupe: this.dupe
		  
	  }
	  
	  this.firebaseService.updateListing(this.id,listing);
	  
	  this.router.navigate(['/listings']);
	  
  }

}
