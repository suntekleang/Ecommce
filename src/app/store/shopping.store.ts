import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { DataService } from '../services/data.service';

@Injectable()
export class Shopping {
  @observable 
  public data=[];
  @observable 
  public loading=false;
  @observable 
  public empty=false;
  @observable 
  public process=false;
  @observable
  public selectedCategory=null;

  constructor(private ds:DataService){}

  @action
  fetchSelectedCategory(key){
      this.process=true;
      this.ds.categoryRef().doc(key).valueChanges().subscribe(doc=>{
          this.selectedCategory=doc;
        this.process=false;
      })
  }

  @action
  fetchProduct(categoryKey){
      this.loading=true;
      this.ds.productRef(categoryKey).valueChanges().subscribe(docs=>{
          this.data=docs;
          this.empty=docs.length===0;
          this.loading=false;
      })
  }


}