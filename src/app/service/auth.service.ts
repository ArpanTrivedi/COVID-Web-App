import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { }

  //for signup
  signup(email:string,password:string){
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  //for signin
  signin(email:string,password:string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  //for the current user
  getUser()
  {
    return this.auth.authState;
  }

  //for signout
  signout(){
    return this.auth.signOut();
  }


  signInWithGoogle(provider) {
    return this.auth.signInWithPopup(provider);
  }

}
