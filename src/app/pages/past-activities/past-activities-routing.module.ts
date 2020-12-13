import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastActivitiesPage } from './past-activities.page';

const routes: Routes = [
  {
    path: '',
    component: PastActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastActivitiesPageRoutingModule {}
