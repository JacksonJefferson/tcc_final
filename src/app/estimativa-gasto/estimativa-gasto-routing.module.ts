import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimativaGastoPage } from './estimativa-gasto.page';

const routes: Routes = [
  {
    path: '',
    component: EstimativaGastoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstimativaGastoPageRoutingModule {}
