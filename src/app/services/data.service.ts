import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db:AngularFirestore) { }

  categoryRef(){
    return this.db.collection("category");
  }

  productef(){
    return this.db.collection("products");
  }
  productRef(categoryKey?){
    if(categoryKey){
      return this.db.collection("products",ref=>ref
      .where("category.key","==",categoryKey)
      .orderBy("name")
      )
    }
    return this.db.collection("products");
  }

}
