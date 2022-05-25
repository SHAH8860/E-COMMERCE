import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
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


@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  

  postcollection: AngularFirestoreCollection<Data> | any;
  posts: Observable<Data[]> | any;
  documentref:AngularFirestoreDocument<Data>|any;

  constructor(private auth:AngularFireAuth,private router:Router,private firebase:AngularFirestore) {
    this.postcollection = this.firebase.collection('detail');
    this.posts = this.postcollection.snapshotChanges().pipe(map((change: any) => {
      return change.map((ref: any) => {
        const data = ref.payload.doc.data() as Data;
        data.id = ref.payload.doc.id;
        return data
      });

    })

    )
   }
   getProduct():any{
    return this.posts
  }
  deletePost(payload:any):any{
    this.documentref=this.firebase.doc('detail/'+payload.id);
    this.documentref.delete()
    
    
  }
  createProduct(payload:any):any{
    this.postcollection.add(payload)
    
  }
  UpdatePost(payload:any):any{
    delete payload.id
    this.firebase.doc('detail/'+payload.id).update(payload);

  }
 
 
  
}
