import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  // as per https://github.com/SebastianM/angular-google-maps/issues/1018
  styles: [`
    .sebm-google-map-container {
       height: 200px;
     }
     .agm-map {
       height: 200px;
     }
  `],
  //styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

	id:any;
	event_details:any;
        lat: number // eslint-disable-line no-undef
        lng: number // eslint-disable-line no-undef

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
	  this.lat = this.event_details.nePointLat;
	  this.lng = this.event_details.nePointLon;
    });
	  
  }
  
  
  onEventDelete(){
		this.firebaseService.deleteEvent(this.id);
		
		this.router.navigate(['/events']);

  }

}
