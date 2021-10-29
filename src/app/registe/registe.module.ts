import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistePageRoutingModule } from './registe-routing.module';

import { RegistePage } from './registe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistePageRoutingModule
  ],
  declarations: [RegistePage]
})
export class RegistePageModule {}
