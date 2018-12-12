import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  // as per https://github.com/SebastianM/angular-google-maps/issues/1018
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
     .agm-map {
       height: 300px;
     }
  `],
  //styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
	id:any;
	listing:any;
	//imageUrl:any;
        lat: number // eslint-disable-line no-undef
        lng: number // eslint-disable-line no-undef
        zoom: number = 10 // eslint-disable-line no-undef
	
  constructor(
	private firebaseService : FirebaseService,
	private router: Router,
	private route: ActivatedRoute
  ) { }

  ngOnInit() {
	  this.id = this.route.snapshot.params['id'];
	  console.log(this.id);
	  
	  this.firebaseService.getListingDetails(this.id).subscribe(listing => {
	     this.listing = listing;
	     this.lat = this.listing.lat;
	     this.lng = this.listing.lon;
    });
	  
  }
  
  onDeleteClick(){ 
	  this.firebaseService.deleteListing(this.id);	  
	  this.router.navigate(['/listings']);
  }

}
