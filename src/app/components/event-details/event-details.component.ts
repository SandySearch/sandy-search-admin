import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

	id:any;
	event_details:any;

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

    });
	  
  }
  
  
  onEventDelete(){
		this.firebaseService.deleteEvent(this.id);
		
		this.router.navigate(['/events']);

  }

}
