import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

	confirmed?:any;
        email?:any;
        name?:any;
        phone?:any;
        role?:any;
        signupDate?:any;
        lastLoginDate?:any;

  constructor(
  private firebaseService:FirebaseService,
	private router:Router
  ) { }

  ngOnInit() {
	 
  }
  
  onUserAddSubmit(){
	  let now = new Date().toLocaleString();
	  let user= {
		  confirmed: this.confirmed === "true",
                  email: this.email,
                  name: this.name,
                  phone: this.phone,
                  role: this.role,
                  signupDate: now,
		  lastLoginDate: 'not yet'
	  }
  
  
  this.firebaseService.addUser(user);
  this.router.navigate(['users']);
  }

}
