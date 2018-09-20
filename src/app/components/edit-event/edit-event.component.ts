import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
	
	id: any;
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

        archive:string;
	active:string;
	notes?:string;

  constructor(
  private firebaseService:FirebaseService,
  private router: Router,
  private route: ActivatedRoute
  ) { }

  ngOnInit() {
	  
	  this.id = this.route.snapshot.params['id'];
	  
	  this.firebaseService.getEventDetails(this.id).subscribe(event =>{
		  
	  //this.id = event.id;
		  this.name = event.name
                  this.startDate = event.startDate
                  this.endDate = event.endDate
                  this.nePointLat = event.nePointLat
                  this.nePointLon = event.nePointLon
                  this.sePointLat = event.sePointLat
                  this.sePointLon = event.sePointLon
                  this.swPointLat = event.swPointLat
                  this.swPointLon = event.swPointLon
                  this.nwPointLat = event.nwPointLat
                  this.nwPointLon = event.nwPointLon
		  //this.archive = event.archive
		  if (event.archive) {
		    this.archive = 'true';
		  } else {
		    this.archive = 'false';
		  }
		  //this.active = event.active
                  if (event.active) {
		    this.active = 'true';
		  } else {
		    this.active = 'false';
		  }
		  this.notes = event.notes
	  });
	  
  }
  
  
   onEventEditSubmit(){
	  
	   let event= {
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
	  }
	  
	  this.firebaseService.updateEvent(this.id,event);
	  this.router.navigate(['/events']);
	  
  }

}
