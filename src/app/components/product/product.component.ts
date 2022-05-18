import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  productID?:number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  datalist:Data[]=[]
  productlist:Data[]=[]

  constructor(private firebase:FirebaseService,private router:Router,private server:AuthguardService) { }

  ngOnInit(): void {
    this.getproductitem()
    
  }
  
  getproductitem(){
    this.server.getProduct().subscribe((res:any)=>{
      this.productlist=res
      console.log(this.productlist)

    })
  }

  
  addProduct(listdata:any)
  {
  const payload=
    {
      img:listdata.img,
      title:listdata.title,
      des:listdata.des,
      price:listdata.price
      
    }
    this.firebase.createProduct(payload);
    
}
  
  
  

}
