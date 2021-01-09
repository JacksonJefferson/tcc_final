import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdubacaoPageRoutingModule } from './adubacao-routing.module';

import { AdubacaoPage } from './adubacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdubacaoPageRoutingModule
  ],
  declarations: [AdubacaoPage]
})
export class AdubacaoPageModule {}
