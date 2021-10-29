import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ServiceProjectService {
  route: any;

  constructor(public auth: AngularFireAuth) { }

  login(email, password){
    return new Promise<any>((resolve,reject)=>{
      this.auth.signInWithEmailAndPassword(email, password).then(
        res=>resolve(res),
        err=>reject(err)
      );
    });
  }
  registerUser(email: string, password: string){
    return new Promise<any>((resolve,reject)=>{
      this.auth.createUserWithEmailAndPassword(email, password).then(
        res=>resolve(res),
        err=>reject(err)
      );
    });

  }
  logout() {
    this.auth.signOut();
  }

  userDetails() {
    return this.auth.user;
  }

}
