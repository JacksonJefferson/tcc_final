import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcaoCulturaPageRoutingModule } from './opcao-cultura-routing.module';

import { OpcaoCulturaPage } from './opcao-cultura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcaoCulturaPageRoutingModule
  ],
  declarations: [OpcaoCulturaPage]
})
export class OpcaoCulturaPageModule {}
