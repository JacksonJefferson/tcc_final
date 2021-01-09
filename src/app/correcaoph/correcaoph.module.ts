import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrecaophPageRoutingModule } from './correcaoph-routing.module';

import { CorrecaophPage } from './correcaoph.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrecaophPageRoutingModule
  ],
  declarations: [CorrecaophPage]
})
export class CorrecaophPageModule {}
