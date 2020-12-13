import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'past-activities',
    loadChildren: () => import('./pages/past-activities/past-activities.module').then( m => m.PastActivitiesPageModule)
  },
  {
    path: 'upcoming-activities',
    loadChildren: () => import('./pages/upcoming-activities/upcoming-activities.module').then( m => m.UpcomingActivitiesPageModule)
  },
  {
    path: 'new-activity',
    loadChildren: () => import('./pages/new-activity/new-activity.module').then( m => m.NewActivityPageModule)
  },
  {
    path: 'rewards',
    loadChildren: () => import('./pages/rewards/rewards.module').then( m => m.RewardsPageModule)
  },
  {
    path: 'edit-activity/:index',
    loadChildren: () => import('./pages/edit-activity/edit-activity.module').then( m => m.EditActivityPageModule)
  },
  {
    path: 'redemption',
    loadChildren: () => import('./pages/redemption/redemption.module').then( m => m.RedemptionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
