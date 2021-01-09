import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InserirdadosPage } from './inserirdados.page';

const routes: Routes = [
  {
    path: '',
    component: InserirdadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InserirdadosPageRoutingModule {}
