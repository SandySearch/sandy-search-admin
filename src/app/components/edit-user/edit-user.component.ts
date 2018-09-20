import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
  private firebaseService:FirebaseService,
  private router: Router,
  private route: ActivatedRoute
  ) { }
  
	id: any;
	confirmed?:any;
        email?:any;
        name?:any;
        phone?:any;
        role?:any;
        signupDate?:any;
        lastLoginDate?:any;
  

  ngOnInit() {
	  this.id = this.route.snapshot.params['id'];
	  
	  this.firebaseService.getUserDetails(this.id).subscribe(user =>{
	          if (user.confirmed) {
		    this.confirmed = 'true';
		  } else {
		    this.confirmed = 'false';
		  }
		  this.email = user.email;
		  this.name = user.name;
		  this.phone = user.phone;
		  this.role = user.role;
		  this.signupDate = user.signupDate;
		  this.lastLoginDate = user.lastLoginDate;
	  });
	  
  }
  
  onUserEditSubmit(){
	  
	   let user = {
	          //confirmed: this.confirmed,
	          confirmed: this.confirmed === "true",
                  email: this.email,
                  name: this.name,
                  phone: this.phone,
                  role: this.role,
                  signupDate: this.signupDate,
		  lastLoginDate: this.lastLoginDate
	  }
	  
	  this.firebaseService.updateUser(this.id,user);
	  this.router.navigate(['/users']);
  }

}
