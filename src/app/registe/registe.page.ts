import { Component, OnInit } from '@angular/core';
import { ServiceProjectService } from '../MyServices/service-project.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registe',
  templateUrl: './registe.page.html',
  styleUrls: ['./registe.page.scss'],
})
export class RegistePage implements OnInit {
  authService: any;
  navCtrl: any;
  constructor(public serv: ServiceProjectService,
    public create: AngularFirestore,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  async register(data: { value: { email: string; password: string; name: string; prenom: string } }){
    try {
      this.serv.registerUser(data.value.email, data.value.password).then(response =>{
        console.log(response);
        this.create.collection('user').doc(response.user.uid).set({
          userName: data.value.name,
          userEmail: data.value.email,
          prenom: data.value.prenom,
          createDate: Date.now()
        });
        data.value.name='';
        data.value.email='';
        data.value.prenom='';
        data.value.password='';
      }
    );
    }catch (error){}
  }
  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      });
  }

}
