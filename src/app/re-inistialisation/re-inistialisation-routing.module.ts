import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReInistialisationPage } from './re-inistialisation.page';

const routes: Routes = [
  {
    path: '',
    component: ReInistialisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReInistialisationPageRoutingModule {}
