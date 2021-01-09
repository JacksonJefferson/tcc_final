import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SugestaoAduboPage } from './sugestao-adubo.page';

const routes: Routes = [
  {
    path: '',
    component: SugestaoAduboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SugestaoAduboPageRoutingModule {}
