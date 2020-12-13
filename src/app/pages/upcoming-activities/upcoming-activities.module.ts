import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingActivitiesPageRoutingModule } from './upcoming-activities-routing.module';

import { UpcomingActivitiesPage } from './upcoming-activities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingActivitiesPageRoutingModule
  ],
  declarations: [UpcomingActivitiesPage]
})
export class UpcomingActivitiesPageModule {}
