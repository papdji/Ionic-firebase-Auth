import { Component, OnInit } from '@angular/core';
import { ServiceProjectService } from '../MyServices/service-project.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public log: ServiceProjectService, public route: Router,
    private auth: AngularFireAuth) { }

  ngOnInit() {
    this.auth.authState.subscribe(auth =>{
      if(!auth){
        this.route.navigate(['login']);
      }
    });
  }

  loginUser(data: any)
  {
    try {
      this.log.login(data.value.email, data.value.password).then(
      res=>{
        this.route.navigate(['/home']);
      });
    } catch (error) {
      console.log(error);
    }
  }

  oublier(){
    this.route.navigate(['oublier']);
  }
}
