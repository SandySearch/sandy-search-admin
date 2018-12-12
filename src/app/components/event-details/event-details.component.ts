import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';
import { LatLngLiteral } from '@agm/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  // as per https://github.com/SebastianM/angular-google-maps/issues/1018
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
     .agm-map {
       height: 300px;
     }
  `],
  //styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

	id:any;
	event_details:any;
        lat: number // eslint-disable-line no-undef
        lng: number // eslint-disable-line no-undef
        zoom: number = 3 // eslint-disable-line no-undef
	paths: Array<LatLngLiteral> = [{lat: 42.052224, lng: -77.050342}, {lat: 42.064306, lng: -77.031790}, {lat: 42.075951, lng: -77.054554}, {lat: 42.063236, lng: -77.072506}, {lat: 42.052224, lng: -77.050342}]; 

  constructor(
  private firebaseService : FirebaseService,
	private router: Router,
	private route: ActivatedRoute
	) { }

  ngOnInit() {
	  this.id = this.route.snapshot.params['id'];
	  console.log(this.id);
	  
	  this.firebaseService.getEventDetails(this.id).subscribe(event_details => {
	  this.event_details = event_details;
	  // mid of east line?
	  this.lat = ((this.event_details.nePointLat - this.event_details.sePointLat)/2) + this.event_details.sePointLat;

	  // mid of north line?
	  this.lng = ((this.event_details.nwPointLon - this.event_details.nePointLon)/2) + this.event_details.nePointLon;

	  // polygon points
	  this.paths = [
	  {
            lat: this.event_details.nePointLat,
            lng: this.event_details.nePointLon
	  },
	  {
            lat: this.event_details.sePointLat,
            lng: this.event_details.sePointLon
	  },
	  {
            lat: this.event_details.swPointLat,
            lng: this.event_details.swPointLon
	  },
	  {
            lat: this.event_details.nwPointLat,
            lng: this.event_details.nwPointLon
	  }];
    });
	  
  }
  
  
  onEventDelete(){
		this.firebaseService.deleteEvent(this.id);
		
		this.router.navigate(['/events']);

  }

}
