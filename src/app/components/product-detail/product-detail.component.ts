import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthguardService } from 'src/app/service/authguard.service';
import { FirebaseService } from 'src/app/service/firebase.service';
export  interface Data{
  id?:string;
  user?:string;
  email?:string;
  password?:string;
  img?:string,
  title?:string;
  des?:string;
  price?:string;
}
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title:string=''
  price:string=''
  img:string=''
  des:string=''
  
  


  constructor(private active:ActivatedRoute,private firebase:FirebaseService) { }

  ngOnInit(): void {
    this.title=this.active.snapshot.params['title']
    this.price=this.active.snapshot.params['price']
    this.img=this.active.snapshot.params['img']
    this.des=this.active.snapshot.params['des']
    this.image("box","zimg")
  }
 
  addProduct(){
    const payload=
    {
      title:this.title,
      img:this.img,
      des:this.des,
      price:this.price,
    
      
    }
    this.firebase.createProduct(payload);
  }
  image(id:string,id2:string){
    var zoom:any=document.getElementById(id)
    var zimg:any=document.getElementById(id2)
    zoom.addEventListener("mousemove",function(event:any){
        let clientX=event.clientX-zoom.offsetLeft;
        let clientY=event.clientY-zoom.offsetTop
        let w=zoom.offsetWidth;
        let h=zoom.offsetHeight;
        clientX=clientX/w *100;
        clientY=clientY/h *100;
        zimg.style.transform='translate(-'+clientX+'%,-'+clientY+'%) scale(2)'
    })
    zoom.addEventListener("mouseleave",function(){
        zimg.style.transform='translate(-50%,-50%) scale(1)'
    })
  }
  
  


   

      

  
  
}
