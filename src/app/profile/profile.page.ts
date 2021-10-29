/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController } from '@ionic/angular';
import { ServiceProjectService } from 'src/app/MyServices/service-project.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public userName: any;
  public prenom: any;
  public userEmail: any;


  constructor(
    private auth: AngularFireAuth,
    private fire: AngularFirestore,
    private navCtrl: NavController,
    private route: Router,
    private log: ServiceProjectService,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.auth.authState.subscribe(auth =>{
      if(auth){
        this.fire.collection('user').doc(auth.uid).valueChanges().subscribe(result => {
          this.userName = result['userName'];
          this.prenom = result['prenom'];
          this.userEmail = result['userEmail'];
        });
      }
    });
  }
  ngOnInit() {
    this.auth.authState.subscribe(auth =>{
      if(!auth){
        this.route.navigate(['login']);
      }
    });
   }
  signOut() {
    this.log.logout();
  }
}
