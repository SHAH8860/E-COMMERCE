import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  email:string=""
  password:string=''

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    if((this.email=="abc@gmail.com") && (this.password=='123456')){
      this.route.navigate(['/admin'])

    }
  }

}
