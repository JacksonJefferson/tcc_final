import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InserirdadosPageRoutingModule } from './inserirdados-routing.module';

import { InserirdadosPage } from './inserirdados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InserirdadosPageRoutingModule
  ],
  declarations: [InserirdadosPage]
})
export class InserirdadosPageModule {}
