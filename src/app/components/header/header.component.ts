import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any;
  public total:number=0
  datalist:any[]=[]
  
  constructor(private auth:AngularFireAuth,private firebase:FirebaseService,private router:Router) { 
    this.auth.authState.subscribe((user)=>{
      this.user=user;
      
      // this.user=this.user.email.slice(0,1).toUpperCase()
    })
  }

  ngOnInit(): void {
    this.firebase.getProduct().subscribe((res:any)=>{
      this.total=res.length;

    })
    this.getproduct()

  }
  getproduct(){
  this.firebase.getProduct().subscribe((res:any)=>{
      this.datalist=res;
    })
  }
  logout(){
    
   
    this.auth.signOut()
    this.router.navigate(['layout'])
    
  }

  
  

}
