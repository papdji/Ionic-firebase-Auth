import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReInistialisationPageRoutingModule } from './re-inistialisation-routing.module';

import { ReInistialisationPage } from './re-inistialisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReInistialisationPageRoutingModule
  ],
  declarations: [ReInistialisationPage]
})
export class ReInistialisationPageModule {}
