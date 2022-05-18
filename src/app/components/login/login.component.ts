import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm:FormGroup|any;

  constructor(private fb:FormBuilder,private firbase:FirebaseService) { }

  ngOnInit(): void {
    this.profileForm=this.fb.group({
      user:['',Validators.required],
      email:['',Validators.required,Validators.email],
      password:['',Validators.required],

    })
  }
  get email(){
    return this.profileForm.get('email')
  }
  get password(){
    return this.profileForm.get('password')
  }
  Submit(){
    let user=this.profileForm.value.user;
    let email=this.profileForm.value.email;
    let password=this.profileForm.value.password;
    this.firbase.login(email,password)
    this.profileForm.reset()
  }
  

}
