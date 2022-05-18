import { Component, OnInit } from '@angular/core';
import { AuthguardService } from 'src/app/service/authguard.service';
import { FirebaseService } from 'src/app/service/firebase.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private firebase:FirebaseService,private firebase2:AuthguardService) { }
  list:any[]=[]
  total=0
 ngOnInit(): void {
    this.getdata()
    this. grandtotal()
    
  }
  getdata(){
    this.firebase.getProduct().subscribe((res: any)=>{
      this.list=res;
      this.list.forEach((a:any)=>{
      Object.assign(a,{quantity:1})
    })
     
    })
  }
  deleteItem(listdata:any){
   this.dec(listdata)
  this.firebase.deletePost(listdata)
}
  
 inc(val:any){
   val.quantity+=1
   console.log(val.total)
  }
  dec(val:any){
    if(val.quantity!=1)
    val.quantity-=1
  }
  totalSum(val:any){
   this.total=val.quantity*val.price
   
    return this.total
  }
  grandtotal():any{
    let total=0
    for(let product of this.list){
      total+=(product.quantity*product.price)
    }
    return total

  }
  
  
  
  
}
