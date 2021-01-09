import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcaoCulturaPage } from './opcao-cultura.page';

const routes: Routes = [
  {
    path: '',
    component: OpcaoCulturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcaoCulturaPageRoutingModule {}
