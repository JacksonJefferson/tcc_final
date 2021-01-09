import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrecaophPage } from './correcaoph.page';

const routes: Routes = [
  {
    path: '',
    component: CorrecaophPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrecaophPageRoutingModule {}
