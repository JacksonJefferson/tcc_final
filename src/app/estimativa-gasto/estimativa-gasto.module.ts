import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimativaGastoPageRoutingModule } from './estimativa-gasto-routing.module';

import { EstimativaGastoPage } from './estimativa-gasto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstimativaGastoPageRoutingModule
  ],
  declarations: [EstimativaGastoPage]
})
export class EstimativaGastoPageModule {}
