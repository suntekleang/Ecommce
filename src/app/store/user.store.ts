import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { DataService } from '../services/data.service';

@Injectable()
export class User {
  @observable 
  public user;

  constructor(private ds:DataService,
    private auth:AuthService){
      this.fetchUser();
    }

  @action
  fetchUser(){
    this.user=this.auth.getUer();
  }
}