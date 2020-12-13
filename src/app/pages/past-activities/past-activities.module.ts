import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastActivitiesPageRoutingModule } from './past-activities-routing.module';

import { PastActivitiesPage } from './past-activities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastActivitiesPageRoutingModule
  ],
  declarations: [PastActivitiesPage]
})
export class PastActivitiesPageModule {}
