import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {FirebaseApp} from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-re-inistialisation',
  templateUrl: './re-inistialisation.page.html',
  styleUrls: ['./re-inistialisation.page.scss'],
})
export class ReInistialisationPage implements OnInit {
  user: any;
  userconect: FirebaseApp;
  constructor(public auth: AngularFireAuth, public fire: AngularFirestore,public route: Router) { }


  ngOnInit() {
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  updatePass(pass: { value: { old_pass: string; new_pass: string; conf_new: string } }){
    if(pass.value.old_pass!=='' && pass.value.new_pass!=='' && pass.value.conf_new!=='' ){
      this.auth.authState.subscribe(auth =>{
        if(auth){
          this.fire.collection('user').doc(auth.uid).valueChanges().subscribe(result => {
            this.user = result;
            if(this.user.userPassword === pass.value.old_pass){
              if(pass.value.new_pass === pass.value.new_pass){
                auth.updatePassword(pass.value.conf_new);
                this.route.navigate(['/login']);
              }else{
                console.log('le nouveau mot de passe et l\'ancien sont different');
              }
            }else {
              console.log('Changer avec succès');
            }
          });
        }else{
          console.log('non encore connecter');
        }
      });
    }else{
      console.log(' vous n\'etes pas connecter');
    }
  }
}
