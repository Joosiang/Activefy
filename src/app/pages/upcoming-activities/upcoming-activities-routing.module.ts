import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingActivitiesPage } from './upcoming-activities.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingActivitiesPageRoutingModule {}
