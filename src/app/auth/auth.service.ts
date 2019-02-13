import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  canActive(){
    const {currentUser}=this.auth.auth
    if(currentUser){
      return true;
    }
    return false;
  }
  signInWithEmail(email, password){
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut(){
    return this.auth.auth.signOut();
  }

  onCanActive(){
    this.auth.auth.onAuthStateChanged(user=>{
      if(user){

      }
    })
  }

  getUer(){
    const {currentUser}=this.auth.auth;
    if(currentUser){
      const {uid,email,displayName}=currentUser;
      return{
        uid,email,displayName
      }
    }
    return null;
    
  }
}
