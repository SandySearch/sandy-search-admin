import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
	id:any;
	user:any;
	//imageUrl:any;

  constructor(
  	private firebaseService : FirebaseService,
	private router: Router,
	private route: ActivatedRoute
  ) { }

  ngOnInit() {
	  
	  this.id = this.route.snapshot.params['id'];
	  console.log(this.id);
	  
	  this.firebaseService.getUserDetails(this.id).subscribe(user => {
      this.user = user;

    });
	  
  }
  
  onItemDelete(){
	  
	  this.firebaseService.deleteUser(this.id);
		
	  this.router.navigate(['/users']);
  }

}
