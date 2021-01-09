import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SugestaoAduboPageRoutingModule } from './sugestao-adubo-routing.module';

import { SugestaoAduboPage } from './sugestao-adubo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SugestaoAduboPageRoutingModule
  ],
  declarations: [SugestaoAduboPage]
})
export class SugestaoAduboPageModule {}
