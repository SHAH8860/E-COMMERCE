import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthguardService } from 'src/app/service/authguard.service';
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
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  profileForm: FormGroup | any;
  productitem: Data[] = []
  value:string='ADD'
  state:boolean=false

  constructor(private fb: FormBuilder, private auth: AuthguardService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.profileForm= this.fb.group({
      title: ['', Validators.required],
      des: ['', Validators.required],
      price: ['', Validators.required],
      img: ['', Validators.required]


    })
    this.getproduct()
  }
  get title() {
    return this.profileForm.get('title')
  }
  get des() {
    return this.profileForm.get('des')
  }
  get price() {
    return this.profileForm.get('price')
  }
  get img() {
    return this.profileForm.get('img')
  }
  getproduct() {
    this.auth.getProduct().subscribe((res: any) => {
      this.productitem = res
    })

  }
  Submit() {
    const payload = {
      title: this.profileForm.value.title,
      des: this.profileForm.value.des,
      price: this.profileForm.value.price,
      img: this.profileForm.value.img
    }
    this.auth.createProduct(payload)
    this.profileForm.reset()
    this.toastr.success("Product Added Successfully")
  }

  deleteItem(payload: any) {this.auth.deletePost(payload)
    this.toastr.info("Product deleted Successfully")}
  populate(val:any){
    this.state=true
    this.value='UPDATE'
    this.profileForm.get("title")?.setValue(val.title);
    this.profileForm.get("des")?.setValue(val.des);
    this.profileForm.get("price")?.setValue(val.price);
  }
  Update(postdata:Data):void{
    // const paylod={
    //   title:postdata.value.title,
    //   des:postdata.value.des,
    //   price:postdata.value.price,
    // }
    this.auth.UpdatePost(postdata)
    this.profileForm.reset()
    this.value='Add'
    this.state=false;
    this.profileForm.reset()
}
close(){
  this.profileForm.reset()
}

}
