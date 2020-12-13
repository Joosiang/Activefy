import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedemptionPageRoutingModule } from './redemption-routing.module';

import { RedemptionPage } from './redemption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedemptionPageRoutingModule
  ],
  declarations: [RedemptionPage]
})
export class RedemptionPageModule {}
