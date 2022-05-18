import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:string='';
  lname:string=''
  email:string='';
  password:string=''


  constructor(private firebase:FirebaseService) { }

  ngOnInit(): void {
  }
  registered(){
    this.firebase.register(this.email,this.password,this.user)
    this.email='';
    this.password='';
    this.user='';
    this.lname='';

  }

}
