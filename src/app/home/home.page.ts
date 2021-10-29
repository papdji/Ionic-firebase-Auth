import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  itemsCollect: AngularFirestoreCollection; //la collection dans la firebase//
  items: Observable<any[]>;

  constructor(public fire: AngularFirestore, public auth: AngularFireAuth, public route: Router) {}

  ngOnInit(){
    this.getData();
    this.auth.authState.subscribe(auth =>{
      if(!auth){
        this.route.navigate(['login']);
      }
    });
  }
  async getData(){
    this.itemsCollect = this.fire.collection('user');
    this.items = this.itemsCollect.valueChanges();
  }

}
