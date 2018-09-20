import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
	
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
	active:string;
	notes?:string;

	event : any;

  constructor(
    private firebaseService:FirebaseService,
	private router:Router
	) { }

  ngOnInit() {

  }
  
  
  onEventAddSubmit(){
	  
	    let event= {
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
	  }
  
  
  this.firebaseService.addEvent(event);
  this.router.navigate(['events']);
  
  }

}
